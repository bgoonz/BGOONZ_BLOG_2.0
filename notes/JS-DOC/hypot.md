# Math.hypot()

The `Math.hypot()` function returns the square root of the sum of squares of its arguments, that is:

$$\\mathtt{\\operatorname{Math.hypot}(v\_{1},v\_{2},\\ldots,v\_{n})} = \\sqrt{\\sum\\limits\_{i = 1}^{n}v\_{i}^{2}} = \\sqrt{v\_{1}^{2} + v\_{2}^{2} + \\ldots + v\_{n}^{2}}$$

## Syntax

    Math.hypot()
    Math.hypot(value0)
    Math.hypot(value0, value1)
    Math.hypot(value0, value1, ... , valueN)

### Parameters

`value1, value2, ...`  
Numbers.

### Return value

The square root of the sum of squares of the given arguments. If at least one of the arguments cannot be converted to a number, [`NaN`](../nan) is returned.

## Description

Calculating the hypotenuse of a right triangle, or the magnitude of a complex number, uses the formula `Math.sqrt(v1*v1 + v2*v2)`, where v1 and v2 are the lengths of the triangle's legs, or the complex number's real and complex components. The corresponding distance in 2 or more dimensions can be calculated by adding more squares under the square root: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

This function makes this calculation easier and faster; you call `Math.hypot(v1, v2)` , or `Math.hypot(v1, v2, v3, v4, ...)`.

`Math.hypot` also avoids overflow/underflow problems if the magnitude of your numbers is very large. The largest number you can represent in JS is `Number.MAX_VALUE`, which is around 10<sup>308</sup>. If your numbers are larger than about 10<sup>154</sup>, taking the square of them will result in Infinity. For example, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. If you use `hypot()` instead, you get better answer: `Math.hypot(1e200, 1e200) = 1.4142...e+200` . This is also true with very small numbers. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, but `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

Because `hypot()` is a static method of `Math`, you always use it as `Math.hypot()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If no arguments are given, the result is +0. If any of the arguments is ±Infinity, the result is Infinity. If any of the arguments is NaN (unless another argument is ±Infinity), the result is NaN. If at least one of the arguments cannot be converted to a number, the result is [`NaN`](../nan).

With one argument, `Math.hypot()` is equivalent to `Math.abs()`.

## Examples

### Using Math.hypot()

    Math.hypot(3, 4);          // 5
    Math.hypot(3, 4, 5);       // 7.0710678118654755
    Math.hypot();              // 0
    Math.hypot(NaN);           // NaN
    Math.hypot(NaN, Infinity); // Infinity
    Math.hypot(3, 4, 'foo');   // NaN, since +'foo' => NaN
    Math.hypot(3, 4, '5');     // 7.0710678118654755, +'5' => 5
    Math.hypot(-3);            // 3, the same as Math.abs(-3)

## Polyfill

A naive approach that does not handle overflow/underflow issues:

    if (!Math.hypot) Math.hypot = function() {
      var y = 0, i = arguments.length, containsInfinity = false;
      while (i--) {
        var arg = arguments[i];
        if (arg === Infinity || arg === -Infinity)
          containsInfinity = true
        y += arg * arg
      }
      return containsInfinity ? Infinity : Math.sqrt(y)
    }

A polyfill that avoids underflows and overflows:

    if (!Math.hypot) Math.hypot = function () {
      var max = 0;
      var s = 0;
      var containsInfinity = false;
      for (var i = 0; i < arguments.length; ++i) {
        var arg = Math.abs(Number(arguments[i]));
        if (arg === Infinity)
          containsInfinity = true
        if (arg > max) {
          s *= (max / arg) * (max / arg);
          max = arg;
        }
        s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
      }
      return containsInfinity ? Infinity : (max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s));
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.hypot">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.hypot</span></a></td></tr></tbody></table>

`hypot`

38

12

27

No

25

8

38

38

27

25

8

3.0

## See also

-   [`Math.abs()`](abs)
-   [`Math.pow()`](pow)
-   [`Math.sqrt()`](sqrt)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot</a>
