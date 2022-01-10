# DataView.prototype.setFloat64()

The `setFloat64()` method stores a signed 64-bit float (double) value at the specified byte offset from the start of the [`DataView`](../dataview).

## Syntax

    setFloat64(byteOffset, value)
    setFloat64(byteOffset, value, littleEndian)

### Parameters

`byteOffset`  
The offset, in byte, from the start of the view where to store the data.

`value`  
The value to set.

`littleEndian`  
<span class="badge inline optional">Optional</span> Indicates whether the 64-bit float is stored in [little- or big-endian](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is written.

### Return value

[`undefined`](../undefined).

### Errors thrown

[`RangeError`](../rangeerror)  
Thrown if the `byteOffset` is set such as it would store beyond the end of the view.

## Examples

### Using the setFloat64 method

    var buffer = new ArrayBuffer(8);
    var dataview = new DataView(buffer);
    dataview.setFloat64(0, 3);
    dataview.getFloat64(0); // 3

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview.prototype.setfloat64">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview.prototype.setfloat64</span></a></td></tr></tbody></table>

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

`setFloat64`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64</a>
