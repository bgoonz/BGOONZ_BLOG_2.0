# DataView.prototype.getFloat32()

The `getFloat32()` method gets a signed 32-bit float (float) at the specified byte offset from the start of the [`DataView`](../dataview).

## Syntax

    getFloat32(byteOffset)
    getFloat32(byteOffset, littleEndian)

### Parameters

`byteOffset`  
The offset, in byte, from the start of the view where to read the data.

`littleEndian`  
<span class="badge inline optional">Optional</span> Indicates whether the 32-bit float is stored in [little- or big-endian](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is read.

### Return value

A signed 32-bit float number.

### Errors thrown

[`RangeError`](../rangeerror)  
Thrown if the `byteOffset` is set such as it would read beyond the end of the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the getFloat32 method

    var buffer = new ArrayBuffer(8);
    var dataview = new DataView(buffer);
    dataview.getFloat32(1); // 0

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview.prototype.getfloat32">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview.prototype.getfloat32</span></a></td></tr></tbody></table>

`getFloat32`

9

12

15

10

12.1

5.1

4

18

15

12.1

4.2

1.0

## See also

-   [`DataView`](../dataview)
-   [`ArrayBuffer`](../arraybuffer)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32</a>
