Understanding Git (A Beginners Guide Containing Cheat Sheets & Resources)
=========================================================================

Basic Git Work Flow.

------------------------------------------------------------------------

### Understanding Git (A Beginners Guide Containing Cheat Sheets & Resources)

### Resources, Cheat Sheets & Links @Bottom of the Page!

<figure><img src="https://cdn-images-1.medium.com/max/800/0*68fyM5AI85U_I3vo.jpg" class="graf-image" /></figure>For More Advanced Readers, or those with very limited free time… here’s an abridged Git Reference.

<a href="https://bryanguner.medium.com/git-tricks-57e8d0292285" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/git-tricks-57e8d0292285"><strong>Git-Tricks</strong><br />
<em>Refs</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/git-tricks-57e8d0292285" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### What’s a distributed version control system?

Git is an example of a distributed version control system (DVCS) commonly used for open source and commercial software development. DVCSs allow full access to every file, branch, and iteration of a project, and allows every user access to a full and self-contained history of all changes. Unlike once popular centralized version control systems, DVCSs like Git don’t need a constant connection to a central repository. Developers can work anywhere and collaborate asynchronously from any time zone.

Without version control, team members are subject to redundant tasks, slower timelines, and multiple copies of a single project. To eliminate unnecessary work, Git and other VCSs give each contributor a unified and consistent view of a project, surfacing work that’s already in progress. Seeing a transparent history of changes, who made them, and how they contribute to the development of a project helps team members stay aligned while working independently.

### Why Git?

According to the latest <a href="https://insights.stackoverflow.com/survey/2017#technology" class="markup--anchor markup--p-anchor">Stack Overflow developer survey</a>, more than 70 percent of developers use Git, making it the most-used VCS in the world. Git is commonly used for both open source and commercial software development, **with significant benefits** for individuals, teams and businesses.

-   <span id="0276">Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.</span>
-   <span id="2be5">Developers work in every time zone. With a DVCS like Git, collaboration can happen any time while maintaining source code integrity. Using branches, developers can safely propose changes to production code.</span>
-   <span id="6d54">Businesses using Git can break down communication barriers between teams and keep them focused on doing their best work. Plus, Git makes it possible to align experts across a business to collaborate on major projects.</span>

### Table Of Contents:

<a href="#editing-understanding-git-a-beginners-guide-containing-cheat-sheets--resources--medium" class="markup--anchor markup--p-anchor"><em>Editing Understanding Git (A Beginners Guide Containing Cheat Sheets &amp; Resources) — Medium</em></a>

> <a href="#whats-a-distributed-version-controlsystem" class="markup--anchor markup--blockquote-anchor"><strong><em>What’s a distributed version control system?</em></strong></a>

> <a href="#why-git" class="markup--anchor markup--blockquote-anchor"><em>Why Git?</em></a>

> <a href="#whats-a-repository" class="markup--anchor markup--blockquote-anchor"><em>What’s a repository?</em></a>

> <a href="#git-flow" class="markup--anchor markup--blockquote-anchor"><strong><em>Git Flow</em></strong></a>

> <a href="#cloning-a-repo-and-changing-the-remoteurl" class="markup--anchor markup--blockquote-anchor"><em>Cloning a repo and changing the remote url</em></a>

> <a href="#1-the-first-step-is-to-clone-therepo" class="markup--anchor markup--blockquote-anchor"><em>1. The first step is to clone the repo!</em></a>

> <a href="#2-sweet-you-have-the-cloned-repo-in-your-preferred-directory-now-lets-make-your-own-repo-on-github-create-a-new-repository" class="markup--anchor markup--blockquote-anchor"><em>2. Make your own repo</em></a>*.*

> <a href="#3-next-copy-thegit-link-that-is-on-the-next-page-do-not-do-any-other-steps-on-this-pagethat-is-for-when-you-do-not-clone-arepo" class="markup--anchor markup--blockquote-anchor"><em>3. Next, copy the .git link that is on the next page.</em></a>

> <a href="#4-whenver-you-clone-a-repo-it-already-has-agit-directory-with-certain-configurations-set-up-to-be-able-to-push-this-repo-to-your-newly-created-github-repo-we-have-to-change-the-remoteorigin" class="markup--anchor markup--blockquote-anchor"><em>4. Whenver you clone a repo</em></a>

> <a href="#5-thats-its-you-can-now-run-git-push-and-it-will-push-to-your-newly-createdrepo" class="markup--anchor markup--blockquote-anchor"><em>5. Thats its! You can now run</em></a> `git push` <a href="#5-thats-its-you-can-now-run-git-push-and-it-will-push-to-your-newly-createdrepo" class="markup--anchor markup--blockquote-anchor"><em>and it will push to your newly created repo.</em></a>

> <a href="#basic-git-workflow" class="markup--anchor markup--blockquote-anchor"><em>Basic Git Work Flow.</em></a>

> <a href="#cheat-sheet" class="markup--anchor markup--blockquote-anchor"><strong><em>Cheat Sheet:</em></strong></a>

> <a href="#my-git-reference-repo" class="markup--anchor markup--blockquote-anchor"><em>My Git Reference Repo:</em></a>

> <a href="#git-basics" class="markup--anchor markup--blockquote-anchor"><em>Git basics</em></a>

> <a href="#a-glance-intogit" class="markup--anchor markup--blockquote-anchor"><em>A glance into GIT</em></a>

> <a href="#tracking-changes-in-a-repository" class="markup--anchor markup--blockquote-anchor"><em>Tracking changes in a repository</em></a>

> <a href="#branches-andworkflow" class="markup--anchor markup--blockquote-anchor"><em>Branches and workflow</em></a>

> <a href="#bringing-it-backtogether" class="markup--anchor markup--blockquote-anchor"><em>Bringing it back together</em></a>

> <a href="#connect-w-github" class="markup--anchor markup--blockquote-anchor"><em>Connect-W-Github</em></a>

> <a href="#i-%EF%B8%8F-opensource" class="markup--anchor markup--blockquote-anchor"><em>I ❤️ Open Source</em></a>

> <a href="#merging-your-code-ongithub" class="markup--anchor markup--blockquote-anchor"><em>Merging your code on GitHub</em></a>

> <a href="#browsing-your-git-repository" class="markup--anchor markup--blockquote-anchor"><em>Browsing Your Git Repository</em></a>

> <a href="#seeing-changes-in-realtime" class="markup--anchor markup--blockquote-anchor"><em>Seeing changes in real time</em></a>

> <a href="#diff-options" class="markup--anchor markup--blockquote-anchor"><em>Diff options</em></a>

> <a href="#time-travel" class="markup--anchor markup--blockquote-anchor"><em>Time travel</em></a>

> <a href="#why-checkout" class="markup--anchor markup--blockquote-anchor"><em>Why checkout?</em></a>

> <a href="#git-do-overs-reset-rebase" class="markup--anchor markup--blockquote-anchor"><em>Git ‘Do-Overs’: Reset &amp; Rebase</em></a>

> <a href="#resetting-thepast" class="markup--anchor markup--blockquote-anchor"><em>Resetting the past</em></a>

> <a href="#soft-resets" class="markup--anchor markup--blockquote-anchor"><em>Soft resets</em></a>

> <a href="#risky-business-mixedresets" class="markup--anchor markup--blockquote-anchor"><em>Risky Business: Mixed resets</em></a>

> <a href="#red-alert-hardresets" class="markup--anchor markup--blockquote-anchor"><em>Red alert! Hard resets</em></a>

> <a href="#rebase-alt-time-travel" class="markup--anchor markup--blockquote-anchor"><em>Rebase: ‘Alt-time travel’</em></a>

> <a href="#i-see-you-too-like-to-live-life-dangerously-tell-me-aboutrebase" class="markup--anchor markup--blockquote-anchor"><em>I see you too like to live life Dangerously… tell me about Rebase..</em></a>

> `working-on-the-header`

> <a href="#golden-rule-ofgit" class="markup--anchor markup--blockquote-anchor"><em>“Golden Rule of Git”</em></a>

> **How 2's**

> <a href="#troubleshooting-git" class="markup--anchor markup--blockquote-anchor"><strong><em>Troubleshooting Git</em></strong></a>

> **Further Reading & Resources**

### What’s a repository?

A *repository*, or <a href="https://git-scm.com/" class="markup--anchor markup--p-anchor">Git project</a>, encompasses the entire collection of files and folders associated with a project, along with each file’s revision history. The file history appears as snapshots in time called *commits*, and the commits exist as a linked-list relationship, and can be organized into multiple lines of development called *branches*. Because Git is a DVCS, repositories are self-contained units and anyone who owns a copy of the repository can access the entire codebase and its history. Using the command line or other ease-of-use interfaces, a git repository also allows for: interaction with the history, cloning, creating branches, committing, merging, comparing changes across versions of code, and more.

Working in repositories keeps development projects organized and protected. Developers are encouraged to fix bugs, or create fresh features, without fear of derailing mainline development efforts. Git facilitates this through the use of topic branches: lightweight pointers to commits in history that can be easily created and deprecated when no longer needed.

### Git Flow

### Cloning a repo and changing the remote url

(These steps are only for when you initially clone a project repo. Not when you clone your partners repo to collaborate together. To do that, you only have to complete step 1!)

### 1. The first step is to clone the repo!

-   <span id="b2f6">Navigate to the repo you want to clone and hit the big green code button. Copy the link given.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*63LoanrbOPBIwDC6oFarFA.png" class="graf-image" /></figure>-   <span id="8563">Navigate in your terminal to the directory where you want this repo to live. I’ve chosen downloads</span>
-   <span id="c9b3">`git clone HTTPS://LINKTOURL/THATYOUCOPIED`</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*PRiaHOvU-wvpAYQtIqduGQ.png" class="graf-image" /></figure>### 2. Sweet, you have the cloned repo in your preferred directory. Now lets make your own repo. On github, create a new repository.

-   <span id="c98b">Default settings are fine. Hit the big green button `Create Repository`</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*U1qwd0OEBYhcToXYt2i6iA.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*jk3-RTC0rRV_OF931B4Fsg.png" class="graf-image" /></figure>### 3. Next,

***copy the .git link that is on the next page. Do not do any other steps on this page — That is for when you do not clone a repo.***

------------------------------------------------------------------------

### These are the commands GitHub provides when you create a new Repo:

#### Quick setup — if you’ve done this kind of thing before

Set up in Desktop

or

HTTPSSSH

Get started by <a href="https://github.com/bgoonz/the-meaning-of-life-is-42/new/master" class="markup--anchor markup--p-anchor">creating a new file</a> or <a href="https://github.com/bgoonz/the-meaning-of-life-is-42/upload" class="markup--anchor markup--p-anchor">uploading an existing file</a>. We recommend every repository include a <a href="https://github.com/bgoonz/the-meaning-of-life-is-42/new/master?readme=1" class="markup--anchor markup--p-anchor">README</a>, <a href="https://github.com/bgoonz/the-meaning-of-life-is-42/new/master?filename=LICENSE.md" class="markup--anchor markup--p-anchor">LICENSE</a>, and <a href="https://github.com/bgoonz/the-meaning-of-life-is-42/new/master?filename=.gitignore" class="markup--anchor markup--p-anchor">.gitignore</a>.

### …or create a new repository on the command line

    echo "# the-meaning-of-life-is-42" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M master
    git remote add origin https://github.com/bgoonz/the-meaning-of-life-is-42.git
    git push -u origin master

### …or push an existing repository from the command line

    git remote add origin https://github.com/bgoonz/the-meaning-of-life-is-42.git
    git branch -M master
    git push -u origin master

### …or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

<a href="https://github.com/bgoonz/the-meaning-of-life-is-42/import" class="markup--anchor markup--p-anchor">Import code</a>

### 4. Whenever you clone a repo:

#### It already has a .git directory with certain configurations set up. To be able to push this repo to your newly created GitHub repo we have to change the remote origin.

-   <span id="dda6">To do that, just run this command: (Make sure you are inside the repo you cloned)</span>

<!-- -->

    git remote set-url origin https://LINK/TO/YOUR/GIT/THAT/YOU/COPIED/FROM/PREVIOUS/STEP.git

OR:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*HTnMuxJ4tCDJ3I49cUrP8w.png" class="graf-image" /></figure>### 5. You can now run `git push` and it will push to your newly created repo.

### Basic Git Work Flow.

-   <span id="23ce">After making changes to a file and you are ready to commit / push to your repo you can run the following commands:</span>
-   <span id="9934">`git add .` - stages modified files to be committed.</span>
-   <span id="6ce0">`git status` - displays files that have been modified</span>
-   <span id="ce65">`git commit -m 'A helpfully commit message'` - commits the changes to your local repo. Get in the habit now of making helpful commit messages</span>
-   <span id="70ec">`git push` - pushes your local commits to your GitHub repo!</span>
-   <span id="4ca3">To pull down changes that your partner pushed to the repo you simply have to run:</span>
-   <span id="3bef">`git pull` - this will fetch the most recent updates!</span>

### Cheat Sheet:

### My Git Reference Repo:

<a href="https://github.com/bgoonz/github-reference-repo" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/github-reference-repo"><strong>bgoonz/github-reference-repo</strong><br />
<em>Cloning a repo and changing the remote url Basic Git Workflow (These steps are only for when you initially clone a…</em>github.com</a><a href="https://github.com/bgoonz/github-reference-repo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Git basics

Like many disciplines, learning Git is just a matter of learning a new language. You’ll cover a lot of new vocabulary in this lesson! Remember that the vocabulary you’ll learn will allow you to communicate clearly with other developers worldwide, so it’s important to understand the meaning of each term.

It’s also important to note that Git is a complex and powerful tool. As such, its documentation and advanced examples may be tough to understand. As your knowledge grows, you may choose to dive deeper into Git. Today, you’ll focus on the commands you’ll use every day — possibly for the rest of your programming career! Get comfortable with these commands and resist the urge to copy/paste or create keyboard shortcuts as you’re getting started.

### A glance into GIT

Before you look at any practical examples, let’s talk about how Git works behind the scenes.

Here is your first new word in Git-speak: *repository*, often shortened to *repo*. A Git repo comprises all the source code for a particular project. In the “dark ages” example above, the repo is the first directory you created, where work is saved to, and which acts as the source for code shared to others. Without a repo, Git has nothing to act on.

Git manages your project as a series of *commits*. A commit is a collection of changes grouped towards a shared purpose. By tracking these commits, you can see your project on a timeline instead of only as a finished project:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Sc7e8RGGxhoCnMFG8KR6og.png" class="graf-image" /></figure>Notice the notes and seemingly random numbers by each commit? These are referred to as *commit messages* and *commit hashes*, respectively. Git identifies your commits by their hash, a specially-generated series of letters and numbers. You add commit messages to convey meaning and to help humans track your commits, as those hashes aren’t very friendly to read!

A Git hash is 40 characters long, but you only need the first few characters to identify which hash you’re referring to. By default, Git abbreviates hashes to 7 characters. You’ll follow this convention, too.

Git provides a helpful way for us to “alias” a commit in plain English as well. These aliases are called *refs*, short for “references”. A special one that Git creates for all repositories is `HEAD`, which references the most recent commit. You'll learn more about creating your own refs when you learn about "branching".

Git maintains three separate lists of changes: the *working directory*, the *staging area*, and the *commit history*. The working directory includes all of your in-progress changes, the staging area is reserved for changes you’re ready to commit, and the commit history is made up of changes you’ve already committed. You’ll look more at these three lists soon.

Git only cares about changes that are “tracked”. To track a file, you must add it to the commit history. The working directory will always show the changes, even if they aren’t tracked. In the commit history, you’ll only have a history of files that have been formally tracked by your repository.

### Tracking changes in a repository

Now, let’s get practical!

You can create a repository with `git init`. Running this command will initialize a new Git repo in your current directory. It's important to remember that you only want a repository for your project and not your whole hard drive, so always run this command inside a project folder and not your home folder or desktop. You can create a new repo in an empty folder or within a project directory you've already created.

What good is an empty repo? Not much! To add content to your repository, use `git add`. You can pass this command a specific filename, a directory, a "wildcard" to select a series of similarly-named files, or a `.` to add every untracked file in the current directory:

    # This will add only my_app.js to the repo:

    > git add my_app.js

    # This will add all the files within ./objects:

    > git add objects/

    # This will add all the files in the current directory ending in `.js`:

    > git add *.js

    # This will add everything in your current directory:

    > git add .

Adding a file (or files) moves them from Git’s working directory to the staging area. You can see what’s been “staged” and what hasn’t by using `git status`:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*iiehU7FvC-JK90x6Fr0q6g.png" class="graf-image" /></figure>In this example, “Changes to be committed” is your staging area and “Changes not staged for commit” is your working directory. Notice that you also have “Untracked files”, Git’s way of reminding us that you may have forgotten to `git add` a file to your repo. Most Git commands will include a bit of help text in the output, so always read the messages carefully before moving forward. Thanks, Git!

Once you’re happy with your files and have staged them, you’ll use `git commit` to push them into the commit history. It's significantly more work to make changes after a commit, so be sure your files are staged and exactly as you'd like them before running this command. Your default text editor will pop up, and you'll be asked to enter a commit message for this group of changes.

**Heads Up:** You may find yourself in an unfamiliar place! The default text editor for MacOS (and many variants of Linux) is called *Vim*. Vim is a terminal-based text editor you’ll discuss in the near future. It’s visually bare and may just look like terminal text to you! If this happens, don’t worry — just type `:q` and press your "return" key to exit.

You’ll want to ensure that future commit messages open in a more familiar editor. You can run the following commands in your terminal to ensure that Visual Studio Code is your `git commit` editor from now on:

    > git config --global core.editor "code --wait"

    > git config --global -e

If you experience any issues, you may be missing Visual Studio Code’s command line tools. You can find more details and some troubleshooting tips on Microsoft’s official <a href="https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line" class="markup--anchor markup--p-anchor">VS Code and macOS documentation</a>.

Once you close your editor, the commit will be added to your repository’s commit history. Use `git log` to see this history at any time. This command will show all the commits in your repository's history, beginning with the most recent:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*z4zhzwjkwkfXMxKDDkNE9w.png" class="graf-image" /></figure>Like many Git commands, `git commit` includes some helpful shorthand. If you need a rather short commit message, you can use the `-m` flag to include the message inline. Here's an example:

    > git commit -m "Fix typo"

This will commit your changes with the message “Fix typo” and avoid opening your default text editor. Remember the commit messages are how you make your project’s history friendly to humans, so don’t use the `-m` flag as an excuse to write lame commit messages! A commit message should always explain why changes were made in clear, concise language. It is also best practice to use imperative voice in commit messages (i.e. use "Fix typo" instead of "Fixing the typo" or "Typo was fixed").

### Branches and workflow

<figure><img src="https://cdn-images-1.medium.com/max/800/0*7RBsBGvfmvj4T4jm.png" class="graf-image" /></figure>You’ve seen what a project looks like with a linear commit history, but that’s just scratching the surface of Git’s utility. Let’s explore a new realm with *branches*. A branch is a separate timeline in Git, reserved for its own changes. You’ll use branches to make your own changes independently of others. These branches can then be *merged* back into the main branch at a later time.

Let’s consider a common scenario: a school project. It’s a lot of extra hassle to schedule time together and argue over exactly what should be done next! Instead, group members will often assign tasks amongst themselves, work independently on their tasks, and reunite to bring it all together as a final report. Git branches let us emulate this workflow for code: you can make a copy of what’s been done so far, complete a task on your new branch, and merge that branch back into the shared repository for others to use.

By default, Git repos begin on the `master` branch. To create a new branch, use `git branch <name-of-your-branch>`. This will create a named reference to your current commit and let you add commits without affecting the `master` branch. Here's what a branch looks like:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*B67PLKs3Tr6HYLklyH6XnQ.png" class="graf-image" /></figure>Notice how your refs help to identify branches here: `master` stays to itself and can have changes added to it independently of your new branch (`footer`). `HEAD`, Git's special ref, follows us around, so you know that in the above diagram you're working on the `footer` branch.

You can create a new branch or visit an existing branch in your repository. This is especially helpful for returning the `master` branch or for projects you've received from teammates. To open an existing branch, use `git checkout <name-of-branch>`.

### Bringing it back together

Once you’re happy with the code in the branch you’ve been working on, you’ll likely want to integrate the code into the `master` branch. You can do this via `git merge`. Merging will bring the changes in from another branch and integrate them into yours. Here's an example workflow:

    > git branch my-changes

    > git add new-file.js

    > git commit -m "Add new file"

    > git checkout master

    > git merge my-changes

Following these steps will integrate the commit from `my-changes` over to `master`. Boom! Now you have your `new-file.js` on your default branch.

As you can imagine, branching can get *very* complicated. Your repository’s history may look more like a shrub than a beautiful tree! You’ll discuss advanced merging and other options in an upcoming lesson.

### Connect-W-Github

Git can act as a great history tool and source code backup for your local projects, but it can also help you work with a team! Git is classified as a “DVCS”, or “Distributed Version Control System”. This means it has built-in support for managing code both locally and from a distant source.

You can refer to a repository source that’s not local as a *remote*. Your Git repository can have any number of remotes, but you’ll usually only have one. By default you’ll refer to the primary remote of a repo as the `origin`.

You can add a remote to an existing repository on your computer, or you can retrieve a repository from a remote source. You can refer to this as *cloning* the repo. Once you have a repository with a remote, you can update your local code from the remote by *pulling* code down, and you can *push* up your own code so others have access to it.

### I ❤️ Open Source

While a remote Git server can be run anywhere, there are a few places online that have become industry standards for hosting remote Git repositories. The best-known and most widely-used Git source is a website called <a href="https://github.com/" class="markup--anchor markup--p-anchor">GitHub</a>. As the name suggests, GitHub is a global hub for Git repositories. It’s free to make a Github account, and you’ll find literally millions of public repositories you can browse.

GitHub takes a lot of work out of managing remote Git repositories. Instead of having to manage your own server, GitHub provides managed hosting and even includes some helpful graphical tools for complicated tasks like deployment, branch merging, and code review.

Let’s look at a typical workflow using Git and GitHub. Imagine it’s your first day on the job. How do you get access to your team’s codebase? By cloning the repository!

    > git clone https://github.com/your-team/your-codebase.git

Using the `git clone` command will create a new folder in your current directory named after the repo you're cloning (in this case, `your-codebase`). Inside that folder will be a git repository of your very own, containing the repo's entire commit history.

You’ll likely start on the `master` branch, but remember that this is the default branch and it's unlikely you want to make changes to it. ***Since you're working on a team now, it's important to think of how your changes to the repository might affect others.***

The safest way to make changes is to create a new branch, make your changes there, and then push your branch up to the remote repository for review. You'll use the `git push` command to do this. Let's look at an example:

    > git branch add-my-new-file

    > git add my-new-file.js

    > git commit -m "Add new file"

    > git push -u origin add-my-new-file

Notice how you used the `-u` flag with `git push`. This flag, shorthand for `--set-upstream`, lets Git know that you want your local branch to follow a remote branch. You've passed the same name in, so you'll now have two branches in your local repository: `add-my-new-file`, which is where your changes live after being committed, and `origin/add-my-new-file`, which keeps up with your remote branch and updates it after you use `git push`.

**You only need to use the** `-u` **flag the first time you push each new branch - Git will know what to do with a simple** `git push` **from then on.**

You now know how to push your changes up, but what about getting the changes your teammates have made? For this, you’ll use `git pull`. Pulling from the remote repo will update all of your local branches with the code from each branch's remote counterpart.

**Behind the scenes,** Git is running two separate commands: `git fetch` and `git merge`.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Y6QQHsNKuayJ_WxQ" class="graf-image" /></figure>Fetching retrieves the repository code and updates any remote tracking branches in your local repo, and merge does just you've already explored: integrates changes into the local branches. Here's a graphic to explain this a little better:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*eJVpPtvfIeuYqmql0XkQ8Q.png" class="graf-image" /></figure>It’s important to remember to use `git pull` often. A dynamic team may commit and push code many times during the day, and it's easy to fall behind. The more often you `pull`, the more certain you can be that your own code is based on the "latest and greatest".

### Merging your code on GitHub

If you’re paying close attention, you may have noticed that there’s a missing step in your workflows so far: how do you get your code merged into your default branch? This is done by a process called a *Pull Request*.

A pull request (or “PR”) is a feature specific to GitHub, not a feature of Git. It’s a safety net to prevent bugs, and it’s a critical part of the collaboration workflow. Here’s a high-level of overview of how it works:

You push your code up to GitHub in its own branch.

You open a pull request against a *base branch*.

GitHub creates a comparison page just for your code, detailing the changes you’ve made.

Other members of the team can review your code for errors.

You make changes to your branch based on feedback and push the new commits up.

The PR automatically updates with your changes.

Once everyone is satisfied, a repo maintainer on GitHub can merge your branch.

Huzzah! Your code is in the main branch and ready for everyone else to `git pull`.

You’ll create and manage your pull requests via GitHub’s web portal, instead of the command line. You’ll walk through the process of creating, reviewing, and merging a pull request in an upcoming project.

### Browsing Your Git Repository

Repositories can feel intimidating at first, but it won’t take you long to navigate code like you own the place — because you do! Let’s discuss a few tools native to Git that help us browse our changes over time.

We’ll be covering:

Comparing changes with `git diff`

Browsing through our code “checkpoints” with `git checkout`

### Seeing changes in real time

Git is all about change tracking, so it makes sense that it would include a utility for visualizing a set of changes. We refer to a list of differences between two files (or the same file over time) as a *diff*, and we can use `git diff` to visualize diffs in our repo!

When run with no extra options, `git diff` will return any tracked changes in our working directory since the last commit. **Tracked** is a key word here; `git diff` won't show us changes to files that haven't been included in our repo via `git add`. This is helpful for seeing what you've changed before committing! Here's an example of a small change:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zRnx1PxLRHNl9fYtBzxxsg.png" class="graf-image" /></figure>Let’s break down some of the new syntax in this output.

The diff opens with some Git-specific data, including the branch/files we’re checking, and some unique hashes that Git uses to track each diff. You can skip past this to get to the important bits.

`---` & `+++` let us know that there are both additions and subtractions in the file "App.js". A diff doesn't have a concept of inline changes - it treats a single change as removing something old and replacing it with something new.

`@@` lets us know that we're starting a single "chunk" of the diff. A diff could have multiple chunks for a single file (for example: if you made changes far apart, like the header & footer). The numbers in between tell us how many lines we're seeing and where they start. For example: `@@ +1,3 -1,3 @@` means we'll see three lines of significant content, including both addition & removal, beginning at line one.

In the code itself, lines that were removed are prefixed with a `-` and lines that were added are prefixed with a `+`. Remember that you won't see these on the same lines. Even if you only changed a few words, Git will still treat it like the whole line was replaced.

### Diff options

Remember that, by default, `git diff` compares the current working directory to the last commit. You can compare the staging area instead of the working directory with `git diff --staged`. This is another great way to double-check your work before pushing up to a remote branch.

You’re also not limited to your current branch — or even your current commit! You can pass a base & target branch to compare, and you can use some special characters to help you browse faster! Here are a few examples:

    # See differences between the 'feature'

    # branch and the 'master' branch.

    > git diff master feature

    # Compare two different commits

    > git diff 1fc345a 2e3dff

    # Compare a specific file across separate commits

    > git diff 1fc345a 2e3dff my-file.js

### Time travel

`git diff` gives us the opportunity to explore our code's current state, but what if we wanted to see its state at a different point in time? We can use *checkout*! `git checkout` lets us take control of our `HEAD` to bounce around our timeline as we please.

Remember that `HEAD` is a special Git reference that usually follows the latest commit on our current branch. We can use `git checkout` to point our `HEAD` reference at a different commit, letting us travel to any commit in our repository's history. By reading the commit message and exploring the code at the time of the commit, we can see not only what changed but also why it changed! This can be great for debugging a problem or understanding how an app evolved.

Let’s look at a diagram to understand what `checkout` does a little better:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*eqVSR_YD0kYQWHoLLbJs9Q.png" class="graf-image" /></figure>Notice that we haven’t lost any commits, commit messages, or code changes. Using `git checkout` is entirely non-destructive.

To browse to a different commit, simply pass in a reference or hash for the commit you’d like to explore. `git checkout` also supports a few special characters & reserved references:

    # You can checkout a branch name.

    # You'll be using this particular branch a lot!

    > git checkout master

    # You can also use commit hashes directly

    > git checkout 7d3e2f1

    # Using a hyphen instead of a hash will take

    # you to the last branch you checked out

    > git checkout -

    # You can use "HEAD~N" to move N commits prior

    # to the current HEAD

    > git checkout HEAD~3

Once you’re done browsing the repo’s history, you can use `git checkout <your-branch-name>` to move `HEAD` back to the front of the line (your most recent commit). For example, in our diagram above, we could use `git checkout master` to take our `HEAD` reference back to commit `42ffa1`.

### Why checkout?

Most of Git’s power comes from a simple ability: viewing commits in the past and understanding how they connect. This is why mastering the `git checkout` command is so important: it lets you think more like Git and gives you full freedom of navigation without risking damage to the repo's contents.

That said, you’ll likely use shortcuts like `git checkout -` far more often than specifically checking out commit hashes. Especially with the advent of user-friendly tools like GitHub, it's much easier to visualize changes outside the command line. We'll demonstrate browsing commit histories on GitHub in a future lesson.

### Git ‘Do-Overs’: Reset & Rebase

<figure><img src="https://cdn-images-1.medium.com/max/800/0*5yBLWI2EMAqgm01n.jpg" class="graf-image" /></figure>Git is designed to protect you — not only from others, but also from yourself! Of course, there are times where you’d like to exercise your own judgement, even if it may not be the best thing to do. For this, Git provides some helpful tools to change commits and “time travel”.

Before we talk about these, a warning: **The commands in this lesson are destructive!** If used improperly, you could lose work, damage a teammate’s branch, or even rewrite the history of your entire project. You should exercise caution when using these on production code, and don’t hesitate to ask for help if you’re unsure what a command might do.

After this lesson, you should:

Be able to roll back changes to particular commit.

Have an understanding of how rebasing affects your commit history.

Know when to rebase/reset and when **not** to.

### Resetting the past

Remember how our commits form a timeline? We can see the state of our project at any point using `git checkout`. What if we want to travel back in time to a point before we caused a new bug or chose a terrible font? `git reset` is the answer!

> *Resetting* involves moving our `HEAD` ref back to a different commit.

No matter how we reset, `HEAD` will move with us. Unlike `git checkout`, this will also destroy intermediate commits. We can use some additional flags to determine how our code changes are handled.

### Soft resets

The least-dangerous reset of all is `git reset --soft`.

A soft reset will move our `HEAD` ref to the commit we've specified, and will leave any intermediate changes in the staging area.

This means you won't lose any code, though you will lose commit messages.

A practical example of when a soft reset would be handy is joining some small commits into a larger one. We’ll pretend we’ve been struggling with “their”, “there”, and “they’re” in our app. Here’s our commit history:Those commit messages aren’t great: they’re not very explanatory, and they don’t provide a lot of value in our commit history. We’ll fix them with a soft reset:

    git reset --soft 9c5e2fc

This moves our `HEAD` ref back to our first commit. Looking at our commit log now, we might be worried we've lost our changes:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*slbLxXdNbv3L7UsCHGdCIg.png" class="graf-image" /></figure>Our changes are still present in the staging area, ready to be re-committed when we’re ready! We can use `git commit` to re-apply those changes to our commit history with a new, more helpful message instead:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*UleGR-ijDRZw4UqbEbAk0Q.png" class="graf-image" /></figure>Notice that the new commit has a totally new hash. The old commit messages (and their associated hashes) have been lost, but our code changes are safe and sound!

### Risky Business: Mixed resets

If soft resets are the safest form of `git reset`, mixed resets are the most average! This is exactly why they're the default: running `git reset` without adding a flag is the same as running `git reset --mixed`.

In a mixed reset, your changes are preserved, but they’re moved from the commit history directly to the working directory. This means you’ll have to use `git add` to choose everything you want in future commits.

Mixed resets are a good option when you want to alter a change in a previous commit. Let’s use a mixed reset with our “their”, “there”, “they’re” example again.

We’ll start with “they’re”:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*I71W4NpNdNz8NPr7i2tcAQ.png" class="graf-image" /></figure>Notice again that you don’t lose your code with a mixed reset, but you do lose your commit messages & hashes. The difference between `--soft` and `--mixed` comes down to whether you'll be keeping the code exactly the same before re-committing it or making changes.

### Hard resets

Hard resets are the most dangerous type of reset in Git. Hard resets adjust your `HEAD` ref and *totally destroy any interim code changes*. Poof. Gone forever.

There are very few good uses for a hard reset, but one is to get yourself out of a tight spot. Let’s say you’ve made a few changes to your repository but you now realize those changes were unnecessary. You’d like to move back in time so that your code looks exactly as it did before any changes were made. `git reset --hard` can take you there.

It’s our last round with “their”, “there”, and “they’re”. We’ve tried it all three ways and decided we don’t need to use that word at all! Let’s walk through a hard reset to get rid of our changes.

We’ll start in the same place we began for our soft reset:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*PHWuTBoZeQ1L2hgRdXu6fg.png" class="graf-image" /></figure>It turns out that we’ll be using a video on our homepage and don’t need text at all! Let’s step back in time:

    git reset --hard 9c5e2fc

Our Git log output is much simpler now:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*1NovgUyM_ed7h5MozcBY-g.png" class="graf-image" /></figure>It’s empty — no changes in your working directory and no changes in your staging area. This is major difference between a hard reset and a soft/mixed reset: you will lose *all your changes* back to the commit you’ve reset to.

If your teammate came rushing in to tell you that the boss has changed their mind and wants that homepage text after all, you’re going to be re-doing all that work! Be very confident that the changes you’re losing are unimportant before embarking on a hard reset.

### Rebase: ‘Alt-time travel’

<figure><img src="https://cdn-images-1.medium.com/max/800/0*C_Y5Tr_o5BAS1l-3.jpeg" class="graf-image" /></figure>Sometimes we want to change more than a few commits on a linear timeline. What if we want to move multiple commits across branches? `git rebase` is the tool for us!

*Rebasing* involves changing your current branch’s base branch. We might do this if we accidentally started our branch from the wrong commit or if we’d like to incorporate changes from another branch into our own.

> Isn’t that the same as git merge?

`git merge`?" In almost all cases, you'd be right. Rebasing is a dangerous process that effectively rewrites history.

### I see you too like to live life Dangerously… tell me about Rebase..

Let’s look at a situation where we might be tempted to rebase. We’ve added a couple commits to a feature branch while other team members have been merging their code into the `master` branch. Once we're ready to merge our own branch, we probably want to follow a tried-and-true procedure:

    > git pull origin master

This will fetch our remote `master` branch and merge its changes into our own feature branch, so it's safe to pull request or `git push`. However, every time we do that, a merge commit will be created! This can make a big mess of our Git commit history, especially if lots of people are making small changes.

We can use `git rebase` to move our changes silently onto the latest version of `master`. Here's what the `git log` history of our two example branches looks like:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*pzCQZEyJD3-NHcNRCTwxiQ.png" class="graf-image" /></figure>Notice that both branches start at `9c5e2fc`. That's our common ancestor commit, and is where `git merge` would start stitching these branches together! We're going to avoid that entirely with a rebase. We'll run this command while we have `working-on-the-header` checked out:

    git rebase master

**Here’s our new commit history:**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*1cH8OazC0L0pxZzfCdwXog.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*GswbfYSlQ3q0VeCdv29cww.png" class="graf-image" /></figure>### `working-on-the-header`

See how we changed the color of our commits after the rebase? Take a close look at the commit history changes as well. Even though our commits have the same content, they have a new hash assigned, meaning they’re entirely new commits! This is what we mean by “rewriting history”: we’ve actually changed how Git refers to these changes now.

### “Golden Rule of Git”

These tools can all feel pretty nifty, but be very wary of using them too much! While they can augment your Git skills from good to great, they can also have catastrophic side effects.

There’s a “Golden Rule of Git” you should know that directly relates to both `git reset` and `git rebase`:

***Never change the history of a branch that’s shared with others.***

That’s it! It’s simple and to the point. If you’re resetting or rebasing your own code and you make a mistake, your worst case scenario is losing your own changes. However, if you start changing the history of code that others have contributed or are relying on, your accidental loss could affect many others!

### How to check your Git configuration:

The command below returns a list of information about your git configuration including user name and email:

    git config -l

### How to setup your Git username:

With the command below you can configure your user name:

    git config --global user.name "Fabio"

### How to setup your Git user email:

This command lets you setup the user email address you’ll use in your commits.

    git config --global user.email "signups@fabiopacifici.com"

### How to cache your login credentials in Git:

You can store login credentials in the cache so you don’t have to type them in each time. Just use this command:

    git config --global credential.helper cache

### How to initialize a Git repo:

Everything starts from here. The first step is to initialize a new Git repo locally in your project root. You can do so with the command below:

    git init

### How to add a file to the staging area in Git:

The command below will add a file to the staging area. Just replace `filename_here` with the name of the file you want to add to the staging area.

    git add filename_here

### How to add all files in the staging area in Git

If you want to add all files in your project to the staging area, you can use a wildcard `.` and every file will be added for you.

    git add .

### How to add only certain files to the staging area in Git

With the asterisk in the command below, you can add all files starting with ‘fil’ in the staging area.

    git add fil*

### How to check a repository’s status in Git:

This command will show the status of the current repository including staged, unstaged, and untracked files.

    git status

### How to commit changes in the editor in Git:

This command will open a text editor in the terminal where you can write a full commit message.

A commit message is made up of a short summary of changes, an empty line, and a full description of the changes after it.

    git commit

### How to commit changes with a message in Git:

You can add a commit message without opening the editor. This command lets you only specify a short summary for your commit message.

    git commit -m "your commit message here"

### How to commit changes (and skip the staging area) in Git:

You can add and commit tracked files with a single command by using the -a and -m options.

    git commit -a -m"your commit message here"

### How to see your commit history in Git:

This command shows the commit history for the current repository:

    git log

### How to see your commit history including changes in Git:

This command shows the commit’s history including all files and their changes:

    git log -p

### How to see a specific commit in Git:

This command shows a specific commit.

Replace commit-id with the id of the commit that you find in the commit log after the word commit.

    git show commit-id

### How to see log stats in Git:

This command will cause the Git log to show some statistics about the changes in each commit, including line(s) changed and file names.

    git log --stat

### How to see changes made before committing them using “diff” in Git:

You can pass a file as a parameter to only see changes on a specific file.  
`git diff` shows only unstaged changes by default.

We can call diff with the `--staged` flag to see any staged changes.

    git diff
    git diff all_checks.py
    git diff --staged

### How to see changes using “git add -p”:

This command opens a prompt and asks if you want to stage changes or not, and includes other options.

    git add -p

### How to remove tracked files from the current working tree in Git:

This command expects a commit message to explain why the file was deleted.

    git rm filename

### How to rename files in Git:

This command stages the changes, then it expects a commit message.

    git mv oldfile newfile

### How to ignore files in Git:

Create a `.gitignore` file and commit it.

### How to revert unstaged changes in Git:

    git checkout filename

### How to revert staged changes in Git:

You can use the -p option flag to specify the changes you want to reset.

    git reset HEAD filename
    git reset HEAD -p

### How to amend the most recent commit in Git:

`git commit --amend` allows you to modify and add changes to the most recent commit.

    git commit --amend

!!Note!!: fixing up a local commit with amend is great and you can push it to a shared repository after you’ve fixed it. But you should avoid amending commits that have already been made public.

### How to rollback the last commit in Git:

`git revert` will create a new commit that is the opposite of everything in the given commit.  
We can revert the latest commit by using the head alias like this:

    git revert HEAD

### How to rollback an old commit in Git:

You can revert an old commit using its commit id. This opens the editor so you can add a commit message.

    git revert comit_id_here

### How to create a new branch in Git:

By default, you have one branch, the main branch. With this command, you can create a new branch. Git won’t switch to it automatically — you will need to do it manually with the next command.

    git branch branch_name

### How to switch to a newly created branch in Git:

When you want to use a different or a newly created branch you can use this command:

    git checkout branch_name

### How to list branches in Git:

You can view all created branches using the `git branch` command. It will show a list of all branches and mark the current branch with an asterisk and highlight it in green.

    git branch

### How to create a branch in Git and switch to it immediately:

In a single command, you can create and switch to a new branch right away.

    git checkout -b branch_name

### How to delete a branch in Git:

When you are done working with a branch and have merged it, you can delete it using the command below:

    git branch -d branch_name

### How to merge two branches in Git:

To merge the history of the branch you are currently in with the `branch_name`, you will need to use the command below:

    git merge branch_name

### How to show the commit log as a graph in Git:

We can use `--graph` to get the commit log to show as a graph. Also,  
`--oneline` will limit commit messages to a single line.

    git log --graph --oneline

### How to show the commit log as a graph of all branches in Git:

Does the same as the command above, but for all branches.

    git log --graph --online --all

### How to abort a conflicting merge in Git:

If you want to throw a merge away and start over, you can run the following command:

    git merge --abort

### How to add a remote repository in Git

This command adds a remote repository to your local repository (just replace `https://repo_here` with your remote repo URL).

    git add remote https://repo_here

### How to see remote URLs in Git:

You can see all remote repositories for your local repository with this command:

    git remote -v

### How to get more info about a remote repo in Git:

Just replace `origin` with the name of the remote obtained by  
running the git remote -v command.

    git remote show origin

### How to push changes to a remote repo in Git:

When all your work is ready to be saved on a remote repository, you can push all changes using the command below:

    git push

### How to pull changes from a remote repo in Git:

If other team members are working on your repository, you can retrieve the latest changes made to the remote repository with the command below:

    git pull

### How to check remote branches that Git is tracking:

This command shows the name of all remote branches that Git is tracking for the current repository:

    git branch -r

### How to fetch remote repo changes in Git:

This command will download the changes from a remote repo but will not perform a merge on your local branch (as git pull does that instead).

    git fetch

### How to check the current commits log of a remote repo in Git

Commit after commit, Git builds up a log. You can find out the remote repository log by using this command:

    git log origin/main

### How to merge a remote repo with your local repo in Git:

If the remote repository has changes you want to merge with your local, then this command will do that for you:

    git merge origin/main

### How to get the contents of remote branches in Git without automatically merging:

This lets you update the remote without merging any content into the  
local branches. You can call git merge or git checkout to do the merge.

    git remote update

### How to push a new branch to a remote repo in Git:

If you want to push a branch to a remote repository you can use the command below. Just remember to add -u to create the branch upstream:

    git push -u origin branch_name

### How to remove a remote branch in Git:

If you no longer need a remote branch you can remove it using the command below:

    git push --delete origin branch_name_here

### How to use Git rebase:

You can transfer completed work from one branch to another using `git rebase`.

    git rebase branch_name_here

Git Rebase can get really messy if you don’t do it properly. Before using this command I suggest that you re-read the official documentation <a href="https://git-scm.com/book/it/v2/Git-Branching-Rebasing" class="markup--anchor markup--p-anchor">here</a>

### How to run rebase interactively in Git:

You can run git rebase interactively using the -i flag.  
It will open the editor and present a set of commands you can use.

    git rebase -i master
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    # d, drop = remove commit

### How to force a push request in Git:

This command will force a push request. This is usually fine for pull request branches because nobody else should have cloned them.  
But this isn’t something that you want to do with public repos.

    git push -f

------------------------------------------------------------------------

### Git Alias Overview

It is important to note that there is no direct `git alias` command. Aliases are created through the use of the `git config` command and the Git configuration files. As with other configuration values, aliases can be created in a local or global scope.

To better understand Git aliases let us create some examples.

    $ git config --global alias.co checkout
    $ git config --global alias.br branch
    $ git config --global alias.ci commit
    $ git config --global alias.st status

The previous code example creates globally stored shortcuts for common git commands. Creating the aliases will not modify the source commands. So `git checkout` will still be available even though we now have the `git co` alias. These aliases were created with the `--global` flag which means they will be stored in Git's global operating system level configuration file. On linux systems, the global config file is located in the User home directory at `/.gitconfig`.

    [alias]
            co = checkout
                br = branch
                ci = commit
                st = status

This demonstrates that the aliases are now equivalent to the source commands.

### Usage

Git aliasing is enabled through the use of `git config`, For command-line option and usage examples please review the `git config `documentation.

### Examples

### Using aliases to create new Git commands

A common Git pattern is to remove recently added files from the staging area. This is achieved by leveraging options to the `git reset` command. A new alias can be created to encapsulate this behavior and create a new alias-command-keyword which is easy to remember:

    git config --global alias.unstage 'reset HEAD --'

The preceding code example creates a new alias `unstage`. This now enables the invocation of `git unstage. git unstage` which will perform a reset on the staging area. This makes the following two commands equivalent.

    git unstage fileA
    $ git reset HEAD -- fileA

### My Default Gitignore:

------------------------------------------------------------------------

### Troubleshooting Git

<figure><img src="https://cdn-images-1.medium.com/max/800/1*cFb6UcCGmIcNU1-woncSTA.png" class="graf-image" /></figure>### Here are some tips on troubleshooting and resolving issues with Git.

### Broken pipe errors on `git push`

‘Broken pipe’ errors can occur when attempting to push to a remote repository. When pushing you usually see:

    Write failed: Broken pipe
    fatal: The remote end hung up unexpectedly

To fix this issue, here are some possible solutions.

### Increase the POST buffer size in Git

**If you’re using Git over HTTP instead of SSH**, you can try increasing the POST buffer size in Git’s configuration.

Example of an error during a clone: `fatal: pack has bad object at offset XXXXXXXXX: inflate returned -5`

Open a terminal and enter:

    git config http.postBuffer 52428800

The value is specified in bytes, so in the above case the buffer size has been set to 50MB. The default is 1MB.

### Check your SSH configuration

**If pushing over SSH**, first check your SSH configuration as ‘Broken pipe’ errors can sometimes be caused by underlying issues with SSH (such as authentication). Make sure that SSH is correctly configured by following the instructions in the <a href="https://docs.gitlab.com/ee/ssh/README.html#troubleshooting-ssh-connections" class="markup--anchor markup--p-anchor">SSH troubleshooting</a> documentation.

If you’re a GitLab administrator and have access to the server, you can also prevent session timeouts by configuring SSH `keep alive` either on the client or on the server.

Configuring both the client and the server is unnecessary.

**To configure SSH on the client side**:

-   <span id="7ae1">On UNIX, edit `~/.ssh/config` (create the file if it doesn’t exist) and add or edit:</span>
-   <span id="542f">`Host your-gitlab-instance-url.com ServerAliveInterval 60 ServerAliveCountMax 5`</span>
-   <span id="74d7">On Windows, if you are using PuTTY, go to your session properties, then navigate to “Connection” and under “Sending of null packets to keep session active”, set `Seconds between keepalives (0 to turn off)` to `60`.</span>

**To configure SSH on the server side**, edit `/etc/ssh/sshd_config` and add:

    ClientAliveInterval 60
    ClientAliveCountMax 5

### Running a `git repack`

**If ‘pack-objects’ type errors are also being displayed**, you can try to run a `git repack` before attempting to push to the remote repository again:

    git repack
    git push

### Upgrade your Git client

In case you’re running an older version of Git (&lt; 2.9), consider upgrading to &gt;= 2.9 (see <a href="https://stackoverflow.com/questions/19120120/broken-pipe-when-pushing-to-git-repository/36971469#36971469" class="markup--anchor markup--p-anchor">Broken pipe when pushing to Git repository</a>).

### `ssh_exchange_identification` error

Users may experience the following error when attempting to push or pull using Git over SSH:

    Please make sure you have the correct access rights
    and the repository exists.
    ...
    ssh_exchange_identification: read: Connection reset by peer
    fatal: Could not read from remote repository.

or

    ssh_exchange_identification: Connection closed by remote host
    fatal: The remote end hung up unexpectedly

This error usually indicates that SSH daemon’s `MaxStartups` value is throttling SSH connections. This setting specifies the maximum number of concurrent, unauthenticated connections to the SSH daemon. This affects users with proper authentication credentials (SSH keys) because every connection is ‘unauthenticated’ in the beginning. The default value is `10`.

Increase `MaxStartups` on the GitLab server by adding or modifying the value in `/etc/ssh/sshd_config`:

    MaxStartups 100:30:200

`100:30:200` means up to 100 SSH sessions are allowed without restriction, after which 30% of connections are dropped until reaching an absolute maximum of 200.

Once configured, restart the SSH daemon for the change to take effect.

    # Debian/Ubuntu
    sudo systemctl restart ssh

    # CentOS/RHEL
    sudo service sshd restart

### Timeout during `git push` / `git pull`

If pulling/pushing from/to your repository ends up taking more than 50 seconds, a timeout is issued. It contains a log of the number of operations performed and their respective timings, like the example below:

    remote: Running checks for branch: master
    remote: Scanning for LFS objects... (153ms)
    remote: Calculating new repository size... (cancelled after 729ms)

This could be used to further investigate what operation is performing poorly and provide GitLab with more information on how to improve the service.

### `git clone` over HTTP fails with `transfer closed with outstanding read data remaining` error

If the buffer size is lower than what is allowed in the request, the action fails with an error similar to the one below:

    error: RPC failed; curl 18 transfer closed with outstanding read data remaining
    fatal: The remote end hung up unexpectedly
    fatal: early EOF
    fatal: index-pack failed

This can be fixed by increasing the existing `http.postBuffer` value to one greater than the repository size. For example, if `git clone` fails when cloning a 500M repository, you should set `http.postBuffer` to `524288000`. That setting ensures the request only starts buffering after the first 524288000 bytes.

The default value of `http.postBuffer`, 1 MiB, is applied if the setting is not configured.

    git config http.postBuffer 524288000

------------------------------------------------------------------------

### **Further Reading:**

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 12, 2021](https://medium.com/p/b50c9c01a107).

<a href="https://medium.com/@bryanguner/understanding-git-a-beginners-guide-containing-cheat-sheets-resources-b50c9c01a107" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
