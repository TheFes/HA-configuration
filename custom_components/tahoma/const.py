"""Constants for the Overkiz (by Somfy) integration."""
from datetime import timedelta
from typing import Final

from homeassistant.const import Platform
from pyoverkiz.enums import UIClass, UIWidget

DOMAIN: Final = "tahoma"

CONF_HUB = "hub"
DEFAULT_HUB = "somfy_europe"

UPDATE_INTERVAL = timedelta(seconds=30)
UPDATE_INTERVAL_ALL_ASSUMED_STATE = timedelta(minutes=60)

SUPPORTED_PLATFORMS = [
    Platform.ALARM_CONTROL_PANEL,
    Platform.BINARY_SENSOR,
    Platform.BUTTON,
    Platform.CLIMATE,
    Platform.COVER,
    Platform.LIGHT,
    Platform.LOCK,
    Platform.NUMBER,
    Platform.SCENE,
    Platform.SELECT,
    Platform.SENSOR,
    Platform.SWITCH,
    Platform.WATER_HEATER,
]

IGNORED_OVERKIZ_DEVICES = [
    UIClass.PROTOCOL_GATEWAY,
    UIClass.POD,
]

# Used to map the Somfy widget and ui_class to the Home Assistant platform
OVERKIZ_DEVICE_TO_PLATFORM = {
    UIClass.ADJUSTABLE_SLATS_ROLLER_SHUTTER: Platform.COVER,
    UIClass.ALARM: Platform.ALARM_CONTROL_PANEL,
    UIWidget.ATLANTIC_ELECTRICAL_HEATER: Platform.CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    UIWidget.ATLANTIC_ELECTRICAL_HEATER_WITH_ADJUSTABLE_TEMPERATURE_SETPOINT: Platform.CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    UIWidget.ATLANTIC_ELECTRICAL_TOWEL_DRYER: Platform.CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    UIWidget.ATLANTIC_PASS_APC_DHW: Platform.CLIMATE,  # widgetName, uiClass is WaterHeatingSystem (not supported)
    UIWidget.ATLANTIC_PASS_APC_HEATING_AND_COOLING_ZONE: Platform.CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    UIWidget.ATLANTIC_PASS_APC_ZONE_CONTROL: Platform.CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    UIClass.AWNING: Platform.COVER,
    UIClass.CURTAIN: Platform.COVER,
    UIWidget.DIMMER_EXTERIOR_HEATING: Platform.CLIMATE,  # widgetName, uiClass is ExteriorHeatingSystem (not supported)
    UIWidget.DOMESTIC_HOT_WATER_PRODUCTION: Platform.WATER_HEATER,  # widgetName, uiClass is WaterHeatingSystem (not supported)
    UIWidget.DOMESTIC_HOT_WATER_TANK: Platform.SWITCH,  # widgetName, uiClass is WaterHeatingSystem (not supported)
    UIClass.DOOR_LOCK: Platform.LOCK,
    UIWidget.EVO_HOME_CONTROLLER: Platform.CLIMATE,  # widgetName, uiClass is EvoHome (not supported)
    UIClass.EXTERIOR_SCREEN: Platform.COVER,
    UIClass.EXTERIOR_VENETIAN_BLIND: Platform.COVER,
    UIClass.GARAGE_DOOR: Platform.COVER,
    UIClass.GATE: Platform.COVER,
    UIWidget.HEATING_SET_POINT: Platform.CLIMATE,  # widgetName, uiClass is EvoHome (not supported)
    UIWidget.HITACHI_DHW: Platform.WATER_HEATER,  # widgetName, uiClass is HitachiHeatingSystem (not supported)
    UIWidget.HITACHI_AIR_TO_WATER_HEATING_ZONE: Platform.CLIMATE,  # widgetName, uiClass is HitachiHeatingSystem (not supported)
    UIWidget.HITACHI_AIR_TO_AIR_HEAT_PUMP: Platform.CLIMATE,  # widgetName, uiClass is HitachiHeatingSystem (not supported)
    UIClass.LIGHT: Platform.LIGHT,
    UIWidget.MY_FOX_SECURITY_CAMERA: Platform.COVER,  # widgetName, uiClass is Camera (not supported)
    UIClass.ON_OFF: Platform.SWITCH,
    UIClass.PERGOLA: Platform.COVER,
    UIClass.ROLLER_SHUTTER: Platform.COVER,
    UIWidget.RTS_GENERIC: Platform.COVER,  # widgetName, uiClass is Generic (not supported)
    UIClass.SCREEN: Platform.COVER,
    UIClass.SHUTTER: Platform.COVER,
    UIClass.SIREN: Platform.SIREN,
    UIWidget.SIREN_STATUS: None,  # widgetName, uiClass is Siren (switch)
    UIWidget.SOMFY_THERMOSTAT: Platform.CLIMATE,  # widgetName, uiClass is HeatingSystem (not supported)
    UIWidget.STATELESS_EXTERIOR_HEATING: Platform.CLIMATE,  # widgetName, uiClass is ExteriorHeatingSystem.
    UIClass.SWIMMING_POOL: Platform.SWITCH,
    UIClass.SWINGING_SHUTTER: Platform.COVER,
    UIClass.VENETIAN_BLIND: Platform.COVER,
    UIClass.WINDOW: Platform.COVER,
}
