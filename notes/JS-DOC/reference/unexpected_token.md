# SyntaxError: Unexpected token

The JavaScript exceptions "unexpected token" occur when a specific language construct was expected, but something else was provided. This might be a simple typo.

## Message

    SyntaxError: expected expression, got "x"
    SyntaxError: expected property name, got "x"
    SyntaxError: expected target, got "x"
    SyntaxError: expected rest argument name, got "x"
    SyntaxError: expected closing parenthesis, got "x"
    SyntaxError: expected '=>' after argument list, got "x"

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

A specific language construct was expected, but something else was provided. This might be a simple typo.

## Examples

### Expression expected

For example, when chaining expressions, trailing commas are not allowed.

    for (let i = 0; i < 5,; ++i) {
      console.log(i);
    }
    // SyntaxError: expected expression, got ')'

Correct would be omitting the comma or adding another expression:

    for (let i = 0; i < 5; ++i) {
      console.log(i);
    }

### Not enough brackets

Sometimes, you leave out brackets around `if` statements:

    function round(n, upperBound, lowerBound){
      if(n > upperBound) || (n < lowerBound){
        throw 'Number ' + String(n) + ' is more than ' + String(upperBound) + ' or less than ' + String(lowerBound);
      }else if(n < ((upperBound + lowerBound)/2)){
        return lowerBound;
      }else{
        return upperBound;
      }
    } // SyntaxError: expected expression, got '||'

The brackets may look correct at first, but note how the `||` is outside the brackets. Correct would be putting brackets around the `||`:

    function round(n, upperBound, lowerBound){
      if((n > upperBound) || (n < lowerBound)){
        throw 'Number ' + String(n) + ' is more than ' + String(upperBound) + ' or less than ' + String(lowerBound);
      }else if(n < ((upperBound + lowerBound)/2)){
        return lowerBound;
      }else{
        return upperBound;
      }
    }

## See also

-   [`SyntaxError`](../global_objects/syntaxerror)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token</a>
