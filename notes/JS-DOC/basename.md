# Intl.Locale.prototype.baseName

The `Intl.Locale.prototype.baseName` property returns a substring of the `Locale`'s string representation, containing core information about the `Locale`.

## Description

An [`Intl.Locale`](../locale) object represents a parsed local and options for that locale. The `baseName` property returns basic, core information about the Locale in the form of a substring of the complete data string. Specifically, the property returns the substring containing the language, and the script and region if available.

`baseName` returns the `language ["-" script] ["-" region] *("-" variant)` subsequence of the [unicode_language_id grammar](https://www.unicode.org/reports/tr35/#Identifiers).

## Examples

### Basic Example

    let myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Canadian French
    console.log(myLoc.toString()); // Prints out "fr-Latn-CA-u-ca-gregory"
    console.log(myLoc.baseName); // Prints out "fr-Latn-CA"

### Example with options in the input string

    // Sets language to Japanese, region to Japan,

    // calendar to Gregorian, hour cycle to 24 hours
    let japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
    console.log(japan.toString()); // Prints out "ja-JP-u-ca-gregory-hc-h24"
    console.log(japan.baseName); // Prints out "ja-JP"

### Example with options that override input string

    // Input string indicates language as Dutch and region as Belgium,

    // but options object overrides the region and sets it to the Netherlands
    let dutch = new Intl.Locale("nl-Latn-BE", {region: "NL"});

    console.log(dutch.baseName); // Prints out "nl-Latn-NL"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.baseName">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.baseName</span></a></td></tr></tbody></table>

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

## See also

-   [`Intl.Locale`](../locale)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName</a>
