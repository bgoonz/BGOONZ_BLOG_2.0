# TypedArray.prototype.findIndex()

The `findIndex()` method returns an **index** in the typed array, if an element in the typed array satisfies the provided testing function. Otherwise -1 is returned.

See also the [`find()`](find) method, which returns the **value** of a found element in the typed array instead of its index.

## Syntax

    // Arrow function
    findIndex((element) => { ... } )
    findIndex((element, index) => { ... } )
    findIndex((element, index, array) => { ... } )

    // Callback function
    findIndex(callbackFn)
    findIndex(callbackFn, thisArg)

    // Inline callback function
    findIndex(function callbackFn(element) { ... })
    findIndex(function callbackFn(element, index) { ... })
    findIndex(function callbackFn(element, index, array){ ... })
    findIndex(function callbackFn(element, index, array) { ... }, thisArg)

### Parameters

`callbackFn`  
Function to execute on each value in the typed array, taking three arguments:

`element`  
The current element being processed in the typed array.

`index`  
The index of the current element being processed in the typed array.

`array`  
The typed array `findIndex()` was called upon.

`thisArg` <span class="badge inline optional">Optional</span>  
Object to use as `this` when executing `callbackFn`.

### Return value

An index in the array if an element passes the test; otherwise, `-1`.

## Description

The `findIndex()` method executes the `callbackFn` function once for each element present in the typed array until it finds one where `callbackFn` returns a true value. If such an element is found, `findIndex()` immediately returns the index of that element. Otherwise, `findIndex()` returns -1. `callbackFn` is invoked only for indexes of the typed array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

`callbackFn` is invoked with three arguments: the value of the element, the index of the element, and the typed array object being traversed.

If a `thisArg` parameter is provided to `findIndex()`, it will be used as the `this` for each invocation of the `callback`. If it is not provided, then [`undefined`](../undefined) is used.

`findIndex()` does not mutate the typed array on which it is called.

The range of elements processed by `findIndex()` is set before the first invocation of `callbackFn`. Elements that are appended to the typed array after the call to `findIndex()` begins will not be visited by `callbackFn`. If an existing, unvisited element of the typed array is changed by `callbackFn`, its value passed to the visiting `callbackFn` will be the value at the time that `findIndex()` visits that element's index; elements that are deleted are not visited.

## Examples

### Find the index of a prime number in a typed array

The following example finds the index of an element in the typed array that is a prime number (or returns `-1` if there is no prime number).

    function isPrime(element, index, array) {
      var start = 2;
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false;
        }
      }
      return element > 1;
    }

    var uint8 = new Uint8Array([4, 6, 8, 12]);
    var uint16 = new Uint16Array([4, 6, 7, 12]);

    console.log(uint8.findIndex(isPrime)); // -1, not found
    console.log(uint16.findIndex(isPrime)); // 2

## Polyfill

    TypedArray.prototype.findIndex = Array.prototype.findIndex = Array.prototype.findIndex || function(evaluator, thisArg) {
            'use strict';
            if (!this) {
              throw new TypeError('Array.prototype.some called on null or undefined');
            }

            if (typeof(evaluator) !== 'function') {
                if (typeof(evaluator) === 'string') {
                    // Attempt to convert it to a function
                    if ( ! (evaluator = eval(evaluator)) ){
                        throw new TypeError();
                    }
                } else {
                    throw new TypeError();
                }
            }

            var i;
            if (thisArg === undefined) {  // Optimize for thisArg
                for (i in this) {
                    if (evaluator(this[i], i, this)) {
                        return i;
                    }
                }
                return -1;
            }
            for (i in this) {
                if (evaluator.call(thisArg, this[i], i, this)) {
                    return i;
                }
            }
            return -1;
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="#">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-%typedarray%.prototype.findindex</span></a></td></tr></tbody></table>

`findIndex`

45

14

37

No

32

9.1

45

45

37

32

9.3

5.0

## See also

-   [`TypedArray.prototype.find()`](find)
-   [`TypedArray.prototype.indexOf()`](indexof)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex</a>
