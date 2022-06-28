# Date.prototype.getFullYear()

The `getFullYear()` method returns the year of the specified date according to local time.

Use this method instead of the [`getYear()`](getyear) method.

## Syntax

    getFullYear()

### Return value

A number corresponding to the year of the given date, according to local time.

## Description

The value returned by `getFullYear()` is an absolute number. For dates between the years 1000 and 9999, `getFullYear()` returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.

## Examples

### Using getFullYear()

The following example assigns the four-digit value of the current year to the variable `year`.

    var today = new Date();
    var year = today.getFullYear();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getfullyear">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getfullyear</span></a></td></tr></tbody></table>

`getFullYear`

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

-   [`Date.prototype.getUTCFullYear()`](getutcfullyear)
-   [`Date.prototype.setFullYear()`](setfullyear)
-   [`Date.prototype.getYear()`](getyear)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear</a>
