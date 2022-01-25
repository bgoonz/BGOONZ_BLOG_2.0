# String.prototype.fontcolor()

**Deprecated**

This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The `fontcolor()` method creates a [`<font>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font) HTML element that causes a string to be displayed in the specified font color.

**Note:** The &lt;font&gt; element has been removed in [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and shouldn't be used anymore. Instead web developers should use [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) properties.

## Syntax

    fontcolor(color)

### Parameters

`color`  
A string expressing the color as a hexadecimal RGB triplet or as a string literal. String literals for color names are listed in the [CSS color reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

### Return value

A string containing a [`<font>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font) HTML element.

## Description

If you express color as a hexadecimal RGB triplet, you must use the format `rrggbb`. For example, the hexadecimal RGB values for salmon are red=FA, green=80, and blue=72, so the RGB triplet for salmon is "`FA8072`".

## Examples

### Using fontcolor()

The following example uses the `fontcolor()` method to change the color of a string by producing a string with the HTML `<font>` element.

    var worldString = 'Hello, world';

    console.log(worldString.fontcolor('red') +  ' is red in this line');
    // '<font color="red">Hello, world</font> is red in this line'

    console.log(worldString.fontcolor('FF00') + ' is red in hexadecimal in this line');
    // '<font color="FF00">Hello, world</font> is red in hexadecimal in this line'

With the [`element.style`](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style) object you can get the element's `style` attribute and manipulate it more generically, for example:

    document.getElementById('yourElemId').style.color = 'red';

## Specifications

<table><thead><tr class="header"><th>Specification</th></tr></thead><tbody><tr class="odd"><td><a href="https://tc39.es/ecma262/#sec-string.prototype.fontcolor">ECMAScript Language Specification (ECMAScript) 
<br/>

<span class="small">#sec-string.prototype.fontcolor</span></a></td></tr></tbody></table>

`fontcolor`

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

© 2005–2021 MDN contributors.  
Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor" class="_attribution-link">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor</a>
