# Array.prototype.copyWithin()

The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it without modifying its length.

## Syntax

    copyWithin(target)
    copyWithin(target, start)
    copyWithin(target, start, end)

### Parameters

`target`  
Zero-based index at which to copy the sequence to. If negative, `target` will be counted from the end.

If `target` is at or greater than `arr.length`, nothing will be copied. If `target` is positioned after `start`, the copied sequence will be trimmed to fit `arr.length`.

`start` <span class="badge inline optional">Optional</span>  
Zero-based index at which to start copying elements from. If negative, `start` will be counted from the end.

If `start` is omitted, `copyWithin` will copy from index `0`.

`end` <span class="badge inline optional">Optional</span>  
Zero-based index at which to end copying elements from. `copyWithin` copies up to but not including `end`. If negative, `end` will be counted from the end.

If `end` is omitted, `copyWithin` will copy until the last index (default to `arr.length`).

### Return value

The modified array.

## Description

The `copyWithin` works like C and C++'s `memmove`, and is a high-performance method to shift the data of an [`Array`](../array). This especially applies to the [`TypedArray`](../typedarray/copywithin) method of the same name. The sequence is copied and pasted as one operation; pasted sequence will have the copied values even when the copy and paste region overlap.

The `copyWithin` function is intentionally _generic_, it does not require that its `this` value be an [`Array`](../array) object.

The `copyWithin` method is a mutable method. It does not alter the length of `this`, but it will change its content and create new properties, if necessary.

## Examples

### Using copyWithin

    [1, 2, 3, 4, 5].copyWithin(-2)
    // [1, 2, 3, 1, 2]

    [1, 2, 3, 4, 5].copyWithin(0, 3)
    // [4, 5, 3, 4, 5]

    [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
    // [4, 2, 3, 4, 5]

    [1, 2, 3, 4, 5].copyWithin(-2, -3, -1)
    // [1, 2, 3, 3, 4]

    [].copyWithin.call({length: 5, 3: 1}, 0, 3)
    // {0: 1, 3: 1, length: 5}

    // ES2015 Typed Arrays are subclasses of Array
    var i32a = new Int32Array([1, 2, 3, 4, 5])

    i32a.copyWithin(0, 2)
    // Int32Array [3, 4, 5, 4, 5]

    // On platforms that are not yet ES2015 compliant:
    [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
    // Int32Array [4, 2, 3, 4, 5]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-array.prototype.copywithin">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-array.prototype.copywithin</span></a></td></tr></tbody></table>

`copyWithin`

45

12

32

No

32

9

45

45

32

32

9

5.0

## See also

-   [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
-   [`Array`](../array)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin</a>
