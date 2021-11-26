HTTP Basics
===========

“If you want to build a ship, don’t drum up the men and women to gather wood, divide the work, and give orders. Instead, teach them to…

------------------------------------------------------------------------

### HTTP Basics

> *“If you want to build a ship, don’t drum up the men and women to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.” — Antoine de Saint-Exupery;*

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LUQe60D2FeVzDEi8.png" class="graf-image" /></figure>-   <span id="cb9d">`HTTP` : Hypertext Transfer Protocol.</span>
-   <span id="8248">`HT` : Hypertext - content with references to other content.</span>
-   <span id="1ad1">Term used to refer to content in computing.</span>
-   <span id="5ad0">What makes the Web a “web”.</span>
-   <span id="11eb">Most fundamental part of how we interact.</span>
-   <span id="41da">`Hyperlinks` : Links; references between HT resources.</span>
-   <span id="b0a1">`TP` : Transfer Protocol - set of guidelines surrounding the transmission of data.</span>
-   <span id="e43c">Defines the expectations for both ends of the transer.</span>
-   <span id="ca8a">Defines some ways the transfer might fail.</span>
-   <span id="3995">HTTP is a `request/response` protocol.</span>
-   <span id="dc85">HTTP works between `clients` & `servers`.</span>
-   <span id="a965">`Clients` : User Agent - the data consumer.</span>
-   <span id="2588">`Servers` : Origin - Data provider & where the application is running.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*OBVdK39aaS5sjV9B.png" class="graf-image" /></figure>### <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#components_of_http-based_systems" class="markup--anchor markup--h3-anchor" title="Permalink to Components of HTTP-based systems">Components of HTTP-based systems</a>

HTTP is a client-server protocol: requests are sent by one entity, the user-agent (or a proxy on behalf of it). Most of the time the user-agent is a Web browser, but it can be anything, for example a robot that crawls the Web to populate and maintain a search engine index.

Each individual request is sent to a server, which handles it and provides an answer, called the *response*. Between the client and the server there are numerous entities, collectively called <a href="https://developer.mozilla.org/en-US/docs/Glossary/Proxy_server" class="markup--anchor markup--p-anchor">proxies</a>, which perform different operations and act as gateways or <a href="https://developer.mozilla.org/en-US/docs/Glossary/Cache" class="markup--anchor markup--p-anchor">caches</a>, for example.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WR6l6JwNOvkfrljt.png" class="graf-image" /></figure>**Properties of HTTP**

-   <span id="bc5b">`Reliable Connections` : Messages passed between a client & server sacrifice a little speed for the sake of trust.</span>
-   <span id="aec2">`TCP` is HTTP’s preferred connection type.</span>
-   <span id="9880">`Stateless Transfer` : HTTP is a stateless protocol - meaning it does not store any kind of information.</span>
-   <span id="b204">HTTP supports cookies.</span>
-   <span id="5e72">`Intermediaries` : Servers or devices that pass your request along which come in three types:</span>

1.  <span id="fb4d">`Proxies` : Modify your request so it appears to come from a different source.</span>
2.  <span id="bd02">`Gateways` : Pretend to be the resource server you requested.</span>
3.  <span id="06a0">`Tunnels` : Simply passes your request along.</span>

------------------------------------------------------------------------

### HTTP Requests

**Structure of an HTTP Request**

    GET / HTTP/1.1
    Host: appacademy.io
    Connection: keep-alive
    Upgrade-Insecure-Requests: 1
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
    Accept-Encoding: gzip, deflate
    Accept-Language: en-US,en;q=0.9

### Example of a request:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*tq-BRYuzZ_Dx8s1g5xJKKQ.png" class="graf-image" /></figure>

-   <span id="bfa1">**Request-line & HTTP verbs**</span>
-   <span id="0e3d">The first line of an HTTP Request made up of three parts:</span>

1.  <span id="e67b">The `Method` : Indicated by an HTTP Verb.</span>
2.  <span id="f17e">The `URI` : Uniform Resource Indicator that ID’s our request.</span>
3.  <span id="cf4a">THe `HTTP` **Version** : Version we expect to use.</span>

-   <span id="6fd5">HTTP Verbs are a simply way of declaring our intention to the server.</span>
-   <span id="5435">`GET` : Used for direct requests.</span>
-   <span id="9059">`POST`: Used for creating new resources on the server.</span>
-   <span id="456b">`PUT`: Used to updated a resource on the server.</span>
-   <span id="5c1a">`PATCH` : Similar to PUT, but do not require the whole resource to perform the update.</span>
-   <span id="3940">`DELETE` : Used to destroy resources on the server.</span>

**Headers**

-   <span id="682b">Key-Value pairs that come after the request line — they appear on sep. lines and define metadata needed to process the request.</span>
-   <span id="5e4d">Some common headers:</span>
-   <span id="2971">`Host` : Root path for our URI.</span>
-   <span id="21e1">`User-Agent` : Displays information about which browser the request originated from.</span>
-   <span id="2555">`Referer` : Defines the URL you’re coming from.</span>
-   <span id="e946">`Accept` : Indicates what the client will receive.</span>
-   <span id="2011">`Content`**-** : Define Details about the body of the request.</span>

**Body**

-   <span id="8af8">For when we need to send data that doesn’t fit into the header & is too complex for the URI we can use the *body*.</span>
-   <span id="9271">`URL encoding` : Most common way form data is formatted.</span>
-   <span id="852a">`name=claire&age=29&iceCream=vanilla`</span>
-   <span id="cb18">We can also format using JSON or XML.</span>

**Sending an HTTP request from the command line**

-   <span id="7586">**netcat** : (nc) A Utility that comes as part of Unix-line environments such as Ubuntu and macOS.</span>
-   <span id="4288">Allows us to open a direct connection with a URL and manually send HTTP requests.</span>
-   <span id="07dd">`nc -v appacademy.io 80`</span>
-   <span id="b93e">`man nc` to open the netcat manual.</span>

------------------------------------------------------------------------

### HTTP Responses

**Structure of a Response**

    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
    Transfer-Encoding: chunked
    Connection: close
    X-Frame-Options: SAMEORIGIN
    X-Xss-Protection: 1; mode=block
    X-Content-Type-Options: nosniff
    Cache-Control: max-age=0, private, must-revalidate
    Set-Cookie: _rails-class-site_session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVEkiJTM5NWM5YTVlNTEyZDFmNTNlN; path=/; secure; HttpOnly
    X-Request-Id: cf5f30dd-99d0-46d7-86d7-6fe57753b20d
    X-Runtime: 0.006894
    Strict-Transport-Security: max-age=31536000
    Vary: Origin
    Via: 1.1 vegur
    Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
    Server: cloudflare
    CF-RAY: 51d641d1ca7d2d45-TXL

    <!DOCTYPE html>
    <html>
    ...
    ...
    </html>

**Status**

-   <span id="f3f8">First line of an HTTP response — gives us a high level overview of the server’s intentions. (`status line`)</span>
-   <span id="5353">`HTTP/1.1 200 OK`</span>
-   <span id="5882">`HTTP status codes` : numeric way of representing a server’s response.</span>
-   <span id="78bc">Follow the structure: x: xxx — xxx;</span>

### `Status codes 100 - 199: Informational`

-   <span id="61b2">Allow the clinet to know that a req. was received, and provides extra info from the server.</span>

### `Status codes 200 - 299: Successful`

-   <span id="da7c">Indicate that the request has succeeded and the server is handling it.</span>
-   <span id="c109">Common Examples: 200 OK (req received and fulfilled) & 201 Created (received and new record was created)</span>

### `Status codes 300 - 399: Redirection`

-   <span id="003b">Let the client know if there has been a change.</span>
-   <span id="0ca4">Common Examples: 301 Moved Permanently (resource you requested is in a totally new location) & 302 Found (indicates a temporary move)</span>

### `Status codes 400 - 499: Client Error`

-   <span id="1f8a">Indicate problem with client’s request.</span>
-   <span id="d68d">Common Examples: 400 Bad Request (received, but could not understand) & 401 Unauthorized (resource exists but you’re not allowed to see w/o authentication) & 403 Forbidden (resource exists but you’re not allowed to see it at all ) & 404 Not Found (resource requested does not exist);</span>

### `Status codes 500 - 599: Server Error`

-   <span id="93fc">Indicates request was formatted correctly, but the server couldn’t do what you asked due to an internal problem.</span>
-   <span id="96cf">Common Examples: 500 Internal Server Error (Server had trouble processing) & 504 Gateway Timeout (Server timeout);</span>

### **Headers** : Work just like HTTP requests.

> Common Examples:

-   <span id="6859">`Location` : Used by client for redirection responses.</span>
-   <span id="a497">`Content-Type` : Let’s client know what format the body is in.</span>
-   <span id="1e08">`Expires` : When response is no longer valid</span>
-   <span id="f45d">`Content-Disposition` : Let’s client know how to display the response.</span>
-   <span id="b46e">`Set-Cookie` : Sends data back to the client to set on the cookie.</span>
-   <span id="1e80">`Data` : If the request is successful, the body of the response will contain the resource you have requested.</span>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site:

**Currently under development and very buggy!**

<a href="https://web-dev-resource-hub.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web-dev-resource-hub.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Edit description</em>web-dev-resource-hub.netlify.app</a><a href="https://web-dev-resource-hub.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

If you want to learn more and get some practice in … download <a href="https://www.postman.com/" class="markup--anchor markup--p-anchor">Postman</a> and start going through some tutorials!

Happy Coding!

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 18, 2021](https://medium.com/p/8f02a96a834a).

<a href="https://medium.com/@bryanguner/http-basics-8f02a96a834a" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
