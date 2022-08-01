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

## tags: [job, scheduler, periodic]

# set a shell

SHELL=/bin/bash

# set a PATH

PATH=/usr/bin:/usr/sbin:/usr/local/bin

# incorrect way of seeting PATH

PATH=$PATH:/do/not/do/this

# crontab format

-   -   -   -   -   command_to_execute

---

| | | | |
| | | | +- day of week (0 - 7) (where sunday is 0 and 7)
| | | +--- month (1 - 12)
| | +----- day (1 - 31)
| +------- hour (0 - 23)
+--------- minute (0 - 59)

# example entries

# every 15 min

_/15 _ \* \* \* /home/user/command.sh

# every midnight

0 0 \* \* \* /home/user/command.sh

# every Saturday at 8:05 AM

5 8 \* \* 6 /home/user/command.sh

# compute your crontab periodicity format online

https://crontab.guru/

# be careful with % sign (percent), it has special meaning, see https://crontab.guru/ for explanation

% signs must be escaped such as \%
