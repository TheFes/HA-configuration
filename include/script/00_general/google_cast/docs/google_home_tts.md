# Background
When sending a TTS, you can only define the message, but if you have a device with a screen, it would be nice if it could display additional information while the text is being played. Especially if there are other sounds, like screaming children, loud espresso machines or drilling neighbours.

# Requirements
* A dummy media player to send the TTS to
* A trigger based template sensor to store the link to the TTS mp3


# Most recent changes
### Version 1.0.0 - 14 March 2022
#### ✨ New feature
* Initial post of script

# Setup
## Dummy media player
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

## Trigger based template sensor
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
## And finally the script itself
[Link to the script ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_tts.yaml) on my Github config, so I don have to maintain it in two places

Place it in your `scripts.yaml` with a file editor (like [Visual Studio Code Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode) or [File Editor Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator)), not via the GUI. 

## Explanation of variables in the script

Both variables are required for correct working of the script

|Variable|Required|Example|Description|
| --- | --- | --- | --- |
|media_player|Yes|`media_player.tts_dummy`|The entity_id of the dummy media_player|
|sensor|Yes|`sensor.tts_dummy`|The entity_id of the sensor in which the TTS mp3 link is stored|

## How to use the script
*Example*
Let's say you want to send a message to your Google Nest Hub, and want to add some additional text and a picture

The script will then be something like this:
```yaml
eta_thefes:
  alias: "ETA TheFes"
  icon: mdi:car
  sequence:
    - alias: "TTS with picture and test"
      service: script.google_home_tts
      data:
        message: >
          {% set eta = (as_timestamp(now()) + 60 * states ('sensor.thefes_home') | float(0) | timestamp_custom('%H:%M') %}
          If TheFes leaves now, he will be home at {{ eta }}.
        large_text: >
          {% set eta = (as_timestamp(now()) + 60 * states ('sensor.thefes_home') | float(0) | timestamp_custom('%H:%M') %}
          ETA: {{ eta }}
        small_text: TheFes is on his way
        picture_url: http://10.0.0.5/local/pictures/thefes_in_car.jpg
```
Variables in service call for the script:
|Variable|Required|Description|
| --- | --- | --- |
|target|yes|The target to which the TTS should be sent|
|message|yes|The TTS message|
|large_text|yes|The text to be displayed large|
|small_text|yes|The text to be displayed small|
|picture_url|yes|A full url to a picture (so no HA internal URL)|

# Other scripts
For other related Google Home scripst, see my [Github page](https://github.com/TheFes/HA-configuration/tree/main/include/script/00_general/google_cast)

# Buy me a coffee
If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>