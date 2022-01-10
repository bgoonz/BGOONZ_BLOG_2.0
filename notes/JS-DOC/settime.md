# Date.prototype.setTime()

The `setTime()` method sets the [`Date`](../date) object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

## Syntax

    setTime(timeValue)

### Parameters

`timeValue`  
An integer representing the number of milliseconds since 1 January 1970, 00:00:00 UTC.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date (effectively, the value of the argument).

## Description

Use the `setTime()` method to help assign a date and time to another [`Date`](../date) object.

## Examples

### Using setTime()

    var theBigDay = new Date('July 1, 1999');
    var sameAsBigDay = new Date();
    sameAsBigDay.setTime(theBigDay.getTime());

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.settime">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Date.prototype.setTime' in that specification.</span></a></td></tr></tbody></table>

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

`setTime`

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

-   [`Date.prototype.getTime()`](gettime)
-   [`Date.prototype.setUTCHours()`](setutchours)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime</a>
