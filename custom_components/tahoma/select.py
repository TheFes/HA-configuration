"""Support for Overkiz select devices."""
from __future__ import annotations

from homeassistant.components.select import SelectEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import EntityCategory
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from pyhoma.enums import OverkizCommand, OverkizCommandParam, OverkizState

from .const import DOMAIN, IGNORED_OVERKIZ_DEVICES
from .entity import OverkizDescriptiveEntity, OverkizSelectDescription

SELECT_DESCRIPTIONS = [
    OverkizSelectDescription(
        key=OverkizState.CORE_OPEN_CLOSED_PEDESTRIAN,
        name="Position",
        icon="mdi:content-save-cog",
        options=[
            OverkizCommandParam.CLOSED,
            OverkizCommandParam.OPEN,
            OverkizCommandParam.PEDESTRIAN,
        ],
        select_option=lambda option, execute_command: execute_command(
            {
                OverkizCommandParam.CLOSED: OverkizCommand.CLOSE,
                OverkizCommandParam.OPEN: OverkizCommand.OPEN,
                OverkizCommandParam.PEDESTRIAN: OverkizCommand.SET_PEDESTRIAN_POSITION,
            }[option]
        ),
    ),
    OverkizSelectDescription(
        key=OverkizState.IO_MEMORIZED_SIMPLE_VOLUME,
        name="Memorized Simple Volume",
        icon="mdi:volume-high",
        options=[OverkizCommandParam.HIGHEST, OverkizCommandParam.STANDARD],
        select_option=lambda option, execute_command: execute_command(
            OverkizCommand.SET_MEMORIZED_SIMPLE_VOLUME, option
        ),
        entity_category=EntityCategory.CONFIG,
    ),
]


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz select from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    entities = []

    key_supported_states = {
        description.key: description for description in SELECT_DESCRIPTIONS
    }

    for device in coordinator.data.values():
        if (
            device.widget not in IGNORED_OVERKIZ_DEVICES
            and device.ui_class not in IGNORED_OVERKIZ_DEVICES
        ):
            for state in device.definition.states:
                if description := key_supported_states.get(state.qualified_name):
                    entities.append(
                        OverkizSelect(
                            device.device_url,
                            coordinator,
                            description,
                        )
                    )

    async_add_entities(entities)


class OverkizSelect(OverkizDescriptiveEntity, SelectEntity):
    """Representation of an Overkiz Number entity."""

    @property
    def current_option(self) -> str | None:
        """Return the selected entity option to represent the entity state."""
        if state := self.device.states.get(self.entity_description.key):
            return state.value

        return None

    @property
    def options(self):
        """Return a set of selectable options."""
        return self.entity_description.options

    async def async_select_option(self, option: str) -> None:
        """Change the selected option."""
        await self.entity_description.select_option(
            option, self.executor.async_execute_command
        )
