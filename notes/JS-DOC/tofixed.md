# Number.prototype.toFixed()

The `toFixed()` method formats a number using fixed-point notation.

## Syntax

    toFixed()
    toFixed(digits)

### Parameters

`digits` <span class="badge inline optional">Optional</span>  
The number of digits to appear after the decimal point; this may be a value between `0` and `20`, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as `0`.

### Return value

A string representing the given number using fixed-point notation.

### Exceptions

[`RangeError`](../rangeerror)  
If `digits` is too small or too large. Values between `0` and `100`, inclusive, will not cause a [`RangeError`](../rangeerror). Implementations are allowed to support larger and smaller values as chosen.

[`TypeError`](../typeerror)  
If this method is invoked on an object that is not a [`Number`](../number).

## Description

`toFixed()` returns a string representation of `numObj` that does not use exponential notation and has exactly `digits` digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length. If the absolute value of `numObj` is greater or equal to `1e+21`, this method calls [`Number.prototype.toString()`](tostring) and returns a string in exponential notation.

**Warning:** Floating point numbers cannot represent all decimals precisely in binary. This can lead to unexpected results, such as `0.1 + 0.2 === 0.3` returning `false` .

## Examples

### Using toFixed

    let numObj = 12345.6789

    numObj.toFixed()       // Returns '12346': note rounding, no fractional part
    numObj.toFixed(1)      // Returns '12345.7': note rounding
    numObj.toFixed(6)      // Returns '12345.678900': note added zeros
    (1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
    (1.23e-10).toFixed(2)  // Returns '0.00'
    2.34.toFixed(1)        // Returns '2.3'
    2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
    2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
    -2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
    (-2.34).toFixed(1)     // Returns '-2.3'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.prototype.tofixed">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.prototype.tofixed</span></a></td></tr></tbody></table>

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

`toFixed`

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

-   [`Number.prototype.toExponential()`](toexponential)
-   [`Number.prototype.toPrecision()`](toprecision)
-   [`Number.prototype.toString()`](tostring)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed</a>
