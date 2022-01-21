# Logical NOT (!)

The logical NOT (`!`) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with [`Boolean`](../global_objects/boolean) (logical) values. When used with non-Boolean values, it returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.

## Syntax

    !expr

## Description

Returns `false` if its single operand can be converted to `true`; otherwise, returns `true`.

If a value can be converted to `true`, the value is so-called [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). If a value can be converted to `false`, the value is so-called [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

Examples of expressions that can be converted to false are:

-   `null`;
-   `NaN`;
-   `0`;
-   empty string (`""` or `''` or ` `` `);
-   `undefined`.

Even though the `!` operator can be used with operands that are not Boolean values, it can still be considered a boolean operator since its return value can always be converted to a [boolean primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type). To explicitly convert its return value (or any expression in general) to the corresponding boolean value, use a double [NOT operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#logical_not) or the [`Boolean`](../global_objects/boolean/boolean) constructor.

## Examples

### Using NOT

The following code shows examples of the `!` (logical NOT) operator.

    n1 = !true               // !t returns false
    n2 = !false              // !f returns true
    n3 = !''                 // !f returns true
    n4 = !'Cat'              // !t returns false

### Double NOT (`!!`)

It is possible to use a couple of NOT operators in series to explicitly force the conversion of any value to the corresponding [boolean primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type). The conversion is based on the "truthyness" or "falsyness" of the value (see [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)).

The same conversion can be done through the [`Boolean`](../global_objects/boolean/boolean) function.

    n1 = !!true                   // !!truthy returns true
    n2 = !!{}                     // !!truthy returns true: any object is truthy...
    n3 = !!(new Boolean(false))   // ...even Boolean objects with a false .valueOf()!
    n4 = !!false                  // !!falsy returns false
    n5 = !!""                     // !!falsy returns false
    n6 = !!Boolean(false)         // !!falsy returns false

### Converting between NOTs

The following operation involving **booleans**:

    !!bCondition

is always equal to:

    bCondition

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-logical-not-operator">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Logical NOT expression' in that specification.</span></a></td></tr></tbody></table>

`Logical_NOT`

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT</a>
