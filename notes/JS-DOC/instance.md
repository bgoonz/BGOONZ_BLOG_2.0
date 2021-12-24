# WebAssembly.Instance

A `WebAssembly.Instance` object is a stateful, executable instance of a [`WebAssembly.Module`](module). `Instance` objects contain all the [Exported WebAssembly functions](https://developer.mozilla.org/en-US/docs/WebAssembly/Exported_functions) that allow calling into WebAssembly code from JavaScript.

## Constructor

[`WebAssembly.Instance()`](instance/instance)  
Creates a new `Instance` object.

## Instance properties

[`Instance.prototype.exports`](instance/exports)  
Returns an object containing as its members all the functions exported from the WebAssembly module instance, to allow them to be accessed and used by JavaScript. Read-only.

## Examples

### Synchronously instantiating a WebAssembly module

The `WebAssembly.Instance()` constructor function can be called to synchronously instantiate a given [`WebAssembly.Module`](module) object, for example:

    const importObject = {
      imports: {
        imported_func: function(arg) {
          console.log(arg);
        }
      }
    };

    fetch('simple.wasm').then(response =>
      response.arrayBuffer()
    ).then(bytes => {
      let mod = new WebAssembly.Module(bytes);
      let instance = new WebAssembly.Instance(mod, importObject);
      instance.exports.exported_func();
    })

The preferred way to get an `Instance` is asynchronously, for example using the [`WebAssembly.instantiateStreaming()`](instantiatestreaming) function like this:

    const importObject = {
      imports: {
        imported_func: function(arg) {
          console.log(arg);
        }
      }
    };

    WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
    .then(obj => obj.instance.exports.exported_func());

This also demonstrates how the `exports` property is used to access exported functions.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#instances">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#instances</span></a></td></tr></tbody></table>

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance</a>
