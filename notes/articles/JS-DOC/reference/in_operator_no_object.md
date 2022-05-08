# TypeError: cannot use 'in' operator to search for 'x' in 'y'

The JavaScript exception "right-hand side of 'in' should be an object" occurs when the [`in` operator](../operators/in) was used to search in strings, or in numbers, or other primitive types. It can only be used to check if a property is in an object.

## Message

    TypeError: Invalid operand to 'in' (Edge)
    TypeError: right-hand side of 'in' should be an object, got 'x' (Firefox)
    TypeError: cannot use 'in' operator to search for 'x' in 'y' (Firefox, Chrome)

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

The [`in` operator](../operators/in) can only be used to check if a property is in an object. You can't search in strings, or in numbers, or other primitive types.

## Examples

### Searching in strings

Unlike in other programming languages (e.g. Python), you can't search in strings using the [`in` operator](../operators/in).

    "Hello" in "Hello World";
    // TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'

Instead you will need to use [`String.prototype.indexOf()`](../global_objects/string/indexof), for example.

    "Hello World".indexOf("Hello") !== -1;
    // true

### The operand can't be null or undefined

Make sure the object you are inspecting isn't actually [`null`](../global_objects/null) or [`undefined`](../global_objects/undefined).

    var foo = null;
    "bar" in foo;
    // TypeError: cannot use 'in' operator to search for 'bar' in 'foo' (Chrome)
    // TypeError: right-hand side of 'in' should be an object, got null (Firefox)

The `in` operator always expects an object.

    var foo = { baz: "bar" };
    "bar" in foo; // false

    "PI" in Math; // true
    "pi" in Math; // false

### Searching in arrays

Be careful when using the `in` operator to search in [`Array`](../global_objects/array) objects. The `in` operator checks the index number, not the value at that index.

    var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
    3 in trees; // true
    "oak" in trees; // false

## See also

-   [`in` operator](../operators/in)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/in_operator_no_object" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/in_operator_no_object</a>
