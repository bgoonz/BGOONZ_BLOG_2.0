### Usage

    var minimist = require('minimist');

{: .-setup}

    var args = minimist(process.argv.slice(2), {
        string: 'lang', // --lang xml
        boolean: ['version'], // --version
        alias: { v: 'version' }
    });

    console.log(args);

All options are optional, but it’s recommended you set `string` and `boolean` at least.

### All options

    var args = minimist(process.argv.slice(2), {
      string: [ 'lang' ],
      boolean: [ 'pager' ],
      alias: { h: 'help', v: 'version' },
      default: { lang: 'en' },
      '--': true,
      stopEarly: true, /* populate _ with first non-option */
      unknown: function () { ... } /* invoked on unknown param */
    })

All options are optional.

### Result

With `--lang xml --no-pager -h index.js package.json`, you get: {: .-setup}

    args == {
      lang: 'xml',
      version: false,
      h: true,
      help: true,
      _: [ 'index.js', 'package.json' ]
    }

Meow
----

### Help and version

Use [meow](https://www.npmjs.com/package/meow) to automatically add support for `--help`, `--version` and more. {: .-setup}

    meow(
        `
        Usage:
            $0 FILES [options]

        Options:
            -h, --help         print usage information
            -v, --version      show version info and exit
    `,
        {
            alias: { h: 'help', v: 'version' }
            /* minimist options */
        }
    );

### Reference

-   <a href="https://www.npmjs.org/package/minimist" class="uri">https://www.npmjs.org/package/minimist</a>
-   <a href="https://github.com/substack/minimist" class="uri">https://github.com/substack/minimist</a>
