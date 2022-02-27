# Math.expm1()

The `Math.expm1()` function returns `ex - 1`, where `x` is the argument, and [e](e) the base of the natural logarithms.

## Syntax

    Math.expm1(x)

### Parameters

`x`  
A number.

### Return value

A number representing `ex - 1`, where `e` is [Euler's number](e) and `x` is the argument.

## Description

Because `expm1()` is a static method of `Math`, you always use it as `Math.expm1()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.expm1()

    Math.expm1(-1); // -0.6321205588285577
    Math.expm1(0);  // 0
    Math.expm1(1);  // 1.718281828459045

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.expm1">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.expm1</span></a></td></tr></tbody></table>

`expm1`

38

12

25

No

25

8

38

38

25

25

8

3.0

## See also

-   [`Math.E`](e)
-   [`Math.exp()`](exp)
-   [`Math.log()`](log)
-   [`Math.log10()`](log10)
-   [`Math.log1p()`](log1p)
-   [`Math.log2()`](log2)
-   [`Math.pow()`](pow)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1</a>
