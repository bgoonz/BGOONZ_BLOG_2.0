# Greater than or equal (&gt;=)

The greater than or equal operator (`>=`) returns `true` if the left operand is greater than or equal to the right operand, and `false` otherwise.

## Syntax

     x >= y

## Description

The operands are compared using the [Abstract Relational Comparison](https://tc39.es/ecma262/#sec-abstract-relational-comparison) algorithm. See the documentation for the [Less than](less_than) operator for a summary of this algorithm.

## Examples

### String to string comparison

    console.log("a" >= "b");     // false
    console.log("a" >= "a");     // true
    console.log("a" >= "3");     // true

### String to number comparison

    console.log("5" >= 3);       // true
    console.log("3" >= 3);       // true
    console.log("3" >= 5);       // false

    console.log("hello" >= 5);   // false
    console.log(5 >= "hello");   // false

### Number to Number comparison

    console.log(5 >= 3);         // true
    console.log(3 >= 3);         // true
    console.log(3 >= 5);         // false

### Number to BigInt comparison

    console.log(5n >= 3);        // true
    console.log(3 >= 3n);        // true
    console.log(3 >= 5n);        // false

### Comparing Boolean, null, undefined, NaN

    console.log(true >= false);  // true
    console.log(true >= true);   // true
    console.log(false >= true);  // false

    console.log(true >= 0);      // true
    console.log(true >= 1);      // true

    console.log(null >= 0);      // true
    console.log(1 >= null);      // true

    console.log(undefined >= 3); // false
    console.log(3 >= undefined); // false

    console.log(3 >= NaN);       // false
    console.log(NaN >= 3);       // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-relational-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-relational-operators</span></a></td></tr></tbody></table>

`Greater_than_or_equal`

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
-   [Less than operator](less_than)
-   [Less than or equal operator](less_than_or_equal)

 
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal</a>
