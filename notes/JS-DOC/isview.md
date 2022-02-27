# ArrayBuffer.isView()

The `ArrayBuffer.isView()` method determines whether the passed value is one of the `ArrayBuffer` views, such as [typed array objects](../typedarray) or a [`DataView`](../dataview).

## Syntax

    ArrayBuffer.isView(value)

### Parameters

`value`  
The value to be checked.

### Return value

`true` if the given argument is one of the [`ArrayBuffer`](../arraybuffer) views; otherwise, `false`.

## Examples

### Using isView

    ArrayBuffer.isView();                    // false
    ArrayBuffer.isView([]);                  // false
    ArrayBuffer.isView({});                  // false
    ArrayBuffer.isView(null);                // false
    ArrayBuffer.isView(undefined);           // false
    ArrayBuffer.isView(new ArrayBuffer(10)); // false

    ArrayBuffer.isView(new Uint8Array());    // true
    ArrayBuffer.isView(new Float32Array());  // true
    ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

    const buffer = new ArrayBuffer(2);
    const dv = new DataView(buffer);
    ArrayBuffer.isView(dv); // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-arraybuffer.isview">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-arraybuffer.isview</span></a></td></tr></tbody></table>

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

## See also

-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView</a>
