# Array.prototype.find()

The `find()` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, [`undefined`](../undefined) is returned.

-   If you need the **index** of the found element in the array, use [`findIndex()`](findindex).
-   If you need to find the **index of a value**, use [`Array.prototype.indexOf()`](indexof). (It's similar to [`findIndex()`](findindex), but checks each element for equality with the value instead of using a testing function.)
-   If you need to find if a value **exists** in an array, use [`Array.prototype.includes()`](includes). Again, it checks each element for equality with the value instead of using a testing function.
-   If you need to find if any element satisfies the provided testing function, use [`Array.prototype.some()`](some).

## Syntax

    // Arrow function
    find((element) => { ... } )
    find((element, index) => { ... } )
    find((element, index, array) => { ... } )

    // Callback function
    find(callbackFn)
    find(callbackFn, thisArg)

    // Inline callback function
    find(function callbackFn(element) { ... })
    find(function callbackFn(element, index) { ... })
    find(function callbackFn(element, index, array){ ... })
    find(function callbackFn(element, index, array) { ... }, thisArg)

### Parameters

`callbackFn`  
Function to execute on each value in the array, taking 3 arguments:

`element`  
The current element in the array.

`index` <span class="badge inline optional">Optional</span>  
The index (position) of the current element in the array.

`array` <span class="badge inline optional">Optional</span>  
The array that `find` was called on.

`thisArg` <span class="badge inline optional">Optional</span>  
Object to use as [`this`](../../operators/this) inside `callbackFn`.

### Return value

The **value** of the **first element** in the array that satisfies the provided testing function. Otherwise, [`undefined`](../undefined) is returned.

## Description

The `find` method executes the `callbackFn` function once for each index of the array until the `callbackFn` returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value. If so, `find` immediately returns the value of that element. Otherwise, `find` returns [`undefined`](../undefined).

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values. This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `find`, it will be used as the `this` value inside each invocation of the `callbackFn`. If it is not provided, then [`undefined`](../undefined) is used.

The `find` method does not mutate the array on which it is called, but the function provided to `callbackFn` can. If so, the elements processed by `find` are set _before_ the first invocation of `callbackFn`. Therefore:

-   `callbackFn` will not visit any elements added to the array after the call to `find` begins.
-   If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `find` visits that element's index.
-   Elements that are [`deleted`](../../operators/delete) are still visited.

## Examples

### Find an object in an array by one of its properties

    const inventory = [
      {name: 'apples', quantity: 2},
      {name: 'bananas', quantity: 0},
      {name: 'cherries', quantity: 5}
    ];

    function isCherries(fruit) {
      return fruit.name === 'cherries';
    }

    console.log(inventory.find(isCherries));
    // { name: 'cherries', quantity: 5 }

#### Using arrow function and destructuring

    const inventory = [
      {name: 'apples', quantity: 2},
      {name: 'bananas', quantity: 0},
      {name: 'cherries', quantity: 5}
    ];

    const result = inventory.find( ({ name }) => name === 'cherries' );

    console.log(result) // { name: 'cherries', quantity: 5 }

### Find a prime number in an array

The following example finds an element in the array that is a prime number (or returns [`undefined`](../undefined) if there is no prime number):

    function isPrime(element, index, array) {
      let start = 2;
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false;
        }
      }
      return element > 1;
    }

    console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
    console.log([4, 5, 8, 12].find(isPrime)); // 5

The following examples show that nonexistent and deleted elements _are_ visited, and that the value passed to the callback is their value when visited:

    // Declare array with no elements at indexes 2, 3, and 4
    const array = [0,1,,,,5,6];

    // Shows all indexes, not just those with assigned values
    array.find(function(value, index) {
      console.log('Visited index ', index, ' with value ', value);
    });

    // Shows all indexes, including deleted
    array.find(function(value, index) {
      // Delete element 5 on first iteration
      if (index === 0) {
        console.log('Deleting array[5] with value ', array[5]);
        delete array[5];
      }
      // Element 5 is still visited even though deleted
      console.log('Visited index ', index, ' with value ', value);
    });
    // expected output:
    // Deleting array[5] with value 5
    // Visited index 0 with value 0
    // Visited index 1 with value 1
    // Visited index 2 with value undefined
    // Visited index 3 with value undefined
    // Visited index 4 with value undefined
    // Visited index 5 with value undefined
    // Visited index 6 with value 6

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.find">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.find</span></a></td></tr></tbody></table>

`find`

45

12

25

No

32

8

45

45

4

32

8

5.0

## See also

-   [`Array.prototype.findIndex()`](findindex) – find and return an index
-   [`Array.prototype.includes()`](includes) – test whether a value exists in the array
-   [`Array.prototype.filter()`](filter) – remove all non-matching elements
-   [`Array.prototype.every()`](every) – test all elements
-   [`Array.prototype.some()`](some) – test until one element matches

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find</a>
