### npm equivalents

<table><thead><tr class="header"><th>npm</th><th>yarn</th></tr></thead><tbody><tr class="odd"><td><code>npm init</code></td><td><code>yarn init</code></td></tr><tr class="even"><td><code>npm install</code></td><td><code>yarn</code></td></tr><tr class="odd"><td><code>npm install gulp --save</code></td><td><code>yarn add gulp</code></td></tr><tr class="even"><td><code>npm install gulp --save-dev --save-exact</code></td><td><code>yarn add gulp --dev --exact</code></td></tr><tr class="odd"><td><code>npm install -g gulp</code></td><td><code>yarn global add gulp</code></td></tr><tr class="even"><td><code>npm update</code></td><td><code>yarn upgrade</code></td></tr><tr class="odd"><td><code>./node_modules/.bin/gulp</code></td><td><code>yarn run gulp</code></td></tr></tbody></table>

{: .-left-align.-headers}

### yarn install

    --no-lockfile
    --pure-lockfile
    --frozen-lockfile
    --silent
    --offline
    --update-checksums
    --check-files
    --flat
    --force
    --ignore-scripts
    --modules-folder <path>
    --production[=true|false]

These options are available for `yarn install`.

### yarn add

    --dev
    --peer
    --optional
    --exact
    --tilde

These options are available for `yarn add`.

### Workspaces

In `package.json`: {: .-setup}

    "workspaces": [
      "packages/*"
    ]

    jest/
    ├─ package.json
    └─ packages/
       ├─ jest-matcher-utils/
       │  └─ package.json
       └─ jest-diff/
          └─ package.json

{: .-box-chars}

(New in 1.0) Allows monorepos to share packages with each other. See: [Introducing workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

### Selective version resolution

In `package.json`: {: .-setup}

    "resolutions": {
      "**/sass-brunch/node-sass": "4.5.2"
    }

(New in 1.0) Allows you to specify versions for sub-dependencies. See: [Selective version resolutions](https://github.com/yarnpkg/yarn/pull/4105)

### Create

    yarn create react-app hello

Install `create-react-app` and runs it. See: [yarn create](https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-yarn-create.md)
