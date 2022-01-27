# WebAssembly.Memory.prototype.grow()

The `grow()` protoype method of the `Memory` object increases the size of the memory instance by a specified number of WebAssembly pages.

## Syntax

    grow(number)

### Parameters

_number_  
The number of WebAssembly pages you want to grow the memory by (each one is 64KiB in size).

### Return value

The previous size of the memory, in units of WebAssembly pages.

## Examples

### Using grow

The following example creates a new WebAssembly Memory instance with an initial size of 1 page (64KiB), and a maximum size of 10 pages (640KiB).

    var memory = new WebAssembly.Memory({initial:1, maximum:10});

We can then grow the instance by one page like so:

    const bytesPerPage = 64 * 1024;
    console.log(memory.buffer.byteLength / bytesPerPage);  // "1"
    console.log(memory.grow(1));                           // "1"
    console.log(memory.buffer.byteLength / bytesPerPage);  // "2"

Note the return value of `grow()` here is the previous number of WebAssembly pages.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#dom-memory-grow">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#dom-memory-grow</span></a></td></tr></tbody></table>

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow</a>
