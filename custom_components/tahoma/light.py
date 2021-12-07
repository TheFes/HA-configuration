"""Support for Overkiz light devices."""
from homeassistant.components.light import (
    ATTR_BRIGHTNESS,
    ATTR_EFFECT,
    ATTR_HS_COLOR,
    DOMAIN as LIGHT,
    SUPPORT_BRIGHTNESS,
    SUPPORT_COLOR,
    SUPPORT_EFFECT,
    LightEntity,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import STATE_ON
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_platform
from homeassistant.helpers.entity_platform import AddEntitiesCallback
import homeassistant.util.color as color_util

from .const import COMMAND_OFF, COMMAND_ON, CORE_ON_OFF_STATE, DOMAIN
from .coordinator import OverkizDataUpdateCoordinator
from .entity import OverkizEntity

COMMAND_MY = "my"
COMMAND_SET_INTENSITY = "setIntensity"
COMMAND_SET_RGB = "setRGB"
COMMAND_WINK = "wink"

CORE_BLUE_COLOR_INTENSITY_STATE = "core:BlueColorIntensityState"
CORE_GREEN_COLOR_INTENSITY_STATE = "core:GreenColorIntensityState"
CORE_LIGHT_INTENSITY_STATE = "core:LightIntensityState"
CORE_RED_COLOR_INTENSITY_STATE = "core:RedColorIntensityState"

SERVICE_LIGHT_MY_POSITION = "set_light_my_position"

SUPPORT_MY = 512


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz lights from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    entities = [
        OverkizLight(device.device_url, coordinator)
        for device in data["platforms"][LIGHT]
    ]

    async_add_entities(entities)

    platform = entity_platform.current_platform.get()
    platform.async_register_entity_service(
        SERVICE_LIGHT_MY_POSITION, {}, "async_my", [SUPPORT_MY]
    )


class OverkizLight(OverkizEntity, LightEntity):
    """Representation of an Overkiz Light."""

    def __init__(self, device_url: str, coordinator: OverkizDataUpdateCoordinator):
        """Initialize a device."""
        super().__init__(device_url, coordinator)
        self._effect = None

    @property
    def brightness(self) -> int:
        """Return the brightness of this light between 0..255."""
        brightness = self.executor.select_state(CORE_LIGHT_INTENSITY_STATE)
        return round(brightness * 255 / 100)

    @property
    def is_on(self) -> bool:
        """Return true if light is on."""
        return self.executor.select_state(CORE_ON_OFF_STATE) == STATE_ON

    @property
    def hs_color(self):
        """Return the hue and saturation color value [float, float]."""
        r = self.executor.select_state(CORE_RED_COLOR_INTENSITY_STATE)
        g = self.executor.select_state(CORE_GREEN_COLOR_INTENSITY_STATE)
        b = self.executor.select_state(CORE_BLUE_COLOR_INTENSITY_STATE)
        return None if None in [r, g, b] else color_util.color_RGB_to_hs(r, g, b)

    @property
    def supported_features(self) -> int:
        """Flag supported features."""
        supported_features = 0

        if self.executor.has_command(COMMAND_SET_INTENSITY):
            supported_features |= SUPPORT_BRIGHTNESS

        if self.executor.has_command(COMMAND_WINK):
            supported_features |= SUPPORT_EFFECT

        if self.executor.has_command(COMMAND_SET_RGB):
            supported_features |= SUPPORT_COLOR

        if self.executor.has_command(COMMAND_MY):
            supported_features |= SUPPORT_MY

        return supported_features

    async def async_turn_on(self, **kwargs) -> None:
        """Turn the light on."""
        if ATTR_HS_COLOR in kwargs:
            await self.executor.async_execute_command(
                COMMAND_SET_RGB,
                *[
                    round(float(c))
                    for c in color_util.color_hs_to_RGB(*kwargs[ATTR_HS_COLOR])
                ],
            )

        if ATTR_BRIGHTNESS in kwargs:
            brightness = round(float(kwargs[ATTR_BRIGHTNESS]) / 255 * 100)
            await self.executor.async_execute_command(COMMAND_SET_INTENSITY, brightness)

        elif ATTR_EFFECT in kwargs:
            self._effect = kwargs[ATTR_EFFECT]
            await self.executor.async_execute_command(self._effect, 100)

        else:
            await self.executor.async_execute_command(COMMAND_ON)

    async def async_turn_off(self, **_) -> None:
        """Turn the light off."""
        await self.executor.async_execute_command(COMMAND_OFF)

    async def async_my(self, **_):
        """Set light to preset position."""
        await self.executor.async_execute_command(COMMAND_MY)

    @property
    def effect_list(self) -> list:
        """Return the list of supported effects."""
        return [COMMAND_WINK] if self.executor.has_command(COMMAND_WINK) else None

    @property
    def effect(self) -> str:
        """Return the current effect."""
        return self._effect
