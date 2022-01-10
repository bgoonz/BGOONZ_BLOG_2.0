# Unsigned right shift (&gt;&gt;&gt;)

The `>>>` (zero-fill right shift) shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes `0`, so the result is always non-negative. Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.

## Syntax

    a >>> b

## Description

This operator shifts the first operand the specified number of bits to the right. Excess bits shifted off to the right are discarded. Zero bits are shifted in from the left. The sign bit becomes `0`, so the result is always non-negative. Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.

For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result. For example, `9 >>> 2` yields 2, the same as `9 >> 2`:

    .     9 (base 10): 00000000000000000000000000001001 (base 2)
                       --------------------------------
    9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)

However, this is not the case for negative numbers. For example, `-9 >>> 2` yields 1073741821, which is different than `-9 >> 2` (which yields `-3`):

    .     -9 (base 10): 11111111111111111111111111110111 (base 2)
                        --------------------------------
    -9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)

## Examples

### Using unsigned right shift

     9 >>> 2; // 2
    -9 >>> 2; // 1073741821

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-unsigned-right-shift-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-unsigned-right-shift-operator</span></a></td></tr></tbody></table>

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

`Unsigned_right_shift`

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
-   [Unsigned right shift assignment operator](unsigned_right_shift_assignment)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift</a>
