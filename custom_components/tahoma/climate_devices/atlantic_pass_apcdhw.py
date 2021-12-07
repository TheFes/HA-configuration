"""Support for AtlanticPassAPCDHWComponement."""
from typing import Optional

from homeassistant.components.climate import (
    HVAC_MODE_HEAT,
    HVAC_MODE_OFF,
    SUPPORT_PRESET_MODE,
    SUPPORT_TARGET_TEMPERATURE,
    ClimateEntity,
)
from homeassistant.components.climate.const import (
    PRESET_BOOST,
    PRESET_COMFORT,
    PRESET_ECO,
)
from homeassistant.const import ATTR_TEMPERATURE, TEMP_CELSIUS

from ..entity import OverkizEntity

BOOST_ON_STATE = "on"
BOOST_OFF_STATE = "off"

COMMAND_REFRESH_COMFORT_TARGET_DWH_TEMPERATURE = "refreshComfortTargetDHWTemperature"
COMMAND_REFRESH_ECO_TARGET_DWH_TEMPERATURE = "refreshEcoTargetDHWTemperature"
COMMAND_REFRESH_TARGET_DWH_TEMPERATURE = "refreshTargetDHWTemperature"
COMMAND_SET_BOOST_ON_OFF_STATE = "setBoostOnOffState"
COMMAND_SET_COMFORT_TARGET_DWH_TEMPERATURE = "setComfortTargetDHWTemperature"
COMMAND_SET_DWH_ON_OFF_STATE = "setDHWOnOffState"
COMMAND_SET_ECO_TARGET_DWH_TEMPERATURE = "setEcoTargetDHWTemperature"
COMMAND_SET_PASS_APCDHW_MODE = "setPassAPCDHWMode"


CORE_BOOST_ON_OFF_STATE = "core:BoostOnOffState"
CORE_COMFORT_TARGET_DWH_TEMPERATURE_STATE = "core:ComfortTargetDHWTemperatureState"
CORE_DHW_DEROGATION_AVAILABILITY_STATE = "core:DHWDerogationAvailabilityState"
CORE_DWH_ON_OFF_STATE = "core:DHWOnOffState"
CORE_ECO_TARGET_DWH_TEMPERATURE_STATE = "core:EcoTargetDHWTemperatureState"
CORE_STATUS_STATE = "core:StatusState"
CORE_TARGET_DWH_TEMPERATURE_STATE = "core:TargetDHWTemperatureState"

CUSTOM_PRESET_OFF = "Off"
CUSTOM_PRESET_PROG = "Prog"

DWH_OFF_STATE = "off"
DHW_ON_STATE = "on"

IO_PASS_APCDHW_CONFIGURATION_STATE = "io:PassAPCDHWConfigurationState"
IO_PASS_APCDWH_MODE_STATE = "io:PassAPCDHWModeState"
IO_PASS_APCDHW_PROFILE_STATE = "io:PassAPCDHWProfileState"

PASS_APCDHW_MODE_COMFORT = "comfort"
PASS_APCDHW_MODE_ECO = "eco"
PASS_APCDWH_MODE_INTERNAL_SCHEDULING = "internalScheduling"
PASS_APCDHW_MODE_STOP = "stop"


MAP_HVAC_MODES = {
    DHW_ON_STATE: HVAC_MODE_HEAT,
    DWH_OFF_STATE: HVAC_MODE_OFF,
}
MAP_REVERSE_HVAC_MODES = {v: k for k, v in MAP_HVAC_MODES.items()}

MAP_PRESET_MODES = {
    PASS_APCDHW_MODE_ECO: PRESET_ECO,
    PASS_APCDHW_MODE_COMFORT: PRESET_COMFORT,
    PRESET_BOOST: PRESET_BOOST,
    PASS_APCDWH_MODE_INTERNAL_SCHEDULING: CUSTOM_PRESET_PROG,
    PASS_APCDHW_MODE_STOP: CUSTOM_PRESET_OFF,
}
MAP_REVERSE_PRESET_MODES = {v: k for k, v in MAP_PRESET_MODES.items()}


class AtlanticPassAPCDHW(OverkizEntity, ClimateEntity):
    """Representation of TaHoma IO Atlantic Electrical Heater."""

    _attr_hvac_modes = [*MAP_REVERSE_HVAC_MODES]
    _attr_max_temp = 65
    _attr_min_temp = 30
    _attr_preset_modes = [*MAP_REVERSE_PRESET_MODES]
    _attr_supported_features = SUPPORT_PRESET_MODE | SUPPORT_TARGET_TEMPERATURE
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def preset_mode(self) -> Optional[str]:
        """Return the current preset mode, e.g., home, away, temp."""
        if self.executor.select_state(IO_PASS_APCDWH_MODE_STATE) in [
            PASS_APCDHW_MODE_ECO,
            PASS_APCDWH_MODE_INTERNAL_SCHEDULING,
            PASS_APCDHW_MODE_STOP,
        ]:
            return MAP_PRESET_MODES[
                self.executor.select_state(IO_PASS_APCDWH_MODE_STATE)
            ]

        if self.executor.select_state(CORE_BOOST_ON_OFF_STATE) == BOOST_ON_STATE:
            return PRESET_BOOST

        return PRESET_COMFORT

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set new preset mode."""
        if preset_mode in [
            PRESET_COMFORT,
            PRESET_ECO,
            CUSTOM_PRESET_OFF,
            CUSTOM_PRESET_PROG,
        ]:
            preset_mode_to_set = MAP_REVERSE_PRESET_MODES[preset_mode]
            boost_mode_to_set = BOOST_OFF_STATE
        elif preset_mode == PRESET_BOOST:
            preset_mode_to_set = MAP_REVERSE_PRESET_MODES[PRESET_COMFORT]
            boost_mode_to_set = BOOST_ON_STATE

        await self.executor.async_execute_command(
            COMMAND_SET_BOOST_ON_OFF_STATE, boost_mode_to_set
        )
        await self.executor.async_execute_command(
            COMMAND_SET_PASS_APCDHW_MODE, preset_mode_to_set
        )
        await self.executor.async_execute_command(
            COMMAND_REFRESH_TARGET_DWH_TEMPERATURE
        )

    @property
    def hvac_mode(self) -> str:
        """Return hvac operation ie. heat, cool mode."""
        return MAP_HVAC_MODES[self.executor.select_state(CORE_DWH_ON_OFF_STATE)]

    async def async_set_hvac_mode(self, hvac_mode: str) -> None:
        """Set new target hvac mode."""
        await self.executor.async_execute_command(
            COMMAND_SET_DWH_ON_OFF_STATE, MAP_REVERSE_HVAC_MODES[hvac_mode]
        )

    @property
    def target_temperature(self) -> None:
        """Return the temperature corresponding to the PRESET."""
        if self.preset_mode == PRESET_ECO:
            return self.executor.select_state(CORE_ECO_TARGET_DWH_TEMPERATURE_STATE)

        if self.preset_mode in [PRESET_COMFORT, PRESET_BOOST]:
            return self.executor.select_state(CORE_COMFORT_TARGET_DWH_TEMPERATURE_STATE)

        return self.executor.select_state(CORE_TARGET_DWH_TEMPERATURE_STATE)

    @property
    def current_temperature(self):
        """Return current temperature."""
        return self.target_temperature

    async def async_set_temperature(self, **kwargs) -> None:
        """Set new temperature for current preset."""
        temperature = kwargs.get(ATTR_TEMPERATURE)
        if self.preset_mode == PRESET_ECO:
            await self.executor.async_execute_command(
                COMMAND_SET_ECO_TARGET_DWH_TEMPERATURE, temperature
            )

        if self.preset_mode in [PRESET_COMFORT, PRESET_BOOST]:
            await self.executor.async_execute_command(
                COMMAND_SET_COMFORT_TARGET_DWH_TEMPERATURE, temperature
            )

        await self.executor.async_execute_command(
            COMMAND_REFRESH_TARGET_DWH_TEMPERATURE
        )
