# Math.cos()

The `Math.cos()` static function returns the [cosine](https://en.wikipedia.org/wiki/Cosine) of the specified angle, which must be specified in [radians](https://en.wikipedia.org/wiki/Radians).

## Syntax

    Math.cos(x)

### Parameters

`x`  
The angle in radians for which to return the cosine.

### Return value

The cosine of the given number.

## Description

The `Math.cos()` method returns a numeric value between -1 and 1, which represents the cosine of the angle.

Because `cos()` is a static method of `Math`, you always use it as `Math.cos()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.cos()

    Math.cos(0);           // 1
    Math.cos(1);           // 0.5403023058681398

    Math.cos(Math.PI);     // -1
    Math.cos(2 * Math.PI); // 1

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.cos">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.cos</span></a></td></tr></tbody></table>

`cos`

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
-   [`Math.asin()`](asin)
-   [`Math.atan()`](atan)
-   [`Math.atan2()`](atan2)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos</a>
