# Intl.PluralRules() constructor

The `Intl.PluralRules()` constructor creates [`Intl.PluralRules`](../pluralrules) objects.

## Syntax

    new Intl.PluralRules()
    new Intl.PluralRules(locales)
    new Intl.PluralRules(locales, options)

### Parameters

`locales` <span class="badge inline optional">Optional</span>  
A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the [Intl](../../intl#locale_identification_and_negotiation) page.

`options` <span class="badge inline optional">Optional</span>  
An object with some or all of the following properties:

`localeMatcher`  
The locale matching algorithm to use. Possible values are "`lookup`" and "`best fit`"; the default is "`best fit`". For information about this option, see the [Intl](../../intl#locale_negotiation) page.

`type`  
The type to use. Possible values are:

-   "`cardinal`" for cardinal numbers (refering to the quantity of things). This is the default value.
-   "`ordinal`" for ordinal number (refering to the ordering or ranking of things, e.g. "1st", "2nd", "3rd" in English).

The following properties fall into two groups: `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` in one group, `minimumSignificantDigits` and `maximumSignificantDigits` in the other. If at least one property from the second group is defined, then the first group is ignored.

`minimumIntegerDigits`  
The minimum number of integer digits to use. Possible values are from 1 to 21; the default is 1.

`minimumFractionDigits`  
The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.currency-iso.org/en/home/tables/table-a1.html) (2 if the list doesn't provide that information).

`maximumFractionDigits`  
The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of `minimumFractionDigits` and 3; the default for currency formatting is the larger of `minimumFractionDigits` and the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.currency-iso.org/en/home/tables/table-a1.html) (2 if the list doesn't provide that information); the default for percent formatting is the larger of `minimumFractionDigits` and 0.

`minimumSignificantDigits`  
The minimum number of significant digits to use. Possible values are from 1 to 21; the default is 1.

`maximumSignificantDigits`  
The maximum number of significant digits to use. Possible values are from 1 to 21; the default is 21.

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned. This is useful to distinguish between singular and plural forms, e.g. "dog" and "dogs".

    var pr = new Intl.PluralRules();

    pr.select(0);
    // → 'other' if in US English locale

    pr.select(1);
    // → 'one' if in US English locale

    pr.select(2);
    // → 'other' if in US English locale

### Using options

The results can be customized using the `options` argument, which has one property called `type` which you can set to `ordinal`. This is useful to figure out the ordinal indicator, e.g. "1st", "2nd", "3rd", "4th", "42nd" and so forth.

    var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

    pr.select(0);
    // → 'other'
    pr.select(1);
    // → 'one'
    pr.select(2);
    // → 'two'
    pr.select(3);
    // → 'few'
    pr.select(4);
    // → 'other'
    pr.select(42);
    // → 'two'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl-pluralrules-constructor">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl-pluralrules-constructor</span></a></td></tr></tbody></table>

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

`PluralRules`

63

18

58

No

50

13

63

63

58

46

13

8.0

## See also

-   [`Intl.PluralRules`](../pluralrules)
-   [`Intl`](../../intl)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules</a>
