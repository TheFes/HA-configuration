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
from pyoverkiz.enums import OverkizCommand, OverkizCommandParam, OverkizState

from ..entity import OverkizEntity

STATE_STANDARD = "standard"

OVERKIZ_TO_OPERATION_MODE = {
    OverkizCommandParam.STANDARD: STATE_STANDARD,
    OverkizCommandParam.HIGH_DEMAND: STATE_HIGH_DEMAND,
    OverkizCommandParam.STOP: STATE_OFF,
}

OPERATION_MODE_TO_OVERKIZ = {v: k for k, v in OVERKIZ_TO_OPERATION_MODE.items()}


class HitachiDHW(OverkizEntity, WaterHeaterEntity):
    """Representation of a HitachiDHW Water Heater."""

    _attr_max_temp = 70.0
    _attr_min_temp = 30.0
    _attr_operation_list = [*OPERATION_MODE_TO_OVERKIZ]
    _attr_precision = PRECISION_WHOLE
    _attr_supported_features = SUPPORT_OPERATION_MODE | SUPPORT_TARGET_TEMPERATURE
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def current_temperature(self):
        """Return the current temperature."""
        return self.executor.select_state(OverkizState.CORE_DHW_TEMPERATURE)

    @property
    def target_temperature(self):
        """Return the temperature we try to reach."""
        return self.executor.select_state(
            OverkizState.MODBUS_CONTROL_DHW_SETTING_TEMPERATURE
        )

    async def async_set_temperature(self, **kwargs):
        """Set new target temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)
        await self.executor.async_execute_command(
            OverkizCommand.SET_CONTROL_DHW_SETTING_TEMPERATURE, int(temperature)
        )

    @property
    def current_operation(self):
        """Return current operation ie. eco, electric, performance, ..."""
        if (
            self.executor.select_state(OverkizState.MODBUS_CONTROL_DHW)
            == OverkizCommandParam.STOP
        ):
            return OverkizCommandParam.OFF

        return OVERKIZ_TO_OPERATION_MODE[
            self.executor.select_state(OverkizState.MODBUS_DHW_MODE)
        ]

    async def async_set_operation_mode(self, operation_mode):
        """Set new target operation mode."""
        # Turn water heater off
        if operation_mode == OverkizCommandParam.OFF:
            return await self.executor.async_execute_command(
                OverkizCommand.SET_CONTROL_DHW, OverkizCommandParam.STOP
            )

        # Turn water heater on, when off
        if (
            self.current_operation == OverkizCommandParam.OFF
            and operation_mode != OverkizCommandParam.OFF
        ):
            await self.executor.async_execute_command(
                OverkizCommand.SET_CONTROL_DHW, OverkizCommandParam.RUN
            )

        # Change operation mode
        await self.executor.async_execute_command(
            OverkizCommand.SET_DHW_MODE, OPERATION_MODE_TO_OVERKIZ[operation_mode]
        )
