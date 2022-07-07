# SharedArrayBuffer

The `SharedArrayBuffer` object is used to represent a generic, fixed-length raw binary data buffer, similar to the [`ArrayBuffer`](arraybuffer) object, but in a way that they can be used to create views on shared memory. Unlike an `ArrayBuffer`, a `SharedArrayBuffer` cannot become detached.

## Description

### Allocating and sharing memory

To share memory using [`SharedArrayBuffer`](sharedarraybuffer) objects from one agent in the cluster to another (an agent is either the web page's main program or one of its web workers), `postMessage` and [structured cloning](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) is used.

The structured clone algorithm accepts `SharedArrayBuffers` and `TypedArrays` mapped onto `SharedArrayBuffers`. In both cases, the `SharedArrayBuffer` object is transmitted to the receiver resulting in a new, private SharedArrayBuffer object in the receiving agent (just as for [`ArrayBuffer`](arraybuffer)). However, the shared data block referenced by the two `SharedArrayBuffer` objects is the same data block, and a side effect to the block in one agent will eventually become visible in the other agent.

    var sab = new SharedArrayBuffer(1024);
    worker.postMessage(sab);

### Updating and synchronizing shared memory with atomic operations

Shared memory can be created and updated simultaneously in workers or the main thread. Depending on the system (the CPU, the OS, the Browser) it can take a while until the change is propagated to all contexts. To synchronize, [atomic](atomics) operations are needed.

### APIs which use SharedArrayBuffer objects

-   [`WebGLRenderingContext.bufferData()`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData)
-   [`WebGLRenderingContext.bufferSubData()`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData)
-   [`WebGL2RenderingContext.getBufferSubData()`](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Security requirements

Shared memory and high-resolution timers were effectively [disabled at the start of 2018](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) in light of [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>). In 2020, a new, secure approach has been standardized to re-enable shared memory. With a few security measures, `postMessage()` will no longer throw for `SharedArrayBuffer` objects and shared memory across threads will be available:

As a baseline requirement, your document needs to be in a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).

For top-level documents, two headers will need to be set to cross-origin isolate your site:

-   [`Cross-Origin-Opener-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) with `same-origin` as value (protects your origin from attackers)
-   [`Cross-Origin-Embedder-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) with `require-corp` as value (protects victims from your origin)

<!-- -->

    Cross-Origin-Opener-Policy: same-origin
    Cross-Origin-Embedder-Policy: require-corp

To check if cross origin isolation has been successful, you can test against the `crossOriginIsolated` property available to window and worker contexts:

    if (crossOriginIsolated) {
      // Post SharedArrayBuffer
    } else {
      // Do something else
    }

See also [Planned changes to shared memory](sharedarraybuffer/planned_changes) which is starting to roll out to browsers (Firefox 79, for example.)

### Always use the new operator to create a SharedArrayBuffer

`SharedArrayBuffer` constructors are required to be constructed with a [`new`](../operators/new) operator. Calling a `SharedArrayBuffer` constructor as a function without `new` will throw a [`TypeError`](typeerror).

    var sab = SharedArrayBuffer(1024);
    // TypeError: calling a builtin SharedArrayBuffer constructor
    // without new is forbidden

    var sab = new SharedArrayBuffer(1024);

## Constructor

[`SharedArrayBuffer()`](sharedarraybuffer/sharedarraybuffer)  
Creates a new `SharedArrayBuffer` object.

## Instance properties

[`SharedArrayBuffer.prototype.byteLength`](sharedarraybuffer/bytelength)  
The size, in bytes, of the array. This is established when the array is constructed and cannot be changed. **Read only.**

## Instance methods

[`SharedArrayBuffer.prototype.slice(begin, end)`](sharedarraybuffer/slice)  
Returns a new `SharedArrayBuffer` whose contents are a copy of this `SharedArrayBuffer`'s bytes from `begin`, inclusive, up to `end`, exclusive. If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

## Examples

### Creating a new SharedArrayBuffer

    var sab = new SharedArrayBuffer(1024);

### Slicing the SharedArrayBuffer

    sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
    sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
    sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
    sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }

### Using it in a WebGL buffer

    const canvas = document.querySelector('canvas');
    const gl = canvas.getContext('webgl');
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-sharedarraybuffer-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-sharedarraybuffer-objects</span></a></td></tr></tbody></table>

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

`SharedArrayBuffer`

68

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This was a temporary removal while mitigations were put in place.

79

16-17

Support was removed to mitigate [speculative execution side-channel attacks (Windows blog)](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer).

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

No

10.1-11

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

89

`SharedArrayBuffer` is gated behind COOP/COEP. For more detail, read [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/).

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11

No

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

`SharedArrayBuffer`

68

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This was a temporary removal while mitigations were put in place.

79

16-17

Support was removed to mitigate [speculative execution side-channel attacks (Windows blog)](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer).

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

No

10.1-11

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

89

`SharedArrayBuffer` is gated behind COOP/COEP. For more detail, read [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/).

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11

No

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

`byteLength`

68

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This was a temporary removal while mitigations were put in place.

79

16-17

Support was removed to mitigate [speculative execution side-channel attacks (Windows blog)](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer).

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

No

10.1-11

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

89

`SharedArrayBuffer` is gated behind COOP/COEP. For more detail, read [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/).

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11

No

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

`slice`

68

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This was a temporary removal while mitigations were put in place.

79

16-17

Support was removed to mitigate [speculative execution side-channel attacks (Windows blog)](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer).

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

No

10.1-11

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

89

`SharedArrayBuffer` is gated behind COOP/COEP. For more detail, read [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/).

60-63

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

79

57

Support was disabled by default to mitigate [speculative execution side-channel attacks (Mozilla Security Blog)](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/).

55-57

46-55

No

10.3-11

No

Chrome disabled SharedArrayBuffer on January 5, 2018 to help reduce the efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca). This is intended as a temporary measure until other mitigations are in place.

## See also

-   [`Atomics`](atomics)
-   [`ArrayBuffer`](arraybuffer)
-   [JavaScript typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
-   [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
-   [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
-   [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
-   [A Taste of JavaScript's New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer</a>
