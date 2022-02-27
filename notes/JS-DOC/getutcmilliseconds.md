# Date.prototype.getUTCMilliseconds()

The `getUTCMilliseconds()` method returns the milliseconds portion of the time object's value.

## Syntax

    getUTCMilliseconds()

### Return value

An integer number, between 0 and 999, representing the milliseconds portion of the given date object. This method is a companion to the other UTC based methods that give hour portion, minute portion, etc.; this method gives milliseconds portion.

Not to be confused with Unix epoch time. To get total milliseconds since 1970/01/01, use the method ".getTime()".

## Examples

### Using getUTCMilliseconds()

The following example assigns the milliseconds portion of the current time to the variable `milliseconds`.

    var today = new Date();
    var milliseconds = today.getUTCMilliseconds();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getutcmilliseconds">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getutcmilliseconds</span></a></td></tr></tbody></table>

`getUTCMilliseconds`

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

-   [`Date.prototype.getMilliseconds()`](getmilliseconds)
-   [`Date.prototype.setUTCMilliseconds()`](setutcmilliseconds)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds</a>
