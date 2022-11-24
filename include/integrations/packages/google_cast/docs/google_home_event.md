# Background
I've created the [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) last year, to resume a Google Cast device after it has been interrupted. One of the users asked if it would be possible to also resume on eg leaving the house, and restoring the state when you return, and this script is the result.

# This script supports
* Store the state of your Google Cast devices in a template sensor, or with additional setup, in a file. The latter allows you to restore the state even after a reboot of Home Assistant.

# Requirements
* Home Assistant version 2022.2 is required because the `iif` filter/function introduced in that version is used in templates
* The Google Home Resume script

# Most recent changes
### Version 2022.11
#### 🔴 BREAKING
* Combined the script and template sensor in a package, see the setup instructions for more information
* The latest version of this script (2022.11.2) requires version 2022.11.3 of the Google Home Resume script or higher
#### 🌟 Improvements
* (2022.11.0) Changed version number to YYYY.MM.version
* (2022.11.0) Configuration variables are removed, the script uses the name of the binary sensor as defined in the template sensor configuration (`binary_sensor.resume_data_google_home_event`)
* (2022.11.0) Used improved templates to store data
* (2022.11.0) Removed file integration for long term storage as trigger based templates restore their state after restart or reload
* (2022.11.2) The script makes use of the settings of the Google Home Resume script so it can immediately store all data, and no further processing in the Google Home Resume script is needed.
#### 🐛 Bug fixes
* (2022.11.1) Fixed a template error
* (2022.11.5) Better handling of empty settings

Older changes can be found [here](https://github.com/TheFes/HA-configuration/blob/main/include/integrations/packages/google_cast/docs/changelog_google_home_event.md)

# Setup
* You need to have the [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) up and running.
* Besides the script itself, a template binary sensor is also used. These are combined in a package

## The package (script and template sensor)
[Link to the package ](https://github.com/TheFes/HA-configuration/blob/main/include/integrations/packages/google_cast/google_home_event.yaml) on my Github config, so I don't have to maintain it in two places

Place the contents of that link in a file called `google_home_event.yaml` in the same folder as you placed the package for the Google Home Resume script with a file editor (like [Visual Studio Code Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode) or [File Editor Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator)), not via the GUI. 

# How to start the script
There are 5 fields which can be set while running the script.
*Description of fields:*
|Field|Required|Description|
| --- | --- | --- | 
|target|No|The targets which should be stored or resumed, default is all entities of the Cast integration (including Chromecast, Google TV devices, etc)|
|resume|No|`false` to store data `true` to resume (default is `false`, so data storage) |
|resume_id|No|A identifier to match the resume action with (default is `not provided`). This will allow to store multiple events. Data with the same `resume_id` will be overwritten when storing the data, and after resuming it will be removed. |
|ignore|No|Entities/devices and/or areas which should not be resumed|
|also_stop|No|Entities/devices/areas for which `media_player` entities should also be stopped on data store|
|resume_volume|No|Volume to be used when resuming the speakers, needs to be provided when storing the data. (default is current volume of speaker). This can be helpful if you tend to set high volumes while getting ready for work and don't want to be greeted by blasting music when resuming the speakers in the middle of the night. ;-)|
|remove_data|No|Set to `true` to remove all data from the binary_sensor and file (default is `false`)|

*Example for data storage of devices in the living room when leaving the home, and resume when arriving back home*
```yaml
trigger:
  - platform: state
    entity_id: group.family
    from: home
    id: leaving
  - platform: state
    entity_id: group.family
    from: home
    id: arriving
action:
  - choose:
      - conditions: "{{ trigger.id == 'leaving' }}"
        sequence:
          - service: script.google_home_event
            data:
              target:
                area_id: 'living_room'
              resume: false
              resume_id: resume_when_home
      - conditions: "{{ trigger.id == 'arriving' }}"
        sequence:
          - service: script.google_home_event
            data:
              target:
                area_id: 'living_room'
              reject_list:
                - media_player.tv
              resume: true
              resume_id: resume_when_home
```

The script can also be started from the GUI, both in YAML mode and full GUI mode.

# Other scripts
For other related Google Home scripst, see my [Github page](https://github.com/TheFes/HA-configuration/tree/main/include/script/00_general/google_cast)

# Buy me a coffee
If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>
