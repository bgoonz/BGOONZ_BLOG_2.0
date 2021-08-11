# stackbit-medium-importer

A small library to convert [medium export](https://medium.com/me/export) zip files to static-site-generator (SSG) friendly Markdown files.

# Demo

The Medium importer can be seen in action on the [Stackbit website](https://www.stackbit.com/medium).

# Install

```
npm install @stackbit/stackbit-medium-importer
```

# How to use

The module comes with a utility to invoke the importer directly.

```
$ medium-importer
Usage: medium-importer --input-file=<input-file> --output-dir=<output-dir> --concurrency=<concurrency> --download-images=<download-images> --import-drafts=<import-drafts>

Options:
  --help                 Show help  [boolean]
  --version              Show version number  [boolean]
  --input-file, -i       medium export zip file  [required]
  --output-dir, -o       target folder for the converted files  [required]
  --concurrency, -c      number of posts to process in parallel [default: 1]
  --download-images, -d  should images be downloaded [default: true]
  --import-drafts, -r    should drafts be imported [default: true]

Examples:
  medium-importer -i medium-export.zip -o output/
  ```

# Importer output

The output directory is populated with the imported data, following a structure that makes it straightforward to later use with an SSG. For certain SSG's (like Hugo) it's possible to point the utility directly at your project.

The output directories can be configured when working with the library directly.

### `content/posts`

Markdown pages representing imported Medium posts.

```yaml
---
template: post
title: My Blog Post
date: 2018-10-08T15:01:02.452Z
subtitle: >-
  This post is a posty post, and this is its subtitle.
excerpt: >-
  An excerpt of the post
thumb_img_path: >-
  images/My-Blog-Post/image.jpeg
content_img_path: >-
  images/My-Blog-Post/splash.jpeg
---

# My Post

Markdown content goes **HERE**
```

### `static/images`

* Per-post images organized in directories with the post's slug.
* Global images extracted from the Medium export: `avatar.png` if available.


### `data/data.json`

Extraced information in `JSON` format:

```json
{
  "author": {
    "name": "My Name",
    "email": "email@example.com",
    "avatar": "images/avatar.png"
  },
  "social": {
    "twitter": {
      "username": "@myuser",
      "url": "https://twitter.com/@myuser"
    }
  }
```

