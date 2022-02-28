# Array.prototype.some()

The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

## Syntax

    // Arrow function
    some((element) => { ... } )
    some((element, index) => { ... } )
    some((element, index, array) => { ... } )

    // Callback function
    some(callbackFn)
    some(callbackFn, thisArg)

    // Inline callback function
    some(function callbackFn(element) { ... })
    some(function callbackFn(element, index) { ... })
    some(function callbackFn(element, index, array){ ... })
    some(function callbackFn(element, index, array) { ... }, thisArg)

### Parameters

`callback`  
A function to test for each element, taking three arguments:

`element`  
The current element being processed in the array.

`index`<span class="badge inline optional">Optional</span>  
The index of the current element being processed in the array.

`array`<span class="badge inline optional">Optional</span>  
The array `some()` was called upon.

`thisArg`<span class="badge inline optional">Optional</span>  
A value to use as `this` when executing `callbackFn`.

### Return value

`true` if the callback function returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value for at least one element in the array. Otherwise, `false`.

## Description

The `some()` method executes the `callbackFn` function once for each element present in the array until it finds the one where `callbackFn` returns a _truthy_ value (a value that becomes true when converted to a Boolean). If such an element is found, `some()` immediately returns `true`. Otherwise, `some()` returns `false`. `callbackFn` is invoked only for indexes of the array with assigned values. It is not invoked for indexes which have been deleted or which have never been assigned values.

`callbackFn` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `some()`, it will be used as the callback's `this` value. Otherwise, the value [`undefined`](../undefined) will be used as its `this` value. The `this` value ultimately observable by `callbackFn` is determined according to [the usual rules for determining the `this` seen by a function](../../operators/this).

`some()` does not mutate the array on which it is called.

The range of elements processed by `some()` is set before the first invocation of `callbackFn`. Elements appended to the array after the call to `some()` begins will not be visited by `callbackFn`. If an existing, unvisited element of the array is changed by `callbackFn`, its value passed to the visiting `callbackFn` will be the value at the time that `some()` visits that element's index. Elements that are deleted are not visited.

**Note:** Calling this method on an empty array returns `false` for any condition!

## Polyfill

`some()` was added to the ECMA-262 standard in the 5<sup>th</sup> edition, and it may not be present in all implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `some()` in implementations which do not natively support it.

This algorithm is exactly the one specified in ECMA-262, 5<sup>th</sup> edition, assuming [`Object`](../object) and [`TypeError`](../typeerror) have their original values and that `fun.call` evaluates to the original value of [`Function.prototype.call()`](../function/call).

    // Production steps of ECMA-262, Edition 5, 15.4.4.17
    // Reference: https://es5.github.io/#x15.4.4.17
    if (!Array.prototype.some) {
      Array.prototype.some = function(fun, thisArg) {
        'use strict';

        if (this == null) {
          throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if (typeof fun !== 'function') {
          throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
          if (i in t && fun.call(thisArg, t[i], i, t)) {
            return true;
          }
        }

        return false;
      };
    }

## Examples

### Testing value of array elements

The following example tests whether any element in the array is bigger than 10.

    function isBiggerThan10(element, index, array) {
      return element > 10;
    }

    [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
    [12, 5, 8, 1, 4].some(isBiggerThan10); // true

### Testing array elements using arrow functions

[Arrow functions](../../functions/arrow_functions) provide a shorter syntax for the same test.

    [2, 5, 8, 1, 4].some(x => x > 10);  // false
    [12, 5, 8, 1, 4].some(x => x > 10); // true

### Checking whether a value exists in an array

To mimic the function of the `includes()` method, this custom function returns `true` if the element exists in the array:

    const fruits = ['apple', 'banana', 'mango', 'guava'];

    function checkAvailability(arr, val) {
      return arr.some(function(arrVal) {
        return val === arrVal;
      });
    }

    checkAvailability(fruits, 'kela');   // false
    checkAvailability(fruits, 'banana'); // true

### Checking whether a value exists using an arrow function

    const fruits = ['apple', 'banana', 'mango', 'guava'];

    function checkAvailability(arr, val) {
      return arr.some(arrVal => val === arrVal);
    }

    checkAvailability(fruits, 'kela');   // false
    checkAvailability(fruits, 'banana'); // true

### Converting any value to Boolean

    const TRUTHY_VALUES = [true, 'true', 1];

    function getBoolean(value) {
      'use strict';

      if (typeof value === 'string') {
        value = value.toLowerCase().trim();
      }

      return TRUTHY_VALUES.some(function(t) {
        return t === value;
      });
    }

    getBoolean(false);   // false
    getBoolean('false'); // false
    getBoolean(1);       // true
    getBoolean('true');  // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.some">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.some</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`some`

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

-   [`Array.prototype.every()`](every)
-   [`Array.prototype.forEach()`](foreach)
-   [`Array.prototype.find()`](find)
-   [`TypedArray.prototype.some()`](../typedarray/some)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some</a>
