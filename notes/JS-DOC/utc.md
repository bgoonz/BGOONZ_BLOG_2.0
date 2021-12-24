# Date.UTC()

The `Date.UTC()` method accepts parameters similar to the [`Date`](../date) constructor, but treats them as UTC. It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

## Syntax

    Date.UTC(year)
    Date.UTC(year, month)
    Date.UTC(year, month, day)
    Date.UTC(year, month, day, hour)
    Date.UTC(year, month, day, hour, minute)
    Date.UTC(year, month, day, hour, minute, second)
    Date.UTC(year, month, day, hour, minute, second, millisecond)

`year`  
A full year.

`month` <span class="badge inline optional">Optional</span>  
An integer between `0` (January) and `11` (December) representing the month. Since ECMAScript 2017 it defaults to `0` if omitted. _(Up until ECMAScript 2016, `month` was a required parameter. As of ES2017, it no longer is.)_

`day` <span class="badge inline optional">Optional</span>  
An integer between `1` and `31` representing the day of the month. If omitted, defaults to `1`.

`hour` <span class="badge inline optional">Optional</span>  
An integer between `0` and `23` representing the hours. If omitted, defaults to `0`.

`minute` <span class="badge inline optional">Optional</span>  
An integer between `0` and `59` representing the minutes. If omitted, defaults to `0`.

`second` <span class="badge inline optional">Optional</span>  
An integer between `0` and `59` representing the seconds. If omitted, defaults to `0`.

`millisecond` <span class="badge inline optional">Optional</span>  
An integer between `0` and `999` representing the milliseconds. If omitted, defaults to `0`.

### Return value

A number representing the number of milliseconds for the given date since January 1, 1970, 00:00:00, UTC.

## Description

`UTC()` takes comma-delimited date and time parameters and returns the number of milliseconds between January 1, 1970, 00:00:00, universal time and the specified date and time.

Years between `0` and `99` are converted to a year in the 20<sup>th</sup> century `(1900 + year)`. For example, `95` is converted to the year `1995`.

The `UTC()` method differs from the [`Date`](../date) constructor in two ways:

1.  `Date.UTC()` uses universal time instead of the local time.
2.  `Date.UTC()` returns a time value as a number instead of creating a [`Date`](../date) object.

If a parameter is outside of the expected range, the `UTC()` method updates the other parameters to accommodate the value. For example, if `15` is used for `month`, the year will be incremented by 1 `(year + 1)` and `3` will be used for the month.

`UTC()` is a static method of [`Date`](../date), so it's called as `Date.UTC()` rather than as a method of a [`Date`](../date) instance.

## Examples

### Using Date.UTC()

The following statement creates a [`Date`](../date) object with the arguments treated as UTC instead of local:

    let utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.utc">ECMAScript (ECMA-262) 
<br/>

<span class="small">The definition of 'Date.UTC' in that specification.</span></a></td></tr></tbody></table>

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

`UTC`

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

### Compatibility notes

#### Date.UTC() with fewer than two arguments

When providing less than two arguments to `Date.UTC()`, ECMAScript 2017 requires that [`NaN`](../nan) is returned. Engines that weren't supporting this behavior have been updated (see [bug 1050755](https://bugzilla.mozilla.org/show_bug.cgi?id=1050755), [ecma-262 \#642](https://github.com/tc39/ecma262/pull/642)).

    Date.UTC();
    Date.UTC(1);

    // Safari: NaN
    // Chrome/Opera/V8: NaN

    // Firefox <54: non-NaN
    // Firefox 54+: NaN

    // IE: non-NaN
    // Edge: NaN

## See also

-   [`Date.parse()`](parse)
-   [`Date`](../date)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC</a>
