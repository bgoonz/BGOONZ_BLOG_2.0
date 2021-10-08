---
title: History API
weight: 0
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

# History Api

# &#xA;&#xA;

The DOM [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) object provides access to the browser's session history (not to be confused for [WebExtensions history](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history)) through the [history](https://developer.mozilla.org/en-US/docs/Web/API/Window/history) object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.

## [Concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/History_API#concepts_and_usage)

Moving backward and forward through the user's history is done using the [back()](https://developer.mozilla.org/en-US/docs/Web/API/History/back), [forward()](https://developer.mozilla.org/en-US/docs/Web/API/History/forward), and [go()](https://developer.mozilla.org/en-US/docs/Web/API/History/go) methods.

### [Moving forward and backward](https://developer.mozilla.org/en-US/docs/Web/API/History_API#moving_forward_and_backward)

To move backward through history:

This acts exactly as if the user clicked on the **Back** button in their browser toolbar.

Similarly, you can move forward (as if the user clicked the **Forward** button), like this:

### [Moving to a specific point in history](https://developer.mozilla.org/en-US/docs/Web/API/History_API#moving_to_a_specific_point_in_history)

You can use the [go()](https://developer.mozilla.org/en-US/docs/Web/API/History/go) method to load a specific page from session history, identified by its relative position to the current page. (The current page's relative position is 0.)

To move back one page (the equivalent of calling [back()](https://developer.mozilla.org/en-US/docs/Web/API/History/back)):

To move forward a page, just like calling [forward()](https://developer.mozilla.org/en-US/docs/Web/API/History/forward):

Similarly, you can move forward 2 pages by passing 2, and so forth.

Another use for the go() method is to refresh the current page by either passing 0, or by invoking it without an argument:

You can determine the number of pages in the history stack by looking at the value of the length property:

## [Interfaces](https://developer.mozilla.org/en-US/docs/Web/API/History_API#interfaces)

Allows manipulation of the browser *session history* (that is, the pages visited in the tab or frame that the current page is loaded in).

## [Examples](https://developer.mozilla.org/en-US/docs/Web/API/History_API#examples)

The following example assigns a listener to the onpopstate property. And then illustrates some of the methods of the history object to add, replace, and move within the browser history for the current tab.

# Working with the History API&#xA;

HTML5 introduced the [pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) and [replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) methods for add and modifying history entries, respectively. These methods work in conjunction with the [onpopstate](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate) event.

## [Adding and modifying history entries](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#adding_and_modifying_history_entries)

Using [pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) changes the referrer that gets used in the HTTP header for [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) objects created after you change the state. The referrer will be the URL of the document whose window is this at the time of creation of the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object.

### [Example of pushState() method](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#example_of_pushstate_method)

Suppose https://mozilla.org/foo.html executes the following JavaScript:

This will cause the URL bar to display https://mozilla.org/bar.html, but won't cause the browser to load bar.html or even check that bar.html exists.

Suppose now that the user navigates to https://google.com, then clicks the **Back** button. At this point, the URL bar will display https://mozilla.org/bar.html and history.state will contain the stateObj. The popstate event won't be fired because the page has been reloaded. The page itself will look like bar.html.

If the user clicks **Back** once again, the URL will change to https://mozilla.org/foo.html, and the document will get a popstate event, this time with a null state object. Here too, going back doesn't change the document's contents from what they were in the previous step, although the document might update its contents manually upon receiving the popstate event.

### [The pushState() method](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#the_pushstate_method)

pushState() takes three parameters: a **state object**; a **title** (currently ignored); and (optionally), a **URL**.

Let's examine each of these three parameters in more detail.

The state object is a JavaScript object which is associated with the new history entry created by pushState(). Whenever the user navigates to the new state, a popstate event is fired, and the state property of the event contains a copy of the history entry's state object. The state object can be anything that can be serialized. Because Firefox saves state objects to the user's disk so they can be restored after the user restarts the browser, we impose a size limit of 640k characters on the serialized representation of a state object. If you pass a state object whose serialized representation is larger than this to pushState(), the method will throw an exception. If you need more space than this, you're encouraged to use sessionStorage and/or localStorage.

[All browsers but Safari currently ignore this parameter](https://github.com/whatwg/html/issues/2174), although they may use it in the future. Passing the empty string here should be safe against future changes to the method. Alternatively, you could pass a short title for the state to which you're moving.

The new history entry's URL is given by this parameter. Note that the browser won't attempt to load this URL after a call to pushState(), but it might attempt to load the URL later, for instance after the user restarts the browser. The new URL does not need to be absolute; if it's relative, it's resolved relative to the current URL. The new URL must be of the same origin as the current URL; otherwise, pushState() will throw an exception. This parameter is optional; if it isn't specified, it's set to the document's current URL.

**Note:** In Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) through Gecko 5.0 (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2), the passed object is serialized using JSON. Starting in Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3), the object is serialized using [the structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). This allows a wider variety of objects to be safely passed.

In a sense, calling pushState() is similar to setting window.location = "#foo", in that both will also create and activate another history entry associated with the current document.

But pushState() has a few advantages:

-   The new URL can be any URL in the same origin as the current URL. In contrast, setting window.location keeps you at the same [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) only if you modify only the hash.

-   You don't have to change the URL if you don't want to. In contrast, setting window.location = "#foo"; creates a new history entry only if the current hash isn't #foo.

-   You can associate arbitrary data with your new history entry. With the hash-based approach, you need to encode all of the relevant data into a short string.

-   If title is subsequently used by browsers, this data can be utilized (independent of, say, the hash).

Note that pushState() never causes a hashchange event to be fired, even if the new URL differs from the old URL only in its hash.

In other documents, it creates an element with a null namespace URI.

### [The replaceState() method](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#the_replacestate_method)

history.replaceState() operates exactly like history.pushState(), except that replaceState() modifies the current history entry instead of creating a new one. Note that this doesn't prevent the creation of a new entry in the global browser history.

replaceState() is particularly useful when you want to update the state object or URL of the current history entry in response to some user action.

**Note:** In Gecko 2.0 (Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1) through Gecko 5.0 (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2), the passed object is serialized using JSON. Starting in Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3), the object is serialized using [the structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). This allows a wider variety of objects to be safely passed.

### [Example of replaceState() method](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#example_of_replacestate_method)

Suppose https://mozilla.org/foo.html executes the following JavaScript:

The explanation of these two lines above can be found at the above section [_Example of pushState() method_](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#example_of_pushstate_method) section.

Next, suppose https://mozilla.org/bar.html executes the following JavaScript:

This will cause the URL bar to display https://mozilla.org/bar2.html, but won't cause the browser to load bar2.html or even check that bar2.html exists.

Suppose now that the user navigates to https://www.microsoft.com, then clicks the **Back** button. At this point, the URL bar will display https://mozilla.org/bar2.html. If the user now clicks **Back** again, the URL bar will display https://mozilla.org/foo.html, and totally bypass bar.html.

### [The popstate event](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#the_popstate_event)

A popstate event is dispatched to the window every time the active history entry changes. If the history entry being activated was created by a call to [pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) or affected by a call to [replaceState](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState), the popstate event's state property contains a copy of the history entry's state object.

See [WindowEventHandlers.onpopstate](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate) for sample usage.

### [Reading the current state](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#reading_the_current_state)

When your page loads, it might have a non-null state object.  This can happen, for example, if the page sets a state object (using [pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) or [replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)) and then the user restarts their browser. When the page reloads, the page will receive an onload event, but no popstate event. However, if you read the [history.state](https://developer.mozilla.org/en-US/docs/Web/API/History/state) property, you'll get back the state object you would have gotten if a popstate had fired.

You can read the state of the current history entry without waiting for a popstate event using the [history.state](https://developer.mozilla.org/en-US/docs/Web/API/History/state) property like this:

## [See also](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API#see_also)

-   [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

-   [Ajax navigation example](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Example)

-   [window.history](https://developer.mozilla.org/en-US/docs/Web/API/Window/history)

# Window.historyCopy to Clipboard&#xA;&#xA;

The Window.history read-only property returns a reference to the [History](https://developer.mozilla.org/en-US/docs/Web/API/History) object, which provides an interface for manipulating the browser *session history* (pages visited in the tab or frame that the current page is loaded in).

See [Manipulating the browser history](https://developer.mozilla.org/en-US/docs/Web/API/History_API) for examples and details. In particular, that article explains security features of the [pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) and [replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) methods that you should be aware of before using them.

## [Example](https://developer.mozilla.org/en-US/docs/Web/API/Window/history#example)

## [Notes](https://developer.mozilla.org/en-US/docs/Web/API/Window/history#notes)

For top-level pages you can see the list of pages in the session history, accessible via the History object, in the browser's dropdowns next to the back and forward buttons.

For security reasons the History object doesn't allow the non-privileged code to access the [URLs](https://developer.mozilla.org/en-US/docs/Glossary/URL) of other pages in the session history, but it does allow it to navigate the session history.

There is no way to clear the session history or to disable the back/forward navigation from unprivileged code. The closest available solution is the [location.replace()](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace) method, which replaces the current item of the session history with the provided URL.
