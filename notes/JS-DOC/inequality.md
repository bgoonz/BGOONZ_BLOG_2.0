# Inequality (!=)

The inequality operator (`!=`) checks whether its two operands are not equal, returning a Boolean result. Unlike the [strict inequality](strict_inequality) operator, it attempts to convert and compare operands that are of different types.

## Syntax

    x != y

## Description

The inequality operator checks whether its operands are not equal. It is the negation of the [equality](equality) operator so the following two lines will always give the same result:

    x != y

    !(x == y)

For details of the comparison algorithm, see the page for the [equality](equality) operator.

Like the equality operator, the inequality operator will attempt to convert and compare operands of different types:

    3 != "3"; // false

To prevent this, and require that different types are considered to be different, use the [strict inequality](strict_inequality) operator instead:

    3 !== "3"; // true

## Examples

### Comparison with no type conversion

    1 != 2;              // true
    "hello" != "hola";   // true

    1 != 1;              // false
    "hello" != "hello";  // false

### Comparison with type conversion

    "1" !=  1;            // false
    1 != "1";             // false
    0 != false;           // false
    0 != null;            // true
    0 != undefined;       // true
    0 != !!null;          // false, look at Logical NOT operator
    0 != !!undefined;     // false, look at Logical NOT operator
    null != undefined;    // false

    const number1 = new Number(3);
    const number2 = new Number(3);
    number1 != 3;         // false
    number1 != number2;   // true

### Comparison of objects

    const object1 = {"key": "value"}
    const object2 = {"key": "value"};

    object1 != object2 // true
    object2 != object2 // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-equality-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-equality-operators</span></a></td></tr></tbody></table>

`Inequality`

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

-   [Equality operator](equality)
-   [Strict equality operator](strict_equality)
-   [Strict inequality operator](strict_inequality)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality</a>
