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

title: DOM Selection
category: JavaScript

intro: |
Quick introduction to the HTML [DOM selection API](https://devdocs.io/dom/selection).

---

## Reference

### Selection

```js
var sel = document.getSelection();
```

See: <https://devdocs.io/dom/selection>

### Methods

```js
sel.removeAllRanges(); //  deselects
sel.addRange(range); //    sets a selection
sel.removeRange(range); // remove a range
```

```js
sel.rangeCount;
sel.getRangeAt(0); // get the 0th range
```

### Collapsing

```js
sel.collapse(parent, offset);
sel.collapseToEnd();
sel.collapseToStart();
sel.isCollapsed;
```

```js
sel.containsNode(node);
```

### Deleting

```js
sel.deleteFromDocument();
```

### Events

```js
document.addEventListener('selectionchange', () => {});
```
