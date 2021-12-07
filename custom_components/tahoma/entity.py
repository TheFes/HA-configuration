"""Parent class for every Overkiz device."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Callable

from homeassistant.components.binary_sensor import BinarySensorEntityDescription
from homeassistant.components.number import NumberEntityDescription
from homeassistant.components.sensor import SensorEntityDescription
from homeassistant.const import ATTR_BATTERY_LEVEL
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.update_coordinator import CoordinatorEntity
from pyhoma.models import Device

from .const import DOMAIN
from .coordinator import OverkizDataUpdateCoordinator
from .executor import OverkizExecutor

CORE_AVAILABILITY_STATE = "core:AvailabilityState"
CORE_BATTERY_STATE = "core:BatteryState"
CORE_FIRMWARE_REVISION = "core:FirmwareRevision"
CORE_MANUFACTURER = "core:Manufacturer"
CORE_MANUFACTURER_NAME_STATE = "core:ManufacturerNameState"
CORE_MODEL_STATE = "core:ModelState"
CORE_PRODUCT_MODEL_NAME_STATE = "core:ProductModelNameState"
CORE_SENSOR_DEFECT_STATE = "core:SensorDefectState"
CORE_STATUS_STATE = "core:StatusState"

IO_MODEL_STATE = "io:ModelState"

STATE_AVAILABLE = "available"
STATE_BATTERY_FULL = "full"
STATE_BATTERY_NORMAL = "normal"
STATE_BATTERY_LOW = "low"
STATE_BATTERY_VERY_LOW = "verylow"
STATE_DEAD = "dead"

BATTERY_MAP = {
    STATE_BATTERY_FULL: 100,
    STATE_BATTERY_NORMAL: 75,
    STATE_BATTERY_LOW: 25,
    STATE_BATTERY_VERY_LOW: 10,
}


class OverkizEntity(CoordinatorEntity):
    """Representation of a Overkiz device entity."""

    coordinator: OverkizDataUpdateCoordinator

    def __init__(self, device_url: str, coordinator: OverkizDataUpdateCoordinator):
        """Initialize the device."""
        super().__init__(coordinator)
        self.device_url = device_url
        self.base_device_url, *_ = self.device_url.split("#")
        self.executor = OverkizExecutor(device_url, coordinator)

        self._attr_assumed_state = not self.device.states
        self._attr_available = self.device.available
        self._attr_name = self.device.label
        self._attr_unique_id = self.device.device_url

    @property
    def device(self) -> Device:
        """Return Overkiz device linked to this entity."""
        return self.coordinator.data[self.device_url]

    @property
    def device_info(self) -> DeviceInfo:
        """Return device registry information for this entity."""
        # Some devices, such as the Smart Thermostat have several devices in one physical device,
        # with same device url, terminated by '#' and a number.
        # In this case, we use the base device url as the device identifier.
        if "#" in self.device_url and not self.device_url.endswith("#1"):
            # Only return the url of the base device, to inherit device name and model from parent device.
            return {
                "identifiers": {(DOMAIN, self.executor.base_device_url)},
            }

        manufacturer = (
            self.executor.select_attribute(CORE_MANUFACTURER)
            or self.executor.select_state(CORE_MANUFACTURER_NAME_STATE)
            or self.coordinator.client.server.manufacturer
        )

        model = (
            self.executor.select_state(
                CORE_MODEL_STATE, CORE_PRODUCT_MODEL_NAME_STATE, IO_MODEL_STATE
            )
            or self.device.widget
        )

        return DeviceInfo(
            identifiers={(DOMAIN, self.executor.base_device_url)},
            name=self.device.label,
            manufacturer=manufacturer,
            model=model,
            sw_version=self.executor.select_attribute(CORE_FIRMWARE_REVISION),
            suggested_area=self.coordinator.areas[self.device.place_oid],
            via_device=self.executor.get_gateway_id(),
            configuration_url=self.coordinator.client.server.configuration_url,
        )

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes of the device."""
        attr = {}

        if self.executor.has_state(CORE_BATTERY_STATE):
            battery_state = self.executor.select_state(CORE_BATTERY_STATE)
            attr[ATTR_BATTERY_LEVEL] = BATTERY_MAP.get(battery_state, battery_state)

        if self.executor.select_state(CORE_SENSOR_DEFECT_STATE) == STATE_DEAD:
            attr[ATTR_BATTERY_LEVEL] = 0

        return attr


@dataclass
class OverkizSensorDescription(SensorEntityDescription):
    """Class to describe an Overkiz sensor."""

    native_value: Callable[
        [str | int | float], str | int | float
    ] | None = lambda val: val


@dataclass
class OverkizBinarySensorDescription(BinarySensorEntityDescription):
    """Class to describe an Overkiz binary sensor."""

    is_on: Callable[[str], bool] = lambda state: state


@dataclass
class OverkizNumberDescription(NumberEntityDescription):
    """Class to describe an Overkiz number."""

    command: str = None

    max_value: float | None = None
    min_value: float | None = None
    min_step: float | None = None
    value: float | None = None
    state: Callable[[str], bool] = lambda state: state


class OverkizDescriptiveEntity(OverkizEntity):
    """Representation of a Overkiz device entity based on a description."""

    def __init__(
        self,
        device_url: str,
        coordinator: OverkizDataUpdateCoordinator,
        description: OverkizSensorDescription
        | OverkizBinarySensorDescription
        | OverkizNumberDescription,
    ):
        """Initialize the device."""
        super().__init__(device_url, coordinator)
        self.entity_description = description
        self._attr_name = f"{super().name} {self.entity_description.name}"
        self._attr_unique_id = f"{super().unique_id}-{self.entity_description.key}"
