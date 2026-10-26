---
title: Projects
banner:
  caption: ''
  image: 'projects.jpg'
_build:
  list: never
  render: always
sitemap:
  disable: true
---

We develop instruments and measurement techniques to investigate the early Universe and the nature of dark matter. Based at the University of Iceland, our group combines experimental microwave optics, cryogenics, electromagnetic simulations, material development, and astronomical data analysis. We tailor project involvement for new members joining the group based on their interests, experties, and desired career paths. 

## Preamble

We study cosmology, astrophysics, and fundamental physics through observations of the microwave sky. The physical processes that took place in the first epochs in the history of our universe have left an imprint in a 2.7-Kelvin blackbody radiation field that permeates our universe, known as the [cosmic microwave background](https://en.wikipedia.org/wiki/Cosmic_microwave_background) (CMB). During the last 50 years, by carefully observing this radiation with increasingly sensitive instruments, we have succeeded in extracting intricate cosmic detail and established a remarkably successful model of the universe.

There are lots of great introductions to the field, here is one example: [How Ancient Light Reveals the Universe’s Contents](https://www.quantamagazine.org/how-ancient-light-reveals-the-universes-contents-20200128/) 

Future experiments mapping the CMB are designed to revolutionize our understanding of the infant universe, the standard model of particle physics, structure formation, and the nature of dark matter. A key effort involves constraining or detecting the energy scale of cosmic inflation.  A detection would mark a watershed moment in cosmology and high-energy physics, but in order to push constraints significantly past current limits, we need a dramatic change in instrument characterization capabilities — the primary focus of CMBeam.

Motivated by these fundamental science themes, our research group is engaged in multiple experimental collaborations, including [Taurus](https://icasu.illinois.edu/news/Taurus), the [Simons Observatory](https://en.wikipedia.org/wiki/Simons_Observatory), and the [LiteBIRD satellite](https://www.isas.jaxa.jp/en/missions/spacecraft/future/litebird.html):

{{< figure src="team-cryostat.jpeg" alt="Members of the group viewed through the cryostat" caption="Building instruments to explore the Universe: members of the group viewed through the opening of our cryogenic testing facility." >}}

## Optical calibration and cryogenic testing

Through funding from the European Research Council, the Icelandic Research Council, and the University of Iceland (Háskóli Íslands or HÍ for short), we are setting up a new research infrastructure at HÍ. The infrastructure includes various coherent microwave sources in the 40-400 GHz frequency range, a custom anechoic chamber ([see post](/post/2023_anechoic_chamber)), some robotic arms ([see arXiv:2407.04805](https://arxiv.org/abs/2407.04805)) , a vector network analyzer, and a custom cryostat that accommdates small to medium-size refractor telescopes ([see arXiv:2407.04613](https://arxiv.org/abs/2407.04613)) and reimaging optics. This new lab is being devloped with current and future-generation CMB experiments in mind, including CMB experiments such as the balloon-borne experiment Taurus and the LiteBIRD satellite. These CMB experiments give rise to multiple projects in design and testing of novel optical components.

## Exploring the universe with microwave light

The cosmic microwave background (CMB) is the oldest light we can observe directly. Its temperature and polarization reveal information about the early universe, cosmic structure, and the matter and energy that shape cosmic evolution.

Measuring its faint polarization signals requires detailed knowledge of the instruments observing them. Small errors in telescope beams, polarization response, or frequency calibration can distort the signals we hope to measure.

Our work addresses these challenges through contributions to the Simons Observatory, Taurus, LiteBIRD, and SPIDER, alongside a complementary programme searching for axion dark matter.

## Skuggsjá: robotic microwave measurements

Skuggsjá is our experimental base at the University of Iceland. The lab combines an anechoic chamber, cryogenic hardware, coherent microwave instrumentation, a vector network analyzer, and six-axis robotic positioning.

Our robotic measurement systems map both the amplitude and phase of electromagnetic fields. These measurements let us reconstruct beam propagation and investigate optical alignment, aberrations, polarization, and unwanted responses beyond the main beam.

{{< figure src="robot-lab.jpeg" alt="Researchers aligning a robotic microwave measurement system in an anechoic chamber" caption="Preparing the robotic microwave measurement system inside Skuggsjá’s anechoic chamber." >}}

We are extending these methods to characterize transmission, reflection, and scattering from materials and optical assemblies. This work combines instrumentation, robot control, calibration, electromagnetic modelling, and software development.

Read more in our [robotic beam-mapping paper](https://arxiv.org/abs/2407.04805).

## CMBeam: cryogenic optical testing

The ERC-funded CMBeam project develops techniques for characterizing microwave telescopes at cryogenic temperatures. Many CMB instruments operate only a few degrees above absolute zero, making measurements under representative conditions essential.

Together with Icelandic company Héðinn, we are developing a large cryostat for testing of optical components and refractor telescope assemblies. The system incorporates radiation shields at 40 K and 4 K and will support our aspirations to develop cryogenic holography.

{{< figure src="cryostat-welding.jpeg" alt="A welder works on the cryostat vacuum vessel" caption="Fabrication of the cryostat vacuum vessel at Héðinn, combining local engineering expertise with the requirements of precision microwave experiments." >}}

The project involves thermal and mechanical modelling, vacuum engineering, radiation shielding, thermometry, and integration with our optical measurement systems. Our [CryoSim work](https://arxiv.org/abs/2407.04613) provides a framework for studying the thermal and mechanical performance of these facilities.

## Taurus: optics for a balloon-borne observatory

Our group leads the optics design effort for Taurus, a NASA-funded balloon experiment studying the polarized microwave sky.

Supported by the Icelandic Research Fund, our work covers wide-field refracting telescopes operating across multiple frequency bands. We investigate image quality, beam shape, polarization response, optical efficiency, and performance across the focal plane.

The project connects optical design and physical-optics simulations with material characterization and preparation for cryogenic validation.

{{< figure src="optical-alignment.jpg" alt="An optical assembly being aligned using visible laser references" caption="Precision optical alignment at Skuggsjá. Visible laser references help establish the geometry of a microwave measurement setup." >}}

## Simons Observatory: calibration and optical systematics

Our contributions to the Simons Observatory focus on understanding telescope response and its impact on scientific measurements. This includes optical modelling, beam characterization, polarization effects, and frequency-dependent calibration.

A telescope’s beam changes with frequency, and its response extends beyond the bright central region. We develop models and analysis methods that connect these instrumental details to sky-map reconstruction and cosmological interpretation.

Our work spans the Small and Large Aperture Telescopes and draws on laboratory measurements, electromagnetic simulations, and collaboration-wide calibration efforts.

## Simulations: connecting optics to sky maps

How does an imperfect telescope change our view of the microwave sky? We address this question by combining realistic optical models with simulations of astronomical observations.

Our work includes the development and application of [beamconv](https://github.com/AdriJD/beamconv), which simulates observations of the polarized sky using detailed telescope beams. These calculations help us understand how optical asymmetries, unwanted polarization response, and radiation entering away from the main beam affect scientific results.

## Broadband microwave absorbers

Microwave instruments need materials that absorb unwanted radiation before it reaches the detectors. These materials must perform across broad frequency ranges while meeting practical requirements for fabrication, installation, and cryogenic use.

We develop structured absorbers using electromagnetic simulations, material measurements, and prototype fabrication. Recent work examines how surface geometry, feature size, and material properties influence reflection, scattering, and total absorption.

{{< figure src="absorber-measurement.jpeg" alt="Microwave measurement components with a structured absorber in the background" caption="Microwave measurement hardware and a structured absorber sample. Laboratory characterization complements our numerical studies of material and component performance." >}}

A key finding is that low reflection in one direction does not necessarily imply high total absorption: radiation may instead be scattered elsewhere. This motivates our combined programme of simulations and measurements over a wider range of angles.

Read more in our [broadband absorber study](https://arxiv.org/abs/2511.05309).

## ALPHA: searching for axion dark matter

We also participate in ALPHA, an international effort to develop a plasma haloscope for detecting axion dark matter.

The experiment uses a tunable electromagnetic structure inside a strong magnetic field to search for a weak microwave signal produced by axion conversion. It combines resonator design, microwave measurements, cryogenics, and low-noise detection.

Jón is a founding member and spokesperson of the ALPHA collaboration. Our involvement connects the group’s microwave expertise with a complementary approach to investigating the unseen universe.

## Working with us

Our projects offer opportunities in experimental physics, optical and mechanical design, scientific computing, materials research, and data analysis. Students can pursue hands-on laboratory development, computational investigations, or projects combining both.

We shape student projects around individual interests, experience, and learning goals. To discuss a project, explore a collaboration, or visit Skuggsjá, please [get in touch](/contact/).
