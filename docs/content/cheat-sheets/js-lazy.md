Shortcuts
---------

{: .-left-reference}

### Examples

    n = +'4096'; // n === 4096
    s = '' + 200; // s === '200'

    now = +new Date();
    isPublished = !!post.publishedAt;

### Shortcuts

<table><thead><tr class="header"><th>What</th><th>Lazy mode</th><th>"The right way”</th><th></th></tr></thead><tbody><tr class="odd"><td>String to number</td><td><code>+str</code></td><td><code>parseInt(str, 10)</code> <em>or</em> <code>parseFloat()</code></td><td></td></tr><tr class="even"><td>Math floor</td><td><code>num                   | 0</code></td><td><code>Math.floor(num)</code></td><td></td></tr><tr class="odd"><td>Number to string</td><td><code>'' + num</code></td><td><code>num.toString()</code></td><td></td></tr><tr class="even"><td>Date to UNIX timestamp</td><td><code>+new Date()</code></td><td><code>new Date().getTime()</code></td><td></td></tr><tr class="odd"><td>Any to boolean</td><td><code>!!value</code></td><td><code>Boolean(value)</code></td><td></td></tr><tr class="even"><td>Check array contents</td><td><code>if (~arr.indexOf(v))</code></td><td><code>if (arr.includes(v))</code></td><td></td></tr></tbody></table>

{: .-left-align.-headers}

`.includes` is ES6-only, otherwise use `.indexOf(val) !== -1` if you don’t polyfill.
