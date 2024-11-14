---
title: Projects

# Listing view
view: compact

# Optional header image (relative to `assets/media/` folder).
banner:
  caption: ''
  image: 'projects.jpg'
---

Motivated by various science goals in observational cosmology, we are engaged in projects that involve (in no particular order) high-performance computing, data analysis, optical calibration techniques, cryogenics, optical modeling, RF simulations, and material development. New research members joining the group are free to tailor project involvement based on their interests and experties

## Preamble

_We study cosmology, astrophysics, and fundamental physics through observations of the microwave sky. The physical processes that took place in the first epochs in the history of our universe have left an imprint in a 2.7-Kelvin blackbody radiation field that permeates our universe, known as the [cosmic microwave background](https://en.wikipedia.org/wiki/Cosmic_microwave_background) (CMB)._

_During the last 50 years, by carefully observing this radiation with increasingly sensitive instruments, we have succeeded in extracting intricate cosmic detail and established a remarkably successful model of the universe._ 

Future experiments mapping the cosmic microwave background are designed to revolutionize our understanding of the infant universe, the standard model of particle physics, structure formation, and the nature of dark matter. A key effort involves constraining or detecting the energy scale of cosmic inflation.  A detection would mark a watershed moment in cosmology and high-energy physics, but in order to push constraints significantly past current limits, we need a dramatic change in instrument characterization capabilities — the primary focus of CMBeam.

<!--
_In particular, theories within the cosmic inflation paradigm — a set of models that aspire to describe the earliest epochs in the history of our universe — predict a faint global background of gravitational waves. These gravitational waves should have left a swirly imprint in the polarization of the CMB that is known as primordial B-mode polarization. Many experimental efforts are focused on detecting or putting upper limits on the amplitude of this signal._
-->

## Introduction

**Motivated by these fundamental science themes, our research group is engaged in multiple experimental projects, including experimental collaborations such as [SPIDER2](https://spider.princeton.edu/), [Taurus](https://icasu.illinois.edu/news/Taurus), the [Simons Observatory](https://en.wikipedia.org/wiki/Simons_Observatory), and the [LiteBIRD satellite](https://www.isas.jaxa.jp/en/missions/spacecraft/future/litebird.html):**

Through funding from the European Research Council, the Icelandic Research Council, and the University of Iceland (Háskóli Íslands or HÍ for short), we are setting up a new research infrastructure at HÍ. The infrastructure includes various coherent microwave sources in the 40-400 GHz frequency range, a custom anechoic chamber ([see post](/post/2023_anechoic_chamber)), some robotic arms, a vector network analyzer, and a custom cryostat that accommdates small to medium-size refractor telescopes and reimaging optics. This new lab is being devloped with current and future-generation CMB experiments in mind, including CMB experiments such as the balloon-borne experiment Taurus and the LiteBIRD satellite. These CMB experiments give rise to multiple projects in design and testing of novel optical components.

{{< figure src="lab.jpg" caption="Thomas and Rustam getting things set up in the lab.">}}

The science goals of future CMB experiments, in particular 4th-generation satellites planning to supersede Planck, call for an unprecedented control of systematic effects. A significant population of potential systematics effects is related to optics. The CMB community is therefore particularly interested in understanding how best to design mm-wavelength telescopes that can observe the CMB without generating false B-mode signals that would prevent us from reaching our science goals.

## Time-domain simulations

For this purpose, our group develops and maintains an advanced beam convolution algorithm called beamconv ([github link](https://github.com/AdriJD/beamconv)) and a large component of our work is devoted to the development of realistic optical models for mm-wavelength telescopes. With accurate models, we can understand how optical non-idealities limit our ability to study minute polarization signals in the cosmic microwave background. Members of our group have recently written a few papers on this topic (see [arXiv:1809.05034](https://arxiv.org/abs/1809.05034), [1911.13153](https://arxiv.org/abs/1911.13153), and [2012.10437](https://arxiv.org/abs/2012.10437)).

## Data analysis

We are also developing algorithms and code libraries for the calibration of the Simons Observatory (SO) which is currently being deployed in the Atacama Desert. Nadia Dachlythra recently wrote a [paper](/post/2023_nadias_paper/) that summarizes our efforts to calibrate the SO Small Aperture Telescopes. We are continung this calibration work from the University of Iceland.

## Material development

In work funded by the Swedish Space Agency, we are conducting R&D development of metamaterial microwave absorbers. We are using state-of-the-art continuous wave Terahertz spectroscopy systems to design materials that absorb 99.999% of all incoming microwave radiation. As part of this effort, we are working to understand how design features such chemical composition, metamaterial antireflection coatings, etc. impact the integrated reflectivity of our materials.

{{< figure src="absorber.jpg" caption="A 3D printed metamaterial absorber prototype. Note: we make lots of absorbers that are also black at optical wavelengths, but they are frankly less fun to look at 😊">}}

**If you are a student at the University of Iceland want to discuss the science of the cosmic microwave background, or any other science topic for that matter, please do not hesitate to come find us.**

