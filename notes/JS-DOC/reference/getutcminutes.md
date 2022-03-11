# Date.prototype.getUTCMinutes()

The `getUTCMinutes()` method returns the minutes in the specified date according to universal time.

## Syntax

    getUTCMinutes()

### Return value

An integer number, between 0 and 59, representing the minutes in the given date according to universal time.

## Examples

### Using getUTCMinutes()

The following example assigns the minutes portion of the current time to the variable `minutes`.

    var today = new Date();
    var minutes = today.getUTCMinutes();

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getutcminutes">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getutcminutes</span></a></td></tr></tbody></table>

`getUTCMinutes`

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

-   [`Date.prototype.getMinutes()`](getminutes)
-   [`Date.prototype.setUTCMinutes()`](setutcminutes)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes</a>
