# Intl.PluralRules.select()

The `Intl.PluralRules.prototype.select()` method returns a string indicating which plural rule to use for locale-aware formatting.

## Syntax

    select(number)

### Parameters

`number`  
The number to get a plural rule for.

### Return value

A string representing the pluralization category of the `number`, can be one of `zero`, `one`, `two`, `few`, `many` or `other`.

## Description

This function selects a pluralization category according to the locale and formatting options of a [`Intl/PluralRules`](../pluralrules) object.

## Examples

### Using select()

     new Intl.PluralRules('ar-EG').select(0);
    // → 'zero'

    new Intl.PluralRules('ar-EG').select(1);
    // → 'one'

    new Intl.PluralRules('ar-EG').select(2);
    // → 'two'

    new Intl.PluralRules('ar-EG').select(6);
    // → 'few'

    new Intl.PluralRules('ar-EG').select(18);
    // → 'many'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl.pluralrules.prototype.select">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl.pluralrules.prototype.select</span></a></td></tr></tbody></table>

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

`select`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select</a>
