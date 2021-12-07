"""Constants for the Overkiz (by Somfy) integration."""
from datetime import timedelta

from homeassistant.components.alarm_control_panel import DOMAIN as ALARM_CONTROL_PANEL
from homeassistant.components.binary_sensor import DOMAIN as BINARY_SENSOR
from homeassistant.components.climate import DOMAIN as CLIMATE
from homeassistant.components.cover import DOMAIN as COVER
from homeassistant.components.light import DOMAIN as LIGHT
from homeassistant.components.lock import DOMAIN as LOCK
from homeassistant.components.number import DOMAIN as NUMBER
from homeassistant.components.scene import DOMAIN as SCENE
from homeassistant.components.sensor import DOMAIN as SENSOR
from homeassistant.components.switch import DOMAIN as SWITCH
from homeassistant.components.water_heater import DOMAIN as WATER_HEATER

DOMAIN = "tahoma"

CONF_HUB = "hub"
DEFAULT_HUB = "somfy_europe"

UPDATE_INTERVAL = timedelta(seconds=30)
UPDATE_INTERVAL_ALL_ASSUMED_STATE = timedelta(minutes=60)

SUPPORTED_PLATFORMS = [
    ALARM_CONTROL_PANEL,
    BINARY_SENSOR,
    CLIMATE,
    COVER,
    LIGHT,
    LOCK,
    NUMBER,
    SCENE,
    SENSOR,
    SWITCH,
    WATER_HEATER,
]

IGNORED_OVERKIZ_DEVICES = [
    "ProtocolGateway",
    "Pod",
    # entries mapped to Sensor based on available states
    "AirSensor",
    "ConsumptionSensor",
    "ElectricitySensor",
    "GasSensor",
    "GenericSensor",
    "HumiditySensor",
    "LightSensor",
    "SunIntensitySensor",
    "SunSensor",
    "TemperatureSensor",
    "ThermalEnergySensor",
    "WaterSensor",
    "WeatherSensor",
    "WindSensor",
    # entries mapped to Binary Sensor based on available states
    "AirFlowSensor",  # widgetName, uiClass is AirSensor (sensor)
    "ContactSensor",
    "MotionSensor",
    "OccupancySensor",
    "RainSensor",
    "SmokeSensor",
    "WaterDetectionSensor",  # widgetName, uiClass is HumiditySensor (sensor)
]

# Used to map the Somfy widget and ui_class to the Home Assistant platform
OVERKIZ_DEVICE_TO_PLATFORM = {
    "AdjustableSlatsRollerShutter": COVER,
    "Alarm": ALARM_CONTROL_PANEL,
    "AtlanticElectricalHeater": CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    "AtlanticElectricalHeaterWithAdjustableTemperatureSetpoint": CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    "AtlanticElectricalTowelDryer": CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    "AtlanticPassAPCDHW": CLIMATE,  # widgetName, uiClass is WaterHeatingSystem (not supported)
    "AtlanticPassAPCHeatingAndCoolingZone": CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    "AtlanticPassAPCZoneControl": CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    "Awning": COVER,
    "Curtain": COVER,
    "DimmerExteriorHeating": CLIMATE,  # widgetName, uiClass is ExteriorHeatingSystem (not supported)
    "DomesticHotWaterProduction": WATER_HEATER,  # widgetName, uiClass is WaterHeatingSystem (not supported)
    "DomesticHotWaterTank": SWITCH,  # widgetName, uiClass is WaterHeatingSystem (not supported)
    "DoorLock": LOCK,
    "EvoHomeController": CLIMATE,  # widgetName, uiClass is EvoHome (not supported)
    "ExteriorScreen": COVER,
    "ExteriorVenetianBlind": COVER,
    "GarageDoor": COVER,
    "Gate": COVER,
    "HeatingSetPoint": CLIMATE,  # widgetName, uiClass is EvoHome (not supported)
    "HitachiDHW": WATER_HEATER,  # widgetName, uiClass is HitachiHeatingSystem (not supported)
    "HitachiAirToWaterHeatingZone": CLIMATE,  # widgetName, uiClass is HitachiHeatingSystem (not supported)
    "HitachiAirToAirHeatPump": CLIMATE,  # widgetName, uiClass is HitachiHeatingSystem (not supported)
    "Light": LIGHT,
    "MyFoxSecurityCamera": COVER,  # widgetName, uiClass is Camera (not supported)
    "OnOff": SWITCH,
    "Pergola": COVER,
    "RollerShutter": COVER,
    "RTSGeneric": COVER,  # widgetName, uiClass is Generic (not supported)
    "Screen": COVER,
    "Shutter": COVER,
    "Siren": SWITCH,
    "SirenStatus": None,  # widgetName, uiClass is Siren (switch)
    "SomfyThermostat": CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    "StatelessExteriorHeating": CLIMATE,  # widgetName, uiClass is ExteriorHeatingSystem.
    "SwimmingPool": SWITCH,
    "SwingingShutter": COVER,
    "VenetianBlind": COVER,
    "Window": COVER,
}

CORE_ON_OFF_STATE = "core:OnOffState"

COMMAND_OFF = "off"
COMMAND_ON = "on"
