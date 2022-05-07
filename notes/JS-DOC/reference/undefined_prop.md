# ReferenceError: reference to undefined property "x"

The JavaScript warning "reference to undefined property" occurs when a script attempted to access an object property which doesn't exist.

## Message

    ReferenceError: reference to undefined property "x" (Firefox)

## Error type

(Firefox only) [`ReferenceError`](../global_objects/referenceerror) warning which is reported only if `javascript.options.strict` preference is set to `true`.

## What went wrong?

The script attempted to access an object property which doesn't exist. There are two ways to access properties; see the [property accessors](../operators/property_accessors#0) reference page to learn more about them.

## Examples

### Invalid cases

In this case, the property `bar` is an undefined property, so a `ReferenceError` will occur.

    var foo = {};
    foo.bar; // ReferenceError: reference to undefined property "bar"

### Valid cases

To avoid the error, you need to either add a definition for `bar` to the object or check for the existence of the `bar` property before trying to access it; ways to do that include using the [`in`](../operators/in) operator, or the [`Object.prototype.hasOwnProperty()`](../global_objects/object/hasownproperty) method, like this:

    var foo = {};

    // Define the bar property

    foo.bar = 'moon';
    console.log(foo.bar); // "moon"

    // Test to be sure bar exists before accessing it

    if (foo.hasOwnProperty('bar')) {
      console.log(foo.bar);
    }

## See also

-   [property accessors](../operators/property_accessors#0)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undefined_prop" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undefined_prop</a>
