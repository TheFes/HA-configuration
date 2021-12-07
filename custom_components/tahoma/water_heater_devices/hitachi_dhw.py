"""Support for HitachiDHW."""
from homeassistant.components.climate.const import SUPPORT_TARGET_TEMPERATURE
from homeassistant.components.water_heater import (
    STATE_HIGH_DEMAND,
    SUPPORT_OPERATION_MODE,
    WaterHeaterEntity,
)
from homeassistant.const import (
    ATTR_TEMPERATURE,
    PRECISION_WHOLE,
    STATE_OFF,
    TEMP_CELSIUS,
)

from ..entity import OverkizEntity

CORE_DHW_TEMPERATURE_STATE = "core:DHWTemperatureState"
MODBUS_DHW_MODE_STATE = "modbus:DHWModeState"
MODBUS_CONTROL_DHW_STATE = "modbus:ControlDHWState"
MODBUS_CONTROL_DHW_SETTING_TEMPERATURE_STATE = (
    "modbus:ControlDHWSettingTemperatureState"
)

COMMAND_SET_DHW_MODE = "setDHWMode"
COMMAND_SET_CONTROL_DHW = "setControlDHW"
COMMAND_SET_CONTROL_DHW_SETTING_TEMPERATURE = "setControlDHWSettingTemperature"

STATE_STANDARD = "standard"
STATE_STOP = "stop"
STATE_RUN = "run"

MODE_STANDARD = "standard"
MODE_HIGH_DEMAND = "high demand"

TAHOMA_TO_OPERATION_MODE = {
    MODE_STANDARD: STATE_STANDARD,
    MODE_HIGH_DEMAND: STATE_HIGH_DEMAND,
    STATE_STOP: STATE_OFF,
}

OPERATION_MODE_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_OPERATION_MODE.items()}


class HitachiDHW(OverkizEntity, WaterHeaterEntity):
    """Representation of a HitachiDHW Water Heater."""

    _attr_max_temp = 70.0
    _attr_min_temp = 30.0
    _attr_operation_list = [*OPERATION_MODE_TO_TAHOMA]
    _attr_precision = PRECISION_WHOLE
    _attr_supported_features = SUPPORT_OPERATION_MODE | SUPPORT_TARGET_TEMPERATURE
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def current_temperature(self):
        """Return the current temperature."""
        return self.executor.select_state(CORE_DHW_TEMPERATURE_STATE)

    @property
    def target_temperature(self):
        """Return the temperature we try to reach."""
        return self.executor.select_state(MODBUS_CONTROL_DHW_SETTING_TEMPERATURE_STATE)

    async def async_set_temperature(self, **kwargs):
        """Set new target temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)
        await self.executor.async_execute_command(
            COMMAND_SET_CONTROL_DHW_SETTING_TEMPERATURE, int(temperature)
        )

    @property
    def current_operation(self):
        """Return current operation ie. eco, electric, performance, ..."""
        if self.executor.select_state(MODBUS_CONTROL_DHW_STATE) == STATE_STOP:
            return STATE_OFF

        return TAHOMA_TO_OPERATION_MODE[
            self.executor.select_state(MODBUS_DHW_MODE_STATE)
        ]

    async def async_set_operation_mode(self, operation_mode):
        """Set new target operation mode."""
        # Turn water heater off
        if operation_mode == STATE_OFF:
            return await self.executor.async_execute_command(
                COMMAND_SET_CONTROL_DHW, STATE_STOP
            )

        # Turn water heater on, when off
        if self.current_operation == STATE_OFF and operation_mode != STATE_OFF:
            await self.executor.async_execute_command(
                COMMAND_SET_CONTROL_DHW, STATE_RUN
            )

        # Change operation mode
        await self.executor.async_execute_command(
            COMMAND_SET_DHW_MODE, OPERATION_MODE_TO_TAHOMA[operation_mode]
        )
