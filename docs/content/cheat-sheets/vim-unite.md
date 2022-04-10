### Usage

    :Unite file
    :Unite file_rec/async:!
    :Unite tag
    :Unite buffer

### Sources

-   `file/new`
-   `file/async`
-   `file_rec/async`
-   `file_rec/git`
-   `buffer`
-   `buffer_tab` (current tab only)
-   `tab`
-   `register`
-   `bookmark`
-   `source`

### Options

<table><thead><tr class="header"><th>Option</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-start-insert</code></td><td></td></tr><tr class="even"><td><code>-no-quit</code></td><td></td></tr><tr class="odd"><td><code>-winheight=10</code></td><td></td></tr><tr class="even"><td><code>-quick-match</code></td><td>select by pressing asdf keys</td></tr><tr class="odd"><td><code>-winwidth=40</code></td><td>use with vertical</td></tr><tr class="even"><td><code>-no-split</code></td><td>open in current buffer</td></tr><tr class="odd"><td><code>-auto-preview</code></td><td>great for outline</td></tr><tr class="even"><td><code>-vertical</code></td><td>open as sidebar</td></tr><tr class="odd"><td><code>-buffer-name=xxx -resume</code></td><td>resume the next time it’s called (faster)</td></tr><tr class="even"><td><code>-input=</code></td><td>reset input (use with -resume)</td></tr><tr class="odd"><td><code>-unique</code></td><td>remove duplicates (eg, if using <code>file_rec</code> with <code>file_mru</code>)</td></tr></tbody></table>
