# Symbol.iterator

The well-known `Symbol.iterator` symbol specifies the default iterator for an object. Used by [`for...of`](../../statements/for...of).

## Description

Whenever an object needs to be iterated (such as at the beginning of a `for..of` loop), its `@@iterator` method is called with no arguments, and the returned **iterator** is used to obtain the values to be iterated.

Some built-in types have a default iteration behavior, while other types (such as [`Object`](../object)) do not. The built-in types with a `@@iterator` method are:

-   [`Array.prototype[@@iterator]()`](../array/@@iterator)
-   [`TypedArray.prototype[@@iterator]()`](../typedarray/@@iterator)
-   [`String.prototype[@@iterator]()`](../string/@@iterator)
-   [`Map.prototype[@@iterator]()`](../map/@@iterator)
-   [`Set.prototype[@@iterator]()`](../set/@@iterator)

See also [Iteration protocols](../../iteration_protocols) for more information.

Property attributes of `Symbol.iterator`

Writable

no

Enumerable

no

Configurable

no

## Examples

### User-defined iterables

We can make our own iterables like this:

    var myIterable = {}
    myIterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    [...myIterable] // [1, 2, 3]

Or iterables can be defined directly inside a class or object using a [computed property](../../operators/object_initializer#computed_property_names):

    class Foo {
      *[Symbol.iterator] () {
        yield 1;
        yield 2;
        yield 3;
      }
    }

    const someObj = {
      *[Symbol.iterator] () {
        yield 'a';
        yield 'b';
      }
    }

    console.log(...new Foo); // 1, 2, 3
    console.log(...someObj); // 'a', 'b'

### Non-well-formed iterables

If an iterable's `@@iterator` method does not return an iterator object, then it is a non-well-formed iterable. Using it as such is likely to result in runtime exceptions or buggy behavior:

    var nonWellFormedIterable = {}
    nonWellFormedIterable[Symbol.iterator] = () => 1
    [...nonWellFormedIterable] // TypeError: [] is not a function

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.iterator">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Symbol.iterator' in that specification.</span></a></td></tr></tbody></table>

`iterator`

43

12

36

No

30

10

43

43

36

30

10

4.0

## See also

-   [Iteration protocols](../../iteration_protocols)
-   [`Array.prototype[@@iterator]()`](../array/@@iterator)
-   [`TypedArray.prototype[@@iterator]()`](../typedarray/@@iterator)
-   [`String.prototype[@@iterator]()`](../string/@@iterator)
-   [`Map.prototype[@@iterator]()`](../map/@@iterator)
-   [`Set.prototype[@@iterator]()`](../set/@@iterator)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator</a>
