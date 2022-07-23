---
title: Gatsby CLI
template: post
subtitle: 'The Gatsby CLI is available via npm '
excerpt: 'The Gatsby command line tool  CLI is the main entry point for getting
    up and running with a Gatsby application '
date: 2022-05-15T23:44:13.229Z
image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/gatsby-cli.png?raw=true
thumb_image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/gatsby-cli.png?raw=true
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
    - src/data/categories/js.yaml
    - src/data/categories/search.yaml
    - src/data/categories/react.yaml
    - src/data/categories/git.yaml
    - src/data/categories/html.yaml
tags:
    - src/data/tags/cms.yaml
show_author_bio: true
related_posts:
    - src/pages/blog/using-the-dom.md
cmseditable: true
---

<!--StartFragment-->

# Commands (Gatsby CLI)

## TABLE OF CONTENTS

-   [How to use gatsby-cli](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli)
-   [API commands](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#api-commands)

    -   [new](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#new)
    -   [develop](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#develop)
    -   [build](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#build)
    -   [serve](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#serve)
    -   [info](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#info)
    -   [clean](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#clean)
    -   [plugin](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#plugin)
    -   [Repl](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#repl)
    -   [Disabling colored output](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#disabling-colored-output)

-   [How to change your default package manager for your next project?](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-change-your-default-package-manager-for-your-next-project)

The Gatsby command line tool (CLI) is the main entry point for getting up and running with a Gatsby application and for using functionality including running a development server and building out your Gatsby application for deployment.

_This page provides similar documentation as the gatsby-cli [README](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/README.md). The [Gatsby cheat sheet](https://www.gatsbyjs.com/docs/cheat-sheet/) has docs for top CLI commands & APIs all ready to print out._

## [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-use-gatsby-cli)How to use gatsby-cli

The Gatsby CLI is available via [npm](https://www.npmjs.com/) and is installed globally by running `npm install -g gatsby-cli`.

You can also use the `package.json` script variant of these commands, typically exposed _for you_ with most [starters](https://www.gatsbyjs.com/docs/starters/). For example, if you want to make the [`gatsby develop`](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#develop) command available in your application, open up `package.json` and add a script like so:

package.json

```json
//package.json

{
    "scripts": {
        "develop": "gatsby develop"
    }
}
```

## [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#api-commands)API commands

All the following documentation is available in the tool by running `gatsby --help`.

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#new)`new`

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#usage)Usage

```bash
gatsby new
```

The CLI will run an interactive shell asking for these options before creating a Gatsby site for you:

```bash
gatsby new
What would you like to name the folder where your site will be created?
my-gatsby-site
Will you be using a CMS? (single choice)
  No (or I'll add it later)
  –
  WordPress
  Contentful
  Sanity
  DatoCMS
  Shopify
Would you like to install a styling system? (single choice)
  No (or I'll add it later)
  –
  CSS Modules/PostCSS
  styled-components
  Emotion
  Sass
  Theme UI
Would you like to install additional features with other plugins? (multiple choice)
  ◯ Add the Google Analytics tracking script
  ◯ Add responsive images
  ◯ Add page meta tags with React Helmet
  ◯ Add an automatic sitemap
  ◯ Enable offline functionality
  ◯ Generate a manifest file
  ◯ Add Markdown support (without MDX)
  ◯ Add Markdown and MDX support
```

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#creating-a-site-from-a-starter)Creating a site from a starter

To create a site from a starter instead, run the command with your site name and starter URL:

```bash
gatsby new [<site-name> [<starter-url>]]
```

Note that this will not prompt you to create a custom setup, but only clone the starter from the URL you specified.

##### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#arguments)Arguments

| Argument    | Description                                                                                                                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| site-name   | Your Gatsby site name, which is also used to create a project directory.                                                                                                                                                         |
| starter-url | A Gatsby starter URL or local file path. Defaults to [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default); see the [Gatsby starters](https://www.gatsbyjs.com/docs/starters/) docs for more information. |

> Note: The `site-name` should only consist of letters and numbers. If you specify a `.`, `./` or a `<space>` in the name, `gatsby new` will throw an error.

##### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#examples)Examples

-   Create a Gatsby site named `my-awesome-site` using the default starter:

```bash
gatsby new my-awesome-site

```

-   Create a Gatsby site named `my-awesome-blog-site`, using [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/):

```bash
gatsby new my-awesome-blog-site https://github.com/gatsbyjs/gatsby-starter-blog
```

See the [Gatsby starters docs](https://www.gatsbyjs.com/docs/starters/) for more details.

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#develop)`develop`

Once you’ve installed a Gatsby site, go to the root directory of your project and start the development server:

`gatsby develop`

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#options)Options

| Option          | Description                                     |
| --------------- | ----------------------------------------------- |
| `-H`, `--host`  | Set host. Defaults to localhost                 |
| `-p`, `--port`  | Set port. Defaults to env.PORT or 8000          |
| `-o`, `--open`  | Open the site in your (default) browser for you |
| `-S`, `--https` | Use HTTPS                                       |
| `--inspect`     | Opens a port for debugging                      |

Follow the [Local HTTPS guide](https://www.gatsbyjs.com/docs/local-https/) to find out how you can set up an HTTPS development server using Gatsby.

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#preview-changes-on-other-devices)Preview changes on other devices

You can use the Gatsby develop command with the host option to access your dev environment on other devices on the same network, run:

```bash
gatsby develop -H 0.0.0.0
```

Then the terminal will log information as usual, but will additionally include a URL that you can navigate to from a client on the same network to see how the site renders.

```bash
You can now view gatsbyjs.com in the browser.
⠀
  Local:            http://0.0.0.0:8000/
  On Your Network:  http://192.168.0.212:8000/
```

**Note**: To access Gatsby on your local machine, use either `http://localhost:8000` or the “On Your Network” URL.

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#build)`build`

At the root of a Gatsby site, compile your application and make it ready for deployment:

`gatsby build`

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#options-1)Options

| Option                       | Description                                                                                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--prefix-paths`             | Build site with link paths prefixed (set pathPrefix in your config)                                                                                                  |
| `--no-uglify`                | Build site without uglifying JS bundles (for debugging)                                                                                                              |
| `--profile`                  | Build site with react profiling. See [Profiling Site Performance with React Profiler](https://www.gatsbyjs.com/docs/profiling-site-performance-with-react-profiler/) |
| `--open-tracing-config-file` | Tracer configuration file (OpenTracing compatible). See [Performance Tracing](https://www.gatsbyjs.com/docs/performance-tracing/)                                    |
| `--graphql-tracing`          | Trace (see above) every graphql resolver, may have performance implications.                                                                                         |
| `--no-color`, `--no-colors`  | Disables colored terminal output                                                                                                                                     |

In addition to these build options, there are some optional [build environment variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/#build-variables) for more advanced configurations that can adjust how a build runs. For example, setting `CI=true` as an environment variable will tailor output for [dumb terminals](https://en.wikipedia.org/wiki/Computer_terminal#Dumb_terminals).

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#serve)`serve`

At the root of a Gatsby site, serve the production build of your site for testing:

`gatsby serve`

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#options-2)Options

| Option           | Description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| `-H`, `--host`   | Set host. Defaults to localhost                                                          |
| `-p`, `--port`   | Set port. Defaults to 9000                                                               |
| `-o`, `--open`   | Open the site in your (default) browser for you                                          |
| `--prefix-paths` | Serve site with link paths prefixed (if built with pathPrefix in your gatsby-config.js). |

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#info)`info`

At the root of a Gatsby site, get helpful environment information which will be required when reporting a bug:

`gatsby info`

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#options-3)Options

| Option              | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `-C`, `--clipboard` | Automagically copy environment information to clipboard |

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#clean)`clean`

At the root of a Gatsby site, wipe out the cache (`.cache` folder) and public directories:

`gatsby clean`

This is useful as a last resort when your local project seems to have issues or content does not seem to be refreshing. Issues this may fix commonly include:

-   Stale data, e.g. this file/resource/etc. isn’t appearing
-   GraphQL error, e.g. this GraphQL resource should be present but is not
-   Dependency issues, e.g. invalid version, cryptic errors in console, etc.
-   Plugin issues, e.g. developing a local plugin and changes don’t seem to be taking effect

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#plugin)`plugin`

Run commands pertaining to gatsby plugins.

#### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#docs)`docs`

`gatsby plugin docs`

Directs you to documentation about using and creating plugins.

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#repl)Repl

Get a Node.js REPL (interactive shell) with context of your Gatsby environment:

`gatsby repl`

Gatsby will prompt you to type in commands and explore. When it shows this: `gatsby >`

You can type in a command, such as one of these:

`babelrc`

`components`

`dataPaths`

`getNodes()`

`nodes`

`pages`

`schema`

`siteConfig`

`staticQueries`

When combined with the [GraphQL explorer](https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/), these REPL commands could be very helpful for understanding your Gatsby site’s data.

For more information, check out the [Gatsby REPL documentation](https://www.gatsbyjs.com/docs/gatsby-repl/).

### [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#disabling-colored-output)Disabling colored output

In addition to the explicit `--no-color` option, the CLI respects the presence of the `NO_COLOR` environment variable (see [no-color.org](https://no-color.org/)).

## [](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#how-to-change-your-default-package-manager-for-your-next-project)How to change your default package manager for your next project?

When you use `gatsby new` for the first time to create a new project, you are asked to choose your default package manager between yarn and npm.

```bash
Which package manager would you like to use ? › - Use arrow-keys. Return to submit.
❯  yarn
   npm
```

Once you’ve made your choice, the CLI won’t ask for your preference again for any subsequent project.

If you want to change this for your next project you have to edit the config file created automatically by the CLI. This file is available on your system at: `~/.config/gatsby/config.json`

In it you’re going to see something like this.

config.json

```json
{
    "cli": {
        "packageManager": "yarn"
    }
}
```

Edit your `packageManager` value, save and you’re good to go for your next project using `gatsby new`.

<!--EndFragment-->
