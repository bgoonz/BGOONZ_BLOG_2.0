subtitle

2022-01-03

------------------------------------------------------------------------

title: Bulma category: CSS

prism\_languages: \[css, html\] weight: -1 authors:

-   github: benolot description: | Basic guide on how to use Bulma, the lightweight css flexbox framework.

------------------------------------------------------------------------

### Screen sizes

             768         1024                1216         1408
    '     '     '     '     '     '     '     '     '     '     '     '
    <---------^------------^------------------^-------------^------------->
      mobile      tablet         desktop         widescreen      fullhd

### Columns

    .container

Wrap as many `.column`‘s’ as you like in a `.columns` wrapper

    <div class="columns">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>

### Modifiers

The following CSS classes affect the **colour**.

    .is-primary .is-link .is-info .is-success .is-warning .is-danger;

The following classes modify the **size**.

    .is-small .is-medium .is-large;

The following classes modify the **state**.

    .is-outlined
    .is-loading

### Typography Helpers

The following classes modify the **font-size**

<table><thead><tr class="header"><th>Class</th><th>Font-size</th></tr></thead><tbody><tr class="odd"><td><code>.is-size-1</code></td><td>3rem</td></tr><tr class="even"><td><code>.is-size-2</code></td><td>2.5rem</td></tr><tr class="odd"><td><code>.is-size-3</code></td><td>2rem</td></tr><tr class="even"><td><code>.is-size-4</code></td><td>1.5rem</td></tr><tr class="odd"><td><code>.is-size-5</code></td><td>1.25rem</td></tr><tr class="even"><td><code>.is-size-6</code></td><td>1rem</td></tr><tr class="odd"><td><code>.is-size-7</code></td><td>0.75rem</td></tr></tbody></table>

The following classes **align** the text

<table><thead><tr class="header"><th>Class</th><th>Alignment</th></tr></thead><tbody><tr class="odd"><td><code>.has-text-centered</code></td><td>Makes the text <strong>centered</strong></td></tr><tr class="even"><td><code>.has-text-justified</code></td><td>Makes the text <strong>justified</strong></td></tr><tr class="odd"><td><code>.has-text-left</code>.</td><td>Makes the text align to the <strong>left</strong></td></tr><tr class="even"><td><code>.has-text-right</code></td><td>Makes the text align to the <strong>right</strong></td></tr></tbody></table>

The following classes **transform** the text

<table><thead><tr class="header"><th>Class</th><th>Transformation</th></tr></thead><tbody><tr class="odd"><td><code>.is-capitalized</code></td><td>Transforms the <strong>first character</strong> of each word to <strong>uppercase</strong></td></tr><tr class="even"><td><code>.is-lowercase</code></td><td>Transforms <strong>all</strong> characters to <strong>lowercase</strong></td></tr><tr class="odd"><td><code>.is-uppercase</code></td><td>Transforms <strong>all</strong> characters to <strong>uppercase</strong></td></tr></tbody></table>

### WYSIWYG Content

    <div class="content">
        <!-- start WYSIWYG contents -->
        <h1>Heading</h1>
        <p>Paragraph</p>

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <!-- end WYSIWYG contents -->
    </div>

To provide default stylings for commonly generated WYSIWYG contents, use the `.content` class.
