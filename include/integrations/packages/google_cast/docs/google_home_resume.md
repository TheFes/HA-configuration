# Table of contents
- [Table of contents](#table-of-contents)
- [Description](#description)
- [This script supports](#this-script-supports)
    - [2023.6](#20236)
      - [🐛 Bug fixes](#-bug-fixes)
- [The automation for automatic resume](#the-automation-for-automatic-resume)
- [How to use the script](#how-to-use-the-script)
- [Questions/issues/bugs/feature requests?](#questionsissuesbugsfeature-requests)
- [☕ Coffee](#-coffee)

___

# Description

A script to send actions to Google Cast devices, resume what was playing afterwards and restore the previous volume in case the volume was changed.
**Note:** Only service calls are supported, but you can call a script in a service call, so other actions can be performed by calling a script.

___

# This script supports

* Resuming of TuneIn, Spotify, YouTube (only for players with screen) YouTube music (only if custom integration is used), Music Assistant, Google Podcast and generic streams after any actions which interrupted the audio
* Resuming an entire speaker group after a single group member has been interrupted
* Resuming of individual group members after the speaker group has performed an action

___

### 2023.6

#### 🐛 Bug fixes

* (2022.6.0) Fix bug in target determination
* (2022.6.1) Another bug fix in target determination

Older changes can be found [here](changelogs/changelog_google_home_resume.md)

# The automation for automatic resume

In August 2022 support for the Google Home Automatic Resume automation has been added. The automation will trigger on `media_player.play_media` service calls. This includes TTS messages, as the TTS service call will issue the `media_player.play_media` service call after the TTS message has been generated. The automation will also trigger on casting a Dasboard, this can be disabled in the settings so it only triggers on audio interruptions.

The settings for to enable the automation and for the default volume to be used for announcements can be set in the settings part of the package.

If set up like described above, the script will be automatically called for TTS messages, and when you use the `media_player.play_media` service call with `announce: true` enabled. If `announce` is not set, or set to `announce: false` the script will not be used. The TTS service call will do this automatically.

The automation will check if a resume for a specific speaker is already active, if that is the case it will not trigger the script for that specific speaker.

___

# How to use the script

This script only contains the code to resume after the interruption, it doesn't contain any standard actions (like sending a TTS or playing an MP3 file)

To perform such an action, you need to provide them in the `action` field. In case you use the GUI, it will allow al kind of actions (like `delay` or `choose`) but the script can only handle service calls (so starting with `service`).

You can also start a script in a service call, so this allows you to do more advanced actions, like using `choose` or a `wait_template`. But in that case there will be no information regarding the target of the service call in the action data. In that case you can enter that information in the `target` field.

The boolean `resume_this_action` can be set to `false` if you don't want to resume the actions from the `action` field. To explain why you would want to do this, I have the following real life example:
I've set up a tag scanner on which my kids can scan a card, and then some song will play. If there was already something playing (a TuneIn stream for example) I want that stream to resume after the song finished. However, the kids tend to scan the card a second time when they don't like the song. If that happens the first kids song which was already playing, would be resumed afterwards. With resume_this_action: false this will not be the case.

When calling the script, there are 3 fields you can provide. `action` is required, `target` is only required in case it is not clear from the `action` part. More details in the [examples](examples/examples_google_home_resume.md) 

|Field|Required|Description|
| --- | --- | --- | 
|target|No|The targets which should be resumed, only needed if these targets are not clear from the actions. All usual targets (`area_id`, `device_id` and `entity_id`) are supported.
|action|Yes|The ations to be performed, only service calls are supported. If other actions are needed, you can create a script and call the script.|
|resume_this_action|No|Actions from the `action` field will not be resumed if set to `false`. Default is `true`.|
|resume_delay|No|Delay after which the resume is started when sending an image, or casting a dashboard. Default is the `default_resume_delay` in the script settings, if that is not set, the default is 20 seconds.

As of version 2.0.0 you can also add `extra` variables together with each of your actions. These additional variables have to be entered in the service call information, on the same level as `service`, `target` and `data`. It is also possible to add them under `data`, in that case you can use `script_extra`. Don't put `wait: true` at the end of the last service_call, this will block the Perform Resume script
The following variables are supported:

|Variable|Example|Description|
|---|---|---|
|`volume`|`0.25` or `25`|Applies the volume set for the service call|
|`wait`|`true`|If set to `true` the script will wait until the target(s) are `idle` or `off` again until resuming with the next service call|
|`screen_tts`||Use this to provide the details to send a TTS together with picture and text (see the next variables below)|
|> `large_text`|`BIG`|Will be displayed large on the screen together with the TTS message (normally used for the `title`)|
|> `small_text`|`small`|Will be displayed small on the screen together with the TTS message (normally used for the `artist`)|
|> `picture_url`|`small`|Will be displayed small on the screen together with the TTS message (normally used for the `media_picture`)|
| `entity_id` | `media_player.kitchen` | Target of the service_call in case this is not clear from the call itself, eg when calling a script. Use this when you want to set the volume for the service call |
| `area_id` | `kitchen` | Target of the service_call in case this is not clear from the call itself, eg when calling a script. Use this when you want to set the volume for the service call |
| `device_id` | `whatever` | Target of the service_call in case this is not clear from the call itself, eg when calling a script. Use this when you want to set the volume for the service call |

Examples for different use cases can be found [here](examples/examples_google_home_resume.md)

The script can also be started from the GUI, both in YAML mode and full GUI mode. 

___

# Questions/issues/bugs/feature requests?

Please follow the [instructions](../readme.md/#questionsissuesbugsfeature-requests) to reach out to me.

___

# ☕ Coffee

If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>
