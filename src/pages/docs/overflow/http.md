---
title: The HTTP Protocol
weight: 0
excerpt: The HTTP Protocol
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---


## The HTTP Protocol&#xA;&#xA;

- Requires: a connection between client and server
- 
- Stateless: no login process, each request is independent
- 
- Simple format: request header, blank line, possible payload

- Symmetrical: allows data to be sent and recieved

- Very easy to implement but scales very well

## Example HTTP Request

Note lines folded for display.

What do each of these headers mean? Which are required? Many are defined in the [HTTP standard](ftp://ftp.isi.edu/in-notes/rfc2616.txt) but others can be defined via the HTTP extension framework.

## Example HTTP Response

## Example HTTP POST Request

Note lines folded for display.

This is a POST request, note how the data is encoded in the request body.

## Example HTTP GET Request

Note lines folded for display.

This is the same form submitted via a GET request, here the data is encoded in request URL. Note also the If-Modified-Since header in this request, sent because my browser has just asked for the same resource.

## HTTP Redirect

Alternately

The HTTP redirect is a server response that can be used to indicate that a resource has moved to a new location. An alternate is to include the above meta tag in a page header to force a redirect from the current page.

## HTTP Verbs

- GET - get a resource, _Idempotent_
- 
- POST - send some data to a resource
- 
- HEAD - get headers for a resource

- PUT - create a new resource

- DELETE - delete a resource

## Common HTTP Response Status Codes

Some notable response codes:

- [200 OK](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success) - Request succeeded and everything went well
- 
- [301 Moved Permanently](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection) - Requested resource has moved and all future requ
- 
- [403 Forbidden](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error) - Response refused by server (even if request is valid)

- [404 Not Found](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error) - Server could not find requested resource (though it may be available in the future)

- [500 Internal Server Error](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_Error) - Generic error message response when server encountered an error

See also: [full list of HTTP status codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Resources

- Use [Live HTTP Headers](https://addons.mozilla.org/en-US/firefox/addon/3829) in Firefox to view headers of requests that you make. Also available as a [Chrome Extension](https://chrome.google.com/webstore/detail/live-http-headers/iaiioopjkcekapmldfgbebdclcnpgnlo).
- 
- Similarly, in Google Chrome, the [Resources panel](http://www.chromium.org/devtools/google-chrome-developer-tools-tutorial#resources) in the Developer tools allows you to view the request headers and content for each request that was made when you're looking at a page.

- Wikipedia's [entry on HTTP](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) gives a good overview of the protocol.
