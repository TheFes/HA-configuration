"""Support for Atlantic Electrical Towel Dryer."""
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
    PRESET_NONE,
)
from homeassistant.const import ATTR_TEMPERATURE, TEMP_CELSIUS

from ..entity import OverkizEntity

COMMAND_SET_TARGET_TEMPERATURE = "setTargetTemperature"
COMMAND_SET_DEROGATED_TARGET_TEMPERATURE = "setDerogatedTargetTemperature"
COMMAND_SET_TOWEL_DRYER_OPERATING_MODE = "setTowelDryerOperatingMode"
COMMAND_SET_TOWEL_DRYER_TEMPORARY_STATE = "setTowelDryerTemporaryState"

CORE_COMFORT_ROOM_TEMPERATURE_STATE = "core:ComfortRoomTemperatureState"
CORE_OPERATING_MODE_STATE = "core:OperatingModeState"
CORE_TARGET_TEMPERATURE_STATE = "core:TargetTemperatureState"
CORE_ON_OFF_STATE = "core:OnOffState"
IO_TARGET_HEATING_LEVEL_STATE = "io:TargetHeatingLevelState"
IO_TOWEL_DRYER_TEMPORARY_STATE_STATE = "io:TowelDryerTemporaryStateState"
IO_EFFECTIVE_TEMPERATURE_SETPOINT_STATE = "io:EffectiveTemperatureSetpointState"

PRESET_BOOST = "boost"
PRESET_DRYING = "drying"
PRESET_FROST_PROTECTION = "frost_protection"

PRESET_STATE_FROST_PROTECTION = "frostprotection"
PRESET_STATE_OFF = "off"
PRESET_STATE_ECO = "eco"
PRESET_STATE_BOOST = "boost"
PRESET_STATE_COMFORT = "comfort"
PRESET_STATE_COMFORT1 = "comfort-1"
PRESET_STATE_COMFORT2 = "comfort-2"

# Map Home Assistant presets to TaHoma presets
PRESET_MODE_TO_TAHOMA = {
    PRESET_BOOST: "boost",
    PRESET_DRYING: "drying",
    PRESET_NONE: "permanentHeating",
}

TAHOMA_TO_PRESET_MODE = {v: k for k, v in PRESET_MODE_TO_TAHOMA.items()}

# Map TaHoma HVAC modes to Home Assistant HVAC modes
TAHOMA_TO_HVAC_MODE = {
    "external": HVAC_MODE_HEAT,  # manu
    "standby": HVAC_MODE_OFF,
    "internal": HVAC_MODE_AUTO,  # prog
}

HVAC_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_HVAC_MODE.items()}


class AtlanticElectricalTowelDryer(OverkizEntity, ClimateEntity):
    """Representation of Atlantic Electrical Towel Dryer."""

    _attr_hvac_modes = [*HVAC_MODE_TO_TAHOMA]
    _attr_preset_modes = [*PRESET_MODE_TO_TAHOMA]
    _attr_supported_features = SUPPORT_PRESET_MODE | SUPPORT_TARGET_TEMPERATURE
    _attr_temperature_unit = TEMP_CELSIUS

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
        await self.executor.async_execute_command(
            COMMAND_SET_TOWEL_DRYER_OPERATING_MODE, HVAC_MODE_TO_TAHOMA[hvac_mode]
        )

    @property
    def preset_mode(self) -> Optional[str]:
        """Return the current preset mode, e.g., home, away, temp."""
        return TAHOMA_TO_PRESET_MODE[
            self.executor.select_state(IO_TOWEL_DRYER_TEMPORARY_STATE_STATE)
        ]

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set new preset mode."""
        await self.executor.async_execute_command(
            COMMAND_SET_TOWEL_DRYER_TEMPORARY_STATE, PRESET_MODE_TO_TAHOMA[preset_mode]
        )

    @property
    def target_temperature(self) -> None:
        """Return the temperature."""
        if self.hvac_mode == HVAC_MODE_AUTO:
            return self.executor.select_state(IO_EFFECTIVE_TEMPERATURE_SETPOINT_STATE)
        else:
            return self.executor.select_state(CORE_TARGET_TEMPERATURE_STATE)

    @property
    def current_temperature(self):
        """Return current temperature."""
        return self.executor.select_state(CORE_COMFORT_ROOM_TEMPERATURE_STATE)

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)

        if self.hvac_mode == HVAC_MODE_AUTO:
            await self.executor.async_execute_command(
                COMMAND_SET_DEROGATED_TARGET_TEMPERATURE, temperature
            )
        else:
            await self.executor.async_execute_command(
                COMMAND_SET_TARGET_TEMPERATURE, temperature
            )
