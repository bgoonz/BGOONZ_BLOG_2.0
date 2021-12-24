# Number.POSITIVE_INFINITY

The `Number.POSITIVE_INFINITY` property represents the positive Infinity value.

Property attributes of `Number.POSITIVE_INFINITY`

Writable

no

Enumerable

no

Configurable

no

## Description

The value of `Number.POSITIVE_INFINITY` is the same as the value of the global object's [`Infinity`](../infinity) property.

This value behaves slightly differently than mathematical infinity:

-   Any positive value, including `POSITIVE_INFINITY`, multiplied by `POSITIVE_INFINITY` is `POSITIVE_INFINITY`.
-   Any negative value, including [`NEGATIVE_INFINITY`](negative_infinity), multiplied by `POSITIVE_INFINITY` is [`NEGATIVE_INFINITY`](negative_infinity).
-   Any positive number divided by `POSITIVE_INFINITY` is positive Zero.
-   Any negative number divided by `POSITIVE_INFINITY` is negative Zero.
-   Zero multiplied by `POSITIVE_INFINITY` is [`NaN`](../nan).
-   [`NaN`](../nan) multiplied by `POSITIVE_INFINITY` is [`NaN`](../nan).
-   `POSITIVE_INFINITY`, divided by any negative value except [`NEGATIVE_INFINITY`](negative_infinity), is [`NEGATIVE_INFINITY`](negative_infinity).
-   `POSITIVE_INFINITY`, divided by any positive value except `POSITIVE_INFINITY`, is `POSITIVE_INFINITY`.
-   `POSITIVE_INFINITY`, divided by either [`NEGATIVE_INFINITY`](negative_infinity) or `POSITIVE_INFINITY`, is [`NaN`](../nan).

You might use the `Number.POSITIVE_INFINITY` property to indicate an error condition that returns a finite number in case of success. Note, however, that [`isFinite`](../isfinite) would be more appropriate in such a case.

Because `POSITIVE_INFINITY` is a static property of [`Number`](../number), you always use it as `Number.POSITIVE_INFINITY`, rather than as a property of a [`Number`](../number) object you created.

## Examples

### Using POSITIVE_INFINITY

In the following example, the variable `bigNumber` is assigned a value that is larger than the maximum value. When the [`if`](../../statements/if...else) statement executes, `bigNumber` has the value `Infinity`, so `bigNumber` is set to a more manageable value before continuing.

    var bigNumber = Number.MAX_VALUE * 2;

    if (bigNumber == Number.POSITIVE_INFINITY) {
      bigNumber = returnFinite();
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.positive_infinity">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.positive_infinity</span></a></td></tr></tbody></table>

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

`POSITIVE_INFINITY`

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

-   [`Number.NEGATIVE_INFINITY`](negative_infinity)
-   [`Number.isFinite()`](isfinite)
-   [`Infinity`](../infinity)
-   [`isFinite()`](../isfinite)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY</a>
