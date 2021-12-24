# Symbol.species

The well-known symbol `Symbol.species` specifies a function-valued property that the constructor function uses to create derived objects.

## Description

The `species` accessor property allows subclasses to override the default constructor for objects.

Property attributes of `Symbol.species`

Writable

no

Enumerable

no

Configurable

no

## Examples

### Using species

You might want to return [`Array`](../array) objects in your derived array class `MyArray`. For example, when using methods such as [`map()`](../array/map) that return the default constructor, you want these methods to return a parent `Array` object, instead of the `MyArray` object. The `species` symbol lets you do this:

    class MyArray extends Array {
      // Overwrite species to the parent Array constructor
      static get [Symbol.species]() { return Array; }
    }
    let a = new MyArray(1,2,3);
    let mapped = a.map(x => x * x);

    console.log(mapped instanceof MyArray); // false
    console.log(mapped instanceof Array);   // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.species">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.species</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`species`

51

13

41

No

38

10

51

51

41

41

10

5.0

## See also

-   [`Map[@@species]`](../map/@@species)
-   [`Set[@@species]`](../set/@@species)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species</a>
