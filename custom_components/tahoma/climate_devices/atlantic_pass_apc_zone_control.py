"""Support for Atlantic Pass APC Zone Control."""
from homeassistant.components.climate import ClimateEntity
from homeassistant.components.climate.const import (
    HVAC_MODE_COOL,
    HVAC_MODE_DRY,
    HVAC_MODE_HEAT,
    HVAC_MODE_OFF,
)
from homeassistant.const import TEMP_CELSIUS

from ..entity import OverkizEntity

COMMAND_SET_PASS_APC_OPERATING_MODE = "setPassAPCOperatingMode"

IO_PASS_APC_OPERATING_MODE_STATE = "io:PassAPCOperatingModeState"

# Map TaHoma HVAC modes to Home Assistant HVAC modes
TAHOMA_TO_HVAC_MODE = {
    "heating": HVAC_MODE_HEAT,
    "drying": HVAC_MODE_DRY,
    "cooling": HVAC_MODE_COOL,
    "stop": HVAC_MODE_OFF,
}

HVAC_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_HVAC_MODE.items()}


class AtlanticPassAPCZoneControl(OverkizEntity, ClimateEntity):
    """Representation of Atlantic Pass APC Zone Control."""

    _attr_hvac_modes = [*HVAC_MODE_TO_TAHOMA]
    _attr_supported_features = 0
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""
        return TAHOMA_TO_HVAC_MODE[
            self.executor.select_state(IO_PASS_APC_OPERATING_MODE_STATE)
        ]

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        await self.executor.async_execute_command(
            COMMAND_SET_PASS_APC_OPERATING_MODE, HVAC_MODE_TO_TAHOMA[hvac_mode]
        )
