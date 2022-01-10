# DataView.prototype.setBigInt64()

The `setBigInt64()` method stores a signed 64-bit integer (long long) value at the specified byte offset from the start of the [`DataView`](../dataview).

## Syntax

    setBigInt64(byteOffset, value)
    setBigInt64(byteOffset, value, littleEndian)

### Parameters

byteOffset  
The offset, in bytes, from the start of the view to store the data from.

value  
The value to set as a [`BigInt`](../bigint). The highest possible value that fits in a signed 64-bit integer is `2n ** (64n -1n) - 1n`<span class="blob-code-inner blob-code-marker"> (`9223372036854775807n`). Upon overflow, it will be negative (</span>`-9223372036854775808n`<span class="blob-code-inner blob-code-marker">).</span>

littleEndian  
<span class="badge inline optional">Optional</span> Indicates whether the 64-bit int is stored in [little- or big-endian](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is written.

### Return value

[`undefined`](../undefined).

### Errors thrown

[`RangeError`](../rangeerror)  
Thrown if the `byteOffset` is set such that it would store beyond the end of the view.

## Examples

### Using the `setBigInt64` method

    var buffer = new ArrayBuffer(8);
    var dataview = new DataView(buffer);
    dataview.setBigInt64(0, 3n);
    dataview.getBigInt64(0); // 3n

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview.prototype.setbigint64">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview.prototype.setbigint64</span></a></td></tr></tbody></table>

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

`setBigInt64`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64</a>
