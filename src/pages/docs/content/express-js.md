---
title: Writing middleware for use in Express apps
weight: 0
excerpt: Writing middleware for use in Express apps
seo:
    title: ''
    description: 'Writing middleware for use in Express apps'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---



# Express routing

> ## Excerpt
> Routing refers to how an application’s endpoints (URIs) respond to client requests.
For an introduction to routing, see Basic routing.

---
_Routing_ refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, see [Basic routing](https://expressjs.com/en/starter/basic-routing.html).

You define routing using methods of the Express `app` object that correspond to HTTP methods; for example, `app.get()` to handle GET requests and `app.post` to handle POST requests. For a full list, see [app.METHOD](https://expressjs.com/en/4x/api.html#app.METHOD). You can also use [app.all()](https://expressjs.com/en/4x/api.html#app.all) to handle all HTTP methods and [app.use()](https://expressjs.com/en/4x/api.html#app.use) to specify middleware as the callback function (See [Using middleware](https://expressjs.com/en/guide/using-middleware.html) for details).

These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

In fact, the routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide `next` as an argument to the callback function and then call `next()` within the body of the function to hand off control to the next callback.

The following code is an example of a very basic route.

```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})
```

## Route methods

A route method is derived from one of the HTTP methods, and is attached to an instance of the `express` class.

The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.

```
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
```

Express supports methods that correspond to all HTTP request methods: `get`, `post`, and so on. For a full list, see [app.METHOD](https://expressjs.com/en/4x/api.html#app.METHOD).

There is a special routing method, `app.all()`, used to load middleware functions at a path for _all_ HTTP request methods. For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE, or any other HTTP request method supported in the [http module](https://nodejs.org/api/http.html#http_http_methods).

```
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() })
```

## Route paths

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

The characters `?`, `+`, `*`, and `()` are subsets of their regular expression counterparts. The hyphen (`-`) and the dot (`.`) are interpreted literally by string-based paths.

If you need to use the dollar character (`$`) in a path string, enclose it escaped within `([` and `])`. For example, the path string for requests at “`/data/$book`”, would be “`/data/([\$])book`”.

Express uses [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) for matching the route paths; see the path-to-regexp documentation for all the possibilities in defining route paths. [Express Route Tester](http://forbeslindesay.github.io/express-route-tester/) is a handy tool for testing basic Express routes, although it does not support pattern matching.

Query strings are not part of the route path.

Here are some examples of route paths based on strings.

This route path will match requests to the root route, `/`.

```
app.get('/', function (req, res) {
  res.send('root')
})
```

This route path will match requests to `/about`.

```
app.get('/about', function (req, res) {
  res.send('about')
})
```

This route path will match requests to `/random.text`.

```
app.get('/random.text', function (req, res) {
  res.send('random.text')
})
```

Here are some examples of route paths based on string patterns.

This route path will match `acd` and `abcd`.

```
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})
```

This route path will match `abcd`, `abbcd`, `abbbcd`, and so on.

```
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})
```

This route path will match `abcd`, `abxcd`, `abRANDOMcd`, `ab123cd`, and so on.

```
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})
```

This route path will match `/abe` and `/abcde`.

```
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})
```

Examples of route paths based on regular expressions:

This route path will match anything with an “a” in it.

```
app.get(/a/, function (req, res) {
  res.send('/a/')
})
```

This route path will match `butterfly` and `dragonfly`, but not `butterflyman`, `dragonflyman`, and so on.

```
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
```

### Route parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

```
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```

The name of route parameters must be made up of “word characters” (\[A-Za-z0-9\_\]).

Since the hyphen (`-`) and the dot (`.`) are interpreted literally, they can be used along with route parameters for useful purposes.

```
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
```

```
Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
```

To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses (`()`):

```
Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
```

Because the regular expression is usually part of a literal string, be sure to escape any `\` characters with an additional backslash, for example `\\d+`.

## Route handlers

You can provide multiple callback functions that behave like [middleware](https://expressjs.com/en/guide/using-middleware.html) to handle a request. The only exception is that these callbacks might invoke `next('route')` to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.

Route handlers can be in the form of a function, an array of functions, or combinations of both, as shown in the following examples.

A single callback function can handle a route. For example:

```
app.get('/example/a', function (req, res) {
  res.send('Hello from A!')
})
```

More than one callback function can handle a route (make sure you specify the `next` object). For example:

```
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})
```

An array of callback functions can handle a route. For example:

```
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
```

A combination of independent functions and arrays of functions can handle a route. For example:

```
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})
```

## Response methods

The methods on the response object (`res`) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

Method

Description

[res.download()](https://expressjs.com/en/4x/api.html#res.download)

Prompt a file to be downloaded.

[res.end()](https://expressjs.com/en/4x/api.html#res.end)

End the response process.

[res.json()](https://expressjs.com/en/4x/api.html#res.json)

Send a JSON response.

[res.jsonp()](https://expressjs.com/en/4x/api.html#res.jsonp)

Send a JSON response with JSONP support.

[res.redirect()](https://expressjs.com/en/4x/api.html#res.redirect)

Redirect a request.

[res.render()](https://expressjs.com/en/4x/api.html#res.render)

Render a view template.

[res.send()](https://expressjs.com/en/4x/api.html#res.send)

Send a response of various types.

[res.sendFile()](https://expressjs.com/en/4x/api.html#res.sendFile)

Send a file as an octet stream.

[res.sendStatus()](https://expressjs.com/en/4x/api.html#res.sendStatus)

Set the response status code and send its string representation as the response body.

## app.route()

You can create chainable route handlers for a route path by using `app.route()`. Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. For more information about routes, see: [Router() documentation](https://expressjs.com/en/4x/api.html#router).

Here is an example of chained route handlers that are defined by using `app.route()`.

```
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
```

## express.Router

Use the `express.Router` class to create modular, mountable route handlers. A `Router` instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

Create a router file named `birds.js` in the app directory, with the following content:

```
var express = require('express')
var router = express.Router()

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', function (req, res) {
  res.send('Birds home page')
})
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
```

Then, load the router module in the app:

```
var birds = require('./birds')


app.use('/birds', birds)
```

The app will now be able to handle requests to `/birds` and `/birds/about`, as well as call the `timeLog` middleware function that is specific to the route.



# Writing middleware for use in Express apps

> ## Excerpt
> Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

---
## Overview

_Middleware_ functions are functions that have access to the [request object](https://expressjs.com/en/4x/api.html#req) (`req`), the [response object](https://expressjs.com/en/4x/api.html#res) (`res`), and the `next` function in the application’s request-response cycle. The `next` function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

-   Execute any code.
-   Make changes to the request and the response objects.
-   End the request-response cycle.
-   Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

The following figure shows the elements of a middleware function call:

![](https://expressjs.com/images/express-mw.png)

HTTP method for which the middleware function applies.

Path (route) for which the middleware function applies.

The middleware function.

Callback argument to the middleware function, called "next" by convention.

HTTP [response](https://expressjs.com/en/4x/api.html#res) argument to the middleware function, called "res" by convention.

HTTP [request](https://expressjs.com/en/4x/api.html#req) argument to the middleware function, called "req" by convention.

Starting with Express 5, middleware functions that return a Promise will call `next(value)` when they reject or throw an error. `next` will be called with either the rejected value or the thrown Error.

## Example

Here is an example of a simple “Hello World” Express application. The remainder of this article will define and add three middleware functions to the application: one called `myLogger` that prints a simple log message, one called `requestTime` that displays the timestamp of the HTTP request, and one called `validateCookies` that validates incoming cookies.

```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```

### Middleware function myLogger

Here is a simple example of a middleware function called “myLogger”. This function just prints “LOGGED” when a request to the app passes through it. The middleware function is assigned to a variable named `myLogger`.

```
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
```

Notice the call above to `next()`. Calling this function invokes the next middleware function in the app. The `next()` function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The `next()` function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.

To load the middleware function, call `app.use()`, specifying the middleware function. For example, the following code loads the `myLogger` middleware function before the route to the root path (/).

```
var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```

Every time the app receives a request, it prints the message “LOGGED” to the terminal.

The order of middleware loading is important: middleware functions that are loaded first are also executed first.

If `myLogger` is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

The middleware function `myLogger` simply prints a message, then passes on the request to the next middleware function in the stack by calling the `next()` function.

### Middleware function requestTime

Next, we’ll create a middleware function called “requestTime” and add a property called `requestTime` to the request object.

```
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
```

The app now uses the `requestTime` middleware function. Also, the callback function of the root path route uses the property that the middleware function adds to `req` (the request object).

```
var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000)
```

When you make a request to the root of the app, the app now displays the timestamp of your request in the browser.

### Middleware function validateCookies

Finally, we’ll create a middleware function that validates incoming cookies and sends a 400 response if cookies are invalid.

Here’s an example function that validates cookies with an external async service.

```
async function cookieValidator (cookies) {
  try {
    await externallyValidateCookie(cookies.testCookie)
  } catch {
    throw new Error('Invalid cookies')
  }
}
```

Here we use the [`cookie-parser`](https://expressjs.com/resources/middleware/cookie-parser.html) middleware to parse incoming cookies off the `req` object and pass them to our `cookieValidator` function. The `validateCookies` middleware returns a Promise that upon rejection will automatically trigger our error handler.

```
var express = require('express')
var cookieParser = require('cookie-parser')
var cookieValidator = require('./cookieValidator')

var app = express()

async function validateCookies (req, res, next) {
  await cookieValidator(req.cookies)
  next()
}

app.use(cookieParser())

app.use(validateCookies)

app.use(function (err, req, res, next) {
  res.status(400).send(err.message)
})

app.listen(3000)
```

Note how `next()` is called after `await cookieValidator(req.cookies)`. This ensures that if `cookieValidator` resolves, the next middleware in the stack will get called. If you pass anything to the `next()` function (except the string `'route'` or `'router'`), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.

Because you have access to the request object, the response object, the next middleware function in the stack, and the whole Node.js API, the possibilities with middleware functions are endless.

For more information about Express middleware, see: [Using Express middleware](https://expressjs.com/en/guide/using-middleware.html).

## Configurable middleware

If you need your middleware to be configurable, export a function which accepts an options object or other parameters, which, then returns the middleware implementation based on the input parameters.

File: `my-middleware.js`

```
module.exports = function (options) {
  return function (req, res, next) {
        next()
  }
}
```

The middleware can now be used as shown below.

```
var mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))
```





# Using Express middleware

> ## Excerpt
> Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

---
Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

_Middleware_ functions are functions that have access to the [request object](https://expressjs.com/en/4x/api.html#req) (`req`), the [response object](https://expressjs.com/en/4x/api.html#res) (`res`), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Middleware functions can perform the following tasks:

-   Execute any code.
-   Make changes to the request and the response objects.
-   End the request-response cycle.
-   Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

-   [Application-level middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.application)
-   [Router-level middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.router)
-   [Error-handling middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling)
-   [Built-in middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.built-in)
-   [Third-party middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.third-party)

You can load application-level and router-level middleware with an optional mount path. You can also load a series of middleware functions together, which creates a sub-stack of the middleware system at a mount point.

## Application-level middleware

Bind application-level middleware to an instance of the [app object](https://expressjs.com/en/4x/api.html#app) by using the `app.use()` and `app.METHOD()` functions, where `METHOD` is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

```
var express = require('express')
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
```

This example shows a middleware function mounted on the `/user/:id` path. The function is executed for any type of HTTP request on the `/user/:id` path.

```
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```

This example shows a route and its handler function (middleware system). The function handles GET requests to the `/user/:id` path.

```
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
```

Here is an example of loading a series of middleware functions at a mount point, with a mount path. It illustrates a middleware sub-stack that prints request info for any type of HTTP request to the `/user/:id` path.

```
app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```

Route handlers enable you to define multiple routes for a path. The example below defines two routes for GET requests to the `/user/:id` path. The second route will not cause any problems, but it will never get called because the first route ends the request-response cycle.

This example shows a middleware sub-stack that handles GET requests to the `/user/:id` path.

```
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

app.get('/user/:id', function (req, res, next) {
  res.send(req.params.id)
})
```

To skip the rest of the middleware functions from a router middleware stack, call `next('route')` to pass control to the next route. **NOTE**: `next('route')` will work only in middleware functions that were loaded by using the `app.METHOD()` or `router.METHOD()` functions.

This example shows a middleware sub-stack that handles GET requests to the `/user/:id` path.

```
app.get('/user/:id', function (req, res, next) {
    if (req.params.id === '0') next('route')
    else next()
}, function (req, res, next) {
    res.send('regular')
})

app.get('/user/:id', function (req, res, next) {
  res.send('special')
})
```

Middleware can also be declared in an array for reusability.

This example shows an array with a middleware sub-stack that handles GET requests to the `/user/:id` path

```
function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

var logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, function (req, res, next) {
  res.send('User Info')
})
```

## Router-level middleware

Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.

```
var router = express.Router()
```

Load router-level middleware by using the `router.use()` and `router.METHOD()` functions.

The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:

```
var express = require('express')
var app = express()
var router = express.Router()

router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

router.get('/user/:id', function (req, res, next) {
    if (req.params.id === '0') next('route')
    else next()
}, function (req, res, next) {
    res.render('regular')
})

router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

app.use('/', router)
```

To skip the rest of the router’s middleware functions, call `next('router')` to pass control back out of the router instance.

This example shows a middleware sub-stack that handles GET requests to the `/user/:id` path.

```
var express = require('express')
var app = express()
var router = express.Router()

router.use(function (req, res, next) {
  if (!req.headers['x-auth']) return next('router')
  next()
})

router.get('/user/:id', function (req, res) {
  res.send('hello, user!')
})

app.use('/admin', router, function (req, res) {
  res.sendStatus(401)
})
```

## Error-handling middleware

Error-handling middleware always takes _four_ arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the `next` object, you must specify it to maintain the signature. Otherwise, the `next` object will be interpreted as regular middleware and will fail to handle errors.

Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature `(err, req, res, next)`):

```
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

For details about error-handling middleware, see: [Error handling](https://expressjs.com/en/guide/error-handling.html).

## Built-in middleware

Starting with version 4.x, Express no longer depends on [Connect](https://github.com/senchalabs/connect). The middleware functions that were previously included with Express are now in separate modules; see [the list of middleware functions](https://github.com/senchalabs/connect#middleware).

Express has the following built-in middleware functions:

-   [express.static](https://expressjs.com/en/4x/api.html#express.static) serves static assets such as HTML files, images, and so on.
-   [express.json](https://expressjs.com/en/4x/api.html#express.json) parses incoming requests with JSON payloads. **NOTE: Available with Express 4.16.0+**
-   [express.urlencoded](https://expressjs.com/en/4x/api.html#express.urlencoded) parses incoming requests with URL-encoded payloads. **NOTE: Available with Express 4.16.0+**

## Third-party middleware

Use third-party middleware to add functionality to Express apps.

Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

The following example illustrates installing and loading the cookie-parsing middleware function `cookie-parser`.

```
$ npm install cookie-parser
```

```
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

app.use(cookieParser())
```



# Overriding the Express API

> ## Excerpt
> The Express API consists of various methods and properties on the request and response objects. These are inherited by prototype. There are two extension points for the Express API:

---
The Express API consists of various methods and properties on the request and response objects. These are inherited by prototype. There are two extension points for the Express API:

1.  The global protoypes at `express.request` and `express.response`.
2.  App-specific prototypes at `app.request` and `app.response`.

Altering the global prototypes will affect all loaded Express apps in the same process. If desired, alterations can be made app-specific by only altering the app-specific prototypes after creating a new app.

## Methods

You can override the signature and behavior of existing methods with your own, by assigning a custom function.

Following is an example of overriding the behavior of [res.sendStatus](https://expressjs.com/4x/api.html#res.sendStatus).

```
app.response.sendStatus = function (statusCode, type, message) {
    return this.contentType(type)
    .status(statusCode)
    .send(message)
}
```

The above implementation completely changes the original signature of `res.sendStatus`. It now accepts a status code, encoding type, and the message to be sent to the client.

The overridden method may now be used this way:

```
res.sendStatus(404, 'application/json', '{"error":"resource not found"}')
```

## Properties

Properties in the Express API are either:

1.  Assigned properties (ex: `req.baseUrl`, `req.originalUrl`)
2.  Defined as getters (ex: `req.secure`, `req.ip`)

Since properties under category 1 are dynamically assigned on the `request` and `response` objects in the context of the current request-response cycle, their behavior cannot be overridden.

Properties under category 2 can be overwritten using the Express API extensions API.

The following code rewrites how the value of `req.ip` is to be derived. Now, it simply returns the value of the `Client-IP` request header.

```
Object.defineProperty(app.request, 'ip', {
  configurable: true,
  enumerable: true,
  get: function () { return this.get('Client-IP') }
})
```
