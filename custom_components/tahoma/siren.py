"""Support for Overkiz sirens."""
from homeassistant.components.siren import SirenEntity
from homeassistant.components.siren.const import (
    ATTR_DURATION,
    SUPPORT_DURATION,
    SUPPORT_TURN_OFF,
    SUPPORT_TURN_ON,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from pyoverkiz.enums import OverkizState
from pyoverkiz.enums.command import OverkizCommand, OverkizCommandParam

from .const import DOMAIN
from .entity import OverkizEntity


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz sirens from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    entities = [
        OverkizSiren(device.device_url, coordinator)
        for device in data["platforms"][Platform.SIREN]
    ]

    async_add_entities(entities)


class OverkizSiren(OverkizEntity, SirenEntity):
    """Representation an Overkiz Switch."""

    _attr_supported_features = SUPPORT_TURN_OFF | SUPPORT_TURN_ON | SUPPORT_DURATION

    @property
    def is_on(self):
        """Get whether the siren is in on state."""
        return (
            self.executor.select_state(OverkizState.CORE_ON_OFF)
            == OverkizCommandParam.ON
        )

    async def async_turn_on(self, **kwargs):
        """Send the on command."""

        if kwargs.get(ATTR_DURATION):
            duration = kwargs.get(ATTR_DURATION)
        else:
            duration = 2 * 60  # 2 minutes

        duration_in_ms = duration * 1000

        await self.executor.async_execute_command(
            OverkizCommand.RING_WITH_SINGLE_SIMPLE_SEQUENCE,  # https://www.tahomalink.com/enduser-mobile-web/steer-html5-client/vendor/somfy/io/siren/const.js
            duration_in_ms,  # duration
            75,  # 90 seconds bip, 30 seconds silence
            2,  # repeat 3 times
            OverkizCommandParam.MEMORIZED_VOLUME,
        )

    async def async_turn_off(self, **kwargs):
        """Send the off command."""
        await self.executor.async_cancel_command(
            [OverkizCommand.RING_WITH_SINGLE_SIMPLE_SEQUENCE]
        )

        await self.executor.async_execute_command(
            OverkizCommand.ADVANCED_REFRESH, OverkizCommandParam.NORMAL
        )
