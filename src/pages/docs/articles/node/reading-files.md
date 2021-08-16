---
title: Reading Files
excerpt: >-
  Web-Dev-Hubis a Unibit theme created for project documentations. You can use
  it for your project.
seo:
  title: Reading files
  description: >-
    The simplest way to read a file in Node.js is to use the fs.readFile()
    method, passing it the file path, encoding and a callback function that will
    be called 
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Reading files
      keyName: property
    - name: 'og:description'
      value: This is the Reading files page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Reading files
    - name: 'twitter:description'
      value: This is the Reading files page
template: docs
---

The simplest way to read a file in Node.js is to use the `fs.readFile()` method, passing it the file path, encoding and a callback function that will be called with the file data (and the error):

```js
const fs = require('fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

Alternatively, you can use the synchronous version `fs.readFileSync()`:

```js
const fs = require('fs');

try {
    const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
```

Both `fs.readFile()` and `fs.readFileSync()` read the full content of the file in memory before returning the data.

This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

In this case, a better option is to read the file content using streams.
