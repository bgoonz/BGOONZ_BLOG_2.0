Writing help files
------------------

{: .-left-reference}

### Creating a document

    :e doc/potion.txt
    :set ft=help
    :set ft=text

Use `ft=help` to preview it, and `ft=text` to edit it.

### Example

    *ack.txt*   Plugin that integrates ack with Vim

    ==============================================================================
    USAGE INSTRUCTIONS                                                 *ack-usage*

    :Ack[!] {pattern}                                                       *:Ack*

        Search recursively for {pattern}. See |:AckAdd|.
        Also see http://beyondgrep.com for more information.

    vim:tw=78:ts=8:ft=help:norl:

This is a cheatsheet for writing Vim help files. See: `:help help-writing`

Syntax
------

### Reference

<table><thead><tr class="header"><th>Code</th><th>Description</th><th>Example</th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr class="odd"><td><em>Inline items</em></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>—–</td><td>—–</td><td>—–</td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td><code>*tags*</code></td><td>Tags</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td><code>| link-to-tags   |</code></td><td>Links to tags</td><td><code>| :command |</code></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td><code>'vimoption'</code></td><td>Vim option</td><td><code>'textwidth'</code></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>—–</td><td>—–</td><td>—–</td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td><code>{code-text}</code></td><td>Code text</td><td><code>{Visual}gf</code></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td><code>&lt;code-text&gt;</code></td><td>Code text</td><td><code>&lt;PageDown&gt;</code></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td><code>`code-text`</code></td><td>Code text</td><td><code>`set fo=want`</code></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td><code>CTRL-X</code></td><td>Code text</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>—–</td><td>—–</td><td>—–</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td><em>Block items</em></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>—–</td><td>—–</td><td>—–</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td><code>INTRODUCTION *tag*</code></td><td>Section header</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td><code>Column heading~</code></td><td>Highlighting</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td><code>www.url.com</code></td><td>Web URL</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>—–</td><td>—–</td><td>—–</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td><code>=====</code></td><td>Separator</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td><code>-----</code></td><td>Separator</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

### Tags

-   Tags are created with asterisks, eg, `*potion-usage*`
-   Links to tags are `|potion-usage|`
-   Press `^]` to jump to a tag

### Code blocks

    Example: >
     xyz
    <

Surround with `>` and `<` characters

### File header

    *potion.txt*  functionality for the potion programming language

It’s customary to start a file with a tag of the filename, plus a description.

### Heading

    ==============================================================================
    CONTENTS                                                     *potion-contents*

Starts with `ALL CAPS`, ends with `*a-tag*`

### Notes

Using `*Todo` and `*Error` will highlight your notes.

        *Todo something to do
        *Error something wrong

### Final modeline

    vim:tw=78:ts=8:ft=help:norl:

Conventions
-----------

### Table of contents

    |rails-introduction|            Introduction and Feature Summary
    |rails-commands|                General Commands
    |rails-navigation|              Navigation

        1.Intro...................................|ergonomic|
        2.Note to use..............................|CAPSLOCK|
        3.Insert Mode Remappings............|ergonomicInsert|

### Author lines

    Author:  Jack Hackness <captain@time.com>         *xyz-author*
    License: Same terms as Vim itself (see |license|)
