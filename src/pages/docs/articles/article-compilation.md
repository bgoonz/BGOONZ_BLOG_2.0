





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

\`\`\`mermaid
stateDiagram
\[\*\] --> First
state First {
\[\*\] --> second
second --> \[\*\]
}
\`\`\`

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

1.  Select **File > Preferences > UserSettings or Workspace Settings**
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

    "markdown-pdf.type": [
    "pdf",
    "html",
    "png",
    "jpeg"
    ],

#### `markdown-pdf.convertOnSave`

-   Enable Auto convert on save
-   boolean. Default: false
-   To apply the settings, you need to restart Visual Studio Code

#### `markdown-pdf.convertOnSaveExclude`

-   Excluded file name of convertOnSave option

    "markdown-pdf.convertOnSaveExclude": [
    "^work",
    "work.md$",
    "work|test",
    "[0-9][0-9][0-9][0-9]-work",
    "work\\test" // All '\' need to be written as '\\' (Windows)
    ],

#### `markdown-pdf.outputDirectory`

-   Output Directory
-   All `\` need to be written as `\\` (Windows)

    "markdown-pdf.outputDirectory": "C:\\work\\output",

-   Relative path
-   If you open the `Markdown file`, it will be interpreted as a relative path from the file
-   If you open a `folder`, it will be interpreted as a relative path from the root folder
-   If you open the `workspace`, it will be interpreted as a relative path from the each root folder
-   See [Multi-root Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces)

    "markdown-pdf.outputDirectory": "output",

-   Relative path (home directory)
-   If path starts with `~`, it will be interpreted as a relative path from the home directory

    "markdown-pdf.outputDirectory": "~/output",

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

    "markdown-pdf.styles": [
    "C:\\Users\\<USERNAME>\\Documents\\markdown-pdf.css",
    "/home/<USERNAME>/settings/markdown-pdf.css",
    ],

-   Relative path
-   If you open the `Markdown file`, it will be interpreted as a relative path from the file
-   If you open a `folder`, it will be interpreted as a relative path from the root folder
-   If you open the `workspace`, it will be interpreted as a relative path from the each root folder
-   See [Multi-root Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces)

    "markdown-pdf.styles": [
    "markdown-pdf.css",
    ],

-   Relative path (home directory)
-   If path starts with `~`, it will be interpreted as a relative path from the home directory

    "markdown-pdf.styles": [
    "~/.config/Code/User/markdown-pdf.css"
    ],

-   Online CSS ([https://xxx/xxx.css](https://xxx/xxx.css)) is applied correctly for JPG and PNG, but problems occur with PDF [#67](https://github.com/yzane/vscode-markdown-pdf/issues/67)

    "markdown-pdf.styles": [
    "https://xxx/markdown-pdf.css"
    ],

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
-   demo site : [https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/)

    "markdown-pdf.highlightStyle": "github.css",

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

    "markdown-pdf.executablePath": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"

### Common Options

#### `markdown-pdf.scale`

-   Scale of the page rendering
-   number. default: 1

    "markdown-pdf.scale": 1

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

    "markdown-pdf.headerTemplate": "<div style=\"font-size: 9px; margin-left: 1cm;\"> <span class='title'></span></div> <div style=\"font-size: 9px; margin-left: auto; margin-right: 1cm; \"> <span class='date'></span></div>",

    "markdown-pdf.footerTemplate": "<div style=\"font-size: 9px; margin: 0 auto;\"> <span class='pageNumber'></span> / <span class='totalPages'></span></div>",

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

    "markdown-pdf.pageRanges": "1,4-",

#### `markdown-pdf.format`

-   Paper format
-   Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6
-   Default: A4

    "markdown-pdf.format": "A4",

#### `markdown-pdf.width`

#### `markdown-pdf.height`

-   Paper width / height, accepts values labeled with units(mm, cm, in, px)
-   If it is set, it overrides the markdown-pdf.format option

    "markdown-pdf.width": "10cm",
    "markdown-pdf.height": "20cm",

#### `markdown-pdf.margin.top`

#### `markdown-pdf.margin.bottom`

#### `markdown-pdf.margin.right`

#### `markdown-pdf.margin.left`

-   Paper margins.units(mm, cm, in, px)

    "markdown-pdf.margin.top": "1.5cm",
    "markdown-pdf.margin.bottom": "1cm",
    "markdown-pdf.margin.right": "1cm",
    "markdown-pdf.margin.left": "1cm",

### PNG JPEG options

-   png and jpeg only. [puppeteer page.screenshot options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagescreenshotoptions)

#### `markdown-pdf.quality`

-   jpeg only. The quality of the image, between 0-100. Not applicable to png images

    "markdown-pdf.quality": 100,

#### `markdown-pdf.clip.x`

#### `markdown-pdf.clip.y`

#### `markdown-pdf.clip.width`

#### `markdown-pdf.clip.height`

-   An object which specifies clipping region of the page
-   number

    // x-coordinate of top-left corner of clip area
    "markdown-pdf.clip.x": 0,

    // y-coordinate of top-left corner of clip area
    "markdown-pdf.clip.y": 0,

    // width of clipping area
    "markdown-pdf.clip.width": 1000,

    // height of clipping area
    "markdown-pdf.clip.height": 1000,

#### `markdown-pdf.omitBackground`

-   Hides default white background and allows capturing screenshots with transparency
-   boolean. Default: false

### PlantUML options

#### `markdown-pdf.plantumlOpenMarker`

-   Oppening delimiter used for the plantuml parser.
-   Default: @startuml

#### `markdown-pdf.plantumlCloseMarker`

-   Closing delimiter used for the plantuml parser.
-   Default: @enduml

#### `markdown-pdf.plantumlServer`

-   Plantuml server. e.g. [http://localhost:8080](http://localhost:8080/)
-   Default: [http://www.plantuml.com/plantuml](http://www.plantuml.com/plantuml)
-   For example, to run Plantuml Server locally [#139](https://github.com/yzane/vscode-markdown-pdf/issues/139) :
-   `docker run -d -p 8080:8080 plantuml/plantuml-server:jetty`
-   [plantuml/plantuml-server — Docker Hub](https://hub.docker.com/r/plantuml/plantuml-server/)

### markdown-it-include options

#### `markdown-pdf.markdown-it-include.enable`

-   Enable markdown-it-include.
-   boolean. Default: true

### mermaid options

#### `markdown-pdf.mermaidServer`

-   mermaid server
-   Default: [https://unpkg.com/mermaid/dist/mermaid.min.js](https://unpkg.com/mermaid/dist/mermaid.min.js)

### FAQ

### How can I change emoji size ?

1.  Add the following to your stylesheet which was specified in the markdown-pdf.styles

    .emoji {
    height: 2em;
    }

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

-   Online CSS ([https://xxx/xxx.css](https://xxx/xxx.css)) is applied correctly for JPG and PNG, but problems occur with PDF. [#67](https://github.com/yzane/vscode-markdown-pdf/issues/67)

### [Release Notes](https://github.com/yzane/vscode-markdown-pdf/blob/master/CHANGELOG.md)

### 1.4.4 (2020/03/19)

-   Change: mermaid javascript reads from URL instead of from local file
-   Add: `markdown-pdf.mermaidServer` option
-   add an option to disable mermaid [#175](https://github.com/yzane/vscode-markdown-pdf/issues/175)
-   Add: `markdown-pdf.plantumlServer` option
-   support configuration of plantUML server [#139](https://github.com/yzane/vscode-markdown-pdf/issues/139)
-   Add: configuration scope
-   extend setting ‘headerTemplate’ with scope… [#184](https://github.com/yzane/vscode-markdown-pdf/pull/184)
-   Update: [slug](https://github.com/yzane/vscode-markdown-pdf/commit/3f4aeaa724999c46fc37423d4b188fd7ce72ffce) for markdown-it-named-headers
-   Update: markdown.css, markdown-pdf.css
-   Update: dependent packages
-   Fix: Fix for issue #186 [#187](https://github.com/yzane/vscode-markdown-pdf/pull/187)
-   Fix: move the Meiryo font to the end of the font-family setting
-   Meiryo font causing \\ to show as Â¥ [#83](https://github.com/yzane/vscode-markdown-pdf/issues/83)
-   Backslash false encoded [#124](https://github.com/yzane/vscode-markdown-pdf/issues/124)
-   Errors in which í•œê¸€(korean word) is not properly printed [#148](https://github.com/yzane/vscode-markdown-pdf/issues/148)
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

[https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider](https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider)

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

Install link: [https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql](https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql)

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

Optinionated set of JS snippets. Originally forked from [https://github.com/gaboesquivel/atom-standardjs-snippets,](https://github.com/gaboesquivel/atom-standardjs-snippets,) but we’ve added couple more. Also these are not using special characters because vscode doesn’t accept them in the snippets.

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

These were originally taken from [https://github.com/TimonVS/vscode-react-standard](https://github.com/TimonVS/vscode-react-standard) because the maintainer wasn’t able to publish a new version for months even when there was a considerable flaw in the released version. Below is a list of all available snippets and the triggers of each one.

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

The extension has platform-specific binary dependencies, therefore installation via the Marketplace requires an Internet connection in order to download additional dependencies. If you are working on a computer that does not have access to the Internet or is behind a strict firewall, you may need to use our platform-specific packages and install them by running VS Code’s `"Install from VSIX..."` command. These “offline’ packages are available at: [https://github.com/Microsoft/vscode-cpptools/releases.](https://github.com/Microsoft/vscode-cpptools/releases.)

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

For C#, C++, TypeScript/JavaScript, and XAML support in the Visual Studio IDE, check out the [IntelliCode extension on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.VSIntelliCode).

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

var name = 'Patrick O\\'Brian'; // using a backslash in front of the apostrophe  
console.log('name:', name); // name: Patrick O'Brian

further reading: [https://webdesignledger.com/common-typography-mistakes-apostrophes-versus-quotation-marks](https://webdesignledger.com/common-typography-mistakes-apostrophes-versus-quotation-marks)

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
 //....statements to be executed  
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
 day: "Wednesday",  
 month: "April",  
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
for (i = 0; i < properties.length; i++) {  
 document.writeIn(properties\[i\] + ‘:’ + today\[properties\[i\]\]);  
 }

-   This ensures you get the properties you want (i.e. not up the prototype chain) and in the order you want, as opposed to a _for in_ loop which achieves neither of these

### Delete

-   Removes property from object, but also reveals property from further up the prototype chain if it exists
-   Format: `delete today.month`

### Global Abatement

-   One way to mitigate the risks of global variables is to _create a single global variable_ which then contains your whole application

let MYAPP = {}

MYAPP.today = {  
 day: "Wednesday",  
 month: "April",  
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
-   If arguments > number of arguments expected, the extra values will be ignored
-   If arguments < number of arguments expected, the function will assume undefined in place of the missing arguments
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
var myQuo = new Quo("happy");

//because of the use of the new prefix, myQuo is an instance of Quo which means it can access the public method get_status from it's prototype  
document.writeIn(myQuo.get_status()); //returns 'happy'

-   This style of constructor pattern is not recommended, there will be better examples in [Chapter 5](https://github.com/Lambda-April/Unsorted-Notes/blob/main) — this is noted again in [Appendix B](https://github.com/Lambda-April/Unsorted-Notes/blob/main)
-   The first letter of a constructor function (in this case Quo) must _always_ be capitalized

#### Apply Invocation Pattern

-   The `apply` method lets you choose the value to be bound to `this`
-   It also takes the parameters for a function in an array
-   Format: `function.apply(valueForThis, arrayOfParamentersForFunction);`

var array = \[5, 2\] //will be the parameters for our function  
var sum = add.apply(null, array); //value of 'this' is null and value of sum is 7 as the 'apply' method passes 5 and 2 to the 'add' method

### Arguments

-   Another default parameter of functions is the `arguments` array which contains all the arguments that were supplied when the function was invoked
-   This means you don’t have to know the exact number of arguments when you build a function because you can loop through all the arguments provided at invocation with the use of the default `arguments` array

//inside the function for (i = 0; i < arguments.length; i++) { dosomething; //e.g. sum +=arguments\[i\] }

-   `arguments` lacks all the array methods except .length because of a bug

### Return

-   When a function gets to a `return` statement, it returns immediately without carrying out the remaining statements in the function
-   A function always returns a `value` or if unspecified, it returns `undefined`
-   “If the function was invoked with the `new` prefix (used when creating a new object so it must return an object) and the `return` value is not an object, then `this` (the new object) is returned instead.”

### Exceptions

-   A `throw` statement interrupts the execution of the code is used to handle expected exceptions like an incorrect type of argument (e.g. a string where a number is expected)
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
 add("seven"); //will throw an exception as it is not a number  
 }  
 catch (e) {  
 document.writeIn(e.name + ':' + e.message);  
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
 //wrap the statements to be executed and the recursive call in a loop statement so it doesn't recurse forever  
 //statements to be executed in the function;  
 functionName(arguments);  
};

functionName (initialArguments); //initial call to the function

-   Javascript does not have _tail recursion optimization_ and therefore does not optimize recursive functions — this also means they sometimes fail if they “recurse very deeply”; On a side note, _tail call optimization_ is now supported in [ECMA-262](https://www.ecma-international.org/ecma-262/7.0/index.html#sec-tail-position-calls)

### Scope

-   A _block_ is a set of statements contained in curly brackets {}
-   Javascript does not have block scope but does have function scope
-   All variables declared _anywhere_ within a function are available everywhere in that function — i.e. and inner function will have access to the variables of the outer function in which it is defined
-   A variable can be _overwritten_ with a new value in an inner function and that new value’s scope will be just the body of the inner function — as soon as you’re back out to the outer function, the value of that variable will revert to what it was before the inner function began its execution
-   All variable should be declared at the top of the function body

### Closure

-   Inner functions have access to the actual parameters of the outer functions (not copies)
-   If an object is created as a result of a function and assigned to myObject, myObject continues to share access to the variables in the functions that created it (actual variables, not copies)
-   It has access to *the context in which it was created* — this is _closure_
-   This includes later on, even if _the outer function has completed its execution and returned_, when the inner function is called, it will still have access to all the variables it had access to at the time it was defined (i.e. the variables that were _in context_ when the inner function was defined)

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

Function.method('curry', function() {  
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
 if (typeof result !== 'number') {  
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
 var that = {}; //that is a new object which is basically a container of 'secrets' shared to the rest of the inheritance chain

    that.get\_name = function () {
        return spec.name;
    };

    that.says = function () {
        return spec.saying || '';  //returns an empty string if no 'saying' argument is passed through the spec object when calling mammal
    };
    return that;     //returns the object that contains the now private properties and methods (under functional scope)

}

var myMammal = mammal({name: 'Herb'});

Creating an object ‘cat’ can now inherit from the `mammal` constructor and only pay attention to the differences between it and `mammal`:

var cat = function (spec) {  
 spec.saying = spec.saying || 'meow'; //if spec.saying doesn't already exists, make it 'meow'  
 var that = mammal(spec); //here the object 'container of secrets' is set up inheriting from mammal already

    //functions and property augmentations happen here

    return that;      //as above

}

-   Requires less effort and gives better encapsulation and information hiding than the pseudoclassical pattern, as well as access to super methods (see page 54 of book for super method example)
-   An object created using the functional pattern _and_ making no use of `this` or `that` is a _durable object_ and cannot be compromised by attackers
-   Briefly also discussed in [Module](https://github.com/Lambda-April/Unsorted-Notes/blob/main) section above
-   If you do want something to have access to the object’s private properties and methods, you pass it the `that` bundle (i.e. your ‘container of secrets’)

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
-   If you set the `.length` to a smaller number than the current length of the array, it will delete any properties with a subscript >= the new `length`
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
 return Object.prototype.toString.apply(value) === '\[object Array\]';  
 //apply(value) binds \`value\` to \`this\` & returns true if \`this\` is an array }

### Methods

-   Array methods are stored in `Array.prototype` which can be augmented using the format:

//capital A in Array means this refers to the prototype  
Array.method('reduce', function(parameters) {  
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
-   The `ˆ` at the beginning of character class `[ˆ?#]` means it includes _all_ characters *except* ? and #
-   This actually leaves the regexp open to attack because too many characters are included in the character class
-   The `*` indicates the character class will appear _zero or more_ times
-   `(?:\?([ˆ#]*))?`
-   We’ve seen everything here before: An optional capturing group starting with a literal `?` (escaped by the backslash) with zero or more characters that are not #
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

var my_regexp = new RegExp("'(?:\\\\\\\\.|\[ˆ\\\\\\\\\\\\'\])\*'", 'g');

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

Prefer to use ‘zero or more’ or ‘one or more’ matching over the ‘zero or one’ matching — i.e. prefer _greedy_ matching over _lazy_ matching

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

Negative values for `start` and `end` will have `array.length` added to them and if `start`\>`end`, it will return an empty array.

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

Converts _number_ to a string in exponential form (e.g. 3.14e+0). `fractionDigits` (from 0 to 20) gives the number of decimal places.

#### number.toFixed(fractionDigits)

Converts _number_ to a string in decimal form (e.g. 3.1415927). `fractionDigits` (from 0 to 20) gives the number of decimal places.

#### number.toPrecision(precision)

Converts _number_ to a string in decimal form (e.g. 3.1415927). The difference from `toFixed` is that `precision` (from 0 to 21) gives the number of total digits.

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

If the _regexp_ contains a `g` flag (e.g. `var regexp = /[ˆ<>]+|<(\/?)([A-Za-z]+)([ˆ<>]*)>/g;`), there is a lot more to look out for:

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

Same as `charAt` except it returns the integer that represents the _code point value of the character at position_ `_pos_`. Returns `NaN` if _string_.length < `pos` < 0.

#### string.concat(string…)

Creates new string concatenating various strings. `+` tends to be used instead of this method (e.g. `var cat = 'c'+'a'+'t';`)

#### string.indexOf(searchString, position)

Searches for `searchString` within _string_ starting at position `position` (an optional parameter). If `position` is not provided, search starts at the beginning of the _string_. Returns the integer _position of the first matched character_ or _\-1_ if no match is found.

#### string.lastIndexOf(searchString, position)

Same as `indexOf` but searches from the end of the string instead of the beginning.

#### string.localeCompare(that)

Compares _string_ to `that` parameter and returns:

-   0 if _string_ === `that`
-   \-1 if _string_ < `that`

_NB. ‘a’ < ‘A’, comparison is not just in length._

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

Creates an array of strings by splitting apart _string_ at the points where the `separator` appears (e.g. if the separator is ‘.’, ab.cd’ becomes \[‘ab’, ‘cd’\]).

-   If separator is an _empty string_, an array of single characters is produced.
-   `limit` is _optional_ and determines how many pieces are to be split off from the original _string_.
-   The `separator` can be a `regexp` but
-   text from capturing groups within the regexp will be included in the split — e.g. in `var e = text.split(/\s*(,)\s*/);` the commas (,) will each be included as a separate element in the resulting array
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

Although JavaScript has block _syntax_ (i.e. is written in blocks) like a lot of other programming languages, it has functional scope and _not_ block scope.

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

if (my_value && typeof my_value === 'object') {  
 //then my value is definitely an object or an array because not only is its 'typeof' an object but it's also truthy (first statement)  
}

### NaN

-   `typeof NaN === 'number'` even though it stands for _not-a-number_
-   If you have a chain of formulas that together produce a `NaN` then at least _one_ of them will have generated `NaN`
-   Surprisingly `NaN !=== NaN`
-   `isNaN(value)` can be used to distinguish numbers from NaN

For numbers, best use your own isNumber formula:

var isNumber = function isNumber(value) {  
 return typeof value === 'number' && isFinite(value); //isFinite() rejects NaN and Infinity, but is only good for numbers, not strings  
}

### Phony Arrays

JavaScript doesn’t have real arrays, it has _array-like objects_.

-   Good: No need to give them dimensions and don’t generate out-of-bounds errors
-   Bad: Slower than ‘real’ arrays

To test if value is an array:

if (my_value && typeof my_value === 'object' && typeof my_value.length === 'number' &&  
 !(my_value.propertyIsEnumerable('length'))) {  
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

[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)

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

-   Consistent effort > cramming => for **durable knowledge**

---

#### Here’s a REPL to practice with:

[https://replit.com/@bgoonz/lambda-prep#README.html](https://replit.com/@bgoonz/lambda-prep#README.html)

---

[https://replit.com/@bgoonz/lambda-prep#README.html](https://replit.com/@bgoonz/lambda-prep#README.html)

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
-   `` `This is a temp'l'ate literal ${function}` // use ${} to invoke functions within.``
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

-   **\>** (greater than)
-   **<** (less than)
-   **\>=** (greater than or equal to)
-   **<=** (less than or equal to)
-   **\===** (equal to)
-   **!==** (not equal to)

> _Fun Fact: “a” < “b” is considered valid JS Code because string comparisons are compared lexicographically (meaning dictionary order), so “a” is less than “b” because it appears earlier!_

> _If there is ever a standstill comparison of two string lexicographically (i.e. app vs apple) the comparison will deem the shorter string lesser._

**Difference between == and ===**

-   **\===** : Strict Equality, will only return true if the two comparisons are entirely the same.
-   **\==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)

---

### Variables

Variables are used to store information to be referenced and manipulated in a program.

-   We initialize a variable by using the **let** keyword and a **\=** single equals sign (assignment operator).
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
-   When naming functions in JS always use camelCase and name it something appropriate. > Greate code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!

---

### Parameters and Arguments

-   **Parameters** : Comma seperated variables specified as part of a function’s declaration.
-   **Arguments** : Values passed to the function when it is invoked.
-   _If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work._
-   However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.

#### Further resources:

[https://replit.com/@bgoonz/lambda-prep#README.html](https://replit.com/@bgoonz/lambda-prep#README.html)[https://replit.com/@bgoonz/lambda-prep#README.html](https://replit.com/@bgoonz/lambda-prep#README.html)[https://replit.com/@bgoonz/lambda-prep#README.html](https://replit.com/@bgoonz/lambda-prep#README.html)[https://replit.com/@bgoonz/lambda-prep#README.html](https://replit.com/@bgoonz/lambda-prep#README.html)

_More content at **[plainenglish.io](https://plainenglish.io/)**_

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
-   [Snyk](https://snyk.io/): Find any security vulnerabilities for any npm package. Search their database here: `[https://snyk.io/vuln/npm](https://snyk.io/vuln/npm):{package}` e.g. [https://snyk.io/vuln/npm:react](https://snyk.io/vuln/npm:react)
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
-   [clack-react](https://github.com/reasonink/clack-react): React support for @reasonink/clack
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
-   [tinytime](https://github.com/aweary/tinytime): ![⏰](https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/23f0.svg) A straightforward date and time formatter in <1kb

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

[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)

### OR GitHub/gists where I host similar content:

[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)

### Or Checkout my personal Resource Site:

[https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b](https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b)

Fundamental Data Structures In JavaScript \* { font-family: Georgia, Cambria, “Times New Roman”, Times, serif; } html, body { margin: 0; padding: 0; } h1 { font-size: 50px; margin-bottom: 17px; color: #333; } h2 { font-size: 24px; line-height: 1.6; margin: 30px 0 0 0; margin-bottom: 18px; margin-top: 33px; color: #333; } h3 { font-size: 30px; margin: 10px 0 20px 0; color: #333; } header { width: 640px; margin: auto; } section { width: 640px; margin: auto; } section p { margin-bottom: 27px; font-size: 20px; line-height: 1.6; color: #333; } section img { max-width: 640px; } footer { padding: 0 20px; margin: 50px 0; text-align: center; font-size: 12px; } .aspectRatioPlaceholder { max-width: auto !important; max-height: auto !important; } .aspectRatioPlaceholder-fill { padding-bottom: 0 !important; } header, section\[data-field=subtitle\], section\[data-field=description\] { display: none; }

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

2\. This could be useful for storing data that are required to be ordered, such as rankings or queues

3\. In JavaScript, array’s value could be mixed; meaning value of each index could be of different data, be it String, Number or even Objects

### 2\. Objects

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
-   [https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth](https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth 'https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth')

![](https://cdn-images-1.medium.com/max/800/0*hsbombFMlu6yICjz.gif)

---

### Bracket Pair Colorizer 2

-   Colors matching brackets so it’s easier to tell which brackets match.
-   [https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2')

![](https://cdn-images-1.medium.com/max/800/0*MT-BCptwnKGYk1Pk.png)

---

### Babel Javascript

-   A better syntax highlighter for JavaScript code
-   [https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel 'https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel')

![](https://cdn-images-1.medium.com/max/800/0*b5t9hd_8soPq26pq.png)

---

### Code Runner

-   Puts a “Play” button in your toolbar and let’s you run code files by pressing it.
-   [https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner 'https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner')

### Code Runner

> Run code snippet or code file for multiple languages: **C, C++, Java, JavaScript, PHP, Python, Perl, Perl 6, Ruby, Go, Lua, Groovy, PowerShell, BAT/CMD, BASH/SH, F# Script, F# (.NET Core), C# Script, C# (.NET Core), VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml Script, R, AppleScript, Elixir, Visual Basic .NET, Clojure, Haxe, Objective-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Free Pascal, Haskell, Nim, D, Lisp, Kit, V, SCSS, Sass, CUDA, Less, Fortran**, and custom command

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
-   [https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight 'https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight')

![](https://cdn-images-1.medium.com/max/800/0*9K5_QPPvfozmuTWH)

### Git Graph

-   Shows you a graphical representation of your git branches and commits
-   [https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph')

![](https://cdn-images-1.medium.com/max/800/0*eAKBnl6yXJgXZXvZ.gif)

---

### GitLens

-   Adds tons of cool features to vscode, like viewing commits inline inside the editor
-   [https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens')

Here are just some of the **features** that GitLens provides,

-   effortless [**revision navigation**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#revision-navigation- 'Jump to Revision Navigation') (backwards and forwards) through the history of a file
-   an unobtrusive [**current line blame**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#current-line-blame- 'Jump to Current Line Blame') annotation at the end of the line showing the commit and author who last modified the line, with more detailed blame information accessible on [**hover**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#hovers- 'Jump to Hovers')
-   [**authorship code lens**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#git-code-lens- 'Jump to Git Code Lens') showing the most recent commit and number of authors at the top of files and/or on code blocks
-   a [**status bar blame**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#status-bar-blame- 'Jump to Status Bar Blame') annotation showing the commit and author who last modified the current line
-   on-demand **file annotations** in the editor gutter, including
-   [**blame**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#gutter-blame- 'Jump to Gutter Blame') — shows the commit and author who last modified each line of a file
-   [**changes**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#gutter-changes- 'Jump to Gutter Changes') — highlights any local (unpublished) changes or lines changed by the most recent commit
-   [**heatmap**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#gutter-heatmap- 'Jump to Gutter Heatmap') — shows how recently lines were changed, relative to all the other changes in the file and to now (hot vs. cold)
-   many rich **Side Bar views**
-   a [**_Commits_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#commits-view- 'Jump to the Commits view') to visualize, explore, and manage Git commits
-   a [**_Repositories_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#repositories-view- 'Jump to the Repositories view') to visualize, explore, and manage Git repositories
-   a [**_File History_ view**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens#file-history-view- 'Jump to the File History view') to visualize, navigate, and explore the revision history of the current file or just the selected lines of the current file
-   a [**_Line History_ view**](https://marketplace.visualstudio.com/items?i