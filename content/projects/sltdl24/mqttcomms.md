---
author: " "
title: "SLT / Industrial IoT firmware"
date: "2024-08-01"
description: "Industrial IoT firmware, focusing on configurable MQTT communications"
series: ["slt.dl"]
aliases: ["mqtt-comms-24"]
cover:
  image: images/nbiotboard.png
  caption: "The board I tested firmware on"
---

While at SLT I also worked on a firmware project for an Industrial IoT board. The board was a prototype with LTE communication provided by an SIMCOM A76XX module, and WiFi via the MCU - an ESP32. The firmware needed to be as easily configurable as possible for future users, whether they be internal SLT developers or external contractors building on top of the IIoT platform.

<!--more-->
---

SLT had a prototype Industrial Internet of Things (IIoT) board with LTE communication provided by an SIMCOM A76XX module, and WiFi via the MCU - an ESP32. With these two communication methods there needed to be a way to have the primary communication protocol (MQTT) switch between whatever was optimal, and also handle updates via whatever connection mode is most optimal. With those criteria fulfilled the firmware also needed to be as easily configurable as possible for future users, whether they be internal SLT developers or external contractors building on top of the IIoT platform.

To this end I made a demonstration drop in place library to handle all of these factors. 
There are 4 primary components to the library I built:

1. configwebpage, provides an AP with a captive portal, and a Async Web Server with a page for device configuration and for viewing the status of the device
2. confighelper, wraps around the Preferences.h library from Espressif for persistent configuration settings, it uses an ArduinoJSON document to store the configuration in RAM while being used,it also allows for factory resets
3. otahelper, wraps around the Update.h library from Espressif, handles checking a URL to a raw JSON file with details about an available OTA update
4. comms_handler, handles switching between LTE and WiFi for sending MQTT messages from the main.cpp file to an MQTT broker. Also instantiates the other components.

In addition to the library, there are three Python scripts to assist functionality.
  - preprocessor.py - a pre script to compress the webpage HTML file.
  - versioning.py - a pre script to create a header file with the appropriate semantic versioning definitions.
  - bincreate.py - a post script to move the firmware .bin file to an appropriate folder depending on the PlatformIO environment, and create a JSON file representing the semantic version of the firmware along with some other details.


{{< image-with-caption src="images/iotfwui.png" caption="Web Interface of the firmware" >}}

While the functionality of all of these components was successfully demonstrated, unfortunately I was unable to fully test integration during my time there.

**[The GitHub repository for the project can be found here](https://github.com/Hamza-Anver/esp32-mqtt-handler-pio-0/)**
