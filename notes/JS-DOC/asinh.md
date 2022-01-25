# Math.asinh()

The `Math.asinh()` function returns the hyperbolic arcsine of a number, that is

`Math.asinh` ` (``x``) ` = arsinh (_x_) = the unique *y* such that sinh (_y_) = *x*

## Syntax

    Math.asinh(x)

### Parameters

`x`  
A number.

### Return value

The hyperbolic arcsine of the given number.

## Description

Because `asinh()` is a static method of `Math`, you always use it as `Math.asinh()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.asinh()

    Math.asinh(1);  // 0.881373587019543
    Math.asinh(0);  // 0

## Polyfill

`Math.asinh` can be emulated with the following function:

    if (!Math.asinh) Math.asinh = function(x) {
        var absX = Math.abs(x), w
        if (absX < 3.725290298461914e-9) // |x| < 2^-28
            return x
        if (absX > 268435456) // |x| > 2^28
            w = Math.log(absX) + Math.LN2
        else if (absX > 2) // 2^28 >= |x| > 2
            w = Math.log(2 * absX + 1 / (Math.sqrt(x * x + 1) + absX))
        else
            var t = x * x, w = Math.log1p(absX + t / (1 + Math.sqrt(1 + t)))

        return x > 0 ? w : -w
    }

`Math.log1p` may also have to be polyfilled; see [Math.log1p](log1p) for details.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.asinh">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.asinh</span></a></td></tr></tbody></table>

`asinh`

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

-   [`Math.acosh()`](acosh)
-   [`Math.atanh()`](atanh)
-   [`Math.cosh()`](cosh)
-   [`Math.sinh()`](sinh)
-   [`Math.tanh()`](tanh)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh</a>
