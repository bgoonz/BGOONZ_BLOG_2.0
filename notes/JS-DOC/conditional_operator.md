# Conditional (ternary) operator

The **conditional (ternary) operator** is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) followed by a colon (`:`), and finally the expression to execute if the condition is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). This operator is frequently used as a shortcut for the [`if`](../statements/if...else) statement.

## Syntax

    condition ? exprIfTrue : exprIfFalse

### Parameters

`condition`  
An expression whose value is used as a condition.

`exprIfTrue`  
An expression which is evaluated if the `condition` evaluates to a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value (one which equals or can be converted to `true`).

`exprIfFalse`  
An expression which is executed if the `condition` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) (that is, has a value which can be converted to `false`).

## Description

Besides `false`, possible falsy expressions are: `null`, `NaN`, `0`, the empty string (`""`), and `undefined`. If `condition` is any of these, the result of the conditional expression will be the result of executing the expression `exprIfFalse`.

## Examples

### A simple example

    var age = 26;
    var beverage = (age >= 21) ? "Beer" : "Juice";
    console.log(beverage); // "Beer"

### Handling null values

One common usage is to handle a value that may be `null`:

    let greeting = person => {
        let name = person ? person.name : `stranger`
        return `Howdy, ${name}`
    }

    console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
    console.log(greeting(null));             // "Howdy, stranger"

### Conditional chains

The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an `if … else if … else if … else` chain:

    function example(…) {
        return condition1 ? value1
             : condition2 ? value2
             : condition3 ? value3
             : value4;
    }

    // Equivalent to:

    function example(…) {
        if (condition1) { return value1; }
        else if (condition2) { return value2; }
        else if (condition3) { return value3; }
        else { return value4; }
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-conditional-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-conditional-operator</span></a></td></tr></tbody></table>

`Conditional_Operator`

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

-   [if statement](../statements/if...else)
-   [Nullish coalescing operator](nullish_coalescing_operator)
-   [Optional chaining](optional_chaining)
-   [Making decisions in your code — conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
-   [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator</a>
