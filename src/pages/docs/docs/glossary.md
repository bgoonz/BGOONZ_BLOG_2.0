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
- Most CDNs have servers all over the globe, so CDN servers may be geographically nearer to your users than your own servers. Geographical distance affects latency proportionally.
- CDNs are already configured with proper cache settings. Using a CDN saves further configuration for static assets on your own servers.

---


## Term:  Certificate authority
  - Cryptography
  - Glossary
  - Security
---


> A certificate authority (CA) is an organization that _Glossary("Signature/Security", "signs"_) _Glossary("Digital certificate", "digital certificates"_) and their associated _Glossary("Key", "public keys"_), thereby asserting that the contained information and keys are correct.

For a website digital certificate, this information minimally includes the name of the organization that requested the digital certificate (e.g., Mozilla Corporation), the site that it is for (e.g., mozilla.org), and the certificate authority.

Certificate authorities are the part of the Internet [public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) that allows browsers to verify website identity and securely connect over SSL (and HTTPS).

> **Note:** Web browsers come preloaded with a list of "root certificates". The browser can use these to reliably check that the website certificate was signed by a certificate authority  that "chains back" to the root certificate (i.e. was trusted by the owner of the root certificate or an intermediate CA). Ultimately this process relies on every CA performing adequate identity checks before signing a certificate!

#### See also

- [Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) on Wikipedia
- [Public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) on Wikipedia
- [Mozilla Included CA Certificate List](https://wiki.mozilla.org/CA/Included_Certificates)

---


## Term:  Certified
  - Apps
  - B2G
  - Firefox OS
  - Glossary
  - Security
  - Trustworthy
---


> **Certified** means that an application, content or data transmission has successfully undergone evaluation by professionals with expertise in the relevant field, thereby indicating completeness, security and trustworthiness.

For details on certification in _glossary("Cryptography"_), please refer to _glossary("Digital Certificate"_).

#### See also

- _Interwiki("wikipedia", "Professional_certification_(computer_technology)#Information_systems_security", "Certification"_) on Wikipedia

---


## Term:  Challenge-response authentication
  - Security
---


> In security protocols, a _challenge_ is some data sent to the client by the server in order to generate a different response each time. Challenge-response protocols are one way to fight against [replay attacks](https://en.wikipedia.org/wiki/Replay_attack) where an attacker listens to the previous messages and resends them at a later time to get the same credentials as the original message.

The [HTTP authentication protocol](/en-US/docs/Web/HTTP/Authentication) is challenge-response based, though the "Basic" protocol isn't using a real challenge (the realm is always the same).

#### See also

- [Challenge-response authentication](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) on Wikipedia.

---


## Term:  Character encoding
  - Composing
  - Glossary
---


> An encoding defines a mapping between bytes and text. A sequence of bytes allows for different textual interpretations. By specifying a particular encoding (such as UTF-8), we specify how the sequence of bytes is to be interpreted.

For example, in HTML we normally declare a character encoding of UTF-8, using the following line:

```html
<meta charset="utf-8">
```

This ensures that you can use characters from just about any human language in your HTML document, and they will display reliably.

#### See also

- [Character encoding on W3C](https://www.w3.org/International/articles/definitions-characters/)
- _Interwiki("wikipedia", "Character encoding"_) on Wikipedia

---


## Term:  Character set
  - Glossary
  - character encoding
  - character set
---


> A **character set** is an encoding system to let computers know how to recognize _Glossary("Character"_), including letters, numbers, punctuation marks, and whitespace.

In earlier times, countries developed their own character sets due to their different languages used, such as Kanji JIS codes (e.g. Shift-JIS, EUC-JP, etc.) for Japanese, Big5 for traditional Chinese, and KOI8-R for Russian. However, _Glossary("Unicode"_) gradually became most acceptable character set for its universal language support.

If a character set is used incorrectly (For example, Unicode for an article encoded in Big5), you may see nothing but broken characters, which are called _Interwiki("wikipedia", "Mojibake"_).

#### See also

- _Interwiki("wikipedia", "Character encoding"_) (Wikipedia)
- _Interwiki("wikipedia", "Mojibake"_) (Wikipedia)
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("Character"_)
  - _Glossary("Unicode"_)

---


## Term:  Character
  - CodingScripting
  - Glossary
  - strings
---


> A _character_ is either a symbol (letters, numbers, punctuation) or non-printing "control" (e.g., carriage return or soft hyphen).  _glossary("UTF-8"_) is the most common character set and includes the graphemes of the most popular human languages.

#### See also

- _interwiki("wikipedia", "Character (computing)"_) on Wikipedia
- _interwiki("wikipedia", "Character encoding"_) on Wikipedia
- _interwiki("wikipedia", "ASCII"_) on Wikipedia
- _interwiki("wikipedia", "UTF-8"_) on Wikipedia
- _interwiki("wikipedia", "Unicode"_) on Wikipedia

---


## Term:  Chrome
  - Browser
  - Chrome
  - Glossary
  - WebMechanics
---


> In a browser, the chrome is any visible aspect of a browser aside from the webpages themselves (e.g., toolbars, menu bar, tabs). This is not to be confused with the _glossary("Google Chrome"_) browser.

#### See also

- [Browser and GUI Chrome](https://www.nngroup.com/articles/browser-and-gui-chrome/)

---


## Term:  CIA
  - Glossary
  - Security
---


> CIA (Confidentiality, Integrity, Availability) (also called the CIA triad or AIC triad) is a model that guides an organization's policies for information security.

#### See also

- _Interwiki("wikipedia", "Information_security#Key_concepts", "CIA"_) on Wikipedia

---


## Term:  Cipher suite
  - Cryptography
  - Glossary
  - Security
---


> A cipher suite is a combination of a key exchange algorithm, authentication method, bulk encryption _Glossary("cipher"_), and message authentication code.

In a _Glossary("cryptosystem"_) like _Glossary("TLS"_), the client and server must agree on a cipher suite before they can begin communicating securely.  A typical cipher suite looks like ECDHE_RSA_WITH_AES_128_GCM_SHA256 or ECDHE-RSA-AES128-GCM-SHA256, indicating:

- ECDHE (elliptic curve Diffie-Hellman ephemeral) for key exchange
- RSA for authentication
- AES-128 as the cipher, with Galois/Counter Mode (GCM) as the block cipher mode of operation
- SHA-256 as the hash-based message authentication code (HMAC)

#### See also

- [Mozilla recommended cipher suite choices for TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)

---


## Term:  Cipher
  - Cryptography
  - Glossary
  - Privacy
  - Security
---


> In _glossary("cryptography"_), a **cipher** is an algorithm that can _glossary("encryption", "encode"_) _glossary("Plaintext"_) to make it unreadable, and to _glossary("decryption", "decode"_) it back.

Ciphers were common long before the information age (e.g., [substitution ciphers](https://en.wikipedia.org/wiki/Substitution_cipher), [transposition ciphers](https://en.wikipedia.org/wiki/Transposition_cipher), and [permutation ciphers](https://en.wikipedia.org/wiki/Permutation_cipher)), but none of them were cryptographically secure except for the [one-time pad](https://en.wikipedia.org/wiki/One-time_pad).

Modern ciphers are designed to withstand _glossary("attack", "attacks"_) discovered by a _glossary("cryptanalysis", "cryptanalyst"_). There is no guarantee that all attack methods have been discovered, but each algorithm is judged against known classes of attacks.

Ciphers operate two ways, either as [block ciphers](https://en.wikipedia.org/wiki/Block_cipher) on successive blocks, or buffers, of data, or as [stream ciphers](https://en.wikipedia.org/wiki/Stream_cipher) on a continuous data flow (often of sound or video).

They also are classified according to how their _glossary("key", "keys"_) are handled:

- [symmetric key](https://en.wikipedia.org/wiki/Symmetric_key_algorithm) algorithms use the same key to encode and decode a message. The key also must be sent securely if the message is to stay confidential.
- [asymmetric key](https://en.wikipedia.org/wiki/Asymmetric_key_algorithm) algorithms use a different key for encryption and decryption.

#### See also

- _Interwiki("wikipedia", "Cipher"_) on Wikipedia
- [Encryption and Decryption](/en-US/docs/Archive/Security/Encryption_and_Decryption)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("Block cipher mode of operation"_)
  - _Glossary("Cipher"_)
  - _Glossary("Ciphertext"_)
  - _Glossary("Cipher suite"_)
  - _Glossary("Cryptanalysis"_)
  - _Glossary("Cryptography"_)
  - _Glossary("Decryption"_)
  - _Glossary("Encryption"_)
  - _Glossary("Key"_)
  - _Glossary("Plaintext"_)
  - _Glossary("Public-key cryptography"_)
  - _Glossary("Symmetric-key cryptography"_)

---


## Term:  Ciphertext
  - Cryptography
  - Glossary
  - Privacy
  - Security
---


> In _glossary("cryptography"_), a ciphertext is a scrambled message that conveys information but is not legible unless _glossary("decryption","decrypted"_) with the right _glossary("cipher"_) and the right secret (usually a _glossary("key"_)), reproducing the original _glossary("Plaintext"_). A ciphertext's security, and therefore the secrecy of the contained information, depends on using a secure cipher and keeping the key secret.

#### See also

- _Interwiki("wikipedia", "Ciphertext"_) on Wikipedia

---


## Term:  Class
  - CodingScripting
  - Glossary
---


> In _glossary("OOP","object-oriented programming"_), a _class_ defines an _glossary("object","object's"_) characteristics. Class is a template definition of an object's _glossary("property","properties"_) and _glossary("method","methods"_), the "blueprint" from which other more specific instances of the object are drawn.

#### See also

- [Class-based vs. prototype-based programming languages](/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#class-based_vs._prototype-based_languages) (like JavaScript)
- [Using functions as classes in JavaScript](/en-US/docs/Learn/JavaScript/Objects#the_class)
- [Class-based programming](https://en.wikipedia.org/wiki/Class-based_programming) on Wikipedia
- [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) on Wikipedia

---


## Term:  Clickjacking
  - Clickjacking
  - Interface-based attack
  - Glossary
  - Security
  - vulnerability
  - exploit
---


> Clickjacking is an interface-based attack that tricks website users into unwittingly clicking on malicious links. In clickjacking, the attackers embed their malicious links into buttons or legitimate pages in a website. In an infected _glossary("Site"_), whenever a user clicks on a legitimate link, the attacker gets the confidential information of that user, which ultimately compromises the user's privacy on the Internet.

Clickjacking can be prevented by implementing a [Content Security Policy (frame-ancestors)](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) and implementing [Set-Cookie attributes](/en-US/docs/Web/HTTP/Headers/Set-Cookie#attributes).

## Learn more

- [Web security: clickjacking protection](/en-US/docs/Web/Security#clickjacking_protection)
- [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking) on Wikipedia
- [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) on OWASP

---


## Term:  Closure
  - CodingScripting
  - Glossary
---


> The binding which defines the **_glossary("scope"_)** of execution. In _glossary("JavaScript"_), **_glossary("function","functions"_)** create a closure context.

#### See also

- _Interwiki("wikipedia", "Closure_%28computer_programming%29", "Closure"_) on Wikipedia
- [Closure](/en-US/docs/Web/JavaScript/Closures) on MDN

---


## Term:  CMS
  - CMS
  - Composing
  - Content management system
  - Glossary
---


> A CMS (Content Management System) is software that allows users to publish, organize, change, or remove various kinds of content, not only text but also embedded images, video, audio, and interactive code.

#### See also

- _Interwiki("wikipedia", "Content management system"_) on Wikipedia

---


## Term:  Code point
  - Glossary
---


> 
A *code point* is a number assigned to represent an abstract character in a system for representing text (such as Unicode). In Unicode, a code point is expressed in the form "U+1234" where "1234" is the assigned number. For example, the character "A" is assigned a code point of U+0041.

Character encoding forms, such as UTF-8 and UTF-16, determine how a Unicode code point should be encoded as a sequence of bytes. Different encoding forms may encode the same code point as different byte sequences: for example, the Cyrillic character "Ф", whose code point is U+0424, is encoded as `0xd0a4` in UTF-8 and as `0x0424` in UTF-16.

#### See also

- [The Unicode Standard: Code Points and Characters](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)

---


## Term:  Code splitting
  - Glossary
  - Reference
  - Web Performance
  - code splitting
  - latency
---


> **Code splitting** is the splitting of code into various bundles or components which can then be loaded on demand or in parallel.

As an application grows in complexity or is maintained, CSS and JavaScripts files or  bundles grow in byte size, especially as the number and size of included third-party libraries increases. To prevent the requirement of downloading ginormous files, scripts can be split into multiple smaller files. Then features required at page load can be downloaded immediately with additional scripts being [lazy loaded](/en-US/docs/Glossary/Lazy_load) after the page or application is interactive, thus improving performance. While the total amount of code is the same (and perhaps even a few bytes larger), the amount of code needed during initial load can be reduced.

Code splitting is a feature supported by bundlers like [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/) which can create multiple bundles that can be dynamically loaded at runtime.

#### See also

- Bundling
- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/en-US/docs/Glossary/HTTP_2)
- [Tree shaking](/en-US/docs/Glossary/Tree_shaking)

---


## Term:  Code unit
  - Glossary
---


> A *code unit* is the basic component used by a character encoding system (such as UTF-8 or UTF-16). A character encoding system uses one or more code units to encode a Unicode _Glossary("code point"_).

In UTF-16 (the encoding system used for JavaScript strings) code units are 16-bit values. This means that operations such as indexing into a string or getting the length of a string operate on these 16-bit units. These units do not always map 1-1 onto what we might consider characters.

For example, sometimes characters with diacritics such as accents are represented using two Unicode code points:

```js
const myString = 'ñ';
myString.length;
// 2
```

Also, since not all of the code points defined by Unicode fit into 16 bits, many Unicode code points are encoded as a pair of UTF-16 code units, which is called a *surrogate pair*:

```js
const face = '🥵';
face.length;
// 2
```

The _jsxref("String/codePointAt", "codePointAt()"_) method of the JavaScript _jsxref("String"_) object enables you to retrieve the Unicode code point from its encoded form:

```js
const face = '🥵';
face.codePointAt(0)
// 129397
```

#### See also

- [Unicode encoding FAQ](https://www.unicode.org/faq/utf_bom.html)

---


## Term:  Codec
  - Glossary
  - WebMechanics
---


> A *codec* (a blend word derived from "**_co_**der-**_dec_**oder") is a program, algorithm, or device that encodes or decodes a data stream. A given codec knows how to handle a specific encoding or compression technology.

#### See also

- _Interwiki("wikipedia", "Codec"_) on Wikipedia
- [Web video codec guide](/en-US/docs/Web/Media/Formats/Video_codecs)
- [Web audio codec guide](/en-US/docs/Web/Media/Formats/Audio_codecs)
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)

---


## Term:  Compile time
  - CodingScripting
  - Glossary
  - JavaScript
---


> The _compile time_ is the time from when the program is first loaded until the program is _Glossary("parse","parsed"_).

#### See also

- _Interwiki("wikipedia", "Compile time"_) on Wikipedia

---


## Term:  Compile
  - CodingScripting
  - Glossary
---


> **Compiling** is the process of transforming a computer program written in a given _Glossary("computer programming", "language"_) into a set of instructions in another format or language. A **compiler** is a computer program to execute that task.

Typically, a compiler transforms code written in a higher-level language such as [C++](https://en.wikipedia.org/wiki/C++) or [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) or [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) into executable (runnable) code — so-called **binary code** or **machine code**. [WebAssembly](/en-US/docs/WebAssembly), for example, is a form of executable binary code that [can be compiled from code written in C++, Rust, C#, Go, Swift, and several other languages](https://webassembly.org/getting-started/developers-guide/) and that can then be run on any web page, in any browser.

Most compilers perform either ahead-of-time (AOT) compilation or just-in-time (JIT) compilation.

The GNU `gcc` compiler is one well-known example of an AOT compiler. AOT compilers are typically invoked from the command line in a shell environment (from within a terminal or console) or within an _Glossary("IDE"_).

JIT compilers are typically not invoked directly but are instead built into software runtimes internally, for the purpose of improving performance. For example, all major browsers now use JavaScript engines that have built-in JIT compilers.

Compilers may also translate among higher-level languages — for example, from TypeScript to _Glossary("JavaScript"_) — in which case, they are often sometimes referred to as **transpilers**.

#### See also

- [Compiling from C/C++ to WebAssembly](/en-US/docs/WebAssembly/C_to_wasm)
- [Compiling from Rust to WebAssembly](/en-US/docs/WebAssembly/Rust_to_wasm)
- Wikipedia: _Interwiki("wikipedia", "Compiler"_)

---


## Term:  Computer Programming
  - CodingScripting
  - Computer Programming
  - Programming Language
  - programming
---


> Computer programming is a process of composing and organizing a collection of instructions. These tell a computer/software program what to do in a language which the computer understands. These instructions come in the form of many different languages such as C++, Java, JavaScript, HTML, Python, Ruby, and Rust.

Using an appropriate language, you can program/create all sorts of software. For example, a program that helps scientists with complex calculations, a database that stores huge amounts of data, a web site that allows people to download music, or animation software that allows people to create animated movies.

#### See also

- _Interwiki("wikipedia", "Computer programming"_) on Wikipedia
- [List of Programming Languages: Wikipedia](https://en.wikipedia.org/wiki/List_of_programming_languages)

---


## Term:  Conditional
  - Beginner
  - CodingScripting
  - Glossary
---


> A **condition** is a set of rules that can interrupt normal code execution or change it, depending on whether the condition is completed or not.

An instruction or a set of instructions is executed if a specific condition is fulfilled. Otherwise, another instruction is executed. It is also possible to repeat the execution of an instruction, or set of instructions, while a condition is not yet fulfilled.

#### See also

- _interwiki("wikipedia", "Exception_handling#Condition_systems", "Condition"_) on Wikipedia
- [Control flow](/en-US/docs/Glossary/Control_flow) on MDN
- [Making decisions in your code — conditionals](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Control flow and error handling in JavaScript](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) on MDN

---


## Term:  Constant
  - CodingScripting
  - Constant
  - Glossary
---


> A constant is a value that the programmer cannot change, for example numbers (1, 2, 42). With _glossary("variable","variables"_), on the other hand, the programmer can assign a new _glossary("value"_) to a variable name already in use.

Like variables, some constants are bound to identifiers. For example, the identifier `pi` could be bound to the value 3.14... .

#### See also

- _Interwiki("wikipedia", "Constant_(computer_programming)", "Constant"_) on Wikipedia

---


## Term:  Constructor
  - CodingScripting
  - Glossary
---


> A **constructor** belongs to a particular class _glossary("object"_) that is instantiated. The constructor initializes this object and can provide access to its private information. The concept of a constructor can be applied to most _glossary("OOP","object-oriented programming"_) languages. Essentially, a constructor in _glossary("JavaScript"_) is usually declared at the instance of a _glossary("class"_).

## Syntax

```js
// This is a generic default constructor class Default
function Default() {
}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, ..., argN){
}
```

To call the constructor of the class in JavaScript, use a `new` operator to assign a new _glossary("object reference"_) to a _glossary("variable"_).

```js
function Default() {
}

// A new reference of a Default object assigned to a
// local variable defaultReference
var defaultReference = new Default();
```

#### See also

- _Interwiki("wikipedia", "Constructor_%28object-oriented_programming%29", "Constructor"_) on Wikipedia
- [The constructor in object oriented programming for JavaScript](/en-US/docs/Learn/JavaScript/Objects#the_constructor) on MDN
- [New operator in JavaScript](/en-US/docs/Web/JavaScript/Reference/Operators/new) on MDN

---


## Term:  Continuous Media
  - Glossary
  - Media
---


> Continuous media is data where there is a timing relationship between source and destination. The most common examples of continuous media are audio and motion video. Continuous media can be real-time (interactive), where there is a "tight" timing relationship between source and sink, or streaming (playback), where the relationship is less strict.

CSS can be used in a variety of contexts, including print media. And some CSS, particularly those that are used for layout, behave differently depending on the context they are in.

Continuous Media, therefore, identifies a context where the content is not broken up. It flows continuously. Web content displayed on a screen is continuous media, as is spoken content.

---


## Term:  Control flow
  - CodingScripting
  - Glossary
  - JavaScript
---


> The _control flow_ is the order in which the computer executes statements in a script.

Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops.

For example, imagine a script used to validate user data from a webpage form. The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in. To do this, the script uses a _Glossary("Conditional", "conditional"_) structure or `if...else`, so that different code executes depending on whether the form is complete or not:

    if (field==empty) {
        promptUser();
    } else {
        submitForm();
    }

A typical script in _glossary("JavaScript"_) or _glossary("PHP"_) (and the like) includes many control structures, including conditionals, _Glossary("Loop", "loops"_) and _Glossary("Function", "functions"_). Parts of a script may also be set to execute when _Glossary("Event", "events"_) occur.

For example, the above excerpt might be inside a function that runs when the user clicks the **Submit** button for the form. The function could also include a loop, which iterates through all of the fields in the form, checking each one in turn. Looking back at the code in the `if` and `else` sections, the lines `promptUser` and `submitForm` could also be calls to other functions in the script. As you can see, control structures can dictate complex flows of processing even with only a few lines of code.

Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.

#### See also

- _Interwiki("wikipedia", "Control flow"_) on Wikipedia
- [JavaScript Reference - Control flow](/en-US/docs/Web/JavaScript/Reference#control_flow) on MDN
- [Statements (Control flow)](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) on MDN

---


## Term:  Cookie
  - Glossary
  - WebMechanics
---


> A cookie is a small piece of information left on a visitor's computer by a website, via a web browser.

Cookies are used to personalize a user’s web experience with a website. It may contain the user’s preferences or inputs when accessing that website. A user can customize their web browser to accept, reject, or delete cookies.

Cookies can be set and modified at the server level using the `Set-Cookie` [HTTP header](/en-US/docs/Web/HTTP/Cookies), or with JavaScript using [`document.cookie`](/en-US/docs/Web/API/Document/cookie).

#### See also

- [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) on Wikipedia

---


## Term:  Copyleft
  - Glossary
  - OpenPractices
  - Remixing
  - Sharing
---


> Copyleft is a term, usually referring to a license, used to indicate that such license requires that redistribution of said work is subject to the same license as the original. Examples of copyleft licenses are the GNU _Glossary("GPL"_) (for software) and the Creative Commons SA (Share Alike) licenses (for works of art).

#### See also

- _Interwiki("wikipedia", "Copyleft"_) on Wikipedia

---


## Term:  CORS-safelisted request header
  - CORS
  - Fetch
---


> A [CORS-safelisted request header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) is one of the following [HTTP headers](/en-US/docs/Web/HTTP/Headers):

- _HTTPHeader("Accept"_),
- _HTTPHeader("Accept-Language"_),
- _HTTPHeader("Content-Language"_),
- _HTTPHeader("Content-Type"_).

When containing only these headers (and values that meet the additional requirements laid out below), a requests doesn't need to send a _glossary("preflight request"_) in the context of [CORS](/en-US/docs/Glossary/CORS).

You can safelist more headers using the _HTTPHeader("Access-Control-Allow-Headers"_) header and also list the above headers there to circumvent the following additional restrictions:

#### Additional restrictions

CORS-safelisted headers must also fulfill the following requirements in order to be a CORS-safelisted request header:

- For _HTTPHeader("Accept-Language"_) and _HTTPHeader("Content-Language"_): can only have values consisting of `0-9`, `A-Z`, `a-z`, space or `*,-.;=`.
- For _HTTPHeader("Accept"_) and _HTTPHeader("Content-Type"_): can't contain a _CORS-unsafe request header byte_: `0x00-0x1F` (except for `0x09 (HT)`, which is allowed), `"():<>?@[\]{}`, and `0x7F (DEL)`.
- For _HTTPHeader("Content-Type"_): needs to have a MIME type of its parsed value (ignoring parameters) of either `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`.
- For any header: the value’s length can't be greater than 128.

#### See also

- _Glossary("CORS-safelisted response header"_)
- _Glossary("Forbidden header name"_)
- _Glossary("Request header"_)

---


## Term:  CORS-safelisted response header
  - CORS
  - Fetch
  - Glossary
  - HTTP
---


> A _CORS-safelisted response header_ is an [HTTP header](/en-US/docs/Web/HTTP/Headers) in a [CORS](/en-US/docs/Web/HTTP/CORS) response that it is considered _safe_ to expose to client scripts. Only safelisted response headers are made available to web pages.

By default, the safelist includes the following response headers:

- _HTTPHeader("Cache-Control"_)
- _HTTPHeader("Content-Language"_)
- _HTTPHeader("Content-Length"_)
- _HTTPHeader("Content-Type"_)
- _HTTPHeader("Expires"_)
- _HTTPHeader("Last-Modified"_)
- _HTTPHeader("Pragma"_)

Additional headers can be added to the safelist using _HTTPHeader("Access-Control-Expose-Headers"_).

> **Note:** _HTTPHeader("Content-Length"_) was not part of the original set of safelisted response headers \[[ref](https://github.com/whatwg/fetch/pull/626)]

## Examples

### Extending the safelist

You can extend the list of CORS-safelisted response headers by using the _HTTPHeader("Access-Control-Expose-Headers"_) header:

```plain
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

#### See also

- [HTTP](/en-US/docs/Web/HTTP)
- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- _HTTPHeader("Access-Control-Expose-Headers"_)
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("CORS"_)
  - _Glossary("CORS-safelisted_request_header", "CORS-safelisted request header"_)
  - _Glossary("Forbidden header name"_)
  - _Glossary("Request header"_)

---


## Term:  CORS
  - Glossary
  - Infrastructure
  - Security
---


> **CORS** (Cross-Origin Resource Sharing) is a system, consisting of transmitting _Glossary("HTTP_header", "HTTP headers"_), that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

The [same-origin security policy](/en-US/docs/Web/Security/Same-origin_policy) forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.

#### See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS) on MDN
- _Interwiki("wikipedia", "Cross-origin resource sharing"_) on Wikipedia
- [Fetch specification](https://fetch.spec.whatwg.org)

### CORS headers

- _HTTPHeader("Access-Control-Allow-Origin"_)
  - : Indicates whether the response can be shared.
- _HTTPHeader("Access-Control-Allow-Credentials"_)
  - : Indicates whether or not the response to the request can be exposed when the credentials flag is true.
- _HTTPHeader("Access-Control-Allow-Headers"_)
  - : Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.
- _HTTPHeader("Access-Control-Allow-Methods"_)
  - : Specifies the method or methods allowed when accessing the resource in response to a preflight request.
- _HTTPHeader("Access-Control-Expose-Headers"_)
  - : Indicates which headers can be exposed as part of the response by listing their names.
- _HTTPHeader("Access-Control-Max-Age"_)
  - : Indicates how long the results of a preflight request can be cached.
- _HTTPHeader("Access-Control-Request-Headers"_)
  - : Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
- _HTTPHeader("Access-Control-Request-Method"_)
  - : Used when issuing a preflight request to let the server know which [HTTP method](/en-US/docs/Web/HTTP/Methods) will be used when the actual request is made.
- _HTTPHeader("Origin"_)
  - : Indicates where a fetch originates from.

---


## Term:  Crawler
  - Browser
  - Crawler
  - Glossary
  - Infrastructure
---


> A web crawler is a program, often called a bot or robot, which systematically browses the _glossary("World Wide Web","Web"_) to collect data from webpages. Typically search engines (e.g. Google, Bing, etc.) use crawlers to build indexes.

#### See also

- _Interwiki("wikipedia", "Web crawler"_) on Wikipedia
- _Glossary("Search engine"_) (Glossary)

---


## Term:  CRLF
  - CR
  - CRLF
  - Glossary
  - Infrastructure
  - LF
  - carriage return
  - line feed
---


> CR and LF are [control characters](https://en.wikipedia.org/wiki/Control_character) or [bytecode](https://en.wikipedia.org/wiki/Bytecode) that can be used to mark a line break in a text file.

- CR = **Carriage Return** (`\r`, `0x0D` in hexadecimal, 13 in decimal) — moves the cursor to the beginning of the line without advancing to the next line.
- LF = **Line Feed** (`\n`, `0x0A` in hexadecimal, 10 in decimal) — moves the cursor down to the next line without returning to the beginning of the line.

A CR immediately followed by a LF (CRLF, `\r\n`, or `0x0D0A`) moves the cursor down to the next line and then to the beginning of the line.

#### See also

- _interwiki("wikipedia", "Newline#In_programming_languages", "Newline"_) on Wikipedia
- _interwiki("wikipedia", "Carriage_return#Computers", "Carriage return"_) on Wikipedia

---


## Term:  Cross-site scripting
  - Cross Site Scripting
  - DOM
  - Glossary
  - Security
  - XSS
  - exploit
---


> Cross-site scripting (XSS) is a security exploit which allows an attacker to inject into a website malicious client-side code. This code is executed by the victims and lets the attackers bypass access controls and impersonate users. According to the Open Web Application Security Project, XSS was the [seventh most common Web app vulnerability](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>) in 2017.

These attacks succeed if the Web app does not employ enough validation or encoding. The user's browser cannot detect the malicious script is untrustworthy, and so gives it access to any cookies, session tokens, or other sensitive site-specific information, or lets the malicious script rewrite the _glossary("HTML"_) content.

#### See also

- [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)
- _Interwiki("wikipedia", "Cross-site scripting"_) on Wikipedia
- [Cross-site scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
- [Another article about Cross-site scripting](https://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/)
- [XSS Attack – Exploit & Protection](https://secure.wphackedhelp.com/blog/wordpress-xss-attack/)

---


## Term:  Cross Axis
  - CSS
  - Glossary
  - cross axis
  - flexbox
---


> The cross axis in _glossary("flexbox"_) runs perpendicular to the _glossary("main axis"_), therefore if your _cssxref("flex-direction"_) is either `row` or `row-reverse` then the cross axis runs down the columns.

![The cross axis runs down the column](basics3.png)

If your main axis is `column` or `column-reverse` then the cross axis runs along the rows.

![The cross axis runs along the row.](basics4.png)

Alignment of items on the cross axis is achieved with the `align-items` property on the flex container or `align-self` property on individual items. In the case of a multi-line flex container, with additional space on the cross axis, you can use `align-content` to control the spacing of the rows.

#### See also

### Property reference

- _cssxref("align-content"_)
- _cssxref("align-items"_)
- _cssxref("align-self"_)
- _cssxref("flex-wrap"_)
- _cssxref("flex-direction"_)
- _cssxref("flex"_)
- _cssxref("flex-basis"_)
- _cssxref("flex-flow"_)
- _cssxref("flex-grow"_)
- _cssxref("flex-shrink"_)
- _cssxref("justify-content"_)
- _cssxref("order"_)

### Further reading

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("Flex"_)
  - _Glossary("Flex Container"_)
  - _Glossary("Flex Item"_)
  - _Glossary("Grid"_)

---


## Term:  CRUD
  - Glossary
  - Infrastructure
---


> **CRUD** (Create, Read, Update, Delete) is an acronym for ways one can operate on stored data. It is a mnemonic for the four basic functions of persistent storage. CRUD typically refers to operations performed in a database or datastore, but it can also apply to higher level functions of an application such as soft deletes where data is not actually deleted but marked as deleted via a status.

#### See also

- _Interwiki("wikipedia", "CRUD"_) on Wikipedia

---


## Term:  Cryptanalysis
  - Cryptography
  - Glossary
  - Privacy
  - Security
---


> **Cryptanalysis** is the branch of _glossary("cryptography"_) that studies how to break codes and cryptosystems. Cryptanalysis creates techniques to break _glossary("cipher","ciphers"_), in particular by methods more efficient than a [brute-force search](https://en.wikipedia.org/wiki/Brute-force_search). In addition to traditional methods like [frequency analysis](https://en.wikipedia.org/wiki/Frequency_analysis) and [index of coincidence](https://en.wikipedia.org/wiki/Index_of_coincidence), cryptanalysis includes more recent methods, like [linear cryptanalysis](https://en.wikipedia.org/wiki/Linear_cryptanalysis) or [differential cryptanalysis](https://en.wikipedia.org/wiki/Differential_cryptanalysis), that can break more advanced ciphers.

#### See also

- _Interwiki("wikipedia", "Cryptanalysis"_) on Wikipedia

---


## Term:  Cryptographic hash function
  - Cryptography
  - Glossary
  - Security
---


> A cryptographic hash function, also sometimes called a _digest function_, is a _glossary("cryptography", "cryptographic"_) primitive transforming a message of arbitrary size into a message of fixed size, called a _glossary("digest"_). Cryptographic hash functions are used for authentication, _Glossary("digital signature", "digital signatures"_), and _Glossary("HMAC", "message authentication codes"_).

To be used for cryptography, a hash function must have these qualities:

- quick to compute (because they are generated frequently)
- not invertible (each digest could come from a very large number of messages, and only brute-force can generate a message that leads to a given digest)
- tamper-resistant (any change to a message leads to a different digest)
- collision-resistant (it should be impossible to find two different messages that produce the same digest)

Cryptographic hash functions such as MD5 and SHA-1 are considered broken, as attacks have been found that significantly reduce their collision resistance.

#### See also

- _interwiki("wikipedia", "Cryptographic hash function", "Cryptographic hash function"_) on Wikipedia
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("Symmetric-key cryptography"_)

---


## Term:  Cryptography
  - Cryptography
  - Glossary
  - Privacy
  - Security
---


> **Cryptography**, or cryptology, is the science that studies how to encode and transmit messages securely. Cryptography designs and studies algorithms used to encode and decode messages in an insecure environment, and their applications.

More than just **data confidentiality**, cryptography also tackles **identification**, **authentication**, **non-repudiation**, and **data integrity**. Therefore it also studies usage of cryptographic methods in context, **cryptosystems**.

#### See also

- _Interwiki("wikipedia", "Cryptography"_) on Wikipedia
- [Information security tutorial](/en-US/docs/Web/Security/Information_Security_Basics)
- [Encrypting and Decrypting](/en-US/docs/Archive/Security/Encryption_and_Decryption)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("Block cipher mode of operation"_)
  - _Glossary("Cipher"_)
  - _Glossary("Ciphertext"_)
  - _Glossary("Cipher suite"_)
  - _Glossary("Cryptanalysis"_)
  - _Glossary("Cryptography"_)
  - _Glossary("Decryption"_)
  - _Glossary("Encryption"_)
  - _Glossary("Key"_)
  - _Glossary("Plaintext"_)
  - _Glossary("Public-key cryptography"_)
  - _Glossary("Symmetric-key cryptography"_)

---


## Term:  CSP
  - Glossary
  - HTTP
  - Infrastructure
---


> A CSP ([Content Security Policy](/en-US/docs/Web/HTTP/CSP)) is used to detect and mitigate certain types of website related attacks like _Glossary("Cross-site_scripting"_), [clickjacking](/en-US/docs/Glossary/Clickjacking) and data injections.

The implementation is based on an _Glossary("HTTP"_) header called _HTTPHeader("Content-Security-Policy"_).

#### See also

- [Content Security Policy on Wikipedia](https://en.wikipedia.org/wiki/Content_Security_Policy)
- [Content Security Policy documentation on MDN](/en-US/docs/Web/HTTP/CSP)

---


## Term:  CSRF
  - Glossary
  - Security
---


> **CSRF** (Cross-Site Request Forgery) is an attack that impersonates a trusted user and sends a website unwanted commands.

This can be done, for example, by including malicious parameters in a _glossary("URL"_) behind a link that purports to go somewhere else:

```html
<img src="https://www.example.com/index.php?action=delete&id=123">
```

For users who have modification permissions on `https://www.example.com`, the `<img>` element executes action on `https://www.example.com` without their noticing, even if the element is not at `https://www.example.com`.

There are many ways to prevent CSRF, such as implementing _glossary("REST", "RESTful API"_), adding secure tokens, etc.

#### See also

- _Interwiki("wikipedia", "Cross-site request forgery"_) on Wikipedia
- [Prevention measures](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

---


## Term:  CSS pixel
  - CSS
  - CSS Pixel
  - Glossary
  - height
  - length
  - pixel
  - size
  - unit
  - width
---


> The term **CSS pixel** is synonymous with the CSS unit of absolute length _px_ — which is [normatively defined](https://drafts.csswg.org/css-values/#absolute-lengths) as being exactly 1/96th of 1 inch.

#### See also

- [CSS Length Explained](https://hacks.mozilla.org/2013/09/css-length-explained/) on the MDN Hacks Blog

---


## Term:  CSS preprocessor
  - CSS
  - Glossary
---


> A **CSS preprocessor** is a program that lets you generate _Glossary("CSS"_) from the preprocessor's own unique _Glossary("syntax"_).

There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

To use a CSS preprocessor, you must install a CSS compiler on your web _Glossary("server"_); Or use the CSS preprocessor to compile on the development environment, and then upload compiled CSS file to the web server.

#### See also

- A few of most popular CSS preprocessors:

  - [Sass](https://sass-lang.com/)
  - [LESS](https://lesscss.org/)
  - [Stylus](https://stylus-lang.com/)
  - [PostCSS](https://postcss.org/)

- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("CSS"_)

---


## Term:  Selector (CSS)
  - CSS
  - CSS Selector
  - CodingScripting
  - Glossary
  - HTML
  - Selector
---


> A **CSS selector** is the part of a CSS rule that describes what elements in a document the rule will match. The matching elements will have the rule's specified style applied to them.

## Example

Consider this CSS:

```css
p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding: 0.8em 0.8em 0.6em;
}

#customized {
  font: 16px Lucida Grande, Arial, Helvetica, sans-serif;
}
```

The selectors here are `"p"` (which applies the color green to the text inside any _HTMLElement("p"_) element), `"div.warning"` (which makes any _HTMLElement("div"_) element with the _Glossary("CSS class", "class"_) `"warning"` look like a warning box), and `"#customized"`, which sets the base font of the element with the ID `"customized"` to 16-pixel tall Lucida Grande or one of a few fallback fonts.

We can then apply this CSS to some HTML, such as:

```html
<p>This is happy text.</p>

<div class="warning">
  Be careful! There are wizards present, and they are quick to anger!
</div>

<div id="customized">
  <p>This is happy text.</p>

  <div class="warning">
    Be careful! There are wizards present, and they are quick to anger!
  </div>
</div>
```

The resulting page content is styled like this:

_EmbedLiveSample("Example", 640, 240_)

#### See also

- [Learn more about CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) in our introduction to CSS.
- Basic selectors

  - [Type selectors](/en-US/docs/Web/CSS/Type_selectors) `elementname`
  - [Class selectors](/en-US/docs/Web/CSS/Class_selectors) `.classname`
  - [ID selectors](/en-US/docs/Web/CSS/ID_selectors) `#idname`
  - [Universal selectors](/en-US/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [State selectors](/en-US/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- Grouping selectors

  - [Selector list](/en-US/docs/Web/CSS/Selector_list) `A, B`

- Combinators

  - [Adjacent sibling selectors](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - [General sibling selectors](/en-US/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - [Child selectors](/en-US/docs/Web/CSS/Child_combinator) `A > B`
  - [Descendant selectors](/en-US/docs/Web/CSS/Descendant_combinator) `A B`

- Pseudo

  - [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes) `:`
  - [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements) `::`

---


## Term:  Media (CSS)
  - CSS
  - Glossary
  - Intro
  - Media
---


> In the context of _Glossary("CSS"_) (Cascading Style Sheets), the term **_media_** refers to the destination to which the document is to be drawn by the _Glossary("rendering engine"_).

Typically, this is a screen—but it may also be a printer, Braille display, or another type of device.

CSS offers several features that allow you to tweak your document's styles—or even offer different styles—according to the media **type** (such as screen or print, to name two) or media **capabilities** (such as width, resolution, or other values) of the viewer's device.

#### See also

- [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Media queries](/en-US/docs/Web/CSS/Media_Queries)
- _cssxref("@media"_) [at-rule](/en-US/docs/Web/CSS/At-rule): Conditionally apply part of a [stylesheet](/en-US/docs/Learn/CSS/First_steps/How_CSS_works#how_to_apply_your_css_to_your_html), based on the result of a media query.
- _domxref("Window.matchMedia()"_): Test the viewing device against a media query

---


## Term:  CSS Object Model (CSSOM)
  - CSS
  - CSSOM
  - DOM
  - Glossary
---


> The [**CSS Object Model (CSSOM)**](/en-US/docs/Web/API/CSS_Object_Model) is a set of APIs for reading and modifying a document’s style-related (CSS) information. In other words, similar to the way in which the [DOM](/en-US/docs/Web/API/Document_Object_Model) enables a document’s structure and content to be read and modified from JavaScript, the CSSOM allows the document’s styling to be read and modified from JavaScript.

#### See also

- [Populating the page: how browsers work](/en-US/docs/Web/Performance/How_browsers_work)

---


## Term:  Data structure
  - CodingScripting
  - Data structure
  - Glossary
---


> **Data structure** is a particular way of organizing *data* so that it can be used efficiently.

#### See also

- _interwiki("wikipedia", "Data_structure", "Data structure"_) on Wikipedia

---


## Term:  Database
  - Database
  - Glossary
  - Sql
---


> A **database** is a storing system that collects organized data, to make some works easier like searching, structure, and extend.

In web development, most databases use the relational database management system (RDBMS) to organize data and programming in _glossary("SQL"_). Some databases, however, don't follow the former mechanism to organized data, which called NoSQL.

Some famous server-side RDBMS are _MySQL_(or _MariaDB_ which is a fork of it), _SQL Server_, and _Oracle Database_. On the other hand, some famous NoSQL examples are _MongoDB_, _Cassandra_, and _Redis_.

Browsers also have their own database system called _glossary("IndexedDB"_).

#### See also

- _Interwiki("wikipedia", "Database"_) on Wikipedia
- Glossary

  - _Glossary("IndexedDB"_)
  - _Glossary("SQL"_)

---


## Term:  Decryption
  - Cryptography
  - Glossary
  - Privacy
  - Security
---


> In _glossary("cryptography"_), **decryption** is the conversion of _glossary("ciphertext"_) into _glossary("Plaintext"_).

Decryption is a cryptographic primitive: it transforms a ciphertext message into plaintext using a cryptographic algorithm called a _glossary("cipher"_). Like encryption, decryption in modern ciphers is performed using a specific algorithm and a secret, called the _glossary("key"_). Since the algorithm is often public, the key must stay secret if the encryption stays secure.

![The decryption primitive.](decryption.png)

Decryption is the reverse of _glossary("encryption"_) and if the key stays secret, decryption without knowing the specific secret, decryption is mathematically hard to perform. How hard depends on the security of the cryptographic algorithm chosen and evolves with the progress of _glossary("cryptanalysis"_).

#### See also

- [Encryption and Decryption](/en-US/docs/Encryption_and_Decryption)

---


## Term:  Delta
  - Delta
  - Glossary
  - difference
  - value
---


> The term **delta** refers to the difference between two values or states.

The name originates from the Greek letter Δ (delta), which is equivalent to the letter _D_ in the Roman alphabet. _Delta_ refers to the use of the letter Δ as a shorthand for _difference_.

The term _delta_ is commonly used when communicating changes in speed, position, or acceleration of a physical or virtual object. It's also used when describing changes in the volume or frequency of sound waves.

For example, when describing how far an object on the screen moves left-to-right, one might use the term _delta x_ or _Δx_.

Likewise, given the new value of _X_ and its old value, you might compute the delta like this:

```js
let deltaX = newX - oldX;
```

More commonly, you receive the delta and use it to update a saved previous condition:

```js
let newX = oldX + deltaX;
```

#### See also

- Mouse wheel events (_domxref("WheelEvent"_) offer the amount the wheel moved since the last event in its _domxref("WheelEvent.deltaX", "deltaX"_), _domxref("WheelEvent.deltaY", "deltaY"_), and _domxref("WheelEvent.deltaZ", "deltaZ"_) properties, for example.

---


## Term:  Denial of Service
  - Attack
  - Denial of Service
  - Glossary
  - Intro
  - Security
---


> 
See [DoS attack](/en-US/docs/Glossary/DOS_attack) for more information.

---


## Term:  Descriptor (CSS)
  - CSS
  - CodingScripting
  - Glossary
  - NeedsContent
---


> A **CSS descriptor** defines the characteristics of an _cssxref("at-rule"_). At-rules may have one or multiple descriptors. Each descriptor has:

- A name
- A value, which holds the component values
- An "!important" flag, which in its default state is unset

---


## Term:  Deserialization
  - Deserialization
  - Deserialize
  - Glossary
  - JavaScript
---


> The process whereby a lower-level format (e.g. that has been transferred over a network, or stored in a data store) is translated into a readable object or other data structure.

In _Glossary("JavaScript"_), for example, you can deserialize a _Glossary("JSON"_) _Glossary("string"_) to an object by calling the _Glossary("function"_) _jsxref("JSON.parse()"_).

#### See also

- [Serialization](https://en.wikipedia.org/wiki/Serialization) on Wikipedia

---


## Term:  Developer Tools
  - CodingScripting
  - Developer Tools
  - Glossary
---


> Developer tools (or "development tools" or short "DevTools") are programs that allow a developer to create, test and debug software.

Current browsers provide integrated developer tools, which allow to inspect a website. They let users inspect and debug the page's _Glossary("HTML"_), _Glossary("CSS"_), and _Glossary("JavaScript"_), allow to inspect the network traffic it causes, make it possible to measure it's performance, and much more.

#### See also

- _interwiki("wikipedia", "Web development tools", "Web development tools"_) on Wikipedia
- [Firefox Developer Tools](/en-US/docs/Tools) on MDN
- [Firebug](https://getfirebug.com/) (former developer tool for Firefox)
- [Chrome DevTools](https://developer.chrome.com/devtools) on chrome.com
- [Safari Web Inspector](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007874-CH1-SW1) on apple.com
- [Edge Dev Tools](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide) on microsoft.com

---


## Term:  DHTML
  - CodingScripting
  - DHTML
  - Glossary
  - HTML
---


> **DHTML** (Dynamic _glossary("HTML"_)) refers to the code behind interactive webpages that need no plugins like _Glossary("Adobe Flash","Flash"_) or _Glossary("Java"_). DHTML aggregates the combined functionality of _Glossary("HTML"_), _Glossary("CSS"_), the _Glossary("DOM"_), and _Glossary("JavaScript"_).

#### See also

- _interwiki("wikipedia", "Dynamic HTML", "DHTML"_) on Wikipedia

---


## Term:  Digest
  - Cryptography
  - Glossary
  - Privacy
  - Security
---


> A **digest** is a small value generated by a _glossary("cryptographic hash function", "hash function"_) from a whole message. Ideally, a digest is quick to calculate, irreversible, and unpredictable, and therefore indicates whether someone has tampered with a given message.

A digest can be used to perform several tasks:

- in non-cryptographic applications (e.g., the index of hash tables, or a fingerprint used to detect duplicate data or to uniquely identify files)
- verify message integrity (a tampered message will have a different hash)
- store passwords so that they can't be retrieved, but can still be checked (To do this securely, you also need to salt the password.)
- generate pseudo-random numbers
- generate _glossary("key","keys"_)

It is critical to choose the proper hash function for your use case to avoid collisions and predictability.

#### See also

- See _glossary("Cryptographic hash function"_)
- _interwiki("wikipedia", "Cryptographic_hash_function", "Hash function"_) on Wikipedia

---


## Term:  Digital certificate
  - Cryptography
  - Glossary
  - Security
---


> A digital certificate is a data file that binds a publicly known _Glossary("Key", "cryptographic key"_) to an organization.

A digital certificate contains information about an organization, such as the common name (e.g., mozilla.org), the organization unit (e.g., Mozilla Corporation), and the location (e.g., Mountain View). Digital certificates are most commonly signed by a _Glossary("certificate authority"_), attesting to the certificate's authenticity.

#### See also

- _interwiki("wikipedia", "Public_key_certificate", "Digital certificate "_) on Wikipedia

---


## Term:  Distributed Denial of Service
  - Attack
  - DDoS
  - Denial of Service
  - Glossary
  - Intro
  - Security
---


> A Distributed Denial-of-Service (DDoS) is an attack in which many compromised systems are made to attack a single target, in order to swamp server resources and block legitimate users.

Normally many persons, using many bots, attack high-profile Web _glossary("server","servers"_) like banks or credit-card payment gateways. DDoS concerns computer networks and CPU resource management.

In a typical DDoS attack, the assailant begins by exploiting a vulnerability in one computer system and making it the DDoS master. The attack master, also known as the botmaster, identifies and infects other vulnerable systems with malware. Eventually, the assailant instructs the controlled machines to launch an attack against a specified target.

There are two types of DDoS attacks: a network-centric attack (which overloads a service by using up bandwidth) and an application-layer attack (which overloads a service or database with application calls). The overflow of data to the target causes saturation in the target machine so that it cannot respond or responds very slowly to legitimate traffic (hence the name "denial of service"). The infected computers' owners normally don't know that their computers have been compromised, and they also suffer loss of service.

A computer under an intruder's control is called a zombie or bot. A network of co-infected computers is known as a botnet or a zombie army. Both Kaspersky Labs and Symantec have identified botnets -- not spam, viruses, or worms -- as the biggest threat to Internet security.

The United States Computer Emergency Readiness Team (US-CERT) defines symptoms of denial-of-service attacks to include:

- Unusually slow network performance (opening files or accessing websites)
- Unavailability of a particular website
- Inability to access any website
- Dramatic increase in the number of spam emails received—(this type of DoS attack is considered an email bomb)
- Disconnection of a wireless or wired internet connection
- Longterm denial of access to the Web or any internet services

#### See also

- _interwiki("wikipedia", "Denial-of-service_attack", "Denial-of-service attack"_) on Wikipedia

---


## Term:  DMZ
  - Glossary
  - Networking
  - Security
---


> A **DMZ** (DeMilitarized Zone) is a way to provide an insulated secure interface between an internal network (corporate or private) and the outside untrusted world — usually the Internet.

It exposes only certain defined endpoints, while denying access to the internal network from _Glossary('node/networking', 'external nodes'_).

#### See also

- _Interwiki("wikipedia", "DMZ (computing)", "DMZ"_) on Wikipedia

---


## Term:  DNS
  - DNS
  - Domain Name System
  - Glossary
  - Infrastructure
---


> **DNS** (Domain Name System) is a hierarchical and decentralized naming system for Internet connected resources. DNS maintains a list of _Glossary("domain name","domain names"_) along with the resources, such as IP addresses, that are associated with them.

The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric _Glossary("IP address"_) (such as 151.106.5.172); this process of mapping a domain name to the appropriate IP address is known as a **DNS lookup**. By contrast, a **reverse DNS lookup** (rDNS) is used to determine the domain name associated with an IP address.

#### See also

- [Understanding domain names](/en-US/docs/Learn/Common_questions/What_is_a_domain_name)
- _Interwiki("wikipedia", "Domain_Name_System", "Domain Name System"_) on Wikipedia

---


## Term:  Doctype
  - Browser
  - CodingScripting
  - DOCTYPE
  - Glossary
  - HTML
  - Intro
---


> In _Glossary("HTML"_), the doctype is the required "`<!DOCTYPE html>`" preamble found at the top of all documents. Its sole purpose is to prevent a _Glossary("browser"_) from switching into so-called [“quirks mode”](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) when rendering a document; that is, the "`<!DOCTYPE html>`" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.

#### See also

- [Definition of the DOCTYPE in the HTML specification](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Quirks Mode and Standards Mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [Document.doctype](/en-US/docs/Web/API/Document/doctype), a JavaScript method that returns the doctype

---


## Term:  Document directive
  - CSP
  - Directive
  - Document
  - Glossary
  - HTTP
  - Security
---


> **_Glossary("CSP"_) document directives** are used in a _HTTPHeader("Content-Security-Policy"_) header and govern the properties of a document or [worker](/en-US/docs/Web/API/Web_Workers_API) environment to which a policy applies.

Document directives don't fall back to the _CSP("default-src"_) directive.

See [Document directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#document_directives) for a complete list.

#### See also

- [Glossary](/en-US/docs/Glossary)

  - _Glossary("CSP"_)
  - _Glossary("Reporting directive"_)
  - _Glossary("Fetch directive"_)
  - _Glossary("Navigation directive"_)

- Reference

  - <https://www.w3.org/TR/CSP/#directives-document>
  - _HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests"_)
  - _HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content"_)
  - _HTTPHeader("Content-Security-Policy/require-sri-for", "require-sri-for"_) _Deprecated_Inline}}
  - _HTTPHeader("Content-Security-Policy"_)

---


## Term:  document environment
  - CodingScripting
  - Glossary
  - JavaScript
---


> When the JavaScript global environment is a window or an iframe, it is called a _document environment_. A global environment is an environment that doesn't have an outer environment.

#### See also

- [document environment](https://html.spec.whatwg.org/multipage/webappapis.html#document-environment) in the HTML specification

---


## Term:  Domain name
  - Domain Name
  - Glossary
  - Protocol
  - WebMechanics
---


> A **domain name** is a website's address on the _Glossary("Internet"_). Domain names are used in _Glossary("URL","URLs"_) to identify to which server belong a specific webpage. The domain name consists of a hierarchical sequence of names (labels) separated by periods (dots) and ending with an _glossary("TLD","extension"_).

#### See also

- _interwiki("wikipedia", "Domain_name", "Domain name"_) on Wikipedia
- [Understanding domain names](/en-US/docs/Learn/Common_questions/What_is_a_domain_name)

---


## Term:  Domain sharding
  - DNS
  - Glossary
  - HTTP
  - Reference
  - Web Performance
  - latency
---


> Browsers limit the number of active connections for each domain. To enable concurrent downloads of assets exceeding that limit, **domain sharding** splits content across multiple subdomains. When multiple domains are used to serve multiple assets, browsers are able to download more resources simultaneously, resulting in a faster page load time and improved user experience.

The problem with domain sharding, in terms of performance, is the cost of extra DNS lookups for each domain and the overhead of establishing each TCP connection.

The initial response from an HTTP request is generally an HTML file listing other resources such as JavaScript, CSS, images and other media files that need to be downloaded. As browsers limit the number of active connections per domain, serving all the required resources from a single domain could be slow as assets need to be downloaded sequentially. With domain sharding, the required downloads are served from more than one domain, enabling the browser to simultaneously download needed resources. Multiple domains, however, is an anti-pattern, as DNS lookups slow initial load times.

HTTP2 supports unlimited concurrent requests making domain sharding an obsolete requirement when HTTP/2 is enabled.

#### See also

- _Glossary("TLS"_)
- [DNS](/en-US/docs/Glossary/DNS)
- [HTTP/2](/en-US/docs/Glossary/HTTP_2)

---


## Term:  Domain
  - Browser
  - Domain
  - Glossary
  - Infrastructure
  - Networking
---


> A domain is an authority within the internet that controls its own resources. Its "domain name" is a way to address this authority as part of the hierarchy in a _Glossary("URL"_) - usually the most memorable part of it, for instance a brand name.

A fully qualified domain name (FQDN) contains all necessary parts to look up this authority by name unambiguously using the _Glossary("DNS"_) system of the internet.

For example, in "developer.mozilla.org":

1.  "org" is called a _interwiki("wikipedia", "Top-level_domain", "top-level domain"_). They are registered as an internet standard by the _interwiki("wikipedia", "Internet_Assigned_Numbers_Authority", "IANA"_) . Here, "org" means "organization" which is defined in a top-level _domain registry_.
2.  "mozilla" is the domain. If you like to own a domain you have to register it with one of the many _interwiki("wikipedia", "Domain_name_registrar", "registrars"_) who are allowed to do so with a top-level domain registry.
3.  "developer" is a "sub-domain", something you as the owner of a domain may define yourself. Many owners choose to have a subdomain "www" to point to their _Glossary("World_Wide_Web"_) resource, but that's not required (and has even fallen somewhat out of favor).

#### See also

- _interwiki("wikipedia", "Domain_name", "Domain Name"_) on Wikipedia

---


## Term:  Dominator
  - CodingScripting
  - Glossary
---


> In graph theory, node A dominates node B if every path from the root node to B passes through A.

This concept is important for _Glossary("garbage collection"_) because it means that B is only reachable through A. So if the garbage collector found A to be unreachable and eligible for reclaiming, than B would also be unreachable and eligible for reclaiming. So objects that A dominates contribute to the retained size of A: that is, the total amount of memory that could be freed if A itself were freed.

#### See also

- _interwiki("wikipedia", "Dominator (graph theory)", "Dominator"_) on Wikipedia
- [Dominators](/en-US/docs/Tools/Memory/Dominators)
- [Garbage collection](/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection)

---


## Term:  DOM (Document Object Model)
  - CodingScripting
  - DOM
  - Glossary
---


> The **DOM** (Document Object Model) is an _glossary("API"_) that represents and interacts with any _glossary("HTML"_) or _glossary("XML"_) document. The DOM is a document model loaded in the _glossary("browser"_) and representing the document as a node tree, where each node represents part of the document (e.g. an _Glossary("element"_), text string, or comment).

The DOM is one of the most-used _Glossary("API"_)s on the _glossary("World Wide Web","Web"_) because it allows code running in a browser to access and interact with every node in the document. Nodes can be created, moved and changed. Event listeners can be added to nodes and triggered on occurrence of a given event.

DOM was not originally specified—it came about when browsers began implementing _Glossary("JavaScript"_). This legacy DOM is sometimes called DOM 0. Today, the WHATWG maintains the DOM Living Standard.

#### See also

- _interwiki("wikipedia", "Document_Object_Model", "The Document Object Model"_) on Wikipedia
- [The DOM documentation on MDN](/en-US/docs/Web/API/Document_Object_Model)
- [The DOM Standard](https://dom.spec.whatwg.org/)
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("API"_)
  - _Glossary("HTML"_)
  - _Glossary("XML"_)
  - _Glossary("World Wide Web"_)

---


## Term:  DoS attack
  - Glossary
  - Security
---


> DoS (Denial of Service) is a network attack that prevents legitimate use of _glossary("server"_) resources by flooding the server with requests.


There are also Distributed Denial of Service (DDoS) Attacks in which a multitude of servers are used to exhaust the computing capacity of an attacked computer.

### Types of DoS attack

DoS attacks are more of a category than a particular kind of attack. Here is a non-exhaustive list of DoS attack types:

- bandwidth attack
- service request flood
- SYN flooding attack
- ICMP flood attack
- peer-to-peer attack
- permanent DoS attack
- application level flood attack

#### See also

- _interwiki("wikipedia", "Denial-of-service_attack", "Denial-of-service attack"_) on Wikipedia
- [Denial-of-service on OWASP](https://www.owasp.org/index.php/Denial_of_Service)
- _Glossary("Distributed Denial of Service","DDoS"_)

---


## Term:  DTLS (Datagram Transport Layer Security)
  - DTLS
  - Intro
---


> **Datagram Transport Layer Security** (**DTLS**) is a protocol used to secure datagram-based communications. It's based on the stream-focused Transport Layer Security (_Glossary("TLS"_)), providing a similar level of security. As a datagram protocol, DTLS doesn't guarantee the order of message delivery, or even that messages will be delivered at all. However, DTLS gains the benefits of datagram protocols, too; in particular, the lower overhead and reduced latency.

These features are especially useful for one of the most common areas in which DTLS comes into play: _Glossary("WebRTC"_). All of the WebRTC related protocols are required to encrypt their communications using DTLS; this includes _Glossary("SCTP"_), _Glossary("RTP", "SRTP"_), and _Glossary("STUN"_).

#### See also

- _Interwiki("wikipedia", "Datagram Transport Layer Security"_) on Wikipedia
- Specifications:

  - _RFC(6347, "Datagram Transport Layer Security Version 1.2"_)
  - [Datagram Transport Layer Security Protocol Version 1.3 _draft specification_](https://datatracker.ietf.org/doc/html/draft-ietf-tls-dtls13)

- Related specification

  - _RFC(5763, "Framework for Establishing a Secure Real-time Transport Protocol (SRTP) Security Context Using DTLS"_)
  - _RFC(5764, "DTLS Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)"_)
  - _RFC(6083, "DTLS for Stream Control Transmission Protocol (SCTP)"_)
  - _RFC(8261, "Datagram Transport Layer Security (DTLS) Encapsulation of SCTP Packets"_)
  - _RFC(7350, "Datagram Transport Layer Security (DTLS) as Transport for Session Traversal Utilities for NAT (STUN)"_)
  - _RFC(7925, "TLS / DTLS Profiles for the Internet of Things"_)

---


## Term:  DTMF (Dual-Tone Multi-Frequency signaling)
  - DTMF
  - Glossary
  - WebRTC
---


> **Dual-Tone Multi-Frequency** (**DTMF**) signaling is a system by which audible tones are used to represent buttons being pressed on a keypad. Frequently referred to in the United States as "touch tone" (after the Touch-Tone trademark used when the transition from pulse dialing to DTMF began), DTMF makes it possible to signal the digits 0-9 as well as the letters "A" through "D" and the symbols "#" and "\*". Few telephone keypads include the letters, which are typically used for control signaling by the telephone network.

Computers may make use of DTMF when dialing a modem, or when sending commands to a menu system for teleconferencing or other purposes.

#### See also

- _interwiki("wikipedia", "Dual-tone multi-frequency signaling"_) on Wikipedia
- _interwiki("wikipedia", "Pulse dialing"_) on Wikipedia

---


## Term:  Dynamic typing
  - CodingScripting
  - Glossary
  - ProgrammingLanguage
---


> **Dynamically-typed languages** are those (like _glossary("JavaScript"_)) where the interpreter assigns _glossary("variable","variables"_) a _glossary("type"_) at runtime based on the variable's _glossary("value"_) at the time.

#### See also

- [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- _interwiki("wikipedia", "Type_system#DYNAMIC", "Type system"_) on Wikipedia

---


## Term:  ECMA
  - Glossary
  - Stub
  - WebMechanics
---


> **Ecma International** (formally _European Computer Manufacturers Association_) is a non-profit organization that develops standards in computer hardware, communications, and programming languages.

On the web it is famous for being the organization which maintain [the ECMA-262 specification](https://www.ecma-international.org/publications/standards/Ecma-262.htm) (aka. _Glossary("ECMAScript"_)) which is the core specification for the _Glossary("JavaScript"_) language.

#### See also

- _interwiki("wikipedia", "Ecma_International", "Ecma International"_) on Wikipedia
- [The Ecma International web site](https://www.ecma-international.org/)

---


## Term:  ECMAScript
  - Glossary
  - WebMechanics
---


> **ECMAScript** is a scripting language specification on which _glossary("JavaScript"_) is based. [Ecma International](https://www.ecma-international.org) is in charge of standardizing ECMAScript.

#### See also

- _Interwiki("wikipedia", "ECMAScript"_) on Wikipedia
- [ECMAScript](http://www.ecmascript.org/)

---


## Term:  Effective connection type
  - Glossary
  - Navigator
  - Network Information API
  - NetworkInformation
  - Performance
  - Reference
  - Web Performance
  - connect
  - effective connection type
  - effectiveType
---


> **Effective connection type** (ECT) refers to the measured network performance, returning a cellular connection type, like 3G, even if the actual connection is tethered broadband or WiFi, based on the time between the browser requesting a page and effective type of the connection.

The values of '`slow-2g`', '`2g`', '`3g`', and '`4g`' are determined using observed round-trip times and downlink values.

| ECT         | Minimum [RTT](</en-US/docs/Glossary/Round_Trip_Time_(RTT)>) | Maximum downlink | Explanation                                                                                              |
| ----------- | ----------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| _`slow-2g`_ | 2000ms                                                      | 50 Kbps          | The network is suited for small transfers only such as text-only pages.                                  |
| _`2g`_      | 1400ms                                                      | 70 Kbps          | The network is suited for transfers of small images.                                                     |
| _`3g`_      | 270ms                                                       | 700 Kbps         | The network is suited for transfers of large assets such as high resolution images, audio, and SD video. |
| _`4g`_      | 0ms                                                         | ∞                | The network is suited for HD video, real-time video, etc.                                                |

[effectiveType](/en-US/docs/Web/API/NetworkInformation/effectiveType) is a property of the [Network Information API](/en-US/docs/Web/API/Network_Information_API), exposed to JavaScript via the [navigator.connection](/en-US/docs/Web/API/Navigator/connection) object. To see your effective connection type, open the console of the developer tools of a supporting browser and enter the following:

```js
navigator.connection.effectiveType;
```

#### See also

- [Network Information API](/en-US/docs/Web/API/Network_Information_API)
- _domxref('NetworkInformation'_)
- _domxref('NetworkInformation.effectiveType'_)
- _HTTPHeader("ECT"_)

---


## Term:  Element
  - CodingScripting
  - Glossary
  - HTML
---


> An **element** is a part of a webpage. In _glossary("XML"_) and _glossary("HTML"_), an element may contain a data item or a chunk of text or an image, or perhaps nothing. A typical element includes an opening tag with some _glossary("attribute", "attributes"_), enclosed text content, and a closing tag.

![Example: in <p class="nice">Hello world!</p>, '<p class="nice">' is an opening tag, 'class="nice"' is an attribute and its value, 'Hello world!' is enclosed text content, and '</p>' is a closing tag.](anatomy-of-an-html-element.png)


#### See also

- [Getting started with HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Defining custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements)
- The _domxref("Element"_) interface, representing an element in the DOM.

---


## Term:  Empty element
  - CodingScripting
  - Glossary
  - Intermediate
---


> An **empty element** is an _Glossary("element"_) from HTML, SVG, or MathML that **cannot** have any child nodes (i.e., nested elements or text nodes).

The [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), and [MathML](https://www.w3.org/TR/MathML3/) specifications define very precisely what each element can contain. Many combinations have no semantic meaning, for example an _HTMLElement("audio"_) element nested inside an _HTMLElement("hr"_) element.

In HTML, using a closing tag on an empty element is usually invalid. For example, `<input type="text"></input>` is invalid HTML.

The empty elements in HTML are as follows:

- _HTMLElement("area"_)
- _HTMLElement("base"_)
- _HTMLElement("br"_)
- _HTMLElement("col"_)
- _HTMLElement("embed"_)
- _HTMLElement("hr"_)
- _HTMLElement("img"_)
- _HTMLElement("input"_)
- _HTMLElement("keygen"_)(HTML 5.2 Draft removed)
- _HTMLElement("link"_)
- _HTMLElement("meta"_)
- _HTMLElement("param"_)
- _HTMLElement("source"_)
- _HTMLElement("track"_)
- _HTMLElement("wbr"_)

---


## Term:  Encapsulation
  - CodingScripting
  - Glossary
---


> Encapsulation is the packing of data and _glossary("function","functions"_) into one component (for example, a _glossary("class"_)) and then controlling access to that component to make a "blackbox" out of the _glossary("object"_). Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

#### See also

- [Encapsulation](<https://en.wikipedia.org/wiki/Encapsulation_(object-oriented_programming)>) on Wikipedia

---


## Term:  Encryption
  - Cryptography
  - Glossary
  - Privacy
  - Security
---


> In _glossary("cryptography"_), **encryption** is the conversion of _glossary("plaintext"_) into a coded text or _glossary("ciphertext"_). A ciphertext is intended to be unreadable by unauthorized readers.

Encryption is a cryptographic primitive: it transforms a plaintext message into a ciphertext using a cryptographic algorithm called a _glossary("cipher"_). Encryption in modern ciphers is performed using a specific algorithm and a secret, called the _glossary("key"_). Since the algorithm is often public, the key must stay secret if the encryption stays secure.

![How encryption works.](encryption.png)

Without knowing the secret, the reverse operation, _glossary("decryption"_), is mathematically hard to perform. How hard depends on the security of the cryptographic algorithm chosen and evolves with the progress of _glossary("cryptanalysis"_).

---


## Term:  Endianness
  - Coding
  - CodingScripting
  - Glossary
---


> **Endian** and **endianness** (or "byte-order") describe how computers organize the bytes that make up numbers.

Each memory storage location has an index or address. Every byte can store an 8-bit number (i.e. between `0x00` and `0xff`), so you must reserve more than one byte to store a larger number. By far the most common _ordering_ of multiple bytes in one number is the **little-endian**, which is used on all Intel processors. Little-endian means storing bytes in order of least-to-most-significant (where the least significant byte takes the first or lowest address), comparable to a common European way of writing dates (e.g., 31 December 2050).

Naturally, **big-endian** is the opposite order, comparable to an ISO date (2050-12-31). Big-endian is also often called "network byte order", because Internet standards usually require data to be stored big-endian, starting at the standard UNIX socket level and going all the way up to standardized Web binary data structures. Also, older Mac computers using 68000-series and PowerPC microprocessors formerly used big-endian.

Examples with the number `0x12345678` (i.e. 305 419 896 in decimal):

- _little-endian_: `0x78 0x56 0x34 0x12`
- _big-endian_: `0x12 0x34 0x56 0x78`
- _mixed-endian_ (historic and very rare): `0x34 0x12 0x78 0x56`

#### See also

- _jsxref("ArrayBuffer"_)
- _jsxref("DataView"_)
- [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- _Interwiki("wikipedia", "Endianness"_) (Wikipedia)
- _Glossary("Data structure"_) (Glossary)

---


## Term:  Engine
  - CodingScripting
  - Glossary
  - NeedsContent
---


> The _glossary("JavaScript"_) engine is an interpreter that parses and executes a JavaScript program.

#### See also

- _Interwiki("wikipedia", "JavaScript engine"_) on Wikipedia

---


## Term:  Entity header
  - Glossary
  - WebMechanics
---


> > **Warning:** The current HTTP/1.1 specification no longer refers to entities, entity headers or entity-body. Some of the fields are now referred to as _glossary("Representation header"_) fields.

An entity header is an _glossary("HTTP_header", "HTTP header"_) that describes the payload of an HTTP message (i.e. metadata about the message body). Entity headers include: _HTTPHeader("Content-Length"_), _HTTPHeader("Content-Language"_), _HTTPHeader("Content-Encoding"_), _HTTPHeader("Content-Type"_), _HTTPHeader("Expires"_), etc. Entity headers may be present in both HTTP request and response messages.

In the following example, _HTTPHeader("Content-Length"_) is an entity header, while _HTTPHeader("Host"_) and _HTTPHeader("User-Agent"_) are requests headers:

```plain
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

#### See also

- _Glossary("Representation header"_)

---


## Term:  Entity
  - CodingScripting
  - Composing
  - Glossary
  - HTML
---


> An _glossary("HTML"_) **entity** is a piece of text ("string") that begins with an ampersand (`&`) and ends with a semicolon (`;`) . Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard.

> **Note:** Many characters have memorable entities. For example, the entity for the copyright symbol (`©`) is `&copy;`. For less memorable characters, such as `&#8212;` or `&#x2014;`, you can use a [reference chart](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) or [decoder tool](https://mothereff.in/html-entities).

## Reserved characters

Some special characters are reserved for use in HTML, meaning that your browser will parse them as HTML code. For example, if you use the less-than (`<`) sign, the browser interprets any text that follows as a _Glossary('tag'_).

To display these characters as text, replace them with their corresponding character entities, as shown in the following table.

| Character | Entity   | Note                                                                                 |
| --------- | -------- | ------------------------------------------------------------------------------------ |
| &         | `&amp;`  | Interpreted as the beginning of an entity or character reference.                    |
| <         | `&lt;`   | Interpreted as the beginning of a _Glossary('tag'_)                           |
| >         | `&gt;`   | Interpreted as the ending of a _Glossary('tag'_)                              |
| "         | `&quot;` | Interpreted as the beginning and end of an _Glossary('attribute'_)'s value. |

#### See also

- [Official list of character entities](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)

---


## Term:  Event
  - CodingScripting
  - Glossary
---


> Events are assets generated by [DOM](/en-US/docs/Glossary/DOM) elements, which can be manipulated by a Javascript code.

#### See also

- [Event documentation on MDN](/en-US/docs/Web/API/Event)
- [Official website](https://www.w3.org/TR/DOM-Level-2-Events/events.html)
- _Interwiki("wikipedia", "DOM Events"_) on Wikipedia

---


## Term:  Exception
  - Beginner
  - CodingScripting
  - Glossary
---


> An **exception** is a condition that interrupts normal code execution. In JavaScript _glossary("syntax error", "syntax errors"_) are a very common source of exceptions.

#### See also

- _Interwiki("wikipedia", "Exception handling"_) on Wikipedia

---


## Term:  EXIF
  - EXIF
  - Image
---


> The **Exchangeable Image File Format (EXIF)** is a standard that specifies how metadata about a multimedia file can be embedded within the file. For example, an image might contain EXIF data describing the: pixel width, height, and density, shutter speed, aperture, ISO settings, capture date, etc.

#### See also

- [EXIF](https://en.wikipedia.org/wiki/Exif) (Wikipedia)
- [CIPA Standards, including "CIPA DC-008-Translation-2019 Exchangeable image file format for digital still cameras : Exif Version 2.32"](https://www.cipa.jp/std/std-sec_e.html)

---


## Term:  Expando
  - CodingScripting
  - JavaScript
  - Reference
  - expando
---


> Expando properties are properties added to _glossary("DOM"_) nodes with _glossary("JavaScript"_), where those properties are not part of the _glossary("object","object's"_) DOM specification:

```js
window.document.foo = 5; // foo is an expando
```

The term may also be applied to properties added to objects without respecting the object's original intent, such as non-numeric named properties added to an _glossary("Array"_).

---


## Term:  Fallback alignment
  - CSS
  - Glossary
  - alignment
---


> In [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment), a fallback alignment is specified in order to deal with cases where the requested alignment cannot be fulfilled. For example, if you specify `justify-content: space-between` there must be more than one [alignment subject](/en-US/docs/Glossary/Alignment_Subject). If there is not, the fallback alignment is used. This is specified per alignment method, as detailed below.

- First baseline
  - : `start`
- Last baseline
  - : `safe end`
- Baseline
  - : `start`
- Space-between
  - : `flex-start` (start)
- Space-around
  - : `center`
- Space-evenly
  - : `center`
- Stretch
  - : `flex-start` (start)

#### See also

- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)

---


## Term:  Falsy
  - CodingScripting
  - Glossary
  - JavaScript
---


> A **falsy** (sometimes written **falsey**) value is a value that is considered false when encountered in a _Glossary("Boolean"_) context.

_Glossary("JavaScript"_) uses _Glossary("Type_Conversion", "type conversion"_) to coerce any value to a Boolean in contexts that require it, such as _Glossary("Conditional", "conditionals"_) and _Glossary("Loop", "loops"_).

The following table provides a complete list of JavaScript falsy values:

| Value                                | Description                                                                                                                                                                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`                              | The keyword [`false`](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords_in_older_standards).                                                                                                                 |
| `0`                                  | The _jsxref("Number"_) zero (so, also `0.0`, etc., and `0x0`).                                                                                                                                                                 |
| `-0`                                 | The _jsxref("Number"_) negative zero (so, also `-0.0`, etc., and `-0x0`).                                                                                                                                                      |
| `0n`                                 | The _jsxref("BigInt"_) zero (so, also `0x0n`). Note that there is no _jsxref("BigInt"_) negative zero — the negation of `0n` is `0n`.                                                                                |
| `""`, `''`, ` `` `                   | Empty [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value.                                                                                                                                                        |
| _Glossary("null"_)         | [null](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) — the absence of any value.                                                                                                                                             |
| _Glossary("undefined"_)     | [undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) — the primitive value.                                                                                                                                        |
| _Glossary("NaN"_)             | [NaN ](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)— not a number.                                                                                                                                                           |
| _domxref("document.all"_) | Objects are falsy if and only if they have the [\[\[IsHTMLDDA\]\]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot.That slot only exists in _domxref("document.all"_) and cannot be set using JavaScript. |

## Examples

Examples of _falsy_ values in JavaScript (which are coerced to false in Boolean contexts, and thus _bypass_ the `if` block):

```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

### The logical AND operator, &&

If the first object is falsy, it returns that object

```js
false && "dog"
// ↪ false

0 && "dog"
// ↪ 0
```

#### See also

- _Glossary("Truthy"_)
- _Glossary("Type_coercion", "Coercion"_)
- _Glossary("Boolean"_)

---


## Term:  Favicon
  - Glossary
  - Intro
  - favicon
  - user agent
---


> A favicon (favorite icon) is a tiny icon included along with a website, which is displayed in places like the browser's address bar, page tabs and bookmarks menu.

Note, however, that most modern browsers replaced the favicon from the address bar by an image indicating whether or not the website is using _Glossary("https","HTTPS"_).

Usually, a favicon is 16 x 16 pixels in size and stored in the _Glossary("GIF"_), _Glossary("PNG"_), or ICO file format.

They are used to improve user experience and enforce brand consistency. When a familiar icon is seen in the browser's address bar, for example, it helps users know they are in the right place.

#### See also

- _interwiki("wikipedia", "Favicon", "Favicon"_) on Wikipedia
- Tools

  - [Free favicon generator](https://favicon.io/)
  - [Favicon.ico and & app icon generator](https://www.favicon-generator.org/)

---


## Term:  Fetch directive
  - CSP
  - HTTP
  - Security
---


> **_Glossary("CSP"_) fetch directives** are used in a _HTTPHeader("Content-Security-Policy"_) header and control locations from which certain resource types may be loaded. For instance, _CSP("script-src"_) allows developers to allow trusted sources of script to execute on a page, while _CSP("font-src"_) controls the sources of web fonts.

All fetch directives fall back to _CSP("default-src"_). That means, if a fetch directive is absent in the CSP header, the user agent will look for the `default-src` directive.

See [Fetch directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) for a complete list.

#### See also

- [Glossary](/en-US/docs/Glossary)

  - _Glossary("CSP"_)
  - _Glossary("Reporting directive"_)
  - _Glossary("Document directive"_)
  - _Glossary("Navigation directive"_)

- Reference

  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - _HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests"_)
  - _HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content"_)
  - _HTTPHeader("Content-Security-Policy/require-sri-for", "require-sri-for"_) _Deprecated_Inline}}
  - _HTTPHeader("Content-Security-Policy"_)

---


## Term:  Fetch metadata request header
  - Fetch Metadata Request Headers
  - Glossary
---


> A **fetch metadata request header** is an _Glossary("Request header", "HTTP request header"_) that provides additional information about the context from which the request originated. This allows the server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

With this information a server can implement a _Glossary("resource isolation policy"_), allowing external sites to request only those resources that are intended for sharing, and that are used appropriately. This approach can help mitigate common cross-site web vulnerabilities such as _Glossary("CSRF"_), Cross-site Script Inclusion('XSSI'), timing attacks, and cross-origin information leaks.

These headers are prefixed with `Sec-`, and hence have _Glossary("Forbidden header name", "forbidden header names"_). As such, they cannot be modified from JavaScript.

The fetch metadata request headers are:

- _HTTPHeader("Sec-Fetch-Site"_)
- _HTTPHeader("Sec-Fetch-Mode"_)
- _HTTPHeader("Sec-Fetch-User"_)
- _HTTPHeader("Sec-Fetch-Dest"_)

#### See also

- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/fetch-metadata/) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- [List of all HTTP headers > Fetch metadata request headers](/en-US/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("Representation header"_)
  - _Glossary("HTTP_header","HTTP header"_)
  - _Glossary("Response header"_)
  - _Glossary("Request header"_)

---


## Term:  Firefox OS
  - B2G
  - Boot2Gecko
  - Firefox OS
  - Glossary
  - Infrastructure
  - Intro
---


> Firefox OS is a discontinued open source mobile operating system developed by Mozilla. See _interwiki("wikipedia", "Firefox OS"_) for more details.

---


## Term:  firewall
  - DDoS
  - Firewall
  - Glossary
  - Security
  - computer network
---


> A **firewall** is a system that filters network traffic. It can either let it pass or block it, according to some specified rules. For example, it can block incoming connections aimed at a certain port or outgoing connections to a certain IP address.

Firewalls can be as simple as a single piece of software, or more complex, like a dedicated machine whose only function is to act as a firewall.

#### See also

- _Interwiki("wikipedia", "Firewall (computing)"_) on Wikipedia

---


## Term:  First-class Function
  - CodingScripting
  - Glossary
  - JavaScript
---


> A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

## Example | Assign a function to a variable

### JavaScript

```js
const foo = function() {
   console.log("foobar");
}
foo(); // Invoke it using the variable
// foobar
```

We assigned an **Anonymous Function** in a _glossary("Variable"_), then we used that variable to invoke the function by adding parentheses `()` at the end.

> **Note:** **Even if your function was named,** you can use the variable name to invoke it. Naming it will be helpful when debugging your code. _But it won't affect the way we invoke it._

## Example | Pass a function as an Argument

### JavaScript

```js
function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

We are passing our `sayHello()` function as an argument to the `greeting()` function, this explains how we are treating the function as a **value**.

> **Note:** The function that we pass as an argument to another function, is called a **_glossary("Callback function"_)**. _`sayHello` is a Callback function._

## Example | Return a function

### JavaScript

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
```

In this example; We need to return a function from another function - _We can return a function because we treated function in JavaScript as a **value**._

> **Note:** A function that returns a function is called a **Higher-Order Function**.

Back to our example; Now, we need to invoke `sayHello` function and its returned `Anonymous Function`. To do so, we have two ways:

### 1- Using a variable

```js
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc();
// Hello!
```

This way, it returns the `Hello!` message.

> **Note:** You have to use another variable. If you invoked `sayHello` directly, it would return the function itself **without invoking its returned function**.

### 2- Using double parentheses

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
// Hello!
```

We are using double parentheses `()()` to invoke the returned function as well.

#### See also

- _Interwiki("wikipedia", "First-class_function", "First-class functions"_) on Wikipedia
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _glossary("Callback function"_)
  - _glossary("Function"_)
  - _glossary("Variable"_)

---


## Term:  First contentful paint
  - Glossary
  - Performance
  - Reference
  - Web Performance
---


> **First Contentful Paint** (FCP) is when the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading. The question "Is it happening?" is "yes" when the first contentful paint completes.

_The First Contentful Paint_ time stamp is when the browser first rendered any text, image (including background images), non-white canvas or SVG. This excludes any content of iframes, but includes text with pending webfonts. This is the first time users could start consuming page content.

#### See also

- [First Meaningful Paint](/en-US/docs/Glossary/first_meaningful_paint)
- [Paint Timing specification](https://w3c.github.io/paint-timing/#first-contentful-paint)

---


## Term:  First CPU idle
  - Glossary
  - Lighthouse
  - Performance
  - Web Performance
---


> **First CPU Idle** measures when a page is minimally interactive, or when the window is quiet enough to handle user input. It is a non-standard Google web performance metric. Generally, it occurs when most, but not necessarily all visible UI elements are interactive, and the user interface responds, on average, to most user input within 50ms. It is also known as [First interactive](/en-US/docs/Glossary/First_interactive).

---


## Term:  First input delay
  - Glossary
  - Reference
  - Web Performance
---


> **First input delay** (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.

It is the length of time, in milliseconds, between the first user interaction on a web page and the browser’s response to that interaction. Scrolling and zooming are not included in this metric.

The time between when content is painted to the page and when all the functionality becomes responsive to human interaction often varies based on the size and complexity of the JavaScript needing to be downloaded, parsed, and executed on the main thread, and on the device speed or lack thereof (think low end mobile devices). The longer the delay, the worse the user experience. Reducing site initialization time and eliminating[ long tasks](/en-US/docs/Web/API/Long_Tasks_API) can help eliminate first input delays.

#### See also

- [requestIdleCallback](/en-US/docs/Web/API/Window/requestIdleCallback)
- [lazy loading](/en-US/docs/Web/Performance/Lazy_loading)

---


## Term:  First interactive
  - Glossary
  - Lighthouse
  - Web Performance
---


> _draft}}

**First Interactive,** also known as [first CPU idle](/en-US/docs/Glossary/First_CPU_idle), is a non-standard web performance metric that measures when the user's window is quiet enough to handle user input, or what is termed as minimally interactive.

Minimally interactive is defined as when some, but not necessarily all, UI elements on the page have loaded and are interactive, and, on average, respond to user input in a reasonable amount of time.

## More information

First interactive is a variation of [Time to Interactive](/en-US/docs/Glossary/Time_to_interactive), which is split into _First Interactive_ and _Consistently Interactive_. These metrics have been proposed by the Web Incubator Community Group and are already being used in various tools. This metric has been called _First CPU Idle_ since [Lighthouse 3.0](https://developers.google.com/web/tools/lighthouse/)

---


## Term:  First Meaningful Paint
  - Glossary
  - Reference
  - Web Performance
---


> **First Meaningful Paint** (FMP) is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

#### See also

- [First contentful paint](/en-US/docs/Glossary/First_contentful_paint)

---


## Term:  First paint
  - Beginner
  - Glossary
  - Performance
  - Web Performance
---


> **First Paint**, part of the [Paint Timing API](/en-US/docs/Web/PerformancePaintTiming), is the time between navigation and when the browser renders the first pixels to the screen, rendering anything that is visually different from what was on the screen prior to navigation. It answers the question "Is it happening?"

#### See also

- [First meaningful paint](/en-US/docs/Glossary/first_meaningful_paint)
- [First contentful paint](/en-US/docs/Glossary/First_contentful_paint)
- [Paint Timing API](/en-US/docs/Web/PerformancePaintTiming)

---


## Term:  Flex Container
  - CSS
  - Glossary
  - flex container
  - flexbox
---


> A _glossary("flexbox"_) layout is defined using the `flex` or `inline-flex` values of the `display` property on the parent item. This element then becomes a **flex container**, and each one of its children becomes a _glossary("flex item"_).

A value of `flex` causes the element to become a block level flex container, and `inline-flex` an inline level flex container. These values create a **flex formatting context** for the element, which is similar to a block formatting context in that floats will not intrude into the container, and the margins on the container will not collapse with those of the items.

#### See also

### Property reference

- _cssxref("align-content"_)
- _cssxref("align-items"_)
- _cssxref("flex"_)
- _cssxref("flex-direction"_)
- _cssxref("flex-flow"_)
- _cssxref("flex-wrap"_)
- _cssxref("justify-content"_)

### Further reading

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
- Firefox Developer Tools > How to: *[CSS Flexbox Inspector: Examine Flexbox layouts](/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)*

---


## Term:  Flex Item
  - CSS
  - Glossary
  - flex item
  - flexbox
---


> The direct children of a _glossary("Flex Container"_) (elements with `display: flex` or `display: inline-flex` set on them) become **flex items**.

Continuous runs of text inside flex containers will also become flex items.

#### See also

### Property reference

- _cssxref("align-self"_)
- _cssxref("flex-basis"_)
- _cssxref("flex-grow"_)
- _cssxref("flex-shrink"_)
- _cssxref("order"_)

### Further reading

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

---


## Term:  Flexbox
  - CSS
  - Glossary
  - Intro
  - flexbox
---


> Flexbox is the commonly-used name for the [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/), a layout model for displaying items in a single dimension — as a row or as a column.

In the specification, Flexbox is described as a layout model for user interface design. The key feature of Flexbox is the fact that items in a flex layout can grow and shrink. Space can be assigned to the items themselves, or distributed between or around the items.

Flexbox also enables alignment of items on the main or cross axis, thus providing a high level of control over the size and alignment of a group of items.

#### See also

### Property reference

- _cssxref("align-content"_)
- _cssxref("align-items"_)
- _cssxref("align-self"_)
- _cssxref("flex"_)
- _cssxref("flex-basis"_)
- _cssxref("flex-direction"_)
- _cssxref("flex-flow"_)
- _cssxref("flex-grow"_)
- _cssxref("flex-shrink"_)
- _cssxref("flex-wrap"_)
- _cssxref("justify-content"_)
- _cssxref("order"_)

### Further reading

- _[CSS Flexible Box Layout Module Level 1 Specification](https://www.w3.org/TR/css-flexbox-1/)_
- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
- CSS Flexbox Guide: _[Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)_

---


## Term:  Flex
  - CSS
  - Flex
  - Glossary
  - flexbox
---


> `flex` is a new value added to the CSS _cssxref("display"_) property. Along with `inline-flex` it causes the element that it applies to in order to become a _glossary("flex container"_), and the element's children to each become a _glossary("flex item"_). The items then participate in flex layout, and all of the properties defined in the CSS Flexible Box Layout Module may be applied.

The `flex` property is a shorthand for the flexbox properties `flex-grow`, `flex-shrink` and `flex-basis`.

In addition `<flex>` can refer to [a flexible length](/en-US/docs/Web/CSS/flex_value) in CSS Grid Layout.

#### See also

### Property reference

- _cssxref("align-content"_)
- _cssxref("align-items"_)
- _cssxref("align-self"_)
- _cssxref("flex"_)
- _cssxref("flex-basis"_)
- _cssxref("flex-direction"_)
- _cssxref("flex-flow"_)
- _cssxref("flex-grow"_)
- _cssxref("flex-shrink"_)
- _cssxref("flex-wrap"_)
- _cssxref("justify-content"_)
- _cssxref("order"_)

### Further reading

- _[CSS Flexible Box Layout Module Level 1 Specification](https://www.w3.org/TR/css-flexbox-1/)_
- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
- CSS Flexbox Guide: _[Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)_

---


## Term:  Forbidden header name
  - Fetch
  - Glossary
  - HTTP
  - Headers
  - forbidden
---


> A **forbidden header name** is the name of any [HTTP header](/en-US/docs/Web/HTTP/Headers) that cannot be modified programmatically; specifically, an HTTP **request** header name (in contrast with a _Glossary("Forbidden response header name"_)).

Modifying such headers is forbidden because the user agent retains full control over them. Names starting with `Sec-` are reserved for creating new headers safe from _glossary("API","APIs"_) using [Fetch](/en-US/docs/Web/API/Fetch_API) that grant developers control over headers, such as _domxref("XMLHttpRequest"_).

Forbidden header names start with `Proxy-` or `Sec-`, or are one of the following names:

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Feature-Policy`
- `Host`
- `Keep-Alive`
- `Origin`
- `Proxy-`
- `Sec-`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

> **Note:** The `User-Agent` header is no longer forbidden, [as per spec](https://fetch.spec.whatwg.org/#terminology-headers) — see forbidden header name list (this was implemented in Firefox 43) — it can now be set in a Fetch [Headers](/en-US/docs/Web/API/Headers) object, or via XHR [setRequestHeader()](/en-US/docs/Web/API/XMLHttpRequest#setrequestheader%28%29).  However, Chrome will silently drop the header from Fetch requests (see [Chromium bug 571722](https://bugs.chromium.org/p/chromium/issues/detail?id=571722)).

#### See also

_Glossary("Forbidden response header name"_) (Glossary)

---


## Term:  Forbidden response header name
  - Glossary
  - HTTP
  - Response
  - forbidden
---


> A _forbidden response header name_ is an [HTTP header](/en-US/docs/Web/HTTP/Headers) name (either \``Set-Cookie`\` or \``Set-Cookie2`\`) that cannot be modified programmatically.

#### See also

- [Fetch specification: forbidden response-header name](https://fetch.spec.whatwg.org/#forbidden-response-header-name)

---


## Term:  Fork
  - Fork
  - Glossary
  - Tools
  - git
---


> A fork is a copy of an existing software project at some point to add someone's own modifications to the project.

Basically, if the license of the original software allows, you can copy the code to develop your own version of it, with your own additions, which will be a "fork".

Forks are often seen in free and open source software development. This is now a more popular term thanks to contribution model using Git (and/or the GitHub platform).

#### See also

- _interwiki("wikipedia", "Fork_(software_development)","Fork"_) on Wikipedia
- [How to fork a GitHub repo](https://help.github.com/articles/fork-a-repo/) (fork as in a Git context)
- _Glossary("Fork"_) (Glossary)
- Various "well-known" forks

  - [Linux distributions](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
  - [Node.js and io.js (which have been merged together back)](https://nodejs.org/en/blog/announcements/foundation-v4-announce/)
  - [LibreOffice, a fork of OpenOffice](https://www.libreoffice.org/about-us/who-are-we/)

---


## Term:  frame rate (FPS)
  - Animation
  - Glossary
  - Web Performance
  - requestAnimationFrame
---


> A **frame rate** is the speed at which the browser is able to recalculate, layout and paint content to the display. The **frames per second**, or **fps**, is how many frames can be repainted in one second. The goal frame rate for in web site computer graphics is 60fps.

Movies generally have a frame rate of 24 fps. They are able to have fewer frames per second because the illusion of life is created with motion blurs. When moving on a computer screen there are no motion blurs (unless you are animating an image [sprite](/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS) with motion blurs).

#### See also

- _Interwiki("wikipedia", "Frame rate"_) (Wikipedia)
- _glossary("FPS"_) (Glossary)

---


## Term:  Fragmentainer
  - CSS
  - CSS Fragmentation Specification
  - Glossary
  - fragmentainer
---


> A fragmentainer is defined in the[ CSS Fragmentation Specification](https://www.w3.org/TR/css-break-3/) as follows:

> A box—such as a page box, column box, or region—that contains a portion (or all) of a fragmented flow. Fragmentainers can be pre-defined, or generated as needed. When breakable content would overflow a fragmentainer in the block dimension, it breaks into the next container in its fragmentation context instead.

Fragmented contexts are found in CSS Paged Media, where the fragmentainer would be the box which defines a page. In Multiple-column Layout the fragmentainer is the column box created when columns are defined on a multicol container. In CSS Regions each Region is a fragmentainer.

---


## Term:  FTP
  - CodingScripting
  - FTP
  - Glossary
  - Protocol
---


> **FTP** (File Transfer Protocol) is an insecure _glossary("protocol"_) for transferring files from one _glossary("host"_) to another over the Internet.

For many years it was the defacto standard way of transferring files, but as it is inherently insecure, it is no longer supported by many hosting accounts. Instead you should use SFTP (a secure, encrypted version of FTP) or another secure method for transferring files like Rsync over SSH.

#### See also

- [Beginner's guide to uploading files via FTP](/en-US/docs/Learn/Common_questions/Upload_files_to_a_web_server)
- _interwiki("wikipedia", "File Transfer Protocol", "FTP"_) on Wikipedia

---


## Term:  FTU
  - FTU
  - Firefox OS
  - First time use
  - Gaia
  - Glossary
  - Infrastructure
  - Intro
---


> FTU (First Time Use) is the app that loads when you run a newly-installed version of _glossary("Gecko"_) on a _glossary("Firefox OS"_) device.

You can use FTU to set many important options (e.g. timezone, WiFi details, default language, importing contacts), or take the "Phone Tour" to find out more about your device.

---


## Term:  Function
  - CodingScripting
  - Glossary
  - IIFE
  - Immediately Invoked Function Expressions (IIFE)
  - Intro
  - JavaScript
---


> A **function** is a code snippet that can be called by other code or by itself, or a _Glossary("variable"_) that refers to the function. When a function is called, _Glossary("Argument", "arguments"_) are passed to the function as input, and the function can optionally return a value. A function in _glossary("JavaScript"_) is also an _glossary("object"_).

A function name is an _Glossary("identifier"_) included as part of a function declaration or function expression. The function name's _Glossary("scope"_) depends on whether the function name is a declaration or expression.

### Different types of functions

An **anonymous function** is a function without a function name. Only function expressions can be anonymous, function declarations must have a name:

```js
// When used as a function expression
(function () {});
// or using the ECMAScript 2015 arrow notation
() => {};
```

The following terms are not used in the ECMAScript language specification, they're jargon used to refer to different types of functions.

A **named function** is a function with a function name:

```js
// Function declaration
function foo() {};
// Named function expression
(function bar() {});
// or using the ECMAScript 2015 arrow notation
const foo = () => {};
```

An **inner function** is a function inside another function (`square` in this case). An **outer function** is a function containing a function (`addSquares` in this case):

```js
function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
//Using ECMAScript 2015 arrow notation
const addSquares = (a,b) => {
   const square = x => x*x;
   return square(a) + square(b);
};
```

A **recursive function** is a function that calls itself. See _Glossary("Recursion", "recursion"_).

```js
function loop(x) {
   if (x >= 10)
      return;
   loop(x + 1);
};
//Using ECMAScript 2015 arrow notation
const loop = x => {
   if (x >= 10)
      return;
   loop(x + 1);
};
```

An **Immediately Invoked Function Expressions** (_glossary("IIFE"_)) is a function that is called directly after the function is loaded into the browser’s compiler. The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function’s definition.

```js
// Declared functions can't be called immediately this way
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

// Function expressions, named or anonymous, can be called immediately
(function foo() {
    console.log("Hello Foo");
}());

(function food() {
    console.log("Hello Food");
})();

(() => console.log('hello world'))();
```

If you'd like to know more about IIFEs, check out the following page on Wikipedia : [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

#### See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Arrow Functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---


## Term:  Fuzz testing
  - Firefox
  - Fuzzing
  - Mozilla
  - QA
  - Security
  - Testing
---


> **Fuzzing** is a technique for testing software using automated tools to provide invalid or unexpected input to a program or function in a program, then checking the results to see if the program crashes or otherwise acts inappropriately. This is an important way to ensure that software is stable, reliable, and secure, and we use fuzzing a lot at Mozilla.

- [Jesse's blog posts about fuzzing](https://www.squarefree.com/categories/fuzzing/)
- [Wikipedia: Fuzz testing](https://en.wikipedia.org/wiki/Fuzz_testing)
- [fuzzdb](https://github.com/fuzzdb-project/fuzzdb)
- [jsfuzz - coverage guided javascript fuzzer](https://github.com/fuzzitdev/jsfuzz)

---


## Term:  Garbage collection
  - CodingScripting
  - Glossary
---


> **[Garbage collection](/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection)** is a term used in _Glossary("computer programming"_) to describe the process of finding and deleting _Glossary("object", "objects"_) which are no longer being _Glossary("object reference", "referenced"_) by other objects.

In other words, garbage collection is the process of removing any objects which are not being used by any other objects. Often abbreviated "GC," garbage collection is a fundamental component of the [memory management](/en-US/docs/Web/JavaScript/Memory_Management) system used by _Glossary("JavaScript"_).

#### See also

- _interwiki("wikipedia", "Memory management"_) on Wikipedia
- _interwiki("wikipedia", "Garbage collection (computer science)"_) on Wikipedia
- [Garbage collection](/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection) in the MDN JavaScript guide.
- [Memory management in JavaScript](/en-US/docs/Web/JavaScript/Memory_Management)

---


## Term:  Gecko
  - Firefox OS
  - Gecko
  - Glossary
  - Infrastructure
  - Intro
  - Mozilla
---


> **Gecko** is the layout engine developed by the Mozilla Project and used in many apps/devices, including _glossary("Mozilla Firefox","Firefox"_) and _glossary("Firefox OS"_).

Web _glossary("browser","browsers"_) need software called a layout engine to interpret _glossary("HTML"_), _glossary("CSS"_), _glossary("JavaScript"_), and embedded content (like images) and draw everything to your screen. Besides this, Gecko makes sure associated _glossary("API","APIs"_) work well on every operating system Gecko supports, and that appropriate APIs are exposed only to relevant support targets. This means that Gecko includes, among other things, a networking stack, graphics stack, layout engine, a JavaScript virtual machine, and porting layers.

Since all Firefox OS apps are Web apps, Firefox OS uses Gecko as its app runtime as well.

#### See also

- _interwiki("wikipedia", "Gecko (software)", "Gecko"_) on Wikipedia

---


## Term:  General header
  - Glossary
  - WebMechanics
---


> **General header** is an outdated term used to refer to an _glossary('HTTP_header', 'HTTP header'_) that can be used in both request and response messages, but which doesn't apply to the content itself (a header that applied to the content was called an _glossary("entity header"_)). Depending on the context they are used in, general headers might either be _glossary("Response header", "response"_) or _glossary("request header", "request headers"_) (e.g. _HTTPheader("Cache-Control"_)).

> **Note:** Current versions of the HTTP/1.1 specification do not specifically categorize headers as "general headers". These are now simply refered to as _glossary("Response header", "response"_) or _glossary("request header", "request headers"_) depending on context.

---


## Term:  GIF
  - Composing
  - Glossary
---


> GIF (Graphics Interchange Format) is an image format that uses lossless compression and can be used for animations. A GIF uses up to 8 bits per pixel and a maximum of 256 colors from the 24-bit color space.

#### See also

- _Interwiki("wikipedia", "GIF"_) on Wikipedia

---


## Term:  Git
  - Collaborating
  - Glossary
---


> **Git** is a free, open-source, distributed Source Code Management (_Glossary("SCM", "SCM", 1_)) system. It facilitates handling code bases with distributed development teams. What sets it apart from previous SCM systems is the ability to do common operations (branching, committing, etc.) on your local development machine, without having to change the master repository or even having write access to it.

#### See also

- [Official website with documentation](https://git-scm.com/)
- [GitHub](https://github.com/), a Git-based graphical project host

---


## Term:  Global object
  - CodingScripting
  - Glossary
  - NeedsContent
---


> A global object is an _glossary("object"_) that always exists in the _glossary("global scope"_).

In JavaScript, there's always a global object defined. In a web browser, when scripts create global variables defined with the [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) keyword, they're created as members of the global object. (In _Glossary("Node.js"_) this is not the case.) The global object's _Glossary("interface"_) depends on the execution context in which the script is running. For example:

- In a web browser, any code which the script doesn't specifically start up as a background task has a _domxref("Window"_) as its global object. This is the vast majority of JavaScript code on the Web.
- Code running in a _domxref("Worker"_) has a _domxref("WorkerGlobalScope"_) object as its global object.
- Scripts running under _Glossary("Node.js"_) have an object called [`global`](https://nodejs.org/api/globals.html#globals_global) as their global object.

> **Note**: Unlike _jsxref("Statements/var", "var"_), the statements _jsxref("Statements/let", "let"_) and _jsxref("Statements/const", "const"_) do not create properties of the global object.

## `window` object in the Browser

The `window` object is the Global Object in the Browser. Any Global Variables or Functions can be accessed as _properties_ of the `window` object.

### Access Global Variables

```js
var foo = "foobar";
foo === window.foo; // Returns: true
```

After defining a Global Variable `foo`, we can access its value directly from the `window` object, by using the variable name `foo` as a property name of the Global Object `window.foo`.

#### Explanation:

The global variable `foo` was stored in the `window` object, like this:

```js
foo: "foobar"
```

### Access Global Functions

```js
function greeting() {
   console.log("Hi!");
}

window.greeting(); // It is the same as the normal invoking: greeting();
```

The example above explains how Global Functions are stored as _properties_ in the `window` object. We created a Global Function called `greeting`, then invoked it using the `window` object.

#### Explanation:

The global function `greeting` was stored in the `window` object, like this:

```js
greeting: function greeting() {
   console.log("Hi!");
}
```

#### See also

- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _glossary("global scope"_)
  - _glossary("object"_)

- _domxref("Window"_)
- _domxref("WorkerGlobalScope"_)
- [`global`](https://nodejs.org/api/globals.html#globals_global)

---


## Term:  Global scope
  - CodingScripting
  - Glossary
  - NeedsContent
---


> In a programming environment, the _global scope_ is the _glossary("scope"_) that contains, and is visible in, all other scopes.

In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.

#### See also

- [Introduction to variable scope in JavaScript](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope)
- _interwiki("wikipedia", "Scope (computer science)", "Scope"_) on Wikipedia

---


## Term:  Global variable
  - CodingScripting
  - Glossary
---


> A global variable is a _glossary("variable"_) that is declared in the _glossary("global scope"_) in other words, a variable that is visible from all other scopes.

In JavaScript it is a _glossary("property"_) of the _glossary("global object"_).

#### See also

- _Interwiki("wikipedia", "Global variable"_) on Wikipedia

---


## Term:  Glyph
  - Glossary
  - SVG
  - typography
---


> A **glyph** is a term used in typography for the visual representation of one or more _Glossary("character", "characters"_).

The fonts used by a website contain different sets of glyphs, which represent the characters of the font.

#### See also

- [Glyph](https://en.wikipedia.org/wiki/Glyph) on Wikipedia
- [Glyph, character and grapheme](https://www.quora.com/Whats-the-difference-between-a-character-a-glyph-and-a-grapheme/answer/Thomas-Phinney) on Quora

---


## Term:  Google Chrome
  - Browser
  - Chrome canary
  - Chrome stable
  - Chromium
  - Glossary
  - WebMechanics
  - google chrome
---


> Google Chrome is a free Web _glossary("browser"_) developed by Google. It's based on the [Chromium](https://www.chromium.org/) open source project. Some key differences are described on the [Chromium wiki](https://code.google.com/p/chromium/wiki/ChromiumBrowserVsGoogleChrome). Chrome supports its own layout called _glossary("Blink"_). Note that the iOS version of Chrome uses that platform's WebView, not Blink.

#### See also

- _interwiki("wikipedia", "Google Chrome", "Google Chrome"_) on Wikipedia

### For Chrome Users

Use one of these links if you're an everyday user.

- [Android](https://play.google.com/store/apps/details?id=com.android.chrome)
- [iOS](https://apps.apple.com/us/app/chrome-web-browser-by-google/id535886823)
- [Desktop](https://www.google.com/chrome/)

### For Web Developers

If you want to try the latest Chrome features, install one of the pre-stable builds. Google pushes updates frequently and has designed the distributions to run side-by-side with the stable version. Visit the [Chrome Releases Blog](https://chromereleases.googleblog.com) to learn what's new.

- [Chrome Dev for Android](https://play.google.com/store/apps/details?id=com.chrome.dev)
- [Chrome Canary for desktop](https://www.google.com/chrome/browser/canary.html).

---


## Term:  GPL
  - GPL
  - Glossary
  - License
  - OpenPractices
  - Remixing
  - Sharing
---


> The (GNU) GPL (General Public License) is a _Glossary("copyleft"_) free software license published by the Free Software Foundation. Users of a GPL-licensed program are granted the freedom to use it, read the source code, modify it and redistribute the changes they made, provided they redistribute the program (modified or unmodified) under the same license.

#### See also

- [FAQ](https://www.gnu.org/licenses/gpl-faq.html) on GNU licenses
- [GNU GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License) on Wikipedia
- [GPL License](https://gnu.org/licenses/gpl.html) text

---


## Term:  GPU
  - Glossary
  - Graphics
  - Infrastructure
---


> The GPU (Graphics Processing Unit) is a computer component similar to the CPU (Central Processing Unit). It specializes in the drawing of graphics (both 2D and 3D) on your monitor.

---


## Term:  Graceful degradation
  - Design
  - Glossary
  - graceful degradation
---


> **Graceful degradation** is a design philosophy that centers around trying to build a modern web site/application that will work in the newest browsers, but falls back to an experience that while not as good still delivers essential content and functionality in older browsers.

_Glossary("Polyfill","Polyfills"_) can be used to build in missing features with JavaScript, but acceptable alternatives to features like styling and layout should be provided where possible, for example by using the CSS cascade, or HTML fallback behavior. Some good examples can be found in [Handling common HTML and CSS problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS).

It is a useful technique that allows Web developers to focus on developing the best possible websites, given that those websites are accessed by multiple unknown user-agents. _Glossary("Progressive enhancement"_) is related but different — often seen as going in the opposite direction to graceful degradation. In reality both approaches are valid and can often complement one another.

#### See also

- _Interwiki("wikipedia", "Graceful degradation"_) on Wikipedia
- [Handling common HTML and CSS problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Implementing feature detection](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("Graceful degradation"_)
  - _Glossary("Polyfill"_)
  - _Glossary("Progressive enhancement"_)

---


## Term:  Grid Areas
  - CSS
  - CSS Grids
  - Reference
---


> A **grid area** is one or more _glossary("grid cell", "grid cells"_) that make up a rectangular area on the grid. Grid areas are created when you place an item using [line-based placement](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) or when defining areas using [named grid areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas).

![Image showing a highlighted grid area](1_grid_area.png)

Grid areas _must_ be rectangular in nature; it is not possible to create, for example, a T- or L-shaped grid area.

## Example

In the example below I have a grid container with two grid items. I have named these with the _cssxref("grid-area"_) property and then laid them out on the grid using _cssxref("grid-template-areas"_). This creates two grid areas, one covering four grid cells, the other two.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
   <div class="item1">Item</div>
   <div class="item2">Item</div>
</div>
```

_ EmbedLiveSample('Example', '300', '280') }}

#### See also

### Property reference

- _cssxref("grid-template-columns"_)
- _cssxref("grid-template-rows"_)
- _cssxref("grid-auto-rows"_)
- _cssxref("grid-auto-columns"_)
- _cssxref("grid-template-areas"_)
- _cssxref("grid-area"_)

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS Grid Layout Guide: _[Grid template areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- [Definition of Grid Areas in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-area-concept)

---


## Term:  Grid Axis
  - CSS
  - CSS Grids
---


> CSS Grid Layout is a two-dimensional layout method enabling the laying out of content in _rows_ and _columns_. Therefore in any grid we have two axes. The _block or column axis_, and the _inline or row axis_.

It is along these axes that items can be aligned and justified using the properties defined in the [Box Alignment specification](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout).

In CSS the _block or column axis_ is the axis used when laying out blocks of text. If you have two paragraphs and are working in a right to left, top to bottom language they lay out one below the other, on the block axis.

![Diagram showing the block axis in CSS Grid Layout.](7_block_axis.png)

The _inline or row axis_ runs across the Block Axis and is the direction along which regular text flows. These are our rows in CSS Grid Layout.

![Diagram showing the inline axis in CSS Grid Layout.](7_inline_axis.png)

The physical direction of these axes can change according to the [writing mode](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes) of the document.

#### See also

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS Grid Layout Guide: _[Box alignment in Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- CSS Grid Layout Guide: _[Grids, logical values and writing modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)_

---


## Term:  Grid Cell
  - CSS Grids
---


> In a [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), a **grid cell** is the smallest unit you can have on your CSS grid. It is the space between four intersecting _glossary("grid lines"_) and conceptually much like a table cell.

![Diagram showing an individual cell on the grid.](1_grid_cell.png)

If you do not place items using one of the grid placement methods, direct children of the grid container will be placed one into each individual grid cell by the auto-placement algorithm. Additional row or column _glossary("grid tracks", "tracks"_) will be created to create enough cells to hold all items.

## Example

In the example we have created a three column track grid. The five items are placed into grid cells working along an initial row of three grid cells, then creating a new row for the remaining two.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 100px;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

_ EmbedLiveSample('Example', '300', '280') }}

#### See also

### Property reference

- _cssxref("grid-template-columns"_)
- _cssxref("grid-template-rows"_)
- _cssxref("grid-auto-rows"_)
- _cssxref("grid-auto-columns"_)

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- [Definition of Grid Cells in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-track-concept)

---


## Term:  Grid Column
  - CSS
  - CodingScripting
---


> A **grid column** is a vertical track in a [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), and is the space between two vertical grid lines. It is defined by the _cssxref("grid-template-columns"_) property or in the shorthand _cssxref("grid"_) or _cssxref("grid-template"_) properties.

In addition, columns may be created in the _implicit grid_ when items are placed outside of columns created in the _explicit grid_. These columns will be auto-sized by default, or can have a size specified with the _cssxref("grid-auto-columns"_) property.

When working with alignment in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), the axis down which columns run is known as the _block, or column, axis_.

#### See also

### Property reference

- _cssxref("grid-template-columns"_)
- _cssxref("grid-auto-columns"_)
- _cssxref("grid"_)
- _cssxref("grid-template"_)

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_

---


## Term:  Grid container
  - CSS
  - Glossary
  - grid
---


> Using the value `grid` or `inline-grid` on an element turns it into a **grid container** using [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), and any direct children of this element become grid items.

When an element becomes a grid container it establishes a **grid formatting context**. The direct children can now lay themselves out on any explicit grid defined using _cssxref("grid-template-columns"_) and _cssxref("grid-template-rows"_), or on the _implicit grid_ created when an item is placed outside of the _explicit grid_.

#### See also

### Property reference

- _cssxref("grid-template-columns"_)
- _cssxref("grid-template-rows"_)
- _cssxref("grid-auto-columns"_)
- _cssxref("grid-auto-rows"_)
- _cssxref("grid"_)
- _cssxref("grid-template"_)

### Further reading

- CSS Grid Layout guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_

---


## Term:  Grid Lines
  - CSS Grids
---


> **Grid lines** are created when you define _glossary("Grid tracks", "tracks"_) in the explicit grid using [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Example

In the following example there is a grid with three column tracks and two row tracks. This gives us 4 column lines and 3 row lines.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

_ EmbedLiveSample('Example', '500', '250') }}

Lines can be addressed using their line number. In a left-to-right language such as English, column line 1 will be on the left of the grid, row line 1 on the top. Lines numbers respect the [writing mode](/en-US/docs/Web/CSS/CSS_Writing_Modes) of the document and so in a right-to-left language for example, column line 1 will be on the right of the grid. The image below shows the line numbers of the grid, assuming the language is left-to-right.

![Diagram showing the grid with lines numbered.](1_diagram_numbered_grid_lines.png)

Lines are also created in the _implicit grid_ when implicit tracks are created to hold content positioned outside of the _explicit grid_, however these lines cannot be addressed by a number.

## Placing items onto the grid by line number

Having created a grid, you can place items onto the grid by line number. In the following example the item is positioned from column line 1 to column line 3, and from row line 1 to row line 3.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```html
<div class="wrapper">
   <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

_ EmbedLiveSample('Placing_items_onto_the_grid_by_line_number', '500', '250') }}

## Naming lines

The lines created in the _explicit grid_ can be named, by adding the name in square brackets before or after the track sizing information. When placing an item, you can then use these names instead of the line number, as demonstrated below.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```html
<div class="wrapper">
   <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
```

_ EmbedLiveSample('Naming_lines', '500', '250') }}

#### See also

### Property reference

- _cssxref("grid-template-columns"_)
- _cssxref("grid-template-rows"_)
- _cssxref("grid-column-start"_)
- _cssxref("grid-column-end"_)
- _cssxref("grid-column"_)
- _cssxref("grid-row-start"_)
- _cssxref("grid-row-end"_)
- _cssxref("grid-row"_)

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- CSS Grid Layout Guide: _[Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)_
- CSS Grid Layout Guide: _[CSS Grids, Logical Values and Writing Modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)_
- [Definition of Grid Lines in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-line-concept)

---


## Term:  Grid Row
  - CSS Grids
---


> A **grid row** is a horizontal track in a [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), that is the space between two horizontal grid lines. It is defined by the _cssxref("grid-template-rows"_) property or in the shorthand _cssxref("grid"_) or _cssxref("grid-template"_) properties.

In addition, rows may be created in the _implicit grid_ when items are placed outside of rows created in the _explicit grid_. These rows will be auto sized by default, or can have a size specified with the _cssxref("grid-auto-rows"_) property.

When working with alignment in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), the axis along which rows run is known as the _inline, or row, axis_.

#### See also

### Property reference

- _cssxref("grid-template-rows"_)
- _cssxref("grid-auto-rows"_)
- _cssxref("grid"_)
- _cssxref("grid-template"_)

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_

---


## Term:  Grid Tracks
  - CSS Grids
---


> A **grid track** is the space between two adjacent _glossary("grid lines"_). They are defined in the _explicit grid_ by using the _cssxref("grid-template-columns"_) and _cssxref("grid-template-rows"_) properties or the shorthand _cssxref("grid"_) or _cssxref("grid-template"_) properties. Tracks are also created in the _implicit grid_ by positioning a grid item outside of the tracks created in the explicit grid.

The image below shows the first row track on a grid.

![Diagram showing a grid track.](1_grid_track.png)

## Track sizing in the explicit grid

When defining grid tracks using _cssxref("grid-template-columns"_) and _cssxref("grid-template-rows"_) you may use any length unit, and also the flex unit, `fr` which indicates a portion of the available space in the grid container.

## Example

The example below demonstrates a grid with three column tracks, one of 200 pixels, the second of 1fr, the third of 3fr. Once the 200 pixels has been subtracted from the space available in the grid container, the remaining space is divided by 4. One part is given to column 2, 3 parts to column 3.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 1fr 3fr;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

_ EmbedLiveSample('Example', '500', '230') }}

## Track sizing in the implicit grid

Tracks created in the implicit grid are auto-sized by default, however you can define a size for these tracks using the _cssxref("grid-auto-rows"_) and _cssxref("grid-auto-columns"_) properties.

#### See also

- [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Definition of Grid Tracks in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-track-concept)
- Property reference

  - _cssxref("grid-template-columns"_)
  - _cssxref("grid-template-rows"_)
  - _cssxref("grid"_)
  - _cssxref("grid-template"_)

---


## Term:  Grid
  - CSS
  - CSS Grid
  - Glossary
---


> A _CSS grid_ is defined using the `grid` value of the _cssxref("display"_) property; you can define columns and rows on your grid using the _cssxref("grid-template-rows"_) and _cssxref("grid-template-columns"_) properties.

The grid that you define using these properties is described as an _explicit grid_.

If you place content outside of this explicit grid, or if you are relying on auto-placement and the grid algorithm needs to create additional row or column _glossary("grid tracks", "tracks"_) to hold _glossary("grid item", "grid items"_), then extra tracks will be created in the implicit grid. The _implicit grid_ is the grid created automatically due to content being added outside of the tracks defined.

In the example below I have created an _explicit grid_ of three columns and two rows. The _third_ row on the grid is an _implicit grid_ row track, formed due to their being more than the six items which fill the explicit tracks.

## Example

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
   <div>Six</div>
   <div>Seven</div>
   <div>Eight</div>
</div>
```

_ EmbedLiveSample('Example', '500', '330') }}

#### See also

- [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- Property reference:

  - _cssxref("grid-template-columns"_)
  - _cssxref("grid-template-rows"_)
  - _cssxref("grid"_)
  - _cssxref("grid-template"_)

---


## Term:  Guard
  - API
  - CodingScripting
  - Glossary
  - guard
---


> Guard is a feature of _domxref("Headers"_) objects (as defined in the _domxref("Fetch_API","Fetch spec"_), which affects whether methods such as _domxref("Headers.set","set()"_) and _domxref("Headers.append","append()"_) can change the header's contents. For example, `immutable` guard means that headers can't be changed. For more information, read [Fetch basic concepts: guard](/en-US/docs/Web/API/Fetch_API/Basic_concepts#guard).

---


## Term:  Gutters
  - CSS Grids
---


> **Gutters** or _alleys_ are spacing between content tracks. These can be created in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout) using the _cssxref("column-gap"_), _cssxref("row-gap"_), or _cssxref("gap"_) properties.

## Example

In the example below we have a three-column and two-row track grid, with 20-pixel gaps between column tracks and `20px`-gaps between row tracks.

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #fff8f8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1.2fr);
  grid-auto-rows: 45%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

_ EmbedLiveSample('Example', '300', '280') }}

In terms of grid sizing, gaps act as if they were a regular grid track however nothing can be placed into the gap. The gap acts as if the grid line at that location has gained extra size, so any grid item placed after that line begins at the end of the gap.

The grid-gap properties are not the only thing that can cause tracks to space out. Margins, padding or the use of the space distribution properties in [Box Alignment](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) can all contribute to the visible gap – therefore the grid-gap properties should not be seen as equal to “the gutter size” unless you know that your design has not introduced any additional space with one of these methods.

#### See also

### Property reference

- _cssxref("column-gap"_)
- _cssxref("row-gap"_)
- _cssxref("gap"_)

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- [Definition of gutters in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#gutters)

---


## Term:  gzip compression
  - Glossary
  - compression
  - gzip
---


> gzip is a file format used for file compression and decompression. It is based on the Deflate algorithm that allows files to be made smaller in size which allows for faster network transfers. gzip is commonly supported by web servers and modern browsers, meaning that servers can automatically compress files with gzip before sending them, and browsers can uncompress files upon receiving them.

#### See also

- [The gzip home page](http://www.gzip.org/)
- [gzip on Wikipedia](https://en.wikipedia.org/wiki/Gzip)

---


## Term:  Hash
  - CodingScripting
  - Cryptography
  - Glossary
  - Hash
---


> The hash function takes a variable-length message input and produces a fixed-length hash output. It is commonly in the form of a 128-bit "fingerprint" or "message digest". Hashes are very useful for _glossary("cryptography"_) — they insure the integrity of transmitted data, and provide the basis for _glossary("HMAC"_), which enables message authentication.

#### See also

- _Interwiki("wikipedia", "Hash function"_) on Wikipedia

---


## Term:  Head
  - CodingScripting
  - Glossary
  - HTML
  - head
  - metadata
---


> The **Head** is the part of an _glossary("HTML"_) document that contains _glossary("metadata"_) about that document, such as author, description, and links to _glossary("CSS"_) or _glossary("JavaScript"_) files that should be applied to the HTML.

#### See also

- _htmlelement("head"_) element reference on MDN
- [The HTML \<head>](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) on the MDN Learning Area

---


## Term:  High-level programming language
  - CodingScripting
  - Glossary
---


> A high-level programming language has a **significant abstraction** from the details of computer operation. It is designed to be easily understood by humans and for this reason they must be translated by another software. Unlike low-level programming languages, it may use natural language elements, or may automate (or even entirely hide) significant areas of computing systems, making the process of developing simpler and more understandable relative to a lower-level language. The amount of abstraction provided defines how "high-level" a programming language is.

The idea of a language automatically translatable into machine code, but nearer to human logic, was introduced in computer science in the 1950s, especially thanks to the work of **John Backus** (IBM), to whom it owes the first high-level language to have been widely circulated: Fortran. For this innovation Backus received the Turing prize.

---


## Term:  HMAC
  - Cryptography
  - Glossary
  - Hash
  - Security
---


> **Hash-based message authentication code**(_HMAC_) is a protocol used for _Glossary("cryptography", "cryptographically"_) authenticating messages.

It can use any kind of _Glossary("Cryptographic hash function", "cryptographic functions"_), and its strength depends on the underlying function (SHA1 or MD5 for instance), and the chosen secret key. With such a combination, the HMAC verification _Glossary("Algorithm", "algorithm"_) is then known with a compound name such as HMAC-SHA1.

HMAC is used to ensure both integrity and authentication.

#### See also

- _Interwiki("wikipedia", "Hash-based message authentication code", "HMAC"_) on Wikipedia
- [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt) on IETF

---


## Term:  Hoisting
  - CodingScripting
  - Glossary
  - JavaScript
---


> JavaScript **Hoisting** refers to the process whereby the interpreter appears to move the _declaration_ of functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.

Variable and class _declarations_ are also hoisted, so they too can be referenced before they are declared.
Note that doing so can lead to unexpected errors, and is not generally recommended.

> **Note:** The term hoisting is not used in any normative specification prose prior to [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/index.html).
> Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript.


## Function hoisting

One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

```js
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/
```

Without hoisting you would _have_ to write the same code like this:

```js
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");
/*
The result of the code above is the same: "My cat's name is Tiger"
*/
```


## Variable hoisting

Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

However JavaScript only hoists declarations, not initializations!
This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line.

Until that point in the execution is reached the variable has its _default_ initialization (`undefined` for a variable declared using `var`, otherwise uninitialized).

> **Note:** Conceptually variable hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code".

Below are some examples showing what can happen if you use a variable before it is declared.

### `var` hoisting

Here we declare then initialize the value of a `var` after using it.
The default initialization of the `var` is `undefined`.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
```

The same thing happens if we declare and initialize the variable in the same line.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.
```

If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted.
Trying to read the variable before it is initialized results in `ReferenceError` exception.

```js
console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num = 6; // Initialization
```

Note however that initialization also causes declaration (if not already declared).
The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.

```js
a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'
```

### `let` and `const` hoisting

Variables declared with `let` and `const` are also hoisted but, unlike `var`, are not initialized with a default value.
An exception will be thrown if a variable declared with `let` or `const` is read before it is initialized.

```js
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization
```

Note that it is the order in which code is _executed_ that matters, not the order in which it is written in the source file.
The code will succeed provided the line that initializes the variable is executed before any line that reads it.

For information and examples see [`let` > temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).


## `class` hoisting

Classes defined using a [class declaration](/en-US/docs/Web/JavaScript/Reference/Classes#class_declarations) are hoisted, which means that JavaScript has a reference to the class.
However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a `ReferenceError`.


## Function and class expression hoisting

[Function expressions](/en-US/docs/Web/JavaScript/Reference/Operators/function) and [class expressions](/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions) are not hoisted.

The expressions evaluate to a function or class (respectively), which are typically assigned to a variable.
In this case the variable declaration is hoisted and the expression is its initialization.
Therefore the expressions are not evaluated until the relevant line is executed.


#### See also

- [`var` statement](/en-US/docs/Web/JavaScript/Reference/Statements/var) — MDN
- [`let` statement](/en-US/docs/Web/JavaScript/Reference/Statements/let) — MDN
- [`const` statement](/en-US/docs/Web/JavaScript/Reference/Statements/const) — MDN
- [`function` statement](/en-US/docs/Web/JavaScript/Reference/Statements/function) — MDN

---


## Term:  Host
  - Glossary
  - Intermediate
  - Web
  - WebMechanics
---


> A host is a device connected to the _glossary("Internet"_) (or a local network). Some hosts called _glossary("server","servers"_) offer additional services like serving webpages or storing files and emails.

The host doesn't need to be a hardware instance. It can be generated by virtual machines. The host generated by virtual machines is called "Virtual hosting".

#### See also

- _interwiki("wikipedia", "Host (network)", "Host"_) on Wikipedia

---


## Term:  Hotlink
  - Glossary
  - WebMechanics
---


> A **hotlink** (also known as an **inline link**) is an object (typically an image) directly linked to from another site. For example, an image hosted on site1.com is shown directly on site2.com.

The practice is often frowned upon as it can cause unwanted bandwidth usage on the website hosting the linked-to object, and copyright concerns — it is considered stealing when it is done without permission.

#### See also

- _Interwiki("wikipedia", "Inline linking", "Hotlink"_) on Wikipedia
- _glossary("Hyperlink"_) (Glossary)

---


## Term:  Houdini
  - CSS
  - CSS API
  - Glossary
  - Houdini
  - Reference
---


> Houdini is a set of low level APIs that give developers the power to extend CSS, providing the ability to hook into the styling and layout process of a browser’s rendering engine. Houdini gives developers access to the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) ([CSSOM](/en-US/docs/Glossary/CSSOM)), enabling developers to write code the browser can parse as CSS.

The benefit of Houdini is that developers can create CSS features without waiting for web standards specifications to define them and without waiting for every browser to fully implement the features.

While many of the features Houdini enables can be created with JavaScript, interacting directly with the CSSOM before JavaScript is enabled provides for faster parse times. Browsers create the CSSOM —  including layout, paint, and composite processes — before applying any style updates found in scripts: layout, paint, and composite processes are repeated for updated JavaScript styles to be implemented. Houdini code doesn't wait for that first rendering cycle to be complete. Rather, it is included in that first cycle, creating renderable, understandable styles.

#### See also

- [Houdini](/en-US/docs/Web/Houdini)
- [CSSOM](/en-US/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API)

---


## Term:  HPKP
  - Glossary
  - Security
---


> **HTTP Public Key Pinning** (**HPKP**) is a security feature that tells a web client to associate a specific cryptographic public key with a certain web server to decrease the risk of _Glossary("MITM"_) attacks with forged certificates.

#### See also

- _HTTPHeader("Public-Key-Pins"_)
- _HTTPHeader("Public-Key-Pins-Report-Only"_)
- [RFC 7469](https://datatracker.ietf.org/doc/html/rfc7469)
- Wikipedia: [HTTP Public Key Pinning](https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning)

---


## Term:  HSTS
  - HTTP
  - Security
---


> **HTTP Strict Transport Security** lets a web site inform the browser that it should never load the site using HTTP and should automatically convert all attempts to access the site using HTTP to HTTPS requests instead. It consists in one HTTP header, _HTTPHeader("Strict-Transport-Security"_), sent by the server with the resource.

In other words, it tells the browser that changing the protocol from HTTP to HTTPS in a URL  works (and is more secure) and asks the browser to do it for every request.

#### See also

- _HTTPHeader("Strict-Transport-Security"_)
- OWASP Article: [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
- Wikipedia: _interwiki("wikipedia", "HTTP Strict Transport Security"_)

---


## Term:  HTML5
  - CodingScripting
  - Glossary
  - HTML
  - HTML5
  - Markup
---


> The term HTML5 is essentially a buzzword that refers to a set of modern web technologies. This includes the _Glossary("HTML"_) Living Standard, along with _glossary("JavaScript"_) _glossary("API","APIs"_) to enhance storage, multimedia, and hardware access.

You may sometimes hear about "new HTML5 elements", or find HTML5 described as a new version of HTML. HTML5 was the successor to previous HTML versions and introduced new elements and capabilities to the language on top of the previous version, HTML 4.01, as well as improving or removing some existing functionality. However, as a Living Standard HTML now has no version. The up-to-date specification can be found at [html.spec.whatwg.org/](https://html.spec.whatwg.org/).

Any modern site should use the [HTML doctype](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#doctype) — this will ensure that you are using the latest version of HTML.

> **Note:** Until 2019, the _glossary("W3C"_) published a competing HTML5 standard with version numbers. Since [28 May 2019](https://www.w3.org/blog/news/archives/7753), the WHATWG Living Standard was announced by the W3C as the sole version of HTML.

#### See also

- [our HTML documentation](/en-US/docs/Web/HTML)
- [HTML beginner's learning guides](/en-US/docs/Learn/HTML)
- [Web APIs](/en-US/docs/Web/API)

---


## Term:  HTML
  - CodingScripting
  - Glossary
  - HTML
  - l10n:priority
---


> **HTML** (HyperText Markup Language) is a descriptive language that specifies webpage structure.

## Brief history

In 1990, as part of his vision of the _Glossary("World Wide Web","Web"_), Tim Berners-Lee defined the concept of _Glossary("hypertext"_), which Berners-Lee formalized the following year through a markup mainly based on _Glossary("SGML"_). The _Glossary("IETF"_) began formally specifying HTML in 1993, and after several drafts released version 2.0 in 1995. In 1994 Berners-Lee founded the _Glossary("W3C"_) to develop the Web. In 1996, the W3C took over the HTML work and published the HTML 3.2 recommendation a year later. HTML 4.0 was released in 1999 and became an _Glossary("ISO"_) standard in 2000.

At that time, the W3C nearly abandoned HTML in favor of _Glossary("XHTML"_), prompting the founding of an independent group called _Glossary("WHATWG"_) in 2004. Thanks to WHATWG, work on _Glossary("HTML5"_) continued: the two organizations released the first draft in 2008 and the final standard in 2014.

## Concept and syntax



![Detail of the structure of an HTML element](anatomy-of-an-html-element.png)

An HTML file is normally saved with an `.htm` or `.html` extension, served by a _Glossary("Server","web server"_), and can be rendered by any _Glossary("Browser","Web browser"_).

#### See also

- _interwiki("wikipedia", "HTML", "HTML"_) on Wikipedia
- [Our HTML tutorial](/en-US/docs/Learn/HTML)
- [The web course on codecademy.com](https://www.codecademy.com/learn/learn-html)
- [The HTML documentation on MDN](/en-US/docs/Web/HTML)
- [The HTML specification](https://www.w3.org/TR/html5/)

---


## Term:  HTTP/2
  - Glossary
  - HTTP
  - Infrastructure
  - Reference
  - Web Performance
  - l10n:priority
---


> **HTTP/2** is a major revision of the [HTTP network protocol](/en-US/docs/Web/HTTP/Basics_of_HTTP).

The primary goals for HTTP/2 are to reduce _glossary("latency"_) by enabling full request and response multiplexing, minimize protocol overhead via efficient compression of HTTP header fields, and add support for request prioritization and server push.

HTTP/2 does not modify the application semantics of HTTP in any way. All the core concepts found in HTTP 1.1, such as HTTP methods, status codes, URIs, and header fields, remain in place. Instead, HTTP/2 modifies how the data is formatted (framed) and transported between the client and server, both of which manage the entire process, and hides application complexity within the new framing layer. As a result, all existing applications can be delivered without modification.

#### See also

- [HTTP on MDN](/en-US/docs/Web/HTTP)
- _interwiki("wikipedia", "HTTP/2", "HTTP/2"_) on Wikipedia
- [Glossary](/en-US/docs/Glossary)

  - _glossary("HTTP"_)
  - _glossary("Latency"_)

---


## Term:  HTTP/3
  - HTTP
  - Intro
  - NeedsContent
---


> **HTTP/3** is the upcoming major revision of the [HTTP network protocol](/en-US/docs/Web/HTTP/Basics_of_HTTP), succeeding _glossary("HTTP 2", "HTTP/2"_).

The major point of HTTP/3 is that it uses a new _glossary("UDP"_) protocol named QUIC, instead of _glossary("TCP"_).

#### See also

- [HTTP on MDN](/en-US/docs/Web/HTTP)
- _interwiki("wikipedia", "HTTP/3", "HTTP/3"_) on Wikipedia
- [Glossary](/en-US/docs/Glossary)

  - _glossary("HTTP"_)
  - _glossary("HTTP 2"_)
  - _glossary("Latency"_)

---


## Term:  HTTP header
  - Glossary
  - HTTP Header
  - WebMechanics
---


> An **HTTP header** is a field of an HTTP request or response that passes additional context and metadata about the request or response. For example, a request message can use headers to indicate it's preferred media formats, while a response can use header to indicate the media format of the returned body. Headers are case-insensitive, begin at the start of a line and are immediately followed by a `':'` and a header-dependent value. The value finishes at the next CRLF or at the end of the message.

The HTTP and Fetch specifications refer to a number of header categories, including:

- _Glossary("Request header"_): Headers containing more information about the resource to be fetched or about the client itself.
- _Glossary("Response header"_): Headers with additional information about the response, like its location or about the server itself (name, version, …).
- _Glossary("Representation header"_): metadata about the resource in the message body (e.g. encoding, media type, etc.).
- _Glossary("Fetch metadata request header"_): Headers with metadata about the resource in the message body (e.g. encoding, media type, etc.).

A basic request with one header:

```plain
GET /example.http HTTP/1.1
Host: example.com
```

Redirects have mandatory headers (_HTTPHeader("Location"_)):

```plain
302 Found
Location: /NewPage.html
```

A typical set of headers:

```plain
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```

> **Note:** Older versions of the specification referred to:
>
> - _Glossary("General header"_): Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.
> - _Glossary("Entity header"_): Headers containing more information about the body of the entity, like its content length or its MIME-type (this is a superset of what are now referred to as the Representation metadata headers)

#### See also

- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- Syntax of [headers](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in the HTTP specification
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("HTTP header"_)
  - _Glossary("Request header"_)
  - _Glossary("Response header"_)
  - _Glossary("Representation header"_)
  - _Glossary("Fetch metadata request header"_)
  - _Glossary("Forbidden header name"_)
  - _Glossary("Forbidden response header name"_)
  - _Glossary("CORS-safelisted request header"_)
  - _Glossary("CORS-safelisted response header"_)

---


## Term:  Safe (HTTP Methods)
  - Glossary
  - WebMechanics
---


> An HTTP method is **safe** if it doesn't alter the state of the server. In other words, a method is safe if it leads to a read-only operation. Several common HTTP methods are safe: _HTTPMethod("GET"_), _HTTPMethod("HEAD"_), or _HTTPMethod("OPTIONS"_). All safe methods are also _glossary("idempotent"_), but not all idempotent methods are safe. For example, _HTTPMethod("PUT"_) and _HTTPMethod("DELETE"_) are both idempotent but unsafe.

Even if safe methods have a read-only semantic, servers can alter their state: e.g. they can log or keep statistics. What is important here is that by calling a safe method, the client doesn't request any server change itself, and therefore won't create an unnecessary load or burden for the server. Browsers can call safe methods without fearing to cause any harm to the server; this allows them to perform activities like pre-fetching without risk. Web crawlers also rely on calling safe methods.

Safe methods don't need to serve static files only; a server can generate an answer to a safe method on-the-fly, as long as the generating script guarantees safety: it should not trigger external effects, like triggering an order in an e-commerce Web site.

It is the responsibility of the application on the server to implement the safe semantic correctly, the webserver itself, being Apache, Nginx or IIS, can't enforce it by itself. In particular, an application should not allow _HTTPMethod("GET"_) requests to alter its state.

A call to a safe method, not changing the state of the server:

    GET /pageX.html HTTP/1.1

A call to a non-safe method, that may change the state of the server:

    POST /pageX.html HTTP/1.1

A call to an idempotent but non-safe method:

    DELETE /idX/delete HTTP/1.1

#### See also

- Definition of [safe](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.1) in the HTTP specification.
- Description of common safe methods: _HTTPMethod("GET"_), _HTTPMethod("HEAD"_), _HTTPMethod("OPTIONS"_)
- Description of common unsafe methods: _HTTPMethod("PUT"_), _HTTPMethod("DELETE"_), _HTTPMethod("POST"_)

---


## Term:  HTTPS RR
  - Glossary
  - HTTPS
  - HTTPS RR
  - Infrastructure
  - Security
---


> **HTTPS RR** (**_HTTPS Resource Records_**) are a type of DNS record that delivers configuration information and parameters for how to access a service via _Glossary("HTTPS"_).

An _HTTPS RR_ can be used to optimize the process of connecting to a service using HTTPS.
Further, the presence of an _HTTPS RR_ signals that all useful _Glossary("HTTP"_) resources on the origin are reachable over HTTPS, which in turn means that a browser can safely upgrade connections to the domain from HTTP to HTTPS.

##### See also

- [Service binding and parameter specification via the DNS (DNS SVCB and HTTPS RRs)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-svcb-https/00/) (Draft IETF specification: draft-ietf-dnsop-svcb-https-00)
- [Strict Transport Security vs. HTTPS Resource Records: the showdown](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (Emily M. Stark blog)
- _glossary("SSL"_)
- _glossary("TLS"_)

---


## Term:  HTTPS
  - Glossary
  - HTTPS
  - Infrastructure
  - Security
---


> **HTTPS** (**_HyperText Transfer Protocol Secure_**) is an encrypted version of the _Glossary("HTTP"_) protocol. It uses _Glossary("SSL"_) or _Glossary("TLS"_) to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, such as when performing banking activities or online shopping.

#### See also

- _Interwiki("wikipedia", "HTTPS"_) on Wikipedia
- [Moving to HTTPS community guide](https://movingtohttps.com/)
- [Secure Contexts](/en-US/docs/Web/Security/Secure_Contexts)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _glossary("HTTP"_)
  - _glossary("SSL"_)
  - _glossary("TLS"_)

---


## Term:  Hyperlink
  - CodingScripting
  - Glossary
  - HTML
  - Navigation
---


> Hyperlinks connect webpages or data items to one another. In HTML, _HTMLElement("a"_) elements define hyperlinks from a spot on a webpage (like a text string or image) to another spot on some other webpage (or even on the same page).

#### See also

- _interwiki("wikipedia", "Hyperlink", "Hyperlink"_) on Wikipedia
- The [Hyperlink](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) guide on MDN
- [Links in HTML Documents - W3C](https://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html)
- [HTML5 a - hyperlink - W3C](https://w3c.github.io/html-reference/a.html)
- [`<a>` on MDN](/en-US/docs/Web/HTML/Element/a)
- [`<link>` on MDN](/en-US/docs/Web/HTML/Element/link)

---


## Term:  Hypertext
  - Glossary
  - Web
  - WebMechanics
---


> Hypertext is text that contains links to other texts, as opposed to a single linear flow like in a novel.

The term was coined by Ted Nelson around 1965.

#### See also

- _interwiki("wikipedia", "Hypertext", "Hypertext"_) on Wikipedia

---


## Term:  I18N
  - Beginner
  - Credibility
  - Glossary
  - Internationalization
  - OpenPractices
  - i18n
---


> i18n (from "internationalization", a 20-letter word) is the best practice that enables products or services to be readily adapted to any target culture.

> **Internationalization** is the design and development of a product, application or document content that **_enables_** easy localization for target audiences that vary in culture, region, or language. (The _Glossary("W3C"_) definition)

Among other things, i18n requires support for multiple

- character sets (usually via [Unicode](https://searchcio-midmarket.techtarget.com/definition/Unicode))
- units of measure (currency, °C/°F, km/miles, etc.)
- time and date formats
- keyboard layouts
- text directions

#### See also

- _interwiki("wikipedia", "Internationalization and localization", "i18n"_) on Wikipedia
- [i18n on W3C](https://www.w3.org/International/questions/qa-i18n.en#Internationalization)
- [i18n on gala-global.org](https://www.gala-global.org/what-internationalization)
- [i18n material on i18nguy.com](http://www.i18nguy.com/)

---


## Term:  IANA
  - Glossary
  - Infrastructure
---


> **IANA** (Internet Assigned Numbers Authority) is a subsidiary of _glossary("ICANN"_) charged with recording and/or assigning _glossary("domain name","domain names"_), _glossary("IP address","IP addresses"_), and other names and numbers used by Internet _glossary("protocol","protocols"_).

#### See also

- [Official website](https://www.iana.org/)
- _interwiki("wikipedia", "Internet Assigned Numbers Authority", "IANA"_) on Wikipedia

---


## Term:  ICANN
  - Glossary
  - Infrastructure
---


> **ICANN** (Internet Corporation for Assigned Names and Numbers) is an international nonprofit that maintains the _glossary("DNS","domain name system"_) and the record of _glossary("IP address","IP addresses"_).

#### See also

- [Official website](https://www.icann.org/)
- _interwiki("wikipedia", "ICANN", "ICANN"_) on Wikipedia

---


## Term:  ICE
  - CodingScripting
  - Glossary
  - Networking
  - Protocols
  - WebRTC
---


> **ICE** (_Interactive Connectivity Establishment_) is a framework used by _glossary("WebRTC"_) (among other technologies) for connecting two peers, regardless of network topology (usually for audio and video chat). This protocol lets two peers find and establish a connection with one another even though they may both be using Network Address Translator (_glossary("NAT"_)) to share a global IP address with other devices on their respective local networks.

The framework algorithm looks for the lowest-latency path for connecting the two peers, trying these options in order:

1.  Direct UDP connection (In this case—and only this case—a _glossary("STUN"_) server is used to find the network-facing address of a peer)
2.  Direct TCP connection, via the HTTP port
3.  Direct TCP connection, via the HTTPS port
4.  Indirect connection via a relay/_glossary("TURN"_) server (if a direct connection fails, e.g., if one peer is behind a firewall that blocks NAT traversal)

#### See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API), the principal web-related protocol which uses ICE
- [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- _rfc("5245"_), the IETF specification for ICE
- _domxref("RTCIceCandidate"_), the interface representing a ICE candidate

---


## Term:  IDE
  - CodingScripting
  - Glossary
---


> An Integrated Development Environment (**IDE**) or Interactive Development environment is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of a source code editor, build automation tools and a debugger.

#### See also

- _interwiki("wikipedia", "Integrated_development_environment", "IDE"_) on Wikipedia

---


## Term:  Idempotent
  - Glossary
  - WebMechanics
---


> An HTTP method is **idempotent** if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state. In other words, an idempotent method should not have any side-effects (except for keeping statistics). Implemented correctly, the _HTTPMethod("GET"_), _HTTPMethod("HEAD"_), _HTTPMethod("PUT"_), and _HTTPMethod("DELETE"_) methods are **idempotent**, but not the _HTTPMethod("POST"_) method. All _glossary("Safe/HTTP", "safe"_) methods are also idempotent.

To be idempotent, only the actual back-end state of the server is considered, the status code returned by each request may differ: the first call of a _HTTPMethod("DELETE"_) will likely return a _HTTPStatus("200"_), while successive ones will likely return a _HTTPStatus("404"_). Another implication of _HTTPMethod("DELETE"_) being idempotent is that developers should not implement RESTful APIs with a _delete last entry_ functionality using the `DELETE` method.

Note that the idempotence of a method is not guaranteed by the server and some applications may incorrectly break the idempotence constraint.

`GET /pageX HTTP/1.1` is idempotent. Called several times in a row, the client gets the same results:

    GET /pageX HTTP/1.1
    GET /pageX HTTP/1.1
    GET /pageX HTTP/1.1
    GET /pageX HTTP/1.1

`POST /add_row HTTP/1.1` is not idempotent; if it is called several times, it adds several rows:

    POST /add_row HTTP/1.1
    POST /add_row HTTP/1.1   -> Adds a 2nd row
    POST /add_row HTTP/1.1   -> Adds a 3rd row

`DELETE /idX/delete HTTP/1.1` is idempotent, even if the returned status code may change between requests:

    DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
    DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
    DELETE /idX/delete HTTP/1.1   -> Returns 404

#### See also

- Definition of [idempotent](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.2) in the HTTP specification.
- Description of common idempotent methods: _HTTPMethod("GET"_), _HTTPMethod("HEAD"_), _HTTPMethod("PUT"_), _HTTPMethod("DELETE"_), _HTTPMethod("OPTIONS"_), _HTTPMethod("TRACE"_)
- Description of common non-idempotent methods: _HTTPMethod("POST"_),_HTTPMethod("PATCH"_), _HTTPMethod("CONNECT"_)

---


## Term:  Identifier
  - Beginner
  - CodingScripting
  - Glossary
  - Sharing
---


> An **identifier** is a sequence of characters in the code that identifies a _glossary("variable"_), _glossary("function"_), or _glossary("property"_).

In _glossary("JavaScript"_), identifiers are case-sensitive and can contain _glossary("Unicode"_) letters, `$`, `_`, and digits (0-9), but may not start with a digit.

An identifier differs from a string in that a _glossary("string"_) is data, while an identifier is part of the code. In JavaScript, there is no way to convert identifiers to strings, but sometimes it is possible to parse strings into identifiers.

#### See also

- _interwiki("wikipedia", "Identifier#In_computer_science", "Identifier"_) on Wikipedia
- [Glossary](/en-US/docs/Glossary)

  - _glossary("Identifier"_)
  - _glossary("Scope"_)
  - _glossary("string"_)
  - _glossary("Unicode"_)

---


## Term:  IDL
  - CodingScripting
  - Glossary
  - IDL
  - Interface description language
---


> An **IDL** (_Interface Description Language_) is a generic language used to specified objects' interfaces apart from any specific programming language.

## Content versus IDL attributes

In HTML, most attributes have two faces: the **content attribute** and the **IDL attribute**.

The content attribute is the attribute as you set it from the content (the HTML code) and you can set it or get it via _domxref("element.setAttribute()"_) or _domxref("element.getAttribute()"_). The content attribute is always a string even when the expected value should be an integer. For example, to set an _HTMLElement("input"_) element's `maxlength` to 42 using the content attribute, you have to call `setAttribute("maxlength", "42")` on that element.

The IDL attribute is also known as a JavaScript property. These are the attributes you can read or set using JavaScript properties like `element.foo`. The IDL attribute is always going to use (but might transform) the underlying content attribute to return a value when you get it and is going to save something in the content attribute when you set it. In other words, the IDL attributes, in essence, reflect the content attributes.

Most of the time, IDL attributes will return their values as they are really used. For example, the default `type` for _HTMLElement("input"_) elements is "text", so if you set `input.type="foobar"`, the `<input>` element will be of type text (in the appearance and the behavior) but the "type" content attribute's value will be "foobar". However, the `type` IDL attribute will return the string "text".

IDL attributes are not always strings; for example, `input.maxlength` is a number (a signed long). When using IDL attributes, you read or set values of the desired type, so `input.maxlength` is always going to return a number and when you set `input.maxlength`, it wants a number. If you pass another type, it is automatically converted to a number as specified by the standard JavaScript rules for type conversion.

IDL attributes can [reflect other types](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes) such as unsigned long, URLs, booleans, etc. Unfortunately, there are no clear rules and the way IDL attributes behave in conjunction with their corresponding content attributes depends on the attribute. Most of the time, it will follow [the rules laid out in the specification](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes), but sometimes it doesn't. HTML specifications try to make this as developer-friendly as possible, but for various reasons (mostly historical), some attributes behave oddly (`select.size`, for example) and you should read the specifications to understand how exactly they behave.

#### See also

- _interwiki("wikipedia", "Interface description language", "IDL"_) on Wikipedia
- [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
- [Interface Definition Language](https://www.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)

---


## Term:  IETF
  - Glossary
  - IETF
  - Infrastructure
  - Internet
---


> The Internet Engineering Task Force (**IETF**) is a worldwide organization that drafts _glossary('specification','specifications'_) governing the mechanisms behind the _glossary("Internet"_), especially the _glossary("TCP"_)/_glossary("IPv6","IP"_) or Internet _glossary("Protocol"_) Suite.

The IETF is open, run by volunteers, and sponsored by the [Internet Society](https://www.internetsociety.org/).

#### See also

- [Official website](https://www.ietf.org/)

---


## Term:  IIFE
  - CodingScripting
  - DesignPattern
  - Functions
  - Glossary
  - JavaScript
---


> An **IIFE** (Immediately Invoked Function Expression) is a _glossary("JavaScript"_) _glossary("function"_) that runs as soon as it is defined.
The name IIFE is promoted by Ben Alman in [his blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
(function () {
  statements
})();
```

It is a design pattern which is also known as a _glossary("Self-Executing Anonymous Function"_) and contains two major parts:

1.  The first is the anonymous function with lexical scope enclosed within the _jsxref("Operators/Grouping", "Grouping Operator"_) `()`. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2.  The second part creates the immediately invoked function expression `()` through which the JavaScript engine will directly interpret the function.

## Use cases

### Avoid polluting the global namespace

Because our application could include many functions and global variables from different source files, it's
important to limit the number of global variables. If we have some initiation code that we don't need to use
again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than
using a function declaration or a function expression.

```js
(function () {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
```

### The module pattern

We would also use IIFE to create private and public variables and methods. For a more sophisticated use of the module
pattern and other use of IIFE, you could see the book Learning JavaScript Design Patterns by Addy Osmani.

```js
const makeWithdraw = balance => (function(copyBalance) {
  let balance = copyBalance; // This variable is private
  let doBadThings = function() {
    console.log("I will do bad things with your money");
  };
  doBadThings();
  return {
    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient money";
      }
    },
  }
})(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20));  // 0
```

### For loop with var before ES6

We could see the following use of IIFE in some old code, before the introduction of the statements **let** and **const**
in **ES6** and the block scope. With the statement **var**, we have only function scopes and the global scope.
Suppose we want to create 2 buttons with the texts Button 0 and Button 1 and we click
them, we would like them to alert 0 and 1. The following code doesn't work:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = function () {
    alert(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

When clicked, both Button 0 and Button 1 alert 2 because `i` is global,
with the last value 2. To fix this problem before ES6, we could use the IIFE pattern:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = (function (copyOfI) {
    return function() {alert(copyOfI);};
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

When clicked, Buttons 0 and 1 alert 0 and 1.
The variable `i` is globally defined.
Using the statement **let**, we could simply do:

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = function () {
    alert(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

When clicked, these buttons alert 0 and 1.

#### See also

- [Quick example](/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions) (at the end of the "Functions" section, right before "Custom objects")
- _interwiki("wikipedia", "Immediately-invoked function expression", "IIFE"_) (Wikipedia)
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("Function"_)
  - _Glossary("Self-Executing Anonymous Function"_)

---


## Term:  IMAP
  - Beginner
  - Glossary
  - Infrastructure
  - MailNews
---


> IMAP (Internet Message Access Protocol) is a _Glossary("protocol"_) used to retrieve and store emails. More recent than _Glossary("POP"_), IMAP allows folders and rules on the server.

Unlike POP3, IMAP allows multiple simultaneous connections to one mailbox. Clients accessing a mailbox can receive information about state changes made from other clients. IMAP also provides a mode for clients to stay connected and receive information on demand.

Mark Crispin initially developed IMAP in 1986 as _Interim Mail Access Protocol_. IMAP4 revision 1 is the current version, defined by [RFC 3501](http://www.faqs.org/rfcs/rfc3501.html).

#### See also

- _RFC(3501_)
- _Glossary("POP"_)
- _interwiki("wikipedia", "Internet Message Access Protocol", "IMAP"_) on Wikipedia

---


## Term:  Immutable
  - CodingScripting
  - Glossary
---


> An immutable _glossary("object"_) is one whose content cannot be changed.
An object can be immutable for various reasons, for example:

- To improve performance (no planning for the object's future changes)
- To reduce memory use (make _glossary("object reference","object references"_) instead of cloning the whole object)
- Thread-safety (multiple threads can reference the same object without interfering with one other)

#### See also

- _interwiki("wikipedia", "Immutable object", "Immutable"_) on Wikipedia

---


## Term:  'MDN Web Docs Glossary: Definitions of Web-related terms'
  - Beginner
  - Definitions
  - Dictionary
  - Glossary
  - Index
  - Landing
  - Terminology
---


> Web technologies contain long lists of jargon and abbreviations that are used in documentation and coding. This glossary provides definitions of words and abbreviations you need to know to successfully understand and build for the web.

Glossary terms can be selected from the sidebar (or listed below on mobile devices and other narrow width screens).

> **Note:** This glossary is a never-ending work in progress. You can help improve it by [writing new entries](/en-US/docs/MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary) or by making the existing ones better.

_LearnBox({"title":"Learn a new word ..."}_)

<section id="Quick_links">
 <ol>
  <li><strong><a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a></strong>_ListSubpagesForSidebar("/en-us/docs/Glossary", 1_)</li>
 </ol>
</section>

---


## Term:  IndexedDB
  - API
  - CodingScripting
  - Database
  - Glossary
  - Sql
---


> IndexedDB is a Web _glossary("API"_) for storing large data structures within browsers and indexing them for high-performance searching. Like an _glossary("SQL"_)-based [RDBMS](https://en.wikipedia.org/wiki/Relational_database_management_system "Relational DataBase Management System"), IndexedDB is a transactional database system. However, it uses _glossary("JavaScript"_) objects rather than fixed columns tables to store data.

#### See also

- The _domxref('IndexedDB_API','IndexedDB API','',1_) on MDN
- [The W3C specification for IndexedDB](https://w3c.github.io/IndexedDB/)

---


## Term:  Index
  - Glossary
  - Index
  - MDN Meta
  - Navigation
---


> _Index("/en-US/docs/Glossary"_)

---


## Term:  Information architecture
  - Design
  - Glossary
  - information architecture
---


> Information architecture, as applied to web design and development, is the practice of organizing the information / content / functionality of a web site so that it presents the best user experience it can, with information and services being easily usable and findable.

#### See also

- _interwiki("wikipedia", "Information_architecture", "Information architecture"_) on Wikipedia

---


## Term:  Inheritance
  - CodingScripting
  - Glossary
  - Inheritance
  - Programming Language
---


> Inheritance is a major feature of _glossary("OOP","object-oriented programming"_).  Data abstraction can be carried up several levels, that is, _glossary("class","classes"_) can have superclasses and subclasses.

As an app developer, you can choose which of the superclass's _glossary("attribute","attributes"_) and _glossary("method","methods"_) to keep and add your own, making class definition very flexible. Some languages let a class inherit from more than one parent (multiple inheritance).

#### See also

- [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---


## Term:  Input method editor
  - Glossary
---


> An input method editor (IME) is a program that provides a specialized user interface for text input. Input method editors are used in many situations:

- to enter Chinese, Japanese, or Korean text using a Latin keyboard
- to enter Latin text using a numeric keypad
- to enter text on a touch screen using handwriting recognition

#### See also

- _Interwiki("wikipedia", "Input method"_)
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("I18N"_)

---


## Term:  Instance
  - Beginner
  - CodingScripting
  - Glossary
  - JavaScript
  - NeedsExample
  - OOP
---


> An _glossary("object"_) created by a _glossary("constructor"_) is an instance of that constructor.

#### See also

- _interwiki("wikipedia", "Instance (computer science)", "Instance"_) on Wikipedia

---


## Term:  Internationalization
  - Glossary
  - Internationalization
  - Reference
---


> **Internationalization**, often shortened to "[i18n](/en-US/docs/Glossary/I18N)", is the adapting of a web site or web application to different languages, regional differences, and technical requirements for different regions and countries. Internationalization is the process of architecting your web application so that it can be quickly and easily adapted to various languages and regions without much engineering effort when new languages and regions are supported. Also so that a user can browse features to translate or localize the application to access all the content without breaking the layout.

Internationalization includes support for multiple character sets (usually via [Unicode](https://searchcio-midmarket.techtarget.com/definition/Unicode)), units of measure ([currency](/en-US/docs/Web/API/PaymentCurrencyAmount), °C/°F, km/miles, etc.), date and time formats, keyboard layouts, and layout and text directions.

#### See also

- [Internationalization extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Internationalization API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and [Grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

---


## Term:  Internet
  - Beginner
  - Glossary
  - Guide
  - Intro
  - NeedsContent
  - Tutorial
  - Web
  - WebMechanics
---


> The Internet is a worldwide network of networks that uses the Internet protocol suite (also named _glossary("TCP"_)/_glossary("IPv6","IP"_) from its two most important _glossary("protocol","protocols"_)).

#### See also

- [How the Internet works](/en-US/docs/Learn/Common_questions/How_does_the_Internet_work) (introduction for beginners)

---


## Term:  Intrinsic size
  - CSS
  - Glossary
  - Intrinsic size
---


> In CSS, the _intrinsic size_ of an element is the size it would be based on its content, if no external factors were applied to it. For example, inline elements are sized intrinsically: `width`, `height`, and vertical margin and padding have no impact, though horizontal margin and padding do.

How intrinsic sizes are calculated is defined in the [CSS Intrinsic and Extrinsic Sizing Specification](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes).

Intrinsic sizing takes into account the `min-content` and `max-content` size of an element. For text the `min-content` size would be if the text wrapped as small as it can in the inline direction without causing an overflow, doing as much soft-wrapping as possible. For a box containing a string of text, the `min-content` size would be defined by the longest word. The keyword value of `min-content` for the _cssxref("width"_) property will size an element according to the `min-content` size.

The `max-content` size is the opposite — in the case of text, this would have the text display as wide as possible, doing no soft-wrapping, even if an overflow was caused. The keyword value `max-content` exposes this behavior.

For images the intrinsic size has the same meaning — it is the size that an image would be displayed if no CSS was applied to change the rendering. By default images are assumed to have a "1x" pixel density (1 device pixel = 1 CSS pixel) and so the intrinsic size is simply the pixel height and width. The intrinsic image size and resolution can be explicitly specified in the _Glossary("EXIF"_) data. The intrinsic pixel density may also be set for images using the _htmlattrxref("srcset", "img"_) attribute (note that if both mechanisms are used, the `srcset` value is applied "over" the EXIF value).

---


## Term:  IP Address
  - Beginner
  - Glossary
  - Infrastructure
  - Web
---


> An IP address is a number assigned to every device connected to a network that uses the Internet protocol.

"IP address" typically still refers to 32-bit IPv4 addresses until IPv6 is deployed more broadly.

#### See also

- _interwiki("wikipedia", "IP address", "IP address"_) on Wikipedia

---


## Term:  IPv4
  - Glossary
  - IPv4
  - Infrastructure
  - Internet Protocol
  - Protocol
---


> IPv4 is the fourth version of the communication _Glossary("protocol"_) underlying the _glossary("Internet"_) and the first version to be widely deployed.

First formalized in 1981, IPv4 traces its roots to the initial development work for ARPAnet. IPv4 is a connectionless protocol to be used on packet-switched Link layer networks (ethernet). _glossary("IPv6"_) is gradually replacing IPv4 owing to IPv4's security problems and the limitations of its address field. (Version number 5 was assigned in 1979 to the experimental Internet Stream Protocol, which however has never been called IPv5.)

#### See also

_interwiki("wikipedia", "IPv4", "IPv4"_) on Wikipedia

---


## Term:  IPv6
  - Glossary
  - IPv6
  - Infrastructure
  - Intermediate
  - Web
  - WebMechanics
---


> **IPv6** is the current version of the communication _glossary("protocol"_) underlying the _glossary("Internet"_). Slowly IPv6 is replacing _Glossary("IPv4"_), among other reasons because IPv6 allows for many different _Glossary("IP address","IP addresses"_).

#### See also

- _interwiki("wikipedia", "IPv6", "IPv6"_) on Wikipedia

---


## Term:  IRC
  - Glossary
  - Infrastructure
  - Internet Relay Chat
  - Open Protocol
  - irc
---


> **IRC** (_Internet Relay Chat_) is a worldwide chat system requiring an Internet connection and an IRC client, which sends and receives messages via the IRC server.

Designed in the late 1980s by Jarrko Oikarinen, IRC uses _glossary("TCP"_) and is an open protocol. The IRC server broadcasts messages to everyone connected to one of many IRC channels (each with their own ID).

---


## Term:  ISO
  - Glossary
  - ISO
  - Infrastructure
  - Web Standards
  - web specifications
---


> **ISO** (International Organization for Standardization) is a global association that develops uniform criteria coordinating the companies in each major industry.

#### See also

- [Official website](https://www.iso.org/iso/home.html)

---


## Term:  ISP
  - Glossary
  - ISP
  - Internet Service Provider
  - Web
  - WebMechanics
---


> An ISP (Internet Service Provider) sells Internet access, and sometimes email, web hosting, and voice over IP, either by a dial-up connection over a phone line (formerly more common), or through a broadband connection such as a cable modem or DSL service.

#### See also

- [How the Internet works](/en-US/docs/Learn/Common_questions/How_does_the_Internet_work) (explanation for beginners)
- _interwiki("wikipedia", "Internet service provider", "Internet service provider"_) on Wikipedia

---


## Term:  ITU
  - Glossary
  - ITU
  - Standardization
  - organization
---


> The International Telecommunication Union (ITU) is the organization authorized by the United Nations to establish standards and rules for telecommunication, including telegraph, radio, telephony and the internet.

From defining rules for ensuring transmissions get to where they need to go to and creating the "SOS" alert signal used in Morse code, the ITU has long played a key role in how we use technology to exchange information and ideas.

In the Internet Age, the ITU's role of establishing standards for video and audio data formats used for streaming, teleconferencing, and other purposes. For example, the ITU and the Moving Picture Experts Group (MPEG) worked together to develop and publish, as well as to maintain, the various MPEG specifications, such as MPEG-2 (ITU H.262), AVC (ITU H.264), and HEVC (ITU H.265).

#### See also

- [ITU web site](https://www.itu.int/)
- [ITU history portal](https://www.itu.int/en/history/Pages/ITUsHistory.aspx)

---


## Term:  Jank
  - Beginner
  - CodingScripting
  - Glossary
  - Performance
  - Web Performance
---


> 
---


## Term:  Java
  - CodingScripting
  - Glossary
  - Java
  - Programming Language
---


> Java is a _glossary("Compile", "compiled"_), _glossary("OOP", "object-oriented"_), highly portable _Glossary("computer programming", "programming"_) language.

Java is statically typed and features a similar syntax to C. It comes with a large library of readily usable functions, the Java Software Development Kit (SDK).

Programs are _glossary("Compile", "compiled"_) only once ahead of time into a proprietary byte code and package format that runs inside the Java Virtual Machine (JVM). The JVM is available across many platforms, which allows Java programs to run almost everywhere without the need to be compiled or packaged again. This makes it a preferred language in many large enterprises with heterogenous landscapes, but may be perceived "heavy".

#### See also

- _interwiki("wikipedia", "Java (programming language)", "Java"_) on Wikipedia

---


## Term:  JavaScript
  - CodingScripting
  - Glossary
  - JavaScript
  - l10n:priority
---


> ## Summary

JavaScript (or "JS") is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the _Glossary("Server","server"_)-side, using a runtime such as [Node.js](https://nodejs.org/).

JavaScript **should not** be confused with the _interwiki("wikipedia", "Java_(programming_language)", "Java programming language"_). Although _"Java"_ and _"JavaScript"_ are trademarks (or registered trademarks) of Oracle in the U.S. and other countries, the two programming languages are significantly different in their syntax, semantics, and use cases.

JavaScript is primarily used in the browser, enabling developers to manipulate webpage content through the _Glossary("DOM"_), manipulate data with _Glossary("AJAX"_) and _Glossary("IndexedDB"_), draw graphics with _Glossary("canvas"_), interact with the device running the browser through various _Glossary("API","APIs"_), and more. JavaScript is one of the world's most commonly-used languages, owing to the recent growth and performance improvement of _Glossary("API","APIs"_) available in browsers.

## Origins and History

Conceived as a server-side language by Brendan Eich (then employed by the Netscape Corporation), JavaScript soon came to Netscape Navigator 2.0 in September 1995. JavaScript enjoyed immediate success and _glossary("Microsoft Internet Explorer", "Internet Explorer 3.0"_) introduced JavaScript support under the name JScript in August 1996.

In November 1996, Netscape began working with ECMA International to make JavaScript an industry standard. Since then, the standardized JavaScript is called ECMAScript and specified under ECMA-262, whose latest (eleventh, ES2020) edition is available as of June 2020.

Recently, JavaScript's popularity has expanded even further through the successful [Node.js](https://nodejs.org/) platform—the most popular cross-platform JavaScript runtime environment outside the browser. Node.js - built using [Chrome's V8 JavaScript Engine](<https://en.wikipedia.org/wiki/V8_(JavaScript_engine)>) - allows developers to use JavaScript as a scripting language to automate things on a computer and build fully functional _Glossary("HTTP"_) and _Glossary("WebSockets"_) servers.

#### See also

- _interwiki("wikipedia", "JavaScript", "JavaScript"_) on Wikipedia
- The _Link("/en-US/docs/Web/JavaScript/Guide"_) on MDN
- [The "javascripting" workshop on NodeSchool](https://nodeschool.io/#workshoppers)
- [The JavaScript course on codecademy.com](https://www.codecademy.com/tracks/javascript)
- [The latest ECMAScript standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
- The _Link("/en-US/docs/Web/JavaScript/reference"_) on MDN
- [The _Eloquent JavaScript_ book](https://eloquentjavascript.net/)

---


## Term:  JPEG
  - Beginner
  - Composing
  - Glossary
  - Images
  - JPEG
---


> **JPEG** (Joint Photographic Experts Group) is a commonly used method of lossy compression for digital images.

JPEG compression is composed of three compression techniques applied in successive layers, including chrominance subsampling, discrete cosine transformation and quantization, and run-length Delta & Huffman encoding. Chroma subsampling involves implementing less resolution for chroma information than for luma information, taking advantage of the human visual system's lower acuity for color differences than for luminance. A discrete cosine transform expresses a finite sequence of data points in terms of a sum of cosine functions oscillating at different frequencies.

#### See also

- _Interwiki("wikipedia", "JPEG"_) on Wikipedia

---


## Term:  jQuery
  - Glossary
  - JQuery
  - JavaScript
---


> **jQuery** is a _Glossary("JavaScript"_) _Glossary("Library"_) that focuses on simplifying _Glossary("DOM"_) manipulation, _Glossary("AJAX"_) calls, and _Glossary("Event"_) handling.

jQuery uses a format, `$(selector).action()` to assign an element(s) to an event. To explain it in detail, `$(selector)` will call jQuery to select `selector` element(s), and assign it to an event _Glossary("API"_) called `.action()`.

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

The above code carries out the same function as the following code:

```js
window.onload = function() {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
};
```

Or:

```js
window.addEventListener("load", () => {
  alert("Hello World!");
  document.getElementById("blackBox").style.display = "none";
});
```

#### See also

- _Interwiki("wikipedia", "jQuery"_) on Wikipedia
- [jQuery Official Website](https://jquery.com/)
- [Official API reference documentation](https://api.jquery.com/)[](https://api.jquery.com/)

---


## Term:  JSON
  - CodingScripting
  - Glossary
  - Intro
  - JSON
  - l10n:priority
---


> *JavaScript Object Notation* (**JSON**) is a data-interchange format.  Although not a strict subset, JSON closely resembles a subset of _Glossary("JavaScript"_) syntax. Though many programming languages support JSON, it is especially useful for JavaScript-based apps, including websites and browser extensions.

JSON can represent numbers, booleans, strings, `null`, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects).  JSON does not natively represent more complex data types like functions, regular expressions, dates, and so on.  (Date objects by default serialize to a string containing the date in ISO format, so the information isn't completely lost.) If you need JSON to represent additional data types, transform values as they are serialized or before they are deserialized.

#### See also

- _interwiki("wikipedia", "JSON", "JSON"_) on Wikipedia
- _Link("/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"_) on MDN

---


## Term:  Key
  - Cryptography
  - Glossary
  - Security
---


> A key is a piece of information used by a _Glossary("cipher"_) for _Glossary("encryption"_) and/or _Glossary("decryption"_).

Encrypted messages should remain secure even if everything about the _Glossary("cryptosystem"_), except for the key, is public knowledge.

In _Glossary("symmetric-key cryptography"_), the same key is used for both encryption and decryption. In _Glossary("public-key cryptography"_), there exists a pair of related keys known as the _public key_ and _private key_. The public key is freely available, whereas the private key is kept secret. The public key is able to encrypt messages that only the corresponding private key is able to decrypt, and vice versa.

#### See also

- [Kerckhoffs's principle](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle) on Wikipedia
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("Block cipher mode of operation"_)
  - _Glossary("Cipher"_)
  - _Glossary("Ciphertext"_)
  - _Glossary("Cipher suite"_)
  - _Glossary("Cryptanalysis"_)
  - _Glossary("Cryptography"_)
  - _Glossary("Decryption"_)
  - _Glossary("Encryption"_)
  - _Glossary("Key"_)
  - _Glossary("Plaintext"_)
  - _Glossary("Public-key cryptography"_)
  - _Glossary("Symmetric-key cryptography"_)

---


## Term:  Keyword
  - Glossary
  - Keyword
  - Search
  - keyword search
---


> A **keyword** is a word or phrase that describes content.  Online keywords are used as queries for search engines or as words identifying content on websites.

When you use a search engine, you use keywords to specify what you are looking for, and the search engine returns relevant webpages.  For more accurate results, try more specific keywords, such as "Blue Mustang GTO" instead of "Mustang".  Webpages also use keywords in a meta tag (in the _htmlelement("head"_) section) to describe page content, so search engines can better identify and organize webpages.

#### See also

- _interwiki("wikipedia", "Keyword_research", "Keyword"_) on Wikipedia

---


## Term:  The Khronos Group
  - Glossary
  - Khronos
---


> **The Khronos Group** is an open, non-profit, member-driven consortium of over 150 industry-leading companies. Their purpose is to create advanced, royalty-free interoperability standards for 3D graphics, augmented and virtual reality, parallel programming, vision acceleration, and machine learning.

The organization maintains standards such as _Glossary("OpenGL"_) and the _domxref("WebGL API"_).

#### See also

- _interwiki("wikipedia", "Khronos_Group", "The Khronos Group"_) on Wikipedia
- [The Khronos Group web site](https://www.khronos.org/)

---


## Term:  Latency
  - Audio
  - Glossary
  - Media
  - Networking
  - Reference
  - Video
  - Web Performance
  - latency
---


> **Latency** is the network time it takes for a requested resource to reach its destination. Low latency is good, meaning there is little or no delay. High latency is bad, meaning it takes a long time for the requested resource to reach its destination.

Latency can be a factor in any kind of data flow, but is most commonly discussed in terms of network latency (the time it takes for a packet of data to travel from source to destination) and media codec latency (the time it takes for the source data to be encoded or decoded and reach the consumer of the resulting data).

#### See also

- [Understanding Latency](/en-US/docs/Web/Performance/Understanding_latency)

---


## Term:  Layout viewport
  - CodingScripting
  - Glossary
  - Layout
  - layout viewport
  - viewport
---


> The **layout viewport** is the viewport into which the browser draws a web page. Essentially, it represents what is available to be seen, while the _Glossary("visual viewport"_) represents what is currently visible on the user's display device.

This becomes important, for example, on mobile devices, where a pinching gesture can usually be used to zoom in and out on a site's contents. The rendered document doesn't change in any way, so the layout viewport remains the same as the user adjusts the zoom level. Instead, the visual viewport is updated to indicate the area of the page that they can see.

#### See also

- [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API)
- _Interwiki("wikipedia", "Viewport"_) on Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
- _Glossary("Viewport"_) in the MDN Glossary
- _Glossary("Visual viewport"_) in the MDN Glossary

---


## Term:  Lazy load
  - Glossary
  - Lazy loading
  - Reference
  - Web Performance
---


> **Lazy loading** is a strategy that delays the loading of some assets (e.g., images) until they are needed by the user based on the user's activity and navigation pattern; typically, these assets are only loaded when they are scrolled into view.

If correctly implemented, this delay in asset loading is seamless to the user experience and might help improve initial load performance, including [time to interactive](/en-US/docs/Glossary/Time_to_interactive), as fewer assets are required for the page to start working.

#### See also

- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)

---


## Term:  LGPL
  - Glossary
  - License
  - OpenPractices
  - Remixing
  - Sharing
---


> LGPL (GNU Lesser General Public License) is a free software license published by the Free Software Foundation. The LGPL provides a more permissive alternative for the strictly _Glossary("copyleft"_) _Glossary("GPL"_). While any derivative work using a GPL-licensed program must be released under the same terms (free to use, share, study, and modify), the LGPL only requires the LGPL-licensed component of the derivative program to continue using the LGPL, not the whole program. LGPL is usually used to license shared components such as libraries (`.dll`, `.so`, `.jar`, etc.).

#### See also

- _interwiki("wikipedia", "GNU Lesser General Public License", "GNU LGPL"_) on Wikipedia
- [LGPL License](https://www.gnu.org/copyleft/lesser.html) text on gnu.org

---


## Term:  Ligature
  - CSS
  - Design
  - Glossary
---


> A **ligature** is a joining of two characters into one shape. For example, in French "œ" is a ligature of "oe".

You can implement ligatures in your webpage with _cssxref("font-variant-ligatures"_).

#### See also

- _interwiki("wikipedia", "Typographic ligature", "Ligature"_) on Wikipedia

---


## Term:  Literal
  - Literal
  - JavaScript
  - Glossary
---


> **Literals** represent values in JavaScript. These are fixed values—not variables—that you _literally_ provide in your script.

- [Array literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [Boolean literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [Floating-point literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
- [Numeric literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [Object literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [RegExp literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [String literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## Examples

### String literals

A string literal is zero or more characters enclosed in double (`"`) or single quotation marks (`'`). A string must be delimited by quotation marks of the same type (that is, either both single quotation marks, or both double quotation marks).

The following are examples of string literals:

```js
'foo'
"bar"
'1234'
'one line \n new line'
"John's cat"
```

### Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

The following is an example of an object literal. The first element of the `car` object defines a property, `myCar`, and assigns to it a new string, "`Toyota`"; the second element, the `getCar` property, is immediately assigned the result of invoking the function `carTypes('Honda')`; the third element, the `special` property, uses an existing variable (`sales`).

```js
var sales = 'BMW';

function carTypes(name) {
  if (name == 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Toyota', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Toyota
console.log(car.getCar);  // Honda
console.log(car.special); // BMW
```

#### See also

- _interwiki("wikipedia", "Literal (computer programming)", "Literal"_) on Wikipedia

---


## Term:  Local scope
  - CodingScripting
  - Glossary
  - NeedsContent
---


> Local scope is a characteristic of _glossary("variable","variables"_) that makes them local (i.e., the variable name is only bound to its _glossary("value"_) within a scope which is not the _glossary("global scope"_)).

#### See also

- _interwiki("wikipedia", "Scope (computer science)", "Scope"_) on Wikipedia

---


## Term:  Local variable
  - CodingScripting
  - Glossary
  - NeedsContent
---


> A _glossary("variable"_) whose name is bound to its _glossary("value"_) only within a _Glossary("local scope"_).

## Example

```js
var global = 5; //is a global variable

function fun(){
    var local = 10; //is a local variable
}
```

#### See also

- _interwiki("wikipedia", "Local variable", "Local variable"_) on Wikipedia

---


## Term:  Locale
  - Composing
  - Glossary
  - Locale
---


> **Locale** is a set of language- or country-based preferences for a user interface.

A program draws its locale settings from the language of the host system. Among other things, locales represent paper format, currency, date format, and numbers according to the protocols in the given region.

#### See also

- _interwiki("wikipedia", "Locale", "Locale"_) on Wikipedia

---


## Term:  Localization
  - Collaborating
  - Glossary
  - Intro
  - Localization
  - WebMechanics
---


> **Localization** (l10n) is the process of adapting a software user interface to a specific culture.

The following are common factors to consider:

- language
- unit of measure (e.g., kilometers in Europe, miles in U.S.)
- text direction (e.g., European languages are left-to-right, Arabic right-to-left)
- capitalization in Latin script (e.g., English uses capitals for weekdays, Spanish uses lowercase)
- adaptation of idioms (e.g., "raining cats and dogs" makes no sense when translated literally)
- use of register (e.g., in Japanese respectful speech differs exceptionally from casual speech)
- number format (e.g., 10 000,00 in Germany vs. 10,000.00 in the U.S.)
- date format
- currency
- cultural references
- paper size
- color psychology
- compliance with local laws
- local holidays
- personal names

#### See also

- _interwiki("wikipedia", "Language localisation", "Localization"_) on Wikipedia

---


## Term:  Long task
  - Glossary
  - Long Tasks API
  - Reference
  - Web Performance
---


> A **long task**  is a task that takes more than 50ms to complete.

It is an uninterrupted period where the [main UI thread](/en-US/docs/Glossary/Main_thread) is busy for 50 ms or longer. Common examples include long running event handlers, expensive [reflows](/en-US/docs/Glossary/Reflow) and other re-renders, and work the browser does between different turns of the event loop that exceeds 50 ms.

#### See also

- [Long task API](/en-US/docs/Web/API/Long_Tasks_API)

---


## Term:  Loop
  - CodingScripting
  - Glossary
  - control flow
  - programming
---


> A loop is a sequence of instructions that is continually repeated until a certain condition is met in _Glossary("computer programming"_). An example would be the process of getting an item of data and changing it, and then making sure some _Glossary("conditional", "condition"_) is checked such as, if a counter has reached a prescribed number.

## Examples

### For loop

#### Syntax:

    for (statement 1; statement 2; statement 3){
     execute code block
    }

- Statement 1 is executed once before the code block is run.
- Statement 2 defines the condition needed to execute the code block.
- Statement 3 is executed every time the code block is run.

#### Example:

```js
for(var i = 0; i < 10; i++){
    console.log(i)
}
//This loop will print numbers 0-9, will stop when condition is met (i = 10)
```

For the above example, the syntax is as follows:

- Statement 1 sets the variable for the loop (var i = 0).
- Statement 2 sets the loop condition (i < 10).
- Statement 3 increases the value of i (i++) each time the code block is run.

### While loop

#### Syntax:

    while (condition){
     execute code block
    }

- The code block will continue to loop as long as the condition is true.

#### Example:

```js
var i = 0;
while(i < 5){
    console.log(i)
    i++
}
//This loop  will print number 0-4, will stop when condition becomes false (i >=5)
```

For the above example, the syntax is as follows:

- The code block will continue to run as long as the variable (i) is less than 5.

#### See also

- _interwiki("wikipedia", "Control_flow#Loops","Control flow"_) on Wikipedia
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("Loop"_)

---


## Term:  Lossless compression
  - Beginner
  - Composing
  - Glossary
  - Images
  - Web Performance
  - compression
  - lossless
---


> **Lossless compression** is a class of data compression algorithms that allows the original data to be perfectly reconstructed from the compressed data. Lossless compression methods are reversible. Examples of lossless compression include _glossary("GZIP"_), _glossary("Brotli"_), WebP, and _glossary("PNG"_),

_glossary("Lossy compression"_), on the other hand, uses inexact approximations by discarding some data from the original file, making it an irreversible compression method.

#### See also

- [Glossary](/en-US/docs/Glossary)

  - _glossary("GZIP"_)
  - _glossary("Brotli"_)
  - _glossary("PNG"_)
  - _glossary("Lossy compression"_)

---


## Term:  lossy compression
  - Beginner
  - Composing
  - Glossary
  - Images
  - JPEG
  - Lossy
  - Web Performance
  - compression
---


> **Lossy compression**, or irreversible compression, is a data-compression method that uses inexact approximations and partial-data discarding to represent content. In simpler terms: lossy compression causes data from the initial file to be lost, possibly causing degradation in quality. The process of such compression is irreversible; once lossy compression of the content has been performed, the content cannot be restored to its original state. Therefore, content that has undergone lossy compression should generally not be further edited.

Lossy compression is widely used in image formats.

![Lossy compression image](2019-11-18.png)

Although there is no obvious difference quality between the two images above, the size of the second image has been significantly reduced, using lossy compression.

#### See also

- [Lossless compression](/en-US/docs/Glossary/Lossless_compression)

---


## Term:  LTR (Left To Right)
  - Composing
  - Glossary
  - Localization
---


> **LTR** (**Left To Right**) is a _Glossary("locale"_) property indicating that text is written from left to right. For example, the `en-US` locale (for US English) specifies left-to-right.

Most Western languages, as well as many others around the world, are written LTR.

The opposite of LTR, _Glossary("RTL"_) (Right To Left) is used in other common languages, including Arabic (`ar`) and Hebrew (`he`).

## Technical reference

- [Localization and internationalization](/en-US/docs/Web/Localization)

#### See also

- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("locale"_)
  - _Glossary("LTR"_)
  - _Glossary("RTL"_)

- [HTML global attributes](/en-US/docs/Web/HTML/Global_attributes)

  - _htmlattrxref("dir"_)
  - _htmlattrxref("lang"_)

- [CSS](/en-US/docs/Web/CSS)

  - _cssxref(":dir"_)
  - _cssxref("direction"_)
  - _cssxref("unicode-bidi"_)
  - _cssxref("writing-mode"_)

---


## Term:  Main Axis
  - CSS
  - Glossary
  - Main axis
  - flexbox
---


> The main axis in _glossary("flexbox"_) is defined by the direction set by the _cssxref("flex-direction"_) property. There are four possible values for `flex-direction`. These are:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Should you choose `row` or `row-reverse` then your main axis will run along the row in the inline direction.

![In this image the flex-direction is row which forms the main axis](basics1.png)

Choose `column` or `column-reverse` and your main axis will run top to bottom of the page in the block direction.

![](basics2.png)

On the main axis you can control the sizing of flex items by adding any available space to the items themselves, by way of `flex` properties on the items. Or, you can control the space between and around items by using the `justify-content` property.

#### See also

### Property reference

- _cssxref("flex-basis"_)
- _cssxref("flex-direction"_)
- _cssxref("flex-grow"_)
- _cssxref("flex-shrink"_)
- _cssxref("justify-content"_)
- _cssxref("flex"_)

### Further reading

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

---


## Term:  Main thread
  - Glossary
  - Reference
  - Web Performance
---


> The **main thread** is where a browser processes user events and paints. By default, the browser uses a single thread to run all the JavaScript in your page, as well as to perform layout, reflows, and garbage collection. This means that long-running JavaScript functions can block the thread, leading to an unresponsive page and a bad user experience.

Unless intentionally using a [web worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), such as a [service worker](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers), JavaScript runs on the main thread, so it's easy for a script to cause delays in event processing or painting. The less work required of the main thread, the more that thread can respond to user events, paint, and generally be responsive to the user.

#### See also

- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
- [Web worker API](/en-US/docs/Web/API/Web_Workers_API)
- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Glossary](/en-US/docs/Glossary)

  - _Glossary("Thread"_)

---


## Term:  markup
  - Glossary
  - Intro
  - Markup
  - NeedsContent
---


> A markup language is one that is designed for defining and presenting text. _glossary("HTML"_) (HyperText Markup Language), is an example of a markup language.


## Types of markup language

- **Presentational Markup:**
  - : Used by traditional word processing system with WYSIWYG (what you see it is what you get); this is hidden from human authors, users and editors.
- **Procedural Markup:**
  - : Combined with text to provide instructions on text processing to programs. This text is visibly manipulated by the author.
- **Descriptive Markup:**
  - : Labels sections of documents as to how the program should handle them. For example, the HTML _HTMLElement("td"_) defines a cell in a HTML table.

#### See also

- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("HTML"_)
  - _Glossary("XHTML"_)
  - _Glossary("XML"_)
  - _Glossary("SVG"_)

---


## Term:  MathML
  - CodingScripting
  - Glossary
  - MathML
  - Mathematical Markup Language
  - XML
---


> **MathML** (an _glossary("XML"_) application) is an open standard for representing mathematical expressions in webpages.  In 1998 the W3C first recommended MathML for representing mathematical expressions in the _glossary("browser"_). MathML has other applications also including scientific content and voice synthesis.

#### See also

- _interwiki("wikipedia", "MathML", "MathML"_) on Wikipedia
- [MathML](/en-US/docs/Web/MathML)
- [Authoring MathML](/en-US/docs/Web/MathML/Authoring)
- _spec("http://www.w3.org/Math/whatIsMathML.html", "MathML", "REC"_)

---


## Term:  Media
  - Disambiguation
  - Glossary
---


> The term **media** is an overloaded one when talking about the web; it takes on different meanings depending on the context.

_GlossaryDisambiguation}}

#### See also

- _interwiki("wikipedia", "Media"_) on Wikipedia

---


## Term:  Metadata
  - CodingScripting
  - Glossary
  - HTML
  - metadata
---


> **Metadata** is — in its very simplest definition — data that describes data. For example, an _glossary("HTML"_) document is data, but HTML can also contain metadata in its _htmlelement("head"_) element that describes the document — for example who wrote it, and its summary.

#### See also

- _interwiki("wikipedia", "metadata", "metadata"_) on Wikipedia
- The _htmlelement("meta"_) element on MDN

---


## Term:  Method
  - CodingScripting
  - Glossary
  - JavaScript
---


> A **method** is a _glossary("function"_) which is a _glossary("property"_) of an _glossary("object"_). There are two kind of methods: *Instance Methods* which are built-in tasks performed by an object instance, or __Glossary("static method", "Static Methods"_)_ which are tasks that are called directly on an object constructor.

> **Note:** In JavaScript functions themselves are objects, so, in that context, a method is actually an _glossary("object reference"_) to a function.

#### See also

- _InterWiki("wikipedia","Method (computer programming)"_) in Wikipedia
- [Defining a method in JavaScript](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) (comparison of the traditional syntax and the new shorthand)
- [List of JavaScript built-in methods](/en-US/docs/Web/JavaScript/Reference)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("function"_)
  - _Glossary("object"_)
  - _Glossary("property"_)
  - _Glossary("static method"_)

---


## Term:  Microsoft Edge
  - Browser
  - Glossary
  - Infrastructure
---


> **Microsoft Edge** is a free-of-cost graphical _glossary("World Wide Web", "Web"_) _Glossary("browser"_) bundled with Windows 10 and developed by Microsoft since 2014. Initially known as Spartan, Edge replaced the longstanding browser _glossary("Microsoft Internet Explorer","Internet Explorer"_).

#### See also

- [Official website](https://www.microsoft.com/edge)
- [MDN Web Docs Glossary](/en-US/docs/Glossary)

  - _Glossary("Google Chrome"_)
  - _Glossary("Microsoft Edge"_)
  - _Glossary("Microsoft Internet Explorer"_)
  - _Glossary("Mozilla Firefox"_)
  - _Glossary("Netscape Navigator"_)
  - _Glossary("Opera Browser"_)

---


## Term:  Microsoft Internet Explorer
  - Browser
  - Glossary
  - Internet Explorer
  - Microsoft
  - Microsoft Internet Explorer
  - Navigation
  - Web Browser
  - Windows
  - Windows Operating System
---


> Internet Explorer (or IE) is a free graphical _glossary("browser"_) maintained by Microsoft for legacy enterprise uses. _glossary("Microsoft Edge"_) is currently the default Windows browser.

Microsoft first bundled IE with Windows in 1995 as part of the package called "Microsoft Plus!". By around 2002, Internet Explorer had become the most used browser in the world, but has since lost ground to Chrome, Firefox, Edge, and Safari.

IE has gone through many releases and currently stands at version 11.0.12, with desktop, mobile, and Xbox Console versions available. Formerly available on Mac and UNIX, Microsoft discontinued those versions in 2003 and 2001 respectively.

#### See also

- _interwiki("wikipedia", "Internet Explorer", "Internet Explorer"_) on Wikipedia
- _interwiki("wikipedia", "History of Internet Explorer", "History of Internet Explorer"_) on Wikipedia
- _interwiki("wikipedia", "Internet Explorer versions", "Internet Explorer versions"_) on Wikipedia
- [http://windows.microsoft.com/en-us/internet-explorer/download-ie](https://windows.microsoft.com/en-us/internet-explorer/download-ie)
- [http://windows.microsoft.com/en-us/windows7/getting-started-with-internet-explorer-9](https://windows.microsoft.com/en-us/windows7/getting-started-with-internet-explorer-9)
- [http://windows.microsoft.com/en-us/internet-explorer/internet-explorer-help](https://windows.microsoft.com/en-us/internet-explorer/internet-explorer-help)
- [http://windows.microsoft.com/en-us/internet-explorer/make-ie-default-browser#ie=ie-11](https://windows.microsoft.com/en-us/internet-explorer/make-ie-default-browser#ie=ie-11)
- [http://windows.microsoft.com/en-us/internet-explorer/products/ie-8/system-requirements](https://windows.microsoft.com/en-us/internet-explorer/products/ie-8/system-requirements)
- [http://windows.microsoft.com/en-us/internet-explorer/products/ie-9/system-requirements](https://windows.microsoft.com/en-us/internet-explorer/products/ie-9/system-requirements)
- [http://support.microsoft.com/kb/969393](https://support.microsoft.com/kb/969393)

---


## Term:  Middleware
  - CodingScripting
  - Glossary
---


> Middleware is a (loosely defined) term for any software or service that enables the parts of a system to communicate and manage data. It is the software that handles communication between components and input/output, so developers can focus on the specific purpose of their application.

In server-side web application frameworks, the term is often more specifically used to refer to pre-built software components that can be added to the framework's request/response processing pipeline, to handle tasks such as database access.

#### See also

- _Interwiki("wikipedia", "Middleware_(distributed_applications)", "Middleware_(distributed_applications)"_) on Wikipedia
- _Interwiki("wikipedia", "Middleware", "Middleware"_) on Wikipedia

---


## Term:  MIME type
  - Glossary
  - WebMechanics
---


> A **MIME type** (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled `audio/ogg`, or an image file `image/png`).

It serves the same purpose as filename extensions traditionally do on Windows. The name originates from the _glossary("mime","MIME"_) standard originally used in E-Mail.

#### See also

- _interwiki("wikipedia", "Internet media type", "Internet media type"_) on Wikipedia
- [List of MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Properly Configuring Server MIME Types](/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)
- Details information about the usage of [MIME Types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) in a Web context.
- [Incomplete list of MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
- [MediaRecorder.mimeType](/en-US/docs/Web/API/MediaRecorder/mimeType)

---


## Term:  mime
  - Beginner
  - Glossary
  - Infrastructure
  - MIME
---


> **MIME** "Multipurpose internet mail extensions" is a standard to describe documents in other forms beside ASCII text, e.g. audio, video and images. Initially used for E-Mail attachments, it has become the de facto standard to define types of documents anywhere.

See also [MIME-Type](/en-US/docs/Glossary/MIME_type)

#### See also

- [MIME ](https://en.wikipedia.org/wiki/MIME)on Wikipedia

---


## Term:  minification
  - Glossary
  - Performance
  - Reference
  - Web Performance
---


> **Minification** is the process of removing unnecessary or redundant data without affecting how a resource is processed by the browser.

Minification can include the removal of code comments, white space, and unused code, as well as the shortening of variable and function names. Minification is used to improve web performance by reducing file size. It is generally an automated step that occurs at build time.

As minification makes code less legible to humans, developer tools have 'prettification' features that can add white space back into the code to make it a bit more legible.

---


## Term:  MitM
  - Glossary
  - Security
---


> A **manipulator-in-the-middle attack** (MitM) intercepts a communication between two systems. For example, a Wi-Fi router can be compromised.

Comparing this to physical mail: If you're writing letters to each other, the mail carrier can intercept each letter you mail. They open it, read it, eventually modify it, and then repackage the letter and only then send it to whom you intended to sent the letter for. The original recipient would then mail you a letter back, and the mail carrier would again open the letter, read it, eventually modify it, repackage it, and give it to you. You wouldn't know there's a manipulator in the middle in your communication channel – the mail carrier is invisible to you and to your recipient.

In physical mail and in online communication, MITM attacks are tough to defend. A few tips:

- Don't just ignore certificate warnings. You could be connecting to a phishing server or an imposter server.
- Sensitive sites without HTTPS encryption on public Wi-Fi networks aren't trustworthy.
- Check for HTTPS in your address bar and ensure encryption is in-place before logging in.

#### See also

- OWASP: [Manipulator-in-the-middle attack](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack)
- PortSwigger: [Latest manipulator-in-the-middle attacks news](https://portswigger.net/daily-swig/mitm)
- Wikipedia: [Man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
- The _HTTPHeader("Public-Key-Pins"_) header (_Glossary("HPKP"_)) can significantly decrease the risk of MITM by instructing browsers to require an allowlisted certificate for all subsequent connections to that website.

---


## Term:  Mixin
  - CodingScripting
  - Glossary
  - Method
  - Mixin
  - Property
---


> A _mixin_ is a _Glossary("class"_) (interface, in WebAPI spec terms) in which some or all of its _Glossary("method", "methods"_) and/or _Glossary("property", "properties"_) are unimplemented, requiring that another _Glossary("class"_) or _Glossary("interface"_) provide the missing implementations.

The new class or interface then includes both the properties and methods from the mixin as well as those it defines itself. All of the methods and properties are used exactly the same regardless of whether they're implemented in the mixin or the interface or class that implements the mixin.

The advantage of mixins is that they can be used to simplify the design of APIs in which multiple interfaces need to include the same methods and properties.

For example, the `WindowOrWorkerGlobalScope` mixin is used to provide methods and properties that need to be available on both the _domxref("Window"_) and _domxref("WorkerGlobalScope"_) interfaces. The mixin is implemented by both of those interfaces.

#### See also

- [Mixin](https://en.wikipedia.org/wiki/Mixin) on Wikipedia

---


## Term:  Mobile First
  - Design
  - Glossary
  - Layout
  - Layout mobile
---


> **Mobile first**, a form of _Glossary("progressive enhancement"_), is a web-development and web-design approach that focuses on prioritizing design and development for mobile screen sizes over design and development for desktop screen sizes. The rationale behind the mobile-first approach is to provide users with good user experiences at all screen sizes—by starting with creating a user experience that works well on small screens, and then building on top of that to further enrich the user experience as the screen size increases. The mobile-first approach contrasts with the older approach of designing for desktop screen sizes first, and then only later adding some support for small screen sizes.

---


## Term:  Modem
  - Infrastructure
  - Navigation
---


> A modem ("**modulator-demodulator**") is a device that converts digital information to analog signals and vice-versa, for sending data through networks.

Different kinds are used for different networks: DSL modems for telephone wires, WiFi modems for short-range wireless radio signals, 3G modems for cellular data towers, and so on.

Modems are different from _Glossary("Router","routers"_), but many companies sell modems combined with routers.

#### See also

- _Interwiki("wikipedia", "Modem"_) on Wikipedia

---


## Term:  Modularity
  - CodingScripting
  - Glossary
---


> The term Modularity refers to the degree to which a system's components may be separated and recombined, it is also division of a software package into logical units. The advantage of a modular system is that one can reason the parts independently

#### See also

- _Interwiki("wikipedia", "Modularity"_) on Wikipedia

---


## Term:  Mozilla Firefox
  - Browser
  - Firefox
  - Glossary
  - Infrastructure
  - Mozilla
  - Mozilla Firefox
---


> **Mozilla Firefox** is a free open-source _Glossary("browser"_) whose development is overseen by the Mozilla Corporation. Firefox runs on Windows, OS X, Linux, and Android.

First released in November 2004, Firefox is completely customizable with themes, plug-ins, and [add-ons](/en-US/docs/Mozilla/Add-ons). Firefox uses _glossary("Gecko"_) to render webpages, and implements both current and upcoming _glossary("world wide web", "Web"_) standards.

#### See also

- [Mozilla Firefox official website](https://www.mozilla.org/firefox)
- [Firefox developer documentations](/en-US/docs/Mozilla/Firefox) on MDN

---


## Term:  Mutable
  - CodingScripting
  - Glossary
  - NeedsContent
---


> _Mutable_ is a type of variable that can be changed. In _glossary("JavaScript"_), only _Glossary("Object","objects"_) and _Glossary("Array","arrays"_) are mutable, not _Glossary("primitive", "primitive values"_).

(You _can_ make a variable name point to a new value, but the previous value is still held in memory. Hence the need for garbage collection.)

A **mutable object** is an object whose state can be modified after it is created.

**Immutables** are the objects whose state cannot be changed once the object is created.

**Strings and Numbers** are **Immutable**. Lets understand this with an example:

    var immutableString = "Hello";

    // In the above code, a new object with string value is created.

    immutableString = immutableString + "World";

    // We are now appending "World" to the existing value.

On appending the "immutableString" with a string value, following events occur:

1.  Existing value of "immutableString" is retrieved
2.  "World" is appended to the existing value of "immutableString"
3.  The resultant value is then allocated to a new block of memory
4.  "immutableString" object now points to the newly created memory space
5.  Previously created memory space is now available for garbage collection.

#### See also

- _Interwiki("wikipedia", "Immutable object"_) on Wikipedia

---


## Term:  MVC
  - Glossary
  - Infrastructure
  - Intro
  - MVC
  - Model View Controller
---


> **MVC** (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software’s business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance. Some other design patterns are based on MVC, such as MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter), and MVW (Model-View-Whatever).

The three parts of the MVC software-design pattern can be described as follows:

1.  Model: Manages data and business logic.
2.  View: Handles layout and display.
3.  Controller: Routes commands to the model and view parts.

## Model View Controller example

Imagine a simple shopping list app. All we want is a list of the name, quantity and price of each item we need to buy this week. Below we'll describe how we could implement some of this functionality using MVC.

![Diagram to show the different parts of the mvc architecture.](model-view-controller-light-blue.png)

### The Model

The model defines what data the app should contain. If the state of this data changes, then the model will usually notify the view (so the display can change as needed) and sometimes the controller (if different logic is needed to control the updated view).

Going back to our shopping list app, the model would specify what data the list items should contain — item, price, etc. — and what list items are already present.

### The View

The view defines how the app's data should be displayed.

In our shopping list app, the view would define how the list is presented to the user, and receive the data to display from the model.

### The Controller

The controller contains logic that updates the model and/or view in response to input from the users of the app.

So for example, our shopping list could have input forms and buttons that allow us to add or delete items. These actions require the model to be updated, so the input is sent to the controller, which then manipulates the model as appropriate, which then sends updated data to the view.

You might however also want to just update the view to display the data in a different format, e.g., change the item order to alphabetical, or lowest to highest price. In this case the controller could handle this directly without needing to update the model.

## MVC on the web

As a web developer, this pattern will probably be quite familiar even if you've never consciously used it before. Your data model is probably contained in some kind of database (be it a traditional server-side database like MySQL, or a client-side solution such as [IndexedDB \[en-US\]](/en-US/docs/Web/API/IndexedDB_API).) Your app's controlling code is probably written in HTML/JavaScript, and your user interface is probably written using HTML/CSS/whatever else you like. This sounds very much like MVC, but MVC makes these components follow a more rigid pattern.

In the early days of the Web, MVC architecture was mostly implemented on the server-side, with the client requesting updates via forms or links, and receiving updated views back to display in the browser. However, these days, more of the logic is pushed to the client with the advent of client-side data stores, and XMLHttpRequest allowing partial page updates as required.

Web frameworks such as [AngularJS](https://en.wikipedia.org/wiki/AngularJS) and [Ember.js](https://en.wikipedia.org/wiki/Ember.js "Ember.js") all implement an MVC architecture, albeit in slightly different ways.

#### See also

- _interwiki("wikipedia", "Model–view–controller"_) on Wikipedia

---


## Term:  Namespace
  - CodingScripting
  - Glossary
  - Operating System
---


> Namespace is a context for identifiers, a logical grouping of names used in a program. Within the same context and same scope,  an identifier must uniquely identify an entity.

In an operating system a directory is a namespace. Each file or subdirectory has a unique name, but one file may use the same name multiple times.

#### See also

- _Interwiki("wikipedia", "Namespace"_) on Wikipedia

---


## Term:  NaN
  - CodingScripting
  - Computing
  - Glossary
  - NaN
---


> NaN (Not a Number) is a numeric _Glossary("Type", "data type"_) that means an undefined value or value that cannot be represented, especially results of floating-point calculations.

For example, NaNs can represent infinity, result of division by zero, missing value, or the square root of a negative (which is imaginary, whereas a floating-point number is real).

Practically speaking, if I divide two variables in a _glossary("JavaScript"_) program, the result may be NaN, which is predefined in JavaScript as "undefined". Hence this division may break the program. Now, if this computation was a small part of a much larger algorithm, it would be really painful to figure out where the error actually occurs. Fortunately, since the result will be NaN and I know my divisor may turn out to be 0, I can set up testing conditions that prevent any such computations in the first place or notify me of where they happen.

#### See also

- _Interwiki("wikipedia", "NaN"_) on Wikipedia
- [NaN in JavaScript](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

---


## Term:  NAT
  - Beginner
  - Glossary
  - Infrastructure
  - WebMechanics
  - WebRTC
---


> **NAT** (Network Address Translation) is a technique for letting multiple computers share an IP address. NAT assigns unique addresses to each computer on the local network and adjusts incoming/outgoing network traffic to send data to the right place.

#### See also

- [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- _interwiki("wikipedia", "NAT"_) on Wikipedia

---


## Term:  Native
  - CodingScripting
  - Glossary
---


> A _native_ application has been compiled to run on the hardware/software environment that comprises the targeted architecture.

An example of a native Android app would be a mobile application written in Java using the Android toolchain.

On the other hand, a Web App that runs inside a browser is not native — it is run in the web browser, which sits on top of the native environment, not the native environment itself.

#### See also

- _Interwiki("wikipedia", "Native (computing)"_) on Wikipedia

---


## Term:  Navigation directive
  - CSP
  - HTTP
  - Security
---


> **_Glossary("CSP"_) navigation directives** are used in a _HTTPHeader("Content-Security-Policy"_) header and govern to which location a user can navigate to or submit a form to, for example.

Navigation directives don't fall back to the _CSP("default-src"_) directive.

See [Navigation directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#navigation_directives) for a complete list.

#### See also

- <https://www.w3.org/TR/CSP/#directives-navigation>
- Other kinds of directives:

  - _Glossary("Fetch directive"_)
  - _Glossary("Document directive"_)
  - _Glossary("Reporting directive"_)
  - [`block-all-mixed-content`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
  - [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`require-sri-for`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for)
  - [`trusted-types`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)

- _HTTPHeader("Content-Security-Policy"_)

---


## Term:  Netscape Navigator
  - Browser
  - Glossary
  - Navigation
  - Netscape
  - Netscape Navigator
---


> Netscape Navigator or Netscape was a leading _glossary("browser"_) in the 1990s.  Netscape was based on Mosaic and the Netscape team was led by Marc Andreessen, a programmer who also wrote code for Mosaic.

Netscape helped make the _glossary("World Wide Web","Web"_) graphical rather than a text-only experience.  Many browsing features became standard after Netscape introduced them. Netscape could display a webpage while loading, used JavaScript for forms and interactive content, and stored session information in cookies. Despite Netscape's technical advantages and initial dominance, by the late 1990s _glossary("Microsoft Internet Explorer", "Internet Explorer"_) swiftly overtook Netscape in market share.

#### See also

- _Interwiki("wikipedia", "Netscape Navigator"_) on Wikipedia

---


## Term:  Network throttling
  - Glossary
  - RUM
  - Reference
  - Synthetic monitoring
  - Web Performance
---


> **Network throttling** is an intentional slowing down of internet speed. In web performance, network throttling, or network condition emulation, it is used to emulate low bandwidth conditions experienced by likely a large segment of a site's target user base.

It’s important not to overlook network conditions users experience on mobile. The internet speeds for developers creating web applications in a corporate office building on a powerful computer are generally very fast. As a developer, tech writer, or designer, this is likely your experience. The network speeds of a mobile user accessing that web application, possibly while traveling or in a remote area with poor data plan coverage, will likely be very slow, if they are able to get online at all. Network throttling enables a developer to emulate an experience of a user. Most browser developer tools, such as the browser inspector, provide a function to emulate different network conditions. By emulating your user's experience via network throttling, you can more readily identify and fix load time issues.

Browser developer tools generally have network throttling options, to allow you to test your app under slow network conditions. Firefox's developer tools for example have a drop-down menu available in both the [Network Monitor](/en-US/docs/Tools/Network_Monitor) and [Responsive Design Mode](/en-US/docs/Tools/Responsive_Design_Mode) containing network speed options (e.g. wifi, good 3G, 2G...)

#### See also

- [Synthetic monitoring](/en-US/docs/Glossary/Synthetic_monitoring)

---


## Term:  Node (networking)
  - Glossary
  - Infrastructure
---


> In networking, a **node** is a connection point in the network. In physical networks, a node is usually a device, like a computer or a router.

#### See also

- _Interwiki("wikipedia", "Node (networking)", "Node"_) on Wikipedia

---


## Term:  NNTP
  - Glossary
  - Infrastructure
---


> **NNTP** (Network News Transfer Protocol) is a _Glossary("protocol"_) used to transfer _Glossary("Usenet"_) messages from client to server or between servers.

#### See also

- _Interwiki("wikipedia", "Network_News_Transfer_Protocol", "NNTP"_) at Wikipedia
- From the IETF: [RFC 3977 about NNTP](https://datatracker.ietf.org/doc/html/rfc3977) (2006)

---


## Term:  Node.js
  - Glossary
  - Infrastructure
  - JavaScript
  - node.js
---


> Node.js is a cross-platform _Glossary("JavaScript"_) runtime environment that allows developers to build server-side and network applications with JavaScript.

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) is bundled with Node.js. It runs on the command line as the command `npm`. It is a package manager that downloads packages into a `node_modules` folder. You call the downloaded packages through `const libraryModule = require("libraryname")`.

#### See also

- _Interwiki("Wikipedia", "Node.js"_) on Wikipedia
- [Node.js website](https://nodejs.org/)
- [API reference documentation](https://nodejs.org/api/)
- [Tutorials](https://nodejs.org/documentation/tutorials/)
- [npm Documentation](https://docs.npmjs.com/)

---


## Term:  Node
  - Disambiguation
  - Glossary
---


> The term **node** can have several meanings depending on the context. It may refer to:

_GlossaryDisambiguation}}

Another use of the word is when talking about _Glossary("Node.js"_)

---


## Term:  non-normative
  - Glossary
  - Infrastructure
  - Specification
  - Standardization
---


> Software _Glossary("specification", "specifications"_) often contains information marked as  *non-normative* or *informative,* which means that those are provided there for the purpose of helping the readers to understand the specification better or to show an example or a best practice, and not needed to be followed as a rule. Sections that contain official part of the specification that must be followed are often marked as _Glossary("normative", "normative"_).

#### See also

- Description of [normative and informative content](https://wiki.whatwg.org/wiki/Specs/howto#Content) in WHATWG wiki

---


## Term:  Normative
  - Glossary
  - Infrastructure
  - Specification
  - Standardization
---


> Normative is a word commonly used in software _Glossary("specification", "specifications"_) to denote sections that are standardized and must be followed as a rule. Specifications might also contain sections that are marked as __Glossary("non-normative"_)_ or _informative_, which means those are provided there for the purpose of helping the reader understand the specifications better or to showcase an example or best practice, which need not be followed as a rule.

#### See also

- Description of [normative and informative content](https://wiki.whatwg.org/wiki/Specs/howto#Content) in WHATWG wiki

---


## Term:  'Null'
  - CodingScripting
  - Glossary
---


> In computer science, a **`null`** value represents a reference that points, generally intentionally, to a nonexistent or invalid _glossary("object"_) or address. The meaning of a null reference varies among language implementations.

In _Glossary("JavaScript"_), `null` is marked as one of the _Glossary("Primitive", "primitive values"_), because its behavior is seemingly primitive.

But 