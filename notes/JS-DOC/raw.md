# String.raw()

The static `String.raw()` method is a tag function of [template literals](../../template_literals). This is _similar_ to the `r` prefix in Python, or the `@` prefix in C\# for string literals. (But it is not _identical_; see explanations in [this issue](https://bugs.chromium.org/p/v8/issues/detail?id=5016).) It's used to get the raw string form of template literals, that is, substitutions (e.g. `${foo}`) are processed, but escapes (e.g. `\n`) are not.

## Syntax

    String.raw(callSite, ...substitutions)

    String.raw`templateString`

### Parameters

`callSite`  
Well-formed template call site object, like `{ raw: ['foo', 'bar', 'baz'] }`.

`...substitutions`  
Contains substitution values.

`templateString`  
A [template literal](../../template_literals), optionally with substitutions (`${...}`).

### Return value

The raw string form of a given template literal.

### Exceptions

[`TypeError`](../typeerror)  
A [`TypeError`](../typeerror) is thrown if the first argument is not a well-formed object.

## Description

In most cases, `String.raw()` is used with template literal. The first syntax mentioned above is only rarely used, because the JavaScript engine will call this with proper arguments for you, (just like with other [tag functions](../../template_literals#tagged_template_literals)).

`String.raw()` is the only built-in tag function of template literals. It works just like the default template function and performs concatenation. You can even re-implement it with normal JavaScript code.

## Examples

### Using String.raw()

    String.raw`Hi\n${2+3}!`;
    // 'Hi\n5!', the character after 'Hi'
    // is not a newline character,
    // '\' and 'n' are two characters.

    String.raw`Hi\u000A!`;
    // 'Hi\u000A!', same here, this time we will get the
    //  \, u, 0, 0, 0, A, 6 characters.
    // All kinds of escape characters will be ineffective
    // and backslashes will be present in the output string.
    // You can confirm this by checking the .length property
    // of the string.

    let name = 'Bob';
    String.raw`Hi\n${name}!`;
    // 'Hi\nBob!', substitutions are processed.

    // Normally you would not call String.raw() as a function,
    // but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
    String.raw({
      raw: ['foo', 'bar', 'baz']
    }, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
    // Notice the first argument is an object with a 'raw' property,
    // whose value is an iterable representing the separated strings
    // in the template literal.
    // The rest of the arguments are the substitutions.

    // The first argument's 'raw' value can be any iterable, even a string!
    // For example, 'test' is treated as ['t', 'e', 's', 't'].
    // The following is equivalent to
    // `t${0}e${1}s${2}t`:
    String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.raw">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.raw</span></a></td></tr></tbody></table>

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

`raw`

41

12

34

No

No

10

No

41

34

No

10

4.0

## See also

-   [Template literals](../../template_literals)
-   [`String`](../string)
-   [Lexical grammar](../../lexical_grammar)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw</a>
