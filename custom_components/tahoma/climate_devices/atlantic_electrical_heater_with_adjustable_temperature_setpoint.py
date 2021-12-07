"""Support for Atlantic Electrical Heater (With Adjustable Temperature Setpoint)."""
import logging
from typing import Optional

from homeassistant.components.climate import (
    SUPPORT_PRESET_MODE,
    SUPPORT_TARGET_TEMPERATURE,
    ClimateEntity,
)
from homeassistant.components.climate.const import (
    HVAC_MODE_AUTO,
    HVAC_MODE_HEAT,
    HVAC_MODE_OFF,
    PRESET_BOOST,
    PRESET_COMFORT,
    PRESET_ECO,
    PRESET_NONE,
)
from homeassistant.const import (
    ATTR_TEMPERATURE,
    EVENT_HOMEASSISTANT_START,
    STATE_UNKNOWN,
    TEMP_CELSIUS,
)
from homeassistant.core import callback
from homeassistant.helpers.event import async_track_state_change

from ..coordinator import OverkizDataUpdateCoordinator
from ..entity import OverkizEntity

_LOGGER = logging.getLogger(__name__)

COMMAND_SET_HEATING_LEVEL = "setHeatingLevel"
COMMAND_SET_TARGET_TEMPERATURE = "setTargetTemperature"
COMMAND_SET_OPERATING_MODE = "setOperatingMode"
COMMAND_OFF = "off"

CORE_OPERATING_MODE_STATE = "core:OperatingModeState"
CORE_TARGET_TEMPERATURE_STATE = "core:TargetTemperatureState"
CORE_ON_OFF_STATE = "core:OnOffState"
IO_TARGET_HEATING_LEVEL_STATE = "io:TargetHeatingLevelState"

PRESET_AUTO = "auto"
PRESET_COMFORT1 = "comfort-1"
PRESET_COMFORT2 = "comfort-2"
PRESET_FROST_PROTECTION = "frost_protection"
PRESET_PROG = "prog"

PRESET_STATE_ECO = "eco"
PRESET_STATE_BOOST = "boost"
PRESET_STATE_COMFORT = "comfort"


# Map TaHoma presets to Home Assistant presets
TAHOMA_TO_PRESET_MODE = {
    "off": PRESET_NONE,
    "frostprotection": PRESET_FROST_PROTECTION,
    "eco": PRESET_ECO,
    "comfort": PRESET_COMFORT,
    "comfort-1": PRESET_COMFORT1,
    "comfort-2": PRESET_COMFORT2,
    "auto": PRESET_AUTO,
    "boost": PRESET_BOOST,
    "internal": PRESET_PROG,
}

PRESET_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_PRESET_MODE.items()}

# Map TaHoma HVAC modes to Home Assistant HVAC modes
TAHOMA_TO_HVAC_MODE = {
    "on": HVAC_MODE_HEAT,
    "off": HVAC_MODE_OFF,
    "auto": HVAC_MODE_AUTO,
    "basic": HVAC_MODE_HEAT,
    "standby": HVAC_MODE_OFF,
    "internal": HVAC_MODE_AUTO,
}

HVAC_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_HVAC_MODE.items()}


class AtlanticElectricalHeaterWithAdjustableTemperatureSetpoint(
    OverkizEntity, ClimateEntity
):
    """Representation of Atlantic Electrical Heater (With Adjustable Temperature Setpoint)."""

    _attr_hvac_modes = [*HVAC_MODE_TO_TAHOMA]
    _attr_preset_modes = [*PRESET_MODE_TO_TAHOMA]
    _attr_temperature_unit = TEMP_CELSIUS

    def __init__(self, device_url: str, coordinator: OverkizDataUpdateCoordinator):
        """Init method."""
        super().__init__(device_url, coordinator)

        self._temp_sensor_entity_id = None
        self._current_temperature = None

    async def async_added_to_hass(self):
        """Register temperature sensor after added to hass."""
        await super().async_added_to_hass()

        # Only the AtlanticElectricarHeater WithAdjustableTemperatureSetpoint has a separate temperature sensor
        if (
            self.device.widget
            != "AtlanticElectricalHeaterWithAdjustableTemperatureSetpoint"
        ):
            return

        entity_registry = await self.hass.helpers.entity_registry.async_get_registry()
        self._temp_sensor_entity_id = next(
            (
                entity_id
                for entity_id, entry in entity_registry.entities.items()
                if entry.unique_id == f"{self.base_device_url}#2-core:TemperatureState"
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
        if state is None or state.state == STATE_UNKNOWN:
            return

        try:
            self._current_temperature = float(state.state)
        except ValueError as ex:
            _LOGGER.error("Unable to update from sensor: %s", ex)

    @property
    def supported_features(self) -> int:
        """Return the list of supported features."""
        supported_features = 0

        if self.executor.has_command(COMMAND_SET_HEATING_LEVEL):
            supported_features |= SUPPORT_PRESET_MODE

        if self.executor.has_command(COMMAND_SET_TARGET_TEMPERATURE):
            supported_features |= SUPPORT_TARGET_TEMPERATURE

        return supported_features

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""
        if CORE_OPERATING_MODE_STATE in self.device.states:
            return TAHOMA_TO_HVAC_MODE[
                self.executor.select_state(CORE_OPERATING_MODE_STATE)
            ]
        if CORE_ON_OFF_STATE in self.device.states:
            return TAHOMA_TO_HVAC_MODE[self.executor.select_state(CORE_ON_OFF_STATE)]

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        if CORE_OPERATING_MODE_STATE in self.device.states:
            await self.executor.async_execute_command(
                COMMAND_SET_OPERATING_MODE, HVAC_MODE_TO_TAHOMA[hvac_mode]
            )
        else:
            if hvac_mode == HVAC_MODE_OFF:
                await self.executor.async_execute_command(
                    COMMAND_OFF,
                )
            else:
                await self.executor.async_execute_command(
                    COMMAND_SET_HEATING_LEVEL, PRESET_STATE_COMFORT
                )

    @property
    def preset_mode(self) -> Optional[str]:
        """Return the current preset mode, e.g., home, away, temp."""
        return TAHOMA_TO_PRESET_MODE[
            self.executor.select_state(IO_TARGET_HEATING_LEVEL_STATE)
        ]

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set new preset mode."""
        if preset_mode == PRESET_AUTO or preset_mode == PRESET_PROG:
            await self.executor.async_execute_command(
                COMMAND_SET_OPERATING_MODE, PRESET_MODE_TO_TAHOMA[preset_mode]
            )
        else:
            await self.executor.async_execute_command(
                COMMAND_SET_HEATING_LEVEL, PRESET_MODE_TO_TAHOMA[preset_mode]
            )

    @property
    def target_temperature(self) -> None:
        """Return the temperature."""
        if CORE_TARGET_TEMPERATURE_STATE in self.device.states:
            return self.executor.select_state(CORE_TARGET_TEMPERATURE_STATE)

    @property
    def current_temperature(self):
        """Return current temperature."""
        return self._current_temperature

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)
        await self.executor.async_execute_command(
            COMMAND_SET_TARGET_TEMPERATURE, temperature
        )
