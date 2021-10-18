---
title: Node Export Module
weight: 1
excerpt: >-
    How to use the module.exports API to expose data to other files in your
    application, or to other applications as well
seo:
    title: 'module.exports API '
    description: |-
        When you want to import something you use

        const library = require('./library');
    robots: []
    extra:
        - name: 'og:image'
          value: images/cool-comet.png
          keyName: property
          relativeUrl: true
    type: stackbit_page_meta
template: docs
---

Node.js has a built-in module system.

A Node.js file can import functionality exposed by other Node.js files.

When you want to import something you use

to import the functionality exposed in the library.js file that resides in the current file folder.

In this file, functionality must be exposed before it can be imported by other files.

Any other object or variable defined in the file by default is private and not exposed to the outer world.

This is what the module.exports API offered by the [module system](https://nodejs.org/api/modules.html) allows us to do.

When you assign an object or a function as a new exports property, that is the thing that's being exposed, and as such, it can be imported in other parts of your app, or in other apps as well.

You can do so in 2 ways.

The first is to assign an object to module.exports, which is an object provided out of the box by the module system, and this will make your file export *just that object*:

The second way is to add the exported object as a property of exports. This way allows you to export multiple objects, functions or data:

or directly

And in the other file, you'll use it by referencing a property of your import:

or

What's the difference between module.exports and exports?

The first exposes the object it points to. The latter exposes *the properties* of the object it points to.
