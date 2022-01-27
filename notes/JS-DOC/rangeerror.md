# RangeError

The `RangeError` object indicates an error when a value is not in the set or range of allowed values.

## Description

A `RangeError` is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value.

This can be encountered when:

-   passing a value that is not one of the allowed string values to [`String.prototype.normalize()`](string/normalize), or
-   when attempting to create an array of an illegal length with the [`Array`](array) constructor, or
-   when passing bad values to the numeric methods [`Number.prototype.toExponential()`](number/toexponential), [`Number.prototype.toFixed()`](number/tofixed) or [`Number.prototype.toPrecision()`](number/toprecision).

## Constructor

[`RangeError()`](rangeerror/rangeerror)  
Creates a new `RangeError` object.

## Instance properties

[`RangeError.prototype.message`](error/message)  
Error message. Although ECMA-262 specifies that [`RangeError`](rangeerror) should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits [`Error.prototype.message`](error/message).

[`RangeError.prototype.name`](error/name)  
Error name. Inherited from [`Error`](error).

[`RangeError.prototype.fileName`](error/filename)  
Path to file that raised this error. Inherited from [`Error`](error).

[`RangeError.prototype.lineNumber`](error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](error).

[`RangeError.prototype.columnNumber`](error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](error).

[`RangeError.prototype.stack`](error/stack)  
Stack trace. Inherited from [`Error`](error).

## Examples

### Using RangeError (for numeric values)

    function check(n)
    {
        if( !(n >= -500 && n <= 500) )
        {
            throw new RangeError("The argument must be between -500 and 500.")
        }
    }

    try
    {
        check(2000)
    }
    catch(error)
    {
        if (error instanceof RangeError)
        {
            // Handle the error
        }
    }

### Using RangeError (for non-numeric values)

    function check(value)
    {
        if(["apple", "banana", "carrot"].includes(value) === false)
        {
            throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
        }
    }

    try
    {
        check("cabbage")
    }
    catch(error)
    {
        if(error instanceof RangeError)
        {
            // Handle the error
        }
    }

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-rangeerror">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-native-error-types-used-in-this-standard-rangeerror</span></a></td></tr></tbody></table>

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

`RangeError`

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

`RangeError`

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
-   [`Array`](array)
-   [`Number.toExponential()`](number/toexponential)
-   [`Number.toFixed()`](number/tofixed)
-   [`Number.toPrecision()`](number/toprecision)
-   [`String.prototype.normalize()`](string/normalize)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError</a>
