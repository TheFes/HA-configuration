"""Support for Atlantic Electrical Heater."""
from typing import Optional

from homeassistant.components.climate import (
    HVAC_MODE_OFF,
    SUPPORT_PRESET_MODE,
    ClimateEntity,
)
from homeassistant.components.climate.const import (
    HVAC_MODE_HEAT,
    PRESET_COMFORT,
    PRESET_ECO,
    PRESET_NONE,
)
from homeassistant.const import TEMP_CELSIUS

from ..entity import OverkizEntity

COMMAND_SET_HEATING_LEVEL = "setHeatingLevel"

CORE_ON_OFF_STATE = "core:OnOffState"
IO_TARGET_HEATING_LEVEL_STATE = "io:TargetHeatingLevelState"

PRESET_COMFORT1 = "comfort-1"
PRESET_COMFORT2 = "comfort-2"
PRESET_FROST_PROTECTION = "frost_protection"

TAHOMA_TO_PRESET_MODES = {
    "off": PRESET_NONE,
    "frostprotection": PRESET_FROST_PROTECTION,
    "eco": PRESET_ECO,
    "comfort": PRESET_COMFORT,
    "comfort-1": PRESET_COMFORT1,
    "comfort-2": PRESET_COMFORT2,
}

PRESET_MODES_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_PRESET_MODES.items()}

TAHOMA_TO_HVAC_MODES = {
    "on": HVAC_MODE_HEAT,
    "comfort": HVAC_MODE_HEAT,
    "off": HVAC_MODE_OFF,
}
HVAC_MODES_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_HVAC_MODES.items()}


class AtlanticElectricalHeater(OverkizEntity, ClimateEntity):
    """Representation of Atlantic Electrical Heater."""

    _attr_hvac_modes = [*HVAC_MODES_TO_TAHOMA]
    _attr_preset_modes = [*PRESET_MODES_TO_TAHOMA]
    _attr_supported_features = SUPPORT_PRESET_MODE
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""
        return TAHOMA_TO_HVAC_MODES[self.executor.select_state(CORE_ON_OFF_STATE)]

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        await self.executor.async_execute_command(
            COMMAND_SET_HEATING_LEVEL, HVAC_MODES_TO_TAHOMA[hvac_mode]
        )

    @property
    def preset_mode(self) -> Optional[str]:
        """Return the current preset mode, e.g., home, away, temp."""
        return TAHOMA_TO_PRESET_MODES[
            self.executor.select_state(IO_TARGET_HEATING_LEVEL_STATE)
        ]

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set new preset mode."""
        await self.executor.async_execute_command(
            COMMAND_SET_HEATING_LEVEL, PRESET_MODES_TO_TAHOMA[preset_mode]
        )
