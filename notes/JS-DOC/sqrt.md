# Math.sqrt()

The `Math.sqrt()` function returns the square root of a number, that is

$$\\forall x \\geq 0,\\mathtt{Math.sqrt(x)} = \\sqrt{x} = \\text{the\\ unique}\\; y \\geq 0\\;\\text{such\\ that}\\; y^{2} = x$$

## Syntax

    Math.sqrt(x)

### Parameters

`x`  
A number.

### Return value

The square root of the given number. If the number is negative, [`NaN`](../nan) is returned.

## Description

If the value of `x` is negative, `Math.sqrt()` returns [`NaN`](../nan).

Because `sqrt()` is a static method of `Math`, you always use it as `Math.sqrt()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.sqrt()

    Math.sqrt(9); // 3
    Math.sqrt(2); // 1.414213562373095

    Math.sqrt(1);  // 1
    Math.sqrt(0);  // 0
    Math.sqrt(-1); // NaN
    Math.sqrt(-0); // -0

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.sqrt">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.sqrt</span></a></td></tr></tbody></table>

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

`sqrt`

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

-   [`Math.cbrt()`](cbrt)
-   [`Math.exp()`](exp)
-   [`Math.log()`](log)
-   [`Math.pow()`](pow)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt</a>
