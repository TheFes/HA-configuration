"""The Overkiz (by Somfy) integration."""
import asyncio
from collections import defaultdict
import logging

from aiohttp import ClientError, ServerDisconnectedError
from homeassistant.components.scene import DOMAIN as SCENE
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_PASSWORD, CONF_USERNAME
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import ConfigEntryAuthFailed, ConfigEntryNotReady
from homeassistant.helpers import (
    config_validation as cv,
    device_registry as dr,
    service,
)
from homeassistant.helpers.aiohttp_client import async_create_clientsession
from pyoverkiz.client import OverkizClient
from pyoverkiz.const import SUPPORTED_SERVERS
from pyoverkiz.exceptions import (
    BadCredentialsException,
    InvalidCommandException,
    MaintenanceException,
    TooManyRequestsException,
)
from pyoverkiz.models import Command, Device
import voluptuous as vol

from .const import (
    CONF_HUB,
    DOMAIN,
    IGNORED_OVERKIZ_DEVICES,
    OVERKIZ_DEVICE_TO_PLATFORM,
    SUPPORTED_PLATFORMS,
    UPDATE_INTERVAL,
    UPDATE_INTERVAL_ALL_ASSUMED_STATE,
)
from .coordinator import OverkizDataUpdateCoordinator

_LOGGER = logging.getLogger(__name__)

SERVICE_EXECUTE_COMMAND = "execute_command"


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Overkiz from a config entry."""
    username = entry.data[CONF_USERNAME]
    password = entry.data[CONF_PASSWORD]
    server = SUPPORTED_SERVERS[entry.data[CONF_HUB]]

    # To allow users with multiple accounts/hubs, we create a new session so they have separate cookies
    session = async_create_clientsession(hass)
    client = OverkizClient(
        username=username, password=password, session=session, server=server
    )

    try:
        await client.login()

        tasks = [
            client.get_setup(),
            client.get_scenarios(),
        ]
        setup, scenarios = await asyncio.gather(*tasks)
    except BadCredentialsException as exception:
        raise ConfigEntryAuthFailed from exception
    except TooManyRequestsException as exception:
        raise ConfigEntryNotReady("Too many requests, try again later") from exception
    except (TimeoutError, ClientError, ServerDisconnectedError) as exception:
        raise ConfigEntryNotReady("Failed to connect") from exception
    except MaintenanceException as exception:
        raise ConfigEntryNotReady("Server is down for maintenance") from exception
    except Exception as exception:  # pylint: disable=broad-except
        _LOGGER.exception(exception)
        return False

    coordinator = OverkizDataUpdateCoordinator(
        hass,
        _LOGGER,
        name="device events",
        client=client,
        devices=setup.devices,
        places=setup.root_place,
        update_interval=UPDATE_INTERVAL,
        config_entry_id=entry.entry_id,
    )

    await coordinator.async_config_entry_first_refresh()

    if coordinator.is_stateless:
        _LOGGER.debug(
            "All devices have assumed state. Update interval has been reduced to: %s",
            UPDATE_INTERVAL_ALL_ASSUMED_STATE,
        )
        coordinator.update_interval = UPDATE_INTERVAL_ALL_ASSUMED_STATE

    platforms = defaultdict(list)
    platforms[SCENE] = scenarios

    hass.data.setdefault(DOMAIN, {})[entry.entry_id] = {
        "platforms": platforms,
        "coordinator": coordinator,
    }

    # Map Overkiz device to Home Assistant platform
    for device in coordinator.data.values():
        platform = OVERKIZ_DEVICE_TO_PLATFORM.get(
            device.widget
        ) or OVERKIZ_DEVICE_TO_PLATFORM.get(device.ui_class)
        if platform:
            platforms[platform].append(device)
            log_device("Added device", device)
        elif (
            device.widget not in IGNORED_OVERKIZ_DEVICES
            and device.ui_class not in IGNORED_OVERKIZ_DEVICES
        ):
            log_device("Unsupported device detected", device)

    hass.config_entries.async_setup_platforms(entry, SUPPORTED_PLATFORMS)

    device_registry = await dr.async_get_registry(hass)

    for gateway in setup.gateways:
        _LOGGER.debug("Added gateway (%s)", gateway)

        device_registry.async_get_or_create(
            config_entry_id=entry.entry_id,
            identifiers={(DOMAIN, gateway.id)},
            model=gateway.sub_type.beautify_name if gateway.sub_type else None,
            manufacturer=server.manufacturer,
            name=gateway.type.beautify_name,
            sw_version=gateway.connectivity.protocol_version,
            configuration_url=server.configuration_url,
        )

    async def handle_execute_command(call: ServiceCall):
        """Handle execute command service."""
        entity_registry = await hass.helpers.entity_registry.async_get_registry()

        for entity_id in call.data.get("entity_id"):
            entity = entity_registry.entities.get(entity_id)

            try:
                await coordinator.client.execute_command(
                    entity.unique_id,
                    Command(call.data.get("command"), call.data.get("args")),
                    "Home Assistant Service",
                )
            except InvalidCommandException as exception:
                _LOGGER.error(exception)

    service.async_register_admin_service(
        hass,
        DOMAIN,
        SERVICE_EXECUTE_COMMAND,
        handle_execute_command,
        vol.Schema(
            {
                vol.Required("entity_id"): [cv.entity_id],
                vol.Required("command"): cv.string,
                vol.Optional("args", default=[]): vol.All(
                    cv.ensure_list, [vol.Any(str, int)]
                ),
            },
        ),
    )

    async def handle_get_execution_history(call):
        """Handle get execution history service."""
        await write_execution_history_to_log(coordinator.client)

    service.async_register_admin_service(
        hass,
        DOMAIN,
        "get_execution_history",
        handle_get_execution_history,
    )

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""

    unload_ok = await hass.config_entries.async_unload_platforms(
        entry, SUPPORTED_PLATFORMS
    )

    if unload_ok:
        hass.data[DOMAIN].pop(entry.entry_id)

    return unload_ok


async def write_execution_history_to_log(client: OverkizClient):
    """Retrieve execution history and write output to log."""
    history = await client.get_execution_history()

    for item in history:
        _LOGGER.info(item)


def log_device(message: str, device: Device) -> None:
    """Log device information."""
    _LOGGER.debug("%s (%s)", message, device)
