# TypeError: can't access property "x" of "y"

The JavaScript exception "can't access property" occurs when property access was operated on [`undefined`](../global_objects/undefined) or [`null`](../global_objects/null) values.

## Message

    TypeError: Unable to get property {x} of undefined or null reference (Edge)
    TypeError: can't access property {x} of {y} (Firefox)
    TypeError: {y} is undefined, can't access property {x} of it (Firefox)
    TypeError: {y} is null, can't access property {x} of it (Firefox)

    Examples:
    TypeError: x is undefined, can't access property "prop" of it
    TypeError: x is null, can't access property "prop" of it
    TypeError: can't access property "prop" of undefined
    TypeError: can't access property "prop" of null

## Error type

[`TypeError`](../global_objects/typeerror).

## What went wrong?

The property access was operated on [`undefined`](../global_objects/undefined) or [`null`](../global_objects/null) value.

## Examples

### Invalid cases

    // undefined and null cases on which the substring method won't work
    var foo = undefined;
    foo.substring(1); // TypeError: x is undefined, can't access property "substring" of it

    var foo = null;
    foo.substring(1); // TypeError: x is null, can't access property "substring" of it

### Fixing the issue

To fix null pointer to `undefined` or `null` values, you can use the [typeof](../operators/typeof) operator, for example.

    if (typeof foo !== 'undefined') {
      // Now we know that foo is defined, we are good to go.
    }

## See also

-   [`undefined`](../global_objects/undefined)
-   [`null`](../global_objects/null)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_property" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_property</a>
