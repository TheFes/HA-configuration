# Background
I've created the [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) last year, to resume a Google Cast device after it has been interrupted. One of the users asked if it would be possible to also resume on eg leaving the house, and restoring the state when you return, and this script is the result.

# This script supports
* Store the state of your Google Cast devices in a template sensor, or with additional setup, in a file. The latter allows you to restore the state even after a reboot of Home Assistant.

# Requirements
* Home Assistant version 2022.2 is required because the `iif` filter/function introduced in that version is used in templates
* The Google Home Resume script

# To Do
* Possible a lot of bug fixing and improvements after other people start using it :)

# Most recent changes
### Version 0.4.1/0.4.2 - 22 March 2022
#### 🌟 Improvements
* Added a update of Spotify entities before data is stored, so the most recent data is used
* Only relevant data of entities is stored (depending on state and playing app)
#### 🐛 Bug fixes
* (0.4.2) Template fix

### Version 0.4.0 - 21 March 2022
#### 🛑: Breaking change
* The script now uses the main [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) and not only the Google Home Resume Perform Resume helper script. So if you only included that last script, you will have to include the total [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) now.
#### ✨: Improvements
* No need to maintain `speaker_groups` in this script anymore, this will be handled by the Google Home Resume script now

### Version 0.3.0 - 13 March 2022
#### ✨: New features
* Added `resume_volume` field which can be set while storing the data, and will overwrite the actual volume with this value. This will make sure the speakers are not resumed very loud, when they were playing at high volume while storing the data.

### Version 0.2.3/0.2.4 - 12 March 2022
#### 🐛: Bug fixes
* Finally fixed the template errors

### Version 0.2.0/0.2.1/0.2.2 - 11 March 2022
#### 🛑: Breaking change
* If you use speaker groups, you need to provide the data in the variable `speaker_groups` now. (You can copy paste it from the Google Home Resume script).
#### ✨: New features
* Added an optional boolean `remove_data` which can be set to true to remove all the existing data from the binary_sensor and the file
#### 🌟: Improvements
* All fields are optional now. If no `resume_id` is entered, the default will be `not provided`, and if no setting for `resume` is set, the default will be `false` (so data storage).
* Should work correctly with speaker groups now
#### 🐛: Bug fixes
* Typo in the `ytube_music_data` variable somewhere in the script.
* (0.2.1) Small fix in template to determine `resume_id`
* (0.2.2) Avoid some template warnings

### Version 0.1.0 - 7 March 2022
#### ✨ New features
* Initial publication

# Setup
* You need to have the [Google Home Resume script](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896) up and running.
* To store the data, you need to create a template binary sensor, which will be triggered by an event sent by the script. This will store the data until template sensors are reloaded, or Home Assistant is restarted. The setup for this binary template sensor can be found [here](https://github.com/TheFes/HA-configuration/blob/86e1cdd314b49317a39335ea09dc7e3f3a814d27/include/script/00_general/google_cast/docs/google_home_event.md#template-binary-sensor).
* To also allow persistant storage allowing resuming the Cast devices after a reload or restart, you need to set up the File integration, and a command line sensor which retrieves the data from the file, this is explained [here](https://github.com/TheFes/HA-configuration/blob/86e1cdd314b49317a39335ea09dc7e3f3a814d27/include/script/00_general/google_cast/docs/google_home_event.md#file-integration-and-command-line-sensor).

## Template binary sensor
The yaml code for the template binary sensor placed below. This is required to have the script working
This can be placed in `configuration.yaml` if you don't have a `template.yaml` in your configuration.

```yaml
template:
  - trigger:
      - platform: event
        event_type: "store_data"
        id: store
      - platform: homeassistant
        event: start
        id: restart
      - platform: event
        event_type: event_template_reloaded
        id: restart
    binary_sensor:
      - unique_id: 438601c4-b299-49e4-b5d4-f751f5853684
        name: "Resume Data"
        state: >
          {{ iif(state_attr('binary_sensor.resume_data', 'resume_data')) }}
        attributes:
          resume_data: >
            {%- if trigger.id == 'store' %}
              {{ trigger.event.data.resume_data }}
            {%- elif states('sensor.resume_data') != 'unknown' %}
              {{ state_attr('sensor.resume_data', 'resume_data') }}
            {%- else %}
              []
            {%- endif %}
```

## File integration and command line sensor
To make sure the players can be resumed after a reboot of Home Assistant, you can set up the file integration to store the data, and retrieve it using a command line sensor:

File integration (a notify service to store the data in a file):
Change the file location to anywhere you want to have it. Please not you need to create the folder(s) first, the integration won't do that for you.
```yaml
notify:
  - name: resume_data
    platform: file
    filename: /config/include/files/resume_data.txt
```

Command line sensor (can be placed in sensor.yaml if you have that. Make sure to remove the first line and properly indent it)
Make sure the file location mathces the file created by the notify service.
```yaml
sensor:
  - platform: command_line
    unique_id: 3fbccbaa-a66a-43eb-84ed-cb869a82e899
    name: Resume Data
    command: "tail -n 1 /config/include/files/resume_data.txt | cut -c 2- | sed 's/.$//'"
    value_template: "{{ iif(value_json.resume_data, 'Resume Active', 'No Resume Active') }}"
    json_attributes:
      - resume_data
```
## And finally the script itself

[Link to the script ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_event.yaml) on my Github config, so I don't have to maintain it in two places

Place it in your `scripts.yaml` with a file editor (like [Visual Studio Code Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_vscode) or [File Editor Add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_configurator)), not via the GUI. 

# Explanation of variables in the script

There are no required variables, but if you use Google Home speaker groups and players with a screen you should define those. Resuming Spotify won't work properly without `default_spotcast`.

|Variable|Default|Example|Description|
| --- | --- | --- | --- |
|sensor||`binary_sensor.resume_data`|The name of the template binary sensor you created for this script|
|notify||`notify.resume_data`|The notify service created with the file integration for storing the data. Leave empty or remove this line in case you didn't integrate that.
|speaker_groups||[See script on Github ](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_resume.yaml#L40-L60)|A combination of a dictionary and a list, with speaker groups of which all entities are included in another speaker group. You can copy/paste the list of your Google Home Resume Script.|

# How to start the script
There are 5 fields which can be set while running the script.
`target` is optional, if you don't provide it, it will use all entities of the Cast integration (including Chromecast, Google TV devices, etc).
The `resume` boolean is required. If set to `false` it will store the data, if set to `true` it will resume the players based on the data which was stored.
The `resume_id` is also required, it will be used to match the data stored to the resume action. This will allow to store multiple events. Data with the same `resume_id` will be overwritten when storing the data, and after resuming it will be removed.
The `resume_volume` sets a fixed volume when storing (`resume = true`) the data, instead of using the current volume. This can be helpful if you tend to set high volumes while getting ready for work and don't want to be greeted by blasting music when resuming the speakers in the middle of the night. ;-)
The `remove_data` deletes all data from the binary sensor and file when set to true.

*Description of fields:*
|Field|Required|Description|
| --- | --- | --- | 
|target|No|The targets which should be stored or resumed|
|resume|No|`false` to store data `true` to resume (default is `false`, so data storage) |
|resume_id|No|A identifier to match the resume action with (default is `not provided`)|
|resume_volume|No|Volume to be used when resuming the speakers, needs to be provided when storing the data. (default is current volume of speaker)
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
