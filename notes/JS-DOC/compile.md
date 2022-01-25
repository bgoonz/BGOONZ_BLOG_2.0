# WebAssembly.compile()

The `WebAssembly.compile()` function compiles WebAssembly binary code into a [`WebAssembly.Module`](module) object. This function is useful if it is necessary to a compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiate()`](instantiate) function should be used).

## Syntax

    WebAssembly.compile(bufferSource)

### Parameters

_bufferSource_  
A [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [ArrayBuffer](../arraybuffer) containing the binary code of the .wasm module you want to compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](module) object representing the compiled module.

### Exceptions

-   If `bufferSource` is not a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), a [`TypeError`](../typeerror) is thrown.
-   If compilation fails, the promise rejects with a [`WebAssembly.CompileError`](compileerror).

## Examples

### Using compile

The following example compiles the loaded simple.wasm byte code using the `compile()` function and then sends it to a [worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) using [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).

    var worker = new Worker("wasm_worker.js");

    fetch('simple.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.compile(bytes)
    ).then(mod =>
      worker.postMessage(mod)
    );

**Note:** You'll probably want to use [`WebAssembly.compileStreaming()`](compilestreaming) in most cases, as it is more efficient than `compile()`.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-webassembly-compile">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-webassembly-compile</span></a></td></tr></tbody></table>

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

## See also

-   [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) overview page
-   [WebAssembly concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
-   [Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile</a>
