# WebAssembly.Module.imports()

The `WebAssembly.imports()` function returns an array containing descriptions of all the declared imports of the given `Module`.

## Syntax

    WebAssembly.Module.imports(module)

### Parameters

_module_  
A [`WebAssembly.Module`](../module) object.

### Return value

An array containing objects representing the imported functions of the given module.

### Exceptions

If module is not a [`WebAssembly.Module`](../module) object instance, a [`TypeError`](../../typeerror) is thrown.

## Examples

### Using imports

The following example (see imports.html [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/imports.html); [see it live also](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html)) compiles the loaded simple.wasm module. This module is then queried for its imports.

    WebAssembly.compileStreaming(fetch('simple.wasm'))
    .then(function(mod) {
      var imports = WebAssembly.Module.imports(mod);
      console.log(imports[0]);
    });

The output looks like this:

    { module: "imports", name: "imported_func", kind: "function" }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-module-imports">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-module-imports</span></a></td></tr></tbody></table>

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports</a>
