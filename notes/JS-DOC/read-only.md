# TypeError: "x" is read-only

The JavaScript [strict mode](../strict_mode)-only exception "is read-only" occurs when a global variable or object property that was assigned to is a read-only property.

## Message

    TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
    TypeError: "x" is read-only (Firefox)
    TypeError: 0 is read-only (Firefox)
    TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
    TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)

## Error type

[`TypeError`](../global_objects/typeerror)

## What went wrong?

The global variable or object property that was assigned to is a read-only property. (Technically, it is a [non-writable data property](../global_objects/object/defineproperty#writable_attribute).)

This error happens only in [strict mode code](../strict_mode). In non-strict code, the assignment is silently ignored.

## Examples

### Invalid cases

Read-only properties are not super common, but they can be created using [`Object.defineProperty()`](../global_objects/object/defineproperty) or [`Object.freeze()`](../global_objects/object/freeze).

    'use strict';
    var obj = Object.freeze({name: 'Elsa', score: 157});
    obj.score = 0;  // TypeError

    'use strict';
    Object.defineProperty(this, 'LUNG_COUNT', {value: 2, writable: false});
    LUNG_COUNT = 3;  // TypeError

    'use strict';
    var frozenArray = Object.freeze([0, 1, 2]);
    frozenArray[0]++;  // TypeError

There are also a few read-only properties built into JavaScript. Maybe you tried to redefine a mathematical constant.

    'use strict';
    Math.PI = 4;  // TypeError

Sorry, you can't do that.

The global variable `undefined` is also read-only, so you can't silence the infamous "undefined is not a function" error by doing this:

    'use strict';
    undefined = function() {};  // TypeError: "undefined" is read-only

### Valid cases

    'use strict';
    var obj = Object.freeze({name: 'Score', points: 157});
    obj = {name: obj.name, points: 0};   // replacing it with a new object works

    'use strict';
    var LUNG_COUNT = 2;  // a `var` works, because it's not read-only
    LUNG_COUNT = 3;  // ok (anatomically unlikely, though)

## See also

-   [`Object.defineProperty()`](../global_objects/object/defineproperty)
-   [`Object.freeze()`](../global_objects/object/freeze)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Read-only" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Read-only</a>
