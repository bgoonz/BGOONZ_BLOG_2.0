# Intl.getCanonicalLocales()

The `Intl.getCanonicalLocales()` method returns an array containing the canonical locale names. Duplicates will be omitted and elements will be validated as structurally valid language tags.

## Syntax

    Intl.getCanonicalLocales(locales)

### Parameters

`locales`  
A list of [`String`](../string) values for which to get the canonical locale names.

### Return value

An array containing the canonical locale names.

## Examples

### Using getCanonicalLocales

    Intl.getCanonicalLocales('EN-US'); // ["en-US"]
    Intl.getCanonicalLocales(['EN-US', 'Fr']); // ["en-US", "fr"]

    Intl.getCanonicalLocales('EN_US');
    // RangeError:'EN_US' is not a structurally valid language tag

## Polyfill

[formatjs Intl.getCanonicalLocales polyfill](https://formatjs.io/docs/polyfills/intl-getcanonicallocales)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl.getcanonicallocales">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl.getcanonicallocales</span></a></td></tr></tbody></table>

`getCanonicalLocales`

54

16

48

No

No

11

No

No

56

No

11

No

## See also

-   [`Intl.NumberFormat.supportedLocalesOf()`](numberformat/supportedlocalesof)
-   [`Intl.DateTimeFormat.supportedLocalesOf()`](datetimeformat/supportedlocalesof)
-   [`Intl.Collator.supportedLocalesOf()`](collator/supportedlocalesof)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales</a>
