# Intl.Collator() constructor

The `Intl.Collator()` constructor creates [`Intl.Collator`](../collator) objects that enable language-sensitive string comparison.

## Syntax

    new Intl.Collator()
    new Intl.Collator(locales)
    new Intl.Collator(locales, options)

### Parameters

`locales` <span class="badge inline optional">Optional</span>  
Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the [Intl page](../../intl#locale_identification_and_negotiation).

The following Unicode extension keys are allowed:

**Note:** These keys can usually also be set with `options` (as listed below). When both are set, the `options` property takes precedence.

`co`  
Variant collations for certain locales. Possible values include: "`big5han`", "`dict`", "`direct`", "`ducet`", "`gb2312`", "`phonebk`", "`phonetic`", "`pinyin`", "`reformed`", "`searchjl`", "`stroke`", "`trad`", "`unihan`". This option can be also be set through the `options` property "`collation`".

`kn`  
Whether numeric collation should be used, such that "1" &lt; "2" &lt; "10". Possible values are "`true`" and "`false`". This option can be also be set through the `options` property "`numeric`".

`kf`  
Whether upper case or lower case should sort first. Possible values are "`upper`", "`lower`", or "`false`" (use the locale's default). This option can be also be set through the `options` property "`caseFirst`".

`options` <span class="badge inline optional">Optional</span>  
An object with some or all of the following properties:

`localeMatcher`  
The locale matching algorithm to use. Possible values are "`lookup`" and "`best fit`"; the default is "`best fit`". For information about this option, see the [Intl](../../intl#locale_negotiation) page.

`usage`  
Whether the comparison is for sorting or for searching for matching strings. Possible values are "`sort`" and "`search`"; the default is "`sort`".

`sensitivity`  
Which differences in the strings should lead to non-zero result values. Possible values are:

-   "`base`": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
-   "`accent`": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.
-   "`case`": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
-   "`variant`": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.

The default is "`variant`" for usage "`sort`"; it's locale dependent for usage "`search`".

`ignorePunctuation`  
Whether punctuation should be ignored. Possible values are `true` and `false`; the default is `false`.

`numeric`  
Whether numeric collation should be used, such that "1" &lt; "2" &lt; "10". Possible values are `true` and `false`; the default is `false`.

**Note:** This option can also be set through the `kn` Unicode extension key; if both are provided, this `options` property takes precedence.

`caseFirst`  
Whether upper case or lower case should sort first. Possible values are "`upper`", "`lower`", or "`false`" (use the locale's default). This option can be set through an `options` property or through a Unicode extension key; if both are provided, the `options` property takes precedence.

**Note:** This option can also be set through the `kf` Unicode extension key; if both are provided, this `options` property takes precedence.

`collation`  
Variant collations for certain locales. Possible values include: "`big5han`", "`dict`", "`direct`", "`ducet`", "`gb2312`", "`phonebk`" (only supported in German), "`phonetic`", "`pinyin`", "`reformed`", "`searchjl`", "`stroke`", "`trad`", "`unihan`".

**Note:** This option can also be set through the `co` Unicode extension key; if both are provided, this `options` property takes precedence.

## Examples

### Using Collator

The following example demonstrates the different potential results for a string occurring before, after, or at the same level as another:

    console.log(new Intl.Collator().compare('a', 'c')); // → a negative value
    console.log(new Intl.Collator().compare('c', 'a')); // → a positive value
    console.log(new Intl.Collator().compare('a', 'a')); // → 0

Note that the results shown in the code above can vary between browsers and browser versions. This is because the values are implementation-specific. That is, the specification requires only that the before and after values are negative and positive.

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-the-intl-collator-constructor">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-the-intl-collator-constructor</span></a></td></tr></tbody></table>

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

`caseFirst`

24

18

55

No

15

11

4.4

25

56

14

11

1.5

`collation`

87

87

85

No

73

No

87

87

85

No

No

No

## See also

-   [`Intl.Collator`](../collator)
-   [`Intl`](../../intl)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator</a>
