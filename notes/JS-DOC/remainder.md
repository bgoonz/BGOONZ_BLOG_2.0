# Remainder (%)

The remainder operator (`%`) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

Note that while in most languages, '%' is a remainder operator, in some (e.g. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) it is a modulo operator. For positive values, the two are equivalent, but when the dividend and divisor are of different signs, they give different results. To obtain a modulo in JavaScript, in place of `a % n`, use `((a % n ) + n ) % n`.

## Syntax

    Operator: var1 % var2

## Examples

### Remainder with positive dividend

     12 % 5  //  2
     1 % -2 //  1
     1 % 2  //  1
     2 % 3  //  2
    5.5 % 2 // 1.5

### Remainder with negative dividend

    -12 % 5 // -2
    -1 % 2  // -1
    -4 % 2  // -0

### Remainder with NaN

    NaN % 2 // NaN

### Remainder with Infinity

    Infinity % 2 // NaN
    Infinity % 0 // NaN
    Infinity % Infinity // NaN

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-multiplicative-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-multiplicative-operators</span></a></td></tr></tbody></table>

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

`Remainder`

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

-   [Addition operator](addition)
-   [Subtraction operator](subtraction)
-   [Division operator](division)
-   [Multiplication operator](multiplication)
-   [Exponentiation operator](exponentiation)
-   [Increment operator](increment)
-   [Decrement operator](decrement)
-   [Unary negation operator](unary_negation)
-   [Unary plus operator](unary_plus)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder</a>
