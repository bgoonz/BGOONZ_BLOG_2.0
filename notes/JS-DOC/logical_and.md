# Logical AND (&&)

The logical AND (`&&`) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true. It is typically used with [`Boolean`](../global_objects/boolean) (logical) values. When it is, it returns a Boolean value. However, the `&&` operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

## Syntax

    expr1 && expr2

## Description

If `expr1` can be converted to `true`, returns `expr2`; else, returns `expr1`.

If a value can be converted to `true`, the value is so-called [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). If a value can be converted to `false`, the value is so-called [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

Examples of expressions that can be converted to false are:

-   `null`;
-   `NaN`;
-   `0`;
-   empty string (`""` or `''` or ` `` `);
-   `undefined`.

Even though the `&&` operator can be used with operands that are not Boolean values, it can still be considered a boolean operator since its return value can always be converted to a [boolean primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type). To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use a double [NOT operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_not) or the [`Boolean`](../global_objects/boolean/boolean) constructor.

### Short-circuit evaluation

The logical AND expression is evaluated left to right, it is tested for possible "short-circuit" evaluation using the following rule:

`(some falsy expression) && expr` is short-circuit evaluated to the falsy expression;

Short circuit means that the `expr` part above is **not evaluated**, hence any side effects of doing so do not take effect (e.g., if `expr` is a function call, the calling never takes place). This happens because the value of the operator is already determined after the evaluation of the first operand. See example:

    function A(){ console.log('called A'); return false; }
    function B(){ console.log('called B'); return true; }

    console.log( A() && B() );
    // logs "called A" due to the function call,
    // then logs false (which is the resulting value of the operator)

### Operator precedence

The following expressions might seem equivalent, but they are not, because the `&&` operator is executed before the `||` operator (see [operator precedence](operator_precedence)).

    true || false && false      // returns true, because && is executed first
    (true || false) && false    // returns false, because operator precedence cannot apply

## Examples

### Using AND

The following code shows examples of the `&&` (logical AND) operator.

    a1 = true  && true       // t && t returns true
    a2 = true  && false      // t && f returns false
    a3 = false && true       // f && t returns false
    a4 = false && (3 == 4)   // f && f returns false
    a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
    a6 = false && 'Cat'      // f && t returns false
    a7 = 'Cat' && false      // t && f returns false
    a8 = ''    && false      // f && f returns ""
    a9 = false && ''         // f && f returns false

### Conversion rules for booleans

#### Converting AND to OR

The following operation involving **booleans**:

    bCondition1 && bCondition2

is always equal to:

    !(!bCondition1 || !bCondition2)

#### Converting OR to AND

The following operation involving **booleans**:

    bCondition1 || bCondition2

is always equal to:

    !(!bCondition1 && !bCondition2)

### Removing nested parentheses

As logical expressions are evaluated left to right, it is always possible to remove parentheses from a complex expression following some rules.

The following composite operation involving **booleans**:

    bCondition1 || (bCondition2 && bCondition3)

is always equal to:

    bCondition1 || bCondition2 && bCondition3

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#prod-LogicalANDExpression">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#prod-LogicalANDExpression</span></a></td></tr></tbody></table>

`Logical_AND`

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

-   [`Boolean`](../global_objects/boolean)
-   [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
-   [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND</a>
