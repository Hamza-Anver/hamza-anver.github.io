---
author: " "
title: "IBEL / OmniStim v1.0.0"
date: "2025-04-21"
description: "Variable frequency wireless power transmitter for powering optical stimulation devices"
series: ["nyuad-ibel"]
aliases: ["nyuad-ibel-omnistim-v1"]
cover:
  image: images/ibel/omnistimboard_0.jpg
  caption: "OmniStim board fresh out of packaging"
---

During Spring 2025 I designed & manufactured a variable frequency WPT board.

<!--more-->

A monorepo of the OmniStim project is available [here](https://github.com/Hamza-Anver/OmniStimEvalBoard).
Alternatively individual components can be accessed as well:
- [Firmware (PlatformIO)](https://github.com/Hamza-Anver/OmniStimEvalBoard-Firmware).
- [Hardware (KiCAD)](https://github.com/Hamza-Anver/OmniStimEvalBoard-Hardware).
- [Controller (NiceGUI)](https://github.com/Hamza-Anver/OmniStimEvalBoard-Controller).

In New York University Abu Dhabi, I was able to work as a Research Assistant at Profesor Sohmyung Ha's Integrated BioElectronics Laboratory, where I developed OmniStim. This is an evaluation board to test operating principles of the OmniStim head unit.

Fabricated with JLCPCB in April 2025, designed with KiCAD.

It is designed to use the ESP32 Audio PLL to create a signal between approximately 5MHz to 80MHz. This signal is then conditioned and used to drive an LC tank, where the capacitance can be varied digitally and by the DIP switches.

Future designs will have their capacitance entirely digitally controlled, and be miniaturized.

This board is intended only to test if the ESP32 with this conditioning can successfully drive the LC tank and if the resonance of the tank can be subsequently measured by the ESP32.

Testing proved that it is successful at producing an arbitrary frequency for wireless power transfer and also measuring the amplitude of the signal to quantify if the system is at resonance for automatic tuning. 

The firmware as of now provides basic user control of sweeping ranges and stepping up and down frequencies, the [controller software](https://github.com/Hamza-Anver/OmniStimEvalBoard-Controller), is intended to provide an easy to use GUI built on the NiceGUI framework to control an OmniStim board.

{{< image-with-caption src="images/ibel/omnistimscope_0.jpg" caption="Probing the OmniStim during operational testing, the yellow is on the RX side and green is TX" >}}