# Strict equality (===)

The strict equality operator (`===`) checks whether its two operands are equal, returning a Boolean result. Unlike the [equality](equality) operator, the strict equality operator always considers operands of different types to be different.

## Syntax

    x === y

## Description

The strict equality operators (`===` and `!==`) use the [Strict Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6) to compare two operands.

-   If the operands are of different types, return `false`.
-   If both operands are objects, return `true` only if they refer to the same object.
-   If both operands are `null` or both operands are `undefined`, return `true`.
-   If either operand is `NaN`, return `false`.
-   Otherwise, compare the two operand's values:
    -   Numbers must have the same numeric values. `+0` and `-0` are considered to be the same value.
    -   Strings must have the same characters in the same order.
    -   Booleans must be both `true` or both `false`.

The most notable difference between this operator and the [equality](equality) (`==`) operator is that if the operands are of different types, the `==` operator attempts to convert them to the same type before comparing.

## Examples

### Comparing operands of the same type

    console.log("hello" === "hello");   // true
    console.log("hello" === "hola");    // false

    console.log(3 === 3);               // true
    console.log(3 === 4);               // false

    console.log(true === true);         // true
    console.log(true === false);        // false

    console.log(null === null);         // true

### Comparing operands of different types

    console.log("3" === 3);           // false

    console.log(true === 1);          // false

    console.log(null === undefined);  // false

### Comparing objects

    const object1 = {
      name: "hello"
    }

    const object2 = {
      name: "hello"
    }

    console.log(object1 === object2);  // false
    console.log(object1 === object1);  // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-equality-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-equality-operators</span></a></td></tr></tbody></table>

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

`Strict_equality`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

## See also

-   [Equality operator](equality)
-   [Inequality operator](inequality)
-   [Strict inequality operator](strict_inequality)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality</a>
