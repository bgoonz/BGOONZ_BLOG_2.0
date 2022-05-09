# DataView.prototype.setBigUint64()

The `setBigUint64()` method stores an unsigned 64-bit integer (unsigned long long) value at the specified byte offset from the start of the [`DataView`](../dataview).

## Syntax

    setBigUint64(byteOffset, value)
    setBigUint64(byteOffset, value, littleEndian)

### Parameters

byteOffset  
The offset, in bytes, from the start of the view to store the data from.

value  
The value to set as a [`BigInt`](../bigint). The highest possible value that fits in an unsigned 64-bit integer is `2n ** 64n - 1n`<span class="blob-code-inner blob-code-marker"> (</span>`18446744073709551615n`<span class="blob-code-inner blob-code-marker">). Upon overflow, it will be zero (</span>`0n`<span class="blob-code-inner blob-code-marker">).</span>

littleEndian  
<span class="badge inline optional">Optional</span> Indicates whether the 64-bit int is stored in [little- or big-endian](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is written.

### Return value

[`undefined`](../undefined).

### Errors thrown

[`RangeError`](../rangeerror)  
Thrown if the `byteOffset` is set such that it would store beyond the end of the view.

## Examples

### Using the `setBigUint64` method

    var buffer = new ArrayBuffer(8);
    var dataview = new DataView(buffer);
    dataview.setBigUint64(0, 3n);
    dataview.getBigUint64(0); // 3n

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview.prototype.setbiguint64">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview.prototype.setbiguint64</span></a></td></tr></tbody></table>

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

`setBigUint64`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64</a>
