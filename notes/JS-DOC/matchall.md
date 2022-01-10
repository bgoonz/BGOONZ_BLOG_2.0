# String.prototype.matchAll()

The `matchAll()` method returns an iterator of all results matching a string against a _[regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)_, including [capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).

## Syntax

    matchAll(regexp)

### Parameters

`regexp`  
A regular expression object.

If a non-`RegExp` object `obj` is passed, it is implicitly converted to a [`RegExp`](../regexp) by using `new RegExp(obj)`.

The `RegExp` object must have the `/g` flag, otherwise a `TypeError` will be thrown.

### Return value

An [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (which is not a restartable iterable) of matches.

Each match is an array (with extra properties `index` and `input`; see the return value for [`RegExp.exec`](../regexp/exec)). The match array has the matched text as the first item, and then one item for each parenthetical capture group of the matched text.

## Examples

### Regexp.exec() and matchAll()

Prior to the addition of `matchAll` to JavaScript, it was possible to use calls to [regexp.exec](../regexp/exec) (and regexes with the `/g` flag) in a loop to obtain all the matches:

    const regexp = new RegExp('foo[a-z]*','g');
    const str = 'table football, foosball';
    let match;

    while ((match = regexp.exec(str)) !== null) {
      console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`);
      // expected output: "Found football start=6 end=14."
      // expected output: "Found foosball start=16 end=24."
    }

With `matchAll` available, you can avoid the [`while`](../../statements/while) loop and `exec` with `g`.

Instead, by using `matchAll`, you get an iterator to use with the more convenient [`for...of`](../../statements/for...of), [`array spread`](../../operators/spread_syntax), or [`Array.from()`](../array/from) constructs:

    const regexp = new RegExp('foo[a-z]*','g');
    const str = 'table football, foosball';
    const matches = str.matchAll(regexp);

    for (const match of matches) {
      console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
    }
    // expected output: "Found football start=6 end=14."
    // expected output: "Found foosball start=16 end=24."

    // matches iterator is exhausted after the for..of iteration
    // Call matchAll again to create a new iterator
    Array.from(str.matchAll(regexp), m => m[0]);
    // Array [ "football", "foosball" ]

`matchAll` will throw an exception if the `g` flag is missing.

    const regexp = new RegExp('[a-c]','');
    const str = 'abc';
    str.matchAll(regexp);
    // TypeError

`matchAll` internally makes a clone of the `regexp`—so, unlike [`regexp.exec()`](../regexp/exec), `lastIndex` does not change as the string is scanned.

    const regexp = new RegExp('[a-c]','g');
    regexp.lastIndex = 1;
    const str = 'abc';
    Array.from(str.matchAll(regexp), m => `${regexp.lastIndex}${m[0]}`);
    // Array [ "1 b", "1 c" ]

### Better access to capturing groups (than String.prototype.match())

Another compelling reason for `matchAll` is the improved access to capture groups.

Capture groups are ignored when using [`match()`](match) with the global `/g` flag:

    let regexp = /t(e)(st(\d?))/g;
    let str = 'test1test2';

    str.match(regexp);
    // Array ['test1', 'test2']

Using `matchAll`, you can access capture groups easily:

    let array = [...str.matchAll(regexp)];

    array[0];
    // ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
    array[1];
    // ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.matchall">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.matchall</span></a></td></tr></tbody></table>

`matchAll`

73

79

67

No

60

13

73

73

67

52

13

11.0

## See also

-   [`String.prototype.match()`](match)
-   [Using regular expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
-   [Capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
-   [`RegExp`](../regexp)
-   [`RegExp.prototype.exec()`](../regexp/exec)
-   [`RegExp.prototype.test()`](../regexp/test)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll</a>
