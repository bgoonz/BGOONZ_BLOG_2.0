RegExp
------

### Character classes

<table><thead><tr class="header"><th>Pattern</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>.</code></td><td>Any character, except newline</td></tr><tr class="even"><td><code>\w</code></td><td>Word</td></tr><tr class="odd"><td><code>\d</code></td><td>Digit</td></tr><tr class="even"><td><code>\s</code></td><td>Whitespace</td></tr><tr class="odd"><td><code>\W</code></td><td>Not word</td></tr><tr class="even"><td><code>\D</code></td><td>Not digit</td></tr><tr class="odd"><td><code>\S</code></td><td>Not whitespace</td></tr><tr class="even"><td><code>[abc]</code></td><td>Any of a, b, or c</td></tr><tr class="odd"><td><code>[a-e]</code></td><td>Characters between <code>a</code> and <code>e</code></td></tr><tr class="even"><td><code>[1-9]</code></td><td>Digit between <code>1</code> and <code>9</code></td></tr><tr class="odd"><td><code>[^abc]</code></td><td>Any character except <code>a</code>, <code>b</code> or <code>c</code></td></tr></tbody></table>

### Anchors

<table><thead><tr class="header"><th>Pattern</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>\G</code></td><td>Start of match</td></tr><tr class="even"><td><code>^</code></td><td>Start of string</td></tr><tr class="odd"><td><code>$</code></td><td>End of string</td></tr><tr class="even"><td><code>\A</code></td><td>Start of string</td></tr><tr class="odd"><td><code>\Z</code></td><td>End of string</td></tr><tr class="even"><td><code>\z</code></td><td>Absolute end of string</td></tr><tr class="odd"><td><code>\b</code></td><td>A word boundry</td></tr><tr class="even"><td><code>\B</code></td><td>Non-word boundry</td></tr><tr class="odd"><td><code>^abc</code></td><td>Start with <code>abc</code></td></tr><tr class="even"><td><code>abc$</code></td><td>End with <code>abc</code></td></tr></tbody></table>

### Escaped characters

<table><thead><tr class="header"><th>Pattern</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>\. \* \\</code></td><td>Escape special character used by regex</td></tr><tr class="even"><td><code>\t</code></td><td>Tab</td></tr><tr class="odd"><td><code>\n</code></td><td>Newline</td></tr><tr class="even"><td><code>\r</code></td><td>Carriage return</td></tr></tbody></table>

### Groups

<table><thead><tr class="header"><th>Pattern</th><th>Description</th><th></th></tr></thead><tbody><tr class="odd"><td><code>(abc)</code></td><td>Capture group</td><td></td></tr><tr class="even"><td><code>(a       | b)</code></td><td>Match <code>a</code> or <code>b</code></td><td></td></tr><tr class="odd"><td><code>(?:abc)</code></td><td>Match <code>abc</code>, but don’t capture</td><td></td></tr></tbody></table>

### Quantifiers

<table><thead><tr class="header"><th>Pattern</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>a*</code></td><td>Match 0 or more</td></tr><tr class="even"><td><code>a+</code></td><td>Match 1 or more</td></tr><tr class="odd"><td><code>a?</code></td><td>Match 0 or 1</td></tr><tr class="even"><td><code>a{5}</code></td><td>Match exactly 5</td></tr><tr class="odd"><td><code>a{,3}</code></td><td>Match up to 3</td></tr><tr class="even"><td><code>a{3,}</code></td><td>Match 3 or more</td></tr><tr class="odd"><td><code>a{1,3}</code></td><td>Match between 1 and 3</td></tr></tbody></table>

### Lookahead & Lookbehind

<table><thead><tr class="header"><th>Pattern</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>a(?=b)</code></td><td>Match <code>a</code> in <code>baby</code> but not in <code>bay</code></td></tr><tr class="even"><td><code>a(?!b)</code></td><td>Match <code>a</code> in <code>Stan</code> but not in <code>Stab</code></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>(?&lt;=a)b</code></td><td>Match <code>b</code> in <code>crabs</code> but not in <code>cribs</code></td></tr><tr class="odd"><td><code>(?&lt;!a)b</code></td><td>Match <code>b</code> in <code>fib</code> but not in <code>fab</code></td></tr></tbody></table>
