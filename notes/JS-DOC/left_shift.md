# Left shift (&lt;&lt;)

The `<<` shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

## Syntax

    a << b

## Description

This operator shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

For example, `9 << 2` yields 36:

    .    9 (base 10): 00000000000000000000000000001001 (base 2)
                      --------------------------------
    9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)

Bitwise shifting any number `x` to the left by `y` bits yields `x * 2 ** y`.  
So e.g.: `9 << 3` translates to: `9 * (2 ** 3) = 9 * (8) = 72`.

## Examples

### Using left shift

    9 << 3; // 72

    // 9 * (2 ** 3) = 9 * (8) = 72

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-left-shift-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-left-shift-operator</span></a></td></tr></tbody></table>

`Left_shift`

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
-   [Left shift assignment operator](left_shift_assignment)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift</a>
