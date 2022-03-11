# Intl.Locale.prototype.maximize()

The `Intl.Locale.prototype.maximize()` method gets the most likely values for the language, script, and region of the locale based on existing values.

## Syntax

    maximize()

### Return value

A [`Locale`](../locale) instance whose `baseName` property returns the result of the [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) algorithm executed against _[`locale.baseName`](basename)_.

## Description

Sometimes, it is convenient to be able to identify the most likely locale language identifier subtags based on an incomplete langauage ID. The Add Likely Subtags algorithm gives us this functionality. For instance, given the language ID "en", the algorithm would return "en-Latn-US", since English can only be written in the Latin script, and is most likely to be used in the United States, as it is the largest English-speaking country in the world. This functionality is provided to JavaScript programmers via the `maximize()` method. `maximize()` only affects the main subtags that comprise the [language identifier](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions): language, script, and region subtags. Other subtags after the "-u" in the locale identifier are called extension subtags and are not affected by the `maximize()` method. Examples of these subtags include [`Locale.hourCycle`](hourcycle), [`Locale.calendar`](calendar), and [`Locale.numeric`](numeric).

## Examples

### Using maximize

    let myLocale = new Intl.Locale("fr", {hourCycle: "h24", calendar: "gregory"});
    console.log(myLocale.baseName); // Prints "fr"
    console.log(myLocale.toString()); // Prints "fr-u-ca-gregory-hc-h24"
    let myLocMaximized = myLocale.maximize();

    // Prints "fr-Latn-FR". The "Latn" and "FR" tags are added,
    // since French is only written in the Latin script and is most likely to be spoken in France.
    console.log(myLocMaximized.baseName);

    // Prints "fr-Latn-FR-u-ca-gregory-hc-h24".
    // Note that the extension tags (after "-u") remain unchanged.
    console.log(myLocMaximized.toString());

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.maximize">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.maximize</span></a></td></tr></tbody></table>

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

## See also

-   [`Intl.Locale`](../locale)
-   [`Intl.Locale.baseName`](basename)
-   [Unicode's Likely Subtags spec](https://www.unicode.org/reports/tr35/#Likely_Subtags)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize</a>
