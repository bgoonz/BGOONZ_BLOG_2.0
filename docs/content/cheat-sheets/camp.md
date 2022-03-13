---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

---

title: Camp

category: JavaScript libraries
weight: -1
intro: |
[Camp](https://github.com/espadrine/sc/) is a Node.js web server framework. This guide targets Camp v17.x.

---

## Getting started

### Quick start

#### app.js

{: .-file}

```js
const Camp = require('camp');
const camp = Camp.start({ port: 1234 });
```

#### web/index.html

{: .-file}

```html
<!DOCTYPE html>
<body>
    Hello world!
</body>
```

Camp serves files in `web/` by default.

### Routes

#### Handles `/search?q=rainbows`

```js
camp.path('/search', (req, res) => {
  const q = res.query.q
  res.json({ results: ··· })
})
```

{: data-line="2"}

Also available: `camp.post`, `camp.get`.

### Templates

```js
const tpl = Camp.template('./templates/post.html');

camp.path('/blog/:post.html', (req, res) => {
    res.template(
        {
            text: 'Hello world'
        },
        tpl
    );
});
```

{: data-line="1,4"}

See: [Templates](https://github.com/espadrine/sc/blob/master/doc/Readme.md#templates)

### Not found

```js
camp.notFound('/*.lol', (req, res) => {
    res.file('/404.html');
});
```

{: data-line="1"}

See: [Fall through](https://github.com/espadrine/sc/blob/master/doc/Readme.md#fall-through)

### Low level handler

```js
camp.handle((req, res, next) => {
    res.setHeader('X-Hello', 'world');
    next();
});
```

{: data-line="1"}

See: [Handlers](https://github.com/espadrine/sc/blob/master/doc/Readme.md#handlers)

## Templates

### Basic templates

```js
const tpl = Camp.template('/templates/post.html');

camp.path('/blog/:post.html', (req, res) => {
    res.template(
        {
            text: 'Hello world'
        },
        tpl
    );
});
```

{: data-line="1,4,5,6"}

### Implicit templates

```js
camp.path('blog.html');
```

Uses `blog.html` as a template.

See: [Templates](https://github.com/espadrine/sc/blob/master/doc/Readme.md#templates)

## Advanced features

### Web sockets

```js
camp.ws('/path', (socket) => { ··· })
```

```js
camp.wsChannels[path];
```

```js
camp.wsBroadcast('/path', (req, res) => {});
```

Sorry I don't completely understand this yet, but check it out in their docs.

See: [WebSocket](https://github.com/espadrine/sc/blob/master/doc/Readme.md#websocket)
