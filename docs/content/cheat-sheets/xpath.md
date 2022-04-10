Testing
-------

### Xpath test bed

{: .-intro}

Test queries in the Xpath test bed:

-   [Xpath test bed](http://www.whitebeam.org/library/guide/TechNotes/xpathtestbed.rhtm) *(whitebeam.org)*

### Browser console

    $x('//div');

Works in Firefox and Chrome.

Selectors
---------

### Descendant selectors

<table><thead><tr class="header"><th>CSS</th><th>Xpath</th><th>?</th></tr></thead><tbody><tr class="odd"><td><code>h1</code></td><td><code>//h1</code></td><td><a href="#prefixes">?</a></td></tr><tr class="even"><td><code>div p</code></td><td><code>//div//p</code></td><td><a href="#axes">?</a></td></tr><tr class="odd"><td><code>ul &gt; li</code></td><td><code>//ul/li</code></td><td><a href="#axes">?</a></td></tr><tr class="even"><td><code>ul &gt; li &gt; a</code></td><td><code>//ul/li/a</code></td><td></td></tr><tr class="odd"><td><code>div &gt; *</code></td><td><code>//div/*</code></td><td></td></tr><tr class="even"><td>—-</td><td>—-</td><td>–</td></tr><tr class="odd"><td><code>:root</code></td><td><code>/</code></td><td><a href="#prefixes">?</a></td></tr><tr class="even"><td><code>:root &gt; body</code></td><td><code>/body</code></td><td></td></tr></tbody></table>

{: .xp}

### Attribute selectors

<table><thead><tr class="header"><th>CSS</th><th>Xpath</th><th>?</th></tr></thead><tbody><tr class="odd"><td><code>#id</code></td><td><code>//*[@id="id"]</code></td><td><a href="#predicates">?</a></td></tr><tr class="even"><td><code>.class</code></td><td><code>//*[@class="class"]</code> <em>…<a href="#class-check">kinda</a></em></td><td></td></tr><tr class="odd"><td><code>input[type="submit"]</code></td><td><code>//input[@type="submit"]</code></td><td></td></tr><tr class="even"><td><code>a#abc[for="xyz"]</code></td><td><code>//a[@id="abc"][@for="xyz"]</code></td><td><a href="#chaining-order">?</a></td></tr><tr class="odd"><td><code>a[rel]</code></td><td><code>//a[@rel]</code></td><td></td></tr><tr class="even"><td>—-</td><td>—-</td><td>–</td></tr><tr class="odd"><td><code>a[href^='/']</code></td><td><code>//a[starts-with(@href, '/')]</code></td><td><a href="#string-functions">?</a></td></tr><tr class="even"><td><code>a[href$='pdf']</code></td><td><code>//a[ends-with(@href, '.pdf')]</code></td><td></td></tr><tr class="odd"><td><code>a[href*='://']</code></td><td><code>//a[contains(@href, '://')]</code></td><td></td></tr><tr class="even"><td><code>a[rel~='help']</code></td><td><code>//a[contains(@rel, 'help')]</code> <em>…<a href="#class-check">kinda</a></em></td><td></td></tr></tbody></table>

{: .xp}

### Order selectors

<table><thead><tr class="header"><th>CSS</th><th>Xpath</th><th>?</th></tr></thead><tbody><tr class="odd"><td><code>ul &gt; li:first-of-type</code></td><td><code>//ul/li[1]</code></td><td><a href="#indexing">?</a></td></tr><tr class="even"><td><code>ul &gt; li:nth-of-type(2)</code></td><td><code>//ul/li[2]</code></td><td></td></tr><tr class="odd"><td><code>ul &gt; li:last-of-type</code></td><td><code>//ul/li[last()]</code></td><td></td></tr><tr class="even"><td><code>li#id:first-of-type</code></td><td><code>//li[1][@id="id"]</code></td><td><a href="#chaining-order">?</a></td></tr><tr class="odd"><td><code>a:first-child</code></td><td><code>//*[1][name()="a"]</code></td><td></td></tr><tr class="even"><td><code>a:last-child</code></td><td><code>//*[last()][name()="a"]</code></td><td></td></tr></tbody></table>

{: .xp}

### Siblings

<table><thead><tr class="header"><th>CSS</th><th>Xpath</th><th>?</th></tr></thead><tbody><tr class="odd"><td><code>h1 ~ ul</code></td><td><code>//h1/following-sibling::ul</code></td><td><a href="#using-axes">?</a></td></tr><tr class="even"><td><code>h1 + ul</code></td><td><code>//h1/following-sibling::ul[1]</code></td><td></td></tr><tr class="odd"><td><code>h1 ~ #id</code></td><td><code>//h1/following-sibling::[@id="id"]</code></td><td></td></tr></tbody></table>

{: .xp}

### jQuery

<table><thead><tr class="header"><th>CSS</th><th>Xpath</th><th>?</th></tr></thead><tbody><tr class="odd"><td><code>$('ul &gt; li').parent()</code></td><td><code>//ul/li/..</code></td><td><a href="#other-axes">?</a></td></tr><tr class="even"><td><code>$('li').closest('section')</code></td><td><code>//li/ancestor-or-self::section</code></td><td></td></tr><tr class="odd"><td><code>$('a').attr('href')</code></td><td><code>//a/@href</code></td><td><a href="#steps">?</a></td></tr><tr class="even"><td><code>$('span').text()</code></td><td><code>//span/text()</code></td><td></td></tr></tbody></table>

{: .xp}

### Other things

<table><thead><tr class="header"><th>CSS</th><th>Xpath</th><th>?</th><th></th></tr></thead><tbody><tr class="odd"><td><code>h1:not([id])</code></td><td><code>//h1[not(@id)]</code></td><td><a href="#boolean-functions">?</a></td><td></td></tr><tr class="even"><td>Text match</td><td><code>//button[text()="Submit"]</code></td><td><a href="#operators">?</a></td><td></td></tr><tr class="odd"><td>Text match (substring)</td><td><code>//button[contains(text(),"Go")]</code></td><td></td><td></td></tr><tr class="even"><td>Arithmetic</td><td><code>//product[@price &gt; 2.50]</code></td><td></td><td></td></tr><tr class="odd"><td>Has children</td><td><code>//ul[*]</code></td><td></td><td></td></tr><tr class="even"><td>Has children (specific)</td><td><code>//ul[li]</code></td><td></td><td></td></tr><tr class="odd"><td>Or logic</td><td><code>//a[@name or @href]</code></td><td><a href="#operators">?</a></td><td></td></tr><tr class="even"><td>Union (joins results)</td><td><code>//a                              | //div</code></td><td><a href="#unions">?</a></td><td></td></tr></tbody></table>

{: .xp}

### Class check

    //div[contains(concat(' ',normalize-space(@class),' '),' foobar ')]

Xpath doesn’t have the "check if part of space-separated list” operator, so this is the workaround ([source](http://pivotallabs.com/xpath-css-class-matching/)).

Expressions
-----------

### Steps and axes

`//` | `ul` | `/` | `a[@id='link']` |  
Axis | Step | Axis | Step |

{: .-css-breakdown}

### Prefixes

<table><thead><tr class="header"><th>Prefix</th><th>Example</th><th>What</th></tr></thead><tbody><tr class="odd"><td><code>//</code></td><td><code>//hr[@class='edge']</code></td><td>Anywhere</td></tr><tr class="even"><td><code>./</code></td><td><code>./a</code></td><td>Relative</td></tr><tr class="odd"><td><code>/</code></td><td><code>/html/body/div</code></td><td>Root</td></tr></tbody></table>

{: .-headers}

Begin your expression with any of these.

### Axes

<table><thead><tr class="header"><th>Axis</th><th>Example</th><th>What</th></tr></thead><tbody><tr class="odd"><td><code>/</code></td><td><code>//ul/li/a</code></td><td>Child</td></tr><tr class="even"><td><code>//</code></td><td><code>//[@id="list"]//a</code></td><td>Descendant</td></tr></tbody></table>

{: .-headers}

Separate your steps with `/`. Use two (`//`) if you don’t want to select direct children.

### Steps

    //div
    //div[@name='box']
    //[@id='link']

A step may have an element name (`div`) and [predicates](#predicate) (`[...]`). Both are optional. They can also be these other things:

    //a/text()     #=> "Go home"
    //a/@href      #=> "index.html"
    //a/*          #=> All a's child elements

Predicates
----------

### Predicates

    //div[true()]
    //div[@class="head"]
    //div[@class="head"][@id="top"]

Restricts a nodeset only if some condition is true. They can be chained.

### Operators

    # Comparison
    //a[@id = "xyz"]
    //a[@id != "xyz"]
    //a[@price > 25]

    # Logic (and/or)
    //div[@id="head" and position()=2]
    //div[(x and y) or not(z)]

Use comparison and logic operators to make conditionals.

### Using nodes

    # Use them inside functions
    //ul[count(li) > 2]
    //ul[count(li[@class='hide']) > 0]

    # This returns `<ul>` that has a `<li>` child
    //ul[li]

You can use nodes inside predicates.

### Indexing

    //a[1]                  # first <a>
    //a[last()]             # last <a>
    //ol/li[2]              # second <li>
    //ol/li[position()=2]   # same as above
    //ol/li[position()>1]   # :not(:first-of-type)

Use `[]` with a number, or `last()` or `position()`.

### Chaining order

    a[1][@href='/']
    a[@href='/'][1]

Order is significant, these two are different.

### Nesting predicates

    //section[.//h1[@id='hi']]

This returns `<section>` if it has an `<h1>` descendant with `id='hi'`.

Functions
---------

### Node functions

    name()                     # //[starts-with(name(), 'h')]
    text()                     # //button[text()="Submit"]
                               # //button/text()
    lang(str)
    namespace-uri()

    count()                    # //table[count(tr)=1]
    position()                 # //ol/li[position()=2]

### Boolean functions

    not(expr)                  # button[not(starts-with(text(),"Submit"))]

### String functions

    contains()                 # font[contains(@class,"head")]
    starts-with()              # font[starts-with(@class,"head")]
    ends-with()                # font[ends-with(@class,"head")]

    concat(x,y)
    substring(str, start, len)
    substring-before("01/02", "/")  #=> 01
    substring-after("01/02", "/")   #=> 02
    translate()
    normalize-space()
    string-length()

### Type conversion

    string()
    number()
    boolean()

Axes
----

### Using axes

    //ul/li                       # ul > li
    //ul/child::li                # ul > li (same)
    //ul/following-sibling::li    # ul ~ li
    //ul/descendant-or-self::li   # ul li
    //ul/ancestor-or-self::li     # $('ul').closest('li')

Steps of an expression are separated by `/`, usually used to pick child nodes. That’s not always true: you can specify a different "axis” with `::`.

`//` | `ul` | `/child::` | `li` |  
Axis | Step | Axis | Step |

{: .-css-breakdown}

### Child axis

    # both the same
    //ul/li/a
    //child::ul/child::li/child::a

`child::` is the default axis. This makes `//a/b/c` work.

    # both the same
    # this works because `child::li` is truthy, so the predicate succeeds
    //ul[li]
    //ul[child::li]

    # both the same
    //ul[count(li) > 2]
    //ul[count(child::li) > 2]

### Descendant-or-self axis

    # both the same
    //div//h4
    //div/descendant-or-self::h4

`//` is short for the `descendant-or-self::` axis.

    # both the same
    //ul//[last()]
    //ul/descendant-or-self::[last()]

### Other axes

<table><thead><tr class="header"><th>Axis</th><th>Abbrev</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><code>ancestor</code></td><td></td><td></td></tr><tr class="even"><td><code>ancestor-or-self</code></td><td></td><td></td></tr><tr class="odd"><td>—</td><td>—</td><td>—</td></tr><tr class="even"><td><code>attribute</code></td><td><code>@</code></td><td><code>@href</code> is short for <code>attribute::href</code></td></tr><tr class="odd"><td><code>child</code></td><td></td><td><code>div</code> is short for <code>child::div</code></td></tr><tr class="even"><td><code>descendant</code></td><td></td><td></td></tr><tr class="odd"><td><code>descendant-or-self</code></td><td><code>//</code></td><td><code>//</code> is short for <code>/descendant-or-self::node()/</code></td></tr><tr class="even"><td><code>namespace</code></td><td></td><td></td></tr><tr class="odd"><td>—</td><td>—</td><td>—</td></tr><tr class="even"><td><code>self</code></td><td><code>.</code></td><td><code>.</code> is short for <code>self::node()</code></td></tr><tr class="odd"><td><code>parent</code></td><td><code>..</code></td><td><code>..</code> is short for <code>parent::node()</code></td></tr><tr class="even"><td>—</td><td>—</td><td>—</td></tr><tr class="odd"><td><code>following</code></td><td></td><td></td></tr><tr class="even"><td><code>following-sibling</code></td><td></td><td></td></tr><tr class="odd"><td><code>preceding</code></td><td></td><td></td></tr><tr class="even"><td><code>preceding-sibling</code></td><td></td><td></td></tr></tbody></table>

{: .-headers}

There are other axes you can use.

### Unions

    //a | //span

Use `|` to join two expressions.

More examples
-------------

### Examples

    //*                 # all elements
    count(//*)          # count all elements
    (//h1)[1]/text()    # text of the first h1 heading
    //li[span]          # find a <li> with an <span> inside it
                        # ...expands to //li[child::span]
    //ul/li/..          # use .. to select a parent

### Find a parent

    //section[h1[@id='section-name']]

Finds a `<section>` that directly contains `h1#section-name`

    //section[//h1[@id='section-name']]

Finds a `<section>` that contains `h1#section-name`. (Same as above, but uses descendant-or-self instead of child)

### Closest

    ./ancestor-or-self::[@class="box"]

Works like jQuery’s `$().closest('.box')`.

### Attributes

    //item[@price > 2*@discount]

Finds `<item>` and check its attributes

References
----------

{: .-one-column}

-   [Xpath test bed](http://www.whitebeam.org/library/guide/TechNotes/xpathtestbed.rhtm) *(whitebeam.org)*
