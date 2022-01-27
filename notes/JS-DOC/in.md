# in operator

The `in` returns `true` if the specified property is in the specified object or its prototype chain.

## Syntax

    prop in object

### Parameters

`prop`  
A string or symbol representing a property name or array index (non-symbols will be coerced to strings).

`object`  
Object to check if it (or its prototype chain) <span class="short_text">contains</span> the property with specified name (`prop`).

## Examples

### Basic usage

The following examples show some uses of the `in` operator.

    // Arrays
    let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
    0 in trees        // returns true
    3 in trees        // returns true
    6 in trees        // returns false
    'bay' in trees    // returns false (you must specify the index number, not the value at that index)
    'length' in trees // returns true (length is an Array property)
    Symbol.iterator in trees // returns true (arrays are iterable, works only in ES2015+)

    // Predefined objects
    'PI' in Math          // returns true

    // Custom objects
    let mycar = {make: 'Honda', model: 'Accord', year: 1998}
    'make' in mycar  // returns true
    'model' in mycar // returns true

You must specify an object on the right side of the `in` operator. For example, you can specify a string created with the `String` constructor, but you cannot specify a string literal.

    let color1 = new String('green')
    'length' in color1 // returns true

    let color2 = 'coral'
    // generates an error (color2 is not a String object)
    'length' in color2

### Using `in` with deleted or undefined properties

If you delete a property with the `delete` operator, the `in` operator returns `false` for that property.

    let mycar = {make: 'Honda', model: 'Accord', year: 1998}
    delete mycar.make
    'make' in mycar   // returns false

    let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')
    delete trees[3]
    3 in trees  // returns false

If you set a property to [`undefined`](../global_objects/undefined) but do not delete it, the `in` operator returns true for that property.

    let mycar = {make: 'Honda', model: 'Accord', year: 1998}
    mycar.make = undefined
    'make' in mycar   // returns true

    let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')
    trees[3] = undefined
    3 in trees  // returns true

The `in` operator will return `false` for empty array slots. Even if accessing it directly returns `undefined`.

    let empties = new Array(3)
    empties[2] // returns undefined
    2 in empties  // returns false

To avoid this, make sure a new array is always filled with non-empty values or not write to indexes past the end of array.

    let empties = new Array(3).fill(undefined)
    2 in empties  // returns true

### Inherited properties

The `in` operator returns `true` for properties in the prototype chain. (If you want to check for only _non-inherited_ properties, use [`Object.prototype.hasOwnProperty()`](../global_objects/object/hasownproperty) instead.)

    'toString' in {}  // returns true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-relational-operators">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-relational-operators</span></a></td></tr></tbody></table>

`in`

1

12

1

5.5

4

1

1

18

4

10.1

1

1.0

## See also

-   `for...in`
-   `delete`
-   [`Object.prototype.hasOwnProperty()`](../global_objects/object/hasownproperty)
-   [`Reflect.has()`](../global_objects/reflect/has)
-   [Enumerability and ownership of properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in</a>
