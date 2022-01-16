---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---


---
## Term:  '404'
  - Glossary
  - HTTP Errors
  - Infrastructure
  - Navigation
---


> A 404 is a Standard Response Code meaning that the _Glossary("Server", "server"_) cannot find the requested resource.

#### See also

- [list of HTTP response codes](/en-US/docs/Web/HTTP/Status)
- [advice for beginners on avoiding 404 errors](/en-US/docs/Learn/Common_questions/Checking_that_your_web_site_is_working_properly)

---


## Term:  '502'
  - '502'
  - Bad Gateway
  - Glossary
  - HTTP Errors
  - Infrastructure
  - Navigation
---


> An _Glossary("HTTP"_) error code meaning "Bad Gateway".

A _Glossary("Server", "server"_) can act as a gateway or proxy (go-between) between a client (like your Web browser) and another, upstream server. When you request to access a _Glossary("URL"_), the gateway server can relay your request to the upstream server. "502" means that the upstream server has returned an invalid response.

Normally the upstream server is not down (i.e. furnishes no response to the gateway/proxy), but does not understand the same data-exchange protocol as the gateway/proxy. Internet _Glossary("Protocol", "protocols"_) are quite explicit, and so a 502 usually means that one or both machines were incorrectly or incompletely programmed.

#### See also

- [list of HTTP response codes](/en-US/docs/Web/HTTP/Status)

---


## Term:  Abstraction
  - Abstraction
  - Coding
  - CodingScripting
  - Glossary
  - Programming Language
---


> Abstraction in _Glossary("computer programming"_) is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler _Glossary("API", "APIs"_).

## Advantages of Data Abstraction

- Helps the user to avoid writing low level code.
- Avoids code duplication and increases reusability.
- Can change internal implementation of class independently without affecting the user.
- Helps to increase security of an application or program as only important details are provided to the user.

## Example

```js
class ImplementAbstraction {
  // method to set values of internal members
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log('a = ' + this.a);
    console.log('b = ' + this.b);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

#### See also

- _interwiki("wikipedia", "Abstraction (computer science)", "Abstraction"_) on Wikipedia

---


## Term:  accent
  - Glossary
  - Input
  - accent
---


> An **accent** is a typically bright color that contrasts with the more utilitarian background and foreground colors within a color scheme. These are present in the visual style of many platforms (though not all).

On the web, an accent is sometimes used in _HTMLElement("input"_) elements for the active portion of the control, for instance the background of a checked [checkbox](/en-US/docs/Web/HTML/Element/input/checkbox).

#### See also

### CSS related to the accent

You can set the color of the accent for a given element by setting the element's CSS _cssxref("accent-color"_) property to the appropriate _cssxref("&lt;color&gt;"_) value.

---


## Term:  Accessibility tree
  - AOM
  - Accessibility
  - DOM
  - Glossary
  - Reference
---


> The **accessibility tree** contains _Glossary("accessibility"_)-related information for most HTML elements.

Browsers convert markup into an internal representation called the _[DOM tree](/en-US/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)_. The DOM tree contains objects representing all the markup’s elements, attributes, and text nodes. Browsers then create an accessibility tree based on the DOM tree, which is used by platform-specific Accessibility APIs to provide a representation that can be understood by assistive technologies, such as screen readers.

There are four things in an accessibility tree object:

- **name**
  - : How can we refer to this thing? For instance, a link with the text "Read more" will have "Read more" as its name (find more on how names are computed in the [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **description**
  - : How do we describe this thing, if we want to provide more description beyond the name? The description of a table could explain what kind of information the table contains.
- **role**
  - : What kind of thing is it? For example, is it a button, a nav bar, or a list of items?
- **state**
  - : Does it have a state? Examples include checked or unchecked for checkboxes, and collapsed or expanded for the [`<summary>`](/en-US/docs/Web/HTML/Element/summary) element.

Additionally, the accessibility tree often contains information on what can be done with an element: a link can be _followed_, a text input can be _typed into_, etc.

While still in draft form within the Web Incubator Community Group, the **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** intends to incubate APIs that make it easier to express accessibility semantics and potentially allow read access to the computed accessibility tree.

#### See also

- [Glossary](/en-US/docs/Glossary)

  - _Glossary("Accessibility"_)
  - _Glossary("ARIA"_)

---


## Term:  Accessibility
  - Accessibility
  - Glossary
---


> _Web Accessibility_ (**A11Y**) refers to best practices for keeping a website usable despite physical and technical restrictions. Web accessibility is formally defined and discussed at the _Glossary("W3C"_) through the _Glossary("WAI","Web Accessibility Initiative"_) (WAI).

#### See also

- [Accessibility resources at MDN](/en-US/docs/Web/Accessibility)
- _Interwiki("wikipedia", "Web accessibility"_) on Wikipedia
- [Learn accessibility on MDN](/en-US/docs/Learn/Accessibility)
- [Web Accessibility In Mind](https://webaim.org/)
- [The ARIA documentation on MDN](/en-US/docs/Web/Accessibility/ARIA)
- [The Web Accessibility Initiative homepage](https://www.w3.org/WAI/)
- [The WAI-ARIA recommendation](https://www.w3.org/TR/wai-aria/)

---


## Term:  Adobe Flash
---


> Flash is an obsolete technology developed by Adobe for viewing expressive web applications, multimedia content, and streaming media.

As of 2021, Flash is no longer supported by Adobe or any major web browsers.

#### See also

- [Adobe Flash end-of-life announcement](https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update#gs.g8mmgf)
- [Saying goodbye to Flash in Chrome](https://www.blog.google/products/chrome/saying-goodbye-flash-chrome/)
- [Firefox Roadmap for Flash End-of-Life](https://blog.mozilla.org/futurereleases/2017/07/25/firefox-roadmap-flash-end-life/)
- [Microsoft Windows Flash Player removal](https://blogs.windows.com/msedgedev/2020/09/04/update-adobe-flash-end-support/)

---


## Term:  Advance measure
  - Accessibility
  - Glossary
---


> 
The **advance measure** of a glyph is its _advance width_ or _advance height_, whichever is in the inline axis of the element.

This term is used in the definition of a number of CSS _cssxref("&lt;length&gt;"_) units.
For example, `ch` is the _advance measure_ of the "0" character in the given typeface.
For a horizontal inline axis, this will be the width of the character.

#### See also

- _cssxref("&lt;length&gt;"_)


---


## Term:  Ajax
  - AJAX
  - CodingScripting
  - Glossary
  - Infrastructure
  - l10n:priority
---


> **Ajax**, which initially stood for Asynchronous _Glossary("JavaScript"_) And _Glossary("XML"_), is a programming practice of building complex, dynamic webpages using a technology known as _Glossary("XHR_(XMLHttpRequest)","XMLHttpRequest"_).

Ajax allows you to update parts of the _Glossary("DOM"_) of an _Glossary("HTML"_) page without the need for a full page refresh. Ajax also lets you work asynchronously, meaning your code continues to run while the targeted part of your web page is trying to reload (compared to synchronously, which blocks your code from running until that part of your page is done reloading).

With interactive websites and modern web standards, Ajax is gradually being replaced by functions within JavaScript frameworks and the official _domxref("Fetch API"_) Standard.

#### See also

- _interwiki("wikipedia", "AJAX"_) on Wikipedia
- [Ajax](/en-US/docs/Web/Guide/AJAX)
- [Ajax - Getting started](/en-US/docs/Web/Guide/AJAX/Getting_Started)
- [Glossary](/en-US/docs/Glossary):

  - _Glossary("XHR_(XMLHttpRequest)","XMLHttpRequest"_)

- _DOMxRef("XMLHttpRequest"_)
- _DOMxRef("Fetch API"_)
- [Using Fetch API](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Synchronous vs. Asynchronous Communications](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)

---


## Term:  Algorithm
  - CodingScripting
  - Glossary
---


> An algorithm is a self-contained series of instructions to perform a function.

In other words, an algorithm is a means of describing a way to solve a problem so that it can be solved repeatedly, by humans or machines. Computer scientists compare the efficiency of algorithms through the concept of "Algorithmic Complexity" or "Big O" notation.

For example:

- A cooking recipe is a simple algorithm for humans.
- A sorting algorithm is often used in computer programming to explain a machine how to sort data.

Common algorithms are Pathfinding algorithms such as the Traveling Salesman Problem, Tree Traversal algorithms and so on.

There are also Machine Learning algorithms such as Linear Regression, Logistic Regression, Decision Tree, Random Forest, Support Vector Machine, Recurrent Neural Network (RNN), Long Short Term Memory (LSTM) Neural Network, Convolutional Neural Network (CNN), Deep Convolutional Neural Network and so on.

#### See also

- _Interwiki("wikipedia", "Algorithm", "Algorithm"_) on Wikipedia
- [Explanations of sorting algorithms](https://www.toptal.com/developers/sorting-algorithms)
- [Explanations of algorithmic complexity](https://bigocheatsheet.com/)

---


## Term:  Alignment container
  - Alignment container
  - CSS
  - Glossary
  - alignment
---


> The **alignment container** is the rectangle that the [alignment subject](/en-US/docs/Glossary/Alignment_Subject) is aligned within. This is defined by the layout mode; it is usually the alignment subject’s containing block, and assumes the writing mode of the box establishing the containing block.

#### See also

- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)

---


## Term:  Alignment subject
  - Alignment subject
  - CSS
  - Glossary
  - alignment
---


> In [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment) the **alignment subject** is the thing (or things) being aligned by the property.

For _cssxref("justify-self"_) and _cssxref("align-self"_), the alignment subject is the margin box of the box the property is set on, using the writing mode of that box.

For _cssxref("justify-content"_) and _cssxref("align-content"_), the writing mode of the box is also used. The definition of the alignment subject depends on the layout mode being used.

- Block containers (including table cells)
  - : The entire content of the block as a single unit.
- Multicol containers
  - : The column boxes, with any spacing inserted between column boxes added to the relevant column gaps.
- Flex containers
  - : For _cssxref("justify-content"_), the flex items in each flex line.
    For _cssxref("align-content"_), the flex lines. Note, this only has an effect on multi-line flex containers.
- Grid containers
  - : The grid tracks in the appropriate axis, with any spacing inserted between tracks added to the relevant gutters. Collapsed gutters are treated as a single opportunity for space insertion.

#### See also

- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)

---


## Term:  Alpha (alpha channel)
  - Alpha
  - Alpha Channel
  - Drawing
  - Glossary
  - Graphics
  - Translucency
  - Translucent
  - Transparency
  - Transparent
  - WebGL
  - WebXR
  - channel
  - color
  - pixel
---


> Colors are represented in digital form as a collection of numbers, each representing the strength or intensity level of a given component of the color. Each of these components is called a **channel**. In a typical image file, the color channels describe how much red, green, and blue are used to make up the final color. To represent a color through which the background can be seen to some extent, a fourth channel is added to the color: the **alpha channel**. The alpha channel specifies how opaque the color is.

For example, the color `#8921F2` (also described as `rgb(137, 33, 242)` or `hsl(270, 89%, 54)`) is a nice shade of purple. Below you see a small box of that color in the top-left corner and a box of the _same_ color but with an alpha channel set at 0.5 (50% opacity). The two boxes are drawn on top of a paragraph of text.

![Image showing the effect of an alpha channel on a color.](alpha-channel-example.png)

As you can see, the color without an alpha channel completely blocks the background text, while the box with the alpha channel leaves it visible through the purple background color.

#### See also

- _interwiki("wikipedia", "Alpha compositing"_) on Wikipedia
- _interwiki("wikipedia", "RGBA color model"_) on Wikipedia
- _interwiki("wikipedia", "Channel (digital image)"_) on Wikipedia
- [CSS color](/en-US/docs/Web/CSS/CSS_Color)

---


## Term:  ALPN
  - ALPN
  - Draft
  - Glossary
  - NeedsContent
  - TLS
---


> **Application-Layer _Glossary("Protocol"_) Negotiation** (**ALPN**) is a _Glossary("TLS"_) extension which indicates what application layer protocol is negotiating the encrypted connection without requiring additional round trips.

| Protocol                                       | Identification sequence                                |
| ---------------------------------------------- | ------------------------------------------------------ |
| _Glossary("HTTP"_)/1.1               | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("http/1.1") |
| _Glossary("HTTP 2", "HTTP/2"_)   | `0x68 0x32` ("h2")                                     |
| HTTP/2 over cleartext _Glossary("TCP"_) | `0x68 0x32 0x63` ("h2c")                               |

## Specifications

| Specification    | Status   | Notes               |
| ---------------- | -------- | ------------------- |
| _RFC(7301_) | IETF RFC | Initial definition. |

#### See also

- [IANA registered ALPN identifiers](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids)

---


## Term:  API
  - CodingScripting
  - Glossary
  - Infrastructure
---


> An API (Application Programming Interface) is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third party software or hardware.

In Web development, an API is generally a set of code features (e.g. _glossary("method","methods"_), _Glossary("property","properties"_), events, and _Glossary("URL","URLs"_)) that a developer can use in their apps for interacting with components of a user's web browser, or other software/hardware on the user's computer, or third party websites and services.

For example:

- The [getUserMedia](/en-US/docs/Web/API/MediaDevices/getUserMedia) API can be used to grab audio and video from a user's webcam, which can then be used in any way the developer likes, for example, recording video and audio, broadcasting it to another user in a conference call, or capturing image stills from the video.
- The [Geolocation API](/en-US/docs/Web/API/Geolocation) can be used to retrieve location information from whatever service the user has available on their device (e.g. GPS), which can then be used in conjunction with the [Google Maps APIs](https://developers.google.com/maps/) to for example plot the user's location on a custom map and show them what tourist attractions are in their area.
- The [Twitter APIs](https://dev.twitter.com/overview/api) can be used to retrieve data from a user's twitter accounts, for example, to display their latest tweets on a web page.
- The [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) can be used to animate parts of a web page — for example, to make images move around or rotate.

#### See also

- _Interwiki("wikipedia", "API", "API"_) on Wikipedia
- [Web API reference](/en-US/docs/Web/API)

---


## Term:  Apple Safari
  - Glossary
  - Navigation
  - WebMechanics
---


> [Safari](https://www.apple.com/safari/) is a _Glossary("Browser","Web browser"_) developed by Apple and bundled with both macOS and iOS. It's based on the open source [WebKit](https://webkit.org/) engine.

#### See also

- _Interwiki("wikipedia", "Safari (web browser)", "Safari"_) on Wikipedia
- [Safari on apple.com](https://www.apple.com/safari/)
- [The WebKit project](https://webkit.org/)
- [WebKit nightly build](https://nightly.webkit.org/)
- [Reporting a bug for Safari](https://bugs.webkit.org/)

---


## Term:  Application Context
  - CodingScripting
  - Glossary
---


> An **application context** is a top-level [browsing context](/en-US/docs/Glossary/Browsing_context) that has a [manifest](/en-US/docs/Web/Manifest) applied to it.

If an application context is created as a result of the user agent being asked to navigate to a deep link, the user agent must immediately navigate to the deep link with replacement enabled. Otherwise, when the application context is created, the user agent must immediately navigate to the start URL with replacement enabled.

Please note that the start URL is not necessarily the value of the start_url member: the user or user agent could have changed it when the application was added to home-screen or otherwise bookmarked.

---


## Term:  Argument
  - CodingScripting
  - Glossary
  - JavaScript
---


> An **argument** is a _glossary("value"_) (_Glossary("primitive"_) or _Glossary("object"_)) passed as input to a _Glossary("function"_).

#### See also

- _Interwiki("wikipedia", "Parameter_(computer_programming)", "Difference between Parameter and Argument"_) on Wikipedia
- The _jsxref("Functions/arguments","arguments"_) object in _glossary("JavaScript"_)

---


## Term:  ARIA
  - Accessibility
  - Glossary
---


> **ARIA** (_Accessible Rich _glossary("Internet"_) Applications_) is a _Glossary("W3C"_) specification for adding semantics and other metadata to _Glossary("HTML"_) to cater to users of assistive technology.

For example, you could add the attribute `role="alert"` to a _HTMLElement("p"_) _glossary("tag"_) to notify a sight-challenged user that the information is important and time-sensitive (which you might otherwise convey through text color).

#### See also

- [ARIA](/en-US/docs/Web/Accessibility/ARIA)

---


## Term:  ARPA
  - Glossary
  - Infrastructure
---


> **.arpa** (address and routing parameter area) is a _glossary("TLD","top-level domain"_) used for Internet infrastructure purposes, especially reverse DNS lookup (i.e., find the _glossary('domain name'_) for a given _glossary("IP address"_)).

#### See also

- [Official website](https://www.iana.org/domains/arpa)
- _Interwiki("wikipedia", ".arpa"_) on Wikipedia

---


## Term:  ARPANET
  - Glossary
  - Infrastructure
---


> The **ARPANET** (Advanced Research Projects Agency NETwork) was an early computer network, constructed in 1969 as a robust medium to transmit sensitive military data and to connect leading research groups throughout the United States. ARPANET first ran NCP (Network Control Protocol) and subsequently the first version of the Internet protocol or _glossary("TCP"_)/_glossary("IPv4","IP"_) suite, making ARPANET a prominent part of the nascent _glossary("Internet"_). ARPANET was closed in early 1990.

#### See also

- _Interwiki("wikipedia", "ARPANET"_) on Wikipedia

---


## Term:  Array
  - Array
  - CodingScripting
  - Glossary
  - JavaScript
  - programming
---


> An _array_ is an ordered collection of data (either _Glossary("primitive"_) or _Glossary("object"_) depending upon the language). Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.

Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various _Glossary("Method", "methods"_).

What an array in JavaScript looks like:

```js
let myArray = [1, 2, 3, 4];
let catNamesArray = ["Jacqueline", "Sophia", "Autumn"];
//Arrays in JavaScript can hold different types of data, as shown above.
```

#### See also

- _Interwiki("wikipedia", "Array data structure", "Array"_) on Wikipedia
- JavaScript _jsxref("Array"_) on MDN

---


## Term:  ASCII
  - Glossary
  - Infrastructure
---


> **ASCII** (_American Standard Code for Information Interchange_) is one of the most popular coding method used by computers for converting letters, numbers, punctuation and control codes into digital form. Since 2007, _Glossary("UTF-8"_) superseded it on the Web.

#### See also

_Interwiki("wikipedia", "ASCII"_) on Wikipedia

---


## Term:  Asynchronous
  - Glossary
  - Web
  - WebMechanics
  - asynchronous
---


> The term **asynchronous** refers to two or more objects or events **not** existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete). In computing, the word "asynchronous" is used in two major contexts.

- Networking and communications

  - : Asynchronous communication is a method of exchanging messages between two or more parties in which each party receives and processes messages whenever it's convenient or possible to do so, rather than doing so immediately upon receipt. Additionally, messages may be sent without waiting for acknowledgement, with the understanding that if a problem occurs, the recipient will request corrections or otherwise handle the situation.

    For humans, e-mail is an asynchronous communication method; the sender sends an email and the recipient will read and reply to the message when it's convenient to do so, rather than doing so at once. And both sides can continue to send and receive messages whenever they wish, instead of having to schedule them around each other.

    When software communicates asynchronously, a program may make a request for information from another piece of software (such as a server), and continue to do other things while waiting for a reply. For example, the [AJAX](/en-US/docs/Web/Guide/AJAX) (Asynchronous JavaScript and _Glossary("XML"_)) programming technique—now usually "Ajax", even though _Glossary("JSON"_) is usually used rather than XML in modern applications—is a mechanism that requests relatively small amounts of data from the server using _Glossary("HTTP"_), with the result being returned when available rather than immediately.

- Software design

  - : Asynchronous software design expands upon the concept by building code that allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete. When the secondary task is completed, the original task is notified using an agreed-upon mechanism so that it knows the work is done, and that the result, if any, is available.

    There are a number of programming techniques for implementing asynchronous software. See the article [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous) for an introduction to them.

#### See also

- [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Learning Area)
- _glossary("Synchronous"_)

---


## Term:  ATAG
  - ATAG
  - Accessibility
  - Authoring Tool Accessibility Guidelines
  - Glossary
---


> ATAG (Authoring Tool _glossary("Accessibility"_) Guidelines) is a _Glossary("W3C"_) recommendation for building accessible-authoring tools that produce accessible contents.

#### See also

- [ATAG as part of the Web Accessibility Initiative](https://en.wikipedia.org/wiki/Web_Accessibility_Initiative#Authoring_Tools_Accessibility_Guidelines_.28ATAG.29) on WikiPedia
- [Authoring Tool Accessibility Guidelines (ATAG) Overview](https://www.w3.org/WAI/intro/atag.php)
- [The ATAG 2.0 recommendation](https://www.w3.org/TR/ATAG20/)

---


## Term:  Attribute
  - CodingScripting
  - Glossary
  - HTML
---


> An **attribute** extends an HTML or XML _Glossary("element"_), changing its behavior or providing metadata.

An attribute always has the form `name="value"` (the attribute's identifier followed by its associated value).

You may see attributes without the equals sign or a value. That is a shorthand for providing the empty string in HTML, or the attribute's name in XML.

```html
<input required>
<!-- is the same as… -->
<input required="">
<!-- or -->
<input required="required">
```

## Reflection of an attribute

Attributes may be _reflected_ into a particular property of the specific interface.
It means that the value of the attribute can be read by accessing the property,
and can be modified by setting the property to a different value.

For example, the `placeholder` below is reflected into _domxref("HTMLInputElement.placeholder"_).

Considering the following HTML:

```html
<input placeholder="Original placeholder">
```

We can check the reflection between _domxref("HTMLInputElement.placeholder"_) and the attribute using:

```js
let input = document.getElementsByTagName("input")[0];
let attr = input.getAttributeNode("placeholder")
console.log(attr.value);
console.log(input.placeholder); //Returns the same value as `attr.value`
```

and

```js
let input2 = document.getElementsByTagName("input")[0];
let attr2 = input.getAttributeNode("placeholder")
console.log(attr2.value); // Returns `Original placeholder`
input2.placeholder = "Modified placeholder"; // Also change the value of the reflected attribute.
console.log(attr2.value); // Returns `Modified placeholder`
```

#### See also

- [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
- Information about HTML's [global attributes](/en-US/docs/Web/HTML/Global_attributes)

---


## Term:  Media (Audio-visual presentation)
  - Audio
  - Glossary
  - Media
  - Multimedia
  - Video
---


> The term **media** (more accurately, **multimedia**) refers to audio, video, or combined audio-visual material such as music, recorded speech, movies, TV shows, or any other form of content that is presented over a period of time.

More broadly, media may include still images such as photographs or other still images.

Media content can be recorded, played back, presented, and at times interacted with in various ways.

#### See also

- _interwiki("wikipedia", "Multimedia"_) on Wikipedia
- [Web media technologies](/en-US/docs/Web/Media): a guide to all the ways media can be used in web content
- [Multimedia and Embedding](/en-US/docs/Learn/HTML/Multimedia_and_embedding) in the MDN learning area
- _HTMLElement("audio"_) and _HTMLElement("video"_) elements, used to present media in _Glossary("HTML"_) documents

---


## Term:  Bandwidth
  - Glossary
  - Infrastructure
---


> Bandwidth is the measure of how much information can pass through a data connection in a given amount of time. It is usually measured in multiples of bits-per-second (bps), for example megabits-per-second (Mbps) or gigabits-per-second (Gbps).

#### See also

- _Interwiki("wikipedia", "Bandwidth"_) on Wikipedia

---


## Term:  Base64
  - Advanced
  - Base64
  - JavaScript
  - Typed Arrays
  - URI
  - URL
  - Unicode Problem
  - atob()
  - btoa()
---


> **Base64** is a group of similar [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term *Base64* originates from a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII. This is to ensure that the data remain intact without modification during transport. Base64 is commonly used in a number of applications including email via [MIME](https://en.wikipedia.org/wiki/MIME), and storing complex data in [XML](/en-US/docs/Web/XML).

One common application of Base64 encoding on the web is to encode binary data so it can be included in a [data: URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

In JavaScript there are two functions respectively for decoding and encoding Base64 strings:

- [`btoa()`](/en-US/docs/Web/API/btoa): creates a Base64-encoded ASCII string from a "string" of binary data ("btoa" should be read as "binary to ASCII").
- [`atob()`](/en-US/docs/Web/API/atob): decodes a Base64-encoded string("atob" should be read as "ASCII to binary").

The algorithm used by `atob()` and `btoa()` is specified in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), section 4.

Note that `btoa()` expects to be passed binary data, and will throw an exception if the given string contains any characters whose UTF-16 representation occupies more than one byte. For more details, see the documentation for [`btoa()`](/en-US/docs/Web/API/btoa).

## Encoded size increase

Each Base64 digit represents exactly 6 bits of data. So, three 8-bits bytes of the input string/binary file (3×8 bits = 24 bits) can be represented by four 6-bit Base64 digits (4×6 = 24 bits).

This means that the Base64 version of a string or file will be at least 133% the size of its source (a \~33% increase). The increase may be larger if the encoded data is small. For example, the string `"a"` with `length === 1` gets encoded to `"YQ=="` with `length === 4` — a 300% increase.

## The "Unicode Problem"

Since [`DOMString`](/en-US/docs/Web/API/DOMString "/en-US/docs/Web/API/DOMString")s are 16-bit-encoded strings, in most browsers calling `window.btoa` on a Unicode string will cause a `Character Out Of Range` exception if a character exceeds the range of a 8-bit ASCII-encoded character. There are two possible methods to solve this problem:

- the first one is to escape the whole string and then encode it;
- the second one is to convert the UTF-16 [`DOMString`](/en-US/docs/Web/API/DOMString "/en-US/docs/Web/API/DOMString") to an UTF-8 array of characters and then encode it.

Here are the two possible methods.

### Solution #1 – escaping the string before encoding it

```js
function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}

// Usage:
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
```

This solution has been proposed by [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html).

Another possible solution without utilizing the now deprecated 'unescape' and 'escape' functions.

```js
function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
 b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
```

### Solution #2 – rewriting `atob()` and `btoa()` using `TypedArray`s and UTF-8

> **Note:** The following code is also useful to get an [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) from a Base64 string and/or viceversa ([see below](#appendix_decode_a_base64_string_to_uint8array_or_arraybuffer)).

```js
"use strict";

/*\
|*|
|*|  Base64 / binary data / UTF-8 strings utilities
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
|*|
\*/

/* Array of bytes to Base64 string decoding */

function b64ToUint6 (nChr) {

  return nChr > 64 && nChr < 91 ?
      nChr - 65
    : nChr > 96 && nChr < 123 ?
      nChr - 71
    : nChr > 47 && nChr < 58 ?
      nChr + 4
    : nChr === 43 ?
      62
    : nChr === 47 ?
      63
    :
      0;

}

function base64DecToArr (sBase64, nBlocksSize) {

  var
    sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
    nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2, taBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 6 * (3 - nMod4);
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;

    }
  }

  return taBytes;
}

/* Base64 string to array encoding */

function uint6ToB64 (nUint6) {

  return nUint6 < 26 ?
      nUint6 + 65
    : nUint6 < 52 ?
      nUint6 + 71
    : nUint6 < 62 ?
      nUint6 - 4
    : nUint6 === 62 ?
      43
    : nUint6 === 63 ?
      47
    :
      65;

}

function base64EncArr (aBytes) {

  var nMod3 = 2, sB64Enc = "";

  for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
    nMod3 = nIdx % 3;
    if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
    nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
      sB64Enc += String.fromCodePoint(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
      nUint24 = 0;
    }
  }

  return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');

}

/* UTF-8 array to DOMString and vice versa */

function UTF8ArrToStr (aBytes) {

  var sView = "";

  for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
    nPart = aBytes[nIdx];
    sView += String.fromCodePoint(
      nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
        /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
        (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
        (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
        (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
        (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
      : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
        (nPart - 192 << 6) + aBytes[++nIdx] - 128
      : /* nPart < 127 ? */ /* one byte */
        nPart
    );
  }

  return sView;

}

function strToUTF8Arr (sDOMStr) {

  var aBytes, nChr, nStrLen = sDOMStr.length, nArrLen = 0;

  /* mapping... */

  for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
    nChr = sDOMStr.codePointAt(nMapIdx);

    if (nChr > 65536) {
      nMapIdx++;
    }

    nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
  }

  aBytes = new Uint8Array(nArrLen);

  /* transcription... */

  for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
    nChr = sDOMStr.codePointAt(nChrIdx);
    if (nChr < 128) {
      /* one byte */
      aBytes[nIdx++] = nChr;
    } else if (nChr < 0x800) {
      /* two bytes */
      aBytes[nIdx++] = 192 + (nChr >>> 6);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x10000) {
      /* three bytes */
      aBytes[nIdx++] = 224 + (nChr >>> 12);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
    } else if (nChr < 0x200000) {
      /* four bytes */
      aBytes[nIdx++] = 240 + (nChr >>> 18);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } else if (nChr < 0x4000000) {
      /* five bytes */
      aBytes[nIdx++] = 248 + (nChr >>> 24);
      aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    } else /* if (nChr <= 0x7fffffff) */ {
      /* six bytes */
      aBytes[nIdx++] = 252 + (nChr >>> 30);
      aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
      aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
      aBytes[nIdx++] = 128 + (nChr & 63);
      nChrIdx++;
    }
  }

  return aBytes;

}
```

### Tests

```js
/* Tests */

var sMyInput = "Base 64 \u2014 Mozilla Developer Network";

var aMyUTF8Input = strToUTF8Arr(sMyInput);

var sMyBase64 = base64EncArr(aMyUTF8Input);

alert(sMyBase64);

var aMyUTF8Output = base64DecToArr(sMyBase64);

var sMyOutput = UTF8ArrToStr(aMyUTF8Output);

alert(sMyOutput);
```

### Appendix: Decode a Base64 string to Uint8Array or ArrayBuffer

These function let us to create also [uint8Arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) or [arrayBuffers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) from Base64-encoded strings:

```js
// "Base 64 \u2014 Mozilla Developer Network"
var myArray = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==");

// "Base 64 \u2014 Mozilla Developer Network"
var myBuffer = base64DecToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==").buffer;

alert(myBuffer.byteLength);
```

> **Note:** The function `base64DecToArr(sBase64[, nBlocksSize])` returns an [`uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) of bytes. If your aim is to build a buffer of 16-bit / 32-bit / 64-bit raw data, use the `nBlocksSize` argument, which is the number of bytes of which the `uint8Array.buffer.bytesLength` property must result a multiple (`1` or omitted for ASCII, [binary strings](/en-US/docs/Web/API/DOMString/Binary) or UTF-8-encoded strings, `2` for UTF-16 strings, `4` for UTF-32 strings).

---


## Term:  Baseline
  - CSS
  - Glossary
  - SVG
  - alignment
  - typography
---


> The **baseline** is a term used in European and West Asian typography meaning an imaginary line upon which the characters of a font rest.

The descenders of characters like g and p extend below this line. _Glossary("glyph", "Glyphs"_) with rounded lower and upper extents like C or 3 slightly extend below it.

East Asian scripts have no baseline. Their glyphs are placed in a square box without ascenders or descenders.

#### See also

- [Baseline](<https://en.wikipedia.org/wiki/Baseline_(typography)>) on Wikipedia
- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment#types_of_alignment) on MDN

---


## Term:  beacon
  - Beacon
  - Glossary
  - Reference
  - Web Performance
---


> A web **beacon** is a small object, such as a 1 pixel gif, embedded in markup, used to communicate information back to the web server or to 3rd party servers. Beacons are generally included to provide information about the user for statistical purposes. Beacons are often included within third party scripts for collecting user data, performance metrics and error reporting.

There is a [W3C Draft Beacon Specification](https://w3c.github.io/beacon/) to standardize the beacon as an interface to asynchronously transfer HTTP data from User Agent to a web server prior to page load without negative performance impact.

#### See also

- [Real User Monitoring (RUM)](/en-US/docs/Glossary/Real_User_Monitoring)

---


## Term:  BiDi
  - Accessibility
  - Glossary
---


> **BiDi** (BiDirectional) refers to a document containing both right-to-left and left-to-right text. Even when both directionalities occur in the same paragraph, the text in each language must appear in its proper directionality.

#### See also

- _Interwiki("wikipedia", "Bi-directional text"_) on Wikipedia

---


## Term:  BigInt
  - BigInt
  - Glossary
  - JavaScript
  - Reference
  - arbitrary precision format
---


> In _Glossary("JavaScript"_), **BigInt** is a numeric data type that can represent integers in the [arbitrary precision format](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums.

#### See also

- _Interwiki("wikipedia", "Data type#Numeric_types", "Numeric types"_) on Wikipedia
- The JavaScript type: [`BigInt`](/en-US/docs/Web/JavaScript/Data_structures#bigint_type)
- The JavaScript global object _jsxref("BigInt"_)

---


## Term:  Blink
  - Glossary
  - Infrastructure
  - Layout
  - Rendering engine
---


> Blink is an open-source browser layout engine developed by Google as part of Chromium (and therefore part of _glossary("Google Chrome", "Chrome"_) as well). Specifically, Blink began as a fork of the WebCore library in _glossary("WebKit"_), which handles layout, rendering, and _glossary("DOM"_), but now stands on its own as a separate _glossary("rendering engine"_).

#### See also

- Blink project [home page](https://www.chromium.org/blink)
- [Blink](<https://en.wikipedia.org/wiki/Blink_(browser_engine)>) on Wikipedia
- [FAQ](https://www.chromium.org/blink/developer-faq) on Blink
- [Glossary](/en-US/docs/Glossary)

  - _glossary("Google Chrome"_)
  - _glossary("Gecko"_)
  - _glossary("Trident"_)
  - _glossary("WebKit"_)
  - _glossary("Rendering engine"_)

---


## Term:  Block cipher mode of operation
  - Block cipher mode of operation
  - Cryptography
  - Glossary
  - Security
---


> A block cipher mode of operation, usually just called a "mode" in context, specifies how a block cipher should be used to encrypt or decrypt messages that are longer than the block size.

Most symmetric-key algorithms currently in use are block ciphers: this means that they encrypt data a block at a time. The size of each block is fixed and determined by the algorithm: for example AES uses 16-byte blocks. Block ciphers are always used with a _mode_, which specifies how to securely encrypt messages that are longer than the block size. For example, AES is a cipher, while CTR, CBC, and GCM are all modes. Using an inappropriate mode, or using a mode incorrectly, can completely undermine the security provided by the underlying cipher.

---


## Term:  Block
  - Disambiguation
  - Glossary
---


> The term **block** can have several meanings depending on the context. It may refer to:

_GlossaryDisambiguation}}

---


## Term:  Boolean
  - Boolean
  - CodingScripting
  - Glossary
  - JavaScript
  - Programming Languages
  - data types
---


> In computer science, a **Boolean** is a logical data type that can have only the values `true` or `false`.

For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute (such as in [if statements](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)) or repeat (such as in [for loops](/en-US/docs/Web/JavaScript/Reference/Statements/for)).

Below is some JavaScript pseudocode (it's not truly executable code) demonstrating this concept.

```js
/* JavaScript if statement */
if (boolean conditional) {
   // code to execute if the conditional is true
}

if (boolean conditional) {
  console.log("boolean conditional resolved to true");
} else {
  console.log("boolean conditional resolved to false");
}

/* JavaScript for loop */
for (control variable; boolean conditional; counter) {
  // code to execute repeatedly if the conditional is true
}

for (var i=0; i < 4; i++) {
  console.log("I print only when the boolean conditional is true");
}
```

The Boolean value is named after English mathematician _interwiki("wikipedia", "George Boole"_), who pioneered the field of mathematical logic.

#### See also

- _Interwiki("wikipedia", "Boolean data type", "Boolean"_) on Wikipedia
- The JavaScript global object: _jsxref("Boolean"_)
- [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)

---


## Term:  Boot2Gecko
  - B2G
  - Boot2Gecko
  - Firefox OS
  - Glossary
  - Infrastructure
  - Intro
---


> _Boot2Gecko_ (**B2G**) is the engineering codename for _glossary("Firefox OS"_) and refers to builds that haven't yet received official Firefox OS branding. (Firefox OS was also often called Boot2Gecko before the project had an official name.)

---


## Term:  Bootstrap
  - Bootstrap
  - CSS
  - Glossary
  - Intro
  - framework
---


> Bootstrap is a free, open source _Glossary("HTML"_), CSS, and _Glossary("JavaScript"_) framework for quickly building responsive websites.

Initially, Bootstrap was called Twitter Blueprint and was developed by a team working at [Twitter](https://twitter.com/). It supports responsive design and features predefined design templates that you can use out of the box, or customize for your needs with your code. You don't need to worry about compatibility with other browsers either, as Bootstrap is compatible with all modern browsers and newer versions of _glossary("Microsoft Internet Explorer", "Internet Explorer"_).

#### See also

- _interwiki("wikipedia", "Bootstrap (front-end framework)", "Bootstrap"_) on Wikipedia
- [Download Bootstrap](https://getbootstrap.com/)
- [Get started with the latest version](https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp)

---


## Term:  Bounding Box
  - Bounding Box
  - CodingScripting
  - Design
  - Glossary
---


> The bounding box of an element is the smallest possible rectangle (aligned with the axes of that element's user coordinate system) that entirely encloses it and its descendants.

---


## Term:  Breadcrumb
  - Accessibility
  - Glossary
  - Navigation
  - Search
  - Site map
  - breadcrumb
---


> A **breadcrumb**, or breadcrumb trail, is a navigational aid that is typically placed between a site's header and the main content, displaying either a hierarchy of the current page in relation to the site's structure, from top level to current page, or a list of the links the user followed to get to the current page, in the order visited.

A location breadcrumb for this document might look something like this:

[MDN](/) > [Glossary](/en-US/docs/Glossary) > Breadcrumb

Breadcrumb trails enable users to be aware of their location within a website. This type of navigation, if done correctly, helps users know where they are in a site and how they got there. They can also help a user get back to where they were before and can reduce the number of clicks needed to get to a higher-level page.

---


## Term:  Brotli
  - Brotli
  - Glossary
  - Reference
  - Web Performance
  - compression
---


> **Brotli** is a general-purpose lossless compression algorithm.

It compresses data using a combination of a modern variant of the LZ77 algorithm, Huffman coding, and second-order context modeling, providing a compression ratio comparable to the best currently available general-purpose compression methods. Brotli provides better compression ratios than _glossary("GZip_compression", "gzip"_) and deflate speeds are comparable, but brotli compressing is a slower process than Gzip compression, so gzip may be a better option for the compression of non-_glossary("Cache", "cacheable"_) content.

Brotli is compatible with most modern browsers, but you may want to consider a fallback.

#### See also

- [brotli.org](https://brotli.org/)
- [Brotli Github repository](https://github.com/google/brotli)
- _interwiki("wikipedia", "Brotli"_) on Wikipedia
- [Brotli on Caniuse](https://caniuse.com/#feat=brotli)

---


## Term:  Browser
  - Glossary
  - Navigation
---


> A **Web browser** or **browser** is a program that retrieves and displays pages from the _Glossary("World Wide Web","Web"_), and lets users access further pages through _Glossary("hyperlink","hyperlinks"_). A browser is the most familiar type of _Glossary("user agent"_).

#### See also

- _Interwiki("wikipedia", "Web browser"_) on Wikipedia
- [The evolution of the web](http://www.evolutionoftheweb.com/)
- _Glossary("user agent"_) (Glossary)
- _HTTPHeader("User-agent"_) (HTTP Header)
- Download a browser

  - [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/)
  - [Google Chrome](https://www.google.com/chrome/)
  - [Microsoft Edge](https://www.microsoft.com/en-us/edge)
  - [Opera Browser](https://www.opera.com/)

---


## Term:  Browsing context
  - Glossary
---


> A **browsing context** is the environment in which a browser displays a _domxref("Document"_). In modern browsers, it usually is a _tab_, but can be a _window_ or even only parts of a page, like a _frame_ or an _iframe_.

Each browsing context has a specific origin, the origin of the active document and a history that memorize all the displayed documents, in order.

Communication between browsing context is severely constrained. Between browsing context of the same origin, a _domxref("BroadcastChannel"_) can be opened and used.

#### See also

- See _glossary("origin"_)

---


## Term:  buffer
  - Buffer
  - CodingScripting
  - Glossary
  - NeedsContent
---


> A buffer is a storage in physical memory used to temporarily store data while it is being transferred from one place to another.

#### See also

- [Data buffer](https://en.wikipedia.org/wiki/Data_buffer) on Wikipedia

---


## Term:  Bézier curve
  - Bézier curve
  - Glossary
  - Graphics
  - Reference
---


> A **Bézier curve** (pronounced \[bezje]) is a mathematically described curve used in computer graphics and animation. In _Glossary("vector image", "vector images"_), they are used to model smooth curves that can be scaled indefinitely.

The curve is defined by a set of control points with a minimum of two. Web related graphics and animations use Cubic Béziers, which are curves with four control points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.

To draw the curve, two imaginary lines are drawn, one from P<sub>0</sub> to P<sub>1</sub> and the other from P<sub>1</sub> to P<sub>2</sub>. The end points of the lines are then steadily moved to the next point. A third imaginary line is drawn with its starting point moving steadily on the first helper line and the end point on the second helper line. On this imaginary line a point is drawn from its starting point moving steadily to its end point. The curve this point describes is the Bézier curve. Here's an animated illustration demonstrating the creation of the curve:

![Drawing a Bézier curve](bézier_3_big.gif)

#### See also

- [Bézier curve on Wikipedia](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
- [Cubic Bézier timing functions in CSS](</en-US/docs/Web/CSS/easing-function#the_cubic-bezier()_class_of_timing_functions>)
- _SVGAttr("keySplines"_) SVG attribute

---


## Term:  Cacheable
  - Glossary
  - WebMechanics
---


> A **cacheable** response is an HTTP response that can be cached, that is stored to be retrieved and used later, saving a new request to the server. Not all HTTP responses can be cached, these are the following constraints for an HTTP response to be cached:

- The method used in the request is itself _cacheable_, that is either a _HTTPMethod("GET"_) or a _HTTPMethod("HEAD"_) method. A response to a _HTTPMethod("POST"_) or _HTTPMethod("PATCH"_) request can also be cached if freshness is indicated and the _HTTPHeader("Content-Location"_) header is set, but this is rarely implemented. (For example, Firefox does not support it per <https://bugzilla.mozilla.org/show_bug.cgi?id=109553>.) Other methods, like _HTTPMethod("PUT"_) or _HTTPMethod("DELETE"_) are not cacheable and their result cannot be cached.
- The status code of the response is _known_ by the application caching, and it is considered _cacheable_. The following status code are cacheable: _HTTPStatus("200"_), _HTTPStatus("203"_), _HTTPStatus("204"_), _HTTPStatus("206"_), _HTTPStatus("300"_), _HTTPStatus("301"_), _HTTPStatus("404"_), _HTTPStatus("405"_), _HTTPStatus("410"_), _HTTPStatus("414"_), and _HTTPStatus("501"_).
- There are _specific headers_ in the response, like _HTTPHeader("Cache-Control"_), that prevents caching.

Note that some non-cacheable requests/responses to a specific URI may invalidate previously cached responses on the same URI. For example, a _HTTPMethod("PUT"_) to pageX.html will invalidate all cached _HTTPMethod("GET"_) or _HTTPMethod("HEAD"_) requests to the same URI.

When both, the method of the request and the status of the response, are cacheable, the response to the request can be cached:

```plain
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

A _HTTPMethod("PUT"_) request cannot be cached. Moreover, it invalidates cached data for request to the same URI done via _HTTPMethod("HEAD"_) or _HTTPMethod("GET"_):

```plain
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

A specific _HTTPHeader("Cache-Control"_) header in the response can prevent caching:

```plain
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

#### See also

- Definition of [cacheable](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.3) in the HTTP specification.
- Description of common cacheable methods: _HTTPMethod("GET"_), _HTTPMethod("HEAD"_)
- Description of common non-cacheable methods: _HTTPMethod("PUT"_), _HTTPMethod("DELETE"_), often _HTTPMethod("POST"_)

---


## Term:  Cache
  - Glossary
  - HTTP
---


> A **cache** (web cache or HTTP cache) is a component that stores HTTP responses temporarily so that it can be used for subsequent HTTP requests as long as it meets certain conditions.

#### See also

- _interwiki("wikipedia", "Web cache"_) on Wikipedia

---


## Term:  CalDAV
  - CalDAV
  - Glossary
  - Infrastructure
---


> CalDAV (Calendaring extensions to _Glossary("WebDAV"_)) is a _glossary("protocol"_) standardized by the _Glossary("IETF"_) and used to remotely access calendar data from a _glossary("server"_).

#### See also

- _Interwiki("wikipedia", "CalDAV"_) on Wikipedia
- [RFC 4791: Calendaring extensions to WebDAV (CalDAV)](https://datatracker.ietf.org/doc/html/rfc4791)
- [RFC 6638: Scheduling Extensions to CalDAV](https://datatracker.ietf.org/doc/html/rfc6638)

---


## Term:  Call stack
  - Call Stack
  - CodingScripting
  - Glossary
  - JavaScript
---


> A **call stack** is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple _glossary("function","functions"_) — what function is currently being run and what functions are called from within that function, etc.

- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
- If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

## Example

```js
function greeting() {
   // [1] Some code here
   sayHi();
   // [2] Some code here
}
function sayHi() {
   return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here
```

The code above would be executed like this:

1.  Ignore all functions, until it reaches the `greeting()` function invocation.
2.  Add the `greeting()` function to the call stack list.

    > **Note:** Call stack list:
    > \- greeting

3.  Execute all lines of code inside the `greeting()` function.
4.  Get to the `sayHi()` function invocation.
5.  Add the `sayHi()` function to the call stack list.

    > **Note:** Call stack list:
    > \- sayHi
    > \- greeting

6.  Execute all lines of code inside the `sayHi()` function, until reaches its end.
7.  Return execution to the line that invoked `sayHi()` and continue executing the rest of the `greeting()` function.
8.  Delete the `sayHi()` function from our call stack list.

    > **Note:** Call stack list:
    > \- greeting

9.  When everything inside the `greeting()` function has been executed, return to its invoking line to continue executing the rest of the JS code.
10. Delete the `greeting()` function from the call stack list.

    > **Note:** Call stack list:
    > EMPTY

In summary, then, we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.

#### See also

- _Interwiki("wikipedia", "Call stack"_) on Wikipedia
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("Call stack"_)
  - _Glossary("Function"_)

---


## Term:  Callback function
  - Callback
  - Callback function
  - CodingScripting
  - Glossary
---


> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

```js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

The above example is a _glossary("synchronous"_) callback, as it is executed immediately.

Note, however, that callbacks are often used to continue code execution after an _glossary("asynchronous"_) operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a [`.then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such as [`fetch()`](/en-US/docs/Web/API/fetch).

#### See also

- _interwiki("wikipedia", "Callback_(computer_programming)", "Callback"_) on Wikipedia

---


## Term:  Canonical order
  - Canonical order
  - CodingScripting
  - Glossary
---


> In CSS, canonical order is used to refer to the order in which separate values need to be specified (or _Glossary("parse", "parsed"_)) or are to be _Glossary("serialization", "serialized"_) as part of a CSS property value. It is defined by the formal _Glossary("syntax"_) of the property and normally refers to the order in which longhand values should be specified as part of a single shorthand value.

For example, _cssxref("background"_) shorthand property values are made up of several `background-*` longhand properties. The canonical order of those longhand values is defined as

1.  _cssxref("background-image"_)
2.  _cssxref("background-position"_)
3.  _cssxref("background-size"_)
4.  _cssxref("background-repeat"_)
5.  _cssxref("background-attachment"_)
6.  _cssxref("background-origin"_)
7.  _cssxref("background-clip"_)
8.  _cssxref("background-color"_)

Furthermore, its syntax defines, that if a value for the _cssxref("background-size"_) is given, it **must** be specified **after** the value for the _cssxref("background-position"_), separated by a slash. Other values may appear in any order.

#### See also

- [What does “canonical order” mean with respect to CSS properties?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) on Stack Overflow provides useful further discussion.
- The [description of the formal syntax used for CSS values](/en-US/docs/Web/CSS/Value_definition_syntax) on MDN

---


## Term:  Canvas
  - CodingScripting
  - Glossary
  - Graphics
  - HTML
  - JavaScript
---


> The **canvas element** is part of [HTML5](https://en.wikipedia.org/wiki/HTML5) and allows for dynamic, [scriptable](https://en.wikipedia.org/wiki/Scripting_language "Scripting language") [rendering](<https://en.wikipedia.org/wiki/Rendering_(computer_graphics)> "Rendering (computer graphics)") of 2D and 3D shapes and [bitmap](https://en.wikipedia.org/wiki/Bitmap) images.

It is a low level, procedural model that updates a [bitmap](https://en.wikipedia.org/wiki/Bitmap) and does not have a built-in [scene graph](https://en.wikipedia.org/wiki/Scene_graph "Scene graph"). It provides an empty graphic zone on which specific _Glossary("JavaScript"_) _Glossary("API","APIs"_) can draw (such as Canvas 2D or _Glossary("WebGL"_)).

#### See also

- _Interwiki("wikipedia", "Canvas element", "Canvas"_) on Wikipedia
- [The Canvas tutorial on MDN](/en-US/docs/Web/API/Canvas_API/Tutorial)
- The HTML _HTMLElement("canvas"_) element on MDN
- [The Canvas general documentation on MDN](/en-US/docs/Web/API/Canvas_API)
- _domxref("CanvasRenderingContext2D"_): The canvas 2D drawing API
- [The Canvas 2D API specification](https://www.w3.org/TR/2dcontext/)

---


## Term:  Card sorting
  - Card sorting
  - Design
  - Glossary
---


> Card sorting is a simple technique used in _glossary("Information architecture"_) whereby people involved in the design of a website (or other type of product) are invited to write down the content / services / features they feel the product should contain, and then organize those features into categories or groupings. This can be used for example to work out what should go on each page of a website. The name comes from the fact that often card sorting is carried out by literally writing the items to sort onto cards, and then arranging the cards into piles.

#### See also

- _interwiki("wikipedia", "Card_sorting", "Card sorting"_) on Wikipedia

---


## Term:  CardDAV
  - CardDAV
  - Glossary
  - Infrastructure
---


> **CardDAV** (vCard Extension to _Glossary("WebDAV"_)) is a _glossary("protocol"_) standardized by the _Glossary("IETF"_) and used to remote-access or share contact information over a _glossary("server"_).

#### See also

- _Interwiki("wikipedia", "CardDAV"_) on Wikipedia
- [RFC 6352: vCard Extensions to Web Distributed Authoring and Versioning (WebDAV)](https://datatracker.ietf.org/doc/html/rfc6352)

---


## Term:  caret
  - Cursor
  - Glossary
  - Input
  - caret
  - insertion point
  - text cursor
  - text entry
  - text input
  - text insertion point
---


> A **caret** (sometimes called a "text cursor") is an indicator displayed on the screen to indicate where text input will be inserted.

Most user interfaces represent the caret using a thin vertical line or a character-sized box that flashes, but this can vary. This point in the text is called the **insertion point**. The word "caret" differentiates the text insertion point from the mouse cursor.

On the web, a caret is used to represent the insertion point in _HTMLElement("input"_) and _HTMLElement("textarea"_) elements, as well as any elements whose _htmlattrxref("contenteditable"_) attribute is set, thereby allowing the contents of the element to be edited by the user.

#### See also

- _interwiki("wikipedia", "Caret navigation"_) on Wikipedia

### CSS related to the caret

You can set the color of the caret for a given element's editable content by setting the element's CSS _cssxref("caret-color"_) property to the appropriate _cssxref("&lt;color&gt;"_) value.

### HTML elements that may present a caret

These elements provide text entry fields or boxes and therefore make use of the caret.

- [`<input type="text">`](/en-US/docs/Web/HTML/Element/input/text)
- [`<input type="password">`](/en-US/docs/Web/HTML/Element/input/password)
- [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search)
- [`<input type="date">`](/en-US/docs/Web/HTML/Element/input/date), [`<input type="time">`](/en-US/docs/Web/HTML/Element/input/time), [`<input type="datetime">`](/en-US/docs/Web/HTML/Element/input/datetime), and [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number)[, ](/en-US/docs/Web/HTML/Element/input/number)[`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)
- [`<input type="email">`](/en-US/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/en-US/docs/Web/HTML/Element/input/tel), and [`<input type="url">`](/en-US/docs/Web/HTML/Element/input/url)
- _HTMLElement("textarea"_)
- Any element with its _htmlattrxref("contenteditable"_) attribute set

---


## Term:  CDN
  - Glossary
  - Infrastructure
---


> A **CDN** (Content Delivery Network) is a group of servers spread out over many locations. These servers store duplicate copies of data so that servers can fulfill data requests based on which servers are closest to the respective end-users. CDNs make for fast service less affected by high traffic.

CDNs are used widely for delivering stylesheets and Javascript files (static assets) of libraries like Bootstrap, jQuery etc. Using CDN for those library files is preferable for a number of reasons:

- Serving libraries' static assets over CDN lowers the request burden on an organization's own servers.
- Most CDNs have servers all over the globe, so CDN servers may be geographically nearer to yo