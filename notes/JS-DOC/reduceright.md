# Array.prototype.reduceRight()

The `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

See also [`Array.prototype.reduce()`](reduce) for left-to-right.

## Syntax

    // Arrow function
    reduceRight((accumulator, currentValue) => { ... } )
    reduceRight((accumulator, currentValue, index) => { ... } )
    reduceRight((accumulator, currentValue, index, array) => { ... } )
    reduceRight((accumulator, currentValue, index, array) => { ... }, initialValue)

    // Callback function
    reduceRight(callbackFn)
    reduceRight(callbackFn, initialValue)

    // Callback reducer function
    reduceRight(function callbackFn(accumulator, currentValue) { ... })
    reduceRight(function callbackFn(accumulator, currentValue, index) { ... })
    reduceRight(function callbackFn(accumulator, currentValue, index, array){ ... })
    reduceRight(function callbackFn(accumulator, currentValue, index, array) { ... }, thisArg)

### Parameters

`callbackFn`  
Function to execute on each value in the array, taking four arguments:

`accumulator`  
The value previously returned in the last invocation of the callback, or `initialValue`, if supplied. (See below.)

`currentValue`  
The current element being processed in the array.

`index`<span class="badge inline optional">Optional</span>  
The index of the current element being processed in the array.

`array`<span class="badge inline optional">Optional</span>  
The array `reduceRight()` was called upon.

`initialValue` <span class="badge inline optional">Optional</span>  
Value to use as accumulator to the first call of the `callbackFn`. If no initial value is supplied, the last element in the array will be used and skipped. Calling reduce or reduceRight on an empty array without an initial value creates a `TypeError`.

### Return value

The value that results from the reduction.

## Description

`reduceRight` executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments: the initial value (or value from the previous callback call), the value of the current element, the current index, and the array over which iteration is occurring.

The call to the reduceRight `callbackFn` would look something like this:

    arr.reduceRight(function(accumulator, currentValue, index, array) {
      // ...
    });

The first time the function is called, the `accumulator` and `currentValue` can be one of two values. If an `initialValue` was provided in the call to `reduceRight`, then `accumulator` will be equal to `initialValue` and `currentValue` will be equal to the last value in the array. If no `initialValue` was provided, then `accumulator` will be equal to the last value in the array and `currentValue` will be equal to the second-to-last value.

If the array is empty and no `initialValue` was provided, [`TypeError`](../typeerror) would be thrown. If the array has only one element (regardless of position) and no `initialValue` was provided, or if `initialValue` is provided but the array is empty, the solo value would be returned without calling `callbackFn`.

Some example run-throughs of the function would look like this:

    [0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
      return accumulator + currentValue;
    });

The callback would be invoked four times, with the arguments and return values in each call being as follows:

<table><thead><tr class="header"><th><code>callback</code></th><th><code>accumulator</code></th><th><code>currentValue</code></th><th><code>index</code></th><th><code>array</code></th><th>return value</th></tr></thead><tbody><tr class="odd"><td>first call</td><td><code>4</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>7</code></td></tr><tr class="even"><td>second call</td><td><code>7</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>9</code></td></tr><tr class="odd"><td>third call</td><td><code>9</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr><tr class="even"><td>fourth call</td><td><code>10</code></td><td><code>0</code></td><td><code>0</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr></tbody></table>

The value returned by `reduceRight` would be that of the last callback invocation (`10`).

And if you were to provide an `initialValue`, the result would look like this:

    [0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
      return accumulator + currentValue;
    }, 10);

<table><thead><tr class="header"><th><code>callback</code></th><th><code>accumulator</code></th><th><code>currentValue</code></th><th><code>index</code></th><th><code>array</code></th><th>return value</th></tr></thead><tbody><tr class="odd"><td>first call</td><td><code>10</code></td><td><code>4</code></td><td><code>4</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>14</code></td></tr><tr class="even"><td>second call</td><td><code>14</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>17</code></td></tr><tr class="odd"><td>third call</td><td><code>17</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>19</code></td></tr><tr class="even"><td>fourth call</td><td><code>19</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>20</code></td></tr><tr class="odd"><td>fifth call</td><td><code>20</code></td><td><code>0</code></td><td><code>0</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>20</code></td></tr></tbody></table>

The value returned by `reduceRight` this time would be, of course, `20`.

## Polyfill

`reduceRight` was added to the ECMA-262 standard in the 5th edition; as such it may not be present in all implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `reduceRight` in implementations which do not natively support it.

    // Production steps of ECMA-262, Edition 5, 15.4.4.22
    // Reference: https://es5.github.io/#x15.4.4.22
    if ('function' !== typeof Array.prototype.reduceRight) {
      Array.prototype.reduceRight = function(callback /*, initialValue*/) {
        'use strict';
        if (null === this || 'undefined' === typeof this) {
          throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if ('function' !== typeof callback) {
          throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = len - 1, value;
        if (arguments.length >= 2) {
          value = arguments[1];
        } else {
          while (k >= 0 && !(k in t)) {
            k--;
          }
          if (k < 0) {
            throw new TypeError('Reduce of empty array with no initial value');
          }
          value = t[k--];
        }
        for (; k >= 0; k--) {
          if (k in t) {
            value = callback(value, t[k], k, t);
          }
        }
        return value;
      };
    }

## Examples

### Sum up all values within an array

    var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
      return a + b;
    });
    // sum is 6

### Flatten an array of arrays

    var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
        return a.concat(b);
    }, []);
    // flattened is [4, 5, 2, 3, 0, 1]

### Run a list of asynchronous functions with callbacks in series each passing their results to the next

    const waterfall = (...functions) => (callback, ...args) =>
      functions.reduceRight(
        (composition, fn) => (...results) => fn(composition, ...results),
        callback
      )(...args);

    const randInt = max => Math.floor(Math.random() * max)

    const add5 = (callback, x) => {
      setTimeout(callback, randInt(1000), x + 5);
    };
    const mult3 = (callback, x) => {
      setTimeout(callback, randInt(1000), x * 3);
    };
    const sub2 = (callback, x) => {
      setTimeout(callback, randInt(1000), x - 2);
    };
    const split = (callback, x) => {
      setTimeout(callback, randInt(1000), x, x);
    };
    const add = (callback, x, y) => {
      setTimeout(callback, randInt(1000), x + y);
    };
    const div4 = (callback, x) => {
      setTimeout(callback, randInt(1000), x / 4);
    };

    const computation = waterfall(add5, mult3, sub2, split, add, div4);
    computation(console.log, 5) // -> 14

    // same as:

    const computation2 = (input, callback) => {
      const f6 = x=> div4(callback, x);
      const f5 = (x, y) => add(f6, x, y);
      const f4 = x => split(f5, x);
      const f3 = x => sub2(f4, x);
      const f2 = x => mult3(f3, x);
      add5(f2, input);
    }

### Difference between `reduce` and `reduceRight`

    var a = ['1', '2', '3', '4', '5'];
    var left  = a.reduce(function(prev, cur)      { return prev + cur; });
    var right = a.reduceRight(function(prev, cur) { return prev + cur; });

    console.log(left);  // "12345"
    console.log(right); // "54321"

### Defining composable functions

Function composition is a mechanism for combining functions, in which the output of each function is passed into the next one, and the output of the last function is the final result. In this example we use `reduceRight()` to implement function composition.

See also [Function composition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) on Wikipedia.

    const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

    // Increment passed number
    const inc = (n) => n + 1

    // Doubles the passed value
    const double = (n) => n * 2

    // using composition function
    console.log(compose(double, inc)(2)); // 6

    // using composition function
    console.log(compose(inc, double)(2)); // 5

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.reduceright">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.reduceright</span></a></td></tr></tbody></table>

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

`ReduceRight`

3

12

3

9

10.5

5

≤37

18

4

14

4

1.0

## See also

-   [`Array.prototype.reduce()`](reduce)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight</a>
