# Object.getOwnPropertySymbols()

The `Object.getOwnPropertySymbols()` method returns an array of all symbol properties found directly upon a given object.

## Syntax

    Object.getOwnPropertySymbols(obj)

### Parameters

`obj`  
The object whose symbol properties are to be returned.

### Return value

An array of all symbol properties found directly upon the given object.

## Description

Similar to [`Object.getOwnPropertyNames()`](getownpropertynames), you can get all symbol properties of a given object as an array of symbols. Note that [`Object.getOwnPropertyNames()`](getownpropertynames) itself does not contain the symbol properties of an object and only the string properties.

As all objects have no own symbol properties initially, `Object.getOwnPropertySymbols()` returns an empty array unless you have set symbol properties on your object.

## Examples

### Using getOwnPropertySymbols

    var obj = {};
    var a = Symbol('a');
    var b = Symbol.for('b');

    obj[a] = 'localSymbol';
    obj[b] = 'globalSymbol';

    var objectSymbols = Object.getOwnPropertySymbols(obj);

    console.log(objectSymbols.length); // 2
    console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
    console.log(objectSymbols[0]);     // Symbol(a)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-object.getownpropertysymbols">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-object.getownpropertysymbols</span></a></td></tr></tbody></table>

`getOwnPropertySymbols`

38

12

36

No

25

9

38

38

36

25

9

3.0

## See also

-   [`Object.getOwnPropertyNames()`](getownpropertynames)
-   [`Symbol`](../symbol)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols</a>
