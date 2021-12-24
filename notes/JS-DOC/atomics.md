# Atomics

The `Atomics` object provides atomic operations as static methods. They are used with [`SharedArrayBuffer`](sharedarraybuffer) and [`ArrayBuffer`](arraybuffer) objects.

## Description

The Atomic operations are installed on an `Atomics` module. Unlike the other global objects, `Atomics` is not a constructor. You cannot use it with a [`new` operator](../operators/new) or invoke the `Atomics` object as a function. All properties and methods of `Atomics` are static (as is the case with the [`Math`](math) object, for example).

### Atomic operations

When memory is shared, multiple threads can read and write the same data in memory. Atomic operations make sure that predictable values are written and read, that operations are finished before the next operation starts and that operations are not interrupted.

### Wait and notify

The `wait()` and `notify()` methods are modeled on Linux futexes ("fast user-space mutex") and provide ways for waiting until a certain condition becomes true and are typically used as blocking constructs.

## Static methods

[`Atomics.add()`](atomics/add)  
Adds the provided value to the existing value at the specified index of the array. Returns the old value at that index.

[`Atomics.and()`](atomics/and)  
Computes a bitwise AND on the value at the specified index of the array with the provided value. Returns the old value at that index.

[`Atomics.compareExchange()`](atomics/compareexchange)  
Stores a value at the specified index of the array, if it equals a value. Returns the old value.

[`Atomics.exchange()`](atomics/exchange)  
Stores a value at the specified index of the array. Returns the old value.

[`Atomics.isLockFree(size)`](atomics/islockfree)  
An optimization primitive that can be used to determine whether to use locks or atomic operations. Returns `true` if an atomic operation on arrays of the given element size will be implemented using a hardware atomic operation (as opposed to a lock). Experts only.

[`Atomics.load()`](atomics/load)  
Returns the value at the specified index of the array.

[`Atomics.notify()`](atomics/notify)  
Notifies agents that are waiting on the specified index of the array. Returns the number of agents that were notified.

[`Atomics.or()`](atomics/or)  
Computes a bitwise OR on the value at the specified index of the array with the provided value. Returns the old value at that index.

[`Atomics.store()`](atomics/store)  
Stores a value at the specified index of the array. Returns the value.

[`Atomics.sub()`](atomics/sub)  
Subtracts a value at the specified index of the array. Returns the old value at that index.

[`Atomics.wait()`](atomics/wait)  
Verifies that the specified index of the array still contains a value and sleeps awaiting or times out. Returns either "`ok`", "`not-equal`", or "`timed-out`". If waiting is not allowed in the calling agent then it throws an [`Error`](error) exception. (Most browsers will not allow `wait()` on the browser's main thread.)

[`Atomics.xor()`](atomics/xor)  
Computes a bitwise XOR on the value at the specified index of the array with the provided value. Returns the old value at that index.

## Examples

### Using Atomics

    const sab = new SharedArrayBuffer(1024);
    const ta = new Uint8Array(sab);

    ta[0]; // 0
    ta[0] = 5; // 5

    Atomics.add(ta, 0, 12); // 5
    Atomics.load(ta, 0); // 17

    Atomics.and(ta, 0, 1); // 17
    Atomics.load(ta, 0); // 1

    Atomics.compareExchange(ta, 0, 5, 12); // 1
    Atomics.load(ta, 0); // 1

    Atomics.exchange(ta, 0, 12); // 1
    Atomics.load(ta, 0); // 12

    Atomics.isLockFree(1); // true
    Atomics.isLockFree(2); // true
    Atomics.isLockFree(3); // false
    Atomics.isLockFree(4); // true

    Atomics.or(ta, 0, 1); // 12
    Atomics.load(ta, 0);  // 13

    Atomics.store(ta, 0, 12); // 12

    Atomics.sub(ta, 0, 2); // 12
    Atomics.load(ta, 0); // 10

    Atomics.xor(ta, 0, 1); // 10
    Atomics.load(ta, 0); // 11

### Waiting and notifiying

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

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-atomics-object">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-atomics-object</span></a></td></tr></tbody></table>

`Atomics`

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

`Atomic_operations_on_non-shared_buffers`

No

No

79

No

No

No

No

No

79

No

No

No

`add`

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

`and`

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

`compareExchange`

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

`exchange`

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

`load`

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

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11.3

No

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

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

`or`

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

`store`

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

`sub`

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

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11.3

No

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

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

-   [`ArrayBuffer`](arraybuffer)
-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
-   [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
-   [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
-   [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
-   [A Taste of JavaScript's New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics</a>
