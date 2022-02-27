# String.prototype.toLocaleLowerCase()

The `toLocaleLowerCase()` method returns the calling string value converted to lower case, according to any locale-specific case mappings.

## Syntax

    toLocaleLowerCase()
    toLocaleLowerCase(locale)
    toLocaleLowerCase([locale1, locale2, ...])

### Parameters

`locale` <span class="badge inline optional">Optional</span>  
The `locale` parameter indicates the locale to be used to convert to lower case according to any locale-specific case mappings. If multiple locales are given in an [`Array`](../array), the [best available locale](https://tc39.github.io/ecma402/#sec-bestavailablelocale) is used. The default locale is the host environment's current locale.

### Return value

A new string representing the calling string converted to lower case, according to any locale-specific case mappings.

### Exceptions

-   A [`RangeError`](../rangeerror) ("invalid language tag: xx_yy") is thrown if a `locale` argument isn't a valid language tag.
-   A [`TypeError`](../typeerror) ("invalid element in locales argument") is thrown if an array element isn't of type string.

## Description

The `toLocaleLowerCase()` method returns the value of the string converted to lower case according to any locale-specific case mappings. `toLocaleLowerCase()` does not affect the value of the string itself. In most cases, this will produce the same result as [`toLowerCase()`](tolowercase), but for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode, there may be a different result.

## Examples

### Using toLocaleLowerCase()

    'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

    '\u0130'.toLocaleLowerCase('tr') === 'i';    // true
    '\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

    let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
    '\u0130'.toLocaleLowerCase(locales) === 'i'; // true

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.tolocalelowercase">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.tolocalelowercase</span></a></td></tr><tr class="even"><td><a href="https://tc39.es/ecma402/#sup-string.prototype.tolocalelowercase">ECMAScript Internationalization API Specification (ECMAScript Internationalization API)
<br/>

<span class="small">#sup-string.prototype.tolocalelowercase</span></a></td></tr></tbody></table>

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

`toLocaleLowerCase`

1

12

1

5.5

4

1.3

1

18

4

10.1

1

1.0

`locale`

58

12

55

6

45

10

58

58

55

43

10

7.0

## See also

-   [`String.prototype.toLocaleUpperCase()`](tolocaleuppercase)
-   [`String.prototype.toLowerCase()`](tolowercase)
-   [`String.prototype.toUpperCase()`](touppercase)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase</a>
