# Intl.Locale.prototype.collation

The `Intl.Locale.prototype.collation` property is an accessor property that returns the [collation type](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) for the `Locale`, which is used to order strings according to the locale's rules.

## Description

Collation is the process of ordering strings of characters. It is used whenever strings must be sorted and placed into a certain order, from search query results to ordering records in a database. While the idea of placing strings in order might seem trivial, the idea of order can vary from region to region and language to language. The `collation` property helps to make it easier for JavaScript programmers to access the collation type used by a particular locale.

Below is a table with the available collation types, taken from the [Unicode collation specification](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml).

### Valid collation types

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Collation Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>big5han</td><td>Pinyin ordering for Latin, big5 charset ordering for CJK characters (used in Chinese)</td></tr><tr class="even"><td>compat</td><td>A previous version of the ordering, for compatibility</td></tr><tr class="odd"><td>dict</td><td>Dictionary style ordering (such as in Sinhala)</td></tr><tr class="even"><td><div class="notecard warning"><p><strong>Warning:</strong> The <code>direct</code> collation type has been deprected. Do not use.</p></div><p>direct</p></td><td>Binary code point order (used in Hindi)</td></tr><tr class="odd"><td>ducet</td><td>The default Unicode collation element table order</td></tr><tr class="even"><td>emoji</td><td>Recommended ordering for emoji characters</td></tr><tr class="odd"><td>eor</td><td>European ordering rules</td></tr><tr class="even"><td>gb2312</td><td>Pinyin ordering for Latin, gb2312han charset ordering for CJK characters (used in Chinese)</td></tr><tr class="odd"><td>phonebk</td><td>Phonebook style ordering (such as in German)</td></tr><tr class="even"><td>phonetic</td><td>Phonetic ordering (sorting based on pronunciation)</td></tr><tr class="odd"><td>pinyin</td><td>Pinyin ordering for Latin and for CJK characters (used in Chinese)</td></tr><tr class="even"><td>reformed</td><td>Reformed ordering (such as in Swedish)</td></tr><tr class="odd"><td>search</td><td>Special collation type for string search</td></tr><tr class="even"><td>searchjl</td><td>Special collation type for Korean initial consonant search</td></tr><tr class="odd"><td>standard</td><td>Default ordering for each language</td></tr><tr class="even"><td>stroke</td><td>Pinyin ordering for Latin, stroke order for CJK characters (used in Chinese)</td></tr><tr class="odd"><td>trad</td><td>Traditional style ordering (such as in Spanish)</td></tr><tr class="even"><td>unihan</td><td>Pinyin ordering for Latin, Unihan radical-stroke ordering for CJK characters (used in Chinese)</td></tr><tr class="odd"><td>zhuyin</td><td><p>Pinyin ordering for Latin, zhuyin order for Bopomofo and CJK characters (used in Chinese)</p></td></tr></tbody></table>

## Examples

Like other locale subtags, the collation type can be added to the [`Intl.Locale`](../locale) object via the locale string, or a configuration object argument to the constructor.

### Adding a collation type via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), collation types are locale key "extension subtags". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension. Thus, the collation type can be added to the initial locale identifier string that is passed into the [`Locale`](locale) constructor. To add the collation type, first add the `-u` extension to the string. Next, add the `-co` extension to indicate that you are adding a collation type. Finally, add the collation to the string.

    let stringColl = new Intl.Locale("en-Latn-US-u-co-emoji");
    console.log(stringColl.collation); // Prints "emoji"

### Adding a collation type via the configuration object argument

The [`Intl.Locale`](locale) constructor has an optional configuration object argument, which can contain any of several extension types, including collation types. Set the `collation` property of the configuration object to your desired collation type, and then pass it into the constructor.

    let configColl = new Intl.Locale("en-Latn-US", {collation: "emoji"});
    console.log(configColl.collation); // Prints "emoji"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.collation">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.collation</span></a></td></tr></tbody></table>

`collation`

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

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation</a>
