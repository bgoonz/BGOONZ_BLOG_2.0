### Getting started

    watchman watch ./src

Adds `./src` to the watch list.

    watchman -- trigger ./src retest '*.js' -- npm test

Adds a trigger called `retest` to run `npm test` every time `*.js` changes in `./src`.

### Watching

    watchman watch ~/src
    watchman watch-list
    watchman watch-del ~/src

Also see
--------

-   [Documentation](https://facebook.github.io/watchman/docs/install.html) *(facebook.github.io)*
