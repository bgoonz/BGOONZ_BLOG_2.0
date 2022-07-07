# Warning: unreachable code after return statement

The JavaScript warning "unreachable code after return statement" occurs when using an expression after a [`return`](../statements/return) statement, or when using a semicolon-less return statement but including an expression directly after.

## Message

    Warning: unreachable code after return statement (Firefox)

## Error type

Warning

## What went wrong?

Unreachable code after a return statement might occur in these situations:

-   When using an expression after a [`return`](../statements/return) statement, or
-   when using a semicolon-less return statement but including an expression directly after.

When an expression exists after a valid `return` statement, a warning is given to indicate that the code after the `return` statement is unreachable, meaning it can never be run.

Why should I have semicolons after `return` statements? In the case of semicolon-less `return` statements, it can be unclear whether the developer intended to return the statement on the following line, or to stop execution and return. The warning indicates that there is ambiguity in the way the `return` statement is written.

Warnings will not be shown for semicolon-less returns if these statements follow it:

-   [`throw`](../statements/throw)
-   [`break`](../statements/break)
-   [`var`](../statements/var)
-   [`function`](../statements/function)

## Examples

### Invalid cases

    function f() {
      var x = 3;
      x += 4;
      return x;   // return exits the function immediately
      x -= 3;     // so this line will never run; it is unreachable
    }

    function f() {
      return     // this is treated like `return;`
        3 + 4;   // so the function returns, and this line is never reached
    }

### Valid cases

    function f() {
      var x = 3;
      x += 4;
      x -= 3;
      return x;  // OK: return after all other statements
    }

    function f() {
      return 3 + 4  // OK: semicolon-less return with expression on the same line
    }

## See also

-   [Automatic Semicolon Insertion](../statements/return#automatic_semicolon_insertion)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Stmt_after_return" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Stmt_after_return</a>
