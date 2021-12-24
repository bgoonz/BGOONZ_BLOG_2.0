# Right shift assignment (&gt;&gt;=)

The right shift assignment operator (`>>=`) moves the specified amount of bits to the right and assigns the result to the variable.

## Syntax

    Operator: x >>= y
    Meaning:  x   = x >> y

## Examples

### Using right shift assignment

    let a = 5; //   (00000000000000000000000000000101)
    a >>= 2;   // 1 (00000000000000000000000000000001)

    let b = -5; //  (-00000000000000000000000000000101)
    b >>= 2;  // -2 (-00000000000000000000000000000010)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-assignment-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-assignment-operators</span></a></td></tr></tbody></table>

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

`Right_shift_assignment`

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
-   [Right shift operator](right_shift)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment</a>
