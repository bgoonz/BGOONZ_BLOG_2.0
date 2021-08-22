# InternalError

**Non-standard**

This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The `InternalError` indicates an error that occurred internally in the JavaScript engine.

Example cases are mostly when something is too large, e.g.:

-   "too many switch cases",
-   "too many parentheses in regular expression",
-   "array initializer too large",
-   "too much recursion".

## Constructor

[`InternalError()`](internalerror/internalerror)  
Creates a new `InternalError` object.

## Instance properties

[`InternalError.prototype.message`](error/message)  
Error message. Inherited from [`Error`](error).

[`InternalError.prototype.name`](error/name)  
Error name. Inherited from [`Error`](error).

[`InternalError.prototype.fileName`](error/filename)  
Path to file that raised this error. Inherited from [`Error`](error).

[`InternalError.prototype.lineNumber`](error/linenumber)  
Line number in file that raised this error. Inherited from [`Error`](error).

[`InternalError.prototype.columnNumber`](error/columnnumber)  
Column number in line that raised this error. Inherited from [`Error`](error).

[`InternalError.prototype.stack`](error/stack)  
Stack trace. Inherited from [`Error`](error).

## Examples

### Too much recursion

This recursive function runs 10 times, as per the exit condition.

    function loop(x) {
      if (x >= 10) // "x >= 10" is the exit condition
        return;
      // do stuff
      loop(x + 1); // the recursive call
    }
    loop(0);

Setting this condition to an extremely high value, won't work:

    function loop(x) {
      if (x >= 1000000000000)
        return;
      // do stuff
      loop(x + 1);
    }
    loop(0);

    // InternalError: too much recursion

For more information, see [InternalError: too much recursion.](../errors/too_much_recursion)

## Specifications

Not part of any standard.

`InternalError`

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

`InternalError`

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

-   [`Error`](error)
-   [InternalError: too much recursion](../errors/too_much_recursion)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError</a>
