"""Support for TaHoma Vertical Covers."""
from homeassistant.components.cover import (
    ATTR_POSITION,
    DEVICE_CLASS_AWNING,
    DEVICE_CLASS_BLIND,
    DEVICE_CLASS_CURTAIN,
    DEVICE_CLASS_GARAGE,
    DEVICE_CLASS_GATE,
    DEVICE_CLASS_SHUTTER,
    DEVICE_CLASS_WINDOW,
    SUPPORT_CLOSE,
    SUPPORT_OPEN,
    SUPPORT_SET_POSITION,
    SUPPORT_STOP,
)
from homeassistant.const import STATE_ON

from .tahoma_cover import (
    COMMAND_SET_CLOSURE_AND_LINEAR_SPEED,
    COMMANDS_STOP,
    OverkizGenericCover,
)

COMMAND_CYCLE = "cycle"
COMMAND_CLOSE = "close"
COMMAND_DOWN = "down"
COMMAND_OPEN = "open"
COMMAND_SET_CLOSURE = "setClosure"

COMMAND_UP = "up"

COMMANDS_OPEN = [COMMAND_OPEN, COMMAND_UP, COMMAND_CYCLE]
COMMANDS_CLOSE = [COMMAND_CLOSE, COMMAND_DOWN, COMMAND_CYCLE]

CORE_CLOSURE_STATE = "core:ClosureState"
CORE_CLOSURE_OR_ROCKER_POSITION_STATE = "core:ClosureOrRockerPositionState"
# io:DiscreteGateOpenerIOComponent
CORE_PEDESTRIAN_POSITION_STATE = "core:PedestrianPositionState"

TAHOMA_COVER_DEVICE_CLASSES = {
    "Blind": DEVICE_CLASS_BLIND,
    "Curtain": DEVICE_CLASS_CURTAIN,
    "ExteriorScreen": DEVICE_CLASS_BLIND,
    "ExteriorVenetianBlind": DEVICE_CLASS_BLIND,
    "GarageDoor": DEVICE_CLASS_GARAGE,
    "Gate": DEVICE_CLASS_GATE,
    "MyFoxSecurityCamera": DEVICE_CLASS_SHUTTER,
    "Pergola": DEVICE_CLASS_AWNING,
    "RollerShutter": DEVICE_CLASS_SHUTTER,
    "SwingingShutter": DEVICE_CLASS_SHUTTER,
    "VeluxInteriorBlind": DEVICE_CLASS_BLIND,
    "Window": DEVICE_CLASS_WINDOW,
}


class VerticalCover(OverkizGenericCover):
    """Representation of a TaHoma Vertical Cover."""

    @property
    def supported_features(self):
        """Flag supported features."""
        supported_features = super().supported_features

        if self.executor.has_command(COMMAND_SET_CLOSURE):
            supported_features |= SUPPORT_SET_POSITION

        if self.executor.has_command(*COMMANDS_OPEN):
            supported_features |= SUPPORT_OPEN

            if self.executor.has_command(*COMMANDS_STOP):
                supported_features |= SUPPORT_STOP

        if self.executor.has_command(*COMMANDS_CLOSE):
            supported_features |= SUPPORT_CLOSE

        return supported_features

    @property
    def device_class(self):
        """Return the class of the device."""
        return (
            TAHOMA_COVER_DEVICE_CLASSES.get(self.device.widget)
            or TAHOMA_COVER_DEVICE_CLASSES.get(self.device.ui_class)
            or DEVICE_CLASS_BLIND
        )

    @property
    def current_cover_position(self):
        """
        Return current position of cover.

        None is unknown, 0 is closed, 100 is fully open.
        """
        position = self.executor.select_state(
            CORE_CLOSURE_STATE,
            CORE_CLOSURE_OR_ROCKER_POSITION_STATE,
            CORE_PEDESTRIAN_POSITION_STATE,
        )

        # Uno devices can have a position not in 0 to 100 range when unknown
        if position is None or position < 0 or position > 100:
            return None

        return 100 - position

    async def async_set_cover_position(self, **kwargs):
        """Move the cover to a specific position."""
        if self.is_low_speed_enabled():
            await self.async_set_cover_position_low_speed(**kwargs)
        else:
            position = 100 - kwargs.get(ATTR_POSITION, 0)
            await self.executor.async_execute_command(COMMAND_SET_CLOSURE, position)

    async def async_open_cover(self, **_):
        """Open the cover."""
        if self.is_low_speed_enabled():
            await self.async_set_cover_position_low_speed(**{ATTR_POSITION: 100})
        else:
            await self.executor.async_execute_command(
                self.executor.select_command(*COMMANDS_OPEN)
            )

    async def async_close_cover(self, **_):
        """Close the cover."""
        if self.is_low_speed_enabled():
            await self.async_set_cover_position_low_speed(**{ATTR_POSITION: 0})
        else:
            await self.executor.async_execute_command(
                self.executor.select_command(*COMMANDS_CLOSE)
            )

    def is_low_speed_enabled(self):
        """Return if low speed mode is enabled."""
        if not self.executor.has_command(COMMAND_SET_CLOSURE_AND_LINEAR_SPEED):
            return False

        switch_entity_id = f"{self.entity_id.replace('cover', 'switch')}_low_speed"
        low_speed_entity = self.coordinator.hass.states.get(switch_entity_id)
        return low_speed_entity.state == STATE_ON if low_speed_entity else False
