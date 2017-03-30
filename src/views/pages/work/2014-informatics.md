---
type: work
subdir: work
title: Multimodality research imaging informatics repository
description: Design, implementation and operation
keywords: multimodality, imaging, informatics, repository
categories: system
image: public/imgs/work/2014-informatics/01.jpg
---

## Introduction

I contributed to the design, implementation and operation of a multi-modality research imaging data management system that manages imaging data obtained from biomedical imaging scanners operated at Monash Biomedical Imaging (MBI), Monash University in Melbourne, Australia. In addition to Digital Imaging and Communications in Medicine (DICOM) images, raw data and non-DICOM biomedical data can be archived and distributed by the system. Imaging data are annotated with meta-data according to a study-centric data model and, therefore, scientific users can find, download and process data easily.

## Result

The research imaging data management system ensures long-term usability, integrity inter-operability and integration of large imaging data. Research users can securely browse and download stored images and data, and upload processed data via subject-oriented informatics frameworks including the Distributed and Reflective Informatics System (DaRIS), and the Extensible Neuroimaging Archive Toolkit (XNAT).

## Requirement / Features

- imaging data from DICOM capable modalities (e.g. MRI) must be, to a large extent, automatically routed from the point of acquisition to the imaging informatics system
- imaging and non-imaging data from non-DICOM capable modalities (e.g. EEG) must be, to a large extent, easily manually uploaded to the imaging informatics system or uploaded using scripts and command line tools
- imaging and non-imaging data and meta-data must be stored on secure, reliable, research grade backed-up storage
- upon ingest of DICOM-format images, standard meta-data should, to a large extent, be automatically extracted ("harvested") from the DICOM files and recorded in the imaging informatics system
- human imaging data must be accessible by standard radiology software for review by the MBI radiologist
- imaging and non-imaging data must be organised in a study centric fashion, supporting multi-modal and longitudinal image collections per study subject
- an end user tool should exist to aid users in defining the set of meta-data to associate with a study and its subjects, and in defining the data acquisition(s) that comprise the study
- all data must be uniquely identifiable without the need for real subject names or identifying information other than date of birth and gender
- imaging and non-imaging data and meta-data must be available via a secure web portal to the owner (research leader) and their delegate/s
- imaging and non-imaging data must be transferable from within the secure web portal to the accessing workstation ("download") or to Monash University's high performance computing facility MASSIVE ("transfer")
- users should be able to manually package and upload processed data and record provenance (e.g. link to the source data set/s)
- and a command-line based tool must be available that enables search of the image informatics system, and upload and download of data collections, for use in batch processing workflows.

<div class="image">
  <img src="<%= baseurl %>/public/imgs/work/2014-informatics/02.jpg" alt="The acquisition and automated data flows"></img>
  <p class="caption">The acquisition and automated data flows</p>
  <br/>

  <img src="<%= baseurl %>/public/imgs/work/2014-informatics/03.jpg" alt="User interaction"></img>
  <p class="caption">User interaction</p>
  <br/>

  <img src="<%= baseurl %>/public/imgs/work/2014-informatics/04.jpg" alt="User interface for DaRIS"></img>
  <p class="caption">User interface for DaRIS. The web based user interface of DaRIS showing the main interface panel in (a) and the "cart" functionality in (b)</p>

</div>
