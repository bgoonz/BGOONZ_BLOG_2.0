# Spread syntax (...)

**Spread syntax** (`...`) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

## Description

Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.

In the above example, the defined function takes `x`, `y`, and `z` as arguments and returns the sum of these values. An array value is also defined.

When we invoke the function, we pass it all the values in the array using the spread syntax and the array name — `...numbers`.

If the array contained more than three numbers, e.g. `[1, 2, 3, 4]`, then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function, e.g.:

    function sum(x, y, z, n) {
      return x + y + z + n;
    }

The above example is somewhat rigid; the real value in spread syntax is that it works with the same value, no matter how many elements are contained in the object, array, etc.

It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. A very simple version of this kind of action could look like so:

    let numberStore = [0, 1, 2];
    let newNumber = 12;
    numberStore = [...numberStore, newNumber];

In the above example you can rerun the last line as many times as you like, to keep adding an additional 12 to the end of the array.

## Syntax

For function calls:

    myFunction(...iterableObj); // pass all elements of iterableObj as arguments to function myFunction

For array literals or strings:

    [...iterableObj, '4', 'five', 6]; // combine two arrays by inserting all elements from iterableObj

For object literals (new in ECMAScript 2018):

    let objClone = { ...obj }; // pass all key:value pairs from an object

## Rest syntax (parameters)

Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See [rest parameters](../functions/rest_parameters).

## Examples

### Spread in function calls

#### Replace apply()

It is common to use [`Function.prototype.apply()`](../global_objects/function/apply) in cases where you want to use the elements of an array as arguments to a function.

    function myFunction(x, y, z) { }
    let args = [0, 1, 2];
    myFunction.apply(null, args);

With spread syntax the above can be written as:

    function myFunction(x, y, z) { }
    let args = [0, 1, 2];
    myFunction(...args);

Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.

    function myFunction(v, w, x, y, z) { }
    let args = [0, 1];
    myFunction(-1, ...args, 2, ...[3]);

#### Apply for new operator

When calling a constructor with [`new`](new) it's not possible to **directly** use an array and `apply()` (`apply()` does a `[[Call]]` and not a `[[Construct]]`). However, an array can be easily used with `new` thanks to spread syntax:

    let dateFields = [1970, 0, 1];  // 1 Jan 1970
    let d = new Date(...dateFields);

To use `new` with an array of parameters without spread syntax, you would have to do it **indirectly** through partial application:

    function applyAndNew(constructor, args) {
       function partial () {
          return constructor.apply(this, args);
       };
       if (typeof constructor.prototype === "object") {
          partial.prototype = Object.create(constructor.prototype);
       }
       return partial;
    }

    function myConstructor () {
       console.log("arguments.length: " + arguments.length);
       console.log(arguments);
       this.prop1="val1";
       this.prop2="val2";
    };

    let myArguments = ["hi", "how", "are", "you", "mr", null];
    let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

    console.log(new myConstructorWithArguments);
    //  (internal log of myConstructor):           arguments.length: 6
    //  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
    //  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}

### Spread in array literals

#### A more powerful array literal

Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of [`push()`](../global_objects/array/push), [`splice()`](../global_objects/array/splice), [`concat()`](../global_objects/array/concat), etc. With spread syntax this becomes much more succinct:

    let parts = ['shoulders', 'knees'];
    let lyrics = ['head', ...parts, 'and', 'toes'];
    //  ["head", "shoulders", "knees", "and", "toes"]

Just like spread for argument lists, `...` can be used anywhere in the array literal, and may be used more than once.

#### Copy an array

    let arr = [1, 2, 3];
    let arr2 = [...arr]; // like arr.slice()

    arr2.push(4);
    //  arr2 becomes [1, 2, 3, 4]
    //  arr remains unaffected

**Note:** Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays, as the following example shows. (The same is true with [`Object.assign()`](../global_objects/object/assign) and spread syntax.)

    let a = [[1], [2], [3]];
    let b = [...a];

    b.shift().shift();
    //  1

    //  Oh no!  Now array 'a' is affected as well:
    a
    //  [[], [2], [3]]

#### A better way to concatenate arrays

[`Array.prototype.concat()`](../global_objects/array/concat) is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:

    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];

    //  Append all items from arr2 onto arr1
    arr1 = arr1.concat(arr2);

With spread syntax this becomes:

    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];

    arr1 = [...arr1, ...arr2];
    //  arr1 is now [0, 1, 2, 3, 4, 5]
    // Note: Not to use const otherwise, it will give TypeError (invalid assignment)

[`Array.prototype.unshift()`](../global_objects/array/unshift) is often used to insert an array of values at the start of an existing array. Without spread syntax, this is done as:

    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];

    //  Prepend all items from arr2 onto arr1
    Array.prototype.unshift.apply(arr1, arr2)

    //  arr1 is now [3, 4, 5, 0, 1, 2]

With spread syntax, this becomes:

    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];

    arr1 = [...arr2, ...arr1];
    //  arr1 is now [3, 4, 5, 0, 1, 2]

**Note:** Unlike `unshift()`, this creates a new `arr1`, and does not modify the original `arr1` array in-place.

### Spread in object literals

The [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) proposal (ES2018) added spread properties to [`object literals`](object_initializer#1). It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than [`Object.assign()`](../global_objects/object/assign).

    let obj1 = { foo: 'bar', x: 42 };
    let obj2 = { foo: 'baz', y: 13 };

    let clonedObj = { ...obj1 };
    // Object { foo: "bar", x: 42 }

    let mergedObj = { ...obj1, ...obj2 };
    // Object { foo: "baz", x: 42, y: 13 }

Note that [`Object.assign()`](../global_objects/object/assign) triggers [`setters`](../functions/set), whereas spread syntax doesn't.

Note that you cannot replace or mimic the [`Object.assign()`](../global_objects/object/assign) function:

    let obj1 = { foo: 'bar', x: 42 };
    let obj2 = { foo: 'baz', y: 13 };
    const merge = ( ...objects ) => ( { ...objects } );

    let mergedObj1 = merge (obj1, obj2);
    // Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

    let mergedObj2 = merge ({}, obj1, obj2);
    // Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

In the above example, the spread syntax does not work as one might expect: it spreads an _array_ of arguments into the object literal, due to the rest parameter.

### Only for iterables

Objects themselves are not iterable, but they become iterable when used in an Array, or with iterating functions such as `map()`, `reduce()`, and `assign()`. When merging 2 objects together with the spread operator, it is assumed another iterating function is used when the merging occurs.

Spread syntax (other than in the case of spread properties) can be applied only to [iterable](../global_objects/symbol/iterator) objects:

    let obj = {'key1': 'value1'};
    let array = [...obj]; // TypeError: obj is not iterable

### Spread with many values

When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit. See [`apply()`](../global_objects/function/apply) for more details.

## Specifications

**No specification found**

No specification data found for `javascript.operators.spread`.  
[Check for problems with this page](#on-github) or contribute a missing `spec_url` to [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data). Also make sure the specification is included in [w3c/browser-specs](https://github.com/w3c/browser-specs).

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

`spread_in_arrays`

46

12

16

No

37

8

46

46

16

37

8

5.0

`spread_in_function_calls`

46

12

27

No

37

8

46

46

27

37

8

5.0

`spread_in_object_literals`

60

79

55

No

47

11.1

60

60

55

44

11.3

8.2

## See also

-   [Rest parameters](../functions/rest_parameters) (also '`...`')
-   [`Function.prototype.apply()`](../global_objects/function/apply) (also '`...`')

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax</a>
