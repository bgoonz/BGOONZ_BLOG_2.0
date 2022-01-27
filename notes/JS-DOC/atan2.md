# Math.atan2()

The `Math.atan2()` function returns the angle in the plane (in radians) between the positive x-axis and the ray from (0,0) to the point (x,y), for `Math.atan2(y,x)`.

## Syntax

    Math.atan2(y, x)

### Parameters

`y`  
The y coordinate of the point.

`x`  
The x coordinate of the point

### Return value

The angle in radians (in \[ − *π*, *π*\]) between the positive x-axis and the ray from (0,0) to the point (x,y).

## Description

The `Math.atan2()` method returns a numeric value between -π and π representing the angle theta of an `(x, y)` point. This is the counterclockwise angle, measured in radians, between the positive X axis, and the point `(x, y)`. Note that the arguments to this function pass the y-coordinate first and the x-coordinate second.

<img src="data:image/png;base64,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" alt="A simple diagram showing the angle returned by atan2(y, x)" width="300" height="300" />

`Math.atan2()` is passed separate `x` and `y` arguments, and `Math.atan()` is passed the ratio of those two arguments.

Because `atan2()` is a static method of `Math`, you always use it as `Math.atan2()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.atan2()

    Math.atan2(90, 15); // 1.4056476493802699
    Math.atan2(15, 90); // 0.16514867741462683

    Math.atan2(±0, -0);               // ±PI.
    Math.atan2(±0, +0);               // ±0.
    Math.atan2(±0, -x);               // ±PI for x > 0.
    Math.atan2(±0, x);                // ±0 for x > 0.
    Math.atan2(-y, ±0);               // -PI/2 for y > 0.
    Math.atan2(y, ±0);                // PI/2 for y > 0.
    Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
    Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
    Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
    Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
    Math.atan2(±Infinity, +Infinity); // ±PI/4.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.atan2">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.atan2</span></a></td></tr></tbody></table>

`atan2`

1

12

1

4

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
-   [`Math.cos()`](cos)
-   [`Math.sin()`](sin)
-   [`Math.tan()`](tan)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2</a>
