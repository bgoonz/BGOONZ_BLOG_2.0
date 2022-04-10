---
title: Common Modules
weight: 0
excerpt: resources
seo:
    title: 'NodeJS Module System'
    description: >-
        This section is similar to a blog but is more technical in nature and time
        invariant with regard to content.
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---


## Modules: CommonJS modules[#](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules)

[Stability: 2](https://nodejs.org/api/documentation.html#documentation_stability_index) - Stable

In the Node.js module system, each file is treated as a separate module. For example, consider a file named `foo.js`:

```
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

On the first line, `foo.js` loads the module `circle.js` that is in the same directory as `foo.js`.

Here are the contents of `circle.js`:

```
const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;
```

The module `circle.js` has exported the functions `area()` and `circumference()`. Functions and objects are added to the root of a module by specifying additional properties on the special `exports` object.

Variables local to the module will be private, because the module is wrapped in a function by Node.js (see [module wrapper](https://nodejs.org/api/modules.html#modules_the_module_wrapper)). In this example, the variable `PI` is private to `circle.js`.

The `module.exports` property can be assigned a new value (such as a function or object).

Below, `bar.js` makes use of the `square` module, which exports a Square class:

```
const Square = require('./square.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);
```

The `square` module is defined in `square.js`:

```
// Assigning to exports will not modify module, must use module.exports
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
```

The module system is implemented in the `require('module')` module.

### Accessing the main module[#](https://nodejs.org/api/modules.html#modules_accessing_the_main_module)

When a file is run directly from Node.js, `require.main` is set to its `module`. That means that it is possible to determine whether a file has been run directly by testing `require.main === module`.

For a file `foo.js`, this will be `true` if run via `node foo.js`, but `false` if run by `require('./foo')`.

Because `module` provides a `filename` property (normally equivalent to `__filename`), the entry point of the current application can be obtained by checking `require.main.filename`.

### Package manager tips[#](https://nodejs.org/api/modules.html#modules_package_manager_tips)

The semantics of the Node.js `require()` function were designed to be general enough to support reasonable directory structures. Package manager programs such as `dpkg`, `rpm`, and `npm` will hopefully find it possible to build native packages from Node.js modules without modification.

Below we give a suggested directory structure that could work:

Let's say that we wanted to have the folder at `/usr/lib/node/<some-package>/<some-version>` hold the contents of a specific version of a package.

Packages can depend on one another. In order to install package `foo`, it may be necessary to install a specific version of package `bar`. The `bar` package may itself have dependencies, and in some cases, these may even collide or form cyclic dependencies.

Because Node.js looks up the `realpath` of any modules it loads (that is, it resolves symlinks) and then [looks for their dependencies in `node_modules` folders](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders), this situation can be resolved with the following architecture:

- `/usr/lib/node/foo/1.2.3/`: Contents of the `foo` package, version 1.2.3.
- `/usr/lib/node/bar/4.3.2/`: Contents of the `bar` package that `foo` depends on.
- `/usr/lib/node/foo/1.2.3/node_modules/bar`: Symbolic link to `/usr/lib/node/bar/4.3.2/`.
- `/usr/lib/node/bar/4.3.2/node_modules/*`: Symbolic links to the packages that `bar` depends on.

Thus, even if a cycle is encountered, or if there are dependency conflicts, every module will be able to get a version of its dependency that it can use.

When the code in the `foo` package does `require('bar')`, it will get the version that is symlinked into `/usr/lib/node/foo/1.2.3/node_modules/bar`. Then, when the code in the `bar` package calls `require('quux')`, it'll get the version that is symlinked into `/usr/lib/node/bar/4.3.2/node_modules/quux`.

Furthermore, to make the module lookup process even more optimal, rather than putting packages directly in `/usr/lib/node`, we could put them in `/usr/lib/node_modules/<name>/<version>`. Then Node.js will not bother looking for missing dependencies in `/usr/node_modules` or `/node_modules`.

In order to make modules available to the Node.js REPL, it might be useful to also add the `/usr/lib/node_modules` folder to the `$NODE_PATH` environment variable. Since the module lookups using `node_modules` folders are all relative, and based on the real path of the files making the calls to `require()`, the packages themselves can be anywhere.

### The `.mjs` extension[#](https://nodejs.org/api/modules.html#modules_the_mjs_extension)

It is not possible to `require()` files that have the `.mjs` extension. Attempting to do so will throw [an error](https://nodejs.org/api/errors.html#errors_err_require_esm). The `.mjs` extension is reserved for [ECMAScript Modules](https://nodejs.org/api/esm.html) which cannot be loaded via `require()`. See [ECMAScript Modules](https://nodejs.org/api/esm.html) for more details.

### All together...[#](https://nodejs.org/api/modules.html#modules_all_together)

To get the exact filename that will be loaded when `require()` is called, use the `require.resolve()` function.

Putting together all of the above, here is the high-level algorithm in pseudocode of what `require()` does:

require(X) from module at path Y

1. If X is a core module,
   a. return the core module
   b. STOP
2. If X begins with '/'
   a. set Y to be the filesystem root
3. If X begins with './' or '/' or '../'
   a. LOAD_AS_FILE(Y + X)
   b. LOAD_AS_DIRECTORY(Y + X)
   c. THROW "not found"
4. If X begins with '#'
   a. LOAD_PACKAGE_IMPORTS(X, dirname(Y))
5. LOAD_PACKAGE_SELF(X, dirname(Y))
6. LOAD_NODE_MODULES(X, dirname(Y))
7. THROW "not found"

LOAD_AS_FILE(X)

1. If X is a file, load X as its file extension format. STOP
2. If X.js is a file, load X.js as JavaScript text. STOP
3. If X.json is a file, parse X.json to a JavaScript Object. STOP
4. If X.node is a file, load X.node as binary addon. STOP

LOAD_INDEX(X)

1. If X/index.js is a file, load X/index.js as JavaScript text. STOP
2. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP
3. If X/index.node is a file, load X/index.node as binary addon. STOP

LOAD_AS_DIRECTORY(X)

1. If X/package.json is a file,
   a. Parse X/package.json, and look for "main" field.
   b. If "main" is a falsy value, GOTO 2.
   c. let M = X + (json main field)
   d. LOAD_AS_FILE(M)
   e. LOAD_INDEX(M)
   f. LOAD_INDEX(X) DEPRECATED
   g. THROW "not found"
2. LOAD_INDEX(X)

LOAD_NODE_MODULES(X, START)

1. let DIRS = NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
   a. LOAD_PACKAGE_EXPORTS(X, DIR)
   b. LOAD_AS_FILE(DIR/X)
   c. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)

1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = [GLOBAL_FOLDERS]
4. while I >= 0,
   a. if PARTS[I] = "node_modules" CONTINUE
   b. DIR = path join(PARTS[0 .. I] + "node_modules")
   c. DIRS = DIRS + DIR
   d. let I = I - 1
5. return DIRS

LOAD_PACKAGE_IMPORTS(X, DIR)

1. Find the closest package scope SCOPE to DIR.
2. If no scope was found, return.
3. If the SCOPE/package.json "imports" is null or undefined, return.
4. let MATCH = PACKAGE_IMPORTS_RESOLVE(X, pathToFileURL(SCOPE),
   ["node", "require"]) [defined in the ESM resolver](https://nodejs.org/api/esm.md#resolver-algorithm-specification).
5. RESOLVE_ESM_MATCH(MATCH).

LOAD_PACKAGE_EXPORTS(X, DIR)

1. Try to interpret X as a combination of NAME and SUBPATH where the name
   may have a @scope/ prefix and the subpath begins with a slash (`/`).
2. If X does not match this pattern or DIR/NAME/package.json is not a file,
   return.
3. Parse DIR/NAME/package.json, and look for "exports" field.
4. If "exports" is null or undefined, return.
5. let MATCH = PACKAGE_EXPORTS_RESOLVE(pathToFileURL(DIR/NAME), "." + SUBPATH,
   `package.json` "exports", ["node", "require"]) [defined in the ESM resolver](https://nodejs.org/api/esm.md#resolver-algorithm-specification).
6. RESOLVE_ESM_MATCH(MATCH)

LOAD_PACKAGE_SELF(X, DIR)

1. Find the closest package scope SCOPE to DIR.
2. If no scope was found, return.
3. If the SCOPE/package.json "exports" is null or undefined, return.
4. If the SCOPE/package.json "name" is not the first segment of X, return.
5. let MATCH = PACKAGE_EXPORTS_RESOLVE(pathToFileURL(SCOPE),
   "." + X.slice("name".length), `package.json` "exports", ["node", "require"])
   [defined in the ESM resolver](https://nodejs.org/api/esm.md#resolver-algorithm-specification).
6. RESOLVE_ESM_MATCH(MATCH)

RESOLVE_ESM_MATCH(MATCH)

1. let { RESOLVED, EXACT } = MATCH
2. let RESOLVED_PATH = fileURLToPath(RESOLVED)
3. If EXACT is true,
   a. If the file at RESOLVED_PATH exists, load RESOLVED_PATH as its extension
   format. STOP
4. Otherwise, if EXACT is false,
   a. LOAD_AS_FILE(RESOLVED_PATH)
   b. LOAD_AS_DIRECTORY(RESOLVED_PATH)
5. THROW "not found"

### Caching[#](https://nodejs.org/api/modules.html#modules_caching)

Modules are cached after the first time they are loaded. This means (among other things) that every call to `require('foo')` will get exactly the same object returned, if it would resolve to the same file.

Provided `require.cache` is not modified, multiple calls to `require('foo')` will not cause the module code to be executed multiple times. This is an important feature. With it, "partially done" objects can be returned, thus allowing transitive dependencies to be loaded even when they would cause cycles.

To have a module execute code multiple times, export a function, and call that function.

#### Module caching caveats[#](https://nodejs.org/api/modules.html#modules_module_caching_caveats)

Modules are cached based on their resolved filename. Since modules may resolve to a different filename based on the location of the calling module (loading from `node_modules` folders), it is not a _guarantee_ that `require('foo')` will always return the exact same object, if it would resolve to different files.

Additionally, on case-insensitive file systems or operating systems, different resolved filenames can point to the same file, but the cache will still treat them as different modules and will reload the file multiple times. For example, `require('./foo')` and `require('./FOO')` return two different objects, irrespective of whether or not `./foo` and `./FOO` are the same file.

### Core modules[#](https://nodejs.org/api/modules.html#modules_core_modules)

History

Node.js has several modules compiled into the binary. These modules are described in greater detail elsewhere in this documentation.

The core modules are defined within the Node.js source and are located in the `lib/` folder.

Core modules are always preferentially loaded if their identifier is passed to `require()`. For instance, `require('http')` will always return the built in HTTP module, even if there is a file by that name.

Core modules can also be identified using the `node:` prefix, in which case it bypasses the `require` cache. For instance, `require('node:http')` will always return the built in HTTP module, even if there is `require.cache` entry by that name.

### Cycles[#](https://nodejs.org/api/modules.html#modules_cycles)

When there are circular `require()` calls, a module might not have finished executing when it is returned.

Consider this situation:

`a.js`:

```
console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');
```

`b.js`:

```
console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
```

`main.js`:

```
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);
```

When `main.js` loads `a.js`, then `a.js` in turn loads `b.js`. At that point, `b.js` tries to load `a.js`. In order to prevent an infinite loop, an unfinished copy of the `a.js` exports object is returned to the `b.js` module. `b.js` then finishes loading, and its `exports` object is provided to the `a.js` module.

By the time `main.js` has loaded both modules, they're both finished. The output of this program would thus be:

```
$ node main.js
main starting
a starting
b starting
in b, a.done = false
b done
in a, b.done = true
a done
in main, a.done = true, b.done = true
```

Careful planning is required to allow cyclic module dependencies to work correctly within an application.

### File modules[#](https://nodejs.org/api/modules.html#modules_file_modules)

If the exact filename is not found, then Node.js will attempt to load the required filename with the added extensions: `.js`, `.json`, and finally `.node`.

`.js` files are interpreted as JavaScript text files, and `.json` files are parsed as JSON text files. `.node` files are interpreted as compiled addon modules loaded with `process.dlopen()`.

A required module prefixed with `'/'` is an absolute path to the file. For example, `require('/home/marco/foo.js')` will load the file at `/home/marco/foo.js`.

A required module prefixed with `'./'` is relative to the file calling `require()`. That is, `circle.js` must be in the same directory as `foo.js` for `require('./circle')` to find it.

Without a leading `'/'`, `'./'`, or `'../'` to indicate a file, the module must either be a core module or is loaded from a `node_modules` folder.

If the given path does not exist, `require()` will throw an [`Error`](https://nodejs.org/api/errors.html#errors_class_error) with its `code` property set to `'MODULE_NOT_FOUND'`.

### Folders as modules[#](https://nodejs.org/api/modules.html#modules_folders_as_modules)

It is convenient to organize programs and libraries into self-contained directories, and then provide a single entry point to those directories. There are three ways in which a folder may be passed to `require()` as an argument.

The first is to create a [`package.json`](https://nodejs.org/api/packages.html#packages_node_js_package_json_field_definitions) file in the root of the folder, which specifies a `main` module. An example [`package.json`](https://nodejs.org/api/packages.html#packages_node_js_package_json_field_definitions) file might look like this:

```
{ "name" : "some-library",
  "main" : "./lib/some-library.js" }
```

If this was in a folder at `./some-library`, then `require('./some-library')` would attempt to load `./some-library/lib/some-library.js`.

This is the extent of the awareness of `package.json` files within Node.js.

If there is no [`package.json`](https://nodejs.org/api/packages.html#packages_node_js_package_json_field_definitions) file present in the directory, or if the [`"main"`](https://nodejs.org/api/packages.html#packages_main) entry is missing or cannot be resolved, then Node.js will attempt to load an `index.js` or `index.node` file out of that directory. For example, if there was no [`package.json`](https://nodejs.org/api/packages.html#packages_node_js_package_json_field_definitions) file in the previous example, then `require('./some-library')` would attempt to load:

- `./some-library/index.js`
- `./some-library/index.node`

If these attempts fail, then Node.js will report the entire module as missing with the default error:

```
Error: Cannot find module 'some-library'
```

### Loading from `node_modules` folders[#](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)

If the module identifier passed to `require()` is not a [core](https://nodejs.org/api/modules.html#modules_core_modules) module, and does not begin with `'/'`, `'../'`, or `'./'`, then Node.js starts at the parent directory of the current module, and adds `/node_modules`, and attempts to load the module from that location. Node.js will not append `node_modules` to a path already ending in `node_modules`.

If it is not found there, then it moves to the parent directory, and so on, until the root of the file system is reached.

For example, if the file at `'/home/ry/projects/foo.js'` called `require('bar.js')`, then Node.js would look in the following locations, in this order:

- `/home/ry/projects/node_modules/bar.js`
- `/home/ry/node_modules/bar.js`
- `/home/node_modules/bar.js`
- `/node_modules/bar.js`

This allows programs to localize their dependencies, so that they do not clash.

It is possible to require specific files or sub modules distributed with a module by including a path suffix after the module name. For instance `require('example-module/path/to/file')` would resolve `path/to/file` relative to where `example-module` is located. The suffixed path follows the same module resolution semantics.

### Loading from the global folders[#](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders)

If the `NODE_PATH` environment variable is set to a colon-delimited list of absolute paths, then Node.js will search those paths for modules if they are not found elsewhere.

On Windows, `NODE_PATH` is delimited by semicolons (`;`) instead of colons.

`NODE_PATH` was originally created to support loading modules from varying paths before the current [module resolution](https://nodejs.org/api/modules.html#modules_all_together) algorithm was defined.

`NODE_PATH` is still supported, but is less necessary now that the Node.js ecosystem has settled on a convention for locating dependent modules. Sometimes deployments that rely on `NODE_PATH` show surprising behavior when people are unaware that `NODE_PATH` must be set. Sometimes a module's dependencies change, causing a different version (or even a different module) to be loaded as the `NODE_PATH` is searched.

Additionally, Node.js will search in the following list of GLOBAL_FOLDERS:

- 1: `$HOME/.node_modules`
- 2: `$HOME/.node_libraries`
- 3: `$PREFIX/lib/node`

Where `$HOME` is the user's home directory, and `$PREFIX` is the Node.js configured `node_prefix`.

These are mostly for historic reasons.

It is strongly encouraged to place dependencies in the local `node_modules` folder. These will be loaded faster, and more reliably.

### The module wrapper[#](https://nodejs.org/api/modules.html#modules_the_module_wrapper)

Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

```
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

By doing this, Node.js achieves a few things:

- It keeps top-level variables (defined with `var`, `const` or `let`) scoped to the module rather than the global object.
- It helps to provide some global-looking variables that are actually specific to the module, such as:
    - The `module` and `exports` objects that the implementor can use to export values from the module.
    - The convenience variables `__filename` and `__dirname`, containing the module's absolute filename and directory path.

### The module scope[#](https://nodejs.org/api/modules.html#modules_the_module_scope)

#### `__dirname`[#](https://nodejs.org/api/modules.html#modules_dirname)

Added in: v0.1.27

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The directory name of the current module. This is the same as the [`path.dirname()`](https://nodejs.org/api/path.html#path_path_dirname_path) of the [`__filename`](https://nodejs.org/api/modules.html#modules_filename).

Example: running `node example.js` from `/Users/mjr`

```
console.log(__dirname);
// Prints: /Users/mjr
console.log(path.dirname(__filename));
// Prints: /Users/mjr
```

#### `__filename`[#](https://nodejs.org/api/modules.html#modules_filename)

Added in: v0.0.1

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The file name of the current module. This is the current module file's absolute path with symlinks resolved.

For a main program this is not necessarily the same as the file name used in the command line.

See [`__dirname`](https://nodejs.org/api/modules.html#modules_dirname) for the directory name of the current module.

Examples:

Running `node example.js` from `/Users/mjr`

```
console.log(__filename);
// Prints: /Users/mjr/example.js
console.log(__dirname);
// Prints: /Users/mjr
```

Given two modules: `a` and `b`, where `b` is a dependency of `a` and there is a directory structure of:

- `/Users/mjr/app/a.js`
- `/Users/mjr/app/node_modules/b/b.js`

References to `__filename` within `b.js` will return `/Users/mjr/app/node_modules/b/b.js` while references to `__filename` within `a.js` will return `/Users/mjr/app/a.js`.

#### `exports`[#](https://nodejs.org/api/modules.html#modules_exports)

Added in: v0.1.12

- [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

A reference to the `module.exports` that is shorter to type. See the section about the [exports shortcut](https://nodejs.org/api/modules.html#modules_exports_shortcut) for details on when to use `exports` and when to use `module.exports`.

#### `module`[#](https://nodejs.org/api/modules.html#modules_module)

Added in: v0.1.16

- [<module>](https://nodejs.org/api/modules.html#modules_the_module_object)

A reference to the current module, see the section about the [`module` object](https://nodejs.org/api/modules.html#modules_the_module_object). In particular, `module.exports` is used for defining what a module exports and makes available through `require()`.

#### `require(id)`[#](https://nodejs.org/api/modules.html#modules_require_id)

Added in: v0.1.13

- `id` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) module name or path
- Returns: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) exported module content

Used to import modules, `JSON`, and local files. Modules can be imported from `node_modules`. Local modules and JSON files can be imported using a relative path (e.g. `./`, `./foo`, `./bar/baz`, `../foo`) that will be resolved against the directory named by [`__dirname`](https://nodejs.org/api/modules.html#modules_dirname) (if defined) or the current working directory. The relative paths of POSIX style are resolved in an OS independent fashion, meaning that the examples above will work on Windows in the same way they would on Unix systems.

```
// Importing a local module with a path relative to the `__dirname` or current
// working directory. (On Windows, this would resolve to .\path\myLocalModule.)
const myLocalModule = require('./path/myLocalModule');

// Importing a JSON file:
const jsonData = require('./path/filename.json');

// Importing a module from node_modules or Node.js built-in module:
const crypto = require('crypto');
```

##### `require.cache`[#](https://nodejs.org/api/modules.html#modules_require_cache)

Added in: v0.3.0

- [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Modules are cached in this object when they are required. By deleting a key value from this object, the next `require` will reload the module. This does not apply to [native addons](https://nodejs.org/api/addons.html), for which reloading will result in an error.

Adding or replacing entries is also possible. This cache is checked before native modules and if a name matching a native module is added to the cache, only `node:`-prefixed require calls are going to receive the native module. Use with care!

```
const assert = require('assert');
const realFs = require('fs');

const fakeFs = {};
require.cache.fs = { exports: fakeFs };

assert.strictEqual(require('fs'), fakeFs);
assert.strictEqual(require('node:fs'), realFs);
```

##### `require.extensions`[#](https://nodejs.org/api/modules.html#modules_require_extensions)

Added in: v0.3.0Deprecated since: v0.10.6

[Stability: 0](https://nodejs.org/api/documentation.html#documentation_stability_index) - Deprecated

- [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Instruct `require` on how to handle certain file extensions.

Process files with the extension `.sjs` as `.js`:

```
require.extensions['.sjs'] = require.extensions['.js'];
```

Deprecated. In the past, this list has been used to load non-JavaScript modules into Node.js by compiling them on-demand. However, in practice, there are much better ways to do this, such as loading modules via some other Node.js program, or compiling them to JavaScript ahead of time.

Avoid using `require.extensions`. Use could cause subtle bugs and resolving the extensions gets slower with each registered extension.

##### `require.main`[#](https://nodejs.org/api/modules.html#modules_require_main)

Added in: v0.1.17

- [<module>](https://nodejs.org/api/modules.html#modules_the_module_object)

The `Module` object representing the entry script loaded when the Node.js process launched. See ["Accessing the main module"](https://nodejs.org/api/modules.html#modules_accessing_the_main_module).

In `entry.js` script:

```
console.log(require.main);
```

```
node entry.js
```

```
Module {
  id: '.',
  path: '/absolute/path/to',
  exports: {},
  filename: '/absolute/path/to/entry.js',
  loaded: false,
  children: [],
  paths:
   [ '/absolute/path/to/node_modules',
     '/absolute/path/node_modules',
     '/absolute/node_modules',
     '/node_modules' ] }
```

##### `require.resolve(request[, options])`[#](https://nodejs.org/api/modules.html#modules_require_resolve_request_options)

History

- `request` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The module path to resolve.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- - `paths` [<string[]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Paths to resolve module location from. If present, these paths are used instead of the default resolution paths, with the exception of [GLOBAL_FOLDERS](https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders) like `$HOME/.node_modules`, which are always included. Each of these paths is used as a starting point for the module resolution algorithm, meaning that the `node_modules` hierarchy is checked from this location.
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

Use the internal `require()` machinery to look up the location of a module, but rather than loading the module, just return the resolved filename.

If the module can not be found, a `MODULE_NOT_FOUND` error is thrown.

###### `require.resolve.paths(request)`[#](https://nodejs.org/api/modules.html#modules_require_resolve_paths_request)

Added in: v8.9.0

- `request` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The module path whose lookup paths are being retrieved.
- Returns: [<string[]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)

Returns an array containing the paths searched during resolution of `request` or `null` if the `request` string references a core module, for example `http` or `fs`.

### The `module` object[#](https://nodejs.org/api/modules.html#modules_the_module_object)

Added in: v0.1.16

- [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

In each module, the `module` free variable is a reference to the object representing the current module. For convenience, `module.exports` is also accessible via the `exports` module-global. `module` is not actually a global but rather local to each module.

#### `module.children`[#](https://nodejs.org/api/modules.html#modules_module_children)

Added in: v0.1.16

- [<module[]>](https://nodejs.org/api/modules.html#modules_the_module_object)

The module objects required for the first time by this one.

#### `module.exports`[#](https://nodejs.org/api/modules.html#modules_module_exports)

Added in: v0.1.16

- [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

The `module.exports` object is created by the `Module` system. Sometimes this is not acceptable; many want their module to be an instance of some class. To do this, assign the desired export object to `module.exports`. Assigning the desired object to `exports` will simply rebind the local `exports` variable, which is probably not what is desired.

For example, suppose we were making a module called `a.js`:

```
const EventEmitter = require('events');

module.exports = new EventEmitter();

// Do some work, and after some time emit
// the 'ready' event from the module itself.
setTimeout(() => {
  module.exports.emit('ready');
}, 1000);
```

Then in another file we could do:

```
const a = require('./a');
a.on('ready', () => {
  console.log('module "a" is ready');
});
```

Assignment to `module.exports` must be done immediately. It cannot be done in any callbacks. This does not work:

`x.js`:

```
setTimeout(() => {
  module.exports = { a: 'hello' };
}, 0);
```

`y.js`:

```
const x = require('./x');
console.log(x.a);
```

##### `exports` shortcut[#](https://nodejs.org/api/modules.html#modules_exports_shortcut)

Added in: v0.1.16

The `exports` variable is available within a module's file-level scope, and is assigned the value of `module.exports` before the module is evaluated.

It allows a shortcut, so that `module.exports.f = ...` can be written more succinctly as `exports.f = ...`. However, be aware that like any variable, if a new value is assigned to `exports`, it is no longer bound to `module.exports`:

```
module.exports.hello = true; // Exported from require of module
exports = { hello: false };  // Not exported, only available in the module
```

When the `module.exports` property is being completely replaced by a new object, it is common to also reassign `exports`:

```
module.exports = exports = function Constructor() {
  // ... etc.
};
```

To illustrate the behavior, imagine this hypothetical implementation of `require()`, which is quite similar to what is actually done by `require()`:

```
function require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    // Module code here. In this example, define a function.
    function someFunc() {}
    exports = someFunc;
    // At this point, exports is no longer a shortcut to module.exports, and
    // this module will still export an empty default object.
    module.exports = someFunc;
    // At this point, the module will now export someFunc, instead of the
    // default object.
  })(module, module.exports);
  return module.exports;
}
```

#### `module.filename`[#](https://nodejs.org/api/modules.html#modules_module_filename)

Added in: v0.1.16

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The fully resolved filename of the module.

#### `module.id`[#](https://nodejs.org/api/modules.html#modules_module_id)

Added in: v0.1.16

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The identifier for the module. Typically this is the fully resolved filename.

#### `module.isPreloading`[#](https://nodejs.org/api/modules.html#modules_module_ispreloading)

Added in: v15.4.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if the module is running during the Node.js preload phase.

#### `module.loaded`[#](https://nodejs.org/api/modules.html#modules_module_loaded)

Added in: v0.1.16

- [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Whether or not the module is done loading, or is in the process of loading.

#### `module.parent`[#](https://nodejs.org/api/modules.html#modules_module_parent)

Added in: v0.1.16Deprecated since: v14.6.0, v12.19.0

[Stability: 0](https://nodejs.org/api/documentation.html#documentation_stability_index) - Deprecated: Please use [`require.main`](https://nodejs.org/api/modules.html#modules_require_main) and [`module.children`](https://nodejs.org/api/modules.html#modules_module_children) instead.

- [<module>](https://nodejs.org/api/modules.html#modules_the_module_object) | [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) | [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)

The module that first required this one, or `null` if the current module is the entry point of the current process, or `undefined` if the module was loaded by something that is not a CommonJS module (E.G.: REPL or `import`).

#### `module.path`[#](https://nodejs.org/api/modules.html#modules_module_path)

Added in: v11.14.0

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The directory name of the module. This is usually the same as the [`path.dirname()`](https://nodejs.org/api/path.html#path_path_dirname_path) of the [`module.id`](https://nodejs.org/api/modules.html#modules_module_id).

#### `module.paths`[#](https://nodejs.org/api/modules.html#modules_module_paths)

Added in: v0.4.0

- [<string[]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The search paths for the module.

#### `module.require(id)`[#](https://nodejs.org/api/modules.html#modules_module_require_id)

Added in: v0.5.1

- `id` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) exported module content

The `module.require()` method provides a way to load a module as if `require()` was called from the original module.

In order to do this, it is necessary to get a reference to the `module` object. Since `require()` returns the `module.exports`, and the `module` is typically _only_ available within a specific module's code, it must be explicitly exported in order to be used.

### The `Module` object[#](https://nodejs.org/api/modules.html#modules_the_module_object_1)

This section was moved to [Modules: `module` core module](https://nodejs.org/api/module.html#module_the_module_object).

- [`module.builtinModules`](https://nodejs.org/api/module.html#module_module_builtinmodules)
- [`module.createRequire(filename)`](https://nodejs.org/api/module.html#module_module_createrequire_filename)
- [](https://nodejs.org/api/module.html#module_module_syncbuiltinesmexports)
