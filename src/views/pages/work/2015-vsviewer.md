---
type: work
subdir: work
title: Virtual slice viewer
description: Virtual slice viewer for the CAVE2
keywords: visualisation, virtual slice, opengl, CAVE system
categories: visualisation
image: public/imgs/work/2015-vsviewer/01.jpg
---

### **Platforms:** Linux, MacOS

### **Built with:** CMake, C++, OpenMPI, OpenGL, EVL Omicron

### **Main features:**

- Support DeepZoom and OpenSlide inputs (histology images, high-resolution images)
- Render massive resolution images on desktop and on visualisation cluster e.g. the CAVE2
- Support slide view (jump between slide images)
- Asynchronous and multi-threading image loading
- Support wand and keyboard to switch between images, zoom, pan
- Support stereo display by combining left and right images

<div class="image">
  <img src="<%= baseurl %>/public/imgs/work/2015-vsviewer/02.jpg" alt="Using virtual slide viewer to do presentation"></img>
  <p class="caption">Using vsviewer to do presentation</p>

  <img src="<%= baseurl %>/public/imgs/work/2015-vsviewer/03.jpg" alt="virtual slide viewer earth"></img>
  <p class="caption">View high resolution images</p>
</div>
