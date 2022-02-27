# ArrayBuffer

The `ArrayBuffer` object is used to represent a generic, fixed-length raw binary data buffer.

It is an array of bytes, often referred to in other languages as a "byte array".You cannot directly manipulate the contents of an `ArrayBuffer`; instead, you create one of the [typed array objects](typedarray) or a [`DataView`](dataview) object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

The `ArrayBuffer()` constructor creates a new `ArrayBuffer` of the given length in bytes. You can also get an array buffer from existing data, for example [from a Base64 string](https://developer.mozilla.org/en-US/docs/Glossary/Base64#appendix_to_solution_1_decode_a_base64_string_to_uint8array_or_arraybuffer) or [from a local file](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsArrayBuffer).

## Constructor

[`ArrayBuffer()`](arraybuffer/arraybuffer)  
Creates a new `ArrayBuffer` object.

## Static properties

[`get ArrayBuffer[@@species]`](arraybuffer/@@species)  
The constructor function that is used to create derived objects.

## Static methods

[`ArrayBuffer.isView(arg)`](arraybuffer/isview)  
Returns `true` if `arg` is one of the ArrayBuffer views, such as [typed array objects](typedarray) or a [`DataView`](dataview). Returns `false` otherwise.

## Instance properties

[`ArrayBuffer.prototype.byteLength`](arraybuffer/bytelength)  
The read-only size, in bytes, of the `ArrayBuffer`. This is established when the array is constructed and cannot be changed.

## Instance methods

[`ArrayBuffer.prototype.slice()`](arraybuffer/slice)  
Returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `begin` (inclusive) up to `end` (exclusive). If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

## Examples

### Creating an ArrayBuffer

In this example, we create a 8-byte buffer with a [`Int32Array`](int32array) view referring to the buffer:

    const buffer = new ArrayBuffer(8);
    const view = new Int32Array(buffer);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-arraybuffer-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-arraybuffer-objects</span></a></td></tr></tbody></table>

`ArrayBuffer`

7

12

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

`ArrayBuffer`

7

12

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

`byteLength`

7

12

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

`isView`

32

12

29

11

19

7

≤37

32

29

19

7

2.0

`slice`

17

12

12

The non-standard `ArrayBuffer.slice()` method has been removed in Firefox 53 (but the standardized version `ArrayBuffer.prototype.slice()` is kept.

11

12.1

6

≤37

18

14

The non-standard `ArrayBuffer.slice()` method has been removed in Firefox 53 (but the standardized version `ArrayBuffer.prototype.slice()` is kept.

12.1

6

1.0

`@@species`

51

13

48

No

38

10

51

51

48

41

10

5.0

## See also

-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
-   [`SharedArrayBuffer`](sharedarraybuffer)
-   [RangeError: invalid array length](../errors/invalid_array_length)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer</a>
