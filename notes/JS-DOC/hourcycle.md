# Intl.Locale.prototype.hourCycle

The `Intl.Locale.prototype.hourCycle` property is an accessor property that returns the time keeping format convention used by the locale.

## Description

There are 2 main types of time keeping conventions (clocks) used around the world: the 12 hour clock and the 24 hour clock. The `hourCycle` property makes it easier for JavaScript programmers to access the clock type used by a particular locale. Like other additional locale data, hour cycle type is an [extension subtag](https://www.unicode.org/reports/tr35/#u_Extension), which extends the data contained in a locale string. The hour cycle type can have several different values, which are listed in the table below.

### Valid hour cycle types

<table><thead><tr class="header"><th>Hour cycle type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>h12</code></td><td>Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am.</td></tr><tr class="even"><td><code>h23</code></td><td>Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00.</td></tr><tr class="odd"><td><code>h11</code></td><td>Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am.</td></tr><tr class="even"><td><code>h24</code></td><td>Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00.</td></tr></tbody></table>

## Examples

These examples will show you how to add hour cycle data to your [`Locale`](../locale) object.

### Adding an hour cycle via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), the hour cycle is a locale string "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers by using the `-u` extension key. Thus, the hour cycle type can be added to the initial locale identifier string that is passed into the [`Locale`](locale) constructor. To add the hour cycle type, first add the `-u` extension key to the string. Next, add the `-hc` extension key to indicate that you are adding an hour cycle. Finally, add the hour cycle type to the string.

    let fr24hour = new Intl.Locale("fr-FR-u-hc-h23");
    console.log(fr24hour.hourCycle); // Prints "h23"

### Adding an hour cycle via the configuration object argument

The [`Intl.Locale`](locale) constructor has an optional configuration object argument, which can contain any of several extension types, including hour cycle types. Set the `hourCycle` property of the configuration object to your desired hour cycle type, and then pass it into the constructor.

    let us12hour = new Intl.Locale("en-US", {hourCycle: "h12"});
    console.log(us12hour.hourCycle); // Prints "h12"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-Intl.Locale.prototype.hourCycle">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-Intl.Locale.prototype.hourCycle</span></a></td></tr></tbody></table>

`hourCycle`

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
-   [Unicode Hour Cycle extension key spec](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle</a>
