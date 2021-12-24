# Intl.Locale.prototype.language

The `Intl.Locale.prototype.language` property is an accessor property that returns the language associated with the locale.

## Description

Language is one of the core features of a locale. The Unicode specification treats the language identifier of a locale as the language and the region together (to make a distinction between dialects and variations, e.g. British English vs. American English). The `language` property of a [`Locale`](../locale) returns strictly the locale's language subtag.

## Examples

### Setting the language in the locale identifer string argument

In order to be a valid Unicode locale identifier, a string must start with the language subtag. The main argument to the [`Locale`](locale) constructor must be a valid Unicode locale identifier, so whenever the constructor is used, it must be passed an identifier with a language subtag.

    let langStr = new Intl.Locale("en-Latn-US");

    console.log(langStr.language); // Prints "en"

### Overriding language via the configuration object

While the language subtag must be specified, the [`Locale`](../locale) constructor takes a configuration object, which can override the language subtag.

    let langObj = new Intl.Locale("en-Latn-US", {language: "es"});

    console.log(langObj.language); // Prints "es"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.language">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.language</span></a></td></tr></tbody></table>

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

## See also

-   [`Intl.Locale`](../locale)
-   [Unicode language subtag specification](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language</a>
