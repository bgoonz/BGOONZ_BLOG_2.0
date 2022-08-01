# SyntaxError: missing ) after condition

The JavaScript exception "missing ) after condition" occurs when there is an error with how an `if` condition is written. It must appear in parenthesis after the `if` keyword.

## Message

    SyntaxError: Expected ')' (Edge)
    SyntaxError: missing ) after condition (Firefox)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

There is an error with how an `if` condition is written. In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs. The if statement executes a statement if a specified condition is truthy. In JavaScript, this condition must appear in parenthesis after the `if` keyword, like this:

    if (condition) {
      // do something if the condition is true
    }

## Examples

### Missing parenthesis

It might just be an oversight, carefully check all you parenthesis in your code.

    if (3 > Math.PI {
      console.log("wait what?");
    }

    // SyntaxError: missing ) after condition

To fix this code, you would need to add a parenthesis that closes the condition.

    if (3 > Math.PI) {
      console.log("wait what?");
    }

### Misused `is` keyword

If you are coming from another programming language, it is also easy to add keywords that don't mean the same or have no meaning at all in JavaScript.

    if (done is true) {
     console.log("we are done!");
    }

    // SyntaxError: missing ) after condition

Instead you need to use a correct [comparison operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators). For example:

    if (done === true) {
     console.log("we are done!");
    }

## See also

-   `if...else`
-   [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
-   [Making decisions in your code — conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition</a>
