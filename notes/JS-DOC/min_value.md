# Number.MIN_VALUE

The `Number.MIN_VALUE` property represents the smallest positive numeric value representable in JavaScript.

Property attributes of `Number.MIN_VALUE`

Writable

no

Enumerable

no

Configurable

no

## Description

`Number.MIN_VALUE` is the smallest positive number (not the most negative number) that can be represented within float precision — in other words, the number closest to 0. That's approximately `5e-324` (`5 × 10-324`). The ECMAScript spec doesn't define a precise value that implementations are required to support — instead the spec says, _"must be the smallest non-zero positive value that can actually be represented by the implementation”_. But in practice, its precise value in browsers and in Node.js is `2-1074`.

Because `MIN_VALUE` is a static property of [`Number`](../number), you always use it as `Number.MIN_VALUE`, rather than as a property of a [`Number`](../number) object you created.

## Examples

### Using MIN_VALUE

The following code divides two numeric values. If the result is greater than or equal to `MIN_VALUE`, the `func1` function is called; otherwise, the `func2` function is called.

    if (num1 / num2 >= Number.MIN_VALUE) {
      func1();
    } else {
      func2();
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-number.min_value">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-number.min_value</span></a></td></tr></tbody></table>

`MIN_VALUE`

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

-   [`Number.MAX_VALUE`](max_value)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE</a>
