# Intl.Locale.prototype.script

The `Intl.Locale.prototype.script` property is an accessor property which returns the script used for writing the particular language used in the locale.

## Description

A script, sometimes called writing system, is one of the core attributes of a locale. It indicates the set of symbols, or glyphs, that are used to write a particular language. For instance, the script associated with English is Latin, whereas the script typically associated with Korean is Hangul. In many cases, denoting a script is not strictly necessary, since the language (which is necessary) is only written in a single script. There are exceptions to this rule, however, and it is important to indicate the script whenever possible, in order to have a complete Unicode language identifier.

## Examples

### Setting the script in the locale identifer string argument

The script is the second part of a valid Unicode language identifier string, and can be set by adding it to the locale identifier string that is passed into the [`Locale`](locale) constructor. Note that the script is not a required part of a locale identifier.

    let scriptStr = new Intl.Locale("en-Latn-US");

    console.log(scriptStr.script); // Prints "Latn"

### Setting the script via the configuration object

The [`Locale`](locale) constructor takes a configuration object, which can be used to set the script subtag and property.

    let scriptObj = new Intl.Locale("fr-FR", {script: "Latn"});

    console.log(scriptObj.script); // Prints "Latn"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.script">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.script</span></a></td></tr></tbody></table>

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

## See also

-   [`Intl.Locale`](../locale)
-   [Unicode's script subtag specification](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script</a>
