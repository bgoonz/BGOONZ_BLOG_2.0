---
title: Javascript Variables
weight: 0
excerpt: Variables can be declared without an initial value.
seo:
    title: 'Javascript Variables'
    description: 'variables in the javascript language'
    robots: []
    extra: []
template: docs
---


Variables are declared with the `var` keyword. JavaScript is
_dynamically typed_ so every variable can hold a value of any data type.

Variables can be declared without an initial value.

Some example declarations:

```js
//
var foo;
var bar = 42;
var foo, bar, baz;
var foo = 42,
    bar = 'baz',
    z;
```

Variables that don't explicitly get assigned an initial value have the value
`undefined`.

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true">
</i> **ES2015**

Since ES2015, `let` and `const` can be used in addition to `var`. We will learn
how they differ from `var` later. For now, lets have a look how `const` differs
from `var` or `let`: `const` can be assigned a value only _once_ (*const*ant).  
Reassigning a value will either throw an error (in strict mode, see below) or
is silently ignored:

```js
//
const foo = 42;
foo = 21; // error or ignored
```

`const`s _must_ be initialized with a value:

```js
//
const foo; // error
foo = 42;
```

</div>

---

## Variable names

Valid characters for variable names include [a wide range of _unicode
characters_](http://mathiasbynens.be/notes/javascript-identifiers).
However, the name _must_ start with a letter, `_` or `$`. Not doing so will
result in a syntax error.

Examples:

```js
//
var π = 3.141;
var _foo = π;
var 0_bar = '...'; // Syntax error
```

---

## Variable access

Trying to _read_ an _undeclared variable_ results in a runtime error:

```js
//
var foo;
console.log(bar); // ReferenceError: bar is not defined.
```

However, _writing_ to an undeclared variable is valid by default. It will
create an _implicit global variable_ and should thus be avoided:

---


```js
//


function foo() {
    bar = 42;
}
foo();
console.log(bar); // no error
```

<div class="callout primary">

If code runs in _[strict mode][]_, assigning to an undeclared variable throws
an _error_.

</div>

<div class="callout primary">

### Strict mode

[Strict mode][] is a mode of evaluating JavaScript that enforces stricter
rules. It was introduced to "deprecate" certain patterns/behaviors that are
considered bad or confusing.

Strict mode can be enabled for a JavaScript or a function by putting

```js
//
'use strict';
```

at the beginning of it.

</div>

[strict mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode

JavaScript has _6_ data types. Five of those are so called _primitive_ data
types:

- Boolean
- Number
- String
- Null
- Undefined

Everything else that is not a value of one of the above types is an

- Object

As we will see in the following slides, objects belong to different kinds of
"classes" of objects.

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true">
</i> **ES2015**

ES2015 introduces a 6th primitive data type: _[Symbol][]_. Symbols are _unique_
and _immutable_ values.

</div>
