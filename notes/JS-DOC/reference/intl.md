# Intl

The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The `Intl` object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.

## Constructor properties

[`Intl.Collator()`](intl/collator/collator)  
Constructor for collators, which are objects that enable language-sensitive string comparison.

[`Intl.DateTimeFormat()`](intl/datetimeformat/datetimeformat)  
Constructor for objects that enable language-sensitive date and time formatting.

[`Intl.DisplayNames()`](intl/displaynames/displaynames)  
Constructor for objects that enable the consistent translation of language, region and script display names.

[`Intl.ListFormat()`](intl/listformat/listformat)  
Constructor for objects that enable language-sensitive list formatting.

[`Intl.Locale()`](intl/locale/locale)  
Constructor for objects that represents a Unicode locale identifier.

[`Intl.NumberFormat()`](intl/numberformat/numberformat)  
Constructor for objects that enable language-sensitive number formatting.

[`Intl.PluralRules()`](intl/pluralrules/pluralrules)  
Constructor for objects that enable plural-sensitive formatting and language-specific rules for plurals.

[`Intl.RelativeTimeFormat()`](intl/relativetimeformat/relativetimeformat)  
Constructor for objects that enable language-sensitive relative time formatting.

## Static methods

[`Intl.getCanonicalLocales()`](intl/getcanonicallocales)  
Returns canonical locale names.

## Locale identification and negotiation

The internationalization constructors as well as several language sensitive methods of other constructors (listed under [See also](#see_also)) use a common pattern for identifying locales and determining the one they will actually use: they all accept `locales` and `options` arguments, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the `options.localeMatcher` property.

### locales argument

The `locales` argument is used to determine the locale used in a given operation. The JavaScript implementation examines `locales`, and then computes a locale it understands that comes closest to satisfying the expressed preference. `locales` may be:

-   `undefined` (or omitted): The implementation's default locale will be used.
-   A locale: A locale identifier or an `Intl.Locale` object that wraps a locale identifier.
-   A list of locales: Any other value, that will be converted into an object and then treated as an array of locales.

In the latter two cases, the actual locale used is the best-supported locale determined by [locale negotiation](#locale_negotiation).

A locale identifier is a string that consists of:

1.  a language subtag,
2.  (optionally) a script subtag,
3.  (optionally) a region (or country) subtag,
4.  (optionally) one or more variant subtags (all of which must be unique),
5.  (optionally) one or more BCP 47 extension sequences, and
6.  (optionally) a private-use extension sequence

...with all present subtags and sequences separated by hyphens. Locale identifiers are case-insensitive ASCII. However, it's conventional to use title case (first letter capitalized, successive letters lower case) for script subtags, upper case for region subtags, and lower case for everything else. For example:

-   "`hi`": Hindi (language)
-   "`de-AT`": German (language) as used in Austria (region)
-   "`zh-Hans-CN`": Chinese (language) written in simplified characters (script) as used in China (region)
-   "`en-emodeng`": English (language) in the "Early modern English" dialect (variant)

Subtags identifying languages, scripts, regions (including countries), and (rarely used) variants are registered in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry). This registry is periodically updated over time, and implementations may not always be up to date, so don't rely too much on subtags being universally supported.

BCP 47 extension sequences consist of a single digit or letter (other than `"x"`) and one or more two- to eight-letter or digit subtags separated by hyphens. Only one sequence is permitted for each digit or letter: "`de-a-foo-a-foo`" is invalid. BCP 47 extension subtags are defined in the [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/master/common/bcp47). Currently only two extensions have defined semantics:

-   The `"u"` (Unicode) extension can be used to request additional customization of [`Intl/Collator`](intl/collator), [`Intl/NumberFormat`](intl/numberformat), or [`Intl/DateTimeFormat`](intl/datetimeformat) objects. Examples:
    -   "`de-DE-u-co-phonebk`": Use the phonebook variant of the German sort order, which interprets umlauted vowels as corresponding character pairs: ä → ae, ö → oe, ü → ue.
    -   "`th-TH-u-nu-thai`": Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in number formatting.
    -   "`ja-JP-u-ca-japanese`": Use the Japanese calendar in date and time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成 25.
    -   "`en-GB-u-ca-islamic`": use British English with the Islamic (Hijri) calendar, where the Gregorian date 14 October, 2017 is the Hijri date 24 Muharram, 1439.
-   The `"t"` (transformed) extension indicates transformed content: for example, text that was translated from another locale. No `Intl` functionality currently considers the `"t"` extension. However, this extension sometimes contains a nested locale (with no extensions): for example, the transformed extension in "`de-t-en`" contains the locale identifier for English. If a nested locale is present, it must be a valid locale identifier. For example, because "`en-emodeng-emodeng`" is invalid (because it contains a duplicate `emodeng` variant subtag), "`de-t-en-emodeng-emodeng`" is also invalid.

Finally, a private-use extension sequence using the letter `"x"` may appear, followed by one or more one- to eight-letter or digit subtags separated by hyphens. This allows applications to encode information for their own private use, that will be ignored by all `Intl` operations.

### Locale negotiation

The list of locales specified by the `locales` argument, after Unicode extensions have been removed from them, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. Two matching algorithms exist: the "`lookup`" matcher follows the Lookup algorithm specified in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4); the "`best fit`" matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument (see below).

If the selected locale identifier had a Unicode extension sequence, that extension is now used to customize the constructed object or the behavior of the function. Each constructor or function supports only a subset of the keys defined for the Unicode extension, and the supported values often depend on the locale identifier. For example, the "`co`" key (collation) is only supported by [`Intl/Collator`](intl/collator), and its "`phonebk`" value is only supported for German.

### options argument

The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.

One property is supported by all language sensitive constructors and functions: The `localeMatcher` property, whose value must be a string "`lookup`" or "`best fit`" and which selects one of the locale matching algorithms described above.

## Examples

### Formatting dates and numbers

You can use `Intl` to format dates and numbers in a form that's conventional for a specific language and region:

    const count = 26254.39;
    const date = new Date("2012-05-24");

    function log(locale) {
      console.log(
        `${new Intl.DateTimeFormat(locale).format(date)}${new Intl.NumberFormat(locale).format(count)}`
      );
    }

    log("en-US");
    // expected output: 5/24/2012 26,254.39

    log("de-DE");
    // expected output: 24.5.2012 26.254,39

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#intl-object">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#intl-object</span></a></td></tr></tbody></table>

`Collator`

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

`DateTimeFormat`

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

`DisplayNames`

81

81

86

No

68

14.1

81

81

86

58

14.5

No

`Intl`

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

`@@toStringTag`

86

86

83

No

72

14

86

86

83

No

14

No

`ListFormat`

72

79

78

No

60

14.1

72

72

79

51

14.5

No

`Locale`

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

`NumberFormat`

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

`RelativeTimeFormat`

71

79

65

No

58

14

71

71

65

50

14

10.0

## See also

-   Introduction: [The ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
-   Constructors
    -   [`Intl.Collator`](intl/collator)
    -   [`Intl.DateTimeFormat`](intl/datetimeformat)
    -   [`Intl.ListFormat`](intl/listformat)
    -   [`Intl.NumberFormat`](intl/numberformat)
    -   [`Intl.PluralRules`](intl/pluralrules)
    -   [`Intl.RelativeTimeFormat`](intl/relativetimeformat)
    -   [`Intl.Locale`](intl/locale)
-   Methods
    -   [`String.prototype.localeCompare()`](string/localecompare)
    -   [`Number.prototype.toLocaleString()`](number/tolocalestring)
    -   [`Date.prototype.toLocaleString()`](date/tolocalestring)
    -   [`Date.prototype.toLocaleDateString()`](date/tolocaledatestring)
    -   [`Date.prototype.toLocaleTimeString()`](date/tolocaletimestring)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl</a>
