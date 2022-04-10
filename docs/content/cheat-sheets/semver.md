### Semver

Given a version number `MAJOR.MINOR.PATCH`: {: .-setup}

`MAJOR` | incompatible API changes |  
`MINOR` | add functionality (backwards-compatible) |  
`PATCH` | bug fixes (backwards-compatible) |

### Simple ranges

      1.2.3
     =1.2.3
     >1.2.3
     <1.2.3
    >=1.2.3

Note that suffixed versions (`1.2.3-rc1`) are not matched.

### Ranges

<table><thead><tr class="header"><th>Range</th><th>Description</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><code>~1.2.3</code></td><td>is <code>&gt;=1.2.3 &lt;1.3.0</code></td><td></td></tr><tr class="even"><td>—</td><td>—</td><td>—</td></tr><tr class="odd"><td><code>^1.2.3</code></td><td>is <code>&gt;=1.2.3 &lt;2.0.0</code></td><td></td></tr><tr class="even"><td><code>^0.2.3</code></td><td>is <code>&gt;=0.2.3 &lt;0.3.0</code></td><td>(0.x.x is special)</td></tr><tr class="odd"><td><code>^0.0.1</code></td><td>is <code>=0.0.1</code></td><td>(0.0.x is special)</td></tr><tr class="even"><td>—</td><td>—</td><td>—</td></tr><tr class="odd"><td><code>^1.2</code></td><td>is <code>&gt;=1.2.0 &lt;2.0.0</code></td><td>(like ^1.2.0)</td></tr><tr class="even"><td><code>~1.2</code></td><td>is <code>&gt;=1.2.0 &lt;1.3.0</code></td><td>(like ~1.2.0)</td></tr><tr class="odd"><td>—</td><td>—</td><td>—</td></tr><tr class="even"><td><code>^1</code></td><td>is <code>&gt;=1.0.0 &lt;2.0.0</code></td><td></td></tr><tr class="odd"><td><code>~1</code></td><td>same</td><td></td></tr><tr class="even"><td><code>1.x</code></td><td>same</td><td></td></tr><tr class="odd"><td><code>1.*</code></td><td>same</td><td></td></tr><tr class="even"><td><code>1</code></td><td>same</td><td></td></tr><tr class="odd"><td>—</td><td>—</td><td>—</td></tr><tr class="even"><td><code>*</code></td><td>any version</td><td></td></tr><tr class="odd"><td><code>x</code></td><td>same</td><td></td></tr></tbody></table>

{: .-shortcuts}

### Hyphenated ranges

<table><thead><tr class="header"><th>Range</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>1.2.3 - 2.3.4</code></td><td>is <code>&gt;=1.2.3 &lt;=2.3.4</code></td></tr></tbody></table>

#### Partial right

<table><thead><tr class="header"><th>Range</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>1.2.3 - 2.3</code></td><td>is <code>&gt;=1.2.3 &lt;2.4.0</code></td></tr><tr class="even"><td><code>1.2.3 - 2</code></td><td>is <code>&gt;=1.2.3 &lt;3.0.0</code></td></tr></tbody></table>

#### Partial left

<table><thead><tr class="header"><th>Range</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>1.2 - 2.3.0</code></td><td>is <code>1.2.0 - 2.3.0</code></td></tr></tbody></table>

When the right is partial (eg, `2.3`), missing pieces are assumed to be `x` (eg, `2.3.x`).

When the left is partial (eg, `1.2`), missing pieces are assumed to be `0` (eg, `1.2.0`).

### Combining ranges

<table><thead><tr class="header"><th>Range</th><th>Description</th><th></th><th></th></tr></thead><tbody><tr class="odd"><td><code>&gt;=0.14 &lt;16</code></td><td>And (space-separated)</td><td></td><td></td></tr><tr class="even"><td><code>0.14.x      |                       | 15.x.x</code></td><td>Or (pipe-separated)</td><td></td><td></td></tr></tbody></table>

### Pre-releases

    1.2.3-prerelease+build

### Explanation

`^` | means "compatible with” |  
`~` | means "reasonably close to” |  
`0.x.x` | is for "initial development” |  
`1.x.x` | means public API is defined |

{: .-shortcuts}

References
----------

{: .-one-column}

-   <a href="http://semver.org/" class="uri">http://semver.org/</a>
-   <a href="https://docs.npmjs.com/misc/semver" class="uri">https://docs.npmjs.com/misc/semver</a>
