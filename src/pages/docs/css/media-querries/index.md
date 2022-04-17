---
title: CSS Introduction
excerpt: CSS is among the core languages of the open web
---
<!--StartFragment-->

# CSS

CSS is among the core languages of the **open web** and is standardized across Web browsers according to [W3C specifications](https://w3.org/Style/CSS/#specs). Previously, development of various parts of CSS specification was done synchronously, which allowed versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, CSS3. However, CSS4 has never become an official version.

From CSS3, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to [develop and release recommendations separately per module](https://www.w3.org/Style/CSS/current-work). Instead of versioning the CSS specification, W3C now periodically takes a snapshot of [the latest stable state of the CSS specification](https://www.w3.org/TR/css/).

## [Copy](https://webdevhub.us/docs/css/#key_resources)[Key resources](https://developer.mozilla.org/en-US/docs/Web/CSS#key_resources "Permalink to Key resources")

CSS Introduction

If you're new to web development, be sure to read our [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) article to learn what CSS is and how to use it.


```css
@media screen, print { ... }
```

[CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. This module provides a gentle beginning to your path towards CSS mastery with the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.

```css
@media (hover: hover) { ... }
```

This module carries on where [CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) left off — now you've gained familiarity with the language and its syntax, and got some basic experience with using it, it's time to dive a bit deeper. This module looks at the cascade and inheritance, all the selector types we have available, units, sizing, styling backgrounds and borders, debugging, and lots more.

```css
@media (max-width: 12450px) { ... }
```

[Styling text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)

With the basics of the CSS language covered, the next CSS topic for you to concentrate on is styling text — one of the most common things you'll do with CSS. Here we look at text styling fundamentals, including setting font, boldness, italics, line and letter spacing, drop shadows, and other text features. We round off the module by looking at applying custom fonts to your page, and styling lists and links.

[CSS layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

At this point we've already looked at CSS fundamentals, how to style text, and how to style and manipulate the boxes that your content sits inside. Now it's time to look at how to place your boxes in the right place in relation to the viewport, and to each other. We have covered the necessary prerequisites so we can now dive deep into CSS layout, looking at different display settings, modern layout tools like flexbox, CSS grid, and positioning, and some of the legacy techniques you might still want to know about.

* The **property** which is an identifier, that is a human-readable *name*, that defines which feature is considered.
* The **value** which describe how the feature must be handled by the engine. Each property has a set of valid values, defined by a formal grammar, as well as a semantic meaning, implemented by the browser engine.

## [Copy](https://webdevhub.us/docs/css/#css_declarations)[CSS declarations](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declarations "Permalink to CSS declarations")

Setting CSS properties to specific values is the core function of the CSS language. A property and value pair is called a **declaration**, and any CSS engine calculates which declarations apply to every single element of a page in order to appropriately lay it out, and to style it.

Both properties and values are case-insensitive by default in CSS. The pair is separated by a colon, '`:`' (`U+003A COLON`), and white spaces before, between, and after properties and values, but not necessarily inside, are ignored.

![css syntax - declaration.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/css_syntax_-_declaration.png)

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

## [Copy](https://webdevhub.us/docs/css/#css_declaration_blocks)[CSS declaration blocks](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declaration_blocks "Permalink to CSS declaration blocks")

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ... }
```

![css syntax - block.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/css_syntax_-_block.png)

Such blocks are naturally called **declaration blocks** and declarations inside them are separated by a semi-colon, '`;`' (`U+003B SEMICOLON`). A declaration block may be empty, that is containing null declaration. White spaces around declarations are ignored. The last declaration of a block doesn't need to be terminated by a semi-colon, though it is often considered *good style* to do it as it prevents forgetting to add it when extending the block with another declaration.

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

![css syntax - declarations block.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/declaration-block.png)

**Note:** The content of a CSS declaration block, that is a list of semi-colon-separated declarations, without the initial and closing braces, can be put inside an HTML [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-style) attribute.

## [Copy](https://webdevhub.us/docs/css/#css_rulesets)[CSS rulesets](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_rulesets "Permalink to CSS rulesets")

```css
@media not all and (monochrome) { ... }
```

CSS allows this by associating conditions with declarations blocks. Each (valid) declaration block is preceded by one or more comma-separated **[selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)**, which are conditions selecting some elements of the page. A [selector group](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list) and an associated declarations block, together, are called a **ruleset**, or often a **rule**.

```css
@media not (all and (monochrome)) { ... }
```

![css syntax - ruleset.png](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/ruleset.png)

```css
@media (not all) and (monochrome) { ... }
```

**Note:** It is important to note that even if a ruleset characterized by a group of selectors is a kind of shorthand replacing rulesets with a single selector each, this doesn't apply to the validity of the ruleset itself.

```css
@media not screen and (color), print and (color) { ... }
```

## [Copy](https://webdevhub.us/docs/css/#css_statements)[CSS statements](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_statements "Permalink to CSS statements")

```css
@media (not (screen and (color))), print and (color) { ... }
```

<details>

<summary>Media Query Examples</summary>

---
> If you think responsive’s simple, I feel bad for you son. We got 99 viewports, but the iPhone’s just one.  
> —Josh Brewer, [March 10, 2010](https://twitter.com/jbrewer/status/178528003402379265)

A major component of responsive design is creating the right experience for the right device. With a gazillion different devices on the market, this can be a tall task. We’ve rounded up media queries that can be used to target designs for many standard and popular devices that is certainly worth a read.

If you’re looking for a comprehensive list of media queries, [this repository](http://cssmediaqueries.com/) is a good resource.

If you’re reaction to this is: _you should never base your breakpoints on devices!!_ You have a good point. Justin Avery [has a nice post](http://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints) on the possible pitfalls of using device-specific breakpoints. Choosing breakpoints based on your design and not specific devices is a smart way to go. But sometimes you just need a little help getting one particular situation under control.

### Phones and handhelds

iPhone

```css
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) { 

}

/* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 

}

/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 

}
```

Galaxy Phones

```css
/* ----------- Galaxy S3 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 2) {

}

/* Portrait */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 2) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 2) 
  and (orientation: landscape) {

}

/* ----------- Galaxy S4, S5 and Note 3 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: landscape) {

}

/* ----------- Galaxy S6 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) 
  and (orientation: landscape) {

}
```

HTC Phones

```css
/* ----------- HTC One ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: landscape) {

}
```

Google Pixel

```css
/* ----------- Google Pixel ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: landscape) {

}

/* ----------- Google Pixel XL ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) 
  and (orientation: landscape) {

}
```

Nexus Phones

```css
/* ----------- Nexus 4 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 384px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 2) {

}

/* Portrait */
@media screen 
  and (device-width: 384px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 384px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- Nexus 5 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}

/* ----------- Nexus 6 and 6P ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 4) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 4)
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 592px) 
  and (-webkit-device-pixel-ratio: 4)
  and (orientation: landscape) {

}
```

Windows Phone

```css
/* ----------- Windows Phone ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 480px) 
  and (device-height: 800px) {

}

/* Portrait */
@media screen 
  and (device-width: 480px) 
  and (device-height: 800px)  
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 480px) 
  and (device-height: 800px) 
  and (orientation: landscape) {

}
```

### Laptops

Media Queries for laptops are a bit of a juggernaut. Instead of targeting specific devices, try specifying a general screen size range, then distinguishing between retina and non-retina screens.

```css
/* ----------- Non-Retina Screens ----------- */
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
}

/* ----------- Retina Screens ----------- */
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 
}
```

### Tablets

iPad

```css
/* ----------- iPad 1, 2, Mini and Air ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 3, 4 and Pro 9.7" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* ----------- iPad Pro 10.5" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 834px) 
  and (max-device-width: 1112px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 834px) 
  and (max-device-width: 834px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Landscape */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 1112px) 
  and (max-device-width: 1112px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* ----------- iPad Pro 12.9" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1366px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 1024px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Landscape */
/* Declare the same value for min- and max-width to avoid colliding with desktops */
/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
@media only screen 
  and (min-device-width: 1366px) 
  and (max-device-width: 1366px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2) {

}
```

Galaxy Tablets

```css
/* ----------- Galaxy Tab 2 ----------- */

/* Portrait and Landscape */
@media 
  (min-device-width: 800px) 
  and (max-device-width: 1280px) {

}

/* Portrait */
@media 
  (max-device-width: 800px) 
  and (orientation: portrait) { 

}

/* Landscape */
@media 
  (max-device-width: 1280px) 
  and (orientation: landscape) { 

}

/* ----------- Galaxy Tab S ----------- */

/* Portrait and Landscape */
@media 
  (min-device-width: 800px) 
  and (max-device-width: 1280px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media 
  (max-device-width: 800px) 
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) { 

}

/* Landscape */
@media 
  (max-device-width: 1280px) 
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2) { 

}
```

Nexus Tablets

```css
/* ----------- Nexus 7 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 601px) 
  and (device-height: 906px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) {

}

/* Portrait */
@media screen 
  and (device-width: 601px) 
  and (device-height: 906px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 601px) 
  and (device-height: 906px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: landscape) {

}

/* ----------- Nexus 9 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 1536px) 
  and (device-height: 2048px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) {

}

/* Portrait */
@media screen 
  and (device-width: 1536px) 
  and (device-height: 2048px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 1536px) 
  and (device-height: 2048px) 
  and (-webkit-min-device-pixel-ratio: 1.331) 
  and (-webkit-max-device-pixel-ratio: 1.332) 
  and (orientation: landscape) {

}
```

Kindle Fire

```css
/* ----------- Kindle Fire HD 7" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 800px) 
  and (max-device-width: 1280px) 
  and (-webkit-min-device-pixel-ratio: 1.5) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 800px) 
  and (max-device-width: 1280px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 800px) 
  and (max-device-width: 1280px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: landscape) {

}

/* ----------- Kindle Fire HD 8.9" ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1.5) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1.5) 
  and (orientation: landscape) {

}
```

### Wearables

```css
/* ----------- Moto 360 Watch ----------- */
@media 
  (max-device-width: 218px)
  and (max-device-height: 281px) { 

}
```

</details>

> ## Excerpt
> CSS Media queries are a way to target browser by certain characteristics, features, and user preferences, then apply styles based on those things.

---
CSS Media queries are a way to target browser by certain characteristics, features, and user preferences, then apply styles or run other code based on those things. Perhaps the most common media queries in the world are those that target particular viewport ranges and apply custom styles, which birthed the whole idea of responsive design.

```css
/* When the browser is at least 600px and above */
@media screen and (min-width: 600px) {
  .element {
    /* Apply some styles */
  }
}
```

There are lots of other things we can target beside viewport width. That might be screen resolution, device orientation, operating system preference, or even more among a whole bevy of things we can query and use to style content.

Looking for a quick list of media queries based on the viewports of standard devices, like phones, tablets and laptops? [Check out our collection of snippets.](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

### Using media queries

Media queries are commonly associated with CSS, but they can be used in HTML and JavaScript as well.

HTML

There are a few ways we can use media queries directly in HTML.

There’s the `<link>` element that goes right in the document `<head>`. In this example. we’re telling the browser that we want to use different stylesheets at different viewport sizes:

```
<html>
  <head>
    <!-- Served to all users -->
    <link rel="stylesheet" href="all.css" media="all" />
    <!-- Served to screens that are at least 20em wide -->
    <link rel="stylesheet" href="small.css" media="(min-width: 20em)" />
    <!-- Served to screens that are at least 64em wide -->
    <link rel="stylesheet" href="medium.css" media="(min-width: 64em)" />
    <!-- Served to screens that are at least 90em wide -->
    <link rel="stylesheet" href="large.css" media="(min-width: 90em)" />
    <!-- Served to screens that are at least 120em wide -->
    <link rel="stylesheet" href="extra-large.css" media="(min-width: 120em)" />
    <!-- Served to print media, like printers -->
    <link rel="stylesheet" href="print.css" media="print" />
  </head>
  <!-- ... -->
</html>
```

Why would you want to do that? It can be a nice way to fine-tune the performance of your site by splitting styles up in a way that they’re downloaded and served by the devices that need them.

But just to be clear, this doesn’t _always_ prevent the stylesheets that don’t match those media queries from downloading, it just assigns them a low loading priority level.

So, if a small screen device like a phone visits the site, it will only download the stylesheets in the media queries that match its viewport size. But if a larger desktop screen comes along, it will download the entire bunch because it matches all of those queries (well, minus the print query in this specific example).

That’s just the `<link>` element. As our [guide to responsive images](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/) explains, we can use media queries on `<source>` element, which informs the `<picture>` element what version of an image the browser should use from a set of image options.

```
<picture>
  <!-- Use this image if the screen is at least 800px wide -->
  <source srcset="cat-landscape.png" media="(min-width: 800px)">
  <!-- Use this image if the screen is at least 600px wide -->
  <source srcset="cat-cropped.png" media="(min-width: 600px)">

  <!-- Use this image if nothing matches -->
  <img src="cat.png" alt="A calico cat with dark aviator sunglasses.">
</picture>
```

Again, this can be a nice performance win because we can serve smaller images to smaller devices — which presumably (but not always) will be low powered devices that might be limited to a data plan.

And let’s not forget that we can use media queries directly on the `<style>` element as well:

```
<style>
  p {
    background-color: blue;
    color: white;
  }
</style>

<style media="all and (max-width: 500px)">
  p {
    background-color: yellow;
    color: blue;
  }
</style>
```

CSS

Again, CSS is the most common place to spot a media query in the wild. They go right in the stylesheet in an `@media` rule that wraps elements with conditions for when and where to apply a set of styles when a browser matches those conditions.

```css
/* Viewports between 320px and 480px wide */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .card {
    background: #bada55;
  }
}
```

It’s also possible to scope imported style sheet but as a general rule avoid using @import since it [performs poorly](https://csswizardry.com/2018/11/css-and-network-performance/).

```css
/* Avoid using @import if possible! */

/* Base styles for all screens */
@import url("style.css") screen;
/* Styles for screens in a portrait (narrow) orientation */
@import url('landscape.css') screen and (orientation: portrait);
/* Print styles */
@import url("print.css") print;
```

JavaScript

We can use media queries in JavaScript, too! And guess, what? They’re work a lot like they do in CSS. The difference? We start by using the `[window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)` method to define the conditions first.

So, say we want to log a message to the console when the browser is at least 768px wide. We can create a constant that calls `matchMedia()` and defines that screen width:

```
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia( '( min-width: 768px )' )
```

Then we can fire log to the console when that condition is matched:

```
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia( '( min-width: 768px )' )

// Note the `matches` property
if ( mediaQuery.matches ) {
  console.log('Media Query Matched!')
}
```

Unfortunately, this only fires once so if the alert is dismissed, it won’t fire again if we change the screen width and try again without refreshing. That’s why it’s a good idea to use a listener that checks for updates.

```
// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)
```

Check out Marko Ilic’s full post on [“Working with JavaScript Media Queries”](https://css-tricks.com/working-with-javascript-media-queries/) for a deeper dive on this, including a comparison of using media queries with an older JavaScript approach that binds a `resize` event listener that checks `window.innerWidth` or `window.innerHeight` to fire changes.

___

### Anatomy of a Media Query

Now that we’ve seen several examples of _where_ media queries can be used, let’s pick them apart and see what they’re actually doing.

![Showing the syntax for CSS media queries with each part highlighted in a different color to distinguish the at-rule, media type, media features and operator.](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/media-query-anatomy.jpg?resize=2361%2C156&ssl=1)

@media

```css
@media [media-type] ([media-feature]) {
  /* Styles! */
}
```

The first ingredient in a media query recipe is the `@media` rule itself, which is one of [many CSS at-rules](https://css-tricks.com/the-at-rules-of-css/). Why does `@media` get all the attention? Because it’s geared to the _type_ of media that a site is viewed with, what _features_ that media type supports, and _operators_ that can be combined to mix and match simple and complex conditions alike.

Media types

```css
@media screen {
  /* Styles! */
}
```

What type of media are we trying to target? In many (if not most) cases, you’ll see a `screen` value used here, which makes sense since many of the media types we’re trying to match are devices with screens attached to them.

But screens aren’t the only type of media we can target, of course. We have a few, including:

-   `all`: Matches all devices
-   `print`: Matches documents that are viewed in a print preview or any media that breaks the content up into pages intended to print.
-   `screen`: Matches devices with a screen
-   `speech`: Matches devices that read the content audibly, such as a screenreader. This replaces the now deprecated `[aural](https://drafts.csswg.org/mediaqueries-3/#background)` type since [Media Queries Level 4](https://drafts.csswg.org/mediaqueries/#media-types).

To preview print styles in a screen all major browsers can [emulate the output of a print stylesheet using DevTools](https://css-tricks.com/can-you-view-print-stylesheets-applied-directly-in-the-browser/). Other media types such as `tty`, `tv`,  `projection`,  `handheld`, `braille`, `embossed` and `aural` have been deprecated and, while [the spec continues to advise browsers to recognize them](https://www.w3.org/TR/mediaqueries-4/#media-types), they must evaluate to nothing. If you are using one of these consider changing it for a modern approach.

Media features

Once we define the type of media we’re trying to match, we can start defining what features we are trying to match it to. We’ve looked at a lot of examples that match screens to width, where `screen` is the _type_ and both `min-width` and `max-width` are _features_ with specific values.

But there are many, many (many!) more “features” we can match. [Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/#mq-features) groups 18 media features into 5 categories.

#### Viewport/Page Characteristics

| Feature | Summary | Values | Added |
| --- | --- | --- | --- |
| `width` | Defines the widths of the viewport. This can be a specific number (e.g. `400px`) or a range (using `min-width` and `max-width`). | `<length>` |  |
| `height` | Defines the height of the viewport. This can be a specific number (e.g. `400px`) or a range (using `min-height` and `max-height`). | `<length>` |  |
| `aspect-ratio` | Defines the width-to-height aspect ratio of the viewport | `<ratio>` |  |
| `orientation` | The way the screen is oriented, such as tall (`portrait`) or wide (`landscape`) based on how the device is rotated. | `portrait`
`landscape`

 |  |
| `overflow-block` | Checks how the device treats content that overflows the viewport in the block direction, which can be `scroll` (allows scrolling), `optional-paged` (allows scrolling and manual page breaks), `paged` (broken up into pages), and `none` (not displayed). | `scroll`

`optional-paged`

`paged`

 | Media Queries Level 4 |
| `overflow-inline` | Checks if content that overflows the viewport along the inline axis be scrolled, which is either `none` (no scrolling) or `scroll` (allows scrolling). | `scroll`

`none`

 | Media Queries Level 4 |

#### Display Quality

| Feature | Summary | Values | Added |
| --- | --- | --- | --- |
| `resolution` | Defines the target pixel density of the device | `<resolution>`
`infinite`

 |  |
| `scan` | Defines the scanning process of the device, which is the way the device paints an image onto the screen (where `interlace` draws odd and even lines alternately, and `progressive` draws them all in sequence). | `interlace`

`progressive`

 |  |
| `grid` | Determines if the device uses a grid (`1`) or bitmap (`0`) screen | `0` = Bitmap  
`1` = Grid | Media Queries Level 5 |
| `update` | Checks how frequently the device can modify the appearance of content (if it can at all), with values including `none`, `slow` and `fast`. | `slow`

`fast`

`none`

 | Media Queries Level 4 |
| `environment-blending` | A method for determining the external environment of a device, such as dim or excessively bright places. | `opaque`

`additive`

`subtractive`

 |  |
| `display-mode` | Tests the display mode of a device, including `fullscreen`(no browsers chrome), `standalone` (a standalone application), `minimal-ui` (a standalone application, but with some navigation), and `browser` (a more traditional browser window) | `fullscreen`

`standalone`

`minimal-ui`

`browser`

 | [Web App Manifest](https://w3c.github.io/manifest/#the-display-mode-media-feature) |

#### Color

| Feature | Summary | Values | Added |
| --- | --- | --- | --- |
| `color` | Defines the color support of a device, expressed numerically as bits. So, a value of `12` would be the equivalent of a device that supports 12-bit color, and a value of zero indicates no color support. | `<integer>` |  |
| `color-index` | Defines the number of values the device supports. This can be a specific number (e.g. `10000`) or a range (e.g. `min-color-index: 10000`, `max-color-index: 15000`), just like `width`. | `<integer>` |  |
| `monochrome` | The number of bits per pixel that a device’s monochrome supports, where zero is no monochrome support. | `<integer>` |  |
| `color-gamut` | Defines the range of colors supported by the browser and device, which could be `srgb`, `p3` or `rec2020` | `srgb`
`p3`

`rec2020`

 | Media Queries Level 4 |
| `dynamic-range` | The combination of how much brightness, color depth, and contrast ratio supported by the video plane of the browser and user device. | `standard`

`high`

 |  |
| `inverted-colors` | Checks if the browser or operating system is set to invert colors (which can be useful for optimizing accessibility for sight impairments involving color) | `inverted`

`none`

 | Media Queries Level 5 |

#### Interaction

| Feature | Summary | Values | Added |
| --- | --- | --- | --- |
| `pointer` | Sort of like `any-pointer` but checks if the _primary_ input mechanism is a pointer and, if so, how accurate it is (where `coarse` is less accurate, `fine` is more accurate, and `none` is no pointer). | `coarse`
`fine`

`none`

 | Media Queries Level 4 |
| `hover` | Sort of like `any-hover` but checks if the _primary_ input mechanism (e.g. mouse of touch) allows the user to hover over elements | `hover`

`none`

 | Media Queries Level 4 |
| `any-pointer` | Checks if the device uses a pointer, such as a mouse or styles, as well as how accurate it is (where `coarse` is less accurate and `fine` is more accurate) | `coarse`

`fine`

`none`

 | Media Queries Level 4 |
| `any-hover` | Checks if the device is capable of hovering elements, like with a mouse or stylus. In some rare cases, touch devices are capable of hovers. | `` `hover`  `none` `` | Media Queries Level 4 |

#### Video Prefixed

The spec references user agents, including TVs, that render video and graphics in two separate planes that each have their own characteristics. The following features describe those planes.

| Feature | Summary | Values | Added |
| --- | --- | --- | --- |
| `video-color-gamut` | Describes the approximate range of colors supported by the video plane of the browser and user device | `srgb`
`p3`

`rec2020`

 | Media Queries Level 5 |
| `video-dynamic-range` | The combination of how much brightness, color depth, and contrast ratio supported by the video plane of the browser and user device. | `standard`

`high`

 | Media Queries Level 5 |
| `video-width`¹ | The width of the video plane area of the targeted display | `<length>` | Media Queries Level 5 |
| `video-height`¹ | The height of the video plane area of the targeted display | `<length>` | Media Queries Level 5 |
| `video-resolution`¹ | The resolution of the video plane area of the targeted display | `<resolution>`

`inifinite`

 | Media Queries Level 5 |

¹ Under discussion (Issue [#5044](https://github.com/w3c/csswg-drafts/issues/5044))

#### Scripting

| Feature | Summary | Values | Added |
| --- | --- | --- | --- |
| `scripting` | Checks whether the device allows scripting (i.e. JavaScript) where `enabled` allows scripting, `iniital-only` | `enabled`
`initial-only`

 | Media Queries Level 5 |

#### User Preference

| Feature | Summary | Values | Added |
| --- | --- | --- | --- |
| `prefers-reduced-motion` | Detects if the user’s system settings are set to reduce motion on the page, which is a [great accessibility check](https://css-tricks.com/introduction-reduced-motion-media-query/). | `no-preference`
`reduce`

 | Media Queries Level 5 |
| `prefers-reduced-transparency` | Detects if the user’s system settings prevent transparent across elements. | `no-preference`

`reduce`

 | Media Queries Level 5 |
| `prefers-contrast` | Detects if the user’s system settings are set to either increase or decrease the amount of contrast between colors. | `no-preference`

`high`

`low`

`forced`

 | Media Queries Level 5 |
| `prefers-color-scheme` | Detects if the user prefers a light or dark color scheme, which is a rapidly growing way to go about [creating “dark mode” interfaces](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/). | `light`

`dark`

 | Media Queries Level 5 |
| `forced-colors` | Tests whether the browser restricts the colors available to use (which is `none` or `active`) | `active`

`none`

 | Media Queries Level 5 |
| `prefers-reduced-data` | Detects if the user prefers to use less data for the page to be rendered. | `no-preference`

`reduce`

 | Media Queries Level 5 |

#### Deprecated

| Name | Summary | Removed |
| --- | --- | --- |
| `device-aspect-ratio` | The width-to-height aspect ratio of the output device | Media Queries Level 4 |
| `device-height` | The height of the device’s surface that displays rendered elements | Media Queries Level 4 |
| `device-width` | The width of the device’s surface that displays rendered elements | Media Queries Level 4 |

Operators

Media queries support logical operators like many programming languages so that we can match media types based on certain conditions. The `@media` rule is itself a logical operator that is basically stating that “if” the following types and features are matches, then do some stuff.

#### `and`

But we can use the `and` operator if we want to target screens within a range of widths:

```css
/* Matches screen between 320px AND 768px */
@media screen (min-width: 320px) and (max-width: 768px) {
  .element {
    /* Styles! */
  }
}
```

#### `or` (or comma-separated)

We can also comma-separate features as a way of using an `or` operator to match different ones:

```css
/* 
  Matches screens where either the user prefers dark mode or the screen is at least 1200px wide */
@media screen (prefers-color-scheme: dark), (min-width 1200px) {
  .element {
    /* Styles! */
  }
}
```

#### `not`

Perhaps we want to target devices by what they do **not** support or match. This declaration removes the body’s background color when the device is a printer and can only show one color.

```css
@media print and ( not(color) ) {
  body {
    background-color: none;
  }
}
```

___

### Do you really need CSS media queries?

Media queries are a powerful tool in your CSS toolbox with exciting hidden gems. But if you accomodate your design to every possible situation you’ll end up with a codebase that’s too complex to maintain and, as we all know, CSS is like a bear cub: cute and inoffensive but when it grows it will eat you alive.

That’s why I recommend following Ranald Mace’s concept of Universal Design which is “_the design of products to be usable by all people, to the greatest extent possible, without the need for adaptation or specialized design.”_

In [“Accessibility for Everyone”](https://abookapart.com/products/accessibility-for-everyone) Laura Kalbag explains that the difference between accessible and universal design is subtle but important. An accessible designer would create a large door for people on a wheel chair to enter, while a universal designer would produce an entry that anyone would fit disregarding of their abilities.

I know that talking about universal design on the web is hard and almost sound utopian, but think about it, there are around [150 different browsers](https://en.wikipedia.org/wiki/List_of_web_browsers), around 50 different combinations of user preferences, and as we mentioned before more than 24000 different and unique Android devices alone.

This means that there are at least 18 million possible cases in which your content might be displayed. In the words of the fantastic [Miriam Suzanne](https://twitter.com/MiriSuzanne/status/1261075490628005888), _“CSS out here trying to do graphic design of unknown content on an infinite and unknown canvas, across operating systems, interfaces, & languages. There’s no possible way for any of us to know what we’re doing.”_

That’s why assuming is really dangerous, so when you design, develop and think about your products leave assumptions behind and use media queries to make sure that your content is displayed correctly in any contact and before any user.

___

### Using `min-` and `max-` to match value ranges

Many of the media features outlined in the previous section — including `width`, `height`, `color` and `color-index` — can be prefixed with `min-` or `max-` to express minimum or maximum constraints. We’ve already seen these in use throughout many of the examples, but the point is that we can create a range of value to match instead of having to declare specific values.

In the following snippet, we’re painting the body’s background purple when the viewport width is wider than 30em and narrower than 80em. If the viewport width does not match that range of values, then it will fallback to white.

```
body {
  background-color: #fff;
}

@media (min-width: 30em) and (max-width: 80em) {
  body {
    background-color: purple;
  }
}
```

Media Queries Level 4 specifies a [new and simpler syntax](https://www.w3.org/TR/mediaqueries-4/#mq-ranges) using less then (`<`), greater than (`>`) and equals (`=`) operators. Unfortunately, at the time of writing, it’s only supported by FireFox.

___

### Nesting and complex decision making

CSS allows you to nest at-rules or group statements using parentheses, making it possible to go as deep as we want to evaluate complex operations.

```css
@media (min-width: 20em), not all and (min-height: 40em) {  
  @media not all and (pointer: none) { ... }
  @media screen and ( (min-width: 50em) and (orientation: landscape) ), print and ( not (color) ) { ... }
}
```

**Be careful!** even thought it’s possible to create powerful and complex expressions, you might end up with a very opinionated, hard to maintain query. As Brad Frost [puts it](https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/): “The more complex our interfaces are, the more we have to think to maintain them properly.”

___

### Accessibility

Many of the features added in Media Queries Level 4 are centered around accessibility.

#### `prefers-reduced-motion`

`prefers-reduced-motion` detects if the user has the reduced motion preference activated to minimize the amount of movements and animations. It takes two values:

-   `no-preference`: Indicates that the user has made no preference known to the system.
-   `reduce`: Indicates that user has notified the system that they prefer an interface that minimizes the amount of movement or animation, preferably to the point where all non-essential movement is removed.

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/macos-preference-motion.png?resize=780%2C588&ssl=1)

This preference is generally used by people who suffer from vestibular disorder or vertigo, where different movements result in loss of balance, migraine, nausea or hearing loss. If you ever tried to spin quickly and got dizzy, you know what it feels like.

In a [fantastic article](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/) by Eric Bailey, he suggests stopping all animations with this code:

```css
@media screen and (prefers-reduced-motion: reduce) {  
  * {
    /* Very short durations means JavaScript that relies on events still works */
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

Popular frameworks like [Bootstrap have this feature on by default](https://v5.getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion). In my opinion there is no excuse not to use `prefers-reduced-motion` — just use it.

#### `prefers-contrast`

The `prefers-contrast` feature informs whether the user has chosen to increase or reduce contrast in their system preferences or the browser settings. It takes three values:

-   `no-preference`: When a user has made no preference known to the system. If you use it as a boolean it’ll evaluate false.
-   `high`: When a user has selected the option to display a higher level of contrast.
-   `low`: When a user has selected the option to display a lower level of contrast.

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/macos-preference-contrast.png?resize=780%2C588&ssl=1)

At the moment of writing this feature is not supported by any browser. Microsoft has done a [non-standard earlier implementation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-ms-high-contrast) with the `-ms-high-contrast` feature that works only on Microsoft Edge v18 or earlier (but not Chromium-based versions).

```css
.button {
  background-color: #0958d8;
  color: #fff;
}

@media (prefers-contrast: high) {
  .button {
    background-color: #0a0db7;
  }
}
```

This example is increasing the contrast of a the class button from AA to AAA when the user has high contrast on.

#### `inverted-colors`

The `inverted-colors` feature informs whether the user has chosen to invert the colors on their system preferences or the browser settings. Sometimes this option is used as an alternative to high contrast. It takes three values:

-   `none`: When colors are displayed normally
-   `inverted`: When a user has selected the option to invert colors

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/macos-preference-invert-colors.png?resize=780%2C588&ssl=1)

The problem with inverted colors is that it’ll also invert the colors of images and videos, making them look like x-ray images. By using a CSS invert filter you can select all images and videos and invert them back.

```css
@media (inverted-colors) {
  img, video { 
    filter: invert(100%);
  }
}
```

At the time of writing this feature is only supported by Safari.

#### `prefers-color-scheme`

Having a “dark mode” color scheme is something we’re seeing a lot more of these days, and thanks to the `prefers-color-scheme` feature, we can tap into a user’s system or browser preferences to determine whether we serve a “dark” or a “light” theme based on the ir preferences.

It takes two values:

-   `light`: When a user has selected that they prefer a light theme or has no active preferences
-   `dark`: When a user has selected a dark display in their settings

![](https://paper-attachments.dropbox.com/s_0BFBF55A2024DE950EFA25781444032C5BBE17E7EC9DD277E9E0361558E9B210_1595791834440_Screen+Shot+2020-07-26+at+4.28.13+PM.png)

```
body {
  --bg-color: white; 
  --text-color: black;

  background-color: var(--bg-color);
  color: var(--text-color);
}

@media screen and (prefers-color-scheme: dark) {
  body {
    --bg-color: black;
    --text-color: white;
  }
}
```

As Adhuham explains in the [complete guide to Dark Mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) there is way more to it than just changing the color of the background. Before you jump into doing dark mode remember that if you don’t have a very smart implementation strategy you might end up with a code base that’s really hard to maintain. [CSS variables](https://css-tricks.com/theming-with-variables-globals-and-locals/) can do wonders for it but that’s a subject for another article.

___

### What lies ahead?

[Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/) is currently in Working Draft status, which means a lot can change between now and when it becomes a recommendation. But it includes interesting features that are worth mentioning because they open up new ways to target screens and adapt designs to very specific conditions.

#### User preference media features

Hey, we just covered these in the last section! Oh well. These features are exciting because they’re informed by a user’s actual settings, whether they are from the user agent or even at the operating system level.

#### Detecting a forced color palette

This is neat. Some browsers will limit the number of available colors that can be used to render styles. This is called [“forced colors mode”](https://www.w3.org/TR/css-color-adjust-1/#forced-colors-mode) and, if enabled in the browser settings, the user can choose a limited set of colors to use on a page. As a result, the user is able to define color combinations and contrasts that make content more comfortable to read.

The `[forced-colors](https://www.w3.org/TR/mediaqueries-5/#forced-colors)` feature allows us to detect if a forced color palette is in use with the `active` value. If matched, the browser must provide the required color palette through the CSS system colors. The browser is also given the leeway to determine if the background color of the page is light or dark and, if appropriate, trigger the appropriate `prefers-color-scheme` value so we can adjust the page.

#### Detecting the maximum brightness, color depth, and contrast ratio

Some devices (and browsers) are capable of super bright displays, rendering a wide range of colors, and high contrast ratios between colors. We can detect those devices using the `[dynamic-range](https://www.w3.org/TR/mediaqueries-5/#dynamic-range)` feature, where the `high` keyword matches these devices and `standard` matches everything else.

We’re likely to see changes to this because, as of right now, there’s still uncertainty about what measurements constitute “high” levels of brightness and contrast. The browser may get to make that determination.

#### Video prefixed features

The spec talks about some screens, like TVs, that are capable of displaying video and graphics on separate “planes” which might be a way of distinguishing the video frame from other elements on the screen. As such, Media Queries Level 5 is proposing a new set of media features aimed at [detecting video characteristics](https://www.w3.org/TR/mediaqueries-5/#video-prefixed-features), including color gamut and dynamic range.

There are also proposals to detect video height, width and resolution, but [the jury’s still out](https://github.com/w3c/csswg-drafts/issues/5044) on whether those are the right ways to address video.

___

### Browser support

Browsers keep evolving and since by the time you are reading this post chances are that browser support for this feature might change, please check [MDN updated browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/CSS/@media).

___

### A note on container queries

Wouldn’t be cool if components could adapt themselves on their own size instead of the browser’s? That’s what the concept of _container queries_ is all about. We currently only have the browser screen to make those changes via media queries.

That’s unfortunate, as the viewport isn’t always a direct relationship to how big the element itself is. Imagine a widget that renders in many different contexts on a site: sometimes in a sidebar, sometimes in a full-width footer, sometimes in a grid with unknown columns.

This is the problem that the elusive container queries idea is trying to solve. Ideally we could adapt styles of an element according to the size of itself instead of of the size of the viewport.

But container queries don’t exist yet. The [WICG is looking for use cases](https://github.com/WICG/container-queries) and [it’s a highly requested feature](https://css-tricks.com/lets-not-forget-about-container-queries/). We [see occasional movement](https://css-tricks.com/toward-responsive-elements/), but it’s unsure if we’ll ever get it. But when we do, you can bet that it will have an impact on how we approach media queries as well.

In the meantime, you can [catch up on the origin story of container queries](https://css-tricks.com/the-origin-story-of-container-queries/) for more context.

___

### Examples

Let’s look at a bunch of media query examples. There are so many combinations of media types, features, and operators that the number of possibilities we could show would be exhaustive. Instead, we’ll highlight a handful based on specific media features.

#### Adjust layout at different viewport widths

More info

This is the probably the most widely used media feature. It informs the width of the browser’s viewport including the scrollbar. It unlocked the CSS implementation of what Ethan Marcotte famously coined [_responsive design_](https://alistapart.com/article/responsive-web-design/): a process by which a design responds to the size of the viewport using a combination of a fluid grid, flexible images, and responsive typesetting.

Later, Luke Wroblewski evolved the concept of responsive design by introducing the term [_mobile-first_](https://abookapart.com/products/mobile-first), encouraging designers and developers to start with the small-screen experience first then progressively enhance the experience as the screen width and device capabilities expand.

A mobile-first can usually be spotted by it’s use of `min-width` instead of `max-width`. If we start with `min-width`, we’re essentially saying, _“hey, browser, start here and work up.”_ On the flip side, `max-width` is sort of like prioritizing larger screens.

One approach for defining breakpoints by width is using the dimensions of [standard devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/), like the _exact_ pixel width of an iPhone. But there are many, many (many), many different phones, tables, laptops, and desktops. Looking at Android alone, there are more than 24,000 variations of viewport sizes, resolutions, operating systems, and browsers, as of August 2015.

So, while targeting the precise width of a specific device might be helpful for troubleshooting or one-off fixes, it’s probably not the most robust solution for maintaining a responsive architecture. This isn’t a new idea by any stretch. Brad Frost was already preaching the virtues of letting content — not devices — determine breakpoints in his post [“7 habits of highly effective media queries”](https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/) published back in 2013.

And even though media queries are still a valid tool to create responsive interfaces, there are many situations where it’s possible to avoid using width at all. Modern CSS allow us to create flexible layouts with CSS grid and flex that adapts our content to the viewport size without a need to add breakpoints. For example, here is a grid layout that adapts how many columns it will have [without any media queries at all](https://css-tricks.com/books/greatest-css-tricks/flexible-grids/).

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

There are many articles about thinking beyond width, [I wrote about it a few years ago](https://css-tricks.com/mobile-small-portrait-slow-interlace-monochrome-coarse-non-hover-first/) and I recommend checking out Una Kravet’s [Ten modern layouts in one line of CSS](https://web.dev/one-line-layouts/).

___

#### Dark mode

More info

This example is pulled straight from our [Guide to Dark Mode on the Web](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/). The idea is that we can detect whether a user’s system settings are configured to light or dark mode using the `prefers-color-scheme` feature and then define an alternate set of colors for the rendered UI.

Combining this technique with CSS custom properties makes things even easier because they act like variables that we only need to define once, then use throughout the code. Need to swap colors? Change the custom property value and it updates everywhere. That’s exactly what `prefers-color-scheme` does. We define a set of colors as custom properties, then redefine them inside a media query using the `prefer-color-scheme` feature to change colors based on the user’s settings.

___

#### Detecting orientation, hover and motion on a responsive card gallery

More info

This gallery is responsive without using the `width` feature.

It detects the `orientation` of the viewport. If it’s a `portrait` viewport, the sidebar will became a header; if it’s `landscape` it stays off to the side.

Using the `pointer` media feature, it decides if the main input device is `coarse` — like a finger — or `fine` — like a mouse cursor — to set the size of the clickable areas of the checkboxes.

Then, by using the `hover` media feature, the example checks if the device is capable of hovering (like a mouse cursor) and display a checkbox in each card.

The animations are removed when `prefers-reduced-motion` is set to `reduce`.

And did you notice something? We’re actually _not_ using media queries for the actual layout and sizing of the cards! That’s handled using the `minmax()` function on the `.container` element to show how responsive design doesn’t always mean using media queries.

In short, this is a fully responsive app without ever measuring `width` or making assumptions.

#### Target an iPhone in landscape mode


```css
/* iPhone X Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
  /* Styles! */
}
```

More info

The `orientation` media feature tests whether a device is rotated the wide way (landscape) or the tall way (portrait).

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/portrait-landscape.jpg?resize=1024%2C595&ssl=1)

While media queries are unable to know exactly which device is being used, we can use the exact dimensions of a specific device. The snippet above is targets the iPhone X.

More info

In the example above, we’re using `height` to detached fixed elements and avoid taking up too much screen real estate when the screen is too short. A horizontal navigation bar is in a fixed position when the screen is tall, but detaches itself on shorter screens.

Like the `width` feature, `height` detects the height of the viewport, including the scrollbar. Many of us browse the web on small devices with narrow viewports, making designing for different heights more relevant than ever. Anthony Colangelo describes [how Apple uses the `height` media feature](https://cognition.happycog.com/article/go-vertical/) in a meaningful way to deal with the size of the hero image as the viewport’s height changes.

___

#### Responsive (fluid) typography

More info

A font can look either too big or too small, depending on the size of the screen that’s showing it. If we’re working on a small screen, then chances are that we’ll want to use smaller type than what we’d use on a much larger screen.

The idea here is that we’re using the browser’s width to scale the font size. We set a default font size on the `<html>` that acts as the “small” font size, then set another font size using a media query that acts as the “large” font size. In the middle? We set the font size again, but inside another media query that calculates a size based on the browser width.

The beauty of this is that it allows the font size to adjust based on the browser width, but never go above or below certain sizes. However, there is a [much simpler way to go about this](https://css-tricks.com/simplified-fluid-typography/) that requires no media queries at all, thanks to newer CSS features, like `min()`, `max()`, and `clamp()`.

___

#### Provide bigger touch targets when devices have a `course` pointer

More info

Have you ever visited a site that had _super_ tiny buttons? Some of us have fat fingers making it tough to tap an object accurately without inadvertently tapping something else instead.

Sure, we can rely on the `width` feature to tell if we’re dealing with a small screen, but we can also detect if the device is capable of hovering over elements. If it isn’t then it’s probably a touch device, or perhaps a device that supports both, like the Microsoft Surface.

The demo above uses checkboxes as an example. Checkboxes can be a pain to tap on when viewing them on a small screen, so we’re increasing the size and not requiring a hover if the device is incapable of `hover` events.
