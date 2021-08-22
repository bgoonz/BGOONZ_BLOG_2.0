# TypeError: "x" has no properties

The JavaScript exception "null (or undefined) has no properties" occurs when you attempt to access properties of [`null`](../global_objects/null) and [`undefined`](../global_objects/undefined). They don't have any.

## Message

    TypeError: Unable to get property {x} of undefined or null reference (Edge)
    TypeError: null has no properties (Firefox)
    TypeError: undefined has no properties (Firefox)

## Error type

[`TypeError`](../global_objects/typeerror).

## What went wrong?

Both, [`null`](../global_objects/null) and [`undefined`](../global_objects/undefined), have no properties you could access.

## Examples

### null and undefined have no properties

    null.foo;
    // TypeError: null has no properties

    undefined.bar;
    // TypeError: undefined has no properties

## See also

-   [`null`](../global_objects/null)
-   [`undefined`](../global_objects/undefined)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_properties" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_properties</a>
