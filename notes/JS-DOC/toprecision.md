# Number.prototype.toPrecision()

The `toPrecision()` method returns a string representing the [`Number`](../number) object to the specified precision.

## Syntax

    toPrecision()
    toPrecision(precision)

### Parameters

`precision` <span class="badge inline optional">Optional</span>  
An integer specifying the number of significant digits.

### Return value

A string representing a [`Number`](../number) object in fixed-point or exponential notation rounded to `precision` significant digits. See the discussion of rounding in the description of the [`Number.prototype.toFixed()`](tofixed) method, which also applies to `toPrecision()`.

If the `precision` argument is omitted, behaves as [`Number.prototype.toString()`](tostring). If the `precision` argument is a non-integer value, it is rounded to the nearest integer.

### Exceptions

[`RangeError`](../rangeerror)  
If `precision` is not between `1` and `100` (inclusive), a [`RangeError`](../rangeerror) is thrown. Implementations are allowed to support larger and smaller values as well. ECMA-262 only requires a precision of up to 21 significant digits.

## Examples

### Using `toPrecision`

    let numObj = 5.123456

    console.log(numObj.toPrecision())    // logs '5.123456'
    console.log(numObj.toPrecision(5))   // logs '5.1235'
    console.log(numObj.toPrecision(2))   // logs '5.1'
    console.log(numObj.toPrecision(1))   // logs '5'

    numObj = 0.000123

    console.log(numObj.toPrecision())    // logs '0.000123'
    console.log(numObj.toPrecision(5))   // logs '0.00012300'
    console.log(numObj.toPrecision(2))   // logs '0.00012'
    console.log(numObj.toPrecision(1))   // logs '0.0001'

    // note that exponential notation might be returned in some circumstances
    console.log((1234.5).toPrecision(2)) // logs '1.2e+3'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.prototype.toprecision">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.prototype.toprecision</span></a></td></tr></tbody></table>

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

`toPrecision`

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
-   [`Number.prototype.toExponential()`](toexponential)
-   [`Number.prototype.toString()`](tostring)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision</a>
