"""Helpers to help coordinate updates."""
from datetime import timedelta
import json
import logging
from typing import Any, Dict, List, Optional, Union

from aiohttp import ServerDisconnectedError
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ConfigEntryAuthFailed
from homeassistant.helpers import device_registry
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed
from pyhoma.client import TahomaClient
from pyhoma.enums import EventName, ExecutionState
from pyhoma.exceptions import (
    BadCredentialsException,
    MaintenanceException,
    NotAuthenticatedException,
    TooManyRequestsException,
)
from pyhoma.models import DataType, Device, Place, State

from .const import DOMAIN, UPDATE_INTERVAL

TYPES = {
    DataType.NONE: None,
    DataType.INTEGER: int,
    DataType.DATE: int,
    DataType.STRING: str,
    DataType.FLOAT: float,
    DataType.BOOLEAN: bool,
    DataType.JSON_ARRAY: json.loads,
    DataType.JSON_OBJECT: json.loads,
}

_LOGGER = logging.getLogger(__name__)


class OverkizDataUpdateCoordinator(DataUpdateCoordinator):
    """Class to manage fetching data from Overkiz platform."""

    def __init__(
        self,
        hass: HomeAssistant,
        logger: logging.Logger,
        *,
        name: str,
        client: TahomaClient,
        devices: List[Device],
        places: Place,
        update_interval: Optional[timedelta] = None,
        config_entry_id: str,
    ):
        """Initialize global data updater."""
        super().__init__(
            hass,
            logger,
            name=name,
            update_interval=update_interval,
        )

        self.data = {}
        self.client = client
        self.devices: Dict[str, Device] = {d.device_url: d for d in devices}
        self.is_stateless = all(
            device.device_url.startswith("rts://")
            or device.device_url.startswith("internal://")
            for device in devices
        )
        self.executions: Dict[str, Dict[str, str]] = {}
        self.areas = self.places_to_area(places)
        self._config_entry_id = config_entry_id

    async def _async_update_data(self) -> Dict[str, Device]:
        """Fetch Overkiz data via event listener."""
        try:
            events = await self.client.fetch_events()
        except BadCredentialsException as exception:
            raise ConfigEntryAuthFailed() from exception
        except TooManyRequestsException as exception:
            raise UpdateFailed("Too many requests, try again later.") from exception
        except MaintenanceException as exception:
            raise UpdateFailed("Server is down for maintenance.") from exception
        except TimeoutError as exception:
            raise UpdateFailed("Failed to connect.") from exception
        except (ServerDisconnectedError, NotAuthenticatedException):
            self.executions = {}

            # During the relogin, similar exceptions can be thrown.
            try:
                await self.client.login()
                self.devices = await self._get_devices()
            except BadCredentialsException as exception:
                raise ConfigEntryAuthFailed() from exception
            except TooManyRequestsException as exception:
                raise UpdateFailed("Too many requests, try again later.") from exception

            return self.devices
        except Exception as exception:
            _LOGGER.debug(exception)
            raise UpdateFailed(exception) from exception

        for event in events:
            _LOGGER.debug(event)

            if event.name == EventName.DEVICE_AVAILABLE:
                self.devices[event.device_url].available = True

            elif event.name in [
                EventName.DEVICE_UNAVAILABLE,
                EventName.DEVICE_DISABLED,
            ]:
                self.devices[event.device_url].available = False

            elif event.name in [
                EventName.DEVICE_CREATED,
                EventName.DEVICE_UPDATED,
            ]:
                self.hass.async_create_task(
                    self.hass.config_entries.async_reload(self._config_entry_id)
                )
                return None

            elif event.name == EventName.DEVICE_REMOVED:
                base_device_url, *_ = event.device_url.split("#")
                registry = await device_registry.async_get_registry(self.hass)

                if device := registry.async_get_device({(DOMAIN, base_device_url)}):
                    registry.async_remove_device(device.id)

                del self.devices[event.device_url]

            elif event.name == EventName.DEVICE_STATE_CHANGED:
                for state in event.device_states:
                    device = self.devices[event.device_url]
                    if state.name not in device.states:
                        device.states[state.name] = state
                    device.states[state.name].value = self._get_state(state)

            elif event.name == EventName.EXECUTION_REGISTERED:
                if event.exec_id not in self.executions:
                    self.executions[event.exec_id] = {}

                if not self.is_stateless:
                    self.update_interval = timedelta(seconds=1)

            elif (
                event.name == EventName.EXECUTION_STATE_CHANGED
                and event.exec_id in self.executions
                and event.new_state in [ExecutionState.COMPLETED, ExecutionState.FAILED]
            ):
                del self.executions[event.exec_id]

            # Log errors via `overkiz_event`
            if event.failure_type_code:
                self.hass.bus.fire(
                    "overkiz.event",
                    {
                        "event_name": event.name.value,
                        "failure_type_code": event.failure_type_code.value,
                        "failure_type": event.failure_type,
                    },
                )

        if not self.executions:
            self.update_interval = UPDATE_INTERVAL

        return self.devices

    async def _get_devices(self) -> Dict[str, Device]:
        """Fetch devices."""
        _LOGGER.debug("Fetching all devices and state via /setup/devices")
        return {d.device_url: d for d in await self.client.get_devices(refresh=True)}

    @staticmethod
    def _get_state(
        state: State,
    ) -> Union[Dict[Any, Any], List[Any], float, int, bool, str, None]:
        """Cast string value to the right type."""
        if state.type != DataType.NONE:
            caster = TYPES.get(DataType(state.type))
            return caster(state.value)
        return state.value

    def places_to_area(self, place):
        """Convert places with sub_places to a flat dictionary."""
        areas = {}
        if isinstance(place, Place):
            areas[place.oid] = place.label

        if isinstance(place.sub_places, list):
            for sub_place in place.sub_places:
                areas.update(self.places_to_area(sub_place))

        return areas
