# DataView.prototype.getUint8()

The `getUint8()` method gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the [`DataView`](../dataview).

## Syntax

    getUint8(byteOffset)

### Parameters

`byteOffset`  
The offset, in byte, from the start of the view where to read the data.

### Return value

An unsigned 8-bit integer number.

### Errors thrown

[`RangeError`](../rangeerror)  
Thrown if the `byteOffset` is set such as it would read beyond the end of the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the getUint8 method

    var buffer = new ArrayBuffer(8);
    var dataview = new DataView(buffer);
    dataview.getUint8(1); // 0

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview.prototype.getuint8">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview.prototype.getuint8</span></a></td></tr></tbody></table>

`getUint8`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8</a>
