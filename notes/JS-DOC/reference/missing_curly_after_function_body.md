# SyntaxError: missing } after function body

The JavaScript exception "missing } after function body" occurs when there is a syntax mistake when creating a function somewhere. Check if any closing curly brackets or parenthesis are in the correct order.

## Message

    SyntaxError: Expected '}' (Edge)
    SyntaxError: missing } after function body (Firefox)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

There is a syntax mistake when creating a function somewhere. Also check if any closing curly brackets or parenthesis are in the correct order. Indenting or formatting the code a bit nicer might also help you to see through the jungle.

## Examples

### Forgotten closing curly bracket

Oftentimes, there is a missing curly bracket in your function code:

    var charge = function() {
      if (sunny) {
        useSolarCells();
      } else {
        promptBikeRide();
    };

Correct would be:

    var charge = function() {
      if (sunny) {
        useSolarCells();
      } else {
        promptBikeRide();
      }
    };

It can be more obscure when using [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), or other constructs that use a lot of different parenthesis and curly brackets, for example.

    (function() { if (true) { return false; } );

Oftentimes, indenting differently or double checking indentation helps to spot these errors.

    (function() {
      if (true) {
        return false;
      }
    });

## See also

-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body</a>
