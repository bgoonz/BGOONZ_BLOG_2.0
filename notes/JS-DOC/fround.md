# Math.fround()

The `Math.fround()` function returns the nearest [32-bit single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of a [`Number`](../number).

## Syntax

    Math.fround(doubleFloat)

### Parameters

`doubleFloat`  
A [`Number`](../number). If the parameter is of a different type, it will get converted to a number or to [`NaN`](../nan) if it cannot be converted.

### Return value

The nearest [32-bit single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of the given number.

## Description

JavaScript uses 64-bit double floating-point numbers internally, which offer a very high precision. However, sometimes you may be working with 32-bit floating-point numbers, for example if you are reading values from a [`Float32Array`](../float32array). This can create confusion: Checking a 64-bit float and a 32-bit float for equality may fail even though the numbers are seemingly identical.

To solve this, `Math.fround()` can be used to cast the 64-bit float to a 32-bit float. Internally, JavaScript continues to treat the number as a 64-bit float, it just performs a "round to even" on the 23rd bit of the mantissa, and sets all following mantissa bits to `0`. If the number is outside the range of a 32-bit float, [`Infinity`](../infinity) or `-Infinity` is returned.

Because `fround()` is a static method of `Math`, you always use it as `Math.fround()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.fround()

The number 1.5 can be precisely represented in the binary numeral system, and is identical in 32-bit and 64-bit:

    Math.fround(1.5); // 1.5
    Math.fround(1.5) === 1.5; // true

However, the number 1.337 cannot be precisely represented in the binary numeral system, so it differs in 32-bit and 64-bit:

    Math.fround(1.337); // 1.3370000123977661
    Math.fround(1.337) === 1.337; // false

2<sup>150</sup> is too big for a 32-bit float, so `Infinity` is returned:

    2 ** 150; // 1.42724769270596e+45
    Math.fround(2 ** 150); // Infinity

If the parameter cannot be converted to a number, or it is [not-a-number](https://en.wikipedia.org/wiki/NaN) (`NaN`), `Math.fround()` will return `NaN`:

    Math.fround('abc'); // NaN
    Math.fround(NaN); // NaN

## Polyfill

This can be emulated with the following function, if [`Float32Array`](../float32array) are supported:

    Math.fround = Math.fround || (function (array) {
      return function(x) {
        return array[0] = x, array[0];
      };
    })(new Float32Array(1));

Supporting older browsers is slower, but also possible:

    if (!Math.fround) Math.fround = function(arg) {
      arg = Number(arg);
      // Return early for ±0 and NaN.
      if (!arg) return arg;
      var sign = arg < 0 ? -1 : 1;
      if (sign < 0) arg = -arg;
      // Compute the exponent (8 bits, signed).
      var exp = Math.floor(Math.log(arg) / Math.LN2);
      var powexp = Math.pow(2, Math.max(-126, Math.min(exp, 127)));
      // Handle subnormals: leading digit is zero if exponent bits are all zero.
      var leading = exp < -127 ? 0 : 1;
      // Compute 23 bits of mantissa, inverted to round toward zero.
      var mantissa = Math.round((leading - arg / powexp) * 0x800000);
      if (mantissa <= -0x800000) return sign * Infinity;
      return sign * powexp * (leading - mantissa / 0x800000);
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.fround">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.fround</span></a></td></tr></tbody></table>

`fround`

38

12

26

No

25

8

38

38

26

25

8

3.0

## See also

-   [`Math.round()`](round)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround</a>
