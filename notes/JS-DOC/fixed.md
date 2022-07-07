# String.prototype.fixed()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `fixed()` method creates a [`<tt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt) HTML element that causes a string to be displayed in fixed-pitch font.

## Syntax

    fixed()

### Return value

A string representing a [`<tt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt) HTML element.

## Description

The `fixed()` method embeds a string in a `<tt>` element: "`<tt>str</tt>`".

## Examples

### Using fixed()

The following example uses the `fixed` method to change the formatting of a string:

    var worldString = 'Hello, world';
    console.log(worldString.fixed()); // "<tt>Hello, world</tt>"

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.fixed">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.fixed</span></a></td></tr></tbody></table>

`fixed`

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

-   [`String.prototype.bold()`](bold)
-   [`String.prototype.italics()`](italics)
-   [`String.prototype.strike()`](strike)

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fixed" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fixed</a>
