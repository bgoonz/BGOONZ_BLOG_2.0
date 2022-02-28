# Date.prototype.setYear()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `setYear()` method sets the year for a specified date according to local time. Because `setYear()` does not set full years ("year 2000 problem"), it is no longer used and has been replaced by the [`setFullYear()`](setfullyear) method.

## Syntax

    setYear(yearValue)

### Parameters

`yearValue`  
An integer.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If `yearValue` is a number between 0 and 99 (inclusive), then the year for `dateObj` is set to `1900 + yearValue`. Otherwise, the year for `dateObj` is set to `yearValue`.

## Examples

### Using setYear()

The first two lines set the year to 1996. The third sets the year to 2000.

    var theBigDay = new Date();

    theBigDay.setYear(96);
    theBigDay.setYear(1996);
    theBigDay.setYear(2000);

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.setyear">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.setyear</span></a></td></tr></tbody></table>

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

`setYear`

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

-   [`Date.prototype.getFullYear()`](getfullyear)
-   [`Date.prototype.getUTCFullYear()`](getutcfullyear)
-   [`Date.prototype.setFullYear()`](setfullyear)
-   [`Date.prototype.setUTCFullYear()`](setutcfullyear)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear</a>
