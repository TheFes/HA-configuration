"""Support for Overkiz binary sensors."""
from __future__ import annotations

from homeassistant.components import binary_sensor
from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN
from .entity import OverkizBinarySensorDescription, OverkizDescriptiveEntity

STATE_OPEN = "open"
STATE_PERSON_INSIDE = "personInside"
STATE_DETECTED = "detected"


BINARY_SENSOR_DESCRIPTIONS = [
    # RainSensor/RainSensor
    OverkizBinarySensorDescription(
        key="core:RainState",
        name="Rain",
        icon="mdi:weather-rainy",
        is_on=lambda state: state == STATE_DETECTED,
    ),
    # SmokeSensor/SmokeSensor
    OverkizBinarySensorDescription(
        key="core:SmokeState",
        name="Smoke",
        device_class=binary_sensor.DEVICE_CLASS_SMOKE,
        is_on=lambda state: state == STATE_DETECTED,
    ),
    # WaterSensor/WaterDetectionSensor
    OverkizBinarySensorDescription(
        key="core:WaterDetectionState",
        name="Water",
        icon="mdi:water",
        is_on=lambda state: state == STATE_DETECTED,
    ),
    # AirSensor/AirFlowSensor
    OverkizBinarySensorDescription(
        key="core:GasDetectionState",
        name="Gas",
        device_class=binary_sensor.DEVICE_CLASS_GAS,
        is_on=lambda state: state == STATE_DETECTED,
    ),
    # OccupancySensor/OccupancySensor
    # OccupancySensor/MotionSensor
    OverkizBinarySensorDescription(
        key="core:OccupancyState",
        name="Occupancy",
        device_class=binary_sensor.DEVICE_CLASS_OCCUPANCY,
        is_on=lambda state: state == STATE_PERSON_INSIDE,
    ),
    # ContactSensor/WindowWithTiltSensor
    OverkizBinarySensorDescription(
        key="core:VibrationState",
        name="Vibration",
        device_class=binary_sensor.DEVICE_CLASS_VIBRATION,
        is_on=lambda state: state == STATE_DETECTED,
    ),
    # ContactSensor/ContactSensor
    OverkizBinarySensorDescription(
        key="core:ContactState",
        name="Contact",
        device_class=binary_sensor.DEVICE_CLASS_DOOR,
        is_on=lambda state: state == STATE_OPEN,
    ),
    # Unknown
    OverkizBinarySensorDescription(
        key="io:VibrationDetectedState",
        name="Vibration",
        device_class=binary_sensor.DEVICE_CLASS_VIBRATION,
        is_on=lambda state: state == STATE_DETECTED,
    ),
    # DomesticHotWaterProduction/WaterHeatingSystem
    OverkizBinarySensorDescription(
        key="io:OperatingModeCapabilitiesState",
        name="Energy Demand Status",
        device_class=binary_sensor.DEVICE_CLASS_HEAT,
        is_on=lambda state: state.get("energyDemandStatus") == 1,
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
