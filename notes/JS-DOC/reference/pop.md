# Array.prototype.pop()

The `pop()` method removes the **last** element from an array and returns that element. This method changes the length of the array.

## Syntax

    pop()

### Return value

The removed element from the array; [`undefined`](../undefined) if the array is empty.

## Description

The `pop` method removes the last element from an array and returns that value to the caller.

`pop` is intentionally generic; this method can be [called](../function/call) or [applied](../function/apply) to objects resembling arrays. Objects which do not contain a `length` property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

If you call `pop()` on an empty array, it returns [`undefined`](../undefined).

[`Array.prototype.shift()`](shift) has similar behavior to `pop`, but applied to the first element in an array.

## Examples

### Removing the last element of an array

The following code creates the `myFish` array containing four elements, then removes its last element.

    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    var popped = myFish.pop();

    console.log(myFish); // ['angel', 'clown', 'mandarin' ]

    console.log(popped); // 'sturgeon'

### Using apply( ) or call ( ) on array-like objects

The following code creates the `myFish` array-like object containing four elements and a length parameter, then removes its last element and decrements the length parameter.

    var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

    var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

    console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

    console.log(popped); // 'sturgeon'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.pop">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Array.prototype.pop' in that specification.</span></a></td></tr></tbody></table>

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

`pop`

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
-   [`Array.prototype.shift()`](shift)
-   [`Array.prototype.unshift()`](unshift)
-   [`Array.prototype.concat()`](concat)
-   [`Array.prototype.splice()`](splice)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop</a>
