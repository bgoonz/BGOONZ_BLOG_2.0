# SyntaxError: redeclaration of formal parameter "x"

The JavaScript exception "redeclaration of formal parameter" occurs when the same variable name occurs as a function parameter and is then redeclared using a [`let`](../statements/let) assignment in a function body again.

## Message

    SyntaxError: Let/Const redeclaration (Edge)
    SyntaxError: redeclaration of formal parameter "x" (Firefox)
    SyntaxError: Identifier "x" has already been declared (Chrome)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

The same variable name occurs as a function parameter and is then redeclared using a [`let`](../statements/let) assignment in a function body again. Redeclaring the same variable within the same function or block scope using `let` is not allowed in JavaScript.

## Examples

### Redeclared argument

In this case, the variable "arg" redeclares the argument.

    function f(arg) {
      let arg = 'foo';
    }

    // SyntaxError: redeclaration of formal parameter "arg"

If you want to change the value of "arg" in the function body, you can do so, but you do not need to declare the same variable again. In other words: you can omit the `let` keyword. If you want to create a new variable, you need to rename it as conflicts with the function parameter already.

    function f(arg) {
      arg = 'foo';
    }

    function f(arg) {
      let bar = 'foo';
    }

## See also

-   [`let`](../statements/let)
-   [`const`](../statements/const)
-   [`var`](../statements/var)
-   [Declaring variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) in the [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter</a>
