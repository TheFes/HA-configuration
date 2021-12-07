"""Support for Overkiz sensors."""
from __future__ import annotations

from typing import Any

from homeassistant.components import sensor
from homeassistant.components.sensor import (
    STATE_CLASS_MEASUREMENT,
    STATE_CLASS_TOTAL_INCREASING,
    SensorEntity,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import (
    CONCENTRATION_PARTS_PER_MILLION,
    ENERGY_WATT_HOUR,
    ENTITY_CATEGORY_DIAGNOSTIC,
    LIGHT_LUX,
    PERCENTAGE,
    POWER_WATT,
    SIGNAL_STRENGTH_DECIBELS,
    TEMP_CELSIUS,
    TIME_SECONDS,
    VOLUME_FLOW_RATE_CUBIC_METERS_PER_HOUR,
    VOLUME_LITERS,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN
from .coordinator import OverkizDataUpdateCoordinator
from .entity import OverkizDescriptiveEntity, OverkizEntity, OverkizSensorDescription

HOMEKIT_SETUP_CODE = "homekit:SetupCode"
HOMEKIT_STACK = "HomekitStack"

SENSOR_DESCRIPTIONS = [
    OverkizSensorDescription(
        key="core:BatteryLevelState",
        name="Battery Level",
        native_unit_of_measurement=PERCENTAGE,
        device_class=sensor.DEVICE_CLASS_BATTERY,
        state_class=STATE_CLASS_MEASUREMENT,
        entity_category=ENTITY_CATEGORY_DIAGNOSTIC,
    ),
    OverkizSensorDescription(
        key="core:BatteryState",
        name="Battery",
        device_class=sensor.DEVICE_CLASS_BATTERY,
        native_value=lambda value: str(value).capitalize(),
        entity_category=ENTITY_CATEGORY_DIAGNOSTIC,
    ),
    OverkizSensorDescription(
        key="core:RSSILevelState",
        name="RSSI Level",
        native_unit_of_measurement=SIGNAL_STRENGTH_DECIBELS,
        device_class=sensor.DEVICE_CLASS_SIGNAL_STRENGTH,
        state_class=STATE_CLASS_MEASUREMENT,
        native_value=lambda value: round(value),
        entity_category=ENTITY_CATEGORY_DIAGNOSTIC,
    ),
    OverkizSensorDescription(
        key="core:ExpectedNumberOfShowerState",
        name="Expected Number Of Shower",
        icon="mdi:shower-head",
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:NumberOfShowerRemainingState",
        name="Number of Shower Remaining",
        icon="mdi:shower-head",
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # V40 is measured in litres (L) and shows the amount of warm (mixed) water with a temperature of 40 C, which can be drained from a switched off electric water heater.
    OverkizSensorDescription(
        key="core:V40WaterVolumeEstimationState",
        name="Water Volume Estimation at 40 °C",
        icon="mdi:water",
        native_unit_of_measurement=VOLUME_LITERS,
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:WaterConsumptionState",
        name="Water Consumption",
        icon="mdi:water",
        native_unit_of_measurement=VOLUME_LITERS,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="io:OutletEngineState",
        name="Outlet Engine",
        icon="mdi:fan-chevron-down",
        native_unit_of_measurement=VOLUME_LITERS,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="io:InletEngineState",
        name="Inlet Engine",
        icon="mdi:fan-chevron-up",
        native_unit_of_measurement=VOLUME_FLOW_RATE_CUBIC_METERS_PER_HOUR,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="hlrrwifi:RoomTemperatureState",
        name="Room Temperature",
        device_class=sensor.DEVICE_CLASS_TEMPERATURE,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="io:MiddleWaterTemperatureState",
        name="Middle Water Temperature",
        device_class=sensor.DEVICE_CLASS_TEMPERATURE,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:FossilEnergyConsumptionState",
        name="Fossil Energy Consumption",
        device_class=sensor.DEVICE_CLASS_ENERGY,
    ),
    OverkizSensorDescription(
        key="core:GasConsumptionState",
        name="Gas Consumption",
    ),
    OverkizSensorDescription(
        key="core:ThermalEnergyConsumptionState",
        name="Thermal Energy Consumption",
    ),
    # LightSensor/LuminanceSensor
    OverkizSensorDescription(
        key="core:LuminanceState",
        name="Luminance",
        device_class=sensor.DEVICE_CLASS_ILLUMINANCE,
        native_unit_of_measurement=LIGHT_LUX,  # core:MeasuredValueType = core:LuminanceInLux
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # ElectricitySensor/CumulativeElectricPowerConsumptionSensor
    OverkizSensorDescription(
        key="core:ElectricEnergyConsumptionState",
        name="Electric Energy Consumption",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh (not for modbus:YutakiV2DHWElectricalEnergyConsumptionComponent)
        state_class=STATE_CLASS_TOTAL_INCREASING,  # core:MeasurementCategory attribute = electric/overall
    ),
    OverkizSensorDescription(
        key="core:ElectricPowerConsumptionState",
        name="Electric Power Consumption",
        device_class=sensor.DEVICE_CLASS_POWER,
        native_unit_of_measurement=POWER_WATT,  # core:MeasuredValueType = core:ElectricalEnergyInWh (not for modbus:YutakiV2DHWElectricalEnergyConsumptionComponent)
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff1State",
        name="Consumption Tariff 1",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff2State",
        name="Consumption Tariff 2",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff3State",
        name="Consumption Tariff 3",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff4State",
        name="Consumption Tariff 4",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff5State",
        name="Consumption Tariff 5",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff6State",
        name="Consumption Tariff 6",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff7State",
        name="Consumption Tariff 7",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff8State",
        name="Consumption Tariff 8",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:ConsumptionTariff9State",
        name="Consumption Tariff 9",
        device_class=sensor.DEVICE_CLASS_ENERGY,
        native_unit_of_measurement=ENERGY_WATT_HOUR,  # core:MeasuredValueType = core:ElectricalEnergyInWh
        entity_registry_enabled_default=False,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # HumiditySensor/RelativeHumiditySensor
    OverkizSensorDescription(
        key="core:RelativeHumidityState",
        name="Relative Humidity",
        native_value=lambda value: round(value, 2),
        device_class=sensor.DEVICE_CLASS_HUMIDITY,
        native_unit_of_measurement=PERCENTAGE,  # core:MeasuredValueType = core:RelativeValueInPercentage
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # TemperatureSensor/TemperatureSensor
    OverkizSensorDescription(
        key="core:TemperatureState",
        name="Temperature",
        native_value=lambda value: round(value, 2),
        device_class=sensor.DEVICE_CLASS_TEMPERATURE,
        native_unit_of_measurement=TEMP_CELSIUS,  # core:MeasuredValueType = core:TemperatureInCelcius
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # WeatherSensor/WeatherForecastSensor
    OverkizSensorDescription(
        key="core:WeatherStatusState",
        name="Weather Status",
    ),
    OverkizSensorDescription(
        key="core:MinimumTemperatureState",
        name="Minimum Temperature",
        device_class=sensor.DEVICE_CLASS_TEMPERATURE,
        native_unit_of_measurement=TEMP_CELSIUS,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    OverkizSensorDescription(
        key="core:MaximumTemperatureState",
        name="Maximum Temperature",
        device_class=sensor.DEVICE_CLASS_TEMPERATURE,
        native_unit_of_measurement=TEMP_CELSIUS,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # AirSensor/COSensor
    OverkizSensorDescription(
        key="core:COConcentrationState",
        name="CO Concentration",
        device_class=sensor.DEVICE_CLASS_CO,
        native_unit_of_measurement=CONCENTRATION_PARTS_PER_MILLION,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # AirSensor/CO2Sensor
    OverkizSensorDescription(
        key="core:CO2ConcentrationState",
        name="CO2 Concentration",
        device_class=sensor.DEVICE_CLASS_CO2,
        native_unit_of_measurement=CONCENTRATION_PARTS_PER_MILLION,
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # SunSensor/SunEnergySensor
    OverkizSensorDescription(
        key="core:SunEnergyState",
        name="Sun Energy",
        native_value=lambda value: round(value, 2),
        device_class=sensor.DEVICE_CLASS_ENERGY,
        icon="mdi:solar-power",
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # WindSensor/WindSpeedSensor
    OverkizSensorDescription(
        key="core:WindSpeedState",
        name="Wind Speed",
        native_value=lambda value: round(value, 2),
        icon="mdi:weather-windy",
        state_class=STATE_CLASS_MEASUREMENT,
    ),
    # SmokeSensor/SmokeSensor
    OverkizSensorDescription(
        key="io:SensorRoomState",
        name="Sensor Room",
        native_value=lambda value: str(value).capitalize(),
        entity_registry_enabled_default=False,
    ),
    OverkizSensorDescription(
        key="io:PriorityLockOriginatorState",
        name="Priority Lock Originator",
        native_value=lambda value: str(value).capitalize(),
        icon="mdi:lock",
        entity_registry_enabled_default=False,
    ),
    OverkizSensorDescription(
        key="core:PriorityLockTimerState",
        name="Priority Lock Timer",
        icon="mdi:lock-clock",
        native_unit_of_measurement=TIME_SECONDS,
        entity_registry_enabled_default=False,
    ),
    OverkizSensorDescription(
        key="core:DiscreteRSSILevelState",
        name="Discrete RSSI Level",
        entity_registry_enabled_default=False,
        native_value=lambda value: str(value).capitalize(),
        device_class=sensor.DEVICE_CLASS_SIGNAL_STRENGTH,
        entity_category=ENTITY_CATEGORY_DIAGNOSTIC,
    ),
    # DomesticHotWaterProduction/WaterHeatingSystem
    OverkizSensorDescription(
        key="io:HeatPumpOperatingTimeState",
        name="Heat Pump Operating Time",
    ),
    OverkizSensorDescription(
        key="io:ElectricBoosterOperatingTimeState",
        name="Electric Booster Operating Time",
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
        description.key: description for description in SENSOR_DESCRIPTIONS
    }

    for device in coordinator.data.values():
        for state in device.definition.states:
            if description := key_supported_states.get(state.qualified_name):
                entities.append(
                    OverkizStateSensor(
                        device.device_url,
                        coordinator,
                        description,
                    )
                )

        if device.widget == HOMEKIT_STACK:
            entities.append(
                OverkizHomeKitSetupCodeSensor(
                    device.device_url,
                    coordinator,
                )
            )

    async_add_entities(entities)


class OverkizStateSensor(OverkizDescriptiveEntity, SensorEntity):
    """Representation of an Overkiz Sensor."""

    @property
    def state(self):
        """Return the value of the sensor."""
        state = self.device.states.get(self.entity_description.key)

        if not state:
            return None

        # Transform the value with a lambda function
        if hasattr(self.entity_description, "native_value"):
            return self.entity_description.native_value(state.value)

        return state.value


class OverkizHomeKitSetupCodeSensor(OverkizEntity, SensorEntity):
    """Representation of an Overkiz HomeKit Setup Code."""

    def __init__(self, device_url: str, coordinator: OverkizDataUpdateCoordinator):
        """Initialize the device."""
        super().__init__(device_url, coordinator)
        self._attr_name = "HomeKit Setup Code"
        self._attr_icon = "mdi:shield-home"
        self._attr_entity_category = ENTITY_CATEGORY_DIAGNOSTIC

    @property
    def state(self):
        """Return the value of the sensor."""
        return self.device.attributes.get(HOMEKIT_SETUP_CODE).value

    @property
    def device_info(self) -> dict[str, Any]:
        """Return device registry information for this entity."""
        # By default this sensor will be listed at a virtual HomekitStack device,
        # but it makes more sense to show this at the gateway device in the entity registry.
        return {
            "identifiers": {(DOMAIN, self.executor.get_gateway_id())},
        }
