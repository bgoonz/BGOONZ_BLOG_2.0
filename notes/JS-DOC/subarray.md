# TypedArray.prototype.subarray()

The `subarray()` method returns a new _TypedArray_ on the same [`ArrayBuffer`](../arraybuffer) store and with the same element types as for this _TypedArray_ object. The begin offset is **inclusive** and the end offset is **exclusive**. _TypedArray_ is one of the [typed array types](../typedarray#typedarray_objects).

## Syntax

    subarray()
    subarray(begin)
    subarray(begin, end)

### Parameters

`begin` <span class="badge inline optional">Optional</span>  
Element to begin at. The offset is inclusive. The whole array will be included in the new view if this value is not specified.

`end` <span class="badge inline optional">Optional</span>  
Element to end at. The offset is exclusive. If not specified, all elements from the one specified by `begin` to the end of the array are included in the new view.

### Return value

A new [`TypedArray`](../typedarray) object.

## Description

The range specified by `begin` and `end` is clamped to the valid index range for the current array; if the computed length of the new array would be negative, it's clamped to zero. If either `begin` or `end` is negative, it refers to an index from the end of the array instead of from the beginning.

Also note that this is creating a new view on the existing buffer; changes to the new object's contents will impact the original object and vice versa.

## Examples

### Using the subarray() method

    var buffer = new ArrayBuffer(8);
    var uint8 = new Uint8Array(buffer);
    uint8.set([1,2,3]);

    console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

    var sub = uint8.subarray(0,4);

    console.log(sub);   // Uint8Array [ 1, 2, 3, 0 ]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="#">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-%typedarray%.prototype.subarray</span></a></td></tr></tbody></table>

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

`subarray`

7

14

4

10

11.6

5.1

4

18

4

12

4.2

1.0

## See also

-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
-   [`TypedArray`](../typedarray)
-   [`ArrayBuffer`](../arraybuffer)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray</a>
