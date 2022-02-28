# Date.prototype.getMinutes()

The `getMinutes()` method returns the minutes in the specified date according to local time.

## Syntax

    getMinutes()

### Return value

An integer number, between 0 and 59, representing the minutes in the given date according to local time.

## Examples

### Using getMinutes()

The second statement below assigns the value 15 to the variable `minutes`, based on the value of the [`Date`](../date) object `Xmas95`.

    var Xmas95 = new Date('December 25, 1995 23:15:30');
    var minutes = Xmas95.getMinutes();

    console.log(minutes); // 15

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getminutes">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getminutes</span></a></td></tr></tbody></table>

`getMinutes`

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

-   [`Date.prototype.getUTCMinutes()`](getutcminutes)
-   [`Date.prototype.setMinutes()`](setminutes)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes</a>
