### Basic usage

    var argv = require('yargs').argv;

    argv._; // [ ... ]
    argv.$0; // "node bin/mybin"
    argv.verbose; // --verbose

### Help and version

    var argv = require('yargs')
        // version
        .alias('v', 'version')
        .version(function () {
            return require('../package').version;
        })
        .describe('v', 'show version information')

        // help text
        .alias('h', 'help')
        .help('help')
        .usage('Usage: $0 -x [num]')
        .showHelpOnFail(false, 'Specify --help for available options');

### Options

      .option('f', {
          alias : 'file',
          describe: 'x marks the spot',
          type: 'string', /* array | boolean | string */
          nargs: 1,
          demand: true,
          demand: 'file is required',
          default: '/etc/passwd'
          // also: count:true, requiresArg:true
      })

      .options({
        f: { ... }
      })

### Examples and more help stuff

      // more help
      .example('...')
      .epilog('copyright 2015')
      .command('start', 'start a server')

### Stacking

      .count('verbose')

    argv.verbose // -vvv => 3

### Reject non explicits

      .strict()

### Methods

    yargs.showHelp()
    yargs.help() //=>string
