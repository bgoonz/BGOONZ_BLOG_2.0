# String.prototype.normalize()

The `normalize()` method returns the Unicode Normalization Form of the string.

## Syntax

    normalize()
    normalize(form)

### Parameters

`form` <span class="badge inline optional">Optional</span>  
One of `"NFC"`, `"NFD"`, `"NFKC"`, or `"NFKD"`, specifying the Unicode Normalization Form. If omitted or [`undefined`](../undefined), `"NFC"` is used.

These values have the following meanings:

`"NFC"`  
Canonical Decomposition, followed by Canonical Composition.

`"NFD"`  
Canonical Decomposition.

`"NFKC"`  
Compatibility Decomposition, followed by Canonical Composition.

`"NFKD"`  
Compatibility Decomposition.

### Return value

A string containing the Unicode Normalization Form of the given string.

### Errors thrown

[`RangeError`](../rangeerror)  
A [`RangeError`](../rangeerror) is thrown if `form` isn't one of the values specified above.

## Description

Unicode assigns a unique numerical value, called a _code point_, to each character. For example, the code point for `"A"` is given as U+0041. However, sometimes more than one code point, or sequence of code points, can represent the same abstract character — the character `"ñ"` for example can be represented by either of:

-   The single code point U+00F1.
-   The code point for `"n"` (U+006E) followed by the code point for the combining tilde (U+0303).

<!-- -->

    let string1 = '\u00F1';
    let string2 = '\u006E\u0303';

    console.log(string1);  //  ñ
    console.log(string2);  //  ñ

However, since the code points are different, string comparison will not treat them as equal. And since the number of code points in each version is different, they even have different lengths.

    let string1 = '\u00F1';            // ñ
    let string2 = '\u006E\u0303';      // ñ

    console.log(string1 === string2); // false
    console.log(string1.length);      // 1
    console.log(string2.length);      // 2

The `normalize()` method helps solve this problem by converting a string into a normalized form common for all sequences of code points that represent the same characters. There are two main normalization forms, one based on **canonical equivalence** and the other based on **compatibility**.

### Canonical equivalence normalization

In Unicode, two sequences of code points have canonical equivalence if they represent the same abstract characters, and should always have the same visual appearance and behavior (for example, they should always be sorted in the same way).

You can use `normalize()` using the `"NFD"` or `"NFC"` arguments to produce a form of the string that will be the same for all canonically equivalent strings. In the example below we normalize two representations of the character `"ñ"`:

    let string1 = '\u00F1';           // ñ
    let string2 = '\u006E\u0303';     // ñ

    string1 = string1.normalize('NFD');
    string2 = string2.normalize('NFD');

    console.log(string1 === string2); // true
    console.log(string1.length);      // 2
    console.log(string2.length);      // 2

#### Composed and decomposed forms

Note that the length of the normalized form under `"NFD"` is `2`. That's because `"NFD"` gives you the **decomposed** version of the canonical form, in which single code points are split into multiple combining ones. The decomposed canonical form for `"ñ"` is `"\u006E\u0303"`.

You can specify `"NFC"` to get the **composed** canonical form, in which multiple code points are replaced with single code points where possible. The composed canonical form for `"ñ"` is `"\u00F1"`:

    let string1 = '\u00F1';                           // ñ
    let string2 = '\u006E\u0303';                     // ñ

    string1 = string1.normalize('NFC');
    string2 = string2.normalize('NFC');

    console.log(string1 === string2);                 // true
    console.log(string1.length);                      // 1
    console.log(string2.length);                      // 1
    console.log(string2.codePointAt(0).toString(16)); // f1

### Compatibility normalization

In Unicode, two sequences of code points are compatible if they represent the same abstract characters, and should be treated alike in some — but not necessarily all — applications.

All canonically equivalent sequences are also compatible, but not vice versa.

For example:

-   the code point U+FB00 represents the [ligature](https://developer.mozilla.org/en-US/docs/Glossary/Ligature) `"ﬀ"`. It is compatible with two consecutive U+0066 code points (`"ff"`).
-   the code point U+24B9 represents the symbol `"Ⓓ"`. It is compatible with the U+0044 code point (`"D"`).

In some respects (such as sorting) they should be treated as equivalent—and in some (such as visual appearance) they should not, so they are not canonically equivalent.

You can use `normalize()` using the `"NFKD"` or `"NFKC"` arguments to produce a form of the string that will be the same for all compatible strings:

    let string1 = '\uFB00';
    let string2 = '\u0066\u0066';

    console.log(string1);             // ﬀ
    console.log(string2);             // ff
    console.log(string1 === string2); // false
    console.log(string1.length);      // 1
    console.log(string2.length);      // 2

    string1 = string1.normalize('NFKD');
    string2 = string2.normalize('NFKD');

    console.log(string1);             // ff <- visual appearance changed
    console.log(string2);             // ff
    console.log(string1 === string2); // true
    console.log(string1.length);      // 2
    console.log(string2.length);      // 2

When applying compatibility normalization it's important to consider what you intend to do with the strings, since the normalized form may not be appropriate for all applications. In the example above the normalization is appropriate for search, because it enables a user to find the string by searching for `"f"`. But it may not be appropriate for display, because the visual representation is different.

As with canonical normalization, you can ask for decomposed or composed compatible forms by passing `"NFKD"` or `"NFKC"`, respectively.

## Examples

### Using `normalize()`

    // Initial string

    // U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
    // U+0323: COMBINING DOT BELOW
    let str = '\u1E9B\u0323';

    // Canonically-composed form (NFC)

    // U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
    // U+0323: COMBINING DOT BELOW
    str.normalize('NFC'); // '\u1E9B\u0323'
    str.normalize();      // same as above

    // Canonically-decomposed form (NFD)

    // U+017F: LATIN SMALL LETTER LONG S
    // U+0323: COMBINING DOT BELOW
    // U+0307: COMBINING DOT ABOVE
    str.normalize('NFD'); // '\u017F\u0323\u0307'

    // Compatibly-composed (NFKC)

    // U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
    str.normalize('NFKC'); // '\u1E69'

    // Compatibly-decomposed (NFKD)

    // U+0073: LATIN SMALL LETTER S
    // U+0323: COMBINING DOT BELOW
    // U+0307: COMBINING DOT ABOVE
    str.normalize('NFKD'); // '\u0073\u0323\u0307'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.normalize">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.normalize</span></a></td></tr></tbody></table>

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

`normalize`

34

12

31

No

21

10

No

34

31

21

10

2.0

## See also

-   [Unicode Standard Annex \#15, Unicode Normalization Forms](https://www.unicode.org/reports/tr15/)
-   [Unicode equivalence](https://en.wikipedia.org/wiki/Unicode_equivalence)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize</a>
