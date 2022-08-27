---
title: React Testing Library
weight: 0
excerpt: React Testing Library
seo:
    title: 'React Testing Library'
    description: 'React Testing Library'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

<iframe style="resize:both; overflow:scroll;"  sandbox="allow-scripts"  src="https://testing-playground.com/embed/27ea36b9aa7868d05a38787a6bd21518/99c765c3a2ac8895c8dd1b866b663186e1700093?panes=query,result" height="450" width="100%" scrolling="yes" frameBorder="0"  title="Testing Playground" style="display: block; width: 100%">
</iframe>
<br>

# 🧪 React Testing Library

## About Queries | Testing Library

> #### Excerpt
>
> Overview

---

### Overview

Queries are the methods that Testing Library gives you to find elements on the page. There are several [types of queries](https://testing-library.com/docs/queries/about/#types-of-queries) ("get", "find", "query"); the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. Depending on what page content you are selecting, different queries may be more or less appropriate. See the [priority guide](https://testing-library.com/docs/queries/about/#priority) for recommendations on how to make use of semantic queries to test your page in the most accessible way.

After selecting an element, you can use the [Events API](https://testing-library.com/docs/dom-testing-library/api-events) or [user-event](https://testing-library.com/docs/ecosystem-user-event) to fire events and simulate user interactions with the page, or use Jest and [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) to make assertions about the element.

There are Testing Library helper methods that work with queries. As elements appear and disappear in response to actions, [Async APIs](https://testing-library.com/docs/dom-testing-library/api-async) like [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async#waitfor) or [`findBy` queries](https://testing-library.com/docs/dom-testing-library/api-async#findby-queries) can be used to await the changes in the DOM. To find only elements that are children of a specific element, you can use [`within`](https://testing-library.com/docs/dom-testing-library/api-within). If necessary, there are also a few options you can [configure](https://testing-library.com/docs/dom-testing-library/api-configuration), like the timeout for retries and the default testID attribute.

### Example

```tsx
import { render, screen } from '@testing-library/react';
// (or /dom, /vue, ...)test('should show login form', () => {  render(<Login />)

const input = screen.getByLabelText('Username');
// Events and assertions...})
```

### Types of Queries

-   Single Elements
    -   `getBy...`: Returns the matching node for a query, and throw a descriptive error if no elements match _or_ if more than one match is found (use `getAllBy` instead if more than one element is expected).
    -   `queryBy...`: Returns the matching node for a query, and return `null` if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use `queryAllBy` instead if this is OK).
    -   `findBy...`: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use `findAllBy`.
-   Multiple Elements
    -   `getAllBy...`: Returns an array of all matching nodes for a query, and throws an error if no elements match.
    -   `queryAllBy...`: Returns an array of all matching nodes for a query, and return an empty array (`[]`) if no elements match.
    -   `findAllBy...`: Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of `1000`ms.
        -   `findBy` methods are a combination of `getBy*` queries and [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async#waitfor). They accept the `waitFor` options as the last argument (i.e. `await screen.findByText('text', queryOptions, waitForOptions)`)

Summary Table

| Type of Query         | 0 Matches     | 1 Match        | >1 Matches   | Retry (Async/Await) |
| --------------------- | ------------- | -------------- | ------------ | ------------------- |
| **Single Element**    |               |                |              |                     |
| `getBy...`            | Throw error   | Return element | Throw error  | No                  |
| `queryBy...`          | Return `null` | Return element | Throw error  | No                  |
| `findBy...`           | Throw error   | Return element | Throw error  | Yes                 |
| **Multiple Elements** |               |                |              |                     |
| `getAllBy...`         | Throw error   | Return array   | Return array | No                  |
| `queryAllBy...`       | Return `[]`   | Return array   | Return array | No                  |
| `findAllBy...`        | Throw error   | Return array   | Return array | Yes                 |

### Priority

Based on [the Guiding Principles](https://testing-library.com/docs/guiding-principles), your test should resemble how users interact with your code (component, page, etc.) as much as possible. With this in mind, we recommend this order of priority:

1. **Queries Accessible to Everyone** Queries that reflect the experience of visual/mouse users as well as those that use assistive technology.
    1. `getByRole`: This can be used to query every element that is exposed in the [accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/AOM). With the `name` option you can filter the returned elements by their [accessible name](https://www.w3.org/TR/accname-1.1/). This should be your top preference for just about everything. There's not much you can't get with this (if you can't, it's possible your UI is inaccessible). Most often, this will be used with the `name` option like so: `getByRole('button', {name: /submit/i})`. Check the [list of roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles).
    2. `getByLabelText`: This method is really good for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.
    3. `getByPlaceholderText`: [A placeholder is not a substitute for a label](https://www.nngroup.com/articles/form-design-placeholders/). But if that's all you have, then it's better than alternatives.
    4. `getByText`: Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).
    5. `getByDisplayValue`: The current value of a form element can be useful when navigating a page with filled-in values.
2. **Semantic Queries** HTML5 and ARIA compliant selectors. Note that the user experience of interacting with these attributes varies greatly across browsers and assistive technology.
    1. `getByAltText`: If your element is one which supports `alt` text (`img`, `area`, `input`, and any custom element), then you can use this to find that element.
    2. `getByTitle`: The title attribute is not consistently read by screenreaders, and is not visible by default for sighted users
3. **Test IDs**
    1. `getByTestId`: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).

### Using Queries

The base queries from DOM Testing Library require you to pass a `container` as the first argument. Most framework-implementations of Testing Library provide a pre-bound version of these queries when you render your components with them which means you _do not have to provide a container_. In addition, if you just want to query `document.body` then you can use the [`screen`](https://testing-library.com/docs/queries/about/#screen) export as demonstrated below (using `screen` is recommended).

The primary argument to a query can be a _string_, _regular expression_, or _function_. There are also options to adjust how node text is parsed. See [TextMatch](https://testing-library.com/docs/queries/about/#textmatch) for documentation on what can be passed to a query.

Given the following DOM elements (which can be rendered by React, Vue, Angular, or plain HTML code):

```html
<body>
    <div id="app">
<label for="username-input">Username</label> <input id="username-input" />
</div>
</body>
```

You can use a query to find an element (byLabelText, in this case):

```tsx
import { screen, getByLabelText } from '@testing-library/dom';
// With screen:

const inputNode1 = screen.getByLabelText('Username');
// Without screen, you need to provide a container:

const container = document.querySelector('#app');

const inputNode2 = getByLabelText(container, 'Username');
```

#### `screen`

All of the queries exported by DOM Testing Library accept a `container` as the first argument. Because querying the entire `document.body` is very common, DOM Testing Library also exports a `screen` object which has every query that is pre-bound to `document.body` (using the [`within`](https://testing-library.com/docs/dom-testing-library/api-within) functionality). Wrappers such as React Testing Library re-export `screen` so you can use it the same way.

Here's how you use it:

-   Native
-   React
-   Cypress

```tsx
import { screen } from '@testing-library/dom';
document.body.innerHTML = `  <label for="example">Example</label>  <input id="example" />`;

const exampleInput = screen.getByLabelText('Example');
```

> **Note**
>
> You need a global DOM environment to use `screen`. If you're using jest, with the [testEnvironment](https://jestjs.io/docs/en/configuration#testenvironment-string) set to `jsdom`, a global DOM environment will be available for you.
>
> If you're loading your test with a `script` tag, make sure it comes after the `body`. An example can be seen [here](https://github.com/testing-library/dom-testing-library/issues/700#issuecomment-692218886).

### `TextMatch`

Most of the query APIs take a `TextMatch` as an argument, which means the argument can be either a _string_, _regex_, or a _function_ which returns `true` for a match and `false` for a mismatch.

#### TextMatch Examples

Given the following HTML:

_**Will**_\*\* find the div:\*\*

```js
//
// Matching a string:screen.getByText('Hello World')
// full string matchscreen.getByText('llo Worl', {exact: false})
// substring matchscreen.getByText('hello world', {exact: false})
// ignore case
// Matching a regex:screen.getByText(/World/)
// substring matchscreen.getByText(/world/i)
// substring match, ignore casescreen.getByText(/^hello world$/i)
// full string match, ignore casescreen.getByText(/Hello W?oRlD/i)
// substring match, ignore case, searches for "hello world" or "hello orld"
// Matching with a custom function:screen.getByText((content, element) => content.startsWith('Hello'))
```

_**Will not**_\*\* find the div:\*\*

```tsx
// full string does not matchscreen.getByText('Goodbye World')
// case-sensitive regex with different casescreen.getByText(/hello world/)
// function looking for a span when it's actually a div:screen.getByText((content, element) => {  return element.tagName.toLowerCase() === 'span' && content.startsWith('Hello')})
```

#### Precision

Queries that take a `TextMatch` also accept an object as the final argument that can contain options that affect the precision of string matching:

-   `exact`: Defaults to `true`; matches full strings, case-sensitive. When false, matches substrings and is not case-sensitive.
    -   `exact` has no effect on `regex` or `function` arguments.
    -   In most cases using a regex instead of a string gives you more control over fuzzy matching and should be preferred over `{ exact: false }`.
-   `normalizer`: An optional function which overrides normalization behavior. See [`Normalization`](https://testing-library.com/docs/queries/about/#normalization).

#### Normalization

Before running any matching logic against text in the DOM, `DOM Testing Library` automatically normalizes that text. By default, normalization consists of trimming whitespace from the start and end of text, and collapsing multiple adjacent whitespace characters into a single space.

If you want to prevent that normalization, or provide alternative normalization (e.g. to remove Unicode control characters), you can provide a `normalizer` function in the options object. This function will be given a string and is expected to return a normalized version of that string.

> **Note**
>
> Specifying a value for `normalizer` _replaces_ the built-in normalization, but you can call `getDefaultNormalizer` to obtain a built-in normalizer, either to adjust that normalization or to call it from your own normalizer.

`getDefaultNormalizer` takes an options object which allows the selection of behaviour:

-   `trim`: Defaults to `true`. Trims leading and trailing whitespace
-   `collapseWhitespace`: Defaults to `true`. Collapses inner whitespace (newlines, tabs, repeated spaces) into a single space.

---

#### Normalization Examples

To perform a match against text without trimming:

```tsx
screen.getByText('text', { normalizer: getDefaultNormalizer({ trim: false }) });
```

To override normalization to remove some Unicode characters whilst keeping some (but not all) of the built-in normalization behavior:

```tsx
screen.getByText('text', { normalizer: (str) => getDefaultNormalizer({ trim: false })(str).replace(/[\u200E-\u200F]*/g, '') });
```

### Debugging

#### `screen.debug()`

For convenience screen also exposes a `debug` method in addition to the queries. This method is essentially a shortcut for `console.log(prettyDOM())`. It supports debugging the document, a single element, or an array of elements.

```tsx
import { screen } from '@testing-library/dom';
document.body.innerHTML = `  <button>test</button>  <span>multi-test</span>  <div>multi-test</div>`;
// debug documentscreen.debug()
// debug single elementscreen.debug(screen.getByText('test'))
// debug multiple elementsscreen.debug(screen.getAllByText('multi-test'))
```

#### `screen.logTestingPlaygroundURL()`

For debugging using [testing-playground](https://testing-playground.com), screen exposes this convenient method which logs a URL that can be opened in a browser.

```tsx

import  {screen} from '@testing-library/dom'document.body.innerHTML = `  <button>test</button>  <span>multi-test</span>  <div>multi-test</div>`
// log entire document to testing-playgroundscreen.logTestingPlaygroundURL()
// log a single elementscreen.logTestingPlaygroundURL(screen.getByText('test'))
```

### Manual Queries

On top of the queries provided by the testing library, you can use the regular [`querySelector` DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to query elements. Note that using this as an escape hatch to query by class or id is not recommended because they are invisible to the user. Use a testid if you have to, to make your intention to fall back to non-semantic queries clear and establish a stable API contract in the HTML.

```tsx
// @testing-library/react

const { container } = render(<MyComponent />);

const foo = container.querySelector('[data-foo="bar"]');
```

### Browser extension

Do you still have problems knowing how to use Testing Library queries?

There is a very cool Browser extension for [Chrome](https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano/related) and [Firefox](https://addons.mozilla.org/en/firefox/addon/testing-playground/) named Testing Playground, and it helps you find the best queries to select elements. It allows you to inspect the element hierarchies in the Browser's Developer Tools, and provides you with suggestions on how to select them, while encouraging good testing practices.

### Playground

If you want to get more familiar with these queries, you can try them out on [testing-playground.com](https://testing-playground.com). Testing Playground is an interactive sandbox where you can run different queries against your own html, and get visual feedback matching the rules mentioned above.

# 🕚 React Testing Library (events)

## Firing Events | Testing Library

> **Excerpt**
>
> Note

---

> **Note**
>
> Most projects have a few use cases for `fireEvent`, but the majority of the time you should probably use \[`@testing-library/user-event`]\(https: //testing-library.com/docs/ecosystem-user-event).

### `fireEvent`

```typescript
fireEvent(node: HTMLElement, event: Event)
```

Fire DOM events.

```typescript
// <button>Submit</button>fireEvent(  getByText(container, 'Submit'),  new MouseEvent('click', {    bubbles: true,    cancelable: true,  }),)
```

### `fireEvent[eventName]`

```typescript
fireEvent[eventName](node: HTMLElement, eventProperties: Object)
```

Convenience methods for firing DOM events. Check out \[src/event-map.js]\(https: //github.com/testing-library/dom-testing-library/blob/master/src/event-map.js) for a full list as well as default `eventProperties`.

**target**: When an event is dispatched on an element, the event has the subjected element on a property called `target`. As a convenience, if you provide a `target` property in the `eventProperties` (second argument), then those properties will be assigned to the node which is receiving the event.

This is particularly useful for a change event:

```ts
fireEvent.change(getByLabelText(/username/i), { target: { value: 'a' } });
// note: attempting to manually set the files property of an HTMLInputElement
// results in an error as the files property is read-only.
// this feature works around that by using Object.defineProperty.fireEvent.change(getByLabelText(/picture/i), {  target: {    files: [new File(['(⌐□_□)'], 'chucknorris.png', {type: 'image/png'})],  },})
// Note: The 'value' attribute must use ISO 8601 format when firing a
// change event on an input of type "date". Otherwise the element will not
// reflect the changed value.
// Invalid:fireEvent.change(input, {target: {value: '24/05/2020'}})
// Valid:fireEvent.change(input, {target: {value: '2020-05-24'}})
```

**dataTransfer**: Drag events have a `dataTransfer` property that contains data transferred during the operation. As a convenience, if you provide a `dataTransfer` property in the `eventProperties` (second argument), then those properties will be added to the event.

This should predominantly be used for testing drag and drop interactions.

```typescript
fireEvent.drop(getByLabelText(/drop files here/i), {
    dataTransfer: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
    }
});
```

**Keyboard events**: There are three event types related to keyboard input - `keyPress`, `keyDown`, and `keyUp`. When firing these you need to reference an element in the DOM and the key you want to fire.

```typescript
fireEvent.keyDown(domNode, {key: 'Enter', code: 'Enter', charCode: 13})fireEvent.keyDown(domNode, {key: 'A', code: 'KeyA'})
```

You can find out which key code to use at \[https: //keycode.info/]\(https: //keycode.info).

### `createEvent[eventName]`

```typescript
createEvent[eventName](node: HTMLElement, eventProperties: Object)
```

Convenience methods for creating DOM events that can then be fired by `fireEvent`, allowing you to have a reference to the event created: this might be useful if you need to access event properties that cannot be initiated programmatically (such as `timeStamp`).

```typescript

const myEvent = createEvent.click(node, {button: 2})fireEvent(node, myEvent)
// myEvent.timeStamp can be accessed just like any other properties from myEvent
// note: The access to the events created by `createEvent` is based on the native event API,
// Therefore, native properties of HTMLEvent object (e.g. `timeStamp`, `cancelable`, `type`) should be set using Object.defineProperty
// For more info see: https:
//developer.mozilla.org/en-US/docs/Web/API/Event
```

You can also create generic events:

```typescript
// simulate the 'input' event on a file inputfireEvent(  input,  createEvent('input', input, {    target: {files: inputFiles},    ...init,  }),)
```

### Using Jest Function Mocks

\[Jest's Mock functions]\(https: //jestjs.io/docs/en/mock-functions) can be used to test that a callback passed to the function was called, or what it was called when the event that **should** trigger the callback function does trigger the bound callback.

-   React

```typescript

import  {render, screen, fireEvent} from '@testing-library/react'

const Button = ({onClick, children}) => (
<button onClick={onClick}>{children}</button>)test('calls onClick prop when clicked', () => {

const handleClick = jest.fn()  render(<Button onClick={handleClick}>Click Me</Button>)  fireEvent.click(screen.getByText(/click me/i))  expect(handleClick).toHaveBeenCalledTimes(1)})
```
