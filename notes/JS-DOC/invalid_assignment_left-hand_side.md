# ReferenceError: invalid assignment left-hand side

The JavaScript exception "invalid assignment left-hand side" occurs when there was an unexpected assignment somewhere. For example, a single "`=`" sign was used instead of "`==`" or "`===`".

## Message

    ReferenceError: invalid assignment left-hand side

## Error type

[`ReferenceError`](../global_objects/referenceerror).

## What went wrong?

There was an unexpected assignment somewhere. This might be due to a mismatch of a [assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators) and a [comparison operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators), for example. While a single "`=`" sign assigns a value to a variable, the "`==`" or "`===`" operators compare a value.

## Examples

### Typical invalid assignments

    if (Math.PI = 3 || Math.PI = 4) {
      console.log('no way!');
    }
    // ReferenceError: invalid assignment left-hand side

    var str = 'Hello, '
    += 'is it me '
    += 'you\'re looking for?';
    // ReferenceError: invalid assignment left-hand side

In the `if` statement, you want to use a comparison operator ("=="), and for the string concatenation, the plus ("+") operator is needed.

    if (Math.PI == 3 || Math.PI == 4) {
      console.log('no way!');
    }

    var str = 'Hello, '
    + 'from the '
    + 'other side!';

## See also

-   [Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)
-   [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side</a>
