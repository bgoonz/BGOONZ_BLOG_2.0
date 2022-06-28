---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

---

syntax: bash
tags: [networking]

---

# To show statistics for the selected interface:

ethtool -S <interface>

# To show interface permanent address:

ethotool -P <interface>

# To set interface speed:

ethtool -s <interface> [ speed %d ]

# To set interface autonegotiation:

ethtool -s <interface> [ autoneg on|off ]

# To get interface errors:

ethtool -S <interface> | grep error
