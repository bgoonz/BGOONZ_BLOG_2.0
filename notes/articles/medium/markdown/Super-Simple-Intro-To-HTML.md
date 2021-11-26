Super Simple Intro To HTML
==========================

What is HTML, CSS & JS and why do we need all three?

------------------------------------------------------------------------

### Super Simple Intro To HTML

#### What is HTML, CSS & JS and why do we need all three?

<figure><img src="https://cdn-images-1.medium.com/max/800/0*KxF-AuqgX7UklUa4.png" class="graf-image" /></figure>HTML stands for “Hypertext Markup Language”. Basically, HTML is the structure for the website, words, bullet points, data tables, etc. CSS stands for “Cascading Style Sheets” which means it’s the “Style” it’s how to make your website look professional, and look visually appealing. JS is how to make your website actually \*\*work\*\*.

For example, if you created something like YouTube and one of the options you can watch videos, you used HTML for the title, you used CSS for the color/s, and you have to make it actually work! So when you click on it it will run the video. This is an example of the three programming languages working in unison to form an experience you’re already familiar with if you’re reading this…

**I mean most likely… unless you printed it because you hate trees.**

— — — — — — — — — — -

### What are Tags and Attributes?

Tags and attributes are the basis of HTML.

They work together but perform different functions — it is worth investing 2 minutes in **differentiating the two**.

#### What Are HTML Tags?

<a href="https://html.com/tags/" class="markup--anchor markup--p-anchor">Tags</a> are used to **mark up the start of an HTML element** and they are usually enclosed in angle brackets. An example of a tag is: `<h1>`.

Most tags must be opened `<h1>` and closed `</h1>` in order to function.

#### What are HTML Attributes?

<a href="https://html.com/attributes/" class="markup--anchor markup--p-anchor">Attributes</a> contain **additional pieces of information**. Attributes take the form of an opening tag and additional info is **placed inside**.

An example of an attribute is:

`<img src="mydog.jpg" alt="A photo of my dog.">`

In this instance, the image source (src) and the alt text (alt) are attributes of the `<img>` tag.

#### Golden Rules To Remember

1.  <span id="e12a">The vast majority of tags must be **opened** (`<tag>`) and **closed** (`</tag>`) with the element information such as a title or text resting between the tags.</span>
2.  <span id="c99f">When using multiple tags, the tags must be **closed in the order in which they were opened**. For example:</span>
3.  <span id="9eb5">`<strong><em>This is really important!</em></strong>`</span>

Let’s have a look at how CodePen works, firstly, you need to go to their website. After that, you must create an account. After you do that, You will see something like this

### How to get started

If you’re using Visual Studio Code, congrats! There is Emmet support built into VSCode, so you won’t need to install any extensions. If you’re working in Atom you’ll need to install the Emmet plugin, which can be <a href="https://atom.io/packages/emmet" class="markup--anchor markup--p-anchor">found here</a>.

### Basic Syntax

***HTML Boilerplate***

If you’ve been working in VSCode, you’ve probably seen Emmet syntax highlighting when working in HTML documents. In my opinion, the most convenient Emmet shortcut is ***html:5***. This will create an HTML boilerplate, and fill out metadata tags in the head of your document.

    html:5

<figure><img src="https://cdn-images-1.medium.com/max/800/0*oDrxfgtO2WE9_Z6d.png" class="graf-image" /></figure>Emmet Abbreviation for different HTML boilerplates.

**When you see the auto complete as pictured above you can hit tab to auto fill the boilerplate html document.**

That one small shortcut autogenerates all this metadata and head and body tags:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LgiaI-W7QB4mtifR.png" class="graf-image" /></figure>#### Here’s some slightly more advanced boilerplate for you to use as a starting point in your projects.

### HTML Language

**Chapter 1: Formatting text**

**Tags in HTML:** Tags are one of the most important parts in an HTML document. (We will get to what HTML document is after we know what tags are). HTML uses some predefined tags which tells the browser about content display property, that is how to display a particular given content. For Example, to create a paragraph, one must use the paragraph tags(&lt;p&gt; &lt;/p&gt;) and to insert an image one must use the img tags(&lt;img /&gt;).

There are generally two types of tags in HTML:

1.  <span id="9de4">**Paired tags:** These tags come in pairs. That is they have both opening (&lt; &gt;) and closing(&lt;/ &gt;) tags.</span>
2.  <span id="4b61">**Singular tags:** These tags do not required to be closed</span>

> i.e.

    <hr> 
    <p> The tag above me is a horizontal line that doesn't need a closing tag </p>

HTML tags have two main types: **block-level** and **inline tags**.

1.  <span id="bd59">Block-level elements take up the full available space and always start a new line in the document. Headings and paragraphs are a great example of block tags.</span>
2.  <span id="2479">Inline elements only take up as much space as they need and don’t start a new line on the page. They usually serve to format the inner contents of block-level elements. Links and emphasized strings are good examples of inline tags.</span>

### Block-Level Tags

The three block level tags every HTML document needs to contain are **&lt;html&gt;**, **&lt;head&gt;**, and **&lt;body&gt;**.

1.  <span id="bd5d">The **&lt;html&gt;&lt;/html&gt;** tag is the highest level element that encloses every HTML page.</span>
2.  <span id="c015">The **&lt;head&gt;&lt;/head&gt;** tag holds meta information such as the page’s title and charset.</span>
3.  <span id="5ca8">Finally, the **&lt;body&gt;&lt;/body&gt;** tag encloses all the content that appears on the page.</span>

-   <span id="7864">Paragraphs are enclosed by ***&lt;p&gt;&lt;/p&gt;***, while blockquotes use the ***&lt;blockquote&gt;&lt;/blockquote&gt;*** tag.</span>
-   <span id="82ad">Divisions are bigger content sections that typically contain several paragraphs, images, sometimes blockquotes, and other smaller elements. We can mark them up using the ***&lt;div&gt;&lt;/div&gt;*** tag. A div element can contain another div tag inside it as well.</span>
-   <span id="39c6">You may also use ***&lt;ol&gt;&lt;/ol&gt;*** tags for ordered lists and ***&lt;ul&gt;&lt;/ul&gt;*** for unordered ones. Individual list items must be enclosed by the ***&lt;li&gt;&lt;/li&gt;*** tag. For example, this is how a basic unordered list looks like in HTML:</span>

1.  <span id="e470">**&lt;ul&gt;**</span>
2.  <span id="b8c5">**&lt;li&gt;**List item 1**&lt;/li&gt;**</span>
3.  <span id="3c1d">**&lt;li&gt;**List item 2**&lt;/li&gt;**</span>
4.  <span id="97b4">**&lt;li&gt;**List item 3**&lt;/li&gt;**</span>
5.  <span id="b59a">**&lt;/ul&gt;**</span>

### **Structure of an HTML Document**

An HTML Document is mainly divided into two parts:

-   <span id="0424">**HEAD**: This contains the information about the HTML document. For Example, Title of the page, version of HTML, Meta-Data etc.</span>

HTML TAG Specifies an html document. The HTML element (or HTML root element) represents the root of an HTML document. All other elements must be descendants of this element. Since the element is the first in a document, it is called the root element.

Although this tag can be implied, or not required, with HTML, it is required to be opened and closed in XHTML.

-   <span id="83fe">Divisions are bigger content sections that typically contain several paragraphs, images, sometimes blockquotes, and other smaller elements. We can mark them up using the ***&lt;div&gt;&lt;/div&gt;*** tag. A div element can contain another div tag inside it as well.</span>
-   <span id="9d53">You may also use ***&lt;ol&gt;&lt;/ol&gt;*** tags for ordered lists and ***&lt;ul&gt;&lt;/ul&gt;*** for unordered ones. Individual list items must be enclosed by the ***&lt;li&gt;&lt;/li&gt;*** tag. For example, this is how a basic unordered list looks like in HTML:</span>

1.  <span id="4097">**&lt;ul&gt;**</span>
2.  <span id="0103">**&lt;li&gt;**List item 1**&lt;/li&gt;**</span>
3.  <span id="1de2">**&lt;li&gt;**List item 2**&lt;/li&gt;**</span>
4.  <span id="dad0">**&lt;li&gt;**List item 3**&lt;/li&gt;**</span>
5.  <span id="592f">**&lt;/ul&gt;**</span>

### Inline Tags

Many inline tags are used to format text. For example, a **&lt;strong&gt;&lt;/strong&gt;** tag would render an element in **bold**, whereas *&lt;em&gt;&lt;/em&gt;* tags would show it in *italics*.

Hyperlinks are also inline elements that require ***&lt;a&gt;&lt;/a&gt;*** tags and **href** attributes to indicate the link’s destination:

1.  <span id="f67d">**&lt;a** **href=**”https://example.com/"**&gt;**Click me!**&lt;/a&gt;**</span>

Images are inline elements too. You can add one using ***&lt;img&gt;*** without any closing tag. But you will also need to use the ***src*** attribute to specify the image path, for example:

1.  <span id="3924">**&lt;img** **src=**”/images/example.jpg” **alt=**”Example image”**&gt;**</span>

#### **BODY**: This contains everything you want to display on the Web Page.

    <body>

    <! — Everything the user sees on the webpage goes here! — ps… this is a comment →

    </body>

Let us now have a look on the basic structure of HTML. That is the code which is must for every webpage to have:

***&lt;!DOCTYPE html&gt;***

#### Here is some boilerplate html you can use as a starting point:!!Every Webpage must contain this code.!!

------------------------------------------------------------------------

### **&lt;!DOCTYPE html&gt;**

------------------------------------------------------------------------

Below is the complete explanation of each of the tags used in the above piece of HTML code:

**&lt;!DOCTYPE html&gt;:** This tag is used to tells the HTML version. This currently tells that the version is HTML 5.

> ***&lt;html&gt;*:** This is called HTML root element and used to wrap all the code.

> **&lt;head&gt;:** Head tag contains metadata, title, page CSS etc. All the HTML elements that can be used inside the &lt;head&gt; element are:

> **&lt;body&gt;:** Body tag is used to enclosed all the data which a web page has from texts to links. All of the content that you see rendered in the browser is contained within this element.

### Bold Text:

&lt;b&gt; **this is bold** &lt;/b&gt;

&lt;strong&gt; ⇐ this is for strong, emergency emotions.

\_\_\_\_\_\_\_\_\_\_\_

**HEADING/S:**

*6 types from largest(h1) to smallest (h6)*

&lt;h1&gt; &lt;h2&gt; &lt;h3&gt; &lt;h4&gt; &lt;h5&gt; &lt;h6&gt;

\_\_\_\_\_\_\_\_\_\_\_

**ITALICS:** There are two ways to use it, the first one is the &lt;i&gt; tag and the second one is the &lt;em&gt; tag. They both italicize the text<a href="https://emojipedia.org/person-shrugging/" class="markup--anchor markup--p-anchor">🤷</a>

&lt;i&gt; *this is fancy text that’s too good to for us*&lt;/i&gt;

\_\_\_\_\_\_\_\_\_\_\_

**PARAGRAPHS:** In order to make Paragraphs, just add &lt;p&gt;.

&lt;p&gt; Hi there my name is Jason. &lt;/p&gt;

\_\_\_\_\_\_\_\_\_\_\_

**TITLES: not the same thing as a heading (which renders on the html page) but instead the title element represents the title of the page as shown in the tab of the browser.**

&lt;head&gt;

As such &lt;title&gt;This is the title&lt;/title&gt; it is always found between &lt;head&gt; tags and not in the body of the page where all the content that gets rendered on the page is contained.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*CSqPk3mD0fR-oOAb" class="graf-image" /></figure>### Here’s a handy Cheat Sheet:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*c9Vyer_N97InJsUB.png" class="graf-image" /></figure>Below I am going to Include a gist that contains html code that uses pretty much every tag I could think of off the top of my head…

If it’s not included here I promise you it’s seldom used by most webpages.

Below that I will embed an image of the webpage that it renders too….

that super small text at the bottom is actually one giant button:

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*gdM-6smOEc2ChCI_8_Ql_g.png" class="graf-image" /></figure>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site:

<a href="https://web-dev-resource-hub.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web-dev-resource-hub.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Edit description</em>web-dev-resource-hub.netlify.app</a><a href="https://web-dev-resource-hub.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 13, 2021](https://medium.com/p/651d695f9bc).

<a href="https://medium.com/@bryanguner/super-simple-intro-to-html-651d695f9bc" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
