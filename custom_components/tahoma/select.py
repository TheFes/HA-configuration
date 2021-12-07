"""Support for Overkiz select devices."""
from homeassistant.components.cover import DOMAIN as COVER
from homeassistant.components.select import SelectEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from custom_components.tahoma.coordinator import OverkizDataUpdateCoordinator
from custom_components.tahoma.cover_devices.tahoma_cover import (
    COMMAND_CLOSE,
    COMMAND_OPEN,
)

from .const import DOMAIN
from .entity import OverkizEntity

CORE_OPEN_CLOSED_PEDESTRIAN_STATE = "core:OpenClosedPedestrianState"
COMMAND_SET_PEDESTRIAN_POSITION = "setPedestrianPosition"

OPTION_TO_COMMAND = {
    "closed": COMMAND_CLOSE,
    "open": COMMAND_OPEN,
    "pedestrian": COMMAND_SET_PEDESTRIAN_POSITION,
}


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz select from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    entities = [
        PedestrianGateSelect(device.device_url, coordinator)
        for device in data["platforms"][COVER]
        if CORE_OPEN_CLOSED_PEDESTRIAN_STATE in device.states
    ]

    async_add_entities(entities)


class PedestrianGateSelect(OverkizEntity, SelectEntity):
    """Representation of the various state for a pedestrian gate."""

    _attr_icon = "mdi:content-save-cog"

    def __init__(
        self,
        device_url: str,
        coordinator: OverkizDataUpdateCoordinator,
    ):
        """Initialize the device."""
        super().__init__(device_url, coordinator)
        self._attr_name = f"{super().name} Position"

    @property
    def current_option(self):
        """Return the selected entity option to represent the entity state."""
        return self.device.states.get(CORE_OPEN_CLOSED_PEDESTRIAN_STATE).value

    @property
    def options(self):
        """Return a set of selectable options."""
        return ["closed", "open", "pedestrian"]

    async def async_select_option(self, option: str) -> None:
        """Change the selected option."""
        if option in OPTION_TO_COMMAND:
            await self.executor.async_execute_command(OPTION_TO_COMMAND[option])
