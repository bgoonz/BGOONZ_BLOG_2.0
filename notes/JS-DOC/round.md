# Math.round()

The `Math.round()` function returns the value of a number rounded to the nearest integer.

## Syntax

    Math.round(x)

### Parameters

`x`  
A number.

### Return value

The value of the given number rounded to the nearest integer.

## Description

If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. If it is less than 0.5, the argument is rounded to the integer with the lower absolute value. If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞. **Note that this differs from many languages' `round()` functions, which often round this case to the next integer _away from zero_**, instead giving a different result in the case of negative numbers with a fractional part of exactly 0.5.

Because `round()` is a static method of `Math`, you always use it as `Math.round()`, rather than as a method of a `Math` object you created (`Math` has no constructor).

## Examples

### Using round

    Math.round( 20.49); //  20
    Math.round( 20.5 ); //  21
    Math.round( 42   ); //  42
    Math.round(-20.5 ); // -20
    Math.round(-20.51); // -21

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-math.round">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-math.round</span></a></td></tr></tbody></table>

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

`round`

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

-   [`Number.toPrecision()`](../number/toprecision)
-   [`Number.toFixed()`](../number/tofixed)
-   [`Math.abs()`](abs)
-   [`Math.ceil()`](ceil)
-   [`Math.floor()`](floor)
-   [`Math.sign()`](sign)
-   [`Math.trunc()`](trunc)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round</a>
