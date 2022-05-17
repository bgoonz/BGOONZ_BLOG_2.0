---
title: Date component
template: post
date: 2022-04-19T01:30:26.826Z
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/react.yaml
tags:
  - src/data/tags/links.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/react-semantics.md
cmseditable: true
---

```javascript
import { isValid, parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  if (!isValid(parseISO(dateString))) {
    return "No date";
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
```
