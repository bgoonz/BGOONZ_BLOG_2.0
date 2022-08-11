---
title: Installing Node
weight: 0
excerpt: Installing Node
seo:
    title: 'Installing Node'
    description: 'Installing Node'
    robots: []
    extra: []
template: docs
---


## Android[](https://nodejs.org/en/download/package-manager/#android)

Android support is still experimental in Node.js, so precompiled binaries are not yet provided by Node.js developers.

However, there are some third-party solutions. For example, [Termux](https://termux.com/) community provides terminal emulator and Linux environment for Android, as well as own package manager and [extensive collection](https://github.com/termux/termux-packages) of many precompiled applications. This command in Termux app will install the last available Node.js version:

```
pkg install nodejs

```

Currently, Termux Node.js binaries are linked against `system-icu` (depending on `libicu` package).

## Arch Linux[](https://nodejs.org/en/download/package-manager/#arch-linux)

Node.js and npm packages are available in the Community Repository.

```
pacman -S nodejs npm

```

## CentOS, Fedora and Red Hat Enterprise Linux[](https://nodejs.org/en/download/package-manager/#centos-fedora-and-red-hat-enterprise-linux)

Node.js is available as a module called `nodejs` in CentOS/RHEL 8 and Fedora.

```
dnf module install nodejs:<stream>

```

where `<stream>` corresponds to the major version of Node.js. To see a list of available streams:

```
dnf module list nodejs

```

For example, to install Node.js 12:

```
dnf module install nodejs:12

```

For CentOS/RHEL 7 Node.js is available via [Software Collections](https://www.softwarecollections.org/en/scls/?search=NodeJS).

### Alternatives[](https://nodejs.org/en/download/package-manager/#alternatives)

These resources provide packages compatible with CentOS, Fedora, and RHEL.

-   [Node.js snaps](https://nodejs.org/en/download/package-manager/#snap) maintained and supported at <https://github.com/nodejs/snap>
-   [Node.js binary distributions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) maintained and supported by [NodeSource](https://github.com/nodesource/distributions)

## Debian and Ubuntu based Linux distributions[](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

[Node.js binary distributions](https://github.com/nodesource/distributions/blob/master/README.md) are available from NodeSource.

### Alternatives[](https://nodejs.org/en/download/package-manager/#alternatives-1)

Packages compatible with Debian and Ubuntu based Linux distributions are available via [Node.js snaps](https://nodejs.org/en/download/package-manager/#snap).

## fnm[](https://nodejs.org/en/download/package-manager/#fnm)

Fast and simple Node.js version manager built in Rust used to manage multiple released Node.js versions. It allows you to perform operations like install, uninstall, switch Node versions automatically based on the current directory, etc. To install fnm, use this [install script](https://github.com/Schniz/fnm#using-a-script-macoslinux).

fnm has cross-platform support (macOS, Windows, Linux) & all popular shells (Bash, Zsh, Fish, PowerShell, Windows Command Line Prompt). fnm is built with speed in mind and compatibility support for `.node-version` and `.nvmrc` files.

## FreeBSD[](https://nodejs.org/en/download/package-manager/#freebsd)

The most recent release of Node.js is available via the [www/node](https://www.freshports.org/www/node) port.

Install a binary package via [pkg](https://www.freebsd.org/cgi/man.cgi?pkg):

```
pkg install node

```

Or compile it on your own using [ports](https://www.freebsd.org/cgi/man.cgi?ports):

```
cd /usr/ports/www/node && make install

```

## Gentoo[](https://nodejs.org/en/download/package-manager/#gentoo)

Node.js is available in the portage tree.

```
emerge nodejs

```

## IBM i[](https://nodejs.org/en/download/package-manager/#ibm-i)

LTS versions of Node.js are available from IBM, and are available via [the 'yum' package manager](https://ibm.biz/ibmi-rpms). The package name is `nodejs` followed by the major version number (for instance, `nodejs12`, `nodejs14` etc)

To install Node.js 14.x from the command line, run the following as a user with \*ALLOBJ special authority:

```
yum install nodejs14

```

Node.js can also be installed with the IBM i Access Client Solutions product. See [this support document](http://www-01.ibm.com/support/docview.wss?uid=nas8N1022619) for more details

## macOS[](https://nodejs.org/en/download/package-manager/#macos)

Download the [macOS Installer](https://nodejs.org/en/#home-downloadhead) directly from the [nodejs.org](https://nodejs.org/) web site.

_If you want to download the package with bash:_

```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

```

### Alternatives[](https://nodejs.org/en/download/package-manager/#alternatives-2)

Using [Homebrew](https://brew.sh/):

```
brew install node

```

Using [MacPorts](https://www.macports.org/):

```
port install nodejs<major version>

# Example
port install nodejs7

```

Using [pkgsrc](https://pkgsrc.joyent.com/install-on-osx/):

Install the binary package:

```
pkgin -y install nodejs

```

Or build manually from pkgsrc:

```
cd pkgsrc/lang/nodejs && bmake install

```

## n[](https://nodejs.org/en/download/package-manager/#n)

`n` is a simple to use Node.js version manager for Mac and Linux. Specify the target version to install using a rich syntax, or select from a menu of previously downloaded versions. The versions are installed system-wide or user-wide, and for more targeted use you can run a version directly from the cached downloads.

See the [homepage](https://github.com/tj/n) for install methods (boostrap, npm, Homebrew, third-party), and all the usage details.

If you already have `npm` then installing `n` and then the newest LTS `node` version is as simple as:

```
npm install -g n
n lts

```

## NetBSD[](https://nodejs.org/en/download/package-manager/#netbsd)

Node.js is available in the pkgsrc tree:

```
cd /usr/pkgsrc/lang/nodejs && make install

```

Or install a binary package (if available for your platform) using pkgin:

```
pkgin -y install nodejs

```

## Nodenv[](https://nodejs.org/en/download/package-manager/#nodenv)

`nodenv` is a lightweight node version manager, similar to `nvm`. It's simple and predictable. A rich plugin ecosystem lets you tailor it to suit your needs. Use `nodenv` to pick a Node version for your application and guarantee that your development environment matches production.

Nodenv installation instructions are maintained [on its Github page](https://github.com/nodenv/nodenv#installation). Please visit that page to ensure you're following the latest version of the installation steps.

## nvm[](https://nodejs.org/en/download/package-manager/#nvm)

Node Version Manager is a bash script used to manage multiple released Node.js versions. It allows you to perform operations like install, uninstall, switch version, etc. To install nvm, use this [install script](https://github.com/nvm-sh/nvm#install--update-script).

On Unix / OS X systems Node.js built from source can be installed using [nvm](https://github.com/creationix/nvm) by installing into the location that nvm expects:

```
env VERSION=`python tools/getnodeversion.py` make install DESTDIR=`nvm_version_path v$VERSION` PREFIX=""

```

After this you can use `nvm` to switch between released versions and versions built from source. For example, if the version of Node.js is v8.0.0-pre:

```
nvm use 8

```

Once the official release is out you will want to uninstall the version built from source:

```
nvm uninstall 8

```

## nvs[](https://nodejs.org/en/download/package-manager/#nvs)

#### Windows[](https://nodejs.org/en/download/package-manager/#windows)

The `nvs` version manager is cross-platform and can be used on Windows, macOS, and Unix-like systems

To install `nvs` on Windows go to the [release page](https://github.com/jasongin/nvs/releases) here and download the MSI installer file of the latest release.

You can also use `chocolatey` to install it:

```
choco install nvs

```

#### macOS,UnixLike[](https://nodejs.org/en/download/package-manager/#macos-unixlike)

You can find the documentation regarding the installation steps of `nvs` in macOS/Unix-like systems [here](https://github.com/jasongin/nvs/blob/master/doc/SETUP.md#mac-linux)

#### Usage[](https://nodejs.org/en/download/package-manager/#usage)

After this you can use `nvs` to switch between different versions of node.

To add the latest version of node:

```
nvs add latest

```

Or to add the latest LTS version of node:

```
nvs add lts

```

Then run the `nvs use` command to add a version of node to your `PATH` for the current shell:

```
$ nvs use lts
PATH -= %LOCALAPPDATA%\nvs\default
PATH += %LOCALAPPDATA%\nvs\node\14.17.0\x64

```

To add it to `PATH` permanently, use `nvs link`:

```
nvs link lts

```

## OpenBSD[](https://nodejs.org/en/download/package-manager/#openbsd)

Node.js is available through the ports system.

```
/usr/ports/lang/node

```

Using [pkg_add](https://man.openbsd.org/OpenBSD-current/man1/pkg_add.1) on OpenBSD:

```
pkg_add node

```

## openSUSE and SLE[](https://nodejs.org/en/download/package-manager/#opensuse-and-sle)

Node.js is available in the main repositories under the following packages:

-   openSUSE Leap 15.2: `nodejs10`, `nodejs12`, `nodejs14`
-   openSUSE Tumbleweed: `nodejs16`
-   SUSE Linux Enterprise Server (SLES) 12: `nodejs10`, `nodejs12`, and `nodejs14` (The "Web and Scripting Module" must be [enabled](https://www.suse.com/releasenotes/x86_64/SUSE-SLES/12-SP5/#intro-modulesExtensionsRelated).)
-   SUSE Linux Enterprise Server (SLES) 15 SP2: `nodejs10`, `nodejs12`, and `nodejs14` (The "Web and Scripting Module" must be [enabled](https://www.suse.com/releasenotes/x86_64/SUSE-SLES/15/#Intro.Module).)

For example, to install Node.js 14.x on openSUSE Leap 15.2, run the following as root:

```
zypper install nodejs14

```

Different major versions of Node can be installed and used concurrently.

## SmartOS and illumos[](https://nodejs.org/en/download/package-manager/#smartos-and-illumos)

SmartOS images come with pkgsrc pre-installed. On other illumos distributions, first install [pkgsrc](https://pkgsrc.joyent.com/install-on-illumos/), then you may install the binary package as normal:

```
pkgin -y install nodejs

```

Or build manually from pkgsrc:

```
cd pkgsrc/lang/nodejs && bmake install

```

## Snap[](https://nodejs.org/en/download/package-manager/#snap)

[Node.js snaps](https://github.com/nodejs/snap) are available as [`node`](https://snapcraft.io/node) on the Snap store.

## Solus[](https://nodejs.org/en/download/package-manager/#solus)

Solus provides Node.js in its main repository.

```
sudo eopkg install nodejs

```

## Void Linux[](https://nodejs.org/en/download/package-manager/#void-linux)

Void Linux ships Node.js stable in the main repository.

```
xbps-install -Sy nodejs

```

## Windows[](https://nodejs.org/en/download/package-manager/#windows-1)

Download the [Windows Installer](https://nodejs.org/en/#home-downloadhead) directly from the [nodejs.org](https://nodejs.org/) web site.

### Alternatives[](https://nodejs.org/en/download/package-manager/#alternatives-3)

Using [Chocolatey](https://chocolatey.org/):

```
cinst nodejs
# or for full install with npm
cinst nodejs.install

```

Using [Scoop](https://scoop.sh/):

```
scoop install nodejs
```
