"""Support for Atlantic Pass APC Heating And Cooling Zone."""
import logging
from typing import Optional

from homeassistant.components.climate import SUPPORT_TARGET_TEMPERATURE, ClimateEntity
from homeassistant.components.climate.const import (
    HVAC_MODE_AUTO,
    HVAC_MODE_HEAT,
    HVAC_MODE_OFF,
)
from homeassistant.const import (
    ATTR_TEMPERATURE,
    EVENT_HOMEASSISTANT_START,
    STATE_UNAVAILABLE,
    STATE_UNKNOWN,
    TEMP_CELSIUS,
)
from homeassistant.core import callback
from homeassistant.helpers.event import async_track_state_change

from ..coordinator import OverkizDataUpdateCoordinator
from ..entity import OverkizEntity

_LOGGER = logging.getLogger(__name__)

COMMAND_REFRESH_PASS_APC_HEATING_PROFILE = "refreshPassAPCHeatingProfile"
COMMAND_REFRESH_TARGET_TEMPERATURE = "refreshTargetTemperature"
COMMAND_SET_HEATING_LEVEL = "setHeatingLevel"
COMMAND_SET_HEATING_ON_OFF_STATE = "setHeatingOnOffState"
COMMAND_SET_HEATING_TARGET_TEMPERATURE = "setHeatingTargetTemperature"
COMMAND_SET_OPERATING_MODE = "setOperatingMode"
COMMAND_SET_PASS_APC_HEATING_MODE = "setPassAPCHeatingMode"
COMMAND_SET_TARGET_TEMPERATURE = "setTargetTemperature"

CORE_HEATING_ON_OFF_STATE = "core:HeatingOnOffState"
CORE_HEATING_TARGET_TEMPERATURE_STATE = "core:HeatingTargetTemperatureState"
CORE_MINIMUM_HEATING_TARGET_TEMPERATURE_STATE = (
    "core:MinimumHeatingTargetTemperatureState"
)
CORE_MAXIMUM_HEATING_TARGET_TEMPERATURE_STATE = (
    "core:MaximumHeatingTargetTemperatureState"
)
CORE_ON_OFF_STATE = "core:OnOffState"
CORE_OPERATING_MODE_STATE = "core:OperatingModeState"
CORE_TARGET_TEMPERATURE_STATE = "core:TargetTemperatureState"

IO_PASS_APC_HEATING_MODE_STATE = "io:PassAPCHeatingModeState"
IO_TARGET_HEATING_LEVEL_STATE = "io:TargetHeatingLevelState"

# Map TaHoma HVAC modes to Home Assistant HVAC modes
TAHOMA_TO_HVAC_MODE = {
    "stop": HVAC_MODE_OFF,  # fallback
    "off": HVAC_MODE_OFF,
    "manu": HVAC_MODE_HEAT,
    "auto": HVAC_MODE_AUTO,  # fallback
    "internalScheduling": HVAC_MODE_AUTO,  # prog
}

HVAC_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_HVAC_MODE.items()}


class AtlanticPassAPCHeatingAndCoolingZone(OverkizEntity, ClimateEntity):
    """Representation of Atlantic Pass APC Heating and Cooling Zone."""

    _attr_hvac_modes = [*HVAC_MODE_TO_TAHOMA]
    _attr_supported_features = SUPPORT_TARGET_TEMPERATURE
    _attr_temperature_unit = TEMP_CELSIUS

    def __init__(self, device_url: str, coordinator: OverkizDataUpdateCoordinator):
        """Init method."""
        super().__init__(device_url, coordinator)

        self._temp_sensor_entity_id = None
        self._current_temperature = None

    async def async_added_to_hass(self):
        """Register temperature sensor after added to hass."""
        await super().async_added_to_hass()

        entity_registry = await self.hass.helpers.entity_registry.async_get_registry()

        # The linked temperature sensor uses subsystem_id + 1
        new_subsystem_id = int(self.device_url.split("#", 1)[1]) + 1

        self._temp_sensor_entity_id = next(
            (
                entity_id
                for entity_id, entry in entity_registry.entities.items()
                if entry.unique_id
                == f"{self.base_device_url}#{str(new_subsystem_id)}-core:TemperatureState"
            ),
            None,
        )

        if self._temp_sensor_entity_id:
            async_track_state_change(
                self.hass, self._temp_sensor_entity_id, self._async_temp_sensor_changed
            )

        else:
            _LOGGER.warning(
                "Temperature sensor could not be found for entity %s", self.name
            )

        @callback
        def _async_startup(event):
            """Init on startup."""
            if self._temp_sensor_entity_id:
                temp_sensor_state = self.hass.states.get(self._temp_sensor_entity_id)
                if temp_sensor_state and temp_sensor_state.state != STATE_UNKNOWN:
                    self.update_temp(temp_sensor_state)

        self.hass.bus.async_listen_once(EVENT_HOMEASSISTANT_START, _async_startup)

        self.schedule_update_ha_state(True)

    async def _async_temp_sensor_changed(self, entity_id, old_state, new_state) -> None:
        """Handle temperature changes."""
        if new_state is None or old_state == new_state:
            return

        self.update_temp(new_state)
        self.schedule_update_ha_state()

    @callback
    def update_temp(self, state):
        """Update thermostat with latest state from sensor."""
        if state is None or state.state in [STATE_UNKNOWN, STATE_UNAVAILABLE]:
            return

        try:
            self._current_temperature = float(state.state)
        except ValueError as ex:
            _LOGGER.error("Unable to update from sensor: %s", ex)

    @property
    def min_temp(self) -> float:
        """Return the minimum temperature."""
        return self.executor.select_state(CORE_MINIMUM_HEATING_TARGET_TEMPERATURE_STATE)

    @property
    def max_temp(self) -> float:
        """Return the maximum temperature."""
        return self.executor.select_state(CORE_MAXIMUM_HEATING_TARGET_TEMPERATURE_STATE)

    @property
    def current_temperature(self) -> Optional[float]:
        """Return the current temperature."""
        return self._current_temperature

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""

        if self.executor.select_state(CORE_HEATING_ON_OFF_STATE) == "off":
            return HVAC_MODE_OFF

        return TAHOMA_TO_HVAC_MODE[
            self.executor.select_state(IO_PASS_APC_HEATING_MODE_STATE)
        ]

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""

        if hvac_mode == HVAC_MODE_OFF:
            await self.executor.async_execute_command(
                COMMAND_SET_HEATING_ON_OFF_STATE, "off"
            )
        else:
            if self.hvac_mode == HVAC_MODE_OFF:
                await self.executor.async_execute_command(
                    COMMAND_SET_HEATING_ON_OFF_STATE, "on"
                )

            await self.executor.async_execute_command(
                COMMAND_SET_PASS_APC_HEATING_MODE, HVAC_MODE_TO_TAHOMA[hvac_mode]
            )

        await self.executor.async_execute_command(
            COMMAND_REFRESH_PASS_APC_HEATING_PROFILE
        )

    @property
    def target_temperature(self) -> None:
        """Return the temperature."""
        return self.executor.select_state(CORE_HEATING_TARGET_TEMPERATURE_STATE)

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)

        await self.executor.async_execute_command(
            COMMAND_SET_HEATING_TARGET_TEMPERATURE, temperature
        )
        await self.executor.async_execute_command(COMMAND_REFRESH_TARGET_TEMPERATURE)
