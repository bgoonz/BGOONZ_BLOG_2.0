---
title: Variables
chapter: Variables
---
Variables are declared with the `var` keyword. JavaScript is
*dynamically typed* so every variable can hold a value of any data type.

Variables can be declared *without an initial value*.

Some example declarations:

```javascript
var foo;
var bar = 42;
var foo, bar, baz;
var foo = 42, bar = 'baz', z;
```

Variables that don't explicitly get assigned an initial value have the value 
`undefined`.

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2015**

Since ES2015, `let` and `const` can be used in addition to `var`. We will learn 
how they differ from `var` later. For now, lets have a look how `const` differs 
from `var` or `let`: `const` can be assigned a value only *once* (*const*ant).  
Reassigning a value will either throw an error (in strict mode, see below) or 
is silently ignored:

```js
const foo = 42;
foo = 21; // error or ignored
```

`const`s *must* be initialized with a value:

```js
const foo; // error
foo = 42;
```

</div>

---

## Variable names

Valid characters for variable names include [a wide range of *unicode 
characters*](http://mathiasbynens.be/notes/javascript-identifiers).
However, the name *must* start with a letter, `_` or `$`. Not doing so will 
result in a syntax error.

Examples:

```javascript
var π = 3.141;
var _foo = π;
var 0_bar = '...'; // Syntax error
```

---

## Variable access

Trying to *read* an *undeclared variable* results in a runtime error:

```javascript
var foo;
console.log(bar); // ReferenceError: bar is not defined.
```

However, *writing* to an undeclared variable is valid by default. It will
create an *implicit global variable* and should thus be avoided:

```javascript
function foo() {
  bar = 42;
}
foo();
console.log(bar); // no error
```

<div class="callout primary">

  If code runs in *[strict mode][]*, assigning to an undeclared variable throws 
  an *error*.

</div>

<div class="callout primary">

### Strict mode

[Strict mode][] is a mode of evaluating JavaScript that enforces stricter 
rules. It was introduced to "deprecate" certain patterns/behaviors that are 
considered bad or confusing.

Strict mode can be enabled for a JavaScript or a function by putting

```js
"use strict";
```

at the beginning of it.

</div>

[strict mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
