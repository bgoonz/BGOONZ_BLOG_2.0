subtitle

2022-01-03

------------------------------------------------------------------------

title: Git log format string category: Git

weight: -1 keywords:

-   "git log –pretty=format:%H”
-   "%H - Commit hash”
-   "%an - Author”
-   "%aD - Author date”

------------------------------------------------------------------------

Log format
----------

### Pretty format

    git log --pretty="format:%H"

See the next tables on format variables.

### Hash

#### Commit

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%H</code></td><td>commit hash</td></tr><tr class="even"><td><code>%h</code></td><td>(abbrev) commit hash</td></tr></tbody></table>

#### Tree

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%T</code></td><td>tree hash</td></tr><tr class="even"><td><code>%t</code></td><td>(abbrev) tree hash</td></tr></tbody></table>

#### Parent

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%P</code></td><td>parent hash</td></tr><tr class="even"><td><code>%p</code></td><td>(abbrev) parent hash</td></tr></tbody></table>

### Commit

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%s</code></td><td>commit subject</td></tr><tr class="even"><td><code>%f</code></td><td>commit subject, filename style</td></tr><tr class="odd"><td><code>%b</code></td><td>commit body</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><code>%d</code></td><td>ref names</td></tr><tr class="even"><td><code>%e</code></td><td>encoding</td></tr></tbody></table>

Author and committer
--------------------

### Author

#### Name

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%an</code></td><td>author</td></tr><tr class="even"><td><code>%aN</code></td><td>author, respecting mailmap</td></tr></tbody></table>

#### Email

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%ae</code></td><td>author email</td></tr><tr class="even"><td><code>%aE</code></td><td>author email, respecting mailmap</td></tr></tbody></table>

#### Date

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%aD</code></td><td>author date (rfc2882)</td></tr><tr class="even"><td><code>%ar</code></td><td>author date (relative)</td></tr><tr class="odd"><td><code>%at</code></td><td>author date (unix timestamp)</td></tr><tr class="even"><td><code>%ai</code></td><td>author date (iso8601)</td></tr></tbody></table>

### Committer

#### Name

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%cn</code></td><td>committer name</td></tr><tr class="even"><td><code>%cN</code></td><td>committer name, respecting mailmap</td></tr></tbody></table>

#### Email

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%ce</code></td><td>committer email</td></tr><tr class="even"><td><code>%cE</code></td><td>committer email, respecting mailmap</td></tr></tbody></table>

#### Date

<table><thead><tr class="header"><th>Variable</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>%cD</code></td><td>committer date (rfc2882)</td></tr><tr class="even"><td><code>%cr</code></td><td>committer date (relative)</td></tr><tr class="odd"><td><code>%ct</code></td><td>committer date (unix timestamp)</td></tr><tr class="even"><td><code>%ci</code></td><td>committer date (iso8601)</td></tr></tbody></table>

Also see
--------

-   [Git log cheatsheet](./git-log)
