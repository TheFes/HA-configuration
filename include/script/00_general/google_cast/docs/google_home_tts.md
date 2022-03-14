# Background
When sending a TTS, you can only define the message, but if you have a device with a screen, it would be nice if it could display additional information while the text is being played. Especially if there are other sounds, like screaming children, loud espresso machines or drilling neighbours.

# Requirements
* Home Assistant version 2022.2 is required because the `iif` filter/function introduced in that version is used in templates
* The [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) and all its [prerequisites](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896#prerequisites-10)
* A dummy media player to send the TTS to
* A trigger based template sensor to store the link to the TTS mp3


# Most recent changes
### Version 1.0.0 - 14 March 2022
#### ✨ New feature
* Initial post of script

# Dummy media player
For the Dummy media_player I used this [HACS custom component](https://github.com/Sennevds/media_player.template)
```yaml
media_player:
  - platform: media_player_template
    media_players:
      tts_dummy:
        friendly_name: TTS Dummy
        device_class: speaker
        value_template: "off"
        turn_on: []
        turn_off: []
```

# Trigger based template sensor
This is the trigger based template sensor in which the location of the TTS mp3 is stored:
```yaml
template:
  - trigger:
      - platform: event
        event_type: call_service
        event_data:
          domain: media_player
          service: play_media
          service_data:
            media_content_type: music
            entity_id: ["media_player.tts_dummy"]
    sensor:
      - name: TTS Dummy
        unique_id: 059c2595-7308-4259-a320-2ee37eb2f5b0
        state: "{{ trigger.event.data.service_data.media_content_id }}"
        icon: mdi:text-box
```

# How to use start script
To use the script you will need to provide the `action` to be performed. Like the Google Home Resume script only service calls are working. In case no service calls are entered the script will stop (it will only stop the ambient sound, but not resume the previous stream).
There is no need to provide the `target`, it will be added by the Google Home Voice script, based on the ambient sound playing.
In case you need to change the volume (eg for TTS) you can use the `volume` variable.

*Example*
Let's say you have the Waze and proximity integrations set up, and want to send out a TTS message with the ETA.

The script will then be something like this:
```yaml
eta_thefes:
  alias: "ETA TheFes"
  icon: mdi:car
  sequence:
    - variables:
        message: >
          {% set eta = (as_timestamp(now()) + 60 * states ('sensor.thefes_home') | float(0) | timestamp_custom('%H:%M') %}
          If TheFes leaves now, he will be home at {{ eta }}.
    - alias: "TTS for speaker voice command"
      service: script.google_home_voice
      data:
        target_conversion:
          media_player.kitchen_hub: media_player.livinghome_group
        use_resume: true
        action:
          - alias: "Send TTS message"
            service: tts.google_cloud_say
            data:
              message: "{{ message }}"
        volume: 35
```
Variables in service call for the script:
|Variable|Required|Description|
| --- | --- | --- |
|target|Yes|The target to which the TTS should be sent|
|message|Yes|The TTS message|
|large_text|yes|The text to be displayed large|
|small_text|yes|The text to be displayed small|
|picture_url|yes|A full url to a picture (so no HA internal URL)|


# And finally the script itself
[Link to the script ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_tts.yaml) on my Github config, so I don have to maintain it in two places

# Explanation of variables in the script

Only `check_for_title` is mandatory. Resuming Spotify won't work properly without `default_spotcast`.

|Variable|Required|Example|Description|
| --- | --- | --- | --- |
|media_player|Yes|`media_player.tts_dummy`|The entity_id of the dummy media_player|
|sensor|Yes|`sensor.tts_dummy`|The entity_id of the sensor in which the TTS mp3 link is stored|

# Other scripts
For other related Google Home scripst, see my [Github page](https://github.com/TheFes/HA-configuration/tree/main/include/script/00_general/google_cast)

# Buy me a coffee
If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>