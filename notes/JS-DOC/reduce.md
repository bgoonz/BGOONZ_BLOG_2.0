# Array.prototype.reduce()

The `reduce()` method executes a **reducer** function (that you provide) on each element of the array, resulting in a single output value.

The **reducer** function takes four arguments:

1.  Accumulator
2.  Current Value
3.  Current Index
4.  Source Array

Your **reducer** function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

## Syntax

    // Arrow function
    reduce((accumulator, currentValue) => { ... } )
    reduce((accumulator, currentValue, index) => { ... } )
    reduce((accumulator, currentValue, index, array) => { ... } )
    reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

    // Reducer function
    reduce(reducerFn)
    reduce(reducerFn, initialValue)

    // Inline reducer function
    reduce(function reducerFn(accumulator, currentValue) { ... })
    reduce(function reducerFn(accumulator, currentValue, index) { ... })
    reduce(function reducerFn(accumulator, currentValue, index, array){ ... })
    reduce(function reducerFn(accumulator, currentValue, index, array) { ... }, initialValue)

### Parameters

`callback`  
A function to execute on each element in the array (except for the first, if no `initialValue` is supplied).

It takes four arguments:

`accumulator`  
The accumulator accumulates callback's return values. It is the accumulated value previously returned in the last invocation of the callback—or `initialValue`, if it was supplied (see below).

`currentValue`  
The current element being processed in the array.

`index` <span class="badge inline optional">Optional</span>  
The index of the current element being processed in the array. Starts from index `0` if an `initialValue` is provided. Otherwise, it starts from index `1`.

`array` <span class="badge inline optional">Optional</span>  
The array `reduce()` was called upon.

`initialValue` <span class="badge inline optional">Optional</span>  
A value to use as the first argument to the first call of the `callback`. If no `initialValue` is supplied, the first element in the array will be used as the initial `accumulator` value and skipped as `currentValue`. Calling `reduce()` on an empty array without an `initialValue` will throw a [`TypeError`](../typeerror).

### Return value

The single value that results from the reduction.

## Description

The `reduce()` method executes the `callback` once for each assigned value present in the array, taking four arguments:

1.  `accumulator`
2.  `currentValue`
3.  `currentIndex`
4.  `array`

The first time the callback is called, `accumulator` and `currentValue` can be one of two values. If `initialValue` is provided in the call to `reduce()`, then `accumulator` will be equal to `initialValue`, and `currentValue` will be equal to the first value in the array. If no `initialValue` is provided, then `accumulator` will be equal to the first value in the array, and `currentValue` will be equal to the second.

**Note:** If `initialValue` is not provided, `reduce()` will execute the callback function starting at index `1`, skipping the first index. If `initialValue` is provided, it will start at index `0`.

If the array is empty and no `initialValue` is provided, [`TypeError`](../typeerror) will be thrown.

If the array only has one element (regardless of position) and no `initialValue` is provided, or if `initialValue` is provided but the array is empty, the solo value will be returned _without_ calling _`callback`._

It is almost always safer to provide an `initialValue`, because there can be up to _four_ possible output types without `initialValue`, as shown in the following example:

    let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
    let maxCallback2 = ( max, cur ) => Math.max( max, cur );

    // reduce without initialValue
    [ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN
    [ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
    [ { x: 2 }                       ].reduce( maxCallback ); // { x: 2 }
    [                                ].reduce( maxCallback ); // TypeError

    // map & reduce with initialValue; better solution, also works for empty or larger arrays
    [ { x: 22 }, { x: 42 } ].map( el => el.x )
                            .reduce( maxCallback2, -Infinity );

### How reduce() works

Suppose the following use of `reduce()` occurred:

    [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
      return accumulator + currentValue
    })

The callback would be invoked four times, with the arguments and return values in each call being as follows:

<table><thead><tr class="header"><th><code>callback</code> iteration</th><th><code>accumulator</code></th><th><code>currentValue</code></th><th><code>currentIndex</code></th><th><code>array</code></th><th>return value</th></tr></thead><tbody><tr class="odd"><td>first call</td><td><code>0</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>1</code></td></tr><tr class="even"><td>second call</td><td><code>1</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>3</code></td></tr><tr class="odd"><td>third call</td><td><code>3</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>6</code></td></tr><tr class="even"><td>fourth call</td><td><code>6</code></td><td><code>4</code></td><td><code>4</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr></tbody></table>

The value returned by `reduce()` would be that of the last callback invocation (`10`).

You can also provide an [Arrow Function](../../functions/arrow_functions) instead of a full function. The code below will produce the same output as the code in the block above:

    [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue )

If you were to provide an `initialValue` as the second argument to `reduce()`, the result would look like this:

    [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue
    }, 10)

<table><thead><tr class="header"><th><code>callback</code> iteration</th><th><code>accumulator</code></th><th><code>currentValue</code></th><th><code>currentIndex</code></th><th><code>array</code></th><th>return value</th></tr></thead><tbody><tr class="odd"><td>first call</td><td><code>10</code></td><td><code>0</code></td><td><code>0</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>10</code></td></tr><tr class="even"><td>second call</td><td><code>10</code></td><td><code>1</code></td><td><code>1</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>11</code></td></tr><tr class="odd"><td>third call</td><td><code>11</code></td><td><code>2</code></td><td><code>2</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>13</code></td></tr><tr class="even"><td>fourth call</td><td><code>13</code></td><td><code>3</code></td><td><code>3</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>16</code></td></tr><tr class="odd"><td>fifth call</td><td><code>16</code></td><td><code>4</code></td><td><code>4</code></td><td><code>[0, 1, 2, 3, 4]</code></td><td><code>20</code></td></tr></tbody></table>

The value returned by `reduce()` in this case would be `20`.

## Polyfill

    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: https://es5.github.io/#x15.4.4.21
    // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
    if (!Array.prototype.reduce) {
      Object.defineProperty(Array.prototype, 'reduce', {
        value: function(callback /*, initialValue*/) {
          if (this === null) {
            throw new TypeError( 'Array.prototype.reduce ' +
              'called on null or undefined' );
          }
          if (typeof callback !== 'function') {
            throw new TypeError( callback +
              ' is not a function');
          }

          // 1. Let O be ? ToObject(this value).
          var o = Object(this);

          // 2. Let len be ? ToLength(? Get(O, "length")).
          var len = o.length >>> 0;

          // Steps 3, 4, 5, 6, 7
          var k = 0;
          var value;

          if (arguments.length >= 2) {
            value = arguments[1];
          } else {
            while (k < len && !(k in o)) {
              k++;
            }

            // 3. If len is 0 and initialValue is not present,
            //    throw a TypeError exception.
            if (k >= len) {
              throw new TypeError( 'Reduce of empty array ' +
                'with no initial value' );
            }
            value = o[k++];
          }

          // 8. Repeat, while k < len
          while (k < len) {
            // a. Let Pk be ! ToString(k).
            // b. Let kPresent be ? HasProperty(O, Pk).
            // c. If kPresent is true, then
            //    i.  Let kValue be ? Get(O, Pk).
            //    ii. Let accumulator be ? Call(
            //          callbackfn, undefined,
            //          « accumulator, kValue, k, O »).
            if (k in o) {
              value = callback(value, o[k], k, o);
            }

            // d. Increase k by 1.
            k++;
          }

          // 9. Return accumulator.
          return value;
        }
      });
    }

**Note:** If you need to support truly obsolete JavaScript engines that do not support [`Object.defineProperty()`](../object/defineproperty), it is best not to polyfill `Array.prototype` methods at all, as you cannot make them **non-enumerable**.

## Examples

### Sum all the values of an array

    let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
    // sum is 6

Alternatively written with an arrow function:

    let total = [ 0, 1, 2, 3 ].reduce(
      ( accumulator, currentValue ) => accumulator + currentValue,
      0
    )

### Sum of values in an object array

To sum up the values contained in an array of objects, you **must** supply an `initialValue`, so that each item passes through your function.

    let initialValue = 0
    let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x
    }, initialValue)

    console.log(sum) // logs 6

Alternatively written with an arrow function:

    let initialValue = 0
    let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
        (accumulator, currentValue) => accumulator + currentValue.x
        , initialValue
    )

    console.log(sum) // logs 6

### Flatten an array of arrays

    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
      function(accumulator, currentValue) {
        return accumulator.concat(currentValue)
      },
      []
    )
    // flattened is [0, 1, 2, 3, 4, 5]

Alternatively written with an arrow function:

    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
      ( accumulator, currentValue ) => accumulator.concat(currentValue),
      []
    )

### Counting instances of values in an object

    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

    let countedNames = names.reduce(function (allNames, name) {
      if (name in allNames) {
        allNames[name]++
      }
      else {
        allNames[name] = 1
      }
      return allNames
    }, {})
    // countedNames is:
    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

### Grouping objects by a property

    let people = [
      { name: 'Alice', age: 21 },
      { name: 'Max', age: 20 },
      { name: 'Jane', age: 20 }
    ];

    function groupBy(objectArray, property) {
      return objectArray.reduce(function (acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj)
        return acc
      }, {})
    }

    let groupedPeople = groupBy(people, 'age')
    // groupedPeople is:
    // {
    //   20: [
    //     { name: 'Max', age: 20 },
    //     { name: 'Jane', age: 20 }
    //   ],
    //   21: [{ name: 'Alice', age: 21 }]
    // }

### Bonding arrays contained in an array of objects using the spread operator and initialValue

    // friends - an array of objects
    // where object field "books" is a list of favorite books
    let friends = [{
      name: 'Anna',
      books: ['Bible', 'Harry Potter'],
      age: 21
    }, {
      name: 'Bob',
      books: ['War and peace', 'Romeo and Juliet'],
      age: 26
    }, {
      name: 'Alice',
      books: ['The Lord of the Rings', 'The Shining'],
      age: 18
    }]

    // allbooks - list which will contain all friends' books +
    // additional list contained in initialValue
    let allbooks = friends.reduce(function(accumulator, currentValue) {
      return [...accumulator, ...currentValue.books]
    }, ['Alphabet'])

    // allbooks = [
    //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
    //   'Romeo and Juliet', 'The Lord of the Rings',
    //   'The Shining'
    // ]

### Remove duplicate items in an array

**Note:** If you are using an environment compatible with [`Set`](../set) and [`Array.from()`](from), you could use `let orderedArray = Array.from(new Set(myArray))` to get an array where duplicate items have been removed.

    let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
    let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue)
      }
      return accumulator
    }, [])

    console.log(myOrderedArray)

### Replace .filter().map() with .reduce()

Using [`Array.filter()`](filter) then [`Array.map()`](map) traverses the array twice, but you can achieve the same effect while traversing only once with [`Array.reduce()`](reduce), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with [`Array.forEach()`](foreach)).

    const numbers = [-5, 6, 2, 0,];

    const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
      if (currentValue > 0) {
        const doubled = currentValue * 2;
        accumulator.push(doubled);
      }
      return accumulator;
    }, []);

    console.log(doubledPositiveNumbers); // [12, 4]

### Running Promises in Sequence

    /**
     * Runs promises from array of functions that can return promises
     * in chained manner
     *
     * @param {array} arr - promise arr
     * @return {Object} promise object
     */
    function runPromiseInSequence(arr, input) {
      return arr.reduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input)
      )
    }

    // promise function 1
    function p1(a) {
      return new Promise((resolve, reject) => {
        resolve(a * 5)
      })
    }

    // promise function 2
    function p2(a) {
      return new Promise((resolve, reject) => {
        resolve(a * 2)
      })
    }

    // function 3  - will be wrapped in a resolved promise by .then()
    function f3(a) {
     return a * 3
    }

    // promise function 4
    function p4(a) {
      return new Promise((resolve, reject) => {
        resolve(a * 4)
      })
    }

    const promiseArr = [p1, p2, f3, p4]
    runPromiseInSequence(promiseArr, 10)
      .then(console.log)   // 1200

### Function composition enabling piping

    // Building-blocks to use for composition
    const double = x => x + x
    const triple = x => 3 * x
    const quadruple = x => 4 * x

    // Function composition enabling pipe functionality
    const pipe = (...functions) => input => functions.reduce(
        (acc, fn) => fn(acc),
        input
    )

    // Composed functions for multiplication of specific values
    const multiply6 = pipe(double, triple)
    const multiply9 = pipe(triple, triple)
    const multiply16 = pipe(quadruple, quadruple)
    const multiply24 = pipe(double, triple, quadruple)

    // Usage
    multiply6(6)   // 36
    multiply9(9)   // 81
    multiply16(16) // 256
    multiply24(10) // 240

### Write map using reduce

    if (!Array.prototype.mapUsingReduce) {
      Array.prototype.mapUsingReduce = function(callback, initialValue) {
        return this.reduce(function(mappedArray, currentValue, index, array) {
          mappedArray[index] = callback.call(initialValue, currentValue, index, array)
          return mappedArray
        }, [])
      }
    }

    [1, 2, , 3].mapUsingReduce(
      (currentValue, index, array) => currentValue + index + array.length
    ) // [5, 7, , 10]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.reduce">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Array.prototype.reduce()' in that specification.</span></a></td></tr></tbody></table>

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

`Reduce`

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

-   [`Array.prototype.reduceRight()`](reduceright)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce</a>
