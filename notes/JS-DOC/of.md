# TypedArray.of()

The `TypedArray.of()` method creates a new [typed array](../typedarray#typedarray_objects) from a variable number of arguments. This method is nearly the same as [`Array.of()`](../array/of).

## Syntax

    TypedArray.of(element0[, element1[, ...[, elementN]]])

Where `TypedArray` is one of:

-   [`Int8Array`](../int8array)
-   [`Uint8Array`](../uint8array)
-   [`Uint8ClampedArray`](../uint8clampedarray)
-   [`Int16Array`](../int16array)
-   [`Uint16Array`](../uint16array)
-   [`Int32Array`](../int32array)
-   [`Uint32Array`](../uint32array)
-   [`Float32Array`](../float32array)
-   [`Float64Array`](../float64array)
-   [`BigInt64Array`](../bigint64array)
-   [`BigUint64Array`](../biguint64array)

### Parameters

`elementN`  
Elements of which to create the typed array.

### Return value

A new [`TypedArray`](../typedarray) instance.

## Description

Some subtle distinctions between [`Array.of()`](../array/of) and `TypedArray.of()`:

-   If the `this` value passed to `TypedArray.of()` is not a constructor, `TypedArray.of()` will throw a [`TypeError`](../typeerror), where `Array.of()` defaults to creating a new [`Array`](../array).
-   `TypedArray.of()` uses `[[Put]]` where `Array.of()` uses `[[DefineProperty]]`. Hence, when working with [`Proxy`](../proxy) objects, it calls [`handler.set`](../proxy/proxy/set) to create new elements rather than [`handler.defineProperty()`](../proxy/proxy/defineproperty).

## Examples

### Using of()

    Uint8Array.of(1);            // Uint8Array [ 1 ]
    Int8Array.of('1', '2', '3'); // Int8Array [ 1, 2, 3 ]
    Float32Array.of(1, 2, 3);    // Float32Array [ 1, 2, 3 ]
    Int16Array.of(undefined);    // Int16Array [ 0 ]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="#">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of '%TypedArray%.of' in that specification.</span></a></td></tr></tbody></table>

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

`of`

45

14

38

No

No

9.1

No

No

38

No

9.3

No

## See also

-   [`TypedArray.from()`](from)
-   [`Array.of()`](../array/of)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of</a>
