# Number.NEGATIVE_INFINITY

The `Number.NEGATIVE_INFINITY` property represents the negative Infinity value.

Property attributes of `Number.NEGATIVE_INFINITY`

Writable

no

Enumerable

no

Configurable

no

## Description

The value of `Number.NEGATIVE_INFINITY` is the same as the negative value of the global object's [`Infinity`](../infinity) property.

This value behaves slightly differently than mathematical infinity:

-   Any positive value, including [`POSITIVE_INFINITY`](positive_infinity), multiplied by `NEGATIVE_INFINITY` is `NEGATIVE_INFINITY`.
-   Any negative value, including `NEGATIVE_INFINITY`, multiplied by `NEGATIVE_INFINITY` is [`POSITIVE_INFINITY`](positive_infinity).
-   Any positive value divided by `NEGATIVE_INFINITY` is negative zero.
-   Any negative value divided by `NEGATIVE_INFINITY` is positive zero.
-   Zero multiplied by `NEGATIVE_INFINITY` is [`NaN`](../nan).
-   [`NaN`](../nan) multiplied by `NEGATIVE_INFINITY` is [`NaN`](../nan).
-   `NEGATIVE_INFINITY`, divided by any negative value except `NEGATIVE_INFINITY`, is [`POSITIVE_INFINITY`](positive_infinity).
-   `NEGATIVE_INFINITY`, divided by any positive value except [`POSITIVE_INFINITY`](positive_infinity), is `NEGATIVE_INFINITY`.
-   `NEGATIVE_INFINITY`, divided by either `NEGATIVE_INFINITY` or [`POSITIVE_INFINITY`](positive_infinity), is [`NaN`](../nan).

You might use the `Number.NEGATIVE_INFINITY` property to indicate an error condition that returns a finite number in case of success. Note, however, that [`isFinite`](../isfinite) would be more appropriate in such a case.

Because `NEGATIVE_INFINITY` is a static property of [`Number`](../number), you always use it as `Number.NEGATIVE_INFINITY`, rather than as a property of a [`Number`](../number) object you created.

## Examples

### Using NEGATIVE_INFINITY

In the following example, the variable `smallNumber` is assigned a value that is smaller than the minimum value. When the [`if`](../../statements/if...else) statement executes, `smallNumber` has the value `-Infinity`, so `smallNumber` is set to a more manageable value before continuing.

    var smallNumber = (-Number.MAX_VALUE) * 2;

    if (smallNumber === Number.NEGATIVE_INFINITY) {
      smallNumber = returnFinite();
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.negative_infinity">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.negative_infinity</span></a></td></tr></tbody></table>

`NEGATIVE_INFINITY`

1

12

1

4

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Number.POSITIVE_INFINITY`](positive_infinity)
-   [`Number.isFinite()`](isfinite)
-   [`Infinity`](../infinity)
-   [`isFinite()`](../isfinite)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY</a>
