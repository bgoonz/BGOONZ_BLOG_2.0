### Fetch

    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => ...)

{: data-line="4”}

### Response

    fetch('/data.json').then((res) => {
        res.text(); // response body (=> Promise)
        res.json(); // parse via JSON (=> Promise)
        res.status; //=> 200
        res.statusText; //=> 'OK'
        res.redirected; //=> false
        res.ok; //=> true
        res.url; //=> 'http://site.com/data.json'
        res.type; //=> 'basic'
        //   ('cors' 'default' 'error'
        //    'opaque' 'opaqueredirect')

        res.headers.get('Content-Type');
    });

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

    fetch('/data.json').then(checkStatus);

------------------------------------------------------------------------

    function checkStatus(res) {
        if (res.status >= 200 && res.status < 300) {
            return res;
        } else {
            let err = new Error(res.statusText);
            err.response = res;
            throw err;
        }
    }

Non-2xx responses are still successful requests. Use another function to turn them to errors.

### Using with node.js

    const fetch = require('isomorphic-fetch');

See: [isomorphic-fetch](https://npmjs.com/package/isomorphic-fetch) *(npmjs.com)*

References
----------

{: .-one-column}

-   <a href="https://fetch.spec.whatwg.org/" class="uri">https://fetch.spec.whatwg.org/</a>
-   <a href="https://www.npmjs.com/package/whatwg-fetch" class="uri">https://www.npmjs.com/package/whatwg-fetch</a>
