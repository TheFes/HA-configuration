"""Support for Overkiz number devices."""
from homeassistant.components.number import NumberEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import ENTITY_CATEGORY_CONFIG
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN
from .entity import OverkizDescriptiveEntity, OverkizNumberDescription

NUMBER_DESCRIPTIONS = [
    # Cover: My Position (0 - 100)
    OverkizNumberDescription(
        key="core:Memorized1PositionState",
        name="My Position",
        icon="mdi:content-save-cog",
        command="setMemorized1Position",
        entity_category=ENTITY_CATEGORY_CONFIG,
    ),
    # WaterHeater: Expected Number Of Shower (2 - 4)
    OverkizNumberDescription(
        key="core:ExpectedNumberOfShowerState",
        name="Expected Number Of Shower",
        icon="mdi:shower-head",
        command="setExpectedNumberOfShower",
        min_value=2,
        max_value=4,
        entity_category=ENTITY_CATEGORY_CONFIG,
    ),
]


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz number from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    entities = []

    key_supported_states = {
        description.key: description for description in NUMBER_DESCRIPTIONS
    }

    for device in coordinator.data.values():
        for state in device.definition.states:
            if description := key_supported_states.get(state.qualified_name):
                entities.append(
                    OverkizNumber(
                        device.device_url,
                        coordinator,
                        description,
                    )
                )

    async_add_entities(entities)


class OverkizNumber(OverkizDescriptiveEntity, NumberEntity):
    """Representation of an Overkiz Number entity."""

    @property
    def value(self) -> float:
        """Return the current number."""
        if state := self.device.states.get(self.entity_description.key):
            return state.value

        return None

    async def async_set_value(self, value: float) -> None:
        """Update the My position value. Min: 0, max: 100."""
        await self.executor.async_execute_command(
            self.entity_description.command, value
        )

    @property
    def min_value(self) -> float:
        """Return the minimum value."""
        return self.entity_description.min_value or self._attr_min_value

    @property
    def max_value(self) -> float:
        """Return the maximum value."""
        return self.entity_description.max_value or self._attr_max_value
