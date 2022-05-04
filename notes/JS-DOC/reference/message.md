# Error.prototype.message

The `message` property is a human-readable description of the error.

## Description

This property contains a brief description of the error if one is available or has been set. [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) makes extensive use of the `message` property for exceptions. The `message` property combined with the [`name`](name) property is used by the [`Error.prototype.toString()`](tostring) method to create a string representation of the Error.

By default, the `message` property is an empty string, but this behavior can be overridden for an instance by specifying a message as the first argument to the [`Error`](error) constructor.

## Examples

### Throwing a custom error

    var e = new Error('Could not parse input');
    // e.message is 'Could not parse input'
    throw e;

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-error.prototype.message">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-error.prototype.message</span></a></td></tr></tbody></table>

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

## See also

-   [`Error.prototype.name`](name)
-   [`Error.prototype.toString()`](tostring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message</a>
