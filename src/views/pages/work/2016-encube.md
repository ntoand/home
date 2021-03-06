---
type: work
subdir: work
title: Encube - Large-scale comparative visualisation
description: Large-scale comparative visualisation of sets of multidimensional data
keywords: visualisation, virtual slice, opengl, CAVE system
categories: visualisation data-processing
image: public/imgs/work/2016-encube/01.jpg
---

### **Platforms:** Linux, MacOS

### **Built with:** Script, C/C++, s2plot, python

I contributed to the development, testing and data preparation for the project. I have extracted tractography for more than 800 subjects from Human Connectome Project data using High Performance Computing <a href="https://www.massive.org.au/" target="_blank">MASSIVE</a>. Major contributions and images in this page generated by Dany Vohl, PhD student, Swinburne Univ. of Tech.

## Introduction

> encube <sup>[1](#footnote1)</sup> —a qualitative, quantitative and comparative visualisation and analysis system, with application to high-resolution, immersive three-dimensional environments and desktop displays. encube extends previous comparative visualisation systems by considering: (1) the integration of comparative visualisation and analysis into a unified system; (2) the documentation of the discovery process; and (3) an approach that enables scientists to continue the research process once back at their desktop. Our solution enables tablets, smartphones or laptops to be used as interaction units for manipulating, organising, and querying data. We highlight the modularity of encube, allowing additional functionalities to be included as required.

## Features

- provided a visual overview of the entire data cube survey, or a sufficiently large sub-set of the survey
- allowed qualitative, quantitative, and comparative visualisation
- supported interaction between the user and the data, including volume rotation, translation and zoom, modification of visualisation properties (colour map, transparency, etc.), and interactive querying
- supported different ways to organise the data, including automatic and manual organisation of data within the display space, as well as different ways of sorting lists using metadata included with the dataset;
- could utilise stereoscopic displays to enhance comprehension of three-dimensional structures;
- allowed a single data cube to be selected from the survey and visualised at higher-resolution;
- encouraged collaborative investigation of data, so that a team of expert researchers could rapidly identify the relevant features;
- was extensible (i.e., easily customizable) so that new functionalities can be easily be added as required;
- automatically tracked the workflow, so that the sequence of interactions could be recorded and then replayed;
- was sufficiently portable that a single solution could be deployed in different display environments, including on a standard desktop computer and monitor.

<div class="image">
  <img src="<%= baseurl %>/public/imgs/work/2016-encube/02.jpg" alt="Components of encube"></img>
  <p class="caption">Components of encube</p>

  <img src="<%= baseurl %>/public/imgs/work/2016-encube/03.jpg" alt="encube in action"></img>
  <p class="caption">encube in action. (A) Photograph of a subset of five out of the 20 four-panel columns of the Monash CAVE2. (B) Selecting screens within the meta-controller leads to the display of a frame (pink) around the selected screens in the CAVE2. (C) Visualisation outputs showing different galaxy morphologies taken from the THINGS galaxy survey (Walter et al., 2008)</p>

  <img src="<%= baseurl %>/public/imgs/work/2016-encube/04.jpg" alt="meta controller"></img>
  <p class="caption">Meta controller. (A) A miniature representation of the Monash CAVE2’s 4 rows by 20 columns configuration; (B) action buttons; (C) the dataset viewer (allows the survey to be sorted by multiple criteria); and (D) request/display quantitative information about data from one or multiple screens (e.g., a histogram is shown here for galaxy NGC1569 currently on screen A1).</p>

</div>


<div class="footnote"><a name="footnote1">1</a>: Vohl D, Barnes DG, Fluke CJ, Poudel G, Georgiou-Karistianis N, Hassan AH, Benovitski Y, Wong TH, Kaluza OL, Nguyen TD, Bonnington CP. (2016) Large-scale comparative visualisation of sets of multidimensional data. PeerJ Computer Science 2:e88 https://doi.org/10.7717/peerj-cs.88</div>
