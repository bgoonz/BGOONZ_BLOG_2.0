# SyntaxError: function statement requires a name

The JavaScript exception "function statement requires a name" occurs when there is a [function statement](../statements/function) in the code that requires a name.

## Message

    Syntax Error: Expected identifier (Edge)
    SyntaxError: function statement requires a name [Firefox]
    SyntaxError: Unexpected token ( [Chrome]

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

There is a [function statement](../statements/function) in the code that requires a name. You'll need to check how functions are defined and if you need to provide a name for it, or if the function in question needs to be a function expression, an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), or if the function code is placed correctly in this context at all.

## Examples

### Statements vs expressions

A _[function statement](../statements/function)_ (or _function declaration_) requires a name, this won't work:

    function () {
      return 'Hello world';
    }
    // SyntaxError: function statement requires a name

You can use a [function expression](../operators/function) (assignment) instead:

    var greet = function() {
      return 'Hello world';
    };

Or, you function is maybe intended to be an [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Immediately Invoked Function Expression), which is a function that runs as soon as it is defined. You will need a few more braces in this case:

    (function () {

    })();

### Labeled functions

If you are using function [labels](../statements/label), you will still need to provide a function name after the `function` keyword. This doesn't work:

    function Greeter() {
      german: function () {
        return "Moin";
      }
    }
    // SyntaxError: function statement requires a name

This would work, for example:

    function Greeter() {
      german: function g() {
        return "Moin";
      }
    }

### Object methods

If you intended to create a method of an object, you will need to create an object. The following syntax without a name after the `function` keyword is valid then.

    var greeter = {
      german: function () {
        return "Moin";
      }
    };

### Callback syntax

Also, check your syntax when using callbacks. Brackets and commas can get difficult easily.

    promise.then(
      function() {
        console.log("success");
      });
      function() {
        console.log("error");
    }
    // SyntaxError: function statement requires a name

Correct would be:

    promise.then(
      function() {
        console.log("success");
      },
      function() {
        console.log("error");
      }
    );

## See also

-   [Functions in the JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
-   [function statement](../statements/function)
-   [function expression](../operators/function)
-   [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
-   [label](../statements/label)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unnamed_function_statement" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unnamed_function_statement</a>
