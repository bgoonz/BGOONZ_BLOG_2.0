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

title: HTML emails
category: HTML

---

### Properties to avoid

| Property             | Where                   |
| -------------------- | ----------------------- |
| `position`           | (Outlook, Gmail, Yahoo) |
| `display`            | (Outlook, Gmail)        |
| `float`              | (Outlook)               |
| ---                  | ---                     |
| `height`             | (Outlook)               |
| `width` _in p/div_   | (Outlook)               |
| `padding` _in p/div_ | (Outlook)               |
| `background`         | (Outlook, Gmail)        |
| `min-width`          | (Outlook)               |
| `max-width`          | (Outlook)               |
| ---                  | ---                     |
| `opacity`            | (Outlook, Gmail, Yahoo) |
| `box-shadow`         | (Outlook, Gmail, Yahoo) |
| ---                  | ---                     |
| `rgba()`             | (Outlook)               |
| `data-uri`           | (all webmail)           |

### Selectors to avoid

| `E[attr]` | (Outlook, Gmail) |
| `E:nth-child(n)` | (Outlook, Gmail) |
| `::before` _and_ `::after` | (Outlook, Yahoo, Gmail) |
| `E F` | (Gmail) |
| `E + F`, `E > F` _etc_ | (Outlook, Gmail) |

Inline your CSS as much as possible.

### Basic layout

```html
<table cellpadding="0" cellspacing="0" role="presentation">
    <tr>
        <td width="auto"></td>
        <td width="600" background="#ffffff">···</td>
        <td width="auto"></td>
    </tr>
</table>
```

### Responsive

```html
<style>
    @media only screen and (max-device-width: 480px);
</style>
```

`<style>` is supported in the head and body by everything except Gmail. Only use them for responsive styles.

## References

{: .-one-column}

-   [CSS support matrix](https://www.campaignmonitor.com/css/) _campaignmonitor.com_
