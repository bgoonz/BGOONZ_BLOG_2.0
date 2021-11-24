---
title: Git Reference
weight: 0
excerpt: Git Reference
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

## Git Reference

<iframe src="https://bgoonz.github.io/GIT_GUIDE_Bgoonz/" height="800px" width="1600px" scrolling="yes" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" title="YouTube video
        player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

Git is a distributed version control and source code management system.

It does this through a series of snapshots of your project, and it works
with those snapshots to provide you with functionality to version and
manage your source code.

## Versioning Concepts

### What is version control?

Version control is a system that records changes to a file(s), over time.

### Centralized Versioning vs. Distributed Versioning

-   Centralized version control focuses on synchronizing, tracking, and backing
    up files.
-   Distributed version control focuses on sharing changes. Every change has a
    unique id.
-   Distributed systems have no defined structure. You could easily have a SVN
    style, centralized system, with git.

[Additional Information](http://git-scm.com/book/en/Getting-Started-About-Version-Control)

### Why Use Git?

-   Can work offline.
-   Collaborating with others is easy!
-   Branching is easy!
-   Branching is fast!
-   Merging is easy!
-   Git is fast.
-   Git is flexible.

## Git Architecture

### Repository

A set of files, directories, historical records, commits, and heads. Imagine it
as a source code data structure, with the attribute that each source code
"element" gives you access to its revision history, among other things.

A git repository is comprised of the .git directory & working tree.

### .git Directory (component of repository)

The .git directory contains all the configurations, logs, branches, HEAD, and
more.
[Detailed List.](http://gitready.com/advanced/2009/03/23/whats-inside-your-git-directory.html)

### Working Tree (component of repository)

This is basically the directories and files in your repository. It is often
referred to as your working directory.

### Index (component of .git dir)

The Index is the staging area in git. It's basically a layer that separates
your working tree from the Git repository. This gives developers more power
over what gets sent to the Git repository.

### Commit

A git commit is a snapshot of a set of changes, or manipulations to your
Working Tree. For example, if you added 5 files, and removed 2 others, these
changes will be contained in a commit (or snapshot). This commit can then be
pushed to other repositories, or not!

### Branch

A branch is essentially a pointer to the last commit you made. As you go on
committing, this pointer will automatically update to point to the latest commit.

### Tag

A tag is a mark on specific point in history. Typically people use this
functionality to mark release points (v1.0, and so on).

### HEAD and head (component of .git dir)

HEAD is a pointer that points to the current branch. A repository only has 1
_active_ HEAD.
head is a pointer that points to any commit. A repository can have any number
of heads.

### Stages of Git

-   Modified - Changes have been made to a file but file has not been committed
    to Git Database yet
-   Staged - Marks a modified file to go into your next commit snapshot
-   Committed - Files have been committed to the Git Database

### Conceptual Resources

-   [Git For Computer Scientists](http://eagain.net/articles/git-for-computer-scientists/)
-   [Git For Designers](http://hoth.entp.com/output/git_for_designers.html)

## Commands

### init

Create an empty Git repository. The Git repository's settings, stored
information, and more is stored in a directory (a folder) named ".git".

```bash
$ git init
```

### config

To configure settings. Whether it be for the repository, the system itself,
or global configurations ( global config file is `~/.gitconfig` ).

```bash
# Print & Set Some Basic Config Variables (Global)
$ git config --global user.email "MyEmail@Zoho.com"
$ git config --global user.name "My Name"
```

[Learn More About git config.](http://git-scm.com/docs/git-config)

### help

To give you quick access to an extremely detailed guide of each command. Or to
just give you a quick reminder of some semantics.

```bash
# Quickly check available commands
$ git help

# Check all available commands
$ git help -a

# Command specific help - user manual
# git help <command_here>
$ git help add
$ git help commit
$ git help init
# or git <command_here> --help
$ git add --help
$ git commit --help
$ git init --help
```

### ignore files

To intentionally untrack file(s) & folder(s) from git. Typically meant for
private & temp files which would otherwise be shared in the repository.

```bash
$ echo "temp/" >> .gitignore
$ echo "private_key" >> .gitignore
```

### status

To show differences between the index file (basically your working copy/repo)
and the current HEAD commit.

```bash
# Will display the branch, untracked files, changes and other differences
$ git status

# To learn other "tid bits" about git status
$ git help status
```

### add

To add files to the staging area/index. If you do not `git add` new files to
the staging area/index, they will not be included in commits!

```bash
# add a file in your current working directory
$ git add HelloWorld.java

# add a file in a nested dir
$ git add /path/to/file/HelloWorld.c

# Regular Expression support!
$ git add ./*.java

# You can also add everything in your working directory to the staging area.
$ git add -A
```

This only adds a file to the staging area/index, it doesn't commit it to the
working directory/repo.

### branch

Manage your branches. You can view, edit, create, delete branches using this
command.

```bash
# list existing branches & remotes
$ git branch -a

# create a new branch
$ git branch myNewBranch

# delete a branch
$ git branch -d myBranch

# rename a branch
# git branch -m <oldname> <newname>
$ git branch -m myBranchName myNewBranchName

# edit a branch's description
$ git branch myBranchName --edit-description
```

### tag

Manage your tags

```bash
# List tags
$ git tag

# Create a annotated tag
# The -m specifies a tagging message, which is stored with the tag.
# If you don’t specify a message for an annotated tag,
# Git launches your editor so you can type it in.
$ git tag -a v2.0 -m 'my version 2.0'

# Show info about tag
# That shows the tagger information, the date the commit was tagged,
# and the annotation message before showing the commit information.
$ git show v2.0

# Push a single tag to remote
$ git push origin v2.0

# Push a lot of tags to remote
$ git push origin --tags
```

### checkout

Updates all files in the working tree to match the version in the index, or
specified tree.

```bash
# Checkout a repo - defaults to master branch
$ git checkout

# Checkout a specified branch
$ git checkout branchName

# Create a new branch & switch to it
# equivalent to "git branch <name>; git checkout <name>"

$ git checkout -b newBranch
```

### clone

Clones, or copies, an existing repository into a new directory. It also adds
remote-tracking branches for each branch in the cloned repo, which allows you
to push to a remote branch.

```bash
# Clone learnxinyminutes-docs
$ git clone https://github.com/adambard/learnxinyminutes-docs.git

# shallow clone - faster cloning that pulls only latest snapshot
$ git clone --depth 1 https://github.com/adambard/learnxinyminutes-docs.git

# clone only a specific branch
$ git clone -b master-cn https://github.com/adambard/learnxinyminutes-docs.git --single-branch
```

### commit

Stores the current contents of the index in a new "commit." This commit
contains the changes made and a message created by the user.

```bash
# commit with a message
$ git commit -m "Added multiplyNumbers() function to HelloWorld.c"

# signed commit with a message (user.signingkey must have been set
# with your GPG key e.g. git config --global user.signingkey 5173AAD5)
$ git commit -S -m "signed commit message"

# automatically stage modified or deleted files, except new files, and then commit
$ git commit -a -m "Modified foo.php and removed bar.php"

# change last commit (this deletes previous commit with a fresh commit)
$ git commit --amend -m "Correct message"
```

### diff

Shows differences between a file in the working directory, index and commits.

```bash
# Show difference between your working dir and the index
$ git diff

# Show differences between the index and the most recent commit.
$ git diff --cached

# Show differences between your working dir and the most recent commit
$ git diff HEAD
```

### grep

Allows you to quickly search a repository.

Optional Configurations:

```bash
# Thanks to Travis Jeffery for these
# Set line numbers to be shown in grep search results
$ git config --global grep.lineNumber true

# Make search results more readable, including grouping
$ git config --global alias.g "grep --break --heading --line-number"
```

```bash
# Search for "variableName" in all java files
$ git grep 'variableName' -- '*.java'

# Search for a line that contains "arrayListName" and, "add" or "remove"
$ git grep -e 'arrayListName' --and \( -e add -e remove \)
```

Google is your friend; for more examples
[Git Grep Ninja](http://travisjeffery.com/b/2012/02/search-a-git-repo-like-a-ninja)

### log

Display commits to the repository.

```bash
# Show all commits
$ git log

# Show only commit message & ref
$ git log --oneline

# Show merge commits only
$ git log --merges

# Show all commits represented by an ASCII graph
$ git log --graph
```

### merge

"Merge" in changes from external commits into the current branch.

```bash
# Merge the specified branch into the current.
$ git merge branchName

# Always generate a merge commit when merging
$ git merge --no-ff branchName
```

### mv

Rename or move a file

```bash
# Renaming a file
$ git mv HelloWorld.c HelloNewWorld.c

# Moving a file
$ git mv HelloWorld.c ./new/path/HelloWorld.c

# Force rename or move
# "existingFile" already exists in the directory, will be overwritten
$ git mv -f myFile existingFile
```

### pull

Pulls from a repository and merges it with another branch.

```bash
# Update your local repo, by merging in new changes
# from the remote "origin" and "master" branch.
# git pull <remote> <branch>
$ git pull origin master

# By default, git pull will update your current branch
# by merging in new changes from its remote-tracking branch
$ git pull

# Merge in changes from remote branch and rebase
# branch commits onto your local repo, like: "git fetch <remote> <branch>, git
# rebase <remote>/<branch>"
$ git pull origin master --rebase
```

### push

Push and merge changes from a branch to a remote & branch.

```bash
# Push and merge changes from a local repo to a
# remote named "origin" and "master" branch.
# git push <remote> <branch>
$ git push origin master

# By default, git push will push and merge changes from
# the current branch to its remote-tracking branch
$ git push

# To link up current local branch with a remote branch, add -u flag:
$ git push -u origin master
# Now, anytime you want to push from that same local branch, use shortcut:
$ git push
```

### stash

Stashing takes the dirty state of your working directory and saves it on a
stack of unfinished changes that you can reapply at any time.

Let's say you've been doing some work in your git repo, but you want to pull
from the remote. Since you have dirty (uncommitted) changes to some files, you
are not able to run `git pull`. Instead, you can run `git stash` to save your
changes onto a stack!

```bash
$ git stash
Saved working directory and index state \
  "WIP on master: 049d078 added the index file"
  HEAD is now at 049d078 added the index file
  (To restore them type "git stash apply")
```

Now you can pull!

```bash
git pull
```

`...changes apply...`

Now check that everything is OK

```bash
$ git status
# On branch master
nothing to commit, working directory clean
```

You can see what "hunks" you've stashed so far using `git stash list`.
Since the "hunks" are stored in a Last-In-First-Out stack, our most recent
change will be at top.

```bash
$ git stash list
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log
```

Now let's apply our dirty changes back by popping them off the stack.

```bash
$ git stash pop
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#      modified:   index.html
#      modified:   lib/simplegit.rb
#
```

`git stash apply` does the same thing

Now you're ready to get back to work on your stuff!

[Additional Reading.](http://git-scm.com/book/en/v1/Git-Tools-Stashing)

### rebase (caution)

Take all changes that were committed on one branch, and replay them onto
another branch.
_Do not rebase commits that you have pushed to a public repo_.

```bash
# Rebase experimentBranch onto master
# git rebase <basebranch> <topicbranch>
$ git rebase master experimentBranch
```

[Additional Reading.](http://git-scm.com/book/en/Git-Branching-Rebasing)

### reset (caution)

Reset the current HEAD to the specified state. This allows you to undo merges,
pulls, commits, adds, and more. It's a great command but also dangerous if you
don't know what you are doing.

```bash
# Reset the staging area, to match the latest commit (leaves dir unchanged)
$ git reset

# Reset the staging area, to match the latest commit, and overwrite working dir
$ git reset --hard

# Moves the current branch tip to the specified commit (leaves dir unchanged)
# all changes still exist in the directory.
$ git reset 31f2bb1

# Moves the current branch tip backward to the specified commit
# and makes the working dir match (deletes uncommitted changes and all commits
# after the specified commit).
$ git reset --hard 31f2bb1
```

### reflog (caution)

Reflog will list most of the git commands you have done for a given time period,
default 90 days.

This give you the chance to reverse any git commands that have gone wrong
(for instance, if a rebase has broken your application).

You can do this:

1. `git reflog` to list all of the git commands for the rebase

```
38b323f HEAD@{0}: rebase -i (finish): returning to refs/heads/feature/add_git_reflog
38b323f HEAD@{1}: rebase -i (pick): Clarify inc/dec operators
4fff859 HEAD@{2}: rebase -i (pick): Update java.html.markdown
34ed963 HEAD@{3}: rebase -i (pick): [yaml/en] Add more resources (#1666)
ed8ddf2 HEAD@{4}: rebase -i (pick): pythonstatcomp spanish translation (#1748)
2e6c386 HEAD@{5}: rebase -i (start): checkout 02fb96d
```

2. Select where to reset to, in our case its `2e6c386`, or `HEAD@{5}`
3. 'git reset --hard HEAD@{5}' this will reset your repo to that head
4. You can start the rebase again or leave it alone.

[Additional Reading.](https://git-scm.com/docs/git-reflog)

### revert

Revert can be used to undo a commit. It should not be confused with reset which
restores the state of a project to a previous point. Revert will add a new
commit which is the inverse of the specified commit, thus reverting it.

```bash
# Revert a specified commit
$ git revert <commit>
```

### rm

The opposite of git add, git rm removes files from the current working tree.

```bash
# remove HelloWorld.c
$ git rm HelloWorld.c

# Remove a file from a nested dir
$ git rm /pather/to/the/file/HelloWorld.c



```

-   `git checkout`
-   `git reset`
-   `git restore`
-   `git switch`

I'll throw in one more, the misnamed `git revert`, as well.

### From an end-user perspective

All you *need* are `git checkout`, `git reset`, and `git revert`. These commands have been in Git all along.

But `git checkout` has, in effect, two *modes of operation*. One mode is "safe": it won't accidentally destroy any unsaved work. The other mode is "unsafe": if you use it, and it tells Git to wipe out some unsaved file, Git assumes that (a) you knew it meant that and (b) you really did mean to wipe out your unsaved file, so Git immediately wipes out your unsaved file.

This is not very friendly, so the Git folks finally---after years of users griping---split `git checkout` into two new commands. This leads us to:

### From a historical perspective

`git restore` is *new*, having first come into existence in August 2019, in Git 2.23. `git reset` is very old, having been in Git all along, dating back to before 2005. Both commands have the ability to destroy unsaved work.

The `git switch` command is also new, introduced along with `git restore` in Git 2.23. It implements the "safe half" of `git checkout`; `git restore` implements the "unsafe half".

### When would you use which command?

This is the most complicated part, and to really understand it, we need to know the following items:

-   Git is really all about *commits*. Commits get stored *in* the Git repository. The `git push` and `git fetch` commands transfer *commits*---whole commits, as an all-or-nothing deal^1^---to the other Git. You either have all of a commit, or you don't have it. Other commands, such as `git merge` or `git rebase`, all work with *local* commits. The `pull` command runs `fetch` (to get commits) followed by a second command to work with the commits once they're local.

-   New commits *add to the repository*. You almost never *remove* a commit *from* the repository. Only one of the five commands listed here---checkout, reset, restore, revert, and switch---is capable of removing commits.^2^

-   Each commit is numbered by its *hash ID*, which is unique to that one particular commit. It's actually computed from what's *in* the commit, which is how Git makes these numbers work across all Gits eveywhere. This means that what is in the commit is frozen for all time: if you change anything, what you get is a new commit with a new number, and the old commit is still there, with its same old number.

-   Each commit stores two things: a snapshot, and metadata. The metadata include the hash ID(s) of some previous commit(s). This makes commits form backwards-looking chains.

-   A *branch name* holds the hash ID of one commit. This makes the branch name *find* that commit, which in turn means two things:

    -   that particular commit is the *tip commit* of that branch; and
    -   all commits leading up to and including that tip commit are *on* that branch.

-   We're also going to talk about Git's *index* in a moment, and your *working tree*. They're separate from these but worth mentioning early, especially since the index has three names: Git sometimes calls it the *index*, sometimes calls it the *staging area*, and sometimes---rarely these days---calls it the *cache*. All three names refer to the same thing.

Everything up through the *branch name* is, I think, best understood via pictures (at least for most people). If we draw a series of commits, with newer commits towards the right, using `o` for each commit and omitting some commits for space or whatever, we get something like this:

```
        o--o---o   <-- feature-top
       /\
o--o--o--o--...--o---o--o   <-- main
    \               /
     o--o--...--o--o   <-- feature-hull

```

which, as you can see, is a boat repository. 😀 There are three branches. The mainline branch holds *every commit*, including all the commits on the top row and bottom (hull) row. The `feature-top` branch holds the top three commits and also the three commits along the main line to the left, but not any of the commits on the bottom row. All the connectors *between* commits are---well, *should be* but I don't have a good enough font---one-way arrows, pointing left, or down-and-left, or up-and-left.

These "arrows", or one way connections from commit to commit, are technically [_arcs_, or one-way edges](https://math.stackexchange.com/a/31208), in a [_directed graph_](https://en.wikipedia.org/wiki/Directed_graph). This directed graph is one without cycles, making it a Directed Acyclic Graph or [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph), which has a bunch of properties that are useful to Git.

If you're just using Git to store files inside commits, all you really care about are the round `o` [*nodes* or *vertices* (again two words for the same thing)](https://math.stackexchange.com/a/1441525), each of which acts to store your files, but you should at least be vaguely aware of how they are arranged. It matters, especially because of *merges*. Merge commits are those with two outgoing arcs, pointing backwards to two of what Git calls *parent commits*. The child commit is the one "later": just as human parents are always older than their children, Git parent commits are older than their children.

We need one more thing, though: **Where do new commits come from?** We noted that what's in a commit---both the snapshot, holding all the files, and the metadata, holding the rest of the information Git keeps about a commit---is all read-only. Your files are not only frozen, they're also *transformed*, and the transformed data are then *de-duplicated*, so that even though every commit has a full snapshot of *every* file, the repository itself stays relatively slim. But this means that the files *in* a commit can only be *read* by Git, and *nothing*---not even Git itself---can *write* to them. They get saved once, and are de-duplicated from then on. The commits act as archives, almost like tar or rar or winzip or whatever.

To work with a Git repository, then, we have to have Git *extract* the files. This takes the files *out* of some commit, turning those special archive-formatted things into regular, usable files. Note that Git may well be able to store files that your computer literally *can't* store: a classic example is a file named `aux.h`, for some C program, on a Windows machine. We won't go into all the details, but it is theoretically possible to still get work done with this repository, which was probably built on a Linux system, even if you're on a Windows system where you can't work with the `aux.h` file directly.

Anyway, assuming there are no nasty little surprises like `aux.h`, you would just run `git checkout` or `git switch` to get some commit *out* of Git. This will fill in your *working tree*, populating it from the files stored in the *tip commit* of some branch. The *tip commit* is, again, the *last* commit on that branch, as found by the *branch name*. Your `git checkout` or `git switch` selected that commit to be the *current commit*, by selecting that branch name to be the *current branch*. You now have all the files *from* that commit, in an area where you can see them and work on them: your *working tree*.

Note that the files in your working tree *are not actually in Git itself*. They were just *extracted from* Git. This matters a lot, because when `git checkout` extracts the files *from* Git, it actually puts each file in two places. One of those places is the ordinary everyday file you see and work on / with. The other place Git puts each file is into Git's *index*.

As I mentioned a moment ago, the index has three names: index, staging area, and cache. All refer to the same thing: the place Git sticks these "copies" of each file. Each one is actually pre-de-duplicated, so the word "copy" is slightly wrong, but---unlike much of the rest of its innards---Git actually does a really good job of hiding the de-duplication aspect. Unless you start getting into internal commands like `git ls-files` and `git update-index`, you don't need to know about this part, and can just think of the index as holding a copy of the file, ready to go into the *next commit*.

What this all means for you as someone just *using* Git is that the index / staging-area acts as your *proposed next commit*. When you run `git commit`, Git is going to package up *these* copies of the file as the ones to be archived in the snapshot. The copies you have in your working tree are *yours;* the *index / staging-area* copies are *Git's*, ready to go. So, if you *change* your copies and want the *changed* copy to be what goes in the next snapshot, you must tell Git: *Update the Git copy, in the Git index / staging-area.* You do this with `git add`.^3^ The `git add` command means *make the proposed-next-commit copy match the working-tree copy*. It's the `add` command that does the updating: this is when Git compresses and de-duplicates the file and makes it ready for archiving, not at `git commit` time.^4^

Then, assuming you have some series of commits ending with the one with *`hash-N`:*

```
[hash1] <-[hash2] ... <-[hashN]   <--branch

```

you run `git commit`, give it any metadata it needs (a commit log message), and you get an N+1'th commit:

```
[hash1] <-[hash2] ... <-[hashN] <-[hashN+1]   <--branch

```

Git automatically updates the *branch name* to point to the *new commit*, which has therefore been *added to the branch*.

Let's look at each of the various commands now:

-   `git checkout`: this is a large and complicated command.

    We already saw this one, or at least, *half* of this one. We used it to pick out a branch name, and therefore a particular commit. This kind of checkout first looks at our current commit, index, and working tree. It makes sure that we have committed all our modified files, or---this part gets a bit complicated---that if we *haven't* committed all our modified files, switching to that other branch is "safe". If it's *not* safe, `git checkout` tells you that you can't switch due to having modified files. If it *is* safe, `git checkout` will switch; if you didn't mean to switch, you can just switch back. (See also [Checkout another branch when there are uncommitted changes on the current branch](https://stackoverflow.com/q/22053757/1256452))

    But `git checkout` has an *unsafe* half. Suppose you have modified some file in your working tree, such as `README.md` or `aux.h` or whatever. You now look back at what you changed and think: *No, that's a bad idea. I should get rid of this change. I'd like the file back exactly as it was before.*

    To get this---to *wipe out* your changes to, say, `README.md`---you can run:

    ```
    git checkout -- README.md

    ```

    The `--` part here is optional. It's a good idea to use it, because it tells Git that the part that comes after `--` is a *file name*, not a *branch name*.

    Suppose you have a *branch* named `hello` *and* a *file* named `hello`. What does:

    ```
    git checkout hello

    ```

    mean? Are we asking Git to clobber the *file* `hello` to remove the changes we made, or are we asking Git to check out the *branch* `hello`? To make this unambiguous, you have to write either:

    ```
    git checkout -- hello        (clobber the file)

    ```

    or:

    ```
    git checkout hello --        (get the branch)

    ```

    This case, where there are branches and files or directories with the same name, is a particularly insidious one. It has bitten real users. It's *why* `git switch` exists now. The `git switch` command *never means clobber my files*. It only means *do the safe kind of `git checkout`.*

    (The `git checkout` command has been smartened up too, so that if you have the new commands and you run the "bad" kind of ambiguous `git checkout`, Git will just complain at you and do nothing at all. Either use the smarter split-up commands, or add the `--` at the right place to pick which kind of operation you want.)

    More precisely, *this kind* of `git checkout`, ideally spelled `git checkout -- *paths*`, is a request for Git to copy files from Git's index to your working tree. This means *clobber my files*. You can also run `git checkout *tree-ish* -- *paths*`, where you add a commit hash ID^5^ to the command. This tells Git to copy the files from that commit, first to Git's index, and then on to your working tree. This, too, means *clobber my files:* the difference is where Git gets the copies of the files it's extracting.

    If you ran `git add` on some file and thus copied it into Git's index, you need `git checkout HEAD -- *file*` to get it back from the current commit. The copy that's in Git's *index* is the one you `git add`-ed. So these two forms of `git checkout`, with a commit hash ID (or the name `HEAD`), the optional `--`, and the file name, are the unsafe *clobber my files* forms.

-   `git reset`: this is also a large and complicated command.

    There are, depending on how you count, up to about five or six different forms of `git reset`. We'll concentrate on a smaller subset here.

    -   `git reset [ --hard | --mixed | --soft ] [ *commit* ]`

        Here, we're asking Git to do several things. First, if we give a *`commit`* argument, such as `HEAD` or `HEAD~3` or some such, we've picked a particular *commit* that Git should *reset to*. This is the kind of command that will *remove commits* by ejecting them off the end of the branch. Of all the commands listed here, this is the only one that removes any commits. One other command---`git commit --amend`---has the effect of ejecting the *last* commit while putting on a new replacement, but that one is limited to ejecting *one* commit.

        Let's show this as a drawing. Suppose we have:

        ```
        ...--E--F--G--H   <-- branch

        ```

        That is, this branch, named `branch`, ends with four commits whose hash IDs we'll call `E`, `F`, `G`, and `H` in that order. The name `branch` currently stores the hash ID of the last of these commits, `H`. If we use `git reset --hard HEAD~3`, we're telling Git to eject the *last three commits*. The result is:

        ```
               F--G--H   ???
              /
        ...--E   <-- branch

        ```

        The name `branch` now selects commit `E`, not commit `H`. If we did not write down (on paper, on a whiteboard, in a file) the hash IDs of the last three commits, they've just become somewhat hard to find. Git does gives a way to find them again, for a while, but mostly they just seem to be *gone*.

        The `HEAD~3` part of this command is how we chose to drop the last three commits. It's part of a whole sub-topic in Git, documented in [the gitrevisions manual](https://git-scm.com/docs/gitrevisions), on ways to name specific commits. The reset command just needs the hash ID of an actual commit, or anything equivalent, and `HEAD~3` means *go back three first-parent steps*, which in this case gets us from commit `H` back to commit `E`.

        The `--hard` part of the `git reset` is how we tell Git what to do with (a) its index and (b) our working tree files. We have three choices here:

        -   `--soft` tells Git: *leave both alone*. Git will move the *branch name* without touching the index or our working tree. If you run `git commit` now, whatever is (still) in the index is what goes into the *new* commit. If the index matches the snapshot in commit `H`, this gets you a new commit whose *snapshot* is `H`, but whose *parent* is `E`, as if commits `F` through `H` had all been collapsed into a single new commit. People usually call this *squashing*.

        -   `--mixed` tells Git: *reset your index, but leave my working tree alone*. Git will move the branch name, then *replace every file that is in the index with the one from the newly selected commit*. But Git will leave all your *working tree* files alone. This means that as far as Git is concerned, you can start `git add`ing files to make a new commit. Your new commit won't match `H` unless you `git add` *everything*, so this means you could, for instance, build a new intermediate commit, sort of like `E+F` or something, if you wanted.

        -   `--hard` tells Git: *reset your index **and** my working tree.* Git will move the branch name, replace all the files in its index, and replace all the files in your working tree, all as one big thing. It's now as if you never made those three commits at all. You no longer have the files from `F`, or `G`, or `H`: you have the files from commit `E`.

        Note that if you leave out the *`commit`* part of this kind of (hard/soft/mixed) `reset`, Git will use `HEAD`. Since `HEAD` names the *current commit* (as selected by the current branch name), this leaves the branch name itself unchanged: it still selects the same commit as before. So this is only useful with `--mixed` or `--hard`, because `git reset --soft`, with no commit hash ID, means *don't move the branch name, don't change Git's index, and don't touch my working tree*. Those are the three things this kind of `git reset` can do---move the branch name, change what's in Git's index, and change what's in your working tree---and you just ruled all three out. Git is OK with doing nothing, but why bother?

    -   `git reset [ *tree-ish* ] -- *path*`

        This is the other kind of `git reset` we'll care about here. It's a bit like a mixed reset, in that it means *clobber some of the index copies of files*, but here you specify *which files to clobber*. It's also a bit *unlike* a mixed reset, because this kind of `git reset` will never move the branch name.

        Instead, you pick which files you want copied from somewhere. The *somewhere* is the *`tree-ish`* you give; if you don't give one, the *somewhere* is `HEAD`, i.e., the current commit. This can only restore files in the *proposed next commit* to the form they have in *some existing commit*. By defaulting to the *current* existing commit, this kind of `git reset -- *path*` has the effect of undoing a `git add -- *path*`.^6^

        There are several other forms of `git reset`. To see what they all mean, consult [the documentation](https://git-scm.com/docs/git-reset).

-   `git restore`: this got split off from `git checkout`.

    Basically, this does the same thing as the various forms of `git checkout` and `git reset` that clobber files (in your working tree and/or in Git's index). It's *smarter* than the old `git checkout`-and-clobber-my-work variant, in that you get to choose where the files come from *and* where they go, all in the one command line.

    To do what you used to do with `git checkout -- *file*`, you just run `git restore --staged --worktree -- *file*`. (You can leave out the `--` part, as with `git checkout`, in most cases, but it's just generally wise to get in the habit of using it. Like `git add`, this command is designed such that only files named `-whatever` are actually problematic.)

    To do what you used to do with `git reset -- *file*`, you just run `git restore --staged -- *file*`. That is, you tell `git restore` to copy from `HEAD` to staging area / index, which is how `git reset` operates.

    Note that you can copy a file from some existing commit, to Git's index, without touching your working tree copy of that file: `git restore --source *commit* --staged -- *file*` does that. You can't do that at all with the old `git checkout` but you *can* do that with the old `git reset`, as `git reset *commit* -- *file*`. And, you can copy a file from some existing commit, to your working tree, without touching the staged copy: `git restore --source *commit* --worktree -- *file*` does that. The overlapping part (restore and reset) exists *because* `git restore` is new, and this kind of restore makes sense; probably, ideally, we should always use `git restore` here, instead of using the old `git reset` way of doing things, but Git tries to maintain backwards compatibility.

    The new ability---to copy from any arbitrary source, to your working tree, without touching Git's index / staging-area copy---is just that: new. You couldn't do it before. (You could run `git show *commit*:*path* > *path*`, before, but that falls outside our five commands to examine.)

-   `git switch`: this just does the "safe half" of `git checkout`. That's really all you need to know. Using `git switch`, without `--force`, Git won't overwrite your unsaved work, even if you make a typo or whatever. The old `git checkout` command could overwrite unsaved work: if your typo turns a branch name into a file name, for instance, well, oops.

-   `git revert` (I added this for completeness): this makes a *new commit*. The point of the new commit is to *back out* what someone did in some existing commit. You therefore need to name the existing commit that revert should back out. This command probably should have been named `git backout`.

    If you back out the most recent commit, this does revert to the second-most-recent snapshot:

    ```
      ...--G--H   <-- branch

    ```

    becomes:

    ```
      ...--G--H--Ħ   <-- branch

    ```

    where commit `Ħ` (H-bar) "undoes" commit `H` and therefore leaves us with the same *files* as commit `G`. But we don't have to undo the *most recent* commit. We could take:

    ```
      ...--E--F--G--H   <-- branch

    ```

    and add a commit `Ǝ` that undoes `E` to get:

    ```
      ...--E--F--G--H--Ǝ   <-- branch

    ```

    which may not match the source snapshot of any previous commit!

## Further Information

-   [tryGit - A fun interactive way to learn Git.](http://try.github.io/levels/1/challenges/1)

-   [Learn Git Branching - the most visual and interactive way to learn Git on the web](http://learngitbranching.js.org/)

-   [Udemy Git Tutorial: A Comprehensive Guide](https://blog.udemy.com/git-tutorial-a-comprehensive-guide/)

-   [Git Immersion - A Guided tour that walks through the fundamentals of git](http://gitimmersion.com/)

-   [git-scm - Video Tutorials](http://git-scm.com/videos)

-   [git-scm - Documentation](http://git-scm.com/docs)

-   [Atlassian Git - Tutorials & Workflows](https://www.atlassian.com/git/)

-   [SalesForce Cheat Sheet](http://res.cloudinary.com/hy4kyit2a/image/upload/SF_git_cheatsheet.pdf)

-   [GitGuys](http://www.gitguys.com/)

-   [Git - the simple guide](http://rogerdudler.github.io/git-guide/index.html)

-   [Pro Git](http://www.git-scm.com/book/en/v2)

-   [An introduction to Git and GitHub for Beginners (Tutorial)](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

-   [The New Boston tutorial to Git covering basic commands and workflow](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAKWClAD_iKpNC0bGHxGhcx)
