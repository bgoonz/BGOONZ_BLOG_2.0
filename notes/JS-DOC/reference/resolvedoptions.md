# Intl.NumberFormat.prototype.resolvedOptions()

The `Intl.NumberFormat.prototype.resolvedOptions()` method returns a new object with properties reflecting the locale and number formatting options computed during initialization of this [`Intl/NumberFormat`](../numberformat) object.

## Syntax

    resolvedOptions()

### Return value

A new object with properties reflecting the locale and number formatting options computed during the initialization of the given [`Intl/NumberFormat`](../numberformat) object.

## Description

The resulting object has the following properties:

`locale`  
The BCP 47 language tag for the locale actually used. If any Unicode extension values were requested in the input BCP 47 language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in `locale`.

`numberingSystem`  
The value provided for this properties in the `options` argument, if present, or the value requested using the Unicode extension key "`nu`" or filled in as a default.

`notation`  
The value provided for this property in the `options` argument, if present, or "`standard`" filled in as a default.

`compactDisplay`  
The value provided for this property in the `options` argument, or "`short`" filled in as a default.  
This property is only present if the `notation` is set to "compact".

`signDisplay`  
The value provided for this property in the `options` argument, or "`auto`" filled in as a default.

`useGrouping`  
The values provided for these properties in the `options` argument or filled in as defaults.

`currency`  
`currencyDisplay`  
The values provided for these properties in the `options` argument or filled in as defaults. These properties are only present if `style` is "`currency`".

Only one of the following two groups of properties is included:

`minimumIntegerDigits`  
`minimumFractionDigits`  
`maximumFractionDigits`  
The values provided for these properties in the `options` argument or filled in as defaults. These properties are present only if neither `minimumSignificantDigits` nor `maximumSignificantDigits` was provided in the `options` argument.

`minimumSignificantDigits`  
`maximumSignificantDigits`  
The values provided for these properties in the `options` argument or filled in as defaults. These properties are present only if at least one of them was provided in the `options` argument.

## Examples

### Using the `resolvedOptions` method

    var de = new Intl.NumberFormat('de-DE');
    var usedOptions = de.resolvedOptions();

    usedOptions.locale;                // "de-DE"
    usedOptions.numberingSystem;       // "latn"
    usedOptions.notation;              // "standard"
    usedOptions.signDisplay;           // "auto"
    usedOption.style;                  // "decimal"
    usedOptions.minimumIntegerDigits;  // 1
    usedOptions.minimumFractionDigits; // 0
    usedOptions.maximumFractionDigits; // 3
    usedOptions.useGrouping;           // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl.numberformat.prototype.resolvedoptions">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl.numberformat.prototype.resolvedoptions</span></a></td></tr></tbody></table>

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

`resolvedOptions`

24

12

29

11

15

10

4.4

25

56

14

10

1.5

## See also

-   [`Intl.NumberFormat`](../numberformat)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions</a>
