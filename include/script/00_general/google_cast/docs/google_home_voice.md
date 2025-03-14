# Table of contents

1. [Background](#background)
1. [Latest changes](#latest-changes)
1. [Prerequisites](#prerequisites)
1. [Settings for the voice script](#settings-for-the-voice-script)
1. [How to use the script](#how-to-use-the-script)
1. [☕](#buy-me-a-coffee)

# Background

In my home I have several Google Nest/Home speakers, and I had some scripts where a TTS would be sent which was triggered by a Google Home routine. However, I could only set it to a predefined Google Home speaker, and not to the specific speaker on which I gave the voice command.

This got me thinking, and I found a solution for this, using the ambient sounds which you can start in your routines.

So I made a new script, which can be used in cooperation with the other script, to send a TTS or other actions, like e.g. an image, or a cast of your Lovelace dashboard to specific Google Home after you ask a question to it. 

As of version 2022.12 the script is included in the Google Home Resume package.

# Latest changes

### Version 2022.12

#### 🔴 BREAKING

* Integrated in the Google Home Resume package

Older changes can be found [here](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/docs/changelogs/changelog_google_home_voice.md)

# Prerequisites

1. Install the [Google Home Resume package]()
1. Expose scripts to Google Assistant (either use [Nabu Casa](https://www.nabucasa.com/), or the [manual setup](https://www.home-assistant.io/integrations/google_assistant/))
1. A separate script per TTS messsage, which will be used in the Google Home routine
1. A routine in the Google Home app which starts the script (you can find your scripts under `Adjust Home Devices` -> `Adjust scenes`) 
The last action in your routine should be to start the ambient sound (`Play and control media` -> `Sleep sounds` -> Any sound you only use for this script
1. Define the right variables for your home in the Google Home Voice script as desribed below

# Settings for the voice script

The settings are set in the `voice_settings` part of the package.

|Variable|Required|Example|Description|
| --- | --- | --- | --- |
|check_for_title|Yes|`Witte Ruis`|The title of the ambient sound as shown in developer tools > states |
|use_resume|No|`false`|Use `use_resume: false` if you don't have the Google Home Resume script. Don't set this setting when you do want to use it, but set it in the script call instead if you need it. Default is `true`.

# How to use the script

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
          {%- set eta = (as_timestamp(now()) + 60 * states ('sensor.thefes_home') | float(0) | timestamp_custom('%H:%M') %}
          If TheFes leaves now, he will be home at {{ eta }}.
    - alias: "TTS for speaker voice command"
      action: script.google_home_voice
      data:
        target_conversion:
          media_player.kitchen_hub: media_player.livinghome_group
        use_resume: true
        action:
          - alias: "Send TTS message"
            action: tts.google_cloud_say
            data:
              message: "{{ message }}"
        volume: 35
```

Variables in service call for the script:
|Variable|Required|Description|
| --- | --- | --- |
|action|Yes|The title of the ambient sound as shown in developer tools > states |
|target_conversion|No|A dictonary with target replacements when you send the voice command|
|use_resume|No|Set to `false` in case you don't want to use the Google Home Resume script, and just want to send the actions, override the setting on the script.|
|target_variable|No|If set to `true` the entity_id of the Google Home will be added as the variable `voice_target` so it can be used in scripts, and added under `extra` so the Google Home Resume script will resume it.

# Buy me a coffee

If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>