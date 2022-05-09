# Intl.Collator.prototype.compare()

The `Intl.Collator.prototype.compare()` method compares two strings according to the sort order of this [`Intl/Collator`](../collator) object.

## Syntax

    compare(string1, string2)

### Parameters

`string1`  
`string2`  
The strings to compare against each other.

## Description

The `compare` getter function returns a number indicating how `string1` and `string2` compare to each other according to the sort order of this [`Intl/Collator`](../collator) object: a negative value if `string1` comes before `string2`; a positive value if `string1` comes after `string2`; 0 if they are considered equal.

## Examples

### Using compare for array sort

Use the `compare` getter function for sorting arrays. Note that the function is bound to the collator from which it was obtained, so it can be passed directly to [`Array.prototype.sort()`](../../array/sort).

    var a = ['Offenbach', 'Österreich', 'Odenwald'];
    var collator = new Intl.Collator('de-u-co-phonebk');
    a.sort(collator.compare);
    console.log(a.join(', '));
    // → "Odenwald, Österreich, Offenbach"

### Using compare for array search

Use the `compare` getter function for finding matching strings in arrays:

    var a = ['Congrès', 'congres', 'Assemblée', 'poisson'];
    var collator = new Intl.Collator('fr', { usage: 'search', sensitivity: 'base' });
    var s = 'congres';
    var matches = a.filter(v => collator.compare(v, s) === 0);
    console.log(matches.join(', '));
    // → "Congrès, congres"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma402/#sec-intl.collator.prototype.compare">ECMAScript Internationalization API Specification (ECMAScript Internationalization API) 
<br/>

<span class="small">#sec-intl.collator.prototype.compare</span></a></td></tr></tbody></table>

`compare`

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

## See also

-   [`Intl.Collator`](../collator)
-   [`String.prototype.localeCompare()`](../../string/localecompare)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare</a>
