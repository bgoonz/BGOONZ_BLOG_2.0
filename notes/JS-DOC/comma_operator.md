# Comma operator (,)

The **comma operator** (`,`) evaluates each of its operands (from left to right) and returns the value of the last operand. This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final value being the value of the rightmost of its member expressions. This is commonly used to provide multiple parameters to a `for` loop.

## Syntax

    expr1, expr2, expr3...

### Parameters

`expr1`, `expr2`, `expr3`...  
One or more expressions, the last of which is returned as the value of the compound expression.

## Usage notes

You can use the comma operator when you want to include multiple expressions in a location that requires a single expression. The most common usage of this operator is to supply multiple parameters in a `for` loop.

The comma operator is fully different from the comma within arrays, objects, and function arguments and parameters.

## Examples

If `a` is a 2-dimensional array with 10 elements on each side, the following code uses the comma operator to increment `i` and decrement `j` at once.

The following code prints the values of the diagonal elements in the array:

    for (var i = 0, j = 9; i <= 9; i++, j--)
      console.log('a[' + i + '][' + j + '] = ' + a[i][j]);

Note that the comma operators in assignments may appear not to have the normal effect of comma operators because they don't exist within an expression. In the following example, `a` is set to the value of `b = 3` (which is 3), but the `c = 4` expression still evaluates and its result returned to console (i.e., 4). This is due to [operator precedence and associativity](operator_precedence).

    var a, b, c;

    a = b = 3, c = 4; // Returns 4 in console
    console.log(a); // 3 (left-most)

    var x, y, z;

    x = (y = 5, z = 6); // Returns 6 in console
    console.log(x); // 6 (right-most)

### Processing and then returning

Another example that one could make with comma operator is processing before returning. As stated, only the last element will be returned but all others are going to be evaluated as well. So, one could do:

    function myFunc() {
      var x = 0;

      return (x += 1, x); // the same as return ++x;
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-comma-operator">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-comma-operator</span></a></td></tr></tbody></table>

`Comma_Operator`

1

12

1

3

4

1

1

18

4

10.1

1

1.0

## See also

-   [`for` loop](../statements/for)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator</a>
