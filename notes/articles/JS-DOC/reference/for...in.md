
## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-for-in-and-for-of-statements">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-for-in-and-for-of-statements</span></a></td></tr></tbody></table>

`for...in`

1

12

1

6

2

1

1

18

4

10.1

1

1.0

### Compatibility: Initializer expressions in strict mode

Prior to Firefox 40, it was possible to use an initializer expression (`i=0`) in a `for...in` loop:

    var obj = {a: 1, b: 2, c: 3};
    for (var i = 0 in obj) {
      console.log(obj[i]);
    }
    // 1
    // 2
    // 3

This nonstandard behavior is now ignored in version 40 and later, and will present a [`SyntaxError`](../global_objects/syntaxerror) ("[for-in loop head declarations may not have initializers](../errors/invalid_for-in_initializer)") error in [strict mode](../strict_mode) ([bug 748550](https://bugzilla.mozilla.org/show_bug.cgi?id=748550) and [bug 1164741](https://bugzilla.mozilla.org/show_bug.cgi?id=1164741)).

Other engines such as v8 (Chrome), Chakra (IE/Edge), and JSC (WebKit/Safari) are investigating whether to remove the nonstandard behavior as well.

## See also

-   [`for...of`](for...of) - a similar statement that iterates over the property _values_
-   <span class="page-not-created">`for each...in`</span> - a similar but deprecated statement that iterates over the values of an object's properties, rather than the property names themselves
-   [`for`](for)
-   [Iterators and Generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (usable with `for...of` syntax)
-   [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
-   [`Object.getOwnPropertyNames()`](../global_objects/object/getownpropertynames)
-   [`Object.prototype.hasOwnProperty()`](../global_objects/object/hasownproperty)
-   [`Array.prototype.forEach()`](../global_objects/array/foreach)

 
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in</a>
