# Math.log()

The `Math.log()` function returns the natural logarithm (base [`e`](e)) of a number, that is

∀*x* &gt; 0, `Math.log` ` (``x``) ` = ln (_x_) = the unique *y* such that *e*<sup>_y_</sup> = *x*

The JavaScript `Math.log()` function is equivalent to _ln(x)_ in mathematics.

## Syntax

    Math.log(x)

### Parameters

`x`  
A number.

### Return value

The natural logarithm (base [`e`](e)) of the given number. If the number is negative, [`NaN`](../nan) is returned.

## Description

If the value of `x` is 0, the return value is always [`-Infinity`](../number/negative_infinity).

If the value of `x` is negative, the return value is always [`NaN`](../nan).

Because `log()` is a static method of `Math`, you always use it as `Math.log()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If you need the natural log of 2 or 10, use the constants [`Math.LN2`](ln2) or [`Math.LN10`](ln10). If you need a logarithm to base 2 or 10, use [`Math.log2()`](log2) or [`Math.log10()`](log10). If you need a logarithm to other bases, use Math.log(x) / Math.log(otherBase) as in the example below; you might want to precalculate 1 / Math.log(otherBase).

## Examples

### Using Math.log()

    Math.log(-1); // NaN, out of range
    Math.log(0);  // -Infinity
    Math.log(1);  // 0
    Math.log(10); // 2.302585092994046

### Using Math.log() with a different base

The following function returns the logarithm of `y` with base `x` (ie. log<sub>_x_</sub>_y_):

    function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
    }

If you run `getBaseLog(10, 1000)` it returns `2.9999999999999996` due to floating-point rounding, which is very close to the actual answer of 3.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.log">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.log</span></a></td></tr></tbody></table>

`log`

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

-   [`Math.exp()`](exp)
-   [`Math.log1p()`](log1p)
-   [`Math.log10()`](log10)
-   [`Math.log2()`](log2)
-   [`Math.pow()`](pow)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log</a>
