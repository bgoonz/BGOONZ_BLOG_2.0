# WebAssembly.validate()

The `WebAssembly.validate()` function validates a given [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) of WebAssembly binary code, returning whether the bytes form a valid wasm module (`true`) or not (`false`).

## Syntax

    WebAssembly.validate(bufferSource)

### Parameters

`bufferSource`  
A [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [ArrayBuffer](../arraybuffer) containing WebAssembly binary code to be validated.

### Return value

A boolean that specifies whether `bufferSource` is valid wasm code (`true`) or not (`false`).

### Exceptions

If `bufferSource` is not a [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [ArrayBuffer](../arraybuffer), a [`TypeError`](../typeerror) is thrown.

## Examples

### Using validate

The following example (see the validate.html [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/validate.html), and [see it live too](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)) fetches a .wasm module and converts it into a typed array. The `validate()` method is then used to check whether the module is valid.

    fetch('simple.wasm').then(response =>
      response.arrayBuffer()
    ).then(function(bytes) {
      var valid = WebAssembly.validate(bytes);
      console.log("The given bytes are "
        + (valid ? "" : "not ") + "a valid wasm module");
    });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-webassembly-validate">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface)<br />
<span class="small">#dom-webassembly-validate</span></a></td></tr></tbody></table>

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

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/validate" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/validate</a>
