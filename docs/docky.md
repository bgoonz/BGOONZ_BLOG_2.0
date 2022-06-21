<p align="center">
  <img src="https://github.com/markmur/docky/raw/master/docs/images/docky.png?raw=true" width="150" alt="Docky" />
</p>

<h1 align="center">
  Docky
</h1>
<p align="center">
  Generate Documentation for React Components.
</p>

Docky is a tool for generating documentation for React component libraries. It works by reading a specified README (optional) and directory of components and parsing the components and their comments, using [react-docgen](https://github.com/reactjs/react-docgen).

If a Readme file is specified, Docky will auto-parse the h2 (##) headers and add them to the sidebar with relative links to the page content.

[View Demo](http://markmur.github.io/docky/)

## Example Component

```javascript
import React, { Component, PropTypes } from 'react';

/**
 * Some general description of your component
 */
class App extends Component {
  render = ({ className, children }) => (
    <main className={className}>
      {children}
    </main>
  )
}

App.propTypes = {
  /**
   * Description of prop type
   */
  children: PropTypes.any.isRequired,
  /**
   * Description of prop type
   */
  className: PropTypes.string.isRequired
};

```

## CLI Usage

Install docky globally:

```shell
npm install -g docky
```

Run docky on a single file or entire folder:

```bash
docky src/components/**/*.js
```

### Example Usage with Options

```bash


docky src/components/*.js   --watch "./src/components/layout.js","./README.md"  --ignore "src/components/index.js"   --use-readme=true

```

> Tip: to avoid retyping the command every time, add it to an NPM script in in your package.json

### Options

```bash
Usage: docky [files] [options]

Options:

-h, --help              output usage information
-V, --version           output the version number
-c, --color <HEX>       Change the primary theme color (defaults to blue)
-w, --watch "<files>"   Watch specific files and compile on change (comma separate directories/files to watch multiple)
-i, --ignore "<files>"  Ignore specified files from docs
--use-readme [bool]     include/omit README from your documentation (defaults to true)


```

## Contributing

Docky uses Pug (formally known as Jade) and SASS for template generation. The files can be found under the `template` directory.

There is a `components` directory which contains some example React components for testing. You can run docky over the local folder by running:

```shell
npm run docs
```

To compile the sass, run:

```shell
npm run sass
```

### Live Reload Compilation

To auto-compile the docs on change, use the `npm start` command which will start BrowserSync (for live reloading), SASS --watch (for regenerating csss) and Docky --watch (for re-compilation).

### Thanks

This tool relies heavily on the [react-docgen](https://github.com/reactjs/react-docgen) project by the reactjs team so many thanks to those who have made Docky possible.
