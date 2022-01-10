# String.prototype.big()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `big()` method creates a [`<big>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big) HTML element that causes a string to be displayed in a big font.

**Note:** The &lt;big&gt; element has been removed in [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and shouldn't be used anymore. Instead web developers should use [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) properties.

## Syntax

    big()

### Return value

A string containing a [`<big>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big) HTML element.

## Description

The `big()` method embeds a string in a `<big>` element: "`<big>str</big>`".

## Examples

### Using big()

The following example uses string methods to change the size of a string:

    var worldString = 'Hello, world';

    console.log(worldString.small());     // <small>Hello, world</small>
    console.log(worldString.big());       // <big>Hello, world</big>
    console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>

With the [`element.style`](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style) object you can get the element's `style` attribute and manipulate it more generically, for example:

    document.getElementById('yourElemId').style.fontSize = '2em';

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.big">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.big</span></a></td></tr></tbody></table>

`big`

1

12

1

3

3

1

1

18

4

10.1

1

1.0

## See also

-   [`String.prototype.fontsize()`](fontsize)
-   [`String.prototype.small()`](small)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/big" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/big</a>
