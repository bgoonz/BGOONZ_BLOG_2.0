---
title: Ubuntu Commands
subtitle: packaging
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

## tags: []

# To find packages matching <phrase>:

apt search <phrase>

# To show information on a package:

apt show <package>

# To fetch package list:

apt update

# To download and install updates without installing new package:

apt upgrade

# To download and install the updates AND install new necessary packages:

apt dist-upgrade

# To perform a full system upgrade:

apt update && apt dist-upgrade

# To install package(s):

apt install <package>...

# To uninstall package(s):

apt remove <package>...
