"""Support for switches which integrates with other components."""
import logging

import homeassistant.helpers.config_validation as cv
import homeassistant.util.dt as dt_util
import voluptuous as vol
from homeassistant.components.media_player import (
    ENTITY_ID_FORMAT,
    PLATFORM_SCHEMA,
    MediaPlayerEntity,
)
from homeassistant.components.media_player.const import (
    SUPPORT_NEXT_TRACK,
    SUPPORT_PAUSE,
    SUPPORT_PLAY,
    SUPPORT_PLAY_MEDIA,
    SUPPORT_PREVIOUS_TRACK,
    SUPPORT_SEEK,
    SUPPORT_SELECT_SOUND_MODE,
    SUPPORT_SELECT_SOURCE,
    SUPPORT_STOP,
    SUPPORT_TURN_OFF,
    SUPPORT_TURN_ON,
    SUPPORT_VOLUME_MUTE,
    SUPPORT_VOLUME_SET,
    SUPPORT_VOLUME_STEP,
)
from homeassistant.components.template.const import (
    CONF_AVAILABILITY_TEMPLATE,
    DOMAIN,
    PLATFORMS,
)
from homeassistant.components.template.template_entity import TemplateEntity
from homeassistant.const import (
    ATTR_ENTITY_ID,
    ATTR_FRIENDLY_NAME,
    CONF_DEVICE_CLASS,
    CONF_ENTITY_PICTURE_TEMPLATE,
    CONF_ICON_TEMPLATE,
    CONF_VALUE_TEMPLATE,
    STATE_IDLE,
    STATE_OFF,
    STATE_ON,
    STATE_PAUSED,
    STATE_PLAYING,
    STATE_UNKNOWN,
)
from homeassistant.core import callback
from homeassistant.exceptions import TemplateError
from homeassistant.helpers.entity import async_generate_entity_id
from homeassistant.helpers.reload import async_setup_reload_service
from homeassistant.helpers.script import Script

# from . import extract_entities, initialise_templates


_LOGGER = logging.getLogger(__name__)
_VALID_STATES = [
    STATE_ON,
    STATE_OFF,
    "true",
    "false",
    STATE_IDLE,
    STATE_PAUSED,
    STATE_PLAYING,
]
CONF_AVAILABILITY_TEMPLATE = "availability_template"
CONF_MEDIAPLAYER = "media_players"
ON_ACTION = "turn_on"
OFF_ACTION = "turn_off"
PLAY_ACTION = "play"
STOP_ACTION = "stop"
PAUSE_ACTION = "pause"
NEXT_ACTION = "next"
PREVIOUS_ACTION = "previous"
VOLUME_UP_ACTION = "volume_up"
VOLUME_DOWN_ACTION = "volume_down"
MUTE_ACTION = "mute"
CURRENT_SOURCE_TEMPLATE = "current_source_template"
CONF_INPUTS = "inputs"
TITLE_TEMPLATE = "title_template"
ARTIST_TEMPLATE = "artist_template"
ALBUM_TEMPLATE = "album_template"
CURRENT_VOLUME_TEMPLATE = "current_volume_template"
CURRENT_IS_MUTED_TEMPLATE = "current_is_muted_template"
ALBUM_ART_TEMPLATE = "album_art_template"
SET_VOLUME_ACTION = "set_volume"
PLAY_MEDIA_ACTION = "play_media"
MEDIA_CONTENT_TYPE_TEMPLATE = "media_content_type_template"
MEDIA_IMAGE_URL_TEMPLATE = "media_image_url_template"
MEDIA_EPISODE_TEMPLATE = "media_episode_template"
MEDIA_SEASON_TEMPLATE = "media_season_template"
MEDIA_SERIES_TITLE_TEMPLATE = "media_series_title_template"
MEDIA_ALBUM_ARTIST_TEMPLATE = "media_album_artist_template"
SEEK_ACTION = "seek"
CURRENT_POSITION_TEMPLATE = "current_position_template"
MEDIA_DURATION_TEMPLATE = "media_duration_template"
CURRENT_SOUND_MODE_TEMPLATE = "current_sound_mode_template"
CONF_SOUND_MODES = "sound_modes"
CONF_UNIQUE_ID = "unique_id"


MEDIA_PLAYER_SCHEMA = vol.Schema(
    {
        vol.Required(CONF_VALUE_TEMPLATE): cv.template,
        vol.Optional(CONF_ICON_TEMPLATE): cv.template,
        vol.Optional(CONF_DEVICE_CLASS): cv.string,
        vol.Optional(CONF_UNIQUE_ID): cv.string,
        vol.Optional(CONF_ENTITY_PICTURE_TEMPLATE): cv.template,
        vol.Optional(CONF_AVAILABILITY_TEMPLATE): cv.template,
        vol.Optional(CURRENT_SOURCE_TEMPLATE): cv.template,
        vol.Required(ON_ACTION): cv.SCRIPT_SCHEMA,
        vol.Required(OFF_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(PLAY_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(STOP_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(PAUSE_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(NEXT_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(PREVIOUS_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(VOLUME_UP_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(VOLUME_DOWN_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(MUTE_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(CONF_INPUTS, default={}): {cv.string: cv.SCRIPT_SCHEMA},
        vol.Optional(ATTR_FRIENDLY_NAME): cv.string,
        vol.Optional(ATTR_ENTITY_ID): cv.entity_ids,
        vol.Optional(SET_VOLUME_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(PLAY_MEDIA_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(TITLE_TEMPLATE): cv.template,
        vol.Optional(ARTIST_TEMPLATE): cv.template,
        vol.Optional(ALBUM_TEMPLATE): cv.template,
        vol.Optional(CURRENT_VOLUME_TEMPLATE): cv.template,
        vol.Optional(CURRENT_IS_MUTED_TEMPLATE): cv.template,
        vol.Optional(ALBUM_ART_TEMPLATE): cv.template,
        vol.Optional(MEDIA_CONTENT_TYPE_TEMPLATE): cv.template,
        vol.Optional(MEDIA_IMAGE_URL_TEMPLATE): cv.template,
        vol.Optional(MEDIA_EPISODE_TEMPLATE): cv.template,
        vol.Optional(MEDIA_SEASON_TEMPLATE): cv.template,
        vol.Optional(MEDIA_SERIES_TITLE_TEMPLATE): cv.template,
        vol.Optional(MEDIA_ALBUM_ARTIST_TEMPLATE): cv.template,
        vol.Optional(SEEK_ACTION): cv.SCRIPT_SCHEMA,
        vol.Optional(CURRENT_POSITION_TEMPLATE): cv.template,
        vol.Optional(MEDIA_DURATION_TEMPLATE): cv.template,
        vol.Optional(CONF_SOUND_MODES, default={}): {cv.string: cv.SCRIPT_SCHEMA},
        vol.Optional(CURRENT_SOUND_MODE_TEMPLATE): cv.template,
    }
)
SUPPORT_TEMPLATE = SUPPORT_TURN_OFF | SUPPORT_TURN_ON

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {vol.Required(CONF_MEDIAPLAYER): cv.schema_with_slug_keys(MEDIA_PLAYER_SCHEMA)}
)


async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    """Set up the template binary sensors."""

    await async_setup_reload_service(hass, DOMAIN, PLATFORMS)
    async_add_entities(await _async_create_entities(hass, config))


async def _async_create_entities(hass, config):
    """Set up the Template switch."""
    media_players = []

    for device, device_config in config[CONF_MEDIAPLAYER].items():
        friendly_name = device_config.get(ATTR_FRIENDLY_NAME, device)
        device_class = device_config.get(CONF_DEVICE_CLASS, device)
        state_template = device_config[CONF_VALUE_TEMPLATE]
        icon_template = device_config.get(CONF_ICON_TEMPLATE)
        unique_id = device_config.get(CONF_UNIQUE_ID)
        entity_picture_template = device_config.get(CONF_ENTITY_PICTURE_TEMPLATE)
        availability_template = device_config.get(CONF_AVAILABILITY_TEMPLATE)
        current_source_template = device_config.get(CURRENT_SOURCE_TEMPLATE)
        on_action = device_config[ON_ACTION]
        off_action = device_config[OFF_ACTION]
        play_action = device_config.get(PLAY_ACTION)
        stop_action = device_config.get(STOP_ACTION)
        pause_action = device_config.get(PAUSE_ACTION)
        next_action = device_config.get(NEXT_ACTION)
        previous_action = device_config.get(PREVIOUS_ACTION)
        volume_up_action = device_config.get(VOLUME_UP_ACTION)
        volume_down_action = device_config.get(VOLUME_DOWN_ACTION)
        mute_action = device_config.get(MUTE_ACTION)
        input_templates = device_config[CONF_INPUTS]
        title_template = device_config.get(TITLE_TEMPLATE)
        artist_template = device_config.get(ARTIST_TEMPLATE)
        album_template = device_config.get(ALBUM_TEMPLATE)
        current_volume_template = device_config.get(CURRENT_VOLUME_TEMPLATE)
        current_is_muted_template = device_config.get(CURRENT_IS_MUTED_TEMPLATE)
        album_art_template = device_config.get(ALBUM_ART_TEMPLATE)
        set_volume_action = device_config.get(SET_VOLUME_ACTION)
        play_media_action = device_config.get(PLAY_MEDIA_ACTION)
        media_content_type_template = device_config.get(MEDIA_CONTENT_TYPE_TEMPLATE)
        media_image_url_template = device_config.get(MEDIA_IMAGE_URL_TEMPLATE)
        media_episode_template = device_config.get(MEDIA_EPISODE_TEMPLATE)
        media_season_template = device_config.get(MEDIA_SEASON_TEMPLATE)
        media_series_title_template = device_config.get(MEDIA_SERIES_TITLE_TEMPLATE)
        media_album_artist_template = device_config.get(MEDIA_ALBUM_ARTIST_TEMPLATE)
        seek_action = device_config.get(SEEK_ACTION)
        current_position_template = device_config.get(CURRENT_POSITION_TEMPLATE)
        media_duration_template = device_config.get(MEDIA_DURATION_TEMPLATE)
        sound_mode_templates = device_config[CONF_SOUND_MODES]
        current_sound_mode_template = device_config.get(CURRENT_SOUND_MODE_TEMPLATE)

        media_players.append(
            MediaPlayerTemplate(
                hass,
                device,
                friendly_name,
                device_class,
                state_template,
                icon_template,
                unique_id,
                entity_picture_template,
                availability_template,
                current_source_template,
                on_action,
                off_action,
                play_action,
                stop_action,
                pause_action,
                next_action,
                previous_action,
                volume_up_action,
                volume_down_action,
                mute_action,
                input_templates,
                title_template,
                artist_template,
                album_template,
                current_volume_template,
                current_is_muted_template,
                album_art_template,
                set_volume_action,
                play_media_action,
                media_content_type_template,
                media_image_url_template,
                media_episode_template,
                media_season_template,
                media_series_title_template,
                media_album_artist_template,
                seek_action,
                current_position_template,
                media_duration_template,
                sound_mode_templates,
                current_sound_mode_template,
            )
        )
    return media_players


class MediaPlayerTemplate(TemplateEntity, MediaPlayerEntity):
    """Representation of a Template Media player."""

    def __init__(
        self,
        hass,
        device_id,
        friendly_name,
        device_class,
        state_template,
        icon_template,
        unique_id,
        entity_picture_template,
        availability_template,
        current_source_template,
        on_action,
        off_action,
        play_action,
        stop_action,
        pause_action,
        next_action,
        previous_action,
        volume_up_action,
        volume_down_action,
        mute_action,
        input_templates,
        title_template,
        artist_template,
        album_template,
        current_volume_template,
        current_is_muted_template,
        album_art_template,
        set_volume_action,
        play_media_action,
        media_content_type_template,
        media_image_url_template,
        media_episode_template,
        media_season_template,
        media_series_title_template,
        media_album_artist_template,
        seek_action,
        current_position_template,
        media_duration_template,
        sound_mode_templates,
        current_sound_mode_template,
    ):
        """Initialize the Template Media player."""
        super().__init__(
            hass,
            availability_template=availability_template,
            icon_template=icon_template,
            entity_picture_template=entity_picture_template,
        )
        self.hass = hass
        self.entity_id = async_generate_entity_id(
            ENTITY_ID_FORMAT, device_id, hass=hass
        )
        self._name = friendly_name
        self._device_class = device_class
        self._template = state_template
        self._domain = __name__.split(".")[-2]
        self._on_script = Script(hass, on_action, friendly_name, self._domain)
        self._off_script = Script(hass, off_action, friendly_name, self._domain)
        self._play_script = None
        if play_action is not None:
            self._play_script = Script(hass, play_action, friendly_name, self._domain)

        self._stop_script = None
        if stop_action is not None:
            self._stop_script = Script(hass, stop_action, friendly_name, self._domain)

        self._pause_script = None
        if pause_action is not None:
            self._pause_script = Script(hass, pause_action, friendly_name, self._domain)

        self._next_script = None
        if next_action is not None:
            self._next_script = Script(hass, next_action, friendly_name, self._domain)

        self._previous_script = None
        if previous_action is not None:
            self._previous_script = Script(
                hass, previous_action, friendly_name, self._domain
            )

        self._volume_up_script = None
        if volume_up_action is not None:
            self._volume_up_script = Script(
                hass, volume_up_action, friendly_name, self._domain
            )

        self._volume_down_script = None
        if volume_down_action is not None:
            self._volume_down_script = Script(
                hass, volume_down_action, friendly_name, self._domain
            )

        self._mute_script = None
        if mute_action is not None:
            self._mute_script = Script(hass, mute_action, friendly_name, self._domain)

        self._set_volume_script = None
        if set_volume_action is not None:
            self._set_volume_script = Script(
                hass, set_volume_action, friendly_name, self._domain
            )
        self._play_media_script = None
        if play_media_action is not None:
            self._play_media_script = Script(
                hass, play_media_action, friendly_name, self._domain
            )

        self._seek_script = None
        if seek_action is not None:
            self._seek_script = Script(hass, seek_action, friendly_name, self._domain)

        self._state = False
        self._icon = None
        self._unique_id = None
        if unique_id is not None:
            self._unique_id = unique_id
        self._entity_picture = None
        self._available = True
        self._input_templates = input_templates
        self._current_source_template = current_source_template
        self._current_source = None
        self._source_list = list(input_templates.keys())
        self._attributes = {}
        self._title_template = title_template
        self._artist_template = artist_template
        self._album_template = album_template
        self._current_volume_template = current_volume_template
        self._current_is_muted_template = current_is_muted_template
        self._album_art_template = album_art_template
        self._media_content_type_template = media_content_type_template
        self._media_image_url_template = media_image_url_template
        self._media_episode_template = media_episode_template
        self._media_season_template = media_season_template
        self._media_series_title_template = media_series_title_template
        self._media_album_artist_template = media_album_artist_template
        self._media_content_type_template = media_content_type_template
        self._current_position_template = current_position_template
        self._media_duration_template = media_duration_template

        self._sound_mode_templates = sound_mode_templates
        self._current_sound_mode_template = current_sound_mode_template
        self._sound_mode = None
        self._sound_mode_list = list(sound_mode_templates.keys())

        self._track_name = None
        self._track_artist = None
        self._track_album_name = None
        self._album_art = None
        self._volume = None
        self._is_muted = None
        self._media_image_url = None
        self._media_episode = None
        self._media_season = None
        self._media_series_title = None
        self._media_album_artist = None
        self._media_content_type = None
        self._current_position = None
        self._media_duration = None
        self._last_update = None

    async def async_added_to_hass(self):
        """Register callbacks."""
        self.add_template_attribute("_state", self._template, None, self._update_state)

        if self._current_source_template is not None:
            self.add_template_attribute(
                "_current_source", self._current_source_template
            )

        if self._title_template is not None:
            self.add_template_attribute("_track_name", self._title_template)

        if self._artist_template is not None:
            self.add_template_attribute("_track_artist", self._artist_template)

        if self._album_template is not None:
            self.add_template_attribute("_track_album_name", self._album_template)

        if self._current_volume_template is not None:
            self.add_template_attribute("_volume", self._current_volume_template)

        if self._current_is_muted_template is not None:
            self.add_template_attribute("_is_muted", self._current_is_muted_template)

        if self._album_art_template is not None:
            self.add_template_attribute("_album_art", self._album_art_template)
        if self._media_content_type_template is not None:
            self.add_template_attribute(
                "_media_content_type", self._media_content_type_template
            )
        if self._media_image_url_template is not None:
            self.add_template_attribute(
                "_media_image_url", self._media_image_url_template
            )
        if self._media_episode_template is not None:
            self.add_template_attribute("_media_episode", self._media_episode_template)
        if self._media_season_template is not None:
            self.add_template_attribute("_media_season", self._media_season_template)
        if self._media_series_title_template is not None:
            self.add_template_attribute(
                "_media_series_title", self._media_series_title_template
            )
        if self._media_album_artist_template is not None:
            self.add_template_attribute(
                "_media_album_artist", self._media_album_artist_template
            )
        if self._current_position_template is not None:
            self.add_template_attribute(
                "_current_position", self._current_position_template
            )
        if self._media_duration_template is not None:
            self.add_template_attribute(
                "_media_duration", self._media_duration_template
            )
        if self._current_sound_mode_template is not None:
            self.add_template_attribute(
                "_sound_mode", self._current_sound_mode_template
            )

        await super().async_added_to_hass()

    @callback
    def _update_state(self, result):
        super()._update_state(result)
        self._state = None if isinstance(result, TemplateError) else result

    @property
    def name(self):
        """Return the name of the switch."""
        return self._name
    
    @property
    def device_class(self):
        """Return the class of this device."""
        return self._device_class

    @property
    def is_on(self):
        """Return true if device is on."""
        return self._state

    @property
    def should_poll(self):
        """Return the polling state."""
        return False

    @property
    def icon(self):
        """Return the icon to use in the frontend, if any."""
        return self._icon

    @property
    def entity_picture(self):
        """Return the entity_picture to use in the frontend, if any."""
        return self._entity_picture

    @property
    def supported_features(self):
        """Flag media player features that are supported."""

        support = SUPPORT_TEMPLATE
        if self._play_script is not None:
            support |= SUPPORT_PLAY
        if self._stop_script is not None:
            support |= SUPPORT_STOP
        if self._pause_script is not None:
            support |= SUPPORT_PAUSE
        if self._next_script is not None:
            support |= SUPPORT_NEXT_TRACK
        if self._previous_script is not None:
            support |= SUPPORT_PREVIOUS_TRACK
        if self._volume_up_script is not None or self._volume_down_script is not None:
            support |= SUPPORT_VOLUME_STEP
        if self._mute_script is not None:
            support |= SUPPORT_VOLUME_MUTE
        if self._source_list is not None:
            support |= SUPPORT_SELECT_SOURCE
        if self._set_volume_script is not None:
            support |= SUPPORT_VOLUME_SET
        if self._play_media_script is not None:
            support |= SUPPORT_PLAY_MEDIA
        if self._seek_script is not None:
            support |= SUPPORT_SEEK
        if self._sound_mode_list is not None:
            support |= SUPPORT_SELECT_SOUND_MODE
        return support

    @property
    def available(self) -> bool:
        """Return if the device is available."""
        return self._available

    @property
    def media_position_updated_at(self):
        """When was the position of the current playing media valid.
        Returns value from homeassistant.util.dt.utcnow().
        """
        return self._last_update

    async def async_turn_on(self):
        """Fire the on action."""
        await self._on_script.async_run(context=self._context)

    async def async_turn_off(self):
        """Fire the off action."""
        await self._off_script.async_run(context=self._context)

    async def async_volume_up(self):
        """Fire the off action."""
        await self._volume_up_script.async_run(context=self._context)

    async def async_volume_down(self):
        """Fire the off action."""
        await self._volume_down_script.async_run(context=self._context)

    async def async_mute_volume(self, mute):
        """Set the is_muted state."""
        if self._current_is_muted_template is None:
            self._is_muted = mute
            self.async_write_ha_state()
        await self._mute_script.async_run(
            {"is_muted": mute}, context=self._context
        )

    async def async_media_play(self):
        """Fire the off action."""
        await self._play_script.async_run(context=self._context)

    async def async_media_stop(self):
        await self._stop_script.async_run(context=self._context)

    async def async_media_pause(self):
        """Fire the off action."""
        await self._pause_script.async_run(context=self._context)

    async def async_media_next_track(self):
        """Fire the media next action."""
        await self._next_script.async_run(context=self._context)

    async def async_media_previous_track(self):
        """Fire the media previous action."""
        await self._previous_script.async_run(context=self._context)

    async def async_set_volume_level(self, volume):
        """Set the volume."""
        if self._current_volume_template is None:
            self._volume = volume
            self.async_write_ha_state()
        await self._set_volume_script.async_run(
            {"volume": volume}, context=self._context
        )

    async def async_play_media(self, media_type, media_id, **kwargs):
        """play media"""
        await self._play_media_script.async_run(
            {"media_type": media_type, "media_id": media_id}, context=self._context
        )

    async def async_media_seek(self, position):
        """Send seek command."""
        await self._seek_script.async_run({"position": position}, context=self._context)

    @property
    def state(self):
        """Return the state of the player."""
        if self._state is None:
            return None
        elif self._state == "playing":
            return STATE_PLAYING
        elif self._state == "paused":
            return STATE_PAUSED
        elif self._state == "idle":
            return STATE_IDLE
        elif self._state == "on":
            return STATE_ON
        elif self._state == "off":
            return STATE_OFF
        return STATE_OFF

    @property
    def source(self):
        """Return the current input source."""
        try:
            if self._current_source_template is not None:
                self._current_source = self._current_source_template.async_render()
            return self._current_source
        except TemplateError as ex:
            _LOGGER.error(ex)
            return None

    @property
    def source_list(self):
        """List of available input sources."""
        return self._source_list

    @property
    def unique_id(self):
        """Unique id."""
        return self._unique_id

    @property
    def volume_level(self):
        """Volume level of the media player (0..1)."""
        return self._volume

    @property
    def is_volume_muted(self):
        """Boolean if volume is currently muted."""
        return self._is_muted

    @property
    def media_title(self):
        """Title of current playing media."""
        return self._track_name

    @property
    def media_artist(self):
        """Artist of current playing media, music track only."""
        return self._track_artist

    @property
    def media_content_type(self):
        """Content type of current playing media."""
        # if self._state == STATE_PLAYING or self._state == STATE_PAUSED:
        #     return MEDIA_TYPE_MUSIC
        return self._media_content_type

    @property
    def media_album_name(self):
        """Album name of current playing media, music track only."""
        return self._track_album_name

    @property
    def media_album_artist(self):
        return self._media_album_artist

    @property
    def media_series_title(self):
        """Return the title of the series of current playing media."""
        return self._media_series_title

    @property
    def media_season(self):
        """Season of current playing media (TV Show only)."""
        return self._media_season

    @property
    def media_episode(self):
        """Episode of current playing media (TV Show only)."""
        return self._media_episode

    @property
    def media_image_url(self):
        return self._media_image_url

    @property
    def media_image_remotely_accessible(self) -> bool:
        """If the image url is remotely accessible."""
        return True

    @property
    def media_position(self):
        """Position of current playing media in seconds."""
        if self._state == "playing" or self._state == "paused":
            self._last_update = dt_util.utcnow()
            return self._current_position
        return None

    @property
    def media_duration(self):
        if self._state == "playing" or self._state == "paused":
            return self._media_duration
        return None

    @property
    def sound_mode(self):
        """Return the current input source."""
        try:
            if self._current_sound_mode_template is not None:
                self._curre = self._current_sound_mode_template.async_render()
            return self._sound_mode
        except TemplateError as ex:
            _LOGGER.error(ex)
            return None

    @property
    def sound_mode_list(self):
        """Return a list of available sound modes."""
        return self._sound_mode_list

    async def async_select_source(self, source):
        """Set the input source."""
        if source in self._input_templates:
            source_script = Script(
                self.hass, self._input_templates[source], self._name, self._domain
            )
            if self._current_source_template is None:
                self._current_source = source
                self.async_write_ha_state()
            await source_script.async_run(context=self._context)

    async def async_select_sound_mode(self, sound_mode):
        """Select sound mode."""
        if sound_mode in self._sound_mode_templates:
            sound_mode_script = Script(
                self.hass,
                self._sound_mode_templates[sound_mode],
                self._name,
                self._domain,
            )
            if self._current_sound_mode_template is None:
                self._sound_mode = sound_mode
                self.async_write_ha_state()
            await sound_mode_script.async_run(context=self._context)

    async def async_update(self):
        """Update the state from the template."""

        try:
            state = self._template.async_render().lower()

            if state in _VALID_STATES:
                self._state = state
            elif state == STATE_UNKNOWN:
                self._state = None
            else:
                _LOGGER.error(
                    "Received invalid media_player state: %s. Expected: %s.",
                    state,
                    ", ".join(_VALID_STATES),
                )
                self._state = None

        except TemplateError as ex:
            _LOGGER.error(ex)
            self._state = None

        for property_name, template in (
            ("_icon", self._icon_template),
            ("_entity_picture", self._entity_picture_template),
            ("_available", self._availability_template),
            ("_volume", self._current_volume_template),
            ("_is_muted", self._current_is_muted_template),
            ("_track_name", self._title_template),
            ("_track_artist", self._artist_template),
            ("_track_album_name", self._album_template),
            ("_album_art", self._album_art_template),
            ("_current_positon", self._current_position),
            ("_media_duration", self._media_duration),
        ):
            if template is None:
                continue

            try:
                value = template.async_render()
                if property_name == "_available":
                    value = value.lower() == "true"
                if (
                    property_name == "_current_positon"
                    and value != self._current_position
                ):
                    self._last_update = dt_util.utcnow()
                setattr(self, property_name, value)
            except TemplateError as ex:
                friendly_property_name = property_name[1:].replace("_", " ")
                if ex.args and ex.args[0].startswith(
                    "UndefinedError: 'None' has no attribute"
                ):
                    # Common during HA startup - so just a warning
                    _LOGGER.warning(
                        "Could not render %s template %s, the state is unknown.",
                        friendly_property_name,
                        self._name,
                    )
                    return

                try:
                    setattr(self, property_name, getattr(super(), property_name))
                except AttributeError:
                    _LOGGER.error(
                        "Could not render %s template %s: %s",
                        friendly_property_name,
                        self._name,
                        ex,
                    )
