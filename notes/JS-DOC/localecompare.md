# String.prototype.localeCompare()

The `localeCompare()` method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

The new `locales` and `options` arguments let applications specify the language whose sort order should be used and customize the behavior of the function. In older implementations, which ignore the `locales` and `options` arguments, the locale and sort order used are entirely implementation-dependent.

## Syntax

    localeCompare(compareString)
    localeCompare(compareString, locales)
    localeCompare(compareString, locales, options)

### Parameters

`compareString`  
The string against which the `referenceStr` is compared.

`locales` and `options`  
These arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used. In implementations which ignore the `locales` and `options` arguments, the locale used and the form of the string returned are entirely implementation-dependent.

See the [`Intl.Collator()` constructor](../intl/collator/collator) for details on these parameters and how to use them.

### Return value

A **negative** number if `referenceStr` occurs before `compareString`; **positive** if the `referenceStr` occurs after `compareString`; `0` if they are equivalent.

## Description

Returns an integer indicating whether the `referenceStr` comes before, after or is equivalent to the `compareString`.

-   Negative when the `referenceStr` occurs before `compareString`
-   Positive when the `referenceStr` occurs after `compareString`
-   Returns `0` if they are equivalent

**Warning:** Do not rely on exact return values of `-1` or `1`!

Negative and positive integer results vary between browsers (as well as between browser versions) because the W3C specification only mandates negative and positive values. Some browsers may return `-2` or `2`, or even some other negative or positive value.

## Performance

When comparing large numbers of strings, such as in sorting large arrays, it is better to create an [`Intl.Collator`](../intl/collator) object and use the function provided by its [`compare`](../intl/collator/compare) property.

## Examples

### Using `localeCompare()`

    // The letter "a" is before "c" yielding a negative value
    'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

    // Alphabetically the word "check" comes after "against" yielding a positive value
    'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

    // "a" and "a" are equivalent yielding a neutral value of zero
    'a'.localeCompare('a'); // 0

### Sort an array

`localeCompare()` enables case-insensitive sorting for an array.

    let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
    items.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
    // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

### Check browser support for extended arguments

The `locales` and `options` arguments are not supported in all browsers yet.

To check whether an implementation supports them, use the `"i"` argument (a requirement that illegal language tags are rejected) and look for a [`RangeError`](../rangeerror) exception:

    function localeCompareSupportsLocales() {
      try {
        'foo'.localeCompare('bar', 'i');
      } catch (e) {
        return e.name === 'RangeError';
      }
      return false;
    }

### Using `locales`

The results provided by `localeCompare()` vary between languages. In order to get the sort order of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

    console.log('ä'.localeCompare('z', 'de')); // a negative value: in German, ä sorts before z
    console.log('ä'.localeCompare('z', 'sv')); // a positive value: in Swedish, ä sorts after z

### Using `options`

The results provided by `localeCompare()` can be customized using the `options` argument:

    // in German, ä has a as the base letter
    console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0

    // in Swedish, ä and a are separate base letters
    console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // a positive value

### Numeric sorting

    // by default, "2" > "10"
    console.log("2".localeCompare("10")); // 1

    // numeric using options:
    console.log("2".localeCompare("10", undefined, {numeric: true})); // -1

    // numeric using locales tag:
    console.log("2".localeCompare("10", "en-u-kn-true")); // -1

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.localecompare">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.localecompare</span></a></td></tr><tr class="even"><td><a href="https://tc39.es/ecma402/#sup-String.prototype.localeCompare">ECMAScript Internationalization API Specification (ECMAScript Internationalization API)
<br/>

<span class="small">#sup-String.prototype.localeCompare</span></a></td></tr></tbody></table>

`localeCompare`

1

12

1

5.5

7

3

1

18

4

10.1

1

1.0

`locales`

24

12

29

11

15

10

No

26

56

No

10

1.5

`options`

24

12

29

11

15

10

No

26

56

No

10

1.5

## See also

-   [`Intl.Collator`](../intl/collator)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare</a>
