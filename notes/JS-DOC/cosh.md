# Math.cosh()

The `Math.cosh()` function returns the hyperbolic cosine of a number, that can be expressed using the [constant e](e):

$$\\mathtt{\\operatorname{Math.cosh(x)}} = \\frac{e^{x} + e^{- x}}{2}$$

## Syntax

    Math.cosh(x)

### Parameters

`x`  
A number.

### Return value

The hyperbolic cosine of the given number.

## Description

Because `cosh()` is a static method of `Math`, you always use it as `Math.cosh()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.cosh()

    Math.cosh(0);  // 1
    Math.cosh(1);  // 1.5430806348152437
    Math.cosh(-1); // 1.5430806348152437

## Polyfill

This can be emulated with the help of the [`Math.exp()`](exp) function:

    Math.cosh = Math.cosh || function(x) {
      return (Math.exp(x) + Math.exp(-x)) / 2;
    }

or using only one call to the [`Math.exp()`](exp) function:

    Math.cosh = Math.cosh || function(x) {
      var y = Math.exp(x);
      return (y + 1 / y) / 2;
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.cosh">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.cosh</span></a></td></tr></tbody></table>

`cosh`

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
-   [`Math.asinh()`](asinh)
-   [`Math.atanh()`](atanh)
-   [`Math.sinh()`](sinh)
-   [`Math.tanh()`](tanh)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh</a>
