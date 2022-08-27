---
title: Git Tricks
weight: 0
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---


## Useful config [🔗](https://w3c.github.io/git.html#config)&#xA;&#xA;

- branch.autosetuprebase=always ([documentation](https://git-scm.com/docs/git-config#git-config-branchautoSetupRebase)): I find it easier to work with Git this way
- 
- core.editor=emacs -nw ([documentation](https://git-scm.com/docs/git-config#git-config-coreeditor)): that's the editor that will be invoked every time Git needs to ask you about a commit message, when you're squashing commits, etc (and of course, you want emacs for that)

- commit.gpgsign=true ([documentation](https://git-scm.com/docs/git-config#git-config-commitgpgSign)) and gpg.program=gpg2 ([documentation](https://git-scm.com/docs/git-config#git-config-gpgprogram)): you will need to set up these variables (and possibly a couple other) if you want to [sign your commits to GitHub using GPG (recommended)](https://help.github.com/articles/signing-commits-with-gpg/)

## Safest way to "update" a local copy [🔗](https://w3c.github.io/git.html#update)

I find this sequence of commands the "safest" way to quickly "refresh" a clone of some remote repo, and at the same time check its status (where "safest" means _"reducing to the minimum the probability of messing up things with conflicts, outdated branches, uncommitted changes, etc"_):

- $ git branch -a displays information about _all_ branches, both local and _remote_
- 
- $ git pull -r fetches changes from the _remote_ and ["rebases the current branch on top of the upstream branch after fetching"](https:
- 
- $ git status shows you the status of your copy: whether there are new files, missing files, unstaged changes, or commits pending push

- $ git remote prune origin --dry tells you if any branch in the _remote_ has been recently removed. (Submit the same command _without_ the --dry part to actually remove those remotes from your local origin. That will still _not_ remove local branches automatically, but you can do that yourself with git branch -d \<BRANCH> if you see some branch is no longer necessary.)

You can have those four lines as an _alias_, or inside a _script_ somewhere.

Even better: if you set up [the aliases suggested above](https://w3c.github.io/git.html#aliases), the whole thing becomes:

You can then type it and run it just once, and, from that moment on, simply recover the line from your shell history.

For example, if you're using Bash: press Ctrl+r, then start typing a distinctive chunk of the line (eg, r;, or st;gi); if you used it not too long ago for the last time, the entire line should appear, and you can simply press Enter.

## An alias to view the history of the repo [🔗](https://w3c.github.io/git.html#lg)

Then, simply type

for a colourful graph of commits, tags and branches.
