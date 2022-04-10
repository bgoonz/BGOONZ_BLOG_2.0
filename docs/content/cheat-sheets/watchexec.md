### Installation

#### OSX

    brew install watchexec

#### Rust

    cargo install watchexec

For Linux and Windows, get it from [GitHub releases](https://github.com/mattgreen/watchexec).

### Getting started

    watchexec --exts js,jsx -- npm test

Runs `npm test` when `js,jsx` files change.

    watchman -w lib -w test -- npm test

Runs `npm test` when `lib/` and `test/` files change.

### Other options

#### Flags

`-c` `--clear` | Clear screen |  
`-r` `--restart` | Restart process if its still running |

#### Options

`-s` `--signal SIGKILL` | Kill signal to use |  
`-d` `--debounce MS` | Debounce by `MS` milliseconds |  
`-e` `--exts EXTS` | Extensions |  
`-i` `--ignore PATTERN` | Ignore these files |  
`-w` `--watch PATH` | Watch these directories |

Also see
--------

-   [mattgreen/watchexec](https://github.com/mattgreen/watchexec) *(github.com)*
