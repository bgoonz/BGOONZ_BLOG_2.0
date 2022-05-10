# Intl.Locale.prototype.numberingSystem

The `Intl.Locale.prototype.numberingSystem` property is an accessor property that returns the [numeral system](https://en.wikipedia.org/wiki/Numeral_system) used by the locale.

## Description

A numeral system is a system for expressing numbers. The `numberingSystem` property helps to represent the different numeral systems used by various countries, regions, and cultures around the world. As with most internationalization schemas, the numeral systems that can be represented in a `Locale` object by `numberingSystem` are standardized by Unicode. A table of the standard Unicode numeral systems can be seen below.

<table><thead><tr class="header"><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>adlm</td><td>Adlam digits</td></tr><tr class="even"><td>ahom</td><td>Ahom digits</td></tr><tr class="odd"><td>arab</td><td>Arabic-Indic digits</td></tr><tr class="even"><td>arabext</td><td>Extended Arabic-Indic digits</td></tr><tr class="odd"><td>armn</td><td>Armenian upper case numerals — algorithmic</td></tr><tr class="even"><td>armnlow</td><td>Armenian lower case numerals — algorithmic</td></tr><tr class="odd"><td>bali</td><td>Balinese digits</td></tr><tr class="even"><td>beng</td><td>Bengali digits</td></tr><tr class="odd"><td>bhks</td><td>Bhaiksuki digits</td></tr><tr class="even"><td>brah</td><td>Brahmi digits</td></tr><tr class="odd"><td>cakm</td><td>Chakma digits</td></tr><tr class="even"><td>cham</td><td>Cham digits</td></tr><tr class="odd"><td>cyrl</td><td>Cyrillic numerals — algorithmic</td></tr><tr class="even"><td>deva</td><td>Devanagari digits</td></tr><tr class="odd"><td>ethi</td><td>Ethiopic numerals — algorithmic</td></tr><tr class="even"><td>finance</td><td>Financial numerals — may be algorithmic</td></tr><tr class="odd"><td>fullwide</td><td>Full width digits</td></tr><tr class="even"><td>geor</td><td>Georgian numerals — algorithmic</td></tr><tr class="odd"><td>gong</td><td>Gunjala Gondi digits</td></tr><tr class="even"><td>gonm</td><td>Masaram Gondi digits</td></tr><tr class="odd"><td>grek</td><td>Greek upper case numerals — algorithmic</td></tr><tr class="even"><td>greklow</td><td>Greek lower case numerals — algorithmic</td></tr><tr class="odd"><td>gujr</td><td>Gujarati digits</td></tr><tr class="even"><td>guru</td><td>Gurmukhi digits</td></tr><tr class="odd"><td>hanidays</td><td>Han-character day-of-month numbering for lunar/other traditional calendars</td></tr><tr class="even"><td>hanidec</td><td>Positional decimal system using Chinese number ideographs as digits</td></tr><tr class="odd"><td>hans</td><td>Simplified Chinese numerals — algorithmic</td></tr><tr class="even"><td>hansfin</td><td>Simplified Chinese financial numerals — algorithmic</td></tr><tr class="odd"><td>hant</td><td>Traditional Chinese numerals — algorithmic</td></tr><tr class="even"><td>hantfin</td><td>Traditional Chinese financial numerals — algorithmic</td></tr><tr class="odd"><td>hebr</td><td>Hebrew numerals — algorithmic</td></tr><tr class="even"><td>hmng</td><td>Pahawh Hmong digits</td></tr><tr class="odd"><td>hmnp</td><td>Nyiakeng Puachue Hmong digits</td></tr><tr class="even"><td>java</td><td>Javanese digits</td></tr><tr class="odd"><td>jpan</td><td>Japanese numerals — algorithmic</td></tr><tr class="even"><td>jpanfin</td><td>Japanese financial numerals — algorithmic</td></tr><tr class="odd"><td>jpanyear</td><td>Japanese first-year Gannen numbering for Japanese calendar</td></tr><tr class="even"><td>kali</td><td>Kayah Li digits</td></tr><tr class="odd"><td>khmr</td><td>Khmer digits</td></tr><tr class="even"><td>knda</td><td>Kannada digits</td></tr><tr class="odd"><td>lana</td><td>Tai Tham Hora (secular) digits</td></tr><tr class="even"><td>lanatham</td><td>Tai Tham (ecclesiastical) digits</td></tr><tr class="odd"><td>laoo</td><td>Lao digits</td></tr><tr class="even"><td>latn</td><td>Latin digits</td></tr><tr class="odd"><td>lepc</td><td>Lepcha digits</td></tr><tr class="even"><td>limb</td><td>Limbu digits</td></tr><tr class="odd"><td>mathbold</td><td>Mathematical bold digits</td></tr><tr class="even"><td>mathdbl</td><td>Mathematical double-struck digits</td></tr><tr class="odd"><td>mathmono</td><td>Mathematical monospace digits</td></tr><tr class="even"><td>mathsanb</td><td>Mathematical sans-serif bold digits</td></tr><tr class="odd"><td>mathsans</td><td>Mathematical sans-serif digits</td></tr><tr class="even"><td>mlym</td><td>Malayalam digits</td></tr><tr class="odd"><td>modi</td><td>Modi digits</td></tr><tr class="even"><td>mong</td><td>Mongolian digits</td></tr><tr class="odd"><td>mroo</td><td>Mro digits</td></tr><tr class="even"><td>mtei</td><td>Meetei Mayek digits</td></tr><tr class="odd"><td>mymr</td><td>Myanmar digits</td></tr><tr class="even"><td>mymrshan</td><td>Myanmar Shan digits</td></tr><tr class="odd"><td>mymrtlng</td><td>Myanmar Tai Laing digits</td></tr><tr class="even"><td>native</td><td>Native digits</td></tr><tr class="odd"><td>newa</td><td>Newa digits</td></tr><tr class="even"><td>nkoo</td><td>N'Ko digits</td></tr><tr class="odd"><td>olck</td><td>Ol Chiki digits</td></tr><tr class="even"><td>orya</td><td>Oriya digits</td></tr><tr class="odd"><td>osma</td><td>Osmanya digits</td></tr><tr class="even"><td>rohg</td><td>Hanifi Rohingya digits</td></tr><tr class="odd"><td>roman</td><td>Roman upper case numerals — algorithmic</td></tr><tr class="even"><td>romanlow</td><td>Roman lowercase numerals — algorithmic</td></tr><tr class="odd"><td>saur</td><td>Saurashtra digits</td></tr><tr class="even"><td>shrd</td><td>Sharada digits</td></tr><tr class="odd"><td>sind</td><td>Khudawadi digits</td></tr><tr class="even"><td>sinh</td><td>Sinhala Lith digits</td></tr><tr class="odd"><td>sora</td><td>Sora_Sompeng digits</td></tr><tr class="even"><td>sund</td><td>Sundanese digits</td></tr><tr class="odd"><td>takr</td><td>Takri digits</td></tr><tr class="even"><td>talu</td><td>New Tai Lue digits</td></tr><tr class="odd"><td>taml</td><td>Tamil numerals — algorithmic</td></tr><tr class="even"><td>tamldec</td><td>Modern Tamil decimal digits</td></tr><tr class="odd"><td>telu</td><td>Telugu digits</td></tr><tr class="even"><td>thai</td><td>Thai digits</td></tr><tr class="odd"><td>tirh</td><td>Tirhuta digits</td></tr><tr class="even"><td>tibt</td><td>Tibetan digits</td></tr><tr class="odd"><td>traditio</td><td>Traditional numerals — may be algorithmic</td></tr><tr class="even"><td>vaii</td><td>Vai digits</td></tr><tr class="odd"><td>wara</td><td>Warang Citi digits</td></tr><tr class="even"><td>wcho</td><td>Wancho digits</td></tr></tbody></table>

## Examples

### Setting the `numberingSystem` value via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), the values that `numberingSystem` represents correspond to the key `nu`. `nu` is considered a locale string "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers by first adding the `-u` key. To set the `numberingSystem` value via the string argument to the [`Locale`](locale) constructor, first add the `-u` extension key. Next, add the `-nu` extension key to indicate that you are adding a value for `numberingSystem`. Finally, add the `numberingSystem` value to the string.

    let numberingSystemViaStr = new Intl.Locale("fr-Latn-FR-u-nu-mong");
    console.log(numberingSystemStr.numberingSystem); // Prints "mong"

### Setting the `numberingSystem` value via the configuration object argument

The [`Intl.Locale`](locale) constructor has an optional configuration object argument, which can be used to pass extension types. Set the `numberingSystem` property of the configuration object to your desired `numberingSystem` value and pass it into the constructor.

    let numberingSystemViaObj= new Intl.Locale("en-Latn-US", {numberingSystem: "latn"});
    console.log(us12hour.numberingSystem); // Prints "latn"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.numberingSystem">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.numberingSystem</span></a></td></tr></tbody></table>

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

`numberingSystem`

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
-   [Details on the standard Unicode numeral systems](https://github.com/unicode-org/cldr/blob/master/common/supplemental/numberingSystems.xml)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem</a>
