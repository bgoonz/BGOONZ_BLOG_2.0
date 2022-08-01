# TypeError: can't assign to property "x" on "y": not an object

The JavaScript strict mode exception "can't assign to property" occurs when attempting to create a property on [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) value such as a [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol), a [string](https://developer.mozilla.org/en-US/docs/Glossary/String), a [number](https://developer.mozilla.org/en-US/docs/Glossary/Number) or a [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean). [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) values cannot hold any [property](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript).

## Message

    TypeError: can't assign to property "x" on {y}: not an object (Firefox)
    TypeError: Cannot create property 'x' on {y} (Chrome)

## Error type

[`TypeError`](../global_objects/typeerror).

## What went wrong?

In [`Strict_mode`](../strict_mode), a [`TypeError`](../global_objects/typeerror) is raised when attempting to create a property on [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) value such as a [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol), a [string](https://developer.mozilla.org/en-US/docs/Glossary/String), a [number](https://developer.mozilla.org/en-US/docs/Glossary/Number) or a [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean). [Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) values cannot hold any [property](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript).

The problem might be that an unexpected value is flowing at an unexpected place, or that an object variant of a [`String`](../global_objects/string) or a [`Number`](../global_objects/number) is expected.

## Examples

### Invalid cases

    'use strict';

    var foo = "my string";
    // The following line does nothing if not in strict mode.
    foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object

### Fixing the issue

Either fix the code to prevent the [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) from being used in such places, or fix the issue is to create the object equivalent [`Object`](../global_objects/object).

    'use strict';

    var foo = new String("my string");
    foo.bar = {};

## See also

-   [`Strict_mode`](../strict_mode)
-   [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_assign_to_property" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_assign_to_property</a>
