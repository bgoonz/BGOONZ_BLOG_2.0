# Number.MIN_SAFE_INTEGER

The `Number.MIN_SAFE_INTEGER` constant represents the minimum safe integer in JavaScript (`-(253 - 1)`).

To represent integers smaller than this, consider using [`BigInt`](../bigint).

Property attributes of `Number.MIN_SAFE_INTEGER`

Writable

no

Enumerable

no

Configurable

no

## Description

The `MIN_SAFE_INTEGER` constant has a value of `-9007199254740991` (-9,007,199,254,740,991 or about -9 quadrillion). The reasoning behind that number is that JavaScript uses [double-precision floating-point format numbers](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) as specified in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point) and can only safely represent numbers between `-(253 - 1)` and `253 - 1`. See [`Number.isSafeInteger()`](issafeinteger) for more information.

Because `MIN_SAFE_INTEGER` is a static property of [`Number`](../number), you always use it as `Number.MIN_SAFE_INTEGER`, rather than as a property of a [`Number`](../number) object you created.

## Examples

### Using MIN_SAFE_INTEGER

    Number.MIN_SAFE_INTEGER // -9007199254740991
    -(Math.pow(2, 53) - 1)  // -9007199254740991

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.min_safe_integer">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.min_safe_integer</span></a></td></tr></tbody></table>

`MIN_SAFE_INTEGER`

34

12

31

No

21

9

≤37

34

31

21

9

2.0

## See also

-   [`Number.MAX_SAFE_INTEGER`](max_safe_integer)
-   [`Number.isSafeInteger()`](issafeinteger)
-   [`BigInt`](../bigint)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER</a>
