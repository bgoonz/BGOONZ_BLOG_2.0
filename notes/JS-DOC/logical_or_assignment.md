# Logical OR assignment (||=)

The logical OR assignment (`x ||= y`) operator only assigns if `x` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

## Syntax

    expr1 ||= expr2

## Description

### Short-circuit evaluation

The [logical OR](logical_or) operator works like this:

    x || y;
    // returns x when x is truthy
    // returns y when x is not truthy

The logical OR operator short-circuits: the second operand is only evaluated if the first operand doesn't already determine the result.

Logical OR assignment short-circuits as well, meaning it only performs an assignment if the logical operation would evaluate the right-hand side. In other words, `x ||= y` is equivalent to:

    x || (x = y);

And not equivalent to the following which would always perform an assignment:

    x = x || y;

Note that this behavior is different to mathematical and bitwise assignment operators.

## Examples

### Setting default content

If the "lyrics" element is empty, display a default value:

    document.getElementById('lyrics').textContent ||= 'No lyrics.'

Here the short-circuit is especially beneficial, since the element will not be updated unnecessarily and won't cause unwanted side-effects such as additional parsing or rendering work, or loss of focus, etc.

Note: Pay attention to the value returned by the API you're checking against. If an empty string is returned (a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value), `||=` must be used, otherwise you want to use the `??=` operator (for [`null`](../global_objects/null) or [`undefined`](../global_objects/undefined) return values).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-assignment-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-assignment-operators</span></a></td></tr></tbody></table>

`Logical_OR_assignment`

85

85

79

No

No

14

85

85

79

No

14

No

## See also

-   [Logical OR (||)](logical_or)
-   [The nullish coalescing operator (`??`)](nullish_coalescing_operator)
-   [Bitwise OR assignment (`|=`)](bitwise_or_assignment)
-   [`Boolean`](../global_objects/boolean)
-   [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
-   [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment</a>
