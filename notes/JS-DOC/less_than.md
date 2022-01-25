# Less than (&lt;)

The less than operator (`<`) returns `true` if the left operand is less than the right operand, and `false` otherwise.

## Syntax

     x < y

## Description

The operands are compared using the [Abstract Relational Comparison](https://tc39.es/ecma262/#sec-abstract-relational-comparison) algorithm, which is roughly summarised below:

-   First, objects are converted to primitives using `Symbol.ToPrimitive` with the `hint` parameter be `'number'`.
-   If both values are strings, they are compared as strings, based on the values of the Unicode code points they contain.
-   Otherwise JavaScript attempts to convert non-numeric types to numeric values:
    -   Boolean values `true` and `false` are converted to 1 and 0 respectively.
    -   `null` is converted to 0.
    -   `undefined` is converted to `NaN`.
    -   Strings are converted based on the values they contain, and are converted as `NaN` if they do not contain numeric values.
-   If either value is `NaN`, the operator returns `false`.
-   Otherwise the values are compared as numeric values.

## Examples

### String to string comparison

    console.log("a" < "b");        // true
    console.log("a" < "a");        // false
    console.log("a" < "3");        // false

### String to number comparison

    console.log("5" < 3);          // false
    console.log("3" < 3);          // false
    console.log("3" < 5);          // true

    console.log("hello" < 5);      // false
    console.log(5 < "hello");      // false

    console.log("5" < 3n);         // false
    console.log("3" < 5n);         // true

### Number to Number comparison

    console.log(5 < 3);            // false
    console.log(3 < 3);            // false
    console.log(3 < 5);            // true

### Number to BigInt comparison

    console.log(5n < 3);           // false
    console.log(3 < 5n);           // true

### Comparing Boolean, null, undefined, NaN

    console.log(true < false);     // false
    console.log(false < true);     // true

    console.log(0 < true);         // true
    console.log(true < 1);         // false

    console.log(null < 0);         // false
    console.log(null < 1);         // true

    console.log(undefined < 3);    // false
    console.log(3 < undefined);    // false

    console.log(3 < NaN);          // false
    console.log(NaN < 3);          // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-relational-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-relational-operators</span></a></td></tr></tbody></table>

`Less_than`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [Greater than operator](greater_than)
-   [Greater than or equal operator](greater_than_or_equal)
-   [Less than or equal operator](less_than_or_equal)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than</a>
