# Object.fromEntries()

The `Object.fromEntries()` method transforms a list of key-value pairs into an object.

## Syntax

    Object.fromEntries(iterable);

### Parameters

`iterable`  
An iterable such as [`Array`](../array) or [`Map`](../map) or other objects implementing the [iterable protocol](../../iteration_protocols#the_iterable_protocol).

### Return value

A new object whose properties are given by the entries of the iterable.

## Description

The `Object.fromEntries()` method takes a list of key-value pairs and returns a new object whose properties are given by those entries. The iterable argument is expected to be an object that implements an `@@iterator` method, that returns an iterator object, that produces a two element array-like object, whose first element is a value that will be used as a property key, and whose second element is the value to associate with that property key.

`Object.fromEntries()` performs the reverse of [`Object.entries()`](entries).

## Examples

### Converting a Map to an Object

With `Object.fromEntries`, you can convert from [`Map`](../map) to [`Object`](../object):

    const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
    const obj = Object.fromEntries(map);
    console.log(obj); // { foo: "bar", baz: 42 }

### Converting an Array to an Object

With `Object.fromEntries`, you can convert from [`Array`](../array) to [`Object`](../object):

    const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
    const obj = Object.fromEntries(arr);
    console.log(obj); // { 0: "a", 1: "b", 2: "c" }

### Object transformations

With `Object.fromEntries`, its reverse method [`Object.entries()`](entries), and [array manipulation methods](../array#methods_2), you are able to transform objects like this:

    const object1 = { a: 1, b: 2, c: 3 };

    const object2 = Object.fromEntries(
      Object.entries(object1)
      .map(([ key, val ]) => [ key, val * 2 ])
    );

    console.log(object2);
    // { a: 2, b: 4, c: 6 }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.fromentries">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-object.fromentries</span></a></td></tr></tbody></table>

`fromEntries`

73

79

63

No

60

12.1

73

73

63

No

12.2

No

## See also

-   [`Object.entries()`](entries)
-   [`Object.keys()`](keys)
-   [`Object.values()`](values)
-   [`Map.prototype.entries()`](../map/entries)
-   [`Map.prototype.keys()`](../map/keys)
-   [`Map.prototype.values()`](../map/values)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries</a>
