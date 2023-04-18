- [Ulanzi Automations](#ulanzi-automations)
  - [General](#general)
  - [App Activate/Deactivate](#app-activatedeactivate)
    - [Trigger variables](#trigger-variables)
  - [Graph](#graph)
    - [Trigger variables](#trigger-variables-1)
  - [Indicator](#indicator)
    - [Trigger variables](#trigger-variables-2)
  - [Notifications and Custom Apps](#notifications-and-custom-apps)
    - [Trigger variables](#trigger-variables-3)
  - [Screen Activate/Deactivate](#screen-activatedeactivate)


# Ulanzi Automations
This folder contains several automations to use with the [Ulanzi C100 Clock](https://www.ulanzi.com/products/ulanzi-pixel-smart-clock-2882) in combination with [AWTRIX LIGHT](https://blueforcer.github.io/awtrix-light/#/). AWTRIX LIGHT uses MQTT to communicate with the Ulanzi Clock, and provides several entities to Home Assistant, which are used in some of these automations.

Smart Home Junkie has a nice video about this clock, in which he uses Blueprints to achieve similar functionality as I do in these automations. If you prefer that approach, have a look at [his video](https://www.youtube.com/watch?v=N0NKPJzGHuA&t=13s) and make sure to give it a 👍!

## General

My automations use trigger variables to provide the information needed for the communication with the Ulanzi Clock. This is a more advanced feature, and only available if you switch to YAML mode while creating the trigger. I only use YAML for automations (which also makes it possible to put them in separate files, like I did here).
You should be able to copy the complete content of one of these automations, and paste them in the YAML editor of the Automation GUI. If you want to paste it in automations.yaml, you need to indent everything with two spaces, and add a hyphen (`-`) before the first line.

The approach I used makes it possible to use any trigger you can use in an automation to send a command to the clock, and doesn't require creation of helpers.

```yaml
# My file:
id: 57ead456-0026-43f9-82b4-25d1d12ee304
alias: "00 - Ulanzi example"
trigger: []

# In automations.yaml
- id: 57ead456-0026-43f9-82b4-25d1d12ee304
  alias: "00 - Ulanzi example"
  trigger: []
```

## App Activate/Deactivate

This automation can be used to activate and deactivate (custom) apps. For example do not show the battery app, when the battery is full.
Do note that custom apps can not be activated using this automation, 

### Trigger variables

|Variable|Type|Required|Default|Description|
|---|---|---|---|---|
|show|boolean|yes|`true`|`true` to activate the app `false` to deactivate it|
|app|string|yes|NA|The name of the app which should be activated or deactivate. See the [docs](https://blueforcer.github.io/awtrix-light/#/api?id=addremove-and-rearange-apps) for the default app names

## Graph

This automation can be used to show a graph (either line graph or bar chart) on the clock.

### Trigger variables

|Variable|Type|Required|Default|Description|
|---|---|---|---|---|
|graph_data|list|yes|[]|A list with numeric values to be shown on the screen. AWTRIX expects integers, so the values are rounded to 0 decimals and converted to an integer. If you have small values, you might need to multiply them in this variable.
|graph_type|string|no|`bar`|Either `bar` or `line`|
|graph_color|string or list|no|clock default|Either a RGB array with integers, or a hexidecimal color|
|text|string|no|`none`|Text to be displayed when there is no graph data, if there is no text provided, and no graph_data as well, there will be no update|
|text_color|string or list|no|clock default|Either a RGB array with integers, or a hexidecimal color|
|rainbow|boolean|no|`false`|set to `true` for text in rainbow effect|
|icon|string|no|`none`|icon to be shown next to the graph|
|app|string|no|`notifiy`|name of the custom app to be updated, if no app is entered the graph will be sent as a notification|
|update|boolean|no|`true`|Use this to provide a template when to update the graph. Eg do not update when the source sensor is unavailable|

## Indicator

This automation can be used to display indicators at the upper and lower right corners of the clock. For this automation the light entities provided by the MQTT are used.
It uses the standard entity_ids provided by that integration.

### Trigger variables

|Variable|Type|Required|Default|Description|
|---|---|---|---|---|
|action|boolean|yes|`true`|`true` to display the indicator, `false` to remove it.|
|indicator|integer|no|`1`|`1` for the top right corner, `2` for bottom right corner.|
|color_name|string|no|`white`|The color name to be used for the indicator|
|brightness|integer|no|current matrix brightness|Integer between `0` and `255` to be used as brightness for the indicator|
|update|boolean|no|`true`|Use this to provide a template when to update the graph. Eg do not update when the source sensor is unavailable|

## Notifications and Custom Apps

### Trigger variables

|Variable|Type|Required|Default|Description|
|---|---|---|---|---|
|text|string|yes|`none`|Text to be displayed on the screen|
|color|string or list|no|clock default|Either a RGB array with integers, or a hexidecimal color|
|rainbow|boolean|no|`false`|set to `true` for text in rainbow effect|
|icon|string|no|`none`|icon to be shown next to the graph|
|pushIcon|integer|no|`0`|`0` = Icon doesn't move, `1` = Icon moves with text and will not appear again, `2` = Icon moves with text but appears again when the text starts to scroll again|
|textCase|integer|no|`2`|`0` = global setting, `1` = forces uppercase, `2` = shows as it sent|
|app|string|no|`notifiy`|name of the custom app to be updated, if no app is entered the graph will be sent as a notification|
|update|boolean|no|`true`|Use this to provide a template when to update the graph. Eg do not update when the source sensor is unavailable|

## Screen Activate/Deactivate

Automation to enable or disable the matrix screen

|Variable|Type|Required|Default|Description|
|---|---|---|---|---|
|action|boolean|yes|`true`|`true` to enable the screen, `false` to disable it.|