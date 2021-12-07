"""Support for HitachiAirToAirHeatPump."""
from typing import Any, Dict, List, Optional

from homeassistant.components.climate import ClimateEntity
from homeassistant.components.climate.const import (
    FAN_AUTO,
    FAN_HIGH,
    FAN_LOW,
    FAN_MEDIUM,
    HVAC_MODE_AUTO,
    HVAC_MODE_COOL,
    HVAC_MODE_DRY,
    HVAC_MODE_FAN_ONLY,
    HVAC_MODE_HEAT,
    HVAC_MODE_OFF,
    PRESET_NONE,
    SUPPORT_FAN_MODE,
    SUPPORT_PRESET_MODE,
    SUPPORT_SWING_MODE,
    SUPPORT_TARGET_TEMPERATURE,
    SWING_BOTH,
    SWING_HORIZONTAL,
    SWING_OFF,
    SWING_VERTICAL,
)
from homeassistant.const import ATTR_TEMPERATURE, TEMP_CELSIUS

from ..entity import OverkizEntity

COMMAND_GLOBAL_CONTROL = "globalControl"

CORE_TARGET_TEMPERATURE_STATE = "core:TargetTemperatureState"

PRESET_HOLIDAY_MODE = "holiday_mode"

FAN_SPEED_STATE = ["ovp:FanSpeedState", "hlrrwifi:FanSpeedState"]
LEAVE_HOME_STATE = ["ovp:LeaveHomeState", "hlrrwifi:LeaveHomeState"]
MAIN_OPERATION_STATE = ["ovp:MainOperationState", "hlrrwifi:MainOperationState"]
MODE_CHANGE_STATE = ["ovp:ModeChangeState", "hlrrwifi:ModeChangeState"]
ROOM_TEMPERATURE_STATE = ["ovp:RoomTemperatureState", "hlrrwifi:RoomTemperatureState"]
SWING_STATE = ["ovp:SwingState", "hlrrwifi:SwingState"]

STATE_ON = "on"
STATE_OFF = "off"

TAHOMA_TO_HVAC_MODES = {
    "autocooling": HVAC_MODE_AUTO,
    "autoheating": HVAC_MODE_AUTO,
    "off": HVAC_MODE_OFF,
    "heating": HVAC_MODE_HEAT,
    "fan": HVAC_MODE_FAN_ONLY,
    "dehumidify": HVAC_MODE_DRY,
    "cooling": HVAC_MODE_COOL,
    "auto": HVAC_MODE_AUTO,
}

HVAC_MODES_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_HVAC_MODES.items()}

TAHOMA_TO_SWING_MODES = {
    "both": SWING_BOTH,
    "horizontal": SWING_HORIZONTAL,
    "stop": SWING_OFF,
    "vertical": SWING_VERTICAL,
}

SWING_MODES_TO_TAHOMA = {v: k for k, v in TAHOMA_TO_SWING_MODES.items()}

HLRRWIFI_TAHOMA_TO_FAN_MODES = {
    "auto": FAN_AUTO,
    "high": FAN_HIGH,
    "low": FAN_LOW,
    "medium": FAN_MEDIUM,
    "silent": "silent",
}

OVP_TAHOMA_TO_FAN_MODES = {
    "auto": FAN_AUTO,
    "hi": FAN_HIGH,
    "lo": FAN_LOW,
    "med": FAN_MEDIUM,
    "silent": "silent",
}

FAN_MODES_TO_HLRRWIFI_TAHOMA = {v: k for k, v in HLRRWIFI_TAHOMA_TO_FAN_MODES.items()}
FAN_MODES_TO_OVP_TAHOMA = {v: k for k, v in OVP_TAHOMA_TO_FAN_MODES.items()}


class HitachiAirToAirHeatPump(OverkizEntity, ClimateEntity):
    """Representation of HitachiAirToAirHeatPump."""

    _attr_hvac_modes = [*HVAC_MODES_TO_TAHOMA]
    _attr_preset_modes = [PRESET_NONE, PRESET_HOLIDAY_MODE]
    _attr_swing_modes = [*SWING_MODES_TO_TAHOMA]
    _attr_target_temperature_step = 1.0
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def supported_features(self) -> int:
        """Return the list of supported features."""

        supported_features = (
            SUPPORT_TARGET_TEMPERATURE | SUPPORT_FAN_MODE | SUPPORT_PRESET_MODE
        )

        if self.executor.has_state(*SWING_STATE):
            supported_features |= SUPPORT_SWING_MODE

        return supported_features

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""
        if self._select_state(*MAIN_OPERATION_STATE) == STATE_OFF:
            return HVAC_MODE_OFF

        return TAHOMA_TO_HVAC_MODES[self._select_state(*MODE_CHANGE_STATE)]

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        if hvac_mode == HVAC_MODE_OFF:
            await self._global_control(main_operation=STATE_OFF)
        else:
            await self._global_control(
                main_operation=STATE_ON, hvac_mode=HVAC_MODES_TO_TAHOMA[hvac_mode]
            )

    @property
    def fan_mode(self) -> Optional[str]:
        """Return the fan setting."""
        if self.device.controllable_name == "ovp:HLinkMainController":
            return HLRRWIFI_TAHOMA_TO_FAN_MODES[self._select_state(*FAN_SPEED_STATE)]

        return HLRRWIFI_TAHOMA_TO_FAN_MODES[self._select_state(*FAN_SPEED_STATE)]

    @property
    def fan_modes(self) -> Optional[List[str]]:
        """Return the list of available fan modes."""
        if self.device.controllable_name == "ovp:HLinkMainController":
            return [*FAN_MODES_TO_OVP_TAHOMA]

        return [*FAN_MODES_TO_HLRRWIFI_TAHOMA]

    async def async_set_fan_mode(self, fan_mode: str) -> None:
        """Set new target fan mode."""
        if self.device.controllable_name == "ovp:HLinkMainController":
            await self._global_control(fan_mode=FAN_MODES_TO_OVP_TAHOMA[fan_mode])
        else:
            await self._global_control(fan_mode=FAN_MODES_TO_HLRRWIFI_TAHOMA[fan_mode])

    @property
    def swing_mode(self) -> Optional[str]:
        """Return the swing setting."""
        return TAHOMA_TO_SWING_MODES[self._select_state(*SWING_STATE)]

    async def async_set_swing_mode(self, swing_mode: str) -> None:
        """Set new target swing operation."""
        await self._global_control(swing_mode=SWING_MODES_TO_TAHOMA[swing_mode])

    @property
    def target_temperature(self) -> None:
        """Return the temperature."""
        return self._select_state(CORE_TARGET_TEMPERATURE_STATE)

    @property
    def current_temperature(self) -> None:
        """Return current temperature."""
        return self._select_state(*ROOM_TEMPERATURE_STATE)

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)
        await self._global_control(target_temperature=int(temperature))

    @property
    def preset_mode(self) -> Optional[str]:
        """Return the current preset mode, e.g., home, away, temp."""
        if self._select_state(*LEAVE_HOME_STATE) == STATE_ON:
            return PRESET_HOLIDAY_MODE

        if self._select_state(*LEAVE_HOME_STATE) == STATE_OFF:
            return PRESET_NONE

        return None

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set new preset mode."""
        if preset_mode == PRESET_HOLIDAY_MODE:
            await self._global_control(leave_home=STATE_ON)

        if preset_mode == PRESET_NONE:
            await self._global_control(leave_home=STATE_OFF)

    @property
    def device_info(self) -> Dict[str, Any]:
        """Return the device state attributes."""
        device_info = super().device_info or {}
        device_info["manufacturer"] = "Hitachi"

        return device_info

    async def _global_control(
        self,
        main_operation=None,
        target_temperature=None,
        fan_mode=None,
        hvac_mode=None,
        swing_mode=None,
        leave_home=None,
    ):
        """Execute globalControl command with all parameters."""
        if self.device.controllable_name == "ovp:HLinkMainController":
            await self.executor.async_execute_command(
                COMMAND_GLOBAL_CONTROL,
                main_operation
                or self._select_state(*MAIN_OPERATION_STATE),  # Main Operation
                target_temperature
                or self._select_state(
                    CORE_TARGET_TEMPERATURE_STATE
                ),  # Target Temperature
                fan_mode or self._select_state(*FAN_SPEED_STATE),  # Fan Mode
                hvac_mode or self._select_state(*MODE_CHANGE_STATE),  # Mode
                swing_mode or self._select_state(*SWING_STATE),  # Swing Mode
            )
        else:
            await self.executor.async_execute_command(
                COMMAND_GLOBAL_CONTROL,
                main_operation
                or self._select_state(*MAIN_OPERATION_STATE),  # Main Operation
                target_temperature
                or self._select_state(
                    CORE_TARGET_TEMPERATURE_STATE
                ),  # Target Temperature
                fan_mode or self._select_state(*FAN_SPEED_STATE),  # Fan Mode
                hvac_mode or self._select_state(*MODE_CHANGE_STATE),  # Mode
                swing_mode or self._select_state(*SWING_STATE),  # Swing Mode
                leave_home or self._select_state(*LEAVE_HOME_STATE),  # Leave Home
            )

    def _select_state(self, *states) -> Optional[str]:
        """Make all strings lowercase, since Hi Kumo server returns capitalized strings for some devices."""
        state = self.executor.select_state(*states)

        if state and isinstance(state, str):
            return state.lower()

        return state
