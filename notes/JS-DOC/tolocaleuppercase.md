# String.prototype.toLocaleUpperCase()

The `toLocaleUpperCase()` method returns the calling string value converted to upper case, according to any locale-specific case mappings.

## Syntax

    toLocaleUpperCase()
    toLocaleUpperCase(locale)
    toLocaleUpperCase([locale1, locale2, ...])

### Parameters

`locale` <span class="badge inline optional">Optional</span>  
The `locale` parameter indicates the locale to be used to convert to upper case according to any locale-specific case mappings. If multiple locales are given in an [`Array`](../array), the [best available locale](https://tc39.github.io/ecma402/#sec-bestavailablelocale) is used. The default locale is the host environment's current locale.

### Return value

A new string representing the calling string converted to upper case, according to any locale-specific case mappings.

### Exceptions

-   A [`RangeError`](../rangeerror) ("invalid language tag: xx_yy") is thrown if a `locale` argument isn't a valid language tag.
-   A [`TypeError`](../typeerror) ("invalid element in locales argument") is thrown if an array element isn't of type string.

## Description

The `toLocaleUpperCase()` method returns the value of the string converted to upper case according to any locale-specific case mappings. `toLocaleUpperCase()` does not affect the value of the string itself. In most cases, this will produce the same result as [`toUpperCase()`](touppercase), but for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode, there may be a different result.

Also notice that conversion is not necessarily a 1:1 character mapping, as some characters might result in two (or even more) characters when transformed to upper-case. Therefore the length of the result string can differ from the input length. This also implies that the conversion is not stable, so i.E. the following can return `false`:  
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## Examples

### Using toLocaleUpperCase()

    'alphabet'.toLocaleUpperCase(); // 'ALPHABET'

    'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'

    'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'

    let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
    'i\u0307'.toLocaleUpperCase(locales); // 'I'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.tolocaleuppercase">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.tolocaleuppercase</span></a></td></tr><tr class="even"><td><a href="https://tc39.es/ecma402/#sup-string.prototype.tolocaleuppercase">ECMAScript Internationalization API Specification (ECMAScript Internationalization API)
<br/>

<span class="small">#sup-string.prototype.tolocaleuppercase</span></a></td></tr></tbody></table>

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

`toLocaleUpperCase`

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

42

10

7.0

## See also

-   [`String.prototype.toLocaleLowerCase()`](tolocalelowercase)
-   [`String.prototype.toLowerCase()`](tolowercase)
-   [`String.prototype.toUpperCase()`](touppercase)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase</a>
