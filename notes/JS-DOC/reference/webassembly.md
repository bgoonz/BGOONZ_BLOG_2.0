# WebAssembly

The `WebAssembly` JavaScript object acts as the namespace for all [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)-related functionality.

Unlike most other global objects, `WebAssembly` is not a constructor (it is not a function object). You can compare it to [`Math`](math), which is also a namespace object for mathematical constants and functions, or to [`Intl`](intl) which is the namespace object for internationalization constructors and other language-sensitive functions.

## Description

The primary uses for the `WebAssembly` object are:

-   Loading WebAssembly code, using the [`WebAssembly.instantiate()`](webassembly/instantiate) function.
-   Creating new memory and table instances via the [`WebAssembly.Memory()`](webassembly/memory)/[`WebAssembly.Table()`](webassembly/table) constructors.
-   Providing facilities to handle errors that occur in WebAssembly via the [`WebAssembly.CompileError()`](webassembly/compileerror)/[`WebAssembly.LinkError()`](webassembly/linkerror)/[`WebAssembly.RuntimeError()`](webassembly/runtimeerror) constructors.

## Constructor properties

[`WebAssembly.CompileError()`](webassembly/compileerror/compileerror)  
Indicates an error during WebAssembly decoding or validation.

[`WebAssembly.Global()`](webassembly/global/global)  
Represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](webassembly/module) instances. This allows dynamic linking of multiple modules.

[`WebAssembly.Instance()`](webassembly/instance/instance)  
Is a stateful, executable instance of a [WebAssembly.Module](webassembly/module)

[`WebAssembly.LinkError()`](webassembly/linkerror/linkerror)  
Indicates an error during module instantiation (besides [traps](https://webassembly.org/docs/semantics/#traps) from the start function).

[`WebAssembly.Memory()`](webassembly/memory/memory)  
An object whose [`buffer`](webassembly/memory/buffer) property is a resizable [ArrayBuffer](arraybuffer) that holds the raw bytes of memory accessed by a WebAssembly `Instance`.

[`WebAssembly.Module()`](webassembly/module/module)  
Contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently [shared with Workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

[`WebAssembly.RuntimeError()`](webassembly/runtimeerror/runtimeerror)  
Error type that is thrown whenever WebAssembly specifies a [trap](https://webassembly.org/docs/semantics/#traps).

[`WebAssembly.Table()`](webassembly/table/table)  
An array-like structure representing a WebAssembly Table, which stores function references.

## Static methods

[`WebAssembly.instantiate()`](webassembly/instantiate)  
The primary API for compiling and instantiating WebAssembly code, returning both a `Module` and its first `Instance`.

[`WebAssembly.instantiateStreaming()`](webassembly/instantiatestreaming)  
Compiles and instantiates a WebAssembly module directly from a streamed underlying source, returning both a `Module` and its first `Instance`.

[`WebAssembly.compile()`](webassembly/compile)  
Compiles a [`WebAssembly.Module`](webassembly/module) from WebAssembly binary code, leaving instantiation as a separate step.

[`WebAssembly.compileStreaming()`](webassembly/compilestreaming)  
compiles a [`WebAssembly.Module`](webassembly/module) directly from a streamed underlying source, leaving instantiation as a separate step.

[`WebAssembly.validate()`](webassembly/validate)  
Validates a given typed array of WebAssembly binary code, returning whether the bytes are valid WebAssembly code (`true`) or not (`false`).

## Examples

### Stream a .wasm module then compile and instantiate it

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also) directly streams a .wasm module from an underlying source then compiles and instantiates it, the promise fulfilling with a `ResultObject`. Because the `instantiateStreaming()` function accepts a promise for a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, you can directly pass it a [`WindowOrWorkerGlobalScope.fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) call, and it will pass the response into the function when it fulfills.

    var importObject = { imports: { imported_func: arg => console.log(arg) } };

    WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
    .then(obj => obj.instance.exports.exported_func());

The `ResultObject`'s instance member is then accessed, and the contained exported function invoked.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#webassembly-namespace">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#webassembly-namespace</span></a></td></tr></tbody></table>

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

`CompileError`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`Global`

69

79

62

No

No

13.1

69

69

62

No

13.4

10.0

`Instance`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`LinkError`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`Memory`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`Module`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`RuntimeError`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`Table`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`WebAssembly`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`compile`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`compileStreaming`

61

16

58

No

47

No

61

61

58

45

No

8.0

`instantiate`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

`instantiateStreaming`

61

16

58

No

47

No

61

61

58

45

No

8.0

`validate`

57

16

52

Disabled in the Firefox 52 Extended Support Release (ESR).

No

44

11

57

57

52

Disabled in the Firefox 52 Extended Support Release (ESR).

43

11

7.0

## See also

-   [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) overview page
-   [WebAssembly concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
-   [Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly</a>
