# Array.prototype.flatMap()

The `flatMap()` method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a [`map()`](map) followed by a [`flat()`](flat) of depth 1, but slightly more efficient than calling those two methods separately.

## Syntax

    // Arrow function
    flatMap((currentValue) => { ... } )
    flatMap((currentValue, index) => { ... } )
    flatMap((currentValue, index, array) => { ... } )

    // Callback function
    flatMap(callbackFn)
    flatMap(callbackFn, thisArg)

    // Inline callback function
    flatMap(function callbackFn(currentValue) { ... })
    flatMap(function callbackFn(currentValue, index) { ... })
    flatMap(function callbackFn(currentValue, index, array){ ... })
    flatMap(function callbackFn(currentValue, index, array) { ... }, thisArg)

### Parameters

`callback`  
Function that produces an element of the new Array, taking three arguments:

`currentValue`  
The current element being processed in the array.

`index`<span class="badge inline optional">Optional</span>  
The index of the current element being processed in the array.

`array`<span class="badge inline optional">Optional</span>  
The array `map` was called upon.

`thisArg`<span class="badge inline optional">Optional</span>  
Value to use as `this` when executing `callback`.

### Return value

A new array with each element being the result of the callback function and flattened to a depth of 1.

## Description

See [`Array.prototype.map()`](map) for a detailed description of the callback function. The `flatMap` method is identical to a `map` followed by a call to `flat` of depth 1.

### Alternative

#### `reduce()` and `concat()`

    var arr = [1, 2, 3, 4];

    arr.flatMap(x => [x, x * 2]);
    // is equivalent to
    arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
    // [1, 2, 2, 4, 3, 6, 4, 8]

Note, however, that this is inefficient and should be avoided for large arrays: in each iteration, it creates a new temporary array that must be garbage-collected, and it copies elements from the current accumulator array into a new array instead of just adding the new elements to the existing array.

## Examples

### `map()` and `flatMap()`

    let arr1 = [1, 2, 3, 4];

    arr1.map(x => [x * 2]);
    // [[2], [4], [6], [8]]

    arr1.flatMap(x => [x * 2]);
    // [2, 4, 6, 8]

    // only one level is flattened
    arr1.flatMap(x => [[x * 2]]);
    // [[2], [4], [6], [8]]

While the above could have been achieved by using map itself, here is an example that better showcases the use of `flatMap`.

Let's generate a list of words from a list of sentences.

    let arr1 = ["it's Sunny in", "", "California"];

    arr1.map(x => x.split(" "));
    // [["it's","Sunny","in"],[""],["California"]]

    arr1.flatMap(x => x.split(" "));
    // ["it's","Sunny","in", "", "California"]

Notice, the output list length can be different from the input list length.

### For adding and removing items during a `map()`

`flatMap` can be used as a way to add and remove items (modify the number of items) during a `map`. In other words, it allows you to map _many items to many items_ (by handling each input item separately), rather than always _one-to-one_. In this sense, it works like the opposite of [filter](filter). Return a 1-element array to keep the item, a multiple-element array to add items, or a 0-element array to remove the item.

    // Let's say we want to remove all the negative numbers
    // and split the odd numbers into an even number and a 1
    let a = [5, 4, -3, 20, 17, -33, -4, 18]
    //       |\  \  x   |  | \   x   x   |
    //      [4,1, 4,   20, 16, 1,       18]

    a.flatMap( (n) =>
      (n < 0) ?      [] :
      (n % 2 == 0) ? [n] :
                     [n-1, 1]
    )

    // expected output: [4, 1, 4, 20, 16, 1, 18]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.flatmap">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.flatmap</span></a></td></tr></tbody></table>

`flatMap`

69

79

62

No

56

12

69

69

62

48

12

10.0

## See also

-   [`Array.prototype.flat()`](flat)
-   [`Array.prototype.map()`](map)
-   [`Array.prototype.reduce()`](reduce)
-   [`Array.prototype.concat()`](concat)
-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap</a>
