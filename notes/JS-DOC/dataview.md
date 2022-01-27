# DataView

The `DataView` view provides a low-level interface for reading and writing multiple number types in a binary [`ArrayBuffer`](arraybuffer), without having to care about the platform's [endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness).

## Description

### Endianness

Multi-byte number formats are represented in memory differently depending on machine architecture — see [Endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) for an explanation. `DataView` accessors provide explicit control of how data is accessed, regardless of the executing computer's endianness.

    var littleEndian = (function() {
      var buffer = new ArrayBuffer(2);
      new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
      // Int16Array uses the platform's endianness.
      return new Int16Array(buffer)[0] === 256;
    })();
    console.log(littleEndian); // true or false

### 64-bit Integer Values

Some browsers don't have support for [`DataView.prototype.setBigInt64()`](dataview/setbigint64) and [`DataView.prototype.setBigUint64()`](dataview/setbiguint64). So to enable 64-bit operations in your code that will work across browsers, you could implement your own `getUint64()` function, to obtain values with precision up to [`Number.MAX_SAFE_INTEGER`](number/max_safe_integer) — which could suffice for certain cases.

    function getUint64(dataview, byteOffset, littleEndian) {
      // split 64-bit number into two 32-bit (4-byte) parts
      const left =  dataview.getUint32(byteOffset, littleEndian);
      const right = dataview.getUint32(byteOffset+4, littleEndian);

      // combine the two 32-bit values
      const combined = littleEndian? left + 2**32*right : 2**32*left + right;

      if (!Number.isSafeInteger(combined))
        console.warn(combined, 'exceeds MAX_SAFE_INTEGER. Precision may be lost');

      return combined;
    }

Alternatively, if you need full 64-bit range, you can create a [`BigInt`](bigint). Further, although native BigInts are much faster than user-land library equivalents, BigInts will always be much slower than 32-bit integers in JavaScript due to the nature of their variable size.

    const BigInt = window.BigInt, bigThirtyTwo = BigInt(32), bigZero = BigInt(0);
    function getUint64BigInt(dataview, byteOffset, littleEndian) {
      // split 64-bit number into two 32-bit (4-byte) parts
      const left = BigInt(dataview.getUint32(byteOffset|0, !!littleEndian)>>>0);
      const right = BigInt(dataview.getUint32((byteOffset|0) + 4|0, !!littleEndian)>>>0);

      // combine the two 32-bit values and return
      return littleEndian ? (right<<bigThirtyTwo)|left : (left<<bigThirtyTwo)|right;
    }

## Constructor

[`DataView()`](dataview/dataview)  
Creates a new `DataView` object.

## Instance properties

[`DataView.prototype.buffer`](dataview/buffer)  
The [`ArrayBuffer`](arraybuffer) referenced by this view. Fixed at construction time and thus **read only.**

[`DataView.prototype.byteLength`](dataview/bytelength)  
The length (in bytes) of this view from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

[`DataView.prototype.byteOffset`](dataview/byteoffset)  
The offset (in bytes) of this view from the start of its [`ArrayBuffer`](arraybuffer). Fixed at construction time and thus **read only.**

## Instance methods

[`DataView.prototype.getInt8()`](dataview/getint8)  
Gets a signed 8-bit integer (byte) at the specified byte offset from the start of the view.

[`DataView.prototype.getUint8()`](dataview/getuint8)  
Gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the view.

[`DataView.prototype.getInt16()`](dataview/getint16)  
Gets a signed 16-bit integer (short) at the specified byte offset from the start of the view.

[`DataView.prototype.getUint16()`](dataview/getuint16)  
Gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the view.

[`DataView.prototype.getInt32()`](dataview/getint32)  
Gets a signed 32-bit integer (long) at the specified byte offset from the start of the view.

[`DataView.prototype.getUint32()`](dataview/getuint32)  
Gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the view.

[`DataView.prototype.getFloat32()`](dataview/getfloat32)  
Gets a signed 32-bit float (float) at the specified byte offset from the start of the view.

[`DataView.prototype.getFloat64()`](dataview/getfloat64)  
Gets a signed 64-bit float (double) at the specified byte offset from the start of the view.

[`DataView.prototype.getBigInt64()`](dataview/getbigint64)  
Gets a signed 64-bit integer (long long) at the specified byte offset from the start of the view.

[`DataView.prototype.getBigUint64()`](dataview/getbiguint64)  
Gets an unsigned 64-bit integer (unsigned long long) at the specified byte offset from the start of the view.

[`DataView.prototype.setInt8()`](dataview/setint8)  
Stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the view.

[`DataView.prototype.setUint8()`](dataview/setuint8)  
Stores an unsigned 8-bit integer (unsigned byte) value at the specified byte offset from the start of the view.

[`DataView.prototype.setInt16()`](dataview/setint16)  
Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.

[`DataView.prototype.setUint16()`](dataview/setuint16)  
Stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the view.

[`DataView.prototype.setInt32()`](dataview/setint32)  
Stores a signed 32-bit integer (long) value at the specified byte offset from the start of the view.

[`DataView.prototype.setUint32()`](dataview/setuint32)  
Stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the view.

[`DataView.prototype.setFloat32()`](dataview/setfloat32)  
Stores a signed 32-bit float (float) value at the specified byte offset from the start of the view.

[`DataView.prototype.setFloat64()`](dataview/setfloat64)  
Stores a signed 64-bit float (double) value at the specified byte offset from the start of the view.

[`DataView.prototype.setBigInt64()`](dataview/setbigint64)  
Stores a signed 64-bit integer (long long) value at the specified byte offset from the start of the view.

[`DataView.prototype.setBigUint64()`](dataview/setbiguint64)  
Stores an unsigned 64-bit integer (unsigned long long) value at the specified byte offset from the start of the view.

## Examples

### Using DataView

    var buffer = new ArrayBuffer(16);
    var view = new DataView(buffer, 0);

    view.setInt16(1, 42);
    view.getInt16(1); // 42

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-dataview-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-dataview-objects</span></a></td></tr></tbody></table>

`DataView`

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

`DataView`

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

`buffer`

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

`byteLength`

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

`byteOffset`

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

`getBigInt64`

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

`getFloat64`

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

`getInt16`

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

`getInt32`

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

`getInt8`

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

`getUint16`

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

`getUint32`

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

`setFloat32`

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

`setInt16`

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

`setInt32`

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

`setInt8`

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

`setUint32`

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

`setUint8`

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

-   [jDataView](https://github.com/jDataView/jDataView): JavaScript library that polyfills and extends the `DataView` API to all browsers and Node.js.
-   [`ArrayBuffer`](arraybuffer)
-   [`SharedArrayBuffer`](sharedarraybuffer)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView</a>
