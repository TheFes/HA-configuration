# Table of contents
- [Table of contents](#table-of-contents)
- [Description](#description)
- [Latest changes](#latest-changes)
    - [2023.1 Best wishes for 2023!](#20231-best-wishes-for-2023)
      - [🐛 Bug fixes](#-bug-fixes)
- [Prerequisites](#prerequisites)
- [How to use the script](#how-to-use-the-script)
- [Questions/issues/bugs/feature requests?](#questionsissuesbugsfeature-requests)
- [☕ Coffee](#-coffee)

___

# Description

This script can store the state of your Google Cast devices in a template sensor. This data can later be used to resume the speakers.

___

# Latest changes

### 2023.1 Best wishes for 2023!
Only a small update with some bugfixes right now :)

#### 🐛 Bug fixes

* Fix for `target_list` which was not working if a target was specified

Older changes can be found [here](changelogs/changelog_google_home_event.md)

___

# Prerequisites

1. The [Google Home Resume package](../readme.md) needs to be installed.

# How to use the script

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

___

# Questions/issues/bugs/feature requests?

Please follow the [instructions](../readme.md/#questionsissuesbugsfeature-requests) to reach out to me.

___

# ☕ Coffee

If you like this script, please feel free to buy me a coffee (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>
