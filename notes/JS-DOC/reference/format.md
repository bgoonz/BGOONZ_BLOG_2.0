# Intl.DateTimeFormat.prototype.format()

The `Intl.DateTimeFormat.prototype.format()` method formats a date according to the locale and formatting options of this [`Intl.DateTimeFormat`](../datetimeformat) object.

## Syntax

    format(date)

### Parameters

`date`  
The date to format.

## Description

The `format` getter formats a date into a string according to the locale and formatting options of this [`Intl.DateTimeFormat`](../datetimeformat) object.

## Examples

### Using format

Use the `format` getter function for formatting a single date, here for Serbia:

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateTimeFormat = new Intl.DateTimeFormat('sr-RS', options);
    console.log(dateTimeFormat.format(new Date()));
    // → "недеља, 7. април 2013."

### Using format with map

Use the `format` getter function for formatting all dates in an array. Note that the function is bound to the [`Intl.DateTimeFormat`](../datetimeformat) from which it was obtained, so it can be passed directly to [`Array.prototype.map()`](../../array/map).

    var a = [new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)];
    var options = { year: 'numeric', month: 'long' };
    var dateTimeFormat = new Intl.DateTimeFormat('pt-BR', options);
    var formatted = a.map(dateTimeFormat.format);
    console.log(formatted.join('; '));
    // → "setembro de 2012; dezembro de 2012; abril de 2012"

### Avoid comparing formatted date values to static values

Most of the time, the formatting returned by `format()` is consistent. However, this might change in the future and isn't guaranteed for all the languages — output variations are by design and allowed by the specification. Most notably, the IE and Edge browsers insert bidirectional control characters around dates, so the output text will flow properly when concatenated with other text.

For this reason you cannot expect to be able to compare the results of `format()` to a static value:

    let d = new Date("2019-01-01T00:00:00.000000Z");
    let formattedDate = Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }).format(d);

    "1.1.2019, 01:00:00" === formattedDate;
    // true in Firefox and others
    // false in IE and Edge

**Note:** See also this [StackOverflow thread](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results) for more details and examples.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl.datetimeformat.prototype.format">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl.datetimeformat.prototype.format</span></a></td></tr></tbody></table>

`format`

24

12

29

11

15

10

4.4

25

56

14

10

1.5

## See also

-   [`Intl.DateTimeFormat`](../datetimeformat)
-   [`Date.prototype.toLocaleString()`](../../date/tolocalestring)
-   [`Date.prototype.toLocaleDateString()`](../../date/tolocaledatestring)
-   [`Date.prototype.toLocaleTimeString()`](../../date/tolocaletimestring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format</a>
