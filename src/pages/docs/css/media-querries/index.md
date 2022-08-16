---
title: CSS Introduction
excerpt: CSS is among the core languages of the open web
template: docs
---
---

<!--StartFragment-->

# CSS

CSS is among the core languages of the **open web** and is standardized across Web browsers according to [W3C specifications](https://w3.org/Style/CSS/#specs). Previously, development of various parts of CSS specification was done synchronously, which allowed versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, CSS3. However, CSS4 has never become an official version.

From CSS3, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to [develop and release recommendations separately per module](https://www.w3.org/Style/CSS/current-work). Instead of versioning the CSS specification, W3C now periodically takes a snapshot of [the latest stable state of the CSS specification](https://www.w3.org/TR/css/).

## [Copy](https://webdevhub.us/docs/css/#key_resources)[Key resources](https://developer.mozilla.org/en-US/docs/Web/CSS#key_resources "Permalink to Key resources")

CSS Introduction

If you're new to web development, be sure to read our [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) article to learn what CSS is and how to use it.

[CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. This module provides a gentle beginning to your path towards CSS mastery with the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.

[CSS building blocks](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks)

This module carries on where [CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) left off — now you've gained familiarity with the language and its syntax, and got some basic experience with using it, it's time to dive a bit deeper. This module looks at the cascade and inheritance, all the selector types we have available, units, sizing, styling backgrounds and borders, debugging, and lots more.

The aim here is to provide you with a toolkit for writing competent CSS and help you understand all the essential theory, before moving on to more specific disciplines like [text styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text) and [CSS layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout).

[Styling text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)

With the basics of the CSS language covered, the next CSS topic for you to concentrate on is styling text — one of the most common things you'll do with CSS. Here we look at text styling fundamentals, including setting font, boldness, italics, line and letter spacing, drop shadows, and other text features. We round off the module by looking at applying custom fonts to your page, and styling lists and links.

[CSS layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

At this point we've already looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to place your boxes in the right place in relation to the viewport, and to each other. We have covered the necessary prerequisites so we can now dive deep into CSS layout, looking at different display settings, modern layout tools like flexbox, CSS grid, and positioning, and some of the legacy techniques you might still want to know about.

- The **property** which is an identifier, that is a human-readable *name*, that defines which feature is considered.
- The **value** which describe how the feature must be handled by the engine. Each property has a set of valid values, defined by a formal grammar, as well as a semantic meaning, implemented by the browser engine.

## [Copy](https://webdevhub.us/docs/css/#css_declarations)[CSS declarations](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declarations "Permalink to CSS declarations")

Setting CSS properties to specific values is the core function of the CSS language. A property and value pair is called a **declaration**, and any CSS engine calculates which declarations apply to every single element of a page in order to appropriately lay it out, and to style it.

Both properties and values are case-insensitive by default in CSS. The pair is separated by a colon, '`:`' (`U+003A COLON`), and white spaces before, between, and after properties and values, but not necessarily inside, are ignored.

![css syntax - declaration.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/css_syntax_-_declaration.png)

There are more than [100 different properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) in CSS and a nearly infinite number of different values. Not all pairs of properties and values are allowed and each property defines what are the valid values. When a value is not valid for a given property, the declaration is deemed *invalid* and is wholly ignored by the CSS engine.

## [Copy](https://webdevhub.us/docs/css/#css_declaration_blocks)[CSS declaration blocks](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declaration_blocks "Permalink to CSS declaration blocks")

Declarations are grouped in **blocks**, that is in a structure delimited by an opening brace, '`{`' (`U+007B LEFT CURLY BRACKET`), and a closing one, '`}`' (`U+007D RIGHT CURLY BRACKET`). Blocks sometimes can be nested, so opening and closing braces must be matched.

![css syntax - block.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/css_syntax_-_block.png)

Such blocks are naturally called **declaration blocks** and declarations inside them are separated by a semi-colon, '`;`' (`U+003B SEMICOLON`). A declaration block may be empty, that is containing null declaration. White spaces around declarations are ignored. The last declaration of a block doesn't need to be terminated by a semi-colon, though it is often considered *good style* to do it as it prevents forgetting to add it when extending the block with another declaration.

A CSS declaration block is visualized in the diagram below.

![css syntax - declarations block.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/declaration-block.png)

**Note:** The content of a CSS declaration block, that is a list of semi-colon-separated declarations, without the initial and closing braces, can be put inside an HTML [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-style) attribute.

## [Copy](https://webdevhub.us/docs/css/#css_rulesets)[CSS rulesets](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_rulesets "Permalink to CSS rulesets")

If style sheets could only apply a declaration to each element of a Web page, they would be pretty useless. The real goal is to apply different declarations to different parts of the document.

CSS allows this by associating conditions with declarations blocks. Each (valid) declaration block is preceded by one or more comma-separated **[selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)**, which are conditions selecting some elements of the page. A [selector group](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list) and an associated declarations block, together, are called a **ruleset**, or often a **rule**.

A CSS ruleset (or rule) is visualized in the diagram below.

![css syntax - ruleset.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/ruleset.png)

As an element of the page may be matched by several selectors, and therefore by several rules potentially containing a given property several times, with different values, the CSS standard defines which one has precedence over the other and must be applied: this is called the [cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) algorithm.

**Note:** It is important to note that even if a ruleset characterized by a group of selectors is a kind of shorthand replacing rulesets with a single selector each, this doesn't apply to the validity of the ruleset itself.

This leads to an important consequence: if one single basic selector is invalid, like when using an unknown pseudo-element or pseudo-class, the whole *selector* is invalid and therefore the entire rule is ignored (as invalid too).

## [Copy](https://webdevhub.us/docs/css/#css_statements)[CSS statements](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_statements "Permalink to CSS statements")

Rulesets are the main building blocks of a style sheet, which often consists of only a big list of them. But there is other information that a Web author wants to convey in the style sheet, like the character set, other external style sheets to import, font face or list counter descriptions and many more. It will use other and specific kinds of statements to do that.

A **statement** is a building block that begins with any non-space characters and ends at the first closing brace or semi-colon (outside a string, non-escaped and not included into another {}, () or \[] pair).

![css syntax - statements Venn diag.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/css_syntax_-_statements_venn_diag.png)

There are two kinds of statements:

- **Rulesets** (or *rules*) that, as seen, associate a collection of CSS declarations to a condition described by a [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).
- **At-rules** that start with an at sign, '`@`' (`U+0040 COMMERCIAL AT`), followed by an identifier and then continuing up to the end of the statement, that is up to the next semi-colon (;) outside of a block, or the end of the next block. Each type of [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule), defined by the identifier, may have its own internal syntax, and semantics of course. They are used to convey meta-data information (like [`@charset`](https://developer.mozilla.org/en-US/docs/Web/CSS/@charset) or [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)), conditional information (like [`@media`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) or [`@document`](https://developer.mozilla.org/en-US/docs/Web/CSS/@document)), or descriptive information (like [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)).

Any statement which isn't a ruleset or an at-rule is invalid and ignored.

### [Copy](https://webdevhub.us/docs/css/#nested_statements)[Nested statements](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#nested_statements "Permalink to Nested statements")

There is another group of statements – the **nested statements**. These are statements that can be used in a specific subset of at-rules – the *conditional group rules*. These statements only apply if a specific condition is matched: the `@media` at-rule content is applied only if the device on which the browser runs matches the expressed condition; the `@document` at-rule content is applied only if the current page matches some conditions, and so on. In CSS1 and CSS2.1, only *rulesets* could be used inside conditional group rules. That was very restrictive and this restriction was lifted in *[CSS Conditionals Level 3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3#Conditionals "This is a link to an unwritten page")*. Now, though still experimental and not supported by every browser, conditional group rules can contain a wider range of content: rulesets but also some, but not all, at-rules.

<!--EndFragment-->
