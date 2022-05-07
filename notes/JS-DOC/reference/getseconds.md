# Date.prototype.getSeconds()

The `getSeconds()` method returns the seconds in the specified date according to local time.

## Syntax

    getSeconds()

### Return value

An integer number, between 0 and 59, representing the seconds in the given date according to local time.

## Examples

### Using getSeconds()

The second statement below assigns the value 30 to the variable `seconds`, based on the value of the [`Date`](../date) object `Xmas95`.

    var Xmas95 = new Date('December 25, 1995 23:15:30');
    var seconds = Xmas95.getSeconds();

    console.log(seconds); // 30

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.getseconds">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.getseconds</span></a></td></tr></tbody></table>

`getSeconds`

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

-   [`Date.prototype.getUTCSeconds()`](getutcseconds)
-   [`Date.prototype.setSeconds()`](setseconds)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds</a>
