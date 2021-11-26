An Introduction to Markdown (Bonus Markdown Templates Included)
===============================================================

Basic Syntax Guide

------------------------------------------------------------------------

### An Introduction to Markdown (Bonus Markdown Templates Included)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*oy6szzmI0FdRUiTd.png" class="graf-image" /></figure><a href="https://github.com/bgoonz/Markdown-Templates.git" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/Markdown-Templates.git"><strong>bgoonz/Markdown-Templates</strong><br />
<em>One Paragraph of project description goes here These instructions will get you a copy of the project up and running on…</em>github.com</a><a href="https://github.com/bgoonz/Markdown-Templates.git" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Basic Syntax Guide

This topic is meant to give you a very basic overview of how Markdown works, showing only some of the most common operations you use most frequently. Keep in mind that you can also use the Edit menus to inject markdown using the toolbar, which serves as a great way to see how Markdown works. However, Markdown’s greatest strength lies in its simplicity and keyboard friendly approach that lets you focus on writing your text and staying on the keyboard.

### What is Markdown

Markdown is very easy to learn and get comfortable with due it’s relatively small set of markup ‘commands’. It uses already familiar syntax to represent common formatting operations. Markdown understands basic line breaks so you can generally just type text.

Markdown also allows for raw HTML inside of a markdown document, so if you want to embed something more fancy than what Markdowns syntax can do you can always fall back to HTML. However to keep documents readable that’s generally not recommended.

### Basic Markdown Syntax

The following are a few examples of the most common things you are likely to do with Markdown while building typical documentation.

### Bold and Italic

    markdown

    This text **is bold**. 
    This text *is italic*.

This text is bold.  
This text *is italic*.

### Header Text

    markdown

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

### Header 1

### Header 2

### Header 3

#### Header 4

Header 5Header 6

### Line Continuation

By default Markdown adds paragraphs at double line breaks. Single line breaks by themselves are simply wrapped together into a single line. If you want to have soft returns that break a single line, add two spaces at the end of the line.

    markdown

    This line has a paragraph break at the end (empty line after).

    Theses two lines should display as a single
    line because there's no double space at the end.

    The following line has a soft break at the end (two spaces at end)  
    This line should be following on the very next line.

This line has a paragraph break at the end (empty line after).

Theses two lines should display as a single line because there’s no double space at the end.

The following line has a soft break at the end (two spaces at end)  
This line should be following on the very next line.

### Links

    markdown

    [Help Builder Web Site](http://helpbuilder.west-wind.com/)

<a href="http://helpbuilder.west-wind.com/" class="markup--anchor markup--p-anchor">Help Builder Web Site</a>

If you need additional image tags like targets or title attributes you can also embed HTML directly:

    markdown

    Go the Help Builder sitest Wind site: <a href="http://west-wind.com/" target="_blank">Help Builder Site</a>.

### Images

    markdown

    ![Help Builder Web Site](https://helpbuilder.west-wind.com/images/HelpBuilder_600.png)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ibU0D-Zr0qDT5h3z.png" class="graf-image" /></figure>### Block Quotes

Block quotes are callouts that are great for adding notes or warnings into documentation.

    markdown

    > ###  Headers break on their own
    > Note that headers don't need line continuation characters 
    as they are block elements and automatically break. Only text
    lines require the double spaces for single line breaks.

> *Headers break on their own*

> *Note that headers don’t need line continuation characters as they are block elements and automatically break. Only text lines require the double spaces for single line breaks.*

### Fontawesome Icons

Help Builder includes a custom syntax for <a href="http://fortawesome.github.io/Font-Awesome/icons/" class="markup--anchor markup--p-anchor">FontAwesome</a> icons in its templates. You can embed a `@ icon-` followed by a font-awesome icon name to automatically embed that icon without full HTML syntax.

    markdown

    Gear:  Configuration

Configuration

### HTML Markup

You can also embed plain HTML markup into the page if you like. For example, if you want full control over fontawesome icons you can use this:

    markdown

    This text can be **embedded** into Markdown:  
    <i class="fa fa-refresh fa-spin fa-lg"></i> Refresh Page

This text can be embedded into Markdown:  
 Refresh Page

### Unordered Lists

    markdown

    * Item 1
    * Item 2
    * Item 3
    This text is part of the third item. Use two spaces at end of the the list item to break the line.

    A double line break, breaks out of the list.

-   <span id="7904">Item 1</span>
-   <span id="1cf1">Item 2</span>
-   <span id="ded6">Item 3  
    This text is part of the third item. Use two spaces at end of the the list item to break the line.</span>

A double line break, breaks out of the list.

### Ordered Lists

    markdown

    1. **Item 1**  
    Item 1 is really something
    2. **Item 2**  
    Item two is really something else

    If you want lines to break using soft returns use two spaces at the end of a line.

1.  <span id="01d6">Item 1 Item 1 is really something</span>
2.  <span id="51ea">Item 2  
    Item two is really something else</span>

If you want to lines to break using soft returns use to spaces at the end of a line.

### Inline Code

If you want to embed code in the middle of a paragraph of text to highlight a coding syntax or class/member name you can use inline code syntax:

    markdown

    Structured statements like `for x =1 to 10` loop structures 
    can be codified using single back ticks.

Structured statements like `for x =1 to 10` loop structures can be codified using single back ticks.

### Code Blocks with Syntax Highlighting

Markdown supports code blocks syntax in a variety of ways:

    markdown

    The following code demonstrates:

        // This is code by way of four leading spaces
        // or a leading tab

    More text here

The following code demonstrates:

    pgsql

    // This is code by way of four leading spaces
    // or a leading tab

More text here

### Code Blocks

You can also use triple back ticks plus an optional coding language to support for syntax highlighting (space injected before last \` to avoid markdown parsing):

    markdown

    `` `csharp
    // this code will be syntax highlighted
    for(var i=0; i++; i < 10)
    {
        Console.WriteLine(i);
    }
    `` `

    csharp

    // this code will be syntax highlighted
    for(var i=0; i++; i < 10)
    {
        Console.WriteLine(i);
    }

Many languages are supported: html, xml, javascript, css, csharp, foxpro, vbnet, sql, python, ruby, php and many more. Use the Code drop down list to get a list of available languages.

You can also leave out the language to get no syntax coloring but the code box:

    markdown

    `` `dos
    robocopy c:\temp\test d:\temp\test
    `` `

    dos

    robocopy c:\temp\test d:\temp\test

To create a formatted block but without formatting use the `txt` format:

    markdown

    `` `txt
    This is some text that will not be syntax highlighted
    but shows up in a code box.
    `` `

which gives you:

    text

    This is some text that will not be syntax highlighted
    but shows up in a code box.

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 8, 2021](https://medium.com/p/3497ce56de3).

<a href="https://medium.com/@bryanguner/an-introduction-to-markdown-bonus-markdown-templates-included-3497ce56de3" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
