# block

A **block statement** (or **compound statement** in other languages) is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and may optionally be [labelled](label):

## Syntax

### Block Statement

    {
      StatementList
    }

### Labelled Block Statement

    LabelIdentifier: {
      StatementList
    }

`StatementList`  
Statements grouped within the block statement.

`LabelIdentifier`  
An optional [label](label) for visual identification or as a target for [`break`](break).

## Description

The block statement is often called **compound statement** in other languages. It allows you to use multiple statements where JavaScript expects only one statement. Combining statements into blocks is a common practice in JavaScript. The opposite behavior is possible using an [empty statement](empty), where you provide no statement, although one is required.

Blocks are commonly used in association with [`if...else`](if...else) and [`for`](for) statements.

## Examples

### Block scoping rules with var or function declaration in non-strict mode

Variables declared with `var` or created by [function declarations](function) in non-strict mode **do not** have block scope. Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. In other words, block statements do not introduce a scope. For example:

    var x = 1;
    {
      var x = 2;
    }
    console.log(x); // logs 2

This logs 2 because the `var x` statement within the block is in the same scope as the `var x` statement before the block.

In non-strict code, function declarations inside blocks behave strangely. Do not use them.

### Block scoping rules with let, const or function declaration in strict mode

By contrast, identifiers declared with [`let`](let) and [`const`](const) **do have** block scope:

    let x = 1;
    {
      let x = 2;
    }
    console.log(x); // logs 1

The `x = 2` is limited in scope to the block in which it was defined.

The same is true of `const`:

    const c = 1;
    {
      const c = 2;
    }
    console.log(c); // logs 1 and does not throw SyntaxError...

Note that the block-scoped `const c = 2` _does not_ throw a `SyntaxError: Identifier 'c' has already been declared` because it can be declared uniquely within the block.

In [strict mode](../strict_mode), starting with ES2015, functions inside blocks are scoped to that block. Prior to ES2015, block-level functions were forbidden in strict mode.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-block">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-block</span></a></td></tr></tbody></table>

`block`

1

12

1

11

3

1

1

18

4

10.1

1

1.0

## See also

-   [`while`](while)
-   [`if...else`](if...else)
-   [`let`](let)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block</a>
