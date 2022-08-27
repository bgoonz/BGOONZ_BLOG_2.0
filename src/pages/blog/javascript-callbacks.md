---
title: Javascript Callbacks
template: post
subtitle: Living in an Event-Driven World
date: 2022-08-25T12:34:34.555Z
image: /blog/nasa_earth_grid.jpg
thumb_image: /blog/nasa_earth_grid.jpg
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/awesome-lists.yaml
tags:
  - src/data/tags/about.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/embedding-media-in-html.md
  - src/pages/blog/event-handeling.md
cmseditable: true
---


# Javascript Callbacks: Living in an Event-Driven World

We've already looked at scopes and functions quite a bit and you've had a chance to play with callbacks already, but here we'll dig deeper. Events are everywhere in Javascript, and you almost always want to do something when the event has finished running (or if there's been an error). That's where the callback comes in.

## Points to Ponder

* What is a callback?
* What is the scope inside a callback?
* What is `this` in a callback?
* When is a callback called?
* What is `#setTimeout` useful for?
* Why are the return values of event listeners much less important than the callback(s) inside?