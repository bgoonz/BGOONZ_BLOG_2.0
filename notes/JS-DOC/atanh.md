# Math.atanh()

The `Math.atanh()` function returns the hyperbolic arctangent of a number, that is

∀*x* ∈ (−1,1), `Math.atanh` ` (``x``) ` = arctanh (_x_) = the unique *y* such that tanh (_y_) = *x*

## Syntax

    Math.atanh(x)

### Parameters

`x`  
A number.

### Return value

The hyperbolic arctangent of the given number.

## Description

Because `atanh()` is a static method of `Math`, you always use it as `Math.atanh()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.atanh()

    Math.atanh(-2);  // NaN
    Math.atanh(-1);  // -Infinity
    Math.atanh(0);   // 0
    Math.atanh(0.5); // 0.5493061443340548
    Math.atanh(1);   // Infinity
    Math.atanh(2);   // NaN

For values greater than 1 or less than -1, [`NaN`](../nan) is returned.

## Polyfill

For |_x_| &lt; 1, we have $\\operatorname{artanh}(x) = \\frac{1}{2}\\ln\\left( \\frac{1 + x}{1 - x} \\right)$ so this can be emulated by the following function:

    Math.atanh = Math.atanh || function(x) {
      return Math.log((1+x)/(1-x)) / 2;
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.atanh">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.atanh</span></a></td></tr></tbody></table>

`atanh`

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

-   [`Math.acosh()`](acosh)
-   [`Math.asinh()`](asinh)
-   [`Math.cosh()`](cosh)
-   [`Math.sinh()`](sinh)
-   [`Math.tanh()`](tanh)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh</a>
