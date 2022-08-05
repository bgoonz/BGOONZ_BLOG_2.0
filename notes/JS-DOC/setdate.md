# Date.prototype.setDate()

The `setDate()` method changes the day of the month of a given [`Date`](../date) instance, based on local time.

To instead change the day of the month for a given [`Date`](../date) instance based on UTC time, use the [`setUTCDate()`](setutcdate) method.

## Syntax

    setDate(dayValue)

### Parameters

`dayValue`  
An integer representing the day of the month.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the [`Date`](../date) object is also changed in place).

## Description

If the `dayValue` is outside of the range of date values for the month, `setDate()` will update the [`Date`](../date) object accordingly.

For example, if 0 is provided for `dayValue`, the date will be set to the last day of the previous month.

If a negative number is provided for `dayValue`, the date will be set counting backwards from the last day of the previous month. -1 would result in the date being set to 1 day before the last day of the previous month.

## Examples

### Using setDate()

    var theBigDay = new Date(1962, 6, 7); // 1962-07-07 (7th of July 1962)
    theBigDay.setDate(24);  // 1962-07-24 (24th of July 1962)
    theBigDay.setDate(32);  // 1962-08-01 (1st of August 1962)
    theBigDay.setDate(22);  // 1962-08-22 (22th of August 1962)
    theBigDay.setDate(0);   // 1962-07-31 (31th of July 1962)
    theBigDay.setDate(98);  // 1962-10-06 (6th of October 1962)
    theBigDay.setDate(-50); // 1962-08-11 (11th of August 1962)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setdate">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Date.prototype.setDate' in that specification.</span></a></td></tr></tbody></table>

## Browser compatibility

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`setDate`

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

-   [`Date.prototype.getDate()`](getdate)
-   [`Date.prototype.setUTCDate()`](setutcdate)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate</a>
