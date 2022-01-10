# WebAssembly.Module.customSections()

The `WebAssembly.customSections()` function returns a copy of the contents of all custom sections in the given module with the given string name.

## Syntax

    WebAssembly.Module.customSections(module, sectionName)

### Parameters

_module_  
The [`WebAssembly.Module`](../module) object whose custom sections are being considered.

_sectionName_  
The string name of the desired custom section.

### Return value

A (possibly empty) array containing [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) copies of the contents of all custom sections matching `sectionName`.

### Exceptions

If `module` is not a [`WebAssembly.Module`](../module) object instance, a [`TypeError`](../../typeerror) is thrown.

## Description

A wasm module is comprised of a sequence of **sections**. Most of these sections are fully specified and validated by the wasm spec, but modules can also contain **custom sections** that are ignored and skipped over during validation. (Read [High level structure](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#high-level-structure) for information on section structures, and how normal sections ("known sections") and custom sections are distinguished.)

This provides developers with a way to include custom data inside wasm modules for other purposes, for example the [name custom section](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section), which allows developers to provide names for all the functions and locals in the module (like "symbols" in a native build).

Note that the WebAssembly text format currently doesn't have a syntax specified for adding new custom sections; you can however add a name section to your wasm during conversion from text format over to .wasm. The wast2wasm command available as part of the [wabt tool](https://github.com/webassembly/wabt) has a `--debug-names` option — specify this during conversion to get a .wasm with a names custom section, for example:

    wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names

## Examples

### Using customSections

The following example (see the custom-section.html [source](https://github.com/mdn/webassembly-examples/blob/master/other-examples/custom-section.html) and [live example](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html)) compiles the loaded simple-name-section.wasm byte code.

We then do a check using `WebAssembly.Module.customSections`, looking to see whether the module instance contains a "name" custom section by checking that its `length` is more than 0. Since there is a "name" section in the example, an `ArrayBuffer` object is returned.

    WebAssembly.compileStreaming(fetch('simple-name-section.wasm'))
    .then(function(mod) {
      var nameSections = WebAssembly.Module.customSections(mod, "name");
      if (nameSections.length != 0) {
        console.log("Module contains a name section");
        console.log(nameSections[0]);
      };
    });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-module-customsections">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-module-customsections</span></a></td></tr></tbody></table>

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

## See also

-   [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) overview page
-   [WebAssembly concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
-   [Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections</a>
