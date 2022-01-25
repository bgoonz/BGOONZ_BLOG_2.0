# Unary plus (+)

The unary plus operator (`+`) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

## Syntax

    Operator: +x

## Description

Although unary negation (`-`) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non-string values `true`, `false`, and `null`. Integers in both decimal and hexadecimal (`0x`-prefixed) formats are supported. Negative numbers are supported (though not for hex). Using the operator on BigInt values throws a TypeError. If it cannot parse a particular value, it will evaluate to [`NaN`](../global_objects/nan).

## Examples

### Usage with numbers

    const x = 1;
    const y = -1;

    console.log(+x);
    // 1
    console.log(+y);
    // -1

### Usage with non-numbers

    +true  // 1
    +false // 0
    +null  // 0
    +function(val){ return val } // NaN
    +1n    // throws TypeError: Cannot convert BigInt value to number

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-unary-plus-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-unary-plus-operator</span></a></td></tr></tbody></table>

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

`Unary_plus`

1

12

1

3

4

1

1

18

4

10.1

1

1.0

## See also

-   [Addition operator](addition)
-   [Subtraction operator](subtraction)
-   [Division operator](division)
-   [Multiplication operator](multiplication)
-   [Remainder operator](remainder)
-   [Exponentiation operator](exponentiation)
-   [Increment operator](increment)
-   [Decrement operator](decrement)
-   [Unary negation operator](unary_negation)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus</a>
