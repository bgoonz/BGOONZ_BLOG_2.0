# These NPM tricks will make you a pro

> By Carl-Johan Kihl After using NPM for almost 8 years, I’ve learned things along the way that I wish I knew when I started. Let’s call them tricks, things that drastically improved my way of working with NPM. Today I want to share my top 10 tricks with

By Carl-Johan Kihl

After using NPM for almost 8 years, I’ve learned things along the way that I wish I knew when I started. Let’s call them tricks, things that drastically improved my way of working with NPM. Today I want to share my top 10 tricks with you.

### 1\. Save time. ⏲ Use Shortcuts

This is one of the most useful but not so well-documented features. A shortcut for a command might seem like a trivial thing, but the truth is that you will write ****30–60%**** less code. You’ll save time you can spend on something meaningful, like drinking an extra cup of coffee ☕️ ?

Instead of `npm ****install**** <package>`  
write `npm ****i**** <package>`.

Instead of `npm ****install**** ****--save**** <package>`  
write `npm ****i -S**** <package>`.

Instead of `npm ****install**** ****--save-dev**** <package>`  
write `npm ****i -D**** <package>`.

Instead of `npm ****install**** ****--global**** <package>`  
write `npm ****i -G**** <package>`.

? Bonus shortcut! Wanna impress your colleagues? ? Here it comes…

Instead of `npm ****test****`  
write `npm ****t****`.

### 2\. Install multiple packages in one command

Why write multiple lines when you can write one? ? If you know your packages by heart, the fastest option is to install them all in a one-liner, but be careful! One misspelled package and the whole command will fail. If you’re unsure about the names just install them one by one.

    npm i -S react redux react-redux 

### 3\. Install packages from different sources

By default, when running `npm-install`, NPM will install the latest version from the _npm-registry_ ([https://registry.npmjs.org](https://registry.npmjs.org/))

But there’s more! NPM can install packages from other sources as well, like an URL or a tarball file.

When making your own packages or pull-requests for existing packages, this feature is powerful. For example, if you have your own fork of [Redux](https://redux.js.org/), you can install your package directly from your fork. _(Change_ `_username_` _to your username on GitHub.)_

<<<<<<< HEAD
    npm i
=======
    npm i 
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

Even better, if you’re using a GitHub repository, you can use this shortcut:

`npm i ****username/redux****`

There’s more! You can also install a package from a specific branch. Useful while testing a future release. Just add `#` together with the branch name at the end.

    npm i username/redux#

<<<<<<< HEAD
? Bonus shortcut! Are you not using GitHub? No worries, there are shortcuts for \***\*BitBucket\*\*** and \***\*GitLab\*\*** as well:
=======
? Bonus shortcut! Are you not using GitHub? No worries, there are shortcuts for ****BitBucket**** and ****GitLab**** as well:
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

    npm i bitbucket:username/myrepositorynpm i gitlab:username/myrepository

### 4\. Linking Packages

Sometimes you want to work on a project and develop its packages at the same time. Committing and pushing your package to a remote repository for every change you want to try out is tiresome! ? Instead, you can use a feature called _package linking_.

<<<<<<< HEAD
_Package linking_ works by creating a symlink in your node_modules folder that points to the local repository of your package. In this way, you can edit packages locally and the changes will be instantly available in the project using it.
=======
_Package linking_ works by creating a symlink in your node\_modules folder that points to the local repository of your package. In this way, you can edit packages locally and the changes will be instantly available in the project using it.
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

The easiest way to understand _package linking_ is to try it out!  
Let’s say we have a project called `myproject` and a package called `mypackage`. We want `mypackage` to be a dependency of `myproject`.

![](https://cdn-media-1.freecodecamp.org/images/1*6UqU6s3lTXURBArAseZ-fQ.png)

One project and one package.

Go to the folder `mypackage` and write

    npm link

Nice! Now, go to the folder `myproject` and write

`npm link mypackage`

Done! Take a closer look at the folder structure

![](https://cdn-media-1.freecodecamp.org/images/1*N_dNE4jtEeBcWnGgE7g5xw.png)

As you can see, `myproject/node_modules/mypackage` is now a symlink to the folder `mypackage`! Now you can continue to develop `mypackage` and all changes you make will be instantly available in `myproject`.

### 5\. The npx command

There are many scripting tools on NPM out there that you probably will use but will not be a part of your runtime bundle. Grunt, gulp, react-create-app, react-native-cli and mocha are just a few.

Before NPM 5.x you had to install these tools either as global packages or as devDependencies. This was time-consuming, not only to install but to maintain all your tools for multiple projects. Also, most of the tools you will only use once or twice.

Here, the binary NPX comes to the rescue and saves a lot of work for us! For example, to start a new react-project you can simply write:

`npx create-react-app my-new-project`

The latest version of [create-react-app](https://github.com/facebook/create-react-app) will be downloaded and executed immediately. No more installing and maintaining tools as global packages.

### 6\. Monitor and clean your project

![](https://cdn-media-1.freecodecamp.org/images/1*5o6_Xpf35l3TivVl9YFSFw.jpeg)

It’s important to understand what’s happening under the hood when installing packages in order to solve issues and to make the dependency tree and the final bundle size as small as possible.

First of all, we need a good overview of the dependency tree and which package versions have actually been installed. Use the command `npm list`. Add the flag `--depth=0` to list only top-level packages and add `-g` to list your global packages.

`npm listnpm list --depth=0 -g`

![](https://cdn-media-1.freecodecamp.org/images/1*W6rh263TrzZReldwNC7TCg.png)

<<<<<<< HEAD
NPM is good at maintaining itself and flattening the dependency tree on the fly, but it’s always a good habit to \***\*dedupe\*\*** your project before publishing. It might remove a few packages for you.
=======
NPM is good at maintaining itself and flattening the dependency tree on the fly, but it’s always a good habit to ****dedupe**** your project before publishing. It might remove a few packages for you.
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

`npm dedupe`

It’s also a great idea to get a good overview of your outdated and missing packages. It’s hard not to love this view for its well-organized columns and the Christmas-vibe color scheme ??

`npm outdated`

![](https://cdn-media-1.freecodecamp.org/images/1*XY6mBtNPP5LcMS7Ee1IxYQ.png)

The outdated list is really beautiful!

<<<<<<< HEAD
If you get a lot of red rows, you need to run `npm update` to update your packages to the latest possible version according to your package.json, which is as well stated in the \***\*wanted\*\*** column
=======
If you get a lot of red rows, you need to run `npm update` to update your packages to the latest possible version according to your package.json, which is as well stated in the ****wanted**** column
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

`npm update`

Great! Now, if you run `npm oudated` again, all the red rows should be gone.

![](https://cdn-media-1.freecodecamp.org/images/1*hJU3FI-AlLNzyBz9i_Byrg.png)

If you are using the caret `^` in front of your versions in package.json, the major versions will not be updated (hence the yellow rows). This is good, cause there might be breaking changes updating to a new major version.

If you still want to update everything to the latest version, you can use the tool `npm-update-all`. It’s as easy as running this command in your project folder.

`npx npm-update-all`

Cool! Now you got the latest version of all your dependencies. Your package.json is updated as well. ⚠️ Be aware of breaking changes ⚠️

![](https://cdn-media-1.freecodecamp.org/images/1*9A29MdExsP7IjULGhZU3PA.png)

As you can see, npm-update-all will update all your packages to the latest version.

### 7\. Go to the home page for a package

Need to check the documentation for a package? Why bother switching over to the browser and start googling when everything you need is the terminal? ?

Open the repository for a package in the browser

`npm repo <package>`

Open the home page

`npm home <package>`

Open the documentation

`npm docs <package>`

### 8\. Use NPM scripts

I love npm-scripts! Instead of using task-runners like Gulp and Grunt for automating repetitive tasks you can, in most cases use npm-scripts instead for several reasons:

➕ Fewer dev-dependencies or global dependencies to maintain.  
➕ No new tools for contributors and team members to learn  
➕ Less code and configuration.

First of all, you have predefined scripts like `start, install, test, prepublish`that have special meanings in NPM. You can read about how they can be used in my [previous tutorial](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c) where we build an npm-package from scratch.

You can also create your own custom scripts. Here is an example of a script that will format your code in the `src` folder with [ESLint](https://eslint.org/):

package.json:

    "scripts":{"test": "jest","format": "eslint src --fix"}

Now you can run `npm run format` and [ESLint](https://eslint.org/) will do its job.

You can do a lot of things with npm-scripts like running shell-commands and chaining scripts after each other. Check out [npm-scripts](https://docs.npmjs.com/misc/scripts) for a deeper understanding of this powerful feature.

### 9\. Running NPM Scripts in vsCode

<<<<<<< HEAD
Sometimes I have \***\*30\*\*** npm-scripts in my package.json (No kidding). ? Luckily, if you are using [Visual Studio Code](https://code.visualstudio.com/), you can list all your npm-scripts in the explorer and run your scripts with a click of a button! Be sure this setting is enabled:
=======
Sometimes I have ****30**** npm-scripts in my package.json (No kidding). ? Luckily, if you are using [Visual Studio Code](https://code.visualstudio.com/), you can list all your npm-scripts in the explorer and run your scripts with a click of a button! Be sure this setting is enabled:
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2

`npm.enableScriptExplorer: true`

![](https://cdn-media-1.freecodecamp.org/images/1*QJt2B9fgYJ8FXSwQh3IzBg.png)

Run your scripts with a click of a button! VSCode supports listing scripts from multiple packages at the same time.

### 10\. Set your default values

When creating a new project, you will run `npm init` and you will be asked questions about your project. To save time you’ll probably write run `npm init -y` to fill in the package.json with default values.

But what exactly are your default values? ? I like to set some of these myself to save time further on! ?

npm config set init.author.name "Carl-Johan (C-J) Kihl"  
npm config set init.author.email "carljohan.kihl@mail.com"

### Summary

Those was my tips for NPM for now! If you have more tips and tricks that you want to share please add a comment below! ?

? Bonus shortcut!  
Imagine it’s Friday night and you’re about to finalize a new project, but you’re way too tired to write `npm dedupe` . ?

No worries! Save three letters by writing:

`npm ****ddp****`

Thank you for reading.

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)

<<<<<<< HEAD
[Source](https://www.freecodecamp.org/news/10-npm-tricks-that-will-make-you-a-pro-a945982afb25/)
=======

[Source](https://www.freecodecamp.org/news/10-npm-tricks-that-will-make-you-a-pro-a945982afb25/)
>>>>>>> 2463ce91b0e33baaa31e9d29eef9c2d52887bdf2
