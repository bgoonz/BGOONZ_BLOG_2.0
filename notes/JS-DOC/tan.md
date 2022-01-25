# Math.tan()

The `Math.tan()` function returns the tangent of a number.

## Syntax

    Math.tan(x)

### Parameters

`x`  
A number representing an angle in radians.

### Return value

The tangent of the given number.

## Description

The `Math.tan()` method returns a numeric value that represents the tangent of the angle.

Because `tan()` is a static method of `Math`, you always use it as `Math.tan()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.tan()

    Math.tan(1); // 1.5574077246549023

Because the `Math.tan()` function accepts radians, but it is often easier to work with degrees, the following function accepts a value in degrees, converts it to radians and returns the tangent.

    function getTanDeg(deg) {
      var rad = deg * Math.PI/180;
      return Math.tan(rad);
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.tan">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.tan</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`tan`

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
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan</a>
