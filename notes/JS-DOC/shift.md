# Array.prototype.shift()

The `shift()` method removes the **first** element from an array and returns that removed element. This method changes the length of the array.

## Syntax

    shift()

### Return value

The removed element from the array; [`undefined`](../undefined) if the array is empty.

## Description

The `shift` method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the [`length`](length) property is 0, [`undefined`](../undefined) is returned.

`shift` is intentionally generic; this method can be [called](../function/call) or [applied](../function/apply) to objects resembling arrays. Objects which do not contain a `length` property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

[`Array.prototype.pop()`](pop) has similar behavior to `shift`, but applied to the last element in an array.

## Examples

### Removing an element from an array

The following code displays the `myFish` array before and after removing its first element. It also displays the removed element:

    var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

    console.log('myFish before:', JSON.stringify(myFish));
    // myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

    var shifted = myFish.shift();

    console.log('myFish after:', myFish);
    // myFish after: ['clown', 'mandarin', 'surgeon']

    console.log('Removed this element:', shifted);
    // Removed this element: angel

### Using shift() method in while loop

The shift() method is often used in condition inside while loop. In the following example every iteration will remove the next element from an array, until it is empty:

    var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

    while( typeof (i = names.shift()) !== 'undefined' ) {
        console.log(i);
    }
    // Andrew, Edward, Paul, Chris, John

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.shift">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.shift</span></a></td></tr></tbody></table>

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

`shift`

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
-   [`Array.prototype.unshift()`](unshift)
-   [`Array.prototype.concat()`](concat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift</a>
