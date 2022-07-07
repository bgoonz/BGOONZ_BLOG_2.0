# Bitwise AND assignment (&=)

The bitwise AND assignment operator (`&=`) uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.

## Syntax

    Operator: x &= y
    Meaning:  x  = x & y

## Examples

### Using bitwise AND assignment

    let a = 5;
    // 5:     00000000000000000000000000000101
    // 2:     00000000000000000000000000000010
    a &= 2; // 0

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-assignment-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-assignment-operators</span></a></td></tr></tbody></table>

`Bitwise_AND_assignment`

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
-   [Bitwise AND operator](bitwise_and)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment</a>
