# DataView.prototype.getBigUint64()

The `getBigUint64()` method gets an unsigned 64-bit integer (unsigned long long) at the specified byte offset from the start of the [`DataView`](../dataview).

## Syntax

    getBigUint64(byteOffset)
    getBigUint64(byteOffset, littleEndian)

### Parameters

byteOffset  
The offset, in bytes, from the start of the view to read the data from.

littleEndian  
<span class="badge inline optional">Optional</span> Indicates whether the 64-bit int is stored in [little- or big-endian](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is read.

### Return value

A [`BigInt`](../bigint).

### Errors thrown

[`RangeError`](../rangeerror)  
Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the `getBigUint64` method

    var buffer = new ArrayBuffer(8);
    var dataview = new DataView(buffer);
    dataview.getBigUint64(0); // 0n

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview.prototype.getbiguint64">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview.prototype.getbiguint64</span></a></td></tr></tbody></table>

`getBigUint64`

67

79

68

No

54

No

67

67

68

48

No

9.0

## See also

-   [`DataView`](../dataview)
-   [`ArrayBuffer`](../arraybuffer)
-   [`BigInt`](../bigint)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64</a>
