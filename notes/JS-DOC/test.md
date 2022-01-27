# RegExp.prototype.test()

The `test()` method executes a search for a match between a regular expression and a specified string. Returns `true` or `false`.

## Syntax

    test(str)

### Parameters

`str`  
The string against which to match the regular expression.

### Returns

`true` if there is a match between the regular expression and the string `str`. Otherwise, `false`.

## Description

Use `test()` whenever you want to know whether a pattern is found in a string. `test()` returns a boolean, unlike the [`String.prototype.search()`](../string/search) method (which returns the index of a match, or `-1` if not found).

To get more information (but with slower execution), use the [`exec()`](exec) method. (This is similar to the [`String.prototype.match()`](../string/match) method.)

As with `exec()` (or in combination with it), `test()` called multiple times on the same global regular expression instance will advance past the previous match.

## Examples

### Using test()

Simple example that tests if "`hello`" is contained at the very beginning of a string, returning a boolean result.

    const str = 'hello world!';
    const result = /^hello/.test(str);

    console.log(result); // true

The following example logs a message which depends on the success of the test:

    function testInput(re, str) {
      let midstring;
      if (re.test(str)) {
        midstring = 'contains';
      } else {
        midstring = 'does not contain';
      }
      console.log(`${str}${midstring}${re.source}`);
    }

### Using test() on a regex with the "global" flag

When a regex has the [global flag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2) set, `test()` will advance the [`lastIndex`](lastindex) of the regex. ([`RegExp.prototype.exec()`](exec) also advances the `lastIndex` property.)

Further calls to `test(str)` will resume searching `str` starting from `lastIndex`. The `lastIndex` property will continue to increase each time `test()` returns `true`.

**Note:** As long as `test()` returns `true`, `lastIndex` will _not_ reset—even when testing a different string!

When `test()` returns `false`, the calling regex's `lastIndex` property will reset to `0`.

The following example demonstrates this behavior:

    const regex = /foo/g; // the "global" flag is set

    // regex.lastIndex is at 0
    regex.test('foo')     // true

    // regex.lastIndex is now at 3
    regex.test('foo')     // false

    // regex.lastIndex is at 0
    regex.test('barfoo')  // true

    // regex.lastIndex is at 6
    regex.test('foobar')  //false

    // regex.lastIndex is at 0
    // (...and so on)

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-regexp.prototype.test">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-regexp.prototype.test</span></a></td></tr></tbody></table>

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

`test`

1

12

1

4

5

1

1

18

4

10.1

1

1.0

## See also

-   [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
-   [`RegExp`](../regexp)
-   [`RegExp.prototype`](../regexp)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test</a>
