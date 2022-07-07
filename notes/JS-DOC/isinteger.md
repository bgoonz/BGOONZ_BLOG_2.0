# Number.isInteger()

The `Number.isInteger()` method determines whether the passed value is an integer.

## Syntax

    Number.isInteger(value)

### Parameters

`value`  
The value to be tested for being an integer.

### Return value

A [`Boolean`](../boolean) indicating whether or not the given value is an integer.

## Description

If the target value is an integer, return `true`, otherwise return `false`. If the value is [`NaN`](../nan) or [`Infinity`](../infinity), return `false`. The method will also return `true` for floating point numbers that can be represented as integer.

## Examples

### Using isInteger

    Number.isInteger(0);         // true
    Number.isInteger(1);         // true
    Number.isInteger(-100000);   // true
    Number.isInteger(99999999999999999999999); // true

    Number.isInteger(0.1);       // false
    Number.isInteger(Math.PI);   // false

    Number.isInteger(NaN);       // false
    Number.isInteger(Infinity);  // false
    Number.isInteger(-Infinity); // false
    Number.isInteger('10');      // false
    Number.isInteger(true);      // false
    Number.isInteger(false);     // false
    Number.isInteger([1]);       // false

    Number.isInteger(5.0);       // true
    Number.isInteger(5.000000000000001); // false
    Number.isInteger(5.0000000000000001); // true

## Polyfill

    Number.isInteger = Number.isInteger || function(value) {
      return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.isinteger">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.isinteger</span></a></td></tr></tbody></table>

`isInteger`

34

12

16

No

21

9

≤37

34

16

21

9

2.0

## See also

-   The [`Number`](../number) object it belongs to.

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger</a>
