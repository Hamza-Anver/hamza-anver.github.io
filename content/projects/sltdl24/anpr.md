---
author: " "
title: "SLT / ANPR Data Generation"
date: "2024-07-01"
description: "Synthetic images with Blender and Python to train an ML model for Automatic Number Plate Recognition"
series: ["slt.dl"]
aliases: ["anpr-gen-24"]
cover:
  image: images/anprimgpp.png
  caption: "An example of a post processed synthetic image"
---

At SLT, I worked on developing a system to generate synthetic images for training Automatic Number Plate Recognition (ANPR) systems using Blender and Python.

<!--more-->

Another team of SLT interns was tasked with building an automated parking management system. This system included recognizing license plates, managing gate controls, and providing a web interface for configuration and monitoring. The machine learning model for number plate recognition ran locally on a Jetson Nano to minimize latency, but the team faced challenges due to a limited dataset of Sri Lankan license plates for training and testing. I proposed generating synthetic images to supplement their dataset.

Initially, I considered using Nvidia Omniverse, an industry-standard tool for generating synthetic data, but it wasn’t feasible for SLT. As a result, I turned to Blender. I wrote a Python script that read license plate designs from a JSON file, then created images with corresponding textures and bump maps. These textures were imported into Blender, where a grunge/dirt effect was applied using a Blender addon to simulate real-world conditions. The rendered images were then processed by another Python script that introduced camera artifacts and distortions, making the images more closely resemble real-life data.

This approach was tested with the current machine learning model, and while it showed some promise, a few shortcomings were identified. The full automation of the process, along with the addition of more varied scenes and conditions, is being handled by other SLT interns.



{{< image-with-caption src="images/licenseplateeg.png" caption="An example generated texture of a license plate" >}}
