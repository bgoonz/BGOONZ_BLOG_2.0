# Date.prototype.getMonth()

The `getMonth()` method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).

## Syntax

    getMonth()

### Return value

An integer number, between 0 and 11, representing the month in the given date according to local time. 0 corresponds to January, 1 to February, and so on.

## Examples

### Using getMonth()

The second statement below assigns the value 11 to the variable `month`, based on the value of the [`Date`](../date) object `Xmas95`.

    var Xmas95 = new Date('December 25, 1995 23:15:30');
    var month = Xmas95.getMonth();

    console.log(month); // 11

**Note:** If needed, the full name of a month (`January` for example) can be obtained by using `Intl.DateTimeFormat()` with an `options` parameter. Using this method, internationalization is made easier:

    var options = { month: 'long'};
    console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
    // December
    console.log(new Intl.DateTimeFormat('de-DE', options).format(Xmas95));
    // Dezember

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getmonth">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getmonth</span></a></td></tr></tbody></table>

`getMonth`

1

12

1

4

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Date.prototype.getUTCMonth()`](getutcmonth)
-   [`Date.prototype.setMonth()`](setmonth)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth</a>
