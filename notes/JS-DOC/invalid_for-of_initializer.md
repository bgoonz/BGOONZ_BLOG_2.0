# SyntaxError: a declaration in the head of a for-of loop can't have an initializer

The JavaScript exception "a declaration in the head of a for-of loop can't have an initializer" occurs when the head of a [for...of](../statements/for...of) loop contains an initializer expression such as |`for (var i = 0 of iterable)`|. This is not allowed in for-of loops.

## Message

    SyntaxError: for-of loop head declarations cannot have an initializer (Edge)
    SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
    SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)

## Error type

[`SyntaxError`](../global_objects/syntaxerror)

## What went wrong?

The head of a [for...of](../statements/for...of) loop contains an initializer expression. That is, a variable is declared and assigned a value |`for (var i = 0 of iterable)`|. This is not allowed in for-of loops. You might want a `for` loop that does allow an initializer.

## Examples

### Invalid `for-of` loop

    let iterable = [10, 20, 30];

    for (let value = 50 of iterable) {
      console.log(value);
    }

    // SyntaxError: a declaration in the head of a for-of loop can't
    // have an initializer

### Valid `for-of` loop

You need to remove the initializer (`value = 50`) in the head of the `for-of` loop. Maybe you intended to make 50 an offset value, in that case you could add it to the loop body, for example.

    let iterable = [10, 20, 30];

    for (let value of iterable) {
      value += 50;
      console.log(value);
    }
    // 60
    // 70
    // 80

## See also

-   `for...of`
-   `for...in` – disallows an initializer in strict mode as well ([SyntaxError: for-in loop head declarations may not have initializers](invalid_for-in_initializer))
-   `for` – allows to define an initializer when iterating.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-of_initializer" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-of_initializer</a>
