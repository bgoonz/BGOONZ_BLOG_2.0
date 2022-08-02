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

# To estimate the number and the size of all mails on youremail@gmail.com

gyb --email youremail@gmail.com --action estimate

# To backup from youremail@gmail.com to your local-folder

gyb --email youremail@gmail.com --action backup --local-folder "~/MyLocalFolder/"

# To backup from youremail@gmail.com only important or starred emails to the

# default local folder GYB-GMail-Backup-youremail@gmail.com

gyb --email youremail@gmail.com --search "is:important OR is:starred"

# To restore from your local-folder to youremail@gmail.com

gyb --email youremail@gmail.com --action restore --local-folder "~/MyLocalFolder/"
