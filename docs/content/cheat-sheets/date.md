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

## tags: [date, time]

# To print the date in a format suitable for affixing to file names:

date +"%Y%m%d\_%H%M%S"

# To convert a Unix timestamp to Date (Linux)

date -d @1440359821

# To convert a Unix timestamp to Date (OSX)

date -r 1440359821

# To list UTC time

date -u

# Show the time on the west coast of the US (use tzselect(1) to find TZ)

TZ='America/Los_Angeles' date
