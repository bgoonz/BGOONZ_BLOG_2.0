# Number.isSafeInteger()

The `Number.isSafeInteger()` method determines whether the provided value is a number that is a safe integer.

A safe integer is an integer that

-   can be exactly represented as an IEEE-754 double precision number, and
-   whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.

For example, `253 - 1` is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode. In contrast, `253` is _not_ a safe integer: it can be exactly represented in IEEE-754, but the integer `253 + 1` can't be directly represented in IEEE-754 but instead rounds to `253` under round-to-nearest and round-to-zero rounding. The safe integers consist of all integers from `-(253 - 1)` inclusive to `253 - 1` inclusive (± `9007199254740991` or ± 9,007,199,254,740,991).

Handling values larger or smaller than ~9 quadrillion with full precision requires using an [arbitrary precision arithmetic library](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic). See [What Every Programmer Needs to Know about Floating Point Arithmetic](https://floating-point-gui.de/) for more information on floating point representations of numbers.

For larger integers, consider using the [`BigInt`](../bigint) type.

## Syntax

    Number.isSafeInteger(testValue)

### Parameters

`testValue`  
The value to be tested for being a safe integer.

### Return value

A [`Boolean`](../boolean) indicating whether or not the given value is a number that is a safe integer.

## Polyfill

    Number.isSafeInteger = Number.isSafeInteger || function (value) {
       return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
    };

## Examples

### Using isSafeInteger

    Number.isSafeInteger(3);                    // true
    Number.isSafeInteger(Math.pow(2, 53));      // false
    Number.isSafeInteger(Math.pow(2, 53) - 1);  // true
    Number.isSafeInteger(NaN);                  // false
    Number.isSafeInteger(Infinity);             // false
    Number.isSafeInteger('3');                  // false
    Number.isSafeInteger(3.1);                  // false
    Number.isSafeInteger(3.0);                  // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.issafeinteger">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.issafeinteger</span></a></td></tr></tbody></table>

`isSafeInteger`

34

12

32

No

21

10

≤37

34

32

21

10

2.0

## See also

-   The [`Number`](../number) object it belongs to.
-   [`Number.MIN_SAFE_INTEGER`](min_safe_integer)
-   [`Number.MAX_SAFE_INTEGER`](max_safe_integer)
-   [`BigInt`](../bigint)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger</a>
