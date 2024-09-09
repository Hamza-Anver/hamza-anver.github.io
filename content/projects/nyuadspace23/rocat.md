---
author: " "
title: "nyuad.space / RoCat v1.1.0"
date: "2023-09-01"
description: "Modular flight computer for high-powered rockets, focusing on data logging, GPS recovery, and kinematic calculations"
series: ["nyuad.space"]
aliases: ["rocat-23"]
cover:
  image: images/rocatcloseup.jpg
  caption: "RoCat v1.1 Schematics"
---

RoCat v1.1 is a 6-layer, 54mm x 80mm flight computer designed for use in high-powered rockets like the HALOSHIP rocket in the SpacePort America Cup. The system's primary goals include recording sensor data, communicating with a ground station, and providing GPS-based recovery capabilities, among other essential functions for rocket deployment and control.

<!--more-->

RoCat v1.1 is a compact, modular 6-layer flight computer, measuring 54mm x 80mm, designed for high-powered rockets like the HALOSHIP used in the SpacePort America Cup. Its key functions include recording sensor data, maintaining communication with a ground station, determining the rocket’s position for recovery via GPS, providing servo control for various operations, and calculating kinematics for parachute deployment. Additionally, the system's modularity allows for the integration of more components in future iterations to further enhance its functionality.

{{< image-with-caption src="images/nasheeddeving.png" caption="HALOSHIP's electronics bay" >}}

The printed circuit board (PCB) was primarily designed using EasyEDA, with its size constrained to be smaller than a credit card to fit within the rocket’s tubes and accommodate future designs. The hardware includes an STM32F7 microcontroller, a GPS module, a LoRa transceiver, an inertial measurement unit (IMU), a microSD card slot, a servo controller, pyro channels, and several peripheral connectors. The PCB was manufactured and mostly assembled by JLCPCB, while the final assembly was completed by our team.

The software for RoCat v1.1 was developed using the Arduino Framework and stm32duino in PlatformIO. Although the firmware was incomplete at the time of the flight, the flight computer successfully flew aboard the HALOSHIP rocket. However, a commercial flight computer was ultimately used to meet the competition's requirements.

For a more detailed write-up, check out this [PDF](/RoCat_Portfolio.pdf).

You can also find the design files for the PCB at [Open Source Hardware Lab](https://oshwlab.com/aha9251/rocatboardone).


{{< image-with-caption src="images/rocats1to4.png" caption="The RoCat v1.1.0's" >}}
