# Math.PI

The `Math.PI` property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:

` M``a``t``h``.``P``I ` = *π* ≈ 3.14159

Property attributes of `Math.PI`

Writable

no

Enumerable

no

Configurable

no

## Description

Because `PI` is a static property of `Math`, you always use it as `Math.PI`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.PI

The following function uses `Math.PI` to calculate the circumference of a circle with a passed radius.

    function calculateCircumference(radius) {
      return Math.PI * (radius + radius);
    }

    calculateCircumference(1);  // 6.283185307179586

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.pi">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.pi</span></a></td></tr></tbody></table>

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

`PI`

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

-   [`Math`](../math)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI</a>
