# Git-Tricks

Refs

## Awesome GitHub Commands Reference Sheet \(Quick Reference\)

```text
HEAD^       # 1 commit before head
HEAD^^      # 2 commits before head
HEAD~5      # 5 commits before head
```

## Branches

```text
# create a new branch
  git checkout -b $branchname
  git push origin $branchname --set-upstream

# get a remote branch
  git fetch origin
  git checkout --track origin/$branchname

# delete local remote-tracking branches (lol)
  git remote prune origin

# list merged branches
  git branch -a --merged

# delete remote branch
  git push origin :$branchname

# go back to previous branch
  git checkout -
```

## Collaboration

```text
# Rebase your changes on top of the remote master
  git pull --rebase upstream master

# Squash multiple commits into one for a cleaner git log
# (on the following screen change the word pick to either 'f' or 's')
  git rebase -i $commit_ref
```

## Submodules

```text
# Import .gitmodules
  git submodule init

# Clone missing submodules, and checkout commits
  git submodule update --init --recursive

# Update remote URLs in .gitmodules
# (Use when you changed remotes in submodules)
  git submodule sync
```

## Diff

## Diff with stats

```text
git diff --stat
app/a.txt    | 2 +-
app/b.txt    | 8 ++----
2 files changed, 10 insertions(+), 84 deletions(-)
```

## Just filenames

```text
git diff --summary
```

## Log options

```text
--oneline
  e11e9f9 Commit message here

--decorate
  shows "(origin/master)"

--graph
  shows graph lines

--date=relative
  "2 hours ago"
```

## Misc

## Cherry pick

```text
git rebase 76acada^

# get current sha1 (?)
  git show-ref HEAD -s

# show single commit info
  git log -1 f5a960b5

# Go back up to root directory
  cd "$(git rev-parse --show-top-level)"
```

## Short log

```text
$ git shortlog
 $ git shortlog HEAD~20..    # last 20 commits

 James Dean (1):
     Commit here
     Commit there

 Frank Sinatra (5):
     Another commit
     This other commit
```

## Bisect

```text
git bisect start HEAD HEAD~6
git bisect run npm test
git checkout refs/bisect/bad   # this is where it screwed up
git bisect reset
```

## Manual bisection

```text
git bisect start
git bisect good   # current version is good

git checkout HEAD~8
npm test          # see if it's good
git bisect bad    # current version is bad

git bisect reset  # abort
```

## Searching

```text
git log --grep="fixes things"  # search in commit messages
git log -S"window.alert"       # search in code
git log -G"foo.*"              # search in code (regex)
```

## GPG Signing

```text
git config set user.signingkey <GPG KEY ID>       # Sets GPG key to use for signing

git commit -m "Implement feature Y" --gpg-sign    # Or -S, GPG signs commit

git config set commit.gpgsign true                # Sign commits by default
git commit -m "Implement feature Y" --no-gpg-sign # Do not sign

---
```

## Refs

```text
HEAD^       # 1 commit before head
HEAD^^      # 2 commits before head
HEAD~5      # 5 commits before head
```

## Branches

```text
# create a new branch
  git checkout -b $branchname
  git push origin $branchname --set-upstream

# get a remote branch
  git fetch origin
  git checkout --track origin/$branchname

# delete local remote-tracking branches (lol)
  git remote prune origin

# list merged branches
  git branch -a --merged

# delete remote branch
  git push origin :$branchname

# go back to previous branch
  git checkout -
```

## Collaboration

```text
# Rebase your changes on top of the remote master
  git pull --rebase upstream master

# Squash multiple commits into one for a cleaner git log
# (on the following screen change the word pick to either 'f' or 's')
  git rebase -i $commit_ref
```

## Submodules

```text
# Import .gitmodules
  git submodule init

# Clone missing submodules, and checkout commits
  git submodule update --init --recursive

# Update remote URLs in .gitmodules
# (Use when you changed remotes in submodules)
  git submodule sync
```

## Diff

## Diff with stats

```text
git diff --stat
app/a.txt    | 2 +-
app/b.txt    | 8 ++----
2 files changed, 10 insertions(+), 84 deletions(-)
```

## Just filenames

```text
git diff --summary
```

## Log options

```text
--oneline
  e11e9f9 Commit message here

--decorate
  shows "(origin/master)"

--graph
  shows graph lines

--date=relative
  "2 hours ago"
```

## Miscellaneous

### Cherry pick

```text
git rebase 76acada^

# get current sha1 (?)
  git show-ref HEAD -s

# show single commit info
  git log -1 f5a960b5

# Go back up to root directory
  cd "$(git rev-parse --show-top-level)"
```

## Short log

```text
$ git shortlog
 $ git shortlog HEAD~20..    # last 20 commits

 James Dean (1):
     Commit here
     Commit there

 Frank Sinatra (5):
     Another commit
     This other commit
```

## Bisect

```text
git bisect start HEAD HEAD~6
git bisect run npm test
git checkout refs/bisect/bad   # this is where it screwed up
git bisect reset
```

## Manual bisection

```text
git bisect start
git bisect good   # current version is good

git checkout HEAD~8
npm test          # see if it's good
git bisect bad    # current version is bad

git bisect reset  # abort
```

## Searching

```text
git log --grep="fixes things"  # search in commit messages
git log -S"window.alert"       # search in code
git log -G"foo.*"              # search in code (regex)
```

## GPG Signing

```text
git config set user.signingkey <GPG KEY ID>       # Sets GPG key to use for signing

git commit -m "Implement feature Y" --gpg-sign    # Or -S, GPG signs commit

git config set commit.gpgsign true                # Sign commits by default
git commit -m "Implement feature Y" --no-gpg-sign # Do not sign
```

![](https://cdn-images-1.medium.com/max/800/1*yyaUC-O43Gs1qAVkdHrMdw.png)\#\#\#\# If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

Or Checkout my personal Resource Site:

[**a/A-Student-Resources**  
 _Edit description_goofy-euclid-1cd736.netlify.app](https://goofy-euclid-1cd736.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [March 6, 2021](https://medium.com/p/57e8d0292285).

[Canonical link](https://medium.com/@bryanguner/git-tricks-57e8d0292285)

Exported from [Medium](https://medium.com) on May 23, 2021.

