### Installation

#### Install rbenv and ruby-build

    git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
    git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build

#### Add to ~/.bash\_profile

    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
    echo 'eval "$(rbenv init -)"' >> ~/.bash_profile

#### Verify installation

    type rbenv   # → "rbenv is a function"

These are generic instructions; there may be rbenv packages available for your OS.

See: [Installation](https://github.com/rbenv/rbenv#installation)

### Managing versions

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>rbenv install -l</code></td><td>List all available versions</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>rbenv install 2.2.1</code></td><td>Install Ruby <em>2.2.1</em></td></tr><tr class="even"><td><code>rbenv uninstall 2.2.1</code></td><td>Uninstall Ruby <em>2.2.1</em></td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><code>rbenv versions</code></td><td>See installed versions</td></tr><tr class="odd"><td><code>rbenv version</code></td><td>See current version</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>rbenv which &lt;NAME&gt;</code></td><td>Display path to executable</td></tr><tr class="even"><td><code>rbenv rehash</code></td><td>Re-write binstubs</td></tr></tbody></table>

Using versions
--------------

### Locally

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>rbenv local 2.2.2</code></td><td>Use Ruby <em>2.2.2</em> in project</td></tr><tr class="even"><td><code>rbenv local --unset</code></td><td>Undo above</td></tr></tbody></table>

Application-specific version numbers are stored in `.ruby-version`.

### Globally

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>rbenv global 2.2.2</code></td><td>Use Ruby <em>2.2.2</em> globally</td></tr><tr class="even"><td><code>rbenv global --unset</code></td><td>Undo above</td></tr></tbody></table>

Global version numbers are stored in `~/.rbenv/version`.

### Shell

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>rbenv shell 2.2.2</code></td><td>Use Ruby <em>2.2.2</em> in shell</td></tr><tr class="even"><td><code>rbenv shell --unset</code></td><td>Undo above</td></tr></tbody></table>

Shell-local version numbers are stored as environment variables.

References
----------

-   [rbenv project page](https://github.com/rbenv/rbenv) *(github.com)*
-   [rbenv ubuntu server cheatsheet](https://gist.github.com/rahul286/7160839f4425a3b7e718) *(gist.github.com)*
