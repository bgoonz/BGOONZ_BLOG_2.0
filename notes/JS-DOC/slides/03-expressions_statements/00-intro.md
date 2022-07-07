---
title: Operators
chapter: Expressions & Statements
---

Like many C-like programming languages, most operators JavaScript are binary or
unary, and written in infix notation, i.e. `a op b`.

Here is list of typical operations:

-   **[Assignment][]**: `a = b`, `a += b`, `a |= b`, and more

-   **[Arithmetic][]**: `a + b`, `a - b`, `a * b`, `a / b`, `a % b`, `+a`, `-a`

-   **String concatenation:** `a + b`

-   **[Boolean][]:** `a && b`, `a || b`, `!a`

-   **[Bitwise][]:** `a & b`, `a | b`, `a ^ b`, `~a`, `a << b`, `a >> b`, `a >>> b`

-   **Function calls**: `foo()`, `foo(a, b, c)`

-   **Increment/Decrement**: `a++`, `++a`, `a--`, `--a`

-   **[Conditional][]**: `foo ? bar : baz`

-   Others: [`in`][in], [`instanceof`][instanceof], [`typeof`][typeof],
    [`new`][new]

JavaScript also has **comparison** operators and **property accessors**,
both of which are explained in more detail in the next slides.

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true"></i> **ES2016**

ES2016 introduces the _[exponentiation operator][pow]_:

```js
var result = 5 ** 2; // equivalent to Math.pow(5, 2)
```

</div>

[assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators
[arithmetic]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
[bitwise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
[conditional]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
[in]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
[instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[typeof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
[new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
