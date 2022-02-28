# ReferenceError

The `ReferenceError` object represents an error when a non-existent variable is referenced.

## Constructor

[`ReferenceError()`](referenceerror/referenceerror)  
Creates a new `ReferenceError` object.

## Instance properties

[`ReferenceError.prototype.message`](error/message)  
Error message. Although ECMA-262 specifies that [`ReferenceError`](referenceerror) should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](error/message).

[`ReferenceError.prototype.name`](error/name)  
Error name. Inherited from [`Error`](error).

[`ReferenceError.prototype.fileName`](error/filename)  
Path to file that raised this error. Inherited from [`Error`](error).

[`ReferenceError.prototype.lineNumber`](error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](error).

[`ReferenceError.prototype.columnNumber`](error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](error).

[`ReferenceError.prototype.stack`](error/stack)  
Stack trace. Inherited from [`Error`](error).

## Examples

### Catching a ReferenceError

    try {
      let a = undefinedVariable
    } catch (e) {
      console.log(e instanceof ReferenceError)  // true
      console.log(e.message)                    // "undefinedVariable is not defined"
      console.log(e.name)                       // "ReferenceError"
      console.log(e.fileName)                   // "Scratchpad/1"
      console.log(e.lineNumber)                 // 2
      console.log(e.columnNumber)               // 6
      console.log(e.stack)                      // "@Scratchpad/2:2:7\n"
    }

### Creating a ReferenceError

    try {
      throw new ReferenceError('Hello', 'someFile.js', 10)
    } catch (e) {
      console.log(e instanceof ReferenceError)  // true
      console.log(e.message)                    // "Hello"
      console.log(e.name)                       // "ReferenceError"
      console.log(e.fileName)                   // "someFile.js"
      console.log(e.lineNumber)                 // 10
      console.log(e.columnNumber)               // 0
      console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-referenceerror">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-native-error-types-used-in-this-standard-referenceerror</span></a></td></tr></tbody></table>

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

`ReferenceError`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

`ReferenceError`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

## See also

-   [`Error`](error)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError</a>
