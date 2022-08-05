---
title: 'Built-in objects: Arrays and functions'
---

## Arrays

Arrays are objects, which treat properties with numeric keys (i.e. `0`,
`1`, `2`, ...) in a special way. For all purposes, they behave like arrays in
other languages.

JavaScript has a special syntax for creating arrays, `[value, value, ...]`:

```javascript
var arr = [1, 2];
```

If you run `console.dir([1, 2])` in your browser's console, you can inspect the
structure of the array object in more detail.

Unlike "plain" objects, array objects have `Array.prototype` as prototype,
which provides all the array methods, such as `.push`, `.map`, etc.

:::ascii

```
┌──────────┐       [[Prototype]]        ┌──────────────────┐
│  obj {}  │───────────────────────────▶│ Object.prototype │
└──────────┘                            └──────────────────┘
                                                  ▲
                                                  │
                                            [[Prototype]]
                                                  │
┌──────────┐ [[Prototype]]  ┌─────────────────┐   │
│  arr []  │───────────────▶│ Array.prototype │───┘
└──────────┘                └─────────────────┘
```

:::

---

## Functions

Functions are the only kind of objects that are _callable_, and JavaScript
also has a special syntax for defining them:

```javascript
function foo() {
    console.log("I'm a function");
}
```

There are other ways to create functions, which will be explained later.

<div class="callout">

The most important implication of functions being objects is that "work" just
like any other value. Functions can be _passed to_ functions and _returned
from_ functions, allowing to creation of **higher-order functions**.

</div>

Similar to arrays, function objects also have a dedicated prototype,
`Function.prototype`:

:::ascii

```
┌──────────┐         [[Prototype]]          ┌──────────────────┐
│  obj {}  │───────────────────────────────▶│ Object.prototype │
└──────────┘                                └──────────────────┘
                                                ▲         ▲
                                                │         │
                                          [[Prototype]]   │
┌──────────┐ [[Prototype]]  ┌─────────────────┐ │         │
│  arr []  │───────────────▶│ Array.prototype │─┘         │
└──────────┘                └─────────────────┘     [[Prototype]]
                                                          │
                                                          │
┌──────────────────┐ [[Prototype]]  ┌──────────────────┐  │
│func function(){} │───────────────▶│Function.prototype│──┘
└──────────────────┘                └──────────────────┘
```

:::
