# WebAssembly.Memory.prototype.buffer

The `buffer` prototype property of the [`WebAssembly.Memory`](../memory) object returns the buffer contained in the memory.

## Examples

### Using buffer

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) fetches and instantiates the loaded memory.wasm byte code using the [`WebAssembly.instantiateStreaming()`](../instantiatestreaming) method, while importing the memory created in the line above. It then stores some values in that memory, then exports a function and uses it to sum some values.

    WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
    .then(obj => {
      var i32 = new Uint32Array(memory.buffer);
      for (var i = 0; i < 10; i++) {
        i32[i] = i;
      }
      var sum = obj.instance.exports.accumulate(0, 10);
      console.log(sum);
    });

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-memory-buffer">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-memory-buffer</span></a></td></tr></tbody></table>

`buffer`

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer</a>
