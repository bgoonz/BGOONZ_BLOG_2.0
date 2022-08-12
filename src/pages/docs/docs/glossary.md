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

## Term: '404'

-   Glossary
-   HTTP Errors
-   Infrastructure
-   Navigation

---

> A 404 is a Standard Response Code meaning that the _Glossary("Server", "server"_) cannot find the requested resource.

#### See also

-   [list of HTTP response codes](/en-US/docs/Web/HTTP/Status)
-   [advice for beginners on avoiding 404 errors](/en-US/docs/Learn/Common_questions/Checking_that_your_web_site_is_working_properly)

---

## Term: '502'

-   '502'
-   Bad Gateway
-   Glossary
-   HTTP Errors
-   Infrastructure
-   Navigation

---

> An _Glossary("HTTP"_) error code meaning "Bad Gateway".

A _Glossary("Server", "server"_) can act as a gateway or proxy (go-between) between a client (like your Web browser) and another, upstream server. When you request to access a _Glossary("URL"_), the gateway server can relay your request to the upstream server. "502" means that the upstream server has returned an invalid response.

Normally the upstream server is not down (i.e. furnishes no response to the gateway/proxy), but does not understand the same data-exchange protocol as the gateway/proxy. Internet _Glossary("Protocol", "protocols"_) are quite explicit, and so a 502 usually means that one or both machines were incorrectly or incompletely programmed.

#### See also

-   [list of HTTP response codes](/en-US/docs/Web/HTTP/Status)

---

## Term: Abstraction

-   Abstraction
-   Coding
-   CodingScripting
-   Glossary
-   Programming Language

---

> Abstraction in _Glossary("computer programming"_) is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler _Glossary("API", "APIs"_).

## Advantages of Data Abstraction

-   Helps the user to avoid writing low level code.
-   Avoids code duplication and increases reusability.
-   Can change internal implementation of class independently without affecting the user.
-   Helps to increase security of an application or program as only important details are provided to the user.

## Example

```js
//
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

-   _interwiki("wikipedia", "Abstraction (computer science)", "Abstraction"_) on Wikipedia

---

## Term: accent

-   Glossary
-   Input
-   accent

---

> An **accent** is a typically bright color that contrasts with the more utilitarian background and foreground colors within a color scheme. These are present in the visual style of many platforms (though not all).

On the web, an accent is sometimes used in _HTMLElement("input"_) elements for the active portion of the control, for instance the background of a checked [checkbox](/en-US/docs/Web/HTML/Element/input/checkbox).

#### See also

### CSS related to the accent

You can set the color of the accent for a given element by setting the element's CSS _cssxref("accent-color"_) property to the appropriate _cssxref("&lt;color&gt;"_) value.

---

## Term: Accessibility tree

-   AOM
-   Accessibility
-   DOM
-   Glossary
-   Reference

---

> The **accessibility tree** contains _Glossary("accessibility"_)-related information for most HTML elements.

Browsers convert markup into an internal representation called the _[DOM tree](/en-US/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)_. The DOM tree contains objects representing all the markup's elements, attributes, and text nodes. Browsers then create an accessibility tree based on the DOM tree, which is used by platform-specific Accessibility APIs to provide a representation that can be understood by assistive technologies, such as screen readers.

There are four things in an accessibility tree object:

-   **name**
-   -   : How can we refer to this thing? For instance, a link with the text "Read more" will have "Read more" as its name (find more on how names are computed in the [Accessible Name and Description Com
-   **description**
-   -   : How do we describe this thing, if we want to provide more description beyond the name? The description of a table could explain what kind of information the table contains.
-   **role**
    -   : What kind of thing is it? For example, is it a button, a nav bar, or a list of items?
-   **state**
    -   : Does it have a state? Examples include checked or unchecked for checkboxes, and collapsed or expanded for the [`<summary>`](/en-US/docs/Web/HTML/Element/summary) element.

Additionally, the accessibility tree often contains information on what can be done with an element: a link can be _followed_, a text input can be _typed into_, etc.

While still in draft form within the Web Incubator Community Group, the **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** intends to incubate APIs that make it easier to express accessibility semantics and potentially allow read access to the computed accessibility tree.

#### See also

-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Accessibility"_)
    -   _Glossary("ARIA"_)

---

## Term: Accessibility

-   Accessibility
-   Glossary

---

> _Web Accessibility_ (**A11Y**) refers to best practices for keeping a website usable despite physical and technical restrictions. Web accessibility is formally defined and discussed at the _Glossary("W3C"_) through the _Glossary("WAI","Web Accessibility Initiative"_) (WAI).

#### See also

-   [Accessibility resources at MDN](/en-US/docs/Web/Accessibility)
-   _Interwiki("wikipedia", "Web accessibility"_) on Wikipedia
-   [Learn accessibility on MDN](/en-US/docs/Learn/Accessibility)
-   [Web Accessibility In Mind](https://webaim.org/)
-   [The ARIA documentation on MDN](/en-US/docs/Web/Accessibility/ARIA)
-   [The Web Accessibility Initiative homepage](https://www.w3.org/WAI/)
-   [The WAI-ARIA recommendation](https://www.w3.org/TR/wai-aria/)

---

## Term: Adobe Flash

---

> Flash is an obsolete technology developed by Adobe for viewing expressive web applications, multimedia content, and streaming media.

As of 2021, Flash is no longer supported by Adobe or any major web browsers.

#### See also

-   [Adobe Flash end-of-life announcement](https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update#gs.g8mmgf)
-   [Saying goodbye to Flash in Chrome](https://www.blog.google/products/chrome/saying-goodbye-flash-chrome/)
-   [Firefox Roadmap for Flash End-of-Life](https://blog.mozilla.org/futurereleases/2017/07/25/firefox-roadmap-flash-end-life/)
-   [Microsoft Windows Flash Player removal](https://blogs.windows.com/msedgedev/2020/09/04/update-adobe-flash-end-support/)

---

## Term: Advance measure

-   Accessibility
-   Glossary

---

> The **advance measure** of a glyph is its _advance width_ or _advance height_, whichever is in the inline axis of the element.

This term is used in the definition of a number of CSS _cssxref("&lt;length&gt;"_) units.
For example, `ch` is the _advance measure_ of the "0" character in the given typeface.
For a horizontal inline axis, this will be the width of the character.

#### See also

-   _cssxref("&lt;length&gt;"_)

---

## Term: Ajax

-   AJAX
-   CodingScripting
-   Glossary
-   Infrastructure
-   l10n:priority

---

> **Ajax**, which initially stood for Asynchronous _Glossary("JavaScript"_) And _Glossary("XML"_), is a programming practice of building complex, dynamic webpages using a technology known as _Glossary("XHR_(XMLHttpRequest)","XMLHttpRequest"\_).

Ajax allows you to update parts of the _Glossary("DOM"_) of an _Glossary("HTML"_) page without the need for a full page refresh. Ajax also lets you work asynchronously, meaning your code continues to run while the targeted part of your web page is trying to reload (compared to synchronously, which blocks your code from running until that part of your page is done reloading).

With interactive websites and modern web standards, Ajax is gradually being replaced by functions within JavaScript frameworks and the official _domxref("Fetch API"_) Standard.

#### See also

-   _interwiki("wikipedia", "AJAX"_) on Wikipedia
-   [Ajax](/en-US/docs/Web/Guide/AJAX)
-   [Ajax - Getting started](/en-US/docs/Web/Guide/AJAX/Getting_Started)
-   [Glossary](/en-US/docs/Glossary):

    -   _Glossary("XHR_(XMLHttpRequest)","XMLHttpRequest"\_)

-   _DOMxRef("XMLHttpRequest"_)
-   _DOMxRef("Fetch API"_)
-   [Using Fetch API](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
-   [Synchronous vs. Asynchronous Communications](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)

---

## Term: Algorithm

-   CodingScripting
-   Glossary

---

> An algorithm is a self-contained series of instructions to perform a function.

In other words, an algorithm is a means of describing a way to solve a problem so that it can be solved repeatedly, by humans or machines. Computer scientists compare the efficiency of algorithms through the concept of "Algorithmic Complexity" or "Big O" notation.

For example:

-   A cooking recipe is a simple algorithm for humans.
-   A sorting algorithm is often used in computer programming to explain a machine how to sort data.

Common algorithms are Pathfinding algorithms such as the Traveling Salesman Problem, Tree Traversal algorithms and so on.

There are also Machine Learning algorithms such as Linear Regression, Logistic Regression, Decision Tree, Random Forest, Support Vector Machine, Recurrent Neural Network (RNN), Long Short Term Memory (LSTM) Neural Network, Convolutional Neural Network (CNN), Deep Convolutional Neural Network and so on.

#### See also

-   _Interwiki("wikipedia", "Algorithm", "Algorithm"_) on Wikipedia
-   [Explanations of sorting algorithms](https://www.toptal.com/developers/sorting-algorithms)
-   [Explanations of algorithmic complexity](https://bigocheatsheet.com/)

---

## Term: Alignment container

-   Alignment container
-   CSS
-   Glossary
-   alignment

---

> The **alignment container** is the rectangle that the [alignment subject](/en-US/docs/Glossary/Alignment_Subject) is aligned within. This is defined by the layout mode; it is usually the alignment subject's containing block, and assumes the writing mode of the box establishing the containing block.

#### See also

-   [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)

---

## Term: Alignment subject

-   Alignment subject
-   CSS
-   Glossary
-   alignment

---

> In [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment) the **alignment subject** is the thing (or things) being aligned by the property.

For _cssxref("justify-self"_) and _cssxref("align-self"_), the alignment subject is the margin box of the box the property is set on, using the writing mode of that box.

For _cssxref("justify-content"_) and _cssxref("align-content"_), the writing mode of the box is also used. The definition of the alignment subject depends on the layout mode being used.

-   Block containers (including table cells)
-   -   : The entire content of the block as a single unit.
-   Multicol containers
    -   : The column boxes, with any spacing inserted between column boxes added to the relevant column gaps.
-   Flex containers
    -   : For _cssxref("justify-content"_), the flex items in each flex line.
        For _cssxref("align-content"_), the flex lines. Note, this only has an effect on multi-line flex containers.
-   Grid containers
    -   : The grid tracks in the appropriate axis, with any spacing inserted between tracks added to the relevant gutters. Collapsed gutters are treated as a single opportunity for space insertion.

#### See also

-   [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)

---

## Term: Alpha (alpha channel)

-   Alpha
-   Alpha Channel
-   Drawing
-   Glossary
-   Graphics
-   Translucency
-   Translucent
-   Transparency
-   Transparent
-   WebGL
-   WebXR
-   channel
-   color
-   pixel

---

> Colors are represented in digital form as a collection of numbers, each representing the strength or intensity level of a given component of the color. Each of these components is called a **channel**. In a typical image file, the color channels describe how much red, green, and blue are used to make up the final color. To represent a color through which the background can be seen to some extent, a fourth channel is added to the color: the **alpha channel**. The alpha channel specifies how opaque the color is.

For example, the color `#8921F2` (also described as `rgb(137, 33, 242)` or `hsl(270, 89%, 54)`) is a nice shade of purple. Below you see a small box of that color in the top-left corner and a box of the _same_ color but with an alpha channel set at 0.5 (50% opacity). The two boxes are drawn on top of a paragraph of text.

![Image showing the effect of an alpha channel on a color.](alpha-channel-example.png)

As you can see, the color without an alpha channel completely blocks the background text, while the box with the alpha channel leaves it visible through the purple background color.

## Term: API

-   CodingScripting
-   Glossary
-   Infrastructure

---

> An API (Application Programming Interface) is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third party software or hardware.

In Web development, an API is generally a set of code features (e.g. _glossary("method","methods"_), _Glossary("property","properties"_), events, and _Glossary("URL","URLs"_)) that a developer can use in their apps for interacting with components of a user's web browser, or other software/hardware on the user's computer, or third party websites and services.

For example:

-   The [getUserMedia](/en-US/docs/Web/API/MediaDevices/getUserMedia) API can be used to grab audio and video from a user's webcam, which can then be used in any way the developer likes, for example, recording video and audio, broadcasting it to another user in a conference call, or capturing image stills from the video.
-   The [Geolocation API](/en-US/docs/Web/API/Geolocation) can be used to retrieve location information from whatever service the user has available on their device (e.g. GPS), which can then be used in conjunction with the [Google Maps APIs](https://developers.google.com/maps/) to for example plot the user's location on a custom map and show them what tourist attractions are in their area.
-   The [Twitter APIs](https://dev.twitter.com/overview/api) can be used to retrieve data from a user's twitter accounts, for example, to display their latest tweets on a web page.
-   The [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) can be used to animate parts of a web page — for example, to make images move around or rotate.

#### See also

-   _Interwiki("wikipedia", "API", "API"_) on Wikipedia
-   [Web API reference](/en-US/docs/Web/API)

---

## Term: Apple Safari

-   Glossary
-   Navigation
-   WebMechanics

---

> [Safari](https://www.apple.com/safari/) is a _Glossary("Browser","Web browser"_) developed by Apple and bundled with both macOS and iOS. It's based on the open source [WebKit](https://webkit.org/) engine.

#### See also

-   _Interwiki("wikipedia", "Safari (web browser)", "Safari"_) on Wikipedia
-   [Safari on apple.com](https://www.apple.com/safari/)
-   [The WebKit project](https://webkit.org/)
-   [WebKit nightly build](https://nightly.webkit.org/)
-   [Reporting a bug for Safari](https://bugs.webkit.org/)

---

## Term: Application Context

-   CodingScripting
-   Glossary

---

> An **application context** is a top-level [browsing context](/en-US/docs/Glossary/Browsing_context) that has a [manifest](/en-US/docs/Web/Manifest) applied to it.

If an application context is created as a result of the user agent being asked to navigate to a deep link, the user agent must immediately navigate to the deep link with replacement enabled. Otherwise, when the application context is created, the user agent must immediately navigate to the start URL with replacement enabled.

Please note that the start URL is not necessarily the value of the start_url member: the user or user agent could have changed it when the application was added to home-screen or otherwise bookmarked.

---

## Term: Argument

-   CodingScripting
-   Glossary
-   JavaScript

---

> An **argument** is a _glossary("value"_) (_Glossary("primitive"_) or _Glossary("object"_)) passed as input to a _Glossary("function"_).

#### See also

-   _Interwiki("wikipedia", "Parameter_(computer*programming)", "Difference between Parameter and Argument"*) on Wikipedia
-   The _jsxref("Functions/arguments","arguments"_) object in _glossary("JavaScript"_)

---

## Term: ARIA

-   Accessibility
-   Glossary

---

> **ARIA** (_Accessible Rich \_glossary("Internet"_) Applications*) is a \_Glossary("W3C"*) specification for adding semantics and other metadata to _Glossary("HTML"_) to cater to users of assistive technology.

For example, you could add the attribute `role="alert"` to a _HTMLElement("p"_) _glossary("tag"_) to notify a sight-challenged user that the information is important and time-sensitive (which you might otherwise convey through text color).

#### See also

-   [ARIA](/en-US/docs/Web/Accessibility/ARIA)

---

## Term: ARPA

-   Glossary
-   Infrastructure

---

> **.arpa** (address and routing parameter area) is a _glossary("TLD","top-level domain"_) used for Internet infrastructure purposes, especially reverse DNS lookup (i.e., find the _glossary('domain name'_) for a given _glossary("IP address"_)).

#### See also

-   [Official website](https://www.iana.org/domains/arpa)
-   _Interwiki("wikipedia", ".arpa"_) on Wikipedia

---

## Term: ARPANET

-   Glossary
-   Infrastructure

---

> The **ARPANET** (Advanced Research Projects Agency NETwork) was an early computer network, constructed in 1969 as a robust medium to transmit sensitive military data and to connect leading research groups throughout the United States. ARPANET first ran NCP (Network Control Protocol) and subsequently the first version of the Internet protocol or _glossary("TCP"_)/_glossary("IPv4","IP"_) suite, making ARPANET a prominent part of the nascent _glossary("Internet"_). ARPANET was closed in early 1990.

#### See also

-   _Interwiki("wikipedia", "ARPANET"_) on Wikipedia

---

## Term: Array

-   Array
-   CodingScripting
-   Glossary
-   JavaScript
-   programming

---

> An _array_ is an ordered collection of data (either _Glossary("primitive"_) or _Glossary("object"_) depending upon the language). Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.

Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various _Glossary("Method", "methods"_).

What an array in JavaScript looks like:

```js
//
let myArray = [1, 2, 3, 4];
let catNamesArray = ['Jacqueline', 'Sophia', 'Autumn'];
//Arrays in JavaScript can hold different types of data, as shown above.
```

#### See also

-   _Interwiki("wikipedia", "Array data structure", "Array"_) on Wikipedia
-   JavaScript _jsxref("Array"_) on MDN

---

## Term: ASCII

-   Glossary
-   Infrastructure

---

> **ASCII** (_American Standard Code for Information Interchange_) is one of the most popular coding method used by computers for converting letters, numbers, punctuation and control codes into digital form. Since 2007, _Glossary("UTF-8"_) superseded it on the Web.

#### See also

_Interwiki("wikipedia", "ASCII"_) on Wikipedia

---

## Term: Asynchronous

-   Glossary
-   Web
-   WebMechanics
-   asynchronous

---

> The term **asynchronous** refers to two or more objects or events **not** existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete). In computing, the word "asynchronous" is used in two major contexts.

-   Networking and communications

    -   : Asynchronous communication is a method of exchanging messages between two or more parties in which each party receives and processes messages whenever it's convenient or possible to do so, rather than doing so immediately upon receipt. Additionally, messages may be sent without waiting for acknowledgement, with the understanding that if a problem occurs, the recipient will request corrections or otherwise handle the situation.

        For humans, e-mail is an asynchronous communication method; the sender sends an email and the recipient will read and reply to the message when it's convenient to do so, rather than doing so at once. And both sides can continue to send and receive messages whenever they wish, instead of having to schedule them around each other.

        When software communicates asynchronously, a program may make a request for information from another piece of software (such as a server), and continue to do other things while waiting for a reply. For example, the [AJAX](/en-US/docs/Web/Guide/AJAX) (Asynchronous JavaScript and _Glossary("XML"_)) programming technique—now usually "Ajax", even though _Glossary("JSON"_) is usually used rather than XML in modern applications—is a mechanism that requests relatively small amounts of data from the server using _Glossary("HTTP"_), with the result being returned when available rather than immediately.

-   Software design

    -   : Asynchronous software design expands upon the concept by building code that allows a program to ask that a task be performed alongside the original task (or tasks), without stopping to wait for the task to complete. When the secondary task is completed, the original task is notified using an agreed-upon mechanism so that it knows the work is done, and that the result, if any, is available.

        There are a number of programming techniques for implementing asynchronous software. See the article [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous) for an introduction to them.

#### See also

-   [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Learning Area)
-   _glossary("Synchronous"_)

---

## Term: ATAG

-   ATAG
-   Accessibility
-   Authoring Tool Accessibility Guidelines
-   Glossary

---

> ATAG (Authoring Tool _glossary("Accessibility"_) Guidelines) is a _Glossary("W3C"_) recommendation for building accessible-authoring tools that produce accessible contents.

#### See also

-   [ATAG as part of the Web Accessibility Initiative](https://en.wikipedia.org/wiki/Web_Accessibility_Initiative#Authoring_Tools_Accessibility_Guidelines_.28ATAG.29) on WikiPedia
-   [Authoring Tool Accessibility Guidelines (ATAG) Overview](https://www.w3.org/WAI/intro/atag.php)
-   [The ATAG 2.0 recommendation](https://www.w3.org/TR/ATAG20/)

---

## Term: Attribute

-   CodingScripting
-   Glossary
-   HTML

---

> An **attribute** extends an HTML or XML _Glossary("element"_), changing its behavior or providing metadata.

An attribute always has the form `name="value"` (the attribute's identifier followed by its associated value).

You may see attributes without the equals sign or a value. That is a shorthand for providing the empty string in HTML, or the attribute's name in XML.

```html
<input required />
<!-- is the same as… -->
<input required="" />
<!-- or -->
<input required="required" />
```

## Reflection of an attribute

Attributes may be _reflected_ into a particular property of the specific interface.
It means that the value of the attribute can be read by accessing the property,
and can be modified by setting the property to a different value.

For example, the `placeholder` below is reflected into _domxref("HTMLInputElement.placeholder"_).

Considering the following HTML:

```html
<input placeholder="Original placeholder" />
```

We can check the reflection between _domxref("HTMLInputElement.placeholder"_) and the attribute using:

```js
//
let input = document.getElementsByTagName('input')[0];
let attr = input.getAttributeNode('placeholder');
console.log(attr.value);
console.log(input.placeholder); //Returns the same value as `attr.value`
```

and

```js
//
let input2 = document.getElementsByTagName('input')[0];
let attr2 = input.getAttributeNode('placeholder');
console.log(attr2.value); // Returns `Original placeholder`
input2.placeholder = 'Modified placeholder'; // Also change the value of the reflected attribute.
console.log(attr2.value); // Returns `Modified placeholder`
```

#### See also

-   [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
-   Information about HTML's [global attributes](/en-US/docs/Web/HTML/Global_attributes)

---

## Term: Media (Audio-visual presentation)

-   Audio
-   Glossary
-   Media
-   Multimedia
-   Video

---

> The term **media** (more accurately, **multimedia**) refers to audio, video, or combined audio-visual material such as music, recorded speech, movies, TV shows, or any other form of content that is presented over a period of time.

More broadly, media may include still images such as photographs or other still images.

Media content can be recorded, played back, presented, and at times interacted with in various ways.

#### See also

-   _interwiki("wikipedia", "Multimedia"_) on Wikipedia
-   [Web media technologies](/en-US/docs/Web/Media): a guide to all the ways media can be used in web content
-   [Multimedia and Embedding](/en-US/docs/Learn/HTML/Multimedia_and_embedding) in the MDN learning area
-   _HTMLElement("audio"_) and _HTMLElement("video"_) elements, used to present media in _Glossary("HTML"_) documents

---

## Term: Bandwidth

-   Glossary
-   Infrastructure

---

> Bandwidth is the measure of how much information can pass through a data connection in a given amount of time. It is usually measured in multiples of bits-per-second (bps), for example megabits-per-second (Mbps) or gigabits-per-second (Gbps).

#### See also

-   _Interwiki("wikipedia", "Bandwidth"_) on Wikipedia

---

## Term: Base64

-   Advanced
-   Base64
-   JavaScript
-   Typed Arrays
-   URI
-   URL
-   Unicode Problem
-   atob()
-   btoa()

---

> **Base64** is a group of similar [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. The term _Base64_ originates from a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Base64 encoding schemes are commonly used when there is a need to encode binary data that needs to be stored and transferred over media that are designed to deal with ASCII. This is to ensure that the data remain intact without modification during transport. Base64 is commonly used in a number of applications including email via [MIME](https://en.wikipedia.org/wiki/MIME), and storing complex data in [XML](/en-US/docs/Web/XML).

One common application of Base64 encoding on the web is to encode binary data so it can be included in a [data: URL](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

In JavaScript there are two functions respectively for decoding and encoding Base64 strings:

-   [`btoa()`](/en-US/docs/Web/API/btoa): creates a Base64-encoded ASCII string from a "string" of binary data ("btoa" should be read as "binary to ASCII").
-   [`atob()`](/en-US/docs/Web/API/atob): decodes a Base64-encoded string("atob" should be read as "ASCII to binary").

The algorithm used by `atob()` and `btoa()` is specified in [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), section 4.

Note that `btoa()` expects to be passed binary data, and will throw an exception if the given string contains any characters whose UTF-16 representation occupies more than one byte. For more details, see the documentation for [`btoa()`](/en-US/docs/Web/API/btoa).

## Encoded size increase

Each Base64 digit represents exactly 6 bits of data. So, three 8-bits bytes of the input string/binary file (3×8 bits = 24 bits) can be represented by four 6-bit Base64 digits (4×6 = 24 bits).

This means that the Base64 version of a string or file will be at least 133% the size of its source (a \~33% increase). The increase may be larger if the encoded data is small. For example, the string `"a"` with `length === 1` gets encoded to `"YQ=="` with `length === 4` — a 300% increase.

## The "Unicode Problem"

Since [`DOMString`](/en-US/docs/Web/API/DOMString '/en-US/docs/Web/API/DOMString')s are 16-bit-encoded strings, in most browsers calling `window.btoa` on a Unicode string will cause a `Character Out Of Range` exception if a character exceeds the range of a 8-bit ASCII-encoded character. There are two possible methods to solve this problem:

-   the first one is to escape the whole string and then encode it;
-   the second one is to convert the UTF-16 [`DOMString`](/en-US/docs/Web/API/DOMString '/en-US/docs/Web/API/DOMString') to an UTF-8 array of characters and then encode it.

Here are the two possible methods.

### Solution #1 - escaping the string before encoding it

---

```js
//

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

// Usage:
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
```

This solution has been proposed by [Johan Sundström](http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html).

Another possible solution without utilizing the now deprecated 'unescape' and 'escape' functions.

---

```js
//

function b64EncodeUnicode(str) {
    return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode('0x' + p1);
        })
    );
}
b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
```

### Solution #2 - rewriting `atob()` and `btoa()` using `TypedArray`s and UTF-8

> **Note:** The following code is also useful to get an [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) from a Base64 string and/or viceversa ([see below](#appendix_decode_a_base64_string_to_uint8array_or_arraybuffer)).

```js
//
'use strict';

/*\
|*|
|*|  Base64 / binary data / UTF-8 strings utilities
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
|*|
\*/

/* Array of bytes to Base64 string decoding */

function b64ToUint6(nChr) {
    return nChr > 64 && nChr < 91
        ? nChr - 65
        : nChr > 96 && nChr < 123
        ? nChr - 71
        : nChr > 47 && nChr < 58
        ? nChr + 4
        : nChr === 43
        ? 62
        : nChr === 47
        ? 63
        : 0;
}

function base64DecToArr(sBase64, nBlocksSize) {
    var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ''),
        nInLen = sB64Enc.length,
        nOutLen = nBlocksSize ? Math.ceil(((nInLen * 3 + 1) >> 2) / nBlocksSize) * nBlocksSize : (nInLen * 3 + 1) >> 2,
        taBytes = new Uint8Array(nOutLen);

    for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
        nMod4 = nInIdx & 3;
        nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << (6 * (3 - nMod4));
        if (nMod4 === 3 || nInLen - nInIdx === 1) {
            for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                taBytes[nOutIdx] = (nUint24 >>> ((16 >>> nMod3) & 24)) & 255;
            }
            nUint24 = 0;
        }
    }

    return taBytes;
}

/* Base64 string to array encoding */

function uint6ToB64(nUint6) {
    return nUint6 < 26 ? nUint6 + 65 : nUint6 < 52 ? nUint6 + 71 : nUint6 < 62 ? nUint6 - 4 : nUint6 === 62 ? 43 : nUint6 === 63 ? 47 : 65;
}

function base64EncArr(aBytes) {
    var nMod3 = 2,
        sB64Enc = '';

    for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
        nMod3 = nIdx % 3;
        if (nIdx > 0 && ((nIdx * 4) / 3) % 76 === 0) {
            sB64Enc += '\r\n';
        }
        nUint24 |= aBytes[nIdx] << ((16 >>> nMod3) & 24);
        if (nMod3 === 2 || aBytes.length - nIdx === 1) {
            sB64Enc += String.fromCodePoint(
                uint6ToB64((nUint24 >>> 18) & 63),
                uint6ToB64((nUint24 >>> 12) & 63),
                uint6ToB64((nUint24 >>> 6) & 63),
                uint6ToB64(nUint24 & 63)
            );
            nUint24 = 0;
        }
    }

    return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');
}

/* UTF-8 array to DOMString and vice versa */

function UTF8ArrToStr(aBytes) {
    var sView = '';

    for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
        nPart = aBytes[nIdx];
        sView += String.fromCodePoint(
            nPart > 251 && nPart < 254 && nIdx + 5 < nLen /* six bytes */
                ? /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
                  (nPart - 252) * 1073741824 +
                      ((aBytes[++nIdx] - 128) << 24) +
                      ((aBytes[++nIdx] - 128) << 18) +
                      ((aBytes[++nIdx] - 128) << 12) +
                      ((aBytes[++nIdx] - 128) << 6) +
                      aBytes[++nIdx] -
                      128
                : nPart > 247 && nPart < 252 && nIdx + 4 < nLen /* five bytes */
                ? ((nPart - 248) << 24) + ((aBytes[++nIdx] - 128) << 18) + ((aBytes[++nIdx] - 128) << 12) + ((aBytes[++nIdx] - 128) << 6) + aBytes[++nIdx] - 128
                : nPart > 239 && nPart < 248 && nIdx + 3 < nLen /* four bytes */
                ? ((nPart - 240) << 18) + ((aBytes[++nIdx] - 128) << 12) + ((aBytes[++nIdx] - 128) << 6) + aBytes[++nIdx] - 128
                : nPart > 223 && nPart < 240 && nIdx + 2 < nLen /* three bytes */
                ? ((nPart - 224) << 12) + ((aBytes[++nIdx] - 128) << 6) + aBytes[++nIdx] - 128
                : nPart > 191 && nPart < 224 && nIdx + 1 < nLen /* two bytes */
                ? ((nPart - 192) << 6) + aBytes[++nIdx] - 128
                : /* nPart < 127 ? */ /* one byte */
                  nPart
        );
    }

    return sView;
}

function strToUTF8Arr(sDOMStr) {
    var aBytes,
        nChr,
        nStrLen = sDOMStr.length,
        nArrLen = 0;

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
            aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
            aBytes[nIdx++] = 128 + (nChr & 63);
        } else if (nChr < 0x200000) {
            /* four bytes */
            aBytes[nIdx++] = 240 + (nChr >>> 18);
            aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
            aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
            aBytes[nIdx++] = 128 + (nChr & 63);
            nChrIdx++;
        } else if (nChr < 0x4000000) {
            /* five bytes */
            aBytes[nIdx++] = 248 + (nChr >>> 24);
            aBytes[nIdx++] = 128 + ((nChr >>> 18) & 63);
            aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
            aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
            aBytes[nIdx++] = 128 + (nChr & 63);
            nChrIdx++;
        } /* if (nChr <= 0x7fffffff) */ else {
            /* six bytes */
            aBytes[nIdx++] = 252 + (nChr >>> 30);
            aBytes[nIdx++] = 128 + ((nChr >>> 24) & 63);
            aBytes[nIdx++] = 128 + ((nChr >>> 18) & 63);
            aBytes[nIdx++] = 128 + ((nChr >>> 12) & 63);
            aBytes[nIdx++] = 128 + ((nChr >>> 6) & 63);
            aBytes[nIdx++] = 128 + (nChr & 63);
            nChrIdx++;
        }
    }

    return aBytes;
}
```

### Tests

```js
//
/* Tests */

var sMyInput = 'Base 64 \u2014 Mozilla Developer Network';

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
//
// "Base 64 \u2014 Mozilla Developer Network"
var myArray = base64DecToArr('QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==');

// "Base 64 \u2014 Mozilla Developer Network"
var myBuffer = base64DecToArr('QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==').buffer;

alert(myBuffer.byteLength);
```

> **Note:** The function `base64DecToArr(sBase64[, nBlocksSize])` returns an [`uint8Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) of bytes. If your aim is to build a buffer of 16-bit / 32-bit / 64-bit raw data, use the `nBlocksSize` argument, which is the number of bytes of which the `uint8Array.buffer.bytesLength` property must result a multiple (`1` or omitted for ASCII, [binary strings](/en-US/docs/Web/API/DOMString/Binary) or UTF-8-encoded strings, `2` for UTF-16 strings, `4` for UTF-32 strings).

---

## Term: Baseline

-   CSS
-   Glossary
-   SVG
-   alignment
-   typography

---

> The **baseline** is a term used in European and West Asian typography meaning an imaginary line upon which the characters of a font rest.

The descenders of characters like g and p extend below this line. _Glossary("glyph", "Glyphs"_) with rounded lower and upper extents like C or 3 slightly extend below it.

East Asian scripts have no baseline. Their glyphs are placed in a square box without ascenders or descenders.

#### See also

-   [Baseline](<https://en.wikipedia.org/wiki/Baseline_(typography)>) on Wikipedia
-   [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment#types_of_alignment) on MDN

---

## Term: beacon

-   Beacon
-   Glossary
-   Reference
-   Web Performance

---

> A web **beacon** is a small object, such as a 1 pixel gif, embedded in markup, used to communicate information back to the web server or to 3rd party servers. Beacons are generally included to provide information about the user for statistical purposes. Beacons are often included within third party scripts for collecting user data, performance metrics and error reporting.

There is a [W3C Draft Beacon Specification](https://w3c.github.io/beacon/) to standardize the beacon as an interface to asynchronously transfer HTTP data from User Agent to a web server prior to page load without negative performance impact.

#### See also

-   [Real User Monitoring (RUM)](/en-US/docs/Glossary/Real_User_Monitoring)

---

## Term: BiDi

-   Accessibility
-   Glossary

---

> **BiDi** (BiDirectional) refers to a document containing both right-to-left and left-to-right text. Even when both directionalities occur in the same paragraph, the text in each language must appear in its proper directionality.

#### See also

-   _Interwiki("wikipedia", "Bi-directional text"_) on Wikipedia

---

## Term: BigInt

-   BigInt
-   Glossary
-   JavaScript
-   Reference
-   arbitrary precision format

---

> In _Glossary("JavaScript"_), **BigInt** is a numeric data type that can represent integers in the [arbitrary precision format](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums.

#### See also

-   _Interwiki("wikipedia", "Data type#Numeric_types", "Numeric types"_) on Wikipedia
-   The JavaScript type: [`BigInt`](/en-US/docs/Web/JavaScript/Data_structures#bigint_type)
-   The JavaScript global object _jsxref("BigInt"_)

---

## Term: Blink

-   Glossary
-   Infrastructure
-   Layout
-   Rendering engine

---

> Blink is an open-source browser layout engine developed by Google as part of Chromium (and therefore part of _glossary("Google Chrome", "Chrome"_) as well). Specifically, Blink began as a fork of the WebCore library in _glossary("WebKit"_), which handles layout, rendering, and _glossary("DOM"_), but now stands on its own as a separate _glossary("rendering engine"_).

#### See also

-   Blink project [home page](https://www.chromium.org/blink)
-   [Blink](<https://en.wikipedia.org/wiki/Blink_(browser_engine)>) on Wikipedia
-   [FAQ](https://www.chromium.org/blink/developer-faq) on Blink
-   [Glossary](/en-US/docs/Glossary)

    -   _glossary("Google Chrome"_)
    -   _glossary("Gecko"_)
    -   _glossary("Trident"_)
    -   _glossary("WebKit"_)
    -   _glossary("Rendering engine"_)

---

## Term: Block cipher mode of operation

-   Block cipher mode of operation
-   Cryptography
-   Glossary
-   Security

---

> A block cipher mode of operation, usually just called a "mode" in context, specifies how a block cipher should be used to encrypt or decrypt messages that are longer than the block size.

Most symmetric-key algorithms currently in use are block ciphers: this means that they encrypt data a block at a time. The size of each block is fixed and determined by the algorithm: for example AES uses 16-byte blocks. Block ciphers are always used with a _mode_, which specifies how to securely encrypt messages that are longer than the block size. For example, AES is a cipher, while CTR, CBC, and GCM are all modes. Using an inappropriate mode, or using a mode incorrectly, can completely undermine the security provided by the underlying cipher.

---

## Term: Block

-   Disambiguation
-   Glossary

---

> The term **block** can have several meanings depending on the context. It may refer to:

\_GlossaryDisambiguation}}

---

## Term: Boolean

-   Boolean
-   CodingScripting
-   Glossary
-   JavaScript
-   Programming Languages
-   data types

---

> In computer science, a **Boolean** is a logical data type that can have only the values `true` or `false`.

For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute (such as in [if statements](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)) or repeat (such as in [for loops](/en-US/docs/Web/JavaScript/Reference/Statements/for)).

Below is some JavaScript pseudocode (it's not truly executable code) demonstrating this concept.

```js
//
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

-   _Interwiki("wikipedia", "Boolean data type", "Boolean"_) on Wikipedia
-   The JavaScript global object: _jsxref("Boolean"_)
-   [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)

---

## Term: Boot2Gecko

-   B2G
-   Boot2Gecko
-   Firefox OS
-   Glossary
-   Infrastructure
-   Intro

---

> _Boot2Gecko_ (**B2G**) is the engineering codename for _glossary("Firefox OS"_) and refers to builds that haven't yet received official Firefox OS branding. (Firefox OS was also often called Boot2Gecko before the project had an official name.)

---

## Term: Bootstrap

-   Bootstrap
-   CSS
-   Glossary
-   Intro
-   framework

---

> Bootstrap is a free, open source _Glossary("HTML"_), CSS, and _Glossary("JavaScript"_) framework for quickly building responsive websites.

Initially, Bootstrap was called Twitter Blueprint and was developed by a team working at [Twitter](https://twitter.com/). It supports responsive design and features predefined design templates that you can use out of the box, or customize for your needs with your code. You don't need to worry about compatibility with other browsers either, as Bootstrap is compatible with all modern browsers and newer versions of _glossary("Microsoft Internet Explorer", "Internet Explorer"_).

#### See also

-   _interwiki("wikipedia", "Bootstrap (front-end framework)", "Bootstrap"_) on Wikipedia
-   [Download Bootstrap](https://getbootstrap.com/)
-   [Get started with the latest version](https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp)

---

## Term: Bounding Box

-   Bounding Box
-   CodingScripting
-   Design
-   Glossary

---

> The bounding box of an element is the smallest possible rectangle (aligned with the axes of that element's user coordinate system) that entirely encloses it and its descendants.

---

## Term: Breadcrumb

-   Accessibility
-   Glossary
-   Navigation
-   Search
-   Site map
-   breadcrumb

---

> A **breadcrumb**, or breadcrumb trail, is a navigational aid that is typically placed between a site's header and the main content, displaying either a hierarchy of the current page in relation to the site's structure, from top level to current page, or a list of the links the user followed to get to the current page, in the order visited.

A location breadcrumb for this document might look something like this:

[MDN](/) > [Glossary](/en-US/docs/Glossary) > Breadcrumb

Breadcrumb trails enable users to be aware of their location within a website. This type of navigation, if done correctly, helps users know where they are in a site and how they got there. They can also help a user get back to where they were before and can reduce the number of clicks needed to get to a higher-level page.

---

## Term: Brotli

-   Brotli
-   Glossary
-   Reference
-   Web Performance
-   compression

---

> **Brotli** is a general-purpose lossless compression algorithm.

It compresses data using a combination of a modern variant of the LZ77 algorithm, Huffman coding, and second-order context modeling, providing a compression ratio comparable to the best currently available general-purpose compression methods. Brotli provides better compression ratios than _glossary("GZip_compression", "gzip"_) and deflate speeds are comparable, but brotli compressing is a slower process than Gzip compression, so gzip may be a better option for the compression of non-_glossary("Cache", "cacheable"_) content.

Brotli is compatible with most modern browsers, but you may want to consider a fallback.

#### See also

-   [brotli.org](https://brotli.org/)
-   [Brotli Github repository](https://github.com/google/brotli)
-   _interwiki("wikipedia", "Brotli"_) on Wikipedia
-   [Brotli on Caniuse](https://caniuse.com/#feat=brotli)

---

## Term: Browser

-   Glossary
-   Navigation

---

> A **Web browser** or **browser** is a program that retrieves and displays pages from the _Glossary("World Wide Web","Web"_), and lets users access further pages through _Glossary("hyperlink","hyperlinks"_). A browser is the most familiar type of _Glossary("user agent"_).

#### See also

-   _Interwiki("wikipedia", "Web browser"_) on Wikipedia
-   [The evolution of the web](http://www.evolutionoftheweb.com/)
-   _Glossary("user agent"_) (Glossary)
-   _HTTPHeader("User-agent"_) (HTTP Header)
-   Download a browser

    -   [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/)
    -   [Google Chrome](https://www.google.com/chrome/)
    -   [Microsoft Edge](https://www.microsoft.com/en-us/edge)
    -   [Opera Browser](https://www.opera.com/)

---

## Term: Browsing context

-   Glossary

---

> A **browsing context** is the environment in which a browser displays a _domxref("Document"_). In modern browsers, it usually is a _tab_, but can be a _window_ or even only parts of a page, like a _frame_ or an _iframe_.

Each browsing context has a specific origin, the origin of the active document and a history that memorize all the displayed documents, in order.

Communication between browsing context is severely constrained. Between browsing context of the same origin, a _domxref("BroadcastChannel"_) can be opened and used.

#### See also

-   See _glossary("origin"_)

---

## Term: buffer

-   Buffer
-   CodingScripting
-   Glossary
-   NeedsContent

---

> A buffer is a storage in physical memory used to temporarily store data while it is being transferred from one place to another.

#### See also

-   [Data buffer](https://en.wikipedia.org/wiki/Data_buffer) on Wikipedia

---

## Term: Bézier curve

-   Bézier curve
-   Glossary
-   Graphics
-   Reference

---

> A **Bézier curve** (pronounced \[bezje]) is a mathematically described curve used in computer graphics and animation. In _Glossary("vector image", "vector images"_), they are used to model smooth curves that can be scaled indefinitely.

The curve is defined by a set of control points with a minimum of two. Web related graphics and animations use Cubic Béziers, which are curves with four control points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.

To draw the curve, two imaginary lines are drawn, one from P<sub>0</sub> to P<sub>1</sub> and the other from P<sub>1</sub> to P<sub>2</sub>. The end points of the lines are then steadily moved to the next point. A third imaginary line is drawn with its starting point moving steadily on the first helper line and the end point on the second helper line. On this imaginary line a point is drawn from its starting point moving steadily to its end point. The curve this point describes is the Bézier curve. Here's an animated illustration demonstrating the creation of the curve:

![Drawing a Bézier curve](bézier_3_big.gif)

#### See also

-   [Bézier curve on Wikipedia](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
-   [Cubic Bézier timing functions in CSS](</en-US/docs/Web/CSS/easing-function#the_cubic-bezier()_class_of_timing_functions>)
-   _SVGAttr("keySplines"_) SVG attribute

---

## Term: Cacheable

-   Glossary
-   WebMechanics

---

> A **cacheable** response is an HTTP response that can be cached, that is stored to be retrieved and used later, saving a new request to the server. Not all HTTP responses can be cached, these are the following constraints for an HTTP response to be cached:

-   The method used in the request is itself _cacheable_, that is either a _HTTPMethod("GET"_) or a _HTTPMethod("HEAD"_) method. A response to a _HTTPMethod("POST"_) or _HTTPMethod("PATCH"_) request can also be cached if freshness is indicated and the _HTTPHeader("Content-Location"_) header is set, but this is rarely implemented. (For example, Firefox does not support it per <https://bugzilla.mozilla.org/show_bug.cgi?id=109553>.) Other methods, like _HTTPMethod("PUT"_) or _HTTPMethod("DELETE"_) are not cacheable and their result cannot be cached.
-   The status code of the response is _known_ by the application caching, and it is considered _cacheable_. The following status code are cacheable: _HTTPStatus("200"_), _HTTPStatus("203"_), _HTTPStatus("204"_), _HTTPStatus("206"_), _HTTPStatus("300"_), _HTTPStatus("301"_), _HTTPStatus("404"_), _HTTPStatus("405"_), _HTTPStatus("410"_), _HTTPStatus("414"_), and _HTTPStatus("501"_).
-   There are _specific headers_ in the response, like _HTTPHeader("Cache-Control"_), that prevents caching.

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

-   Definition of [cacheable](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.3) in the HTTP specification.
-   Description of common cacheable methods: _HTTPMethod("GET"_), _HTTPMethod("HEAD"_)
-   Description of common non-cacheable methods: _HTTPMethod("PUT"_), _HTTPMethod("DELETE"_), often _HTTPMethod("POST"_)

---

## Term: Cache

-   Glossary
-   HTTP

---

> A **cache** (web cache or HTTP cache) is a component that stores HTTP responses temporarily so that it can be used for subsequent HTTP requests as long as it meets certain conditions.

#### See also

-   _interwiki("wikipedia", "Web cache"_) on Wikipedia

---

## Term: CalDAV

-   CalDAV
-   Glossary
-   Infrastructure

---

> CalDAV (Calendaring extensions to _Glossary("WebDAV"_)) is a _glossary("protocol"_) standardized by the _Glossary("IETF"_) and used to remotely access calendar data from a _glossary("server"_).

#### See also

-   _Interwiki("wikipedia", "CalDAV"_) on Wikipedia
-   [RFC 4791: Calendaring extensions to WebDAV (CalDAV)](https://datatracker.ietf.org/doc/html/rfc4791)
-   [RFC 6638: Scheduling Extensions to CalDAV](https://datatracker.ietf.org/doc/html/rfc6638)

---

## Term: Call stack

-   Call Stack
-   CodingScripting
-   Glossary
-   JavaScript

---

> A **call stack** is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple _glossary("function","functions"_) — what function is currently being run and what functions are called from within that function, etc.

-   When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
-   Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
-   When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
-   If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

## Example

---

```js
//

function greeting() {
    // [1] Some code here
    sayHi();
    // [2] Some code here
}
function sayHi() {
    return 'Hi!';
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

-   _Interwiki("wikipedia", "Call stack"_) on Wikipedia
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Call stack"_)
    -   _Glossary("Function"_)

---

## Term: Callback function

-   Callback
-   Callback function
-   CodingScripting
-   Glossary

---

> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Here is a quick example:

---

```js
//

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

-   _interwiki("wikipedia", "Callback_(computer*programming)", "Callback"*) on Wikipedia

---

## Term: Canonical order

-   Canonical order
-   CodingScripting
-   Glossary

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

-   [What does "canonical order" mean with respect to CSS properties?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) on Stack Overflow provides useful further discussion.
-   The [description of the formal syntax used for CSS values](/en-US/docs/Web/CSS/Value_definition_syntax) on MDN

---

## Term: Canvas

-   CodingScripting
-   Glossary
-   Graphics
-   HTML
-   JavaScript

---

> The **canvas element** is part of [HTML5](https://en.wikipedia.org/wiki/HTML5) and allows for dynamic, [scriptable](https://en.wikipedia.org/wiki/Scripting_language 'Scripting language') [rendering](<https://en.wikipedia.org/wiki/Rendering_(computer_graphics)> 'Rendering (computer graphics)') of 2D and 3D shapes and [bitmap](https://en.wikipedia.org/wiki/Bitmap) images.

It is a low level, procedural model that updates a [bitmap](https://en.wikipedia.org/wiki/Bitmap) and does not have a built-in [scene graph](https://en.wikipedia.org/wiki/Scene_graph 'Scene graph'). It provides an empty graphic zone on which specific _Glossary("JavaScript"_) _Glossary("API","APIs"_) can draw (such as Canvas 2D or _Glossary("WebGL"_)).

#### See also

-   _Interwiki("wikipedia", "Canvas element", "Canvas"_) on Wikipedia
-   [The Canvas tutorial on MDN](/en-US/docs/Web/API/Canvas_API/Tutorial)
-   The HTML _HTMLElement("canvas"_) element on MDN
-   [The Canvas general documentation on MDN](/en-US/docs/Web/API/Canvas_API)
-   _domxref("CanvasRenderingContext2D"_): The canvas 2D drawing API
-   [The Canvas 2D API specification](https://www.w3.org/TR/2dcontext/)

---

## Term: Card sorting

-   Card sorting
-   Design
-   Glossary

---

> Card sorting is a simple technique used in _glossary("Information architecture"_) whereby people involved in the design of a website (or other type of product) are invited to write down the content / services / features they feel the product should contain, and then organize those features into categories or groupings. This can be used for example to work out what should go on each page of a website. The name comes from the fact that often card sorting is carried out by literally writing the items to sort onto cards, and then arranging the cards into piles.

#### See also

-   _interwiki("wikipedia", "Card_sorting", "Card sorting"_) on Wikipedia

---

## Term: CardDAV

-   CardDAV
-   Glossary
-   Infrastructure

---

> **CardDAV** (vCard Extension to _Glossary("WebDAV"_)) is a _glossary("protocol"_) standardized by the _Glossary("IETF"_) and used to remote-access or share contact information over a _glossary("server"_).

#### See also

-   _Interwiki("wikipedia", "CardDAV"_) on Wikipedia
-   [RFC 6352: vCard Extensions to Web Distributed Authoring and Versioning (WebDAV)](https://datatracker.ietf.org/doc/html/rfc6352)

---

## Term: caret

-   Cursor
-   Glossary
-   Input
-   caret
-   insertion point
-   text cursor
-   text entry
-   text input
-   text insertion point

---

> A **caret** (sometimes called a "text cursor") is an indicator displayed on the screen to indicate where text input will be inserted.

Most user interfaces represent the caret using a thin vertical line or a character-sized box that flashes, but this can vary. This point in the text is called the **insertion point**. The word "caret" differentiates the text insertion point from the mouse cursor.

On the web, a caret is used to represent the insertion point in _HTMLElement("input"_) and _HTMLElement("textarea"_) elements, as well as any elements whose _htmlattrxref("contenteditable"_) attribute is set, thereby allowing the contents of the element to be edited by the user.

#### See also

-   _interwiki("wikipedia", "Caret navigation"_) on Wikipedia

### CSS related to the caret

You can set the color of the caret for a given element's editable content by setting the element's CSS _cssxref("caret-color"_) property to the appropriate _cssxref("&lt;color&gt;"_) value.

### HTML elements that may present a caret

These elements provide text entry fields or boxes and therefore make use of the caret.

-   [`<input type="text">`](/en-US/docs/Web/HTML/Element/input/text)
-   [`<input type="password">`](/en-US/docs/Web/HTML/Element/input/password)
-   [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search)
-   [`<input type="date">`](/en-US/docs/Web/HTML/Element/input/date), [`<input type="time">`](/en-US/docs/Web/HTML/Element/input/time), [`<input type="datetime">`](/en-US/docs/Web/HTML/Element/input/datetime), and [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local)
-   [`<input type="number">`](/en-US/docs/Web/HTML/Element/input/number)[, ](/en-US/docs/Web/HTML/Element/input/number)[`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range)
-   [`<input type="email">`](/en-US/docs/Web/HTML/Element/input/email), [`<input type="tel">`](/en-US/docs/Web/HTML/Element/input/tel), and [`<input type="url">`](/en-US/docs/Web/HTML/Element/input/url)
-   _HTMLElement("textarea"_)
-   Any element with its _htmlattrxref("contenteditable"_) attribute set

---

## Term: CDN

-   Glossary
-   Infrastructure

---

> A **CDN** (Content Delivery Network) is a group of servers spread out over many locations. These servers store duplicate copies of data so that servers can fulfill data requests based on which servers are closest to the respective end-users. CDNs make for fast service less affected by high traffic.

CDNs are used widely for delivering stylesheets and Javascript files (static assets) of libraries like Bootstrap, jQuery etc. Using CDN for those library files is preferable for a number of reasons:

-   Serving libraries' static assets over CDN lowers the request burden on an organization's own servers.
-   Most CDNs have servers all over the globe, so CDN servers may be geographically nearer to your users than your own servers. Geographical distance affects latency proportionally.
-   CDNs are already configured with proper cache settings. Using a CDN saves further configuration for static assets on your own servers.

---

## Term: Certificate authority

-   Cryptography
-   Glossary
-   Security

---

> A certificate authority (CA) is an organization that _Glossary("Signature/Security", "signs"_) _Glossary("Digital certificate", "digital certificates"_) and their associated _Glossary("Key", "public keys"_), thereby asserting that the contained information and keys are correct.

For a website digital certificate, this information minimally includes the name of the organization that requested the digital certificate (e.g., Mozilla Corporation), the site that it is for (e.g., mozilla.org), and the certificate authority.

Certificate authorities are the part of the Internet [public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) that allows browsers to verify website identity and securely connect over SSL (and HTTPS).

> **Note:** Web browsers come preloaded with a list of "root certificates". The browser can use these to reliably check that the website certificate was signed by a certificate authority that "chains back" to the root certificate (i.e. was trusted by the owner of the root certificate or an intermediate CA). Ultimately this process relies on every CA performing adequate identity checks before signing a certificate!

#### See also

-   [Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) on Wikipedia
-   [Public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) on Wikipedia
-   [Mozilla Included CA Certificate List](https://wiki.mozilla.org/CA/Included_Certificates)

---

## Term: Certified

-   Apps
-   B2G
-   Firefox OS
-   Glossary
-   Security
-   Trustworthy

---

> **Certified** means that an application, content or data transmission has successfully undergone evaluation by professionals with expertise in the relevant field, thereby indicating completeness, security and trustworthiness.

For details on certification in _glossary("Cryptography"_), please refer to _glossary("Digital Certificate"_).

#### See also

-   _Interwiki("wikipedia", "Professional_certification_(computer*technology)#Information_systems_security", "Certification"*) on Wikipedia

---

## Term: Challenge-response authentication

-   Security

---

> In security protocols, a _challenge_ is some data sent to the client by the server in order to generate a different response each time. Challenge-response protocols are one way to fight against [replay attacks](https://en.wikipedia.org/wiki/Replay_attack) where an attacker listens to the previous messages and resends them at a later time to get the same credentials as the original message.

The [HTTP authentication protocol](/en-US/docs/Web/HTTP/Authentication) is challenge-response based, though the "Basic" protocol isn't using a real challenge (the realm is always the same).

#### See also

-   [Challenge-response authentication](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) on Wikipedia.

---

## Term: Character encoding

-   Composing
-   Glossary

---

> An encoding defines a mapping between bytes and text. A sequence of bytes allows for different textual interpretations. By specifying a particular encoding (such as UTF-8), we specify how the sequence of bytes is to be interpreted.

For example, in HTML we normally declare a character encoding of UTF-8, using the following line:

```html
<meta charset="utf-8" />
```

This ensures that you can use characters from just about any human language in your HTML document, and they will display reliably.

#### See also

-   [Character encoding on W3C](https://www.w3.org/International/articles/definitions-characters/)
-   _Interwiki("wikipedia", "Character encoding"_) on Wikipedia

---

## Term: Character set

-   Glossary
-   character encoding
-   character set

---

> A **character set** is an encoding system to let computers know how to recognize _Glossary("Character"_), including letters, numbers, punctuation marks, and whitespace.

In earlier times, countries developed their own character sets due to their different languages used, such as Kanji JIS codes (e.g. Shift-JIS, EUC-JP, etc.) for Japanese, Big5 for traditional Chinese, and KOI8-R for Russian. However, _Glossary("Unicode"_) gradually became most acceptable character set for its universal language support.

If a character set is used incorrectly (For example, Unicode for an article encoded in Big5), you may see nothing but broken characters, which are called _Interwiki("wikipedia", "Mojibake"_).

#### See also

-   _Interwiki("wikipedia", "Character encoding"_) (Wikipedia)
-   _Interwiki("wikipedia", "Mojibake"_) (Wikipedia)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Character"_)
    -   _Glossary("Unicode"_)

---

## Term: Character

-   CodingScripting
-   Glossary
-   strings

---

> A _character_ is either a symbol (letters, numbers, punctuation) or non-printing "control" (e.g., carriage return or soft hyphen). _glossary("UTF-8"_) is the most common character set and includes the graphemes of the most popular human languages.

#### See also

-   _interwiki("wikipedia", "Character (computing)"_) on Wikipedia
-   _interwiki("wikipedia", "Character encoding"_) on Wikipedia
-   _interwiki("wikipedia", "ASCII"_) on Wikipedia
-   _interwiki("wikipedia", "UTF-8"_) on Wikipedia
-   _interwiki("wikipedia", "Unicode"_) on Wikipedia

---

## Term: Chrome

-   Browser
-   Chrome
-   Glossary
-   WebMechanics

---

> In a browser, the chrome is any visible aspect of a browser aside from the webpages themselves (e.g., toolbars, menu bar, tabs). This is not to be confused with the _glossary("Google Chrome"_) browser.

#### See also

-   [Browser and GUI Chrome](https://www.nngroup.com/articles/browser-and-gui-chrome/)

---

## Term: CIA

-   Glossary
-   Security

---

> CIA (Confidentiality, Integrity, Availability) (also called the CIA triad or AIC triad) is a model that guides an organization's policies for information security.

#### See also

-   _Interwiki("wikipedia", "Information_security#Key_concepts", "CIA"_) on Wikipedia

---

## Term: Cipher suite

-   Cryptography
-   Glossary
-   Security

---

> A cipher suite is a combination of a key exchange algorithm, authentication method, bulk encryption _Glossary("cipher"_), and message authentication code.

In a _Glossary("cryptosystem"_) like _Glossary("TLS"_), the client and server must agree on a cipher suite before they can begin communicating securely. A typical cipher suite looks like ECDHE_RSA_WITH_AES_128_GCM_SHA256 or ECDHE-RSA-AES128-GCM-SHA256, indicating:

-   ECDHE (elliptic curve Diffie-Hellman ephemeral) for key exchange
-   RSA for authentication
-   AES-128 as the cipher, with Galois/Counter Mode (GCM) as the block cipher mode of operation
-   SHA-256 as the hash-based message authentication code (HMAC)

#### See also

-   [Mozilla recommended cipher suite choices for TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)

---

## Term: Cipher

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> In _glossary("cryptography"_), a **cipher** is an algorithm that can _glossary("encryption", "encode"_) _glossary("Plaintext"_) to make it unreadable, and to _glossary("decryption", "decode"_) it back.

Ciphers were common long before the information age (e.g., [substitution ciphers](https://en.wikipedia.org/wiki/Substitution_cipher), [transposition ciphers](https://en.wikipedia.org/wiki/Transposition_cipher), and [permutation ciphers](https://en.wikipedia.org/wiki/Permutation_cipher)), but none of them were cryptographically secure except for the [one-time pad](https://en.wikipedia.org/wiki/One-time_pad).

Modern ciphers are designed to withstand _glossary("attack", "attacks"_) discovered by a _glossary("cryptanalysis", "cryptanalyst"_). There is no guarantee that all attack methods have been discovered, but each algorithm is judged against known classes of attacks.

Ciphers operate two ways, either as [block ciphers](https://en.wikipedia.org/wiki/Block_cipher) on successive blocks, or buffers, of data, or as [stream ciphers](https://en.wikipedia.org/wiki/Stream_cipher) on a continuous data flow (often of sound or video).

They also are classified according to how their _glossary("key", "keys"_) are handled:

-   [symmetric key](https://en.wikipedia.org/wiki/Symmetric_key_algorithm) algorithms use the same key to encode and decode a message. The key also must be sent securely if the message is to stay confidential.
-   [asymmetric key](https://en.wikipedia.org/wiki/Asymmetric_key_algorithm) algorithms use a different key for encryption and decryption.

#### See also

-   _Interwiki("wikipedia", "Cipher"_) on Wikipedia
-   [Encryption and Decryption](/en-US/docs/Archive/Security/Encryption_and_Decryption)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Block cipher mode of operation"_)
    -   _Glossary("Cipher"_)
    -   _Glossary("Ciphertext"_)
    -   _Glossary("Cipher suite"_)
    -   _Glossary("Cryptanalysis"_)
    -   _Glossary("Cryptography"_)
    -   _Glossary("Decryption"_)
    -   _Glossary("Encryption"_)
    -   _Glossary("Key"_)
    -   _Glossary("Plaintext"_)
    -   _Glossary("Public-key cryptography"_)
    -   _Glossary("Symmetric-key cryptography"_)

---

## Term: Ciphertext

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> In _glossary("cryptography"_), a ciphertext is a scrambled message that conveys information but is not legible unless _glossary("decryption","decrypted"_) with the right _glossary("cipher"_) and the right secret (usually a _glossary("key"_)), reproducing the original _glossary("Plaintext"_). A ciphertext's security, and therefore the secrecy of the contained information, depends on using a secure cipher and keeping the key secret.

#### See also

-   _Interwiki("wikipedia", "Ciphertext"_) on Wikipedia

---

## Term: Class

-   CodingScripting
-   Glossary

---

> In _glossary("OOP","object-oriented programming"_), a _class_ defines an _glossary("object","object's"_) characteristics. Class is a template definition of an object's _glossary("property","properties"_) and _glossary("method","methods"_), the "blueprint" from which other more specific instances of the object are drawn.

#### See also

-   [Class-based vs. prototype-based programming languages](/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#class-based_vs._prototype-based_languages) (like JavaScript)
-   [Using functions as classes in JavaScript](/en-US/docs/Learn/JavaScript/Objects#the_class)
-   [Class-based programming](https://en.wikipedia.org/wiki/Class-based_programming) on Wikipedia
-   [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) on Wikipedia

---

## Term: Clickjacking

-   Clickjacking
-   Interface-based attack
-   Glossary
-   Security
-   vulnerability
-   exploit

---

> Clickjacking is an interface-based attack that tricks website users into unwittingly clicking on malicious links. In clickjacking, the attackers embed their malicious links into buttons or legitimate pages in a website. In an infected _glossary("Site"_), whenever a user clicks on a legitimate link, the attacker gets the confidential information of that user, which ultimately compromises the user's privacy on the Internet.

Clickjacking can be prevented by implementing a [Content Security Policy (frame-ancestors)](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) and implementing [Set-Cookie attributes](/en-US/docs/Web/HTTP/Headers/Set-Cookie#attributes).

## Learn more

-   [Web security: clickjacking protection](/en-US/docs/Web/Security#clickjacking_protection)
-   [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking) on Wikipedia
-   [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) on OWASP

---

## Term: Closure

-   CodingScripting
-   Glossary

---

> The binding which defines the **_glossary("scope"_)** of execution. In _glossary("JavaScript"_), **_glossary("function","functions"_)** create a closure context.

#### See also

-   _Interwiki("wikipedia", "Closure_%28computer*programming%29", "Closure"*) on Wikipedia
-   [Closure](/en-US/docs/Web/JavaScript/Closures) on MDN

---

## Term: CMS

-   CMS
-   Composing
-   Content management system
-   Glossary

---

> A CMS (Content Management System) is software that allows users to publish, organize, change, or remove various kinds of content, not only text but also embedded images, video, audio, and interactive code.

#### See also

-   _Interwiki("wikipedia", "Content management system"_) on Wikipedia

---

## Term: Code point

-   Glossary

---

> A _code point_ is a number assigned to represent an abstract character in a system for representing text (such as Unicode). In Unicode, a code point is expressed in the form "U+1234" where "1234" is the assigned number. For example, the character "A" is assigned a code point of U+0041.

Character encoding forms, such as UTF-8 and UTF-16, determine how a Unicode code point should be encoded as a sequence of bytes. Different encoding forms may encode the same code point as different byte sequences: for example, the Cyrillic character "Ф", whose code point is U+0424, is encoded as `0xd0a4` in UTF-8 and as `0x0424` in UTF-16.

#### See also

-   [The Unicode Standard: Code Points and Characters](https://www.unicode.org/versions/Unicode14.0.0/ch02.pdf#G25564)

---

## Term: Code splitting

-   Glossary
-   Reference
-   Web Performance
-   code splitting
-   latency

---

> **Code splitting** is the splitting of code into various bundles or components which can then be loaded on demand or in parallel.

As an application grows in complexity or is maintained, CSS and JavaScripts files or bundles grow in byte size, especially as the number and size of included third-party libraries increases. To prevent the requirement of downloading ginormous files, scripts can be split into multiple smaller files. Then features required at page load can be downloaded immediately with additional scripts being [lazy loaded](/en-US/docs/Glossary/Lazy_load) after the page or application is interactive, thus improving performance. While the total amount of code is the same (and perhaps even a few bytes larger), the amount of code needed during initial load can be reduced.

Code splitting is a feature supported by bundlers like [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/) which can create multiple bundles that can be dynamically loaded at runtime.

#### See also

-   Bundling
-   [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
-   [HTTP/2](/en-US/docs/Glossary/HTTP_2)
-   [Tree shaking](/en-US/docs/Glossary/Tree_shaking)

---

## Term: Code unit

-   Glossary

---

> A _code unit_ is the basic component used by a character encoding system (such as UTF-8 or UTF-16). A character encoding system uses one or more code units to encode a Unicode _Glossary("code point"_).

In UTF-16 (the encoding system used for JavaScript strings) code units are 16-bit values. This means that operations such as indexing into a string or getting the length of a string operate on these 16-bit units. These units do not always map 1-1 onto what we might consider characters.

For example, sometimes characters with diacritics such as accents are represented using two Unicode code points:

```js
//
const myString = 'ñ';
myString.length;
// 2
```

Also, since not all of the code points defined by Unicode fit into 16 bits, many Unicode code points are encoded as a pair of UTF-16 code units, which is called a _surrogate pair_:

```js
//
const face = '🥵';
face.length;
// 2
```

The _jsxref("String/codePointAt", "codePointAt()"_) method of the JavaScript _jsxref("String"_) object enables you to retrieve the Unicode code point from its encoded form:

```js
//
const face = '🥵';
face.codePointAt(0);
// 129397
```

#### See also

-   [Unicode encoding FAQ](https://www.unicode.org/faq/utf_bom.html)

---

## Term: Codec

-   Glossary
-   WebMechanics

---

> A _codec_ (a blend word derived from "**_co_**der-**_dec_**oder") is a program, algorithm, or device that encodes or decodes a data stream. A given codec knows how to handle a specific encoding or compression technology.

#### See also

-   _Interwiki("wikipedia", "Codec"_) on Wikipedia
-   [Web video codec guide](/en-US/docs/Web/Media/Formats/Video_codecs)
-   [Web audio codec guide](/en-US/docs/Web/Media/Formats/Audio_codecs)
-   [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)

---

## Term: Compile time

-   CodingScripting
-   Glossary
-   JavaScript

---

> The _compile time_ is the time from when the program is first loaded until the program is _Glossary("parse","parsed"_).

#### See also

-   _Interwiki("wikipedia", "Compile time"_) on Wikipedia

---

## Term: Compile

-   CodingScripting
-   Glossary

---

> **Compiling** is the process of transforming a computer program written in a given _Glossary("computer programming", "language"_) into a set of instructions in another format or language. A **compiler** is a computer program to execute that task.

Typically, a compiler transforms code written in a higher-level language such as [C++](https://en.wikipedia.org/wiki/C++) or [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) or [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) into executable (runnable) code — so-called **binary code** or **machine code**. [WebAssembly](/en-US/docs/WebAssembly), for example, is a form of executable binary code that [can be compiled from code written in C++, Rust, C#, Go, Swift, and several other languages](https://webassembly.org/getting-started/developers-guide/) and that can then be run on any web page, in any browser.

Most compilers perform either ahead-of-time (AOT) compilation or just-in-time (JIT) compilation.

The GNU `gcc` compiler is one well-known example of an AOT compiler. AOT compilers are typically invoked from the command line in a shell environment (from within a terminal or console) or within an _Glossary("IDE"_).

JIT compilers are typically not invoked directly but are instead built into software runtimes internally, for the purpose of improving performance. For example, all major browsers now use JavaScript engines that have built-in JIT compilers.

Compilers may also translate among higher-level languages — for example, from TypeScript to _Glossary("JavaScript"_) — in which case, they are often sometimes referred to as **transpilers**.

#### See also

-   [Compiling from C/C++ to WebAssembly](/en-US/docs/WebAssembly/C_to_wasm)
-   [Compiling from Rust to WebAssembly](/en-US/docs/WebAssembly/Rust_to_wasm)
-   Wikipedia: _Interwiki("wikipedia", "Compiler"_)

---

## Term: Computer Programming

-   CodingScripting
-   Computer Programming
-   Programming Language
-   programming

---

> Computer programming is a process of composing and organizing a collection of instructions. These tell a computer/software program what to do in a language which the computer understands. These instructions come in the form of many different languages such as C++, Java, JavaScript, HTML, Python, Ruby, and Rust.

Using an appropriate language, you can program/create all sorts of software. For example, a program that helps scientists with complex calculations, a database that stores huge amounts of data, a web site that allows people to download music, or animation software that allows people to create animated movies.

#### See also

-   _Interwiki("wikipedia", "Computer programming"_) on Wikipedia
-   [List of Programming Languages: Wikipedia](https://en.wikipedia.org/wiki/List_of_programming_languages)

---

## Term: Conditional

-   Beginner
-   CodingScripting
-   Glossary

---

> A **condition** is a set of rules that can interrupt normal code execution or change it, depending on whether the condition is completed or not.

An instruction or a set of instructions is executed if a specific condition is fulfilled. Otherwise, another instruction is executed. It is also possible to repeat the execution of an instruction, or set of instructions, while a condition is not yet fulfilled.

#### See also

-   _interwiki("wikipedia", "Exception_handling#Condition_systems", "Condition"_) on Wikipedia
-   [Control flow](/en-US/docs/Glossary/Control_flow) on MDN
-   [Making decisions in your code — conditionals](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
-   [Control flow and error handling in JavaScript](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) on MDN

---

## Term: Constant

-   CodingScripting
-   Constant
-   Glossary

---

> A constant is a value that the programmer cannot change, for example numbers (1, 2, 42). With _glossary("variable","variables"_), on the other hand, the programmer can assign a new _glossary("value"_) to a variable name already in use.

Like variables, some constants are bound to identifiers. For example, the identifier `pi` could be bound to the value 3.14... .

#### See also

-   _Interwiki("wikipedia", "Constant_(computer*programming)", "Constant"*) on Wikipedia

---

## Term: Constructor

-   CodingScripting
-   Glossary

---

> A **constructor** belongs to a particular class _glossary("object"_) that is instantiated. The constructor initializes this object and can provide access to its private information. The concept of a constructor can be applied to most _glossary("OOP","object-oriented programming"_) languages. Essentially, a constructor in _glossary("JavaScript"_) is usually declared at the instance of a _glossary("class"_).

## Syntax

```js
//
// This is a generic default constructor class Default
function Default() {
}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, ..., argN){
}
```

To call the constructor of the class in JavaScript, use a `new` operator to assign a new _glossary("object reference"_) to a _glossary("variable"_).

---

```js
//

function Default() {}

// A new reference of a Default object assigned to a
// local variable defaultReference
var defaultReference = new Default();
```

#### See also

-   _Interwiki("wikipedia", "Constructor_%28object-oriented*programming%29", "Constructor"*) on Wikipedia
-   [The constructor in object oriented programming for JavaScript](/en-US/docs/Learn/JavaScript/Objects#the_constructor) on MDN
-   [New operator in JavaScript](/en-US/docs/Web/JavaScript/Reference/Operators/new) on MDN

---

## Term: Continuous Media

-   Glossary
-   Media

---

> Continuous media is data where there is a timing relationship between source and destination. The most common examples of continuous media are audio and motion video. Continuous media can be real-time (interactive), where there is a "tight" timing relationship between source and sink, or streaming (playback), where the relationship is less strict.

CSS can be used in a variety of contexts, including print media. And some CSS, particularly those that are used for layout, behave differently depending on the context they are in.

Continuous Media, therefore, identifies a context where the content is not broken up. It flows continuously. Web content displayed on a screen is continuous media, as is spoken content.

---

## Term: Control flow

-   CodingScripting
-   Glossary
-   JavaScript

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

-   _Interwiki("wikipedia", "Control flow"_) on Wikipedia
-   [JavaScript Reference - Control flow](/en-US/docs/Web/JavaScript/Reference#control_flow) on MDN
-   [Statements (Control flow)](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) on MDN

---

## Term: Cookie

-   Glossary
-   WebMechanics

---

> A cookie is a small piece of information left on a visitor's computer by a website, via a web browser.

Cookies are used to personalize a user's web experience with a website. It may contain the user's preferences or inputs when accessing that website. A user can customize their web browser to accept, reject, or delete cookies.

Cookies can be set and modified at the server level using the `Set-Cookie` [HTTP header](/en-US/docs/Web/HTTP/Cookies), or with JavaScript using [`document.cookie`](/en-US/docs/Web/API/Document/cookie).

#### See also

-   [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) on Wikipedia

---

## Term: Copyleft

-   Glossary
-   OpenPractices
-   Remixing
-   Sharing

---

> Copyleft is a term, usually referring to a license, used to indicate that such license requires that redistribution of said work is subject to the same license as the original. Examples of copyleft licenses are the GNU _Glossary("GPL"_) (for software) and the Creative Commons SA (Share Alike) licenses (for works of art).

#### See also

-   _Interwiki("wikipedia", "Copyleft"_) on Wikipedia

---

## Term: CORS-safelisted request header

-   CORS
-   Fetch

---

> A [CORS-safelisted request header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) is one of the following [HTTP headers](/en-US/docs/Web/HTTP/Headers):

-   _HTTPHeader("Accept"_),
-   _HTTPHeader("Accept-Language"_),
-   _HTTPHeader("Content-Language"_),
-   _HTTPHeader("Content-Type"_).

When containing only these headers (and values that meet the additional requirements laid out below), a requests doesn't need to send a _glossary("preflight request"_) in the context of [CORS](/en-US/docs/Glossary/CORS).

You can safelist more headers using the _HTTPHeader("Access-Control-Allow-Headers"_) header and also list the above headers there to circumvent the following additional restrictions:

#### Additional restrictions

CORS-safelisted headers must also fulfill the following requirements in order to be a CORS-safelisted request header:

-   For _HTTPHeader("Accept-Language"_) and _HTTPHeader("Content-Language"_): can only have values consisting of `0-9`, `A-Z`, `a-z`, space or `*,-.;=`.
-   For _HTTPHeader("Accept"_) and _HTTPHeader("Content-Type"_): can't contain a _CORS-unsafe request header byte_: `0x00-0x1F` (except for `0x09 (HT)`, which is allowed), `"():<>?@[\]{}`, and `0x7F (DEL)`.
-   For _HTTPHeader("Content-Type"_): needs to have a MIME type of its parsed value (ignoring parameters) of either `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`.
-   For any header: the value's length can't be greater than 128.

#### See also

-   _Glossary("CORS-safelisted response header"_)
-   _Glossary("Forbidden header name"_)
-   _Glossary("Request header"_)

---

## Term: CORS-safelisted response header

-   CORS
-   Fetch
-   Glossary
-   HTTP

---

> A _CORS-safelisted response header_ is an [HTTP header](/en-US/docs/Web/HTTP/Headers) in a [CORS](/en-US/docs/Web/HTTP/CORS) response that it is considered _safe_ to expose to client scripts. Only safelisted response headers are made available to web pages.

By default, the safelist includes the following response headers:

-   _HTTPHeader("Cache-Control"_)
-   _HTTPHeader("Content-Language"_)
-   _HTTPHeader("Content-Length"_)
-   _HTTPHeader("Content-Type"_)
-   _HTTPHeader("Expires"_)
-   _HTTPHeader("Last-Modified"_)
-   _HTTPHeader("Pragma"_)

Additional headers can be added to the safelist using _HTTPHeader("Access-Control-Expose-Headers"_).

> **Note:** _HTTPHeader("Content-Length"_) was not part of the original set of safelisted response headers \[[ref](https://github.com/whatwg/fetch/pull/626)]

## Examples

### Extending the safelist

You can extend the list of CORS-safelisted response headers by using the _HTTPHeader("Access-Control-Expose-Headers"_) header:

```plain
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

#### See also

-   [HTTP](/en-US/docs/Web/HTTP)
-   [HTTP headers](/en-US/docs/Web/HTTP/Headers)
-   _HTTPHeader("Access-Control-Expose-Headers"_)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("CORS"_)
    -   _Glossary("CORS-safelisted_request_header", "CORS-safelisted request header"_)
    -   _Glossary("Forbidden header name"_)
    -   _Glossary("Request header"_)

---

## Term: CORS

-   Glossary
-   Infrastructure
-   Security

---

> **CORS** (Cross-Origin Resource Sharing) is a system, consisting of transmitting _Glossary("HTTP_header", "HTTP headers"_), that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

The [same-origin security policy](/en-US/docs/Web/Security/Same-origin_policy) forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.

#### See also

-   [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS) on MDN
-   _Interwiki("wikipedia", "Cross-origin resource sharing"_) on Wikipedia
-   [Fetch specification](https://fetch.spec.whatwg.org)

### CORS headers

-   _HTTPHeader("Access-Control-Allow-Origin"_)
-   -   : Indicates whether the response can be shared.
-   _HTTPHeader("Access-Control-Allow-Credentials"_)
-   -   : Indicates whether or not the response to the request can be exposed when the credentials flag is true.
-   _HTTPHeader("Access-Control-Allow-Headers"_)
-   -   : Used in response to a preflight request to indicate which HTTP headers can be used when making the actual reques
-   _HTTPHeader("Access-Control-Allow-Methods"_)
-   -   : Specifies the method or methods allowed when accessing the resource in response to a preflight request.
-   _HTTPHeader("Access-Control-Expose-Headers"_)
    -   : Indicates which headers can be exposed as part of the response by listing their names.
-   _HTTPHeader("Access-Control-Max-Age"_)
    -   : Indicates how long the results of a preflight request can be cached.
-   _HTTPHeader("Access-Control-Request-Headers"_)
    -   : Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
-   _HTTPHeader("Access-Control-Request-Method"_)
    -   : Used when issuing a preflight request to let the server know which [HTTP method](/en-US/docs/Web/HTTP/Methods) will be used when the actual request is made.
-   _HTTPHeader("Origin"_)
    -   : Indicates where a fetch originates from.

---

## Term: Crawler

-   Browser
-   Crawler
-   Glossary
-   Infrastructure

---

> A web crawler is a program, often called a bot or robot, which systematically browses the _glossary("World Wide Web","Web"_) to collect data from webpages. Typically search engines (e.g. Google, Bing, etc.) use crawlers to build indexes.

#### See also

-   _Interwiki("wikipedia", "Web crawler"_) on Wikipedia
-   _Glossary("Search engine"_) (Glossary)

---

## Term: CRLF

-   CR
-   CRLF
-   Glossary
-   Infrastructure
-   LF
-   carriage return
-   line feed

---

> CR and LF are [control characters](https://en.wikipedia.org/wiki/Control_character) or [bytecode](https://en.wikipedia.org/wiki/Bytecode) that can be used to mark a line break in a text file.

-   CR = **Carriage Return** (`\r`, `0x0D` in hexadecimal, 13 in decimal) — moves the cursor to the beginning of the line without advancing to the next line.
-   LF = **Line Feed** (`\n`, `0x0A` in hexadecimal, 10 in decimal) — moves the cursor down to the next line without returning to the beginning of the line.

A CR immediately followed by a LF (CRLF, `\r\n`, or `0x0D0A`) moves the cursor down to the next line and then to the beginning of the line.

#### See also

-   _interwiki("wikipedia", "Newline#In_programming_languages", "Newline"_) on Wikipedia
-   _interwiki("wikipedia", "Carriage_return#Computers", "Carriage return"_) on Wikipedia

---

## Term: Cross-site scripting

-   Cross Site Scripting
-   DOM
-   Glossary
-   Security
-   XSS
-   exploit

---

> Cross-site scripting (XSS) is a security exploit which allows an attacker to inject into a website malicious client-side code. This code is executed by the victims and lets the attackers bypass access controls and impersonate users. According to the Open Web Application Security Project, XSS was the [seventh most common Web app vulnerability](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>) in 2017.

These attacks succeed if the Web app does not employ enough validation or encoding. The user's browser cannot detect the malicious script is untrustworthy, and so gives it access to any cookies, session tokens, or other sensitive site-specific information, or lets the malicious script rewrite the _glossary("HTML"_) content.

#### See also

-   [Cross-site scripting (XSS)](/en-US/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)
-   _Interwiki("wikipedia", "Cross-site scripting"_) on Wikipedia
-   [Cross-site scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
-   [Another article about Cross-site scripting](https://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/)
-   [XSS Attack - Exploit & Protection](https://secure.wphackedhelp.com/blog/wordpress-xss-attack/)

---

## Term: Cross Axis

-   CSS
-   Glossary
-   cross axis
-   flexbox

---

> The cross axis in _glossary("flexbox"_) runs perpendicular to the _glossary("main axis"_), therefore if your _cssxref("flex-direction"_) is either `row` or `row-reverse` then the cross axis runs down the columns.

![The cross axis runs down the column](basics3.png)

If your main axis is `column` or `column-reverse` then the cross axis runs along the rows.

![The cross axis runs along the row.](basics4.png)

Alignment of items on the cross axis is achieved with the `align-items` property on the flex container or `align-self` property on individual items. In the case of a multi-line flex container, with additional space on the cross axis, you can use `align-content` to control the spacing of the rows.

#### See also

### Property reference

-   _cssxref("align-content"_)
-   _cssxref("align-items"_)
-   _cssxref("align-self"_)
-   _cssxref("flex-wrap"_)
-   _cssxref("flex-direction"_)
-   _cssxref("flex"_)
-   _cssxref("flex-basis"_)
-   _cssxref("flex-flow"_)
-   _cssxref("flex-grow"_)
-   _cssxref("flex-shrink"_)
-   _cssxref("justify-content"_)
-   _cssxref("order"_)

### Further reading

-   CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
-   CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
-   CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Flex"_)
    -   _Glossary("Flex Container"_)
    -   _Glossary("Flex Item"_)
    -   _Glossary("Grid"_)

---

## Term: CRUD

-   Glossary
-   Infrastructure

---

> **CRUD** (Create, Read, Update, Delete) is an acronym for ways one can operate on stored data. It is a mnemonic for the four basic functions of persistent storage. CRUD typically refers to operations performed in a database or datastore, but it can also apply to higher level functions of an application such as soft deletes where data is not actually deleted but marked as deleted via a status.

#### See also

-   _Interwiki("wikipedia", "CRUD"_) on Wikipedia

---

## Term: Cryptanalysis

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> **Cryptanalysis** is the branch of _glossary("cryptography"_) that studies how to break codes and cryptosystems. Cryptanalysis creates techniques to break _glossary("cipher","ciphers"_), in particular by methods more efficient than a [brute-force search](https://en.wikipedia.org/wiki/Brute-force_search). In addition to traditional methods like [frequency analysis](https://en.wikipedia.org/wiki/Frequency_analysis) and [index of coincidence](https://en.wikipedia.org/wiki/Index_of_coincidence), cryptanalysis includes more recent methods, like [linear cryptanalysis](https://en.wikipedia.org/wiki/Linear_cryptanalysis) or [differential cryptanalysis](https://en.wikipedia.org/wiki/Differential_cryptanalysis), that can break more advanced ciphers.

#### See also

-   _Interwiki("wikipedia", "Cryptanalysis"_) on Wikipedia

---

## Term: Cryptographic hash function

-   Cryptography
-   Glossary
-   Security

---

> A cryptographic hash function, also sometimes called a _digest function_, is a _glossary("cryptography", "cryptographic"_) primitive transforming a message of arbitrary size into a message of fixed size, called a _glossary("digest"_). Cryptographic hash functions are used for authentication, _Glossary("digital signature", "digital signatures"_), and _Glossary("HMAC", "message authentication codes"_).

To be used for cryptography, a hash function must have these qualities:

-   quick to compute (because they are generated frequently)
-   not invertible (each digest could come from a very large number of messages, and only brute-force can generate a message that leads to a given digest)
-   tamper-resistant (any change to a message leads to a different digest)
-   collision-resistant (it should be impossible to find two different messages that produce the same digest)

Cryptographic hash functions such as MD5 and SHA-1 are considered broken, as attacks have been found that significantly reduce their collision resistance.

#### See also

-   _interwiki("wikipedia", "Cryptographic hash function", "Cryptographic hash function"_) on Wikipedia
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Symmetric-key cryptography"_)

---

## Term: Cryptography

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> **Cryptography**, or cryptology, is the science that studies how to encode and transmit messages securely. Cryptography designs and studies algorithms used to encode and decode messages in an insecure environment, and their applications.

More than just **data confidentiality**, cryptography also tackles **identification**, **authentication**, **non-repudiation**, and **data integrity**. Therefore it also studies usage of cryptographic methods in context, **cryptosystems**.

#### See also

-   _Interwiki("wikipedia", "Cryptography"_) on Wikipedia
-   [Information security tutorial](/en-US/docs/Web/Security/Information_Security_Basics)
-   [Encrypting and Decrypting](/en-US/docs/Archive/Security/Encryption_and_Decryption)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Block cipher mode of operation"_)
    -   _Glossary("Cipher"_)
    -   _Glossary("Ciphertext"_)
    -   _Glossary("Cipher suite"_)
    -   _Glossary("Cryptanalysis"_)
    -   _Glossary("Cryptography"_)
    -   _Glossary("Decryption"_)
    -   _Glossary("Encryption"_)
    -   _Glossary("Key"_)
    -   _Glossary("Plaintext"_)
    -   _Glossary("Public-key cryptography"_)
    -   _Glossary("Symmetric-key cryptography"_)

---

## Term: CSP

-   Glossary
-   HTTP
-   Infrastructure

---

> A CSP ([Content Security Policy](/en-US/docs/Web/HTTP/CSP)) is used to detect and mitigate certain types of website related attacks like _Glossary("Cross-site_scripting"_), [clickjacking](/en-US/docs/Glossary/Clickjacking) and data injections.

The implementation is based on an _Glossary("HTTP"_) header called _HTTPHeader("Content-Security-Policy"_).

#### See also

-   [Content Security Policy on Wikipedia](https://en.wikipedia.org/wiki/Content_Security_Policy)
-   [Content Security Policy documentation on MDN](/en-US/docs/Web/HTTP/CSP)

---

## Term: CSRF

-   Glossary
-   Security

---

> **CSRF** (Cross-Site Request Forgery) is an attack that impersonates a trusted user and sends a website unwanted commands.

This can be done, for example, by including malicious parameters in a _glossary("URL"_) behind a link that purports to go somewhere else:

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

For users who have modification permissions on `https://www.example.com`, the `<img>` element executes action on `https://www.example.com` without their noticing, even if the element is not at `https://www.example.com`.

There are many ways to prevent CSRF, such as implementing _glossary("REST", "RESTful API"_), adding secure tokens, etc.

#### See also

-   _Interwiki("wikipedia", "Cross-site request forgery"_) on Wikipedia
-   [Prevention measures](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

---

## Term: CSS pixel

-   CSS
-   CSS Pixel
-   Glossary
-   height
-   length
-   pixel
-   size
-   unit
-   width

---

> The term **CSS pixel** is synonymous with the CSS unit of absolute length _px_ — which is [normatively defined](https://drafts.csswg.org/css-values/#absolute-lengths) as being exactly 1/96th of 1 inch.

#### See also

-   [CSS Length Explained](https://hacks.mozilla.org/2013/09/css-length-explained/) on the MDN Hacks Blog

---

## Term: CSS preprocessor

-   CSS
-   Glossary

---

> A **CSS preprocessor** is a program that lets you generate _Glossary("CSS"_) from the preprocessor's own unique _Glossary("syntax"_).

There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

To use a CSS preprocessor, you must install a CSS compiler on your web _Glossary("server"_); Or use the CSS preprocessor to compile on the development environment, and then upload compiled CSS file to the web server.

#### See also

-   A few of most popular CSS preprocessors:

    -   [Sass](https://sass-lang.com/)
    -   [LESS](https://lesscss.org/)
    -   [Stylus](https://stylus-lang.com/)
    -   [PostCSS](https://postcss.org/)

-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("CSS"_)

---

## Term: Selector (CSS)

-   CSS
-   CSS Selector
-   CodingScripting
-   Glossary
-   HTML
-   Selector

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

<div class="warning">Be careful! There are wizards present, and they are quick to anger!</div>

<div id="customized">
    <p>This is happy text.</p>

    <div class="warning">Be careful! There are wizards present, and they are quick to anger!</div>
</div>
```

The resulting page content is styled like this:

_EmbedLiveSample("Example", 640, 240_)

#### See also

-   [Learn more about CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) in our introduction to CSS.
-   Basic selectors

    -   [Type selectors](/en-US/docs/Web/CSS/Type_selectors) `elementname`
    -   [Class selectors](/en-US/docs/Web/CSS/Class_selectors) `.classname`
    -   [ID selectors](/en-US/docs/Web/CSS/ID_selectors) `#idname`
    -   [Universal selectors](/en-US/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
    -   [Attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) `[attr=value]`
    -   [State selectors](/en-US/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

-   Grouping selectors

    -   [Selector list](/en-US/docs/Web/CSS/Selector_list) `A, B`

-   Combinators

    -   [Adjacent sibling selectors](/en-US/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
    -   [General sibling selectors](/en-US/docs/Web/CSS/General_sibling_combinator) `A ~ B`
    -   [Child selectors](/en-US/docs/Web/CSS/Child_combinator) `A > B`
    -   [Descendant selectors](/en-US/docs/Web/CSS/Descendant_combinator) `A B`

-   Pseudo

    -   [Pseudo classes](/en-US/docs/Web/CSS/Pseudo-classes) `:`
    -   [Pseudo elements](/en-US/docs/Web/CSS/Pseudo-elements) `::`

---

## Term: Media (CSS)

-   CSS
-   Glossary
-   Intro
-   Media

---

> In the context of _Glossary("CSS"_) (Cascading Style Sheets), the term **_media_** refers to the destination to which the document is to be drawn by the _Glossary("rendering engine"_).

Typically, this is a screen—but it may also be a printer, Braille display, or another type of device.

CSS offers several features that allow you to tweak your document's styles—or even offer different styles—according to the media **type** (such as screen or print, to name two) or media **capabilities** (such as width, resolution, or other values) of the viewer's device.

#### See also

-   [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
-   [Media queries](/en-US/docs/Web/CSS/Media_Queries)
-   _cssxref("@media"_) [at-rule](/en-US/docs/Web/CSS/At-rule): Conditionally apply part of a [stylesheet](/en-US/docs/Learn/CSS/First_steps/How_CSS_works#how_to_apply_your_css_to_your_html), based on the result of a media query.
-   _domxref("Window.matchMedia()"_): Test the viewing device against a media query

---

## Term: CSS Object Model (CSSOM)

-   CSS
-   CSSOM
-   DOM
-   Glossary

---

> The [**CSS Object Model (CSSOM)**](/en-US/docs/Web/API/CSS_Object_Model) is a set of APIs for reading and modifying a document's style-related (CSS) information. In other words, similar to the way in which the [DOM](/en-US/docs/Web/API/Document_Object_Model) enables a document's structure and content to be read and modified from JavaScript, the CSSOM allows the document's styling to be read and modified from JavaScript.

#### See also

-   [Populating the page: how browsers work](/en-US/docs/Web/Performance/How_browsers_work)

---

## Term: Data structure

-   CodingScripting
-   Data structure
-   Glossary

---

> **Data structure** is a particular way of organizing _data_ so that it can be used efficiently.

#### See also

-   _interwiki("wikipedia", "Data_structure", "Data structure"_) on Wikipedia

---

## Term: Database

-   Database
-   Glossary
-   Sql

---

> A **database** is a storing system that collects organized data, to make some works easier like searching, structure, and extend.

In web development, most databases use the relational database management system (RDBMS) to organize data and programming in _glossary("SQL"_). Some databases, however, don't follow the former mechanism to organized data, which called NoSQL.

Some famous server-side RDBMS are _MySQL_(or _MariaDB_ which is a fork of it), _SQL Server_, and _Oracle Database_. On the other hand, some famous NoSQL examples are _MongoDB_, _Cassandra_, and _Redis_.

Browsers also have their own database system called _glossary("IndexedDB"_).

#### See also

-   _Interwiki("wikipedia", "Database"_) on Wikipedia
-   Glossary

    -   _Glossary("IndexedDB"_)
    -   _Glossary("SQL"_)

---

## Term: Decryption

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> In _glossary("cryptography"_), **decryption** is the conversion of _glossary("ciphertext"_) into _glossary("Plaintext"_).

Decryption is a cryptographic primitive: it transforms a ciphertext message into plaintext using a cryptographic algorithm called a _glossary("cipher"_). Like encryption, decryption in modern ciphers is performed using a specific algorithm and a secret, called the _glossary("key"_). Since the algorithm is often public, the key must stay secret if the encryption stays secure.

![The decryption primitive.](decryption.png)

Decryption is the reverse of _glossary("encryption"_) and if the key stays secret, decryption without knowing the specific secret, decryption is mathematically hard to perform. How hard depends on the security of the cryptographic algorithm chosen and evolves with the progress of _glossary("cryptanalysis"_).

#### See also

-   [Encryption and Decryption](/en-US/docs/Encryption_and_Decryption)

---

## Term: Delta

-   Delta
-   Glossary
-   difference
-   value

---

> The term **delta** refers to the difference between two values or states.

The name originates from the Greek letter Δ (delta), which is equivalent to the letter _D_ in the Roman alphabet. _Delta_ refers to the use of the letter Δ as a shorthand for _difference_.

The term _delta_ is commonly used when communicating changes in speed, position, or acceleration of a physical or virtual object. It's also used when describing changes in the volume or frequency of sound waves.

For example, when describing how far an object on the screen moves left-to-right, one might use the term _delta x_ or _Δx_.

Likewise, given the new value of _X_ and its old value, you might compute the delta like this:

```js
//
let deltaX = newX - oldX;
```

More commonly, you receive the delta and use it to update a saved previous condition:

```js
//
let newX = oldX + deltaX;
```

#### See also

-   Mouse wheel events (_domxref("WheelEvent"_) offer the amount the wheel moved since the last event in its _domxref("WheelEvent.deltaX", "deltaX"_), _domxref("WheelEvent.deltaY", "deltaY"_), and _domxref("WheelEvent.deltaZ", "deltaZ"_) properties, for example.

---

## Term: Denial of Service

-   Attack
-   Denial of Service
-   Glossary
-   Intro
-   Security

---

> See [DoS attack](/en-US/docs/Glossary/DOS_attack) for more information.

---

## Term: Descriptor (CSS)

-   CSS
-   CodingScripting
-   Glossary
-   NeedsContent

---

> A **CSS descriptor** defines the characteristics of an _cssxref("at-rule"_). At-rules may have one or multiple descriptors. Each descriptor has:

-   A name
-   A value, which holds the component values
-   An "!important" flag, which in its default state is unset

---

## Term: Deserialization

-   Deserialization
-   Deserialize
-   Glossary
-   JavaScript

---

> The process whereby a lower-level format (e.g. that has been transferred over a network, or stored in a data store) is translated into a readable object or other data structure.

In _Glossary("JavaScript"_), for example, you can deserialize a _Glossary("JSON"_) _Glossary("string"_) to an object by calling the _Glossary("function"_) _jsxref("JSON.parse()"_).

#### See also

-   [Serialization](https://en.wikipedia.org/wiki/Serialization) on Wikipedia

---

## Term: Developer Tools

-   CodingScripting
-   Developer Tools
-   Glossary

---

> Developer tools (or "development tools" or short "DevTools") are programs that allow a developer to create, test and debug software.

Current browsers provide integrated developer tools, which allow to inspect a website. They let users inspect and debug the page's _Glossary("HTML"_), _Glossary("CSS"_), and _Glossary("JavaScript"_), allow to inspect the network traffic it causes, make it possible to measure it's performance, and much more.

#### See also

-   _interwiki("wikipedia", "Web development tools", "Web development tools"_) on Wikipedia
-   [Firefox Developer Tools](/en-US/docs/Tools) on MDN
-   [Firebug](https://getfirebug.com/) (former developer tool for Firefox)
-   [Chrome DevTools](https://developer.chrome.com/devtools) on chrome.com
-   [Safari Web Inspector](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007874-CH1-SW1) on apple.com
-   [Edge Dev Tools](https://docs.microsoft.com/microsoft-edge/f12-devtools-guide) on microsoft.com

---

## Term: DHTML

-   CodingScripting
-   DHTML
-   Glossary
-   HTML

---

> **DHTML** (Dynamic _glossary("HTML"_)) refers to the code behind interactive webpages that need no plugins like _Glossary("Adobe Flash","Flash"_) or _Glossary("Java"_). DHTML aggregates the combined functionality of _Glossary("HTML"_), _Glossary("CSS"_), the _Glossary("DOM"_), and _Glossary("JavaScript"_).

#### See also

-   _interwiki("wikipedia", "Dynamic HTML", "DHTML"_) on Wikipedia

---

## Term: Digest

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> A **digest** is a small value generated by a _glossary("cryptographic hash function", "hash function"_) from a whole message. Ideally, a digest is quick to calculate, irreversible, and unpredictable, and therefore indicates whether someone has tampered with a given message.

A digest can be used to perform several tasks:

-   in non-cryptographic applications (e.g., the index of hash tables, or a fingerprint used to detect duplicate data or to uniquely identify files)
-   verify message integrity (a tampered message will have a different hash)
-   store passwords so that they can't be retrieved, but can still be checked (To do this securely, you also need to salt the password.)
-   generate pseudo-random numbers
-   generate _glossary("key","keys"_)

It is critical to choose the proper hash function for your use case to avoid collisions and predictability.

#### See also

-   See _glossary("Cryptographic hash function"_)
-   _interwiki("wikipedia", "Cryptographic_hash_function", "Hash function"_) on Wikipedia

---

## Term: Digital certificate

-   Cryptography
-   Glossary
-   Security

---

> A digital certificate is a data file that binds a publicly known _Glossary("Key", "cryptographic key"_) to an organization.

A digital certificate contains information about an organization, such as the common name (e.g., mozilla.org), the organization unit (e.g., Mozilla Corporation), and the location (e.g., Mountain View). Digital certificates are most commonly signed by a _Glossary("certificate authority"_), attesting to the certificate's authenticity.

#### See also

-   _interwiki("wikipedia", "Public_key_certificate", "Digital certificate "_) on Wikipedia

---

## Term: Distributed Denial of Service

-   Attack
-   DDoS
-   Denial of Service
-   Glossary
-   Intro
-   Security

---

> A Distributed Denial-of-Service (DDoS) is an attack in which many compromised systems are made to attack a single target, in order to swamp server resources and block legitimate users.

Normally many persons, using many bots, attack high-profile Web _glossary("server","servers"_) like banks or credit-card payment gateways. DDoS concerns computer networks and CPU resource management.

In a typical DDoS attack, the assailant begins by exploiting a vulnerability in one computer system and making it the DDoS master. The attack master, also known as the botmaster, identifies and infects other vulnerable systems with malware. Eventually, the assailant instructs the controlled machines to launch an attack against a specified target.

There are two types of DDoS attacks: a network-centric attack (which overloads a service by using up bandwidth) and an application-layer attack (which overloads a service or database with application calls). The overflow of data to the target causes saturation in the target machine so that it cannot respond or responds very slowly to legitimate traffic (hence the name "denial of service"). The infected computers' owners normally don't know that their computers have been compromised, and they also suffer loss of service.

A computer under an intruder's control is called a zombie or bot. A network of co-infected computers is known as a botnet or a zombie army. Both Kaspersky Labs and Symantec have identified botnets -- not spam, viruses, or worms -- as the biggest threat to Internet security.

The United States Computer Emergency Readiness Team (US-CERT) defines symptoms of denial-of-service attacks to include:

-   Unusually slow network performance (opening files or accessing websites)
-   Unavailability of a particular website
-   Inability to access any website
-   Dramatic increase in the number of spam emails received—(this type of DoS attack is considered an email bomb)
-   Disconnection of a wireless or wired internet connection
-   Longterm denial of access to the Web or any internet services

#### See also

-   _interwiki("wikipedia", "Denial-of-service_attack", "Denial-of-service attack"_) on Wikipedia

---

## Term: DMZ

-   Glossary
-   Networking
-   Security

---

> A **DMZ** (DeMilitarized Zone) is a way to provide an insulated secure interface between an internal network (corporate or private) and the outside untrusted world — usually the Internet.

It exposes only certain defined endpoints, while denying access to the internal network from _Glossary('node/networking', 'external nodes'_).

#### See also

-   _Interwiki("wikipedia", "DMZ (computing)", "DMZ"_) on Wikipedia

---

## Term: DNS

-   DNS
-   Domain Name System
-   Glossary
-   Infrastructure

---

> **DNS** (Domain Name System) is a hierarchical and decentralized naming system for Internet connected resources. DNS maintains a list of _Glossary("domain name","domain names"_) along with the resources, such as IP addresses, that are associated with them.

The most prominent function of DNS is the translation of human-friendly domain names (such as mozilla.org) to a numeric _Glossary("IP address"_) (such as 151.106.5.172); this process of mapping a domain name to the appropriate IP address is known as a **DNS lookup**. By contrast, a **reverse DNS lookup** (rDNS) is used to determine the domain name associated with an IP address.

#### See also

-   [Understanding domain names](/en-US/docs/Learn/Common_questions/What_is_a_domain_name)
-   _Interwiki("wikipedia", "Domain_Name_System", "Domain Name System"_) on Wikipedia

---

## Term: Doctype

-   Browser
-   CodingScripting
-   DOCTYPE
-   Glossary
-   HTML
-   Intro

---

> In _Glossary("HTML"_), the doctype is the required "`<!DOCTYPE html>`" preamble found at the top of all documents. Its sole purpose is to prevent a _Glossary("browser"_) from switching into so-called ["quirks mode"](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) when rendering a document; that is, the "`<!DOCTYPE html>`" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.

#### See also

-   [Definition of the DOCTYPE in the HTML specification](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
-   [Quirks Mode and Standards Mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
-   [Document.doctype](/en-US/docs/Web/API/Document/doctype), a JavaScript method that returns the doctype

---

## Term: Document directive

-   CSP
-   Directive
-   Document
-   Glossary
-   HTTP
-   Security

---

> **_Glossary("CSP"_) document directives** are used in a _HTTPHeader("Content-Security-Policy"_) header and govern the properties of a document or [worker](/en-US/docs/Web/API/Web_Workers_API) environment to which a policy applies.

Document directives don't fall back to the _CSP("default-src"_) directive.

See [Document directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#document_directives) for a complete list.

#### See also

-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("CSP"_)
    -   _Glossary("Reporting directive"_)
    -   _Glossary("Fetch directive"_)
    -   _Glossary("Navigation directive"_)

-   Reference

    -   <https://www.w3.org/TR/CSP/#directives-document>
    -   _HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests"_)
    -   _HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content"_)
    -   _HTTPHeader("Content-Security-Policy/require-sri-for", "require-sri-for"_) \_Deprecated_Inline}}
    -   _HTTPHeader("Content-Security-Policy"_)

---

## Term: document environment

-   CodingScripting
-   Glossary
-   JavaScript

---

> When the JavaScript global environment is a window or an iframe, it is called a _document environment_. A global environment is an environment that doesn't have an outer environment.

#### See also

-   [document environment](https://html.spec.whatwg.org/multipage/webappapis.html#document-environment) in the HTML specification

---

## Term: Domain name

-   Domain Name
-   Glossary
-   Protocol
-   WebMechanics

---

> A **domain name** is a website's address on the _Glossary("Internet"_). Domain names are used in _Glossary("URL","URLs"_) to identify to which server belong a specific webpage. The domain name consists of a hierarchical sequence of names (labels) separated by periods (dots) and ending with an _glossary("TLD","extension"_).

#### See also

-   _interwiki("wikipedia", "Domain_name", "Domain name"_) on Wikipedia
-   [Understanding domain names](/en-US/docs/Learn/Common_questions/What_is_a_domain_name)

---

## Term: Domain sharding

-   DNS
-   Glossary
-   HTTP
-   Reference
-   Web Performance
-   latency

---

> Browsers limit the number of active connections for each domain. To enable concurrent downloads of assets exceeding that limit, **domain sharding** splits content across multiple subdomains. When multiple domains are used to serve multiple assets, browsers are able to download more resources simultaneously, resulting in a faster page load time and improved user experience.

The problem with domain sharding, in terms of performance, is the cost of extra DNS lookups for each domain and the overhead of establishing each TCP connection.

The initial response from an HTTP request is generally an HTML file listing other resources such as JavaScript, CSS, images and other media files that need to be downloaded. As browsers limit the number of active connections per domain, serving all the required resources from a single domain could be slow as assets need to be downloaded sequentially. With domain sharding, the required downloads are served from more than one domain, enabling the browser to simultaneously download needed resources. Multiple domains, however, is an anti-pattern, as DNS lookups slow initial load times.

HTTP2 supports unlimited concurrent requests making domain sharding an obsolete requirement when HTTP/2 is enabled.

#### See also

-   _Glossary("TLS"_)
-   [DNS](/en-US/docs/Glossary/DNS)
-   [HTTP/2](/en-US/docs/Glossary/HTTP_2)

---

## Term: Domain

-   Browser
-   Domain
-   Glossary
-   Infrastructure
-   Networking

---

> A domain is an authority within the internet that controls its own resources. Its "domain name" is a way to address this authority as part of the hierarchy in a _Glossary("URL"_) - usually the most memorable part of it, for instance a brand name.

A fully qualified domain name (FQDN) contains all necessary parts to look up this authority by name unambiguously using the _Glossary("DNS"_) system of the internet.

For example, in "developer.mozilla.org":

1.  "org" is called a _interwiki("wikipedia", "Top-level_domain", "top-level domain"_). They are registered as an internet standard by the _interwiki("wikipedia", "Internet_Assigned_Numbers_Authority", "IANA"_) . Here, "org" means "organization" which is defined in a top-level _domain registry_.
2.  "mozilla" is the domain. If you like to own a domain you have to register it with one of the many _interwiki("wikipedia", "Domain_name_registrar", "registrars"_) who are allowed to do so with a top-level domain registry.
3.  "developer" is a "sub-domain", something you as the owner of a domain may define yourself. Many owners choose to have a subdomain "www" to point to their _Glossary("World_Wide_Web"_) resource, but that's not required (and has even fallen somewhat out of favor).

#### See also

-   _interwiki("wikipedia", "Domain_name", "Domain Name"_) on Wikipedia

---

## Term: Dominator

-   CodingScripting
-   Glossary

---

> In graph theory, node A dominates node B if every path from the root node to B passes through A.

This concept is important for _Glossary("garbage collection"_) because it means that B is only reachable through A. So if the garbage collector found A to be unreachable and eligible for reclaiming, than B would also be unreachable and eligible for reclaiming. So objects that A dominates contribute to the retained size of A: that is, the total amount of memory that could be freed if A itself were freed.

#### See also

-   _interwiki("wikipedia", "Dominator (graph theory)", "Dominator"_) on Wikipedia
-   [Dominators](/en-US/docs/Tools/Memory/Dominators)
-   [Garbage collection](/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection)

---

## Term: DOM (Document Object Model)

-   CodingScripting
-   DOM
-   Glossary

---

> The **DOM** (Document Object Model) is an _glossary("API"_) that represents and interacts with any _glossary("HTML"_) or _glossary("XML"_) document. The DOM is a document model loaded in the _glossary("browser"_) and representing the document as a node tree, where each node represents part of the document (e.g. an _Glossary("element"_), text string, or comment).

The DOM is one of the most-used _Glossary("API"_)s on the _glossary("World Wide Web","Web"_) because it allows code running in a browser to access and interact with every node in the document. Nodes can be created, moved and changed. Event listeners can be added to nodes and triggered on occurrence of a given event.

DOM was not originally specified—it came about when browsers began implementing _Glossary("JavaScript"_). This legacy DOM is sometimes called DOM 0. Today, the WHATWG maintains the DOM Living Standard.

#### See also

-   _interwiki("wikipedia", "Document_Object_Model", "The Document Object Model"_) on Wikipedia
-   [The DOM documentation on MDN](/en-US/docs/Web/API/Document_Object_Model)
-   [The DOM Standard](https://dom.spec.whatwg.org/)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("API"_)
    -   _Glossary("HTML"_)
    -   _Glossary("XML"_)
    -   _Glossary("World Wide Web"_)

---

## Term: DoS attack

-   Glossary
-   Security

---

> DoS (Denial of Service) is a network attack that prevents legitimate use of _glossary("server"_) resources by flooding the server with requests.

There are also Distributed Denial of Service (DDoS) Attacks in which a multitude of servers are used to exhaust the computing capacity of an attacked computer.

### Types of DoS attack

DoS attacks are more of a category than a particular kind of attack. Here is a non-exhaustive list of DoS attack types:

-   bandwidth attack
-   service request flood
-   SYN flooding attack
-   ICMP flood attack
-   peer-to-peer attack
-   permanent DoS attack
-   application level flood attack

#### See also

-   _interwiki("wikipedia", "Denial-of-service_attack", "Denial-of-service attack"_) on Wikipedia
-   [Denial-of-service on OWASP](https://www.owasp.org/index.php/Denial_of_Service)
-   _Glossary("Distributed Denial of Service","DDoS"_)

---

## Term: DTLS (Datagram Transport Layer Security)

-   DTLS
-   Intro

---

> **Datagram Transport Layer Security** (**DTLS**) is a protocol used to secure datagram-based communications. It's based on the stream-focused Transport Layer Security (_Glossary("TLS"_)), providing a similar level of security. As a datagram protocol, DTLS doesn't guarantee the order of message delivery, or even that messages will be delivered at all. However, DTLS gains the benefits of datagram protocols, too; in particular, the lower overhead and reduced latency.

These features are especially useful for one of the most common areas in which DTLS comes into play: _Glossary("WebRTC"_). All of the WebRTC related protocols are required to encrypt their communications using DTLS; this includes _Glossary("SCTP"_), _Glossary("RTP", "SRTP"_), and _Glossary("STUN"_).

#### See also

-   _Interwiki("wikipedia", "Datagram Transport Layer Security"_) on Wikipedia
-   Specifications:

    -   _RFC(6347, "Datagram Transport Layer Security Version 1.2"_)
    -   [Datagram Transport Layer Security Protocol Version 1.3 _draft specification_](https://datatracker.ietf.org/doc/html/draft-ietf-tls-dtls13)

-   Related specification

    -   _RFC(5763, "Framework for Establishing a Secure Real-time Transport Protocol (SRTP) Security Context Using DTLS"_)
    -   _RFC(5764, "DTLS Extension to Establish Keys for the Secure Real-time Transport Protocol (SRTP)"_)
    -   _RFC(6083, "DTLS for Stream Control Transmission Protocol (SCTP)"_)
    -   _RFC(8261, "Datagram Transport Layer Security (DTLS) Encapsulation of SCTP Packets"_)
    -   _RFC(7350, "Datagram Transport Layer Security (DTLS) as Transport for Session Traversal Utilities for NAT (STUN)"_)
    -   _RFC(7925, "TLS / DTLS Profiles for the Internet of Things"_)

---

## Term: DTMF (Dual-Tone Multi-Frequency signaling)

-   DTMF
-   Glossary
-   WebRTC

---

> **Dual-Tone Multi-Frequency** (**DTMF**) signaling is a system by which audible tones are used to represent buttons being pressed on a keypad. Frequently referred to in the United States as "touch tone" (after the Touch-Tone trademark used when the transition from pulse dialing to DTMF began), DTMF makes it possible to signal the digits 0-9 as well as the letters "A" through "D" and the symbols "#" and "\*". Few telephone keypads include the letters, which are typically used for control signaling by the telephone network.

Computers may make use of DTMF when dialing a modem, or when sending commands to a menu system for teleconferencing or other purposes.

#### See also

-   _interwiki("wikipedia", "Dual-tone multi-frequency signaling"_) on Wikipedia
-   _interwiki("wikipedia", "Pulse dialing"_) on Wikipedia

---

## Term: Dynamic typing

-   CodingScripting
-   Glossary
-   ProgrammingLanguage

---

> **Dynamically-typed languages** are those (like _glossary("JavaScript"_)) where the interpreter assigns _glossary("variable","variables"_) a _glossary("type"_) at runtime based on the variable's _glossary("value"_) at the time.

#### See also

-   [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
-   _interwiki("wikipedia", "Type_system#DYNAMIC", "Type system"_) on Wikipedia

---

## Term: ECMA

-   Glossary
-   Stub
-   WebMechanics

---

> **Ecma International** (formally _European Computer Manufacturers Association_) is a non-profit organization that develops standards in computer hardware, communications, and programming languages.

On the web it is famous for being the organization which maintain [the ECMA-262 specification](https://www.ecma-international.org/publications/standards/Ecma-262.htm) (aka. _Glossary("ECMAScript"_)) which is the core specification for the _Glossary("JavaScript"_) language.

#### See also

-   _interwiki("wikipedia", "Ecma_International", "Ecma International"_) on Wikipedia
-   [The Ecma International web site](https://www.ecma-international.org/)

---

## Term: ECMAScript

-   Glossary
-   WebMechanics

---

> **ECMAScript** is a scripting language specification on which _glossary("JavaScript"_) is based. [Ecma International](https://www.ecma-international.org) is in charge of standardizing ECMAScript.

#### See also

-   _Interwiki("wikipedia", "ECMAScript"_) on Wikipedia
-   [ECMAScript](http://www.ecmascript.org/)

---

## Term: Effective connection type

-   Glossary
-   Navigator
-   Network Information API
-   NetworkInformation
-   Performance
-   Reference
-   Web Performance
-   connect
-   effective connection type
-   effectiveType

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
//
navigator.connection.effectiveType;
```

#### See also

-   [Network Information API](/en-US/docs/Web/API/Network_Information_API)
-   _domxref('NetworkInformation'_)
-   _domxref('NetworkInformation.effectiveType'_)
-   _HTTPHeader("ECT"_)

---

## Term: Element

-   CodingScripting
-   Glossary
-   HTML

---

> An **element** is a part of a webpage. In _glossary("XML"_) and _glossary("HTML"_), an element may contain a data item or a chunk of text or an image, or perhaps nothing. A typical element includes an opening tag with some _glossary("attribute", "attributes"_), enclosed text content, and a closing tag.

![Example: in <p class="nice">Hello world!</p>, '<p class="nice">' is an opening tag, 'class="nice"' is an attribute and its value, 'Hello world!' is enclosed text content, and '</p>' is a closing tag.](anatomy-of-an-html-element.png)

#### See also

-   [Getting started with HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
-   [Defining custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements)
-   The _domxref("Element"_) interface, representing an element in the DOM.

---

## Term: Empty element

-   CodingScripting
-   Glossary
-   Intermediate

---

> An **empty element** is an _Glossary("element"_) from HTML, SVG, or MathML that **cannot** have any child nodes (i.e., nested elements or text nodes).

The [HTML](https://html.spec.whatwg.org/multipage/), [SVG](https://www.w3.org/TR/SVG2/), and [MathML](https://www.w3.org/TR/MathML3/) specifications define very precisely what each element can contain. Many combinations have no semantic meaning, for example an _HTMLElement("audio"_) element nested inside an _HTMLElement("hr"_) element.

In HTML, using a closing tag on an empty element is usually invalid. For example, `<input type="text"> </input>` is invalid HTML.

The empty elements in HTML are as follows:

-   _HTMLElement("area"_)
-   _HTMLElement("base"_)
-   _HTMLElement("br"_)
-   _HTMLElement("col"_)
-   _HTMLElement("embed"_)
-   _HTMLElement("hr"_)
-   _HTMLElement("img"_)
-   _HTMLElement("input"_)
-   _HTMLElement("keygen"_)(HTML 5.2 Draft removed)
-   _HTMLElement("link"_)
-   _HTMLElement("meta"_)
-   _HTMLElement("param"_)
-   _HTMLElement("source"_)
-   _HTMLElement("track"_)
-   _HTMLElement("wbr"_)

---

## Term: Encapsulation

-   CodingScripting
-   Glossary

---

> Encapsulation is the packing of data and _glossary("function","functions"_) into one component (for example, a _glossary("class"_)) and then controlling access to that component to make a "blackbox" out of the _glossary("object"_). Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

#### See also

-   [Encapsulation](<https://en.wikipedia.org/wiki/Encapsulation_(object-oriented_programming)>) on Wikipedia

---

## Term: Encryption

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> In _glossary("cryptography"_), **encryption** is the conversion of _glossary("plaintext"_) into a coded text or _glossary("ciphertext"_). A ciphertext is intended to be unreadable by unauthorized readers.

Encryption is a cryptographic primitive: it transforms a plaintext message into a ciphertext using a cryptographic algorithm called a _glossary("cipher"_). Encryption in modern ciphers is performed using a specific algorithm and a secret, called the _glossary("key"_). Since the algorithm is often public, the key must stay secret if the encryption stays secure.

![How encryption works.](encryption.png)

Without knowing the secret, the reverse operation, _glossary("decryption"_), is mathematically hard to perform. How hard depends on the security of the cryptographic algorithm chosen and evolves with the progress of _glossary("cryptanalysis"_).

---

## Term: Endianness

-   Coding
-   CodingScripting
-   Glossary

---

> **Endian** and **endianness** (or "byte-order") describe how computers organize the bytes that make up numbers.

Each memory storage location has an index or address. Every byte can store an 8-bit number (i.e. between `0x00` and `0xff`), so you must reserve more than one byte to store a larger number. By far the most common _ordering_ of multiple bytes in one number is the **little-endian**, which is used on all Intel processors. Little-endian means storing bytes in order of least-to-most-significant (where the least significant byte takes the first or lowest address), comparable to a common European way of writing dates (e.g., 31 December 2050).

Naturally, **big-endian** is the opposite order, comparable to an ISO date (2050-12-31). Big-endian is also often called "network byte order", because Internet standards usually require data to be stored big-endian, starting at the standard UNIX socket level and going all the way up to standardized Web binary data structures. Also, older Mac computers using 68000-series and PowerPC microprocessors formerly used big-endian.

Examples with the number `0x12345678` (i.e. 305 419 896 in decimal):

-   _little-endian_: `0x78 0x56 0x34 0x12`
-   _big-endian_: `0x12 0x34 0x56 0x78`
-   _mixed-endian_ (historic and very rare): `0x34 0x12 0x78 0x56`

#### See also

-   _jsxref("ArrayBuffer"_)
-   _jsxref("DataView"_)
-   [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
-   _Interwiki("wikipedia", "Endianness"_) (Wikipedia)
-   _Glossary("Data structure"_) (Glossary)

---

## Term: Engine

-   CodingScripting
-   Glossary
-   NeedsContent

---

> The _glossary("JavaScript"_) engine is an interpreter that parses and executes a JavaScript program.

#### See also

-   _Interwiki("wikipedia", "JavaScript engine"_) on Wikipedia

---

## Term: Entity header

-   Glossary
-   WebMechanics

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

-   _Glossary("Representation header"_)

---

## Term: Entity

-   CodingScripting
-   Composing
-   Glossary
-   HTML

---

> An _glossary("HTML"_) **entity** is a piece of text ("string") that begins with an ampersand (`&`) and ends with a semicolon (`;`) . Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard.

> **Note:** Many characters have memorable entities. For example, the entity for the copyright symbol (`©`) is `&copy;`. For less memorable characters, such as `&#8212;` or `&#x2014;`, you can use a [reference chart](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) or [decoder tool](https://mothereff.in/html-entities).

## Reserved characters

Some special characters are reserved for use in HTML, meaning that your browser will parse them as HTML code. For example, if you use the less-than (`<`) sign, the browser interprets any text that follows as a _Glossary('tag'_).

To display these characters as text, replace them with their corresponding character entities, as shown in the following table.

| Character | Entity   | Note                                                                        |
| --------- | -------- | --------------------------------------------------------------------------- |
| &         | `&amp;`  | Interpreted as the beginning of an entity or character reference.           |
| <         | `&lt;`   | Interpreted as the beginning of a _Glossary('tag'_)                         |
| >         | `&gt;`   | Interpreted as the ending of a _Glossary('tag'_)                            |
| "         | `&quot;` | Interpreted as the beginning and end of an _Glossary('attribute'_)'s value. |

#### See also

-   [Official list of character entities](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)

---

## Term: Event

-   CodingScripting
-   Glossary

---

> Events are assets generated by [DOM](/en-US/docs/Glossary/DOM) elements, which can be manipulated by a Javascript code.

#### See also

-   [Event documentation on MDN](/en-US/docs/Web/API/Event)
-   [Official website](https://www.w3.org/TR/DOM-Level-2-Events/events.html)
-   _Interwiki("wikipedia", "DOM Events"_) on Wikipedia

---

## Term: Exception

-   Beginner
-   CodingScripting
-   Glossary

---

> An **exception** is a condition that interrupts normal code execution. In JavaScript _glossary("syntax error", "syntax errors"_) are a very common source of exceptions.

#### See also

-   _Interwiki("wikipedia", "Exception handling"_) on Wikipedia

---

## Term: EXIF

-   EXIF
-   Image

---

> The **Exchangeable Image File Format (EXIF)** is a standard that specifies how metadata about a multimedia file can be embedded within the file. For example, an image might contain EXIF data describing the: pixel width, height, and density, shutter speed, aperture, ISO settings, capture date, etc.

#### See also

-   [EXIF](https://en.wikipedia.org/wiki/Exif) (Wikipedia)
-   [CIPA Standards, including "CIPA DC-008-Translation-2019 Exchangeable image file format for digital still cameras : Exif Version 2.32"](https://www.cipa.jp/std/std-sec_e.html)

---

## Term: Expando

-   CodingScripting
-   JavaScript
-   Reference
-   expando

---

> Expando properties are properties added to _glossary("DOM"_) nodes with _glossary("JavaScript"_), where those properties are not part of the _glossary("object","object's"_) DOM specification:

```js
//
window.document.foo = 5; // foo is an expando
```

The term may also be applied to properties added to objects without respecting the object's original intent, such as non-numeric named properties added to an _glossary("Array"_).

---

## Term: Fallback alignment

-   CSS
-   Glossary
-   alignment

---

> In [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment), a fallback alignment is specified in order to deal with cases where the requested alignment cannot be fulfilled. For example, if you specify `justify-content: space-between` there must be more than one [alignment subject](/en-US/docs/Glossary/Alignment_Subject). If there is not, the fallback alignment is used. This is specified per alignment method, as detailed below.

-   First baseline
-   -   : `start`
-   Last baseline
-   -   : `safe end`
-   Baseline
-   -   : `start`
-   Space-between
    -   : `flex-start` (start)
-   Space-around
    -   : `center`
-   Space-evenly
    -   : `center`
-   Stretch
    -   : `flex-start` (start)

#### See also

-   [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)

---

## Term: Falsy

-   CodingScripting
-   Glossary
-   JavaScript

---

> A **falsy** (sometimes written **falsey**) value is a value that is considered false when encountered in a _Glossary("Boolean"_) context.

_Glossary("JavaScript"_) uses _Glossary("Type_Conversion", "type conversion"_) to coerce any value to a Boolean in contexts that require it, such as _Glossary("Conditional", "conditionals"_) and _Glossary("Loop", "loops"_).

The following table provides a complete list of JavaScript falsy values:

| Value                     | Description                                                                                                                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`                   | The keyword [`false`](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords_in_older_standards).                                                                                                      |
| `0`                       | The _jsxref("Number"_) zero (so, also `0.0`, etc., and `0x0`).                                                                                                                                                                |
| `-0`                      | The _jsxref("Number"_) negative zero (so, also `-0.0`, etc., and `-0x0`).                                                                                                                                                     |
| `0n`                      | The _jsxref("BigInt"_) zero (so, also `0x0n`). Note that there is no _jsxref("BigInt"_) negative zero — the negation of `0n` is `0n`.                                                                                         |
| `""`, `''`, ` `` `        | Empty [string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value.                                                                                                                                             |
| _Glossary("null"_)        | [null](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) — the absence of any value.                                                                                                                                  |
| _Glossary("undefined"_)   | [undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) — the primitive value.                                                                                                                             |
| _Glossary("NaN"_)         | [NaN ](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)— not a number.                                                                                                                                                |
| _domxref("document.all"_) | Objects are falsy if and only if they have the [\[\[IsHTMLDDA\]\]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot.That slot only exists in _domxref("document.all"_) and cannot be set using JavaScript. |

## Examples

Examples of _falsy_ values in JavaScript (which are coerced to false in Boolean contexts, and thus _bypass_ the `if` block):

```js
//
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
//
false && 'dog';
// ↪ false

0 && 'dog';
// ↪ 0
```

#### See also

-   _Glossary("Truthy"_)
-   _Glossary("Type_coercion", "Coercion"_)
-   _Glossary("Boolean"_)

---

## Term: Favicon

-   Glossary
-   Intro
-   favicon
-   user agent

---

> A favicon (favorite icon) is a tiny icon included along with a website, which is displayed in places like the browser's address bar, page tabs and bookmarks menu.

Note, however, that most modern browsers replaced the favicon from the address bar by an image indicating whether or not the website is using _Glossary("https","HTTPS"_).

Usually, a favicon is 16 x 16 pixels in size and stored in the _Glossary("GIF"_), _Glossary("PNG"_), or ICO file format.

They are used to improve user experience and enforce brand consistency. When a familiar icon is seen in the browser's address bar, for example, it helps users know they are in the right place.

#### See also

-   _interwiki("wikipedia", "Favicon", "Favicon"_) on Wikipedia
-   Tools

    -   [Free favicon generator](https://favicon.io/)
    -   [Favicon.ico and & app icon generator](https://www.favicon-generator.org/)

---

## Term: Fetch directive

-   CSP
-   HTTP
-   Security

---

> **_Glossary("CSP"_) fetch directives** are used in a _HTTPHeader("Content-Security-Policy"_) header and control locations from which certain resource types may be loaded. For instance, _CSP("script-src"_) allows developers to allow trusted sources of script to execute on a page, while _CSP("font-src"_) controls the sources of web fonts.

All fetch directives fall back to _CSP("default-src"_). That means, if a fetch directive is absent in the CSP header, the user agent will look for the `default-src` directive.

See [Fetch directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) for a complete list.

#### See also

-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("CSP"_)
    -   _Glossary("Reporting directive"_)
    -   _Glossary("Document directive"_)
    -   _Glossary("Navigation directive"_)

-   Reference

    -   <https://www.w3.org/TR/CSP/#directives-fetch>
    -   _HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests"_)
    -   _HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content"_)
    -   _HTTPHeader("Content-Security-Policy/require-sri-for", "require-sri-for"_) \_Deprecated_Inline}}
    -   _HTTPHeader("Content-Security-Policy"_)

---

## Term: Fetch metadata request header

-   Fetch Metadata Request Headers
-   Glossary

---

> A **fetch metadata request header** is an _Glossary("Request header", "HTTP request header"_) that provides additional information about the context from which the request originated. This allows the server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

With this information a server can implement a _Glossary("resource isolation policy"_), allowing external sites to request only those resources that are intended for sharing, and that are used appropriately. This approach can help mitigate common cross-site web vulnerabilities such as _Glossary("CSRF"_), Cross-site Script Inclusion('XSSI'), timing attacks, and cross-origin information leaks.

These headers are prefixed with `Sec-`, and hence have _Glossary("Forbidden header name", "forbidden header names"_). As such, they cannot be modified from JavaScript.

The fetch metadata request headers are:

-   _HTTPHeader("Sec-Fetch-Site"_)
-   _HTTPHeader("Sec-Fetch-Mode"_)
-   _HTTPHeader("Sec-Fetch-User"_)
-   _HTTPHeader("Sec-Fetch-Dest"_)

#### See also

-   [Protect your resources from web attacks with Fetch Metadata](https://web.dev/fetch-metadata/) (web.dev)
-   [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
-   [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
-   [List of all HTTP headers > Fetch metadata request headers](/en-US/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Representation header"_)
    -   _Glossary("HTTP_header","HTTP header"_)
    -   _Glossary("Response header"_)
    -   _Glossary("Request header"_)

---

## Term: Firefox OS

-   B2G
-   Boot2Gecko
-   Firefox OS
-   Glossary
-   Infrastructure
-   Intro

---

> Firefox OS is a discontinued open source mobile operating system developed by Mozilla. See _interwiki("wikipedia", "Firefox OS"_) for more details.

---

## Term: firewall

-   DDoS
-   Firewall
-   Glossary
-   Security
-   computer network

---

> A **firewall** is a system that filters network traffic. It can either let it pass or block it, according to some specified rules. For example, it can block incoming connections aimed at a certain port or outgoing connections to a certain IP address.

Firewalls can be as simple as a single piece of software, or more complex, like a dedicated machine whose only function is to act as a firewall.

#### See also

-   _Interwiki("wikipedia", "Firewall (computing)"_) on Wikipedia

---

## Term: First-class Function

-   CodingScripting
-   Glossary
-   JavaScript

---

> A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

## Example | Assign a function to a variable

### JavaScript

```js
//
const foo = function () {
    console.log('foobar');
};
foo(); // Invoke it using the variable
// foobar
```

We assigned an **Anonymous Function** in a _glossary("Variable"_), then we used that variable to invoke the function by adding parentheses `()` at the end.

> **Note:** **Even if your function was named,** you can use the variable name to invoke it. Naming it will be helpful when debugging your code. _But it won't affect the way we invoke it._

## Example | Pass a function as an Argument

### JavaScript

---

```js
//

function sayHello() {
    return 'Hello, ';
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, 'JavaScript!');
// Hello, JavaScript!
```

We are passing our `sayHello()` function as an argument to the `greeting()` function, this explains how we are treating the function as a **value**.

> **Note:** The function that we pass as an argument to another function, is called a **_glossary("Callback function"_)**. _`sayHello` is a Callback function._

## Example | Return a function

### JavaScript

---

```js
//

function sayHello() {
    return function () {
        console.log('Hello!');
    };
}
```

In this example; We need to return a function from another function - _We can return a function because we treated function in JavaScript as a **value**._

> **Note:** A function that returns a function is called a **Higher-Order Function**.

Back to our example; Now, we need to invoke `sayHello` function and its returned `Anonymous Function`. To do so, we have two ways:

### 1- Using a variable

```js
//
const sayHello = function () {
    return function () {
        console.log('Hello!');
    };
};
const myFunc = sayHello();
myFunc();
// Hello!
```

This way, it returns the `Hello!` message.

> **Note:** You have to use another variable. If you invoked `sayHello` directly, it would return the function itself **without invoking its returned function**.

### 2- Using double parentheses

---

```js
//

function sayHello() {
    return function () {
        console.log('Hello!');
    };
}
sayHello()();
// Hello!
```

We are using double parentheses `()()` to invoke the returned function as well.

#### See also

-   _Interwiki("wikipedia", "First-class_function", "First-class functions"_) on Wikipedia
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _glossary("Callback function"_)
    -   _glossary("Function"_)
    -   _glossary("Variable"_)

---

## Term: First contentful paint

-   Glossary
-   Performance
-   Reference
-   Web Performance

---

> **First Contentful Paint** (FCP) is when the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading. The question "Is it happening?" is "yes" when the first contentful paint completes.

_The First Contentful Paint_ time stamp is when the browser first rendered any text, image (including background images), non-white canvas or SVG. This excludes any content of iframes, but includes text with pending webfonts. This is the first time users could start consuming page content.

#### See also

-   [First Meaningful Paint](/en-US/docs/Glossary/first_meaningful_paint)
-   [Paint Timing specification](https://w3c.github.io/paint-timing/#first-contentful-paint)

---

## Term: First CPU idle

-   Glossary
-   Lighthouse
-   Performance
-   Web Performance

---

> **First CPU Idle** measures when a page is minimally interactive, or when the window is quiet enough to handle user input. It is a non-standard Google web performance metric. Generally, it occurs when most, but not necessarily all visible UI elements are interactive, and the user interface responds, on average, to most user input within 50ms. It is also known as [First interactive](/en-US/docs/Glossary/First_interactive).

---

## Term: First input delay

-   Glossary
-   Reference
-   Web Performance

---

> **First input delay** (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.

It is the length of time, in milliseconds, between the first user interaction on a web page and the browser's response to that interaction. Scrolling and zooming are not included in this metric.

The time between when content is painted to the page and when all the functionality becomes responsive to human interaction often varies based on the size and complexity of the JavaScript needing to be downloaded, parsed, and executed on the main thread, and on the device speed or lack thereof (think low end mobile devices). The longer the delay, the worse the user experience. Reducing site initialization time and eliminating[ long tasks](/en-US/docs/Web/API/Long_Tasks_API) can help eliminate first input delays.

#### See also

-   [requestIdleCallback](/en-US/docs/Web/API/Window/requestIdleCallback)
-   [lazy loading](/en-US/docs/Web/Performance/Lazy_loading)

---

## Term: First interactive

-   Glossary
-   Lighthouse
-   Web Performance

---

> \_draft}}

**First Interactive,** also known as [first CPU idle](/en-US/docs/Glossary/First_CPU_idle), is a non-standard web performance metric that measures when the user's window is quiet enough to handle user input, or what is termed as minimally interactive.

Minimally interactive is defined as when some, but not necessarily all, UI elements on the page have loaded and are interactive, and, on average, respond to user input in a reasonable amount of time.

## More information

First interactive is a variation of [Time to Interactive](/en-US/docs/Glossary/Time_to_interactive), which is split into _First Interactive_ and _Consistently Interactive_. These metrics have been proposed by the Web Incubator Community Group and are already being used in various tools. This metric has been called _First CPU Idle_ since [Lighthouse 3.0](https://developers.google.com/web/tools/lighthouse/)

---

## Term: First Meaningful Paint

-   Glossary
-   Reference
-   Web Performance

---

> **First Meaningful Paint** (FMP) is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded. It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

#### See also

-   [First contentful paint](/en-US/docs/Glossary/First_contentful_paint)

---

## Term: First paint

-   Beginner
-   Glossary
-   Performance
-   Web Performance

---

> **First Paint**, part of the [Paint Timing API](/en-US/docs/Web/PerformancePaintTiming), is the time between navigation and when the browser renders the first pixels to the screen, rendering anything that is visually different from what was on the screen prior to navigation. It answers the question "Is it happening?"

#### See also

-   [First meaningful paint](/en-US/docs/Glossary/first_meaningful_paint)
-   [First contentful paint](/en-US/docs/Glossary/First_contentful_paint)
-   [Paint Timing API](/en-US/docs/Web/PerformancePaintTiming)

---

## Term: Flex Container

-   CSS
-   Glossary
-   flex container
-   flexbox

---

> A _glossary("flexbox"_) layout is defined using the `flex` or `inline-flex` values of the `display` property on the parent item. This element then becomes a **flex container**, and each one of its children becomes a _glossary("flex item"_).

A value of `flex` causes the element to become a block level flex container, and `inline-flex` an inline level flex container. These values create a **flex formatting context** for the element, which is similar to a block formatting context in that floats will not intrude into the container, and the margins on the container will not collapse with those of the items.

#### See also

### Property reference

-   _cssxref("align-content"_)
-   _cssxref("align-items"_)
-   _cssxref("flex"_)
-   _cssxref("flex-direction"_)
-   _cssxref("flex-flow"_)
-   _cssxref("flex-wrap"_)
-   _cssxref("justify-content"_)

### Further reading

-   CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
-   CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
-   CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
-   Firefox Developer Tools > How to: _[CSS Flexbox Inspector: Examine Flexbox layouts](/en-US/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts)_

---

## Term: Flex Item

-   CSS
-   Glossary
-   flex item
-   flexbox

---

> The direct children of a _glossary("Flex Container"_) (elements with `display: flex` or `display: inline-flex` set on them) become **flex items**.

Continuous runs of text inside flex containers will also become flex items.

#### See also

### Property reference

-   _cssxref("align-self"_)
-   _cssxref("flex-basis"_)
-   _cssxref("flex-grow"_)
-   _cssxref("flex-shrink"_)
-   _cssxref("order"_)

### Further reading

-   CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
-   CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
-   CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

---

## Term: Flexbox

-   CSS
-   Glossary
-   Intro
-   flexbox

---

> Flexbox is the commonly-used name for the [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/), a layout model for displaying items in a single dimension — as a row or as a column.

In the specification, Flexbox is described as a layout model for user interface design. The key feature of Flexbox is the fact that items in a flex layout can grow and shrink. Space can be assigned to the items themselves, or distributed between or around the items.

Flexbox also enables alignment of items on the main or cross axis, thus providing a high level of control over the size and alignment of a group of items.

#### See also

### Property reference

-   _cssxref("align-content"_)
-   _cssxref("align-items"_)
-   _cssxref("align-self"_)
-   _cssxref("flex"_)
-   _cssxref("flex-basis"_)
-   _cssxref("flex-direction"_)
-   _cssxref("flex-flow"_)
-   _cssxref("flex-grow"_)
-   _cssxref("flex-shrink"_)
-   _cssxref("flex-wrap"_)
-   _cssxref("justify-content"_)
-   _cssxref("order"_)

### Further reading

-   _[CSS Flexible Box Layout Module Level 1 Specification](https://www.w3.org/TR/css-flexbox-1/)_
-   CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
-   CSS Flexbox Guide: _[Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)_
-   CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
-   CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
-   CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
-   CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
-   CSS Flexbox Guide: _[Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)_

---

## Term: Flex

-   CSS
-   Flex
-   Glossary
-   flexbox

---

> `flex` is a new value added to the CSS _cssxref("display"_) property. Along with `inline-flex` it causes the element that it applies to in order to become a _glossary("flex container"_), and the element's children to each become a _glossary("flex item"_). The items then participate in flex layout, and all of the properties defined in the CSS Flexible Box Layout Module may be applied.

The `flex` property is a shorthand for the flexbox properties `flex-grow`, `flex-shrink` and `flex-basis`.

In addition `<flex>` can refer to [a flexible length](/en-US/docs/Web/CSS/flex_value) in CSS Grid Layout.

#### See also

### Property reference

-   _cssxref("align-content"_)
-   _cssxref("align-items"_)
-   _cssxref("align-self"_)
-   _cssxref("flex"_)
-   _cssxref("flex-basis"_)
-   _cssxref("flex-direction"_)
-   _cssxref("flex-flow"_)
-   _cssxref("flex-grow"_)
-   _cssxref("flex-shrink"_)
-   _cssxref("flex-wrap"_)
-   _cssxref("justify-content"_)
-   _cssxref("order"_)

### Further reading

-   _[CSS Flexible Box Layout Module Level 1 Specification](https://www.w3.org/TR/css-flexbox-1/)_
-   CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
-   CSS Flexbox Guide: _[Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)_
-   CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
-   CSS Flexbox Guide: _[Ordering flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
-   CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
-   CSS Flexbox Guide: _[Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_
-   CSS Flexbox Guide: _[Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)_

---

## Term: Forbidden header name

-   Fetch
-   Glossary
-   HTTP
-   Headers
-   forbidden

---

> A **forbidden header name** is the name of any [HTTP header](/en-US/docs/Web/HTTP/Headers) that cannot be modified programmatically; specifically, an HTTP **request** header name (in contrast with a _Glossary("Forbidden response header name"_)).

Modifying such headers is forbidden because the user agent retains full control over them. Names starting with `Sec-` are reserved for creating new headers safe from _glossary("API","APIs"_) using [Fetch](/en-US/docs/Web/API/Fetch_API) that grant developers control over headers, such as _domxref("XMLHttpRequest"_).

Forbidden header names start with `Proxy-` or `Sec-`, or are one of the following names:

-   `Accept-Charset`
-   `Accept-Encoding`
-   `Access-Control-Request-Headers`
-   `Access-Control-Request-Method`
-   `Connection`
-   `Content-Length`
-   `Cookie`
-   `Cookie2`
-   `Date`
-   `DNT`
-   `Expect`
-   `Feature-Policy`
-   `Host`
-   `Keep-Alive`
-   `Origin`
-   `Proxy-`
-   `Sec-`
-   `Referer`
-   `TE`
-   `Trailer`
-   `Transfer-Encoding`
-   `Upgrade`
-   `Via`

> **Note:** The `User-Agent` header is no longer forbidden, [as per spec](https://fetch.spec.whatwg.org/#terminology-headers) — see forbidden header name list (this was implemented in Firefox 43) — it can now be set in a Fetch [Headers](/en-US/docs/Web/API/Headers) object, or via XHR [setRequestHeader()](/en-US/docs/Web/API/XMLHttpRequest#setrequestheader%28%29). However, Chrome will silently drop the header from Fetch requests (see [Chromium bug 571722](https://bugs.chromium.org/p/chromium/issues/detail?id=571722)).

#### See also

_Glossary("Forbidden response header name"_) (Glossary)

---

## Term: Forbidden response header name

-   Glossary
-   HTTP
-   Response
-   forbidden

---

> A _forbidden response header name_ is an [HTTP header](/en-US/docs/Web/HTTP/Headers) name (either \``Set-Cookie`\` or \``Set-Cookie2`\`) that cannot be modified programmatically.

#### See also

-   [Fetch specification: forbidden response-header name](https://fetch.spec.whatwg.org/#forbidden-response-header-name)

---

## Term: Fork

-   Fork
-   Glossary
-   Tools
-   git

---

> A fork is a copy of an existing software project at some point to add someone's own modifications to the project.

Basically, if the license of the original software allows, you can copy the code to develop your own version of it, with your own additions, which will be a "fork".

Forks are often seen in free and open source software development. This is now a more popular term thanks to contribution model using Git (and/or the GitHub platform).

#### See also

-   _interwiki("wikipedia", "Fork_(software*development)","Fork"*) on Wikipedia
-   [How to fork a GitHub repo](https://help.github.com/articles/fork-a-repo/) (fork as in a Git context)
-   _Glossary("Fork"_) (Glossary)
-   Various "well-known" forks

    -   [Linux distributions](https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg)
    -   [Node.js and io.js (which have been merged together back)](https://nodejs.org/en/blog/announcements/foundation-v4-announce/)
    -   [LibreOffice, a fork of OpenOffice](https://www.libreoffice.org/about-us/who-are-we/)

---

## Term: frame rate (FPS)

-   Animation
-   Glossary
-   Web Performance
-   requestAnimationFrame

---

> A **frame rate** is the speed at which the browser is able to recalculate, layout and paint content to the display. The **frames per second**, or **fps**, is how many frames can be repainted in one second. The goal frame rate for in web site computer graphics is 60fps.

Movies generally have a frame rate of 24 fps. They are able to have fewer frames per second because the illusion of life is created with motion blurs. When moving on a computer screen there are no motion blurs (unless you are animating an image [sprite](/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS) with motion blurs).

#### See also

-   _Interwiki("wikipedia", "Frame rate"_) (Wikipedia)
-   _glossary("FPS"_) (Glossary)

---

## Term: Fragmentainer

-   CSS
-   CSS Fragmentation Specification
-   Glossary
-   fragmentainer

---

> A fragmentainer is defined in the[ CSS Fragmentation Specification](https://www.w3.org/TR/css-break-3/) as follows:

> A box—such as a page box, column box, or region—that contains a portion (or all) of a fragmented flow. Fragmentainers can be pre-defined, or generated as needed. When breakable content would overflow a fragmentainer in the block dimension, it breaks into the next container in its fragmentation context instead.

Fragmented contexts are found in CSS Paged Media, where the fragmentainer would be the box which defines a page. In Multiple-column Layout the fragmentainer is the column box created when columns are defined on a multicol container. In CSS Regions each Region is a fragmentainer.

---

## Term: FTP

-   CodingScripting
-   FTP
-   Glossary
-   Protocol

---

> **FTP** (File Transfer Protocol) is an insecure _glossary("protocol"_) for transferring files from one _glossary("host"_) to another over the Internet.

For many years it was the defacto standard way of transferring files, but as it is inherently insecure, it is no longer supported by many hosting accounts. Instead you should use SFTP (a secure, encrypted version of FTP) or another secure method for transferring files like Rsync over SSH.

#### See also

-   [Beginner's guide to uploading files via FTP](/en-US/docs/Learn/Common_questions/Upload_files_to_a_web_server)
-   _interwiki("wikipedia", "File Transfer Protocol", "FTP"_) on Wikipedia

---

## Term: FTU

-   FTU
-   Firefox OS
-   First time use
-   Gaia
-   Glossary
-   Infrastructure
-   Intro

---

> FTU (First Time Use) is the app that loads when you run a newly-installed version of _glossary("Gecko"_) on a _glossary("Firefox OS"_) device.

You can use FTU to set many important options (e.g. timezone, WiFi details, default language, importing contacts), or take the "Phone Tour" to find out more about your device.

---

## Term: Function

-   CodingScripting
-   Glossary
-   IIFE
-   Immediately Invoked Function Expressions (IIFE)
-   Intro
-   JavaScript

---

> A **function** is a code snippet that can be called by other code or by itself, or a _Glossary("variable"_) that refers to the function. When a function is called, _Glossary("Argument", "arguments"_) are passed to the function as input, and the function can optionally return a value. A function in _glossary("JavaScript"_) is also an _glossary("object"_).

A function name is an _Glossary("identifier"_) included as part of a function declaration or function expression. The function name's _Glossary("scope"_) depends on whether the function name is a declaration or expression.

### Different types of functions

An **anonymous function** is a function without a function name. Only function expressions can be anonymous, function declarations must have a name:

```js
//
// When used as a function expression
(function () {});
// or using the ECMAScript 2015 arrow notation
() => {};
```

The following terms are not used in the ECMAScript language specification, they're jargon used to refer to different types of functions.

A **named function** is a function with a function name:

```js
//
// Function declaration
function foo() {}
// Named function expression
(function bar() {});
// or using the ECMAScript 2015 arrow notation
const foo = () => {};
```

An **inner function** is a function inside another function (`square` in this case). An **outer function** is a function containing a function (`addSquares` in this case):

---

```js
//

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
//Using ECMAScript 2015 arrow notation
const addSquares = (a, b) => {
    const square = (x) => x * x;
    return square(a) + square(b);
};
```

A **recursive function** is a function that calls itself. See _Glossary("Recursion", "recursion"_).

---

```js
//

function loop(x) {
    if (x >= 10) return;
    loop(x + 1);
}
//Using ECMAScript 2015 arrow notation
const loop = (x) => {
    if (x >= 10) return;
    loop(x + 1);
};
```

An **Immediately Invoked Function Expressions** (_glossary("IIFE"_)) is a function that is called directly after the function is loaded into the browser's compiler. The way to identify an IIFE is by locating the extra left and right parenthesis at the end of the function's definition.

```js
//
// Declared functions can't be called immediately this way
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

// Function expressions, named or anonymous, can be called immediately
(function foo() {
    console.log('Hello Foo');
})();

(function food() {
    console.log('Hello Food');
})();

(() => console.log('hello world'))();
```

If you'd like to know more about IIFEs, check out the following page on Wikipedia : [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

#### See also

-   [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
-   [Arrow Functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

## Term: Fuzz testing

-   Firefox
-   Fuzzing
-   Mozilla
-   QA
-   Security
-   Testing

---

> **Fuzzing** is a technique for testing software using automated tools to provide invalid or unexpected input to a program or function in a program, then checking the results to see if the program crashes or otherwise acts inappropriately. This is an important way to ensure that software is stable, reliable, and secure, and we use fuzzing a lot at Mozilla.

-   [Jesse's blog posts about fuzzing](https://www.squarefree.com/categories/fuzzing/)
-   [Wikipedia: Fuzz testing](https://en.wikipedia.org/wiki/Fuzz_testing)
-   [fuzzdb](https://github.com/fuzzdb-project/fuzzdb)
-   [jsfuzz - coverage guided javascript fuzzer](https://github.com/fuzzitdev/jsfuzz)

---

## Term: Garbage collection

-   CodingScripting
-   Glossary

---

> **[Garbage collection](/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection)** is a term used in _Glossary("computer programming"_) to describe the process of finding and deleting _Glossary("object", "objects"_) which are no longer being _Glossary("object reference", "referenced"_) by other objects.

In other words, garbage collection is the process of removing any objects which are not being used by any other objects. Often abbreviated "GC," garbage collection is a fundamental component of the [memory management](/en-US/docs/Web/JavaScript/Memory_Management) system used by _Glossary("JavaScript"_).

#### See also

-   _interwiki("wikipedia", "Memory management"_) on Wikipedia
-   _interwiki("wikipedia", "Garbage collection (computer science)"_) on Wikipedia
-   [Garbage collection](/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection) in the MDN JavaScript guide.
-   [Memory management in JavaScript](/en-US/docs/Web/JavaScript/Memory_Management)

---

## Term: Gecko

-   Firefox OS
-   Gecko
-   Glossary
-   Infrastructure
-   Intro
-   Mozilla

---

> **Gecko** is the layout engine developed by the Mozilla Project and used in many apps/devices, including _glossary("Mozilla Firefox","Firefox"_) and _glossary("Firefox OS"_).

Web _glossary("browser","browsers"_) need software called a layout engine to interpret _glossary("HTML"_), _glossary("CSS"_), _glossary("JavaScript"_), and embedded content (like images) and draw everything to your screen. Besides this, Gecko makes sure associated _glossary("API","APIs"_) work well on every operating system Gecko supports, and that appropriate APIs are exposed only to relevant support targets. This means that Gecko includes, among other things, a networking stack, graphics stack, layout engine, a JavaScript virtual machine, and porting layers.

Since all Firefox OS apps are Web apps, Firefox OS uses Gecko as its app runtime as well.

#### See also

-   _interwiki("wikipedia", "Gecko (software)", "Gecko"_) on Wikipedia

---

## Term: General header

-   Glossary
-   WebMechanics

---

> **General header** is an outdated term used to refer to an _glossary('HTTP_header', 'HTTP header'_) that can be used in both request and response messages, but which doesn't apply to the content itself (a header that applied to the content was called an _glossary("entity header"_)). Depending on the context they are used in, general headers might either be _glossary("Response header", "response"_) or _glossary("request header", "request headers"_) (e.g. _HTTPheader("Cache-Control"_)).

> **Note:** Current versions of the HTTP/1.1 specification do not specifically categorize headers as "general headers". These are now simply refered to as _glossary("Response header", "response"_) or _glossary("request header", "request headers"_) depending on context.

---

## Term: GIF

-   Composing
-   Glossary

---

> GIF (Graphics Interchange Format) is an image format that uses lossless compression and can be used for animations. A GIF uses up to 8 bits per pixel and a maximum of 256 colors from the 24-bit color space.

#### See also

-   _Interwiki("wikipedia", "GIF"_) on Wikipedia

---

## Term: Git

-   Collaborating
-   Glossary

---

> **Git** is a free, open-source, distributed Source Code Management (_Glossary("SCM", "SCM", 1_)) system. It facilitates handling code bases with distributed development teams. What sets it apart from previous SCM systems is the ability to do common operations (branching, committing, etc.) on your local development machine, without having to change the master repository or even having write access to it.

#### See also

-   [Official website with documentation](https://git-scm.com/)
-   [GitHub](https://github.com/), a Git-based graphical project host

---

## Term: Global object

-   CodingScripting
-   Glossary
-   NeedsContent

---

> A global object is an _glossary("object"_) that always exists in the _glossary("global scope"_).

In JavaScript, there's always a global object defined. In a web browser, when scripts create global variables defined with the [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) keyword, they're created as members of the global object. (In _Glossary("Node.js"_) this is not the case.) The global object's _Glossary("interface"_) depends on the execution context in which the script is running. For example:

-   In a web browser, any code which the script doesn't specifically start up as a background task has a _domxref("Window"_) as its global object. This is the vast majority of JavaScript code on the Web.
-   Code running in a _domxref("Worker"_) has a _domxref("WorkerGlobalScope"_) object as its global object.
-   Scripts running under _Glossary("Node.js"_) have an object called [`global`](https://nodejs.org/api/globals.html#globals_global) as their global object.

> **Note**: Unlike _jsxref("Statements/var", "var"_), the statements _jsxref("Statements/let", "let"_) and _jsxref("Statements/const", "const"_) do not create properties of the global object.

## `window` object in the Browser

The `window` object is the Global Object in the Browser. Any Global Variables or Functions can be accessed as _properties_ of the `window` object.

### Access Global Variables

```js
//
var foo = 'foobar';
foo === window.foo; // Returns: true
```

After defining a Global Variable `foo`, we can access its value directly from the `window` object, by using the variable name `foo` as a property name of the Global Object `window.foo`.

#### Explanation:

The global variable `foo` was stored in the `window` object, like this:

```js
//
foo: 'foobar';
```

### Access Global Functions

---

```js
//

function greeting() {
    console.log('Hi!');
}

window.greeting(); // It is the same as the normal invoking: greeting();
```

The example above explains how Global Functions are stored as _properties_ in the `window` object. We created a Global Function called `greeting`, then invoked it using the `window` object.

#### Explanation:

The global function `greeting` was stored in the `window` object, like this:

```js
//
greeting: function greeting() {
    console.log('Hi!');
}
```

#### See also

-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _glossary("global scope"_)
    -   _glossary("object"_)

-   _domxref("Window"_)
-   _domxref("WorkerGlobalScope"_)
-   [`global`](https://nodejs.org/api/globals.html#globals_global)

---

## Term: Global scope

-   CodingScripting
-   Glossary
-   NeedsContent

---

> In a programming environment, the _global scope_ is the _glossary("scope"_) that contains, and is visible in, all other scopes.

In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.

#### See also

-   [Introduction to variable scope in JavaScript](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope)
-   _interwiki("wikipedia", "Scope (computer science)", "Scope"_) on Wikipedia

---

## Term: Global variable

-   CodingScripting
-   Glossary

---

> A global variable is a _glossary("variable"_) that is declared in the _glossary("global scope"_) in other words, a variable that is visible from all other scopes.

In JavaScript it is a _glossary("property"_) of the _glossary("global object"_).

#### See also

-   _Interwiki("wikipedia", "Global variable"_) on Wikipedia

---

## Term: Glyph

-   Glossary
-   SVG
-   typography

---

> A **glyph** is a term used in typography for the visual representation of one or more _Glossary("character", "characters"_).

The fonts used by a website contain different sets of glyphs, which represent the characters of the font.

#### See also

-   [Glyph](https://en.wikipedia.org/wiki/Glyph) on Wikipedia
-   [Glyph, character and grapheme](https://www.quora.com/Whats-the-difference-between-a-character-a-glyph-and-a-grapheme/answer/Thomas-Phinney) on Quora

---

## Term: Google Chrome

-   Browser
-   Chrome canary
-   Chrome stable
-   Chromium
-   Glossary
-   WebMechanics
-   google chrome

---

> Google Chrome is a free Web _glossary("browser"_) developed by Google. It's based on the [Chromium](https://www.chromium.org/) open source project. Some key differences are described on the [Chromium wiki](https://code.google.com/p/chromium/wiki/ChromiumBrowserVsGoogleChrome). Chrome supports its own layout called _glossary("Blink"_). Note that the iOS version of Chrome uses that platform's WebView, not Blink.

#### See also

-   _interwiki("wikipedia", "Google Chrome", "Google Chrome"_) on Wikipedia

### For Chrome Users

Use one of these links if you're an everyday user.

-   [Android](https://play.google.com/store/apps/details?id=com.android.chrome)
-   [iOS](https://apps.apple.com/us/app/chrome-web-browser-by-google/id535886823)
-   [Desktop](https://www.google.com/chrome/)

### For Web Developers

If you want to try the latest Chrome features, install one of the pre-stable builds. Google pushes updates frequently and has designed the distributions to run side-by-side with the stable version. Visit the [Chrome Releases Blog](https://chromereleases.googleblog.com) to learn what's new.

-   [Chrome Dev for Android](https://play.google.com/store/apps/details?id=com.chrome.dev)
-   [Chrome Canary for desktop](https://www.google.com/chrome/browser/canary.html).

---

## Term: GPL

-   GPL
-   Glossary
-   License
-   OpenPractices
-   Remixing
-   Sharing

---

> The (GNU) GPL (General Public License) is a _Glossary("copyleft"_) free software license published by the Free Software Foundation. Users of a GPL-licensed program are granted the freedom to use it, read the source code, modify it and redistribute the changes they made, provided they redistribute the program (modified or unmodified) under the same license.

#### See also

-   [FAQ](https://www.gnu.org/licenses/gpl-faq.html) on GNU licenses
-   [GNU GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License) on Wikipedia
-   [GPL License](https://gnu.org/licenses/gpl.html) text

---

## Term: GPU

-   Glossary
-   Graphics
-   Infrastructure

---

> The GPU (Graphics Processing Unit) is a computer component similar to the CPU (Central Processing Unit). It specializes in the drawing of graphics (both 2D and 3D) on your monitor.

---

## Term: Graceful degradation

-   Design
-   Glossary
-   graceful degradation

---

> **Graceful degradation** is a design philosophy that centers around trying to build a modern web site/application that will work in the newest browsers, but falls back to an experience that while not as good still delivers essential content and functionality in older browsers.

_Glossary("Polyfill","Polyfills"_) can be used to build in missing features with JavaScript, but acceptable alternatives to features like styling and layout should be provided where possible, for example by using the CSS cascade, or HTML fallback behavior. Some good examples can be found in [Handling common HTML and CSS problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS).

It is a useful technique that allows Web developers to focus on developing the best possible websites, given that those websites are accessed by multiple unknown user-agents. _Glossary("Progressive enhancement"_) is related but different — often seen as going in the opposite direction to graceful degradation. In reality both approaches are valid and can often complement one another.

#### See also

-   _Interwiki("wikipedia", "Graceful degradation"_) on Wikipedia
-   [Handling common HTML and CSS problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
-   [Implementing feature detection](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Graceful degradation"_)
    -   _Glossary("Polyfill"_)
    -   _Glossary("Progressive enhancement"_)

---

## Term: Grid Areas

-   CSS
-   CSS Grids
-   Reference

---

> A **grid area** is one or more _glossary("grid cell", "grid cells"_) that make up a rectangular area on the grid. Grid areas are created when you place an item using [line-based placement](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) or when defining areas using [named grid areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas).

![Image showing a highlighted grid area](1_grid_area.png)

Grid areas _must_ be rectangular in nature; it is not possible to create, for example, a T- or L-shaped grid area.

## Example

In the example below I have a grid container with two grid items. I have named these with the _cssxref("grid-area"_) property and then laid them out on the grid using _cssxref("grid-template-areas"_). This creates two grid areas, one covering four grid cells, the other two.

```css hidden
* {
    box-sizing: border-box;
}

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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px 100px;
    grid-template-areas:
        'a a b'
        'a a b';
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

\_ EmbedLiveSample('Example', '300', '280') }}

#### See also

### Property reference

-   _cssxref("grid-template-columns"_)
-   _cssxref("grid-template-rows"_)
-   _cssxref("grid-auto-rows"_)
-   _cssxref("grid-auto-columns"_)
-   _cssxref("grid-template-areas"_)
-   _cssxref("grid-area"_)

### Further reading

-   CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
-   CSS Grid Layout Guide: _[Grid template areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
-   [Definition of Grid Areas in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-area-concept)

---

## Term: Grid Axis

-   CSS
-   CSS Grids

---

> CSS Grid Layout is a two-dimensional layout method enabling the laying out of content in _rows_ and _columns_. Therefore in any grid we have two axes. The _block or column axis_, and the _inline or row axis_.

It is along these axes that items can be aligned and justified using the properties defined in the [Box Alignment specification](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout).

In CSS the _block or column axis_ is the axis used when laying out blocks of text. If you have two paragraphs and are working in a right to left, top to bottom language they lay out one below the other, on the block axis.

![Diagram showing the block axis in CSS Grid Layout.](7_block_axis.png)

The _inline or row axis_ runs across the Block Axis and is the direction along which regular text flows. These are our rows in CSS Grid Layout.

![Diagram showing the inline axis in CSS Grid Layout.](7_inline_axis.png)

The physical direction of these axes can change according to the [writing mode](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes) of the document.

#### See also

-   CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
-   CSS Grid Layout Guide: _[Box alignment in Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
-   CSS Grid Layout Guide: _[Grids, logical values and writing modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)_

---

## Term: Grid Cell

-   CSS Grids

---

> In a [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), a **grid cell** is the smallest unit you can have on your CSS grid. It is the space between four intersecting _glossary("grid lines"_) and conceptually much like a table cell.

![Diagram showing an individual cell on the grid.](1_grid_cell.png)

If you do not place items using one of the grid placement methods, direct children of the grid container will be placed one into each individual grid cell by the auto-placement algorithm. Additional row or column _glossary("grid tracks", "tracks"_) will be created to create enough cells to hold all items.

## Example

In the example we have created a three column track grid. The five items are placed into grid cells working along an initial row of three grid cells, then creating a new row for the remaining two.

```css hidden
* {
    box-sizing: border-box;
}

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
    grid-template-columns: repeat(3, 1fr);
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

\_ EmbedLiveSample('Example', '300', '280') }}

#### See also

### Property reference

-   _cssxref("grid-template-columns"_)
-   _cssxref("grid-template-rows"_)
-   _cssxref("grid-auto-rows"_)
-   _cssxref("grid-auto-columns"_)

### Further reading

-   CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
-   [Definition of Grid Cells in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-track-concept)

---

## Term: Grid Column

-   CSS
-   CodingScripting

---

> A **grid column** is a vertical track in a [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), and is the space between two vertical grid lines. It is defined by the _cssxref("grid-template-columns"_) property or in the shorthand _cssxref("grid"_) or _cssxref("grid-template"_) properties.

In addition, columns may be created in the _implicit grid_ when items are placed outside of columns created in the _explicit grid_. These columns will be auto-sized by default, or can have a size specified with the _cssxref("grid-auto-columns"_) property.

When working with alignment in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), the axis down which columns run is known as the _block, or column, axis_.

#### See also

### Property reference

-   _cssxref("grid-template-columns"_)
-   _cssxref("grid-auto-columns"_)
-   _cssxref("grid"_)
-   _cssxref("grid-template"_)

### Further reading

-   CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_

---

## Term: Grid container

-   CSS
-   Glossary
-   grid

---

> Using the value `grid` or `inline-grid` on an element turns it into a **grid container** using [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), and any direct children of this element become grid items.

When an element becomes a grid container it establishes a **grid formatting context**. The direct children can now lay themselves out on any explicit grid defined using _cssxref("grid-template-columns"_) and _cssxref("grid-template-rows"_), or on the _implicit grid_ created when an item is placed outside of the _explicit grid_.

#### See also

### Property reference

-   _cssxref("grid-template-columns"_)
-   _cssxref("grid-template-rows"_)
-   _cssxref("grid-auto-columns"_)
-   _cssxref("grid-auto-rows"_)
-   _cssxref("grid"_)
-   _cssxref("grid-template"_)

### Further reading

-   CSS Grid Layout guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_

---

## Term: Grid Lines

-   CSS Grids

---

> **Grid lines** are created when you define _glossary("Grid tracks", "tracks"_) in the explicit grid using [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Example

In the following example there is a grid with three column tracks and two row tracks. This gives us 4 column lines and 3 row lines.

```css hidden
* {
    box-sizing: border-box;
}

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

\_ EmbedLiveSample('Example', '500', '250') }}

Lines can be addressed using their line number. In a left-to-right language such as English, column line 1 will be on the left of the grid, row line 1 on the top. Lines numbers respect the [writing mode](/en-US/docs/Web/CSS/CSS_Writing_Modes) of the document and so in a right-to-left language for example, column line 1 will be on the right of the grid. The image below shows the line numbers of the grid, assuming the language is left-to-right.

![Diagram showing the grid with lines numbered.](1_diagram_numbered_grid_lines.png)

Lines are also created in the _implicit grid_ when implicit tracks are created to hold content positioned outside of the _explicit grid_, however these lines cannot be addressed by a number.

## Placing items onto the grid by line number

Having created a grid, you can place items onto the grid by line number. In the following example the item is positioned from column line 1 to column line 3, and from row line 1 to row line 3.

```css hidden
* {
    box-sizing: border-box;
}

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

\_ EmbedLiveSample('Placing_items_onto_the_grid_by_line_number', '500', '250') }}

## Naming lines

The lines created in the _explicit grid_ can be named, by adding the name in square brackets before or after the track sizing information. When placing an item, you can then use these names instead of the line number, as demonstrated below.

```css hidden
* {
    box-sizing: border-box;
}

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

\_ EmbedLiveSample('Naming_lines', '500', '250') }}

#### See also

### Property reference

-   _cssxref("grid-template-columns"_)
-   _cssxref("grid-template-rows"_)
-   _cssxref("grid-column-start"_)
-   _cssxref("grid-column-end"_)
-   _cssxref("grid-column"_)
-   _cssxref("grid-row-start"_)
-   _cssxref("grid-row-end"_)
-   _cssxref("grid-row"_)

### Further reading

-   CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
-   CSS Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
-   CSS Grid Layout Guide: _[Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)_
-   CSS Grid Layout Guide: _[CSS Grids, Logical Values and Writing Modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)_
-   [Definition of Grid Lines in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-line-concept)

---

## Term: Grid Row

-   CSS Grids

---

> A **grid row** is a horizontal track in a [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), that is the space between two horizontal grid lines. It is defined by the _cssxref("grid-template-rows"_) property or in the shorthand _cssxref("grid"_) or _cssxref("grid-template"_) properties.

In addition, rows may be created in the _implicit grid_ when items are placed outside of rows created in the _explicit grid_. These rows will be auto sized by default, or can have a size specified with the _cssxref("grid-auto-rows"_) property.

When working with alignment in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout), the axis along which rows run is known as the _inline, or row, axis_.

#### See also

### Property reference

-   _cssxref("grid-template-rows"_)
-   _cssxref("grid-auto-rows"_)
-   _cssxref("grid"_)
-   _cssxref("grid-template"_)

### Further reading

-   CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_

---

## Term: Grid Tracks

-   CSS Grids

---

> A **grid track** is the space between two adjacent _glossary("grid lines"_). They are defined in the _explicit grid_ by using the _cssxref("grid-template-columns"_) and _cssxref("grid-template-rows"_) properties or the shorthand _cssxref("grid"_) or _cssxref("grid-template"_) properties. Tracks are also created in the _implicit grid_ by positioning a grid item outside of the tracks created in the explicit grid.

The image below shows the first row track on a grid.

![Diagram showing a grid track.](1_grid_track.png)

## Track sizing in the explicit grid

When defining grid tracks using _cssxref("grid-template-columns"_) and _cssxref("grid-template-rows"_) you may use any length unit, and also the flex unit, `fr` which indicates a portion of the available space in the grid container.

## Example

The example below demonstrates a grid with three column tracks, one of 200 pixels, the second of 1fr, the third of 3fr. Once the 200 pixels has been subtracted from the space available in the grid container, the remaining space is divided by 4. One part is given to column 2, 3 parts to column 3.

```css hidden
* {
    box-sizing: border-box;
}

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

\_ EmbedLiveSample('Example', '500', '230') }}

## Track sizing in the implicit grid

Tracks created in the implicit grid are auto-sized by default, however you can define a size for these tracks using the _cssxref("grid-auto-rows"_) and _cssxref("grid-auto-columns"_) properties.

#### See also

-   [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
-   [Definition of Grid Tracks in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-track-concept)
-   Property reference

    -   _cssxref("grid-template-columns"_)
    -   _cssxref("grid-template-rows"_)
    -   _cssxref("grid"_)
    -   _cssxref("grid-template"_)

---

## Term: Grid

-   CSS
-   CSS Grid
-   Glossary

---

> A _CSS grid_ is defined using the `grid` value of the _cssxref("display"_) property; you can define columns and rows on your grid using the _cssxref("grid-template-rows"_) and _cssxref("grid-template-columns"_) properties.

The grid that you define using these properties is described as an _explicit grid_.

If you place content outside of this explicit grid, or if you are relying on auto-placement and the grid algorithm needs to create additional row or column _glossary("grid tracks", "tracks"_) to hold _glossary("grid item", "grid items"_), then extra tracks will be created in the implicit grid. The _implicit grid_ is the grid created automatically due to content being added outside of the tracks defined.

In the example below I have created an _explicit grid_ of three columns and two rows. The _third_ row on the grid is an _implicit grid_ row track, formed due to their being more than the six items which fill the explicit tracks.

## Example

```css hidden
* {
    box-sizing: border-box;
}

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

\_ EmbedLiveSample('Example', '500', '330') }}

#### See also

-   [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
-   Property reference:

    -   _cssxref("grid-template-columns"_)
    -   _cssxref("grid-template-rows"_)
    -   _cssxref("grid"_)
    -   _cssxref("grid-template"_)

---

## Term: Guard

-   API
-   CodingScripting
-   Glossary
-   guard

---

> Guard is a feature of _domxref("Headers"_) objects (as defined in the _domxref("Fetch_API","Fetch spec"_), which affects whether methods such as _domxref("Headers.set","set()"_) and _domxref("Headers.append","append()"_) can change the header's contents. For example, `immutable` guard means that headers can't be changed. For more information, read [Fetch basic concepts: guard](/en-US/docs/Web/API/Fetch_API/Basic_concepts#guard).

---

## Term: Gutters

-   CSS Grids

---

> **Gutters** or _alleys_ are spacing between content tracks. These can be created in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout) using the _cssxref("column-gap"_), _cssxref("row-gap"_), or _cssxref("gap"_) properties.

## Example

In the example below we have a three-column and two-row track grid, with 20-pixel gaps between column tracks and `20px`-gaps between row tracks.

```css hidden
* {
    box-sizing: border-box;
}

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
    grid-template-columns: repeat(3, 1.2fr);
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

\_ EmbedLiveSample('Example', '300', '280') }}

In terms of grid sizing, gaps act as if they were a regular grid track however nothing can be placed into the gap. The gap acts as if the grid line at that location has gained extra size, so any grid item placed after that line begins at the end of the gap.

The grid-gap properties are not the only thing that can cause tracks to space out. Margins, padding or the use of the space distribution properties in [Box Alignment](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) can all contribute to the visible gap - therefore the grid-gap properties should not be seen as equal to "the gutter size" unless you know that your design has not introduced any additional space with one of these methods.

#### See also

### Property reference

-   _cssxref("column-gap"_)
-   _cssxref("row-gap"_)
-   _cssxref("gap"_)

### Further reading

-   CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
-   [Definition of gutters in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#gutters)

---

## Term: gzip compression

-   Glossary
-   compression
-   gzip

---

> gzip is a file format used for file compression and decompression. It is based on the Deflate algorithm that allows files to be made smaller in size which allows for faster network transfers. gzip is commonly supported by web servers and modern browsers, meaning that servers can automatically compress files with gzip before sending them, and browsers can uncompress files upon receiving them.

#### See also

-   [The gzip home page](http://www.gzip.org/)
-   [gzip on Wikipedia](https://en.wikipedia.org/wiki/Gzip)

---

## Term: Hash

-   CodingScripting
-   Cryptography
-   Glossary
-   Hash

---

> The hash function takes a variable-length message input and produces a fixed-length hash output. It is commonly in the form of a 128-bit "fingerprint" or "message digest". Hashes are very useful for _glossary("cryptography"_) — they insure the integrity of transmitted data, and provide the basis for _glossary("HMAC"_), which enables message authentication.

#### See also

-   _Interwiki("wikipedia", "Hash function"_) on Wikipedia

---

## Term: Head

-   CodingScripting
-   Glossary
-   HTML
-   head
-   metadata

---

> The **Head** is the part of an _glossary("HTML"_) document that contains _glossary("metadata"_) about that document, such as author, description, and links to _glossary("CSS"_) or _glossary("JavaScript"_) files that should be applied to the HTML.

#### See also

-   _htmlelement("head"_) element reference on MDN
-   [The HTML \<head>](/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) on the MDN Learning Area

---

## Term: High-level programming language

-   CodingScripting
-   Glossary

---

> A high-level programming language has a **significant abstraction** from the details of computer operation. It is designed to be easily understood by humans and for this reason they must be translated by another software. Unlike low-level programming languages, it may use natural language elements, or may automate (or even entirely hide) significant areas of computing systems, making the process of developing simpler and more understandable relative to a lower-level language. The amount of abstraction provided defines how "high-level" a programming language is.

The idea of a language automatically translatable into machine code, but nearer to human logic, was introduced in computer science in the 1950s, especially thanks to the work of **John Backus** (IBM), to whom it owes the first high-level language to have been widely circulated: Fortran. For this innovation Backus received the Turing prize.

---

## Term: HMAC

-   Cryptography
-   Glossary
-   Hash
-   Security

---

> **Hash-based message authentication code**(_HMAC_) is a protocol used for _Glossary("cryptography", "cryptographically"_) authenticating messages.

It can use any kind of _Glossary("Cryptographic hash function", "cryptographic functions"_), and its strength depends on the underlying function (SHA1 or MD5 for instance), and the chosen secret key. With such a combination, the HMAC verification _Glossary("Algorithm", "algorithm"_) is then known with a compound name such as HMAC-SHA1.

HMAC is used to ensure both integrity and authentication.

#### See also

-   _Interwiki("wikipedia", "Hash-based message authentication code", "HMAC"_) on Wikipedia
-   [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt) on IETF

---

## Term: Hoisting

-   CodingScripting
-   Glossary
-   JavaScript

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
//
catName('Tiger');

function catName(name) {
    console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/
```

Without hoisting you would _have_ to write the same code like this:

---

```js
//

function catName(name) {
    console.log("My cat's name is " + name);
}

catName('Tiger');
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
//
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
```

The same thing happens if we declare and initialize the variable in the same line.

```js
//
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.
```

If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted.
Trying to read the variable before it is initialized results in `ReferenceError` exception.

```js
//
console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num = 6; // Initialization
```

Note however that initialization also causes declaration (if not already declared).
The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.

```js
//
a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + '' + b); // 'Cranberry'
```

### `let` and `const` hoisting

Variables declared with `let` and `const` are also hoisted but, unlike `var`, are not initialized with a default value.
An exception will be thrown if a variable declared with `let` or `const` is read before it is initialized.

```js
//
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

-   [`var` statement](/en-US/docs/Web/JavaScript/Reference/Statements/var) — MDN
-   [`let` statement](/en-US/docs/Web/JavaScript/Reference/Statements/let) — MDN
-   [`const` statement](/en-US/docs/Web/JavaScript/Reference/Statements/const) — MDN
-   [`function` statement](/en-US/docs/Web/JavaScript/Reference/Statements/function) — MDN

---

## Term: Host

-   Glossary
-   Intermediate
-   Web
-   WebMechanics

---

> A host is a device connected to the _glossary("Internet"_) (or a local network). Some hosts called _glossary("server","servers"_) offer additional services like serving webpages or storing files and emails.

The host doesn't need to be a hardware instance. It can be generated by virtual machines. The host generated by virtual machines is called "Virtual hosting".

#### See also

-   _interwiki("wikipedia", "Host (network)", "Host"_) on Wikipedia

---

## Term: Hotlink

-   Glossary
-   WebMechanics

---

> A **hotlink** (also known as an **inline link**) is an object (typically an image) directly linked to from another site. For example, an image hosted on site1.com is shown directly on site2.com.

The practice is often frowned upon as it can cause unwanted bandwidth usage on the website hosting the linked-to object, and copyright concerns — it is considered stealing when it is done without permission.

#### See also

-   _Interwiki("wikipedia", "Inline linking", "Hotlink"_) on Wikipedia
-   _glossary("Hyperlink"_) (Glossary)

---

## Term: Houdini

-   CSS
-   CSS API
-   Glossary
-   Houdini
-   Reference

---

> Houdini is a set of low level APIs that give developers the power to extend CSS, providing the ability to hook into the styling and layout process of a browser's rendering engine. Houdini gives developers access to the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) ([CSSOM](/en-US/docs/Glossary/CSSOM)), enabling developers to write code the browser can parse as CSS.

The benefit of Houdini is that developers can create CSS features without waiting for web standards specifications to define them and without waiting for every browser to fully implement the features.

While many of the features Houdini enables can be created with JavaScript, interacting directly with the CSSOM before JavaScript is enabled provides for faster parse times. Browsers create the CSSOM — including layout, paint, and composite processes — before applying any style updates found in scripts: layout, paint, and composite processes are repeated for updated JavaScript styles to be implemented. Houdini code doesn't wait for that first rendering cycle to be complete. Rather, it is included in that first cycle, creating renderable, understandable styles.

#### See also

-   [Houdini](/en-US/docs/Web/Houdini)
-   [CSSOM](/en-US/docs/Web/API/CSS_Object_Model)
-   [CSS Paint API](/en-US/docs/Web/API/CSS_Painting_API)
-   [CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API)

---

## Term: HPKP

-   Glossary
-   Security

---

> **HTTP Public Key Pinning** (**HPKP**) is a security feature that tells a web client to associate a specific cryptographic public key with a certain web server to decrease the risk of _Glossary("MITM"_) attacks with forged certificates.

#### See also

-   _HTTPHeader("Public-Key-Pins"_)
-   _HTTPHeader("Public-Key-Pins-Report-Only"_)
-   [RFC 7469](https://datatracker.ietf.org/doc/html/rfc7469)
-   Wikipedia: [HTTP Public Key Pinning](https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning)

---

## Term: HSTS

-   HTTP
-   Security

---

> **HTTP Strict Transport Security** lets a web site inform the browser that it should never load the site using HTTP and should automatically convert all attempts to access the site using HTTP to HTTPS requests instead. It consists in one HTTP header, _HTTPHeader("Strict-Transport-Security"_), sent by the server with the resource.

In other words, it tells the browser that changing the protocol from HTTP to HTTPS in a URL works (and is more secure) and asks the browser to do it for every request.

#### See also

-   _HTTPHeader("Strict-Transport-Security"_)
-   OWASP Article: [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
-   Wikipedia: _interwiki("wikipedia", "HTTP Strict Transport Security"_)

---

## Term: HTML5

-   CodingScripting
-   Glossary
-   HTML
-   HTML5
-   Markup

---

> The term HTML5 is essentially a buzzword that refers to a set of modern web technologies. This includes the _Glossary("HTML"_) Living Standard, along with _glossary("JavaScript"_) _glossary("API","APIs"_) to enhance storage, multimedia, and hardware access.

You may sometimes hear about "new HTML5 elements", or find HTML5 described as a new version of HTML. HTML5 was the successor to previous HTML versions and introduced new elements and capabilities to the language on top of the previous version, HTML 4.01, as well as improving or removing some existing functionality. However, as a Living Standard HTML now has no version. The up-to-date specification can be found at [html.spec.whatwg.org/](https://html.spec.whatwg.org/).

Any modern site should use the [HTML doctype](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#doctype) — this will ensure that you are using the latest version of HTML.

> **Note:** Until 2019, the _glossary("W3C"_) published a competing HTML5 standard with version numbers. Since [28 May 2019](https://www.w3.org/blog/news/archives/7753), the WHATWG Living Standard was announced by the W3C as the sole version of HTML.

#### See also

-   [our HTML documentation](/en-US/docs/Web/HTML)
-   [HTML beginner's learning guides](/en-US/docs/Learn/HTML)
-   [Web APIs](/en-US/docs/Web/API)

---

## Term: HTML

-   CodingScripting
-   Glossary
-   HTML
-   l10n:priority

---

> **HTML** (HyperText Markup Language) is a descriptive language that specifies webpage structure.

## Brief history

In 1990, as part of his vision of the _Glossary("World Wide Web","Web"_), Tim Berners-Lee defined the concept of _Glossary("hypertext"_), which Berners-Lee formalized the following year through a markup mainly based on _Glossary("SGML"_). The _Glossary("IETF"_) began formally specifying HTML in 1993, and after several drafts released version 2.0 in 1995. In 1994 Berners-Lee founded the _Glossary("W3C"_) to develop the Web. In 1996, the W3C took over the HTML work and published the HTML 3.2 recommendation a year later. HTML 4.0 was released in 1999 and became an _Glossary("ISO"_) standard in 2000.

At that time, the W3C nearly abandoned HTML in favor of _Glossary("XHTML"_), prompting the founding of an independent group called _Glossary("WHATWG"_) in 2004. Thanks to WHATWG, work on _Glossary("HTML5"_) continued: the two organizations released the first draft in 2008 and the final standard in 2014.

## Concept and syntax

![Detail of the structure of an HTML element](anatomy-of-an-html-element.png)

An HTML file is normally saved with an `.htm` or `.html` extension, served by a _Glossary("Server","web server"_), and can be rendered by any _Glossary("Browser","Web browser"_).

#### See also

-   _interwiki("wikipedia", "HTML", "HTML"_) on Wikipedia
-   [Our HTML tutorial](/en-US/docs/Learn/HTML)
-   [The web course on codecademy.com](https://www.codecademy.com/learn/learn-html)
-   [The HTML documentation on MDN](/en-US/docs/Web/HTML)
-   [The HTML specification](https://www.w3.org/TR/html5/)

---

## Term: HTTP/2

-   Glossary
-   HTTP
-   Infrastructure
-   Reference
-   Web Performance
-   l10n:priority

---

> **HTTP/2** is a major revision of the [HTTP network protocol](/en-US/docs/Web/HTTP/Basics_of_HTTP).

The primary goals for HTTP/2 are to reduce _glossary("latency"_) by enabling full request and response multiplexing, minimize protocol overhead via efficient compression of HTTP header fields, and add support for request prioritization and server push.

HTTP/2 does not modify the application semantics of HTTP in any way. All the core concepts found in HTTP 1.1, such as HTTP methods, status codes, URIs, and header fields, remain in place. Instead, HTTP/2 modifies how the data is formatted (framed) and transported between the client and server, both of which manage the entire process, and hides application complexity within the new framing layer. As a result, all existing applications can be delivered without modification.

#### See also

-   [HTTP on MDN](/en-US/docs/Web/HTTP)
-   _interwiki("wikipedia", "HTTP/2", "HTTP/2"_) on Wikipedia
-   [Glossary](/en-US/docs/Glossary)

    -   _glossary("HTTP"_)
    -   _glossary("Latency"_)

---

## Term: HTTP/3

-   HTTP
-   Intro
-   NeedsContent

---

> **HTTP/3** is the upcoming major revision of the [HTTP network protocol](/en-US/docs/Web/HTTP/Basics_of_HTTP), succeeding _glossary("HTTP 2", "HTTP/2"_).

The major point of HTTP/3 is that it uses a new _glossary("UDP"_) protocol named QUIC, instead of _glossary("TCP"_).

#### See also

-   [HTTP on MDN](/en-US/docs/Web/HTTP)
-   _interwiki("wikipedia", "HTTP/3", "HTTP/3"_) on Wikipedia
-   [Glossary](/en-US/docs/Glossary)

    -   _glossary("HTTP"_)
    -   _glossary("HTTP 2"_)
    -   _glossary("Latency"_)

---

## Term: HTTP header

-   Glossary
-   HTTP Header
-   WebMechanics

---

> An **HTTP header** is a field of an HTTP request or response that passes additional context and metadata about the request or response. For example, a request message can use headers to indicate it's preferred media formats, while a response can use header to indicate the media format of the returned body. Headers are case-insensitive, begin at the start of a line and are immediately followed by a `':'` and a header-dependent value. The value finishes at the next CRLF or at the end of the message.

The HTTP and Fetch specifications refer to a number of header categories, including:

-   _Glossary("Request header"_): Headers containing more information about the resource to be fetched or about the client itself.
-   _Glossary("Response header"_): Headers with additional information about the response, like its location or about the server itself (name, version, …).
-   _Glossary("Representation header"_): metadata about the resource in the message body (e.g. encoding, media type, etc.).
-   _Glossary("Fetch metadata request header"_): Headers with metadata about the resource in the message body (e.g. encoding, media type, etc.).

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
> -   _Glossary("General header"_): Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.
> -   _Glossary("Entity header"_): Headers containing more information about the body of the entity, like its content length or its MIME-type (this is a superset of what are now referred to as the Representation metadata headers)

#### See also

-   [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
-   Syntax of [headers](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in the HTTP specification
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("HTTP header"_)
    -   _Glossary("Request header"_)
    -   _Glossary("Response header"_)
    -   _Glossary("Representation header"_)
    -   _Glossary("Fetch metadata request header"_)
    -   _Glossary("Forbidden header name"_)
    -   _Glossary("Forbidden response header name"_)
    -   _Glossary("CORS-safelisted request header"_)
    -   _Glossary("CORS-safelisted response header"_)

---

## Term: Safe (HTTP Methods)

-   Glossary
-   WebMechanics

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

-   Definition of [safe](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.1) in the HTTP specification.
-   Description of common safe methods: _HTTPMethod("GET"_), _HTTPMethod("HEAD"_), _HTTPMethod("OPTIONS"_)
-   Description of common unsafe methods: _HTTPMethod("PUT"_), _HTTPMethod("DELETE"_), _HTTPMethod("POST"_)

---

## Term: HTTPS RR

-   Glossary
-   HTTPS
-   HTTPS RR
-   Infrastructure
-   Security

---

> **HTTPS RR** (**_HTTPS Resource Records_**) are a type of DNS record that delivers configuration information and parameters for how to access a service via _Glossary("HTTPS"_).

An _HTTPS RR_ can be used to optimize the process of connecting to a service using HTTPS.
Further, the presence of an _HTTPS RR_ signals that all useful _Glossary("HTTP"_) resources on the origin are reachable over HTTPS, which in turn means that a browser can safely upgrade connections to the domain from HTTP to HTTPS.

##### See also

-   [Service binding and parameter specification via the DNS (DNS SVCB and HTTPS RRs)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-svcb-https/00/) (Draft IETF specification: draft-ietf-dnsop-svcb-https-00)
-   [Strict Transport Security vs. HTTPS Resource Records: the showdown](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (Emily M. Stark blog)
-   _glossary("SSL"_)
-   _glossary("TLS"_)

---

## Term: HTTPS

-   Glossary
-   HTTPS
-   Infrastructure
-   Security

---

> **HTTPS** (**_HyperText Transfer Protocol Secure_**) is an encrypted version of the _Glossary("HTTP"_) protocol. It uses _Glossary("SSL"_) or _Glossary("TLS"_) to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, such as when performing banking activities or online shopping.

#### See also

-   _Interwiki("wikipedia", "HTTPS"_) on Wikipedia
-   [Moving to HTTPS community guide](https://movingtohttps.com/)
-   [Secure Contexts](/en-US/docs/Web/Security/Secure_Contexts)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _glossary("HTTP"_)
    -   _glossary("SSL"_)
    -   _glossary("TLS"_)

---

## Term: Hyperlink

-   CodingScripting
-   Glossary
-   HTML
-   Navigation

---

> Hyperlinks connect webpages or data items to one another. In HTML, _HTMLElement("a"_) elements define hyperlinks from a spot on a webpage (like a text string or image) to another spot on some other webpage (or even on the same page).

#### See also

-   _interwiki("wikipedia", "Hyperlink", "Hyperlink"_) on Wikipedia
-   The [Hyperlink](/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) guide on MDN
-   [Links in HTML Documents - W3C](https://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html)
-   [HTML5 a - hyperlink - W3C](https://w3c.github.io/html-reference/a.html)
-   [`<a>` on MDN](/en-US/docs/Web/HTML/Element/a)
-   [`<link>` on MDN](/en-US/docs/Web/HTML/Element/link)

---

## Term: Hypertext

-   Glossary
-   Web
-   WebMechanics

---

> Hypertext is text that contains links to other texts, as opposed to a single linear flow like in a novel.

The term was coined by Ted Nelson around 1965.

#### See also

-   _interwiki("wikipedia", "Hypertext", "Hypertext"_) on Wikipedia

---

## Term: I18N

-   Beginner
-   Credibility
-   Glossary
-   Internationalization
-   OpenPractices
-   i18n

---

> i18n (from "internationalization", a 20-letter word) is the best practice that enables products or services to be readily adapted to any target culture.

> **Internationalization** is the design and development of a product, application or document content that **_enables_** easy localization for target audiences that vary in culture, region, or language. (The _Glossary("W3C"_) definition)

Among other things, i18n requires support for multiple

-   character sets (usually via [Unicode](https://searchcio-midmarket.techtarget.com/definition/Unicode))
-   units of measure (currency, °C/°F, km/miles, etc.)
-   time and date formats
-   keyboard layouts
-   text directions

#### See also

-   _interwiki("wikipedia", "Internationalization and localization", "i18n"_) on Wikipedia
-   [i18n on W3C](https://www.w3.org/International/questions/qa-i18n.en#Internationalization)
-   [i18n on gala-global.org](https://www.gala-global.org/what-internationalization)
-   [i18n material on i18nguy.com](http://www.i18nguy.com/)

---

## Term: IANA

-   Glossary
-   Infrastructure

---

> **IANA** (Internet Assigned Numbers Authority) is a subsidiary of _glossary("ICANN"_) charged with recording and/or assigning _glossary("domain name","domain names"_), _glossary("IP address","IP addresses"_), and other names and numbers used by Internet _glossary("protocol","protocols"_).

#### See also

-   [Official website](https://www.iana.org/)
-   _interwiki("wikipedia", "Internet Assigned Numbers Authority", "IANA"_) on Wikipedia

---

## Term: ICANN

-   Glossary
-   Infrastructure

---

> **ICANN** (Internet Corporation for Assigned Names and Numbers) is an international nonprofit that maintains the _glossary("DNS","domain name system"_) and the record of _glossary("IP address","IP addresses"_).

#### See also

-   [Official website](https://www.icann.org/)
-   _interwiki("wikipedia", "ICANN", "ICANN"_) on Wikipedia

---

## Term: ICE

-   CodingScripting
-   Glossary
-   Networking
-   Protocols
-   WebRTC

---

> **ICE** (_Interactive Connectivity Establishment_) is a framework used by _glossary("WebRTC"_) (among other technologies) for connecting two peers, regardless of network topology (usually for audio and video chat). This protocol lets two peers find and establish a connection with one another even though they may both be using Network Address Translator (_glossary("NAT"_)) to share a global IP address with other devices on their respective local networks.

The framework algorithm looks for the lowest-latency path for connecting the two peers, trying these options in order:

1.  Direct UDP connection (In this case—and only this case—a _glossary("STUN"_) server is used to find the network-facing address of a peer)
2.  Direct TCP connection, via the HTTP port
3.  Direct TCP connection, via the HTTPS port
4.  Indirect connection via a relay/_glossary("TURN"_) server (if a direct connection fails, e.g., if one peer is behind a firewall that blocks NAT traversal)

#### See also

-   [WebRTC](/en-US/docs/Web/API/WebRTC_API), the principal web-related protocol which uses ICE
-   [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
-   _rfc("5245"_), the IETF specification for ICE
-   _domxref("RTCIceCandidate"_), the interface representing a ICE candidate

---

## Term: IDE

-   CodingScripting
-   Glossary

---

> An Integrated Development Environment (**IDE**) or Interactive Development environment is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of a source code editor, build automation tools and a debugger.

#### See also

-   _interwiki("wikipedia", "Integrated_development_environment", "IDE"_) on Wikipedia

---

## Term: Idempotent

-   Glossary
-   WebMechanics

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

-   Definition of [idempotent](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.2) in the HTTP specification.
-   Description of common idempotent methods: _HTTPMethod("GET"_), _HTTPMethod("HEAD"_), _HTTPMethod("PUT"_), _HTTPMethod("DELETE"_), _HTTPMethod("OPTIONS"_), _HTTPMethod("TRACE"_)
-   Description of common non-idempotent methods: _HTTPMethod("POST"_),_HTTPMethod("PATCH"_), _HTTPMethod("CONNECT"_)

---

## Term: Identifier

-   Beginner
-   CodingScripting
-   Glossary
-   Sharing

---

> An **identifier** is a sequence of characters in the code that identifies a _glossary("variable"_), _glossary("function"_), or _glossary("property"_).

In _glossary("JavaScript"_), identifiers are case-sensitive and can contain _glossary("Unicode"_) letters, `$`, `_`, and digits (0-9), but may not start with a digit.

An identifier differs from a string in that a _glossary("string"_) is data, while an identifier is part of the code. In JavaScript, there is no way to convert identifiers to strings, but sometimes it is possible to parse strings into identifiers.

#### See also

-   _interwiki("wikipedia", "Identifier#In_computer_science", "Identifier"_) on Wikipedia
-   [Glossary](/en-US/docs/Glossary)

    -   _glossary("Identifier"_)
    -   _glossary("Scope"_)
    -   _glossary("string"_)
    -   _glossary("Unicode"_)

---

## Term: IDL

-   CodingScripting
-   Glossary
-   IDL
-   Interface description language

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

-   _interwiki("wikipedia", "Interface description language", "IDL"_) on Wikipedia
-   [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
-   [Interface Definition Language](https://www.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)

---

## Term: IETF

-   Glossary
-   IETF
-   Infrastructure
-   Internet

---

> The Internet Engineering Task Force (**IETF**) is a worldwide organization that drafts _glossary('specification','specifications'_) governing the mechanisms behind the _glossary("Internet"_), especially the _glossary("TCP"_)/_glossary("IPv6","IP"_) or Internet _glossary("Protocol"_) Suite.

The IETF is open, run by volunteers, and sponsored by the [Internet Society](https://www.internetsociety.org/).

#### See also

-   [Official website](https://www.ietf.org/)

---

## Term: IIFE

-   CodingScripting
-   DesignPattern
-   Functions
-   Glossary
-   JavaScript

---

> An **IIFE** (Immediately Invoked Function Expression) is a _glossary("JavaScript"_) _glossary("function"_) that runs as soon as it is defined.
> The name IIFE is promoted by Ben Alman in [his blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
//
(function () {
    statements;
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
//
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
//
const makeWithdraw = (balance) =>
    (function (copyBalance) {
        let balance = copyBalance; // This variable is private
        let doBadThings = function () {
            console.log('I will do bad things with your money');
        };
        doBadThings();
        return {
            withdraw: function (amount) {
                if (balance >= amount) {
                    balance -= amount;
                    return balance;
                } else {
                    return 'Insufficient money';
                }
            }
        };
    })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

### For loop with var before ES6

We could see the following use of IIFE in some old code, before the introduction of the statements **let** and **const**
in **ES6** and the block scope. With the statement **var**, we have only function scopes and the global scope.
Suppose we want to create 2 buttons with the texts Button 0 and Button 1 and we click
them, we would like them to alert 0 and 1. The following code doesn't work:

```js
//
for (var i = 0; i < 2; i++) {
    const button = document.createElement('button');
    button.innerText = 'Button ' + i;
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
//
for (var i = 0; i < 2; i++) {
    const button = document.createElement('button');
    button.innerText = 'Button ' + i;
    button.onclick = (function (copyOfI) {
        return function () {
            alert(copyOfI);
        };
    })(i);
    document.body.appendChild(button);
}
console.log(i); // 2
```

When clicked, Buttons 0 and 1 alert 0 and 1.
The variable `i` is globally defined.
Using the statement **let**, we could simply do:

```js
//
for (let i = 0; i < 2; i++) {
    const button = document.createElement('button');
    button.innerText = 'Button ' + i;
    button.onclick = function () {
        alert(i);
    };
    document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

When clicked, these buttons alert 0 and 1.

#### See also

-   [Quick example](/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions) (at the end of the "Functions" section, right before "Custom objects")
-   _interwiki("wikipedia", "Immediately-invoked function expression", "IIFE"_) (Wikipedia)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Function"_)
    -   _Glossary("Self-Executing Anonymous Function"_)

---

## Term: IMAP

-   Beginner
-   Glossary
-   Infrastructure
-   MailNews

---

> IMAP (Internet Message Access Protocol) is a _Glossary("protocol"_) used to retrieve and store emails. More recent than _Glossary("POP"_), IMAP allows folders and rules on the server.

Unlike POP3, IMAP allows multiple simultaneous connections to one mailbox. Clients accessing a mailbox can receive information about state changes made from other clients. IMAP also provides a mode for clients to stay connected and receive information on demand.

Mark Crispin initially developed IMAP in 1986 as _Interim Mail Access Protocol_. IMAP4 revision 1 is the current version, defined by [RFC 3501](http://www.faqs.org/rfcs/rfc3501.html).

#### See also

-   _RFC(3501_)
-   _Glossary("POP"_)
-   _interwiki("wikipedia", "Internet Message Access Protocol", "IMAP"_) on Wikipedia

---

## Term: Immutable

-   CodingScripting
-   Glossary

---

> An immutable _glossary("object"_) is one whose content cannot be changed.
> An object can be immutable for various reasons, for example:

-   To improve performance (no planning for the object's future changes)
-   To reduce memory use (make _glossary("object reference","object references"_) instead of cloning the whole object)
-   Thread-safety (multiple threads can reference the same object without interfering with one other)

#### See also

-   _interwiki("wikipedia", "Immutable object", "Immutable"_) on Wikipedia

---

## Term: 'MDN Web Docs Glossary: Definitions of Web-related terms'

-   Beginner
-   Definitions
-   Dictionary
-   Glossary
-   Index
-   Landing
-   Terminology

---

> Web technologies contain long lists of jargon and abbreviations that are used in documentation and coding. This glossary provides definitions of words and abbreviations you need to know to successfully understand and build for the web.

Glossary terms can be selected from the sidebar (or listed below on mobile devices and other narrow width screens).

> **Note:** This glossary is a never-ending work in progress. You can help improve it by [writing new entries](/en-US/docs/MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary) or by making the existing ones better.

_LearnBox({"title":"Learn a new word ..."}_)

<section id="Quick_links">
 <ol>
  <li>
<strong>
<a href="/en-US/docs/Glossary">MDN Web Docs Glossary</a>
</strong>_ListSubpagesForSidebar("/en-us/docs/Glossary", 1_)</li>
 </ol>
</section>

---

## Term: IndexedDB

-   API
-   CodingScripting
-   Database
-   Glossary
-   Sql

---

> IndexedDB is a Web _glossary("API"_) for storing large data structures within browsers and indexing them for high-performance searching. Like an _glossary("SQL"_)-based [RDBMS](https://en.wikipedia.org/wiki/Relational_database_management_system 'Relational DataBase Management System'), IndexedDB is a transactional database system. However, it uses _glossary("JavaScript"_) objects rather than fixed columns tables to store data.

#### See also

-   The _domxref('IndexedDB_API','IndexedDB API','',1_) on MDN
-   [The W3C specification for IndexedDB](https://w3c.github.io/IndexedDB/)

---

## Term: Index

-   Glossary
-   Index
-   MDN Meta
-   Navigation

---

> _Index("/en-US/docs/Glossary"_)

---

## Term: Information architecture

-   Design
-   Glossary
-   information architecture

---

> Information architecture, as applied to web design and development, is the practice of organizing the information / content / functionality of a web site so that it presents the best user experience it can, with information and services being easily usable and findable.

#### See also

-   _interwiki("wikipedia", "Information_architecture", "Information architecture"_) on Wikipedia

---

## Term: Inheritance

-   CodingScripting
-   Glossary
-   Inheritance
-   Programming Language

---

> Inheritance is a major feature of _glossary("OOP","object-oriented programming"_). Data abstraction can be carried up several levels, that is, _glossary("class","classes"_) can have superclasses and subclasses.

As an app developer, you can choose which of the superclass's _glossary("attribute","attributes"_) and _glossary("method","methods"_) to keep and add your own, making class definition very flexible. Some languages let a class inherit from more than one parent (multiple inheritance).

#### See also

-   [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

## Term: Input method editor

-   Glossary

---

> An input method editor (IME) is a program that provides a specialized user interface for text input. Input method editors are used in many situations:

-   to enter Chinese, Japanese, or Korean text using a Latin keyboard
-   to enter Latin text using a numeric keypad
-   to enter text on a touch screen using handwriting recognition

#### See also

-   _Interwiki("wikipedia", "Input method"_)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("I18N"_)

---

## Term: Instance

-   Beginner
-   CodingScripting
-   Glossary
-   JavaScript
-   NeedsExample
-   OOP

---

> An _glossary("object"_) created by a _glossary("constructor"_) is an instance of that constructor.

#### See also

-   _interwiki("wikipedia", "Instance (computer science)", "Instance"_) on Wikipedia

---

## Term: Internationalization

-   Glossary
-   Internationalization
-   Reference

---

> **Internationalization**, often shortened to "[i18n](/en-US/docs/Glossary/I18N)", is the adapting of a web site or web application to different languages, regional differences, and technical requirements for different regions and countries. Internationalization is the process of architecting your web application so that it can be quickly and easily adapted to various languages and regions without much engineering effort when new languages and regions are supported. Also so that a user can browse features to translate or localize the application to access all the content without breaking the layout.

Internationalization includes support for multiple character sets (usually via [Unicode](https://searchcio-midmarket.techtarget.com/definition/Unicode)), units of measure ([currency](/en-US/docs/Web/API/PaymentCurrencyAmount), °C/°F, km/miles, etc.), date and time formats, keyboard layouts, and layout and text directions.

#### See also

-   [Internationalization extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
-   [Internationalization API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
-   [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and [Grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

---

## Term: Internet

-   Beginner
-   Glossary
-   Guide
-   Intro
-   NeedsContent
-   Tutorial
-   Web
-   WebMechanics

---

> The Internet is a worldwide network of networks that uses the Internet protocol suite (also named _glossary("TCP"_)/_glossary("IPv6","IP"_) from its two most important _glossary("protocol","protocols"_)).

#### See also

-   [How the Internet works](/en-US/docs/Learn/Common_questions/How_does_the_Internet_work) (introduction for beginners)

---

## Term: Intrinsic size

-   CSS
-   Glossary
-   Intrinsic size

---

> In CSS, the _intrinsic size_ of an element is the size it would be based on its content, if no external factors were applied to it. For example, inline elements are sized intrinsically: `width`, `height`, and vertical margin and padding have no impact, though horizontal margin and padding do.

How intrinsic sizes are calculated is defined in the [CSS Intrinsic and Extrinsic Sizing Specification](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes).

Intrinsic sizing takes into account the `min-content` and `max-content` size of an element. For text the `min-content` size would be if the text wrapped as small as it can in the inline direction without causing an overflow, doing as much soft-wrapping as possible. For a box containing a string of text, the `min-content` size would be defined by the longest word. The keyword value of `min-content` for the _cssxref("width"_) property will size an element according to the `min-content` size.

The `max-content` size is the opposite — in the case of text, this would have the text display as wide as possible, doing no soft-wrapping, even if an overflow was caused. The keyword value `max-content` exposes this behavior.

For images the intrinsic size has the same meaning — it is the size that an image would be displayed if no CSS was applied to change the rendering. By default images are assumed to have a "1x" pixel density (1 device pixel = 1 CSS pixel) and so the intrinsic size is simply the pixel height and width. The intrinsic image size and resolution can be explicitly specified in the _Glossary("EXIF"_) data. The intrinsic pixel density may also be set for images using the _htmlattrxref("srcset", "img"_) attribute (note that if both mechanisms are used, the `srcset` value is applied "over" the EXIF value).

---

## Term: IP Address

-   Beginner
-   Glossary
-   Infrastructure
-   Web

---

> An IP address is a number assigned to every device connected to a network that uses the Internet protocol.

"IP address" typically still refers to 32-bit IPv4 addresses until IPv6 is deployed more broadly.

#### See also

-   _interwiki("wikipedia", "IP address", "IP address"_) on Wikipedia

---

## Term: IPv4

-   Glossary
-   IPv4
-   Infrastructure
-   Internet Protocol
-   Protocol

---

> IPv4 is the fourth version of the communication _Glossary("protocol"_) underlying the _glossary("Internet"_) and the first version to be widely deployed.

First formalized in 1981, IPv4 traces its roots to the initial development work for ARPAnet. IPv4 is a connectionless protocol to be used on packet-switched Link layer networks (ethernet). _glossary("IPv6"_) is gradually replacing IPv4 owing to IPv4's security problems and the limitations of its address field. (Version number 5 was assigned in 1979 to the experimental Internet Stream Protocol, which however has never been called IPv5.)

#### See also

_interwiki("wikipedia", "IPv4", "IPv4"_) on Wikipedia

---

## Term: IPv6

-   Glossary
-   IPv6
-   Infrastructure
-   Intermediate
-   Web
-   WebMechanics

---

> **IPv6** is the current version of the communication _glossary("protocol"_) underlying the _glossary("Internet"_). Slowly IPv6 is replacing _Glossary("IPv4"_), among other reasons because IPv6 allows for many different _Glossary("IP address","IP addresses"_).

#### See also

-   _interwiki("wikipedia", "IPv6", "IPv6"_) on Wikipedia

---

## Term: IRC

-   Glossary
-   Infrastructure
-   Internet Relay Chat
-   Open Protocol
-   irc

---

> **IRC** (_Internet Relay Chat_) is a worldwide chat system requiring an Internet connection and an IRC client, which sends and receives messages via the IRC server.

Designed in the late 1980s by Jarrko Oikarinen, IRC uses _glossary("TCP"_) and is an open protocol. The IRC server broadcasts messages to everyone connected to one of many IRC channels (each with their own ID).

---

## Term: ISO

-   Glossary
-   ISO
-   Infrastructure
-   Web Standards
-   web specifications

---

> **ISO** (International Organization for Standardization) is a global association that develops uniform criteria coordinating the companies in each major industry.

#### See also

-   [Official website](https://www.iso.org/iso/home.html)

---

## Term: ISP

-   Glossary
-   ISP
-   Internet Service Provider
-   Web
-   WebMechanics

---

> An ISP (Internet Service Provider) sells Internet access, and sometimes email, web hosting, and voice over IP, either by a dial-up connection over a phone line (formerly more common), or through a broadband connection such as a cable modem or DSL service.

#### See also

-   [How the Internet works](/en-US/docs/Learn/Common_questions/How_does_the_Internet_work) (explanation for beginners)
-   _interwiki("wikipedia", "Internet service provider", "Internet service provider"_) on Wikipedia

---

## Term: ITU

-   Glossary
-   ITU
-   Standardization
-   organization

---

> The International Telecommunication Union (ITU) is the organization authorized by the United Nations to establish standards and rules for telecommunication, including telegraph, radio, telephony and the internet.

From defining rules for ensuring transmissions get to where they need to go to and creating the "SOS" alert signal used in Morse code, the ITU has long played a key role in how we use technology to exchange information and ideas.

In the Internet Age, the ITU's role of establishing standards for video and audio data formats used for streaming, teleconferencing, and other purposes. For example, the ITU and the Moving Picture Experts Group (MPEG) worked together to develop and publish, as well as to maintain, the various MPEG specifications, such as MPEG-2 (ITU H.262), AVC (ITU H.264), and HEVC (ITU H.265).

#### See also

-   [ITU web site](https://www.itu.int/)
-   [ITU history portal](https://www.itu.int/en/history/Pages/ITUsHistory.aspx)

---

## Term: Jank

-   Beginner
-   CodingScripting
-   Glossary
-   Performance
-   Web Performance

---

>

---

## Term: Java

-   CodingScripting
-   Glossary
-   Java
-   Programming Language

---

> Java is a _glossary("Compile", "compiled"_), _glossary("OOP", "object-oriented"_), highly portable _Glossary("computer programming", "programming"_) language.

Java is statically typed and features a similar syntax to C. It comes with a large library of readily usable functions, the Java Software Development Kit (SDK).

Programs are _glossary("Compile", "compiled"_) only once ahead of time into a proprietary byte code and package format that runs inside the Java Virtual Machine (JVM). The JVM is available across many platforms, which allows Java programs to run almost everywhere without the need to be compiled or packaged again. This makes it a preferred language in many large enterprises with heterogenous landscapes, but may be perceived "heavy".

#### See also

-   _interwiki("wikipedia", "Java (programming language)", "Java"_) on Wikipedia

---

## Term: JavaScript

-   CodingScripting
-   Glossary
-   JavaScript
-   l10n:priority

---

> ## Summary

JavaScript (or "JS") is a programming language used most often for dynamic client-side scripts on webpages, but it is also often used on the _Glossary("Server","server"_)-side, using a runtime such as [Node.js](https://nodejs.org/).

JavaScript **should not** be confused with the _interwiki("wikipedia", "Java_(programming*language)", "Java programming language"*). Although _"Java"_ and _"JavaScript"_ are trademarks (or registered trademarks) of Oracle in the U.S. and other countries, the two programming languages are significantly different in their syntax, semantics, and use cases.

JavaScript is primarily used in the browser, enabling developers to manipulate webpage content through the _Glossary("DOM"_), manipulate data with _Glossary("AJAX"_) and _Glossary("IndexedDB"_), draw graphics with _Glossary("canvas"_), interact with the device running the browser through various _Glossary("API","APIs"_), and more. JavaScript is one of the world's most commonly-used languages, owing to the recent growth and performance improvement of _Glossary("API","APIs"_) available in browsers.

## Origins and History

Conceived as a server-side language by Brendan Eich (then employed by the Netscape Corporation), JavaScript soon came to Netscape Navigator 2.0 in September 1995. JavaScript enjoyed immediate success and _glossary("Microsoft Internet Explorer", "Internet Explorer 3.0"_) introduced JavaScript support under the name JScript in August 1996.

In November 1996, Netscape began working with ECMA International to make JavaScript an industry standard. Since then, the standardized JavaScript is called ECMAScript and specified under ECMA-262, whose latest (eleventh, ES2020) edition is available as of June 2020.

Recently, JavaScript's popularity has expanded even further through the successful [Node.js](https://nodejs.org/) platform—the most popular cross-platform JavaScript runtime environment outside the browser. Node.js - built using [Chrome's V8 JavaScript Engine](<https://en.wikipedia.org/wiki/V8_(JavaScript_engine)>) - allows developers to use JavaScript as a scripting language to automate things on a computer and build fully functional _Glossary("HTTP"_) and _Glossary("WebSockets"_) servers.

#### See also

-   _interwiki("wikipedia", "JavaScript", "JavaScript"_) on Wikipedia
-   The _Link("/en-US/docs/Web/JavaScript/Guide"_) on MDN
-   [The "javascripting" workshop on NodeSchool](https://nodeschool.io/#workshoppers)
-   [The JavaScript course on codecademy.com](https://www.codecademy.com/tracks/javascript)
-   [The latest ECMAScript standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
-   The _Link("/en-US/docs/Web/JavaScript/reference"_) on MDN
-   [The _Eloquent JavaScript_ book](https://eloquentjavascript.net/)

---

## Term: JPEG

-   Beginner
-   Composing
-   Glossary
-   Images
-   JPEG

---

> **JPEG** (Joint Photographic Experts Group) is a commonly used method of lossy compression for digital images.

JPEG compression is composed of three compression techniques applied in successive layers, including chrominance subsampling, discrete cosine transformation and quantization, and run-length Delta & Huffman encoding. Chroma subsampling involves implementing less resolution for chroma information than for luma information, taking advantage of the human visual system's lower acuity for color differences than for luminance. A discrete cosine transform expresses a finite sequence of data points in terms of a sum of cosine functions oscillating at different frequencies.

#### See also

-   _Interwiki("wikipedia", "JPEG"_) on Wikipedia

---

## Term: jQuery

-   Glossary
-   JQuery
-   JavaScript

---

> **jQuery** is a _Glossary("JavaScript"_) _Glossary("Library"_) that focuses on simplifying _Glossary("DOM"_) manipulation, _Glossary("AJAX"_) calls, and _Glossary("Event"_) handling.

jQuery uses a format, `$(selector).action()` to assign an element(s) to an event. To explain it in detail, `$(selector)` will call jQuery to select `selector` element(s), and assign it to an event _Glossary("API"_) called `.action()`.

```js
//
$(document).ready(function () {
    alert('Hello World!');
    $('#blackBox').hide();
});
```

The above code carries out the same function as the following code:

```js
//
window.onload = function () {
    alert('Hello World!');
    document.getElementById('blackBox').style.display = 'none';
};
```

Or:

```js
//
window.addEventListener('load', () => {
    alert('Hello World!');
    document.getElementById('blackBox').style.display = 'none';
});
```

#### See also

-   _Interwiki("wikipedia", "jQuery"_) on Wikipedia
-   [jQuery Official Website](https://jquery.com/)
-   [Official API reference documentation](https://api.jquery.com/)[](https://api.jquery.com/)

---

## Term: JSON

-   CodingScripting
-   Glossary
-   Intro
-   JSON
-   l10n:priority

---

> _JavaScript Object Notation_ (**JSON**) is a data-interchange format. Although not a strict subset, JSON closely resembles a subset of _Glossary("JavaScript"_) syntax. Though many programming languages support JSON, it is especially useful for JavaScript-based apps, including websites and browser extensions.

JSON can represent numbers, booleans, strings, `null`, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects). JSON does not natively represent more complex data types like functions, regular expressions, dates, and so on. (Date objects by default serialize to a string containing the date in ISO format, so the information isn't completely lost.) If you need JSON to represent additional data types, transform values as they are serialized or before they are deserialized.

#### See also

-   _interwiki("wikipedia", "JSON", "JSON"_) on Wikipedia
-   _Link("/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"_) on MDN

---

## Term: Key

-   Cryptography
-   Glossary
-   Security

---

> A key is a piece of information used by a _Glossary("cipher"_) for _Glossary("encryption"_) and/or _Glossary("decryption"_).

Encrypted messages should remain secure even if everything about the _Glossary("cryptosystem"_), except for the key, is public knowledge.

In _Glossary("symmetric-key cryptography"_), the same key is used for both encryption and decryption. In _Glossary("public-key cryptography"_), there exists a pair of related keys known as the _public key_ and _private key_. The public key is freely available, whereas the private key is kept secret. The public key is able to encrypt messages that only the corresponding private key is able to decrypt, and vice versa.

#### See also

-   [Kerckhoffs's principle](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle) on Wikipedia
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Block cipher mode of operation"_)
    -   _Glossary("Cipher"_)
    -   _Glossary("Ciphertext"_)
    -   _Glossary("Cipher suite"_)
    -   _Glossary("Cryptanalysis"_)
    -   _Glossary("Cryptography"_)
    -   _Glossary("Decryption"_)
    -   _Glossary("Encryption"_)
    -   _Glossary("Key"_)
    -   _Glossary("Plaintext"_)
    -   _Glossary("Public-key cryptography"_)
    -   _Glossary("Symmetric-key cryptography"_)

---

## Term: Keyword

-   Glossary
-   Keyword
-   Search
-   keyword search

---

> A **keyword** is a word or phrase that describes content. Online keywords are used as queries for search engines or as words identifying content on websites.

When you use a search engine, you use keywords to specify what you are looking for, and the search engine returns relevant webpages. For more accurate results, try more specific keywords, such as "Blue Mustang GTO" instead of "Mustang". Webpages also use keywords in a meta tag (in the _htmlelement("head"_) section) to describe page content, so search engines can better identify and organize webpages.

#### See also

-   _interwiki("wikipedia", "Keyword_research", "Keyword"_) on Wikipedia

---

## Term: The Khronos Group

-   Glossary
-   Khronos

---

> **The Khronos Group** is an open, non-profit, member-driven consortium of over 150 industry-leading companies. Their purpose is to create advanced, royalty-free interoperability standards for 3D graphics, augmented and virtual reality, parallel programming, vision acceleration, and machine learning.

The organization maintains standards such as _Glossary("OpenGL"_) and the _domxref("WebGL API"_).

#### See also

-   _interwiki("wikipedia", "Khronos_Group", "The Khronos Group"_) on Wikipedia
-   [The Khronos Group web site](https://www.khronos.org/)

---

## Term: Latency

-   Audio
-   Glossary
-   Media
-   Networking
-   Reference
-   Video
-   Web Performance
-   latency

---

> **Latency** is the network time it takes for a requested resource to reach its destination. Low latency is good, meaning there is little or no delay. High latency is bad, meaning it takes a long time for the requested resource to reach its destination.

Latency can be a factor in any kind of data flow, but is most commonly discussed in terms of network latency (the time it takes for a packet of data to travel from source to destination) and media codec latency (the time it takes for the source data to be encoded or decoded and reach the consumer of the resulting data).

#### See also

-   [Understanding Latency](/en-US/docs/Web/Performance/Understanding_latency)

---

## Term: Layout viewport

-   CodingScripting
-   Glossary
-   Layout
-   layout viewport
-   viewport

---

> The **layout viewport** is the viewport into which the browser draws a web page. Essentially, it represents what is available to be seen, while the _Glossary("visual viewport"_) represents what is currently visible on the user's display device.

This becomes important, for example, on mobile devices, where a pinching gesture can usually be used to zoom in and out on a site's contents. The rendered document doesn't change in any way, so the layout viewport remains the same as the user adjusts the zoom level. Instead, the visual viewport is updated to indicate the area of the page that they can see.

#### See also

-   [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API)
-   _Interwiki("wikipedia", "Viewport"_) on Wikipedia
-   [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
-   _Glossary("Viewport"_) in the MDN Glossary
-   _Glossary("Visual viewport"_) in the MDN Glossary

---

## Term: Lazy load

-   Glossary
-   Lazy loading
-   Reference
-   Web Performance

---

> **Lazy loading** is a strategy that delays the loading of some assets (e.g., images) until they are needed by the user based on the user's activity and navigation pattern; typically, these assets are only loaded when they are scrolled into view.

If correctly implemented, this delay in asset loading is seamless to the user experience and might help improve initial load performance, including [time to interactive](/en-US/docs/Glossary/Time_to_interactive), as fewer assets are required for the page to start working.

#### See also

-   [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)

---

## Term: LGPL

-   Glossary
-   License
-   OpenPractices
-   Remixing
-   Sharing

---

> LGPL (GNU Lesser General Public License) is a free software license published by the Free Software Foundation. The LGPL provides a more permissive alternative for the strictly _Glossary("copyleft"_) _Glossary("GPL"_). While any derivative work using a GPL-licensed program must be released under the same terms (free to use, share, study, and modify), the LGPL only requires the LGPL-licensed component of the derivative program to continue using the LGPL, not the whole program. LGPL is usually used to license shared components such as libraries (`.dll`, `.so`, `.jar`, etc.).

#### See also

-   _interwiki("wikipedia", "GNU Lesser General Public License", "GNU LGPL"_) on Wikipedia
-   [LGPL License](https://www.gnu.org/copyleft/lesser.html) text on gnu.org

---

## Term: Ligature

-   CSS
-   Design
-   Glossary

---

> A **ligature** is a joining of two characters into one shape. For example, in French "œ" is a ligature of "oe".

You can implement ligatures in your webpage with _cssxref("font-variant-ligatures"_).

#### See also

-   _interwiki("wikipedia", "Typographic ligature", "Ligature"_) on Wikipedia

---

## Term: Literal

-   Literal
-   JavaScript
-   Glossary

---

> **Literals** represent values in JavaScript. These are fixed values—not variables—that you _literally_ provide in your script.

-   [Array literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
-   [Boolean literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
-   [Floating-point literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
-   [Numeric literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
-   [Object literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
-   [RegExp literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
-   [String literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## Examples

### String literals

A string literal is zero or more characters enclosed in double (`"`) or single quotation marks (`'`). A string must be delimited by quotation marks of the same type (that is, either both single quotation marks, or both double quotation marks).

The following are examples of string literals:

```js
//
'foo';
'bar';
'1234';
'one line \n new line';
"John's cat";
```

### Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

The following is an example of an object literal. The first element of the `car` object defines a property, `myCar`, and assigns to it a new string, "`Toyota`"; the second element, the `getCar` property, is immediately assigned the result of invoking the function `carTypes('Honda')`; the third element, the `special` property, uses an existing variable (`sales`).

```js
//
var sales = 'BMW';

function carTypes(name) {
    if (name == 'Honda') {
        return name;
    } else {
        return "Sorry, we don't sell " + name + '.';
    }
}

var car = { myCar: 'Toyota', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar); // Toyota
console.log(car.getCar); // Honda
console.log(car.special); // BMW
```

#### See also

-   _interwiki("wikipedia", "Literal (computer programming)", "Literal"_) on Wikipedia

---

## Term: Local scope

-   CodingScripting
-   Glossary
-   NeedsContent

---

> Local scope is a characteristic of _glossary("variable","variables"_) that makes them local (i.e., the variable name is only bound to its _glossary("value"_) within a scope which is not the _glossary("global scope"_)).

#### See also

-   _interwiki("wikipedia", "Scope (computer science)", "Scope"_) on Wikipedia

---

## Term: Local variable

-   CodingScripting
-   Glossary
-   NeedsContent

---

> A _glossary("variable"_) whose name is bound to its _glossary("value"_) only within a _Glossary("local scope"_).

## Example

```js
//
var global = 5; //is a global variable

function fun() {
    var local = 10; //is a local variable
}
```

#### See also

-   _interwiki("wikipedia", "Local variable", "Local variable"_) on Wikipedia

---

## Term: Locale

-   Composing
-   Glossary
-   Locale

---

> **Locale** is a set of language- or country-based preferences for a user interface.

A program draws its locale settings from the language of the host system. Among other things, locales represent paper format, currency, date format, and numbers according to the protocols in the given region.

#### See also

-   _interwiki("wikipedia", "Locale", "Locale"_) on Wikipedia

---

## Term: Localization

-   Collaborating
-   Glossary
-   Intro
-   Localization
-   WebMechanics

---

> **Localization** (l10n) is the process of adapting a software user interface to a specific culture.

The following are common factors to consider:

-   language
-   unit of measure (e.g., kilometers in Europe, miles in U.S.)
-   text direction (e.g., European languages are left-to-right, Arabic right-to-left)
-   capitalization in Latin script (e.g., English uses capitals for weekdays, Spanish uses lowercase)
-   adaptation of idioms (e.g., "raining cats and dogs" makes no sense when translated literally)
-   use of register (e.g., in Japanese respectful speech differs exceptionally from casual speech)
-   number format (e.g., 10 000,00 in Germany vs. 10,000.00 in the U.S.)
-   date format
-   currency
-   cultural references
-   paper size
-   color psychology
-   compliance with local laws
-   local holidays
-   personal names

#### See also

-   _interwiki("wikipedia", "Language localisation", "Localization"_) on Wikipedia

---

## Term: Long task

-   Glossary
-   Long Tasks API
-   Reference
-   Web Performance

---

> A **long task** is a task that takes more than 50ms to complete.

It is an uninterrupted period where the [main UI thread](/en-US/docs/Glossary/Main_thread) is busy for 50 ms or longer. Common examples include long running event handlers, expensive [reflows](/en-US/docs/Glossary/Reflow) and other re-renders, and work the browser does between different turns of the event loop that exceeds 50 ms.

#### See also

-   [Long task API](/en-US/docs/Web/API/Long_Tasks_API)

---

## Term: Loop

-   CodingScripting
-   Glossary
-   control flow
-   programming

---

> A loop is a sequence of instructions that is continually repeated until a certain condition is met in _Glossary("computer programming"_). An example would be the process of getting an item of data and changing it, and then making sure some _Glossary("conditional", "condition"_) is checked such as, if a counter has reached a prescribed number.

## Examples

### For loop

#### Syntax:

    for (statement 1; statement 2; statement 3){
     execute code block
    }

-   Statement 1 is executed once before the code block is run.
-   Statement 2 defines the condition needed to execute the code block.
-   Statement 3 is executed every time the code block is run.

#### Example:

```js
//
for (var i = 0; i < 10; i++) {
    console.log(i);
}
//This loop will print numbers 0-9, will stop when condition is met (i = 10)
```

For the above example, the syntax is as follows:

-   Statement 1 sets the variable for the loop (var i = 0).
-   Statement 2 sets the loop condition (i < 10).
-   Statement 3 increases the value of i (i++) each time the code block is run.

### While loop

#### Syntax:

    while (condition){
     execute code block
    }

-   The code block will continue to loop as long as the condition is true.

#### Example:

```js
//
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//This loop  will print number 0-4, will stop when condition becomes false (i >=5)
```

For the above example, the syntax is as follows:

-   The code block will continue to run as long as the variable (i) is less than 5.

#### See also

-   _interwiki("wikipedia", "Control_flow#Loops","Control flow"_) on Wikipedia
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Loop"_)

---

## Term: Lossless compression

-   Beginner
-   Composing
-   Glossary
-   Images
-   Web Performance
-   compression
-   lossless

---

> **Lossless compression** is a class of data compression algorithms that allows the original data to be perfectly reconstructed from the compressed data. Lossless compression methods are reversible. Examples of lossless compression include _glossary("GZIP"_), _glossary("Brotli"_), WebP, and _glossary("PNG"_),

_glossary("Lossy compression"_), on the other hand, uses inexact approximations by discarding some data from the original file, making it an irreversible compression method.

#### See also

-   [Glossary](/en-US/docs/Glossary)

    -   _glossary("GZIP"_)
    -   _glossary("Brotli"_)
    -   _glossary("PNG"_)
    -   _glossary("Lossy compression"_)

---

## Term: lossy compression

-   Beginner
-   Composing
-   Glossary
-   Images
-   JPEG
-   Lossy
-   Web Performance
-   compression

---

> **Lossy compression**, or irreversible compression, is a data-compression method that uses inexact approximations and partial-data discarding to represent content. In simpler terms: lossy compression causes data from the initial file to be lost, possibly causing degradation in quality. The process of such compression is irreversible; once lossy compression of the content has been performed, the content cannot be restored to its original state. Therefore, content that has undergone lossy compression should generally not be further edited.

Lossy compression is widely used in image formats.

![Lossy compression image](2019-11-18.png)

Although there is no obvious difference quality between the two images above, the size of the second image has been significantly reduced, using lossy compression.

#### See also

-   [Lossless compression](/en-US/docs/Glossary/Lossless_compression)

---

## Term: LTR (Left To Right)

-   Composing
-   Glossary
-   Localization

---

> **LTR** (**Left To Right**) is a _Glossary("locale"_) property indicating that text is written from left to right. For example, the `en-US` locale (for US English) specifies left-to-right.

Most Western languages, as well as many others around the world, are written LTR.

The opposite of LTR, _Glossary("RTL"_) (Right To Left) is used in other common languages, including Arabic (`ar`) and Hebrew (`he`).

## Technical reference

-   [Localization and internationalization](/en-US/docs/Web/Localization)

#### See also

-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("locale"_)
    -   _Glossary("LTR"_)
    -   _Glossary("RTL"_)

-   [HTML global attributes](/en-US/docs/Web/HTML/Global_attributes)

    -   _htmlattrxref("dir"_)
    -   _htmlattrxref("lang"_)

-   [CSS](/en-US/docs/Web/CSS)

    -   _cssxref(":dir"_)
    -   _cssxref("direction"_)
    -   _cssxref("unicode-bidi"_)
    -   _cssxref("writing-mode"_)

---

## Term: Main Axis

-   CSS
-   Glossary
-   Main axis
-   flexbox

---

> The main axis in _glossary("flexbox"_) is defined by the direction set by the _cssxref("flex-direction"_) property. There are four possible values for `flex-direction`. These are:

-   `row`
-   `row-reverse`
-   `column`
-   `column-reverse`

Should you choose `row` or `row-reverse` then your main axis will run along the row in the inline direction.

![In this image the flex-direction is row which forms the main axis](basics1.png)

Choose `column` or `column-reverse` and your main axis will run top to bottom of the page in the block direction.

![](basics2.png)

On the main axis you can control the sizing of flex items by adding any available space to the items themselves, by way of `flex` properties on the items. Or, you can control the space between and around items by using the `justify-content` property.

#### See also

### Property reference

-   _cssxref("flex-basis"_)
-   _cssxref("flex-direction"_)
-   _cssxref("flex-grow"_)
-   _cssxref("flex-shrink"_)
-   _cssxref("justify-content"_)
-   _cssxref("flex"_)

### Further reading

-   CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
-   CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
-   CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

---

## Term: Main thread

-   Glossary
-   Reference
-   Web Performance

---

> The **main thread** is where a browser processes user events and paints. By default, the browser uses a single thread to run all the JavaScript in your page, as well as to perform layout, reflows, and garbage collection. This means that long-running JavaScript functions can block the thread, leading to an unresponsive page and a bad user experience.

Unless intentionally using a [web worker](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), such as a [service worker](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers), JavaScript runs on the main thread, so it's easy for a script to cause delays in event processing or painting. The less work required of the main thread, the more that thread can respond to user events, paint, and generally be responsive to the user.

#### See also

-   [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
-   [Web worker API](/en-US/docs/Web/API/Web_Workers_API)
-   [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Thread"_)

---

## Term: markup

-   Glossary
-   Intro
-   Markup
-   NeedsContent

---

> A markup language is one that is designed for defining and presenting text. _glossary("HTML"_) (HyperText Markup Language), is an example of a markup language.

## Types of markup language

-   **Presentational Markup:**
-   -   : Used by traditional word processing system with WYSIWYG (what you see it is what you get); this is hidden from human authors, users and editors.
-   **Procedural Markup:**
    -   : Combined with text to provide instructions on text processing to programs. This text is visibly manipulated by the author.
-   **Descriptive Markup:**
    -   : Labels sections of documents as to how the program should handle them. For example, the HTML _HTMLElement("td"_) defines a cell in a HTML table.

#### See also

-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("HTML"_)
    -   _Glossary("XHTML"_)
    -   _Glossary("XML"_)
    -   _Glossary("SVG"_)

---

## Term: MathML

-   CodingScripting
-   Glossary
-   MathML
-   Mathematical Markup Language
-   XML

---

> **MathML** (an _glossary("XML"_) application) is an open standard for representing mathematical expressions in webpages. In 1998 the W3C first recommended MathML for representing mathematical expressions in the _glossary("browser"_). MathML has other applications also including scientific content and voice synthesis.

#### See also

-   _interwiki("wikipedia", "MathML", "MathML"_) on Wikipedia
-   [MathML](/en-US/docs/Web/MathML)
-   [Authoring MathML](/en-US/docs/Web/MathML/Authoring)
-   _spec("http://www.w3.org/Math/whatIsMathML.html", "MathML", "REC"_)

---

## Term: Media

-   Disambiguation
-   Glossary

---

> The term **media** is an overloaded one when talking about the web; it takes on different meanings depending on the context.

\_GlossaryDisambiguation}}

#### See also

-   _interwiki("wikipedia", "Media"_) on Wikipedia

---

## Term: Metadata

-   CodingScripting
-   Glossary
-   HTML
-   metadata

---

> **Metadata** is — in its very simplest definition — data that describes data. For example, an _glossary("HTML"_) document is data, but HTML can also contain metadata in its _htmlelement("head"_) element that describes the document — for example who wrote it, and its summary.

#### See also

-   _interwiki("wikipedia", "metadata", "metadata"_) on Wikipedia
-   The _htmlelement("meta"_) element on MDN

---

## Term: Method

-   CodingScripting
-   Glossary
-   JavaScript

---

> A **method** is a _glossary("function"_) which is a _glossary("property"_) of an _glossary("object"_). There are two kind of methods: _Instance Methods_ which are built-in tasks performed by an object instance, or \__Glossary("static method", "Static Methods"_)\_ which are tasks that are called directly on an object constructor.

> **Note:** In JavaScript functions themselves are objects, so, in that context, a method is actually an _glossary("object reference"_) to a function.

#### See also

-   _InterWiki("wikipedia","Method (computer programming)"_) in Wikipedia
-   [Defining a method in JavaScript](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) (comparison of the traditional syntax and the new shorthand)
-   [List of JavaScript built-in methods](/en-US/docs/Web/JavaScript/Reference)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("function"_)
    -   _Glossary("object"_)
    -   _Glossary("property"_)
    -   _Glossary("static method"_)

---

## Term: Microsoft Edge

-   Browser
-   Glossary
-   Infrastructure

---

> **Microsoft Edge** is a free-of-cost graphical _glossary("World Wide Web", "Web"_) _Glossary("browser"_) bundled with Windows 10 and developed by Microsoft since 2014. Initially known as Spartan, Edge replaced the longstanding browser _glossary("Microsoft Internet Explorer","Internet Explorer"_).

#### See also

-   [Official website](https://www.microsoft.com/edge)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Google Chrome"_)
    -   _Glossary("Microsoft Edge"_)
    -   _Glossary("Microsoft Internet Explorer"_)
    -   _Glossary("Mozilla Firefox"_)
    -   _Glossary("Netscape Navigator"_)
    -   _Glossary("Opera Browser"_)

---

## Term: Microsoft Internet Explorer

-   Browser
-   Glossary
-   Internet Explorer
-   Microsoft
-   Microsoft Internet Explorer
-   Navigation
-   Web Browser
-   Windows
-   Windows Operating System

---

> Internet Explorer (or IE) is a free graphical _glossary("browser"_) maintained by Microsoft for legacy enterprise uses. _glossary("Microsoft Edge"_) is currently the default Windows browser.

Microsoft first bundled IE with Windows in 1995 as part of the package called "Microsoft Plus!". By around 2002, Internet Explorer had become the most used browser in the world, but has since lost ground to Chrome, Firefox, Edge, and Safari.

IE has gone through many releases and currently stands at version 11.0.12, with desktop, mobile, and Xbox Console versions available. Formerly available on Mac and UNIX, Microsoft discontinued those versions in 2003 and 2001 respectively.

#### See also

-   _interwiki("wikipedia", "Internet Explorer", "Internet Explorer"_) on Wikipedia
-   _interwiki("wikipedia", "History of Internet Explorer", "History of Internet Explorer"_) on Wikipedia
-   _interwiki("wikipedia", "Internet Explorer versions", "Internet Explorer versions"_) on Wikipedia
-   [http://windows.microsoft.com/en-us/internet-explorer/download-ie](https://windows.microsoft.com/en-us/internet-explorer/download-ie)
-   [http://windows.microsoft.com/en-us/windows7/getting-started-with-internet-explorer-9](https://windows.microsoft.com/en-us/windows7/getting-started-with-internet-explorer-9)
-   [http://windows.microsoft.com/en-us/internet-explorer/internet-explorer-help](https://windows.microsoft.com/en-us/internet-explorer/internet-explorer-help)
-   [http://windows.microsoft.com/en-us/internet-explorer/make-ie-default-browser#ie=ie-11](https://windows.microsoft.com/en-us/internet-explorer/make-ie-default-browser#ie=ie-11)
-   [http://windows.microsoft.com/en-us/internet-explorer/products/ie-8/system-requirements](https://windows.microsoft.com/en-us/internet-explorer/products/ie-8/system-requirements)
-   [http://windows.microsoft.com/en-us/internet-explorer/products/ie-9/system-requirements](https://windows.microsoft.com/en-us/internet-explorer/products/ie-9/system-requirements)
-   [http://support.microsoft.com/kb/969393](https://support.microsoft.com/kb/969393)

---

## Term: Middleware

-   CodingScripting
-   Glossary

---

> Middleware is a (loosely defined) term for any software or service that enables the parts of a system to communicate and manage data. It is the software that handles communication between components and input/output, so developers can focus on the specific purpose of their application.

In server-side web application frameworks, the term is often more specifically used to refer to pre-built software components that can be added to the framework's request/response processing pipeline, to handle tasks such as database access.

#### See also

-   _Interwiki("wikipedia", "Middleware_(distributed*applications)", "Middleware*(distributed*applications)"*) on Wikipedia
-   _Interwiki("wikipedia", "Middleware", "Middleware"_) on Wikipedia

---

## Term: MIME type

-   Glossary
-   WebMechanics

---

> A **MIME type** (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled `audio/ogg`, or an image file `image/png`).

It serves the same purpose as filename extensions traditionally do on Windows. The name originates from the _glossary("mime","MIME"_) standard originally used in E-Mail.

#### See also

-   _interwiki("wikipedia", "Internet media type", "Internet media type"_) on Wikipedia
-   [List of MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml)
-   [Properly Configuring Server MIME Types](/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)
-   Details information about the usage of [MIME Types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) in a Web context.
-   [Incomplete list of MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
-   [MediaRecorder.mimeType](/en-US/docs/Web/API/MediaRecorder/mimeType)

---

## Term: mime

-   Beginner
-   Glossary
-   Infrastructure
-   MIME

---

> **MIME** "Multipurpose internet mail extensions" is a standard to describe documents in other forms beside ASCII text, e.g. audio, video and images. Initially used for E-Mail attachments, it has become the de facto standard to define types of documents anywhere.

See also [MIME-Type](/en-US/docs/Glossary/MIME_type)

#### See also

-   [MIME ](https://en.wikipedia.org/wiki/MIME)on Wikipedia

---

## Term: minification

-   Glossary
-   Performance
-   Reference
-   Web Performance

---

> **Minification** is the process of removing unnecessary or redundant data without affecting how a resource is processed by the browser.

Minification can include the removal of code comments, white space, and unused code, as well as the shortening of variable and function names. Minification is used to improve web performance by reducing file size. It is generally an automated step that occurs at build time.

As minification makes code less legible to humans, developer tools have 'prettification' features that can add white space back into the code to make it a bit more legible.

---

## Term: MitM

-   Glossary
-   Security

---

> A **manipulator-in-the-middle attack** (MitM) intercepts a communication between two systems. For example, a Wi-Fi router can be compromised.

Comparing this to physical mail: If you're writing letters to each other, the mail carrier can intercept each letter you mail. They open it, read it, eventually modify it, and then repackage the letter and only then send it to whom you intended to sent the letter for. The original recipient would then mail you a letter back, and the mail carrier would again open the letter, read it, eventually modify it, repackage it, and give it to you. You wouldn't know there's a manipulator in the middle in your communication channel - the mail carrier is invisible to you and to your recipient.

In physical mail and in online communication, MITM attacks are tough to defend. A few tips:

-   Don't just ignore certificate warnings. You could be connecting to a phishing server or an imposter server.
-   Sensitive sites without HTTPS encryption on public Wi-Fi networks aren't trustworthy.
-   Check for HTTPS in your address bar and ensure encryption is in-place before logging in.

#### See also

-   OWASP: [Manipulator-in-the-middle attack](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack)
-   PortSwigger: [Latest manipulator-in-the-middle attacks news](https://portswigger.net/daily-swig/mitm)
-   Wikipedia: [Man-in-the-middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
-   The _HTTPHeader("Public-Key-Pins"_) header (_Glossary("HPKP"_)) can significantly decrease the risk of MITM by instructing browsers to require an allowlisted certificate for all subsequent connections to that website.

---

## Term: Mixin

-   CodingScripting
-   Glossary
-   Method
-   Mixin
-   Property

---

> A _mixin_ is a _Glossary("class"_) (interface, in WebAPI spec terms) in which some or all of its _Glossary("method", "methods"_) and/or _Glossary("property", "properties"_) are unimplemented, requiring that another _Glossary("class"_) or _Glossary("interface"_) provide the missing implementations.

The new class or interface then includes both the properties and methods from the mixin as well as those it defines itself. All of the methods and properties are used exactly the same regardless of whether they're implemented in the mixin or the interface or class that implements the mixin.

The advantage of mixins is that they can be used to simplify the design of APIs in which multiple interfaces need to include the same methods and properties.

For example, the `WindowOrWorkerGlobalScope` mixin is used to provide methods and properties that need to be available on both the _domxref("Window"_) and _domxref("WorkerGlobalScope"_) interfaces. The mixin is implemented by both of those interfaces.

#### See also

-   [Mixin](https://en.wikipedia.org/wiki/Mixin) on Wikipedia

---

## Term: Mobile First

-   Design
-   Glossary
-   Layout
-   Layout mobile

---

> **Mobile first**, a form of _Glossary("progressive enhancement"_), is a web-development and web-design approach that focuses on prioritizing design and development for mobile screen sizes over design and development for desktop screen sizes. The rationale behind the mobile-first approach is to provide users with good user experiences at all screen sizes—by starting with creating a user experience that works well on small screens, and then building on top of that to further enrich the user experience as the screen size increases. The mobile-first approach contrasts with the older approach of designing for desktop screen sizes first, and then only later adding some support for small screen sizes.

---

## Term: Modem

-   Infrastructure
-   Navigation

---

> A modem ("**modulator-demodulator**") is a device that converts digital information to analog signals and vice-versa, for sending data through networks.

Different kinds are used for different networks: DSL modems for telephone wires, WiFi modems for short-range wireless radio signals, 3G modems for cellular data towers, and so on.

Modems are different from _Glossary("Router","routers"_), but many companies sell modems combined with routers.

#### See also

-   _Interwiki("wikipedia", "Modem"_) on Wikipedia

---

## Term: Modularity

-   CodingScripting
-   Glossary

---

> The term Modularity refers to the degree to which a system's components may be separated and recombined, it is also division of a software package into logical units. The advantage of a modular system is that one can reason the parts independently

#### See also

-   _Interwiki("wikipedia", "Modularity"_) on Wikipedia

---

## Term: Mozilla Firefox

-   Browser
-   Firefox
-   Glossary
-   Infrastructure
-   Mozilla
-   Mozilla Firefox

---

> **Mozilla Firefox** is a free open-source _Glossary("browser"_) whose development is overseen by the Mozilla Corporation. Firefox runs on Windows, OS X, Linux, and Android.

First released in November 2004, Firefox is completely customizable with themes, plug-ins, and [add-ons](/en-US/docs/Mozilla/Add-ons). Firefox uses _glossary("Gecko"_) to render webpages, and implements both current and upcoming _glossary("world wide web", "Web"_) standards.

#### See also

-   [Mozilla Firefox official website](https://www.mozilla.org/firefox)
-   [Firefox developer documentations](/en-US/docs/Mozilla/Firefox) on MDN

---

## Term: Mutable

-   CodingScripting
-   Glossary
-   NeedsContent

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

-   _Interwiki("wikipedia", "Immutable object"_) on Wikipedia

---

## Term: MVC

-   Glossary
-   Infrastructure
-   Intro
-   MVC
-   Model View Controller

---

> **MVC** (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance. Some other design patterns are based on MVC, such as MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter), and MVW (Model-View-Whatever).

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

Web frameworks such as [AngularJS](https://en.wikipedia.org/wiki/AngularJS) and [Ember.js](https://en.wikipedia.org/wiki/Ember.js 'Ember.js') all implement an MVC architecture, albeit in slightly different ways.

#### See also

-   _interwiki("wikipedia", "Model-view-controller"_) on Wikipedia

---

## Term: Namespace

-   CodingScripting
-   Glossary
-   Operating System

---

> Namespace is a context for identifiers, a logical grouping of names used in a program. Within the same context and same scope, an identifier must uniquely identify an entity.

In an operating system a directory is a namespace. Each file or subdirectory has a unique name, but one file may use the same name multiple times.

#### See also

-   _Interwiki("wikipedia", "Namespace"_) on Wikipedia

---

## Term: NaN

-   CodingScripting
-   Computing
-   Glossary
-   NaN

---

> NaN (Not a Number) is a numeric _Glossary("Type", "data type"_) that means an undefined value or value that cannot be represented, especially results of floating-point calculations.

For example, NaNs can represent infinity, result of division by zero, missing value, or the square root of a negative (which is imaginary, whereas a floating-point number is real).

Practically speaking, if I divide two variables in a _glossary("JavaScript"_) program, the result may be NaN, which is predefined in JavaScript as "undefined". Hence this division may break the program. Now, if this computation was a small part of a much larger algorithm, it would be really painful to figure out where the error actually occurs. Fortunately, since the result will be NaN and I know my divisor may turn out to be 0, I can set up testing conditions that prevent any such computations in the first place or notify me of where they happen.

#### See also

-   _Interwiki("wikipedia", "NaN"_) on Wikipedia
-   [NaN in JavaScript](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

---

## Term: NAT

-   Beginner
-   Glossary
-   Infrastructure
-   WebMechanics
-   WebRTC

---

> **NAT** (Network Address Translation) is a technique for letting multiple computers share an IP address. NAT assigns unique addresses to each computer on the local network and adjusts incoming/outgoing network traffic to send data to the right place.

#### See also

-   [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
-   _interwiki("wikipedia", "NAT"_) on Wikipedia

---

## Term: Native

-   CodingScripting
-   Glossary

---

> A _native_ application has been compiled to run on the hardware/software environment that comprises the targeted architecture.

An example of a native Android app would be a mobile application written in Java using the Android toolchain.

On the other hand, a Web App that runs inside a browser is not native — it is run in the web browser, which sits on top of the native environment, not the native environment itself.

#### See also

-   _Interwiki("wikipedia", "Native (computing)"_) on Wikipedia

---

## Term: Navigation directive

-   CSP
-   HTTP
-   Security

---

> **_Glossary("CSP"_) navigation directives** are used in a _HTTPHeader("Content-Security-Policy"_) header and govern to which location a user can navigate to or submit a form to, for example.

Navigation directives don't fall back to the _CSP("default-src"_) directive.

See [Navigation directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#navigation_directives) for a complete list.

#### See also

-   <https://www.w3.org/TR/CSP/#directives-navigation>
-   Other kinds of directives:

    -   _Glossary("Fetch directive"_)
    -   _Glossary("Document directive"_)
    -   _Glossary("Reporting directive"_)
    -   [`block-all-mixed-content`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
    -   [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
    -   [`require-sri-for`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for)
    -   [`trusted-types`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)

-   _HTTPHeader("Content-Security-Policy"_)

---

## Term: Netscape Navigator

-   Browser
-   Glossary
-   Navigation
-   Netscape
-   Netscape Navigator

---

> Netscape Navigator or Netscape was a leading _glossary("browser"_) in the 1990s. Netscape was based on Mosaic and the Netscape team was led by Marc Andreessen, a programmer who also wrote code for Mosaic.

Netscape helped make the _glossary("World Wide Web","Web"_) graphical rather than a text-only experience. Many browsing features became standard after Netscape introduced them. Netscape could display a webpage while loading, used JavaScript for forms and interactive content, and stored session information in cookies. Despite Netscape's technical advantages and initial dominance, by the late 1990s _glossary("Microsoft Internet Explorer", "Internet Explorer"_) swiftly overtook Netscape in market share.

#### See also

-   _Interwiki("wikipedia", "Netscape Navigator"_) on Wikipedia

---

## Term: Network throttling

-   Glossary
-   RUM
-   Reference
-   Synthetic monitoring
-   Web Performance

---

> **Network throttling** is an intentional slowing down of internet speed. In web performance, network throttling, or network condition emulation, it is used to emulate low bandwidth conditions experienced by likely a large segment of a site's target user base.

It's important not to overlook network conditions users experience on mobile. The internet speeds for developers creating web applications in a corporate office building on a powerful computer are generally very fast. As a developer, tech writer, or designer, this is likely your experience. The network speeds of a mobile user accessing that web application, possibly while traveling or in a remote area with poor data plan coverage, will likely be very slow, if they are able to get online at all. Network throttling enables a developer to emulate an experience of a user. Most browser developer tools, such as the browser inspector, provide a function to emulate different network conditions. By emulating your user's experience via network throttling, you can more readily identify and fix load time issues.

Browser developer tools generally have network throttling options, to allow you to test your app under slow network conditions. Firefox's developer tools for example have a drop-down menu available in both the [Network Monitor](/en-US/docs/Tools/Network_Monitor) and [Responsive Design Mode](/en-US/docs/Tools/Responsive_Design_Mode) containing network speed options (e.g. wifi, good 3G, 2G...)

#### See also

-   [Synthetic monitoring](/en-US/docs/Glossary/Synthetic_monitoring)

---

## Term: Node (networking)

-   Glossary
-   Infrastructure

---

> In networking, a **node** is a connection point in the network. In physical networks, a node is usually a device, like a computer or a router.

#### See also

-   _Interwiki("wikipedia", "Node (networking)", "Node"_) on Wikipedia

---

## Term: NNTP

-   Glossary
-   Infrastructure

---

> **NNTP** (Network News Transfer Protocol) is a _Glossary("protocol"_) used to transfer _Glossary("Usenet"_) messages from client to server or between servers.

#### See also

-   _Interwiki("wikipedia", "Network_News_Transfer_Protocol", "NNTP"_) at Wikipedia
-   From the IETF: [RFC 3977 about NNTP](https://datatracker.ietf.org/doc/html/rfc3977) (2006)

---

## Term: Node.js

-   Glossary
-   Infrastructure
-   JavaScript
-   node.js

---

> Node.js is a cross-platform _Glossary("JavaScript"_) runtime environment that allows developers to build server-side and network applications with JavaScript.

## Node Package Manager (npm)

[npm](https://www.npmjs.com/) is bundled with Node.js. It runs on the command line as the command `npm`. It is a package manager that downloads packages into a `node_modules` folder. You call the downloaded packages through `const libraryModule = require("libraryname")`.

#### See also

-   _Interwiki("Wikipedia", "Node.js"_) on Wikipedia
-   [Node.js website](https://nodejs.org/)
-   [API reference documentation](https://nodejs.org/api/)
-   [Tutorials](https://nodejs.org/documentation/tutorials/)
-   [npm Documentation](https://docs.npmjs.com/)

---

## Term: Node

-   Disambiguation
-   Glossary

---

> The term **node** can have several meanings depending on the context. It may refer to:

\_GlossaryDisambiguation}}

Another use of the word is when talking about _Glossary("Node.js"_)

---

## Term: non-normative

-   Glossary
-   Infrastructure
-   Specification
-   Standardization

---

> Software _Glossary("specification", "specifications"_) often contains information marked as _non-normative_ or _informative,_ which means that those are provided there for the purpose of helping the readers to understand the specification better or to show an example or a best practice, and not needed to be followed as a rule. Sections that contain official part of the specification that must be followed are often marked as _Glossary("normative", "normative"_).

#### See also

-   Description of [normative and informative content](https://wiki.whatwg.org/wiki/Specs/howto#Content) in WHATWG wiki

---

## Term: Normative

-   Glossary
-   Infrastructure
-   Specification
-   Standardization

---

> Normative is a word commonly used in software _Glossary("specification", "specifications"_) to denote sections that are standardized and must be followed as a rule. Specifications might also contain sections that are marked as \__Glossary("non-normative"_)_ or \_informative_, which means those are provided there for the purpose of helping the reader understand the specifications better or to showcase an example or best practice, which need not be followed as a rule.

#### See also

-   Description of [normative and informative content](https://wiki.whatwg.org/wiki/Specs/howto#Content) in WHATWG wiki

---

## Term: 'Null'

-   CodingScripting
-   Glossary

---

> In computer science, a **`null`** value represents a reference that points, generally intentionally, to a nonexistent or invalid _glossary("object"_) or address. The meaning of a null reference varies among language implementations.

In _Glossary("JavaScript"_), `null` is marked as one of the _Glossary("Primitive", "primitive values"_), because its behavior is seemingly primitive.

But in certain cases, `null` is not as "primitive" as it first seems! Every Object is derived from `null` value, and therefore `typeof` operator returns `object` for it:

```js
//
typeof null === 'object'; // true
```

#### See also

-   [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
-   The JavaScript global object: _jsxref("null"_)
-   _Interwiki("wikipedia", "Null pointer"_) on Wikipedia
-   **[Glossary](/en-US/docs/Glossary)**

    -   _Glossary("JavaScript"_)
    -   _Glossary("string"_)
    -   _Glossary("number"_)
    -   _Glossary("bigint"_)
    -   _Glossary("boolean"_)
    -   _Glossary("null"_)
    -   _Glossary("undefined"_)
    -   _Glossary("symbol"_)

---

## Term: Nullish value

-   Glossary
-   JavaScript
-   'Null'
-   Primitive
-   undefined

---

> In [JavaScript](/en-US/docs/Glossary/JavaScript), a nullish value is the value which is either _JSxRef("null"_) or _JSxRef("undefined"_). Nullish values are always [falsy](/en-US/docs/Glossary/Falsy).

---

## Term: Number

-   CodingScripting
-   Glossary
-   JavaScript

---

> In _Glossary("JavaScript"_), **Number** is a numeric data type in the [double-precision 64-bit floating point format (IEEE 754)](https://en.wikipedia.org/wiki/Double_precision_floating-point_format). In other programming languages different numeric types exist; for example, Integers, Floats, Doubles, or Bignums.

#### See also

-   _Interwiki("wikipedia", "Data type#Numeric_types", "Numeric types"_) on Wikipedia
-   The JavaScript type: [`Number`](/en-US/docs/Web/JavaScript/Data_structures#number_type)
-   The JavaScript global object _jsxref("Number"_)
-   [Glossary:](/en-US/docs/Glossary)

    -   _Glossary("JavaScript"_)
    -   _Glossary("Primitive"_)

---

## Term: Object reference

-   CodingScripting
-   Glossary

---

> A link to an **_glossary("object"_)**. Object references can be used exactly like the linked objects.

The concept of object references becomes clear when assigning the same object to more than one **_glossary("property"_)**. Rather than holding a copy of the object, each assigned property holds object references that link to the same object, so that when the object changes all properties referring to the object reflect the change.

#### See also

-   _Interwiki("wikipedia", "Reference (computer science)"_) on Wikipedia

---

## Term: Object

-   CodingScripting
-   Glossary
-   Intro
-   Object

---

> In JavaScript, objects can be seen as a collection of properties. With the [object literal syntax](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals), a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using _key_ values. A _key_ value is either a _Glossary("String", "String value"_) or a _Glossary("Symbol", "Symbol value"_).

There are two types of object properties: The [_data_ property](/en-US/docs/Web/JavaScript/Data_structures#data_property) and the [_accessor_ property](/en-US/docs/Web/JavaScript/Data_structures#accessor_property).

> **Note:** It's important to recognize it's accessor _property_ — not accessor _method_. We can give a JavaScript object class-_like_ accessors by using a function as a value — but that doesn't make the object a class.

#### See also

-   [Detailed explanation of JavaScript objects](/en-US/docs/Web/JavaScript/Data_structures#objects) in the [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures) article
-   _jsxref("Object"_) in the [JavaScript reference](/en-US/docs/Web/JavaScript/Reference)

---

## Term: OOP

-   Beginner
-   CodingScripting
-   Glossary

---

> **OOP** (Object-Oriented Programming) is an approach in programming in which data is encapsulated within **_glossary("object","objects"_)** and the object itself is operated on, rather than its component parts.

_glossary("JavaScript"_) is heavily object-oriented. It follows a **prototype**-based model ([as opposed to class-based](/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#class-based_vs._prototype-based_languages)).

#### See also

-   _Interwiki("wikipedia", "Object-oriented programming"_) on Wikipedia
-   [Introduction to object-oriented JavaScript](/en-US/docs/Learn/JavaScript/Objects)

---

## Term: OpenGL

-   CodingScripting
-   Glossary
-   OpenGL

---

> **OpenGL** (**Open Graphics Library**) is a cross-language, multi-platform application programming interface (API) for rendering 2D and 3D vector graphics. The API is typically used to interact with a graphics processing unit (GPU), to achieve hardware-accelerated rendering.

#### See also

-   _Interwiki("wikipedia", "OpenGL"_) on Wikipedia
-   [OpenGL](https://www.opengl.org/)

---

## Term: OpenSSL

-   Glossary
-   Security

---

> OpenSSL is an open-source implementation of _glossary("SSL"_) and _glossary("TLS"_).

#### See also

-   _Interwiki("wikipedia", "OpenSSL"_) on Wikipedia
-   [Official website](https://www.openssl.org/)

---

## Term: Opera Browser

-   Browser
-   Glossary
-   Navigation
-   Opera
-   Opera Browser

---

> **Opera** is the fifth most used web _glossary("browser"_), publicly released in 1996 and initially running on Windows only. Opera uses _glossary("Blink"_) as its layout engine since 2013 (before that, _glossary("Presto"_)). Opera also exists in mobile and tablet versions.

#### See also

-   _Interwiki("wikipedia", "Opera Browser"_) on Wikipedia
-   [Opera browser web site](https://www.opera.com/)

---

## Term: Operand

-   CodingScripting
-   Glossary

---

> An **operand** is the part of an instruction representing the data manipulated by the _glossary("operator"_). For example, when you add two numbers, the numbers are the operand and "+" is the operator.

#### See also

-   _Interwiki("wikipedia", "Operand"_) on Wikipedia

---

## Term: Operator

-   CodingScripting
-   Glossary

---

> Reserved **syntax** consisting of punctuation or alphanumeric characters that carries out built-in functionality. For example, in JavaScript the addition operator ("+") adds numbers together and concatenates strings, whereas the "not" operator ("!") negates an expression — for example making a `true` statement return `false`.

#### See also

-   _Interwiki("wikipedia", "Operator (computer programming)"_) on Wikipedia
-   [JavaScript operators](/en-US/docs/Web/JavaScript/Reference/Operators)

---

## Term: Origin

-   Glossary
-   Security
-   WebMechanics
-   origin

---

> Web content's **origin** is defined by the _scheme_ (protocol), _hostname_ (domain), and _port_ of the _Glossary("URL"_) used to access it. Two objects have the same origin only when the scheme, hostname, and port all match.

Some operations are restricted to same-origin content, and this restriction can be lifted using _Glossary("CORS"_).

## Examples

These are same origin because they have the same scheme (`http`) and hostname (`example.com`), and the different file path does not matter:

-   `http://example.com/app1/index.html`
-   `http://example.com/app2/index.html`

These are same origin because a server delivers HTTP content through port 80 by default:

-   `http://Example.com:80`
-   `http://example.com`

These are not same origin because they use different schemes:

-   `http://example.com/app1`
-   `https://example.com/app2`

These are not same origin because they use different hostnames:

-   `http://example.com`
-   `http://www.example.com`
-   `http://myapp.example.com`

These are not same origin because they use different ports:

-   `http://example.com`
-   `http://example.com:8080`

#### See also

-   [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
-   _Glossary("Site"_)
-   [HTML specification: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)

---

## Term: OTA

-   Glossary
-   Infrastructure
-   Intro
-   OTA
-   Over the air
-   updates

---

> _Over The Air_ (**OTA**) refers to automatic updating of software on connected devices from a central server. All device owners receiving a given set of updates are on the same "channel", and each device often can access several channels (e.g. for production or engineering builds).

#### See also

-   _Interwiki("wikipedia", "Over-the-air programming"_) on Wikipedia

---

## Term: OWASP

-   Glossary
-   Security

---

> **OWASP** (Open Web Application Security Project) is a non-profit organization and worldwide network that works for security in Free Software, especially on the Web.

#### See also

-   [Official website](https://www.owasp.org)

---

## Term: P2P

-   Glossary
-   Infrastructure
-   Networking
-   P2P

---

> P2P (Peer-to-peer) is a computer networking architecture in which all participating nodes (_peers_) have equal privileges and share the workload. P2P differs from a client-server network architecture, where multiple _client_ nodes connect to centralized _servers_ for services. P2P is commonly found in Blockchain Applications.

#### See also

-   [P2P](https://en.wikipedia.org/wiki/Peer-to-peer) on Wikipedia

---

## Term: PAC

-   CodingScripting
-   Glossary

---

> A Proxy Auto-Configuration file (**PAC file**) is a file which contains a function, `FindProxyForURL()`, which is used by the browser to determine whether requests (including HTTP, HTTPS, and FTP) should go directly to the destination or if they need to be forwarded through a web proxy server.

---

```js
//

function FindProxyForURL(url, host) {
    /* ... */
}

ret = FindProxyForURL(url, host);
```

See [Proxy Auto-Configuration (PAC) file](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) for details about how these are used and how to create new ones.

#### See also

-   [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config 'Read about PAC files on Wikipedia') on Wikipedia
-   [Proxy Auto-Configuration file](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) on MDN

---

## Term: Packet

-   Glossary
-   Network packet
-   Packet
-   Reference
-   TCP
-   Web Performance
-   payload

---

> A packet, or network packet, is a formatted chunk of data sent over a network. The main components of a network packet are the user data and control information. The user data is known as the _payload_. The control information is the information for delivering the payload. It consists of network addresses for the source and destination, sequencing information, and error detection codes and is generally found in packet headers and footer.

## What a packet contains

### Hop limit

A hop occurs when a packet is passed from one network to the next network. It is a field that is decreases by one each time a packet goes through, once it reaches 0 it has failed and the packet is discarded.

Over time the number packets can cause traversing within closed circuits, the number of packets circulating would build up and then ultimately lead to the networking in failing.

### Error detection and correction

Error detection and correction are codes that are used to detect and apply corrections to the errors that occur when data is transmitted to the receiver. There are two types of error corrections backward and forward error correction. Backward error correction is when the receiver requests the sender to retransmit the entire data unit. Forward error correction is when the receiver uses the error-correcting code which automatically corrects the errors

At the transmitter, the calculation is performed before the packet is sent. When received at the destination, the checksum is recalculated, and compared with the one in the packet.

### Priority

This field indicates which packet should have higher priority over the others. The high priority queue is emptied more quickly than lower priority queues when the network is congested.

### Addresses

When routing network packets it requires two network addresses the source address of the sending host, and the destination address of the receiving host.

### User Data - Payload

Payload is the data that is carried on behalf of an application. It is usually of variable length, up to a maximum that is set by the network protocol and sometimes the equipment on the route.

## References used

-   <https://en.wikipedia.org/wiki/Network_packet>
-   [https://en.m.wikipedia.org/wiki/Hop\_(networking)](<https://en.wikipedia.org/wiki/Hop_(networking)>)
-   <https://www.techradar.com/news/computing/how-error-detection-and-correction-works-1080736>

---

## Term: Page load time

-   Glossary
-   Timings
-   Web Performance
-   metrics
-   page load time

---

> **Page load time** is the time it takes for a page to load, measured from [navigation start](/en-US/docs/Web/API/PerformanceTiming/navigationStart) to the [start of the load event](/en-US/docs/Web/API/PerformanceTiming/loadEventStart).

```js
//
let time = performance.timing;

let pageloadtime = time.loadEventStart - time.navigationStart;
```

While page load time 'sounds' like the perfect web performance metric, it isn't. Load times can vary greatly between users depending on device capabilities, network conditions, and, to a lesser extent, distance from the server. The development environment, where page load time is measured, is likely an optimal experience, not reflective of your users' reality. In addition, web performance isn't just about when the load event happens. It's also about [perceived performance](/en-US/docs/Glossary/Perceived_performance), responsiveness, [jank](/en-US/docs/Glossary/Jank) and jitter.

#### See also

-   [Navigation and resource timing](/en-US/docs/Web/Performance/Navigation_and_resource_timings)
-   _domxref("PerformanceNavigationTiming"_)
-   _domxref("PerformanceResourceTiming"_),

---

## Term: Page prediction

-   Glossary
-   Security
-   Web Performance
-   page prediction

---

> **Page Prediction** is a browser feature or script which, when enabled, tells the browser to download resources the user is likely to visit before the user requests the content. Page prediction improves performance by enabling almost instant loading of predicted content. However, page prediction may also download content a user does not seek.

Some web applications include a prediction feature completing search text and address bar URLs based on browsing history and related searches. For example, as the user types in the address bar, the browser might send the current text in the address bar to the search engine before the user submits the request.

Although browser page prediction and prediction services enable faster page loads, they consume additional bandwidth. Also, pre-loaded websites and embedded content can set and read their cookies as if they were visited even if they weren't.

#### See also

-   [prerender](/en-US/docs/Glossary/prerender)
-   [prefetch](/en-US/docs/Glossary/Prefetch)

---

## Term: Parameter

-   CodingScripting
-   Glossary
-   JavaScript

---

> A parameter is a named variable passed into a _Glossary("function"_). Parameter variables are used to import _Glossary("argument","arguments"_) into functions.

For example:

---

```js
//

function example(parameter) {
    console.log(parameter); // Output = foo
}

const argument = 'foo';

example(argument);
```

Note the difference between _parameters_ and _arguments_:

-   Function parameters are the names listed in the function's definition.
-   Function _Glossary("argument","arguments"_) are the real values passed to the function.
-   Parameters are initialized to the values of the arguments supplied.

Two kinds of parameters:

-   input parameters
-   -   : the most common kind; they pass values into functions. Depending on programming language, input parameters can be passed several ways (e.g., call-by-value, call-by-address, call-by-reference).
-   output/return parameters
    -   : primarily return multiple values from a function, but not recommended since they cause confusion

#### See also

-   [Difference between _parameter_ and _argument_](https://en.wikipedia.org/wiki/Parameter_%28computer_programming%29#Parameters_and_arguments) on Wikipedia
-   [Function declaration](/en-US/docs/Web/JavaScript/Reference/Statements/function)
-   [Function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function)

---

## Term: Parent object

-   CodingScripting
-   Glossary
-   NeedsContent

---

> The _glossary("object"_) to which a given _glossary("property"_) or _glossary("method"_) belongs.

#### See also

-   [Discussion of Inheritance and prototypes in JavaScript](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

## Term: Parse

-   Browser
-   CSS
-   CodingScripting
-   Glossary
-   HTML
-   JavaScript
-   Web Performance

---

> Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the _glossary("JavaScript"_) engine inside browsers.

When the browser encounters CSS styles, it parses the text into the CSS Object Model (or _glossary('CSSOM'_)), a data structure it then uses for styling layouts and painting. The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is also downloaded, parsed, and then execute.

JavaScript parsing is done during _glossary("compile time"_) or whenever the _glossary("parser"_) is invoked, such as during a call to a method.

#### See also

-   [Parse](https://en.wikipedia.org/wiki/Parsing) on Wikipedia

---

## Term: Parser

-   CodingScripting
-   Glossary

---

> A **parser** is the module of a compiler or interpreter that _glossary("parse","parses"_) a source code file.

More generally, it's a piece of software that parses text and transforms its content to another representation.

#### See also

-   [Parser](https://en.wikipedia.org/wiki/Parsing#Parser) on Wikipedia

---

## Term: Payload body

-   HTTP
-   HTTP Header

---

> The HTTP message _payload body_ is the _information_ ("payload") part of the data that is sent in the HTTP Message Body (if any), prior to _HTTPHeader("Transfer-Encoding","transfer encoding"_) being applied. If transfer encoding is not used, the _payload body_ and _message body_ are the same thing!

For example, in this response the message body contains only the payload body: "Mozilla Developer Network":

```plain
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

By contrast, the below response uses _transfer encoding_ to encode the payload body into chunks. The payload body (information) sent is still "Mozilla Developer Network", but the message body includes additional data to separate the chunks:

```plain
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

For more information see [RFC 7230, section 3.3: Message Body](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3) and [RFC 7230, section 3.3.1: Transfer-Encoding](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.1).

---

## Term: Payload header

-   Glossary
-   Payload header
-   Headers
-   WebMechanics

---

> A **payload header** is an _Glossary("HTTP_header", "HTTP header"_) that describes the payload information related to safe transport and reconstruction of the original resource _Glossary("Representation header", "representation"_), from one or more messages. This includes information like the length of the message payload, which part of the resource is carried in this payload (for a multi-part message), any encoding applied for transport, message integrity checks, etc.

Payload headers may be present in both HTTP request and response messages (i.e. in any message that is carrying payload data).

The payload headers include: _HTTPHeader("Content-Length"_), _HTTPHeader("Content-Range"_), _HTTPHeader("Trailer"_), and _HTTPHeader("Transfer-Encoding"_).

#### See also

-   [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)

    -   _HTTPHeader("Content-Length"_)
    -   _HTTPHeader("Content-Range"_)
    -   _HTTPHeader("Trailer"_)
    -   _HTTPHeader("Transfer-Encoding"_)
    -   _Glossary("Representation header"_)

-   [RFC 7231, section 3.3: Payload semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)

---

## Term: PDF

-   Composing
-   Glossary
-   PDF
-   Portable Document Format

---

> **PDF** (Portable Document Format) is a file format used to share documentation without depending on any particular software implementation, hardware platform, or operating system. PDF provides a digital image of a printed document, and keeps the same appearance when printed.

#### See also

-   _Interwiki("wikipedia", "Portable Document Format", "PDF"_) on Wikipedia

---

## Term: Perceived performance

-   Glossary
-   Perceived Performance
-   Reference
-   Web Performance

---

> **Perceived performance** is a measure of how fast, responsive, and reliable a website _feels_ to its users. The perception of how well a site is performing can have more impact on the user experience that the actual load and response times.

#### See also

-   [Perceived performance](/en-US/docs/Learn/Performance/Perceived_performance)

---

## Term: Percent-encoding

-   Glossary
-   WebMechanics

---

> **Percent-encoding** is a mechanism to encode 8-bit characters that have specific meaning in the context of _Glossary("URL", "URLs"_). It is sometimes called URL encoding. The encoding consists of substitution: A '%' followed by the hexadecimal representation of the ASCII value of the replace character.

Special characters needing encoding are: `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='`, as well as `'%'` itself. Other characters don't need to be encoded, though they could.

| Character | Encoding     |
| --------- | ------------ |
| `':'`     | `%3A`        |
| `'/'`     | `%2F`        |
| `'?'`     | `%3F`        |
| `'#'`     | `%23`        |
| `'['`     | `%5B`        |
| `']'`     | `%5D`        |
| `'@'`     | `%40`        |
| `'!'`     | `%21`        |
| `'$'`     | `%24`        |
| `'&'`     | `%26`        |
| `"'"`     | `%27`        |
| `'('`     | `%28`        |
| `')'`     | `%29`        |
| `'*'`     | `%2A`        |
| `'+'`     | `%2B`        |
| `','`     | `%2C`        |
| `';'`     | `%3B`        |
| `'='`     | `%3D`        |
| `'%'`     | `%25`        |
| `' '`     | `%20` or `+` |

Depending on the context, the character `' '` is translated to a `'+'` (like in the percent-encoding version used in an `application/x-www-form-urlencoded` message), or in `'%20'` like on URLs.

#### See also

-   Definition of [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) in Wikipedia.
-   _RFC(3986_), section 2.1, where this encoding is defined.

---

## Term: PHP

-   Beginner
-   CodingScripting
-   Glossary
-   Infrastructure
-   Intro
-   PHP

---

> PHP (a recursive initialism for PHP: Hypertext Preprocessor) is an open-source server-side scripting language that can be embedded into HTML to build web applications and dynamic websites.

## Examples

### Basic syntax

```php
  // start of PHP code
<?php
     // PHP code goes here
 ?>
// end of PHP code
```

### Printing data on screen

```php
<?php
   echo "Hello World!";
?>
```

### PHP variables

```php
<?php
 // variables
 $nome='Danilo';
 $sobrenome='Santos';
 $pais='Brasil';
 $email='danilocarsan@gmailcom';

 // printing the variables
 echo $nome;
 echo $sobrenome;
 echo $pais;
 echo $email;
?>
```

#### See also

-   [Official website](https://php.net/)
-   _Interwiki("wikipedia", "PHP"_) on Wikipedia
-   [PHP](https://en.wikibooks.org/wiki/PHP_Programming) on Wikibooks
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Java"_)
    -   _Glossary("JavaScript"_)
    -   _Glossary("Python"_)
    -   _Glossary("Ruby"_)

---

## Term: Pixel

-   Design
-   Glossary
-   Graphics

---

> A pixel is the smallest building block of a graphical display like a computer screen.

Display resolution is expressed in the unit of pixels. eg: A "800 x 600" pixel resolution means that 800 pixels can be displayed in width and 600 pixels in height.

#### See also

-   [Pixel ](https://en.wikipedia.org/wiki/Pixel)on Wikipedia

---

## Term: Placeholder names

-   Cryptography
-   Glossary
-   Security

---

> Placeholder names are commonly used in cryptography to indicate the participants in a conversation, without resorting to terminology such as "Party A," "eavesdropper," and "malicious attacker."

The most commonly used names are:

-   _Alice_ and _Bob_, two parties who want to send messages to each other, occasionally joined by _Carol_, a third participant
-   _Eve_, a passive attacker who is eavesdropping on Alice and Bob's conversation
-   _Mallory_, an active attacker ("man-in-the-middle") who is able to modify their conversation and replay old messages

---

## Term: Plaintext

-   Cryptography
-   Glossary
-   Security

---

> Plaintext refers to information that is being used as an input to an _Glossary("encryption"_) _Glossary("algorithm"_), or to _Glossary("ciphertext"_) that has been decrypted.

It is frequently used interchangeably with the term _cleartext_, which more loosely refers to any information, such as a text document, image, etc., that has not been encrypted and can be read by a human or computer without additional processing.

---

## Term: Plugin

---

> A browser plugin is a software component that users can install to handle content that the browser can't support natively. Browser plugins are usually written using the [NPAPI](https://en.wikipedia.org/wiki/NPAPI) (Netscape Plugin Application Programming Interface) architecture.

The most well-known and widely used plugin was the Adobe Flash player, which enabled browsers to run _Glossary("Adobe Flash"_) content.

As browsers have become more powerful, plugins have become less useful. Plugins also have a history of causing security and performance problems for web users.

Between 2016 and 2021 browser vendors worked on a deprecation roadmap for plugins and in particular for Adobe Flash, and today plugins are no longer supported by any major browsers.

Plugins should not be confused with browser extensions, which unlike plugins are distributed as source code rather than binaries, and which are still supported by browsers, notably using the _Glossary("WebExtensions"_) system.

#### See also

-   [Adobe Flash end-of-life announcement](https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update#gs.g8mmgf)

---

## Term: PNG

-   Beginner
-   Composing
-   Glossary
-   Infrastructure
-   PNG

---

> **PNG** (Portable Network Graphics) is a graphics file format that supports lossless data compression.

#### See also

-   [PNG ](https://en.wikipedia.org/wiki/Portable_Network_Graphics)on Wikipedia

---

## Term: Polyfill

-   Browser Support
-   CodingScripting
-   Glossary
-   JavaScript
-   polyfill

---

> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

For example, a polyfill could be used to mimic the functionality of a _cssxref("text-shadow"_) in IE7 using proprietary IE filters, or mimic rem units or media queries by using JavaScript to dynamically adjust the styling as appropriate, or whatever else you require.

The reason why polyfills are not used exclusively is for better functionality and better performance. Native implementations of APIs can do more and are faster than polyfills. For example, the [Object.create polyfill](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#polyfill) only contains the functionalities that are possible in a non-native implementation of Object.create.

Other times, polyfills are used to address issues where browsers implement the same features in different ways. The polyfill uses non-standard features in a certain browser to give JavaScript a standards-compliant way to access the feature. Although this reason for polyfilling is very rare today, it was especially prevalent back in the days of IE6 and Netscape where each browser implemented JavaScript very differently. The [1st version of JQuery](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js) was an early example of a polyfill. It was essentially a compilation of browser-specific workarounds to provide JavaScript developers with a single common API that worked in all browsers. At the time, JavaScript developers were having major problems trying to get their website to work across all devices because there was such a discrepancy between browsers that the website might have to be programmed radically differently and have a much different user interface based upon the user's browser. Thus, the JavaScript developer had access to only a very tiny handful of JavaScript APIs that worked more-or-less consistently across all browsers. Using a polyfill to handle browser-specific implementations is less common today because modern browsers mostly implement a broad set of APIs according to standard semantics.

#### See also

-   [What is a polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill) (article by Remy Sharp, the originator of the term)

---

## Term: Polymorphism

-   CodingScripting
-   Glossary

---

> Polymorphism is the presentation of one interface for multiple data types.

For example, integers, floats, and doubles are implicitly polymorphic: regardless of their different types, they can all be added, subtracted, multiplied, and so on.

In the case of _glossary("OOP"_), by making the _glossary("class"_) responsible for its code as well as its own data, polymorphism can be achieved in that each class has its own _glossary("function"_) that (once called) behaves properly for any _glossary("object"_).

#### See also

-   [Polymorphism](https://en.wikipedia.org/wiki/Polymorphism_%28computer_science%29) on Wikipedia

---

## Term: POP3

-   Beginner
-   Glossary
-   Infrastructure

---

> **POP3** (Post Office Protocol) is a very common _glossary("protocol"_) for getting emails from a mail server over a _glossary("TCP"_) connection. POP3 does not support folders, unlike the more recent _Glossary("IMAP"_), which is harder to implement because of its more complex structure.

Clients usually retrieve all messages and then delete them from the server, but POP3 does allow retaining a copy on the server. Nearly all email servers and clients currently support POP3.

#### See also

-   _Interwiki("wikipedia", "Post Office Protocol", "POP"_) on Wikipedia
-   [RFC 1734](https://datatracker.ietf.org/doc/html/rfc1734) (Specification of POP3 authentication mechanism)
-   [RFC 1939](https://datatracker.ietf.org/doc/html/rfc1939) (Specification of POP3)
-   [RFC 2449](https://datatracker.ietf.org/doc/html/rfc2449) (Specification of POP3 extension mechanism)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary):

    -   _Glossary("IMAP"_)

---

## Term: Port

-   Glossary
-   Intro
-   Security
-   computer network
-   port

---

> For a computer connected to a network with an _Glossary("IP address"_), a **port** is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific _Glossary("protocol"_).

For example, the default port for the _Glossary("HTTP"_) protocol is 80 and the default port for the HTTPS protocol is 443, so a _Glossary("HTTP"_) server waits for requests on those ports. Each Internet protocol is associated with a default port: _Glossary("SMTP"_) (25), _Glossary("POP"_) (110), _Glossary("IMAP"_) (143), _Glossary("IRC"_) (194), and so on.

#### See also

-   _Interwiki("wikipedia", "Port (computer networking)" , "Port"_) on Wikipedia

---

## Term: Prefetch

-   Glossary
-   Prefetch
-   Reference
-   Web Performance

---

> Prefetching is when content is downloaded in the background, this is based on the assumption that the content will likely be requested, enabling the content to load instantly if and when the user requests it. The content is downloaded and cached for anticipated future use without the user making an explicit request for it.

### DNS Prefetching

Domain lookups can be slow, especially with network latency on mobile phones. They are most relevant when there are a plethora of links to external websites that may be clicked on, like search engine results, DNS prefetching resolves domain names in advance thereby speeding up load times by reducing the time associated with domain lookup at request time.

    <link rel="dns-prefetch" href="https://example.com/">

### Link prefetching

Link prefetching is a performance optimization technique that works by assuming which links the user is likely to click, then downloading the content of those links. If the user decides to click on one of the links, then the page will be rendered instantly as the content has already been downloaded.

The prefetch hints are sent in HTTP headers:

    Link: ; rel=dns-prefetch,
          ; as=script; rel=preload,
          ; rel=prerender,
          ; as=style; rel=preload

### Prefetch attribute value

Browsers will prefetch content when the prefetch [`<link>`](/en-US/docs/Web/HTML/Element/link) tag directs it to, giving the developer control over what resources should be prefetched.

     <link rel="prefetch" href="https://www.example.com/solutions" />

#### See also

-   defer
-   async
-   [preload](/en-US/docs/Web/HTML/Link_types/preload)
-   [page prediction](/en-US/docs/Glossary/Page_prediction)
-   [lazy loading](/en-US/docs/Web/Performance/Lazy_loading)

---

## Term: Preflight request

-   CORS
-   Glossary
-   HTTP
-   Preflight
-   request

---

> A CORS preflight request is a _Glossary("CORS"_) request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.

It is an _HTTPMethod("OPTIONS"_) request, using three HTTP request headers: _HTTPHeader("Access-Control-Request-Method"_), _HTTPHeader("Access-Control-Request-Headers"_), and the _HTTPHeader("Origin"_) header.

A preflight request is automatically issued by a browser and in normal cases, front-end developers don't need to craft such requests themselves. It appears when request is qualified as ["to be preflighted"](/en-US/docs/Web/HTTP/CORS#preflighted_requests) and omitted for [simple requests](/en-US/docs/Web/HTTP/CORS#simple_requests).

For example, a client might be asking a server if it would allow a _HTTPMethod("DELETE"_) request, before sending a `DELETE` request, by using a preflight request:

```plain
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

If the server allows it, then it will respond to the preflight request with an _HTTPHeader("Access-Control-Allow-Methods"_) response header, which lists `DELETE`:

```plain
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

The preflight response can be optionally cached for the requests created in the same _Glossary("URL"_) using _HTTPHeader("Access-Control-Max-Age"_) header like in the above example.

#### See also

-   _Glossary("CORS"_)
-   _HTTPMethod("OPTIONS"_)

---

## Term: Prerender

-   Glossary
-   Prefetch
-   Security
-   Web Performance
-   prerender

---

> With prerendering, the content is [prefetched](/en-US/docs/Glossary/Prefetch) and then rendered in the background by the browser as if the content had been rendered into an invisible separate tab. When the user navigates to the prerendered content, the current content is replaced by the prerendered content instantly.

```html
<link rel="prerender" href="https://example.com/content/to/prerender" />
```

#### See also

-   [prefetch](/en-US/docs/Glossary/Prefetch)

---

## Term: Presto

-   Glossary
-   Infrastructure

---

> Presto was the proprietary browser layout engine used to power the _Glossary("Opera browser"_) until version 15. Since then, the Opera browser is based on Chromium, which uses the _Glossary('Blink'_) layout engine.

#### See also

-   [Presto layout engine](https://en.wikipedia.org/wiki/Presto_%28layout_engine%29) on Wikipedia

---

## Term: Primitive

-   CodingScripting
-   Glossary
-   JavaScript

---

> In _Glossary("JavaScript"_), a **primitive** (primitive value, primitive data type) is data that is not an _Glossary("object"_) and has no _glossary("method","methods"_). There are 7 primitive data types: _Glossary("string"_), _Glossary("number"_), _Glossary("bigint"_), _Glossary("boolean"_), _Glossary("undefined"_), _Glossary("symbol"_), and _Glossary("null"_).

Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

All primitives are **immutable**, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## Example

This example will help you understand that primitive values are **immutable.**

### JavaScript

```js
//
// Using a string method doesn't mutate the string
var bar = 'baz';
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Using an array method mutates the array
var foo = [];
console.log(foo); // []
foo.push('plugh');
console.log(foo); // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

A primitive can be replaced, but it can't be directly altered.

## Primitive wrapper objects in JavaScript

Except for `null` and `undefined`, all primitive values have object equivalents that wrap around the primitive values:

-   _jsxref("String"_) for the string primitive.
-   _jsxref("Number"_) for the number primitive.
-   _jsxref("BigInt"_) for the bigint primitive.
-   _jsxref("Boolean"_) for the boolean primitive.
-   _jsxref("Symbol"_) for the symbol primitive.

The wrapper's [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method returns the primitive value.

#### See also

-   [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
-   _Interwiki("wikipedia", "Primitive data type"_) (Wikipedia)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("JavaScript"_)
    -   _Glossary("string"_)
    -   _Glossary("number"_)
    -   _Glossary("bigint"_)
    -   _Glossary("boolean"_)
    -   _Glossary("null"_)
    -   _Glossary("undefined"_)
    -   _Glossary("symbol"_)

---

## Term: privileged code

-   privileged

---

> **Privileged code** - Javascript code of your extension. For example, code in content scripts.

**Non-privileged** - Javascript on web-page.

---

## Term: Privileged

-   Glossary
-   Security

---

> Users are said to be **privileged** when they are granted additional rights to a system, or given ultimate access to content in a higher priority level when compared to normal users.

#### See also

-   _Interwiki("wikipedia", "Privilege (computing)"_) on Wikipedia
-   [Information Security Tutorial](/en-US/docs/Web/Security/Information_Security_Basics)

---

## Term: Progressive Enhancement

-   Accessibility
-   Design
-   Glossary

---

> **Progressive enhancement** is a design philosophy that provides a baseline of essential content and functionality to as many users as possible, while delivering the best possible experience only to users of the most modern browsers that can run all the required code.

The word _progressive_ in _progressive enhancement_ means creating a design that achieves a simpler-but-still-usable experience for users of older browsers and devices with limited capabilities, while at the same time being a design that **progresses the user experience up** to a more-compelling, fully-featured experience for users of newer browsers and devices with richer capabilities.

[Feature detection](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) is generally used to determine whether browsers can handle more modern functionality, while [polyfills](/en-US/docs/Glossary/Polyfill) are often used to add missing features with JavaScript.

Special notice should be taken of accessibility. Acceptable alternatives should be provided where possible.

Progressive enhancement is a useful technique that allows web developers to focus on developing the best possible websites while making those websites work on multiple unknown user agents. _Glossary("Graceful degradation"_) is related but is not the same thing and is often seen as going in the opposite direction to progressive enhancement. In reality both approaches are valid and can often complement one another.

#### See also

-   _Interwiki("wikipedia", "Progressive enhancement"_) at Wikipedia
-   [What is Progressive Enhancement, and why it matters](https://www.freecodecamp.org/news/what-is-progressive-enhancement-and-why-it-matters-e80c7aaf834a/) at freeCodeCamp
-   [Progressive Enhancement reading list 2021](https://www.quirksmode.org/blog/archives/2021/02/progressive_enh_1.html) at QuirksMode
-   [Understanding Progressive Enhancement](https://alistapart.com/article/understandingprogressiveenhancement/) by Aaron Gustafson; a 2008 _A List Apart_ article which first "placed progressive enhancement at the forefront of web developer thinking"
-   [Inclusive Web Design For the Future with Progressive Enhancement](http://hesketh.com/publications/inclusive_web_design_for_the_future/) ([related article)](http://www.hesketh.com/progressive_enhancement_and_the_future_of_web_design.html) by Steve Champeon and Nick Finck; a 2003 SXSW presentation cited by Aaron Gustafson as "unveiling a blueprint for a new way of approaching web development", and naming it "progressive enhancement"

---

## Term: Progressive web apps

-   Composing
-   Glossary
-   Progressive web apps

---

> Progressive web apps is a term used to describe the modern state of web app development. This involves taking standard web sites/apps that enjoy all the best parts of the Web — such as discoverability via search engines, being linkable via _Glossary("URL"_)s, and working across multiple form factors — and supercharging them with modern APIs (such as [Service Workers](/en-US/docs/Web/API/Service_Worker_API) and [Push](/en-US/docs/Web/API/Push_API)) and features that confer other benefits more commonly attributed to native apps.

These features include being installable, working offline, and being easy to sync with and re-engage the user from the server.

#### See also

-   The [App Center](/en-US/docs/Web/Progressive_web_apps) on MDN
-   [Progressive web apps](https://web.dev/progressive-web-apps/) on Google Developers

---

## Term: Promise

-   Glossary
-   Promise
-   Promises
-   asynchronous

---

> A **_jsxref("Promise"_)** is an _Glossary("object"_) that's returned by a _Glossary("function"_) that has not yet completed its work. The promise literally represents a promise made by the function that it will eventually return a result through the promise object.

When the called function finishes its work _Glossary("asynchronous", "asynchronously"_), a function on the promise object called a resolution (or fulfillment, or completion) handler is called to let the original caller know that the task is complete.

#### See also

-   _interwiki("wikipedia", "Futures and promises"_)
-   _jsxref("Promise"_) in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference).
-   [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)

---

## Term: Property

-   Disambiguation
-   Glossary

---

> The term **property** can have several meanings depending on the context. It may refer to:

\_GlossaryDisambiguation}}

---

## Term: Protocol

-   Glossary
-   Infrastructure
-   Protocols

---

> A **protocol** is a system of rules that define how data is exchanged within or between computers. Communications between devices require that the devices agree on the format of the data that is being exchanged. The set of rules that defines a format is called a protocol.

#### See also

-   _Interwiki("wikipedia", "Communications protocol"_) on Wikipedia
-   [RFC Official Internet Protocol Standards](https://www.rfc-editor.org/search/standards.php)
-   [HTTP overview](/en-US/docs/Web/HTTP/Overview)
-   Glossary:

    -   _glossary("TCP"_)
    -   _glossary("Packet"_)

---

## Term: Prototype-based programming

-   CodingScripting
-   Glossary

---

> **Prototype-based programming** is a style of _Glossary("OOP", "object-oriented programming"_) in which _Glossary('Class', 'classes'_) are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.

In simple words: this type of style allows the creation of an _Glossary('Object', 'object'_) without first defining its _Glossary('Class', 'class'_).

#### See also

-   _Interwiki("wikipedia", "Prototype-based programming", "Prototype-based programming"_) on Wikipedia

---

## Term: Prototype

-   Apps
-   Composing
-   Glossary

---

> A prototype is a model that displays the appearance and behavior of an application or product early in the development lifecycle.

See [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

#### See also

-   _Interwiki("wikipedia", "Software Prototyping"_) on Wikipedia

---

## Term: Proxy server

-   Glossary
-   Proxy
-   Server

---

> A **proxy server** is an intermediate program or computer used when navigating through different networks of the Internet. They facilitate access to content on the World Wide Web. A proxy intercepts requests and serves back responses; it may forward the requests, or not (for example in the case of a cache), and it may modify it (for example changing its headers, at the boundary between two networks).

A proxy can be on the user's local computer, or anywhere between the user's computer and a destination server on the Internet. In general there are two main types of proxy servers:

-   A **forward proxy** that handles requests from and to anywhere on the Internet.
-   A **reverse proxy** taking requests from the Internet and forwarding them to servers in an internal network.

#### See also

-   [Proxy servers and tunneling](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling)
-   [Proxy server](https://en.wikipedia.org/wiki/Proxy_server) on Wikipedia

---

## Term: Pseudo-class

-   CSS
-   CodingScripting
-   Glossary
-   Selector

---

> In CSS, a **pseudo-class** selector targets elements depending on their state rather than on information from the document tree. For example, the selector `a`\_ cssxref(":visited") }} applies styles only to links that the user has already followed.

#### See also

-   [Pseudo-class documentation](/en-US/docs/Web/CSS/Pseudo-classes)

---

## Term: Pseudo-element

-   CSS
-   CodingScripting
-   Glossary

---

> In CSS, a **pseudo-element** selector applies styles to parts of your document content in scenarios where there isn't a specific HTML element to select. For example, rather than putting the first letter of each paragraph in its own element, you can style them all with `p`\_ Cssxref("::first-letter") }}.

#### See also

-   [Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements)

---

## Term: Pseudocode

-   CodingScripting
-   Glossary
-   Pseudocode

---

> Pseudocode refers to code-like syntax that is generally used to indicate to humans how some code syntax works, or illustrate the design of an item of code architecture. It **won't** work if you try to run it as code.

#### See also

-   _interwiki("wikipedia", "Pseudocode", "Pseudocode"_) on Wikipedia.

---

## Term: Public-key cryptography

-   Cryptography
-   Glossary
-   Public-key cryptography
-   Security

---

> Public-key cryptography — or _asymmetric cryptography_ — is a cryptographic system in which keys come in pairs. The transformation performed by one of the keys can only be undone with the other key. One key (the _private key_) is kept secret while the other is made public.

When used for digital signatures, the private key is used to sign and the public key to verify. This means that anyone can verify a signature, but only the owner of the corresponding private key could have generated it.

When used for encryption, the public key is used to encrypt and the private key is used to decrypt. This gives public-key encryption systems an advantage over symmetric encryption systems in that the encryption key can be made public. Anyone could encrypt a message to the owner of the private key, but only the owner of the private key could decrypt it. However, they are typically much slower than symmetric algorithms and the size of message they can encrypt is proportional to the size of the key, so they do not scale well for long messages.

As a result, it's common for an encryption system to use a symmetric algorithm to encrypt the message, then a public-key system to encrypt the symmetric key. This arrangement can confer the benefits of both systems.

Commonly used public-key cryptosystems are RSA (for both signing and encryption), DSA (for signing) and Diffie-Hellman (for key agreement).

#### See also

-   [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Symmetric-key cryptography"_)

---

## Term: Python

-   CodingScripting
-   Glossary
-   Language
-   Python
-   programming

---

> **Python** is a high level general-purpose programming language. It uses a multi-paradigm approach, meaning it supports procedural, object-oriented, and some functional programming constructs.

It was created by Guido van Rossum as a successor to another language (called ABC) between 1985 and 1990, and is currently used on a large array of domains like web development, desktop applications, data science, DevOps, and automation/productivity.

Python is developed under an OSI-approved open source license, making it freely usable and distributable, even for commercial use. Python's license is administered by the [Python Software Foundation](https://www.python.org/psf).

#### See also

-   _interwiki('wikipedia','Python (programming language)','Python'_) on Wikipedia
-   [Official Python docs tutorials](https://docs.python.org/3/tutorial/index.html)
-   [Tutorials Point Python tutorial](https://www.tutorialspoint.com/python/index.htm)
-   [AlphaCodingSkills Python Tutorial](https://www.alphacodingskills.com/python/python-tutorial.php)
-   [Django Web Framework (Python)](/en-US/docs/Learn/Server-side/Django) on MDN
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Java"_)
    -   _Glossary("JavaScript"_)
    -   _Glossary("PHP"_)
    -   _Glossary("Python"_)
    -   _Glossary("Ruby"_)

---

## Term: Quality values

-   Glossary
-   WebMechanics

---

> **Quality values**, or _q-values_ and _q-factors_, are used to describe the order of priority of values in a comma-separated list. It is a special syntax allowed in some [HTTP headers](/en-US/docs/Web/HTTP/Headers) and in HTML.

The importance of a value is marked by the suffix `';q='` immediately followed by a value between `0` and `1` included, with up to three decimal digits, the highest value denoting the highest priority. When not present, the default value is `1`.

## Examples

The following syntax

```plain
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

indicates the order of priority:

| Value                                   | Priority |
| --------------------------------------- | -------- |
| `text/html` and `application/xhtml+xml` | `1.0`    |
| `application/xml`                       | `0.9`    |
| `*/*`                                   | `0.8`    |

If there is no priority defined for the first two values, the order in the list is irrelevant. Nevertheless, with the same quality, more specific values have priority over less specific ones:

```plain
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Value       | Priority                      |
| ----------- | ----------------------------- |
| `text/html` | `0.8` (but totally specified) |
| `text/*`    | `0.8` (partially specified)   |
| `*/*`       | `0.8` (not specified)         |

Some syntax, like the one of _HTTPHeader("Accept"_), allow additional specifiers like `text/html;level=1`. These increase the specificity of the value. Their use is extremely rare.

## Browser-specific information

### Firefox

Starting with Firefox 18, the quality factor values are clamped to 2 decimal places. They used to be clamped to only 1 decimal place in earlier versions (_bug(672448_)).

## More information

-   [HTTP headers](/en-US/docs/Web/HTTP/Headers) using q-values in their syntax: _HTTPHeader("Accept"_), _HTTPHeader("Accept-Language"_), _HTTPHeader("TE"_).
-   [Header field definitions.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)

---

## Term: Quaternion

-   Definition
-   Glossary
-   Orientation
-   Quaternion
-   WebXR
-   rotation

---

> A **quaternion** is the quotient of two 3D vectors and is used in 3D graphics and in accelerometer-based sensors to represent orientation or rotational data.

While mathematical quaternions are more involved than this, the **unit quaternions** (or **rotational quaternions**) used to represent rotation while using [WebGL](/en-US/docs/Glossary/WebGL) or [WebXR](/en-US/docs/Web/API/WebXR_Device_API), for example, are represented using the same syntax as a 3D point. As such, the type _domxref("DOMPoint"_) (or _domxref("DOMPointReadOnly"_)) is used to store quaternions.

#### See also

-   _interwiki("wikipedia", "Quaternions and spatial rotation"_) on Wikipedia
-   _interwiki("wikipedia", "Quaternion"_) on Wikipedia
-   _domxref("XRRigidTransform.orientation"_) in the WebXR Device API reference

---

## Term: QUIC

-   Glossary
-   HTTP
-   QUIC
-   Reference
-   Web Performance

---

> **Quick UDP Internet Connection**, or **QUIC**, is an experimental multiplexed transport protocol implemented on UDP. It was developed by Google as a way to experiment with ways to improve TCP and web application delivery.

As TCP is built into the kernel of many operating systems being able to experiment with changes, test them and implement modifications is an extremely slow process. The creation of QUIC allows developers to conduct experiments and try new things faster.

QUIC was designed to support the semantics of HTTP/2. It provides multiplexing, flow control, security and congestion control.

Key features of QUIC include:

-   Reduction in connection establishment time.
-   Improved congestion control.
-   Multiplexing without head-of-line blocking.
-   Forward error correction.
-   Connection migration.

There is limited browser and server support for QUIC today.

### Resources

-   [Chromium Projects Documentation](https://www.chromium.org/quic)
-   [IETF Draft](https://datatracker.ietf.org/doc/html/draft-tsvwg-quic-protocol-02)

#### See also

-   [HTTP/2](/en-US/docs/Glossary/HTTP_2)

---

## Term: RAIL

-   Glossary
-   RAIL
-   Timings
-   Web Performance

---

> **RAIL**, an acronym for **Response, Animation, Idle, and Load**, is a performance model originated by the Google Chrome team in 2015, focused on user experience and performance within the browser. The performance mantra of RAIL is "Focus on the user; the end goal isn't to make your site perform fast on any specific device, it's to make users happy." There are 4 stages of interaction: page load, idle, response to input, and scrolling and animation. In acronym order, the main tenets are:

-   **Response**
-   -   : Respond to users immediately, acknowledging any user input in **100ms** or less.
-   **Animation**
-   -   : When animating, render each frame in under **16ms**, aiming for consistency and avoiding jank.
-   **Idle**
    -   : When using the main JavaScript thread, work in chunks for less than **50ms** to free up the thread for user interactions.
-   **Load**
    -   : Deliver interactive content in less than **1 second**.

#### See also

-   [Recommended Web Performance Timings: How long is too long](/en-US/docs/Web/Performance/How_long_is_too_long)

---

## Term: Raster image

-   CUR
-   Documents
-   Glossary
-   ICO
-   JPEG
-   PNG
-   gif
-   raster image

---

> A **_raster image_** is an image file defined as a grid of pixels. They're also referred to as _bitmaps_. Common raster image formats on the Web are [JPEG](/en-US/docs/Glossary/jpeg), [PNG](/en-US/docs/Glossary/PNG), [GIF](/en-US/docs/Glossary/gif), and [ICO](<https://en.wikipedia.org/wiki/ICO_(file_format)>).

Raster image files usually contain one set of dimensions, but the ICO and CUR formats, used for favicons and [CSS cursor images](/en-US/docs/Web/CSS/cursor), can contain multiple sizes.

#### See also

-   _glossary("Vector images"_)

---

## Term: RDF

-   CodingScripting
-   Glossary
-   Infrastructure
-   OpenPractices
-   WebMechanics

---

> **RDF** (Resource Description Framework) is a language developed by W3C for representing information on the World Wide Web, such as Webpages. RDF provides a standard way of encoding resource information so that it can be exchanged in a fully automated way between applications.

#### See also

-   _Interwiki("wikipedia", "Resource Description Framework"_) on Wikipedia

---

## Term: Real User Monitoring (RUM)

-   Glossary
-   RUM
-   Reference
-   Web Performance

---

> **Real User Monitoring** or RUM measures the performance of a page from real users' machines. Generally, a third party script injects a script on each page to measure and report page load data for every request made. This technique monitors an application's actual user interactions. In RUM, the third party script collects performance metrics from the real users' browsers. RUM helps identify how an application is being used, including the geographic distribution of users and the impact of that distribution on the end user experience.

#### See also

-   [Real User Monitoring (RUM) versus Synthetic Monitoring](/en-US/docs/Web/Performance/Rum-vs-Synthetic)
-   [Synthetic Monitoring](/en-US/docs/Glossary/Synthetic_monitoring)
-   [Beacon](/en-US/docs/Glossary/beacon)

---

## Term: Recursion

-   CodingScripting
-   Glossary

---

> The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

## Examples

### Recursive function calls itself until condition met

The following Python code defines a function that takes a number, prints it, and then calls itself again with the number's value -1. It keeps going until the number is equal to 0, in which case it stops.

```js
//
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

The output will look like this:

10
9
8
7
6
5
4
3
2
1

#### See also

-   _Interwiki("wikipedia", "Recursion (computer science)"_) on Wikipedia
-   [More details about recursion in JavaScript](/en-US/docs/Web/JavaScript/Guide/Functions#recursion)

---

## Term: Reference

-   CodingScripting
-   Glossary
-   NeedsContent

---

> In the context of **_glossary("object","objects"_)**, this is an **_glossary("object reference"_)**. On MDN, we could be talking about the _glossary("JavaScript"_) reference itself.

In computing, a reference is a value that indirectly accesses data to retrieve a variable or a record in a computer's memory or other storage device.

#### See also

-   _Interwiki("wikipedia", "Reference (computer science)"_) on Wikipedia

---

## Term: Reflow

-   Glossary
-   WebMechanics

---

> **Reflow** happens when a _glossary("browser"_) must process and draw part or all of a webpage again, such as after an update on an interactive site.

#### See also

-   [Google article "Minimizing browser reflow"](https://developers.google.com/speed/articles/reflow)

---

## Term: Regular expression

-   CodingScripting
-   Glossary
-   Regular Expression

---

> **Regular expressions** (or _regex_) are rules that govern which sequences of characters come up in a search.

Regular expressions are implemented in various languages, but the best-known implementation is the Perl Implementation, which has given rise to its own ecosystem of implementations called PCRE (_Perl Compatible Regular Expression_). On the Web, _glossary("JavaScript"_) provides another regex implementation through the _jsxref("RegExp"_) object.

#### See also

-   _Interwiki("wikipedia", "Regular expressions"_) on Wikipedia
-   [Interactive tutorial](https://regexone.com/)
-   [Visualized Regular Expression](https://regexper.com/)
-   [Writing regular expressions in JavaScript](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---

## Term: Rendering engine

-   Glossary
-   Infrastructure
-   Rendering engine
-   Web browser engine

---

> A **rendering engine** is software that draws text and images on the screen. The engine draws structured text from a document (often _glossary("HTML"_)), and formats it properly based on the given style declarations (often given in _glossary("CSS"_)). Examples of layout engines: _glossary("Blink"_), _glossary("Gecko"_), EdgeHTML, _glossary("WebKit"_).

#### See also

-   _Interwiki("wikipedia", "Web browser engine"_) on Wikipedia
-   [Venkatraman.R - Behind Browsers (Part 1, Basics) ](https://medium.com/@ramsunvtech/behind-browser-basics-part-1-b733e9f3c0e6)

---

## Term: Repo

-   Glossary
-   Infrastructure
-   Intro
-   Repo
-   Repository

---

> In a revision control system like _Glossary("Git"_) or _Glossary("SVN"_), a repo (i.e. "repository") is a place that hosts an application's code source, together with various metadata.

#### See also

-   [Repository](https://en.wikipedia.org/wiki/Repository_%28revision_control%29) on Wikipedia

---

## Term: Reporting directive

-   CSP
-   HTTP
-   Policy
-   Reporting
-   Security
-   Violation

---

> **_Glossary("CSP"_) reporting directives** are used in a _HTTPHeader("Content-Security-Policy"_) header and control the reporting process of CSP violations.

See [Reporting directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#reporting_directives) for a complete list.

#### See also

-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("CSP"_)
    -   _Glossary("Fetch directive"_)
    -   _Glossary("Document directive"_)
    -   _Glossary("Navigation directive"_)

-   Reference

    -   <https://www.w3.org/TR/CSP/#directives-reporting>
    -   _HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests"_)
    -   _HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content"_)
    -   _HTTPHeader("Content-Security-Policy/require-sri-for", "require-sri-for"_) \_deprecated_inline}}
    -   _HTTPHeader("Content-Security-Policy"_)

---

## Term: Representation header

-   Glossary
-   WebMechanics

---

> A **representation header** is an _glossary("HTTP_header", "HTTP header"_) that describes the particular _representation_ of the resource sent in an HTTP message body.

Representations are different forms of a particular resource.
For example, the same data might be formatted as a particular media type such as XML or JSON, localised to a particular written language or geographical region, and/or compressed or otherwise encoded for transmission.
The underlying resource is the same in each case, but its representation is different.

Clients specify the formats that they prefer to be sent during [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) (using `Accept-*` headers), and the representation headers tell the client the format of the _selected representation_ they actually received.

Representation headers may be present in both HTTP request and response messages.
If sent as a response to a `HEAD` request, they describe the body content that _would_ be selected if the resource was actually requested.

Representation headers include: _HTTPHeader("Content-Type"_), _HTTPHeader("Content-Encoding"_), _HTTPHeader("Content-Language"_), and _HTTPHeader("Content-Location"_).

#### See also

-   [RFC 7231, section 3: Representations](https://datatracker.ietf.org/doc/html/rfc7231#section-3)
-   [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
-   _Glossary("Payload header"_)
-   _glossary("Entity header"_)
-   _HTTPHeader("Digest"_)/ _HTTPHeader("Want-Digest"_)

---

## Term: Request header

-   Glossary
-   WebMechanics

---

> A **request header** is an _glossary("HTTP header"_) that can be used in an HTTP request to provide information about the request context, so that the server can tailor the response. For example, the _HTTPHeader("Accept", "Accept-\*"_) headers indicate the allowed and preferred formats of the response. Other headers can be used to supply authentication credentials (e.g. _HTTPHeader("Authorization"_)), to control caching, or to get information about the user agent or referrer, etc.

Not all headers that can appear in a request are referred to as _request headers_ by the specification. For example, the _HTTPHeader("Content-Type"_) header is referred to as a _glossary("representation header"_).

In addition, [CORS](/en-US/docs/Glossary/CORS) defines a subset of request headers as _glossary('simple header', 'simple headers'_), request headers that are always considered authorized and are not explicitly listed in responses to _glossary("preflight request", "preflight"_) requests.

The HTTP message below shows a few request headers after a _HTTPMethod("GET"_) request:

```console
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

#### See also

-   [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
-   [RFC 7231, section 5: Request header fields](https://datatracker.ietf.org/doc/html/rfc7231#section-5)

---

## Term: Resource Timing

-   Glossary
-   Timings
-   Web Performance

---

> Diagnosing performance issues requires performance data at the granularity of the resource. The [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API) is a JavaScript API that is able to capture timing information for each individual resource that is fetched when a page is loaded.

#### See also

-   [Using the resource timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
-   [Server Timing](https://www.w3.org/TR/server-timing/)

---

## Term: Response header

-   Glossary
-   WebMechanics

---

> A **response header** is an _glossary("HTTP header"_) that can be used in an HTTP response and that doesn't relate to the content of the message. Response headers, like _HTTPHeader("Age"_), _HTTPHeader("Location"_) or _HTTPHeader("Server"_) are used to give a more detailed context of the response.

Not all headers appearing in a response are categorized as _response headers_ by the specification. For example, the _HTTPHeader("Content-Type"_) header is a _glossary("representation header"_) indicating the original type of data in the body of the response message (prior to the encoding in the _HTTPHeader("Content-Encoding"_) representation header being applied). However, "conversationally" all headers are usually referred to as response headers in a response message.

The following shows a few response and representation headers after a _HTTPMethod("GET"_) request.

```plain
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

#### See also

-   [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Representation header"_)
    -   _Glossary("HTTP header"_)
    -   _Glossary("Response header"_)
    -   _Glossary("Fetch metadata response header"_)
    -   _Glossary("Request header"_)

---

## Term: Responsive web design

-   Accessibility
-   Design
-   Glossary
-   Responsive web design

---

> _Responsive Web Design_ (**RWD**) is a Web development concept focusing on making sites look and behave optimally on all personal computing devices, from desktop to mobile.

#### See also

-   [Summary and resources](/en-US/docs/Web/Progressive_web_apps)
-   [Pros and cons of going responsive](/en-US/docs/Web/Progressive_web_apps)
-   [Responsive Web Design](https://msdn.microsoft.com/magazine/hh653584.aspx)

---

## Term: REST

-   Architecture
-   Beginner
-   Glossary
-   HTTP
-   Rest
-   WebMechanics

---

> **REST** (Representational State Transfer) refers to a group of software architecture design constraints that bring about efficient, reliable and scalable distributed systems.

The basic idea of REST is that a resource, e.g. a document, is transferred via well-recognized, language-agnostic, and reliably standardized client/server interactions. Services are deemed RESTful when they adhere to these constraints.

HTTP APIs in general are sometimes colloquially referred to as RESTful APIs, RESTful services, or REST services, although they don't necessarily adhere to all REST constraints. Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools.

#### See also

-   [restapitutorial.com](https://www.restapitutorial.com/)
-   [restcookbook.com](https://restcookbook.com/)
-   _Interwiki("wikipedia", "Representational_state_transfer", "REST"_) on Wikipedia
-   [REST Architecture](https://www.service-architecture.com/articles/web-services/representational_state_transfer_rest.html)

---

## Term: RGB

-   Beginner
-   CSS
-   Design
-   Guide

---

> Red Green Blue (RGB) is a color model that represents colors as mixtures of three underlying components (or channels), namely, red, green, and blue. Each color is described by a sequence of three numbers (typically between 0.0 and 1.0, or between 0 and 255) that represent the different intensities (or contributions) of red, green, and blue, in determining the final color.

There are many ways to describe the RGB components of a color. In _Glossary("CSS"_) they can be represented as a single 24-bit integer in hexadecimal notation (for example, ` #``add `8e6 is light blue), or in functional notation as three separate 8-bit integers (for example, rgb(46, 139, 87) is sea green). In _Glossary("OpenGL"_), _Glossary("WebGL"_), and _Glossary("GLSL"_) the red-green-blue components are fractions (floating-point numbers between 0.0 and 1.0), although in the actual color buffer they are typically stored as 8-bit integers. Graphically, a color can be represented as a point in a three-dimensional grid or cube, where each dimension (or axis) corresponds to a different channel.

#### See also

-   [RGB color model on Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)
-   [CSS data type: \<color>](/en-US/docs/Web/CSS/color_value)

---

## Term: RIL

-   B2G
-   Firefox OS
-   Glossary
-   Infrastructure
-   Intro
-   Mobile
-   Telephony

---

> RIL (Radio Interface Layer) is a mobile operating system component which communicates between the device's software and the device's phone, radio, or modem hardware.

#### See also

-   _Interwiki("wikipedia", "Radio Interface Layer"_) on Wikipedia

---

## Term: Random Number Generator

-   CodingScripting
-   Glossary

---

> A **PRNG** (pseudorandom number generator) is an algorithm that outputs numbers in a complex, seemingly unpredictable pattern. Truly random numbers (say, from a radioactive source) are utterly unpredictable, whereas all algorithms are predictable, and a PRNG returns the same numbers when passed the same starting parameters or _seed_.

PRNGs can be used for a variety of applications, such as games.

A cryptographically secure PRNG is a PRNG with certain extra properties making it suitable for use in cryptography. These include:

-   that it's computationally unfeasible for an attacker (without knowledge of the seed) to predict its output
-   that if an attacker can work out its current state, this should not enable the attacker to work out previously emitted numbers.

Most PRNGs are not cryptographically secure.

#### See also

-   _Interwiki("wikipedia", "Pseudorandom number generator"_) on Wikipedia
-   _jsxref("Math.random()"_), a built-in JavaScript PRNG function. Note that this is not a cryptographically secure PRNG.
-   _domxref("Crypto.getRandomValues()"_): this is intended to provide cryptographically secure numbers.

---

## Term: Robots.txt

-   Glossary
-   Infrastructure

---

> Robots.txt is a file which is usually placed in the root of any website. It decides whether _Glossary("crawler", "crawlers"_) are permitted or forbidden access to the web site.

For example, the site admin can forbid crawlers to visit a certain folder (and all the files therein contained) or to crawl a specific file, usually to prevent those files being indexed by other search engines.

#### See also

-   _Interwiki("wikipedia", "Robots.txt"_) on Wikipedia
-   <https://developers.google.com/search/reference/robots_txt>
-   Standard specification draft: [https://datatracker.ietf.org/doc/html/draft-rep-wg-topic](https://datatracker.ietf.org/doc/html/draft-rep-wg-topic-00)
-   <https://www.robotstxt.org/>

---

## Term: Round Trip Time (RTT)

-   Beginner
-   Glossary
-   Performance
-   Resource
-   Round Trip Time
-   Web Performance

---

> **Round Trip Time (RTT)** is the length time it takes for a data packet to be sent to a destination plus the time it takes for an acknowledgment of that packet to be received back at the origin. The RTT between a network and server can be determined by using the `ping` command.

```console
$ ping example.com
PING example.com (216.58.194.174): 56 data bytes
64 bytes from 216.58.194.174: icmp_seq=0 ttl=55 time=25.050 ms
64 bytes from 216.58.194.174: icmp_seq=1 ttl=55 time=23.781 ms
64 bytes from 216.58.194.174: icmp_seq=2 ttl=55 time=24.287 ms
64 bytes from 216.58.194.174: icmp_seq=3 ttl=55 time=34.904 ms
64 bytes from 216.58.194.174: icmp_seq=4 ttl=55 time=26.119 ms
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 23.781/26.828/34.904/4.114 ms
```

In the above example, the average round trip time is shown on the final line as 26.8ms.

#### See also

-   [Time to First Byte (TTFB)](/en-US/docs/Glossary/time_to_first_byte)
-   [Latency](/en-US/docs/Glossary/Latency)

---

## Term: Routers

-   Intro

---

> There are three definitions for **routers** on the web:

1.  For the network layer, the router is a networking device that decides data _Glossary('Packet'_)s directions. They are distributed by retailers allowing user interaction to the internet.
2.  For a _Glossary('SPA', 'Single-page application' _) in the application layer, a router is a library that decides what web page is presented by a given _Glossary('URL'_). This middleware module is used for all URL functions, as these are given a path to a file that is rendered to open the next page.
3.  In the implementation of an _Glossary('API'_) in a service layer, a router is a software component that parses a request and directs or routes the request to various handlers within a program. The router code usually accepts a response from the handler and facilitates its return to the requester.

#### See also

For network layer context:

-   _Interwiki("wikipedia", "Router (computing)"_) on Wikipedia

For SPA in application layer context, most of the popular SPA frameworks has its routing library:

-   [Angular router](https://angular.io/guide/router)
-   [React router](https://reacttraining.com/react-router)
-   [Vue router](https://router.vuejs.org)

---

## Term: RSS

-   Glossary
-   OpenPractices
-   RSS
-   Sharing
-   WebMechanics

---

> **RSS** (Really Simple Syndication) refers to several XML document formats designed for publishing site updates. When you subscribe to a website's RSS feed, the website sends information and updates to your RSS reader in an RSS document called a _feed_, so you don't need to check all your favorite websites manually.

#### See also

-   _Interwiki("wikipedia", "RSS"_) on Wikipedia
-   [Latest specification](https://www.rssboard.org/rss-specification)

---

## Term: Rsync

---

> [Rsync](https://rsync.samba.org/) is an open-source file synchronizing tool that provides incremental file transfer It can be used over insecure and secure transports (like SSH). It is available on most Unix-based systems (such as macOS and Linux) and Windows. There are also GUI-based tools that use rsync, for example, [Acrosync](https://acrosync.com/mac.html).

A basic command looks like this:

```console
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

-   `-options` is a dash followed by one or more letters, for example `-v` for verbose error messages, and `-b` to make backups. See the full list of options at the [rsync man page.](https://linux.die.net/man/1/rsync) (Search for "Options summary.")
-   `SOURCE` is the path to the local file or directory that you want to copy or synchronize
-   `user@` is the credentials of the user on the remote server you want to copy files over to.
-   `x.x.x.x` is the IP address of the remote server.
-   `DESTINATION` is the path to the location you want to copy your directory or files to on the remote server.

You can also make a connection over SSH using the `-e` option as shown:

```console
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

There are numerous examples on the Internet, including those at the [official website](https://rsync.samba.org/examples.html), and at the [Wikipedia entry](https://en.wikipedia.org/wiki/Rsync#Examples) for rsync.

---

## Term: RTCP (RTP Control Protocol)

-   Glossary
-   Media
-   Networking
-   Protocol
-   RTCP
-   control

---

> The **RTP Control Protocol** (**RTCP**) is a partner to the _Glossary("RTP"_) protocol. RTCP is used to provide control and statistical information about an RTP media streaming session.

This lets control and statistics packets be separated logically and functionally from the media streaming while using the underlying packet delivery layer to transmit the RTCP signals as well as the RTP and media contents.

RTCP periodically transmits control packets to all of an RTP session's participants, using the same mechanism that is being used to transmit the data packets. That underlying protocol handles the multiplexing of the data and control packets and may use separate network ports for each type of packet.

#### See also

-   [Introduction to the Real-time Transport Protocol](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
-   _interwiki("wikipedia", "RTP Control Protocol"_)
-   _RFC(3550, 6, "RFC 3550 Section 6"_)

---

## Term: RTF

-   Composing
-   Format
-   Glossary
-   RTF
-   Rich Text Format

---

> RTF (Rich Text Format) is a plain-text-based file format with support for formatting instructions (like bold or italic).

Three programmers in the Microsoft Word team created RTF in the 1980s, and Microsoft continued to develop the format until 2008. However, many word-processing programs can still read and write RTF.

#### See also

-   _Interwiki("wikipedia", "Rich Text Format"_) on Wikipedia
-   [final specification from Microsoft](https://www.microsoft.com/en-us/download/details.aspx?id=10725)

---

## Term: RTL (Right to Left)

-   Composing
-   Glossary
-   Localization

---

> **RTL** (**Right To Left**) is a _Glossary("locale"_) property indicating that text is written from right to left.

For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (`ar`) is another common language written RTL.

The opposite of RTL, LTR (Left To Right) is used in other languages, including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).

#### See also

-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Localization"_)
    -   _Glossary("LTR", "LTR (Left to Right)"_)
    -   _Glossary("RTL", "RTL (Right to Left)"_)

---

## Term: RTP (Real-time Transport Protocol) and SRTP (Secure RTP)

-   Glossary
-   Network
-   Protocol
-   RTP

---

> The **Real-time Transport Protocol** (**RTP**) is a network protocol which described how to transmit various media (audio, video) from one endpoint to another in a real-time fashion. RTP is suitable for video-streaming application, telephony over _glossary("IP"_) like Skype and conference technologies.

The secure version of RTP, **SRTP**, is used by [WebRTC](/en-US/docs/Web/API/WebRTC_API), and uses encryption and authentication to minimize the risk of denial-of-service attacks and security breaches.

RTP is rarely used alone; instead, it is used in conjunction with other protocols like _glossary("RTSP"_) and _glossary("SDP"_).

#### See also

-   [Introduction to the Real-time Transport Protocol](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
-   _Interwiki("wikipedia", "Real-time_Transport_Protocol","RTP"_) on Wikipedia
-   _RFC(3550_) (one of the documents that specify precisely how the protocol works)

---

## Term: 'RTSP: Real-time streaming protocol'

-   Glossary
-   Real-time streaming protocol
-   Reference
-   rtsp

---

> Real-time streaming protocol (RTSP) is a network protocol that controls how the streaming of a media should occur between a _glossary("server"_) and a _glossary("client"_). Basically, RTSP is the protocol that describes what happens when you click "Pause"/"Play" when streaming a video. If your computer were a remote control and the streaming server a television, RTSP would describe how the instruction of the remote control affects the TV.

#### See also

-   _Interwiki("wikipedia", "Real_Time_Streaming_Protocol","RTSP"_) on Wikipedia
-   [RFC 7826](https://datatracker.ietf.org/doc/html/rfc7826) (one of the documents that specifies precisely how the protocol works)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("RTSP"_)

---

## Term: Ruby

-   CodingScripting
-   Glossary
-   Ruby

---

> **Ruby** is an open-source programming language. In a _glossary("world wide web","Web"_) context, Ruby is often used server-side with the _Ruby On Rails_ (ROR) framework to produce websites/apps.

Ruby is also a method for annotating east Asian text in HTML documents to provide pronunciation information; see the _HTMLElement("ruby"_) element.

#### See also

-   [Ruby](https://en.wikipedia.org/wiki/Ruby_%28programming_language%29) on Wikipedia
-   [Ruby's official web site](https://www.ruby-lang.org)
-   [Ruby On Rails' official web site](https://rubyonrails.org/)

---

## Term: Safe

-   Glossary
-   Disambiguation

---

> The term **safe** can have several meanings depending on the context. It may refer to:

\_GlossaryDisambiguation}}

---

## Term: Same-origin policy

-   Glossary
-   Same-origin policy
-   origin

---

> The **[same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)** is a critical security mechanism that restricts how a document or script loaded from one _Glossary("origin"_) can interact with a resource from another origin.

It helps isolate potentially malicious documents, reducing possible attack vectors.

#### See also

-   [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary):

    -   _Glossary("CORS"_)
    -   _Glossary("origin"_)

---

## Term: SCM

-   CodingScripting
-   Glossary
-   SCM

---

> SCM (Source Control Management) is a system for managing source code. Usually it refers to the use of software to handle versioning of source files. A programmer can modify source code files without being afraid of editing out useful stuff, because a SCM keeps track of how the source code has changed and who made the changes.

Some SCM systems include CVS, SVN, GIT.

#### See also

-   _Interwiki("wikipedia", "Revision control"_) on Wikipedia

---

## Term: Scope

-   CodingScripting
-   Glossary
-   JavaScript

---

> The current context of execution. The context in which _glossary("value","values"_) and **expressions** are "visible" or can be referenced. If a **_glossary("variable"_)** or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

A **_glossary("function"_)** serves as a **closure** in _glossary("JavaScript"_), and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

---

```js
//

function exampleFunction() {
    var x = 'declared inside function'; // x can only be used in exampleFunction
    console.log('Inside function');
    console.log(x);
}

console.log(x); // Causes error
```

However, the following code is valid due to the variable being declared outside the function, making it global:

```js
//
var x = 'declared outside function';

exampleFunction();

function exampleFunction() {
    console.log('Inside function');
    console.log(x);
}

console.log('Outside function');
console.log(x);
```

#### See also

-   _Interwiki("wikipedia", "Scope (computer science)"_) on Wikipedia

---

## Term: Screen reader

-   Accessibility
-   Glossary
-   Screen reader
-   Voice Over
-   Voiceover

---

> Screen readers are software applications that attempt to convey what is seen on a screen display in a non-visual way, usually as text to speech, but also into braille or sound icons. Screen readers are essential to people who are blind, as well as useful to people who are visually impaired, illiterate, or have a learning disability. There are some browser extension screen readers, but most screen readers operate system-wide for all user applications, not just the browser.

In terms of web accessibility, most user agents provide an accessibility object model and screen readers interact with dedicated accessibility APIs, using various operating system features and employing hooking techniques.

## VoiceOver

macOS comes with VoiceOver, a built-in screen reader. To access VoiceOver, go to System Preferences > Accessibility > VoiceOver. You can also toggle VoiceOver on and off with fn+command + F5. VoiceOver both reads aloud and displays content. The content read aloud is displayed in a dark grey box.

Desktop/laptop screen reader users navigate websites with a keyboard or other non-pointing device. The best way to emulate use is to do the same.

Just like keyboard navigation without VoiceOver, you can navigate through interactive elements using the tab key and the arrow keys:

-   Next interactive element: Tab
-   Previous interactive element: Shift + Tab
-   Next radio button in a same named-group: right or down arrow
-   Previous radio button in a same named-group: left or up arrow

Navigating through the content of a page is done with the tab key and a series of other keys along with Control + Option keys

-   Next heading: Control + Option + H
-   Next list: Control + Option + X
-   Next graphic: Control + Option + G
-   Next table: Control + Option + T
-   Down an HTML hierarchical order Control + Option + right arrow
-   Previous heading: Shift + Control + Option + H
-   Previous list: Shift + Control + Option + X
-   Previous graphic: Shift + Control + Option + G
-   Previous table: Shift + Control + Option + T
-   Up an HTML hierarchical order: Control + Option + left arrow

#### See also

-   [ARIA](/en-US/docs/Web/Accessibility/ARIA)

---

## Term: Script-supporting element

-   Glossary
-   HTML
-   HTML Content Categories
-   scripts

---

> In an _Glossary("HTML"_) document, **script-supporting elements** are those elements that don't directly contribute to the appearance or layout of the page; instead, they're either scripts or contain information that's only used by scripts.

These elements may be important, but do not affect the displayed page unless the page's scripts explicitly cause them to do so.

There are only two script-supporting elements: _HTMLElement("script"_) and _HTMLElement("template"_).

#### See also

_SectionOnPage("/en-US/docs/Web/HTML/Kinds_of_HTML_content", "Script-supporting elements"_)

---

## Term: Block (scripting)

-   CodingScripting
-   Glossary
-   JavaScript

---

> In _glossary("JavaScript"_), a block is a collection of related _glossary("statement","statements"_) enclosed in braces ("{}"). For example, you can put a block of statements after an _jsxref("Statements/if...else","if (condition)"_) block, indicating that the interpreter should run the code inside the block if the condition is true, or skip the whole block if the condition is false.

#### See also

-   [JavaScript block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block)

---

## Term: Scroll container

-   Glossary
-   scroll container

---

> A **scroll container** is created by applying `overflow: scroll` to a container, or `overflow: auto` when there is enough content to cause overflow.

The scroll container allows the user to scroll through parts of the overflow region that would otherwise be clipped and hidden from view. The visible part of the scroll container is referred to as the _glossary("Scrollport", "scrollport"_).

#### See also

-   [MDN Web Docs Glossary](/en-US/docs/Glossary):

    -   _glossary("Scroll container"_)
    -   _glossary("Scrollport"_)

-   Related CSS Properties:

    -   _cssxref("overflow"_)

---

## Term: Scrollport

-   Glossary
-   scrollport

---

> The **scrollport** is the visual viewport of a _glossary("Scroll container", "scroll container"_) in a document. A scroll container is created by applying `overflow: scroll` to a container, or `overflow: auto` when there is enough content to cause overflow. The scrollport coincides with the padding box of that container and represents the content that can be seen as the box is scrolled.

#### See also

-   [MDN Web Docs Glossary](/en-US/docs/Glossary):

    -   _glossary("Scroll container"_)
    -   _glossary("Scrollport"_)

-   Related CSS Properties:

    -   _cssxref("overflow"_)

---

## Term: SCTP

-   Glossary
-   Infrastructure
-   SCTP
-   WebRTC

---

> **SCTP** (Stream Control Transmission _glossary("Protocol"_)) is an _Glossary("IETF"_) standard for a transport protocol which enables the reliable, in-order transmission of messages while offering congestion control, multi-homing, and other features to improve reliability and stability of the connection. It's used for sending traditional telephone calls over the Internet, but is also used for _Glossary("WebRTC"_) data.

#### See also

-   _RFC(4960, "Stream Control Transmission Protocol"_)
-   _Interwiki("wikipedia", "Stream Control Transmission Protocol"_) on Wikipedia

---

## Term: SDP

-   Advanced
-   Collaborating
-   Glossary
-   Infrastructure
-   Protocol
-   WebRTC

---

> **SDP** (Session Description _glossary("Protocol"_)) is the standard describing a _Glossary("P2P","peer-to-peer"_) connection. SDP contains the _Glossary("codec"_), source address, and timing information of audio and video.

Here is a typical SDP message:

       v=0
       o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
       s=
       c=IN IP4 host.anywhere.com
       t=0 0
       m=audio 49170 RTP/AVP 0
       a=rtpmap:0 PCMU/8000
       m=video 51372 RTP/AVP 31
       a=rtpmap:31 H261/90000
       m=video 53000 RTP/AVP 32
       a=rtpmap:32 MPV/90000

SDP is never used alone, but by protocols like _Glossary("RTP"_) and _Glossary("RTSP"_). SDP is also as component of _Glossary("WebRTC"_), which uses SDP as a way of describing a session.

#### See also

-   [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
-   _Interwiki("wikipedia", "Session Description Protocol"_) on Wikipedia

---

## Term: Search engine

-   Definition
-   Glossary
-   Indexing
-   Search Engine
-   Searching
-   Web Crawling
-   WebMechanics
-   World Wide Web
-   details
-   google

---

> A search engine is a software system that collects information from the _Glossary("World Wide Web"_) and presents it to users who are looking for specific information.

A search engine conducts the following processes:

-   **Web crawling:** Searching web sites by navigating _Glossary("Hyperlink", "Hyperlinks"_) on web pages, both within a site, and from one site to another. A web site owner can exclude areas of the site from being accessed by a search engine's _web crawler_ (or _spider_), by defining "robot exclusion" information in a file named `robots.txt`.
-   **Indexing:** Associating keywords and other information with specific web pages that have been crawled. This enables users to find relevant pages as quickly as possible.
-   **Searching:** Looking for relevant web pages based on queries consisting of key words and other commands to the search engine. The search engine finds the URLs of pages that match the query, and ranks them based on their relevance. It then presents results to the user in order of the ranking.

The most popular search engine is Google. Other top search engines include Yahoo!, Bing, Baidu, and AOL.

#### See also

-   [Web search engine](https://en.wikipedia.org/wiki/Web_search_engine) on Wikipedia
-   [Search engine](https://www.webopedia.com/TERM/S/search_engine.html) on Webopedia
-   [How Internet search engines work](https://computer.howstuffworks.com/internet/basics/search-engine.htm) on How Stuff Works

---

## Term: Second-level Domain

-   Glossary
-   Infrastructure

---

> A Second Level Domain (_Glossary("SLD"_)) is the part of the domain name that is located right before a Top Level Domain (_Glossary("TLD"_)).

For example, in `mozilla.org` the SLD is `mozilla` and the TLD is `org`.

A domain name is not limited to a TLD and an SLD. Additional subdomains can be created in order to provide additional information about various functions of a server or to delimit areas under the same domain. For example, `www` is a commonly used subdomain to indicate the domain points to a web server.

As another example, in `developer.mozilla.org`, the `developer` subdomain is used to specify that the subdomain contains the developer section of the Mozilla website.

#### See also

-   _Interwiki("wikipedia", "Second-level domain", "SLD"_) (Wikipedia)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("DNS"_)
    -   _Glossary("Domain"_)
    -   _Glossary("Domain name"_)
    -   _Glossary("TLD"_)

---

## Term: Secure Context

-   Glossary
-   Security
-   Secure contexts

---

> A **secure context** is a `Window` or `Worker` in which certain minimum standards of authentication and confidentiality are met. Many Web APIs and features are only accessible in secure contexts, reducing the opportunity for misuse by malicious code.

For more information see: [Web > Security > Secure Contexts](/en-US/docs/Web/Security/Secure_Contexts).

---

## Term: Signature (security)

-   Cryptography
-   Glossary
-   Privacy
-   Security

---

> A **signature**, or _digital signature_, is a _glossary("protocol"_) showing that a message is authentic.

From the _glossary("hash"_) of a given message, the **signing process** first generates a digital signature linked to the signing entity, using the entity's private _glossary("key"_).

On receiving the message, the **verification process**

-   _authenticates the sender -_ uses the sender's public key to _glossary("decryption","decrypt"_) the signature and recover the hash, which can only be created with the sender's private key, and
-   _checks message integrity -_ compares the hash with a newly calculated one from the received document (the two hashes will differ if the document has been tampered with)

The system fails if the private key is compromised or the recipient is deceitfully given the wrong public key.

#### See also

-   _Interwiki("wikipedia", "Digital signature"_) on Wikipedia
-   See _glossary("digest"_), _glossary("encryption"_)

---

## Term: Self-Executing Anonymous Function

-   Glossary

---

> A _glossary("JavaScript"_) _glossary("function"_) that runs as soon as it is defined. Also known as an _glossary("IIFE"_) (Immediately Invoked Function Expression).

See the IIFE glossary page linked above for more information.

---

## Term: Semantics

-   CodingScripting
-   Glossary
-   HTML
-   semantics

---

> In programming, **Semantics** refers to the _meaning_ of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)

## Semantics in JavaScript

In JavaScript, consider a function that takes a string parameter, and returns an _htmlelement("li"_) element with that string as its `textContent`. Would you need to look at the code to understand what the function did if it was called `build('Peach')`, or `createLiWithContent('Peach')`?

## Semantics in CSS

In CSS, consider styling a list with `li` elements representing different types of fruits. Would you know what part of the DOM is being selected with `div > ul > li`, or `.fruits__item`?

## Semantics in HTML

In HTML, for example, the _htmlelement("h1"_) element is a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."

```html
<h1>This is a top level heading</h1>
```

By default, most browser's [user agent stylesheet](/en-US/docs/Web/CSS/Cascade#user-agent_stylesheets) will style an _htmlelement("h1"_) with a large font size to make it _look_ like a heading (although you could style it to look like anything you wanted).

On the other hand, you could make any element _look_ like a top level heading. Consider the following:

```html
<span style="font-size: 32px; margin: 21px 0;">Is this a top level heading?</span>
```

This will render it to look like a top level heading, but it has no semantic value, so it will not get any extra benefits as described above. It is therefore a good idea to use the right HTML element for the right job.

HTML should be coded to represent the _data_ that will be populated and not based on its default presentation styling. Presentation (how it should look), is the sole responsibility of [CSS](/en-US/docs/Web/CSS).

Some of the benefits from writing semantic markup are as follows:

-   Search engines will consider its contents as important keywords to influence the page's search rankings (see _glossary("SEO"_))
-   Screen readers can use it as a signpost to help visually impaired users navigate a page
-   Finding blocks of meaningful code is significantly easier than searching through endless `div`s with or without semantic or namespaced classes
-   Suggests to the developer the type of data that will be populated
-   Semantic naming mirrors proper custom element/component naming

When approaching which markup to use, ask yourself, "What element(s) best describe/represent the data that I'm going to populate?" For example, is it a list of data?; ordered, unordered?; is it an article with sections and an aside of related information?; does it list out definitions?; is it a figure or image that needs a caption?; should it have a header and a footer in addition to the global site-wide header and footer?; etc.

## Semantic elements

These are _some_ of the roughly 100 semantic [elements](/en-US/docs/Web/HTML/Element) available:

-   _htmlelement("article"_)
-   _htmlelement("aside"_)
-   _htmlelement("details"_)
-   _htmlelement("figcaption"_)
-   _htmlelement("figure"_)
-   _htmlelement("footer"_)
-   _htmlelement("header"_)
-   _htmlelement("main"_)
-   _htmlelement("mark"_)
-   _htmlelement("nav"_)
-   _htmlelement("section"_)
-   _htmlelement("summary"_)
-   _htmlelement("time"_)

#### See also

-   [HTML element reference](/en-US/docs/Web/HTML/Element#inline_text_semantics) on MDN
-   [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements#problems_solved_by_html5) on MDN
-   _interwiki("wikipedia", "Semantics#Computer_science", "The meaning of semantics in computer science"_) on Wikipedia
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("SEO"_)

-   Semantic elements in HTML:

    -   _htmlelement("article"_)
    -   _htmlelement("aside"_)
    -   _htmlelement("details"_)
    -   _htmlelement("figcaption"_)
    -   _htmlelement("figure"_)
    -   _htmlelement("footer"_)
    -   _htmlelement("header"_)
    -   _htmlelement("main"_)
    -   _htmlelement("mark"_)
    -   _htmlelement("nav"_)
    -   _htmlelement("section"_)
    -   _htmlelement("summary"_)
    -   _htmlelement("time"_)

---

## Term: SEO

-   Glossary
-   Intro
-   SEO
-   Search
-   WebMechanic

---

> **SEO** (Search Engine Optimization) is the process of making a website more visible in search results, also termed improving search rankings.

Search engines _Glossary("Crawler", "crawl"_) the web, following links from page to page, and index the content found. When you search, the search engine displays the indexed content. Crawlers follow rules. If you follow those rules closely when doing SEO for a website, you give the site the best chances of showing up among the first results, increasing traffic and possibly revenue (for ecommerce and ads).

Search engines give some guidelines for SEO, but big search engines keep result ranking as a trade secret. SEO combines official search engine guidelines, empirical knowledge, and theoretical knowledge from science papers or patents.

SEO methods fall into three broad classes:

-   technical
-   -   : Tag the content using semantic _Glossary("HTML"_). When exploring the website, crawlers should only find the content you want indexed.
-   copywriting
    -   : Write content using your visitors' vocabulary. Use text as well as images so that crawlers can understand the subject.
-   popularity
    -   : You get most traffic when other established sites link to your site.

#### See also

-   _Interwiki("wikipedia", "SEO"_) on Wikipedia
-   [Google Search Central](https://developers.google.com/search/docs)

---

## Term: Serialization

-   CodingScripting
-   Glossary
-   JavaScript
-   Serialization

---

> The process whereby an object or data structure is translated into a format suitable for transferral over a network, or storage (e.g. in an array buffer or file format).

In _Glossary("JavaScript"_), for example, you can serialize an object to a _Glossary("JSON"_) _Glossary("string"_) by calling the _Glossary("function"_) _jsxref("JSON.stringify()"_).

_Glossary("CSS"_) values are serialized by calling the function _domxref("CSSStyleDeclaration.getPropertyValue()"_).

#### See also

-   [Serialization](https://en.wikipedia.org/wiki/Serialization) on Wikipedia

---

## Term: Server Timing

-   Glossary
-   Reference
-   Server Timing
-   Web Performance

---

> The [Server Timing specification](https://www.w3.org/TR/server-timing/) enables the server to communicate performance metrics from the request-response cycle to the user agent, and utilizes a JavaScript interface to allow applications to collect, process, and act on these metrics to optimize application delivery.

#### See also

-   <https://www.w3.org/TR/server-timing/>
-   [Resource Timing](https://www.w3.org/TR/resource-timing/)

---

## Term: Server

-   Glossary
-   Infrastructure
-   Networking
-   Protocol
-   Server

---

> A server is a software or hardware offering a service to a user, usually referred to as client. A hardware server is a shared computer on a network, usually powerful and housed in a data center. A software server (often running on a hardware server) is a program that provides services to client programs or a _glossary("UI","user interface"_) to human clients.

Services are provided generally over local area networks or wide area networks such as the internet. A client program and server program traditionally connect by passing messages encoded using a _glossary("protocol"_) over an _glossary("API"_).

For example:

-   An Internet-connected Web server is sending a _glossary("HTML"_) file to your browser software so that you can read this page
-   Local area network server for file, name, mail, print, and fax
-   Minicomputers, mainframes, and super computers at data centers

#### See also

-   [Introduction to servers](/en-US/docs/Learn/Common_questions/What_is_a_web_server)
-   _Interwiki("wikipedia", "Server (computing)"_) on Wikipedia

---

## Term: Session Hijacking

-   Glossary
-   Security
-   session hijacking

---

> **Session hijacking** occurs when an attacker takes over a valid session between two computers. The attacker steals a valid session ID in order to break into the system and snoop data.

Most authentication occurs only at the start of a _glossary("TCP"_) session. In TCP session hijacking, an attacker gains access by taking over a TCP session between two machines in mid session.

![](session_hijacking_3.jpg)

### Session hijacking occurs because

-   no account lockout for invalid session IDs
-   weak session-ID generation algorithm
-   insecure handling
-   indefinite session expiration time
-   short session IDs
-   transmission in plain text

### Session hijacking process

1.  **Sniff**, that is perform a man-in-the-middle (MITM) attack, place yourself between victim and server.
2.  **Monitor** packets flowing between server and user.
3.  **Break** the victim machine's connection.
4.  **Take control** of the session.
5.  **Inject** new packets to the server using the Victim's Session ID.

### Protection against session hijacking

-   create a secure communication channel with SSH (secure shell)
-   pass authentication cookies over HTTPS connection
-   implement logout functionality so the user can end the session
-   generate the session ID after successful login
-   pass encrypted data between the users and the web server
-   use a string or long random number as a session key

#### See also

-   _Interwiki("wikipedia", "Session hijacking"_) on Wikipedia

---

## Term: SGML

-   CodingScripting
-   Composing
-   Glossary
-   SGML

---

> The _Standard Generalized Markup Language_ (**SGML**) is an _Glossary("ISO"_) specification for defining declarative markup languages.

On the web, _Glossary("HTML"_) 4, _Glossary("XHTML"_), and _Glossary("XML"_) are popular SGML-based languages. It is worth noting that since its fifth edition, HTML is no longer SGML-based and has its own parsing rules.

#### See also

-   _Interwiki("wikipedia", "SGML"_) on Wikipedia
-   [Introduction to SGML](https://www.isgmlug.org/)

---

## Term: Shadow tree

-   DOM
-   Glossary
-   Shadow Tree
-   shadow dom

---

> A **shadow tree** is a tree of DOM _Glossary("node", "nodes"_) whose topmost node is a **shadow root**; that is, the topmost node within a **shadow DOM**. A shadow tree is a hidden set of standard DOM nodes which is attached to a standard DOM node that serves as a host. The hidden nodes are not directly visible using regular DOM functionality, but require the use of a special [Shadow DOM API](/en-US/docs/Web/Web_Components/Using_shadow_DOM) to access.

Nodes within the shadow tree are not affected by anything applied outside the shadow tree, and vice versa. This provides a way to encapsulate implementation details, which is especially useful for custom elements and other advanced design paradigms.

#### See also

-   [Using shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM)
-   _domxref("Element.shadowRoot"_) and _domxref("Element.attachShadow()"_)
-   _domxref("ShadowRoot"_)
-   _HTMLElement("slot"_)

---

## Term: Shim

-   CodingScripting
-   Glossary

---

> A **shim** is a piece of code used to correct the behavior of code that already exists, usually by adding new API that works around the problem. This differs from a _Glossary("polyfill"_), which implements a new API that is not supported by the stock browser as shipped.

#### See also

-   _Interwiki("wikipedia", "Shim (computing)", "Shim"_) on Wikipedia

---

## Term: Signature

-   Disambiguation
-   Glossary

---

> The term **signature** can have several meanings depending on the context. It may refer to:

\_GlossaryDisambiguation}}

#### See also

-   _Interwiki("wikipedia", "Signature_(disambiguation)", "Signature"\_) on Wikipedia

---

## Term: SIMD

-   CodingScripting
-   Glossary
-   JavaScript

---

> SIMD (pronounced "sim-dee") is short for **Single Instruction/Multiple Data** which is one _Interwiki("wikipedia","Flynn%27s_taxonomy","classification of computer architectures"_). SIMD allows one same operation to be performed on multiple data points resulting in data level parallelism and thus performance gains — for example, for 3D graphics and video processing, physics simulations or cryptography, and other domains.

See also _Glossary("SISD"_) for a sequential architecture with no parallelism in either the instructions or the data sets.

#### See also

-   _Interwiki("wikipedia", "SIMD"_) on Wikipedia
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("SIMD"_)
    -   _Glossary("SISD"_)

---

## Term: Simple header

-   CORS
-   Glossary
-   HTTP
-   Infrastructure

---

> Old term for _Glossary("CORS-safelisted request header"_).

---

## Term: Simple response header

-   CORS
-   Glossary
-   HTTP

---

> Old term for _Glossary("CORS-safelisted response header"_).

---

## Term: SISD

-   CodingScripting
-   Glossary

---

> SISD is short for **Single Instruction/Single Data** which is one _Interwiki("wikipedia","Flynn%27s_taxonomy","classification of computer architectures"_). In SISD architecture, a single processor executes a single instruction and operates on a single data point in memory.

See also _Glossary("SIMD"_) for a parallel architecture that allows one same operation to be performed on multiple data points.

#### See also

-   _Interwiki("wikipedia", "SISD"_) on Wikipedia

---

## Term: Site map

-   Accessibility
-   Glossary
-   Search
-   Site map

---

> A **site map** or **sitemap** is a list of pages of a web site.

Structured listings of a site's page help with [search engine optimization](/en-US/docs/Glossary/SEO), providing a link for web crawlers such as search engines to follow. Site maps also help users with site navigation by providing an overview of a site's content in a single glance.

---

## Term: Site

-   Glossary
-   Security
-   WebMechanics

---

> The _site_ of a piece of web content is determined by the _registrable domain_ of the host within the origin. This is computed by consulting a _Public Suffix List_ to find the portion of the host which is counted as the _public suffix_ (e.g. `com`, `org` or `co.uk`).

The concept of a _site_ is used in [SameSite cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie#directives), as well as a web application's [Cross-Origin Resource Policy](</en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>).

## Examples

These are the same site because the registrable domain of _mozilla.org_ is the same (different host and files path don't matter):

-   `https://developer.mozilla.org/en-US/docs/`
-   `https://support.mozilla.org/en-US/`

These are the same site because scheme and port are not relevant:

-   `http://example.com:8080`
-   `https://example.com`

These are not same site because the registrable domain of the two URLs differs:

-   `https://developer.mozilla.org/en-US/docs/`
-   `https://example.com`

#### See also

-   [What is a URL](/en-US/docs/Learn/Common_questions/What_is_a_URL)
-   _Glossary("Origin"_)
-   [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)

---

## Term: SLD

-   Glossary
-   Infrastructure

---

> An SLD ([Second Level Domain](/en-US/docs/Glossary/Second-level_Domain)) is the part of the domain name that is located right before a _Top Level Domain_ (_Glossary("TLD"_)). For example, in `mozilla.org` the SLD is `mozilla` and the TLD is `org`.

See [Second Level Domain](/en-US/docs/Glossary/Second-level_Domain) for more information.

---

## Term: Sloppy mode

-   CodingScripting
-   Glossary
-   JavaScript
-   Sloppy

---

> _Glossary("ECMAScript"_) 5 and later let scripts opt in to a new [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), which alters the semantics of JavaScript in several ways to improve its resiliency and which make it easier to understand what's going on when there are problems.

The normal, non-strict mode of JavaScript is sometimes referred to as **sloppy mode**. This isn't an official designation, but you are likely to come across it if you spend time doing serious JavaScript code.

#### See also

-   "[Strict Mode](http://speakingjs.com/es5/ch07.html#strict_mode)" in chapter 7 ("JavaScript Syntax") in the book Speaking _JavaScript_.

---

## Term: Slug

-   Community
-   Glossary
-   Intermediate
-   MDN
-   URL
-   Web

---

> A Slug is the unique identifying part of a web address, typically at the end of the URL. In the context of MDN, it is the portion of the URL following "_\<locale>/docs/_".

#### See also

---

## Term: Smoke Test

-   Composing
-   Glossary
-   Intro
-   QA
-   Testing

---

> A smoke test consists of functional or unit tests of critical software functionality. Smoke testing comes before further, in-depth testing.

Smoke testing answers questions like

-   "Does the program start up correctly?"
-   "Do the main control buttons function?"
-   "Can you save a simple blank new test user account?"

If this basic functionality fails, there is no point investing time in more detailed QA work at this stage.

#### See also

-   _Interwiki("wikipedia", "Smoke testing (software)"_) on Wikipedia

---

## Term: SMPTE (Society of Motion Picture and Television Engineers)

-   Engineers
-   Glossary
-   Motion Picture
-   Movies
-   SMPTE
-   Specifications
-   Television
-   standards

---

> The **Society of Motion Picture and Television Engineers** (**[SMPTE](https://www.smpte.org/)**) is the professional association of engineers and scientists that develop and define standards and technologies used to create, broadcast, store, and present entertainment media.

For example, SMPTE defines the standards used for digital cinema used by modern digital movie theaters.

---

## Term: SMTP

-   Beginner
-   Collaboration
-   Glossary
-   Infrastructure
-   Sharing

---

> **SMTP** (Simple Mail Transfer Protocol) is a _glossary("protocol"_) used to send a new email. Like _glossary("POP"_) and _glossary("NNTP"_), it is a _Glossary("state machine"_)-driven protocol.

The protocol is relatively straightforward. Primary complications include supporting various authentication mechanisms ([GSSAPI](https://en.wikipedia.org/wiki/Generic_Security_Services_Application_Program_Interface), [CRAM-MD5](https://en.wikipedia.org/wiki/CRAM-MD5), [NTLM](https://en.wikipedia.org/wiki/NTLM), MSN, AUTH LOGIN, AUTH PLAIN, etc.), handling error responses, and falling back when authentication mechanisms fail (e.g., the server claims to support a mechanism, but doesn't).

#### See also

-   _Interwiki("wikipedia", "SMTP"_) (Wikipedia)
-   [Glossary](/en-US/docs/Glossary)

    -   _glossary("NNTP"_)
    -   _glossary("POP"_)
    -   _glossary("protocol"_)
    -   _Glossary("state machine"_)

---

## Term: Snap positions

-   Glossary
-   snap positions

---

> A [scroll container](/en-US/docs/Glossary/Scroll_container) may set **snap positions** — points that the [scrollport](/en-US/docs/Glossary/Scrollport) will stop moving at after a scrolling operation is completed. This allows a scrolling experience that gives the effect of paging through content rather than needing to drag content into view.

Defining Snap positions on the scroll container was introduced in the [CSS Scroll Snap specification](/en-US/docs/Web/CSS/CSS_Scroll_Snap).

---

## Term: SOAP

-   Glossary
-   Infrastructure
-   SOAP
-   WebMechanics

---

> **SOAP** (Simple Object Access Protocol) is a _glossary('protocol'_) for transmitting data in _glossary('XML'_) format.

#### See also

-   _Interwiki("wikipedia", "SOAP"_) on Wikipedia
-   [Specification](https://www.w3.org/TR/soap12-part1/)

---

## Term: SPA (Single-page application)

-   Glossary
-   SPA
-   single-page app

---

> An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as _domxref("XMLHttpRequest"_) and [Fetch](/en-US/docs/Web/API/Fetch_API) when different content is to be shown.

This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.

#### See also

-   _Interwiki("wikipedia", "Single-page application"_) (Wikipedia)
-   [Understanding client-side JavaScript frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("API"_)
    -   _Glossary("AJAX"_)
    -   _Glossary("JavaScript"_)

-   Popular SPA frameworks:

    -   [React](https://reactjs.org/)
    -   [Angular](https://angular.io/)
    -   [Vue.JS](https://vuejs.org/)

---

## Term: Specification

-   Glossary
-   OpenPractices
-   Standardization

---

> A **specification** is a document that lays out in detail what functionality or attributes a product must include before delivery. In the context of describing the Web, the term "specification" (often shortened to "spec") generally means a document describing a language, technology, or _Glossary("API"_) which makes up the complete set of open Web technologies.

#### See also

-   _Interwiki("wikipedia", "Specification"_) on Wikipedia

---

## Term: Speculative parsing

-   Advanced
-   HTML
-   HTML5
-   NeedsUpdate
-   Web Development
-   Web Performance

---

> Traditionally in browsers the HTML parser ran on the main thread and was blocked after a `</script>` tag until the script has been retrieved from the network and executed. Some HTML parser, such as Firefox since Firefox 4, support speculative parsing off of the main thread. It parses ahead while scripts are being downloaded and executed. The HTML parser starts speculative loads for scripts, style sheets and images it finds ahead in the stream and runs the HTML tree construction algorithm speculatively. The upside is that when a speculation succeeds, there's no need to reparse the part of the incoming file that was already scanned for scripts, style sheets and images. The downside is that there's more work lost when the speculation fails.

This document helps you avoid the kind of things that make speculation fail and slow down the loading of your page.

To make speculative loads of linked scripts, style sheets and images successful, avoid _domxref('document.write'_). If you use a `<base>` element to override the base URI of your page, put the element in the non-scripted part of the document. Don't add it via `document.write()` or _domxref('document.createElement'_).

## Avoiding losing tree builder output

Speculative tree building fails when `document.write()` changes the tree builder state such that the speculative state after the `</script>` tag no longer holds when all the content inserted by `document.write()` has been parsed. However, only unusual uses of `document.write()` cause trouble. Here are the things to avoid:

-   Don't write unbalanced trees. `<script>document.write("<div>");</script>` is bad. `<script>document.write("<div>
</div>");</script>` is OK.
-   Don't write an unfinished token. `<script>document.write("<div> </div");</script>` is bad.
-   Don't finish your writing with a carriage return. `<script>document.write("Hello World!\r");</script>` is bad. `<script>document.write("Hello World!\n");</script>` is OK.
-   Don't format part of a table. `<table>
    <script>document.write("<tr>
    <td>Hello World!</td>
    </tr>");</script>
    </table>` is bad.

---

## Term: Speed index

-   Glossary
-   Performance
-   Reference
-   Web Performance

---

> **Speed Index** (SI) is a page load performance metric that shows you how quickly the contents of a page are visibly populated. It is the average time at which visible parts of the page are displayed. Expressed in milliseconds, and dependent on the size of the viewport, the lower the score, the better.

![Calculation of SpeedIndex](speedindex.png)

The calculation calculates what percent of the page is visually complete at every 100ms interval until the page is visually complete. The overall score, the above the fold metric, is a sum of the individual 10 times per second intervals of the percent of the screen that is not-visually complete**.**

#### See also

-   [Learn web performance](/en-US/docs/Learn/Performance)

---

## Term: SQL Injection

-   Glossary
-   Security
-   Sql
-   Sql Injection
-   Webapp

---

> SQL injection takes advantage of Web apps that fail to validate user input. Hackers can maliciously pass SQL commands through the Web app for execution by a backend database.

SQL injection can gain unauthorized access to a database or to retrieve information directly from the database. Many data breaches are due to SQL injection.

[![](sql_inj_xss.gif)](https://www.acunetix.com/wp-content/uploads/2010/09/sql_inj_xss.gif)

## How It Works

![](updates_loginscreen.png)

After entering username and password, behind the GUI the SQL queries work as follows:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Now suppose User enters the User## Term: admin and Password: passwd123, so after clicking on the Log in button, SQL query will run as follows:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

If the credentials are correct, then the user is allowed to log in, so it's a very simple (and therefore insecure) mechanism. Hackers use this insecurity to gain unauthorized access.

Hackers use a simple string called a Magical String, for example:

**User## Term: _admin_**

**Password: _anything 'or'1'='1_**

After clicking on the login button, the SQL query will work as follows:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Just take a closer look at the above query's password section.

    Password=' anything 'or'1'='1 '

The password is not 'anything', hence password=anything results in FALSE, but '1'='1' is a TRUE statement and hence returns a TRUE value. Finally, due to the OR operator, the value ( FALSE OR TRUE ) is TRUE, so authentication bypasses successfully. Just due to a simple string (Magical String) the entire database is compromised.

## How To Prevent

Before executing the queries for the user credentials, make some changes like the following:

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

So due to (1) each single quote (') in the input string is replaced with double quotes ("), and due to (2) before every (') it adds (/). The revised magical string fails to bypass the authentication, and your database stays secure.

#### See also

-   _Interwiki("wikipedia", "SQL injection"_) on Wikipedia
-   [Explanation of SQL injection ](https://www.owasp.org/index.php/SQL_Injection)on OWASP (Open Web Application Security Project)

---

## Term: SQL

-   CodingScripting
-   Database
-   Glossary
-   Sql

---

> **SQL** (Structured Query Language) is a descriptive computer language designed for updating, retrieving, and calculating data in table-based databases.

#### See also

-   _Interwiki("wikipedia", "SQL"_) on Wikipedia
-   [Learn SQL on sqlzoo.net](https://sqlzoo.net/wiki/SQL_Tutorial)
-   [Tutorials Point](https://www.tutorialspoint.com/sql/)

---

## Term: SRI

-   CSP
-   Security

---

> **Subresource Integrity** (SRI) is a security feature that enables browsers to verify that files they fetch (for example, from a _Glossary("CDN"_)) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched file must match.

#### See also

-   [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity)
-   _HTTPHeader("Content-Security-Policy"_): _CSP("require-sri-for"_)

---

## Term: Secure Sockets Layer (SSL)

-   Glossary
-   SSL
-   Security
-   TLS
-   Web Performance

---

> Secure Sockets Layer, or SSL, was the old standard security technology for creating an encrypted network link between a server and client, ensuring all data passed is private and secure. The current version of SSL is version 3.0, released by Netscape in 1996, and has been superseded by the _Glossary("TLS", "Transport Layer Security (TLS)"_) protocol.

#### See also

-   _Interwiki("wikipedia", "Transport Layer Security"_) (Wikipedia)
-   [Transport Layer Security (TLS) protocol](/en-US/docs/Web/Security/Transport_Layer_Security)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("HTTPS"_)
    -   _Glossary("TLS"_)

---

## Term: Stacking context

-   CSS
-   CodingScripting
-   Glossary

---

> **Stacking context** refers to how elements on a webpage appear to sit on top of other elements, just as you can arrange index cards on your desk to lie side-by-side or overlap each other.

#### See also

-   [Further explanation and example](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

---

## Term: State machine

-   CodingScripting
-   Finite
-   Glossary
-   Input
-   Mealy
-   Moore
-   State Machine
-   Turing Machine

---

> A state machine is a mathematical abstraction used to design algorithms. A state machine reads a set of inputs and changes to a different state based on those inputs.

A state is a description of the status of a system waiting to execute a transition. A transition is a set of actions to execute when a condition is fulfilled or an event received. In a state diagram, circles represent each possible state and arrows represent transitions between states.

Looking at the final state, you can discern something about the series of inputs leading to that state.

There are two types of basic state machines:

-   deterministic finite state machine
-   -   : This kind allows only one possible transition for any allowed input. This is like the "if" _Glossary("statement"_) in that `if x == true then doThis else doThat` is not possible. The computer must perform _one_ of the two options.
-   non-deterministic finite state machine
    -   : Given some state, an input can lead to more than one different state.

_Figure 1: Deterministic Finite State Machine_

![](statemachine1.png)

In _Figure 1_, the state begins in State 1; the state changes to State 2 given input 'X', or to State 3 given input 'Y'.

_Figure 2: Non-Deterministic Finite State Machine_

[![](statemachine2.png)](http://postimg.org/image/mpq3nz82h/)

In _Figure 2_, given input 'X', the state can persist or change to State 2.

Note that any _Glossary("regular expression"_) can be represented by a state machine.

#### See also

-   _Interwiki("wikipedia", "Finite-state machine"_) on Wikipedia
-   _Interwiki("wikipedia", "UML state machine"_) on Wikipedia
-   _Interwiki("wikipedia", "Moore machine"_) on Wikipedia
-   _Interwiki("wikipedia", "Mealy machine"_) on Wikipedia

---

## Term: Statement

-   Beginner
-   CodingScripting
-   Glossary

---

> In a computer programming language, a **statement** is a line of code commanding a task. Every program consists of a sequence of statements.

#### See also

-   _Interwiki("wikipedia", "Statement (computer science)"_) on Wikipedia
-   [JavaScript statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)

---

## Term: Static method

-   CodingScripting
-   Glossary
-   JavaScript
-   Method
-   Static
-   Static Method

---

> A static method (or _static function_) is a _Glossary("method"_) defined as a member of an _Glossary("object"_) but is accessible directly from an API object's constructor, rather than from an object instance created via the constructor.

In a [Web API](/en-US/docs/Web/API), a static method is one which is defined by an interface but can be called without instantiating an object of that type first.

Methods called on object instances are called _instance methods_.

## Examples

In the [Notifications API](/en-US/docs/Web/API/Notifications_API), the _domxref("Notification.requestPermission()"_) method is called on the actual _domxref("Notification"_) constructor itself — it is a static method:

```js
//
let promise = Notification.requestPermission();
```

The _domxref("Notification.close()"_) method on the other hand, is an instance method — it is called on an specific notification object instance to close the system notification it represents:

```js
//
let myNotification = new Notification('This is my notification');

myNotification.close();
```

#### See also

-   [Static Method](https://www.techopedia.com/definition/24034/static-method) on Techopedia
-   [static](/en-US/docs/Web/JavaScript/Reference/Classes/static)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Object"_)
    -   _Glossary("Method"_)

---

## Term: Static typing

-   CodingScripting
-   Glossary
-   Type

---

> A **statically-typed** language is a language (such as Java, C, or C++) where variable types are known at compile time. In most of these languages, types must be expressly indicated by the programmer; in other cases (such as OCaml), type inference allows the programmer to not indicate their variable types.

#### See also

-   _Interwiki("wikipedia", "Type system"_) on Wikipedia

---

## Term: Strict mode

-   Glossary
-   JavaScript
-   Reference

---

> JavaScript's **strict mode** is a way to _opt in_ to a restricted variant of JavaScript, thereby implicitly opting-out of "_Glossary("Sloppy_mode", "sloppy mode"_)". Strict mode isn't just a subset: it _intentionally_ has different semantics from normal code.

Strict mode for an entire script is invoked by including the statement `"use strict";` before any other statements.

#### See also

-   [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
-   [Transitioning to strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Sloppy mode"_)

---

## Term: Stringifier

-   CodingScripting
-   Glossary
-   Stringifier

---

> An _Glossary("object", "object's"_) stringifier is any _Glossary("attribute"_) or _Glossary("method"_) that is defined to provide a textual representation of the object for use in situations where a _Glossary("string"_) is expected.

#### See also

-   Stringifiers in [Information contained in a WebIDL file](/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file#stringifier)

---

## Term: String

-   Beginner
-   CodingScripting
-   Glossary
-   String

---

> In any computer programming language, a string is a sequence of _Glossary("character","characters"_) used to represent text.

In _Glossary("JavaScript"_), a String is one of the _Glossary("Primitive", "primitive values"_) and the _jsxref("String"_) object is a _Glossary("wrapper"_) around a String primitive.

#### See also

-   _Interwiki("wikipedia", "String (computer science)"_) on Wikipedia
-   [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures#string_type)

---

## Term: STUN

-   Glossary
-   Infrastructure
-   STUN
-   WebMechanics
-   WebRTC

---

> **STUN** (Session Traversal Utilities for NAT) is an auxiliary protocol for transmitting data around a _glossary("NAT"_) (Network Address Translator). STUN returns the _glossary("IP address"_), _glossary("port"_), and connectivity status of a networked computer behind a NAT.

#### See also

-   _Interwiki("wikipedia", "STUN"_) on Wikipedia
-   [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)

### Technical reference

-   [Specification](https://datatracker.ietf.org/doc/html/rfc5389)

---

## Term: Style origin

-   CSS
-   Glossary
-   Style
-   Style Origin
-   origin

---

> In _Glossary("CSS"_), there are three categories of sources for style changes. These categories are called **style origins**. They are the **user agent origin**, **user origin**, and the **author origin**.

-   User-agent origin
-   -   : The user agent origin is the style origin comprised of the default styles used by the user's web browser. If no other styles are applied to content, the user agent origin's styles are used while rendering elements.
-   User origin
    -   : The user origin is the style origin containing any CSS that the user of the web browser has added. These may be from adding styles using a developer tool or from a browser extension that automatically applies custom styles to content, such as [Stylus](https://add0n.com/stylus.html) or [Stylish](https://userstyles.org/).
-   Author origin
    -   : The author origin is the style origin which contains all of the styles which are part of the document, whether embedded within the _Glossary("HTML"_) or loaded from an external stylesheet file.

The style origins are used to determine where to stop rolling back (or backtracking through) the cascade of styles that have been applied to an element when removing styles, such as when using the _cssxref("unset"_) or _cssxref("revert"_) keywords.

#### See also

-   [CSS Cascading and Inheritance: Cascading Origins](https://drafts.csswg.org/css-cascade-4/#cascading-origins)

---

## Term: Stylesheet

-   Glossary
-   StyleSheet

---

> A **stylesheet** is a set of CSS rules used to control the layout and design of a webpage or document. _Internal_ stylesheets are placed inside a _htmlelement("style"_) element inside the _htmlelement("head"_) of a web document, and _external_ stylesheets are placed inside a separate `.css` file, which is applied to a document by referencing the file inside a _htmlelement("link"_) element in the document's head.

External stylesheets are generally preferred because they allow you to control the styling of multiple pages from a single place, rather than having to repeat the CSS across each page.

#### See also

-   [CSS first steps](/en-US/docs/Learn/CSS/First_steps)
-   Stylesheets on [Wikipedia](<https://en.wikipedia.org/wiki/Style_sheet_(web_development)>)

---

## Term: SVG

-   Beginner
-   CodingScripting
-   Glossary
-   Graphics
-   SVG
-   l10n:priority

---

> _Scalable Vector Graphics_ (**SVG**) is a 2D vector image format based on an _Glossary("XML"_) syntax.

The _Glossary("W3C"_) began work on SVG in the late 1990s, but SVG only became popular when _Glossary("Microsoft Internet Explorer", "Internet Explorer"_) 9 came out with SVG support. All major _Glossary("browser","browsers"_) now support SVG.

As a [vector image format](https://en.wikipedia.org/wiki/Vector_graphics), SVG graphics can scale infinitely, making them invaluable in _Glossary("responsive web design", "responsive design"_), since you can create interface elements and graphics that scale to any screen size. SVG also provides a useful set of tools, such as clipping, masking, filters, and animations.

#### See also

-   _Interwiki("wikipedia", "SVG"_) on Wikipedia
-   [W3.org's SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html)
-   [SVG documentation on MDN](/en-US/docs/Web/SVG)
-   [Latest SVG specification](https://www.w3.org/TR/SVG/)

---

## Term: SVN

-   Collaborating
-   Glossary

---

> Apache Subversion (**SVN**) is a free source control management (_Glossary("SCM"_)) system. It allows developers to keep a history of text and code modifications. Although SVN can also handle binary files, we do not recommend that you use it for such files.

#### See also

-   _Interwiki("wikipedia", "Apache Subversion"_) on Wikipedia
-   [Official website](https://subversion.apache.org/)

---

## Term: Symbol

-   Data Type
-   ECMAScript 2015
-   Glossary
-   JavaScript
-   Sharing
-   Symbol

---

> In _Glossary("JavaScript"_), Symbol is a _Glossary("Primitive", "primitive value"_).

A value having the data type **Symbol** can be referred to as a "Symbol value". In a JavaScript runtime environment, a symbol value is created by invoking the function _jsxref("Symbol"_), which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

Symbol can have an optional description, but for debugging purposes only.

A **Symbol** value represents a unique identifier. For example:

```js
//
// Here are two symbols with the same description:
let Sym1 = Symbol('Sym');
let Sym2 = Symbol('Sym');

console.log(Sym1 === Sym2); // returns "false"
// Symbols are guaranteed to be unique.
// Even if we create many symbols with the same description,
// they are different values.
```

> **Note:** If you are familiar with Ruby (or another language) that also has a feature called _"symbols"_, please don't be misled. JavaScript symbols are different.

_Symbol_ type is a new feature in ECMAScript 2015. There is no ECMAScript 5 equivalent for Symbol.

In some programming languages, the symbol data type is referred to as an "atom."

### Symbols don't "Auto-Convert" to strings

Most values in JavaScript support implicit conversion to a string. For instance, we can `alert` almost any value, and it will work. Symbols are special. They don't auto-convert.

For example:

```js
//
let Sym = Symbol('Sym');
alert(Sym); // TypeError: Cannot convert a Symbol value to a string
```

That's a "language guard" against messing up, because strings and symbols are fundamentally different, and should not occasionally convert one into another.

If you really want to show a symbol, we need to call `.toString()` on it.

```js
//
let Sym = Symbol('Sym');
alert(Sym.toString()); // Symbol(Sym), now it works
```

Or you can use the `symbol.description` property to get its description:

```js
//
let _Sym = Symbol('Sym');

alert(_Sym.description); // Sym
```

### Well-known symbols

The _jsxref("Symbol"_) class has constants for so-called _well-known symbols_. These symbols let you configure how JS treats an object, by using them as property keys.

Examples of well-known symbols are: _jsxref("Symbol.iterator"_) for array-like objects, or _jsxref("Symbol.search"_) for string objects.

They are listed in the specification in the [Well-known symbols](https://tc39.github.io/ecma262/#sec-well-known-symbols) table:

-   `Symbol.hasInstance`
-   `Symbol.isConcatSpreadable`
-   `Symbol.iterator`
-   `Symbol.toPrimitive`
-   …and so on.

### Global symbol registry

There is a global symbol registry holding all available symbols. The methods that access the registry are _jsxref("Symbol.for()"_) and _jsxref("Symbol.keyFor()"_); these mediate between the global symbol table (or "registry") and the run-time environment. The global symbol registry is mostly built by JavaScript's compiler infrastructure, and the global symbol registry's content is not available to JavaScript's run-time infrastructure, except through these reflective methods.

The method `Symbol.for(tokenString)` returns a symbol value from the registry, and `Symbol.keyFor(symbolValue)` returns a token string from the registry; each is the other's inverse, so the following is `true`:

```js
//
Symbol.keyFor(Symbol.for('tokenString')) === 'tokenString'; // true
```

#### See also

-   _Interwiki("wikipedia", "Symbol (programming)"_) on Wikipedia
-   [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
-   [Symbols in ECMAScript 6](https://2ality.com/2014/12/es6-symbols.html)
-   _jsxref("Symbol"_) in the MDN JS reference
-   _jsxref("Object.getOwnPropertySymbols()"_)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("JavaScript"_)
    -   _Glossary("Primitive"_)

---

## Term: Symmetric-key cryptography

-   Cryptography
-   Glossary
-   Security
-   Symmetric-key cryptography

---

> Symmetric-key cryptography is a term used for cryptographic algorithms that use the same key for encryption and for decryption. The key is usually called a "symmetric key" or a "secret key".

This is usually contrasted with _Glossary("public-key cryptography"_), in which keys are generated in pairs and the transformation made by one key can only be reversed using the other key.

Symmetric-key algorithms should be secure when used properly and are highly efficient, so they can be used to encrypt large amounts of data without having a negative effect on performance.

Most symmetric-key algorithms currently in use are block ciphers: this means that they encrypt data one block at a time. The size of each block is fixed and determined by the algorithm: for example _Glossary("AES"_) uses 16-byte blocks. Block ciphers are always used with a \__Glossary("Block cipher mode of operation", "mode"_)\_, which specifies how to securely encrypt messages that are longer than the block size. For example, AES is a cipher, while CTR, CBC, and GCM are all modes. Using an inappropriate mode, or using a mode incorrectly, can completely undermine the security provided by the underlying cipher.

#### See also

-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("Block cipher mode of operation"_)
    -   _Glossary("Cryptography"_)
    -   _Glossary("Cryptographic hash function"_)
    -   _Glossary("Symmetric-key cryptography"_)

---

## Term: Synchronous

-   Glossary
-   Web
-   WebMechanics

---

> _Synchronous_ refers to real-time communication where each party receives (and if necessary, processes and replies to) messages instantly (or as near to instantly as possible).

A human example is the telephone — during a telephone call you tend to respond to another person immediately.

Many programming commands are also synchronous — for example when you type in a calculation, the environment will return the result to you instantly, unless you program it not to.

#### See also

-   _glossary("Asynchronous"_)
-   [Synchronous and asynchronous requests](/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) using the [XMLHttpRequest()](/en-US/docs/Web/API/XMLHttpRequest) _glossary("API"_)

---

## Term: Syntax error

-   CodingScripting
-   Glossary
-   JavaScript

---

> An _Glossary("exception"_) caused by the incorrect use of a pre-defined _Glossary("syntax"_). Syntax errors are detected while compiling or parsing source code.

For example, if you leave off a closing brace (`}`) when defining a _Glossary("JavaScript"_) function, you trigger a syntax error. Browser development tools display _Glossary("JavaScript"_) and _Glossary("CSS"_) syntax errors in the console.

#### See also

-   _Interwiki("wikipedia", "Syntax error"_) on Wikipedia
-   _jsxref("SyntaxError"_) JavaScript object

---

## Term: Syntax

-   CodingScripting
-   Glossary
-   Syntax

---

> Syntax specifies the required combination and sequence of _Glossary("character","characters"_) making up correctly structured code. Syntax generally includes grammar and the rules that apply to writing it, such as indentation requirements in Python.

Syntax varies from language to language (e.g., syntax is different in _Glossary("HTML"_) and _Glossary("JavaScript"_)). Although languages can share few similarities in terms of their syntaxes for example "operand operator operand" rule in javaScript and python. This does not mean the two languages share similarities with syntax.

Syntax applies both to programming languages (commands to the computer) and markup languages (document structure information) alike.

Syntax only governs ordering and structure; the instructions must also be _meaningful_, which is the province of _Glossary("semantics"_).

Code must have correct syntax in order to _Glossary("compile"_) correctly, otherwise a _Glossary("syntax error"_) occurs. Even small errors, like a missing parenthesis, can stop source code from compiling successfully.

Frameworks are said to have a "clean" syntax if they produce simple, readable, concise results. If a codebase uses "a lot of syntax", it requires more characters to achieve the same functionality.

#### See also

-   _Interwiki("wikipedia", "Syntax (programming languages)"_) on Wikipedia

---

## Term: Synthetic monitoring

-   Glossary
-   RUM
-   Reference
-   Synthetic monitoring
-   Web Performance

---

> **Synthetic monitoring** involves monitoring the performance of a page in a 'laboratory' environment, typically with automation tooling in an environment that is as consistent as possible.

With a consistent baseline, synthetic monitoring is good for measuring the effects of code changes on performance. However, it doesn't necessarily reflect what users are experiencing.

Synthetic Monitoring involves deploying scripts to simulate the path an end-user might take through a web application, reporting back the performance of the simulator experiences. Examples of popular synthetic monitoring tools include [WebPageTest](https://webpagetest.org) and [Lighthouse](https://developers.google.com/web/tools/lighthouse/). The traffic measured is not of your actual users, but rather synthetically generated traffic collecting data on page performance.

Unlike [RUM](/en-US/docs/Glossary/Real_User_Monitoring), synthetic monitoring provides a narrow view of performance that doesn't account for user differences, making it useful in getting basic data about an application's performance and spot-checking performance in development environments. Combined with other tools, such as network throttling, can provide excellent insight into potential problem areas.

#### See also

-   [Real User Monitoring (RUM)](/en-US/docs/Glossary/Real_User_Monitoring)
-   [Real User Monitoring (RUM) versus Synthetic Monitoring](/en-US/docs/Web/Performance/Rum-vs-Synthetic)
-   [Beacon](/en-US/docs/Glossary/beacon)

---

## Term: Table Grid Box

-   Glossary
-   CSS
-   Tables

---

> The **Table Grid Box** is a block level box which contains all of the table internal boxes, excluding the caption. The box which includes the caption is referred to as the [Table Wrapper Box](/en-US/docs/Glossary/Table_Wrapper_Box).

---

## Term: Table Wrapper Box

-   Glossary
-   CSS
-   Tables

---

> The **Table Wrapper Box** is the box generated around [table grid boxes](/en-US/docs/Glossary/Table_Grid_Box) which accounts for the space needed for any caption displayed for the table. This box will become the containing block for absolutely positioned items where the table is the containing block.

---

## Term: Tag

-   CodingScripting
-   Glossary
-   HTML
-   Intro

---

> In _Glossary("HTML"_), a **tag** is used for creating an _Glossary("element"_).

The name of an HTML element is the name used in angle brackets such as `<p>` for paragraph. Note that the end tag's name is preceded by a slash character, `</p>`, and that in _glossary("empty element", "empty elements"_), the end tag is neither required nor allowed. If _Glossary("attribute", "attributes"_) are not mentioned, default values are used in each case.

#### See also

-   _Interwiki("wikipedia", "HTML element"_) on Wikipedia
-   [HTML elements syntax](https://html.spec.whatwg.org/multipage/syntax.html#elements-2) on _glossary("WHATWG"_)
-   [Introduction to HTML](/en-US/docs/Learn/HTML/Introduction_to_HTML)

---

## Term: TCP handshake

-   Glossary
-   Networking
-   SSL
-   Security
-   TCP
-   TCP handshake
-   TLS
-   Web Performance

---

> _glossary('Transmission Control Protocol (TCP)','TCP (Transmission Control Protocol)'_) uses a **three-way handshake** (aka TCP-handshake, three message handshake, and/or SYN-SYN-ACK) to set up a TCP/IP connection over an IP based network.

The three messages transmitted by TCP to negotiate and start a TCP session are nicknamed SYN, _SYN-ACK_, and ACK for **SYN**chronize, **SYN**chronize-**ACK**nowledgement, and **ACK**nowledge respectively. The three message mechanism is designed so that two computers that want to pass information back and forth to each other can negotiate the parameters of the connection before transmitting data such as HTTP browser requests.

The host, generally the browser, sends a TCP SYNchronize packet to the server. The server receives the SYN and sends back a SYNchronize-ACKnowledgement. The host receives the server's SYN-ACK and sends an ACKnowledge. The server receives ACK and the TCP socket connection is established.

This handshake step happens after a _glossary('DNS', 'DNS lookup'_) and before the _glossary('TLS'_) handshake, when creating a secure connection. The connection can be terminated independently by each side of the connection via a four-way handshake.

#### See also

-   [Transport Layer Security (TLS) protocol](/en-US/docs/Web/Security/Transport_Layer_Security)
-   _Glossary("HTTPS"_)
-   _Interwiki("wikipedia", "Transport Layer Security"_) on Wikipedia

---

## Term: TCP slow start

-   Glossary
-   Infrastructure
-   Networking
-   TCP
-   Transmission Control Protocol
-   Web Performance
-   data

---

> _glossary('TCP'_) slow start helps buildup transmission speeds to the network's capabilities. It does this without initially knowing what those capabilities are and without creating congestion. _glossary('TCP'_) slow start is an algorithm used to detect the available bandwidth for packet transmission, and balances the speed of a network connection. It prevents the appearance of network congestion whose capabilities are initially unknown, and slowly increases the volume of information diffused until the network's maximum capacity is found.

To implement TCP slow start, the congestion window (_cwnd_) sets an upper limit on the amount of data a source can transmit over the network before receiving an acknowledgment (ACK). The slow start threshold (_ssthresh_) determines the (de)activation of slow start. When a new connection is made, cwnd is initialized to one TCP data or acknowledgment packet, and waits for an acknowledgement, or ACK. When that ACK is received, the congestion window is incremented until the _cwnd_ is greater than _ssthresh_. Slow start also terminates when congestion is experienced.

## Congestion control

Congestion itself is a state that happens within a network layer when the message traffic is too busy it slows the network response time. The server sends data in TCP packets, the user's client then confirms delivery by returning acknowledgements, or ACKs. The connection has a limited capacity depending on hardware and network conditions. If the server sends too many packets too quickly, they will be dropped. Meaning, there will be no acknowledgement. The server registers this as missing ACKs. Congestion control algorithms use this flow of sent packets and ACKs to determine a send rate.

#### See also

-   [Populating the page: how browsers work](/en-US/docs/Web/Performance/How_browsers_work)
-   [http overview](/en-US/docs/Web/HTTP/Overview)

---

## Term: TCP

-   Glossary
-   Infrastructure
-   Networking
-   TCP
-   Transmission Control Protocol
-   data

---

> **TCP (Transmission Control Protocol)** is an important network _Glossary("protocol"_) that lets two hosts connect and exchange data streams. TCP guarantees the delivery of data and packets in the same order as they were sent. Vint Cerf and Bob Kahn, who were DARPA scientists at the time, designed TCP in the 1970s.

TCP's role is to ensure the packets are reliably delivered, error free. TCP has concurrence control, which means the initial requests start small, increasing in size to the levels of bandwidth the computers, servers, and network can support.

#### See also

-   _Interwiki("wikipedia", "Transmission Control Protocol"_) (Wikipedia)
-   [HTTP Overview](/en-US/docs/Web/HTTP/Overview)
-   [How browsers work](/en-US/docs/Web/Performance/How_browsers_work)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("IPv4"_)
    -   _Glossary("IPv6"_)
    -   _Glossary("Packet"_)

---

## Term: Telnet

-   Glossary
-   Infrastructure

---

> **Telnet** is a command line tool and an underlying TCP/IP protocol for accessing remote computers.

#### See also

-   _interwiki('wikipedia','Telnet'_) on Wikipedia

---

## Term: Texel

-   3D
-   Drawing
-   Glossary
-   Graphics
-   Texel
-   Texture

---

> A **Texel** is a single-pixel within a texture map, which is an image that gets used (in whole or in part) as the image presented on a polygon's surface within a 3D rendered image. It is not to be confused with pixel which is the unit of screen space. This is one of the main differences between Texel's and pixels, pixels are image data. Texel components are made up of subjective data, therefore they can be an image as well as a depth map.

The process of mapping the appropriate Texel's to their corresponding points on a polygon is called **texture mapping**, which is a stage of the process of rendering a 3D image for display. Texture mapping is typically done prior to lighting the scene; however, in WebGL, lighting is performed as part of the texture mapping process.

Textures are characterised by collections of Texel's, as how images are characterised by collections of pixels. When texture mapping occurs the renderer maps Texel's to the appropriate pixels.

#### See also

-   _interwiki("wikipedia", "Texel (graphics)"_) on Wikipedia
-   [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
-   [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
-   [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)

---

## Term: Thread

-   Glossary
-   Thread
-   asynchronous

---

> Thread in computer science is the execution of running multiple tasks or programs at the same time. Each unit capable of executing code is called a **thread**.

However, modern _Glossary("JavaScript"_) offers ways to create additional threads, each executing independently while possibly communicating between one another. This is done using technologies such as **[web workers](/en-US/docs/Web/API/Web_Workers_API)**, which can be used to spin off a sub-program which runs concurrently with the main thread in a thread of its own. This allows slow, complex, or long-running tasks to be executed independently of the main thread, preserving the overall performance of the site or app—as well as that of the browser overall. This also allows individuals to take advantage of modern multi-core processors.

A special type of worker, called a **[service worker](/en-US/docs/Web/API/Service_Worker_API)**, can be created which can be left behind by a site—with the user's permission—to run even when the user isn't currently using that site. This is used to create sites capable of notifying the user when things happen while they're not actively engaged with a site. Such as notifying a user they have received new email even though they're not currently logged into their mail service.

Overall it can be observed these threads within our operating system are extremely helpful. They help minimize the context switching time, enables more efficient communication and allows further use of the multiprocessor architecture.

#### See also

-   [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
-   [Web worker API](/en-US/docs/Web/API/Web_Workers_API)
-   [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Main thread"_)

---

## Term: Three js

-   Browser
-   CodingScripting
-   JavaScript
-   Programming Language
-   three.js

---

> three.js is a _Glossary("JavaScript"_)-based _Glossary("WebGL"_) engine that can run GPU-powered games and other graphics-powered apps straight from the _Glossary("browser"_). The three.js library provides many features and _Glossary("API","APIs"_) for drawing 3D scenes in your browser.

#### See also

-   _Interwiki("wikipedia", "Three.js"_) on Wikipedia
-   [three.js official website](https://threejs.org/)

---

## Term: Time to first byte

-   Glossary
-   Performance
-   Reference
-   Web Performance

---

> **Time to First Byte** (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server. This time includes [DNS](/en-US/docs/Glossary/DNS) lookup and establishing the connection using a [TCP](/en-US/docs/Glossary/TCP) handshake and [SSL](/en-US/docs/Glossary/SSL) handshake if the request is made over [https](/en-US/docs/Glossary/https).

TTFB is the time it takes between the start of the request and the start of the response, in milliseconds:

    TTFB = responseStart - navigationStart

#### See also

-   [A typical HTTP session](/en-US/docs/Web/HTTP/Session)
-   [PerformanceResourceTiming](/en-US/docs/Web/API/PerformanceResourceTiming)
-   [PerformanceTiming](/en-US/docs/Web/API/PerformanceTiming)

---

## Term: Time to interactive

-   Glossary
-   Performance
-   Reference
-   Web Performance

---

> **Time to Interactive** (TTI) is a non-standardized web performance 'progress' metric defined as the point in time when the last [Long Task](/en-US/docs/Web/API/Long_Tasks_API) finished and was followed by 5 seconds of network and main thread inactivity.

TTI, proposed by the Web Incubator Community Group in 2018, is intended to provide a metric that describes when a page or application contains useful content and the main thread is idle and free to respond to user interactions, including having event handlers registered.

#### Caveat:

TTI is derived by leveraging information from the _domxref("Long Tasks API"_). Although available in some performance monitoring tools, TTI is not a part of any official web specification at the time of writing.

#### See also

-   [Definition of TTI](https://github.com/WICG/time-to-interactive) from Web Incubator Community Group
-   [Time to Interactive — focusing on human-centric metrics](https://building.calibreapp.com/time-to-interactive-focusing-on-the-human-centric-metrics-22eb7e64dd23) by Radimir Bitsov
-   [Tracking TTI](https://web.dev/user-centric-performance-metrics/#tracking_tti)

---

## Term: TLD

-   Glossary
-   Web
-   WebMechanics

---

> A TLD (_top-level domain_) is the most generic _Glossary("domain"_) in the Internet's hierarchical _Glossary("DNS"_) (domain name system). A TLD is the final component of a _Glossary("domain name"_), for example, "org" in `developer.mozilla.org`.

_Glossary("ICANN"_) (Internet Corporation for Assigned Names and Numbers) designates organizations to manage each TLD. Depending on how strict an administrating organization might be, TLD often serves as a clue to the purpose, ownership, or nationality of a website.

Consider an example Internet address: `https://developer.mozilla.org`
Here org is the TLD; mozilla.org is the second-level domain name; and developer is a subdomain name. All together, these constitute a fully-qualified domain name; the addition of https\:// makes this a complete URL.

_Glossary("IANA"_) today distinguishes the following groups of top-level domains:

-   country-code top-level domains (ccTLD)
-   -   : Two-character domains established for countries or territories. Example: _.us_ for United States.
-   internationalized country code top-level domains (IDN ccTLD)
-   -   : ccTLDs in non-Latin character sets (e.g., Arabic or Chinese).
-   generic top-level domains (gTLD)
-   -   : Top-level domains with three or more characters.
-   unsponsored top-level domains
    -   : Domains that operate directly under policies established by ICANN processes for the global Internet community, for example "com" and "edu".
-   sponsored top-level domains (sTLD)
    -   : These domains are proposed and sponsored by private organizations that decide whether an applicant is eligible to use the TLD, based on community theme concepts.
-   infrastructure top-level domain
    -   : This group consists of one domain, the _Glossary("ARPA", "Address and Routing Parameter Area"_) (ARPA).

#### See also

-   _Interwiki("wikipedia", "TLD"_) on Wikipedia
-   [List of top-level domains](https://www.iana.org/domains/root/db)

---

## Term: Transport Layer Security (TLS)

-   Cryptography
-   Glossary
-   Infrastructure
-   Security
-   Web Performance

---

> **Transport Layer Security (TLS)**, formerly known as _Glossary("SSL", "Secure Sockets Layer (SSL)"_), is a _Glossary("protocol"_) used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols. Both SSL and TLS are client / server protocols that ensure communication privacy by using cryptographic protocols to provide security over a network. When a server and client communicate using TLS, it ensures that no third party can eavesdrop or tamper with any message.

All modern browsers support the TLS protocol, requiring the server to provide a valid _Glossary("Digital certificate", "digital certificate"_) confirming its identity in order to establish a secure connection. It is possible for both the client and server to mutually authenticate each other, if both parties provide their own individual digital certificates.

> **Note:** TLS 1.0 and 1.1 support will be removed from all major browsers in early 2020; you'll need to make sure your web server supports TLS 1.2 or 1.3 going forward. From version 74 onwards, Firefox will return a [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) error when connecting to servers using the older TLS versions (_bug(1606734_)).

#### See also

-   _Interwiki("wikipedia", "Transport Layer Security"_) (Wikipedia)
-   [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (The Transport Layer Security Protocol, Version 1.2)
-   [Transport Layer Security](/en-US/docs/Web/Security/Transport_Layer_Security)
-   [OWASP: Transport Layer Protection Cheat Sheet](https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("HTTPS"_)
    -   _Glossary("SSL"_)

---

## Term: TOFU

-   HTTP
-   SSH
-   Security

---

> **Trust On First Use** **(TOFU**) is a security model in which a client needs to create a trust relationship with an unknown server. To do that, clients will look for identifiers (for example public keys) stored locally. If an identifier is found, the client can establish the connection. If no identifier is found, the client can prompt the user to determine if the client should trust the identifier.

TOFU is used in the SSH protocol, in [HTTP Public Key Pinning](/en-US/docs/Web/HTTP/Public_Key_Pinning) (_Glossary("HPKP"_)) where the browsers will accept the first public key returned by the server, and in _HTTPHeader("Strict-Transport-Security"_) (_Glossary("HSTS"_)) where a browser will obey the redirection rule.

#### See also

-   [HTTP Public Key Pinning](/en-US/docs/Web/HTTP/Public_Key_Pinning) (_Glossary("HPKP"_))
-   _HTTPHeader("Public-Key-Pins"_)
-   Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)

---

## Term: Transferable objects

-   Transferable
-   Workers

---

> **Transferable objects** are objects that own resources that can be _transferred_ from one context to another, ensuring that the resources are only available in one context at a time.
> Following a transfer, the original object is no longer usable; it no longer points to the transferred resource, and any attempt to read or write the object will throw an exception.

_Transferrable objects_ are commonly use to share resources that can only be safely exposed to a single JavaScript thread at a time.
For example, an _jsxref("ArrayBuffer"_) is a transferrable object that owns a block of memory.
When such a buffer is transferred between threads, the associated memory resource is detached from the original buffer and attached to the buffer object created in the new thread.
The buffer object in the original thread is no longer usable because it no longer owns a memory resource.

Transferring may also be used when creating deep copies of objects with _domxref("structuredClone()"_).
Following the cloning operation, the transferred resources are moved rather than copied to the cloned object.

The mechanism used to transfer an object's resources depends on the object.
For example, when an _jsxref("ArrayBuffer"_) is transferred between threads, the memory resource that it points to is _literally_ moved between contexts in a fast and efficient zero-copy operation.
Other objects may be transferred by copying the associated resource and then deleting it from the old context.

Not all objects are transferable.
A list of transferable objects is [provided below](#supported_objects).

## Transferring objects between threads

The code below demonstrates how transferring works when sending a message from a main thread to a _domxref("Web Workers API", "web worker thread","","true"_).
The _jsxref("Uint8Array"_) is copied (duplicated) in the worker while its buffer is transferred.
After transfer any attempt to read or write `uInt8Array` from the main thread will throw, but you can still check the `byteLength` to confirm it is now zero.

```js
//
// Create an 8MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 8); // 8MB
for (var i = 0; i < uInt8Array.length; ++i) {
    uInt8Array[i] = i;
}
console.log(uInt8Array.byteLength); // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength); // 0
```

> **Note:** [Typed arrays](en-US/docs/Web/JavaScript/Typed_arrays) like _jsxref("Int32Array"_) and _jsxref("Uint8Array"_), are serializable, but not transferable.
> However their underlying buffer is an _jsxref("ArrayBuffer"_), which is a transferable object.
> We could have sent `uInt8Array.buffer` in the data parameter, but not `uInt8Array` in the transfer array.

### Transferring during a cloning operation

The code below shows a _domxref("structuredClone()"_) operation where the underlying buffer is copied from the original object to the clone.

```js
//
const original = new Uint8Array(1024);
const clone = structuredClone(original);
console.log(original.byteLength); // 1024
console.log(clone.byteLength); // 1024

original[0] = 1;
console.log(clone[0]); // 0

// Transferring the Uint8Array would throw an exception as it is not a transferrable object
// const transferred = structuredClone(original, {transfer: [original]});

// We can transfer Uint8Array.buffer.
const transferred = structuredClone(original, { transfer: [original.buffer] });
console.log(transferred.byteLength); // 1024
console.log(transferred[0]); // 1

// After transferring Uint8Array.buffer cannot be used.
console.log(original.byteLength); // 0
```

## Supported objects

The items that can be _transferred_ are:

-   _jsxref("ArrayBuffer"_)
-   _domxref("MessagePort"_)
-   _domxref("ReadableStream"_)
-   _domxref("WritableStream"_)
-   _domxref("TransformStream"_)
-   _domxref("AudioData"_)
-   _domxref("ImageBitmap"_)
-   _domxref("VideoFrame"_)
-   _domxref("OffscreenCanvas"_)

> **Note:** Transferrable objects are marked up in [Web IDL files](https://github.com/w3c/webref/tree/main/ed/idl) with the attribute `Transferrable`.

#### See also

-   [Transferable Objects: Lightning Fast!](https://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast)
-   [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
-   [Transferable objects in the HTML specification](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
-   _domxref("DedicatedWorkerGlobalScope.postMessage()"_)

---

## Term: Transient activation

-   Transient activation
-   Glossary
-   JavaScript

---

> **Transient activation** (or "transient user activation") is a window state that indicates a user has recently pressed a button, moved a mouse, used a menu, or performed some other user interaction.

This state is sometimes used as a mechanism for ensuring that a web API can only function if triggered by user interaction.
For example, scripts cannot arbitrarily launch a popup that requires _transient activation_ ⁠—it must be triggered from a UI element's event handler.

Examples of APIs that require _transient activation_ are:

-   _domxref("MediaDevices.selectAudioOutput()"_)

> **Note:** Transient activation expires after a timeout (if not renewed by further interaction), and may also be "consumed" by some APIs.

#### See also

-   _domxref("MediaDevices.selectAudioOutput()"_)
-   [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)

---

## Term: Tree shaking

-   JavaScript
-   Modules
-   Statement
-   Web Performance
-   export
-   import
-   tree shaking

---

> **Tree shaking** is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the [import](/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](/en-US/docs/Web/JavaScript/Reference/Statements/export) statements in ES2015 to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., [webpack](https://webpack.js.org/) or [Rollup](https://github.com/rollup/rollup)) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

#### See also

-   ["Benefits of dead code elimination during bundling"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayer's book: "Exploring JS: Modules"
-   [Tree shaking implementation with webpack](https://webpack.js.org/guides/tree-shaking/)

---

## Term: Trident

-   Browser
-   Glossary
-   Infrastructure
-   Trident

---

> Trident (or MSHTML) was a layout engine that powered _Glossary("Microsoft Internet Explorer","Internet Explorer"_). A Trident _Glossary("fork"_) called _EdgeHTML_ replaced Trident in Internet Explorer's successor, _Glossary("Microsoft Edge","Edge"_).

#### See also

-   [Trident layout engine](https://en.wikipedia.org/wiki/Trident_%28layout_engine%29) on Wikipedia

---

## Term: Truthy

-   CodingScripting
-   Glossary
-   JavaScript

---

> In _Glossary("JavaScript"_), a **truthy** value is a value that is considered `true` when encountered in a _Glossary("Boolean"_) context. All values are truthy unless they are defined as _Glossary("Falsy", "falsy"_) (i.e., except for `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`).

_Glossary("JavaScript"_) uses _Glossary("Type_Coercion", "type coercion"_) in Boolean contexts.

Examples of _truthy_ values in JavaScript (which will be coerced to `true` in boolean contexts, and thus execute the `if` block):

```js
//
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### The logical AND operator, &&

If the first object is truthy, the [logical AND operator](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) returns the second operand:

```js
//
true && "dog"
// returns "dog"

[] && "dog"
// returns "dog"
```

#### See also

-   _Glossary("Falsy"_)
-   _Glossary("Type_Coercion", "Type coercion"_)
-   _Glossary("Boolean"_)

---

## Term: TTL

-   Caching
-   Domain Name System
-   Glossary
-   Infrastructure
-   Networking
-   Performance

---

> Time To Live (TTL) can refer to either the lifetime of a packet in a network, or the expiry time of cached data.

## Networking

In networking, the TTL, embedded in the packet, is a usually defined as a number of hops or as an expiration timestamp after which the packet is dropped. It provides a way to avoids network congestion, but releasing packets after they roamed the network too long.

## Caching

In the context of caching, TTL (as an unsigned 32-bit integer) being a part of the _Glossary("Response header", "HTTP response header"_) or the _Glossary("DNS"_) query, indicates the amount of time in seconds during which the resource can be cached by the requester.

#### See also

-   _Interwiki("wikipedia", "Time to live", "TTL"_) on Wikipedia
-   [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181#section-8) on IETF
-   [RFC1035](https://datatracker.ietf.org/doc/html/rfc1035) on IETF

---

## Term: TURN

-   Glossary
-   Infrastructure
-   TURN
-   WebMechanics
-   WebRTC

---

> **TURN** (Traversal Using Relays around NAT) is a _Glossary('protocol'_) enabling a computer to receive and send data from behind a _glossary("NAT", "Network Address Translator"_) (NAT) or firewall. TURN is used by _Glossary("WebRTC"_) to allow any two devices on the Internet to enter a peer-to-peer connection.

#### See also

-   _Interwiki("wikipedia", "TURN"_) on Wikipedia
-   [WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
-   [Specification](https://www.ietf.org/rfc/rfc5766.txt)
-   [Specification update for IPv6](https://www.ietf.org/rfc/rfc6156.txt)

---

## Term: Type coercion

-   Coercion
-   JavaScript
-   Type coercion

---

> Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). \__Glossary("Type conversion"_)_ is similar to \_type coercion_ because they both convert values from one data type to another with one key difference — _type coercion_ is implicit whereas _type conversion_ can be either implicit _or_ explicit.

## Examples

```js
//
const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

In the above example, JavaScript has _coerced_ the `9` from a number into a string and then concatenated the two values together, resulting in a string of `59`. JavaScript had a choice between a string or a number and decided to use a string.

The compiler could have coerced the `5` into a number and returned a sum of `14`, but it did not. To return this result, you'd have to explicitly convert the `5` to a number using the _jsxref("Global_Objects/Number", "Number()"_) method:

```js
//
sum = Number(value1) + value2;
```

#### See also

-   _Interwiki("wikipedia", "Type conversion"_) (Wikipedia)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Type"_)
    -   _Glossary("Type conversion"_)

---

## Term: Type conversion

-   CodingScripting
-   Glossary
-   Type casting
-   Type conversion

---

> Type conversion (or typecasting) means transfer of data from one data type to another. _Implicit conversion_ happens when the compiler automatically assigns data types, but the source code can also _explicitly_ require a conversion to take place. For example, given the instruction `5+2.0`, the floating point `2.0` is implicitly typecasted into an integer, but given the instruction `Number("0x11")`, the string "0x11" is explicitly typecasted as the number 17.

#### See also

-   _Interwiki("wikipedia", "Type conversion"_) (Wikipedia)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("Type"_)
    -   _Glossary("Type coercion"_)

---

## Term: Type

-   CodingScripting
-   Glossary
-   JavaScript

---

> **Type** is a characteristic of a _glossary("value"_) affecting what kind of data it can store, and the structure that the data will adhere to. For example, a _Glossary("boolean"_) [Data Type](/en-US/docs/Web/JavaScript/Data_structures) can hold only a `true` or `false` value at any given time, whereas a _Glossary("string"_) has the ability to hold a string or a sequence of characters, a _Glossary("number"_) can hold numerical values of any kind, and so on.

A value's data type also affects the operations that are valid on that value. For example, a value of type number can be multiplied by another number, but not by a string - even if that string contains _only_ a number, such as the string "2".

Types also provides us with useful knowledge about the comparison between different values. Comparison between structured types is not always an easy assumption, as even if the previous data structure is the same, there could be inherited structures inside of the [Prototype Chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

If you are unsure of the type of a value, you can use the [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator.

#### See also

-   _Interwiki("wikipedia", "Data type"_) on Wikipedia
-   [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
-   [Glossary](/en-US/docs/Glossary)

    -   _Glossary("JavaScript"_)
    -   _Glossary("string"_)
    -   _Glossary("number"_)
    -   _Glossary("bigint"_)
    -   _Glossary("boolean"_)
    -   _Glossary("null"_)
    -   _Glossary("undefined"_)
    -   _Glossary("symbol"_)

---

## Term: UDP (User Datagram Protocol)

-   Glossary
-   Infrastructure
-   Networking
-   Protocols
-   UDP

---

> **UDP** (User Datagram Protocol) is a long standing _glossary("protocol"_) used together with _glossary("IPv6","IP"_) for sending data when transmission speed and efficiency matter more than security and reliability.

UDP uses a simple [connectionless communication](https://en.wikipedia.org/wiki/Connectionless_communication 'Connectionless communication') model with a minimum of protocol mechanism. UDP provides [checksums](https://en.wikipedia.org/wiki/Checksum) for data integrity, and [port numbers](https://en.wikipedia.org/wiki/Port_numbers 'Port numbers') for addressing different functions at the source and destination of the datagram. It has no [handshaking](https://en.wikipedia.org/wiki/Handshaking) dialogues, and thus exposes the user's program to any [unreliability](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)> 'Reliability (computer networking)') of the underlying network; There is no guarantee of delivery, ordering, or duplicate protection. If error-correction facilities are needed at the network interface level, an application may use the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol 'Transmission Control Protocol') (TCP) or [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol 'Stream Control Transmission Protocol') (SCTP) which are designed for this purpose.

UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack 'Protocol stack'). Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to [retransmission](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)> 'Retransmission (data networks)'), which may not be an option in a [real-time system](https://en.wikipedia.org/wiki/Real-time_system 'Real-time system').

#### See also

-   _Interwiki("wikipedia", "User Datagram Protocol"_) on Wikipedia
-   [Specification](https://datatracker.ietf.org/doc/html/rfc768)

---

## Term: UI

-   Accessibility
-   Design
-   Glossary

---

> **User Interface** (UI) is anything that facilitates the interaction between a user and a machine. In the world of computers, it can be anything from a keyboard, a joystick, a screen or a program. In case of computer software, it can be a command-line prompt, a webpage, a user input form, or the front-end of any application.

#### See also

-   _interwiki("wikipedia", "User_interface", "User interface"_) on Wikipedia
-   _interwiki("wikipedia", "Front_end_development", "Front end development"_) on Wikipedia

---

## Term: undefined

-   CodingScripting
-   Glossary
-   JavaScript
-   NeedsContent

---

> **`undefined`** is a _Glossary("primitive"_) value automatically assigned to _glossary("variable", "variables"_) that have just been declared, or to formal _Glossary("Argument","arguments"_) for which there are no actual arguments.

## Example

```js
//
var x; //create a variable but assign it no value

console.log("x's value is", x); //logs "x's value is undefined"
```

#### See also

-   _Interwiki("wikipedia", "Undefined value"_) on Wikipedia
-   [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)

---

## Term: Unicode

-   Infrastructure

---

> Unicode is a standard _Glossary("Character set","character set"_) that numbers and defines _Glossary("Character","characters"_) from the world's different languages, writing systems, and symbols.

By assigning each character a number, programmers can create _Glossary("Character encoding","character encodings"_), to let computers store, process, and transmit any combination of languages in the same file or program.

Before Unicode, it was difficult and error-prone to mix languages in the same data. For example, one character set would store Japanese characters, and another would store the Arabic alphabet. If it was not clearly marked which parts of the data were in which character set, other programs and computers would display the text incorrectly, or damage it during processing. If you've ever seen text where characters like curly quotes (`""`) were replaced with gibberish like `Ã‚Â£`, then you've seen this problem, known as _Interwiki("wikipedia", "Mojibake"_).

The most common Unicode character encoding on the Web is _Glossary("UTF-8"_). Other encodings exist, like UTF-16 or the obsolete UCS-2, but UTF-8 is recommended.

#### See also

-   _Interwiki("wikipedia", "Unicode"_) on Wikipedia
-   [The Unicode Standard: A Technical Introduction](https://www.unicode.org/standard/principles.html)

---

## Term: URI

-   Glossary
-   HTTP
-   Search
-   URI
-   URL

---

> A **URI** _(Uniform Resource Identifier)_ is a string that refers to a resource.

The most common are _Glossary("URL","URL"_)s, which identify the resource by giving its location on the Web. _Glossary("URN","URN"_)s, by contrast, refer to a resource by a name, in a given namespace, such as the ISBN of a book.

#### See also

-   _Interwiki("wikipedia", "URI"_) on Wikipedia
-   [RFC 3986 on URI](https://datatracker.ietf.org/doc/html/rfc3986)

---

## Term: URL

-   Glossary
-   Infrastructure
-   l10n:priority

---

> **Uniform Resource Locator** (**URL**) is a text string that specifies where a resource (such as a web page, image, or video) can be found on the Internet.

In the context of _Glossary("HTTP"_), URLs are called "Web address" or "link". Your _glossary("browser"_) displays URLs in its address bar, for example: `https://developer.mozilla.org` Some browsers display only the part of a URL after the "//", that is, the _Glossary("Domain name"_).

URLs can also be used for file transfer (_Glossary("FTP"_)) , emails (_Glossary("SMTP"_)), and other applications.

#### See also

-   _Interwiki("wikipedia", "URL"_) on Wikipedia
-   [Understanding URLs and their structure](/en-US/docs/Learn/Common_questions/What_is_a_URL)
-   The syntax of URLs is defined in the [URL Living Standard](https://url.spec.whatwg.org/)

---

## Term: URN

-   Glossary
-   Intro
-   Navigation
-   urn

---

> URN (Uniform Resource Name) is a _Glossary("URI"_) in a standard format, referring to a resource without specifying its location or whether it exists. This example comes from [RFC3986](https://www.ietf.org/rfc/rfc3986.txt): `urn:oasis:names:specification:docbook:dtd:xml:4.1.2`

#### See also

-   _Interwiki("wikipedia", "URN"_) on Wikipedia

---

## Term: Usenet

-   Glossary
-   WebMechanics

---

> Usenet is an internet discussion system where each post is duplicated on many servers. The equivalent of Internet forums in its day, Usenet functioned like a bulletin board system.

#### See also

-   _Interwiki("wikipedia", "Usenet"_) on Wikipedia

---

## Term: User agent

-   Browser
-   Glossary
-   UA
-   User-agent
-   Web Browser
-   WebMechanics
-   agent
-   user agent
-   userAgent

---

> A user agent is a computer program representing a person, for example, a _Glossary("Browser","browser"_) in a _Glossary("World Wide Web", "Web"_) context.

Besides a browser, a user agent could be a bot scraping webpages, a download manager, or another app accessing the Web. Along with each request they make to the server, browsers include a self-identifying _HTTPHeader("User-Agent"_) _Glossary("HTTP"_) header called a user agent (UA) string. This string often identifies the browser, its version number, and its host operating system.

Spam bots, download managers, and some browsers often send a fake UA string to announce themselves as a different client. This is known as _user agent spoofing_.

The user agent string can be accessed with _Glossary("JavaScript"_) on the client side using the _domxref("Navigator/userAgent", "NavigatorID.userAgent"_) property.

A typical user agent string looks like this: `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`.

#### See also

-   _interwiki("wikipedia", "User agent"_) on Wikipedia
-   _domxref("Navigator/userAgent", "NavigatorID.userAgent"_)
-   [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
-   _RFC(2616, "14.43"_): The `User-Agent` header
-   [Glossary:](/en-US/docs/Glossary)

    -   _Glossary("Browser"_)

-   HTTP Headers

    -   _HTTPHeader("User-agent"_)

---

## Term: UTF-8

-   CodingScripting
-   Glossary
-   HTML
-   JavaScript
-   Utf-8

---

> UTF-8 (UCS Transformation Format 8) is the World Wide Web's most common _Glossary("Character encoding", "character encoding"_). Each character is represented by one to four bytes. UTF-8 is backward-compatible with _Glossary("ASCII"_) and can represent any standard Unicode character.

The first 128 UTF-8 characters precisely match the first 128 ASCII characters (numbered 0-127), meaning that existing ASCII text is already valid UTF-8. All other characters use two to four bytes. Each byte has some bits reserved for encoding purposes. Since non-ASCII characters require more than one byte for storage, they run the risk of being corrupted if the bytes are separated and not recombined.

#### See also

-   _Interwiki("wikipedia", "UTF-8"_) on Wikipedia
-   [FAQ about UTF-8 on Unicode website](https://www.unicode.org/faq/utf_bom.html#UTF8)

---

## Term: UUID

-   Glossary
-   Infrastructure

---

> A **Universally Unique Identifier** (**UUID**) is a label used to uniquely identify a resource among all other resources of that type.

Computer systems generate UUIDs locally using very large random numbers.
In theory the IDs may not be globally unique, but the probability of duplicates is vanishingly small.
If systems really need absolutely unique IDs then these might be allocated by a central authority.

UUIDs are 128-bit values that are canonically represented as a 36-character string in the format `123e4567-e89b-12d3-a456-426614174000` (5 hex strings separated by hyphens).
There are a number of versions that differ slightly in the way they are calculated; for example, the inclusion of temporal information.

The formal definition can be found in: [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122).

#### See also

-   _Interwiki("wikipedia", "UUID"_) on Wikipedia
-   [`Crypto.randomUUID()`](/en-US/docs/Web/API/Crypto/randomUUID)

---

## Term: UX

-   Accessibility
-   Composing
-   Design
-   Glossary
-   Navigation

---

> **UX** is an acronym that stands for User eXperience. It is the study of the interaction between users and a system. Its goal is to make a system easy to interact with from the user's point of view.

The system can be any kind of product or application that an end user is meant to interact with. UX studies undertaken on a web page for example can demonstrate whether it is easy for users to understand the page, navigate to different areas, and complete common tasks, and where such processes could have less friction.

#### See also

-   _Interwiki("wikipedia", "User experience"_) on Wikipedia

---

## Term: Validator

-   Beginner
-   Glossary
-   Security

---

> A validator is a program that checks for syntax errors in code. Validators can be created for any format or language, but in our context we speak of tools that check _Glossary("HTML"_), _Glossary("CSS"_), and _Glossary("XML"_).

#### See also

-   _Interwiki("wikipedia", "Validator"_) on Wikipedia
-   [Short list of validators](/en-US/docs/Tools/Validators)

---

## Term: Value

-   CodingScripting
-   Glossary
-   NeedsContent

---

> In the context of data or an object **_Glossary("Wrapper", "wrapper"_)** around that data, the value is the **_Glossary("Primitive","primitive value"_)** that the object wrapper contains. In the context of a **_Glossary("Variable","variable"_)** or **_Glossary("Property","property"_)**, the value can be either a primitive or an **_Glossary("Object reference","object reference"_)**.

#### See also

-   _Interwiki("wikipedia", "Primitive wrapper class"_) on Wikipedia

---

## Term: Variable

-   CodingScripting
-   Glossary
-   JavaScript

---

> A variable is a named reference to a _Glossary("Value", "value"_). That way an unpredictable value can be accessed through a predetermined name.

#### See also

-   _Interwiki("wikipedia", "Variable (computer science)"_) on Wikipedia
-   [Declaring variables in JavaScript](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
-   [`var` statement in JavaScript](/en-US/docs/Web/JavaScript/Reference/Statements/var)

---

## Term: Vendor Prefix

-   CodingScripting
-   Glossary

---

> Browser vendors sometimes add prefixes to experimental or nonstandard CSS properties and JavaScript APIs, so developers can experiment with new ideas while—in theory—preventing their experiments from being relied upon and then breaking web developers' code during the standardization process. Developers should wait to include the unprefixed property until browser behavior is standardized.

> **Note:** Browser vendors are working to stop using vendor prefixes for experimental features. Web developers have been using them on production Web sites, despite their experimental nature. This has made it more difficult for browser vendors to ensure compatibility and to work on new features; it's also been harmful to smaller browsers who wind up forced to add other browsers' prefixes in order to load popular web sites.
>
> Lately, the trend is to add experimental features behind user-controlled flags or preferences, and to create smaller specifications which can reach a stable state much more quickly.

## CSS prefixes

The major browsers use the following prefixes:

-   `-webkit-` (Chrome, Safari, newer versions of Opera, almost all iOS browsers including Firefox for iOS; basically, any WebKit based browser)
-   `-moz-` (Firefox)
-   `-o-` (old pre-WebKit versions of Opera)
-   `-ms-` (Internet Explorer and Microsoft Edge)

Sample usage:

    -webkit-transition: all 4s ease;
    -moz-transition: all 4s ease;
    -ms-transition: all 4s ease;
    -o-transition: all 4s ease;
    transition: all 4s ease;

## API prefixes

Historically, vendors have also used prefixes for experimental APIs. If an entire interface is experimental, then the interface's name is prefixed (but not the properties or methods within). If an experimental property or method is added to a standardized interface, then the individual method or property is prefixed.

### Interface prefixes

Prefixes for interface names are upper-cased:

-   `WebKit` (Chrome, Safari, newer versions of Opera, almost all iOS browsers (including Firefox for iOS); basically, any WebKit based browser)
-   `Moz` (Firefox)
-   `O` (Older, pre-WebKit, versions of Opera)
-   `MS` (Internet Explorer and Microsoft Edge)

### Property and method prefixes

The prefixes for properties and methods are lower-case:

-   `webkit` (Chrome, Safari, newer versions of Opera, almost all iOS browsers (including Firefox for iOS); basically, any WebKit based browser)
-   `moz` (Firefox)
-   `o` (Old, pre-WebKit, versions of Opera)
-   `ms` (Internet Explorer and Microsoft Edge)

Sample usage:

```js
//
var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;
```

#### See also

-   _Interwiki("wikipedia", "CSS_hack#Browser_prefixes", "Vendor prefix"_) on Wikipedia

---

## Term: Viewport

-   CodingScripting
-   Glossary
-   Layout
-   viewport

---

> A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view.

The portion of the viewport that is currently visible is called the **_Glossary("visual viewport"_)**. This can be smaller than the layout viewport, such as when the user has pinched-zoomed. The _Glossary("layout viewport"_) remains the same, but the visual viewport became smaller.

#### See also

-   [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API)
-   _Interwiki("wikipedia", "Viewport"_) on Wikipedia
-   [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
-   _Glossary("Visual viewport"_) in the MDN Glossary
-   _Glossary("Layout viewport"_) in the MDN Glossary

---

## Term: Visual Viewport

-   Glossary
-   VisualViewport
-   viewport
-   visual viewport

---

> The portion of the _Glossary("viewport"_) that is currently visible is called the visual viewport. This can be smaller than the layout viewport, such as when the user has pinched-zoomed. The visual viewport is the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page.

#### See also

-   [Visual Viewport API](/en-US/docs/Web/API/Visual_Viewport_API)
-   _Interwiki("wikipedia", "Viewport"_) on Wikipedia
-   [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
-   _Glossary("Viewport"_) in the MDN Glossary
-   _Glossary("Layout viewport"_) in the MDN Glossary

---

## Term: VoIP

-   Glossary
-   Infrastructure
-   VoIP

---

> VoIP (Voice over Internet Protocol) is a technology used to transmit voice messages over IP (Internet Protocol) networks. Common VoIP packages include Skype, Msn Messenger, Yahoo and many more. Everything transferred through VoIP is digital. It is also known as IP telephony, or broadband telephony. The main reason for using VoIP technology is because of cost.

VoIP allows you to make a call directly from a computer, a special VoIP phone, or a traditional phone connected to a special adapter. A high speed internet connection is required for VoIP. Usually, telephone calls over the Internet do not incur further charges beyond what the user is paying for Internet access, much in the same way that the user doesn't pay for sending individual emails over the Internet.

#### See also

-   _Interwiki("wikipedia", "VoIP"_) on Wikipedia

---

## Term: W3C

-   Community
-   Consortium
-   Glossary
-   Intro
-   W3C
-   Web consortium

---

> The _World Wide Web Consortium_ (W3C) is an international body that maintains _Glossary("World Wide Web", "Web-related"_) rules and frameworks.

It consists of over 350 member-organizations that jointly develop Web standards, run outreach programs, and maintain an open forum for talking about the Web. The W3C coordinates companies in the industry to make sure they implement the same W3C standards.

Each standard passes through four stages of maturity: Working Draft (WD), Candidate Recommendation (CR), Proposed Recommendation (PR), and W3C Recommendation (REC).

#### See also

-   [W3C website](https://www.w3.org/)
-   _Interwiki("wikipedia", "World Wide Web Consortium", "W3C"_) on Wikipedia

---

## Term: WAI

-   Accessibility
-   Glossary

---

> WAI or Web Accessibility Initiative is an effort by the World Wide Web Consortium (W3C) to improve accessibility for people with various challenges, who may need a nonstandard _Glossary("browser"_) or devices.

#### See also

-   [WAI website](https://www.w3.org/WAI/)
-   _Interwiki("wikipedia", "Web Accessibility Initiative"_) on Wikipedia

---

## Term: WCAG

-   Accessibility
-   Glossary
-   WCAG
-   Web Guidelines

---

> _Web Content Accessibility Guidelines_ (**WCAG**) are a recommendation published by the _Glossary("WAI","Web Accessibility Initiative"_) group at the _Glossary("W3C"_). They outline a set of guidelines for making content accessible primarily for people with disabilities but also for limited-resource devices such as mobile phones.

WCAG 2.0 which superseded WCAG 1.0 was published as a W3C Recommendation on 11 December 2008. It consists of 12 guidelines organized under 4 principles (perceivable, operable, understandable, and robust) and each guideline has testable success criteria.

WCAG uses three levels of conformance:

-   Priority 1: Web developers **must** satisfy these requirements, otherwise it will be impossible for one or more groups to access the Web content. Conformance to this level is described as A.
-   Priority 2: Web developers **should** satisfy these requirements, otherwise some groups will find it difficult to access the Web content. Conformance to this level is described as AA or Double-A.
-   Priority 3: Web developers **may** satisfy these requirements, in order to make it easier for some groups to access the Web content. Conformance to this level is described as AAA or Triple-A.

#### See also

-   _Interwiki("wikipedia", "Web Content Accessibility Guidelines", "WCAG"_) on Wikipedia
-   [Accessibility information on MDN](/en-US/docs/Web/Accessibility/Information_for_Web_authors)
-   [The WCAG 2.0 recommendation at the W3C](https://www.w3.org/TR/WCAG20/)

---

## Term: Web performance

-   Glossary
-   Perceived Performance
-   Reference
-   Web Performance

---

> **Web performance** is the objective time from when a request for content is made until the requested content is displayed in the user's browser, objective render times, and the subjective user experience of load time and runtime.

Objectively, it is measurable time, in milliseconds, it takes for the web page or web application to be downloaded, painted in the user's web browser, and become responsive and interactive. It is the frames per second and times the main thread is not available for user interactions. Subjectively, it is the user's perception of whether the time it takes between the time the user requests the content and the time until the user feels the content requested is available and usable _feels_ slow or fast.

#### See also

-   [Learn about web performance](/en-US/docs/Learn/Performance)
-   [Perceived performance](/en-US/docs/Glossary/Perceived_performance)

---

## Term: Web server

-   web server
-   web-server

---

> A web server is a piece of software that often runs on a hardware server offering service to a user, usually referred to as the client. A server, on the other hand, is a piece of hardware that lives in a room full of computers, commonly known as a data center.

#### See also

-   [Introduction to servers](/en-US/docs/Learn/Common_questions/What_is_a_web_server)
-   _Interwiki("wikipedia", "Server (computing)"_) on Wikipedia

---

## Term: Web standards

-   Glossary
-   Infrastructure
-   Web Standards
-   standards
-   web specifications

---

> Web standards are rules established by international standards bodies and defining how the _Glossary("World Wide Web", "Web"_) works (and sometimes controlling the _Glossary("Internet"_) as well).

Several standards bodies are responsible for defining different aspects of the Web, and all the standards must coordinate to keep the Web maximally usable and accessible. Web standards also must evolve to improve the current status and adapt to new circumstances.

This non-exhaustive list gives you an idea of which standards websites and network systems must conform to:

-   **IETF** (Internet Engineering Task Force): Internet standards (STD), which among other things govern set-up and use of _Glossary("URI", "URIs"_), _Glossary("HTTP"_), and _Glossary("MIME"_)
-   **_Glossary("W3C"_)**: specifications for markup language (e.g., _Glossary("HTML"_)), style definitions (i.e., _Glossary("CSS"_)), _Glossary("DOM"_), _Glossary("Accessibility", "accessibility"_)
-   **IANA** (Internet Assigned Numbers Authority): name and number registries
-   **Ecma Intl.:** scripting standards, most prominently for _Glossary("JavaScript"_)
-   **_Glossary("ISO"_)** (International Organization for Standardization): standards governing a diverse array of aspects, including character encodings, website management, and user-interface design

#### See also

-   _Interwiki("wikipedia", "Web standards"_) on Wikipedia

---

## Term: WebAssembly

-   Glossary
-   Infrastructure

---

> **WebAssembly** (abbr. _Wasm_) is an open _Glossary("binary"_) programming format that can be run in modern web _Glossary("Browser", "browsers"_) in order to gain performance and/or provide new features for web pages.

#### See also

-   _interwiki('wikipedia','WebAssembly'_) on Wikipedia
-   [Official website](https://webassembly.org/)
-   [WebAssembly](/en-US/docs/WebAssembly) on MDN

---

## Term: WebDAV

-   Glossary
-   Infrastructure

---

> **WebDAV** (_Web Distributed Authoring and Versioning_) is an _Glossary("HTTP"_) Extension that lets web developers update their content remotely from a client.

WebDAV is rarely used alone, but two extensions are very common: _Glossary("CalDAV"_) (remote-access calendar) and _Glossary("CardDAV"_) (remote-access address book).

WebDAV allows clients to

-   add, delete, and retrieve webpage metadata (e.g. author or creation date)
-   link pages of any media type to related pages
-   create sets of documents and retrieve hierarchical list
-   copy and move webpages
-   lock a document from being edited by more than one person at a time

#### See also

-   _Interwiki("wikipedia", "WebDAV"_) on Wikipedia
-   Specifications:

    -   _rfc(2518_)
    -   _rfc(3253_)
    -   _rfc(3744_)

---

## Term: WebExtensions

-   CodingScripting
-   Glossary
-   NeedsContent
-   WebExtensions

---

> WebExtensions is a cross-browser system for developing browser extensions in Firefox. This system provides APIs, which to a large extent are supported across different browsers like Mozilla Firefox, Google Chrome, Opera Browser, Microsoft Edge, or Apple Safari.

#### See also

-   [Browser extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions) on MDN

---

## Term: WebGL

-   Advanced
-   CodingScripting
-   Glossary
-   Web Graphics
-   WebGL

---

> **WebGL** (_Web Graphics Library_) is a _Glossary("JavaScript"_) _Glossary("API"_) that draws interactive 2D and 3D graphics.

The [Khronos Group](https://www.khronos.org/) maintains WebGL, which is based on _Glossary("OpenGL"_) ES 2.0.

You can invoke WebGL within the _Glossary("HTML"_) _HTMLElement("canvas"_) element, which provides a rendering surface.

All major _Glossary("Browser","browsers"_) now support WebGL, but its availability depends also on external factors (e.g. GPU support).

#### See also

-   _Interwiki("wikipedia", "WebGL"_) on Wikipedia
-   [Check for WebGL support](https://get.webgl.org/)
-   [WebGL on MDN](/en-US/docs/Web/API/WebGL_API)
-   [Support table for WebGL](https://caniuse.com/#feat=webgl)

---

## Term: WebIDL

-   CodingScripting
-   Glossary
-   WebIDL

---

> **WebIDL** is the interface description language used to describe the _Glossary("type", "data types"_), _Glossary("interface", "interfaces"_), _Glossary("method", "methods"_), _Glossary("property", "properties"_), and other components which make up a Web application programming interface (_Glossary("API"_)). It uses a somewhat stylized syntax which is independent of any specific programming language, so that the underlying code which is used to build each API can be written in whatever language is most appropriate, while still being possible to map the API's components to JavaScript-compatible constructs.

WebIDL is used in nearly every API _Glossary("specification"_) for the Web, and due to its standard format and syntax, the programmers who create Web browsers can more easily ensure that their browsers are compatible with one another, regardless of how they choose to write the code to implement the API.

#### See also

-   [Specification](https://www.w3.org/TR/WebIDL/)
-   [Information contained in a WebIDL file](/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file)
-   [WebIDL bindings](/en-US/docs/Mozilla/WebIDL_bindings)
-   _interwiki("wikipedia", "WebIDL"_)

---

## Term: WebKit

-   Browser
-   Glossary
-   Intro
-   Web
-   WebKit
-   WebMechanics

---

> _WebKit_ is a framework that displays properly-formatted webpages based on their markup. _Glossary("Apple Safari"_) depends on WebKit, and so do many mobile browsers (since WebKit is highly portable and customizable).

WebKit began life as a fork of KDE's KHTML and KJS libraries, but many individuals and companies have since contributed (including KDE, Apple, Google, and Nokia).

WebKit is an Apple trademark, and the framework is distributed under a BSD-form license. However, two important components fall under the _Glossary("LGPL"_): the **WebCore** rendering library and the **JavaScriptCore** engine.

#### See also

-   _Interwiki("wikipedia", "WebKit"_) on Wikipedia
-   [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)

---

## Term: WebM

-   Composing
-   Glossary
-   Infrastructure
-   WebM

---

> **WebM** is royalty-free and is an open web video format natively supported in Mozilla Firefox.

#### See also

-   [WebM ](https://en.wikipedia.org/wiki/WebM)on Wikipedia

---

## Term: WebP

-   Beginner
-   Composing
-   Glossary
-   Infrastructure
-   WebP

---

> **WebP** is a lossless and lossy compression image format developed by Google.

#### See also

-   [WebP ](https://en.wikipedia.org/wiki/WebP)on Wikipedia

---

## Term: WebRTC

-   CodingScripting
-   Glossary
-   Infrastructure
-   JavaScript
-   P2P
-   VoIP
-   Web
-   WebRTC

---

> **WebRTC** (_Web Real-Time Communication_) is an _Glossary("API"_) that can be used by video-chat, voice-calling, and P2P-file-sharing Web apps.

WebRTC consists mainly of these parts:

-   _domxref("MediaDevices.getUserMedia", "getUserMedia()"_)
-   -   : Grants access to a device's camera and/or microphone, and can plug in their signals to a
-   _domxref("RTCPeerConnection"_)
    -   : An interface to configure video chat or voice calls.
-   _domxref("RTCDataChannel"_)
    -   : Provides a method to set up a _Glossary("P2P", "peer-to-peer"_) data pathway between browsers.

#### See also

-   _Interwiki("wikipedia", "WebRTC"_) on Wikipedia
-   [WebRTC API on MDN](/en-US/docs/Web/API/WebRTC_API)
-   [Browser support for WebRTC](https://caniuse.com/rtcpeerconnection)

---

## Term: WebSockets

-   Connection
-   Glossary
-   Infrastructure
-   Networking
-   Protocols
-   Web
-   WebSocket

---

> _WebSocket_ is a _Glossary("protocol"_) that allows for a persistent _Glossary("TCP"_) connection between _Glossary("Server", "server"_) and client so they can exchange data at any time.

Any client or server application can use WebSocket, but principally web _Glossary("Browser", "browsers"_) and web servers. Through WebSocket, servers can pass data to a client without prior client request, allowing for dynamic content updates.

#### See also

-   _Interwiki("wikipedia", "Websocket"_) on Wikipedia
-   [WebSocket reference on MDN](/en-US/docs/Web/API/WebSocket)
-   [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
-   [Writing WebSocket servers](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)

---

## Term: WebVTT

-   Audio
-   CodingScripting
-   Glossary
-   Video
-   Web
-   WebVTT

---

> WebVTT (Web Video Text Tracks) is a _Glossary("W3C"_) specification for a file format marking up text track resources in combination with the HTML _HTMLElement("track"_) element.

WebVTT files provide metadata that is time-aligned with audio or video content like captions or subtitles for video content, text video descriptions, chapters for content navigation, and more.

#### See also

-   _Interwiki("wikipedia", "WebVTT"_) on Wikipedia
-   [WebVTT](/en-US/docs/Web/API/WebVTT_API) on MDN
-   [Specification](https://www.w3.org/TR/webvtt1/)

---

## Term: WHATWG

-   Community
-   DOM
-   Glossary
-   HTML
-   HTML5
-   WHATWG
-   Web
-   standards

---

> The WHATWG (_Web Hypertext Application Technology Working Group_) is a community that [maintains and develops web standards](https://spec.whatwg.org/), including _Glossary("DOM"_), Fetch, and _Glossary("HTML"_). Employees of Apple, Mozilla, and Opera established WHATWG in 2004.

#### See also

-   _Interwiki("wikipedia", "WHATWG"_) on Wikipedia
-   [WHATWG website](https://whatwg.org/)

---

## Term: Whitespace

-   Glossary
-   Lexical Grammar
-   whitespace

---

> **Whitespace** refers to _Glossary("Character", "characters"_) which are used to provide horizontal or vertical space between other characters. Whitespace is often used to separate tokens in _Glossary("HTML"_), _Glossary("CSS"_), _Glossary("JavaScript"_), and other computer languages.

Whitespace characters and their usage vary among languages.

## In HTML

The [Infra Living Standard](https://infra.spec.whatwg.org/#ascii-whitespace) defines five characters as "ASCII whitespace": U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, and U+0020 SPACE.

## In JavaScript

The [ECMAScript Language Specification](https://tc39.es/ecma262/#sec-white-space) defines several Unicode codepoints as "white space": U+0009 CHARACTER TABULATION \<TAB>, U+000B LINE TABULATION \<VT>, U+000C FORM FEED \<FF>, U+0020 SPACE \<SP>, U+00A0 NO-BREAK SPACE \<NBSP>, U+FEFF ZERO WIDTH NO-BREAK SPACE \<ZWNBSP>, and any other Unicode "Space_Separator" code points \<USP>.

#### See also

-   _interwiki("wikipedia", "Whitespace character"_) (Wikipedia)
-   [How whitespace is handled by HTML, CSS, and in the DOM](/en-US/docs/Web/API/Document_Object_Model/Whitespace)
-   _cssxref("white-space"_)
-   Specifications

    -   [ASCII whitespace spec](https://infra.spec.whatwg.org/#ascii-whitespace)
    -   [ECMAScript Language Specification](https://tc39.es/ecma262/#sec-white-space)

-   [Glossary](/en-US/docs/Glossary)

    1.  _Glossary("Character"_)

---

## Term: WindowProxy

-   Glossary
-   Window
-   WindowProxy

---

> A _`WindowProxy`_ object is a wrapper for a [`Window`](/en-US/docs/Web/API/Window) object. A `WindowProxy` object exists in every [browsing context](/en-US/docs/Glossary/Browsing_context). All operations performed on a `WindowProxy` object will also be applied to the underlying `Window` object it currently wraps. Therefore, interacting with a `WindowProxy` object is almost identical to directly interacting with a `Window` object. When a browsing context is navigated, the `Window` object its `WindowProxy` wraps is changed.

#### See also

-   HTML specification: [WindowProxy section](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
-   Stack Overflow question: [WindowProxy and Window objects?](https://stackoverflow.com/q/16092835/)

---

## Term: World Wide Web

-   Glossary
-   Infrastructure
-   WWW
-   World Wide Web

---

> The _World Wide Web_—commonly referred to as **WWW**, **W3**, or **the Web**—is an interconnected system of public webpages accessible through the _Glossary("Internet"_). The Web is not the same as the Internet: the Web is one of many applications built on top of the Internet.

Tim Berners-Lee proposed the architecture of what became known as the World Wide Web. He created the first web _Glossary("Server","server"_), web _Glossary("Browser","browser"_), and webpage on his computer at the CERN physics research lab in 1990. In 1991, he announced his creation on the alt.hypertext newsgroup, marking the moment the Web was first made public.

The system we know today as "the Web" consists of several components:

-   The **_Glossary("HTTP"_)** protocol governs data transfer between a server and a client.
-   To access a Web component, a client supplies a unique universal identifier, called a **_Glossary("URL"_)** (uniform resource locator) or _Glossary("URI"_) (uniform resource identifier) (formally called Universal Document Identifier (UDI)).
-   **_Glossary("HTML"_)** (hypertext markup language) is the most common format for publishing web documents.

Linking, or connecting resources through _Glossary("Hyperlink","hyperlinks"_), is a defining concept of the Web, aiding its identity as a collection of connected documents.

Soon after inventing the Web, Tim Berners-Lee founded the _Glossary("W3C"_) (World Wide Web Consortium) to standardize and develop the Web further. This consortium consists of core Web interest groups, such as web browser developers, government entities, researchers, and universities. Its mission includes education and outreach.

#### See also

-   [Learn the Web](/en-US/docs/Learn)
-   _Interwiki("wikipedia", "World Wide Web"_) on Wikipedia
-   [The W3C website](https://w3.org)

---

## Term: Wrapper

-   CodingScripting
-   Glossary
-   Wrapper

---

> In programming languages such as JavaScript, a wrapper is a function that is intended to call one or more other functions, sometimes purely for convenience, and sometimes adapting them to do a slightly different task in the process.

For example, SDK Libraries for AWS are examples of wrappers.

#### See also

-   _Interwiki("wikipedia", "Wrapper function"_) (Wikipedia)
-   [MDN Web Docs Glossary](/en-US/docs/Glossary)

    -   _Glossary("API"_)
    -   _Glossary("Class"_)
    -   _Glossary("Function"_)

---

## Term: XForms

-   CodingScripting
-   Glossary
-   Deprecated
-   XForms

---

> **XForms** is a convention for building Web forms and processing form data in the _glossary("XML"_) format.

> **Note:** No major browser supports XForms any longer—we suggest using [HTML5 forms](/en-US/docs/Learn/Forms) instead.

---

## Term: XHR (XMLHttpRequest)

-   API
-   Beginner
-   CodingScripting
-   Glossary
-   XMLHttpRequest

---

> _domxref("XMLHttpRequest"_) (XHR) is a _Glossary("JavaScript"_) _Glossary("API"_) to create _Glossary("AJAX"_) requests. Its methods provide the ability to send network requests between the _Glossary("browser"_) and a _Glossary("server"_).

#### See also

-   _interwiki("wikipedia", "XMLHttpRequest"_) on Wikipedia
-   [Synchronous vs. Asynchronous Communications](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)
-   The _domxref("XMLHttpRequest"_) object
-   The [documentation on MDN about how to use XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

---

## Term: XHTML

-   CodingScripting
-   Glossary
-   XHTML

---

> **XHTML** is a term that was historically used to describe HTML documents written to conform with _Glossary("XML"_) syntax rules.

### Code sample

(Note that this has not been thoroughly tested for all circumstances and may not necessarily reflect the standard behavior completely.)

Note also that if you wish to allow xml:base, you will need the [xml:base function](/en-US/docs/Archive/Add-ons/Code_snippets/XML/base_function), and the line beginning `var href = ...` should become:

```js
//
var href = getXmlBaseLink(/* XLink sans xml:base */ xinclude.getAttribute('href'), /* Element to query from */ xinclude);
```

---

```js
//

function resolveXIncludes(docu) {
    // http://www.w3.org/TR/xinclude/#xml-included-items
    var xincludes = docu.getElementsByTagNameNS('http://www.w3.org/2001/XInclude', 'include');
    if (xincludes) {
        for (i = 0; i < xincludes.length; i++) {
            var xinclude = xincludes[i];
            var href = xinclude.getAttribute('href');
            var parse = xinclude.getAttribute('parse');
            var xpointer = xinclude.getAttribute('xpointer');
            var encoding = xinclude.getAttribute('encoding'); // e.g., UTF-8 // "text/xml or application/xml or matches text/*+xml or application/*+xml" before encoding (then UTF-8)
            var accept = xinclude.getAttribute('accept'); // header "Accept: "+x
            var acceptLanguage = xinclude.getAttribute('accept-language'); // "Accept-Language: "+x
            var xiFallback = xinclude.getElementsByTagNameNS('http://www.w3.org/2001/XInclude', 'fallback')[0]; // Only one such child is allowed
            if (href === '' || href === null) {
                // Points to same document if empty (null is equivalent to empty string)
                href = null; // Set for uniformity in testing below
                if (parse === 'xml' && xpointer === null) {
                    alert('There must be an XPointer attribute present if "href" is empty an parse is "xml"');
                    return false;
                }
            } else if (href.match(/#$/, '') || href.match(/^#/, '')) {
                alert('Fragment identifiers are disallowed in an XInclude "href" attribute');
                return false;
            }
            var j;
            var xincludeParent = xinclude.parentNode;
            try {
                netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect UniversalBrowserRead'); // Necessary with file:///-located files trying to reach external sites
                if (href !== null) {
                    var response, responseType;
                    var request = new XMLHttpRequest();
                    request.open('GET', href, false);
                    request.setRequestHeader('If-Modified-Since', 'Thu, 1 Jan 1970 00:00:00 GMT');
                    request.setRequestHeader('Cache-Control', 'no-cache');
                    if (accept) {
                        request.setRequestHeader('Accept', accept);
                    }
                    if (acceptLanguage) {
                        request.setRequestHeader('Accept-Language', acceptLanguage);
                    }
                    switch (parse) {
                        case 'text':
                            // Priority should be on media type:

                            var contentType = request.getResponseHeader('Content-Type');

                            //text/xml; charset="utf-8" // Send to get headers first?
                            // Fix: We test for file extensions as well in case file:// doesn't return content type (as seems to be the case); can some other tool be used in FF (or IE) to detect encoding of local file? Probably just need BOM test since other encodings must be specified
                            var patternXML = /\.(svg|xml|xul|rdf|xhtml)$/;
                            if (
                                (contentType && contentType.match(/[text|application]\/(.*)\+?xml/)) ||
                                (href.indexOf('file://') === 0 && href.match(patternXML))
                            ) {
                                /* Grab the response as text (see below for that routine) and then find encoding within*/
                                var encName = '([A-Za-z][A-Za-z0-9._-]*)';
                                var pattern = new RegExp('^<\\?xml\\s+.*encoding\\s*=\\s*([\'"])' + encName + '\\1.*\\?>'); // Check document if not?
                                // Let the request be processed below
                            } else {
                                if (encoding === '' || encoding === null) {
                                    // Encoding has no effect on XML
                                    encoding = 'utf-8';
                                }
                                request.overrideMimeType('text/plain; charset=' + encoding); //'x-user-defined'
                            }
                            responseType = 'responseText';
                            break;
                        case null:
                        case 'xml':
                            responseType = 'responseXML';
                            break;
                        default:
                            alert('XInclude element contains an invalid "parse" attribute value');
                            return false;
                            break;
                    }
                    request.send(null);
                    if ((request.status === 200 || request.status === 0) && request[responseType] !== null) {
                        response = request[responseType];
                        if (responseType === 'responseXML') {
                            // apply xpointer (only xpath1() subset is supported)
                            var responseNodes;
                            if (xpointer) {
                                var xpathResult = response.evaluate(xpointer, response, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                                var a = [];
                                for (var k = 0; k < xpathResult.snapshotLength; k++) {
                                    a[k] = xpathResult.snapshotItem(k);
                                }
                                responseNodes = a;
                            } else {
                                // Otherwise, the response must be a single well-formed document response
                                responseNodes = [response.documentElement]; // Put in array so can be treated the same way as the above
                            }
                            // PREPEND ANY NODE(S) (AS XML) THEN REMOVE XINCLUDE
                            for (j = 0; j < responseNodes.length; j++) {
                                xincludeParent.insertBefore(responseNodes[j], xinclude);
                            }
                            xincludeParent.removeChild(xinclude);
                        } else if (responseType === 'responseText') {
                            if (encName) {
                                var encodingType = response.match(pattern);
                                if (encodingType) {
                                    encodingType = encodingType[2];
                                } else {
                                    encodingType = 'utf-8';
                                }
                                // Need to make a whole new request apparently since cannot convert the encoding after receiving it (to know what the encoding was)
                                var request2 = new XMLHttpRequest();
                                request2.overrideMimeType('text/plain; charset=' + encodingType);
                                request2.open('GET', href, false);
                                request2.setRequestHeader('If-Modified-Since', 'Thu, 1 Jan 1970 00:00:00 GMT');
                                request2.setRequestHeader('Cache-Control', 'no-cache');
                                request2.send(null);
                                response = request2[responseType]; // Update the response for processing
                            }

                            // REPLACE XINCLUDE WITH THE RESPONSE AS TEXT
                            var textNode = docu.createTextNode(response);
                            xincludeParent.replaceChild(textNode, xinclude);
                        }

                        // replace xinclude in doc with response now (as plain text or XML)
                    }
                }
            } catch (e) {
                // Use xi:fallback if XInclude retrieval above failed
                var xiFallbackChildren = xiFallback.childNodes;
                // PREPEND ANY NODE(S) THEN REMOVE XINCLUDE
                for (j = 0; j < xiFallbackChildren.length; j++) {
                    xincludeParent.insertBefore(xiFallbackChildren[j], xinclude);
                }
                xincludeParent.removeChild(xinclude);
            }
        }
    }
    return docu;
}
```

---

## Term: XLink

-   CodingScripting
-   Glossary

---

> XLink is a W3C standard which is used to describe links between XML and XML or other documents. Some its behaviors are left to the implementation to determine how to handle.

Simple XLinks are "supported" in Firefox (at least in SVG and MathML), though they do not work as links if one loads a plain XML document with XLinks and attempts to click on the relevant points in the XML tree.

For those who may have found XLink 1.0 cumbersome for regular links, XLink 1.1 drops the need to specify `xlink:type="simple"` for simple links.

XLink is used in [SVG](/en-US/docs/Web/SVG), [MathML](/en-US/docs/Web/MathML), and other important standards.

### Specifications

-   [XLink 1.0](https://www.w3.org/TR/xlink/)
-   [XLink 1.1](https://www.w3.org/TR/xlink11/) (currently a Working Draft)

##### See also

-   [XML](/en-US/docs/Web/XML)
-   [Code snippets:getAttributeNS](/en-US/docs/Web/API/Element/getAttributeNS) - a wrapper for dealing with some browsers not supporting this DOM method

---

## Term: XML

-   CodingScripting
-   Glossary
-   XML
-   l10n:priority

---

> eXtensible Markup Language (XML) is a generic markup language specified by the W3C. The information technology (IT) industry uses many languages based on XML as data-description languages.

#### See also

-   [XML introduction](/en-US/docs/Web/XML/XML_introduction)

---

## Term: XPath

-   CodingScripting
-   Glossary
-   XML
-   XPath

---

> **XPath** is a query language that can access sections and content in an _glossary("XML"_) document.

#### See also

-   [XPath documentation on MDN](/en-US/docs/Web/XPath)
-   [XPath specification](https://www.w3.org/TR/xpath-30/)
-   [Official website](https://www.w3.org/standards/techs/xpath#w3c_all)
-   _Interwiki("wikipedia", "XPath"_) on Wikipedia

---

## Term: XQuery

-   CodingScripting
-   Glossary
-   XML
-   XQuery

---

> **XQuery** is a computer language for updating, retrieving, and calculating data in _glossary("XML"_) databases.

#### See also

-   [Official website](https://www.w3.org/XML/Query/)
-   _Interwiki("wikipedia", "XQuery"_) on Wikipedia

---

## Term: XSLT

-   CodingScripting
-   Glossary
-   XML
-   XSLT

---

> _eXtensible Stylesheet Language Transformations_ (**XSLT**) is a declarative language used to convert _Glossary("XML"_) documents into other XML documents, _Glossary("HTML"_), _Glossary("PDF"_), plain text, and so on.

XSLT has its own processor that accepts XML input, or any format convertible to an XQuery and XPath Data Model. The XSLT processor produces a new document based on the XML document and an XSLT stylesheet, making no changes to the original files in the process.

#### See also

-   _Interwiki("wikipedia", "XSLT"_) on Wikipedia
-   [XSLT documentation on MDN](/en-US/docs/Web/XSLT)
