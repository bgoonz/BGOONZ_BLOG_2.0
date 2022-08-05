# DataView.prototype.setUint16()

The `setUint16()` method stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the [`DataView`](../dataview).

## Syntax

    setUint16(byteOffset, value)
    setUint16(byteOffset, value, littleEndian)

### Parameters

`byteOffset`  
The offset, in byte, from the start of the view where to store the data.

`value`  
The value to set.

`littleEndian`  
<span class="badge inline optional">Optional</span> Indicates whether the 16-bit int is stored in [little- or big-endian](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is written.

### Return value

[`undefined`](../undefined).

### Errors thrown

[`RangeError`](../rangeerror)  
Thrown if the `byteOffset` is set such as it would store beyond the end of the view.

## Examples

### Using the setUint16 method

    var buffer = new ArrayBuffer(8);
    var dataview = new DataView(buffer);
    dataview.setUint16(1, 3);
    dataview.getUint16(1); // 3

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview.prototype.setuint16">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview.prototype.setuint16</span></a></td></tr></tbody></table>

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

`setUint16`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16</a>
