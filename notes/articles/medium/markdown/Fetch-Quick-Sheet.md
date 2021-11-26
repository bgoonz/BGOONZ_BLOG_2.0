Fetch Quick Sheet
=================

Fetch

------------------------------------------------------------------------

### Fetch Quick Sheet

### Fetch

    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => ...)

### Response

    fetch('/data.json')
    .then(res => {
      res.text()       // response body (=> Promise)
      res.json()       // parse via JSON (=> Promise)
      res.status       //=> 200
      res.statusText   //=> 'OK'
      res.redirected   //=> false
      res.ok           //=> true
      res.url          //=> 'http://site.com/data.json'
      res.type         //=> 'basic'
                       //   ('cors' 'default' 'error'
                       //    'opaque' 'opaqueredirect')

      res.headers.get('Content-Type')
    })

### Request options

    fetch('/data.json', {
      method: 'post',
      body: new FormData(form), // post body
      body: JSON.stringify(...),

      headers: {
        'Accept': 'application/json'
      },

      credentials: 'same-origin', // send cookies
      credentials: 'include',     // send cookies, even in CORS

    })

### Catching errors

    fetch('/data.json')
      .then(checkStatus)

    function checkStatus (res) {
      if (res.status >= 200 && res.status < 300) {
        return res
      } else {
        let err = new Error(res.statusText)
        err.response = res
        throw err
      }
    }

Non-2xx responses are still successful requests. Use another function to turn them to errors.

### Using with node.js

    const fetch = require('isomorphic-fetch')

See: <a href="https://npmjs.com/package/isomorphic-fetch" class="markup--anchor markup--p-anchor">isomorphic-fetch</a> *(npmjs.com)*

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 5, 2021](https://medium.com/p/8872650742b4).

<a href="https://medium.com/@bryanguner/fetch-quick-sheet-8872650742b4" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
