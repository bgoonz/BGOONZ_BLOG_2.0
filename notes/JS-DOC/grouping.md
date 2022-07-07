# Grouping operator ( )

The grouping operator `( )` controls the precedence of evaluation in expressions.

## Syntax

     ( )

## Description

The grouping operator consists of a pair of parentheses around an expression or sub-expression to override the normal [operator precedence](operator_precedence) so that expressions with lower precedence can be evaluated before an expression with higher priority. As it sounds, it groups what's inside of the parentheses.

## Examples

### Using the grouping operator

Overriding multiplication and division first, then addition and subtraction to evaluate addition first.

    var a = 1;
    var b = 2;
    var c = 3;

    // default precedence
    a + b * c     // 7
    // evaluated by default like this
    a + (b * c)   // 7

    // now overriding precedence
    // addition before multiplication
    (a + b) * c   // 9

    // which is equivalent to
    a * c + b * c // 9

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-grouping-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-grouping-operator</span></a></td></tr></tbody></table>

`Grouping`

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

-   [Operator precedence](operator_precedence)
-   [`delete`](delete)
-   [`typeof`](typeof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping</a>
