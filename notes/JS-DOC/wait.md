# Atomics.wait()

The static ` Atomics``.wait() ` method verifies that a given position in an [`Int32Array`](../int32array) still contains a given value and if so sleeps, awaiting a wakeup or a timeout. It returns a string which is either "`ok`", "`not-equal`", or "`timed-out`".

**Note:** This operation only works with a shared [`Int32Array`](../int32array) and may not be allowed on the main thread.

## Syntax

    Atomics.wait(typedArray, index, value)
    Atomics.wait(typedArray, index, value, timeout)

### Parameters

`typedArray`  
A shared [`Int32Array`](../int32array).

`index`  
The position in the `typedArray` to wait on.

`value`  
The expected value to test.

`timeout` <span class="badge inline optional">Optional</span>  
Time to wait in milliseconds. [`Infinity`](../infinity), if no time is provided.

### Return value

A string which is either "`ok`", "`not-equal`", or "`timed-out`".

### Exceptions

-   Throws a [`TypeError`](../typeerror), if `typedArray` is not a shared [`Int32Array`](../int32array).
-   Throws a [`RangeError`](../rangeerror), if `index` is out of bounds in the `typedArray`.

## Examples

### Using wait()

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

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-atomics.wait">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-atomics.wait</span></a></td></tr></tbody></table>

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

`wait`

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

48-55

46-48

The method returns values `Atomics.OK`, `Atomics.TIMEDOUT`, and `Atomics.NOTEQUAL`, instead of the later-specified strings.

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

48-55

46-48

The method returns values `Atomics.OK`, `Atomics.TIMEDOUT`, and `Atomics.NOTEQUAL`, instead of the later-specified strings.

No

10.3-11.3

No

Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

## See also

-   [`Atomics`](../atomics)
-   [`Atomics.notify()`](notify)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait</a>
