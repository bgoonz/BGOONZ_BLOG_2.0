# WebAssembly.LinkError

The `WebAssembly.LinkError` object indicates an error during module instantiation (besides [traps](https://webassembly.org/docs/semantics/#traps) from the start function).

## Constructor

[`WebAssembly.LinkError()`](linkerror/linkerror)  
Creates a new `WebAssembly.LinkError` object.

## Instance properties

[`WebAssembly.LinkError.prototype.message`](../error/message)  
Error message. Although ECMA-262 specifies that [`URIError`](../urierror) should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](../error/message).

[`WebAssembly.LinkError.prototype.name`](../error/name)  
Error name. Inherited from [`Error`](../error).

[`WebAssembly.LinkError.prototype.fileName`](../error/filename)  
Path to file that raised this error. Inherited from [`Error`](../error).

[`WebAssembly.LinkError.prototype.lineNumber`](../error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](../error).

[`WebAssembly.LinkError.prototype.columnNumber`](../error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](../error).

[`WebAssembly.LinkError.prototype.stack`](../error/stack)  
Stack trace. Inherited from [`Error`](../error).

## Instance methods

[`WebAssembly.LinkError.prototype.toSource()`](../error/tosource)  
Returns code that could eval to the same error. Inherited from [`Error`](../error).

[`WebAssembly.LinkError.prototype.toString()`](../error/tostring)  
Returns a string representing the specified `Error` object.. Inherited from [`Error`](../error).

## Examples

### Creating a new LinkError instance

The following snippet creates a new `LinkError` instance, and logs its details to the console:

    try {
      throw new WebAssembly.LinkError('Hello', 'someFile', 10);
    } catch (e) {
      console.log(e instanceof LinkError); // true
      console.log(e.message);                 // "Hello"
      console.log(e.name);                    // "LinkError"
      console.log(e.fileName);                // "someFile"
      console.log(e.lineNumber);              // 10
      console.log(e.columnNumber);            // 0
      console.log(e.stack);                   // returns the location where the code was run
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://webassembly.github.io/spec/js-api/#exceptiondef-linkerror">WebAssembly JavaScript Interface (WebAssembly JavaScript Interface) 
<br/>

<span class="small">#exceptiondef-linkerror</span></a></td></tr><tr class="even"><td><a href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard">ECMAScript Language Specification (ECMAScript)
<br/>

<span class="small">#sec-native-error-types-used-in-this-standard</span></a></td></tr></tbody></table>

`LinkError`

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

`LinkError`

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
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError</a>
