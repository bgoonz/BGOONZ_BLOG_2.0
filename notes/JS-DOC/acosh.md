# Math.acosh()

The `Math.acosh()` function returns the hyperbolic arc-cosine of a number, that is

∀*x* ≥ 1, `Math.acosh` ` (``x``) ` = arcosh (_x_) = the unique *y* ≥ 0 such that cosh (_y_) = *x*

## Syntax

    Math.acosh(x)

### Parameters

`x`  
A number.

### Return value

The hyperbolic arc-cosine of the given number. If the number is less than **1**, [`NaN`](../nan).

## Description

Because `acosh()` is a static method of `Math`, you always use it as `Math.acosh()`, rather than as a method of a `Math` object you created (`Math` is no constructor).

## Examples

### Using Math.acosh()

    Math.acosh(-1);  // NaN
    Math.acosh(0);   // NaN
    Math.acosh(0.5); // NaN
    Math.acosh(1);   // 0
    Math.acosh(2);   // 1.3169578969248166

For values less than 1 `Math.acosh()` returns [`NaN`](../nan).

## Polyfill

For all *x* ≥ 1, we have $\\operatorname{arcosh}(x) = \\ln\\left( {x + \\sqrt{x^{2} - 1}} \\right)$ and so this can be emulated with the following function:

    Math.acosh = Math.acosh || function(x) {
      return Math.log(x + Math.sqrt(x * x - 1));
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.acosh">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.acosh</span></a></td></tr></tbody></table>

`acosh`

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

-   [`Math.asinh()`](asinh)
-   [`Math.atanh()`](atanh)
-   [`Math.cosh()`](cosh)
-   [`Math.sinh()`](sinh)
-   [`Math.tanh()`](tanh)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh</a>
