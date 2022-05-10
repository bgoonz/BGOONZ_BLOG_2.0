# Array.prototype.splice()

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements [in place](https://en.wikipedia.org/wiki/In-place_algorithm).

## Syntax

    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)

### Parameters

`start`  
The index at which to start changing the array.

If greater than the length of the array, `start` will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item\[n\*\] provided.

If negative, it will begin that many elements from the end of the array. (In this case, the origin `-1`, meaning `-n` is the index of the `n`<sup>th</sup> last element, and is therefore equivalent to the index of `array.length - n`.) If `array.length + start` is less than `0`, it will begin from index `0`.

`deleteCount` <span class="badge inline optional">Optional</span>  
An integer indicating the number of elements in the array to remove from `start`.

If `deleteCount` is omitted, or if its value is equal to or larger than `array.length - start` (that is, if it is equal to or greater than the number of elements left in the array, starting at `start`), then all the elements from `start` to the end of the array will be deleted.

If `deleteCount` is `0` or negative, no elements are removed. In this case, you should specify at least one new element (see below).

`item1, item2, ...` <span class="badge inline optional">Optional</span>  
The elements to add to the array, beginning from `start`. If you do not specify any elements, `splice()` will only remove elements from the array.

### Return value

An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.

## Description

If the specified number of elements to insert differs from the number of elements being removed, the array's `length` will be changed.

## Examples

### Remove 0 (zero) elements before index 2, and insert "drum"

    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2, 0, 'drum')

    // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
    // removed is [], no elements removed

### Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2, 0, 'drum', 'guitar')

    // myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
    // removed is [], no elements removed

### Remove 1 element at index 3

    let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
    let removed = myFish.splice(3, 1)

    // myFish is ["angel", "clown", "drum", "sturgeon"]
    // removed is ["mandarin"]

### Remove 1 element at index 2, and insert "trumpet"

    let myFish = ['angel', 'clown', 'drum', 'sturgeon']
    let removed = myFish.splice(2, 1, 'trumpet')

    // myFish is ["angel", "clown", "trumpet", "sturgeon"]
    // removed is ["drum"]

### Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

    let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
    let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

    // myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
    // removed is ["angel", "clown"]

### Remove 2 elements, starting from index 2

    let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
    let removed = myFish.splice(2, 2)

    // myFish is ["parrot", "anemone", "sturgeon"]
    // removed is ["blue", "trumpet"]

### Remove 1 element from index -2

    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(-2, 1)

    // myFish is ["angel", "clown", "sturgeon"]
    // removed is ["mandarin"]

### Remove all elements, starting from index 2

    let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    let removed = myFish.splice(2)

    // myFish is ["angel", "clown"]
    // removed is ["mandarin", "sturgeon"]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.splice">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.splice</span></a></td></tr></tbody></table>

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

`splice`

1

12

1

5.5

From Internet Explorer 5.5 through 8, all elements of the array will not be deleted if `deleteCount` is omitted. This behavior was fixed in Internet Explorer 9.

4

1

1

18

4

10.1

1

1.0

## See also

-   [`push()`](push) / [`pop()`](pop)— add/remove elements from the end of the array
-   [`unshift()`](unshift) / [`shift()`](shift)— add/remove elements from the beginning of the array
-   [`concat()`](concat)— returns a new array comprised of this array joined with other array(s) and/or value(s)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice</a>
