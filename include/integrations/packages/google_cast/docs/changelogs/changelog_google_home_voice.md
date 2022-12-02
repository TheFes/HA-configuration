# Changelog

* For Google Home Voice Script, which is included in [Google Home Resume package](../../google_home_resume.yaml)
* More information [here](../google_home_voice.md)

### Version 2022.12.0

#### 🔴 BREAKING

* Integrated into the Google Home Resume package, update according to the [instructions](../../readme.md#setup-instructions)

#### 🌟 Improvements

* Template improvements
* More use of YAML anchors

### Version 2022.11.3 - 26 November 2022

#### 🐛 Bug fixes

* Fix template copy/paste error causing variable store to fail

### Version 2022.11.2 - 24 November 2022

#### 🐛 Bug fixes

* Better handling of empty settings

### Version 2022.11.1 - 23 November 2022

#### 🔴 BREAKING

* You will need to update the Google Home Resume script to 2022.11.3 as well if you update to this version

#### 🌟 Improvements

* The script makes use of the settings of the Google Home Resume script so it can immediately store all data, and no further processing in the Google Home Resume script is needed.

### Version 2022.11.0 - 21 November 2022

#### 🔴 BREAKING

* You will need to update the Google Home Resume script as well if you update to this version

#### 🌟 Improvements

* Changed version number to YYYY.MM.version
* Templates to store data are improved, variables to store Spotify and YouTube Music data are now integrated in the general player data variable

### Version 1.6.1 - 13 October 2022

#### 🌟 Improvements

* Improved template to gather speaker data by removing dedundant templates

#### 🐛 Bug fixes

* Fix for `media_content_type` being stored incorreclty causing the data to be saved as string

### Verstion 1.6.0 - 04 August 2022

#### ✨ New feature

* Support for Music Assistant resume

### Version 1.5.2 - 21 July 2022

#### 🐛 Bug fixes

* Template to define target was not working in case Music Assistant is installed. Both the normal entity and the MASS entity would be seen as playing the ambient sound. The template now only uses cast entities.

### Version 1.5.1 - 12 July 2022

#### 🐛 Bug fixes

* Template fix to prevent errors on missing attributes when creating the data variables

### Version 1.5.0 - 20 May 2022

#### ✨ New feature

* Added the `target_variable` option. When set to `true` it will add the variable `voice_target` to the service call containing the entity_id of the Google Home which was used to trigger the script. This can be used to use the entity in a script. It will only be added on script service calls. In case the Google Home Resume script is used as well, it will also add the entity_id under `extra`, so the resume script will recognize it as a target to be resumed.

### Version 1.4.0 - 5 May 2022

#### 🔴 BREAKING

* Due to implemented changes introduced in 2022.5 this version is now required for the script

#### 🌟 Improvements

* Code review and implementation of new script actions introduced in HA 2022.5

#### 🐛 Bug fixes

* Bug fix in case target replacement was used (Ambient sound would not be stopped)

### Version 1.3.6 - 8 April 2022

#### ✨ New features

* Support for `extra` variables in service calls added. This is a new feature of the Google Home Resume script. Version 2.0.0 or higher of the Google Home Resume script is required for this. For more information see [here](../google_home_resume.md)

### Version 1.3.5 - 2 April 2022

#### 🌟 Improvements

* Ambient sound will now be stopped after the data from the media_player is stored

### Version 1.3.3/1.3.4 - 22 March 2022

#### 🌟 Improvements

* Added a update of Spotify entities before data is stored, so the most recent data is used
* Only relevant data of entities is stored (depending on state and playing app)

#### 🐛 Bug fixes

* (1.3.4) Template fix

### Version 1.3.2 - 21 March 2022

#### 🌟 Improvements

* No need to for the variable `primary_spotcast` anymore, this will be handled by the Google Home Resume script
* Only data of playing Spotify entities will be stored (other non playing entities were already excluded in 1.3.1)

### Version 1.3.1 - 14 March 2022

#### 🌟 Improvements

* Do not store unnecessary data of non playing devices

#### 🧾 Documentation

* Created seperate file for older changes

### Version 1.3.0 - 25 February 2022

#### 🔴 BREAKING

* Changes in the way data is shared with the [Google Home Resume script](../google_home_resume.md). So if you update this script, make sure to also update the other one. However, as of this version, it is also possible to use this script without the Google Home Resume script

#### 🌟 Improvements

* The ytube music player integration will now resume at the right position in the track

### Version 1.2.1 - 14 February 2022 💟

#### 🐛 Bug fixes

* Fix for resuming ytube_music_player after voice command

### Version 1.2.0 - 13 February 2022

#### 🔴 BREAKING

* Made several changes in how data is sent from this script to the [Google Home Resume script](../google_home_resume.md). So if you update this script, make sure to also update the other one. However, as of this version, it is also possible to use this script without the Google Home Resume script

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
