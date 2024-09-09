---
author: " "
title: "SLT / Industrial IoT firmware"
date: "2024-08-01"
description: "Configurable, MQTT focused firmware for an Industrial IoT board with LTE and WiFi communication"
series: ["slt.dl"]
aliases: ["mqtt-comms-24"]
cover:
  image: images/nbiotboard.png
  caption: "IIoT prototype board"
---

At SLT, I developed firmware for an Industrial IoT board that used LTE and WiFi communication, focusing on seamless MQTT protocol switching and ensuring easy configuration for future developers and contractors.

<!--more-->

The IIoT board was a prototype that used a SIMCOM A76XX module for LTE and an ESP32 for WiFi. The primary requirement was to allow the firmware to switch between these two communication methods based on availability, ensuring the MQTT protocol always used the optimal connection. Additionally, the firmware needed to handle over-the-air (OTA) updates via both communication modes. The system had to be easily configurable for future users, whether internal SLT developers or external contractors building on top of the platform.

To address these needs, I created a demonstration library with four main components:

1. **configwebpage**: This provides an Access Point (AP) with a captive portal and an asynchronous web server. Users can configure the device and view its status through a user-friendly web interface.
2. **confighelper**: This component wraps around the Espressif Preferences.h library to manage persistent configuration settings. It uses an ArduinoJSON document to store settings in RAM during operation and includes options for factory reset.
3. **otahelper**: This wraps around Espressif's Update.h library and checks a URL for a raw JSON file that provides details about available OTA updates. It handles downloading and applying these updates.
4. **comms_handler**: This manages the switching between LTE and WiFi for sending MQTT messages. It ensures the main application can seamlessly switch between communication methods and integrates the other components.

To complement the library, I developed three Python scripts to streamline functionality:
  - **preprocessor.py**: This script compresses the webpage HTML file to optimize storage and performance.
  - **versioning.py**: This generates a header file containing semantic versioning details for the firmware.
  - **bincreate.py**: This post-build script moves the firmware’s .bin file to the correct folder depending on the PlatformIO environment. It also creates a JSON file that tracks the firmware version and other relevant metadata.

{{< image-with-caption src="images/iotfwui.png" caption="Web Interface of the firmware" >}}

While the library's functionality was successfully demonstrated, full testing of the integration across all components could not be completed within my internship period.

**[The GitHub repository for the project can be found here](https://github.com/Hamza-Anver/esp32-mqtt-handler-pio-0/)**
