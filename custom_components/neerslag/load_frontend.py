from homeassistant.core import HomeAssistant
from homeassistant.components.frontend import add_extra_js_url
from aiohttp import web
import logging
import os
from .const import FRONTEND_SCRIPT_URL, DATA_EXTRA_MODULE_URL
import time

_LOGGER = logging.getLogger(__name__)


def setup_view(hass: HomeAssistant):
    dir_path = os.path.dirname(os.path.realpath(__file__))
    path_to_file = "{}/home-assistant-neerslag-card/neerslag-card.js".format(dir_path)
    should_cache = False

    timestamp = str(time.time())
    frontend_script_url_with_parameter = FRONTEND_SCRIPT_URL+"?cache="+timestamp

    hass.http.register_static_path(FRONTEND_SCRIPT_URL, str(path_to_file), should_cache)
    add_extra_js_url(hass, frontend_script_url_with_parameter , es5=False)