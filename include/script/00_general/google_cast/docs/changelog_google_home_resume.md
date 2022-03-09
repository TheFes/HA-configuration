# Changelog
* For [Google Home Resume script](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_resume.yaml)
* More information [here](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/docs/google_home_resume.md)

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
* This version brings quite some changes, which will require also to update the [Google Home Voice script](https://community.home-assistant.io/t/script-to-send-actions-to-the-right-google-home-based-on-voice-commands/346885/9) in case you use that one as well.
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
* Made several changes in how data is sent from the [Google Home Voice script](https://community.home-assistant.io/t/script-to-send-actions-to-the-right-google-home-based-on-voice-commands/346885/9) to this one. So if you update this script, make sure to also update the other one
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
* Added [requirements](https://community.home-assistant.io/t/script-to-resume-google-cast-devices-after-they-have-been-interrupted-by-any-action/383896#requirements-3) (HA Version 2022.2) to first post, also added requirements for Spotify resume there.
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
