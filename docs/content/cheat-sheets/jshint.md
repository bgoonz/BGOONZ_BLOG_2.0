### Relaxing

Enable these options to *not* throw errors in these conditions. See: [Relaxing](http://www.jshint.com/docs/options/#relaxing-options) {: .-setup}

    /* jshint asi: true */
    allow();
    missing_semicolons();

    /* jshint boss: true */
    if (m = str.match(/.../))

    /* jshint debug: true */
    debugger;

    /* jshint eqnull: true */
    if (x == null)

    /* jshint evil: true */
    eval('...');

    /* jshint expr: true */
    production && minify = true;
    div.innerWidth;
    expect(x).be.true;

    /* jshint laxcomma: true */
    var one = 1,
        two = 2;

    /* jshint loopfunc: true */
    for (i=0; i<10; x++) {
      (function(i) { ... })(i);
    }

    /* jshint sub: true */
    process.env['name_here'];

    /* jshint strict: "global" */
    'use strict';

### Enforcing

Enable these options to catch more errors. See: [Enforcing](http://www.jshint.com/docs/options/#enforcing-options) {: .-setup}

    /* jshint curly: true */
    while (day)
        // err: use { }'s
        shuffle();

    /* jshint eqeqeq: true */
    if (a == null)                  // err: use ===

    /* jshint es3: true */
    // ...for legacy IE compatibility
    a.default = function() { ... }; // err: reserved word
    array = [ 1, 2, 3, ];           // err: extra comma

    /* jshint forin: true */
    for (key in obj) { ... }        // err: check obj.hasOwnProperty(key)

    /* jshint freeze: true */
    Array.prototype.count = ...;    // err: don't modify native prototypes

    /* jshint indent: 4 */
    if (x) {                        // err: expected indent of 4, found 2
      ...;
    }

    /* jshint quotmark: single */
    /* jshint quotmark: double */
    alert('hi'); // err: only single allowed

    /* jshint strict: true */
    function() { ... }              // err: need "use strict"

    /* jshint white: true, indent: 4 */
    /* jshint maxdepth: 2 */
    /* jshint maxparams: 3 */
    /* jshint maxstatements: 4 */
    /* jshint maxcomplexity: 5 */
    /* jshint maxlen: 80 */

### Ignore

    /* jshint ignore:start */
    /* jshint ignore:end */

### Globals and Environments

    /* jshint undef: true */
    /* global jQuery */
    /* global -BAD_LIB */

    /* jshint devel: true */   console, alert, ...
    /* jshint browser: true */ window, document, location, ...
    /* jshint node: true */    module, exports, console, process, ...
    /* jshint jquery: true */  jQuery, $

See: [Environments](http://www.jshint.com/docs/options/#environments)

### Also see

-   <a href="http://www.jshint.com/docs/options/" class="uri">http://www.jshint.com/docs/options/</a>
-   <a href="https://gist.github.com/haschek/2595796" class="uri">https://gist.github.com/haschek/2595796</a>
