---
title: Vimdiff
category: Vim

weight: -10
intro: |
    [Vim](http://www.vim.org/) is a very efficient text editor. This reference was made for Vim 8.0.
---

## Getting started

### Navigating

| Shortcut | Description         |
| -------- | ------------------- |
| `]c`     | Next difference     |
| `[c`     | Previous difference |

{: .-shortcuts}

### Editing

| Shortcut      | Description                                            |
| ------------- | ------------------------------------------------------ |
| `do`          | Diff Obtain! <br>Pull the changes to the current file. |
| `dp`          | Diff Put! <br>Push the changes to the other file.      |
| ---           | ---                                                    |
| `:diffupdate` | Re-scan the files for differences.                     |
| `ZQ`          | Quit without checking changes                          |

{: .-shortcuts}

### Folds

| Shortcut      | Description                  |
| ------------- | ---------------------------- |
| `zo` _/_ `zO` | Open                         |
| `zc` _/_ `zC` | Close                        |
| `za` _/_ `zA` | Toggle                       |
| ---           | ---                          |
| `zv`          | Open folds for this line     |
| ---           | ---                          |
| `zM`          | Close all                    |
| `zR`          | Open all                     |
| ---           | ---                          |
| `zm`          | Fold more _(foldlevel += 1)_ |
| `zr`          | Fold less _(foldlevel -= 1)_ |
| ---           | ---                          |
| `zx`          | Update folds                 |

{: .-shortcuts}

## Also see

-   [Vim cheatsheet](https://vim.rtorr.com/) _(vim.rotrr.com)_
-   [Vim documentation](http://vimdoc.sourceforge.net/htmldoc/) _(vimdoc.sourceforge.net)_
-   [Interactive Vim tutorial](http://openvim.com/) _(openvim.com)_
