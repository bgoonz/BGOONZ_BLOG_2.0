# WebAssembly.Module.exports()

The `WebAssembly.Module.exports()` function returns an array containing descriptions of all the declared exports of the given `Module`.

## Syntax

    WebAssembly.Module.exports(module)

### Parameters

_module_  
A [`WebAssembly.Module`](../module) object.

### Return value

An array containing objects representing the exported functions of the given module.

### Exceptions

If module is not a [`WebAssembly.Module`](../module) object instance, a [`TypeError`](../../typeerror) is thrown.

## Examples

### Using exports

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also) compiles the loaded simple.wasm byte code using the [`WebAssembly.compileStreaming()`](../compilestreaming) method and then sends it to a [worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) using [postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).

    var worker = new Worker("wasm_worker.js");

    WebAssembly.compileStreaming(fetch('simple.wasm'))
    .then(mod =>
      worker.postMessage(mod)
    );

In the worker (see `wasm_worker.js`) we define an import object for the module to use, then set up an event handler to receive the module from the main thread. when the module is received, we create an instance from it using the [`WebAssembly.Instantiate()`](../instantiate) method, invoke an exported function from inside it, then show how we can return information on the available exports on a module using `WebAssembly.Module.exports`.

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

      var exports = WebAssembly.Module.exports(mod);
      console.log(exports[0]);
    };

The `exports[0]` output looks like this:

    { name: "exported_func", kind: "function" }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-module-exports">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-module-exports</span></a></td></tr></tbody></table>

`exports`

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports</a>
