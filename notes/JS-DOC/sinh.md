# Math.sinh()

The `Math.sinh()` function returns the hyperbolic sine of a number, that can be expressed using the [constant e](e):

$$\\mathtt{\\operatorname{Math.sinh(x)}} = \\frac{e^{x} - e^{- x}}{2}$$

## Syntax

    Math.sinh(x)

### Parameters

`x`  
A number.

### Return value

The hyperbolic sine of the given number.

## Description

Because `sinh()` is a static method of `Math`, you always use it as `Math.sinh()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Polyfill

This can be emulated with the help of the [`Math.exp()`](exp) function:

    Math.sinh = Math.sinh || function(x) {
      return (Math.exp(x) - Math.exp(-x)) / 2;
    }

or using only one call to the [`Math.exp()`](exp) function:

    Math.sinh = Math.sinh || function(x) {
      var y = Math.exp(x);
      return (y - 1 / y) / 2;
    }

## Examples

### Using Math.sinh()

    Math.sinh(0); // 0
    Math.sinh(1); // 1.1752011936438014

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.sinh">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.sinh</span></a></td></tr></tbody></table>

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

`sinh`

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
-   [`Math.cosh()`](cosh)
-   [`Math.tanh()`](tanh)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh</a>
