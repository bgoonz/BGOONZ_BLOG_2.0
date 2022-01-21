# Array.prototype.unshift()

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

## Syntax

    unshift(element0)
    unshift(element0, element1)
    unshift(element0, element1, ... , elementN)

### Parameters

`elementN`  
The elements to add to the front of the `arr`.

### Return value

The new [`length`](length) property of the object upon which the method was called.

## Description

The `unshift` method inserts the given values to the beginning of an array-like object.

`unshift` is intentionally generic. This method can be [called](../function/call) or [applied](../function/apply) to objects resembling arrays. Objects which do not contain a `length` property—reflecting the last in a series of consecutive, zero-based numerical properties—may not behave in any meaningful manner.

Please note that, if multiple elements are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters. Hence, calling `unshift` with `n` arguments **once**, or calling it `n` times with **1** argument (with a loop, for example), don't yield the same results.

See example:

    let arr = [4, 5, 6]

    arr.unshift(1, 2, 3)
    console.log(arr);
    // [1, 2, 3, 4, 5, 6]

    arr = [4, 5, 6] // resetting the array

    arr.unshift(1)
    arr.unshift(2)
    arr.unshift(3)

    console.log(arr)
    // [3, 2, 1, 4, 5, 6]

## Examples

### Using unshift

    let arr = [1, 2]

    arr.unshift(0)               // result of the call is 3, which is the new array length
    // arr is [0, 1, 2]

    arr.unshift(-2, -1)          // the new array length is 5
    // arr is [-2, -1, 0, 1, 2]

    arr.unshift([-4, -3])        // the new array length is 6
    // arr is [[-4, -3], -2, -1, 0, 1, 2]

    arr.unshift([-7, -6], [-5])  // the new array length is 8
    // arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.unshift">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.unshift</span></a></td></tr></tbody></table>

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

`unshift`

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

-   [`Array.prototype.push()`](push)
-   [`Array.prototype.pop()`](pop)
-   [`Array.prototype.shift()`](shift)
-   [`Array.prototype.concat()`](concat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift</a>
