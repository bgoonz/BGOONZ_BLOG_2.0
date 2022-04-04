Support table
-------------

{: .-one-column}

### CSS Selectors

<table><thead><tr class="header"><th>Feature</th><th>IE6</th><th>IE7</th><th>IE8</th><th>IE9</th><th>IE10</th></tr></thead><tbody><tr class="odd"><td><code>&gt;</code> <em>(descendant)</em></td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>[attr]</code> <em>(attribute)</em></td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>.class1.class2</code> <em>(multiple classes)</em></td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>~</code> <em>(sibling)</em></td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>+</code> <em>(adjacent)</em></td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td></tr><tr class="odd"><td><code>:first-child</code> <sup>*</sup></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>:focus</code></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>:before</code> <code>:after</code> <em>(single colon only)</em></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>:lang</code></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td></tr><tr class="even"><td><code>:first-of-type</code>, <code>:last-of-type</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="odd"><td><code>:last-child</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="even"><td><code>:empty</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="odd"><td><code>:enabled</code> <code>:disabled</code> <code>:checked</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="even"><td><code>:not()</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="odd"><td><code>:nth-child()</code> <code>:nth-last-child()</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="even"><td><code>:nth-of-type()</code> <code>:nth-last-of-type()</code> <code>:only-of-type()</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="odd"><td><code>:only-child()</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="even"><td><code>:target</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="odd"><td><code>::selection</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr><tr class="even"><td><code>:root</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td></tr></tbody></table>

{: .-headers.-no-wrap}

`first-child:` doesn’t work for elements inserted via JS.

### CSS properties

<table><thead><tr class="header"><th>Feature</th><th>IE6</th><th>IE7</th><th>IE8</th><th>IE9</th><th>IE10</th><th>IE11</th></tr></thead><tbody><tr class="odd"><td><code>max-width</code></td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>position: fixed</code></td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="even"><td><code>outline</code></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>display: inline-block</code> <sup>*</sup></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>display: table</code></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>border-collapse</code>, <code>border-spacing</code>, <code>table-layout</code>, …</td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>whitespace: pre-wrap</code></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>whitespace: pre-line</code></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>box-sizing</code></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="even"><td><code>background-clip</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>background-origin</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>background-size</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>background: x, y, z</code> <em>(multiple backgrounds)</em></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>opacity</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>border-radius</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>box-shadow</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td><code>rgba()</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td><code>transform</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="even"><td><code>animation</code></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="odd"><td><code>transition</code></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="even"><td><code>linear-gradient()</code></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="odd"><td><code>text-shadow</code> — <a href="https://github.com/heygrady/textshadow">polyfill</a></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="even"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="odd"><td><code>border-image</code></td><td></td><td></td><td></td><td></td><td></td><td>11 ✓</td></tr></tbody></table>

{: .-headers.-no-wrap}

`inline-block:` IE6/7 can only support inline-block for elements that are naturally inline, like span

### Features

<table><thead><tr class="header"><th>Feature</th><th>IE6</th><th>IE7</th><th>IE8</th><th>IE9</th><th>IE10</th><th>IE11</th></tr></thead><tbody><tr class="odd"><td>PNG alpha transparency</td><td></td><td>7 ✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="odd"><td>data URI <a href="https://caniuse.com/#feat=datauri">⊙</a></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td>JS: JSON parsing <a href="https://caniuse.com/#feat=json">⊙</a></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>JS: Cross-origin resource sharing <a href="https://caniuse.com/#feat=cors">⊙</a></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td>JS: Local storage <a href="https://caniuse.com/#feat=localstorage">⊙</a></td><td></td><td></td><td>8 ✓</td><td>✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="even"><td>CSS: <code>@media</code> queries — <a href="https://github.com/scottjehl/Respond">polyfill</a></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>HTML: new HTML5 elements - <a href="https://code.google.com/p/html5shiv/">polyfill</a></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td>HTML: <code>&lt;canvas&gt;</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>HTML: <code>&lt;svg&gt;</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="even"><td>HTML: <code>&lt;img src='image.svg'&gt;</code></td><td></td><td></td><td></td><td>9 ✓</td><td>✓</td><td>✓</td></tr><tr class="odd"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="even"><td>CSS: flexbox <a href="https://caniuse.com/#feat=flexbox">⊙</a> <sup>*</sup></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="odd"><td>HTML: <code>&lt;input placeholder='..'&gt;</code> <a href="https://caniuse.com/#feat=input-placeholder">⊙</a></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="even"><td>HTML: <code>&lt;input type='range'&gt;</code></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="odd"><td>HTML: <code>&lt;input required&gt;</code> <a href="https://caniuse.com/#search=validation">⊙</a></td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="even"><td>JS: Web sockets</td><td></td><td></td><td></td><td></td><td>10 ✓</td><td>✓</td></tr><tr class="odd"><td>———————————————————-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>–</td><td>–</td></tr><tr class="even"><td>JS: Fullscreen mode</td><td></td><td></td><td></td><td></td><td></td><td>11 ✓</td></tr></tbody></table>

{: .-headers.-no-wrap}

`flexbox:` IE10 only supports the 2012 syntax with -ms- prefix.

Polyfills
---------

### IE polyfills

Always install these in almost every project:

-   [json2](https://github.com/douglascrockford/JSON-js) for JSON parsing (for IE7 below)
-   [selectivizr](http://selectivizr.com/) for selectors (for IE8 below)
-   [html5shiv](https://code.google.com/p/html5shiv/) for new HTML tags (for IE8 below)
-   [respond](https://github.com/scottjehl/Respond) for media queries (for IE8 below)
-   See [this article](http://ricostacruz.com/til/ie-polyfills.html) for info

    <!--[if lt IE 9]>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/nwmatcher/1.2.5/nwmatcher.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/json2/20140204/json2.min.js'>
    <script src='https://cdn.rawgit.com/gisu/selectivizr/1.0.3/selectivizr.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js'>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js'>
    <![endif]-->

### You may also need

-   [modernizr](https://modernizr.com) for feature detection

### for CSS3 decorations

-   [css3pie](http://css3pie.com/)
-   [cssSandpaper](https://github.com/zoltan-dulac/cssSandpaper)
-   [ecsstender](http://ecsstender.org/)

See: [Cross-browser polyfills list](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)

Misc
----

### IE Conditional comment HTML

    <!--[if lt IE 7]> <html class="ie6"> <![endif]-->
    <!--[if IE 7]>    <html class="ie7"> <![endif]-->
    <!--[if IE 8]>    <html class="ie8"> <![endif]-->
    <!--[if IE 9]>    <html class="ie9"> <![endif]-->
    <!--[if (gt IE 9)|!(IE)]><!-->
    <html class="">
        <!--<![endif]-->
    </html>

### IE conditionals

    <!--[if IE]> I'm IE <![endif]-->
    <!--[if !IE]> -->
    Not IE
    <!-- <![endif]-->
