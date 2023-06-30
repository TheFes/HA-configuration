# Changelog

* For Google Home Resume Script, which is included in [Google Home Resume package](../../google_home_resume.yaml)
* More information [here](../google_home_resume.md)

### 2023.6.1

#### 🐛 Bug fixes

* Another bug fix in target determination


### 2023.6.0

#### 🐛 Bug fixes

* Fix bug in target determination

### 2023.5.0

#### 🌟 Improvements

* Target determination now only works if Home Assistant speaker groups are used in the `speaker_groups` setting.

### 2023.2.1

#### 🌟 Improvements

* Only perform `spotcast.start` once, unless Spotify is not playing after 10 seconds

### 2023.2.0

#### 🐛 Bug fixes

* Fix error in resume helper when no volume was stored

### 2023.1.0

#### 🐛 Bug fixes

* Fix for `target_list` in case multiple targets are provided as string

### Version 2022.12.3

#### 🌟 Improvements

* The automation is now also triggered if a Home Assistant group is targeted which has cast entities as its members

### Version 2022.12.1

#### 🌟 Improvements

* (2022.12.1) New setting: `max_runtime` has been added. Here you can define a time period after which the scripts should be stopped, to avoid them waiting for ages. Take into account that this has to be longer than the interruption, so if you play a song of 10 minutes, the `max_runtime` has to be set longer than that
* (2022.12.1) The `spotcast.start` service call is now issued twice, this should help in resuming Spotify

### Version 2022.12.0

#### 🌟 Improvements

* Template to generate the `target_list` has been improved
* A lot of other improvements in templates

#### 🐛 Bug fixes

* There was bug when using the automation which would start the script for a group member when that was the target of a service call, but the group was playing. This caused the resume to fail.

### Version 2022.11.8 - 24 November 2022

#### 🐛 Bug fixes

* Typo fix when applying metadata to service call to resume stream

### Version 2022.11.7 - 24 November 2022

#### 🌟 Improvements

* Added a timeout on wait_templates after resume to prevent the script staying active

#### 🐛 Bug fixes

* Stupid copy/paste error in previous bugfix

### Version 2022.11.6 - 24 November 2022

#### 🐛 Bug fixes

* Small fix and improvement for players_to_resume

### Version 2022.11.5 - 24 November 2022

#### 🌟 Improvements

* Improved the template to get the entities to resume

#### 🐛 Bug fixes

* Better handling of empty settings

### Version 2022.11.4 - 23 November 2022

#### 🐛 Bug fixes

* :shit: forgot a comma in a template

### Version 2022.11.3 - 23 November 2022

#### 🔴 BREAKING

* All player_data is now stored in one go, the Google Home Voice and Google Home Event script are using the exacte same template now to make it easier to update and improve it. Also update the Google Home Voice and Google Home Event scripts if you use those as well.

#### 🌟 Improvements

* Used more YAML anchors to avoid repeating code
* A lot of minor template improvements

#### 🐛 Bug fixes

* Several fixes in both the script and automation

### Version 2022.11.2 - 22 November 2022
#### 🌟 Improvements
* Corrected a typo in the automation

### Version 2022.11.0 / 2022.11.1 - 21 November 2022

#### 🔴 BREAKING

* Combined the script and automation in a package, see the setup section on how to update. Remove the old scripts and automation first, and do a reload from Developer Tools > YAML before copying the new version to your system.
* You will need to update the Google Home Voice and Google Home Event scripts as well if you update to this version.

#### 🌟 Improvements

* Changed version number to YYYY.MM.version
* As the automation is now included in the package, a variable `automation_enabled` is added to optionally disable the automation. It is enabled by default
* Sometimes Cast devices can show as `idle` in Home Assistant, while they are actually playing music from Spotify. They will also be resumed now
* Templates to store data are improved, variables to store Spotify and YouTube Music data are now integrated in the general player data variable
* Some variables which can be useful for debugging are added

#### 🌟 Improvements

* (2022.11.1) Fixed a template error

### Version 2.8.9 / 2.8.10 - 13 November 2022

#### 🐛 Bug fixes

* (2.8.9) Fix for not all players being restored to previous state
* (2.8.10) Fix for missing variables in automation templates

### Version 2.8.8 - 6 November 2022

#### 🐛 Bug fixes

* Fix for `media_content_type` in template in automation

### Version 2.8.7 - 29 October 2022

#### 🐛 Bug fixes

* Fix to avoid helper script started for players which are unavailable

### Version 2.8.6 - 27 October 2022

#### 🐛 Bug fixes

* Fixed a typo which caused that volume restore was not working anymore

### Version 2.8.5 - 13 October 2022

#### 🌟 Improvements

* Improved template to gather speaker data by removing dedundant templates

#### 🐛 Bug fixes

* Fix for `media_content_type` being stored incorreclty causing the data to be saved as string
* Additional check in automation if groups are already created before starting the script

### Version 2.8.4 - 26 September 2022

#### 🔴 BREAKING

* `dashboard_delay` and `picture_delay` are combined in one variable `resume_delay`. This can be sent as variable in the script service call. You can set a default using `default_resume_delay` in the script. If no delay is defined, 20 seconds will be used

#### 🌟 Improvements

* Resume after sending webp and gif images is now also supported

#### 🙏 Thanks to:

* @cheadrian for the commits on Github

### Version 2.8.3 - 18 September 2022

#### ✨ New features

* Resume after casting a dashboard is now also supported. A separate variable is also provided for the delay after which the resume should start has also been added. Default delay if ommitted is 20 seconds. A trigger has been added to the automation (v0.2.0) as well, so it is resumed automatically. Remove this trigger if you don’t want automatic resume when casting a dashboard.

#### 🐛 Bug fixes

* Updated automation to v0.2.0 to include volume of idle cast entities
Don’t try to restore the volume when it is not provided in the player data

### Version 2.8.2 - 8 September 2022

#### 🌟 Improvements

* Make check for images no longer case senstitive (note the file extension of the image needs to be `jpg`, `jpeg` or `png`)

### Version 2.8.1 - 5 September 2022

#### 🌟 Improvements

* Small template improvement for YouTube resume

### Version 2.8.0 - 18 August 2022

#### ✨ New features

* Resume after sending an image (eg a camera snapshot after somebody rang the doorbell) using `media_player.play_media` is now supported (also in the automation added in v2.7.0). While sending the image, the speaker is not in state `playing` so there is a new variable added to define a delay after which the resume will be started. The default is 20 seconds (if not provided).

### Version 2.7.1 - 9 August 2022

#### 🐛 Bug fixes

* Template fixes to avoid log warnings about missing variables

### Version 2.7.0 - 24 August 2022

#### ✨ New feature

* Support for Google Home Resume automation for easy resume without the need to call the script manually.

#### 🌟 Improvements

* Music Assistant resume now uses the snapshot function

### Version 2.6.0 - 21 July 2022

#### ✨ New features

* Music playing via Music Assistant will be resumed by sending the TTS or media which interrupts the stream to the MA entity with `announce: true`. I will change this to creating a snapshot and resuming the snapshot in the future, so I can also support resume of Music Assistant with the Google Home Voice and Google Home Event script.

* Google Podcasts will be resumed by taking the url of the stream and sending that via `media_player.play_media`. Do note that Google Podcasts won't know this happened, which might cause it to resume at a previous podcast when you issue a voice command.

#### 🐛 Bug fixes
* Template fix: the template to gather the player data was referring to `app_name` even if it was not defined.

### Version 2.5.1 - 12 July 2022

#### 🐛 Bug fixes

* Template fix to prevent errors on missing attributes when creating the data variables

### Version 2.5.0 - 28 May 2022

#### 🌟 Improvements

* Combined all helper scripts in one script (`script.google_home_resume_helper`)

#### 🐛 Bug fixes

* Fix for uppercase characters in context.id causing errors in creating groups
* Fixed resume for the Ytube Music custom integration

### Version 2.4.5 - 20 May 2022

#### 🌟 Improvements

* Spotify songs will be resumed at the right position in the track

### Version 2.4.4 - 16 May 2022

#### 🌟 Improvements

* Script now also correctly recognizes Google Cast devices when using a Home Assistant speaker group as target. It will expand the group and check the group members for cast entities.

### Version 2.4.3 - 9 May 2022

#### 🌟 Improvements

* Add `continue_on_error: true` to service calls provided in `action`

#### 🐛 Bug fixes

* Volume restore and turning off players with screen which were not playing was performed too soon

### Version 2.4.2 - 8 May 2022

#### 🌟 Improvements

* Changed some more service calls to the new 2022.5 versions

#### 🐛 Bug fixes

* Fix error caused by orphan helper script which restored the state of non playing entites before 2.4.0

### Version 2.4.1 - 7 May 2022

#### 🐛 Bug fixes

* Fix for restore in case there were non playing entities

### Version 2.4.0 - 5 May 2022

#### 🔴 BREAKING

* Due to implemented changes introduced in 2022.5 this version is now required for the script

#### 🌟 Improvements

* Merged the Perform Resume and Restore Non Playing devices helper scripts into one script
* Code review and implementation of new script actions introduced in HA 2022.5

### Version 2.3.3 - 22 April 2022

#### 🐛 Bug fixes
* Fix for resume of speaker groups

### Version 2.3.2 - 18 April 2022

#### 🐛 Bug fixes

* Fixed a bug caused by storing the volume of a a speaker with state `unavailable`
* Fixed restore of volume for non playing entities

### Version 2.3.0 / 2.3.1 - 14 April 2022

#### ✨ New features

* Targets (`entity_id`, `device_id` and/or `area_id`) can be added to `extra` or `script_extra` so `volume` can be applied to those entities for a specific service call in which they are not mentioned as targets themselved (eg when calling a script)

#### 🌟 Improvements

* Moved the volume change before the service call
* As volume changes to a Google Home speaker group are no longer synced to their members (due to patent reasons) the volume set in the `extra` or `script_extra` setting will be sent to the members of the speaker group.
* Targets entered in `extra` or `script_extra` will also be taken into account for resuming afterwards

#### 🐛 Bug fixes

* Removed a bug where group members of a speaker group were added to the players to be resumed, while they were not playing
* (2.3.1) Fix for targets provided under `extra`

### Version 2.2.0 / 2.2.1 - 12 April 2022

#### 🌟 Improvements

* The extra options for the script (`wait`, `volume` and `screen_tts`) can now also be defined under `data` in the service call, using the key `script_extra`. This way the options can also be added using the GUI. [Example](../examples/examples_google_home_resumed#using-the-script_extra-key-under-data) on how to use this.

#### 🐛 Bug fixes

* Fix for resuming Spotify when only one Spotify account is used, and `primary_spotcast` is not provided.
* Fixed a bug in setting the volume in the `extra` or `script_extra` setting

### Version 2.1.0 - 10 April 2022

#### 🌟 Improvements

* `primary_spotcast` no longer required when only one Spotify account is used
* Script will check if the `primary_spotcast` which is entered (if needed) is correct, and if not issue a warning in the log. In that case the primary spotcast account will be used to avoid errors in the script
* Target entities, areas and devices can be entered anywhere in the service call where that would normally be allowed, so directly in the service call, or under `data` or under `target`

### Version 2.0.2 - 9 April 2022

#### 🐛 Bug fixes

* (2.0.1) Fix template in case target was defined under `data`

### Version 2.0.0/2.0.1 - 8 April 2022

#### 🔴 BREAKING

* `fixed_picture` has bee changed to `radio_data` and now also provides the option to add a fixed `title` for the radio stream. As TuneIn changes the title according to the song playing (well at least it should, but this seems broken lateley) it will no longer refresh after resuming the stream, as TuneIn is no longer used then. To prevent this the `title` can be provided as well now, for example the slogan of the radio channel can be used here.

#### ✨ New features

* You can provide `extra` setttings to your service call. Curruntly supported are `volume`, `wait` and `tts`.
* Supports sending TTS together with picture and text when sent to a player with a screen.
* More information on how it works [here](#how-to-use-the-script)

#### 🧾 Docs

* Craeted a separate doc for [script call examples](../examples/examples_google_home_resume.md) which shows how to use the new features. Description how to use the script to send a TTS and change the volume is also placed there now.
* Partial rewrite of the script docs

#### 🐛 Bug fixes
* (2.0.1) Several bugs fixed which I did not notice in initial testing

### Version 1.8.1 - 6 April 2022

#### 🐛 Bug fixes

* Fix for resuming/restoring groups when interrupted by an service call sent to a group member

### Version 1.8.0 - 4 April 2022

#### 🌟 Improvements

* Improved templates on several places to make it more efficient

#### 🧾 Docs

* Added information that the target of the service call needs to be provided either under `target` or under `data`, not directly in the service call.

### Version 1.7.8 - 2 April 2022

#### 🐛 Bug fixes

* Fixes for missing variables for restoring non playing devices.

### Version 1.7.7 - 1 April 2022

#### 🌟 Improvements

* Added additional `media_player.media_play` service call after the stream has been sent tot the player, to prevent a delayed start for some streams

#### 🐛 Bug fixes

* Better handling of empty variable `players_screen`
* Fix for wait template to determine if non playing devices should be restored to the old state (it was starting too soon)

### Version 1.7.6 - 24 March 2022

#### 🐛 Bug fixes
* Fix for wait template to determine if resume can be started (it was starting too soon)

### Version 1.7.4/1.7.5 - 23 March 2022

#### 🌟 Improvements

* (1.7.5) Replaces fixed delays with wait templates so there is no unneeded delay in resuming (for example when only a short TTS is sent)

#### 🐛 Bug fixes

* Added a check if all members of a speaker group are `idle` or `off` before resuming the stream to avoid resuming to early (in case a group was playing, but the action causing the interruption was only sent to one of the members)
* (1.7.5) Fixed retrieving volume for players which were in state `off`

### Version 1.7.2/1.7.3 - 22 March 2022

#### 🌟 Improvements

* Added a update of Spotify entities before data is stored, so the most recent data is used
* Only relevant data of entities is stored (depending on state and playing app)

#### 🐛 Bug fixes
* (1.7.3) Template fix

### Version 1.7.0/1.7.1 - 21 March 2022

#### 🌟 Improvements

* No need for YAML anchors anymore, all data in the variables will be applied in the main script now.
* Several changes to work better with the [Google Home Event script](../google_home_event.md)

#### 🐛 Bug fixes

* Fix for volume restore
* (1.7.1) Template fixes for `fixed_picture` and for determining group members for non playing devices

### Version 1.6.1 - 14 March 2022

#### 🌟 Improvements

* Do not store unnecessary data of non playing devices

### Version 1.6.1 - 9 March 2022

#### 🌟 Improvements
* Changed service call to resume audio streams so it will display the image on players with a screen

### Version 1.6.0 - 7 March 2022

#### 🔴 BREAKING

* I've added YAML anchors to copy the variables set in the main resume script to the helper scripts, this means you need to keep the scripts in one yaml file, otherwise the anchors will not work.
* The variable `group_id` whichis used for the group creation is moved to the config variables, because it was also used in the helper scripts

#### 🌟 Improvements

* Other changes to make the script work with the new Google Home Event script.

#### 🐛 Bug fixes

* Fix for volume restore of group members

### Version 1.5.0/1.5.1 - 25 February 2022

#### 🔴 BREAKING

* This version brings quite some changes, which will require also to update the [Google Home Voice script](../google_home_voice.md) in case you use that one as well.
* The script is now split into one main script (`script.google_home_resume`) and 3 helper-scripts (`script.google_home_resume_perform_resume`, `script.google_home_resume_restore_non_playing` and `script.google_home_resume_ytube_seek`). This allows the resume of different speakers to be ran in parallel, instead of that they will have to wait for each other. So in case you send a TTS and a video feed to one of your Nest Hubs, and only a TTS to a Nest Mini, the Nest Mini can already resume before the Nest Hub is finished. All the scripts are in one yaml-file, the one linked below, please make sure that you copy everything. The script for the resume of the ytube music player integration is at the bottom, if you don't use that, you don't need that script.

#### 🌟 Improvements

* The ytube music player integration will now resume at the right position in the track
* Added a variable `group_id` which is just a random string to make sure no groups not belonging to this script are used
* Groups are now generated specifically for each script run by use of the the `context.id` which is used as a suffix of the script.
* Lot's of changes in the way data is stored and shared, also in preparation of a new script which can store the state when you eg leave your house, and resume when you come back

#### 🐛 Bug fixes

* (v1.5.1) Missing variable when calling script to resume state of non playing entities

### Version 1.2.2 - 19 February 2022

#### 🐛 Bug fixes

* Fixed unusual case (at least as far as I know) where a speaker group is playing, but the members are not shown as such. In case the speaker group was the target of the script, it would have caused the template to not recognize it as a player to resume (it looks like this is the case when a stereo pair is a member of the group)

### Version 1.2.3 - 19 February 2022

#### 🐛 Bug fixes

* Addition to v.1.2.2 to make sure the speaker group is also resumed when the target is not the group, but a member of the group

### Version 1.2.1 - 14 February 2022 💟

#### 🌟 Improvements

* Added volume restore for ytube_music_player

#### 🐛 Bug fixes

* Fix for resuming ytube_music_player after Google Home Voice script

### Version 1.2.0 - 13 February 2022

#### 🔴 BREAKING

* Made several changes in how data is sent from the [Google Home Voice script](../google_home_voice.md) to this one. So if you update this script, make sure to also update the other one

#### 🌟 Improvements

* When speaker groups are changed, the volume of the individual group members will now be restored, instead of the volume of the group.
* Several changes in templates, and how data of cast entities is gathered and stored

### Version 1.1.4 - 11 February 2022

#### 🌟 Improvements

* Better way of removing groups at start and end of script

### Version 1.1.3 - 11 February 2022

#### 🐛 Bug fixes

* Fixed typo in templates. Mental note: do not edit on mobile :wink: 

### Version 1.1.2 - 10 February 2022

#### 🌟 Improvements

* Temporary fix to avoid log warnings when the script tries to remove non existing groups (will replace these 3 `choose` blocks with a `repeat` in the next version.
* Groups will also be removed when the last instance of the script finishes.

### Version 1.1.1 - 10 February 2022

#### 🌟 Improvements

* Changed some templates to a more efficient version

#### 🧾 Docs

* Added requirement for `group` integration to requirements section.

### Version 1.1.0 - 9 February 2022

#### ✨ New features

* I added a new field `resume_this_action`. This is a boolean (`true` or `false`). The default is `true`. If set to `false` the actions which you use in the script will not be resumed if the script is called again. I can best explain this using a real life example. 
I've set up a tag scanner on which my kids can scan a card, and then some song will play. If there was already something playing (a TuneIn stream for example) I want that stream to resume after the song finished. However, the kids tend to scan the card a second time when they don't like the song. If that happens the first kids song which was already playing, would be resumed afterwards. With `resume_this_action: false` this will not be the case.
* To let the `resume_this_action: false` setting work, I've added two dynamically created groups. Because this can get messy when you do a script reload while the scripts are running, the script will remove these groups if it is started for the first time.

#### 🌟 Improvements

* Added version number as a variable to the `sequence`. This will make it more easy to see which changes there are since you last updated the script
* Added example how to start the script and apply volume for TTS messages

#### 🐛 Bug fixes

* Resuming of the ytube_mucis_player entities actually works like I intended it now.
* Fixes to work with Google Home Voice script

### 7 February 2022

#### ✨ New feature

* Due to limitations of the cast implementation, the previous way of resuming YouTube Music only worked on players with a screen. To avoid errors, Youtube will only be resumed on the entities listed in `players_screen`. I did implement support for YouTube music via the [ytube_music_player](https://github.com/KoljaWindeler/ytube_music_player) custom integration, however that will only work if YouTube music is started using that integration.

#### 🌟 Improvements

* Made some changes to several templates to avoid warnings in the log.

### 5 February 2022

#### 🌟 Improvements
* Improved and fixed template for resuming YouTube at the right media position.
* Better handling of media_pictures for (TuneIn) streams.

### 4 February 2022

#### ✨ New feature
* (Limited) support for YouTube and YouTube music. The active video/song will be resumed at the position (minus 2 seconds) when it was interrupted. However, it will only resume that video/song. Not the full playlist/album/whatever. It is not possible to immediately send it to the right position. So it will first start at the beginning of the video/song, and after a short delay move to the right position. This will only work on players listed in `players_screen`.

#### 🐛 Bug fixes
* Fix in template where speaker groups were not seen as cast entities.

### 3 February 2022

#### 🛑 Breaking change
* Added [requirements](../google_home_resume.md) (HA Version 2022.2) to first post, also added requirements for Spotify resume there.

#### 🐛 Bug fixes
* Removed WIP (work in progress) references in script object_id and alias.

### 1 February 2022

#### ✨ New feature
* The script will now create a group (`group.resume_active`) and add the entties which are going to be resumed there. It will remove the entity from the group after it has been resumed. Entities which are listed in this group will be ignored, so only the original stream will be resumed.

#### 🌟 Improvements
* Replaced persistant notifications with log messages. In case no valid service calls are provided, the script will abort and an error will be logged. In case thre are valid service calls, but also other invalid actions, a warning will be logged.

#### 🐛 Bug fixes
* Adjusted some templates to avoid warnings in the log.

### January 2022

#### ✨ New feature
* Initial post on the community forum
* Added check on wrong actions (non service calls) which will be ignored and trigger a persistent notification.

#### 🌟 Improvements
* Updated template to determine target list to also work with targets under `data:` instead of `target` and also directly in the service call.
* Added logic to prevent both speaker groups and it's members to be added to the `target_list`

#### 🐛 Bug fixes
* Removed a bug which caused an empty target list
* Small fix to avoid error caused by undefined `fixed_picture` variable.
