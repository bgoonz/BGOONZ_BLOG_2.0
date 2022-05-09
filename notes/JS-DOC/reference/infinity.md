# Infinity

The global property `Infinity` is a numeric value representing infinity.

Property attributes of `Infinity`

Writable

no

Enumerable

no

Configurable

no

## Description

`Infinity` is a property of the _global object_. In other words, it is a variable in global scope.

The initial value of `Infinity` is [`Number.POSITIVE_INFINITY`](number/positive_infinity). The value `Infinity` (positive infinity) is greater than any other number.

This value behaves slightly differently than mathematical infinity; see [`Number.POSITIVE_INFINITY`](number/positive_infinity) for details.

As defined by the ECMAScript 5 specification, `Infinity` is read-only (implemented in JavaScript 1.8.5 / Firefox 4).

## Examples

### Using Infinity

    console.log(Infinity          ); /* Infinity */
    console.log(Infinity + 1      ); /* Infinity */
    console.log(Math.pow(10, 1000)); /* Infinity */
    console.log(Math.log(0)       ); /* -Infinity */
    console.log(1 / Infinity      ); /* 0 */
    console.log(1 / 0             ); /* Infinity */

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-value-properties-of-the-global-object-infinity">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-value-properties-of-the-global-object-infinity</span></a></td></tr></tbody></table>

`Infinity`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

## See also

-   [`Number.NEGATIVE_INFINITY`](number/negative_infinity)
-   [`Number.POSITIVE_INFINITY`](number/positive_infinity)
-   [`Number.isFinite`](number/isfinite)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity</a>
