### Installing

    # MacOS + Homebrew
    $ brew install tig --HEAD

    # Ubuntu
    $ sudo apt install tig

### Invocation

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>tig</code></td><td></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>tig status</code></td><td>Status</td></tr><tr class="even"><td><code>tig blame FILE</code></td><td>Blame</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>tig master</code></td><td>Show a branch</td></tr><tr class="odd"><td><code>tig test..master</code></td><td>Show difference between two branches</td></tr><tr class="even"><td><code>tig FILE</code></td><td>Show history of file</td></tr><tr class="odd"><td><code>tig v0.0.3:README</code></td><td>Show contents of file in a specific revision</td></tr><tr class="even"><td><code>tig -C /repo/path</code></td><td>Run in dir <code>/repo/path</code> (like <code>git -C</code>)</td></tr></tbody></table>

You can substitute `git log` → `tig`.

Shortcut keys
-------------

### Switching views

`m` | Main view |  
`s` | Status |  
`t` | Tree (files) |  
`y` | Stash view |  
`g` | Grep |  
`h` | Help |

{: .-shortcuts}

### All views

<table><thead><tr class="header"><th>Shortcut</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>j</code> <code>k</code></td><td>Up/down</td></tr><tr class="even"><td><code>J</code> <code>K</code></td><td>Next/previous</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>&lt;</code></td><td>Back</td></tr><tr class="odd"><td><code>R</code></td><td>Refresh</td></tr><tr class="even"><td><code>q</code></td><td>Close</td></tr><tr class="odd"><td><code>Q</code></td><td>Close all</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>^N</code></td><td>Next on parent view</td></tr><tr class="even"><td><code>^P</code></td><td>Previous on parent view</td></tr></tbody></table>

{: .-shortcuts}

### `m` - Main view

`D` | Toggle date display modes |  
`A` | Toggle author display modes |  
`X` | Toggle commit sha |  
`C` | Cherry pick a commit |

{: .-shortcuts}

### `s` - Status view

`u` | Stage/unstage file or chunk |  
`!` | Revert file or chunk |  
`C` | Commit |  
`M` | Merge |  
`1` | Stage line |  
`[` `]` | Increase/decrease the diff context |

{: .-shortcuts}

### `h` - Branch view

`i` | Change sort header |

{: .-shortcuts}

### `h` - Blame view

`,` | Parent commit |

{: .-shortcuts}
