# Intl.RelativeTimeFormat

The `Intl.RelativeTimeFormat` object enables language-sensitive relative time formatting.

## Constructor

[`Intl.RelativeTimeFormat()`](relativetimeformat/relativetimeformat)  
Creates a new `Intl.RelativeTimeFormat` object.

## Static methods

[`Intl.RelativeTimeFormat.supportedLocalesOf()`](relativetimeformat/supportedlocalesof)  
Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

[`Intl.RelativeTimeFormat.prototype.format()`](relativetimeformat/format)  
Formats a `value` and a `unit` according to the locale and formatting options of the given [`Intl.RelativeTimeFormat`](relativetimeformat) object.

[`Intl.RelativeTimeFormat.prototype.formatToParts()`](relativetimeformat/formattoparts)  
Returns an [`Array`](../array) of objects representing the relative time format in parts that can be used for custom locale-aware formatting.

[`Intl.RelativeTimeFormat.prototype.resolvedOptions()`](relativetimeformat/resolvedoptions)  
Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.

## Examples

### Basic format usage

The following example shows how to use a relative time formatter for the English language.

    // Create a relative time formatter in your locale
    // with default values explicitly passed in.
    const rtf = new Intl.RelativeTimeFormat("en", {
        localeMatcher: "best fit", // other values: "lookup"
        numeric: "always", // other values: "auto"
        style: "long", // other values: "short" or "narrow"
    });

    // Format relative time using negative value (-1).
    rtf.format(-1, "day");
    // > "1 day ago"

    // Format relative time using positive  value (1).
    rtf.format(1, "day");
    // > "in 1 day"

### Using formatToParts

The following example shows how to create a relative time formatter returning formatted parts

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    // Format relative time using the day unit.
    rtf.formatToParts(-1, "day");
    // > [{ type: "literal", value: "yesterday"}]

    rtf.formatToParts(100, "day");
    // > [{ type: "literal", value: "in " },
    // >  { type: "integer", value: "100", unit: "day" },
    // >  { type: "literal", value: " days" }]

## Polyfill

[formatjs Intl.RelativeTimeFormat polyfill](https://formatjs.io/docs/polyfills/intl-relativetimeformat)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#relativetimeformat-objects">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#relativetimeformat-objects</span></a></td></tr></tbody></table>

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

`RelativeTimeFormat`

71

79

65

No

58

14

71

71

65

50

14

10.0

`RelativeTimeFormat`

71

79

65

No

58

14

71

71

65

50

14

10.0

`format`

71

79

65

No

58

14

71

71

65

50

14

10.0

`formatToParts`

71

79

70

No

58

14

71

71

79

50

14

10.0

`resolvedOptions`

71

79

65

No

58

14

71

71

65

50

14

10.0

`supportedLocalesOf`

71

79

65

No

58

14

71

71

65

50

14

10.0

## See also

-   [`Intl`](../intl)
-   [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat</a>
