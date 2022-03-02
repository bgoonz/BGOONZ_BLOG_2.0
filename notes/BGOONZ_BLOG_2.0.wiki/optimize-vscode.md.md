# VS Code Performance – How to Optimize Visual Studio Code and Choose the "Best" Extensions

> ## Excerpt
>
> Visual Studio Code (VS Code) is designed to be lightweight. It has a tight set of core features, and you can add extra features through extensions. But performance will inevitably be affected as your collection of extensions grows. Do you evaluate the performance of an extension before installing it? What

---

Visual Studio Code (VS Code) is designed to be lightweight. It has a tight set of core features, and you can add extra features through extensions.

But performance will inevitably be affected as your collection of extensions grows.

Do you evaluate the performance of an extension before installing it? What do you do if the startup of VS Code grows? From the absence of people writing about this topic, I guess people don't know.

In this article, I will explain the factors that affect the performance of an extension. I will also grade the performance of some popular extensions. Then I will outline how you can audit the performance of your existing extension suite, and give some general performance tips.

## Minimum hardware and software requirements

Before we get into extensions, let's talk briefly about what the minimum requirements for running VS Code are.

A computer bought in the last few years with modest specifications should be able to run VS Code without any issues.

### Hardware

The minimum hardware I recommend is:

-   1.6 GHz or faster processor;
-   At least 1 GB of RAM;
-   At least 200MB Disk Space.

### Operating Systems

VS Code has been tested on the following Operating Systems:

-   OS X Yosemite and later.
-   Windows 7 (with .NET Framework 4.5.2), 8.0, 8.1 and 10 (32-bit and 64-bit).
-   Linux (Debian): Ubuntu Desktop 14.04, Debian 7.
-   Linux (Red Hat): Red Hat Enterprise Linux 7, CentOS 7, Fedora 23.

### Unofficial community builds for Raspberry Pi and Chromebooks

Jay Rodgers released an open-source project that performs [nightly builds of VS Code for Raspberry Pi and Chromebooks](http://code.headmelted.com/).

> I've maintained the project for a few years now and it has expanded from providing binaries for Pi to providing support and tools to get VS Code running on low-end ARM devices that might not otherwise support it like Chromebooks (which make up about 60% of the devices in schools now).

If you want to try it out for yourself, you can follow the instructions he has laid out. He's done a lot of work to make it as straightforward as possible.

## Not all extensions are created equal

![extension inequality parody](https://www.freecodecamp.org/news/content/images/2020/10/blind-judgment.jpg)  
Edit of "Blindfolded Lady Justice" by [Tingey Injury Law Firm](https://unsplash.com/@tingeyinjurylawfirm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/equal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Extensions are loaded and unloaded under different conditions. The author of the extension decides this. This is specified through _Activation Events_, which we will discuss later.

There is no feedback in the editor indicating if an extension is active or not. So how do we know when an extension is active?

Most extensions are written in TypeScript, but they can also be written in JavaScript. Extensions can include Node modules as dependencies.

You can bundle and minify your source files into a single file if you wish. The [VS Code Docs](https://code.visualstudio.com/api/working-with-extensions/bundling-extension) recommends doing this to improve loading times, but many extensions don't do this. These choices affect their performance.

Extensions are mostly open source side projects written by developers. The quality of the code will vary. The maintenance of the code will vary.

Extensions written by Microsoft are not immune to these shortcomings, but they are less likely to suffer from them.

## Criteria for selecting an extension

Most lists of extensions talk about the cool features, and little else. If something is fire, please tell me a bit about the fuel and fumes also. ???

Some of the criteria that I suggest involves looking at source code. Don't be put off by that. To gather the key facts only takes a couple of minutes. I will show you how!

1.  **Is the feature I need available in VS Code already?**

    I demonstrated that you don't need many popular extensions in an article ["VS Code: you don't need that extension"](https://roboleary.net/vscode/2020/08/05/dont-need-extensions.html). You can consult the [VS Code docs](https://code.visualstudio.com/Docs) to check on a particular feature.

2.  **Does the extension have the features I need?**

    Consult the extension page on Visual Studio Marketplace to find this out.

3.  **When is an extension loaded and active?**

    I'll discuss this in detail in the section [Activation Events](https://www.freecodecamp.org/news/optimize-vscode-performance-best-extensions/#activation-events). You need to check the _package.json_ of the source code to find this out in advance.

    You can run the **Developer: Startup Performance** command to see the Activation Events of installed extensions. I discuss this further in the section [How to audit performance.](https://www.freecodecamp.org/news/optimize-vscode-performance-best-extensions/#how-to-audit-performance)

4.  **Are resources optimized?**

    You need to check the source code to see if it uses a bundler. You can check the _package.json_ to see if the _scripts_ section has a pre-build step for bundling.

    The VSIX extension file is a compressed archive of files for the code and the listing in the marketplace. Developers often include unnecessary files. There is a _.vscodeignore_ file to exclude files.

    The number of files that the VSIX contains has an impact on the cold activation time. The cold activation time is the first run of the extension after you install it. It tends to be slower than other times. I guess this is because the VSIX is uncompressed and cached.

    This is what the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension looks like when you open it in [7Zip](https://www.7-zip.org/).

![vetur VSIX opened in 7zip](https://www.freecodecamp.org/news/content/images/2020/10/vetur-7zip.png)

5.  **Have there been any performance issues reported recently, which are unresolved?**

    You can uncover these by auditing the performance of the extension. You need to check the issues on the Git repo also.

6.  **Does the code have tests?**

    The extension is going to be more susceptible to bugs without tests. You need to check the source code to see if there are tests.

7.  **Is it actively maintained?**

    The _Project Details_ section of the extension page gives an overview of the activity of the public Git repo. In some cases, an extension may be "done", so maintenance is not an important consideration.

![Marktetplace Page Project Details](https://www.freecodecamp.org/news/content/images/2020/10/marketplace-maintenance.png)

## Activation Events

Activation Events are events that trigger the activation of an extension. They define the conditions for loading and unloading an extension.

The author of an extension declares this in the `activationEvents` field of the `package.json` ([Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)).

There are a range of Activation Events to choose from. An extension can listen to many Activation Events to yield a more specific scope.

This is a Sequence Diagram of what happens when you launch VS Code. It gives you an idea of the chronology of events that occur, which affect when you can interact with the editor and use certain extensions.

[![launching VS Code](https://www.freecodecamp.org/news/content/images/2020/10/activation-events-2.svg)](https://cdn.imgpaste.net/2020/10/19/IDOqm.png)

Now, I will go through the most important Activation Events. I will start with the widest scope, and continue until I reach the narrowest scope.

### Startup event

The `*` Activation Event will activate an extension when VS Code starts up. These extensions will **always be active**. This impacts the startup time of VS Code.

```
"activationEvents": [
    "*"
]
```

The VS Code docs gives the following advice:

> To ensure a great end user experience, please use this activation event in your extension only when no other activation events combination works in your use-case.

In my opinion, there has to be a special case to grant an extension this scope. It is preferable to use at least `onStartUpFinished`.

**Popular Extensions with this Activation Event**: [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (11M installs), [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (7.4 installs), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (6.5M installs), [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) (5.4M installs), [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) (3.6M installs), [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) (2.9M installs), [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) (2M installs), [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) (1.1M installs).

### onStartupFinished event

This extension will be activated **sometime after VS Code starts up**. This is like the `*` activation event, but it will not slow down VS Code's startup.

```
"activationEvents": [
    "onStartupFinished"
]
```

**Popular Extensions with this Activation Event**: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (8.5M installs).

### onLanguage event

This extension will be activated whenever a file of a certain language is opened.

```
"activationEvents": [
    "onLanguage:json",
    "onLanguage:markdown",
    "onLanguage:typescript"
]
```

The `onLanguage` event takes a [language identifier](https://code.visualstudio.com/docs/languages/identifiers) value. You can declare as many languages as you wish.

**Popular Extensions with this Activation Event**: Most extensions in the ["Programming Languages" category](https://marketplace.visualstudio.com/search?target=VSCode&category=Programming%20Languages&sortBy=Installs) in the Visual Studio Code Marketplace have an _onLanguage_ entry along with other Activation Events, [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) (5.6M installs - active for _Vue_ only), [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) (4.3M installs - active for _YAML_ only), [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) (1.1M installs - active for supported languages only).

### workspaceContains event

This extension will be activated whenever you open a folder that contains at least one file that matches a glob pattern.

```
"activationEvents": [
    "workspaceContains:**/package.json"
]
```

### onCommand event

This extension will be activated whenever you invoke a command.

```
"activationEvents": [
        "onCommand:vscode-docker.compose.down",
        "onCommand:vscode-docker.compose.restart",
        "onCommand:vscode-docker.compose.up",
        ...
]
```

### Other Activation Events

You can read the [full list of Activation Events](https://code.visualstudio.com/api/references/activation-events) in the reference docs.

### Do extensions set a specific scope consistently?

No!

Too many extensions use the `*` Activation Event.

This is how I would grade the scope definition of some of the extensions I have used:

-   **The Good**: [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml), [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments).
-   **The Bad**:
    -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): It would be better to only target the languages it supports.
    -   [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one): It is active when a markdown file is open, or the workspace contains a README.md. The latter seems unnecessary to me.
-   **The Ugly**: All extensions with the `*` _Activation Event_ mentioned above.

## What impact can bundling have on an extension's performance?

![bundling a burger](https://www.freecodecamp.org/news/content/images/2020/10/burger-bundle.jpg)  
Edit of untitled photo by [Pablo Merchán Montes](https://unsplash.com/@pablomerchanm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

It can make a big impact!

John Papa speaks about this in his article "[Is Your VS Code Extension Slow? Here's How to Speed it Up!](https://dev.to/azure/is-your-vs-code-extension-slow-heres-how-to-speed-it-up-4d66)".

He reveals the results of an overhaul of 2 of Microsoft's extensions:

1.  [Azure Account](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account&wt.mc_id=devto-blog-jopapa): Bundling reduced activation time by 50%. The extension size was reduced from 6.2MB to 840KB through bundling and excluding more files (in the _.vscodeignore_ file).
2.  [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker&wt.mc_id=devto-blog-jopapa): Bundling reduced activation time from 3.5 seconds to under 2 seconds. Also, a consideration is the cold activation time, which tends to be slower than other times (warm activation time). The cold activation time went from a whopping 20 seconds to 2 seconds.

You can improve your favourite extension by raising this issue with the author of an extension. The [Bundling Extensions User Guide](https://code.visualstudio.com/api/working-with-extensions/bundling-extension) explains how.

## How to audit performance

You can run the **Developer: Show Running Extensions** command to get the basic stats about the running extensions. It sorts the extensions from longest to shortest activation time. The time is titled "Startup Activation" if the extension is loaded on startup.

As you can see from the screenshot, it also gives warnings about performance issues.

![running extensions](https://www.freecodecamp.org/news/content/images/2020/10/running-extensions.png)

As mentioned previously, it is worth noting that the cold activation time (the first time an extension is run) and warm activation time (second run and later) can vary by a lot. For this reason, you should base typical performance of an extension on a second run.

You can audit the startup performance by running the **Developer: Startup Performance** command. It opens a document with detailed stats about topics such as: system info, performance marks, extension activation stats, loader stats for modules, and more.

![startup performance system info](https://www.freecodecamp.org/news/content/images/2020/10/startup-performance1.png)

The results are specific to the current project and any open files when you execute the command.

The _Extension Activation Stats_ section gives a more detailed overview of extension performance. It is very useful for seeing the _Activation Events_ without needing to check the source code of an extension.

![startup performance](https://www.freecodecamp.org/news/content/images/2020/10/startup-performance.png)

You can see that VS Code loads its own "core" extensions for Git, Emmet, and a few others on startup also. ? You don't want the list of extensions loading on startup to get too long!

## Scorecard for some of the most popular extensions

I am focusing on extensions that I have used myself here. I don't want to speculate on extensions I haven't really used.

### ESLint

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is the most popular static analysis tool for JavaScript and TypeScript. It highlights problems in the editor with red squiggly lines.

-   **Author**: Microsoft.
-   **Number of installs**: 11 million.
-   **Marketplace Rating:** 4.3/5 (156).
-   **Core features**: Reporting syntax problems. Ability to automatically fix some problems.
-   **Activation Events**: On startup (`*`). It may be changed to `onStartupFinished` in the next release. See [this open issue](https://github.com/microsoft/vscode-eslint/issues/1068) for explanation of why this choice was made.
-   **Are resources optimized**: Yes.
-   **File size**: 133KB.
-   **Activation time on my system**: 39ms.
-   **Test suite**: Appears to be very basic. Just a minor test of glob patterns.
-   **Actively maintained**: Yes.
-   **Alternative extensions:** [JS Hint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint), [TS Lint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin).

ESLint is a solid extension. The performance is excellent.

It is disappointing that it is loaded on startup. If this bothers you, you can try [JS Hint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint) (written by the same developer) for JavaScript, and [TS Lint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) for TypeScript. Or you can fork the project and change it yourself!

It is actively maintained. It does not have a significant test suite.

**Score: 8/10**

### Prettier - Code Formatter

[Prettier](https://prettier.io/) is an opinionated code formatter. It currently supports the following languages: JavaScript, TypeScript, Flow, JSX, JSON, CSS, SCSS, Less, HTML, Vue, Angular, GraphQL, Markdown, YAML.

-   **Author**: Prettier.
-   **Number of installs**: 8.5 million.
-   **Marketplace Rating:** 3.8/5 (204).
-   **Core features**: Formatting code.
-   **Activation Events**: `onStartupFinished`.
-   **Are resources optimized**: Yes.
-   **File size**: 2.1MB.
-   **Activation time on my system**: 286ms.
-   **Test suite**: Yes. Coverage looks decent.
-   **Actively maintained**: Yes.
-   **Alternative extensions:** [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify).

Prettier does a great job at simplifying code formatting.

The performance is fine, but maybe it could be improved. It is on the slower side of the activation spectrum.

The activation scope is very wide. It would be preferable to target the supported languages only. I encountered an issue with Markdown formatting, so I do not use to format Markdown currently. These are things that can be changed easily.

**Score: 7.5/10.**

### Live Server

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) launches a local development server to give a live preview of your HTML and SVG files.

-   **Author**: Retwick Dey.
-   **Number of installs**: 7.5 million.
-   **Marketplace Rating:** 4.5/5 (269).
-   **Core features**: HTML and SVG live preview.
-   **Activation Events**: On startup (`*`).
-   **Are resources optimized**: No.
-   **File size**: 2.5MB.
-   **Activation time on my system**: 2513ms.
-   **Test suite**: Yes. Basic tests.
-   **Actively maintained**: No. Last commit was a year ago. The author of the extension is looking for a new maintainer.
-   **Alternative extensions:** I haven't found one!

When it works, it is a convenient extension to use.

The performance is poor and it is no longer maintained.

I would recommend becoming the maintainer and whipping it into shape. Or finding another extension for the job.

**Score: 5/10.**

### GitLens

[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) helps visualize code authorship and explore Git repositories.

-   **Author**: Eric Amodio.
-   **Number of installs**: 6.5 million.
-   **Marketplace Rating:** 4.86/5 (387)
-   **Core features**: Visualization of code authorship at a glance. Rich sidebar views of git repos.
-   **Activation Events**: On startup (`*`).
-   **Are resources optimized**: Yes.
-   **File size**: 1.5MB.
-   **Activation time on my system**: 35ms.
-   **Test suite**: No.
-   **Actively maintained**: Yes, but recent activity is low. Last commit was 4 months ago.
-   **Alternative extensions:** None.

GitLens is a good idea and can be helpful for gaining insights into a codebase.

It is well-written and the performance is excellent.

I have only used the extension of the blame annotations, but there are a lot of features and configuration options (135 individual settings!).

There are settings to enable each of the features, which is a very good approach. You can toggle the codelens on and off easily.

There has been a lull in activity recently. I don't know if that is a temporary situation or not. So, it's hard to tell how well the extensions will be supported in future. The author has details for supporting him.

**Score: 9/10.**

### Vetur

Vue language support.

-   **Author**: Pine Wu.
-   **Number of installs**: 5.6 million.
-   **Marketplace Rating:** 4.5/5 (117)
-   **Core features**: Syntax highlighting. Intellisense. Code Formatting.
-   **Activation Events**: `onLanguage: vue`.
-   **Are resources optimized**: No.
-   **File size**: 70.6 MB.
-   **Activation time on my system**: 252ms. However, the "Finish Activate" stat is 3943ms!
-   **Test suite**: Yes.
-   **Actively maintained**: Yes.
-   **Alternative extensions:** No obvious alternative. Formatting can be done with Prettier.

Vetur is the go-to extension for developing Vue apps in VS Code.

The syntax highlighting, intellisense, and hover references are great to have for Vue development.

The size of the extension is HUGE.

The performance is a bit erratic. It takes at least 4 seconds on my machine to finish activation, which is a lot longer than the built-in _JavaScript Language Features_. There is also a noticeable delay for autocompletion of JavaScript syntax.

The Developers are working on bundling the extension at the moment in [this issue](https://github.com/vuejs/vetur/pull/2301), so hopefully there will be an improvement in the performance soon. ?

**Score: 7/10.**

### Settings Sync

[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) synchronize settings using GitHub Gist.

-   **Author**: Shan Khan.
-   **Number of installs**: 2 million.
-   **Marketplace Rating:** 4.61/5 (638)
-   **Core features**: Sync settings.
-   **Activation Events**: On startup (`*`).
-   **Are resources optimized**: Yes.
-   **File size**: 1.2 MB.
-   **Activation time on my system**: 2513ms.
-   **Test suite**: Yes.
-   **Actively maintained**: No. Last commit was 1 year ago.
-   **Alternative extensions:** This is a [built-in feature in VS Code](https://code.visualstudio.com/docs/editor/settings-sync).

This was a standout extension. Syncing your complete editor setup across machines is super useful.

Since July 2020, the same functionality is a built-in feature in VS Code for this very thing. The main difference is that this extension saves your settings to a gist, which you have the option to share with others too.

The activation time is quite slow. Is it justifiably slow? It's hard to tell.

My guess is that the built-in feature will do a better job eventually as it has the backing of Microsoft. The extension appears to be no longer supported.

**Score: 8/10.**

### Markdown All in One

[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) fulfills a lot of your markdown needs.

-   **Author**: Yu Zhang.
-   **Number of installs**: 1.7 million.
-   **Marketplace Rating:** 4.8/5 (90)
-   **Core features**: Toggle-style editing. Table of contents.
-   **Activation Events**: `onLanguage: markdown`, `onCommand: markdown.extension.printToHtmlBatch`, `workspaceContains: README.md`.
-   **Are resources optimized**: Yes.
-   **File size**: 4.1 MB.
-   **Activation time on my system**: 195ms.
-   **Test suite**: Yes.
-   **Actively maintained**: Yes.
-   **Alternative extensions:** [Marky Markdown](https://marketplace.visualstudio.com/items?itemName=robole.marky-markdown).

It is a solid extension and the performance is excellent.

It has too many features for my taste. For many people it is appealing to have everything they may want in a single extension.

The Activation Event `workspaceContains: README.md` seems an unnecessary inclusion to me. Most of my projects have a README, but I seldom edit them. So for me this is like having the extension always active.

The logic for the table of contents is a bit usual. It had some problems with false positives in the past. I don't know if that has been ironed out completely.

The file size of the extension can be reduced by excluding the README screenshots from the extension package.

**Score: 8/10.**

## General Performance Tips

### Use a 64-bit OS

If you upgrade to a 64-bit version of an OS, you can expand the amount of virtual memory (VM) available to VS Code from 2 GB to 4 GB.

This enables VS Code to handle significantly larger workloads when VM is required.

### Disable restoration of project state on startup

VS Code automatically restores the project state from the previous session. This can prolong the times it takes to load a project.

You can disable some of the restore settings to speed up the loading time:

-   `Workbench › Editor: Restore View State`: Enabled by default.
-   `Files: Restore Undo Stack`: Enabled by default.
-   `Workbench: Startup Editor`: Controls which editor is shown at startup. The default is `welcome page`. You can set this to `none` to prevent any editor appearing on startup.

### Disable expensive features that impact editing performance

-   **Minimap**: `Editor › Minimap: Enabled`. Enabled by default.
-   **Word wrap**: `Editor: Word Wrap`. Disabled by default.
-   **CodeLens**: `Editor: CodeLens`. Enabled by default.
-   **Format on Save**: `Editor: Format On Save`. Disabled by default.
-   **Format on Paste**: `Editor: Format On Paste`. Disabled by default.

### Disable extensions for a workspace

You can disable an extension for a workspace (project).

![disable extension for workspace](https://www.freecodecamp.org/news/content/images/2020/10/disable-extension-workspace.png)

You are most likely going to want to do this for extensions that run always. For a Java project, you are not going to need ESLint!

You can take the opposite approach also. You can disable an extension globally, and only enable it for a select number of projects.

### Create extension sets

You can specify an alternate directory for extensions from the command-line as below.

```
code --extensions-dir <dir>
```

So, if you want to use different sets of extensions, you can. You can add a desktop shortcut for this, or an alias to run this regularly from the command-line.

One thing to keep in mind is syncing. If you sync your extensions between machines, you may want to exclude extensions from the sync. Otherwise, you may mess up your folder by mistake when you switch.

Ideally, you should not need to do this.

### Disable all extensions for a session

You can start VS Code with all user extensions disabled from the command-line. Zen mode plus plus!

```
code --disable-extensions
```

## Troubleshooting performance issues

### Experiencing slowness or a blank screen

VS Code has trouble with GPU (graphics processing unit) hardware acceleration on some systems. You can see if this is the case by disabling GPU acceleration.

```
code --disable-gpu
```

To set this permanently, do the following:

-   Open the Command Palette (Ctrl+Shift+P).
-   Run the **Preferences: Configure Runtime Arguments** command.
-   This command will open a `argv.json` file to configure runtime arguments. You might see some default arguments there already.
-   Add `"disable-hardware-acceleration": true`.
-   Restart VS Code.

### Installation appears to be corrupt with \[Unsupported\] message

VS Code does a background check when it starts up to check if you've changed any of its source files. If this is the case, you'll see the **\[Unsupported\]** text in the title bar.

One cause of this issue can be anti-virus software. VS Code could have been mistakenly quarantined, or had files removed by the anti-virus software (see issue [#94858](https://github.com/microsoft/vscode/issues/94858)). Check your anti-virus software settings to prevent this.

To solve this situation you can [reinstall VS Code](https://code.visualstudio.com/download). This will replace the modified files and silence the warning.
