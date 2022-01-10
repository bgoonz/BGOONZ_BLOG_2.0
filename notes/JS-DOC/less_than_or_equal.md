# Less than or equal (&lt;=)

The less than or equal operator (`<=`) returns `true` if the left operand is less than or equal to the right operand, and `false` otherwise.

## Syntax

     x <= y

## Description

The operands are compared using the [Abstract Relational Comparison](https://tc39.es/ecma262/#sec-abstract-relational-comparison) algorithm. See the documentation for the [Less than](less_than) operator for a summary of this algorithm.

## Examples

### String to string comparison

    console.log("a" <= "b");     // true
    console.log("a" <= "a");     // true
    console.log("a" <= "3");     // false

### String to number comparison

    console.log("5" <= 3);       // false
    console.log("3" <= 3);       // true
    console.log("3" <= 5);       // true

    console.log("hello" <= 5);   // false
    console.log(5 <= "hello");   // false

### Number to Number comparison

    console.log(5 <= 3);         // false
    console.log(3 <= 3);         // true
    console.log(3 <= 5);         // true

### Number to BigInt comparison

    console.log(5n <= 3);        // false
    console.log(3 <= 3n);        // true
    console.log(3 <= 5n);        // true

### Comparing Boolean, null, undefined, NaN

    console.log(true <= false);  // false
    console.log(true <= true);   // true
    console.log(false <= true);  // true

    console.log(true <= 0);      // false
    console.log(true <= 1);      // true

    console.log(null <= 0);      // true
    console.log(1 <= null);      // false

    console.log(undefined <= 3); // false
    console.log(3 <= undefined); // false

    console.log(3 <= NaN);       // false
    console.log(NaN <= 3);       // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-relational-operators">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Relational operators' in that specification.</span></a></td></tr></tbody></table>

`Less_than_or_equal`

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

-   [Greater than operator](greater_than)
-   [Greater than or equal operator](greater_than_or_equal)
-   [Less than operator](less_than)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal</a>
