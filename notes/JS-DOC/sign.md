# Math.sign()

The `Math.sign()` function returns either a **positive** or **negative** +/- 1, indicating the sign of a number passed into the argument. If the number passed into `Math.sign()` is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will **not** be returned.

## Syntax

    Math.sign(x)

### Parameters

`x`  
A number. If this argument is not a `number`, it is implicitly converted to one.

### Return value

A number representing the sign of the given argument:

-   If the argument is positive, returns `1`.
-   If the argument is negative, returns `-1`.
-   If the argument is positive zero, returns `0`.
-   If the argument is negative zero, returns `-0`.
-   Otherwise, [`NaN`](../nan) is returned.

## Description

Because `sign()` is a static method of `Math`, you always use it as `Math.sign()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.sign()

    Math.sign(3);     //  1
    Math.sign(-3);    // -1
    Math.sign('-3');  // -1
    Math.sign(0);     //  0
    Math.sign(-0);    // -0
    Math.sign(NaN);   // NaN
    Math.sign('foo'); // NaN
    Math.sign();      // NaN

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.sign">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.sign</span></a></td></tr></tbody></table>

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

`sign`

38

12

25

No

25

9

38

38

25

25

9

3.0

## See also

-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js)
-   [`Math.abs()`](abs)
-   [`Math.ceil()`](ceil)
-   [`Math.floor()`](floor)
-   [`Math.round()`](round)
-   [`Math.trunc()`](trunc)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign</a>
