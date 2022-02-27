# Reflect.isExtensible()

The static `Reflect.isExtensible()` method determines if an object is extensible (whether it can have new properties added to it). It is similar to [`Object.isExtensible()`](../object/isextensible), but with some [differences](#difference_to_object.isextensible).

## Syntax

    Reflect.isExtensible(target)

### Parameters

`target`  
The target object which to check if it is extensible.

### Return value

A [`Boolean`](../boolean) indicating whether or not the target is extensible.

### Exceptions

A [`TypeError`](../typeerror), if `target` is not an [`Object`](../object).

## Description

The `Reflect.isExtensible` method allows you determine if an object is extensible (whether it can have new properties added to it). It is the same method as [`Object.isExtensible()`](../object/isextensible).

## Examples

### Using Reflect.isExtensible()

See also [`Object.isExtensible()`](../object/isextensible).

    // New objects are extensible.
    let empty = {}
    Reflect.isExtensible(empty)  // === true

    // ...but that can be changed.
    Reflect.preventExtensions(empty)
    Reflect.isExtensible(empty)  // === false

    // Sealed objects are by definition non-extensible.
    let sealed = Object.seal({})
    Reflect.isExtensible(sealed)  // === false

    // Frozen objects are also by definition non-extensible.
    let frozen = Object.freeze({})
    Reflect.isExtensible(frozen)  // === false

### Difference to Object.isExtensible()

If the `target` argument to this method is not an object (a primitive), then it will cause a [`TypeError`](../typeerror). With [`Object.isExtensible()`](../object/isextensible), a non-object first argument will be coerced to an object at first.

    Reflect.isExtensible(1)
    // TypeError: 1 is not an object

    Object.isExtensible(1)
    // false

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-reflect.isextensible">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-reflect.isextensible</span></a></td></tr></tbody></table>

`isExtensible`

49

12

42

No

36

10

49

49

42

36

10

5.0

## See also

-   [`Reflect`](../reflect)
-   [`Object.isExtensible()`](../object/isextensible)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible</a>
