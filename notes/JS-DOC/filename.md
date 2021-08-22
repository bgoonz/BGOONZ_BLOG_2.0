# Error.prototype.fileName

**Non-standard**

This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The `fileName` property contains the path to the file that raised this error.

## Description

This non-standard property contains the path to the file that raised this error. If called from a debugger context, the Firefox Developer Tools for example, "debugger eval code" is returned.

## Examples

### Using fileName

    var e = new Error('Could not parse input');
    throw e;
    // e.fileName could look like "file:///C:/example.html"

## Specifications

Not part of any standard.

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

## See also

-   [`Error.prototype.stack`](stack)
-   [`Error.prototype.columnNumber`](columnnumber)
-   [`Error.prototype.lineNumber`](linenumber)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName</a>
