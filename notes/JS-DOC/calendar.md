# Intl.Locale.prototype.calendar

The `Intl.Locale.prototype.calendar` property is an accessor property which returns the type of calendar used in the `Locale`.

## Description

The `calendar` property returns the part of the `Locale` that indicates the `Locale`'s calendar era. While most of the world uses the Gregorian calendar, there are several regional calendar eras used around the world. The following table shows all the valid Unicode calendar key strings, along with a description of the calendar era they represent.

### Unicode calendar keys

<table><caption>Unicode calendar keys</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Calendar key (name)</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>buddhist</code></td><td>Thai Buddhist calendar</td></tr><tr class="even"><td><code>chinese</code></td><td>Traditional Chinese calendar</td></tr><tr class="odd"><td><code>coptic</code></td><td>Coptic calendar</td></tr><tr class="even"><td><code>dangi</code></td><td>Traditional Korean calendar</td></tr><tr class="odd"><td><code>ethioaa</code></td><td>Ethiopic calendar, Amete Alem (epoch approx. 5493 B.C.E)</td></tr><tr class="even"><td><code>ethiopic</code></td><td>Ethiopic calendar, Amete Mihret (epoch approx, 8 C.E.)</td></tr><tr class="odd"><td><code>gregory</code></td><td>Gregorian calendar</td></tr><tr class="even"><td><code>hebrew</code></td><td>Traditional Hebrew calendar</td></tr><tr class="odd"><td><code>indian</code></td><td>Indian calendar</td></tr><tr class="even"><td><code>islamic</code></td><td>Islamic calendar</td></tr><tr class="odd"><td><code>islamic-umalqura</code></td><td>Islamic calendar, Umm al-Qura</td></tr><tr class="even"><td><code>islamic-tbla</code></td><td>Islamic calendar, tabular (intercalary years [2,5,7,10,13,16,18,21,24,26,29] - astronomical epoch)</td></tr><tr class="odd"><td><code>islamic-civil</code></td><td>Islamic calendar, tabular (intercalary years [2,5,7,10,13,16,18,21,24,26,29] - civil epoch)</td></tr><tr class="even"><td><code>islamic-rgsa</code></td><td>Islamic calendar, Saudi Arabia sighting</td></tr><tr class="odd"><td><code>iso8601</code></td><td>ISO calendar (Gregorian calendar using the ISO 8601 calendar week rules)</td></tr><tr class="even"><td><code>japanese</code></td><td>Japanese Imperial calendar</td></tr><tr class="odd"><td><code>persian</code></td><td>Persian calendar</td></tr><tr class="even"><td><code>roc</code></td><td>Republic of China calendar</td></tr><tr class="odd"><td><div class="notecard warning"><p><strong>Warning:</strong> The <code>islamicc</code> calendar key has been deprecated. Please use <code>islamic-civil</code>.</p></div><p><code>islamicc</code></p></td><td>Civil (algorithmic) Arabic calendar</td></tr></tbody></table>

## Examples

### Adding a calendar in the Locale string

Calendar eras fall under the category of locale key "extension keys". These keys add additional data about the locale, and are added to locale identifiers by using the `-u` extension. Thus, the calendar era type can be added to the initial locale identifier string that is passed into the [`Intl.Locale`](locale) constructor. To add the calendar type, first add the `-u` extension to the string. Next, add the `-ca` extension to indicate that you are adding a calendar type. Finally, add the calendar era to the string.

    let frBuddhist = new Intl.Locale("fr-FR-u-ca-buddhist");
    console.log(frBuddhist.calendar); // Prints "buddhist"

### Adding a calendar with a configuration object

The [`Intl.Locale`](locale) constructor has an optional configuration object argument, which can contain any of several extension types, including calendars. Set the `calendar` property of the configuration object to your desired calendar era, and then pass it into the constructor.

    let frBuddhist = new Intl.Locale("fr-FR", {calendar: "buddhist"});
    console.log(frBuddhist.calendar); // Prints "buddhist"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.calendar">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.calendar</span></a></td></tr></tbody></table>

`calendar`

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
-   [Unicode Calendar Identifiers](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar</a>
