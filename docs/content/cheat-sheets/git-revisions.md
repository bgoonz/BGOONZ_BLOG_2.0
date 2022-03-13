---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

---

title: Git revisions
category: Git

description: ""
intro: |
A list of revision specifications you can use with `git log` and many other Git commands. Summarized from `gitrevisions(7)` man page.

---

### Example usages

| _`git log`_ `master...develop` | inspect differences in branches |
| _`git rebase -i`_ `HEAD~3` | rebase last 3 commits |
| _`git reset --hard`_ `HEAD@{2}` | undo last operation that changed HEAD |
| _`git checkout`_ `v2^{}` | checkout the `v2` tag (not `v2` branch) |
{: .-mute-em}

The 3rd argument in each of these commands is a `gitrevision`. These gitrevisions can be passed to many Git commands.

### Common git revisions

| Reference                    | Description                                     |
| ---------------------------- | ----------------------------------------------- |
| _`git show`_ `dae68e1`       | sha1                                            |
| _`git show`_ `HEAD`          | reference                                       |
| _`git show`_ `v1.0.0`        | tag                                             |
| ---                          | ---                                             |
| _`git show`_ `master`        | local branch                                    |
| _`git show`_ `origin/master` | remote branch                                   |
| ---                          | ---                                             |
| _`git show`_ `master~2`      | 2 commits back from master                      |
| ---                          | ---                                             |
| _`git show`_ `master..fix`   | reachable from _fix_ but not _master_           |
| _`git show`_ `master...fix`  | reachable from _fix_ and _master_, but not both |

{: .-mute-em}

These are just the common ones, there's a lot more below! (These work in many other commands, not just `git show`.)

## Reference

### Commits

| _`git checkout`_ `dae68e1` | sha1 |
{: .-mute-em}

### References

| Example                          | Description                       |
| -------------------------------- | --------------------------------- |
| _`git checkout`_ `HEAD`          | reference                         |
| _`git checkout`_ `master`        | branch                            |
| _`git checkout`_ `v1.0.0`        | tag                               |
| ---                              | ---                               |
| _`git checkout`_ `origin/master` | aka, _refs/remotes/origin/master_ |
| _`git checkout`_ `heads/master`  | aka, _refs/heads/master_          |

{: .-mute-em}

### Searching back

| Example                               | Description                              |
| ------------------------------------- | ---------------------------------------- |
| _`git checkout`_ `master@{yesterday}` | also _1 day ago_, etc                    |
| _`git checkout`_ `master@{2}`         | 2nd prior value                          |
| _`git checkout`_ `master@{push}`      | where _master_ would push to             |
| ---                                   | ---                                      |
| _`git checkout`_ `master^`            | parent commit                            |
| _`git checkout`_ `master^2`           | 2nd parent, eg, what it merged           |
| _`git checkout`_ `master~5`           | 5 parents back                           |
| _`git checkout`_ `master^0`           | this commit; disambiguates from tags     |
| ---                                   | ---                                      |
| _`git checkout`_ `v0.99.8^{tag}`      | can be _commit_, _tag_, _tree_, _object_ |
| _`git checkout`_ `v0.99.8^{}`         | defaults to _{tag}_                      |
| ---                                   | ---                                      |
| _`git checkout`_ `":/fix bug"`        | searches commit messages                 |

{: .-mute-em}

### Other

| `HEAD:README` | ... |
| `0:README` | (0 to 3) ... |

## Ranges

### Ranges

| _`git log`_ `master` | reachable parents from master |
| _`git log`_ `^master` | exclude reachable parents from master |
| _`git log`_ `master..fix` | reachable from _fix_ but not _master_ |
| _`git log`_ `master...fix` | reachable from _fix_ and _master_, but not both |
| _`git log`_ `HEAD^@` | parents of _HEAD_ |
| _`git log`_ `HEAD^!` | _HEAD_, then excluding parents's ancestors |
| _`git log`_ `HEAD^{:/fix}` | search previous *HEAD*s matching criteria |
{: .-mute-em}

### Ranges illustration

```nohighlight
A ─┬─ E ── F ── G   master
   │
   └─ B ── C ── D   fix
```

{: .-box-chars.-setup}

| _`git log`_ `master..fix` | BCD |
| _`git log`_ `master...fix` | BCD and EFG |
{: .-mute-em}

## References

-   [Git Tools - Revision Selection](https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html) _(git-scm.com)_
-   [gitrevisions(7)](https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html) _(kernel.org)_
