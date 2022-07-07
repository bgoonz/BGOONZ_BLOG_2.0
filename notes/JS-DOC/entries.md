# Object.entries()

The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs, in the same order as that provided by a [`for...in`](../../statements/for...in) loop. (The only important difference is that a `for...in` loop enumerates properties in the prototype chain as well).

The order of the array returned by `Object.entries()` does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like `Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.

## Syntax

    Object.entries(obj)

### Parameters

`obj`  
The object whose own enumerable string-keyed property `[key, value]` pairs are to be returned.

### Return value

An array of the given object's own enumerable string-keyed property `[key, value]` pairs.

## Description

`Object.entries()` returns an array whose elements are arrays corresponding to the enumerable string-keyed property `[key, value]` pairs found directly upon `object`. The ordering of the properties is the same as that given by looping over the property values of the object manually.

## Polyfill

To add compatible `Object.entries()` support in older environments that do not natively support it, you can use any of the following:

-   a demonstration implementation of `Object.entries` in the [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) (if you don't need any support for IE);
-   a polyfill in the [es-shims/Object.entries](https://github.com/es-shims/Object.entries) repositories;
-   or, you can use the simple, ready-to-deploy polyfill listed below:

<!-- -->

    if (!Object.entries) {
      Object.entries = function( obj ){
        var ownProps = Object.keys( obj ),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
          resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
      };
    }

For the above polyfill code snippet, if you need support for IE&lt;9, then you will also need an `Object.keys()` polyfill (such as the one found on the [`Object.keys`](keys) page).

## Examples

    const obj = { foo: 'bar', baz: 42 };
    console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

    // array like object
    const obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

    // array like object with random key ordering
    const anObj = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

    // getFoo is property which isn't enumerable
    const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
    myObj.foo = 'bar';
    console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

    // non-object argument will be coerced to an object
    console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

    // returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
    console.log(Object.entries(100)); // [ ]

    // iterate through key-value gracefully
    const obj = { a: 5, b: 7, c: 9 };
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}${value}`); // "a 5", "b 7", "c 9"
    }

    // Or, using array extras
    Object.entries(obj).forEach(([key, value]) => {
      console.log(`${key}${value}`); // "a 5", "b 7", "c 9"
    });

### Converting an `Object` to a `Map`

The [`new Map()`](../map) constructor accepts an iterable of `entries`. With `Object.entries`, you can easily convert from [`Object`](../object) to [`Map`](../map):

    const obj = { foo: 'bar', baz: 42 };
    const map = new Map(Object.entries(obj));
    console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}

### Iterating through an `Object`

Using [Array Destructuring](../../operators/destructuring_assignment#array_destructuring), you can iterate through objects easily.

    const obj = { foo: 'bar', baz: 42 };
    Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.entries">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Object.entries' in that specification.</span></a></td></tr></tbody></table>

`entries`

54

14

47

No

41

10.1

54

54

47

41

10.3

6.0

## See also

-   [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
-   [`Object.keys()`](keys)
-   [`Object.values()`](values)
-   [`Object.prototype.propertyIsEnumerable()`](propertyisenumerable)
-   [`Object.create()`](create)
-   [`Object.fromEntries()`](fromentries)
-   [`Object.getOwnPropertyNames()`](getownpropertynames)
-   [`Map.prototype.entries()`](../map/entries)
-   [`Map.prototype.keys()`](../map/keys)
-   [`Map.prototype.values()`](../map/values)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries</a>
