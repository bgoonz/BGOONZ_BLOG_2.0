# Atomics.xor()

The static ` Atomics``.xor() ` method computes a bitwise XOR with a given value at a given position in the array, and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.

## Syntax

    Atomics.xor(typedArray, index, value)

### Parameters

`typedArray`  
An integer typed array. One of [`Int8Array`](../int8array), [`Uint8Array`](../uint8array), [`Int16Array`](../int16array), [`Uint16Array`](../uint16array), [`Int32Array`](../int32array), [`Uint32Array`](../uint32array), [`BigInt64Array`](../bigint64array), or [`BigUint64Array`](../biguint64array).

`index`  
The position in the `typedArray` to compute the bitwise XOR.

`value`  
The number to compute the bitwise XOR with.

### Return value

The old value at the given position (`typedArray[index]`).

### Exceptions

-   Throws a [`TypeError`](../typeerror), if `typedArray` is not one of the allowed integer types.
-   Throws a [`RangeError`](../rangeerror), if `index` is out of bounds in the `typedArray`.

## Description

The bitwise XOR operation yields 1, if `a` and `b` are different. The truth table for the XOR operation is:

<table><thead><tr class="header"><th><code>a</code></th><th><code>b</code></th><th><code>a ^ b</code></th></tr></thead><tbody><tr class="odd"><td>0</td><td>0</td><td>0</td></tr><tr class="even"><td>0</td><td>1</td><td>1</td></tr><tr class="odd"><td>1</td><td>0</td><td>1</td></tr><tr class="even"><td>1</td><td>1</td><td>0</td></tr></tbody></table>

For example, a bitwise XOR of `5 ^ 1` results in `0100` which is 4 in decimal.

    5  0101
    1  0001
       ----
    4  0100

## Examples

### Using xor

    const sab = new SharedArrayBuffer(1024);
    const ta = new Uint8Array(sab);
    ta[0] = 5;

    Atomics.xor(ta, 0, 1); // returns 5, the old value
    Atomics.load(ta, 0);  // 4

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-atomics.xor">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-atomics.xor</span></a></td></tr></tbody></table>

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

`xor`

68

60-63

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This was a temporary removal while mitigations were put in place.

79

16-17

Support was removed to mitigate [speculative execution side-channel attacks (Windows blog)](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer).

78

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

No

10.1-11.1

60-63

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

60-63

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11.3

No

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

## See also

-   [`Atomics`](../atomics)
-   [`Atomics.and()`](and)
-   [`Atomics.or()`](or)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor</a>
