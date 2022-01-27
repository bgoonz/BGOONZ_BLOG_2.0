# Intl.DateTimeFormat.prototype.formatRangeToParts()

The `Intl.DateTimeFormat.prototype.formatRangeToParts()` method allows locale-specific tokens representing each part of the formatted date range produced by [`Intl.DateTimeFormat`](../datetimeformat) formatters.

## Syntax

    formatRangeToParts(startDate, endDate)

## Examples

### Basic formatRangeToParts usage

This method receives two [`Date`](../../date)s and returns an [`Array`](../../array) of objects containing the locale-specific tokens representing each part of the formatted date range.

    let date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
    let date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
    // > 'Wed, 10 Jan 2007 10:00:00 GMT'
    // > 'Wed, 10 Jan 2007 11:00:00 GMT'

    let fmt = new Intl.DateTimeFormat("en", {
        hour: 'numeric',
        minute: 'numeric'
    });

    console.log(fmt.formatRange(date1, date2));
    // > '10:00 – 11:00 AM'

    fmt.formatRangeToParts(date1, date2);
    // return value:
    // [
    //   { type: 'hour',      value: '10',  source: "startRange" },
    //   { type: 'literal',   value: ':',   source: "startRange" },
    //   { type: 'minute',    value: '00',  source: "startRange" },
    //   { type: 'literal',   value: ' – ', source: "shared"     },
    //   { type: 'hour',      value: '11',  source: "endRange"   },
    //   { type: 'literal',   value: ':',   source: "endRange"   },
    //   { type: 'minute',    value: '00',  source: "endRange"   },
    //   { type: 'literal',   value: ' ',   source: "shared"     },
    //   { type: 'dayPeriod', value: 'AM',  source: "shared"     }
    // ]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.DateTimeFormat.prototype.formatRangeToParts">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.DateTimeFormat.prototype.formatRangeToParts</span></a></td></tr></tbody></table>

`formatRangeToParts`

76

79

No

No

No

No

76

76

No

54

No

No

## See also

-   <span class="page-not-created">`Intl.DateTimeFormat.prototype.formatRange()`</span>
-   [`Intl.DateTimeFormat`](../datetimeformat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts</a>
