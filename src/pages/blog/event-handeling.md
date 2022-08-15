---
title: Event Handeling
template: post
subtitle: Event objects are normally created by Script
excerpt: Event objects are normally created by Script
date: 2022-04-19T07:12:49.030Z
image: images/https://miro.medium.com/max/1400/0*amvxdM3oz4BDUy-V.gif
thumb_image: images/https://miro.medium.com/max/1400/0*amvxdM3oz4BDUy-V.gif
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/git.yaml
  - src/data/categories/ds.yaml
  - src/data/categories/js.yaml
tags:
  - src/data/tags/links.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/passing-arguments-to-a-callback-in-js.md
  - src/pages/blog/using-the-dom.md
cmseditable: true
---




-   Event objects are normally created by ScriptUI and passed to your event handler. However, you can simulate a user action by constructing an event object using [ScriptUI.events.createEvent()](https://extendscript.docsforadobe.dev/user-interface-tools/scriptui-class.html#scriptui-events-createevent), and sending it to a target object’s controlobj-dispatchEvent function.
    
-   A helper object, [Keyboard state object](https://extendscript.docsforadobe.dev/user-interface-tools/environment.html#environment-keyboard-state), provides global access to the keyboard state during function execution, outside the event-handling framework.
    

___

## UIEvent base class[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#uievent-base-class "Permalink to this headline")

Encapsulates input event information for an event that propagates through a container and control hierarchy. This is a base class for the more specialized [KeyboardEvent object](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#keyboardevent-object) and [MouseEvent object](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#mouseevent-object).

### UIEvent object properties[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#uievent-object-properties "Permalink to this headline")

Both keyboard and mouse events have these properties.

___

#### bubbles[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#bubbles "Permalink to this headline")

Type: `Boolean`

When true, the event supports the bubbling phase.

___

#### cancelable[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#cancelable "Permalink to this headline")

Type: `Boolean`

When true, the handler can call this object’s [preventDefault()](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#eventobj-preventdefault) method to cancel the default action of the event.

___

#### currentTarget[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#currenttarget "Permalink to this headline")

Type: `Object`

The element object where the currently executing handler was registered. This could be an ancestor of the target object, if the handler is invoked during the capture or bubbling phase.

___

#### eventPhase[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#eventphase "Permalink to this headline")

Type: `Number`

Current event propagation phase. One of these constants:

-   `Event.NOT_DISPATCHING`
    
-   `Event.CAPTURING_PHASE`
    
-   `Event.AT_TARGET`
    
-   `Event.BUBBLING_PHASE`
    

___

#### target[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#target "Permalink to this headline")

Type: `Object`

The element object where the event occurred.

___

#### timeStamp[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#timestamp "Permalink to this headline")

Type: `Object`

Time the event was initiated. A JavaScript Date object.

___

#### type[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#type "Permalink to this headline")

Type: `String`

The name of the event that occurred. Predefined events types are:

<table>
<colgroup>
<col> <col>
</colgroup>
<tbody>
<tr>
<td>
<p>change</p>
</td>
<td>
<p>changing</p>
</td>
</tr>
<tr>
<td>
<p>move</p>
</td>
<td>
<p>moving</p>
</td>
</tr>
<tr>
<td>
<p>resize</p>
</td>
<td>
<p>resizing</p>
</td>
</tr>
<tr>
<td>
<p>show</p>
</td>
<td>
<p>enterKey</p>
</td>
</tr>
<tr>
<td>
<p>focus</p>
</td>
<td>
<p>blur</p>
</td>
</tr>
</tbody>
</table>

Additional type names apply specifically to keyboard and mouse events.

___

#### view[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#view "Permalink to this headline")

Type: `Object`

The container or control object that dispatched the event.

___

### UIEvent object functions[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#uievent-object-functions "Permalink to this headline")

#### initUIEvent()[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#inituievent "Permalink to this headline")

`eventObj.initUIEvent(eventName, bubble, isCancelable, view, detail)`

<table>
<colgroup>
<col> <col>
</colgroup>
<tbody>
<tr>
<td>
<p>
<code>
<span>eventName</span>
</code>
</p>
</td>
<td>
<p>The event name string.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>bubble</span>
</code>
</p>
</td>
<td>
<p>When true, the event should be triggered in ancestors of the target object during the bubbling phase.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>isCancelable</span>
</code>
</p>
</td>
<td>
<p>When true, the event can be cancelled.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>view</span>
</code>
</p>
</td>
<td>
<p>The container or control object that dispatched the event.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>detail</span>
</code>
</p>
</td>
<td>
<p>Details of the event, which vary according to the event type. The value is 1 or 2 for the click event, indicating a single or double click.</p>
</td>
</tr>
</tbody>
</table>

Modifies an event before it is dispatched to its targets. Takes effect only if [UIEvent.eventPhase](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#eventobj-eventphase) is `Event.NOT_DISPATCHING`. Ignored at all other phases.

Returns undefined.

___

#### preventDefault()[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#preventdefault "Permalink to this headline")

`eventObj.preventDefault()`

Cancels the default action of this event, if this event is cancelable (that is, [cancelable](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#eventobj-cancelable) is true). For example, the default click action of an OK button is to close the containing dialog; this call prevents that behavior.

Returns `undefined`.

___

#### stopPropagation()[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#stoppropagation "Permalink to this headline")

`eventObj.stopPropagation()`

Stops event propagation (bubbling and capturing) after executing the handler or handlers at the current target.

Returns `undefined`.

___

## KeyboardEvent object[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#keyboardevent-object "Permalink to this headline")

This type of object is passed to your registered event handler when a keyboard-input event occurs. The properties reflect the keypress and key modifier state at the time the keyboard event was generated. All properties are read-only.

### KeyboardEvent object properties[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#keyboardevent-object-properties "Permalink to this headline")

In addition to the properties defined for [UIEvent base class](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#uievent-base-class), a keyboard event has these properties. All properties are read-only.

___

#### altKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#altkey "Permalink to this headline")

Type: `Boolean`

When true, the `ALT` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

#### ctrlKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#ctrlkey "Permalink to this headline")

Type: `Boolean`

When true, the `CTRL` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

#### metaKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#metakey "Permalink to this headline")

Type: `Boolean`

When true, the `META` or `COMMAND` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

#### shiftKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#shiftkey "Permalink to this headline")

Type: `Boolean`

When true, the `SHIFT` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

#### keyIdentifier[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#keyidentifier "Permalink to this headline")

Type: `String`

The key whose keypress generated the event, as a W3C identifier contained in a string; for example, `"U+0044"`. See [W3 Keyset Article](https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/keyset.html).

___

#### keyLocation[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#keylocation "Permalink to this headline")

Type: `Number`

A constant that identifies where on the keyboard the keypress occurred. One of:

-   `DOM_KEY_LOCATION_STANDARD`
    
-   `DOM_KEY_LOCATION_LEFT`
    
-   `DOM_KEY_LOCATION_RIGHT`
    
-   `DOM_KEY_LOCATION_NUMPAD`
    

___

#### keyName[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#keyname "Permalink to this headline")

Type: `String`

The key whose keypress generated the event, as a simple key name; for example `"A"`.

___

#### type[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#id4 "Permalink to this headline")

Type: `String`

The name of the event that occurred. Key events types are:

-   `keyup`
    
-   `keydown`
    

___

### KeyboardEvent object functions[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#keyboardevent-object-functions "Permalink to this headline")

In addition to the functions defined for [UIEvent base class](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#uievent-base-class), a keyboard event has these functions.

___

#### getModifierState()[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#getmodifierstate "Permalink to this headline")

`eventObj.getModifierState(keyIdentifier)`

<table>
<colgroup>
<col> <col>
</colgroup>
<tbody>
<tr>
<td>
<p>
<code>
<span>keyIdentifier</span>
</code>
</p>
</td>
<td>
<p>A string containing a modifier key identifier, one of:</p>
<blockquote>
<div>
<ul>
<li>
<p>
<code>
<span>Alt</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>CapsLock</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Control</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Meta</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>NumLock</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Scroll</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Shift</span>
</code>
</p>
</li>
</ul>
</div>
</blockquote>
</td>
</tr>
</tbody>
</table>

Returns true if the given modifier was active when the event occurred, false otherwise.

Note

If you’re trying to check whether keyboard modifier keys (alt/ctrl/meta/shift) are held down at any time in your script, not just in an event, see [Keyboard state object](https://extendscript.docsforadobe.dev/user-interface-tools/environment.html#environment-keyboard-state).

___

#### initKeyboardEvent()[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#initkeyboardevent "Permalink to this headline")

`eventObj.initKeyboardEvent (eventName, bubble, isCancelable, view, keyID, keyLocation, modifiersList)`

<table>
<colgroup>
<col> <col>
</colgroup>
<tbody>
<tr>
<td>
<p>
<code>
<span>eventName</span>
</code>
</p>
</td>
<td>
<p>The event name string.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>bubble</span>
</code>
</p>
</td>
<td>
<p>When true, the event should be triggered in ancestors of the target object during the bubbling phase.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>isCancelable</span>
</code>
</p>
</td>
<td>
<p>When true, the event can be cancelled.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>view</span>
</code>
</p>
</td>
<td>
<p>The container or control object that dispatched the event.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>keyID</span>
</code>
</p>
</td>
<td>
<p>Sets the <code>
<span>keyIdentifier</span>
</code> value.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>keyLocation</span>
</code>
</p>
</td>
<td>
<p>Sets the <code>
<span>keyLocation</span>
</code>. value.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>modifiersList</span>
</code>
</p>
</td>
<td>
<p>A whitespace-separated string of modifier key names, such as “Control Alt”.</p>
</td>
</tr>
</tbody>
</table>

Reinitializes the object, allowing you to change the event properties after construction. Arguments set the corresponding properties. Returns `undefined`.

___

## MouseEvent object[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#mouseevent-object "Permalink to this headline")

This type of object is passed to your registered event handler when a mouse-input event occurs. The properties reflect the button and modifier-key state and pointer position at the time the event was generated. In the case of nested elements, mouse event types are always targeted at the most deeply nested element. Ancestors of the targeted element can use bubbling to obtain notification of mouse events which occur within its descendent elements.

### MouseEvent object properties[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#mouseevent-object-properties "Permalink to this headline")

In addition to the properties defined for [UIEvent base class](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#uievent-base-class), a mouse event has these properties. All properties are read-only.

___

#### altKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#id7 "Permalink to this headline")

Type: `Boolean`

When true, the `ALT` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

#### button[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#button "Permalink to this headline")

Type: `Number`

Which mouse button changed state.

<table>
<colgroup>
<col> <col>
</colgroup>
<tbody>
<tr>
<td>
<p>
<code>
<span>0</span>
</code>
</p>
</td>
<td>
<p>The left button of a two- or three-button mouse or the one button on a one-button mouse, used to activate a UI button or select text.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>1</span>
</code>
</p>
</td>
<td>
<p>The middle button of a three-button mouse, or the mouse wheel.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>2</span>
</code>
</p>
</td>
<td>
<p>The right button, used to display a context menu, if present.</p>
</td>
</tr>
</tbody>
</table>

Some mice may provide or simulate more buttons, and values higher than 2 represent such buttons.

___

#### clientX and clientY[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#clientx-and-clienty "Permalink to this headline")

Type: `Number`

The horizontal and vertical coordinates at which the event occurred relative to the target object. The origin is the top left of the control or window, inside any border decorations.

___

#### ctrlKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#id8 "Permalink to this headline")

Type: `Boolean`

When true, the `CTRL` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

#### detail[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#detail "Permalink to this headline")

Type: `Number`

Details of the event, which vary according to the event type. For the `click`, `mousedown`, and `mouseup` events, the value is `1` for a single click, or `2` for a double click.

___

#### metaKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#id9 "Permalink to this headline")

Type: `Boolean`

When true, the `META` or `` COMMAND` `` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

___

#### screenX and screenY[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#screenx-and-screeny "Permalink to this headline")

Type: `Number`

The horizontal and vertical coordinates at which the event occurred relative to the screen.

___

#### shiftKey[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#id10 "Permalink to this headline")

Type: `Boolean`

When true, the `SHIFT` key was active. Value is `undefined` if the `keyIdentifier` is for a modifier key.

___

#### type[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#id11 "Permalink to this headline")

Type: `String`

The name of the event that occurred. Mouse events types are:

-   `mousedown`
    
-   `mouseup`
    
-   `mousemove`
    
-   `mouseover`
    
-   `mouseout`
    
-   `click (detail = 1 for single, 2 for double)`
    

The sequence of click events is: `mousedown`, `mouseup`, `click`.

___

### MouseEvent object functions[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#mouseevent-object-functions "Permalink to this headline")

In addition to the functions defined for [UIEvent base class](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#uievent-base-class), a mouse event has these functions.

___

#### getModifierState()[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#mouseevent-object-getmodifierstate "Permalink to this headline")

`eventObj.getModifierState(keyIdentifier)`

<table>
<colgroup>
<col> <col>
</colgroup>
<tbody>
<tr>
<td>
<p>
<code>
<span>keyIdentifier</span>
</code>
</p>
</td>
<td>
<p>A string containing a modifier key identifier, one of:</p>
<blockquote>
<div>
<ul>
<li>
<p>
<code>
<span>Alt</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>CapsLock</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Control</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Meta</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>NumLock</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Scroll</span>
</code>
</p>
</li>
<li>
<p>
<code>
<span>Shift</span>
</code>
</p>
</li>
</ul>
</div>
</blockquote>
</td>
</tr>
</tbody>
</table>

Returns true if the given modifier was active when the event occurred, false otherwise.

___

#### initMouseEvent()[¶](https://extendscript.docsforadobe.dev/user-interface-tools/event-handling.html#initmouseevent "Permalink to this headline")

> ```
> eventObj.initMouseEvent(
>     eventName,
>     bubble,
>     isCancelable,
>     view,
>     detail,
>     screenX,
>     screenY,
>     clientX,
>     clientY,
>     ctrlKey,
>     altKey,
>     shiftKey,
>     metaKey,
>     button,
>     relatedTarge
> )
> 
> ```

<table>
<colgroup>
<col> <col>
</colgroup>
<tbody>
<tr>
<td>
<p>
<code>
<span>eventName</span>
</code>
</p>
</td>
<td>
<p>The event name string.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>bubble</span>
</code>
</p>
</td>
<td>
<p>When true, the event should be triggered in ancestors of the target object during the bubbling phase.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>isCancelable</span>
</code>
</p>
</td>
<td>
<p>When true, the event can be cancelled.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>view</span>
</code>
</p>
</td>
<td>
<p>The container or control object that dispatched the event.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>detail</span>
</code>
</p>
</td>
<td>
<p>Sets the single-double click value for the <code>
<span>click</span>
</code> event.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>screenX,</span> <span>screenY</span>
</code>
</p>
</td>
<td>
<p>Sets the event coordinates relative to the screen.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>clientX,</span> <span>clientY</span>
</code>
</p>
</td>
<td>
<p>Sets the event coordinates relative to the target object. The origin is the top left of the control or window, inside any border decorations.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>ctrlKey,</span> <span>altKey,</span> <span>metaKey</span>
</code>
</p>
</td>
<td>
<p>Sets the modifier key states.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>button</span>
</code>
</p>
</td>
<td>
<p>Sets the mouse button.</p>
</td>
</tr>
<tr>
<td>
<p>
<code>
<span>relatedTarget</span>
</code>
</p>
</td>
<td>
<p>Optional. Sets the related target, if any, for a <code>
<span>mouseover</span>
</code> or <code>
<span>mouseout</span>
</code> event.</p>
</td>
</tr>
</tbody>
</table>

Reinitializes the object, allowing you to change the event properties after construction. Arguments set the corresponding properties.

Returns `undefined`.<a class="jsbin-embed" href="https://jsbin.com/dizifem/embed?js,console,output">JS Bin on jsbin.com</a>
<script src="https://static.jsbin.com/js/embed.min.js?4.1.8">
</script>