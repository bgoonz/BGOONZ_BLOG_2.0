# Operator precedence

**Operator precedence** determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

## Precedence And Associativity

Consider an expression describable by the representation below. Note that both OP<sub>1</sub> and OP<sub>2</sub> are fill-in-the-blanks for OPerators.

    a OP1 b OP2 c

If `OP1` and `OP2` have different precedence levels (see the table below), the operator with the highest precedence goes first and associativity does not matter. Observe how multiplication has higher precedence than addition and executed first, even though addition is written first in the code.

    console.log(3 + 10 * 2);   // logs 23
    console.log(3 + (10 * 2)); // logs 23 because parentheses here are superfluous
    console.log((3 + 10) * 2); // logs 26 because the parentheses change the order

Left-associativity (left-to-right) means that it is processed as `(a OP1 b) OP2 c`, while right-associativity (right-to-left) means it is interpreted as `a OP1 (b OP2 c)`. Assignment operators are right-associative, so you can write:

    a = b = 5; // same as writing a = (b = 5);

with the expected result that `a` and `b` get the value 5. This is because the assignment operator returns the value that is assigned. First, `b` is set to 5. Then the `a` is also set to 5, the return value of `b = 5`, aka right operand of the assignment.

As another example, the unique exponentiation operator has right-associativity, whereas other arithmetic operators have left-associativity. It is interesting to note that, the order of evaluation is always left-to-right irregardless of associativity and precedence.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td>Code</td><td>Output</td></tr><tr class="even"><td><pre data-language="js"><code>function echo(name, num) {
    console.log(&quot;Evaluating the &quot; + name + &quot; side&quot;);
    return num;
}
// Notice the division operator (/)
console.log(echo(&quot;left&quot;, 6) / echo(&quot;right&quot;, 2));</code></pre></td><td><pre data-language="plain"><code>Evaluating the left side
Evaluating the right side
3</code></pre></td></tr><tr class="odd"><td><pre data-language="js"><code>function echo(name, num) {
    console.log(&quot;Evaluating the &quot; + name + &quot; side&quot;);
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo(&quot;left&quot;, 2) ** echo(&quot;right&quot;, 3));</code></pre></td><td><pre data-language="plain"><code>Evaluating the left side
Evaluating the right side
8</code></pre></td></tr></tbody></table>

The difference in associativity comes into play when there are multiple operators of the same precedence. With only one operator or operators of different precedences, associativity doesn't affect the output, as seen in the example above. In the example below, observe how associativity affects the output when multiple of the same operator are used.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td>Code</td><td>Output</td></tr><tr class="even"><td><pre data-language="js"><code>function echo(name, num) {
    console.log(&quot;Evaluating the &quot; + name + &quot; side&quot;);
    return num;
}
// Notice the division operator (/)
console.log(echo(&quot;left&quot;, 6) / echo(&quot;middle&quot;, 2) / echo(&quot;right&quot;, 3));</code></pre></td><td><pre data-language="plain"><code>Evaluating the left side
Evaluating the middle side
Evaluating the right side
1</code></pre></td></tr><tr class="odd"><td><pre data-language="js"><code>function echo(name, num) {
    console.log(&quot;Evaluating the &quot; + name + &quot; side&quot;);
    return num;
}
// Notice the exponentiation operator (**)
console.log(echo(&quot;left&quot;, 2) ** echo(&quot;middle&quot;, 3) ** echo(&quot;right&quot;, 2));</code></pre></td><td><pre data-language="plain"><code>Evaluating the left side
Evaluating the middle side
Evaluating the right side
512</code></pre></td></tr><tr class="even"><td><pre data-language="js"><code>function echo(name, num) {
    console.log(&quot;Evaluating the &quot; + name + &quot; side&quot;);
    return num;
}
// Notice the parentheses around the left and middle exponentiation
console.log((echo(&quot;left&quot;, 2) ** echo(&quot;middle&quot;, 3)) ** echo(&quot;right&quot;, 2));</code></pre></td><td><pre data-language="plain"><code>Evaluating the left side
Evaluating the middle side
Evaluating the right side
64</code></pre></td></tr></tbody></table>

Looking at the code snippets above, `6 / 3 / 2` is the same as `(6 / 3) / 2` because division is left-associative. Exponentiation, on the other hand, is right-associative, so `2 ** 3 ** 2` is the same as `2 ** (3 ** 2)`. Thus, doing `(2 ** 3) ** 2` changes the order and results in the 64 seen in the table above.

Remember that precedence comes before associativity. So, mixing division and exponentiation, the exponentiation comes before the division. For example, `2 ** 3 / 3 ** 2` results in 0.8888888888888888 because it is the same as `(2 ** 3) / (3 ** 2)`.

### Note on grouping and short-circuiting

In the table below, **Grouping** is listed as having the highest precedence. However, that does not always mean the expression within the grouping symbols `( … )` is evaluated first, especially when it comes to short-circuiting.

Short-circuiting is jargon for conditional evaluation. For example, in the expression `a && (b + c)`, if `a` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), then the sub-expression `(b + c)` will not even get evaluated, even if it is in parentheses. We could say that the logical disjunction operator ("OR") is "short-circuited". Along with logical disjunction, other short-circuited operators include logical conjunction ("AND"), nullish-coalescing, optional chaining, and the conditional operator. Some more examples follow.

    a || (b * c);  // evaluate `a` first, then produce `a` if `a` is "truthy"
    a && (b < c);  // evaluate `a` first, then produce `a` if `a` is "falsy"
    a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
    a?.b.c;        // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`

## Examples

    3 > 2 && 2 > 1
    // returns true

    3 > 2 > 1
    // Returns false because 3 > 2 is true, then true is converted to 1
    // in inequality operators, therefore true > 1 becomes 1 > 1, which
    //  is false. Adding parentheses makes things clear: (3 > 2) > 1.

## Table

The following table lists operators in order from highest precedence (21) to lowest precedence (1).

Note that [spread syntax](spread_syntax) is intentionally not included in the table — because, to quote an [an answer at Stack Overflow](https://stackoverflow.com/a/48656377), "[Spread syntax is not an operator](https://stackoverflow.com/q/44934828/1048572) and therefore does not have a precedence. It is part of the array literal and function call (and object literal) syntax.”

Precedence

Operator type

Associativity

Individual operators

21

[Grouping](grouping)

n/a

`( … )`

20

[Member Access](property_accessors#dot_notation)

left-to-right

`… . …`

[Computed Member Access](property_accessors#bracket_notation)

left-to-right

`… [ … ]`

[`new`](new) (with argument list)

n/a

`new … ( … )`

[Function Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

left-to-right

`… ( … )`

[Optional chaining](optional_chaining)

left-to-right

`?.`

19

[`new`](new) (without argument list)

right-to-left

`new …`

18

[Postfix Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment)

n/a

`… ++`

[Postfix Decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#decrement)

`… --`

17

[Logical NOT (!)](logical_not)

right-to-left

`! …`

[Bitwise NOT (~)](bitwise_not)

`~ …`

[Unary plus (+)](unary_plus)

`+ …`

[Unary negation (-)](unary_negation)

`- …`

[Prefix Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment)

`++ …`

[Prefix Decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#decrement)

`-- …`

[`typeof`](typeof)

`typeof …`

[`void`](void)

`void …`

[`delete`](delete)

`delete …`

[`await`](await)

`await …`

16

[Exponentiation (\*\*)](exponentiation)

right-to-left

`… ** …`

15

[Multiplication (\*)](multiplication)

left-to-right

`… * …`

[Division (/)](division)

`… / …`

[Remainder (%)](remainder)

`… % …`

14

[Addition (+)](addition)

left-to-right

`… + …`

[Subtraction (-)](subtraction)

`… - …`

13

[Bitwise Left Shift (&lt;&lt;)](left_shift)

left-to-right

`… << …`

[Bitwise Right Shift (&gt;&gt;)](right_shift)

`… >> …`

[Bitwise Unsigned Right Shift (&gt;&gt;&gt;)](unsigned_right_shift)

`… >>> …`

12

[Less Than (&lt;)](less_than)

left-to-right

`… < …`

[Less Than Or Equal (&lt;=)](less_than_or_equal)

`… <= …`

[Greater Than (&gt;)](greater_than)

`… > …`

[Greater Than Or Equal (&gt;=)](greater_than_or_equal)

`… >= …`

[`in`](in)

`… in …`

[`instanceof`](instanceof)

`… instanceof …`

11

[Equality (==)](equality)

left-to-right

`… == …`

[Inequality (!=)](inequality)

`… != …`

[Strict Equality (===)](strict_equality)

`… === …`

[Strict Inequality (!==)](strict_inequality)

`… !== …`

10

[Bitwise AND (&)](bitwise_and)

left-to-right

`… & …`

9

[Bitwise XOR (^)](bitwise_xor)

left-to-right

`… ^ …`

8

[Bitwise OR (|)](bitwise_or)

left-to-right

`… | …`

7

[Logical AND (&&)](logical_and)

left-to-right

`… && …`

6

[Logical OR (||)](logical_or)

left-to-right

`… || …`

5

[Nullish coalescing operator (??)](nullish_coalescing_operator)

left-to-right

`… ?? …`

4

[Conditional (ternary) operator](conditional_operator)

right-to-left

`… ? … : …`

3

[Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)

right-to-left

`… = …`

`… += …`

`… -= …`

`… **= …`

`… *= …`

`… /= …`

`… %= …`

`… <<= …`

`… >>= …`

`… >>>= …`

`… &= …`

`… ^= …`

`… |= …`

`… &&= …`

`… ||= …`

`… ??= …`

2

[`yield`](yield)

right-to-left

`yield …`

[`yield*`](yield*)

`yield* …`

1

[Comma / Sequence](comma_operator)

left-to-right

`… , …`

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence</a>
