# Intl.DisplayNames

The `Intl.DisplayNames` object enables the consistent translation of language, region and script display names.

## Constructor

[`Intl.DisplayNames()`](displaynames/displaynames)  
Creates a new `Intl.DisplayNames` object.

## Static methods

[`Intl.DisplayNames.supportedLocalesOf()`](displaynames/supportedlocalesof)  
Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

[`Intl.DisplayNames.prototype.of()`](displaynames/of)  
This method receives a `code` and returns a string based on the locale and options provided when instantiating `Intl.DisplayNames`.

[`Intl.DisplayNames.prototype.resolvedOptions()`](displaynames/resolvedoptions)  
Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.

## Examples

### Region Code Display Names

To create an `Intl.DisplayNames` for a locale and get the display name for a region code.

    // Get display names of region in English
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    regionNames.of('419'); // "Latin America"
    regionNames.of('BZ');  // "Belize"
    regionNames.of('US');  // "United States"
    regionNames.of('BA');  // "Bosnia & Herzegovina"
    regionNames.of('MM');  // "Myanmar (Burma)"

    // Get display names of region in Traditional Chinese
    regionNames = new Intl.DisplayNames(['zh-Hant'], {type: 'region'});
    regionNames.of('419'; // "拉丁美洲"
    regionNames.of('BZ'); // "貝里斯"
    regionNames.of('US'); // "美國"
    regionNames.of('BA'); // "波士尼亞與赫塞哥維納"
    regionNames.of('MM'); // "緬甸"

### Language Display Names

To create an `Intl.DisplayNames` for a locale and get the display name for a language-script-region sequence.

    // Get display names of language in English
    let languageNames = new Intl.DisplayNames(['en'], {type: 'language'});
    languageNames.of('fr');      // "French"
    languageNames.of('de');      // "German"
    languageNames.of('fr-CA');   // "Canadian French"
    languageNames.of('zh-Hant'); // "Traditional Chinese"
    languageNames.of('en-US');   // "American English"
    languageNames.of('zh-TW');   // "Chinese (Taiwan)"]

    // Get display names of language in Traditional Chinese
    languageNames = new Intl.DisplayNames(['zh-Hant'], {type: 'language'});
    languageNames.of('fr'); // "法文"
    languageNames.of('zh'); // "中文"
    languageNames.of('de'); // "德文"

### Script Code Display Names

To create an `Intl.DisplayNames` for a locale and get the display name for a script code.

    // Get display names of script in English
    let scriptNames = new Intl.DisplayNames(['en'], {type: 'script'});
    // Get script names
    scriptNames.of('Latn'); // "Latin"
    scriptNames.of('Arab'); // "Arabic"
    scriptNames.of('Kana'); // "Katakana"

    // Get display names of script in Traditional Chinese
    scriptNames = new Intl.DisplayNames(['zh-Hant'], {type: 'script'});
    scriptNames.of('Latn'); // "拉丁文"
    scriptNames.of('Arab'); // "阿拉伯文"
    scriptNames.of('Kana'); // "片假名"

### Currency Code Display Names

To create an `Intl.DisplayNames` for a locale and get the display name for currency code.

    // Get display names of currency code in English
    let currencyNames = new Intl.DisplayNames(['en'], {type: 'currency'});
    // Get currency names
    currencyNames.of('USD'); // "US Dollar"
    currencyNames.of('EUR'); // "Euro"
    currencyNames.of('TWD'); // "New Taiwan Dollar"
    currencyNames.of('CNY'); // "Chinese Yuan"

    // Get display names of currency code in Traditional Chinese
    currencyNames = new Intl.DisplayNames(['zh-Hant'], {type: 'currency'});
    currencyNames.of('USD'); // "美元"
    currencyNames.of('EUR'); // "歐元"
    currencyNames.of('TWD'); // "新台幣"
    currencyNames.of('CNY'); // "人民幣"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#intl-displaynames-objects">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#intl-displaynames-objects</span></a></td></tr></tbody></table>

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

`of`

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

`resolvedOptions`

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

`supportedLocalesOf`

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

## See also

-   [`Intl`](../intl)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames</a>
