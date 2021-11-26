CSS Interview Prep Quiz
=======================

Plus Css Cheat Sheet (82 questions total)

------------------------------------------------------------------------

### CSS Interview Prep Quiz

#### Plus Css Cheat Sheet (82 questions total)

> Scroll Down To skip to quiz:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*3qTmnYskDL2PrW06.jpg" class="graf-image" /></figure>### Source:

#### <a href="https://websitesetup.org/css3-cheat-sheet/" class="markup--anchor markup--h4-anchor">Complete CSS Cheat Sheet</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*aahUgWrL4_5GILfw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*2PQgJNqe_nP6lWnz.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*lOzM74JQovP54m_v.png" class="graf-image" /></figure>#### Q1. In the following example, which selector has the highest specificity ranking for selecting the anchor link element?

    ul li a
    a
    .example a
    div a

-   <span id="8dcb">\[x\] `.example a`</span>
-   <span id="37da">\[ \] `div a`</span>
-   <span id="09ae">\[ \] `a`</span>
-   <span id="a2d4">\[ \] `ul li a`</span>

#### Q2. Using an attribute selector, how would you select an `<a>` element with a "title" attribute?

-   <span id="558d">\[x\] a\[title\]{…}</span>
-   <span id="768a">\[ \] a &gt; title {…}</span>
-   <span id="395f">\[ \] a.title {…}</span>
-   <span id="d6fa">\[ \] a=title {…}</span>

#### Q3. CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or it you need to support older browser version. What are two valid techniques used to clear floats?

-   <span id="2ea7">\[ \] Use the “clearfix hack” on the floated element and add a float to the parent element.</span>
-   <span id="53b9">\[ \] Use the overflow property on the floated element or the “clearfix hack” on either the floated or parent element.</span>
-   <span id="0f0b">\[ \] Use the “clearfix hack” on the floated element or the overflow property on the parent element.</span>
-   <span id="3558">\[x\] Use the “clearfix hack” on the parent element or use the overflow property with a value other than “visible.”</span>

#### Q4. What element(s) do the following selectors match to?

`1) .nav {...}` `2) nav {...}` `3) #nav {...}`

-   <span id="59b9">\[ \]</span>

<!-- -->

    1. An element with an ID of "nav"
    2. A nav element
    3. An element with a class of "nav"

-   <span id="2ddd">\[ \]</span>

<!-- -->

    They all target the same nav element.

-   <span id="1b5d">\[x\]</span>

<!-- -->

    1. An element with an class of "nav"
    2. A nav element
    3. An element with a id of "nav"

-   <span id="7558">\[ \]</span>

<!-- -->

    1. An element with an class of "nav"
    2. A nav element
    3. An div with a id of "nav"

#### Q5. When adding transparency styles, what is the difference between using the opacity property versus the background property with an `rgba()` value?

-   <span id="1ed9">\[ \] Opacity specifies the level of transparency of the child elements. Background with an `rgba()` value applies transparency to the background color only.</span>
-   <span id="f371">\[ \] Opacity applies transparency to the background color only. Background with an `rgba()` value specifies the level of transparency of an element, as a whole, including its content.</span>
-   <span id="bb37">\[x\] Opacity specifies the level of transparency of an element, including its content. Background with an `rgba()` value applies transparency to the background color only.</span>
-   <span id="4dcd">\[ \] Opacity applies transparency to the parent and child elements. Background with an `rgba()` value specifies the level of transparency of the parent element only.</span>

#### Q6. What is true of block and inline elements? (Alternative: Which statement about block and inline elements is true?)

-   <span id="c7aa">\[ \] By default, block elements are the same height and width as the content container between their tags; inline elements span the entire width of its container.</span>
-   <span id="a457">\[x\] By default, block elements span the entire width of its container; inline elements are the same height and width as the content contained between their tags.</span>
-   <span id="4df6">\[ \] A `<nav>` element is an example of an inline element. `<header>` is an example of a block element.</span>
-   <span id="15e8">\[ \] A `<span>` is an example of a block element. `<div>` is an example of an inline element.</span>

#### Q7. CSS grid introduced a new length unit, fr, to create flexible grid tracks. Referring to the code sample below, what will the widths of the three columns be?

    .grid {
      display: grid;
      width: 500px;
      grid-template-columns: 50px 1fr 2fr;
    }

-   <span id="517b">\[ \] The first column will have a width of 50px. The second column will be 50px wide and the third column will be 100px wide.</span>
-   <span id="c350">\[x\] The first column will have a width of 50px. The second column will be 150px wide and the third column will be 300px wide.</span>
-   <span id="5495">\[ \] The first column will have a width of 50px. The second column will be 300px wide and the third column will be 150px wide.</span>
-   <span id="58be">\[ \] The first column will have a width of 50px. The second column will be 500px wide and the third column will be 1000px wide.</span>

#### Q8. What is the line-height property primarily used for?

-   <span id="f5fb">\[x\] to control the height of the space between two lines of content</span>
-   <span id="03a3">\[ \] to control the height of the space between heading elements</span>
-   <span id="67d7">\[ \] to control the height of the character size</span>
-   <span id="7238">\[ \] to control the width of the space between characters</span>

#### Q9. Three of these choices are true about class selectors. Which is NOT true?

-   <span id="20d4">\[ \] Multiple classes can be used within the same element.</span>
-   <span id="c4b6">\[ \] The same class can be used multiple times per page.</span>
-   <span id="b46b">\[ \] Class selectors with a leading period</span>
-   <span id="b01a">\[x\] Classes can be used multiple times per page but not within the same element.</span>

#### Q10. There are many properties that can be used to align elements and create page layouts such as float, position, flexbox and grid. Of these four properties, which one should be used to align a global navigation bar which stays fixed at the top of the page?

-   <span id="f95e">\[x\] position</span>
-   <span id="6b6c">\[ \] flexbox</span>
-   <span id="f283">\[ \] grid</span>
-   <span id="e4ae">\[ \] float</span>

#### Q11. In the shorthand example below, which individual background properties are represented?

`background: blue url(image.jpg) no-repeat scroll 0px 0px;`

-   <span id="ad35">\[x\]</span>

<!-- -->

    background-color: blue;
    background-image: url(image.jpg);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 0px 0px;

-   <span id="b674">\[ \]</span>

<!-- -->

    background-color: blue;
    background-img: url(image.jpg);
    background-position: no-repeat;
    background-scroll: scroll;
    background-size: 0px 0px;

-   <span id="da6f">\[ \]</span>

<!-- -->

    background-color: blue;
    background-src: url(image.jpg);
    background-repeat: no-repeat;
    background-wrap: scroll;
    background-position: 0px 0px;

-   <span id="e005">\[ \]</span>

<!-- -->

    background-color: blue;
    background-src: url(image.jpg);
    background-repeat: no-repeat;
    background-scroll: scroll;
    background-position: 0px 0px;

#### Q12. In the following example, according to cascading and specificity rules, what color will the link be?

    .example {
      color: yellow;
    }
    ul li a {
      color: blue;
    }
    ul a {
      color: green;
    }
    a {
      color: red;
    }

    <ul>
      <li><a href="#" class="example">link</a></li>
      <li>list item</li>
      <li>list item</li>
    </ul>

-   <span id="afd9">\[ \] green</span>
-   <span id="f3bd">\[x\] yellow</span>
-   <span id="85a8">\[ \] blue</span>
-   <span id="d453">\[ \] red</span>

#### Q13. When elements overlap, they are ordered on the z-axis (i.e., which element covers another). The z-index property can be used to specify the z-order of overlapping elements. Which set of statements about the z-index property are true?

-   <span id="9371">\[x\] Larger z-index values appear on top of elements with a lower z-index value. Negative and positive numbers can be used. z-index can only be used on positioned elements.</span>
-   <span id="48a2">\[ \] Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index must also be used with positioned elements.</span>
-   <span id="8328">\[ \] Larger z-index values appear on top of elements with a lower z-index value. Only positive numbers can be used. z-index must also be used with positioned elements.</span>
-   <span id="6f2e">\[ \] Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index can be used with or without positioned elements.</span>

#### Q14. What is the difference between the following line-height settings?

    line-height: 20px
    line-height: 2

-   <span id="96d7">\[x\] The value of 20px will set the line-height to 20px. The value of 2 will set the line-height to twice the size of the corresponding font-size value.</span>
-   <span id="ed5a">\[ \] The value of 20px will set the line-height to 20px. The value of 2 is not valid.</span>
-   <span id="ed9d">\[ \] The value of 20px will set the line-height to 20px. The value of 2 will default to a value of 2px.</span>
-   <span id="8591">\[ \] The value of 20px will set the line-height to 20px. The value of 2 will set the line-height to 20% of the corresponding font-size value.</span>

#### Q15. In the following example, what color will paragraph one and paragraph two be? (Alternative: In this example, what color will paragraphs one and two be?)

    <section>
      <p>paragraph one</p>
    </section>

    <p>paragraph two</p>

    section p {
      color: red;
    }
    section + p {
      color: blue;
    }

-   <span id="dd2a">\[ \] Paragraph one will be blue, paragraph two will be red.</span>
-   <span id="3a7c">\[ \] Both paragraphs will be blue.</span>
-   <span id="b3cf">\[x\] Paragraphs one will be red, paragraph two will be blue.</span>
-   <span id="c825">\[ \] Both paragraphs will be red.</span>

#### Q16.What are three valid ways of adding CSS to an HTML page?

-   <span id="4246">\[ \]</span>

<!-- -->

    1. External; CSS is written in a separate file.
    2. Inline; CSS is added to the <head> of the HTML page.
    3. Internal; CSS is included within the HTML tags.

-   <span id="94e5">\[ \]</span>

<!-- -->

    1. External; CSS is written in a separate file and is linked within the <header> element of the HTML file.
    2. Inline; CSS is added to the HTML tag.
    3. Internal; CSS is included within the <header> element of the HTML file.

-   <span id="e8e5">\[ \]</span>

<!-- -->

    1. External; CSS is written in a separate file and is linked within the <head> element of the HTML file.
    2. Internal; CSS is included within the <header> element of the HTML file.
    3. Inline; CSS is added to the HTML tag.

-   <span id="4992">\[x\]</span>

<!-- -->

    1. External; CSS is written in a separate file and is linked within the <head> element of the HTML file .
    2. Inline; CSS is added to the HTML tag.
    3. Internal; CSS is included within the <head> element of the HTML file.

#### Q17. Which of the following is true of the SVG image format? (Alternative: Which statement about the SVG image format is true?)

-   <span id="12ae">\[ \] CSS can be applied to SVGs but JavaScript cannot be.</span>
-   <span id="c2ab">\[ \] SVGs work best for creating 3D graphics.</span>
-   <span id="9ba2">\[x\] SVGs can be created as a vector graphic or coded using SVG specific elements such as &lt;svg&gt;, &lt;line&gt;, and &lt;ellipse&gt;.</span>
-   <span id="c02b">\[ \] SVGs are a HAML-based markup language for creating vector graphics.</span>

#### Q18. In the example below, when will the color pink be applied to the anchor element?

    a:active {
      color: pink;
    }

-   <span id="528b">\[ \] The color of the link will display as pink after its been clicked or if the mouse is hovering over the link.</span>
-   <span id="43b3">\[ \] The color of the link will display as pink on mouse hover.</span>
-   <span id="0448">\[x\] The color of the link will display as pink while the link is being clicked but before the mouse click is released.</span>
-   <span id="45db">\[ \] The color of the link will display as pink before it has been clicked.</span>

#### Q19. To change the color of an SVG using CSS, which property is used?

-   <span id="9f10">\[ \] Use background-fill to set the color inside the object and stroke or border to set the color of the border.</span>
-   <span id="4955">\[ \] The color cannot be changed with CSS.</span>
-   <span id="f7c0">\[ \] Use fill or background to set the color inside the object and stroke to set the color of the border.</span>
-   <span id="724e">\[x\] Use fill to set the color inside the object and stroke to set the color of the border.</span>

#### Q20. When using position: fixed, what will the element always be positioned relative to?

-   <span id="fe9c">\[ \] the closest element with position: relative</span>
-   <span id="61e5">\[x\] the viewport</span>
-   <span id="6260">\[ \] the parent element</span>
-   <span id="50f0">\[ \] the wrapper element</span>

#### Q21. By default, a background image will repeat `\_\_\_`

-   <span id="ff58">\[ \] only if the background-repeat property is set to repeat</span>
-   <span id="e1f3">\[x\] indefinitely, vertically, and horizontally</span>
-   <span id="c6c7">\[ \] indefinitely on the horizontal axis only</span>
-   <span id="129a">\[ \] once, on the x and y axis</span>

#### Q22. When using media queries, media types are used to target a device category. Which choice lists current valid media types?

-   <span id="8014">\[ \] print, screen, aural</span>
-   <span id="3487">\[ \] print, screen, television</span>
-   <span id="64a8">\[x\] print, screen, speech</span>
-   <span id="73f7">\[ \] print, speech, device</span>

#### Q23. How would you make the first letter of every paragraph on the page red?

-   <span id="7012">\[x\] p::first-letter { color: red; }</span>
-   <span id="1b1b">\[ \] p:first-letter { color: red; }</span>
-   <span id="c339">\[ \] first-letter::p { color: red; }</span>
-   <span id="e2f8">\[ \] first-letter:p { color: red; }</span>

#### Q24. In this example, what is the selector, property, and value?

    p {
      color: #000000;
    }

-   <span id="2d3c">\[ \]</span>

<!-- -->

    "p" is the selector
    "#000000" is the property
    "color" is the value

-   <span id="eacd">\[x\]</span>

<!-- -->

    "p" is the selector
    "color" is the property
    "#000000" is the value

-   <span id="b7d2">\[ \]</span>

<!-- -->

    "color" is the selector
    "#000000" is the property
    "#p" is the value

-   <span id="d45e">\[ \]</span>

<!-- -->

    "color" is the selector
    "p" is the property
    "#000000" is the value

#### Q25. What is the rem unit based on?

-   <span id="a6f1">\[ \] The rem unit is relative to the font-size of the p element.</span>
-   <span id="ef56">\[ \] You have to set the value for the rem unit by writing a declaration such as rem { font-size: 1 Spx; }</span>
-   <span id="0f15">\[ \] The rem unit is relative to the font-size of the containing (parent) element.</span>
-   <span id="932b">\[x\] The rem unit is relative to the font-size of the root element of the page.</span>

#### Q26.Which of these would give a block element rounded corners?

-   <span id="6abe">\[ \] corner-curve: 10px</span>
-   <span id="30ca">\[ \] border-corner: 10px</span>
-   <span id="942b">\[x\] border-radius: 10px</span>
-   <span id="f0c6">\[ \] corner-radius: 10px</span>

#### Q27. In the following media query example, what conditions are being targeted?

    @media (min-width: 1024px), screen and (orientation: landscape) { … }

-   <span id="1c01">\[x\] The rule will apply to a device that has either a width of 1024px or wider, or is a screen device in landscape mode.</span>
-   <span id="4328">\[ \] The rule will apply to a device that has a width of 1024px or narrower and is a screen device in landscape mode.</span>
-   <span id="09e2">\[ \] The rule will apply to a device that has a width of 1024px or wider and is a screen device in landscape mode.</span>
-   <span id="0a5b">\[ \] The rule will apply to a device that has a width of 1024px or narrower, or is a screen device in landscape mode.</span>

#### Q28. CSS transform properties are used to change the shape and position of the selected objects. The transform-origin property specifies the location of the element’s transformation origin. By default, what is the location of the origin?

-   <span id="436c">\[x\] the top left corner of the element</span>
-   <span id="2269">\[ \] the center of the element</span>
-   <span id="15a2">\[ \] the top right corner of the element</span>
-   <span id="c037">\[ \] the bottom left of the element</span>

#### Q29. Which of the following is not a valid color value?

-   <span id="1101">\[ \] color: \#000</span>
-   <span id="3038">\[ \] color: rgb(0,0,0)</span>
-   <span id="f7d6">\[ \] color: \#000000</span>
-   <span id="5eff">\[x\] color: 000000</span>

#### Q30. What is the vertical gap between the two elements below?

    <div style="margin-bottom: 2rem;">Div 1</div>
    <div style="margin-top: 2rem;">Div 2</div>

-   <span id="05d8">\[x\] 2rem</span>
-   <span id="1af6">\[ \] 32px</span>
-   <span id="df6e">\[ \] 64px</span>
-   <span id="5ba6">\[ \] 4rem</span>

#### Q31. When using the Flexbox method, what property and value is used to display flex items in a column?

-   <span id="8f2e">\[x\] flex-flow: column; or flex-direction: column</span>
-   <span id="788e">\[ \] flex-flow: column;</span>
-   <span id="6fbe">\[ \] flex-column: auto;</span>
-   <span id="3a1a">\[ \] flex-direction: column;</span>

#### Q32. Which type of declaration will take precedence?

-   <span id="c09f">\[ \] any declarations in user-agent stylesheets</span>
-   <span id="ccd0">\[x\] important declarations in user stylesheets</span>
-   <span id="4014">\[ \] normal declarations in author stylesheets</span>
-   <span id="f49d">\[ \] important declarations in author stylesheets</span>

#### Q33. The flex-direction property is used to specify the direction that flex items are displayed. What are the values used to specify the direction of the items in the following examples?

-   <span id="b727">\[x\] Example 1: `flex-direction: row;` Example 2: `flex-direction: row-reverse;` Example 3: `flex-direction: column;` Example 4: `flex-direction: column-reverse;`</span>
-   <span id="078d">\[ \] Example 1: `flex-direction: row-reverse;` Example 2: `flex-direction: row;` Example 3: `flex-direction: column-reverse;` Example 4: `flex-direction: column;`</span>
-   <span id="e098">\[ \] Example 1: `flex-direction: row;` Example 2: `flex-direction: row-reverse;` Example 3: `flex-direction: column;` Example 4: `flex-direction: reverse-column;`</span>
-   <span id="483c">\[ \] Example 1: `flex-direction: column;` Example 2: `flex-direction: column-reverse;` Example 3: `flex-direction: row;` Example 4: `flex-direction: row-reverse;`</span>

#### Q34. There are two sibling combinators that can be used to select elements contained within the same parent element; the general sibling combinator (~) and the adjacent sibling combinator (+). Referring to example below, which elements will the styles be applied to?

    h2 ~ p {
      color: blue;
    }
    h2 + p {
      background: beige;
    }

    <section>
      <p>paragraph 1</p>
      <h2>Heading</h2>
      <p>paragraph 2</p>
      <p>paragraph 3</p>
    </section>

-   <span id="f0c8">\[ \] Paragraphs 2 and 3 will be blue. The h2 and paragraph 2 will have a beige background.</span>
-   <span id="133d">\[x\] Paragraphs 2, and 3 will be blue, and paragraph 2 will have a beige background.</span>
-   <span id="0eb4">\[x\] Paragraphs 2 and 3 will be blue. Paragraph 2 will have a beige background.</span>
-   <span id="e353">\[ \] Paragraph 2 will be blue. Paragraphs 2 and 3 will have a beige background.</span>

#### Q35. When using flexbox, the “justify-content” property can be used to distribute the space between the flex items along the main axis. Which value should be used to evenly distribute the flex items within the container shown below?

-   <span id="cd2a">\[x\] justify-content: space-around;</span>
-   <span id="bd21">\[ \] justify-content: center;</span>
-   <span id="e2ab">\[ \] justify-content: auto;</span>
-   <span id="9336">\[ \] justify-content: space-between;</span>

#### Q36. There are many advantages to using icon fonts. What is one of those advantages?

-   <span id="b199">\[ \] Icon fonts increase accessibility.</span>
-   <span id="d2bb">\[ \] Icon fonts can be used to replace custom fonts.</span>
-   <span id="f602">\[x\] Icon fonts can be styled with typography related properties such as font-size and color.</span>
-   <span id="06c5">\[ \] Icon fonts are also web safe fonts.</span>

#### Q37. What is the difference between `display:none` and `visibility:hidden`?

-   <span id="07a0">\[ \] Both will hide the element on the page, but display:none has greater browser support. visibility:hidden is a new property and does not have the best browser support</span>
-   <span id="6e5c">\[ \] display:none hides the elements but maintains the space it previously occupied. visibility:hidden will hide the element from view and remove it from the normal flow of the document</span>
-   <span id="9b7b">\[x\] display:none hides the element from view and removes it from the normal flow of the document. visibility:hidden will hide the element but maintains the space it previously occupied.</span>
-   <span id="b618">\[ \] There is no difference; both will hide the element on the page</span>

#### Q38. What selector and property would you use to scale an element to be 50% smaller on hover?

-   <span id="6075">\[ \] element:hover {scale: 0.5;}</span>
-   <span id="b4b8">\[x\] element:hover {transform: scale(0.5);}</span>
-   <span id="766f">\[ \] element:hover {scale: 50%;}</span>
-   <span id="1631">\[ \] element:hover {transform: scale(50%);}</span>

#### Q39. Which statement regarding icon fonts is true?

-   <span id="e052">\[ \] Icon fonts can be inserted only using JavaScript.</span>
-   <span id="3a2f">\[ \] Icon fonts are inserted as inline images.</span>
-   <span id="7abf">\[ \] Icon fonts require browser extensions.</span>
-   <span id="3e84">\[x\] Icon fonts can be styled with typography-related properties such as font-size and color.</span>

#### Q40. The values for the font-weight property can be keywords or numbers. For each numbered value below, what is the associated keyword?

`font-weight: 400; font-weight: 700;`

-   <span id="93d9">\[ \] bold; normal</span>
-   <span id="e81b">\[x\] normal; bold</span>
-   <span id="6844">\[ \] light; normal</span>
-   <span id="a658">\[ \] normal; bolder</span>

#### Q41. If the width of the container is 500 pixels, what would the width of the three columns be in this layout?

`.grid { display: grid; grid-template-columns: 50px 1fr 2fr; }`

-   <span id="6c18">\[x\] 50px, 150px, 300px</span>
-   <span id="feee">\[ \] 50px, 200px, 300px</span>
-   <span id="be1e">\[ \] 50px, 100px, 200px</span>
-   <span id="2d94">\[ \] 50px, 50px, 100px</span>

#### Q42. Using the :nth-child pseudo class, what would be the most efficient way to style every third item in a list, no matter how many items are present, starting with item 2?

-   <span id="d0e6">\[ \]</span>

<!-- -->

    li:nth-child(3 + 2n) {
      margin: 0 5 px;
    }

-   <span id="92af">\[x\]</span>

<!-- -->

    li:nth-child(3n + 2) {
      margin: 0 5 px;
    }

-   <span id="d2fe">\[ \]</span>

<!-- -->

    li:nth-child(2),
    li:nth-child(5),
    li:nth-child(8) {
      margin: 0 5 px;
    }

-   <span id="7dcb">\[ \]</span>

<!-- -->

    li:nth-child(2n + 3) {
      margin: 0 5 px;
    }

#### Q43. Which selector would select only internal links within the current page?

-   <span id="c0b6">\[ \] `a[href="#"] {...}`</span>
-   <span id="e4b5">\[ \] `a[href~="#"]`</span>
-   <span id="3783">\[ \] `a[href^="#"]`</span>
-   <span id="7a55">\[x\] `a[href="#"]`</span>

#### Q44. What is not true about class selectors?

-   <span id="3964">\[x\] Only one class value can be assigned to an element.</span>
-   <span id="9dbc">\[ \] An element can have multiple class value.</span>
-   <span id="d787">\[ \] Class selectors are marked with a leading period.</span>
-   <span id="8b13">\[ \] More than one element can have the same class value.</span>

#### Q45. What is the difference between the margin and padding properties?

-   <span id="8ea3">\[ \] Margin adds space around and inside of an element; padding adds space only inside of an element.</span>
-   <span id="6617">\[x\] Margin adds space around an element; padding adds apace inside of an element.</span>
-   <span id="5b08">\[ \] Margin adds a line around an element, padding adds space inside of an element.</span>
-   <span id="e1d0">\[ \] Margin adds space inside of an element, padding adds space around an element.</span>

#### Q46. What is not a valid way of declaring a padding value of 10 pixels on the top and bottom, and 0 pixels on the left and right?

-   <span id="ccfb">\[x\] padding: 10px 10px 0px 0px;</span>
-   <span id="17cc">\[ \] padding: 10px 0px;</span>
-   <span id="cff2">\[ \] padding: 10px 0;</span>
-   <span id="cedb">\[ \] padding: 10px 0px 10px 0px;</span>

#### Q47. Is there an error in this code? If so, find the best description of the problem

    @font-face {
      font-family: 'Avenir', sans-serif;
      src: url('avenir.woff2') format('woff2'), url('avenir.woff') format('woff');
    }

-   <span id="a817">\[ \] The font file formats are not supported in modern browsers.</span>
-   <span id="81cd">\[ \] The src attribute requires a comma between the URL and format values.</span>
-   <span id="4578">\[ \] There are no errors in the example.</span>
-   <span id="8d73">\[x\] The sans-serif inclusion is problematic.</span>

#### Q48. Which style places an element at a fixed location within its container?

-   <span id="0209">\[x\] position: absolute;</span>
-   <span id="2fe7">\[ \] display: flex;</span>
-   <span id="b051">\[ \] display: block;</span>
-   <span id="f3d5">\[ \] float: left;</span>

#### Q49. The calc() CSS function is often used for calculating relative values. In the example below, what is the specified margin-left value?

    .example {
      margin-left: calc(5% + 5px);
    }

-   <span id="e7bf">\[x\] The left margin value is equal to 5% of its parents element’s width plus 5px</span>
-   <span id="d573">\[ \] The left margin value is equal to 5% of the viewport width plus 5px</span>
-   <span id="9e5c">\[ \] The left margin value is equal to 5% of the closest positioned element’s width plus 5px</span>
-   <span id="e324">\[ \] The left margin value is equal to 5% of the selected element’s width (.example) plus 5px</span>

#### Q50. What is the CSS selector for an `<a>` tag containing the title attribute?

-   <span id="1fdd">\[x\] `a[title]`</span>
-   <span id="bbf2">\[ \] `a > title`</span>
-   <span id="3017">\[ \] `a=title`</span>
-   <span id="149c">\[ \] `a.title`</span>

#### Q51. Which code would you use to absolutely position an element of the logo class?

-   <span id="1d15">\[x\] `.logo { position: absolute; left: 100px; top: 150px; }`</span>
-   <span id="ba83">\[ \] `.logo { position: absolute; margin-left: 100px; margin-top: 150px; }`</span>
-   <span id="69d7">\[ \] `.logo { position: absolute; padding-left: 100px; padding-top: 150px; }`</span>
-   <span id="fbc0">\[ \] `.logo { position: absolute; left-padding: 100px; top-padding: 150px; }`</span>

#### Q52. In this example, what color will Paragraph 1 be?

    p:first-of-type {
      color: red;
    }
    p {
      color: blue;
    }
    .container {
      color: yellow;
    }
    p:first-child {
      color: green;
    }

    <div class="container">
      <h1>Heading</h1>
      <p>Paragraph1</p>
      <p>Paragraph2</p>
    </div>

-   <span id="6161">\[ \] blue</span>
-   <span id="81b0">\[ \] green</span>
-   <span id="458d">\[x\] red</span>
-   <span id="031c">\[ \] yellow</span>

#### Q53. What is the `::placeholder pseudo-element` used for?

-   <span id="3400">\[x\] It is used to format the appearance of placeholder text within a form control.</span>
-   <span id="31df">\[ \] It specifies the default input text for a form control.</span>
-   <span id="a147">\[ \] It writes text content into a hyperlink tooltip.</span>
-   <span id="6d1f">\[ \] It writes text content into any page element.</span>

#### Q54. Which statement is true of the single colon (`:`) or double colon (`::`) notations for pseudo-elements-for example, `::before` and `:before`?

-   <span id="7dfa">\[ \] All browsers support single and double colons for new and older pseudo-elements. So you can use either but it is convention to use single colons for consistency.</span>
-   <span id="33aa">\[ \] In CSS3, the double colon notation (`::`) was introduced to create a consistency between pseudo-elements from pseudo-classes. For newer browsers, use the double colon notation. For IE8 and below, using single colon notation (`:`).</span>
-   <span id="e90e">\[ \] Only the new CSS3 pseudo-elements require the double colon notation while the CSS2 pseudo-elements do not.</span>
-   <span id="4412">\[x\] In CSS3, the double colon notation (`::`) was introduced to differentiate pseudo-elements from pseudo-classes. However, modern browsers support both formats. Older browsers such as IE8 and below do not.</span>

#### Q55. Which choice is not valid value for the font-style property?

-   <span id="c8dd">\[ \] normal</span>
-   <span id="7126">\[ \] italic</span>
-   <span id="7333">\[x\] none</span>
-   <span id="ff26">\[ \] oblique</span>

#### Q56. When would you use the @font-face method?

-   <span id="5fb7">\[ \] to set the font size of the text</span>
-   <span id="ed7c">\[x\] to load custom fonts into stylesheet</span>
-   <span id="32cc">\[ \] to change the name of the font declared in the font-family</span>
-   <span id="3ff4">\[ \] to set the color of the text</span>

#### Q57. When elements within a container overlap, the z-index property can be used to indicate how those items are stacked on top of each other. Which set of statements is true?

-   <span id="e4c9">\[x\]</span>

<!-- -->

    1. Larger z-index values appear on top elements with a lower z-index value.
    2. Negative and positive number can be used.
    3. z-index can be used only on positioned elements.

-   <span id="ce8c">\[ \]</span>

<!-- -->

    1. Smaller z-index values appear on top of elements with a larger z-index value.
    2. Negative and positive numbers can be used.
    3. z-index can be used with or without positioned elements.

-   <span id="c21f">\[ \]</span>

<!-- -->

    1. Smaller z-index values appear on top of elements with a larger z-index value.
    2. Negative and positive number can be used.
    3. z-index must also be used with positioned elements.

-   <span id="6fe9">\[ \]</span>

<!-- -->

    1. Larger z-index values appear on top of elements with a lower z-index value.
    2. Only positive number can be used.
    3. z-index must also be used with positioned elements.

#### Q58. You have a large image that needs to fit into a 400 x 200 pixel area. What should you resize the image to if your users are using Retina displays?

-   <span id="f6fc">\[ \] 2000 x 1400 pixels</span>
-   <span id="ffc8">\[ \] 200 x 100 pixels</span>
-   <span id="c3a5">\[x\] 800 x 400 pixels</span>
-   <span id="4122">\[ \] 400 x 200 pixels</span>

#### Q59. In Chrome’s Developer Tools view, where are the default styles listed?

-   <span id="51e1">\[x\] under the User Agent Stylesheet section on the right</span>
-   <span id="3df4">\[ \] in the third panel under the Layout tab</span>
-   <span id="8f87">\[ \] under the HTML view on the left</span>
-   <span id="2191">\[ \] in the middle panel</span>

#### Q60. While HTML controls document structure, CSS controls \_.

-   <span id="b489">\[ \] semantic meaning</span>
-   <span id="d30f">\[ \] content meaning</span>
-   <span id="9e01">\[ \] document structure</span>
-   <span id="5a6d">\[x\] content appearance</span>

#### Q61. What is the recommended name you should give the folder that holds your project’s images?

-   <span id="fb5f">\[x\] images</span>
-   <span id="f81e">\[ \] \#images</span>
-   <span id="a031">\[ \] Images</span>
-   <span id="724a">\[ \] my images</span>

#### Q62. What is an advantage of using inline CSS?

-   <span id="f8c2">\[ \] It is easier to manage.</span>
-   <span id="abc9">\[x\] It is easier to add multiple styles through it.</span>
-   <span id="eebd">\[ \] It can be used to quickly test local CSS overrides.</span>
-   <span id="e6e7">\[ \] It reduces conflict with other CSS definition methods.</span>

#### Q63.Which W3C status code represents a CSS specification that is fully implemented by modern browsers?

-   <span id="7310">\[ \] Proposed Recommendation</span>
-   <span id="8aaa">\[ \] Working Draft</span>
-   <span id="b7b0">\[x\] Recommendation</span>
-   <span id="745f">\[ \] Candidate Recommendation</span>

#### Q64. Are any of the following declarations invalid?

    color: red; /* declaration A */
    font-size: 1em; /* declaration B */
    padding: 10px 0; /* declaration C */

-   <span id="abfe">\[ \] Declaration A is invalid.</span>
-   <span id="ecfe">\[ \] Declaration B is invalid.</span>
-   <span id="1e37">\[ \] Declaration C is invalid.</span>
-   <span id="321a">\[x\] All declarations are valid.</span>

#### Q65. Which CSS will cause your links to have a solid blue background that changes to semitransparent on hover?

-   <span id="6a34">\[x\]</span>

<!-- -->

    a:link {
      background: #0000ff;
    }
    a:hover {
      background: rgba(0, 0, 255, 0.5);
    }

-   <span id="48e0">\[ \]</span>

<!-- -->

    a {
      color: blue;
    }
    a:hover {
      background: white;
    }

-   <span id="10b4">\[ \]</span>

<!-- -->

    a:link {
      background: blue;
    }
    a:hover {
      color: rgba(0, 0, 255, 0.5);
    }

-   <span id="6558">\[ \]</span>

<!-- -->

    a:hover {
      background: rgba(blue, 50%);
    }
    a:link {
      background: rgba(blue);
    }

#### Q66. Which CSS rule takes precedence over the others listed?

-   <span id="2597">\[ \] `div.sidebar {}`</span>
-   <span id="0013">\[ \] `* {}`</span>
-   <span id="0436">\[x\] `div#sidebar2 p {}`</span>
-   <span id="9751">\[ \] `.sidebar p {}`</span>

#### Q67. The body of your page includes some HTML sections. How will it look with the following CSS applied?

    body {
      background: #ffffff; /* white */
    }
    section {
      background: #0000ff; /* blue */
      height: 200px;
    }

-   <span id="88c7">\[x\] blue sections on a white background</span>
-   <span id="048b">\[ \] Yellow sections on a blue background</span>
-   <span id="7762">\[ \] Green sections on a white background</span>
-   <span id="c8f5">\[ \] blue sections on a red background</span>

#### Q68. Which CSS keyword can you use to override standard source order and specificity rules?

-   <span id="7986">\[ \] `!elevate!`</span>
-   <span id="49cf">\[ \] `*prime`</span>
-   <span id="24b6">\[ \] `override`</span>
-   <span id="796c">\[x\] `!important`</span>

#### Q69. You can use the \_ pseudo-class to set a different color on a link if it was clicked on.

-   <span id="a5ed">\[x\] `a:visited`</span>
-   <span id="ca48">\[ \] `a:hover`</span>
-   <span id="f0d9">\[ \] `a:link`</span>
-   <span id="a568">\[ \] `a:focus`</span>

#### Q70. Which color will look the brightest on your screen, assuming the background is white?

-   <span id="8dc5">\[ \] `background-color: #aaa;`</span>
-   <span id="a3ff">\[ \] `background-color: #999999;`</span>
-   <span id="c586">\[ \] `background-color: rgba(170,170,170,0.5);`</span>
-   <span id="a7ff">\[x\] `background-color: rgba(170,170,170,0.2);`</span>

#### Q71. Which CSS selector can you use to select all elements on your page associated with the two classes header and clear?

-   <span id="f0f4">\[ \] `."header clear" {}`</span>
-   <span id="85c7">\[ \] `header#clear {}`</span>
-   <span id="e453">\[x\] `.header.clear {}`</span>
-   <span id="8711">\[ \] `.header clear {}`</span>

#### Q72. A universal selector is specified using a(n) \_.

-   <span id="052b">\[ \] “h1” string</span>
-   <span id="34cd">\[ \] “a” character</span>
-   <span id="5064">\[ \] “p” character</span>
-   <span id="7a51">\[x\] “\*” character</span>

#### Q73. In the following CSS code, `'h1'` is the \_, while `'color'` is the \_.

    h1 {
      color: red;
    }

-   <span id="ecb8">\[ \] property; declaration</span>
-   <span id="4ebb">\[ \] declaration; rule</span>
-   <span id="cbea">\[ \] “p” character</span>
-   <span id="d058">\[x\] selector; property</span>

#### Q74. What is an alternate way to define the following CSS rule?

    font-weight: bold;

-   <span id="caf3">\[ \] font-weight: 400;</span>
-   <span id="92b1">\[ \] font-weight: medium;</span>
-   <span id="8d5d">\[x\] font-weight: 700;</span>
-   <span id="6381">\[ \] font-weight: Black;</span>

#### Q75. You want your styling to be based on a font stack consisting of three fonts. Where should the generic font for your font family be specified?

-   <span id="62c8">\[ \] It should be the first one on the list.</span>
-   <span id="d367">\[ \] Generic fonts are discouraged from this list.</span>
-   <span id="7b55">\[x\] It should be the last one on the list.</span>
-   <span id="2ce2">\[ \] It should be the second one on the list.</span>

#### Q76. What is one disadvantage of using a web font service?

-   <span id="e9b4">\[ \] It requires you to host font files on your own server.</span>
-   <span id="5b98">\[ \] It uses more of your site’s bandwidth.</span>
-   <span id="5943">\[ \] It offers a narrow selection of custom fonts.</span>
-   <span id="5bf8">\[x\] It is not always a free service.</span>

#### Q77. How do you add Google fonts to your project?

-   <span id="9e31">\[x\] by using an HTML link element referring to a Google-provided CSS</span>
-   <span id="b503">\[ \] by embedding the font file directly into the project’s master JavaScript</span>
-   <span id="cbc6">\[ \] by using a Google-specific CSS syntax that directly links to the desired font file</span>
-   <span id="32c6">\[ \] by using a standard font-face CSS definition sourcing a font file on Google’s servers</span>

#### Q78. which choice is not a valid color?

-   <span id="ba0a">\[ \] color: `#000`;</span>
-   <span id="26fe">\[ \] color: `rgb(0,0,0)`;</span>
-   <span id="b9d1">\[ \] color: `#000000`;</span>
-   <span id="c407">\[x\] color: `000000`;</span>

#### Q79. Using the following HTML and CSS example, what will equivalent pixel value be for .em and .rem elements?

    html {font-size: 10px}
    body {font-size: 2rem;}
    .rem {font-size: 1.5rem;}
    .em {font-size: 2em;}

    <body>
      <p class="rem"></p>
      <p class="em"></p>
    </body>

-   <span id="998d">\[ \] The .rem will be equivalent to 25px; the .em value will be 20px.</span>
-   <span id="ac5f">\[ \] The .rem will be equivalent to 15px; the .em value will be 20px.</span>
-   <span id="725e">\[ \] The .rem will be equivalent to 15px; the .em value will be 40px.</span>
-   <span id="4ecf">\[ \] The .rem will be equivalent to 20px; the .em value will be 40px.</span>

#### Q80. In this example, according to cascading and specificity rules, what color will the link be?

    .example {color: yellow;}
    ul li a {color: blue;}
    ul a {color: green;}
    a {color: red;}

    <ul>
      <li><a href="#" class="example">link</a></li>
      <li>list item</li>
      <li>list item</li>
    </ul>

-   <span id="fc0e">\[ \] blue</span>
-   <span id="24c3">\[ \] red</span>
-   <span id="2417">\[x\] yellow</span>
-   <span id="fe20">\[ \] green</span>

#### Q81. What property is used to adjust the space between text characters?

-   <span id="1fb6">\[ \] `font-style`</span>
-   <span id="5993">\[ \] `text-transform`</span>
-   <span id="4491">\[ \] `font-variant`</span>
-   <span id="2834">\[x\] `letter-spacing`</span>

\#\#\#\# Q82. What is the correct syntax for changing the curse from an arrow to a pointing hand when it interacts with a named element?

-   <span id="2ed7">\[x\] `.element {cursor: pointer;}`</span>
-   <span id="6bc4">\[ \] `.element {cursor: hand;}`</span>
-   <span id="a193">\[ \] `.element {cursor: move-hand;}`</span>
-   <span id="50ed">\[ \] `.element {cursor: pointer-hand;}`</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 3, 2021](https://medium.com/p/6e3e4de7ca53).

<a href="https://medium.com/@bryanguner/css-interview-prep-quiz-6e3e4de7ca53" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
