---
author: " "
title: "nyuad.space / RoCat v1.1.0"
date: "2023-09-01"
description: "Student Researched and Developed Avionics and Data Logging Flight computer"
series: ["nyuad.space"]
aliases: ["rocat-23"]
cover:
  image: images/nasheeddeving.png
  caption: "HALOSHIP's electronics bay"
---

Another part I helped develop while at nyuad.space was RoCat v1.1.0, a high speed data logger and flight computer.

<!--more-->

RoCat v1.1 is a 6-layer, 54mmx80mm flight computer designed for use in high-powered rockets like the HALOSHIP rocket in the SpacePort America Cup. The primary goals of the system include recording sensor data, communicating with a ground station, determining the rocket's absolute position for recovery via GPS, providing servo control for various functions, and calculating kinematics for the deployment of parachutes. The system also features modularity, allowing for the integration of additional modules to enhance functionality in future iterations. 

{{< image-with-caption src="images/rocatschematic0.png" caption="RoCat v1.1 Schematics" >}}

The PCB was designed primarily in Easy EDA, the size of the PCB  was constrained to be smaller than a credit card to accomodate more future rocket tubes. The hardware features an STM32F7, a GPS module, LoRa transceiver, an IMU, a microSD card slot, servo controller, pyro channels, and several sets of peripheral connectors. The PCB was manufactured and mostly assembled by JLCPCB, with the final assembly done by the team. The software was developed using the Arduino Framework and stm32duino in PlatformIO. The firmware was incomplete at the time of the flight, but the flight computer successfully flew on the HALOSHIP rocket, although a commercial flight computer was ultimately used to meet the competition's requirements.


Check out this [PDF](/RoCat_Portfolio.pdf) for a more detailed write up.

And here are the design files for the PCB [Open Source Hardware Lab](https://oshwlab.com/aha9251/rocatboardone)


{{< image-with-caption src="images/rocats1to4.png" caption="The RoCat v1.1.0's" >}}
