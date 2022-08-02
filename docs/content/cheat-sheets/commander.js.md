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

title: Commander.js
category: JavaScript libraries

---

### Initialize

    var cli = require('commander');

### Options

    cli
      .version(require('../package').version)
      .usage('[options] <command>')
      .option('-w, --words <n>', 'generate <n> words')
      .option('-i, --interval <n>', 'interval [1000]', 1000)
      .option('-s, --symbols', 'include symbols')
      .parse(process.argv);

### Help

    .on('--help', function() {
      console.log('');
    })

### Commands

    cli.outputHelp();
    cli.args == ["hello"];

### Other useful things

    process.exit(0);
