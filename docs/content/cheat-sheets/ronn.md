Getting started
---------------

{: .-left-reference}

### Installation

#### Installation

    gem install ronn

#### Usage

    ronn foo.1.md        # creates foo.1.html
    ronn -r foo.1.md     # creates foo.1 (--roff)
    ronn -r -h foo.1.md  # builds --roff and --html
    ronn -m foo.1.md     # view as manpage

Ronn is a Ruby gem.

### Basic template

    # name(1) -- short, single-sentence description

    ## SYNOPSIS

    `name` [<optional>...] <flags>

    ## DESCRIPTION

    A normal paragraph. This can span multiple lines and is terminated with two
    or more line endings just like Markdown.

    ## OPTIONS

    -   `-h`, `--help` :
        Displays the help screen.

    -   `--version` :
        Displays version information.

    ## EXAMPLES

    Indent examples with 4 spaces.

        $ ls
        $ ls -la

    ## COPYRIGHT

    **PROJECTNAME** is copyright (c) 2015, Rico Sta. Cruz. Released under the MIT
    license.

    ## SEE ALSO

    ronn-format(7), ronn(1)

Formatting tags
---------------

### Inline

#### Bold

    `code`
    **strong**

#### Underline

    <variable>
    _emphasis_
    *emphasis*

### Linking

#### Manual references

    sh(1)
    markdown(7)

#### Sections

    [STANDARDS][]
    [SEE ALSO][]
    [DIFFERENT TEXT][#SEE-ALSO]

#### URL links

    [URL link](http://github.com/rstacruz)
    <http://github.com>

Frequently-used sections
------------------------

{: .-one-column}

### Sections

-   `## SYNOPSIS`
-   `## DESCRIPTION`
-   `## OPTIONS`
-   `## SYNTAX`
-   `## ENVIRONMENT`
-   `## RETURN VALUES`
-   `## STANDARDS`
-   `## SECURITY CONSIDERATIONS`
-   `## BUGS`
-   `## HISTORY`
-   `## AUTHOR`
-   `## COPYRIGHT`
-   `## SEE ALSO` {: .-four-column}

Other CLI options
-----------------

### Options

    --pipe                       # write to stdout
    --server, -S                 # serve in http://localhost:1207

    --html, -5                   # default
    --fragment, -f               # html without header/title/footer

    --style=toc,80c              # toc (table of contents)
                                 # 80c (use 80c instead of 100c)
                                 # print (include print stylesheet)
                                 # dark

    --manual="MY MANUAL"         # shown on top-center
    --organization="RONN 0.7.0"  # shown on bottom-left
    --date="YYYY-MM-DD"          # shown on bottom-center

Sections
--------

<table><thead><tr class="header"><th>Section</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>1</code></td><td>General commands</td></tr><tr class="even"><td><code>2</code></td><td>System calls</td></tr><tr class="odd"><td><code>3</code></td><td>C standard lib</td></tr><tr class="even"><td><code>4</code></td><td>Special files (/dev) and drivers</td></tr><tr class="odd"><td><code>5</code></td><td>File formats</td></tr><tr class="even"><td><code>6</code></td><td>Games</td></tr><tr class="odd"><td><code>7</code></td><td>Misc</td></tr><tr class="even"><td><code>8</code></td><td>System administration commands and procedures</td></tr></tbody></table>

See [Man page sections](http://www.december.com/unix/ref/mansec.html) (december.com).

Using with npm
--------------

### npm scripts

Place manual files in `man/xxx.1.md`, then in package.json: {: .-setup}

    "scripts": {
      "prepublish": "npm run build-man",
      "build-man": "if which ronn; then ronn man/*.md --html --roff --style=toc,80c --organization=\"@rstacruz\"; fi"
    },
    "directories": {
      "man": "man"
    }

### marked-man

    npm install -g marked-man
    marked-man foo.1.md > foo.1

#### Differences

-   No definition lists
-   Can’t use `<br>`

See [marked-man](https://github.com/kapouer/marked-man).
