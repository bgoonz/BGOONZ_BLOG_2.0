# Array.prototype.every()

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

## Syntax

    // Arrow function
    every((element) => { ... } )
    every((element, index) => { ... } )
    every((element, index, array) => { ... } )

    // Callback function
    every(callbackFn)
    every(callbackFn, thisArg)

    // Inline callback function
    every(function callbackFn(element) { ... })
    every(function callbackFn(element, index) { ... })
    every(function callbackFn(element, index, array){ ... })
    every(function callbackFn(element, index, array) { ... }, thisArg)

### Parameters

`callbackFn`  
A function to test for each element, taking three arguments:

`element`  
The current element being processed in the array.

`index` <span class="badge inline optional">Optional</span>  
The index of the current element being processed in the array.

`array` <span class="badge inline optional">Optional</span>  
The array `every` was called upon.

`thisArg` <span class="badge inline optional">Optional</span>  
A value to use as `this` when executing `callbackFn`.

### Return value

`true` if the `callbackFn` function returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value for every array element. Otherwise, `false`.

## Description

The `every` method executes the provided `callbackFn` function once for each element present in the array until it finds the one where `callbackFn` returns a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value. If such an element is found, the `every` method immediately returns `false`. Otherwise, if `callbackFn` returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value for all elements, `every` returns `true`.

**Note:** Calling this method on an empty array will return `true` for any condition!

`callbackFn` is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, or which have never been assigned values.

`callbackFn` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every`, it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value. The `this` value ultimately observable by `callback` is determined according to [the usual rules for determining the `this` seen by a function](../../operators/this).

`every` does not mutate the array on which it is called.

The range of elements processed by `every` is set before the first invocation of `callbackFn`. Therefore, `callbackFn` will not run on elements that are appended to the array after the call to `every` begins. If existing elements of the array are changed, their value as passed to `callbackFn` will be the value at the time `every` visits them. Elements that are deleted are not visited.

`every` acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns `true`. (It is [vacuously true](https://en.wikipedia.org/wiki/Vacuous_truth) that all elements of the [empty set](https://en.wikipedia.org/wiki/Empty_set#Properties) satisfy any given condition.)

## Polyfill

`every` was added to the ECMA-262 standard in the 5<sup>th</sup> edition, and it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `every` in implementations which do not natively support it.

This algorithm is exactly the one specified in ECMA-262, 5<sup>th</sup> edition, assuming `Object` and `TypeError` have their original values, and that `callbackfn.call` evaluates to the original value of [`Function.prototype.call`](../function/call).

    if (!Array.prototype.every) {
      Array.prototype.every = function(callbackfn, thisArg) {
        'use strict';
        var T, k;

        if (this == null) {
          throw new TypeError('this is null or not defined');
        }

        // 1. Let O be the result of calling ToObject passing the this
        //    value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal method
        //    of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
        if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
          throw new TypeError();
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 1) {
          T = thisArg;
        }

        // 6. Let k be 0.
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {

          var kValue;

          // a. Let Pk be ToString(k).
          //   This is implicit for LHS operands of the in operator
          // b. Let kPresent be the result of calling the HasProperty internal
          //    method of O with argument Pk.
          //   This step can be combined with c
          // c. If kPresent is true, then
          if (k in O) {
            var testResult;
            // i. Let kValue be the result of calling the Get internal method
            //    of O with argument Pk.
            kValue = O[k];

            // ii. Let testResult be the result of calling the Call internal method
            // of callbackfn with T as the this value if T is not undefined
            // else is the result of calling callbackfn
            // and argument list containing kValue, k, and O.
            if(T) testResult = callbackfn.call(T, kValue, k, O);
            else testResult = callbackfn(kValue,k,O)

            // iii. If ToBoolean(testResult) is false, return false.
            if (!testResult) {
              return false;
            }
          }
          k++;
        }
        return true;
      };
    }

## Examples

### Testing size of all array elements

The following example tests whether all elements in the array are bigger than 10.

    function isBigEnough(element, index, array) {
      return element >= 10;
    }
    [12, 5, 8, 130, 44].every(isBigEnough);   // false
    [12, 54, 18, 130, 44].every(isBigEnough); // true

### Using arrow functions

[Arrow functions](../../functions/arrow_functions) provide a shorter syntax for the same test.

    [12, 5, 8, 130, 44].every(x => x >= 10);   // false
    [12, 54, 18, 130, 44].every(x => x >= 10); // true

### Affecting Initial Array (modifying, appending, and deleting)

The following examples tests the behavior of the `every` method when the array is modified.

    // ---------------
    // Modifying items
    // ---------------
    let arr = [1, 2, 3, 4];
    arr.every( (elem, index, arr) => {
      arr[index+1] -= 1
      console.log(`[${arr}][${index}] -> ${elem}`)
      return elem < 2
    })

    // Loop runs for 3 iterations, but would
    // have run 2 iterations without any modification
    //
    // 1st iteration: [1,1,3,4][0] -> 1
    // 2nd iteration: [1,1,2,4][1] -> 1
    // 3rd iteration: [1,1,2,3][2] -> 2

    // ---------------
    // Appending items
    // ---------------
    arr = [1, 2, 3];
    arr.every( (elem, index, arr) => {
      arr.push('new')
      console.log(`[${arr}][${index}] -> ${elem}`)
      return elem < 4
    })

    // Loop runs for 3 iterations, even after appending new items
    //
    // 1st iteration: [1, 2, 3, new][0] -> 1
    // 2nd iteration: [1, 2, 3, new, new][1] -> 2
    // 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

    // ---------------
    // Deleting items
    // ---------------
    arr = [1, 2, 3, 4];
    arr.every( (elem, index, arr) => {
      arr.pop()
      console.log(`[${arr}][${index}] -> ${elem}`)
      return elem < 4
    })

    // Loop runs for 2 iterations only, as the remaining
    // items are `pop()`ed off
    //
    // 1st iteration: [1,2,3][0] -> 1
    // 2nd iteration: [1,2][1] -> 2

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.every">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.every</span></a></td></tr></tbody></table>

`every`

1

12

1.5

9

9.5

3

≤37

18

4

10.1

1

1.0

## See also

-   [`Array.prototype.forEach()`](foreach)
-   [`Array.prototype.some()`](some)
-   [`Array.prototype.find()`](find)
-   [`TypedArray.prototype.every()`](../typedarray/every)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every</a>
