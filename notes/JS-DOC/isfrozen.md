# Object.isFrozen()

The `Object.isFrozen()` determines if an object is [frozen](freeze).

## Syntax

    Object.isFrozen(obj)

### Parameters

`obj`  
The object which should be checked.

### Return value

A [`Boolean`](../boolean) indicating whether or not the given object is frozen.

## Description

An object is frozen if and only if it is not [extensible](isextensible), all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.

## Examples

### Using Object.isFrozen

    // A new object is extensible, so it is not frozen.
    Object.isFrozen({}); // === false

    // An empty object which is not extensible
    // is vacuously frozen.
    var vacuouslyFrozen = Object.preventExtensions({});
    Object.isFrozen(vacuouslyFrozen); // === true

    // A new object with one property is also extensible,
    // ergo not frozen.
    var oneProp = { p: 42 };
    Object.isFrozen(oneProp); // === false

    // Preventing extensions to the object still doesn't
    // make it frozen, because the property is still
    // configurable (and writable).
    Object.preventExtensions(oneProp);
    Object.isFrozen(oneProp); // === false

    // ...but then deleting that property makes the object
    // vacuously frozen.
    delete oneProp.p;
    Object.isFrozen(oneProp); // === true

    // A non-extensible object with a non-writable
    // but still configurable property is not frozen.
    var nonWritable = { e: 'plep' };
    Object.preventExtensions(nonWritable);
    Object.defineProperty(nonWritable, 'e', {
      writable: false
    }); // make non-writable
    Object.isFrozen(nonWritable); // === false

    // Changing that property to non-configurable
    // then makes the object frozen.
    Object.defineProperty(nonWritable, 'e', {
      configurable: false
    }); // make non-configurable
    Object.isFrozen(nonWritable); // === true

    // A non-extensible object with a non-configurable
    // but still writable property also isn't frozen.
    var nonConfigurable = { release: 'the kraken!' };
    Object.preventExtensions(nonConfigurable);
    Object.defineProperty(nonConfigurable, 'release', {
      configurable: false
    });
    Object.isFrozen(nonConfigurable); // === false

    // Changing that property to non-writable
    // then makes the object frozen.
    Object.defineProperty(nonConfigurable, 'release', {
      writable: false
    });
    Object.isFrozen(nonConfigurable); // === true

    // A non-extensible object with a configurable
    // accessor property isn't frozen.
    var accessor = { get food() { return 'yum'; } };
    Object.preventExtensions(accessor);
    Object.isFrozen(accessor); // === false

    // ...but make that property non-configurable
    // and it becomes frozen.
    Object.defineProperty(accessor, 'food', {
      configurable: false
    });
    Object.isFrozen(accessor); // === true

    // But the easiest way for an object to be frozen
    // is if Object.freeze has been called on it.
    var frozen = { 1: 81 };
    Object.isFrozen(frozen); // === false
    Object.freeze(frozen);
    Object.isFrozen(frozen); // === true

    // By definition, a frozen object is non-extensible.
    Object.isExtensible(frozen); // === false

    // Also by definition, a frozen object is sealed.
    Object.isSealed(frozen); // === true

### Non-object coercion

In ES5, if the argument to this method is not an object (a primitive), then it will cause a [`TypeError`](../typeerror). In ES2015, a non-object argument will be treated as if it was a frozen ordinary object, return `true`.

    Object.isFrozen(1);
    // TypeError: 1 is not an object (ES5 code)

    Object.isFrozen(1);
    // true                          (ES2015 code)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.isfrozen">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Object.isFrozen' in that specification.</span></a></td></tr></tbody></table>

`isFrozen`

6

12

4

9

12

5.1

1

18

4

12

6

1.0

## See also

-   [`Object.freeze()`](freeze)
-   [`Object.preventExtensions()`](preventextensions)
-   [`Object.isExtensible()`](isextensible)
-   [`Object.seal()`](seal)
-   [`Object.isSealed()`](issealed)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen</a>
