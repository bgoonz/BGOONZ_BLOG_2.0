---
title: Prototypes (1)
---

You may have heard that JavaScript is a _"[prototype-based
language][prototype]"_, unlike other languages, such as Java, which are
_"[class-based languages][class]"_.

## What exactly is a prototype?

In short: A prototype is just another object. If an object `A` has this special
connection to object `B`, then we say that "`B` is the prototype of `A`".

In addition to having "external" properties that can be accessed from code,
objects also have _internal/private_ properties/state. These cannot be accessed
from code and their concrete implementation depends on the JavaScript engine.

Every object has an _internal_ property `[[Prototype]]` (internal properties
are usually denoted with `[[...]]` around the name). This property points to
another object.

:::ascii

```
┌───────────────────────┐       ┌────────────────────────┐
│           A           │       │           B            │
├───────────────┬───────┤       ├───────────────┬────────┤
│ name          │ "Tom" │   ┌──▶│ toString      │ <func> │
├───────────────┼───────┤   │   ├───────────────┼────────┤
│ [[Prototype]] │   ◆───┼───┘   │ [[Prototype]] │  null  │
└───────────────┴───────┘       └───────────────┴────────┘
```

:::

Multiple objects can have the same prototype.

:::ascii

```
┌───────────────────────┐       ┌────────────────────────┐
│           A           │       │           B            │
├───────────────┬───────┤       ├───────────────┬────────┤
│ name          │ "Tom" │   ┌──▶│ toString      │ <func> │
├───────────────┼───────┤   │   ├───────────────┼────────┤
│ [[Prototype]] │   ◆───┼───┘   │ [[Prototype]] │  null  │
└───────────────┴───────┘       └───────────────┴────────┘
                                             ▲
┌───────────────────────┐                    │
│           C           │                    │
├───────────────┬───────┤                    │
│ time          │ "day" │                    │
├───────────────┼───────┤                    │
│ [[Prototype]] │   ◆───┼────────────────────┘
└───────────────┴───────┘
```

:::

Since a prototype is an object, it might itself have a prototype, which may have
a prototype, and so forth.

:::ascii

```
┌───────────────────┐
│         A         │
├───────────────┬───┤
│ [[Prototype]] │ ◆─┼────┐
└───────────────┴───┘    │
                         ▼
               ┌───────────────────┐
               │         B         │
               ├───────────────┬───┤
               │ [[Prototype]] │ ◆─┼────┐
               └───────────────┴───┘    │
                                        ▼
                              ┌───────────────────┐
                              │         C         │
                              ├───────────────┬───┤
                              │ [[Prototype]] │ ◆─│─ ─ ─ ▷
                              └───────────────┴───┘
```

:::

This is called the _prototype chain_. Almost all objects have the same object
at the end of the prototype chain, which doesn't have a prototype itself.

An object created using literal notation will have the object
`Object.prototype` as its prototype. You can verify this using the following
commands:

```js
var testObject = {};
Object.getPrototypeOf(testObject) === Object.prototype; // true
```

:::ascii

```
                            ┌────────────────────────┐
┌───────────────────┐       │    Object.prototype    │
│    testObject     │       ├───────────────┬────────┤
├───────────────┬───┤       │ toString      │ <func> │
│ [[Prototype]] │ ◆─┼──────▶├───────────────┼────────┤
└───────────────┴───┘       │ hasOwnProperty│ <func> │
                            ├───────────────┼────────┤
                            │ [[Prototype]] │  null  │
                            └───────────────┴────────┘
```

:::

In order to create an object with an object other than `Object.prototype` as
prototype, one can use [`Object.create`][object.create]:

```js
var a = {};
var b = Object.create(a);
Object.getPrototypeOf(b) === a; // true
```

[prototype]: https://en.wikipedia.org/wiki/Prototype-based_programming
[class]: https://en.wikipedia.org/wiki/Class-based_programming
[object.create]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
