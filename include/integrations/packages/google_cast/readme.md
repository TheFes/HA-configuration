# Table of contents
1. [Background](#background)
1. [Latest version](#latest-version)
1. [Requirements](#requirements)
1. [Setup instructions](#setup-instructions)
    * [Updating from previous version](#updating-from-a-previous-version)
    * [Install the package](#install-the-package)
    * [Spotify resume settings](#spotify-resume)
    * [Youtube Music resume settings](#youtube-music-resume)
1. [Description of scripts](#description-of-scripts)
1. [Known limitations](#known-limitations)
1. [Questions/Issues/Bugs/Feature requests](#questionsissuesbugsfeature-requests)
1. [Why not a Blueprint](#why-not-a-blueprint)
1. [☕](#buy-me-a-coffee)

# Background
This package started somewhere in 2020 as a simple script to resume a Google Cast device after it was interrupted by a TTS message. During the years more functionality was added, the Cast devices can also be resumed after playing an audio file, or casting a Home Assistant Dasboard.
In the past years I also created others scripts using the Google Home Resume script. There is a script to determine on which device a question was asked and send a TTS or play a file on that specific device. Another script stores the state of the cast devices in a template sensor, so it can be resumed in later (for example store it when you leave home, and restore it when you arrive home again).

All these scripts are now combined in one package

# Latest version
## 2022.12 Happy Holidays; let's bring the family together
It's December which is the time to come together with your family for the holidays. That is exactly what this version does, it brings all scripts togehter into one package!
### 🌐 GENERAL
#### 🌟 Improvements
* All scripts related to the Google Home devices are now combined in one package. This brings toghether the Google Home Resume, Google Home Voice and Google Home Event script. For me it makes it easier to update them, I can make more efficient usage of YAML anchors,so I don't need to update templates and settings in 3 places.
* A lot of bigger and smaller template fixes
* More usage of YAML anchors, which also reduces the total number of lines for the combined scripts
### ♻ RESUME SCRIPT
#### 🐛 Bug fixes
* There was bug when using the automation which would start the script for a group member when that was the target of a service call, but the group was playing. This caused the resume to fail.

Previous changes can be found here:
* [Google Home Resume script and automation](https://github.com/TheFes/HA-configuration/blob/main/include/integrations/packages/google_cast/docs/changelog_google_home_resume.md)
* [Google Home Voice script]()
* [Google Home Event script and template sensor]()

# Requirements
## Home Assistant
* Home Assistant version 2022.5 or higher because of specific template functions

# Setup instructions
## Updating from a previous version
### Prior to 2022.11
If you are still using a version wich is not using the YYYY.MM version numbering, you are not using packages yet. Remove the existing Google Home scripts you are using (Resume/Voice/Event) and the Google Home Resume automation if you were using that. If you were using the Google Home Event script, also remove the template sensor used by that script.

After removing all the old stuff reload Scripts, Automations and Template entities from Developer Tools > YAML ([![Open your Home Assistant instance and show your server controls.](https://my.home-assistant.io/badges/server_controls.svg)](https://my.home-assistant.io/redirect/server_controls/)) or restart Home Assistant. Then move on to [Install the package](#install-the-package).

### From version 2022.11
Remove the Google Home Voice script if you use that, and the Google Home Event package if you were using that. 

After removing all the old stuff reload Scripts, Automations and Template entities from Developer Tools > YAML [![Open your Home Assistant instance and show your server controls.](https://my.home-assistant.io/badges/server_controls.svg)](https://my.home-assistant.io/redirect/server_controls/) or restart Home Assistant.

Leave the settings in the Google Home Resume package as they are now, and replace everything below that (indicated by the comment) with the code from the new version (of course don't copy my settings).

## Install the package
[Link to the package](https://github.com/TheFes/HA-configuration/blob/main/include/integrations/packages/google_cast/google_home_resume.yaml)

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

## Spotify resume
* For Spotify you need to have the [Spotify integration ](https://www.home-assistant.io/integrations/spotify/) installed, and [Spotcast ](https://github.com/fondberg/spotcast/) (available on [HACS](https://github.com/hacs/integration))

## YouTube Music resume
* Resume can be performed in case the custom [YouTube Music player](https://github.com/KoljaWindeler/ytube_music_player) integration is used to play the media. And only when YouTube music was started using that custom integration (which is quite easy using the media panel [![Open your Home Assistant instance and browse available media.](https://my.home-assistant.io/badges/media_browser.svg)](https://my.home-assistant.io/redirect/media_browser/))


# Description of scripts
* Google Home Resume
* Google Home Voice
* Google Home Event

# Known limitations
* It is possible to create speaker groups on the fly from the Google Home app, e.g. if you are playing something from Spotify on your Kitchen speaker, you can add your Living Room speaker in the Google Home app, without them belonging to a speaker group. The script won't recognize these groups created on the fly. The cast integration won't recognize these devices as playing anymore, so they won't be resumed.
* When Spotify switches to a new song or starts playing, the Spotify Media Player will shortly not show as playing. When at that moment the script is started, the stream will not be resumed afterwards. To minimize this, Spotify entities are updated just before the information is stored.
* YouTube and YouTube music will only resume the video/song which was playing at the time of the interruption, and only on players with a screen if not started using the [ytube_music_player](https://github.com/KoljaWindeler/ytube_music_player) custom integration.

# Questions/issues/bugs/feature requests?
In case you have a question, you found a bug, or have a feature request, you can either ask here, or open an [issue](https://github.com/TheFes/HA-configuration/issues) on my GitHub repository. In case you create a GitHub issue, please label it with `google home scripts`

In case something isn't working or you found a bug, a trace of the script will be needed in most cases to determine the cause. The trace can be downloaded as a json file. To do this follow the steps below:
1. Go to `Configuration > Automations & Scenes > Scripts` or use [![Open your Home Assistant instance and show your scripts.](https://my.home-assistant.io/badges/scripts.svg)](https://my.home-assistant.io/redirect/scripts/)
1. Find the Google Home scripts in the list.
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

# Buy me a coffee
If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>
