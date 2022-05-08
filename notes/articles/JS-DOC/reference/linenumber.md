# Error.prototype.lineNumber

**Non-standard**

This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The `lineNumber` property contains the line number in the file that raised this error.

## Examples

### Using lineNumber

    var e = new Error('Could not parse input');
    throw e;
    console.log(e.lineNumber) // 2

### Alternative example using error event

    window.addEventListener('error', function(e) {
      console.log(e.lineNumber); // 5
    });
    var e = new Error('Could not parse input');
    throw e;

This is not a standard feature and lacks widespread support. See the browser compatibility table below.

## Specifications

Not part of any standard.

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

## See also

-   [`Error.prototype.stack`](stack)
-   [`Error.prototype.columnNumber`](columnnumber)
-   [`Error.prototype.fileName`](filename)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber</a>
