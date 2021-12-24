# Intl.DateTimeFormat() constructor

The `Intl.DateTimeFormat()` constructor creates [`Intl.DateTimeFormat`](../datetimeformat) objects that enable language-sensitive date and time formatting.

## Syntax

    new Intl.DateTimeFormat()
    new Intl.DateTimeFormat(locales)
    new Intl.DateTimeFormat(locales, options)

### Parameters

`locales` <span class="badge inline optional">Optional</span>  
A string with a BCP 47 language tag, or an array of such strings. To use the browser's default locale, pass an empty array. Unicode extension are supported (for example "`en-US-u-ca-buddhist`"). For the general form and interpretation of the `locales` argument, see the [Intl](../../intl#locale_identification_and_negotiation) page. The following Unicode extension keys are allowed:

`nu`  
Numbering system. Possible values include: "`arab`", "`arabext`", "`bali`", "`beng`", "`deva`", "`fullwide`", "`gujr`", "`guru`", "`hanidec`", "`khmr`", "`knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", "`mong`", "`mymr`", "`orya`", "`tamldec`", "`telu`", "`thai`", "`tibt`".

`ca`  
Calendar. Possible values include: "`buddhist`", "`chinese`", "`coptic`", "`ethiopia`", "`ethiopic`", "`gregory`", "`hebrew`", "`indian`", "`islamic`", "`iso8601`", "`japanese`", "`persian`", "`roc`".

`hc`  
Hour cycle. Possible values include: "`h11`", "`h12`", "`h23`", "`h24`".

`options` <span class="badge inline optional">Optional</span>  
An object with some or all of the following properties:

`dateStyle`  
The date formatting style to use when calling `format()`. Possible values include:

-   "`full`"
-   "`long`"
-   "`medium`"
-   "`short`"

**Note:** `dateStyle` can be used with `timeStyle`, but not with other options (e.g. `weekday`, `hour`, `month`, etc.).

`timeStyle`  
The time formatting style to use when calling `format()`. Possible values include:

-   "`full`"
-   "`long`"
-   "`medium`"
-   "`short`"

**Note:** `timeStyle` can be used with `dateStyle`, but not with other options (e.g. `weekday`, `hour`, `month`, etc.).

`calendar`  
Calendar. Possible values include: "`buddhist`", "`chinese`", " `coptic`", "`ethiopia`", "`ethiopic`", "`gregory`", " `hebrew`", "`indian`", "`islamic`", "`iso8601`", " `japanese`", "`persian`", "`roc`".

`dayPeriod`  
The way day periods should be expressed. Possible values include: "`narrow`", "`short`", " `long`".

`numberingSystem`  
Numbering System. Possible values include: "`arab`", "`arabext`", " `bali`", "`beng`", "`deva`", "`fullwide`", " `gujr`", "`guru`", "`hanidec`", "`khmr`", " `knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", " `mong`", "`mymr`", "`orya`", "`tamldec`", " `telu`", "`thai`", "`tibt`".

`localeMatcher`  
The locale matching algorithm to use. Possible values are "`lookup`" and "`best fit`"; the default is "`best fit`". For information about this option, see the [Intl](../../intl#locale_negotiation) page.

`timeZone`  
The time zone to use. The only value implementations must recognize is "`UTC`"; the default is the runtime's default time zone. Implementations may also recognize the time zone names of the [IANA time zone database](https://www.iana.org/time-zones), such as "`Asia/Shanghai`", "`Asia/Kolkata`", "`America/New_York`".

`hour12`  
Whether to use 12-hour time (as opposed to 24-hour time). Possible values are `true` and `false`; the default is locale dependent. This option overrides the `hc` language tag and/or the `hourCycle` option in case both are present.

`hourCycle`  
The hour cycle to use. Possible values are "`h11`", "`h12`", "`h23`", or "`h24`". This option overrides the `hc` language tag, if both are present, and the `hour12` option takes precedence in case both options have been specified.

`formatMatcher`  
The format matching algorithm to use. Possible values are "`basic`" and "`best fit`"; the default is "`best fit`". See the following paragraphs for information about the use of this property.

The following properties describe the date-time components to use in formatted output, and their desired representations. Implementations are required to support at least the following subsets:

-   `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
-   `weekday`, `year`, `month`, `day`
-   `year`, `month`, `day`
-   `year`, `month`
-   `month`, `day`
-   `hour`, `minute`, `second`
-   `hour`, `minute`

Implementations may support other subsets, and requests will be negotiated against all available subset-representation combinations to find the best match. Two algorithms are available for this negotiation and selected by the `formatMatcher` property: A [fully specified "`basic`" algorithm](https://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) and an implementation-dependent "`best fit`" algorithm.

`weekday`  
The representation of the weekday. Possible values are:

-   "`long`" (e.g., `Thursday`)
-   "`short`" (e.g., `Thu`)
-   "`narrow`" (e.g., `T`). Two weekdays may have the same narrow style for some locales (e.g. `Tuesday`'s narrow style is also `T`).

`era`  
The representation of the era. Possible values are:

-   "`long`" (e.g., `Anno Domini`)
-   "`short`" (e.g., `AD`)
-   "`narrow`" (e.g., `A`)

`year`  
The representation of the year. Possible values are:

-   "`numeric`" (e.g., `2012`)
-   "`2-digit`" (e.g., `12`)

`month`  
The representation of the month. Possible values are:

-   "`numeric`" (e.g., `2`)
-   "`2-digit`" (e.g., `02`)
-   "`long`" (e.g., `March`)
-   "`short`" (e.g., `Mar`)
-   "`narrow`" (e.g., `M`). Two months may have the same narrow style for some locales (e.g. `May`'s narrow style is also `M`).

`day`  
The representation of the day. Possible values are:

-   "`numeric`" (e.g., `1`)
-   "`2-digit`" (e.g., `01`)

`hour`  
The representation of the hour. Possible values are "`numeric`", "`2-digit`".

`minute`  
The representation of the minute. Possible values are "`numeric`", "`2-digit`".

`second`  
The representation of the second. Possible values are "`numeric`", "`2-digit`".

`fractionalSecondDigits`  
The number of digits used to represent fractions of a second (any additional digits are truncated). Possible values are:

-   `0` (Fractional part dropped.)
-   `1` (Fractional part represented as 1 digit. For example, 736 is formatted as `7`.)
-   `2` (Fractional part represented as 2 digits. For example, 736 is formatted as `73`.)
-   `3` (Fractional part represented as 3 digits. For example, 736 is formatted as `736`.)

`timeZoneName`  
The representation of the time zone name. Possible values are:

-   "`long`" (e.g., `British Summer Time`)
-   "`short`" (e.g., `GMT+1`)

The default value for each date-time component property is [`undefined`](../../undefined), but if all component properties are [`undefined`](../../undefined), then `year`, `month`, and `day` are assumed to be "`numeric`".

## Examples

### Using DateTimeFormat

In basic use without specifying a locale, `DateTimeFormat` uses the default locale and default options.

    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    // toLocaleString without arguments depends on the implementation,
    // the default locale, and the default time zone
    console.log(new Intl.DateTimeFormat().format(date));
    // → "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)

### Using timeStyle and dateStyle

    let o = new Intl.DateTimeFormat("en" , {
      timeStyle: "short"
    });
    console.log(o.format(Date.now())); // "13:31 AM"

    let o = new Intl.DateTimeFormat("en" , {
      dateStyle: "short"
    });
    console.log(o.format(Date.now())); // "07/07/20"

    let o = new Intl.DateTimeFormat("en" , {
      timeStyle: "medium",
      dateStyle: "short"
    });
    console.log(o.format(Date.now())); // "07/07/20, 13:31:55 AM"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl-datetimeformat-constructor">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl-datetimeformat-constructor</span></a></td></tr></tbody></table>

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

`dateStyle`

76

79

79

No

63

14.1

76

76

79

54

14.5

No

`fractionalSecondDigits`

84

84

84

No

70

No

84

84

84

60

No

No

`hourCycle`

73

18

58

No

60

13

73

73

58

52

13

No

`iana_time_zone_names`

24

14

52

No

15

10

37

25

56

14

10

1.5

`timeStyle`

76

79

79

No

63

14.1

76

76

79

54

14.5

No

## See also

-   [`Intl.DateTimeFormat`](../datetimeformat)
-   [`Intl`](../../intl)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat</a>
