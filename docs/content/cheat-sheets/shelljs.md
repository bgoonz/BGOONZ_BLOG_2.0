### Example

    var shell = require('shelljs');

    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    }

    // Copy files to release dir
    shell.rm('-rf', 'out/Release');
    shell.cp('-R', 'stuff/', 'out/Release');

    // Replace macros in each .js file
    shell.cd('lib');
    shell.ls('*.js').forEach(function (file) {
        shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
        shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
        shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
    });
    shell.cd('..');

    // Run external tool synchronously
    if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
        shell.echo('Error: Git commit failed');
        shell.exit(1);
    }

Taken from the [Readme](https://github.com/shelljs/shelljs).

### Require

    const sh = require('shelljs');

### Paths

    sh.cd('dir');

    sh.mkdir('dir');
    sh.mkdir('-p', 'dir');

### File manipulation

    sh.cp('src', 'dest');
    sh.cp('-rf', 'src', 'dest');

    sh.rm('file');
    sh.rm('-rf', 'file');

    sh.mv('src', 'dest');
    sh.mv(['src1', 'src2'], 'dest');

    sh.chmod('644', 'file');
    sh.chmod(755, 'file');
    sh.chmod('u+x', 'file');

### Tests

    sh.test('-b', 'path'); // block device
    sh.test('-d', 'path'); // dir
    sh.test('-e', 'path'); // exists
    sh.test('-f', 'path'); // file
    sh.test('-L', 'path'); // symlink

### Cat and output

    src = sh.cat('file*.txt');

    'hello'.to('output.txt');
    'hello'.toEnd('append.txt');

    sh.cat('input.txt').to('output.txt');

### Utils

    sh.which('x');
    sh.pwd();

    sh.echo('hi');

    sh.exec('node --version').code;
    sh.exec('node --version').output;
    sh.exec('node --version', { silent: true }).output;

    sh.exec('node --version', (code, output) => {
        sh.echo(`exit code ${code}`);
    });

    sh.tempdir();

    sh.error(); // null if no error

Also see
--------

-   <a href="https://github.com/shelljs/shelljs" class="uri">https://github.com/shelljs/shelljs</a>
