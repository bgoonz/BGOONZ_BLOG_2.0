# Math.asin()

The `Math.asin()` function returns the arcsine (in radians) of a number, that is

$$\\forall x \\in \\lbrack{- 1};1\\rbrack,\\;\\mathtt{\\operatorname{Math.asin}(x)} = \\arcsin(x) = \\text{the\\ unique}\\; y \\in \\left\\lbrack {- \\frac{\\pi}{2};\\frac{\\pi}{2}} \\right\\rbrack\\,\\text{such\\ that}\\;\\sin(y) = x$$

## Syntax

    Math.asin(x)

### Parameters

`x`  
A number.

### Return value

The arcsine (in radians) of the given number if it's between **-1** and **1**; otherwise, [`NaN`](../nan).

## Description

The `Math.asin()` method returns a numeric value between $- \\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$ radians for x between -1 and 1. If the value of x is outside this range, it returns [`NaN`](../nan).

Because `asin()` is a static method of `Math`, you always use it as `Math.asin()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.asin()

    Math.asin(-2);  // NaN
    Math.asin(-1);  // -1.5707963267948966 (-pi/2)
    Math.asin(0);   // 0
    Math.asin(0.5); // 0.5235987755982989
    Math.asin(1);   // 1.5707963267948966 (pi/2)
    Math.asin(2);   // NaN

For values less than -1 or greater than 1, `Math.asin()` returns [`NaN`](../nan).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.asin">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.asin</span></a></td></tr></tbody></table>

`asin`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Math.acos()`](acos)
-   [`Math.atan()`](atan)
-   [`Math.atan2()`](atan2)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin</a>
