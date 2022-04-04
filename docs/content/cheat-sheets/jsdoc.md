### Functions

    /**
     * This is a function.
     *
     * @param {string} n - A string param
     * @return {string} A good string
     *
     * @example
     *
     *     foo('hello')
     */

    function foo(n) {
        return n;
    }

See: <a href="https://jsdoc.app/index.html" class="uri">https://jsdoc.app/index.html</a>

### Types

<table><thead><tr class="header"><th>Type</th><th>Description</th><th></th></tr></thead><tbody><tr class="odd"><td><code>@param {string=} n</code></td><td>Optional</td><td></td></tr><tr class="even"><td><code>@param {string} [n]</code></td><td>Optional</td><td></td></tr><tr class="odd"><td><code>@param {(string                | number)} n</code></td><td>Multiple types</td><td></td></tr><tr class="even"><td><code>@param {*} n</code></td><td>Any type</td><td></td></tr><tr class="odd"><td><code>@param {...string} n</code></td><td>Repeatable arguments</td><td></td></tr><tr class="even"><td><code>@param {string} [n="hi"]</code></td><td>Optional with default</td><td></td></tr><tr class="odd"><td><code>@param {string[]} n</code></td><td>Array of strings</td><td></td></tr><tr class="even"><td><code>@return {Promise&lt;string[]&gt;} n</code></td><td>Promise fulfilled by array of strings</td><td></td></tr></tbody></table>

See: <a href="https://jsdoc.app/tags-type.html" class="uri">https://jsdoc.app/tags-type.html</a>

### Variables

    /**
     * @type {number}
     */
    var FOO = 1;

    /**
     * @const {number}
     */
    const FOO = 1;

### Typedef

    /**
     * A song
     * @typedef {Object} Song
     * @property {string} title - The title
     * @property {string} artist - The artist
     * @property {number} year - The year
     */

    /**
     * Plays a song
     * @param {Song} song - The {@link Song} to be played
     */

    function play(song) {}

See: <a href="https://jsdoc.app/tags-typedef.html" class="uri">https://jsdoc.app/tags-typedef.html</a>

### Typedef Shorthand

{% raw %}

    /**
     * A song
     * @typedef {{title: string, artist: string, year: number}} Song
     */

{% endraw %}

    /**
     * Plays a song
     * @param {Song} song - The {@link Song} to be played
     */

    function play(song) {}

See: <a href="https://jsdoc.app/tags-typedef.html" class="uri">https://jsdoc.app/tags-typedef.html</a>

### Importing types

    /**
     * @typedef {import('./Foo').default} Bar
     */

    /**
     * @param {Bar} x
     */

    function test(x) {}

This syntax is [TypeScript-specific](https://github.com/Microsoft/TypeScript/wiki/JsDoc-support-in-JavaScript#import-types).

### Other keywords

    /**
     * @throws {FooException}
     * @private
     * @deprecated
     * @see
     *
     * @function
     * @class
     */

See the full list: <a href="https://jsdoc.app/index.html#block-tags" class="uri">https://jsdoc.app/index.html#block-tags</a>

### Renaming

    /*
     * @alias Foo.bar
     * @name Foo.bar
     */

Prefer `alias` over `name`. See: <a href="https://jsdoc.app/tags-alias.html" class="uri">https://jsdoc.app/tags-alias.html</a>
