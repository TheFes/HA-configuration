- [👋 Hi there!](#-hi-there)
- [🛠 My config](#-my-config)
- [🖥 My Dashboard](#-my-dashboard)
- [🧰 Hardware](#-hardware)
  - [Home Assistant](#home-assistant)
  - [Lights and light buttons](#lights-and-light-buttons)
- [☕ Coffee](#-coffee)

# 👋 Hi there!

I'm Martijn, but maybe better known as TheFes. Im a Home Assistant enthousiast since 2020 when I started automating my new house. Before that I was using Domoticz in a previous home. The new house came with a built in "smart" home system, which was very closed, and could only be used with their own app. Like most, I started with some small stuff, and now I multiple smart devices in every room.

You might also know me from Discord, where I'm quite active on multiple HA replated servers or as Language Leader of the Dutch language for Assist.

# 🛠 My config

I'm quite a big fan of the split configuration. The [video](https://www.youtube.com/watch?v=FfjSA2o_0KA) by Dr Zzs helped me to understand how that's done, and after that I expanded that to even single files for most of the Dashboard cards. 

I'm also a big fan of Jinja templates, you will see them in my automations, scripts, dashbaord and of course in a lot of template entities.

At one point I stopped caring about entity names, so I don't have a proper naming convention. Using areas in combination with templates makes me find what I'm looking for.

# 🖥 My Dashboard

For my Dashboard I use [Mushroom cards](https://github.com/piitaya/lovelace-mushroom).
The main view consists of room-cards (built using stack-in-cards) with the important stuff of that room. You can toggle light (groups), sitch (groups) and/or covers from the main view. Clicking on a room name takes you to the room for more details.
Main:
![Lovelace Main](https://user-images.githubusercontent.com/28803438/174798904-dabd30a8-18f9-4ef9-9d2d-dfed5b9eb91e.png)
Room overview:
![Lovelace Room](https://user-images.githubusercontent.com/28803438/174799053-1aa0e33b-26f9-4b3a-b022-80343585fa3a.png)

The dashboard uses [Kiosk Mode](https://github.com/maykar/kiosk-mode) to hide the header (and sidebar for non admin users) and [layout card](https://github.com/thomasloven/lovelace-layout-card) to specify how the cards are arranged.

What might of interest:
* [Dashboard configuration](https://github.com/TheFes/HA-configuration/tree/main/include/lovelace/01_general)
* [Google Home scripts](https://github.com/TheFes/HA-configuration/tree/main/include/script/00_general/google_cast)

# 🧰 Hardware

## Home Assistant

My Home Assistant server runs in a Proxmox VM on an Intel i3 of the 10th generation.

## Lights and light buttons

All the wall buttons in my house are momentary buttons, and I places a smart relay behind all of them. Some have "dumb" dimmable lights, which are controlled by a Shelly Dimmer 2. Most have smart lights, which are mostly ESPHome flashed Tuya wifi filament bulbs or IKEA Tradfri GU10 spots. These smart lights are either controlled by Shelly 1 modules, or Sonoff Mini R4 modules. These are all flashed to ESPHome, and will send events to HA in case there is an API connection. If not, they will toggle the built in relay as fallback for when HA is down.

## Power metering

## Covers

## Sensors

## Other

# ☕ Coffee

If you think I deserve a coffe, please feel free to buy me one (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>
