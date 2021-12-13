"""Support for Overkiz lock."""
from homeassistant.components.lock import LockEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from pyhoma.enums import OverkizCommand, OverkizCommandParam, OverkizState

from .const import DOMAIN
from .entity import OverkizEntity


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz locks from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    entities = [
        OverkizLock(device.device_url, coordinator)
        for device in data["platforms"][Platform.LOCK]
    ]

    async_add_entities(entities)


class OverkizLock(OverkizEntity, LockEntity):
    """Representation of a TaHoma Lock."""

    async def async_unlock(self, **_):
        """Unlock method."""
        await self.executor.async_execute_command(OverkizCommand.UNLOCK)

    async def async_lock(self, **_):
        """Lock method."""
        await self.executor.async_execute_command(OverkizCommand.LOCK)

    @property
    def is_locked(self):
        """Return True if the lock is locked."""
        return (
            self.executor.select_state(OverkizState.CORE_LOCKED_UNLOCKED)
            == OverkizCommandParam.LOCKED
        )
