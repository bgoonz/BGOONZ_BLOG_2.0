---
title: Dev Dependencies
sections: []
seo:
    title: Dependencies
    description: >+
        install an npm package using npm install you are installing it as a
        dependency. (npm install --production) to avoid installing those development
        dependencies.

    robots: []
    extra:
        - name: 'og:image'
          value: images/react2.jpg
          keyName: property
          relativeUrl: true
        - name: 'og:description'
          value: >+
              install an npm package using npm install you are installing it as a
              dependency. (npm install --production) to avoid installing those
              development dependencies.

          keyName: property
          relativeUrl: false
        - name: 'og:type'
          value: website
          keyName: property
          relativeUrl: false
        - name: 'twitter:image'
          value: images/browserify-25532eef.png
          keyName: property
          relativeUrl: true
        - name: 'twitter:card'
          value: summary_large_image
          keyName: name
          relativeUrl: false
        - name: 'og:title'
          value: Dev Dependencies
          keyName: property
          relativeUrl: false
    type: stackbit_page_meta
template: docs
---

When you install an npm package using `npm install <package-name>`, you are installing it as a **dependency**.

The package is automatically listed in the package.json file, under the `dependencies` list (as of npm 5: before you had to manually specify `--save`).

When you add the `-D` flag, or `--save-dev`, you are installing it as a development dependency, which adds it to the `devDependencies` list.

Development dependencies are intended as development-only packages, that are unneeded in production. For example testing packages, webpack or Babel.

When you go in production, if you type `npm install` and the folder contains a `package.json` file, they are installed, as npm assumes this is a development deploy.

You need to set the `--production` flag (`npm install --production`) to avoid installing those development dependencies.
