# Intl.Locale.prototype.numeric

The `Intl.Locale.prototype.numeric` property is an accessor property that returns whether the locale has special collation handling for numeric characters.

## Description

Like [`Intl.Locale.caseFirst`](casefirst), `numeric` represents a modification to the collation rules utilized by the locale. `numeric` is a [`Boolean`](../../boolean) value, which means that it can be either `true` or `false`. If `numeric` is set to `false`, there will be no special handling of numeric values in strings. If `numeric` is set to `true`, then the locale will take numeric characters into account when collating strings. This special numeric handling means that sequences of decimal digits will be compared as numbers. For example, the string "A-21" will be considered less than "A-123".

## Examples

### Setting the numeric value via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), the values that `numeric` represents correspond to the key `kn`. `kn` is considered a locale string "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension key. Thus, the `numeric` value can be added to the initial locale identifier string that is passed into the [`Locale`](locale) constructor. To set the `numeric` value, first add the `-u` extension key to the string. Next, add the `-kn` extension key to indicate that you are adding a value for `numeric`. Finally, add the `numeric` value to the string. If you want to set `numeric` to `true`, adding the `kn` key will suffice. To set the value to `false`, you must specify in by adding "`false`" after the `kn` key.

    let numericViaStr = new Intl.Locale("fr-Latn-FR-u-kn-false");
    console.log(numericStr.numeric); // Prints "false"

### Setting the `numeric` value via the configuration object argument

The [`Intl.Locale`](locale) constructor has an optional configuration object argument, which can be used to pass extension types. Set the `numeric` property of the configuration object to your desired `numeric` value and pass it into the constructor.

    let numericViaObj= new Intl.Locale("en-Latn-US", {numeric: true});
    console.log(us12hour.numeric); // Prints "true"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.numeric">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.numeric</span></a></td></tr></tbody></table>

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

`numeric`

74

79

75

No

62

14

74

74

79

53

14

11.0

## See also

-   [`Intl.Locale`](../locale)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric</a>
