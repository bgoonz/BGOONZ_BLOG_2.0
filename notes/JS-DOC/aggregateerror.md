# AggregateError

The `AggregateError` object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by [`Promise.any()`](promise/any), when all promises passed to it reject.

## Constructor

[`AggregateError()`](aggregateerror/aggregateerror)  
Creates a new `AggregateError` object.

## Instance properties

[`AggregateError.prototype.message`](error/message)  
Error message, defaults to `""`.

[`AggregateError.prototype.name`](error/name)  
Error name, defaults to `AggregateError`.

## Examples

### Catching an AggregateError

    Promise.any([
      Promise.reject(new Error("some error")),
    ]).catch(e => {
      console.log(e instanceof AggregateError); // true
      console.log(e.message);                   // "All Promises rejected"
      console.log(e.name);                      // "AggregateError"
      console.log(e.errors);                    // [ Error: "some error" ]
    });

### Creating an AggregateError

    try {
      throw new AggregateError([
        new Error("some error"),
      ], 'Hello');
    } catch (e) {
      console.log(e instanceof AggregateError); // true
      console.log(e.message);                   // "Hello"
      console.log(e.name);                      // "AggregateError"
      console.log(e.errors);                    // [ Error: "some error" ]
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-aggregate-error-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-aggregate-error-objects</span></a></td></tr></tbody></table>

`AggregateError`

85

85

79

No

No

14

85

85

79

No

14

No

`AggregateError`

85

85

79

No

No

14

85

85

79

No

14

No

## See also

-   [`Error`](error)
-   [`Promise.any`](promise/any)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError</a>
