# Date.prototype.getUTCDay()

The `getUTCDay()` method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.

## Syntax

    getUTCDay()

### Return value

An integer number corresponding to the day of the week for the given date, according to universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

## Examples

### Using getUTCDay()

The following example assigns the weekday portion of the current date to the variable `weekday`.

    var today = new Date();
    var weekday = today.getUTCDay();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getutcday">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getutcday</span></a></td></tr></tbody></table>

`getUTCDay`

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

-   [`Date.prototype.getUTCDate()`](getutcdate)
-   [`Date.prototype.getDay()`](getday)
-   [`Date.prototype.setUTCDate()`](setutcdate)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay</a>
