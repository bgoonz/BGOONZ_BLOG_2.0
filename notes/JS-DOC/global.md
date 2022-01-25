# WebAssembly.Global() constructor

A `WebAssembly.Global()` constructor creates a new `Global` object representing a global variable instance, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](../module) instances. This allows dynamic linking of multiple modules.

## Syntax

    new WebAssembly.Global(descriptor, value)

### Parameters

_descriptor_  
A `GlobalDescriptor` dictionary object, which contains two properties:

-   `value`: A [`USVString`](https://developer.mozilla.org/en-US/docs/Web/API/USVString) representing the data type of the global. This can be one of `i32`, `i64`, `f32`, and `f64`. USVString corresponds to the set of all possible sequences of unicode scalar values. USVString maps to a String when returned in JavaScript; it's generally only used for APIs that perform text processing and need a string of unicode scalar values to operate on. USVString is equivalent to DOMString except for not allowing unpaired surrogate codepoints. Unpaired surrogate codepoints present in USVString are converted by the browser to Unicode 'replacement character' U+FFFD, (�).
-   `mutable`: A boolean value that determines whether the global is mutable or not. By default, this is `false`.

_value_  
The value the variable contains. This can be any value, as long as its type matches the variable's data type. If no value is specified, a typed 0 value is used, as specified by the [`DefaultValue` algorithm](https://webassembly.github.io/spec/js-api/#defaultvalue).

## Examples

### Creating a new Global instance

The following example shows a new global instance being created using the `WebAssembly.Global()` constructor. It is being defined as a mutable `i32` type, with a value of 0.

The value of the global is then changed, first to `42` using the `Global.value` property, and then to 43 using the `incGlobal()` function exported out of the `global.wasm` module (this adds 1 to whatever value is given to it and then returns the new value).

    const output = document.getElementById('output');

    function assertEq(msg, got, expected) {
      output.innerHTML += `Testing ${msg}: `;
      if (got !== expected)
        output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
      else
        output.innerHTML += `SUCCESS! Got: ${got}<br>`;
    }

    assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

    const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

    WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
    .then(({instance}) => {
        assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
        global.value = 42;
        assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
        instance.exports.incGlobal();
        assertEq("getting wasm-updated value from JS", global.value, 43);
    });

**Note:** You can see the example [running live on GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); see also the [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-global-global">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-global-global</span></a></td></tr></tbody></table>

`Global`

69

79

62

No

No

13.1

69

69

62

No

13.4

10.0

## See also

-   [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) overview page
-   [WebAssembly concepts](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts)
-   [Using the WebAssembly JavaScript API](https://developer.mozilla.org/en-US/docs/WebAssembly/Using_the_JavaScript_API)
-   [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global</a>
