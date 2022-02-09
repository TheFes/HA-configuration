# Changelog
For [Google Home Resume script](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/google_home_resume.yaml)
More information [here](https://github.com/TheFes/HA-configuration/blob/main/include/script/00_general/google_cast/docs/google_home_resume.md)
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
