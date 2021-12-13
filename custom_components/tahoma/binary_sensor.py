"""Support for Overkiz binary sensors."""
from __future__ import annotations

from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from pyhoma.enums import OverkizCommandParam, OverkizState

from .const import DOMAIN, IGNORED_OVERKIZ_DEVICES
from .entity import OverkizBinarySensorDescription, OverkizDescriptiveEntity

BINARY_SENSOR_DESCRIPTIONS = [
    # RainSensor/RainSensor
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_RAIN,
        name="Rain",
        icon="mdi:weather-rainy",
        is_on=lambda state: state == OverkizCommandParam.DETECTED,
    ),
    # SmokeSensor/SmokeSensor
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_SMOKE,
        name="Smoke",
        device_class=BinarySensorDeviceClass.SMOKE,
        is_on=lambda state: state == OverkizCommandParam.DETECTED,
    ),
    # WaterSensor/WaterDetectionSensor
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_WATER_DETECTION,
        name="Water",
        icon="mdi:water",
        is_on=lambda state: state == OverkizCommandParam.DETECTED,
    ),
    # AirSensor/AirFlowSensor
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_GAS_DETECTION,
        name="Gas",
        device_class=BinarySensorDeviceClass.GAS,
        is_on=lambda state: state == OverkizCommandParam.DETECTED,
    ),
    # OccupancySensor/OccupancySensor
    # OccupancySensor/MotionSensor
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_OCCUPANCY,
        name="Occupancy",
        device_class=BinarySensorDeviceClass.OCCUPANCY,
        is_on=lambda state: state == OverkizCommandParam.PERSON_INSIDE,
    ),
    # ContactSensor/WindowWithTiltSensor
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_VIBRATION,
        name="Vibration",
        device_class=BinarySensorDeviceClass.VIBRATION,
        is_on=lambda state: state == OverkizCommandParam.DETECTED,
    ),
    # ContactSensor/ContactSensor
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_CONTACT,
        name="Contact",
        device_class=BinarySensorDeviceClass.DOOR,
        is_on=lambda state: state == OverkizCommandParam.OPEN,
    ),
    # Siren/SirenStatus
    OverkizBinarySensorDescription(
        key=OverkizState.CORE_ASSEMBLY,
        name="Assembly",
        device_class=BinarySensorDeviceClass.PROBLEM,
        is_on=lambda state: state == OverkizCommandParam.OPEN,
    ),
    # Unknown
    OverkizBinarySensorDescription(
        key=OverkizState.IO_VIBRATION_DETECTED,
        name="Vibration",
        device_class=BinarySensorDeviceClass.VIBRATION,
        is_on=lambda state: state == OverkizCommandParam.DETECTED,
    ),
    # DomesticHotWaterProduction/WaterHeatingSystem
    OverkizBinarySensorDescription(
        key=OverkizState.IO_OPERATING_MODE_CAPABILITIES,
        name="Energy Demand Status",
        device_class=BinarySensorDeviceClass.HEAT,
        is_on=lambda state: state.get(OverkizCommandParam.ENERGY_DEMAND_STATUS) == 1,
    ),
]


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz sensors from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]
    entities = []

    key_supported_states = {
        description.key: description for description in BINARY_SENSOR_DESCRIPTIONS
    }

    for device in coordinator.data.values():
        if (
            device.widget not in IGNORED_OVERKIZ_DEVICES
            and device.ui_class not in IGNORED_OVERKIZ_DEVICES
        ):
            for state in device.definition.states:
                if description := key_supported_states.get(state.qualified_name):
                    entities.append(
                        OverkizBinarySensor(
                            device.device_url,
                            coordinator,
                            description,
                        )
                    )

    async_add_entities(entities)


class OverkizBinarySensor(OverkizDescriptiveEntity, BinarySensorEntity):
    """Representation of an Overkiz Binary Sensor."""

    @property
    def is_on(self):
        """Return the state of the sensor."""
        state = self.device.states.get(self.entity_description.key)

        if not state:
            return None

        return self.entity_description.is_on(state.value)
