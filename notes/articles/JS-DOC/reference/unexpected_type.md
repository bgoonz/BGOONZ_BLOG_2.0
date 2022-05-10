# TypeError: "x" is (not) "y"

The JavaScript exception "_x_ is (not) _y_" occurs when there was an unexpected type. Oftentimes, unexpected [`undefined`](../global_objects/undefined) or [`null`](../global_objects/null) values.

## Message

    TypeError: Unable to get property {x} of undefined or null reference (Edge)
    TypeError: "x" is (not) "y" (Firefox)

    Examples:
    TypeError: "x" is undefined
    TypeError: "x" is null
    TypeError: "undefined" is not an object
    TypeError: "x" is not an object or null
    TypeError: "x" is not a symbol

## Error type

[`TypeError`](../global_objects/typeerror).

## What went wrong?

There was an unexpected type. This occurs oftentimes with [`undefined`](../global_objects/undefined) or [`null`](../global_objects/null) values.

Also, certain methods, such as [`Object.create()`](../global_objects/object/create) or [`Symbol.keyFor()`](../global_objects/symbol/keyfor), require a specific type, that must be provided.

## Examples

### Invalid cases

    // undefined and null cases on which the substring method won't work
    var foo = undefined;
    foo.substring(1); // TypeError: foo is undefined

    var foo = null;
    foo.substring(1); // TypeError: foo is null

    // Certain methods might require a specific type
    var foo = {}
    Symbol.keyFor(foo); // TypeError: foo is not a symbol

    var foo = 'bar'
    Object.create(foo); // TypeError: "foo" is not an object or null

### Fixing the issue

To fix null pointer to `undefined` values, you can use the [typeof](../operators/typeof) operator, for example.

    if (foo !== undefined) {
      // Now we know that foo is defined, we are good to go.
    }

    if (typeof foo !== 'undefined') {
      // The same good idea, but don't use this implementation - it can bring problems
      // because of the confusion between truly undefined and undeclared variables.
    }

## See also

-   [`undefined`](../global_objects/undefined)
-   [`null`](../global_objects/null)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type</a>
