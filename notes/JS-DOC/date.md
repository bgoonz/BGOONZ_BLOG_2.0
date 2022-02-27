# Date

JavaScript `Date` objects represent a single moment in time in a platform-independent format. `Date` objects contain a `Number` that represents milliseconds since 1 January 1970 UTC.

**Note:** TC39 is working on [Temporal](https://tc39.es/proposal-temporal/docs/index.html), a new Date/Time API. Read more about it on the [Igalia blog](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/). It is not yet ready for production use!

## Description

### The ECMAScript epoch and timestamps

A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time are not the same as the **UNIX epoch** (the number of seconds that have elapsed since midnight on January 1, 1970, UTC), which is the predominant base value for computer-recorded date and time values.

**Note:** It's important to keep in mind that while the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

It should be noted that the maximum `Date` is not of the same value as the maximum safe integer (`Number.MAX_SAFE_INTEGER` is 9,007,199,254,740,991). Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred million) days relative to January 1, 1970 UTC (that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard `Date` object (equivalent to ±8,640,000,000,000,000 milliseconds).

### Date format and time zone conversions

There are several methods available to obtain a date in various formats, as well as to perform time zone conversions. Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as _Greenwich Mean Time_, as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.

In addition to methods to read and alter individual components of the local date and time (such as [`getDay()`](date/getday) and [`setHours()`](date/sethours)), there are also versions of the same methods that read and manipulate the date and time using UTC (such as [`getUTCDay()`](date/getutcday) and [`setUTCHours()`](date/setutchours)).

## Constructor

[`Date()`](date/date)  
When called as a function, returns a string representation of the current date and time, exactly as `new Date().toString()` does.

[`new Date()`](date/date)  
When called as a constructor, returns a new `Date` object.

## Static methods

[`Date.now()`](date/now)  
Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.

[`Date.parse()`](date/parse)  
Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.

**Note:** Parsing of strings with `Date.parse` is strongly discouraged due to browser differences and inconsistencies.

[`Date.UTC()`](date/utc)  
Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

## Instance methods

[`Date.prototype.getDate()`](date/getdate)  
Returns the day of the month (`1`–`31`) for the specified date according to local time.

[`Date.prototype.getDay()`](date/getday)  
Returns the day of the week (`0`–`6`) for the specified date according to local time.

[`Date.prototype.getFullYear()`](date/getfullyear)  
Returns the year (4 digits for 4-digit years) of the specified date according to local time.

[`Date.prototype.getHours()`](date/gethours)  
Returns the hour (`0`–`23`) in the specified date according to local time.

[`Date.prototype.getMilliseconds()`](date/getmilliseconds)  
Returns the milliseconds (`0`–`999`) in the specified date according to local time.

[`Date.prototype.getMinutes()`](date/getminutes)  
Returns the minutes (`0`–`59`) in the specified date according to local time.

[`Date.prototype.getMonth()`](date/getmonth)  
Returns the month (`0`–`11`) in the specified date according to local time.

[`Date.prototype.getSeconds()`](date/getseconds)  
Returns the seconds (`0`–`59`) in the specified date according to local time.

[`Date.prototype.getTime()`](date/gettime)  
Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)

[`Date.prototype.getTimezoneOffset()`](date/gettimezoneoffset)  
Returns the time-zone offset in minutes for the current locale.

[`Date.prototype.getUTCDate()`](date/getutcdate)  
Returns the day (date) of the month (`1`–`31`) in the specified date according to universal time.

[`Date.prototype.getUTCDay()`](date/getutcday)  
Returns the day of the week (`0`–`6`) in the specified date according to universal time.

[`Date.prototype.getUTCFullYear()`](date/getutcfullyear)  
Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

[`Date.prototype.getUTCHours()`](date/getutchours)  
Returns the hours (`0`–`23`) in the specified date according to universal time.

[`Date.prototype.getUTCMilliseconds()`](date/getutcmilliseconds)  
Returns the milliseconds (`0`–`999`) in the specified date according to universal time.

[`Date.prototype.getUTCMinutes()`](date/getutcminutes)  
Returns the minutes (`0`–`59`) in the specified date according to universal time.

[`Date.prototype.getUTCMonth()`](date/getutcmonth)  
Returns the month (`0`–`11`) in the specified date according to universal time.

[`Date.prototype.getUTCSeconds()`](date/getutcseconds)  
Returns the seconds (`0`–`59`) in the specified date according to universal time.

[`Date.prototype.getYear()`](date/getyear)  
Returns the year (usually 2–3 digits) in the specified date according to local time. Use [`getFullYear()`](date/getfullyear) instead.

[`Date.prototype.setDate()`](date/setdate)  
Sets the day of the month for a specified date according to local time.

[`Date.prototype.setFullYear()`](date/setfullyear)  
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

[`Date.prototype.setHours()`](date/sethours)  
Sets the hours for a specified date according to local time.

[`Date.prototype.setMilliseconds()`](date/setmilliseconds)  
Sets the milliseconds for a specified date according to local time.

[`Date.prototype.setMinutes()`](date/setminutes)  
Sets the minutes for a specified date according to local time.

[`Date.prototype.setMonth()`](date/setmonth)  
Sets the month for a specified date according to local time.

[`Date.prototype.setSeconds()`](date/setseconds)  
Sets the seconds for a specified date according to local time.

[`Date.prototype.setTime()`](date/settime)  
Sets the [`Date`](date) object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.

[`Date.prototype.setUTCDate()`](date/setutcdate)  
Sets the day of the month for a specified date according to universal time.

[`Date.prototype.setUTCFullYear()`](date/setutcfullyear)  
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

[`Date.prototype.setUTCHours()`](date/setutchours)  
Sets the hour for a specified date according to universal time.

[`Date.prototype.setUTCMilliseconds()`](date/setutcmilliseconds)  
Sets the milliseconds for a specified date according to universal time.

[`Date.prototype.setUTCMinutes()`](date/setutcminutes)  
Sets the minutes for a specified date according to universal time.

[`Date.prototype.setUTCMonth()`](date/setutcmonth)  
Sets the month for a specified date according to universal time.

[`Date.prototype.setUTCSeconds()`](date/setutcseconds)  
Sets the seconds for a specified date according to universal time.

[`Date.prototype.setYear()`](date/setyear)  
Sets the year (usually 2–3 digits) for a specified date according to local time. Use [`setFullYear()`](date/setfullyear) instead.

[`Date.prototype.toDateString()`](date/todatestring)  
Returns the "date" portion of the [`Date`](date) as a human-readable string like `'Thu Apr 12 2018'`.

[`Date.prototype.toISOString()`](date/toisostring)  
Converts a date to a string following the ISO 8601 Extended Format.

[`Date.prototype.toJSON()`](date/tojson)  
Returns a string representing the [`Date`](date) using [`toISOString()`](date/toisostring). Intended for use by [`JSON.stringify()`](json/stringify).

[`Date.prototype.toGMTString()`](date/togmtstring)  
Returns a string representing the [`Date`](date) based on the GMT (UTC) time zone. Use [`toUTCString()`](date/toutcstring) instead.

[`Date.prototype.toLocaleDateString()`](date/tolocaledatestring)  
Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

<span class="page-not-created">`Date.prototype.toLocaleFormat()`</span>  
Converts a date to a string, using a format string.

[`Date.prototype.toLocaleString()`](date/tolocalestring)  
Returns a string with a locality-sensitive representation of this date. Overrides the [`Object.prototype.toLocaleString()`](object/tolocalestring) method.

[`Date.prototype.toLocaleTimeString()`](date/tolocaletimestring)  
Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

[`Date.prototype.toString()`](date/tostring)  
Returns a string representing the specified [`Date`](date) object. Overrides the [`Object.prototype.toString()`](object/tostring) method.

[`Date.prototype.toTimeString()`](date/totimestring)  
Returns the "time" portion of the [`Date`](date) as a human-readable string.

[`Date.prototype.toUTCString()`](date/toutcstring)  
Converts a date to a string using the UTC timezone.

[`Date.prototype.valueOf()`](date/valueof)  
Returns the primitive value of a [`Date`](date) object. Overrides the [`Object.prototype.valueOf()`](object/valueof) method.

## Examples

### Several ways to create a Date object

The following examples show several ways to create JavaScript dates:

**Note:** Parsing of date strings with the `Date` constructor (and `Date.parse`, they are equivalent) is strongly discouraged due to browser differences and inconsistencies.

    let today = new Date()
    let birthday = new Date('December 17, 1995 03:24:00')
    let birthday = new Date('1995-12-17T03:24:00')
    let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
    let birthday = new Date(1995, 11, 17, 3, 24, 0)
    let birthday = new Date(628021800000)            // passing epoch timestamp

### To get Date, Month and Year or Time

    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /)

### Two digit years map to 1900 – 1999

Values from `0` to `99` map to the years `1900` to `1999`. All other values are the actual year .

In order to create and get dates between the years `0` and `99` the [`Date.prototype.setFullYear()`](date/setfullyear) and [`Date.prototype.getFullYear()`](date/getfullyear) methods should be used.

    let date = new Date(98, 1)  // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

    // Deprecated method; 98 maps to 1998 here as well
    date.setYear(98)            // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

    date.setFullYear(98)        // Sat Feb 01 0098 00:00:00 GMT+0000 (BST)

### Calculating elapsed time

The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds.

Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.

    // Using Date objects
    let start = Date.now()

    // The event to time goes here:
    doSomethingForALongTime()
    let end = Date.now()
    let elapsed = end - start // elapsed time in milliseconds

    // Using built-in methods
    let start = new Date()

    // The event to time goes here:
    doSomethingForALongTime()
    let end = new Date()
    let elapsed = end.getTime() - start.getTime() // elapsed time in milliseconds

    // To test a function and get back its return
    function printElapsedTime(fTest) {
      let nStartTime = Date.now(),
          vReturn = fTest(),
          nEndTime = Date.now()

      console.log(`Elapsed time: ${ String(nEndTime - nStartTime) } milliseconds`)
      return vReturn
    }

    let yourFunctionReturn = printElapsedTime(yourFunction)

**Note:** In browsers that support the [Web Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Window/performance)'s high-resolution time feature, [`Performance.now()`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now) can provide more reliable and precise measurements of elapsed time than [`Date.now()`](date/now).

### Get the number of seconds since the ECMAScript Epoch

    let seconds = Math.floor(Date.now() / 1000)

In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return actually elapsed seconds. (That's why this code uses [`Math.floor()`](math/floor), and _not_ [`Math.round()`](math/round).)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date-objects">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date-objects</span></a></td></tr></tbody></table>

`Date`

1

12

1

3

The [ISO8601 Date Format](https://en.wikipedia.org/wiki/ISO_8601) is not supported in Internet Explorer 8 or earlier.

3

1

1

18

4

10.1

1

1.0

`Date`

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

`getDate`

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

`getDay`

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

`getFullYear`

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

`getMilliseconds`

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

`getMonth`

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

`getTime`

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

`getUTCDate`

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

`getUTCDay`

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

`getUTCFullYear`

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

`getUTCHours`

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

`getUTCMilliseconds`

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

`getUTCMonth`

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

`getUTCSeconds`

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

`getYear`

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

`now`

5

12

3

9

10.5

4

1

18

4

14

4

1.0

`parse`

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

`setFullYear`

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

`setHours`

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

`setMilliseconds`

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

`setMinutes`

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

`setMonth`

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

`setSeconds`

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

`setUTCFullYear`

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

`setUTCHours`

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

`setUTCMilliseconds`

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

`setUTCMinutes`

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

`setUTCMonth`

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

`setUTCSeconds`

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

`toDateString`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

`toGMTString`

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

`toISOString`

3

12

1

9

10.5

5

≤37

18

4

11

4.2

1.0

`toJSON`

3

12

1

8

10.5

5

≤37

18

4

11

4.2

1.0

`toLocaleDateString`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

`toLocaleString`

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

`toLocaleTimeString`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

`toSource`

No

No

1-74

Starting in Firefox 74, `toSource()` is no longer available for use by web content. It is still allowed for internal and privileged code.

No

No

No

No

No

4

No

No

No

`toString`

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

`toTimeString`

1

12

1

5.5

5

1

1

18

4

10.1

1

1.0

`toUTCString`

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

`valueOf`

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

`@@toPrimitive`

47

15

44

No

34

10

47

47

44

34

10

5.0

## See also

-   [`Date()`](date/date) constructor

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date</a>
