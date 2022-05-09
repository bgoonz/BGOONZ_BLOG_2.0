# Date.prototype.getUTCMonth()

The `getUTCMonth()` returns the month of the specified date according to universal time, as a zero-based value (where zero indicates the first month of the year).

## Syntax

    getUTCMonth()

### Return value

An integer number, between 0 and 11, corresponding to the month of the given date according to universal time. 0 for January, 1 for February, 2 for March, and so on.

## Examples

### Using getUTCMonth()

The following example assigns the month portion of the current date to the variable `month`.

    var today = new Date();
    var month = today.getUTCMonth();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getutcmonth">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getutcmonth</span></a></td></tr></tbody></table>

`getUTCMonth`

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

-   [`Date.prototype.getMonth()`](getmonth)
-   [`Date.prototype.setUTCMonth()`](setutcmonth)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth</a>
