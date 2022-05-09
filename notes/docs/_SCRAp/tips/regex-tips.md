---
title: Regex Tricks
weight: 0
excerpt: Regex Tricks
seo:
    title: 'Regex Tricks'
    description: 'Regular expressions make light work of single-character delimiters which is why its so easy to remove markup from a string'
    robots: []
    extra: []
template: docs
---


Regular expressions make light work of **single-character delimiters**, which is why it's so easy to remove markup from a string:

```
str = str.replace(/(<[\/]?[^>]+>)/g, '');
```

It's the negation in the character class that does the real work:

```
[^>]
```

Which means _"anything except `<`"_. So the expression looks for the starting tag-delimiter and possible slash, then anything except the closing tag-delimiter, and then the delimiter itself. Easy.

However comments are not so simple, because comment delimiters are comprised of **more than one character**. Multi-line comments in CSS and JavaScript, for example, start with `/*` and end with `*/`, but between those two delimiters there could be **any number of unrelated stars**.

I often use multiple stars in comments, to indicate the severity of a bug I've just noticed, for example:

```
/*** this is a bug with 3-star severity ***/
```

But if we tried to parse that with a single negation character, it would fail:

```
str = str.replace(/(\/\*[^\*]+\*\/)/g, '');
```

Yet it's not possible with regular expressions to say: _"anything except \[this sequence of characters\]"_, we can only say: _"anything except \[one of these single characters\]"_.

So here's the regular expression we need instead:

```
str = str.replace(/(\/\*([^*]|(\*+[^*\/]))*\*+\/)/gm, '');
```

The expression handles unrelated characters by **looking at what comes after them** — stars are allowed as long as they're not followed by a slash, until we find one that is, and that's the end of the comment.

So it says: "`/` then `*` (then anything except `*` OR any number of `*` followed by anything except `/`)(and any number of instances of that) then any number of `*` then `/`".

(The syntax looks particular convoluted, because `*` and `/` are both special characters in regular expressions, so the ambiguous literal ones have to be escaped. Also note the `m` flag at the end of the expression, which means **multi-line**, and specifies that the regular expression should search across more than one line of text.)

Using the same principle then, we can adapt the expression to search for any kind of complex delimiters. Here's another one that matches HTML comments:

```
str = str.replace(/(<!\-\-([^\-]|(\-+[^>]))*\-+>)/gm, '');
```

And here's one for `CDATA` sections:

```
str = str.replace(/(<\!\[CDATA\[([^\]]|(\]+[^>]))*\]+>)/gm, '');
```

## 2\. Using Replacement Callbacks

The `replace` function can also be **passed a callback** as its second parameter, and this is invaluable in cases where the replacement you want can't be described in a simple expression. For example:

```js
isocode = isocode.replace(/^([a-z]+)(\-[a-z]+)?$/i, function (match, lang, country) {
    return lang.toLowerCase() + (country ? country.toUpperCase() : '');
});
```

That example normalizes the capitalisation in language codes — so `"EN"` would become `"en"`, while `"en-us"` would become `"en-US"`.

The first argument that's passed to the callback is always the complete match, then each subsequent argument corresponds with the backreferences (i.e. `arguments[1]` is what a string replacement would refer to as `$1`, and so on).

So taking `"en-us"` as the input, we'd get the three arguments:

0.  `"en-us"`
1.  `"en"`
2.  `"-us"`

Then all the function has to do is enforce the appropriate cases, re-combine the parts and return them. Whatever the callback returns is what the replacement itself returns.

But we don't actually have to assign the return value (or return at all), and if we don't, then the original string will be unaffected. This means we can use `replace` as a **general-purpose string processor** — to extract data from a string without changing it.

Here's another example, that combines the multi-line comment expression from the previous section, with a callback that extracts and saves the text of each comment:

```
let comments = [];
str.replace(/(\/\*([^*]|(\*+[^*\/]))*\*+\/)/gm,
  function(match)
  {
    comments.push(match);
  });
```

Since nothing is returned, the original string remains unchanged. Although if we wanted to extract _and_ remove the comments, we could simply return and assign an empty-string:

```js
let comments = [];
str = str.replace(/(\/\*([^*]|(\*+[^*\/]))*\*+\/)/gm, function (match) {
    comments.push(match);
    return '';
});
```

## 3\. Working With Invisible Delimiters

Extracting content is all very well when it uses standard delimiters, but what if you're using **custom delimiters** that only your program knows about? The problem there is that **the string might already contain your delimiter**, literally character for character, and then what do you?

Well, recently I came up with a very cute trick, that not only avoids this problem, it's also as simple to use as the single-character class we saw at the start! The trick is to use **unicode characters that the document can't contain**.

Originally I tried this with _undefined_ characters, and that certainly worked, but it's not safe to assume that any such character will always be undefined (or that the document won't already contain it anyway). Then I discovered that Unicode actually reserves a set of code-points specifically for this kind of thing — so-called [noncharacters](http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Noncharacters 'Mapping of Unicode Characters (wikipedia.org)'), which will never be used to define actual characters. A valid Unicode document is not allowed to contain noncharacters, but a program can use them internally for its own purposes.

I was working on CSS processor, and I needed to remove all the comments before parsing the selectors, so they wouldn't confuse the selector-matching expressions. But they had to be replaced in the source with something that took up the same number of lines, so that the line-numbers would remain accurate. Then later they would have to be added back to the source, for final output.

So first we use a regex callback to extract and save the comments. The callback returns a copy of the match in which all non-whitespace is converted to space, and which is delimited with a noncharacter either side:

```
let comments = [];
csstext = csstext.replace(/(\/\*([^*]|(\*+([^*\/])))*\*+\/)/gm,
  function(match)
  {
    comments.push(match);
    return '\ufddf' + match.replace(/[\S]/gim, ' ') + '\ufddf';
  });
```

That creates an array of comments in the same source-order as the spaces they leave behind, while the spaces themselves take-up as many lines as the original comment.

Then the originals can be restored simply by replacing each delimited space with its corresponding saved comment — and since the delimiters are single characters, we only need a **simple character class** to match each pair:

```
csstext = csstext.replace(/(\ufddf[^\ufddf]+\ufddf)/gim,
  function()
  {
    return comments.shift();
  });
```

How easy is that!
