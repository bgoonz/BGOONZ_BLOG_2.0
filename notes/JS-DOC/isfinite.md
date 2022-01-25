# Number.isFinite()

The `Number.isFinite()` method determines whether the passed value is a finite number — that is, it checks that the type of a given value is [`Number`](../number), and the number is neither positive [`Infinity`](../infinity), negative `Infinity`, nor [`NaN`](../nan).

## Syntax

    Number.isFinite(value)

### Parameters

`value`  
The value to be tested for finiteness.

### Return value

A [`Boolean`](../boolean) indicating whether or not the given value is a finite number.

## Description

In comparison to the global [`isFinite()`](../isfinite) function, this method doesn't first convert the parameter to a number. This means only values of the type number _and_ are finite return `true`.

## Examples

### Using isFinite

    Number.isFinite(Infinity);  // false
    Number.isFinite(NaN);       // false
    Number.isFinite(-Infinity); // false

    Number.isFinite(0);         // true
    Number.isFinite(2e64);      // true

    Number.isFinite('0');       // false, would've been true with
                                // global isFinite('0')
    Number.isFinite(null);      // false, would've been true with
                                // global isFinite(null)

## Polyfill

    if (Number.isFinite === undefined) Number.isFinite = function(value) {
        return typeof value === 'number' && isFinite(value);
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.isfinite">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.isfinite</span></a></td></tr></tbody></table>

`isFinite`

19

12

16

No

15

9

≤37

25

16

14

9

1.5

## See also

-   The [`Number`](../number) object it belongs to.
-   The global function [`isFinite`](../isfinite).

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite</a>
