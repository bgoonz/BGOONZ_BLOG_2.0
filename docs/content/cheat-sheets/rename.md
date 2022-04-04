### Installation

    brew install rename

See: <a href="http://plasmasturm.org/code/rename/" class="uri">http://plasmasturm.org/code/rename/</a>

### Regex substitution

    rename 's/hello/world/' *.txt

Rename `hello.txt` to `world.txt` and so on in `*.txt`.

### Replace extension

    rename -s .png .jpg.png *.png

Replace `.png` with `.jpg.png` in `*.png`.

### Options

<table><thead><tr class="header"><th>Option</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-n</code></td><td>Simulation</td></tr><tr class="even"><td><code>-l</code></td><td>Symlink instead of rename</td></tr><tr class="odd"><td><code>-i</code></td><td>Interactive</td></tr></tbody></table>

Also see
--------

-   [Rename website](http://plasmasturm.org/code/rename/) *(plasmasturm.org)*
