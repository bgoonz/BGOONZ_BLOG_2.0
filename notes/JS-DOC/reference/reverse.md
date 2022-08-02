# Array.prototype.reverse()

The `reverse()` method reverses an array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_. The first array element becomes the last, and the last array element becomes the first.

## Syntax

    reverse()

### Return value

The reversed array.

## Description

The `reverse` method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

`reverse` is intentionally generic; this method can be [called](../function/call) or [applied](../function/apply) to objects resembling arrays. Objects which do not contain a `length` property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

## Examples

### Reversing the elements in an array

The following example creates an array `a`, containing three elements, then reverses the array. The call to `reverse()` returns a reference to the reversed array `a`.

    const a = [1, 2, 3];

    console.log(a); // [1, 2, 3]

    a.reverse();

    console.log(a); // [3, 2, 1]

### Reversing the elements in an array-like object

The following example creates an array-like object `a`, containing three elements and a length property, then reverses the array-like object. The call to `reverse()` returns a reference to the reversed array-like object `a`.

    const a = {0: 1, 1: 2, 2: 3, length: 3};

    console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

    Array.prototype.reverse.call(a); //same syntax for using apply()

    console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.reverse">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.reverse</span></a></td></tr></tbody></table>

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

`reverse`

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

-   [`Array.prototype.join()`](join)
-   [`Array.prototype.sort()`](sort)
-   [`TypedArray.prototype.reverse()`](../typedarray/reverse)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse</a>
