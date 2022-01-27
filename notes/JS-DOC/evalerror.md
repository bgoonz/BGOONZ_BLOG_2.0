# EvalError

The `EvalError` object indicates an error regarding the global [`eval()`](eval) function. This exception is not thrown by JavaScript anymore, however the `EvalError` object remains for compatibility.

## Constructor

[`EvalError()`](evalerror/evalerror)  
Creates a new `EvalError` object.

## Instance properties

[`EvalError.prototype.message`](error/message)  
Error message. Although ECMA-262 specifies that [`EvalError`](evalerror) should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](error/message).

[`EvalError.prototype.name`](error/name)  
Error name. Inherited from [`Error`](error).

[`EvalError.prototype.fileName`](error/filename)  
Path to file that raised this error. Inherited from [`Error`](error).

[`EvalError.prototype.lineNumber`](error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](error).

[`EvalError.prototype.columnNumber`](error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](error).

[`EvalError.prototype.stack`](error/stack)  
Stack trace. Inherited from [`Error`](error).

## Examples

`EvalError` is not used in the current ECMAScript specification and will thus not be thrown by the runtime. However, the object itself remains for backwards compatibility with earlier versions of the specification.

### Creating an EvalError

    try {
      throw new EvalError('Hello', 'someFile.js', 10);
    } catch (e) {
      console.log(e instanceof EvalError); // true
      console.log(e.message);              // "Hello"
      console.log(e.name);                 // "EvalError"
      console.log(e.fileName);             // "someFile.js"
      console.log(e.lineNumber);           // 10
      console.log(e.columnNumber);         // 0
      console.log(e.stack);                // "@Scratchpad/2:2:9\n"
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-evalerror">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-native-error-types-used-in-this-standard-evalerror</span></a></td></tr></tbody></table>

`EvalError`

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

`EvalError`

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
-   [`eval()`](eval)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError</a>
