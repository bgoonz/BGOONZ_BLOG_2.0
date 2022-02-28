# Math.log2()

The `Math.log2()` function returns the base 2 logarithm of a number, that is

∀*x* &gt; 0, `Math.log2` ` (``x``) ` = log<sub>2</sub>(_x_) = the unique *y* such that 2<sup>_y_</sup> = *x*

## Syntax

    Math.log2(x)

### Parameters

`x`  
A number.

### Return value

The base 2 logarithm of the given number. If the number is negative, [`NaN`](../nan) is returned.

## Description

If the value of `x` is less than 0, the return value is always [`NaN`](../nan).

Because `log2()` is a static method of `Math`, you always use it as `Math.log2()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

This function is the equivalent of Math.log(x) / Math.log(2). For log2(e) use the constant [`Math.LOG2E`](log2e) which is 1 / [`Math.LN2`](ln2).

## Polyfill

This Polyfill emulates the `Math.log2` function. Note that it returns imprecise values on some inputs (like 1 &lt;&lt; 29), wrap into [`Math.round()`](round) if working with bit masks.

    if (!Math.log2) Math.log2 = function(x) {
      return Math.log(x) * Math.LOG2E;
    };

## Examples

### Using Math.log2()

    Math.log2(3);    // 1.584962500721156
    Math.log2(2);    // 1
    Math.log2(1);    // 0
    Math.log2(0);    // -Infinity
    Math.log2(-2);   // NaN
    Math.log2(1024); // 10

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.log2">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.log2</span></a></td></tr></tbody></table>

`log2`

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
-   [`Math.log10()`](log10)
-   [`Math.log1p()`](log1p)
-   [`Math.pow()`](pow)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2</a>
