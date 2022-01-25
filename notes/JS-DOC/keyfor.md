# Symbol.keyFor()

The `Symbol.keyFor(sym)` method retrieves a shared symbol key from the global symbol registry for the given symbol.

## Syntax

    Symbol.keyFor(sym);

### Parameters

`sym`  
Symbol, required. The symbol to find a key for.

### Return value

A string representing the key for the given symbol if one is found on the global registry; otherwise, [`undefined`](../undefined).

## Examples

### Using keyFor()

    var globalSym = Symbol.for('foo'); // create a new global symbol
    Symbol.keyFor(globalSym); // "foo"

    var localSym = Symbol();
    Symbol.keyFor(localSym); // undefined

    // well-known symbols are not symbols registered
    // in the global symbol registry
    Symbol.keyFor(Symbol.iterator) // undefined

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.keyfor">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.keyfor</span></a></td></tr></tbody></table>

`keyFor`

40

12

36

No

27

9

40

40

36

27

9

4.0

## See also

-   [`Symbol.for()`](for)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor</a>
