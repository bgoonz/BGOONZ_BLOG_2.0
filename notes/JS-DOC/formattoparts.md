# Intl.DateTimeFormat.prototype.formatToParts()

The `Intl.DateTimeFormat.prototype.formatToParts()` method allows locale-aware formatting of strings produced by [`Intl.DateTimeFormat`](../datetimeformat) formatters.

## Syntax

    formatToParts(date)

### Parameters

`date` <span class="badge inline optional">Optional</span>  
The date to format.

### Return value

An [`Array`](../../array) of objects containing the formatted date in parts.

## Description

The `formatToParts()` method is useful for custom formatting of date strings. It returns an [`Array`](../../array) of objects containing the locale-specific tokens from which it possible to build custom strings while preserving the locale-specific parts. The structure the `formatToParts()` method returns, looks like this:

    [
      { type: 'day', value: '17' },
      { type: 'weekday', value: 'Monday' }
    ]

Possible types are the following:

day  
The string used for the day, for example "`17`".

dayPeriod  
The string used for the day period, for example, "`AM`", "`PM`", "`in the morning`", or "`noon`"

era  
The string used for the era, for example "`BC`" or "`AD`".

fractionalSecond  
The string used for the fractional seconds, for example "`0`" or "`00`" or "`000`".

hour  
The string used for the hour, for example "`3`" or "`03`".

literal  
The string used for separating date and time values, for example "`/`", "`,`", "`o'clock`", "`de`", etc.

minute  
The string used for the minute, for example "`00`".

month  
The string used for the month, for example "`12`".

relatedYear  
The string used for the related 4-digit Gregorian year, in the event that the calendar's representation would be a yearName instead of a year, for example "`2019`".

second  
The string used for the second, for example "`07`" or "`42`".

timeZoneName  
The string used for the name of the time zone, for example "`UTC`".

weekday  
The string used for the weekday, for example "`M`", "`Monday`", or "`Montag`".

year  
The string used for the year, for example "`2012`" or "`96`".

yearName  
The string used for the yearName in relevant contexts, for example "`geng-zi`"

## Polyfill

A polyfill for this feature is available in the [proposal repository](https://github.com/zbraniecki/proposal-intl-formatToParts).

## Examples

`DateTimeFormat` outputs localized, opaque strings that cannot be manipulated directly:

    var date = Date.UTC(2012, 11, 17, 3, 0, 42);

    var formatter = new Intl.DateTimeFormat('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      fractionalSecondDigits: 3,
      hour12: true,
      timeZone: 'UTC'
    });

    formatter.format(date);
    // "Monday, 12/17/2012, 3:00:42.000 AM"

However, in many User Interfaces there is a desire to customize the formatting of this string. The `formatToParts` method enables locale-aware formatting of strings produced by `DateTimeFormat` formatters by providing you the string in parts:

    formatter.formatToParts(date);

    // return value:
    [
      { type: 'weekday',   value: 'Monday' },
      { type: 'literal',   value: ', '     },
      { type: 'month',     value: '12'     },
      { type: 'literal',   value: '/'      },
      { type: 'day',       value: '17'     },
      { type: 'literal',   value: '/'      },
      { type: 'year',      value: '2012'   },
      { type: 'literal',   value: ', '     },
      { type: 'hour',      value: '3'      },
      { type: 'literal',   value: ':'      },
      { type: 'minute',    value: '00'     },
      { type: 'literal',   value: ':'      },
      { type: 'second',    value: '42'     },
      { type: 'fractionalSecond', value: '000' },
      { type: 'literal',   value: ' '      },
      { type: 'dayPeriod', value: 'AM'     }
    ]

Now the information is available separately and it can be formatted and concatenated again in a customized way. For example by using [`Array.prototype.map()`](../../array/map), [arrow functions](../../../functions/arrow_functions), a [switch statement](../../../statements/switch), [template literals](../../../template_literals), and [`Array.prototype.join()`](../../array/join).

    var dateString = formatter.formatToParts(date).map(({type, value}) => {
      switch (type) {
        case 'dayPeriod': return `<b>${value}</b>`;
        default : return value;
      }
    }).join('');

This will make the day period bold, when using the `formatToParts()` method.

    console.log(formatter.format(date));
    // "Monday, 12/17/2012, 3:00:42.000 AM"

    console.log(dateString);
    // "Monday, 12/17/2012, 3:00:42.000 <b>AM</b>"

### Named Years and Mixed calendars

In some cases, calendars use named years. Chinese and Tibetan calendars, for example, use a 60-year [sexagenary cycle](https://en.wikipedia.org/wiki/Sexagenary_cycle) of named years. These years are disambiguated by relationship to corresponding years on the Gregorian calendar. When this is the case, the result of `formatToParts()` will contain an entry for `relatedYear` when a year would normally be present, containing the 4-digit Gregorian year, instead of an entry for `year`. Setting an entry in the bag for `year` (with any value) will yield both the and the `yearName` Gregorian `relatedYear`:

    let opts = { year: "numeric", month: "numeric", day: "numeric" };
    let df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
    df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

    // return value
    [
      { type: 'relatedYear', value: '2012' },
      { type: 'literal', value: '年' },
      { type: 'month', value: '十一月' },
      { type: 'day', value: '4' }
    ]

If the `year` option is not set in the bag (to any value), the result will include only the `relatedYear`:

    let df = new Intl.DateTimeFormat("zh-u-ca-chinese");
    df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

    // return value
    [
       { type: 'relatedYear', value: '2012' },
       { type: 'literal', value: '年' },
       { type: 'month', value: '十一月' },
       { type: 'day', value: '4' }
    ]

In cases where the `year` would be output, `.format()` may commonly present these side-by-side:

    let df = new Intl.DateTimeFormat("zh-u-ca-chinese", {year: "numeric"});
    df.format(Date.UTC(2012, 11, 17, 3, 0, 42));

    // return value
    2012壬辰年

This also makes it possible to mix locale and calendar in both `format`:

    let df = new Intl.DateTimeFormat("en-u-ca-chinese", {year: "numeric"});
    let date = Date.UTC(2012, 11, 17, 3, 0, 42);
    df.format(date);

    // return value
    2012(ren-chen)

And `formatToParts`:

    let opts = {month: 'numeric', day: 'numeric', year: "numeric"};
    let df = new Intl.DateTimeFormat("en-u-ca-chinese", opts);
    let date = Date.UTC(2012, 11, 17, 3);
    df.formatToParts(date)

    // return value
    [
      { type: 'month', value: '11' },
      { type: 'literal', value: '/' },
      { type: 'day', value: '4' },
      { type: 'literal', value: '/' },
      { type: 'relatedYear', value: '2012' }
    ]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.DateTimeFormat.prototype.formatToParts">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.DateTimeFormat.prototype.formatToParts</span></a></td></tr></tbody></table>

`formatToParts`

57

Before version 71, `formatToParts()` returned an object with an incorrectly cased type key of `dayperiod`. Version 71 and later use the specification defined `dayPeriod`. See [Chromium bug 865351](https://crbug.com/865351).

18

51

No

44

Before version 58, `formatToParts()` returned an object with an incorrectly cased type key of `dayperiod`. Version 58 and later use the specification defined `dayPeriod`. See [Chromium bug 865351](https://crbug.com/865351).

11

57

Before version 71, `formatToParts()` returned an object with an incorrectly cased type key of `dayperiod`. Version 71 and later use the specification defined `dayPeriod`. See [Chromium bug 865351](https://crbug.com/865351).

57

Before version 71, `formatToParts()` returned an object with an incorrectly cased type key of `dayperiod`. Version 71 and later use the specification defined `dayPeriod`. See [Chromium bug 865351](https://crbug.com/865351).

56

43

Before version 50, `formatToParts()` returned an object with an incorrectly cased type key of `dayperiod`. Version 50 and later use the specification defined `dayPeriod`. See [Chromium bug 865351](https://crbug.com/865351).

11

7.0

Before version 71, `formatToParts()` returned an object with an incorrectly cased type key of `dayperiod`. Version 71 and later use the specification defined `dayPeriod`. See [Chromium bug 865351](https://crbug.com/865351).

## See also

-   [`Intl.DateTimeFormat`](../datetimeformat)
-   [`Intl.DateTimeFormat.prototype.format()`](format)
-   [`Date.prototype.toLocaleString()`](../../date/tolocalestring)
-   [`Date.prototype.toLocaleDateString()`](../../date/tolocaledatestring)
-   [`Date.prototype.toLocaleTimeString()`](../../date/tolocaletimestring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts</a>
