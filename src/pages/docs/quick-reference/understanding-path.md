---
title: Understanding PATH
weight: 0
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

### Understanding PATH

![](images/pypath.jpeg)

![](images/pypath2.PNG)

When you run a command like python or pip, your operating system searches through a list of directories to find an executable file with that name. This list of directories lives in an environment variable called PATH, with each directory in the list separated by a colon:

Directories in PATH are searched from left to right, so a matching executable in a directory at the beginning of the list takes precedence over another one at the end. In this example, the /usr/local/bin directory will be searched first, then /usr/bin, then /bin.

### Understanding Shims

pyenv works by inserting a directory of shims at the front of your PATH:

Through a process called rehashing, pyenv maintains shims in that directory to match every Python command across every installed version of Python---python, pip, and so on.

Shims are lightweight executables that simply pass your command along to pyenv. So with pyenv installed, when you run, say, pip, your operating system will do the following:

-   Search your PATH for an executable file named pip

-   Find the pyenv shim named pip at the beginning of your PATH

-   Run the shim named pip, which in turn passes the command along to pyenv

### Choosing the Python Version

When you execute a shim, pyenv determines which Python version to use by reading it from the following sources, in this order:

1.  The PYENV_VERSION environment variable (if specified). You can use the [pyenv shell](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md#pyenv-shell) command to set this environment variable in your current shell session.

2.  The application-specific .python-version file in the current directory (if present). You can modify the current directory's .python-version file with the [pyenv local](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md#pyenv-local) command.

3.  The first .python-version file found (if any) by searching each parent directory, until reaching the root of your filesystem.

4.  The global $(pyenv root)/version file. You can modify this file using the [pyenv global](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md#pyenv-global) command. If the global version file is not present, pyenv assumes you want to use the "system" Python. (In other words, whatever version would run if pyenv weren't in your PATH.)

**NOTE:** You can activate multiple versions at the same time, including multiple versions of Python2 or Python3 simultaneously. This allows for parallel usage of Python2 and Python3, and is required with tools like tox. For example, to set your path to first use your system Python and Python3 (set to 2.7.9 and 3.4.2 in this example), but also have Python 3.3.6, 3.2, and 2.5 available on your PATH, one would first pyenv install the missing versions, then set pyenv global system 3.3.6 3.2 2.5. At this point, one should be able to find the full executable path to each of these using pyenv which, e.g. pyenv which python2.5 (should display $(pyenv root)/versions/2.5/bin/python2.5), or pyenv which python3.4 (should display path to system Python3). You can also specify multiple versions in a .python-version file, separated by newlines. Lines starting with a # are ignored.

### Locating the Python Installation

Once pyenv has determined which version of Python your application has specified, it passes the command along to the corresponding Python installation.

Each Python version is installed into its own directory under $(pyenv root)/versions.

For example, you might have these versions installed:

-   $(pyenv root)/versions/2.7.8/

-   $(pyenv root)/versions/3.4.2/

-   $(pyenv root)/versions/pypy-2.4.0/

As far as Pyenv is concerned, version names are simply directories under $(pyenv root)/versions.

### Managing Virtual Environments

There is a pyenv plugin named [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) which comes with various features to help pyenv users to manage virtual environments created by virtualenv or Anaconda. Because the activate script of those virtual environments are relying on mutating $PATH variable of user's interactive shell, it will intercept pyenv's shim style command execution hooks. We'd recommend to install pyenv-virtualenv as well if you have some plan to play with those virtual environments.![](https://i.imgur.com/0hQBL4d.png)![](https://i.imgur.com/0hQBL4d.png)![](images/festive-zebra.png)
