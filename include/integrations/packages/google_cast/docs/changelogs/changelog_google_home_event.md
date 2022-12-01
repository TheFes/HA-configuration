# Changelog

* For Google Home Event Script, which is included in [Google Home Resume package](../../google_home_resume.yaml)
* More information [here](../google_home_event.md)

### Version 2022.12.0

#### 🔴 BREAKING

* Integrated into the Google Home Resume package, update according to the [instructions](../../readme.md#setup-instructions)

#### 🌟 Improvements

* Template improvements
* More use of YAML anchors

### Version 2022.11.4 - 26 November 2022

#### 🐛 Bug fixes

* Fix template copy/paste error causing variable store to fail

### Version 2022.11.3 - 24 November 2022

#### 🐛 Bug fixes

* Better handling of empty settings

### Version 2022.11.2 - 23 November 2022

#### 🔴 BREAKING

* You will need to update the Google Home Resume script to 2022.11.3 as well if you update to this version

#### 🌟 Improvements

* The script makes use of the settings of the Google Home Resume script so it can immediately store all data, and no further processing in the Google Home Resume script is needed.

### Version 2022.11.1 - 22 November 2022

#### 🐛 Bug fixes

* Fixed a template error

### Version 2022.11.0 - 21 November 2022

#### 🔴 BREAKING

* Combined the script and template sensor in a package, see the setup instructions for more information

#### 🌟 Improvements

* Changed version number to YYYY.MM.version
* Used improved templates to store data
* Removed file integration for long term storage as trigger based templates restore their state after restart or reload

### Version 0.6.2 - 13 October 2022

#### 🌟 Improvements

* Improved template to gather speaker data by removing redundant templates

#### 🐛 Bug fixes

* Fix for `media_content_type` being stored incorreclty causing the data to be saved as string

### Version 0.6.1 - 12 July 2022

#### 🐛 Bug fixes

* Template fix to prevent errors on missing attributes when creating the data variables

# Most recent changes

### Version 0.6.0 - 16 May 2022

#### ✨: New features

* Added an optional setting `ignore` which can be used to prevent entities/devices/areas from being resumed.
* Additional setting `also_stop` to provide media players which should also be stopped when the date is stored. Useful if you use the script when you eg leave home, and want to turn off the TV and soundbar as well.

### Version 0.5.0 - 4 May 2022

#### 🔴 BREAKING

* Due to implemented changes introduced in 2022.5 this version is now required for the script

#### 🌟 Improvements

* Code review and implementation of new script actions introduced in HA 2022.5

### Version 0.4.1/0.4.2 - 22 March 2022

#### 🌟 Improvements

* Added a update of Spotify entities before data is stored, so the most recent data is used
* Only relevant data of entities is stored (depending on state and playing app)

#### 🐛 Bug fixes

* (0.4.2) Template fix

### Version 0.4.0 - 21 March 2022

#### 🛑: Breaking change

* The script now uses the main [Google Home Resume script](../google_home_resume.md) and not only the Google Home Resume Perform Resume helper script. So if you only included that last script, you will have to include the total [Google Home Resume script](../google_home_resume.md) now.

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