Adding CSS To Your HTML
=======================

For beginners … very picture heavy since CSS is such a visual discipline!

------------------------------------------------------------------------

### Adding CSS To Your HTML

#### For beginners … very picture heavy since CSS is such a visual discipline!

<figure><img src="https://cdn-images-1.medium.com/max/800/1*3hnCIyXstRSHgYO5-z-51g.png" class="graf-image" /></figure>### Getting CSS Into Your HTML

    <!-- example.html -->
    <!DOCTYPE html>
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
        />
        <link rel="stylesheet" href="/styles/site.css" />
      </head>
      <body></body>
    </html>

-   <span id="36f1">*To connect your CSS sheet to your HTML page, use the link tag like so.*</span>
-   <span id="f743">Many developers use External pre-written CSS stylesheets for consistent design.</span>
-   <span id="af3f">You can connect multiple stylesheets.</span>

### CSS Selectors

-   <span id="2d5b">`CSS Selector` : Applies styles to a specific DOM element(s), there are various types:</span>
-   <span id="29cd">`Type Selectors` : Matches by node name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GOzh0U_yFtsOo9Hq" class="graf-image" /></figure>-   <span id="e624">`Class Selectors` : Matches by class name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*WMQXdyBA2MeUYoVvY0Kjew.png" class="graf-image" /></figure>-   <span id="8c31">`ID Selectors` : Matches by ID name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*uyRa6tM8Jlg648Rl" class="graf-image" /></figure>-   <span id="d011">`Universal Selectors` : Selects all HTML elements on a page.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LfKazZMelOZrcOsp.jpg" class="graf-image" /></figure>-   <span id="e143">`Attribute Selectors` : Matches elements based on the prescence or value of a given attribute. (i.e. a\[title\] will match all a elements with a title attribute)</span>

<!-- -->

    /* Type selector */
    div {
      background-color: #000000;
    }

    /* Class selector */
    .active {
      color: #ffffff;
    }

    /* ID selector */
    #list-1 {
      border: 1px solid gray;
    }

    /* Universal selector */
    * {
      padding: 10px;
    }

    /* Attribute selector */
    a[title] {
      font-size: 2em;
    }

#### **Class Selectors**

-   <span id="45c5">Used to select all elements of a certain class denoted with a `.[class name]`</span>
-   <span id="f9e4">You can assign multiple classes to a DOM element by separating them with a space.</span>

#### **Compound Class Selectors**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*iIOiP-ML_k6g0yTxZQyQ4A.png" class="graf-image" /></figure>-   <span id="bcf1">To get around accidentally selecting elements with multiple classes beyond what we want to grab we can chain dots.</span>
-   <span id="a54c">TO use a compound class selector just append the classes together when referencing them in the CSS.</span>

<!-- -->

    <div class="box yellow"></div>
    <div class="box orange"></div>
    <div class="circle orange"></div>

-   <span id="e8ca">i.e. .box.yellow will select only the first element.</span>
-   <span id="34a4">**KEEP IN MIND** that if you do include a space it will make the selector into a *descendant selector*.</span>

<!-- -->

    h1#heading,
    h2.subheading {
      font-style: italic;
    }

-   <span id="b382">When we want to target all `h1` tags with the id of `heading`.</span>

#### **CSS Combinators**

-   <span id="383a">CSS Combinators are used to combine other selectors into more complex or targeted selectors — they are very powerful!</span>
-   <span id="2805">Be careful not to use too many of them as they will make your CSS far too complex.</span>

#### `Descendant Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/1*YPkGcUc4gf2WtJYdf6Yvmg.png" class="graf-image" /></figure>-   <span id="5e1b">Separated by a space.</span>
-   <span id="5d0b">Selects all descendants of a parent container.</span>

#### `Direct Child Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*SByLFbio2RGGnFHj.jpg" class="graf-image" /></figure>-   <span id="47ef">Indicated with a `>`.</span>
-   <span id="eff3">Different from descendants because it only affects the direct children of an element.</span>

#### CSS:

    .menu > .is-active { background-color: #ffe0b2; }

#### HTML:

    <body> <div class=”menu”> <div class=”is-active”>Belka</div> <div> <div class=”is-active”>Strelka</div> </div> </div> </body> <div class=”is-active”> Laika </div> </body>

-   <span id="b452">Belka would be the only element selected.</span>

#### `Adjacent Sibling Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*m0yPz3xJPeP3br2C.png" class="graf-image" /></figure>-   <span id="5dca">Uses the `+` symbol.</span>
-   <span id="9063">Used for elements that directly follow one another and who both have the same parent.</span>

<!-- -->

    h1 + h2 { font-style: italic;   }  

    //HTML:

    <h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>

    h1 + h2 { font-style: italic;   }  

    <h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>

#### **Pseudo-Classes**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*XfxhRpW1_nd02miTi4s_PA.png" alt="courtesy of Pseudo-classes — CSS: Cascading Style Sheets | MDN (mozilla.org)" class="graf-image" /><figcaption>courtesy of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" class="markup--anchor markup--figure-anchor">Pseudo-classes — CSS: Cascading Style Sheets | MDN (mozilla.org)</a></figcaption></figure>-   <span id="0b5c">`Pseudo-Class` : Specifies a special state of the seleted element(s) and does not refer to any elements or attributes contained in the DOM.</span>
-   <span id="1c1d">Format is a `Selector:Pseudo-Class Name` or `A:B`</span>

<!-- -->

    a:hover { 
    font-family: "Roboto Condensed", sans-serif; 
    color: #4fc3f7;
    text-decoration: none; 
    border-bottom: 2px solid #4fc3f7;
    }

> Some common pseudo-classes that are frequently used are:

-   <span id="1aac">`active` : 'push down', when elements are activated.</span>
-   <span id="587a">`checked` : applies to things like radio buttons or checkbox inputs.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*wg0YeoQ2mZKHWXaa.gif" class="graf-image" /></figure>-   <span id="cf58">`disabled` : any disabled element.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*KmzLwGMr_FsbHF4u.gif" class="graf-image" /></figure>-   <span id="1b81">`first-child` : first element in a group of children/siblings.</span>
-   <span id="eefb">`focus` : elements that have current focus.</span>
-   <span id="c1da">`hover` : elements that have cursor hovering over it.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*X7-ym7Relt83npDe.gif" class="graf-image" /></figure>-   <span id="128b">`invalid` : any form elements in an invalid state from client-side form validation.</span>
-   <span id="8fe0">`last-child` : last element in a group of children/siblings.</span>
-   <span id="fac8">`not(selector)` : elements that do not match the provided selector.</span>
-   <span id="037a">`required` : form elements that are required.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Cs9Jf4O0FHQB7Okc.gif" class="graf-image" /></figure>-   <span id="2d63">`valid` : form elements in a valid state.</span>
-   <span id="7eaf">`visited` : anchor tags of which the user has already visited the URL that the href points to.</span>

#### `Pseudo-Selectors`

-   <span id="571c">Used to create pseudo-elements as children of the elements to which the property applies.</span>
-   <span id="8995">`::after`</span>
-   <span id="9e9b">`::before`</span>

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

-   <span id="22c4">Will add some blue smiley faces before the p tag elements.</span>

#### **CSS Rules**

-   <span id="66b6">`CSS Rule` : Collection of single or compound selectors, a curly brace, zero or more properties</span>
-   <span id="9ec3">`CSS Rule Specificity` : Sometimes CSS rules will contain multiple elements and may have overlapping properties rules for those same elements - there is an algorithm in CSS that calculates which rule takes precedence.</span>
-   <span id="bc57">`The Four Number Calculation`** : listed in increasing order of importance.**</span>

1.  <span id="c45f">Who has the most IDs? If no one, continue.</span>
2.  <span id="3aff">Who has the most classes? If no one, continue.</span>
3.  <span id="b70b">Who has the most tags? If no one, continue.</span>
4.  <span id="59f0">Last Read in the browser wins.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Z0iSQ0bhAiK5gYhk.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*RpC3i4EQM_HDRyUS.png" class="graf-image" /></figure><style>
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

-   <span id="2b20">Coming back to our example where all the CSS Rules have tied, the last step 4 wins out so our element will have a `purple border`.</span>

### CSS: Type, Properties, and Imports

#### **Typography**

-   <span id="af08">`font-family` : change the font.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*8298p-Vlu15C-pdw.png" class="graf-image" /></figure>-   <span id="9771">Remember that not all computers have the same fonts on them.</span>
-   <span id="d248">You can import web fonts via an api by using</span>
-   <span id="8578">`@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');` and pasting it st the top of your CSS file.</span>
-   <span id="82b1">And then reference it in your font-family.</span>
-   <span id="c651">`font-size` : Changes the size of your font.</span>
-   <span id="a7dc">Keep in mind the two kind of units CSS uses:</span>
-   <span id="c034">`Absolute` : `Pixels`, Points, Inches, Centimeters.</span>
-   <span id="7221">`Relative` : Em, Rem.</span>
-   <span id="80e1">Em: Calculating the size relative to the previous div (bubbles down)</span>
-   <span id="6c9e">Rem: Calculates relative to the parent element always.</span>
-   <span id="0f35">`font-style` : Used to set a font to italics.</span>
-   <span id="20a3">`font-weight` : Used to make a font bold.</span>
-   <span id="ba17">`text-align` : Used to align your text to the left, center, or right.</span>
-   <span id="e694">`text-decoration` : Use to put lines above, through, or under text. Lines can be solid, dashed, or wavy!</span>
-   <span id="0777">`text-transform` : Used to set text to all lowercase, uppercase, or capitalize all words.</span>

#### **Background-Images**

-   <span id="a7cc">You can use the background-image property to set a background image for an element.</span>

### CSS: Colors, Borders, and Shadows

#### **Colors**

-   <span id="6887">You can set colors in CSS in three popular ways: by name, by hexadecimal RGB value, and by their decimal RGB value.</span>
-   <span id="1d78">rgba() is used to make an rbg value more transparent, the `a` is used to specify the `alpha channel`.</span>
-   <span id="a422">**Color** : Property used to change the color of text.</span>
-   <span id="6bcb">**Background-Color** : Property to change the backgrounf color of an element.</span>

#### **Borders**

-   <span id="cce0">Borders take three values: The width of the border, the style (i.e. solid, dotted, dashed), color of the border.</span>

#### **Shadows**

-   <span id="6391">There are two kinds of shadows in CSS: `box shadows` and `text shadows`.</span>
-   <span id="7fc1">Box refers to HTML elements.</span>
-   <span id="8c59">Text refers to text.</span>
-   <span id="266d">Shadows take values such as, the horizontal & vertical offsets of the shadow, the blur radius of the shadow, the spread radius, and of course the colors.</span>

### My Blog:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>my resource sharing and blog site ... centered mostly on web development and just a bit of audio production / generally…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Grid Cheat Sheet:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*8cBZz0yj-ND3af2uh7J-dw.png" class="graf-image" /></figure>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 22, 2021](https://medium.com/p/3a17ba25ba82).

<a href="https://medium.com/@bryanguner/adding-css-to-your-html-3a17ba25ba82" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
