# URIError

The `URIError` object represents an error when a global URI handling function was used in a wrong way.

## Constructor

[`URIError()`](urierror/urierror)  
Creates a new `URIError` object.

## Instance properties

[`URIError.prototype.message`](error/message)  
Error message. Although ECMA-262 specifies that [`URIError`](urierror) should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](error/message).

[`URIError.prototype.name`](error/name)  
Error name. Inherited from [`Error`](error).

[`URIError.prototype.fileName`](error/filename)  
Path to file that raised this error. Inherited from [`Error`](error).

[`URIError.prototype.lineNumber`](error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](error).

[`URIError.prototype.columnNumber`](error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](error).

[`URIError.prototype.stack`](error/stack)  
Stack trace. Inherited from [`Error`](error).

## Examples

### Catching an URIError

    try {
      decodeURIComponent('%')
    } catch (e) {
      console.log(e instanceof URIError)  // true
      console.log(e.message)              // "malformed URI sequence"
      console.log(e.name)                 // "URIError"
      console.log(e.fileName)             // "Scratchpad/1"
      console.log(e.lineNumber)           // 2
      console.log(e.columnNumber)         // 2
      console.log(e.stack)                // "@Scratchpad/2:2:3\n"
    }

### Creating an URIError

    try {
      throw new URIError('Hello', 'someFile.js', 10)
    } catch (e) {
      console.log(e instanceof URIError)  // true
      console.log(e.message)              // "Hello"
      console.log(e.name)                 // "URIError"
      console.log(e.fileName)             // "someFile.js"
      console.log(e.lineNumber)           // 10
      console.log(e.columnNumber)         // 0
      console.log(e.stack)                // "@Scratchpad/2:2:9\n"
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-urierror">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-native-error-types-used-in-this-standard-urierror</span></a></td></tr></tbody></table>

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

`URIError`

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

`URIError`

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
-   [`decodeURI()`](decodeuri)
-   [`decodeURIComponent()`](decodeuricomponent)
-   [`encodeURI()`](encodeuri)
-   [`encodeURIComponent()`](encodeuricomponent)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError</a>
