---
title: Control structures
---

JavaScript provides the same control structures known from other C-like
languages:

-   `if (...) { ... } else if (...) { ... } else { ... }`

-   `while (...) { ... }` and `do { ... } while (...)`

-   `for (...; ...; ...) { ... }`

-   `switch (...) { case ...: ... }`

Additionally, JavaScript provides the `for...in` loop to iterate over properties
of objects:

```javascript
for (var prop in obj) {
    console.log(prop, obj[prop]);
}
```

`prop` is a variable containing the property _name_. You can use bracket
notation to access the property values.

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**

ES2015 introduces [`for/of`][forof] statements for iterating over
_[iterables][]_:

```js
var arr = [1, 2, 3];
for (var v of arr) {
    console.log(v);
}
// 1
// 2
// 3
```

</div>
