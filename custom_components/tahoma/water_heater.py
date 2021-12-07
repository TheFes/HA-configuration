"""Support for Overkiz water heater devices."""
from homeassistant.components.water_heater import DOMAIN as WATER_HEATER
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DOMAIN
from .water_heater_devices.domestic_hot_water_production import (
    DomesticHotWaterProduction,
)
from .water_heater_devices.hitachi_dhw import HitachiDHW

TYPE = {
    "DomesticHotWaterProduction": DomesticHotWaterProduction,
    "HitachiDHW": HitachiDHW,
}


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the Overkiz water heater from a config entry."""
    data = hass.data[DOMAIN][entry.entry_id]
    coordinator = data["coordinator"]

    water_heater_devices = [device for device in data["platforms"][WATER_HEATER]]

    entities = [
        TYPE[device.widget](device.device_url, coordinator)
        for device in water_heater_devices
        if device.widget in TYPE
    ]
    async_add_entities(entities)
