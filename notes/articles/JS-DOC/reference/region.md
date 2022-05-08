# Intl.Locale.prototype.region

The `Intl.Locale.prototype.region` property is an accessor property that returns the region of the world (usually a country) associated with the locale.

## Description

The region is an essential part of the locale identifier, as it places the locale in a specific area of the world. Knowing the locale's region is vital to identifying differences between locales. For example, English is spoken in the United Kingdom and the United States of America, but there are differences in spelling and other language conventions between those two countries. Knowing the locale's region helps JavaScript programmers make sure that the content from their sites and applications is correctly displayed when viewed from different areas of the world.

## Examples

### Setting the region in the locale identifer string argument

The region is the third part of a valid Unicode language identifier string, and can be set by adding it to the locale identifier string that is passed into the [`Locale`](locale) constructor. The region is a mandatory part of a

    let regionStr = new Intl.Locale("en-Latn-US");

    console.log(regionStr.region); // Prints "US"

### Setting the region via the configuration object

The [`Locale`](locale) constructor takes a configuration object, which can be used to set the region subtag and property.

    let regionObj = new Intl.Locale("fr-Latn", {region: "FR"});

    console.log(regionObj.region); // Prints "FR"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.region">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.region</span></a></td></tr></tbody></table>

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

## See also

-   [`Intl.Locale`](../locale)
-   [Unicode region chart](https://www.unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region</a>
