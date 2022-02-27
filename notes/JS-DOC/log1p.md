# Math.log1p()

The `Math.log1p()` function returns the natural logarithm (base [`e`](e)) of 1 + a number, that is

∀*x* &gt;  − 1, `Math.log1p` ` (``x``) ` = ln (1 + *x*)

## Syntax

    Math.log1p(x)

### Parameters

`x`  
A number.

### Return value

The natural logarithm (base [`e`](e)) of **1** plus the given number. If the number is less than **-1**, [`NaN`](../nan) is returned.

## Description

For very small values of _x_, adding 1 can reduce or eliminate precision. The double floats used in JS give you about 15 digits of precision. 1 + 1e-15 = 1.000000000000001, but 1 + 1e-16 = 1.000000000000000 and therefore exactly 1.0 in that arithmetic, because digits past 15 are rounded off.

When you calculate log(1 + x), you should get an answer very close to x, if x is small (that's why these are called 'natural' logarithms). If you calculate Math.log(1 + 1.1111111111e-15) you should get an answer close to 1.1111111111e-15. Instead, you will end up taking the logarithm of 1.00000000000000111022 (the roundoff is in binary so sometimes it gets ugly), so you get the answer 1.11022...e-15, with only 3 correct digits. If, instead, you calculate Math.log1p(1.1111111111e-15) you will get a much more accurate answer 1.1111111110999995e-15 with 15 correct digits of precision (actually 16 in this case).

If the value of `x` is less than -1, the return value is always [`NaN`](../nan).

Because `log1p()` is a static method of `Math`, you always use it as `Math.log1p()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using `Math.log1p()`

    Math.log1p(1);  // 0.6931471805599453
    Math.log1p(0);  // 0
    Math.log1p(-1); // -Infinity
    Math.log1p(-2); // NaN

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.log1p">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.log1p</span></a></td></tr></tbody></table>

`log1p`

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
-   [`Math.expm1()`](expm1)
-   [`Math.log10()`](log10)
-   [`Math.log2()`](log2)
-   [`Math.pow()`](pow)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p</a>
