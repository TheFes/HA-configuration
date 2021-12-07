import urllib.parse
import async_timeout
import aiohttp
import asyncio
import re
import logging
import voluptuous as vol
import homeassistant.util as util

from datetime import timedelta
from homeassistant.helpers.aiohttp_client import async_get_clientsession

_LOGGER = logging.getLogger(__name__)

VERSION = '1.0.0'

DOMAIN = "samsung_soundbar"

MIN_TIME_BETWEEN_SCANS = timedelta(seconds=3)
MIN_TIME_BETWEEN_FORCED_SCANS = timedelta(seconds=3)

from homeassistant.helpers import config_validation as cv

from homeassistant.components.media_player import (
  MediaPlayerEntity,
  PLATFORM_SCHEMA
)

from homeassistant.components.media_player.const import (
  MEDIA_TYPE_CHANNEL,
  SUPPORT_TURN_ON,
  SUPPORT_TURN_OFF,
  SUPPORT_VOLUME_MUTE,
  SUPPORT_SELECT_SOURCE,
  SUPPORT_VOLUME_SET,
)

from homeassistant.const import (
  CONF_NAME,
  CONF_HOST,
  STATE_IDLE,
  STATE_ON,
  STATE_OFF
)

MULTI_ROOM_SOURCE_TYPE = [
  'hdmi1',
  'hdmi2',
  'optical',
  'bt',
  'wifi'
]

DEFAULT_NAME = 'Samsung Soundbar'
DEFAULT_PORT = '56001'
DEFAULT_POWER_OPTIONS = True
DEFAULT_MAX_VOLUME = '40'
BOOL_OFF = 'off'
BOOL_ON = 'on'
TIMEOUT = 2
SUPPORT_SAMSUNG_MULTI_ROOM = SUPPORT_VOLUME_SET | SUPPORT_VOLUME_MUTE | SUPPORT_SELECT_SOURCE

CONF_MAX_VOLUME = 'max_volume'
CONF_PORT = 'port'
CONF_POWER_OPTIONS = 'power_options'

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
  vol.Required(CONF_HOST, default='127.0.0.1'): cv.string,
  vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
  vol.Optional(CONF_PORT, default=DEFAULT_PORT): cv.string,
  vol.Optional(CONF_MAX_VOLUME, default=DEFAULT_MAX_VOLUME): cv.string,
  vol.Optional(CONF_POWER_OPTIONS, default=DEFAULT_POWER_OPTIONS): cv.boolean
})

class MultiRoomApi():
  def __init__(self, ip, port, session, hass):
    self.session = session
    self.hass = hass
    self.ip = ip
    self.port = port
    self.endpoint = 'http://{0}:{1}'.format(ip, port)

  async def _exec_cmd(self, mode ,cmd, key_to_extract):
    import xmltodict
    query = urllib.parse.urlencode({ "cmd": cmd }, quote_via=urllib.parse.quote)
    url = '{0}/{1}?{2}'.format(self.endpoint, mode, query)

    try:
      with async_timeout.timeout(TIMEOUT, loop=self.hass.loop):
        _LOGGER.debug("Executing: {} with cmd: {}".format(url, cmd))
        response = await self.session.get(url)
        data = await response.text()
        _LOGGER.debug(data)
        if data and key_to_extract:
          return re.findall(key_to_extract,data)
        return None
    except:
      _LOGGER.debug("exception")
      return None

  async def _exec_get(self, mode, action, key_to_extract):
    return await self._exec_cmd(mode, '<name>{0}</name>'.format(action), key_to_extract)

  async def _exec_set(self, mode, action, property_name, value):
    if type(value) is str:
      value_type = 'str'
    else:
      value_type = 'dec'
    cmd = '<name>{0}</name><p type="{3}" name="{1}" val="{2}"/>'.format(action, property_name, value, value_type)
    return await self._exec_cmd(mode, cmd, property_name)

  async def _exec_play(self, mode, action, property_name, value, p2, v2):
    if type(value) is str:
      value_type = 'str'
    else:
      value_type = 'dec'
    cmd = '<name>{0}</name><p type="{3}" name="{1}" val="{2}"/><p type="{3}" name="{4}" val="{5}"/>'.format(action, property_name, value, value_type, p2, v2)
    return await self._exec_cmd(mode, cmd, property_name)

  async def get_state(self):
    result = await self._exec_get('UIC','GetPowerStatus', '<powerStatus>(.*?)</powerStatus>')
    if result:
      return result[0]
    return 0

  async def set_state(self, key):
    await self._exec_set('UIC','SetPowerStatus', 'powerStatus', int(key))

  async def get_main_info(self):
    return await self._exec_get('UIC','GetMainInfo')

  async def get_volume(self):
    return await self._exec_get('UIC','GetVolume', '<volume>(.*?)</volume')

  async def set_volume(self, volume):
    await self._exec_set('UIC','SetVolume', 'volume', int(volume))

  async def get_speaker_name(self):
    return await self._exec_get('UIC','GetSpkName', '<spkname>(.*?)</spkname>')

  async def get_radio_info(self):
    return await self._exec_get('CPM','GetRadioInfo', '<title>(.*?)</title>')

  async def get_radio_image(self):
    return await self._exec_get('CPM','GetRadioInfo', '<thumbnail>(.*?)</thumbnail>')

  async def get_muted(self):
    return await self._exec_get('UIC','GetMute', '<mute>(.*?)</mute>') == BOOL_ON

  async def set_muted(self, mute):
    if mute:
      await self._exec_set('UIC','SetMute', 'mute', BOOL_ON)
    else:
      await self._exec_set('UIC','SetMute', 'mute', BOOL_OFF)

  async def get_source(self):
    "res[0] = source ; res[1] = mode"
    res = []
    result = await self._exec_get('UIC','GetFunc', '<response result="ok">(.*?)</response>')
    if result:
      function = re.findall('<function>(.*?)</function>',result[0])[0]
      res.append(function)
      if function == 'bt':
        res.append(False)
      else:
        mode = re.findall('<submode>(.*?)</submode>',result[0])
        if mode and mode[0] == 'cp':
          res.append('TuneIn')
        else:
          res.append(False)
      return res
    return None

  async def set_source(self, source):
    SEPARATOR = ' - '
    if SEPARATOR in source:
      r = source.split(SEPARATOR)
      await self._exec_play('CPM','PlayById', 'cpname', r[1], 'mediaid', 's137149')
    else:
      await self._exec_set('UIC','SetFunc', 'function', source)

class MultiRoomDevice(MediaPlayerEntity):
  """Representation of a Samsung MultiRoom device."""
  def __init__(self, name, max_volume, power_options ,api):
    _LOGGER.info('Initializing MultiRoomDevice')
    self._name = name
    self.api = api
    self._state = STATE_OFF
    self._current_source = None
    self._media_title = ''
    self._image_url = ''
    self._volume = 0
    self._mode = ''
    self._muted = False
    self._max_volume = max_volume
    self._power_options = power_options

  @property
  def supported_features(self):
    """Flag media player features that are supported."""
    if self._power_options:
      return SUPPORT_SAMSUNG_MULTI_ROOM | SUPPORT_TURN_OFF | SUPPORT_TURN_ON
    return SUPPORT_SAMSUNG_MULTI_ROOM


  @property
  def name(self):
    """Return the name of the device."""
    return self._name

  @property
  def media_title(self):
    """Title of current playing media."""
    return self._media_title

  @property
  def media_image_url(self):
    """Url for image of current playing media."""
    return self._image_url

  @property
  def state(self):
    """Return the state of the device."""
    return self._state

  @property
  def mode(self):
    """Return the sub mode of the device."""
    return self._mode

  @property
  def volume_level(self):
    """Return the volume level."""
    return self._volume

  async def async_set_volume_level(self, volume):
    """Sets the volume level."""
    newVolume = volume * self._max_volume
    await self.api.set_volume(newVolume)
    self._volume = volume

  @property
  def is_volume_muted(self):
    """Boolean if volume is currently muted."""
    return self._muted

  async def async_mute_volume(self, mute):
    """Sets volume mute to true."""
    await self.api.set_muted(mute)
    self._muted = mute


  @property
  def source(self):
    """Return the current source."""
    return self._current_source

  @property
  def source_list(self):
    """List of available input sources."""
    return sorted(MULTI_ROOM_SOURCE_TYPE)

  async def async_select_source(self, source):
    """Select input source."""
    if source not in MULTI_ROOM_SOURCE_TYPE:
      _LOGGER.error("Unsupported source")
      return

    await self.api.set_source(source)
    self._current_source = source

  async def async_turn_off(self):
      """Turn the media player off."""
      await self.api.set_state(0)

  async def async_turn_on(self):
      """Turn the media player on."""
      await self.api.set_state(1)

  @util.Throttle(MIN_TIME_BETWEEN_SCANS, MIN_TIME_BETWEEN_FORCED_SCANS)
  async def async_update(self):
    """Update the media player State."""
    _LOGGER.info('Refreshing state...')
    "Update with power options"
    if self._power_options:
      "Get Power State"
      state = await self.api.get_state()
      _LOGGER.debug(state)
      if state and int(state) == 1:
        "If Power is ON, update other values"
        self._state = STATE_ON
        "Get Current Source"
        source = await self.api.get_source()
        "Source 0 is type on input"
        if source[0]:
          self._current_source = source[0]
        "Source 1 is input mode"
        if source[1]:
          self._mode = source[1]
        else:
          self._mode = ''
        "Get Volume"
        volume = await self.api.get_volume()
        if volume[0]:
          self._volume = int(volume[0]) / self._max_volume
        "Get Mute State"
        muted = await self.api.get_muted()
        if muted:
          self._muted = muted
        if self._mode == 'TuneIn':
          title = await self.api.get_radio_info()
          if title:
            self._media_title = str(title[0])
          image = await self.api.get_radio_image()
          if image:
            self._image_url = str(image[0])
        else:
          self._media_title = ''
          self._image_url = None
      else:
        self._state = STATE_OFF
        self._media_title = ''
        self._image_url = None
    else:
      "Update without power options"
      self._media_title = ''
      self._image_url = None
      "Get Current Source"
      source = await self.api.get_source()
      if source:
        self._current_source = source[0]
        self._state = STATE_PLAYING
      else:
        self._state = STATE_OFF
      "Get Volume"
      volume = await self.api.get_volume()
      if volume:
        self._volume = int(volume[0]) / self._max_volume
      "Get Mute State"
      muted = await self.api.get_muted()
      if muted:
        self._muted = muted

def setup_platform(hass, config, add_devices, discovery_info=None):
  """Set up the Samsung MultiRoom platform."""
  ip = config.get(CONF_HOST)
  port = config.get(CONF_PORT)
  name = config.get(CONF_NAME)
  max_volume = int(config.get(CONF_MAX_VOLUME))
  power_options = config.get(CONF_POWER_OPTIONS)
  session = async_get_clientsession(hass)
  api = MultiRoomApi(ip, port, session, hass)
  add_devices([MultiRoomDevice(name, max_volume, power_options ,api)], True)

