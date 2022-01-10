# Math.trunc()

The `Math.trunc()` function returns the integer part of a number by removing any fractional digits.

## Syntax

    Math.trunc(x)

### Parameters

`x`  
A number.

### Return value

The integer part of the given number.

## Description

Unlike the other three `Math` methods: [`Math.floor()`](floor), [`Math.ceil()`](ceil) and [`Math.round()`](round), the way `Math.trunc()` works is very simple. It _truncates_ (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.

The argument passed to this method will be converted to number type implicitly.

Because `trunc()` is a static method of `Math`, you always use it as `Math.trunc()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.trunc()

    Math.trunc(13.37);    // 13
    Math.trunc(42.84);    // 42
    Math.trunc(0.123);    //  0
    Math.trunc(-0.123);   // -0
    Math.trunc('-1.123'); // -1
    Math.trunc(NaN);      // NaN
    Math.trunc('foo');    // NaN
    Math.trunc();         // NaN

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.trunc">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.trunc</span></a></td></tr></tbody></table>

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

`trunc`

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

-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/math.polyfill.js)
-   [`Math.abs()`](abs)
-   [`Math.ceil()`](ceil)
-   [`Math.floor()`](floor)
-   [`Math.round()`](round)
-   [`Math.sign()`](sign)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc</a>
