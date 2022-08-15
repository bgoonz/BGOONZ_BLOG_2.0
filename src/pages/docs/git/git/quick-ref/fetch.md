---
title: Fetch Quick Ref
weight: 0
excerpt: Fetch Quick Ref
seo:
    title: 'Fetch Quick Ref'
    description: ''
    robots: []
    extra: []
template: docs
---





<details>

<summary> Description</summary>   

> ## Excerpt
> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

---
The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method that provides an easy, logical way to fetch resources asynchronously across the network.

This kind of functionality was previously achieved using [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). Fetch provides a better alternative that can be easily used by other technologies such as [`Service Workers`](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API "Service Workers"). Fetch also provides a single logical place to define other HTTP-related concepts such as [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and extensions to HTTP.

The `fetch` specification differs from `jQuery.ajax()` in the following significant ways:

-   The Promise returned from `fetch()` **won't reject on HTTP error status** even if the response is an HTTP 404 or 500. Instead, as soon as the server responds with headers, the Promise will resolve normally (with the [`ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok "ok") property of the response set to false if the response isn't in the range 200 -299), and it will only reject on network failure or if anything prevented the request from completing.
-   `fetch()` **won't send cross-origin cookies** unless you set the _credentials_ [init option](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters). (Since [April 2018](https://github.com/whatwg/fetch/pull/585). The spec changed the default credentials policy to `same-origin`. Firefox changed since 61.0b13.)

A basic fetch request is really simple to set up. Have a look at the following code:

```js
//
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

The [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, we use the [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json "json()") method, which returns a second promise that resolves with the result of parsing the response body text as JSON.

**Note:** See the [Body](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#body) section for similar methods to extract other types of body content.

Fetch requests are controlled by the `connect-src` directive of [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) rather than the directive of the resources it's retrieving.

### [Supplying request options](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options "Permalink to Supplying request options")

The `fetch()` method can optionally accept a second parameter, an `init` object that allows you to control a number of different settings:

See [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) for the full options available, and more details.

```js
//
js
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
```

Note that `mode: "no-cors"` only allows a limited set of headers in the request:

-   `Accept`
-   `Accept-Language`
-   `Content-Language`
-   `Content-Type` with a value of `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

### [Sending a request with credentials included](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#sending_a_request_with_credentials_included "Permalink to Sending a request with credentials included")

To cause browsers to send a request with credentials included on both same-origin and cross-origin calls, add `credentials: 'include'` to the `init` object you pass to the `fetch()` method.

```js
//

fetch('https://example.com', {
  credentials: 'include'
});
```

**Note:** `Access-Control-Allow-Origin` is prohibited from using a wildcard for requests with `credentials: 'include'`. In such cases, the exact origin must be provided; even if you are using a CORS unblocker extension, the requests will still fail.

**Note:** Browsers should not send credentials in _preflight requests_ irrespective of this setting. For more information see: [CORS > Requests with credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#requests_with_credentials).

If you only want to send credentials if the request URL is on the same origin as the calling script, add `credentials: 'same-origin'`.

```js
//

// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
});
```

To instead ensure browsers don't include credentials in the request, use `credentials: 'omit'`.

```js
//

fetch('https://example.com', {
  credentials: 'omit'
})
```

### [Uploading JSON data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data "Permalink to Uploading JSON data")

Use [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to POST JSON-encoded data.

```js
//

const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

### [Uploading a file](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file "Permalink to Uploading a file")

Files can be uploaded using an HTML `<input type="file" />` input element, [`FormData()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData "FormData()") and [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

```js
//

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

### [Uploading multiple files](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_multiple_files "Permalink to Uploading multiple files")

Files can be uploaded using an HTML `<input type="file" multiple />` input element, [`FormData()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData "FormData()") and [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

```js
//

const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

### [Processing a text file line by line](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#processing_a_text_file_line_by_line "Permalink to Processing a text file line by line")

The chunks that are read from a response are not broken neatly at line boundaries and are Uint8Arrays, not strings. If you want to fetch a text file and process it line by line, it is up to you to handle these complications. The following example shows one way to do this by creating a line iterator (for simplicity, it assumes the text is UTF-8, and doesn't handle fetch errors).

```js
//

async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder('utf-8');
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : '';

  const re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}

async function run() {
  for await (let line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

run();
```

### [Checking that the fetch was successful](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful "Permalink to Checking that the fetch was successful")

A [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) promise will reject with a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) when a network error is encountered or CORS is misconfigured on the server-side, although this usually means permission issues or similar — a 404 does not constitute a network error, for example. An accurate check for a successful `fetch()` would include checking that the promise resolved, then checking that the [`Response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) property has a value of true. The code would look something like this:

```
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

### [Supplying your own request object](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_your_own_request_object "Permalink to Supplying your own request object")

Instead of passing a path to the resource you want to request into the `fetch()` call, you can create a request object using the [`Request()`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request "Request()") constructor, and pass that in as a `fetch()` method argument:

```
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });
```

`Request()` accepts exactly the same parameters as the `fetch()` method. You can even pass in an existing request object to create a copy of it:

```
const anotherRequest = new Request(myRequest, myInit);
```

This is pretty useful, as request and response bodies are one use only. Making a copy like this allows you to make use of the request/response again while varying the `init` options if desired. The copy must be made before the body is read, and reading the body in the copy will also mark it as read in the original request.

**Note:** There is also a [`clone()`](https://developer.mozilla.org/en-US/docs/Web/API/Request/clone "clone()") method that creates a copy. Both methods of creating a copy will fail if the body of the original request or response has already been read, but reading the body of a cloned response or request will not cause it to be marked as read in the original.

The [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) interface allows you to create your own headers object via the [`Headers()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers "Headers()") constructor. A headers object is a simple multi-map of names to values:

```
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
```

The same can be achieved by passing an array of arrays or an object literal to the constructor:

```
const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});
```

The contents can be queried and retrieved:

```
console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // null
```

Some of these operations are only useful in [`ServiceWorkers`](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API "ServiceWorkers"), but they provide a much nicer API for manipulating headers.

All of the Headers methods throw a `TypeError` if a header name is used that is not a valid HTTP Header name. The mutation operations will throw a `TypeError` if there is an immutable guard ([see below](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#guard)). Otherwise, they fail silently. For example:

```
const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log('Cannot pretend to be a bank!');
}
```

A good use case for headers is checking whether the content type is correct before you process it further. For example:

```
fetch(myRequest)
  .then(response => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data => {
      /* process your data further */
  })
  .catch(error => console.error(error));
```

### [Guard](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#guard "Permalink to Guard")

Since headers can be sent in requests and received in responses, and have various limitations about what information can and should be mutable, headers' objects have a _guard_ property. This is not exposed to the Web, but it affects which mutation operations are allowed on the headers object.



</details>

# Fetch

```js
//
fetch('/data.json')  .then(response => response.json())  .then(data => {    console.log(data)  })  .catch(err => ...)
```

### Response

```js
//
fetch('/data.json').then(res => {  res.text()       // response body (=> Promise)  res.json()       // parse via JSON (=> Promise)  res.status       //=> 200  res.statusText   //=> 'OK'  res.redirected   //=> false  res.ok           //=> true  res.url          //=> 'http://site.com/data.json'  res.type         //=> 'basic'                   //   ('cors' 'default' 'error'                   //    'opaque' 'opaqueredirect')
```

```js
//
  res.headers.get('Content-Type')})
```

### Request options

```js
//
fetch('/data.json', {  method: 'post',  body: new FormData(form), // post body  body: JSON.stringify(...),
```

```js
//
  headers: {    'Accept': 'application/json'  },
```

```js
//
  credentials: 'same-origin', // send cookies  credentials: 'include',     // send cookies, even in CORS
```

```js
//
})
```

### Catching errors

```js
//
fetch('/data.json')  .then(checkStatus)
```

```js
//
function checkStatus (res) {  if (res.status >= 200 && res.status < 300) {    return res  } else {    let err = new Error(res.statusText)    err.response = res    throw err  }}
```

Non-2xx responses are still successful requests. Use another function to turn them to errors.

### Using with node.js

```js
//
const fetch = require('isomorphic-fetch')
```

See: [isomorphic-fetch](https://npmjs.com/package/isomorphic-fetch) *(npmjs.com)*
