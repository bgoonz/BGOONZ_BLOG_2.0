> ## Excerpt
>
> Asynchronous JavaScript and XML, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object.
> When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

---

## [Getting Started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX#getting_started 'Permalink to Getting Started')

**Asynchronous JavaScript and XML**, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [XHTML](https://developer.mozilla.org/en-US/docs/Glossary/XHTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), [XML](https://developer.mozilla.org/en-US/docs/Web/XML), [XSLT](https://developer.mozilla.org/en-US/docs/Web/XSLT), and most importantly the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object. When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON) is preferred over XML nowadays because of its many advantages such as being a part of JavaScript, thus being lighter in size. Both JSON and XML are used for packaging information in the Ajax model.

## [Documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX#documentation 'Permalink to Documentation')

[Getting Started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

This article guides you through the Ajax basics and gives you two simple hands-on examples to get you started.

[Using the `XMLHttpRequest` API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

The [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API is the core of Ajax. This article will explain how to use some Ajax techniques, like:

-   [Analyzing and manipulating the response of the server](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#handling_responses)
-   [Monitoring the progress of a request](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#monitoring_progress)
-   [Submitting forms and upload binary files](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#submitting_forms_and_uploading_files) – in _pure_ Ajax, or using [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) objects
-   Using Ajax within [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker)

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

The Fetch API provides an interface for fetching resources. It will seem familiar to anyone who has used [`XMLHTTPRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but this API provides a more powerful and flexible feature set.

[Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)

Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as _[Events](https://developer.mozilla.org/en-US/docs/Web/API/Event) + data_ inside the web page. See also: [Using server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).

[_Pure-Ajax_ navigation example](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Example)

This article provides a working (minimalist) example of a _pure-Ajax_ website composed only of three pages.

[Sending and Receiving Binary Data](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)

The `responseType` property of the `XMLHttpRequest` object can be set to change the expected response type from the server. Possible values are the empty string (default), `arraybuffer`, `blob`, `document`, `json`, and `text`. The `response` property will contain the entity body according to `responseType`, as an `ArrayBuffer`, `Blob`, `Document`, `JSON`, or string. This article will show some Ajax I/O techniques.

[XML](https://developer.mozilla.org/en-US/docs/Web/XML)

The **Extensible Markup Language (XML)** is a W3C-recommended general-purpose markup language for creating special-purpose markup languages. It is a simplified subset of SGML, capable of describing many different kinds of data. Its primary purpose is to facilitate the sharing of data across different systems, particularly systems connected via the Internet.

[Parsing and serializing XML](https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML)

How to parse an XML document from a string, a file or via javascript and how to serialize XML documents to strings, Javascript Object trees (JXON) or files.

[XPath](https://developer.mozilla.org/en-US/docs/Web/XPath)

XPath stands for **X**ML **Path** Language, it uses a non-XML syntax that provides a flexible way of addressing (pointing to) different parts of an [XML](https://developer.mozilla.org/en-US/docs/Web/XML) document. As well as this, it can also be used to test addressed nodes within a document to determine whether they match a pattern or not.

[`FileReader`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) API

The `FileReader` API lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) or [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) objects to specify the file or data to read. File objects may be obtained from a [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) object returned as a result of a user selecting files using the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element, from a drag and drop operation's [`DataTransfer`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer) object, or from the `mozGetAsFile()` API on an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement).

[HTML in XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)

The [XMLHttpRequest](https://xhr.spec.whatwg.org/) specification adds HTML parsing support to [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), which originally supported only XML parsing. This feature allows Web apps to obtain an HTML resource as a parsed DOM using `XMLHttpRequest`.

## [See also](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX#see_also 'Permalink to See also')
