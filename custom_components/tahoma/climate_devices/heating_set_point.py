"""Support for EvoHome HeatingSetPoint."""
from typing import Any, Dict, Optional

from homeassistant.components.climate import SUPPORT_TARGET_TEMPERATURE, ClimateEntity
from homeassistant.components.climate.const import HVAC_MODE_HEAT
from homeassistant.const import (
    ATTR_TEMPERATURE,
    TEMP_CELSIUS,
    TEMP_FAHRENHEIT,
    TEMP_KELVIN,
)

from ..entity import OverkizEntity

COMMAND_SET_TARGET_TEMPERATURE = "setTargetTemperature"

CORE_MAX_SETTABLE_VALUE = "core:MaxSettableValue"
CORE_MEASURED_VALUE_TYPE = "core:MeasuredValueType"
CORE_MIN_SETTABLE_VALUE = "core:MinSettableValue"
CORE_TARGET_TEMPERATURE_STATE = "core:TargetTemperatureState"
CORE_TEMPERATURE_STATE = "core:TemperatureState"

UNITS = {
    "core:TemperatureInCelcius": TEMP_CELSIUS,
    "core:TemperatureInCelsius": TEMP_CELSIUS,
    "core:TemperatureInKelvin": TEMP_KELVIN,
    "core:TemperatureInFahrenheit": TEMP_FAHRENHEIT,
}


class HeatingSetPoint(OverkizEntity, ClimateEntity):
    """Representation of EvoHome HeatingSetPoint device."""

    _attr_hvac_mode = HVAC_MODE_HEAT
    _attr_hvac_modes = [HVAC_MODE_HEAT]
    _attr_supported_features = SUPPORT_TARGET_TEMPERATURE
    _attr_target_temperature_step = 0.5

    @property
    def temperature_unit(self) -> str:
        """Return the unit of measurement used by the platform."""
        if (
            self.device.attributes
            and CORE_MEASURED_VALUE_TYPE in self.device.attributes
        ):
            attribute = self.device.attributes[CORE_MEASURED_VALUE_TYPE]
            return UNITS.get(attribute.value)

        return None

    @property
    def current_temperature(self) -> Optional[float]:
        """Return the current temperature."""
        return self.executor.select_state(CORE_TEMPERATURE_STATE)

    @property
    def min_temp(self) -> float:
        """Return the minimum temperature."""
        return self.executor.select_attribute(CORE_MIN_SETTABLE_VALUE)

    @property
    def max_temp(self) -> float:
        """Return the maximum temperature."""
        return self.executor.select_attribute(CORE_MAX_SETTABLE_VALUE)

    @property
    def target_temperature(self):
        """Return the temperature we try to reach."""
        return self.executor.select_state(CORE_TARGET_TEMPERATURE_STATE)

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new target temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)
        await self.executor.async_execute_command(
            COMMAND_SET_TARGET_TEMPERATURE, float(temperature)
        )

    @property
    def device_info(self) -> Dict[str, Any]:
        """Return the device state attributes."""
        device_info = super().device_info or {}
        device_info["manufacturer"] = "EvoHome"

        return device_info
