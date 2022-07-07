# Bitwise AND (&)

The bitwise AND operator (`&`) returns a `1` in each bit position for which the corresponding bits of both operands are `1`s.

## Syntax

    a & b

## Description

The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32 bit integer:

    Before: 11100110111110100000000000000110000000000001
    After:              10100000000000000110000000000001

Each bit in the first operand is paired with the corresponding bit in the second operand: _first bit_ to _first bit_, _second bit_ to _second bit_, and so on.

The operator is applied to each pair of bits, and the result is constructed bitwise.

The truth table for the AND operation is:

<table><thead><tr class="header"><th>a</th><th>b</th><th>a AND b</th></tr></thead><tbody><tr class="odd"><td>0</td><td>0</td><td>0</td></tr><tr class="even"><td>0</td><td>1</td><td>0</td></tr><tr class="odd"><td>1</td><td>0</td><td>0</td></tr><tr class="even"><td>1</td><td>1</td><td>1</td></tr></tbody></table>

    .    9 (base 10) = 00000000000000000000000000001001 (base 2)
        14 (base 10) = 00000000000000000000000000001110 (base 2)
                       --------------------------------
    14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)

Bitwise ANDing any number `x` with `0` yields `0`.

## Examples

### Using bitwise AND

    // 5: 00000000000000000000000000000101
    // 2: 00000000000000000000000000000010
    5 & 2; // 0

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#prod-BitwiseANDExpression">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#prod-BitwiseANDExpression</span></a></td></tr></tbody></table>

`Bitwise_AND`

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

-   [Bitwise operators in the JS guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
-   [Bitwise AND assignment operator](bitwise_and_assignment)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND</a>
