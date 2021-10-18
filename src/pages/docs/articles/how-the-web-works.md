---
title: How The Web Works
weight: 0
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

## What is the World Wide Web?&#xA;&#xA;

Perhaps the first thing to establish in our discussion of the web is what exactly it is. This chapter will look in brief overview at the core technologies that go together to make the World Wide Web.

We can start by differentiating the Internet and the World Wide Web. These are often confused because the Web is the main use that most people have for the Internet and a common web browser is called "Internet Explorer". However, we can properly distinguish between them. The Internet is a collection of inter-connected computers using the TCP/IP protocol to exchange information. The World Wide Web is a particular use of the Internet to exchange HTML web pages (and other documents) using the Hypertext Transfer Protocol (HTTP).

Let's look briefly at the four basic ingredients of the Web:

-   TCP/IP - is a low level message protocol that is used to transfer messages between computers on the Internet.

-   HTTP - is used by a Web Client to make a request to a Web Server and for the server to return the response.

-   URL - is a way of writing down the address of something on the Web so that a browser can work out where to get it from.

-   HTML - is a language for writing web pages containing text, images and other content.

Together, these four technologies allow a web client - the web browser on your computer - to fetch pages from a web server anywhere in the world that might contain links to other documents and so on. It's the links between documents that make this a *Web* and the Internet that allows it to be the *World Wide Web*.

Let's look at each of these technologies in a little more detail; although we'll explore most of them a lot more throughout the rest of this book.

## TCP/IP and DNS

TCP/IP, the Transmission Control Protocol/Internet Protocol, is the standard way of exchanging messages on the Internet - in fact it effectively defines what the Internet is: a network of computers communicating via TCP/IP. For our purposes, there's no need to have a deep understanding of the low level details of TCP/IP, though many of you will learn more about it if you study any networking topics. However there are a few higher level things that touch on how we use the Internet in the context of the World Wide Web.

A *Protocol* in this sense is a formal standard for how two machines will talk to each other over a communications channel. It describes what messages are allowed and what they mean and how data is transferred over the network. Later, we'll look at HTTP which is a higher level protocol for web requests. TCP/IP deals with the low level exchange of data and doesn't really care what the content of that data is.

The Internet is a collection of computer networks joined by physical network channels. Within an organisation, there may be a physical network based on the Ethernet standard (wired or wireless) which effectively connects all computers on the network to each other. Organisations connect to each other via DSL or cable connections. These *inter*-connected *net*works make up the Internet. The role of TCP/IP is to allow a computer within one organisation (your laptop) to establish a connection to a computer in another (a web server). Importantly, this connection is a *point-to-point* connection - like a private channel between the two computers, even though the data is carried by this shared network of networks.

TCP/IP is a *packet oriented* protocol. To send a message, it is broken up into small chunks (packets) which are each addressed and sent over the network. The receiving computer intercepts these packets, notices that they are addressed to them, and re-assembles the original message. Packets can arrive out of order (or not at all) and TCP/IP defines what the two communicating computers should do in this case.

Each computer on the network is assigned a unique *IP address* which is a 32 bit number usually expressed as four 8 bit digits separated by dots. For example 192.168.1.2 or 137.111.158.22. These numbers are used as the addresses of the packets sent around the Internet. Within an organisation, all computers will share the first part of their address; for example, all Macquarie University computers will have addresses starting with 137.111. This means that any packet sent from within Macquarie to an address in the range 137.111.x.x will find it's destination somewhere inside the organisation. However, if we send a packet to 143.119.160.16 (the NSW Government website) the network protocols need to know that this packet should be forwarded to the NSW Government network before it can be delivered. We can pretend that this all happens by magic (this isn't a networking course) and rest assured that a clever *network routing* algorithm will get the packets to where they need to go. As long as we know the IP address of the destination computer, we can establish a point-to-point channel and send data back and forth.

Within your home you might have your own private network, often established by a wireless router that connects to your ADSL or cable service. While this router will have a proper IP address, the network it establishes in your home is a *private network* and will use one of two address ranges: 192.168.x.x or 10.10.x.x. Both of these are reserved for private use, so that my laptop and your printer might have the same IP address of 192.168.100.13. A trick called Network Address Translation (NAT) carried out by your router allows each of these devices to connect to the Internet through the router, even though they don't have a full IP address. Again, we don't need to worry about the details but sometimes it's useful to know how to communicate directly with devices on your own network, in which case you might start finding out about these private IP addresses.

A significant issue with the success and ubiquity of the Internet is that we might run out of unique addresses. Since an IP address is a 32 bit number, that means there are only 4,294,967,296 unique addresses. If every computer, mobile phone, printer and electricity meter is to be connected to the Internet, the it's clear that more addresses will be needed. There are two responses to this. The first is that many of these devices share a single IP address (using NAT) which multiplies the number available significantly. THe second is a new standard called IPv6 (rather than IPv4 which I've described here) where addresses are 128 bits long. Most modern devices are able to use IPv6 addressing so the crisis is unlikely to hit us catastrophically.

IP addresses give a unique identifier for each device but they aren't very easy to remember. We're used to giving the names of web-sites via names like www.nsw.gov.au or sales.example.com. These names are translated into numerical IP addresses via the Domain Name System (DNS) which works using a clever hierarchical algorithm. For example, to work out what sales.example.com means our local DNS server would look at the last part of the address and forward the query to a server that it knows is authoritative for all addresses ending in .com. The .com server may not know which IP address corresponds to sales.example.com so it sends the query on to the DNS server for example.com which will respond with the answer. As the result is passed back to the original DNS server, it is cached (remembered) so that it can be returned more quickly the next time it is requested.

DNS allows an organisation to set up whatever names it needs and link those names to its servers. It's common to have the main web server called www.example.com but the same server could also be referred to as example.com, sales.example.com or test.example.com. We'll see later how this arrangement can be used to provide a lot of flexibility when setting up web servers.

## HTTP

In 1991 Tim Berners-Lee invented the World Wide Web. He was building on the existing technology of the Internet that allowed computers to exchange information around the world. His invention consisted essentially of three things: the Hypertext Transfer Protocol (HTTP), the Universal Resource Locator (URL) and the Hypertext Markup Language (HTML). HTTP is the language that a web client (your browser) talks to a web server to ask for a page and get the response back. It's a protocol, just like TCP/IP, but it's a much higher level protocol and it's one that we need to understand very well as web programmers.

HTTP requires that we first establish a point-to-point connection between a client (who is sending a request) and a server (who will fulfil the request if possible). This connection is usually via TCP/IP over the Internet but could also be over any other communication medium such as [bluetooth](http://code.google.com/p/bt-http-server/). Once the connection is established, the conversation can begin.

One of the important features of HTTP is that it is a simple, text based protocol. The request and response consist of a number of lines of text in a well defined format. Here is an example request that might be sent to a server:

The first word in the request is always one of the defined *HTTP verbs* (most frequently GET, HEAD or POST, we'll explore these in more detail later). A GET request asks the server to return the given resource, in this case '/storefront.html' which is probably an HTML file stored somewhere on the server. The last part of the first line (HTTP/1.1) defines the version of the standard that we are using; there was a version 1.0 but most modern browsers will use 1.1. The remaining lines of the request include other *headers* that qualify the request in some way. The *Host* header is required and denotes the server that the request is being sent to. The Accept header defines what kinds of document we'd like in return; in this case, any kind of text document is ok. The request ends with a blank line, which is how the server knows that all headers have been received.

The request is received and processed by the server and a response is sent back to the client containing the web page that was asked for. Again the format of the response is easy to understand:

The first word of the response must be HTTP/1.1, the remainder of the first line contains a response code (200) and explanation (OK) in this case saying everything is fine, here's the page you asked for. The second header here defines the type of document being returned (it's an HTML page). There is then a blank line which ends the headers (as with the request) and the HTML content is then sent.

A real request and response pair will have many more headers than this but their format follows this basic pattern: header lines followed by a blank line and an optional body. The point here is that HTTP is a very simple conversation between web client and server.

One important feature of HTTP is that each request/response pair is independent of every other. This means that all the information about your request must be included in the request headers; the server doesn't remember anything you told it last time. This is one reason that HTTP and the web have been so successful. It is very easy to implement an HTTP server and it can be done on very small devices. This might be one of the reasons why the Web succeeded where other similar systems failed. Since the protocol is so simple, it was easy to write a web server and many people did. This meant that the web was used by many small groups to publish content, forming the groundswell that led to institutional and corporate adoption.

We'll look at HTTP in more detail later, for now the take home message is:

-   HTTP is a simple text based protocol

-   The client (browser) sends a request to the server

-   The server receives the request and returns a response

-   The server doesn't need to remember the client - every request is independant.

-   The simple nature of HTTP makes it easy to understand and makes writing web servers relatively easy.

## Uniform Resource Locators: URL

Another part of Tim Berners-Lee's invention is the Uniform Resource Locator, URL. These days, URLs are ubiquitous. We see them on advertisments, on the TV, we send them to each other in email, even reference them in books and reports. Most organisations today will have at least one top-level URL for their website and often have many connected to particular services, departments or advertising campaigns.

See [the URL chapter](https://pwp.stevecassidy.net/web/urls.html) for a detaile discussion.

## Hypertext Markup Language: HTML

HTML is the last link in the chain that makes the Web. It is a language that allows authors to write Hypertext documents that include structure and formatting instructions. *Hypertext* describes the idea of linking one document to another via *hyperlinks* so that when you activate a link, you jump to a new document. There were hypertext systems before the birth of the web ([Project Xanadu](http://www.xanadu.com/), [Hypercard](http://en.wikipedia.org/wiki/HyperCard)) but HTML has been much more successful than any other standard in this space.

HTML is a *Markup Language* which means that it provides a way of adding additional information or markup to plain text. In this case, the markup defines the structure of the document - headers, paragraphs, lists, tables - as well as the hypertext features - links and anchors. There are other markup languages, for example LaTeX is used to write scientific papers by adding markup to text (e.g. \textbf{bold text} or \section{A heading}). All markup languages have some way of differentiating the text in a document from the markup instructions. In HTML this is via the angle brackets which surround tag names: \<tag>.

HTML was invented by Tim Berners-Lee but it derives from an earlier standard called SGML (Standard Generalised Markup Language) that had been in use for some years as a language for writing technical documentation. It came out of work by IBM on their technical documentation and became an industry standard ratified by the ISO. SGML is in fact a meta-standard in that it defines a way of defining a markup language. HTML is one such markup language and can strictly be treated as such; however, since HTML is so much more common than any other SGML language, it is usually treated as a special case. So, for example, while we could use general purpose SGML authoring tools to write HTML, we generally use applications tailored to writing web pages that only understand HTML.

Another related markup language is [XML](http://www.w3.org/XML/), the eXtensible Markup Language. XML began as an attempt to streamline the SGML standard to make it more suitable for the web. Like SGML, XML is a meta-standard that defines how markup languages can be written. There is a version of HTML defined as an XML language called [XHTML](http://www.w3.org/MarkUp/) but this never really took off and the standardisation work around it was stopped in 2010. Instead, XML has become widely used to describe *data* rather than *documents* and we'll look at how it is used today on the web later in this book.
