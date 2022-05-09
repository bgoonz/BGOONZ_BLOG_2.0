# Date.prototype.getHours()

The `getHours()` method returns the hour for the specified date, according to local time.

## Syntax

    getHours()

### Return value

An integer number, between 0 and 23, representing the hour for the given date according to local time.

## Examples

### Using getHours()

The second statement below assigns the value 23 to the variable `hours`, based on the value of the [`Date`](../date) object `Xmas95`.

    let Xmas95 = new Date('December 25, 1995 23:15:30');
    let hours = Xmas95.getHours();

    console.log(hours); // 23

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.gethours">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.gethours</span></a></td></tr></tbody></table>

`getHours`

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

-   [`Date.prototype.getUTCHours()`](getutchours)
-   [`Date.prototype.setHours()`](sethours)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours</a>
