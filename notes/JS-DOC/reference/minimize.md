# Intl.Locale.prototype.minimize()

The `Intl.Locale.prototype.minimize()` method attempts to remove information about the locale that would be added by calling [`Locale.maximize()`](maximize).

## Syntax

    minimize()

### Return value

A [`Locale`](../locale) instance whose `baseName` property returns the result of the [Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) algorithm executed against _[`locale.baseName`](basename)_.

## Description

This method carries out the reverse of [`maximize()`](maximize), removing any language, script, or region subtags from the locale language identifier (essentially the contents of `baseName`). This is useful when there are superfluous subtags in the language identifier; for instance, "en-Latn" can be simplified to "en", since "Latn" is the only script used to write English. `minimize()` only affects the main subtags that comprise the [language identifier](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions): language, script, and region subtags. Other subtags after the "-u" in the locale identifier are called extension subtags and are not affected by the `minimize()` method. Examples of these subtags include [`Locale.hourCycle`](hourcycle), [`Locale.calendar`](calendar), and [`Locale.numeric`](numeric).

## Examples

### Using minimize

    let myLocale = new Intl.Locale("fr-Latn-FR", {hourCycle: "h24", calendar: "gregory"});
    console.log(myLocale.baseName); // Prints "fr-Latn-FR"
    console.log(myLocale.toString()); // Prints "fr-Latn-FR-u-ca-gregory-hc-h24"

    let myLocMinimized = myLocale.minimize();

    // Prints "fr", since French is only written in the Latin script
    // and is most likely to be spoken in France.
    console.log(myLocMinimized.baseName);

    // Prints "fr-u-ca-gregory-hc-h24".
    // Note that the extension tags (after "-u") remain unchanged.
    console.log(myLocMinimized.toString());

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.minimize">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.minimize</span></a></td></tr></tbody></table>

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

## See also

-   [`Intl.Locale`](../locale)
-   [`Intl.Locale.baseName`](basename)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize</a>
