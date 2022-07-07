# Intl.DateTimeFormat.prototype.formatRange()

The `Intl.DateTimeFormat.prototype.formatRange()` formats a date range in the most concise way based on the `locale` and `options` provided when instantiating [`Intl.DateTimeFormat`](../datetimeformat) object.

## Syntax

    formatRange(startDate, endDate)

## Examples

### Basic formatRange usage

This method receives two [`Date`](../../date)s and formats the date range in the most concise way based on the `locale` and `options` provided when instantiating [`Intl.DateTimeFormat`](../datetimeformat).

    let date1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
    let date2 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
    let date3 = new Date(Date.UTC(2007, 0, 20, 10, 0, 0));
    // > 'Wed, 10 Jan 2007 10:00:00 GMT'
    // > 'Wed, 10 Jan 2007 11:00:00 GMT'
    // > 'Sat, 20 Jan 2007 10:00:00 GMT'

    let fmt1 = new Intl.DateTimeFormat("en", {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
    console.log(fmt1.format(date1));
    console.log(fmt1.formatRange(date1, date2));
    console.log(fmt1.formatRange(date1, date3));
    // > '1/10/07, 10:00 AM'
    // > '1/10/07, 10:00 – 11:00 AM'
    // > '1/10/07, 10:00 AM – 1/20/07, 10:00 AM'

    let fmt2 = new Intl.DateTimeFormat("en", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    console.log(fmt2.format(date1));
    console.log(fmt2.formatRange(date1, date2));
    console.log(fmt2.formatRange(date1, date3));
    // > 'Jan 10, 2007'
    // > 'Jan 10, 2007'
    // > 'Jan 10 – 20, 2007'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl.datetimeformat.prototype.formatRange">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl.datetimeformat.prototype.formatRange</span></a></td></tr></tbody></table>

`formatRange`

76

79

No

No

No

14.1

76

76

No

54

14.5

No

## See also

-   [`Intl.DateTimeFormat`](../datetimeformat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange</a>
