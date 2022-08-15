---
widget: slider
weight: 1
active: true
headless: true

design:
  # Slide height is automatic unless you force a specific height (e.g. '400px')
  slide_height: ''
  is_fullscreen: true
  # Automatically transition through slides?
  loop: false
  # Duration of transition between slides (in ms)
  interval: 2000

content:
  slides:
    - title: Cryogenic optics
      content: 'We design, build, and characterize novel optical system for millimetre-wave applications'
      align: center
      background:
        position: right
        color: '#666'
        brightness: 0.7
        media: 6inserts_rs2.jpg
    - title: Time-domain simulations
      content: 'We develop algorithms for time-domain simulations of optical non-idealities'
      align: left
      background:
        position: center
        color: '#555'
        brightness: 0.7
        media: so_sat_rs.jpg
    - title: World-Class Semiconductor Lab
      content: 'Just opened last month!'
      align: right
      background:
        position: center
        color: '#333'
        brightness: 0.5
        media: welcome.jpg
      link:
        icon: graduation-cap
        icon_pack: fas
        text: Join Us
        url: ../contact/
---
