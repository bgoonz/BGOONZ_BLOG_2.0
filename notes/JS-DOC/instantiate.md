# WebAssembly.instantiate()

The `WebAssembly.instantiate()` function allows you to compile and instantiate WebAssembly code. This function has two overloads:

-   The primary overload takes the WebAssembly binary code, in the form of a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`ArrayBuffer`](../arraybuffer), and performs both compilation and instantiation in one step. The returned `Promise` resolves to both a compiled [`WebAssembly.Module`](module) and its first [`WebAssembly.Instance`](instance).
-   The secondary overload takes an already-compiled [`WebAssembly.Module`](module) and returns a `Promise` that resolves to an `Instance` of that `Module`. This overload is useful if the `Module` has already been compiled.

**Warning:** This method is not the most efficient way of fetching and instantiating wasm modules. If at all possible, you should use the newer [`WebAssembly.instantiateStreaming()`](instantiatestreaming) method instead, which fetches, compiles, and instantiates a module all in one step, directly from the raw bytecode, so doesn't require conversion to an [`ArrayBuffer`](../arraybuffer).

## Syntax

### Primary overload — taking wasm binary code

    WebAssembly.instantiate(bufferSource, importObject);

#### Parameters

_bufferSource_  
A [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`ArrayBuffer`](../arraybuffer) containing the binary code of the .wasm module you want to compile.

_importObject_ <span class="badge inline optional">Optional</span>  
An object containing the values to be imported into the newly-created `Instance`, such as functions or [`WebAssembly.Memory`](memory) objects. There must be one matching property for each declared import of the compiled module or else a [`WebAssembly.LinkError`](linkerror) is thrown.

#### Return value

A `Promise` that resolves to a `ResultObject` which contains two fields:

-   `module`: A [`WebAssembly.Module`](module) object representing the compiled WebAssembly module. This `Module` can be instantiated again, shared via [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage) or [cached in IndexedDB](https://developer.mozilla.org/en-US/docs/WebAssembly/Caching_modules).
-   `instance`: A [`WebAssembly.Instance`](instance) object that contains all the [Exported WebAssembly functions](https://developer.mozilla.org/en-US/docs/WebAssembly/Exported_functions).

#### Exceptions

-   If either of the parameters are not of the correct type or structure, a [`TypeError`](../typeerror) is thrown.
-   If the operation fails, the promise rejects with a [`WebAssembly.CompileError`](compileerror), [`WebAssembly.LinkError`](linkerror), or [`WebAssembly.RuntimeError`](runtimeerror), depending on the cause of the failure.

### Secondary overload — taking a module object instance

    WebAssembly.instantiate(module, importObject);

#### Parameters

_module_  
The [`WebAssembly.Module`](module) object to be instantiated.

_importObject_ <span class="badge inline optional">Optional</span>  
An object containing the values to be imported into the newly-created `Instance`, such as functions or [`WebAssembly.Memory`](memory) objects. There must be one matching property for each declared import of `module` or else a [`WebAssembly.LinkError`](linkerror) is thrown.

#### Return value

A `Promise` that resolves to an [`WebAssembly.Instance`](instance) object.

#### Exceptions

-   If either of the parameters are not of the correct type or structure, a [`TypeError`](../typeerror) is thrown.
-   If the operation fails, the promise rejects with a [`WebAssembly.CompileError`](compileerror), [`WebAssembly.LinkError`](linkerror), or [`WebAssembly.RuntimeError`](runtimeerror), depending on the cause of the failure.

## Examples

**Note**: You'll probably want to use [`WebAssembly.instantiateStreaming()`](instantiatestreaming) in most cases, as it is more efficient than `instantiate()`.

### First overload example

After fetching some WebAssembly bytecode using fetch, we compile and instantiate the module using the [`WebAssembly.instantiate()`](instantiate) function, importing a JavaScript function into the WebAssembly Module in the process. We then call an [Exported WebAssembly function](https://developer.mozilla.org/en-US/docs/WebAssembly/Exported_functions) that is exported by the `Instance`.

    var importObject = {
      imports: {
        imported_func: function(arg) {
          console.log(arg);
        }
      }
    };

    fetch('simple.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes, importObject)
    ).then(result =>
      result.instance.exports.exported_func()
    );

**Note:** You can also find this example at [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) on GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Second overload example

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also) compiles the loaded simple.wasm byte code using the [`WebAssembly.compileStreaming()`](compilestreaming) method and then sends it to a [worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) using [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).

    var worker = new Worker("wasm_worker.js");

    WebAssembly.compileStreaming(fetch('simple.wasm'))
    .then(mod =>
      worker.postMessage(mod)
    );

In the worker (see `wasm_worker.js`) we define an import object for the module to use, then set up an event handler to receive the module from the main thread. When the module is received, we create an instance from it using the [`WebAssembly.instantiate()`](instantiate) method and invoke an exported function from inside it.

    var importObject = {
      imports: {
        imported_func: function(arg) {
          console.log(arg);
        }
      }
    };

    onmessage = function(e) {
      console.log('module received from main thread');
      var mod = e.data;

      WebAssembly.instantiate(mod, importObject).then(function(instance) {
        instance.exports.exported_func();
      });
    };

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-webassembly-instantiate">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-webassembly-instantiate</span></a></td></tr></tbody></table>

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

## See also

-   [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) overview page
-   [WebAssembly concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
-   [Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate</a>
