# SyntaxError: return not in function

The JavaScript exception "return (or yield) not in function" occurs when a `return` or `yield` statement is called outside of a [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

## Message

    SyntaxError: 'return' statement outside of function (Edge)
    SyntaxError: return not in function (Firefox)
    SyntaxError: yield not in function (Firefox)

## Error type

[`SyntaxError`](../global_objects/syntaxerror).

## What went wrong?

A `return` or `yield` statement is called outside of a [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions). Maybe there are missing curly brackets somewhere? The `return` and `yield` statements must be in a function, because they end (or pause and resume) function execution and specify a value to be returned to the function caller.

## Examples

### Missing curly brackets

    var cheer = function(score) {
      if (score === 147)
        return 'Maximum!';
      };
      if (score > 100) {
        return 'Century!';
      }
    }

    // SyntaxError: return not in function

The curly brackets look correct at a first glance, but this code snippet is missing a `{` after the first `if` statement. Correct would be:

    var cheer = function(score) {
      if (score === 147) {
        return 'Maximum!';
      }
      if (score > 100) {
        return 'Century!';
      }
    };

## See also

-   `return`
-   `yield`

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_return_or_yield" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_return_or_yield</a>
