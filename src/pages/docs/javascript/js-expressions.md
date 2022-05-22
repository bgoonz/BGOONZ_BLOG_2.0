---
title: Javascript Operators
weight: 0
excerpt: Javascript articles  and docs
seo:
    title: 'JavaScript Programming Language'
    description: 'Expressions & Statements'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

Like many C-like programming languages, most operators JavaScript are binary or
unary, and written in infix notation, i.e. `a op b`.

Here is list of typical operations:

- **[Assignment][]**: `a = b`, `a += b`, `a |= b`, and more
- 
- **[Arithmetic][]**: `a + b`, `a - b
- 
- **String concatenation:** `a + b`
- 
- **[Boolean][]:** `a && b`, `a || b`, `!a`
- 
- **[Bitwise][]:** `a & b`, `a | b`, `a ^ b`, `~a`, `a << b`, `a >> b`, `a >>> b`

- **Function calls**: `foo()`, `foo(a, b, c)`

- **Increment/Decrement**: `a++`, `++a`, `a--`, `--a`

- **[Conditional][]**: `foo ? bar : baz`

- Others: [`in`][in], [`instanceof`][instanceof], [`typeof`][typeof],
    [`new`][new]

JavaScript also has **comparison** operators and **property accessors**,
both of which are explained in more detail in the next slides.

<div class="callout secondary">

<i class="fa fa-info-circle" aria-hidden="true">
</i> **ES2016**

ES2016 introduces the _[exponentiation operator][pow]_:

```js
var result = 5 ** 2; // equivalent to Math.pow(5, 2)
```

</div>
