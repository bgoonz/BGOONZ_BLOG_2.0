# TypeError: property "x" is non-configurable and can't be deleted

The JavaScript exception "property is non-configurable and can't be deleted" occurs when it was attempted to delete a property, but that property is [non-configurable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#properties).

## Message

    TypeError: Calling delete on 'x' is not allowed in strict mode (Edge)
    TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
    TypeError: Cannot delete property 'x' of #<Object> (Chrome)

## Error type

[`TypeError`](../global_objects/typeerror) in strict mode only.

## What went wrong?

It was attempted to delete a property, but that property is [non-configurable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#properties). The `configurable` attribute controls whether the property can be deleted from the object and whether its attributes (other than `writable`) can be changed.

This error happens only in [strict mode code](../strict_mode). In non-strict code, the operation returns `false`.

## Examples

### Attempting to delete non-configurable properties

Non-configurable properties are not super common, but they can be created using [`Object.defineProperty()`](../global_objects/object/defineproperty) or [`Object.freeze()`](../global_objects/object/freeze).

    'use strict';
    var obj = Object.freeze({name: 'Elsa', score: 157});
    delete obj.score;  // TypeError

    'use strict';
    var obj = {};
    Object.defineProperty(obj, 'foo', {value: 2, configurable: false});
    delete obj.foo;  // TypeError

    'use strict';
    var frozenArray = Object.freeze([0, 1, 2]);
    frozenArray.pop();  // TypeError

There are also a few non-configurable properties built into JavaScript. Maybe you tried to delete a mathematical constant.

    'use strict';
    delete Math.PI;  // TypeError

## See also

-   [delete operator](../operators/delete)
-   [`Object.defineProperty()`](../global_objects/object/defineproperty)
-   [`Object.freeze()`](../global_objects/object/freeze)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_delete" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_delete</a>
