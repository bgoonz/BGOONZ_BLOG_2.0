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

title: Browserify
category: JavaScript libraries

---

    browserify input.js
      -o output.js
      -t coffeeify
      -t [ coffeeify --extension coffee ]

      -u react (--exclude: omit a file)
      -x react (--external: reference in another bundle)
      -i react (--ignore: stub a file)
      -s Myapp (--standalone: generate a UMD bundle)
      --debug

### Programmatic usage

    browserify = require('browserify')
    browserify()
      .add('main.js')
      .bundle()
      .transform(coffeeify)
      .transform({extensions: '.coffee'}, coffeeify)
      .pipe(process.stdout)

    browserify({})

### Tools

-   watchify (recompiles on demand)
-   beefy (http server)
-   debowerify
-   es6ify (es6 to es5)

Transforms

-   coffeeify
-   ractify
-   reactify
-   brfs
-   cssify
-   https://github.com/substack/node-browserify/wiki/list-of-transforms
