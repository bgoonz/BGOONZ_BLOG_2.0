# Date.prototype.getMilliseconds()

The `getMilliseconds()` method returns the milliseconds in the specified date according to local time.

## Syntax

    getMilliseconds()

### Return value

A number, between 0 and 999, representing the milliseconds for the given date according to local time.

## Examples

### Using getMilliseconds()

The following example assigns the milliseconds portion of the current time to the variable `milliseconds`:

    var today = new Date();
    var milliseconds = today.getMilliseconds();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getmilliseconds">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getmilliseconds</span></a></td></tr></tbody></table>

`getMilliseconds`

1

12

1

4

4

1

1

18

4

10.1

1

1.0

## See also

-   [`Date.prototype.getUTCMilliseconds()`](getutcmilliseconds)
-   [`Date.prototype.setMilliseconds()`](setmilliseconds)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds</a>
