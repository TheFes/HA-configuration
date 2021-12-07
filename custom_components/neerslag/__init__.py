"""The Neerslag Sensor (Buienalarm / Buienradar) integration."""
import asyncio
from .load_frontend import setup_view
import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN

# TODO List the platforms that you want to support.
# For your initial PR, limit it to 1 platform.
PLATFORMS = ["sensor"]

_LOGGER = logging.getLogger(__name__)


async def options_update_listener(hass: HomeAssistant, config_entry: ConfigEntry):
    """Handle options update."""

    _LOGGER.info("----------------This is being executed-------options_update_listener----------------")
    # await hass.config_entries.async_remove(config_entry.entry_id)
    # rr = hass.config_entries.async_entries(DOMAIN)
    # hass.config_entries.async_update_entry(config_entry, data=config_entry.options)
    # await hass.config_entries.async_reload(config_entry.entry_id)
    hass.config_entries.async_update_entry(config_entry, data=config_entry.options)


async def async_setup(hass: HomeAssistant, config_entry: dict):
    """Set up the Neerslag Sensor (Buienalarm / Buienradar) component."""
    hass.data.setdefault(DOMAIN, {})
    setup_view(hass)

    return True


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    """Set up Neerslag Sensor (Buienalarm / Buienradar) from a config entry."""

    # hass.states.async_set("neerslag_sensor.useBuienalarm", ConfigEntry.)

    # TODO Store an API object for your platforms to access
    # hass.data[DOMAIN][entry.entry_id] = MyApi(...)
    hass.data[DOMAIN][config_entry.entry_id] = {}

    hass_data = dict(config_entry.data)
    # Registers update listener to update config entry when options are updated.
    unsub_options_update_listener = config_entry.add_update_listener(options_update_listener)
    # Store a reference to the unsubscribe function to cleanup if an entry is unloaded.
    hass_data["unsub_options_update_listener"] = unsub_options_update_listener
    hass.data[DOMAIN][config_entry.entry_id] = hass_data

    for platform in PLATFORMS:
        hass.async_create_task(
            hass.config_entries.async_forward_entry_setup(config_entry, platform)
        )

    return True


async def async_unload_entry(hass: HomeAssistant, config_entry: ConfigEntry):
    # Remove options_update_listener.

    _LOGGER.info("REMOVE ><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

    """Unload a config entry."""
    unload_ok = all(
        await asyncio.gather(
            *[
                hass.config_entries.async_forward_entry_unload(config_entry, platform)
                for platform in PLATFORMS
            ]
        )
    )

    hass.data[DOMAIN][config_entry.entry_id]["unsub_options_update_listener"]()

    if unload_ok:
        hass.data[DOMAIN].pop(config_entry.entry_id)

    return unload_ok
