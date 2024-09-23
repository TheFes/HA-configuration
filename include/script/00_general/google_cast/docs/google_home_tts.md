# Background
When sending a TTS, you can only define the message, but if you have a device with a screen, it would be nice if it could display additional information while the text is being played. Especially if there are other sounds, like screaming children, loud espresso machines or drilling neighbours.

# Requirements
* A dummy media player to send the TTS to. As of 2022.4 this media_player needs to work with the TTS service, because otherwise it will throw an error and the script will not continue. I've installed the VLC add-on on my system, and use `media_player.vlc_telnet` created by the VLC Telnet integration for the TTS.


# Most recent changes
### Version 2.0.0/2.0.1 - 8 April 2022
#### :star2: Improvements
* Really simplified this script, no need for a template sensor anymore.
#### :bug: Bug fixes
* (2.0.1) Some fixes

### Version 1.1.0 - 1 April 2022
#### :star2: Improvements
* Simplified `wait_template` by removing conversion to timestamps
* Home Assistant 2022.4 checks if an entity actually works with a service call, and throws an error if not, therefor I had to replace the Dummy Media Player with the VLC Media Player.

### Version 1.0.0 - 14 March 2022
#### ✨ New feature
* Initial post of script on Github, posted on the forum here on 17th of March

# Setup
## Dummy media player
Install the VLC Add on from the Add on store in the Superviser. HA should automatically find a new integration and after adding that you should have `media_player.vlc_telnet`
In case you don't have the Superviser, because you use `core` or `docker` you could probably use another VLC instance to do the same.

## The script itself
[Link to the script ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_tts.yaml) on my Github config, so I don have to maintain it in two places

Place it in your `scripts.yaml` with a file editor (like [Visual Studio Code Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode) or [File Editor Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator)), not via the GUI. 

## How to use the script
*Example*
Let's say you want to send a message to your Google Nest Hub in the office, to announce dinner is ready, and want to add some additional text and a picture

The script will then be something like this:
```yaml
dinner_ready:
  alias: "TTS with picture when dinner is ready"
  icon: mdi:food
  sequence:
    - alias: "Call the script with the additional data as script variables"
      action: script.turn_on
      target:
        entity_id: script.google_home_tts_screen
      data:
        variables:
          dummy_player: media_player.vlc_telnet 
          target: media_player.office_hub 
          large_text: DINNER!
          small_text: Quick, before it gets cold
          picture_url: http://10.0.0.5/local/pictures/food.jpg
    - alias: "Send the TTS service call to the dummy player"
      action: tts.google_cloud_say
      target: 
        entity_id: media_player.vlc_telnet
      data:
        message: Dinner is ready!
```
Variables in service call for the script:
|Variable|Required|Description|
| --- | --- | --- |
|dummy_player|yes|The dummy media_player set up for this script
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

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](upload://zyyhWlE190RjgJNhRPCoBuUDhKa.png)</a>
