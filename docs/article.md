The ds-algo-overview provides you with a blueprint of default post and page styles.

# Web Development Resources Site

> webdevhub

### Markdown PDF

This extension converts Markdown files to pdf, html, png or jpeg files.

[Japanese README](https://github.com/yzane/vscode-markdown-pdf/blob/master/README.ja.md)

### Table of Contents

-   [Features](https://trusting-aryabhata-e5438d.netlify.app/#features)
-   [Install](https://trusting-aryabhata-e5438d.netlify.app/#install)
-   [Usage](https://trusting-aryabhata-e5438d.netlify.app/#usage)
-   [Extension Settings](https://trusting-aryabhata-e5438d.netlify.app/#extension-settings)
-   [Options](https://trusting-aryabhata-e5438d.netlify.app/#options)
-   [FAQ](https://trusting-aryabhata-e5438d.netlify.app/#faq)
-   [Known Issues](https://trusting-aryabhata-e5438d.netlify.app/#known-issues)
-   [Release Notes](https://trusting-aryabhata-e5438d.netlify.app/#release-notes)
-   [License](https://trusting-aryabhata-e5438d.netlify.app/#license)
-   [Special thanks](https://trusting-aryabhata-e5438d.netlify.app/#special-thanks)

### Features

Supports the following features \* [Syntax highlighting](https://highlightjs.org/static/demo/) \* [emoji](https://www.webfx.com/tools/emoji-cheat-sheet/) \* [markdown-it-checkbox](https://github.com/mcecot/markdown-it-checkbox) \* [markdown-it-container](https://github.com/markdown-it/markdown-it-container) \* [markdown-it-include](https://github.com/camelaissani/markdown-it-include) \* [PlantUML](https://plantuml.com/) \* [markdown-it-plantuml](https://github.com/gmunguia/markdown-it-plantuml) \* [mermaid](https://mermaid-js.github.io/mermaid/)

Sample files \* [pdf](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.pdf) \* [html](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.html) \* [png](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.png) \* [jpeg](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.jpeg)

### markdown-it-container

INPUT

    ::: warning
    *here be dragons*
    :::

OUTPUT

    <div class="warning">
    <p><em>here be dragons</em></p>
    </div>

### markdown-it-plantuml

INPUT

    @startuml
    Bob -[#red]> Alice : hello
    Alice -[#0000FF]->Bob : ok
    @enduml

OUTPUT

![](https://webdevhubcom.files.wordpress.com/2021/04/e2b22-0p64cjfrdlmoa_qsg.png)

### markdown-it-include

Include markdown fragment files: `:[alternate-text]([https://github.com/yzane/vscode-markdown-pdf/blob/master/relative-path-to-file.md](https://github.com/yzane/vscode-markdown-pdf/blob/master/relative-path-to-file.md))`.

    ├── [plugins]
    │  └── README.md
    ├── CHANGELOG.md
    └── README.md

INPUT

    README Content

    :[Plugins](https://github.com/yzane/vscode-markdown-pdf/blob/master/./plugins/README.md)

    :[Changelog](https://github.com/yzane/vscode-markdown-pdf/blob/master/CHANGELOG.md)

OUTPUT

    Content of README.md

    Content of plugins/README.md

    Content of CHANGELOG.md

### mermaid

INPUT

\`\`\`mermaid stateDiagram \[\*\] –&gt; First state First { \[\*\] –&gt; second second –&gt; \[\*\] } \`\`\`

OUTPUT

![](https://webdevhubcom.files.wordpress.com/2021/04/e741d-0zj3ibfpthth778lh.png)

### Install

Chromium download starts automatically when Markdown PDF is installed and Markdown file is first opened with Visual Studio Code.

However, it is time-consuming depending on the environment because of its large size (~ 170Mb Mac, ~ 282Mb Linux, ~ 280Mb Win).

During downloading, the message `Installing Chromium` is displayed in the status bar.

If you are behind a proxy, set the `http.proxy` option to settings.json and restart Visual Studio Code.

If the download is not successful or you want to avoid downloading every time you upgrade Markdown PDF, please specify the installed [Chrome](https://www.google.co.jp/chrome/) or ‘Chromium’ with [markdown-pdf.executablePath](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfexecutablepath) option.

### Usage

### Command Palette

1.  Open the Markdown file
2.  Press `F1` or `Ctrl+Shift+P`
3.  Type `export` and select below

-   `markdown-pdf: Export (settings.json)`
-   `markdown-pdf: Export (pdf)`
-   `markdown-pdf: Export (html)`
-   `markdown-pdf: Export (png)`
-   `markdown-pdf: Export (jpeg)`
-   `markdown-pdf: Export (all: pdf, html, png, jpeg)`

![](https://webdevhubcom.files.wordpress.com/2021/04/3e56c-0kwm2zier68qbjwls.gif)

### Menu

1.  Open the Markdown file
2.  Right click and select below

-   `markdown-pdf: Export (settings.json)`
-   `markdown-pdf: Export (pdf)`
-   `markdown-pdf: Export (html)`
-   `markdown-pdf: Export (png)`
-   `markdown-pdf: Export (jpeg)`
-   `markdown-pdf: Export (all: pdf, html, png, jpeg)`

![](https://webdevhubcom.files.wordpress.com/2021/04/b7d5d-0a_o-vh7a_1zrarh5.gif)

### Auto convert

1.  Add `"markdown-pdf.convertOnSave": true` option to **settings.json**
2.  Restart Visual Studio Code
3.  Open the Markdown file
4.  Auto convert on save

### Extension Settings

[Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/customization/userandworkspace)

1.  Select **File &gt; Preferences &gt; UserSettings or Workspace Settings**
2.  Find markdown-pdf settings in the **Default Settings**
3.  Copy `markdown-pdf.*` settings
4.  Paste to the **settings.json**, and change the value

![](https://webdevhubcom.files.wordpress.com/2021/04/9f90f-0esq2gocyljgawdfp.gif)

### Options

### List

CategoryOption name[Configuration scope](https://code.visualstudio.com/api/references/contribution-points#Configuration-property-schema)[Save options](https://trusting-aryabhata-e5438d.netlify.app/#save-options)[markdown-pdf.type](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdftype)[markdown-pdf.convertOnSave](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfconvertonsave)[markdown-pdf.convertOnSaveExclude](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfconvertonsaveexclude)[markdown-pdf.outputDirectory](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfoutputdirectory)[markdown-pdf.outputDirectoryRelativePathFile](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfoutputdirectoryrelativepathfile)[Styles options](https://trusting-aryabhata-e5438d.netlify.app/#styles-options)[markdown-pdf.styles](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfstyles)[markdown-pdf.stylesRelativePathFile](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfstylesrelativepathfile)[markdown-pdf.includeDefaultStyles](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfincludedefaultstyles)[Syntax highlight options](https://trusting-aryabhata-e5438d.netlify.app/#syntax-highlight-options)[markdown-pdf.highlight](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfhighlight)[markdown-pdf.highlightStyle](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfhighlightstyle)[Markdown options](https://trusting-aryabhata-e5438d.netlify.app/#markdown-options)[markdown-pdf.breaks](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfbreaks)[Emoji options](https://trusting-aryabhata-e5438d.netlify.app/#emoji-options)[markdown-pdf.emoji](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfemoji)[Configuration options](https://trusting-aryabhata-e5438d.netlify.app/#configuration-options)[markdown-pdf.executablePath](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfexecutablepath)[Common Options](https://trusting-aryabhata-e5438d.netlify.app/#common-options)[markdown-pdf.scale](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfscale)[PDF options](https://trusting-aryabhata-e5438d.netlify.app/#pdf-options)[markdown-pdf.displayHeaderFooter](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfdisplayheaderfooter)resource[markdown-pdf.headerTemplate](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfheadertemplate)resource[markdown-pdf.footerTemplate](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdffootertemplate)resource[markdown-pdf.printBackground](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfprintbackground)resource[markdown-pdf.orientation](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdforientation)resource[markdown-pdf.pageRanges](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfpageranges)resource[markdown-pdf.format](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfformat)resource[markdown-pdf.width](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfwidth)resource[markdown-pdf.height](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfheight)resource[markdown-pdf.margin.top](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmargintop)resource[markdown-pdf.margin.bottom](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarginbottom)resource[markdown-pdf.margin.right](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarginright)resource[markdown-pdf.margin.left](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarginleft)resource[PNG JPEG options](https://trusting-aryabhata-e5438d.netlify.app/#png-jpeg-options)[markdown-pdf.quality](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfquality)[markdown-pdf.clip.x](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipx)[markdown-pdf.clip.y](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipy)[markdown-pdf.clip.width](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipwidth)[markdown-pdf.clip.height](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipheight)[markdown-pdf.omitBackground](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfomitbackground)[PlantUML options](https://trusting-aryabhata-e5438d.netlify.app/#plantuml-options)[markdown-pdf.plantumlOpenMarker](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfplantumlopenmarker)[markdown-pdf.plantumlCloseMarker](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfplantumlclosemarker)[markdown-pdf.plantumlServer](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfplantumlserver)[markdown-it-include options](https://trusting-aryabhata-e5438d.netlify.app/#markdown-it-include-options)[markdown-pdf.markdown-it-include.enable](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarkdown-it-includeenable)[mermaid options](https://trusting-aryabhata-e5438d.netlify.app/#mermaid-options)[markdown-pdf.mermaidServer](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmermaidserver)

### Save options

#### `markdown-pdf.type`

-   Output format: pdf, html, png, jpeg
-   Multiple output formats support
-   Default: pdf

    “markdown-pdf.type”: \[ “pdf”, “html”, “png”, “jpeg”\],

#### `markdown-pdf.convertOnSave`

-   Enable Auto convert on save
-   boolean. Default: false
-   To apply the settings, you need to restart Visual Studio Code

#### `markdown-pdf.convertOnSaveExclude`

-   Excluded file name of convertOnSave option

    “markdown-pdf.convertOnSaveExclude”: \[ “^work”, “work.md$”, “work|test”, “\[0-9\]\[0-9\]\[0-9\]\[0-9\]-work”, “work\\test” // All ‘’ need to be written as’\\’ (Windows)\],

#### `markdown-pdf.outputDirectory`

-   Output Directory
-   All `\` need to be written as `\\` (Windows)

    “markdown-pdf.outputDirectory”: “C:\\work\\output”,

-   Relative path
-   If you open the `Markdown file`, it will be interpreted as a relative path from the file
-   If you open a `folder`, it will be interpreted as a relative path from the root folder
-   If you open the `workspace`, it will be interpreted as a relative path from the each root folder
-   See [Multi-root Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces)

    “markdown-pdf.outputDirectory”: “output”,

-   Relative path (home directory)
-   If path starts with `~`, it will be interpreted as a relative path from the home directory

    “markdown-pdf.outputDirectory”: “~/output”,

-   If you set a directory with a `relative path`, it will be created if the directory does not exist
-   If you set a directory with an `absolute path`, an error occurs if the directory does not exist

#### `markdown-pdf.outputDirectoryRelativePathFile`

-   If `markdown-pdf.outputDirectoryRelativePathFile` option is set to `true`, the relative path set with [markdown-pdf.outputDirectory](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfoutputDirectory) is interpreted as relative from the file
-   It can be used to avoid relative paths from folders and workspaces
-   boolean. Default: false

### Styles options

#### `markdown-pdf.styles`

-   A list of local paths to the stylesheets to use from the markdown-pdf
-   If the file does not exist, it will be skipped
-   All `\` need to be written as `\\` (Windows)

    “markdown-pdf.styles”: \[ “C:\\Users\\\\Documents\\markdown-pdf.css”, “/home//settings/markdown-pdf.css”,\],

-   Relative path
-   If you open the `Markdown file`, it will be interpreted as a relative path from the file
-   If you open a `folder`, it will be interpreted as a relative path from the root folder
-   If you open the `workspace`, it will be interpreted as a relative path from the each root folder
-   See [Multi-root Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces)

    “markdown-pdf.styles”: \[ “markdown-pdf.css”,\],

-   Relative path (home directory)
-   If path starts with `~`, it will be interpreted as a relative path from the home directory

    “markdown-pdf.styles”: \[ “~/.config/Code/User/markdown-pdf.css”\],

-   Online CSS (<a href="https://xxx/xxx.css" class="uri">https://xxx/xxx.css</a>) is applied correctly for JPG and PNG, but problems occur with PDF [\#67](https://github.com/yzane/vscode-markdown-pdf/issues/67)

    “markdown-pdf.styles”: \[ “https://xxx/markdown-pdf.css”\],

#### `markdown-pdf.stylesRelativePathFile`

-   If `markdown-pdf.stylesRelativePathFile` option is set to `true`, the relative path set with [markdown-pdf.styles](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfstyles) is interpreted as relative from the file
-   It can be used to avoid relative paths from folders and workspaces
-   boolean. Default: false

#### `markdown-pdf.includeDefaultStyles`

-   Enable the inclusion of default Markdown styles (VSCode, markdown-pdf)
-   boolean. Default: true

### Syntax highlight options

#### `markdown-pdf.highlight`

-   Enable Syntax highlighting
-   boolean. Default: true

#### `markdown-pdf.highlightStyle`

-   Set the style file name. for example: github.css, monokai.css …
-   [file name list](https://github.com/isagalaev/highlight.js/tree/master/src/styles)
-   demo site : <a href="https://highlightjs.org/static/demo/" class="uri">https://highlightjs.org/static/demo/</a>

    “markdown-pdf.highlightStyle”: “github.css”,

### Markdown options

#### `markdown-pdf.breaks`

-   Enable line breaks
-   boolean. Default: false

### Emoji options

#### `markdown-pdf.emoji`

-   Enable emoji. [EMOJI CHEAT SHEET](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
-   boolean. Default: true

### Configuration options

#### `markdown-pdf.executablePath`

-   Path to a Chromium or Chrome executable to run instead of the bundled Chromium
-   All `\` need to be written as `\\` (Windows)
-   To apply the settings, you need to restart Visual Studio Code

    “markdown-pdf.executablePath”: “C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe”

### Common Options

#### `markdown-pdf.scale`

-   Scale of the page rendering
-   number. default: 1

    “markdown-pdf.scale”: 1

### PDF options

-   pdf only. [puppeteer page.pdf options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions)

#### `markdown-pdf.displayHeaderFooter`

-   Enable display header and footer
-   boolean. Default: true

#### `markdown-pdf.headerTemplate`

#### `markdown-pdf.footerTemplate`

-   HTML template for the print header and footer
-   `<span class='date'></span>` : formatted print date
-   `<span class='title'></span>` : markdown file name
-   `<span class='url'></span>` : markdown full path name
-   `<span class='pageNumber'></span>` : current page number
-   `<span class='totalPages'></span>` : total pages in the document

    “markdown-pdf.headerTemplate”: “&lt;div style=”font-size: 9px; margin-left: 1cm;"&gt; <span class="title"></span>

    <span class="date"></span>

    ",

    “markdown-pdf.footerTemplate”: “&lt;div style=”font-size: 9px; margin: 0 auto;"&gt; <span class="pageNumber"></span> / <span class="totalPages"></span>

    ",

#### `markdown-pdf.printBackground`

-   Print background graphics
-   boolean. Default: true

#### `markdown-pdf.orientation`

-   Paper orientation
-   portrait or landscape
-   Default: portrait

#### `markdown-pdf.pageRanges`

-   Paper ranges to print, e.g., ‘1-5, 8, 11-13’
-   Default: all pages

    “markdown-pdf.pageRanges”: “1,4-”,

#### `markdown-pdf.format`

-   Paper format
-   Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6
-   Default: A4

    “markdown-pdf.format”: “A4”,

#### `markdown-pdf.width`

#### `markdown-pdf.height`

-   Paper width / height, accepts values labeled with units(mm, cm, in, px)
-   If it is set, it overrides the markdown-pdf.format option

    “markdown-pdf.width”: “10cm”, “markdown-pdf.height”: “20cm”,

#### `markdown-pdf.margin.top`

#### `markdown-pdf.margin.bottom`

#### `markdown-pdf.margin.right`

#### `markdown-pdf.margin.left`

-   Paper margins.units(mm, cm, in, px)

    “markdown-pdf.margin.top”: “1.5cm”, “markdown-pdf.margin.bottom”: “1cm”, “markdown-pdf.margin.right”: “1cm”, “markdown-pdf.margin.left”: “1cm”,

### PNG JPEG options

-   png and jpeg only. [puppeteer page.screenshot options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagescreenshotoptions)

#### `markdown-pdf.quality`

-   jpeg only. The quality of the image, between 0-100. Not applicable to png images

    “markdown-pdf.quality”: 100,

#### `markdown-pdf.clip.x`

#### `markdown-pdf.clip.y`

#### `markdown-pdf.clip.width`

#### `markdown-pdf.clip.height`

-   An object which specifies clipping region of the page
-   number

    // x-coordinate of top-left corner of clip area “markdown-pdf.clip.x”: 0,

    // y-coordinate of top-left corner of clip area “markdown-pdf.clip.y”: 0,

    // width of clipping area “markdown-pdf.clip.width”: 1000,

    // height of clipping area “markdown-pdf.clip.height”: 1000,

#### `markdown-pdf.omitBackground`

-   Hides default white background and allows capturing screenshots with transparency
-   boolean. Default: false

### PlantUML options

#### `markdown-pdf.plantumlOpenMarker`

-   Oppening delimiter used for the plantuml parser.
-   Default: <span class="citation" data-cites="startuml"><span class="citation" data-cites="startuml">@startuml</span></span>

#### `markdown-pdf.plantumlCloseMarker`

-   Closing delimiter used for the plantuml parser.
-   Default: <span class="citation" data-cites="enduml"><span class="citation" data-cites="enduml">@enduml</span></span>

#### `markdown-pdf.plantumlServer`

-   Plantuml server. e.g. [http://localhost:8080](http://localhost:8080/)
-   Default: <a href="http://www.plantuml.com/plantuml" class="uri">http://www.plantuml.com/plantuml</a>
-   For example, to run Plantuml Server locally [\#139](https://github.com/yzane/vscode-markdown-pdf/issues/139) :
-   `docker run -d -p 8080:8080 plantuml/plantuml-server:jetty`
-   [plantuml/plantuml-server — Docker Hub](https://hub.docker.com/r/plantuml/plantuml-server/)

### markdown-it-include options

#### `markdown-pdf.markdown-it-include.enable`

-   Enable markdown-it-include.
-   boolean. Default: true

### mermaid options

#### `markdown-pdf.mermaidServer`

-   mermaid server
-   Default: <a href="https://unpkg.com/mermaid/dist/mermaid.min.js" class="uri">https://unpkg.com/mermaid/dist/mermaid.min.js</a>

### FAQ

### How can I change emoji size ?

1.  Add the following to your stylesheet which was specified in the markdown-pdf.styles

    .emoji { height: 2em; }

### Auto guess encoding of files

Using `files.autoGuessEncoding` option of the Visual Studio Code is useful because it automatically guesses the character code. See [files.autoGuessEncoding](https://code.visualstudio.com/updates/v1_11#_auto-guess-encoding-of-files)

    "files.autoGuessEncoding": true,

### Output directory

If you always want to output to the relative path directory from the Markdown file.

For example, to output to the “output” directory in the same directory as the Markdown file, set it as follows.

    "markdown-pdf.outputDirectory" : "output",
    "markdown-pdf.outputDirectoryRelativePathFile": true,

### Page Break

Please use the following to insert a page break.

    <div class="page"/>

### Known Issues

### `markdown-pdf.styles` option

-   Online CSS (<a href="https://xxx/xxx.css" class="uri">https://xxx/xxx.css</a>) is applied correctly for JPG and PNG, but problems occur with PDF. [\#67](https://github.com/yzane/vscode-markdown-pdf/issues/67)

### [Release Notes](https://github.com/yzane/vscode-markdown-pdf/blob/master/CHANGELOG.md)

### 1.4.4 (2020/03/19)

-   Change: mermaid javascript reads from URL instead of from local file
-   Add: `markdown-pdf.mermaidServer` option
-   add an option to disable mermaid [\#175](https://github.com/yzane/vscode-markdown-pdf/issues/175)
-   Add: `markdown-pdf.plantumlServer` option
-   support configuration of plantUML server [\#139](https://github.com/yzane/vscode-markdown-pdf/issues/139)
-   Add: configuration scope
-   extend setting ‘headerTemplate’ with scope… [\#184](https://github.com/yzane/vscode-markdown-pdf/pull/184)
-   Update: [slug](https://github.com/yzane/vscode-markdown-pdf/commit/3f4aeaa724999c46fc37423d4b188fd7ce72ffce) for markdown-it-named-headers
-   Update: markdown.css, markdown-pdf.css
-   Update: dependent packages
-   Fix: Fix for issue \#186 [\#187](https://github.com/yzane/vscode-markdown-pdf/pull/187)
-   Fix: move the Meiryo font to the end of the font-family setting
-   Meiryo font causing \\ to show as Â¥ [\#83](https://github.com/yzane/vscode-markdown-pdf/issues/83)
-   Backslash false encoded [\#124](https://github.com/yzane/vscode-markdown-pdf/issues/124)
-   Errors in which í•œê¸€(korean word) is not properly printed [\#148](https://github.com/yzane/vscode-markdown-pdf/issues/148)
-   Fix: Improve the configuration schema of package.json
-   Some settings can now be set from the settings editor.

![](https://webdevhubcom.files.wordpress.com/2021/04/b6c22-0xiwcipeujuw-ghyc.gif)

---

NEXT

---

### Ruby for Visual Studio Code

This extension provides enhanced Ruby language and debugging support for Visual Studio Code.

### Features

-   Automatic Ruby environment detection with support for rvm, rbenv, chruby, and asdf
-   Lint support via RuboCop, Standard, and Reek
-   Format support via RuboCop, Standard, Rufo, Prettier and RubyFMT
-   Semantic code folding support
-   Semantic highlighting support
-   Basic Intellisense support

### Installation

Search for `ruby` in the [VS Code Extension Gallery](https://code.visualstudio.com/docs/editor/extension-gallery) and install it!

### Initial Configuration

By default, the extension provides sensible defaults for developers to get a better experience using Ruby in Visual Studio Code. However, these defaults do not include settings to enable features like formatting or linting. Given how dynamic Ruby projects can be (are you using rvm, rbenv, chruby, or asdf? Are your gems globally installed or via bundler? etc), the extension requires additional configuration for additional features to be available.

### Using the Language Server

It is **highly recommended** that you enable the Ruby language server (via the Use Language Server setting or `ruby.useLanguageServer` config option). The server does not default to enabled while it is under development but it provides a significantly better experience than the legacy extension functionality. See [docs/language-server.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/language-server.md) for more information on the language server.

Legacy functionality will most likely not receive additional improvements and will be fully removed when the extension hits v1.0

### Example Initial Configuration:

    "ruby.useBundler": true, //run non-lint commands with bundle exec
    "ruby.useLanguageServer": true, // use the internal language server (see below)
    "ruby.lint": {
      "rubocop": {
        "useBundler": true // enable rubocop via bundler
      },
      "reek": {
        "useBundler": true // enable reek via bundler
      }
    },
    "ruby.format": "rubocop" // use rubocop for formatting

Reviewing the [linting](https://github.com/rubyide/vscode-ruby/blob/master/docs/linting.md), [formatting](https://github.com/rubyide/vscode-ruby/blob/master/docs/formatting.md), and [environment detection](https://github.com/rubyide/vscode-ruby/blob/master/docs/language-server.md) docs is recommended

For full details on configuration options, please take a look at the `Ruby` section in the VS Code settings UI. Each option is associated with a name and description.

### Debug Configuration

See [docs/debugger.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/debugger.md).

### Legacy Configuration

[docs/legacy.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/legacy.md) contains the documentation around the legacy functionality

### Troubleshooting

See [docs/troubleshooting.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/troubleshooting.md)

### Other Notable Extensions

-   [Ruby Solargraph](https://marketplace.visualstudio.com/items?itemName=castwide.solargraph) — Solargraph is a language server that provides intellisense, code completion, and inline documentation for Ruby.
-   [VSCode Endwise](https://github.com/kaiwood/vscode-endwise) — Wisely add “end” in Ruby

![](https://webdevhubcom.files.wordpress.com/2021/04/eb632-0wc4kcdykcjnhxfzj.png)

### Comment Divider

This is [**Visual Studio Code**](https://github.com/Microsoft/vscode) extension, which provides commands for generating comment-wrapped separators from line content.

[**Supports all common languages**](https://trusting-aryabhata-e5438d.netlify.app/#language-support)**.**

### Install

<a href="https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider" class="uri">https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider</a>

### Demo

![](https://webdevhubcom.files.wordpress.com/2021/04/a17da-0oeigp8g4f3wcdv8g.gif)

### Commands

### Make main header

-   Default Shortcut:
-   `**Shift**` + `**Alt**` + `**X**`
-   Default Style:
-   `/* -------------------------------------------------------------------------- */ /* Example text */ /* -------------------------------------------------------------------------- */`

### Make subheader

-   Default Shortcut:
-   `**Alt**` + `**X**`
-   Default Style:
-   `/* ------------------------------ Example text ------------------------------ */`

### Insert solid line

-   Default Shortcut:
-   `**Alt**` + `**Y**`
-   Default Style:
-   `/* -------------------------------------------------------------------------- */`

### Language Support

Extension uses relevant comment characters for all common languages.

For example, in python files subheader looks like

    # ------------------------------ python example ------------------------------ #

or in html files

    <!-- ---------------------------- html example ----------------------------- -->

**Also, you can easily** [**add support**](https://trusting-aryabhata-e5438d.netlify.app/#languages-configuration) **for any missing language or override the default preset.**

### Default Configuration

### Common

    // Set line length for all dividers.
      "comment-divider.length": 80,

### Main Header

    // "Set symbol for main header line filling (only one).
      "comment-divider.mainHeaderFiller": "-",

      // Set main header vertical style.
      "comment-divider.mainHeaderHeight": "block",

      // Set main header text align.
      "comment-divider.mainHeaderAlign": "center",

      // Set main header text transform style.
      "comment-divider.mainHeaderTransform": "none",

### Subheader

    // "Set symbol for subheader line filling (only one).
      "comment-divider.subheaderFiller": "-",

      // Set subheader vertical style.
      "comment-divider.subheaderHeight": "line",

      // Set subheader text align.
      "comment-divider.subheaderAlign": "center",

      // Set subheader text transform style.
      "comment-divider.subheaderTransform": "none",

### Solid Line

    // Set symbol for solid line filling.
      "comment-divider.lineFiller": "-",

### Languages Configuration

If some language is not supported out of the box, or you want to change default comment characters for an already supported language, it is possible to do it in the settings.

    "comment-divider.languagesMap": {
          "toml": ["#", "#"],
          "scss": ["//"]
    }

The item name is the language mode name and is associated with an array of 1 or 2 elements. The first element is the start of the line. The second, if defined, is the end.

The example above defines the right characters for `toml` and overrides `scss` defaults. As a result, the subheaders for these languages look like this:

    # ------------------------------ toml subheader ------------------------------ #

    // ----------------------------- scss subheader --------------------------------

### Issues

Request features and report bugs using [GitHub](https://github.com/stackbreak/comment-divider/issues).

![](https://webdevhubcom.files.wordpress.com/2021/04/8f2d5-0ummqshaddas51l_x.gif)

---

NEXT

---

### Auto Import — ES6, TS, JSX, TSX (VSCode Extension)

Automatically finds, parses and provides code actions and code completion for all available imports. Works with JavaScript (ES6) and TypeScript (TS). Forker from old repo [vscode-extension-auto-import](https://github.com/martinoppitz/vscode-extension-auto-import)

![](https://webdevhubcom.files.wordpress.com/2021/04/e32dc-0qlapcdgufwrpwneh.gif)

---

### PostgreSQL for Visual Studio Code

Welcome to PostgreSQL for Visual Studio Code! An extension for developing PostgreSQL with functionalities including:

-   Connect to PostgreSQL instances
-   Manage connection profiles
-   Connect to a different Postgres instance or database in each tab
-   View object DDL with ‘Go to Definition’ and ‘Peek Definition’
-   Write queries with IntelliSense
-   Run queries and save results as JSON, csv, or Excel

Install link: <a href="https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql" class="uri">https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql</a>

### Quickstart

1.  Open the Command Palette (Ctrl + Shift + P).
2.  Search and select ‘PostgreSQL: New Query’
3.  In the command palette, select ‘Create Connection Profile’. Follow the prompts to enter your Postgres instance’s hostname, database, username, and password.

You are now connected to your Postgres database. You can confirm this via the Status Bar (the ribbon at the bottom of the VS Code window). It will show your connected hostname, database, and user.

1.  You can type a query like ‘SELECT \* FROM pg_stat_activity’;
2.  Right-click, select ‘Execute Query’ and the results will show in a new window.

You can save the query results to JSON, csv or Excel.

### Offline Installation

The extension will download and install a required PostgreSQL Tools Service package during activation. For machines with no Internet access, you can still use the extension by choosing the `Install from VSIX...` option in the Extension view and installing a bundled release from our [Releases](https://github.com/Microsoft/vscode-postgresql/releases) page. Each operating system has a .vsix file with the required service included. Pick the file for your OS, download and install to get started. We recommend you choose a full release and ignore any alpha or beta releases as these are our daily builds used in testing.

### Support

Support for this extension is provided on our [GitHub Issue Tracker](https://github.com/Microsoft/vscode-postgresql/issues). You can submit a [bug report](https://github.com/Microsoft/vscode-postgresql/issues/new), a [feature suggestion](https://github.com/Microsoft/vscode-postgresql/issues/new) or participate in \[discussions\].

![](https://webdevhubcom.files.wordpress.com/2021/04/0b82b-0hmzlbjpk1aqwh_cf.gif)

---

### JS JSX Snippets

### Supported languages (file extensions)

-   JavaScript (.js)
-   TypeScript (.ts)
-   JavaScript React (.jsx)
-   TypeScript React (.tsx)

### Usage

After install this snippets add this inside your settings

    "editor.snippetSuggestions": "top",

### Snippets

### Import and export

TriggerContent`impimport name from 'module';imdimport { } from 'module';`

### Import package

TriggerContentDescription`imrimport React from 'react';`useful in test`iptimport PropTypes from 'prop-types';`

### Basic methods

TriggerContent`com`Comment Block`clgconsole.log()`

### React components

Only contain class component and function component.

TriggerContent`rcc`class component skeleton`rccp`class component skeleton with prop types after the class`rfc`function component skeleton`rfcp`function component with prop types skeleton`con`class default constructor with props`est`empty state object`cdmcomponentDidMount methodscushouldComponentUpdate methodcdupcomponentDidUpdate methodcwuncomponentWillUnmount methodgsbugetSnapshotBeforeUpdate methodgdsfpstatic getDerivedStateFromProps methodcdccomponentDidCatch methodsstthis.setState with object as parameterssfthis.setState with function as parameterpropsthis.propsstatethis.statebndbinds the this of method inside the constructoruseState`useState block`useEffect`useEffect block`useContext`useContext block

### Jest

TriggerContent`describe`describe Block`test`test Block`it`it Block

### PropTypes

TriggerContent`ptaPropTypes.array,ptarPropTypes.array.isRequired,ptoPropTypes.object.,ptorPropTypes.object.isRequired,ptbPropTypes.bool,ptbrPropTypes.bool.isRequired,ptfPropTypes.func,ptfrPropTypes.func.isRequired,ptnPropTypes.number,ptnrPropTypes.number.isRequired,ptsPropTypes.string,ptsrPropTypes.string.isRequired,ptndPropTypes.node,ptndrPropTypes.node.isRequired,ptelPropTypes.element,ptelrPropTypes.element.isRequired,ptiPropTypes.instanceOf(ClassName),ptirPropTypes.instanceOf(ClassName).isRequired,ptePropTypes.oneOf(['News', 'Photos']),pterPropTypes.oneOf(['News', 'Photos']).isRequired,ptetPropTypes.oneOfType([PropTypes.string, PropTypes.number]),ptetrPropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,ptaoPropTypes.arrayOf(PropTypes.number),ptaorPropTypes.arrayOf(PropTypes.number).isRequired,ptooPropTypes.objectOf(PropTypes.number),ptoorPropTypes.objectOf(PropTypes.number).isRequired,ptshPropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),ptshrPropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,`

![](https://webdevhubcom.files.wordpress.com/2021/04/fec80-0feudrdiwsq5fn9zc.gif)

---

NEXT

---

### Indent-Rainbow

### A simple extension to make indentation more readable

If you like this plugin, please consider a small donation:

![](https://webdevhubcom.files.wordpress.com/2021/04/912b7-0oyuoktkyg5xyl8ku.gif)

---

This extension colorizes the indentation in front of your text alternating four different colors on each step. Some may find it helpful in writing code for Nim or Python.

![](https://webdevhubcom.files.wordpress.com/2021/04/b0a4a-0jopzwr3l1nwouh3d.png)

Get it here: [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

It uses the current editor window tab size and can handle mixed tab + spaces but that is not recommended. In addition it visibly marks lines where the indentation is not a multiple of the tab size. This should help to find problems with indentation in some situations.

### Configuration

Although you can just use it as it is there is the possibility to configure some aspects of the extension:

    // For which languages indent-rainbow should be activated (if empty it means all).
      "indentRainbow.includedLanguages": [] // for example ["nim", "nims", "python"]

      // For which languages indent-rainbow should be deactivated (if empty it means none).
      "indentRainbow.excludedLanguages": ["plaintext"]

      // The delay in ms until the editor gets updated.
      "indentRainbow.updateDelay": 100 // 10 makes it super fast but may cost more resources

_Notice: Defining both_ `_includedLanguages_` _and_ `_excludedLanguages_` _does not make much sense. Use one of both!_

You can configure your own colors by adding and tampering with the following code:

    // Defining custom colors instead of default "Rainbow" for dark backgrounds.
      // (Sorry: Changing them needs an editor restart for now!)
      "indentRainbow.colors": [
        "rgba(255,255,64,0.07)",
        "rgba(127,255,127,0.07)",
        "rgba(255,127,255,0.07)",
        "rgba(79,236,236,0.07)"
      ]

      // The indent color if the number of spaces is not a multiple of "tabSize".
      "indentRainbow.errorColor": "rgba(128,32,32,0.6)"

      // The indent color when there is a mix between spaces and tabs.
      // To be disabled this coloring set this to an empty string.
      "indentRainbow.tabmixColor": "rgba(128,32,96,0.6)"

> _Notice:_ `_errorColor_` _was renamed from_ `_error_color_` _in earlier versions._

Skip error highlighting for RegEx patterns. For example, you may want to turn off the indent errors for JSDoc’s valid additional space (disabled by default), or comment lines beginning with `//`

    // Example of regular expression in JSON (note double backslash to escape characters)
      "indentRainbow.ignoreLinePatterns" : [
        "/[ \t]* [*]/g", // lines begining with <whitespace><space>*
        "/[ \t]+[/]{2}/g" // lines begininning with <whitespace>//
      ]

Skip error highlighting for some or all languages. For example, you may want to turn off the indent errors for `markdown` and `haskell` (which is the default)

    "indentRainbow.ignoreErrorLanguages" : [
        "markdown",
        "haskell"
      ]

If error color is disabled, indent colors will be rendered until the length of rendered characters (white spaces, tabs, and other ones) is divisible by tabsize. Turn on this option to render white spaces and tabs only.

    "indentRainbow.colorOnWhiteSpaceOnly": true // false is the default

Build with:

    npm install
    npm run vscode:prepublish

Running `npm run compile` makes the compiler recompile on file change.

![](https://webdevhubcom.files.wordpress.com/2021/04/d9758-0hge_ezptazcccgux.gif)

---

NEXT

---

### Path Intellisense

Visual Studio Code plugin that autocompletes filenames.

### Sponsors

![](https://webdevhubcom.files.wordpress.com/2021/04/ec634-0pcurf5a3ltjthek2.png)

Eliminate context switching and costly distractions. Create and merge PRs and perform code reviews from inside your IDE while using jump-to-definition, your favorite keybindings, and other IDE tools.  
[Learn more](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=pathintel&utm_medium=banner 'Try CodeStream')

### Installation

In the command palette (cmd-shift-p) select Install Extension and choose Path Intellisense.

To use Path Intellisense instead of the default autocompletion, the following configuration option must be added to your settings:

    { "typescript.suggest.paths": false }

### Usage

![](https://webdevhubcom.files.wordpress.com/2021/04/c6dbe-0tlylrlqtyv3zdein.gif)

### Node packages intellisense

Use [npm intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

### BaseUrl

Pathintellisense uses the ts.config.compilerOptions.baseUrl as a mapping. So no need to define it twice. There is no support for paths at the moment.

For example:

    {
        "baseUrl": "src",
    }

would allow to type:

    {
      import {} from "src/mymodule";
    }

### Settings

### File extension in import statements

Path Intellisense removes the file extension by default if the statement is a import statement. To enable file extensions set the following setting to true:

    {
        "path-intellisense.extensionOnImport": true,
    }

### Show hidden files

Per default, hidden files are not displayed. Set this to true to show hidden files.

    {
        "path-intellisense.showHiddenFiles": true,
    }

If set to false, PathIntellisense ignores the default “files.exclude” as well:

    {
        "files.exclude": {
            "**/*.map.js": true
        }
    }

### Auto slash when navigating to folder

Per default, the autocompletion does not add a slash after a directory.

    {
        "path-intellisense.autoSlashAfterDirectory": false,
    }

### Absolute paths

Per default, absolute paths are resolved within the current workspace root path. Set it to false to resolve absolute paths to the disk root path.

    {
        "path-intellisense.absolutePathToWorkspace": true,
    }

### Mappings

Define custom mappings which can be useful for using absolute paths or in combination with webpack resolve options.

    {
        "path-intellisense.mappings": {
            "/": "${workspaceFolder}",
            "lib": "${workspaceFolder}/lib",
            "global": "/Users/dummy/globalLibs"
        },
    }

Use ${workspaceFolder} when the path should be relative to the current root of the current project. V2.2.1 and lower used ${workspaceRoot}. Newer version support both placeholders.

![](https://webdevhubcom.files.wordpress.com/2021/04/e275d-0ehx7lejfahj37qh-.gif)

---

### turbo-js

Turbo-js for vscode is forked from [atom-turbo-javascript](https://github.com/extrabacon/atom-turbo-javascript)

### Declarations

#### `l=⇥` let assignment

    let ${1:name} = ${2:value}

#### `co⇥` const statement

    const ${1:name}

#### `co=⇥` const assignment

    const ${1:name} = ${2:value}

### Flow Control

#### `if⇥` if statement

    if (${1:condition}) {
      ${0}
    }

#### `ife⇥` else statement

    if (${1:condition}) {
      ${0}
    } else {

    }

#### `fo⇥` for of loop (ES6)

    for (let ${1:key} of ${2:source}) {
      ${0}
    }

#### `wl⇥` while loop

    while (${1:condition}) {
      ${0}
    }

#### `tc⇥` try/catch

    try {
     ${0}
    } catch (${1:err}) {

    }

### Functions

#### `fn⇥` named function

    function ${1:name}(${2:arguments}) {
      ${0}
    }

#### `iife⇥` immediately-invoked function expression (IIFE)

    (function (${1:arguments}) {
      ${0}
    })(${2});

#### `af⇥` arrow function (ES6)

    (${1:arguments}) => ${2:statement}

#### `afb⇥` arrow function with body (ES6)

    (${1:arguments}) => {
    \t${0}
    }

### Iterables

#### `fe⇥` forEach loop (chainable)

    ${1:iterable}.forEach((${2:item}) => {
      ${0}
    });

#### `reduce⇥` reduce function (chainable)

    ${1:iterable}.reduce((${2:previous}, ${3:current}) => {
      ${0}
    }${4:, initial});

#### `filter⇥` filter function (chainable)

    ${1:iterable}.filter((${2:item}) => {
      ${0}
    });

#### `find⇥` ES6 find function (chainable)

    ${1:iterable}.find((${2:item}) => {
      ${0}
    });

### Objects and classes

#### `cls⇥` class (ES6)

    class ${1:name} {
      constructor(${2:arguments}) {
        ${0}
      }
    }

#### `cex⇥` child class (ES6)

    class ${1:name} extends ${2:base} {
      constructor(${2:arguments}) {
        super(${2:arguments});
        ${0}
      }
    }

#### `med⇥` method (ES6 syntax)

    ${1:method}(${2:arguments}) {
      ${0}
    }

#### `get⇥` getter (ES6 syntax)

    get ${1:property}() {
      ${0}
    }

#### `set⇥` setter (ES6 syntax)

    set ${1:property}(${2:value}) {
      ${0}
    }

#### `proto⇥` prototype method (chainable)

    ${1:Class}.prototype.${2:methodName} = function (${3:arguments}) {
      ${0}
    };

#### `oa⇥` Object assign

    Object.assign(${1:dest}, ${2:source})

#### `ok⇥` Object.keys

    Object.keys(${1:obj})

### Promises

#### `rp⇥` return Promise (ES6)

    return new Promise((resolve, reject) => {
      ${0}
    });

### ES6 modules

#### `ex⇥` module export

    export ${1:member};

#### `exd⇥` module default export

    export default ${1:member};

#### `im⇥` module import

    import ${1:*} from '${2:module}';

#### `ima⇥` module import as

    import ${1:*} as ${2:name} from '${3:module}';

### Console

#### `cl⇥` console.log

    console.log(${0});

#### `ce⇥` console.error

    console.error(${0});

#### `cw⇥` console.warn

    console.warn(${0});

### Timers

#### `st⇥` setTimeout

    setTimeout(() => {
      ${0}
    }, ${1:delay});

#### `si⇥` setInterval

    setInterval(() => {
      ${0}
    }, ${1:delay});

#### `sim⇥` setImmediate

    setImmediate(() => {
      ${0}
    });

### Node.js specifics

#### `re⇥` require a module

    require('${1:module}');

#### `cre⇥` require a module

    const ${1:name} = require('${2:module}');

#### `me⇥` module.exports

    module.exports = ${1:name};

### Miscellaneous

#### `us⇥` use strict

    'use strict';

### vscode-standardjs-snippets

Optinionated set of JS snippets. Originally forked from <a href="https://github.com/gaboesquivel/atom-standardjs-snippets," class="uri">https://github.com/gaboesquivel/atom-standardjs-snippets,</a> but we’ve added couple more. Also these are not using special characters because vscode doesn’t accept them in the snippets.

### Standard JavaScript Snippets for Visual studio code

A collection of javascript and react snippets for faster JavaScript development in [Visual studio Code](https://code.visualstudio.com/).

This collection is complementary to [atom/language-javascript](https://github.com/atom/language-javascript). It’s based on [extrabacon/atom-turbo-javascript](https://github.com/extrabacon/atom-turbo-javascript).

### Code style

**Yes!, no semicolons:**

-   [Are Semicolons Necessary in JavaScript?](https://www.youtube.com/watch?v=gsfbh17Ax9I)
-   [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
-   [JavaScript Semicolon Insertion — Everything You Need to Know](http://inimino.org/~inimino/blog/javascript_semicolons)

### Snippets

Snippets are optimized to be short and easy to remember. Shortest are the ones you should be using most often. Note that these links work only on github, not on VSCode marketplace:

-   [declarations](https://trusting-aryabhata-e5438d.netlify.app/#declarations)
-   [flow control](https://trusting-aryabhata-e5438d.netlify.app/#flow-control)
-   [functions](https://trusting-aryabhata-e5438d.netlify.app/#functions)
-   [iterables](https://trusting-aryabhata-e5438d.netlify.app/#iterables)
-   [objects and classes](https://trusting-aryabhata-e5438d.netlify.app/#objects-and-classes)
-   [returning values](https://trusting-aryabhata-e5438d.netlify.app/#returning-values)
-   [types](https://trusting-aryabhata-e5438d.netlify.app/#types)
-   [promises](https://trusting-aryabhata-e5438d.netlify.app/#promises)
-   [ES6 modules](https://trusting-aryabhata-e5438d.netlify.app/#es6-modules)
-   [testing](https://trusting-aryabhata-e5438d.netlify.app/#testing)
-   [console](https://trusting-aryabhata-e5438d.netlify.app/#console)
-   [timers](https://trusting-aryabhata-e5438d.netlify.app/#timers)
-   [DOM](https://trusting-aryabhata-e5438d.netlify.app/#dom)
-   [Node.js](https://trusting-aryabhata-e5438d.netlify.app/#nodejs)
-   [miscellaneous](https://trusting-aryabhata-e5438d.netlify.app/#miscellaneous)

### Declarations

#### `v⇥` var statement

    var ${1:name}

#### `va⇥` var assignment

    var ${1:name} = ${2:value}

#### `l⇥` let statement

    let ${1:name}

#### `la⇥` let assignment awaited

    let ${1:name} = await ${2:value}

#### `ly⇥` let yielded assignment

    let ${1:name} = yield ${2:value}

#### `c⇥` const statement

    const ${1:name}

#### `cd⇥` const from destructuring

    const { ${1:name} } = ${2:value}

#### `ca⇥` const assignment awaited

    const ${1:name} = await ${2:value}

#### `cd⇥` const from destructuring awaited

    const { ${1:name} } = await ${2:value}

#### `cf⇥` const arrow function assignment

    const ${1:name} = (${2:arguments}) => {\n\treturn ${0}\n}

#### `cy⇥` const yielded assignment

    const ${1:name} = yield ${2:value}

### Flow Control

#### `i⇥` if statement

    if (${1:condition}) {
      ${0}
    }

#### `te⇥` ternary statement

    ${1:cond} ? ${2:true} : ${3: false}

#### `ta⇥` ternary statement

    const ${0} = ${1:cond} ? ${2:true} : ${3: false}

#### `el⇥` else statement

    else {
      ${0}
    }

#### `ife⇥` else statement

    if (${1:condition}) {
      ${0}
    } else {

    }

#### `ei⇥` else if statement

    else if (${1:condition}) {
      ${0}
    }

#### `fl⇥` for loop (ES6)

    for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length ${1:i} < ${2:len}; ${1:i}++) {
      ${0}
    }

#### `fi⇥` for in loop (ES6)

    for (let ${1:key} in ${2:source}) {
      if (${2:source}.hasOwnProperty(${1:key})) {
        ${0}
      }
    }

#### `fo⇥` for of loop (ES6)

    for (const ${1:key} of ${2:source}) {
      ${0}
    }

#### `wl⇥` while loop

    while (${1:condition}) {
      ${0}
    }

#### `wid⇥` while iteration decrementing

    let ${1:array}Index = ${1:array}.length
    while (${1:array}Index--) {
      ${0}
    }

#### `tc⇥` try/catch

    try {
     ${0}
    } catch (${1:err}) {

    }

#### `tf⇥` try/finally

    try {
     ${0}
    } finally {

    }

#### `tcf⇥` try/catch/finally

    try {
      ${0}
    } catch (${1:err}) {

    } finally {

    }

### Functions

#### `fan⇥` anonymous function

    function (${1:arguments}) {${0}}

#### `fn⇥` named function

    function ${1:name}(${2:arguments}) {
      ${0}
    }

#### `asf⇥` async function

    async function (${1:arguments}) {
      ${0}
    }

#### `aa⇥` async arrow function with

    async (${1:arguments}) => {
      ${0}
    }

#### `iife⇥` immediately-invoked function expression (IIFE)

    ;(function (${1:arguments}) {
      ${0}
    })(${2})

#### `aiife⇥` async immediately-invoked function expression

    ;(async (${1:arguments}) => {
      ${0}
    })(${2})

#### `fa⇥` function apply

    ${1:fn}.apply(${2:this}, ${3:arguments})

#### `fc⇥` function call

    ${1:fn}.call(${2:this}, ${3:arguments})

#### `fb⇥` function bind

    ${1:fn}.bind(${2:this}, ${3:arguments})

#### `af⇥` arrow function (ES6)

    (${1:arguments}) => ${2:statement}

#### `fd⇥` arrow function with destructuring

    ({${1:arguments}}) => ${2:statement}

#### `fdr⇥` arrow function with destructuring returning destructured

    ({${1:arguments}}) => ${1:arguments}

#### `f⇥` arrow function with body (ES6)

    (${1:arguments}) => {
      ${0}
    }

#### `fr⇥` arrow function with return (ES6)

    (${1:arguments}) => {
      return ${0}
    }

#### `gf⇥` generator function (ES6)

    function* (${1:arguments}) {
      ${0}
    }

#### `gfn⇥` named generator function (ES6)

    function* ${1:name}(${1:arguments}) {
      ${0}
    }

### Iterables

#### `fe⇥` forEach loop

    ${1:iterable}.forEach((${2:item}) => {
      ${0}
    })

#### `map⇥` map function

    ${1:iterable}.map((${2:item}) => {
      ${0}
    })

#### `reduce⇥` reduce function

    ${1:iterable}.reduce((${2:previous}, ${3:current}) => {
      ${0}
    }${4:, initial})

#### `filter⇥` filter function

    ${1:iterable}.filter((${2:item}) => {
      ${0}
    })

#### `find⇥` ES6 find function

    ${1:iterable}.find((${2:item}) => {
      ${0}
    })

#### `every⇥` every function

    ${1:iterable}.every((${2:item}) => {
      ${0}
    })

#### `some⇥` some function

    ${1:iterable}.some((${2:item}) => {
      ${0}
    })

### Objects and classes

#### `cs⇥` class (ES6)

    class ${1:name} {
      constructor(${2:arguments}) {
        ${0}
      }
    }

#### `csx⇥` extend a class (ES6)

    class ${1:name} extends ${2:base} {
      constructor(${2:arguments}) {
        super(${2:arguments})
        ${0}
      }
    }

#### `m⇥` method (ES6 syntax)

    ${1:method} (${2:arguments}) {
      ${0}
    }

#### `get⇥` getter (ES6 syntax)

    get ${1:property} () {
      ${0}
    }

#### `set⇥` setter (ES6 syntax)

    set ${1:property} (${2:value}) {
      ${0}
    }

#### `gs⇥` getter and setter (ES6 syntax)

    get ${1:property} () {
      ${0}
    }
    set ${1:property} (${2:value}) {

    }

#### `proto⇥` prototype method

    ${1:Class}.prototype.${2:methodName} = function (${3:arguments}) {
      ${0}
    }

#### `ok` Object.keys

    Object.keys(${1:obj})

#### `ov` Object.values

    Object.values(${1:obj})

#### `oe` Object.entries

    Object.entries(${1:obj})

#### `oc` Object.create

    Object.create(${1:obj})

#### `oa` Object.assign

    Object.assign(${1:dest}, ${2:source})

#### `og` Object.getOwnPropertyDescriptor

    Object.getOwnPropertyDescriptor(${1:dest}, '${2:prop}')

#### `od` Object.defineProperty

    Object.defineProperty(${1:dest}, '${2:prop}', {
      ${0}
    })

### Returning values

#### `r⇥` return

    return ${0}

#### `rt⇥` return this

    return this

#### `rn⇥` return null

    return null

#### `ro⇥` return new object

    return {
      ${0}
    }

#### `ra⇥` return new array

    return [
      ${0}
    ]

#### `rp⇥` return Promise (ES6)

    return new Promise((resolve, reject) => {
      ${0}
    })

#### `tof⇥` typeof comparison

    typeof ${1:source} === '${2:undefined}'

#### `tf⇥` this

    this.

#### `iof⇥` instanceof comparison

    ${1:source} instanceof ${2:Object}

#### `ia⇥` isArray

    Array.isArray(${1:source})

### Promises

#### `pa⇥` Promise.all

    Promise.all(${1:value})

#### `p⇥` new Promise (ES6)

    new Promise((resolve, reject) => {
      ${0}
    })

#### `pt⇥` Promise.then

    ${1:promise}.then((${2:value}) => {
      ${0}
    })

#### `pc⇥` Promise.catch

    ${1:promise}.catch(error => {
      ${0}
    })

### ES6 modules

#### `e⇥` module export

    export ${1:member}

#### `ed⇥` module default export

    export default ${1:member}

#### `edf⇥` module default export function

    export default function ${1:name} (${2:arguments}) {\n\t${0}\n}

#### `ec⇥` module export const

    export const ${1:member} = ${2:value}

#### `ef⇥` module export const

    export function ${1:member} (${2:arguments}) {\n\t${0}\n}

#### `im⇥` module import

    import ${1:*} from '${2:module}'

#### `ia⇥` module import as

    import ${1:*} as ${2:name} from '${3:module}'

#### `id⇥` module import destructuring

    import { $1 } from '${2:module}'

### BDD testing (Mocha, Jasmine, etc.)

#### `desc⇥` describe

    describe('${1:description}', function () {
      ${0}
    })

#### `it⇥` asynchronous “it”

    it('${1:description}', async () => {
      ${0}
    })

#### `itd⇥` “it” with callback

    it('${1:description}', (done) => {
      ${0}
    })

#### `its⇥` “it” synchronous

    it('${1:description}', () => {
      ${0}
    })

#### `bf⇥` before test suite

    before(function () {
      ${0}
    })

#### `bfe⇥` before each test

    beforeEach(function () {
      ${0}
    })

#### `aft⇥` after test suite

    after(function () {
      ${0}
    })

#### `afe⇥` after each test

    afterEach(function () {
      ${0}
    })

### Timers

#### `st⇥` setTimeout

    setTimeout(() => {
      ${0}
    }, ${1:delay})

#### `si⇥` setInterval

    setTimeout(() => {
      ${0}
    }, ${1:delay})

#### `sim⇥` setImmediate

    setImmediate(() => {
      ${0}
    })

### DOM

#### `ae⇥` addEventListener

    ${1:document}.addEventListener('${2:event}', ${3:ev} => {
      ${0}
    })

#### `rel⇥` removeEventListener

    ${1:document}.removeEventListener('${2:event}', ${3:listener})

#### `evc` dom event cancel default and propagation

    ev.preventDefault()
    ev.stopPropagation()
    return false

#### `gi⇥` getElementById

    ${1:document}.getElementById('${2:id}')

#### `gc⇥` getElementsByClassName

    Array.from(${1:document}.getElementsByClassName('${2:class}'))

#### `gt⇥` getElementsByTagName

    Array.from(${1:document}.getElementsByTagName('${2:tag}'))

#### `qs⇥` querySelector

    ${1:document}.querySelector('${2:selector}')

#### `qsa⇥` querySelectorAll

    Array.from(${1:document}.querySelectorAll('${2:selector}'))

#### `cdf⇥` createDocumentFragment

    ${1:document}.createDocumentFragment(${2:elem});

#### `cel⇥` createElement

    ${1:document}.createElement(${2:elem});

#### `heac⇥` appendChild

    ${1:document}.appendChild(${2:elem});

#### `herc⇥` removeChild

    ${1:document}.removeChild(${2:elem});

#### `hecla⇥` classList.add

    ${1:document}.classList.add('${2:class}');

#### `hect⇥` classList.toggle

    ${1:document}.classList.toggle('${2:class}');

#### `heclr⇥` classList.remove

    ${1:document}.classList.remove('${2:class}');

#### `hega⇥` getAttribute

    ${1:document}.getAttribute('${2:attr}');

#### `hesa⇥` setAttribute

    ${1:document}.setAttribute('${2:attr}', ${3:value});

#### `hera⇥` removeAttribute

    ${1:document}.removeAttribute('${2:attr}');

### Node.js

#### `cb⇥` Node.js style callback

    function (err, ${1:value}) {
      if (err) throw err
      t${0}
    }

#### `rq⇥` require a module

    require('${1:module}')

#### `cr⇥` require and assign a module

    const ${1:module} = require('${1:module}')

#### `em⇥` export member

    exports.${1:name} = ${2:value}

#### `me⇥` module.exports

    module.exports = ${1:name}

#### `on⇥` attach an event handler

    ${1:emitter}.on('${2:event}', (${3:arguments}) => {
      ${0}
    })

### Miscellaneous

#### `uss⇥` use strict

    'use strict'

#### `js⇥` JSON Stringify

    JSON.stringify($0)

#### `jp⇥` JSON Parse

    JSON.parse($0)

#### `a⇥` await

    await ${0}

#### `apa⇥` Promise.all

    await Promise.all(${1:value})

#### `apm⇥` Promise.all map

    await Promise.all(${1:array}.map((async ${2:value}) => {\n\t${0}\n}))

#### `ast⇥` Promise sleep

    await new Promise((r) => setTimeout(r, ${0}))

### Console

#### `cl⇥` console.log

    console.log(${0})

#### `cv⇥` console.log

    console.log('${0}:', ${0})

#### `ce⇥` console.error

    console.error(${0})

#### `cw⇥` console.warn

    console.warn(${0})

#### `cod⇥` console.dir

    console.dir(${0})

---

### React snippets

Are only enabled in `jsx` or `tsx` files. If you write your jsx in `js` files, you need to copy the `react.json` files manually and add it to your custom snippets.

### Why do we include them here?

If you’re not writing react, including them should not really bother you because they are not short as the regular JS snippets. Also IMHO react is the leading solution for FE apps deserves to be included by default, because any JS dev will have to write some react eventually over the course of his/her careeer. By having them in a single package we can easily make sure -there aren’t any conflicts in the trigger prefixes.

### Supported languages (file extensions)

-   JavaScript (.js)
-   TypeScript (.ts)
-   JavaScript React (.jsx)
-   TypeScript React (.tsx)

These were originally taken from <a href="https://github.com/TimonVS/vscode-react-standard" class="uri">https://github.com/TimonVS/vscode-react-standard</a> because the maintainer wasn’t able to publish a new version for months even when there was a considerable flaw in the released version. Below is a list of all available snippets and the triggers of each one.

TriggerContent`j`jsx element`dp`destructuring of props`ds`destructuring of props`jc`jsx self-closed element`jmjsx elements mapjmrjsx elements map with returnrfc`functional component. Prefer for 99% of new react component`rfce`functional component with emotion css import`rcc`class component skeleton`rccp`class component skeleton with prop types after the class`rcjc`class component skeleton without import and default export lines`rcfc`class component skeleton that contains all the lifecycle methods`rfcp`stateless component with prop types skeleton`rpt`empty propTypes declaration`con`class default constructor with props`conc`class default constructor with props and context`est`empty state object`cwmcomponentWillMount methodcdmcomponentDidMount methodcwrcomponentWillReceiveProps methodcgdcomponentGetDerivedStateFromProps methodscushouldComponentUpdate methodcwupcomponentWillUpdate methodcdupcomponentDidUpdate methodcwuncomponentWillUnmount methodrenrender methodsstthis.setState with object as parameterssfthis.setState with function as parametertpthis.propststhis.stateususeStateueuseEffectuecuseEffect` with a cleanup function`uruseRefcccreateContextucuseContextumeuseMemo`——-—————————————————————-`uquseQuery` to be used with graphql-codegen`uqcuseQuery` that loads up data for current component, to be used with graphql-codegen`umuseMutation` to be used with graphql-codegen`uqguseQuery with raw gqlumguseMutation with raw gql`

There are also snippets to be triggered with a text selection(trigger via insert snippet command):

    jsx element wrap selection

The following table lists all the snippets that can be used for prop types. Every snippet regarding prop types begins with `pt` so it’s easy to group it all together and explore all the available options. On top of that each prop type snippets has one equivalent when we need to declare that this property is also required. For example `pta` creates the `PropTypes.array` and `ptar` creates the `PropTypes.array.isRequired`

TriggerContent`ptaPropTypes.array,ptarPropTypes.array.isRequired,ptbPropTypes.bool,ptbrPropTypes.bool.isRequired,ptfPropTypes.func,ptfrPropTypes.func.isRequired,ptnPropTypes.number,ptnrPropTypes.number.isRequired,ptoPropTypes.object.,ptorPropTypes.object.isRequired,ptsPropTypes.string,ptsrPropTypes.string.isRequired,ptndPropTypes.node,ptndrPropTypes.node.isRequired,ptelPropTypes.element,ptelrPropTypes.element.isRequired,ptiPropTypes.instanceOf(ClassName),ptirPropTypes.instanceOf(ClassName).isRequired,ptePropTypes.oneOf(['News', 'Photos']),pterPropTypes.oneOf(['News', 'Photos']).isRequired,ptetPropTypes.oneOfType([PropTypes.string, PropTypes.number]),ptetrPropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,ptaoPropTypes.arrayOf(PropTypes.number),ptaorPropTypes.arrayOf(PropTypes.number).isRequired,ptooPropTypes.objectOf(PropTypes.number),ptoorPropTypes.objectOf(PropTypes.number).isRequired,ptshPropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),ptshrPropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,`

![](https://webdevhubcom.files.wordpress.com/2021/04/c389e-08xivi5tevdat7lmo.gif)

---

### C/C++ for Visual Studio Code

#### [Repository](https://github.com/microsoft/vscode-cpptools) | [Issues](https://github.com/microsoft/vscode-cpptools/issues) | [Documentation](https://code.visualstudio.com/docs/languages/cpp) | [Code Samples](https://github.com/microsoft/vscode-cpptools/tree/master/Code%20Samples) | [Offline Installers](https://github.com/microsoft/vscode-cpptools/releases)

The C/C++ extension adds language support for C/C++ to Visual Studio Code, including features such as IntelliSense and debugging.

### Overview and tutorials

-   [C/C++ extension overview](https://code.visualstudio.com/docs/languages/cpp)

C/C++ extension tutorials per compiler and platform \* [Microsoft C++ compiler (MSVC) on Windows](https://code.visualstudio.com/docs/cpp/config-msvc) \* [GCC and Mingw-w64 on Windows](https://code.visualstudio.com/docs/cpp/config-mingw) \* [GCC on Windows Subsystem for Linux (WSL)](https://code.visualstudio.com/docs/cpp/config-wsl) \* [GCC on Linux](https://code.visualstudio.com/docs/cpp/config-linux) \* [Clang on macOS](https://code.visualstudio.com/docs/cpp/config-clang-mac)

### Quick links

-   [Editing features (IntelliSense)](https://code.visualstudio.com/docs/cpp/cpp-ide)
-   [IntelliSense configuration](https://code.visualstudio.com/docs/cpp/customize-default-settings-cpp)
-   [Enhanced colorization](https://code.visualstudio.com/docs/cpp/colorization-cpp)
-   [Debugging](https://code.visualstudio.com/docs/cpp/cpp-debug)
-   [Debug configuration](https://code.visualstudio.com/docs/cpp/launch-json-reference)
-   [Enable logging for IntelliSense or debugging](https://code.visualstudio.com/docs/cpp/enable-logging-cpp)

### Questions and feedback

[**FAQs**](https://code.visualstudio.com/docs/cpp/faq-cpp)  
Check out the FAQs before filing a question.

[**Provide feedback**](https://github.com/microsoft/vscode-cpptools/issues/new/choose)  
File questions, issues, or feature requests for the extension.

[**Known issues**](https://github.com/Microsoft/vscode-cpptools/issues)  
If someone has already filed an issue that encompasses your feedback, please leave a ![👍](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f44d.svg) or ![👎](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f44e.svg) reaction on the issue to upvote or downvote it to help us prioritize the issue.

[**Quick survey**](https://www.research.net/r/VBVV6C6)  
Let us know what you think of the extension by taking the quick survey.

### Offline installation

The extension has platform-specific binary dependencies, therefore installation via the Marketplace requires an Internet connection in order to download additional dependencies. If you are working on a computer that does not have access to the Internet or is behind a strict firewall, you may need to use our platform-specific packages and install them by running VS Code’s `"Install from VSIX..."` command. These “offline’ packages are available at: <a href="https://github.com/Microsoft/vscode-cpptools/releases." class="uri">https://github.com/Microsoft/vscode-cpptools/releases.</a>

PackagePlatform`cpptools-linux.vsix`Linux 64-bit`cpptools-linux-armhf.vsix`Linux ARM 32-bit`cpptools-linux-aarch64.vsix`Linux ARM 64-bit`cpptools-osx.vsix`macOS`cpptools-win32.vsix`Windows 64-bit & 32-bit`cpptools-win-arm64.vsix`Windows ARM64`cpptools-linux32.vsix`Linux 32-bit ([available up to version 0.27.0](https://github.com/microsoft/vscode-cpptools/issues/5346))

### Contribution

Contributions are always welcome. Please see our [contributing guide](https://github.com/Microsoft/vscode-cpptools/blob/master/CONTRIBUTING.md) for more details.

### Microsoft Open Source Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact opencode@microsoft.com with any additional questions or comments.

### Data and telemetry

This extension collects usage data and sends it to Microsoft to help improve our products and services. Collection of telemetry is controlled via the same setting provided by Visual Studio Code: `"telemetry.enableTelemetry"`. Read our [privacy statement](https://privacy.microsoft.com/en-us/privacystatement) to learn more.

![](https://webdevhubcom.files.wordpress.com/2021/04/3100b-0kt-50guahwymrk3d.gif)

---

NEXT

---

### Visual Studio IntelliCode

The [Visual Studio IntelliCode](https://go.microsoft.com/fwlink/?linkid=872679) extension provides AI-assisted development features for Python, TypeScript/JavaScript and Java developers in Visual Studio Code, with insights based on understanding your code context combined with machine learning.

You’ll need Visual Studio Code October 2018 Release 1.29.1 or later to use this extension. For each supported language, please refer to the “Getting Started” section below to understand any other pre-requisites you’ll need to install and configure to get IntelliCode completions.

For C\#, C++, TypeScript/JavaScript, and XAML support in the Visual Studio IDE, check out the [IntelliCode extension on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.VSIntelliCode).

### About IntelliCode

This extension provides AI-assisted IntelliSense by showing recommended completion items for your code context at the top of the completions list. The example below shows this in action for Python code.

![](https://cdn-images-1.medium.com/max/800/0*CQQaJIXL4J2cvEzF)

When it comes to overloads, rather than taking the time to cycle through the alphabetical list of member, IntelliCode presents the most relevant one first. In the example shown above, you can see that the predicted APIs that **IntelliCode** elevates appear in a new section of the list at the top with members prefixed by a star icon. Similarly, a member’s signature or overloads shown in the IntelliSense tool-tip will have additional text marked by a small star icon and wording to explain the recommended status. This visual experience for members in the list and the tool-tip that **IntelliCode** provides is not intended as final — it is intended to provide you with a visual differentiation for feedback purposes only.

Contextual recommendations are based on practices developed in thousands of high quality, open-source projects on GitHub each with high star ratings. This means you get context-aware code completions, tool-tips, and signature help rather than alphabetical or most-recently-used lists. By predicting the most likely member in the list based on your coding context, AI-assisted IntelliSense stops you having to hunt through the list yourself.

### Getting Started

Install the Visual Studio IntelliCode extension by clicking the install link on this page, or install from the Extensions tab in Visual Studio Code. Then follow the language-specific instructions below.

### For TypeScript/JavaScript users:

That’s it — just open a TypeScript or JavaScript file, and start editing.

### For Python users:

1.  Set up the Python extension by following the steps in the [Python tutorial](https://code.visualstudio.com/docs/python/python-tutorial#_prerequisites)
2.  Start editing Python files, you should get a prompt to enable the Microsoft Python Language Server, which itself is a preview release.
3.  Reload Visual Studio Code after enabling the language server
4.  After the language server finishes initializing, you should now see recommended completions

### For Java users:

1.  Set up the Java extension for Visual Studio Code by following the steps in the [Java Tutorial](https://code.visualstudio.com/docs/java/java-tutorial)
2.  Make sure that you have a minimum of Java 8 Update 151 installed
3.  Reload Visual Studio Code after enabling the Java extension
4.  After the Java language server finishes initializing, you should now see recommended completions

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

#### A condensed summary of the entire “JavaScript the Good Parts” book

I hope these notes help shed some light and save some time… (this is the most I could condense an entire book)

![](https://webdevhubcom.files.wordpress.com/2021/04/7cdec-15oamo6qxv9dztouc5oe-uq.png)

### Chapter 1 — Good Parts

> _Most programming languages contain good parts and bad parts. I discovered that I could be a better programmer by using only the good parts and avoiding the bad parts. After all, how can you build something good out of bad parts?_

The best parts of Javascript include:

-   functions
-   loose typing (variables are declared as variables, without a type)
-   dynamic objects
-   object literal notation (where you can create an object already with a list of key/value pairs inside curly braces)

The worst parts include global variables — there is a common _global object_ namespace where they’re all lumped together and they’re essential to the language.

Javascript has a _class free_ object makeup, relying instead on objects inheriting properties directly from other objects — this is prototypal inheritance.

### Chapter 2 — Grammar

Always use // for comments, even multi-line ones to avoid having to escape `/*` characters.

### Numbers

-   There is a single, 64-bit floating point number type.
-   `NaN` (Not-a-Number) is not equal to any value (including itself) and is essentially an illegal number value, but _typeOf(NaN)===number is true_
-   Use `isNaN(number)` to check for NaNs

Number methods are discussed in [Chapter 8](https://github.com/Lambda-April/Unsorted-Notes/blob/main).

### Strings

-   16-bit character set and don’t have character types.
-   Backslashes (\\) are used for escaping characters that could cause problems in strings.
-   Strings are immutable.

Single quotes are often used to define a String in JavaScript, but if a person’s name has an apostrophe (and the developer does not know the difference between an apostrophe and single quote) it is useful to “escape” the apostrophe character:

var name = ‘Patrick O\\’Brian’; // using a backslash in front of the apostrophe  
console.log(‘name:’, name); // name: Patrick O’Brian

further reading: <a href="https://webdesignledger.com/common-typography-mistakes-apostrophes-versus-quotation-marks" class="uri">https://webdesignledger.com/common-typography-mistakes-apostrophes-versus-quotation-marks</a>

![](https://webdevhubcom.files.wordpress.com/2021/04/f1e58-0flaxqcb0qgspdam_.png)

String methods are discussed in [Chapter 8](https://github.com/Lambda-April/Unsorted-Notes/blob/main).

### Statements

-   _Inside_ a function, the var statement creates variables local to that function
-   _switch, while, for_ and _do_ statements can have an optional label which can be used with `break` and `continue` to provide more precise [control over exactly which statement to break or continue](http://www.tutorialspoint.com/cgi-bin/practice.cgi?file=javascript_19). Format: `labelname: statement` and then `continue labelname;`
-   ES2015 presents two new keywords for declaring variables, _let_ and _const_. Whereas the _var_ keyword is function scoped (the variables are local to the function), _let_ and _const_ are both block scoped, which means they are local to any statement with {}.
-   _falsy_ values:
-   false
-   null
-   undefined
-   Empty string ‘ ‘
-   The number 0
-   The number NaN
-   All other values are _truthy_ including all objects & the string ‘false’
-   If no matches are found in `case` statements, the optional default statement is executed, otherwise the matching case statement is carried out
-   When using a _for in_ loop, usually a good idea to use `hasOwnProperty(variable)` to make sure the property belongs to the object you want and is not instead an inherited property from the prototype chain:

for (myvariable in object) {  
if (object.hasOwnProperty(myvariable)) {  
//….statements to be executed  
}  
}

-   A _do while_ statement is always executed at least once as the while condition is only checked after the first iteration of the loop
-   `catch` clause in a _try_ statement must create a new variable that will catch the exception object
-   Scope of `throw` statement is the `try` block it’s in, or the `try` of the function it’s in
-   If there is no `return` statement, `return===undefined`
-   `break` exits the statement and `continue` forces a new iteration of the loop, both with the optional _label_ mentioned above

### Expressions

-   For `expression ? expression2 : expression3`, if expression is _truthy_, execute expresion2; if it’s _falsy_, execute expression3
-   _Invocation_ is `(expression1, expression2, etc)`
-   _refinement_ is either `.name` or `[expression]` as used in an array

### Literals

-   _Names_ or _strings_ used for specifying new objects ([object literals](https://github.com/Lambda-April/Unsorted-Notes/blob/main)) or arrays ([array literals](https://github.com/Lambda-April/Unsorted-Notes/blob/main))
-   Properties of the object are expressions and must be known at compile time

### Functions

-   A function literal defines a function value
-   More details in [Chapter 4](https://github.com/Lambda-April/Unsorted-Notes/blob/main)

### Chapter 3 — Objects

Javascript simple types:

-   numbers _(has object-like methods but they are immutable)_
-   strings _(has object-like methods but they are immutable)_
-   booleans _(has object-like methods but they are immutable)_
-   null
-   undefined

All other values are _objects_ including arrays and functions.

Objects are class free, can contain other objects and can inherit properties from their prototypes (which can _reduce object initialisation time and memory consumption_).

### Object Literals

-   An object literal is _zero or more comma-separated name/value pairs surrounded by curly braces_ {}

var empty_object = {};

var today = {  
day: “Wednesday”,  
month: “April”,  
year: 2014,

    weather: { //objects can contain nested objects like this one
        morning: "sunny",
        afternoon: "cloudy"
    }

}

### Retrieval

-   Can be done with either dot notation `today.weather.morning` or with square brackets `today['month']`
-   Or operand (||) can be used to fill in default values for nonexistent data to prevent and _undefined_ error: `var weath = today.weather.evening || "unknown"`

### Update

-   Assigning a property value to an object overwrites any existing property values with that property name

### Reference

-   Objects refer to each other, they don’t hold duplicate copies of data

### Prototype

-   Every object has a prototype object from which it inherits properties
-   _Object.prototype_ comes standard with Javascript and is almost like a ‘root parent’

![](https://cdn-images-1.medium.com/max/800/0*1MKtZt0a5gREie59)

-   The `Object.create` method is now available in ES5 (but the method is in the book if required for older versions)
-   If an object does not have a property you ask it for, it will keep looking up the prototype chain until it finds it
-   If the property _does note exist_ anywhere in the chain, it will return _undefined_
-   A new property is _immediately visible_ to all of the objects below it in the chain once created

More details in [Chapter 6](https://github.com/Lambda-April/Unsorted-Notes/blob/main)

### Reflection

-   Determining what properties an object has
-   Using `typeof` includes all properties in the prototype chain including functions
-   To avoid inherited properties, use `hasOwnProperty(type);` which returns _true_ if that property exists only in that object itself (not the chain)

today.hasOwnProperty(‘number’) //will return true today.hasOwnProperty(‘constructor’) //will return false

### Enumeration

-   Best way to enumerate all the properties you want is a for loop:

let i;  
var properties = \[ ‘day’, ‘month’, ‘year’ \];  
for (i = 0; i &lt; properties.length; i++) {  
document.writeIn(properties\[i\] + ‘:’ + today\[properties\[i\]\]);  
}

-   This ensures you get the properties you want (i.e. not up the prototype chain) and in the order you want, as opposed to a _for in_ loop which achieves neither of these

### Delete

-   Removes property from object, but also reveals property from further up the prototype chain if it exists
-   Format: `delete today.month`

### Global Abatement

-   One way to mitigate the risks of global variables is to _create a single global variable_ which then contains your whole application

let MYAPP = {}

MYAPP.today = {  
day: “Wednesday”,  
month: “April”,  
year: 2014,

    weather: { //objects can contain nested objects like this one
        morning: "sunny",
        afternoon: "cloudy"
    }

}  
//Making sure all other variables (like today) are contained within this one global variable (MYAPP) means none of them have global scope and therefore the risk of naming conflicts, etc in your application is reduced

-   [Closures](https://github.com/Lambda-April/Unsorted-Notes/blob/main) are also a way of mitigating the risks of global variables
-   Note: Most [Javascript MVCs](http://coding.smashingmagazine.com/2012/07/27/journey-through-the-javascript-mvc-jungle/) these days (2014) will take care of wrapping your app for you

### Chapter 4 — Functions

> _The best thing about JavaScript is its implementation of functions._

### Function Objects

-   Functions are objects linked to _function.prototype_ (which is linked to _Object.prototype_).
-   As well as usual object behaviour, they can be invoked.

### Function Literal

-   A function literal has 4 parts:
-   The (reserved) word `function` itself
-   An _optional_ name (un-named functions are considered _anonymous_ functions)
-   Comma-seperated parameters of the function, in parentheses — `(parameters)`
-   Set of statements in curly brackets to be carried out when the function is invoked — `{statements}`

//Format of a function  
function name (parameterA, parameterB){  
statements;  
}

-   Functions can be nested within functions and the inner function can access all the parameters of the outer function as well as its own

### Invocation

-   Stops the current function from running and tells the function you have invoked both to start and to use the arguments (values in parentheses) you have passed it in the invocation `function (parameters)`
-   If arguments &gt; number of arguments expected, the extra values will be ignored
-   If arguments &lt; number of arguments expected, the function will assume undefined in place of the missing arguments
-   No error is thrown
-   Note: The difference between an _argument_ and a _parameter_ is that a parameter is usually what is used in the function literal, when you’re setting up the function (almost like the placeholder for the actual values that the function will use when it is active) and an argument is usually the value passed to a function at the time it is invoked
-   Parameters `this` and `arguments` are also passed to the function when it is invoked, but their value depends on how the function is invoked

#### Method Invocation Pattern

-   When a function is stored as the property of the object (invoked with a dot . expression) it is called on and is called a _method_

myObject.incrementFunction();

-   The method is bound to the object and therefore can use `this` to retrieve or update values from the object
-   These methods are highly reusable
-   Because their _object context_ comes from `this` they are considered _public methods_

#### Function Invocation Pattern

-   When a function is _not_ the property of an object, it is invoked as a _function_

var sum = add(3, 4);

-   These functions are bound to the global object (_a “mistake in the design of the language” according to Douglas Crockford)_ and consequently so is `this`[even in inner functions](https://github.com/Lambda-April/Unsorted-Notes/blob/main)
-   Invoking `this` within an inner function will therefore refer to its _own_ `this` and not the one in global scope

Workaround: Artificially create a new `this`:

myObject.double = function() {  
//in the book, the var here is called \`that\` but name changed for clarity  
var globalScopeThis = this; //workaround

    var innerFunc = function() {
        globalScopeThis.value = add(globalScopeThis.value, globalScopeThis.value);
    };

    innerFunc(); //invoke innerFunc as function

};

myObject.double();  
console.log(myObject.value);

#### Constructor Invocation Pattern

-   When a function is created with `new`, that function contains a link to the function’s prototype
-   This means that methods that were created for the prototype function are also available to the function created using `new`

//create a function Quo that takes a string - Quo will be our prototype function as we will see  
var Quo = function (string){  
this.status = string;  
}

//Now create a get_status method for Quo - this will be a public method  
Quo.prototype.get_status = function () {  
return this.status;  
}

//create a new instance of Quo using the prefix NEW  
var myQuo = new Quo(“happy”);

//because of the use of the new prefix, myQuo is an instance of Quo which means it can access the public method get_status from it’s prototype  
document.writeIn(myQuo.get_status()); //returns ‘happy’

-   This style of constructor pattern is not recommended, there will be better examples in [Chapter 5](https://github.com/Lambda-April/Unsorted-Notes/blob/main) — this is noted again in [Appendix B](https://github.com/Lambda-April/Unsorted-Notes/blob/main)
-   The first letter of a constructor function (in this case Quo) must _always_ be capitalized

#### Apply Invocation Pattern

-   The `apply` method lets you choose the value to be bound to `this`
-   It also takes the parameters for a function in an array
-   Format: `function.apply(valueForThis, arrayOfParamentersForFunction);`

var array = \[5, 2\] //will be the parameters for our function  
var sum = add.apply(null, array); //value of ‘this’ is null and value of sum is 7 as the ‘apply’ method passes 5 and 2 to the ‘add’ method

### Arguments

-   Another default parameter of functions is the `arguments` array which contains all the arguments that were supplied when the function was invoked
-   This means you don’t have to know the exact number of arguments when you build a function because you can loop through all the arguments provided at invocation with the use of the default `arguments` array

//inside the function for (i = 0; i &lt; arguments.length; i++) { dosomething; //e.g. sum +=arguments\[i\] }

-   `arguments` lacks all the array methods except .length because of a bug

### Return

-   When a function gets to a `return` statement, it returns immediately without carrying out the remaining statements in the function
-   A function always returns a `value` or if unspecified, it returns `undefined`
-   “If the function was invoked with the `new` prefix (used when creating a new object so it must return an object) and the `return` value is not an object, then `this` (the new object) is returned instead.”

### Exceptions

-   A `throw` statement interrupts the execution of the code is used to handle expected exceptions like an incorrect type of argument (e.g. a string where a number is expected)
-   Each `throw` statement should have an exception object with a `name` holding the type of exception and a `message` with an explanation of it + any other properties you like

//Thinking through what exceptions could happen in an add function, the main function contains the throw statement with the exception object  
let add = function (a,b) {  
if (typeof a !== ‘number’ || typeof b !== ‘number’){  
throw {  
name: ‘TypeError’;  
message: ‘The add function requires numbers’;  
}  
}  
return a + b;  
}

-   When you write a function to use _add()_, you include a `try` block where the exception object from the `throw` statement in _add()_ will pass control to a single catch clause for all exceptions

//When you use the function later on, add a try block with a catch clause to catch the exception object  
var try_it = function () {  
try{  
add(“seven”); //will throw an exception as it is not a number  
}  
catch (e) {  
document.writeIn(e.name + ‘:’ + e.message);  
}  
}

try_it(); //you could rewrite this function so the argument is passed in here where it is invoked

### Augmenting Types

-   Adding a method to the prototype of an object `Object.prototype` (or function, array, string, number, regular expression or boolean), you make it available to all the instances of that object so you don’t have to use the `prototype` property again
-   By augmenting the _basic types_ (essentially the root prototypes), we can improve Javascript overall
-   For example, adding a method named _trim_ to remove spaces from the end of strings, available to all String instances in your code:

String.method (‘trim’, function () { return this.replace(/ˆ\\s+|\\s+$/g, ‘’); //uses regular expression });

-   To be on the safe side, create a method conditionally, only when you know the method is missing

//Makes a method available to all functions, ONLY when it definitely does not already exist

Function.prototype.method (methodName, func) {  
if (!this.prototype\[methodName\]){  
this.prototype\[methodName\] = func;  
return this;  
}  
};

-   Remember that _for in_ statements don’t work well with prototypes

### Recursion

-   Used when a task can be divided into simple sub-problems and a function can _call itself repeatedly_ to solve them
-   Takes the format:

var variable = function functionName (parameters){  
//wrap the statements to be executed and the recursive call in a loop statement so it doesn’t recurse forever  
//statements to be executed in the function;  
functionName(arguments);  
};

functionName (initialArguments); //initial call to the function

-   Javascript does not have _tail recursion optimization_ and therefore does not optimize recursive functions — this also means they sometimes fail if they “recurse very deeply”; On a side note, _tail call optimization_ is now supported in [ECMA-262](https://www.ecma-international.org/ecma-262/7.0/index.html#sec-tail-position-calls)

### Scope

-   A _block_ is a set of statements contained in curly brackets {}
-   Javascript does not have block scope but does have function scope
-   All variables declared _anywhere_ within a function are available everywhere in that function — i.e. and inner function will have access to the variables of the outer function in which it is defined
-   A variable can be _overwritten_ with a new value in an inner function and that new value’s scope will be just the body of the inner function — as soon as you’re back out to the outer function, the value of that variable will revert to what it was before the inner function began its execution
-   All variable should be declared at the top of the function body

### Closure

-   Inner functions have access to the actual parameters of the outer functions (not copies)
-   If an object is created as a result of a function and assigned to myObject, myObject continues to share access to the variables in the functions that created it (actual variables, not copies)
-   It has access to *the context in which it was created* — this is _closure_
-   This includes later on, even if _the outer function has completed its execution and returned_, when the inner function is called, it will still have access to all the variables it had access to at the time it was defined (i.e. the variables that were _in context_ when the inner function was defined)

### Callbacks

-   A _callback function_ is a function passed to another function as a parameter and executed in this other function
-   When making a request to a server, use an _asynchronous request_ as asynchronous functions return immediately, therefore freeing up the client
-   In this example, we pass the callback function to the asynchronous request as a parameter so the callback function will only be called when a response is available

request = prepare_the_request();  
send_request_asynchronously(request, function(response){  
//function being passed in as a parameter  
display(response);  
}  
);

### Module

-   A module is a function or object whose contents can be used, but its state and implementation are hidden
-   It is essentially using function scope and closures keep the variables and functions contained within as private as well as binding them to a non-global object — whilst still being accessible
-   Using the _module pattern_ is widely used and good practice as it promotes information hiding (avoiding naming conflicts, etc) and encapsulation
-   This is a [good article on how to use the module pattern](http://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/) with examples
-   It can also be used to produce secure objects (see [durable objects](https://github.com/Lambda-April/Unsorted-Notes/blob/main) below)
-   Methods contained in the object do not make use of `this` or `that` so it becomes impossible to change them from outside of the object except in ways explicitly permitted by the methods (like passing them a parameter)
-   The methods can be _replaced_ but the secrets of how these methods function (like how they generate a number for example) can’t be revealed because they are not tied to a global object

var Serial_maker = function() {  
//all variables defined in this object are now fixed and hidden from anything outside this function  
//see page 42 of book for full example  
};  
//calls to methods passing them parameters are made here

-   Note: Whilst Javascript variables are usually lowercase, there is some convention around capitalizing the first letter of a Module

### Cascade

-   Some methods return nothing, albeit `undefined`
-   If we alter these methods to return `this` instead of `undefined`, they return the object which can then be passed to the next method, e.g `getElement(myBox).move(350,150)` gets the element and then passes is to the _move_ function for the next action
-   This enables _cascades_, where you call many methods on the same object in sequence because the object is passed from one method to the next (usually separated by `.` as above)
-   Cascades also stop you from trying to do too much in one method and makes your code more descriptive

### Curry

-   A `curry` method allows you to _partially evaluate_ an existing function
-   An example is below where the function _expects two arguments_, but it is first invoked with only one (in this case using `curry` as in `add.curry(10);`) and then later passed the second argument
-   It can also be explained as transforming a function that takes multiple arguments (`add(a,b)`) into a chain of functions that take a single argument each (`addA = add(A); addA(B);` where the two functions are now `add()` & `addA()`)

//set up a simple function that we will customise with curry  
var add = function (a,b){  
return a + b;  
}

var addTen = add.curry(10); //passes 10 as the first argument to the add() function  
addTen(20); //The use of the curry method in addTen means addTen === add(10, 20);

-   Javascript does not have a `curry` method natively but this can be added to the `Function.protoype`:

Function.method(‘curry’, function() {  
var slice = Array.prototype.slice,  
args = slice.apply(arguments),  
that = this;  
return function() {  
return that.apply(null, args.concat(slice.apply(arguments)));  
}  
});

### Memoization

-   Storing the results of previous operations in objects (such as arrays) allows them to be reused without having to keep recalculating the value — this optimization is called _memoization_
-   Adding an object to store the results _memoizes the function_
-   Particularly useful when a function is recursive and uses the results of its previous iteration in the current iteration
-   A _memoizer_ function can be created to help memoize future functions:

var meoizer = function(memo, fundamental) {  
var shell = function(n) {  
var result = memo\[n\];  
if (typeof result !== ‘number’) {  
result = fundamental(shell, n);  
memo\[n\] = result;  
}  
return result;  
}  
return shell;  
}

### Chapter 5 — Inheritance

> _Javascript is a prototypal language, which means that objects inherit directly from other objects_

Main benefit of inheritance is code reuse — you only have to specify differences.

Javascript can _mimic_ classical inheritance but has a much richer set of code reuse patterns

-   This chapter looks at the more straightforward patterns but it is always best to keep it simple

### Pseudoclassical

-   The pseudoclassical code reuse pattern essentially has constructor functions (functions invoked using the `new` prefix) work like classes to mimic the classical structure
-   All properties are public
-   If you forget to use the `new` prefix, `this` is not bound to the new object – it is instead bound to the global object and you’ll be unwittingly altering these instead!
-   There is no need to use it, there are better code reuse patterns in JavaScript

### Object Specifiers

Rather than: `var myObject = maker (f, l, m, c, s)` which has too many parameters to remember in the right order, use an _object specifier_:

var myObject = maker ({ //note curly braces  
first: f,  
last: l,  
state: s,  
city: c  
}  
;)

to contain them. They can now be listed in any order

Also useful to pass object specifiers to JSON ([see Appendix E notes](https://github.com/Lambda-April/Unsorted-Notes/blob/main))

### Prototypal

-   Zero classes, one object inherits from another
-   Create an object literal of a useful object and then make an instance of it using the format `var myObject = Object.create(originalObjectName)`
-   When you then customise the new object (adding properties or methods through the dot notation for example), this is _differential inheritance_, where you specify the differences from the original object

### Functional

-   All properties of an object are visible (Javascript has no classes so there is no such thing as a ‘private variable’ which can only be seen within a class as per other languages)
-   When you use a _function_ to create your original object and the same with the object instances, you’re essentially utilising Javascript functional scope to create private properties and methods
-   The below is an example of how you would create an original object, the `name` and `saying` properties are now completely private and only accessible to the `get_name` and `says` method

var mammal = function (spec) {  
var that = {}; //that is a new object which is basically a container of ‘secrets’ shared to the rest of the inheritance chain

    that.get\_name = function () {
        return spec.name;
    };

    that.says = function () {
        return spec.saying || '';  //returns an empty string if no 'saying' argument is passed through the spec object when calling mammal
    };
    return that;     //returns the object that contains the now private properties and methods (under functional scope)

}

var myMammal = mammal({name: ‘Herb’});

Creating an object ‘cat’ can now inherit from the `mammal` constructor and only pay attention to the differences between it and `mammal`:

var cat = function (spec) {  
spec.saying = spec.saying || ‘meow’; //if spec.saying doesn’t already exists, make it ‘meow’  
var that = mammal(spec); //here the object ‘container of secrets’ is set up inheriting from mammal already

    //functions and property augmentations happen here

    return that;      //as above

}

-   Requires less effort and gives better encapsulation and information hiding than the pseudoclassical pattern, as well as access to super methods (see page 54 of book for super method example)
-   An object created using the functional pattern _and_ making no use of `this` or `that` is a _durable object_ and cannot be compromised by attackers
-   Briefly also discussed in [Module](https://github.com/Lambda-April/Unsorted-Notes/blob/main) section above
-   If you do want something to have access to the object’s private properties and methods, you pass it the `that` bundle (i.e. your ‘container of secrets’)

### Parts

-   An object can be composed out of a set of parts
-   For example, you can create a function that provides the object it is passed with a number of methods (which are defined in this function), where each method is a part that is added to the object

### Chapter 6 — Arrays

Javascript only has array-like objects which are slower than ‘real’ arrays.

Retrieval and updating of properties works the same as with an object _except with integer property names_.

Arrays have their own literal format and their own set of methods ([Chapter 8 — Methods](https://github.com/Lambda-April/Unsorted-Notes/blob/main)).

### Array Literals

-   An array literal is a pair of square brackets surrounding zero or more comma-seperated values `[a, b, c, etc]`
-   The first value will get the property name ‘0’, the second will be ‘1’ and so on
-   Javascript allows an array to contain any mixture of values

### Length

-   If you add to the array, the `length` property will increase to contain the new element – it will not give an error
-   If you set the `.length` to a smaller number than the current length of the array, it will delete any properties with a subscript &gt;= the new `length`
-   The `push()` method is sometimes useful to add an element to the end of an array
-   `numbers.push('go') //adds the element 'go' to the end of the numbers array`

### Delete

-   Elements can be deleted from the array object using `delete` but this leaves a hole in the array
-   Use `array.splice(keyInArray, howManyElementsToDelete)` which changes the keys for the remaining values in the array so there is no hole left
-   May be _slow_

### Enumeration

-   A `for` statement can be used to iterate over all the properties of an array (as it is an object)
-   Do not use `for in` as it does not iterate through the properties in order and sometimes pulls in from further up the prototype chain

### Confusion

> _The rule is simple: when the property names \[keys\] are small sequential integers, you should use an array. Otherwise, use an object._

-   Arrays are most useful when property names are integers _but_ they can also accept strings as property names
-   Javascript doesn’t have a good way of telling an object from an array as `typeof array === object`
-   To accurately detect arrays, have to define our own function:

var is_array = function(value) {  
return Object.prototype.toString.apply(value) === ‘\[object Array\]’;  
//apply(value) binds \`value\` to \`this\` & returns true if \`this\` is an array }

### Methods

-   Array methods are stored in `Array.prototype` which can be augmented using the format:

//capital A in Array means this refers to the prototype  
Array.method(‘reduce’, function(parameters) {  
//define variables and function  
//return a value  
});

-   Remember, every array inherits and can use the methods you add to `Array.prototype`
-   You can also add methods _directly to an array_ because they are objects
-   `myArray.total = function () { //statements to execute; }` adds a ‘total’ function to the array `myArray`
-   DO NOT USE: `Object.create()` will create an object – lacking the `length` property – not an array.

### Dimensions

-   Using `[]` will create an empty array as they are not initialized in JavaScript
-   Accessing a missing element will give you `undefined`
-   If you have an algorithm that relies on the array not being empty and not having `undefined` values, you can write a function that will prep your array to have a certain number of defined values, essentially initializing it with certain values in place
-   An `Array.dim` function is outlined on page 63 which will allow `var myArray = Array.dim(10,0)` to make an array with 10 zeroes starting from the first position in the array(0)
-   Javascript only has one dimensional arrays but _can_ have array of arrays
-   Two dimensional arrays (matrices) will have to be set up by the programmer
-   page 63 gives a method for this and for explicitly setting cell values so as not to have an empty matrix

### Chapter 7 — Regular Expressions

> _A_ regular expression _is the specification of the syntax of a simple language_

Used with `regexp.exec`, `regexp.test`, `string.match`, `string.replace`, `string.search` and `string.split` to interact with string (more in [Chapter 8 – Methods](https://github.com/Lambda-April/Unsorted-Notes/blob/main))

Quite convoluted and difficult to read as they do not allow comments or whitespace so a JavaScript regular expression must be on a single line

### An Example

`/ˆ(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([ˆ?#]*))?(?:\?([ˆ#]*))?(?:#(.*))?$/`

Breaking it down one portion ([factor](https://github.com/Lambda-April/Unsorted-Notes/blob/main)) at a time:

-   Note that the string starts and ends with a slash `/`
-   `ˆ` indicates the beginning of a string
-   `(?:([A-Za-z]+):)?`
-   `(?:...)` indicates a [_noncapturing group_](https://github.com/Lambda-April/Unsorted-Notes/blob/main), where the ‘…’ is replaced by the group that you wish to match, but not save to anywhere
-   Suffix `?` indicates the group is optional, so it could or could not exist in the string – it could even exist more than once
-   `()` around the _(\[A-Za-z\]+)_ indicates a [_capturing group_](https://github.com/Lambda-April/Unsorted-Notes/blob/main) which is therefore captured and placed in the `result` array
-   They groups are placed in the array in order, so the first will appear in `result[1]`
-   Noncapturing groups are preferred to capturing groups because capturing groups have a performance penalty (on account of saving to the result array)
-   You can also have capturing groups _within_ noncapturing groups such as `[(?:Bob says: (\w+))](http://www.rexegg.com/regex-disambiguation.html)`
-   `[...]` indicates a character class
-   `A-Za-z` is a character class containing all 26 letters of the alphabet in both upper and lower case
-   Suffix `+` means character class will be matched _one or more times_
-   Suffix `:` is matched literally (so the letters will be followed by a colon in this case)
-   `(\/{0,3})`
-   `\/` The backslash `\` _escapes_ the forward slash `/` (which traditionally symbolises the end of the regular expression literal) and together they indicate that the forward slash `/` should be matched
-   Suffix `{0,3}` means the slash `/` will be matched between 0 and 3 times
-   `([0-9.\-A-Za-z]+)`
-   String made up of one or more (note the `+` at the end denoting possible multiple occurrences) digits, letters (upper or lower case), full stops (.) or hyphens (-)
-   Note that the hyphen was escaped with a backslash `\-` as hyphens usually denote a _range_ but in this case is a hyphen within the expression
-   `(?::(\d+))?`
-   `\d` represents a _digit character_ so this will be a sequence of _one or more_ digit characters (as per the `+`)
-   The digit characters will be immediately preceded by a colon `:`
-   `(\d+)` will be the fourth capturing group in this expression, it is also _optional_ (`?`) and inside a non-capturing group `(?:...)`
-   `(?:\/([ˆ?#]*))?`
-   Another optional group (`?`), beginning with a literal slash `/` (escaped by the backslash)
-   The `ˆ` at the beginning of character class `[ˆ?#]` means it includes _all_ characters *except* ? and \#
-   This actually leaves the regexp open to attack because too many characters are included in the character class
-   The `*` indicates the character class will appear _zero or more_ times
-   `(?:\?([ˆ#]*))?`
-   We’ve seen everything here before: An optional capturing group starting with a literal `?` (escaped by the backslash) with zero or more characters that are not \#
-   `(?:#(.*))?`
-   Final optional group beginning with a `#`
-   `.` matches any character _except a line ending character_
-   `$` represents the end of a string
-   Note: `ˆ` and `$` are important because they anchor the regexp and checks whether the string matched against it contains _only_ what is in the regexp
-   If `ˆ` and `$` weren’t present, it would check that the string _contained_ the regexp but wouldn’t necessarily be only made up of this
-   Using only `ˆ` checks the string _starts_ with the regexp
-   Using only `$` checks the string _ends_ with the regexp

> Another example `/ˆ-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;`

Most of this we have seen before but here are the new bits:

-   The `i` at the end means _ignore case_ when matching letters
-   `-?` means the minus sign is optional
-   `(?:\.\d*)` matches a decimal point followed by _zero or more_ digits (123.6834.4442284 _does not match_)
-   Note this expression only uses _noncapturing_ groups

### Construction

3 flags exist in regular expressions: `i` means insensitive – ignore the character case, `g` means global – to match multiple items and `m` means multiline – where ˆ and $ can match line-ending characters

Two ways to build a regular expression: 1. _Regular Expression literals_ as per the examples above start and end with a slash `/`

-   Here the flags are appended after the final slash, for example `/i`
-   Be careful: `RegExp` objects made by regular expression literals share a single instance

1.  Use `RegExp` constructor

-   The first parameter is the string to be made into a `RegExp` object, the second is the flag
-   Useful when all information for creating the regular expression is not available at time of programming
-   Backslashes mean something in the constructor, so these must be doubled and quotes must be escaped

//example creating a regular expression object that matches a JavaScript string

var my_regexp = new RegExp("‘(?:\\\\\\\\.|\[ˆ\\\\\\\\\\\\’\])\*‘", ’g’);

### Elements

#### Regexp Choice

`|` provides a match if any of the sequences provided match.

In `"into".match(/in|int/);`, the _in_ will be a match so it doesn’t even look at the _int_.

#### Regexp Sequence

A _regexp sequence_ is made up of one or more regexp [factors](https://github.com/Lambda-April/Unsorted-Notes/blob/main). If there are no quantifiers after the factor (like `?`, `*` or `+`), the factor will be matched one time.

#### Regexp Factor

> _A_ regexp factor _can be a character, a parenthesized group, a character class, or an escape sequence._

It’s essentially a portion of the full `RegExp`, like what we broke down the regexp above into.

-   The following special characters must all be _escaped_ with a backslash `\` to be taken literally, or they will take on an alternative meaning: / \[ \] ( ) { } ? + \* | . ˆ$
-   The `\` prefix does not make letters or digits literal
-   When unescaped:
-   `.` matches any character except line-ending
-   `ˆ` matches the beginning of the text when `lastIndex` property is zero, or matches line-ending character when the `m` flag is present
-   Having `ˆ` inside a [character class](https://github.com/Lambda-April/Unsorted-Notes/blob/main) means NOT, so \[ˆ0-9\] means _does not_ match a digit
-   `$` matches the beginning of the text or a line-ending character when the `m` flag is present

#### Regexp Escape

As well as escaping special characters in regexp factors, the backslash has additional uses:

-   As in strings, `\f` is the formfeed character, `\n` is new line, `\r` is carriage return, `\t` is tab and `\u` specifies Unicode as a 16-bit hex. But `\b` is _not_ a backspace character
-   `\d` === \[0-9\] and `\D` is the opposite, NOT (ˆ) a digit, \[ˆ0-9\]
-   `\s` matches is a partial set of Unicode whitespace characters and `\S` is the opposite
-   `\w` === \[0-9A-Za-z\] and `\W` === \[ˆ0-9A-Za-z\] but useless for any real world language (because of accents on letters, etc)
-   `\1` refers to the text captured in group 1 so it is matched again later on in the regexp
-   `\2` refers to group 2, `\3` to group 3 and so on

\*`\b` is a _bad part_. It was supposed to be a word-boundary anchor but is useless for multilingual applications

#### Regexp Group

Four kinds of groups:

-   Capturing: `(...)` where each group is captured into the `result` array – the first capturing group in the regexp goes into `result[1]`, the second into `result[2]` and so on
-   Noncapturing `(?:...)` where the text is matched, but not captured and saved anywhere, making is _slightly faster_ than a capturing group (has no bearing on numbering of capturing groups)
-   _Positive lookahead_, a bad part: `(?=...)` acts like a noncapturing group except after the match is made, it goes back to where text started
-   _Negative lookahead_, a bad part: `(?!...)` is like a positive lookahead but only matches if there is no match with what is in it

#### Regexp Class

-   Conveniently and easily specifies one of a set of characters using square brackets `[]`, for example vowels: `[aeiou]`
-   Can shorten specification of all 32 ASCII special characters to \[!-/:-@\[-\`{-˜\] (note that the \` in this piece of code is a back-tick)
-   Also allows `ˆ` as the first character after the opening `[` to mean _NOT_ the characters in the character set

#### Regexp Class Escape

There are _specific_ characters that must be escaped in a character class: — / \[ \] ˆ

#### Regexp Quantifier

A _quantifier_ at the end of a factor indicates how many times the factor should be matched

-   A number in curly braces means the factor should match that many times, so `/o{3}` matches _ooo_
-   Two comma-seperated numbers in curly braces provide the _range_ of times a factor should match, so `{3,5}` indicates it will match 3, 4 or 5 times
-   _Zero or one_ times (same thing as saying something is optional) can be `?` or `{0,1}`
-   _Zero or more_ times can be `*` or `{0,}`
-   _One or more_ times can be `+` or `{1,}`

Prefer to use ‘zero or more’ or ‘one or more’ matching over the ‘zero or one’ matching — i.e. prefer _greedy_ matching over _lazy_ matching

### Chapter 8 — Methods

### Arrays

#### array.concat(item…)

Produces new array copying the original array with the `items` appended to it (does not modify the original array like `array.push(item)` does). If the `item` is an array, its elements are appended.

#### array.join(separator)

Creates a string of all the array’s elements, separated by the `separator`. Use an empty string `separator` (”) to join without separation.

#### array.pop()

Removes _last element_ of array. Returns `undefined` for empty arrays.

#### array.push(item…)

Modifies the _array_, appending `items` onto the end. Returns the new `length` of the array.

#### array.reverse()

_Modifies_ the array by reversing the order of the elements.

#### array.shift()

Removes the _first_ element of the array (does not leave a hole in the array — same effect as using the `.splice(a,b)` method) and returns that first element.

#### array.slice(start, end)

Different to `splice`.

‘slice’ creates a new array, copying from the `start` element and stopping at the element _before_ the `end` value given. If no `end` is given, default is `array.length`.

Negative values for `start` and `end` will have `array.length` added to them and if `start`&gt;`end`, it will return an empty array.

#### array.sort(comparefn)

JavaScript has a `sort()` method which was created only to compare strings and therefore sorts numbers incorrectly (it will sort them as 1, 15, 2, 23, 54 for example). Therefore, we have to write a comparison function which returns _0_ if the two elements you are comparing are equal, a _positive number_ if the first element should come first and a _negative number_ if the second element should come first. Then pass this comparison function to `sort()` as a parameter to allow it to sort array elements _intelligently_.

Page 80-82 in the book takes you through various iterations of the comparison functions — for numbers, simple strings, objects and objects with multiple keys (for example if you want to sort objects by first _and_ last names). These should be taken from the book when required.

#### array.splice(start, deleteCount, item…)

Removes elements from the array making sure there are no holes left in the array. It is most popularly used for deleting elements from an array.

It removes the `deleteCount` number of elements from the array starting from the `start` position. If there are `item` parameters passed to it, it will replace the deleted elements in the array with the `items`.

It returns an array containing the deleted elements.

#### array.unshift(item…)

Works like `push` but adds items to the front of the array instead of the end. Returns the new `length` of the array.

### Function

#### function.apply(thisArg, \[argArray\])

The `apply` method invokes a function, passing in the object that will be bound to `this` and _optional_ array of arguments.

### Number

#### number.toExponentional(fractionDigits)

Converts _number_ to a string in exponential form (e.g. 3.14e+0). `fractionDigits` (from 0 to 20) gives the number of decimal places.

#### number.toFixed(fractionDigits)

Converts _number_ to a string in decimal form (e.g. 3.1415927). `fractionDigits` (from 0 to 20) gives the number of decimal places.

#### number.toPrecision(precision)

Converts _number_ to a string in decimal form (e.g. 3.1415927). The difference from `toFixed` is that `precision` (from 0 to 21) gives the number of total digits.

#### number.toString(radix)

Converts _number_ to a string. `radix` is an _optional_ parameter between 2 and 36 and gives the _base_. The default radix is 10.

### Object

#### object.hasOwnProperty(name)

Does not look at the property chain. Returns true if the _object_ contains the property `name`.

### RegExp

#### regexp.exec(string)

Most powerful (and _slowest_) regexp method.

Checks the `string` against the _regexp_ (starting at position 0) and returns an array containing the matches. The _regexp_ is set up with various capturing groups and these determine the elements that go in the array:

-   the 0 element of the array will contain the part of `string` that matched the _regexp_
-   element 1 of the array will contain the text captured by the first capturing group in _regexp_
-   element 2 of the array will contain the text captured by the second capturing group in _regexp_ and so on
-   if the match fails, it returns `null`

If the _regexp_ contains a `g` flag (e.g. `var regexp = /[ˆ<>]+|<(\/?)([A-Za-z]+)([ˆ<>]*)>/g;`), there is a lot more to look out for:

-   Searching begins at `regexp.lastIndex` (initially zero)
-   If a match is found, `lastIndex` becomes the position of the _first character of the match_
-   If no match is found, `lastIndex` is reset to zero
-   If searching for multiple occurrences of a pattern by calling `exec` in a loop, ensure you _reset_ `_lastIndex_` when exiting the loop and remember `ˆ` only matches _when_ `_lastIndex_` _is equal to zero_

Example on page 87 of the book is worth reading to improve understanding.

#### regexp.test(string)

Simplest (and _fastest_) regexp method.

If _regexp_ matches the `string` it returns _true_. Otherwise it returns _false_. Do not use the `g` flag with this method.

### String

#### string.charAt(pos)

Returns character at position `pos` in the string _starting from 0_. If `pos` is less than zero or bigger than the string itself it return an empty string.

#### string.charCodeAt(pos)

Same as `charAt` except it returns the integer that represents the _code point value of the character at position_ `_pos_`. Returns `NaN` if _string_.length &lt; `pos` &lt; 0.

#### string.concat(string…)

Creates new string concatenating various strings. `+` tends to be used instead of this method (e.g. `var cat = 'c'+'a'+'t';`)

#### string.indexOf(searchString, position)

Searches for `searchString` within _string_ starting at position `position` (an optional parameter). If `position` is not provided, search starts at the beginning of the _string_. Returns the integer _position of the first matched character_ or _-1_ if no match is found.

#### string.lastIndexOf(searchString, position)

Same as `indexOf` but searches from the end of the string instead of the beginning.

#### string.localeCompare(that)

Compares _string_ to `that` parameter and returns:

-   0 if _string_ === `that`
-   -1 if _string_ &lt; `that`

_NB. ‘a’ &lt; ‘A’, comparison is not just in length._

#### string.match(regexp)

Works the same way as `regexp.exec(string)` if there is no `g` flag in the `regexp`.

If there is a `g` flag in teh `regexp`, it produces an array of the matches but excludes the capturing groups

#### string.replace(searchValue, replaceValue)

Searches for the `searchValue` in _string_ and replaces it with the `replaceValue`.

If `searchValue` is a:

-   string, only its _first occurrence_ will be replaced with the `replaceValue`
-   regexp with a g flag, _all occurrences_ will be replaced with the `replaceValue`; otherwise, only the _first occurrence_ will be replaced

If `replaceValue` is a:

-   string, a `$` value has a special meaning when used in the `replaceValue` that conveys what to replace – see table on page 90 for possible variations on `$`
-   function, it is called for each match and the _string result of the function_ is used as the replacement text
-   string result of the first call will replace capture group 1 of the _string_ and so on

#### string.search(regexp)

Similar to `.indexOf(string)` but takes a `regexp` instead of a `string`, returning the position of the first match (or -1 if there is no match). The `g` flag is ignored.

#### string.slice(start, end)

Creates a new string by copying the characters from the `start` position to the character before the `end` position in _string_.

The `end` parameter is _optional_ and defaults to _string_.length. If either parameter is negative, _string_.length is added to it.

#### string.split(separator, limit)

Creates an array of strings by splitting apart _string_ at the points where the `separator` appears (e.g. if the separator is ‘.’, ab.cd’ becomes \[‘ab’, ‘cd’\]).

-   If separator is an _empty string_, an array of single characters is produced.
-   `limit` is _optional_ and determines how many pieces are to be split off from the original _string_.
-   The `separator` can be a `regexp` but
-   text from capturing groups within the regexp will be included in the split — e.g. in `var e = text.split(/\s*(,)\s*/);` the commas (,) will each be included as a separate element in the resulting array
-   some systems _ignore empty strings_ when the `separator` is a `regexp`

#### string.substring(start, end)

No reason to use, use `slice` instead.

#### string.toLocaleLowerCase()

Produces a new string converted to lower case, _using the rules for the particular locale_ (geography).

#### string.toLocaleUpperCase()

Produces a new string converted to upper case, _using the rules for the particular locale_ (geography).

#### string.toLowerCase()

Produces a new string converted to lower case.

#### string.toUpperCase()

Produces a new string converted to upper case.

#### String.fromCharCode(char…)

Produces a new string from a series of numbers. `var a = String.fromCharCode(67, 97, 116); //a === 'Cat'` _NB. You’re calling the prototype here, not replacing ‘String’ with your own variable._

### Chapter 9 — Style

#### _JavaScripts’s loose typing and excessive error tolerance provide little compile-time assurance of our programs’ quality, so to compensate, we should code with strict discipline._

> We should avoid the _bad parts_ of JavaScript, but also the useful parts that can be occasionally dangerous

> the likelihood a program will work \[as intended\] is significantly enhanced by our ability to read it

> Must be written in a clear, consistent style, including:

> Good use of whitespace

> Put at most one statement on a line

> If you have to break a statement into 2 or more lines, indent the 2nd line onwards (an extra four spaces)

> _Always_ use blocks (curly braces {}) with structured statements like `_if_` and `_while_` to avoid confusion on what the statement is actually doing

> Put the opening brace `_{_` on the same (first) line as the statement to avoid JavaScript’s [semicolon insertion](https://github.com/Lambda-April/Unsorted-Notes/blob/main) issues – i.e `_if (a) { ..._`

> Use line comments `_//comment_` and not block commenting (unless you’re _commenting out_ code)

> Declare all your variables at the beginning of the function, due to JavaScript’s functional scope

-   I use a single global variable to contain an application or library. Every object has its own namespace, so it is easy to use objects to organize my code. Use of closure provides further information hiding, increasing the strength of my modules.

### Chapter 10 — Beautiful Features

Each feature you add to something has a lot of different costs (documentation costs, specification, design, testing and development costs) and these are often not properly accounted for.

> _Features that offer value to a minority of users impose a cost on all users_

> _We cope with the complexity of feature-driven design by finding and sticking with the good parts. For example, microwaves do a ton of different things, but most people just use one setting, the timer and the clock. So why not design with just the good parts?_

### Appendix A — the Awful Parts

Need to know what all the pitfalls are with these parts.

### Global variables

These are variables that are visible throughout the code in any scope. They can be changed at any time by any part of the program which makes them unreliable in larger complex programs. This can also lead to naming conflicts which can cause your code to fail or you to accidentally overwrite a global variable.

Defined in three ways:

-   Using a `var` statement outside of any function; `var foo = value`;
-   By adding a property to the global object (container of all global variables), such as `window` in browsers; `window.foo = value;`
-   Using a variable without declaring it with `var`, which makes it an _implied global_; `foo = value`

### Scope

Although JavaScript has block _syntax_ (i.e. is written in blocks) like a lot of other programming languages, it has functional scope and _not_ block scope.

Variables should all be declared at the top of the function and not littered throughout the block.

### Semicolon Insertion

Attempts to correct faulty programs by automatically inserting semicolons. Do not depend on this as it can hide underlying issues.

Also ensure opening curly braces ({) are on the first line of a statement, otherwise semicolons will be erroneously inserted and cause problems:

//Ensure curly braces open on the first line of a statement  
return {  
status: true //for example  
};  
//instead of  
return  
{  
status:true  
};

### Reserved Words

Most JavaScript reserved words are not used in the language but cannot be used to name variables or parameters.

If used as the key in object literals, they _must_ be quoted. For example `object - {'case' : value};` or `object['final'] = value;` as _case_ and _final_ are both reserved words.

### Unicode

JavaScript characters are 16 bits which only cover the original Unicode Basic Multilingual Place.

### typeof

Watch out for:

-   `typeof null` which returns ‘object’ instead of ‘null’
-   incorrect reporting on typeof regular expressions, with some implementations returning ‘object’ and some returning ‘function’
-   arrays are objects in JavaScript so `typeof array` will return ‘object’

All `object`s are _truthy_ and `null` is _falsy_, so you can use the following to tell them apart:

if (my_value && typeof my_value === ‘object’) {  
//then my value is definitely an object or an array because not only is its ‘typeof’ an object but it’s also truthy (first statement)  
}

### NaN

-   `typeof NaN === 'number'` even though it stands for _not-a-number_
-   If you have a chain of formulas that together produce a `NaN` then at least _one_ of them will have generated `NaN`
-   Surprisingly `NaN !=== NaN`
-   `isNaN(value)` can be used to distinguish numbers from NaN

For numbers, best use your own isNumber formula:

var isNumber = function isNumber(value) {  
return typeof value === ‘number’ && isFinite(value); //isFinite() rejects NaN and Infinity, but is only good for numbers, not strings  
}

### Phony Arrays

JavaScript doesn’t have real arrays, it has _array-like objects_.

-   Good: No need to give them dimensions and don’t generate out-of-bounds errors
-   Bad: Slower than ‘real’ arrays

To test if value is an array:

if (my_value && typeof my_value === ‘object’ && typeof my_value.length === ‘number’ &&  
!(my_value.propertyIsEnumerable(‘length’))) {  
//my_value is definitely an array!  
}

The `arguments` array isn’t an array, just an object with a length property.

### Falsy Values

`0`, `NaN`, `''`, `false`, `null` and `undefined` are all _falsy_ values, but they are not interchangeable. When testing for a missing member of an object for example, you need to use `undefined` and not `null`.

`undefined` and `NaN` are actually global variables instead of constants but don’t change their values.

### Object

JavaScript objects inherit members from the prototype chain so they are _never truly empty_.

To test for membership without prototype chain involvement, use the `hasOwnProperty` method or limit your results (for example, to specific types like number so you know you’re not dragging in object members from up the prototype for example if that’s what’s causing the problem).

### Appendix B — the Bad Parts

Avoid these altogether

-   `==` and `!=`: Don’t function properly when result is false, use `===` or `!==` instead
-   `with` statement: Intended to provide a shortcut to properties of an object but results vary every time it is run
-   `eval`: Adds unnecessary complication and compromises the security of the application
-   Giving string arguments to `setTimeout` and `setInterval` should also be avoided as this makes them act like `eval`
-   `continue` statement: Forces a loop into its next iteration but the code is usually much improved when re-written _without_ `continue`
-   `switch` fall through: In a `switch` statement, each `case` falls through to the next `case` unless you explicitly disrupt the flow, but using these _intentional_ fall throughs makes the _unintentional_ ones that are causing errors basically impossible to find
-   This is one of those parts of JavaScript that appears useful but you’re better off avoiding because it’s occasionally very dangerous
-   Block-less statements: _Always_ use curly braces `{}` to block in statements so as to avoid misinterpretation and aid error finding
-   Bitwise operators: Shouldn’t really be doing this kind of manipulations because they are quite slow in JavaScript, therefore there shouldn’t be a need to use `&`, `|`, `ˆ`, `˜`, `>>`, `>>>` or `<<`
-   This doesn’t mean you can’t use `&&` for example
-   `++` and `--`: This one seems debatable to me; Douglas Crockford finds it makes his coding style much more cryptic and difficult to read (the book uses `+=1` and `-=1` instead)

The function statement vs the function expression: To use JavaScript well, important to understand that functions are values.

-   A function _statement_ is shorthand for a var statement with a function value, so `function foo() {}` (a function statement) means pretty much the same as `var foo = function foo(){};` (a function expression)
-   Logically, to write the language well you should define a function before using it, but in JavaScript, function statements (using just `function foo(){}`) are _hoisted_ to the top of the scope in which they are defined – this encourages sloppy programming and should be avoided
-   function statements also don’t function consistently in `if` statements
-   if you need to start a function expression with the word _function_, wrap it in parentheses (), or JavaScript assumes it’s a function _statement_

Typed wrappers: Don’t use `new Boolean` or `new String` or `new Number`, it’s completely unnecessary. Also avoid `new Object` and `new Array` and use `{}` and `[]` instead.

`new` operator: Functions that are intended to be used with `new` (conventionally starting with a capital letter) should be avoided (don’t define them) as they can cause all kinds of issues and complex bugs which are difficult to catch.

void: In JavaScript, this actually _takes_ a value and _returns_ `undefined`, which is hugely confusing and not helpful. Don’t use it.

### Appendix C — JSLint

JSLint is a code quality tool for JavaScript which checks your syntax.

Having read through this appendix (you can read more about [JSLint here](http://www.jslint.com/)), I tend more towards [_JSHint_](http://jshint.com/about/), a _fork_ of JSLint. It allows programmers to customise for themselves which the good parts and bad parts are and define their own subset, although naturally there are a number of pre-defined options. [This is a really fantastic article on using JSHint](https://github.com/nelsonic/learn-jshint); it’s simple and aimed at having you using JSHint in a few minutes as well as providing various sources for pre-defined subsets.

#### Further resources:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

#### Part 1

![](https://webdevhubcom.files.wordpress.com/2021/04/781b5-1cg0j-l4zhn7_5g2in-k-ew.png)

### How to learn effectively

**Learning**: The acquisition of skills and the ability to apply them in the future.

**What makes an Effective learner?**

-   They are active listeners.
-   They are engaged with the material.
-   They are receptive of feedback.
-   They are open to difficulty.

**Why do active learning techniques feel difficult?**

-   It feels difficult because you are constantly receiving feedback, and so you are constantly adapting and perfecting the material.

**Desirable Difficulty**

-   The skills we wish to obtain is often a difficult one.
-   We want challenging but possible lessons based on current level of skill.

**Effective learners space their practice**

-   Consistent effort &gt; cramming =&gt; for **durable knowledge**

---

#### Here’s a REPL to practice with:

<span class="citation" data-cites="bgoonz/lambda-prep#README.html">\[https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html\]</span>(https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep#README.html"><span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html</span>)

---

<span class="citation" data-cites="bgoonz/lambda-prep#README.html">\[https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html\]</span>(https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep#README.html"><span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html</span>)

---

### Hello World

-   **console.log** : command used to print something onto the screen.
-   **syntax** : the exact arrangement of the symbols, characters, and keywords in our code.
-   **//** : notation for creating a code comment in JS.
-   **code comment** : useful for annotating pieces of code to explain how something works, ignored by computer.

> **_“Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra_**

---

### The Number Data Type

The **number** data type in JS is used to represent any numerical values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

-   **+** (addition)
-   **–** (subtraction)
-   **asterisk** (multiplication)
-   **/** (division)
-   **%** (modulo)

JS evaluates more complex expressions using the general math order of operations aka PEMDAS.

-   **PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.
-   _To force a specific order of operation, use the group operator ( ) around a part of the expression._

**Modulo** : Very useful operation to check divisibility of numbers, check for even & odd, whether a number is prime, and much more! _(Discrete Math concept, circular problems can be solved with modulo)_

-   Whenever you have a smaller number % a larger number, the answer will just be the initial small number.
-   `console.log(7 % 10); // => 7;`

---

### The String Data Type

The **string** data type is a primitive data type that used to represent textual data.

-   can be wrapped by either **single** or **double** quotation marks, _best to choose one and stick with it for consistency_.
-   If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.
-   `"That's a great string"; (valid)`
-   `'Shakespeare wrote, "To be or not to be"'; (valid)`
-   `'That's a bad string'; (invalid)`
-   Alt. way to add other quotes within strings is to use template literals.
-   `` `This is a temp'l'ate literal ${function}` // use ${} to invoke functions within. ``
-   **.length** : property that can be appended to data to return the length.
-   empty strings have a length of zero.
-   **indices** : indexes of data that begin at 0, can call upon index by using the bracket notation \[ \].

`console.log("bootcamp"[0]); // => "b"`

`console.log("bootcamp"[10]); // => "undefined"`

`console.log("boots"[1 * 2]); // => "o"`

`console.log("boots"["boot".length - 1]); // => "t"`

-   we can pass expressions through the brackets as well since JS always evaluates expressions first.
-   The index of the last character of a string is always one less than it’s length.
-   **indexOf()** : method used to find the first index of a given character within a string.
-   `console.log("bagel".indexOf("b")); // => 0 console.log("bagel".indexOf("z")); // => -1`
-   if the character inside the indexOf() search does not exist in the string, the output will be -1.
-   the indexOf() search will return the first instanced index of the the char in the string.
-   **concatenate** : word to describe joining strings together into a single string.

---

### The Boolean Data Type

The **boolean** data type is the simplest data type since there are only two values: **true** and **false**.

-   **Logical Operators** (B*oolean Operators*) are used to establish logic in our code.
-   **!** (not) : reverses a boolean value.
-   `console.log(!true); // => false console.log(!!false); // => false`
-   **&&** (and) **Truth Table**

![](https://webdevhubcom.files.wordpress.com/2021/04/f25af-1aw4icm7-fq7znecbvh3ftw.png)

-   **Logical Order of Operations** : JS will evaluate !, then &&, then ||.
-   **De Morgan’s Law** : Common mistake in boolean logic is incorrectly distributing ! across parentheses.
-   `!(A || B) === !A && !B; !(A && B) === !A || !B;`
-   In summary, to correctly distribute ! across parentheses we must also flip the operation within.
-   **Short-Circuit Evaluation** : Because JS evalutes from left to right, expressions can “short-circuit”. For example if we have true on the left of an || logical comparison, it will stop evaluating and yield true instead of wasting resources on processing the rest of the statement.
-   `console.log(true || !false); // => stops after it sees "true ||"`

---

### Comparison Operators

All comparison operators will result in a boolean output.

**The relative comparators**

-   **&gt;** (greater than)
-   **&lt;** (less than)
-   **&gt;=** (greater than or equal to)
-   **&lt;=** (less than or equal to)
-   **===** (equal to)
-   **!==** (not equal to)

> _Fun Fact: “a” &lt; “b” is considered valid JS Code because string comparisons are compared lexicographically (meaning dictionary order), so “a” is less than “b” because it appears earlier!_

> _If there is ever a standstill comparison of two string lexicographically (i.e. app vs apple) the comparison will deem the shorter string lesser._

**Difference between == and ===**

-   **===** : Strict Equality, will only return true if the two comparisons are entirely the same.
-   **==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)

---

### Variables

Variables are used to store information to be referenced and manipulated in a program.

-   We initialize a variable by using the **let** keyword and a **=** single equals sign (assignment operator).
-   `let bootcamp = "Lambda"; console.log(bootcamp); // "Lambda"`
-   JS variable names can contain any alphanumeric characters, underscores, or dollar signs (cannot being with a number).
-   If you do not declare a value for a variable, undefined is automatically set.
-   `let bootcamp; console.log(bootcamp); // undefined`
-   We can change the value of a previously declared variable (let, not const) by re-assigning it another value.
-   **let** is the updated version of **var**; there are some differences in terms of hoisting and global/block scope — will be covered later in the course (common interview question!)

**Assignment Shorthand**

    let num = 0;
    num += 10; // same as num = num + 10
    num -= 2; // same as num = num - 2
    num /= 4; // same as num = num / 4
    num *= 7; // same as num = num * 7

-   In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.
-   **declaration** : process of simply introducing a variable name.
-   **initialization** : process of both declaring and assigning a variable on the same line.

---

### Functions

A function is a procedure of code that will run when called. Functions are used so that we do not have to rewrite code to do the same thing over and over. (Think of them as ‘subprograms’)

-   **Function Declaration** : Process when we first initially write our function.
-   Includes three things:
-   Name of the function.
-   A list of _parameters_ ()
-   The code to execute {}
-   **Function Calls** : We can call upon our function whenever and wherever\* we want. (\*wherever is only after the initial declaration)
-   JS evaluates code top down, left to right.
-   When we execute a declared function later on in our program we refer to this as **invoking** our function.
-   Every function in JS returns undefined unless otherwise specified.
-   When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.
-   When naming functions in JS always use camelCase and name it something appropriate. &gt; Greate code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!

---

### Parameters and Arguments

-   **Parameters** : Comma seperated variables specified as part of a function’s declaration.
-   **Arguments** : Values passed to the function when it is invoked.
-   _If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work._
-   However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.

#### Further resources:

<span class="citation" data-cites="bgoonz/lambda-prep#README.html">\[https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html\]</span>(https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep#README.html"><span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html</span>)<span class="citation" data-cites="bgoonz/lambda-prep#README.html">\[https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html\]</span>(https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep#README.html"><span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html</span>)<span class="citation" data-cites="bgoonz/lambda-prep#README.html">\[https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html\]</span>(https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep#README.html"><span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html</span>)<span class="citation" data-cites="bgoonz/lambda-prep#README.html">\[https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html\]</span>(https://replit.com/<span class="citation" data-cites="bgoonz/lambda-prep#README.html"><span class="citation" data-cites="bgoonz/lambda-prep">@bgoonz/lambda-prep</span>\#README.html</span>)

\*More content at **[plainenglish.io](https://plainenglish.io/)\***

A all encompassing list of tools and resources for web developers

![](https://cdn-images-1.medium.com/max/1200/1*QXSlTWm23iJGGW_R4Vslug.png)

### General resources

-   [Devdocs.io](http://devdocs.io/): Fast, offline, and free documentation browser for developers. Search 100+ docs in one web app: HTML, CSS, JavaScript, PHP, Ruby, Python, Go, C, C++…
-   [DevHints](https://devhints.io/): cheatsheets for many web technologies
-   [Carbon](https://carbon.now.sh/?bg=rgba%28171,%20184,%20195,%201%29&t=seti&l=auto&ds=true&wc=true&wa=true&pv=32px&ph=32px&ln=false): use this to share images of your code in presentations etc
-   [Badgen](https://badgen.net/):
-   [Shields.io](https://shields.io/):
-   to your documentation/readmes
-   [Git Flight Rules](https://github.com/k88hudson/git-flight-rules): A guide for astronauts (now, programmers using Git) about what to do when things go wrong.
-   [browser-2020](https://github.com/luruke/browser-2020): Things you can do with a browser in 2020 ![☕️](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/2615.svg)

### ![📦](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f4e6.svg) Finding and vetting npm packages

-   [pika](https://www.pikapkg.com/): A searchable catalog of modern “module” packages on npm
-   [npms](https://npms.io/): A better and open source search for node packages
-   [emma](https://github.com/maticzav/emma-cli): ![📦](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f4e6.svg) Terminal assistant to find and install node packages
-   [npmvet](https://github.com/harksys/npmvet): A simple CLI tool for vetting npm package versions
-   [Bundlephobia](https://bundlephobia.com/): See the “cost” of any npm package
-   [Snyk](https://snyk.io/): Find any security vulnerabilities for any npm package. Search their database here: `[https://snyk.io/vuln/npm](https://snyk.io/vuln/npm):{package}` e.g. <a href="https://snyk.io/vuln/npm:react" class="uri">https://snyk.io/vuln/npm:react</a>
-   [runpkg](https://runpkg.com/): Explore, learn about and perform static analysis on npm packages in the browser

### ![🎨](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f3a8.svg) CSS

-   [CSS Tricks “Complete Guide to Flexbox”](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
-   [CSS Tricks “Complete Guide to Grid”](https://css-tricks.com/snippets/css/complete-guide-grid/)
-   [Cubic bezier curve creator](http://cubic-bezier.com/#.17,.67,.83,.67)
-   [Ceaser](http://matthewlein.com/ceaser/): Cubic bezier curve generator
-   [CSS Triggers](https://csstriggers.com/): find out what CSS properties trigger Paint/Layout/Composite renders
-   [Fluid-responsive font-size calculator](https://websemantics.uk/tools/responsive-font-calculator/): To scale typography smoothly across viewport widths.
-   [Browserhacks](http://browserhacks.com/): Browserhacks is an extensive list of browser specific CSS and JavaScript hacks from all over the interwebs
-   [Absolute centering](https://codepen.io/shshaw/full/gEiDt): useful techniques for absolute centering in CSS
-   [modern-css-reset](https://github.com/hankchizljaw/modern-css-reset): A bare-bones CSS reset for modern web development
-   [CSSFX](https://cssfx.netlify.com/): Beautifully simple click-to-copy CSS effects
-   [Shape Divider App](https://www.shapedivider.app/)

### CSS-in-JS

-   CSS-in-JS libraries
-   [Styled Components](https://styled-components.com/): CSS-in-JS for React
-   [Emotion](http://emotion.sh/): CSS-in-JS library
-   [linaria](https://github.com/callstack/linaria): Zero-runtime CSS in JS library
-   [Design System Utils](https://github.com/mrmartineau/design-system-utils): Design system framework for modern front-end projects (made by me!)
-   [Polished](https://polished.js.org/): A lightweight toolset for writing styles in JavaScript
-   [styled-by](https://github.com/brunobertolini/styled-by): Simple and powerful lib to handle styled props in your components
-   [xstyled](https://github.com/smooth-code/xstyled): Consistent theme based CSS for styled-components ![💅](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f485.svg)
-   [Theme UI](https://theme-ui.com/): Build consistent, themeable React apps based on constraint-based design principles

### JavaScript

### Useful JS links

-   [JS module import/export syntax](https://stackoverflow.com/a/34842087/91359)
-   [JavaScript Event KeyCodes](http://keycode.info/)
-   [JavaScript Visualizer](https://tylermcginnis.com/javascript-visualizer/)
-   [Does it mutate?](https://doesitmutate.xyz/)
-   [jsPerf](https://jsperf.com/): JavaScript performance playground
-   [modern-js-cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet)
-   [HTML DOM](https://htmldom.dev/): Common tasks of managing HTML DOM with vanilla JavaScript

### Framework agnostic packages

### General utilities

-   [Lodash](https://lodash.com/): A modern JavaScript utility library delivering modularity, performance & extras.
-   [Just](https://github.com/angus-c/just): A library of dependency-free utilities that do just do one thing (like Lodash but smaller)
-   Install each util independently
-   Read the [tradeoffs document](https://github.com/angus-c/just/blob/master/TRADEOFFS.md) to see if Lodash is better
-   [tiny-get](https://github.com/NickGard/tiny-get): A minimal-weight lodash.get equivalent utility
-   [evt](https://www.evt.land/): A type safe replacement for node’s EventEmitter
-   [liteready](https://github.com/nicbell/liteready): A lightweight DOM ready.
-   [passport](https://github.com/jaredhanson/passport): Simple, unobtrusive authentication for Node.js
-   [get-size](https://github.com/desandro/get-size): Get the size of elements
-   [length.js](https://github.com/appalaszynski/length.js): Library for length units conversion
-   [action-outside](https://github.com/saschageyer/action-outside): Invoke a callback function when clicked or tabbed outside one or multiple DOM elements
-   [select-dom](https://github.com/bfred-it/select-dom): Lightweight `querySelector`/`All` wrapper that outputs an Array
-   [memoizee](https://github.com/medikoo/memoizee): Complete memoize/cache solution for JavaScript
-   [memoize-one](https://github.com/alexreardon/memoize-one): A memoization library which only remembers the latest invocation
-   [kind-of](https://github.com/jonschlinkert/kind-of): Get the native JavaScript type of a value, fast.
-   [iterare](https://github.com/felixfbecker/iterare): Array methods + ES6 Iterators =
-   [eases-jsnext](https://github.com/Rich-Harris/eases-jsnext): A grab-bag of modular easing equations
-   [normalizr](https://github.com/paularmstrong/normalizr): Normalizes nested JSON according to a schema
-   [lazy-value](https://github.com/sindresorhus/lazy-value): Create a lazily evaluated value
-   [fast-equals](https://github.com/planttheidea/fast-equals): A blazing fast equality comparison, either shallow or deep
-   [fast-copy](https://github.com/planttheidea/fast-copy): A blazing fast deep object copier
-   [compute-scroll-into-view](https://github.com/stipsan/compute-scroll-into-view): Utility for calculating what should be scrolled, how it’s scrolled is up to you
-   [arr](https://github.com/lukeed/arr): A collection of tiny, highly performant Array.prototype alternatives
-   [timedstorage](https://github.com/fuhton/timedstorage): A library for storing and expiring objects in window.localstorage
-   [left-pad](https://github.com/stevemao/left-pad): String left pad
-   [dont-go](https://github.com/tiaanduplessis/dont-go): A small client-side library with zero dependencies to change the title and/or favicon of the page when it is inactive
-   [always-done](https://github.com/hybridables/always-done): Handle completion and errors with elegance! Support for async/await, promises, callbacks, streams and observables. A drop-in replacement for async-done — pass 100% of its tests plus more
-   [words](https://github.com/words): Linguistic javascript modules
-   [no-scroll](https://github.com/davidtheclark/no-scroll): Disable scrolling on an element that would otherwise scroll
-   [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js): A simpler (and smaller) rewrite of Google Android’s libphonenumber library
-   [text-mask](https://github.com/text-mask/text-mask): Input mask for React, Angular, Ember, Vue, & plain JavaScript
-   [msk](https://github.com/vtex/msk): Small library to mask strings
-   [focus-trap](https://github.com/davidtheclark/focus-trap): Trap focus within a DOM node
-   [tinykeys](https://github.com/jamiebuilds/tinykeys): A tiny (~400 B) & modern library for keybindings
-   [clack](https://github.com/reasonink/clack): A modern keyboard shortcut library written in Typescript
-   [clack-react](https://github.com/reasonink/clack-react): React support for <span class="citation" data-cites="reasonink/clack"><span class="citation" data-cites="reasonink/clack">@reasonink/clack</span></span>
-   [js-humanize](https://github.com/ollieglass/js-humanize): Humanize large numbers
-   [sub-in](https://github.com/peterpme/sub-in): ![🥙](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f959.svg) A tiny (115B) find-and-replace utility for strings in Javascript
-   [color-hash](https://github.com/zenozeng/color-hash): Generate color based on the given string (using HSL color space and BKDRHash)
-   [title](https://github.com/zeit/title): A service for capitalizing your title properly
-   [string-similarity](https://github.com/aceakash/string-similarity): Finds degree of similarity between two strings, based on Dice’s Coefficient, which is mostly better than Levenshtein distance
-   [cuid](https://github.com/ericelliott/cuid): Collision-resistant ids optimized for horizontal scaling and performance
-   [obj-str](https://github.com/lukeed/obj-str): A tiny (96B) library for serializing Object values to Strings. Also serves as a faster & smaller drop-in replacement for the classnames module
-   [clsx](https://github.com/lukeed/clsx): A tiny (223B) utility for constructing className strings conditionally. Also serves as a faster & smaller drop-in replacement for the classnames module
-   [xstate](https://xstate.js.org/docs): State machines and statecharts for the modern web
-   [tasktimer](https://github.com/onury/tasktimer): An accurate timer utility for running periodic tasks on the given interval ticks or dates. (Node and Browser)
-   [rough-notation](https://github.com/rough-stuff/rough-notation): Create and animate hand-drawn annotations on a web page

### Async

-   [axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
-   [axios-retry](https://github.com/softonic/axios-retry): Axios plugin that intercepts failed requests and retries them whenever possible
-   [redaxios](https://github.com/developit/redaxios): The Axios API, as an 800 byte Fetch wrapper
-   [cross-fetch](https://github.com/lquixada/cross-fetch): Universal WHATWG Fetch API for Node, Browsers and React Native
-   [awaity](https://github.com/asfktz/Awaity.js): A functional, lightweight alternative to bluebird.js, built with `async` / `await` in mind
-   [loadjs](https://github.com/muicss/loadjs): A tiny async loader / dependency manager for modern browsers (789 bytes)
-   [await-to-js](https://github.com/scopsy/await-to-js): Async await wrapper for easy error handling without try-catch

### Node

-   [Fastify](https://www.fastify.io/): Fast and low overhead web framework, for Node.js
-   [Express](https://expressjs.com/)
-   [helmet](https://github.com/helmetjs/helmet): Help secure Express apps with various HTTP headers
-   [reqresnext](https://github.com/antongolub/reqresnext): Tiny helper for express middleware testing
-   [lusca](https://github.com/krakenjs/lusca): Application security for express apps
-   [cookie-session](https://github.com/expressjs/cookie-session): Simple cookie-based session middleware
-   [nodebestpractices](https://github.com/i0natan/nodebestpractices): The largest Node.JS best practices list. Curated from the top ranked articles and always updated
-   [dumper.js](https://github.com/zeeshanu/dumper.js): A better and pretty variable inspector for your Node.js applications
-   [http-terminator](https://github.com/gajus/http-terminator): Gracefully terminates HTTP(S) server
-   [uuid](https://github.com/uuidjs/uuid): Generate RFC-compliant UUIDs in JavaScript
-   [http-errors](https://github.com/jshttp/http-errors): Create HTTP Errors
-   [boom](https://github.com/hapijs/boom): HTTP-friendly error objects
-   [deno](https://github.com/denoland/deno): A secure JavaScript and TypeScript runtime
-   [nanomatch](https://github.com/micromatch/nanomatch): Fast, minimal glob matcher for node.js. Similar to micromatch, minimatch and multimatch, but without support for extended globs (extglobs), posix brackets or braces, and with complete Bash 4.3 wildcard support: (“\*”, “\*\*”, and “?”)
-   [yn](https://github.com/sindresorhus/yn): Parse yes/no like values
-   [ncp](https://github.com/AvianFlu/ncp): Asynchronous recursive file copying with Node.js

#### Logging

### Responsive

-   [responsive-watch](https://github.com/pauldijou/responsive-watch): Watch some media queries and react when they change
-   [tornis](https://github.com/robb0wen/tornis): Tornis helps you watch and respond to changes in your browser’s viewport ![🌲](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f332.svg)
-   [actual](https://github.com/ryanve/actual): Determine actual CSS media query breakpoints via JavaScript

### Media and Images

-   [images-loaded](https://github.com/awcross/images-loaded): Wait for images to load using promises. No dependencies.
-   [lazysizes](https://github.com/aFarkas/lazysizes): High performance and SEO friendly lazy loader for images (responsive and normal), iframes and more, that detects any visibility changes triggered through user interaction, CSS or JavaScript without configuration.

#### Image services

-   [sharp](https://github.com/lovell/sharp): High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP and TIFF images. Uses the libvips library.
-   [IMGIX](https://www.imgix.com/): Real-time image processing and image CDN

### Date

-   [date-fns](https://date-fns.org/): Modern JavaScript date utility library
-   [tinydate](https://github.com/lukeed/tinydate): A tiny (337B) reusable date formatter. Extremely fast!
-   [tinytime](https://github.com/aweary/tinytime): ![⏰](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/23f0.svg) A straightforward date and time formatter in &lt;1kb

### Scrolling

-   [scroll-watcher](https://github.com/jonataswalker/scroll-watcher)
-   [scrolldir](https://github.com/dollarshaveclub/scrolldir): Leverage Vertical Scroll Direction with CSS

### Carousels

-   [Flickity](https://flickity.metafizzy.co/)
-   [Swiper](http://idangero.us/swiper/)

### Animation

-   [ramjet](https://github.com/Rich-Harris/ramjet): Morph DOM elements from one state to another with smooth animations and transitions
-   [anime](https://github.com/juliangarnier/anime): JavaScript Animation Engine
-   [GSAP](https://greensock.com/):the standard for JavaScript HTML5 animation | GreenSock
-   [Vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/index.html): A smooth 3D tilt javascript library forked from Tilt.js

### Web workers

-   [workerize](https://github.com/developit/workerize): Run a module in a Web Worker
-   [greenlet](https://github.com/developit/greenlet): Move an async function into its own thread. A simplified single-function version of workerize.

### Immutable

-   [immer](https://github.com/mweststrate/immer): Create the next immutable state tree by simply modifying the current tree
-   [use-immer](https://github.com/immerjs/use-immer): Use immer to drive state with a React hooks
-   [unchanged](https://github.com/planttheidea/unchanged): A tiny, fast, unopinionated handler for updating JS objects and arrays immutably
-   [seamless-immutable](https://github.com/rtfeldman/seamless-immutable): Immutable data structures for JavaScript which are backwards-compatible with normal JS Arrays and Objectsseamless-immutable\`
-   [mutik](https://github.com/jaredpalmer/mutik): A tiny (495B) immutable state management library based on Immer

### Typography

-   [fitty](https://github.com/rikschennink/fitty): Makes text fit perfectly

### Polyfills

-   [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill):A polyfill for the Resize Observer API

### ![⚛️](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/269b.svg) React

[reactjs.org](https://reactjs.org/)

### React-specific libs:

-   [react-powerplug](https://github.com/renatorib/react-powerplug): Renderless Containers
-   [formik](https://github.com/jaredpalmer/formik): Build forms in React, without the tears ![😭](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f62d.svg)
-   [react-router](https://github.com/ReactTraining/react-router): Declarative routing for React
-   [Reach Router](https://reach.tech/router)
-   [react-fns](https://react-fns.netlify.com/): React Components for common Web APIs
-   [react-portal](https://github.com/tajo/react-portal): React component for transportation of modals, lightboxes, loading bars… to document.body
-   [react-ideal-image](https://github.com/stereobooster/react-ideal-image): ![🖼️](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f5bc.svg) An Almost Ideal React Image Component
-   [react-adopt](https://github.com/pedronauck/react-adopt): Compose render props components like a pro
-   [downshift](https://github.com/paypal/downshift)
-   [react-loadable](https://github.com/jamiebuilds/react-loadable): A higher order component for loading components with promises
-   [react-portal](https://github.com/tajo/react-portal): React component for transportation of modals, lightboxes, loading bars… to document.body
-   [js-lingui: ![🌍](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f30d.svg)![📖](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f4d6.svg)](https://github.com/lingui/js-lingui) : A readable, automated, and optimized (5 kb) internationalization (Intl / i18n) for JavaScript
-   [react-mq](https://github.com/u-wave/react-mq): Barebones CSS media query component for React, ~560 bytes
-   [react-media](https://github.com/ReactTraining/react-media): CSS media queries for React. This is SSR compatible as well.
-   [merge-props](https://github.com/andrewbranch/merge-props): Merges className, style, and event handler props for React elements
-   [react-uid](https://github.com/thearnica/react-uid): Render-less container for generating UID for a11y, consistent react key, and any other good reason ![🦄](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f984.svg)
-   [clsx](https://github.com/lukeed/clsx): A tiny (229B) utility for constructing `className` strings conditionally
-   [Framer Motion](https://www.framer.com/motion/): An open source React library to power production-ready animations. Design fluid animations for the web, across desktop and mobile
-   [react-axe](https://github.com/dequelabs/react-axe): Accessibility auditing for React.js applications
-   [use-click-away](https://github.com/geobde/use-click-away): React hook to detect click or touch events outside an element
-   [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list): A tiny but mighty 3kb list virtualization library, with zero dependencies ![💪](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f4aa.svg) Supports variable heights/widths, sticky items, scrolling to index, and more!
-   [react-laag](https://github.com/everweij/react-laag): Primitives to build things like tooltips, dropdown menu’s and popovers in React
-   [react-dnd](https://github.com/react-dnd/react-dnd): Drag and Drop for React

#### React Hooks

### State management

### Server-rendered React

-   [Next.js](https://nextjs.org/) ([repo](https://github.com/zeit/next.js)): — Framework for server-rendered or statically-exported React apps
-   [next-plugins](https://github.com/zeit/next-plugins)

### Static site generators

-   [Gatsby](https://www.gatsbyjs.org/): Blazing fast static site generator for React

### Microservices/Serverless

-   [micro](https://github.com/zeit/micro)
-   [awesome-micro](https://github.com/amio/awesome-micro)

### TypeScript

[typescriptlang.org](https://www.typescriptlang.org/)

-   [What’s new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript): Microsoft/TypeScript Wiki
-   [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/)
-   [TypeScript Evolution](https://blog.mariusschulz.com/series/typescript-evolution)
-   [JSON to Typescript Interface](https://transform.now.sh/json-to-ts-interface/)
-   [react-typescript-cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet): a cheatsheet for react users using typescript with react for the first (or nth!) time
-   [clean-code-typescript](https://github.com/labs42io/clean-code-typescript): Clean Code concepts adapted for TypeScript

### Command Line, Terminal and shells

[Fish shell](https://fishshell.com/): The user-friendly command line shell

-   [My fish_config](https://github.com/mrmartineau/fish)
-   [awesome-fish](https://github.com/jorgebucaran/awesome-fish): A curated list of packages, prompts, and resources for the amazing fish shell
-   [Starship](https://starship.rs/): Cross-Shell Prompt
-   [tide](https://github.com/IlanCosman/tide): ![🌊](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f30a.svg) A modern prompt manager for the Fish shell

### Creating CLI apps

-   [gluegun](https://github.com/infinitered/gluegun): A delightful toolkit for building Node-powered CLIs
-   [inquirer](https://github.com/SBoudrias/Inquirer.js): A collection of common interactive command line user interfaces
-   [commander](https://github.com/tj/commander.js): node.js command-line interfaces made easy
-   [sade](https://github.com/lukeed/sade): Sade is a small but powerful tool for building command-line interface (CLI) applications for Node.js that are fast, responsive, and helpful!

### CLI apps

-   [hub](https://hub.github.com/): hub is an extension to command-line git that helps you do everyday GitHub tasks without ever leaving the terminal
-   [serve](https://github.com/zeit/serve): Static file serving and directory listing
-   [awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps): A curated list of command line apps
-   [SpaceVim](https://github.com/SpaceVim/SpaceVim): A community-driven modular vim distribution — The ultimate vim configuration

### Tooling

### Code bundlers

-   [preconstruct](https://github.com/preconstruct/preconstruct): ![🎁](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f381.svg) Dev and build your code painlessly in monorepos
-   [Webpack](https://webpack.js.org/): script/asset bundler
-   [Webpack recipes](https://github.com/mrmartineau/webpack-recipes)
-   [ifdef-loader](https://github.com/nippur72/ifdef-loader): Webpack loader for JavaScript/TypeScript conditional compilation
-   [Parcel](https://parceljs.org/): Blazing fast, zero configuration web application bundler
-   [microbundle](https://github.com/developit/microbundle): Zero-configuration bundler for tiny modules
-   [rollup.js](https://rollupjs.org/guide/en): Rollup is a module bundler for JavaScript
-   [ncc](https://github.com/zeit/ncc): Node.js Compiler Collection. Simple CLI for compiling a Node.js module into a single file, together with all its dependencies, gcc-style.
-   [fastpack](https://github.com/fastpack/fastpack): Pack JS code into a single bundle fast & easy

### Package management and publishing

### Commit hooks

### Testing

### Code formatting and linting

-   [Prettier](https://prettier.io/)
-   [precise-commits](https://github.com/nrwl/precise-commits): Painlessly apply Prettier by only formatting lines you have modified anyway!
-   [pretty-quick](https://github.com/azz/pretty-quick): Runs Prettier on your changed files
-   [Eslint](https://eslint.org/)
-   [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): ESLint plugin for prettier formatting
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier
-   [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): — React specific linting rules for ESLint

### Miscellaneous

-   [npm-run-all](https://github.com/mysticatea/npm-run-all): A CLI tool to run multiple npm-scripts in parallel or sequential
-   [cross-port-killer](https://github.com/milewski/cross-port-killer): Kill the process running on a given TCP port on Windows, Linux and Mac
-   [envinfo](https://github.com/tabrindle/envinfo): Generate a report about your development environment for debugging and issue reporting
-   [mkcert](https://github.com/FiloSottile/mkcert): A simple zero-config tool to make locally trusted development certificates with any names you’d like

### Progressive Web Apps

-   [Workbox](https://developers.google.com/web/tools/workbox/) & ([repo](https://github.com/GoogleChrome/workbox)): JavaScript libraries for Progressive Web Apps

### Code Sandboxes

-   [CodeSandbox](https://codesandbox.io/): CodeSandbox is perfect for React demo apps
-   [Codepen](http://codepen.io/): Codepen is perfect for non-React front-end demos and prototypes
-   [CodeShare](http://codeshare.io/): Codeshare is useful for collaborating on a single file if devs are not in the same room
-   [Glitch](https://glitch.com/)

### APIs

-   [Postman](https://www.getpostman.com/): used to develop, test and monitor APIs
-   [MockAPI](http://www.mockapi.io/): create a mock API
-   [jsonbin](https://jsonbin.org/): A personal JSON store as a RESTful service
-   [test-cors.org](http://www.test-cors.org/)
-   [Reqres](https://reqres.in/): A hosted REST-API ready to respond to your AJAX requests
-   [Mirage JS](https://miragejs.com/): An API mocking library for frontend developers
-   [Postwoman](https://postwoman.io/): API request builder

### GraphQL

### JSON

-   [JSON generator](https://next.json-generator.com/): generate a lot of custom JSON for your app/site
-   [JSON Editor Online](https://jsoneditoronline.org/): view/edit JSON in a better format
-   [fx](https://github.com/antonmedv/fx): Command-line tool and terminal JSON viewer ![🔥](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f525.svg)

### HTML

-   [github.com/joshbuchea/HEAD](https://github.com/joshbuchea/HEAD): the definitive resource for everything that _could_ go in the head of your document
-   [MetaTags.io](https://metatags.io/): Preview, Edit and Generate
-   [HEY META](https://www.heymeta.com/): Website Meta Tag Check
-   [Rich Link Preview](https://richpreview.com/)

### SVG

-   [A Practical Guide to SVGs on the web](https://svgontheweb.com/)
-   [Get Waves](https://getwaves.io/): Create SVG waves for your next design
-   [Blobmaker](https://www.blobmaker.app/): Make organic SVG shapes for your next design
-   [flubber](https://github.com/veltman/flubber): Tools for smoother shape animations
-   [Hero Patterns](http://www.heropatterns.com/): Free repeatable SVG background patterns for your web projects

### Icons

-   [ICONSVG](https://iconsvg.xyz/): Quick customizable SVG icons for your project
-   [Simple Icons](https://simpleicons.org/)
-   [React Icons](https://react-icons.github.io/react-icons/#/)
-   [Evil Icons](https://evil-icons.io/)
-   [Icon Font & SVG Icon Sets ❍ IcoMoon](https://icomoon.io/)
-   [SVG PORN](https://svgporn.com/)
-   [Feather](https://feathericons.com/): Simply beautiful open source icons
-   [react-feather](https://github.com/feathericons/react-feather): React component for Feather icons
-   [System UIcons](https://systemuicons.com/)

### SVG/Image Media compression

-   [Squoosh](https://squoosh.app/)
-   [SVGOMG](https://jakearchibald.github.io/svgomg/): SVGO’s Missing GUI

### Conversions and unicode

### Features and feature detection

-   [Can I Use…](https://caniuse.com/): Browser support tables for modern web technologies (HTML5, CSS3, JavaScript etc)
-   [Kangax JavaScript compatibility table](http://kangax.github.io/compat-table/es6/)

### Performance

-   [Bundlephobia](https://bundlephobia.com/): find the cost of adding a npm package to your bundle

### Performance testing and monitoring

-   [WebPageTest](https://www.webpagetest.org/)
-   [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
-   [Calibre](https://calibreapp.com/)
-   [Website Speed Test Image Analysis Tool](https://webspeedtest.cloudinary.com/) by Cloudinary

### Design

-   [Subtract Guides](https://subtract.design/entry/forms): Simple Rules for Designing Web & Mobile Forms

### Design Systems and documentation

-   [Storybook](https://storybook.js.org/): UI dev environment you’ll love to use
-   [react-styleguidist](https://github.com/styleguidist/react-styleguidist): — Isolated React component development environment with a living style guide
-   [Docusaurus](https://docusaurus.io/): Easy to Maintain Open Source Documentation Websites
-   [Docz](https://www.docz.site/)
-   [design-system-utils](https://github.com/mrmartineau/design-system-utils): — Design system framework for modern front-end projects
-   [Docute](https://docute.org/): The fastest way to create a documentation site for your project
-   [playroom](https://github.com/seek-oss/playroom): Design with JSX, powered by your own component library

### Accessibility (A11y)

Accessibility is an extremely important part of any web project. While the SOW, functional spec or user-stories might not directly mention a11y, it is up to each developer to ensure that best efforts are made to make our websites as accessible as possible.

### DevOps

[HTTP Status Codes](https://httpstatuses.com/)

### Continuous integration

-   [CircleCI](https://circleci.com/): Paid.
-   [Bitrise](https://bitrise.com/): Paid. For iOS/Android apps
-   [Travis CI](https://travisci.com/): Free for open-source

### Docker

-   [dockle](https://github.com/goodwithtech/dockle): Container Image Linter for Security, Helping build the Best-Practice Docker Image, Easy to start

### Hosting

-   [Vercel](https://vercel.com/)
-   [Netlify](https://netlify.com/)

### Domains

-   [iwantmyname](https://iwantmyname.com/)

### Design

### Typography

-   [Modular Scale](http://modularscale.com/)
-   [Adaptive Modular Scale](https://codepen.io/getflourish/full/vXqewy/)
-   [Type Scale — A Visual Calculator](http://type-scale.com/)

### IDEs and Text Editors

### VS Code

-   [My VS Code extensions](https://gist.github.com/mrmartineau/28ef03c53275ea468e470532d6d20449)
-   [My preferences](https://gist.github.com/mrmartineau/ea3b428124bc1e31cd46dfa55469d781)
-   [awesome-vscode](https://github.com/viatsko/awesome-vscode): ![🎨](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f3a8.svg) A curated list of delightful VS Code packages and resources

### Programming fonts

-   [IBM Plex Mono](https://www.ibm.com/plex/)
-   [iA-Fonts](https://github.com/iaolo/iA-Fonts)
-   [Input: Fonts for Code](http://input.fontbureau.com/)
-   [FiraCode](https://github.com/tonsky/FiraCode)
-   [fantasque-sans](https://github.com/belluzj/fantasque-sans)
-   [Jet Brains Mono](https://github.com/JetBrains/JetBrainsMono)

### Code colour schemes

### Regular expressions

-   [Regex101](https://regex101.com/): Online regex tester and debugger: PHP, PCRE, Python, Golang and JavaScript

### If you found this guide helpful feel free to checkout my other articles:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

### OR GitHub/gists where I host similar content:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

### Or Checkout my personal Resource Site:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

Fundamental Data Structures In JavaScript \* { font-family: Georgia, Cambria, “Times New Roman”, Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: \#333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: \#333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: \#333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: \#333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

Data structures in JavaScript

### Fundamental Data Structures In JavaScript

### Data structures in JavaScript

Here’s a website I created to practice data structures!

Here’s the repo that the website is built on:

Here’s a live code editor where you can mess with any of the examples…

### Resources (article content below):

#### Videos

#### Books

-   [Introduction to Algorithms](https://edutechlearners.com/download/Introduction_to_algorithms-3rd%20Edition.pdf) by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein
-   [Competitive Programming 3](http://www.sso.sy/sites/default/files/competitive%20programming%203_1.pdf) by Steven Halim and Felix Halim
-   [Competitive Programmers Hand Book](https://cses.fi/book/book.pdf) Beginner friendly hand book for competitive programmers.
-   [Data Structures and Algorithms Made Easy](https://github.com/Amchuz/My-Data-Structures-and-Algorithms-Resources/raw/master/Books/Data%20Structures%20and%20Algorithms%20-%20Narasimha%20Karumanchi.pdf) by Narasimha Karumanchi
-   [Learning Algorithms Through Programming and Puzzle Solving](https://github.com/Amchuz/My-Data-Structures-and-Algorithms-Resources/raw/master/Books/Learning%20Algorithms%20Through%20Programming%20and%20Puzzle%20Solving.pdf) by Alexander Kulikov and Pavel Pevzner

#### Coding practice

#### Courses

-   [Master the Coding Interview: Big Tech (FAANG) Interviews](https://academy.zerotomastery.io/p/master-the-coding-interview-faang-interview-prep) Course by Andrei and his team.
-   [Common Python Data Structures](https://realpython.com/python-data-structures) Data structures are the fundamental constructs around which you build your programs. Each data structure provides a particular way of organizing data so it can be accessed efficiently, depending on your use case. Python ships with an extensive set of data structures in its standard library.
-   [Fork CPP](https://www.geeksforgeeks.org/fork-cpp-course-structure) A good course for beginners.
-   [EDU](https://codeforces.com/edu/course/2) Advanced course.
-   [C++ For Programmers](https://www.udacity.com/course/c-for-programmers--ud210) Learn features and constructs for C++.

#### Guides

### **_space_**

> _The space complexity represents the memory consumption of a data structure. As for most of the things in life, you can’t have it all, so it is with the data structures. You will generally need to trade some time for space or the other way around._

### _time_

> _The time complexity for a data structure is in general more diverse than its space complexity._

### _Several operations_

> _In contrary to algorithms, when you look at the time complexity for data structures you need to express it for several operations that you can do with data structures. It can be adding elements, deleting elements, accessing an element or even searching for an element._

### _Dependent on data_

> _Something that data structure and algorithms have in common when talking about time complexity is that they are both dealing with data. When you deal with data you become dependent on them and as a result the time complexity is also dependent of the data that you received. To solve this problem we talk about 3 different time complexity._

-   **The best-case complexity: when the data looks the best**
-   **The worst-case complexity: when the data looks the worst**
-   **The average-case complexity: when the data looks average**

### Big O notation

The complexity is usually expressed with the Big O notation. The wikipedia page about this subject is pretty complex but you can find here a good summary of the different complexity for the most famous data structures and sorting algorithms.

### The Array data structure

![](https://webdevhubcom.files.wordpress.com/2021/03/86116-0qk3uygeqxamrrflr.gif)

### Definition

An Array data structure, or simply an Array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. The simplest type of data structure is a linear array, also called one-dimensional array. From Wikipedia

Arrays are among the oldest and most important data structures and are used by every program. They are also used to implement many other data structures.

_Complexity_  
_Average_  
_Access Search Insertion Deletion_

O(1) O(n) O(1) O(n)

![](https://webdevhubcom.files.wordpress.com/2021/03/b95b2-1-bj2hu-czo2kuzu4x5a53g.png)

indexvalue0 … this is the first value, stored at zero position

1.  The index of an array **runs in sequence**

2.  This could be useful for storing data that are required to be ordered, such as rankings or queues

3.  In JavaScript, array’s value could be mixed; meaning value of each index could be of different data, be it String, Number or even Objects

### 2. Objects

Think of objects as a logical grouping of a bunch of properties.

Properties could be some variable that it’s storing or some methods that it’s using.

I also visualize an object as a table.

The main difference is that object’s “index” need not be numbers and is not necessarily sequenced.

![](https://webdevhubcom.files.wordpress.com/2021/03/c8daa-1kvzkd2zrgea_47igw8hq8g.png)

### The Hash Table

![](https://webdevhubcom.files.wordpress.com/2021/03/bd913-0avbxlafocsv6vsl5.gif)

![](https://cdn-images-1.medium.com/max/800/0*3GJiRoLyEoZ_aIlO)

### _Definition_

> _A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values. A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. From Wikipedia_

Hash Tables are considered the more efficient data structure for lookup and for this reason, they are widely used.

Complexity  
Average  
Access Search Insertion Deletion

-   O(1) O(1) O(1)

> _The code_

Note, here I am storing another object for every hash in my Hash Table.

### The Set

### Sets

Sets are pretty much what it sounds like. It’s the same intuition as Set in Mathematics. I visualize Sets as Venn Diagrams.

![](https://webdevhubcom.files.wordpress.com/2021/03/803cd-0aiqljh9p8baw9tne.png)

![](https://cdn-images-1.medium.com/max/800/0*gOE33ANZP2ujbjIG)

### _Definition_

> _A Set is an abstract data type that can store certain values, without any particular order, and no repeated values. It is a computer implementation of the mathematical concept of a finite Set. From Wikipedia_

The Set data structure is usually used to test whether elements belong to set of values. Rather then only containing elements, Sets are more used to perform operations on multiple values at once with methods such as union, intersect, etc…

Complexity  
Average  
Access Search Insertion Deletion

-   O(n) O(n) O(n)

> _The code_

### The Singly Linked List

![](https://webdevhubcom.files.wordpress.com/2021/03/5081e-0fls64rv-xq19avca.gif)

### _Definition_

> _A Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence._

Linked Lists are among the simplest and most common data structures because it allows for efficient insertion or removal of elements from any position in the sequence.

Complexity  
Average  
Access Search Insertion Deletion  
O(n) O(n) O(1) O(1)

> _The code_

### The Doubly Linked List

![](https://webdevhubcom.files.wordpress.com/2021/03/6878a-0tqxir-l_itig3wp-.gif)

### _Definition_

> _A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes. From Wikipedia_

Having two node links allow traversal in either direction but adding or removing a node in a doubly linked list requires changing more links than the same operations on a Singly Linked List.

Complexity  
Average  
Access Search Insertion Deletion  
O(n) O(n) O(1) O(1)

> _The code_

### The Stack

![](https://webdevhubcom.files.wordpress.com/2021/03/c2742-0qsjyw-lvfo22ecle.gif)

### _Definition_

> _A Stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a Stack gives rise to its alternative name, LIFO (for last in, first out). From Wikipedia_

A Stack often has a third method peek which allows to check the last pushed element without popping it.

Complexity  
Average  
Access Search Insertion Deletion  
O(n) O(n) O(1) O(1)

> _The code_

### The Queue

![](https://webdevhubcom.files.wordpress.com/2021/03/cea0c-0yvfux5tkp7-v0p7v.gif)

### _Definition_

> _A Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal operations are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the Queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the Queue will be the first one to be removed._

As for the Stack data structure, a peek operation is often added to the Queue data structure. It returns the value of the front element without dequeuing it.

Complexity  
Average  
Access Search Insertion Deletion  
O(n) O(n) O(1) O(n)

> _The code_

### The Tree

![](https://cdn-images-1.medium.com/max/800/0*yUiQ-NaPKeLQnN7n)

### _Definition_

> _A Tree is a widely used data structure that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node. A tree data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the “children”), with the constraints that no reference is duplicated, and none points to the root node. From Wikipedia_

Complexity  
Average  
Access Search Insertion Deletion  
O(n) O(n) O(n) O(n)  
To get a full overview of the time and space complexity of the Tree data structure, have a look to this excellent Big O cheat sheet.

![](https://webdevhubcom.files.wordpress.com/2021/03/085ca-1dcdqib6xqbjcrfrz12bwqa.png)

> _The code_

### The Graph

![](https://webdevhubcom.files.wordpress.com/2021/03/f40d4-0q31ml1kjfwlizw3l.gif)

### _Definition_

> _A Graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected Graph or a set of ordered pairs for a directed Graph. These pairs are known as edges, arcs, or lines for an undirected Graph and as arrows, directed edges, directed arcs, or directed lines for a directed Graph. The vertices may be part of the Graph structure, or may be external entities represented by integer indices or references._

-   A graph is **any** collection of nodes and edges.
-   Much more relaxed in structure than a tree.
-   It doesn’t need to have a root node (not every node needs to be accessible from a single node)
-   It can have cycles (a group of nodes whose paths begin and end at the same node)
-   Cycles are not always “isolated”, they can be one part of a larger graph. You can detect them by starting your search on a specific node and finding a path that takes you back to that same node.
-   Any number of edges may leave a given node
-   A Path is a sequence of nodes on a graph

### Cycle Visual

![](https://webdevhubcom.files.wordpress.com/2021/03/47241-1dn1bqcdxdfg4fcvsz6uara.png)

A Graph data structure may also associate to each edge some edge value, such as a symbolic label or a numeric attribute (cost, capacity, length, etc.).

Representation  
There are different ways of representing a graph, each of them with its own advantages and disadvantages. Here are the main 2:

Adjacency list: For every vertex a list of adjacent vertices is stored. This can be viewed as storing the list of edges. This data structure allows the storage of additional data on the vertices and edges.  
Adjacency matrix: Data are stored in a two-dimensional matrix, in which the rows represent source vertices and columns represent destination vertices. The data on the edges and vertices must be stored externally.

Graph

> _The code_

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

### Or Checkout my personal Resource Site:

#### [CODEX](http://medium.com/codex)

#### VSCode Extensions that are indispensable in JavaScript development

### Back and Forth

-   Adds backwards and forwards buttons to the toolbar in VSCode
-   <a href="https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth" class="uri">https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth</a>

![](https://cdn-images-1.medium.com/max/800/0*hsbombFMlu6yICjz.gif)

---

### Bracket Pair Colorizer 2

-   Colors matching brackets so it’s easier to tell which brackets match.
-   <a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2" class="uri">https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2</a>

![](https://cdn-images-1.medium.com/max/800/0*MT-BCptwnKGYk1Pk.png)

---

### Babel Javascript

-   A better syntax highlighter for JavaScript code
-   <a href="https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel" class="uri">https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel</a>

![](https://cdn-images-1.medium.com/max/800/0*b5t9hd_8soPq26pq.png)

---

### Code Runner

-   Puts a “Play” button in your toolbar and let’s you run code files by pressing it.
-   <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner" class="uri">https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner</a>

### Code Runner

> Run code snippet or code file for multiple languages: **C, C++, Java, JavaScript, PHP, Python, Perl, Perl 6, Ruby, Go, Lua, Groovy, PowerShell, BAT/CMD, BASH/SH, F\# Script, F\# (.NET Core), C\# Script, C\# (.NET Core), VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml Script, R, AppleScript, Elixir, Visual Basic .NET, Clojure, Haxe, Objective-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Free Pascal, Haskell, Nim, D, Lisp, Kit, V, SCSS, Sass, CUDA, Less, Fortran**, and custom command

### Features

> Run code file of current active Text Editor

> Run code file through context menu of file explorer

> Run selected code snippet in Text Editor

> Run code per Shebang

> Run code per filename glob

> Run custom command

> Stop code running

> View output in Output Window

> Set default language to run

> Select language to run

> Support REPL by running code in Integrated Terminal

### Usages

#### To run code:

-   use shortcut `Ctrl+Alt+N`
-   or press `F1` and then select/type `Run Code`,
-   or right click the Text Editor and then click `Run Code` in editor context menu
-   or click `Run Code` button in editor title menu
-   or click `Run Code` button in context menu of file explorer
-   To stop the running code:
-   use shortcut `Ctrl+Alt+M`
-   or press `F1` and then select/type `Stop Code Run`
-   or right click the Output Channel and then click `Stop Code Run` in context menu

![](https://cdn-images-1.medium.com/max/800/0*_RtB2WiNuXhAJnuJ.gif)

-   To select language to run, use shortcut `Ctrl+Alt+J`, or press `F1` and then select/type `Run By Language`, then type or select the language to run: e.g `php, javascript, bat, shellscript...`

![](https://cdn-images-1.medium.com/max/800/0*lCmaRsgOMINbFJps.gif)

-   To run custom command, then use shortcut `Ctrl+Alt+K`, or press `F1` and then select/type `Run Custom Command`

---

### Color Highlight

-   Changes the background color of hex colors in your code to show you what color it actually is
-   <a href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight" class="uri">https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight</a>

![](https://cdn-images-1.medium.com/max/800/0*9K5_QPPvfozmuTWH)

### Git Graph

-   Shows you a graphical representation of your git branches and commits
-   <a href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph" class="uri">https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph</a>

![](https://cdn-images-1.medium.com/max/800/0*eAKBnl6yXJgXZXvZ.gif)

---

### GitLens

-   Adds tons of cool features to vscode, like viewing commits inline inside the editor
-   <a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" class="uri">https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens</a>

Here are just some of the **features** that GitLens provides,

-   effortless [**revision navigation**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#revision-navigation- 'Jump to Revision Navigation') (backwards and forwards) through the history of a file
-   an unobtrusive [**current line blame**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#current-line-blame- 'Jump to Current Line Blame') annotation at the end of the line showing the commit and author who last modified the line, with more detailed blame information accessible on [**hover**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#hovers- 'Jump to Hovers')
-   [**authorship code lens**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#git-code-lens- 'Jump to Git Code Lens') showing the most recent commit and number of authors at the top of files and/or on code blocks
-   a [**status bar blame**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#status-bar-blame- 'Jump to Status Bar Blame') annotation showing the commit and author who last modified the current line
-   on-demand **file annotations** in the editor gutter, including
-   [**blame**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#gutter-blame- 'Jump to Gutter Blame') — shows the commit and author who last modified each line of a file
-   [**changes**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#gutter-changes- 'Jump to Gutter Changes') — highlights any local (unpublished) changes or lines changed by the most recent commit
-   [**heatmap**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#gutter-heatmap- 'Jump to Gutter Heatmap') — shows how recently lines were changed, relative to all the other changes in the file and to now (hot vs. cold)
-   many rich **Side Bar views**
-   a [**_Commits_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#commits-view- 'Jump to the Commits view') to visualize, explore, and manage Git commits
-   a [**_Repositories_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#repositories-view- 'Jump to the Repositories view') to visualize, explore, and manage Git repositories
-   a [**_File History_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#file-history-view- 'Jump to the File History view') to visualize, navigate, and explore the revision history of the current file or just the selected lines of the current file
-   a [**_Line History_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#line-history-view- 'Jump to the Line History view') to visualize, navigate, and explore the revision history of the selected lines of the current file
-   a [**_Branches_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#branches-view- 'Jump to the Branches view') to visualize, explore, and manage Git branches
-   a [**_Remotes_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#remotes-view- 'Jump to the Remotes view') to visualize, explore, and manage Git remotes and remote branches
-   a [**_Stashes_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#stashes-view- 'Jump to the Stashes view') to visualize, explore, and manage Git stashes
-   a [**_Tags_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#tags-view- 'Jump to the Tags view') to visualize, explore, and manage Git tags
-   a [**_Contributors_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#contributors-view- 'Jump to the Contributors view') to visualize, navigate, and explore contributors
-   a [**_Search & Compare_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#search--compare-view- 'Jump to the Search & Compare view') to search and explore commit histories by message, author, files, id, etc, or visualize comparisons between branches, tags, commits, and more
-   a [**Git Command Palette**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#git-command-palette- 'Jump to the Git Command Palette') to provide guided (step-by-step) access to many common Git commands, as well as quick access to
-   [commits](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#quick-commit-access- 'Jump to Quick Commit Access') — history and search
-   [stashes](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#quick-stash-access- 'Jump to Quick Stash Access')
-   [status](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#quick-status-access- 'Jump to Quick Status Access') — current branch and working tree status
-   a user-friendly [**interactive rebase editor**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#interactive-rebase-editor- 'Jump to the Interactive Rebase Editor') to easily configure an interactive rebase session
-   [**terminal links**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#terminal-links- 'Jump to Terminal Links') — `ctrl+click` on autolinks in the integrated terminal to quickly jump to more details for commits, branches, tags, and more
-   rich [**remote provider integrations**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#remote-provider-integrations- 'Jump to Remote Provider Integrations') — GitHub, GitLab, Bitbucket, Azure DevOps
-   issue and pull request auto-linking
-   rich hover information provided for linked issues and pull requests (GitHub only)
-   associates pull requests with branches and commits (GitHub only)
-   many [**powerful commands**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#powerful-commands- 'Jump to Powerful Commands') for navigating and comparing revisions, and more
-   user-defined [**modes**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#modes- 'Jump to Modes') for quickly toggling between sets of settings
-   and so much more ![😁](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f601.svg)

### Features

#### Revision Navigation

![](https://cdn-images-1.medium.com/max/800/0*ZznZkr2qdB6qT2sX.gif)

---

### Markdown All in One

-   Everything you need to help you write markdown files in VSCode
-   <a href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one" class="uri">https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one</a>

### Features

### Keyboard shortcuts

![](https://cdn-images-1.medium.com/max/800/0*_usOVMNpDjj4nqKP.gif)

(Typo: multiple words)

![](https://cdn-images-1.medium.com/max/800/0*Eqbbj4t2090z7JLj.gif)

See full key binding list in the [keyboard shortcuts](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one#keyboard-shortcuts-1) section

### Table of contents

![](https://cdn-images-1.medium.com/max/800/0*T1aP3qXU9HHLvrkZ.png)

-   Run command “**Create Table of Contents**” to insert a new table of contents.
-   The TOC is **automatically updated** on file save by default. To disable, please change the `toc.updateOnSave` option.
-   The **indentation type (tab or spaces)** of TOC can be configured per file. Find the setting in the right bottom corner of VS Code’s status bar.
-   **_Note_**: Be sure to also check the `list.indentationSize` option.
-   To make TOC **compatible with GitHub or GitLab**, set option `slugifyMode` accordingly
-   Three ways to **control which headings are present** in the TOC:
-   Click to expand
-   Easily add/update/remove **section numbering**

![](https://cdn-images-1.medium.com/max/800/0*wqtYh9oFLU1GbfLE.gif)

-   _In case you are seeing_ **_unexpected TOC recognition_**\_, you can add a\_ `_<!-- no toc -->_` _comment above the list_.

### List editing

![](https://cdn-images-1.medium.com/max/800/0*0ipp3m0zajfTJlQR.gif)

![](https://cdn-images-1.medium.com/max/800/0*LLQYEmYRbIsx3EkR.gif)

![](https://cdn-images-1.medium.com/max/800/0*eoAN8X-cP9iM6l3Y.gif)

**_Note_**: By default, this extension tries to determine indentation size for different lists according to [CommonMark Spec](https://spec.commonmark.org/0.29/#list-items). If you prefer to use a fixed tab size, please change the `list.indentationSize` setting.

### Print Markdown to HTML

-   Commands `Markdown: Print current document to HTML` and `Markdown: Print documents to HTML` (batch mode)
-   **Compatible** with other installed Markdown plugins (e.g. [Markdown Footnotes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes)) The exported HTML should look the same as inside VSCode.
-   Use comment `<!-- title: Your Title -->` to specify a title of the exported HTML.
-   Plain links to `.md` files will be converted to `.html`.
-   It’s recommended to print the exported HTML to PDF with browser (e.g. Chrome) if you want to share your documents with others.

### GitHub Flavored Markdown

-   Table formatter

![](https://cdn-images-1.medium.com/max/800/0*6yKsV2SWwPFdGHZT.gif)

-   **_Note_**: The key binding is Ctrl + Shift + I on Linux. See [Visual Studio Code Key Bindings](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference).
-   Task lists

### Math

![](https://cdn-images-1.medium.com/max/800/0*6NkKUCywNSSMsbV2.png)

Please use [Markdown+Math](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath) for dedicated math support. Be sure to disable `math.enabled` option of this extension.

### Auto completions

Tip: also support the option `completion.root`

-   Images/Files (respects option `search.exclude`)

![](https://cdn-images-1.medium.com/max/800/0*0yN3cZ6xsl6c_oP5.png)

-   Math functions (including option `katex.macros`)

![](https://cdn-images-1.medium.com/max/800/0*ZYCqFh0MHuE153Ed.png)

---

### Mocah Test Explorer

-   Lets you run mocha tests in the VSCode sidebar
-   <a href="https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter" class="uri">https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter</a>

### Features

### Import command

![](https://cdn-images-1.medium.com/max/800/0*1ks3u0MsnG96JUy6.gif)

    {   "npm-intellisense.importES6": true, "npm-intellisense.importQuotes": "'",   "npm-intellisense.importLinebreak": ";\r\n",    "npm-intellisense.importDeclarationType": "const",}

### Import command (ES5)

![](https://cdn-images-1.medium.com/max/800/0*srfRIxEbcL_yxBey.gif)

    {   "npm-intellisense.importES6": false,    "npm-intellisense.importQuotes": "'",   "npm-intellisense.importLinebreak": ";\r\n",    "npm-intellisense.importDeclarationType": "const",}

---

### NPM Intellisense

-   Autocomlpetes npm module names when you are typing require or import.
-   <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense" class="uri">https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense</a>

### Features

### Import command

![](https://cdn-images-1.medium.com/max/800/0*o3KIizXjd5BfnZzR.gif)

    {   "npm-intellisense.importES6": true, "npm-intellisense.importQuotes": "'",   "npm-intellisense.importLinebreak": ";\r\n",    "npm-intellisense.importDeclarationType": "const",}

### Import command (ES5)

![](https://cdn-images-1.medium.com/max/800/0*pCEaJc8pJmJi_dMk.gif)

    {   "npm-intellisense.importES6": false,    "npm-intellisense.importQuotes": "'",   "npm-intellisense.importLinebreak": ";\r\n",    "npm-intellisense.importDeclarationType": "const",}

### Scan devDependencies

Npm intellisense scans only dependencies by default. Set scanDevDependencies to true to enable it for devDependencies too.

    {   "npm-intellisense.scanDevDependencies": true,}

---

### Path Intellisense

-   Auto completes filesystem paths when you are typing them
-   <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" class="uri">https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense</a>

### Usage

![](https://cdn-images-1.medium.com/max/800/0*if44ZSUgw2MDJiFl.gif)

### Commerical Extensions

### Quokka.js

-   A paid extension that does amazing things by showing the results of your javascript inline inside the editor window
-   <a href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode" class="uri">https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode</a>

### [Quokka.js](https://quokkajs.com/) Visual Studio Code Extension

Quokka.js is a developer productivity tool for rapid JavaScript / TypeScript prototyping. Runtime values are updated and displayed in your IDE next to your code, as you type.

![](https://cdn-images-1.medium.com/max/800/0*xYo5Z7lROn4tLQu9.gif)

### If you found this guide helpful feel free to checkout my other articles:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

### OR GitHub/gists where I host similar content:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

### Or Checkout my personal Resource Site:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="uri">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

#### [CODEX](http://medium.com/codex)

#### **This installment is going to be the least technically demanding thus far however these questions are a more realistic reflection on what a junior developer could be asked by a company with reasonable hiring practices…**

![](https://cdn-images-1.medium.com/max/800/1*dTDrkYZJYhASUP2TTknAgA.png)

> **… Speaking of which … stay tuned till the end of the article or skip down to it for a list of web development companies with reportedly fair hiring practices!**

#### Here’s parts one and two; they’re both much more technical in nature than this one!

[View at Medium.com](https://medium.com/star-gazers/the-web-developers-technical-interview-e347d7db3822)[View at Medium.com](https://medium.com/star-gazers/the-web-developers-technical-interview-e347d7db3822)

---

### ![👋🏻](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f44b-1f3fb.svg) Behavioral & Cultural Interview Questions

> _Software engineer interviewers ask behavioral/cultural questions to evaluate interviewee’s soft skills, and also to decide whether the candidate is a cultural fit. Make sure you’ve prepared great answers to these interview questions._

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Tell me about yourself

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)====&gt;_**“Tell me about yourself” is one of the most common and important interview questions. However, it can be daunting, as it’s one you need to get right. After all, not only is it your first impression on the interviewer, but you also need to be simultaneously professional and authentic when answering it.

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**So how can you give a good answer without oversharing? To help you structure your answer, we’ll give you a rough guideline: start with a short introduction, talk about the present, recount the past, and mention your future goals.

![](https://cdn-images-1.medium.com/max/800/0*E6ldmJAPG95McXVB)

---

### What are some side projects you’re currently working on?

_Current Experience_

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**\_Outline the role you’re currently in, your responsibilities, and your achievements (without reciting your resume)\_

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**\_Highlight what you’re most passionate about (i.e. working with PMs to perfect product specs, discussing with colleagues about different tech stacks, helping others excel in their jobs and career)\_

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**\_Recount one or two job-related projects and/or situations that map onto the job you’re applying to (i.e. collaborating with designers, working with legacy code, implementing best-practices, introducing new tech stacks, mentoring your colleagues)\_

### Past Experience

> **Now it’s time to highlight your skills a little:**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Selectively highlight one high-impact (preferably quantifiable) project you were involved with for each job

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Highlight the hard and soft skills you learned from your past working experiences

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Emphasize the initiatives you took to improve the company’s work flow (i.e. propose new flow to streamline sprints) or your own skillsets (i.e. engaging in hackathon with colleagues or friends)

### Future Expectations

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Convey what you hope to achieve and learn from the new job

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Detail products, projects, features, or initiatives you can imagine yourself help kick off and lead in the company

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Tell me what a productive day at work looks like to you

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**This question may not appear in every interview, but when they do, it’s important for you to highlight your organizational and prioritization skills. When hiring managers ask this question, they want to know:

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Whether you’re a proactive communicator and a good planner of your time

### How you strike a balance between multiple ongoing projects

D**_escribe one or two instances where you had several projects running simultaneously and how you managed to prioritize different tasks, make progress, meet milestones, and work on iterations based on feedback._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**How you deliver quality work with limited time

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**When there’s limited time and multiple projects going on, you may not be able to give 100% to the projects at hand. Let the interviewers know:

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**How you decide which tasks should be prioritized

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**How you negotiate deadlines and milestones with stakeholders

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**How you ensure all projects will be delivered with acceptable quality

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**At what milestones you believe it’s ok to deliver something “less than perfect”

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**How you decide when to go back and improve the “minimum viable projects” delivered earlier in the project’s timeline

### Professional Skills

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Will you excel in this job? Are you passionate about this job? It’s time to show how. For the first question, highlight some of your professional abilities:

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Industry experience

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Technical skills

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Soft skills

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Key accomplishments

#### For the second question, showcase your excitement for the job. Hiring managers want to see your excitement for these reasons:

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)1&gt;_**Excitement will fuel your performance

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)2&gt;_**Passion will confirm that you’re interested in this job

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Eagerness will help you get through challenges at work

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Company culture and shared values

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Do you know the company’s culture and will you be a good fit? Here are some culture-related points you could cover in your answer:

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**You’re attracted to the company’s general reputation

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**You’re inspired by a specific leader in the company

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**You’re passionate about the company’s products and services

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**You’re onboard with the company’s initiatives (community engagement, public endorsements, etc.)

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**You admire the company’s culture. Here are some specific examples:

---

### Commitment to the company

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Are you passionate about the company and will you stay committed to this company? If the interviewer already asked you “Where do you see yourself in 5 years?” then you don’t have to stress too much about showing your long-term commitment when answering this question. However, if you haven’t had the opportunity to show your commitment to the company, the most organic way to show your commitment is to talk about your long term plans in the company. Here are some things you can talk about:_**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Projects you want to start

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Potential directions you think the company can go in

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**The different products/teams you want to contribute to

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Processes you’d like to participate in improving

### Why should we hire you?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Ultimately, every single question interviewers ask you is related to this overarching question: “Why should we hire you?” Interviewers want to know, as confidently as possible, that you will be a good hire. Therefore, your answer should confirm that you’ll be a good hire.

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Unlike the more specific questions we’ve outlined above, this question is a generic question that requires a concise but powerful answer. Think about this as your elevator pitch — you should be able to sell yourself to the interview within a matter of minutes.

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**To come up with your elevator pitch, you’ll need to do some planning and consolidation.

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Here are some guiding questions for you to kickoff your brainstorming sessions:

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**What are the most important qualifications for this position from the company’s perspective?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**What are my strong suits and how do they set me apart from others?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**What are my most monumental accomplishments?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Why are you the best person for this job?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Consolidate and practice your pitch

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Combine your answers in prose form to make sure each point flows to the next smoothly

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Check to make sure your answer sets you apart from other candidates

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)!!!!!!!_**Practice, practice, and practice, but DO NOT TRY TO MEMORIZE YOUR PITCH!!!!!!!!!

### ![📝](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f4dd.svg) Interview Etiquette & Other Tips

Nailing an interview takes more than just knowing how to answer common interview questions. You’ll also need to prepare questions of your own, think about salary, and get your communications right. Here’s how.

#### Questions to ask in an interview

⮕As the job seeker, it’s normal to feel like you’re being interrogated during interviews. However, at its core, an interview is a conversation, and should be a two-way interaction. As the interviewee, you need to stay engaged and ask thoughtful questions.

⮕By asking questions, you’re expressing your genuine curiosity towards the company. This helps companies know that you’re serious about them. Additionally, it also helps you evaluate whether the job and/or the company is really what you’re looking for.

⮕There are fantastic resources out there with more than a dozen questions you can ask interviewers. Here, we’ll provide a few that we think are essential to help you gain deeper understandings about the role, company, and your future within the company:

⮕The job and cross-team communication

⮕The company’s values and working culture

⮕What are some shared qualities and characteristics among your employees?

⮕What’s your favorite part about working at the company?

⮕What’s your least favorite part about working at the company?

Professional growth opportunities

⮕Are there multiple product/service teams in the company? Can engineers apply to join a different team? What does the process look like?

⮕Are there professional development courses and training available?

⮕Do senior engineers and engineering leads usually get promoted from within the company?

### Closing questions and next steps

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Is there anything unclear or concerning about my background that I can help clarify?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**What are the next steps in the interview process?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Is there anything else I can provide you with that would be helpful?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**How to answer salary expectations?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**“What are you salary expectations?” can be a daunting question. If talking about money wasn’t uncomfortable enough already, most job seekers worry that proposing the “wrong number” would cost them the job — or land them a job offer with a disappointing salary. Not great.

---

### Follow up ?????

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Depending on how many rounds of interviews you’ve gone through, you may feel differently about how close you are to getting the job. The closer you get to the end of the hiring process, the more likely it is for you to start feeling anxious due to higher expectations. As a result, you may be eager to follow up with the hiring manager regarding your interview results. With that said, there’s a fine line between showing your eager attitude and coming off as desperate.

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Before we get to the types of follow up emails you should send out, make sure to ask the hiring manager about when you can expect to hear back from them about next steps. This information will help you decide when it’s appropriate to follow up down the line.

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**There are four types of follow up emails you should send at different times after the interview: Thank you email, checking-in email, second follow up email, final follow up email.

#### Thank you email

**A thank you email should be sent out on the same day of the interview or one day after your interview. The main purpose of this email is to show your excitement and appreciation. This email should be short and sweet and should include:**

#### A thank you note for their time

⮕**A brief mention of the specific job you interviewed for**

⮕**A brief note of what you found most impressive about the company**

⮕**One or two things you learned about the organization**

⮕**One sentence about how you’re excited you are to contribute in a specific way**

![](https://cdn-images-1.medium.com/max/800/0*tZNLWVUGmj2tJK3j.jpg)

---

### **_Technical interview :_**

#### ⮕**_questions examine a candidate’s thought processes and assess what approaches they adopt to solve problems. The most common end-to-end software development questions are listed below._**

### Here’s the repo that I use to practice my technical chops for interviews:

[View at Medium.com](https://medium.com/star-gazers/the-web-developers-technical-interview-e347d7db3822)

### 1. Development

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Describe the process you used for a recent project, from requirements to delivery. Does your team prefer using Agile or Waterfall? Any pros and cons?_**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg) In answering this question, you need to show your planning, process, and communication/collaboration skills. Think in advance about a suitable project where your contributions cover all these bases._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)If you can, it’s best to choose to describe an Agile project you worked on, as organizations whether they use a Waterfall or Agile methodology, are keen to work with developers experienced in Agile._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg) Ideally, share a project in which you worked with a bigger team._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg) Outline the components of the project and what role you played._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg) Highlight any interactions with other teams and the process for handover and collaboration._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Highlight any interactions with other teams and the process for handover and collaboration._**

### 2. Based on your experience in this project, specify your favorite and least favorite part of this type of collaboration.

R**_emember to keep positive because the interviewers are always looking for constructive answers._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)You can specify cutting edge collaboration tools and techniques and/or methodologies that you already know the company employs in their own workflows._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)For the least favorite parts, don’t just list the downsides and failures, but also mention what you’ve learned from it and how you would improve._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg) Ensure that you come across humbled from the failures, not exasperated and that you know better than everyone else — even if you truly feel this way! Explain how you tried to positively encourage your team to correct the course rather than staying silent and going with a consensus majority._**

### **_3. Based on the project, what programming languages / tools / services did you use? And why did you choose them?_**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg) Questions like this are designed to allow you to showcase your way of thinking. The interviewer is looking to hear your ability to make choices based on rational decisions — so make sure that you show that you can do this!_**

> **_To begin with, give an example of a project in which you had the most ownership or you had the greatest sense of achievement/efficiency/effectiveness from the toolchain used._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg) Next, describe the goal of the project, and briefly go through your responsibilities when it came to the toolchain decision-making process. Within Agile work practices, it’s usually a team effort to decide the best programming languages/tools/services are the best fit for the project, within customer requirements. Outline the consultation process you went through with both the customer and your team to arrive at the best solutions._**

### 4. Describe the biggest toolchain-related challenge you encountered in the project:

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Outline the situation, the goal you expected, and the reason why there was a challenge._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Share the toolchain you used when you encountered the problem, then other technologies and tools you applied to help solve it, if applicable. Ensure to note whether there was a full tool pivot or you managed to build onto an existing library (or something similar) to achieve the end goal._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Remember: the most important thing is not what you ultimately used, but how many options you referred to during the process, and which metrics you adopted to decide which tech to go for. Remember to share the pros and cons of your decision, and if, looking back now, whether you would do it differently._**

### 5. How would you design this system for scale?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)First of all, the interviewer would like to know the traffic level we’re expecting: 1,000, 100,000, or 10 million users per second? Think about the data expectations for each system user, database connections (blocking/nonblocking actions), downtime specifics, and cloud considerations (if any)._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)List the potential problems that might occur when trying to scale. Different traffic levels may have different problems, so make sure you think this through, and decide the priorities of the problems that you should solve. Many codebases are not built for scale, so note code changes that might need to occur, rather than just infrastructure expectations._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Different traffic levels may have different system architectures. List the options you think best fit your scenario and explain why you choose them. Many apps utilize a stripped-back product (which can be achieved through system architecture) when high traffic levels affect systems, rather than crashing the product completely or users experiencing unacceptable wait times._**

### 6. Testing: What is your process to test a code when developing a software or application? How do you decide the scope of your test case?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)First, do your groundwork to ensure that you thoroughly understand the different testing types. Do you know your unit testing from your regression testing from your user acceptance testing? If you need to brush up, check out this great resource._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Once you’ve got that on lock, it’s time to share a project that you’ve tested thoroughly before._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Remember to separate the project into different sections. Each section should apply the testing type that fits its characteristics. Describe the goals of different testing types, and also introduce the library/service you used for the test. (For bonus points: explain the pros and cons of the library/service and whether it was your decision to choose that particular suite.)_**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)It makes sense at this point to include documentation (and particularly inline documentation) you use that helps clarify functions/issues so that testing goes smoothly._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)You may also mention a project you were involved in where testing was not well conducted and how you would — or did — go about fixing the issues._**

### Monitoring

### 7. What kind of tools / services do you use for logging? What kind of data will you log? And what’s the next step when you get the log?

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Time for some details! When answering this question, give an example of a project that you’ve monitored before._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Explain what information you logged and what questions it answered._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Please do not just describe the data format but also give the reason why you decided to extract this data._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Describe the reporting process and any associated tools used._**

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Some questions to think about to help you structure your answer, and nail your response:_**

---

### What to avoid

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Complaining about having to handle the problem

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Showing how annoyed you were at the problem

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Pointing fingers at others for the problem

> **_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)_**Talking ill of your bosses or coworkers

> **\_![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)\_Keep in mind that your interviewer is not only trying to get a glimpse of your past, but to gain an understanding of how you might react to challenges should they hire you. Therefore, when you’re choosing your scenario, try to pick one that may be applicable in your new work setting as well.**

---

### NOW; Here’s some for you guys to answer in the comments!

#### 8. Which logging services have you researched and used before?

#### 9. Why did you choose or look into each particular logging service?

#### 10. Was your decision because of the scale, the features, or the size of the community?

#### 11. In what scenarios did you check these logs? Was it scheduled daily/weekly/monthly or as an on-demand activity?

#### 12. What information would the data be transformed into? Was it for development, business, or customer decision-making?

#### 13. What information would the data be transformed into? Was it for development, business, or customer decision-making?

---

<a href="https://gist.github.com/bgoonz/15a638abb3b4026abc8e5ca05f8d90f1" class="uri">https://gist.github.com/bgoonz/15a638abb3b4026abc8e5ca05f8d90f1</a>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

[View at Medium.com](https://medium.com/star-gazers/the-web-developers-technical-interview-e347d7db3822)[View at Medium.com](https://medium.com/star-gazers/the-web-developers-technical-interview-e347d7db3822)

### Or Checkout my personal Resource Site:

[View at Medium.com](https://medium.com/star-gazers/the-web-developers-technical-interview-e347d7db3822)

#### Translation if you read this today (3/21/2021) it will be exceedingly short… because it’s just gonna accumulate entries as I learn of them over time.

![](https://cdn-images-1.medium.com/max/800/0*YcyGivGEhdeVNAUk.jpg)

---

### 1.) Stack Overflow for Teams is now free forever for up to 50 users

[**_https://stackoverflow.blog/2021/03/17/stack-overflow-for-teams-is-now-free-forever-for-up-to-50-users/_**](https://stackoverflow.blog/2021/03/17/stack-overflow-for-teams-is-now-free-forever-for-up-to-50-users/)

### 2.) <a href="https://webflow.com/" class="uri">https://webflow.com/</a>

2.) <a href="https://webflow.com/" class="uri">https://webflow.com/</a>

<a href="https://webflow.com/" class="uri">https://webflow.com/</a>

#### **A plethora of front-end code playgrounds have appeared over the years. They offer a convenient way to experiment with client-side code and teach/share with others without the hassle of configuring a development environment.**

![](https://cdn-images-1.medium.com/max/800/1*oUZy2IkIQGDbkSVQRGCvKQ.png)

---

### Typical features of these online playgrounds include:

-   **_color-coded HTML, CSS and JavaScript editors_**
-   **_a preview window — many update on the fly without a refresh_**
-   **_HTML pre-processors such as HAML_**
-   **_LESS, SASS and Stylus CSS pre-processing_**
-   **_inclusion of popular JavaScript libraries_**
-   **_developer consoles and code validation tools_**
-   **_sharing via a short URL_**
-   **_embedding demonstrations in other pages_**
-   **_code forking_**
-   **_zero cost (or payment for premium services only)_**
-   **_showing off your coding skills to the world!_**

---

#### The following list is in no particular order and which playground you use is a matter of application and personal taste, they each have their own specialities.

---

### 1.) REPL.IT

### My personal favorite for it’s simplicity, versatility and capabilities.

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)No downloads, no configs, no setups

In your browser. Repl.it runs fully in your browser, so you can get started coding in seconds. No more ZIPs, PKGs, DMGs and WTFs.

> Any OS, any device**_(I’m looking at you chromebook coders)_**. You can use Repl.it on macOS, Windows, Linux, or any other OS .

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Clone, commit and push to any GitHub repo.

Repl from Repo. Get started with any Github repo, right from your browser. Commit and push without touching your terminal.

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)[Markdown Preview](https://blog.replit.com/markdown-preview)

**&gt;A new but fundamentally important feature**

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)[No-setup Unit Testing](https://blog.replit.com/unit-tests)

**&gt;Unit testing is a powerful way to verify that code works as intended and creates a quick feedback loop for development & learning. However, setting up a reproducible unit-testing environment is a time-consuming and delicate affair. Repl.it now features zero-setup unit testing!**

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)[HTTPS by default](https://blog.replit.com/https)

#### In the example below I have 72 solved Javascript Leetcode Problems but REPL.IT can handle almost any language you can think of.

<span class="citation" data-cites="bgoonz/leetcode-level-1">\[https://repl.it/<span class="citation" data-cites="bgoonz/leetcode-level-1">@bgoonz/leetcode-level-1</span>\]</span>(https://repl.it/<span class="citation" data-cites="bgoonz/leetcode-level-1"><span class="citation" data-cites="bgoonz/leetcode-level-1">@bgoonz/leetcode-level-1</span></span>)

### Here’s another one that contains the Repl.it Docs:

<span class="citation" data-cites="bgoonz/replit-docs-1#curriculum/introHTMLCSS.md">\[https://replit.com/<span class="citation" data-cites="bgoonz/replit-docs-1">@bgoonz/replit-docs-1</span>\#curriculum/introHTMLCSS.md\]</span>(https://replit.com/<span class="citation" data-cites="bgoonz/replit-docs-1#curriculum/introHTMLCSS.md"><span class="citation" data-cites="bgoonz/replit-docs-1">@bgoonz/replit-docs-1</span>\#curriculum/introHTMLCSS.md</span>)

---

### JS-Fiddle

> [**_jsFiddle_**](https://jsfiddle.net/) **_is a cloud-based JavaScript code playground that allows web developers to tweak their code and see the results of this tweaking in real time. The editor supports not only JavaScript and its variants but also HTML and CSS code, and it further supports popular JavaScript frameworks, such as jQuery, AngularJS, ReactiveJS and D3. The ad-supported site is also completely free to use._**

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Entering and running code

> JSFiddle has the notion of panels (or tabs if you switch into the tabbed layout), there are 4 panels, 3 where you can enter code, and 1 to see the result.

-   **HTML** — structure code, no need to add `body` `doctype` `head`, that’s added automatically
-   **CSS** — styles. You can switch pre-pocessor to SCSS
-   **JavaScript** — behavior. There are many frameworks and code pre-processors you can use

Once you enter code, just hit **Run** in the top actions bar, and the fourth panel with results will appear.

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)Saving and Forking code

-   **Save** / **Update** will do what you think, it’ll save a new fiddle or update an existing one (and add a version number to it)
-   **Fork** will split out an existing fiddle into a new one, starting with version 0

<a href="https://jsfiddle.net/bgoonz/L6082jrs/2/" class="uri">https://jsfiddle.net/bgoonz/L6082jrs/2/</a>

---

### StackBlitz

[StackBlitz](https://stackblitz.com/)

> Dependencies still slip into the install process as dev & sub-dependencies and are downloaded & extracted all the same, resulting in the infamous black hole known as `node_modules`:

![](https://cdn-images-1.medium.com/max/600/0*-6LsqMPgWtP9NSBl.png)

**Dank, relevant meme (pictured Left)**

**This is the crux of what prevents NPM from working natively in-browser. Resolving, downloading, and extracting the hundreds of megabytes (or gigabytes) typical frontend projects contain in their** `**node_modules**` **folder is a challenge browsers just aren’t well suited for. Additionally, this is also why existing server side solutions to this problem have proven to be** [**slow, unreliable**](https://github.com/unpkg/unpkg/issues/35#issuecomment-317128917)

![](https://cdn-images-1.medium.com/max/800/1*sl4vb3fP9-MErkioiCOyKQ.png)

### Then just paste the embed code in an iframe and you’re good to go!

![](https://cdn-images-1.medium.com/max/800/0*PjhrjtInF1dPudtO.png)

> [**_On StackBlitz.com_**](https://stackblitz.com/)**, you can create new projects and get the embed code from the ‘Share’ dropdown link in the top navigation like so:**

### Embed Options

![](https://cdn-images-1.medium.com/max/800/1*6QF4ywBOMVFtS_MukRkLKw.png)

![](https://cdn-images-1.medium.com/max/600/1*5ekSGpNwJ28hI9Aog8V4DQ.png)

> 🡩 **Alternatively, you can also use StackBlitz’s** [**Javascript SDK methods**](https://developer.stackblitz.com/docs/platform/embedding#open-and-embed-stackblitz-projects) **for easily embedding StackBlitz projects on the page & avoid all the hassles of creating/configuring iframes.**

H**ere’s a sample project of mine, it’s a medium clone… _(So Metta)_… feel free to write a post… or don’t …but either way … as you can see… Stack Blitz enables you to write serious web applications in a fraction of the time it would take with a conventional setup.**

---

### Glitch

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)[**_Glitch_**](https://glitch.com/) **provides two project templates that you can use to start creating your app:**

1.  **Classic Website**
2.  **Node.js**

If you know the type of project that you would like to create, [click here to get started!](https://glitch.com/create-project) Or keep reading to learn more about the Classic Website and Node.js templates.

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)**Classic Website**

![](https://cdn-images-1.medium.com/max/800/0*AMVRXebQBuww_n_P.png)

The **Classic Website** template is your starting point for creating a **static** website that includes an index.html page and static HTML, JavaScript, and CSS. Just start typing and your work will be live on the internet! Static websites enjoy unlimited uptime too! This means that your website stays on 24/7 without using your [Project Hours](https://glitch.happyfox.com/kb/article/17/#Uptime).

An existing project will be identified by Glitch as a **static** site if it does not contain one of the following files:

-   **package.json**
-   **requirements.txt**
-   **glitch.json**

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)**Node.js**

![](https://cdn-images-1.medium.com/max/800/0*ppgGuMTHg-YxnImp.png)

If you are looking to build a full-stack JavaScript application, choose the **Node.js** template. This template includes both front-end and back-end code using the popular [Express](https://expressjs.com/) Node.js application framework.

### ![⦾](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26ab.svg)**Here are some other ways to get started on Glitch…**

![](https://cdn-images-1.medium.com/max/800/0*duFOnYTuCHLsfxFi.png)

-   Create an app by [importing a GitHub repo](https://glitch.happyfox.com/kb/article/20-can-i-import-code-from-a-github-repository/).
-   Build an app that integrates with a popular third-party platform or framework, by remixing [one of these starter templates](https://glitch.com/create).

**Still not sure where to start? Check out these categories of community-built apps for inspiration:**

-   [Games](https://glitch.com/@glitch/games)
-   [Bots](https://glitch.com/@glitch/bots)
-   [Music](https://glitch.com/@glitch/music)
-   [Art](https://glitch.com/@glitch/art)
-   [Productivity](https://glitch.com/@glitch/tools-for-work)
-   [Hardware](https://glitch.com/@glitch/hardware)
-   [Building Blocks](https://glitch.com/@glitch/building-blocks)
-   [Learn to Code](https://glitch.com/@glitch/learn-to-code)

### Here’s a (temporarily) broken version of my personal portfolio .. hosted on glitch

#### Click ‘view app’ below to see how it renders

<a href="https://glitch.com/edit/#!/yielding-auspicious-periwinkle?path=README.md%3A1%3A0" class="uri">https://glitch.com/edit/#!/yielding-auspicious-periwinkle?path=README.md%3A1%3A0</a>

---

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a><a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

#### [CODEX](http://medium.com/codex)

#### These will focus more on vocabulary and concepts than the application-driven approach in my last post!

![](https://cdn-images-1.medium.com/max/1200/0*D3yQI42gBkYpnLXY.jpg)

### Here’s part one for reference:

<a href="https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822" class="uri">https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822</a>

-   **­­­­If you were to describe semantic HTML to the next cohort of students, what would you say?**

Semantic HTML is markup that conveys meaning, not appearance, to search engines to make everything easier to identify.

-   **Name two big differences between display: block; and display: inline;.**

block starts on a new line and takes up the full width of the content.  
 inline starts on the same line as previous content, in line with other content, and takes up only the space needed for the content.

· **What are the 4 areas of the box model?**

content, padding, border, margin

· **While using flexbox, what axis does the following property work on: align-items: center?**

cross-axis

· **Explain why git is valuable to a team of developers.**

Allows you to dole out tiny pieces of a large project to many developers who can all work towards the same goal on their own chunks, allows roll back if you make a mistake; version control.

· **What is the difference between an adaptive website and a fully responsive website?**

An adaptive website “adapts” to fit a pre-determined set of screen sizes/devices, and a responsive one changes to fit all devices.

· **Describe what it means to be mobile first vs desktop first.**

It means you develop/code the site with mobile in mind first and work your way outward in screen size.

· **What does font-size: 62.5% in the html tag do for us when using rem units?**

This setting makes it so that 1 rem = 10 px for font size, easier to calculate.

· **How would you describe preprocessing to someone new to CSS?**

Preprocessing is basically a bunch of functions and variables you can use to store CSS settings in different ways that make it easier to code CSS.

· **What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?**

Favorite is (parametric) mixins; but I don’t have a lot of trouble with preprocessing. What gives me the most trouble is knowing ahead of time what would be good to go in a mixin for a given site.

· **Describe the biggest difference between .forEach & .map.**

forEach iterates over an array item by item, and map calls a function on each array item, but returns another/additional array, unlike forEach.

· **What is the difference between a function and a method?**

Every function is an object. If a value is a function, it is a method. Methods have to be ‘received’ by something; functions do not.

· **What is closure?**

It is code identified elsewhere that we can use later; gives the ability to put functions together. If a variable isn’t defined, a function looks outward for context.

· **Describe the four rules of the ‘this’ keyword.**

1.  Window/global binding — this is the window/console object. ‘use strict’; to prevent window binding.

2.  Implicit binding — when a function is called by a dot, the object preceding the dot is the ‘this’. 80 percent of ‘this’ is from this type of binding.

3.  New binding — points to new object created & returned by constructor function

4.  Explicit binding — whenever call, bind, or apply are used.

· **Why do we need super() in an extended class?**

Super ties the parent to the child.

-   **What is the DOM?**

Document object model, the ‘window’ or container that holds all the page’s elements

-   **What is an event?**

An event is something happening on or to the page, like a mouse click, doubleclick, key up/down, pointer out of element/over element, things like this. There are tons of “events” that javascript can detect.

-   **What is an event listener?**

Javascript command that ‘listens’ for an event to happen on the page to a given element and then runs a function when that event happens

-   **Why would we convert a NodeList into an Array?**

A NodeList isn’t a real array, so it won’t have access to array methods such as slice or map.

-   **What is a component?**

Reusable pieces of code to display info in a consistent repeatable way

· **What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.**

ReactJS is a library used to build large applications. It’s very good at assisting developers in manipulating the DOM element to create rich user experiences. We need a way to off-load the state/data that our apps use, and React helps us do that.

· **What does it mean to _think_ in react?**

It makes you think about how to organize/build apps a little differently because it’s very scalable and allows you to build huge apps. React’s one-way data flow makes everything modular and fast. You can build apps top-down or bottom-up.

· **Describe state.**

Some data we want to display.

· **Describe props.**

Props are like function arguments in JS and attributes in HTML.

· **What are side effects, and how do you sync effects in a React component to state or prop changes?**

Side effects are anything that affects something outside the executed function’s scope like fetching data from an API, a timer, or logging.

· **Explain benefit(s) using client-side routing?**

Answer: It’s much more efficient than the traditional way, because a lot of data isn’t being transmitted unnecessarily.

· **Why would you use class component over function components (removing hooks from the question)?**

Because some companies still use class components and don’t want to switch their millions of dollars’ worth of code over to all functional hooks, and also there’s currently a lot more troubleshooting content out there for classes that isn’t out there for hooks. Also, functional components are better when you don’t need state, presentational components.

· **Name three lifecycle methods and their purposes.**

componentDidMount = do the stuff inside this ‘function’ after the component mounted

componentDidUpdate = do the stuff inside this function after the component updated

componentWillUnmount = clean-up in death/unmounting phase

· **What is the purpose of a custom hook?**

allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again

· **Why is it important to test our apps?**

Gets bugs fixed faster, reduces regression risk, makes you consider/work out the edge cases, acts as documentation, acts as safety net when refactoring, makes code more trustworthy

· **What problem does the context API help solve?**

You can store data in a context object instead of prop drilling.

· **In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a ‘single source of truth’ in a redux application?**

Everything that changes within your app is represented by a single JS object called the store. The store contains state for our application. When changes are made to our application state, we never write to our store object but rather clone the state object, modify the clone, and replace the original state with the new copy, never mutating the original object. Reducers are the only place we can update our state. Actions tell our reducers “how” to update the state, and perhaps with what data it should be updated, but only a reducer can actually update the state.

· **What is the difference between Application state and Component state? When would be a good time to use one over the other?**

App state is global, component state is local. Use component state when you have component-specific variables.

· **Describe redux-thunk, what does it allow us to do? How does it change our action-creators?**

Redux Thunk is middleware that provides the ability to handle asynchronous operations inside our Action Creators, because reducers are normally synchronous.

· **What is your favorite state management system you’ve learned and this sprint? Please explain why!**

Redux, because I felt it was easier to understand than the context API.

· **Explain what a token is used for.**

Many services out in the wild require the client (our React app, for example) to provide proof that it’s authenticated with them. The server running these services can issue a JWT (JSON Web Token) as the authentication token, in exchange for correct login credentials.

· **What steps can you take in your web apps to keep your data secure?**

As we build our web apps, we will most likely have some “protected” routes — routes that we only want to render if the user has logged in and been authenticated by our server. The way this normally works is we make a login request, sending the server the user’s username and password. The server will check those credentials against what is in the database, and if it can authenticate the user, it will return a token. Once we have this token, we can add two layers of protection to our app. One with protected routes, the other by sending an authentication header with our API calls (as we learned in the above objective).

· **Describe how web servers work.**

The “world wide web” (which we’ll refer to as “the web”) is just a part of the internet — which is itself a network of interconnected computers. The web is just one way to share data over the internet. It consists of a body of information stored on web servers, ready to be shared across the world. The term “web server” can mean two things:

· a computer that stores the code for a website

· a program that runs on such a computer

The physical computer device that we call a web server is connected to the internet, and stores the code for different websites to be shared across the world at all times. When we load the code for our websites, or web apps, on a server like this, we would say that the server is “hosting” our website/app.

· **Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.**

Create, Read, Update, Delete

· **Mention two parts of Express that you learned about this week.**

Routing/router, Middleware, convenience helpers

· **Describe Middleware?**

array of functions that get executed in the order they are introduced into the server code

· **Describe a Resource?**

o everything is a **resource**.

o each resource is accessible via a **unique URI**.

o resources can have multiple **representations**.

o communication is done over a **stateless** protocol (HTTP).

o management of resources is done via **HTTP methods**.

· **What can the API return to help clients know if a request was successful?**

200 status code/201 status code

· **How can we partition our application into sub-applications?**

By dividing the code up into multiple files and ‘requiring’ them in the main server file.

· **Explain the difference between Relational Databases and SQL.**

SQL is the language used to access a relational database.

· **Why do tables need a primary key?**

To uniquely identify each record/row.

· **What is the name given to a table column that references the primary key on another table.**

Foreign key

· **What do we need in order to have a _many to many_ relationship between two tables.**

An **intermediary table** that holds foreign keys that reference the primary key on the related tables.

· **What is the purpose of using _sessions_?**

The purpose is to persist data across requests.

· **What does bcrypt do to help us store passwords in a secure manner?**

o password hashing function.

o implements salting both manual and automatically.

o accumulative hashing rounds.

· **What does bcrypt do to slow down attackers?**

Having an algorithm that hashes the information multiple times (rounds) means an attacker needs to have the hash, know the algorithm used, and how many rounds were used to generate the hash in the first place. So it basically makes it a lot more difficult to get somebody’s password.

· **What are the three parts of the JSON Web Token?**

Header, payload, signature

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822" class="uri">https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822</a><a href="https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822" class="uri">https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822</a>

### Or Checkout my personal Resource Site:

<a href="https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822" class="uri">https://bryanguner.medium.com/the-web-developers-technical-interview-e347d7db3822</a>

#### Because I compile these things compulsively anyway…

![](https://cdn-images-1.medium.com/max/800/0*eEDATI6RAaEQw71I.jpg)

-   [Ansible](https://bgoonz.github.io/about.html#ansible)
-   [Awesome Lists](https://bgoonz.github.io/about.html#awesome-lists)
-   [CI/CD](https://bgoonz.github.io/about.html#continious-integration)
-   [Data Science](https://bgoonz.github.io/about.html#data-science)
-   [Docker](https://bgoonz.github.io/about.html#docker)
-   [DynamoDB](https://bgoonz.github.io/about.html#dynamodb)
-   [Elasticsearch](https://bgoonz.github.io/about.html#elasticsearch)
-   [Environment Setups](https://bgoonz.github.io/about.html#environment-setups)
-   [Epic Github Repos](https://bgoonz.github.io/about.html#epic-github-repos)
-   [Golang](https://bgoonz.github.io/about.html#golang)
-   [Grafana](https://bgoonz.github.io/about.html#grafana)
-   [Great Blogs](https://bgoonz.github.io/about.html#great-blogs)
-   [Knowledge Base](https://bgoonz.github.io/about.html#knowledge-base)
-   [Kubernetes](https://bgoonz.github.io/about.html#kubernetes)
-   [Kubernetes Storage](https://bgoonz.github.io/about.html#kubernetes-storage)
-   [Machine Learning](https://bgoonz.github.io/about.html#machine-learning)
-   [Monitoring](https://bgoonz.github.io/about.html#monitoring)
-   [MongoDB](https://bgoonz.github.io/about.html#mongodb)
-   [Programming](https://bgoonz.github.io/about.html#programming)
-   [Queues](https://bgoonz.github.io/about.html#queues)
-   [Self Hosting](https://bgoonz.github.io/about.html#self-hosting)
-   [Email Server Setups](https://bgoonz.github.io/about.html#email-server-setups)
-   [Mailscanner Server Setups](https://bgoonz.github.io/about.html#mailscanner-server-setups)
-   [Serverless](https://bgoonz.github.io/about.html#serverless)
-   [Sysadmin References](https://bgoonz.github.io/about.html#sysadmin-references)
-   [VPN](https://bgoonz.github.io/about.html#vpn)
-   [Web Frameworks](https://bgoonz.github.io/about.html#web-frameworks)

### Ansible

-   [Kubernetes on LXC with Ansible](https://github.com/zimmertr/Bootstrap-Kubernetes-with-LXC)

### Awesome Lists

-   [Awesome ChatOps](https://github.com/exAspArk/awesome-chatops)
-   [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability)
-   [Awesome Drone](https://github.com/drone/awesome-drone)

### Epic Github Repos

-   [mlabouardy](https://github.com/mlabouardy?tab=repositories)

### Authentication

-   [Nginx ES and Kibana Proxy with LDAP](https://mapr.com/blog/how-secure-elasticsearch-and-kibana/)

### Data Science

-   [bulutyazilim — datascience awesome list](https://github.com/bulutyazilim/awesome-datascience)

### Grafana

-   <span class="citation" data-cites="mlabouardy">\[Grafana Dashboards <span class="citation" data-cites="mlabouardy">@mlabouardy</span>\]</span>(https://github.com/mlabouardy/grafana-dashboards)

### Docker

#### Deploy Stacks to your Swarm: ![🐳](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f433.svg) ![❤️](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/2764.svg)

Logging:

-   [shazChaudhry Swarm GELF Stack](https://github.com/shazChaudhry/docker-elastic)

Metrics:

-   [StefanProdan — Prometheus, Grafana, cAdvisor, Node Exporter and Alert Manager](https://github.com/stefanprodan/swarmprom)
-   [Mlabouardy — Telegraf, InfluxDB, Chronograf, Kapacitor & Slack](https://github.com/mlabouardy/swarm-tick)

#### Awesome Docker Repos

-   [Jess’s Dockerfiles](https://github.com/jessfraz/dockerfiles)
-   [Firecat53’s Dockerfiles](https://github.com/firecat53/dockerfiles)

#### RaspberryPi ARM Images:

-   [arm32v6/alpine:edge](https://hub.docker.com/r/arm32v6/alpine/)
-   [arm32v6/golang:alpine](https://hub.docker.com/r/arm32v6/golang/)
-   [arm32v6/haproxy:alpine](https://hub.docker.com/r/arm32v6/haproxy/)
-   [arm32v6/node:alpine](https://hub.docker.com/r/arm32v6/node/)
-   [arm32v6/openjdk:alpine](https://hub.docker.com/r/arm32v6/openjdk/)
-   [arm32v6/postgres:alpine](https://hub.docker.com/r/arm32v6/postgres/)
-   [arm32v6/python:2.7-alpine3.6](https://hub.docker.com/r/arm32v6/python/)
-   [arm32v6/python:3.6-alpine3.6](https://hub.docker.com/r/arm32v6/python/)
-   [arm32v6/rabbitmq:alpine](https://hub.docker.com/r/arm32v6/rabbitmq/)
-   [arm32v6/redis:alpine](https://hub.docker.com/r/arm32v6/redis/)
-   [arm32v6/ruby:alpine3.6](https://hub.docker.com/r/arm32v6/ruby/)
-   [arm32v6/tomcat:alpine](https://hub.docker.com/r/arm32v6/tomcat/)
-   [arm32v6/traefik:latest](https://hub.docker.com/r/arm32v6/traefik/)
-   [arm32v7/debian:lates](https://hub.docker.com/r/arm32v7/debian/)
-   [hypriot/rpi-redis](https://hub.docker.com/r/hypriot/rpi-redis/)
-   [jixer/rpi-mongo](https://github.com/jixer/rpi-mongo)
-   [alexellis/armhf](https://github.com/alexellis/docker-arm/tree/master/images/armhf)
-   [zeiot: rpi-prometheus stack](https://github.com/zeiot)
-   [larmog](https://hub.docker.com/u/larmog/)
-   [Rpi MongoDB](https://github.com/andresvidal/rpi3-mongodb3)
-   [ARM Swarm](https://github.com/armswarm)

#### Docker Image Repositories

-   [Docker Hub: arm32v6](https://hub.docker.com/u/arm32v6/)
-   [Docker Hub: armv7](https://hub.docker.com/u/armv7/)
-   [Github: Luvres Armhf](https://github.com/luvres/armhf)
-   [Apache/PHP7 on Alpine](https://github.com/ulsmith/alpine-apache-php7)
-   [Tomcat on Alpine](https://github.com/docker-library/tomcat/blob/master/8.0/jre8-alpine/Dockerfile)
-   [Nginx (jwilder)](https://github.com/jwilder/nginx-proxy)
-   [Alpine Images (smebberson)](https://github.com/smebberson/docker-alpine)
-   [SameerSbn](https://hub.docker.com/u/sameersbn/)
-   [Linuxserver.io](https://hub.docker.com/u/linuxserver/)
-   [Apache-PHP5](https://hub.docker.com/r/nimmis/alpine-apache-php5/)
-   [Apache-PHP-Email](https://github.com/harobed/docker-php-ssmtp)

#### Docker-Awesome-Lists

-   [Java Docker Services](https://github.com/AdamBien/docklands)
-   [shouse Docker Awesome List](https://gist.github.com/shouse/a14c44e97a2cd2a1f030)

#### Docker Blogs:

-   [Whoami used in Traefik Docs](https://hub.docker.com/r/emilevauge/whoami/)
-   [Sqlite with Docker](https://github.com/spartakode/my-docker-repos/blob/master/sqlite3/Dockerfile)
-   [Rails with Postgres and Redis](https://github.com/mookjp/rails-docker-example)
-   [Async Tasks with Flask and Redis](https://testdriven.io/asynchronous-tasks-with-flask-and-redis-queue)
-   [Flask and Postgres](https://github.com/davidmukiibi/docker-flask)
-   [Elastic Beats on RaspberryPi](http://ict.renevdmark.nl/2016/07/05/elastic-beats-on-raspberry-pi/)

#### Docker Storage

-   [Rancher Convoy](https://github.com/rancher/convoy)
-   [Flocker](https://flocker.readthedocs.io/en/latest/flocker-features/storage-backends.html#supported-backends)
-   [EMC ScaleIO](http://node.mu/2017/06/30/scaleio-on-ubuntu-xenial/)
-   [RexRay Ceph with Ansible](https://github.com/lucj/swarm-rexray-ceph)
-   [ContainX](http://containx.io/)

#### OpenFaas:

-   [FaaS Releases](https://github.com/openfaas/faas/releases)
-   [FaaS Workshop](https://github.com/openfaas/workshop)

#### Prometheus / Grafana on Swarm:

-   [StefanProdan — SwarmProm](https://github.com/stefanprodan/swarmprom)
-   [Monitoring with Prometheus](https://medium.com/@soumyadipde/monitoring-in-docker-stacks-its-that-easy-with-prometheus-5d71c1042443)
-   [UschtWill — Prometheus Grafana Elastalert](https://github.com/uschtwill/docker_monitoring_logging_alerting)
-   [Chmod-Org Promethus with Blackbox](https://github.com/chmod666org/docker-swarm-prometheus)
-   [Finestructure: Prometheus Tutorial](https://finestructure.co/blog/2016/5/16/monitoring-with-prometheus-grafana-docker-part-1)

### Logging / Kibana / Beats

### Libraries

-   [Loguru](https://github.com/Delgan/loguru) | [Flask Example with Loguru](https://gist.github.com/M0r13n/0b8c62c603fdbc98361062bd9ebe8153)

### Frameworks

-   [shazChaudhry Swarm GELF Stack](https://github.com/shazChaudhry/docker-elastic)

### Continious Integration:

#### Circle-CI

-   [PHP with Circle-CI](https://circleci.com/docs/1.0/language-php/)

#### Concourse

-   [Setup Concourse Environment with Docker](https://concourse.ci/docker-repository.html)
-   [Getting Started with Concourse and Docker](https://blog.anynines.com/getting-started-with-concourse-ci-and-docker/)
-   [Concourse Gated Pipelines](https://github.com/pivotalservices/concourse-pipeline-samples/tree/master/concourse-pipeline-patterns/gated-pipelines)
-   [Concourse Boilerplate](https://github.com/EugenMayer/concourseci-server-boilerplate)

#### Jenkins

-   [Modess — PHP with Jenkins](https://modess.io/jenkins-php/)
-   [CI/CD Nodejs Tutorial with Jenkins](https://code.tutsplus.com/tutorials/setting-up-continuous-integration-continuous-deployment-with-jenkins--cms-21511)
-   <span class="citation" data-cites="medium">\[CI/CD Nodejs Tutorial with Jenkins <span class="citation" data-cites="medium">@medium</span>\]</span>(https://medium.com/<span class="citation" data-cites="mosheezderman/how-to-set-up-ci-cd-pipeline-for-a-node-js-app-with-jenkins-c51581cc783c"><span class="citation" data-cites="mosheezderman/how-to-set-up-ci-cd-pipeline-for-a-node-js-app-with-jenkins-c51581cc783c">@mosheezderman/how-to-set-up-ci-cd-pipeline-for-a-node-js-app-with-jenkins-c51581cc783c</span></span>)
-   [Epic CICD workflow with Jenkins, Gitlab, Sonar, Nexus](https://github.com/shazChaudhry/docker-swarm-mode)

#### SwarmCi

-   [SwarmCI](https://github.com/ghostsquad/swarmci)

#### Travis-CI

-   [Getting Started with Travis-CI (Original Docs)](https://docs.travis-ci.com/user/getting-started/)
-   [Getting Started with Travis-CI (dwyl — nodejs)](https://github.com/dwyl/learn-travis)
-   [Blog Site with Travis-CI (Python)](https://matthewmoisen.com/blog/how-to-set-up-travis-ci-with-github-for-a-python-project/)
-   [Build Tests with Python on Travis-CI](https://github.com/softwaresaved/build_and_test_examples/blob/master/travis/HelloWorld.md)
-   [Moving app with Travis-CI](https://www.raywenderlich.com/109418/travis-ci-tutorial)

#### LambCI

-   [LambCI](https://github.com/lambci/lambci)

### DynamoDB

#### DynamoDB Docs

-   [AWS DynamoDB: SQL to NoSQL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.ReadData.Query.html)

#### DynamoDB Best Practices

-   [Choosing the Right Partition Key](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/)
-   [10 Things you should know](https://cloudacademy.com/blog/amazon-dynamodb-ten-things/)

#### DynamoDB General Info

-   [Understanding DynamoDB](https://medium.com/@yaofei/understand-dynamodb-b278f718ddb8)

### Elasticsearch

#### Elasticsearch Documentation

-   [General Recommendation](https://www.elastic.co/guide/en/elasticsearch/reference/current/general-recommendations.html)
-   [How Many Shards in my Cluster](https://www.elastic.co/blog/how-many-shards-should-i-have-in-my-elasticsearch-cluster)
-   [Managing Time-Based Indices Efficiently](https://www.elastic.co/blog/managing-time-based-indices-efficiently)
-   [Elasticsearch Best Practices (Bonsai.io)](https://bonsai.io/2016/01/11/ideal-elasticsearch-cluster)
-   [AWS ES — Scaling up my Domain](https://aws.amazon.com/premiumsupport/knowledge-center/elasticsearch-scale-up/)

#### Elasticsearch Cheetsheets:

-   [My ES Cheatsheet](https://gist.github.com/ruanbekker/e8a09604b14f37e8d2f743a87b930f93)

#### Elasticsearch Blogs

-   [Maximize Elasticsearch Indexing Performance](https://qbox.io/blog/maximize-guide-elasticsearch-indexing-performance-part-1)
-   [Autoritative Guide to ES Performance Tuning](https://qbox.io/blog/authoritative-guide-elasticsearch-performance-tuning-part-1)
-   [Full text Search Queries](https://opendistro.github.io/for-elasticsearch-docs/docs/elasticsearch/full-text/)
-   [Query Elasticsearch](https://okfnlabs.org/blog/2013/07/01/elasticsearch-query-tutorial.html)

#### Elasticsearch Tools

-   [Export Data from ES to ES](https://github.com/mallocator/Elasticsearch-Exporter)

### Environment Setups:

-   [Golang](https://medium.com/aishik/install-golang-the-right-way-4743fee9255f)

### Knowledge Base

### KB HTTPS

-   [How does HTTPS work (Miguel Grinberg)](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https)

### Kubernetes

-   [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes/blob/master/README.md)
-   [Kubernetes Cheatsheet](https://cheatsheet.dennyzhang.com/cheatsheet-kubernetes-a4)
-   [Getting Started: Python application on Kubernetes](https://kubernetes.io/blog/2019/07/23/get-started-with-kubernetes-using-python/)
-   [Kubernetes Deployments: The Ultimate Guide](https://semaphoreci.com/blog/kubernetes-deployment)
-   [Prometheus Monitoring Stack with Kubernetes on DO](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-prometheus-grafana-and-alertmanager-monitoring-stack-on-digitalocean-kubernetes)
-   [Traefik as an Ingress Controller on Minikube](https://tech.evaneos.com/traefik-as-an-ingress-controller-on-minikube-with-kustomize-helm-a3b2f44a5c2a)
-   [Traefik Ingress with Kubernetes](https://itnext.io/traefik-cluster-as-ingress-controller-for-kubernetes-99fa6c34402)
-   [Manual Connect your Kubernetes from Outside](https://medium.com/faun/manually-connect-to-your-kubernetes-cluster-from-the-outside-d852346a7f0a)
-   [HTTPS Letsencrypt on k3s](https://pascalw.me/blog/2019/07/02/k3s-https-letsencrypt.html)
-   [Kubernetes: Nodeport vs Loadbalancer](https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0)
-   [Prometheus Monitoring Pipeline on Kubernetes](https://medium.com/kubernetes-tutorials/simple-management-of-prometheus-monitoring-pipeline-with-the-prometheus-operator-b445da0e0d1a)
-   [Building a Kubernetes CI/CD Pipeline with Rancher](https://rancher.com/blog/2018/2018-08-07-cicd-pipeline-k8s-autodevops-rancher-and-gitlab/)
-   [Building a Kubernetes CI/CD Pipeline with AWS](https://medium.com/swlh/universal-cicd-pipeline-on-aws-and-k8s-7b4129fac5d4)
-   [Gitea and Drone CI/CD on k3s](https://itnext.io/explore-gitea-drone-ci-cd-on-k3s-4a9e99f8b938)
-   [Serverless with Kubernetes using OpenFaaS and Linkerd2](https://github.com/openfaas-incubator/openfaas-linkerd2/blob/master/README.md)
-   [Managing Kubernetes with kubectl](https://rancher.com/blog/2019/how-to-manage-kubernetes-with-kubectl/)
-   [OpenFaas Workshop on k3s](https://gist.github.com/alexellis/a6ee5f094f86987a0dc508442220c52a)
-   [Kubernetes Hands-On Lab with collabnix](http://collabnix.com/kubernetes-hands-on-lab-4-deploy-application-stack-using-helm-on-play-with-kubernetes-platform/)
-   [Create ReadWrite Persistent Volumes on Kubernetes](https://medium.com/asl19-developers/create-readwritemany-persistentvolumeclaims-on-your-kubernetes-cluster-3a8db51f98e3)
-   [Kubernetes Clusters with k3s and multipass](https://medium.com/@mattiaperi/kubernetes-cluster-with-k3s-and-multipass-7532361affa3)

### Kubernetes Storage

-   [Kadalu](https://kadalu.io/docs/quick-start)
-   [Rancher: Longhorn Storage](https://rancher.com/docs/k3s/latest/en/storage/)

### Golang

-   [Generate Fake Random Data with Golang](https://github.com/brianvoe/gofakeit)
-   [Ultimate Golang Study Guide](https://github.com/hoanhan101/ultimate-go)

### Great Blogs

-   [Exratione.com](https://www.exratione.com/blog/)
-   [Joelabrahamsson.com](http://joelabrahamsson.com/elasticsearch-101/)
-   [Benjamin Cane](http://bencane.com/)
-   [Michael Herman](http://mherman.org/)
-   [Charles Leifer](http://charlesleifer.com/)
-   [Labouardy](https://www.blog.labouardy.com/)
-   [Mark’s Tech Blog](https://tech.marksblogg.com/)

### Linuxkit:

-   [Getting Started with Linuxkit](https://medium.com/aishik/getting-started-with-linuxkit-and-moby-project-ff7121c4e321)

### Logging Stacks

-   [shazChaudhry Swarm GELF Stack](https://github.com/shazChaudhry/docker-elastic)

### Machine Learning:

-   [PracticalAI](https://github.com/GokuMohandas/practicalAI/blob/master/README.md)

### Metrics:

-   [AppMetrics with Flask](https://github.com/avalente/appmetrics)
-   [Scales: Metrics for Python](https://github.com/Cue/scales)
-   [Graphite: Python Flask Metrics](https://pypi.org/project/graphite-pymetrics/)

### MongoDB:

-   [Setup MongoDB Cluster](https://linode.com/docs/databases/mongodb/build-database-clusters-with-mongodb/)
-   [MongoDB Scripts](https://github.com/AD7six/mongo-scripts)
-   [MongoDB Monitoring Tools](https://docs.mongodb.com/v2.4/administration/monitoring/#self-hosted-monitoring-tools)
-   [Roles with MongoDB](https://studio3t.com/knowledge-base/articles/mongodb-users-roles-explained-part-1/)
-   [Queries: Guru99](https://www.guru99.com/mongodb-tutorials.html)
-   [Queries: Exploratory](https://blog.exploratory.io/an-introduction-to-mongodb-query-for-beginners-bd463319aa4c)
-   [Queries: Tutorialspoint](https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm)
-   [Queries: MongoDB Cheatsheet](https://gist.github.com/rbekker87/5b4cd9ef36b6ae092a6260ab9e621a43)

### Monitoring

-   [Docker Swarm Monitoring Stack: Telegraf, InfluxDB, Chronograf, Kapacitor](https://hackernoon.com/monitor-swarm-cluster-with-tick-stack-slack-3aaa6483d44a) [github source](https://github.com/mlabouardy/swarm-tick)
-   [Docker Swarm Monitoring Stack: Prometheus, Grafana, cAdvisor, Node Exporter](https://stefanprodan.com/2017/docker-swarm-instrumentation-with-prometheus/) [github source](https://github.com/stefanprodan/swarmprom)
-   [Prometheus Grafana Docker](https://finestructure.co/blog/2016/5/16/monitoring-with-prometheus-grafana-docker-part-1)
-   [Prometheus Blog Seros](https://pierrevincent.github.io/2017/12/prometheus-blog-series-part-1-metrics-and-labels/)
-   [Memcached Monitoring](https://blog.serverdensity.com/monitor-memcached/)
-   [Nagios with Nagios Graph](https://raymii.org/s/tutorials/Nagios_Core_4_Installation_on_Ubuntu_12.04.html)
-   [Slack Alerts with Prometheus](https://medium.com/quiq-blog/better-slack-alerts-from-prometheus-49125c8c672b)
-   [Local Prometheus Stack](https://github.com/deanwilson/docker-compose-prometheus)
-   [Docker Swarm Promethus Setup \#1](https://github.com/chmod666org/docker-swarm-prometheus)
-   [Docker Swarm Prometheus Setup \#1: Blog](https://chmod666.org/2017/08/monitoring-a-docker-swarm-cluster-with-prometheus)
-   [Docker Swarm Promethus Setup \#2](https://homelab.business/docker-swarm-monitoring-part-01/)
-   [Docker Swarm Promethus Setup \#3 (Blackbox)](https://medium.com/the-telegraph-engineering/how-prometheus-and-the-blackbox-exporter-makes-monitoring-microservice-endpoints-easy-and-free-of-a986078912ee)
-   [Uptime (fzaninotto)](https://github.com/fzaninotto/uptime)

### Monitoring and Alerting

-   [Cabot (Lightweight Pagerduty)](https://github.com/arachnys/cabot)
-   [Nagios](https://www.nagios.org/)

### Monitoring as Statuspages

-   [Statuspage (darkpixel](https://github.com/darkpixel/statuspage)
-   [Cachet](https://github.com/cachethq/Cachet)

### Programming

#### Golang:

-   [Golang Tutorials](http://golangtutorials.blogspot.co.za/2011/05/table-of-contents.html)
-   [Golang Wiki](https://github.com/golang/go/wiki)

#### Java:

-   [Java Spring Boot Examples](https://wiki.ruanbekker.com/index.php/Java_Spring_Boot_App_Examples)

#### Python

#### Ruby:

-   [Learn Ruby: Learn Ruby the Hard Way](https://learnrubythehardway.org/book)
-   [Learn Ruby: Ruby for Beginners](http://ruby-for-beginners.rubymonstas.org/index.html)
-   [Learn Ruby: Launch School](https://launchschool.com/books/ruby/read/loops_iterators#forloops)
-   [Learn Ruby: Arrays](https://gistpages.com/posts/ruby_arrays_insert_append_length_index_remove)
-   [Install Ruby Environment on Mac](https://gorails.com/setup/osx/10.12-sierra)

#### Ruby on Rails:

-   [Tutorial: Ruby On Rails](https://www.railstutorial.org/book/beginning)
-   [Tutorial: ROR on Docker](http://codingnudge.com/2017/03/17/tutorial-how-to-run-ruby-on-rails-on-docker-part-1/)

### Queues

-   [Alpine SQS](https://github.com/roribio/alpine-sqs)
-   [Kombu: Messaging library for Python](https://github.com/celery/kombu)
-   [Python Job Queues with Redis](https://python-rq.org/)

### Sysadmin References:

-   [Sysadmin Command References](https://gist.github.com/ruanbekker/3118ed23c25451132becacd3b974db08)
-   [Linux Performance Observability Tools](https://medium.com/@chrishantha/linux-performance-observability-tools-19ae2328f87f)
-   [Troubleshooting High IO Wait](http://bencane.com/2012/08/06/troubleshooting-high-io-wait-in-linux/)
-   [IO Monitoring in Linux](https://blog.pythian.com/basic-io-monitoring-on-linux/)
-   [IOStat and VMStat for Performance Monitoring](http://xiayubin.com/blog/2014/01/29/how-i-use-iostat-and-vmstat-for-performance-analysis/)
-   [Debugging Heavy Load](https://www.tummy.com/articles/isolating-heavy-load/)

### Self Hosting

#### Email Server Setups

-   [Extratione: Postfix Dovecot MySQL Virtual Users Postfixadmin](https://www.exratione.com/2016/05/a-mailserver-on-ubuntu-16-04-postfix-dovecot-mysql/)
-   [Extratione: Postfix Dovecot MySQL Virtual Users Postfixadmin (Ubuntu 18)](https://www.exratione.com/2019/02/a-mailserver-on-ubuntu-18-04-postfix-dovecot-mysql/)
-   [Linuxsize: Postfix Dovecot MySQL Virtual Users Postfixadmin](https://linuxize.com/post/set-up-an-email-server-with-postfixadmin/)
-   [Howtoforge: Postfix, MySQL, Dovecto, Dspam](https://www.howtoforge.com/postfix_mysql_dovecot_dspam_clamav_postgrey_rbl_debian_etch)
-   [Linuxsize: VirtualUsers, MySQL, Postfix, Dovecot](https://linuxize.com/post/set-up-an-email-server-with-postfixadmin/)

#### Mailscanner Server Setups

-   [Spamassassin with Debian 8](https://syslint.com/blog/tutorial/how-to-install-and-configure-spamassassin-with-postfix-in-debian-8/)

#### Financial

-   [SelfHosted Firefly](https://github.com/firefly-iii/firefly-iii)

#### Self Hosting Frameworks:

-   [Sandstorm](https://sandstorm.io/)

### Serverless

-   [Serverless Zappa](https://github.com/Miserlou/Zappa)
-   [Serverless Contact Form](https://github.com/faizanbashir/python-ses-dynamodb-contactform)
-   [Serverless Authentication on AWS (danilop)](https://github.com/danilop/LambdAuth)

### VPN:

#### VPN-Howto:

-   [Ubuntu OpenVPN Script](https://www.cyberciti.biz/faq/howto-setup-openvpn-server-on-ubuntu-linux-14-04-or-16-04-lts/)
-   [Ubuntu IPSec Script](https://github.com/hwdsl2/setup-ipsec-vpn)
-   [DO — Setup OpenVPN on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-openvpn-server-on-ubuntu-16-04)
-   [Elasticshosts — IPSec VPN](https://www.elastichosts.com/blog/linux-l2tpipsec-vpn-client/)
-   [PPTP/IPSec/OpenVPN Auto Install](https://github.com/bedefaced/vpn-install)

### Website Templates

#### Resume Templates

-   [johnmarcampbell resume-site](https://github.com/johnmarcampbell/resume-site)

### Web Frameworks

#### Python Flask:

-   [Python Flask Upload Example](https://gist.github.com/dAnjou/2874714)
-   [Awesome Flask — humiaozuzu](https://github.com/humiaozuzu/awesome-flask#awesome-flask)
-   [Awesome Flask Apps — Greyli](https://github.com/greyli?tab=repositories)
-   [Flask over HTTPS (MG)](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https)
-   [Flask Advanced Patterns](https://speakerdeck.com/mitsuhiko/advanced-flask-patterns-1)
-   [Flask MVC Boilerplate](https://github.com/tojrobinson/flask-mvc)

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a><a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

#### Questions….Answers… and links to the missing pieces.

> **_Resources first… the actual article is below!_**

![](https://cdn-images-1.medium.com/max/800/1*-fWJcnbTfusuDCBTI58avg.png)

<a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a>

#### First off.. Here’s a link to a website I created for practicing with data structures in javascript:

<a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a>

### Here’s a live code editor where you can mess with any of the examples…

<span class="citation" data-cites="bgoonz/DS-ALGO-OFFICIAL-2">\[https://repl.it/<span class="citation" data-cites="bgoonz/DS-ALGO-OFFICIAL-2">@bgoonz/DS-ALGO-OFFICIAL-2</span>\]</span>(https://repl.it/<span class="citation" data-cites="bgoonz/DS-ALGO-OFFICIAL-2"><span class="citation" data-cites="bgoonz/DS-ALGO-OFFICIAL-2">@bgoonz/DS-ALGO-OFFICIAL-2</span></span>)

#### And here’s the part where I go through leetcode problems:

<a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a>

#### Additionally, here’s another Medium Article I wrote on data structures:

<a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a>

#### All the code provided in this article will be embeded at the bottom of this article as a gist so that you can see the proper syntax highlighting… and copy it all at once if you like!

### Asymptotic Notation

![](https://cdn-images-1.medium.com/max/800/1*rHF5Jb6Cv_vxiZKg06Abtg.png)

### Definition:

Asymptotic Notation is the hardware independent notation used to tell the time and space complexity of an algorithm. Meaning it’s a standardized way of measuring how much memory an algorithm uses or how long it runs for given an input.

#### Complexities

The following are the Asymptotic rates of growth from best to worst:

-   constant growth — `O(1)` Runtime is constant and does not grow with `n`
-   logarithmic growth — `O(log n)` Runtime grows logarithmically in proportion to `n`
-   linear growth — `O(n)` Runtime grows directly in proportion to `n`
-   superlinear growth — `O(n log n)` Runtime grows in proportion _and_ logarithmically to `n`
-   polynomial growth — `O(n^c)` Runtime grows quicker than previous all based on `n`
-   exponential growth — `O(c^n)` Runtime grows even faster than polynomial growth based on `n`
-   factorial growth — `O(n!)` Runtime grows the fastest and becomes quickly unusable for even  
    small values of `n`

[(source: Soumyadeep Debnath, _Analysis of Algorithms | Big-O analysis_)](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/)

Visualized below; the x-axis representing input size and the y-axis representing complexity:

![](https://cdn-images-1.medium.com/max/800/0*EhERM_cwojSYpuh9.png)

[(source: Wikipedia, _Computational Complexity of Mathematical Operations_)](https://en.wikipedia.org/wiki/Computational_complexity_of_mathematical_operations)

#### Big-O notation

Big-O refers to the upper bound of time or space complexity of an algorithm, meaning it worst case runtime scenario. An easy way to think of it is that runtime could be better than Big-O but it will never be worse.

#### Big-Ω (Big-Omega) notation

Big-Omega refers to the lower bound of time or space complexity of an algorithm, meaning it is the best runtime scenario. Or runtime could worse than Big-Omega, but it will never be better.

#### Big-θ (Big-Theta) notation

Big-Theta refers to the tight bound of time or space complexity of an algorithm. Another way to think of it is the intersection of Big-O and Big-Omega, or more simply runtime is guaranteed to be a given complexity, such as `n log n`.

#### What you need to know

-   Big-O and Big-Theta are the most common and helpful notations
-   Big-O does _not_ mean Worst Case Scenario, Big-Theta does _not_ mean average case, and Big-Omega does _not_ mean Best Case Scenario. They only connote the algorithm’s performance for a particular scenario, and all three can be used for any scenario.
-   Worst Case means given an unideal input, Average Case means given a typical input, Best case means a ideal input. Ex. Worst case means given an input the algorithm performs particularly bad, or best case an already sorted array for a sorting algorithm.
-   Best Case and Big Omega are generally not helpful since Best Cases are rare in the real world and lower bound might be very different than an upper bound.
-   Big-O isn’t everything. On paper merge sort is faster than quick sort, but in practice quick sort is superior.

### Data Structures

### Array

#### Definition

-   Stores data elements based on an sequential, most commonly 0 based, index.
-   Based on [tuples](http://en.wikipedia.org/wiki/Tuple) from set theory.
-   They are one of the oldest, most commonly used data structures.

#### What you need to know

-   Optimal for indexing; bad at searching, inserting, and deleting (except at the end).
-   **Linear arrays**, or one dimensional arrays, are the most basic.
-   Are static in size, meaning that they are declared with a fixed size.
-   **Dynamic arrays** are like one dimensional arrays, but have reserved space for additional elements.
-   If a dynamic array is full, it copies its contents to a larger array.
-   **Multi dimensional arrays** nested arrays that allow for multiple dimensions such as an array of arrays providing a 2 dimensional spacial representation via x, y coordinates.

#### Time Complexity

-   Indexing: Linear array: `O(1)`, Dynamic array: `O(1)`
-   Search: Linear array: `O(n)`, Dynamic array: `O(n)`
-   Optimized Search: Linear array: `O(log n)`, Dynamic array: `O(log n)`
-   Insertion: Linear array: n/a, Dynamic array: `O(n)`

### Linked List

#### Definition

-   Stores data with **nodes** that point to other nodes.
-   Nodes, at its most basic it has one datum and one reference (another node).
-   A linked list _chains_ nodes together by pointing one node’s reference towards another node.

#### What you need to know

-   Designed to optimize insertion and deletion, slow at indexing and searching.
-   **Doubly linked list** has nodes that also reference the previous node.
-   **Circularly linked list** is simple linked list whose **tail**, the last node, references the **head**, the first node.
-   **Stack**, commonly implemented with linked lists but can be made from arrays too.
-   Stacks are **last in, first out** (LIFO) data structures.
-   Made with a linked list by having the head be the only place for insertion and removal.
-   **Queues**, too can be implemented with a linked list or an array.
-   Queues are a **first in, first out** (FIFO) data structure.
-   Made with a doubly linked list that only removes from head and adds to tail.

#### Time Complexity

-   Indexing: Linked Lists: `O(n)`
-   Search: Linked Lists: `O(n)`
-   Optimized Search: Linked Lists: `O(n)`
-   Append: Linked Lists: `O(1)`
-   Prepend: Linked Lists: `O(1)`
-   Insertion: Linked Lists: `O(n)`

### Hash Table or Hash Map

#### Definition

-   Stores data with key value pairs.
-   **Hash functions** accept a key and return an output unique only to that specific key.
-   This is known as **hashing**, which is the concept that an input and an output have a one-to-one correspondence to map information.
-   Hash functions return a unique address in memory for that data.

#### What you need to know

-   Designed to optimize searching, insertion, and deletion.
-   **Hash collisions** are when a hash function returns the same output for two distinct inputs.
-   All hash functions have this problem.
-   This is often accommodated for by having the hash tables be very large.
-   Hashes are important for associative arrays and database indexing.

#### Time Complexity

-   Indexing: Hash Tables: `O(1)`
-   Search: Hash Tables: `O(1)`
-   Insertion: Hash Tables: `O(1)`

### Binary Tree

#### Definition

-   Is a tree like data structure where every node has at most two children.
-   There is one left and right child node.

#### What you need to know

-   Designed to optimize searching and sorting.
-   A **degenerate tree** is an unbalanced tree, which if entirely one-sided, is essentially a linked list.
-   They are comparably simple to implement than other data structures.
-   Used to make **binary search trees**.
-   A binary tree that uses comparable keys to assign which direction a child is.
-   Left child has a key smaller than its parent node.
-   Right child has a key greater than its parent node.
-   There can be no duplicate node.
-   Because of the above it is more likely to be used as a data structure than a binary tree.

#### Time Complexity

-   Indexing: Binary Search Tree: `O(log n)`
-   Search: Binary Search Tree: `O(log n)`
-   Insertion: Binary Search Tree: `O(log n)`

### Algorithms

### Algorithm Basics

### Recursive Algorithms

#### Definition

-   An algorithm that calls itself in its definition.
-   **Recursive case** a conditional statement that is used to trigger the recursion.
-   **Base case** a conditional statement that is used to break the recursion.

#### What you need to know

-   **Stack level too deep** and **stack overflow**.
-   If you’ve seen either of these from a recursive algorithm, you messed up.
-   It means that your base case was never triggered because it was faulty or the problem was so massive you ran out of alloted memory.
-   Knowing whether or not you will reach a base case is integral to correctly using recursion.
-   Often used in Depth First Search

### Iterative Algorithms

#### Definition

-   An algorithm that is called repeatedly but for a finite number of times, each time being a single iteration.
-   Often used to move incrementally through a data set.

#### What you need to know

-   Generally you will see iteration as loops, for, while, and until statements.
-   Think of iteration as moving one at a time through a set.
-   Often used to move through an array.

#### Recursion Vs. Iteration

-   The differences between recursion and iteration can be confusing to distinguish since both can be used to implement the other. But know that,
-   Recursion is, usually, more expressive and easier to implement.
-   Iteration uses less memory.
-   **Functional languages** tend to use recursion. (i.e. Haskell)
-   **Imperative languages** tend to use iteration. (i.e. Ruby)
-   Check out this [Stack Overflow post](http://stackoverflow.com/questions/19794739/what-is-the-difference-between-iteration-and-recursion) for more info.

#### Pseudo Code of Moving Through an Array

    Recursion                         | Iteration----------------------------------|----------------------------------recursive method (array, n)       | iterative method (array)  if array[n] is not nil          |   for n from 0 to size of array    print array[n]                |     print(array[n])    recursive method(array, n+1)  |  else                            |    exit loop                     |

### Greedy Algorithms

#### Definition

-   An algorithm that, while executing, selects only the information that meets a certain criteria.
-   The general five components, taken from [Wikipedia](http://en.wikipedia.org/wiki/Greedy_algorithm#Specifics):
-   A candidate set, from which a solution is created.
-   A selection function, which chooses the best candidate to be added to the solution.
-   A feasibility function, that is used to determine if a candidate can be used to contribute to a solution.
-   An objective function, which assigns a value to a solution, or a partial solution.
-   A solution function, which will indicate when we have discovered a complete solution.

#### What you need to know

-   Used to find the expedient, though non-optimal, solution for a given problem.
-   Generally used on sets of data where only a small proportion of the information evaluated meets the desired result.
-   Often a greedy algorithm can help reduce the Big O of an algorithm.

#### Pseudo Code of a Greedy Algorithm to Find Largest Difference of any Two Numbers in an Array.

    greedy algorithm (array)  let largest difference = 0  let new difference = find next difference (array[n], array[n+1])  largest difference = new difference if new difference is > largest difference  repeat above two steps until all differences have been found  return largest difference

This algorithm never needed to compare all the differences to one another, saving it an entire iteration.

### Search Algorithms

### Breadth First Search

#### Definition

-   An algorithm that searches a tree (or graph) by searching levels of the tree first, starting at the root.
-   It finds every node on the same level, most often moving left to right.
-   While doing this it tracks the children nodes of the nodes on the current level.
-   When finished examining a level it moves to the left most node on the next level.
-   The bottom-right most node is evaluated last (the node that is deepest and is farthest right of it’s level).

#### What you need to know

-   Optimal for searching a tree that is wider than it is deep.
-   Uses a queue to store information about the tree while it traverses a tree.
-   Because it uses a queue it is more memory intensive than **depth first search**.
-   The queue uses more memory because it needs to stores pointers

#### Time Complexity

-   Search: Breadth First Search: O(V + E)
-   E is number of edges
-   V is number of vertices

### Depth First Search

#### Definition

-   An algorithm that searches a tree (or graph) by searching depth of the tree first, starting at the root.
-   It traverses left down a tree until it cannot go further.
-   Once it reaches the end of a branch it traverses back up trying the right child of nodes on that branch, and if possible left from the right children.
-   When finished examining a branch it moves to the node right of the root then tries to go left on all it’s children until it reaches the bottom.
-   The right most node is evaluated last (the node that is right of all it’s ancestors).

#### What you need to know

-   Optimal for searching a tree that is deeper than it is wide.
-   Uses a stack to push nodes onto.
-   Because a stack is LIFO it does not need to keep track of the nodes pointers and is therefore less memory intensive than breadth first search.
-   Once it cannot go further left it begins evaluating the stack.

#### Time Complexity

-   Search: Depth First Search: O(|E| + |V|)
-   E is number of edges
-   V is number of vertices

#### Breadth First Search Vs. Depth First Search

-   The simple answer to this question is that it depends on the size and shape of the tree.
-   For wide, shallow trees use Breadth First Search
-   For deep, narrow trees use Depth First Search

#### Nuances

-   Because BFS uses queues to store information about the nodes and its children, it could use more memory than is available on your computer. (But you probably won’t have to worry about this.)
-   If using a DFS on a tree that is very deep you might go unnecessarily deep in the search. See [xkcd](http://xkcd.com/761/) for more information.
-   Breadth First Search tends to be a looping algorithm.
-   Depth First Search tends to be a recursive algorithm.

### Sorting Algorithms

### Selection Sort

#### Definition

-   A comparison based sorting algorithm.
-   Starts with the cursor on the left, iterating left to right
-   Compares the left side to the right, looking for the smallest known item
-   If the left is smaller than the item to the right it continues iterating
-   If the left is bigger than the item to the right, the item on the right becomes the known smallest number
-   Once it has checked all items, it moves the known smallest to the cursor and advances the cursor to the right and starts over
-   As the algorithm processes the data set, it builds a fully sorted left side of the data until the entire data set is sorted
-   Changes the array in place.

#### What you need to know

-   Inefficient for large data sets.
-   Very simple to implement.

#### Time Complexity

-   Best Case Sort: Merge Sort: `O(n^2)`
-   Average Case Sort: Merge Sort: `O(n^2)`
-   Worst Case Sort: Merge Sort: `O(n^2)`

#### Space Complexity

-   Worst Case: `O(1)`

#### Visualization

![](https://cdn-images-1.medium.com/max/800/0*SZSRoth1yRyxD4Z3.gif)

[(source: Wikipedia, _Insertion Sort_)](https://en.wikipedia.org/wiki/Selection_sort)

### Insertion Sort

#### Definition

-   A comparison based sorting algorithm.
-   Iterates left to right comparing the current cursor to the previous item.
-   If the cursor is smaller than the item on the left it swaps positions and the cursor compares itself again to the left hand side until it is put in its sorted position.
-   As the algorithm processes the data set, the left side becomes increasingly sorted until it is fully sorted.
-   Changes the array in place.

#### What you need to know

-   Inefficient for large data sets, but can be faster for than other algorithms for small ones.
-   Although it has an `O(n^2)`, in practice it slightly less since its comparison scheme only requires checking place if its smaller than its neighbor.

#### Time Complexity

-   Best Case: `O(n)`
-   Average Case: `O(n^2)`
-   Worst Case: `O(n^2)`

#### Space Complexity

-   Worst Case: `O(n)`

#### Visualization

![](https://cdn-images-1.medium.com/max/800/0*Qh5uC4IwcxaZLNhy.gif)

[(source: Wikipedia, _Insertion Sort_)](https://en.wikipedia.org/wiki/Insertion_sort)

### Merge Sort

#### Definition

-   A divide and conquer algorithm.
-   Recursively divides entire array by half into subsets until the subset is one, the base case.
-   Once the base case is reached results are returned and sorted ascending left to right.
-   Recursive calls are returned and the sorts double in size until the entire array is sorted.

#### What you need to know

-   This is one of the fundamental sorting algorithms.
-   Know that it divides all the data into as small possible sets then compares them.

#### Time Complexity

-   Worst Case: `O(n log n)`
-   Average Case: `O(n log n)`
-   Best Case: `O(n)`

#### Space Complexity

-   Worst Case: `O(1)`

#### Visualization

![](https://cdn-images-1.medium.com/max/800/0*cnUTrzYJ3eu9juJP.png)

[(source: Wikipedia, _Merge Sort_)](https://en.wikipedia.org/wiki/Merge_sort)

### Quicksort

#### Definition

-   A divide and conquer algorithm
-   Partitions entire data set in half by selecting a random pivot element and putting all smaller elements to the left of the element and larger ones to the right.
-   It repeats this process on the left side until it is comparing only two elements at which point the left side is sorted.
-   When the left side is finished sorting it performs the same operation on the right side.
-   Computer architecture favors the quicksort process.
-   Changes the array in place.

#### What you need to know

-   While it has the same Big O as (or worse in some cases) many other sorting algorithms it is often faster in practice than many other sorting algorithms, such as merge sort.

#### Time Complexity

-   Worst Case: `O(n^2)`
-   Average Case: `O(n log n)`
-   Best Case: `O(n log n)`

#### Space Complexity

-   Worst Case: `O(log n)`

#### Visualization

![](https://cdn-images-1.medium.com/max/800/0*t5olHZSO0e1iVQH5.gif)

[(source: Wikipedia, _Quicksort_)](https://en.wikipedia.org/wiki/Quicksort)

#### Merge Sort Vs. Quicksort

-   Quicksort is likely faster in practice, but merge sort is faster on paper.
-   Merge Sort divides the set into the smallest possible groups immediately then reconstructs the incrementally as it sorts the groupings.
-   Quicksort continually partitions the data set by a pivot, until the set is recursively sorted.

### Additional Resources

[Khan Academy’s Algorithm Course](https://www.khanacademy.org/computing/computer-science/algorithms)

### What is ARIA and when should you use it?

#### Answer

ARIA stands for “Accessible Rich Internet Applications”, and is a technical specification created by the World Wide Web Consortium (W3C). Better known as WAI-ARIA, it provides additional HTML attributes in the development of web applications to offer people who use assistive technologies (AT) a more robust and interoperable experience with dynamic components. By providing the component’s role, name, and state, AT users can better understand how to interact with the component. WAI-ARIA should only be used when an HTML element equivalent is not available or lacks full browser or AT support. WAI-ARIA’s semantic markup coupled with JavaScript works to provide an understandable and interactive experience for people who use AT.

An example using ARIA:

…

Credit: W3C’s [ARIA 1.1 Combobox with Grid Popup Example](https://w3c.github.io/aria-practices/examples/combobox/aria1.1pattern/grid-combo.html)

#### Don’t forget:

-   Accessible Rich Internet Applications
-   Benefits people who use assistive technologies (AT)
-   Provides role, name, and state
-   Semantic HTML coupled with JavaScript

Additional links

-   [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
-   [WAI-ARIA Spec](https://www.w3.org/TR/wai-aria/)
-   [ARIA Serious? Eric Eggert presentation](https://youtu.be/4bH57rWPnYo)

### What is the minimum recommended ratio of contrast between foreground text and background to comply with WCAG? Why does this matter?

#### Answer

4.5:1 is the calculated contrast ratio between foreground text and background that is recommended by the Web Content Accessibiity Guidelines (WCAG) success criteria (SC) 1.4.3: Contrast (Minimum). This SC was written by the World Wide Web Consortium (W3C) to ensure that people with low vision or color deficiencies are able to read (perceive) important content on a web page. It goes beyond color choices to ensure text stands out on the background it’s placed on.

#### Don’t forget:

-   At least 4.5:1 contrast ratio between foreground text and background
-   Benefits people with low vision or color deficiencies

Additional links

-   [Understanding SC 1.4.3](https://www.alaskawebdev.com/contact)
-   [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
-   [Contrast Ratio checker](https://contrast-ratio.com/#)

### What are some of the tools available to test the accessibility of a website or web application?

#### Answer

There are multiple tools that can help you to find for accessibility issues in your website or application.

Check for issues in your website:

-   Lighthouse from Google, it provides an option for accessibility testing, it will check for the compliance of different accessibility standards and give you an score with details on the different issues
-   Axe Coconut from DequeLabs, it is a Chrome extension that adds a tab in the Developer tools, it will check for accessibility issues and it will classify them by severity and suggest possible solutions

Check for issues in your code: \* Jest Axe, you can add unit tests for accessibility \* React Axe, test your React application with the axe-core accessibility testing library. Results will show in the Chrome DevTools console. \* eslint-plugin-jsx-a11y, pairing this plugin with an editor lint plugin, you can bake accessibility standards into your application in real-time.

Check for individual issues: \* Color Contrast checkers \* Use a screen reader \* Use only keyboard to navigate your site

#### Don’t forget:

-   None of the tools will replace manual testing
-   Mention of different ways to test accessibility

Additional links

-   [Jest Axe](https://github.com/nickcolley/jest-axe)
-   [eslint-plugin-jsx-a11y](https://www.w3.org/TR/wai-aria/)
-   [React axe](https://github.com/dequelabs/react-axe)
-   [Accessibility Checklist](http://romeo.elsevier.com/accessibility_checklist/)

### What is the Accessibility Tree?

#### Answer

The Accessibility Tree is a structure produced by the browser’s Accessibility APIs which provides accessibility information to assistive technologies such as screen readers. It runs parallel to the DOM and is similar to the DOM API, but with much fewer nodes, because a lot of that information is only useful for visual presentation. By writing semantic HTML we can take advantage of this process in creating an accessible experience for our users.

#### Don’t forget:

-   Tree structure exposing information to assistive technologies
-   Runs parallel to the DOM
-   Semantic HTML is essential in creating accessible experiences

Additional links

-   [Accessibility APIs](https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/)

### What is the purpose of the `alt` attribute on images?

#### Answer

The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purpose, in which case it should be left empty.

#### Don’t forget:

-   Decorative images should have an empty `alt` attribute.
-   Web crawlers use `alt` tags to understand image content, so they are considered important for Search Engine Optimization (SEO).
-   Put the `.` at the end of `alt` tag to improve accessibility.

Additional links

-   [A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

### What are `defer` and `async` attributes on a `<script>` tag?

#### Answer

If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order they are encountered.

The `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order.

The `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order.

Note: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).

    <script src="myscript.js"></script>http://myscript.jshttp://myscript.js

#### Don’t forget:

-   Placing a `defer` script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.
-   If the scripts rely on each other, use `defer`.
-   If the script is independent, use `async`.
-   Use `defer` if the DOM must be ready and the contents are not placed within a `DOMContentLoaded` listener.

Additional links

-   [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

### What is an `async` function?

async function foo() {  
…  
}

#### Answer

An `async` function is a function that allows you to pause the function’s execution while it waits for (`await`s) a promise to resolve. It’s an abstraction on top of the Promise API that makes asynchronous operations _look_ like they’re synchronous.

`async` functions automatically return a Promise object. Whatever you `return` from the `async` function will be the promise’s _resolution_. If instead you `throw` from the body of an `async` function, that will be how your async function _rejects_ the promise it returns.

Most importantly, `async` functions are able to use the `await` keyword in their function body, which **pauses the function** until the operation after the `await` completes, and allows it to return that operation’s result to a variable synchronously.

// Normal promises in regular function:  
function foo() {  
promiseCall()  
.then(result =&gt; {  
// do something with the result  
})  
}

// async functions  
async function foo() {  
const result = await promiseCall()  
// do something with the result  
}

#### Don’t forget:

-   `async` functions are just syntactic sugar on top of Promises.
-   They make asynchronous operations look like synchronous operations in your function.
-   They implicitly return a promise which resolves to whatever your `async` function returns, and reject to whatever your `async` function `throw`s.

Additional links

-   [MDN Docs — async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
-   [MDN Docs — await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### Create a function `batches` that returns the maximum number of whole batches that can be cooked from a recipe.

/\*\*  
It accepts two objects as arguments: the first object is the recipe  
for the food, while the second object is the available ingredients.  
Each ingredient’s value is a number representing how many units there are.

\`batches(recipe, available)\`  
\*/

// 0 batches can be made  
batches(  
{ milk: 100, butter: 50, flour: 5 },  
{ milk: 132, butter: 48, flour: 51 }  
)  
batches(  
{ milk: 100, flour: 4, sugar: 10, butter: 5 },  
{ milk: 1288, flour: 9, sugar: 95 }  
)

// 1 batch can be made  
batches(  
{ milk: 100, butter: 50, cheese: 10 },  
{ milk: 198, butter: 52, cheese: 10 }  
)

// 2 batches can be made  
batches(  
{ milk: 2, sugar: 40, butter: 20 },  
{ milk: 5, sugar: 120, butter: 500 }  
)

#### Answer

We must have all ingredients of the recipe available, and in quantities that are more than or equal to the number of units required. If just one of the ingredients is not available or lower than needed, we cannot make a single batch.

Use `Object.keys()` to return the ingredients of the recipe as an array, then use `Array.prototype.map()` to map each ingredient to the ratio of available units to the amount required by the recipe. If one of the ingredients required by the recipe is not available at all, the ratio will evaluate to `NaN`, so the logical OR operator can be used to fallback to `0` in this case.

Use the spread `...` operator to feed the array of all the ingredient ratios into `Math.min()` to determine the lowest ratio. Passing this entire result into `Math.floor()` rounds down to return the maximum number of whole batches.

const batches = (recipe, available) =&gt;  
Math.floor(  
Math.min(…Object.keys(recipe).map(k =&gt; available\[k\] / recipe\[k\] || 0))  
)

#### Don’t forget:

Additional links

### What is CSS BEM?

#### Answer

The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a “namespace” for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

    /* block component */.block {}

    /* element */.block__element {}

    /* modifier */.block__element--modifier {}

Here is an example with the class names on markup:

    <nav class="navbar">  <a href="/" class="navbar__link navbar__link--active"></a>  <a href="/" class="navbar__link"></a>  <a href="/" class="navbar__link"></a></nav>

In this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.

Since Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.

    <a href="/" class="navbar__link is-active"></a>

These must be chained to the Element and never alone however, or there will be scope issues.

    .navbar__link.is-active {}

#### Don’t forget:

-   Alternative solutions to scope issues like CSS-in-JS

Additional links

-   [Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)

### What is Big O Notation?

#### Answer

Big O notation is used in Computer Science to describe the time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity.

Algorithms don’t always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.

In these examples, the base time is 1 element = `1ms`.

O(1)

arr\[arr.length - 1\]

-   1000 elements = `1ms`

Constant time complexity. No matter how many elements the array has, it will theoretically take (excluding real-world variation) the same amount of time to execute.

O(N)

arr.filter(fn)

-   1000 elements = `1000ms`

Linear time complexity. The execution time will increase linearly with the number of elements the array has. If the array has 1000 elements and the function takes 1ms to execute, 7000 elements will take 7ms to execute. This is because the function must iterate through all elements of the array before returning a result.

O(\[1, N\])

arr.some(fn)

-   1000 elements = `1ms <= x <= 1000ms`

The execution time varies depending on the data supplied to the function, it may return very early or very late. The best case here is O(1) and the worst case is O(N).

O(NlogN)

arr.sort(fn)

-   1000 elements ~= `10000ms`

Browsers usually implement the quicksort algorithm for the `sort()` method and the average time complexity of quicksort is O(NlgN). This is very efficient for large collections.

O(N²)

for (let i = 0; i &lt; arr.length; i++) {  
for (let j = 0; j &lt; arr.length; j++) {  
// …  
}  
}

-   1000 elements = `1000000ms`

The execution time rises quadratically with the number of elements. Usually the result of nesting loops.

O(N!)

const permutations = arr =&gt; {  
if (arr.length &lt;= 2) return arr.length === 2 ? \[arr, \[arr\[1\], arr\[0\]\]\] : arr  
return arr.reduce(  
(acc, item, i) =&gt;  
acc.concat(  
permutations(\[…arr.slice(0, i), …arr.slice(i + 1)\]).map(val =&gt; \[  
item,  
…val  
\])  
),  
\[\]  
)  
}

-   1000 elements = `Infinity` (practically) ms

The execution time rises extremely fast with even just 1 addition to the array.

#### Don’t forget:

-   Be wary of nesting loops as execution time increases exponentially.

Additional links

-   [Big O Notation in JavaScript](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)

### Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.

function example() {  
console.log(this)  
}  
const boundExample = bind(example, { a: true })  
boundExample.call({ b: true }) // logs { a: true }

#### Answer

Return a function that accepts an arbitrary number of arguments by gathering them with the rest `...` operator. From that function, return the result of calling the `fn` with `Function.prototype.apply` to apply the context and the array of arguments to the function.

const bind = (fn, context) =&gt; (…args) =&gt; fn.apply(context, args)

#### Don’t forget:

Additional links

### What is the purpose of cache busting and how can you achieve it?

#### Answer

Browsers have a cache to temporarily store files on websites so they don’t need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.

However, it can cause problems when the website has been changed by developers because the user’s cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.

Cache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.

A common technique to force the browser to re-download the file is to append a query string to the end of the file.

-   `src="js/script.js"` =&gt; `src="js/script.js?v=2"`

The browser considers it a different file but prevents the need to change the file name.

#### Don’t forget:

Additional links

-   [Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)

### How can you avoid callback hells?

getData(function(a) {  
getMoreData(a, function(b) {  
getMoreData(b, function(c) {  
getMoreData(c, function(d) {  
getMoreData(d, function(e) {  
// …  
})  
})  
})  
})  
})

#### Answer

Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.

The above code can be restructured like so:

async function asyncAwaitVersion() {  
const a = await getData()  
const b = await getMoreData(a)  
const c = await getMoreData(b)  
const d = await getMoreData(c)  
const e = await getMoreData(d)  
// …  
}

There are lots of ways to solve the issue of callback hells:

-   Modularization: break callbacks into independent functions
-   Use a control flow library, like async
-   Use generators with Promises
-   Use async/await (from v7 on)

#### Don’t forget:

-   As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.

Additional links

-   [Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)
-   [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)

### What is the purpose of callback function as an argument of `setState`?

#### Answer

The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action.

setState({ name: “sudheer” }, () =&gt; {  
console.log(“The name has updated and component re-rendered”)  
})

#### Don’t forget:

-   The callback function is invoked after `setState` finishes and is used for any post action.
-   It is recommended to use lifecycle method rather this callback function.

Additional links

-   [React docs on](https://reactjs.org/docs/react-component.html#setstate) `[setState](https://reactjs.org/docs/react-component.html#setstate)`

### Which is the preferred option between callback refs and findDOMNode()?

#### Answer

Callback refs are preferred over the `findDOMNode()` API, due to the fact that `findDOMNode()` prevents certain improvements in React in the future.

// Legacy approach using findDOMNode()  
class MyComponent extends Component {  
componentDidMount() {  
findDOMNode(this).scrollIntoView()  
}

render() {  
return

}  
}

// Recommended approach using callback refs  
class MyComponent extends Component {  
componentDidMount() {  
this.node.scrollIntoView()  
}

render() {  
return &lt;div ref={node =&gt; (this.node = node)} /&gt;  
}  
}

#### Don’t forget:

-   Callback refs are preferred over `findDOMNode()`.

Additional links

-   [React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components)

### What is a callback? Can you show an example using one?

#### Answer

Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.

As an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.

function onClick() {  
console.log(“The user clicked on the page.”)  
}  
document.addEventListener(“click”,  
onClick)

However, callbacks can also be synchronous. The following `map` function takes a callback function that is invoked synchronously for each iteration of the loop (array element).

const map = (arr, callback) =&gt; {  
const result = \[\]  
for (let i = 0; i &lt; arr.length; i++) {  
result.push(callback(arr\[i\], i))  
}  
return result  
}  
map(\[1, 2, 3, 4, 5\], n =&gt; n \* 2) // \[2, 4, 6, 8, 10\]

#### Don’t forget:

-   Functions are first-class objects in JavaScript
-   Callbacks vs Promises

Additional links

-   [MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

### What is the `children` prop?

#### Answer

`children` is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only` and `React.Children.toArray`. A simple usage example of the children prop is as follows:

function GenericBox({ children }) {  
return

{children}

}

function App() {  
return (

Hello World

)  
}

#### Don’t forget:

-   Children is a prop that allows components to be passed as data to other components.
-   The React API provides methods to work with this prop.

Additional links

-   [React docs on Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

### Why does React use `className` instead of `class` like in HTML?

#### Answer

React’s philosophy in the beginning was to align with the browser DOM API rather than HTML, since that more closely represents how elements are created. Setting a `class` on an element meant using the `className` API:

const element = document.createElement(“div”)  
element.className = “hello”

Additionally, before ES5, reserved words could not be used in objects:

const element = {  
attributes: {  
class: “hello”  
}  
}

In IE8, this will throw an error.

In modern environments, destructuring will throw an error if trying to assign to a variable:

const { class } = this.props // Error  
const { className } = this.props // All good  
const { class: className } =  
this.props // All good, but  
cumbersome!

However, `class` _can_ be used as a prop without problems, as seen in other libraries like Preact. React currently allows you to use `class`, but will throw a warning and convert it to `className` under the hood. There is currently an open thread (as of January 2019) discussing changing `className` to `class` to reduce confusion.

#### Don’t forget:

Additional links

### How do you clone an object in JavaScript?

#### Answer

Using the object spread operator `...`, the object’s own enumerable properties can be copied into the new object. This creates a shallow clone of the object.

const obj = { a: 1, b: 2 }  
const shallowClone = { …obj }

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.

Other alternatives include:

-   `JSON.parse(JSON.stringify(obj))` can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).
-   `Object.assign({}, obj)` is another alternative.
-   `Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})` is another more verbose alternative that shows the concept in greater depth.

#### Don’t forget:

-   JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.
-   The same method can be used to merge two objects.

Additional links

-   [MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
-   [Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)

### What is a closure? Can you give a useful example of one?

#### Answer

A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:

-   Variables declared in its own scope
-   Variables declared in the scope of the parent function
-   Variables declared in the global scope

In JavaScript, all functions are closures because they have access to the outer scope, but most functions don’t utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.

In addition, closures are the only way to store private data that can’t be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user’s own code.

#### Don’t forget:

-   Closures are useful because they let you associate data with a function that operates on that data.
-   A closure can substitute an object with only a single method.
-   Closures can be used to emulate private properties and methods.

Additional links

-   [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
-   [What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
-   [I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

### How do you compare two objects in JavaScript?

#### Answer

Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===`. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value.

In order to test if two objects are equal in structure, a helper function is required. It will iterate through the own properties of each object to test if they have the same values, including nested objects. Optionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument.

Note: this technique does not attempt to test equivalence of data structures other than plain objects, arrays, functions, dates and primitive values.

function isDeepEqual(obj1, obj2, testPrototypes = false) {  
if (obj1 === obj2) {  
return true  
}

if (typeof obj1 === “function” && typeof obj2 === “function”) {  
return obj1.toString() === obj2.toString()  
}

if (obj1 instanceof Date && obj2 instanceof Date) {  
return obj1.getTime() === obj2.getTime()  
}

if (  
Object.prototype.toString.call(obj1) !==  
Object.prototype.toString.call(obj2) ||  
typeof obj1 !== “object”  
) {  
return false  
}

const prototypesAreEqual = testPrototypes  
? isDeepEqual(  
Object.getPrototypeOf(obj1),  
Object.getPrototypeOf(obj2),  
true  
)  
: true

const obj1Props = Object.getOwnPropertyNames(obj1)  
const obj2Props = Object.getOwnPropertyNames(obj2)

return (  
obj1Props.length === obj2Props.length &&  
prototypesAreEqual &&  
obj1Props.every(prop =&gt; isDeepEqual(obj1\[prop\], obj2\[prop\]))  
)  
}

#### Don’t forget:

-   Primitives like strings and numbers are compared by their value
-   Objects on the other hand are compared by their reference (location in memory)

Additional links

-   [Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
-   [Deep comparison between two values](https://30secondsofcode.org/object#equals)

### What is context?

#### Answer

Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

const { Provider, Consumer } = React.createContext(defaultValue)

#### Don’t forget:

-   Context provides a way to pass data through a tree of React components, without having to manually pass props.
-   Context is designed to share data that is considered _global_ for a tree of React components.

Additional links

-   [React docs on Context](https://reactjs.org/docs/context.html)

### What is CORS?

#### Answer

Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.

An example of a cross-origin request is a web application served from `[http://mydomain.com](http://mydomain.com/)` that uses AJAX to make a request for `[http://yourdomain.com](http://yourdomain.com./)`[.](http://yourdomain.com./)

For security reasons, browsers restrict cross-origin HTTP requests initiated by JavaScript. `XMLHttpRequest` and `fetch` follow the same-origin policy, meaning a web application using those APIs can only request HTTP resources from the same origin the application was accessed, unless the response from the other origin includes the correct CORS headers.

#### Don’t forget:

-   CORS behavior is not an error, it’s a security mechanism to protect users.
-   CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.

Additional links

-   [MDN docs for CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### Describe the layout of the CSS Box Model and briefly describe each component.

#### Answer

`Content`: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions `content-box width` and `content-box height`.

`Padding`: The transparent area surrounding the content. It has dimensions `padding-box width` and `padding-box height`.

`Border`: The area surrounding the padding (if any) and content. It has dimensions `border-box width` and `border-box height`.

_Margin_: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions `margin-box width` and `margin-box height`.

![](https://cdn-images-1.medium.com/max/800/0*KArkb77G2q_NcEhy.gif)

alt text

#### Don’t forget:

-   This is a very common question asked during front-end interviews and while it may seem easy, it is critical you know it well!
-   Shows a solid understanding of spacing and the DOM

Additional links

-   [W3School’s CSS Box Model Page](https://www.w3schools.com/Css/css_boxmodel.asp)
-   [Mozilla’s Intro to the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

### What are the advantages of using CSS preprocessors?

#### Answer

CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don’t Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.

#### Don’t forget:

-   They allow us to write more maintainable and scalable CSS
-   Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)

Additional links

-   [CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)

### What is the difference between ‘+’ and ‘~’ sibling selectors?.

#### Answer

The General Sibling Selector `~` selects all elements that are siblings of a specified element.

The following example selects all `<p>` elements that are siblings of `<div>` elements:

    div ~ p {  background-color: blue;}

The Adjacent Sibling Selector `+` selects all elements that are the adjacent siblings of a specified element.

The following example will select all `<p>` elements that are placed immediately after `<div>` elements:

    div + p {  background-color: red;}

#### Don’t forget:

Additional links

-   [W3School’s CSS Combinators Page](https://www.w3schools.com/css/css_combinators.asp)
-   [Mozilla’s Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

### Can you describe how CSS specificity works?

#### Answer

Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:

-   Inline rules (binary — 1 or 0)
-   Number of id selectors
-   Number of class, pseudo-class and attribute selectors
-   Number of tags and pseudo-element selectors

When two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page’s style sheet is deemed more specific and therefore applied to the element.

#### Don’t forget:

-   Specificity matrix: \[inline, id, class/pseudo-class/attribute, tag/pseudo-element\]
-   In cases of equal specificity, last rule is applied

Additional links

-   [CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

### What is debouncing?

#### Answer

Debouncing is a process to add some delay before executing a function. It is commonly used with DOM event listeners to improve the performance of page. It is a technique which allow us to “group” multiple sequential calls in a single one. A raw DOM event listeners can easily trigger 20+ events per second. A debounced function will only be called once the delay has passed.

const debounce = (func, delay) =&gt; {  
let debounceTimer;  
return function() {  
const context = this;  
const args = arguments;  
clearTimeout(debounceTimer);  
debounceTimer = setTimeout(() =&gt; func.apply(context, args), delay);  
}  
}

window.addEventListere(‘scroll’, debounce(function() {  
// Do stuff, this function will be called after a delay of 1 second  
}, 1000));

#### Don’t forget:

-   Common use case is to make API call only when user is finished typing while searching.

Additional links

-   [Debouncing explained](https://css-tricks.com/debouncing-throttling-explained-examples/)

### What is the DOM?

#### Answer

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

#### Don’t forget:

-   The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
-   The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.
-   `document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.
-   Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.

Additional links

-   [MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)

### What is the difference between the equality operators `==` and `===`?

#### Answer

Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.

#### Don’t forget:

-   Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.
-   Type coercion means the values are converted into the same type.
-   Mention of falsy values and their comparison.

Additional links

-   [MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

### What is the difference between an element and a component in React?

#### Answer

An element is a plain JavaScript object that represents a DOM node or component. Elements are pure and never mutated, and are cheap to create.

A component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don’t necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries) and may be expensive to create.

const Component = () =&gt; “Hello”  
const componentElement =  
const domNodeElement =

#### Don’t forget:

-   Elements are immutable, plain objects that describe the DOM nodes or components you want to render.
-   Components can be either classes or functions, that take props as an input and return an element tree as the output.

Additional links

-   [React docs on Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
-   [React docs on Components and Props](https://reactjs.org/docs/components-and-props.html)

### What is the difference between `em` and `rem` units?

#### Answer

Both `em` and `rem` units are based on the `font-size` CSS property. The only difference is where they inherit their values from.

-   `em` units inherit their value from the `font-size` of the parent element
-   `rem` units inherit their value from the `font-size` of the root element (`html`)

In most browsers, the `font-size` of the root element is set to `16px` by default.

#### Don’t forget:

-   Benefits of using `em` and `rem` units

Additional links

-   [CSS units for font-size: px | em | rem](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97)

### What are error boundaries in React?

#### Answer

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

Class components become error boundaries if they define either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch().`

class ErrorBoundary extends React.Component {  
constructor(props) {  
super(props)  
this.state = { hasError: false }  
}

// Use componentDidCatch to log the error  
componentDidCatch(error, info) {  
// You can also log the error to an error reporting service  
logErrorToMyService(error, info)  
}

// use getDerivedStateFromError to update state  
static getDerivedStateFromError(error) {  
// Display fallback UI  
return { hasError: true };  
}

render() {  
if (this.state.hasError) {  
// You can render any custom fallback UI  
return

# Something went wrong.

}  
return this.props.children  
}  
}

#### Don’t forget:

-   Error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself.

Additional links

<a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a>

### What is event delegation and why is it useful? Can you show an example of how to use it?

#### Answer

Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events “bubble” up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.

DOM events provide useful information about the element that initiated the event via `Event.target`. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.

This provides two main benefits:

-   It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.
-   If elements are dynamically added to the parent, there is no need to register new event listeners for them.

Instead of:

document.querySelectorAll(“button”).forEach(button =&gt; {  
button.addEventListener(“click”, handleButtonClick)  
})

Event delegation involves using a condition to ensure the child target matches our desired element:

document.addEventListener(“click”, e =&gt; {  
if (e.target.closest(“button”)) {  
handleButtonClick()  
}  
})

#### Don’t forget:

-   The difference between event bubbling and capturing

Additional links

-   [Event Delegation](https://davidwalsh.name/event-delegate)

### What is event-driven programming?

#### Answer

Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.

A common example of this is the pattern of elements listening to DOM events such as `click` and `mouseenter`, where a callback function is run when the event occurs.

document.addEventListener(“click”, function(event) {  
// This callback function is run when the user  
// clicks on the document.  
})

Without the context of the DOM, the pattern may look like this:

const hub = createEventHub()  
hub.on(“message”, function(data) {  
console.log(\`${data.username} said ${data.text}\`)  
})  
hub.emit(“message”, {  
username: “John”,  
text: “Hello?”  
})

With this implementation, `on` is the way to _subscribe_ to an event, while `emit` is the way to _publish_ the event.

#### Don’t forget:

-   Follows a publish-subscribe pattern.
-   Responds to events that occur by running any callback functions subscribed to the event.
-   Show how to create a simple pub-sub implementation with JavaScript.

Additional links

-   [MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)
-   [Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)

### What is the difference between an expression and a statement in JavaScript?

#### Answer

There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:

-   **Expression**: produces a value
-   **Statement**: performs an action
-   **Expression statement**: produces a value and performs an action

A general rule of thumb:

> _If you can print it or assign it to a variable, it’s an expression. If you can’t, it’s a statement._

Statements

let x = 0

function declaration() {}

if (true) {  
}

Statements appear as instructions that do something but don’t produce values.

// Assign \`x\` to the absolute value of \`y\`.  
var x  
if (y &gt;= 0) {  
x = y  
} else {  
x = -y  
}

The only expression in the above code is `y >= 0` which produces a value, either `true` or `false`. A value is not produced by other parts of the code.

Expressions

Expressions produce a value. They can be passed around to functions because the interpreter replaces them with the value they resolve to.

5 + 5 // =&gt; 10

lastCharacter(“input”) // =&gt; “t”

true === true // =&gt; true

Expression statements

There is an equivalent version of the set of statements used before as an expression using the conditional operator:

// Assign \`x\` as the absolute value of \`y\`.  
var x = y &gt;= 0 ? y : -y

This is both an expression and a statement, because we are declaring a variable `x` (statement) as an evaluation (expression).

#### Don’t forget:

-   Function declarations vs function expressions

Additional links

-   [What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)

### What are truthy and falsy values in JavaScript?

#### Answer

A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to `true` or `false` when performing certain operations.

There are 6 falsy values in JavaScript. They are:

-   `false`
-   `undefined`
-   `null`
-   `""` (empty string)
-   `NaN`
-   `0` (both `+0` and `-0`)

Every other value is considered truthy.

A value’s truthiness can be examined by passing it into the `Boolean` function.

Boolean("") // false  
Boolean(\[\]) // true

There is a shortcut for this using the logical NOT `!` operator. Using `!` once will convert a value to its inverse boolean equivalent (i.e. not false is true), and `!` once more will convert back, thus effectively converting the value to a boolean.

!!"" // false  
!!\[\] // true

#### Don’t forget:

Additional links

-   [Truthy on MDN](https://developer.mozilla.org/en/docs/Glossary/Truthy)
-   [Falsy on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

### Generate an array, containing the Fibonacci sequence, up until the nth term.

#### Answer

Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

const fibonacci = n =&gt;  
\[…Array(n)\].reduce(  
(acc, val, i) =&gt; acc.concat(i &gt; 1 ? acc\[i - 1\] + acc\[i - 2\] : i),  
\[\]  
)

#### Don’t forget:

Additional links

-   [Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)

### Given an array of words, write a method to output matching sets of anagrams.

const words = \[‘rates’, ‘rat’, ‘stare’, ‘taser’, ‘tears’, ‘art’, ‘tabs’, ‘tar’, ‘bats’, ‘state’\];

#### Answer

const words = \[‘rates’, ‘rat’, ‘stare’, ‘taser’, ‘tears’, ‘art’, ‘tabs’, ‘tar’, ‘bats’, ‘state’\];

function anagramGroups(wordAry){  
const groupedWords = {};

    // iterate over each word in the array
    wordAry.map(word => {
      // alphabetize the word and a separate variable
      alphaWord = word.split('').sort().join('');
      // if the alphabetize word is already a key, push the actual word value (this is an anagram)
      if(groupedWords\[alphaWord\]) {
        return groupedWords\[alphaWord\].push(word);
      }
      // otherwise add the alphabetize word key and actual word value (may not turn out to be an anagram)
      groupedWords\[alphaWord\] = \[word\];
    })

    return groupedWords;

}

// call the function and store results in a variable called collectedAnagrams  
const collectedAnagrams = anagramGroups(words);

// iterate over groupedAnagrams, printing out group of values  
for(const sortedWord in collectedAnagrams) {  
if(collectedAnagrams\[sortedWord\].length &gt; 1) {  
console.log(collectedAnagrams\[sortedWord\].toString());  
}  
}

#### Don’t forget:

-   Iterate the array
-   Alphabetize each word
-   Store alphabetize word as the key value in a groupedWords object with the original word as the value
-   Compare alphabetize words to object keys and add additional original words when matches are found
-   Iterate over the return object and output the values, when there is more then one. (single values mean no anagram )

Additional links

-   [Find The Anagrams Gist](https://gist.github.com/tinabme/fe6878f5cff42f60a537262503f9b765)
-   [isAnagram function implementation](https://www.30secondsofcode.org/snippet/isAnagram)

### Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.

    <div class="row">  <div class="col-2"></div>  <div class="col-7"></div>  <div class="col-3"></div></div>

#### Answer

Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.

    .row {  display: flex;}

    .col-2 {  flex: 2;}

    .col-7 {  flex: 7;}

    .col-3 {  flex: 3;}

#### Don’t forget:

Additional links

-   [MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
-   [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### What does `0.1 + 0.2 === 0.3` evaluate to?

#### Answer

It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.

0.1 + 0.2 // 0.30000000000000004

A solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.

const approxEqual = (n1, n2, epsilon = 0.0001) =&gt; Math.abs(n1 - n2) &lt; epsilon  
approxEqual(0.1 + 0.2, 0.3) // true

#### Don’t forget:

-   A simple solution to this problem

Additional links

-   [A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)
-   [Fix “0.1 + 0.2 = 0.300000004” in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)

### What is a focus ring? What is the correct solution to handle them?

#### Answer

A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused.

In the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element.

In recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users.

The best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.

#### Don’t forget:

Additional links

-   [:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)

### What is the difference between the array methods `map()` and `forEach()`?

#### Answer

Both methods iterate through the elements of an array. `map()` maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.

#### Don’t forget:

-   Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
-   `map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array.

Additional links

-   [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
-   [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
-   [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

### What are fragments?

#### Answer

Fragments allow a React component to return multiple elements without a wrapper, by grouping the children without adding extra elements to the DOM. Fragments offer better performance, lower memory usage, a cleaner DOM and can help in dealing with certain CSS mechanisms (e.g. tables, Flexbox and Grid).

render() {  
return (  
&lt;React.Fragment&gt;

&lt;/React.Fragment&gt;  
);  
}

// Short syntax supported by Babel 7  
render() {  
return (  
&lt;&gt;

&lt;/&gt;  
);  
}

#### Don’t forget:

-   Fragments group multiple elements returned from a component, without adding a DOM element around them.

Additional links

-   [React docs on Fragments](https://reactjs.org/docs/fragments.html)

### What is functional programming?

#### Answer

Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don’t produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.

#### Don’t forget:

-   Cleaner, more concise development experience
-   Simple function composition
-   Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)
-   JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)

Additional links

-   [Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)
-   [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

### Describe your thoughts on how a single page web app should handle focus when changing routes

#### Answer

Single page applications make use of client-side rendering. This means that ‘[examplesite.com](http://examplesite.com/)’ and ‘[examplesite.com/page2](http://examplesite.com/page2)’ are actually the same HTML web page, but the client app decides what content to drop into that single page at runtime. Your user never actually “leaves” the page, and this causes some accessibility issues in terms of focus.

Unless focus is explicitly managed in the app, a scenario like this may happen:

1.  User visits ‘[examplesite.com](http://examplesite.com/)’
2.  User clicks a link to go to another route: ‘[examplesite.com/product1](http://examplesite.com/product1)’
3.  Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
4.  Focus is still on the link that was clicked in step 2
5.  If a user uses the keyboard or screen reader to now try and read the content, the focused starting point is in the middle of the page on an element no longer visible

Many strategies have been proposed in handling this situation, all involving explicitly managing the focus when the new page content is rendered. [Recent research by GatsbyJS](https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/) suggests the best approach is:

1.  User visits ‘[examplesite.com](http://examplesite.com/)’
2.  User clicks a link to go to another route: ‘[examplesite.com/product1](http://examplesite.com/product1)’
3.  Client app changes the visible content to show the details for this new route (e.g. some info about Product 1)
4.  Client app manually places focus on the main header at the top of the page (almost always this will be the H1 element)

By doing so, focus is reset to the top of the page, ready for the user to begin exploring the new content. This solution requires inserting the main heading into the start of tabbing order with `tabindex="-1"`.

#### Don’t forget:

-   Focus issues caused by client-side rendering, instead of server-side
-   Focus should not be left on elements no longer visible on the page
-   Challenges faced by screen reader users and users utilising keyboard navigation
-   Careful manual focus management required

Additional links

-   [Handling Focus on Route Change: Up Your A11y](https://www.upyoura11y.com/handling-focus/)

### What are higher-order components?

#### Answer

A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React’s compositional nature. Higher-order components are like **pure components** because they accept any dynamically provided child component, but they won’t modify or copy any behavior from their input components.

const EnhancedComponent = higherOrderComponent(WrappedComponent)

#### Don’t forget:

-   They can be used for state abstraction and manipulation, props manipulation, render high jacking, etc.

Additional links

### What will the console log in this example?

var foo = 1  
var foobar = function() {  
console.log(foo)  
var foo = 2  
}  
foobar()

#### Answer

Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.

#### Don’t forget:

-   Hoisting is JavaScript’s default behavior of moving declarations to the top
-   Mention of `strict` mode

Additional links

-   [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

### How does hoisting work in JavaScript?

#### Answer

Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

However, the value is not hoisted with the declaration.

The following snippet:

console.log(hoist)  
var hoist = “value”

is equivalent to:

var hoist  
console.log(hoist)  
hoist = “value”

Therefore logging `hoist` outputs `undefined` to the console, not `"value"`.

Hoisting also allows you to invoke a function declaration before it appears to be declared in a program.

myFunction() // No error; logs “hello”  
function myFunction() {  
console.log(“hello”)  
}

But be wary of function expressions that are assigned to a variable:

myFunction() // Error: \`myFunction\` is not a function  
var myFunction = function() {  
console.log(“hello”)  
}

#### Don’t forget:

-   Hoisting is JavaScript’s default behavior of moving declarations to the top
-   Functions declarations are hoisted before variable declarations

Additional links

-   [MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
-   [Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

### Can a web page contain multiple `<header>` elements? What about `<footer>` elements?

#### Answer

Yes to both. The W3 documents state that the tags represent the header(`<header>`) and footer(`<footer>`) areas of their nearest ancestor “section”. So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element.

#### Don’t forget:

-   W3 recommends having as many as you want, but only 1 of each for each “section” of your page, i.e. body, section etc.

Additional links

-   [StackOverflow — Using header or footer tag twice](https://stackoverflow.com/questions/4837269/html5-using-header-or-footer-tag-twice?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

### Discuss the differences between an HTML specification and a browser’s implementation thereof.

#### Answer

HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be “valid” according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.

A browser is said to “support” a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.

#### Don’t forget:

-   `HTML5` defines some rules to follow for an invalid `HTML5` document (i.e., one that contains syntactical errors)
-   However, invalid documents may contain anything, so it’s impossible for the specification to handle all possibilities comprehensively.
-   Thus, many decisions about how to handle malformed documents are left up to the browser.

Additional links

-   [HTML 5.2 WWW Specifications](https://www.w3.org/TR/html52/)

### What is the difference between HTML and React event handling?

#### Answer

In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:

    <button onclick="handleClick()"></button>

In React, the attribute name is camelCase and are passed the function reference inside curly braces:

In HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.

    <a href="#" onclick="console.log('The link was clicked.'); return false" />

function handleClick(e) {  
e.preventDefault()  
console.log(“The link was clicked.”)  
}

#### Don’t forget:

-   HTML uses lowercase, React uses camelCase.

Additional links

-   [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

### What are some differences that XHTML has compared to HTML?

#### Answer

Some of the key differences are:

-   An XHTML element must have an XHTML `<DOCTYPE>`
-   Attributes values must be enclosed in quotes
-   Attribute minimization is forbidden (e.g. one has to use `checked="checked"` instead of `checked`)
-   Elements must always be properly nested
-   Elements must always be closed
-   Special characters must be escaped

#### Don’t forget:

-   Any element can be self-closed
-   Tags ands attributes are case-sensitive, usually lowercase

Additional links

-   [W3Schools docs for HTML and XHTML](https://www.w3schools.com/html/html_xhtml.asp)

### Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`

#### Answer

-   `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.
-   `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing its meaning. Individual blog posts or news stories are good examples.
-   `<section>` is a flexible container for holding content that shares a common informational theme or purpose.
-   `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.

#### Don’t forget:

-   Other semantic elements are `<form>` and `<table>`

Additional links

-   [HTML 5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

### What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.

#### Answer

With HTML5, web pages can store data locally within the user’s browser. The data is stored in name/value pairs, and a web page can only access data stored by itself.

**Differences between** `**localStorage**` **and** `**sessionStorage**` **regarding lifetime:**

-   Data stored through `localStorage` is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it.
-   `sessionStorage` has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through `sessionStorage` is deleted.

**Differences between** `**localStorage**` **and** `**sessionStorage**` **regarding storage scope:** Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.

-   `sessionStorage` is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate `sessionStorage` data.
-   Unlike in `localStorage`, the same scripts from the same origin can’t access each other’s `sessionStorage` when opened in different tabs.

#### Don’t forget:

-   Earlier, this was done with cookies.
-   The storage limit is far larger (at least 5MB) than with cookies and its faster.
-   The data is never transferred to the server and can only be used if the client specifically asks for it.

Additional links

-   [W3Schools — HTML5 Webstorage](https://www.w3schools.com/html/html5_webstorage.asp)

### What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?

#### Answer

This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is immediately invoked so that the namespace (library name) is assigned the return value of the function.

const myLibrary = (function() {  
var privateVariable = 2  
return {  
publicMethod: () =&gt; privateVariable  
}  
})()  
privateVariable // ReferenceError  
myLibrary.publicMethod() // 2

#### Don’t forget:

-   Used among many popular JavaScript libraries
-   Creates a private namespace

Additional links

-   [MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### Explain the differences between imperative and declarative programming.

#### Answer

These two types of programming can roughly be summarized as:

-   Imperative: **how** to achieve something
-   Declarative: **what** should be achieved

A common example of declarative programming is CSS. The developer specifies CSS properties that describe what something should look like rather than how to achieve it. The “how” is abstracted away by the browser.

On the other hand, imperative programming involves the steps required to achieve something. In JavaScript, the differences can be contrasted like so:

Imperative

const numbers = \[1, 2, 3, 4, 5\]  
const numbersDoubled = \[\]  
for (let i = 0; i &lt; numbers.length; i++) {  
numbersDoubled\[i\] = numbers\[i\] \* 2  
}

We manually loop over the numbers of the array and assign the new index as the number doubled.

Declarative

const numbers = \[1, 2, 3, 4, 5\]  
const numbersDoubled = numbers.map(n =&gt; n \* 2)

We declare that the new array is mapped to a new one where each value is doubled.

#### Don’t forget:

-   Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.
-   Declarative programming is more terse and easier to process at a glance.

Additional links

-   [Declarative vs Imperative Programming](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

### What are inline conditional expressions?

#### Answer

Since a JSX element tree is one large expression, you cannot embed statements inside. Conditional expressions act as a replacement for statements to use inside the tree.

For example, this won’t work:

function App({ messages, isVisible }) {  
return (

if (messages.length &gt; 0) {

## You have {messages.length} unread messages.

} else {

## You have no unread messages.

}  
if (isVisible) {

I am visible.

}

)  
}

Logical AND `&&` and the ternary `? :` operator replace the `if`/`else` statements.

function App({ messages, isVisible }) {  
return (

{messages.length &gt; 0 ? (

## You have {messages.length} unread messages.

) : (

## You have no unread messages.

)}  
{isVisible &&

I am visible.

}

)  
}

#### Don’t forget:

Additional links

-   [React docs on Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

### What is a key? What are the benefits of using it in lists?

#### Answer

Keys are a special string attribute that helps React identify which items have been changed, added or removed. They are used when rendering array elements to give them a stable identity. Each element’s key must be unique (e.g. IDs from the data or indexes as a last resort).

const todoItems = todos.map(todo =&gt;

{todo.text}

)

-   Using indexes as keys is not recommended if the order of items may change, as it might negatively impact performance and may cause issues with component state.
-   If you extract list items as a separate component then apply keys on the list component instead of the `<li>` tag.

#### Don’t forget:

-   Keys give elements in a collection a stable identity and help React identify changes.
-   You should avoid using indexes as keys if the order of items may change.
-   You should lift the key up to the component, instead of the `<li>` element, if you extract list items as components.

Additional links

-   [React docs on Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

### What are landmark roles and how can they be useful?

#### Answer

Landmark roles is a way to identify different sections of a page like the main content or a navigation region. The Landmarks helps assistive technology users to navigate a page, allowing them skip over areas of it.

For example,

    <div id="header" role="banner">Header of the Page</div><div id="content" role="main">Main Content Goes Here</div>

#### Don’t forget:

-   Identify sections of a page
-   Assist users in navigating a page

Additional links

-   [ARIA Landmark Roles](https://www.washington.edu/accessibility/web/landmarks/)
-   [Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page)

### What is the difference between lexical scoping and dynamic scoping?

#### Answer

Lexical scoping refers to when the location of a function’s definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function’s invocation to determine which variables are available.

#### Don’t forget:

-   Lexical scoping is also known as static scoping.
-   Lexical scoping in JavaScript allows for the concept of closures.
-   Most languages use lexical scoping because it tends to promote source code that is more easily understood.

Additional links

-   [Mozilla Docs — Closures & Lexical Scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### What are the lifecycle methods in React?

#### Answer

`getDerivedStateFromProps`: Executed before rendering on the initial mount and all component updates. Used to update the state based on changes in props over time. Has rare use cases, like tracking component animations during the lifecycle. There are only few cases where this makes sense to use over other lifecycle methods. It expects to return an object that will be the the new state, or null to update nothing. This method does not have access to the component instance either.

`componentDidMount`: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur.

`shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn’t need to render after state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.

`getSnapshotBeforeUpdate`: Invoked right after a component render happens because of an update, before `componentDidUpdate`. Any value returned from this method will be passed to `componentDidUpdate`.

`componentDidUpdate`: Mostly it is used to update the DOM in response to prop or state changes.

`componentWillUnmount`: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

`componentDidCatch`: Used in error boundaries, which are components that implement this method. It allows the component to catch JavaScript errors anywhere in the _child_ component tree (below this component), log errors, and display a UI with error information.

#### Don’t forget:

Additional links

### What are the different phases of the component lifecycle in React?

#### Answer

There are four different phases of component’s lifecycle:

**Initialization**: In this phase, the component prepares setting up the initial state and default props.

**Mounting**: The react component is ready to mount to the DOM. This phase covers the `getDerivedStateFromProps` and `componentDidMount` lifecycle methods.

**Updating**: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers the `getDerivedStateFromProps`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate` and `componentDidUpdate` lifecycle methods.

**Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes the `componentWillUnmount` lifecycle method.

**Error Handling**: In this phase, the component is called whenever there’s an error during rendering, in a lifecycle method, or in the constructor for any child component. This phase includes the `componentDidCatch` lifecycle method.

#### Don’t forget:

Additional links

### What does lifting state up in React mean?

#### Answer

When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, it is recommended to move the shared state to parent instead of maintaining the local state in both child components.

#### Don’t forget:

Additional links

### Create a function that masks a string of characters with `#` except for the last four (4) characters.

mask(“123456789”) // “\#\#\#\#\#6789”

#### Answer

> _There are many ways to solve this problem, this is just one one of them._

Using `String.prototype.slice()` we can grab the last 4 characters of the string by passing `-4` as an argument. Then, using `String.prototype.padStart()`, we can pad the string to the original length with the repeated mask character.

const mask = (str, maskChar = “\#”) =&gt;  
str.slice(-4).padStart(str.length, maskChar)

#### Don’t forget:

-   Short, one-line functional solutions to problems should be preferred provided they are efficient

Additional links

### Can you name the four types of `@media` properties?

#### Answer

-   `all`, which applies to all media type devices
-   `print`, which only applies to printers
-   `screen`, which only applies to screens (desktops, tablets, mobile etc.)
-   `speech`, which only applies to screenreaders

#### Don’t forget:

Additional links

-   [MDN docs for](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) `[@media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)` [rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
-   [MDN docs for using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

### What is memoization?

#### Answer

Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.

A basic implementation in JavaScript looks like this:

const memoize = fn =&gt; {  
const cache = new Map()  
return value =&gt; {  
const cachedResult = cache.get(value)  
if (cachedResult !== undefined) return cachedResult  
const result = fn(value)  
cache.set(value, result)  
return result  
}  
}

#### Don’t forget:

-   The above technique returns a unary function even if the function can take multiple arguments.
-   The first function call will be slower than usual because of the overhead created by checking if a cached result exists and setting a result before returning the value.
-   Memoization increases performance on subsequent function calls but still needs to do work on the first call.

Additional links

-   [Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)

### How do you ensure methods have the correct `this` context in React component classes?

#### Answer

In JavaScript classes, the methods are not bound by default. This means that their `this` context can be changed (in the case of an event handler, to the element that is listening to the event) and will not refer to the component instance. To solve this, `Function.prototype.bind()` can be used to enforce the `this` context as the component instance.

constructor(props) {  
super(props);  
this.handleClick = this.handleClick.bind(this);  
}

handleClick() {  
// Perform some logic  
}

-   The `bind` approach can be verbose and requires defining a `constructor`, so the new public class fields syntax is generally preferred:

handleClick = () =&gt; {  
console.log(‘this is:’, this);  
}

render() {  
return (

Click me

);  
}

-   You can also use an inline arrow function, because lexical `this` (referring to the component instance) is preserved:

&lt;button onClick={e =&gt; this.handleClick(e)}&gt;Click me

Note that extra re-rendering can occur using this technique because a new function reference is created on render, which gets passed down to child components and breaks `shouldComponentUpdate` / `PureComponent` shallow equality checks to prevent unnecessary re-renders. In cases where performance is important, it is preferred to go with `bind` in the constructor, or the public class fields syntax approach, because the function reference remains constant.

#### Don’t forget:

-   You can either bind methods to the component instance context in the constructor, use public class fields syntax, or use inline arrow functions.

Additional links

-   [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)
-   [React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)

### What is a MIME type and what is it used for?

#### Answer

`MIME` is an acronym for `Multi-purpose Internet Mail Extensions`. It is used as a standard way of classifying file types over the Internet.

#### Don’t forget:

-   A `MIME type` actually has two parts: a type and a subtype that are separated by a slash (/). For example, the `MIME type` for Microsoft Word files is `application/msword` (i.e., type is application and the subtype is msword).

Additional links

-   [MIME Type — MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

### Contrast mutable and immutable values, and mutating vs non-mutating methods.

#### Answer

The two terms can be contrasted as:

-   Mutable: subject to change
-   Immutable: cannot change

In JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value.

All `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.

const myString = “hello!”  
myString.replace(“!”, "") // returns a new string, cannot mutate the original value

const originalArray = \[1, 2, 3\]  
originalArray.push(4) // mutates originalArray, now \[1, 2, 3, 4\]  
originalArray.concat(4) // returns a new array, does not mutate the original

#### Don’t forget:

-   List of mutating and non-mutating array methods

Additional links

-   [Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)

### What is the only value not equal to itself in JavaScript?

#### Answer

`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal.

#### Don’t forget:

-   The difference between `isNaN()` and `Number.isNaN()`
-   `const isNaN = x => x !== x`

Additional links

-   [MDN docs for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) `[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)`

### NodeJS often uses a callback pattern where if an error is encountered during execution, this error is passed as the first argument to the callback. What are the advantages of this pattern?

fs.readFile(filePath, function(err, data) {  
if (err) {  
// handle the error, the return is important here  
// so execution stops here  
return console.log(err)  
}  
// use the data object  
console.log(data)  
})

#### Answer

Advantages include:

-   Not needing to process data if there is no need to even reference it
-   Having a consistent API leads to more adoption
-   Ability to easily adapt a callback pattern that will lead to more maintainable code

As you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback’s only parameter. The callback function allows a user to easily know whether or not an error occurred.

This practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.

var isTrue = function(value, callback) {  
if (value === true) {  
callback(null, “Value was true.”)  
} else {  
callback(new Error(“Value is not true!”))  
}  
}

var callback = function(error, retval) {  
if (error) {  
console.log(error)  
return  
}  
console.log(retval)  
}

isTrue(false, callback)  
isTrue(true, callback)

/\*  
{ stack: \[Getter/Setter\],  
arguments: undefined,  
type: undefined,  
message: ‘Value is not true!’ }  
Value was true.  
\*/

#### Don’t forget:

-   This is just a convention. However, you should stick to it.

Additional links

-   [The Node.js Way — Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
-   [What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)

### What is the event loop in Node.js?

#### Answer

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.

#### Don’t forget:

-   The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded

Additional links

-   [Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

### What is the difference between `null` and `undefined`?

#### Answer

In JavaScript, two values discretely represent nothing — `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.

#### Don’t forget:

-   `typeof undefined` evaluates to `"undefined"`.
-   `typeof null` evaluates `"object"`. However, it is still a primitive value and this is considered an implementation bug in JavaScript.
-   `undefined == null` evaluates to `true`.

Additional links

-   [MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
-   [MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### Describe the different ways to create an object. When should certain ways be preferred over others?

#### Answer

Object literal

Often used to store one occurrence of data.

const person = {  
name: “John”,  
age: 50,  
birthday() {  
this.age++  
}  
}  
person.birthday() // person.age === 51

Constructor

Often used when you need to create multiple instances of an object, each with their own data that other instances of the class cannot affect. The `new` operator must be used before invoking the constructor or the global object will be mutated.

function Person(name, age) {  
this.name = name  
this.age = age  
}  
Person.prototype.birthday = function() {  
this.age++  
}  
const person1 = new Person(“John”, 50)  
const person2 = new Person(“Sally”, 20)  
person1.birthday() // person1.age === 51  
person2.birthday() // person2.age === 21

Factory function

Creates a new object similar to a constructor, but can store private data using a closure. There is also no need to use `new` before invoking the function or the `this` keyword. Factory functions usually discard the idea of prototypes and keep all properties and methods as own properties of the object.

const createPerson = (name, age) =&gt; {  
const birthday = () =&gt; person.age++  
const person = { name, age, birthday }  
return person  
}  
const person = createPerson(“John”, 50)  
person.birthday() // person.age === 51

`Object.create()`

Sets the prototype of the newly created object.

const personProto = {  
birthday() {  
this.age++  
}  
}  
const person = Object.create(personProto)  
person.age = 50  
person.birthday() // person.age === 51

A second argument can also be supplied to `Object.create()` which acts as a descriptor for the new properties to be defined.

Object.create(personProto, {  
age: {  
value: 50,  
writable: true,  
enumerable: true  
}  
})

#### Don’t forget:

-   Prototypes are objects that other objects inherit properties and methods from.
-   Factory functions offer private properties and methods through a closure but increase memory usage as a tradeoff, while classes do not have private properties or methods but reduce memory impact by reusing a single prototype object.

Additional links

### What is the difference between a parameter and an argument?

#### Answer

Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.

function myFunction(parameter1, parameter2) {  
console.log(arguments\[0\]) // “argument1”  
}  
myFunction(“argument1”, “argument2”)

#### Don’t forget:

-   `arguments` is an array-like object containing information about the arguments supplied to an invoked function.
-   `myFunction.length` describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied).

Additional links

### Does JavaScript pass by value or by reference?

#### Answer

JavaScript always passes by value. However, with objects, the value is a reference to the object.

#### Don’t forget:

-   Difference between pass-by-value and pass-by-reference

Additional links

-   [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

### How do you pass an argument to an event handler or callback?

#### Answer

You can use an arrow function to wrap around an event handler and pass arguments, which is equivalent to calling `bind`:

&lt;button onClick={() =&gt; this.handleClick(id)} /&gt;  
&lt;button onClick={this.handleClick.bind(this, id)} /&gt;

#### Don’t forget:

Additional links

-   [React docs on Handling Events](https://reactjs.org/docs/handling-events.html)

### Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.

const square = v =&gt; v \* v  
const double = v =&gt; v \* 2  
const addOne = v =&gt; v + 1  
const res = pipe(square, double, addOne)  
res(3) // 19; addOne(double(square(3)))

#### Answer

Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.

const pipe = (…fns) =&gt; x =&gt; fns.reduce((v, fn) =&gt; fn(v), x)

#### Don’t forget:

-   Function composition is the process of combining two or more functions to produce a new function.

Additional links

-   [What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

### What are portals in React?

#### Answer

Portal are the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

ReactDOM.createPortal(child, container)

The first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.

#### Don’t forget:

Additional links

-   [React docs on Portals](https://reactjs.org/docs/portals.html)

### What is the difference between the postfix `i++` and prefix `++i` increment operators?

#### Answer

Both increment the variable value by 1. The difference is what they evaluate to.

The postfix increment operator evaluates to the value _before_ it was incremented.

let i = 0  
i++ // 0  
// i === 1

The prefix increment operator evaluates to the value _after_ it was incremented.

let i = 0  
++i // 1  
// i === 1

#### Don’t forget:

Additional links

### In which states can a Promise be?

#### Answer

A `Promise` is in one of these states:

-   pending: initial state, neither fulfilled nor rejected.
-   fulfilled: meaning that the operation completed successfully.
-   rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise’s then method are called.

#### Don’t forget:

Additional links

-   [Official Web Docs — Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### What are Promises?

#### Answer

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. An example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.

new Promise((resolve, reject) =&gt; {  
setTimeout(() =&gt; {  
resolve(“result”)  
}, 100)  
})  
.then(console.log)  
.catch(console.error)

#### Don’t forget:

-   Take a look into the other questions regarding `Promise`s!

Additional links

-   [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e772618)

### How to apply prop validation in React?

#### Answer

When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data types, it will generate warning messages in the console for development mode. They are stripped in production mode due to their performance impact. Required props are defined with `isRequired`.

For example, we define `propTypes` for component as below:

import PropTypes from “prop-types”

class User extends React.Component {  
static propTypes = {  
name: PropTypes.string.isRequired,  
age: PropTypes.number.isRequired  
}

render() {  
return (

# Welcome, {this.props.name}

Age, {this.props.age}  
)  
}  
}

#### Don’t forget:

-   We can define custom `propTypes`
-   Using `propTypes` is not mandatory. However, it is a good practice and can reduce bugs.

Additional links

### How does prototypal inheritance differ from classical inheritance?

#### Answer

In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword.

In the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`.

#### Don’t forget:

Additional links

-   [MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### What is a pure function?

#### Answer

A pure function is a function that satisfies these two conditions:

-   Given the same input, the function returns the same output.
-   The function doesn’t cause side effects outside of the function’s scope (i.e. mutate data outside the function or data supplied to the function).

Pure functions can mutate local data within the function as long as it satisfies the two conditions above.

Pure

const a = (x, y) =&gt; x + y  
const b = (arr, value) =&gt; arr.concat(value)  
const c = arr =&gt; \[…arr\].sort((a, b) =&gt; a - b)

Impure

const a = (x, y) =&gt; x + y + Math.random()  
const b = (arr, value) =&gt; (arr.push(value), arr)  
const c = arr =&gt; arr.sort((a, b) =&gt; a - b)

#### Don’t forget:

-   Pure functions are easier to reason about due to their reliability.
-   All functions should be pure unless explicitly causing a side effect (i.e. `setInnerHTML`).
-   If a function does not return a value, it is an indication that it is causing side effects.

Additional links

-   [Pure functions in JavaScript](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)

### How do you write comments inside a JSX tree in React?

#### Answer

Comments must be wrapped inside curly braces `{}` and use the `/* */` syntax.

const tree = (

    {/\* Comment \*/}
    <p>Text</p>

)

### What is recursion and when is it useful?

#### Answer

Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown.

For example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI. Each comment is either a top-level comment (no parent) or is a reply to a parent comment. Comments can be a reply of a reply of a reply… we have no knowledge beforehand the number of levels deep a comment may be. This is where recursion can help.

const nest = (items, id = null, link = “parent_id”) =&gt;  
items  
.filter(item =&gt; item\[link\] === id)  
.map(item =&gt; ({ …item, children: nest(items, item.id) }))

const comments = \[  
{ id: 1, parent_id: null, text: “First reply to post.” },  
{ id: 2, parent_id: 1, text: “First reply to comment \#1.” },  
{ id: 3, parent_id: 1, text: “Second reply to comment \#1.” },  
{ id: 4, parent_id: 3, text: “First reply to comment \#3.” },  
{ id: 5, parent_id: 4, text: “First reply to comment \#4.” },  
{ id: 6, parent_id: null, text: “Second reply to post.” }  
\]

nest(comments)  
/\*  
\[  
{ id: 1, parent_id: null, text: “First reply to post.”, children: \[…\] },  
{ id: 6, parent_id: null, text: “Second reply to post.”, children: \[\] }  
\]  
\*/

In the above example, the base condition is met if `filter()` returns an empty array. The chained `map()` won’t invoke the callback function which contains the recursive call, thereby breaking the loop.

#### Don’t forget:

-   Recursion is useful when working with data structures containing an unknown number of nested structures.
-   Recursion must have a base condition to be met that breaks out of the loop or it will call itself indefinitely.

Additional links

-   [In plain English, what is recursion?](https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion)

### What is the output of the following code?

const a = \[1, 2, 3\]  
const b = \[1, 2, 3\]  
const c = “1,2,3”

console.log(a == c)  
console.log(a == b)

#### Answer

The first `console.log` outputs `true` because JavaScript’s compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.

#### Don’t forget:

-   JavaScript performs automatic type conversion
-   Objects are compared by reference
-   Primitives are compared by value

Additional links

-   [JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)

### What are refs in React? When should they be used?

#### Answer

Refs provide a way to access DOM nodes or React elements created in the render method. Refs should be used sparringly, but there are some good use cases for refs, such as:

-   Managing focus, text selection, or media playback.
-   Triggering imperative animations.
-   Integrating with third-party DOM libraries.

Refs are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use refs throughout the component, assign the `ref` to the instance property within the constructor:

class MyComponent extends React.Component {  
constructor(props) {  
super(props)  
this.myRef = React.createRef()  
}

render() {  
return

}  
}

Refs can also be used in functional components with the help of closures.

#### Don’t forget:

-   Refs are used to return a reference to an element.
-   Refs shouldn’t be overused.
-   You can create a ref using `React.createRef()` and attach to elements via the `ref` attribute.

Additional links

-   [React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

### Where and why is the `rel="noopener"` attribute used?

#### Answer

The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.

#### Don’t forget:

-   `rel="noopener"` is applied to hyperlinks.
-   `rel="noopener"` prevents opened links from manipulating the source page.

Additional links

-   [Open external anchors using rel=”noopener”](https://developers.google.com/web/tools/lighthouse/audits/noopener)
-   [About rel=”noopener”](https://mathiasbynens.github.io/rel-noopener/)

### What is REST?

#### Answer

REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.

Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:

-   An identifier for the resource. This is known as the endpoint or URL for the resource.
-   The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.

Here is an example of the URL and HTTP method with a `posts` resource:

-   Reading: `/posts/` =&gt; GET
-   Creating: `/posts/new` =&gt; POST
-   Updating: `/posts/:id` =&gt; PUT
-   Destroying: `/posts/:id` =&gt; DELETE

#### Don’t forget:

-   Alternatives to this pattern like GraphQL

Additional links

-   [What is REST — A Simple Explanation for Beginners, Part 1: Introduction](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)

### What does the following function return?

function greet() {  
return  
{  
message: “hello”  
}  
}

#### Answer

Because of JavaScript’s automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.

#### Don’t forget:

-   Automatic semicolon placement can lead to time-consuming bugs

Additional links

-   [Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)

### Are semicolons required in JavaScript?

#### Answer

Sometimes. Due to JavaScript’s automatic semicolon insertion, the interpreter places semicolons after most statements. This means semicolons can be omitted in most cases.

However, there are some cases where they are required. They are not required at the beginning of a block, but are if they follow a line and:

1.  The line starts with `[`

const previousLine = 3  
;\[1, 2, previousLine\].map(n =&gt; n \* 2)

1.  The line starts with `(`

const previousLine = 3  
;(function() {  
// …  
})()

In the above cases, the interpreter does not insert a semicolon after `3`, and therefore it will see the `3` as attempting object property access or being invoked as a function, which will throw errors.

#### Don’t forget:

-   Semicolons are usually optional in JavaScript but have edge cases where they are required.
-   If you don’t use semicolons, tools like Prettier will insert semicolons for you in the places where they are required on save in a text editor to prevent errors.

Additional links

### What is short-circuit evaluation in JavaScript?

#### Answer

Short-circuit evaluation involves logical operations evaluating from left-to-right and stopping early.

true || false

In the above sample using logical OR, JavaScript won’t look at the second operand `false`, because the expression evaluates to `true` regardless. This is known as short-circuit evaluation.

This also works for logical AND.

false && true

This means you can have an expression that throws an error if evaluated, and it won’t cause issues.

true || nonexistentFunction()  
false && nonexistentFunction()

This remains true for multiple operations because of left-to-right evaluation.

true || nonexistentFunction() || window.nothing.wouldThrowError  
true || window.nothing.wouldThrowError  
true

A common use case for this behavior is setting default values. If the first operand is falsy the second operand will be evaluated.

const options = {}  
const setting = options.setting || “default”  
setting // “default”

Another common use case is only evaluating an expression if the first operand is truthy.

// Instead of:  
addEventListener(“click”, e =&gt; {  
if (e.target.closest(“button”)) {  
handleButtonClick(e)  
}  
})

// You can take advantage of short-circuit evaluation:  
addEventListener(  
“click”,  
e =&gt; e.target.closest(“button”) && handleButtonClick(e)  
)

In the above case, if `e.target` is not or does not contain an element matching the `"button"` selector, the function will not be called. This is because the first operand will be falsy, causing the second operand to not be evaluated.

#### Don’t forget:

-   Logical operations do not produce a boolean unless the operand(s) evaluate to a boolean.

Additional links

-   [JavaScript: What is short-circuit evaluation?](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

### What are the advantages of using CSS sprites and how are they utilized?

#### Answer

CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true.

Under HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection.

However, according to [benchmark results](https://blog.octo.com/en/http2-arrives-but-sprite-sets-aint-no-dead/), although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images.

To utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of an element.

#### Don’t forget:

-   `background-image`, `background-position` and `background-size` can be used to utilize a spritesheet.

Additional links

-   [CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)

### What is a stateful component in React?

#### Answer

A stateful component is a component whose behavior depends on its state. This means that two separate instances of the component if given the same props will not necessarily render the same output, unlike pure function components.

// Stateful class component  
class App extends Component {  
constructor(props) {  
super(props)  
this.state = { count: 0 }  
}  
render() {  
// …  
}  
}

// Stateful function component  
function App() {  
const \[count, setCount\] = useState(0)  
return // …  
}

#### Don’t forget:

-   Stateful components have internal state that they depend on.
-   Stateful components are class components or function components that use stateful Hooks.
-   Stateful components have their state initialized in the constructor or with `useState()`.

Additional links

-   [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### What is a stateless component?

#### Answer

A stateless component is a component whose behavior does not depend on its state. Stateless components can be either functional or class components. Stateless functional components are easier to maintain and test since they are guaranteed to produce the same output given the same props. Stateless functional components should be preferred when lifecycle hooks don’t need to be used.

#### Don’t forget:

-   Stateless components are independent of their state.
-   Stateless components can be either class or functional components.
-   Stateless functional components avoid the `this` keyword altogether.

Additional links

-   [React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### Explain the difference between a static method and an instance method.

#### Answer

Static methods belong to a class and don’t act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.

Array.isArray // static method of Array  
Array.prototype.push // instance method of Array

In this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.

Instance methods could technically work as static methods, but provide terser syntax:

const arr = \[1, 2, 3\]  
arr.push(4)  
Array.push(arr, 4)

#### Don’t forget:

-   How to create static and instance methods with ES2015 class syntax

Additional links

-   [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### What is the difference between synchronous and asynchronous code in JavaScript?

#### Answer

Synchronous means each operation must wait for the previous one to complete.

Asynchronous means an operation can occur while another operation is still being processed.

In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.

#### Don’t forget:

-   JavaScript has a concurrency model based on an “event loop”.
-   Functions like `alert` block the main thread so that no user input is registered until the user closes it.

Additional links

### What is the `this` keyword and how does it work?

#### Answer

The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call()`.

Here are some common examples of how `this` works:

Object literals

`this` refers to the object itself inside regular functions if the object precedes the invocation of the function.

Properties set as `this` do not refer to the object.

var myObject = {  
property: this,  
regularFunction: function() {  
return this  
},  
arrowFunction: () =&gt; {  
return this  
},  
iife: (function() {  
return this  
})()  
}  
myObject.regularFunction() // myObject  
myObject\[“regularFunction”\]() // my Object

myObject.property // NOT myObject; lexical \`this\`  
myObject.arrowFunction() // NOT myObject; lexical \`this\`  
myObject.iife // NOT myObject; lexical \`this\`  
const regularFunction = myObject.regularFunction  
regularFunction() // NOT myObject; lexical \`this\`

Event listeners

`this` refers to the element listening to the event.

document.body.addEventListener(“click”, function() {  
console.log(this) // document.body  
})

Constructors

`this` refers to the newly created object.

class Example {  
constructor() {  
console.log(this) // myExample  
}  
}  
const myExample = new Example()

Manual

With `call()` and `apply()`, `this` refers to the object passed as the first argument.

var myFunction = function() {  
return this  
}  
myFunction.call({ customThis: true }) // { customThis: true }

Unwanted `this`

Because `this` can change depending on the scope, it can have unexpected values when using regular functions.

var obj = {  
arr: \[1, 2, 3\],  
doubleArr() {  
return this.arr.map(function(value) {  
// this is now this.arr  
return this.double(value)  
})  
},  
double() {  
return value \* 2  
}  
}  
obj.doubleArr() // Uncaught TypeError: this.double is not a function

#### Don’t forget:

-   In non-strict mode, global `this` is the global object (`window` in browsers), while in strict mode global `this` is `undefined`.
-   `Function.prototype.call` and `Function.prototype.apply` set the `this` context of an executing function as the first argument, with `call` accepting a variadic number of arguments thereafter, and `apply` accepting an array as the second argument which are fed to the function in a variadic manner.
-   `Function.prototype.bind` returns a new function that enforces the `this` context as the first argument which cannot be changed by other functions.
-   If a function requires its `this` context to be changed based on how it is called, you must use the `function` keyword. Use arrow functions when you want `this` to be the surrounding (lexical) context.

Additional links

-   `[this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)` [on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### What does the following code evaluate to?

typeof typeof 0

#### Answer

It evaluates to `"string"`.

`typeof 0` evaluates to the string `"number"` and therefore `typeof "number"` evaluates to `"string"`.

#### Don’t forget:

Additional links

-   [MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

### What are JavaScript data types?

#### Answer

The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.

#### Don’t forget:

-   Mention of newly added `Symbol` data type
-   `Array`, `Date` and `function` are all of type `object`
-   Functions in JavaScript are objects with the capability of being callable

Additional links

-   [MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
-   [Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)

### What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?

#### Answer

The main purpose is to avoid manipulating the DOM directly and keep the state of an application in sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.

When working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state.

#### Don’t forget:

-   The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.
-   JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals.

Additional links

-   [Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)

### What does `'use strict'` do and what are some of the key benefits to using it?

#### Answer

Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enforces more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:

-   Easier debugging due to eliminating silent errors.
-   Disallows variable redefinition.
-   Prevents accidental global variables.
-   Oftentimes provides increased performance over identical code that is not running in strict mode.
-   Simplifies `eval()` and `arguments`.
-   Helps make JavaScript more secure.

#### Don’t forget:

-   Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.
-   Throws an error on invalid usage of `delete`.
-   Prohibits some syntax likely to be defined in future versions of ECMAScript

Additional links

-   [MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

### What are the differences between `var`, `let`, `const` and no keyword statements?

#### Answer

No keyword

When no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.

var

`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.

Below, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.

### Resources:

Resources:  
<a href="https://gist.github.com/bgoonz/e3f9e82a133b0a8dca00f61d9ddcd62b" class="uri">https://gist.github.com/bgoonz/e3f9e82a133b0a8dca00f61d9ddcd62b</a>

### Here’s the code from this article:

for (var i = 0; i &lt; 10; i++) {  
setTimeout(() =&gt; {  
// logs \`10\` ten times  
console.log(i)  
})  
}

/\* Solutions with \`var\` \*/  
for (var i = 0; i &lt; 10; i++) {  
// Passed as an argument will use the value as-is in  
// that point in time  
setTimeout(console.log, 0, i)  
}

for (var i = 0; i &lt; 10; i++) {  
// Create a new function scope that will use the value  
// as-is in that point in time  
;(i =&gt; {  
setTimeout(() =&gt; {  
console.log(i)  
})  
})(i)  
}

let

`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.

for (let i = 0; i &lt; 10; i++) {  
setTimeout(() =&gt; {  
// logs 0, 1, 2, 3, …  
console.log(i)  
})  
}

const

`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won’t be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.

const myObject = {}  
myObject.prop = “hello!” // No error  
myObject = “hello” // Error

#### Don’t forget:

-   All declarations are hoisted to the top of their scope.
-   However, with `let` and `const` there is a concept called the temporal dead zone (TDZ). While the declarations are still hoisted, there is a period between entering scope and being declared where they cannot be accessed.
-   Show a common issue with using `var` and how `let` can solve it, as well as a solution that keeps `var`.
-   `var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so.

Additional links

-   `[let](https://wesbos.com/let-vs-const/)` [vs](https://wesbos.com/let-vs-const/) `[const](https://wesbos.com/let-vs-const/)`

### What is a virtual DOM and why is it used in libraries/frameworks?

#### Answer

The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.

    <div class="counter">  <h1>0</h1>  <button>-</button>  <button>+</button></div>

The above markup’s virtual DOM representation might look like this:

{  
nodeName: “div”,  
attributes: { class: “counter” },  
children: \[  
{  
nodeName: “h1”,  
attributes: {},  
children: \[0\]  
},  
{  
nodeName: “button”,  
attributes: {},  
children: \[“-”\]  
},  
{  
nodeName: “button”,  
attributes: {},  
children: \[“+”\]  
}  
\]  
}

The library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison.

Once the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application.

#### Don’t forget:

-   Why accessing the DOM can be so costly.

Additional links

-   [The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

### What is WCAG? What are the differences between A, AA, and AAA compliance?

#### Answer

WCAG stands for “Web Content Accessibility Guidelines”. It is a standard describing how to make web content more accessible to people with disabilities They have 12-13 guidelines and for each one, there are testable success criteria, which are at three levels: A, AA, and AAA. The higher the level, the higher the impact on the design of the web content. The higher the level, the web content is essentially more accessible by more users. Depending on where you live/work, there may be regulations requiring websites to meet certain levels of compliance. For instance, in Ontario, Canada, beginning January 1, 2021 all public websites and web content posted after January 1, 2012 must meet AA compliance.

#### Don’t forget:

-   A guideline for making web content more accessible
-   3 different levels (A, AA, and AAA) of compliance for each guideline
-   Governments are starting to require web content to meet a certain level of compliance by law

Additional links

-   [Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
-   [How to Meet WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

### What is a cross-site scripting attack (XSS) and how do you prevent it?

#### Answer

XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.

For example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.

-   The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.
-   The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.
-   The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.

#### Don’t forget:

-   On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.
-   On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won’t execute the script.

Additional links

-   [Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)

Resources:

### Resources:

<a href="https://gist.github.com/bgoonz/e3f9e82a133b0a8dca00f61d9ddcd62b" class="uri">https://gist.github.com/bgoonz/e3f9e82a133b0a8dca00f61d9ddcd62b</a>

### THE CODE:

<a href="https://gist.github.com/bgoonz/e4b19c1425ffce9744b23a7d337e147e" class="uri">https://gist.github.com/bgoonz/e4b19c1425ffce9744b23a7d337e147e</a>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a><a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a>

### Or Checkout my personal Resource Site:

<a href="https://trusting-dijkstra-4d3b17.netlify.app/" class="uri">https://trusting-dijkstra-4d3b17.netlify.app/</a>

> _“If you want to build a ship, don’t drum up the men and women to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.” — Antoine de Saint-Exupery;_

![](https://cdn-images-1.medium.com/max/800/0*LUQe60D2FeVzDEi8.png)

-   `**HTTP**` : Hypertext Transfer Protocol.
-   `**HT**` : Hypertext – content with references to other content.
-   Term used to refer to content in computing.
-   What makes the Web a “web”.
-   Most fundamental part of how we interact.
-   `**Hyperlinks**` : Links; references between HT resources.
-   `**TP**` : Transfer Protocol – set of guidelines surrounding the transmission of data.
-   Defines the expectations for both ends of the transer.
-   Defines some ways the transfer might fail.
-   HTTP is a `**request/response**` protocol.
-   HTTP works between `**clients**` & `**servers**`.
-   `**Clients**` : User Agent – the data consumer.
-   `**Servers**` : Origin – Data provider & where the application is running.

![](https://cdn-images-1.medium.com/max/800/0*OBVdK39aaS5sjV9B.png)

### [Components of HTTP-based systems](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#components_of_http-based_systems 'Permalink to Components of HTTP-based systems')

HTTP is a client-server protocol: requests are sent by one entity, the user-agent (or a proxy on behalf of it). Most of the time the user-agent is a Web browser, but it can be anything, for example a robot that crawls the Web to populate and maintain a search engine index.

Each individual request is sent to a server, which handles it and provides an answer, called the _response_. Between the client and the server there are numerous entities, collectively called [proxies](https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server), which perform different operations and act as gateways or [caches](https://developer.mozilla.org/en-US/docs/Glossary/Cache), for example.

![](https://cdn-images-1.medium.com/max/800/0*WR6l6JwNOvkfrljt.png)

**Properties of HTTP**

-   `**Reliable Connections**` : Messages passed between a client & server sacrifice a little speed for the sake of trust.
-   `**TCP**` is HTTP’s preferred connection type.
-   `**Stateless Transfer**` : HTTP is a stateless protocol – meaning it does not store any kind of information.
-   HTTP supports cookies.
-   `**Intermediaries**` : Servers or devices that pass your request along which come in three types:

1.  `**Proxies**` : Modify your request so it appears to come from a different source.
2.  `**Gateways**` : Pretend to be the resource server you requested.
3.  `**Tunnels**` : Simply passes your request along.

---

### HTTP Requests

**Structure of an HTTP Request**

    GET / HTTP/1.1Host: appacademy.ioConnection: keep-aliveUpgrade-Insecure-Requests: 1User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3Accept-Encoding: gzip, deflateAccept-Language: en-US,en;q=0.9

### Example of a request:

![](https://cdn-images-1.medium.com/max/1200/1*tq-BRYuzZ_Dx8s1g5xJKKQ.png)

-   **Request-line & HTTP verbs**
-   The first line of an HTTP Request made up of three parts:

1.  The `**Method**` : Indicated by an HTTP Verb.
2.  The `**URI**` : Uniform Resource Indicator that ID’s our request.
3.  THe `**HTTP**` **Version** : Version we expect to use.

-   HTTP Verbs are a simply way of declaring our intention to the server.
-   `**GET**` : Used for direct requests.
-   `**POST**`: Used for creating new resources on the server.
-   `**PUT**`: Used to updated a resource on the server.
-   `**PATCH**` : Similar to PUT, but do not require the whole resource to perform the update.
-   `**DELETE**` : Used to destroy resources on the server.

**Headers**

-   Key-Value pairs that come after the request line — they appear on sep. lines and define metadata needed to process the request.
-   Some common headers:
-   `**Host**` : Root path for our URI.
-   `**User-Agent**` : Displays information about which browser the request originated from.
-   `**Referer**` : Defines the URL you’re coming from.
-   `**Accept**` : Indicates what the client will receive.
-   `**Content**`**–** : Define Details about the body of the request.

**Body**

-   For when we need to send data that doesn’t fit into the header & is too complex for the URI we can use the _body_.
-   `**URL encoding**` : Most common way form data is formatted.
-   `name=claire&age=29&iceCream=vanilla`
-   We can also format using JSON or XML.

**Sending an HTTP request from the command line**

-   **netcat** : (nc) A Utility that comes as part of Unix-line environments such as Ubuntu and macOS.
-   Allows us to open a direct connection with a URL and manually send HTTP requests.
-   `nc -v appacademy.io 80`
-   `man nc` to open the netcat manual.

---

### HTTP Responses

**Structure of a Response**

    HTTP/1.1 200 OKContent-Type: text/html; charset=utf-8Transfer-Encoding: chunkedConnection: closeX-Frame-Options: SAMEORIGINX-Xss-Protection: 1; mode=blockX-Content-Type-Options: nosniffCache-Control: max-age=0, private, must-revalidateSet-Cookie: _rails-class-site_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnlyX-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20dX-Runtime: 0.006894Strict-Transport-Security: max-age=31536000Vary: OriginVia: 1.1 vegurExpect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"Server: cloudflareCF-RAY: 51d641d1ca7d2d45-TXL

    <!DOCTYPE html><html>......</html>

**Status**

-   First line of an HTTP response — gives us a high level overview of the server’s intentions. (`**status line**`)
-   `HTTP/1.1 200 OK`
-   `**HTTP status codes**` : numeric way of representing a server’s response.
-   Follow the structure: x: xxx — xxx;

### `**Status codes 100 - 199: Informational**`

-   Allow the clinet to know that a req. was received, and provides extra info from the server.

### `**Status codes 200 - 299: Successful**`

-   Indicate that the request has succeeded and the server is handling it.
-   Common Examples: 200 OK (req received and fulfilled) & 201 Created (received and new record was created)

### `**Status codes 300 - 399: Redirection**`

-   Let the client know if there has been a change.
-   Common Examples: 301 Moved Permanently (resource you requested is in a totally new location) & 302 Found (indicates a temporary move)

### `**Status codes 400 - 499: Client Error**`

-   Indicate problem with client’s request.
-   Common Examples: 400 Bad Request (received, but could not understand) & 401 Unauthorized (resource exists but you’re not allowed to see w/o authentication) & 403 Forbidden (resource exists but you’re not allowed to see it at all ) & 404 Not Found (resource requested does not exist);

### `**Status codes 500 - 599: Server Error**`

-   Indicates request was formatted correctly, but the server couldn’t do what you asked due to an internal problem.
-   Common Examples: 500 Internal Server Error (Server had trouble processing) & 504 Gateway Timeout (Server timeout);

### **Headers** : Work just like HTTP requests.

> Common Examples:

-   `**Location**` : Used by client for redirection responses.
-   `**Content-Type**` : Let’s client know what format the body is in.
-   `**Expires**` : When response is no longer valid
-   `**Content-Disposition**` : Let’s client know how to display the response.
-   `**Set-Cookie**` : Sends data back to the client to set on the cookie.
-   `**Data**` : If the request is successful, the body of the response will contain the resource you have requested.

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a><a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

**Currently under development and very buggy!**

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

If you want to learn more and get some practice in … download [Postman](https://www.postman.com/) and start going through some tutorials!

Happy Coding!

#### My Awesome JavaScript List Part 2

![](https://cdn-images-1.medium.com/max/800/0*9riCKLCPutYxPEtE)

#### Here’s the rest of my stash!

**_…well… not really… here’s the rest of my stash:_**

<a href="https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s" class="uri">https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s</a>

---

### Web Development frameworks

‌

> · ​[Next.js](https://github.com/vercel/next.js) — Framework for server-rendered or statically-exported React apps.

> · ​[San](https://github.com/baidu/san) — Flexible JavaScript component framework.

> · ​[hapi](https://hapijs.com/) — Rich framework for building applications and services.

> · ​[Koa](https://koajs.com/#introduction) — Smaller, more expressive, and more robust foundation for web applications and APIs.

> · ​[Umi](https://github.com/umijs/umi) — Pluggable enterprise-level react application framework.

> · ​[Vue.js](https://vuejs.org/) — Progressive JavaScript Framework.

> · ​[Mithril](https://mithril.js.org/) — Modern client-side Javascript framework for building Single Page Applications. ([HN](https://news.ycombinator.com/item?id=25800754))

> · ​[Solid](https://github.com/ryansolid/solid) — Declarative, efficient, and flexible JavaScript library for building user interfaces.

> · ​[Neutrino dev](https://github.com/mozilla-neutrino/neutrino-dev)​

> · ​[Alpine.js](https://github.com/alpinejs/alpine) — Rugged, minimal framework for composing JavaScript behavior in your markup. ([Awesome Alpine](https://github.com/alpine-collective/awesome))

> · ​[After.js](https://github.com/jaredpalmer/after.js) — Next.js-like framework for server-rendered React apps built with React Router 4.

> · ​[Torus](https://github.com/thesephist/torus) — Event-driven model-view UI framework for the web, focused on being tiny, efficient, and free of dependencies. ([Web](https://thesephist.github.io/torus/))

> · ​[Hyperapp](https://github.com/jorgebucaran/hyperapp) — Tiny framework for building web interfaces. ([Web](https://hyperapp.dev/)) ([HN](https://news.ycombinator.com/item?id=23688798)) ([Hyperawesome](https://github.com/jorgebucaran/hyperawesome))

> · ​[Hyperapp FX](https://github.com/okwolf/hyperapp-fx) — Effects for use with Hyperapp.

> · ​[Phenomic](https://github.com/phenomic/phenomic) — Modular website compiler (React, Webpack, Reason and whatever you want).

> · ​[Halfmoon](https://github.com/halfmoonui/halfmoon) — Front-end framework with a built-in dark mode and full customizability using CSS variables; great for building dashboards and tools. ([Docs](https://www.gethalfmoon.com/docs/introduction/))

> · ​[Sinuous](https://github.com/luwes/sinuous) — Low-level UI library with a tiny footprint. ([Docs](https://sinuous.dev/docs/getting-started/))

> · ​[Overture](https://github.com/fastmail/overture) — Powerful JS library for building really slick web applications, with performance at, or surpassing, native apps.

> · ​[Lucia](https://github.com/aidenybai/lucia) — Tiny library for tiny web apps. ([Docs](https://lucia.js.org/))

> · ​[Ractive.js](https://github.com/ractivejs/ractive) — Next-generation DOM manipulation.

> · ​[JSX Lite](https://github.com/BuilderIO/jsx-lite) — Write components once, run everywhere. Compiles to Vue, React, Solid, Liquid, and more.

> · ​[Perlite](https://github.com/PaulMaly/perlite) — Hyperactiv + lit-html + extensions. Simple and declarative way to create rich client-side widgets designed with server-side apps in mind.

> · ​[Democrat](https://github.com/etienne-dldc/democrat) — Library that mimic the API of React (Components, hooks, Context…) but instead of producing DOM mutation it produces a state tree.

> · ​[Raj](https://github.com/andrejewski/raj) — Elm Architecture for JavaScript.

> · ​[Reframe](https://github.com/reframejs/reframe) — New kind of web framework.

> · ​[observablehq/stdlib](https://github.com/observablehq/stdlib) — Observable standard library.

> · ​[Choo](https://github.com/choojs/choo) — Sturdy 4kb frontend framework. ([Web](https://www.choo.io/))

> · ​[Typera](https://github.com/akheron/typera) — Type-safe routes for Express and Koa.

> · ​[Frourio](https://github.com/frouriojs/frourio) — Fast and type-safe full stack framework, for TypeScript. ([Web](https://frourio.io/))

> · ​[Svelto](https://github.com/svelto/svelto) — Modular front end framework for modern browsers, with battery included: 100+ widgets and tools.

> · ​[modular](https://github.com/jpmorganchase/modular) — Collection of tools and guidance to enable UI development at scale. ([Tweet](https://twitter.com/threepointone/status/1340620223993540608))

> · ​[Turbo](https://github.com/hotwired/turbo) — Speed of a single-page web application without having to write any JavaScript. ([Web](https://turbo.hotwire.dev/))

> · ​[Fre](https://github.com/yisar/fre) — Tiny Coroutine framework with Fiber.

> · ​[Glimmer](https://glimmerjs.com/) — Fast and light-weight UI components for the web. ([Code](https://github.com/glimmerjs/glimmer.js))

> · ​[Glimmer VM](https://github.com/glimmerjs/glimmer-vm) — Flexible, low-level rendering pipeline for building a “live” DOM from Handlebars templates that can subsequently be updated cheaply when data changes.

> · ​[frint](https://github.com/frintjs/frint) — Modular JavaScript framework for building scalable and reactive applications.

> · ​[Nano Router](https://github.com/sunesimonsen/nano-router) — Framework agnostic minimalistic router with a focus on named routes.

> · ​[tiny-request-router](https://github.com/berstend/tiny-request-router) — Fast, generic and type safe router (match request method and path).

> · ​[Synergy](https://github.com/defx/synergy) — Tiny runtime library for building web user interfaces. ([HN](https://news.ycombinator.com/item?id=25677272))

> · ​[dflex](https://github.com/jalal246/dflex) — JavaScript Project to Manipulate DOM Elements.

> · ​[morphdom](https://github.com/patrick-steele-idem/morphdom) — Fast and lightweight DOM diffing/patching (no virtual DOM needed).

> · ​[Forgo](https://github.com/forgojs/forgo) — Ultra-light UI runtime. Makes it super easy to create modern web apps using JSX (like React).

> · ​[Whats Up](https://github.com/whatsup/whatsup) — Front-end framework based on ideas of streams and fractals.

> · ​[Boost](https://github.com/milesj/boost) — Collection of type-safe cross-platform packages for building robust server-side and client-side systems.

> · ​[Nostalgie](https://github.com/ggoodman/nostalgie) — Opinionated, full-stack, runtime-agnostic framework for building web apps and web pages using react. ([Web](https://nostalgie.dev/))

> · ​[Lumino](https://github.com/jupyterlab/lumino) — Library for building interactive web applications.

---

> Animation

> · ​[Anime.js](https://github.com/juliangarnier/anime) — JavaScript animation engine.

> · ​[popmotion](https://github.com/Popmotion/popmotion) — Functional, reactive animation library.

> · ​[impress.js](https://github.com/impress/impress.js) — Presentation framework based on the power of CSS3 transforms and transitions.

> · ​[Pts](https://github.com/williamngan/pts) — Library for visualization and creative-coding.

> · ​[lax.js](https://github.com/alexfoxy/laxxx) — Simple & light weight (&lt;2kb gzipped) vanilla JS plugin to create smooth & beautiful animations when you scroll.

> · ​[Flipping](https://github.com/davidkpiano/flipping) — Library (and collection of adapters) for implementing FLIP transitions.

> · ​[Ola](https://github.com/franciscop/ola) — Smooth animation library for interpolating numbers.

> · ​[react-spring](https://github.com/react-spring/react-spring) — Spring physics based React animation library.

> · ​[FAT](https://github.com/nextapps-de/fat) — Web’s fastest and most lightweight animation tool.

> · ​[React Easy Flip](https://github.com/jlkiri/react-easy-flip) — Lightweight React library for smooth FLIP animations.

> · ​[AOS](https://github.com/michalsnik/aos) — Animate on scroll library.

> · ​[flubber](https://github.com/veltman/flubber) — Tools for smoother shape animations.

---

> ‌

> CLI

> ‌

> · ​[qoa](https://github.com/klaussinani/qoa) — Minimal interactive command-line prompts.

---

> Test

> ‌

> · ​[Unexpected](https://github.com/unexpectedjs/unexpected) — Extensible BDD assertion toolkit. ([Docs](https://unexpected.js.org/))

> · ​[Fishery](https://github.com/thoughtbot/fishery) — Library for setting up JavaScript objects as test data.

> · ​[pentf](https://github.com/boxine/pentf) — Parallel end-to-end test framework.

> · ​[test-flat](https://github.com/kettanaito/test-flat) — Test framework extension to support resources teardown and cleanup in flat tests.

> · ​[zora](https://github.com/lorenzofox3/zora) — Lightest, yet Fastest JavaScript test runner for nodejs and browsers.

> · ​[Vest](https://github.com/ealush/vest) — Declarative Validation Testing.

---

> ‌

> State management

> ‌

> · ​[Mutik](https://github.com/jaredpalmer/mutik) — Tiny (495B) immutable state management library based on Immer.

> · ​[Overmind](https://github.com/cerebral/overmind) — Frictionless state management. ([Docs](https://overmindjs.org/)) ([HN](https://news.ycombinator.com/item?id=24750620))

> · ​[Storeon](https://github.com/ai/storeon) — Tiny event-based Redux-like state manager for React and Preact.

> · ​[Overstated](https://github.com/fabiospampinato/overstated) — React state management library that’s delightful to use, without sacrificing performance or scalability.

> · ​[Effector](https://github.com/effector/effector) — Reactive state manager. ([Awesome](https://github.com/ilyalesik/awesome-effector)) ([Docs](https://effector.now.sh/docs/introduction/installation)) ([effector-storage](https://github.com/yumauri/effector-storage))

> · ​[Akita](https://github.com/datorama/akita) — State Management Tailored-Made for JS Applications.

> · ​[Observable Store](https://github.com/DanWahlin/Observable-Store) — Provides a simple way to manage state in Angular, React, Vue.js and other front-end applications.

> · ​[Cerebral](https://github.com/cerebral/cerebral) — Declarative state and side effects management solution for popular JavaScript frameworks.

> · ​[Hooksy](https://github.com/pie6k/hooksy) — State management solution based on react hooks.

> · ​[React Easy State](https://github.com/RisingStack/react-easy-state) — Simple React state management. Made with ![❤️](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/2764.svg) and ES6 Proxies.

> · ​[wana](https://github.com/alloc/wana) — Easy observable state for React.

> · ​[Recoil](https://github.com/facebookexperimental/Recoil) — Experimental set of utilities for state management with React. ([Web](https://recoiljs.org/)) ([Video](https://www.youtube.com/watch?v=fb3cOMFkEzs)) ([Reddit](https://www.reddit.com/r/reactjs/comments/gjpbjc/facebook_has_open_sourced_an_experimental_state/)) ([Rewriting from scratch](https://bennetthardwick.com/blog/recoil-js-clone-from-scratch-in-100-lines/)) ([Recoilize — Recoil developer tool](https://github.com/open-source-labs/Recoilize))

> · ​[State Designer](https://github.com/steveruizok/state-designer) — JavaScript and TypeScript library for managing the state of a user interface.

> · ​[Fluxible](https://github.com/yahoo/fluxible) — Pluggable container for universal flux applications.

> · ​[Logux State](https://github.com/logux/state) — Tiny state manager with CRDT, cross-tab, and Logux support.

> · ​[Statery](https://github.com/hmans/statery) — Surprise-Free State Management. Designed for React with functional components.

---

> ‌

> API bindings

> ‌

> · ​[NodeJS Instagram private API client](https://github.com/dilame/instagram-private-api)​

---

> ‌

> DB

> ‌

> · ​[sql.js](https://github.com/sql-js/sql.js) — SQLite compiled to JavaScript. Allows you to create a relational database and query it entirely in the browser. ([Docs](https://sql.js.org/#/)) ([HN](https://news.ycombinator.com/item?id=25008308))

> · ​[SQigiL](https://github.com/twooster/sqigil) — Postgres SQL template string for Javascript.

> · ​[Postgrest JS](https://github.com/supabase/postgrest-js) — Isomorphic JavaScript client for PostgREST.

> · ​[Connect PG Simple](https://github.com/voxpelli/node-connect-pg-simple) — Simple, minimal PostgreSQL session store for Express/Connect.

---

> ‌

> React

> This is gonna be a big section….‌

> · ​[state-machines-in-react](https://github.com/tanem/state-machines-in-react) — Small React, xstate and Framer Motion demo.

> UI Components

> Table / Data Grid

> [reactable](https://github.com/glittershark/reactable) — Fast, flexible, and simple data tables in React.

> [ag-grid](https://github.com/ceolter/ag-grid) — Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components.

> [griddle-react](https://github.com/GriddleGriddle/Griddle) — Simple Grid Component written in React.

> [react-data-components](https://github.com/carlosrocha/react-data-components) — React components for sorting, filtering and pagination of data.

> [react-bootstrap-table](https://github.com/AllenFang/react-bootstrap-table) — It’ s a react table for bootstrap.

> [react-data-grid](https://github.com/adazzle/react-data-grid) — Excel-like grid component built with React, with editors, keyboard navigation, copy & paste, and the like.

> [react-pivot](https://github.com/davidguttman/react-pivot) — React-Pivot is a data-grid component with pivot-table-like functionality for data display, filtering, and exploration.

> [autoresponsive-react](https://github.com/xudafeng/autoresponsive-react) — Auto Responsive Layout Library For React.

> [reactabular](https://github.com/reactabular/reactabular) — Spectacular tables for React.

> [fixed-data-table](https://github.com/facebook/fixed-data-table) — A React table component designed to allow presenting thousands of rows of data.

> [sematable](https://github.com/sematext/sematable) — Client side sorting, pagination, and text filter for redux/react based apps.

> Infinite Scroll

> [react-lazyload](https://github.com/jasonslyvia/react-lazyload) — Lazyload your Component, Image or anything matters the performance.

> [react-infinity](https://github.com/nmn/react-infinity) — A UITableView Inspired list and grid display solution with element culling and smooth animations.

> [react-infinite](https://github.com/seatgeek/react-infinite) — A browser-ready efficient scrolling container based on UITableView.

> [react-infinite-grid](https://github.com/ggordan/react-infinite-grid) — A React component which renders a grid of elements.

> [react-list](https://github.com/orgsync/react-list) — A versatile infinite scroll React component.

> [react-virtualized](https://github.com/bvaughn/react-virtualized) — React components for efficiently rendering large lists and tabular data.

> Overlay

> _Display overlay / modal / alert / dialog / lightbox / popup_

> [react-dock](https://github.com/alexkuz/react-dock) — Resizable dockable react component.

> [react-overlays](https://github.com/react-bootstrap/react-overlays) — Utilities for creating robust overlay components.

> [boron](https://github.com/yuanyan/boron) — A collection of dialog animations with React.js.

> [react-modal2](https://github.com/cloudflare/react-modal2) — Simple modal component for React.

> [react-modal](https://github.com/reactjs/react-modal) — Accessible modal dialog component for React.

> [react-skylight](https://github.com/marcio/react-skylight) — A react component for modals and dialogs.

> [rodal](https://github.com/chenjiahan/rodal) — A React modal with animations.

> [react-modal-box](https://github.com/sadiqevani/react-modal-box) — React Modal Box Component.

> [react-aria-modal](https://github.com/davidtheclark/react-aria-modal) — A fully accessible and flexible React modal built according WAI-ARIA Authoring Practices.

> Notification

> _Toaster / snackbar — Notify the user with a modeless temporary little popup_

> [react-notification-system](https://github.com/igorprado/react-notification-system) — A complete and totally customizable component for notifications in React.

> [react-notification](https://github.com/pburtchaell/react-notification) — Snackbar notifications for React.

> [react-s-alert](https://github.com/juliancwirko/react-s-alert) — Alerts / Notifications for React with rich configuration options.

> [react-crouton](https://github.com/xeodou/react-crouton) — A message component for reactjs.

> [reapop](https://github.com/LouisBarranqueiro/reapop) — A React & Redux notifications system.

> Tooltip

> [react-tooltip](https://github.com/wwayne/react-tooltip) — React tooltip component.

> [rc-tooltip](https://github.com/react-component/tooltip) — React Tooltip.

> [react-portal-tooltip](https://github.com/romainberger/react-portal-tooltip) — Awesome React tooltips.

> Menu

> _Menus / sidebars_

> [react-burger-menu](https://github.com/negomi/react-burger-menu) — An off-canvas sidebar component with a collection of effects and styles using CSS transitions and SVG path animations.

> [react-sidebar](https://github.com/balloob/react-sidebar) — A sidebar component for React.

> [react-motion-menu](https://github.com/bokuweb/react-motion-menu) — Motion menu component powered by React Motion.

> [react-offcanvas](https://github.com/vutran/react-offcanvas) — Off-canvas menus for React.

> [react-tree-menu](https://github.com/MandarinConLaBarba/react-tree-menu) — A stateless tree menu component for React.

> [react-metismenu](https://github.com/alpertuna/react-metismenu) — A ready-to-use menu component for React.

> [react-contextmenu](https://github.com/vkbansal/react-contextmenu) — Context Menu implemented in React.

> [rc-menu](https://github.com/react-component/menu) — React Menu.

> Sticky

> _Fixed headers / scroll-up headers / sticky elements_

> [react-sticky](https://github.com/captivationsoftware/react-sticky) — &lt; Sticky /&gt; component for awesome React apps.

> [react-headroom](https://github.com/KyleAMathews/react-headroom) — Hide your header until you need it.

> [react-listview-sticky-header](https://github.com/cht8687/react-listview-sticky-header) — React listview with sticky section header.

> [react-sticky-state](https://github.com/soenkekluth/react-sticky-state) — React StickyState Component makes native position:sticky statefull and polyfills the missing sticky browser feature.

> [react-stickynode](https://github.com/yahoo/react-stickynode) — A performant and comprehensive React sticky.

> [react-sticky-node](https://github.com/visortelle/react-sticky-node) — Sticky react component.

> Tabs

> [react-tabs](https://github.com/reactjs/react-tabs) — React tabs component.

> [react-simpletabs](https://github.com/pedronauck/react-simpletabs) — Just a simple tabs component built with React.

> [react-tabtab](https://github.com/ctxhou/react-tabtab) — React, tabs.

> Loader

> _Loaders / spinners / progress bars — Let the user know that something is loading_

> [halogen](https://github.com/yuanyan/halogen) — A collection of loading spinners with React.js.

> [react-ladda](https://github.com/jsdir/react-ladda) — React wrapper for Ladda buttons.

> [react-progress-button](https://github.com/mathieudutour/react-progress-button) — Simple react.js component for an inline progress indicator.

> [react-loader](https://github.com/TheCognizantFoundry/react-loader) — React component that displays a spinner via spin.js until your component is loaded.

> [react-spinkit](https://github.com/KyleAMathews/react-spinkit) — A collection of loading indicators animated with CSS for React.

> [react-progress-label](https://github.com/wangzuo/react-progress-label) — Progress label component.

> [react-redux-loading-bar](https://github.com/mironov/react-redux-loading-bar) — Simple Loading Bar for Redux and React.

> [react-loaders](https://github.com/jonjaques/react-loaders) — Lightweight wrapper around Loaders.css.

> [react-md-spinner](https://github.com/tsuyoshiwada/react-md-spinner) — Material Design spinner components for React.js.

> [rc-progress](https://github.com/react-component/progress) — React Progress Bar.

> [react-block-ui](https://github.com/availity/react-block-ui) — Easy way to block the user from interacting with your UI.

> Carousel

> [react-slick](https://github.com/akiran/react-slick) — React carousel component.

> [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel) — React.js Responsive Carousel (with Swipe).

> Collapse

> [react-collapse](https://github.com/nkbt/react-collapse) — Component-wrapper for collapse animation with react-motion for elements with variable (and dynamic) height.

> [react-accessible-accordion](https://github.com/springload/react-accessible-accordion) — Accessible Accordion component for React.

> Chart

> _Display data in charts / graphs / diagrams_

> [react-chartist](https://github.com/fraserxu/react-chartist) — React component for Chartist.js.

> [d3-react-squared](https://github.com/bgrsquared/d3-react-squared) — Lightweight event system for (d3) charts and other components for ReactJS.

> [react-d3-components](https://github.com/codesuki/react-d3-components) — D3 Components for React.

> [recharts](https://github.com/recharts/recharts) — Redefined chart library built with React and D3.

> [react-chartjs](https://github.com/reactjs/react-chartjs) — Common react charting components using chart.js.

> [react-dazzle](https://github.com/Raathigesh/Dazzle) — Dashboards made easy in React JS.

> [react-vis](https://github.com/uber/react-vis) — Data visualization library based on React and d3.

> [react-sparkline](https://github.com/KyleAMathews/react-sparkline) — React component for rendering simple sparklines.

> [react-sparklines](https://github.com/borisyankov/react-sparklines) — Beautiful and expressive Sparklines React component.

> [rumble-charts](https://github.com/RumbleInc/rumble-js-charts) — React components for building composable and flexible charts.

> [react-micro-bar-chart](https://github.com/KyleAMathews/react-micro-bar-chart) — React component for micro bar-charts rendered with D3.

> [react-timeseries-charts](https://github.com/esnet/react-timeseries-charts) — Declarative timeseries charts.

> [react-google-charts](https://github.com/RakanNimer/react-google-charts) — React-google-charts React component.

> [victory](https://github.com/FormidableLabs/victory) — Data viz for React.

> [react-sigmajs](https://github.com/dunnock/react-sigma) — Lightweight but powerful library for drawing network graphs built on top of SigmaJS.

> [chartify](https://github.com/kirillstepkin/chartify) — React.js plugin for building animated draggable and customizable charts.

> [react-highcharts](https://github.com/kirjs/react-highcharts) — React-highcharts.

> [react-trend](https://github.com/unsplash/react-trend) — Simple, elegant spark lines.

> Tree

> _Display a tree data structure_

> [react-treeview](https://github.com/chenglou/react-treeview) — Easy, light, flexible tree view made with React.

> [react-ui-tree](https://github.com/pqx/react-ui-tree) — React tree component.

> [react-treebeard](https://github.com/alexcurtis/react-treebeard) — React Tree View Component. Data-Driven, Fast, Efficient and Customisable.

> UI Navigation

> _Ways to navigate views_

> [react-scroll](https://github.com/fisshy/react-scroll) — React scroll component.

> [react-swipe-views](https://github.com/damusnet/react-swipe-views) — A React Component for binded Tabs and Swipeable Views.

> Custom Scrollbar

> [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars) — React scrollbars component.

> [react-scrollbar](https://github.com/souhe/reactScrollbar) — Scrollbar component for React.

> [react-smooth-scrollbar](https://github.com/idiotWu/react-smooth-scrollbar) — React implementation of smooth-scrollbar.

> [react-gemini-scrollbar](https://github.com/noeldelgado/react-gemini-scrollbar) — React component for custom overlay-scrollbars with native scrolling mechanism.

> [react-custom-scroll](https://github.com/rommguy/react-custom-scroll) — Easily customize the browser scroll bar with native OS scroll behavior.

> Audio / Video

> [react-player](https://github.com/CookPete/react-player) — A react component for playing a variety of URLs, including file paths, YouTube, SoundCloud and Vimeo.

> [react-youtube](https://github.com/troybetz/react-youtube) — React.js powered YouTube player component.

> [react-soundplayer](https://github.com/soundblogs/react-soundplayer) — Create custom SoundCloud players with React.

> [react-video](https://github.com/pedronauck/react-video) — React component to load video from Vimeo or Youtube across any device.

> [react-music](https://github.com/FormidableLabs/react-music) — Make beats with React.

> [react-dailymotion](https://github.com/u-wave/react-dailymotion) — Dailymotion player component for React.

> [video-react](https://github.com/video-react/video-react) — A web video player built for the HTML5 world using React library.

> Map

> [react-gmaps](https://github.com/MicheleBertoli/react-gmaps) — A Google Maps component for React.js.

> [google-map-react](https://github.com/istarkov/google-map-react) — Universal google map react component, allows render react components on the google map.

> [react-googlemaps](https://github.com/pieterv/react-googlemaps) — A declarative React interface to Google Maps.

> [react-leaflet](https://github.com/PaulLeCam/react-leaflet) — React components for Leaflet maps.

> [react-geosuggest](https://github.com/ubilabs/react-geosuggest) — A React autosuggest for the Google Maps Places API.

> [react-map-gl](https://github.com/uber/react-map-gl) — A React wrapper for MapboxGL-js and overlay API.

> [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl) — A React binding of mapbox-gl-js.

> Time / Date / Age

> _Display time / date / age_

> [react-time](https://github.com/andreypopp/react-time) — Component for React to render relative and/or formatted dates into &lt; time&gt; HTML5 element.

> [react-timeago](https://github.com/nmn/react-timeago) — A simple time-ago component for ReactJs.

> [timeago-react](https://github.com/hustcc/timeago-react) — Simple and efficient react component to format date with `*** time ago` statement. eg: ‘3 hours ago’.

> Photo / Image

> _Display images / photos_

> [react-image-gallery](https://github.com/xiaolin/react-image-gallery) — Responsive image gallery, carousel, image slider react component.

> [react-images](https://github.com/jossmac/react-images) — A simple lightbox component for displaying an array of images.

> [react-photo-gallery](https://github.com/neptunian/react-photo-gallery) — Responsive React Photo Gallery.

> [react-svg-pan-zoom](https://github.com/chrvadala/react-svg-pan-zoom) — A React component that adds pan and zoom features to SVG.

> [react-image-lightbox](https://github.com/fritz-c/react-image-lightbox) — React lightbox component.

> [react-intense](https://github.com/brycedorn/react-intense) — A React component for viewing large images up close.

> Icons

> _Display icons / icon set / emojis_

> [react-icons](https://github.com/gorangajic/react-icons) — Svg react icons of popular icon packs using ES6 imports.

> [react-emoji](https://github.com/banyan/react-emoji) — An emoji mixin for React.

> [react-emoji-react](https://github.com/conorhastings/react-emoji-react) — A clone of slack emoji reactions in react.

> Paginator

> _Display a control element to paginate_

> [react-paginate](https://github.com/AdeleD/react-paginate) — A ReactJS component that creates a pagination.

> Markdown Viewer

> _Display parsed markdow source_

> [react-markdown](https://github.com/rexxars/react-markdown) — Render Markdown as React components.

> Miscellaneous

> [react-timesheet](https://github.com/yuanyan/react-timesheet) — Time Sheet Component for React.

> [react-blur](https://github.com/javierbyte/react-blur) — React component for blurred backgrounds.

> [react-split-pane](https://github.com/tomkp/react-split-pane) — React split-pane component.

> [typography](https://github.com/KyleAMathews/typography.js) — A powerful toolkit for building websites with beautiful typography.

> [react-json-tree](https://github.com/alexkuz/react-json-tree) — React JSON Viewer Component, Extracted from redux-devtools.

> [react-resizable-and-movable](https://github.com/bokuweb/react-resizable-and-movable) — Resizable and movable component for React.

> [react-dnr](https://github.com/yongxu/react-DnR) — Dragable and Resizable window build with React.js.

> [react-resizable-box](https://github.com/bokuweb/react-resizable-box) — Resizable component for React. \#reactjs.

> [react-file-reader-input](https://github.com/ngokevin/react-file-reader-input) — React file input component for complete control over styling and abstraction from file reading.

> [react-pagespeed-score](https://github.com/cauealves/react-pagespeed-score) — A React component for display a dial-type chart of PageSpeed Insights.

> [react-autolink](https://github.com/banyan/react-autolink) — An autolink mixin for React.

> [react-svg-buttons](https://github.com/plouc/react-svg-buttons) — Configurable animated SVG buttons for react.

> [react-avatar](https://github.com/Sitebase/react-avatar) — Universal React avatar component makes it possible to generate avatars based on user information.

> [react-joyride](https://github.com/gilbarbara/react-joyride) — Create walkthroughs and guided tours for your ReactJS apps. Now with standalone tooltips!.

> [material-color-hash](https://github.com/BelkaLab/material-color-hash) — Hash strings to Material UI colors.

> [react-facebook](https://github.com/CherryProjects/react-facebook) — Facebook components like a Login button, Like, Share, Comments, Page or Embedded Post.

> Form Components

> _Let the user enter data_

> Date / Time picker

> _Date picker / time picker / datetime picker / date range picker_

> [react-datepicker](https://github.com/Hacker0x01/react-datepicker) — A simple and reusable datepicker component for React.

> [rc-calendar](https://github.com/react-component/calendar) — React Calendar.

> [react-date-range](https://github.com/Adphorus/react-date-range) — A React component for choosing dates and date ranges.

> [react-day-picker](https://github.com/gpbl/react-day-picker) — Flexible date picker for React.

> [react-daterange-picker](https://github.com/onefinestay/react-daterange-picker) — A React based date range picker.

> [react-yearly-calendar](https://github.com/BelkaLab/react-yearly-calendar) — React.js Yearly Calendar Component.

> [react-calendar](https://github.com/freiksenet/react-calendar) — A modular toolkit to build calendar-related things in React.

> [input-moment](https://github.com/wangzuo/input-moment) — React datetime picker powered by momentjs.

> [react-datetime](https://github.com/YouCanBookMe/react-datetime) — A lightweight but complete datetime picker react component.

> [react-bootstrap-datetimepicker](https://github.com/quri/react-bootstrap-datetimepicker) — A react.js datetime picker for bootstrap.

> [react-bootstrap-daterangepicker](https://github.com/skratchdot/react-bootstrap-daterangepicker) — A date/time picker for react (using bootstrap). This is a react port of bootstrap-daterangepicker.

> [react-big-calendar](https://github.com/intljusticemission/react-big-calendar) — Gcal/outlook like calendar component.

> [react-date-select](https://github.com/JedWatson/react-date-select) — A React Date Select / Picker Input Component.

> [react-infinite-calendar](https://github.com/clauderic/react-infinite-calendar) — Infinite scrolling date-picker built with React, with localization, themes, keyboard support, and more.

> [react-dates](https://github.com/airbnb/react-dates) — An easily internationalizable, mobile-friendly datepicker library for the web.

> [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) — Flatpickr for React.

> Input Types

> _Masked inputs, specialized inputs; email / telephone number / credit card / etc._

> [react-input-mask](https://github.com/sanniassin/react-input-mask) — Yet another react component for input masking.

> [react-maskedinput](https://github.com/insin/react-maskedinput) — Masked &lt; input/&gt; React component.

> [react-text-mask](https://github.com/msafi/text-mask) — Input mask for React, Angular, and vanilla JavaScript. Flexible, robust & tiny.

> [react-credit-cards](https://github.com/amarofashion/react-credit-cards) — Beautiful credit cards for your payment forms.

> Autocomplete

> _Autosuggest / autocomplete / typeahead_

> [react-autosuggest](https://github.com/moroshko/react-autosuggest) — WAI-ARIA compliant React autosuggest component.

> [react-typeahead](https://github.com/fmoo/react-typeahead) — Pure react-based typeahead and typeahead-tokenizer.

> [react-typeahead-component](https://github.com/ezequiel/react-typeahead-component) — Typeahead, written using the React.js library.

> Select

> [react-selectize](https://github.com/furqanZafar/react-selectize) — A Stateless & Flexible Select component for React inspired by Selectize.

> [react-aria-menubutton](https://github.com/davidtheclark/react-aria-menubutton) — A fully accessible, easily themeable, React-powered menu button.

> [react-select](https://github.com/JedWatson/react-select) — A Select control built with and for React JS.

> [react-select-box](https://github.com/instructure-react/react-select-box) — An accessible select box component for React.

> Color Picker

> [react-input-color](https://github.com/wangzuo/react-input-color) — React input color component with hsv color picker.

> [react-color](https://github.com/casesandberg/react-color) — Color Pickers from Sketch, Photoshop, Chrome & more.

> [coloreact](https://github.com/elrumordelaluz/coloreact) — A tiny Color Picker for React.

> Toggle

> [react-toggle](https://github.com/instructure-react/react-toggle) — An elegant, accessible toggle component for React. Also a glorified checkbox.

> [react-ios-switch](https://github.com/clari/react-ios-switch) — React switch component.

> Slider

> [rc-slider](https://github.com/react-component/slider) — React Slider.

> [react-slider](https://github.com/mpowaga/react-slider) — Slider component for React.

> Radio Button

> [react-radio-group](https://github.com/chenglou/react-radio-group) — Better radio buttons.

> Type Select

> _Let the user select something (e.g. a tag) while typing_

> [react-tagsinput](https://github.com/olahol/react-tagsinput) — A simple react component for inputing tags.

> [react-tag-input](https://github.com/prakhar1989/react-tags) — A fantastically simple tagging component for your React projects.

> [react-mentions](https://github.com/effektif/react-mentions) — Mention people in a textarea.

> [react-tokeninput](https://github.com/instructure-react/react-tokeninput) — Tokeninput component for React.

> [react-autocomplete-input](https://github.com/yury-dymov/react-autocomplete-input) — Autocomplete input field for React.

> Autosize Input / Textarea

> [react-input-autosize](https://github.com/JedWatson/react-input-autosize) — Auto-resizing input field for React.

> [react-textarea-autosize](https://github.com/andreypopp/react-textarea-autosize) — &lt; textarea /&gt; component for React which grows with content.

> Star Rating

> [react-star-rating](https://github.com/cameronroe/react-star-rating) — A simple star rating component built with React.

> [react-star-rating-input](https://github.com/ikr/react-star-rating-input) — React.js component for entering 0-5 (or more) stars.

> Drag and Drop

> [react-draggable](https://github.com/mzabriskie/react-draggable) — React draggable component.

> [react-dnd-touch-backend](https://github.com/yahoo/react-dnd-touch-backend) — Touch Backend for react-dnd.

> [react-dropzone](https://github.com/okonet/react-dropzone) — Simple HTML5 drag-drop zone with React.js.

> [react-dnd](https://github.com/gaearon/react-dnd) — Drag and Drop for React.

> [react-sortable-pane](https://github.com/bokuweb/react-sortable-pane) — Sortable and resizable pane component for React.

> [react-dragula](https://github.com/bevacqua/react-dragula) — Drag and drop so simple it hurts.

> [react-droparea](https://github.com/avocode/react-droparea) — Drag and Drop library for React.

> Sortable List

> _Let the user define an order on a list_

> [sortablejs](https://github.com/RubaXa/Sortable) — Sortable — is a JavaScript library for reorderable drag-and-drop lists on modern browsers and touch devices. No jQuery. Supports Meteor, AngularJS, React, Polymer, Knockout and any CSS library, e.g. Bootstrap.

> [react-anything-sortable](https://github.com/jasonslyvia/react-anything-sortable) — A ReactJS component that can sort any children with touch support and IE8 compatibility.

> [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) — A set of higher-order components to turn any list into an animated, touch-friendly, sortable list.

> [react-sortable](https://github.com/danielstocks/react-sortable) — A sortable list component built with React.

> Rich Text Editor

> [react-quill](https://github.com/zenoamaro/react-quill) — A Quill component for React.

> [react-ace](https://github.com/securingsincity/react-ace) — React Ace Component.

> [react-contenteditable](https://github.com/lovasoa/react-contenteditable) — React component for a div with editable contents.

> [react-codemirror](https://github.com/JedWatson/react-codemirror) — Codemirror Component for React.js.

> [react-medium-editor](https://github.com/wangzuo/react-medium-editor) — React wrapper for medium-editor.

> [draft-js](https://github.com/facebook/draft-js) — A React framework for building text editors.

> [ritzy](https://github.com/ritzyed/ritzy) — Collaborative web-based rich text editor.

> [megadraft](https://github.com/globocom/megadraft) — Rich Text editor built on top of draft.js.

> [react-trumbowyg](https://github.com/RD17/react-trumbowyg) — React wrapper for Trumbowyg.

> [alloyeditor](https://github.com/liferay/alloy-editor) — WYSIWYG editor based on CKEditor with completely rewritten UI.

> [react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg) — A Wysiwyg editor build on top of ReactJS and DraftJS.

> Markdown Editor

> [react-md-editor](https://github.com/JedWatson/react-md-editor) — React.js Markdown Editor Component.

> [react-markdown-editor](https://github.com/jrm2k6/react-markdown-editor) — A markdown editor using React/Reflux.

> Image Editing

> _Image manipulation_

> [react-avatar-cropper](https://github.com/DropsOfSerenity/react-avatar-cropper) — Aiming to be a complete solution for avatar cropping in react.

> [react-avatar-editor](https://github.com/mosch/react-avatar-editor) — Facebook like, avatar / profile picture component. Resize and crop your uploaded image using a clear user interface.

> [react-image-crop](https://github.com/DominicTobias/react-image-crop) — A responsive image cropping tool for React.

> [react-image-cropper](https://github.com/jerryshew/react-image-cropper) — React image crop.

> Form Component Collections

> [formsy-react-components](https://github.com/twisty/formsy-react-components) — A set of React JS components for use in a formsy-react form. Markup adheres to Bootstrap 3 form structure.

> [formsy-material-ui](https://github.com/mbrookes/formsy-material-ui) — A Formsy compatibility wrapper for Material-UI form components.

> [react-input-enhancements](https://github.com/alexkuz/react-input-enhancements) — Set of enhancements for input control.

> [react-widgets](https://github.com/jquense/react-widgets) — An à la carte set of polished, extensible, and accessible inputs built for React.

> Miscellaneous

> [react-designer](https://github.com/fatiherikli/react-designer) — Easy to configure, lightweight, editable vector graphics in your react components.

> [react-images-uploader](https://github.com/aleksei0807/react-images-uploader) — React.js component for uploading images to the server.

> [react-tabguard](https://github.com/avocode/react-tabguard) — React Tabguard.

---

> MISC

> ‌

> · ​[micro github](https://github.com/mxstbr/micro-github) — Tiny microservice that makes adding authentication with GitHub to your application easy.

> · ​[pico.js](https://github.com/tehnokv/picojs) — Face detection library in200 lines of JavaScript.

> · ​[mdxc](https://github.com/jamesknelson/mdxc) — Use React Components within Markdown.

> · ​[ReLaXeD](https://github.com/RelaxedJS/ReLaXed) — Create PDF documents using web technologies. ([Examples](https://github.com/RelaxedJS/ReLaXed-examples))

> · ​[Dragula](https://github.com/bevacqua/dragula) — Drag and drop so simple it hurts.

> · ​[Hammer.js](https://github.com/hammerjs/hammer.js) — Multi-touch gestures.

> · ​[emittery](https://github.com/sindresorhus/emittery) — Simple and modern async event emitter.

> · ​[Xstate](https://github.com/davidkpiano/xstate) — State machines and statecharts for the modern web. ([State Machines Workshop](https://github.com/ooade/state-machines-workshop))

> · ​[xstate-component-tree](https://github.com/tivac/xstate-component-tree) — Build a tree of UI components based on your state chart.

> · [virtual-scroller](https://github.com/valdrinkoshi/virtual-scroller) — Maps a provided set of JavaScript objects onto DOM nodes, and renders only the DOM nodes that are currently visible, leaving the rest “virtualized”.

> · ​[jSPDF](https://github.com/MrRio/jsPDF) — Client-side JavaScript PDF generation for everyone.

> · ​[ForgJS](https://github.com/oussamahamdaoui/forgJs) — JavaScript lightweight object validator.

> · ​[faker.js](https://github.com/Marak/faker.js) — Generate massive amounts of realistic fake data in Node.js and the browser.

> · ​[arg](https://github.com/vercel/arg) — Simple argument parsing.

> · ​[fbt](https://github.com/facebookincubator/fbt) — JavaScript Internationalization Framework.

> · ​[fuzzysearch](https://github.com/bevacqua/fuzzysearch) — Tiny and blazing-fast fuzzy search in JavaScript.

> · ​[normalizr](https://github.com/paularmstrong/normalizr) — Normalizes nested JSON according to a schema.

> · ​[FBJS](https://github.com/facebook/fbjs) — Collection of utility libraries used by other Facebook JS projects.

> · ​[Uppy](https://github.com/transloadit/uppy) — Next open source file uploader for web browsers. ([Web](https://uppy.io/))

> · ​[ScrollReveal](https://github.com/scrollreveal/scrollreveal) — Animate elements as they scroll into view.

> · ​[Shiny](https://github.com/rikschennink/shiny) — Add shiny reflections to text, backgrounds, and borders on devices that support the DeviceMotion event.

> · ​[Hotkey Behavior](https://github.com/github/hotkey) — Trigger a action on element when keyboard hotkey is pressed.

> · ​[Bili](https://github.com/egoist/bili) — Makes it easier to bundle JavaScript libraries.

> · ​[Memoizee](https://github.com/medikoo/memoizee) — Complete memoize/cache solution for JavaScript.

> · ​[Immer](https://github.com/mweststrate/immer/#async-producers) — Create the next immutable state by mutating the current one.

> · ​[FlexSearch](https://github.com/nextapps-de/flexsearch) — Web’s fastest and most memory-flexible full-text search library with zero dependencies.

> · ​[cofx](https://github.com/neurosnap/cofx) — Node and javascript library that helps developers describe side-effects as data in a declarative, flexible API.

> · ​[Mercury Parser](https://github.com/postlight/mercury-parser) — Extracts the bits that humans care about from any URL you give it.

> · ​[Refract](https://github.com/fanduel-oss/refract) — Harness the power of reactive programming to supercharge your components.

> · ​[MemJS](https://github.com/memcachier/memjs) — Memcache client for node using the binary protocol and SASL authentication.

> · ​[memfs](https://github.com/streamich/memfs) — In-memory filesystem with Node’s API.

> · ​[Accounts](https://github.com/accounts-js/accounts) — Fullstack authentication and accounts-management for GraphQL and REST.

> · ​[Cleave.js](https://github.com/nosir/cleave.js) — Format input text content when you are typing…

> · ​[Unistore](https://github.com/developit/unistore) — Tiny 350b centralized state container with component bindings for Preact & React.

> · ​[Ramda](https://github.com/ramda/ramda) — Practical functional library for JavaScript programmers.

> · ​[fromfrom](https://github.com/tomi/fromfrom) — JS library written in TS to transform sequences of data from format to another.

> · ​[Editor.js](https://github.com/codex-team/editor.js) — Block-styled editor with clean JSON output.

> · ​[ijk](https://github.com/lukejacksonn/ijk) — Transforms arrays into virtual DOM trees.

> · ​[Cleave.js](https://github.com/nosir/cleave.js) — Format input text content when you are typing.

> · ​[Oboe.js](https://github.com/jimhigson/oboe.js) — Streaming approach to JSON. Oboe.js speeds up web applications by providing parsed objects before the response completes.

> · ​[Choices.js](https://github.com/jshjohnson/Choices) — Vanilla JS customisable select box/text input plugin.

> · ​[Shepherd](https://github.com/shipshapecode/shepherd) — Guide your users through a tour of your app.

> · ​[object-cull](https://github.com/Rich-Harris/object-cull) — Create a copy of an object with just the bits you actually need.

> · ​[Sigma](https://github.com/jacomyal/sigma.js) — JavaScript library dedicated to graph drawing.

> · ​[interact.js](https://github.com/taye/interact.js) — JavaScript drag and drop, resizing and multi-touch gestures with inertia and snapping for modern browsers.

> · ​[flru](https://github.com/lukeed/flru) — Tiny (215B) and fast Least Recently Used (LRU) cache.

> · ​[Yup](https://github.com/jquense/yup) — Dead simple Object schema validation.

> · ​[Lerna](https://github.com/lerna/lerna) — Tool for managing JavaScript projects with multiple packages.

> · ​[WikiJs](https://github.com/dijs/wiki) — Wikipedia Interface for Node.js.

> · ​[virtual-audio-graph](https://github.com/benji6/virtual-audio-graph) — Library for declaratively manipulating the Web Audio API.

> · ​[deep-object-diff](https://github.com/mattphillips/deep-object-diff) — Deep diffs two objects, including nested structures of arrays and objects, and returns the difference.

> · ​[Snarkdown](https://github.com/developit/snarkdown) — Snarky 1kb Markdown parser written in JavaScript.

> · ​[Terser](https://github.com/terser-js/terser) — JavaScript parser, mangler, optimizer and beautifier toolkit for ES6+.

> · ​[AppAuthJS](https://github.com/openid/AppAuth-JS) — JavaScript client SDK for communicating with OAuth 2.0 and OpenID Connect providers.

> · ​[expr-eval](https://github.com/silentmatt/expr-eval) — Mathematical expression evaluator in JavaScript.

> · ​[robust-predicates](https://github.com/mourner/robust-predicates) — Fast robust predicates for computational geometry in JavaScript.

> · ​[Sanctuary](https://github.com/sanctuary-js/sanctuary) — JavaScript functional programming library inspired by Haskell and PureScript.

> · ​[modali](https://github.com/upmostly/modali) — Delightful modal dialog component for React, built from the ground up to support React Hooks.

> · ​[Tweakpane](https://github.com/cocopon/tweakpane) — Compact GUI for fine-tuning parameters and monitoring value changes.

> · ​[crocks](https://github.com/evilsoft/crocks) — Collection of well known Algebraic Data Types for your utter enjoyment.

> · ​[Just](https://github.com/angus-c/just) — Library of zero-dependency npm modules that do just do one thing.

> · ​[nanoid](https://github.com/ai/nanoid) — Tiny (139 bytes), secure, URL-friendly, unique string ID generator for JavaScript.

> · ​[debug](https://github.com/visionmedia/debug) — Tiny JavaScript debugging utility modelled after Node.js core’s debugging technique. Works in Node.js and web browsers.

> · ​[roughViz.js](https://github.com/jwilber/roughViz) — Reusable JavaScript library for creating sketchy/hand-drawn styled charts in the browser.

> · ​[Mitt](https://github.com/developit/mitt) — Tiny 200 byte functional event emitter / pubsub.

> · ​[RequireJS](https://github.com/requirejs/requirejs) — File and module loader for JavaScript.

> · ​[Zero](https://github.com/sinclairzx81/zero) — 3D graphics rendering pipeline. Implemented in JavaScript. Run in a terminal.

> · ​[xstate-viz](https://github.com/statecharts/xstate-viz) — Visualize state charts.

> · ​[htmr](https://github.com/pveyes/htmr) — Simple and lightweight (&lt; 2kB) HTML string to React element conversion library.

> · ​[react-jsx-parser](https://github.com/TroyAlford/react-jsx-parser) — React component which can parse JSX and output rendered React Components.

> · ​[Static Land](https://github.com/fantasyland/static-land) — Specification for common algebraic structures in JavaScript based on Fantasy Land.

> · ​[sorted-queue](https://github.com/jviide/sorted-queue) — Sorted queue, based on an array-backed binary heap.

> · ​[polendina](https://github.com/rvagg/polendina) — Non-UI browser testing for JavaScript libraries from the command-line.

> · ​[agadoo](https://github.com/Rich-Harris/agadoo) — Check whether a package is tree-shakeable.

> · ​[Fielder](https://github.com/andyrichardson/fielder) — React form library which adapts to change.

> · ​[lemonad](https://github.com/fogus/lemonad) — Functional programming library for JavaScript. An experiment in elegant JS.

> · ​[Mockttp](https://github.com/httptoolkit/mockttp) — Lets you quickly & reliably test HTTP requests & responses in JavaScript, in both Node and browsers.

> · ​[Flowy](https://github.com/alyssaxuu/flowy) — Minimal javascript library to create flowcharts.

> · ​[d3-dag](https://github.com/erikbrinkman/d3-dag) — Layout algorithms for visualizing directed acyclic graphs.

> · ​[renature](https://github.com/FormidableLabs/renature) — Physics-based animation library for React focused on modeling natural world forces.

> · ​[Morphism](https://github.com/nobrainr/morphism) — Do not repeat anymore your objects transformations.

> · ​[Tonic](https://github.com/optoolco/tonic) — Stable, Minimal, Auditable, Build-Tool-Free, Low Profile Component Framework.

> · ​[Quiet.js](https://github.com/quiet/quiet-js) — Transmit data with sound using Web Audio — Javascript binding for libquiet.

> · ​[Bindery](https://github.com/evnbr/bindery) — Library for designing printable books with HTML and CSS.

> · ​[Wretch](https://github.com/elbywan/wretch) — Tiny wrapper built around fetch with an intuitive syntax.

> · ​[Virt.js](https://github.com/arcanis/virtjs) — Free collection of useful standard devices, that can be used to power various engine that makes use of the exposed interfaces.

> · ​[Path-to-RegExp](https://github.com/pillarjs/path-to-regexp) — Turn a path string such as /user/:name into a regular expression.

> · ​[Bacon.js](https://github.com/baconjs/bacon.js) — Functional reactive programming library for TypeScript and JavaScript.

> · ​[GGEditor](https://github.com/alibaba/GGEditor) — Visual graph editor based on G6 and React.

> · ​[Arbor](https://github.com/samizdatco/arbor) — Graph visualization library using web workers and jQuery. ([Web](http://arborjs.org/))

> · ​[fsm-as-promised](https://github.com/vstirbu/fsm-as-promised) — Finite state machine library using ES6 promises.

> · ​[x-spreadsheet](https://github.com/myliang/x-spreadsheet) — Web-based JavaScript（canvas）spreadsheet.

> · ​[IsoCity](https://github.com/victorqribeiro/isocity) — Isometric city builder in JavaScript.

> · ​[car](https://github.com/pakastin/car) — Simple 2d car physics with JavaScript. ([HN](https://news.ycombinator.com/item?id=21927076))

> · ​[Picomatch](https://github.com/micromatch/picomatch) — Blazing fast and accurate glob matcher written in JavaScript.

> · ​[react-isomorphic-data](https://github.com/jackyef/react-isomorphic-data) — Easily fetch data in your React components, with similar APIs to react-apollo.

> · ​[klona](https://github.com/lukeed/klona) — Tiny (228B) and fast utility to “deep clone” Objects, Arrays, Dates, RegExps, and more.

> · ​[ScrollMagic](https://github.com/janpaepke/ScrollMagic) — JavaScript library for magical scroll interactions.

> · ​[GoJS](https://gojs.net/latest/index.html) — JavaScript and TypeScript library for building interactive diagrams and graphs.

> · ​[Rete](https://github.com/retejs/rete) — JavaScript framework for visual programming and creating node editor. ([HN](https://news.ycombinator.com/item?id=22024201))

> · ​[Pre3d](https://github.com/deanm/pre3d) — JavaScript 3d rendering engine.

> · ​[dancer.js](https://github.com/jsantell/dancer.js) — High-level audio API, designed to make sweet visualizations.

> · ​[model-viewer](https://github.com/GoogleWebComponents/model-viewer) — Easily display interactive 3D models on the web and in AR.

> · ​[Spars](https://github.com/TimvanScherpenzeel/spars) — General toolkit for creating interactive web experiences.

> · ​[NeuroJS](https://github.com/janhuenermann/neurojs) — JavaScript deep learning and reinforcement learning library.

> · ​[Hareactive](https://github.com/funkia/hareactive) — Purely functional reactive programming library.

> · ​[Mirage JS](https://github.com/miragejs/miragejs) — Client-side server to develop, test and prototype your JavaScript app.

> · ​[dfa](https://github.com/foliojs/dfa) — State machine compiler with regular expression style syntax.

> · ​[Jtree](https://github.com/treenotation/jtree) — Tree Notation TypeScript/Javascript library.

> · ​[Hydra](https://github.com/ojack/hydra) — Livecoding networked visuals in the browser.

> · ​[p-queue](https://github.com/sindresorhus/p-queue) — Promise queue with concurrency control.

> · ​[gsheets](https://github.com/interactivethings/gsheets) — Get public Google Sheets as plain JavaScript/JSON.

> · ​[alga-ts](https://github.com/YBogomolov/alga-ts) — Algebraic graphs implementation in TypeScript.

> · ​[Chart.js](https://github.com/chartjs/Chart.js) — Simple HTML5 Charts using the tag. ([Awesome](https://github.com/chartjs/awesome))

> · ​[on-change](https://github.com/sindresorhus/on-change) — Watch an object or array for changes.

> · ​[clean-set](https://github.com/fwilkerson/clean-set) — Deep assignment alternative to the object spread operator and Object.assign.

> · ​[Search Query Syntax Parser](https://github.com/nepsilon/search-query-parser)​

> · ​[Uppload](https://github.com/elninotech/uppload) — Better JavaScript image uploader with 30+ plugins.

> · ​[pino](https://github.com/pinojs/pino) — Super fast, all natural JSON logger.

> · ​[Orbit](https://github.com/orbitjs/orbit) — Composable data framework for ambitious web applications.

> · ​[panzoom](https://github.com/anvaka/panzoom) — Universal pan and zoom library (DOM, SVG, Custom).

> · ​[intl-tel-input](https://github.com/jackocnr/intl-tel-input) — JavaScript plugin for entering and validating international telephone numbers.

> · ​[three.js](https://github.com/mrdoob/three.js) — JavaScript 3D library.

> · ​[shortid](https://github.com/dylang/shortid) — Short id generator. Url-friendly. Non-predictable. Cluster-compatible.

> · ​[styx](https://github.com/mariusschulz/styx) — Derives a control flow graph from a JavaScript AST.

> · ​[Crossfilter](https://github.com/crossfilter/crossfilter) — JavaScript library for exploring large multivariate datasets in the browser.

> · ​[SiriWave](https://github.com/kopiro/siriwave) — Apple Siri wave-form replicated in a JS library.

> · ​[Shades](https://github.com/jamesmcnamara/shades) — Lodash-inspired lens-like library for Javascript.

> · ​[mxGraph](https://github.com/jgraph/mxgraph) — Fully client side JavaScript diagramming library.

> · ​[cacache](https://github.com/npm/cacache) — Node.js library for managing local key and content address caches.

> · ​[enhanced-resolve](https://github.com/webpack/enhanced-resolve) — Offers an async require.resolve function. It’s highly configurable.

> · ​[notevil](https://github.com/mmckegg/notevil) — Evalulate javascript like the built-in javascript eval() method but safely.

> · ​[react-digraph](https://github.com/uber/react-digraph) — Library for creating directed graph editors.

> · ​[bent](https://github.com/mikeal/bent) — Functional JS HTTP client (Node.js & Fetch) w/ async await.

> · ​[CLUI](https://github.com/replit/clui) — Collection of JavaScript libraries for building command-line interfaces with context-aware autocomplete.

> · ​[cosha](https://github.com/robinloeffel/cosha) — Colorful shadows for your images.

> · ​[Rambda](https://github.com/selfrefactor/rambda) — Faster and smaller alternative to Ramda.

> · ​[MathJax](https://github.com/mathjax/MathJax) — Open-source JavaScript display engine for LaTeX, MathML, and AsciiMath notation that works in all modern browsers. ([Web](https://www.mathjax.org/)) ([HN](https://news.ycombinator.com/item?id=24741077))

> · ​[Litepicker](https://github.com/wakirin/Litepicker) — Date range picker — lightweight, no dependencies.

> · ​[core-js](https://github.com/zloirock/core-js) — Modular standard library for JavaScript.

> · ​[timeago.js](https://github.com/hustcc/timeago.js) — Nano library (less than 2 kb) used to format datetime with \*\*\* time ago statement. eg: ‘3 hours ago’.

> · ​[Serialize JavaScript](https://github.com/yahoo/serialize-javascript) — Serialize JavaScript to a superset of JSON that includes regular expressions, dates and functions.

> · ​[Tippy.js](https://github.com/atomiks/tippyjs) — Tooltip, popover, dropdown, and menu library.

> · ​[howler.js](https://github.com/goldfire/howler.js) — JavaScript audio library for the modern web.

> · ​[date-fns](https://github.com/date-fns/date-fns) — Modern JavaScript date utility library.

> · ​[Midi](https://github.com/Tonejs/Midi) — Convert MIDI into Tone.js-friendly JSON.

> · ​[face-api.js](https://github.com/justadudewhohacks/face-api.js) — JavaScript API for face detection and face recognition in the browser and nodejs with tensorflow.js.

> · ​[Spotlight](https://github.com/karlisup/spotlight) — Search widget for your web API.

> · ​[Fuse](https://github.com/krisk/Fuse) — Lightweight fuzzy-search, in JavaScript.

> · ​[Xterm.js](https://github.com/xtermjs/xterm.js) — Terminal for the web.

> · ​[Change Case](https://github.com/blakeembrey/change-case) — Convert strings between camelCase, PascalCase, Capital Case, snake_case and more.

> · ​[ChronoGraph](https://github.com/bryntum/chronograph) — Reactive, graph-based, computation engine.

> · ​[Sprotty](https://github.com/eclipse/sprotty) — Diagramming framework for the web.

> · ​[prerender.js](https://github.com/genderev/prerender.js) — Loads pages quickly on any browser.

> · ​[on-finished](https://github.com/jshttp/on-finished) — Execute a callback when a request closes, finishes, or errors.

> · ​[ColorFns](https://github.com/baianat/color-fns) — Modern JavaScript color utilities library.

> · ​[grapheme-splitter](https://github.com/orling/grapheme-splitter) — JavaScript library that breaks strings into their individual user-perceived characters.

> · ​[Web Animations](https://github.com/web-animations/web-animations-js) — JavaScript implementation of the Web Animations API.

> · ​[p-limit](https://github.com/sindresorhus/p-limit) — Run multiple promise-returning & async functions with limited concurrency.

> · ​[Highcharts JS](https://github.com/highcharts/highcharts) — JavaScript charting library based on SVG.

> · ​[μPlot](https://github.com/leeoniya/uPlot) — Small, fast chart for time series, lines, areas, ohlc & bars.

> · ​[Baobab](https://github.com/Yomguithereal/baobab) — JavaScript & TypeScript persistent and optionally immutable data tree with cursors.

> · ​[emoji-regex](https://github.com/mathiasbynens/emoji-regex) — Regular expression to match all Emoji-only symbols as per the Unicode Standard.

> · ​[MerkleTree.js](https://github.com/miguelmota/merkletreejs) — Construct Merkle Trees and verify proofs in JavaScript.

> · ​[Snabbdom](https://github.com/snabbdom/snabbdom) — Virtual DOM library with focus on simplicity, modularity, powerful features and performance.

> · ​[Thwack](https://github.com/donavon/thwack) — Tiny modern data fetching solution.

> · ​[Regenerate](https://github.com/mathiasbynens/regenerate) — Generate JavaScript-compatible regular expressions based on a given set of Unicode symbols or code points.

> · ​[Crank.js](https://github.com/bikeshaving/crank) — Write JSX-driven components with functions, promises and generators. ([Article](https://crank.js.org/blog/introducing-crank)) ([Reddit](https://www.reddit.com/r/reactjs/comments/g2u135/crankjs_introducting_crank/)) ([HN](https://news.ycombinator.com/item?id=22903967))

> · ​[redaxios](https://github.com/developit/redaxios) — Axios API, as an 800 byte Fetch wrapper.

> · ​[Math.js](https://github.com/josdejong/mathjs) — Extensive math library for JavaScript and Node.js.

> · ​[pixelmatch](https://github.com/mapbox/pixelmatch) — Smallest, simplest and fastest JavaScript pixel-level image comparison library.

> · ​[quilt](https://github.com/Shopify/quilt) — Loosely related set of packages for JavaScript / TypeScript projects at Shopify.

> · ​[jsondiffpatch](https://github.com/benjamine/jsondiffpatch) — Diff & patch JavaScript objects.

> · ​[RVal](https://github.com/mweststrate/rval) — Minimalistic transparent reactive programming library.

> · ​[orbit-controls](https://github.com/Jam3/orbit-controls) — Generic controls for orbiting a target in 3D.

> · ​[estree-walker](https://github.com/Rich-Harris/estree-walker) — Traverse an ESTree-compliant AST.

> · ​[Jitsi Meet API library](https://github.com/jitsi/lib-jitsi-meet) — Can use Jitsi Meet API to create Jitsi Meet video conferences with a custom GUI.

> · ​[isomer](https://github.com/jdan/isomer) — Simple isometric graphics library for HTML5 canvas.

> · ​[Schema to Yup schema](https://github.com/kristianmandrup/schema-to-yup)​

> · ​[Mordred](https://github.com/egoist/mordred) — Source data from anywhere, for Next.js, Nuxt.js, Eleventy and many more.

> · ​[ASScroll](https://github.com/ashthornton-gc/asscroll) — Hybrid smooth scroll setup that combines the performance gains of virtual scroll with the reliability of native scroll.

> · ​[Gallery](https://github.com/bendc/gallery) — Light, responsive, and performant JavaScript gallery.

> · ​[Logux Server](https://github.com/logux/server) — Build own Logux server or make proxy between WebSocket and HTTP backend on any language.

> · ​<span class="citation" data-cites="expo/results">\[<span class="citation" data-cites="expo/results">@expo/results</span>\]</span>(https://github.com/expo/results) — Efficient, standards-compliant library for representing results of successful or failed operations.

> · ​[Emojibase](https://github.com/milesj/emojibase) — Collection of lightweight, up-to-date, pre-generated, specification compliant, localized emoji JSON datasets, regex patterns, and more.

> · ​serve-favicon — Node.js middleware for serving a favicon.

> · ​[download](https://github.com/kevva/download) — Download and extract files.

> · ​[color2k](https://github.com/ricokahler/color2k) — Color parsing and manipulation lib served in 2kB or less.

> · ​[Sandstorm](https://sandstorm.io/) — Open source platform for self-hosting web apps. ([Code](https://github.com/sandstorm-io/sandstorm))

> · ​[transformation-matrix](https://github.com/chrvadala/transformation-matrix) — JS isomorphic 2D affine transformations written in ES6 syntax.

> · ​[Muuri](https://github.com/haltu/muuri) — JavaScript layout engine that allows you to build all kinds of layouts and make them responsive, sortable, filterable, draggable and/or animated.

> · ​[Split](https://github.com/nathancahill/split) — Unopinionated utilities for resizeable split views.

> · ​[Parallax Engine](https://github.com/wagerfield/parallax) — Reacts to the orientation of a smart device.

> · ​[fastq](https://github.com/mcollina/fastq) — Fast, in memory work queue.

> · ​[ac-colors](https://github.com/vinaypillai/ac-colors) — Reactive JavaScript color library that can freely convert color formats.

> · ​[sonic-boom](https://github.com/mcollina/sonic-boom) — Extremely fast utf8 only stream implementation.

> · ​[Rough Notation](https://github.com/pshihn/rough-notation) — Small JavaScript library to create and animate annotations on a web page. ([HN](https://news.ycombinator.com/item?id=23339244))

> · ​[SqueakJS](https://github.com/codefrau/SqueakJS) — Squeak VM for the Web and Node.js. ([Web](https://squeak.js.org/))

> · ​[fit-textarea](https://github.com/fregante/fit-textarea) — Automatically expand a to fit its content, in a few bytes.

> · ​[NanoPop](https://github.com/Simonwep/nanopop) — Ultra Tiny, Opinionated Positioning Engine. ([Web](https://simonwep.github.io/nanopop/))

> · ​[Angelfire](https://github.com/rish-16/Angelfire) — Lets you quickly build right-click-enabled context menus and drop-down menus for any element on your webpage.

> · ​[csv-parser](https://github.com/mafintosh/csv-parser) — Streaming csv parser inspired by binary-csv that aims to be faster than everyone else.

> · ​[updeep](https://github.com/substantial/updeep) — Easily update nested frozen objects and arrays in a declarative and immutable manner.

> · ​[Hull.js](https://github.com/AndriiHeonia/hull) — JavaScript library that builds concave hull by set of points.

> · ​[StegCloak](https://github.com/KuroLabs/stegcloak) — Hide secrets with invisible characters in plain text securely using passwords.

> · ​[p-min-delay](https://github.com/sindresorhus/p-min-delay) — Delay a promise a minimum amount of time.

> · ​[match-when](https://github.com/FGRibreau/match-when) — Pattern matching for modern JavaScript.

> · ​[NumJs](https://github.com/nicolaspanel/numjs) — Like NumPy, in JavaScript.

> · ​[spect](https://github.com/spectjs/spect) — Reactive aspect-oriented web-framework.

> · ​[js-cid](https://github.com/multiformats/js-cid) — CID implementation in JavaScript.

> · ​[js-ipld-block](https://github.com/ipld/js-ipld-block) — Implementation of the Block data structure in JavaScript.

> · ​[wildcard-api](https://github.com/reframejs/wildcard-api) — Functions as API.

> · ​[bpmn-js](https://github.com/bpmn-io/bpmn-js) — BPMN 2.0 rendering toolkit and web modeler.

> · ​[fit-curve](https://github.com/soswow/fit-curve) — JavaScript implementation of Philip J. Schneider’s “Algorithm for Automatically Fitting Digitized Curves” from the book “Graphics Gems”.

> · ​[clean-deep](https://github.com/nunofgs/clean-deep) — Remove falsy, empty or nullable values from objects.

> · ​[regular-table](https://github.com/jpmorganchase/regular-table) — Regular library, for async and virtual data models.

> · ​[Stimulus](https://github.com/hotwired/stimulus) — Modest JavaScript framework for the HTML you already have. ([Web](https://stimulus.hotwire.dev/))

> · ​[bigpicture.js](https://github.com/josephernest/bigpicture.js/) — Library that allows infinite panning and infinite zooming in HTML pages. ([Web](https://josephernest.github.io/bigpicture.js/index.html))

> · ​[Tragopan](https://github.com/team-video/tragopan) — Minimal dependency-free pan/zoom library. ([HN](https://news.ycombinator.com/item?id=23579102))

> · ​[Deakins](https://github.com/terkelg/deakins) — Small Canvas 2D Camera.

> · ​[Turbolinks](https://github.com/turbolinks/turbolinks) — Makes navigating your web application faster.

> · ​[CindyJS](https://github.com/CindyJS/CindyJS) — Framework to create interactive (mathematical) content for the web. ([Web](https://cindyjs.org/)) ([HN](https://news.ycombinator.com/item?id=23589296))

> · ​[axios](https://github.com/axios/axios) — Promise based HTTP client for the browser and nodeJS.

> · ​[astray](https://github.com/lukeed/astray) — Walk an AST without being led astray.

> · ​[vnopts](https://github.com/ikatyang/vnopts) — Validate and normalize options.

> · ​[canvas confetti](https://github.com/catdad/canvas-confetti) — On-demand confetti gun. ([Docs](https://www.kirilv.com/canvas-confetti/))

> · ​[Graphlib](https://github.com/dagrejs/graphlib) — JavaScript library that provides data structures for undirected and directed multi-graphs along with algorithms that can be used with them.

> · ​[Dagre](https://github.com/dagrejs/dagre) — JavaScript library that makes it easy to lay out directed graphs on the client-side.

> · ​[ecsy](https://github.com/MozillaReality/ecsy) — Highly experimental Entity Component System framework implemented in javascript, aiming to be lightweight, easy to use and with good performance. ([Docs](https://ecsy.io/docs/#/))

> · ​[Object Visualizer](https://github.com/iendeavor/object-visualizer) — Visualize the JSON object to the DOM. ([HN](https://news.ycombinator.com/item?id=23860568))

> · ​[Reach Schema](https://github.com/open-draft/reach-schema) — Functional schema-driven JavaScript object validation library.

> · ​<span class="citation" data-cites="cycle/callbags">\[<span class="citation" data-cites="cycle/callbags">@cycle/callbags</span>\]</span>(https://github.com/cyclejs/callbags) — Set of commonly used stream operators implemented as callbags with Typescript and ES modules.

> · ​[umbrella](https://github.com/thi-ng/umbrella/) — Broadly scoped ecosystem & mono-repository of ~135 TypeScript projects for functional, data driven development.

> · ​[HTM](https://github.com/developit/htm) — JSX-like syntax in plain JavaScript — no transpiler necessary.

> · ​[NativeScript](https://github.com/nativescript/nativescript) — Framework for building native iOS and Android apps using JavaScript and CSS.

> · ​[schema-dts](https://github.com/google/schema-dts) — JSON-LD TypeScript types for Schema.org vocabulary.

> · ​[flatpickr](https://github.com/flatpickr/flatpickr) — JS date time picker.

> · ​[superjson](https://github.com/blitz-js/superjson) — Safely serialize JavaScript expressions to a superset of JSON, which includes Dates, BigInts, and more.

> · ​[lazy-collections](https://github.com/RobinMalfait/lazy-collections) — Collection of fast and lazy operations.

> · ​[Perfect Arrows](https://github.com/steveruizok/perfect-arrows) — Set of functions for drawing perfect arrows between points and shapes.

> · ​[Autocomplete.js](https://github.com/algolia/autocomplete.js) — Fast and full-featured autocomplete library.

> · ​[urlcat](https://github.com/balazsbotond/urlcat) — URL builder library for JavaScript. ([Docs](https://urlcat.dev/))

> · ​[Diagram Maker](https://github.com/awslabs/diagram-maker) — Library to display an interactive editor for any graph-like data. ([Docs](https://awslabs.github.io/diagram-maker/)) ([HN](https://news.ycombinator.com/item?id=24688860))

> · ​[js-coroutines](https://github.com/miketalbot/js-coroutines) — 60fps with JavaScript Coroutines for idle processing and animation.

> · ​[Transducist](https://github.com/dphilipson/transducist) — Ergonomic JavaScript/TypeScript transducers for beginners and experts.

> · ​[decimal.js](https://github.com/MikeMcl/decimal.js) — Arbitrary-precision Decimal type for JavaScript.

> · ​[Constant-Time JavaScript](https://github.com/soatok/constant-time-js) — Constant-time algorithms written in TypeScript.

> · ​[SheetJS](https://github.com/SheetJS/sheetjs) — Spreadsheet Data Toolkit. Read, edit, and export spreadsheets. Works in web browsers and servers. ([Web](https://sheetjs.com/))

> · ​[Z](https://github.com/z-pattern-matching/z) — Pattern Matching for JavaScript. ([Web](https://z-pattern-matching.github.io/))

> · ​[Graphology](https://github.com/graphology/graphology) — Robust & multipurpose Graph object for JavaScript & TypeScript. ([Docs](https://graphology.github.io/))

> · ​[weak-napi](https://github.com/node-ffi-napi/weak-napi) — Make weak references to JavaScript Objects.

> · ​[nestie](https://github.com/lukeed/nestie) — Tiny (211B) and fast utility to expand a flattened object.

> · ​[Mock.js](https://github.com/nuysoft/Mock) — Simulation data generator.

> · ​[Detect features](https://github.com/TimvanScherpenzeel/detect-features) — Detect and report browser and hardware features.

> · ​[JSZip](https://github.com/Stuk/jszip) — Create, read and edit .zip files with JavaScript.

> · ​[Classnames](https://github.com/JedWatson/classnames) — Simple javascript utility for conditionally joining classNames together.

> · ​[cx](https://github.com/joe-bell/cx) — Concatenate your classes (with shortcuts).

> · ​[Defer](https://github.com/borderless/defer) — Tiny, type-safe, JavaScript-native defer implementation.

> · ​[freshie](https://github.com/lukeed/freshie) — Fresh take on building universal applications with support for pluggable frontends and backends.

> · ​[Luckysheet](https://github.com/mengshukeji/Luckysheet) — Online spreadsheet like excel that is powerful, simple to configure, and completely open source. ([Docs](https://mengshukeji.github.io/LuckysheetDocs/guide/))

> · ​[noUiSlider](https://github.com/leongersen/noUiSlider) — Lightweight JavaScript range slider.

> · ​[QRCode.js](https://github.com/davidshimjs/qrcodejs) — Cross-browser QRCode generator for JavaScript. ([Web](https://davidshimjs.github.io/qrcodejs/))

> · ​[HyperScript](https://github.com/hyperhype/hyperscript) — Create HyperText with JavaScript, on client or server.

> · ​[hyperscript-helpers](https://github.com/ohanhi/hyperscript-helpers) — Terse syntax for hyperscript.

> · ​[EnlighterJS](https://github.com/EnlighterJS/EnlighterJS) — Open source syntax highlighter written in pure javascript.

> · ​[eslisp](https://github.com/anko/eslisp) — S-expression syntax for JavaScript, with Lisp-like hygienic macros. Minimal core, maximally customisable.

> · ​[Smoldash](https://github.com/marvinhagemeister/smoldash) — Tiny lodash alternative built for the modern web.

> · ​[TypewriterJS](https://github.com/tameemsafi/typewriterjs) — Simple yet powerful native javascript plugin for a cool typewriter effect.

> · ​[sse.js](https://github.com/mpetazzoni/sse.js) — Flexible Server Side Events source for JavaScript.

> · ​[Arkit](https://github.com/dyatko/arkit) — Visualises JavaScript, TypeScript and Flow codebases as meaningful and committable architecture diagrams. ([Web](https://arkit.pro/))

> · ​[jsii](https://github.com/aws/jsii) — Allows code in any language to naturally interact with JavaScript classes.

> · ​[proxy-memoize](https://github.com/dai-shi/proxy-memoize) — Intuitive magical memoization library with Proxy and WeakMap. ([Tweet](https://twitter.com/dai_shi/status/1321089602623557639))

> · ​[CosmJS](https://github.com/cosmos/cosmjs) — Modular library consisting of multiple packages to power web experiences.

> · ​[Arwes](https://github.com/arwes/arwes) — Futuristic Sci-Fi and Cyberpunk Graphical User Interface Framework for Web Apps. ([Web](https://arwes.dev/))

> · ​[psl (Public Suffix List)](https://github.com/lupomontero/psl) — JavaScript domain name parser based on the Public Suffix List.

> · ​[invariant-packages](https://github.com/apollographql/invariant-packages) — Packages for working with invariant(condition, message) assertions.

> · ​[evt](https://github.com/garronej/evt) — EventEmitter’s typesafe replacement.

> · ​[webscan](https://github.com/samyk/webscan) — Browser-based network scanner & local-IP detection.

> · ​[Pill](https://github.com/rumkin/pill) — Add dynamic content loading to static sites with only 1 KiB of JS.

> · ​[fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) — Fastest deep equal with ES6 Map, Set and Typed arrays support.

> · ​[preview-card](https://github.com/egoist/preview-card) — Customizable social media preview image.

> · ​[egjs-flicking](https://github.com/naver/egjs-flicking) — Easy-to-use and performant infinite carousel.

> · ​[SSE-Z](https://github.com/contrawork/sse-z) — Slim, easy-to-use wrapper around EventSource.

> · ​[DefinitelyExported](https://github.com/snowpackjs/DefinitelyExported) — Community-defined export maps for popular npm packages.

> · ​[jsdiff](https://github.com/kpdecker/jsdiff) — JavaScript text differencing implementation.

> · ​[HyperFormula](https://github.com/handsontable/hyperformula) — Open source, spreadsheet-like calculation engine.

> · ​[fast-json-stringify](https://github.com/fastify/fast-json-stringify) — Significantly faster than JSON.stringify() for small payloads.

> · ​[isbot](https://github.com/omrilotan/isbot) — JavaScript module that detects bots/crawlers/spiders via the user agent.

> · ​[valtio](https://github.com/pmndrs/valtio) — Makes proxy-state simple.

> · ​[pica](https://github.com/nodeca/pica) — High quality image resize in browser.

> · ​[Planton](https://github.com/gajus/planton) — Database-agnostic task scheduler.

> · ​[mime-types](https://github.com/jshttp/mime-types) — JavaScript content-type utility.

> · ​[match-sorter](https://github.com/kentcdodds/match-sorter) — Simple, expected, and deterministic best-match sorting of an array in JavaScript.

> · ​[Fetch Event Source](https://github.com/Azure/fetch-event-source) — Better API for making Event Source requests, with all the features of fetch().

> · ​[rafz](https://github.com/pmndrs/rafz) — Coordinate requestAnimationFrame calls across your app and/or libraries.

> · ​[p-state](https://github.com/sindresorhus/p-state) — Inspect the state of a promise.

> · ​[v86](https://github.com/copy/v86) — x86 virtualization in JavaScript, running in your browser and NodeJS. ([Web](https://copy.sh/v86/))

> · ​[Notyf](https://github.com/caroso1222/notyf) — Minimalistic, responsive, vanilla JavaScript library to show toast notifications.

> · ​[Moveable](https://github.com/daybrush/moveable) — Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable, Groupable, Snappable.

> · ​[Execa](https://github.com/sindresorhus/execa) — Process execution for humans.

> · ​[quick-lru](https://github.com/sindresorhus/quick-lru) — Simple “Least Recently Used” (LRU) cache.

> · ​[Deepdash](https://github.com/YuriGor/deepdash) — Tree traversal library written in Underscore/Lodash fashion. ([Docs](https://deepdash.io/))

> · ​[Nano Delay](https://github.com/ai/nanodelay) — Tiny (25 bytes) Promise wrapper around setTimeout.

> · ​[ES Module Lexer](https://github.com/guybedford/es-module-lexer) — Low-overhead lexer dedicated to ES module parsing for fast analysis.

> · ​[keez](https://github.com/kripod/keez) — Frictionless hotkey handling for browsers.

> · ​[Zet](https://github.com/terkelg/zet) — Set() as it should be.

> · ​[Ketting](https://github.com/badgateway/ketting) — Hypermedia client for JavaScript.

> · ​[yocto-queue](https://github.com/sindresorhus/yocto-queue) — Tiny queue data structure.

> · ​[Nano JSX](https://github.com/nanojsx/nano) — Lightweight 1kB JSX library. ([Web](https://nanojsx.github.io/))

> · ​[Effects.js](https://github.com/nythrox/effects.js) — Algebraic effects in javascript with scoped handlers, multishot delimited continuations, stack safety and do notation.

> · ​[flatten-js](https://github.com/alexbol99/flatten-js) — JavaScript library for 2d geometry.

> · ​[is-retry-allowed](https://github.com/sindresorhus/is-retry-allowed) — Check whether a request can be retried based on the error.code.

> · ​[backfill](https://github.com/microsoft/backfill) — JavaScript caching library for reducing build time.

> · ​[S-Libs](https://github.com/simontonsoftware/s-libs) — Collection of libraries for any of JS, RxJS, or Angular.

> · ​[watchpack](https://github.com/webpack/watchpack) — Wrapper library for directory and file watching.

> · ​[async-tag](https://github.com/WebReflection/async-tag) — Resolves template literals tag values before applying a generic tag.

> · ​[serialize-error](https://github.com/sindresorhus/serialize-error) — Serialize/deserialize an error into a plain object.

> · ​[errorstacks](https://github.com/marvinhagemeister/errorstacks) — Tiny library to parse error stack traces.

> · ​[Ape-ECS](https://github.com/fritzy/ape-ecs) — Entity-Component-System library for JavaScript.

> · ​[rrule.js](https://github.com/jakubroztocil/rrule) — JavaScript library for working with recurrence rules for calendar dates as defined in the iCalendar RFC and more. ([Demo](https://jakubroztocil.github.io/rrule/))

> · ​[scroller](https://github.com/rdmurphy/scroller) — Super-tiny library for your scrollytelling needs.

> · ​[Isomorphic DOMPurify](https://github.com/kkomelin/isomorphic-dompurify) — Makes it possible to use DOMPurify on server and client in the same way.

> · ​[navaid](https://github.com/lukeed/navaid) — Navigation aid (aka, router) for the browser in 850 bytes.

> · ​[glob-to-regexp](https://github.com/fitzgen/glob-to-regexp) — Convert a glob to a regular expression.

> · ​[cmap](https://github.com/ionstage/cmap) — Interactive visualization library for concept map.

> · ​[lezer-tree](https://github.com/lezer-parser/lezer-tree) — Incremental GLR parser intended for use in an editor or similar system.

> · ​[matchit](https://github.com/lukeed/matchit) — Quickly parse & match URLs.

> · ​[acorn](https://github.com/acornjs/acorn) — Tiny, fast JavaScript parser, written completely in JavaScript.

> · ​[jsesc](https://github.com/mathiasbynens/jsesc) — Given some data, jsesc returns the shortest possible stringified & ASCII-safe representation of that data.

> · ​[fastjson](https://github.com/qntm/fastjson) — Single-tweet, standards-compliant, high-performance JSON stack.

> · ​[grfn](https://github.com/TomerAberbach/grfn) — Tiny (~400B) utility that executes a dependency graph of async functions as concurrently as possible.

> · ​[Nunjucks](https://github.com/mozilla/nunjucks) — Powerful templating engine with inheritance, asynchronous control, and more. ([Web](https://mozilla.github.io/nunjucks/))

> · ​[Behavior3JS](https://github.com/behavior3/behavior3js) — Structures and algorithms that assist you in the task of creating intelligent agents for your game or application.

> · ​[qs](https://github.com/ljharb/qs) — Querystring parser with nesting support.

> · ​[Exifer](https://github.com/terkelg/exifer) — Small module that read JPEG/TIFF meta-data.

> · ​[jsVideoUrlParser](https://github.com/Zod-/jsVideoUrlParser) — JavaScript parser to extract information like provider, channel, id, start time from YouTube, Vimeo, Dailymotion, Twitch,… urls.

> · ​[TypeDI](https://github.com/typestack/typedi) — Dependency injection tool for TypeScript and JavaScript.

> · ​[ibridge](https://github.com/franleplant/ibridge) — Tiny, promise based, type safe library for easy, bidirectional and secure iframe communication.

> · ​[Monio](https://github.com/getify/monio) — Async-capable IO monad for JS.

> · ​[Total.js](https://www.totaljs.com/) — Excellent and stable server-side Node.js framework, client-side library for creating web applications with more than 230 UI components for free.

> · ​[memoize-one](https://github.com/alexreardon/memoize-one) — Memoization library which only remembers the latest invocation.

> · ​[pjson](https://github.com/tidwall/pjson) — JSON stream parser for Go.

> · ​[InternMap](https://github.com/mbostock/internmap) — Map and Set with automatic key interning.

> · ​[geometry-processing-js](https://github.com/GeometryCollective/geometry-processing-js) — Fast, general-purpose framework for geometry processing on the web.

> · ​[Iterplus](https://github.com/Aplet123/iterplus) — Best of Rust/Haskell/Python iterators in JavaScript.

> · ​[SmolScroll](https://github.com/smolscrolljs/smolscroll) — Tiny, flexible scroll listener with React support.

> · ​[Observable parser](https://github.com/observablehq/parser)​

> · ​[Robot](https://github.com/matthewp/robot) — Functional, immutable Finite State Machine library. ([Docs](https://thisrobot.life/))

> · ​[Enmap](https://github.com/eslachance/enmap) — Enhanced Map structure with additional utility methods.

> · ​[Honeycomb](https://github.com/flauwekeul/honeycomb) — Create hex grids easily, in node or the browser.

> · ​[chunkify](https://github.com/sindresorhus/chunkify) — Split an iterable into evenly sized chunks.

> · ​[wobble](https://github.com/skevy/wobble) — Tiny spring physics micro-library that models a damped harmonic oscillator.

> · ​[tmp-cache](https://github.com/lukeed/tmp-cache) — Least-recently-used cache in 35 lines of code.

> · ​[static-eval](https://github.com/browserify/static-eval) — Evaluate statically-analyzable expressions.

> · ​[Sparse Octree](https://github.com/vanruesc/sparse-octree) — Sparse, pointer-based octree data structure.

> · ​[Signature Pad](https://github.com/szimek/signature_pad) — JavaScript library for drawing smooth signatures.

> · ​[dom-to-image-retina](https://github.com/egoist/dom-to-image-retina) — dom-to-image but generates high-resolution images.

> · ​[loglevel](https://github.com/pimterry/loglevel) — Minimal lightweight logging for JavaScript, adding reliable log level methods to wrap any available console.log methods.

> · ​[Perfect Freehand](https://github.com/steveruizok/perfect-freehand) — Draw perfect freehand lines.

> · ​[Alo](https://github.com/alojs/alo) — Full-fledged state management. ([Docs](http://www.alojs.com/index.html))

> · ​[Form-Data](https://github.com/form-data/form-data) — Library to create readable “multipart/form-data” streams. Can be used to submit forms and file uploads to other web applications.

> · ​[conf](https://github.com/sindresorhus/conf) — Simple config handling for your app or module.

> · ​[gifenc](https://github.com/mattdesl/gifenc) — Fast and lightweight pure-JavaScript GIF encoder.

> · ​[tldts](https://github.com/remusao/tldts) — Blazing Fast URL Parsing.

> · ​[Barba.js](https://github.com/barbajs/barba) — Easy-to-use library that helps you create fluid and smooth transitions between your website’s pages.

> · ​[Shuffle.js](https://github.com/Vestride/Shuffle) — Categorize, sort, and filter a responsive grid of items. ([Web](https://vestride.github.io/Shuffle/))

> · ​[stdlib](https://github.com/stdlib-js/stdlib) — Standard library for JavaScript and Node.js. ([Web](https://stdlib.io/))

> · ​[gensync](https://github.com/loganfsmyth/gensync) — Allows users to use generators in order to write common functions that can be both sync or async.

> · ​[monet.js](https://github.com/monet/monet.js) — Monadic types library for JavaScript.

> · ​[VivaGraph](https://github.com/anvaka/VivaGraphJS) — Graph drawing library for JavaScript.

> · ​[Crochet](https://github.com/qteatime/crochet) — Small engine for story-driven games.

> · ​[diary](https://github.com/maraisr/diary) — Zero-dependency, fast logging library for both Node and Browser.

> · ​[tinydate](https://github.com/lukeed/tinydate) — Tiny reusable date formatter.

> · ​[FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) — Browser fingerprinting library with the highest accuracy and stability.

> · ​[Antiutils](https://github.com/ivan7237d/antiutils) — TypeScript/JavaScript utilities for those who don’t like utilities.

‌

### General:

**· ​**[**NPM**](https://www.npmjs.com/) **— Node package manager registry.**

**· ​**[**Awesome WebAudio**](https://github.com/notthetup/awesome-webaudio)**​**

**· ​**[**Awesome XState**](https://github.com/darrylhebbes/awesome_xstate)**​**

**· ​**[**Moiva.io**](https://moiva.io/) **— Measure and compare JavaScript libraries side by side.**

**· ​**[**Scarf**](https://about.scarf.sh/) **— Installation analytics for your npm package. (**[**Code**](https://github.com/scarf-sh/scarf-js)**)**

If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s" class="uri">https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s</a><a href="https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s" class="uri">https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s</a>

Or checkout my personal resource site:

<a href="https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s" class="uri">https://github.com/bgoonz/Cumulative-Resource-List/tree/master/README-s</a>

#### Everyone’s seen the ‘Awesome’ lists on GitHub… and they are indeed awesome… so today I am going to attempt to curate my own…

![](https://cdn-images-1.medium.com/max/800/1*3pwY-HRi2sjgBBJ0eISwqw.png)

> [**https://github.com/topics/awesome**](https://github.com/topics/awesome)

-   [JavaScript. The Core](http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/)
-   [Modern JavaScript Tutorial](https://javascript.info/) ([HN](https://news.ycombinator.com/item?id=25333350))
-   [You don’t know JS books](https://github.com/getify/You-Dont-Know-JS)
-   [JS in 14 minutes](https://jgthms.com/javascript-in-14-minutes/)
-   [2017 JavaScript Rising Stars](https://risingstars.js.org/2017/en/)
-   [ES6 features](https://github.com/lukehoban/es6features)
-   [The Definitive Guide to Object-Oriented JavaScript](https://www.youtube.com/watch?v=PMfcsYzj-9M) — Amazing video to understand JS inheritance & objects.
-   [JavaScript: The Core](http://j//dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/)
-   [JavaScript is Good, Actually](https://ashfurrow.com/blog/javascript-is-good-actually/) ([HN](https://news.ycombinator.com/item?id=17079952))
-   [JavaScript Algorithms](https://github.com/trekhleb/javascript-algorithms) — Algorithms and data structures implemented in JavaScript with explanations and links to further readings.
-   [EC6 Features](http://es6-features.org/)
-   [Clean Code concepts adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
-   [Ask HN: “Expert Level” JavaScript questions?](https://news.ycombinator.com/item?id=17324538)
-   [Benefits of prototypal inheritance over classical?](https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical/16872315#16872315)
-   [Pax](https://github.com/nathan/pax) — Fastest JavaScript bundler in the galaxy.
-   [Philip Roberts: What the heck is the event loop anyway? (2014)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
-   [Jake Archibald: In The Loop (2018)](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
-   [Yonatan Kra — The Event Loop and your code (2020)](https://www.youtube.com/watch?v=Nqx3rtv_dko)
-   [BundlePhobia](https://bundlephobia.com/) — Find the cost of adding a npm package to your bundle. ([Code](https://github.com/pastelsky/bundlephobia)) ([Tweet](https://twitter.com/jsunderhood/status/1318204704988561409))
-   [An Overview of JavaScript Testing in 2018](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)
-   [Introduction to ES6 Promises — The Four Functions You Need To Avoid Callback Hell](http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/)
-   [Nice ES6/Promises/React cheat sheets](http://jamesknelson.com/thank-you-for-subscribing/)
-   [JavaScript Visualizer](https://tylermcginnis.com/javascript-visualizer/) — Tool for visualizing Execution Context, Hoisting, Closures, and Scopes in JavaScript.
-   [WallabyJS](https://wallabyjs.com/docs/) — Integrated continuous testing tool for JavaScript.
-   [ES6 features](http://es6-features.org/)
-   [The State of JavaScript — The State of the Web (2018)](https://www.youtube.com/watch?v=i5R7giitymk)
-   [A Quick Tour Of ES6 (Or, The Bits You’ll Actually Use)](http://jamesknelson.com/es6-the-bits-youll-actually-use/)
-   [JavaScript on the Desktop, Fast and Slow (2018)](https://medium.com/@felixrieseberg/javascript-on-the-desktop-fast-and-slow-2b744dfb8b55)
-   [ES6 for humans](https://github.com/metagrover/ES6-for-humans)
-   [33 concepts every JavaScript developer should know](https://github.com/leonardomso/33-js-concepts)
-   [Design Patterns JS](https://github.com/fbeline/Design-Patterns-JS) — All the 23 (GoF) design patterns implemented in JavaScript.
-   [Standard Library Proposal](https://github.com/tc39/proposal-javascript-standard-library)
-   [30 seconds of code](https://github.com/30-seconds/30-seconds-of-code) — Curated collection of useful JavaScript snippets that you can understand in 30 seconds or less.
-   [puppet-run](https://github.com/andywer/puppet-run) — Run anything JavaScript in a headless Chrome from your command line.
-   [Yalc](https://github.com/whitecolor/yalc) — Better workflow than npm | yarn link for package authors.
-   [ECMAScript proposals](https://github.com/tc39/proposals)
-   [FromJS](https://github.com/mattzeunert/fromjs) — See where each character on the screen came from in code.
-   [RunJS](https://projects.lukehaas.me/runjs/) — Scratchpad for your thoughts, a playground for your creativity.
-   [Pragmatic, balanced FP in JavaScript book](https://github.com/getify/Functional-Light-JS)
-   [Pack](https://github.com/pikapkg/pack) — Helps you build amazing packages without the hassle.
-   [Learning JavaScript (2016)](https://mafinto.sh/blog/learning-javascript.html)
-   <span class="citation" data-cites="pika/web">\[<span class="citation" data-cites="pika/web">@pika/web</span>\]</span>(https://github.com/pikapkg/web) — Install npm dependencies that run directly in the browser. No Browserify, Webpack or import maps required.
-   [Sucrase](https://github.com/alangpierce/sucrase) — Super-fast alternative to Babel for when you can target modern JS runtimes.
-   [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
-   [JavaScript Developer’s Reading List](https://github.com/twhite96/js-dev-reads) — List of hand-picked books and articles for JavaScript developers.
-   [Promisees](https://github.com/bevacqua/promisees) — Promise visualization playground for the adventurous.
-   [promise-fun](https://github.com/sindresorhus/promise-fun) — Promise packages, patterns, chat, and tutorials.
-   [Perflink](https://github.com/lukejacksonn/perflink) — JavaScript performance benchmarks that you can share via URL.
-   [Mostly adequate guide to FP (in JavaScript)](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/) ([Code](https://github.com/MostlyAdequate/mostly-adequate-guide)) ([HN](https://news.ycombinator.com/item?id=22654135))
-   [Volta](https://github.com/volta-cli/volta) — JavaScript Launcher.
-   [Modern JS Cheat Sheet](https://github.com/mbeaudru/modern-js-cheatsheet)
-   [Fastpack](https://fastpack.sh/) — Pack JavaScript fast & easy.
-   [Reference implementation for the JavaScript Binary AST format](https://github.com/binast/binjs-ref)
-   [Babel Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/README.md)
-   [List of (Advanced) JavaScript Questions](https://github.com/lydiahallie/javascript-questions)
-   [Faster script loading with BinaryAST? (2019)](https://blog.cloudflare.com/binary-ast/)
-   [recast](https://github.com/benjamn/recast) — JavaScript syntax tree transformer, nondestructive pretty-printer, and automatic source map generator.
-   [Madge](https://github.com/pahen/madge) — Create graphs from your CommonJS, AMD or ES6 module dependencies.
-   [npmfs](https://npmfs.com/) — JavaScript Package Inspector.
-   [Fantasy Land Specification](https://github.com/fantasyland/fantasy-land) — Specification for interoperability of common algebraic structures in JavaScript.
-   [Meriyah](https://github.com/meriyah/meriyah) — 100% compliant, self-hosted javascript parser with high focus on both performance and stability.
-   [The cost of JavaScript in 2019](https://news.ycombinator.com/item?id=20317736) ([HN](https://news.ycombinator.com/item?id=20317736))
-   [Poi](https://github.com/egoist/poi) — Zero-config bundler for JavaScript applications.
-   [Advanced JavaScript Course](https://tylermcginnis.com/courses/advanced-javascript)
-   [Jay](https://github.com/nikersify/jay) — Supercharged JavaScript REPL.
-   [Data Structures and Algorithms in JavaScript](https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript)
-   [JavaScript & Node.js Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
-   [Just](https://github.com/microsoft/just) — Library that organizes build tasks for your JS projects.
-   [ECMAScript (JS) specification](https://tc39.es/ecma262/) ([Code](https://github.com/tc39/ecma262)) ([Web version 2](https://read262.netlify.com/))
-   [André Staltz: Two Fundamental Abstractions — Uphill Conf 2018](https://www.youtube.com/watch?v=fdol03pcvMA)
-   [JSMonday](http://www.jsmonday.dev/) — Weekly JS inspiration.
-   [Chevrotain](https://github.com/SAP/chevrotain) — Parser Building Toolkit for JavaScript.
-   [Comprehensive list of new ES features](https://github.com/daumann/ECMAScript-new-features-list)
-   [Exploring JS: JavaScript books for programmers](https://exploringjs.com/)
-   [JavaScript for Impatient Programmers book](https://exploringjs.com/impatient-js/toc.html) ([HN](https://news.ycombinator.com/item?id=23689280))
-   [Exploring ES2018 and ES2019](https://exploringjs.com/es2018-es2019/toc.html)
-   [TC39 Meeting Notes](https://tc39.es/tc39-notes/)
-   [Mesh Spreadsheet](https://github.com/chrispsn/mesh/) — Visualise data and edit JavaScript code using a spreadsheet interface. ([Web](http://mesh-spreadsheet.com/))
-   [Immutable JavaScript Data Structures with Immer (2019)](https://egghead.io/courses/immutable-javascript-data-structures-with-immer)
-   [Immutability is Changing — From Immutable.js to Immer (2019)](https://www.youtube.com/watch?v=bFuRvcAEiHg)
-   [Tenko](https://github.com/pvdz/tenko) — 100% spec compliant ES2020 JavaScript parser written in JS.
-   [code-red](https://github.com/Rich-Harris/code-red) — Experimental toolkit for writing x-to-JavaScript compilers.
-   [Reduce in JavaScript (2019)](https://yuanchuan.dev/2019/03/04/the-reduce-function.html)
-   [Pika](https://www.pika.dev/registry) — New kind of package registry for the modern web.
-   [Brian Holt: Futurist Code Bases: Integrating JS of the Future Today (2019)](https://www.youtube.com/watch?v=lQOWTXanWwU)
-   [JS TLDR](https://js-tldr.info/) — Zen mode web-documentation. ([Code](https://github.com/RusinovAnton/js-tldr)) ([Article](https://medium.com/@rusinovantondev/js-tl-dr-zen-mode-web-docs-for-javascript-developers-cf45e0143a09))
-   [Currying Functions in ES6 (2016)](https://sunjay.dev/2016/08/13/es6-currying)
-   [Manipulating AST with JavaScript (2019)](https://lihautan.com/manipulating-ast-with-javascript/)
-   [Is JavaScript Statically or Dynamically Scoped? (2018)](https://www.cs.cornell.edu/~asampson/blog/scope.html)
-   [Fixed-point combinators in JavaScript: Memoizing recursive functions](http://matt.might.net/articles/implementation-of-recursive-fixed-point-y-combinator-in-javascript-for-memoization/)
-   [runpkg](https://github.com/FormidableLabs/runpkg) — Lets you navigate any JavaScript package on npm thanks to unpkg.com.
-   [What is this in JavaScript?](https://www.madebymike.com.au/writing/this-in-javascript/)
-   [Beginner JavaScript course](https://beginnerjavascript.com/)
-   [ES6 Cheat Sheet](https://github.com/DrkSephy/es6-cheatsheet)
-   [JavaScript Visualized: Event Loop (2019)](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
-   [JavaScript Visualized: Scope (Chain) (2019)](https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd)
-   [JavaScript Visualized: Hoisting (2019)](https://dev.to/lydiahallie/javascript-visualized-hoisting-478h)
-   [Fuzzilli](https://github.com/googleprojectzero/fuzzilli) — JavaScript Engine Fuzzer.
-   [Deep JavaScript: Theory and techniques (2019)](https://exploringjs.com/deep-js/) ([HN](https://news.ycombinator.com/item?id=23552180))
-   [JavaScript Adaption of Structure and Interpretation of Computer Programs](https://sicp.comp.nus.edu.sg/) ([HN](https://news.ycombinator.com/item?id=21822903)) ([Code](https://github.com/source-academy/sicp))
-   [State of JS 2019](https://2019.stateofjs.com/) ([HN](https://news.ycombinator.com/item?id=21831747))
-   [Cancelation without Breaking a Promise (2016)](https://medium.com/hackernoon/considering-cancelation-a96e0f3c2298) — Reflecting on what was so tricky about cancelable Promises, embracing functional purity as a solution.
-   [ECMAScript Discussion Archives](https://esdiscuss.org/) ([Code](https://github.com/esdiscuss/esdiscuss.org))
-   [What Is JavaScript Made Of? (2019)](https://overreacted.io/what-is-javascript-made-of/)
-   [JavaScript Visualized: Prototypal Inheritance (2020)](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)
-   [Y: The Most Beautiful Idea in Computer Science explained in JavaScript (2018)](https://lucasfcosta.com/2018/05/20/Y-The-Most-Beautiful-Idea-in-Computer-Science.html)
-   [2019 JavaScript Rising Stars](https://risingstars.js.org/2019/en/) ([Code](https://github.com/bestofjs/javascript-risingstars))
-   [Best of JS](https://bestofjs.org/) — Best of JavaScript, HTML and CSS. ([Code](https://github.com/bestofjs/bestofjs-webui)) ([Web Timeline](https://bestofjs.org/timeline)) ([HN](https://news.ycombinator.com/item?id=24142462))
-   [omggif](https://github.com/deanm/omggif) — JavaScript implementation of a GIF 89a encoder and decoder.
-   [Sampling bias, FDR, and The State of JS (2020)](https://davidea.st/articles/sampling-bias-fdr-state-of-js)
-   [JavaScript Visualized: Generators and Iterators (2020)](https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36)
-   [jsep](https://github.com/soney/jsep) — JavaScript Expression Parser.
-   [JS Tips & Tidbits](https://github.com/nas5w/javascript-tips-and-tidbits)
-   [I have been underestimating JS (2020)](https://adlrocha.substack.com/p/adlrocha-i-have-been-underestimating) — Understanding V8 and NodeJS Steams.
-   [Taming the asynchronous beast with CSP channels in JavaScript (2014)](https://jlongster.com/Taming-the-Asynchronous-Beast-with-CSP-in-JavaScript)
-   [Debounce vs Throttle: Definitive Visual Guide (2019)](https://redd.one/blog/debounce-vs-throttle)
-   [GistLink](https://gist.link/) — Code apps or components. See them render as you type. Share your creations via URL.
-   [source-map-explorer](https://github.com/danvk/source-map-explorer) — Analyze and debug space usage through source maps.
-   [Diglett](https://github.com/oblador/diglett) — Keep your JS project lean by detecting duplicate dependencies.
-   [Learn Vanilla JS Roadmap](https://learnvanillajs.com/roadmap/)
-   [Learn JavaScript](https://learnjavascript.online/) — Easiest way to learn & practice modern JavaScript step by step.
-   [Mini projects built with HTML5, CSS & JavaScript. No frameworks or libraries](https://github.com/bradtraversy/vanillawebprojects) ([HN](https://news.ycombinator.com/item?id=22231963))
-   [IxJS](https://github.com/ReactiveX/IxJS) — Interactive Extensions for JavaScript.
-   [Renovate](https://github.com/renovatebot/renovate) — Universal dependency update tool that fits into your workflows.
-   [The ECMAScript Ecosystem (2020)](https://dev.to/laurieontech/the-ecmascript-ecosystem-2e13)
-   [esbuild](https://github.com/evanw/esbuild/) — Extremely fast JavaScript bundler and minifier written in Go. ([HN](https://news.ycombinator.com/item?id=22335707)) ([Architecture](https://github.com/evanw/esbuild/blob/master/docs/architecture.md)) ([serverless-esbuild](https://github.com/floydspace/serverless-esbuild)) ([Awesome](https://github.com/egoist/awesome-esbuild)) ([Web](https://esbuild.github.io/)) ([Esbuild plugins](https://github.com/remorses/esbuild-plugins))
-   [Community plugins for esbuild](https://github.com/esbuild/community-plugins)
-   [Why Is Esbuild Fast?](https://esbuild.github.io/faq/#why-is-esbuild-fast) ([HN](https://news.ycombinator.com/item?id=26154509))
-   [bundless](https://github.com/remorses/bundless) — Dev server and bundler for esbuild. ([Web](https://bundless.vercel.app/))
-   [esbuild-register](https://github.com/egoist/esbuild-register) — Transpile JSX, TypeScript and esnext features on the fly with esbuild.
-   [JavaScript: Understanding the Weird Parts course (2015)](https://www.udemy.com/course/understand-javascript/)
-   [Fastpack](https://github.com/fastpack/fastpack) — Pack JS code into a single bundle fast & easy.
-   [guijs](https://github.com/Akryum/guijs) — App that helps you manage JS projects with a Graphical User Interface.
-   [Rome Toolchain](https://github.com/rome/tools) — Linter, compiler, bundler, and more for JavaScript, TypeScript, HTML, Markdown, and CSS. ([Web](https://rome.tools/)) ([HN](https://news.ycombinator.com/item?id=22430682)) ([HN 2](https://news.ycombinator.com/item?id=24094377)) ([HN 3](https://news.ycombinator.com/item?id=24882413))
-   [Bolt](https://github.com/boltpkg/bolt) — Super-powered JavaScript project management.
-   [tiny-js](https://github.com/gfwilliams/tiny-js) — Aims to be an extremely simple (~2000 line) JavaScript interpreter.
-   [JavaScript and TypeScript tooling overview](https://github.com/slikts/tooling)
-   [Seafox](https://github.com/KFlash/seafox) — Blazing fast 100% spec compliant, self-hosted javascript parser written in Typescript.
-   [Awesome JavaScript Learning](https://github.com/micromata/awesome-javascript-learning)
-   [Awesome Promises](https://github.com/wbinnssmith/awesome-promises)
-   [jscodeshift](https://github.com/facebook/jscodeshift) — Toolkit for running codemods over multiple JavaScript or TypeScript files.
-   [React Workout: Reducers with Cassidy Williams (2020)](https://www.youtube.com/watch?v=sf4spiPynBE)
-   [JavaScript: The First 20 Years (2020)](http://www.wirfs-brock.com/allen/posts/866)
-   [Awesome Storybook](https://github.com/lauthieb/awesome-storybook)
-   [QuickJS](https://github.com/bellard/quickjs) — Small and embeddable Javascript engine. ([Web](https://bellard.org/quickjs/)) ([HN](https://news.ycombinator.com/item?id=24867103))
-   [Test262: Official ECMAScript Conformance Test Suite](https://github.com/tc39/test262)
-   [Hegel](https://github.com/JSMonk/hegel) — Advanced static type checker. ([Web](https://hegel.js.org/)) ([Intro to Hegel](https://blog.logrocket.com/introduction-to-hegel/))
-   [NectarJS](https://github.com/NectarJS/nectarjs) — JS God mode. No VM. No Bytecode. No Garbage Collector. Full Compiled and Native binaries.
-   [Eloquent JavaScript book (2018)](https://eloquentjavascript.net/) ([HN](https://news.ycombinator.com/item?id=22990926))
-   [JS.coach](https://js.coach/) — Manually curated list of packages related to React, Vue, Webpack, Babel and PostCSS. ([Code](https://github.com/jscoach/client))
-   [How to create a reactive state-based UI component with vanilla JS Proxies (2020)](https://gomakethings.com/how-to-create-a-reactive-state-based-ui-component-with-vanilla-js-proxies/)
-   [Kite Autocomplete for JavaScript](https://www.kite.com/javascript/) ([Article](https://www.kite.com/blog/product/kite-launches-ai-powered-javascript-completions/))
-   [Excalidraw: Cool JS Tricks Behind the Scenes — Christopher Chedeau (2020)](https://www.youtube.com/watch?v=fix2-SynPGE)
-   [Cleaner async JavaScript code without the try/catch mess (2020)](https://davidwells.io/blog/cleaner-async-await-code-without-try-catch)
-   [Shifty](https://github.com/jeremyckahn/shifty) — Tweening engine for JavaScript. It is a lightweight library meant to be encapsulated by higher level tools.
-   [jspm](https://github.com/jspm/jspm-cli) — Package management CLI.
-   [JS Bits](https://github.com/vasanthk/js-bits) — JavaScript concepts explained with code.
-   [Binary-parser](https://github.com/keichi/binary-parser) — Parser builder for JavaScript that enables you to write efficient binary parsers in a simple and declarative manner.
-   [estrella](https://github.com/rsms/estrella) — Light-weight runner for the esbuild compiler.
-   [jsparagus](https://github.com/mozilla-spidermonkey/jsparagus) — JavaScript parser written in Rust.
-   [Callbag](https://github.com/callbag/callbag) — Standard for JS callbacks that enables lightweight observables and iterables. ([Wiki](https://github.com/callbag/callbag/wiki))
-   [JavaScript Standard Style](https://standardjs.com/) — JavaScript style guide, linter, and formatter. ([Code](https://github.com/standard/standard))
-   [Boa](https://github.com/boa-dev/boa) — Experimental Javascript lexer, parser and compiler written in Rust.
-   [Understanding JavaScript Execution Context like never before (2020)](https://blog.greenroots.info/understanding-javascript-execution-context-like-never-before-ckb8x246k00f56hs1nefzpysq)
-   [Causes of Memory Leaks in JavaScript and How to Avoid Them (2020)](https://www.ditdot.hr/en/causes-of-memory-leaks-in-javascript-and-how-to-avoid-them) ([Lobsters](https://lobste.rs/s/ar5avz/causes_memory_leaks_javascript_how_avoid))
-   [UI.dev](https://ui.dev/) — Master the JavaScript Ecosystem.
-   [Do Not Follow JavaScript Trends (2020)](https://pragmaticpineapple.com/do-not-follow-javascript-trends/) ([Lobsters](https://lobste.rs/s/wb3ma8/do_not_follow_javascript_trends)) ([HN](https://news.ycombinator.com/item?id=23538473))
-   [Some things that can be avoided in JS for clearer code (2020)](https://twitter.com/buildsghost/status/1274042818219044864)
-   [JS fundamentals and resources to learn them (2020)](https://twitter.com/Madisonkanna/status/1274424134139666432)
-   [A little bit of plain JavaScript can do a lot (2020)](https://jvns.ca/blog/2020/06/19/a-little-bit-of-plain-javascript-can-do-a-lot/) ([Lobsters](https://lobste.rs/s/6umqjn/little_bit_plain_javascript_can_do_lot)) ([HN](https://news.ycombinator.com/item?id=23578319))
-   [Memoization: What, Why, and How (2020)](https://kyleshevlin.com/memoization)
-   [An Open Source Maintainer’s Guide to Publishing npm Packages (2020)](https://formidable.com/blog/2020/publish-npm-packages/)
-   [Robust Client-Side JavaScript (2020)](https://molily.de/robust-javascript/) ([HN](https://news.ycombinator.com/item?id=23612184))
-   [Visualization of npm dependencies](https://npm.anvaka.com/#!/)
-   [How to Learn JavaScript](https://sivers.org/learn-js) ([HN](https://news.ycombinator.com/item?id=23659531))
-   [Google Closure Compiler](https://github.com/google/closure-compiler) — Tool for making JavaScript download and run faster.
-   [JSConf](https://jsconf.com/) — Conferences for the JavaScript Community.
-   [The history of Promises](https://samsaccone.com/posts/history-of-promises.html)
-   [Skypack](https://www.skypack.dev/) — New kind of JavaScript delivery network. ([HN](https://news.ycombinator.com/item?id=23825798)) ([Introducing Skypack Discover](https://www.skypack.dev/blog/2020/10/introducing-skypack-discover/)) ([Docs](https://docs.skypack.dev/))
-   [Openbase](https://openbase.io/) — Help developers choose the right JS package for any task — through user reviews and insights about packages’ popularity, reliability, activity and more. ([HN](https://news.ycombinator.com/item?id=23833441))
-   [Basho](https://github.com/bashojs/basho) — Shell Automation with Plain JavaScript. ([Docs](https://bashojs.org/))
-   [What is the JS Event Loop and Call Stack?](https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0)
-   [Starving the Event Loop with microtasks](https://gist.github.com/jesstelford/bbb30b983bddaa6e5fef2eb867d37678)
-   [GPU.js](https://gpu.rocks/#/) — GPU accelerated JavaScript. ([HN](https://news.ycombinator.com/item?id=24027487))
-   [The JavaScript Promise Tutorial (2020)](https://adrianmejia.com/promises-tutorial-concurrency-in-javascript-node/)
-   [Underrated JS array methods (2020)](https://dev.to/assuncaocharles/underrated-array-methods-2mdj)
-   [Javascript Generators, Meet XPath (2020)](https://jack.wrenn.fyi/blog/xpath-for-2020/) ([Lobsters](https://lobste.rs/s/5fsljg/javascript_generators_meet_xpath))
-   [goja](https://github.com/dop251/goja) — ECMAScript 5.1(+) implementation in Go.
-   [Guide to unit testing in JavaScript](https://github.com/mawrkus/js-unit-testing-guide)
-   [How I wrote the fastest JavaScript memoization library (2017)](https://community.risingstack.com/the-worlds-fastest-javascript-memoization-library/)
-   [JavaScript Playgrounds](https://unpkg.com/javascript-playgrounds@%5E1.0.0/public/index.html) — Interactive JavaScript sandbox. ([Code](https://github.com/dabbott/javascript-playgrounds))
-   [Speakeasy JS](https://speakeasyjs.com/) — Weekly JavaScript meetup.
-   [Elsa](https://github.com/elsaland/elsa) — Minimal, fast and secure QuickJS wrapper written in Go. ([HN](https://news.ycombinator.com/item?id=24626655))
-   [quickjs-rs](https://github.com/theduke/quickjs-rs) — Rust wrapper for QuickJS.
-   [RSLint](https://github.com/RDambrosio016/RSLint) — JavaScript linter written in Rust designed to be as fast as possible, customizable, and easy to use.
-   [Beginner’s Series to: JavaScript by Microsoft](https://www.youtube.com/playlist?list=PLlrxD0HtieHhW0NCG7M536uHGOtJ95Ut2) ([Code](https://github.com/microsoft/beginners-intro-javascript-node))
-   [Please stop using CDNs for external Javascript libraries (2020)](https://shkspr.mobi/blog/2020/10/please-stop-using-cdns-for-external-javascript-libraries/) ([Lobsters](https://lobste.rs/s/mpznhm/please_stop_using_cdns_for_external)) ([HN](https://news.ycombinator.com/item?id=24745194))
-   [ESM Hot Module Replacement (ESM-HMR) Spec](https://github.com/pikapkg/esm-hmr)
-   [esbuild-js](https://github.com/marvinhagemeister/esbuild-js) — es-build implemented in JS.
-   [Visual Guide to References in JavaScript (2020)](https://daveceddia.com/javascript-references/)
-   [Modern JavaScript features you may have missed (2019)](https://www.breck-mckye.com/blog/2019/10/modern-javascript-features-you-may-have-missed/)
-   [RegPack](https://github.com/Siorki/RegPack) — Self-contained packer for size-constrained JS code.
-   [ElectronJS alternative: SciterJS — HTML/CSS/JS in 4.5 MB executable](https://github.com/c-smile/sciter-js-sdk) ([HN](https://news.ycombinator.com/item?id=24797423))
-   [ESTree Spec](https://github.com/estree/estree) — Manipulate JavaScript source code.
-   [Pattern Matching in JavaScript (2020)](https://kyleshevlin.com/pattern-matching)
-   [How to chain methods in JS in order to write concise and readable code (2020)](https://medium.com/@laflamablanc/method-chaining-and-javascript-7d840d6e3687)
-   [npmview](https://npmview.now.sh/) — Web application to view npm package files. ([Code](https://github.com/pd4d10/npmview))
-   [Metadata Reflection API for JS](https://github.com/rbuckton/reflect-metadata)
-   [SurviveJS](https://survivejs.com/) — Learn JavaScript. From apprentice to master.
-   [Composing Closures and Callbacks in JavaScript (2020)](https://egghead.io/playlists/composing-closures-and-callbacks-in-javascript-1223)
-   [CJS Module Lexer](https://github.com/guybedford/cjs-module-lexer) — Fast lexer to extract named exports via analysis from CommonJS modules.
-   [JavaScript minification (2019)](http://neugierig.org/software/blog/2019/04/js-minifiers.html)
-   [export-size](https://github.com/antfu/export-size) — Analysis bundle cost for each export of an ESM package.
-   [ESM](https://github.com/postui/esm.sh) — Fast, global content delivery network ES Modules.
-   [Benny](https://github.com/caderek/benny) — Dead simple benchmarking framework for JS/TS libs.
-   [Functional Programming in JS — Composition (Currying, Lodash and Ramda) (2020)](https://11sigma.com/blog/functional-programming-in-js-part-i-composition)
-   [Understanding Modules, Import and Export in JavaScript (2020)](https://www.taniarascia.com/javascript-modules-import-export/)
-   [Intent to stop using ‘null’ in my JS code](https://github.com/sindresorhus/meta/issues/7) ([HN](https://news.ycombinator.com/item?id=24956156))
-   [What Makes JavaScript JavaScript? Prototypal Inheritance (2020)](https://dmitripavlutin.com/javascript-prototypal-inheritance/)
-   [ni](https://github.com/antfu/ni) — Use the right package manager. Detect whether to use npm/yarn/pnpm.
-   [Making a modern JS library in 2020](https://pitayan.com/posts/modernest-lib-hello-world/)
-   [JavaScript Interview Questions & Answers](https://github.com/sudheerj/javascript-interview-questions)
-   [JS Operator Lookup](https://joshwcomeau.com/operator-lookup/) — Search JavaScript Operators.
-   [The state of JavaScript at the end of 2020](https://www.ideamotive.co/javascript-business-guide) ([HN](https://news.ycombinator.com/item?id=25046293))
-   [What the fuck JavaScript](https://github.com/denysdovhan/wtfjs) — List of funny and tricky JavaScript examples.
-   [1loc](https://1loc.dev/) — JavaScript Utilities in 1 LOC.
-   [Component Driven User Interfaces](https://www.componentdriven.org/) — Open standard for UI component examples based on JavaScript ES6 modules. ([Code](https://github.com/ComponentDriven/csf))
-   [JavaScript Modern Interview Code Challenges](https://github.com/sadanandpai/javascript-code-challenges)
-   [Building a Promise from Scratch (2020)](https://www.youtube.com/watch?v=CVzx-6fu0d8)
-   ​[Tips and tricks for working with types in JavaScript](https://github.com/voxpelli/types-in-js)​
-   ​[Astring](https://github.com/davidbonnet/astring) — Tiny and fast JavaScript code generator from an ESTree-compliant AST.
-   ​[EStimator.dev](https://estimator.dev/) — Calculate the size and performance impact of switching to modern JavaScript syntax. ([Code](https://github.com/GoogleChromeLabs/estimator.dev))
-   ​[Publish, ship, and install modern JavaScript for faster applications (2020)](https://web.dev/publish-modern-javascript/)​
-   ​[Universal JavaScript Build and Packaging](https://github.com/mikeal/ipjs)​
-   ​[Maybe you don’t need Rust and WASM to speed up your JS (2018)](https://mrale.ph/blog/2018/02/03/maybe-you-dont-need-rust-to-speed-up-your-js.html)​
-   ​[lage](https://github.com/microsoft/lage) — Task runner in JS monorepos. ([Web](https://microsoft.github.io/lage/))
-   ​[Module Server](https://github.com/google/module-server) — System for efficient serving of CommonJS modules to web browsers.
-   ​[How JavaScript works: exceptions + best practices for synchronous and asynchronous code (2021)](https://blog.sessionstack.com/how-javascript-works-exceptions-best-practices-for-synchronous-and-asynchronous-environments-39f66b59f012)​
-   ​[Source Map Visualization](http://evanw.github.io/source-map-visualization/) — Visualization of JavaScript source map data, which is useful for debugging problems with generated source maps. ([Code](https://github.com/evanw/source-map-visualization))
-   ​[Manypkg](https://github.com/Thinkmill/manypkg) — Linter for package.json files in Yarn, Bolt or pnpm monorepos.
-   ​[Putout](https://github.com/coderaiser/putout) — Pluggable and configurable code transformer with built-in eslint, babel plugins and jscodeshift codemods support. ([Editor](https://putout.cloudcmd.io/))
-   ​[Prettier Plugin: Organize Imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)​
-   ​[A mostly complete guide to error handling in JavaScript (2020)](https://www.valentinog.com/blog/error/)​
-   ​[Awesome FP JS](https://github.com/stoeffel/awesome-fp-js)​
-   ​[Perflink](https://perf.link/) — JS Benchmarks.
-   ​[Element Worklet (2021)](https://jasonformat.com/element-worklet/)​
-   [MDN JS Code Examples](https://github.com/mdn/js-examples)​
-   ​[Understanding Hoisting in JavaScript (2021)](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)​
-   ​[JavaScript, the Good Parts Notes](https://github.com/ahmaazouzi/js_good_parts)​
-   ​[A Model for Reasoning About JavaScript Promises (2017)](http://www.franktip.org/pubs/oopsla2017promises.pdf)​
-   ​[JavaScript Minification Benchmarks](https://github.com/privatenumber/minification-benchmarks) ([HN](https://news.ycombinator.com/item?id=26048291))
-   ​[Faster JavaScript Calls (2021)](https://v8.dev/blog/adaptor-frame) ([HN](https://news.ycombinator.com/item?id=26143648))
-   ​[Streams — The definitive guide (2021)](https://web.dev/streams/)​
-   ​[Awesome JavaScript](https://github.com/sorrycc/awesome-javascript)​

If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a><a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

Or checkout my personal resource Site:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

#### Every extension or tool you could possibly need

![](https://cdn-images-1.medium.com/max/1200/1*gcp0kkiWQY6qd1Y4qEcqxw.png)

### Here’s a rudimentary static site I made that goes into more detail on the extensions I use…

[https://5fff5b9a2430bb564bfd451d–stoic-mccarthy-2c335f.netlify.app/\#h18](https://5fff5b9a2430bb564bfd451d--stoic-mccarthy-2c335f.netlify.app/#h18)

### Here’s the repo it was deployed from:

<a href="https://github.com/bgoonz/vscode-Extension-readmes" class="uri">https://github.com/bgoonz/vscode-Extension-readmes</a>

---

### Commands:

> Command Palette

> Access all available commands based on your current context.

> Keyboard Shortcut: **Ctrl+Shift+P**

![](https://cdn-images-1.medium.com/max/800/0*BByhnDoVQdRPdO4F.gif)

### Command palette

`⇧⌘P`Show all commands`⌘P`Show files

### Sidebars

`⌘B`Toggle sidebar`⇧⌘E`Explorer`⇧⌘F`Search`⇧⌘D`Debug`⇧⌘X`Extensions`⇧^G`Git (SCM)

### Search

`⌘F`Find`⌥⌘F`Replace`⇧⌘F`Find in files`⇧⌘H`Replace in files

### Panel

`⌘J`Toggle panel`⇧⌘M`Problems`⇧⌘U`Output`⇧⌘Y`Debug console`` ^` ``Terminal

### View

`⌘k` `z`Zen mode`⌘k` `u`Close unmodified`⌘k` `w`Close all

### Debug

`F5`Start`⇧F5`Stop`⇧⌘F5`Restart`^F5`Start without debugging`F9`Toggle breakpoint`F10`Step over`F11`Step into`⇧F11`Step out`⇧⌘D`Debug sidebar`⇧⌘Y`Debug panel

![](https://cdn-images-1.medium.com/max/1200/0*llpkl5jsIMhWMucR.png)

---

### Tips-N-Tricks:

Here is a selection of common features for editing code. If the keyboard shortcuts aren’t comfortable for you, consider installing a [keymap extension](https://marketplace.visualstudio.com/search?target=VSCode&category=Keymaps&sortBy=Downloads) for your old editor.

Tip: You can see recommended keymap extensions in the Extensions view with Ctrl+K Ctrl+M which filters the search to `@recommended:keymaps`.

### Multi cursor selection

To add cursors at arbitrary positions, select a position with your mouse and use Alt+Click (Option+click on macOS).

To set cursors above or below the current position use:

Keyboard Shortcut: Ctrl+Alt+Up or Ctrl+Alt+Down

![](https://cdn-images-1.medium.com/max/800/0*Le_oEOiYnEBmFfig.gif)

You can add additional cursors to all occurrences of the current selection with Ctrl+Shift+L.

![](https://cdn-images-1.medium.com/max/800/0*WcrfwIln6NIG3zNW.gif)

> _Note: You can also change the modifier to Ctrl/Cmd for applying multiple cursors with the_ `_editor.multiCursorModifier_` [_setting_](https://code.visualstudio.com/docs/getstarted/settings) _. See_ [_Multi-cursor Modifier_](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier) _for details._

If you do not want to add all occurrences of the current selection, you can use Ctrl+D instead. This only selects the next occurrence after the one you selected so you can add selections one by one.

![](https://cdn-images-1.medium.com/max/800/0*09EveaKtpZEKFEpO.gif)

### Column (box) selection

You can select blocks of text by holding Shift+Alt (Shift+Option on macOS) while you drag your mouse. A separate cursor will be added to the end of each selected line.

![](https://cdn-images-1.medium.com/max/800/0*LrsOBXP4MVqr7aes.gif)

You can also use [keyboard shortcuts](https://code.visualstudio.com/docs/editor/codebasics#_column-box-selection) to trigger column selection.

---

### Extensions:

#### [AutoHotkey Plus](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-autohotkey-plus)

> _Syntax Highlighting, Snippets, Go to Definition, Signature helper and Code formatter_

### [Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug)

> _A debugger extension for Bash scripts based on_ `_bashdb_`

![](https://cdn-images-1.medium.com/max/800/0*8j2gGGs0WHcuFIwY.gif)

### [Shellman](https://marketplace.visualstudio.com/items?itemName=Remisa.shellman)

> _Bash script snippets extension_

![](https://cdn-images-1.medium.com/max/800/0*wyimtX27gWygAeOb.gif)

### C++

> [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) — Preview C/C++ extension by [Microsoft](https://www.microsoft.com/), read [official blog post](https://blogs.msdn.microsoft.com/vcblog/2016/03/31/cc-extension-for-visual-studio-code/) for the details

> [Clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) — Provides C/C++ language IDE features for VS Code using clangd: code completion, compile errors and warnings, go-to-definition and cross references, include management, code formatting, simple refactorings.

> [gnu-global-tags](https://marketplace.visualstudio.com/items?itemName=austin.code-gnu-global) — Provide Intellisense for C/C++ with the help of the GNU Global tool.

> [YouCompleteMe](https://marketplace.visualstudio.com/items?itemName=RichardHe.you-complete-me) — Provides semantic completions for C/C++ (and TypeScript, JavaScript, Objective-C, Golang, Rust) using [YouCompleteMe](http://ycm-core.github.io/YouCompleteMe/).

> [C/C++ Clang Command Adapter](https://github.com/mitaki28/vscode-clang) — Completion and Diagnostic for C/C++/Objective-C using Clang command.

> [CQuery](https://github.com/cquery-project/vscode-cquery) — [C/C++ language server](https://github.com/jacobdufault/cquery) supporting multi-million line code base, powered by libclang. Cross references, completion, diagnostics, semantic highlighting and more.

#### More

-   [Microsoft’s tutorial on using VSCode for remote C/C++ development](https://devblogs.microsoft.com/cppblog/vscode-cpp-may-2019-update/)

### C\#, ASP .NET and .NET Core

> [C\#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) — C\# extension by [Microsoft](https://www.microsoft.com/), read [official documentation](https://code.visualstudio.com/docs/languages/csharp) for the details

> [C\# FixFormat](https://marketplace.visualstudio.com/items?itemName=Leopotam.csharpfixformat) — Fix format of usings / indents / braces / empty lines

> [C\# Extensions](https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions) — Provides extensions to the IDE that will speed up your development workflow.

> [MSBuild Project Tools](https://marketplace.visualstudio.com/items?itemName=tintoy.msbuild-project-tools)

> [VSCode Solution Explorer](https://marketplace.visualstudio.com/items?itemName=fernandoescolar.vscode-solution-explorer)

> [.NET Core Test Explorer](https://marketplace.visualstudio.com/items?itemName=formulahendry.dotnet-test-explorer)

![](https://cdn-images-1.medium.com/max/800/0*ZG5W4_VVBv89zO_g.gif)

---

### CSS

### [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)

> _Peek or Jump to a CSS definition directly from HTML, just like in Brackets!_

![](https://cdn-images-1.medium.com/max/800/0*MN4pNqxDw4FyRk8g.gif)

-   [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) — Lint CSS/SCSS.
-   [Autoprefixer](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer) Parse CSS,SCSS, LESS and add vendor prefixes automatically.

![](https://cdn-images-1.medium.com/max/800/0*edXaUlo7z9TRDQnC.gif)

-   [Intellisense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) — Provides CSS class name completion for the HTML class attribute based on the CSS files in your workspace. Also supports React’s className attribute.

![](https://cdn-images-1.medium.com/max/800/0*AHJJrCMfkLWLHLH4.gif)

### Groovy

-   [VsCode Groovy Lint](https://marketplace.visualstudio.com/items?itemName=NicolasVuillamy.vscode-groovy-lint) — Groovy lint, format, prettify and auto-fix

![](https://cdn-images-1.medium.com/max/800/0*jmi5_-erJj7WOMq7.gif)

### Haskell

-   [haskell-linter](https://marketplace.visualstudio.com/items?itemName=hoovercj.haskell-linter)
-   [Haskell IDE engine](https://marketplace.visualstudio.com/items?itemName=alanz.vscode-hie-server) — provides [language server](https://github.com/haskell/haskell-ide-engine) for stack and cabal projects.
-   [autocomplate-shell](https://marketplace.visualstudio.com/items?itemName=truman.autocomplate-shell)

---

### Java

-   [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
-   [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
-   [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
-   [Lombok](https://marketplace.visualstudio.com/items?itemName=GabrielBB.vscode-lombok)

---

### JavaScript

-   [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
-   [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) — This extension provides AI-assisted development features including autocomplete and other insights based on understanding your code context.

![](https://cdn-images-1.medium.com/max/800/0*i7CZbSbHqsWqEM4w.gif)

See the difference between these two [here](https://github.com/michaelgmcd/vscode-language-babel/issues/1)

> [tslint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) — TSLint for Visual Studio Code (with `"tslint.jsEnable": true`).

> [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) — Linter for [eslint](https://eslint.org/).

> [XO](https://marketplace.visualstudio.com/items?itemName=samverschueren.linter-xo) — Linter for [XO](https://github.com/xojs/xo).

> [AVA](https://marketplace.visualstudio.com/items?itemName=samverschueren.ava) — Snippets for [AVA](https://github.com/avajs/ava).

> [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — Linter, Formatter and Pretty printer for [Prettier](https://github.com/prettier/prettier-vscode).

> [Schema.org Snippets](https://marketplace.visualstudio.com/items?itemName=austinleegordon.vscode-schema-dot-org) — Snippets for [Schema.org](https://schema.org/).

> [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) — Spelling Checker for Visual Studio Code.

Framework-specific:

#### [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) — Toolkit for Vue.js

![](https://cdn-images-1.medium.com/max/800/0*F7J_vW0ISbVMTXIZ.png)

---

### [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

> _A VS Code extension to debug your JavaScript code in the Chrome browser, or other targets that support the Chrome Debugging Protocol._

### Facebook Flow

-   [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) — provides all the functionality you would expect — linting, intellisense, type tooltips and click-to-definition
-   [vscode-flow-ide](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) — an alternative Flowtype extension for Visual Studio Code

### TypeScript

-   [tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) — TSLint for Visual Studio Code
-   [TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero) — Code outline view of your open TS, sort and organize your imports.

---

### Markdown

### [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

> _Linter for_ [_markdownlint_](https://github.com/DavidAnson/markdownlint)_._

### [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

> _All-in-one markdown plugin (keyboard shortcuts, table of contents, auto preview, list editing and more)_

![](https://cdn-images-1.medium.com/max/800/0*8oVrYuZ9kLRNSuBs.gif)

### [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji)

> _Adds emoji syntax support to VS Code’s built-in Markdown preview_

![](https://cdn-images-1.medium.com/max/800/0*rckUMIIZ9Jh7UE5q.png)

---

### PHP

### IntelliSense

These extensions provide slightly different sets of features. While the first one offers better autocompletion support, the second one seems to have more features overall.

-   [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
-   [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)

### Laravel

-   [Laravel 5 Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel5-snippets) — Laravel 5 snippets for Visual Studio Code
-   [Laravel Blade Snippets](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade) — Laravel blade snippets and syntax highlight support

![](https://cdn-images-1.medium.com/max/800/0*f4hMFe1l7NpJTG8v.gif)

-   [Laravel Model Snippets](https://marketplace.visualstudio.com/items?itemName=ahinkle.laravel-model-snippets) — Quickly get models up and running with Laravel Model Snippets.

![](https://cdn-images-1.medium.com/max/800/0*1xydH2CgYGDSMZtB.gif)

-   [Laravel Artisan](https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan) — Laravel Artisan commands within Visual Studio Code

![](https://cdn-images-1.medium.com/max/800/0*rzK952c4UgikNNPR.gif)

-   [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) — Support for dotenv file syntax

![](https://cdn-images-1.medium.com/max/800/0*fSAaqpXfBx1Sgztf.png)

---

### Other extensions

-   [Format HTML in PHP](https://marketplace.visualstudio.com/items?itemName=rifi2k.format-html-in-php) — Formatting for the HTML in PHP files. Runs before the save action so you can still have a PHP formatter.

![](https://cdn-images-1.medium.com/max/800/0*6gF0K20iKes7I9ZF.gif)

-   [Composer](https://marketplace.visualstudio.com/items?itemName=ikappas.composer)
-   [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) — XDebug extension for Visual Studio Code
-   [PHP DocBlocker](https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker)
-   [php cs fixer](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer) — PHP CS Fixer extension for VS Code, php formatter, php code beautify tool
-   [phpcs](https://marketplace.visualstudio.com/items?itemName=ikappas.phpcs) — PHP CodeSniffer for Visual Studio Code
-   [phpfmt](https://marketplace.visualstudio.com/items?itemName=kokororin.vscode-phpfmt) — phpfmt for Visual Studio Code

---

### Python

-   [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) — Linting, Debugging (multi threaded, web apps), Intellisense, auto-completion, code formatting, snippets, unit testing, and more.

### TensorFlow

-   [TensorFlow Snippets](https://marketplace.visualstudio.com/items?itemName=vahidk.tensorflow-snippets) — This extension includes a set of useful code snippets for developing TensorFlow models in Visual Studio Code.

![](https://cdn-images-1.medium.com/max/800/0*stmhgQ3sGvJBTvf2.gif)

---

### Rust

-   [Rust](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust) — Linting, auto-completion, code formatting, snippets and more

---

### Productivity

### [ARM Template Viewer](https://marketplace.visualstudio.com/items?itemName=bencoleman.armview)

> _Displays a graphical preview of Azure Resource Manager (ARM) templates. The view will show all resources with the official Azure icons and also linkage between the resources._

![](https://cdn-images-1.medium.com/max/800/0*p8bvCI9DXF44m4z3.png)

### [Azure Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb)

> _Browse your database inside the vs code editor_

![](https://cdn-images-1.medium.com/max/800/0*VWvSU6Hbf20Kfc_P.gif)

### [Azure IoT Toolkit](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit)

> _Everything you need for the Azure IoT development: Interact with Azure IoT Hub, manage devices connected to Azure IoT Hub, and develop with code snippets for Azure IoT Hub_

![](https://cdn-images-1.medium.com/max/800/0*AobtCd80fICrbQPI.png)

### [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

> _Mark lines and jump to them_

### [Color Tabs](https://marketplace.visualstudio.com/items?itemName=orepor.color-tabs-vscode-ext)

> _An extension for big projects or monorepos that colors your tab/titlebar based on the current package_

![](https://cdn-images-1.medium.com/max/800/0*SEp-hgfDLlubNRyc.gif)

### [Create tests](https://marketplace.visualstudio.com/items?itemName=hardikmodha.create-tests)

> _An extension to quickly generate test files._

![](https://cdn-images-1.medium.com/max/800/0*DLZLYmrBiui0YOBt.gif)

### [Deploy](https://marketplace.visualstudio.com/items?itemName=mkloubert.vs-deploy)

> _Commands for upload or copy files of a workspace to a destination._

![](https://cdn-images-1.medium.com/max/800/0*lLasjzlmWnBwdbAT.gif)

### [Duplicate Action](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-duplicate)

> _Ability to duplicate files and directories._

### [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

> _Show language diagnostics inline (errors/warnings/…)._

![](https://cdn-images-1.medium.com/max/800/0*1tJJkV0p2Ka_W06r.gif)

### [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

> _Provides Javascript and React/Redux snippets in ES7_

![](https://cdn-images-1.medium.com/max/800/0*W3N0kbgEumWYa-m4.png)

### [Gi](https://marketplace.visualstudio.com/items?itemName=rubbersheep.gi)

> _Generating .gitignore files made easy_

![](https://cdn-images-1.medium.com/max/800/0*sfddghz8B1D362UB.gif)

### [GistPad](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs)

> _Allows you to manage GitHub Gists entirely within the editor. You can open, create, delete, fork, star and clone gists, and then seamlessly begin editing files as if they were local. It’s like your very own developer library for building and referencing code snippets, commonly used config/scripts, programming-related notes/documentation, and interactive samples._

![](https://cdn-images-1.medium.com/max/800/0*1MiBQ0u4Z8TPNaG9.gif)

### [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

> _View git log, file or line History_

### [Git Project Manager](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager)

> _Automatically indexes your git projects and lets you easily toggle between them_

### [GitLink](https://marketplace.visualstudio.com/items?itemName=qezhu.gitlink)

> _GoTo current file’s online link in browser and Copy the link in clipboard._

![](https://cdn-images-1.medium.com/max/800/0*Acgfn2rmhinuIPjk.gif)

### [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> _Provides Git CodeLens information (most recent commit, \# of authors), on-demand inline blame annotations, status bar blame information, file and blame history explorers, and commands to compare changes with the working tree or previous versions._

![](https://cdn-images-1.medium.com/max/800/0*MZu4GV7SOCW88UQQ.gif)

### [Git Indicators](https://marketplace.visualstudio.com/items?itemName=lamartire.git-indicators)

> _Atom-like git indicators on active panel_

![](https://cdn-images-1.medium.com/max/800/0*vitZrD9ZU0_eWckU.png)

![](https://cdn-images-1.medium.com/max/800/0*0BHxQOLMx09FFuWZ.png)

![](https://cdn-images-1.medium.com/max/800/0*x8F97F4AdSvvtehT.png)

### [GitHub](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-github)

> _Provides GitHub workflow support. For example browse project, issues, file (the current line), create and manage pull request. Support for other providers (e.g. gitlab or bitbucket) is planned. Have a look at the_ [_README.md_](https://github.com/KnisterPeter/vscode-github/blob/master/README.md) _on how to get started with the setup for this extension._

### [GitHub Pull Request Monitor](https://marketplace.visualstudio.com/items?itemName=erichbehrens.pull-request-monitor)

> _This extension uses the GitHub api to monitor the state of your pull requests and let you know when it’s time to merge or if someone requested changes._

![](https://cdn-images-1.medium.com/max/800/0*TOq5OERkgQNETGPK.png)

### [GitLab Workflow](https://marketplace.visualstudio.com/items?itemName=gitlab.gitlab-workflow)

> _Adds a GitLab sidebar icon to view issues, merge requests and other GitLab resources. You can also view the results of your GitLab CI/CD pipeline and check the syntax of your_ `_.gitlab-ci.yml_`_._

#### [Gradle Tasks](https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle)

> _Run gradle tasks in VS Code._

![](https://cdn-images-1.medium.com/max/800/0*Vx-3DIT22BJpEnJr.gif)

### [Icon Fonts](https://marketplace.visualstudio.com/items?itemName=idleberg.icon-fonts)

> _Snippets for popular icon fonts such as Font Awesome, Ionicons, Glyphicons, Octicons, Material Design Icons and many more!_

### [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

> _This extension will display inline in the editor the size of the imported package. The extension utilizes webpack with babili-webpack-plugin in order to detect the imported size._

### [Jira and Bitbucket](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode)

> _Bringing the power of Jira and Bitbucket to VS Code — With Atlassian for VS Code you can create and view issues, start work on issues, create pull requests, do code reviews, start builds, get build statuses and more!_

![](https://cdn-images-1.medium.com/max/800/0*T6iuH2VnPYj93YqW.gif)

### [JS Parameter Annotations](https://marketplace.visualstudio.com/items?itemName=lannonbr.vscode-js-annotations)

> _Provides annotations on function calls in JS/TS files to provide parameter names to arguments._

![](https://cdn-images-1.medium.com/max/800/0*zHffPsYWln4dxhus.png)

### [Jumpy](https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy)

> _Provides fast cursor movement, inspired by Atom’s package of the same name._

![](https://cdn-images-1.medium.com/max/800/0*uPOceUJ4eMjCP_Qt.gif)

### [Kanban](https://marketplace.visualstudio.com/items?itemName=mkloubert.vscode-kanban)

![](https://cdn-images-1.medium.com/max/800/0*SzUG3UU1fl5ub7bA.gif)

> _Simple Kanban board for use in Visual Studio Code, with time tracking and Markdown support._

### [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

> _Launch a development local Server with live reload feature for static & dynamic pages._

![](https://cdn-images-1.medium.com/max/800/0*Oj5zPrWwMbCBViBi.gif)

### [Multiple clipboards](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-multiclip)

> _Override the regular Copy and Cut commands to keep selections in a clipboard ring_

### [ngrok for VSCode](https://marketplace.visualstudio.com/items?itemName=philnash.ngrok-for-vscode)

> _ngrok allows you to expose a web server running on your local machine to the internet. Just tell ngrok what port your web server is listening on. This extension allows you to control_ [_ngrok_](https://ngrok.com/) _from the VSCode command palette_

![](https://cdn-images-1.medium.com/max/800/0*IX15MuJrEVBcTd0F.gif)

### [Instant Markdown](https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-instant-markdown)

> _Simply, edit markdown documents in vscode and instantly preview it in your browser as you type._

![](https://cdn-images-1.medium.com/max/800/0*jBw9vP9cAtvv2IcV.gif)

### [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

> _Visual Studio Code plugin that autocompletes npm modules in import statements._

![](https://cdn-images-1.medium.com/max/800/0*iVJamJugt_b7-VsV.gif)

### [Parameter Hints](https://marketplace.visualstudio.com/items?itemName=DominicVonk.parameter-hints)

> _Provides parameter hints on function calls in JS/TS/PHP files._

![](https://cdn-images-1.medium.com/max/800/0*BSj8-Qt7xtVTsl1Z.png)

### [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff)

> _Compare (diff) text selections within a file, across different files, or to the clipboard_

![](https://cdn-images-1.medium.com/max/800/0*KHki85jdv1hZeY3V.gif)

### [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

> _Infer the structure of JSON and paste is as types in many programming languages_

![](https://cdn-images-1.medium.com/max/800/0*K2GCRMGsYjpsK8OX.gif)

### [Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

> _Visual Studio Code plugin that autocompletes filenames_

![](https://cdn-images-1.medium.com/max/800/0*xwxU_1ffZvZ6DeoO.gif)

### [Power Tools](https://marketplace.visualstudio.com/items?itemName=ego-digital.vscode-powertools)

> _Extends Visual Studio Code via things like Node.js based scripts or shell commands, without writing separate extensions_

![](https://cdn-images-1.medium.com/max/800/0*Cb7J6-PYsXsnjqSN.gif)

### [PrintCode](https://marketplace.visualstudio.com/items?itemName=nobuhito.printcode)

> _PrintCode converts the code being edited into an HTML file, displays it by browser and prints it._

![](https://cdn-images-1.medium.com/max/800/0*2spvNSEEHM-ETd_F.gif)

### [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

> _Easily switch between projects._

### [Project Dashboard](https://marketplace.visualstudio.com/items?itemName=kruemelkatze.vscode-dashboard)

> _VSCode Project Dashboard is a Visual Studio Code extension that lets you organize your projects in a speed-dial like manner. Pin your frequently visited folders, files, and SSH remotes onto a dashboard to access them quickly._

![](https://cdn-images-1.medium.com/max/800/0*PxOoARROhi1rf63R.gif)

### [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)

> _Highlight columns in comma, tab, semicolon and pipe separated files, consistency check and linting with CSVLint, multi-cursor column editing, column trimming and realignment, and SQL-style querying with RBQL._

![](https://cdn-images-1.medium.com/max/800/0*XAb9jlOfGWlEaCEM.png)

### [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

> _Allows users to open any folder in a container, on a remote machine, container or in Windows Subsystem for Linux(WSL) and take advantage of VS Code’s full feature set._

![](https://cdn-images-1.medium.com/max/800/0*b6XEPh9PJzeWDB_z.gif)

### [Remote VSCode](https://marketplace.visualstudio.com/items?itemName=rafaelmaiolla.remote-vscode)

> _Allow user to edit files from Remote server in Visual Studio Code directly._

### [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

> _Allows you to send HTTP request and view the response in Visual Studio Code directly._

![](https://cdn-images-1.medium.com/max/800/0*zGne78bniDbTXzyf.gif)

### [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

> _Synchronize settings, snippets, themes, file icons, launch, key bindings, workspaces and extensions across multiple machines using GitHub Gist_

![](https://cdn-images-1.medium.com/max/800/0*ilH91MRgGnMF6C8c.gif)

### [Text Power Tools](https://marketplace.visualstudio.com/items?itemName=qcz.text-power-tools)

> _All-in-one extension for text manipulation: filtering (grep), remove lines, insert number sequences and GUIDs, format content as table, change case, converting numbers and more. Great for finding information in logs and manipulating text._

![](https://cdn-images-1.medium.com/max/800/0*Pfp4noD5OeQRbmsZ.gif)

### [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

> _Custom keywords, highlighting, and colors for TODO comments. As well as a sidebar to view all your current tags._

![](https://cdn-images-1.medium.com/max/800/0*6utz502-rPCa0Xcg.gif)

### [Toggle Quotes](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes)

> _Cycle between single, double and backtick quotes_

![](https://cdn-images-1.medium.com/max/800/0*7kZFpggvGAVkvoYa)

### [Typescript Destructure](https://marketplace.visualstudio.com/items?itemName=tusaeff.vscode-typescript-destructure-plugin)

> _TypeScript Language Service Plugin providing a set of source actions for easy objects destructuring_

![](https://cdn-images-1.medium.com/max/800/0*sEi0imXK2Yx69m7H.gif)

### [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

> _Automatic time tracker and productivity dashboard showing how long you coded in each project, file, branch, and language._

---

### Formatting & Beautification

### [Better Align](https://marketplace.visualstudio.com/items?itemName=wwm.better-align)

> _Align your code by colon(:), assignment(=,+=,-=,\*=,/=) and arrow(=&gt;). It has additional support for comma-first coding style and trailing comment._

> _And it doesn’t require you to select what to be aligned, the extension will figure it out by itself._

![](https://cdn-images-1.medium.com/max/800/0*5maDjvvH57MAks1l.gif)

### [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

> _Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text_

![](https://cdn-images-1.medium.com/max/800/0*h6Q6HLQ8jfHLnPlJ.gif)

### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

> _Auto rename paired HTML/XML tags_

![](https://cdn-images-1.medium.com/max/800/0*uRKX2-umhSQzlESv.gif)

### [beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

> _Beautify code in place for VS Code_

### [html2pug](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug)

> _Transform html to pug inside your Visual Studio Code, forget about using an external page anymore._

### [ECMAScript Quotes Transformer](https://marketplace.visualstudio.com/items?itemName=vilicvane.es-quotes)

> _Transform quotes of ECMAScript string literals_

![](https://cdn-images-1.medium.com/max/800/0*W1Z1fIvOGgPclFMJ.gif)

### [Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)

> _Paste code with “correct” indentation_

### [Sort Lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)

> _Sorts lines of text in specific order_

![](https://cdn-images-1.medium.com/max/800/0*a4wPhA7VjJqkp3lu.gif)

### [Surround](https://marketplace.visualstudio.com/items?itemName=yatki.vscode-surround)

> _A simple yet powerful extension to add wrapper templates around your code blocks._

![](https://cdn-images-1.medium.com/max/800/0*lyjRgfSrvdmhGFXd.gif)

### [Wrap Selection](https://marketplace.visualstudio.com/items?itemName=konstantin.wrapSelection)

> _Wraps selection or multiple selections with symbol or multiple symbols_

### [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle)

> _Allows you to toggle your formatter on and off with a simple click_

### [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)

> _This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use._

![](https://cdn-images-1.medium.com/max/800/0*m3nU-5UxgUxX4-eJ.png)

### [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

> _Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX._

### [shell-format](https://github.com/foxundermoon/vs-shell-format)

> _shell script & Dockerfile & dotenv format_

![](https://cdn-images-1.medium.com/max/800/0*TThlkfK1KgQm5AKU.gif)

### [Vscode Google Translate](https://marketplace.visualstudio.com/items?itemName=funkyremi.vscode-google-translate)

> _Quickly translate selected text right in your code_

![](https://cdn-images-1.medium.com/max/800/0*JF8NuxAFDxXiTn_u.gif)

### Explorer Icons

### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

![](https://cdn-images-1.medium.com/max/800/0*67ZZ9mhoISPk_lM4.png)

### Uncategorized

### [Browser Preview](https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-preview)

> _Browser Preview for VS Code enables you to open a real browser preview inside your editor that you can debug. Browser Preview is powered by Chrome Headless, and works by starting a headless Chrome instance in a new process. This enables a secure way to render web content inside VS Code, and enables interesting features such as in-editor debugging and more!_

> **_FYI:… I HAVE TRIED ENDLESSLEY TO GET THE DEBUGGER TO WORK IN VSCODE BUT IT DOES NOT… I SUSPECT THAT’S WHY IT HAS A 3 STAR RATING FOR AN OTHERWISE PHENOMINAL EXTENSION._**

![](https://cdn-images-1.medium.com/max/800/0*Oilwsi7EKGpCZb46.gif)

### [CodeRoad](https://marketplace.visualstudio.com/items?itemName=CodeRoad.coderoad)

> _Play interactive tutorials in your favorite editor._

![](https://cdn-images-1.medium.com/max/800/0*iV8P93QMmWdYfnrQ.gif)

### [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

> _Run code snippet or code file for multiple languages: C, C++, Java, JavaScript, PHP, Python, Perl, Ruby, Go, Lua, Groovy, PowerShell, BAT/CMD, BASH/SH, F\# Script, C\# Script, VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml Script_

![](https://cdn-images-1.medium.com/max/800/0*hMsM_IEyBklQXchd.gif)

### [Code Time](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode)

> _Automatic time reports by project and other programming metrics right in VS Code._

![](https://cdn-images-1.medium.com/max/800/0*Uo1BYexJenprpgLa)

### [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

> _Highlight web colors in your editor_

![Highlight web colors in your editor screenshot](https://cdn-images-1.medium.com/max/800/1*ZwE7OHKR5opvDCJJOw9KeQ.png)

### [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)

> _Syntax highlighting for the VS Code Output Panel and log files_

![](https://cdn-images-1.medium.com/max/800/0*9DpzVZ9cUNp2TMyD.jpg)

### [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)

> _Dash integration in Visual Studio Code_

![Dash integration screenshot](https://cdn-images-1.medium.com/max/800/1*sqGllC-pgXNaEBfB-cxG9Q.png)

### [Edit with Shell Command](https://marketplace.visualstudio.com/items?itemName=ryu1kn.edit-with-shell)

> _Leverage your favourite shell commands to edit text_

![](https://cdn-images-1.medium.com/max/800/0*2wW31HJ1nUCjORZe.gif)

### [Editor Config for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

> _Editor Config for VS Code_

### [ftp-sync](https://marketplace.visualstudio.com/items?itemName=lukasz-wronski.ftp-sync)

> _Auto-sync your work to remote FTP server_

![](https://cdn-images-1.medium.com/max/800/0*-viKhwxpeYQdWHRE.gif)

### [Highlight JSX/HTML tags](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)

> _Highlights matching tags in the file._

### [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

> _A simple extension to make indentation more readable._

![](https://cdn-images-1.medium.com/max/800/0*GK_yEd-50SU3yc_y.png)

### [Password Generator](https://marketplace.visualstudio.com/items?itemName=ftonato.password-generator)

> _Create a secure password using our generator tool. Help prevent a security threat by getting a strong password today._

![](https://cdn-images-1.medium.com/max/800/0*qPJAZk9-NcYgsx7H.gif)

### [PlatformIO](https://marketplace.visualstudio.com/items?itemName=formulahendry.platformio)

> _An open source ecosystem for IoT development: supports 350+ embedded boards, 20+ development platforms, 10+ frameworks. Arduino and ARM mbed compatible._

![](https://cdn-images-1.medium.com/max/800/0*RywVt_vikqB-5urO.gif)

### [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)

> _Polaroid for your code ![📸](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f4f8.svg)._

> **_Note: Polacode no longer works as of the most recent update… go for Polacode2020 or CodeSnap…_**

![](https://cdn-images-1.medium.com/max/800/0*Io4fPojDRrDf5CmW.gif)

### [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)

#### This one is super cool!

> _Rapid prototyping playground for JavaScript and TypeScript in VS Code, with access to your project’s files, inline reporting, code coverage and rich output formatting._

![](https://cdn-images-1.medium.com/max/800/0*Q9kp8EWZHTD0Hfru.gif)

### [Slack](https://marketplace.visualstudio.com/items?itemName=sozercan.slack)

> _Send messages and code snippets, upload files to Slack_

Personally I found this extension to slow down my editor in addition to confliction with other extensions: (I have over 200 as of this writing)….. **yes I have been made fully aware that I have a problem and need to get help**

![](https://cdn-images-1.medium.com/max/800/0*9-xxjXzdPCh_46kZ.gif)

### [Spotify](https://marketplace.visualstudio.com/items?itemName=shyykoserhiy.vscode-spotify)

_No real advantage over just using Spotify normally… it’s problematic enough in implementation that you won’t save any time using it. Further, it’s a bit tricky to configure … or at least it was the last time I tried syncing it with my spotify account._

> _Provides integration with Spotify Desktop client. Shows the currently playing song in status bar, search lyrics and provides commands for controlling Spotify with buttons and hotkeys._

![](https://cdn-images-1.medium.com/max/800/0*IqsxXiGpZQWbQbfD.gif)

### [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg)

> _A Powerful SVG Language Support Extension(beta). Almost all the features you need to handle SVG._

![](https://cdn-images-1.medium.com/max/800/0*SC6zCXGaBnM_LkgC.png)

### [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer)

> _View an SVG in the editor and export it as data URI scheme or PNG._

### [Text Marker (Highlighter)](https://marketplace.visualstudio.com/items?itemName=ryu1kn.text-marker)

> _Highlight multiple text patterns with different colors at the same time. Highlighting a single text pattern can be done with the editor’s search functionality, but it cannot highlight multiple patterns at the same time, and this is where this extension comes handy._

![](https://cdn-images-1.medium.com/max/800/0*YDreVyGNjZmqj_KC.gif)

### [ESDOC MDN](https://marketplace.visualstudio.com/items?itemName=samundrak.esdoc-mdn)

### THIS IS A MUST HAVE

> _Quickly bring up helpful MDN documentation in the editor_

![](https://cdn-images-1.medium.com/max/800/0*xiUfWBsz8x8beY70.gif)

![](https://cdn-images-1.medium.com/max/800/0*mMBU6d1iCkt5VHq2.gif)

### Themes:

In the interest of not making the reader scroll endlessly as I often do… I’ve made a separate post for that here. If you’ve made it this far, I thank you!

[https://5fff5b9a2430bb564bfd451d–stoic-mccarthy-2c335f.netlify.app/\#h18](https://5fff5b9a2430bb564bfd451d--stoic-mccarthy-2c335f.netlify.app/#h18)

---

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

[https://5fff5b9a2430bb564bfd451d–stoic-mccarthy-2c335f.netlify.app/\#h18](https://5fff5b9a2430bb564bfd451d--stoic-mccarthy-2c335f.netlify.app/#h18)[https://5fff5b9a2430bb564bfd451d–stoic-mccarthy-2c335f.netlify.app/\#h18](https://5fff5b9a2430bb564bfd451d--stoic-mccarthy-2c335f.netlify.app/#h18)

### Or Checkout my personal Resource Site:

[https://5fff5b9a2430bb564bfd451d–stoic-mccarthy-2c335f.netlify.app/\#h18](https://5fff5b9a2430bb564bfd451d--stoic-mccarthy-2c335f.netlify.app/#h18)

### Product Icon Themes:

### Fluent Icons

A product icon theme for Visual Studio Code

![](https://cdn-images-1.medium.com/max/800/0*wE_xUE1f0GU8GBGo.png)

[Product icons themes](https://code.visualstudio.com/api/extension-guides/product-icon-theme) allow theme authors to customize the icons used in VS Code’s built-in views: all icons except file icons (covered by file icon themes) and icons contributed by extensions. This extension uses [Fluent Icons](https://www.figma.com/community/file/836835755999342788/Microsoft-Fluent-System-Icons).

### Install

1.  Install the icon theme from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons)
2.  Open the command palette (`Ctrl/Cmd + Shift + P`) and search for `Preferences: Product Icon Theme`
3.  Select `Fluent Icons`

### TBC…

---

### [Monokai Oblique by pushqrdx](https://vscodethemes.com/e/pushqrdx.theme-monokai-oblique-vscode)

Monokai inspired theme for [Visual Studio Code](https://vscodethemes.com/e/pushqrdx.theme-monokai-oblique-vscode) and [Visual Studio IDE](https://github.com/pushqrdx/monokai).

![](https://cdn-images-1.medium.com/max/800/0*43PXQoFMOr28C7_B.png)

### [Monokai Pro by monokai (commercial)](https://vscodethemes.com/e/monokai.theme-monokai-pro-vscode)

Beautiful functionality for professional developers, from the author of the original Monokai color scheme.

![](https://cdn-images-1.medium.com/max/800/0*qwLfKRWuJl0hLZ2m.png)

### [Night Owl by Sarah Drasner](https://vscodethemes.com/e/sdras.night-owl)

A VS Code theme for the night owls out there. Works well in the daytime, too, but this theme is fine-tuned for those of us who like to code late into the night. Color choices have taken into consideration what is accessible to people with color blindness and in low-light circumstances. Decisions were also based on meaningful contrast for reading comprehension and for optimal razzle dazzle. ![✨](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/2728.svg)

![](https://cdn-images-1.medium.com/max/800/0*w4jwUZlACQz-ndRu.png)

### [Plastic by Will Stone](https://vscodethemes.com/e/will-stone.plastic)

A simple theme.

![](https://cdn-images-1.medium.com/max/800/0*xr3ul5T1_CAsnyWR.png)

### [Nord by arcticicestudio](https://vscodethemes.com/e/arcticicestudio.nord-visual-studio-code)

An arctic, north-bluish clean and elegant Visual Studio Code theme.

![](https://cdn-images-1.medium.com/max/800/0*yQMVpYfepk53HNxN.png)

### [Rainglow by Dayle Rees](https://vscodethemes.com/e/daylerees.rainglow)

Collection of 320+ beautiful syntax and UI themes.

![](https://cdn-images-1.medium.com/max/800/0*FpJBK3DBT1FUmuLF.png)

### [Relaxed Theme by Michael Kühnel](https://vscodethemes.com/e/mischah.relaxed-theme)

A relaxed theme to take a more relaxed view of things.

![](https://cdn-images-1.medium.com/max/800/0*bdPe8FIrL8F9qFqx.png)

### [Shades of Purple by Ahmad Awais](https://vscodethemes.com/e/ahmadawais.shades-of-purple)

![⚡](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/26a1.svg) A professional theme with hand-picked & bold shades of purple ![💜](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f49c.svg) to go along with your VS Code. A custom VS Code theme with style.

![](https://cdn-images-1.medium.com/max/800/0*lyNNDrSPE5fpaMBZ.png)

### [2077 theme by Endormi](https://vscodethemes.com/e/Endormi.2077-theme)

Cyberpunk 2077 inspired theme

![](https://cdn-images-1.medium.com/max/800/0*1VdJDagHs-YTIicE.png)

### [An Old Hope Theme by Dustin Sanders](https://vscodethemes.com/e/dustinsanders.an-old-hope-theme-vscode)

VSCode theme inspired by a galaxy far far away…

![](https://cdn-images-1.medium.com/max/800/0*8JZCxiWSVdupy-HQ.png)

### [Ariake Dark by wart](https://vscodethemes.com/e/wart.ariake-dark)

Dark VSCode theme inspired by Japanese traditional colors and the poetry composed 1000 years ago.

![](https://cdn-images-1.medium.com/max/800/0*Pm8gFuyXa_xNniuP.png)

### [Atom One Dark Theme by Mahmoud Ali](https://vscodethemes.com/e/akamud.vscode-theme-onedark)

One Dark Theme based on Atom.

![](https://cdn-images-1.medium.com/max/800/0*YBzFlHIhCnEXPKsb.png)

### [Atomize by emroussel](https://vscodethemes.com/e/emroussel.atomize-atom-one-dark-theme)

A detailed and accurate Atom One Dark Theme.

![](https://cdn-images-1.medium.com/max/800/0*trGkLz0fLzZMjNX_.png)

### [Ayu by teabyii](https://vscodethemes.com/e/teabyii.ayu)

A simple theme with bright colors and comes in three versions — dark, light and mirage for all day long comfortable work.

![](https://cdn-images-1.medium.com/max/800/0*YL26P4BF0Kz-0ck9.png)

### [Borealis Theme by Alexander Eckert](https://vscodethemes.com/e/eckertalex.borealis)

VS Code theme inspired by the calm colors of the aurora borealis in Alaska.

![](https://cdn-images-1.medium.com/max/800/0*Df5XXUX50azLyP7K.png)

### [Captain Sweetheart by ultradracula](https://vscodethemes.com/e/ultradracula.captain-sweetheart)

Tuff but sweet theme.

![](https://cdn-images-1.medium.com/max/800/0*93oi3wFSt7uH62VR.png)

### [City Lights by Yummygum](https://vscodethemes.com/e/Yummygum.city-lights-theme)

![🏙](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f3d9.svg) Yummygum’s Official City Lights suite

![](https://cdn-images-1.medium.com/max/800/0*LwpZlufyoKuCVjqn.png)

### [Cobalt2 Theme Official by Wes Bos](https://vscodethemes.com/e/wesbos.theme-cobalt2)

![🔥](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f525.svg) Official theme by Wes Bos.

![](https://cdn-images-1.medium.com/max/800/0*8KsnUfTVU-A9Aqcl.png)

### [Dracula Official by Dracula Theme](https://vscodethemes.com/e/dracula-theme.theme-dracula)

Official Dracula Theme. A dark theme for many editors, shells, and more.

![](https://cdn-images-1.medium.com/max/800/0*xGaF3Cs8iHoC5gUr.png)

### [Edge by Bogdan Lazar](https://vscodethemes.com/e/bogdanlazar.edge)

A simple theme with bright colors in three variants — Night Sky, Serene and Ocean for all day long comfortable work.

![](https://cdn-images-1.medium.com/max/800/0*qELxjfUYJNuRISgB.png)

### [Eva Theme by fisheva](https://vscodethemes.com/e/fisheva.eva-theme)

A colorful and semantic coloring code theme.

![](https://cdn-images-1.medium.com/max/800/0*Dzw_28GVEGa10m-9.png)

### [Fairy Floss by nopjmp and sailorhg](https://vscodethemes.com/e/nopjmp.fairyfloss)

A fun, purple-based pastel/candy/daydream fairyfloss theme made by sailorhg.

![](https://cdn-images-1.medium.com/max/800/0*wJkmVL0w1tz4n4_H.png)

### [GitHub Theme by Thomas Pink](https://vscodethemes.com/e/thomaspink.theme-github)

GitHub Theme for Visual Studio Code.

![](https://cdn-images-1.medium.com/max/800/0*H4ZAOtLrAniVho93.png)

### [Jellybeans Theme by Dimitar Nonov](https://vscodethemes.com/e/DimitarNonov.jellybeans-theme)

Jellybeans Theme for Visual Studio Code.

![](https://cdn-images-1.medium.com/max/800/0*oMhZGGsUfm8rqLtJ.png)

### [Material Palenight Theme by whizkydee](https://vscodethemes.com/e/whizkydee.material-palenight-theme)

An elegant and juicy material-like theme for Visual Studio Code.

![](https://cdn-images-1.medium.com/max/800/0*cw3IGUQSFahiPgiH.png)

### [Material Theme by Mattia Astorino](https://vscodethemes.com/e/Equinusocio.vsc-material-theme)

The most epic theme now for Visual Studio Code.

![](https://cdn-images-1.medium.com/max/800/0*2YvsABxfZ4Cv1Y_j.png)

### [Mno by u29dc](https://vscodethemes.com/e/u29dc.mno)

Minimal monochrome theme.

![](https://cdn-images-1.medium.com/max/800/0*_NT4CQBGRRlFQl9q.png)

### [Slime Theme by smlombardi](https://vscodethemes.com/e/smlombardi.slime)

A dark syntax/workbench theme for Visual Studio Code — optimized for SCSS, HTML, JS, TS, Markdown, and PHP files.

![](https://cdn-images-1.medium.com/max/800/0*-ldv4DoOVntnZbBt.png)

### [Niketa Theme by Dejan Toteff](https://vscodethemes.com/e/selfrefactor.niketa-theme)

Collection of 18 light themes separated in 4 groups by background’s brightness.

![](https://cdn-images-1.medium.com/max/800/0*n_iRSy_1IDOgajFu.png)

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a><a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

> ==&gt; currently under development & very buggy

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

### Object-Oriented Programming

![](https://cdn-images-1.medium.com/max/800/0*56wmllZ_9pRe28TK.jpg)

### Overview:

#### `Encapsulation`

-   The mechanism that puts behavior and data together behind methods that hide the specific implementation of a class.

#### How can a `CommonJS Module import functionality` from another module?

-   Through the use of the require function.

#### How can an ES6 module import functionality from another module?

-   Through the use of the import-from syntax that looks like this:
-   `import SymbolName from './relative-path.js';`

#### How do `CommonJS Modules` allow other modules to access exported symbols?

-   Through the use of the module.exports property.

#### How do `ES6 Modules export` functionality so other modules can use them?

-   Through the use of the export keyword.

#### `Implementation inheritance`

-   The data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes

#### `Inheritance`

-   The mechanism that passes traits of a parent class to its descendants.

#### `Prototypal inheritance`

-   A method of realizing implementation inheritance through process of finding missing properties on an object by delegating the resolution to a prototype object.

#### `The constructor method`

-   The special method of a class that is called to initialize an object when code uses the new keyword to instantiate an object from that class.

#### `The Dependency Inversion Principle`

-   Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance of a dependency.

#### The `extends` keyword

-   The keyword in JavaScript that allows one class to inherit from another.

#### `The Interface Segregation Principle`

-   Method names should be grouped together into granular collections called “interfaces”

#### `The Law Of Demeter`

-   Don’t use more than one dot (not counting the one after “this”).
-   A method of an object can only invoke the methods (or use the properties) of the following kinds of objects: Methods on the object itself Any of the objects passed in as parameters to the method And object created in the method Any values stored in the instance variables of the object Any values stored in global variables

#### `The Liskov Substitution Principle`

-   You can substitute child class objects for parent class objects and not cause errors.

#### `The Open-Close Principle`

-   A class is open for extension and closed for modification.

#### `The Single-Responsibility Principle`

-   Any one of the following:
-   A class should do one thing and do it well.
-   A class should have only one reason to change.
-   Gather together the things that change for the same reasons. Separate those things that change for different reasons.

---

### Background:

### Constructor Functions

Defining a constructor function _Example of an object using object initialization_

const fellowshipOfTheRing = {  
title: “The Fellowship of the Ring”,  
series: “The Lord of the Rings”,  
author: “J.R.R. Tolkien”,  
};

-   The above literal is a “Book” object type.
-   `Object Type` is defined by it’s attributes and behaviors.

> `**Behaviors**` **are represented by methods.**

-   `Constructor Functions` : Handle the creation of an object – it’s a factory for creating objects of a specific type.
-   There are a few specific things to constructors worth noting:
-   **_The name of the constructor function is capitalized_**
-   The Function _does not explicitly return a value_
-   Within the body, the _this_ keyword references the newly created object

function Book(title, series, author) {  
this.title = title;  
this.series = series;  
this.author = author;  
}

### Invoking a constructor function

-   We can invoke a constructor function using the `new` keyword.

function Book(title, series, author) {  
this.title = title;  
this.series = series;  
this.author = author;  
}

const fellowshipOfTheRing = new Book(  
“The Fellowship of the Ring”,  
“The Lord of the Rings”,  
“J.R.R. Tolkien”  
);

console.log(fellowshipOfTheRing); // Book { title: ‘The Fellowship of the Ring’, … }

### _Four Things will happen when invoking a constructor function_

1.  A new empty object is created {};
2.  The new obj’s `prototype` is set to the object referenced by the constructors prototype property.
3.  `This` is bound to the new object.
4.  The new object is returned after the constructor function has completed.

### Understanding New Object Instances

-   `Instance` : term to describe an objected created from a constructor function.
-   Every instance created is a unique object and therefore not equal to each other.

### Using the instanceof operator to check an object’s type

console.log(fellowshipOfTheRing instanceof Book); // true

-   By using the `instanceof` operator we can verify that an object was created from a certain object type.
-   _The instanceOf operator works by checking to see if the prototype object of the left side of the operator is the same as the prototype object of the right side of the operator._

### Invoking a constructor function without the new keyword

-   If we invoke a constructor function without the `new` keyword, we may result in one of two unexpected outcomes:

1.  In non-strict mode, this will be bound to the global object instead.
2.  In `strict` mode, this will become undefined.

-   You can enable strict mode by typing `"use strict"` at the top of your file.

### Defining Sharable Methods

-   _Avoid the temptation to store an object method inside a constructor function, it is inefficient with computer memory usage b/c each object instance would have it’s own method definition._
-   `Prototype` : An object that is delegated to when a reference to an object property or method can’t be resolved.
-   Every instance created by a constructor function shares the same prototype.
-   `Object.setPrototypeOf()` and `Object.getPrototypeOf()` are just used to set a prototype of one object to another object; and also the verify a prototype.
-   `proto` : aka “dunder proto” is a property used to gain easy access to an object’s prototype – it is widely supported by browsers but is considered deprecated.

function Book(title, series, author) {  
this.title = title;  
this.series = series;  
this.author = author;  
}

// Any method defined on the \`Book.prototype\` property  
// will be shared across all \`Book\` instances.  
Book.prototype.getInformation = function () {  
return \`${this.title} by ${this.author}\`;  
};

const fellowshipOfTheRing = new Book(  
“The Fellowship of the Ring”,  
“The Lord of the Rings”,  
“J.R.R. Tolkien”  
);

console.log(fellowshipOfTheRing.getInformation());

-   Every method we define on a constructor function’s prototype property will be shared across all instances of that object type.

The Problem with Arrow Functions

-   We cannot use arrow functions when defining methods on a constructor function’s prototype property.
-   Arrow functions don’t include their own this binding; therefore it will not reference the current instance — always stick with the function () keyword.

---

### Putting the Class in JavaScript Classes

In ES2015, JS gained the `class` keyword – replacing the need to use only constructor functions & prototypes to mimic classes!

-   `class` : keyword that gives developers a formal way to create a class definition to specify an object type’s attributes and behavior; also used to create objects of that specific type.

Defining a ES2015 class

class Book {  
constructor(title, series, author) {  
this.title = title;  
this.series = series;  
this.author = author;  
}  
}

-   Class names also begin only with capital letters.
-   Although not required, class definitions can include a `class constructor function` – these are similar to regular constructors in that:
-   They don’t explicitly return a value.
-   The this keyword references the newly created object instance.

### Instantiating an instance of a class

> We can also use the `new`.

### Four things occur when instantiating an instance of a class:

1.  New empty object is created {};
2.  The new obj’s prototype is set to the class prototype’s property value.
3.  `This` is bound to the new object.
4.  After the constructor method has completed, the new obj is returned.

-   **Don’t try to instatiate a class object without the new keyword.**

#### Class Definitions are NOT hoisted

test();

function test() {  
console.log(“This works!”);  
}

-   In JS you can call a function before it’s declared — this is known as `hoisting`.
-   Class definitions are **NOT hoisted,** so just get in the habit of declaring them before you use them.

Defining Methods

-   A class can contain two types of methods:
-   `Instance Method` : Methods that are invoked on an instance of the class – useful for performing an action on a specific instance.
-   Instance methods are also sometimes referred to as `prototype` methods because they are defined on a shared prototype object.
-   `Static Method` : Methods that invoked directly on a class, not on an instance.
-   `Important`: Invoking a static method on an instance will result in a runtime error.
-   Prepending the `static` keyword at the beginning on the method name will make it static.

class Book {  
constructor(title, series, author) {  
this.title = title;  
this.series = series;  
this.author = author;  
}

// Notice the use of a rest parameter (…books)  
// to capture the passed parameters as an array of values.  
static getTitles(…books) {  
return books.map((book) =&gt; book.title);  
}

getInformation() {  
return \`${this.title} by ${this.author}\`;  
}  
}

const fellowshipOfTheRing = new Book(  
“The Fellowship of the Ring”,  
“The Lord of the Rings”,  
“J.R.R. Tolkien”  
);

const theTwoTowers = new Book(  
“The Two Towers”,  
“The Lord of the Rings”,  
“J.R.R. Tolkien”  
);

const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(“,”)); // The Fellowship of the Ring, The Two Towers

-   If we go back to an example of how constructor functions also use static methods — we see that static methods are *defined directly on the constructor function* — whereas instance methods need to be defined on the _prototype_ object.

function Book(title, series, author) {  
this.title = title;  
this.series = series;  
this.author = author;  
}

// Static methods are defined  
// directly on the constructor function.  
Book.getTitles = function (…books) {  
return books.map((book) =&gt; book.title);  
};

// Instance methods are defined  
// on the constructor function’s \`prototype\` property.  
Book.prototype.getInformation = function () {  
return \`${this.title} by ${this.author}\`;  
};

const fellowshipOfTheRing = new Book(  
“The Fellowship of the Ring”,  
“The Lord of the Rings”,  
“J.R.R. Tolkien”  
);

const theTwoTowers = new Book(  
“The Two Towers”,  
“The Lord of the Rings”,  
“J.R.R. Tolkien”  
);

console.log(fellowshipOfTheRing.getInformation()); // The Fellowship of the Ring by J.R.R. Tolkien

console.log(theTwoTowers.getInformation()); // The Two Towers by J.R.R. Tolkien

// Call the static \`Book.getTitles()\` method  
// to get an array of the book titles.  
const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(“,”)); // The Fellowship of the Ring, The Two Towers

### Comparing Classes to Constructor Functions

> _ES2015 Classes are essentially_ **_syntactic sugar_** _over traditional constructor functions and prototypes._

---

### Javascript Inheritance

-   `Child Class` : Class that is based upon another class and inherits properties and methods from that other class.
-   `Parent Class` : Class that is being inherited downwards.
-   `Inheritance` : The process of basing a class upon another class.

class CatalogItem {  
constructor(title, series) {  
this.title = title;  
this.series = series;  
}

getInformation() {  
if (this.series) {  
return \`<span class="math inline">_this_._title_(</span>{this.series})\`;  
} else {  
return this.title;  
}  
}  
}

class Book extends CatalogItem {  
constructor(title, series, author) {  
super(title, series);  
this.author = author;  
}  
}

class Movie extends CatalogItem {  
constructor(title, series, director) {  
super(title, series);  
this.director = director;  
}  
}

const theGrapesOfWrath = new Book(  
“The Grapes of Wrath”,  
null,  
“John Steinbeck”  
);  
const aNewHope = new Movie(  
“Episode 4: A New Hope”,  
“Star Wars”,  
“George Lucas”  
);

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath  
console.log(aNewHope.getInformation()); // Episode 4: A New Hope (Star Wars)  
console.log(Catalogitem instanceof Function); // true  
console.log(Book instanceof Function); // true

-   A `prototype chain` defines a series of prototype objects that are delegated to one by one, when a property or method can’t be found on an instance object.

console.log(theGrapesOfWrath.getInformation()); // The Grapes of Wrath

-   When the `getInformation()` method is invoked:
-   JS looks for get() on the current object.
-   If it isn’t found, the method call is delegated to the object’s prototype.
-   It continues up the prototype chain until the method is found.

Overriding a method in a parent class

-   `Method Overriding` : when a child class provides an implementation of a method that’s already defined in a parent class.

class Movie extends CatalogItem {  
constructor(title, series, director) {  
super(title, series);  
this.director = director;  
}

getInformation() {  
let result = super.getInformation();

    if (this.director) {
      result += \` \[directed by ${this.director}\]\`;
    }

    return result;

}  
}

-   We can simply declare our own method of the same name in our child class to override our parent’s version of `getInformation()`

---

### JavaScript Modules

Introducing Node.js modules

-   In Node.js, each JS file in a project defines a `module`.
-   Module’s contents are private by default.
-   `Local Modules` : Modules defined within your project.
-   `Core Modules` : Native modules contained within Node.js that you can use to perform tasks or to add functionality to your application.
-   `CommonJS` : A legacy module system.
-   `ES Modules` : Newer module sysem that will eventually replace CommonJS.
-   `Entry Point` : JS File that is passed to Node for access to the entire application.

### Syntax for exporting modules:

**module.exports.Book = Book; module.exports.Movie = Movie;**

**module.exports = { Book, Movie, };**

#### Syntax for importing modules:

**const classes = require(“./classes”);**

**const { Book, Movie } = require(“./classes”);**

#### Using Single Item Modules

-   Following the convention of a single exported item per module helps to keep modules focused and less likely to become bloted with too much code.

#### Understanding Module Loading

-   When loading a module, Node will examine the identifier passed to the require() function to determine if our module is local, core, or third-party:
-   `Local Module`: identifier starts with ./ ../ or /
-   `Node.js Core`: identifier matches name
-   `Third-Party`: identifier matches a module in the node modules folder (installed package)

---

### `Encapsulation`

-   Puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn’t need to worry about the details of it.

### `Inheritance`

-   `**Implementation Inheritance**` **:** Means that data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes.
-   `**Prototypal Inheritance**` : Means that JS uses prototype objects to make its `**implementation inheritance**` actually work.
-   Parent Class === Prototype === Super Class === Base Class
-   Inheritance === Subtyping

class MyClass {}

// is the same as  
class MyClass extends Object {}

-   **When you declare a class with no explicit parent class, JS will make it a child of Object.**

class Charity {}

class Business {  
toString() {  
return “Give us your money.”;  
}  
}

class Restaurant extends Business {  
toString() {  
return “Eat at Joe’s!”;  
}  
}

class AutoRepairShop extends Business {}

class Retail extends Business {  
toString() {  
return “Buy some stuff!”;  
}  
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {  
toString() {  
return “Upgrade your perfectly good phone, now!”;  
}  
}

console.log(new PhoneStore().toString()); // ‘Upgrade your perfectly good phone, now!’  
console.log(new ClothingStore().toString()); // ‘Buy some stuff!’;  
console.log(new Restaurant().toString()); // ‘Eat at Joe\\’s!’  
console.log(new AutoRepairShop().toString()); // ‘Give us your money.’  
console.log(new Charity().toString()); // \[object object\]

#### The nuts and bolts of prototypal inheritance

![](https://cdn-images-1.medium.com/max/800/0*FCIE6k4O9X8f9CbR)

-   When JavaScript uses a property (or method) from a prototype that it found through prototypal inheritance, then the this property points to the original object on which the first call was made.

class Parent {  
constructor() {  
this.name = “PARENT”;  
}  
toString() {  
return \`My name is ${this.name}\`;  
}  
}

class Child extends Parent {  
constructor() {  
super();  
this.name = “CHILD”;  
}  
}

const parent = new Parent();  
console.log(parent.toString()); // my name is Parent

const child = new Child();  
console.log(child.toString()); // my name is Child

### Polymorphism

-   The ability to treat an object as if it were an instance of one of its parent classes.

---

### The SOLID Principles Explained

SOLID is an anagram for:

-   `The Single-Responsibility Principle`
-   `The Open-Close Principle`
-   `The Liskov Substitution Principle`
-   `The Interface Segregation Principle`
-   `The Dependency Inversion Principle`

### `Single-Responsibility Principle`

> _A class should do one thing and do it well_

-   This principle is about limiting the impact of change.

### `The Liskov Substitution Principle:`

_Subtype Requirement: Let ϕ(x) be a property provable about objects x of type T. Then ϕ(y) should be true for objects y of type S where S is a subtype of T._

> _You can substitute child class objects for parent class objects and not cause errors._

`The Other Three`

-   The remaining three principles are important for languages that have `static typing` – which means a variable can have only one kind of thing in it.
-   `Open-Close Principle`
-   A class is open for extension and closed for modification.
-   Creating new functionality can happen in child classes, and not the original class.
-   `Interface Segregation Principle`
-   Method names should be grouped together into granular collections called “interfaces”.
-   `Dependency Inversion Principle`
-   Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance.

### Controlling Coupling with The Law of Demeter

-   `Coupling` : The degree of interdependence between two or more classes.
-   The fewer the connections between classes, the less chance there is for the _ripple effect_.
-   Here is the formal definition:
-   A method of an object can only invoke the methods (or use the properties) of the following kind of objects:
-   Methods on the object itself.
-   Any of the objects passed in as parameters to the method.
-   Any object created in the method.
-   Any values stores in the instance variables of the object.
-   Any values stored in global variables.
-   Law of Demeter is more so of a guideline than a law.
-   Easiest way to implement it is to _not us more than one dot_
-   You cannot cheat by separating extra calls onto different lines.

### When to ignore the Law of Demeter

-   When you work with objects that come from code that you didn’t create — you will often have to break the LoD.

document  
.getElementById(“that-link”)  
.addEventListener(“click”, (e) =&gt; e.preventDefault());

-   This breaks the law but there is way about it because your code needs to know about both elements and you have to use the API provided by the DOM.
-   UI’s will break LoD because they are not object-oriented programs.

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a><a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

#### [CODEX](http://medium.com/codex)

### Explanation for Rotate Right

![](https://cdn-images-1.medium.com/max/1200/0*3_vbGvHeWOgSTxk7.png)

### Question

Write a function `rotateRight(array, num)` that takes in an array and a number as arguments.

> The function should return a new array where the elements of the array are rotated to the right number times.  
> The function should not mutate the original array and instead return a new array.

> Define this function using `[_function expression syntax_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)`[.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

**HINT:** you can use [Array\#slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to create a copy of an array

---

> JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

### pop(): Remove an item from the end of an array

    let cats = ['Bob', 'Willy', 'Mini'];

    cats.pop(); // ['Bob', 'Willy']

> pop() returns the removed item.

### push(): Add items to the end of an array

    let cats = ['Bob'];

    cats.push('Willy'); // ['Bob', 'Willy']

    cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']

> push() returns the new array length.

### shift(): Remove an item from the beginning of an array

    let cats = ['Bob', 'Willy', 'Mini'];

    cats.shift(); // ['Willy', 'Mini']

> shift() returns the removed item.

### unshift(): Add items to the beginning of an array

    let cats = ['Bob'];

    cats.unshift('Willy'); // ['Willy', 'Bob']

    cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']

> unshift() returns the new array length.

**We are being asked for two things:**

1.  To return an array with all the elements shifted over ‘num’ times.
2.  To `NOT` mutate the original array

**Step 1.**  
We need to start the function and create a variable to hold a COPY of our input array.

<a href="https://gist.github.com/bgoonz/ca7a48c316345f6f7acd9383e13fb23e" class="uri">https://gist.github.com/bgoonz/ca7a48c316345f6f7acd9383e13fb23e</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" class="uri">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice</a>

-   We assign array.slice(0) to a variable called result.
-   Slicing our input array simply creates a sliced copy of the data.
-   Remember that by excluding a second argument in our slice parameter allows us to slice from the first argument all the way to the end.

**Step 2.**  
We need to create a for loop to tell our function how many times we want to rotate.

<a href="https://gist.github.com/bgoonz/b2a934289a677f337a72bcd7751a55df" class="uri">https://gist.github.com/bgoonz/b2a934289a677f337a72bcd7751a55df</a>

-   By setting our second delimiter to i &lt; num we will ask our loops to run num times.
-   Running num times is the same as executing the code block within num times.

**Step 3.**  
We need to put some executable code within our for loop to be run during every cycle.

<a href="https://gist.github.com/bgoonz/44e66960ba5cc0ffe04ea0499f7c3134" class="uri">https://gist.github.com/bgoonz/44e66960ba5cc0ffe04ea0499f7c3134</a>

-   Since we are rotating to the right, every change to our result array under the hood will look like this (if we ref. our first test case):
-   `['a', 'b', 'c', 'd', 'e'];` (how it looks like at the start)
-   `['e', 'a', 'b', 'c', 'd'];` (after one run of the for loop)
-   `['d', 'e', 'a', 'b', 'c'];` (after second/last run of the for loop)
-   To accomplish this we first need to ‘`pop`‘ off or remove our last element.
-   Two things happen when we use this built-in function.
-   Our copied array is mutated to lose it’s last ele.
-   The removed element is stored in the variable we assigned to the function.
-   Our second step is to add it to the start of our array, to do this we can use `unshift`.
-   By inputting the variable we are using to hold our removed element into the parameter of unshift we are adding our element to the front of the array.

**Step 4.**

Now that our for loop has ended and our copied array looks just like how the answer looks, we need to output the answer.

<a href="https://gist.github.com/bgoonz/b033f820c35869af0869ce712af68bda" class="uri">https://gist.github.com/bgoonz/b033f820c35869af0869ce712af68bda</a>

-   We accomplish this by creating a `return` line AFTER the for loop.

### End Result

<a href="https://gist.github.com/bgoonz/4e2a040cd94006bb887a77a68f4287b9" class="uri">https://gist.github.com/bgoonz/4e2a040cd94006bb887a77a68f4287b9</a>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" class="uri">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" class="uri">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice</a>

### Or Checkout my personal Resource Site:

### **==&gt;currently under development & very buggy**

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" class="uri">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice</a>

#### What is HTML, CSS & JS and why do we need all three?

![](https://cdn-images-1.medium.com/max/800/0*KxF-AuqgX7UklUa4.png)

HTML stands for “Hypertext Markup Language”. Basically, HTML is the structure for the website, words, bullet points, data tables, etc. CSS stands for “Cascading Style Sheets” which means it’s the “Style” it’s how to make your website look professional, and look visually appealing. JS is how to make your website actually \*\*work\*\*.

For example, if you created something like YouTube and one of the options you can watch videos, you used HTML for the title, you used CSS for the color/s, and you have to make it actually work! So when you click on it it will run the video. This is an example of the three programming languages working in unison to form an experience you’re already familiar with if you’re reading this…

**I mean most likely… unless you printed it because you hate trees.**

— — — — — — — — — — -

### What are Tags and Attributes?

Tags and attributes are the basis of HTML.

They work together but perform different functions — it is worth investing 2 minutes in **differentiating the two**.

#### What Are HTML Tags?

[Tags](https://html.com/tags/) are used to **mark up the start of an HTML element** and they are usually enclosed in angle brackets. An example of a tag is: `<h1>`.

Most tags must be opened `<h1>` and closed `</h1>` in order to function.

#### What are HTML Attributes?

[Attributes](https://html.com/attributes/) contain **additional pieces of information**. Attributes take the form of an opening tag and additional info is **placed inside**.

An example of an attribute is:

`<img src="mydog.jpg" alt="A photo of my dog.">`

In this instance, the image source (src) and the alt text (alt) are attributes of the `<img>` tag.

#### Golden Rules To Remember

1.  The vast majority of tags must be **opened** (`<tag>`) and **closed** (`</tag>`) with the element information such as a title or text resting between the tags.
2.  When using multiple tags, the tags must be **closed in the order in which they were opened**. For example:
3.  `<strong><em>This is really important!</em></strong>`

Let’s have a look at how CodePen works, firstly, you need to go to their website. After that, you must create an account. After you do that, You will see something like this

### How to get started

If you’re using Visual Studio Code, congrats! There is Emmet support built into VSCode, so you won’t need to install any extensions. If you’re working in Atom you’ll need to install the Emmet plugin, which can be [found here](https://atom.io/packages/emmet).

### Basic Syntax

**_HTML Boilerplate_**

If you’ve been working in VSCode, you’ve probably seen Emmet syntax highlighting when working in HTML documents. In my opinion, the most convenient Emmet shortcut is **_html:5_**. This will create an HTML boilerplate, and fill out metadata tags in the head of your document.

**html:5**

![](https://cdn-images-1.medium.com/max/800/0*oDrxfgtO2WE9_Z6d.png)

Emmet Abbreviation for different HTML boilerplates.

**When you see the auto complete as pictured above you can hit tab to auto fill the boilerplate html document.**

That one small shortcut autogenerates all this metadata and head and body tags:

![](https://cdn-images-1.medium.com/max/800/0*LgiaI-W7QB4mtifR.png)

#### Here’s some slightly more advanced boilerplate for you to use as a starting point in your projects.

<a href="https://gist.github.com/bgoonz/b0aae5c4079596820e37c98265f45539" class="uri">https://gist.github.com/bgoonz/b0aae5c4079596820e37c98265f45539</a>

### HTML Language

**Chapter 1: Formatting text**

**Tags in HTML:** Tags are one of the most important parts in an HTML document. (We will get to what HTML document is after we know what tags are). HTML uses some predefined tags which tells the browser about content display property, that is how to display a particular given content. For Example, to create a paragraph, one must use the paragraph tags(

) and to insert an image one must use the img tags().

There are generally two types of tags in HTML:

1.  **Paired tags:** These tags come in pairs. That is they have both opening (&lt; &gt;) and closing(&lt;/ &gt;) tags.
2.  **Singular tags:** These tags do not required to be closed

> i.e.

---

The tag above me is a horizontal line that doesn’t need a closing tag

HTML tags have two main types: **block-level** and **inline tags**.

1.  Block-level elements take up the full available space and always start a new line in the document. Headings and paragraphs are a great example of block tags.
2.  Inline elements only take up as much space as they need and don’t start a new line on the page. They usually serve to format the inner contents of block-level elements. Links and emphasized strings are good examples of inline tags.

### Block-Level Tags

The three block level tags every HTML document needs to contain are \*\*

**,**

\*\*.

1.  The \*\* \*\* tag is the highest level element that encloses every HTML page.
2.  The \*\* \*\* tag holds meta information such as the page’s title and charset.
3.  Finally, the \*\* \*\* tag encloses all the content that appears on the page.

-   Paragraphs are enclosed by \*\*\_

    **_, while blockquotes use the_**

    \_\*\* tag.

-   Divisions are bigger content sections that typically contain several paragraphs, images, sometimes blockquotes, and other smaller elements. We can mark them up using the \*\*\_

    \_\*\* tag. A div element can contain another div tag inside it as well.

-   You may also use \*\*\_

    \_\*\* tags for ordered lists and \*\*\_

    \_\*\* for unordered ones. Individual list items must be enclosed by the \*\*\_

-

1.  \*\*

    -   \*\*
    -   **List item 1**
    -   \*\*
    -   **List item 2**
    -   \*\*
    -   **List item 3**
    -   \*\*

    \*\*

### **Structure of an HTML Document**

An HTML Document is mainly divided into two parts:

-   **HEAD**: This contains the information about the HTML document. For Example, Title of the page, version of HTML, Meta-Data etc.

HTML TAG Specifies an html document. The HTML element (or HTML root element) represents the root of an HTML document. All other elements must be descendants of this element. Since the element is the first in a document, it is called the root element.

Although this tag can be implied, or not required, with HTML, it is required to be opened and closed in XHTML.

-   Divisions are bigger content sections that typically contain several paragraphs, images, sometimes blockquotes, and other smaller elements. We can mark them up using the \*\*\_

    \_\*\* tag. A div element can contain another div tag inside it as well.

-   You may also use \*\*\_

    \_\*\* tags for ordered lists and \*\*\_

    \_\*\* for unordered ones. Individual list items must be enclosed by the \*\*\_

-

1.  \*\*

    -   \*\*
    -   **List item 1**
    -   \*\*
    -   **List item 2**
    -   \*\*
    -   **List item 3**
    -   \*\*

    \*\*

### Inline Tags

Many inline tags are used to format text. For example, a \*\*\*\* tag would render an element in **bold**, whereas \*\* tags would show it in _italics_.

Hyperlinks are also inline elements that require \*\*\*\*\*\* tags and **href** attributes to indicate the link’s destination:

1.  **&lt;a** **href=**”https://example.com/”**&gt;**Click me!

Images are inline elements too. You can add one using \*\*\*\* without any closing tag. But you will also need to use the **_src_** attribute to specify the image path, for example:

1.  **&lt;img** **src=**”/images/example.jpg” **alt=**”Example image”**&gt;**

#### **BODY**: This contains everything you want to display on the Web Page.

&lt;! — Everything the user sees on the webpage goes here! — ps… this is a comment →

Let us now have a look on the basic structure of HTML. That is the code which is must for every webpage to have:

**_&lt;!DOCTYPE html&gt;_**

#### Here is some boilerplate html you can use as a starting point:!!Every Webpage must contain this code.!!

---

### **&lt;!DOCTYPE html&gt;**

---

Below is the complete explanation of each of the tags used in the above piece of HTML code:

**&lt;!DOCTYPE html&gt;:** This tag is used to tells the HTML version. This currently tells that the version is HTML 5.

> \*\*\_
>
> \_:\*\* This is called HTML root element and used to wrap all the code.
>
> > \*\*
> >
> > :\*\* Body tag is used to enclosed all the data which a web page has from texts to links. All of the content that you see rendered in the browser is contained within this element.
> >
> > ### Bold Text:
> >
> > \*\*\*\*this is bold\*\*\*\*
> >
> > ⇐ this is for strong, emergency emotions.
> >
> > \_\_\_\_\_\_\_\_\_\_\_
> >
> > **HEADING/S:**
> >
> > _6 types from largest(h1) to smallest (h6)_
> >
> > ###
> >
> > ####
> >
> > #####
> >
> > ######
> >
> > \_\_\_\_\_\_\_\_\_\_\_
> >
> > **ITALICS:** There are two ways to use it, the first one is the tag and the second one is the tag. They both italicize the text[![🤷](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f937.svg)](https://emojipedia.org/person-shrugging/)
> >
> > **this is fancy text that’s too good to for us**
> >
> > \_\_\_\_\_\_\_\_\_\_\_
> >
> > **PARAGRAPHS:** In order to make Paragraphs, just add
> >
> > .
> >
> > Hi there my name is Jason.
> >
> > \_\_\_\_\_\_\_\_\_\_\_
> >
> > **TITLES: not the same thing as a heading (which renders on the html page) but instead the title element represents the title of the page as shown in the tab of the browser.**
> >
> > ### Child items
> >
> > Child items are created using `>`
> >
> > `ul>li>p`
> >
> > -
> >
> > ### Sibling Items
> >
> > Sibling items are created using `+`
> >
> > `html>head+body`
> >
> > ### Multiplication
> >
> > Items can be multiplied by `*`
> >
> > `ul>li*5`
> >
> > ---
> >
> > ### Grouping
> >
> > Items can be grouped together using `()`
> >
> > `table>(tr>th*5)+tr>t*5`

### Class and ID

Class and Id in Emmet can be done using `.` and `#`

`div.heading`

`div#heading`

ID and Class can also be combined together

`div#heading.center`

### Adding Content inside tags

Contents inside tags can be added using `{}`

`h1{Emmet is awesome}+h2{Every front end developers should use this}+p{This is paragraph}*2`

# Emmet is awesome

## Every front end developers should use this

This is paragraph

This is paragraph

### Attributes inside HTML tags

Attributes can be added using `[]`

`a[href=https://?google.com data-toggle=something target=_blank]`

[](https://?google.com)

### Numbering

Numbering can be done using `$`  
You can use this inside tag or contents.

`h${This is so awesome $}*6`

# This is so awesome 1

## This is so awesome 2

### This is so awesome 3

#### This is so awesome 4

##### This is so awesome 5

###### This is so awesome 6

Use `@-` to reverse the Numbering

`img[src=image$$@-.jpg]*5`

![](image05.jpg)  
![](image04.jpg)  
![](image03.jpg)  
![](image02.jpg)  
![](image01.jpg)

To start the numbering from specific number, use this way

`img[src=emmet$@100.jpg]*5`

![](emmet100.jpg)  
![](emmet101.jpg)  
![](emmet102.jpg)  
![](emmet103.jpg)  
![](emmet104.jpg)

### Tips

-   Use `:` to expand known abbreviations

`input:date`

`form:post`

`link:css`

-   Building Navbar

`.navbar>ul>li*3>a[href=#]{Item $@-}`

-   [Item 3](#)
-   [Item 2](#)
-   [Item 1](#)

### CSS

Emmet works surprisingly well with css as well.

-   `f:l`

float: left;

You can also use any options n/r/l

-   `pos:a­`

position: absolute;

Also use any options, pos:a/r/f

-   `d:n/b­/f/­i/ib`

`d:ib`

display: inline-block;

-   You can use `m` for margin and `p` for padding followed by direction

`mr` -&gt; `margin-right`

`pr` -&gt; `padding-right`

-   `@f` will result in

<span class="citation" data-cites="font-face"><span class="citation" data-cites="font-face">@font-face</span></span> {  
font-family:;  
src:url();  
}

You can also use these shorthands

![](https://cdn-images-1.medium.com/max/800/1*h8hsUrJNyVRLYqBQP63DCA.png)

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

HEAD^ \# 1 commit before head  
HEAD^^ \# 2 commits before head  
HEAD~5 \# 5 commits before head

### Branches

\# create a new branch  
git checkout -b $branchname  
git push origin $branchname –set-upstream

\# get a remote branch  
git fetch origin  
git checkout –track origin/$branchname

\# delete local remote-tracking branches (lol)  
git remote prune origin

\# list merged branches  
git branch -a –merged

\# delete remote branch  
git push origin :$branchname

\# go back to previous branch  
git checkout -

### Collaboration

\# Rebase your changes on top of the remote master  
git pull –rebase upstream master

\# Squash multiple commits into one for a cleaner git log  
\# (on the following screen change the word pick to either ‘f’ or ‘s’)  
git rebase -i $commit_ref

### Submodules

\# Import .gitmodules  
git submodule init

\# Clone missing submodules, and checkout commits  
git submodule update –init –recursive

\# Update remote URLs in .gitmodules  
\# (Use when you changed remotes in submodules)  
git submodule sync

### Diff

### Diff with stats

git diff –stat  
app/a.txt | 2 +-  
app/b.txt | 8 ++—-  
2 files changed, 10 insertions(+), 84 deletions(-)

### Just filenames

git diff –summary

### Log options

–oneline  
e11e9f9 Commit message here

–decorate  
shows “(origin/master)”

–graph  
shows graph lines

–date=relative  
“2 hours ago”

### Misc

### Cherry pick

git rebase 76acada^

\# get current sha1 (?)  
git show-ref HEAD -s

\# show single commit info  
git log -1 f5a960b5

\# Go back up to root directory  
cd “$(git rev-parse –show-top-level)”

### Short log

$ git shortlog  
$ git shortlog HEAD~20.. \# last 20 commits

James Dean (1):  
Commit here  
Commit there

Frank Sinatra (5):  
Another commit  
This other commit

### Bisect

git bisect start HEAD HEAD~6  
git bisect run npm test  
git checkout refs/bisect/bad \# this is where it screwed up  
git bisect reset

### Manual bisection

git bisect start  
git bisect good \# current version is good

git checkout HEAD~8  
npm test \# see if it’s good  
git bisect bad \# current version is bad

git bisect reset \# abort

### Searching

git log –grep=“fixes things” \# search in commit messages  
git log -S“window.alert” \# search in code  
git log -G“foo.\*” \# search in code (regex)

### GPG Signing

git config set user.signingkey \# Sets GPG key to use for signing

git commit -m “Implement feature Y” –gpg-sign \# Or -S, GPG signs commit

git config set commit.gpgsign true \# Sign commits by default  
git commit -m “Implement feature Y” –no-gpg-sign \# Do not sign  
-–

### Refs

HEAD^ \# 1 commit before head  
HEAD^^ \# 2 commits before head  
HEAD~5 \# 5 commits before head

### Branches

\# create a new branch  
git checkout -b $branchname  
git push origin $branchname –set-upstream

\# get a remote branch  
git fetch origin  
git checkout –track origin/$branchname

\# delete local remote-tracking branches (lol)  
git remote prune origin

\# list merged branches  
git branch -a –merged

\# delete remote branch  
git push origin :$branchname

\# go back to previous branch  
git checkout -

### Collaboration

\# Rebase your changes on top of the remote master  
git pull –rebase upstream master

\# Squash multiple commits into one for a cleaner git log  
\# (on the following screen change the word pick to either ‘f’ or ‘s’)  
git rebase -i $commit_ref

### Submodules

\# Import .gitmodules  
git submodule init

\# Clone missing submodules, and checkout commits  
git submodule update –init –recursive

\# Update remote URLs in .gitmodules  
\# (Use when you changed remotes in submodules)  
git submodule sync

### Diff

### Diff with stats

git diff –stat  
app/a.txt | 2 +-  
app/b.txt | 8 ++—-  
2 files changed, 10 insertions(+), 84 deletions(-)

### Just filenames

git diff –summary

### Log options

–oneline  
e11e9f9 Commit message here

–decorate  
shows “(origin/master)”

–graph  
shows graph lines

–date=relative  
“2 hours ago”

### Miscellaneous

#### Cherry pick

git rebase 76acada^

\# get current sha1 (?)  
git show-ref HEAD -s

\# show single commit info  
git log -1 f5a960b5

\# Go back up to root directory  
cd “$(git rev-parse –show-top-level)”

### Short log

$ git shortlog  
$ git shortlog HEAD~20.. \# last 20 commits

James Dean (1):  
Commit here  
Commit there

Frank Sinatra (5):  
Another commit  
This other commit

### Bisect

git bisect start HEAD HEAD~6  
git bisect run npm test  
git checkout refs/bisect/bad \# this is where it screwed up  
git bisect reset

### Manual bisection

git bisect start  
git bisect good \# current version is good

git checkout HEAD~8  
npm test \# see if it’s good  
git bisect bad \# current version is bad

git bisect reset \# abort

### Searching

git log –grep=“fixes things” \# search in commit messages  
git log -S“window.alert” \# search in code  
git log -G“foo.\*” \# search in code (regex)

### GPG Signing

git config set user.signingkey \# Sets GPG key to use for signing

git commit -m “Implement feature Y” –gpg-sign \# Or -S, GPG signs commit

git config set commit.gpgsign true \# Sign commits by default  
git commit -m “Implement feature Y” –no-gpg-sign \# Do not sign

![](https://cdn-images-1.medium.com/max/800/1*yyaUC-O43Gs1qAVkdHrMdw.png)

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

![](https://cdn-images-1.medium.com/max/800/1*3V9VOfPk_hrFdbEAd3j-QQ.png)

### Applications of Tutorial & Cheat Sheet Respectivley (At Bottom Of Tutorial):

### Basics

-   **PEP8** : Python Enhancement Proposals, style-guide for Python.
-   `print` is the equivalent of `console.log`.

> ‘print() == console.log()’

### `#` is used to make comments in your code.

def foo():  
"""  
The foo function does many amazing things that you  
should not question. Just accept that it exists and  
use it with caution.  
"""  
secretThing()

> _Python has a built in help function that let’s you see a description of the source code without having to navigate to it… “-SickNasty … Autor Unknown”_

---

### Numbers

-   Python has three types of numbers:

1.  **Integer**
2.  **Positive and Negative Counting Numbers.**

No Decimal Point

> Created by a literal non-decimal point number … **or** … with the `_int()_` constructor.

print(3) \# =&gt; 3  
print(int(19)) \# =&gt; 19  
print(int()) \# =&gt; 0

**3. Complex Numbers**

> Consist of a real part and imaginary part.

#### Boolean is a subtype of integer in Python.![🤷‍♂️](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f937-200d-2642-fe0f.svg)

> If you came from a background in JavaScript and learned to accept the premise(s) of the following meme…

![](https://cdn-images-1.medium.com/max/800/0*eC4EvZcv6hhH88jX.png)

> Than I am sure you will find the means to suspend your disbelief.

print(2.24) \# =&gt; 2.24  
print(2.) \# =&gt; 2.0  
print(float()) \# =&gt; 0.0  
print(27e-5) \# =&gt; 0.00027

### KEEP IN MIND:

> **The** `**i**` **is switched to a** `**j**` **in programming.**

T\*his is because the letter i is common place as the de facto index for any and all enumerable entities so it just makes sense not to compete for name-**\*_space_** _when there’s another 25 letters that don’t get used for every loop under the sun. My most medium apologies to Leonhard Euler._

print(7j) \# =&gt; 7j  
print(5.1+7.7j)) \# =&gt; 5.1+7.7j  
print(complex(3, 5)) \# =&gt; 3+5j  
print(complex(17)) \# =&gt; 17+0j  
print(complex()) \# =&gt; 0j

-   **Type Casting** : The process of converting one number to another.

\# Using Float  
print(17) \# =&gt; 17  
print(float(17)) \# =&gt; 17.0

\# Using Int  
print(17.0) \# =&gt; 17.0  
print(int(17.0)) \# =&gt; 17

\# Using Str  
print(str(17.0) + ’ and ’ + str(17)) \# =&gt; 17.0 and 17

**The arithmetic operators are the same between JS and Python, with two additions:**

-   _“\*\*” : Double asterisk for exponent._
-   _“//” : Integer Division._
-   **There are no spaces between math operations in Python.**
-   **Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing** `**Math.floor()**` **in JS.**
-   **There are no** `**++**` **and** `**--**` **in Python, the only shorthand operators are:**

![](https://cdn-images-1.medium.com/max/600/0*Ez_1PZ93N4FfvkRr.png)

---

### Strings

-   Python uses both single and double quotes.
-   You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`
-   Multiline strings use triple quotes.

print(’‘’My instructions are very long so to make them  
more readable in the code I am putting them on  
more than one line. I can even include “quotes”  
of any kind because they won’t get confused with  
the end of the string!’’’)

**Use the** `**len()**` **function to get the length of a string.**

print(len(“Spaghetti”)) \# =&gt; 9

### **Python uses** `**zero-based indexing**`

#### Python allows negative indexing (thank god!)

print(“Spaghetti”\[-1\]) \# =&gt; i

print(“Spaghetti”\[-4\]) \# =&gt; e

-   Python let’s you use ranges

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… _(mind you that in JS … strings are wrapped in an object (under the hood)… upon which the string methods are actually called. As a immutable privative type_ **_by textbook definition_**\_, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.)\_

print(“Spaghetti”\[1:4\]) \# =&gt; pag  
print(“Spaghetti”\[4:-1\]) \# =&gt; hett  
print(“Spaghetti”\[4:4\]) \# =&gt; (empty string)

-   The end range is exclusive just like `slice` in JS.

\# Shortcut to get from the beginning of a string to a certain index.  
print(“Spaghetti”\[:4\]) \# =&gt; Spag  
print(“Spaghetti”\[:-1\]) \# =&gt; Spaghett

\# Shortcut to get from a certain index to the end of a string.  
print(“Spaghetti”\[1:\]) \# =&gt; paghetti  
print(“Spaghetti”\[-4:\]) \# =&gt; etti

-   The `index` string function is the equiv. of `indexOf()` in JS

print(“Spaghetti”.index(“h”)) \# =&gt; 4  
print(“Spaghetti”.index(“t”)) \# =&gt; 6

-   The `count` function finds out how many times a substring appears in a string… pretty nifty for a hard coded feature of the language.

print(“Spaghetti”.count(“h”)) \# =&gt; 1  
print(“Spaghetti”.count(“t”)) \# =&gt; 2  
print(“Spaghetti”.count(“s”)) \# =&gt; 0  
print(’‘’We choose to go to the moon in this decade and do the other things,  
not because they are easy, but because they are hard, because that goal will  
serve to organize and measure the best of our energies and skills, because that  
challenge is one that we are willing to accept, one we are unwilling to  
postpone, and one which we intend to win, and the others, too.  
’’‘.count(’the’)) \# =&gt; 4

-   **You can use** `**+**` **to concatenate strings, just like in JS.**
-   **You can also use “\*” to repeat strings or multiply strings.**
-   **Use the** `**format()**` **function to use placeholders in a string to input values later on.**

first_name = “Billy”  
last_name = “Bob”  
print(‘Your name is {0} {1}’.format(first_name, last_name)) \# =&gt; Your name is Billy Bob

-   _Shorthand way to use format function is:  
    _`print(f'Your name is {first_name} {last_name}')`

#### Some useful string methods.

-   **Note that in JS** `**join**` **is used on an Array, in Python it is used on String.**

![](https://cdn-images-1.medium.com/max/800/0*eE3E5H0AoqkhqK1z.png)

-   There are also many handy testing methods.

![](https://cdn-images-1.medium.com/max/800/0*Q0CMqFd4PozLDFPB.png)

---

### Variables and Expressions

-   **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.
-   Duck Typing is the fundamental approach of Python.
-   Assignment of a value automatically declares a variable.

a = 7  
b = ‘Marbles’  
print(a) \# =&gt; 7  
print(b) \# =&gt; Marbles

-   **_You can chain variable assignments to give multiple var names the same value._**

#### Use with caution as this is highly unreadable

count = max = min = 0  
print(count) \# =&gt; 0  
print(max) \# =&gt; 0  
print(min) \# =&gt; 0

#### The value and type of a variable can be re-assigned at any time.

a = 17  
print(a) \# =&gt; 17  
a = ‘seventeen’  
print(a) \# =&gt; seventeen

-   `_NaN_` _does not exist in Python, but you can ‘create’ it like so:_`**_print(float("nan"))_**`
-   _Python replaces_ `_null_` _with_ `_none_`_._
-   `**_none_**` **_is an object_** _and can be directly assigned to a variable._

> Using none is a convenient way to check to see why an action may not be operating correctly in your program.

---

### Boolean Data Type

-   One of the biggest benefits of Python is that it reads more like English than JS does.

![](https://cdn-images-1.medium.com/max/800/0*HQpndNhm1Z_xSoHb.png)

\# Logical AND  
print(True and True) \# =&gt; True  
print(True and False) \# =&gt; False  
print(False and False) \# =&gt; False

\# Logical OR  
print(True or True) \# =&gt; True  
print(True or False) \# =&gt; True  
print(False or False) \# =&gt; False

\# Logical NOT  
print(not True) \# =&gt; False  
print(not False and True) \# =&gt; True  
print(not True or False) \# =&gt; False

-   By default, Python considers an object to be true UNLESS it is one of the following:
-   Constant `None` or `False`
-   Zero of any numeric type.
-   Empty Sequence or Collection.
-   `True` and `False` must be capitalized

---

### Comparison Operators

-   Python uses all the same equality operators as JS.
-   In Python, equality operators are processed from left to right.
-   Logical operators are processed in this order:

1.  **NOT**
2.  **AND**
3.  **OR**

> Just like in JS, you can use `parentheses` to change the inherent order of operations.

> **Short Circuit** : Stopping a program when a `true` or `false` has been reached.

![](https://cdn-images-1.medium.com/max/800/0*qHzGRLTOMTf30miT.png)

---

### Identity vs Equality

print (2 == ‘2’) \# =&gt; False  
print (2 is ‘2’) \# =&gt; False

print (“2” == ‘2’) \# =&gt; True  
print (“2” is ‘2’) \# =&gt; True

\# There is a distinction between the number types.  
print (2 == 2.0) \# =&gt; True  
print (2 is 2.0) \# =&gt; False

-   In the Python community it is better to use `is` and `is not` over `==` or `!=`

---

### If Statements

if name == ‘Monica’:  
print(‘Hi, Monica.’)

if name == ‘Monica’:  
print(‘Hi, Monica.’)  
else:  
print(‘Hello, stranger.’)

if name == ‘Monica’:  
print(‘Hi, Monica.’)  
elif age &lt; 12:  
print(‘You are not Monica, kiddo.’)  
elif age &gt; 2000:  
print(‘Unlike you, Monica is not an undead, immortal vampire.’)  
elif age &gt; 100:  
print(‘You are not Monica, grannie.’)

> Remember the order of `elif` statements matter.

---

### While Statements

spam = 0  
while spam &lt; 5:  
print(‘Hello, world.’)  
spam = spam + 1

-   `Break` statement also exists in Python.

spam = 0  
while True:  
print(‘Hello, world.’)  
spam = spam + 1  
if spam &gt;= 5:  
break

-   As are `continue` statements

spam = 0  
while True:  
print(‘Hello, world.’)  
spam = spam + 1  
if spam &lt; 5:  
continue  
break

---

### Try/Except Statements

-   Python equivalent to `try/catch`

a = 321  
try:  
print(len(a))  
except:  
print(‘Silently handle error here’)

# Optionally include a correction to the issue

a = str(a) print(len(a)

a = ‘321’  
try:  
print(len(a))  
except:  
print(‘Silently handle error here’)

# Optionally include a correction to the issue

a = str(a) print(len(a))

-   You can name an error to give the output more specificity.

a = 100  
b = 0  
try:  
c = a / b  
except ZeroDivisionError:  
c = None  
print(c)

-   You can also use the `pass` commmand to by pass a certain error.

a = 100  
b = 0  
try:  
print(a / b)  
except ZeroDivisionError:  
pass

-   The `pass` method won’t allow you to bypass every single error so you can chain an exception series like so:

a = 100  
\# b = “5”  
try:  
print(a / b)  
except ZeroDivisionError:  
pass  
except (TypeError, NameError):  
print(“ERROR!”)

-   You can use an `else` statement to end a chain of `except` statements.

\# tuple of file names  
files = (‘one.txt’, ‘two.txt’, ‘three.txt’)

\# simple loop  
for filename in files:  
try:

# open the file in read mode

f = open(filename, ‘r’)  
except OSError:

# handle the case where file does not exist or permission is denied

print(‘cannot open file’, filename)  
else:

# do stuff with the file object (f)

print(filename, ‘opened successfully’)  
print(‘found’, len(f.readlines()), ‘lines’)  
f.close()

-   `finally` is used at the end to clean up all actions under any circumstance.

def divide(x, y):  
try:  
result = x / y  
except ZeroDivisionError:  
print(“Cannot divide by zero”)  
else:  
print(“Result is”, result)  
finally:  
print(“Finally…”)

-   Using duck typing to check to see if some value is able to use a certain method.

\# Try a number - nothing will print out  
a = 321  
if hasattr(a, ‘\_\_len\_\_’):  
print(len(a))

\# Try a string - the length will print out (4 in this case)  
b = “5555”  
if hasattr(b, ‘\_\_len\_\_’):  
print(len(b))

---

### Pass

-   Pass Keyword is required to write the JS equivalent of :

if (true) {  
}

while (true) {}

if True:  
pass

while True:  
pass

---

### Functions

-   **Function definition includes:**
-   **The** `**def**` **keyword**
-   **The name of the function**
-   **A list of parameters enclosed in parentheses.**
-   **A colon at the end of the line.**
-   **One tab indentation for the code to run.**
-   **You can use default parameters just like in JS**

def greeting(name, saying=“Hello”):  
print(saying, name)

greeting(“Monica”)  
\# Hello Monica

greeting(“Barry”, “Hey”)  
\# Hey Barry

#### **Keep in mind, default parameters must always come after regular parameters.**

\# THIS IS BAD CODE AND WILL NOT RUN  
def increment(delta=1, value):  
return delta + value

-   _You can specify arguments by name without destructuring in Python._

def greeting(name, saying=“Hello”):  
print(saying, name)

\# name has no default value, so just provide the value  
\# saying has a default value, so use a keyword argument  
greeting(“Monica”, saying=“Hi”)

-   The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

`toUpper = lambda s: s.upper()`

---

### Notes

#### Formatted Strings

> Remember that in Python join() is called on a string with an array/list passed in as the argument.  
> Python has a very powerful formatting engine.  
> format() is also applied directly to strings.

shopping_list = \[‘bread’,’milk’,’eggs’\]  
print(‘,’.join(shopping_list))

### Comma Thousands Separator

print(‘{:,}’.format(1234567890))  
‘1,234,567,890’

### Date and Time

d = datetime.datetime(2020, 7, 4, 12, 15, 58)  
print(‘{:%Y-%m-%d %H:%M:%S}’.format(d))  
‘2020-07-04 12:15:58’

### Percentage

points = 190  
total = 220  
print(‘Correct answers: {:.2%}’.format(points/total))  
Correct answers: 86.36%

### Data Tables

width=8  
print(‘ decimal hex binary’)  
print(‘-’\*27)  
for num in range(1,16):  
for base in ‘dXb’:  
print(‘{0:{width}{base}}’.format(num, base=base, width=width), end=’ ‘)  
print()  
Getting Input from the Command Line  
Python runs synchronously, all programs and processes will stop when listening for a user input.  
The input function shows a prompt to a user and waits for them to type ‘ENTER’.  
Scripts vs Programs  
Programming Script : A set of code that runs in a linear fashion.  
The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.

**Python can be used to display html, css, and JS.**  
_It is common to use Python as an API (Application Programming Interface)_

#### Structured Data

#### Sequence : The most basic data structure in Python where the index determines the order.

> List  
> Tuple  
> Range  
> Collections : Unordered data structures, hashable values.

---

#### Dictionaries

Sets

#### Iterable : Generic name for a sequence or collection; any object that can be iterated through.

#### Can be mutable or immutable.

Built In Data Types

---

### Lists are the python equivalent of arrays.

empty_list = \[\]  
departments = \[‘HR’,’Development’,’Sales’,’Finance’,’IT’,’Customer Support’\]

### You can instantiate

specials = list()

#### Test if a value is in a list.

print(1 in \[1, 2, 3\]) \#&gt; True  
print(4 in \[1, 2, 3\]) \#&gt; False  
\# Tuples : Very similar to lists, but they are immutable

#### Instantiated with parentheses

time_blocks = (‘AM’,’PM’)

#### Sometimes instantiated without

colors = ‘red’,’blue’,’green’  
numbers = 1, 2, 3

#### Tuple() built in can be used to convert other data into a tuple

tuple(‘abc’) \# returns (‘a’, ‘b’, ‘c’)  
tuple(\[1,2,3\]) \# returns (1, 2, 3)  
\# Think of tuples as constant variables.

#### Ranges : A list of numbers which can’t be changed; often used with for loops.

**Declared using one to three parameters**.

> Start : opt. default 0, first \# in sequence.  
> Stop : required next number past the last number in the sequence.  
> Step : opt. default 1, difference between each number in the sequence.

range(5) \# \[0, 1, 2, 3, 4\]  
range(1,5) \# \[1, 2, 3, 4\]  
range(0, 25, 5) \# \[0, 5, 10, 15, 20\]  
range(0) \# \[ \]  
for let (i = 0; i &lt; 5; i++)  
for let (i = 1; i &lt; 5; i++)  
for let (i = 0; i &lt; 25; i+=5)  
for let(i = 0; i = 0; i++)  
\# Keep in mind that stop is not included in the range.

#### Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.

#### Mutable.

a = {‘one’:1, ‘two’:2, ‘three’:3}  
b = dict(one=1, two=2, three=3)  
c = dict(\[(‘two’, 2), (‘one’, 1), (‘three’, 3)\])  
\# a, b, and c are all equal

**_Declared with curly braces of the built in dict()_**

> _Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal._

**Use the in operator to see if a key exists in a dictionary.**

S**ets : Unordered collection of distinct objects; objects that need to be hashable.**

> _Always be unique, duplicate items are auto dropped from the set._

#### Common Uses:

> Removing Duplicates  
> Membership Testing  
> Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.

**Standard Set is mutable, Python has a immutable version called frozenset.  
Sets created by putting comma seperated values inside braces:**

school_bag = {‘book’,’paper’,’pencil’,’pencil’,’book’,’book’,’book’,’eraser’}  
print(school_bag)

#### Also can use set constructor to automatically put it into a set.

letters = set(‘abracadabra’)  
print(letters)  
\#Built-In Functions  
\#Functions using iterables

**filter(function, iterable) : creates new iterable of the same type which includes each item for which the function returns true.**

**map(function, iterable) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.**

**sorted(iterable, key=None, reverse=False) : creates a new sorted list from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate(iterable, start=0) : starts with a sequence and converts it to a series of tuples**

quarters = \[‘First’, ‘Second’, ‘Third’, ‘Fourth’\]  
print(enumerate(quarters))  
print(enumerate(quarters, start=1))

#### (0, ‘First’), (1, ‘Second’), (2, ‘Third’), (3, ‘Fourth’)

#### (1, ‘First’), (2, ‘Second’), (3, ‘Third’), (4, ‘Fourth’)

> zip(\*iterables) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.  
> Functions that analyze iterable

**len(iterable) : returns the count of the number of items.**

**max(\*args, key=None) : returns the largest of two or more arguments.**

**max(iterable, key=None) : returns the largest item in the iterable.**

_key optional function which converts an item to a value to be compared.  
min works the same way as max_

**sum(iterable) : used with a list of numbers to generate the total.**

_There is a faster way to concatenate an array of strings into one string, so do not use sum for that._

**any(iterable) : returns True if any items in the iterable are true.**

**all(iterable) : returns True is all items in the iterable are true.**

### Working with dictionaries

**dir(dictionary) : returns the list of keys in the dictionary.  
Working with sets**

**Union : The pipe | operator or union(\*sets) function can be used to produce a new set which is a combination of all elements in the provided set.**

a = {1, 2, 3}  
b = {2, 4, 6}  
print(a | b) \# =&gt; {1, 2, 3, 4, 6}

#### Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets.

a = {1, 2, 3}  
b = {2, 4, 6}  
print(a & b) \# =&gt; {2}  
Difference : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.

**Symmetric Difference : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.**

a = {1, 2, 3}  
b = {2, 4, 6}  
print(a — b) \# =&gt; {1, 3}  
print(b — a) \# =&gt; {4, 6}  
print(a ^ b) \# =&gt; {1, 3, 4, 6}

---

### \*\*For Statements

In python, there is only one for loop.\*\*

Always Includes:

> 1.  The for keyword
> 2.  A variable name
> 3.  The ‘in’ keyword
> 4.  An iterable of some kid
> 5.  A colon
> 6.  On the next line, an indented block of code called the for clause.

**You can use break and continue statements inside for loops as well.**

**You can use the range function as the iterable for the for loop.**

print(‘My name is’)  
for i in range(5):  
print(‘Carlita Cinco (‘ + str(i) + ‘)’)

total = 0  
for num in range(101):  
total += num  
print(total)  
Looping over a list in Python  
for c in \[‘a’, ‘b’, ‘c’\]:  
print(c)

lst = \[0, 1, 2, 3\]  
for i in lst:  
print(i)

**_Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list._**

supplies = \[‘pens’, ‘staplers’, ‘flame-throwers’, ‘binders’\]  
for i in range(len(supplies)):  
print(‘Index ‘ + str(i) + ‘ in supplies is: ‘ + supplies\[i\])

**You can loop and destructure at the same time.**

l = 1, 2\], \[3, 4\], \[5, 6  
for a, b in l:  
print(a, ‘, ‘, b)

> Prints 1, 2

> Prints 3, 4

> Prints 5, 6

**You can use values() and keys() to loop over dictionaries.**

spam = {‘color’: ‘red’, ‘age’: 42}  
for v in spam.values():  
print(v)

_Prints red_

_Prints 42_

for k in spam.keys():  
print(k)

_Prints color_

_Prints age_

**For loops can also iterate over both keys and values.**

**Getting tuples**

for i in spam.items():  
print(i)

_Prints (‘color’, ‘red’)_

_Prints (‘age’, 42)_

_Destructuring to values_

for k, v in spam.items():  
print(‘Key: ‘ + k + ‘ Value: ‘ + str(v))

_Prints Key: age Value: 42_

_Prints Key: color Value: red_

**Looping over string**

for c in “abcdefg”:  
print(c)

**When you order arguments within a function or function call, the args need to occur in a particular order:**

_formal positional args._

\*args

_keyword args with default values_

\*\*kwargs

def example(arg_1, arg_2, \*args, \*\*kwargs):  
pass

def example2(arg_1, arg_2, \*args, kw_1=”shark”, kw_2=”blowfish”, \*\*kwargs):  
pass

---

### **Importing in Python**

**Modules are similar to packages in Node.js**  
Come in different types:

Built-In,

Third-Party,

Custom.

**All loaded using import statements.**

---

### **Terms**

> module : Python code in a separate file.  
> package : Path to a directory that contains modules.  
> [**init.py**](http://init.py/) : Default file for a package.  
> submodule : Another file in a module’s folder.  
> function : Function in a module.

**A module can be any file but it is usually created by placing a special file init.py into a folder. pic**

_Try to avoid importing with wildcards in Python._

_Use multiple lines for clarity when importing._

from urllib.request import (  
HTTPDefaultErrorHandler as ErrorHandler,  
HTTPRedirectHandler as RedirectHandler,  
Request,  
pathname2url,  
url2pathname,  
urlopen,  
)

---

### Watching Out for Python 2

**Python 3 removed &lt;&gt; and only uses !=**

**format() was introduced with P3**

**All strings in P3 are unicode and encoded.  
md5 was removed.**

**ConfigParser was renamed to configparser  
sets were killed in favor of set() class.**

#### **print was a statement in P2, but is a function in P3.**

### Topics revisited (in python syntax)

<a href="https://gist.github.com/bgoonz/82154f50603f73826c27377ebaa498b5" class="uri">https://gist.github.com/bgoonz/82154f50603f73826c27377ebaa498b5</a>

### Cheat Sheet:

<a href="https://gist.github.com/bgoonz/282774d28326ff83d8b42ae77ab1fee3" class="uri">https://gist.github.com/bgoonz/282774d28326ff83d8b42ae77ab1fee3</a>

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

### Python Cheat Sheet:

<a href="https://gist.github.com/bgoonz/999163a278b987fe47fb247fd4d66904" class="uri">https://gist.github.com/bgoonz/999163a278b987fe47fb247fd4d66904</a>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a><a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

### Fetch

fetch(‘/data.json’) .then(response =&gt; response.json()) .then(data =&gt; { console.log(data) }) .catch(err =&gt; …)

### Response

fetch(‘/data.json’).then(res =&gt; { res.text() // response body (=&gt; Promise) res.json() // parse via JSON (=&gt; Promise) res.status //=&gt; 200 res.statusText //=&gt; ‘OK’ res.redirected //=&gt; false res.ok //=&gt; true res.url //=&gt; ‘http://site.com/data.json’ res.type //=&gt; ‘basic’ // (‘cors’ ‘default’ ‘error’ // ‘opaque’ ‘opaqueredirect’)

res.headers.get(‘Content-Type’)})

### Request options

fetch(‘/data.json’, { method: ‘post’, body: new FormData(form), // post body body: JSON.stringify(…),

headers: { ‘Accept’: ‘application/json’ },

credentials: ‘same-origin’, // send cookies credentials: ‘include’, // send cookies, even in CORS

})

### Catching errors

fetch(‘/data.json’) .then(checkStatus)

function checkStatus (res) { if (res.status &gt;= 200 && res.status &lt; 300) { return res } else { let err = new Error(res.statusText) err.response = res throw err }}

Non-2xx responses are still successful requests. Use another function to turn them to errors.

### Using with node.js

const fetch = require(‘isomorphic-fetch’)

See: [isomorphic-fetch](https://npmjs.com/package/isomorphic-fetch) _(npmjs.com)_

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

### Settings

app.set(‘x’, ‘yyy’)app.get(‘x’) //=&gt; ‘yyy’

app.enable(‘trust proxy’)app.disable(‘trust proxy’)

app.enabled(‘trust proxy’) //=&gt; true

### Enviorment

app.get(‘env’)

### Config

app.configure(‘production’, function() { app.set…})

### Wares

app.use(express.static(\_\_dirname + ‘/public’))app.use(express.logger())

### Helpers

app.locals({ title: “MyApp”,})

---

### Request & response

### Request

// GET /user/tjreq.path //=&gt; “/user/tj”req.url //=&gt; “/user/tj”req.xhr //=&gt; true|falsereq.method //=&gt; “GET”req.paramsreq.params.name //=&gt; “tj”req.params\[0\]

// GET /search?q=tobi+ferretreq.query.q // =&gt; “tobi ferret”

req.cookies

req.accepted// \[ { value: ‘application/json’, quality: 1, type: ‘application’, subtype: ‘json’ },// { value: ‘text/html’, quality: 0.5, type: ‘text’,subtype: ‘html’ } \]

req.is(‘html’)req.is(‘text/html’)

req.headersreq.headers\[‘host’\]req.headers\[‘user-agent’\]req.headers\[‘accept-encoding’\]req.headers\[‘accept-language’\]

### Response

res.redirect(‘/’)res.redirect(301, ‘/’)

res.set(‘Content-Type’, ‘text/html’)

res.send(‘hi’)res.send(200, ‘hi’)

res.json({ a: 2 })

Heroku is an web application that makes deploying applications easy for a beginner.

<a href="https://gist.github.com/bgoonz/7bf839da876126324957e1f0f0feb578" class="uri">https://gist.github.com/bgoonz/7bf839da876126324957e1f0f0feb578</a>

Before you begin deploying, make sure to remove any `console.log`‘s or `debugger`‘s in any production code. You can search your entire project folder if you are using them anywhere.

You will set up Heroku to run on a production, not development, version of your application. When a Node.js application like yours is pushed up to Heroku, it is identified as a Node.js application because of the `package.json` file. It runs `npm install` automatically. Then, if there is a `heroku-postbuild` script in the `package.json` file, it will run that script. Afterwards, it will automatically run `npm start`.

In the following phases, you will configure your application to work in production, not just in development, and configure the `package.json` scripts for `install`, `heroku-postbuild` and `start` scripts to install, build your React application, and start the Express production server.

### Phase 1: Heroku Connection

If you haven’t created a Heroku account yet, create one [here](https://signup.heroku.com/).

Add a new application in your [Heroku dashboard](https://dashboard.heroku.com/) named whatever you want. Under the “Resources” tab in your new application, click “Find more add-ons” and add the “Heroku Postgres” add-on with the free Hobby Dev setting.

In your terminal, install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line). Afterwards, login to Heroku in your terminal by running the following:

heroku login

Add Heroku as a remote to your project’s git repository in the following command and replace `<name-of-Heroku-app>` with the name of the application you created in the [Heroku dashboard](https://dashboard.heroku.com/).

heroku git:remote -a

Next, you will set up your Express + React application to be deployable to Heroku.

### Phase 2: Setting up your Express + React application

Right now, your React application is on a different localhost port than your Express application. However, since your React application only consists of static files that don’t need to bundled continuously with changes in production, your Express application can serve the React assets in production too. These static files live in the `frontend/build` folder after running `npm run build` in the `frontend` folder.

Add the following changes into your `backend/routes.index.js` file.

At the root route, serve the React application’s static `index.html` file along with `XSRF-TOKEN` cookie. Then serve up all the React application’s static files using the `express.static` middleware. Serve the `index.html` and set the `XSRF-TOKEN` cookie again on all routes that don’t start in `/api`. You should already have this set up in `backend/routes/index.js` which should now look like this:

// backend/routes/index.jsconst express = require(‘express’);const router = express.Router();const apiRouter = require(‘./api’);

router.use(‘/api’, apiRouter);

// Static routes// Serve React build files in productionif (process.env.NODE_ENV === ‘production’) { const path = require(‘path’); // Serve the frontend’s index.html file at the root route router.get(‘/’, (req, res) =&gt; { res.cookie(‘XSRF-TOKEN’, req.csrfToken()); res.sendFile( path.resolve(\_\_dirname, ‘../../frontend’, ‘build’, ‘index.html’) ); });

// Serve the static assets in the frontend’s build folder router.use(express.static(path.resolve(“../frontend/build”)));

// Serve the frontend’s index.html file at all other routes NOT starting with /api router.get(/^(?!/?api).\*/, (req, res) =&gt; { res.cookie(‘XSRF-TOKEN’, req.csrfToken()); res.sendFile( path.resolve(\_\_dirname, ‘../../frontend’, ‘build’, ‘index.html’) ); });}

// Add a XSRF-TOKEN cookie in developmentif (process.env.NODE_ENV !== ‘production’) { router.get(‘/api/csrf/restore’, (req, res) =&gt; { res.cookie(‘XSRF-TOKEN’, req.csrfToken()); res.status(201).json({}); });}

module.exports = router;

Your Express backend’s `package.json` should include scripts to run the `sequelize` CLI commands.

The `backend/package.json`‘s scripts should now look like this:

“scripts”: { “sequelize”: “sequelize”, “sequelize-cli”: “sequelize-cli”, “start”: “per-env”, “start:development”: “nodemon -r dotenv/config ./bin/www”, “start:production”: “node ./bin/www” },

Initialize a `package.json` file at the very root of your project directory (outside of both the `backend` and `frontend` folders). The scripts defined in this `package.json` file will be run by Heroku, not the scripts defined in the `backend/package.json` or the `frontend/package.json`.

When Heroku runs `npm install`, it should install packages for both the `backend` and the `frontend`. Overwrite the `install` script in the root `package.json` with:

npm –prefix backend install backend && npm –prefix frontend install frontend

This will run `npm install` in the `backend` folder then run `npm install` in the `frontend` folder.

Next, define a `heroku-postbuild` script that will run the `npm run build` command in the `frontend` folder. Remember, Heroku will automatically run this script after running `npm install`.

Define a `sequelize` script that will run `npm run sequelize` in the `backend` folder.

Finally, define a `start` that will run `npm start` in the \`backend folder.

The root `package.json`‘s scripts should look like this:

“scripts”: { “heroku-postbuild”: “npm run build –prefix frontend”, “install”: “npm –prefix backend install backend && npm –prefix frontend install frontend”, “dev:backend”: “npm install –prefix backend start”, “dev:frontend”: “npm install –prefix frontend start”, “sequelize”: “npm run –prefix backend sequelize”, “sequelize-cli”: “npm run –prefix backend sequelize-cli”, “start”: “npm start –prefix backend” },

The `dev:backend` and `dev:frontend` scripts are optional and will not be used for Heroku.

Finally, commit your changes.

### Phase 3: Deploy to Heroku

Once you’re finished setting this up, navigate to your application’s Heroku dashboard. Under “Settings” there is a section for “Config Vars”. Click the `Reveal Config Vars` button to see all your production environment variables. You should have a `DATABASE_URL` environment variable already from the Heroku Postgres add-on.

Add environment variables for `JWT_EXPIRES_IN` and `JWT_SECRET` and any other environment variables you need for production.

You can also set environment variables through the Heroku CLI you installed earlier in your terminal. See the docs for [Setting Heroku Config Variables](https://devcenter.heroku.com/articles/config-vars).

Push your project to Heroku. Heroku only allows the `master` branch to be pushed. But, you can alias your branch to be named `master` when pushing to Heroku. For example, to push a branch called `login-branch` to `master` run:

git push heroku login-branch:master

If you do want to push the `master` branch, just run:

git push heroku master

You may want to make two applications on Heroku, the `master` branch site that should have working code only. And your `staging` site that you can use to test your work in progress code.

Now you need to migrate and seed your production database.

Using the Heroku CLI, you can run commands inside of your production application just like in development using the `heroku run` command.

For example to migrate the production database, run:

heroku run npm run sequelize db:migrate

To seed the production database, run:

heroku run npm run sequelize db:seed:all

Note: You can interact with your database this way as you’d like, but beware that `db:drop` cannot be run in the Heroku environment. If you want to drop and create the database, you need to remove and add back the “Heroku Postgres” add-on.

Another way to interact with the production application is by opening a bash shell through your terminal by running:

heroku bash

In the opened shell, you can run things like `npm run sequelize db:migrate`.

Open your deployed site and check to see if you successfully deployed your Express + React application to Heroku!

If you see an `Application Error` or are experiencing different behavior than what you see in your local environment, check the logs by running:

heroku logs

If you want to open a connection to the logs to continuously output to your terminal, then run:

heroku logs –tail

The logs may clue you into why you are experiencing errors or different behavior.

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

#### [CODEX](http://medium.com/codex)

#### **Each table is made up of rows and columns. If you think of a table as a grid, the column go from left to right across the grid and each entry of data is listed down as a row.**

Each row in a relational is uniquely identified by a primary key. This can be by one or more sets of column values. In most scenarios it is a single column, such as employeeID.

Every relational table has one primary key. Its purpose is to uniquely identify each row in the database. No two rows can have the same primary key value. The practical result of this is that you can select every single row by just knowing its primary key.

SQL Server UNIQUE constraints allow you to ensure that the data stored in a column, or a group of columns, is unique among the rows in a table.

Although both UNIQUE and [PRIMARY KEY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/) constraints enforce the uniqueness of data, you should use the UNIQUE constraint instead of PRIMARY KEY constraint when you want to enforce the uniqueness of a column, or a group of columns, that are not the primary key columns.

Different from PRIMARY KEY constraints, UNIQUE constraints allow NULL. Moreover, UNIQUE constraints treat the NULL as a regular value, therefore, it only allows one NULL per column.

![](https://cdn-images-1.medium.com/max/800/1*kgzq5NoL5ejBGvuZ4qLDaQ.png)

![](https://cdn-images-1.medium.com/max/800/1*hr8DccnpiR2Uj5UI3iLsOQ.png)

![](https://cdn-images-1.medium.com/max/800/1*RiWJpwpVMdge3Sqofn3srA.png)

![](https://cdn-images-1.medium.com/max/800/1*GN5aSwENOvntpfk90rHYFg.png)

Create a new [role](https://www.postgresqltutorial.com/postgresql-roles/):

CREATE ROLE role_name;

Create a new role with a `username` and `password`:

CREATE ROLE username NOINHERIT LOGIN PASSWORD password;

Change role for the current session to the `new_role`:

SET ROLE new_role;

Allow `role_1` to set its role as `role_2:`

GRANT role_2 TO role_1;

### Managing databases

[Create a new database](https://www.postgresqltutorial.com/postgresql-create-database/):

CREATE DATABASE \[IF NOT EXISTS\] db_name;

[Delete a database permanently](https://www.postgresqltutorial.com/postgresql-drop-database/):

DROP DATABASE \[IF EXISTS\] db_name;

### Managing tables

[Create a new table](https://www.postgresqltutorial.com/postgresql-create-table/) or a [temporary table](https://www.postgresqltutorial.com/postgresql-temporary-table/)

CREATE \[TEMP\] TABLE \[IF NOT EXISTS\] table_name( pk SERIAL PRIMARY KEY, c1 type(size) NOT NULL, c2 type(size) NULL, …);

[Add a new column](https://www.postgresqltutorial.com/postgresql-add-column/) to a table:

ALTER TABLE table_name ADD COLUMN new_column_name TYPE;

[Drop a column](https://www.postgresqltutorial.com/postgresql-drop-column/) in a table:

ALTER TABLE table_name DROP COLUMN column_name;

[Rename a column](https://www.postgresqltutorial.com/postgresql-rename-column/):

ALTER TABLE table_name RENAME column_name TO new_column_name;

Set or remove a default value for a column:

ALTER TABLE table_name ALTER COLUMN \[SET DEFAULT value | DROP DEFAULT\]

Add a [primary key](https://www.postgresqltutorial.com/postgresql-primary-key/) to a table.

ALTER TABLE table_name ADD PRIMARY KEY (column,…);

Remove the primary key from a table.

ALTER TABLE table_nameDROP CONSTRAINT primary_key_constraint_name;

[Rename a table](https://www.postgresqltutorial.com/postgresql-rename-table/).

ALTER TABLE table_name RENAME TO new_table_name;

[Drop a table](https://www.postgresqltutorial.com/postgresql-drop-table/) and its dependent objects:

DROP TABLE \[IF EXISTS\] table_name CASCADE;

### Managing views

[Create a view](https://www.postgresqltutorial.com/managing-postgresql-views/):

CREATE OR REPLACE view_name ASquery;

[Create a recursive view](https://www.postgresqltutorial.com/postgresql-recursive-view/):

CREATE RECURSIVE VIEW view_name(column_list) ASSELECT column_list;

[Create a materialized view](https://www.postgresqltutorial.com/postgresql-materialized-views/):

CREATE MATERIALIZED VIEW view_nameASqueryWITH \[NO\] DATA;

Refresh a materialized view:

REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;

Drop a view:

DROP VIEW \[ IF EXISTS \] view_name;

Drop a materialized view:

DROP MATERIALIZED VIEW view_name;

Rename a view:

ALTER VIEW view_name RENAME TO new_name;

### Managing indexes

Creating an index with the specified name on a table

CREATE \[UNIQUE\] INDEX index_nameON table (column,…)

Removing a specified index from a table

DROP INDEX index_name;

### Querying data from tables

Query all data from a table:

SELECT \* FROM table_name;

Query data from specified columns of all rows in a table:

SELECT column_listFROM table;

Query data and select only unique rows:

SELECT DISTINCT (column)FROM table;

Query data from a table with a filter:

SELECT \*FROM tableWHERE condition;

Assign an [alias](https://www.postgresqltutorial.com/postgresql-alias/) to a column in the result set:

SELECT column_1 AS new_column_1, …FROM table;

Query data using the `[LIKE](https://www.postgresqltutorial.com/postgresql-like/)` operator:

SELECT \* FROM table_nameWHERE column LIKE ‘%value%’

Query data using the `[BETWEEN](https://www.postgresqltutorial.com/postgresql-between/)` operator:

SELECT \* FROM table_nameWHERE column BETWEEN low AND high;

Query data using the `[IN](https://www.postgresqltutorial.com/postgresql-in/)` operator:

SELECT \* FROM table_nameWHERE column IN (value1, value2,…);

Constrain the returned rows with the `[LIMIT](https://www.postgresqltutorial.com/postgresql-limit/)` clause:

SELECT \* FROM table_nameLIMIT limit OFFSET offsetORDER BY column_name;

Query data from multiple using the [inner join](https://www.postgresqltutorial.com/postgresql-inner-join/), [left join](https://www.postgresqltutorial.com/postgresql-left-join/), [full outer join](https://www.postgresqltutorial.com/postgresql-full-outer-join/), [cross join](https://www.postgresqltutorial.com/postgresql-cross-join/) and [natural join](https://www.postgresqltutorial.com/postgresql-natural-join/):

SELECT _FROM table1INNER JOIN table2 ON conditionsSELECT_ FROM table1LEFT JOIN table2 ON conditionsSELECT _FROM table1FULL OUTER JOIN table2 ON conditionsSELECT_ FROM table1CROSS JOIN table2;SELECT \*FROM table1NATURAL JOIN table2;

Return the number of rows of a table.

SELECT COUNT (\*)FROM table_name;

Sort rows in ascending or descending order:

SELECT select_listFROM tableORDER BY column ASC \[DESC\], column2 ASC \[DESC\],…;

Group rows using `[GROUP BY](https://www.postgresqltutorial.com/postgresql-group-by/)` clause.

SELECT \*FROM tableGROUP BY column_1, column_2, …;

Filter groups using the `[HAVING](https://www.postgresqltutorial.com/postgresql-having/)` clause.

SELECT \*FROM tableGROUP BY column_1HAVING condition;

### Set operations

Combine the result set of two or more queries with `[UNION](https://www.postgresqltutorial.com/postgresql-union/)` operator:

SELECT \* FROM table1UNIONSELECT \* FROM table2;

Minus a result set using `[EXCEPT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-except/)` operator:

SELECT \* FROM table1EXCEPTSELECT \* FROM table2;

Get intersection of the result sets of two queries:

SELECT \* FROM table1INTERSECTSELECT \* FROM table2;

### Modifying data

[Insert a new row into a table](https://www.postgresqltutorial.com/postgresql-insert/):

INSERT INTO table(column1,column2,…)VALUES(value_1,value_2,…);

Insert multiple rows into a table:

INSERT INTO table_name(column1,column2,…)VALUES(value_1,value_2,…), (value_1,value_2,…), (value_1,value_2,…)…

[Update](https://www.postgresqltutorial.com/postgresql-update/) data for all rows:

UPDATE table_nameSET column_1 = value_1, …;

Update data for a set of rows specified by a condition in the `WHERE` clause.

UPDATE tableSET column_1 = value_1, …WHERE condition;

[Delete all rows](https://www.postgresqltutorial.com/postgresql-delete/) of a table:

DELETE FROM table_name;

Delete specific rows based on a condition:

DELETE FROM table_nameWHERE condition;

### Performance

Show the query plan for a query:

EXPLAIN query;

Show and execute the query plan for a query:

EXPLAIN ANALYZE query;

Collect statistics:

ANALYZE table_name;

---

### Postgres & JSON:

### Creating the DB and the Table

DROP DATABASE IF EXISTS books_db;CREATE DATABASE books_db WITH ENCODING=‘UTF8’ TEMPLATE template0;

DROP TABLE IF EXISTS books;

CREATE TABLE books ( id SERIAL PRIMARY KEY, client VARCHAR NOT NULL, data JSONb NOT NULL);

### Populating the DB

INSERT INTO books(client, data) values( ‘Joe’, ‘{ “title”: “Siddhartha”, “author”: { “first_name”: “Herman”, “last_name”: “Hesse” } }’ ); INSERT INTO books(client, data) values(‘Jenny’, ‘{ “title”: “Bryan Guner”, “author”: { “first_name”: “Jack”, “last_name”: “Kerouac” } }’); INSERT INTO books(client, data) values(‘Jenny’, ‘{ “title”: “100 años de soledad”, “author”: { “first_name”: “Gabo”, “last_name”: “Marquéz” } }’);

Lets see everything inside the table books:

SELECT \* FROM books;

Output:

![](https://cdn-images-1.medium.com/max/800/0*GOQQ0qNGak2yIrtQ)

### `->` operator returns values out of JSON columns

Selecting 1 column:

SELECT client, data-&gt;‘title’ AS title FROM books;

Output:

![](https://cdn-images-1.medium.com/max/800/0*OIVYOfYcbVh65Mt5)

Selecting 2 columns:

SELECT client, data-&gt;‘title’ AS title, data-&gt;‘author’ AS author FROM books;

Output:

![](https://cdn-images-1.medium.com/max/800/0*fEzPkSY8yGexKOk4)

### `->` vs `->>`

The `->` operator returns the original JSON type (which might be an object), whereas `->>` returns text.

### Return NESTED objects

You can use the `->` to return a nested object and thus chain the operators:

SELECT client, data-&gt;‘author’-&gt;‘last_name’ AS author FROM books;

Output:

![](https://cdn-images-1.medium.com/max/800/0*lwy8bR7igaroMXeb)

### Filtering

Select rows based on a value inside your JSON:

SELECT client, data-&gt;‘title’ AS title FROM books WHERE data-&gt;‘title’ = ‘“Bryan Guner”’;

Notice WHERE uses `->` so we must compare to JSON `'"Bryan Guner"'`

Or we could use `->>` and compare to `'Bryan Guner'`

Output:

![](https://cdn-images-1.medium.com/max/800/0*poASndLoU71qlXqE)

### Nested filtering

Find rows based on the value of a nested JSON object:

SELECT client, data-&gt;‘title’ AS title FROM books WHERE data-&gt;‘author’-&gt;&gt;‘last_name’ = ‘Kerouac’;

Output:

![](https://cdn-images-1.medium.com/max/800/0*R1kOhDK19ntdUYkq)

### A real world example

CREATE TABLE events ( name varchar(200), visitor_id varchar(200), properties json, browser json);

We’re going to store events in this table, like pageviews. Each event has properties, which could be anything (e.g. current page) and also sends information about the browser (like OS, screen resolution, etc). Both of these are completely free form and could change over time (as we think of extra stuff to track).

INSERT INTO events VALUES ( ‘pageview’, ‘1’, ‘{ “page”: “/” }’, ‘{ “name”: “Chrome”, “os”: “Mac”, “resolution”: { “x”: 1440, “y”: 900 } }’);INSERT INTO events VALUES ( ‘pageview’, ‘2’, ‘{ “page”: “/” }’, ‘{ “name”: “Firefox”, “os”: “Windows”, “resolution”: { “x”: 1920, “y”: 1200 } }’);INSERT INTO events VALUES ( ‘pageview’, ‘1’, ‘{ “page”: “/account” }’, ‘{ “name”: “Chrome”, “os”: “Mac”, “resolution”: { “x”: 1440, “y”: 900 } }’);INSERT INTO events VALUES ( ‘purchase’, ‘5’, ‘{ “amount”: 10 }’, ‘{ “name”: “Firefox”, “os”: “Windows”, “resolution”: { “x”: 1024, “y”: 768 } }’);INSERT INTO events VALUES ( ‘purchase’, ‘15’, ‘{ “amount”: 200 }’, ‘{ “name”: “Firefox”, “os”: “Windows”, “resolution”: { “x”: 1280, “y”: 800 } }’);INSERT INTO events VALUES ( ‘purchase’, ‘15’, ‘{ “amount”: 500 }’, ‘{ “name”: “Firefox”, “os”: “Windows”, “resolution”: { “x”: 1280, “y”: 800 } }’);

Now lets select everything:

SELECT \* FROM events;

Output:

![](https://cdn-images-1.medium.com/max/800/0*ZPHfB4FxjSIlAVxL)

### JSON operators + PostgreSQL aggregate functions

Using the JSON operators, combined with traditional PostgreSQL aggregate functions, we can pull out whatever we want. You have the full might of an RDBMS at your disposal.

-   Lets see browser usage:
-   `SELECT browser->>'name' AS browser, count(browser) FROM events GROUP BY browser->>'name';`

Output:

![](https://cdn-images-1.medium.com/max/800/0*4lEv2DgUk33FeUgo)

-   Total revenue per visitor:

`SELECT visitor_id, SUM(CAST(properties->>'amount' AS integer)) AS total FROM events WHERE CAST(properties->>'amount' AS integer) > 0 GROUP BY visitor_id;`

Output:

![](https://cdn-images-1.medium.com/max/800/0*HxOS3CgwXBJ6A2FP)

-   Average screen resolution
-   `SELECT AVG(CAST(browser->'resolution'->>'x' AS integer)) AS width, AVG(CAST(browser->'resolution'->>'y' AS integer)) AS height FROM events;`

Output:

![](https://cdn-images-1.medium.com/max/800/0*iyv4Iv4Rc8M8mwt1)

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a><a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

![](https://webdevhubcom.files.wordpress.com/2021/03/fe4be-0yjlsk3t9c2_14in1.png)

**_Curating Complexity: A Guide to Big-O Notation_**

-   Why is looking at runtime not a reliable method of calculating time complexity?
-   Not all computers are made equal( some may be stronger and therefore boost our runtime speed )
-   How many background processes ran concurrently with our program that was being tested?
-   We also need to ask if our code remains performant if we increase the size of the input.
-   The real question we need to answering is: `How does our performance scale?`.

### big ‘O’ notation

-   Big O Notation is a tool for describing the efficiency of algorithms with respect to the size of the input arguments.
-   Since we use mathematical functions in Big-O, there are a few big picture ideas that we’ll want to keep in mind:
-   The function should be defined by the size of the input.
-   `Smaller` Big O is better (lower time complexity)
-   Big O is used to describe the worst case scenario.
-   Big O is simplified to show only its most dominant mathematical term.

### Simplifying Math Terms

-   We can use the following rules to simplify the our Big O functions:
-   `Simplify Products` : If the function is a product of many terms, we drop the terms that don’t depend on n.
-   `Simplify Sums` : If the function is a sum of many terms, we drop the non-dominant terms.
-   `n` : size of the input
-   `T(f)` : unsimplified math function
-   `O(f)` : simplified math function.

`Putting it all together`

![](https://webdevhubcom.files.wordpress.com/2021/03/cb689-1tt8uuv1x3nmguw5rvtoz8a.png)

-   First we apply the product rule to drop all constants.
-   Then we apply the sum rule to select the single most dominant term.

---

### Complexity Classes

Common Complexity Classes

#### There are 7 major classes in Time Complexity

![](https://webdevhubcom.files.wordpress.com/2021/03/c2e27-16zkhmjohkvdbrd8jfudf3a.png)

#### `O(1) Constant`

> **The algorithm takes roughly the same number of steps for any input size.**

<a href="https://gist.github.com/eengineergz/91b823971e8faac788f38ff670efc19d#file-constant-js" class="uri">https://gist.github.com/eengineergz/91b823971e8faac788f38ff670efc19d#file-constant-js</a>

#### `O(log(n)) Logarithmic`

> **In most cases our hidden base of Logarithmic time is 2, log complexity algorithm’s will typically display ‘halving’ the size of the input (like binary search!)**

<a href="https://gist.github.com/eengineergz/a1e6dec81f0639818db7f9a8e76b3992" class="uri">https://gist.github.com/eengineergz/a1e6dec81f0639818db7f9a8e76b3992</a>

#### `O(n) Linear`

> **Linear algorithm’s will access each item of the input “once”.**

<a href="https://gist.github.com/eengineergz/cc953ba2bd6e1d6f524a6d8b297aad5b" class="uri">https://gist.github.com/eengineergz/cc953ba2bd6e1d6f524a6d8b297aad5b</a>

### `O(nlog(n)) Log Linear Time`

> **Combination of linear and logarithmic behavior, we will see features from both classes.**

> Algorithm’s that are log-linear will use **both recursion AND iteration.**

<a href="https://gist.github.com/eengineergz/e9bd6337c17f1623a4da088574ed0d8e" class="uri">https://gist.github.com/eengineergz/e9bd6337c17f1623a4da088574ed0d8e</a>

### `O(nc) Polynomial`

> **C is a fixed constant.**

<a href="https://gist.github.com/eengineergz/3e6096e66bac80b962435b7d873cdbe9" class="uri">https://gist.github.com/eengineergz/3e6096e66bac80b962435b7d873cdbe9</a>

### `O(c^n) Exponential`

> **C is now the number of recursive calls made in each stack frame.**

> **Algorithm’s with exponential time are VERY SLOW.**

<a href="https://gist.github.com/eengineergz/5dec7e3736d7b5e28a5f1c85b5b50705" class="uri">https://gist.github.com/eengineergz/5dec7e3736d7b5e28a5f1c85b5b50705</a>

---

### Memoization

-   Memoization : a design pattern used to reduce the overall number of calculations that can occur in algorithms that use recursive strategies to solve.
-   MZ stores the results of the sub-problems in some other data structure, so that we can avoid duplicate calculations and only ‘solve’ each problem once.
-   Two features that comprise memoization:

1.  FUNCTION MUST BE RECURSIVE.
2.  Our additional Data Structure is usually an object (we refer to it as our memo… or sometimes cache!)

![](https://webdevhubcom.files.wordpress.com/2021/03/d40c8-14u79jbmju2wke_tyycd_3a.png)

![](https://webdevhubcom.files.wordpress.com/2021/03/07644-1qh42kzgccxmvt6wrtascvw.png)

### Memoizing Factorial

<a href="https://gist.github.com/eengineergz/0f92023740a44e3b41a0defb227ade37#file-memoizing-factorial-js" class="uri">https://gist.github.com/eengineergz/0f92023740a44e3b41a0defb227ade37#file-memoizing-factorial-js</a>

Our memo object is _mapping_ out our arguments of factorial to it’s return value.

-   Keep in mind we didn’t improve the speed of our algorithm.

### Memoizing Fibonacci

![](https://cdn-images-1.medium.com/max/800/0*2XaPj7UGKZYFjYhb)

-   Our time complexity for Fibonacci goes from O(2^n) to O(n) after applying memoization.

### The Memoization Formula

> _Rules:_

1.  _Write the unoptimized brute force recursion (make sure it works);_
2.  _Add memo object as an additional argument ._
3.  _Add a base case condition that returns the stored value if the function’s argument is in the memo._
4.  _Before returning the result of the recursive case, store it in the memo as a value and make the function’s argument it’s key._

#### Things to remember

1.  _When solving DP problems with Memoization, it is helpful to draw out the visual tree first._
2.  _When you notice duplicate sub-tree’s that means we can memoize._

<a href="https://gist.github.com/eengineergz/c15feb228a51a3543625009c8fd0b6de" class="uri">https://gist.github.com/eengineergz/c15feb228a51a3543625009c8fd0b6de</a>

---

### Tabulation

#### Tabulation Strategy

> Use When:

-   **The function is iterative and not recursive.**
-   _The accompanying DS is usually an array._

<a href="https://gist.github.com/eengineergz/a57bf449f5a8b16eedd1aa9fd71707e2" class="uri">https://gist.github.com/eengineergz/a57bf449f5a8b16eedd1aa9fd71707e2</a>

#### Steps for tabulation

-   _Create a table array based off the size of the input._
-   _Initialize some values in the table to ‘answer’ the trivially small subproblem._
-   _Iterate through the array and fill in the remaining entries._
-   _Your final answer is usually the last entry in the table._

---

### Memo and Tab Demo with Fibonacci

> _Normal Recursive Fibonacci_

function fibonacci(n) {  
if (n &lt;= 2) return 1;  
return fibonacci(n - 1) + fibonacci(n - 2);  
}

> _Memoization Fibonacci 1_

<a href="https://gist.github.com/eengineergz/504a9120ca40bbb4a246549937c43a12" class="uri">https://gist.github.com/eengineergz/504a9120ca40bbb4a246549937c43a12</a>

> _Memoization Fibonacci 2_

<a href="https://gist.github.com/eengineergz/07d315d92b3458a8640cee31bce9c236" class="uri">https://gist.github.com/eengineergz/07d315d92b3458a8640cee31bce9c236</a>

> _Tabulated Fibonacci_

<a href="https://gist.github.com/eengineergz/b1b1f7e259193ecdc432350b6199f2d3" class="uri">https://gist.github.com/eengineergz/b1b1f7e259193ecdc432350b6199f2d3</a>

### Example of Linear Search

<a href="https://gist.github.com/eengineergz/e98354b287ce2f80da4ab943399eb555" class="uri">https://gist.github.com/eengineergz/e98354b287ce2f80da4ab943399eb555</a>

-   _Worst Case Scenario: The term does not even exist in the array._
-   _Meaning: If it doesn’t exist then our for loop would run until the end therefore making our time complexity O(n)._

---

### Sorting Algorithms

### Bubble Sort

`Time Complexity`: Quadratic O(n^2)

-   The inner for-loop contributes to O(n), however in a worst case scenario the while loop will need to run n times before bringing all n elements to their final resting spot.

`Space Complexity`: O(1)

-   Bubble Sort will always use the same amount of memory regardless of n.

![](https://cdn-images-1.medium.com/max/800/0*Ck9aeGY-d5tbz7dT)

<a href="https://gist.github.com/eengineergz/e67e56bed7c5a20a54851867ba5efef6" class="uri">https://gist.github.com/eengineergz/e67e56bed7c5a20a54851867ba5efef6</a>

-   The first major sorting algorithm one learns in introductory programming courses.
-   Gives an intro on how to convert unsorted data into sorted data.

> It’s almost never used in production code because:

-   _It’s not efficient_
-   _It’s not commonly used_
-   _There is stigma attached to it_
-   `_Bubbling Up_` _: Term that infers that an item is in motion, moving in some direction, and has some final resting destination._
-   _Bubble sort, sorts an array of integers by bubbling the largest integer to the top._

<a href="https://gist.github.com/eengineergz/fd4acc0c89033bd219ebf9d3ec40b053" class="uri">https://gist.github.com/eengineergz/fd4acc0c89033bd219ebf9d3ec40b053</a><a href="https://gist.github.com/eengineergz/80934783c628c70ac2a5a48119a82d54" class="uri">https://gist.github.com/eengineergz/80934783c628c70ac2a5a48119a82d54</a>

-   _Worst Case & Best Case are always the same because it makes nested loops._
-   _Double for loops are polynomial time complexity or more specifically in this case Quadratic (Big O) of: O(n²)_

### Selection Sort

`Time Complexity`: Quadratic O(n^2)

-   Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);

`Space Complexity`: O(1)

-   Selection Sort will always use the same amount of memory regardless of n.

![](https://cdn-images-1.medium.com/max/800/0*AByxtBjFrPVVYmyu)

<a href="https://gist.github.com/eengineergz/4abc0fe0bf01599b0c4104b0ba633402" class="uri">https://gist.github.com/eengineergz/4abc0fe0bf01599b0c4104b0ba633402</a>

-   Selection sort organizes the smallest elements to the start of the array.

![](https://cdn-images-1.medium.com/max/800/0*GeYNxlRcbt2cf0rY)

> Summary of how Selection Sort should work:

1.  _Set MIN to location 0_
2.  _Search the minimum element in the list._
3.  _Swap with value at location Min_
4.  _Increment Min to point to next element._
5.  _Repeat until list is sorted._

<a href="https://gist.github.com/eengineergz/61f130c8e0097572ed908fe2629bdee0" class="uri">https://gist.github.com/eengineergz/61f130c8e0097572ed908fe2629bdee0</a>

### Insertion Sort

`Time Complexity`: Quadratic O(n^2)

-   Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);

`Space Complexity`: O(n)

-   Because we are creating a subArray for each element in the original input, our Space Comlexity becomes linear.

![](https://cdn-images-1.medium.com/max/800/0*gbNU6wrszGPrfAZG)

<a href="https://gist.github.com/eengineergz/a9f4b8596c7546ac92746db659186d8c" class="uri">https://gist.github.com/eengineergz/a9f4b8596c7546ac92746db659186d8c</a>

### Merge Sort

`Time Complexity`: Log Linear O(nlog(n))

-   Since our array gets split in half every single time we contribute O(log(n)). The while loop contained in our helper merge function contributes O(n) therefore our time complexity is O(nlog(n)); `Space Complexity`: O(n)
-   We are linear O(n) time because we are creating subArrays.

![](https://cdn-images-1.medium.com/max/800/0*GeU8YwwCoK8GiSTD)

![](https://cdn-images-1.medium.com/max/800/0*IxqGb72XDVDeeiMl)

### Example of Merge Sort

<a href="https://gist.github.com/eengineergz/18fbb7edc9f5c4820ccfcecacf3c5e48" class="uri">https://gist.github.com/eengineergz/18fbb7edc9f5c4820ccfcecacf3c5e48</a><a href="https://gist.github.com/eengineergz/cbb533137a7f957d3bc4077395c1ff64" class="uri">https://gist.github.com/eengineergz/cbb533137a7f957d3bc4077395c1ff64</a>

![](https://cdn-images-1.medium.com/max/800/0*HMCR--9niDt5zY6M)

-   **Merge sort is O(nlog(n)) time.**
-   _We need a function for merging and a function for sorting._

> Steps:

1.  _If there is only one element in the list, it is already sorted; return the array._
2.  _Otherwise, divide the list recursively into two halves until it can no longer be divided._
3.  _Merge the smallest lists into new list in a sorted order._

### Quick Sort

`Time Complexity`: Quadratic O(n^2)

-   Even though the average time complexity O(nLog(n)), the worst case scenario is always quadratic.

`Space Complexity`: O(n)

-   Our space complexity is linear O(n) because of the partition arrays we create.
-   QS is another Divide and Conquer strategy.
-   Some key ideas to keep in mind:
-   It is easy to sort elements of an array relative to a particular target value.
-   An array of 0 or 1 elements is already trivially sorted.

![](https://cdn-images-1.medium.com/max/800/0*WLl_HpdBGXYx284T)

![](https://cdn-images-1.medium.com/max/800/0*-LyHJXGPTYsWLDZf)

<a href="https://gist.github.com/eengineergz/24bcbc5248a8c4e1671945e9512da57e" class="uri">https://gist.github.com/eengineergz/24bcbc5248a8c4e1671945e9512da57e</a>

### Binary Search

`Time Complexity`: Log Time O(log(n))

`Space Complexity`: O(1)

![](https://cdn-images-1.medium.com/max/800/0*-naVYGTXzE2Yoali)

> _Recursive Solution_

<a href="https://gist.github.com/eengineergz/c82c00a4bcba4b69b7d326d6cad3ac8c" class="uri">https://gist.github.com/eengineergz/c82c00a4bcba4b69b7d326d6cad3ac8c</a>

> _Min Max Solution_

<a href="https://gist.github.com/eengineergz/eb8d1e1684db15cc2c8af28e13f38751" class="uri">https://gist.github.com/eengineergz/eb8d1e1684db15cc2c8af28e13f38751</a><a href="https://gist.github.com/eengineergz/bc3f576b9795ccef12a108e36f9f820a" class="uri">https://gist.github.com/eengineergz/bc3f576b9795ccef12a108e36f9f820a</a>

-   _Must be conducted on a sorted array._
-   _Binary search is logarithmic time, not exponential b/c n is cut down by two, not growing._
-   _Binary Search is part of Divide and Conquer._

### Insertion Sort

-   **Works by building a larger and larger sorted region at the left-most end of the array.**

> Steps:

1.  _If it is the first element, and it is already sorted; return 1._
2.  _Pick next element._
3.  _Compare with all elements in the sorted sub list_
4.  _Shift all the elements in the sorted sub list that is greater than the value to be sorted._
5.  _Insert the value_
6.  _Repeat until list is sorted._

<a href="https://gist.github.com/eengineergz/ffead1de0836c4bcc6445780a604f617" class="uri">https://gist.github.com/eengineergz/ffead1de0836c4bcc6445780a604f617</a>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a><a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

### Or Checkout my personal Resource Site:

<a href="https://gist.github.com/bgoonz" class="uri">https://gist.github.com/bgoonz</a>

![](https://webdevhubcom.files.wordpress.com/2021/03/4122c-1vcmj_h9ahs41oc9yx1hzfq.png)

<a href="https://gist.github.com/bgoonz/af844eda5a20b0fdc0b813304401602b" class="uri">https://gist.github.com/bgoonz/af844eda5a20b0fdc0b813304401602b</a>

#### Windows Subsystem for Linux (WSL) and Ubuntu

‌

![](https://webdevhubcom.files.wordpress.com/2021/03/d44d1-0aqkp1drnhmnm34zz.jpg)

Test if you have Ubuntu installed by typing “Ubuntu” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads **“Ubuntu 20.04 LTS”** with “App” under it, then you have it installed.

‌

1.  In the application search box in the bottom bar, type “PowerShell” to find the application named “Windows PowerShell”
2.  Right-click on “Windows PowerShell” and choose “Run as administrator” from the popup menu
3.  In the blue PowerShell window, type the following: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
4.  Restart your computer
5.  In the application search box in the bottom bar, type “Store” to find the application named “Microsoft Store”
6.  Click “Microsoft Store”
7.  Click the “Search” button in the upper-right corner of the window
8.  Type in “Ubuntu”
9.  Click “Run Linux on Windows (Get the apps)”
10. Click the orange tile labeled **“Ubuntu”** Note that there are 3 versions in the Microsoft Store… you want the one just entitled ‘Ubuntu’
11. Click “Install”
12. After it downloads, click “Launch”
13. If you get the option, pin the application to the task bar. Otherwise, right-click on the orange Ubuntu icon in the task bar and choose “Pin to taskbar”
14. When prompted to “Enter new UNIX username”, type your first name with no spaces
15. When prompted, enter and retype a password for this UNIX user (it can be the same as your Windows password)
16. Confirm your installation by typing the command `whoami ‘as in who-am-i'`followed by Enter at the prompt (it should print your first name)
17. You need to update your packages, so type `sudo apt update` (if prompted for your password, enter it)
18. You need to upgrade your packages, so type `sudo apt upgrade` (if prompted for your password, enter it)

### Git

Git comes with Ubuntu, so there’s nothing to install. However, you should configure it using the following instructions.

‌Open an Ubuntu terminal if you don’t have one open already.

1.  You need to configure Git, so type `git config --global user.name "Your Name"` with replacing “Your Name” with your real name.
2.  You need to configure Git, so type `git config --global user.email your@email.com` with replacing “<a href="mailto:your@email.com" class="email">your@email.com</a>” with your real email.

**Note: if you want git to remember your login credentials type:**

$ git config –global credential.helper store

‌

### Google Chrome

Test if you have Chrome installed by typing “Chrome” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads “Chrome” with “App” under it, then you have it installed. Otherwise, follow these instructions to install Google Chrome.

‌

1.  Open Microsoft Edge, the blue “e” in the task bar, and type in [http://chrome.google.com](http://chrome.google.com/). Click the “Download Chrome” button. Click the “Accept and Install” button after reading the terms of service. Click “Save” in the “What do you want to do with ChromeSetup.exe” dialog at the bottom of the window. When you have the option to “Run” it, do so. Answer the questions as you’d like. Set it as the default browser.
2.  Right-click on the Chrome icon in the task bar and choose “Pin to taskbar”.

### Node.js

Test if you have Node.js installed by opening an Ubuntu terminal and typing `node --version`. If it reports “Command ‘node’ not found”, then you need to follow these directions.

1.  In the Ubuntu terminal, type `sudo apt update` and press Enter
2.  In the Ubuntu terminal, type `sudo apt install build-essential` and press Enter
3.  In the Ubuntu terminal, type `curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh) | bash` and press Enter
4.  In the Ubuntu terminal, type `. ./.bashrc` and press Enter
5.  In the Ubuntu terminal, type `nvm install --lts` and press Enter
6.  Confirm that **node** is installed by typing `node --version` and seeing it print something that is not “Command not found”!

### Unzip

You will often have to download a zip file and unzip it. It is easier to do this from the command line. So we need to install a linux unzip utility.

‌In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

‌Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and typing `which mocha`. If it prints a path, then you’re good. Otherwise, if it prints nothing, install Mocha.js by typing `npm install -g mocha`.

‌

### Python 3

Ubuntu does not come with Python 3. Install it using the command `sudo apt install python3`. Test it by typing `python3 --version` and seeing it print a number.

‌

### Note about WSL

‌

As of the time of writing of this document, WSL has an issue renaming or deleting files if Visual Studio Code is open. So before doing any linux commands which manipulate files, make sure you **close** Visual Studio Code before running those commands in the Ubuntu terminal.

‌

### Some other common instillations

\# Installing build essentials  
sudo apt-get install -y build-essential libssl-dev  
\# Nodejs and NVM  
curl -o- <a href="https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh" class="uri">https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh</a> | bash  
source ~/.profile  
sudo nvm install 7.10.0  
sudo nvm use 7.10.0  
node -v  
\#nodemon  
sudo npm install -g nodemon  
sudo npm install -g loopback-cli  
\# Forever to run nodejs scripts forever  
sudo npm install forever -g  
\# Git - a version control system  
sudo apt-get update  
sudo apt-get install -y git xclip  
\# Grunt - an automated task runner  
sudo npm install -g grunt-cli  
\# Bower - a dependency manager  
sudo npm install -g bower  
\# Yeoman - for generators  
sudo npm install -g yo  
\# maven  
sudo apt-get install maven -y  
\# Gulp - an automated task runner  
sudo npm install -g gulp-cli  
\# Angular FullStack - My favorite MEAN boilerplate (MEAN = MongoDB, Express, Angularjs, Nodejs)  
sudo npm install -g generator-angular-fullstack  
\# Vim, Curl, Python - Some random useful stuff  
sudo apt-get install -y vim curl python-software-properties  
sudo apt-get install -y python-dev, python-pip  
sudo apt-get install -y libkrb5-dev  
\# Installing JDK and JRE  
sudo apt-get install -y default-jre  
sudo apt-get install -y default-jdk  
\# Archive Extractors  
sudo apt-get install -y unace unrar zip unzip p7zip-full p7zip-rar sharutils rar uudeview mpack arj cabextract file-roller  
\# FileZilla - a FTP client  
sudo apt-get install -y filezilla

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Or Checkout my personal Resource Site:

<a href="https://github.com/bgoonz" class="uri">https://github.com/bgoonz</a>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.

Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.

Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.

Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper.

Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.

Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.

Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.

Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.

Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.

It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.

Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.

Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.

It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.

Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Donec sed odio dui.

Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.

Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.

Be clear, be confident and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.

Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui.

Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
