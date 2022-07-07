---
title: The Uniform Resource Locator (URL)
weight: 0
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

### Let's look at the anatomy of a URL:&#xA;&#xA;

The first part of the URL is http://, this is often left out when URLs are written, so we might see the above as www.mq.edu.au/about/profile/history.html. This will work when you type it into your web browser because the browser will assume you meant this as an HTTP URL. However, if we are being pedantic, the prefix is required as it tells us something about the web address - that we should use the HTTP protocol to access it.

URLs are not only useful for HTTP addresses. Other *schemes* are allowed and they tell the client how to get access to the content that the URL describes. The most common you will see is https:// which is the secure variant of HTTP (we'll find out about that later). HTTPS uses the same protocol as HTTP but over a secure connection so that information that is exchanged can't be intercepted. Another scheme is ftp:// which tells the browser to use the older FTP protocol to access the content. Finally, you might see a mailto URL which allows us to write a link that triggers the browser to start composing an email message. This has a slightly different form: mailto:Steve.Cassidy@mq.edu.au but it's still a URL. In fact, the pattern looks like this:

For the HTTP scheme the pattern is:

The first part \<net_loc> is the network location of the resource: the domain name of the web server that holds the web page we want. This is preceded by two forward slashes and followed by a single forward slash. Then follows the \<path> which the server will use to identify which page we want. The ;\<params>?\<query>#\<fragment> are used to further qualify the resource that we want; we'll see some examples of how they are used later in the book.

The URL is a unique form of identifier in that it has two roles. First, it identifies a document, video or music file that's out on the web (we call these things *resources*). Each resource has a unique URL and you can refer to them via the URL. If we two people refer to the same URL, then they know they have read the same document. Secondly, the URL contains enough information for a web client to retrieve a copy of the resource. The client can use the scheme defined (HTTP) to connect to the server and send an HTTP request for the path part of the URL.

There are other kinds of formal identifier that don't have this second property. For example, every book has an ISBN (International Standard Book Number) which uniquely identifies it. However, the ISBN contains no information about how to get a copy of the book. To do so, you'd need to look up the ISBN in a catalogue which might tell you who the publisher was and then contact them for a copy. Alternately you could go to a book-shop or library and use their catalogue to find the book. With a URL, there's no need for a catalogue or third party service to decode the identifier. The information on how to retrieve the resource is right there in the Uniform Resource Locator.

The [Internet Engineering Task Force (IETF)](http://www.ietf.org/) is as close as we get to a governing body for the Internet and it's home to many of the standards that define how the Internet and the Web work. The standards documents are called *Request for Comments* or RFC, a name which reflects the democratic nature of the early Internet. [RFC2068](http://datatracker.ietf.org/doc/rfc2068/) defines HTTP version 1.1 and [RFC1738](http://datatracker.ietf.org/doc/rfc1738/) defines the URL. Look out also for [RFC2324](http://datatracker.ietf.org/doc/rfc2324/) which can be relevant after a long coding session.

## Uniform Resource Identifiers

There's another similar term that is sometimes used instead of URL: Uniform Resource Identifier (URI). URI is actually a more general term that includes URLs and Universal Resource Names (URNs). URNs are identifiers that don't contain any locator information such as the ISBN. They have a formal syntax so I can cite a particular ISBN as a URN as URN:ISBN:978-0-395-36341-6 (an example from the [IETF RFC3187](http://tools.ietf.org/html/draft-ietf-urnbis-rfc3187bis-isbn-urn-01) document that defines the standard). As explained above, we need a third party service to resolve a URN into a real location (a URL). You might see the term URI used in discussions of web technologies; it is often used instead of URL but generally means the same thing if we're talking about HTTP based services.

Since URLs are both names and addresses it becomes important that once you put a resource on the web, it stays there. This is discussed in Tim Berners-Lee's paper called "[Cool URIs don't change](http://www.w3.org/Provider/Style/URI)". It's a principle that all web designers should bear in mind as it is easy to violate as we re-build old web-sites.

## Absolute and relative URLs

When we include a URL in a web page there are a number of choices about how it can be written. The first option is to include the full URL:

This is clearly a link to a resource on the server at *example.org* using the http protocol. However, if this page is being served by the server at *example.org* then we could also write this link as:

This is known as a *relative URL* and is interpreted relative to the URL of the page that is currently being viewed. Let's assume that this page is at the URL http://example.org/about/info.html. Note that the URL above starts with a / character, in this case, the browser will interpret this URL by adding the protocol (http) and domain (example.org) parts of the page URL to this one to get http://example.org/static/style.css.

Another way to write a URL is:

In this case there is no / at the start of the URL and so this is interpreted relative to the page URL by removing everything but the last part of the URL http://example.org/about/ and then adding the new URL text to get http://example.org/about/static/style.css. Note that this is different to the previous example. If the intention was to reference the same URL as before, you could use the URL:

Here the .. path refers to the parent directory (thinking of these paths as filenames) so the path becomes /about/../static/style.css which can be shortened to /static/style.css.

The different URL styles have different uses. If you are writing a static HTML page that you will view on your local computer and perhaps host on the web somewhere (but you're not sure where) then you might put all of your files in one directory and use a relative URL like static/style.css to refer to linked resources. This ensures that your directory of files could be dropped anywhere into a web server file system and it would be self-contained and the links would work.

However, if you are writing a web application that will be hosted on some domain (like example.org) you know that you have control of all URLs on that site and so would more likely use a relative URL starting with a / (like /static/style.css). This is important if your web application has complex routes (eg. pages like /users/steve/profile/edit) and you want to ensure that whatever the page URL being served, the links to stylesheets and other resources will work. The application can be deployed on different servers (like example.org and example.com) and the links will still work because they don't mention the domain name at all.

Finally, absolute URLs (like http://example.org/static/style.css) will be used when we know that this URL is fixed at this location. It may be something external to our own site, or something that we know will be hosted at this URL on our site. There is an argument from a Search Engine Optimisation (SEO) viewpoint that all URLs in a website should be absolute urls even when they refer to assets on the same site. The reasons relate to the way that search engines crawl sites and the possible duplication of content if two URLs point to the same page (eg. https://example.org/ and http://example.org).

One final form of relative URL looks like this:

This URL is only missing the protocol part and is turned into an absolute URL by adding the protocol part of the current page URL. So if the current page was requested over http or https, this URL will use the same protocol. This is often useful if a site can be served over both protocols although it is increasingly the case that https is being used everywhere so this may become less common as time progresses.

[Share To Facebook:](https://www.facebook.com/sharer/sharer.php?u=https://bgoonz-blog.netlify.app/)
