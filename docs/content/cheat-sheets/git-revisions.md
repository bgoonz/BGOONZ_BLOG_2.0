subtitle

2022-01-03

------------------------------------------------------------------------

title: Git revisions category: Git

description: "" intro: | A list of revision specifications you can use with `git log` and many other Git commands. Summarized from `gitrevisions(7)` man page.

------------------------------------------------------------------------

### Example usages

*`git log`* `master...develop` | inspect differences in branches |  
*`git rebase -i`* `HEAD~3` | rebase last 3 commits |  
*`git reset --hard`* `HEAD@{2}` | undo last operation that changed HEAD |  
*`git checkout`* `v2^{}` | checkout the `v2` tag (not `v2` branch) |

{: .-mute-em}

The 3rd argument in each of these commands is a `gitrevision`. These gitrevisions can be passed to many Git commands.

### Common git revisions

<table><thead><tr class="header"><th>Reference</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><em><code>git show</code></em> <code>dae68e1</code></td><td>sha1</td></tr><tr class="even"><td><em><code>git show</code></em> <code>HEAD</code></td><td>reference</td></tr><tr class="odd"><td><em><code>git show</code></em> <code>v1.0.0</code></td><td>tag</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><em><code>git show</code></em> <code>master</code></td><td>local branch</td></tr><tr class="even"><td><em><code>git show</code></em> <code>origin/master</code></td><td>remote branch</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><em><code>git show</code></em> <code>master~2</code></td><td>2 commits back from master</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><em><code>git show</code></em> <code>master..fix</code></td><td>reachable from <em>fix</em> but not <em>master</em></td></tr><tr class="odd"><td><em><code>git show</code></em> <code>master...fix</code></td><td>reachable from <em>fix</em> and <em>master</em>, but not both</td></tr></tbody></table>

{: .-mute-em}

These are just the common ones, there’s a lot more below! (These work in many other commands, not just `git show`.)

Reference
---------

### Commits

*`git checkout`* `dae68e1` | sha1 |

{: .-mute-em}

### References

<table><thead><tr class="header"><th>Example</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><em><code>git checkout</code></em> <code>HEAD</code></td><td>reference</td></tr><tr class="even"><td><em><code>git checkout</code></em> <code>master</code></td><td>branch</td></tr><tr class="odd"><td><em><code>git checkout</code></em> <code>v1.0.0</code></td><td>tag</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><em><code>git checkout</code></em> <code>origin/master</code></td><td>aka, <em>refs/remotes/origin/master</em></td></tr><tr class="even"><td><em><code>git checkout</code></em> <code>heads/master</code></td><td>aka, <em>refs/heads/master</em></td></tr></tbody></table>

{: .-mute-em}

### Searching back

<table><thead><tr class="header"><th>Example</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><em><code>git checkout</code></em> <code>master@{yesterday}</code></td><td>also <em>1 day ago</em>, etc</td></tr><tr class="even"><td><em><code>git checkout</code></em> <code>master@{2}</code></td><td>2nd prior value</td></tr><tr class="odd"><td><em><code>git checkout</code></em> <code>master@{push}</code></td><td>where <em>master</em> would push to</td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><em><code>git checkout</code></em> <code>master^</code></td><td>parent commit</td></tr><tr class="even"><td><em><code>git checkout</code></em> <code>master^2</code></td><td>2nd parent, eg, what it merged</td></tr><tr class="odd"><td><em><code>git checkout</code></em> <code>master~5</code></td><td>5 parents back</td></tr><tr class="even"><td><em><code>git checkout</code></em> <code>master^0</code></td><td>this commit; disambiguates from tags</td></tr><tr class="odd"><td>—</td><td>—</td></tr><tr class="even"><td><em><code>git checkout</code></em> <code>v0.99.8^{tag}</code></td><td>can be <em>commit</em>, <em>tag</em>, <em>tree</em>, <em>object</em></td></tr><tr class="odd"><td><em><code>git checkout</code></em> <code>v0.99.8^{}</code></td><td>defaults to <em>{tag}</em></td></tr><tr class="even"><td>—</td><td>—</td></tr><tr class="odd"><td><em><code>git checkout</code></em> <code>":/fix bug"</code></td><td>searches commit messages</td></tr></tbody></table>

{: .-mute-em}

### Other

`HEAD:README` | … |  
`0:README` | (0 to 3) … |

Ranges
------

### Ranges

*`git log`* `master` | reachable parents from master |  
*`git log`* `^master` | exclude reachable parents from master |  
*`git log`* `master..fix` | reachable from *fix* but not *master* |  
*`git log`* `master...fix` | reachable from *fix* and *master*, but not both |  
*`git log`* `HEAD^@` | parents of *HEAD* |  
*`git log`* `HEAD^!` | *HEAD*, then excluding parents’s ancestors |  
*`git log`* `HEAD^{:/fix}` | search previous *HEAD*s matching criteria |

{: .-mute-em}

### Ranges illustration

    A ─┬─ E ── F ── G   master
       │
       └─ B ── C ── D   fix

{: .-box-chars.-setup}

*`git log`* `master..fix` | BCD |  
*`git log`* `master...fix` | BCD and EFG |

{: .-mute-em}

References
----------

-   [Git Tools - Revision Selection](https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html) *(git-scm.com)*
-   [gitrevisions(7)](https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html) *(kernel.org)*
