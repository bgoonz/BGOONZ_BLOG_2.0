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

title: DOM Range
category: JavaScript

intro: |
Quick reference to the HTML [DOM createRange API](https://devdocs.io/dom/range).

---

## Reference

{:.-three-column}

### Creating ranges

```js
var range = document.createRange();
```

See: <https://devdocs.io/dom/document/createrange>

## Methods

```js
range
    .setStart(startNode, startOffset)
    .setEnd(endNode, endOffset)

    .setStartBefore(node)
    .setStartAfter(node)
    .setEndBefore(node)
    .setEndAfter(node)

    .selectNode(node)
    .selectNodeContents(node);
```

See: <https://devdocs.io/dom/range>

### Collapsing

```js
range.collapse(); // to end (a single point)
range.collapse(true); // to start (a single point)
range.collapsed; // true | false
```

### Operations

```js
range.cloneContents(); // copy => DocumentFragment
range.extractContents(); // cut  => DocumentFragment
range.deleteContents(); // delete
```

```js
range.insertNode(node);
```

### String

```js
range.toString();
```

### Read-only attributes

```js
range.collapsed; //       => true/false
range.startContainer; //  => Node
range.startOffset;
range.endContainer; //    => Node
range.endOffset;
range.commonAncestorContainer; // closest of start and end containers
```
