# WebAssembly.instantiateStreaming()

The `WebAssembly.instantiateStreaming()` function compiles and instantiates a WebAssembly module directly from a streamed underlying source. This is the most efficient, optimized way to load wasm code.

## Syntax

    WebAssembly.instantiateStreaming(source, importObject)

### Parameters

_source_  
A [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object or a promise that will fulfill with one, representing the underlying source of a .wasm module you want to stream, compile, and instantiate.

_importObject_ <span class="badge inline optional">Optional</span>  
An object containing the values to be imported into the newly-created `Instance`, such as functions or [`WebAssembly.Memory`](memory) objects. There must be one matching property for each declared import of the compiled module or else a `WebAssembly.LinkError` is thrown.

### Return value

A `Promise` that resolves to a `ResultObject` which contains two fields:

-   `module`: A [`WebAssembly.Module`](module) object representing the compiled WebAssembly module. This `Module` can be instantiated again or shared via [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).
-   `instance`: A [`WebAssembly.Instance`](instance) object that contains all the [Exported WebAssembly functions](https://developer.mozilla.org/en-US/docs/WebAssembly/Exported_functions).

### Exceptions

-   If either of the parameters are not of the correct type or structure, a [`TypeError`](../typeerror) is thrown.
-   If the operation fails, the promise rejects with a [`WebAssembly.CompileError`](compileerror), [`WebAssembly.LinkError`](linkerror), or [`WebAssembly.RuntimeError`](runtimeerror), depending on the cause of the failure.

## Examples

### Instantiating streaming

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also) directly streams a .wasm module from an underlying source then compiles and instantiates it, the promise fulfilling with a `ResultObject`. Because the `instantiateStreaming()` function accepts a promise for a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, you can directly pass it a [`WindowOrWorkerGlobalScope.fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) call, and it will pass the response into the function when it fulfills.

    var importObject = { imports: { imported_func: arg => console.log(arg) } };

    WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
    .then(obj => obj.instance.exports.exported_func());

The `ResultObject`'s instance member is then accessed, and the contained exported function invoked.

**Note:** For this to work, `.wasm` files should be returned with an `application/wasm` MIME type by the server.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/web-api/#dom-webassembly-instantiatestreaming">WebAssembly Web API (WebAssembly Web API) 
<br/>

<span class="small">#dom-webassembly-instantiatestreaming</span></a></td></tr></tbody></table>

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

## See also

-   [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) overview page
-   [WebAssembly concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
-   [Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming</a>
