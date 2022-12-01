# Examples

* For Google Home Resume Script, which is included in [Google Home Resume package](../../google_home_resume.yaml)
* More information [here](../google_home_resume.md)

___

# Table of contents

1. [Basic example](#basic-example)
1. [No target provided in the service call](#no-target-provided-in-the-service-call-required-to-provide-target-in-script-call)
1. [Send TTS and apply volume](#send-tts-and-apply-volume-for-the-tts-message)
1. [Send TTS with picture and text](#send-tts-with-picture-and-text-for-a-player-with-a-screen)
1. [Usage of the extra key](#using-the-extra-key-on-the-same-level-as-data-and-target)
1. [Usage of the script_exta variable](#using-the-script_extra-key-under-data)
1. [Multiple actions to the same target](#multiple-actions-to-the-same-target-which-need-to-wait-for-each-other)

___

# Basic example

This example will play an mp3 on 2 targets, without additional data

```yaml
alias: "Play sound when there is someone at the door"
service: script.google_home_resume
data:
  action:
    - service: media_player.play_media
      target:
        area_id: 'living_room'
        entity_id:
          - media_player.bedroom
          - media_player.guestroom
      data:
        media_content_type: music
        media_content_id: "media-source://media_source/local/dingdong.mp3"
```

___

# No target provided in the service call, required to provide target in script call

In this example a script is started instead of a service call directly to the entities. Therefor is is required to provide the `target` so the script will know which entities should be resumed/restored.

```yaml
alias: "Play sound when there is someone at the door via script"
service: script.google_home_resume
data:
  target:
    area_id: 'living_room'
    entity_id:
      - media_player.bedroom
      - media_player.guestroom
  action:
    - service: script.play_sound
      data:
        file: "media-source://media_source/local/dingdong.mp3"
```

___

# Send TTS and apply volume for the TTS message

Enter the data for the TTS service call, and provide the volume under `extra`

```yaml
- alias: "Send TTS using Google Home Resume script"
  service: script.turn_on
  target:
    entity_id: script.google_home_resume
  data:
    variables:
      action:
        - alias: "Send TTS message"
          service: tts.google_cloud_say
          target:
            entity_id: media_player.living_mini
          data:
            message: "Ding Dong! There is someone at the door!"
          extra:
            volume: 0.5
```

___

# Send TTS with picture and text for a player with a screen

Enter the data for the TTS service call, and provide the details in`screen_tts` under `extra`. Can be combined with `volume`.
Based on the targets provided, and the variable `players_screen` for the script settings, the script will determine if it should be sent as normal TTS, or one with extra data.
For this the script uses the helper script `script.google_home_resume_tts_screen`
The `picture_url` should be a full url (starting with `http://` or `https://`, not a HA internal url) it can be an url within your network.

## Using the `extra` key on the same level as `data` and `target`

```yaml
- alias: "Send TTS with picture and "
  service: script.turn_on
  target:
    entity_id: script.google_home_resume
  data:
    variables:
      action:
        - alias: "Send TTS message"
          service: tts.google_cloud_say
          target:
            entity_id: 
              - media_player.living_mini
              - media_player.office_hub
          data:
            message: "Ding Dong! There is someone at the door!"
          extra:
            screen_tts:
              large_text: DING DONG
              small_text: There is someone at the door
              picture_url: http://10.0.0.5:8123/media/camera_front_door/snapshot.jpg
            volume: 0.5
```

___

## Using the `script_extra` key under `data`

```yaml
- alias: "Send TTS with picture and "
  service: script.turn_on
  target:
    entity_id: script.google_home_resume
  data:
    variables:
      action:
        - alias: "Send TTS message"
          service: tts.google_cloud_say
          target:
            entity_id: 
              - media_player.living_mini
              - media_player.office_hub
          data:
            message: "Ding Dong! There is someone at the door!"
            script_extra:
              screen_tts:
                large_text: DING DONG
                small_text: There is someone at the door
                picture_url: http://10.0.0.5:8123/media/camera_front_door/snapshot.jpg
              volume: 0.5
```

___

# Multiple actions to the same target, which need to wait for each other.

In case you send multiple actions to the same target, which need to wait for each other, enter `wait: true` under `extra`
Don't put `wait: true` at the end of the last service_call, this will block the Perform Resume script

```yaml
- alias: "Send multiple TTS to the same target"
  service: script.turn_on
  target:
    entity_id: script.google_home_resume
  data:
    variables:
      action:
        - alias: "First TTS message"
          service: tts.google_cloud_say
          target:
            entity_id: media_player.living_mini
          data:
            message: "I'm the first!"
          extra:
            wait: true
        - alias: "Second message"
          service: tts.google_cloud_say
          target:
            entity_id: media_player.living_mini
          data:
            message: "I'm second!"
          extra:
            wait: true
        - alias: "Third and last message"
          service: tts.google_cloud_say
          target:
            entity_id: media_player.living_mini
          data:
            message: "I'm third.. and last.."
```