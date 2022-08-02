# Intl.Locale.prototype.caseFirst

The `Intl.Locale.prototype.caseFirst` property is an accessor property that returns whether case is taken into account for the locale's collation rules.

## Description

A locale's collation rules are used to determine how strings are ordered in that locale. Certain locales use a character's case (UPPERCASE or lowercase) in the collation process. This additional rule can be expressed in a [`Locale's`](../locale) `caseFirst` property.

There are 3 values that the `caseFirst` property can have, outlined in the table below.

### `caseFirst` values

<table><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>upper</code></td><td>Upper case to be sorted before lower case.</td></tr><tr class="even"><td><code>lower</code></td><td>Lower case to be sorted before upper case.</td></tr><tr class="odd"><td><code>false</code></td><td>No special case ordering.</td></tr></tbody></table>

## Examples

### Setting the caseFirst value via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), the values that `caseFirst` represents correspond to the key `kf`. `kf` is treated as a locale string "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension key. Thus, the `caseFirst` value can be added to the initial locale identifier string that is passed into the `Locale` constructor. To add the `caseFirst` value, first add the `-u` extension key to the string. Next, add the `-kf` extension key to indicate that you are adding a value for `caseFirst`. Finally, add the `caseFirst` value to the string.

    let caseFirstStr = new Intl.Locale("fr-Latn-FR-u-kf-upper");
    console.log(caseFirstStr.caseFirst); // Prints "upper"

### Setting the caseFirst value via the configuration object argument

The [`Intl.Locale`](locale) constructor has an optional configuration object argument, which can be used to pass extension types. Set the `caseFirst` property of the configuration object to your desired `caseFirst` value, and then pass it into the constructor.

    let caseFirstObj= new Intl.Locale("en-Latn-US", {caseFirst: "lower"});
    console.log(us12hour.caseFirst); // Prints "lower"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.caseFirst">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.caseFirst</span></a></td></tr></tbody></table>

`caseFirst`

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
-   [Unicode case first collation spec](https://github.com/unicode-org/cldr/blob/master/common/bcp47/collation.xml#L49)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst</a>
