Emmet Cheat Sheet
=================

EMMET

------------------------------------------------------------------------

### Emmet Cheat Sheet

### EMMET

*The a toolkit for web-developers*

### Introduction

Emmet is a productivity toolkit for web developers that uses expressions to generate HTML snippets.

### Installation

Normally, installation for Emmet should be a straight-forward process from the package-manager, as most of the modern text editors support Emmet.

### Usage

You can use Emmet in two ways:

-   <span id="856f">Tab Expand Way: Type your emmet code and press `Tab` key</span>
-   <span id="9aea">Interactive Method: Press `alt + ctrl + Enter` and start typing your expressions. This should automatically generate HTML snippets on the fly.</span>

**This cheatsheet will assume that you press** `Tab` **after each expressions.**

### HTML

### Generating HTML 5 DOCTYPE

`html:5`  
Will generate

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>

    </body>
    </html>

### Child items

Child items are created using `>`

`ul>li>p`

    <ul>
      <li>
        <p></p>
      </li>
    </ul>

### Sibling Items

Sibling items are created using `+`

`html>head+body`

    <html>
    <head></head>
    <body>

    </body>
    </html>

### Multiplication

Items can be multiplied by `*`

`ul>li*5`

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

### Grouping

Items can be grouped together using `()`

`table>(tr>th*5)+tr>t*5`

    <table>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <t></t>
        <t></t>
        <t></t>
        <t></t>
        <t></t>
      </tr>
    </table>

### Class and ID

Class and Id in Emmet can be done using `.` and `#`

`div.heading`

    <div class="heading"></div>

`div#heading`

    <div id="heading"></div>

ID and Class can also be combined together

`div#heading.center`

    <div id="heading" class="center"></div>

### Adding Content inside tags

Contents inside tags can be added using `{}`

`h1{Emmet is awesome}+h2{Every front end developers should use this}+p{This is paragraph}*2`

    <h1>Emmet is awesome</h1>
    <h2>Every front end developers should use this</h2>
    <p>This is paragraph</p>
    <p>This is paragraph</p>

### Attributes inside HTML tags

Attributes can be added using `[]`

`a[href=https://?google.com data-toggle=something target=_blank]`

    <a href="https://?google.com" data-toggle="something" target="_blank"></a>

### Numbering

Numbering can be done using `$`  
You can use this inside tag or contents.

`h${This is so awesome $}*6`

    <h1>This is so awesome 1</h1>
    <h2>This is so awesome 2</h2>
    <h3>This is so awesome 3</h3>
    <h4>This is so awesome 4</h4>
    <h5>This is so awesome 5</h5>
    <h6>This is so awesome 6</h6>

Use `@-` to reverse the Numbering

`img[src=image$$@-.jpg]*5`

    <img src="image05.jpg" alt="">
    <img src="image04.jpg" alt="">
    <img src="image03.jpg" alt="">
    <img src="image02.jpg" alt="">
    <img src="image01.jpg" alt="">

To start the numbering from specific number, use this way

`img[src=emmet$@100.jpg]*5`

    <img src="emmet100.jpg" alt="">
    <img src="emmet101.jpg" alt="">
    <img src="emmet102.jpg" alt="">
    <img src="emmet103.jpg" alt="">
    <img src="emmet104.jpg" alt="">

### Tips

-   <span id="b708">Use `:` to expand known abbreviations</span>

`input:date`

    <input type="date" name="" id="">

`form:post`

    <form action="" method="post"></form>

`link:css`

    <link rel="stylesheet" href="style.css">

-   <span id="d43e">Building Navbar</span>

`.navbar>ul>li*3>a[href=#]{Item $@-}`

    <div class="navbar">
      <ul>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 1</a></li>
      </ul>
    </div>

### CSS

Emmet works surprisingly well with css as well.

-   <span id="68eb">`f:l`</span>

<!-- -->

    float: left;

You can also use any options n/r/l

-   <span id="d9cc">`pos:a­`</span>

<!-- -->

    position: absolute;

Also use any options, pos:a/r/f

-   <span id="5b67">`d:n/b­/f/­i/ib`</span>

`d:ib`

    display: inline-block;

-   <span id="26f6">You can use `m` for margin and `p` for padding followed by direction</span>

`mr` -&gt; `margin-right`

`pr` -&gt; `padding-right`

-   <span id="01cc">`@f` will result in</span>

<!-- -->

    @font-face {
      font-family:;
      src:url();
    }

You can also use these shorthands

<figure><img src="https://cdn-images-1.medium.com/max/800/1*h8hsUrJNyVRLYqBQP63DCA.png" class="graf-image" /></figure>#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 6, 2021](https://medium.com/p/24758e628d37).

<a href="https://medium.com/@bryanguner/emmet-cheat-sheet-24758e628d37" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
