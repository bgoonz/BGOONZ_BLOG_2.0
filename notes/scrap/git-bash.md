---
title: Understanding Git Bash
weight: 0
excerpt: Understanding Git Bash
seo:
    title: ' Understanding Git Bash'
    description: ' Understanding Git Bash'
    robots: []
    extra: []
template: docs
---

# Understanding Git Bash

# Git Bash

At its core, Git is a set of command line utility programs that are designed to execute on a Unix style command-line environment. Modern operating systems like Linux and macOS both include built-in Unix command line terminals. This makes Linux and macOS complementary operating systems when working with Git. Microsoft Windows instead uses Windows command prompt, a non-Unix terminal environment.

In Windows environments, Git is often packaged as part of higher level GUI applications. GUIs for Git may attempt to abstract and hide the underlying version control system primitives. This can be a great aid for Git beginners to rapidly contribute to a project. Once a project's collaboration requirements grow with other team members, it is critical to be aware of how the actual raw Git methods work. This is when it can be beneficial to drop a GUI version for the command line tools. Git Bash is offered to provide a terminal Git experience.

## What is Git Bash?

Git Bash is an application for Microsoft Windows environments which provides an emulation layer for a Git command line experience. Bash is an acronym for Bourne Again Shell. A shell is a terminal application used to interface with an operating system through written commands. Bash is a popular default shell on Linux and macOS. Git Bash is a package that installs Bash, some common bash utilities, and Git on a Windows operating system.

## How to install Git Bash

Git Bash comes included as part of the [Git For Windows](https://gitforwindows.org/) package. Download and install Git For Windows like other Windows applications. Once downloaded find the included `.exe` file and open to execute Git Bash.

## How to use Git Bash

Git Bash has the same operations as a standard Bash experience. It will be helpful to review basic Bash usage. Advanced usage of Bash is outside the scope of this Git focused document.

## How to navigate folders

The Bash command `pwd` is used to print the 'present working directory'. `pwd` is equivalent to executing cd on a DOS(Windows console host) terminal. This is the folder or path that the current Bash session resides in.

The Bash command `ls` is used to 'list' contents of the current working directory. `ls` is equivalent to `DIR` on a Windows console host terminal.

Both Bash and Windows console host have a cd command. cd is an acronym for 'Change Directory'. cd is invoked with an appended directory name. Executing cd will change the terminal sessions current working directory to the passed directory argument.

## Git Bash Commands

Git Bash is packaged with additional commands that can be found in the `/usr/bin` directory of the Git Bash emulation. Git Bash can actually provide a fairly robust shell experience on Windows. Git Bash comes packaged with the following shell commands which are outside the scope of this document: `[Ssh](https://man.openbsd.org/ssh.1)`, `[scp](https://linux.die.net/man/1/scp)`, `[cat](http://man7.org/linux/man-pages/man1/cat.1.html)`, `[find](https://linux.die.net/man/1/find)`.

In addition the previously discussed set of Bash commands, Git Bash includes the full set of Git core commands discussed through out this site. Learn more at the corresponding documentation pages for
