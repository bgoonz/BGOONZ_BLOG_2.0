# Object.isSealed()

The `Object.isSealed()` method determines if an object is sealed.

## Syntax

    Object.isSealed(obj)

### Parameters

`obj`  
The object which should be checked.

### Return value

A [`Boolean`](../boolean) indicating whether or not the given object is sealed.

## Description

Returns `true` if the object is sealed, otherwise `false`. An object is sealed if it is not [extensible](isextensible) and if all its properties are non-configurable and therefore not removable (but not necessarily non-writable).

## Examples

### Using Object.isSealed

    // Objects aren't sealed by default.
    var empty = {};
    Object.isSealed(empty); // === false

    // If you make an empty object non-extensible,
    // it is vacuously sealed.
    Object.preventExtensions(empty);
    Object.isSealed(empty); // === true

    // The same is not true of a non-empty object,
    // unless its properties are all non-configurable.
    var hasProp = { fee: 'fie foe fum' };
    Object.preventExtensions(hasProp);
    Object.isSealed(hasProp); // === false

    // But make them all non-configurable
    // and the object becomes sealed.
    Object.defineProperty(hasProp, 'fee', {
      configurable: false
    });
    Object.isSealed(hasProp); // === true

    // The easiest way to seal an object, of course,
    // is Object.seal.
    var sealed = {};
    Object.seal(sealed);
    Object.isSealed(sealed); // === true

    // A sealed object is, by definition, non-extensible.
    Object.isExtensible(sealed); // === false

    // A sealed object might be frozen,
    // but it doesn't have to be.
    Object.isFrozen(sealed); // === true
    // (all properties also non-writable)

    var s2 = Object.seal({ p: 3 });
    Object.isFrozen(s2); // === false
    // ('p' is still writable)

    var s3 = Object.seal({ get p() { return 0; } });
    Object.isFrozen(s3); // === true
    // (only configurability matters for accessor properties)

### Non-object coercion

In ES5, if the argument to this method is not an object (a primitive), then it will cause a [`TypeError`](../typeerror). In ES2015, a non-object argument will be treated as if it was a sealed ordinary object, return `true`.

    Object.isSealed(1);
    // TypeError: 1 is not an object (ES5 code)

    Object.isSealed(1);
    // true                          (ES2015 code)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.issealed">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Object.isSealed' in that specification.</span></a></td></tr></tbody></table>

`isSealed`

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

-   [`Object.seal()`](seal)
-   [`Object.preventExtensions()`](preventextensions)
-   [`Object.isExtensible()`](isextensible)
-   [`Object.freeze()`](freeze)
-   [`Object.isFrozen()`](isfrozen)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed</a>
