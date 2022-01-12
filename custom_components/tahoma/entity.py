"""Parent class for every Overkiz device."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Callable

from homeassistant.components.binary_sensor import BinarySensorEntityDescription
from homeassistant.components.button import ButtonEntityDescription
from homeassistant.components.number import NumberEntityDescription
from homeassistant.components.select import SelectEntityDescription
from homeassistant.components.sensor import SensorEntityDescription
from homeassistant.const import ATTR_BATTERY_LEVEL
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.update_coordinator import CoordinatorEntity
from pyoverkiz.enums import OverkizAttribute, OverkizCommandParam, OverkizState
from pyoverkiz.models import Device

from .const import DOMAIN
from .coordinator import OverkizDataUpdateCoordinator
from .executor import OverkizExecutor

BATTERY_MAP = {
    OverkizCommandParam.FULL: 100,
    OverkizCommandParam.NORMAL: 75,
    OverkizCommandParam.LOW: 25,
    OverkizCommandParam.VERY_LOW: 10,
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
            self.executor.select_attribute(OverkizAttribute.CORE_MANUFACTURER)
            or self.executor.select_state(OverkizState.CORE_MANUFACTURER_NAME)
            or self.coordinator.client.server.manufacturer
        )

        model = (
            self.executor.select_state(
                OverkizState.CORE_MODEL,
                OverkizState.CORE_PRODUCT_MODEL_NAME,
                OverkizState.IO_MODEL,
            )
            or self.device.widget
        )

        return DeviceInfo(
            identifiers={(DOMAIN, self.executor.base_device_url)},
            name=self.device.label,
            manufacturer=manufacturer,
            model=model,
            sw_version=self.executor.select_attribute(
                OverkizAttribute.CORE_FIRMWARE_REVISION
            ),
            suggested_area=self.coordinator.areas[self.device.place_oid],
            via_device=self.executor.get_gateway_id(),
            configuration_url=self.coordinator.client.server.configuration_url,
        )

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes of the device."""
        attr = {}

        if self.executor.has_state(OverkizState.CORE_BATTERY):
            battery_state = self.executor.select_state(OverkizState.CORE_BATTERY)
            attr[ATTR_BATTERY_LEVEL] = BATTERY_MAP.get(battery_state, battery_state)

        if (
            self.executor.select_state(OverkizState.CORE_SENSOR_DEFECT)
            == OverkizCommandParam.DEAD
        ):
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


@dataclass
class OverkizSelectDescription(SelectEntityDescription):
    """Class to describe an Overkiz select entity."""

    options: list[str] = None
    select_option: Callable[[str], bool] = lambda option, execute_command: None


class OverkizDescriptiveEntity(OverkizEntity):
    """Representation of a Overkiz device entity based on a description."""

    def __init__(
        self,
        device_url: str,
        coordinator: OverkizDataUpdateCoordinator,
        description: OverkizSensorDescription
        | OverkizBinarySensorDescription
        | OverkizNumberDescription
        | ButtonEntityDescription
        | OverkizSelectDescription,
    ):
        """Initialize the device."""
        super().__init__(device_url, coordinator)
        self.entity_description = description
        self._attr_name = f"{super().name} {self.entity_description.name}"
        self._attr_unique_id = f"{super().unique_id}-{self.entity_description.key}"
