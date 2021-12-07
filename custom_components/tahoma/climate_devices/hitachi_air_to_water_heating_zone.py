"""Support for HitachiAirToWaterHeatingZone."""
from typing import Any, Dict, Optional

from homeassistant.components.climate import ClimateEntity
from homeassistant.components.climate.const import (
    HVAC_MODE_AUTO,
    HVAC_MODE_HEAT,
    PRESET_COMFORT,
    PRESET_ECO,
    SUPPORT_PRESET_MODE,
    SUPPORT_TARGET_TEMPERATURE,
)
from homeassistant.const import ATTR_TEMPERATURE, TEMP_CELSIUS

from ..entity import OverkizEntity

COMMAND_SET_AUTO_MANU_MODE = "setAutoManuMode"
COMMAND_SET_TARGET_MODE = "setTargetMode"
COMMAND_SET_THERMOSTAT_SETTING_CONTROL_ZONE_1 = "setThermostatSettingControlZone1"

MODBUS_YUTAKI_TARGET_MODE_STATE = "modbus:YutakiTargetModeState"
MODBUS_ROOM_AMBIENT_TEMPERATURE_STATUS_ZONE_1_STATE = (
    "modbus:RoomAmbientTemperatureStatusZone1State"
)
MODBUS_THERMOSTAT_SETTING_STATUS_ZONE_1_STATE = (
    "modbus:ThermostatSettingStatusZone1State"
)
MODBUS_AUTO_MANU_MODE_ZONE_1_STATE = "modbus:AutoManuModeZone1State"
MODBUS_THERMOSTAT_SETTING_CONTROL_ZONE_1_STATE = (
    "modbus:ThermostatSettingControlZone1State"
)

HVAC_STATE_MANU = "manu"
HVAC_STATE_AUTO = "auto"

PRESET_STATE_ECO = "eco"
PRESET_STATE_COMFORT = "comfort"

TAHOMA_TO_HVAC_MODE = {
    HVAC_STATE_MANU: HVAC_MODE_HEAT,
    HVAC_STATE_AUTO: HVAC_MODE_AUTO,
}

HVAC_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_HVAC_MODE.items()}

TAHOMA_TO_PRESET_MODE = {
    PRESET_STATE_COMFORT: PRESET_COMFORT,
    PRESET_STATE_ECO: PRESET_ECO,
}

PRESET_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_PRESET_MODE.items()}


class HitachiAirToWaterHeatingZone(OverkizEntity, ClimateEntity):
    """Representation of HitachiAirToWaterHeatingZone."""

    _attr_hvac_modes = [*HVAC_MODE_TO_TAHOMA]
    _attr_max_temp = 35.0
    _attr_min_temp = 5.0
    _attr_preset_modes = [*PRESET_MODE_TO_TAHOMA]
    _attr_supported_features = SUPPORT_PRESET_MODE | SUPPORT_TARGET_TEMPERATURE
    _attr_target_temperature_step = 1.0
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def device_info(self) -> Dict[str, Any]:
        """Return the device state attributes."""
        device_info = super().device_info or {}
        device_info["manufacturer"] = "Hitachi"

        return device_info

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""
        return TAHOMA_TO_HVAC_MODE[
            self.executor.select_state(MODBUS_AUTO_MANU_MODE_ZONE_1_STATE)
        ]

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        await self.executor.async_execute_command(
            COMMAND_SET_AUTO_MANU_MODE, HVAC_MODE_TO_TAHOMA[hvac_mode]
        )

    @property
    def preset_mode(self) -> Optional[str]:
        """Return the current preset mode, e.g., home, away, temp."""
        return TAHOMA_TO_PRESET_MODE[
            self.executor.select_state(MODBUS_YUTAKI_TARGET_MODE_STATE)
        ]

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set new preset mode."""
        await self.executor.async_execute_command(
            COMMAND_SET_TARGET_MODE, PRESET_MODE_TO_TAHOMA[preset_mode]
        )

    @property
    def current_temperature(self) -> Optional[float]:
        """Return the current temperature."""
        return self.executor.select_state(
            MODBUS_ROOM_AMBIENT_TEMPERATURE_STATUS_ZONE_1_STATE
        )

    @property
    def target_temperature(self):
        """Return the temperature we try to reach."""
        return self.executor.select_state(
            MODBUS_THERMOSTAT_SETTING_CONTROL_ZONE_1_STATE
        )

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new target temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)

        await self.executor.async_execute_command(
            COMMAND_SET_THERMOSTAT_SETTING_CONTROL_ZONE_1, int(temperature)
        )
