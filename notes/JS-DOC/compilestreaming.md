# WebAssembly.compileStreaming()

The `WebAssembly.compileStreaming()` function compiles a [`WebAssembly.Module`](module) directly from a streamed underlying source. This function is useful if it is necessary to a compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiateStreaming()`](instantiatestreaming) function should be used).

## Syntax

    WebAssembly.compileStreaming(source)

### Parameters

_source_  
A [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object or a promise that will fulfill with one, representing the underlying source of a .wasm module you want to stream and compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](module) object representing the compiled module.

### Exceptions

-   If `bufferSource` is not a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), a [`TypeError`](../typeerror) is thrown.
-   If compilation fails, the promise rejects with a [`WebAssembly.CompileError`](compileerror).

## Examples

### Compile streaming

The following example (see our [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) also) directly streams a .wasm module from an underlying source then compiles it to a [`WebAssembly.Module`](module) object. Because the `compileStreaming()` function accepts a promise for a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, you can directly pass it a [`WindowOrWorkerGlobalScope.fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) call, and it will pass the response into the function when it fulfills.

    var importObject = { imports: { imported_func: arg => console.log(arg) } };

    WebAssembly.compileStreaming(fetch('simple.wasm'))
    .then(module => WebAssembly.instantiate(module, importObject))
    .then(instance => instance.exports.exported_func());

The resulting module instance is then instantiated using [`WebAssembly.instantiate()`](instantiate), and the exported function invoked.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/web-api/#dom-webassembly-compilestreaming">WebAssembly Web API (WebAssembly Web API) 
<br/>

<span class="small">#dom-webassembly-compilestreaming</span></a></td></tr></tbody></table>

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

## See also

-   [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) overview page
-   [WebAssembly concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
-   [Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming</a>
