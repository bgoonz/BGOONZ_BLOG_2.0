Common usage
------------

### Tables

    :Tab /|

{: .-setup}

    | Fruit  | Color  |
    | -----  | -----  |
    | Apple  | Red    |
    | Banana | Yellow |
    | Kiwi   | Green  |

### Variables

    :Tab /=

{: .-setup}

    title = "Hello"
    src   = "image.jpg"
    width = 640

### Colons

    :Tab /:\zs/l0l1

{: .-setup}

    title:       "Hello world"
    description: "This is a description"
    src:         "image.jpg"
    height:      320
    width:       640

Tab command
-----------

### Basic example

    :Tab /:

{: .-setup}

    title : My picture
    src   : img.jpg

### Right align

    :Tab /:/r0

{: .-setup}

    title:My picture
      src:   img.jpg

### The atom

    :Tab /:\zs

{: .-setup}

    title:  My picture
    src:    img.jpg

The `\zs` atom will exclude the `:` from the search match.

### Specifier

    :Tab /:/r1c1l0

{: .-setup}

    title : My picture
      src : img.jpg

#### Explanation

-   `r1` – Right align with 1 space
-   `c1` – Center align the comma with 1 space
-   `l0` – Left align with 0 spaces

### Regexp

    :Tab /^[^,]*\zs,/r0

{: .-setup}

    abc,hello
      c,hi there
      a,yo

### Specifiers

<table style="width:99%;"><colgroup><col style="width: 10%" /><col style="width: 89%" /></colgroup><thead><tr class="header"><th>Specifier</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>r1c1l0</code></td><td>multiple specifiers, one per column<br />
(the separator counts as a column)</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>lN</code></td><td>Left-align (with N spaces padding)</td></tr><tr class="even"><td><code>rN</code></td><td>Right-align (with N spaces padding)</td></tr><tr class="odd"><td><code>cN</code></td><td>Center-align (with N spaces padding)</td></tr></tbody></table>

Also see
--------

-   [godlygeek/tabular](https://github.com/godlygeek/tabular) *(github.com)*
-   [Aligning text with Tabular.vim](http://vimcasts.org/episodes/aligning-text-with-tabular-vim/) *(vimcasts.org)*
