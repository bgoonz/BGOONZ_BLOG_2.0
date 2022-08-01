# Error.prototype.columnNumber

**Non-standard**

This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The `columnNumber` property contains the column number in the line of the file that raised this error.

## Examples

### Using columnNumber

    var e = new Error('Could not parse input');
    throw e;
    console.log(e.columnNumber) // 0

## Specifications

Not part of any standard.

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

## See also

-   [`Error.prototype.stack`](stack)
-   [`Error.prototype.lineNumber`](linenumber)
-   [`Error.prototype.fileName`](filename)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber</a>
