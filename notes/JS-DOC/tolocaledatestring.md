# Date.prototype.toLocaleDateString()

The `toLocaleDateString()` method returns a string with a language sensitive representation of the date portion of this date. The new `locales` and `options` arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the `locales` and `options` arguments, the locale used and the form of the string returned are entirely implementation dependent.

## Syntax

    toLocaleDateString()
    toLocaleDateString(locales)
    toLocaleDateString(locales, options)

### Parameters

The `locales` and `options` arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used. In implementations, which ignore the `locales` and `options` arguments, the locale used and the form of the string returned are entirely implementation dependent.

See the [`Intl.DateTimeFormat()`](../intl/datetimeformat/datetimeformat) constructor for details on these parameters and how to use them.

The default value for each date-time component property is [`undefined`](../undefined), but if the `weekday`, `year`, `month`, `day` properties are all [`undefined`](../undefined), then `year`, `month`, and `day` are assumed to be `"numeric"`.

### Return value

A string representing the date portion of the given [`Date`](../date) instance according to language-specific conventions.

## Performance

When formatting large numbers of dates, it is better to create an [`Intl.DateTimeFormat`](../intl/datetimeformat) object and use the function provided by its [`format`](../intl/datetimeformat/format) property.

## Examples

### Using toLocaleDateString()

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

    var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

    // toLocaleDateString() without arguments depends on the implementation,
    // the default locale, and the default time zone
    console.log(date.toLocaleDateString());
    // → "12/11/2012" if run in en-US locale with time zone America/Los_Angeles

### Checking for support for locales and options arguments

The `locales` and `options` arguments are not supported in all browsers yet. To check whether an implementation supports them already, you can use the requirement that illegal language tags are rejected with a [`RangeError`](../rangeerror) exception:

    function toLocaleDateStringSupportsLocales() {
      try {
        new Date().toLocaleDateString('i');
      } catch (e) {
        return e.name === 'RangeError';
      }
      return false;
    }

### Using locales

This example shows some of the variations in localized date formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    // formats below assume the local time zone of the locale;
    // America/Los_Angeles for the US

    // US English uses month-day-year order
    console.log(date.toLocaleDateString('en-US'));
    // → "12/19/2012"

    // British English uses day-month-year order
    console.log(date.toLocaleDateString('en-GB'));
    // → "20/12/2012"

    // Korean uses year-month-day order
    console.log(date.toLocaleDateString('ko-KR'));
    // → "2012. 12. 20."

    // Event for Persian, It's hard to manually convert date to Solar Hijri
    console.log(date.toLocaleDateString('fa-IR'));
    // → "۱۳۹۱/۹/۳۰"

    // Arabic in most Arabic speaking countries uses real Arabic digits
    console.log(date.toLocaleDateString('ar-EG'));
    // → "٢٠‏/١٢‏/٢٠١٢"

    // for Japanese, applications may want to use the Japanese calendar,
    // where 2012 was the year 24 of the Heisei era
    console.log(date.toLocaleDateString('ja-JP-u-ca-japanese'));
    // → "24/12/20"

    // when requesting a language that may not be supported, such as
    // Balinese, include a fallback language, in this case Indonesian
    console.log(date.toLocaleDateString(['ban', 'id']));
    // → "20/12/2012"

### Using options

The results provided by `toLocaleDateString()` can be customized using the `options` argument:

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    // request a weekday along with a long date
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    console.log(date.toLocaleDateString('de-DE', options));
    // → "Donnerstag, 20. Dezember 2012"

    // an application may want to use UTC and make that visible
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    console.log(date.toLocaleDateString('en-US', options));
    // → "Thursday, December 20, 2012, UTC"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.tolocaledatestring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.tolocaledatestring</span></a></td></tr><tr class="even"><td><a href="https://tc39.es/ecma402/#sup-date.prototype.tolocaledatestring">ECMAScript Internationalization API Specification (ECMAScript Internationalization API)
<br/>

<span class="small">#sup-date.prototype.tolocaledatestring</span></a></td></tr></tbody></table>

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

`iana_time_zone_names`

24

14

52

No

15

6.1

4.4

25

56

14

7

1.5

`locales`

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

`options`

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

-   [`Intl.DateTimeFormat`](../intl/datetimeformat)
-   [`Date.prototype.toLocaleString()`](tolocalestring)
-   [`Date.prototype.toLocaleTimeString()`](tolocaletimestring)
-   [`Date.prototype.toString()`](tostring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString</a>
