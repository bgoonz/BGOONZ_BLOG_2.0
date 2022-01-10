# Math.tanh()

The `Math.tanh()` function returns the hyperbolic tangent of a number, that is

$$\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^{x} - e^{- x}}{e^{x} + e^{- x}} = \\frac{e^{2x} - 1}{e^{2x} + 1}$$

## Syntax

    Math.tanh(x)

### Parameters

`x`  
A number.

### Return value

The hyperbolic tangent of the given number.

## Description

Because `tanh()` is a static method of `Math`, you always use it as `Math.tanh()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Polyfill

This can be emulated with the help of the [`Math.exp()`](exp) function:

    Math.tanh = Math.tanh || function(x){
        var a = Math.exp(+x), b = Math.exp(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
    }

## Examples

### Using Math.tanh()

    Math.tanh(0);        // 0
    Math.tanh(Infinity); // 1
    Math.tanh(1);        // 0.7615941559557649

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.tanh">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.tanh</span></a></td></tr></tbody></table>

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

`tanh`

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
-   [`Math.sinh()`](sinh)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh</a>
