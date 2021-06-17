---
title: vscode
weight: 2
seo:
  title: vscode
  description: This is the vscode page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: vscode
      keyName: property
    - name: 'og:description'
      value: This is the vscode page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: vscode
    - name: 'twitter:description'
      value: This is the vscode page
template: docs
---

# Everything You Need to Get Started With VSCode + Extensions & Resources

Commands:

## Everything You Need to Get Started With VSCode + Extensions & Resources

### Every extension or tool you could possibly need

## Here’s a rudimentary static site I made that goes into more detail on the extensions I use…

[**VSCodeExtensions**  
 5fff5b9a2430bb564bfd451d--stoic-mccarthy-2c335f.netlify.app](https://5fff5b9a2430bb564bfd451d--stoic-mccarthy-2c335f.netlify.app/#h18)

## Here’s the repo it was deployed from:

[https://github.com/bgoonz/vscode-Extension-readmes](https://github.com/bgoonz/vscode-Extension-readmes)

## Commands:

> Command Palette
>
> Access all available commands based on your current context.
>
> Keyboard Shortcut: **Ctrl+Shift+P**

![](https://cdn-images-1.medium.com/max/800/0*BByhnDoVQdRPdO4F.gif)\#\#\# Command palette \`⇧⌘P\` Show all commands \`⌘P\` Show files \#\#\# Sidebars \`⌘B\` Toggle sidebar \`⇧⌘E\` Explorer \`⇧⌘F\` Search \`⇧⌘D\` Debug \`⇧⌘X\` Extensions \`⇧^G\` Git \(SCM\) \#\#\# Search \`⌘F\` Find \`⌥⌘F\` Replace \`⇧⌘F\` Find in files \`⇧⌘H\` Replace in files \#\#\# Panel \`⌘J\` Toggle panel \`⇧⌘M\` Problems \`⇧⌘U\` Output \`⇧⌘Y\` Debug console\` \` ^\` \`\`Terminal \#\#\# View \`⌘k\` \`z\` Zen mode \`⌘k\` \`u\` Close unmodified \`⌘k\` \`w\` Close all \#\#\# Debug \`F5\` Start \`⇧F5\` Stop \`⇧⌘F5\` Restart \`^F5\` Start without debugging \`F9\` Toggle breakpoint \`F10\` Step over \`F11\` Step into \`⇧F11\` Step out \`⇧⌘D\` Debug sidebar \`⇧⌘Y\` Debug panel![](https://cdn-images-1.medium.com/max/1200/0*llpkl5jsIMhWMucR.png)

## Tips-N-Tricks:

Here is a selection of common features for editing code. If the keyboard shortcuts aren’t comfortable for you, consider installing a [keymap extension](https://marketplace.visualstudio.com/search?target=VSCode&category=Keymaps&sortBy=Downloads) for your old editor.

Tip: You can see recommended keymap extensions in the Extensions view with Ctrl+K Ctrl+M which filters the search to `@recommended:keymaps` .

## Multi cursor selection

To add cursors at arbitrary positions, select a position with your mouse and use Alt+Click \(Option+click on macOS\).

To set cursors above or below the current position use:

Keyboard Shortcut: Ctrl+Alt+Up or Ctrl+Alt+Down

![](https://cdn-images-1.medium.com/max/800/0*Le_oEOiYnEBmFfig.gif)You can add additional cursors to all occurrences of the current selection with Ctrl+Shift+L.![](https://cdn-images-1.medium.com/max/800/0*WcrfwIln6NIG3zNW.gif)\*Note: You can also change the modifier to Ctrl/Cmd for applying multiple cursors with the\* \`editor.multiCursorModifier\` [_setting_](https://code.visualstudio.com/docs/getstarted/settings)\* . See\* [_Multi-cursor Modifier_](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier) \*for details.\* If you do not want to add all occurrences of the current selection, you can use Ctrl+D instead. This only selects the next occurrence after the one you selected so you can add selections one by one.![](https://cdn-images-1.medium.com/max/800/0*09EveaKtpZEKFEpO.gif)\#\#\# Column \(box\) selection You can select blocks of text by holding Shift+Alt \(Shift+Option on macOS\) while you drag your mouse. A separate cursor will be added to the end of each selected line.![](https://cdn-images-1.medium.com/max/800/0*LrsOBXP4MVqr7aes.gif)You can also use [keyboard shortcuts](https://code.visualstudio.com/docs/editor/codebasics#_column-box-selection) to trigger column selection. ------------------------------------------------------------------------ \#\#\# Extensions: \#\#\#\# [AutoHotkey Plus](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-autohotkey-plus) &gt; \*Syntax Highlighting, Snippets, Go to Definition, Signature helper and Code formatter\* \#\#\# [Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug) &gt; \*A debugger extension for Bash scripts based on\* \`bashdb\`![](https://cdn-images-1.medium.com/max/800/0*8j2gGGs0WHcuFIwY.gif)\#\#\# [Shellman](https://marketplace.visualstudio.com/items?itemName=Remisa.shellman) &gt; \*Bash script snippets extension\*![](https://cdn-images-1.medium.com/max/800/0*wyimtX27gWygAeOb.gif)\#\#\# C++ &gt; [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) — Preview C/C++ extension by [Microsoft](https://www.microsoft.com/), read [official blog post](https://blogs.msdn.microsoft.com/vcblog/2016/03/31/cc-extension-for-visual-studio-code/) for the details &gt; [Clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) — Provides C/C++ language IDE features for VS Code using clangd: code completion, compile errors and warnings, go-to-definition and cross references, include management, code formatting, simple refactorings. &gt; [gnu-global-tags](https://marketplace.visualstudio.com/items?itemName=austin.code-gnu-global) — Provide Intellisense for C/C++ with the help of the GNU Global tool. &gt; [YouCompleteMe](https://marketplace.visualstudio.com/items?itemName=RichardHe.you-complete-me) — Provides semantic completions for C/C++ \(and TypeScript, JavaScript, Objective-C, Golang, Rust\) using [YouCompleteMe](http://ycm-core.github.io/YouCompleteMe/). &gt; [C/C++ Clang Command Adapter](https://github.com/mitaki28/vscode-clang) — Completion and Diagnostic for C/C++/Objective-C using Clang command. &gt; [CQuery](https://github.com/cquery-project/vscode-cquery) — [C/C++ language server](https://github.com/jacobdufault/cquery) supporting multi-million line code base, powered by libclang. Cross references, completion, diagnostics, semantic highlighting and more. \#\#\#\# More \* [Microsoft’s tutorial on using VSCode for remote C/C++ development](https://devblogs.microsoft.com/cppblog/vscode-cpp-may-2019-update/) \#\#\# C\\#, ASP . NET and . NET Core &gt; [C\#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) — C\\# extension by [Microsoft](https://www.microsoft.com/), read [official documentation](https://code.visualstudio.com/docs/languages/csharp) for the details &gt; [C\# FixFormat](https://marketplace.visualstudio.com/items?itemName=Leopotam.csharpfixformat) — Fix format of usings / indents / braces / empty lines &gt; [C\# Extensions](https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions) — Provides extensions to the IDE that will speed up your development workflow. &gt; [MSBuild Project Tools](https://marketplace.visualstudio.com/items?itemName=tintoy.msbuild-project-tools) &gt; [VSCode Solution Explorer](https://marketplace.visualstudio.com/items?itemName=fernandoescolar.vscode-solution-explorer) &gt; [. NET Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer)![](https://cdn-images-1.medium.com/max/800/0*ZG5W4_VVBv89zO_g.gif)

## CSS

## [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

> _Peek or Jump to a CSS definition directly from HTML, just like in Brackets!_

![](https://cdn-images-1.medium.com/max/800/0*MN4pNqxDw4FyRk8g.gif)- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) — Lint CSS/SCSS. \* [Autoprefixer](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer) Parse CSS, SCSS, LESS and add vendor prefixes automatically.![](https://cdn-images-1.medium.com/max/800/0*edXaUlo7z9TRDQnC.gif)- [Intellisense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) — Provides CSS class name completion for the HTML class attribute based on the CSS files in your workspace. Also supports React’s className attribute.![](https://cdn-images-1.medium.com/max/800/0*AHJJrCMfkLWLHLH4.gif)\#\#\# Groovy \* [VsCode Groovy Lint](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-groovy-lint) — Groovy lint, format, prettify and auto-fix![](https://cdn-images-1.medium.com/max/800/0*jmi5_-erJj7WOMq7.gif)\#\#\# Haskell \* [haskell-linter](https://marketplace.visualstudio.com/items?itemName=hoovercj.haskell-linter) \* [Haskell IDE engine](https://marketplace.visualstudio.com/items?itemName=alanz.vscode-hie-server) — provides [language server](https://github.com/haskell/haskell-ide-engine) for stack and cabal projects. \* [autocomplate-shell](https://marketplace.visualstudio.com/items?itemName=truman.autocomplate-shell) ------------------------------------------------------------------------ \#\#\# Java \* [Language Support for Java\(TM\) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java) \* [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) \* [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven) \* [Lombok](https://marketplace.visualstudio.com/items?itemName=GabrielBB.vscode-lombok) ------------------------------------------------------------------------ \#\#\# JavaScript \* [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel) \* [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) — This extension provides AI-assisted development features including autocomplete and other insights based on understanding your code context.![](https://cdn-images-1.medium.com/max/800/0*i7CZbSbHqsWqEM4w.gif)See the difference between these two [here](https://github.com/michaelgmcd/vscode-language-babel/issues/1) &gt; [tslint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) — TSLint for Visual Studio Code \(with \`"tslint.jsEnable": true\` \). &gt; [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) — Linter for [eslint](https://eslint.org/). &gt; [XO](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) — Linter for [XO](https://github.com/xojs/xo). &gt; [AVA](https://marketplace.visualstudio.com/items?itemName=samverschueren.ava) — Snippets for [AVA](https://github.com/avajs/ava). &gt; [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — Linter, Formatter and Pretty printer for [Prettier](https://github.com/prettier/prettier-vscode). &gt; [Schema.org Snippets](https://marketplace.visualstudio.com/items?itemName=austinleegordon.vscode-schema-dot-org) — Snippets for [Schema.org](https://schema.org/). &gt; [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) — Spelling Checker for Visual Studio Code. Framework-specific: \#\#\#\# [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) — Toolkit for Vue.js![](https://cdn-images-1.medium.com/max/800/0*F7J_vW0ISbVMTXIZ.png)

## [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> _A VS Code extension to debug your JavaScript code in the Chrome browser, or other targets that support the Chrome Debugging Protocol._

## Facebook Flow

* [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) — provides all the functionality you would expect — linting, intellisense, type tooltips and click-to-definition
* [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) — an alternative Flowtype extension for Visual Studio Code

## TypeScript

* [tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) — TSLint for Visual Studio Code
* [TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero) — Code outline view of your open TS, sort and organize your imports.

## Markdown

## [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

> _Linter for_ [_markdownlint_](https://github.com/DavidAnson/markdownlint)_._

## [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

> _All-in-one markdown plugin \(keyboard shortcuts, table of contents, auto preview, list editing and more\)_

![](https://cdn-images-1.medium.com/max/800/0*8oVrYuZ9kLRNSuBs.gif)\#\#\# [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji) &gt; \*Adds emoji syntax support to VS Code’s built-in Markdown preview\*![](https://cdn-images-1.medium.com/max/800/0*rckUMIIZ9Jh7UE5q.png)

## PHP

## IntelliSense

These extensions provide slightly different sets of features. While the first one offers better autocompletion support, the second one seems to have more features overall.

* [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
* [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)

## Laravel

* [Laravel 5 Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel5-snippets) — Laravel 5 snippets for Visual Studio Code
* [Laravel Blade Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade) — Laravel blade snippets and syntax highlight support

![](https://cdn-images-1.medium.com/max/800/0*f4hMFe1l7NpJTG8v.gif)- [Laravel Model Snippets](https://marketplace.visualstudio.com/items?itemName=ahinkle.laravel-model-snippets) — Quickly get models up and running with Laravel Model Snippets.![](https://cdn-images-1.medium.com/max/800/0*1xydH2CgYGDSMZtB.gif)- [Laravel Artisan](https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan) — Laravel Artisan commands within Visual Studio Code![](https://cdn-images-1.medium.com/max/800/0*rzK952c4UgikNNPR.gif)- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) — Support for dotenv file syntax![](https://cdn-images-1.medium.com/max/800/0*fSAaqpXfBx1Sgztf.png)

## Other extensions

* [Format HTML in PHP](https://marketplace.visualstudio.com/items?itemName=rifi2k.format-html-in-php) — Formatting for the HTML in PHP files. Runs before the save action so you can still have a PHP formatter.

![](https://cdn-images-1.medium.com/max/800/0*6gF0K20iKes7I9ZF.gif)- [Composer](https://marketplace.visualstudio.com/items?itemName=ikappas.composer) \* [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) — XDebug extension for Visual Studio Code \* [PHP DocBlocker](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker) \* [php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer) — PHP CS Fixer extension for VS Code, php formatter, php code beautify tool \* [phpcs](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs) — PHP CodeSniffer for Visual Studio Code \* [phpfmt](https://marketplace.visualstudio.com/items?itemName=kokororin.vscode-phpfmt) — phpfmt for Visual Studio Code ------------------------------------------------------------------------ \#\#\# Python \* [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) — Linting, Debugging \(multi threaded, web apps\), Intellisense, auto-completion, code formatting, snippets, unit testing, and more. \#\#\# TensorFlow \* [TensorFlow Snippets](https://marketplace.visualstudio.com/items?itemName=vahidk.tensorflow-snippets) — This extension includes a set of useful code snippets for developing TensorFlow models in Visual Studio Code.![](https://cdn-images-1.medium.com/max/800/0*stmhgQ3sGvJBTvf2.gif)

## Rust

* [Rust](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust) — Linting, auto-completion, code formatting, snippets and more

## Productivity

## [ARM Template Viewer](https://marketplace.visualstudio.com/items?itemName=bencoleman.armview)

> _Displays a graphical preview of Azure Resource Manager \(ARM\) templates. The view will show all resources with the official Azure icons and also linkage between the resources._

![](https://cdn-images-1.medium.com/max/800/0*p8bvCI9DXF44m4z3.png)\#\#\# [Azure Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb)

> _Browse your database inside the vs code editor_

![](https://cdn-images-1.medium.com/max/800/0*VWvSU6Hbf20Kfc_P.gif)\#\#\# [Azure IoT Toolkit](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit)

> _Everything you need for the Azure IoT development: Interact with Azure IoT Hub, manage devices connected to Azure IoT Hub, and develop with code snippets for Azure IoT Hub_

![](https://cdn-images-1.medium.com/max/800/0*AobtCd80fICrbQPI.png)\#\#\# [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

> _Mark lines and jump to them_

## [Color Tabs](https://marketplace.visualstudio.com/items?itemName=orepor.color-tabs-vscode-ext)

> _An extension for big projects or monorepos that colors your tab/titlebar based on the current package_

![](https://cdn-images-1.medium.com/max/800/0*SEp-hgfDLlubNRyc.gif)\#\#\# [Create tests](https://marketplace.visualstudio.com/items?itemName=hardikmodha.create-tests)

> _An extension to quickly generate test files._

![](https://cdn-images-1.medium.com/max/800/0*DLZLYmrBiui0YOBt.gif)\#\#\# [Deploy](https://marketplace.visualstudio.com/items?itemName=mkloubert.vs-deploy)

> _Commands for upload or copy files of a workspace to a destination._

![](https://cdn-images-1.medium.com/max/800/0*lLasjzlmWnBwdbAT.gif)\#\#\# [Duplicate Action](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-duplicate)

> _Ability to duplicate files and directories._

## [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

> _Show language diagnostics inline \(errors/warnings/…\)._

![](https://cdn-images-1.medium.com/max/800/0*1tJJkV0p2Ka_W06r.gif)\#\#\# [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

> _Provides Javascript and React/Redux snippets in ES7_

![](https://cdn-images-1.medium.com/max/800/0*W3N0kbgEumWYa-m4.png)\#\#\# [Gi](https://marketplace.visualstudio.com/items?itemName=rubbersheep.gi)

> _Generating .gitignore files made easy_

![](https://cdn-images-1.medium.com/max/800/0*sfddghz8B1D362UB.gif)\#\#\# [GistPad](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs)

> _Allows you to manage GitHub Gists entirely within the editor. You can open, create, delete, fork, star and clone gists, and then seamlessly begin editing files as if they were local. It’s like your very own developer library for building and referencing code snippets, commonly used config/scripts, programming-related notes/documentation, and interactive samples._

![](https://cdn-images-1.medium.com/max/800/0*1MiBQ0u4Z8TPNaG9.gif)\#\#\# [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

> _View git log, file or line History_

## [Git Project Manager](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager)

> _Automatically indexes your git projects and lets you easily toggle between them_

## [GitLink](https://marketplace.visualstudio.com/items?itemName=qezhu.gitlink)

> _GoTo current file’s online link in browser and Copy the link in clipboard._

![](https://cdn-images-1.medium.com/max/800/0*Acgfn2rmhinuIPjk.gif)\#\#\# [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> _Provides Git CodeLens information \(most recent commit, \# of authors\), on-demand inline blame annotations, status bar blame information, file and blame history explorers, and commands to compare changes with the working tree or previous versions._

![](https://cdn-images-1.medium.com/max/800/0*MZu4GV7SOCW88UQQ.gif)\#\#\# [Git Indicators](https://marketplace.visualstudio.com/items?itemName=lamartire.git-indicators)

> _Atom-like git indicators on active panel_

![](https://cdn-images-1.medium.com/max/800/0*vitZrD9ZU0_eWckU.png)![](https://cdn-images-1.medium.com/max/800/0*0BHxQOLMx09FFuWZ.png)![](https://cdn-images-1.medium.com/max/800/0*x8F97F4AdSvvtehT.png)\#\#\# [GitHub](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-github)

> _Provides GitHub workflow support. For example browse project, issues, file \(the current line\), create and manage pull request. Support for other providers \(e.g. gitlab or bitbucket\) is planned. Have a look at the_ [_README.md_](https://github.com/KnisterPeter/vscode-github/blob/master/README.md) _on how to get started with the setup for this extension._

## [GitHub Pull Request Monitor](https://marketplace.visualstudio.com/items?itemName=erichbehrens.pull-request-monitor)

> _This extension uses the GitHub api to monitor the state of your pull requests and let you know when it’s time to merge or if someone requested changes._

![](https://cdn-images-1.medium.com/max/800/0*TOq5OERkgQNETGPK.png)\#\#\# [GitLab Workflow](https://marketplace.visualstudio.com/items?itemName=gitlab.gitlab-workflow)

> _Adds a GitLab sidebar icon to view issues, merge requests and other GitLab resources. You can also view the results of your GitLab CI/CD pipeline and check the syntax of your_ `.gitlab-ci.yml`_._

### [Gradle Tasks](https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle)

> _Run gradle tasks in VS Code._

![](https://cdn-images-1.medium.com/max/800/0*Vx-3DIT22BJpEnJr.gif)\#\#\# [Icon Fonts](https://marketplace.visualstudio.com/items?itemName=idleberg.icon-fonts)

> _Snippets for popular icon fonts such as Font Awesome, Ionicons, Glyphicons, Octicons, Material Design Icons and many more!_

## [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

> _This extension will display inline in the editor the size of the imported package. The extension utilizes webpack with babili-webpack-plugin in order to detect the imported size._

## [Jira and Bitbucket](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode)

> _Bringing the power of Jira and Bitbucket to VS Code — With Atlassian for VS Code you can create and view issues, start work on issues, create pull requests, do code reviews, start builds, get build statuses and more!_

![](https://cdn-images-1.medium.com/max/800/0*T6iuH2VnPYj93YqW.gif)\#\#\# [JS Parameter Annotations](https://marketplace.visualstudio.com/items?itemName=lannonbr.vscode-js-annotations)

> _Provides annotations on function calls in JS/TS files to provide parameter names to arguments._

![](https://cdn-images-1.medium.com/max/800/0*zHffPsYWln4dxhus.png)\#\#\# [Jumpy](https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy)

> _Provides fast cursor movement, inspired by Atom’s package of the same name._

![](https://cdn-images-1.medium.com/max/800/0*uPOceUJ4eMjCP_Qt.gif)\#\#\# [Kanban](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-kanban)

![](https://cdn-images-1.medium.com/max/800/0*SzUG3UU1fl5ub7bA.gif)_Simple Kanban board for use in Visual Studio Code, with time tracking and Markdown support._

## [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

> _Launch a development local Server with live reload feature for static & dynamic pages._

![](https://cdn-images-1.medium.com/max/800/0*Oj5zPrWwMbCBViBi.gif)\#\#\# [Multiple clipboards](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip)

> _Override the regular Copy and Cut commands to keep selections in a clipboard ring_

## [ngrok for VSCode](https://marketplace.visualstudio.com/items?itemName=philnash.ngrok-for-vscode)

> _ngrok allows you to expose a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on. This extension allows you to control_ [_ngrok_](https://ngrok.com/) _from the VSCode command palette_

![](https://cdn-images-1.medium.com/max/800/0*IX15MuJrEVBcTd0F.gif)\#\#\# [Instant Markdown](https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-instant-markdown)

> _Simply, edit markdown documents in vscode and instantly preview it in your browser as you type._

![](https://cdn-images-1.medium.com/max/800/0*jBw9vP9cAtvv2IcV.gif)\#\#\# [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

> _Visual Studio Code plugin that autocompletes npm modules in import statements._

![](https://cdn-images-1.medium.com/max/800/0*iVJamJugt_b7-VsV.gif)\#\#\# [Parameter Hints](https://marketplace.visualstudio.com/items?itemName=DominicVonk.parameter-hints)

> _Provides parameter hints on function calls in JS/TS/PHP files._

![](https://cdn-images-1.medium.com/max/800/0*BSj8-Qt7xtVTsl1Z.png)\#\#\# [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff)

> _Compare \(diff\) text selections within a file, across different files, or to the clipboard_

![](https://cdn-images-1.medium.com/max/800/0*KHki85jdv1hZeY3V.gif)\#\#\# [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

> _Infer the structure of JSON and paste is as types in many programming languages_

![](https://cdn-images-1.medium.com/max/800/0*K2GCRMGsYjpsK8OX.gif)\#\#\# [Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

> _Visual Studio Code plugin that autocompletes filenames_

![](https://cdn-images-1.medium.com/max/800/0*xwxU_1ffZvZ6DeoO.gif)\#\#\# [Power Tools](https://marketplace.visualstudio.com/items?itemName=ego-digital.vscode-powertools)

> _Extends Visual Studio Code via things like Node.js based scripts or shell commands, without writing separate extensions_

![](https://cdn-images-1.medium.com/max/800/0*Cb7J6-PYsXsnjqSN.gif)\#\#\# [PrintCode](https://marketplace.visualstudio.com/items?itemName=nobuhito.printcode)

> _PrintCode converts the code being edited into an HTML file, displays it by browser and prints it._

![](https://cdn-images-1.medium.com/max/800/0*2spvNSEEHM-ETd_F.gif)\#\#\# [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

> _Easily switch between projects._

## [Project Dashboard](https://marketplace.visualstudio.com/items?itemName=kruemelkatze.vscode-dashboard)

> _VSCode Project Dashboard is a Visual Studio Code extension that lets you organize your projects in a speed-dial like manner. Pin your frequently visited folders, files, and SSH remotes onto a dashboard to access them quickly._

![](https://cdn-images-1.medium.com/max/800/0*PxOoARROhi1rf63R.gif)\#\#\# [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)

> _Highlight columns in comma, tab, semicolon and pipe separated files, consistency check and linting with CSVLint, multi-cursor column editing, column trimming and realignment, and SQL-style querying with RBQL._

![](https://cdn-images-1.medium.com/max/800/0*XAb9jlOfGWlEaCEM.png)\#\#\# [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

> _Allows users to open any folder in a container, on a remote machine, container or in Windows Subsystem for Linux\(WSL\) and take advantage of VS Code’s full feature set._

![](https://cdn-images-1.medium.com/max/800/0*b6XEPh9PJzeWDB_z.gif)\#\#\# [Remote VSCode](https://marketplace.visualstudio.com/items?itemName=rafaelmaiolla.remote-vscode)

> _Allow user to edit files from Remote server in Visual Studio Code directly._

## [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

> _Allows you to send HTTP request and view the response in Visual Studio Code directly._

![](https://cdn-images-1.medium.com/max/800/0*zGne78bniDbTXzyf.gif)\#\#\# [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

> _Synchronize settings, snippets, themes, file icons, launch, key bindings, workspaces and extensions across multiple machines using GitHub Gist_

![](https://cdn-images-1.medium.com/max/800/0*ilH91MRgGnMF6C8c.gif)\#\#\# [Text Power Tools](https://marketplace.visualstudio.com/items?itemName=qcz.text-power-tools)

> _All-in-one extension for text manipulation: filtering \(grep\), remove lines, insert number sequences and GUIDs, format content as table, change case, converting numbers and more. Great for finding information in logs and manipulating text._

![](https://cdn-images-1.medium.com/max/800/0*Pfp4noD5OeQRbmsZ.gif)\#\#\# [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

> _Custom keywords, highlighting, and colors for TODO comments. As well as a sidebar to view all your current tags._

![](https://cdn-images-1.medium.com/max/800/0*6utz502-rPCa0Xcg.gif)\#\#\# [Toggle Quotes](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes)

> _Cycle between single, double and backtick quotes_

![](https://cdn-images-1.medium.com/max/800/0*7kZFpggvGAVkvoYa)\#\#\# [Typescript Destructure](https://marketplace.visualstudio.com/items?itemName=tusaeff.vscode-typescript-destructure-plugin)

> _TypeScript Language Service Plugin providing a set of source actions for easy objects destructuring_

![](https://cdn-images-1.medium.com/max/800/0*sEi0imXK2Yx69m7H.gif)\#\#\# [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

> _Automatic time tracker and productivity dashboard showing how long you coded in each project, file, branch, and language._

## Formatting & Beautification

## [Better Align](https://marketplace.visualstudio.com/items?itemName=wwm.better-align)

> _Align your code by colon\(:\), assignment\(=, +=, -=, \_=, /=\) and arrow\(=&gt; \). It has additional support for comma-first coding style and trailing comment.\*
>
> _And it doesn’t require you to select what to be aligned, the extension will figure it out by itself._

![](https://cdn-images-1.medium.com/max/800/0*5maDjvvH57MAks1l.gif)\#\#\# [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

> _Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text_

![](https://cdn-images-1.medium.com/max/800/0*h6Q6HLQ8jfHLnPlJ.gif)\#\#\# [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

> _Auto rename paired HTML/XML tags_

![](https://cdn-images-1.medium.com/max/800/0*uRKX2-umhSQzlESv.gif)\#\#\# [beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

> _Beautify code in place for VS Code_

## [html2pug](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug)

> _Transform html to pug inside your Visual Studio Code, forget about using an external page anymore._

## [ECMAScript Quotes Transformer](https://marketplace.visualstudio.com/items?itemName=vilicvane.es-quotes)

> _Transform quotes of ECMAScript string literals_

![](https://cdn-images-1.medium.com/max/800/0*W1Z1fIvOGgPclFMJ.gif)\#\#\# [Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)

> _Paste code with “correct” indentation_

## [Sort Lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)

> _Sorts lines of text in specific order_

![](https://cdn-images-1.medium.com/max/800/0*a4wPhA7VjJqkp3lu.gif)\#\#\# [Surround](https://marketplace.visualstudio.com/items?itemName=yatki.vscode-surround)

> _A simple yet powerful extension to add wrapper templates around your code blocks._

![](https://cdn-images-1.medium.com/max/800/0*lyjRgfSrvdmhGFXd.gif)\#\#\# [Wrap Selection](https://marketplace.visualstudio.com/items?itemName=konstantin.wrapSelection)

> _Wraps selection or multiple selections with symbol or multiple symbols_

## [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

> _Allows you to toggle your formatter on and off with a simple click_

## [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

> _This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use._

![](https://cdn-images-1.medium.com/max/800/0*m3nU-5UxgUxX4-eJ.png)\#\#\# [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

> _Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX._

## [shell-format](https://github.com/foxundermoon/vs-shell-format)

> _shell script & Dockerfile & dotenv format_

![](https://cdn-images-1.medium.com/max/800/0*TThlkfK1KgQm5AKU.gif)\#\#\# [Vscode Google Translate](https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate)

> _Quickly translate selected text right in your code_

![](https://cdn-images-1.medium.com/max/800/0*JF8NuxAFDxXiTn_u.gif)\#\#\# Explorer Icons

## [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

![](https://cdn-images-1.medium.com/max/800/0*67ZZ9mhoISPk_lM4.png)\#\#\# Uncategorized

## [Browser Preview](https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-preview)

> _Browser Preview for VS Code enables you to open a real browser preview inside your editor that you can debug. Browser Preview is powered by Chrome Headless, and works by starting a headless Chrome instance in a new process. This enables a secure way to render web content inside VS Code, and enables interesting features such as in-editor debugging and more!_
>
> _**FYI:… I HAVE TRIED ENDLESSLEY TO GET THE DEBUGGER TO WORK IN VSCODE BUT IT DOES NOT… I SUSPECT THAT’S WHY IT HAS A 3 STAR RATING FOR AN OTHERWISE PHENOMINAL EXTENSION.**_

![](https://cdn-images-1.medium.com/max/800/0*Oilwsi7EKGpCZb46.gif)\#\#\# [CodeRoad](https://marketplace.visualstudio.com/items?itemName=CodeRoad.coderoad)

> _Play interactive tutorials in your favorite editor._

![](https://cdn-images-1.medium.com/max/800/0*iV8P93QMmWdYfnrQ.gif)\#\#\# [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

> _Run code snippet or code file for multiple languages: C, C++, Java, JavaScript, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, BAT/CMD, BASH/SH, F\# Script, C\# Script, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml Script_

![](https://cdn-images-1.medium.com/max/800/0*hMsM_IEyBklQXchd.gif)\#\#\# [Code Time](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode)

> _Automatic time reports by project and other programming metrics right in VS Code._

![](https://cdn-images-1.medium.com/max/800/0*Uo1BYexJenprpgLa)\#\#\# [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

> _Highlight web colors in your editor_

![](https://cdn-images-1.medium.com/max/800/1*ZwE7OHKR5opvDCJJOw9KeQ.png)\#\#\# [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)

> _Syntax highlighting for the VS Code Output Panel and log files_

![](https://cdn-images-1.medium.com/max/800/0*9DpzVZ9cUNp2TMyD.jpg)\#\#\# [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)

> _Dash integration in Visual Studio Code_

![](https://cdn-images-1.medium.com/max/800/1*sqGllC-pgXNaEBfB-cxG9Q.png)\#\#\# [Edit with Shell Command](https://marketplace.visualstudio.com/items?itemName=ryu1kn.edit-with-shell)

> _Leverage your favourite shell commands to edit text_

![](https://cdn-images-1.medium.com/max/800/0*2wW31HJ1nUCjORZe.gif)\#\#\# [Editor Config for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

> _Editor Config for VS Code_

## [ftp-sync](https://marketplace.visualstudio.com/items?itemName=lukasz-wronski.ftp-sync)

> _Auto-sync your work to remote FTP server_

![](https://cdn-images-1.medium.com/max/800/0*-viKhwxpeYQdWHRE.gif)\#\#\# [Highlight JSX/HTML tags](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)

> _Highlights matching tags in the file._

## [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

> _A simple extension to make indentation more readable._

![](https://cdn-images-1.medium.com/max/800/0*GK_yEd-50SU3yc_y.png)\#\#\# [Password Generator](https://marketplace.visualstudio.com/items?itemName=ftonato.password-generator)

> _Create a secure password using our generator tool. Help prevent a security threat by getting a strong password today._

![](https://cdn-images-1.medium.com/max/800/0*qPJAZk9-NcYgsx7H.gif)\#\#\# [PlatformIO](https://marketplace.visualstudio.com/items?itemName=formulahendry.platformio)

> _An open source ecosystem for IoT development: supports 350+ embedded boards, 20+ development platforms, 10+ frameworks. Arduino and ARM mbed compatible._

![](https://cdn-images-1.medium.com/max/800/0*RywVt_vikqB-5urO.gif)\#\#\# [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)

> _Polaroid for your code 📸._
>
> _**Note: Polacode no longer works as of the most recent update… go for Polacode2020 or CodeSnap…**_

![](https://cdn-images-1.medium.com/max/800/0*Io4fPojDRrDf5CmW.gif)\#\#\# [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)

### This one is super cool!

> _Rapid prototyping playground for JavaScript and TypeScript in VS Code, with access to your project’s files, inline reporting, code coverage and rich output formatting._

![](https://cdn-images-1.medium.com/max/800/0*Q9kp8EWZHTD0Hfru.gif)\#\#\# [Slack](https://marketplace.visualstudio.com/items?itemName=sozercan.slack)

> _Send messages and code snippets, upload files to Slack_

Personally I found this extension to slow down my editor in addition to confliction with other extensions: \(I have over 200 as of this writing\)….. **yes I have been made fully aware that I have a problem and need to get help**

![](https://cdn-images-1.medium.com/max/800/0*9-xxjXzdPCh_46kZ.gif)\#\#\# [Spotify](https://marketplace.visualstudio.com/items?itemName=shyykoserhiy.vscode-spotify)

_No real advantage over just using Spotify normally… it’s problematic enough in implementation that you won’t save any time using it. Further, it’s a bit tricky to configure … or at least it was the last time I tried syncing it with my spotify account._

> _Provides integration with Spotify Desktop client. Shows the currently playing song in status bar, search lyrics and provides commands for controlling Spotify with buttons and hotkeys._

![](https://cdn-images-1.medium.com/max/800/0*IqsxXiGpZQWbQbfD.gif)\#\#\# [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg)

> _A Powerful SVG Language Support Extension\(beta\). Almost all the features you need to handle SVG._

![](https://cdn-images-1.medium.com/max/800/0*SC6zCXGaBnM_LkgC.png)\#\#\# [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer)

> _View an SVG in the editor and export it as data URI scheme or PNG._

## [Text Marker \(Highlighter\)](https://marketplace.visualstudio.com/items?itemName=ryu1kn.text-marker)

> _Highlight multiple text patterns with different colors at the same time. Highlighting a single text pattern can be done with the editor’s search functionality, but it cannot highlight multiple patterns at the same time, and this is where this extension comes handy._

![](https://cdn-images-1.medium.com/max/800/0*YDreVyGNjZmqj_KC.gif)\#\#\# [ESDOC MDN](https://marketplace.visualstudio.com/items?itemName=samundrak.esdoc-mdn)

## THIS IS A MUST HAVE

> _Quickly bring up helpful MDN documentation in the editor_

![](https://cdn-images-1.medium.com/max/800/0*xiUfWBsz8x8beY70.gif)![](https://cdn-images-1.medium.com/max/800/0*mMBU6d1iCkt5VHq2.gif)\#\#\# Themes:

In the interest of not making the reader scroll endlessly as I often do… I’ve made a separate post for that here. If you’ve made it this far, I thank you!

[**My Favorite VSCode** _**Themes**_  
 Themesbryanguner.medium.com](https://bryanguner.medium.com/my-favorite-vscode-themes-9bab65af3f0f)

## If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

[**bgoonz’s gists**  
 _Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \|…_gist.github.com](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

## Or Checkout my personal Resource Site:

[**Web-Dev-Resource-Hub**  
 _Edit description_web-dev-resource-hub.netlify.app](https://web-dev-resource-hub.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [March 18, 2021](https://medium.com/p/b9f4c8d91931).

[Canonical link](https://medium.com/@bryanguner/everything-you-need-to-get-started-with-vscode-extensions-resources-b9f4c8d91931)

Exported from [Medium](https://medium.com) on May 23, 2021.

