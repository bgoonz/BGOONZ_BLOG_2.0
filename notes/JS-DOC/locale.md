# Intl.Locale

The `Intl.Locale` object is a standard built-in property of the Intl object that represents a Unicode locale identifier.

## Description

The `Intl.Locale` object was created to allow for easier manipulation of Unicode locales. Unicode represents locales with a string, called a _locale identifier_. The locale identifier consists of a _language identifier_ and _extension tags_. Language identifiers are the core of the locale, consisting of _language_, _script_, and _region subtags_. Additional information about the locale is stored in the optional _extension tags_. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.

Traditionally, the Intl API used strings to represent locales, just as Unicode does. This is a simple and lightweight solution that works well. Adding a Locale class, however, adds ease of parsing and manipulating the language, script, and region, as well as extension tags.

## Constructor

[`Intl.Locale()`](locale/locale)  
Creates a new `Locale` object.

## Instance properties

[`Intl.Locale.prototype.baseName`](locale/basename)  
Returns basic, core information about the `Locale` in the form of a substring of the complete data string.

[`Intl.Locale.prototype.calendar`](locale/calendar)  
Returns the part of the `Locale` that indicates the Locale's calendar era.

[`Intl.Locale.prototype.caseFirst`](locale/casefirst)  
Returns whether case is taken into account for the locale's collation rules.

[`Intl.Locale.prototype.collation`](locale/collation)  
Returns the collation type for the `Locale`, which is used to order strings according to the locale's rules.

[`Intl.Locale.prototype.hourCycle`](locale/hourcycle)  
Returns the time keeping format convention used by the locale.

[`Intl.Locale.prototype.language`](locale/language)  
Returns the language associated with the locale.

[`Intl.Locale.prototype.numberingSystem`](locale/numberingsystem)  
Returns the numeral system used by the locale.

[`Intl.Locale.prototype.numeric`](locale/numeric)  
Returns whether the locale has special collation handling for numeric characters.

[`Intl.Locale.prototype.region`](locale/region)  
Returns the region of the world (usually a country) associated with the locale.

[`Intl.Locale.prototype.script`](locale/script)  
Returns the script used for writing the particular language used in the locale.

## Instance methods

[`Intl.Locale.prototype.maximize()`](locale/maximize)  
Gets the most likely values for the language, script, and region of the locale based on existing values.

[`Intl.Locale.prototype.minimize()`](locale/minimize)  
Gets the most likely values for the language, script, and region of the locale based on existing values.

[`Intl.Locale.prototype.toString()`](locale/tostring)  
Returns the Locale's full locale identifier string.

## Examples

### Basic usage

At its very simplest, the [`Intl.Locale`](locale/locale) constructor takes a locale identifier string as its argument:

    let us = new Intl.Locale('en-US');

### Using the Locale constructor with an options object

The constructor also takes an optional configuration object argument, which can contain any of several extension types. For example, set the [`hourCycle`](locale/hourcycle) property of the configuration object to your desired hour cycle type, and then pass it into the constructor:

    let us12hour = new Intl.Locale("en-US", {hourCycle: "h12"});
    console.log(us12hour.hourCycle); // Prints "h12"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#locale-objects">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#locale-objects</span></a></td></tr></tbody></table>

`Locale`

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

`Locale`

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

`baseName`

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

`calendar`

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

`collation`

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

`hourCycle`

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

`language`

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

`maximize`

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

`minimize`

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

`numberingSystem`

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

`region`

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

`script`

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

`toString`

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

-   [`Intl`](../intl)
-   [The Intl.Locale Polyfill](https://formatjs.io/docs/polyfills/intl-locale)
-   [Unicode locale identifiers spec](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale</a>
