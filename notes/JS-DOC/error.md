# Error

`Error` objects are thrown when runtime errors occur. The `Error` object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

## Description

Runtime errors result in new `Error` objects being created and thrown.

### Error types

Besides the generic `Error` constructor, there are other core error constructors in JavaScript. For client-side exceptions, see [Exception handling statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

[`EvalError`](evalerror)  
Creates an instance representing an error that occurs regarding the global function [`eval()`](eval).

[`RangeError`](rangeerror)  
Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.

[`ReferenceError`](referenceerror)  
Creates an instance representing an error that occurs when de-referencing an invalid reference.

[`SyntaxError`](syntaxerror)  
Creates an instance representing a syntax error.

[`TypeError`](typeerror)  
Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

[`URIError`](urierror)  
Creates an instance representing an error that occurs when [`encodeURI()`](encodeuri) or [`decodeURI()`](decodeuri) are passed invalid parameters.

[`AggregateError`](aggregateerror)  
Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by [`Promise.any()`](promise/any).

[`InternalError`](internalerror) <span class="icon non-standard" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img"> This API has not been standardized. </span>  
Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

## Constructor

[`Error()`](error/error)  
Creates a new `Error` object.

## Static methods

<span class="page-not-created">`Error.captureStackTrace()`</span>  
A non-standard **V8** function that creates the [`stack`](error/stack) property on an Error instance.

## Instance properties

[`Error.prototype.message`](error/message)  
Error message.

[`Error.prototype.name`](error/name)  
Error name.

<span class="page-not-created">`Error.prototype.description`</span>  
A non-standard Microsoft property for the error description. Similar to [`message`](error/message).

<span class="page-not-created">`Error.prototype.number`</span>  
A non-standard Microsoft property for an error number.

[`Error.prototype.fileName`](error/filename)  
A non-standard Mozilla property for the path to the file that raised this error.

[`Error.prototype.lineNumber`](error/linenumber)  
A non-standard Mozilla property for the line number in the file that raised this error.

[`Error.prototype.columnNumber`](error/columnnumber)  
A non-standard Mozilla property for the column number in the line that raised this error.

[`Error.prototype.stack`](error/stack)  
A non-standard Mozilla property for a stack trace.

## Instance methods

[`Error.prototype.toString()`](error/tostring)  
Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`](object/tostring) method.

## Examples

### Throwing a generic error

Usually you create an `Error` object with the intention of raising it using the [`throw`](../statements/throw) keyword. You can handle the error using the [`try...catch`](../statements/try...catch) construct:

    try {
      throw new Error('Whoops!')
    } catch (e) {
      console.error(e.name + ': ' + e.message)
    }

### Handling a specific error

You can choose to handle only specific error types by testing the error type with the error's [`constructor`](object/constructor) property or, if you're writing for modern JavaScript engines, [`instanceof`](../operators/instanceof) keyword:

    try {
      foo.bar()
    } catch (e) {
      if (e instanceof EvalError) {
        console.error(e.name + ': ' + e.message)
      } else if (e instanceof RangeError) {
        console.error(e.name + ': ' + e.message)
      }
      // ... etc
    }

### Custom Error Types

You might want to define your own error types deriving from `Error` to be able to `throw new MyError()` and use `instanceof MyError` to check the kind of error in the exception handler. This results in cleaner and more consistent error handling code.

See ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) on StackOverflow for an in-depth discussion.

#### ES6 Custom Error Class

**Warning:** Versions of Babel prior to 7 can handle `CustomError` class methods, but only when they are declared with [Object.defineProperty()](object/defineproperty). Otherwise, old versions of Babel and other transpilers will not correctly handle the following code without [additional configuration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend).

**Note:** Some browsers include the `CustomError` constructor in the stack trace when using ES2015 classes.

    class CustomError extends Error {
      constructor(foo = 'bar', ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, CustomError)
        }

        this.name = 'CustomError'
        // Custom debugging information
        this.foo = foo
        this.date = new Date()
      }
    }

    try {
      throw new CustomError('baz', 'bazMessage')
    } catch(e) {
      console.error(e.name)    //CustomError
      console.error(e.foo)     //baz
      console.error(e.message) //bazMessage
      console.error(e.stack)   //stacktrace
    }

#### ES5 Custom Error Object

**Warning:** All browsers include the `CustomError` constructor in the stack trace when using a prototypal declaration.

    function CustomError(foo, message, fileName, lineNumber) {
      var instance = new Error(message, fileName, lineNumber);
      instance.name = 'CustomError';
      instance.foo = foo;
      Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
      if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, CustomError);
      }
      return instance;
    }

    CustomError.prototype = Object.create(Error.prototype, {
      constructor: {
        value: Error,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });

    if (Object.setPrototypeOf){
      Object.setPrototypeOf(CustomError, Error);
    } else {
      CustomError.__proto__ = Error;
    }

    try {
      throw new CustomError('baz', 'bazMessage');
    } catch(e){
      console.error(e.name); //CustomError
      console.error(e.foo); //baz
      console.error(e.message); //bazMessage
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-error-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-error-objects</span></a></td></tr></tbody></table>

`Error`

1

12

1

6

4

1

1

18

4

10.1

1

1.0

`Error`

1

12

1

6

4

1

1

18

4

10.1

1

1.0

`columnNumber`

No

No

1

No

No

No

No

No

4

No

No

No

`fileName`

No

No

1

No

No

No

No

No

4

No

No

No

`lineNumber`

No

No

1

No

No

No

No

No

4

No

No

No

`message`

1

12

1

6

5

1

1

18

4

10.1

1

1.0

`name`

1

12

1

6

4

1

1

18

4

10.1

1

1.0

`stack`

3

12

1

10

10.5

6

≤37

18

4

11

6

1.0

`toSource`

No

No

1-74

Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

No

No

No

No

No

4

No

No

No

`toString`

1

12

1

6

4

1

1

18

4

10.1

1

1.0

## See also

-   [`throw`](../statements/throw)
-   [`try...catch`](../statements/try...catch)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error</a>
