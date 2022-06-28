# TypeError: invalid assignment to const "x"

The JavaScript exception "invalid assignment to const" occurs when it was attempted to alter a constant value. JavaScript `const` declarations can't be re-assigned or redeclared.

## Message

    TypeError: invalid assignment to const "x" (Firefox)
    TypeError: Assignment to constant variable. (Chrome)
    TypeError: Assignment to const (Edge)
    TypeError: Redeclaration of const 'x' (IE)

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

A constant is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be redeclared. In JavaScript, constants are declared using the `const` keyword.

## Examples

### Invalid redeclaration

Assigning a value to the same constant name in the same block-scope will throw.

    const COLUMNS = 80;

    // ...

    COLUMNS = 120; // TypeError: invalid assignment to const `COLUMNS'

### Fixing the error

There are multiple options to fix this error. Check what was intended to be achieved with the constant in question.

#### Rename

If you meant to declare another constant, pick another name and re-name. This constant name is already taken in this scope.

    const COLUMNS = 80;
    const WIDE_COLUMNS = 120;

#### `const`, `let` or `var`?

Do not use const if you weren't meaning to declare a constant. Maybe you meant to declare a block-scoped variable with `let` or global variable with `var`.

    let columns = 80;

    // ...

    let columns = 120;

#### Scoping

Check if you are in the correct scope. Should this constant appear in this scope or was it meant to appear in a function, for example?

    const COLUMNS = 80;

    function setupBigScreenEnvironment() {
      const COLUMNS = 120;
    }

### `const` and immutability

The `const` declaration creates a read-only reference to a value. It does **not** mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in case the content is an object, this means the object itself can still be altered. This means that you can't mutate the value stored in a variable:

    const obj = {foo: 'bar'};
    obj = {foo: 'baz'}; // TypeError: invalid assignment to const `obj'

But you can mutate the properties in a variable:

    obj.foo = 'baz';
    obj; // Object { foo: "baz" }

## See also

-   `const`
-   `let`
-   `var`

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment</a>
