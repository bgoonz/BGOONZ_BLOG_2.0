





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

The extension has platform-specific binary dependencies, therefore installation via the Marketplace requires an Internet connection in order to download additional dependencies. If you are working on a computer that does not have access to the Internet or is behind a strict firewall, you may need to use our platform-specific packages and in