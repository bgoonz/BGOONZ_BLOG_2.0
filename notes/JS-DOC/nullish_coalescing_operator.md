# Nullish coalescing operator (??)

The `??` is a logical operator that returns its right-hand side operand when its left-hand side operand is [`null`](../global_objects/null) or [`undefined`](../global_objects/undefined), and otherwise returns its left-hand side operand.

This can be contrasted with the [logical OR (`||`) operator](logical_or), which returns the right-hand side operand if the left operand is _any_ [falsy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#description)value, not only `null` or `undefined`. In other words, if you use `||` to provide some default value to another variable `foo`, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., `''` or `0`). See below for more examples.

The nullish coalescing operator has the fifth-lowest [operator precedence](operator_precedence), directly lower than `||` and directly higher than the [conditional (ternary) operator](conditional_operator).

## Syntax

    leftExpr ?? rightExpr

## Examples

### Using the nullish coalescing operator

In this example, we will provide default values but keep values other than `null` or `undefined`.

    const nullValue = null;
    const emptyText = ""; // falsy
    const someNumber = 42;

    const valA = nullValue ?? "default for A";
    const valB = emptyText ?? "default for B";
    const valC = someNumber ?? 0;

    console.log(valA); // "default for A"
    console.log(valB); // "" (as the empty string is not null or undefined)
    console.log(valC); // 42

### Assigning a default value to a variable

Earlier, when one wanted to assign a default value to a variable, a common pattern was to use the logical OR operator (`||`):

    let foo;

    //  foo is never assigned any value so it is still undefined
    let someDummyText = foo || 'Hello!';

However, due to `||` being a boolean logical operator, the left hand-side operand was coerced to a boolean for the evaluation and any _falsy_ value (`0`, `''`, `NaN`, `null`, `undefined`) was not returned. This behavior may cause unexpected consequences if you consider `0`, `''`, or `NaN` as valid values.

    let count = 0;
    let text = "";

    let qty = count || 42;
    let message = text || "hi!";
    console.log(qty);     // 42 and not 0
    console.log(message); // "hi!" and not ""

The nullish coalescing operator avoids this pitfall by only returning the second operand when the first one evaluates to either `null` or `undefined` (but no other falsy values):

    let myText = ''; // An empty string (which is also a falsy value)

    let notFalsyText = myText || 'Hello world';
    console.log(notFalsyText); // Hello world

    let preservingFalsy = myText ?? 'Hi neighborhood';
    console.log(preservingFalsy); // '' (as myText is neither undefined nor null)

### Short-circuiting

Like the OR and AND logical operators, the right-hand side expression is not evaluated if the left-hand side proves to be neither `null` nor `undefined`.

    function A() { console.log('A was called'); return undefined;}
    function B() { console.log('B was called'); return false;}
    function C() { console.log('C was called'); return "foo";}

    console.log( A() ?? C() );
    // logs "A was called" then "C was called" and then "foo"
    // as A() returned undefined so both expressions are evaluated

    console.log( B() ?? C() );
    // logs "B was called" then "false"
    // as B() returned false (and not null or undefined), the right
    // hand side expression was not evaluated

### No chaining with AND or OR operators

It is not possible to combine both the AND (`&&`) and OR operators (`||`) directly with `??`. A `SyntaxError` will be thrown in such cases.

    null || undefined ?? "foo"; // raises a SyntaxError
    true || undefined ?? "foo"; // raises a SyntaxError

However, providing parenthesis to explicitly indicate precedence is correct:

    (null || undefined) ?? "foo"; // returns "foo"

### Relationship with the optional chaining operator (`?.`)

The nullish coalescing operator treats `undefined` and `null` as specific values and so does the [optional chaining operator (`?.`)](optional_chaining) which is useful to access a property of an object which may be `null` or `undefined`.

    let foo = { someFooProp: "hi" };

    console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
    console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#prod-CoalesceExpression">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#prod-CoalesceExpression</span></a></td></tr></tbody></table>

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

`Nullish_coalescing_operator`

80

80

72

No

67

13.1

80

80

79

No

13.4

No

## See also

-   [The optional chaining operator](optional_chaining)
-   [The logical OR (`||`) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_or_2)
-   [Default parameters in functions](../functions/default_parameters)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator</a>
