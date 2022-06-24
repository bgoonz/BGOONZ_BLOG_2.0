---
title: Github Tutorial
template: docs
excerpt: To use git we'll be using the terminal.
---

<!--StartFragment-->

## Step 1: Create a local git repository

When creating a new project on your local machine using git, you'll first create a new [repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) (or often, 'repo', for short).

To use git we'll be using the terminal. If you don't have much experience with the terminal and basic commands, [check out this tutorial](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview) (If you don’t want/ need a short history lesson, skip to step three.)

To begin, open up a terminal and move to where you want to place the project on your local machine using the cd (change directory) command. For example, if you have a 'projects' folder on your desktop, you'd do something like:

```

```

[view raw](https://gist.github.com/cubeton/67a84eb876984f0b5785/raw/d4560016d742865c1fd68d97fcff1feb557d5e19/terminalcd.md)[terminalcd.md ](https://gist.github.com/cubeton/67a84eb876984f0b5785#file-terminalcd-md)hosted with ❤ by [GitHub](https://github.com/)

To initialize a git repository in the root of the folder, run the [git init](http://git-scm.com/docs/git-init) command:

```

```

[view raw](https://gist.github.com/cubeton/89793ba1bc947f64658e/raw/f3dba1dd72fda5eeb98b761338aedfc310d29d54/gitinit.md)[gitinit.md ](https://gist.github.com/cubeton/89793ba1bc947f64658e#file-gitinit-md)hosted with ❤ by [GitHub](https://github.com/)

## Step 2: Add a new file to the repo

Go ahead and add a new file to the project, using any text editor you like or running a [touch](http://linux.die.net/man/1/touch) command. \`touch newfile.txt\` just creates and saves a blank file named newfile.txt.

Once you've added or modified files in a folder containing a git repo, git will notice that  the file exists inside the repo. But, git won't track the file unless you explicitly tell it to. Git only saves/manages changes to files that it *tracks*, so we’ll need to send a command to confirm that yes, we want git to track our new file.

```

```

[view raw](https://gist.github.com/cubeton/2d8f224bede4c2dde86b/raw/b865e27cc4715b3a3a4a5839e77ab232ff1b31f9/addfile.md)[addfile.md ](https://gist.github.com/cubeton/2d8f224bede4c2dde86b#file-addfile-md)hosted with ❤ by [GitHub](https://github.com/)

After creating the new file, you can use the [git status](http://git-scm.com/docs/git-status) command to see which files git knows exist.

```

```

[view raw](https://gist.github.com/cubeton/02e849bbffcbea1e9a61/raw/71c93139666a8a4e06795f53c9aec5db95e6019a/gitstatus.md)[gitstatus.md ](https://gist.github.com/cubeton/02e849bbffcbea1e9a61#file-gitstatus-md)hosted with ❤ by [GitHub](https://github.com/)

What this basically says is, "Hey, we noticed you created a new file called mnelson.txt, but unless you use the 'git add' command we aren't going to do anything with it."

> #### An interlude: The staging environment, the commit, and you
>
> One of the most confusing parts when you're first learning git is the concept of the staging environment and how it relates to a commit.
>
> A [commit](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/github-glossary#:~:text=the%20repository%20owner.-,commit,who%20made%20them%20and%20when.) is a record of what changes you have made since the last time you made a commit. Essentially, you make changes to your repo (for example, adding a file or modifying one) and then tell git to put those changes into a commit.
>
> Commits make up the essence of your project and allow you to jump to the state of a project at any other commit.
>
> So, how do you tell git which files to put into a commit? This is where the [staging environment or index](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) come in. As seen in Step 2, when you make changes to your repo, git notices that a file has changed but won't do anything with it (like adding it in a commit).
>
> To add a file to a commit, you first need to add it to the staging environment. To do this, you can use the [git add](http://git-scm.com/docs/git-add) <filename> command (see Step 3 below).
>
> Once you've used the git add command to add all the files you want to the staging environment, you can then tell git to package them into a commit using the [git commit](http://git-scm.com/docs/git-commit) command.
>
> Note: The staging environment, also called 'staging', is the new preferred term for this, but you can also see it referred to as the 'index'.

## Step 3: Add a file to the staging environment

Add a file to the staging environment using the git add command.

If you rerun the git status command, you'll see that git has added the file to the staging environment (notice the "Changes to be committed" line).

```

```

[view raw](https://gist.github.com/cubeton/28f7bea3b232f67e031c/raw/875157cd78d75c23f3f0e29bf0c97989e3d52937/addtostaging.md)[addtostaging.md ](https://gist.github.com/cubeton/28f7bea3b232f67e031c#file-addtostaging-md)hosted with ❤ by [GitHub](https://github.com/)

To reiterate, the file has **not** yet been added to a commit, but it's about to be.

## Step 4: Create a commit

It's time to create your first commit!

Run the command `git commit -m "Your message about the commit"`

```

```

[view raw](https://gist.github.com/cubeton/1068d965d147b4039e4d/raw/5c3262c3f6e3c28328ba57ea33c512dbab149fcf/commit.md)[commit.md ](https://gist.github.com/cubeton/1068d965d147b4039e4d#file-commit-md)hosted with ❤ by [GitHub](https://github.com/)

The message at the end of the commit should be something related to what the commit contains - maybe it's a new feature, maybe it's a bug fix, maybe it's just fixing a typo. Don't put a message like "asdfadsf" or "foobar". That makes the other people who see your commit sad. Very, very, sad. Commits live forever in a repository (technically you *can* delete them if you really, really need to but it’s messy), so if you leave a clear explanation of your changes it can be extremely helpful for future programmers (perhaps future you!) who are trying to figure out why some change was made years later.

## Step 5: Create a new branch

Now that you've made a new commit, let's try something a little more advanced.

Say you want to make a new feature but are worried about making changes to the main project while developing the feature. This is where [git branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) come in.

Branches allow you to move back and forth between 'states' of a project. Official git docs describe branches this way: ‘A branch in Git is simply a lightweight movable pointer to one of these commits.’ For instance, if you want to add a new page to your website you can create a new branch just for that page without affecting the main part of the project. Once you're done with the page, you can [merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) your changes from your branch into the primary branch. When you create a new branch, Git keeps track of which commit your branch 'branched' off of, so it knows the history behind all the files.

Let's say you are on the primary branch and want to create a new branch to develop your web page. Here's what you'll do: Run [git checkout -b <my branch name>](http://git-scm.com/docs/git-checkout). This command will automatically create a new branch and then 'check you out' on it, meaning git will move you to that branch, off of the primary branch.

After running the above command, you can use the [git branch](http://git-scm.com/docs/git-branch) command to confirm that your branch was created:

```

```

[view raw](https://gist.github.com/cubeton/fa25a25f322a2cd5f405/raw/81033788d288adeffe260bd724ab2699b29e3e35/gitbranch.md)[gitbranch.md ](https://gist.github.com/cubeton/fa25a25f322a2cd5f405#file-gitbranch-md)hosted with ❤ by [GitHub](https://github.com/)

The branch name with the asterisk next to it indicates which branch you're on at that given time.

> #### A note on branch names
>
> By default, every git repository’s first branch is named \`master\` (and is typically used as the primary branch in the project). As part of the tech industry’s general anti-racism work, some groups have begun to use alternate names for the default branch (we are using “primary” in this tutorial, for example). In other documentation and discussions, you may see “master”, or other terms, used to refer to the primary branch. Regardless of the name, just keep in mind that nearly every repository has a primary branch that can be thought of as the official version of the repository. If it’s a website, then the primary branch is the version that users see. If it’s an application, then the primary branch is the version that users download. This isn’t *technically* necessary (git doesn’t treat any branches differently from other branches), but it’s how git is traditionally used in a project.
>
> If you are curious about the decision to use different default branch names, GitHub has an explanation of *their* change here: <https://github.com/github/renaming>
>
> Now, if you switch back to the primary branch and make some more commits, your new branch won't see any of those changes until you [merge](http://git-scm.com/docs/git-merge) those changes onto your new branch.

## Step 6: Create a new repository on GitHub

If you only want to keep track of your code locally, you don't need to use GitHub. But if you want to work with a team, you can use GitHub to collaboratively modify the project's code.

To create a new repo on GitHub, log in and go to the GitHub home page. You can find the “New repository” option under the “+” sign next to your profile picture, in the top right corner of the navbar:

![Git_1](https://product.hubspot.com/hs-fs/hubfs/Git_1.png?width=600&name=Git_1.png)

After clicking the button, GitHub will ask you to name your repo and provide a brief description:

![Git_2](https://product.hubspot.com/hs-fs/hubfs/Git_2.png?width=512&name=Git_2.png)

When you're done filling out the information, press the 'Create repository' button to make your new repo.

GitHub will ask if you want to create a new repo from scratch or if you want to add a repo you have created locally. In this case, since we've already created a new repo locally, we want to push that onto GitHub so follow the '....or push an existing repository from the command line' section:

```

```

[view raw](https://gist.github.com/cubeton/3a2616c44e35ca68a6b0/raw/41e5758cfdbd7db8a1659c1adaba9346680097f9/addgithub.md)[addgithub.md ](https://gist.github.com/cubeton/3a2616c44e35ca68a6b0#file-addgithub-md)hosted with ❤ by [GitHub](https://github.com/)

(You'll want to change the URL in the first command line to what GitHub lists in this section since your GitHub username and repo name are different.)

## Step 7: Push a branch to GitHub

Now we'll push the commit in your branch to your new GitHub repo. This allows other people to see the changes you've made. If they're approved by the repository's owner, the changes can then be merged into the primary branch.

To push changes onto a new branch on GitHub, you'll want to run [git push](http://git-scm.com/docs/git-push) origin yourbranchname. GitHub will automatically create the branch for you on the remote repository:

```

```

[view raw](https://gist.github.com/cubeton/bf8274609c344b6d0e70/raw/4764e740cac9a48eefad341d9e34ceb09f89b73f/addnewbranchgithub.md)[addnewbranchgithub.md ](https://gist.github.com/cubeton/bf8274609c344b6d0e70#file-addnewbranchgithub-md)hosted with ❤ by [GitHub](https://github.com/)

You might be wondering what that "origin" word means in the command above. What happens is that when you clone a remote repository to your local machine, git creates an alias for you. In nearly all cases this alias is called "[origin](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)." It's essentially shorthand for the remote repository's URL. So, to push your changes to the remote repository, you could've used either the command: git push git@github.com:git/git.git yourbranchname or git push origin yourbranchname

(If this is your first time using GitHub locally, it might prompt you to log in with your GitHub username and password.)

If you refresh the GitHub page, you'll see note saying a branch with your name has just been pushed into the repository. You can also click the 'branches' link to see your branch listed there.

[![Git_3](https://product.hubspot.com/hs-fs/hubfs/Git_3.png?width=869&name=Git_3.png)](https://cloud.githubusercontent.com/assets/5241432/9189475/da30eb86-3fb6-11e5-934f-ca596a2cac69.png)

Now click the green button in the screenshot above. We're going to make a **pull request**!

## Step 8: Create a pull request (PR)

A pull request (or PR) is a way to alert a repo's owners that you want to make some changes to their code. It allows them to review the code and make sure it looks good before putting your changes on the primary branch.

This is what the PR page looks like before you've submitted it:

[![Git_4](https://product.hubspot.com/hs-fs/hubfs/Git_4.png?width=600&name=Git_4.png)](https://cloud.githubusercontent.com/assets/5241432/9189500/4688c07e-3fb7-11e5-99ed-d75b50ed9e48.png)

And this is what it looks like once you've submitted the PR request:

[![Git_5](https://product.hubspot.com/hs-fs/hubfs/Git_5.png?width=600&name=Git_5.png)](https://cloud.githubusercontent.com/assets/5241432/9189528/b39a7176-3fb7-11e5-87b1-7fed3e63b6bb.png)

You might see a big green button at the bottom that says 'Merge pull request'. Clicking this means you'll merge your changes into the primary branch..

Sometimes you'll be a co-owner or the sole owner of a repo, in which case you may not need to create a PR to merge your changes. However, it's still a good idea to make one so you can keep a more complete history of your updates and to make sure you always create a new branch when making changes.

## Step 9: Merge a PR

Go ahead and click the green 'Merge pull request' button. This will merge your changes into the primary branch.

[![Git_6](https://product.hubspot.com/hs-fs/hubfs/Git_6.png?width=600&name=Git_6.png)](https://cloud.githubusercontent.com/assets/5241432/9189587/76631d98-3fb8-11e5-9fdb-17e7dec1c2a4.png)

When you're done, I recommend deleting your branch (too many branches can become messy), so hit that grey 'Delete branch' button as well.

You can double check that your commits were merged by clicking on the 'Commits' link on the first page of your new repo.

![Git_7](https://product.hubspot.com/hs-fs/hubfs/Git_7.png?width=600&name=Git_7.png)

This will show you a list of all the commits in that branch. You can see the one I just merged right up top (Merge pull request #1).

![Git_8](https://product.hubspot.com/hs-fs/hubfs/Git_8.png?width=600&name=Git_8.png)

You can also see the [hash code](https://git-scm.com/docs/git-hash-object) of the commit on the right hand side. A hash code is a unique identifier for that specific commit. It's useful for referring to specific commits and when undoing changes (use the [git revert ](http://git-scm.com/docs/git-revert)<hash code number> command to backtrack).

## Step 10: Get changes on GitHub back to your computer

Right now, the repo on GitHub looks a little different than what you have on your local machine. For example, the commit you made in your branch and merged into the primary branch doesn't exist in the primary branch on your local machine.

In order to get the most recent changes that you or others have merged on GitHub, use the git pull origin master command (when working on the primary branch). In most cases, this can be shortened to “git pull”.

```

```

[view raw](https://gist.github.com/cubeton/48b5c726b496d50c3975/raw/fe2c68e0988c467fd218587e2397552076355b52/pulloriginmaster.md)[pulloriginmaster.md ](https://gist.github.com/cubeton/48b5c726b496d50c3975#file-pulloriginmaster-md)hosted with ❤ by [GitHub](https://github.com/)

This shows you all the files that have changed and how they've changed.

Now we can use the [git log](http://git-scm.com/docs/git-log) command again to see all new commits.

(You may need to switch branches back to the primary branch. You can do that using the git checkout master command.)

```

```

[view raw](https://gist.github.com/cubeton/48f55c5a237cd8e1a238/raw/3e31113a073b9bdec16800407d718b631dd0f587/gitlogaftermerge.md)[gitlogaftermerge.md ](https://gist.github.com/cubeton/48f55c5a237cd8e1a238#file-gitlogaftermerge-md)hosted with ❤ by [GitHub](https://github.com/)

<!--EndFragment-->
