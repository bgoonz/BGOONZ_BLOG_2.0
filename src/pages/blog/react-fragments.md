---
title: React Fragments
template: post
subtitle: A common pattern in React is for a component to return multiple
  elements. Fragments let you group a list of children without adding extra
  nodes to the DOM.
excerpt: A common pattern in React is for a component to return multiple
  elements. Fragments let you group a list of children without adding extra
  nodes to the DOM.
date: 2022-05-28T23:53:29.467Z
image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/react.jpg?raw=true
thumb_image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/react.jpg?raw=true
image_position: right
author: src/data/authors/bgoonz.yaml
tags:
  - src/data/tags/react.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/10-essential-react-interview-questions.md
  - src/pages/blog/deploy-react-app-to-heroku.md
  - src/pages/blog/react-state.md
  - src/pages/blog/react-semantics.md
  - src/pages/blog/passing-arguments-to-a-callback-in-js.md
cmseditable: true
---
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

```
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

There is also a new [short syntax](https://reactjs.org/docs/fragments.html#short-syntax) for declaring them.

## [](https://reactjs.org/docs/fragments.html#motivation)Motivation

A common pattern is for a component to return a list of children. Take this example React snippet:

```
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```

`<Columns />` would need to return multiple `<td>` elements in order for the rendered HTML to be valid. If a parent div was used inside the `render()` of `<Columns />`, then the resulting HTML will be invalid.

```
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

results in a `<Table />` output of:

```
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Fragments solve this problem.

## [](https://reactjs.org/docs/fragments.html#usage)Usage

```
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>        <td>Hello</td>
        <td>World</td>
      </React.Fragment>    );
  }
}
```

which results in a correct `<Table />` output of:

```
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

### [](https://reactjs.org/docs/fragments.html#short-syntax)Short Syntax

There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:

```
class Columns extends React.Component {
  render() {
    return (
      <>        <td>Hello</td>
        <td>World</td>
      </>    );
  }
}
```

You can use `<></>` the same way you’d use any other element except that it doesn’t support keys or attributes.

### [](https://reactjs.org/docs/fragments.html#keyed-fragments)Keyed Fragments

Fragments declared with the explicit `<React.Fragment>` syntax may have keys. A use case for this is mapping a collection to an array of fragments — for example, to create a description list:

```
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

`key` is the only attribute that can be passed to `Fragment`. In the future, we may add support for additional attributes, such as event handlers.

<iframe height="800" style="width: 100%;" scrolling="no" title="Example: Fragments" src="https://codepen.io/bgoonz/embed/VwQQWyV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

