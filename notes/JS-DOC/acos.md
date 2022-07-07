# Math.acos()

The `Math.acos()` function returns the arccosine (in radians) of a number, that is

∀*x* ∈ \[ − 1; 1\], `Math.acos` ` (``x``) ` = arccos (_x_) = the unique *y* ∈ \[0; *π*\] such that cos (_y_) = *x*

## Syntax

    Math.acos(x)

### Parameters

`x`  
A number representing a cosine, where `x` is between `-1` and `1`.

### Return value

The arccosine (angle in radians) of the given number if it's between `-1` and `1`; otherwise, [`NaN`](../nan).

## Description

The `Math.acos()` method returns a numeric value between 0 and π radians for `x` between -1 and 1. If the value of `x` is outside this range, it returns [`NaN`](../nan).

Because `acos()` is a static method of `Math`, you always use it as `Math.acos()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.acos()

    Math.acos(-2);  // NaN
    Math.acos(-1);  // 3.141592653589793
    Math.acos(0);   // 1.5707963267948966
    Math.acos(0.5); // 1.0471975511965979
    Math.acos(1);   // 0
    Math.acos(2);   // NaN

For values less than -1 or greater than 1, `Math.acos()` returns [`NaN`](../nan).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.acos">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.acos</span></a></td></tr></tbody></table>

`acos`

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

-   [`Math.asin()`](asin)
-   [`Math.atan()`](atan)
-   [`Math.atan2()`](atan2)
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos</a>
