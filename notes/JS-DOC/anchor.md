# String.prototype.anchor()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `anchor()` method creates a string beginning with an `<a name="...">` start tag, then some text, and then an `</a>` end tag.

**Warning:** Don't use this method. Use [DOM APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) instead. Also, the HTML specification no longer allows the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element to have a `name` attribute, so this method doesn't even create valid markup.

## Syntax

    anchor(name)

### Parameters

`name`  
A string representing a `name` value to put into the generated `<a name="...">` start tag.

### Return value

A string beginning with an `<a name="name">` start tag, then the text str, and then an `</a>` end tag.

## Description

Don't use this method. Use [DOM APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) instead. Also, the HTML specification no longer allows the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element to have a `name` attribute, so this method doesn't even create valid markup.

## Examples

### Using anchor()

    var myString = 'Table of Contents';

    document.body.innerHTML = myString.anchor('contents_anchor');

will output the following HTML:

    <a name="contents_anchor">Table of Contents</a>

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.anchor">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.anchor</span></a></td></tr></tbody></table>

`anchor`

1

12

1

Starting with version 17, the quotation mark (") is replaced by its HTML reference character (`"`) in strings supplied for the `name` parameter.

No

3

1

1

18

4

10.1

1

1.0

## See also

-   [`String.prototype.link()`](link)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/anchor" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/anchor</a>
