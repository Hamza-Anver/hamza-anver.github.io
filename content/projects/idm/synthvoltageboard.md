---
author: " "
title: "NYU IDM / Voltage Convertor"
date: "2024-11-15"
description: "Dead simple analog voltage follower for buffering voltages between analog music devices"
series: ["nyu-idm"]
aliases: ["synth-voltage-convertor-24"]
cover:
  image: images/idm/synthconverter_0.jpg
  caption: "Synth voltage convertor in use"
---

During Fall 2024 in New York I developed a voltage buffer PCB with NYU's IDM lab.

<!--more-->

During my course work in Analog Heaven (a Tandon [Integrated Digital Media class](http://idm.engineering.nyu.edu/)) I challenged myself to design and manufacture and assemble a PCB during the semester.

The PCB and schematic are available on [Open Source Hardware Lab](https://oshwlab.com/aha9251/synthvoltageconvertor_0).

This board is centered around a Texas Instrument's OPA1678 dual op amp for audio. For boost power conversion a boost convertor from TI is used to boost the input 5V from USB to 14V which is then divided to allow for approximately 12Vpp bipolar signals to be buffered. 

For ease of use, both banana and 3.5mm jacks are compatible inputs and outputs. The board also has the option to amplify an input by toggling the switch and setting the potentiometer position to the appropriate value. Two USB C ports are included to allow daisy chaining multiple boards, there is also a switch to disconnect the CC pins on the connectors so that multiple daisy chained board won't create unexpected situations with the USB protocol.

During my class the board was used to buffer output signals from a drum machine signal generator to inputs of a analog video visualizer. 

{{< image-with-caption src="images/idm/synthconvertor_3d.png" caption="3D model of the PCB in EasyEDA" >}}