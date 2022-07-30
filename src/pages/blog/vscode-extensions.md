---
title: VSCode Extensions
template: post
subtitle: the most useful vscode extensions I know of
date: 2022-04-18T06:50:55.010Z
image: https://i.imgur.com/jpWPKyT.png
thumb_image: https://i.imgur.com/jpWPKyT.png
image_position: right
author: src/data/authors/bgoon.yaml
categories:
  - src/data/categories/tools.yaml
tags:
  - src/data/tags/🖇-🖇-🖇-🖇.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/vs-code-extensions.md
cmseditable: true
---
<!--StartFragment-->

### Make VS Code Easy to Read

* [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) - Makes HTML, CSS and JS very easy to read by de-minifying and properly spacing your horrendous markup.
* [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Create more human-friendly comments in your code. I use this all. the. time. It's a mandatory extension for our dev team.
* [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) - It helps you to navigate in your code, moving between important positions easily and quickly. I use this in conjunction with MetaGo to be almost mouse-free while coding.
* [MetaGO](https://marketplace.visualstudio.com/items?itemName=metaseed.metago) - Wicked fast cursor movement/selection for a focus on keyboard usage. This changed how I use VS Code forever. Seriously.
* [Log File Highlighter](https://marketplace.visualstudio.com/items?itemName=emilast.LogFileHighlighter) - Just as it sounds, gives VSCode .log file support so you can actually read those log dumps without your eyes bleeding.
* [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides) - Now you don't have to collapse and open all you're freaking elements to figure out nesting. This works really great with Beautify mentioned above and Rainbow Brackets, below.
* [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets) - Highlights the current bracket-set you're in and colours the rest differently for very easy location identification. If you're a heavy JS developer this is a great extension.
* [Image Preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) - Shows an image preview in the gutter and on hover. So key for checking if I just referenced the correct image/icon.
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - One of the most used extensions for sure; Gitlens is a must have for VS Code and just makes the Git experience so much better all around. Pair this with the [.gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore) and [.diff](https://marketplace.visualstudio.com/items?itemName=rafaelmaiolla.diff) extensions for good coverage.

### Faster Coding inside VS Code

* [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) - Inspired by a similar feature in Brackets called CSS Inline Editors. One of my favourite Bracket features now in VS Code.
* [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) - We lint our JS, so why not our LESS/SASS/CSS too? Great for quickly cleaning up sloppy CSS.
* [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) - Sure, you got Gulp, Webpack, NPM, Grunt but sometimes you want to compile/transpile your SASS/SCSS files to CSS files in realtime with live browser reload. This does just that.
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Best local development Server with live reload feature for static & dynamic pages (even PHP!).
* [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) - Update dependencies/devDependencies to latest version for specified package.json. Recommended by: [Mihail](https://dev.to/qm3ster)
* [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - Adds support and highlighting for .env files - something I rely on heavily pushing to Heroku, Netlify, etc...

### Pretty Screenshots

* [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode) - Highlight code, snap a really nice screenshot with your code theme's colours. Great for tutorials or documentation and you want to provide code examples.

### Multiple Instances of VS Code

* [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) - Uses a private gist to save a setting file so you can sync Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions between multiple VS Code instances. I use this to keep my Laptop, Work Desktop and Home Desktop all in sync with two simple commands.
* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - Override user/workspace settings with settings found in .editorconfig files. I use this to enforce specific rules for the development team on a per-project basis.

So there you have it, while I have lots of other plugins more specific to the environments I use (Front-End Web + Azure Cloud) hopefully you'll find these extensions useful in your daily use of VS Code!

Let me know if you already use them and if you love or hate them. Or, some extensions I might have missed and should try out!

### Noteworthy Mentions

After getting some feedback in the comments of you guys showing me some of your favourite VS Code extensions here are some new ones that I think are solid enough to also include:

* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - Shows the filesize cost of importing. - Recommended by: [miku86](https://dev.to/miku86)
* [Window Colors](https://marketplace.visualstudio.com/items?itemName=stuart.unique-window-colors) - Run multiple instances of VS Code? Have each window uniquely coloured so you don't lose track of which project is in what window. - Recommended by: [Jefry Pozo](https://dev.to/jefrypozo)
* [Prettier](https://github.com/prettier/prettier-vscode) - Very "Pretty" markup cleaner. Used by Stackoverflow to display nice code snippits. But, doesn't handle HTML inside `.js/.ejs/.jade/.pug` templates so not the best if working with many static site generators.

<!--EndFragment-->