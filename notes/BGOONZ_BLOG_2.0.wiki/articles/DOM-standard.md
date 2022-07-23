# DOM Standard

> ## Excerpt
>
> This specification depends on the Infra Standard. [INFRA]

---

## 1\. Infrastructure[](https://dom.spec.whatwg.org/#infrastructure)

This specification depends on the Infra Standard. [\[INFRA\]](https://dom.spec.whatwg.org/#biblio-infra)

Some of the terms used in this specification are defined in Encoding, Selectors, Web IDL, XML, and Namespaces in XML. [\[ENCODING\]](https://dom.spec.whatwg.org/#biblio-encoding) [\[SELECTORS4\]](https://dom.spec.whatwg.org/#biblio-selectors4) [\[WEBIDL\]](https://dom.spec.whatwg.org/#biblio-webidl) [\[XML\]](https://dom.spec.whatwg.org/#biblio-xml) [\[XML-NAMES\]](https://dom.spec.whatwg.org/#biblio-xml-names)

When extensions are needed, the DOM Standard can be updated accordingly, or a new standard can be written that hooks into the provided extensibility hooks for applicable specifications.

### 1.1. Trees[](https://dom.spec.whatwg.org/#trees)

A tree is a finite hierarchical tree structure. In tree order is preorder, depth-first traversal of a [tree](https://dom.spec.whatwg.org/#concept-tree).

An object that participates in a [tree](https://dom.spec.whatwg.org/#concept-tree) has a parent, which is either null or an object, and has children, which is an [ordered set](https://infra.spec.whatwg.org/#ordered-set) of objects. An object A whose [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is object B is a [child](https://dom.spec.whatwg.org/#concept-tree-child) of B.

The root of an object is itself, if its [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, or else it is the [root](https://dom.spec.whatwg.org/#concept-tree-root) of its [parent](https://dom.spec.whatwg.org/#concept-tree-parent). The [root](https://dom.spec.whatwg.org/#concept-tree-root) of a [tree](https://dom.spec.whatwg.org/#concept-tree) is any object [participating](https://dom.spec.whatwg.org/#concept-tree-participate) in that [tree](https://dom.spec.whatwg.org/#concept-tree) whose [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null.

An object A is called a descendant of an object B, if either A is a [child](https://dom.spec.whatwg.org/#concept-tree-child) of B or A is a [child](https://dom.spec.whatwg.org/#concept-tree-child) of an object C that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of B.

An inclusive descendant is an object or one of its [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant).

An object A is called an ancestor of an object B if and only if B is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of A.

An inclusive ancestor is an object or one of its [ancestors](https://dom.spec.whatwg.org/#concept-tree-ancestor).

An object A is called a sibling of an object B, if and only if B and A share the same non-null [parent](https://dom.spec.whatwg.org/#concept-tree-parent).

An inclusive sibling[](https://dom.spec.whatwg.org/#concept-tree-inclusive-sibling) is an object or one of its [siblings](https://dom.spec.whatwg.org/#concept-tree-sibling).

An object A is preceding an object B if A and B are in the same [tree](https://dom.spec.whatwg.org/#concept-tree) and A comes before B in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

An object A is following an object B if A and B are in the same [tree](https://dom.spec.whatwg.org/#concept-tree) and A comes after B in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

The first child of an object is its first [child](https://dom.spec.whatwg.org/#concept-tree-child) or null if it has no [children](https://dom.spec.whatwg.org/#concept-tree-child).

The last child of an object is its last [child](https://dom.spec.whatwg.org/#concept-tree-child) or null if it has no [children](https://dom.spec.whatwg.org/#concept-tree-child).

The previous sibling of an object is its first [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) or null if it has no [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling).

The next sibling of an object is its first [following](https://dom.spec.whatwg.org/#concept-tree-following) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) or null if it has no [following](https://dom.spec.whatwg.org/#concept-tree-following) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling).

The index of an object is its number of [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) [siblings](https://dom.spec.whatwg.org/#concept-tree-sibling), or 0 if it has none.

### 1.2. Ordered sets[](https://dom.spec.whatwg.org/#ordered-sets)

The ordered set parser takes a string input and then runs these steps:

1.  Let inputTokens be the result of [splitting input on ASCII whitespace](https://infra.spec.whatwg.org/#split-on-ascii-whitespace).
2.  Let tokens be a new [ordered set](https://infra.spec.whatwg.org/#ordered-set).
3.  [For each](https://infra.spec.whatwg.org/#list-iterate) token in inputTokens, [append](https://infra.spec.whatwg.org/#set-append) token to tokens.
4.  Return tokens.

The ordered set serializer takes a set and returns the [concatenation](https://infra.spec.whatwg.org/#string-concatenate) of set using U+0020 SPACE.

### 1.3. Selectors[](https://dom.spec.whatwg.org/#selectors)

To scope-match a selectors string selectors against a node, run these steps:

1.  Let s be the result of [parse a selector](https://drafts.csswg.org/selectors-4/#parse-a-selector) selectors. [\[SELECTORS4\]](https://dom.spec.whatwg.org/#biblio-selectors4)
2.  If s is failure, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Return the result of [match a selector against a tree](https://drafts.csswg.org/selectors-4/#match-a-selector-against-a-tree) with s and node’s [root](https://dom.spec.whatwg.org/#concept-tree-root) using [scoping root](https://drafts.csswg.org/selectors-4/#scoping-root) node. [\[SELECTORS4\]](https://dom.spec.whatwg.org/#biblio-selectors4).

Support for namespaces within selectors is not planned and will not be added.

### 1.4. Namespaces[](https://dom.spec.whatwg.org/#namespaces)

To validate a qualifiedName, [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if qualifiedName does not match the `[QName](https://www.w3.org/TR/xml-names/#NT-QName)` production.

To validate and extract a namespace and qualifiedName, run these steps:

1.  If namespace is the empty string, then set it to null.
2.  [Validate](https://dom.spec.whatwg.org/#validate) qualifiedName.
3.  Let prefix be null.
4.  Let localName be qualifiedName.
5.  If qualifiedName contains a U+003A (:), then [strictly split](https://infra.spec.whatwg.org/#strictly-split) the string on it and set prefix to the part before and localName to the part after.
6.  If prefix is non-null and namespace is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NamespaceError](https://webidl.spec.whatwg.org/#namespaceerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
7.  If prefix is "`xml`" and namespace is not the [XML namespace](https://infra.spec.whatwg.org/#xml-namespace), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NamespaceError](https://webidl.spec.whatwg.org/#namespaceerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
8.  If either qualifiedName or prefix is "`xmlns`" and namespace is not the [XMLNS namespace](https://infra.spec.whatwg.org/#xmlns-namespace), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NamespaceError](https://webidl.spec.whatwg.org/#namespaceerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
9.  If namespace is the [XMLNS namespace](https://infra.spec.whatwg.org/#xmlns-namespace) and neither qualifiedName nor prefix is "`xmlns`", then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NamespaceError](https://webidl.spec.whatwg.org/#namespaceerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
10. Return namespace, prefix, and localName.

## 2\. Events[](https://dom.spec.whatwg.org/#events)

### 2.1. Introduction to "DOM Events"[](https://dom.spec.whatwg.org/#introduction-to-dom-events)

Throughout the web platform [events](https://dom.spec.whatwg.org/#concept-event) are [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) to objects to signal an occurrence, such as network activity or user interaction. These objects implement the `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` interface and can therefore add [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) to observe [events](https://dom.spec.whatwg.org/#concept-event) by calling `[addEventListener()](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)`:

obj.addEventListener("load", imgFetched)

function imgFetched(ev) {
// great success
…
}

[Event listeners](https://dom.spec.whatwg.org/#concept-event-listener) can be removed by utilizing the `[removeEventListener()](https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener)` method, passing the same arguments.

Alternatively, [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) can be removed by passing an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` to `[addEventListener()](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)` and calling `[abort()](https://dom.spec.whatwg.org/#dom-abortcontroller-abort)` on the controller owning the signal.

[Events](https://dom.spec.whatwg.org/#concept-event) are objects too and implement the `[Event](https://dom.spec.whatwg.org/#event)` interface (or a derived interface). In the example above ev is the [event](https://dom.spec.whatwg.org/#concept-event). ev is passed as an argument to the [event listener](https://dom.spec.whatwg.org/#concept-event-listener)’s [callback](https://dom.spec.whatwg.org/#event-listener-callback) (typically a JavaScript Function as shown above). [Event listeners](https://dom.spec.whatwg.org/#concept-event-listener) key off the [event](https://dom.spec.whatwg.org/#concept-event)’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value ("`load`" in the above example). The [event](https://dom.spec.whatwg.org/#concept-event)’s `[target](https://dom.spec.whatwg.org/#dom-event-target)` attribute value returns the object to which the [event](https://dom.spec.whatwg.org/#concept-event) was [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) (obj above).

Although [events](https://dom.spec.whatwg.org/#concept-event) are typically [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) by the user agent as the result of user interaction or the completion of some task, applications can [dispatch](https://dom.spec.whatwg.org/#concept-event-dispatch) [events](https://dom.spec.whatwg.org/#concept-event) themselves by using what are commonly known as synthetic events:

// add an appropriate event listener
obj.addEventListener("cat", function(e) { process(e.detail) })

// create and dispatch the event
var event \= new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
obj.dispatchEvent(event)

Apart from signaling, [events](https://dom.spec.whatwg.org/#concept-event) are sometimes also used to let an application control what happens next in an operation. For instance as part of form submission an [event](https://dom.spec.whatwg.org/#concept-event) whose `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value is "`submit`" is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch). If this [event](https://dom.spec.whatwg.org/#concept-event)’s `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)` method is invoked, form submission will be terminated. Applications who wish to make use of this functionality through [events](https://dom.spec.whatwg.org/#concept-event) [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) by the application (synthetic events) can make use of the return value of the `[dispatchEvent()](https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent)` method:

if(obj.dispatchEvent(event)) {
// event was not canceled, time for some magic
…
}

When an [event](https://dom.spec.whatwg.org/#concept-event) is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) to an object that [participates](https://dom.spec.whatwg.org/#concept-tree-participate) in a [tree](https://dom.spec.whatwg.org/#concept-tree) (e.g., an [element](https://dom.spec.whatwg.org/#concept-element)), it can reach [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) on that object’s [ancestors](https://dom.spec.whatwg.org/#concept-tree-ancestor) too. Effectively, all the object’s [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) whose [capture](https://dom.spec.whatwg.org/#event-listener-capture) is true are invoked, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order). And then, if [event](https://dom.spec.whatwg.org/#concept-event)’s `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` is true, all the object’s [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) whose [capture](https://dom.spec.whatwg.org/#event-listener-capture) is false are invoked, now in reverse [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

Let’s look at an example of how [events](https://dom.spec.whatwg.org/#concept-event) work in a [tree](https://dom.spec.whatwg.org/#concept-tree):

<!doctype html>

<html\>
<head\>
<title\>Boring example</title\>
</head\>
<body\>
<p\>Hello <span id\=x\>world</span\>!</p\>
<script\>
function test(e) {
debug(e.target, e.currentTarget, e.eventPhase)
}
document.addEventListener("hey", test, {capture: true})
document.body.addEventListener("hey", test)
var ev \= new Event("hey", {bubbles:true})
document.getElementById("x").dispatchEvent(ev)
</script\>
</body\>
</html\>

The `debug` function will be invoked twice. Each time the [event](https://dom.spec.whatwg.org/#concept-event)’s `[target](https://dom.spec.whatwg.org/#dom-event-target)` attribute value will be the `span` [element](https://dom.spec.whatwg.org/#concept-element). The first time `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` attribute’s value will be the [document](https://dom.spec.whatwg.org/#concept-document), the second time the `body` [element](https://dom.spec.whatwg.org/#concept-element). `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute’s value switches from `[CAPTURING_PHASE](https://dom.spec.whatwg.org/#dom-event-capturing_phase)` to `[BUBBLING_PHASE](https://dom.spec.whatwg.org/#dom-event-bubbling_phase)`. If an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) was registered for the `span` [element](https://dom.spec.whatwg.org/#concept-element), `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute’s value would have been `[AT_TARGET](https://dom.spec.whatwg.org/#dom-event-at_target)`.

### 2.2. Interface `[Event](https://dom.spec.whatwg.org/#event)`[](https://dom.spec.whatwg.org/#interface-event)

[Event](https://developer.mozilla.org/en-US/docs/Web/API/Event 'The Event interface represents an event which takes place in the DOM.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera4+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=(Window,Worker,AudioWorklet)\]
interface `Event` {
`constructor`([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `type`[](https://dom.spec.whatwg.org/#dom-event-event-type-eventinitdict-type), optional [EventInit](https://dom.spec.whatwg.org/#dictdef-eventinit) `eventInitDict`[](https://dom.spec.whatwg.org/#dom-event-event-type-eventinitdict-eventinitdict) = {});

readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [type](https://dom.spec.whatwg.org/#dom-event-type);
readonly attribute [EventTarget](https://dom.spec.whatwg.org/#eventtarget)? [target](https://dom.spec.whatwg.org/#dom-event-target);
readonly attribute [EventTarget](https://dom.spec.whatwg.org/#eventtarget)? [srcElement](https://dom.spec.whatwg.org/#dom-event-srcelement); // legacy
readonly attribute [EventTarget](https://dom.spec.whatwg.org/#eventtarget)? [currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget);
[sequence](https://webidl.spec.whatwg.org/#idl-sequence)<[EventTarget](https://dom.spec.whatwg.org/#eventtarget)\> [composedPath](https://dom.spec.whatwg.org/#dom-event-composedpath)();

const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [NONE](https://dom.spec.whatwg.org/#dom-event-none) = 0;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [CAPTURING_PHASE](https://dom.spec.whatwg.org/#dom-event-capturing_phase) = 1;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [AT_TARGET](https://dom.spec.whatwg.org/#dom-event-at_target) = 2;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [BUBBLING_PHASE](https://dom.spec.whatwg.org/#dom-event-bubbling_phase) = 3;
readonly attribute [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase);

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [stopPropagation](https://dom.spec.whatwg.org/#dom-event-stoppropagation)();
attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [cancelBubble](https://dom.spec.whatwg.org/#dom-event-cancelbubble); // legacy alias of .stopPropagation()
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [stopImmediatePropagation](https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation)();

readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles);
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable);
attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [returnValue](https://dom.spec.whatwg.org/#dom-event-returnvalue); // legacy
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [preventDefault](https://dom.spec.whatwg.org/#dom-event-preventdefault)();
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [defaultPrevented](https://dom.spec.whatwg.org/#dom-event-defaultprevented);
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [composed](https://dom.spec.whatwg.org/#dom-event-composed);

\[[LegacyUnforgeable](https://webidl.spec.whatwg.org/#LegacyUnforgeable)\] readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted);
readonly attribute [DOMHighResTimeStamp](https://w3c.github.io/hr-time/#dom-domhighrestimestamp) [timeStamp](https://dom.spec.whatwg.org/#dom-event-timestamp);

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [initEvent](https://dom.spec.whatwg.org/#dom-event-initevent)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `type`[](https://dom.spec.whatwg.org/#dom-event-initevent-type-bubbles-cancelable-type), optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `bubbles`[](https://dom.spec.whatwg.org/#dom-event-initevent-type-bubbles-cancelable-bubbles) = false, optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `cancelable`[](https://dom.spec.whatwg.org/#dom-event-initevent-type-bubbles-cancelable-cancelable) = false); // legacy
};

dictionary `EventInit` {
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `bubbles`[](https://dom.spec.whatwg.org/#dom-eventinit-bubbles) = false;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `cancelable`[](https://dom.spec.whatwg.org/#dom-eventinit-cancelable) = false;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `composed`[](https://dom.spec.whatwg.org/#dom-eventinit-composed) = false;
};

An `[Event](https://dom.spec.whatwg.org/#event)` object is simply named an event. It allows for signaling that something has occurred, e.g., that an image has completed downloading.

A potential event target is null or an `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object.

An [event](https://dom.spec.whatwg.org/#concept-event) has an associated target (a [potential event target](https://dom.spec.whatwg.org/#potential-event-target)). Unless stated otherwise it is null.

An [event](https://dom.spec.whatwg.org/#concept-event) has an associated (a [potential event target](https://dom.spec.whatwg.org/#potential-event-target)). Unless stated otherwise it is null.

Other specifications use [relatedTarget](https://dom.spec.whatwg.org/#event-relatedtarget) to define a `relatedTarget` attribute. [\[UIEVENTS\]](https://dom.spec.whatwg.org/#biblio-uievents)

An [event](https://dom.spec.whatwg.org/#concept-event) has an associated touch target list (a [list](https://infra.spec.whatwg.org/#list) of zero or more [potential event targets](https://dom.spec.whatwg.org/#potential-event-target)). Unless stated otherwise it is the empty list.

The [touch target list](https://dom.spec.whatwg.org/#event-touch-target-list) is for the exclusive use of defining the `[TouchEvent](https://w3c.github.io/touch-events/#idl-def-touchevent)` interface and related interfaces. [\[TOUCH-EVENTS\]](https://dom.spec.whatwg.org/#biblio-touch-events)

An [event](https://dom.spec.whatwg.org/#concept-event) has an associated path. A [path](https://dom.spec.whatwg.org/#event-path) is a [list](https://infra.spec.whatwg.org/#list) of [structs](https://infra.spec.whatwg.org/#struct). Each [struct](https://infra.spec.whatwg.org/#struct) consists of an invocation target (an `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object), an invocation-target-in-shadow-tree (a boolean), a shadow-adjusted target (a [potential event target](https://dom.spec.whatwg.org/#potential-event-target)), a (a [potential event target](https://dom.spec.whatwg.org/#potential-event-target)), a touch target list (a [list](https://infra.spec.whatwg.org/#list) of [potential event targets](https://dom.spec.whatwg.org/#potential-event-target)), a root-of-closed-tree (a boolean), and a slot-in-closed-tree (a boolean). A [path](https://dom.spec.whatwg.org/#event-path) is initially the empty list.

[Event/Event](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event 'The Event() constructor creates a new Event object. An event created in this way is called a synthetic event, as opposed to an event fired by the browser, and can be dispatched by a script.')

In all current engines.

Firefox11+Safari6+Chrome15+

---

Opera11.6+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android14+iOS Safari6+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12+

---

Node.js15.0.0+

`event = new [Event](https://dom.spec.whatwg.org/#dom-event-event)(type [, eventInitDict])`

Returns a new event whose `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value is set to type. The eventInitDict argument allows for setting the `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` and `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attributes via object members of the same name.

[Event/type](https://developer.mozilla.org/en-US/docs/Web/API/Event/type "The type read-only property of the Event interface returns a string containing the event's type. It is set when the event is constructed and is the name commonly used to refer to the specific event, such as click, load, or error.")

In all current engines.

Firefox1.5+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`` event . `[type](https://dom.spec.whatwg.org/#dom-event-type)`  ``

Returns the type of event, e.g. "`click`", "`hashchange`", or "`submit`".

[Event/target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target 'The read-only target property of the Event interface is a reference to the object onto which the event was dispatched. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`` event . `[target](https://dom.spec.whatwg.org/#dom-event-target)`  ``

Returns the object to which event is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) (its [target](https://dom.spec.whatwg.org/#event-target)).

[Event/currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget 'The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.')

In all current engines.

Firefox1+Safari10+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari10+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`` event . `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)`  ``

Returns the object whose [event listener](https://dom.spec.whatwg.org/#concept-event-listener)’s [callback](https://dom.spec.whatwg.org/#event-listener-callback) is currently being invoked.

[Event/composedPath](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath "The composedPath() method of the Event interface returns the event's path which is an array of the objects on which listeners will be invoked. This does not include nodes in shadow trees if the shadow root was created with its ShadowRoot.mode closed.")

In all current engines.

Firefox52+Safari10+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android52+iOS Safari10+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

---

Node.js14.5.0+

`` event . `[composedPath()](https://dom.spec.whatwg.org/#dom-event-composedpath)`  ``

Returns the [invocation target](https://dom.spec.whatwg.org/#event-path-invocation-target) objects of event’s [path](https://dom.spec.whatwg.org/#event-path) (objects on which listeners will be invoked), except for any [nodes](https://dom.spec.whatwg.org/#concept-node) in [shadow trees](https://dom.spec.whatwg.org/#concept-shadow-tree) of which the [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)’s [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is "`closed`" that are not reachable from event’s `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)`.

[Event/eventPhase](https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase 'The eventPhase read-only property of the Event interface indicates which phase of the event flow is currently being evaluated.')

In all current engines.

Firefox1.5+Safari4+Chrome45+

---

Opera32+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android45+Android WebView45+Samsung Internet5.0+Opera Mobile32+

---

Node.js14.5.0+

`` event . `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)`  ``

Returns the [event](https://dom.spec.whatwg.org/#concept-event)’s phase, which is one of `[NONE](https://dom.spec.whatwg.org/#dom-event-none)`, `[CAPTURING_PHASE](https://dom.spec.whatwg.org/#dom-event-capturing_phase)`, `[AT_TARGET](https://dom.spec.whatwg.org/#dom-event-at_target)`, and `[BUBBLING_PHASE](https://dom.spec.whatwg.org/#dom-event-bubbling_phase)`.

[Event/stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation 'The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. If you want to stop those behaviors, see the preventDefault() method. It also does not prevent immediate propagation to other event-handlers. If you want to stop those, see stopImmediatePropagation().')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`event . [stopPropagation](https://dom.spec.whatwg.org/#dom-event-stoppropagation)()`

When [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) in a [tree](https://dom.spec.whatwg.org/#concept-tree), invoking this method prevents event from reaching any objects other than the current object.

[Event/stopImmediatePropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation 'The stopImmediatePropagation() method of the Event interface prevents other listeners of the same event from being called.')

In all current engines.

Firefox10+Safari5+Chrome6+

---

Opera15+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android10+iOS Safari5+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile14+

---

Node.js14.5.0+

`event . [stopImmediatePropagation](https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation)()`

Invoking this method prevents event from reaching any registered [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) after the current one finishes running and, when [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) in a [tree](https://dom.spec.whatwg.org/#concept-tree), also prevents event from reaching any other objects.

[Event/bubbles](https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles 'The bubbles read-only property of the Event interface indicates whether the event bubbles up through the DOM tree or not.')

In all current engines.

Firefox1.5+Safari4+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12.1+

---

Node.js14.5.0+

`` event . `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)`  ``

Returns true or false depending on how event was initialized. True if event goes through its [target](https://dom.spec.whatwg.org/#event-target)’s [ancestors](https://dom.spec.whatwg.org/#concept-tree-ancestor) in reverse [tree order](https://dom.spec.whatwg.org/#concept-tree-order); otherwise false.

[Event/cancelable](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable 'The cancelable read-only property of the Event interface indicates whether the event can be canceled, and therefore prevented as if the event never happened.')

In all current engines.

Firefox1.5+Safari4+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12.1+

---

Node.js14.5.0+

`` event . `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)`  ``

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch), can be canceled by invoking the `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)` method.

[Event/preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault 'The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`event . [preventDefault](https://dom.spec.whatwg.org/#dom-event-preventdefault)()`

If invoked when the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute value is true, and while executing a listener for the event with `[passive](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive)` set to false, signals to the operation that caused event to be [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) that it needs to be canceled.

[Event/defaultPrevented](https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented 'The defaultPrevented read-only property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.')

In all current engines.

Firefox6+Safari5+Chrome18+

---

Opera11+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android6+iOS Safari5+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile11+

---

Node.js14.5.0+

`` event . `[defaultPrevented](https://dom.spec.whatwg.org/#dom-event-defaultprevented)`  ``

Returns true if `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)` was invoked successfully to indicate cancelation; otherwise false.

[Event/composed](https://developer.mozilla.org/en-US/docs/Web/API/Event/composed 'The read-only composed property of the Event interface returns a boolean value which indicates whether or not the event will propagate across the shadow DOM boundary into the standard DOM.')

In all current engines.

Firefox52+Safari10+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android52+iOS Safari10+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

---

Node.js14.5.0+

`` event . `[composed](https://dom.spec.whatwg.org/#dom-event-composed)`  ``

Returns true or false depending on how event was initialized. True if event invokes listeners past a `[ShadowRoot](https://dom.spec.whatwg.org/#shadowroot)` [node](https://dom.spec.whatwg.org/#concept-node) that is the [root](https://dom.spec.whatwg.org/#concept-tree-root) of its [target](https://dom.spec.whatwg.org/#event-target); otherwise false.

[Event/isTrusted](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted 'The isTrusted read-only property of the Event interface is a boolean value that is true when the event was generated by a user action, and false when the event was created or modified by a script or dispatched via EventTarget.dispatchEvent().')

In all current engines.

Firefox1.5+Safari10+Chrome46+

---

Opera33+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari10+Chrome for Android46+Android WebView46+Samsung Internet5.0+Opera Mobile33+

---

Node.js14.5.0+

`` event . `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)`  ``

Returns true if event was [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) by the user agent, and false otherwise.

[Event/timeStamp](https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp 'The timeStamp read-only property of the Event interface returns the time (in milliseconds) at which the event was created.')

In all current engines.

Firefox1.5+Safari4+Chrome49+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android49+Android WebView49+Samsung Internet5.0+Opera Mobile36+

---

Node.js14.5.0+

`` event . `[timeStamp](https://dom.spec.whatwg.org/#dom-event-timestamp)`  ``

Returns the event’s timestamp as the number of milliseconds measured relative to the [time origin](https://w3c.github.io/hr-time/#dfn-time-origin).

The `type` attribute must return the value it was initialized to. When an [event](https://dom.spec.whatwg.org/#concept-event) is created the attribute must be initialized to the empty string.

The `target` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [target](https://dom.spec.whatwg.org/#event-target).

The `srcElement` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [target](https://dom.spec.whatwg.org/#event-target).

The `currentTarget` attribute must return the value it was initialized to. When an [event](https://dom.spec.whatwg.org/#concept-event) is created the attribute must be initialized to null.

The `composedPath()` method steps are:

1.  Let composedPath be an empty [list](https://infra.spec.whatwg.org/#list).
2.  Let path be [this](https://webidl.spec.whatwg.org/#this)’s [path](https://dom.spec.whatwg.org/#event-path).
3.  If path [is empty](https://infra.spec.whatwg.org/#list-is-empty), then return composedPath.
4.  Let currentTarget be [this](https://webidl.spec.whatwg.org/#this)’s `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` attribute value.
5.  [Append](https://infra.spec.whatwg.org/#list-append) currentTarget to composedPath.
6.  Let currentTargetIndex be 0.
7.  Let currentTargetHiddenSubtreeLevel be 0.
8.  Let index be path’s [size](https://infra.spec.whatwg.org/#list-size) − 1.
9.  While index is greater than or equal to 0:

    1.  If path\[index\]'s [root-of-closed-tree](https://dom.spec.whatwg.org/#event-path-root-of-closed-tree) is true, then increase currentTargetHiddenSubtreeLevel by 1.
    2.  If path\[index\]'s [invocation target](https://dom.spec.whatwg.org/#event-path-invocation-target) is currentTarget, then set currentTargetIndex to index and [break](https://infra.spec.whatwg.org/#iteration-break).
    3.  If path\[index\]'s [slot-in-closed-tree](https://dom.spec.whatwg.org/#event-path-slot-in-closed-tree) is true, then decrease currentTargetHiddenSubtreeLevel by 1.
    4.  Decrease index by 1.

10. Let currentHiddenLevel and maxHiddenLevel be currentTargetHiddenSubtreeLevel.

11. Set index to currentTargetIndex − 1.

12. While index is greater than or equal to 0:

13. If path\[index\]'s [root-of-closed-tree](https://dom.spec.whatwg.org/#event-path-root-of-closed-tree) is true, then increase currentHiddenLevel by 1.
14. If currentHiddenLevel is less than or equal to maxHiddenLevel, then [prepend](https://infra.spec.whatwg.org/#list-prepend) path\[index\]'s [invocation target](https://dom.spec.whatwg.org/#event-path-invocation-target) to composedPath.
15. If path\[index\]'s [slot-in-closed-tree](https://dom.spec.whatwg.org/#event-path-slot-in-closed-tree) is true, then:

    1.  Decrease currentHiddenLevel by 1.
    2.  If currentHiddenLevel is less than maxHiddenLevel, then set maxHiddenLevel to currentHiddenLevel.

16. Decrease index by 1.
17. Set currentHiddenLevel and maxHiddenLevel to currentTargetHiddenSubtreeLevel.

18. Set index to currentTargetIndex + 1.

19. While index is less than path’s [size](https://infra.spec.whatwg.org/#list-size):

20. If path\[index\]'s [slot-in-closed-tree](https://dom.spec.whatwg.org/#event-path-slot-in-closed-tree) is true, then increase currentHiddenLevel by 1.
21. If currentHiddenLevel is less than or equal to maxHiddenLevel, then [append](https://infra.spec.whatwg.org/#list-append) path\[index\]'s [invocation target](https://dom.spec.whatwg.org/#event-path-invocation-target) to composedPath.
22. If path\[index\]'s [root-of-closed-tree](https://dom.spec.whatwg.org/#event-path-root-of-closed-tree) is true, then:

    1.  Decrease currentHiddenLevel by 1.
    2.  If currentHiddenLevel is less than maxHiddenLevel, then set maxHiddenLevel to currentHiddenLevel.

23. Increase index by 1.
24. Return composedPath.

The `eventPhase` attribute must return the value it was initialized to, which must be one of the following:

`NONE` (numeric value 0)

[Events](https://dom.spec.whatwg.org/#concept-event) not currently [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) are in this phase.

`CAPTURING_PHASE` (numeric value 1)

When an [event](https://dom.spec.whatwg.org/#concept-event) is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) to an object that [participates](https://dom.spec.whatwg.org/#concept-tree-participate) in a [tree](https://dom.spec.whatwg.org/#concept-tree) it will be in this phase before it reaches its [target](https://dom.spec.whatwg.org/#event-target).

`AT_TARGET` (numeric value 2)

When an [event](https://dom.spec.whatwg.org/#concept-event) is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) it will be in this phase on its [target](https://dom.spec.whatwg.org/#event-target).

`BUBBLING_PHASE` (numeric value 3)

When an [event](https://dom.spec.whatwg.org/#concept-event) is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) to an object that [participates](https://dom.spec.whatwg.org/#concept-tree-participate) in a [tree](https://dom.spec.whatwg.org/#concept-tree) it will be in this phase after it reaches its [target](https://dom.spec.whatwg.org/#event-target).

Initially the attribute must be initialized to `[NONE](https://dom.spec.whatwg.org/#dom-event-none)`.

---

Each [event](https://dom.spec.whatwg.org/#concept-event) has the following associated flags that are all initially unset:

-   stop propagation flag
-   stop immediate propagation flag
-   canceled flag
-   in passive listener flag
-   composed flag
-   initialized flag
-   dispatch flag

The `stopPropagation()` method steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [stop propagation flag](https://dom.spec.whatwg.org/#stop-propagation-flag).

The `cancelBubble` getter steps are to return true if [this](https://webidl.spec.whatwg.org/#this)’s [stop propagation flag](https://dom.spec.whatwg.org/#stop-propagation-flag) is set; otherwise false.

[Event/cancelBubble](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble 'The cancelBubble property of the Event interface is deprecated. Use Event.stopPropagation() instead. Setting its value to true before returning from an event handler prevents propagation of the event. In later implementations, setting this to false does nothing. See Browser compatibility for details.')

In all current engines.

Firefox53+Safari4+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android53+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12.1+

---

Node.js14.5.0+

The `[cancelBubble](https://dom.spec.whatwg.org/#dom-event-cancelbubble)` setter steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [stop propagation flag](https://dom.spec.whatwg.org/#stop-propagation-flag) if the given value is true; otherwise do nothing.

The `stopImmediatePropagation()` method steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [stop propagation flag](https://dom.spec.whatwg.org/#stop-propagation-flag) and [this](https://webidl.spec.whatwg.org/#this)’s [stop immediate propagation flag](https://dom.spec.whatwg.org/#stop-immediate-propagation-flag).

The `bubbles` and `cancelable` attributes must return the values they were initialized to.

To set the canceled flag, given an [event](https://dom.spec.whatwg.org/#concept-event) event, if event’s `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute value is true and event’s [in passive listener flag](https://dom.spec.whatwg.org/#in-passive-listener-flag) is unset, then set event’s [canceled flag](https://dom.spec.whatwg.org/#canceled-flag), and do nothing otherwise.

The `returnValue` getter steps are to return false if [this](https://webidl.spec.whatwg.org/#this)’s [canceled flag](https://dom.spec.whatwg.org/#canceled-flag) is set; otherwise true.

The `[returnValue](https://dom.spec.whatwg.org/#dom-event-returnvalue)` setter steps are to [set the canceled flag](https://dom.spec.whatwg.org/#set-the-canceled-flag) with [this](https://webidl.spec.whatwg.org/#this) if the given value is false; otherwise do nothing.

The `preventDefault()` method steps are to [set the canceled flag](https://dom.spec.whatwg.org/#set-the-canceled-flag) with [this](https://webidl.spec.whatwg.org/#this).

There are scenarios where invoking `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)` has no effect. User agents are encouraged to log the precise cause in a developer console, to aid debugging.

The `defaultPrevented` getter steps are to return true if [this](https://webidl.spec.whatwg.org/#this)’s [canceled flag](https://dom.spec.whatwg.org/#canceled-flag) is set; otherwise false.

The `composed` getter steps are to return true if [this](https://webidl.spec.whatwg.org/#this)’s [composed flag](https://dom.spec.whatwg.org/#composed-flag) is set; otherwise false.

---

The `isTrusted` attribute must return the value it was initialized to. When an [event](https://dom.spec.whatwg.org/#concept-event) is created the attribute must be initialized to false.

`[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` is a convenience that indicates whether an [event](https://dom.spec.whatwg.org/#concept-event) is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) by the user agent (as opposed to using `[dispatchEvent()](https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent)`). The sole legacy exception is `[click()](https://html.spec.whatwg.org/multipage/interaction.html#dom-click)`, which causes the user agent to dispatch an [event](https://dom.spec.whatwg.org/#concept-event) whose `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute is initialized to false.

The `timeStamp` attribute must return the value it was initialized to.

---

To initialize an event, with type, bubbles, and cancelable, run these steps:

1.  Set event’s [initialized flag](https://dom.spec.whatwg.org/#initialized-flag).
2.  Unset event’s [stop propagation flag](https://dom.spec.whatwg.org/#stop-propagation-flag), [stop immediate propagation flag](https://dom.spec.whatwg.org/#stop-immediate-propagation-flag), and [canceled flag](https://dom.spec.whatwg.org/#canceled-flag).
3.  Set event’s `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute to false.
4.  Set event’s [target](https://dom.spec.whatwg.org/#event-target) to null.
5.  Set event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute to type.
6.  Set event’s `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` attribute to bubbles.
7.  Set event’s `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute to cancelable.

The `initEvent(type, bubbles, cancelable)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this)’s [dispatch flag](https://dom.spec.whatwg.org/#dispatch-flag) is set, then return.
2.  [Initialize](https://dom.spec.whatwg.org/#concept-event-initialize) [this](https://webidl.spec.whatwg.org/#this) with type, bubbles, and cancelable.

`[initEvent()](https://dom.spec.whatwg.org/#dom-event-initevent)` is redundant with [event](https://dom.spec.whatwg.org/#concept-event) constructors and incapable of setting `[composed](https://dom.spec.whatwg.org/#dom-event-composed)`. It has to be supported for legacy content.

### 2.3. Legacy extensions to the `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` interface[](https://dom.spec.whatwg.org/#interface-window-extensions)

partial interface [Window](https://html.spec.whatwg.org/multipage/window-object.html#window) {
\[[Replaceable](https://webidl.spec.whatwg.org/#Replaceable)\] readonly attribute ([Event](https://dom.spec.whatwg.org/#event) or [undefined](https://webidl.spec.whatwg.org/#idl-undefined)) [event](https://dom.spec.whatwg.org/#dom-window-event); // legacy
};

Each `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object has an associated current event (undefined or an `[Event](https://dom.spec.whatwg.org/#event)` object). Unless stated otherwise it is undefined.

The `event` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [current event](https://dom.spec.whatwg.org/#window-current-event).

Web developers are strongly encouraged to instead rely on the `[Event](https://dom.spec.whatwg.org/#event)` object passed to event listeners, as that will result in more portable code. This attribute is not available in workers or worklets, and is inaccurate for events dispatched in [shadow trees](https://dom.spec.whatwg.org/#concept-shadow-tree).

### 2.4. Interface `[CustomEvent](https://dom.spec.whatwg.org/#customevent)`[](https://dom.spec.whatwg.org/#interface-customevent)

[CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent 'The CustomEvent interface represents events initialized by an application for any purpose.')

In all current engines.

Firefox6+Safari5+Chrome15+

---

Opera11+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android6+iOS Safari5+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile11+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=(Window,Worker)\]
interface `CustomEvent` : [Event](https://dom.spec.whatwg.org/#event) {
`constructor`([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `type`[](https://dom.spec.whatwg.org/#dom-customevent-customevent-type-eventinitdict-type), optional [CustomEventInit](https://dom.spec.whatwg.org/#dictdef-customeventinit) `eventInitDict`[](https://dom.spec.whatwg.org/#dom-customevent-customevent-type-eventinitdict-eventinitdict) = {});

readonly attribute [any](https://webidl.spec.whatwg.org/#idl-any) [detail](https://dom.spec.whatwg.org/#dom-customevent-detail);

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [initCustomEvent](https://dom.spec.whatwg.org/#dom-customevent-initcustomevent)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `type`[](https://dom.spec.whatwg.org/#dom-customevent-initcustomevent-type-bubbles-cancelable-detail-type), optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `bubbles`[](https://dom.spec.whatwg.org/#dom-customevent-initcustomevent-type-bubbles-cancelable-detail-bubbles) = false, optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `cancelable`[](https://dom.spec.whatwg.org/#dom-customevent-initcustomevent-type-bubbles-cancelable-detail-cancelable) = false, optional [any](https://webidl.spec.whatwg.org/#idl-any) `detail`[](https://dom.spec.whatwg.org/#dom-customevent-initcustomevent-type-bubbles-cancelable-detail-detail) = null); // legacy
};

dictionary `CustomEventInit` : [EventInit](https://dom.spec.whatwg.org/#dictdef-eventinit) {
[any](https://webidl.spec.whatwg.org/#idl-any) `detail`[](https://dom.spec.whatwg.org/#dom-customeventinit-detail) = null;
};

[Events](https://dom.spec.whatwg.org/#concept-event) using the `[CustomEvent](https://dom.spec.whatwg.org/#customevent)` interface can be used to carry custom data.

[CustomEvent/CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent 'The CustomEvent() constructor creates a new CustomEvent.')

In all current engines.

Firefox11+Safari6+Chrome15+

---

Opera11.6+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android14+iOS Safari6+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12+

`event = new [CustomEvent](https://dom.spec.whatwg.org/#dom-customevent-customevent)(type [, eventInitDict])`

Works analogously to the constructor for `[Event](https://dom.spec.whatwg.org/#event)` except that the eventInitDict argument now allows for setting the `[detail](https://dom.spec.whatwg.org/#dom-customevent-detail)` attribute too.

[CustomEvent/detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail 'The detail readonly property of the CustomEvent interface returns any data passed when initializing the event.')

In all current engines.

Firefox11+Safari5+Chrome15+

---

Opera11.6+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android14+iOS Safari5+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12+

`` event . `[detail](https://dom.spec.whatwg.org/#dom-customevent-detail)`  ``

Returns any custom data event was created with. Typically used for synthetic events.

The `detail` attribute must return the value it was initialized to.

The `initCustomEvent(type, bubbles, cancelable, detail)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this)’s [dispatch flag](https://dom.spec.whatwg.org/#dispatch-flag) is set, then return.
2.  [Initialize](https://dom.spec.whatwg.org/#concept-event-initialize) [this](https://webidl.spec.whatwg.org/#this) with type, bubbles, and cancelable.
3.  Set [this](https://webidl.spec.whatwg.org/#this)’s `[detail](https://dom.spec.whatwg.org/#dom-customevent-detail)` attribute to detail.

### 2.5. Constructing events[](https://dom.spec.whatwg.org/#constructing-events)

[Specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define event constructing steps for all or some [events](https://dom.spec.whatwg.org/#concept-event). The algorithm is passed an [event](https://dom.spec.whatwg.org/#concept-event) event and an `[EventInit](https://dom.spec.whatwg.org/#dictdef-eventinit)` eventInitDict as indicated in the [inner event creation steps](https://dom.spec.whatwg.org/#inner-event-creation-steps).

This construct can be used by `[Event](https://dom.spec.whatwg.org/#event)` subclasses that have a more complex structure than a simple 1:1 mapping between their initializing dictionary members and IDL attributes.

When a constructor[](https://dom.spec.whatwg.org/#concept-event-constructor) of the `[Event](https://dom.spec.whatwg.org/#event)` interface, or of an interface that inherits from the `[Event](https://dom.spec.whatwg.org/#event)` interface, is invoked, these steps must be run, given the arguments type and eventInitDict:

1.  Let event be the result of running the [inner event creation steps](https://dom.spec.whatwg.org/#inner-event-creation-steps) with this interface, null, now, and eventInitDict.
2.  Initialize event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute to type.
3.  Return event.

To create an event using eventInterface, which must be either `[Event](https://dom.spec.whatwg.org/#event)` or an interface that inherits from it, and optionally given a [Realm](https://tc39.es/ecma262/#realm) realm, run these steps:

1.  If realm is not given, then set it to null.
2.  Let dictionary be the result of [converting](https://webidl.spec.whatwg.org/#dfn-convert-ecmascript-to-idl-value) the JavaScript value undefined to the dictionary type accepted by eventInterface’s constructor. (This dictionary type will either be `[EventInit](https://dom.spec.whatwg.org/#dictdef-eventinit)` or a dictionary that inherits from it.)

    This does not work if members are required; see [whatwg/dom#600](https://github.com/whatwg/dom/issues/600).

3.  Let event be the result of running the [inner event creation steps](https://dom.spec.whatwg.org/#inner-event-creation-steps) with eventInterface, realm, the time of the occurrence that the event is signaling, and dictionary.

    [](https://dom.spec.whatwg.org/#example-timestamp-initialization)In macOS the time of the occurrence for input actions is available via the `timestamp` property of `NSEvent` objects.

4.  Initialize event’s `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute to true.
5.  Return event.

[Create an event](https://dom.spec.whatwg.org/#concept-event-create) is meant to be used by other specifications which need to separately [create](https://dom.spec.whatwg.org/#concept-event-create) and [dispatch](https://dom.spec.whatwg.org/#concept-event-dispatch) events, instead of simply [firing](https://dom.spec.whatwg.org/#concept-event-fire) them. It ensures the event’s attributes are initialized to the correct defaults.

The inner event creation steps, given an interface, realm, time, and dictionary, are as follows:

1.  Let event be the result of creating a new object using eventInterface. If realm is non-null, then use that Realm; otherwise, use the default behavior defined in Web IDL.

    As of the time of this writing Web IDL does not yet define any default behavior; see [whatwg/webidl#135](https://github.com/whatwg/webidl/issues/135).

2.  Set event’s [initialized flag](https://dom.spec.whatwg.org/#initialized-flag).
3.  Initialize event’s `[timeStamp](https://dom.spec.whatwg.org/#dom-event-timestamp)` attribute to the [relative high resolution coarse time](https://w3c.github.io/hr-time/#dfn-relative-high-resolution-coarse-time) given time and event’s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global).
4.  [For each](https://infra.spec.whatwg.org/#map-iterate) member → value in dictionary, if event has an attribute whose [identifier](https://webidl.spec.whatwg.org/#dfn-identifier) is member, then initialize that attribute to value.
5.  Run the [event constructing steps](https://dom.spec.whatwg.org/#concept-event-constructor-ext) with event and dictionary.
6.  Return event.

### 2.6. Defining event interfaces[](https://dom.spec.whatwg.org/#defining-event-interfaces)

In general, when defining a new interface that inherits from `[Event](https://dom.spec.whatwg.org/#event)` please always ask feedback from the [WHATWG](https://whatwg.org/) or the [W3C WebApps WG](https://www.w3.org/2008/webapps/) community.

The `[CustomEvent](https://dom.spec.whatwg.org/#customevent)` interface can be used as starting point. However, do not introduce any `init*Event()` methods as they are redundant with constructors. Interfaces that inherit from the `[Event](https://dom.spec.whatwg.org/#event)` interface that have such a method only have it for historical reasons.

### 2.7. Interface `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)`[](https://dom.spec.whatwg.org/#interface-eventtarget)

[EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget 'The EventTarget interface is implemented by objects that can receive events and may have listeners for them. In other words, any target of events implements the three methods associated with this interface.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

[EventListener/handleEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventListener/handleEvent 'The EventListener method handleEvent() method is called by the user agent when an event is sent to the EventListener, in order to handle events that occur on an observed EventTarget.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventListener 'The EventListener interface represents an object that can handle an event dispatched by an EventTarget object.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=(Window,Worker,AudioWorklet)\]
interface `EventTarget` {
[constructor](https://dom.spec.whatwg.org/#dom-eventtarget-eventtarget)();

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [addEventListener](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `type`[](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener-type-callback-options-type), [EventListener](https://dom.spec.whatwg.org/#callbackdef-eventlistener)? `callback`[](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener-type-callback-options-callback), optional ([AddEventListenerOptions](https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions) or [boolean](https://webidl.spec.whatwg.org/#idl-boolean)) `options`[](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener-type-callback-options-options) = {});
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [removeEventListener](https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `type`[](https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener-type-callback-options-type), [EventListener](https://dom.spec.whatwg.org/#callbackdef-eventlistener)? `callback`[](https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener-type-callback-options-callback), optional ([EventListenerOptions](https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions) or [boolean](https://webidl.spec.whatwg.org/#idl-boolean)) `options`[](https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener-type-callback-options-options) = {});
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [dispatchEvent](https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent)([Event](https://dom.spec.whatwg.org/#event) `event`[](https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent-event-event));
};

callback interface `EventListener` {
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) `handleEvent`[](https://dom.spec.whatwg.org/#dom-eventlistener-handleevent)([Event](https://dom.spec.whatwg.org/#event) `event`[](https://dom.spec.whatwg.org/#dom-eventlistener-handleevent-event-event));
};

dictionary `EventListenerOptions` {
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `capture` = false;
};

dictionary `AddEventListenerOptions` : [EventListenerOptions](https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions) {
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `passive` = false;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `once` = false;
[AbortSignal](https://dom.spec.whatwg.org/#abortsignal) `signal`;
};

An `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object represents a target to which an [event](https://dom.spec.whatwg.org/#concept-event) can be [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch) when something has occurred.

Each `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object has an associated event listener list (a [list](https://infra.spec.whatwg.org/#list) of zero or more [event listeners](https://dom.spec.whatwg.org/#concept-event-listener)). It is initially the empty list.

An event listener can be used to observe a specific [event](https://dom.spec.whatwg.org/#concept-event) and consists of:

-   type (a string)
-   callback (null or an `[EventListener](https://dom.spec.whatwg.org/#callbackdef-eventlistener)` object)
-   capture (a boolean, initially false)
-   passive (a boolean, initially false)
-   once (a boolean, initially false)
-   signal (null or an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object)
-   removed (a boolean for bookkeeping purposes, initially false)

Although [callback](https://dom.spec.whatwg.org/#event-listener-callback) is an `[EventListener](https://dom.spec.whatwg.org/#callbackdef-eventlistener)` object, an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) is a broader concept as can be seen above.

Each `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object also has an associated get the parent algorithm, which takes an [event](https://dom.spec.whatwg.org/#concept-event) event, and returns an `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object. Unless specified otherwise it returns null.

[Nodes](https://dom.spec.whatwg.org/#concept-node), [shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root), and [documents](https://dom.spec.whatwg.org/#concept-document) override the [get the parent](https://dom.spec.whatwg.org/#get-the-parent) algorithm.

Each `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object can have an associated activation behavior algorithm. The [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior) algorithm is passed an [event](https://dom.spec.whatwg.org/#concept-event), as indicated in the [dispatch](https://dom.spec.whatwg.org/#concept-event-dispatch) algorithm.

This exists because user agents perform certain actions for certain `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` objects, e.g., the `[area](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element)` element, in response to synthetic `[MouseEvent](https://www.w3.org/TR/uievents/#mouseevent)` [events](https://dom.spec.whatwg.org/#concept-event) whose `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute is `click`. Web compatibility prevented it from being removed and it is now the enshrined way of defining an activation of something. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

Each `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object that has [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior), can additionally have both (not either) a legacy-pre-activation behavior algorithm and a legacy-canceled-activation behavior algorithm.

These algorithms only exist for checkbox and radio `[input](https://html.spec.whatwg.org/multipage/input.html#the-input-element)` elements and are not to be used for anything else. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

[EventTarget/EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/EventTarget 'The EventTarget() constructor creates a new EventTarget object instance.')

In all current engines.

Firefox59+Safari14+Chrome64+

---

Opera51+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android59+iOS Safari14+Chrome for Android64+Android WebView64+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

`target = new [EventTarget](https://dom.spec.whatwg.org/#dom-eventtarget-eventtarget)();`

Creates a new `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object, which can be used by developers to [dispatch](https://dom.spec.whatwg.org/#concept-event-dispatch) and listen for [events](https://dom.spec.whatwg.org/#concept-event).

[EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 'The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`target . [addEventListener](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)(type, callback [, options])`

Appends an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) for [events](https://dom.spec.whatwg.org/#concept-event) whose `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value is type. The callback argument sets the [callback](https://dom.spec.whatwg.org/#event-listener-callback) that will be invoked when the [event](https://dom.spec.whatwg.org/#concept-event) is [dispatched](https://dom.spec.whatwg.org/#concept-event-dispatch).

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options’s `[capture](https://dom.spec.whatwg.org/#dom-eventlisteneroptions-capture)`.

When set to true, options’s `[capture](https://dom.spec.whatwg.org/#dom-eventlisteneroptions-capture)` prevents [callback](https://dom.spec.whatwg.org/#event-listener-callback) from being invoked when the [event](https://dom.spec.whatwg.org/#concept-event)’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute value is `[BUBBLING_PHASE](https://dom.spec.whatwg.org/#dom-event-bubbling_phase)`. When false (or not present), [callback](https://dom.spec.whatwg.org/#event-listener-callback) will not be invoked when [event](https://dom.spec.whatwg.org/#concept-event)’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute value is `[CAPTURING_PHASE](https://dom.spec.whatwg.org/#dom-event-capturing_phase)`. Either way, [callback](https://dom.spec.whatwg.org/#event-listener-callback) will be invoked if [event](https://dom.spec.whatwg.org/#concept-event)’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute value is `[AT_TARGET](https://dom.spec.whatwg.org/#dom-event-at_target)`.

When set to true, options’s `[passive](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive)` indicates that the [callback](https://dom.spec.whatwg.org/#event-listener-callback) will not cancel the event by invoking `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)`. This is used to enable performance optimizations described in [§ 2.8 Observing event listeners](https://dom.spec.whatwg.org/#observing-event-listeners).

When set to true, options’s `[once](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-once)` indicates that the [callback](https://dom.spec.whatwg.org/#event-listener-callback) will only be invoked once after which the event listener will be removed.

If an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` is passed for options’s `[signal](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-signal)`, then the event listener will be removed when signal is aborted.

The [event listener](https://dom.spec.whatwg.org/#concept-event-listener) is appended to target’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list) and is not appended if it has the same [type](https://dom.spec.whatwg.org/#event-listener-type), [callback](https://dom.spec.whatwg.org/#event-listener-callback), and [capture](https://dom.spec.whatwg.org/#event-listener-capture).

[EventTarget/removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener 'The removeEventListener() method of the EventTarget interface removes from the target an event listener previously registered with EventTarget.addEventListener(). The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`target . [removeEventListener](https://dom.spec.whatwg.org/#dom-eventtarget-removeeventlistener)(type, callback [, options])`

Removes the [event listener](https://dom.spec.whatwg.org/#concept-event-listener) in target’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list) with the same type, callback, and options.

[EventTarget/dispatchEvent](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent 'The dispatchEvent() method of the EventTarget sends an Event to the object, (synchronously) invoking the affected EventListeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().')

In all current engines.

Firefox2+Safari3.1+Chrome4+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView4+Samsung Internet1.0+Opera Mobile10.1+

---

Node.js14.5.0+

`target . [dispatchEvent](https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent)(event)`

[Dispatches](https://dom.spec.whatwg.org/#concept-event-dispatch) a synthetic event event to target and returns true if either event’s `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute value is false or its `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)` method was not invoked; otherwise false.

To flatten options, run these steps:

1.  If options is a boolean, then return options.
2.  Return options\["`[capture](https://dom.spec.whatwg.org/#dom-eventlisteneroptions-capture)`"\].

To flatten more options, run these steps:

1.  Let capture be the result of [flattening](https://dom.spec.whatwg.org/#concept-flatten-options) options.
2.  Let once and passive be false.
3.  Let signal be null.
4.  If options is a [dictionary](https://webidl.spec.whatwg.org/#dfn-dictionary), then:

    1.  Set passive to options\["`[passive](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive)`"\] and once to options\["`[once](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-once)`"\].
    2.  If options\["`[signal](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-signal)`"\] [exists](https://infra.spec.whatwg.org/#map-exists), then set signal to options\["`[signal](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-signal)`"\].

5.  Return capture, passive, once, and signal.

The `new EventTarget()` constructor steps are to do nothing.

Because of the defaults stated elsewhere, the returned `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)`'s [get the parent](https://dom.spec.whatwg.org/#get-the-parent) algorithm will return null, and it will have no [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior), [legacy-pre-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-pre-activation-behavior), or [legacy-canceled-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-canceled-activation-behavior).

In the future we could allow custom [get the parent](https://dom.spec.whatwg.org/#get-the-parent) algorithms. Let us know if this would be useful for your programs. For now, all author-created `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)`s do not participate in a tree structure.

To add an event listener, given an `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object eventTarget and an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) listener, run these steps:

1.  If eventTarget is a `[ServiceWorkerGlobalScope](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope)` object, its [service worker](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope-service-worker)’s [script resource](https://w3c.github.io/ServiceWorker/#dfn-script-resource)’s [has ever been evaluated flag](https://w3c.github.io/ServiceWorker/#dfn-has-ever-been-evaluated-flag) is set, and listener’s [type](https://dom.spec.whatwg.org/#event-listener-type) matches the `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value of any of the [service worker events](https://w3c.github.io/ServiceWorker/#dfn-service-worker-events), then [report a warning to the console](https://console.spec.whatwg.org/#report-a-warning-to-the-console) that this might not give the expected results. [\[SERVICE-WORKERS\]](https://dom.spec.whatwg.org/#biblio-service-workers)
2.  If listener’s [signal](https://dom.spec.whatwg.org/#event-listener-signal) is not null and is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted), then return.
3.  If listener’s [callback](https://dom.spec.whatwg.org/#event-listener-callback) is null, then return.
4.  If eventTarget’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list) does not [contain](https://infra.spec.whatwg.org/#list-contain) an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) whose [type](https://dom.spec.whatwg.org/#event-listener-type) is listener’s [type](https://dom.spec.whatwg.org/#event-listener-type), [callback](https://dom.spec.whatwg.org/#event-listener-callback) is listener’s [callback](https://dom.spec.whatwg.org/#event-listener-callback), and [capture](https://dom.spec.whatwg.org/#event-listener-capture) is listener’s [capture](https://dom.spec.whatwg.org/#event-listener-capture), then [append](https://infra.spec.whatwg.org/#list-append) listener to eventTarget’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list).
5.  If listener’s [signal](https://dom.spec.whatwg.org/#event-listener-signal) is not null, then [add the following](https://dom.spec.whatwg.org/#abortsignal-add) abort steps to it:

    1.  [Remove an event listener](https://dom.spec.whatwg.org/#remove-an-event-listener) with eventTarget and listener.

The [add an event listener](https://dom.spec.whatwg.org/#add-an-event-listener) concept exists to ensure [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) use the same code path. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

The `addEventListener(type, callback, options)` method steps are:

1.  Let capture, passive, once, and signal be the result of [flattening more](https://dom.spec.whatwg.org/#event-flatten-more) options.
2.  [Add an event listener](https://dom.spec.whatwg.org/#add-an-event-listener) with [this](https://webidl.spec.whatwg.org/#this) and an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) whose [type](https://dom.spec.whatwg.org/#event-listener-type) is type, [callback](https://dom.spec.whatwg.org/#event-listener-callback) is callback, [capture](https://dom.spec.whatwg.org/#event-listener-capture) is capture, [passive](https://dom.spec.whatwg.org/#event-listener-passive) is passive, [once](https://dom.spec.whatwg.org/#event-listener-once) is once, and [signal](https://dom.spec.whatwg.org/#event-listener-signal) is signal.

To remove an event listener, given an `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object eventTarget and an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) listener, run these steps:

1.  If eventTarget is a `[ServiceWorkerGlobalScope](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope)` object and its [service worker](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope-service-worker)’s [set of event types to handle](https://w3c.github.io/ServiceWorker/#dfn-set-of-event-types-to-handle) contains type, then [report a warning to the console](https://console.spec.whatwg.org/#report-a-warning-to-the-console) that this might not give the expected results. [\[SERVICE-WORKERS\]](https://dom.spec.whatwg.org/#biblio-service-workers)
2.  Set listener’s [removed](https://dom.spec.whatwg.org/#event-listener-removed) to true and [remove](https://infra.spec.whatwg.org/#list-remove) listener from eventTarget’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list).

HTML needs this to define event handlers. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

To remove all event listeners[](https://dom.spec.whatwg.org/#remove-all-event-listeners), given an `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object eventTarget, [for each](https://infra.spec.whatwg.org/#list-iterate) listener of eventTarget’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list), [remove an event listener](https://dom.spec.whatwg.org/#remove-an-event-listener) with eventTarget and listener.

HTML needs this to define `document.open()`. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

The `removeEventListener(type, callback, options)` method steps are:

1.  Let capture be the result of [flattening](https://dom.spec.whatwg.org/#concept-flatten-options) options.
2.  If [this](https://webidl.spec.whatwg.org/#this)’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list) [contains](https://infra.spec.whatwg.org/#list-contain) an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) whose [type](https://dom.spec.whatwg.org/#event-listener-type) is type, [callback](https://dom.spec.whatwg.org/#event-listener-callback) is callback, and [capture](https://dom.spec.whatwg.org/#event-listener-capture) is capture, then [remove an event listener](https://dom.spec.whatwg.org/#remove-an-event-listener) with [this](https://webidl.spec.whatwg.org/#this) and that [event listener](https://dom.spec.whatwg.org/#concept-event-listener).

The event listener list will not contain multiple event listeners with equal type, callback, and capture, as [add an event listener](https://dom.spec.whatwg.org/#add-an-event-listener) prevents that.

The `dispatchEvent(event)` method steps are:

1.  If event’s [dispatch flag](https://dom.spec.whatwg.org/#dispatch-flag) is set, or if its [initialized flag](https://dom.spec.whatwg.org/#initialized-flag) is not set, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidStateError](https://webidl.spec.whatwg.org/#invalidstateerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Initialize event’s `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute to false.
3.  Return the result of [dispatching](https://dom.spec.whatwg.org/#concept-event-dispatch) event to [this](https://webidl.spec.whatwg.org/#this).

### 2.8. Observing event listeners[](https://dom.spec.whatwg.org/#observing-event-listeners)

In general, developers do not expect the presence of an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) to be observable. The impact of an [event listener](https://dom.spec.whatwg.org/#concept-event-listener) is determined by its [callback](https://dom.spec.whatwg.org/#event-listener-callback). That is, a developer adding a no-op [event listener](https://dom.spec.whatwg.org/#concept-event-listener) would not expect it to have any side effects.

Unfortunately, some event APIs have been designed such that implementing them efficiently requires observing [event listeners](https://dom.spec.whatwg.org/#concept-event-listener). This can make the presence of listeners observable in that even empty listeners can have a dramatic performance impact on the behavior of the application. For example, touch and wheel events which can be used to block asynchronous scrolling. In some cases this problem can be mitigated by specifying the event to be `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` only when there is at least one non-`[passive](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive)` listener. For example, non-`[passive](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive)` `[TouchEvent](https://w3c.github.io/touch-events/#idl-def-touchevent)` listeners must block scrolling, but if all listeners are `[passive](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive)` then scrolling can be allowed to start [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) by making the `[TouchEvent](https://w3c.github.io/touch-events/#idl-def-touchevent)` uncancelable (so that calls to `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)` are ignored). So code dispatching an event is able to observe the absence of non-`[passive](https://dom.spec.whatwg.org/#dom-addeventlisteneroptions-passive)` listeners, and use that to clear the `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` property of the event being dispatched.

Ideally, any new event APIs are defined such that they do not need this property. (Use [whatwg/dom](https://github.com/whatwg/dom/issues) for discussion.)

### 2.9. Dispatching events[](https://dom.spec.whatwg.org/#dispatching-events)

To dispatch an event to a target, with an optional legacy target override flag and an optional legacyOutputDidListenersThrowFlag, run these steps:

1.  Set event’s [dispatch flag](https://dom.spec.whatwg.org/#dispatch-flag).
2.  Let targetOverride be target, if legacy target override flag is not given, and target’s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window) otherwise. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

    legacy target override flag is only used by HTML and only when target is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object.

3.  Let activationTarget be null.
4.  Let relatedTarget be the result of [retargeting](https://dom.spec.whatwg.org/#retarget) event’s [relatedTarget](https://dom.spec.whatwg.org/#event-relatedtarget) against target.
5.  If target is not relatedTarget or target is event’s [relatedTarget](https://dom.spec.whatwg.org/#event-relatedtarget), then:

    1.  Let touchTargets be a new [list](https://infra.spec.whatwg.org/#list).
    2.  [For each](https://infra.spec.whatwg.org/#list-iterate) touchTarget of event’s [touch target list](https://dom.spec.whatwg.org/#event-touch-target-list), [append](https://infra.spec.whatwg.org/#list-append) the result of [retargeting](https://dom.spec.whatwg.org/#retarget) touchTarget against target to touchTargets.
    3.  [Append to an event path](https://dom.spec.whatwg.org/#concept-event-path-append) with event, target, targetOverride, relatedTarget, touchTargets, and false.
    4.  Let isActivationEvent be true, if event is a `[MouseEvent](https://www.w3.org/TR/uievents/#mouseevent)` object and event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute is "`click`"; otherwise false.
    5.  If isActivationEvent is true and target has [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior), then set activationTarget to target.
    6.  Let slottable be target, if target is a [slottable](https://dom.spec.whatwg.org/#concept-slotable) and is [assigned](https://dom.spec.whatwg.org/#slotable-assigned), and null otherwise.
    7.  Let slot-in-closed-tree be false.
    8.  Let parent be the result of invoking target’s [get the parent](https://dom.spec.whatwg.org/#get-the-parent) with event.
    9.  While parent is non-null:

        1.  If slottable is non-null:

            1.  Assert: parent is a [slot](https://dom.spec.whatwg.org/#concept-slot).
            2.  Set slottable to null.
            3.  If parent’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) whose [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is "`closed`", then set slot-in-closed-tree to true.

        2.  If parent is a [slottable](https://dom.spec.whatwg.org/#concept-slotable) and is [assigned](https://dom.spec.whatwg.org/#slotable-assigned), then set slottable to parent.
        3.  Let relatedTarget be the result of [retargeting](https://dom.spec.whatwg.org/#retarget) event’s [relatedTarget](https://dom.spec.whatwg.org/#event-relatedtarget) against parent.
        4.  Let touchTargets be a new [list](https://infra.spec.whatwg.org/#list).
        5.  [For each](https://infra.spec.whatwg.org/#list-iterate) touchTarget of event’s [touch target list](https://dom.spec.whatwg.org/#event-touch-target-list), [append](https://infra.spec.whatwg.org/#list-append) the result of [retargeting](https://dom.spec.whatwg.org/#retarget) touchTarget against parent to touchTargets.
        6.  If parent is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, or parent is a [node](https://dom.spec.whatwg.org/#concept-node) and target’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow-including inclusive ancestor](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-ancestor) of parent, then:

            1.  If isActivationEvent is true, event’s `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` attribute is true, activationTarget is null, and parent has [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior), then set activationTarget to parent.
            2.  [Append to an event path](https://dom.spec.whatwg.org/#concept-event-path-append) with event, parent, null, relatedTarget, touchTargets, and slot-in-closed-tree.

        7.  Otherwise, if parent is relatedTarget, then set parent to null.
        8.  Otherwise, set target to parent and then:

            1.  If isActivationEvent is true, activationTarget is null, and target has [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior), then set activationTarget to target.
            2.  [Append to an event path](https://dom.spec.whatwg.org/#concept-event-path-append) with event, parent, target, relatedTarget, touchTargets, and slot-in-closed-tree.

        9.  If parent is non-null, then set parent to the result of invoking parent’s [get the parent](https://dom.spec.whatwg.org/#get-the-parent) with event.
        10. Set slot-in-closed-tree to false.

    10. Let clearTargetsStruct be the last struct in event’s [path](https://dom.spec.whatwg.org/#event-path) whose [shadow-adjusted target](https://dom.spec.whatwg.org/#event-path-shadow-adjusted-target) is non-null.

    11. Let clearTargets be true if clearTargetsStruct’s [shadow-adjusted target](https://dom.spec.whatwg.org/#event-path-shadow-adjusted-target), clearTargetsStruct’s [relatedTarget](https://dom.spec.whatwg.org/#event-path-relatedtarget), or an `[EventTarget](https://dom.spec.whatwg.org/#eventtarget)` object in clearTargetsStruct’s [touch target list](https://dom.spec.whatwg.org/#event-path-touch-target-list) is a [node](https://dom.spec.whatwg.org/#concept-node) and its [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root); otherwise false.

    12. If activationTarget is non-null and activationTarget has [legacy-pre-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-pre-activation-behavior), then run activationTarget’s [legacy-pre-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-pre-activation-behavior).

    13. [For each](https://infra.spec.whatwg.org/#list-iterate) struct in event’s [path](https://dom.spec.whatwg.org/#event-path), in reverse order:

    14. If struct’s [shadow-adjusted target](https://dom.spec.whatwg.org/#event-path-shadow-adjusted-target) is non-null, then set event’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute to `[AT_TARGET](https://dom.spec.whatwg.org/#dom-event-at_target)`.
    15. Otherwise, set event’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute to `[CAPTURING_PHASE](https://dom.spec.whatwg.org/#dom-event-capturing_phase)`.
    16. [Invoke](https://dom.spec.whatwg.org/#concept-event-listener-invoke) with struct, event, "`capturing`", and legacyOutputDidListenersThrowFlag if given.
    17. [For each](https://infra.spec.whatwg.org/#list-iterate) struct in event’s [path](https://dom.spec.whatwg.org/#event-path):

    18. If struct’s [shadow-adjusted target](https://dom.spec.whatwg.org/#event-path-shadow-adjusted-target) is non-null, then set event’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute to `[AT_TARGET](https://dom.spec.whatwg.org/#dom-event-at_target)`.
    19. Otherwise:

        1.  If event’s `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` attribute is false, then [continue](https://infra.spec.whatwg.org/#iteration-continue).
        2.  Set event’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute to `[BUBBLING_PHASE](https://dom.spec.whatwg.org/#dom-event-bubbling_phase)`.

    20. [Invoke](https://dom.spec.whatwg.org/#concept-event-listener-invoke) with struct, event, "`bubbling`", and legacyOutputDidListenersThrowFlag if given.

6.  Set event’s `[eventPhase](https://dom.spec.whatwg.org/#dom-event-eventphase)` attribute to `[NONE](https://dom.spec.whatwg.org/#dom-event-none)`.
7.  Set event’s `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` attribute to null.
8.  Set event’s [path](https://dom.spec.whatwg.org/#event-path) to the empty list.
9.  Unset event’s [dispatch flag](https://dom.spec.whatwg.org/#dispatch-flag), [stop propagation flag](https://dom.spec.whatwg.org/#stop-propagation-flag), and [stop immediate propagation flag](https://dom.spec.whatwg.org/#stop-immediate-propagation-flag).
10. If clearTargets, then:

11. Set event’s [target](https://dom.spec.whatwg.org/#event-target) to null.
12. Set event’s [relatedTarget](https://dom.spec.whatwg.org/#event-relatedtarget) to null.
13. Set event’s [touch target list](https://dom.spec.whatwg.org/#event-touch-target-list) to the empty list.
14. If activationTarget is non-null, then:

15. If event’s [canceled flag](https://dom.spec.whatwg.org/#canceled-flag) is unset, then run activationTarget’s [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior) with event.
16. Otherwise, if activationTarget has [legacy-canceled-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-canceled-activation-behavior), then run activationTarget’s [legacy-canceled-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-canceled-activation-behavior).
17. Return false if event’s [canceled flag](https://dom.spec.whatwg.org/#canceled-flag) is set; otherwise true.

To append to an event path, given an event, invocationTarget, shadowAdjustedTarget, relatedTarget, touchTargets, and a slot-in-closed-tree, run these steps:

1.  Let invocationTargetInShadowTree be false.
2.  If invocationTarget is a [node](https://dom.spec.whatwg.org/#concept-node) and its [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then set invocationTargetInShadowTree to true.
3.  Let root-of-closed-tree be false.
4.  If invocationTarget is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) whose [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is "`closed`", then set root-of-closed-tree to true.
5.  [Append](https://infra.spec.whatwg.org/#list-append) a new [struct](https://infra.spec.whatwg.org/#struct) to event’s [path](https://dom.spec.whatwg.org/#event-path) whose [invocation target](https://dom.spec.whatwg.org/#event-path-invocation-target) is invocationTarget, [invocation-target-in-shadow-tree](https://dom.spec.whatwg.org/#event-path-invocation-target-in-shadow-tree) is invocationTargetInShadowTree, [shadow-adjusted target](https://dom.spec.whatwg.org/#event-path-shadow-adjusted-target) is shadowAdjustedTarget, [relatedTarget](https://dom.spec.whatwg.org/#event-path-relatedtarget) is relatedTarget, [touch target list](https://dom.spec.whatwg.org/#event-path-touch-target-list) is touchTargets, [root-of-closed-tree](https://dom.spec.whatwg.org/#event-path-root-of-closed-tree) is root-of-closed-tree, and [slot-in-closed-tree](https://dom.spec.whatwg.org/#event-path-slot-in-closed-tree) is slot-in-closed-tree.

To invoke, given a struct, event, phase, and an optional legacyOutputDidListenersThrowFlag, run these steps:

1.  Set event’s [target](https://dom.spec.whatwg.org/#event-target) to the [shadow-adjusted target](https://dom.spec.whatwg.org/#event-path-shadow-adjusted-target) of the last struct in event’s [path](https://dom.spec.whatwg.org/#event-path), that is either struct or preceding struct, whose [shadow-adjusted target](https://dom.spec.whatwg.org/#event-path-shadow-adjusted-target) is non-null.
2.  Set event’s [relatedTarget](https://dom.spec.whatwg.org/#event-relatedtarget) to struct’s [relatedTarget](https://dom.spec.whatwg.org/#event-path-relatedtarget).
3.  Set event’s [touch target list](https://dom.spec.whatwg.org/#event-touch-target-list) to struct’s [touch target list](https://dom.spec.whatwg.org/#event-path-touch-target-list).
4.  If event’s [stop propagation flag](https://dom.spec.whatwg.org/#stop-propagation-flag) is set, then return.
5.  Initialize event’s `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` attribute to struct’s [invocation target](https://dom.spec.whatwg.org/#event-path-invocation-target).
6.  Let listeners be a [clone](https://infra.spec.whatwg.org/#list-clone) of event’s `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` attribute value’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list).

    This avoids [event listeners](https://dom.spec.whatwg.org/#concept-event-listener) added after this point from being run. Note that removal still has an effect due to the [removed](https://dom.spec.whatwg.org/#event-listener-removed) field.

7.  Let invocationTargetInShadowTree be struct’s [invocation-target-in-shadow-tree](https://dom.spec.whatwg.org/#event-path-invocation-target-in-shadow-tree).
8.  Let found be the result of running [inner invoke](https://dom.spec.whatwg.org/#concept-event-listener-inner-invoke) with event, listeners, phase, invocationTargetInShadowTree, and legacyOutputDidListenersThrowFlag if given.
9.  If found is false and event’s `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute is true, then:

    1.  Let originalEventType be event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value.
    2.  If event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value is a match for any of the strings in the first column in the following table, set event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value to the string in the second column on the same row as the matching string, and return otherwise.

        Event type

        Legacy event type

        "`animationend`"

        "`webkitAnimationEnd`"

        "`animationiteration`"

        "`webkitAnimationIteration`"

        "`animationstart`"

        "`webkitAnimationStart`"

        "`transitionend`"

        "`webkitTransitionEnd`"

    3.  [Inner invoke](https://dom.spec.whatwg.org/#concept-event-listener-inner-invoke) with event, listeners, phase, invocationTargetInShadowTree, and legacyOutputDidListenersThrowFlag if given.
    4.  Set event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value to originalEventType.

To inner invoke, given an event, listeners, phase, invocationTargetInShadowTree, and an optional legacyOutputDidListenersThrowFlag, run these steps:

1.  Let found be false.
2.  [For each](https://infra.spec.whatwg.org/#list-iterate) listener in listeners, whose [removed](https://dom.spec.whatwg.org/#event-listener-removed) is false:

    1.  If event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value is not listener’s [type](https://dom.spec.whatwg.org/#event-listener-type), then [continue](https://infra.spec.whatwg.org/#iteration-continue).
    2.  Set found to true.
    3.  If phase is "`capturing`" and listener’s [capture](https://dom.spec.whatwg.org/#event-listener-capture) is false, then [continue](https://infra.spec.whatwg.org/#iteration-continue).
    4.  If phase is "`bubbling`" and listener’s [capture](https://dom.spec.whatwg.org/#event-listener-capture) is true, then [continue](https://infra.spec.whatwg.org/#iteration-continue).
    5.  If listener’s [once](https://dom.spec.whatwg.org/#event-listener-once) is true, then [remove](https://infra.spec.whatwg.org/#list-remove) listener from event’s `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` attribute value’s [event listener list](https://dom.spec.whatwg.org/#eventtarget-event-listener-list).
    6.  Let global be listener [callback](https://dom.spec.whatwg.org/#event-listener-callback)’s [associated Realm](https://webidl.spec.whatwg.org/#dfn-associated-realm)’s [global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global).
    7.  Let currentEvent be undefined.
    8.  If global is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, then:

        1.  Set currentEvent to global’s [current event](https://dom.spec.whatwg.org/#window-current-event).
        2.  If invocationTargetInShadowTree is false, then set global’s [current event](https://dom.spec.whatwg.org/#window-current-event) to event.

    9.  If listener’s [passive](https://dom.spec.whatwg.org/#event-listener-passive) is true, then set event’s [in passive listener flag](https://dom.spec.whatwg.org/#in-passive-listener-flag).
    10. [Call a user object’s operation](https://webidl.spec.whatwg.org/#call-a-user-objects-operation) with listener’s [callback](https://dom.spec.whatwg.org/#event-listener-callback), "`handleEvent`", « event », and event’s `[currentTarget](https://dom.spec.whatwg.org/#dom-event-currenttarget)` attribute value. If this throws an exception, then:

    11. [Report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception).
    12. Set legacyOutputDidListenersThrowFlag if given.

        The legacyOutputDidListenersThrowFlag is only used by Indexed Database API. [\[INDEXEDDB\]](https://dom.spec.whatwg.org/#biblio-indexeddb)

    13. Unset event’s [in passive listener flag](https://dom.spec.whatwg.org/#in-passive-listener-flag).

    14. If global is a `[Window](https://html.spec.whatwg.org/multipage/window-object.html#window)` object, then set global’s [current event](https://dom.spec.whatwg.org/#window-current-event) to currentEvent.

    15. If event’s [stop immediate propagation flag](https://dom.spec.whatwg.org/#stop-immediate-propagation-flag) is set, then return found.

3.  Return found.

### 2.10. Firing events[](https://dom.spec.whatwg.org/#firing-events)

To fire an event named e at target, optionally using an eventConstructor, with a description of how IDL attributes are to be initialized, and a legacy target override flag, run these steps:

1.  If eventConstructor is not given, then let eventConstructor be `[Event](https://dom.spec.whatwg.org/#event)`.
2.  Let event be the result of [creating an event](https://dom.spec.whatwg.org/#concept-event-create) given eventConstructor, in the [relevant Realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm) of target.
3.  Initialize event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute to e.
4.  Initialize any other IDL attributes of event as described in the invocation of this algorithm.

    This also allows for the `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute to be set to false.

5.  Return the result of [dispatching](https://dom.spec.whatwg.org/#concept-event-dispatch) event at target, with legacy target override flag set if set.

Fire in the context of DOM is short for [creating](https://dom.spec.whatwg.org/#concept-event-create), initializing, and [dispatching](https://dom.spec.whatwg.org/#concept-event-dispatch) an [event](https://dom.spec.whatwg.org/#concept-event). [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) makes that process easier to write down.

If the [event](https://dom.spec.whatwg.org/#concept-event) needs its `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` or `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized, one could write "[fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `submit` at target with its `[cancelable](https://dom.spec.whatwg.org/#dom-event-cancelable)` attribute initialized to true".

Or, when a custom constructor is needed, "[fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `click` at target using `[MouseEvent](https://www.w3.org/TR/uievents/#mouseevent)` with its `[detail](https://www.w3.org/TR/uievents/#dom-uievent-detail)` attribute initialized to 1".

Occasionally the return value is important:

1.  Let doAction be the result of [firing an event](https://dom.spec.whatwg.org/#concept-event-fire) named `like` at target.
2.  If doAction is true, then …

### 2.11. Action versus occurrence[](https://dom.spec.whatwg.org/#action-versus-occurance)

An [event](https://dom.spec.whatwg.org/#concept-event) signifies an occurrence, not an action. Phrased differently, it represents a notification from an algorithm and can be used to influence the future course of that algorithm (e.g., through invoking `[preventDefault()](https://dom.spec.whatwg.org/#dom-event-preventdefault)`). [Events](https://dom.spec.whatwg.org/#concept-event) must not be used as actions or initiators that cause some algorithm to start running. That is not what they are for.

This is called out here specifically because previous iterations of the DOM had a concept of "default actions" associated with [events](https://dom.spec.whatwg.org/#concept-event) that gave folks all the wrong ideas. [Events](https://dom.spec.whatwg.org/#concept-event) do not represent or cause actions, they can only be used to influence an ongoing one.

## 3\. Aborting ongoing activities[](https://dom.spec.whatwg.org/#aborting-ongoing-activities)

Though promises do not have a built-in aborting mechanism, many APIs using them require abort semantics. `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` is meant to support these requirements by providing an `[abort()](https://dom.spec.whatwg.org/#dom-abortcontroller-abort)` method that toggles the state of a corresponding `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object. The API which wishes to support aborting can accept an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object, and use its state to determine how to proceed.

APIs that rely upon `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` are encouraged to respond to `[abort()](https://dom.spec.whatwg.org/#dom-abortcontroller-abort)` by rejecting any unsettled promise with the `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`'s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason).

A hypothetical `doAmazingness({ ... })` method could accept an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object to support aborting as follows:

```
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

doAmazingness({ ..., signal })
  .then(result => ...)
  .catch(err => {
    if (err.name == 'AbortError') return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

// …

controller.abort();
```

`doAmazingness` could be implemented as follows:

```
function doAmazingness({signal}) {
  return new Promise((resolve, reject) => {
    signal.throwIfAborted();

    // Begin doing amazingness, and call resolve(result) when done.
    // But also, watch for signals:
    signal.addEventListener('abort', () => {
      // Stop doing amazingness, and:
      reject(signal.reason);
    });
  });
}
```

APIs that do not return promises can either react in an equivalent manner or opt to not surface the `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`'s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason) at all. `[addEventListener()](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener)` is an example of an API where the latter made sense.

APIs that require more granular control could extend both `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` and `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` objects according to their needs.

### 3.1. Interface `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)`[](https://dom.spec.whatwg.org/#interface-abortcontroller)

[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController 'The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.')

In all current engines.

Firefox57+Safari12.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari12.2+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=(Window,Worker)\]
interface `AbortController` {
[constructor](https://dom.spec.whatwg.org/#dom-abortcontroller-abortcontroller)();

\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [AbortSignal](https://dom.spec.whatwg.org/#abortsignal) [signal](https://dom.spec.whatwg.org/#dom-abortcontroller-signal);

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [abort](https://dom.spec.whatwg.org/#dom-abortcontroller-abort)(optional [any](https://webidl.spec.whatwg.org/#idl-any) `reason`[](https://dom.spec.whatwg.org/#dom-abortcontroller-abort-reason-reason));
};

[AbortController/AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController 'The AbortController() constructor creates a new AbortController object instance.')

In all current engines.

Firefox57+Safari12.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari12.2+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

[AbortController/abort](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort 'The abort() method of the AbortController interface aborts a DOM request before it has completed. This is able to abort fetch requests, the consumption of any response bodies, or streams.')

In all current engines.

Firefox57+Safari12.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari12.2+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

`controller = new [AbortController](https://dom.spec.whatwg.org/#dom-abortcontroller-abortcontroller)()`

Returns a new controller whose `[signal](https://dom.spec.whatwg.org/#dom-abortcontroller-signal)` is set to a newly created `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object.

[AbortController/signal](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal 'The signal read-only property of the AbortController interface returns an AbortSignal object instance, which can be used to communicate with/abort a DOM request as desired.')

In all current engines.

Firefox57+Safari12.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari12.2+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

`controller . [signal](https://dom.spec.whatwg.org/#dom-abortcontroller-signal)`

Returns the `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object associated with this object.

`controller . [abort](https://dom.spec.whatwg.org/#dom-abortcontroller-abort)(reason)`

Invoking this method will store reason in this object’s `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`'s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason), and signal to any observers that the associated activity is to be aborted. If reason is undefined, then an "`[AbortError](https://webidl.spec.whatwg.org/#aborterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` will be stored.

An `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` object has an associated signal (an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object).

The `new AbortController()` constructor steps are:

1.  Let signal be a new `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object.
2.  Set [this](https://webidl.spec.whatwg.org/#this)’s [signal](https://dom.spec.whatwg.org/#abortcontroller-signal) to signal.

The `signal` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [signal](https://dom.spec.whatwg.org/#abortcontroller-signal).

The `abort(reason)` method steps are to [signal abort](https://dom.spec.whatwg.org/#abortsignal-signal-abort) on [this](https://webidl.spec.whatwg.org/#this)’s [signal](https://dom.spec.whatwg.org/#abortcontroller-signal) with reason if it is given.

### 3.2. Interface `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`[](https://dom.spec.whatwg.org/#interface-AbortSignal)

[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal 'The AbortSignal interface represents a signal object that allows you to communicate with a DOM request (such as a fetch request) and abort it if required via an AbortController object.')

In all current engines.

Firefox57+Safari11.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari11.3+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=(Window,Worker)\]
interface `AbortSignal` : [EventTarget](https://dom.spec.whatwg.org/#eventtarget) {
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] static [AbortSignal](https://dom.spec.whatwg.org/#abortsignal) [abort](https://dom.spec.whatwg.org/#dom-abortsignal-abort)(optional [any](https://webidl.spec.whatwg.org/#idl-any) `reason`[](https://dom.spec.whatwg.org/#dom-abortsignal-abort-reason-reason));

readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [aborted](https://dom.spec.whatwg.org/#dom-abortsignal-aborted);
readonly attribute [any](https://webidl.spec.whatwg.org/#idl-any) [reason](https://dom.spec.whatwg.org/#dom-abortsignal-reason);
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [throwIfAborted](https://dom.spec.whatwg.org/#dom-abortsignal-throwifaborted)();

attribute [EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler) [onabort](https://dom.spec.whatwg.org/#dom-abortsignal-onabort);
};

[AbortSignal/abort](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort 'The static AbortSignal.abort() method returns an AbortSignal that is already set as aborted (and which does not trigger an abort event).')

In all current engines.

Firefox88+Safari15+Chrome93+

---

Opera79+Edge93+

---

Edge (Legacy)NoneIENone

---

Firefox for Android88+iOS Safari15+Chrome for Android93+Android WebView93+Samsung InternetNoneOpera MobileNone

---

Node.jsNone

`AbortSignal . [abort](https://dom.spec.whatwg.org/#dom-abortsignal-abort)(reason)`

Returns an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` instance whose [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason) is set to reason if not undefined; otherwise to an "`[AbortError](https://webidl.spec.whatwg.org/#aborterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

[AbortSignal/aborted](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/aborted 'The aborted read-only property returns a value that indicates whether the DOM requests the signal is communicating with are aborted (true) or not (false).')

In all current engines.

Firefox57+Safari11.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari11.3+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

`signal . [aborted](https://dom.spec.whatwg.org/#dom-abortsignal-aborted)`

Returns true if signal’s `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` has signaled to abort; otherwise false.

`signal . [reason](https://dom.spec.whatwg.org/#dom-abortsignal-reason)`

Returns signal’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason).

`signal . [throwIfAborted](https://dom.spec.whatwg.org/#dom-abortsignal-throwifaborted)()`

Throws signal’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason), if signal’s `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` has signaled to abort; otherwise, does nothing.

An `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object has an associated abort reason, which is a JavaScript value. It is undefined unless specified otherwise.

An `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object is aborted when its [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason) is not undefined.

An `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object has associated abort algorithms, which is a [set](https://infra.spec.whatwg.org/#ordered-set) of algorithms which are to be executed when it is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted). Unless specified otherwise, its value is the empty set.

To add an algorithm algorithm to an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object signal, run these steps:

1.  If signal is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted), then return.
2.  [Append](https://infra.spec.whatwg.org/#set-append) algorithm to signal’s [abort algorithms](https://dom.spec.whatwg.org/#abortsignal-abort-algorithms).

To remove[](https://dom.spec.whatwg.org/#abortsignal-remove) an algorithm algorithm from an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` signal, [remove](https://infra.spec.whatwg.org/#list-remove) algorithm from signal’s [abort algorithms](https://dom.spec.whatwg.org/#abortsignal-abort-algorithms).

The [abort algorithms](https://dom.spec.whatwg.org/#abortsignal-abort-algorithms) enable APIs with complex requirements to react in a reasonable way to `[abort()](https://dom.spec.whatwg.org/#dom-abortcontroller-abort)`. For example, a given API’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason) might need to be propagated to a cross-thread environment, such as a service worker.

The static `abort(reason)` method steps are:

1.  Let signal be a new `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object.
2.  Set signal’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason) to reason if it is given; otherwise to a new "`[AbortError](https://webidl.spec.whatwg.org/#aborterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Return signal.

The `aborted` getter steps are to return true if [this](https://webidl.spec.whatwg.org/#this) is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted); otherwise false.

The `reason` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason).

The `throwIfAborted()` method steps are to throw [this](https://webidl.spec.whatwg.org/#this)’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason), if [this](https://webidl.spec.whatwg.org/#this) is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted).

This method is primarily useful for when functions accepting `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`s want to throw (or return a rejected promise) at specific checkpoints, instead of passing along the `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` to other methods. For example, the following function allows aborting in between each attempt to poll for a condition. This gives opportunities to abort the polling process, even though the actual asynchronous operation (i.e., `await func()`) does not accept an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`.

async function waitForCondition(func, targetValue, { signal } \= {}) {
while (true) {
signal?.throwIfAborted();

    const result \= await func();
    if (result \=== targetValue) {
      return;
    }

}
}

[AbortSignal/abort_event](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event 'The abort event of the Fetch API is fired when a fetch request is aborted, i.e. using AbortController.abort().')

In all current engines.

Firefox57+Safari11.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari11.3+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

[AbortSignal/onabort](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/onabort 'The onabort read-only property of the AbortSignal interface is an event handler invoked when an abort event fires, i.e. when the fetch requests the signal is communicating with are aborted.')

In all current engines.

Firefox57+Safari11.1+Chrome66+

---

Opera53+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android57+iOS Safari11.3+Chrome for Android66+Android WebView66+Samsung Internet9.0+Opera Mobile47+

---

Node.js15.0.0+

The `onabort` attribute is an [event handler IDL attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) for the `onabort`[](https://dom.spec.whatwg.org/#abortsignal-onabort) [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers), whose [event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type) is `abort`.

Changes to an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object represent the wishes of the corresponding `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` object, but an API observing the `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object can chose to ignore them. For instance, if the operation has already completed.

To signal abort, given an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object signal and an optional reason, run these steps:

1.  If signal is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted), then return.
2.  Set signal’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason) to reason if it is given; otherwise to a new "`[AbortError](https://webidl.spec.whatwg.org/#aborterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  [For each](https://infra.spec.whatwg.org/#list-iterate) algorithm in signal’s [abort algorithms](https://dom.spec.whatwg.org/#abortsignal-abort-algorithms): run algorithm.
4.  [Empty](https://infra.spec.whatwg.org/#list-empty) signal’s [abort algorithms](https://dom.spec.whatwg.org/#abortsignal-abort-algorithms).
5.  [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[abort](https://dom.spec.whatwg.org/#eventdef-abortsignal-abort)` at signal.

A followingSignal (an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`) is made to follow[](https://dom.spec.whatwg.org/#abortsignal-follow) a parentSignal (an `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)`) by running these steps:

1.  If followingSignal is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted), then return.
2.  If parentSignal is [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted), then [signal abort](https://dom.spec.whatwg.org/#abortsignal-signal-abort) on followingSignal with parentSignal’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason).
3.  Otherwise, [add the following abort steps](https://dom.spec.whatwg.org/#abortsignal-add) to parentSignal:

    1.  [Signal abort](https://dom.spec.whatwg.org/#abortsignal-signal-abort) on followingSignal with parentSignal’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason).

### 3.3. Using `[AbortController](https://dom.spec.whatwg.org/#abortcontroller)` and `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` objects in APIs[](https://dom.spec.whatwg.org/#abortcontroller-api-integration)

Any web platform API using promises to represent operations that can be aborted must adhere to the following:

-   Accept `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` objects through a `signal` dictionary member.
-   Convey that the operation got aborted by rejecting the promise with `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object’s [abort reason](https://dom.spec.whatwg.org/#abortsignal-abort-reason).
-   Reject immediately if the `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` is already [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted), otherwise:
-   Use the [abort algorithms](https://dom.spec.whatwg.org/#abortsignal-abort-algorithms) mechanism to observe changes to the `[AbortSignal](https://dom.spec.whatwg.org/#abortsignal)` object and do so in a manner that does not lead to clashes with other observers.

APIs not using promises should still adhere to the above as much as possible.

## 4\. Nodes[](https://dom.spec.whatwg.org/#nodes)

### 4.1. Introduction to "The DOM"[](https://dom.spec.whatwg.org/#introduction-to-the-dom)

In its original sense, "The DOM" is an API for accessing and manipulating documents (in particular, HTML and XML documents). In this specification, the term "document" is used for any markup-based resource, ranging from short static documents to long essays or reports with rich multimedia, as well as to fully-fledged interactive applications.

Each such document is represented as a [node tree](https://dom.spec.whatwg.org/#concept-node-tree). Some of the [nodes](https://dom.spec.whatwg.org/#concept-node) in a [tree](https://dom.spec.whatwg.org/#concept-tree) can have [children](https://dom.spec.whatwg.org/#concept-tree-child), while others are always leaves.

To illustrate, consider this HTML document:

<!DOCTYPE html>
<html class\=e\>
 <head\>
<title\>Aliens?</title\>
</head\>
 <body\>Why yes.</body\>
</html\>

It is represented as follows:

-   [Document](https://dom.spec.whatwg.org/#concept-document)
    -   [Doctype](https://dom.spec.whatwg.org/#concept-doctype): `html`
    -   `[Element](https://dom.spec.whatwg.org/#element)`: `html` `class`\="`e`"
        -   `[Element](https://dom.spec.whatwg.org/#element)`: `head`
            -   `[Element](https://dom.spec.whatwg.org/#element)`: `title`
                -   `[Text](https://dom.spec.whatwg.org/#text)`: Aliens?
        -   `[Text](https://dom.spec.whatwg.org/#text)`: ⏎␣
        -   `[Element](https://dom.spec.whatwg.org/#element)`: `body`
            -   `[Text](https://dom.spec.whatwg.org/#text)`: Why yes.⏎

Note that, due to the magic that is [HTML parsing](https://html.spec.whatwg.org/multipage/parsing.html#html-parser), not all [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) were turned into `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node), but the general concept is clear. Markup goes in, a [tree](https://dom.spec.whatwg.org/#concept-tree) of [nodes](https://dom.spec.whatwg.org/#concept-node) comes out.

The most excellent [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) can be used to explore this matter in more detail.

### 4.2. Node tree[](https://dom.spec.whatwg.org/#node-trees)

Nodes are objects that [implement](https://webidl.spec.whatwg.org/#implements) `[Node](https://dom.spec.whatwg.org/#node)`. [Nodes](https://dom.spec.whatwg.org/#concept-node) [participate](https://dom.spec.whatwg.org/#concept-tree-participate) in a [tree](https://dom.spec.whatwg.org/#concept-tree), which is known as the node tree.

For brevity, this specification refers to an object that [implements](https://webidl.spec.whatwg.org/#implements) `[Node](https://dom.spec.whatwg.org/#node)` and an inherited interface `NodeInterface`, as a `NodeInterface` [node](https://dom.spec.whatwg.org/#concept-node).

A [node tree](https://dom.spec.whatwg.org/#concept-node-tree) is constrained as follows, expressed as a relationship between a [node](https://dom.spec.whatwg.org/#concept-node) and its potential [children](https://dom.spec.whatwg.org/#concept-tree-child):

`[Document](https://dom.spec.whatwg.org/#document)`

In [tree order](https://dom.spec.whatwg.org/#concept-tree-order):

1.  Zero or more `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)` or `[Comment](https://dom.spec.whatwg.org/#comment)` [nodes](https://dom.spec.whatwg.org/#concept-node).
2.  Optionally one `[DocumentType](https://dom.spec.whatwg.org/#documenttype)` [node](https://dom.spec.whatwg.org/#concept-node).
3.  Zero or more `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)` or `[Comment](https://dom.spec.whatwg.org/#comment)` [nodes](https://dom.spec.whatwg.org/#concept-node).
4.  Optionally one `[Element](https://dom.spec.whatwg.org/#element)` [node](https://dom.spec.whatwg.org/#concept-node).
5.  Zero or more `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)` or `[Comment](https://dom.spec.whatwg.org/#comment)` [nodes](https://dom.spec.whatwg.org/#concept-node).

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

`[Element](https://dom.spec.whatwg.org/#element)`

Zero or more `[Element](https://dom.spec.whatwg.org/#element)` or `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [nodes](https://dom.spec.whatwg.org/#concept-node).

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

`[CharacterData](https://dom.spec.whatwg.org/#characterdata)`

`[Attr](https://dom.spec.whatwg.org/#attr)`

No [children](https://dom.spec.whatwg.org/#concept-tree-child).

`[Attr](https://dom.spec.whatwg.org/#attr)` [nodes](https://dom.spec.whatwg.org/#concept-node) [participate](https://dom.spec.whatwg.org/#concept-tree-participate) in a [tree](https://dom.spec.whatwg.org/#concept-tree) for historical reasons; they never have a (non-null) [parent](https://dom.spec.whatwg.org/#concept-tree-parent) or any [children](https://dom.spec.whatwg.org/#concept-tree-child) and are therefore alone in a [tree](https://dom.spec.whatwg.org/#concept-tree).

To determine the length of a [node](https://dom.spec.whatwg.org/#concept-node) node, run these steps:

1.  If node is a `[DocumentType](https://dom.spec.whatwg.org/#documenttype)` or `[Attr](https://dom.spec.whatwg.org/#attr)` [node](https://dom.spec.whatwg.org/#concept-node), then return 0.
2.  If node is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then return node’s [data](https://dom.spec.whatwg.org/#concept-cd-data)’s [length](https://infra.spec.whatwg.org/#string-length).
3.  Return the number of node’s [children](https://dom.spec.whatwg.org/#concept-tree-child).

A [node](https://dom.spec.whatwg.org/#concept-node) is considered empty if its [length](https://dom.spec.whatwg.org/#concept-node-length) is 0.

#### 4.2.1. Document tree[](https://dom.spec.whatwg.org/#document-trees)

A document tree[](https://dom.spec.whatwg.org/#concept-document-tree) is a [node tree](https://dom.spec.whatwg.org/#concept-node-tree) whose [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [document](https://dom.spec.whatwg.org/#concept-document).

The document element of a [document](https://dom.spec.whatwg.org/#concept-document) is the [element](https://dom.spec.whatwg.org/#concept-element) whose [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is that [document](https://dom.spec.whatwg.org/#concept-document), if it exists; otherwise null.

Per the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) constraints, there can be only one such [element](https://dom.spec.whatwg.org/#concept-element).

An [element](https://dom.spec.whatwg.org/#concept-element) is in a document tree if its [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [document](https://dom.spec.whatwg.org/#concept-document).

An [element](https://dom.spec.whatwg.org/#concept-element) is in a document if it is [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree). The term [in a document](https://dom.spec.whatwg.org/#in-a-document) is no longer supposed to be used. It indicates that the standard using it has not been updated to account for [shadow trees](https://dom.spec.whatwg.org/#concept-shadow-tree).

#### 4.2.2. Shadow tree[](https://dom.spec.whatwg.org/#shadow-trees)

A shadow tree is a [node tree](https://dom.spec.whatwg.org/#concept-node-tree) whose [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root).

A [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) is always attached to another [node tree](https://dom.spec.whatwg.org/#concept-node-tree) through its [host](https://dom.spec.whatwg.org/#concept-documentfragment-host). A [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) is therefore never alone. The [node tree](https://dom.spec.whatwg.org/#concept-node-tree) of a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) is sometimes referred to as the light tree.

A [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree)’s corresponding [light tree](https://dom.spec.whatwg.org/#concept-light-tree) can be a [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) itself.

An [element](https://dom.spec.whatwg.org/#concept-element) is connected if its [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root) is a [document](https://dom.spec.whatwg.org/#concept-document).

##### 4.2.2.1. Slots[](https://dom.spec.whatwg.org/#shadow-tree-slots)

[Element/slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot 'The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.')

In all current engines.

Firefox63+Safari10+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

A [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) contains zero or more [elements](https://dom.spec.whatwg.org/#concept-element) that are slots.

A [slot](https://dom.spec.whatwg.org/#concept-slot) can only be created through HTML’s `[slot](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element)` element.

A [slot](https://dom.spec.whatwg.org/#concept-slot) has an associated name (a string). Unless stated otherwise it is the empty string.

Use these [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) to update a [slot](https://dom.spec.whatwg.org/#concept-slot)’s [name](https://dom.spec.whatwg.org/#slot-name):

1.  If element is a [slot](https://dom.spec.whatwg.org/#concept-slot), localName is `name`, and namespace is null, then:

    1.  If value is oldValue, then return.
    2.  If value is null and oldValue is the empty string, then return.
    3.  If value is the empty string and oldValue is null, then return.
    4.  If value is null or the empty string, then set element’s [name](https://dom.spec.whatwg.org/#slot-name) to the empty string.
    5.  Otherwise, set element’s [name](https://dom.spec.whatwg.org/#slot-name) to value.
    6.  Run [assign slottables for a tree](https://dom.spec.whatwg.org/#assign-slotables-for-a-tree) with element’s [root](https://dom.spec.whatwg.org/#concept-tree-root).

The first [slot](https://dom.spec.whatwg.org/#concept-slot) in a [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), whose [name](https://dom.spec.whatwg.org/#slot-name) is the empty string, is sometimes known as the "default slot".

A [slot](https://dom.spec.whatwg.org/#concept-slot) has an associated assigned nodes (a list of [slottables](https://dom.spec.whatwg.org/#concept-slotable)). Unless stated otherwise it is empty.

##### 4.2.2.2. Slottables[](https://dom.spec.whatwg.org/#light-tree-slotables)

`[Element](https://dom.spec.whatwg.org/#element)` and `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node) are slottables.

A [slot](https://dom.spec.whatwg.org/#concept-slot) can be a [slottable](https://dom.spec.whatwg.org/#concept-slotable).

A [slottable](https://dom.spec.whatwg.org/#concept-slotable) has an associated name (a string). Unless stated otherwise it is the empty string.

Use these [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) to update a [slottable](https://dom.spec.whatwg.org/#concept-slotable)’s [name](https://dom.spec.whatwg.org/#slotable-name):

1.  If localName is `slot` and namespace is null, then:

    1.  If value is oldValue, then return.
    2.  If value is null and oldValue is the empty string, then return.
    3.  If value is the empty string and oldValue is null, then return.
    4.  If value is null or the empty string, then set element’s [name](https://dom.spec.whatwg.org/#slotable-name) to the empty string.
    5.  Otherwise, set element’s [name](https://dom.spec.whatwg.org/#slotable-name) to value.
    6.  If element is [assigned](https://dom.spec.whatwg.org/#slotable-assigned), then run [assign slottables](https://dom.spec.whatwg.org/#assign-slotables) for element’s [assigned slot](https://dom.spec.whatwg.org/#slotable-assigned-slot).
    7.  Run [assign a slot](https://dom.spec.whatwg.org/#assign-a-slot) for element.

A [slottable](https://dom.spec.whatwg.org/#concept-slotable) has an associated assigned slot (null or a [slot](https://dom.spec.whatwg.org/#concept-slot)). Unless stated otherwise it is null. A [slottable](https://dom.spec.whatwg.org/#concept-slotable) is assigned if its [assigned slot](https://dom.spec.whatwg.org/#slotable-assigned-slot) is non-null.

A [slottable](https://dom.spec.whatwg.org/#concept-slotable) has an associated manual slot assignment (null or a [slot](https://dom.spec.whatwg.org/#concept-slot)). Unless stated otherwise, it is null.

A [slottable](https://dom.spec.whatwg.org/#concept-slotable)’s [manual slot assignment](https://dom.spec.whatwg.org/#slottable-manual-slot-assignment) can be implemented using a weak reference to the [slot](https://dom.spec.whatwg.org/#concept-slot), because this variable is not directly accessible from script.

##### 4.2.2.3. Finding slots and slottables[](https://dom.spec.whatwg.org/#finding-slots-and-slotables)

To find a slot for a given [slottable](https://dom.spec.whatwg.org/#concept-slotable) slottable and an optional _open flag_ (unset unless stated otherwise), run these steps:

1.  If slottable’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, then return null.
2.  Let shadow be slottable’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent)’s [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root).
3.  If shadow is null, then return null.
4.  If the _open flag_ is set and shadow’s [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is _not_ "`open`", then return null.
5.  If shadow’s [slot assignment](https://dom.spec.whatwg.org/#shadowroot-slot-assignment) is "`manual`", then return the [slot](https://dom.spec.whatwg.org/#concept-slot) in shadow’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) whose [manually assigned nodes](https://html.spec.whatwg.org/multipage/scripting.html#manually-assigned-nodes) [contains](https://infra.spec.whatwg.org/#list-contain) slottable, if any; otherwise null.
6.  Return the first [slot](https://dom.spec.whatwg.org/#concept-slot) in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) in shadow’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) whose [name](https://dom.spec.whatwg.org/#slot-name) is slottable’s [name](https://dom.spec.whatwg.org/#slotable-name), if any; otherwise null.

To find slottables for a given [slot](https://dom.spec.whatwg.org/#concept-slot) slot, run these steps:

1.  Let result be an empty list.
2.  Let root be slot’s [root](https://dom.spec.whatwg.org/#concept-tree-root).
3.  If root is not a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then return result.
4.  Let host be root’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).
5.  If root’s [slot assignment](https://dom.spec.whatwg.org/#shadowroot-slot-assignment) is "`manual`", then:

    1.  Let result be « ».
    2.  [For each](https://infra.spec.whatwg.org/#list-iterate) [slottable](https://dom.spec.whatwg.org/#concept-slotable) slottable of slot’s [manually assigned nodes](https://html.spec.whatwg.org/multipage/scripting.html#manually-assigned-nodes), if slottable’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is host, [append](https://infra.spec.whatwg.org/#list-append) slottable to result.

6.  Otherwise, for each [slottable](https://dom.spec.whatwg.org/#concept-slotable) [child](https://dom.spec.whatwg.org/#concept-tree-child) slottable of host, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order):

    1.  Let foundSlot be the result of [finding a slot](https://dom.spec.whatwg.org/#find-a-slot) given slottable.
    2.  If foundSlot is slot, then [append](https://infra.spec.whatwg.org/#list-append) slottable to result.

7.  Return result.

To find flattened slottables for a given [slot](https://dom.spec.whatwg.org/#concept-slot) slot, run these steps:

1.  Let result be an empty list.
2.  If slot’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is not a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then return result.
3.  Let slottables be the result of [finding slottables](https://dom.spec.whatwg.org/#find-slotables) given slot.
4.  If slottables is the empty list, then append each [slottable](https://dom.spec.whatwg.org/#concept-slotable) [child](https://dom.spec.whatwg.org/#concept-tree-child) of slot, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), to slottables.
5.  For each node in slottables:

    1.  If node is a [slot](https://dom.spec.whatwg.org/#concept-slot) whose [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then:

        1.  Let temporaryResult be the result of [finding flattened slottables](https://dom.spec.whatwg.org/#find-flattened-slotables) given node.
        2.  Append each [slottable](https://dom.spec.whatwg.org/#concept-slotable) in temporaryResult, in order, to result.

    2.  Otherwise, append node to result.

6.  Return result.

##### 4.2.2.4. Assigning slottables and slots[](https://dom.spec.whatwg.org/#assigning-slotables-and-slots)

To assign slottables for a [slot](https://dom.spec.whatwg.org/#concept-slot) slot, run these steps:

1.  Let slottables be the result of [finding slottables](https://dom.spec.whatwg.org/#find-slotables) for slot.
2.  If slottables and slot’s [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes) are not identical, then run [signal a slot change](https://dom.spec.whatwg.org/#signal-a-slot-change) for slot.
3.  Set slot’s [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes) to slottables.
4.  For each slottable in slottables, set slottable’s [assigned slot](https://dom.spec.whatwg.org/#slotable-assigned-slot) to slot.

To assign slottables for a tree, given a [node](https://dom.spec.whatwg.org/#concept-node) root, run [assign slottables](https://dom.spec.whatwg.org/#assign-slotables) for each [slot](https://dom.spec.whatwg.org/#concept-slot) slot in root’s [inclusive descendants](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

To assign a slot, given a [slottable](https://dom.spec.whatwg.org/#concept-slotable) slottable, run these steps:

1.  Let slot be the result of [finding a slot](https://dom.spec.whatwg.org/#find-a-slot) with slottable.
2.  If slot is non-null, then run [assign slottables](https://dom.spec.whatwg.org/#assign-slotables) for slot.

##### 4.2.2.5. Signaling slot change[](https://dom.spec.whatwg.org/#signaling-slot-change)

Each [similar-origin window agent](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent) has signal slots (a [set](https://infra.spec.whatwg.org/#ordered-set) of [slots](https://dom.spec.whatwg.org/#concept-slot)), which is initially empty. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

To signal a slot change, for a [slot](https://dom.spec.whatwg.org/#concept-slot) slot, run these steps:

1.  [Append](https://infra.spec.whatwg.org/#set-append) slot to slot’s [relevant agent](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-agent)’s [signal slots](https://dom.spec.whatwg.org/#signal-slot-list).
2.  [Queue a mutation observer microtask](https://dom.spec.whatwg.org/#queue-a-mutation-observer-compound-microtask).

#### 4.2.3. Mutation algorithms[](https://dom.spec.whatwg.org/#mutation-algorithms)

To ensure pre-insertion validity of a node into a parent before a child, run these steps:

1.  If parent is not a `[Document](https://dom.spec.whatwg.org/#document)`, `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`, or `[Element](https://dom.spec.whatwg.org/#element)` [node](https://dom.spec.whatwg.org/#concept-node), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If node is a [host-including inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-host-including-inclusive-ancestor) of parent, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If child is non-null and its [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is not parent, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotFoundError](https://webidl.spec.whatwg.org/#notfounderror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
4.  If node is not a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`, `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`, `[Element](https://dom.spec.whatwg.org/#element)`, or `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
5.  If either node is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) and parent is a [document](https://dom.spec.whatwg.org/#concept-document), or node is a [doctype](https://dom.spec.whatwg.org/#concept-doctype) and parent is not a [document](https://dom.spec.whatwg.org/#concept-document), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
6.  If parent is a [document](https://dom.spec.whatwg.org/#concept-document), and any of the statements below, switched on the interface node [implements](https://webidl.spec.whatwg.org/#implements), are true, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

    `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

    If node has more than one [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child) or has a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) [child](https://dom.spec.whatwg.org/#concept-tree-child).

    Otherwise, if node has one [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child) and either parent has an [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child), child is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), or child is non-null and a [doctype](https://dom.spec.whatwg.org/#concept-doctype) is [following](https://dom.spec.whatwg.org/#concept-tree-following) child.

    `[Element](https://dom.spec.whatwg.org/#element)`

    parent has an [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child), child is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), or child is non-null and a [doctype](https://dom.spec.whatwg.org/#concept-doctype) is [following](https://dom.spec.whatwg.org/#concept-tree-following) child.

    `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

    parent has a [doctype](https://dom.spec.whatwg.org/#concept-doctype) [child](https://dom.spec.whatwg.org/#concept-tree-child), child is non-null and an [element](https://dom.spec.whatwg.org/#concept-element) is [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) child, or child is null and parent has an [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child).

To pre-insert a node into a parent before a child, run these steps:

1.  [Ensure pre-insertion validity](https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity) of node into parent before child.
2.  Let referenceChild be child.
3.  If referenceChild is node, then set referenceChild to node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
4.  [Insert](https://dom.spec.whatwg.org/#concept-node-insert) node into parent before referenceChild.
5.  Return node.

[Specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define insertion steps for all or some [nodes](https://dom.spec.whatwg.org/#concept-node). The algorithm is passed insertedNode, as indicated in the [insert](https://dom.spec.whatwg.org/#concept-node-insert) algorithm below.

[Specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define children changed steps for all or some [nodes](https://dom.spec.whatwg.org/#concept-node). The algorithm is passed no argument and is called from [insert](https://dom.spec.whatwg.org/#concept-node-insert), [remove](https://dom.spec.whatwg.org/#concept-node-remove), and [replace data](https://dom.spec.whatwg.org/#concept-cd-replace).

To insert a node into a parent before a child, with an optional _suppress observers flag_, run these steps:

1.  Let nodes be node’s [children](https://dom.spec.whatwg.org/#concept-tree-child), if node is a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node); otherwise « node ».
2.  Let count be nodes’s [size](https://infra.spec.whatwg.org/#list-size).
3.  If count is 0, then return.
4.  If node is a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node), then:

    1.  [Remove](https://dom.spec.whatwg.org/#concept-node-remove) its [children](https://dom.spec.whatwg.org/#concept-tree-child) with the _suppress observers flag_ set.
    2.  [Queue a tree mutation record](https://dom.spec.whatwg.org/#queue-a-tree-mutation-record) for node with « », nodes, null, and null.

        This step intentionally does not pay attention to the _suppress observers flag_.

5.  If child is non-null, then:

    1.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is parent and [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is greater than child’s [index](https://dom.spec.whatwg.org/#concept-tree-index), increase its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) by count.
    2.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is parent and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is greater than child’s [index](https://dom.spec.whatwg.org/#concept-tree-index), increase its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) by count.

6.  Let previousSibling be child’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) or parent’s [last child](https://dom.spec.whatwg.org/#concept-tree-last-child) if child is null.
7.  For each node in nodes, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order):

    1.  [Adopt](https://dom.spec.whatwg.org/#concept-node-adopt) node into parent’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
    2.  If child is null, then [append](https://infra.spec.whatwg.org/#set-append) node to parent’s [children](https://dom.spec.whatwg.org/#concept-tree-child).
    3.  Otherwise, [insert](https://infra.spec.whatwg.org/#list-insert) node into parent’s [children](https://dom.spec.whatwg.org/#concept-tree-child) before child’s [index](https://dom.spec.whatwg.org/#concept-tree-index).
    4.  If parent is a [shadow host](https://dom.spec.whatwg.org/#element-shadow-host) whose [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)’s [slot assignment](https://dom.spec.whatwg.org/#shadowroot-slot-assignment) is "`named`" and node is a [slottable](https://dom.spec.whatwg.org/#concept-slotable), then [assign a slot](https://dom.spec.whatwg.org/#assign-a-slot) for node.
    5.  If parent’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), and parent is a [slot](https://dom.spec.whatwg.org/#concept-slot) whose [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes) is the empty list, then run [signal a slot change](https://dom.spec.whatwg.org/#signal-a-slot-change) for parent.
    6.  Run [assign slottables for a tree](https://dom.spec.whatwg.org/#assign-slotables-for-a-tree) with node’s [root](https://dom.spec.whatwg.org/#concept-tree-root).
    7.  For each [shadow-including inclusive descendant](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant) inclusiveDescendant of node, in [shadow-including tree order](https://dom.spec.whatwg.org/#concept-shadow-including-tree-order):

        1.  Run the [insertion steps](https://dom.spec.whatwg.org/#concept-node-insert-ext) with inclusiveDescendant.
        2.  If inclusiveDescendant is [connected](https://dom.spec.whatwg.org/#connected), then:

            1.  If inclusiveDescendant is [custom](https://dom.spec.whatwg.org/#concept-element-custom), then [enqueue a custom element callback reaction](https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction) with inclusiveDescendant, callback name "`connectedCallback`", and an empty argument list.
            2.  Otherwise, [try to upgrade](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-try-upgrade) inclusiveDescendant.

                If this successfully upgrades inclusiveDescendant, its `connectedCallback` will be enqueued automatically during the [upgrade an element](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-upgrade-an-element) algorithm.

8.  If _suppress observers flag_ is unset, then [queue a tree mutation record](https://dom.spec.whatwg.org/#queue-a-tree-mutation-record) for parent with nodes, « », previousSibling, and child.
9.  Run the [children changed steps](https://dom.spec.whatwg.org/#concept-node-children-changed-ext) for parent.

To append a node to a parent, [pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into parent before null.

To replace a child with node within a parent, run these steps:

1.  If parent is not a `[Document](https://dom.spec.whatwg.org/#document)`, `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`, or `[Element](https://dom.spec.whatwg.org/#element)` [node](https://dom.spec.whatwg.org/#concept-node), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If node is a [host-including inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-host-including-inclusive-ancestor) of parent, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If child’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is not parent, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotFoundError](https://webidl.spec.whatwg.org/#notfounderror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
4.  If node is not a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`, `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`, `[Element](https://dom.spec.whatwg.org/#element)`, or `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
5.  If either node is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) and parent is a [document](https://dom.spec.whatwg.org/#concept-document), or node is a [doctype](https://dom.spec.whatwg.org/#concept-doctype) and parent is not a [document](https://dom.spec.whatwg.org/#concept-document), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
6.  If parent is a [document](https://dom.spec.whatwg.org/#concept-document), and any of the statements below, switched on the interface node [implements](https://webidl.spec.whatwg.org/#implements), are true, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

    `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

    If node has more than one [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child) or has a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) [child](https://dom.spec.whatwg.org/#concept-tree-child).

    Otherwise, if node has one [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child) and either parent has an [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child) that is not child or a [doctype](https://dom.spec.whatwg.org/#concept-doctype) is [following](https://dom.spec.whatwg.org/#concept-tree-following) child.

    `[Element](https://dom.spec.whatwg.org/#element)`

    parent has an [element](https://dom.spec.whatwg.org/#concept-element) [child](https://dom.spec.whatwg.org/#concept-tree-child) that is not child or a [doctype](https://dom.spec.whatwg.org/#concept-doctype) is [following](https://dom.spec.whatwg.org/#concept-tree-following) child.

    `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

    parent has a [doctype](https://dom.spec.whatwg.org/#concept-doctype) [child](https://dom.spec.whatwg.org/#concept-tree-child) that is not child, or an [element](https://dom.spec.whatwg.org/#concept-element) is [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) child.

    The above statements differ from the [pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) algorithm.

7.  Let referenceChild be child’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
8.  If referenceChild is node, then set referenceChild to node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
9.  Let previousSibling be child’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).
10. Let removedNodes be the empty set.

11. If child’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is non-null, then:

12. Set removedNodes to « child ».
13. [Remove](https://dom.spec.whatwg.org/#concept-node-remove) child with the _suppress observers flag_ set.

    The above can only be false if child is node.

14. Let nodes be node’s [children](https://dom.spec.whatwg.org/#concept-tree-child) if node is a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node); otherwise « node ».

15. [Insert](https://dom.spec.whatwg.org/#concept-node-insert) node into parent before referenceChild with the _suppress observers flag_ set.

16. [Queue a tree mutation record](https://dom.spec.whatwg.org/#queue-a-tree-mutation-record) for parent with nodes, removedNodes, previousSibling, and referenceChild.

17. Return child.

To replace all with a node within a parent, run these steps:

1.  Let removedNodes be parent’s [children](https://dom.spec.whatwg.org/#concept-tree-child).
2.  Let addedNodes be the empty set.
3.  If node is a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node), then set addedNodes to node’s [children](https://dom.spec.whatwg.org/#concept-tree-child).
4.  Otherwise, if node is non-null, set addedNodes to « node ».
5.  [Remove](https://dom.spec.whatwg.org/#concept-node-remove) all parent’s [children](https://dom.spec.whatwg.org/#concept-tree-child), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), with the _suppress observers flag_ set.
6.  If node is non-null, then [insert](https://dom.spec.whatwg.org/#concept-node-insert) node into parent before null with the _suppress observers flag_ set.
7.  If either addedNodes or removedNodes [is not empty](https://infra.spec.whatwg.org/#list-is-empty), then [queue a tree mutation record](https://dom.spec.whatwg.org/#queue-a-tree-mutation-record) for parent with addedNodes, removedNodes, null, and null.

This algorithm does not make any checks with regards to the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) constraints. Specification authors need to use it wisely.

To pre-remove a child from a parent, run these steps:

1.  If child’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is not parent, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotFoundError](https://webidl.spec.whatwg.org/#notfounderror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  [Remove](https://dom.spec.whatwg.org/#concept-node-remove) child.
3.  Return child.

[Specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define removing steps for all or some [nodes](https://dom.spec.whatwg.org/#concept-node). The algorithm is passed removedNode, and optionally oldParent, as indicated in the [remove](https://dom.spec.whatwg.org/#concept-node-remove) algorithm below.

To remove a node, with an optional _suppress observers flag_, run these steps:

1.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent)
2.  Assert: parent is non-null.
3.  Let index be node’s [index](https://dom.spec.whatwg.org/#concept-tree-index).
4.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is an [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) of node, set its [start](https://dom.spec.whatwg.org/#concept-range-start) to (parent, index).
5.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is an [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) of node, set its [end](https://dom.spec.whatwg.org/#concept-range-end) to (parent, index).
6.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is parent and [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is greater than index, decrease its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) by 1.
7.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is parent and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is greater than index, decrease its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) by 1.
8.  For each `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` object iterator whose [root](https://dom.spec.whatwg.org/#concept-traversal-root)’s [node document](https://dom.spec.whatwg.org/#concept-node-document) is node’s [node document](https://dom.spec.whatwg.org/#concept-node-document), run the [`NodeIterator` pre-removing steps](https://dom.spec.whatwg.org/#nodeiterator-pre-removing-steps) given node and iterator.
9.  Let oldPreviousSibling be node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).
10. Let oldNextSibling be node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).

11. [Remove](https://infra.spec.whatwg.org/#list-remove) node from its parent’s [children](https://dom.spec.whatwg.org/#concept-tree-child).

12. If node is [assigned](https://dom.spec.whatwg.org/#slotable-assigned), then run [assign slottables](https://dom.spec.whatwg.org/#assign-slotables) for node’s [assigned slot](https://dom.spec.whatwg.org/#slotable-assigned-slot).

13. If parent’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), and parent is a [slot](https://dom.spec.whatwg.org/#concept-slot) whose [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes) is the empty list, then run [signal a slot change](https://dom.spec.whatwg.org/#signal-a-slot-change) for parent.

14. If node has an [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) that is a [slot](https://dom.spec.whatwg.org/#concept-slot), then:

15. Run [assign slottables for a tree](https://dom.spec.whatwg.org/#assign-slotables-for-a-tree) with parent’s [root](https://dom.spec.whatwg.org/#concept-tree-root).
16. Run [assign slottables for a tree](https://dom.spec.whatwg.org/#assign-slotables-for-a-tree) with node.
17. Run the [removing steps](https://dom.spec.whatwg.org/#concept-node-remove-ext) with node and parent.

18. Let isParentConnected be parent’s [connected](https://dom.spec.whatwg.org/#connected).

19. If node is [custom](https://dom.spec.whatwg.org/#concept-element-custom) and isParentConnected is true, then [enqueue a custom element callback reaction](https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction) with node, callback name "`disconnectedCallback`", and an empty argument list.

    It is intentional for now that [custom](https://dom.spec.whatwg.org/#concept-element-custom) [elements](https://dom.spec.whatwg.org/#concept-element) do not get parent passed. This might change in the future if there is a need.

20. For each [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) descendant of node, in [shadow-including tree order](https://dom.spec.whatwg.org/#concept-shadow-including-tree-order), then:

21. Run the [removing steps](https://dom.spec.whatwg.org/#concept-node-remove-ext) with descendant.
22. If descendant is [custom](https://dom.spec.whatwg.org/#concept-element-custom) and isParentConnected is true, then [enqueue a custom element callback reaction](https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction) with descendant, callback name "`disconnectedCallback`", and an empty argument list.
23. For each [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) inclusiveAncestor of parent, and then [for each](https://infra.spec.whatwg.org/#list-iterate) registered of inclusiveAncestor’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list), if registered’s [options](https://dom.spec.whatwg.org/#registered-observer-options)\["`[subtree](https://dom.spec.whatwg.org/#dom-mutationobserverinit-subtree)`"\] is true, then [append](https://infra.spec.whatwg.org/#list-append) a new [transient registered observer](https://dom.spec.whatwg.org/#transient-registered-observer) whose [observer](https://dom.spec.whatwg.org/#registered-observer-observer) is registered’s [observer](https://dom.spec.whatwg.org/#registered-observer-observer), [options](https://dom.spec.whatwg.org/#registered-observer-options) is registered’s [options](https://dom.spec.whatwg.org/#registered-observer-options), and [source](https://dom.spec.whatwg.org/#transient-registered-observer-source) is registered to node’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list).

24. If _suppress observers flag_ is unset, then [queue a tree mutation record](https://dom.spec.whatwg.org/#queue-a-tree-mutation-record) for parent with « », « node », oldPreviousSibling, and oldNextSibling.

25. Run the [children changed steps](https://dom.spec.whatwg.org/#concept-node-children-changed-ext) for parent.

#### 4.2.4. Mixin `[NonElementParentNode](https://dom.spec.whatwg.org/#nonelementparentnode)`[](https://dom.spec.whatwg.org/#interface-nonelementparentnode)

Web compatibility prevents the `[getElementById()](https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid)` method from being exposed on [elements](https://dom.spec.whatwg.org/#concept-element) (and therefore on `[ParentNode](https://dom.spec.whatwg.org/#parentnode)`).

interface mixin `NonElementParentNode` {
[Element](https://dom.spec.whatwg.org/#element)? [getElementById](https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `elementId`[](https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid-elementid-elementid));
};
[Document](https://dom.spec.whatwg.org/#document) includes [NonElementParentNode](https://dom.spec.whatwg.org/#nonelementparentnode);
[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment) includes [NonElementParentNode](https://dom.spec.whatwg.org/#nonelementparentnode);

[Document/getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById "The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5.5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`node . [getElementById](https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid)(elementId)`

Returns the first [element](https://dom.spec.whatwg.org/#concept-element) within node’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) whose [ID](https://dom.spec.whatwg.org/#concept-id) is elementId.

The `getElementById(elementId)` method steps are to return the first [element](https://dom.spec.whatwg.org/#concept-element), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), within [this](https://webidl.spec.whatwg.org/#this)’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant), whose [ID](https://dom.spec.whatwg.org/#concept-id) is elementId; otherwise, if there is no such [element](https://dom.spec.whatwg.org/#concept-element), null.

#### 4.2.5. Mixin `[DocumentOrShadowRoot](https://dom.spec.whatwg.org/#documentorshadowroot)`[](https://dom.spec.whatwg.org/#mixin-documentorshadowroot)

interface mixin `DocumentOrShadowRoot` {
};
[Document](https://dom.spec.whatwg.org/#document) includes [DocumentOrShadowRoot](https://dom.spec.whatwg.org/#documentorshadowroot);
[ShadowRoot](https://dom.spec.whatwg.org/#shadowroot) includes [DocumentOrShadowRoot](https://dom.spec.whatwg.org/#documentorshadowroot);

The `[DocumentOrShadowRoot](https://dom.spec.whatwg.org/#documentorshadowroot)` mixin is expected to be used by other standards that want to define APIs shared between [documents](https://dom.spec.whatwg.org/#concept-document) and [shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root).

#### 4.2.6. Mixin `[ParentNode](https://dom.spec.whatwg.org/#parentnode)`[](https://dom.spec.whatwg.org/#interface-parentnode)

To convert nodes into a node, given nodes and document, run these steps:

1.  Let node be null.
2.  Replace each string in nodes with a new `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is the string and [node document](https://dom.spec.whatwg.org/#concept-node-document) is document.
3.  If nodes contains one [node](https://dom.spec.whatwg.org/#concept-node), then set node to nodes\[0\].
4.  Otherwise, set node to a new `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [node document](https://dom.spec.whatwg.org/#concept-node-document) is document, and then [append](https://dom.spec.whatwg.org/#concept-node-append) each [node](https://dom.spec.whatwg.org/#concept-node) in nodes, if any, to it.
5.  Return node.

interface mixin `ParentNode` {
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection) [children](https://dom.spec.whatwg.org/#dom-parentnode-children);
readonly attribute [Element](https://dom.spec.whatwg.org/#element)? [firstElementChild](https://dom.spec.whatwg.org/#dom-parentnode-firstelementchild);
readonly attribute [Element](https://dom.spec.whatwg.org/#element)? [lastElementChild](https://dom.spec.whatwg.org/#dom-parentnode-lastelementchild);
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [childElementCount](https://dom.spec.whatwg.org/#dom-parentnode-childelementcount);

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [prepend](https://dom.spec.whatwg.org/#dom-parentnode-prepend)(([Node](https://dom.spec.whatwg.org/#node) or [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString))... `nodes`[](https://dom.spec.whatwg.org/#dom-parentnode-prepend-nodes-nodes));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [append](https://dom.spec.whatwg.org/#dom-parentnode-append)(([Node](https://dom.spec.whatwg.org/#node) or [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString))... `nodes`[](https://dom.spec.whatwg.org/#dom-parentnode-append-nodes-nodes));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [replaceChildren](https://dom.spec.whatwg.org/#dom-parentnode-replacechildren)(([Node](https://dom.spec.whatwg.org/#node) or [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString))... `nodes`[](https://dom.spec.whatwg.org/#dom-parentnode-replacechildren-nodes-nodes));

[Element](https://dom.spec.whatwg.org/#element)? [querySelector](https://dom.spec.whatwg.org/#dom-parentnode-queryselector)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `selectors`[](https://dom.spec.whatwg.org/#dom-parentnode-queryselector-selectors-selectors));
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [NodeList](https://dom.spec.whatwg.org/#nodelist) [querySelectorAll](https://dom.spec.whatwg.org/#dom-parentnode-queryselectorall)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `selectors`[](https://dom.spec.whatwg.org/#dom-parentnode-queryselectorall-selectors-selectors));
};
[Document](https://dom.spec.whatwg.org/#document) includes [ParentNode](https://dom.spec.whatwg.org/#parentnode);
[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment) includes [ParentNode](https://dom.spec.whatwg.org/#parentnode);
[Element](https://dom.spec.whatwg.org/#element) includes [ParentNode](https://dom.spec.whatwg.org/#parentnode);

[Document/children](https://developer.mozilla.org/en-US/docs/Web/API/Document/children 'The read-only children property returns a live HTMLCollection which contains all of the child elements of the document upon which it was called.')

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[DocumentFragment/children](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/children 'The read-only children property returns a live HTMLCollection which contains all of the child elements of the document fragment upon which it was called.')

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[Element/children](https://developer.mozilla.org/en-US/docs/Web/API/Element/children 'The read-only children property returns a live HTMLCollection which contains all of the child elements of the element upon which it was called.')

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

`` collection = node . `[children](https://dom.spec.whatwg.org/#dom-parentnode-children)`  ``

Returns the [child](https://dom.spec.whatwg.org/#concept-tree-child) [elements](https://dom.spec.whatwg.org/#concept-element).

[Document/firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Document/firstElementChild "The Document.firstElementChild read-only property returns the document's first child Element, or null if there are no child elements.")

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[DocumentFragment/firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/firstElementChild "The DocumentFragment.firstElementChild read-only property returns the document fragment's first child Element, or null if there are no child elements.")

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[Element/firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild "The Element.firstElementChild read-only property returns an element's first child Element, or null if there are no child elements.")

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

`` element = node . `[firstElementChild](https://dom.spec.whatwg.org/#dom-parentnode-firstelementchild)`  ``

Returns the first [child](https://dom.spec.whatwg.org/#concept-tree-child) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

[Document/lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Document/lastElementChild "The Document.lastElementChild read-only property returns the document's last child Element, or null if there are no child elements.")

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[DocumentFragment/lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/lastElementChild "The DocumentFragment.lastElementChild read-only property returns the document fragment's last child Element, or null if there are no child elements.")

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[Element/lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild "The Element.lastElementChild read-only property returns an element's last child Element, or null if there are no child elements.")

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

`` element = node . `[lastElementChild](https://dom.spec.whatwg.org/#dom-parentnode-lastelementchild)`  ``

Returns the last [child](https://dom.spec.whatwg.org/#concept-tree-child) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

[Document/prepend](https://developer.mozilla.org/en-US/docs/Web/API/Document/prepend 'The Document.prepend() method inserts a set of Node objects or DOMString objects before the first child of the document. DOMString objects are inserted as equivalent Text nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera41+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[DocumentFragment/prepend](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/prepend 'The DocumentFragment.prepend() method inserts a set of Node objects or DOMString objects before the first child of the document fragment. DOMString objects are inserted as equivalent Text nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera41+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[Element/prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend 'The Element.prepend() method inserts a set of Node objects or DOMString objects before the first child of the Element. DOMString objects are inserted as equivalent Text nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera41+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

`node . [prepend](https://dom.spec.whatwg.org/#dom-parentnode-prepend)(nodes)`

Inserts nodes before the [first child](https://dom.spec.whatwg.org/#concept-tree-first-child) of node, while replacing strings in nodes with equivalent `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node).

[Throws](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if the constraints of the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

[Document/append](https://developer.mozilla.org/en-US/docs/Web/API/Document/append 'The Document.append() method inserts a set of Node objects or DOMString objects after the last child of the document. DOMString objects are inserted as equivalent Text nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera41+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[DocumentFragment/append](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/append 'The DocumentFragment.append() method inserts a set of Node objects or DOMString objects after the last child of the document fragment. DOMString objects are inserted as equivalent Text nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera41+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[Element/append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append 'The Element.append() method inserts a set of Node objects or DOMString objects after the last child of the Element. DOMString objects are inserted as equivalent Text nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera41+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

`node . [append](https://dom.spec.whatwg.org/#dom-parentnode-append)(nodes)`

Inserts nodes after the [last child](https://dom.spec.whatwg.org/#concept-tree-last-child) of node, while replacing strings in nodes with equivalent `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node).

[Throws](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if the constraints of the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

[Document/replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Document/replaceChildren 'The Document.replaceChildren() method replaces the existing children of a Document with a specified new set of children.')

In all current engines.

Firefox78+Safari14+Chrome86+

---

Opera72+Edge86+

---

Edge (Legacy)NoneIENone

---

Firefox for Android79+iOS Safari14+Chrome for Android86+Android WebView86+Samsung Internet14.0+Opera Mobile61+

[DocumentFragment/replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/replaceChildren 'The DocumentFragment.replaceChildren() method replaces the existing children of a DocumentFragment with a specified new set of children. These can be DOMString or Node objects.')

In all current engines.

Firefox78+Safari14+Chrome86+

---

Opera72+Edge86+

---

Edge (Legacy)NoneIENone

---

Firefox for Android79+iOS Safari14+Chrome for Android86+Android WebView86+Samsung Internet14.0+Opera Mobile61+

[Element/replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren 'The Element.replaceChildren() method replaces the existing children of a Node with a specified new set of children. These can be DOMString or Node objects.')

In all current engines.

Firefox78+Safari14+Chrome86+

---

Opera72+Edge86+

---

Edge (Legacy)NoneIENone

---

Firefox for Android79+iOS Safari14+Chrome for Android86+Android WebView86+Samsung Internet14.0+Opera Mobile61+

`node . [replaceChildren](https://dom.spec.whatwg.org/#dom-parentnode-replacechildren)(nodes)`

Replace all [children](https://dom.spec.whatwg.org/#concept-tree-child) of node with nodes, while replacing strings in nodes with equivalent `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node).

[Throws](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if the constraints of the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

[Document/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector 'The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.')

In all current engines.

Firefox3.5+Safari3.1+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari2+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[DocumentFragment/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelector "The DocumentFragment.querySelector() method returns the first element, or null if no matches are found, within the DocumentFragment (using depth-first pre-order traversal of the document's nodes) that matches the specified group of selectors.")

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

`node . [querySelector](https://dom.spec.whatwg.org/#dom-parentnode-queryselector)(selectors)`

Returns the first [element](https://dom.spec.whatwg.org/#concept-element) that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of node that matches selectors.

[Document/querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll "The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.")

In all current engines.

Firefox3.5+Safari3.1+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari2+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[DocumentFragment/querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelectorAll "The DocumentFragment.querySelectorAll() method returns a NodeList of elements within the DocumentFragment (using depth-first pre-order traversal of the document's nodes) that matches the specified group of selectors.")

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

[Element/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector 'The querySelector() method of the Element interface returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.')

In all current engines.

Firefox3.5+Safari3.1+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari2+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[Element/querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll 'The Element method querySelectorAll() returns a static (not live) NodeList representing a list of elements matching the specified group of selectors which are descendants of the element on which the method was called.')

In all current engines.

Firefox3.5+Safari3.1+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari2+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`node . [querySelectorAll](https://dom.spec.whatwg.org/#dom-parentnode-queryselectorall)(selectors)`

Returns all [element](https://dom.spec.whatwg.org/#concept-element) [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) of node that match selectors.

The `children` getter steps are to return an `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` [collection](https://dom.spec.whatwg.org/#concept-collection) rooted at [this](https://webidl.spec.whatwg.org/#this) matching only [element](https://dom.spec.whatwg.org/#concept-element) [children](https://dom.spec.whatwg.org/#concept-tree-child).

The `firstElementChild` getter steps are to return the first [child](https://dom.spec.whatwg.org/#concept-tree-child) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

The `lastElementChild` getter steps are to return the last [child](https://dom.spec.whatwg.org/#concept-tree-child) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

[Document/childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/Document/childElementCount 'The Document.childElementCount read-only property returns the number of child elements of the document.')

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[DocumentFragment/childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/childElementCount 'The Document.childElementCount read-only property returns the number of child elements of a DocumentFragment.')

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[Element/childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount 'The Element.childElementCount read-only property returns the number of child elements of this element.')

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

The `childElementCount` getter steps are to return the number of [children](https://dom.spec.whatwg.org/#concept-tree-child) of [this](https://webidl.spec.whatwg.org/#this) that are [elements](https://dom.spec.whatwg.org/#concept-element).

The `prepend(nodes)` method steps are:

1.  Let node be the result of [converting nodes into a node](https://dom.spec.whatwg.org/#converting-nodes-into-a-node) given nodes and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  [Pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into [this](https://webidl.spec.whatwg.org/#this) before [this](https://webidl.spec.whatwg.org/#this)’s [first child](https://dom.spec.whatwg.org/#concept-tree-first-child).

The `append(nodes)` method steps are:

1.  Let node be the result of [converting nodes into a node](https://dom.spec.whatwg.org/#converting-nodes-into-a-node) given nodes and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  [Append](https://dom.spec.whatwg.org/#concept-node-append) node to [this](https://webidl.spec.whatwg.org/#this).

The `replaceChildren(nodes)` method steps are:

1.  Let node be the result of [converting nodes into a node](https://dom.spec.whatwg.org/#converting-nodes-into-a-node) given nodes and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  [Ensure pre-insertion validity](https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity) of node into [this](https://webidl.spec.whatwg.org/#this) before null.
3.  [Replace all](https://dom.spec.whatwg.org/#concept-node-replace-all) with node within [this](https://webidl.spec.whatwg.org/#this).

The `querySelector(selectors)` method steps are to return the first result of running [scope-match a selectors string](https://dom.spec.whatwg.org/#scope-match-a-selectors-string) selectors against [this](https://webidl.spec.whatwg.org/#this), if the result is not an empty list; otherwise null.

The `querySelectorAll(selectors)` method steps are to return the [static](https://dom.spec.whatwg.org/#concept-collection-static) result of running [scope-match a selectors string](https://dom.spec.whatwg.org/#scope-match-a-selectors-string) selectors against [this](https://webidl.spec.whatwg.org/#this).

#### 4.2.7. Mixin `[NonDocumentTypeChildNode](https://dom.spec.whatwg.org/#nondocumenttypechildnode)`[](https://dom.spec.whatwg.org/#interface-nondocumenttypechildnode)

Web compatibility prevents the `[previousElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-previouselementsibling)` and `[nextElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-nextelementsibling)` attributes from being exposed on [doctypes](https://dom.spec.whatwg.org/#concept-doctype) (and therefore on `[ChildNode](https://dom.spec.whatwg.org/#childnode)`).

interface mixin `NonDocumentTypeChildNode` {
readonly attribute [Element](https://dom.spec.whatwg.org/#element)? [previousElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-previouselementsibling);
readonly attribute [Element](https://dom.spec.whatwg.org/#element)? [nextElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-nextelementsibling);
};
[Element](https://dom.spec.whatwg.org/#element) includes [NonDocumentTypeChildNode](https://dom.spec.whatwg.org/#nondocumenttypechildnode);
[CharacterData](https://dom.spec.whatwg.org/#characterdata) includes [NonDocumentTypeChildNode](https://dom.spec.whatwg.org/#nondocumenttypechildnode);

[CharacterData/previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/previousElementSibling "The read-only previousElementSibling of the CharacterData interface returns the first Element before the current node in its parent's children list, or null if there is none.")

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[Element/previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling "The Element.previousElementSibling read-only property returns the Element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list.")

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

`` element = node . `[previousElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-previouselementsibling)`  ``

Returns the first [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

[CharacterData/nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/nextElementSibling "The read-only nextElementSibling property of the CharacterData interface returns the first Element node following the specified one in its parent's children list, or null if the specified element is the last one in the list.")

In all current engines.

Firefox25+Safari9+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android25+iOS Safari9+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

[Element/nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling "The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list.")

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

Opera10+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

`` element = node . `[nextElementSibling](https://dom.spec.whatwg.org/#dom-nondocumenttypechildnode-nextelementsibling)`  ``

Returns the first [following](https://dom.spec.whatwg.org/#concept-tree-following) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

The `previousElementSibling` getter steps are to return the first [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

The `nextElementSibling` getter steps are to return the first [following](https://dom.spec.whatwg.org/#concept-tree-following) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) that is an [element](https://dom.spec.whatwg.org/#concept-element); otherwise null.

#### 4.2.8. Mixin `[ChildNode](https://dom.spec.whatwg.org/#childnode)`[](https://dom.spec.whatwg.org/#interface-childnode)

interface mixin `ChildNode` {
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [before](https://dom.spec.whatwg.org/#dom-childnode-before)(([Node](https://dom.spec.whatwg.org/#node) or [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString))... `nodes`[](https://dom.spec.whatwg.org/#dom-childnode-before-nodes-nodes));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [after](https://dom.spec.whatwg.org/#dom-childnode-after)(([Node](https://dom.spec.whatwg.org/#node) or [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString))... `nodes`[](https://dom.spec.whatwg.org/#dom-childnode-after-nodes-nodes));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [replaceWith](https://dom.spec.whatwg.org/#dom-childnode-replacewith)(([Node](https://dom.spec.whatwg.org/#node) or [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString))... `nodes`[](https://dom.spec.whatwg.org/#dom-childnode-replacewith-nodes-nodes));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [remove](https://dom.spec.whatwg.org/#dom-childnode-remove)();
};
[DocumentType](https://dom.spec.whatwg.org/#documenttype) includes [ChildNode](https://dom.spec.whatwg.org/#childnode);
[Element](https://dom.spec.whatwg.org/#element) includes [ChildNode](https://dom.spec.whatwg.org/#childnode);
[CharacterData](https://dom.spec.whatwg.org/#characterdata) includes [ChildNode](https://dom.spec.whatwg.org/#childnode);

[CharacterData/before](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/before "The before() method of the CharacterData interface inserts a set of Node objects and strings in the children list of the CharacterData's parent, just before the CharacterData node.")

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[DocumentType/before](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/before "The DocumentType.before() method inserts a set of Node or DOMString objects in the children list of the DocumentType's parent, just before the DocumentType. DOMString objects are inserted as equivalent Text nodes.")

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[Element/before](https://developer.mozilla.org/en-US/docs/Web/API/Element/before "The Element.before() method inserts a set of Node or DOMString objects in the children list of this Element's parent, just before this Element. DOMString objects are inserted as equivalent Text nodes.")

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

`` node . `[before(...nodes)](https://dom.spec.whatwg.org/#dom-childnode-before)`  ``

Inserts nodes just before node, while replacing strings in nodes with equivalent `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node).

[Throws](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if the constraints of the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

[CharacterData/after](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/after "The after() method of the CharacterData interface inserts a set of Node objects or strings in the children list of the object's parent, just after the object itself.")

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[DocumentType/after](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/after "The DocumentType.after() method inserts a set of Node or DOMString objects in the children list of the DocumentType's parent, just after the DocumentType. DOMString objects are inserted as equivalent Text nodes.")

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[Element/after](https://developer.mozilla.org/en-US/docs/Web/API/Element/after "The Element.after() method inserts a set of Node or DOMString objects in the children list of the Element's parent, just after the Element. DOMString objects are inserted as equivalent Text nodes.")

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

`` node . `[after(...nodes)](https://dom.spec.whatwg.org/#dom-childnode-after)`  ``

Inserts nodes just after node, while replacing strings in nodes with equivalent `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node).

[Throws](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if the constraints of the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

[CharacterData/replaceWith](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/replaceWith 'The replaceWith() method of the CharacterData interface replaces this node in the children list of its parent with a set of Node objects or string.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[DocumentType/replaceWith](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/replaceWith 'The DocumentType.replaceWith() method replaces the document type with a set of given nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

[Element/replaceWith](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith 'The Element.replaceWith() method replaces this Element in the children list of its parent with a set of Node or DOMString objects. DOMString objects are inserted as equivalent Text nodes.')

In all current engines.

Firefox49+Safari10+Chrome54+

---

Opera39+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

`` node . `[replaceWith(...nodes)](https://dom.spec.whatwg.org/#dom-childnode-replacewith)`  ``

Replaces node with nodes, while replacing strings in nodes with equivalent `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node).

[Throws](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if the constraints of the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

[CharacterData/remove](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/remove 'The remove() method of the CharacterData removes the text contained in the node.')

In all current engines.

Firefox23+Safari7+Chrome24+

---

Opera15+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android23+iOS Safari7+Chrome for Android25+Android WebView37+Samsung Internet1.5+Opera Mobile14+

[DocumentType/remove](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/remove "The DocumentType.remove() method removes a document's doctype.")

In all current engines.

Firefox23+Safari7+Chrome24+

---

Opera15+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android23+iOS Safari7+Chrome for Android25+Android WebView37+Samsung Internet1.5+Opera Mobile14+

[Element/remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove 'The Element.remove() method removes the element from the tree it belongs to.')

In all current engines.

Firefox23+Safari7+Chrome24+

---

Opera15+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android23+iOS Safari7+Chrome for Android25+Android WebView37+Samsung Internet1.5+Opera Mobile14+

`` node . `[remove()](https://dom.spec.whatwg.org/#dom-childnode-remove)`  ``

Removes node.

The `before(nodes)` method steps are:

1.  Let parent be [this](https://webidl.spec.whatwg.org/#this)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then return.
3.  Let viablePreviousSibling be [this](https://webidl.spec.whatwg.org/#this)’s first [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) not in nodes; otherwise null.
4.  Let node be the result of [converting nodes into a node](https://dom.spec.whatwg.org/#converting-nodes-into-a-node), given nodes and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
5.  If viablePreviousSibling is null, then set it to parent’s [first child](https://dom.spec.whatwg.org/#concept-tree-first-child); otherwise to viablePreviousSibling’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
6.  [Pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into parent before viablePreviousSibling.

The `after(nodes)` method steps are:

1.  Let parent be [this](https://webidl.spec.whatwg.org/#this)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then return.
3.  Let viableNextSibling be [this](https://webidl.spec.whatwg.org/#this)’s first [following](https://dom.spec.whatwg.org/#concept-tree-following) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) not in nodes; otherwise null.
4.  Let node be the result of [converting nodes into a node](https://dom.spec.whatwg.org/#converting-nodes-into-a-node), given nodes and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
5.  [Pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into parent before viableNextSibling.

The `replaceWith(nodes)` method steps are:

1.  Let parent be [this](https://webidl.spec.whatwg.org/#this)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then return.
3.  Let viableNextSibling be [this](https://webidl.spec.whatwg.org/#this)’s first [following](https://dom.spec.whatwg.org/#concept-tree-following) [sibling](https://dom.spec.whatwg.org/#concept-tree-sibling) not in nodes; otherwise null.
4.  Let node be the result of [converting nodes into a node](https://dom.spec.whatwg.org/#converting-nodes-into-a-node), given nodes and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
5.  If [this](https://webidl.spec.whatwg.org/#this)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is parent, [replace](https://dom.spec.whatwg.org/#concept-node-replace) [this](https://webidl.spec.whatwg.org/#this) with node within parent.

    [This](https://webidl.spec.whatwg.org/#this) could have been inserted into node.

6.  Otherwise, [pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into parent before viableNextSibling.

The `remove()` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, then return.
2.  [Remove](https://dom.spec.whatwg.org/#concept-node-remove) [this](https://webidl.spec.whatwg.org/#this).

#### 4.2.9. Mixin `[Slottable](https://dom.spec.whatwg.org/#slotable)`[](https://dom.spec.whatwg.org/#mixin-slotable)

interface mixin `Slottable` {
readonly attribute [HTMLSlotElement](https://html.spec.whatwg.org/multipage/scripting.html#htmlslotelement)? [assignedSlot](https://dom.spec.whatwg.org/#dom-slotable-assignedslot);
};
[Element](https://dom.spec.whatwg.org/#element) includes [Slottable](https://dom.spec.whatwg.org/#slotable);
[Text](https://dom.spec.whatwg.org/#text) includes [Slottable](https://dom.spec.whatwg.org/#slotable);

[Element/assignedSlot](https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot 'The assignedSlot read-only property of the Element interface returns an HTMLSlotElement representing the <slot> element the node is inserted in.')

In all current engines.

Firefox63+Safari10.1+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10.3+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

[Text/assignedSlot](https://developer.mozilla.org/en-US/docs/Web/API/Text/assignedSlot 'The read-only assignedSlot property of the Text interface returns the HTMLSlotElement object associated with the element.')

In all current engines.

Firefox63+Safari10.1+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for Android63+iOS Safari10.3+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

The `assignedSlot` getter steps are to return the result of [find a slot](https://dom.spec.whatwg.org/#find-a-slot) given [this](https://webidl.spec.whatwg.org/#this) and with the _open flag_ set.

#### 4.2.10. Old-style collections: `[NodeList](https://dom.spec.whatwg.org/#nodelist)` and `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)`[](https://dom.spec.whatwg.org/#old-style-collections)

A collection is an object that represents a list of [nodes](https://dom.spec.whatwg.org/#concept-node). A [collection](https://dom.spec.whatwg.org/#concept-collection) can be either live or static. Unless otherwise stated, a [collection](https://dom.spec.whatwg.org/#concept-collection) must be [live](https://dom.spec.whatwg.org/#concept-collection-live).

If a [collection](https://dom.spec.whatwg.org/#concept-collection) is [live](https://dom.spec.whatwg.org/#concept-collection-live), then the attributes and methods on that object must operate on the actual underlying data, not a snapshot of the data.

When a [collection](https://dom.spec.whatwg.org/#concept-collection) is created, a filter and a root are associated with it.

The [collection](https://dom.spec.whatwg.org/#concept-collection) then represents a view of the subtree rooted at the [collection’s](https://dom.spec.whatwg.org/#concept-collection) root, containing only nodes that match the given filter. The view is linear. In the absence of specific requirements to the contrary, the nodes within the [collection](https://dom.spec.whatwg.org/#concept-collection) must be sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

##### 4.2.10.1. Interface `[NodeList](https://dom.spec.whatwg.org/#nodelist)`[](https://dom.spec.whatwg.org/#interface-nodelist)

[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList 'NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

A `[NodeList](https://dom.spec.whatwg.org/#nodelist)` object is a [collection](https://dom.spec.whatwg.org/#concept-collection) of [nodes](https://dom.spec.whatwg.org/#concept-node).

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `NodeList` {
getter [Node](https://dom.spec.whatwg.org/#node)? [item](https://dom.spec.whatwg.org/#dom-nodelist-item)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `index`[](https://dom.spec.whatwg.org/#dom-nodelist-item-index-index));
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [length](https://dom.spec.whatwg.org/#dom-nodelist-length);
iterable<[Node](https://dom.spec.whatwg.org/#node)\>;
};

[NodeList/length](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length 'The NodeList.length property returns the number of items in a NodeList.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

collection . `[length](https://dom.spec.whatwg.org/#dom-nodelist-length)`

Returns the number of [nodes](https://dom.spec.whatwg.org/#concept-node) in the [collection](https://dom.spec.whatwg.org/#concept-collection).

[NodeList/item](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/item "Returns a node from a NodeList by index. This method doesn't throw exceptions as long as you provide arguments. A value of null is returned if the index is out of range, and a TypeError is thrown if no argument is provided.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

element = collection . `[item(index)](https://dom.spec.whatwg.org/#dom-nodelist-item)`

element = collection\[index\]

Returns the [node](https://dom.spec.whatwg.org/#concept-node) with index index from the [collection](https://dom.spec.whatwg.org/#concept-collection). The [nodes](https://dom.spec.whatwg.org/#concept-node) are sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

##### 4.2.10.2. Interface `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)`[](https://dom.spec.whatwg.org/#interface-htmlcollection)

[HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection 'The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE8+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window, [LegacyUnenumerableNamedProperties](https://webidl.spec.whatwg.org/#LegacyUnenumerableNamedProperties)\]
interface `HTMLCollection` {
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [length](https://dom.spec.whatwg.org/#dom-htmlcollection-length);
getter [Element](https://dom.spec.whatwg.org/#element)? [item](https://dom.spec.whatwg.org/#dom-htmlcollection-item)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `index`[](https://dom.spec.whatwg.org/#dom-htmlcollection-item-index-index));
getter [Element](https://dom.spec.whatwg.org/#element)? `namedItem`([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `name`[](https://dom.spec.whatwg.org/#dom-htmlcollection-nameditem-name-name));
};

An `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` object is a [collection](https://dom.spec.whatwg.org/#concept-collection) of [elements](https://dom.spec.whatwg.org/#concept-element).

`[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` is a historical artifact we cannot rid the web of. While developers are of course welcome to keep using it, new API standard designers ought not to use it (use `sequence<T>` in IDL instead).

[HTMLCollection/length](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/length 'The HTMLCollection.length property returns the number of items in a HTMLCollection.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE8+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

collection . `[length](https://dom.spec.whatwg.org/#dom-htmlcollection-length)`

Returns the number of [elements](https://dom.spec.whatwg.org/#concept-element) in the [collection](https://dom.spec.whatwg.org/#concept-collection).

[HTMLCollection/item](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/item 'The HTMLCollection method item() returns the node located at the specified offset into the collection.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE8+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

element = collection . `[item(index)](https://dom.spec.whatwg.org/#dom-htmlcollection-item)`

element = collection\[index\]

Returns the [element](https://dom.spec.whatwg.org/#concept-element) with index index from the [collection](https://dom.spec.whatwg.org/#concept-collection). The [elements](https://dom.spec.whatwg.org/#concept-element) are sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

element = collection . `[namedItem(name)](https://dom.spec.whatwg.org/#dom-htmlcollection-nameditem)`

element = collection\[name\]

Returns the first [element](https://dom.spec.whatwg.org/#concept-element) with [ID](https://dom.spec.whatwg.org/#concept-id) or name name from the collection.

The object’s [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices) are the numbers in the range zero to one less than the number of elements [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection). If there are no such elements, then there are no [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices).

The `length` getter steps are to return the number of nodes [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection).

The `item(index)` method steps are to return the indexth [element](https://dom.spec.whatwg.org/#concept-element) in the [collection](https://dom.spec.whatwg.org/#concept-collection). If there is no indexth [element](https://dom.spec.whatwg.org/#concept-element) in the [collection](https://dom.spec.whatwg.org/#concept-collection), then the method must return null.

The [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names) are the values from the list returned by these steps:

1.  Let result be an empty list.
2.  For each element [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order):

    1.  If element has an [ID](https://dom.spec.whatwg.org/#concept-id) which is not in result, append element’s [ID](https://dom.spec.whatwg.org/#concept-id) to result.
    2.  If element is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and [has](https://dom.spec.whatwg.org/#concept-element-attribute-has) a [`name` attribute](https://dom.spec.whatwg.org/#concept-named-attribute) whose [value](https://dom.spec.whatwg.org/#concept-attribute-value) is neither the empty string nor is in result, append element’s [`name` attribute](https://dom.spec.whatwg.org/#concept-named-attribute) [value](https://dom.spec.whatwg.org/#concept-attribute-value) to result.

3.  Return result.

[HTMLCollection/namedItem](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/namedItem 'The namedItem() method of the HTMLCollection interface returns the first Element in the collection whose id or name attribute match the specified name, or null if no element matches.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE8+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `namedItem(key)`[](https://dom.spec.whatwg.org/#dom-htmlcollection-nameditem-key) method steps are:

1.  If key is the empty string, return null.
2.  Return the first [element](https://dom.spec.whatwg.org/#concept-element) in the [collection](https://dom.spec.whatwg.org/#concept-collection) for which at least one of the following is true:

    -   it has an [ID](https://dom.spec.whatwg.org/#concept-id) which is key;
    -   it is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and [has](https://dom.spec.whatwg.org/#concept-element-attribute-has) a [`name` attribute](https://dom.spec.whatwg.org/#concept-named-attribute) whose [value](https://dom.spec.whatwg.org/#concept-attribute-value) is key;

    or null if there is no such [element](https://dom.spec.whatwg.org/#concept-element).

### 4.3. Mutation observers[](https://dom.spec.whatwg.org/#mutation-observers)

Each [similar-origin window agent](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent) has a mutation observer microtask queued (a boolean), which is initially false. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

Each [similar-origin window agent](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent) also has mutation observers (a [set](https://infra.spec.whatwg.org/#ordered-set) of zero or more `[MutationObserver](https://dom.spec.whatwg.org/#mutationobserver)` objects), which is initially empty.

To queue a mutation observer microtask, run these steps:

1.  If the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)’s [mutation observer microtask queued](https://dom.spec.whatwg.org/#mutation-observer-compound-microtask-queued-flag) is true, then return.
2.  Set the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)’s [mutation observer microtask queued](https://dom.spec.whatwg.org/#mutation-observer-compound-microtask-queued-flag) to true.
3.  [Queue](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-microtask) a [microtask](https://html.spec.whatwg.org/multipage/webappapis.html#microtask) to [notify mutation observers](https://dom.spec.whatwg.org/#notify-mutation-observers).

To notify mutation observers, run these steps:

1.  Set the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)’s [mutation observer microtask queued](https://dom.spec.whatwg.org/#mutation-observer-compound-microtask-queued-flag) to false.
2.  Let notifySet be a [clone](https://infra.spec.whatwg.org/#list-clone) of the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)’s [mutation observers](https://dom.spec.whatwg.org/#mutation-observer-list).
3.  Let signalSet be a [clone](https://infra.spec.whatwg.org/#list-clone) of the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)’s [signal slots](https://dom.spec.whatwg.org/#signal-slot-list).
4.  [Empty](https://infra.spec.whatwg.org/#list-empty) the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)’s [signal slots](https://dom.spec.whatwg.org/#signal-slot-list).
5.  [For each](https://infra.spec.whatwg.org/#list-iterate) mo of notifySet:

    1.  Let records be a [clone](https://infra.spec.whatwg.org/#list-clone) of mo’s [record queue](https://dom.spec.whatwg.org/#concept-mo-queue).
    2.  [Empty](https://infra.spec.whatwg.org/#list-empty) mo’s [record queue](https://dom.spec.whatwg.org/#concept-mo-queue).
    3.  [For each](https://infra.spec.whatwg.org/#list-iterate) node of mo’s [node list](https://dom.spec.whatwg.org/#mutationobserver-node-list), [remove](https://infra.spec.whatwg.org/#list-remove) all [transient registered observers](https://dom.spec.whatwg.org/#transient-registered-observer) whose [observer](https://dom.spec.whatwg.org/#registered-observer-observer) is mo from node’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list).
    4.  If records [is not empty](https://infra.spec.whatwg.org/#list-is-empty), then [invoke](https://webidl.spec.whatwg.org/#invoke-a-callback-function) mo’s [callback](https://dom.spec.whatwg.org/#concept-mo-callback) with « records, mo », and mo. If this throws an exception, catch it, and [report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception).

6.  [For each](https://infra.spec.whatwg.org/#list-iterate) slot of signalSet, [fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `[slotchange](https://html.spec.whatwg.org/multipage/indices.html#event-slotchange)`, with its `[bubbles](https://dom.spec.whatwg.org/#dom-event-bubbles)` attribute set to true, at slot.

---

Each [node](https://dom.spec.whatwg.org/#concept-node) has a registered observer list (a [list](https://infra.spec.whatwg.org/#list) of zero or more [registered observers](https://dom.spec.whatwg.org/#registered-observer)), which is initially empty.

A registered observer consists of an observer (a `[MutationObserver](https://dom.spec.whatwg.org/#mutationobserver)` object) and options (a `[MutationObserverInit](https://dom.spec.whatwg.org/#dictdef-mutationobserverinit)` dictionary).

A transient registered observer is a [registered observer](https://dom.spec.whatwg.org/#registered-observer) that also consists of a source (a [registered observer](https://dom.spec.whatwg.org/#registered-observer)).

[Transient registered observers](https://dom.spec.whatwg.org/#transient-registered-observer) are used to track mutations within a given [node](https://dom.spec.whatwg.org/#concept-node)’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) after [node](https://dom.spec.whatwg.org/#concept-node) has been removed so they do not get lost when `[subtree](https://dom.spec.whatwg.org/#dom-mutationobserverinit-subtree)` is set to true on [node](https://dom.spec.whatwg.org/#concept-node)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).

#### 4.3.1. Interface `[MutationObserver](https://dom.spec.whatwg.org/#mutationobserver)`[](https://dom.spec.whatwg.org/#interface-mutationobserver)

[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver 'The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 Events specification.')

In all current engines.

Firefox14+Safari7+Chrome26+

---

Opera15+Edge79+

---

Edge (Legacy)12+IE11

---

Firefox for Android14+iOS Safari7+Chrome for Android26+Android WebView37+Samsung Internet1.5+Opera Mobile14+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `MutationObserver` {
[constructor](https://dom.spec.whatwg.org/#dom-mutationobserver-mutationobserver)([MutationCallback](https://dom.spec.whatwg.org/#callbackdef-mutationcallback) `callback`[](https://dom.spec.whatwg.org/#dom-mutationobserver-mutationobserver-callback-callback));

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [observe](https://dom.spec.whatwg.org/#dom-mutationobserver-observe)([Node](https://dom.spec.whatwg.org/#node) `target`[](https://dom.spec.whatwg.org/#dom-mutationobserver-observe-target-options-target), optional [MutationObserverInit](https://dom.spec.whatwg.org/#dictdef-mutationobserverinit) `options`[](https://dom.spec.whatwg.org/#dom-mutationobserver-observe-target-options-options) = {});
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [disconnect](https://dom.spec.whatwg.org/#dom-mutationobserver-disconnect)();
[sequence](https://webidl.spec.whatwg.org/#idl-sequence)<[MutationRecord](https://dom.spec.whatwg.org/#mutationrecord)\> [takeRecords](https://dom.spec.whatwg.org/#dom-mutationobserver-takerecords)();
};

callback `MutationCallback` = [undefined](https://webidl.spec.whatwg.org/#idl-undefined) ([sequence](https://webidl.spec.whatwg.org/#idl-sequence)<[MutationRecord](https://dom.spec.whatwg.org/#mutationrecord)\> `mutations`[](https://dom.spec.whatwg.org/#dom-mutationcallback-mutations), [MutationObserver](https://dom.spec.whatwg.org/#mutationobserver) `observer`[](https://dom.spec.whatwg.org/#dom-mutationcallback-observer));

dictionary `MutationObserverInit` {
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `childList` = false;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `attributes`;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `characterData`;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `subtree` = false;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `attributeOldValue`;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `characterDataOldValue`;
[sequence](https://webidl.spec.whatwg.org/#idl-sequence)<[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)\> `attributeFilter`;
};

A `[MutationObserver](https://dom.spec.whatwg.org/#mutationobserver)` object can be used to observe mutations to the [tree](https://dom.spec.whatwg.org/#concept-tree) of [nodes](https://dom.spec.whatwg.org/#concept-node).

Each `[MutationObserver](https://dom.spec.whatwg.org/#mutationobserver)` object has these associated concepts:

-   A callback set on creation.
-   A node list (a [list](https://infra.spec.whatwg.org/#list) of [nodes](https://dom.spec.whatwg.org/#concept-node)), which is initially empty.
-   A record queue (a [queue](https://infra.spec.whatwg.org/#queue) of zero or more `[MutationRecord](https://dom.spec.whatwg.org/#mutationrecord)` objects), which is initially empty.

[MutationObserver/MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver 'The DOM MutationObserver() constructor — part of the MutationObserver interface — creates and returns a new observer which invokes a specified callback when DOM events occur.')

In all current engines.

Firefox14+Safari7+Chrome26+

---

Opera15+Edge79+

---

Edge (Legacy)12+IE11

---

Firefox for Android14+iOS Safari7+Chrome for Android26+Android WebView37+Samsung Internet1.5+Opera Mobile14+

`` observer = new `[MutationObserver(callback)](https://dom.spec.whatwg.org/#dom-mutationobserver-mutationobserver)`  ``

Constructs a `[MutationObserver](https://dom.spec.whatwg.org/#mutationobserver)` object and sets its [callback](https://dom.spec.whatwg.org/#concept-mo-callback) to callback. The callback is invoked with a list of `[MutationRecord](https://dom.spec.whatwg.org/#mutationrecord)` objects as first argument and the constructed `[MutationObserver](https://dom.spec.whatwg.org/#mutationobserver)` object as second argument. It is invoked after [nodes](https://dom.spec.whatwg.org/#concept-node) registered with the `[observe()](https://dom.spec.whatwg.org/#dom-mutationobserver-observe)` method, are mutated.

[MutationObserver/observe](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe 'The MutationObserver method observe() configures the MutationObserver callback to begin receiving notifications of changes to the DOM that match the given options.')

In all current engines.

Firefox14+Safari6+Chrome18+

---

Opera15+Edge79+

---

Edge (Legacy)12+IE11

---

Firefox for Android14+iOS Safari6+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile14+

`` observer . `[observe(target, options)](https://dom.spec.whatwg.org/#dom-mutationobserver-observe)`  ``

Instructs the user agent to observe a given target (a [node](https://dom.spec.whatwg.org/#concept-node)) and report any mutations based on the criteria given by options (an object).

The options argument allows for setting mutation observation options via object members. These are the object members that can be used:

`[childList](https://dom.spec.whatwg.org/#dom-mutationobserverinit-childlist)`

Set to true if mutations to target’s [children](https://dom.spec.whatwg.org/#concept-tree-child) are to be observed.

`[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)`

Set to true if mutations to target’s [attributes](https://dom.spec.whatwg.org/#concept-attribute) are to be observed. Can be omitted if `[attributeOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributeoldvalue)` or `[attributeFilter](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributefilter)` is specified.

`[characterData](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdata)`

Set to true if mutations to target’s [data](https://dom.spec.whatwg.org/#concept-cd-data) are to be observed. Can be omitted if `[characterDataOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdataoldvalue)` is specified.

`[subtree](https://dom.spec.whatwg.org/#dom-mutationobserverinit-subtree)`

Set to true if mutations to not just target, but also target’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) are to be observed.

`[attributeOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributeoldvalue)`

Set to true if `[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)` is true or omitted and target’s [attribute](https://dom.spec.whatwg.org/#concept-attribute) [value](https://dom.spec.whatwg.org/#concept-attribute-value) before the mutation needs to be recorded.

`[characterDataOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdataoldvalue)`

Set to true if `[characterData](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdata)` is set to true or omitted and target’s [data](https://dom.spec.whatwg.org/#concept-cd-data) before the mutation needs to be recorded.

`[attributeFilter](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributefilter)`

Set to a list of [attribute](https://dom.spec.whatwg.org/#concept-attribute) [local names](https://dom.spec.whatwg.org/#concept-attribute-local-name) (without [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace)) if not all [attribute](https://dom.spec.whatwg.org/#concept-attribute) mutations need to be observed and `[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)` is true or omitted.

[MutationObserver/disconnect](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect 'The MutationObserver method disconnect() tells the observer to stop watching for mutations.')

In all current engines.

Firefox14+Safari6+Chrome18+

---

Opera15+Edge79+

---

Edge (Legacy)12+IE11

---

Firefox for Android14+iOS Safari6+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile14+

`` observer . `[disconnect()](https://dom.spec.whatwg.org/#dom-mutationobserver-disconnect)`  ``

Stops observer from observing any mutations. Until the `[observe()](https://dom.spec.whatwg.org/#dom-mutationobserver-observe)` method is used again, observer’s [callback](https://dom.spec.whatwg.org/#concept-mo-callback) will not be invoked.

[MutationObserver/takeRecords](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/takeRecords "The MutationObserver method takeRecords() returns a list of all matching DOM changes that have been detected but not yet processed by the observer's callback function, leaving the mutation queue empty.")

In all current engines.

Firefox14+Safari6+Chrome18+

---

Opera15+Edge79+

---

Edge (Legacy)12+IE11

---

Firefox for Android14+iOS Safari6+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile14+

`` observer . `[takeRecords()](https://dom.spec.whatwg.org/#dom-mutationobserver-takerecords)`  ``

Empties the [record queue](https://dom.spec.whatwg.org/#concept-mo-queue) and returns what was in there.

The `new MutationObserver(callback)` constructor steps are:

1.  Set [this](https://webidl.spec.whatwg.org/#this)’s [callback](https://dom.spec.whatwg.org/#concept-mo-callback) to callback.
2.  [Append](https://infra.spec.whatwg.org/#set-append) [this](https://webidl.spec.whatwg.org/#this) to [this](https://webidl.spec.whatwg.org/#this)’s [relevant agent](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-agent)’s [mutation observers](https://dom.spec.whatwg.org/#mutation-observer-list).

The `observe(target, options)` method steps are:

1.  If either options\["`[attributeOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributeoldvalue)`"\] or options\["`[attributeFilter](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributefilter)`"\] [exists](https://infra.spec.whatwg.org/#map-exists), and options\["`[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)`"\] does not [exist](https://infra.spec.whatwg.org/#map-exists), then set options\["`[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)`"\] to true.
2.  If options\["`[characterDataOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdataoldvalue)`"\] [exists](https://infra.spec.whatwg.org/#map-exists) and options\["`[characterData](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdata)`"\] does not [exist](https://infra.spec.whatwg.org/#map-exists), then set options\["`[characterData](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdata)`"\] to true.
3.  If none of options\["`[childList](https://dom.spec.whatwg.org/#dom-mutationobserverinit-childlist)`"\], options\["`[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)`"\], and options\["`[characterData](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdata)`"\] is true, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a `TypeError`.
4.  If options\["`[attributeOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributeoldvalue)`"\] is true and options\["`[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)`"\] is false, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a `TypeError`.
5.  If options\["`[attributeFilter](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributefilter)`"\] is present and options\["`[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)`"\] is false, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a `TypeError`.
6.  If options\["`[characterDataOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdataoldvalue)`"\] is true and options\["`[characterData](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdata)`"\] is false, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a `TypeError`.
7.  [For each](https://infra.spec.whatwg.org/#list-iterate) registered of target’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list), if registered’s [observer](https://dom.spec.whatwg.org/#registered-observer-observer) is [this](https://webidl.spec.whatwg.org/#this):

    1.  [For each](https://infra.spec.whatwg.org/#list-iterate) node of [this](https://webidl.spec.whatwg.org/#this)’s [node list](https://dom.spec.whatwg.org/#mutationobserver-node-list), [remove](https://infra.spec.whatwg.org/#list-remove) all [transient registered observers](https://dom.spec.whatwg.org/#transient-registered-observer) whose [source](https://dom.spec.whatwg.org/#transient-registered-observer-source) is registered from node’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list).
    2.  Set registered’s [options](https://dom.spec.whatwg.org/#registered-observer-options) to options.

8.  Otherwise:

    1.  [Append](https://infra.spec.whatwg.org/#list-append) a new [registered observer](https://dom.spec.whatwg.org/#registered-observer) whose [observer](https://dom.spec.whatwg.org/#registered-observer-observer) is [this](https://webidl.spec.whatwg.org/#this) and [options](https://dom.spec.whatwg.org/#registered-observer-options) is options to target’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list).
    2.  [Append](https://infra.spec.whatwg.org/#list-append) target to [this](https://webidl.spec.whatwg.org/#this)’s [node list](https://dom.spec.whatwg.org/#mutationobserver-node-list).

The `disconnect()` method steps are:

1.  [For each](https://infra.spec.whatwg.org/#list-iterate) node of [this](https://webidl.spec.whatwg.org/#this)’s [node list](https://dom.spec.whatwg.org/#mutationobserver-node-list), [remove](https://infra.spec.whatwg.org/#list-remove) any [registered observer](https://dom.spec.whatwg.org/#registered-observer) from node’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list) for which [this](https://webidl.spec.whatwg.org/#this) is the [observer](https://dom.spec.whatwg.org/#registered-observer-observer).
2.  [Empty](https://infra.spec.whatwg.org/#list-empty) [this](https://webidl.spec.whatwg.org/#this)’s [record queue](https://dom.spec.whatwg.org/#concept-mo-queue).

The `takeRecords()` method steps are:

1.  Let records be a [clone](https://infra.spec.whatwg.org/#list-clone) of [this](https://webidl.spec.whatwg.org/#this)’s [record queue](https://dom.spec.whatwg.org/#concept-mo-queue).
2.  [Empty](https://infra.spec.whatwg.org/#list-empty) [this](https://webidl.spec.whatwg.org/#this)’s [record queue](https://dom.spec.whatwg.org/#concept-mo-queue).
3.  Return records.

#### 4.3.2. Queuing a mutation record[](https://dom.spec.whatwg.org/#queueing-a-mutation-record)

To queue a mutation record of type for target with name, namespace, oldValue, addedNodes, removedNodes, previousSibling, and nextSibling, run these steps:

1.  Let interestedObservers be an empty [map](https://infra.spec.whatwg.org/#ordered-map).
2.  Let nodes be the [inclusive ancestors](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of target.
3.  For each node in nodes, and then [for each](https://infra.spec.whatwg.org/#list-iterate) registered of node’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list):

    1.  Let options be registered’s [options](https://dom.spec.whatwg.org/#registered-observer-options).
    2.  If none of the following are true

        -   node is not target and options\["`[subtree](https://dom.spec.whatwg.org/#dom-mutationobserverinit-subtree)`"\] is false
        -   type is "`attributes`" and options\["`[attributes](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributes)`"\] either does not [exist](https://infra.spec.whatwg.org/#map-exists) or is false
        -   type is "`attributes`", options\["`[attributeFilter](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributefilter)`"\] [exists](https://infra.spec.whatwg.org/#map-exists), and options\["`[attributeFilter](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributefilter)`"\] does not [contain](https://infra.spec.whatwg.org/#list-contain) name or namespace is non-null
        -   type is "`characterData`" and options\["`[characterData](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdata)`"\] either does not [exist](https://infra.spec.whatwg.org/#map-exists) or is false
        -   type is "`childList`" and options\["`[childList](https://dom.spec.whatwg.org/#dom-mutationobserverinit-childlist)`"\] is false

        then:

        1.  Let mo be registered’s [observer](https://dom.spec.whatwg.org/#registered-observer-observer).
        2.  If interestedObservers\[mo\] does not [exist](https://infra.spec.whatwg.org/#map-exists), then [set](https://infra.spec.whatwg.org/#map-set) interestedObservers\[mo\] to null.
        3.  If either type is "`attributes`" and options\["`[attributeOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-attributeoldvalue)`"\] is true, or type is "`characterData`" and options\["`[characterDataOldValue](https://dom.spec.whatwg.org/#dom-mutationobserverinit-characterdataoldvalue)`"\] is true, then [set](https://infra.spec.whatwg.org/#map-set) interestedObservers\[mo\] to oldValue.

4.  [For each](https://infra.spec.whatwg.org/#map-iterate) observer → mappedOldValue of interestedObservers:

    1.  Let record be a new `[MutationRecord](https://dom.spec.whatwg.org/#mutationrecord)` object with its `[type](https://dom.spec.whatwg.org/#dom-mutationrecord-type)` set to type, `[target](https://dom.spec.whatwg.org/#dom-mutationrecord-target)` set to target, `[attributeName](https://dom.spec.whatwg.org/#dom-mutationrecord-attributename)` set to name, `[attributeNamespace](https://dom.spec.whatwg.org/#dom-mutationrecord-attributenamespace)` set to namespace, `[oldValue](https://dom.spec.whatwg.org/#dom-mutationrecord-oldvalue)` set to mappedOldValue, `[addedNodes](https://dom.spec.whatwg.org/#dom-mutationrecord-addednodes)` set to addedNodes, `[removedNodes](https://dom.spec.whatwg.org/#dom-mutationrecord-removednodes)` set to removedNodes, `[previousSibling](https://dom.spec.whatwg.org/#dom-mutationrecord-previoussibling)` set to previousSibling, and `[nextSibling](https://dom.spec.whatwg.org/#dom-mutationrecord-nextsibling)` set to nextSibling.
    2.  [Enqueue](https://infra.spec.whatwg.org/#queue-enqueue) record to observer’s [record queue](https://dom.spec.whatwg.org/#concept-mo-queue).

5.  [Queue a mutation observer microtask](https://dom.spec.whatwg.org/#queue-a-mutation-observer-compound-microtask).

To queue a tree mutation record for target with addedNodes, removedNodes, previousSibling, and nextSibling, run these steps:

1.  Assert: either addedNodes or removedNodes [is not empty](https://infra.spec.whatwg.org/#list-is-empty).
2.  [Queue a mutation record](https://dom.spec.whatwg.org/#queue-a-mutation-record) of "`childList`" for target with null, null, null, addedNodes, removedNodes, previousSibling, and nextSibling.

#### 4.3.3. Interface `[MutationRecord](https://dom.spec.whatwg.org/#mutationrecord)`[](https://dom.spec.whatwg.org/#interface-mutationrecord)

[MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord "A MutationRecord represents an individual DOM mutation. It is the object that is inside the array passed to MutationObserver's callback.")

In all current engines.

Firefox14+Safari7+Chrome16+

---

Opera15+Edge79+

---

Edge (Legacy)12+IE11

---

Firefox for Android14+iOS Safari7+Chrome for Android25+Android WebView37+Samsung Internet1.5+Opera Mobile14+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `MutationRecord` {
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [type](https://dom.spec.whatwg.org/#dom-mutationrecord-type);
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [Node](https://dom.spec.whatwg.org/#node) [target](https://dom.spec.whatwg.org/#dom-mutationrecord-target);
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [NodeList](https://dom.spec.whatwg.org/#nodelist) [addedNodes](https://dom.spec.whatwg.org/#dom-mutationrecord-addednodes);
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [NodeList](https://dom.spec.whatwg.org/#nodelist) [removedNodes](https://dom.spec.whatwg.org/#dom-mutationrecord-removednodes);
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? [previousSibling](https://dom.spec.whatwg.org/#dom-mutationrecord-previoussibling);
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? [nextSibling](https://dom.spec.whatwg.org/#dom-mutationrecord-nextsibling);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [attributeName](https://dom.spec.whatwg.org/#dom-mutationrecord-attributename);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [attributeNamespace](https://dom.spec.whatwg.org/#dom-mutationrecord-attributenamespace);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [oldValue](https://dom.spec.whatwg.org/#dom-mutationrecord-oldvalue);
};

`` record . `[type](https://dom.spec.whatwg.org/#dom-mutationrecord-type)`  ``

Returns "`attributes`" if it was an [attribute](https://dom.spec.whatwg.org/#concept-attribute) mutation. "`characterData`" if it was a mutation to a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node). And "`childList`" if it was a mutation to the [tree](https://dom.spec.whatwg.org/#concept-tree) of [nodes](https://dom.spec.whatwg.org/#concept-node).

`` record . `[target](https://dom.spec.whatwg.org/#dom-mutationrecord-target)`  ``

Returns the [node](https://dom.spec.whatwg.org/#concept-node) the mutation affected, depending on the `[type](https://dom.spec.whatwg.org/#dom-mutationrecord-type)`. For "`attributes`", it is the [element](https://dom.spec.whatwg.org/#concept-element) whose [attribute](https://dom.spec.whatwg.org/#concept-attribute) changed. For "`characterData`", it is the `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node). For "`childList`", it is the [node](https://dom.spec.whatwg.org/#concept-node) whose [children](https://dom.spec.whatwg.org/#concept-tree-child) changed.

`` record . `[addedNodes](https://dom.spec.whatwg.org/#dom-mutationrecord-addednodes)`  ``

`` record . `[removedNodes](https://dom.spec.whatwg.org/#dom-mutationrecord-removednodes)`  ``

Return the [nodes](https://dom.spec.whatwg.org/#concept-node) added and removed respectively.

`` record . `[previousSibling](https://dom.spec.whatwg.org/#dom-mutationrecord-previoussibling)`  ``

`` record . `[nextSibling](https://dom.spec.whatwg.org/#dom-mutationrecord-nextsibling)`  ``

Return the [previous](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) and [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling) respectively of the added or removed [nodes](https://dom.spec.whatwg.org/#concept-node); otherwise null.

`` record . `[attributeName](https://dom.spec.whatwg.org/#dom-mutationrecord-attributename)`  ``

Returns the [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) of the changed [attribute](https://dom.spec.whatwg.org/#concept-attribute); otherwise null.

`` record . `[attributeNamespace](https://dom.spec.whatwg.org/#dom-mutationrecord-attributenamespace)`  ``

Returns the [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) of the changed [attribute](https://dom.spec.whatwg.org/#concept-attribute); otherwise null.

`` record . `[oldValue](https://dom.spec.whatwg.org/#dom-mutationrecord-oldvalue)`  ``

The return value depends on `[type](https://dom.spec.whatwg.org/#dom-mutationrecord-type)`. For "`attributes`", it is the [value](https://dom.spec.whatwg.org/#concept-attribute-value) of the changed [attribute](https://dom.spec.whatwg.org/#concept-attribute) before the change. For "`characterData`", it is the [data](https://dom.spec.whatwg.org/#concept-cd-data) of the changed [node](https://dom.spec.whatwg.org/#concept-node) before the change. For "`childList`", it is null.

The `type`, `target`, `addedNodes`, `removedNodes`, `previousSibling`, `nextSibling`, `attributeName`, `attributeNamespace`, and `oldValue` attributes must return the values they were initialized to.

#### 4.3.4. Garbage collection[](https://dom.spec.whatwg.org/#garbage-collection)

[Nodes](https://dom.spec.whatwg.org/#concept-node) have a strong reference to [registered observers](https://dom.spec.whatwg.org/#registered-observer) in their [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list).

[Registered observers](https://dom.spec.whatwg.org/#registered-observer) in a [node](https://dom.spec.whatwg.org/#concept-node)’s [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list) have a weak reference to the [node](https://dom.spec.whatwg.org/#concept-node).

### 4.4. Interface `[Node](https://dom.spec.whatwg.org/#node)`[](https://dom.spec.whatwg.org/#interface-node)

[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node 'The DOM Node interface is an abstract base class upon which many other DOM API objects are based, thus letting those object types to be used similarly and often interchangeably. As an abstract class, there is no such thing as a plain Node object. All objects that implement Node functionality are based on one of its subclasses. Most notable are Document, Element, and DocumentFragment.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `Node` : [EventTarget](https://dom.spec.whatwg.org/#eventtarget) {
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [ELEMENT_NODE](https://dom.spec.whatwg.org/#dom-node-element_node) = 1;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [ATTRIBUTE_NODE](https://dom.spec.whatwg.org/#dom-node-attribute_node) = 2;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [TEXT_NODE](https://dom.spec.whatwg.org/#dom-node-text_node) = 3;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [CDATA_SECTION_NODE](https://dom.spec.whatwg.org/#dom-node-cdata_section_node) = 4;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `ENTITY_REFERENCE_NODE`[](https://dom.spec.whatwg.org/#dom-node-entity_reference_node) = 5; // legacy
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `ENTITY_NODE`[](https://dom.spec.whatwg.org/#dom-node-entity_node) = 6; // legacy
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [PROCESSING_INSTRUCTION_NODE](https://dom.spec.whatwg.org/#dom-node-processing_instruction_node) = 7;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [COMMENT_NODE](https://dom.spec.whatwg.org/#dom-node-comment_node) = 8;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_NODE](https://dom.spec.whatwg.org/#dom-node-document_node) = 9;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_TYPE_NODE](https://dom.spec.whatwg.org/#dom-node-document_type_node) = 10;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_FRAGMENT_NODE](https://dom.spec.whatwg.org/#dom-node-document_fragment_node) = 11;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `NOTATION_NODE`[](https://dom.spec.whatwg.org/#dom-node-notation_node) = 12; // legacy
readonly attribute [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [nodeType](https://dom.spec.whatwg.org/#dom-node-nodetype);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [nodeName](https://dom.spec.whatwg.org/#dom-node-nodename);

readonly attribute [USVString](https://webidl.spec.whatwg.org/#idl-USVString) [baseURI](https://dom.spec.whatwg.org/#dom-node-baseuri);

readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [isConnected](https://dom.spec.whatwg.org/#dom-node-isconnected);
readonly attribute [Document](https://dom.spec.whatwg.org/#document)? [ownerDocument](https://dom.spec.whatwg.org/#dom-node-ownerdocument);
[Node](https://dom.spec.whatwg.org/#node) [getRootNode](https://dom.spec.whatwg.org/#dom-node-getrootnode)(optional [GetRootNodeOptions](https://dom.spec.whatwg.org/#dictdef-getrootnodeoptions) `options`[](https://dom.spec.whatwg.org/#dom-node-getrootnode-options-options) = {});
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? [parentNode](https://dom.spec.whatwg.org/#dom-node-parentnode);
readonly attribute [Element](https://dom.spec.whatwg.org/#element)? [parentElement](https://dom.spec.whatwg.org/#dom-node-parentelement);
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [hasChildNodes](https://dom.spec.whatwg.org/#dom-node-haschildnodes)();
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [NodeList](https://dom.spec.whatwg.org/#nodelist) [childNodes](https://dom.spec.whatwg.org/#dom-node-childnodes);
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? [firstChild](https://dom.spec.whatwg.org/#dom-node-firstchild);
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? [lastChild](https://dom.spec.whatwg.org/#dom-node-lastchild);
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? [previousSibling](https://dom.spec.whatwg.org/#dom-node-previoussibling);
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? [nextSibling](https://dom.spec.whatwg.org/#dom-node-nextsibling);

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [nodeValue](https://dom.spec.whatwg.org/#dom-node-nodevalue);
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [textContent](https://dom.spec.whatwg.org/#dom-node-textcontent);
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [normalize](https://dom.spec.whatwg.org/#dom-node-normalize)();

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Node](https://dom.spec.whatwg.org/#node) [cloneNode](https://dom.spec.whatwg.org/#dom-node-clonenode)(optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `deep`[](https://dom.spec.whatwg.org/#dom-node-clonenode-deep-deep) = false);
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [isEqualNode](https://dom.spec.whatwg.org/#dom-node-isequalnode)([Node](https://dom.spec.whatwg.org/#node)? `otherNode`[](https://dom.spec.whatwg.org/#dom-node-isequalnode-othernode-othernode));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [isSameNode](https://dom.spec.whatwg.org/#dom-node-issamenode)([Node](https://dom.spec.whatwg.org/#node)? `otherNode`[](https://dom.spec.whatwg.org/#dom-node-issamenode-othernode-othernode)); // legacy alias of ===

const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_POSITION_DISCONNECTED](https://dom.spec.whatwg.org/#dom-node-document_position_disconnected) = 0x01;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_POSITION_PRECEDING](https://dom.spec.whatwg.org/#dom-node-document_position_preceding) = 0x02;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_POSITION_FOLLOWING](https://dom.spec.whatwg.org/#dom-node-document_position_following) = 0x04;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_POSITION_CONTAINS](https://dom.spec.whatwg.org/#dom-node-document_position_contains) = 0x08;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_POSITION_CONTAINED_BY](https://dom.spec.whatwg.org/#dom-node-document_position_contained_by) = 0x10;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](https://dom.spec.whatwg.org/#dom-node-document_position_implementation_specific) = 0x20;
[unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [compareDocumentPosition](https://dom.spec.whatwg.org/#dom-node-comparedocumentposition)([Node](https://dom.spec.whatwg.org/#node) `other`[](https://dom.spec.whatwg.org/#dom-node-comparedocumentposition-other-other));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [contains](https://dom.spec.whatwg.org/#dom-node-contains)([Node](https://dom.spec.whatwg.org/#node)? `other`[](https://dom.spec.whatwg.org/#dom-node-contains-other-other));

[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [lookupPrefix](https://dom.spec.whatwg.org/#dom-node-lookupprefix)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-node-lookupprefix-namespace-namespace));
[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [lookupNamespaceURI](https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `prefix`[](https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri-prefix-prefix));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [isDefaultNamespace](https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace-namespace-namespace));

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Node](https://dom.spec.whatwg.org/#node) [insertBefore](https://dom.spec.whatwg.org/#dom-node-insertbefore)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-node-insertbefore-node-child-node), [Node](https://dom.spec.whatwg.org/#node)? `child`[](https://dom.spec.whatwg.org/#dom-node-insertbefore-node-child-child));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Node](https://dom.spec.whatwg.org/#node) [appendChild](https://dom.spec.whatwg.org/#dom-node-appendchild)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-node-appendchild-node-node));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Node](https://dom.spec.whatwg.org/#node) [replaceChild](https://dom.spec.whatwg.org/#dom-node-replacechild)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-node-replacechild-node-child-node), [Node](https://dom.spec.whatwg.org/#node) `child`[](https://dom.spec.whatwg.org/#dom-node-replacechild-node-child-child));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Node](https://dom.spec.whatwg.org/#node) [removeChild](https://dom.spec.whatwg.org/#dom-node-removechild)([Node](https://dom.spec.whatwg.org/#node) `child`[](https://dom.spec.whatwg.org/#dom-node-removechild-child-child));
};

dictionary `GetRootNodeOptions` {
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `composed` = false;
};

`[Node](https://dom.spec.whatwg.org/#node)` is an abstract interface that is used by all [nodes](https://dom.spec.whatwg.org/#concept-node). You cannot get a direct instance of it.

Each [node](https://dom.spec.whatwg.org/#concept-node) has an associated node document, set upon creation, that is a [document](https://dom.spec.whatwg.org/#concept-document).

A [node](https://dom.spec.whatwg.org/#concept-node)’s [node document](https://dom.spec.whatwg.org/#concept-node-document) can be changed by the [adopt](https://dom.spec.whatwg.org/#concept-node-adopt) algorithm.

A [node](https://dom.spec.whatwg.org/#concept-node)’s [get the parent](https://dom.spec.whatwg.org/#get-the-parent) algorithm, given an event, returns the [node](https://dom.spec.whatwg.org/#concept-node)’s [assigned slot](https://dom.spec.whatwg.org/#slotable-assigned-slot), if [node](https://dom.spec.whatwg.org/#concept-node) is [assigned](https://dom.spec.whatwg.org/#slotable-assigned); otherwise [node](https://dom.spec.whatwg.org/#concept-node)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).

Each [node](https://dom.spec.whatwg.org/#concept-node) also has a [registered observer list](https://dom.spec.whatwg.org/#registered-observer-list).

---

[Node/nodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType 'The read-only nodeType property of a Node element is an integer that identifies what the node is. It distinguishes different kind of nodes from each other, such as elements, text and comments.')

In all current engines.

Firefox1+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`` node . `[nodeType](https://dom.spec.whatwg.org/#dom-node-nodetype)`  ``

Returns a number appropriate for the type of node, as follows:

`[Element](https://dom.spec.whatwg.org/#element)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[ELEMENT_NODE](https://dom.spec.whatwg.org/#dom-node-element_node)` `` (1).

`[Attr](https://dom.spec.whatwg.org/#attr)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[ATTRIBUTE_NODE](https://dom.spec.whatwg.org/#dom-node-attribute_node)` `` (2).

An [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node)

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[TEXT_NODE](https://dom.spec.whatwg.org/#dom-node-text_node)` `` (3).

`[CDATASection](https://dom.spec.whatwg.org/#cdatasection)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[CDATA_SECTION_NODE](https://dom.spec.whatwg.org/#dom-node-cdata_section_node)` `` (4).

`[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[PROCESSING_INSTRUCTION_NODE](https://dom.spec.whatwg.org/#dom-node-processing_instruction_node)` `` (7).

`[Comment](https://dom.spec.whatwg.org/#comment)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[COMMENT_NODE](https://dom.spec.whatwg.org/#dom-node-comment_node)` `` (8).

`[Document](https://dom.spec.whatwg.org/#document)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_NODE](https://dom.spec.whatwg.org/#dom-node-document_node)` `` (9).

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_TYPE_NODE](https://dom.spec.whatwg.org/#dom-node-document_type_node)` `` (10).

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_FRAGMENT_NODE](https://dom.spec.whatwg.org/#dom-node-document_fragment_node)` `` (11).

[Node/nodeName](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName 'The read-only nodeName property of Node returns the name of the current node as a string.')

In all current engines.

Firefox1+Safari7+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari7+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[nodeName](https://dom.spec.whatwg.org/#dom-node-nodename)`  ``

Returns a string appropriate for the type of node, as follows:

`[Element](https://dom.spec.whatwg.org/#element)`

Its [HTML-uppercased qualified name](https://dom.spec.whatwg.org/#element-html-uppercased-qualified-name).

`[Attr](https://dom.spec.whatwg.org/#attr)`

Its [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name).

An [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node)

"`#text`".

`[CDATASection](https://dom.spec.whatwg.org/#cdatasection)`

"`#cdata-section`".

`[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`

Its [target](https://dom.spec.whatwg.org/#concept-pi-target).

`[Comment](https://dom.spec.whatwg.org/#comment)`

"`#comment`".

`[Document](https://dom.spec.whatwg.org/#document)`

"`#document`".

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

Its [name](https://dom.spec.whatwg.org/#concept-doctype-name).

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

"`#document-fragment`".

The `nodeType` getter steps are to return the first matching statement, switching on the interface [this](https://webidl.spec.whatwg.org/#this) [implements](https://webidl.spec.whatwg.org/#implements):

`[Element](https://dom.spec.whatwg.org/#element)`

`ELEMENT_NODE` (1)

`[Attr](https://dom.spec.whatwg.org/#attr)`

`ATTRIBUTE_NODE` (2);

An [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node)

`TEXT_NODE` (3);

`[CDATASection](https://dom.spec.whatwg.org/#cdatasection)`

`CDATA_SECTION_NODE` (4);

`[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`

`PROCESSING_INSTRUCTION_NODE` (7);

`[Comment](https://dom.spec.whatwg.org/#comment)`

(8);

`[Document](https://dom.spec.whatwg.org/#document)`

`DOCUMENT_NODE` (9);

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

`DOCUMENT_TYPE_NODE` (10);

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

`DOCUMENT_FRAGMENT_NODE` (11).

The `nodeName` getter steps are to return the first matching statement, switching on the interface [this](https://webidl.spec.whatwg.org/#this) [implements](https://webidl.spec.whatwg.org/#implements):

`[Element](https://dom.spec.whatwg.org/#element)`

Its [HTML-uppercased qualified name](https://dom.spec.whatwg.org/#element-html-uppercased-qualified-name).

`[Attr](https://dom.spec.whatwg.org/#attr)`

Its [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name).

An [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node)

"`#text`".

`[CDATASection](https://dom.spec.whatwg.org/#cdatasection)`

"`#cdata-section`".

`[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`

Its [target](https://dom.spec.whatwg.org/#concept-pi-target).

`[Comment](https://dom.spec.whatwg.org/#comment)`

"`#comment`".

`[Document](https://dom.spec.whatwg.org/#document)`

"`#document`".

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

Its [name](https://dom.spec.whatwg.org/#concept-doctype-name).

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

"`#document-fragment`".

---

[Node/baseURI](https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI 'The read-only baseURI property of the Node interface returns the absolute base URL of the document containing the node.')

In all current engines.

Firefox1+Safari7+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari7+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[baseURI](https://dom.spec.whatwg.org/#dom-node-baseuri)`  ``

Returns node’s [node document](https://dom.spec.whatwg.org/#concept-node-document)’s [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url).

The `baseURI` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document)’s [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url), [serialized](https://url.spec.whatwg.org/#concept-url-serializer).

---

[Node/isConnected](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected 'The read-only isConnected property of the Node interface returns a boolean indicating whether the node is connected (directly or indirectly) to the context object, for example the Document object in the case of the normal DOM, or the ShadowRoot in the case of a shadow DOM.')

In all current engines.

Firefox49+Safari10+Chrome51+

---

Opera38+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android49+iOS Safari10+Chrome for Android51+Android WebView51+Samsung Internet6.0+Opera Mobile41+

`` node . `[isConnected](https://dom.spec.whatwg.org/#dom-node-isconnected)`  ``

Returns true if node is [connected](https://dom.spec.whatwg.org/#connected); otherwise false.

[Node/ownerDocument](https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument 'The read-only ownerDocument property of the Node interface returns the top-level document object of the node.')

In all current engines.

Firefox9+Safari7+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android9+iOS Safari7+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[ownerDocument](https://dom.spec.whatwg.org/#dom-node-ownerdocument)`  ``

Returns the [node document](https://dom.spec.whatwg.org/#concept-node-document). Returns null for [documents](https://dom.spec.whatwg.org/#concept-document).

[Node/getRootNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode "The getRootNode() method of the Node interface returns the context object's root, which optionally includes the shadow root if it is available.")

In all current engines.

Firefox53+Safari10.1+Chrome54+

---

Opera41+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android53+iOS Safari10.3+Chrome for Android54+Android WebView54+Samsung Internet6.0+Opera Mobile41+

`` node . `[getRootNode()](https://dom.spec.whatwg.org/#dom-node-getrootnode)`  ``

Returns node’s [root](https://dom.spec.whatwg.org/#concept-tree-root).

`node . [getRootNode](https://dom.spec.whatwg.org/#dom-node-getrootnode)({ composed:true })`

Returns node’s [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root).

[Node/parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode 'The read-only parentNode property of the Node interface returns the parent of the specified node in the DOM tree.')

In all current engines.

Firefox1+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5.5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`` node . `[parentNode](https://dom.spec.whatwg.org/#dom-node-parentnode)`  ``

Returns the [parent](https://dom.spec.whatwg.org/#concept-tree-parent).

[Node/parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement "The read-only parentElement property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element.")

In all current engines.

Firefox9+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android9+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`` node . `[parentElement](https://dom.spec.whatwg.org/#dom-node-parentelement)`  ``

Returns the [parent element](https://dom.spec.whatwg.org/#parent-element).

[Node/hasChildNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes 'The hasChildNodes() method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[hasChildNodes()](https://dom.spec.whatwg.org/#dom-node-haschildnodes)`  ``

Returns whether node has [children](https://dom.spec.whatwg.org/#concept-tree-child).

[Node/childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes 'The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments.')

In all current engines.

Firefox1+Safari1.2+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`` node . `[childNodes](https://dom.spec.whatwg.org/#dom-node-childnodes)`  ``

Returns the [children](https://dom.spec.whatwg.org/#concept-tree-child).

[Node/firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild "The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children.")

In all current engines.

Firefox1+Safari7+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari7+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[firstChild](https://dom.spec.whatwg.org/#dom-node-firstchild)`  ``

Returns the [first child](https://dom.spec.whatwg.org/#concept-tree-first-child).

[Node/lastChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild 'The read-only lastChild property of the Node interface returns the last child of the node. If its parent is an element, then the child is generally an element node, a text node, or a comment node. It returns null if there are no child elements.')

In all current engines.

Firefox1+Safari7+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android45+iOS Safari7+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[lastChild](https://dom.spec.whatwg.org/#dom-node-lastchild)`  ``

Returns the [last child](https://dom.spec.whatwg.org/#concept-tree-last-child).

[Node/previousSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling "The read-only previousSibling property of the Node interface returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list.")

In all current engines.

Firefox1+Safari7+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5.5+

---

Firefox for Android4+iOS Safari7+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[previousSibling](https://dom.spec.whatwg.org/#dom-node-previoussibling)`  ``

Returns the [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).

[Node/nextSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling "The read-only nextSibling property of the Node interface returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.")

In all current engines.

Firefox1+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5.5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`` node . `[nextSibling](https://dom.spec.whatwg.org/#dom-node-nextsibling)`  ``

Returns the [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).

The `isConnected` getter steps are to return true, if [this](https://webidl.spec.whatwg.org/#this) is [connected](https://dom.spec.whatwg.org/#connected); otherwise false.

The `ownerDocument` getter steps are to return null, if [this](https://webidl.spec.whatwg.org/#this) is a [document](https://dom.spec.whatwg.org/#concept-document); otherwise [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).

The [node document](https://dom.spec.whatwg.org/#concept-node-document) of a [document](https://dom.spec.whatwg.org/#concept-document) is that [document](https://dom.spec.whatwg.org/#concept-document) itself. All [nodes](https://dom.spec.whatwg.org/#concept-node) have a [node document](https://dom.spec.whatwg.org/#concept-node-document) at all times.

The `getRootNode(options)` method steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root) if options\["`[composed](https://dom.spec.whatwg.org/#dom-getrootnodeoptions-composed)`"\] is true; otherwise [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-tree-root).

The `parentNode` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).

The `parentElement` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [parent element](https://dom.spec.whatwg.org/#parent-element).

The `hasChildNodes()` method steps are to return true if [this](https://webidl.spec.whatwg.org/#this) has [children](https://dom.spec.whatwg.org/#concept-tree-child); otherwise false.

The `childNodes` getter steps are to return a `[NodeList](https://dom.spec.whatwg.org/#nodelist)` rooted at [this](https://webidl.spec.whatwg.org/#this) matching only [children](https://dom.spec.whatwg.org/#concept-tree-child).

The `firstChild` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [first child](https://dom.spec.whatwg.org/#concept-tree-first-child).

The `lastChild` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [last child](https://dom.spec.whatwg.org/#concept-tree-last-child).

The `previousSibling` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).

The `nextSibling` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).

---

[Node/nodeValue](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue 'The nodeValue property of the Node interface returns or sets the value of the current node.')

In all current engines.

Firefox1+Safari7+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari7+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `nodeValue` getter steps are to return the following, switching on the interface [this](https://webidl.spec.whatwg.org/#this) [implements](https://webidl.spec.whatwg.org/#implements):

`[Attr](https://dom.spec.whatwg.org/#attr)`

[this](https://webidl.spec.whatwg.org/#this)’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).

`[CharacterData](https://dom.spec.whatwg.org/#characterdata)`

[this](https://webidl.spec.whatwg.org/#this)’s [data](https://dom.spec.whatwg.org/#concept-cd-data).

Otherwise

Null.

The `[nodeValue](https://dom.spec.whatwg.org/#dom-node-nodevalue)` setter steps are to, if the given value is null, act as if it was the empty string instead, and then do as described below, switching on the interface [this](https://webidl.spec.whatwg.org/#this) [implements](https://webidl.spec.whatwg.org/#implements):

`[Attr](https://dom.spec.whatwg.org/#attr)`

[Set an existing attribute value](https://dom.spec.whatwg.org/#set-an-existing-attribute-value) with [this](https://webidl.spec.whatwg.org/#this) and the given value.

`[CharacterData](https://dom.spec.whatwg.org/#characterdata)`

[Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node [this](https://webidl.spec.whatwg.org/#this), offset 0, count [this](https://webidl.spec.whatwg.org/#this)’s [length](https://dom.spec.whatwg.org/#concept-node-length), and data the given value.

Otherwise

Do nothing.

[Node/textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent 'The textContent property of the Node interface represents the text content of the node and its descendants.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `textContent` getter steps are to return the following, switching on the interface [this](https://webidl.spec.whatwg.org/#this) [implements](https://webidl.spec.whatwg.org/#implements):

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

`[Element](https://dom.spec.whatwg.org/#element)`

The [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) of [this](https://webidl.spec.whatwg.org/#this).

`[Attr](https://dom.spec.whatwg.org/#attr)`

[this](https://webidl.spec.whatwg.org/#this)’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).

`[CharacterData](https://dom.spec.whatwg.org/#characterdata)`

[this](https://webidl.spec.whatwg.org/#this)’s [data](https://dom.spec.whatwg.org/#concept-cd-data).

Otherwise

Null.

To string replace all with a string string within a [node](https://dom.spec.whatwg.org/#concept-node) parent, run these steps:

1.  Let node be null.
2.  If string is not the empty string, then set node to a new `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is string and [node document](https://dom.spec.whatwg.org/#concept-node-document) is parent’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
3.  [Replace all](https://dom.spec.whatwg.org/#concept-node-replace-all) with node within parent.

The `[textContent](https://dom.spec.whatwg.org/#dom-node-textcontent)` setter steps are to, if the given value is null, act as if it was the empty string instead, and then do as described below, switching on the interface [this](https://webidl.spec.whatwg.org/#this) [implements](https://webidl.spec.whatwg.org/#implements):

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

`[Element](https://dom.spec.whatwg.org/#element)`

[String replace all](https://dom.spec.whatwg.org/#string-replace-all) with the given value within [this](https://webidl.spec.whatwg.org/#this).

`[Attr](https://dom.spec.whatwg.org/#attr)`

[Set an existing attribute value](https://dom.spec.whatwg.org/#set-an-existing-attribute-value) with [this](https://webidl.spec.whatwg.org/#this) and the given value.

`[CharacterData](https://dom.spec.whatwg.org/#characterdata)`

[Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node [this](https://webidl.spec.whatwg.org/#this), offset 0, count [this](https://webidl.spec.whatwg.org/#this)’s [length](https://dom.spec.whatwg.org/#concept-node-length), and data the given value.

Otherwise

Do nothing.

---

[Node/normalize](https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize 'The normalize() method of the Node puts the specified node and all of its sub-tree into a normalized form. In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[normalize()](https://dom.spec.whatwg.org/#dom-node-normalize)`  ``

Removes [empty](https://dom.spec.whatwg.org/#concept-node-empty) [exclusive `Text` nodes](https://dom.spec.whatwg.org/#exclusive-text-node) and concatenates the [data](https://dom.spec.whatwg.org/#concept-cd-data) of remaining [contiguous exclusive `Text` nodes](https://dom.spec.whatwg.org/#contiguous-exclusive-text-nodes) into the first of their [nodes](https://dom.spec.whatwg.org/#concept-node).

The `normalize()` method steps are to run these steps for each [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node) node of [this](https://webidl.spec.whatwg.org/#this):

1.  Let length be node’s [length](https://dom.spec.whatwg.org/#concept-node-length).
2.  If length is zero, then [remove](https://dom.spec.whatwg.org/#concept-node-remove) node and continue with the next [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node), if any.
3.  Let data be the [concatenation](https://infra.spec.whatwg.org/#string-concatenate) of the [data](https://dom.spec.whatwg.org/#concept-cd-data) of node’s [contiguous exclusive `Text` nodes](https://dom.spec.whatwg.org/#contiguous-exclusive-text-nodes) (excluding itself), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).
4.  [Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node node, offset length, count 0, and data data.
5.  Let currentNode be node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
6.  While currentNode is an [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node):

    1.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is currentNode, add length to its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) and set its [start node](https://dom.spec.whatwg.org/#concept-range-start-node) to node.
    2.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is currentNode, add length to its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) and set its [end node](https://dom.spec.whatwg.org/#concept-range-end-node) to node.
    3.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is currentNode’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) and [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is currentNode’s [index](https://dom.spec.whatwg.org/#concept-tree-index), set its [start node](https://dom.spec.whatwg.org/#concept-range-start-node) to node and its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) to length.
    4.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is currentNode’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is currentNode’s [index](https://dom.spec.whatwg.org/#concept-tree-index), set its [end node](https://dom.spec.whatwg.org/#concept-range-end-node) to node and its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) to length.
    5.  Add currentNode’s [length](https://dom.spec.whatwg.org/#concept-node-length) to length.
    6.  Set currentNode to its [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).

7.  [Remove](https://dom.spec.whatwg.org/#concept-node-remove) node’s [contiguous exclusive `Text` nodes](https://dom.spec.whatwg.org/#contiguous-exclusive-text-nodes) (excluding itself), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

---

[Node/cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode 'The cloneNode() method of the Node interface returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not.')

In all current engines.

Firefox1+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`node . [cloneNode([deep = false])](https://dom.spec.whatwg.org/#dom-node-clonenode)`

Returns a copy of node. If deep is true, the copy also includes the node’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant).

[Node/isEqualNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode 'The isEqualNode() method of the Node interface tests whether two nodes are equal. Two nodes are equal when they have the same type, defining characteristics (for elements, this would be their ID, number of children, and so forth), its attributes match, and so on. The specific set of data points that must match varies depending on the types of the nodes.')

In all current engines.

Firefox2+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[isEqualNode(otherNode)](https://dom.spec.whatwg.org/#dom-node-isequalnode)`  ``

Returns whether node and otherNode have the same properties.

[Specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define cloning steps for all or some [nodes](https://dom.spec.whatwg.org/#concept-node). The algorithm is passed copy, node, document, and an optional _clone children flag_, as indicated in the [clone](https://dom.spec.whatwg.org/#concept-node-clone) algorithm.

HTML defines [cloning steps](https://dom.spec.whatwg.org/#concept-node-clone-ext) for `[script](https://html.spec.whatwg.org/multipage/scripting.html#script)` and `[input](https://html.spec.whatwg.org/multipage/input.html#the-input-element)` elements. SVG ought to do the same for its `[script](https://html.spec.whatwg.org/multipage/scripting.html#script)` elements, but does not call this out at the moment.

To clone a node, with an optional document and _clone children flag_, run these steps:

1.  If document is not given, let document be node’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  If node is an [element](https://dom.spec.whatwg.org/#concept-element), then:

    1.  Let copy be the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element), given document, node’s [local name](https://dom.spec.whatwg.org/#concept-element-local-name), node’s [namespace](https://dom.spec.whatwg.org/#concept-element-namespace), node’s [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix), and node’s [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value), with the synchronous custom elements flag unset.
    2.  [For each](https://infra.spec.whatwg.org/#list-iterate) attribute in node’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute):

        1.  Let copyAttribute be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of attribute.
        2.  [Append](https://dom.spec.whatwg.org/#concept-element-attributes-append) copyAttribute to copy.

3.  Otherwise, let copy be a [node](https://dom.spec.whatwg.org/#concept-node) that [implements](https://webidl.spec.whatwg.org/#implements) the same interfaces as node, and fulfills these additional requirements, switching on the interface node [implements](https://webidl.spec.whatwg.org/#implements):

    `[Document](https://dom.spec.whatwg.org/#document)`

    Set copy’s [encoding](https://dom.spec.whatwg.org/#concept-document-encoding), [content type](https://dom.spec.whatwg.org/#concept-document-content-type), [URL](https://dom.spec.whatwg.org/#concept-document-url), [origin](https://dom.spec.whatwg.org/#concept-document-origin), [type](https://dom.spec.whatwg.org/#concept-document-type), and [mode](https://dom.spec.whatwg.org/#concept-document-mode) to those of node.

    `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

    Set copy’s [name](https://dom.spec.whatwg.org/#concept-doctype-name), [public ID](https://dom.spec.whatwg.org/#concept-doctype-publicid), and [system ID](https://dom.spec.whatwg.org/#concept-doctype-systemid) to those of node.

    `[Attr](https://dom.spec.whatwg.org/#attr)`

    Set copy’s [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix), [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), and [value](https://dom.spec.whatwg.org/#concept-attribute-value) to those of node.

    `[Text](https://dom.spec.whatwg.org/#text)`

    `[Comment](https://dom.spec.whatwg.org/#comment)`

    Set copy’s [data](https://dom.spec.whatwg.org/#concept-cd-data) to that of node.

    `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`

    Set copy’s [target](https://dom.spec.whatwg.org/#concept-pi-target) and [data](https://dom.spec.whatwg.org/#concept-cd-data) to those of node.

    Otherwise

    Do nothing.

4.  Set copy’s [node document](https://dom.spec.whatwg.org/#concept-node-document) and document to copy, if copy is a [document](https://dom.spec.whatwg.org/#concept-document), and set copy’s [node document](https://dom.spec.whatwg.org/#concept-node-document) to document otherwise.
5.  Run any [cloning steps](https://dom.spec.whatwg.org/#concept-node-clone-ext) defined for node in [other applicable specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) and pass copy, node, document and the _clone children flag_ if set, as parameters.
6.  If the _clone children flag_ is set, [clone](https://dom.spec.whatwg.org/#concept-node-clone) all the [children](https://dom.spec.whatwg.org/#concept-tree-child) of node and append them to copy, with document as specified and the _clone children flag_ being set.
7.  Return copy.

The `cloneNode(deep)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Return a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of [this](https://webidl.spec.whatwg.org/#this), with the _clone children flag_ set if deep is true.

A [node](https://dom.spec.whatwg.org/#concept-node) A equals a [node](https://dom.spec.whatwg.org/#concept-node) B if all of the following conditions are true:

-   A and B [implement](https://webidl.spec.whatwg.org/#implements) the same interfaces.
-   The following are equal, switching on the interface A [implements](https://webidl.spec.whatwg.org/#implements):

    `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

    Its [name](https://dom.spec.whatwg.org/#concept-doctype-name), [public ID](https://dom.spec.whatwg.org/#concept-doctype-publicid), and [system ID](https://dom.spec.whatwg.org/#concept-doctype-systemid).

    `[Element](https://dom.spec.whatwg.org/#element)`

    Its [namespace](https://dom.spec.whatwg.org/#concept-element-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix), [local name](https://dom.spec.whatwg.org/#concept-element-local-name), and its [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute)’s [size](https://infra.spec.whatwg.org/#list-size).

    `[Attr](https://dom.spec.whatwg.org/#attr)`

    Its [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace), [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), and [value](https://dom.spec.whatwg.org/#concept-attribute-value).

    `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`

    Its [target](https://dom.spec.whatwg.org/#concept-pi-target) and [data](https://dom.spec.whatwg.org/#concept-cd-data).

    `[Text](https://dom.spec.whatwg.org/#text)`

    `[Comment](https://dom.spec.whatwg.org/#comment)`

    Its [data](https://dom.spec.whatwg.org/#concept-cd-data).

    Otherwise

    —

-   If A is an [element](https://dom.spec.whatwg.org/#concept-element), each [attribute](https://dom.spec.whatwg.org/#concept-attribute) in its [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) has an [attribute](https://dom.spec.whatwg.org/#concept-attribute) that [equals](https://dom.spec.whatwg.org/#concept-node-equals) an [attribute](https://dom.spec.whatwg.org/#concept-attribute) in B’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute).
-   A and B have the same number of [children](https://dom.spec.whatwg.org/#concept-tree-child).
-   Each [child](https://dom.spec.whatwg.org/#concept-tree-child) of A [equals](https://dom.spec.whatwg.org/#concept-node-equals) the [child](https://dom.spec.whatwg.org/#concept-tree-child) of B at the identical [index](https://dom.spec.whatwg.org/#concept-tree-index).

The `isEqualNode(otherNode)` method steps are to return true if otherNode is non-null and [this](https://webidl.spec.whatwg.org/#this) [equals](https://dom.spec.whatwg.org/#concept-node-equals) otherNode; otherwise false.

[Node/isSameNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode 'The isSameNode() method of the Node interface is a legacy alias the for the === strict equality operator. That is, it tests whether two nodes are the same (in other words, whether they reference the same object).')

In all current engines.

Firefox48+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android48+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `isSameNode(otherNode)` method steps are to return true if otherNode is [this](https://webidl.spec.whatwg.org/#this); otherwise false.

---

[Node/compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition 'The compareDocumentPosition() method of the Node interface reports the position of its argument node relative to the node on which it is called.')

In all current engines.

Firefox9+Safari4+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android9+iOS Safari3.2+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12.1+

`` node . `[compareDocumentPosition(other)](https://dom.spec.whatwg.org/#dom-node-comparedocumentposition)`  ``

Returns a bitmask indicating the position of other relative to node. These are the bits that can be set:

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_POSITION_DISCONNECTED](https://dom.spec.whatwg.org/#dom-node-document_position_disconnected)` `` (1)

Set when node and other are not in the same [tree](https://dom.spec.whatwg.org/#concept-tree).

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_POSITION_PRECEDING](https://dom.spec.whatwg.org/#dom-node-document_position_preceding)` `` (2)

Set when other is [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) node.

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_POSITION_FOLLOWING](https://dom.spec.whatwg.org/#dom-node-document_position_following)` `` (4)

Set when other is [following](https://dom.spec.whatwg.org/#concept-tree-following) node.

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_POSITION_CONTAINS](https://dom.spec.whatwg.org/#dom-node-document_position_contains)` `` (8)

Set when other is an [ancestor](https://dom.spec.whatwg.org/#concept-tree-ancestor) of node.

`` `[Node](https://dom.spec.whatwg.org/#node)` . `[DOCUMENT_POSITION_CONTAINED_BY](https://dom.spec.whatwg.org/#dom-node-document_position_contained_by)` `` (16, 10 in hexadecimal)

Set when other is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of node.

[Node/contains](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains "The contains() method of the Node interface returns a boolean value indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children (childNodes), one of the children's direct children, and so on.")

In all current engines.

Firefox9+Safari1.1+Chrome16+

---

Opera7+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android9+iOS Safari1+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

`` node . `[contains(other)](https://dom.spec.whatwg.org/#dom-node-contains)`  ``

Returns true if other is an [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) of node; otherwise false.

These are the constants `[compareDocumentPosition()](https://dom.spec.whatwg.org/#dom-node-comparedocumentposition)` returns as mask:

-   `DOCUMENT_POSITION_DISCONNECTED` (1);
-   `DOCUMENT_POSITION_PRECEDING` (2);
-   `DOCUMENT_POSITION_FOLLOWING` (4);
-   `DOCUMENT_POSITION_CONTAINS` (8);
-   `DOCUMENT_POSITION_CONTAINED_BY` (16, 10 in hexadecimal);
-   `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (32, 20 in hexadecimal).

The `compareDocumentPosition(other)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this) is other, then return zero.
2.  Let node1 be other and node2 be [this](https://webidl.spec.whatwg.org/#this).
3.  Let attr1 and attr2 be null.
4.  If node1 is an [attribute](https://dom.spec.whatwg.org/#concept-attribute), then set attr1 to node1 and node1 to attr1’s [element](https://dom.spec.whatwg.org/#concept-attribute-element).
5.  If node2 is an [attribute](https://dom.spec.whatwg.org/#concept-attribute), then:

    1.  Set attr2 to node2 and node2 to attr2’s [element](https://dom.spec.whatwg.org/#concept-attribute-element).
    2.  If attr1 and node1 are non-null, and node2 is node1, then:

        1.  [For each](https://infra.spec.whatwg.org/#list-iterate) attr in node2’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute):

            1.  If attr [equals](https://dom.spec.whatwg.org/#concept-node-equals) attr1, then return the result of adding `[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](https://dom.spec.whatwg.org/#dom-node-document_position_implementation_specific)` and `[DOCUMENT_POSITION_PRECEDING](https://dom.spec.whatwg.org/#dom-node-document_position_preceding)`.
            2.  If attr [equals](https://dom.spec.whatwg.org/#concept-node-equals) attr2, then return the result of adding `[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](https://dom.spec.whatwg.org/#dom-node-document_position_implementation_specific)` and `[DOCUMENT_POSITION_FOLLOWING](https://dom.spec.whatwg.org/#dom-node-document_position_following)`.

6.  If node1 or node2 is null, or node1’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is not node2’s [root](https://dom.spec.whatwg.org/#concept-tree-root), then return the result of adding `[DOCUMENT_POSITION_DISCONNECTED](https://dom.spec.whatwg.org/#dom-node-document_position_disconnected)`, `[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](https://dom.spec.whatwg.org/#dom-node-document_position_implementation_specific)`, and either `[DOCUMENT_POSITION_PRECEDING](https://dom.spec.whatwg.org/#dom-node-document_position_preceding)` or `[DOCUMENT_POSITION_FOLLOWING](https://dom.spec.whatwg.org/#dom-node-document_position_following)`, with the constraint that this is to be consistent, together.

    Whether to return `[DOCUMENT_POSITION_PRECEDING](https://dom.spec.whatwg.org/#dom-node-document_position_preceding)` or `[DOCUMENT_POSITION_FOLLOWING](https://dom.spec.whatwg.org/#dom-node-document_position_following)` is typically implemented via pointer comparison. In JavaScript implementations a cached `Math.random()` value can be used.

7.  If node1 is an [ancestor](https://dom.spec.whatwg.org/#concept-tree-ancestor) of node2 and attr1 is null, or node1 is node2 and attr2 is non-null, then return the result of adding `[DOCUMENT_POSITION_CONTAINS](https://dom.spec.whatwg.org/#dom-node-document_position_contains)` to `[DOCUMENT_POSITION_PRECEDING](https://dom.spec.whatwg.org/#dom-node-document_position_preceding)`.
8.  If node1 is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of node2 and attr2 is null, or node1 is node2 and attr1 is non-null, then return the result of adding `[DOCUMENT_POSITION_CONTAINED_BY](https://dom.spec.whatwg.org/#dom-node-document_position_contained_by)` to `[DOCUMENT_POSITION_FOLLOWING](https://dom.spec.whatwg.org/#dom-node-document_position_following)`.
9.  If node1 is [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) node2, then return `[DOCUMENT_POSITION_PRECEDING](https://dom.spec.whatwg.org/#dom-node-document_position_preceding)`.

    Due to the way [attributes](https://dom.spec.whatwg.org/#concept-attribute) are handled in this algorithm this results in a [node](https://dom.spec.whatwg.org/#concept-node)’s [attributes](https://dom.spec.whatwg.org/#concept-attribute) counting as [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) that [node](https://dom.spec.whatwg.org/#concept-node)’s [children](https://dom.spec.whatwg.org/#concept-tree-child), despite [attributes](https://dom.spec.whatwg.org/#concept-attribute) not [participating](https://dom.spec.whatwg.org/#concept-tree-participate) in the same [tree](https://dom.spec.whatwg.org/#concept-tree).

10. Return `[DOCUMENT_POSITION_FOLLOWING](https://dom.spec.whatwg.org/#dom-node-document_position_following)`.

The `contains(other)` method steps are to return true if other is an [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) of [this](https://webidl.spec.whatwg.org/#this); otherwise false (including when other is null).

---

To locate a namespace prefix for an element using namespace, run these steps:

1.  If element’s [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is namespace and its [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) is non-null, then return its [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix).
2.  If element [has](https://dom.spec.whatwg.org/#concept-element-attribute-has) an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix) is "`xmlns`" and [value](https://dom.spec.whatwg.org/#concept-attribute-value) is namespace, then return element’s first such [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name).
3.  If element’s [parent element](https://dom.spec.whatwg.org/#parent-element) is not null, then return the result of running [locate a namespace prefix](https://dom.spec.whatwg.org/#locate-a-namespace-prefix) on that [element](https://dom.spec.whatwg.org/#concept-element) using namespace.
4.  Return null.

To locate a namespace for a node using prefix, switch on the interface node [implements](https://webidl.spec.whatwg.org/#implements):

`[Element](https://dom.spec.whatwg.org/#element)`

1.  If its [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is non-null and its [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) is prefix, then return [namespace](https://dom.spec.whatwg.org/#concept-element-namespace).
2.  If it [has](https://dom.spec.whatwg.org/#concept-element-attribute-has) an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is the [XMLNS namespace](https://infra.spec.whatwg.org/#xmlns-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix) is "`xmlns`", and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is prefix, or if prefix is null and it [has](https://dom.spec.whatwg.org/#concept-element-attribute-has) an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is the [XMLNS namespace](https://infra.spec.whatwg.org/#xmlns-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix) is null, and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is "`xmlns`", then return its [value](https://dom.spec.whatwg.org/#concept-attribute-value) if it is not the empty string, and null otherwise.
3.  If its [parent element](https://dom.spec.whatwg.org/#parent-element) is null, then return null.
4.  Return the result of running [locate a namespace](https://dom.spec.whatwg.org/#locate-a-namespace) on its [parent element](https://dom.spec.whatwg.org/#parent-element) using prefix.

`[Document](https://dom.spec.whatwg.org/#document)`

1.  If its [document element](https://dom.spec.whatwg.org/#document-element) is null, then return null.
2.  Return the result of running [locate a namespace](https://dom.spec.whatwg.org/#locate-a-namespace) on its [document element](https://dom.spec.whatwg.org/#document-element) using prefix.

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

`[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

Return null.

`[Attr](https://dom.spec.whatwg.org/#attr)`

1.  If its [element](https://dom.spec.whatwg.org/#concept-attribute-element) is null, then return null.
2.  Return the result of running [locate a namespace](https://dom.spec.whatwg.org/#locate-a-namespace) on its [element](https://dom.spec.whatwg.org/#concept-attribute-element) using prefix.

Otherwise

1.  If its [parent element](https://dom.spec.whatwg.org/#parent-element) is null, then return null.
2.  Return the result of running [locate a namespace](https://dom.spec.whatwg.org/#locate-a-namespace) on its [parent element](https://dom.spec.whatwg.org/#parent-element) using prefix.

[Node/lookupPrefix](https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupPrefix 'The lookupPrefix() method of the Node interface returns a String containing the prefix for a given namespace URI, if present, and null if not. When multiple prefixes are possible, the first prefix is returned.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `lookupPrefix(namespace)` method steps are:

1.  If namespace is null or the empty string, then return null.
2.  Switch on the interface [this](https://webidl.spec.whatwg.org/#this) [implements](https://webidl.spec.whatwg.org/#implements):

    `[Element](https://dom.spec.whatwg.org/#element)`

    Return the result of [locating a namespace prefix](https://dom.spec.whatwg.org/#locate-a-namespace-prefix) for it using namespace.

    `[Document](https://dom.spec.whatwg.org/#document)`

    Return the result of [locating a namespace prefix](https://dom.spec.whatwg.org/#locate-a-namespace-prefix) for its [document element](https://dom.spec.whatwg.org/#document-element), if its [document element](https://dom.spec.whatwg.org/#document-element) is non-null; otherwise null.

    `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

    `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`

    Return null.

    `[Attr](https://dom.spec.whatwg.org/#attr)`

    Return the result of [locating a namespace prefix](https://dom.spec.whatwg.org/#locate-a-namespace-prefix) for its [element](https://dom.spec.whatwg.org/#concept-attribute-element), if its [element](https://dom.spec.whatwg.org/#concept-attribute-element) is non-null; otherwise null.

    Otherwise

    Return the result of [locating a namespace prefix](https://dom.spec.whatwg.org/#locate-a-namespace-prefix) for its [parent element](https://dom.spec.whatwg.org/#parent-element), if its [parent element](https://dom.spec.whatwg.org/#parent-element) is non-null; otherwise null.

[Node/lookupNamespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupNamespaceURI 'The lookupNamespaceURI() method of the Node interface takes a prefix as parameter and returns the namespace URI associated with it on the given node if found (and null if not).')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `lookupNamespaceURI(prefix)` method steps are:

1.  If prefix is the empty string, then set it to null.
2.  Return the result of running [locate a namespace](https://dom.spec.whatwg.org/#locate-a-namespace) for [this](https://webidl.spec.whatwg.org/#this) using prefix.

[Node/isDefaultNamespace](https://developer.mozilla.org/en-US/docs/Web/API/Node/isDefaultNamespace 'The isDefaultNamespace() method of the Node interface accepts a namespace URI as an argument. It returns a boolean value that is true if the namespace is the default namespace on the given node and false if not.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `isDefaultNamespace(namespace)` method steps are:

1.  If namespace is the empty string, then set it to null.
2.  Let defaultNamespace be the result of running [locate a namespace](https://dom.spec.whatwg.org/#locate-a-namespace) for [this](https://webidl.spec.whatwg.org/#this) using null.
3.  Return true if defaultNamespace is the same as namespace; otherwise false.

---

[Node/insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore 'The insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node.')

In all current engines.

Firefox3+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `insertBefore(node, child)` method steps are to return the result of [pre-inserting](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into [this](https://webidl.spec.whatwg.org/#this) before child.

[Node/appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild 'The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).')

In all current engines.

Firefox1+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `appendChild(node)` method steps are to return the result of [appending](https://dom.spec.whatwg.org/#concept-node-append) node to [this](https://webidl.spec.whatwg.org/#this).

[Node/replaceChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild 'The replaceChild() method of the Node element replaces a child node within the given (parent) node.')

In all current engines.

Firefox1+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `replaceChild(node, child)` method steps are to return the result of [replacing](https://dom.spec.whatwg.org/#concept-node-replace) child with node within [this](https://webidl.spec.whatwg.org/#this).

[Node/removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild 'The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.')

In all current engines.

Firefox1+Safari1.1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `removeChild(child)` method steps are to return the result of [pre-removing](https://dom.spec.whatwg.org/#concept-node-pre-remove) child from [this](https://webidl.spec.whatwg.org/#this).

---

The list of elements with qualified name qualifiedName for a [node](https://dom.spec.whatwg.org/#concept-node) root is the `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` returned by the following algorithm:

1.  If qualifiedName is U+002A (\*), then return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches only [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element).
2.  Otherwise, if root’s [node document](https://dom.spec.whatwg.org/#concept-node-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document), return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches the following [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element):

    -   Whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and whose [qualified name](https://dom.spec.whatwg.org/#concept-element-qualified-name) is qualifiedName, in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
    -   Whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is _not_ the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and whose [qualified name](https://dom.spec.whatwg.org/#concept-element-qualified-name) is qualifiedName.

3.  Otherwise, return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [qualified name](https://dom.spec.whatwg.org/#concept-element-qualified-name) is qualifiedName.

When invoked with the same argument, and as long as root’s [node document](https://dom.spec.whatwg.org/#concept-node-document)’s [type](https://dom.spec.whatwg.org/#concept-document-type) has not changed, the same `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` object may be returned as returned by an earlier call.

The list of elements with namespace namespace and local name localName for a [node](https://dom.spec.whatwg.org/#concept-node) root is the `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` returned by the following algorithm:

1.  If namespace is the empty string, then set it to null.
2.  If both namespace and localName are U+002A (\*), then return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element).
3.  If namespace is U+002A (\*), then return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is localName.
4.  If localName is U+002A (\*), then return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is namespace.
5.  Return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is localName.

When invoked with the same arguments, the same `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` object may be returned as returned by an earlier call.

The list of elements with class names classNames for a [node](https://dom.spec.whatwg.org/#concept-node) root is the `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` returned by the following algorithm:

1.  Let classes be the result of running the [ordered set parser](https://dom.spec.whatwg.org/#concept-ordered-set-parser) on classNames.
2.  If classes is the empty set, return an empty `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)`.
3.  Return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` rooted at root, whose filter matches [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) that have all their [classes](https://dom.spec.whatwg.org/#concept-class) in classes.

    The comparisons for the [classes](https://dom.spec.whatwg.org/#concept-class) must be done in an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) manner if root’s [node document](https://dom.spec.whatwg.org/#concept-node-document)’s [mode](https://dom.spec.whatwg.org/#concept-document-mode) is "`quirks`"; otherwise in an [identical to](https://infra.spec.whatwg.org/#string-is) manner.

When invoked with the same argument, the same `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` object may be returned as returned by an earlier call.

### 4.5. Interface `[Document](https://dom.spec.whatwg.org/#document)`[](https://dom.spec.whatwg.org/#interface-document)

[Document](https://developer.mozilla.org/en-US/docs/Web/API/Document "The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera3+Edge79+

---

Edge (Legacy)12+IE4+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[XMLDocument](https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument 'The XMLDocument interface represents an XML document. It inherits from the generic Document and does not add any specific methods or properties to it: nevertheless, several algorithms behave differently with the two types of documents.')

In all current engines.

Firefox1+Safari10+Chrome34+

---

Opera21+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari10+Chrome for Android34+Android WebView37+Samsung Internet2.0+Opera Mobile21+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `Document` : [Node](https://dom.spec.whatwg.org/#node) {
[constructor](https://dom.spec.whatwg.org/#dom-document-document)();

\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [DOMImplementation](https://dom.spec.whatwg.org/#domimplementation) [implementation](https://dom.spec.whatwg.org/#dom-document-implementation);
readonly attribute [USVString](https://webidl.spec.whatwg.org/#idl-USVString) [URL](https://dom.spec.whatwg.org/#dom-document-url);
readonly attribute [USVString](https://webidl.spec.whatwg.org/#idl-USVString) [documentURI](https://dom.spec.whatwg.org/#dom-document-documenturi);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [compatMode](https://dom.spec.whatwg.org/#dom-document-compatmode);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [characterSet](https://dom.spec.whatwg.org/#dom-document-characterset);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [charset](https://dom.spec.whatwg.org/#dom-document-charset); // legacy alias of .characterSet
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [inputEncoding](https://dom.spec.whatwg.org/#dom-document-inputencoding); // legacy alias of .characterSet
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [contentType](https://dom.spec.whatwg.org/#dom-document-contenttype);

readonly attribute [DocumentType](https://dom.spec.whatwg.org/#documenttype)? [doctype](https://dom.spec.whatwg.org/#dom-document-doctype);
readonly attribute [Element](https://dom.spec.whatwg.org/#element)? [documentElement](https://dom.spec.whatwg.org/#dom-document-documentelement);
[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection) [getElementsByTagName](https://dom.spec.whatwg.org/#dom-document-getelementsbytagname)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-document-getelementsbytagname-qualifiedname-qualifiedname));
[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection) [getElementsByTagNameNS](https://dom.spec.whatwg.org/#dom-document-getelementsbytagnamens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-document-getelementsbytagnamens-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-document-getelementsbytagnamens-namespace-localname-localname));
[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection) [getElementsByClassName](https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `classNames`[](https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname-classnames-classnames));

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Element](https://dom.spec.whatwg.org/#element) [createElement](https://dom.spec.whatwg.org/#dom-document-createelement)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-document-createelement-localname-options-localname), optional ([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) or [ElementCreationOptions](https://dom.spec.whatwg.org/#dictdef-elementcreationoptions)) `options`[](https://dom.spec.whatwg.org/#dom-document-createelement-localname-options-options) = {});
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Element](https://dom.spec.whatwg.org/#element) [createElementNS](https://dom.spec.whatwg.org/#dom-document-createelementns)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-document-createelementns-namespace-qualifiedname-options-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-document-createelementns-namespace-qualifiedname-options-qualifiedname), optional ([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) or [ElementCreationOptions](https://dom.spec.whatwg.org/#dictdef-elementcreationoptions)) `options`[](https://dom.spec.whatwg.org/#dom-document-createelementns-namespace-qualifiedname-options-options) = {});
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [DocumentFragment](https://dom.spec.whatwg.org/#documentfragment) [createDocumentFragment](https://dom.spec.whatwg.org/#dom-document-createdocumentfragment)();
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Text](https://dom.spec.whatwg.org/#text) [createTextNode](https://dom.spec.whatwg.org/#dom-document-createtextnode)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-document-createtextnode-data-data));
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [CDATASection](https://dom.spec.whatwg.org/#cdatasection) [createCDATASection](https://dom.spec.whatwg.org/#dom-document-createcdatasection)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-document-createcdatasection-data-data));
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Comment](https://dom.spec.whatwg.org/#comment) [createComment](https://dom.spec.whatwg.org/#dom-document-createcomment)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) );
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction) [createProcessingInstruction](https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `target`[](https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction-target-data-target), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction-target-data-data));

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Node](https://dom.spec.whatwg.org/#node) [importNode](https://dom.spec.whatwg.org/#dom-document-importnode)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-document-importnode-node-deep-node), optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `deep`[](https://dom.spec.whatwg.org/#dom-document-importnode-node-deep-deep) = false);
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Node](https://dom.spec.whatwg.org/#node) [adoptNode](https://dom.spec.whatwg.org/#dom-document-adoptnode)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-document-adoptnode-node-node));

\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Attr](https://dom.spec.whatwg.org/#attr) [createAttribute](https://dom.spec.whatwg.org/#dom-document-createattribute)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-document-createattribute-localname-localname));
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Attr](https://dom.spec.whatwg.org/#attr) [createAttributeNS](https://dom.spec.whatwg.org/#dom-document-createattributens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-document-createattributens-namespace-qualifiedname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-document-createattributens-namespace-qualifiedname-qualifiedname));

\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Event](https://dom.spec.whatwg.org/#event) [createEvent](https://dom.spec.whatwg.org/#dom-document-createevent)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `interface`[](https://dom.spec.whatwg.org/#dom-document-createevent-interface-interface)); // legacy

\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Range](https://dom.spec.whatwg.org/#range) [createRange](https://dom.spec.whatwg.org/#dom-document-createrange)();

// NodeFilter.SHOW_ALL = 0xFFFFFFFF
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [NodeIterator](https://dom.spec.whatwg.org/#nodeiterator) [createNodeIterator](https://dom.spec.whatwg.org/#dom-document-createnodeiterator)([Node](https://dom.spec.whatwg.org/#node) `root`[](https://dom.spec.whatwg.org/#dom-document-createnodeiterator-root-whattoshow-filter-root), optional [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `whatToShow`[](https://dom.spec.whatwg.org/#dom-document-createnodeiterator-root-whattoshow-filter-whattoshow) = 0xFFFFFFFF, optional [NodeFilter](https://dom.spec.whatwg.org/#callbackdef-nodefilter)? `filter`[](https://dom.spec.whatwg.org/#dom-document-createnodeiterator-root-whattoshow-filter-filter) = null);
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [TreeWalker](https://dom.spec.whatwg.org/#treewalker) [createTreeWalker](https://dom.spec.whatwg.org/#dom-document-createtreewalker)([Node](https://dom.spec.whatwg.org/#node) `root`[](https://dom.spec.whatwg.org/#dom-document-createtreewalker-root-whattoshow-filter-root), optional [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `whatToShow`[](https://dom.spec.whatwg.org/#dom-document-createtreewalker-root-whattoshow-filter-whattoshow) = 0xFFFFFFFF, optional [NodeFilter](https://dom.spec.whatwg.org/#callbackdef-nodefilter)? `filter`[](https://dom.spec.whatwg.org/#dom-document-createtreewalker-root-whattoshow-filter-filter) = null);
};

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `XMLDocument` : [Document](https://dom.spec.whatwg.org/#document) {};

dictionary `ElementCreationOptions` {
[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `is`;
};

`[Document](https://dom.spec.whatwg.org/#document)` [nodes](https://dom.spec.whatwg.org/#concept-node) are simply known as documents.

Each [document](https://dom.spec.whatwg.org/#concept-document) has an associated encoding (an [encoding](https://encoding.spec.whatwg.org/#encoding)), content type (a string), URL (a [URL](https://url.spec.whatwg.org/#concept-url)), origin (an [origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin)), type ("`xml`" or "`html`"), and mode ("`no-quirks`", "`quirks`", or "`limited-quirks`"). [\[ENCODING\]](https://dom.spec.whatwg.org/#biblio-encoding) [\[URL\]](https://dom.spec.whatwg.org/#biblio-url) [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

Unless stated otherwise, a [document](https://dom.spec.whatwg.org/#concept-document)’s [encoding](https://dom.spec.whatwg.org/#concept-document-encoding) is the [utf-8](https://encoding.spec.whatwg.org/#utf-8) [encoding](https://encoding.spec.whatwg.org/#encoding), [content type](https://dom.spec.whatwg.org/#concept-document-content-type) is "`application/xml`", [URL](https://dom.spec.whatwg.org/#concept-document-url) is "`about:blank`", [origin](https://dom.spec.whatwg.org/#concept-document-origin) is an [opaque origin](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-opaque), [type](https://dom.spec.whatwg.org/#concept-document-type) is "`xml`", and its [mode](https://dom.spec.whatwg.org/#concept-document-mode) is "`no-quirks`".

A [document](https://dom.spec.whatwg.org/#concept-document) is said to be an XML document if its [type](https://dom.spec.whatwg.org/#concept-document-type) is "`xml`"; otherwise an HTML document. Whether a [document](https://dom.spec.whatwg.org/#concept-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document) or an [XML document](https://dom.spec.whatwg.org/#xml-document) affects the behavior of certain APIs.

A [document](https://dom.spec.whatwg.org/#concept-document) is said to be in no-quirks mode if its [mode](https://dom.spec.whatwg.org/#concept-document-mode) is "`no-quirks`", quirks mode[](https://dom.spec.whatwg.org/#concept-document-quirks) if its [mode](https://dom.spec.whatwg.org/#concept-document-mode) is "`quirks`", and limited-quirks mode if its [mode](https://dom.spec.whatwg.org/#concept-document-mode) is "`limited-quirks`".

The [mode](https://dom.spec.whatwg.org/#concept-document-mode) is only ever changed from the default for [documents](https://dom.spec.whatwg.org/#concept-document) created by the [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) based on the presence, absence, or value of the DOCTYPE string, and by a new [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#browsing-context) (initial "`about:blank`"). [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

[No-quirks mode](https://dom.spec.whatwg.org/#concept-document-no-quirks) was originally known as "standards mode" and [limited-quirks mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks) was once known as "almost standards mode". They have been renamed because their details are now defined by standards. (And because Ian Hickson vetoed their original names on the basis that they are nonsensical.)

A [document](https://dom.spec.whatwg.org/#concept-document)’s [get the parent](https://dom.spec.whatwg.org/#get-the-parent) algorithm, given an event, returns null if event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute value is "`load`" or [document](https://dom.spec.whatwg.org/#concept-document) does not have a [browsing context](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-bc); otherwise the [document](https://dom.spec.whatwg.org/#concept-document)’s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global).

---

[Document/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document/Document "The Document constructor creates a new Document object that is a web page loaded in the browser and serving as an entry point into the page's content.")

In all current engines.

Firefox20+Safari8+Chrome60+

---

Opera47+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android20+iOS Safari8+Chrome for Android60+Android WebView60+Samsung Internet8.0+Opera Mobile44+

`` document = new `[Document()](https://dom.spec.whatwg.org/#dom-document-document)`  ``

Returns a new [document](https://dom.spec.whatwg.org/#concept-document).

[Document/implementation](https://developer.mozilla.org/en-US/docs/Web/API/Document/implementation 'The Document.implementation property returns a DOMImplementation object associated with the current document.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` document . `[implementation](https://dom.spec.whatwg.org/#dom-document-implementation)`  ``

Returns document’s `[DOMImplementation](https://dom.spec.whatwg.org/#domimplementation)` object.

[Document/URL](https://developer.mozilla.org/en-US/docs/Web/API/Document/URL 'The URL read-only property of the Document interface returns the document location as a string.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera3+Edge79+

---

Edge (Legacy)12+IE4+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`` document . `[URL](https://dom.spec.whatwg.org/#dom-document-url)`  ``

[Document/documentURI](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURI 'The documentURI read-only property of the Document interface returns the document location as a string.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` document . `[documentURI](https://dom.spec.whatwg.org/#dom-document-documenturi)`  ``

Returns document’s [URL](https://dom.spec.whatwg.org/#concept-document-url).

[Document/compatMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/compatMode 'The Document.compatMode read-only property indicates whether the document is rendered in Quirks mode or Standards mode.')

In all current engines.

Firefox1+Safari3.1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari2+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` document . `[compatMode](https://dom.spec.whatwg.org/#dom-document-compatmode)`  ``

Returns the string "`BackCompat`" if document’s [mode](https://dom.spec.whatwg.org/#concept-document-mode) is "`quirks`"; otherwise "`CSS1Compat`".

[Document/characterSet](https://developer.mozilla.org/en-US/docs/Web/API/Document/characterSet "The Document.characterSet read-only property returns the character encoding of the document that it's currently rendered with.")

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera MobileYes

`` document . `[characterSet](https://dom.spec.whatwg.org/#dom-document-characterset)`  ``

Returns document’s [encoding](https://dom.spec.whatwg.org/#concept-document-encoding).

[Document/contentType](https://developer.mozilla.org/en-US/docs/Web/API/Document/contentType 'The Document.contentType read-only property returns the MIME type that the document is being rendered as. This may come from HTTP headers or other sources of MIME information, and might be affected by automatic type conversions performed by either the browser or extensions.')

In all current engines.

Firefox1+Safari9+Chrome36+

---

Opera23+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android4+iOS Safari9+Chrome for Android36+Android WebView37+Samsung Internet3.0+Opera Mobile24+

`` document . `[contentType](https://dom.spec.whatwg.org/#dom-document-contenttype)`  ``

Returns document’s [content type](https://dom.spec.whatwg.org/#concept-document-content-type).

The `new Document()` constructor steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [origin](https://dom.spec.whatwg.org/#concept-document-origin) to the [origin](https://dom.spec.whatwg.org/#concept-document-origin) of [current global object](https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object)’s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window). [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

Unlike `[createDocument()](https://dom.spec.whatwg.org/#dom-domimplementation-createdocument)`, this constructor does not return an `[XMLDocument](https://dom.spec.whatwg.org/#xmldocument)` object, but a [document](https://dom.spec.whatwg.org/#concept-document) (`[Document](https://dom.spec.whatwg.org/#document)` object).

The `implementation` getter steps are to return the `[DOMImplementation](https://dom.spec.whatwg.org/#domimplementation)` object that is associated with [this](https://webidl.spec.whatwg.org/#this).

The `URL` and `documentURI` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [URL](https://dom.spec.whatwg.org/#concept-document-url), [serialized](https://url.spec.whatwg.org/#concept-url-serializer).

The `compatMode` getter steps are to return "`BackCompat`" if [this](https://webidl.spec.whatwg.org/#this)’s [mode](https://dom.spec.whatwg.org/#concept-document-mode) is "`quirks`"; otherwise "`CSS1Compat`".

The `characterSet`, `charset`, and `inputEncoding` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [encoding](https://dom.spec.whatwg.org/#concept-document-encoding)’s [name](https://encoding.spec.whatwg.org/#name).

The `contentType` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [content type](https://dom.spec.whatwg.org/#concept-document-content-type).

---

[Document/doctype](https://developer.mozilla.org/en-US/docs/Web/API/Document/doctype 'Returns the Document Type Declaration (DTD) associated with current document. The returned object implements the DocumentType interface. Use DOMImplementation.createDocumentType() to create a DocumentType.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

document . `[doctype](https://dom.spec.whatwg.org/#dom-document-doctype)`

Returns the [doctype](https://dom.spec.whatwg.org/#concept-doctype) or null if there is none.

[Document/documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement 'Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

document . `[documentElement](https://dom.spec.whatwg.org/#dom-document-documentelement)`

Returns the [document element](https://dom.spec.whatwg.org/#document-element).

[Document/getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName 'The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera5.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

collection = document . `[getElementsByTagName(qualifiedName)](https://dom.spec.whatwg.org/#dom-document-getelementsbytagname)`

If qualifiedName is "`*`" returns a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` of all [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element).

Otherwise, returns a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` of all [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [qualified name](https://dom.spec.whatwg.org/#concept-element-qualified-name) is qualifiedName. (Matches case-insensitively against [elements](https://dom.spec.whatwg.org/#concept-element) in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) within an [HTML document](https://dom.spec.whatwg.org/#html-document).)

[Document/getElementsByTagNameNS](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagNameNS 'Returns a list of elements with the given tag name belonging to the given namespace. The complete document is searched, including the root node.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

collection = document . `[getElementsByTagNameNS(namespace, localName)](https://dom.spec.whatwg.org/#dom-document-getelementsbytagnamens)`

If namespace and localName are "`*`" returns a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` of all [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element).

If only namespace is "`*`" returns a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` of all [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is localName.

If only localName is "`*`" returns a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` of all [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is namespace.

Otherwise, returns a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` of all [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) [elements](https://dom.spec.whatwg.org/#concept-element) whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is localName.

[Document/getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName 'The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).')

In all current engines.

Firefox3+Safari3.1+Chrome1+

---

Opera9.5+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari2+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

collection = document . `[getElementsByClassName(classNames)](https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname)`

[Element/getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName 'The Element method getElementsByClassName() returns a live HTMLCollection which contains every descendant element which has the specified class name or names.')

In all current engines.

Firefox3+Safari6+Chrome1+

---

Opera9.5+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android4+iOS Safari6+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

collection = element . `[getElementsByClassName(classNames)](https://dom.spec.whatwg.org/#dom-element-getelementsbyclassname)`

Returns a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` of the [elements](https://dom.spec.whatwg.org/#concept-element) in the object on which the method was invoked (a [document](https://dom.spec.whatwg.org/#concept-document) or an [element](https://dom.spec.whatwg.org/#concept-element)) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

The `doctype` getter steps are to return the [child](https://dom.spec.whatwg.org/#concept-tree-child) of [this](https://webidl.spec.whatwg.org/#this) that is a [doctype](https://dom.spec.whatwg.org/#concept-doctype); otherwise null.

The `documentElement` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [document element](https://dom.spec.whatwg.org/#document-element).

The `getElementsByTagName(qualifiedName)` method steps are to return the [list of elements with qualified name qualifiedName](https://dom.spec.whatwg.org/#concept-getelementsbytagname) for [this](https://webidl.spec.whatwg.org/#this).

Thus, in an [HTML document](https://dom.spec.whatwg.org/#html-document), `document.getElementsByTagName("FOO")` will match `<FOO>` elements that are not in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), and `<foo>` elements that are in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), but not `<FOO>` elements that are in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace).

The `getElementsByTagNameNS(namespace, localName)` method steps are to return the [list of elements with namespace namespace and local name localName](https://dom.spec.whatwg.org/#concept-getelementsbytagnamens) for [this](https://webidl.spec.whatwg.org/#this).

The `getElementsByClassName(classNames)` method steps are to return the [list of elements with class names classNames](https://dom.spec.whatwg.org/#concept-getelementsbyclassname) for [this](https://webidl.spec.whatwg.org/#this).

[](https://dom.spec.whatwg.org/#example-5ffcda00)Given the following XHTML fragment:

```
<div id="example">
  <p id="p1" class="aaa bbb"/>
  <p id="p2" class="aaa ccc"/>
  <p id="p3" class="bbb ccc"/>
</div>
```

A call to `document.getElementById("example").getElementsByClassName("aaa")` would return a `[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection)` with the two paragraphs `p1` and `p2` in it.

A call to `getElementsByClassName("ccc bbb")` would only return one node, however, namely `p3`. A call to `document.getElementById("example").getElementsByClassName("bbb ccc ")` would return the same thing.

A call to `getElementsByClassName("aaa,bbb")` would return no nodes; none of the elements above are in the `aaa,bbb` class.

---

[Document/createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera6+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`element = document . [createElement(localName [, options])](https://dom.spec.whatwg.org/#dom-document-createelement)`

Returns an [element](https://dom.spec.whatwg.org/#concept-element) with localName as [local name](https://dom.spec.whatwg.org/#concept-element-local-name) (if document is an [HTML document](https://dom.spec.whatwg.org/#html-document), localName gets lowercased). The [element](https://dom.spec.whatwg.org/#concept-element)’s [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) when document is an [HTML document](https://dom.spec.whatwg.org/#html-document) or document’s [content type](https://dom.spec.whatwg.org/#concept-document-content-type) is "`application/xhtml+xml`"; otherwise null.

If localName does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` will be thrown.

When supplied, options’s `[is](https://dom.spec.whatwg.org/#dom-elementcreationoptions-is)` can be used to create a [customized built-in element](https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element).

[Document/createElementNS](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS 'Creates an element with the specified namespace URI and qualified name.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`element = document . [createElementNS(namespace, qualifiedName [, options])](https://dom.spec.whatwg.org/#dom-document-createelementns)`

Returns an [element](https://dom.spec.whatwg.org/#concept-element) with [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) namespace. Its [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) will be everything before U+003A (:) in qualifiedName or null. Its [local name](https://dom.spec.whatwg.org/#concept-element-local-name) will be everything after U+003A (:) in qualifiedName or qualifiedName.

If qualifiedName does not match the `[QName](https://www.w3.org/TR/xml-names/#NT-QName)` production an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` will be thrown.

If one of the following conditions is true a "`[NamespaceError](https://webidl.spec.whatwg.org/#namespaceerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` will be thrown:

-   [Namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) is not null and namespace is the empty string.
-   [Namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) is "`xml`" and namespace is not the [XML namespace](https://infra.spec.whatwg.org/#xml-namespace).
-   qualifiedName or [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) is "`xmlns`" and namespace is not the [XMLNS namespace](https://infra.spec.whatwg.org/#xmlns-namespace).
-   namespace is the [XMLNS namespace](https://infra.spec.whatwg.org/#xmlns-namespace) and neither qualifiedName nor [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) is "`xmlns`".

When supplied, options’s `[is](https://dom.spec.whatwg.org/#dom-elementcreationoptions-is)` can be used to create a [customized built-in element](https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element).

[Document/createDocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment 'Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` documentFragment = document . `[createDocumentFragment()](https://dom.spec.whatwg.org/#dom-document-createdocumentfragment)`  ``

Returns a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node).

[Document/createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode 'Creates a new Text node. This method can be used to escape HTML characters.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`` text = document . `[createTextNode(data)](https://dom.spec.whatwg.org/#dom-document-createtextnode)`  ``

Returns a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data.

`` text = document . `[createCDATASection(data)](https://dom.spec.whatwg.org/#dom-document-createcdatasection)`  ``

Returns a `[CDATASection](https://dom.spec.whatwg.org/#cdatasection)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data.

[Document/createCDATASection](https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection 'createCDATASection() creates a new CDATA section node, and returns it.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[Document/createComment](https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment 'createComment() creates a new comment node, and returns it.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` comment = document . `[createComment(data)](https://dom.spec.whatwg.org/#dom-document-createcomment)`  ``

Returns a `[Comment](https://dom.spec.whatwg.org/#comment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data.

[Document/createProcessingInstruction](https://developer.mozilla.org/en-US/docs/Web/API/Document/createProcessingInstruction 'createProcessingInstruction() generates a new processing instruction node and returns it.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` processingInstruction = document . `[createProcessingInstruction(target, data)](https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction)`  ``

Returns a `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)` [node](https://dom.spec.whatwg.org/#concept-node) whose [target](https://dom.spec.whatwg.org/#concept-pi-target) is target and [data](https://dom.spec.whatwg.org/#concept-cd-data) is data. If target does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` will be thrown. If data contains "`?>`" an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` will be thrown.

The element interface for any name and namespace is `[Element](https://dom.spec.whatwg.org/#element)`, unless stated otherwise.

The HTML Standard will, e.g., define that for `html` and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), the `[HTMLHtmlElement](https://html.spec.whatwg.org/multipage/semantics.html#htmlhtmlelement)` interface is used. [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

The `createElement(localName, options)` method steps are:

1.  If localName does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If [this](https://webidl.spec.whatwg.org/#this) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then set localName to localName in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
3.  Let is be null.
4.  If options is a [dictionary](https://webidl.spec.whatwg.org/#dfn-dictionary) and options\["`[is](https://dom.spec.whatwg.org/#dom-elementcreationoptions-is)`"\] [exists](https://infra.spec.whatwg.org/#map-exists), then set is to it.
5.  Let namespace be the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), if [this](https://webidl.spec.whatwg.org/#this) is an [HTML document](https://dom.spec.whatwg.org/#html-document) or [this](https://webidl.spec.whatwg.org/#this)’s [content type](https://dom.spec.whatwg.org/#concept-document-content-type) is "`application/xhtml+xml`"; otherwise null.
6.  Return the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given [this](https://webidl.spec.whatwg.org/#this), localName, namespace, null, is, and with the synchronous custom elements flag set.

The internal `createElementNS` steps, given document, namespace, qualifiedName, and options, are as follows:

1.  Let namespace, prefix, and localName be the result of passing namespace and qualifiedName to [validate and extract](https://dom.spec.whatwg.org/#validate-and-extract).
2.  Let is be null.
3.  If options is a [dictionary](https://webidl.spec.whatwg.org/#dfn-dictionary) and options\["`[is](https://dom.spec.whatwg.org/#dom-elementcreationoptions-is)`"\] [exists](https://infra.spec.whatwg.org/#map-exists), then set is to it.
4.  Return the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given document, localName, namespace, prefix, is, and with the synchronous custom elements flag set.

The `createElementNS(namespace, qualifiedName, options)` method steps are to return the result of running the [internal `createElementNS` steps](https://dom.spec.whatwg.org/#internal-createelementns-steps), given [this](https://webidl.spec.whatwg.org/#this), namespace, qualifiedName, and options.

`[createElement()](https://dom.spec.whatwg.org/#dom-document-createelement)` and `[createElementNS()](https://dom.spec.whatwg.org/#dom-document-createelementns)`'s options parameter is allowed to be a string for web compatibility.

The `createDocumentFragment()` method steps are to return a new `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this).

The `createTextNode(data)` method steps are to return a new `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this).

No check is performed that data consists of characters that match the `[Char](https://www.w3.org/TR/xml/#NT-Char)` production.

The `createCDATASection(data)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If data contains the string "`]]>`", then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Return a new `[CDATASection](https://dom.spec.whatwg.org/#cdatasection)` [node](https://dom.spec.whatwg.org/#concept-node) with its [data](https://dom.spec.whatwg.org/#concept-cd-data) set to data and [node document](https://dom.spec.whatwg.org/#concept-node-document) set to [this](https://webidl.spec.whatwg.org/#this).

The method steps are to return a new `[Comment](https://dom.spec.whatwg.org/#comment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this).

No check is performed that data consists of characters that match the `[Char](https://www.w3.org/TR/xml/#NT-Char)` production or that it contains two adjacent hyphens or ends with a hyphen.

The `createProcessingInstruction(target, data)` method steps are:

1.  If target does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If data contains the string "`?>`", then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Return a new `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)` [node](https://dom.spec.whatwg.org/#concept-node), with [target](https://dom.spec.whatwg.org/#concept-pi-target) set to target, [data](https://dom.spec.whatwg.org/#concept-cd-data) set to data, and [node document](https://dom.spec.whatwg.org/#concept-node-document) set to [this](https://webidl.spec.whatwg.org/#this).

No check is performed that target contains "`xml`" or "`:`", or that data contains characters that match the `[Char](https://www.w3.org/TR/xml/#NT-Char)` production.

---

[Document/importNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode "The Document object's importNode() method creates a copy of a Node or DocumentFragment from another document, to be inserted into the current document later.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

clone = document . [importNode(node \[, deep = false\])](https://dom.spec.whatwg.org/#dom-document-importnode)

Returns a copy of node. If deep is true, the copy also includes the node’s [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant).

If node is a [document](https://dom.spec.whatwg.org/#concept-document) or a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), throws a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

[Document/adoptNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode "Document.adoptNode() transfers a node from another document into the method's document. The adopted node and its subtree is removed from its original document (if any), and its ownerDocument is changed to the current document. The node can then be inserted into the current document.")

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

node = document . `[adoptNode(node)](https://dom.spec.whatwg.org/#dom-document-adoptnode)`

Moves node from another [document](https://dom.spec.whatwg.org/#concept-document) and returns it.

If node is a [document](https://dom.spec.whatwg.org/#concept-document), throws a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` or, if node is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), throws a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

The `importNode(node, deep)` method steps are:

1.  If node is a [document](https://dom.spec.whatwg.org/#concept-document) or [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Return a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of node, with [this](https://webidl.spec.whatwg.org/#this) and the _clone children flag_ set if deep is true.

[Specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define adopting steps for all or some [nodes](https://dom.spec.whatwg.org/#concept-node). The algorithm is passed node and oldDocument, as indicated in the [adopt](https://dom.spec.whatwg.org/#concept-node-adopt) algorithm.

To adopt a node into a document, run these steps:

1.  Let oldDocument be node’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  If node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is non-null, then [remove](https://dom.spec.whatwg.org/#concept-node-remove) node.
3.  If document is not oldDocument, then:

    1.  For each inclusiveDescendant in node’s [shadow-including inclusive descendants](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant):

        1.  Set inclusiveDescendant’s [node document](https://dom.spec.whatwg.org/#concept-node-document) to document.
        2.  If inclusiveDescendant is an [element](https://dom.spec.whatwg.org/#concept-element), then set the [node document](https://dom.spec.whatwg.org/#concept-node-document) of each [attribute](https://dom.spec.whatwg.org/#concept-attribute) in inclusiveDescendant’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) to document.

    2.  For each inclusiveDescendant in node’s [shadow-including inclusive descendants](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant) that is [custom](https://dom.spec.whatwg.org/#concept-element-custom), [enqueue a custom element callback reaction](https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction) with inclusiveDescendant, callback name "`adoptedCallback`", and an argument list containing oldDocument and document.
    3.  For each inclusiveDescendant in node’s [shadow-including inclusive descendants](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant), in [shadow-including tree order](https://dom.spec.whatwg.org/#concept-shadow-including-tree-order), run the [adopting steps](https://dom.spec.whatwg.org/#concept-node-adopt-ext) with inclusiveDescendant and oldDocument.

The `adoptNode(node)` method steps are:

1.  If node is a [document](https://dom.spec.whatwg.org/#concept-document), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If node is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If node is a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) is non-null, then return.
4.  [Adopt](https://dom.spec.whatwg.org/#concept-node-adopt) node into [this](https://webidl.spec.whatwg.org/#this).
5.  Return node.

---

[Document/createAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute 'The Document.createAttribute() method creates a new attribute node, and returns it. The object created a node implementing the Attr interface. The DOM does not enforce what sort of attributes can be added to a particular element in this manner.')

In all current engines.

Firefox44+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android44+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `createAttribute(localName)` method steps are:

1.  If localName does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production in XML, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If [this](https://webidl.spec.whatwg.org/#this) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then set localName to localName in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
3.  Return a new [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this).

The `createAttributeNS(namespace, qualifiedName)` method steps are:

1.  Let namespace, prefix, and localName be the result of passing namespace and qualifiedName to [validate and extract](https://dom.spec.whatwg.org/#validate-and-extract).
2.  Return a new [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace, [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix) is prefix, [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName, and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this).

---

[Document/createEvent](https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent 'Creates an event of the type specified. The returned object should be first initialized and can then be passed to EventTarget.dispatchEvent.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera7+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `createEvent(interface)` method steps are:

1.  Let constructor be null.
2.  If interface is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for any of the strings in the first column in the following table, then set constructor to the interface in the second column on the same row as the matching string:

    String

    Interface

    Notes

    "`beforeunloadevent`"

    `[BeforeUnloadEvent](https://html.spec.whatwg.org/multipage/browsing-the-web.html#beforeunloadevent)`

    [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

    "`compositionevent`"

    `[CompositionEvent](https://www.w3.org/TR/uievents/#compositionevent)`

    [\[UIEVENTS\]](https://dom.spec.whatwg.org/#biblio-uievents)

    "`customevent`"

    `[CustomEvent](https://dom.spec.whatwg.org/#customevent)`

    "`devicemotionevent`"

    `[DeviceMotionEvent](https://w3c.github.io/deviceorientation/spec-source-orientation.html#devicemotion)`

    [\[DEVICE-ORIENTATION\]](https://dom.spec.whatwg.org/#biblio-device-orientation)

    "`deviceorientationevent`"

    `[DeviceOrientationEvent](https://w3c.github.io/deviceorientation/spec-source-orientation.html#devicemotion)`

    "`dragevent`"

    `[DragEvent](https://html.spec.whatwg.org/multipage/dnd.html#dragevent)`

    [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

    "`event`"

    `[Event](https://dom.spec.whatwg.org/#event)`

    "`events`"

    "`focusevent`"

    `[FocusEvent](https://www.w3.org/TR/uievents/#focusevent)`

    [\[UIEVENTS\]](https://dom.spec.whatwg.org/#biblio-uievents)

    "`hashchangeevent`"

    `[HashChangeEvent](https://html.spec.whatwg.org/multipage/browsing-the-web.html#hashchangeevent)`

    [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

    "`htmlevents`"

    `[Event](https://dom.spec.whatwg.org/#event)`

    "`keyboardevent`"

    `[KeyboardEvent](https://www.w3.org/TR/uievents/#keyboardevent)`

    [\[UIEVENTS\]](https://dom.spec.whatwg.org/#biblio-uievents)

    "`messageevent`"

    `[MessageEvent](https://html.spec.whatwg.org/multipage/comms.html#messageevent)`

    [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

    "`mouseevent`"

    `[MouseEvent](https://www.w3.org/TR/uievents/#mouseevent)`

    [\[UIEVENTS\]](https://dom.spec.whatwg.org/#biblio-uievents)

    "`mouseevents`"

    "`storageevent`"

    `[StorageEvent](https://html.spec.whatwg.org/multipage/webstorage.html#storageevent)`

    [\[HTML\]](https://dom.spec.whatwg.org/#biblio-html)

    "`svgevents`"

    `[Event](https://dom.spec.whatwg.org/#event)`

    "`textevent`"

    `[CompositionEvent](https://www.w3.org/TR/uievents/#compositionevent)`

    [\[UIEVENTS\]](https://dom.spec.whatwg.org/#biblio-uievents)

    "`touchevent`"

    `[TouchEvent](https://w3c.github.io/touch-events/#idl-def-touchevent)`

    [\[TOUCH-EVENTS\]](https://dom.spec.whatwg.org/#biblio-touch-events)

    "`uievent`"

    `[UIEvent](https://www.w3.org/TR/uievents/#uievent)`

    [\[UIEVENTS\]](https://dom.spec.whatwg.org/#biblio-uievents)

    "`uievents`"

3.  If constructor is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
4.  If the interface indicated by constructor is not exposed on the [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global) of [this](https://webidl.spec.whatwg.org/#this), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

    Typically user agents disable support for touch events in some configurations, in which case this clause would be triggered for the interface `[TouchEvent](https://w3c.github.io/touch-events/#idl-def-touchevent)`.

5.  Let event be the result of [creating an event](https://dom.spec.whatwg.org/#concept-event-create) given constructor.
6.  Initialize event’s `[type](https://dom.spec.whatwg.org/#dom-event-type)` attribute to the empty string.
7.  Initialize event’s `[timeStamp](https://dom.spec.whatwg.org/#dom-event-timestamp)` attribute to the result of calling [current high resolution time](https://w3c.github.io/hr-time/#dfn-current-high-resolution-time) with [this](https://webidl.spec.whatwg.org/#this)’s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global).
8.  Initialize event’s `[isTrusted](https://dom.spec.whatwg.org/#dom-event-istrusted)` attribute to false.
9.  Unset event’s [initialized flag](https://dom.spec.whatwg.org/#initialized-flag).
10. Return event.

[Event](https://dom.spec.whatwg.org/#concept-event) constructors ought to be used instead.

---

[Document/createRange](https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange 'The Document.createRange() method returns a new Range object.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `createRange()` method steps are to return a new [live range](https://dom.spec.whatwg.org/#concept-live-range) with ([this](https://webidl.spec.whatwg.org/#this), 0) as its [start](https://dom.spec.whatwg.org/#concept-range-start) an [end](https://dom.spec.whatwg.org/#concept-range-end).

The `[Range()](https://dom.spec.whatwg.org/#dom-range-range)` constructor can be used instead.

---

[Document/createNodeIterator](https://developer.mozilla.org/en-US/docs/Web/API/Document/createNodeIterator 'Returns a new NodeIterator object.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera MobileYes

The `createNodeIterator(root, whatToShow, filter)` method steps are:

1.  Let iterator be a new `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` object.
2.  Set iterator’s [root](https://dom.spec.whatwg.org/#concept-traversal-root) and iterator’s [reference](https://dom.spec.whatwg.org/#nodeiterator-reference) to root.
3.  Set iterator’s [pointer before reference](https://dom.spec.whatwg.org/#nodeiterator-pointer-before-reference) to true.
4.  Set iterator’s [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow) to whatToShow.
5.  Set iterator’s [filter](https://dom.spec.whatwg.org/#concept-traversal-filter) to filter.
6.  Return iterator.

[Document/createTreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker 'The Document.createTreeWalker() creator method returns a newly created TreeWalker object.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `createTreeWalker(root, whatToShow, filter)` method steps are:

1.  Let walker be a new `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` object.
2.  Set walker’s [root](https://dom.spec.whatwg.org/#concept-traversal-root) and walker’s [current](https://dom.spec.whatwg.org/#treewalker-current) to root.
3.  Set walker’s [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow) to whatToShow.
4.  Set walker’s [filter](https://dom.spec.whatwg.org/#concept-traversal-filter) to filter.
5.  Return walker.

#### 4.5.1. Interface `[DOMImplementation](https://dom.spec.whatwg.org/#domimplementation)`[](https://dom.spec.whatwg.org/#interface-domimplementation)

[DOMImplementation](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation 'The DOMImplementation interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the Document.implementation property.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

User agents must create a `[DOMImplementation](https://dom.spec.whatwg.org/#domimplementation)` object whenever a [document](https://dom.spec.whatwg.org/#concept-document) is created and associate it with that [document](https://dom.spec.whatwg.org/#concept-document).

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `DOMImplementation` {
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [DocumentType](https://dom.spec.whatwg.org/#documenttype) [createDocumentType](https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype-qualifiedname-publicid-systemid-qualifiedname), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `publicId`[](https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype-qualifiedname-publicid-systemid-publicid), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `systemId`[](https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype-qualifiedname-publicid-systemid-systemid));
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [XMLDocument](https://dom.spec.whatwg.org/#xmldocument) [createDocument](https://dom.spec.whatwg.org/#dom-domimplementation-createdocument)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-domimplementation-createdocument-namespace-qualifiedname-doctype-namespace), \[[LegacyNullToEmptyString](https://webidl.spec.whatwg.org/#LegacyNullToEmptyString)\] [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-domimplementation-createdocument-namespace-qualifiedname-doctype-qualifiedname), optional [DocumentType](https://dom.spec.whatwg.org/#documenttype)? `doctype`[](https://dom.spec.whatwg.org/#dom-domimplementation-createdocument-namespace-qualifiedname-doctype-doctype) = null);
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Document](https://dom.spec.whatwg.org/#document) [createHTMLDocument](https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument)(optional [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `title`[](https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument-title-title));

[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [hasFeature](https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature)(); // useless; always returns true
};

[DOMImplementation/createDocumentType](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType 'The DOMImplementation.createDocumentType() method returns a DocumentType object which can either be used with DOMImplementation.createDocument upon document creation or can be put into the document via methods like Node.insertBefore() or Node.replaceChild().')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` doctype = document . `[implementation](https://dom.spec.whatwg.org/#dom-document-implementation)` . `[createDocumentType(qualifiedName, publicId, systemId)](https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype)`  ``

Returns a [doctype](https://dom.spec.whatwg.org/#concept-doctype), with the given qualifiedName, publicId, and systemId. If qualifiedName does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production, an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` is thrown, and if it does not match the `[QName](https://www.w3.org/TR/xml-names/#NT-QName)` production, a "`[NamespaceError](https://webidl.spec.whatwg.org/#namespaceerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` is thrown.

[DOMImplementation/createDocument](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument 'The DOMImplementation.createDocument() method creates and returns an XMLDocument.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` doc = document . `[implementation](https://dom.spec.whatwg.org/#dom-document-implementation)` . [createDocument(namespace, qualifiedName [, doctype = null])](https://dom.spec.whatwg.org/#dom-domimplementation-createdocument) ``

Returns an `[XMLDocument](https://dom.spec.whatwg.org/#xmldocument)`, with a [document element](https://dom.spec.whatwg.org/#document-element) whose [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is qualifiedName and whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is namespace (unless qualifiedName is the empty string), and with doctype, if it is given, as its [doctype](https://dom.spec.whatwg.org/#concept-doctype).

This method throws the same exceptions as the `[createElementNS()](https://dom.spec.whatwg.org/#dom-document-createelementns)` method, when invoked with namespace and qualifiedName.

[DOMImplementation/createHTMLDocument](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument 'The DOMImplementation.createHTMLDocument() method creates a new HTML Document.')

In all current engines.

Firefox4+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`` doc = document . `[implementation](https://dom.spec.whatwg.org/#dom-document-implementation)` . [createHTMLDocument([title])](https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument) ``

Returns a [document](https://dom.spec.whatwg.org/#concept-document), with a basic [tree](https://dom.spec.whatwg.org/#concept-tree) already constructed including a `[title](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element)` element, unless the title argument is omitted.

The `createDocumentType(qualifiedName, publicId, systemId)` method steps are:

1.  [Validate](https://dom.spec.whatwg.org/#validate) qualifiedName.
2.  Return a new [doctype](https://dom.spec.whatwg.org/#concept-doctype), with qualifiedName as its [name](https://dom.spec.whatwg.org/#concept-doctype-name), publicId as its [public ID](https://dom.spec.whatwg.org/#concept-doctype-publicid), and systemId as its [system ID](https://dom.spec.whatwg.org/#concept-doctype-systemid), and with its [node document](https://dom.spec.whatwg.org/#concept-node-document) set to the associated [document](https://dom.spec.whatwg.org/#concept-document) of [this](https://webidl.spec.whatwg.org/#this).

No check is performed that publicId code points match the `[PubidChar](https://www.w3.org/TR/xml/#NT-PubidChar)` production or that systemId does not contain both a '`"`' and a "`'`".

The `createDocument(namespace, qualifiedName, doctype)` method steps are:

1.  Let document be a new `[XMLDocument](https://dom.spec.whatwg.org/#xmldocument)`.
2.  Let element be null.
3.  If qualifiedName is not the empty string, then set element to the result of running the [internal `createElementNS` steps](https://dom.spec.whatwg.org/#internal-createelementns-steps), given document, namespace, qualifiedName, and an empty dictionary.
4.  If doctype is non-null, [append](https://dom.spec.whatwg.org/#concept-node-append) doctype to document.
5.  If element is non-null, [append](https://dom.spec.whatwg.org/#concept-node-append) element to document.
6.  document’s [origin](https://dom.spec.whatwg.org/#concept-document-origin) is [this](https://webidl.spec.whatwg.org/#this)’s associated [document](https://dom.spec.whatwg.org/#concept-document)’s [origin](https://dom.spec.whatwg.org/#concept-document-origin).
7.  document’s [content type](https://dom.spec.whatwg.org/#concept-document-content-type) is determined by namespace:

    [HTML namespace](https://infra.spec.whatwg.org/#html-namespace)

    `application/xhtml+xml`

    [SVG namespace](https://infra.spec.whatwg.org/#svg-namespace)

    `image/svg+xml`

    Any other namespace

    `application/xml`

8.  Return document.

The `createHTMLDocument(title)` method steps are:

1.  Let doc be a new [document](https://dom.spec.whatwg.org/#concept-document) that is an [HTML document](https://dom.spec.whatwg.org/#html-document).
2.  Set doc’s [content type](https://dom.spec.whatwg.org/#concept-document-content-type) to "`text/html`".
3.  [Append](https://dom.spec.whatwg.org/#concept-node-append) a new [doctype](https://dom.spec.whatwg.org/#concept-doctype), with "`html`" as its [name](https://dom.spec.whatwg.org/#concept-doctype-name) and with its [node document](https://dom.spec.whatwg.org/#concept-node-document) set to doc, to doc.
4.  [Append](https://dom.spec.whatwg.org/#concept-node-append) the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given doc, `[html](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)`, and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), to doc.
5.  [Append](https://dom.spec.whatwg.org/#concept-node-append) the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given doc, `[head](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element)`, and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), to the `[html](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)` element created earlier.
6.  If title is given:

    1.  [Append](https://dom.spec.whatwg.org/#concept-node-append) the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given doc, `[title](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element)`, and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), to the `[head](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element)` element created earlier.
    2.  [Append](https://dom.spec.whatwg.org/#concept-node-append) a new `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), with its [data](https://dom.spec.whatwg.org/#concept-cd-data) set to title (which could be the empty string) and its [node document](https://dom.spec.whatwg.org/#concept-node-document) set to doc, to the `[title](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element)` element created earlier.

7.  [Append](https://dom.spec.whatwg.org/#concept-node-append) the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given doc, `[body](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)`, and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), to the `[html](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)` element created earlier.
8.  doc’s [origin](https://dom.spec.whatwg.org/#concept-document-origin) is [this](https://webidl.spec.whatwg.org/#this)’s associated [document](https://dom.spec.whatwg.org/#concept-document)’s [origin](https://dom.spec.whatwg.org/#concept-document-origin).
9.  Return doc.

The `hasFeature()` method steps are to return true.

`[hasFeature()](https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature)` originally would report whether the user agent claimed to support a given DOM feature, but experience proved it was not nearly as reliable or granular as simply checking whether the desired objects, attributes, or methods existed. As such, it is no longer to be used, but continues to exist (and simply returns true) so that old pages don’t stop working.

### 4.6. Interface `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`[](https://dom.spec.whatwg.org/#interface-documenttype)

[DocumentType](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType 'The DocumentType interface represents a Node containing a doctype.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `DocumentType` : [Node](https://dom.spec.whatwg.org/#node) {
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [name](https://dom.spec.whatwg.org/#dom-documenttype-name);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [publicId](https://dom.spec.whatwg.org/#dom-documenttype-publicid);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [systemId](https://dom.spec.whatwg.org/#dom-documenttype-systemid);
};

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)` [nodes](https://dom.spec.whatwg.org/#concept-node) are simply known as doctypes.

[Doctypes](https://dom.spec.whatwg.org/#concept-doctype) have an associated name, public ID, and system ID.

When a [doctype](https://dom.spec.whatwg.org/#concept-doctype) is created, its [name](https://dom.spec.whatwg.org/#concept-doctype-name) is always given. Unless explicitly given when a [doctype](https://dom.spec.whatwg.org/#concept-doctype) is created, its [public ID](https://dom.spec.whatwg.org/#concept-doctype-publicid) and [system ID](https://dom.spec.whatwg.org/#concept-doctype-systemid) are the empty string.

The `name` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [name](https://dom.spec.whatwg.org/#concept-doctype-name).

The `publicId` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [public ID](https://dom.spec.whatwg.org/#concept-doctype-publicid).

The `systemId` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [system ID](https://dom.spec.whatwg.org/#concept-doctype-systemid).

### 4.7. Interface `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)`[](https://dom.spec.whatwg.org/#interface-documentfragment)

[DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment 'The DocumentFragment interface represents a minimal document object that has no parent.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `DocumentFragment` : [Node](https://dom.spec.whatwg.org/#node) {
[constructor](https://dom.spec.whatwg.org/#dom-documentfragment-documentfragment)();
};

A `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node) has an associated host (null or an [element](https://dom.spec.whatwg.org/#concept-element) in a different [node tree](https://dom.spec.whatwg.org/#concept-node-tree)). It is null unless otherwise stated.

An object A is a host-including inclusive ancestor of an object B, if either A is an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of B, or if B’s [root](https://dom.spec.whatwg.org/#concept-tree-root) has a non-null [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) and A is a [host-including inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-host-including-inclusive-ancestor) of B’s [root](https://dom.spec.whatwg.org/#concept-tree-root)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).

The `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) concept is useful for HTML’s `[template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)` element and for [shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root), and impacts the [pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) and [replace](https://dom.spec.whatwg.org/#concept-node-replace) algorithms.

[DocumentFragment/DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/DocumentFragment 'The DocumentFragment() constructor returns a new, empty DocumentFragment object .')

In all current engines.

Firefox24+Safari8+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android24+iOS Safari8+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

`` tree = new `[DocumentFragment()](https://dom.spec.whatwg.org/#dom-documentfragment-documentfragment)`  ``

Returns a new `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node).

The `new DocumentFragment()` constructor steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document) to [current global object](https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object)’s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window).

### 4.8. Interface `[ShadowRoot](https://dom.spec.whatwg.org/#shadowroot)`[](https://dom.spec.whatwg.org/#interface-shadowroot)

[ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot "The ShadowRoot interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree.")

In all current engines.

Firefox63+Safari10.1+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10.3+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `ShadowRoot` : [DocumentFragment](https://dom.spec.whatwg.org/#documentfragment) {
readonly attribute [ShadowRootMode](https://dom.spec.whatwg.org/#enumdef-shadowrootmode) [mode](https://dom.spec.whatwg.org/#dom-shadowroot-mode);
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [delegatesFocus](https://dom.spec.whatwg.org/#dom-shadowroot-delegatesfocus);
readonly attribute [SlotAssignmentMode](https://dom.spec.whatwg.org/#enumdef-slotassignmentmode) [slotAssignment](https://dom.spec.whatwg.org/#dom-shadowroot-slotassignment);
readonly attribute [Element](https://dom.spec.whatwg.org/#element) [host](https://dom.spec.whatwg.org/#dom-shadowroot-host);
attribute [EventHandler](https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler) [onslotchange](https://dom.spec.whatwg.org/#dom-shadowroot-onslotchange);
};

enum `ShadowRootMode` { `"open"`[](https://dom.spec.whatwg.org/#dom-shadowrootmode-open), `"closed"`[](https://dom.spec.whatwg.org/#dom-shadowrootmode-closed) };
enum `SlotAssignmentMode` { `"manual"`[](https://dom.spec.whatwg.org/#dom-slotassignmentmode-manual), `"named"`[](https://dom.spec.whatwg.org/#dom-slotassignmentmode-named) };

`[ShadowRoot](https://dom.spec.whatwg.org/#shadowroot)` [nodes](https://dom.spec.whatwg.org/#concept-node) are simply known as shadow roots.

[Shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root) have an associated mode ("`open`" or "`closed`").

[ShadowRoot/delegatesFocus](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus 'The delegatesFocus read-only property of the ShadowRoot interface returns true if the shadow root delegates focus, and false otherwise.')

In all current engines.

Firefox94+Safari15+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android94+iOS Safari15+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

[Shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root) have an associated delegates focus. It is initially set to false.

[Shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root) have an associated available to element internals. It is initially set to false.

[Shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root)’s associated [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) is never null.

[Shadow roots](https://dom.spec.whatwg.org/#concept-shadow-root) have an associated slot assignment ("`manual`" or "`named`").

A [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)’s [get the parent](https://dom.spec.whatwg.org/#get-the-parent) algorithm, given an event, returns null if event’s [composed flag](https://dom.spec.whatwg.org/#composed-flag) is unset and [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) is the [root](https://dom.spec.whatwg.org/#concept-tree-root) of event’s [path](https://dom.spec.whatwg.org/#event-path)’s first struct’s [invocation target](https://dom.spec.whatwg.org/#event-path-invocation-target); otherwise [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).

[ShadowRoot/mode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode "The mode read-only property of the ShadowRoot specifies its mode — either open or closed. This defines whether or not the shadow root's internal features are accessible from JavaScript.")

In all current engines.

Firefox63+Safari10.1+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10.3+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

The `mode` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [mode](https://dom.spec.whatwg.org/#shadowroot-mode).

The `delegatesFocus` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [delegates focus](https://dom.spec.whatwg.org/#shadowroot-delegates-focus).

The `slotAssignment` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [slot assignment](https://dom.spec.whatwg.org/#shadowroot-slot-assignment).

[ShadowRoot/host](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host 'The host read-only property of the ShadowRoot returns a reference to the DOM element the ShadowRoot is attached to.')

In all current engines.

Firefox63+Safari10.1+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10.3+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

The `host` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).

The `onslotchange` attribute is an [event handler IDL attribute](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes) for the `onslotchange`[](https://dom.spec.whatwg.org/#shadowroot-onslotchange) [event handler](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers), whose [event handler event type](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type) is `[slotchange](https://html.spec.whatwg.org/multipage/indices.html#event-slotchange)`.

---

In shadow-including tree order is [shadow-including preorder, depth-first traversal](https://dom.spec.whatwg.org/#shadow-including-preorder-depth-first-traversal) of a [node tree](https://dom.spec.whatwg.org/#concept-node-tree). Shadow-including preorder, depth-first traversal of a [node tree](https://dom.spec.whatwg.org/#concept-node-tree) tree is preorder, depth-first traversal of tree, with for each [shadow host](https://dom.spec.whatwg.org/#element-shadow-host) encountered in tree, [shadow-including preorder, depth-first traversal](https://dom.spec.whatwg.org/#shadow-including-preorder-depth-first-traversal) of that [element](https://dom.spec.whatwg.org/#concept-element)’s [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root)’s [node tree](https://dom.spec.whatwg.org/#concept-node-tree) just after it is encountered.

The shadow-including root of an object is its [root](https://dom.spec.whatwg.org/#concept-tree-root)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host)’s [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root), if the object’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root); otherwise its [root](https://dom.spec.whatwg.org/#concept-tree-root).

An object A is a shadow-including descendant of an object B, if A is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of B, or A’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) and A’s [root](https://dom.spec.whatwg.org/#concept-tree-root)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) is a [shadow-including inclusive descendant](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant) of B.

A shadow-including inclusive descendant is an object or one of its [shadow-including descendants](https://dom.spec.whatwg.org/#concept-shadow-including-descendant).

An object A is a shadow-including ancestor of an object B, if and only if B is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of A.

A shadow-including inclusive ancestor is an object or one of its [shadow-including ancestors](https://dom.spec.whatwg.org/#concept-shadow-including-ancestor).

A [node](https://dom.spec.whatwg.org/#concept-node) A is closed-shadow-hidden from a [node](https://dom.spec.whatwg.org/#concept-node) B if all of the following conditions are true:

-   A’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root).
-   A’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is not a [shadow-including inclusive ancestor](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-ancestor) of B.
-   A’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) whose [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is "`closed`" or A’s [root](https://dom.spec.whatwg.org/#concept-tree-root)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) is [closed-shadow-hidden](https://dom.spec.whatwg.org/#concept-closed-shadow-hidden) from B.

To retarget an object A against an object B, repeat these steps until they return an object:

1.  If one of the following is true

    -   A is not a [node](https://dom.spec.whatwg.org/#concept-node)
    -   A’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is not a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)
    -   B is a [node](https://dom.spec.whatwg.org/#concept-node) and A’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow-including inclusive ancestor](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-ancestor) of B

    then return A.

2.  Set A to A’s [root](https://dom.spec.whatwg.org/#concept-tree-root)’s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).

The [retargeting](https://dom.spec.whatwg.org/#retarget) algorithm is used by [event dispatch](https://dom.spec.whatwg.org/#concept-event-dispatch) as well as other specifications, such as Fullscreen. [\[FULLSCREEN\]](https://dom.spec.whatwg.org/#biblio-fullscreen)

### 4.9. Interface `[Element](https://dom.spec.whatwg.org/#element)`[](https://dom.spec.whatwg.org/#interface-element)

[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element 'Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE4+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `Element` : [Node](https://dom.spec.whatwg.org/#node) {
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [namespaceURI](https://dom.spec.whatwg.org/#dom-element-namespaceuri);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [prefix](https://dom.spec.whatwg.org/#dom-element-prefix);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [localName](https://dom.spec.whatwg.org/#dom-element-localname);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [tagName](https://dom.spec.whatwg.org/#dom-element-tagname);

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [id](https://dom.spec.whatwg.org/#dom-element-id);
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [className](https://dom.spec.whatwg.org/#dom-element-classname);
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject), [PutForwards](https://webidl.spec.whatwg.org/#PutForwards)\=[value](https://dom.spec.whatwg.org/#dom-domtokenlist-value)\] readonly attribute [DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist) [classList](https://dom.spec.whatwg.org/#dom-element-classlist);
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [Unscopable](https://webidl.spec.whatwg.org/#Unscopable)\] attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [slot](https://dom.spec.whatwg.org/#dom-element-slot);

[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [hasAttributes](https://dom.spec.whatwg.org/#dom-element-hasattributes)();
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap) [attributes](https://dom.spec.whatwg.org/#dom-element-attributes);
[sequence](https://webidl.spec.whatwg.org/#idl-sequence)<[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)\> [getAttributeNames](https://dom.spec.whatwg.org/#dom-element-getattributenames)();
[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [getAttribute](https://dom.spec.whatwg.org/#dom-element-getattribute)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-getattribute-qualifiedname-qualifiedname));
[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [getAttributeNS](https://dom.spec.whatwg.org/#dom-element-getattributens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-element-getattributens-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-element-getattributens-namespace-localname-localname));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setAttribute](https://dom.spec.whatwg.org/#dom-element-setattribute)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-setattribute-qualifiedname-value-qualifiedname), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `value`[](https://dom.spec.whatwg.org/#dom-element-setattribute-qualifiedname-value-value));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setAttributeNS](https://dom.spec.whatwg.org/#dom-element-setattributens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-element-setattributens-namespace-qualifiedname-value-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-setattributens-namespace-qualifiedname-value-qualifiedname), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `value`[](https://dom.spec.whatwg.org/#dom-element-setattributens-namespace-qualifiedname-value-value));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [removeAttribute](https://dom.spec.whatwg.org/#dom-element-removeattribute)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-removeattribute-qualifiedname-qualifiedname));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [removeAttributeNS](https://dom.spec.whatwg.org/#dom-element-removeattributens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-element-removeattributens-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-element-removeattributens-namespace-localname-localname));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [toggleAttribute](https://dom.spec.whatwg.org/#dom-element-toggleattribute)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-toggleattribute-qualifiedname-force-qualifiedname), optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `force`[](https://dom.spec.whatwg.org/#dom-element-toggleattribute-qualifiedname-force-force));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [hasAttribute](https://dom.spec.whatwg.org/#dom-element-hasattribute)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-hasattribute-qualifiedname-qualifiedname));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [hasAttributeNS](https://dom.spec.whatwg.org/#dom-element-hasattributens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-element-hasattributens-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-element-hasattributens-namespace-localname-localname));

[Attr](https://dom.spec.whatwg.org/#attr)? [getAttributeNode](https://dom.spec.whatwg.org/#dom-element-getattributenode)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-getattributenode-qualifiedname-qualifiedname));
[Attr](https://dom.spec.whatwg.org/#attr)? [getAttributeNodeNS](https://dom.spec.whatwg.org/#dom-element-getattributenodens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-element-getattributenodens-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-element-getattributenodens-namespace-localname-localname));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Attr](https://dom.spec.whatwg.org/#attr)? [setAttributeNode](https://dom.spec.whatwg.org/#dom-element-setattributenode)([Attr](https://dom.spec.whatwg.org/#attr) `attr`[](https://dom.spec.whatwg.org/#dom-element-setattributenode-attr-attr));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Attr](https://dom.spec.whatwg.org/#attr)? [setAttributeNodeNS](https://dom.spec.whatwg.org/#dom-element-setattributenodens)([Attr](https://dom.spec.whatwg.org/#attr) `attr`[](https://dom.spec.whatwg.org/#dom-element-setattributenodens-attr-attr));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Attr](https://dom.spec.whatwg.org/#attr) [removeAttributeNode](https://dom.spec.whatwg.org/#dom-element-removeattributenode)([Attr](https://dom.spec.whatwg.org/#attr) `attr`[](https://dom.spec.whatwg.org/#dom-element-removeattributenode-attr-attr));

[ShadowRoot](https://dom.spec.whatwg.org/#shadowroot) [attachShadow](https://dom.spec.whatwg.org/#dom-element-attachshadow)([ShadowRootInit](https://dom.spec.whatwg.org/#dictdef-shadowrootinit) `init`[](https://dom.spec.whatwg.org/#dom-element-attachshadow-init-init));
readonly attribute [ShadowRoot](https://dom.spec.whatwg.org/#shadowroot)? [shadowRoot](https://dom.spec.whatwg.org/#dom-element-shadowroot);

[Element](https://dom.spec.whatwg.org/#element)? [closest](https://dom.spec.whatwg.org/#dom-element-closest)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `selectors`[](https://dom.spec.whatwg.org/#dom-element-closest-selectors-selectors));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [matches](https://dom.spec.whatwg.org/#dom-element-matches)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `selectors`[](https://dom.spec.whatwg.org/#dom-element-matches-selectors-selectors));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [webkitMatchesSelector](https://dom.spec.whatwg.org/#dom-element-webkitmatchesselector)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `selectors`[](https://dom.spec.whatwg.org/#dom-element-webkitmatchesselector-selectors-selectors)); // legacy alias of .matches

[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection) [getElementsByTagName](https://dom.spec.whatwg.org/#dom-element-getelementsbytagname)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-element-getelementsbytagname-qualifiedname-qualifiedname));
[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection) [getElementsByTagNameNS](https://dom.spec.whatwg.org/#dom-element-getelementsbytagnamens)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-element-getelementsbytagnamens-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-element-getelementsbytagnamens-namespace-localname-localname));
[HTMLCollection](https://dom.spec.whatwg.org/#htmlcollection) [getElementsByClassName](https://dom.spec.whatwg.org/#dom-element-getelementsbyclassname)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `classNames`[](https://dom.spec.whatwg.org/#dom-element-getelementsbyclassname-classnames-classnames));

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Element](https://dom.spec.whatwg.org/#element)? [insertAdjacentElement](https://dom.spec.whatwg.org/#dom-element-insertadjacentelement)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `where`[](https://dom.spec.whatwg.org/#dom-element-insertadjacentelement-where-element-where), [Element](https://dom.spec.whatwg.org/#element) `element`[](https://dom.spec.whatwg.org/#dom-element-insertadjacentelement-where-element-element)); // legacy
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [insertAdjacentText](https://dom.spec.whatwg.org/#dom-element-insertadjacenttext)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `where`[](https://dom.spec.whatwg.org/#dom-element-insertadjacenttext-where-data-where), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-element-insertadjacenttext-where-data-data)); // legacy
};

dictionary `ShadowRootInit` {
required [ShadowRootMode](https://dom.spec.whatwg.org/#enumdef-shadowrootmode) `mode`;
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) `delegatesFocus` = false;
[SlotAssignmentMode](https://dom.spec.whatwg.org/#enumdef-slotassignmentmode) `slotAssignment` = "named";
};

`[Element](https://dom.spec.whatwg.org/#element)` [nodes](https://dom.spec.whatwg.org/#concept-node) are simply known as elements.

[Elements](https://dom.spec.whatwg.org/#concept-element) have an associated namespace, namespace prefix, local name, custom element state, custom element definition, `is` value. When an [element](https://dom.spec.whatwg.org/#concept-element) is [created](https://dom.spec.whatwg.org/#concept-create-element), all of these values are initialized.

An [element](https://dom.spec.whatwg.org/#concept-element)’s [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) is one of "`undefined`", "`failed`", "`uncustomized`", "`precustomized`", or "`custom`". An [element](https://dom.spec.whatwg.org/#concept-element) whose [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) is "`uncustomized`" or "`custom`" is said to be defined. An [element](https://dom.spec.whatwg.org/#concept-element) whose [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) is "`custom`" is said to be custom.

Whether or not an element is [defined](https://dom.spec.whatwg.org/#concept-element-defined) is used to determine the behavior of the [:defined](https://drafts.csswg.org/selectors-4/#defined-pseudo) pseudo-class. Whether or not an element is [custom](https://dom.spec.whatwg.org/#concept-element-custom) is used to determine the behavior of the [mutation algorithms](https://dom.spec.whatwg.org/#mutation-algorithms). The "`failed`" and "`precustomized`" states are used to ensure that if a [custom element constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-constructor) fails to execute correctly the first time, it is not executed again by an [upgrade](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-upgrade-an-element).

The following code illustrates elements in each of these four states:

```
<!DOCTYPE html>
<script>
  window.customElements.define("sw-rey", class extends HTMLElement {})
  window.customElements.define("sw-finn", class extends HTMLElement {}, { extends: "p" })
  window.customElements.define("sw-kylo", class extends HTMLElement {
    constructor() {
      // super() intentionally omitted for this example
    }
  })
</script>

<!-- "undefined" (not defined, not custom) -->
<sw-han>
</sw-han>
<p is="sw-luke">
</p>
<p is="asdf">
</p>

<!-- "failed" (not defined, not custom) -->
<sw-kylo>
</sw-kylo>

<!-- "uncustomized" (defined, not custom) -->
<p>
</p>
<asdf>
</asdf>

<!-- "custom" (defined, custom) -->
<sw-rey>
</sw-rey>
<p is="sw-finn">
</p>
```

[Elements](https://dom.spec.whatwg.org/#concept-element) also have an associated shadow root (null or a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)). It is null unless otherwise stated. An [element](https://dom.spec.whatwg.org/#concept-element) is a shadow host if its [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root) is non-null.

An [element](https://dom.spec.whatwg.org/#concept-element)’s qualified name is its [local name](https://dom.spec.whatwg.org/#concept-element-local-name) if its [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) is null; otherwise its [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix), followed by "`:`", followed by its [local name](https://dom.spec.whatwg.org/#concept-element-local-name).

An [element](https://dom.spec.whatwg.org/#concept-element)’s HTML-uppercased qualified name is the return value of these steps:

1.  Let qualifiedName be [this](https://webidl.spec.whatwg.org/#this)’s [qualified name](https://dom.spec.whatwg.org/#concept-element-qualified-name).
2.  If [this](https://webidl.spec.whatwg.org/#this) is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and its [node document](https://dom.spec.whatwg.org/#concept-node-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then set qualifiedName to qualifiedName in [ASCII uppercase](https://infra.spec.whatwg.org/#ascii-uppercase).
3.  Return qualifiedName.

User agents could optimize [qualified name](https://dom.spec.whatwg.org/#concept-element-qualified-name) and [HTML-uppercased qualified name](https://dom.spec.whatwg.org/#element-html-uppercased-qualified-name) by storing them in internal slots.

To create an element, given a document, localName, namespace, and optional prefix, is, and synchronous custom elements flag, run these steps:

1.  If prefix was not given, let prefix be null.
2.  If is was not given, let is be null.
3.  Let result be null.
4.  Let definition be the result of [looking up a custom element definition](https://html.spec.whatwg.org/multipage/custom-elements.html#look-up-a-custom-element-definition) given document, namespace, localName, and is.
5.  If definition is non-null, and definition’s [name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-name) is not equal to its [local name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-local-name) (i.e., definition represents a [customized built-in element](https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element)), then:

    1.  Let interface be the [element interface](https://dom.spec.whatwg.org/#concept-element-interface) for localName and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace).
    2.  Set result to a new [element](https://dom.spec.whatwg.org/#concept-element) that implements interface, with no attributes, [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) set to the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) set to prefix, [local name](https://dom.spec.whatwg.org/#concept-element-local-name) set to localName, [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) set to "`undefined`", [custom element definition](https://dom.spec.whatwg.org/#concept-element-custom-element-definition) set to null, [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value) set to is, and [node document](https://dom.spec.whatwg.org/#concept-node-document) set to document.
    3.  If the synchronous custom elements flag is set, then run this step while catching any exceptions:

        1.  [Upgrade](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-upgrade-an-element) element using definition.

        If this step threw an exception, then:

        1.  [Report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception).
        2.  Set result’s [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) to "`failed`".

    4.  Otherwise, [enqueue a custom element upgrade reaction](https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-upgrade-reaction) given result and definition.

6.  Otherwise, if definition is non-null, then:

    1.  If the synchronous custom elements flag is set, then run these steps while catching any exceptions:

        1.  Let C be definition’s [constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-constructor).
        2.  Set result to the result of [constructing](https://webidl.spec.whatwg.org/#construct-a-callback-function) C, with no arguments.
        3.  Assert: result’s [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) and [custom element definition](https://dom.spec.whatwg.org/#concept-element-custom-element-definition) are initialized.
        4.  Assert: result’s [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace).

            IDL enforces that result is an `[HTMLElement](https://html.spec.whatwg.org/multipage/dom.html#htmlelement)` object, which all use the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace).

        5.  If result’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) [is not empty](https://infra.spec.whatwg.org/#list-is-empty), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
        6.  If result has [children](https://dom.spec.whatwg.org/#concept-tree-child), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
        7.  If result’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is not null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
        8.  If result’s [node document](https://dom.spec.whatwg.org/#concept-node-document) is not document, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
        9.  If result’s [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is not equal to localName, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
        10. Set result’s [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) to prefix.

        11. Set result’s [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value) to null.

        If any of these steps threw an exception, then:

        1.  [Report the exception](https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception).
        2.  Set result to a new [element](https://dom.spec.whatwg.org/#concept-element) that implements the `[HTMLUnknownElement](https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement)` interface, with no attributes, [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) set to the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) set to prefix, [local name](https://dom.spec.whatwg.org/#concept-element-local-name) set to localName, [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) set to "`failed`", [custom element definition](https://dom.spec.whatwg.org/#concept-element-custom-element-definition) set to null, [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value) set to null, and [node document](https://dom.spec.whatwg.org/#concept-node-document) set to document.

    2.  Otherwise:

        1.  Set result to a new [element](https://dom.spec.whatwg.org/#concept-element) that implements the `[HTMLElement](https://html.spec.whatwg.org/multipage/dom.html#htmlelement)` interface, with no attributes, [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) set to the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) set to prefix, [local name](https://dom.spec.whatwg.org/#concept-element-local-name) set to localName, [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) set to "`undefined`", [custom element definition](https://dom.spec.whatwg.org/#concept-element-custom-element-definition) set to null, [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value) set to null, and [node document](https://dom.spec.whatwg.org/#concept-node-document) set to document.
        2.  [Enqueue a custom element upgrade reaction](https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-upgrade-reaction) given result and definition.

7.  Otherwise:

    1.  Let interface be the [element interface](https://dom.spec.whatwg.org/#concept-element-interface) for localName and namespace.
    2.  Set result to a new [element](https://dom.spec.whatwg.org/#concept-element) that implements interface, with no attributes, [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) set to namespace, [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) set to prefix, [local name](https://dom.spec.whatwg.org/#concept-element-local-name) set to localName, [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) set to "`uncustomized`", [custom element definition](https://dom.spec.whatwg.org/#concept-element-custom-element-definition) set to null, [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value) set to is, and [node document](https://dom.spec.whatwg.org/#concept-node-document) set to document.
    3.  If namespace is the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), and either localName is a [valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) or is is non-null, then set result’s [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) to "`undefined`".

8.  Return result.

[Elements](https://dom.spec.whatwg.org/#concept-element) also have an attribute list, which is a [list](https://infra.spec.whatwg.org/#list) exposed through a `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)`. Unless explicitly given when an [element](https://dom.spec.whatwg.org/#concept-element) is created, its [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) [is empty](https://infra.spec.whatwg.org/#list-is-empty).

An [element](https://dom.spec.whatwg.org/#concept-element) has an [attribute](https://dom.spec.whatwg.org/#concept-attribute) A if its [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) [contains](https://infra.spec.whatwg.org/#list-contain) A.

This and [other specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define attribute change steps for [elements](https://dom.spec.whatwg.org/#concept-element). The algorithm is passed element, localName, oldValue, value, and namespace.

To handle attribute changes for an [attribute](https://dom.spec.whatwg.org/#concept-attribute) attribute with element, oldValue, and newValue, run these steps:

1.  [Queue a mutation record](https://dom.spec.whatwg.org/#queue-a-mutation-record) of "`attributes`" for element with attribute’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), attribute’s [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace), oldValue, « », « », null, and null.
2.  If element is [custom](https://dom.spec.whatwg.org/#concept-element-custom), then [enqueue a custom element callback reaction](https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction) with element, callback name "`attributeChangedCallback`", and an argument list containing attribute’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), oldValue, newValue, and attribute’s [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace).
3.  Run the [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) with element, attribute’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), oldValue, newValue, and attribute’s [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace).

To change an [attribute](https://dom.spec.whatwg.org/#concept-attribute) attribute to value, run these steps:

1.  [Handle attribute changes](https://dom.spec.whatwg.org/#handle-attribute-changes) for attribute with attribute’s [element](https://dom.spec.whatwg.org/#concept-attribute-element), attribute’s [value](https://dom.spec.whatwg.org/#concept-attribute-value), and value.
2.  Set attribute’s [value](https://dom.spec.whatwg.org/#concept-attribute-value) to value.

To append an [attribute](https://dom.spec.whatwg.org/#concept-attribute) attribute to an [element](https://dom.spec.whatwg.org/#concept-element) element, run these steps:

1.  [Handle attribute changes](https://dom.spec.whatwg.org/#handle-attribute-changes) for attribute with element, null, and attribute’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).
2.  [Append](https://infra.spec.whatwg.org/#list-append) attribute to element’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute).
3.  Set attribute’s [element](https://dom.spec.whatwg.org/#concept-attribute-element) to element.

To remove an [attribute](https://dom.spec.whatwg.org/#concept-attribute) attribute, run these steps:

1.  [Handle attribute changes](https://dom.spec.whatwg.org/#handle-attribute-changes) for attribute with attribute’s [element](https://dom.spec.whatwg.org/#concept-attribute-element), attribute’s [value](https://dom.spec.whatwg.org/#concept-attribute-value), and null.
2.  [Remove](https://infra.spec.whatwg.org/#list-remove) attribute from attribute’s [element](https://dom.spec.whatwg.org/#concept-attribute-element)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute).
3.  Set attribute’s [element](https://dom.spec.whatwg.org/#concept-attribute-element) to null.

To replace an [attribute](https://dom.spec.whatwg.org/#concept-attribute) oldAttr with an [attribute](https://dom.spec.whatwg.org/#concept-attribute) newAttr, run these steps:

1.  [Handle attribute changes](https://dom.spec.whatwg.org/#handle-attribute-changes) for oldAttr with oldAttr’s [element](https://dom.spec.whatwg.org/#concept-attribute-element), oldAttr’s [value](https://dom.spec.whatwg.org/#concept-attribute-value), and newAttr’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).
2.  [Replace](https://infra.spec.whatwg.org/#list-replace) oldAttr by newAttr in oldAttr’s [element](https://dom.spec.whatwg.org/#concept-attribute-element)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute).
3.  Set newAttr’s [element](https://dom.spec.whatwg.org/#concept-attribute-element) to oldAttr’s [element](https://dom.spec.whatwg.org/#concept-attribute-element).
4.  Set oldAttr’s [element](https://dom.spec.whatwg.org/#concept-attribute-element) to null.

---

To get an attribute by name given a qualifiedName and [element](https://dom.spec.whatwg.org/#concept-element) element, run these steps:

1.  If element is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and its [node document](https://dom.spec.whatwg.org/#concept-node-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then set qualifiedName to qualifiedName in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
2.  Return the first [attribute](https://dom.spec.whatwg.org/#concept-attribute) in element’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName; otherwise null.

To get an attribute by namespace and local name given a namespace, localName, and [element](https://dom.spec.whatwg.org/#concept-element) element, run these steps:

1.  If namespace is the empty string, then set it to null.
2.  Return the [attribute](https://dom.spec.whatwg.org/#concept-attribute) in element’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName, if any; otherwise null.

To get an attribute value given an [element](https://dom.spec.whatwg.org/#concept-element) element, localName, and optionally a namespace (null unless stated otherwise), run these steps:

1.  Let attr be the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given namespace, localName, and element.
2.  If attr is null, then return the empty string.
3.  Return attr’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).

To set an attribute given an attr and element, run these steps:

1.  If attr’s [element](https://dom.spec.whatwg.org/#concept-attribute-element) is neither null nor element, [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InUseAttributeError](https://webidl.spec.whatwg.org/#inuseattributeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Let oldAttr be the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given attr’s [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace), attr’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), and element.
3.  If oldAttr is attr, return attr.
4.  If oldAttr is non-null, then [replace](https://dom.spec.whatwg.org/#concept-element-attributes-replace) oldAttr with attr.
5.  Otherwise, [append](https://dom.spec.whatwg.org/#concept-element-attributes-append) attr to element.
6.  Return oldAttr.

To set an attribute value for an [element](https://dom.spec.whatwg.org/#concept-element) element, using a localName and value, and an optional prefix, and namespace, run these steps:

1.  If prefix is not given, set it to null.
2.  If namespace is not given, set it to null.
3.  Let attribute be the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given namespace, localName, and element.
4.  If attribute is null, create an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace, [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix) is prefix, [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName, [value](https://dom.spec.whatwg.org/#concept-attribute-value) is value, and [node document](https://dom.spec.whatwg.org/#concept-node-document) is element’s [node document](https://dom.spec.whatwg.org/#concept-node-document), then [append](https://dom.spec.whatwg.org/#concept-element-attributes-append) this [attribute](https://dom.spec.whatwg.org/#concept-attribute) to element, and then return.
5.  [Change](https://dom.spec.whatwg.org/#concept-element-attributes-change) attribute to value.

To remove an attribute by name given a qualifiedName and [element](https://dom.spec.whatwg.org/#concept-element) element, run these steps:

1.  Let attr be the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name) given qualifiedName and element.
2.  If attr is non-null, then [remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove) attr.
3.  Return attr.

To remove an attribute by namespace and local name given a namespace, localName, and [element](https://dom.spec.whatwg.org/#concept-element) element, run these steps:

1.  Let attr be the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given namespace, localName, and element.
2.  If attr is non-null, then [remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove) attr.
3.  Return attr.

---

An [element](https://dom.spec.whatwg.org/#concept-element) can have an associated unique identifier (ID)

Historically [elements](https://dom.spec.whatwg.org/#concept-element) could have multiple identifiers e.g., by using the HTML `id` [attribute](https://dom.spec.whatwg.org/#concept-attribute) and a DTD. This specification makes [ID](https://dom.spec.whatwg.org/#concept-id) a concept of the DOM and allows for only one per [element](https://dom.spec.whatwg.org/#concept-element), given by an [`id` attribute](https://dom.spec.whatwg.org/#concept-named-attribute).

Use these [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) to update an [element](https://dom.spec.whatwg.org/#concept-element)’s [ID](https://dom.spec.whatwg.org/#concept-id):

1.  If localName is `id`, namespace is null, and value is null or the empty string, then unset element’s [ID](https://dom.spec.whatwg.org/#concept-id).
2.  Otherwise, if localName is `id`, namespace is null, then set element’s [ID](https://dom.spec.whatwg.org/#concept-id) to value.

While this specification defines requirements for `class`, `id`, and `slot` [attributes](https://dom.spec.whatwg.org/#concept-attribute) on any [element](https://dom.spec.whatwg.org/#concept-element), it makes no claims as to whether using them is conforming or not.

---

A [node](https://dom.spec.whatwg.org/#concept-node)’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) of type `[Element](https://dom.spec.whatwg.org/#element)` is known as its parent element. If the [node](https://dom.spec.whatwg.org/#concept-node) has a [parent](https://dom.spec.whatwg.org/#concept-tree-parent) of a different type, its [parent element](https://dom.spec.whatwg.org/#parent-element) is null.

---

[Element/namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI 'The Element.namespaceURI read-only property returns the namespace URI of the element, or null if the element is not in a namespace.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

namespace = element . `[namespaceURI](https://dom.spec.whatwg.org/#dom-element-namespaceuri)`

Returns the [namespace](https://dom.spec.whatwg.org/#concept-element-namespace).

[Element/prefix](https://developer.mozilla.org/en-US/docs/Web/API/Element/prefix 'The Element.prefix read-only property returns the namespace prefix of the specified element, or null if no prefix is specified.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

prefix = element . `[prefix](https://dom.spec.whatwg.org/#dom-element-prefix)`

Returns the [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix).

[Element/localName](https://developer.mozilla.org/en-US/docs/Web/API/Element/localName 'The Element.localName read-only property returns the local part of the qualified name of an element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

localName = element . `[localName](https://dom.spec.whatwg.org/#dom-element-localname)`

Returns the [local name](https://dom.spec.whatwg.org/#concept-element-local-name).

[Element/tagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName "The tagName read-only property of the Element interface returns the tag name of the element on which it's called.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

qualifiedName = element . `[tagName](https://dom.spec.whatwg.org/#dom-element-tagname)`

Returns the [HTML-uppercased qualified name](https://dom.spec.whatwg.org/#element-html-uppercased-qualified-name).

The `namespaceURI` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [namespace](https://dom.spec.whatwg.org/#concept-element-namespace).

The `prefix` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix).

The `localName` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [local name](https://dom.spec.whatwg.org/#concept-element-local-name).

The `tagName` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [HTML-uppercased qualified name](https://dom.spec.whatwg.org/#element-html-uppercased-qualified-name).

---

[Element/id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id "The id property of the Element interface represents the element's identifier, reflecting the id global attribute.")

In all current engines.

Firefox1+Safari1+Chrome23+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android25+Android WebView37+Samsung Internet1.5+Opera Mobile12.1+

`element . [id](https://dom.spec.whatwg.org/#dom-element-id) [ = value ]`

Returns the value of element’s `id` content attribute. Can be set to change it.

[Element/className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className 'The className property of the Element interface gets and sets the value of the class attribute of the specified element.')

In all current engines.

Firefox1+Safari1+Chrome22+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android25+Android WebView37+Samsung Internet1.5+Opera Mobile10.1+

`element . [className](https://dom.spec.whatwg.org/#dom-element-classname) [ = value ]`

Returns the value of element’s `class` content attribute. Can be set to change it.

[Element/classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList 'The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.')

In all current engines.

Firefox3.6+Safari7+Chrome22+

---

Opera11.5+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android4+iOS Safari7+Chrome for Android25+Android WebView4.4+Samsung Internet1.5+Opera Mobile11.5+

`element . [classList](https://dom.spec.whatwg.org/#dom-element-classlist)`

Allows for manipulation of element’s `class` content attribute as a set of whitespace-separated tokens through a `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object.

[Element/slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot 'The slot property of the Element interface returns the name of the shadow DOM slot the element is inserted in.')

In all current engines.

Firefox63+Safari10+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

[Global_attributes/slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot "The slot global attribute assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the <slot> element whose name attribute's value matches that slot attribute's value.")

In all current engines.

Firefox63+Safari10+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIE?

---

Firefox for Android63+iOS Safari10+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

`element . [slot](https://dom.spec.whatwg.org/#dom-element-slot) [ = value ]`

Returns the value of element’s `slot` content attribute. Can be set to change it.

IDL attributes that are defined to reflect a content [attribute](https://dom.spec.whatwg.org/#concept-attribute) of a given name, must have a getter and setter that follow these steps:

getter

Return the result of running [get an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-get-value) given [this](https://webidl.spec.whatwg.org/#this) and name.

setter

[Set an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) for [this](https://webidl.spec.whatwg.org/#this) using name and the given value.

The `id` attribute must [reflect](https://dom.spec.whatwg.org/#concept-reflect) the "`id`" content attribute.

The `className` attribute must [reflect](https://dom.spec.whatwg.org/#concept-reflect) the "`class`" content attribute.

The `classList` getter steps are to return a `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object whose associated [element](https://dom.spec.whatwg.org/#concept-element) is [this](https://webidl.spec.whatwg.org/#this) and whose associated [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is `class`. The [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens) of this particular `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object are also known as the [element](https://dom.spec.whatwg.org/#concept-element)’s classes.

The `slot` attribute must [reflect](https://dom.spec.whatwg.org/#concept-reflect) the "`slot`" content attribute.

`id`, `class`, and `slot` are effectively superglobal attributes as they can appear on any element, regardless of that element’s namespace.

---

[Element/hasAttributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes 'The hasAttributes() method of the Element interface returns a boolean value indicating whether the current element has any attributes or not.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE8+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`element . [hasAttributes](https://dom.spec.whatwg.org/#dom-element-hasattributes)()`

Returns true if element has attributes; otherwise false.

[Element/getAttributeNames](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames 'The getAttributeNames() method of the Element interface returns the attribute names of the element as an Array of strings. If the element has no attributes it returns an empty array.')

In all current engines.

Firefox45+Safari10.1+Chrome61+

---

Opera48+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for Android45+iOS Safari10.3+Chrome for Android61+Android WebView61+Samsung Internet8.0+Opera Mobile45+

`element . [getAttributeNames](https://dom.spec.whatwg.org/#dom-element-getattributenames)()`

Returns the [qualified names](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) of all element’s [attributes](https://dom.spec.whatwg.org/#concept-attribute). Can contain duplicates.

[Element/getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute 'The getAttribute() method of the Element interface returns the value of a specified attribute on the element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`element . [getAttribute](https://dom.spec.whatwg.org/#dom-element-getattribute)(qualifiedName)`

Returns element’s first [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName, and null if there is no such [attribute](https://dom.spec.whatwg.org/#concept-attribute) otherwise.

[Element/getAttributeNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS "The getAttributeNS() method of the Element interface returns the string value of the attribute with the specified namespace and name. If the named attribute does not exist, the value returned will either be null or "" (the empty string); see Notes for details.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`element . [getAttributeNS](https://dom.spec.whatwg.org/#dom-element-getattributens)(namespace, localName)`

Returns element’s [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName, and null if there is no such [attribute](https://dom.spec.whatwg.org/#concept-attribute) otherwise.

[Element/setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute 'Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`element . [setAttribute](https://dom.spec.whatwg.org/#dom-element-setattribute)(qualifiedName, value)`

Sets the [value](https://dom.spec.whatwg.org/#concept-attribute-value) of element’s first [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName to value.

[Element/setAttributeNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS 'setAttributeNS adds a new attribute or changes the value of an attribute with the given namespace and name.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`element . [setAttributeNS](https://dom.spec.whatwg.org/#dom-element-setattributens)(namespace, localName, value)`

Sets the [value](https://dom.spec.whatwg.org/#concept-attribute-value) of element’s [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName to value.

[Element/removeAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute 'The Element method removeAttribute() removes the attribute with the specified name from the element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`element . [removeAttribute](https://dom.spec.whatwg.org/#dom-element-removeattribute)(qualifiedName)`

Removes element’s first [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName.

[Element/removeAttributeNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNS 'The removeAttributeNS() method of the Element interface removes the specified attribute from an element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`element . [removeAttributeNS](https://dom.spec.whatwg.org/#dom-element-removeattributens)(namespace, localName)`

Removes element’s [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName.

[Element/toggleAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute 'The toggleAttribute() method of the Element interface toggles a Boolean attribute (removing it if it is present and adding it if it is not present) on the given element.')

In all current engines.

Firefox63+Safari12+Chrome69+

---

Opera56+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for Android63+iOS Safari12+Chrome for Android69+Android WebView69+Samsung Internet10.0+Opera Mobile48+

`element . [toggleAttribute](https://dom.spec.whatwg.org/#dom-element-toggleattribute)(qualifiedName [, force])`

If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present; otherwise false.

[Element/hasAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute 'The Element.hasAttribute() method returns a Boolean value indicating whether the specified element has the specified attribute or not.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE8+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

`element . [hasAttribute](https://dom.spec.whatwg.org/#dom-element-hasattribute)(qualifiedName)`

Returns true if element has an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName; otherwise false.

[Element/hasAttributeNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributeNS 'hasAttributeNS returns a boolean value indicating whether the current element has the specified attribute.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

`element . [hasAttributeNS](https://dom.spec.whatwg.org/#dom-element-hasattributens)(namespace, localName)`

Returns true if element has an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName.

The `hasAttributes()` method steps are to return false if [this](https://webidl.spec.whatwg.org/#this)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) [is empty](https://infra.spec.whatwg.org/#list-is-empty); otherwise true.

[Element/attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes "The Element.attributes property returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, not an Array, so it has no Array methods and the Attr nodes' indexes may differ among browsers. To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5.5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `attributes` getter steps are to return the associated `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)`.

The `getAttributeNames()` method steps are to return the [qualified names](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) of the [attributes](https://dom.spec.whatwg.org/#concept-attribute) in [this](https://webidl.spec.whatwg.org/#this)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute), in order; otherwise a new [list](https://infra.spec.whatwg.org/#list).

These are not guaranteed to be unique.

The `getAttribute(qualifiedName)` method steps are:

1.  Let attr be the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name) given qualifiedName and [this](https://webidl.spec.whatwg.org/#this).
2.  If attr is null, return null.
3.  Return attr’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).

The `getAttributeNS(namespace, localName)` method steps are:

1.  Let attr be the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given namespace, localName, and [this](https://webidl.spec.whatwg.org/#this).
2.  If attr is null, return null.
3.  Return attr’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).

The `setAttribute(qualifiedName, value)` method steps are:

1.  If qualifiedName does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production in XML, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If [this](https://webidl.spec.whatwg.org/#this) is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and its [node document](https://dom.spec.whatwg.org/#concept-node-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then set qualifiedName to qualifiedName in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
3.  Let attribute be the first [attribute](https://dom.spec.whatwg.org/#concept-attribute) in [this](https://webidl.spec.whatwg.org/#this)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName, and null otherwise.
4.  If attribute is null, create an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is qualifiedName, [value](https://dom.spec.whatwg.org/#concept-attribute-value) is value, and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document), then [append](https://dom.spec.whatwg.org/#concept-element-attributes-append) this [attribute](https://dom.spec.whatwg.org/#concept-attribute) to [this](https://webidl.spec.whatwg.org/#this), and then return.
5.  [Change](https://dom.spec.whatwg.org/#concept-element-attributes-change) attribute to value.

The `setAttributeNS(namespace, qualifiedName, value)` method steps are:

1.  Let namespace, prefix, and localName be the result of passing namespace and qualifiedName to [validate and extract](https://dom.spec.whatwg.org/#validate-and-extract).
2.  [Set an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) for [this](https://webidl.spec.whatwg.org/#this) using localName, value, and also prefix and namespace.

The `removeAttribute(qualifiedName)` method steps are to [remove an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name) given qualifiedName and [this](https://webidl.spec.whatwg.org/#this), and then return undefined.

The `removeAttributeNS(namespace, localName)` method steps are to [remove an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace) given namespace, localName, and [this](https://webidl.spec.whatwg.org/#this), and then return undefined.

The `hasAttribute(qualifiedName)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this) is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and its [node document](https://dom.spec.whatwg.org/#concept-node-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then set qualifiedName to qualifiedName in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
2.  Return true if [this](https://webidl.spec.whatwg.org/#this) [has](https://dom.spec.whatwg.org/#concept-element-attribute-has) an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName; otherwise false.

The `toggleAttribute(qualifiedName, force)` method steps are:

1.  If qualifiedName does not match the `[Name](https://www.w3.org/TR/xml/#NT-Name)` production in XML, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If [this](https://webidl.spec.whatwg.org/#this) is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and its [node document](https://dom.spec.whatwg.org/#concept-node-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then set qualifiedName to qualifiedName in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
3.  Let attribute be the first [attribute](https://dom.spec.whatwg.org/#concept-attribute) in [this](https://webidl.spec.whatwg.org/#this)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) whose [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) is qualifiedName, and null otherwise.
4.  If attribute is null, then:

    1.  If force is not given or is true, create an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is qualifiedName, [value](https://dom.spec.whatwg.org/#concept-attribute-value) is the empty string, and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document), then [append](https://dom.spec.whatwg.org/#concept-element-attributes-append) this [attribute](https://dom.spec.whatwg.org/#concept-attribute) to [this](https://webidl.spec.whatwg.org/#this), and then return true.
    2.  Return false.

5.  Otherwise, if force is not given or is false, [remove an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name) given qualifiedName and [this](https://webidl.spec.whatwg.org/#this), and then return false.
6.  Return true.

The `hasAttributeNS(namespace, localName)` method steps are:

1.  If namespace is the empty string, then set it to null.
2.  Return true if [this](https://webidl.spec.whatwg.org/#this) [has](https://dom.spec.whatwg.org/#concept-element-attribute-has) an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) is namespace and [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is localName; otherwise false.

---

[Element/getAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode 'Returns the specified attribute of the specified element, as an Attr node.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `getAttributeNode(qualifiedName)` method steps are to return the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name) given qualifiedName and [this](https://webidl.spec.whatwg.org/#this).

[Element/getAttributeNodeNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNodeNS 'Returns the Attr node for the attribute with the given namespace and name.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `getAttributeNodeNS(namespace, localName)` method steps are to return the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given namespace, localName, and [this](https://webidl.spec.whatwg.org/#this).

[Element/setAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode 'The setAttributeNode() method adds a new Attr node to the specified element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[Element/setAttributeNodeNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNodeNS 'setAttributeNodeNS adds a new namespaced attribute node to an element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `setAttributeNode(attr)` and `setAttributeNodeNS(attr)` methods steps are to return the result of [setting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-set) given attr and [this](https://webidl.spec.whatwg.org/#this).

[Element/removeAttributeNode](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNode 'The removeAttributeNode() method of the Element object removes the specified attribute from the current element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `removeAttributeNode(attr)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) does not [contain](https://infra.spec.whatwg.org/#list-contain) attr, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotFoundError](https://webidl.spec.whatwg.org/#notfounderror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  [Remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove) attr.
3.  Return attr.

---

[Element/attachShadow](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow 'The Element.attachShadow() method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.')

In all current engines.

Firefox63+Safari10+Chrome53+

---

Opera40+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10+Chrome for Android53+Android WebView53+Samsung Internet6.0+Opera Mobile41+

`` var shadow = element . `[attachShadow(init)](https://dom.spec.whatwg.org/#dom-element-attachshadow)`  ``

Creates a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) for element and returns it.

[Element/shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot 'The Element.shadowRoot read-only property represents the shadow root hosted by the element.')

In all current engines.

Firefox63+Safari10+Chrome35+

---

Opera22+Edge79+

---

Edge (Legacy)NoneIENone

---

Firefox for Android63+iOS Safari10+Chrome for Android35+Android WebView37+Samsung Internet3.0+Opera Mobile22+

`` var shadow = element . `[shadowRoot](https://dom.spec.whatwg.org/#dom-element-shadowroot)`  ``

Returns element’s [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root), if any, and if [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)’s [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is "`open`", and null otherwise.

The `attachShadow(init)` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this)’s [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is not the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If [this](https://webidl.spec.whatwg.org/#this)’s [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is not one of the following:

    -   a [valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
    -   "`article`", "`aside`", "`blockquote`", "`body`", "`div`", "`footer`", "`h1`", "`h2`", "`h3`", "`h4`", "`h5`", "`h6`", "`header`", "`main`", "`nav`", "`p`", "`section`", or "`span`"

    then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

3.  If [this](https://webidl.spec.whatwg.org/#this)’s [local name](https://dom.spec.whatwg.org/#concept-element-local-name) is a [valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name), or [this](https://webidl.spec.whatwg.org/#this)’s [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value) is not null, then:

    1.  Let definition be the result of [looking up a custom element definition](https://html.spec.whatwg.org/multipage/custom-elements.html#look-up-a-custom-element-definition) given [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document), its [namespace](https://dom.spec.whatwg.org/#concept-element-namespace), its [local name](https://dom.spec.whatwg.org/#concept-element-local-name), and its [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value).
    2.  If definition is not null and definition’s [disable shadow](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-disable-shadow) is true, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

4.  If [this](https://webidl.spec.whatwg.org/#this) is a [shadow host](https://dom.spec.whatwg.org/#element-shadow-host), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
5.  Let shadow be a new [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) whose [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document), [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) is [this](https://webidl.spec.whatwg.org/#this), and [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is init\["`[mode](https://dom.spec.whatwg.org/#dom-shadowrootinit-mode)`"\].
6.  Set shadow’s [delegates focus](https://dom.spec.whatwg.org/#shadowroot-delegates-focus) to init\["`[delegatesFocus](https://dom.spec.whatwg.org/#dom-shadowrootinit-delegatesfocus)`"\].
7.  If [this](https://webidl.spec.whatwg.org/#this)’s [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) is "`precustomized`" or "`custom`", then set shadow’s [available to element internals](https://dom.spec.whatwg.org/#shadowroot-available-to-element-internals) to true.
8.  Set shadow’s [slot assignment](https://dom.spec.whatwg.org/#shadowroot-slot-assignment) to init\["`[slotAssignment](https://dom.spec.whatwg.org/#dom-shadowrootinit-slotassignment)`"\].
9.  Set [this](https://webidl.spec.whatwg.org/#this)’s [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root) to shadow.
10. Return shadow.

The `shadowRoot` getter steps are:

1.  Let shadow be [this](https://webidl.spec.whatwg.org/#this)’s [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root).
2.  If shadow is null or its [mode](https://dom.spec.whatwg.org/#shadowroot-mode) is "`closed`", then return null.
3.  Return shadow.

---

[Element/closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest 'The closest() method traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.')

In all current engines.

Firefox35+Safari6+Chrome41+

---

Opera28+Edge79+

---

Edge (Legacy)15+IENone

---

Firefox for Android35+iOS Safari9+Chrome for Android41+Android WebView41+Samsung Internet4.0+Opera Mobile28+

`` element . `[closest(selectors)](https://dom.spec.whatwg.org/#dom-element-closest)`  ``

Returns the first (starting at element) [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) that matches selectors, and null otherwise.

[Element/matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches "The matches() method checks to see if the Element would be selected by the provided selectorString -- in other words -- checks if the element "is" the selector.")

In all current engines.

Firefox34+Safari7+Chrome33+

---

Opera21+Edge79+

---

Edge (Legacy)15+IENone

---

Firefox for Android34+iOS Safari8+Chrome for Android33+Android WebView4.4+Samsung Internet2.0+Opera Mobile21+

`` element . `[matches(selectors)](https://dom.spec.whatwg.org/#dom-element-matches)`  ``

Returns true if matching selectors against element’s [root](https://dom.spec.whatwg.org/#concept-tree-root) yields element; otherwise false.

The `closest(selectors)` method steps are:

1.  Let s be the result of [parse a selector](https://drafts.csswg.org/selectors-4/#parse-a-selector) from selectors. [\[SELECTORS4\]](https://dom.spec.whatwg.org/#biblio-selectors4)
2.  If s is failure, [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Let elements be [this](https://webidl.spec.whatwg.org/#this)’s [inclusive ancestors](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) that are [elements](https://dom.spec.whatwg.org/#concept-element), in reverse [tree order](https://dom.spec.whatwg.org/#concept-tree-order).
4.  For each element in elements, if [match a selector against an element](https://drafts.csswg.org/selectors-4/#match-a-selector-against-an-element), using s, element, and [:scope element](https://drafts.csswg.org/selectors-4/#scope-element) [this](https://webidl.spec.whatwg.org/#this), returns success, return element. [\[SELECTORS4\]](https://dom.spec.whatwg.org/#biblio-selectors4)
5.  Return null.

The `matches(selectors)` and `webkitMatchesSelector(selectors)` method steps are:

1.  Let s be the result of [parse a selector](https://drafts.csswg.org/selectors-4/#parse-a-selector) from selectors. [\[SELECTORS4\]](https://dom.spec.whatwg.org/#biblio-selectors4)
2.  If s is failure, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If the result of [match a selector against an element](https://drafts.csswg.org/selectors-4/#match-a-selector-against-an-element), using s, [this](https://webidl.spec.whatwg.org/#this), and [:scope element](https://drafts.csswg.org/selectors-4/#scope-element) [this](https://webidl.spec.whatwg.org/#this), returns success, then return true; otherwise, return false. [\[SELECTORS4\]](https://dom.spec.whatwg.org/#biblio-selectors4)

---

[Element/getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName 'The Element.getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5.5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `getElementsByTagName(qualifiedName)` method steps are to return the [list of elements with qualified name qualifiedName](https://dom.spec.whatwg.org/#concept-getelementsbytagname) for [this](https://webidl.spec.whatwg.org/#this).

[Element/getElementsByTagNameNS](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagNameNS 'The Element.getElementsByTagNameNS() method returns a live HTMLCollection of elements with the given tag name belonging to the given namespace. It is similar to Document.getElementsByTagNameNS, except that its search is restricted to descendants of the specified element.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `getElementsByTagNameNS(namespace, localName)` method steps are to return the [list of elements with namespace namespace and local name localName](https://dom.spec.whatwg.org/#concept-getelementsbytagnamens) for [this](https://webidl.spec.whatwg.org/#this).

The `getElementsByClassName(classNames)` method steps are to return the [list of elements with class names classNames](https://dom.spec.whatwg.org/#concept-getelementsbyclassname) for [this](https://webidl.spec.whatwg.org/#this).

---

To insert adjacent, given an [element](https://dom.spec.whatwg.org/#concept-element) element, string where, and a [node](https://dom.spec.whatwg.org/#concept-node) node, run the steps associated with the first [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for where:

"`beforebegin`"

If element’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, return null.

Return the result of [pre-inserting](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into element’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) before element.

"`afterbegin`"

Return the result of [pre-inserting](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into element before element’s [first child](https://dom.spec.whatwg.org/#concept-tree-first-child).

"`beforeend`"

Return the result of [pre-inserting](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into element before null.

"`afterend`"

If element’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, return null.

Return the result of [pre-inserting](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into element’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) before element’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).

Otherwise

[Throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

[Element/insertAdjacentElement](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement 'The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.')

In all current engines.

Firefox48+Safari3+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android48+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `insertAdjacentElement(where, element)` method steps are to return the result of running [insert adjacent](https://dom.spec.whatwg.org/#insert-adjacent), give [this](https://webidl.spec.whatwg.org/#this), where, and element.

[Element/insertAdjacentText](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText 'The insertAdjacentText() method of the Element interface inserts a given text node at a given position relative to the element it is invoked upon.')

In all current engines.

Firefox48+Safari4+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android48+iOS Safari4+Chrome for Android18+Android WebView2.2+Samsung Internet1.0+Opera Mobile12.1+

The `insertAdjacentText(where, data)` method steps are:

1.  Let text be a new `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  Run [insert adjacent](https://dom.spec.whatwg.org/#insert-adjacent), given [this](https://webidl.spec.whatwg.org/#this), where, and text.

This method returns nothing because it existed before we had a chance to design it.

#### 4.9.1. Interface `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)`[](https://dom.spec.whatwg.org/#interface-namednodemap)

[NamedNodeMap](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap 'The NamedNodeMap interface represents a collection of Attr objects. Objects inside a NamedNodeMap are not in any particular order, unlike NodeList, although they may be accessed by an index as in an array.')

In all current engines.

Firefox34+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android34+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window,
[LegacyUnenumerableNamedProperties](https://webidl.spec.whatwg.org/#LegacyUnenumerableNamedProperties)\]
interface `NamedNodeMap` {
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [length](https://dom.spec.whatwg.org/#dom-namednodemap-length);
getter [Attr](https://dom.spec.whatwg.org/#attr)? [item](https://dom.spec.whatwg.org/#dom-namednodemap-item)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `index`[](https://dom.spec.whatwg.org/#dom-namednodemap-item-index-index));
getter [Attr](https://dom.spec.whatwg.org/#attr)? [getNamedItem](https://dom.spec.whatwg.org/#dom-namednodemap-getnameditem)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-namednodemap-getnameditem-qualifiedname-qualifiedname));
[Attr](https://dom.spec.whatwg.org/#attr)? [getNamedItemNS](https://dom.spec.whatwg.org/#dom-namednodemap-getnameditemns)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-namednodemap-getnameditemns-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-namednodemap-getnameditemns-namespace-localname-localname));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Attr](https://dom.spec.whatwg.org/#attr)? [setNamedItem](https://dom.spec.whatwg.org/#dom-namednodemap-setnameditem)([Attr](https://dom.spec.whatwg.org/#attr) `attr`[](https://dom.spec.whatwg.org/#dom-namednodemap-setnameditem-attr-attr));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Attr](https://dom.spec.whatwg.org/#attr)? [setNamedItemNS](https://dom.spec.whatwg.org/#dom-namednodemap-setnameditemns)([Attr](https://dom.spec.whatwg.org/#attr) `attr`[](https://dom.spec.whatwg.org/#dom-namednodemap-setnameditemns-attr-attr));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Attr](https://dom.spec.whatwg.org/#attr) [removeNamedItem](https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `qualifiedName`[](https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem-qualifiedname-qualifiedname));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Attr](https://dom.spec.whatwg.org/#attr) [removeNamedItemNS](https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `namespace`[](https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns-namespace-localname-namespace), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns-namespace-localname-localname));
};

A `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)` has an associated element (an [element](https://dom.spec.whatwg.org/#concept-element)).

A `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)` object’s attribute list is its [element](https://dom.spec.whatwg.org/#concept-namednodemap-element)’s [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute).

---

A `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)` object’s [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices) are the numbers in the range zero to its [attribute list](https://dom.spec.whatwg.org/#concept-namednodemap-attribute)’s [size](https://infra.spec.whatwg.org/#list-size) minus one, unless the [attribute list](https://dom.spec.whatwg.org/#concept-namednodemap-attribute) [is empty](https://infra.spec.whatwg.org/#list-is-empty), in which case there are no [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices).

The `length` getter steps are to return the [attribute list](https://dom.spec.whatwg.org/#concept-namednodemap-attribute)’s [size](https://infra.spec.whatwg.org/#list-size).

The `item(index)` method steps are:

1.  If index is equal to or greater than [this](https://webidl.spec.whatwg.org/#this)’s [attribute list](https://dom.spec.whatwg.org/#concept-namednodemap-attribute)’s [size](https://infra.spec.whatwg.org/#list-size), then return null.
2.  Otherwise, return [this](https://webidl.spec.whatwg.org/#this)’s [attribute list](https://dom.spec.whatwg.org/#concept-namednodemap-attribute)\[index\].

A `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)` object’s [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names) are the return value of running these steps:

1.  Let names be the [qualified names](https://dom.spec.whatwg.org/#concept-attribute-qualified-name) of the [attributes](https://dom.spec.whatwg.org/#concept-attribute) in this `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)` object’s [attribute list](https://dom.spec.whatwg.org/#concept-namednodemap-attribute), with duplicates omitted, in order.
2.  If this `[NamedNodeMap](https://dom.spec.whatwg.org/#namednodemap)` object’s [element](https://dom.spec.whatwg.org/#concept-namednodemap-element) is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and its [node document](https://dom.spec.whatwg.org/#concept-node-document) is an [HTML document](https://dom.spec.whatwg.org/#html-document), then [for each](https://infra.spec.whatwg.org/#list-iterate) name in names:

    1.  Let lowercaseName be name, in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
    2.  If lowercaseName is not equal to name, remove name from names.

3.  Return names.

[NamedNodeMap/getNamedItem](https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/getNamedItem 'The getNamedItem() method of the NamedNodeMap interface returns the Attr corresponding to the given name, or null if there is no corresponding attribute.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `getNamedItem(qualifiedName)` method steps are to return the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name) given qualifiedName and [element](https://dom.spec.whatwg.org/#concept-namednodemap-element).

The `getNamedItemNS(namespace, localName)` method steps are to return the result of [getting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given namespace, localName, and [element](https://dom.spec.whatwg.org/#concept-namednodemap-element).

The `setNamedItem(attr)` and `setNamedItemNS(attr)` method steps are to return the result of [setting an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-set) given attr and [element](https://dom.spec.whatwg.org/#concept-namednodemap-element).

The `removeNamedItem(qualifiedName)` method steps are:

1.  Let attr be the result of [removing an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name) given qualifiedName and [element](https://dom.spec.whatwg.org/#concept-namednodemap-element).
2.  If attr is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotFoundError](https://webidl.spec.whatwg.org/#notfounderror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Return attr.

The `removeNamedItemNS(namespace, localName)` method steps are:

1.  Let attr be the result of [removing an attribute](https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace) given namespace, localName, and [element](https://dom.spec.whatwg.org/#concept-namednodemap-element).
2.  If attr is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotFoundError](https://webidl.spec.whatwg.org/#notfounderror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Return attr.

#### 4.9.2. Interface `[Attr](https://dom.spec.whatwg.org/#attr)`[](https://dom.spec.whatwg.org/#interface-attr)

[Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr "The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera8+Edge79+

---

Edge (Legacy)12+IE5.5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `Attr` : [Node](https://dom.spec.whatwg.org/#node) {
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [namespaceURI](https://dom.spec.whatwg.org/#dom-attr-namespaceuri);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [prefix](https://dom.spec.whatwg.org/#dom-attr-prefix);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [localName](https://dom.spec.whatwg.org/#dom-attr-localname);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [name](https://dom.spec.whatwg.org/#dom-attr-name);
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [value](https://dom.spec.whatwg.org/#dom-attr-value);

readonly attribute [Element](https://dom.spec.whatwg.org/#element)? [ownerElement](https://dom.spec.whatwg.org/#dom-attr-ownerelement);

readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [specified](https://dom.spec.whatwg.org/#dom-attr-specified); // useless; always returns true
};

`[Attr](https://dom.spec.whatwg.org/#attr)` [nodes](https://dom.spec.whatwg.org/#concept-node) are simply known as attributes. They are sometimes referred to as _content attributes_ to avoid confusion with IDL attributes.

[Attributes](https://dom.spec.whatwg.org/#concept-attribute) have a namespace (null or a non-empty string), namespace prefix (null or a non-empty string), local name (a non-empty string), value (a string), and element (null or an [element](https://dom.spec.whatwg.org/#concept-element)).

If designed today they would just have a name and value. ☹

An [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s qualified name is its [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) if its [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix) is null, and its [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix), followed by "`:`", followed by its [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), otherwise.

User agents could have this as an internal slot as an optimization.

When an [attribute](https://dom.spec.whatwg.org/#concept-attribute) is created, its [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is given. Unless explicitly given when an [attribute](https://dom.spec.whatwg.org/#concept-attribute) is created, its [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix), and [element](https://dom.spec.whatwg.org/#concept-attribute-element) are set to null, and its [value](https://dom.spec.whatwg.org/#concept-attribute-value) is set to the empty string.

An `A` attribute is an [attribute](https://dom.spec.whatwg.org/#concept-attribute) whose [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) is `A` and whose [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace) and [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix) are null.

---

[Attr/namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Attr/namespaceURI 'The Attr.namespaceURI read-only property returns the namespace URI of the attribute, or null if the element is not in a namespace.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `namespaceURI` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [namespace](https://dom.spec.whatwg.org/#concept-attribute-namespace).

[Attr/prefix](https://developer.mozilla.org/en-US/docs/Web/API/Attr/prefix 'The Attr.prefix read-only property returns the namespace prefix of the specified attribute, or null if no prefix is specified.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `prefix` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [namespace prefix](https://dom.spec.whatwg.org/#concept-attribute-namespace-prefix).

[Attr/localName](https://developer.mozilla.org/en-US/docs/Web/API/Attr/localName 'The Attr.localName read-only property returns the local part of the qualified name of an attribute.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `localName` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name).

The `name` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [qualified name](https://dom.spec.whatwg.org/#concept-attribute-qualified-name).

The `value` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [value](https://dom.spec.whatwg.org/#concept-attribute-value).

To set an existing attribute value, given an [attribute](https://dom.spec.whatwg.org/#concept-attribute) attribute and string value, run these steps:

1.  If attribute’s [element](https://dom.spec.whatwg.org/#concept-attribute-element) is null, then set attribute’s [value](https://dom.spec.whatwg.org/#concept-attribute-value) to value.
2.  Otherwise, [change](https://dom.spec.whatwg.org/#concept-element-attributes-change) attribute to value.

The `[value](https://dom.spec.whatwg.org/#dom-attr-value)` setter steps are to [set an existing attribute value](https://dom.spec.whatwg.org/#set-an-existing-attribute-value) with [this](https://webidl.spec.whatwg.org/#this) and the given value.

---

The `ownerElement` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [element](https://dom.spec.whatwg.org/#concept-attribute-element).

---

The `specified` getter steps are to return true.

### 4.10. Interface `[CharacterData](https://dom.spec.whatwg.org/#characterdata)`[](https://dom.spec.whatwg.org/#interface-characterdata)

[CharacterData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData "The CharacterData abstract interface represents a Node object that contains characters. This is an abstract interface, meaning there aren't any objects of type CharacterData: it is implemented by other interfaces like Text, Comment, CDATASection, or ProcessingInstruction, which aren't abstract.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `CharacterData` : [Node](https://dom.spec.whatwg.org/#node) {
attribute \[[LegacyNullToEmptyString](https://webidl.spec.whatwg.org/#LegacyNullToEmptyString)\] [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [data](https://dom.spec.whatwg.org/#dom-characterdata-data);
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [length](https://dom.spec.whatwg.org/#dom-characterdata-length);
[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [substringData](https://dom.spec.whatwg.org/#dom-characterdata-substringdata)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-characterdata-substringdata-offset-count-offset), [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `count`[](https://dom.spec.whatwg.org/#dom-characterdata-substringdata-offset-count-count));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [appendData](https://dom.spec.whatwg.org/#dom-characterdata-appenddata)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-characterdata-appenddata-data-data));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [insertData](https://dom.spec.whatwg.org/#dom-characterdata-insertdata)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-characterdata-insertdata-offset-data-offset), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-characterdata-insertdata-offset-data-data));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [deleteData](https://dom.spec.whatwg.org/#dom-characterdata-deletedata)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-characterdata-deletedata-offset-count-offset), [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `count`[](https://dom.spec.whatwg.org/#dom-characterdata-deletedata-offset-count-count));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [replaceData](https://dom.spec.whatwg.org/#dom-characterdata-replacedata)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-characterdata-replacedata-offset-count-data-offset), [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `count`[](https://dom.spec.whatwg.org/#dom-characterdata-replacedata-offset-count-data-count), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-characterdata-replacedata-offset-count-data-data));
};

`[CharacterData](https://dom.spec.whatwg.org/#characterdata)` is an abstract interface. You cannot get a direct instance of it. It is used by `[Text](https://dom.spec.whatwg.org/#text)`, `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`, and `[Comment](https://dom.spec.whatwg.org/#comment)` [nodes](https://dom.spec.whatwg.org/#concept-node).

Each [node](https://dom.spec.whatwg.org/#concept-node) inheriting from the `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` interface has an associated mutable string called data.

To replace data of node node with offset offset, count count, and data data, run these steps:

1.  Let length be node’s [length](https://dom.spec.whatwg.org/#concept-node-length).
2.  If offset is greater than length, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[IndexSizeError](https://webidl.spec.whatwg.org/#indexsizeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If offset plus count is greater than length, then set count to length minus offset.
4.  [Queue a mutation record](https://dom.spec.whatwg.org/#queue-a-mutation-record) of "`characterData`" for node with null, null, node’s [data](https://dom.spec.whatwg.org/#concept-cd-data), « », « », null, and null.
5.  Insert data into node’s [data](https://dom.spec.whatwg.org/#concept-cd-data) after offset [code units](https://infra.spec.whatwg.org/#code-unit).
6.  Let delete offset be offset + data’s [length](https://infra.spec.whatwg.org/#string-length).
7.  Starting from delete offset [code units](https://infra.spec.whatwg.org/#code-unit), remove count [code units](https://infra.spec.whatwg.org/#code-unit) from node’s [data](https://dom.spec.whatwg.org/#concept-cd-data).
8.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is node and [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is greater than offset but less than or equal to offset plus count, set its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) to offset.
9.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is node and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is greater than offset but less than or equal to offset plus count, set its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) to offset.
10. For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is node and [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is greater than offset plus count, increase its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) by data’s [length](https://infra.spec.whatwg.org/#string-length) and decrease it by count.

11. For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is node and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is greater than offset plus count, increase its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) by data’s [length](https://infra.spec.whatwg.org/#string-length) and decrease it by count.

12. If node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is non-null, then run the [children changed steps](https://dom.spec.whatwg.org/#concept-node-children-changed-ext) for node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).

To substring data with node node, offset offset, and count count, run these steps:

1.  Let length be node’s [length](https://dom.spec.whatwg.org/#concept-node-length).
2.  If offset is greater than length, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[IndexSizeError](https://webidl.spec.whatwg.org/#indexsizeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If offset plus count is greater than length, return a string whose value is the [code units](https://infra.spec.whatwg.org/#code-unit) from the offsetth [code unit](https://infra.spec.whatwg.org/#code-unit) to the end of node’s [data](https://dom.spec.whatwg.org/#concept-cd-data), and then return.
4.  Return a string whose value is the [code units](https://infra.spec.whatwg.org/#code-unit) from the offsetth [code unit](https://infra.spec.whatwg.org/#code-unit) to the offset+countth [code unit](https://infra.spec.whatwg.org/#code-unit) in node’s [data](https://dom.spec.whatwg.org/#concept-cd-data).

[CharacterData/data](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/data "The data property of the CharacterData interface represent the value of the current object's data.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `data` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [data](https://dom.spec.whatwg.org/#concept-cd-data). Its setter must [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node [this](https://webidl.spec.whatwg.org/#this), offset 0, count [this](https://webidl.spec.whatwg.org/#this)’s [length](https://dom.spec.whatwg.org/#concept-node-length), and data new value.

[CharacterData/length](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/length 'The read-only CharacterData.length property returns the number of characters in the contained data, as a positive integer.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `length` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [length](https://dom.spec.whatwg.org/#concept-node-length).

[CharacterData/substringData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/substringData 'The substringData() method of the CharacterData interface returns a portion of the existing data, starting at the specified index and extending for a given number of characters afterwards.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `substringData(offset, count)` method steps are to return the result of running [substring data](https://dom.spec.whatwg.org/#concept-cd-substring) with node [this](https://webidl.spec.whatwg.org/#this), offset offset, and count count.

[CharacterData/appendData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/appendData "The appendData() method of the CharacterData interface adds the provided data to the end of the node's current data.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `appendData(data)` method steps are to [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node [this](https://webidl.spec.whatwg.org/#this), offset [this](https://webidl.spec.whatwg.org/#this)’s [length](https://dom.spec.whatwg.org/#concept-node-length), count 0, and data data.

[CharacterData/insertData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/insertData "The insertData() method of the CharacterData interface inserts the provided data into this CharacterData node's current data, at the provided offset from the start of the existing data. The provided data is spliced into the existing data.")

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `insertData(offset, data)` method steps are to [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node [this](https://webidl.spec.whatwg.org/#this), offset offset, count 0, and data data.

[CharacterData/deleteData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/deleteData 'The deleteData() method of the CharacterData interface removes all or part of the data from this CharacterData node.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `deleteData(offset, count)` method steps are to [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node [this](https://webidl.spec.whatwg.org/#this), offset offset, count count, and data the empty string.

[CharacterData/replaceData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/replaceData 'The replaceData() of the CharacterData interface replace a part of the data inside the node with the string given in paramater.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE6+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `replaceData(offset, count, data)` method steps are to [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node [this](https://webidl.spec.whatwg.org/#this), offset offset, count count, and data data.

### 4.11. Interface `[Text](https://dom.spec.whatwg.org/#text)`[](https://dom.spec.whatwg.org/#interface-text)

[Text](https://developer.mozilla.org/en-US/docs/Web/API/Text 'The Text interface represents a text node in a DOM tree.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera MobileYes

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `Text` : [CharacterData](https://dom.spec.whatwg.org/#characterdata) {
[constructor](https://dom.spec.whatwg.org/#dom-text-text)(optional [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `data`[](https://dom.spec.whatwg.org/#dom-text-text-data-data) = "");

\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Text](https://dom.spec.whatwg.org/#text) [splitText](https://dom.spec.whatwg.org/#dom-text-splittext)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-text-splittext-offset-offset));
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [wholeText](https://dom.spec.whatwg.org/#dom-text-wholetext);
};

[Text/Text](https://developer.mozilla.org/en-US/docs/Web/API/Text/Text 'The Text() constructor returns a new Text object with the optional string given in parameter as its textual content.')

In all current engines.

Firefox24+Safari8+Chrome28+

---

Opera15+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android24+iOS Safari8+Chrome for Android28+Android WebView37+Samsung Internet2.0+Opera Mobile14+

`text = new [Text([data = ""])](https://dom.spec.whatwg.org/#dom-text-text)`

Returns a new `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data.

[Text/splitText](https://developer.mozilla.org/en-US/docs/Web/API/Text/splitText 'The splitText() method of the Text interface breaks the Text node into two nodes at the specified offset, keeping both nodes in the tree as siblings.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE5+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera MobileYes

`` text . `[splitText(offset)](https://dom.spec.whatwg.org/#dom-text-splittext)`  ``

Splits [data](https://dom.spec.whatwg.org/#concept-cd-data) at the given offset and returns the remainder as `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node).

[Text/wholeText](https://developer.mozilla.org/en-US/docs/Web/API/Text/wholeText 'The read-only wholeText property of the Text interface returns the full text of all Text nodes logically adjacent to the node. The text is concatenated in document order. This allows specifying any text node and obtaining all adjacent text as a single string.')

In all current engines.

Firefox3.5+Safari4+Chrome1+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3.2+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera MobileYes

`` text . `[wholeText](https://dom.spec.whatwg.org/#dom-text-wholetext)`  ``

Returns the combined [data](https://dom.spec.whatwg.org/#concept-cd-data) of all direct `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) [siblings](https://dom.spec.whatwg.org/#concept-tree-sibling).

---

An exclusive `[Text](https://dom.spec.whatwg.org/#text)` node is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) that is not a `[CDATASection](https://dom.spec.whatwg.org/#cdatasection)` [node](https://dom.spec.whatwg.org/#concept-node).

The contiguous `[Text](https://dom.spec.whatwg.org/#text)` nodes of a [node](https://dom.spec.whatwg.org/#concept-node) node are node, node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), if any, and its [contiguous `Text` nodes](https://dom.spec.whatwg.org/#contiguous-text-nodes), and node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling) `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), if any, and its [contiguous `Text` nodes](https://dom.spec.whatwg.org/#contiguous-text-nodes), avoiding any duplicates.

The contiguous exclusive `[Text](https://dom.spec.whatwg.org/#text)` nodes of a [node](https://dom.spec.whatwg.org/#concept-node) node are node, node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node), if any, and its [contiguous exclusive `Text` nodes](https://dom.spec.whatwg.org/#contiguous-exclusive-text-nodes), and node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling) [exclusive `Text` node](https://dom.spec.whatwg.org/#exclusive-text-node), if any, and its [contiguous exclusive `Text` nodes](https://dom.spec.whatwg.org/#contiguous-exclusive-text-nodes), avoiding any duplicates.

The child text content[](https://dom.spec.whatwg.org/#concept-child-text-content) of a [node](https://dom.spec.whatwg.org/#concept-node) node is the [concatenation](https://infra.spec.whatwg.org/#string-concatenate) of the [data](https://dom.spec.whatwg.org/#concept-cd-data) of all the `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) [children](https://dom.spec.whatwg.org/#concept-tree-child) of node, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

The descendant text content of a [node](https://dom.spec.whatwg.org/#concept-node) node is the [concatenation](https://infra.spec.whatwg.org/#string-concatenate) of the [data](https://dom.spec.whatwg.org/#concept-cd-data) of all the `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) of node, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

---

The `new Text(data)` constructor steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [data](https://dom.spec.whatwg.org/#concept-cd-data) to data and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document) to [current global object](https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object)’s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window).

To split a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) node with offset offset, run these steps:

1.  Let length be node’s [length](https://dom.spec.whatwg.org/#concept-node-length).
2.  If offset is greater than length, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[IndexSizeError](https://webidl.spec.whatwg.org/#indexsizeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Let count be length minus offset.
4.  Let new data be the result of [substringing data](https://dom.spec.whatwg.org/#concept-cd-substring) with node node, offset offset, and count count.
5.  Let new node be a new `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), with the same [node document](https://dom.spec.whatwg.org/#concept-node-document) as node. Set new node’s [data](https://dom.spec.whatwg.org/#concept-cd-data) to new data.
6.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
7.  If parent is not null, then:

    1.  [Insert](https://dom.spec.whatwg.org/#concept-node-insert) new node into parent before node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
    2.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is node and [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is greater than offset, set its [start node](https://dom.spec.whatwg.org/#concept-range-start-node) to new node and decrease its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) by offset.
    3.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is node and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is greater than offset, set its [end node](https://dom.spec.whatwg.org/#concept-range-end-node) to new node and decrease its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) by offset.
    4.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is parent and [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is equal to the [index](https://dom.spec.whatwg.org/#concept-tree-index) of node plus 1, increase its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) by 1.
    5.  For each [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is parent and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is equal to the [index](https://dom.spec.whatwg.org/#concept-tree-index) of node plus 1, increase its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) by 1.

8.  [Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node node, offset offset, count count, and data the empty string.
9.  Return new node.

The `splitText(offset)` method steps are to [split](https://dom.spec.whatwg.org/#concept-text-split) [this](https://webidl.spec.whatwg.org/#this) with offset offset.

The `wholeText` getter steps are to return the [concatenation](https://infra.spec.whatwg.org/#string-concatenate) of the [data](https://dom.spec.whatwg.org/#concept-cd-data) of the [contiguous `Text` nodes](https://dom.spec.whatwg.org/#contiguous-text-nodes) of [this](https://webidl.spec.whatwg.org/#this), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

### 4.12. Interface `[CDATASection](https://dom.spec.whatwg.org/#cdatasection)`[](https://dom.spec.whatwg.org/#interface-cdatasection)

[CDATASection](https://developer.mozilla.org/en-US/docs/Web/API/CDATASection "The CDATASection interface represents a CDATA section that can be used within XML to include extended portions of unescaped text. When inside a CDATA section, the symbols < and & don't need escaping as they normally do.")

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `CDATASection` : [Text](https://dom.spec.whatwg.org/#text) {
};

### 4.13. Interface `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)`[](https://dom.spec.whatwg.org/#interface-processinginstruction)

[ProcessingInstruction](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction "The ProcessingInstruction interface represents a processing instruction; that is, a Node which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction.")

In all current engines.

Firefox1+Safari4+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `ProcessingInstruction` : [CharacterData](https://dom.spec.whatwg.org/#characterdata) {
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [target](https://dom.spec.whatwg.org/#dom-processinginstruction-target);
};

`[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)` [nodes](https://dom.spec.whatwg.org/#concept-node) have an associated target.

[ProcessingInstruction/target](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction/target 'The read-only target property of the ProcessingInstruction interface represent the application to which the ProcessingInstruction is targeted.')

In all current engines.

Firefox1+Safari4+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `target` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [target](https://dom.spec.whatwg.org/#concept-pi-target).

[Comment](https://developer.mozilla.org/en-US/docs/Web/API/Comment 'The Comment interface represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for AndroidYesiOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface : [CharacterData](https://dom.spec.whatwg.org/#characterdata) {
[constructor](https://dom.spec.whatwg.org/#dom-comment-comment)(optional [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) = "");
};

[Comment/Comment](https://developer.mozilla.org/en-US/docs/Web/API/Comment/Comment 'The Comment() constructor returns a newly created Comment object with the optional string given in parameter as its textual content.')

In all current engines.

Firefox24+Safari7+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)16+IENone

---

Firefox for Android24+iOS Safari7+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

`comment = new [Comment([data = ""])](https://dom.spec.whatwg.org/#dom-comment-comment)`

Returns a new `[Comment](https://dom.spec.whatwg.org/#comment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is data.

The constructor steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [data](https://dom.spec.whatwg.org/#concept-cd-data) to data and [this](https://webidl.spec.whatwg.org/#this)’s [node document](https://dom.spec.whatwg.org/#concept-node-document) to [current global object](https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object)’s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window).

## 5\. Ranges[](https://dom.spec.whatwg.org/#ranges)

### 5.1. Introduction to "DOM Ranges"[](https://dom.spec.whatwg.org/#introduction-to-dom-ranges)

`[StaticRange](https://dom.spec.whatwg.org/#staticrange)` and `[Range](https://dom.spec.whatwg.org/#range)` objects ([ranges](https://dom.spec.whatwg.org/#concept-range)) represent a sequence of content within a [node tree](https://dom.spec.whatwg.org/#concept-node-tree). Each [range](https://dom.spec.whatwg.org/#concept-range) has a [start](https://dom.spec.whatwg.org/#concept-range-start) and an [end](https://dom.spec.whatwg.org/#concept-range-end) which are [boundary points](https://dom.spec.whatwg.org/#concept-range-bp). A [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) is a [tuple](https://infra.spec.whatwg.org/#tuple) consisting of a [node](https://dom.spec.whatwg.org/#boundary-point-node) and an [offset](https://dom.spec.whatwg.org/#concept-range-bp-offset). So in other words, a [range](https://dom.spec.whatwg.org/#concept-range) represents a piece of content within a [node tree](https://dom.spec.whatwg.org/#concept-node-tree) between two [boundary points](https://dom.spec.whatwg.org/#concept-range-bp).

[Ranges](https://dom.spec.whatwg.org/#concept-range) are frequently used in editing for selecting and copying content.

-   `[Element](https://dom.spec.whatwg.org/#element)`: `p`
    -   `[Element](https://dom.spec.whatwg.org/#element)`: `<img src="insanity-wolf" alt="Little-endian BOM; decode as big-endian!">`
    -   `[Text](https://dom.spec.whatwg.org/#text)`: CSS 2.1 syndata is
    -   `[Element](https://dom.spec.whatwg.org/#element)`: `<em>`
        -   `[Text](https://dom.spec.whatwg.org/#text)`: awesome
    -   `[Text](https://dom.spec.whatwg.org/#text)`: !

In the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) above, a [range](https://dom.spec.whatwg.org/#concept-range) can be used to represent the sequence “syndata is awes”. Assuming p is assigned to the `p` [element](https://dom.spec.whatwg.org/#concept-element), and em to the `em` [element](https://dom.spec.whatwg.org/#concept-element), this would be done as follows:

```
var range = new Range(),
    firstText = p.childNodes[1],
    secondText = em.firstChild
range.setStart(firstText, 9) // do not forget the leading space
range.setEnd(secondText, 4)
// range now stringifies to the aforementioned quote
```

[Attributes](https://dom.spec.whatwg.org/#concept-attribute) such as `src` and `alt` in the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) above cannot be represented by a [range](https://dom.spec.whatwg.org/#concept-range). [Ranges](https://dom.spec.whatwg.org/#concept-range) are only useful for [nodes](https://dom.spec.whatwg.org/#concept-node).

`[Range](https://dom.spec.whatwg.org/#range)` objects, unlike `[StaticRange](https://dom.spec.whatwg.org/#staticrange)` objects, are affected by mutations to the [node tree](https://dom.spec.whatwg.org/#concept-node-tree). Therefore they are also known as [live ranges](https://dom.spec.whatwg.org/#concept-live-range). Such mutations will not invalidate them and will try to ensure that it still represents the same piece of content. Necessarily, a [live range](https://dom.spec.whatwg.org/#concept-live-range) might itself be modified as part of the mutation to the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) when, e.g., part of the content it represents is mutated.

See the [insert](https://dom.spec.whatwg.org/#concept-node-insert) and [remove](https://dom.spec.whatwg.org/#concept-node-remove) algorithms, the `[normalize()](https://dom.spec.whatwg.org/#dom-node-normalize)` method, and the [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) and [split](https://dom.spec.whatwg.org/#concept-text-split) algorithms for details.

Updating [live ranges](https://dom.spec.whatwg.org/#concept-live-range) in response to [node tree](https://dom.spec.whatwg.org/#concept-node-tree) mutations can be expensive. For every [node tree](https://dom.spec.whatwg.org/#concept-node-tree) change, all affected `[Range](https://dom.spec.whatwg.org/#range)` objects need to be updated. Even if the application is uninterested in some [live ranges](https://dom.spec.whatwg.org/#concept-live-range), it still has to pay the cost of keeping them up-to-date when a mutation occurs.

A `[StaticRange](https://dom.spec.whatwg.org/#staticrange)` object is a lightweight [range](https://dom.spec.whatwg.org/#concept-range) that does not update when the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) mutates. It is therefore not subject to the same maintenance cost as [live ranges](https://dom.spec.whatwg.org/#concept-live-range).

### 5.2. Boundary points[](https://dom.spec.whatwg.org/#boundary-points)

A boundary point is a [tuple](https://infra.spec.whatwg.org/#tuple) consisting of a node (a [node](https://dom.spec.whatwg.org/#concept-node)) and an offset (a non-negative integer).

A correct [boundary point](https://dom.spec.whatwg.org/#concept-range-bp)’s [offset](https://dom.spec.whatwg.org/#concept-range-bp-offset) will be between 0 and the [boundary point](https://dom.spec.whatwg.org/#concept-range-bp)’s [node](https://dom.spec.whatwg.org/#boundary-point-node)’s [length](https://dom.spec.whatwg.org/#concept-node-length), inclusive.

The position of a [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (nodeA, offsetA) relative to a [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (nodeB, offsetB) is before, equal, or after, as returned by these steps:

1.  Assert: nodeA and nodeB have the same [root](https://dom.spec.whatwg.org/#concept-tree-root).
2.  If nodeA is nodeB, then return [equal](https://dom.spec.whatwg.org/#concept-range-bp-equal) if offsetA is offsetB, [before](https://dom.spec.whatwg.org/#concept-range-bp-before) if offsetA is less than offsetB, and [after](https://dom.spec.whatwg.org/#concept-range-bp-after) if offsetA is greater than offsetB.
3.  If nodeA is [following](https://dom.spec.whatwg.org/#concept-tree-following) nodeB, then if the [position](https://dom.spec.whatwg.org/#concept-range-bp-position) of (nodeB, offsetB) relative to (nodeA, offsetA) is [before](https://dom.spec.whatwg.org/#concept-range-bp-before), return [after](https://dom.spec.whatwg.org/#concept-range-bp-after), and if it is [after](https://dom.spec.whatwg.org/#concept-range-bp-after), return [before](https://dom.spec.whatwg.org/#concept-range-bp-before).
4.  If nodeA is an [ancestor](https://dom.spec.whatwg.org/#concept-tree-ancestor) of nodeB:

    1.  Let child be nodeB.
    2.  While child is not a [child](https://dom.spec.whatwg.org/#concept-tree-child) of nodeA, set child to its [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
    3.  If child’s [index](https://dom.spec.whatwg.org/#concept-tree-index) is less than offsetA, then return [after](https://dom.spec.whatwg.org/#concept-range-bp-after).

5.  Return [before](https://dom.spec.whatwg.org/#concept-range-bp-before).

### 5.3. Interface `[AbstractRange](https://dom.spec.whatwg.org/#abstractrange)`[](https://dom.spec.whatwg.org/#interface-abstractrange)

[AbstractRange](https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange 'The AbstractRange abstract interface is the base class upon which all DOM range types are defined. A range is an object that indicates the start and end points of a section of content within the document.')

In all current engines.

Firefox69+Safari14.1+Chrome90+

---

Opera76+Edge90+

---

Edge (Legacy)NoneIENone

---

Firefox for AndroidNoneiOS Safari14.5+Chrome for Android90+Android WebView90+Samsung Internet15.0+Opera Mobile64+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `AbstractRange` {
readonly attribute [Node](https://dom.spec.whatwg.org/#node) [startContainer](https://dom.spec.whatwg.org/#dom-range-startcontainer);
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [startOffset](https://dom.spec.whatwg.org/#dom-range-startoffset);
readonly attribute [Node](https://dom.spec.whatwg.org/#node) [endContainer](https://dom.spec.whatwg.org/#dom-range-endcontainer);
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [endOffset](https://dom.spec.whatwg.org/#dom-range-endoffset);
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [collapsed](https://dom.spec.whatwg.org/#dom-range-collapsed);
};

Objects implementing the `[AbstractRange](https://dom.spec.whatwg.org/#abstractrange)` interface are known as ranges.

A [range](https://dom.spec.whatwg.org/#concept-range) has two associated [boundary points](https://dom.spec.whatwg.org/#concept-range-bp) — a start and end.

For convenience, a [range](https://dom.spec.whatwg.org/#concept-range)’s start node is its [start](https://dom.spec.whatwg.org/#concept-range-start)’s [node](https://dom.spec.whatwg.org/#boundary-point-node), its start offset is its [start](https://dom.spec.whatwg.org/#concept-range-start)’s [offset](https://dom.spec.whatwg.org/#concept-range-bp-offset), its end node is its [end](https://dom.spec.whatwg.org/#concept-range-end)’s [node](https://dom.spec.whatwg.org/#boundary-point-node), and its end offset is its [end](https://dom.spec.whatwg.org/#concept-range-end)’s [offset](https://dom.spec.whatwg.org/#concept-range-bp-offset).

A [range](https://dom.spec.whatwg.org/#concept-range) is collapsed if its [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is its [end node](https://dom.spec.whatwg.org/#concept-range-end-node) and its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset).

[AbstractRange/startContainer](https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/startContainer 'The read-only startContainer property of the AbstractRange interface returns the start Node for the range.')

In all current engines.

Firefox69+Safari14.1+Chrome90+

---

Opera76+Edge90+

---

Edge (Legacy)NoneIENone

---

Firefox for AndroidNoneiOS Safari14.5+Chrome for Android90+Android WebView90+Samsung Internet15.0+Opera Mobile64+

[Range/startContainer](https://developer.mozilla.org/en-US/docs/Web/API/Range/startContainer 'The Range.startContainer read-only property returns the Node within which the Range starts. To change the start position of a node, use one of the Range.setStart() methods.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[StaticRange/startContainer](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startContainer 'The read-only startContainer property of the StaticRange interface returns the start Node for the range.')

In all current engines.

Firefox69+Safari10.1+Chrome60+

---

Opera47+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for AndroidNoneiOS Safari10.3+Chrome for Android60+Android WebView60+Samsung Internet8.0+Opera Mobile44+

`node = range . [startContainer](https://dom.spec.whatwg.org/#dom-range-startcontainer)`

Returns range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node).

[AbstractRange/startOffset](https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/startOffset "The read-only startOffset property of the AbstractRange interface returns the offset into the start node of the range's start position.")

In all current engines.

Firefox69+Safari14.1+Chrome90+

---

Opera76+Edge90+

---

Edge (Legacy)NoneIENone

---

Firefox for AndroidNoneiOS Safari14.5+Chrome for Android90+Android WebView90+Samsung Internet15.0+Opera Mobile64+

[Range/startOffset](https://developer.mozilla.org/en-US/docs/Web/API/Range/startOffset 'The Range.startOffset read-only property returns a number representing where in the startContainer the Range starts.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[StaticRange/startOffset](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startOffset "The read-only startOffset property of the StaticRange interface returns the offset into the start node of the range's start position.")

In all current engines.

Firefox69+Safari10.1+Chrome60+

---

Opera47+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for AndroidNoneiOS Safari10.3+Chrome for Android60+Android WebView60+Samsung Internet8.0+Opera Mobile44+

`offset = range . [startOffset](https://dom.spec.whatwg.org/#dom-range-startoffset)`

Returns range’s [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset).

[AbstractRange/endContainer](https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/endContainer 'The endContainer property of the AbstractRange interface returns the Node in which the end of the range is located.')

In all current engines.

Firefox69+Safari14.1+Chrome90+

---

Opera76+Edge90+

---

Edge (Legacy)NoneIENone

---

Firefox for AndroidNoneiOS Safari14.5+Chrome for Android90+Android WebView90+Samsung Internet15.0+Opera Mobile64+

[Range/endContainer](https://developer.mozilla.org/en-US/docs/Web/API/Range/endContainer 'The Range.endContainer read-only property returns the Node within which the Range ends. To change the end position of a node, use the Range.setEnd() method or a similar one.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[StaticRange/endContainer](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endContainer 'The endContainer property of the StaticRange interface returns the end Node for the range.')

In all current engines.

Firefox69+Safari10.1+Chrome60+

---

Opera47+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for AndroidNoneiOS Safari10.3+Chrome for Android60+Android WebView60+Samsung Internet8.0+Opera Mobile44+

`node = range . [endContainer](https://dom.spec.whatwg.org/#dom-range-endcontainer)`

Returns range’s [end node](https://dom.spec.whatwg.org/#concept-range-end-node).

[AbstractRange/endOffset](https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/endOffset "The endOffset property of the AbstractRange interface returns the offset into the end node of the range's end position.")

In all current engines.

Firefox69+Safari14.1+Chrome90+

---

Opera76+Edge90+

---

Edge (Legacy)NoneIENone

---

Firefox for AndroidNoneiOS Safari14.5+Chrome for Android90+Android WebView90+Samsung Internet15.0+Opera Mobile64+

[Range/endOffset](https://developer.mozilla.org/en-US/docs/Web/API/Range/endOffset 'The Range.endOffset read-only property returns a number representing where in the Range.endContainer the Range ends.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[StaticRange/endOffset](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endOffset "The endOffset property of the StaticRange interface returns the offset into the end node of the range's end position.")

In all current engines.

Firefox69+Safari10.1+Chrome60+

---

Opera47+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for AndroidNoneiOS Safari10.3+Chrome for Android60+Android WebView60+Samsung Internet8.0+Opera Mobile44+

`offset = range . [endOffset](https://dom.spec.whatwg.org/#dom-range-endoffset)`

Returns range’s [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset).

[AbstractRange/collapsed](https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/collapsed "The collapsed read-only property of the AbstractRange interface returns true if the range's start position and end position are the same.")

In all current engines.

Firefox69+Safari14.1+Chrome90+

---

Opera76+Edge90+

---

Edge (Legacy)NoneIENone

---

Firefox for AndroidNoneiOS Safari14.5+Chrome for Android90+Android WebView90+Samsung Internet15.0+Opera Mobile64+

[Range/collapsed](https://developer.mozilla.org/en-US/docs/Web/API/Range/collapsed 'The Range.collapsed read-only property returns a boolean flag indicating whether the start and end points of the Range are at the same position. It returns true if the start and end boundary points of the Range are the same point in the DOM, false if not.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[StaticRange/collapsed](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/collapsed "The collapsed read-only property of the StaticRange interface returns true if the range's start position and end position are the same.")

In all current engines.

Firefox69+Safari10.1+Chrome60+

---

Opera47+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for AndroidNoneiOS Safari10.3+Chrome for Android60+Android WebView60+Samsung Internet8.0+Opera Mobile44+

`collapsed = range . [collapsed](https://dom.spec.whatwg.org/#dom-range-collapsed)`

Returns true if range is [collapsed](https://dom.spec.whatwg.org/#range-collapsed); otherwise false.

The `startContainer` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node).

The `startOffset` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset).

The `endContainer` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [end node](https://dom.spec.whatwg.org/#concept-range-end-node).

The `endOffset` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset).

The `collapsed` getter steps are to return true if [this](https://webidl.spec.whatwg.org/#this) is [collapsed](https://dom.spec.whatwg.org/#range-collapsed); otherwise false.

### 5.4. Interface `[StaticRange](https://dom.spec.whatwg.org/#staticrange)`[](https://dom.spec.whatwg.org/#interface-staticrange)

[StaticRange](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange "The DOM StaticRange interface extends AbstractRange to provide a method to specify a range of content in the DOM whose contents don't update to reflect changes which occur within the DOM tree.")

In all current engines.

Firefox69+Safari10.1+Chrome60+

---

Opera47+Edge79+

---

Edge (Legacy)18IENone

---

Firefox for AndroidNoneiOS Safari10.3+Chrome for Android60+Android WebView60+Samsung Internet8.0+Opera Mobile44+

dictionary `StaticRangeInit` {
required [Node](https://dom.spec.whatwg.org/#node) `startContainer`;
required [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `startOffset`;
required [Node](https://dom.spec.whatwg.org/#node) `endContainer`;
required [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `endOffset`;
};

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `StaticRange` : [AbstractRange](https://dom.spec.whatwg.org/#abstractrange) {
[constructor](https://dom.spec.whatwg.org/#dom-staticrange-staticrange)([StaticRangeInit](https://dom.spec.whatwg.org/#dictdef-staticrangeinit) `init`[](https://dom.spec.whatwg.org/#dom-staticrange-staticrange-init-init));
};

[StaticRange/StaticRange](https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/StaticRange 'The StaticRange() constructor creates a new StaticRange object representing a span of content within the DOM.')

In all current engines.

Firefox71+Safari13.1+Chrome90+

---

Opera76+Edge90+

---

Edge (Legacy)NoneIENone

---

Firefox for AndroidNoneiOS Safari13.4+Chrome for Android90+Android WebView90+Samsung Internet15.0+Opera Mobile64+

`staticRange = new [StaticRange](https://dom.spec.whatwg.org/#dom-staticrange-staticrange)(init)`

Returns a new [range](https://dom.spec.whatwg.org/#concept-range) object that does not update when the [node tree](https://dom.spec.whatwg.org/#concept-node-tree) mutates.

The `new StaticRange(init)` constructor steps are:

1.  If init\["`[startContainer](https://dom.spec.whatwg.org/#dom-staticrangeinit-startcontainer)`"\] or init\["`[endContainer](https://dom.spec.whatwg.org/#dom-staticrangeinit-endcontainer)`"\] is a `[DocumentType](https://dom.spec.whatwg.org/#documenttype)` or `[Attr](https://dom.spec.whatwg.org/#attr)` [node](https://dom.spec.whatwg.org/#concept-node), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Set [this](https://webidl.spec.whatwg.org/#this)’s [start](https://dom.spec.whatwg.org/#concept-range-start) to (init\["`[startContainer](https://dom.spec.whatwg.org/#dom-staticrangeinit-startcontainer)`"\], init\["`[startOffset](https://dom.spec.whatwg.org/#dom-staticrangeinit-startoffset)`"\]) and [end](https://dom.spec.whatwg.org/#concept-range-end) to (init\["`[endContainer](https://dom.spec.whatwg.org/#dom-staticrangeinit-endcontainer)`"\], init\["`[endOffset](https://dom.spec.whatwg.org/#dom-staticrangeinit-endoffset)`"\]).

A `[StaticRange](https://dom.spec.whatwg.org/#staticrange)` is valid[](https://dom.spec.whatwg.org/#staticrange-valid) if all of the following are true:

-   Its [start](https://dom.spec.whatwg.org/#concept-range-start) and [end](https://dom.spec.whatwg.org/#concept-range-end) are in the same [node tree](https://dom.spec.whatwg.org/#concept-node-tree).
-   Its [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) is between 0 and its [start node](https://dom.spec.whatwg.org/#concept-range-start-node)’s [length](https://dom.spec.whatwg.org/#concept-node-length), inclusive.
-   Its [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) is between 0 and its [end node](https://dom.spec.whatwg.org/#concept-range-end-node)’s [length](https://dom.spec.whatwg.org/#concept-node-length), inclusive.
-   Its [start](https://dom.spec.whatwg.org/#concept-range-start) is [before](https://dom.spec.whatwg.org/#concept-range-bp-before) or [equal](https://dom.spec.whatwg.org/#concept-range-bp-equal) to its [end](https://dom.spec.whatwg.org/#concept-range-end).

### 5.5. Interface `[Range](https://dom.spec.whatwg.org/#range)`[](https://dom.spec.whatwg.org/#interface-range)

[Range](https://developer.mozilla.org/en-US/docs/Web/API/Range 'The Range interface represents a fragment of a document that can contain nodes and parts of text nodes.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `Range` : [AbstractRange](https://dom.spec.whatwg.org/#abstractrange) {
[constructor](https://dom.spec.whatwg.org/#dom-range-range)();

readonly attribute [Node](https://dom.spec.whatwg.org/#node) [commonAncestorContainer](https://dom.spec.whatwg.org/#dom-range-commonancestorcontainer);

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setStart](https://dom.spec.whatwg.org/#dom-range-setstart)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-setstart-node-offset-node), [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-range-setstart-node-offset-offset));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setEnd](https://dom.spec.whatwg.org/#dom-range-setend)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-setend-node-offset-node), [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-range-setend-node-offset-offset));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setStartBefore](https://dom.spec.whatwg.org/#dom-range-setstartbefore)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-setstartbefore-node-node));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setStartAfter](https://dom.spec.whatwg.org/#dom-range-setstartafter)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-setstartafter-node-node));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setEndBefore](https://dom.spec.whatwg.org/#dom-range-setendbefore)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-setendbefore-node-node));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [setEndAfter](https://dom.spec.whatwg.org/#dom-range-setendafter)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-setendafter-node-node));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [collapse](https://dom.spec.whatwg.org/#dom-range-collapse)(optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `toStart`[](https://dom.spec.whatwg.org/#dom-range-collapse-tostart-tostart) = false);
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [selectNode](https://dom.spec.whatwg.org/#dom-range-selectnode)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-selectnode-node-node));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [selectNodeContents](https://dom.spec.whatwg.org/#dom-range-selectnodecontents)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-selectnodecontents-node-node));

const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `START_TO_START` = 0;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `START_TO_END` = 1;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `END_TO_END` = 2;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `END_TO_START` = 3;
[short](https://webidl.spec.whatwg.org/#idl-short) [compareBoundaryPoints](https://dom.spec.whatwg.org/#dom-range-compareboundarypoints)([unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `how`[](https://dom.spec.whatwg.org/#dom-range-compareboundarypoints-how-sourcerange-how), [Range](https://dom.spec.whatwg.org/#range) `sourceRange`[](https://dom.spec.whatwg.org/#dom-range-compareboundarypoints-how-sourcerange-sourcerange));

\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [deleteContents](https://dom.spec.whatwg.org/#dom-range-deletecontents)();
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [DocumentFragment](https://dom.spec.whatwg.org/#documentfragment) [extractContents](https://dom.spec.whatwg.org/#dom-range-extractcontents)();
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions), [NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [DocumentFragment](https://dom.spec.whatwg.org/#documentfragment) [cloneContents](https://dom.spec.whatwg.org/#dom-range-clonecontents)();
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [insertNode](https://dom.spec.whatwg.org/#dom-range-insertnode)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-insertnode-node-node));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [surroundContents](https://dom.spec.whatwg.org/#dom-range-surroundcontents)([Node](https://dom.spec.whatwg.org/#node) `newParent`[](https://dom.spec.whatwg.org/#dom-range-surroundcontents-newparent-newparent));

\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [Range](https://dom.spec.whatwg.org/#range) [cloneRange](https://dom.spec.whatwg.org/#dom-range-clonerange)();
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [detach](https://dom.spec.whatwg.org/#dom-range-detach)();

[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [isPointInRange](https://dom.spec.whatwg.org/#dom-range-ispointinrange)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-ispointinrange-node-offset-node), [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-range-ispointinrange-node-offset-offset));
[short](https://webidl.spec.whatwg.org/#idl-short) [comparePoint](https://dom.spec.whatwg.org/#dom-range-comparepoint)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-comparepoint-node-offset-node), [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `offset`[](https://dom.spec.whatwg.org/#dom-range-comparepoint-node-offset-offset));

[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [intersectsNode](https://dom.spec.whatwg.org/#dom-range-intersectsnode)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-range-intersectsnode-node-node));

[stringifier](https://dom.spec.whatwg.org/#dom-range-stringifier);
};

Objects implementing the `[Range](https://dom.spec.whatwg.org/#range)` interface are known as live ranges.

Algorithms that modify a [tree](https://dom.spec.whatwg.org/#concept-tree) (in particular the [insert](https://dom.spec.whatwg.org/#concept-node-insert), [remove](https://dom.spec.whatwg.org/#concept-node-remove), [replace data](https://dom.spec.whatwg.org/#concept-cd-replace), and [split](https://dom.spec.whatwg.org/#concept-text-split) algorithms) modify [live ranges](https://dom.spec.whatwg.org/#concept-live-range) associated with that [tree](https://dom.spec.whatwg.org/#concept-tree).

The root of a [live range](https://dom.spec.whatwg.org/#concept-live-range) is the [root](https://dom.spec.whatwg.org/#concept-tree-root) of its [start node](https://dom.spec.whatwg.org/#concept-range-start-node).

A [node](https://dom.spec.whatwg.org/#concept-node) node is contained in a [live range](https://dom.spec.whatwg.org/#concept-live-range) range if node’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is range’s [root](https://dom.spec.whatwg.org/#concept-range-root), and (node, 0) is [after](https://dom.spec.whatwg.org/#concept-range-bp-after) range’s [start](https://dom.spec.whatwg.org/#concept-range-start), and (node, node’s [length](https://dom.spec.whatwg.org/#concept-node-length)) is [before](https://dom.spec.whatwg.org/#concept-range-bp-before) range’s [end](https://dom.spec.whatwg.org/#concept-range-end).

A [node](https://dom.spec.whatwg.org/#concept-node) is partially contained in a [live range](https://dom.spec.whatwg.org/#concept-live-range) if it’s an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of the [live range](https://dom.spec.whatwg.org/#concept-live-range)’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) but not its [end node](https://dom.spec.whatwg.org/#concept-range-end-node), or vice versa.

Some facts to better understand these definitions:

-   The content that one would think of as being within the [live range](https://dom.spec.whatwg.org/#concept-live-range) consists of all [contained](https://dom.spec.whatwg.org/#contained) [nodes](https://dom.spec.whatwg.org/#concept-node), plus possibly some of the contents of the [start node](https://dom.spec.whatwg.org/#concept-range-start-node) and [end node](https://dom.spec.whatwg.org/#concept-range-end-node) if those are `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [nodes](https://dom.spec.whatwg.org/#concept-node).
-   The [nodes](https://dom.spec.whatwg.org/#concept-node) that are contained in a [live range](https://dom.spec.whatwg.org/#concept-live-range) will generally not be contiguous, because the [parent](https://dom.spec.whatwg.org/#concept-tree-parent) of a [contained](https://dom.spec.whatwg.org/#contained) [node](https://dom.spec.whatwg.org/#concept-node) will not always be [contained](https://dom.spec.whatwg.org/#contained).
-   However, the [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) of a [contained](https://dom.spec.whatwg.org/#contained) [node](https://dom.spec.whatwg.org/#concept-node) are [contained](https://dom.spec.whatwg.org/#contained), and if two [siblings](https://dom.spec.whatwg.org/#concept-tree-sibling) are [contained](https://dom.spec.whatwg.org/#contained), so are any [siblings](https://dom.spec.whatwg.org/#concept-tree-sibling) that lie between them.
-   The [start node](https://dom.spec.whatwg.org/#concept-range-start-node) and [end node](https://dom.spec.whatwg.org/#concept-range-end-node) of a [live range](https://dom.spec.whatwg.org/#concept-live-range) are never [contained](https://dom.spec.whatwg.org/#contained) within it.
-   The first [contained](https://dom.spec.whatwg.org/#contained) [node](https://dom.spec.whatwg.org/#concept-node) (if there are any) will always be after the [start node](https://dom.spec.whatwg.org/#concept-range-start-node), and the last [contained](https://dom.spec.whatwg.org/#contained) [node](https://dom.spec.whatwg.org/#concept-node) will always be equal to or before the [end node](https://dom.spec.whatwg.org/#concept-range-end-node)’s last [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant).
-   There exists a [partially contained](https://dom.spec.whatwg.org/#partially-contained) [node](https://dom.spec.whatwg.org/#concept-node) if and only if the [start node](https://dom.spec.whatwg.org/#concept-range-start-node) and [end node](https://dom.spec.whatwg.org/#concept-range-end-node) are different.
-   The `[commonAncestorContainer](https://dom.spec.whatwg.org/#dom-range-commonancestorcontainer)` attribute value is neither [contained](https://dom.spec.whatwg.org/#contained) nor [partially contained](https://dom.spec.whatwg.org/#partially-contained).
-   If the [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is an [ancestor](https://dom.spec.whatwg.org/#concept-tree-ancestor) of the [end node](https://dom.spec.whatwg.org/#concept-range-end-node), the common [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) will be the [start node](https://dom.spec.whatwg.org/#concept-range-start-node). Exactly one of its [children](https://dom.spec.whatwg.org/#concept-tree-child) will be [partially contained](https://dom.spec.whatwg.org/#partially-contained), and a [child](https://dom.spec.whatwg.org/#concept-tree-child) will be [contained](https://dom.spec.whatwg.org/#contained) if and only if it [precedes](https://dom.spec.whatwg.org/#concept-tree-preceding) the [partially contained](https://dom.spec.whatwg.org/#partially-contained) [child](https://dom.spec.whatwg.org/#concept-tree-child). If the [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is an [ancestor](https://dom.spec.whatwg.org/#concept-tree-ancestor) of the [start node](https://dom.spec.whatwg.org/#concept-range-start-node), the opposite holds.
-   If the [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of the [end node](https://dom.spec.whatwg.org/#concept-range-end-node), nor vice versa, the common [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) will be distinct from both of them. Exactly two of its [children](https://dom.spec.whatwg.org/#concept-tree-child) will be [partially contained](https://dom.spec.whatwg.org/#partially-contained), and a [child](https://dom.spec.whatwg.org/#concept-tree-child) will be contained if and only if it lies between those two.

---

[Range/Range](https://developer.mozilla.org/en-US/docs/Web/API/Range/Range 'The Range() constructor returns a newly created Range object whose start and end is the global Document object.')

In all current engines.

Firefox24+Safari8+Chrome29+

---

Opera16+Edge79+

---

Edge (Legacy)15+IENone

---

Firefox for Android24+iOS Safari8+Chrome for Android29+Android WebView37+Samsung Internet2.0+Opera Mobile16+

`range = new [Range()](https://dom.spec.whatwg.org/#dom-range-range)`

Returns a new [live range](https://dom.spec.whatwg.org/#concept-live-range).

The `new Range()` constructor steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [start](https://dom.spec.whatwg.org/#concept-range-start) and [end](https://dom.spec.whatwg.org/#concept-range-end) to ([current global object](https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object)’s [associated `Document`](https://html.spec.whatwg.org/multipage/window-object.html#concept-document-window), 0).

---

[Range/commonAncestorContainer](https://developer.mozilla.org/en-US/docs/Web/API/Range/commonAncestorContainer 'The Range.commonAncestorContainer read-only property returns the deepest — or furthest down the document tree — Node that contains both boundary points of the Range. This means that if Range.startContainer and Range.endContainer both refer to the same node, this node is the common ancestor container.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

container = range . `[commonAncestorContainer](https://dom.spec.whatwg.org/#dom-range-commonancestorcontainer)`

Returns the [node](https://dom.spec.whatwg.org/#concept-node), furthest away from the [document](https://dom.spec.whatwg.org/#concept-document), that is an [ancestor](https://dom.spec.whatwg.org/#concept-tree-ancestor) of both range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) and [end node](https://dom.spec.whatwg.org/#concept-range-end-node).

The `commonAncestorContainer` getter steps are:

1.  Let container be [start node](https://dom.spec.whatwg.org/#concept-range-start-node).
2.  While container is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of [end node](https://dom.spec.whatwg.org/#concept-range-end-node), let container be container’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
3.  Return container.

---

To set the start or end of a range to a [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (node, offset), run these steps:

1.  If node is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If offset is greater than node’s [length](https://dom.spec.whatwg.org/#concept-node-length), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[IndexSizeError](https://webidl.spec.whatwg.org/#indexsizeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Let bp be the [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (node, offset).
4.  If these steps were invoked as "set the start"

    1.  If range’s [root](https://dom.spec.whatwg.org/#concept-range-root) is not equal to node’s [root](https://dom.spec.whatwg.org/#concept-tree-root), or if bp is [after](https://dom.spec.whatwg.org/#concept-range-bp-after) the range’s [end](https://dom.spec.whatwg.org/#concept-range-end), set range’s [end](https://dom.spec.whatwg.org/#concept-range-end) to bp.
    2.  Set range’s [start](https://dom.spec.whatwg.org/#concept-range-start) to bp.

    If these steps were invoked as "set the end"

    1.  If range’s [root](https://dom.spec.whatwg.org/#concept-range-root) is not equal to node’s [root](https://dom.spec.whatwg.org/#concept-tree-root), or if bp is [before](https://dom.spec.whatwg.org/#concept-range-bp-before) the range’s [start](https://dom.spec.whatwg.org/#concept-range-start), set range’s [start](https://dom.spec.whatwg.org/#concept-range-start) to bp.
    2.  Set range’s [end](https://dom.spec.whatwg.org/#concept-range-end) to bp.

[Range/setStart](https://developer.mozilla.org/en-US/docs/Web/API/Range/setStart 'The Range.setStart() method sets the start position of a Range.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `setStart(node, offset)` method steps are to [set the start](https://dom.spec.whatwg.org/#concept-range-bp-set) of [this](https://webidl.spec.whatwg.org/#this) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (node, offset).

[Range/setEnd](https://developer.mozilla.org/en-US/docs/Web/API/Range/setEnd 'The Range.setEnd() method sets the end position of a Range to be located at the given offset into the specified node x.Setting the end point above (higher in the document) than the start point will result in a collapsed range with the start and end points both set to the specified end position.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `setEnd(node, offset)` method steps are to [set the end](https://dom.spec.whatwg.org/#concept-range-bp-set) of [this](https://webidl.spec.whatwg.org/#this) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (node, offset).

[Range/setStartBefore](https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartBefore 'The Range.setStartBefore() method sets the start position of a Range relative to another Node. The parent Node of the start of the Range will be the same as that for the referenceNode.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `setStartBefore(node)` method steps are:

1.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  [Set the start](https://dom.spec.whatwg.org/#concept-range-bp-set) of [this](https://webidl.spec.whatwg.org/#this) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (parent, node’s [index](https://dom.spec.whatwg.org/#concept-tree-index)).

[Range/setStartAfter](https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartAfter 'The Range.setStartAfter() method sets the start position of a Range relative to a Node. The parent Node of the start of the Range will be the same as that for the referenceNode.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `setStartAfter(node)` method steps are:

1.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  [Set the start](https://dom.spec.whatwg.org/#concept-range-bp-set) of [this](https://webidl.spec.whatwg.org/#this) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (parent, node’s [index](https://dom.spec.whatwg.org/#concept-tree-index) plus 1).

[Range/setEndBefore](https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndBefore 'The Range.setEndBefore() method sets the end position of a Range relative to another Node. The parent Node of end of the Range will be the same as that for the referenceNode.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `setEndBefore(node)` method steps are:

1.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  [Set the end](https://dom.spec.whatwg.org/#concept-range-bp-set) of [this](https://webidl.spec.whatwg.org/#this) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (parent, node’s [index](https://dom.spec.whatwg.org/#concept-tree-index)).

[Range/setEndAfter](https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndAfter 'The Range.setEndAfter() method sets the end position of a Range relative to another Node. The parent Node of end of the Range will be the same as that for the referenceNode.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `setEndAfter(node)` method steps are:

1.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  [Set the end](https://dom.spec.whatwg.org/#concept-range-bp-set) of [this](https://webidl.spec.whatwg.org/#this) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (parent, node’s [index](https://dom.spec.whatwg.org/#concept-tree-index) plus 1).

[Range/collapse](https://developer.mozilla.org/en-US/docs/Web/API/Range/collapse 'The Range.collapse() method collapses the Range to one of its boundary points.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `collapse(toStart)` method steps are to, if toStart is true, set [end](https://dom.spec.whatwg.org/#concept-range-end) to [start](https://dom.spec.whatwg.org/#concept-range-start); otherwise set [start](https://dom.spec.whatwg.org/#concept-range-start) to [end](https://dom.spec.whatwg.org/#concept-range-end).

To select a [node](https://dom.spec.whatwg.org/#concept-node) node within a [range](https://dom.spec.whatwg.org/#concept-range) range, run these steps:

1.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
2.  If parent is null, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  Let index be node’s [index](https://dom.spec.whatwg.org/#concept-tree-index).
4.  Set range’s [start](https://dom.spec.whatwg.org/#concept-range-start) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (parent, index).
5.  Set range’s [end](https://dom.spec.whatwg.org/#concept-range-end) to [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (parent, index plus 1).

[Range/selectNode](https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNode 'The Range.selectNode() method sets the Range to contain the Node and its contents. The parent Node of the start and end of the Range will be the same as the parent of the referenceNode.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `selectNode(node)` method steps are to [select](https://dom.spec.whatwg.org/#concept-range-select) node within [this](https://webidl.spec.whatwg.org/#this).

[Range/selectNodeContents](https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNodeContents 'The Range.selectNodeContents() method sets the Range to contain the contents of a Node.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `selectNodeContents(node)` method steps are:

1.  If node is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Let length be the [length](https://dom.spec.whatwg.org/#concept-node-length) of node.
3.  Set [start](https://dom.spec.whatwg.org/#concept-range-start) to the [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (node, 0).
4.  Set [end](https://dom.spec.whatwg.org/#concept-range-end) to the [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) (node, length).

---

[Range/compareBoundaryPoints](https://developer.mozilla.org/en-US/docs/Web/API/Range/compareBoundaryPoints 'The Range.compareBoundaryPoints() method compares the boundary points of the Range with those of another range.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `compareBoundaryPoints(how, sourceRange)` method steps are:

1.  If how is not one of

    -   `[START_TO_START](https://dom.spec.whatwg.org/#dom-range-start_to_start)`,
    -   `[START_TO_END](https://dom.spec.whatwg.org/#dom-range-start_to_end)`,
    -   `[END_TO_END](https://dom.spec.whatwg.org/#dom-range-end_to_end)`, and
    -   `[END_TO_START](https://dom.spec.whatwg.org/#dom-range-end_to_start)`,

    then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[NotSupportedError](https://webidl.spec.whatwg.org/#notsupportederror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

2.  If [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-range-root) is not the same as sourceRange’s [root](https://dom.spec.whatwg.org/#concept-range-root), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[WrongDocumentError](https://webidl.spec.whatwg.org/#wrongdocumenterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If how is:

    `[START_TO_START](https://dom.spec.whatwg.org/#dom-range-start_to_start)`:

    Let this point be [this](https://webidl.spec.whatwg.org/#this)’s [start](https://dom.spec.whatwg.org/#concept-range-start). Let other point be sourceRange’s [start](https://dom.spec.whatwg.org/#concept-range-start).

    `[START_TO_END](https://dom.spec.whatwg.org/#dom-range-start_to_end)`:

    Let this point be [this](https://webidl.spec.whatwg.org/#this)’s [end](https://dom.spec.whatwg.org/#concept-range-end). Let other point be sourceRange’s [start](https://dom.spec.whatwg.org/#concept-range-start).

    `[END_TO_END](https://dom.spec.whatwg.org/#dom-range-end_to_end)`:

    Let this point be [this](https://webidl.spec.whatwg.org/#this)’s [end](https://dom.spec.whatwg.org/#concept-range-end). Let other point be sourceRange’s [end](https://dom.spec.whatwg.org/#concept-range-end).

    `[END_TO_START](https://dom.spec.whatwg.org/#dom-range-end_to_start)`:

    Let this point be [this](https://webidl.spec.whatwg.org/#this)’s [start](https://dom.spec.whatwg.org/#concept-range-start). Let other point be sourceRange’s [end](https://dom.spec.whatwg.org/#concept-range-end).

4.  If the [position](https://dom.spec.whatwg.org/#concept-range-bp-position) of this point relative to other point is

    [before](https://dom.spec.whatwg.org/#concept-range-bp-before)

    Return −1.

    [equal](https://dom.spec.whatwg.org/#concept-range-bp-equal)

    Return 0.

    [after](https://dom.spec.whatwg.org/#concept-range-bp-after)

    Return 1.

[Range/deleteContents](https://developer.mozilla.org/en-US/docs/Web/API/Range/deleteContents 'The Range.deleteContents() method removes the contents of the Range from the Document.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `deleteContents()` method steps are:

1.  If [this](https://webidl.spec.whatwg.org/#this) is [collapsed](https://dom.spec.whatwg.org/#range-collapsed), then return.
2.  Let original start node, original start offset, original end node, and original end offset be [this](https://webidl.spec.whatwg.org/#this)’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node), [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset), [end node](https://dom.spec.whatwg.org/#concept-range-end-node), and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset), respectively.
3.  If original start node is original end node and it is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node original start node, offset original start offset, count original end offset minus original start offset, and data the empty string, and then return.
4.  Let nodes to remove be a list of all the [nodes](https://dom.spec.whatwg.org/#concept-node) that are [contained](https://dom.spec.whatwg.org/#contained) in [this](https://webidl.spec.whatwg.org/#this), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), omitting any [node](https://dom.spec.whatwg.org/#concept-node) whose [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is also [contained](https://dom.spec.whatwg.org/#contained) in [this](https://webidl.spec.whatwg.org/#this).
5.  If original start node is an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set new node to original start node and new offset to original start offset.
6.  Otherwise:

    1.  Let reference node equal original start node.
    2.  While reference node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is not null and is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set reference node to its [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
    3.  Set new node to the [parent](https://dom.spec.whatwg.org/#concept-tree-parent) of reference node, and new offset to one plus the [index](https://dom.spec.whatwg.org/#concept-tree-index) of reference node.

        If reference node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) were null, it would be the [root](https://dom.spec.whatwg.org/#concept-range-root) of [this](https://webidl.spec.whatwg.org/#this), so would be an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, and we could not reach this point.

7.  If original start node is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node original start node, offset original start offset, count original start node’s [length](https://dom.spec.whatwg.org/#concept-node-length) minus original start offset, data the empty string.
8.  For each node in nodes to remove, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), [remove](https://dom.spec.whatwg.org/#concept-node-remove) node.
9.  If original end node is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node original end node, offset 0, count original end offset and data the empty string.
10. Set [start](https://dom.spec.whatwg.org/#concept-range-start) and [end](https://dom.spec.whatwg.org/#concept-range-end) to (new node, new offset).

To a [live range](https://dom.spec.whatwg.org/#concept-live-range) range, run these steps:

1.  Let fragment be a new `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [node document](https://dom.spec.whatwg.org/#concept-node-document) is range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  If range is [collapsed](https://dom.spec.whatwg.org/#range-collapsed), then return fragment.
3.  Let original start node, original start offset, original end node, and original end offset be range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node), [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset), [end node](https://dom.spec.whatwg.org/#concept-range-end-node), and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset), respectively.
4.  If original start node is original end node and it is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then:

    1.  Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of original start node.
    2.  Set the [data](https://dom.spec.whatwg.org/#concept-cd-data) of clone to the result of [substringing data](https://dom.spec.whatwg.org/#concept-cd-substring) with node original start node, offset original start offset, and count original end offset minus original start offset.
    3.  [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
    4.  [Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node original start node, offset original start offset, count original end offset minus original start offset, and data the empty string.
    5.  Return fragment.

5.  Let common ancestor be original start node.
6.  While common ancestor is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set common ancestor to its own [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
7.  Let first partially contained child be null.
8.  If original start node is _not_ an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set first partially contained child to the first [child](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor that is [partially contained](https://dom.spec.whatwg.org/#partially-contained) in range.
9.  Let last partially contained child be null.
10. If original end node is _not_ an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original start node, set last partially contained child to the last [child](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor that is [partially contained](https://dom.spec.whatwg.org/#partially-contained) in range.

    These variable assignments do actually always make sense. For instance, if original start node is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, original start node is itself [partially contained](https://dom.spec.whatwg.org/#partially-contained) in range, and so are all its [ancestors](https://dom.spec.whatwg.org/#concept-tree-ancestor) up until a [child](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor. common ancestor cannot be original start node, because it has to be an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node. The other case is similar. Also, notice that the two [children](https://dom.spec.whatwg.org/#concept-tree-child) will never be equal if both are defined.

11. Let contained children be a list of all [children](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor that are [contained](https://dom.spec.whatwg.org/#contained) in range, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).
12. If any member of contained children is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

    We do not have to worry about the first or last partially contained node, because a [doctype](https://dom.spec.whatwg.org/#concept-doctype) can never be partially contained. It cannot be a boundary point of a range, and it cannot be the ancestor of anything.

13. If original start node is an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set new node to original start node and new offset to original start offset.
14. Otherwise:
15. Let reference node equal original start node.
16. While reference node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is not null and is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set reference node to its [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
17. Set new node to the [parent](https://dom.spec.whatwg.org/#concept-tree-parent) of reference node, and new offset to one plus reference node’s [index](https://dom.spec.whatwg.org/#concept-tree-index).

    If reference node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, it would be the [root](https://dom.spec.whatwg.org/#concept-range-root) of range, so would be an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, and we could not reach this point.

18. If first partially contained child is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then:

    In this case, first partially contained child is original start node.

    1.  Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of original start node.
    2.  Set the [data](https://dom.spec.whatwg.org/#concept-cd-data) of clone to the result of [substringing data](https://dom.spec.whatwg.org/#concept-cd-substring) with node original start node, offset original start offset, and count original start node’s [length](https://dom.spec.whatwg.org/#concept-node-length) minus original start offset.
    3.  [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
    4.  [Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node original start node, offset original start offset, count original start node’s [length](https://dom.spec.whatwg.org/#concept-node-length) minus original start offset, and data the empty string.

19. Otherwise, if first partially contained child is not null:
20. Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of first partially contained child.
21. [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
22. Let subrange be a new [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start](https://dom.spec.whatwg.org/#concept-range-start) is (original start node, original start offset) and whose [end](https://dom.spec.whatwg.org/#concept-range-end) is (first partially contained child, first partially contained child’s [length](https://dom.spec.whatwg.org/#concept-node-length)).
23. Let subfragment be the result of [extracting](https://dom.spec.whatwg.org/#concept-range-extract) subrange.
24. [Append](https://dom.spec.whatwg.org/#concept-node-append) subfragment to clone.
25. For each contained child in contained children, [append](https://dom.spec.whatwg.org/#concept-node-append) contained child to fragment.
26. If last partially contained child is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then:

    In this case, last partially contained child is original end node.

    1.  Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of original end node.
    2.  Set the [data](https://dom.spec.whatwg.org/#concept-cd-data) of clone to the result of [substringing data](https://dom.spec.whatwg.org/#concept-cd-substring) with node original end node, offset 0, and count original end offset.
    3.  [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
    4.  [Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node original end node, offset 0, count original end offset, and data the empty string.

27. Otherwise, if last partially contained child is not null:
28. Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of last partially contained child.
29. [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
30. Let subrange be a new [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start](https://dom.spec.whatwg.org/#concept-range-start) is (last partially contained child, 0) and whose [end](https://dom.spec.whatwg.org/#concept-range-end) is (original end node, original end offset).
31. Let subfragment be the result of [extracting](https://dom.spec.whatwg.org/#concept-range-extract) subrange.
32. [Append](https://dom.spec.whatwg.org/#concept-node-append) subfragment to clone.
33. Set range’s [start](https://dom.spec.whatwg.org/#concept-range-start) and [end](https://dom.spec.whatwg.org/#concept-range-end) to (new node, new offset).
34. Return fragment.

[Range/extractContents](https://developer.mozilla.org/en-US/docs/Web/API/Range/extractContents 'The Range.extractContents() method moves contents of the Range from the document tree into a DocumentFragment.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `extractContents()` method steps are to return the result of [extracting](https://dom.spec.whatwg.org/#concept-range-extract) [this](https://webidl.spec.whatwg.org/#this).

To clone the contents of a [live range](https://dom.spec.whatwg.org/#concept-live-range) range, run these steps:

1.  Let fragment be a new `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node) whose [node document](https://dom.spec.whatwg.org/#concept-node-document) is range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node)’s [node document](https://dom.spec.whatwg.org/#concept-node-document).
2.  If range is [collapsed](https://dom.spec.whatwg.org/#range-collapsed), then return fragment.
3.  Let original start node, original start offset, original end node, and original end offset be range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node), [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset), [end node](https://dom.spec.whatwg.org/#concept-range-end-node), and [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset), respectively.
4.  If original start node is original end node and it is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then:

    1.  Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of original start node.
    2.  Set the [data](https://dom.spec.whatwg.org/#concept-cd-data) of clone to the result of [substringing data](https://dom.spec.whatwg.org/#concept-cd-substring) with node original start node, offset original start offset, and count original end offset minus original start offset.
    3.  [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
    4.  Return fragment.

5.  Let common ancestor be original start node.
6.  While common ancestor is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set common ancestor to its own [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
7.  Let first partially contained child be null.
8.  If original start node is _not_ an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, set first partially contained child to the first [child](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor that is [partially contained](https://dom.spec.whatwg.org/#partially-contained) in range.
9.  Let last partially contained child be null.
10. If original end node is _not_ an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original start node, set last partially contained child to the last [child](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor that is [partially contained](https://dom.spec.whatwg.org/#partially-contained) in range.

    These variable assignments do actually always make sense. For instance, if original start node is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node, original start node is itself [partially contained](https://dom.spec.whatwg.org/#partially-contained) in range, and so are all its [ancestors](https://dom.spec.whatwg.org/#concept-tree-ancestor) up until a [child](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor. common ancestor cannot be original start node, because it has to be an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of original end node. The other case is similar. Also, notice that the two [children](https://dom.spec.whatwg.org/#concept-tree-child) will never be equal if both are defined.

11. Let contained children be a list of all [children](https://dom.spec.whatwg.org/#concept-tree-child) of common ancestor that are [contained](https://dom.spec.whatwg.org/#contained) in range, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).
12. If any member of contained children is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

    We do not have to worry about the first or last partially contained node, because a [doctype](https://dom.spec.whatwg.org/#concept-doctype) can never be partially contained. It cannot be a boundary point of a range, and it cannot be the ancestor of anything.

13. If first partially contained child is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then:

    In this case, first partially contained child is original start node.

    1.  Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of original start node.
    2.  Set the [data](https://dom.spec.whatwg.org/#concept-cd-data) of clone to the result of [substringing data](https://dom.spec.whatwg.org/#concept-cd-substring) with node original start node, offset original start offset, and count original start node’s [length](https://dom.spec.whatwg.org/#concept-node-length) minus original start offset.
    3.  [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.

14. Otherwise, if first partially contained child is not null:
15. Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of first partially contained child.
16. [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
17. Let subrange be a new [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start](https://dom.spec.whatwg.org/#concept-range-start) is (original start node, original start offset) and whose [end](https://dom.spec.whatwg.org/#concept-range-end) is (first partially contained child, first partially contained child’s [length](https://dom.spec.whatwg.org/#concept-node-length)).
18. Let subfragment be the result of [cloning the contents](https://dom.spec.whatwg.org/#concept-range-clone) of subrange.
19. [Append](https://dom.spec.whatwg.org/#concept-node-append) subfragment to clone.
20. For each contained child in contained children:
21. Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of contained child with the _clone children flag_ set.
22. [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
23. If last partially contained child is a `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [node](https://dom.spec.whatwg.org/#concept-node), then:

    In this case, last partially contained child is original end node.

    1.  Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of original end node.
    2.  Set the [data](https://dom.spec.whatwg.org/#concept-cd-data) of clone to the result of [substringing data](https://dom.spec.whatwg.org/#concept-cd-substring) with node original end node, offset 0, and count original end offset.
    3.  [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.

24. Otherwise, if last partially contained child is not null:
25. Let clone be a [clone](https://dom.spec.whatwg.org/#concept-node-clone) of last partially contained child.
26. [Append](https://dom.spec.whatwg.org/#concept-node-append) clone to fragment.
27. Let subrange be a new [live range](https://dom.spec.whatwg.org/#concept-live-range) whose [start](https://dom.spec.whatwg.org/#concept-range-start) is (last partially contained child, 0) and whose [end](https://dom.spec.whatwg.org/#concept-range-end) is (original end node, original end offset).
28. Let subfragment be the result of [cloning the contents](https://dom.spec.whatwg.org/#concept-range-clone) of subrange.
29. [Append](https://dom.spec.whatwg.org/#concept-node-append) subfragment to clone.
30. Return fragment.

[Range/cloneContents](https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneContents 'The Range.cloneContents() returns a DocumentFragment copying the objects of type Node included in the Range.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `cloneContents()` method steps are to return the result of [cloning the contents](https://dom.spec.whatwg.org/#concept-range-clone) of [this](https://webidl.spec.whatwg.org/#this).

To insert a [node](https://dom.spec.whatwg.org/#concept-node) node into a [live range](https://dom.spec.whatwg.org/#concept-live-range) range, run these steps:

1.  If range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is a `[ProcessingInstruction](https://dom.spec.whatwg.org/#processinginstruction)` or `[Comment](https://dom.spec.whatwg.org/#comment)` [node](https://dom.spec.whatwg.org/#concept-node), is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) whose [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, or is node, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[HierarchyRequestError](https://webidl.spec.whatwg.org/#hierarchyrequesterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Let referenceNode be null.
3.  If range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), set referenceNode to that `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node).
4.  Otherwise, set referenceNode to the [child](https://dom.spec.whatwg.org/#concept-tree-child) of [start node](https://dom.spec.whatwg.org/#concept-range-start-node) whose [index](https://dom.spec.whatwg.org/#concept-tree-index) is [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset), and null if there is no such [child](https://dom.spec.whatwg.org/#concept-tree-child).
5.  Let parent be range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) if referenceNode is null, and referenceNode’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) otherwise.
6.  [Ensure pre-insertion validity](https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity) of node into parent before referenceNode.
7.  If range’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), set referenceNode to the result of [splitting](https://dom.spec.whatwg.org/#concept-text-split) it with offset range’s [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset).
8.  If node is referenceNode, set referenceNode to its [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
9.  If node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is non-null, then [remove](https://dom.spec.whatwg.org/#concept-node-remove) node.
10. Let newOffset be parent’s [length](https://dom.spec.whatwg.org/#concept-node-length) if referenceNode is null, and referenceNode’s [index](https://dom.spec.whatwg.org/#concept-tree-index) otherwise.
11. Increase newOffset by node’s [length](https://dom.spec.whatwg.org/#concept-node-length) if node is a `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node), and one otherwise.
12. [Pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) node into parent before referenceNode.
13. If range is [collapsed](https://dom.spec.whatwg.org/#range-collapsed), then set range’s [end](https://dom.spec.whatwg.org/#concept-range-end) to (parent, newOffset).

[Range/insertNode](https://developer.mozilla.org/en-US/docs/Web/API/Range/insertNode 'The Range.insertNode() method inserts a node at the start of the Range.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `insertNode(node)` method steps are to [insert](https://dom.spec.whatwg.org/#concept-range-insert) node into [this](https://webidl.spec.whatwg.org/#this).

[Range/surroundContents](https://developer.mozilla.org/en-US/docs/Web/API/Range/surroundContents 'The Range.surroundContents() method moves content of the Range into a new node, placing the new node at the start of the specified range.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `surroundContents(newParent)` method steps are:

1.  If a non-`[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node) is [partially contained](https://dom.spec.whatwg.org/#partially-contained) in [this](https://webidl.spec.whatwg.org/#this), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidStateError](https://webidl.spec.whatwg.org/#invalidstateerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If newParent is a `[Document](https://dom.spec.whatwg.org/#document)`, `[DocumentType](https://dom.spec.whatwg.org/#documenttype)`, or `[DocumentFragment](https://dom.spec.whatwg.org/#documentfragment)` [node](https://dom.spec.whatwg.org/#concept-node), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

    For historical reasons `[CharacterData](https://dom.spec.whatwg.org/#characterdata)` [nodes](https://dom.spec.whatwg.org/#concept-node) are not checked here and end up throwing later on as a side effect.

3.  Let fragment be the result of [extracting](https://dom.spec.whatwg.org/#concept-live-range) [this](https://webidl.spec.whatwg.org/#this).
4.  If newParent has [children](https://dom.spec.whatwg.org/#concept-tree-child), then [replace all](https://dom.spec.whatwg.org/#concept-node-replace-all) with null within newParent.
5.  [Insert](https://dom.spec.whatwg.org/#concept-range-insert) newParent into [this](https://webidl.spec.whatwg.org/#this).
6.  [Append](https://dom.spec.whatwg.org/#concept-node-append) fragment to newParent.
7.  [Select](https://dom.spec.whatwg.org/#concept-range-select) newParent within [this](https://webidl.spec.whatwg.org/#this).

[Range/cloneRange](https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneRange 'The Range.cloneRange() method returns a Range object with boundary points identical to the cloned Range.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `cloneRange()` method steps are to return a new [live range](https://dom.spec.whatwg.org/#concept-live-range) with the same [start](https://dom.spec.whatwg.org/#concept-range-start) and [end](https://dom.spec.whatwg.org/#concept-range-end) as [this](https://webidl.spec.whatwg.org/#this).

[Range/detach](https://developer.mozilla.org/en-US/docs/Web/API/Range/detach 'The Range.detach() method does nothing. It used to disable the Range object and enable the browser to release associated resources. The method has been kept for compatibility.')

Firefox1–15Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4–15iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `detach()` method steps are to do nothing. Its functionality (disabling a `[Range](https://dom.spec.whatwg.org/#range)` object) was removed, but the method itself is preserved for compatibility.

---

[Range/comparePoint](https://developer.mozilla.org/en-US/docs/Web/API/Range/comparePoint 'The Range.comparePoint() method returns -1, 0, or 1 depending on whether the referenceNode is before, the same as, or after the Range.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

position = range . `[comparePoint(node, offset)](https://dom.spec.whatwg.org/#dom-range-comparepoint)`

Returns −1 if the point is before the range, 0 if the point is in the range, and 1 if the point is after the range.

[Range/intersectsNode](https://developer.mozilla.org/en-US/docs/Web/API/Range/intersectsNode 'The Range.intersectsNode() method returns a boolean indicating whether the given Node intersects the Range.')

In all current engines.

Firefox17+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android19+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

intersects = range . `[intersectsNode(node)](https://dom.spec.whatwg.org/#dom-range-intersectsnode)`

Returns whether range intersects node.

[Range/isPointInRange](https://developer.mozilla.org/en-US/docs/Web/API/Range/isPointInRange 'The Range.isPointInRange() method returns a boolean indicating whether the given point is in the Range. It returns true if the point (cursor position) at offset within ReferenceNode is within this range.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)15+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

The `isPointInRange(node, offset)` method steps are:

1.  If node’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is different from [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-range-root), return false.
2.  If node is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If offset is greater than node’s [length](https://dom.spec.whatwg.org/#concept-node-length), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[IndexSizeError](https://webidl.spec.whatwg.org/#indexsizeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
4.  If (node, offset) is [before](https://dom.spec.whatwg.org/#concept-range-bp-before) [start](https://dom.spec.whatwg.org/#concept-range-start) or [after](https://dom.spec.whatwg.org/#concept-range-bp-after) [end](https://dom.spec.whatwg.org/#concept-range-end), return false.
5.  Return true.

The `comparePoint(node, offset)` method steps are:

1.  If node’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is different from [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-range-root), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[WrongDocumentError](https://webidl.spec.whatwg.org/#wrongdocumenterror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If node is a [doctype](https://dom.spec.whatwg.org/#concept-doctype), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidNodeTypeError](https://webidl.spec.whatwg.org/#invalidnodetypeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If offset is greater than node’s [length](https://dom.spec.whatwg.org/#concept-node-length), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[IndexSizeError](https://webidl.spec.whatwg.org/#indexsizeerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
4.  If (node, offset) is [before](https://dom.spec.whatwg.org/#concept-range-bp-before) [start](https://dom.spec.whatwg.org/#concept-range-start), return −1.
5.  If (node, offset) is [after](https://dom.spec.whatwg.org/#concept-range-bp-after) [end](https://dom.spec.whatwg.org/#concept-range-end), return 1.
6.  Return 0.

---

The `intersectsNode(node)` method steps are:

1.  If node’s [root](https://dom.spec.whatwg.org/#concept-tree-root) is different from [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-range-root), return false.
2.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
3.  If parent is null, return true.
4.  Let offset be node’s [index](https://dom.spec.whatwg.org/#concept-tree-index).
5.  If (parent, offset) is [before](https://dom.spec.whatwg.org/#concept-range-bp-before) [end](https://dom.spec.whatwg.org/#concept-range-end) and (parent, offset plus 1) is [after](https://dom.spec.whatwg.org/#concept-range-bp-after) [start](https://dom.spec.whatwg.org/#concept-range-start), return true.
6.  Return false.

---

[Range/toString](https://developer.mozilla.org/en-US/docs/Web/API/Range/toString 'The Range.toString() method is a stringifier returning the text of the Range.')

In all current engines.

Firefox1+Safari1+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The stringification behavior must run these steps:

1.  Let s be the empty string.
2.  If [this](https://webidl.spec.whatwg.org/#this)’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is [this](https://webidl.spec.whatwg.org/#this)’s [end node](https://dom.spec.whatwg.org/#concept-range-end-node) and it is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), then return the substring of that `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node)’s [data](https://dom.spec.whatwg.org/#concept-cd-data) beginning at [this](https://webidl.spec.whatwg.org/#this)’s [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) and ending at [this](https://webidl.spec.whatwg.org/#this)’s [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset).
3.  If [this](https://webidl.spec.whatwg.org/#this)’s [start node](https://dom.spec.whatwg.org/#concept-range-start-node) is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), then append the substring of that [node](https://dom.spec.whatwg.org/#concept-node)’s [data](https://dom.spec.whatwg.org/#concept-cd-data) from [this](https://webidl.spec.whatwg.org/#this)’s [start offset](https://dom.spec.whatwg.org/#concept-range-start-offset) until the end to s.
4.  Append the [concatenation](https://infra.spec.whatwg.org/#string-concatenate) of the [data](https://dom.spec.whatwg.org/#concept-cd-data) of all `[Text](https://dom.spec.whatwg.org/#text)` [nodes](https://dom.spec.whatwg.org/#concept-node) that are [contained](https://dom.spec.whatwg.org/#contained) in [this](https://webidl.spec.whatwg.org/#this), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), to s.
5.  If [this](https://webidl.spec.whatwg.org/#this)’s [end node](https://dom.spec.whatwg.org/#concept-range-end-node) is a `[Text](https://dom.spec.whatwg.org/#text)` [node](https://dom.spec.whatwg.org/#concept-node), then append the substring of that [node](https://dom.spec.whatwg.org/#concept-node)’s [data](https://dom.spec.whatwg.org/#concept-cd-data) from its start until [this](https://webidl.spec.whatwg.org/#this)’s [end offset](https://dom.spec.whatwg.org/#concept-range-end-offset) to s.
6.  Return s.

---

The `[createContextualFragment()](https://w3c.github.io/DOM-Parsing/#dfn-createcontextualfragment-fragment)`, `[getClientRects()](https://drafts.csswg.org/cssom-view-1/#dom-range-getclientrects)`, and `[getBoundingClientRect()](https://drafts.csswg.org/cssom-view-1/#dom-range-getboundingclientrect)` methods are defined in other specifications. [\[DOM-Parsing\]](https://dom.spec.whatwg.org/#biblio-dom-parsing) [\[CSSOM-VIEW\]](https://dom.spec.whatwg.org/#biblio-cssom-view)

## 6\. Traversal[](https://dom.spec.whatwg.org/#traversal)

`[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` and `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` objects can be used to filter and traverse [node](https://dom.spec.whatwg.org/#concept-node) [trees](https://dom.spec.whatwg.org/#concept-tree).

Each `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` and `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` object has an associated active flag to avoid recursive invocations. It is initially unset.

Each `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` and `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` object also has an associated root (a [node](https://dom.spec.whatwg.org/#concept-node)), a whatToShow (a bitmask), and a filter (a callback).

To filter a [node](https://dom.spec.whatwg.org/#concept-node) node within a `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` or `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` object traverser, run these steps:

1.  If traverser’s [active flag](https://dom.spec.whatwg.org/#concept-traversal-active) is set, then throw an "`[InvalidStateError](https://webidl.spec.whatwg.org/#invalidstateerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  Let n be node’s `[nodeType](https://dom.spec.whatwg.org/#dom-node-nodetype)` attribute value − 1.
3.  If the nth bit (where 0 is the least significant bit) of traverser’s [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow) is not set, then return `[FILTER_SKIP](https://dom.spec.whatwg.org/#dom-nodefilter-filter_skip)`.
4.  If traverser’s [filter](https://dom.spec.whatwg.org/#concept-traversal-filter) is null, then return `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`.
5.  Set traverser’s [active flag](https://dom.spec.whatwg.org/#concept-traversal-active).
6.  Let result be the return value of [call a user object’s operation](https://webidl.spec.whatwg.org/#call-a-user-objects-operation) with traverser’s [filter](https://dom.spec.whatwg.org/#concept-traversal-filter), "`acceptNode`", and « node ». If this throws an exception, then unset traverser’s [active flag](https://dom.spec.whatwg.org/#concept-traversal-active) and rethrow the exception.
7.  Unset traverser’s [active flag](https://dom.spec.whatwg.org/#concept-traversal-active).
8.  Return result.

### 6.1. Interface `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)`[](https://dom.spec.whatwg.org/#interface-nodeiterator)

[NodeIterator](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator 'The NodeIterator interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `NodeIterator` {
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [Node](https://dom.spec.whatwg.org/#node) [root](https://dom.spec.whatwg.org/#dom-nodeiterator-root);
readonly attribute [Node](https://dom.spec.whatwg.org/#node) [referenceNode](https://dom.spec.whatwg.org/#dom-nodeiterator-referencenode);
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [pointerBeforeReferenceNode](https://dom.spec.whatwg.org/#dom-nodeiterator-pointerbeforereferencenode);
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [whatToShow](https://dom.spec.whatwg.org/#dom-nodeiterator-whattoshow);
readonly attribute [NodeFilter](https://dom.spec.whatwg.org/#callbackdef-nodefilter)? [filter](https://dom.spec.whatwg.org/#dom-nodeiterator-filter);

[Node](https://dom.spec.whatwg.org/#node)? [nextNode](https://dom.spec.whatwg.org/#dom-nodeiterator-nextnode)();
[Node](https://dom.spec.whatwg.org/#node)? [previousNode](https://dom.spec.whatwg.org/#dom-nodeiterator-previousnode)();

[undefined](https://webidl.spec.whatwg.org/#idl-undefined) [detach](https://dom.spec.whatwg.org/#dom-nodeiterator-detach)();
};

`[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` objects can be created using the `[createNodeIterator()](https://dom.spec.whatwg.org/#dom-document-createnodeiterator)` method on `[Document](https://dom.spec.whatwg.org/#document)` objects.

Each `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` object has an associated iterator collection, which is a [collection](https://dom.spec.whatwg.org/#concept-collection) rooted at the `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` object’s [root](https://dom.spec.whatwg.org/#concept-traversal-root), whose filter matches any [node](https://dom.spec.whatwg.org/#concept-node).

Each `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` object also has an associated reference (a [node](https://dom.spec.whatwg.org/#concept-node)) and pointer before reference (a boolean).

As mentioned earlier, `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` objects have an associated [active flag](https://dom.spec.whatwg.org/#concept-traversal-active), [root](https://dom.spec.whatwg.org/#concept-traversal-root), [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow), and [filter](https://dom.spec.whatwg.org/#concept-traversal-filter) as well.

The `NodeIterator` pre-removing steps given a nodeIterator and toBeRemovedNode, are as follows:

1.  If toBeRemovedNode is not an [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor) of nodeIterator’s [reference](https://dom.spec.whatwg.org/#nodeiterator-reference), or toBeRemovedNode is nodeIterator’s [root](https://dom.spec.whatwg.org/#concept-traversal-root), then return.
2.  If nodeIterator’s [pointer before reference](https://dom.spec.whatwg.org/#nodeiterator-pointer-before-reference) is true, then:

    1.  Let next be toBeRemovedNode’s first [following](https://dom.spec.whatwg.org/#concept-tree-following) [node](https://dom.spec.whatwg.org/#concept-node) that is an [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) of nodeIterator’s [root](https://dom.spec.whatwg.org/#concept-traversal-root) and is not an [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) of toBeRemovedNode, and null if there is no such [node](https://dom.spec.whatwg.org/#concept-node).
    2.  If next is non-null, then set nodeIterator’s [reference](https://dom.spec.whatwg.org/#nodeiterator-reference) to next and return.
    3.  Otherwise, set nodeIterator’s [pointer before reference](https://dom.spec.whatwg.org/#nodeiterator-pointer-before-reference) to false.

        Steps are not terminated here.

3.  Set nodeIterator’s [reference](https://dom.spec.whatwg.org/#nodeiterator-reference) to toBeRemovedNode’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent), if toBeRemovedNode’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) is null, and to the [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) of toBeRemovedNode’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) that appears last in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) otherwise.

---

[NodeIterator/root](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/root 'The NodeIterator.root read-only property represents the Node that is the root of what the NodeIterator traverses.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `root` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-traversal-root).

[NodeIterator/referenceNode](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/referenceNode 'The NodeIterator.referenceNode read-only returns the Node to which the iterator is anchored; as new nodes are inserted, the iterator remains anchored to the reference node as specified by this property.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

OperaYesEdge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera MobileYes

The `referenceNode` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [reference](https://dom.spec.whatwg.org/#nodeiterator-reference).

[NodeIterator/pointerBeforeReferenceNode](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/pointerBeforeReferenceNode 'The NodeIterator.pointerBeforeReferenceNode read-only property returns a boolean flag that indicates whether the NodeFilter is anchored before (if this value is true) or after (if this value is false) the anchor node indicated by the NodeIterator.referenceNode property.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

OperaYesEdge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera MobileYes

The `pointerBeforeReferenceNode` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [pointer before reference](https://dom.spec.whatwg.org/#nodeiterator-pointer-before-reference).

[NodeIterator/whatToShow](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/whatToShow 'The NodeIterator.whatToShow read-only property represents an unsigned integer representing a bitmask signifying what types of nodes should be returned by the NodeIterator.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `whatToShow` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow).

[NodeIterator/filter](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/filter 'The NodeIterator.filter read-only method returns a NodeFilter object, that is an object implement an acceptNode(node) method, used to screen nodes.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `filter` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [filter](https://dom.spec.whatwg.org/#concept-traversal-filter).

To traverse, given a `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` object iterator and a direction direction, run these steps:

1.  Let node be iterator’s [reference](https://dom.spec.whatwg.org/#nodeiterator-reference).
2.  Let beforeNode be iterator’s [pointer before reference](https://dom.spec.whatwg.org/#nodeiterator-pointer-before-reference).
3.  While true:

    1.  Branch on direction:

        next

        If beforeNode is false, then set node to the first [node](https://dom.spec.whatwg.org/#concept-node) [following](https://dom.spec.whatwg.org/#concept-tree-following) node in iterator’s [iterator collection](https://dom.spec.whatwg.org/#iterator-collection). If there is no such [node](https://dom.spec.whatwg.org/#concept-node), then return null.

        If beforeNode is true, then set it to false.

        previous

        If beforeNode is true, then set node to the first [node](https://dom.spec.whatwg.org/#concept-node) [preceding](https://dom.spec.whatwg.org/#concept-tree-preceding) node in iterator’s [iterator collection](https://dom.spec.whatwg.org/#iterator-collection). If there is no such [node](https://dom.spec.whatwg.org/#concept-node), then return null.

        If beforeNode is false, then set it to true.

    2.  Let result be the result of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within iterator.
    3.  If result is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then [break](https://infra.spec.whatwg.org/#iteration-break).

4.  Set iterator’s [reference](https://dom.spec.whatwg.org/#nodeiterator-reference) to node.
5.  Set iterator’s [pointer before reference](https://dom.spec.whatwg.org/#nodeiterator-pointer-before-reference) to beforeNode.
6.  Return node.

[NodeIterator/nextNode](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/nextNode 'The NodeIterator.nextNode() method returns the next node in the set represented by the NodeIterator and advances the position of the iterator within the set. The first call to nextNode() returns the first node in the set.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `nextNode()` method steps are to return the result of [traversing](https://dom.spec.whatwg.org/#concept-nodeiterator-traverse) with [this](https://webidl.spec.whatwg.org/#this) and next.

[NodeIterator/previousNode](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/previousNode 'The NodeIterator.previousNode() method returns the previous node in the set represented by the NodeIterator and moves the position of the iterator backwards within the set.')

In all current engines.

Firefox3.5+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

The `previousNode()` method steps are to return the result of [traversing](https://dom.spec.whatwg.org/#concept-nodeiterator-traverse) with [this](https://webidl.spec.whatwg.org/#this) and previous.

The `detach()` method steps are to do nothing. Its functionality (disabling a `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` object) was removed, but the method itself is preserved for compatibility.

### 6.2. Interface `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)`[](https://dom.spec.whatwg.org/#interface-treewalker)

[TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker 'The TreeWalker object represents the nodes of a document subtree and a position within them.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `TreeWalker` {
\[[SameObject](https://webidl.spec.whatwg.org/#SameObject)\] readonly attribute [Node](https://dom.spec.whatwg.org/#node) [root](https://dom.spec.whatwg.org/#dom-treewalker-root);
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [whatToShow](https://dom.spec.whatwg.org/#dom-treewalker-whattoshow);
readonly attribute [NodeFilter](https://dom.spec.whatwg.org/#callbackdef-nodefilter)? [filter](https://dom.spec.whatwg.org/#dom-treewalker-filter);
attribute [Node](https://dom.spec.whatwg.org/#node) [currentNode](https://dom.spec.whatwg.org/#dom-treewalker-currentnode);

[Node](https://dom.spec.whatwg.org/#node)? [parentNode](https://dom.spec.whatwg.org/#dom-treewalker-parentnode)();
[Node](https://dom.spec.whatwg.org/#node)? [firstChild](https://dom.spec.whatwg.org/#dom-treewalker-firstchild)();
[Node](https://dom.spec.whatwg.org/#node)? [lastChild](https://dom.spec.whatwg.org/#dom-treewalker-lastchild)();
[Node](https://dom.spec.whatwg.org/#node)? [previousSibling](https://dom.spec.whatwg.org/#dom-treewalker-previoussibling)();
[Node](https://dom.spec.whatwg.org/#node)? [nextSibling](https://dom.spec.whatwg.org/#dom-treewalker-nextsibling)();
[Node](https://dom.spec.whatwg.org/#node)? [previousNode](https://dom.spec.whatwg.org/#dom-treewalker-previousnode)();
[Node](https://dom.spec.whatwg.org/#node)? [nextNode](https://dom.spec.whatwg.org/#dom-treewalker-nextnode)();
};

`[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` objects can be created using the `[createTreeWalker()](https://dom.spec.whatwg.org/#dom-document-createtreewalker)` method on `[Document](https://dom.spec.whatwg.org/#document)` objects.

Each `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` object has an associated current (a [node](https://dom.spec.whatwg.org/#concept-node)).

As mentioned earlier `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` objects have an associated [root](https://dom.spec.whatwg.org/#concept-traversal-root), [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow), and [filter](https://dom.spec.whatwg.org/#concept-traversal-filter) as well.

[TreeWalker/root](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/root 'The TreeWalker.root read-only property returns the node that is the root of what the TreeWalker traverses.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `root` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-traversal-root).

[TreeWalker/whatToShow](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/whatToShow 'The TreeWalker.whatToShow read-only property returns an unsigned long being a bitmask made of constants describing the types of Node that must to be presented. Non-matching nodes are skipped, but their children may be included, if relevant. The possible values are:')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `whatToShow` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow).

[TreeWalker/filter](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/filter 'The TreeWalker.filter read-only property returns a NodeFilter that is the filtering object associated with the TreeWalker.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `filter` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [filter](https://dom.spec.whatwg.org/#concept-traversal-filter).

The `currentNode` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current).

[TreeWalker/currentNode](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/currentNode 'The TreeWalker.currentNode property represents the Node on which the TreeWalker is currently pointing at.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `[currentNode](https://dom.spec.whatwg.org/#dom-treewalker-currentnode)` setter steps are to set [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current) to the given value.

---

[TreeWalker/parentNode](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/parentNode "The TreeWalker.parentNode() method moves the current Node to the first visible ancestor node in the document order, and returns the found node. If no such node exists, or if it is above the TreeWalker's root node, returns null and the current node is not changed.")

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `parentNode()` method steps are:

1.  Let node be [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current).
2.  While node is non-null and is not [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-traversal-root):

    1.  Set node to node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
    2.  If node is non-null and [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within [this](https://webidl.spec.whatwg.org/#this) returns `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then set [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current) to node and return node.

3.  Return null.

To traverse children, given a walker and type, run these steps:

1.  Let node be walker’s [current](https://dom.spec.whatwg.org/#treewalker-current).
2.  Set node to node’s [first child](https://dom.spec.whatwg.org/#concept-tree-first-child) if type is first, and node’s [last child](https://dom.spec.whatwg.org/#concept-tree-last-child) if type is last.
3.  While node is non-null:

    1.  Let result be the result of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within walker.
    2.  If result is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then set walker’s [current](https://dom.spec.whatwg.org/#treewalker-current) to node and return node.
    3.  If result is `[FILTER_SKIP](https://dom.spec.whatwg.org/#dom-nodefilter-filter_skip)`, then:

        1.  Let child be node’s [first child](https://dom.spec.whatwg.org/#concept-tree-first-child) if type is first, and node’s [last child](https://dom.spec.whatwg.org/#concept-tree-last-child) if type is last.
        2.  If child is non-null, then set node to child and [continue](https://infra.spec.whatwg.org/#iteration-continue).

    4.  While node is non-null:

        1.  Let sibling be node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling) if type is first, and node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) if type is last.
        2.  If sibling is non-null, then set node to sibling and [break](https://infra.spec.whatwg.org/#iteration-break).
        3.  Let parent be node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
        4.  If parent is null, walker’s [root](https://dom.spec.whatwg.org/#concept-traversal-root), or walker’s [current](https://dom.spec.whatwg.org/#treewalker-current), then return null.
        5.  Set node to parent.

4.  Return null.

[TreeWalker/firstChild](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/firstChild 'The TreeWalker.firstChild() method moves the current Node to the first visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns null and the current node is not changed.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `firstChild()` method steps are to [traverse children](https://dom.spec.whatwg.org/#concept-traverse-children) with [this](https://webidl.spec.whatwg.org/#this) and first.

[TreeWalker/lastChild](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/lastChild 'The TreeWalker.lastChild() method moves the current Node to the last visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns null and the current node is not changed.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `lastChild()` method steps are to [traverse children](https://dom.spec.whatwg.org/#concept-traverse-children) with [this](https://webidl.spec.whatwg.org/#this) and last.

To traverse siblings, given a walker and type, run these steps:

1.  Let node be walker’s [current](https://dom.spec.whatwg.org/#treewalker-current).
2.  If node is [root](https://dom.spec.whatwg.org/#concept-traversal-root), then return null.
3.  While true:

    1.  Let sibling be node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling) if type is next, and node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) if type is previous.
    2.  While sibling is non-null:

        1.  Set node to sibling.
        2.  Let result be the result of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within walker.
        3.  If result is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then set walker’s [current](https://dom.spec.whatwg.org/#treewalker-current) to node and return node.
        4.  Set sibling to node’s [first child](https://dom.spec.whatwg.org/#concept-tree-first-child) if type is next, and node’s [last child](https://dom.spec.whatwg.org/#concept-tree-last-child) if type is previous.
        5.  If result is `[FILTER_REJECT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_reject)` or sibling is null, then set sibling to node’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling) if type is next, and node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) if type is previous.

    3.  Set node to node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
    4.  If node is null or walker’s [root](https://dom.spec.whatwg.org/#concept-traversal-root), then return null.
    5.  If the return value of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within walker is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then return null.

[TreeWalker/nextSibling](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextSibling 'The TreeWalker.nextSibling() method moves the current Node to its next sibling, if any, and returns the found sibling. If there is no such node, return null and the current node is not changed.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `nextSibling()` method steps are to [traverse siblings](https://dom.spec.whatwg.org/#concept-traverse-siblings) with [this](https://webidl.spec.whatwg.org/#this) and next.

[TreeWalker/previousSibling](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousSibling 'The TreeWalker.previousSibling() method moves the current Node to its previous sibling, if any, and returns the found sibling. If there is no such node, return null and the current node is not changed.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `previousSibling()` method steps are to [traverse siblings](https://dom.spec.whatwg.org/#concept-traverse-siblings) with [this](https://webidl.spec.whatwg.org/#this) and previous.

[TreeWalker/previousNode](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousNode 'The TreeWalker.previousNode() method moves the current Node to the previous visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists,or if it is before that the root node defined at the object construction, returns null and the current node is not changed.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `previousNode()` method steps are:

1.  Let node be [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current).
2.  While node is not [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-traversal-root):

    1.  Let sibling be node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).
    2.  While sibling is non-null:

        1.  Set node to sibling.
        2.  Let result be the result of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within [this](https://webidl.spec.whatwg.org/#this).
        3.  While result is not `[FILTER_REJECT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_reject)` and node has a [child](https://dom.spec.whatwg.org/#concept-tree-child):

            1.  Set node to node’s [last child](https://dom.spec.whatwg.org/#concept-tree-last-child).
            2.  Set result to the result of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within [this](https://webidl.spec.whatwg.org/#this).

        4.  If result is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then set [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current) to node and return node.
        5.  Set sibling to node’s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).

    3.  If node is [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-traversal-root) or node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent) is null, then return null.
    4.  Set node to node’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).
    5.  If the return value of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within [this](https://webidl.spec.whatwg.org/#this) is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then set [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current) to node and return node.

3.  Return null.

[TreeWalker/nextNode](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextNode 'The TreeWalker.nextNode() method moves the current Node to the next visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, returns null and the current node is not changed.')

In all current engines.

Firefox4+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile10.1+

The `nextNode()` method steps are:

1.  Let node be [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current).
2.  Let result be `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`.
3.  While true:

    1.  While result is not `[FILTER_REJECT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_reject)` and node has a [child](https://dom.spec.whatwg.org/#concept-tree-child):

        1.  Set node to its [first child](https://dom.spec.whatwg.org/#concept-tree-first-child).
        2.  Set result to the result of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within [this](https://webidl.spec.whatwg.org/#this).
        3.  If result is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then set [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current) to node and return node.

    2.  Let sibling be null.
    3.  Let temporary be node.
    4.  While temporary is non-null:

        1.  If temporary is [this](https://webidl.spec.whatwg.org/#this)’s [root](https://dom.spec.whatwg.org/#concept-traversal-root), then return null.
        2.  Set sibling to temporary’s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
        3.  If sibling is non-null, then set node to sibling and [break](https://infra.spec.whatwg.org/#iteration-break).
        4.  Set temporary to temporary’s [parent](https://dom.spec.whatwg.org/#concept-tree-parent).

    5.  Set result to the result of [filtering](https://dom.spec.whatwg.org/#concept-node-filter) node within [this](https://webidl.spec.whatwg.org/#this).
    6.  If result is `[FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept)`, then set [this](https://webidl.spec.whatwg.org/#this)’s [current](https://dom.spec.whatwg.org/#treewalker-current) to node and return node.

### 6.3. Interface `[NodeFilter](https://dom.spec.whatwg.org/#callbackdef-nodefilter)`[](https://dom.spec.whatwg.org/#interface-nodefilter)

[NodeFilter](https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter 'A NodeFilter interface represents an object used to filter the nodes in a NodeIterator or TreeWalker. A NodeFilter knows nothing about the document or traversing nodes; it only knows how to evaluate a single node against the provided filter.')

In all current engines.

Firefox2+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

[NodeFilter/acceptNode](https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter/acceptNode 'The NodeFilter.acceptNode() method returns an unsigned short that will be used to tell if a given Node must be accepted or not by the NodeIterator or TreeWalker iteration algorithm. This method is expected to be written by the user of a NodeFilter. Possible return values are:')

In all current engines.

Firefox2+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IE9+

---

Firefox for Android4+iOS Safari3+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile10.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
callback interface `NodeFilter` {
// Constants for acceptNode()
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [FILTER_ACCEPT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_accept) = 1;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [FILTER_REJECT](https://dom.spec.whatwg.org/#dom-nodefilter-filter_reject) = 2;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) [FILTER_SKIP](https://dom.spec.whatwg.org/#dom-nodefilter-filter_skip) = 3;

// Constants for whatToShow
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_ALL](https://dom.spec.whatwg.org/#dom-nodefilter-show_all) = 0xFFFFFFFF;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_ELEMENT](https://dom.spec.whatwg.org/#dom-nodefilter-show_element) = 0x1;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_ATTRIBUTE](https://dom.spec.whatwg.org/#dom-nodefilter-show_attribute) = 0x2;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_TEXT](https://dom.spec.whatwg.org/#dom-nodefilter-show_text) = 0x4;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_CDATA_SECTION](https://dom.spec.whatwg.org/#dom-nodefilter-show_cdata_section) = 0x8;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `SHOW_ENTITY_REFERENCE`[](https://dom.spec.whatwg.org/#dom-nodefilter-show_entity_reference) = 0x10; // legacy
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `SHOW_ENTITY`[](https://dom.spec.whatwg.org/#dom-nodefilter-show_entity) = 0x20; // legacy
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_PROCESSING_INSTRUCTION](https://dom.spec.whatwg.org/#dom-nodefilter-show_processing_instruction) = 0x40;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_COMMENT](https://dom.spec.whatwg.org/#dom-nodefilter-show_comment) = 0x80;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_DOCUMENT](https://dom.spec.whatwg.org/#dom-nodefilter-show_document) = 0x100;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_DOCUMENT_TYPE](https://dom.spec.whatwg.org/#dom-nodefilter-show_document_type) = 0x200;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [SHOW_DOCUMENT_FRAGMENT](https://dom.spec.whatwg.org/#dom-nodefilter-show_document_fragment) = 0x400;
const [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `SHOW_NOTATION`[](https://dom.spec.whatwg.org/#dom-nodefilter-show_notation) = 0x800; // legacy

[unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `acceptNode`[](https://dom.spec.whatwg.org/#dom-nodefilter-acceptnode)([Node](https://dom.spec.whatwg.org/#node) `node`[](https://dom.spec.whatwg.org/#dom-nodefilter-acceptnode-node-node));
};

`[NodeFilter](https://dom.spec.whatwg.org/#callbackdef-nodefilter)` objects can be used as [filter](https://dom.spec.whatwg.org/#concept-traversal-filter) for `[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)` and `[TreeWalker](https://dom.spec.whatwg.org/#treewalker)` objects and also provide constants for their [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow) bitmask. A `[NodeFilter](https://dom.spec.whatwg.org/#callbackdef-nodefilter)` object is typically implemented as a JavaScript function.

These constants can be used as [filter](https://dom.spec.whatwg.org/#concept-traversal-filter) return value:

-   `FILTER_ACCEPT` (1);
-   `FILTER_REJECT` (2);
-   `FILTER_SKIP` (3).

These constants can be used for [whatToShow](https://dom.spec.whatwg.org/#concept-traversal-whattoshow):

-   `SHOW_ALL` (4294967295, FFFFFFFF in hexadecimal);
-   `SHOW_ELEMENT` (1);
-   `SHOW_ATTRIBUTE` (2);
-   `SHOW_TEXT` (4);
-   `SHOW_CDATA_SECTION` (8);
-   `SHOW_PROCESSING_INSTRUCTION` (64, 40 in hexadecimal);
-   (128, 80 in hexadecimal);
-   `SHOW_DOCUMENT` (256, 100 in hexadecimal);
-   `SHOW_DOCUMENT_TYPE` (512, 200 in hexadecimal);
-   `SHOW_DOCUMENT_FRAGMENT` (1024, 400 in hexadecimal).

## 7\. Sets[](https://dom.spec.whatwg.org/#sets)

Yes, the name `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` is an unfortunate legacy mishap.

### 7.1. Interface `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)`[](https://dom.spec.whatwg.org/#interface-domtokenlist)

[DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList 'The DOMTokenList interface represents a set of space-separated tokens. Such a set is returned by Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, HTMLAreaElement.relList, HTMLIframeElement.sandbox, or HTMLOutputElement.htmlFor. It is indexed beginning with 0 as with JavaScript Array objects. DOMTokenList is always case-sensitive.')

In all current engines.

Firefox3.6+Safari6+Chrome8+

---

Opera11.5+Edge79+

---

Edge (Legacy)12+IE10+

---

Firefox for Android4+iOS Safari6+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera Mobile11.5+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `DOMTokenList` {
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) [length](https://dom.spec.whatwg.org/#dom-domtokenlist-length);
getter [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? [item](https://dom.spec.whatwg.org/#dom-domtokenlist-item)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `index`[](https://dom.spec.whatwg.org/#dom-domtokenlist-item-index-index));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [contains](https://dom.spec.whatwg.org/#dom-domtokenlist-contains)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `token`[](https://dom.spec.whatwg.org/#dom-domtokenlist-contains-token-token));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [add](https://dom.spec.whatwg.org/#dom-domtokenlist-add)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)... `tokens`[](https://dom.spec.whatwg.org/#dom-domtokenlist-add-tokens-tokens));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [undefined](https://webidl.spec.whatwg.org/#idl-undefined) [remove](https://dom.spec.whatwg.org/#dom-domtokenlist-remove)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)... `tokens`[](https://dom.spec.whatwg.org/#dom-domtokenlist-remove-tokens-tokens));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [toggle](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `token`[](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle-token-force-token), optional [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `force`[](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle-token-force-force));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [boolean](https://webidl.spec.whatwg.org/#idl-boolean) [replace](https://dom.spec.whatwg.org/#dom-domtokenlist-replace)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `token`[](https://dom.spec.whatwg.org/#dom-domtokenlist-replace-token-newtoken-token), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `newToken`[](https://dom.spec.whatwg.org/#dom-domtokenlist-replace-token-newtoken-newtoken));
[boolean](https://webidl.spec.whatwg.org/#idl-boolean) [supports](https://dom.spec.whatwg.org/#dom-domtokenlist-supports)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `token`[](https://dom.spec.whatwg.org/#dom-domtokenlist-supports-token-token));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] stringifier[](https://dom.spec.whatwg.org/#DOMTokenList-stringification-behavior) attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) [value](https://dom.spec.whatwg.org/#dom-domtokenlist-value);
iterable<[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)\>;
};

A `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object has an associated token set (a [set](https://infra.spec.whatwg.org/#ordered-set)), which is initially empty.

A `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object also has an associated [element](https://dom.spec.whatwg.org/#concept-element) and an [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name).

[Specifications](https://dom.spec.whatwg.org/#other-applicable-specifications) may define supported tokens for a `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)`'s associated [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name).

A `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object’s validation steps for a given token are:

1.  If the associated [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) does not define [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens), [throw](https://webidl.spec.whatwg.org/#dfn-throw) a `TypeError`.
2.  Let lowercase token be a copy of token, in [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
3.  If lowercase token is present in [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens), return true.
4.  Return false.

A `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object’s update steps are:

1.  If the associated [element](https://dom.spec.whatwg.org/#concept-element) does not have an associated [attribute](https://dom.spec.whatwg.org/#concept-attribute) and [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens) is empty, then return.
2.  [Set an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) for the associated [element](https://dom.spec.whatwg.org/#concept-element) using associated [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) and the result of running the [ordered set serializer](https://dom.spec.whatwg.org/#concept-ordered-set-serializer) for [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens).

A `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object’s serialize steps are to return the result of running [get an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-get-value) given the associated [element](https://dom.spec.whatwg.org/#concept-element) and the associated [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name).

---

A `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object has these [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) for its associated [element](https://dom.spec.whatwg.org/#concept-element):

1.  If localName is associated attribute’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), namespace is null, and value is null, then [empty](https://infra.spec.whatwg.org/#list-empty) [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens).
2.  Otherwise, if localName is associated attribute’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name), namespace is null, then set [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens) to value, [parsed](https://dom.spec.whatwg.org/#concept-ordered-set-parser).

When a `[DOMTokenList](https://dom.spec.whatwg.org/#domtokenlist)` object is created, then:

1.  Let element be associated [element](https://dom.spec.whatwg.org/#concept-element).
2.  Let localName be associated attribute’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name).
3.  Let value be the result of [getting an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-get-value) given element and localName.
4.  Run the [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) for element, localName, value, value, and null.

[DOMTokenList/length](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length 'The length read-only property of the DOMTokenList interface is an integer representing the number of objects stored in the object.')

In all current engines.

Firefox50+Safari6+Chrome8+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE10+

---

Firefox for Android50+iOS Safari6+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera MobileYes

`` tokenlist . `[length](https://dom.spec.whatwg.org/#dom-domtokenlist-length)`  ``

Returns the number of tokens.

[DOMTokenList/item](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/item 'The item() method of the DOMTokenList interface returns an item in the list by its index.')

In all current engines.

Firefox3.6+Safari6+Chrome8+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE10+

---

Firefox for Android4+iOS Safari6+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera MobileYes

`` tokenlist . `[item(index)](https://dom.spec.whatwg.org/#dom-domtokenlist-item)`  ``

`tokenlist[index]`

Returns the token with index index.

[DOMTokenList/contains](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains 'The contains() method of the DOMTokenList interface returns a boolean value — true if the underlying list contains the given token, otherwise false.')

In all current engines.

Firefox3.6+Safari6+Chrome8+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE10+

---

Firefox for Android4+iOS Safari6+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera MobileYes

`` tokenlist . `[contains(token)](https://dom.spec.whatwg.org/#dom-domtokenlist-contains)`  ``

Returns true if token is present; otherwise false.

[DOMTokenList/add](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add 'The add() method of the DOMTokenList interface adds the given token to the list.')

In all current engines.

Firefox3.6+Safari6+Chrome8+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE10+

---

Firefox for Android4+iOS Safari6+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera MobileYes

`tokenlist . [add(tokens…)](https://dom.spec.whatwg.org/#dom-domtokenlist-add)`

Adds all arguments passed, except those already present.

Throws a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if one of the arguments is the empty string.

Throws an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if one of the arguments contains any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

[DOMTokenList/remove](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove 'The remove() method of the DOMTokenList interface removes the specified tokens from the list.')

In all current engines.

Firefox3.6+Safari6+Chrome8+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE10+

---

Firefox for Android4+iOS Safari6+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera MobileYes

`tokenlist . [remove(tokens…)](https://dom.spec.whatwg.org/#dom-domtokenlist-remove)`

Removes arguments passed, if they are present.

Throws a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if one of the arguments is the empty string.

Throws an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if one of the arguments contains any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

[DOMTokenList/toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle "The toggle() method of the DOMTokenList interface removes a given token from the list and returns false. If token doesn't exist it's added and the function returns true.")

In all current engines.

Firefox3.6+Safari6+Chrome8+

---

OperaYesEdge79+

---

Edge (Legacy)12+IE10+

---

Firefox for Android4+iOS Safari6+Chrome for Android18+Android WebView3+Samsung Internet1.0+Opera MobileYes

`tokenlist . [toggle(token [, force])](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)`

If force is not given, "toggles" token, removing it if it’s present and adding it if it’s not present. If force is true, adds token (same as `[add()](https://dom.spec.whatwg.org/#dom-domtokenlist-add)`). If force is false, removes token (same as `[remove()](https://dom.spec.whatwg.org/#dom-domtokenlist-remove)`).

Returns true if token is now present; otherwise false.

Throws a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if token is empty.

Throws an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if token contains any spaces.

[DOMTokenList/replace](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace "The replace() method of the DOMTokenList interface replaces an existing token with a new token. If the first token doesn't exist, replace() returns false immediately, without adding the new token to the token list.")

In all current engines.

Firefox49+Safari10.1+Chrome61+

---

Opera48+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10.3+Chrome for Android61+Android WebView61+Samsung Internet8.0+Opera Mobile45+

`tokenlist . [replace(token, newToken)](https://dom.spec.whatwg.org/#dom-domtokenlist-replace)`

Replaces token with newToken.

Returns true if token was replaced with newToken; otherwise false.

Throws a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if one of the arguments is the empty string.

Throws an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)` if one of the arguments contains any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

[DOMTokenList/supports](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/supports "The supports() method of the DOMTokenList interface returns true if a given token is in the associated attribute's supported tokens. This method is intended to support feature detection.")

In all current engines.

Firefox49+Safari10.1+Chrome49+

---

Opera36+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android49+iOS Safari10.3+Chrome for Android49+Android WebView49+Samsung Internet5.0+Opera Mobile36+

`tokenlist . [supports(token)](https://dom.spec.whatwg.org/#dom-domtokenlist-supports)`

Returns true if token is in the associated attribute’s supported tokens. Returns false otherwise.

Throws a `TypeError` if the associated attribute has no supported tokens defined.

[DOMTokenList/value](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/value 'The value property of the DOMTokenList interface is a stringifier that returns the value of the list as a DOMString, or clears and sets the list to the given value.')

In all current engines.

Firefox47+Safari10+Chrome50+

---

Opera37+Edge79+

---

Edge (Legacy)17+IENone

---

Firefox for Android47+iOS Safari10+Chrome for Android50+Android WebView50+Samsung Internet5.0+Opera Mobile37+

`` tokenlist . `[value](https://dom.spec.whatwg.org/#dom-domtokenlist-value)`  ``

Returns the associated set as string.

Can be set, to change the associated attribute.

The `length` attribute' getter must return [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens)’s [size](https://infra.spec.whatwg.org/#list-size).

The object’s [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices) are the numbers in the range zero to object’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens)’s [size](https://infra.spec.whatwg.org/#list-size) minus one, unless [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens) [is empty](https://infra.spec.whatwg.org/#list-is-empty), in which case there are no [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices).

The `item(index)` method steps are:

1.  If index is equal to or greater than [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens)’s [size](https://infra.spec.whatwg.org/#list-size), then return null.
2.  Return [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens)\[index\].

The `contains(token)` method steps are to return true if [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens)\[token\] [exists](https://infra.spec.whatwg.org/#list-contain); otherwise false.

The `add(tokens…)` method steps are:

1.  [For each](https://infra.spec.whatwg.org/#list-iterate) token in tokens:

    1.  If token is the empty string, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
    2.  If token contains any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

2.  [For each](https://infra.spec.whatwg.org/#list-iterate) token in tokens, [append](https://infra.spec.whatwg.org/#set-append) token to [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens).
3.  Run the [update steps](https://dom.spec.whatwg.org/#concept-dtl-update).

The `remove(tokens…)` method steps are:

1.  [For each](https://infra.spec.whatwg.org/#list-iterate) token in tokens:

    1.  If token is the empty string, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
    2.  If token contains any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.

2.  For each token in tokens, [remove](https://infra.spec.whatwg.org/#list-remove) token from [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens).
3.  Run the [update steps](https://dom.spec.whatwg.org/#concept-dtl-update).

The `toggle(token, force)` method steps are:

1.  If token is the empty string, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If token contains any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens)\[token\] [exists](https://infra.spec.whatwg.org/#list-contain), then:

    1.  If force is either not given or is false, then [remove](https://infra.spec.whatwg.org/#list-remove) token from [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens), run the [update steps](https://dom.spec.whatwg.org/#concept-dtl-update) and return false.
    2.  Return true.

4.  Otherwise, if force not given or is true, [append](https://infra.spec.whatwg.org/#set-append) token to [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens), run the [update steps](https://dom.spec.whatwg.org/#concept-dtl-update), and return true.
5.  Return false.

The [update steps](https://dom.spec.whatwg.org/#concept-dtl-update) are not always run for `[toggle()](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)` for web compatibility.

The `replace(token, newToken)` method steps are:

1.  If either token or newToken is the empty string, then [throw](https://webidl.spec.whatwg.org/#dfn-throw) a "`[SyntaxError](https://webidl.spec.whatwg.org/#syntaxerror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
2.  If either token or newToken contains any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), then [throw](https://webidl.spec.whatwg.org/#dfn-throw) an "`[InvalidCharacterError](https://webidl.spec.whatwg.org/#invalidcharactererror)`" `[DOMException](https://webidl.spec.whatwg.org/#idl-DOMException)`.
3.  If [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens) does not [contain](https://infra.spec.whatwg.org/#list-contain) token, then return false.
4.  [Replace](https://infra.spec.whatwg.org/#set-replace) token in [this](https://webidl.spec.whatwg.org/#this)’s [token set](https://dom.spec.whatwg.org/#concept-dtl-tokens) with newToken.
5.  Run the [update steps](https://dom.spec.whatwg.org/#concept-dtl-update).
6.  Return true.

The [update steps](https://dom.spec.whatwg.org/#concept-dtl-update) are not always run for `[replace()](https://dom.spec.whatwg.org/#dom-domtokenlist-replace)` for web compatibility.

The `supports(token)` method steps are:

1.  Let result be the return value of [validation steps](https://dom.spec.whatwg.org/#concept-domtokenlist-validation) called with token.
2.  Return result.

The `value` attribute must return the result of running [this](https://webidl.spec.whatwg.org/#this)’s [serialize steps](https://dom.spec.whatwg.org/#concept-dtl-serialize).

Setting the `[value](https://dom.spec.whatwg.org/#dom-domtokenlist-value)` attribute must [set an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) for the associated [element](https://dom.spec.whatwg.org/#concept-element) using associated [attribute](https://dom.spec.whatwg.org/#concept-attribute)’s [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) and the given value.

## 8\. XPath[](https://dom.spec.whatwg.org/#xpath)

DOM Level 3 XPath defined an API for evaluating XPath 1.0 expressions. These APIs are widely implemented, but have not been maintained. The interface definitions are maintained here so that they can be updated when Web IDL changes. Complete definitions of these APIs remain necessary and such work is tracked and can be contributed to in [whatwg/dom#67](https://github.com/whatwg/dom/issues/67). [\[DOM-Level-3-XPath\]](https://dom.spec.whatwg.org/#biblio-dom-level-3-xpath) [\[XPath\]](https://dom.spec.whatwg.org/#biblio-xpath) [\[WEBIDL\]](https://dom.spec.whatwg.org/#biblio-webidl)

### 8.1. Interface `[XPathResult](https://dom.spec.whatwg.org/#xpathresult)`[](https://dom.spec.whatwg.org/#interface-xpathresult)

[XPathResult](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult 'The XPathResult interface represents the results generated by evaluating an XPath expression within the context of a given node.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathResult/booleanValue](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/booleanValue 'The read-only booleanValue property of the XPathResult interface returns the boolean value of a result with XPathResult.resultType being BOOLEAN_TYPE.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathResult/invalidIteratorState](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/invalidIteratorState 'The read-only invalidIteratorState property of the XPathResult interface signifies that the iterator has become invalid. It is true if XPathResult.resultType is UNORDERED_NODE_ITERATOR_TYPE or ORDERED_NODE_ITERATOR_TYPE and the document has been modified since this result was returned.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera15+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile14+

[XPathResult/iterateNext](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/iterateNext 'The iterateNext() method of the XPathResult interface iterates over a node set result and returns the next node from it or null if there are no more nodes.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathResult/numberValue](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/numberValue 'The read-only numberValue property of the XPathResult interface returns the numeric value of a result with XPathResult.resultType being NUMBER_TYPE.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathResult/resultType](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/resultType 'The read-only resultType property of the XPathResult interface represents the type of the result, as defined by the type constants.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera15+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile14+

[XPathResult/singleNodeValue](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/singleNodeValue 'The read-only singleNodeValue property of the XPathResult interface returns a Node value or null in case no node was matched of a result with XPathResult.resultType being ANY_UNORDERED_NODE_TYPE or FIRST_ORDERED_NODE_TYPE.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathResult/snapshotItem](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotItem 'The snapshotItem() method of the XPathResult interface returns an item of the snapshot collection or null in case the index is not within the range of nodes. Unlike the iterator result, the snapshot does not become invalid, but may not correspond to the current document if it is mutated.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathResult/snapshotLength](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotLength 'The read-only snapshotLength property of the XPathResult interface represents the number of nodes in the result snapshot.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathResult/stringValue](https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/stringValue 'The read-only stringValue property of the XPathResult interface returns the string value of a result with XPathResult.resultType being STRING_TYPE.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `XPathResult` {
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `ANY_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-any_type) = 0;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `NUMBER_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-number_type) = 1;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `STRING_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-string_type) = 2;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `BOOLEAN_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-boolean_type) = 3;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `UNORDERED_NODE_ITERATOR_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-unordered_node_iterator_type) = 4;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `ORDERED_NODE_ITERATOR_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-ordered_node_iterator_type) = 5;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `UNORDERED_NODE_SNAPSHOT_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-unordered_node_snapshot_type) = 6;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `ORDERED_NODE_SNAPSHOT_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-ordered_node_snapshot_type) = 7;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `ANY_UNORDERED_NODE_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-any_unordered_node_type) = 8;
const [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `FIRST_ORDERED_NODE_TYPE`[](https://dom.spec.whatwg.org/#dom-xpathresult-first_ordered_node_type) = 9;

readonly attribute [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `resultType`[](https://dom.spec.whatwg.org/#dom-xpathresult-resulttype);
readonly attribute [unrestricted double](https://webidl.spec.whatwg.org/#idl-unrestricted-double) `numberValue`[](https://dom.spec.whatwg.org/#dom-xpathresult-numbervalue);
readonly attribute [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `stringValue`[](https://dom.spec.whatwg.org/#dom-xpathresult-stringvalue);
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `booleanValue`[](https://dom.spec.whatwg.org/#dom-xpathresult-booleanvalue);
readonly attribute [Node](https://dom.spec.whatwg.org/#node)? `singleNodeValue`[](https://dom.spec.whatwg.org/#dom-xpathresult-singlenodevalue);
readonly attribute [boolean](https://webidl.spec.whatwg.org/#idl-boolean) `invalidIteratorState`[](https://dom.spec.whatwg.org/#dom-xpathresult-invaliditeratorstate);
readonly attribute [unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `snapshotLength`[](https://dom.spec.whatwg.org/#dom-xpathresult-snapshotlength);

[Node](https://dom.spec.whatwg.org/#node)? `iterateNext`[](https://dom.spec.whatwg.org/#dom-xpathresult-iteratenext)();
[Node](https://dom.spec.whatwg.org/#node)? `snapshotItem`[](https://dom.spec.whatwg.org/#dom-xpathresult-snapshotitem)([unsigned long](https://webidl.spec.whatwg.org/#idl-unsigned-long) `index`[](https://dom.spec.whatwg.org/#dom-xpathresult-snapshotitem-index-index));
};

### 8.2. Interface `[XPathExpression](https://dom.spec.whatwg.org/#xpathexpression)`[](https://dom.spec.whatwg.org/#interface-xpathexpression)

[XPathExpression](https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression 'This interface is a compiled XPath expression that can be evaluated on a document or specific node to return information from its DOM tree.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[XPathExpression/evaluate](https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression/evaluate 'The evaluate() method of the XPathExpression interface executes an XPath expression on the given node or document and returns an XPathResult.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `XPathExpression` {
// XPathResult.ANY_TYPE = 0
[XPathResult](https://dom.spec.whatwg.org/#xpathresult) `evaluate`[](https://dom.spec.whatwg.org/#dom-xpathexpression-evaluate)([Node](https://dom.spec.whatwg.org/#node) `contextNode`[](https://dom.spec.whatwg.org/#dom-xpathexpression-evaluate-contextnode-type-result-contextnode), optional [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `type`[](https://dom.spec.whatwg.org/#dom-xpathexpression-evaluate-contextnode-type-result-type) = 0, optional [XPathResult](https://dom.spec.whatwg.org/#xpathresult)? `result`[](https://dom.spec.whatwg.org/#dom-xpathexpression-evaluate-contextnode-type-result-result) = null);
};

### 8.3. Mixin `[XPathEvaluatorBase](https://dom.spec.whatwg.org/#xpathevaluatorbase)`[](https://dom.spec.whatwg.org/#mixin-xpathevaluatorbase)

[Document/createExpression](https://developer.mozilla.org/en-US/docs/Web/API/Document/createExpression 'This method compiles an XPathExpression which can then be used for (repeated) evaluations.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12.1+

[XPathEvaluator/createExpression](https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createExpression 'This method compiles an XPathExpression which can then be used for (repeated) evaluations of the XPath expression.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[Document/createNSResolver](https://developer.mozilla.org/en-US/docs/Web/API/Document/createNSResolver 'Creates an XPathNSResolver which resolves namespaces with respect to the definitions in scope for a specified node.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile12.1+

[XPathEvaluator/createNSResolver](https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createNSResolver 'This method adapts any DOM node to resolve namespaces so that an XPath expression can be easily evaluated relative to the context of the node where it appeared within the document.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

[Document/evaluate](https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate 'Returns an XPathResult based on an XPath expression and other given parameters.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera9+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView37+Samsung Internet1.0+Opera Mobile10.1+

[XPathEvaluator/evaluate](https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/evaluate 'The evaluate() method of the XPathEvaluator interface executes an XPath expression on the given node or document and returns an XPathResult.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

callback interface `XPathNSResolver` {
[DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `lookupNamespaceURI`[](https://dom.spec.whatwg.org/#dom-xpathnsresolver-lookupnamespaceuri)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString)? `prefix`[](https://dom.spec.whatwg.org/#dom-xpathnsresolver-lookupnamespaceuri-prefix-prefix));
};

interface mixin `XPathEvaluatorBase` {
\[[NewObject](https://webidl.spec.whatwg.org/#NewObject)\] [XPathExpression](https://dom.spec.whatwg.org/#xpathexpression) `createExpression`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-createexpression)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `expression`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-createexpression-expression-resolver-expression), optional [XPathNSResolver](https://dom.spec.whatwg.org/#callbackdef-xpathnsresolver)? `resolver`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-createexpression-expression-resolver-resolver) = null);
[XPathNSResolver](https://dom.spec.whatwg.org/#callbackdef-xpathnsresolver) `createNSResolver`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-creatensresolver)([Node](https://dom.spec.whatwg.org/#node) `nodeResolver`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-creatensresolver-noderesolver-noderesolver));
// XPathResult.ANY_TYPE = 0
[XPathResult](https://dom.spec.whatwg.org/#xpathresult) `evaluate`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-evaluate)([DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `expression`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-evaluate-expression-contextnode-resolver-type-result-expression), [Node](https://dom.spec.whatwg.org/#node) `contextNode`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-evaluate-expression-contextnode-resolver-type-result-contextnode), optional [XPathNSResolver](https://dom.spec.whatwg.org/#callbackdef-xpathnsresolver)? `resolver`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-evaluate-expression-contextnode-resolver-type-result-resolver) = null, optional [unsigned short](https://webidl.spec.whatwg.org/#idl-unsigned-short) `type`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-evaluate-expression-contextnode-resolver-type-result-type) = 0, optional [XPathResult](https://dom.spec.whatwg.org/#xpathresult)? `result`[](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-evaluate-expression-contextnode-resolver-type-result-result) = null);
};
[Document](https://dom.spec.whatwg.org/#document) includes [XPathEvaluatorBase](https://dom.spec.whatwg.org/#xpathevaluatorbase);

### 8.4. Interface `[XPathEvaluator](https://dom.spec.whatwg.org/#xpathevaluator)`[](https://dom.spec.whatwg.org/#interface-xpathevaluator)

[XPathEvaluator](https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator 'The XPathEvaluator interface allows to compile and evaluate XPath expressions.')

In all current engines.

Firefox1+Safari3+Chrome1+

---

Opera12.1+Edge79+

---

Edge (Legacy)12+IENone

---

Firefox for Android4+iOS Safari1+Chrome for Android18+Android WebView1+Samsung Internet1.0+Opera Mobile12.1+

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `XPathEvaluator` {
`constructor`[](https://dom.spec.whatwg.org/#dom-xpathevaluator-xpathevaluator)();
};

[XPathEvaluator](https://dom.spec.whatwg.org/#xpathevaluator) includes [XPathEvaluatorBase](https://dom.spec.whatwg.org/#xpathevaluatorbase);

For historical reasons you can both construct `[XPathEvaluator](https://dom.spec.whatwg.org/#xpathevaluator)` and access the same methods on `[Document](https://dom.spec.whatwg.org/#document)`.

## 9\. XSLT[](https://dom.spec.whatwg.org/#xslt)

XSL Transformations (XSLT) is a language for transforming XML documents into other XML documents. The APIs defined in this section have been widely implemented, and are maintained here so that they can be updated when Web IDL changes. Complete definitions of these APIs remain necessary and such work is tracked and can be contributed to in [whatwg/dom#181](https://github.com/whatwg/dom/issues/181). [\[XSLT\]](https://dom.spec.whatwg.org/#biblio-xslt)

### 9.1. Interface `[XSLTProcessor](https://dom.spec.whatwg.org/#xsltprocessor)`[](https://dom.spec.whatwg.org/#interface-xsltprocessor)

\[[Exposed](https://webidl.spec.whatwg.org/#Exposed)\=Window\]
interface `XSLTProcessor` {
`constructor`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-xsltprocessor)();
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) `importStylesheet`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-importstylesheet)([Node](https://dom.spec.whatwg.org/#node) `style`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-importstylesheet-style-style));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [DocumentFragment](https://dom.spec.whatwg.org/#documentfragment) `transformToFragment`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-transformtofragment)([Node](https://dom.spec.whatwg.org/#node) `source`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-transformtofragment-source-output-source), [Document](https://dom.spec.whatwg.org/#document) `output`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-transformtofragment-source-output-output));
\[[CEReactions](https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions)\] [Document](https://dom.spec.whatwg.org/#document) `transformToDocument`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-transformtodocument)([Node](https://dom.spec.whatwg.org/#node) `source`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-transformtodocument-source-source));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) `setParameter`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-setparameter)(\[[LegacyNullToEmptyString](https://webidl.spec.whatwg.org/#LegacyNullToEmptyString)\] [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `namespaceURI`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-setparameter-namespaceuri-localname-value-namespaceuri), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-setparameter-namespaceuri-localname-value-localname), [any](https://webidl.spec.whatwg.org/#idl-any) `value`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-setparameter-namespaceuri-localname-value-value));
[any](https://webidl.spec.whatwg.org/#idl-any) `getParameter`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-getparameter)(\[[LegacyNullToEmptyString](https://webidl.spec.whatwg.org/#LegacyNullToEmptyString)\] [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `namespaceURI`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-getparameter-namespaceuri-localname-namespaceuri), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-getparameter-namespaceuri-localname-localname));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) `removeParameter`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-removeparameter)(\[[LegacyNullToEmptyString](https://webidl.spec.whatwg.org/#LegacyNullToEmptyString)\] [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `namespaceURI`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-removeparameter-namespaceuri-localname-namespaceuri), [DOMString](https://webidl.spec.whatwg.org/#idl-DOMString) `localName`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-removeparameter-namespaceuri-localname-localname));
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) `clearParameters`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-clearparameters)();
[undefined](https://webidl.spec.whatwg.org/#idl-undefined) `reset`[](https://dom.spec.whatwg.org/#dom-xsltprocessor-reset)();
};

## 10\. Historical[](https://dom.spec.whatwg.org/#historical)

This standard used to contain several interfaces and interface members that have been removed.

These interfaces have been removed:

-   `DOMConfiguration`[](https://dom.spec.whatwg.org/#domconfiguration)
-   `DOMError`[](https://dom.spec.whatwg.org/#domerror)
-   `DOMErrorHandler`[](https://dom.spec.whatwg.org/#domerrorhandler)
-   `DOMImplementationList`[](https://dom.spec.whatwg.org/#domimplementationlist)
-   `DOMImplementationSource`[](https://dom.spec.whatwg.org/#domimplementationsource)
-   `DOMLocator`[](https://dom.spec.whatwg.org/#domlocator)
-   `DOMObject`[](https://dom.spec.whatwg.org/#domobject)
-   `DOMUserData`[](https://dom.spec.whatwg.org/#domuserdata)
-   `Entity`[](https://dom.spec.whatwg.org/#entity)
-   `EntityReference`[](https://dom.spec.whatwg.org/#entityreference)
-   `MutationEvent`[](https://dom.spec.whatwg.org/#mutationevent)
-   `MutationNameEvent`[](https://dom.spec.whatwg.org/#mutationnameevent)
-   `NameList`[](https://dom.spec.whatwg.org/#namelist)
-   `Notation`[](https://dom.spec.whatwg.org/#notation)
-   `RangeException`[](https://dom.spec.whatwg.org/#rangeexception)
-   `TypeInfo`[](https://dom.spec.whatwg.org/#typeinfo)
-   `UserDataHandler`[](https://dom.spec.whatwg.org/#userdatahandler)

And these interface members have been removed:

`[Attr](https://dom.spec.whatwg.org/#attr)`

-   `schemaTypeInfo`[](https://dom.spec.whatwg.org/#dom-attr-schematypeinfo)
-   `isId`[](https://dom.spec.whatwg.org/#dom-attr-isid)

`[Document](https://dom.spec.whatwg.org/#document)`

-   `createEntityReference()`[](https://dom.spec.whatwg.org/#dom-document-createentityreference)
-   `xmlEncoding`[](https://dom.spec.whatwg.org/#dom-document-xmlencoding)
-   `xmlStandalone`[](https://dom.spec.whatwg.org/#dom-document-xmlstandalone)
-   `xmlVersion`[](https://dom.spec.whatwg.org/#dom-document-xmlversion)
-   `strictErrorChecking`[](https://dom.spec.whatwg.org/#dom-document-stricterrorchecking)
-   `domConfig`[](https://dom.spec.whatwg.org/#dom-document-domconfig)
-   `normalizeDocument()`[](https://dom.spec.whatwg.org/#dom-document-normalizedocument)
-   `renameNode()`[](https://dom.spec.whatwg.org/#dom-document-renamenode)

`[DocumentType](https://dom.spec.whatwg.org/#documenttype)`

-   `entities`[](https://dom.spec.whatwg.org/#dom-documenttype-entities)
-   `notations`[](https://dom.spec.whatwg.org/#dom-documenttype-notations)
-   `internalSubset`[](https://dom.spec.whatwg.org/#dom-documenttype-internalsubset)

`[DOMImplementation](https://dom.spec.whatwg.org/#domimplementation)`

-   `getFeature()`[](https://dom.spec.whatwg.org/#dom-domimplementation-getfeature)

`[Element](https://dom.spec.whatwg.org/#element)`

-   `schemaTypeInfo`[](https://dom.spec.whatwg.org/#dom-element-schematypeinfo)
-   `setIdAttribute()`[](https://dom.spec.whatwg.org/#dom-element-setidattribute)
-   `setIdAttributeNS()`[](https://dom.spec.whatwg.org/#dom-element-setidattributens)
-   `setIdAttributeNode()`[](https://dom.spec.whatwg.org/#dom-element-setidattributenode)

`[Node](https://dom.spec.whatwg.org/#node)`

-   `isSupported`[](https://dom.spec.whatwg.org/#dom-node-issupported)
-   `getFeature()`[](https://dom.spec.whatwg.org/#dom-node-getfeature)
-   `getUserData()`[](https://dom.spec.whatwg.org/#dom-node-getuserdata)
-   `setUserData()`[](https://dom.spec.whatwg.org/#dom-node-setuserdata)

`[NodeIterator](https://dom.spec.whatwg.org/#nodeiterator)`

-   `expandEntityReferences`[](https://dom.spec.whatwg.org/#dom-nodeiterator-expandentityreferences)

`[Text](https://dom.spec.whatwg.org/#text)`

-   `isElementContentWhitespace`[](https://dom.spec.whatwg.org/#dom-text-iselementcontentwhitespace)
-   `replaceWholeText()`[](https://dom.spec.whatwg.org/#dom-text-replacewholetext)

`[TreeWalker](https://dom.spec.whatwg.org/#treewalker)`

-   `expandEntityReferences`[](https://dom.spec.whatwg.org/#dom-treewalker-expandentityreferences)

## Acknowledgments[](https://dom.spec.whatwg.org/#acks)

There have been a lot of people that have helped make DOM more interoperable over the years and thereby furthered the goals of this standard. Likewise many people have helped making this standard what it is today.

With that, many thanks to Adam Klein, Adrian Bateman, Ahmid _snuggs_, Alex Komoroske, Alex Russell, Alexey Shvayka, Andreu Botella, Anthony Ramine, Arkadiusz Michalski, Arnaud Le Hors, Arun Ranganathan, Benjamin Gruenbaum, Björn Höhrmann, Boris Zbarsky, Brandon Payton, Brandon Slade, Brandon Wallace, Brian Kardell, C. Scott Ananian, Cameron McCormack, Chris Dumez, Chris Paris, Chris Rebert, Cyrille Tuzi, Dan Burzo, Daniel Clark, Daniel Glazman, Darin Fisher, David Bruant, David Flanagan, David Håsäther, David Hyatt, Deepak Sherveghar, Dethe Elza, Dimitri Glazkov, Domenic Denicola, Dominic Cooney, Dominique Hazaël-Massieux, Don Jordan, Doug Schepers, Edgar Chen, Elisée Maurer, Elliott Sprehn, Emilio Cobos Álvarez, Eric Bidelman, Erik Arvidsson, Gary Kacmarcik, Gavin Nicol, Giorgio Liscio, Glen Huang, Glenn Adams, Glenn Maynard, Hajime Morrita, Harald Alvestrand, Hayato Ito, Henri Sivonen, Hongchan Choi, Hunan Rostomyan, Ian Hickson, Igor Bukanov, Jacob Rossi, Jake Archibald, Jake Verbaten, James Graham, James Greene, James M Snell, James Robinson, Jeffrey Yasskin, Jens Lindström, Jesse McCarthy, Jinho Bang, João Eiras, Joe Kesselman, John Atkins, John Dai, Jonas Sicking, Jonathan Kingston, Jonathan Robie, Joris van der Wel, Joshua Bell, J. S. Choi, Jungkee Song, Justin Summerlin, Kagami Sascha Rosylight, 呂康豪 (Kang-Hao Lu), 田村健人 (Kent TAMURA), Kevin J. Sung, Kevin Sweeney, Kirill Topolyan, Koji Ishii, Lachlan Hunt, Lauren Wood, Luca Casonato, Luke Zielinski, Magne Andersson, Majid Valipour, Malte Ubl, Manish Goregaokar, Manish Tripathi, Marcos Caceres, Mark Miller, Martijn van der Ven, Mason Freed, Mats Palmgren, Mounir Lamouri, Michael Stramel, Michael™ Smith, Mike Champion, Mike Taylor, Mike West, Nicolás Peña Moreno, Nidhi Jaju, Ojan Vafai, Oliver Nightingale, Olli Pettay, Ondřej Žára, Peter Sharpe, Philip Jägenstedt, Philippe Le Hégaret, Piers Wombwell, Pierre-Marie Dartus, prosody—Gab Vereable Context(, Rafael Weinstein, Rakina Zata Amni, Richard Bradshaw, Rick Byers, Rick Waldron, Robbert Broersma, Robin Berjon, Roland Steiner, Rune F. Halvorsen, Russell Bicknell, Ruud Steltenpool, Ryosuke Niwa, Sam Dutton, Sam Sneddon, Samuel Giles, Sanket Joshi, Sebastian Mayr, Seo Sanghyeon, Sergey G. Grekhov, Shiki Okasaka, Shinya Kawanaka, Simon Pieters, Stef Busking, Steve Byrne, Stig Halvorsen, Tab Atkins, Takashi Sakamoto, Takayoshi Kochi, Theresa O’Connor, Theodore Dubois, _timeless_, Timo Tijhof, Tobie Langel, Tom Pixley, Travis Leithead, Trevor Rowbotham, _triple-underscore_, Veli Şenol, Vidur Apparao, Warren He, Xidorn Quan, Yash Handa, Yehuda Katz, Yoav Weiss, Yoichi Osato, Yoshinori Sano, Yu Han, Yusuke Abe, and Zack Weinberg for being awesome!

This standard is written by [Anne van Kesteren](https://annevankesteren.nl/) ([Mozilla](https://www.mozilla.org/), [annevk@annevk.nl](mailto:annevk@annevk.nl)) with substantial contributions from Aryeh Gregor ([ayg@aryeh.name](mailto:ayg@aryeh.name)) and Ms2ger ([ms2ger@gmail.com](mailto:ms2ger@gmail.com)).

## Intellectual property rights[](https://dom.spec.whatwg.org/#ipr)

Copyright © WHATWG (Apple, Google, Mozilla, Microsoft). This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). To the extent portions of it are incorporated into source code, such portions in the source code are licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause) instead.

This is the Living Standard. Those interested in the patent-review version should view the [Living Standard Review Draft](https://dom.spec.whatwg.org/review-drafts/2021-06/).
