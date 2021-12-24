# WebAssembly.Memory

The `WebAssembly.Memory` object is a resizable [`ArrayBuffer`](../arraybuffer) or `SharedArrayBuffer` that holds the raw bytes of memory accessed by a WebAssembly `Instance`.

A memory created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly.

## Constructor

[`WebAssembly.Memory()`](memory/memory)  
Creates a new `Memory` object.

## Instance properties

[`Memory.prototype.buffer`](memory/buffer)  
An accessor property that returns the buffer contained in the memory.

## Instance methods

[`Memory.prototype.grow()`](memory/grow)  
Increases the size of the memory instance by a specified number of WebAssembly pages (each one is 64KB in size).

## Examples

### Creating a new Memory object

There are two ways to get a `WebAssembly.Memory` object. The first way is to construct it from JavaScript. The following snippet creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). Its `buffer` property will return an `ArrayBuffer`.

    var memory = new WebAssembly.Memory({initial:10, maximum:100});

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) fetches and instantiates the loaded memory.wasm byte code using the [`WebAssembly.instantiateStreaming()`](instantiatestreaming) method, while importing the memory created in the line above. It then stores some values in that memory, then exports a function and uses it to sum some values.

    WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
    .then(obj => {
      var i32 = new Uint32Array(memory.buffer);
      for (var i = 0; i < 10; i++) {
        i32[i] = i;
      }
      var sum = obj.instance.exports.accumulate(0, 10);
      console.log(sum);
    });

The second way to get a WebAssembly.Memory object is to have it exported by a WebAssembly module. This memory can be accessed in the `exports` property of the Web Assembly instance (after the memory is exported within the Web Assembly module). The following snippet imports a memory exported from WebAssembly with the name `memory`, and then prints out the first element of the memory, interpreted as an Uint32Array.

    WebAssembly.instantiateStreaming(fetch('memory.wasm'))
    .then(obj => {
       var i32 = new Uint32Array(obj.instance.exports.memory.buffer);
       console.log(i32[0]);
     });

### Creating a shared memory

By default, WebAssembly memories are unshared. You can create a [shared memory](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format#shared_memories) by passing `shared: true` in the constructor's initialization object:

    let memory = new WebAssembly.Memory({initial:10, maximum:100, shared: true});

This memory's `buffer` property will return a `SharedArrayBuffer`.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#memories">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#memories</span></a></td></tr></tbody></table>

`Memory`

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

`Memory`

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

`grow`

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory</a>
