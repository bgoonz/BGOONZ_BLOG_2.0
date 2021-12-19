---
title: NaN
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
NaN (Not-a-Number) is the only JavaScript value not equal to itself when comparing with any of the comparison operators. NaN is often the result of meaningless or invalid math computations, so it doesn't make sense for two NaN values to be considered equal.

> x = Math.sqrt(-1); // NaN
>

> const y = 0 / 0;         // NaN
>

> x === y;                 // false
> x === NaN;               // false
>

> Number.isNaN(x);         // true
>

> Number.isNaN(y);         // true
>

> isNaN(x);                // true
>

> isNan('hello');          // true

```
```

You can check for NaN values using the Number.isNaN() function. Note that this is different from the original , global isNaN(). Their difference lies in the fact that isNaN() forcefully converts its argument to a number, whereas Number.isNaN() doesn't. This is why Number.isNaN() is considered more robust and preferable in most cases.
