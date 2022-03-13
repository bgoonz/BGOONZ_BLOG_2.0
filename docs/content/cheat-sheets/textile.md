---
title: Textile
category: Markup

weight: -1
---

## Reference

### Inlines

| Code                      | Description |
| ------------------------- | ----------- |
| `_em_`                    |             |
| `*strong*`                |             |
| `__bold-italic__`         |             |
| `@code@`                  |             |
| `??citation??`            |             |
| ---                       | ---         |
| `-strikethrough-`         |             |
| `+insertion+`             |             |
| ---                       | ---         |
| `%span%`                  | HTML tag    |
| `%{color:red}formatting%` | CSS styles  |
| ---                       | ---         |

### Blocks

```textile
h1. Header 1
```

```textile
h2. Header 2
```

```textile
bq. Blockquote
```

```textile
p(classname). Class.
```

```textile
p(#id). ID.
```

### Lists

```textile
## ordered list
```

```textile
* unordered list
```

### Links

| Code                                            | Description        |
| ----------------------------------------------- | ------------------ |
| `"Hypertext":index.html`                        | Link               |
| ---                                             | ---                |
| `"Text link":link` <br> `[link]http://link.com` | Link via reference |

### Images

| Code                      | Description |
| ------------------------- | ----------- |
| `!image.jpg!`             | Image       |
| `!image.jpg(title text)!` |             |
| `!image.jpg!:link.html`   |             |
| `!>right.jpg!`            |             |

### Escaped HTML

```html
<pre>
I am <b>very serious.</b> -- this
will get escaped.
</pre>
```

### Line breaks

```textile
Line breaks.
Just break the lines.
```

### Entities

```textile
one(TM), two(R), three(C).
```

### Horizontal line

```textile
--
```

### Footnotes

```textile
Footnotes[1].
```

```textile
fn1. Something.
```
