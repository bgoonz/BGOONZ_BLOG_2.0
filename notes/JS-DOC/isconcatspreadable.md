# Symbol.isConcatSpreadable

The `Symbol.isConcatSpreadable` well-known symbol is used to configure if an object should be flattened to its array elements when using the [`Array.prototype.concat()`](../array/concat) method.

## Description

The `@@isConcatSpreadable` symbol (`Symbol.isConcatSpreadable`) can be defined as an own or inherited property and its value is a boolean. It can control behavior for arrays and array-like objects:

-   For array objects, the default behavior is to spread (flatten) elements. `Symbol.isConcatSpreadable` can avoid flattening in these cases.
-   For array-like objects, the default behavior is no spreading or flattening. `Symbol.isConcatSpreadable` can force flattening in these cases.

Property attributes of `Symbol.isConcatSpreadable`

Writable

no

Enumerable

no

Configurable

no

## Examples

### Arrays

By default, [`Array.prototype.concat()`](../array/concat) spreads (flattens) arrays into its result:

    let alpha = ['a', 'b', 'c'],
    let numeric = [1, 2, 3]

    let alphaNumeric = alpha.concat(numeric)

    console.log(alphaNumeric)  // Result: ['a', 'b', 'c', 1, 2, 3]

When setting `Symbol.isConcatSpreadable` to `false`, you can disable the default behavior:

    let alpha = ['a', 'b', 'c'],
    let numeric = [1, 2, 3]

    numeric[Symbol.isConcatSpreadable] = false
    let alphaNumeric = alpha.concat(numeric)

    console.log(alphaNumeric)  // Result: ['a', 'b', 'c', [1, 2, 3] ]

### Array-like objects

For array-like objects, the default is to not spread. `Symbol.isConcatSpreadable` needs to be set to `true` in order to get a flattened array:

    let x = [1, 2, 3]

    let fakeArray = {
      [Symbol.isConcatSpreadable]: true,
      length: 2,
      0: 'hello',
      1: 'world'
    }

    x.concat(fakeArray)  // [1, 2, 3, "hello", "world"]

**Note:** The `length` property is used to control the number of object properties to be added. In the above example, `length:2` indicates two properties has to be added.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-symbol.isconcatspreadable">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-symbol.isconcatspreadable</span></a></td></tr></tbody></table>

`isConcatSpreadable`

48

15

48

No

35

10

48

48

48

35

10

5.0

## See also

-   [`Array.prototype.concat()`](../array/concat)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable</a>
