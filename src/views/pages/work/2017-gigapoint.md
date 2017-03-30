---
type: work
subdir: work
title: Gigapoint - display large point datasets
description: Display large datasets on desktop/CAVE2
keywords: visualisation, opengl, potree, pointcloud
categories: visualisation data-processing
image: public/imgs/work/2017-gigapoint/01.jpg
---

### **Platforms:** Linux, MacOS

### **Built with:** CMake, C++, Omegalib, OpenGL

Gigapoint is an <a href="https://github.com/uic-evl/omegalib" target="_blank">Omegalib</a> module to display large points datasets (e.g. LIDAR data) on desktop and visualisation cluster e.g. the CAVE2.

### **Features**

- Use <a href="http://potree.org/" target="_blank">potree</a> data as input
- Asynchronous and multi-threading file loading
- Support stereo display
- Eye Doom Lighting (EDL) filter
- Support live data update from a SLAM system
- Support data interaction with multiple wands e.g. track finding

<div class="image">
  <img src="<%= baseurl %>/public/imgs/work/2017-gigapoint/02.jpg" alt="Century mine dataset"></img>
  <p class="caption"><a href="https://en.wikipedia.org/wiki/Century_Mine" target="_blank">Century mine</a> (350 million points) dataset <sup>[1](#footnote1)</sup></p>

  <img src="<%= baseurl %>/public/imgs/work/2017-gigapoint/03.jpg" alt="Century mine surrounding dataset"></img>
  <p class="caption">Century mine surrouding dataset (750 million points) <sup>[1](#footnote1)</sup></p>

  <img src="<%= baseurl %>/public/imgs/work/2017-gigapoint/04.jpg" alt="Coloured by evelation with EDL filter"></img>
  <p class="caption">Coloured by evelation with EDL filter</p>

</div>

<div class="footnote"><a name="footnote1">1</a>:LIDAR data provided by Steve Micklethwaite to MIVP</div>
