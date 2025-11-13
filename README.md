<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/logo/TheFesCasa_logo_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="/logo/TheFesCasa_logo_light.png">
  <img alt="Shows a black logo in light color mode and a white one in dark color mode." src="/logo/TheFesCasa_logo_light.png">
</picture>


- [👋 Hi there!](#-hi-there)
- [🛠 My config](#-my-config)
- [🖥 My Dashboard](#-my-dashboard)
- [🧰 Hardware](#-hardware)
  - [Home Assistant](#home-assistant)
  - [Lights and light buttons](#lights-and-light-buttons)
  - [Utility metering](#utility-metering)
  - [Covers](#covers)
  - [Sensors](#sensors)
  - [Other](#other)
- [☕ Coffee](#-coffee)

# 👋 Hi there!

I'm Martijn, but maybe better known as TheFes. I'm a Home Assistant enthusiast since 2019 when I started automating my new house. Before that I was using Domoticz in a previous home. The new house came with a built in "smart" home system, which was very closed, and could only be used with their own app. Like most, I started with some small stuff, and now I have multiple smart devices in every room.

You might also know me from Discord, where I'm quite active on multiple HA related servers or as Language Leader of the Dutch language for Assist.

# 🛠 My config

I'm quite a big fan of the split configuration. The [video](https://www.youtube.com/watch?v=FfjSA2o_0KA) by Dr Zzs and Frenck helped me to understand how that's done, and after that I expanded that to even single files for most of the Dashboard cards. 

I'm also a big fan of Jinja templates, you will see them in my automations, scripts, dashboard and of course in a lot of template entities.

At one point I stopped caring about entity names, so I don't have a proper naming convention. Using areas in combination with templates makes me find what I'm looking for.

# 🖥 My Dashboard

For my Dashboard I use [Mushroom cards](https://github.com/piitaya/lovelace-mushroom).
The main view consists of room-cards (built using stack-in-cards) with the important stuff of that room. You can toggle light (groups), switch (groups) and/or covers from the main view. Clicking on a room name takes you to the room for more details.
Main:
![Lovelace Main](https://user-images.githubusercontent.com/28803438/174798904-dabd30a8-18f9-4ef9-9d2d-dfed5b9eb91e.png)
Room overview:
![Lovelace Room](https://user-images.githubusercontent.com/28803438/174799053-1aa0e33b-26f9-4b3a-b022-80343585fa3a.png)

The dashboard uses [Kiosk Mode](https://github.com/maykar/kiosk-mode) to hide the header (and sidebar for non admin users) and [layout card](https://github.com/thomasloven/lovelace-layout-card) to specify how the cards are arranged.

What might be of interest:
* [Dashboard configuration](https://github.com/TheFes/HA-configuration/tree/main/include/lovelace/01_general)
* [Google Home scripts](https://github.com/TheFes/HA-configuration/tree/main/include/script/00_general/google_cast)

# 🧰 Hardware

## Home Assistant

My Home Assistant server runs in a Proxmox VM on an Intel i3 of the 10th generation.

## Lights and light buttons

All the wall buttons in my house are momentary buttons, and I places a smart relay behind all of them. Some have "dumb" dimmable lights, which are controlled by a Shelly Dimmer 2. Most have smart lights, which are mostly ESPHome flashed Tuya wifi filament bulbs or IKEA Tradfri GU10 spots. These smart lights are either controlled by Shelly 1 modules, or Sonoff Mini R4 modules. These are all flashed to ESPHome, and will send events to HA in case there is an API connection. If not, they will toggle the built in relay as fallback for when HA is down.
The Sonoff modules also act as Bluetooth Proxies to ensure I have Bluetooth coverage throughout the house.

## Utility metering

My house came with a smart meter, which has a port you can use in comination with a P1 cable. My server is not close to the meter, so I connected a [P1 Ethernet reader](https://www.zuidwijk.com/product/p1-reader-ethernet/). Using that I can get the data for the Energy Dashboard for electricity and gas. I also have 15 solar panels on the roof. To measure the water usage I use an earlier version of the [watermeterkit](https://smarthomeshop.io/products/watermeterkit-v2-0).

## Covers

For window covers I have shades with Somfy IO motors. I use a Connexxoon to connect to those, and as of HA 2023.12 the local API is supported. 

## Sensors

For sensors I use a mix of Xiaomi Zigbee sensors (temp/humidity, door/window, PIR) and Xiaomi Bluetooth temp/humidity sensors. The Bluetooth ones are flashed to BTHome. I like these because they have a small display so you can see the values without having to open the app. In the master bedroom I have an air purifier that automatically adjusts based on air quality sensors, and a smart scale for health tracking.

## Other

Additional devices include:
* **Voice assistants**: Multiple voice satellites throughout the house for voice control
* **Entertainment**: Soundbar and TV integration with voice commands
* **Appliance monitoring**: Smart monitoring for dishwasher, washing machine, and other appliances
* **Security**: Doorbell system with visitor management
* **Climate control**: Smart thermostats and fans for optimal comfort
* **Garden automation**: Automated irrigation and outdoor lighting

For a detailed breakdown of all automations and configurations, check out the [packages directory](./packages/) which contains organized YAML files for each area and function of the house.

# ☕ Coffee

If you think I deserve a coffe, please feel free to buy me one (I might spend it on another beverage though).
In case you decide to do so, thanks a lot!

<a href="https://www.buymeacoffee.com/thefes" target="_blank">![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)</a>
