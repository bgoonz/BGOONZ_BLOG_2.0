# try...catch

The `try...catch` statement marks a block of statements to try and specifies a response should an exception be thrown.

## Syntax

    try {
      try_statements
    }
    catch (exception_var) {
      catch_statements
    }
    finally {
      finally_statements
    }

`try_statements`  
The statements to be executed.

`catch_statements`  
Statement that is executed if an exception is thrown in the `try`-block.

`exception_var`  
An optional identifier to hold an exception object for the associated `catch`-block.

`finally_statements`  
Statements that are executed after the `try` statement completes. These statements execute regardless of whether an exception was thrown or caught.

## Description

The `try` statement consists of a `try`-block, which contains one or more statements. `{}` must always be used, even for single statements. At least one `catch`-block, or a `finally`-block, must be present. This gives us three forms for the `try` statement:

-   `try...catch`
-   `try...finally`
-   `try...catch...finally`

A `catch`-block contains statements that specify what to do if an exception is thrown in the `try`-block. If any statement within the `try`-block (or in a function called from within the `try`-block) throws an exception, control is immediately shifted to the `catch`-block. If no exception is thrown in the `try`-block, the `catch`-block is skipped.

The `finally`-block will always execute after the `try`-block and `catch`-block(s) have finished executing. It always executes, regardless of whether an exception was thrown or caught.

You can nest one or more `try` statements. If an inner `try` statement does not have a `catch`-block, the enclosing `try` statement's `catch`-block is used instead.

You can also use the `try` statement to handle JavaScript exceptions. See the [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) for more information on JavaScript exceptions.

### Unconditional catch-block

When a `catch`-block is used, the `catch`-block is executed when any exception is thrown from within the `try`-block. For example, when the exception occurs in the following code, control transfers to the `catch`-block.

    try {
      throw 'myException'; // generates an exception
    } catch (e) {
      // statements to handle any exceptions
      logMyErrors(e); // pass exception object to error handler
    }

The `catch`-block specifies an identifier (`e` in the example above) that holds the value of the exception; this value is only available in the [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) of the `catch`-block.

### Conditional catch-blocks

You can create "Conditional `catch`-blocks" by combining `try...catch` blocks with `if...else if...else` structures, like this:

    try {
      myroutine(); // may throw three types of exceptions
    } catch (e) {
      if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
      } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
      } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
      } else {
        // statements to handle any unspecified exceptions
        logMyErrors(e); // pass exception object to error handler
      }
    }

A common use case for this is to only catch (and silence) a small subset of expected errors, and then re-throw the error in other cases:

    try {
      myRoutine();
    } catch (e) {
      if (e instanceof RangeError) {
        // statements to handle this very common expected error
      } else {
        throw e;  // re-throw the error unchanged
      }
    }

### The exception identifier

When an exception is thrown in the `try`-block, _`exception_var`_ (i.e., the `e` in `catch (e)`) holds the exception value. You can use this identifier to get information about the exception that was thrown. This identifier is only available in the `catch`-block's [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope). If you don't need the exception value, it could be omitted.

    function isValidJSON(text) {
      try {
        JSON.parse(text);
        return true;
      } catch {
        return false;
      }
    }

### The finally-block

The `finally`-block contains statements to execute after the `try`-block and `catch`-block(s) execute, but before the statements following the `try...catch...finally`-block. Note that the `finally`-block executes regardless of whether an exception is thrown. Also, if an exception is thrown, the statements in the `finally`-block execute even if no `catch`-block handles the exception.

The following example shows one use case for the `finally`-block. The code opens a file and then executes statements that use the file; the `finally`-block makes sure the file always closes after it is used even if an exception was thrown.

    openMyFile();
    try {
      // tie up a resource
      writeMyFile(theData);
    } finally {
      closeMyFile(); // always close the resource
    }

## Examples

### Nested try-blocks

First, let's see what happens with this:

    try {
      try {
        throw new Error('oops');
      } finally {
        console.log('finally');
      }
    } catch (ex) {
      console.error('outer', ex.message);
    }

    // Output:
    // "finally"
    // "outer" "oops"

Now, if we already caught the exception in the inner `try`-block by adding a `catch`-block

    try {
      try {
        throw new Error('oops');
      } catch (ex) {
        console.error('inner', ex.message);
      } finally {
        console.log('finally');
      }
    } catch (ex) {
      console.error('outer', ex.message);
    }

    // Output:
    // "inner" "oops"
    // "finally"

And now, let's rethrow the error.

    try {
      try {
        throw new Error('oops');
      } catch (ex) {
        console.error('inner', ex.message);
        throw ex;
      } finally {
        console.log('finally');
      }
    } catch (ex) {
      console.error('outer', ex.message);
    }

    // Output:
    // "inner" "oops"
    // "finally"
    // "outer" "oops"

Any given exception will be caught only once by the nearest enclosing `catch`-block unless it is rethrown. Of course, any new exceptions raised in the "inner" block (because the code in `catch`-block may do something that throws), will be caught by the "outer" block.

### Returning from a finally-block

If the `finally`-block returns a value, this value becomes the return value of the entire `try-catch-finally` statement, regardless of any `return` statements in the `try` and `catch`-blocks. This includes exceptions thrown inside of the `catch`-block:

    (function() {
      try {
        try {
          throw new Error('oops');
        } catch (ex) {
          console.error('inner', ex.message);
          throw ex;
        } finally {
          console.log('finally');
          return;
        }
      } catch (ex) {
        console.error('outer', ex.message);
      }
    })();

    // Output:
    // "inner" "oops"
    // "finally"

The outer "oops" is not thrown because of the return in the `finally`-block. The same would apply to any value returned from the `catch`-block.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-try-statement">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'try statement' in that specification.</span></a></td></tr></tbody></table>

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

`try...catch`

1

12

1

5

4

1

1

18

4

10.1

1

1.0

`optional_catch_binding`

66

79

58

No

53

11.1

66

66

58

47

11.3

9.0

## See also

-   [`Error`](../global_objects/error)
-   [`throw`](throw)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch</a>
