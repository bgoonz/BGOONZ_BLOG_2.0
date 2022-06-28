# Date.prototype.toLocaleTimeString()

The `toLocaleTimeString()` method returns a string with a language sensitive representation of the time portion of this date. The new `locales` and `options` arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function. In older implementations, which ignore the `locales` and `options` arguments, the locale used and the form of the string returned are entirely implementation dependent.

## Syntax

    toLocaleTimeString()
    toLocaleTimeString(locales)
    toLocaleTimeString(locales, options)

### Parameters

The `locales` and `options` arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used. In implementations, which ignore the `locales` and `options` arguments, the locale used and the form of the string returned are entirely implementation dependent.

See the [`Intl.DateTimeFormat()`](../intl/datetimeformat/datetimeformat) constructor for details on these parameters and how to use them.

The default value for each date-time component property is [`undefined`](../undefined), but if the `hour`, `minute`, `second` properties are all [`undefined`](../undefined), then `hour`, `minute`, and `second` are assumed to be `"numeric"`.

### Return value

A string representing the time portion of the given [`Date`](../date) instance according to language-specific conventions.

## Performance

When formatting large numbers of dates, it is better to create an [`Intl.DateTimeFormat`](../intl/datetimeformat) object and use the function provided by its [`format`](../intl/datetimeformat/format) property.

## Examples

### Using toLocaleTimeString()

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

    var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

    // toLocaleTimeString() without arguments depends on the implementation,
    // the default locale, and the default time zone
    console.log(date.toLocaleTimeString());
    // → "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles

### Checking for support for locales and options arguments

The `locales` and `options` arguments are not supported in all browsers yet. To check whether an implementation supports them already, you can use the requirement that illegal language tags are rejected with a [`RangeError`](../rangeerror) exception:

    function toLocaleTimeStringSupportsLocales() {
      try {
        new Date().toLocaleTimeString('i');
      } catch (e) {
        return e.name === 'RangeError';
      }
      return false;
    }

### Using locales

This example shows some of the variations in localized time formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    // formats below assume the local time zone of the locale;
    // America/Los_Angeles for the US

    // US English uses 12-hour time with AM/PM
    console.log(date.toLocaleTimeString('en-US'));
    // → "7:00:00 PM"

    // British English uses 24-hour time without AM/PM
    console.log(date.toLocaleTimeString('en-GB'));
    // → "03:00:00"

    // Korean uses 12-hour time with AM/PM
    console.log(date.toLocaleTimeString('ko-KR'));
    // → "오후 12:00:00"

    // Arabic in most Arabic speaking countries uses real Arabic digits
    console.log(date.toLocaleTimeString('ar-EG'));
    // → "٧:٠٠:٠٠ م"

    // when requesting a language that may not be supported, such as
    // Balinese, include a fallback language, in this case Indonesian
    console.log(date.toLocaleTimeString(['ban', 'id']));
    // → "11.00.00"

### Using options

The results provided by `toLocaleTimeString()` can be customized using the `options` argument:

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    // an application may want to use UTC and make that visible
    var options = { timeZone: 'UTC', timeZoneName: 'short' };
    console.log(date.toLocaleTimeString('en-US', options));
    // → "3:00:00 AM GMT"

    // sometimes even the US needs 24-hour time
    console.log(date.toLocaleTimeString('en-US', { hour12: false }));
    // → "19:00:00"

    // show only hours and minutes, use options with the default locale - use an empty array
    console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    // → "20:01"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-date.prototype.tolocaletimestring">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-date.prototype.tolocaletimestring</span></a></td></tr><tr class="even"><td><a href="https://tc39.es/ecma402/#sup-date.prototype.tolocaletimestring">ECMAScript Internationalization API Specification (ECMAScript Internationalization API)
<br/>

<span class="small">#sup-date.prototype.tolocaletimestring</span></a></td></tr></tbody></table>

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
-   [`Date.prototype.toLocaleDateString()`](tolocaledatestring)
-   [`Date.prototype.toLocaleString()`](tolocalestring)
-   [`Date.prototype.toTimeString()`](totimestring)
-   [`Date.prototype.toString()`](tostring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString</a>
