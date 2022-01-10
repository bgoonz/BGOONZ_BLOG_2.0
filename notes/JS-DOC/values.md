# TypedArray.prototype.values()

The `values()` method returns a new array iterator object that contains the values for each index in the array.

## Syntax

    values()

### Return value

A new array iterator object.

## Examples

### Iteration using for...of loop

    var arr = ['a', 'b', 'c', 'd', 'e'];
    var iterator = arr.values();

    for (let letter of iterator) {
      console.log(letter);
    }  //"a" "b" "c" "d" "e"

`Array.prototype.values` is default implementation of `Array.prototype[Symbol.iterator]`.

    Array.prototype.values === Array.prototype[Symbol.iterator]      //true

### Iteration using .next()

    var arr = ['a', 'b', 'c', 'd', 'e'];
    var iterator = arr.values();
    iterator.next();               // Object { value: "a", done: false }
    iterator.next().value;         // "b"
    iterator.next()["value"];      // "c"
    iterator.next();               // Object { value: "d", done: false }
    iterator.next();               // Object { value: "e", done: false }
    iterator.next();               // Object { value: undefined, done: true }
    iteraror.next().value;         // undefined

**Warning:** One-use: the array iterator object is one use or temporary object

example:

    var arr = ['a', 'b', 'c', 'd', 'e'];
     var iterator = arr.values();
     for (let letter of iterator) {
     console.log(letter);
    } //"a" "b" "c" "d" "e"
    for (let letter of iterator) {
    console.log(letter);
    } // undefined

**reason:** When `next().done=true` or `currentIndex>length` the `for..of` loop ends. See [Iteration protocols.](../../iteration_protocols)

**Value**: there are no values stored in the array Iterator object; instead it stores the address of the array used in its creation and so depends on the values stored in that array.

    var arr = ['a', 'b', 'c', 'd', 'e'];
    var iterator = arr.values();
    console.log(iterator);        // Array Iterator {  }
    iterator.next().value;        // "a"
    arr[1]='n';
    iterator.next().value;        //  "n"

**Note:** If the values in the array changed the array iterator object values change too.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="#">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-%typedarray%.prototype.values</span></a></td></tr></tbody></table>

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

`values`

38

14

37

No

25

10

38

38

37

25

10

3.0

## See also

-   [`Array.prototype.keys()`](../array/keys)
-   [`Array.prototype.entries()`](../array/entries)
-   [`Array.prototype.forEach()`](../array/foreach)
-   [`Array.prototype.every()`](../array/every)
-   [`Array.prototype.some()`](../array/some)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values</a>
