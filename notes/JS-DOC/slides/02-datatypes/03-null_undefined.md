---
title: null and undefined
---

JavaScript has two data types to express the **absence of a value**, null and
undefined.

**null** has the only value `null` and **undefined** has the only value
`undefined`.

The difference between those two is subtle and is best explained by how to use
them:

-   `undefined` is the value JavaScript itself uses to indicate the absence of a
    value.
-   `null` is the value the engineer should use to indicate the absence of a
    value.

Examples:

```javascript
var foo; // no value is assigned, foo has the value undefined
var bar = null; // bar is explicitly set to null
console.log(foo); // logs "undefined"
console.log(bar); // logs "null"
```

There are other native occurrence of `undefined` which we will mention later.

<div class="callout primary">

**Remember:** A variable that doesn't exist cannot be accessed at all (it will
throw a reference error). Instead of saying "the variable is undefined" we
rather say "the variable is not _declared_" to avoid confusion.

```js
var foo;
console.log(foo); // logs `undefined`
console.log(bar); // reference error
```

</div>
