# TypedArray.prototype.byteOffset

The `byteOffset` accessor property represents the offset (in bytes) of a typed array from the start of its [`ArrayBuffer`](../arraybuffer).

## Description

The `byteOffset` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when a _TypedArray_ is constructed and cannot be changed. _TypedArray_ is one of the [TypedArray objects](../typedarray#typedarray_objects).

## Examples

### Using the byteOffset property

    var buffer = new ArrayBuffer(8);

    var uint8 = new Uint8Array(buffer);
    uint8.byteOffset; // 0 (no offset specified)

    var uint8 = new Uint8Array(buffer, 3);
    uint8.byteOffset; // 3 (as specified when constructing Uint8Array)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="#">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-get-%typedarray%.prototype.byteoffset</span></a></td></tr></tbody></table>

`byteOffset`

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

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset</a>
