# Date.prototype.getTimezoneOffset()

The `getTimezoneOffset()` method returns the difference, in minutes, between a date as evaluated in the UTC time zone, and the same date as evaluated in the local time zone.

## Syntax

    getTimezoneOffset()

### Return value

The difference, in minutes, between date, as evaluated in the UTC time zone, and as evaluated in the local time zone.

## Description

`date.getTimezoneOffset()` returns the difference, in minutes, between date as evaluated in the UTC time zone, and date as evaluated in the local time zone — that is, the time zone of the host system in which the browser is being used (if the code is run from the Web in a browser), or otherwise the host system of whatever JavaScript runtime (for example, a Node.js environment) the code is executed in.

### Negative values and positive values

The number of minutes returned by `getTimezoneOffset()` is positive if the local time zone is behind UTC, and negative if the local time zone is ahead of UTC. For example, for UTC+10, `-600` will be returned.

<table><thead><tr class="header"><th>Current time zone</th><th>UTC-8</th><th>UTC</th><th>UTC+3</th></tr></thead><tbody><tr class="odd"><td>Return Value</td><td>480</td><td>0</td><td>-180</td></tr></tbody></table>

### Varied results in Daylight Saving Time (DST) time zones

In a time zone that annually shifts in and out of Daylight Saving Time (DST), the number of minutes returned by calling `getTimezoneOffset()` can vary.

Consider a given local time zone and a date date1 that are both in DST, and consider minutes, the number of minutes returned by calling `date1.getTimezoneOffset()`; then:

-   If the local time zone is currently in DST, but a given date date2 is _not_ in DST, then the number of minutes returned by `date2.getTimezoneOffset()` is minutes ± 60.
-   If the local time zone is _not_ currently in DST, but a given date date3 is in DST, then the number of minutes returned by `date3.getTimezoneOffset()` is minutes ± 60.

In a time zone that doesn't annually shift in and out of Daylight Saving Time (DST), the number of minutes returned by calling `getTimezoneOffset()` always returns the same number of minutes, regardless of the date instance it's called from.

**Note:** The above description is a simplification. In implementations, the [IANA time zone database](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) is used for precisely determining the effect of DST on the calculation of the time-zone difference.

## Examples

    // Create a Date instance for the current time
    let currentLocalDate = new Date();
    // Create a Date instance for 03:24 GMT-0200 on May 1st in 2016
    let laborDay2016at0324GMTminus2 = new Date('May 1, 2016 03:24:00 GMT-0200');
    currentLocalDate.getTimezoneOffset() === laborDay2016at0324GMTminus2.getTimezoneOffset();
    // true, always, in any timezone that doesn't annually shift in and out of DST
    // false, sometimes, in any timezone that annually shifts in and out of DST

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.gettimezoneoffset">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.gettimezoneoffset</span></a></td></tr></tbody></table>

`getTimezoneOffset`

1

12

1

5

3

1

1

18

4

10.1

1

1.0

## See also

-   [`Date`](../date)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset</a>
