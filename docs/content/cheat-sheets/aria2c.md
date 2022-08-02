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

# To download a file:

# The url can be a http(s), ftp, .torrent file or even a magnet link

aria2c <url>

# To prevent downloading the .torrent file:

aria2c --follow-torrent=mem <url>

# Download 1 file at a time (-j)

# continuing (-c) any partially downloaded ones

# to the directory specified (-d)

# reading urls from the file (-i)

aria2c -j 1 -c -d ~/Downloads -i /path/to/file
