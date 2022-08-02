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

# To connect to a running Asterisk session:

asterisk -rvvv

# To issue a command to Asterisk from the shell:

asterisk -rx "<command>"

# To originate an echo call from a SIP trunk on an Asterisk server, to a specified number:

asterisk -rx "channel originate SIP/<trunk>/<number> application echo"

# To print out the details of SIP accounts:

asterisk -rx "sip show peers"

# To print out the passwords of SIP accounts:

asterisk -rx "sip show users"

# To print out the current active channels:

asterisk -rx "core show channels"
