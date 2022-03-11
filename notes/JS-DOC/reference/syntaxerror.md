# SyntaxError

The `SyntaxError` object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

## Constructor

[`SyntaxError()`](syntaxerror/syntaxerror)  
Creates a new `SyntaxError` object.

## Instance properties

[`SyntaxError.prototype.message`](error/message)  
Error message. Although ECMA-262 specifies that [`SyntaxError`](syntaxerror) should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](error/message).

[`SyntaxError.prototype.name`](error/name)  
Error name. Inherited from [`Error`](error).

[`SyntaxError.prototype.fileName`](error/filename)  
Path to file that raised this error. Inherited from [`Error`](error).

[`SyntaxError.prototype.lineNumber`](error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](error).

[`SyntaxError.prototype.columnNumber`](error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](error).

[`SyntaxError.prototype.stack`](error/stack)  
Stack trace. Inherited from [`Error`](error).

## Examples

### Catching a SyntaxError

    try {
      eval('hoo bar');
    } catch (e) {
      console.error(e instanceof SyntaxError);
      console.error(e.message);
      console.error(e.name);
      console.error(e.fileName);
      console.error(e.lineNumber);
      console.error(e.columnNumber);
      console.error(e.stack);
    }

### Creating a SyntaxError

    try {
      throw new SyntaxError('Hello', 'someFile.js', 10);
    } catch (e) {
      console.error(e instanceof SyntaxError); // true
      console.error(e.message);                // Hello
      console.error(e.name);                   // SyntaxError
      console.error(e.fileName);               // someFile.js
      console.error(e.lineNumber);             // 10
      console.error(e.columnNumber);           // 0
      console.error(e.stack);                  // @debugger eval code:3:9
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-syntaxerror">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-native-error-types-used-in-this-standard-syntaxerror</span></a></td></tr></tbody></table>

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

`SyntaxError`

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

`SyntaxError`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError</a>
