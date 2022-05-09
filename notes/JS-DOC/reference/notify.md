# Atomics.notify()

The static ` Atomics``.notify() ` method notifies up some agents that are sleeping in the wait queue.

**Note:** This operation works with a shared [`Int32Array`](../int32array) only.  
It will return `0` on non-shared `ArrayBuffer` objects.

## Syntax

    Atomics.notify(typedArray, index, count)

### Parameters

`typedArray`  
A shared [`Int32Array`](../int32array).

`index`  
The position in the `typedArray` to wake up on.

`count` <span class="badge inline optional">Optional</span>  
The number of sleeping agents to notify. Defaults to [`+Infinity`](../infinity).

### Return value

-   Returns the number of woken up agents.
-   Returns `0`, if a non-shared [`ArrayBuffer`](../arraybuffer) object is used.

### Exceptions

-   Throws a [`TypeError`](../typeerror), if `typedArray` is not a [`Int32Array`](../int32array).
-   Throws a [`RangeError`](../rangeerror), if `index` is out of bounds in the `typedArray`.

## Examples

### Using `notify`

Given a shared `Int32Array`:

    const sab = new SharedArrayBuffer(1024);
    const int32 = new Int32Array(sab);

A reading thread is sleeping and waiting on location 0 which is expected to be 0. As long as that is true, it will not go on. However, once the writing thread has stored a new value, it will be notified by the writing thread and return the new value (123).

    Atomics.wait(int32, 0, 0);
    console.log(int32[0]); // 123

A writing thread stores a new value and notifies the waiting thread once it has written:

    console.log(int32[0]); // 0;
    Atomics.store(int32, 0, 123);
    Atomics.notify(int32, 0, 1);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-atomics.notify">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-atomics.notify</span></a></td></tr></tbody></table>

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

`notify`

68

60-63

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This was a temporary removal while mitigations were put in place.

79

78

63

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

48-55

46-48

The `count` parameter defaults to `0` instead of the later-specified `+Infinity`.

No

No

10.1-11.1

60-63

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

60-63

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

63

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

48-55

46-48

The `count` parameter defaults to `0` instead of the later-specified `+Infinity`.

No

10.3-11.3

No

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

## See also

-   [`Atomics`](../atomics)
-   [`Atomics.wait()`](wait)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify</a>
