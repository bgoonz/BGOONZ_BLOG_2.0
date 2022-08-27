---
title: ServerlessJS
template: docs
excerpt: How does serverless JavaScript work
---

# How does serverless JavaScript work? | Service workers and Cloudflare Workers | Cloudflare

> ## Excerpt
>
> Serverless JavaScript is used to build serverless architecture at the network edge. Learn what serverless JavaScript is and how it works.

---

## What is serverless JavaScript?

Serverless JavaScript is JavaScript code that comprises all or part of an application, is only run when requested, and is not hosted on proprietary servers. It enables developers to build high-performance, low-latency serverless applications (such as [JAMstack applications](https://www.cloudflare.com/learning/performance/what-is-jamstack/)) that run on a network and avoid many issues associated with other serverless applications, such as cold starts.

[Serverless](https://www.cloudflare.com/learning/serverless/what-is-serverless/) JavaScript is hosted in an edge network or by an HTTP caching service, which stores content to respond quickly to HTTP requests. Developers can write and deploy JavaScript functions that process HTTP requests before they travel all the way to the [origin server](https://www.cloudflare.com/learning/cdn/glossary/origin-server/).

![Serverless JavaScript on Edge Server](https://www.cloudflare.com/img/learning/serverless/serverless-javascript/serverless-javascript-running-on-edge-server.svg "Serverless JavaScript on Edge Server")

Using serverless JavaScript, it is possible to expand the functionality and improve the user experience of existing applications by running code at the edge, or to create a new, fully serverless application that is fast and highly scalable. [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers/) is a serverless JavaScript platform.

## What is Varnish?

Varnish is a web accelerator designed to speed up web applications and improve website performance. It is a caching HTTP [reverse proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/), meaning it sits in front of any web server and accelerates HTTP traffic to and from that server by caching, or storing, any content that is frequently requested by web clients. Varnish Configuration Language, or VCL, is used in conjunction with Varnish to allow developers to customize how Varnish manages web requests.

## What is the advantage of using JavaScript instead of VCL in a serverless architecture?

VCL is a configuration language designed to make the Varnish cache easy to configure; it’s not a full-fledged programming language. VCL is not flexible enough for building or expanding robust applications. It is limited in what it can do compared to JavaScript. In addition, VCL is not used outside of Varnish implementations, and as a result most developers are not familiar with it. In contrast, JavaScript is ubiquitous and already widely used for building applications. Using JavaScript in a serverless architecture allows developers to build full applications in a language they are familiar with.

Serverless JavaScript allows a wider group of developers to leverage serverless computing on the edge, and allows those developers to build a greater variety of applications.

## How does building an application with serverless JavaScript help reduce latency?

Serverless JavaScript runs in an HTTP caching network, which is closer to the end user than code hosted on an origin server. As a result, requests don't have to travel all the way to the origin server and back, and the application responds much more quickly to user interactions. The more geographically distributed edge locations that a caching network has, the more latency will be reduced.

## When does serverless JavaScript run?

In a serverless model, applications are broken up into functions, and function code runs in response to certain events. It does not run otherwise. The event that triggers serverless JavaScript to execute is an HTTP request. Developers can customize the kind of HTTP requests that their JavaScript functions respond to, and how the HTTP request will be altered or fulfilled.

## What is an HTTP request?

This is a request sent via [HTTP (hypertext transfer protocol)](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/) from a client to a server. Browsers translate user actions, such as clicking on a hyperlink or submitting a form, into HTTP requests. The request is then sent on to the server, and the server sends an HTTP response to fulfill the request. An HTTP request also occurs when an application makes an API call.

## What is HTTP caching?

HTTP caching is when a server or a browser saves a copy of a response to a user's HTTP request in order to produce quicker replies to future requests. A [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) server is an example of an HTTP cache. Some HTTP caching services enable developers to customize how HTTP caching works for their applications.

Cloudflare is an HTTP caching edge network with data centers all over the world, and it allows developers to write and deploy their own JavaScript at the network edge. In the Cloudflare network, HTTP caching does not take place in any specific server, but rather within whatever data center is closest to the source of the HTTP request.

## What are service workers?

Service workers are scripts that browsers download and run in order to create customized experiences for users. Service workers make features like push notifications, background syncing, and offline functionality possible in the browser. Written in JavaScript, they intercept, modify, and respond to HTTP requests before the requests reach the Internet.

## Two ways service workers can handle HTTP traffic:

![Service Worker Responds](https://www.cloudflare.com/img/learning/serverless/serverless-javascript/service-worker-responds-http-request.svg "Service Worker Responds")

Service workers can respond to HTTP requests without contacting the web server

![Service Worker Modifies Request](https://www.cloudflare.com/img/learning/serverless/serverless-javascript/service-worker-modifies-http-request-response.svg "Service Worker Modifies Request")

Service workers can modify HTTP requests and responses

## What are Cloudflare Workers?

Cloudflare Workers are a platform for enabling serverless functions to run as close as possible to the end user. In essence, the serverless code itself is 'cached' on the network, and runs when it receives the right type of request. Cloudflare Workers are written in JavaScript against the service workers API, meaning they can use all the functionality offered by service workers. They leverage the Chrome V8 engine for execution. Cloudflare Workers code is hosted in Cloudflare's vast network of data centers around the world.

## What is Chrome V8?

[Chrome V8](https://www.cloudflare.com/learning/serverless/glossary/what-is-chrome-v8/), also known as just 'V8,' is a JavaScript engine Google developed for compiling, optimizing, and executing JavaScript. By using V8 for JavaScript code execution, startup time for JavaScript workers is greatly reduced, eliminating the issue of 'cold starts' in most cases. V8 is also heavily analyzed for security vulnerabilities, making it ideal for running JavaScript code securely.
