"""Support for TaHoma Awnings."""
from homeassistant.components.cover import (
    ATTR_POSITION,
    DEVICE_CLASS_AWNING,
    SUPPORT_CLOSE,
    SUPPORT_OPEN,
    SUPPORT_SET_POSITION,
    SUPPORT_STOP,
)
from pyoverkiz.enums import OverkizCommand, OverkizState

from .tahoma_cover import COMMANDS_STOP, OverkizGenericCover


class Awning(OverkizGenericCover):
    """Representation of a TaHoma Awning."""

    _attr_device_class = DEVICE_CLASS_AWNING

    @property
    def supported_features(self):
        """Flag supported features."""
        supported_features = super().supported_features

        if self.executor.has_command(OverkizCommand.SET_DEPLOYMENT):
            supported_features |= SUPPORT_SET_POSITION

        if self.executor.has_command(OverkizCommand.DEPLOY):
            supported_features |= SUPPORT_OPEN

            if self.executor.has_command(*COMMANDS_STOP):
                supported_features |= SUPPORT_STOP

        if self.executor.has_command(OverkizCommand.UNDEPLOY):
            supported_features |= SUPPORT_CLOSE

        return supported_features

    @property
    def current_cover_position(self):
        """
        Return current position of cover.

        None is unknown, 0 is closed, 100 is fully open.
        """
        return self.executor.select_state(OverkizState.CORE_DEPLOYMENT)

    async def async_set_cover_position(self, **kwargs):
        """Move the cover to a specific position."""
        position = kwargs.get(ATTR_POSITION, 0)
        await self.executor.async_execute_command(
            OverkizCommand.SET_DEPLOYMENT, position
        )

    async def async_open_cover(self, **_):
        """Open the cover."""
        await self.executor.async_execute_command(OverkizCommand.DEPLOY)

    async def async_close_cover(self, **_):
        """Close the cover."""
        await self.executor.async_execute_command(OverkizCommand.UNDEPLOY)
