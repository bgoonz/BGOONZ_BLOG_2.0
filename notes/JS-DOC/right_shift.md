# Right shift (&gt;&gt;)

The `>>` shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name "sign-propagating".

## Syntax

    a >> b

## Description

This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Copies of the leftmost bit are shifted in from the left. Since the new leftmost bit has the same value as the previous leftmost bit, the sign bit (the leftmost bit) does not change. Hence the name "sign-propagating".

For example, `9 >> 2` yields 2:

    .    9 (base 10): 00000000000000000000000000001001 (base 2)
                      --------------------------------
    9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)

Likewise, `-9 >> 2` yields `-3`, because the sign is preserved:

    .    -9 (base 10): 11111111111111111111111111110111 (base 2)
                       --------------------------------
    -9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)

## Examples

### Using right shift

     9 >> 2; //  2
    -9 >> 2; // -3

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#prod-BitwiseORExpression">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#prod-BitwiseORExpression</span></a></td></tr></tbody></table>

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

`Right_shift`

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
-   [Right shift assignment operator](right_shift_assignment)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift</a>
