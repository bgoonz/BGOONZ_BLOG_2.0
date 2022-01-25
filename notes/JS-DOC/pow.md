# Math.pow()

The `Math.pow()` function returns the `base` to the `exponent` power, as in `baseexponent`.

## Syntax

    Math.pow(base, exponent)

### Parameters

`base`  
The base number.

`exponent`  
The exponent used to raise the `base`.

### Return value

A number representing the given base taken to the power of the given exponent.

## Description

The `Math.pow()` function returns the `base` to the `exponent` power, as in `baseexponent`, the `base` and the `exponent` are in decimal numeral system.

Because `pow()` is a static method of `Math`, use it as `Math.pow()`, rather than as a method of a `Math` object you created. (`Math` has no constructor.) If the base is negative and the exponent is not an integer, the result is NaN.

## Examples

### Using Math.pow()

    // simple
    Math.pow(7, 2);    // 49
    Math.pow(7, 3);    // 343
    Math.pow(2, 10);   // 1024
    // fractional exponents
    Math.pow(4, 0.5);  // 2 (square root of 4)
    Math.pow(8, 1/3);  // 2 (cube root of 8)
    Math.pow(2, 0.5);  // 1.4142135623730951 (square root of 2)
    Math.pow(2, 1/3);  // 1.2599210498948732 (cube root of 2)
    // signed exponents
    Math.pow(7, -2);   // 0.02040816326530612 (1/49)
    Math.pow(8, -1/3); // 0.5
    // signed bases
    Math.pow(-7, 2);   // 49 (squares are positive)
    Math.pow(-7, 3);   // -343 (cubes can be negative)
    Math.pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
    // due to "even" and "odd" roots laying close to each other,
    // and limits in the floating number precision,
    // negative bases with fractional exponents always return NaN
    Math.pow(-7, 1/3); // NaN

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.pow">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.pow</span></a></td></tr></tbody></table>

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

`pow`

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

-   [`Math.cbrt()`](cbrt)
-   [`Math.exp()`](exp)
-   [`Math.log()`](log)
-   [`Math.sqrt()`](sqrt)
-   [Exponentiation operator](../../operators/exponentiation)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow</a>
