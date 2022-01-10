# Math.log10()

The `Math.log10()` function returns the base 10 logarithm of a number, that is

∀*x* &gt; 0, `Math.log10` ` (``x``) ` = log<sub>10</sub>(_x_) = the unique *y* such that 10<sup>_y_</sup> = *x*

## Syntax

    Math.log10(x)

### Parameters

`x`  
A number.

### Return value

The base 10 logarithm of the given number. If the number is negative, [`NaN`](../nan) is returned.

## Description

If the value of `x` is less than 0, the return value is always [`NaN`](../nan).

Because `log10()` is a static method of `Math`, you always use it as `Math.log10()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

This function is the equivalent of Math.log(x) / Math.log(10). For log10(e) use the constant [`Math.LOG10E`](log10e) which is 1 / [`Math.LN10`](ln10).

## Examples

### Using Math.log10()

    Math.log10(2);      // 0.3010299956639812
    Math.log10(1);      // 0
    Math.log10(0);      // -Infinity
    Math.log10(-2);     // NaN
    Math.log10(100000); // 5

## Polyfill

This can be emulated with the following function:

    Math.log10 = Math.log10 || function(x) {
      return Math.log(x) * Math.LOG10E;
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.log10">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.log10</span></a></td></tr></tbody></table>

`log10`

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

-   [`Math.exp()`](exp)
-   [`Math.log()`](log)
-   [`Math.log1p()`](log1p)
-   [`Math.log2()`](log2)
-   [`Math.pow()`](pow)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10</a>
