# Symbol.hasInstance

The `Symbol.hasInstance` well-known symbol is used to determine if a constructor object recognizes an object as its instance. The [`instanceof`](../../operators/instanceof) operator's behavior can be customized by this symbol.

Property attributes of `Symbol.hasInstance`

Writable

no

Enumerable

no

Configurable

no

## Examples

### Custom instanceof behavior

You could implement your custom `instanceof` behavior like this, for example:

    class MyArray {
      static [Symbol.hasInstance](instance) {
        return Array.isArray(instance)
      }
    }
    console.log([] instanceof MyArray); // true

    function MyArray() { }
    Object.defineProperty(MyArray, Symbol.hasInstance, {
      value: function(instance) { return Array.isArray(instance); }
    });
    console.log([] instanceof MyArray); // true

### Checking the instance of an object

Just in the same manner at which you can check if an object is an instance of a class using the `instanceof` keyword, we can also use `Symbol.hasInstance` for such checks also.

    class Animal {
      constructor() {}
    }

    const cat = new Animal();

    console.log(Animal[Symbol.hasInstance](cat)); // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.hasinstance">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.hasinstance</span></a></td></tr></tbody></table>

`hasInstance`

50

15

50

No

37

10

50

50

50

37

10

5.0

## See also

-   [`instanceof`](../../operators/instanceof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance</a>
