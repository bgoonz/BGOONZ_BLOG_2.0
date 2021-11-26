Learn CSS So That Your Site Doesn’t Look Like Garbage
=====================================================

CSS Selectors

------------------------------------------------------------------------

### Learn CSS So That Your Site Doesn’t Look Like Garbage

### CSS Selectors

-   <span id="62c3">`CSS Selector` : Applies styles to a specific DOM element(s), there are various types:</span>
-   <span id="d60d">`Type Selectors` : Matches by node name.</span>
-   <span id="9826">`Class Selectors` : Matches by class name.</span>
-   <span id="10a7">`ID Selectors` : Matches by ID name.</span>
-   <span id="64c0">`Universal Selectors` : Selects all HTML elements on a page.</span>
-   <span id="9c6b">`Attribute Selectors` : Matches elements based on the prescence or value of a given attribute. (i.e. a\[title\] will match all a elements with a title attribute)</span>

<!-- -->

    /* Type selector */
    div {
      background-color: #000000;
    }/* Class selector */
    .active {
      color: #ffffff;
    }/* ID selector */
    #list-1 {
      border: 1px solid gray;
    }/* Universal selector */
    * {
      padding: 10px;
    }/* Attribute selector */
    a[title] {
      font-size: 2em;
    }

**Class Selectors**

-   <span id="fddf">Used to select all elements of a certain class denoted with a `.[class name]`</span>
-   <span id="72af">You can assign multiple classes to a DOM element by separating them with a space.</span>

**Compound Class Selectors**

-   <span id="befd">To get around accidentally selecting elements with multiple classes beyond what we want to grab we can chain dots.</span>
-   <span id="e2c8">TO use a compound class selector just append the classes together when referencing them in the CSS.</span>

<!-- -->

    <div class="box yellow"></div>
    <div class="box orange"></div>
    <div class="circle orange"></div>

-   <span id="7dd3">i.e. .box.yellow will select only the first element.</span>
-   <span id="8904">KEEP IN MIND that if you do include a space it will make the selector into a *descendant selector*.</span>

<!-- -->

    h1#heading,
    h2.subheading {
      font-style: italic;
    }

-   <span id="a8bc">When we want to target all `h1` tags with the id of `heading`.</span>

**CSS Combinators**

-   <span id="c196">CSS Combinators are used to combine other selectors into more complex or targeted selectors — they are very powerful!</span>
-   <span id="71a6">Be careful not to use too many of them as they will make your CSS far too complex.</span>
-   <span id="6032">`Descendant Selectors`</span>
-   <span id="6f41">Separated by a space.</span>
-   <span id="3829">Selects all descendants of a parent container.</span>
-   <span id="e90c">`Direct Child Selectors`</span>
-   <span id="52b5">Indicated with a `>`.</span>
-   <span id="ea8e">Different from descendants because it only affects the direct children of an element.</span>
-   <span id="486f">`.menu > .is-active { background-color: #ffe0b2; }`</span>
-   <span id="96f9">`<body> <div class="menu"> <div class="is-active">Belka</div> <div> <div class="is-active">Strelka</div> </div> </div> </body> <div class="is-active"> Laika </div> </body>`</span>
-   <span id="59ca">Belka would be the only element selected.</span>
-   <span id="0266">`Adjacent Sibling Selectors`</span>
-   <span id="a648">Uses the `+` symbol.</span>
-   <span id="9d79">Used for elements that directly follow one another and who both have the same parent.</span>
-   <span id="4865">`h1 + h2 { font-style: italic; } <h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>`</span>

**Pseudo-Classes**

-   <span id="b638">`Pseudo-Class` : Specifies a special state of the seleted element(s) and does not refer to any elements or attributes contained in the DOM.</span>
-   <span id="0360">Format is a `Selector:Pseudo-Class Name` or `A:B`</span>
-   <span id="91ee">`a:hover { font-family: "Roboto Condensed", sans-serif; color: #4fc3f7; text-decoration: none; border-bottom: 2px solid #4fc3f7; }`</span>
-   <span id="27ac">Some common pseudo-classes that are frequently used are:</span>
-   <span id="9b2b">`active` : ‘push down’, when ele are activated.</span>
-   <span id="5b2f">`checked` : applies to things like radio buttons or checkbox inputs.</span>
-   <span id="58da">`disabled` : any disabled element.</span>
-   <span id="d3bd">`first-child` : first element in a group of children/siblings.</span>
-   <span id="40fc">`focus` : elements that have current focus.</span>
-   <span id="ed43">`hover` : elements that have cursor hovering over it.</span>
-   <span id="6fa2">`invalid` : any form elements in an invalid state from client-side form validation.</span>
-   <span id="7811">`last-child` : last element in a group of children/siblings.</span>
-   <span id="1bdf">`not(selector)` : elements that do not match the provided selector.</span>
-   <span id="be5c">`required` : form elements that are required.</span>
-   <span id="43ed">`valid` : form elements in a valid state.</span>
-   <span id="6460">`visited` : anchor tags of whih the user has already been to the URL that the href points to.</span>

`Pseudo-Selectors`

-   <span id="89e7">Used to create pseudo-elements as children of the elements to which the property applies.</span>
-   <span id="0bef">`::after`</span>
-   <span id="52f9">`::before`</span>

<!-- -->

    <style>
      p::before {
        background-color: lightblue;
        border-right: 4px solid violet;
        content: ":-) ";
        margin-right: 4px;
        padding-left: 4px;
      }
    </style>
    <p>This is the first paragraph</p>
    <p>This is the second paragraph</p>
    <p>This is the third paragraph</p>

-   <span id="a843">Will add some blue smiley faces before the p tag elements.</span>

**CSS Rules**

-   <span id="919a">`CSS Rule` : Collection of single or compound selectors, a curly brace, zero or more properties</span>
-   <span id="555f">`CSS Rule Specificity` : Sometimes CSS rules will contain multiple elements and may have overlapping properties rules for those same elements - there is an algorithm in CSS that calculates which rule takes precedence.</span>
-   <span id="a1db">`The Four Number Calculation` : listed in increasing order of importance.</span>

Who has the most IDs? If no one, continue.

Who has the most classes? If no one, continue.

Who has the most tags? If no one, continue.

Last Read in the browser wins.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Ub47AaMXuT1m8_T-" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*t0oXzsLPxpMwNbKo.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*2xr0vyHwf6UN905l" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*oq83hQ5qvtT6gDd9.png" class="graf-image" /></figure><style>
      .box {
        width: 50px;
        height: 50px;
        border: 1px solid black;
      }
      .orange {
        background-color: orange;
      }
      .yellow {
        background-color: yellow;
        border: 1px solid purple;
      }
    </style>
    <div class="box yellow"></div>
    <div class="box orange"></div>

-   <span id="1939">Coming back to our example where all the CSS Rules have tied, the last step 4 wins out so our element will have a `purple border`.</span>

------------------------------------------------------------------------

### CSS: Type, Properties, and Imports

**Typography**

-   <span id="d6fc">`font-family` : change the font.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ssVcT1Bd9Edfo6KF" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*WmqUyKiumM8RCJQo.png" class="graf-image" /></figure>-   <span id="daba">Remember that not all computers have the same fonts on them.</span>
-   <span id="0aa8">You can import web fonts via an api by using</span>
-   <span id="0c5d">`@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');` and pasting it st the top of your CSS file.</span>
-   <span id="d8ff">And then reference it in your font-family.</span>
-   <span id="ee9f">`font-size` : Changes the size of your font.</span>
-   <span id="782e">Keep in mind the two kind of units CSS uses:</span>
-   <span id="c4f7">`Absolute` : `Pixels`, Points, Inches, Centimeters.</span>
-   <span id="2884">`Relative` : Em, Rem.</span>
-   <span id="f9b5">Em: Calulating the size relative to the previous div (bubbles down)</span>
-   <span id="5a5d">Rem: Calulates relative to the parent element always.</span>
-   <span id="79b0">`font-style` : Used to set a font to italics.</span>
-   <span id="f464">`font-weight` : Used to make a font bold.</span>
-   <span id="3d56">`text-align` : Used to align your text to the left, center, or right.</span>
-   <span id="4cbc">`text-decoration` : Use to put lines above, through, or under text. Lines can be solid, dashed, or wavy!</span>
-   <span id="1c96">`text-transform` : Used to set text to all lowercase, uppercase, or capitalize all words.</span>

**Background-Images**

-   <span id="13eb">You can use the background-image property to set a background image for an element.</span>

------------------------------------------------------------------------

### CSS: Colors, Borders, and Shadows

**Colors**

-   <span id="6bed">You can set colors in CSS in three popular ways: by name, by hexadecimal RGB value, and by their decimal RGB value.</span>
-   <span id="38fb">rgba() is used to make an rbg value more transparent, the `a` is used to specify the `alpha channel`.</span>
-   <span id="cb05">**Color** : Property used to change the color of text.</span>
-   <span id="6f05">**Background-Color** : Property to change the backgrounf color of an element.</span>

**Borders**

-   <span id="d922">Borders take three values: The width of the border, the style (i.e. solid, dotted, dashed), color of the border.</span>

**Shadows**

-   <span id="bccb">There are two kinds of shadows in CSS: `box shadows` and `text shadows`.</span>
-   <span id="7fd2">Box refers to HTML elements.</span>
-   <span id="f3a7">Text refers to text.</span>
-   <span id="2a53">Shadows take values such as, the horizontal & vertical offsets of the shadow, the blur radius of the shadow, the spread radius, and of course the colors.</span>

------------------------------------------------------------------------

### The Box Model

**Box Model** : A concept that basically boils down that every DOM element has a box around it.

Imagine a gift, inside is the gift, wrapped in foam all around (padding), and the giftbox outside of it (border) and then a wrapping paper on the giftbox (margin).- For items that are using `block` as it’s display, the browser will follow these rules to layout the element: - The box fills 100% of the available container space. - Every new box takes on a new line/row. - Width and Height properties are respected. - Padding, Margin, and Border will push other elements away from the box. - Certain elements have `block` as their default display, such as: divs, headers, and paragraphs.- For items that are using `inline` as it’s display, the browser will follow these rules to layout the element: - Each box appears in a single line until it fills up the space. - Width and height are **not** respected. - Padding, Margin, and Border are applied but they **do not** push other elements away from the box. - Certain elements have `inline` as their default display, such as: span tags, anchors, and images.

**Standard Box Model vs Border-Box**- As per the standard Box Model, the width and height pertains to the content of the box and excludes any additional padding, borders, and margins.

This bothered many programmers so they created the **border box** to include the calculation of the entire box’s height and width.

**Inline-Block**- Inline-block uses the best features of both `block` and `inline`. - Elements still get laid out left to right. - Layout takes into account specified width and height.

**Padding**- Padding applies padding to every side of a box. It is shorthand for four padding properties in this order: `padding-top`, `padding-right`, `padding-bottom`, `padding-left` (clockwise!)

**Border**- Border applies a border on all sides of an element. It takes three values in this order: `border-width`, `border-style`, `border-color`. - All three properties can be broken down in the four sides clockwise: top, right, bottom, left.

**Margin**- Margin sets margins on every side of an element. It takes four values in this order: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`. - You can use `margin: 0 auto` to center an element.

### Positioning

-   <span id="d380">The `position` property allows us to set the position of elements on a page and is an integral part of creatnig a Web page layout.</span>
-   <span id="1bd6">It accepts five values: `static`, `relative`, `absolute`, `fixed`, `sticky`.</span>
-   <span id="0b53">Every property (minus `static`) is used with: `top`, `right`, `bottom`, and `left` to position an element on a page.</span>

**Static Positioning**

-   <span id="7aa9">The default position value of page elements.</span>
-   <span id="700a">Most likely will not use static that much.</span>

**Relative Positioning**

-   <span id="adc3">Remains in it’s original position in the page flow.</span>
-   <span id="9533">It is positioned *RELATIVE* to the it’s *ORIGINAL PLACE* on the page flow.</span>
-   <span id="8c0b">Creates a **stacking context** : overlapping elements whose order can be set by the z-index property.</span>

<!-- -->

    #pink-box {
      background-color: #ff69b4;
      bottom: 0;
      left: -20px;
      position: relative;
      right: 0;
      top: 0;
    }

<figure><img src="https://cdn-images-1.medium.com/max/800/0*mMCUEQ94L4_zxwNc" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*TgjpfTmdczESRAfU.png" class="graf-image" /></figure>**Absolute Positioning**

-   <span id="d597">Absolute elements are removed from the normal page flow and other elements around it act like it’s not there. (how we can easily achieve some layering)</span>
-   <span id="eb5b">Here are some examples to illustration absolute positioning:</span>

<!-- -->

    .container {
      background-color: #2b2d2f;
      position: relative;
    }#pink-box {
      position: absolute;
      top: 60px;
    }

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Mu1E5D10RQaBpzms" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*6jvV-NnX5HS5PuVT.png" class="graf-image" /></figure>-   <span id="adb4">Note that the container ele has a relative positioning — this is so that any changes made to the absolute positioned children will be positioned from it’s top-left corner.</span>
-   <span id="be4f">Note that because we removed the pink from the normal page flow, the container has now shifted the blue box to where the pink box should have been — which is why it is now layered beneath the pink.</span>

<!-- -->

    .container {
      background-color: #2b2d2f;
      position: relative;
    }#pink-box {
      position: absolute;
      top: 60px;
    }#blue-box {
      position: absolute;
    }

<figure><img src="https://cdn-images-1.medium.com/max/800/0*phWx-191VVQ5pRF9" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*o_T8meZgQSu7kxfs.png" class="graf-image" /></figure>-   <span id="9e42">As you can see here, since we have also taken the blue box out of the normal page flow by declaring it as absoutely positioned it now overlaps over the pink box.</span>

<!-- -->

    .container {
      background-color: #2b2d2f;
      position: relative;
    }#pink-box {
      background-color: #ff69b4;
      bottom: 60px;
      position: absolute;
    }

<figure><img src="https://cdn-images-1.medium.com/max/800/0*HJbtARqC1qmeWTHS" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*rRNttTlXfnhqERYU.png" class="graf-image" /></figure>-   <span id="528a">Example where the absolute element has it’s bottom property modified.</span>

<!-- -->

    .container {
      background-color: #2b2d2f;
    }#pink-box {
      background-color: #ff69b4;
      bottom: 60px;
      position: absolute;
    }

<figure><img src="https://cdn-images-1.medium.com/max/800/0*e7H6ImFUmcPGMaoa" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*Al6ILt84EC0bhjnK.png" class="graf-image" /></figure>-   <span id="f676">If we removed the container’s relative position. Our absolute unit would look for the nearest parent which would be the document itself.</span>

**Fixed Positioning**

-   <span id="fe31">Another positioning that removes it’s element from the page flow, and automatically positions it’s parent as the HTML doc itself.</span>
-   <span id="2388">Fixed also uses top, right, bottom, and left.</span>
-   <span id="3903">Useful for things like nav bars or other features we want to keep visible as the user scrolls.</span>

**Sticky Positioning**

-   <span id="8ae2">Remains in it’s original position in the page flow, and it is positioned relative to it’s closest block-level ancestor and any *scrolling* ancestors.</span>
-   <span id="abe8">Behaves like a relatively positioned element until the point at which you would normally scroll past it’s viewport — then it sticks!</span>
-   <span id="7ac0">It is positioned with top, right, bottom, and left.</span>
-   <span id="9080">A good example are headers in a scrollable list.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*BRVlqobKK0IZtnXq" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*jQQJYWVoQY2eNANS.gif" class="graf-image" /></figure>

------------------------------------------------------------------------

### Flexible Box Model

-   <span id="46aa">Flexbox is a **CSS module** that provides a convenient way for us to display items inside a flexible container so that the layout is responsive.</span>
-   <span id="ebb3">Float was used back in the day to display position of elements in a container.</span>
-   <span id="2a8e">A very inconvenient aspect of float is the need to *clear* the float.</span>
-   <span id="ba98">To ‘clear’ a float we need to set up a ghost div to properly align — this is already sounds so inefficient.</span>

**Using Flexbox**

-   <span id="e23b">Flexbox automatically resizes a container element to fit the viewport size without needing to use breakpoints.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*_SXOQpq3yrywWCcL" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*IBJIWQ7Z_23eERWn.png" class="graf-image" /></figure>-   <span id="b505">Flexbox layout applies styles to the parent element, and it’s children.</span>

<!-- -->

    .container {
      display: flex; /*sets display to use flex*/
      flex-wrap: wrap; /*bc flex tries to fit everything into one line, use wrap to have the elements wrap to the next line*/
      flex-direction: row; /*lets us create either rows or columns*/
    }

-   <span id="4898">`flex-flow` can be used to combine wrap and direction.</span>
-   <span id="acdb">`justify-content` used to define the alignment of flex items along the main axis.</span>
-   <span id="68d6">`align-items` used to define the alignment on the Y-axis.</span>
-   <span id="f0d8">`align-content` redistributes extra space on the cross axis.</span>
-   <span id="531c">By default, flex items will appear in the order they are added to the DOM, but we can use the `order` property to change that.</span>
-   <span id="39b0">Some other properties we can use on flex items are:</span>
-   <span id="ec38">`flex-grow` : dictates amount of avail. space the item should take up.</span>
-   <span id="0916">`flex-shrink` : defines the ability for a flex item to shrink.</span>
-   <span id="4dda">`flex-basis` : Default size of an element before the remaining space is distributed.</span>
-   <span id="d9f2">`flex` : shorthand for grow, shrink and basis.</span>
-   <span id="f127">`align-self` : Overrides default alignment in the container.</span>

------------------------------------------------------------------------

### Grid Layout

-   <span id="cc4f">CSS Grid is a 2d layout system that let’s use create a grid with columns and rows purely using Vanilla CSS. (flex is one dimensional)</span>

**Bootstrap vs CSS Grid**

-   <span id="4af2">Bootstrap was a front-end library commonly used to create grid layouts but now CSS grid provides greater flexibility and control.</span>
-   <span id="e404">Grid applies style to a parent container and it’s child elements.</span>

<!-- -->

    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
        "header header header"
        "main . sidebar"
        "footer footer footer";  grid-column-gap: 20px;
      grid-row-gap: 30px;
      justify-items: stretch;
      align-items: stretch;
      justify-content: stretch;
      align-content: stretch;
    }.item-1 {
      grid-area: header;
    }
    .item-2 {
      grid-area: main;
    }
    .item-3 {
      grid-area: sidebar;
    }
    .item-4 {
      grid-area: footer;
    }

-   <span id="26c3">Columns and Rows can be defined with: pixels, percentages, auto, named grid lines, using `repeat`, fractions.</span>
-   <span id="a117">`Grid Template Areas` gives us a handy way to map out and visualize areas of the grid layout.</span>
-   <span id="17ae">Combine areas with templates to define how much space an area should take up.</span>
-   <span id="f90a">`Grid Gaps` can be used to create ‘gutters’ between grid item.s</span>
-   <span id="d7c0">The way we have defined our grid with `grid-templates` and `areas` are considered **explicit**.</span>
-   <span id="cef6">We can also `implicitly` define grids.</span>

<!-- -->

    .grid-container {
      display: grid;
      grid-template-columns: 100px 100px 100px 100px;
      grid-template-rows: 50px 50px 50px;
      grid-auto-columns: 100px;
      grid-auto-rows: 50px;
    }

-   <span id="e6d3">Any grid items that aren’t explicity placed are automatically placed or *re-flowed*</span>

**Spanning Columns & Rows**

-   <span id="98c8">We can use the following properties to take up a specified num of cols and rows.</span>
-   <span id="0208">`grid-column-start`</span>
-   <span id="437a">`grid-column-end`</span>
-   <span id="7d03">`grid-row-start`</span>
-   <span id="0a8e">`grid-row-end`</span>
-   <span id="c62b">All four properties can take any of the following values: the line number, span \#, span name, auto.</span>

<!-- -->

    .item-1 {
      grid-row-start: row2-start; /* Item starts at row line named "row2-start" */
      grid-row-end: 5; /* Item ends at row line 5 */
      grid-column-start: 1; /* Item starts at column line 1 */
      grid-column-end: three; /* Item ends at column line named "three" */
    }.item-2 {
      grid-row-start: 1; /* Item starts at row line 1 */
      grid-row-end: span 2; /* Item spans two rows and ends at row line 3 */
      grid-column-start: 3; /* Item starts at column line 3 */
      grid-column-end: span col5-start; /* Item spans and ends at line named "col5-start" */
    }

**Grid Areas**

-   <span id="9dd0">We use the grid areas in conjunction with grid-container property to **define sections of the layout**.</span>
-   <span id="5ec2">We can then assign named sections to individual element’s css rules.</span>

**Justify & Align Self**

-   <span id="06b0">Justify items and Align Items can be used to align all grid items at once.</span>
-   <span id="53f5">**Justify Self** is used to align self on the row.</span>
-   <span id="f6b1">It can take four values: start, end, center, stretch.</span>
-   <span id="72bb">**Align Self** is used to align self on the column.</span>
-   <span id="d5d4">It can take four values: start, end, center, stretch.</span>

------------------------------------------------------------------------

**CSS Hover Effect and Handling**

**Overflow**

`css .btn { background-color: #00bfff; color: #ffffff; border-radius: 10px; padding: 1.5rem; }`

`.btn--active:hover { cursor: pointer; transform: translateY(-0.25rem);`

`/* Moves our button up/down on the Y axis */ }`

The Pseudo Class Selector `hover` activates when the cursor goes over the selected element.

**Content Overflow**- You can apply an `overflow` content property to an element if it’s inner contents are spilling over.

There are three members in the overflow family: — `overflow-x` : Apply horizontally. - `overflow-y` : Apply vertically. - `overflow` : Apply both directions.

### Transitions

-   <span id="b5a7">Transitions provide a way to control animation speed when changing CSS properties.</span>
-   <span id="2e1b">**Implicit Transitions** : Animations that involve transitioning between two states.</span>

**Defining Transitions**

-   <span id="bbd6">`transition-property` : specifies the name of the CSS property to apply the transition.</span>
-   <span id="6340">`transition-duration` : during of the transition.</span>
-   <span id="7463">`transition-delay` : time before the transition should start.</span>

**Examples** :

    #delay {
      font-size: 14px;
      transition-property: font-size;
      transition-duration: 4s;
      transition-delay: 2s;
    }#delay:hover {
      font-size: 36px;
    }

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Z6AbWnbmbFfu-tSM" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*_6nSuCOR34-6ET7n.gif" class="graf-image" /></figure>-   <span id="e6c9">After a delay of two seconds, a four second transition begins where the font size goes from 36px to 14px.</span>

<!-- -->

    .box {
      border-style: solid;
      border-width: 1px;
      display: block;
      width: 100px;
      height: 100px;
      background-color: #0000ff;
      transition: width 2s, height 2s, background-color 2s, transform 2s;
    }.box:hover {
      background-color: #ffcccc;
      width: 200px;
      height: 200px;
      transform: rotate(180deg);
    }

<figure><img src="https://cdn-images-1.medium.com/max/800/0*PH5_YmVDFVGqWGjO" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*Ya7xiy0AqJaJ9RPq.gif" class="graf-image" /></figure>-   <span id="c336">When the mouse hovers over a box, it spins due to the rotate transform. Width and height change and also the bg color.</span>

------------------------------------------------------------------------

### BEM Guidelines

-   <span id="6474">BEM was created as a guideline to solve the issue of loose standards around CSS naming conventions.</span>
-   <span id="6d0c">**BEM** stands for `block`, `element`, `modifier`.</span>
-   <span id="3eb9">**Block**</span>
-   <span id="f6b4">A standalone entity that is meaningful on it’s own.</span>
-   <span id="7e86">Can be nested and interact with one another.</span>
-   <span id="338e">Holistic entities without DOM rep can be blocks.</span>
-   <span id="f2f0">May consist latin letters, digits, and dashes.</span>
-   <span id="3bfb">Any DOM node can be a block if it accepts a class name.</span>
-   <span id="5c9b">**Element**</span>
-   <span id="1b95">Part of a block and has no standalone meaning.</span>
-   <span id="b5cf">Any element that is semantically tied to a block.</span>
-   <span id="10e2">May consist latin letters, digits, and dashes.</span>
-   <span id="9b79">Formed by using two underscores after it’s block name.</span>
-   <span id="e282">Any DOM node within a block can be an element.</span>
-   <span id="a0dc">Element classes should be used independently.</span>
-   <span id="26f1">**Modifier**</span>
-   <span id="6642">A flag on blocks or elements. Use them to change appearance, behavior or state.</span>
-   <span id="6cca">Extra class name to add onto blocks or elements.</span>
-   <span id="745f">Add mods only to the elements they modify.</span>
-   <span id="6416">Modifier names may consist of Latin letters, digits, dashes and underscores.</span>
-   <span id="f940">Written with two dashes.</span>

**BEM Example**

    <form class="form form--theme-xmas form--simple">
      <input class="form__input" type="text" />
      <input class="form__submit form__submit--disabled" type="submit" />
    </form>/* block selector */
    .form {
    }/* block modifier selector */
    .form--theme-xmas {
    }/* block modifier selector */
    .form--simple {
    }/* element selector */
    .form__input {
    }/* element selector */
    .form__submit {
    }/* element modifier selector */
    .form__submit--disabled {
    }

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 6, 2021](https://medium.com/p/938871b4521a).

<a href="https://medium.com/@bryanguner/learn-css-so-that-your-site-doesnt-look-like-garbage-938871b4521a" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
