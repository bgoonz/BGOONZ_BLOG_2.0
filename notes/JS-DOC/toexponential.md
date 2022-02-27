# Number.prototype.toExponential()

The `toExponential()` method returns a string representing the [`Number`](../number) object in exponential notation.

## Syntax

    toExponential()
    toExponential(fractionDigits)

### Parameters

`fractionDigits` <span class="badge inline optional">Optional</span>  
Optional. An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.

### Return value

A string representing the given [`Number`](../number) object in exponential notation with one digit before the decimal point, rounded to `fractionDigits` digits after the decimal point.

### Exceptions

[`RangeError`](../rangeerror)  
If `fractionDigits` is too small or too large. Values between `0` and `100`, inclusive, will not cause a [`RangeError`](../rangeerror).

[`TypeError`](../typeerror)  
If this method is invoked on an object that is not a [`Number`](../number).

## Description

If the `fractionDigits` argument is omitted, the number of digits after the decimal point defaults to the number of digits necessary to represent the value uniquely.

If you use the `toExponential()` method for a numeric literal and the numeric literal has no exponent and no decimal point, leave whitespace(s) before the dot that precedes the method call to prevent the dot from being interpreted as a decimal point.

If a number has more digits than requested by the `fractionDigits` parameter, the number is rounded to the nearest number represented by `fractionDigits` digits. See the discussion of rounding in the description of the [`toFixed()`](tofixed) method, which also applies to `toExponential()`.

## Examples

### Using toExponential

    var numObj = 77.1234;

    console.log(numObj.toExponential());  // logs 7.71234e+1
    console.log(numObj.toExponential(4)); // logs 7.7123e+1
    console.log(numObj.toExponential(2)); // logs 7.71e+1
    console.log(77.1234.toExponential()); // logs 7.71234e+1
    console.log(77 .toExponential());     // logs 7.7e+1

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.prototype.toexponential">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.prototype.toexponential</span></a></td></tr></tbody></table>

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

`toExponential`

1

12

1

5.5

7

2

1

18

4

10.1

1

1.0

## See also

-   [`Number.prototype.toFixed()`](tofixed)
-   [`Number.prototype.toPrecision()`](toprecision)
-   [`Number.prototype.toString()`](tostring)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential</a>
