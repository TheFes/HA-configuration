## 9 FEBRUARY 2022 - POST REWRITTEN
This post has been completely rewritten to work with my new Google Home Resume script, instead of the TTS Scripts which is no longer maintaned by me.

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
        action:
          - alias: "Send TTS message"
            service: tts.google_cloud_say
            data:
              message: "{{ message }}"
        volume: 35
```

# And finally the script itself
[Link to the script ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_voice.yaml) on my Github config, so I don have to maintain it in two places

# Explanation of variables in the script

Only `check_for_title` is mandatory. Resuming Spotify won't work properly without `default_spotcast`.

|Variable|Required|Example|Description|
| --- | --- | --- | --- |
|check_for_title|Yes|`Witte Ruis`|The title of the ambient sound as shown in developer tools > states |
|speaker_groups|No|[See script on Github ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_voice.yaml#L11-L15)|A list of the media player entity_ids corresponding to the speakers groups set up in the Google Home app|
|primary_spotcast|No|`pepijn`|The Spotify account which is used as primary account for spotcast, should match the last part of the Spotify media player.|