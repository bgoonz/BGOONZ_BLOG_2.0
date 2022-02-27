# Date.prototype.getUTCFullYear()

The `getUTCFullYear()` method returns the year in the specified date according to universal time.

## Syntax

    getUTCFullYear()

### Return value

A number representing the year in the given date according to universal time.

## Description

The value returned by `getUTCFullYear()` is an absolute number that is compliant with year-2000, for example, 1995.

## Examples

### Using getUTCFullYear()

The following example assigns the four-digit value of the current year to the variable `year`.

    var today = new Date();
    var year = today.getUTCFullYear();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getutcfullyear">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getutcfullyear</span></a></td></tr></tbody></table>

`getUTCFullYear`

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

-   [`Date.prototype.getFullYear()`](getfullyear)
-   [`Date.prototype.setFullYear()`](setfullyear)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear</a>
