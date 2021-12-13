"""Support for Overkiz switches."""
from typing import Any

from homeassistant.components.switch import DEVICE_CLASS_SWITCH, SwitchEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import EntityCategory
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.restore_state import RestoreEntity
from pyhoma.enums import OverkizCommand, OverkizCommandParam, OverkizState

from .const import DOMAIN
from .coordinator import OverkizDataUpdateCoordinator
from .entity import OverkizEntity


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz switch from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    entities = [
        OverkizSwitch(device.device_url, coordinator)
        for device in data["platforms"][Platform.SWITCH]
    ]

    entities.extend(
        [
            OverkizLowSpeedCoverSwitch(device.device_url, coordinator)
            for device in data["platforms"][Platform.COVER]
            if OverkizCommand.SET_CLOSURE_AND_LINEAR_SPEED in device.definition.commands
        ]
    )

    async_add_entities(entities)


class OverkizSwitch(OverkizEntity, SwitchEntity):
    """Representation an Overkiz Switch."""

    _attr_device_class = DEVICE_CLASS_SWITCH

    async def async_turn_on(self, **_):
        """Send the on command."""
        if self.executor.has_command(OverkizCommand.ON):
            await self.executor.async_execute_command(OverkizCommand.ON)
        elif self.executor.has_command(OverkizCommand.SET_FORCE_HEATING):
            await self.executor.async_execute_command(
                OverkizCommand.SET_FORCE_HEATING, OverkizCommandParam.ON
            )

    async def async_turn_off(self, **_):
        """Send the off command."""
        if self.executor.has_command(OverkizCommand.OFF):
            await self.executor.async_execute_command(OverkizCommand.OFF)
        elif self.executor.has_command(OverkizCommand.SET_FORCE_HEATING):
            await self.executor.async_execute_command(
                OverkizCommand.SET_FORCE_HEATING, OverkizCommandParam.OFF
            )

    async def async_toggle(self, **_):
        """Click the switch."""
        if self.executor.has_command(OverkizCommand.CYCLE):
            await self.executor.async_execute_command(OverkizCommand.CYCLE)

    @property
    def is_on(self):
        """Get whether the switch is in on state."""
        return (
            self.executor.select_state(
                OverkizState.CORE_ON_OFF, OverkizState.IO_FORCE_HEATING_STATE
            )
            == OverkizCommandParam.ON
        )


class OverkizLowSpeedCoverSwitch(OverkizEntity, SwitchEntity, RestoreEntity):
    """Representation of Low Speed Switch."""

    _attr_icon = "mdi:feather"

    def __init__(self, device_url: str, coordinator: OverkizDataUpdateCoordinator):
        """Initialize the low speed switch."""
        super().__init__(device_url, coordinator)
        self._is_on = False
        self._attr_name = f"{super().name} low speed"
        self._attr_entity_category = EntityCategory.CONFIG

    async def async_added_to_hass(self):
        """Run when entity about to be added."""
        await super().async_added_to_hass()
        state = await self.async_get_last_state()
        if state:
            self._is_on = state.state == OverkizCommandParam.ON

    @property
    def is_on(self) -> bool:
        """Get whether the switch is in on state."""
        return self._is_on

    async def async_turn_on(self, **kwargs: Any) -> None:
        """Send the on command."""
        self._is_on = True
        self.async_write_ha_state()

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Send the off command."""
        self._is_on = False
        self.async_write_ha_state()
