# Date.prototype.getDate()

The `getDate()` method returns the day of the month for the specified date according to local time.

## Syntax

    getDate()

### Return value

An integer number, between 1 and 31, representing the day of the month for the given date according to local time.

## Examples

### Using getDate()

The second statement below assigns the value 25 to the variable `day`, based on the value of the [`Date`](../date) object `Xmas95`.

    var Xmas95 = new Date('December 25, 1995 23:15:30');
    var day = Xmas95.getDate();

    console.log(day); // 25

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getdate">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getdate</span></a></td></tr></tbody></table>

`getDate`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Date.prototype.getUTCDate()`](getutcdate)
-   [`Date.prototype.getUTCDay()`](getutcday)
-   [`Date.prototype.setDate()`](setdate)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate</a>
