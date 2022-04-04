Strict inequality (!==)
=======================

The strict inequality operator (`!==`) checks whether its two operands are not equal, returning a Boolean result. Unlike the [inequality](inequality) operator, the strict inequality operator always considers operands of different types to be different.

Syntax
------

    x !== y

Description
-----------

The strict inequality operator checks whether its operands are not equal. It is the negation of the [strict equality](strict_equality) operator so the following two lines will always give the same result:

    x !== y

    !(x === y)

For details of the comparison algorithm, see the page for the [strict equality](strict_equality) operator.

Like the strict equality operator, the strict inequality operator will always consider operands of different types to be different:

    3 !== "3"; // true

Examples
--------

### Comparing operands of the same type

    console.log("hello" !== "hello");   // false
    console.log("hello" !== "hola");    // true

    console.log(3 !== 3);               // false
    console.log(3 !== 4);               // true

    console.log(true !== true);         // false
    console.log(true !== false);        // true

    console.log(null !== null);         // false

### Comparing operands of different types

    console.log("3" !== 3);           // true

    console.log(true !== 1);          // true

    console.log(null !== undefined);  // true

### Comparing objects

    const object1 = {
      name: "hello"
    }

    const object2 = {
      name: "hello"
    }

    console.log(object1 !== object2);  // true
    console.log(object1 !== object1);  // false

Specifications
--------------

<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><p>ECMAScript Language Specification (ECMAScript)<br />
</p><span class="small">#sec-equality-operators</span></td></tr></tbody></table>

Browser compatibility
---------------------

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

`Strict_inequality`

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

See also
--------

-   [Equality operator](equality)
-   [Inequality operator](inequality)
-   [Strict equality operator](strict_equality)

Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality</a>
