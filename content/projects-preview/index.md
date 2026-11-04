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

Our research group at the University of Iceland develops instruments and measurement techniques to investigate the early Universe and the nature of dark matter. We combine experimental microwave optics, cryogenics, electromagnetic simulations, material development, and astronomical data analysis. We tailor project involvement for new members joining the group based on their interests, experties, and desired career paths. 

## Preamble

We study cosmology, astrophysics, and fundamental physics through observations of the microwave sky. The physical processes that took place in the first epochs in the history of our universe have left an imprint in a 2.7-Kelvin blackbody radiation field that permeates our Universe, known as the [cosmic microwave background](https://en.wikipedia.org/wiki/Cosmic_microwave_background) (CMB). During the last 50 years, by carefully observing this radiation with increasingly sensitive instruments, we have succeeded in extracting intricate cosmic detail and established a remarkably successful model of the universe.

There are lots of great introductions to the field, here is one example: [How Ancient Light Reveals the Universe’s Contents](https://www.quantamagazine.org/how-ancient-light-reveals-the-universes-contents-20200128/) 

Future experiments mapping the CMB are designed to revolutionize our understanding of the infant universe, the standard model of particle physics, structure formation, and the nature of dark matter. A key effort involves constraining or detecting the energy scale of cosmic inflation.  A detection would mark a watershed moment in cosmology and high-energy physics, but in order to push constraints significantly past current limits, our community needs to significantly improve instrument characterization capabilities. 

Motivated by these fundamental science themes, our research group is engaged in multiple experimental collaborations, including [Taurus](https://icasu.illinois.edu/news/Taurus), the [Simons Observatory](https://en.wikipedia.org/wiki/Simons_Observatory), the [LiteBIRD satellite](https://www.isas.jaxa.jp/en/missions/spacecraft/future/litebird.html), and a complementary programme searching for axion dark matter.

{{< figure src="team-cryostat.jpeg" alt="Members of the group viewed through the cryostat" caption="Building instruments to explore the Universe: members of the group viewed through the opening of our cryogenic testing facility." >}}

## Skuggsjá: Optical calibration and cryogenic testing

Through funding from the European Research Council, the Icelandic Research Council, and the University of Iceland (Háskóli Íslands or HÍ for short), we are setting up a new research infrastructure at HÍ. Skuggsjá is our experimental base at the University of Iceland. The lab combines an anechoic chamber, cryogenic hardware, coherent microwave instrumentation, a vector network analyzer, and six-axis robotic positioning.

The infrastructure includes various coherent microwave sources in the 40-400 GHz frequency range, a custom anechoic chamber ([see post](/post/2023_anechoic_chamber)), some robotic arms ([see arXiv:2407.04805](https://arxiv.org/abs/2407.04805)), a vector network analyzer, and a custom cryostat that accommdates small to medium-size refractor telescopes ([see arXiv:2407.04613](https://arxiv.org/abs/2407.04613)) and reimaging optics. This new lab is being devloped with current and future-generation CMB experiments in mind, including CMB experiments such as the balloon-borne experiment Taurus and the LiteBIRD satellite. These CMB experiments give rise to multiple projects in design and testing of novel optical components.

Read more in our [robotic beam-mapping paper](https://arxiv.org/abs/2407.04805).

{{< figure src="robot-lab.jpeg" alt="Researchers aligning a robotic microwave measurement system in an anechoic chamber" caption="Preparing the robotic microwave measurement system inside Skuggsjá’s anechoic chamber." >}}

## CMBeam: cryogenic optical testing

The ERC-funded CMBeam project (2022-2028) develops techniques for characterizing microwave telescopes at cryogenic temperatures. All CMB telescopes operate at cryogenic temperatures with some optical elements cooled to only a few degrees above absolute zero. Optical measurements under representative conditions are essential as a result.

Together with Icelandic company Héðinn, we have been building a large cryostat for testing of optical components and refractor telescope assemblies. The system incorporates radiation shields at 40 K and 4 K and will support our aspirations to develop cryogenic holography.

{{< figure src="cryostat-welding.jpeg" alt="A welder works on the cryostat vacuum vessel" caption="Fabrication of the cryostat vacuum vessel at Héðinn, combining local engineering expertise with the requirements of precision microwave experiments." >}}

The project involves thermal and mechanical modelling, vacuum engineering, radiation shielding, thermometry, and integration with our optical measurement systems. Our [CryoSim work](https://arxiv.org/abs/2407.04613) provides a framework for studying the thermal and mechanical performance of these facilities.

## Taurus: optics for a balloon-borne observatory

Supported by the Icelandic Research Fund, our group leads the optics design effort for Taurus, a NASA-funded balloon experiment studying the polarized microwave sky. We have designed three wide-field refracting telescopes operating across multiple frequency bands. We investigate image quality, beam shape, polarization response, optical efficiency, and performance across the focal plane.

The project connects optical design and physical-optics simulations with material characterization and preparation for cryogenic validation.

{{< figure src="optical-alignment.jpg" alt="An optical assembly being aligned using visible laser references" caption="Precision optical alignment at Skuggsjá. Visible laser references help verify the geometry of a microwave measurement setup." >}}

## Simons Observatory: calibration and optical systematics

Our recent contributions to the Simons Observatory focus on understanding telescope response and its impact on scientific measurements. This includes optical modelling, beam characterization, polarization effects, and frequency-dependent calibration.

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

We also participate in ALPHA, an international effort to develop a plasma haloscope for detecting axion dark matter. The experiment uses a tunable electromagnetic structure inside a strong magnetic field to search for a weak microwave signal produced by axion conversion. It combines resonator design, microwave measurements, cryogenics, and low-noise detection. Jón is a founding member and a former spokesperson of the ALPHA collaboration. 

## Working with us

Our projects offer opportunities in experimental physics, optical and mechanical design, scientific computing, materials research, and data science. Students can pursue hands-on laboratory development, computational investigations, or projects combining both. We shape student projects around individual interests, experience, and learning goals. To discuss a project, explore a collaboration, or visit Skuggsjá, please [get in touch](/contact/).
