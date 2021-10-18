---
title: Closures
---

[Wikipedia describes closures as][closures]:

> In programming languages, a closure (also lexical closure or function closure)
> is a function or reference to a function together with a referencing environment
> — a table storing a reference to each of the non-local variables (also called
> free variables or upvalues) of that function.

According to this definition, **every** function in JavaScript is a
closure, because [every function has an (internal) reference to the
environment][functions] it was created in. The simplest example is:

```javascript
var foo = 42;

function bar() {
    console.log(foo);
}
```

Here the function `bar` has access to `foo`, which is defined outside of it.

<div class="callout warning">

**Important**: The value of a free variable is determined when the
function is **executed**, not when the function is
_defined_. Read the previous sentence three times to make sure you really
understand what it implies.

</div>

[closures]: http://en.wikipedia.org/wiki/Closure_%28computer_programming%29
[functions]: http://www.ecma-international.org/ecma-262/5.1/#sec-13
