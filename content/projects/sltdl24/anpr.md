---
author: " "
title: "SLT / ANPR Data Generation"
date: "2024-07-01"
description: "Blender system to generate synthetic images for ANPR training"
series: ["slt.dl"]
aliases: ["anpr-gen-24"]
cover:
  image: images/anprimgpp.png
  caption: "An example of a post processed synthetic image"
---

At SLT I worked on creating a system to generate synthetic images for training Automatic Number Plate Recognition (ANPR) systems. The system was built using Blender, and Python.

<!--more-->

Another team of SLT interns were working on building a system to automatically manage parking spaces, including recognizing number plates, managing raising and lowering the gates, and providing a web interface for configuration, viewing and management. The ML model runs locally on a Jetson Nano to reduce latency, the team was running into a few issues with limited images of Sri Lankan license plates to train and test their model. I proposed to create synthetic images for training and testing. Using the industry standard of Nvidia Omniverse was my first preference but using that was not possible for SLT. So I turned to Blender instead. 

I created a Python script that read license plate designs from a JSON file, then created an image with the texture of the plate, and a corresponding bump map. Then in blender the plate textures were loaded into a scene, with grunge/dirt being applied by a Blender addon. Exported images were then processed by another Python script to add camera artifacts and distortion to simulate images closer to real life conditions.
This approach was tested with the current ML model showing some shortfalls. Full automation of these steps is being worked on by other SLT interns, with more scenes and conditions being added.



{{< image-with-caption src="images/licenseplateeg.png" caption="An example generated texture of a license plate" >}}
