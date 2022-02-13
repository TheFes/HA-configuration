# Background
In another post I have share a [script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) to send actions to a Google Home and resume the stream (TuneIn / Spotify) which was playing afterwards. It also restores the volume, and you can work with Google Home speakers groups.

In my home I have several Google Nest/Home speakers, and I had some scripts where a TTS would be sent which was triggered by a Google Home routine. However, I could only set it to a predefined Google Home speaker, and not to the specific speaker on which I gave the voice command.

This made me thinking, and I found a solution for this, using the ambient sounds which you can start in your routines.

So I made a new script, which can be used in cooperation with the other script, to send a TTS or other actions, like e.g. an image, or a cast of your Lovelace dashboard to specific Google Home after you ask a question to it. 

The script itself relies on the other script, so make sure that script is running correctly first, including the prerequisites.

# Requirements
* Home Assistant version 2022.2 is required because the `iif` filter/function introduced in that version is used in templates
* For Spotify you need to have the [Spotify integration ](https://www.home-assistant.io/integrations/spotify/) installed, and [Spotcast ](https://github.com/fondberg/spotcast/) (available on [HACS](https://github.com/hacs/integration))
* The [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) and all its [prerequisites](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896#prerequisites-10)


# Most recent change
### Version 
### Version 1.2.0 - 13 February 2022
#### 🔴 BREAKING
* Made several changes in how data is sent from this script to the [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-radio-tunein-and-spotify-after-tts-on-google-home-speakers/326634). So if you update this script, make sure to also update the other one. However, as of this version, it is also possible to use this script without the Google Home Resume script
#### ✨ New feature
* It is now possible to use `target_conversion`. This means you can give your voice command, and perform your actions on another target eg the speaker group the target belongs to.
* By setting the `use_resume` variable to `false` you can send the actions without using the Google Home Resume script. This can be used if you for example want to start a radio stream which is not in TuneIn, and do not want to resume other streams in case that one is stopped.
* The `target` determined by the ambient sound will only be used in case you omit the target in your service call. If you provide it, that target will be used. This can be useful if you also want to provide other actions, for example setting the state of an `input_boolean`.
* In case you don't have the need to use the Google Home Script at all, you can set `use_resume: false` in the variables of the Google Home Voice script, and it will just send the actions.
#### 🌟 Improvements
* Information is shared with the Google Home Resume script in a better way. This was also needed because now multiple targets or groups as target are possible, where in the old version there was always only one target.
* Information on for the `ytube_music_player` integration is now also shared.

### Version 1.1.0 - 10 February 2022
#### 🌟 Improvements
* No need to define `speaker_groups` anymore, as I found a way to define them using a template.

### Version 1.0.0 - 9 February 2022
#### ✨ New feature
* Now the new script is used, other actions besides TTS are supported

#### 🌟 Improvements
* Added version number as a variable to the `sequence`. This will make it more easy to see which changes there are since you last updated the script
* Several improvements in the templates
* Update of this post

# Prerequisites
1. Expose scripts to Google Assistant (either use [Nabu Casa](https://www.nabucasa.com/), or the [manual setup](https://www.home-assistant.io/integrations/google_assistant/))
1. A separate script per TTS messsage, which will be called from the Google Home
1. A routine in the Google Home app which starts the script (you can find your scripts under `Adjust Home Devices` -> `Adjust scenes`) 
The last action in your routine should be to start the ambient sound (`Play and control media` -> `Sleep sounds` -> Any sound you only use for this script
1. Define the right variables for your home in the Google Home Voice script as desribed below

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
|action|Yes|The title of the ambient sound as shown in developer tools > states |
|target_conversion|No|A list dictonary with target replacements when you send the voice command|
|use_resume|No|Set to `false` in case you don't want to use the Google Home Resume script, and just want to send the actions|



# And finally the script itself
[Link to the script ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_voice.yaml) on my Github config, so I don have to maintain it in two places

# Explanation of variables in the script

Only `check_for_title` is mandatory. Resuming Spotify won't work properly without `default_spotcast`.

|Variable|Required|Example|Description|
| --- | --- | --- | --- |
|check_for_title|Yes|`Witte Ruis`|The title of the ambient sound as shown in developer tools > states |
|primary_spotcast|No|`pepijn`|The Spotify account which is used as primary account for spotcast, should match the last part of the Spotify media player.|
|use_resume|No|`false`|Use `use_resume: false` if you don't have the Google Home Resume script. Don't set this setting when you do want to use it, but set it in the script call instead if you need it. Default is `true`.