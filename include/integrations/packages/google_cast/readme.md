# Table of contents
1. [Background](#background)
2. [Latest version](#latest-version)

# Background
This package started somewhere in 2020 as a simple script to resume a Google Cast device after it was interrupted by a TTS message. During the years more functionality was added, the Cast devices can also be resumed after playing an audio file, or casting a Home Assistant Dasboard.
In the past years I also created others scripts using the Google Home Resume script. There is a script to determine on which device a question was asked and send a TTS or play a file on that specific device. Another script stores the state of the cast devices in a template sensor, so it can be resumed in later (for example store it when you leave home, and restore it when you arrive home again).

All these scripts are now combined in one package

# Latest version
## 2022.12 Holiday period, let's bring the family together
### 🌐 GENERAL
#### 🌟 Improvements
* All scripts related to the Google Home devices are now combined in one package. This brings toghether the Google Home Resume, Google Home Voice and Google Home Event script. For me it makes it easier to update them, I can make more efficient usage of YAML anchors,so I don't need to update templates and settings in 3 places.
* A lot of bigger and smaller template fixes
* More usage of YAML anchors, which also reduces the total number of lines for the combined scripts
### ♻ RESUME SCRIPT
#### 🐛 Bug fixes
* There was bug when using the automation which would start the script for a group member when that was the target of a service call, but the group was playing. This caused the resume to fail.