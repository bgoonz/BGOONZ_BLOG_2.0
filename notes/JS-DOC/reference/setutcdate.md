# Date.prototype.setUTCDate()

The `setUTCDate()` method changes the day of the month of a given [`Date`](../date) instance, based on UTC time.

To instead change the day of the month for a given [`Date`](../date) instance based on local time, use the [`setDate()`](setdate) method.

## Syntax

    setUTCDate(dayValue)

### Parameters

`dayValue`  
An integer from 1 to 31, representing the day of the month.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If a parameter you specify is outside of the expected range, `setUTCDate()` attempts to update the date information in the [`Date`](../date) object accordingly. For example, if you use 40 for `dayValue`, and the month stored in the [`Date`](../date) object is June, the day will be changed to 10 and the month will be incremented to July.

## Examples

### Using setUTCDate()

    var theBigDay = new Date();
    theBigDay.setUTCDate(20);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setutcdate">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setutcdate</span></a></td></tr></tbody></table>

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

`setUTCDate`

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

-   [`Date.prototype.getUTCDate()`](getutcdate)
-   [`Date.prototype.setDate()`](setdate)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate</a>
