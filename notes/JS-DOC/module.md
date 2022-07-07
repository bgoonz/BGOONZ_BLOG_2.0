# WebAssembly.Module

A `WebAssembly.Module` object contains stateless WebAssembly code that has already been compiled by the browser — this can be efficiently [shared with Workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

## Constructor

[`WebAssembly.Module()`](module/module)  
Creates a new `Module` object.

## Static properties

[`WebAssembly.Module.customSections()`](module/customsections)  
Given a `Module` and string, returns a copy of the contents of all custom sections in the module with the given string name.

[`WebAssembly.Module.exports()`](module/exports)  
Given a `Module`, returns an array containing descriptions of all the declared exports.

[`WebAssembly.Module.imports()`](module/imports)  
Given a `Module`, returns an array containing descriptions of all the declared imports.

## Examples

### Sending a compiled module to a worker

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also) compiles the loaded `simple.wasm` byte code using the [`WebAssembly.compileStreaming()`](compilestreaming) method and then sends the resulting `Module` instance to a [worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) using [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).

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

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#modules">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#modules</span></a></td></tr></tbody></table>

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

`customSections`

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

`imports`

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module</a>
