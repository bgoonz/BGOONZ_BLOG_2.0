# Bitwise XOR assignment (^=)

The bitwise XOR assignment operator (`^=`) uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable.

## Syntax

    Operator: x ^= y
    Meaning:  x  = x ^ y

## Examples

### Using bitwise XOR assignment

    let a = 5;      // 00000000000000000000000000000101
    a ^= 3;         // 00000000000000000000000000000011

    console.log(a); // 00000000000000000000000000000110
    // 6

    let b = 5;      // 00000000000000000000000000000101
    b ^= 0;         // 00000000000000000000000000000000

    console.log(b); // 00000000000000000000000000000101
    // 5

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-assignment-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-assignment-operators</span></a></td></tr></tbody></table>

`Bitwise_XOR_assignment`

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

-   [Assignment operators in the JS guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
-   [Bitwise XOR operator](bitwise_xor)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment</a>
