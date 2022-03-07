---
title: where-is-npm-pack
weight: 0
excerpt: How to find out where npm installs the packages
seo:
    title: npm packages
    description: "When you install a package using\_npm\_you can perform 2 types of installation:\na local install\na global install\n\nBy default, when you type an\_npm install\_command, like:\nthe package is installed in the current file tree, under the\_node_modules\_subfolder.\n"
    robots: []
    extra:
        - name: 'og:description'
          value: "When you install a package using\_npm\_you can perform 2 types of installation:\na local install\na global install\n\nBy default, when you type an\_npm install\_command, like:\nthe package is installed in the current file tree, under the\_node_modules\_subfolder.\n"
          keyName: property
          relativeUrl: false
    type: stackbit_page_meta
template: docs
---

When you install a package using npm you can perform 2 types of installation:

-   a local install

-   a global install

By default, when you type an npm install command, like:

the package is installed in the current file tree, under the node_modules subfolder.

As this happens, npm also adds the lodash entry in the dependencies property of the package.json file present in the current folder.

A global installation is performed using the -g flag:

When this happens, npm won't install the package under the local folder, but instead, it will use a global location.

Where, exactly?

The npm root -g command will tell you where that exact location is on your machine.

On macOS or Linux this location could be /usr/local/lib/node_modules. On Windows it could be C:\Users\YOU\AppData\Roaming\npm\node_modules

If you use nvm to manage Node.js versions, however, that location would differ.

I for example use nvm and my packages location was shown as /Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules.
