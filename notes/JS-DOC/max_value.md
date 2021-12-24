# Number.MAX_VALUE

The `Number.MAX_VALUE` property represents the maximum numeric value representable in JavaScript.

Property attributes of `Number.MAX_VALUE`

Writable

no

Enumerable

no

Configurable

no

## Description

The `MAX_VALUE` property has a value of approximately `1.79E+308`, or 2<sup>1024</sup>. Values larger than `MAX_VALUE` are represented as [`Infinity`](../infinity).

Because `MAX_VALUE` is a static property of [`Number`](../number), you always use it as `Number.MAX_VALUE`, rather than as a property of a [`Number`](../number) object you created.

## Examples

### Using MAX_VALUE

The following code multiplies two numeric values. If the result is less than or equal to `MAX_VALUE`, the `func1` function is called; otherwise, the `func2` function is called.

    if (num1 * num2 <= Number.MAX_VALUE) {
      func1();
    } else {
      func2();
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.max_value">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.max_value</span></a></td></tr></tbody></table>

`MAX_VALUE`

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

-   [`Number.MIN_VALUE`](min_value)
-   The [`Number`](../number) object it belongs to

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE</a>
