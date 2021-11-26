# SyntaxError: test for equality (==) mistyped as assignment (=)?

The JavaScript warning "test for equality (==) mistyped as assignment (=)?" occurs when there was an assignment (`=`) when you would normally expect a test for equality (`==`).

## Message

    Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?

## Error type

(Firefox only) [`SyntaxError`](../global_objects/syntaxerror) warning which is reported only if `javascript.options.strict` preference is set to `true`.

## What went wrong?

There was an assignment (`=`) when you would normally expect a test for equality (`==`). To help debugging, JavaScript (with strict warnings enabled) warns about this pattern.

## Examples

### Assignment within conditional expressions

It is advisable to not use simple assignments in a conditional expression (such as `if...else`), because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:

    if (x = y) {
      // do the right thing
    }

If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:

    if ((x = y)) {
      // do the right thing
    }

Otherwise, you probably meant to use a comparison operator (e.g. `==` or `===`):

    if (x == y) {
      // do the right thing
    }

## See also

-   `if...else`
-   [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Equal_as_assign" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Equal_as_assign</a>
