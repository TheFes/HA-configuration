"""Base class for TaHoma covers, shutters, awnings, etc."""
from homeassistant.components.cover import (
    ATTR_POSITION,
    ATTR_TILT_POSITION,
    SUPPORT_CLOSE_TILT,
    SUPPORT_OPEN_TILT,
    SUPPORT_SET_TILT_POSITION,
    SUPPORT_STOP_TILT,
    CoverEntity,
)

from ..entity import OverkizEntity

ATTR_OBSTRUCTION_DETECTED = "obstruction-detected"

COMMAND_CYCLE = "cycle"
COMMAND_CLOSE = "close"
COMMAND_CLOSE_SLATS = "closeSlats"
COMMAND_DOWN = "down"
COMMAND_DEPLOY = "deploy"
COMMAND_MY = "my"
COMMAND_OPEN = "open"
COMMAND_OPEN_SLATS = "openSlats"
COMMAND_SET_CLOSURE = "setClosure"
COMMAND_SET_CLOSURE_AND_LINEAR_SPEED = "setClosureAndLinearSpeed"
COMMAND_SET_DEPLOYMENT = "setDeployment"
COMMAND_SET_ORIENTATION = "setOrientation"
# io:DiscreteGateOpenerIOComponent
COMMAND_SET_PEDESTRIAN_POSITION = "setPedestrianPosition"

COMMAND_STOP = "stop"
COMMAND_STOP_IDENTIFY = "stopIdentify"
COMMAND_UNDEPLOY = "undeploy"
COMMAND_UP = "up"

COMMANDS_STOP = [COMMAND_STOP, COMMAND_STOP_IDENTIFY, COMMAND_MY]
COMMANDS_STOP_TILT = [COMMAND_STOP, COMMAND_STOP_IDENTIFY, COMMAND_MY]
COMMANDS_OPEN = [COMMAND_OPEN, COMMAND_UP, COMMAND_CYCLE]
COMMANDS_OPEN_TILT = [COMMAND_OPEN_SLATS]
COMMANDS_CLOSE = [COMMAND_CLOSE, COMMAND_DOWN, COMMAND_CYCLE]
COMMANDS_CLOSE_TILT = [COMMAND_CLOSE_SLATS]

COMMANDS_SET_TILT_POSITION = [COMMAND_SET_ORIENTATION]

CORE_CLOSURE_STATE = "core:ClosureState"
CORE_CLOSURE_OR_ROCKER_POSITION_STATE = "core:ClosureOrRockerPositionState"
CORE_DEPLOYMENT_STATE = "core:DeploymentState"
CORE_MOVING_STATE = "core:MovingState"
CORE_OPEN_CLOSED_PARTIAL_STATE = "core:OpenClosedPartialState"
# io:DiscreteGateOpenerIOComponent
CORE_OPEN_CLOSED_PEDESTRIAN_STATE = "core:OpenClosedPedestrianState"
CORE_OPEN_CLOSED_STATE = "core:OpenClosedState"
CORE_OPEN_CLOSED_UNKNOWN_STATE = "core:OpenClosedUnknownState"
# io:DiscreteGateOpenerIOComponent
CORE_PEDESTRIAN_POSITION_STATE = "core:PedestrianPositionState"
CORE_SLATS_OPEN_CLOSED_STATE = "core:SlatsOpenClosedState"
CORE_SLATE_ORIENTATION_STATE = "core:SlateOrientationState"
CORE_SLATS_ORIENTATION_STATE = "core:SlatsOrientationState"
CORE_TARGET_CLOSURE_STATE = "core:TargetClosureState"
MYFOX_SHUTTER_STATUS_STATE = "myfox:ShutterStatusState"

IO_PRIORITY_LOCK_LEVEL_STATE = "io:PriorityLockLevelState"

STATE_CLOSED = "closed"

SERVICE_COVER_MY_POSITION = "set_cover_my_position"
SERVICE_COVER_POSITION_LOW_SPEED = "set_cover_position_low_speed"

SUPPORT_MY = 512
SUPPORT_COVER_POSITION_LOW_SPEED = 1024


class OverkizGenericCover(OverkizEntity, CoverEntity):
    """Representation of a TaHoma Cover."""

    @property
    def current_cover_tilt_position(self):
        """Return current position of cover tilt.

        None is unknown, 0 is closed, 100 is fully open.
        """
        position = self.executor.select_state(
            CORE_SLATS_ORIENTATION_STATE, CORE_SLATE_ORIENTATION_STATE
        )
        return 100 - position if position is not None else None

    async def async_set_cover_position_low_speed(self, **kwargs):
        """Move the cover to a specific position with a low speed."""
        position = 100 - kwargs.get(ATTR_POSITION, 0)

        await self.executor.async_execute_command(
            COMMAND_SET_CLOSURE_AND_LINEAR_SPEED, position, "lowspeed"
        )

    async def async_set_cover_tilt_position(self, **kwargs):
        """Move the cover tilt to a specific position."""
        await self.executor.async_execute_command(
            self.executor.select_command(*COMMANDS_SET_TILT_POSITION),
            100 - kwargs.get(ATTR_TILT_POSITION, 0),
        )

    @property
    def is_closed(self):
        """Return if the cover is closed."""

        if self.current_cover_position is not None:
            return self.current_cover_position == 0

        state = self.executor.select_state(
            CORE_OPEN_CLOSED_STATE,
            CORE_SLATS_OPEN_CLOSED_STATE,
            CORE_OPEN_CLOSED_PARTIAL_STATE,
            CORE_OPEN_CLOSED_PEDESTRIAN_STATE,
            CORE_OPEN_CLOSED_UNKNOWN_STATE,
            MYFOX_SHUTTER_STATUS_STATE,
        )
        if state is not None:
            return state == STATE_CLOSED

        if self.current_cover_tilt_position is not None:
            return self.current_cover_tilt_position == 0

        return None

    async def async_open_cover_tilt(self, **_):
        """Open the cover tilt."""
        await self.executor.async_execute_command(
            self.executor.select_command(*COMMANDS_OPEN_TILT)
        )

    async def async_close_cover_tilt(self, **_):
        """Close the cover tilt."""
        await self.executor.async_execute_command(
            self.executor.select_command(*COMMANDS_CLOSE_TILT)
        )

    async def async_stop_cover(self, **_):
        """Stop the cover."""
        await self.async_cancel_or_stop_cover(
            COMMANDS_OPEN + [COMMAND_SET_CLOSURE] + COMMANDS_CLOSE,
            COMMANDS_STOP,
        )

    async def async_stop_cover_tilt(self, **_):
        """Stop the cover tilt."""
        await self.async_cancel_or_stop_cover(
            COMMANDS_OPEN_TILT + COMMANDS_SET_TILT_POSITION + COMMANDS_CLOSE_TILT,
            COMMANDS_STOP_TILT,
        )

    async def async_cancel_or_stop_cover(self, cancel_commands, stop_commands) -> None:
        """Cancel running execution or send stop command."""
        # Cancelling a running execution will stop the cover movement
        # Retrieve executions initiated via Home Assistant from Data Update Coordinator queue
        exec_id = next(
            (
                exec_id
                # Reverse dictionary to cancel the last added execution
                for exec_id, execution in reversed(self.coordinator.executions.items())
                if execution.get("device_url") == self.device.device_url
                and execution.get("command_name") in cancel_commands
            ),
            None,
        )

        if exec_id:
            return await self.executor.async_cancel_command(exec_id)

        # Retrieve executions initiated outside Home Assistant via API
        executions = await self.coordinator.client.get_current_executions()
        exec_id = next(
            (
                execution.id
                for execution in executions
                # Reverse dictionary to cancel the last added execution
                for action in reversed(execution.action_group.get("actions"))
                for command in action.get("commands")
                if action.get("device_url") == self.device.device_url
                and command.get("name") in cancel_commands
            ),
            None,
        )

        if exec_id:
            return await self.executor.async_cancel_command(exec_id)

        # Fallback to available stop commands when no executions are found
        # Stop commands don't work with all devices, due to a bug in Somfy service
        await self.executor.async_execute_command(
            self.executor.select_command(*stop_commands)
        )

    async def async_my(self, **_):
        """Set cover to preset position."""
        await self.executor.async_execute_command(COMMAND_MY)

    @property
    def is_opening(self):
        """Return if the cover is opening or not."""

        if self.assumed_state:
            return None

        if any(
            execution.get("device_url") == self.device.device_url
            and execution.get("command_name") in COMMANDS_OPEN + COMMANDS_OPEN_TILT
            for execution in self.coordinator.executions.values()
        ):
            return True

        is_moving = self.device.states.get(CORE_MOVING_STATE)
        current_closure = self.device.states.get(CORE_CLOSURE_STATE)
        target_closure = self.device.states.get(CORE_TARGET_CLOSURE_STATE)
        return (
            is_moving
            and is_moving.value
            and current_closure
            and target_closure
            and current_closure.value > target_closure.value
        )

    @property
    def is_closing(self):
        """Return if the cover is closing or not."""

        if self.assumed_state:
            return None

        if any(
            execution.get("device_url") == self.device.device_url
            and execution.get("command_name") in COMMANDS_CLOSE + COMMANDS_CLOSE_TILT
            for execution in self.coordinator.executions.values()
        ):
            return True

        is_moving = self.device.states.get(CORE_MOVING_STATE)
        current_closure = self.device.states.get(CORE_CLOSURE_STATE)
        target_closure = self.device.states.get(CORE_TARGET_CLOSURE_STATE)
        return (
            is_moving
            and is_moving.value
            and current_closure
            and target_closure
            and current_closure.value < target_closure.value
        )

    @property
    def device_state_attributes(self):
        """Return the device state attributes."""
        attr = super().device_state_attributes or {}

        # Obstruction Detected attribute is used by HomeKit
        if self.executor.has_state(IO_PRIORITY_LOCK_LEVEL_STATE):
            attr[ATTR_OBSTRUCTION_DETECTED] = True

        return attr

    @property
    def supported_features(self):
        """Flag supported features."""
        supported_features = 0

        if self.executor.has_command(*COMMANDS_OPEN_TILT):
            supported_features |= SUPPORT_OPEN_TILT

            if self.executor.has_command(*COMMANDS_STOP_TILT):
                supported_features |= SUPPORT_STOP_TILT

        if self.executor.has_command(*COMMANDS_CLOSE_TILT):
            supported_features |= SUPPORT_CLOSE_TILT

        if self.executor.has_command(*COMMANDS_SET_TILT_POSITION):
            supported_features |= SUPPORT_SET_TILT_POSITION

        if self.executor.has_command(COMMAND_SET_CLOSURE_AND_LINEAR_SPEED):
            supported_features |= SUPPORT_COVER_POSITION_LOW_SPEED

        if self.executor.has_command(COMMAND_MY):
            supported_features |= SUPPORT_MY

        return supported_features
