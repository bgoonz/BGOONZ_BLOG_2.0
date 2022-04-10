Here is a list of options and example commands

2022-01-03

------------------------------------------------------------------------

title: Command line stuff
-------------------------

List (ls)
---------

    ls [options] [paths]

### Format

<table><thead><tr class="header"><th>Switch</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-1</code></td><td>One entry per line</td></tr><tr class="even"><td><code>-l</code></td><td>Long view</td></tr><tr class="odd"><td><code>-o</code></td><td>Long view (without groups)</td></tr><tr class="even"><td><code>-C</code></td><td>Multicolumn (sorted horizontally)</td></tr><tr class="odd"><td><code>-x</code></td><td>Multicolumn (sorted vertically)</td></tr></tbody></table>

|— | `-F` | Add / after directories | | `-G` | Color | {:.shortcuts}

### Options

`-R` | Recurse |  
`-a` | Include hidden (dotfiles) |  
`-A` | Include hidden (but not . and ..) |

{:.shortcuts}

### Sorting

<table><thead><tr class="header"><th>Switch</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-r</code></td><td>reverse order</td></tr><tr class="even"><td><code>-S</code></td><td>sort by size</td></tr><tr class="odd"><td><code>-t</code></td><td>sort by time modified</td></tr><tr class="even"><td><code>-u</code></td><td>sort by time accessed</td></tr><tr class="odd"><td><code>-U</code></td><td>sort by time created</td></tr><tr class="even"><td><code>-c</code></td><td>sort by time status was changed</td></tr></tbody></table>

|— | `-h` | Human-readable size (3k) | {:.shortcuts}

  

Tail
----

    tail [-F | -f | -r] [-bN | -cN | -nN] [file ...]

### Modes

`-f` | follow |  
`-F` | follow by filename (accounts for log rotation) |  
`-r` | Reverse order |

{:.shortcuts}

### Options

`-bN` | N\*512 bytes |  
`-cN` | N bytes |  
`-nN` | N lines |  
`+N` | Start from line N |

{:.shortcuts}

  

Sudo
----

    sudo [options] <command>

### Listing

`-l` | List allowed commands |

{:.shortcuts}

### Options

`-A` | Use $SUDO\_ASKPASS |  
`-b` | Run in background |  
`-E` | Preserve environment |  
`-H` | use target’s $HOME |  
`-n` | Don’t prompt for password |  
`-P` | Preserve group vector |  
`-S` | Read password from stdin |

{:.shortcuts}

### File descriptors

`-C fd` | Close all open file descriptors |

{:.shortcuts}

### Prompt

`-p prompt` | Custom prompt (-p "%p password:”) |

{:.shortcuts}

### Interactive

<table><thead><tr class="header"><th>Switch</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-i [cmd]</code></td><td>Interactive shell without variables</td></tr><tr class="even"><td><code>-s [cmd]</code></td><td>Interactive shell</td></tr></tbody></table>

|—- | `-u user` | run as this user | | `-g group` | run as this group | {:.shortcuts}

### Timestamp

`-v` | revalidate timestamp for 5 mins |  
`-k` | invalidate timestamp |  
`-K` | just like -k |

{:.shortcuts}

  

wc (Word count)
---------------

    ... | wc [options]

`-c` | Bytes |  
`-l` | Lines |  
`-m` | Characters (incl multi-byte) |  
`-w` | Words |

{:.shortcuts}

  

Search-and-replace in all files
-------------------------------

    perl -p -i -e 's/hello/HELLO/g' **/*

  

Grep
----

    grep [options] [pattern] [file ...]

### Options

<table><thead><tr class="header"><th>Switch</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-A num</code></td><td>Print <code>num</code> lines of training context</td></tr></tbody></table>

|—- | `-G` | –basic-regexp (default) | | `-E` | –extended-regexp | | `-P` | –perl-regexp | |—- | `-f file` | –file (Get patterns for file) | | `-F` | –fixed-strings | |—- | `-h` | –no-filename | | `-H` | –with-filename | |—- | `-l` | –files-with-matches (just print filenames) | | `-L` | –files-without-match | |—- | `-r, -R` | –recursive | | `-v` | –invert-match | | `-i` | –ignore-case | {:.shortcuts}

### Synonyms

    egrep  =>  grep -E
    fgrep  =>  grep -F
