### Basic config

#### rollup.config.js

    export default {
        input: 'src/main.js',
        output: {
            file: 'bundle.js',
            format: 'cjs'
        }
    };

#### Terminal

    npm install -D rollup

<table><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>rollup -c -o bundle.js</code></td><td>bundle using config</td></tr><tr class="even"><td><code>rollup main.js --o bundle.js --f cjs</code></td><td>bundle</td></tr><tr class="odd"><td><code>rollup --watch</code></td><td>bundle continuously</td></tr></tbody></table>

You may need to use `./node_modules/.bin/rollup` as a command if you did not install rollup globally.

### Multiple outputs

#### rollup.config.js

    export default [
        {
            input: 'src/main.js',
            output: {
                file: __dirname + '/public/main.js',
                format: 'cjs',
                name: 'main'
            }
        },
        {
            input: 'src/vendor.js',
            output: {
                file: __dirname + 'public/vendor.js',
                format: 'cjs',
                name: 'vendor'
            }
        }
    ];

This creates `main.js` and `vendor.js`.

Using plugins
-------------

### Plugins

#### Terminal

    npm install -D @rollup/plugin-json

#### rollup.config.js

    import json from '@rollup/plugin-json';

    export default {
        input: 'src/main.js',
        output: {
            file: 'bundle.js',
            format: 'cjs'
        },
        plugins: [json()]
    };

### npm packages

#### Terminal

    npm install -D @rollup/plugin-node-resolve

#### rollup.config.js

    import resolve from '@rollup/plugin-node-resolve';

    export default {
        input: 'src/main.js',
        output: {
            file: 'bundle.js',
            format: 'cjs'
        },
        plugins: [resolve()]
    };

When you run a npm run build, no warning is emitted and contains the imported modules.

### Peer dependencies

#### Terminal

    npm install -D @rollup/plugin-node-resolve

#### rollup.config.js

    import resolve from '@rollup/plugin-node-resolve';

    export default {
        input: 'src/main.js',
        output: {
            file: 'bundle.js',
            format: 'cjs'
        },
        plugins: [
            resolve({
                // pass custom options to the resolve plugin
                customResolveOptions: {
                    moduleDirectory: 'node_modules'
                }
            })
        ],
        // indicate which modules should be treated as external
        external: ['lodash']
    };

### Babel

#### Terminal

    npm install -D rollup-plugin-babel

#### rollup.config.js

    import resolve from '@rollup/plugin-node-resolve';
    import babel from 'rollup-plugin-babel';

    export default {
        input: 'src/main.js',
        output: {
            file: 'bundle.js',
            format: 'cjs'
        },
        plugins: [
            resolve(),
            babel({
                exclude: 'node_modules/**' // only transpile our source code
            })
        ]
    };

#### src/.babelrc

    {
      "presets": [
        ["latest", {
          "es2015": {
            "modules": false
          }
        }]
      ],
      "plugins": ["external-helpers"]
    }
