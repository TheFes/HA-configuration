"""Support for Stateless Exterior Heating device."""
import logging

from homeassistant.components.climate import ClimateEntity
from homeassistant.components.climate.const import (
    HVAC_MODE_HEAT,
    HVAC_MODE_OFF,
    SUPPORT_PRESET_MODE,
)
from homeassistant.const import TEMP_CELSIUS

from ..entity import OverkizEntity

_LOGGER = logging.getLogger(__name__)

COMMAND_MY = "my"
COMMAND_OFF = "off"
COMMAND_ON = "on"

PRESET_MY = "My"


class StatelessExteriorHeating(OverkizEntity, ClimateEntity):
    """Representation of TaHoma Stateless Exterior Heating device."""

    _attr_hvac_mode = None
    _attr_hvac_modes = [HVAC_MODE_OFF, HVAC_MODE_HEAT]
    _attr_preset_mode = None
    _attr_preset_modes = [PRESET_MY]
    _attr_supported_features = SUPPORT_PRESET_MODE
    _attr_temperature_unit = TEMP_CELSIUS  # Not used but climate devices need a recognized temperature unit...

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set new preset mode."""
        if preset_mode in PRESET_MY:
            await self.executor.async_execute_command(COMMAND_MY)
        else:
            _LOGGER.error(
                "Invalid preset mode %s for device %s", preset_mode, self.name
            )

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        if hvac_mode == HVAC_MODE_HEAT:
            await self.executor.async_execute_command(COMMAND_ON)
        else:
            await self.executor.async_execute_command(COMMAND_OFF)
