# Atomics.isLockFree()

The static ` Atomics``.isLockFree() ` method is used to determine whether to use locks or atomic operations. It returns `true`, if the given size is one of the [BYTES_PER_ELEMENT](../typedarray/bytes_per_element) property of integer TypedArray types.

## Syntax

    Atomics.isLockFree(size)

### Parameters

`size`  
The size in bytes to check.

### Return value

A [`Boolean`](../boolean) indicating whether the operation is lock free.

## Examples

### Using isLockFree

    Atomics.isLockFree(1); // true
    Atomics.isLockFree(2); // true
    Atomics.isLockFree(3); // false
    Atomics.isLockFree(4); // true
    Atomics.isLockFree(5); // false
    Atomics.isLockFree(6); // false
    Atomics.isLockFree(7); // false
    Atomics.isLockFree(8); // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-atomics.islockfree">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-atomics.islockfree</span></a></td></tr></tbody></table>

`isLockFree`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree</a>
