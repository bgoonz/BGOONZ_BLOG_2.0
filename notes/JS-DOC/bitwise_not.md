# Bitwise NOT (~)

The bitwise NOT operator (`~`) inverts the bits of its operand.

## Syntax

    ~a

## Description

The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32 bit integer:

    Before: 11100110111110100000000000000110000000000001
    After:              10100000000000000110000000000001

Each bit in the first operand is paired with the corresponding bit in the second operand: _first bit_ to _first bit_, _second bit_ to _second bit_, and so on.

The operator is applied to each pair of bits, and the result is constructed bitwise.

The truth table for the `NOT` operation is:

<table><thead><tr class="header"><th>a</th><th>NOT a</th></tr></thead><tbody><tr class="odd"><td>0</td><td>1</td></tr><tr class="even"><td>1</td><td>0</td></tr></tbody></table>

     9 (base 10) = 00000000000000000000000000001001 (base 2)
                   --------------------------------
    ~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)

Bitwise NOTing any number `x` yields `-(x + 1)`. For example, `~-5` yields `4`.

Note that due to using 32-bit representation for numbers both `~-1` and `~4294967295` (2<sup>32</sup>-1) results in `0`.

## Examples

### Using bitwise NOT

    ~0;  // -1
    ~-1; // 0
    ~1;  // -2

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-bitwise-not-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-bitwise-not-operator</span></a></td></tr></tbody></table>

`Bitwise_NOT`

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

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT</a>
