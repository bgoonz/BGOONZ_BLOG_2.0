Usage
-----

### Default usage

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>

{: .-wrap}

This is the default script for Polyfill.io.

### References

-   [API example](https://polyfill.io/v2/docs/api) *(polyfill.io)*
-   [List of features](https://polyfill.io/v2/docs/features) *(polyfill.io)*

Optimized
---------

### For modern browsers

    <script>
        if (!(window.Promise && [].includes && Object.assign && window.Map)) {
            document.write('<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></scr' + 'ipt>');
        }
    </script>

This only includes polyfill.io when necessary, skipping it for modern browsers for faster load times.

### Extra features

    <script>
        if (!(window.fetch && window.Promise && [].includes && Object.assign && window.Map)) {
            document.write('<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch"></scr' + 'ipt>');
        }
    </script>

This is the same as the previous, but also adds a polyfill for `window.fetch()`. We add a `window.fetch` check and loads the additional `fetch` feature.
