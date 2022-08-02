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

# apparmor will protect a system by confining programs to a limited set of resources.

# To activate a profile:

sudo aa-enforce usr.bin.firefox

# or

export _PROFILE_='usr.bin.firefox' sudo $(rm /etc/apparmor.d/disable/$_PROFILE_ ; cat /etc/apparmor.d/$_PROFILE_ | apparmor_parser -a )

# To disable a profile:

sudo aa-disable usr.bin.firefox

# or

export _PROFILE_='usr.bin.firefox' sudo $(ln -s /etc/apparmor.d/$_PROFILE_ /etc/apparmor.d/disable/ && apparmor*parser -R /etc/apparmor.d/$\_PROFILE*)

# To list profiles loaded:

sudo aa-status

# or

sudo apparmor_status

# List of available profiles: /etc/apparmor.d/
