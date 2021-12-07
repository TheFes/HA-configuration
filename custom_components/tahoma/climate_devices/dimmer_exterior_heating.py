"""Support for Atlantic Electrical Heater IO controller."""
from homeassistant.components.climate import ClimateEntity
from homeassistant.components.climate.const import (
    HVAC_MODE_HEAT,
    HVAC_MODE_OFF,
    SUPPORT_TARGET_TEMPERATURE,
)
from homeassistant.const import ATTR_TEMPERATURE, TEMP_CELSIUS

from ..coordinator import OverkizDataUpdateCoordinator
from ..entity import OverkizEntity

COMMAND_GET_LEVEL = "getLevel"
COMMAND_SET_LEVEL = "setLevel"

CORE_LEVEL_STATE = "core:LevelState"


class DimmerExteriorHeating(OverkizEntity, ClimateEntity):
    """Representation of TaHoma IO Atlantic Electrical Heater."""

    _attr_hvac_modes = [HVAC_MODE_OFF, HVAC_MODE_HEAT]
    _attr_max_temp = 100
    _attr_min_temp = 0
    _attr_supported_features = SUPPORT_TARGET_TEMPERATURE
    _attr_temperature_unit = TEMP_CELSIUS

    def __init__(self, device_url: str, coordinator: OverkizDataUpdateCoordinator):
        """Init method."""
        super().__init__(device_url, coordinator)
        self._saved_level = 100 - self.executor.select_state(CORE_LEVEL_STATE)

    @property
    def target_temperature(self):
        """Return the temperature we try to reach."""
        return 100 - self.executor.select_state(CORE_LEVEL_STATE)

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new target temperature."""
        level = kwargs.get(ATTR_TEMPERATURE)
        if level is None:
            return
        await self.executor.async_execute_command(COMMAND_SET_LEVEL, 100 - int(level))
        await self.executor.async_execute_command(COMMAND_GET_LEVEL)

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""
        if self.executor.select_state(CORE_LEVEL_STATE) == 100:
            return HVAC_MODE_OFF
        return HVAC_MODE_HEAT

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        level = 0
        if hvac_mode == HVAC_MODE_HEAT:
            level = self._saved_level
        else:
            self._saved_level = self.target_temperature
        await self.executor.async_execute_command(COMMAND_SET_LEVEL, 100 - int(level))
        await self.executor.async_execute_command(COMMAND_GET_LEVEL)
