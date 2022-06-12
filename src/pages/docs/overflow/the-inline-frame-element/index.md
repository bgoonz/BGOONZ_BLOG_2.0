---
title: The Inline Frame element
template: docs
excerpt: element represents a nested browsing context, embedding another HTML
    page into the current one.
---

<!--StartFragment-->

# \<iframe>: The Inline Frame element

The **`<iframe>`** [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) element represents a nested [browsing context](https://developer.mozilla.org/en-US/docs/Glossary/Browsing_context), embedding another HTML page into the current one.

## [Try it](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#try_it 'Permalink to Try it')

Each embedded browsing context has its own [session history](https://developer.mozilla.org/en-US/docs/Web/API/History) and [document](https://developer.mozilla.org/en-US/docs/Web/API/Document). The browsing context that embeds the others is called the \**parent* browsing context\*. The \*topmost\* browsing context — the one with no parent — is usually the browser window, represented by the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object.

**Warning:** Because each browsing context is a complete document environment, every `<iframe>` in a page requires increased memory and other computing resources. While theoretically you can use as many `<iframe>`s as you like, check for performance problems.

| [Content categories](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories) | [Flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#flow_content), [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content), embedded content, interactive content, palpable content. |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                                                                | None.                                                                                                                                                                                                                                                                              |
| Tag omission                                                                                     | None, both the starting and ending tag are mandatory.                                                                                                                                                                                                                              |
| Permitted parents                                                                                | Any element that accepts embedded content.                                                                                                                                                                                                                                         |
| Implicit ARIA role                                                                               | [No corresponding role](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                                                                                                                                                |
| Permitted ARIA roles                                                                             | `application`, `document`, `img`, `none`, `presentation`                                                                                                                                                                                                                           |
| DOM interface                                                                                    | [`HTMLIFrameElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)                                                                                                                                                                                          |

## [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attributes 'Permalink to Attributes')

This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

-   **[`allow`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allow)**

    Specifies a [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for the `<iframe>`. The policy defines what features are available to the `<iframe>` based on the origin of the request (e.g. access to the microphone, camera, battery, web-share API, etc.).

    For more information and examples see: [Using Feature Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) > [The iframe allow attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy#the_iframe_allow_attribute).

-   **[`allowfullscreen`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allowfullscreen)**

    Set to `true` if the `<iframe>` can activate fullscreen mode by calling the [`requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen 'requestFullscreen()') method.

    **Note:** This attribute is considered a legacy attribute and redefined as `allow="fullscreen"`.

-   **[`allowpaymentrequest`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allowpaymentrequest)**

    Set to `true` if a cross-origin `<iframe>` should be allowed to invoke the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API).

    **Note:** This attribute is considered a legacy attribute and redefined as `allow="payment"`.

-   **[`csp`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-csp)** Experimental

    A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) enforced for the embedded resource. See [`HTMLIFrameElement.csp`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp) for details.

-   **[`fetchpriority`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-fetchpriority)**

    Provides a hint of the relative priority to use when fetching the iframe document. Allowed values:

    -   `high`

        Signals a high-priority fetch relative to other iframe documents.

    -   `low`

        Signals a low-priority fetch relative to other iframe documents.

    -   `auto`

        Default: Signals automatic determination of fetch priority relative to other iframe documents.

-   **[`height`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-height)**

    The height of the frame in CSS pixels. Default is `150`.

-   **[`loading`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-loading)** Experimental

    Indicates how the browser should load the iframe:

    -   `eager`: Load the iframe immediately, regardless if it is outside the visible viewport (this is the default value).
    -   `lazy`: Defer loading of the iframe until it reaches a calculated distance from the viewport, as defined by the browser.

-   **[`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-name)**

    A targetable name for the embedded browsing context. This can be used in the `target` attribute of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), or [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) elements; the `formtarget` attribute of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) elements; or the `windowName` parameter in the [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open 'window.open()') method.

-   **[`referrerpolicy`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-referrerpolicy)**

    Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the frame's resource:

    -   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header will not be sent.
    -   `no-referrer-when-downgrade`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS) ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/https)).
    -   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL), [host](https://developer.mozilla.org/en-US/docs/Glossary/Host), and [port](https://developer.mozilla.org/en-US/docs/Glossary/Port).
    -   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    -   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy), but cross-origin requests will contain no referrer information.
    -   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
    -   `strict-origin-when-cross-origin` (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
    -   `unsafe-url`: The referrer will include the origin *and* the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.

-   **[`sandbox`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox)**

    Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:

    -   `allow-downloads-without-user-activation` Experimental: Allows for downloads to occur without a gesture from the user.
    -   `allow-downloads`: Allows for downloads to occur with a gesture from the user.
    -   `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.
    -   `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).
    -   `allow-orientation-lock`: Lets the resource [lock the screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation).
    -   `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API).
    -   `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.
    -   `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.
    -   `allow-presentation`: Lets the resource start a [presentation session](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest).
    -   `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the [same-origin policy](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy) (potentially preventing access to [data storage/cookies](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) and some JavaScript APIs).
    -   `allow-scripts`: Lets the resource run scripts (but not create popup windows).
    -   `allow-storage-access-by-user-activation` Experimental: Lets the resource request access to the parent's storage capabilities with the [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API).
    -   `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).
    -   `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.

    **Note:**

    -   When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute — making it no more secure than not using the `sandbox` attribute at all.
    -   Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` — such as if the viewer opens the frame in a new tab. Such content should be also served from a *separate origin* to limit potential damage.
    -   The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.

-   **[`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-src)**

    The URL of the page to embed. Use a value of `about:blank` to embed an empty page that conforms to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#inherited_origins). Also note that programmatically removing an `<iframe>`'s src attribute (e.g. via [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.

-   **[`srcdoc`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-srcdoc)**

    Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute.

-   **[`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-width)**

    The width of the frame in CSS pixels. Default is `300`.

### [Deprecated attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#deprecated_attributes 'Permalink to Deprecated attributes')

These attributes are deprecated and may no longer be supported by all user agents. You should not use them in new content, and try to remove them from existing content.

-   **[`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-align)** Deprecated

    The alignment of this element with respect to the surrounding context.

-   **[`frameborder`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-frameborder)** Deprecated

    The value `1` (the default) draws a border around this frame. The value `0` removes the border around this frame, but you should instead use the CSS property [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) to control `<iframe>` borders.

-   **[`longdesc`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-longdesc)** Deprecated

    A URL of a long description of the frame's content. Due to widespread misuse, this is not helpful for non-visual browsers.

-   **[`marginheight`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-marginheight)** Deprecated

    The amount of space in pixels between the frame's content and its top and bottom borders.

-   **[`marginwidth`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-marginwidth)** Deprecated

    The amount of space in pixels between the frame's content and its left and right borders.

-   **[`scrolling`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-scrolling)** Deprecated

    Indicates when the browser should provide a scrollbar for the frame:

    -   `auto`: Only when the frame's content is larger than its dimensions.
    -   `yes`: Always show a scrollbar.
    -   `no`: Never show a scrollbar.

## [Scripting](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#scripting 'Permalink to Scripting')

Inline frames, like [`<frame>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame) elements, are included in the [`window.frames`](https://developer.mozilla.org/en-US/docs/Web/API/Window/frames) pseudo-array.

With the DOM [`HTMLIFrameElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement) object, scripts can access the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object of the framed resource via the [`contentWindow`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow 'contentWindow') property. The [`contentDocument`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument 'contentDocument') property refers to the `document` inside the `<iframe>`, same as `contentWindow.document`.

From the inside of a frame, a script can get a reference to its parent window with [`window.parent`](https://developer.mozilla.org/en-US/docs/Web/API/Window/parent).

Script access to a frame's content is subject to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). Scripts cannot access most properties in other `window` objects if the script was loaded from a different origin, including scripts inside a frame accessing the frame's parent. Cross-origin communication can be achieved using [`Window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

## [Positioning and scaling](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#positioning_and_scaling 'Permalink to Positioning and scaling')

As a [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), the position, alignment, and scaling of the embedded document within the `<iframe>` element's box, can be adjusted with the [`object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) and [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) properties.

## [Examples](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#examples 'Permalink to Examples')

### [A simple <iframe>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#a_simple_iframe 'Permalink to A simple <iframe>')

This example embeds the page at [https://example.org](https://example.org/) in an iframe.

#### HTML

```

```

Copy to Clipboard

#### Result

[A simple iframe sample](https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/HTML/Element/iframe/_sample_.a_simple_iframe.html)

## [Accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#accessibility_concerns 'Permalink to Accessibility concerns')

People navigating with assistive technology such as a screen reader can use the [`title` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) on an `<iframe>` to label its content. The title's value should concisely describe the embedded content:

```

```

Copy to Clipboard

Without this title, they have to navigate into the `<iframe>` to determine what its embedded content is. This context shift can be confusing and time-consuming, especially for pages with multiple `<iframe>`s and/or if embeds contain interactive content like video or audio.

<!--EndFragment-->
