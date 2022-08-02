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

# To view the differences between two files:

diff -u <file-1> <file-2>

# To view the differences between two directories:

diff -ur <dir-1> <dir-2>

# To ignore whitespace:

diff -ub <file-1> <file-2>

# To ignore blank lines:

diff -uB <file-1> <file-2>

# To ignore the differences between uppercase and lowercase:

diff -ui <file-1> <file-2>

# To report whether the files differ:

diff -q <file-1> <file-2>

# To report whether the files are identical:

diff -s <file-1> <file-2>

# To diff the output of two commands or scripts:

diff <(command1) <(command2)

# To generate a patch file from two files:

diff -Naur <file-1> <file-2> > <patch-file>
