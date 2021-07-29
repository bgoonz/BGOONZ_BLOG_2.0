Node.js can be installed in different ways. This post highlights the most common and convenient ones.

Official packages for all the major platforms are available at <a href="https://nodejs.org/en/download/" class="uri">https://nodejs.org/en/download/</a>.

One very convenient way to install Node.js is through a package manager. In this case, every operating system has its own.

On macOS, [Homebrew](https://brew.sh/) is the de-facto standard, and - once installed - allows you to install Node.js very easily, by running this command in the CLI:

    brew install node

Other package managers for Linux and Windows are listed in <a href="https://nodejs.org/en/download/package-manager/" class="uri">https://nodejs.org/en/download/package-manager/</a>

`nvm` is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks, for example.

It is also very useful to test your code with old Node.js versions.

See <a href="https://github.com/creationix/nvm" class="uri">https://github.com/creationix/nvm</a> for more information about this option.

My suggestion is to use the official installer if you are just starting out and you don’t use Homebrew already, otherwise, Homebrew is my favorite solution.

In any case, when Node.js is installed you’ll have access to the `node` executable program in the command line.
