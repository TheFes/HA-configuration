# Description
A script to send actions to Google Cast devices, resume what was playing afterwards and restore the previous volume in case the volume was changed.
**Note:** Only service calls are supported, but you can call a script in a service call, so other actions can be performed by calling a script.

# This script supports
* Resuming of TuneIn, Spotify, YouTube (only for players with screen) YouTube music (only if custom integration is used), Music Assistant, Google Podcast and generic streams after any actions which interrupted the audio
* Resuming an entire speaker group after a single group member has been interrupted
* Resuming of individual group members after the speaker group has performed an action

# Requirements
## General
* Home Assistant version 2022.5 is required
* The script creates groups while running, so if you don't have any groups set up already, add `group:` to your configuration.yaml.
## Spotify resume
* For Spotify you need to have the [Spotify integration ](https://www.home-assistant.io/integrations/spotify/) installed, and [Spotcast ](https://github.com/fondberg/spotcast/) (available on [HACS](https://github.com/hacs/integration))
## YouTube Music resume
* Resume can be performed in case the custom [YouTube Music player](https://github.com/KoljaWindeler/ytube_music_player) integration is used. And only when YouTube music was started using that custom integration (which is quite easy now with the changes to the media panel)

# Most recent changes
### Version 2022.11
#### 🔴 BREAKING
* Combined the script and automation in a package, see the setup section on how to update. Remove the old scripts and automation first, and do a reload from Developer Tools > YAML before copying the new version to your system.
* You will need to update the Google Home Voice and Google Home Event scripts as well if you update to this version. Version 2022.11.1 of those scripts is required  if you use 2022.11.3 of this script.
#### 🌟 Improvements
* (2022.11.0) Changed version number to YYYY.MM.version
* (2022.11.0) As the automation is now included in the package, a variable `automation_enabled` is added to optionally disable the automation. It is enabled by default
* (2022.11.0) Sometimes Cast devices can show as `idle` in Home Assistant, while they are actually playing music from Spotify. They will also be resumed now
* (2022.11.0) Templates to store data are improved, variables to store Spotify and YouTube Music data are now integrated in the general player data variable
* (2022.11.0) Some variables which can be useful for debugging are added
* (2022.11.3) Used more YAML anchors to avoid repeating code
* (2022.11.3) Improved template to store player_data
* (2022.11.3) A lot of minor template improvements
* (2022.11.5) Improved the template to get the entities to resume
* (2022.11.7) Added a timeout on wait_templates after resume to prevent the script staying active
#### 🐛 Bug fixes
* (2022.11.1) Fixed a template error
* (2022.11.2) Corrected a typo in the automation
* (2022.11.3) Several fixes in both the script and automation
* (2022.11.4) :shit: forgot a comma in a template
* (2022.11.5) Better handling of empty settings
* (2022.11.6) Small fix and improvement for players_to_resume
* (2022.11.7) Stupid copy/paste error in previous bugfix

Older changes can be found [here](https://github.com/TheFes/HA-configuration/blob/main/include/integrations/packages/google_cast/docs/changelog_google_home_resume.md)
/root/config/include/integrations/packages/google_home_resume/google_home_resume.yaml
# Setup
## The script itself
[Link to the script ](https://github.com/TheFes/HA-configuration/blob/main/include/integrations/packages/google_cast/google_home_resume.yaml) on my Github config, so I don have to maintain it in two places

* In case you don't use packages yet, add the following to your `configuration.yaml`
```yaml
homeassistant:
  # include this line
  packages: !include_dir_named packages
```
* Create a folder named `packages` in your configuration folder (the same folder as where `configuration.yaml` is located)
* Create a file named `google_home_resume.yaml` in that folder, and paste the contents of the link above in that file.
* Change the settings in the file to match your setup

You can perform the steps above using a file editor (like [Visual Studio Code Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode) or [File Editor Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator)), not via the GUI.

### Explanation of variables in the script
There are no required variables, but if you use Google Home speaker groups and players with a screen you should define those as described above. Resuming Spotify with multiple accounts won't work properly without `primary_spotcast`. `dummy_player` is required to send a TTS with picture and text.

|Variable|Default|Example|Description|
| --- | --- | --- | --- |
|players_screen||[See script on Github ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_resume.yaml#L32-L35)|Enter a list of cast devices with a screen. Do not use a comma seperated string here.|
|primary_spotcast||`pepijn`|The Spotify account which is used as primary account for spotcast, should match the last part of the Spotify media player.|
|radio_data||[See script on Github ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_resume.yaml#L37-L43)|A dictionary with the pictures and titles. The picture urls should be full urls, not HA internal urls). As key value the artist should be used (check `media_artist` in developer tools > states)|
|speaker_groups||[See script on Github ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_resume.yaml#L44-L64)|A combination of a dictionary and a list, with speaker groups of which all entities are included in another speaker group.|
|default_volume_level|`0.25`|`0.5`|The default volume level to use to set the entity to if the old volume can not be retreived (this should actually never be used, but it there as a failsafe)|
|dummy_player||`media_player.vlc_telnet`|The dummy media_player used for the TTS with picture and text feature
|default_resume_delay|20 seconds|`20`|The delay after which the resume will started when it was interrupted by sending an image. Follows the syntax of [delay](https://www.home-assistant.io/docs/scripts/#wait-for-time-to-pass-delay), so also `"00:00:20"` or `seconds: 20` can be used.
|automation_enabled|`true`|`true`|If the automation for automatic resume should be used or not
|dashboard_cast|`true`|`false`|If the automation should be used in case a HA Dasboard is cast to the device
|announce_volume_automation|`0.4`|`0.75`|The volume used for announcements in the automation, remove or leave empty to leave the volume as it is.

## The automation for automatic resume (✨ NEW in v2.7.0 - 24 August 2022)
In version 2.7.0 support for the Google Home Automatic Resume automation has been added. The automation will trigger on `media_player.play_media` service calls. This includes TTS messages, as the TTS service call will issue the `media_player.play_media` service call after the TTS message has been generated. The automation will also trigger on casting a Dasboard, this can be disabled in the settings so it only triggers on audio interruptions.

The settings for to enable the automation and for the default volume to be used for announcements can be set in the settings part of the package.

If set up like described above, the script will be automatically called for TTS messages, and when you use the `media_player.play_media` service call with `announce: true` enabled. If `announce` is not set, or set to `announce: false` the script will not be used. The TTS service call will do this automatically.

## Spotify specific settings
* In case you only have one Spotify account set up in Home Assistant, there are no additional settings needed besides intalling the [Spotify integration ](https://www.home-assistant.io/integrations/spotify/) and [Spotcast ](https://github.com/fondberg/spotcast/) (available on [HACS](https://github.com/hacs/integration))

In case you use multiple accounts, you need to add the Spotify integration for all accounts, besides that you take care of the following:
1. The entity_id's for media_player entities from the Spotify integration should be formatted like `media_player.spotify_{{ spotcast user }}`. For the primary Spotcast user you can use whatever you want as `{{ spotcast user }}`.
1. The primary Spotcast user needs to be specified under `primary_spotcast` (see comment above).
1. To determine the Spotify account, the source in the Spotify media_players is used. This is compared to the friendly name of the Goolge Home media_player. Therefor the Google Home media players in HA need to have the exact same name as they have in the Google Home app (this is also already a requirement for Spotcast to work with entity_id's). 

This is how it is set up in my system:
4 Spotify integrations (account `Pepijn` not shown here, as it didn't fit):
![image|440x279](https://community-assets.home-assistant.io/original/4X/a/9/4/a942d64e3f46104adf270fdc6d3035a148137cf6.png)

Spotcast (the Spotify account for `Pepijn` is the primary account, and has no named account in the spotcast setup):
```yaml
spotcast:
  sp_dc: !secret sp_dc
  sp_key: !secret sp_key
  country: NL
  accounts:
    martijn:
      sp_dc: !secret sp_dc_martijn
      sp_key: !secret sp_key_martijn
    marleen:
      sp_dc: !secret sp_dc_marleen
      sp_key: !secret sp_key_marleen
    floris:
      sp_dc: !secret sp_dc_floris
      sp_key: !secret sp_key_floris
```

The media_players connected to the Spotify integration are named (matching the spotcast configuration and the `primary_spotcast` variable in the script, which is `pepijn`):
```
media_player.spotify_pepijn
media_player.spotify_martijn
media_player.spotify_marleen
media_player.spotify_floris
```

## Cast devices with screen (like Google Nest Hub or Android TV)
* Google Nest Hub speakers and other cast devices with a screen can be entered under the variable `players_screen`. This will make sure the photo display is turned on again after the TTS in case nothing was already playing, and supports resume of YouTube.
* In case you want to send a TTS with a picture and some text, you need to set up a dummy media_player which accepts TTS messages. More info below.

## Dummy player for TTS with picture and text
The feature to send a TTS together with picture and text works as as follows. The TTS is sent to a dummy player, and the script will wait for this event, and will take the url the the mp3 used as TTS message. It will then send this mp3 together with the picture and text to the actual target.
As of Home Assistant 2022.4 there is a check if a target of a service call actually supports the service call. So the dummy player has to support TTS. As the media_player created by the [VLC Telnet integration](https://www.home-assistant.io/integrations/vlc_telnet/) supports TTS, I use this.

In case you use HA OS, or run a supervised install, you can add the [VLC Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_vlc) from the add-on store. After starting the add-on it will automatically be detected by Home Assistant, and you can add the VLC Telnet integration. This will create `media_player.vlc_telnet` which you can use as dummy player.

In case you don't have the supervisor or already use this add-on for other purposes, you can possibly use the media_player created by the [browser_mod](https://github.com/thomasloven/hass-browser_mod) custom component. Or you can buy an additionaly Nest Mini, set the volume to `0` and hide it somewhere 😉

## Google Home Speaker groups
* If you use speaker groups in the Google Home app, you can enter them under the variable `speaker_groups`. If you use them, you'll need to complete this variable, and add the group members in there as well (see the script for an example).

# How to use the script
This script only contains the code to resume after the interruption, it doesn't contain any standard actions (like sending a TTS or playing an MP3 file)

To perform such an action, you need to provide them in the `action` field. In case you use the GUI, it will allow al kind of actions (like `delay` or `choose`) but the script can only handle service calls (so starting with `service`).

You can also start a script in a service call, so this allows you to do more advanced actions, like using `choose` or a `wait_template`. But in that case there will be no information regarding the target of the service call in the action data. In that case you can enter that information in the `target` field.

The boolean `resume_this_action` can be set to `false` if you don't want to resume the actions from the `action` field. To explain why you would want to do this, I have the following real life example:
I've set up a tag scanner on which my kids can scan a card, and then some song will play. If there was already something playing (a TuneIn stream for example) I want that stream to resume after the song finished. However, the kids tend to scan the card a second time when they don't like the song. If that happens the first kids song which was already playing, would be resumed afterwards. With resume_this_action: false this will not be the case.

When calling the script, there are 3 fields you can provide. `action` is required, `target` is only required in case it is not clear from the `action` part. More details in the [examples](https://github.com/TheFes/HA-configuration/blob/main/include/integrations/packages/google_cast/docs/examples_google_home_resume.md)
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

Examples for different use cases can be found [here](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/docs/examples_google_home_resume.md)

The script can also be started from the GUI, both in YAML mode and full GUI mode. 

# Known limitations
* It is possible to create speaker groups on the fly from the Google Home app, e.g. if you are playing something from Spotify on your Kitchen speaker, you can add your Living Room speaker in the Google Home app, without them belonging to a speaker group. The script won't recognize these groups created on the fly. The cast integration won't recognize these devices as playing anymore, so they won't be resumed.
* When Spotify switches to a new song or starts playing, the Spotify Media Player will shortly not show as playing. When at that moment the script is started, the stream will not be resumed afterwards. To minimize this, Spotify entities are updated just before the information is stored.
* YouTube and YouTube music will only resume the video/song which was playing at the time of the interruption, and only on players with a screen if not started using the [ytube_music_player](https://github.com/KoljaWindeler/ytube_music_player) custom integration.

# Questions/issues/bugs/feature requests?
In case you have a question, you found a bug, or have a feature request, you can either ask here, or open an [issue](https://github.com/TheFes/HA-configuration/issues) on my GitHub repository. In case you create a GitHub issue, please label it with `google home scripts`

In case something isn't working or you found a bug, a trace of the script will be needed in most cases to determine the cause. The trace can be downloaded as a json file. To do this follow the steps below:
1. Go to `Configuration > Automations & Scenes > Scripts` or use [![Open your Home Assistant instance and show your scripts.](https://my.home-assistant.io/badges/scripts.svg)](https://my.home-assistant.io/redirect/scripts/)
1. Find the Google Home Resume script in the list.
1. Click on 3 dot menu icon left of the script and then select `Traces`
1. Make sure to select the right trace which contains the error
1. Press the 3 dot menu icon in the top right corner, and select `Download trace`
1. Press the download icon in the top right corner.
1. Repeat for the Google Home Resume - Helper Script if the error is in that step.

In case you create the issue on GitHub you can upload the json files, in case you create the issue as a post here, you can copy the json files to a code sharing website like [dpaste.org](https://www.dpaste.org). Please create a different link for each json file.

# Why not a blueprint?
I've been asked a couple of times if I ever considered to make a blueprint out of this script. I do understand this would make updates more easy, however there are also some things which make it quite complicated:
* You need to provide information on your speaker groups, players with a screen and spotcast account. That would mean that you will have to do that each time you use the blueprint to create a script, or that you'll have to add this information each time the blueprint is updated, which would reduce the easiness of updating the script.
* I tried to bypass the point above by using includes, but the blueprint would do that once, and add the informaton in the yaml, instead of keeping the include code.
* I use really large and complicated templates, and these would be converted to really messy one line templates, making it impossible to read and debug if needed.

So, basically, I gave it a try, and decided it would not work :)

# Other scripts
For other related Google Home scripst, see my [Github page](https://github.com/TheFes/HA-configuration/tree/main/include/script/00_general/google_cast)

# Buy me a coffee
If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>
