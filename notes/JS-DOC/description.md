# Symbol.prototype.description

The read-only `description` property is a string returning the optional description of [`Symbol`](../symbol) objects.

## Description

[`Symbol`](../symbol) objects can be created with an optional description which can be used for debugging but not to access the symbol itself. The `Symbol.prototype.description` property can be used to read that description. It is different to `Symbol.prototype.toString()` as it does not contain the enclosing "`Symbol()`" string. See the examples.

## Examples

### Using description

    Symbol('desc').toString();   // "Symbol(desc)"
    Symbol('desc').description;  // "desc"
    Symbol('').description;      // ""
    Symbol().description;        // undefined

    // well-known symbols
    Symbol.iterator.toString();  // "Symbol(Symbol.iterator)"
    Symbol.iterator.description; // "Symbol.iterator"

    // global symbols
    Symbol.for('foo').toString();  // "Symbol(foo)"
    Symbol.for('foo').description; // "foo"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.prototype.description">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.prototype.description</span></a></td></tr></tbody></table>

`description`

70

79

63

No

57

12.1

12

No support for an undefined description.

70

70

63

49

12.2

12

No support for an undefined description.

10.0

## See also

-   [`Symbol.prototype.toString()`](tostring)
-   Polyfill: <https://npmjs.com/symbol.prototype.description>

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description</a>
