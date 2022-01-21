# TypeError

The `TypeError` object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

A `TypeError` may be thrown when:

-   an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
-   when attempting to modify a value that cannot be changed; or
-   when attempting to use a value in an inappropriate way.

## Constructor

[`TypeError()`](typeerror/typeerror)  
Creates a new `TypeError` object.

## Instance properties

[`TypeError.prototype.message`](error/message)  
Error message. Although ECMA-262 specifies that [`TypeError`](typeerror) should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](error/message).

[`TypeError.prototype.name`](error/name)  
Error name. Inherited from [`Error`](error).

[`TypeError.prototype.fileName`](error/filename)  
Path to file that raised this error. Inherited from [`Error`](error).

[`TypeError.prototype.lineNumber`](error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](error).

[`TypeError.prototype.columnNumber`](error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](error).

[`TypeError.prototype.stack`](error/stack)  
Stack trace. Inherited from [`Error`](error).

## Examples

### Catching a TypeError

    try {
      null.f()
    } catch (e) {
      console.log(e instanceof TypeError)  // true
      console.log(e.message)               // "null has no properties"
      console.log(e.name)                  // "TypeError"
      console.log(e.fileName)              // "Scratchpad/1"
      console.log(e.lineNumber)            // 2
      console.log(e.columnNumber)          // 2
      console.log(e.stack)                 // "@Scratchpad/2:2:3\n"
    }

### Creating a TypeError

    try {
      throw new TypeError('Hello', "someFile.js", 10)
    } catch (e) {
      console.log(e instanceof TypeError)  // true
      console.log(e.message)               // "Hello"
      console.log(e.name)                  // "TypeError"
      console.log(e.fileName)              // "someFile.js"
      console.log(e.lineNumber)            // 10
      console.log(e.columnNumber)          // 0
      console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'TypeError' in that specification.</span></a></td></tr></tbody></table>

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

`TypeError`

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

`TypeError`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError</a>
