### Basic

    {
        "name": "expo",
        "description": "My package",
        "version": "0.1.0",
        "license": "MIT",
        "keywords": ["http", "server"],
        "author": "Rico Sta. Cruz <rstacruz@users.noreply.github.com>",
        "engines": {
            "node": ">=0.8.0"
        },
        "main": "index",
        "bin": {
            "command": "./bin/command"
        },
        "repository": {
            "type": "git",
            "url": "https://github.com/rstacruz/___.git"
        }
    }

{: data-line="2,3,4,5”}

Highlighted lines are required.

### Dependencies

    "dependencies": {
      "colors":   "*",
      "flatiron": "0.1.x",
      "flatiron": "~0.1.0",
      "plates":   "https://github.com/user/project/tarball/branch",
      "stuff":    "git://github.com/user/project.git#commit-ish"
    },

    "devDependencies": { ··· },
    "peerDependencies": { ··· },
    "optionalDependencies": { ··· },

See [Semver cheatsheet](./semver) for explanation of version ranges.

### Scripts

    "scripts": {
      "start": "node ./bin/xxx",       /* npm start */
      "test": "vows --spec --isolate", /* npm test */
      "postinstall": "...",
      "prepublish": "grunt build",     /* after 'npm install' and before 'npm
                                          publish' */
    }

### Misc

    "private": true,
    "preferGlobal": true

### Config

    {
        "config": {
            "foobar": "hello"
        },
        "scripts": {
            "run": "echo $npm_package_config_foobar"
        }
    }

Keys in `config` are exposed as env vars to scripts.

References
----------

{: .-one-column}

-   <a href="http://package.json.nodejitsu.com/" class="uri">http://package.json.nodejitsu.com/</a>
-   `npm help package.json` {: .-also-see}
