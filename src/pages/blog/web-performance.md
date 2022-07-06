---
title: Web Performance
template: post
subtitle: A carousel is a UX component that displays content in a slideshow-like manner
excerpt: To learn about performance and UX best practices
date: 2022-06-28T18:33:17.229Z
image: blob:https://bgoonz-blog.netlify.app/5d99ab41-ad42-446f-9e90-a0bf594979ef
thumb_image: blob:https://bgoonz-blog.netlify.app/5d99ab41-ad42-446f-9e90-a0bf594979ef
image_position: right
author: src/data/authors/im.yaml
categories:
  - src/data/categories/awesome-lists.yaml
tags:
  - src/data/tags/career-1.yaml
  - src/data/tags/cms.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/adding-css-to-your-html.md
  - src/pages/blog/design-patterns.md
cmseditable: true
---
## Carousels

A carousel is a UX component that displays content in a slideshow-like manner. Large, above-the-fold carousels often contain a page's [Largest Contentful Paint (LCP) element](https://web.dev/lcp/#what-elements-are-considered), and therefore can have a significant impact on [LCP](https://web.dev/lcp). In addition, a surprising number of carousels use [non-composited animations](https://web.dev/non-composited-animations/) that can contribute to [Cumulative Layout Shift (CLS)](https://web.dev/cls). On pages with autoplaying carousels, this has the potential to cause infinite layout shifts.

To learn about performance and UX best practices for carousels, see [Carousel Best Practices](https://web.dev/carousel-best-practices/).

Autoplay carousel

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/carousels/carousel-autoplay/demo.html)

This carousel uses CSS scroll snap to create smooth, performant slide transitions that do not cause layout shifts.

[Learn more](https://web.dev/patterns/web-vitals-patterns/carousels/carousel-autoplay)

## Fonts

If a web font has not been loaded, browsers typically delay rendering any text that uses the web font. In many situations, this delays [First Contentful Paint (FCP)](https://web.dev/fcp). In some situations, this delays [Largest Contentful Paint (LCP)](https://web.dev/lcp).

In addition, fonts can cause [layout shifts](https://web.dev/debug-layout-shifts). These layout shifts occur when a web font and its fallback font take up different amounts of space on the page.

For more information, see [Best practices for fonts](https://web.dev/font-best-practices/).

Self-hosted fonts

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/fonts/font-self-hosted/demo.html)

This demo combines two performance techniques to deliver a self-hosted font as quickly as possible: use of inline font declarations and use of the WOFF2 font format.

[Learn more](https://web.dev/patterns/web-vitals-patterns/fonts/font-self-hosted)

Third-party fonts

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/fonts/fonts-third-party/demo.html)

The demo combines two performance techniques to load a third-party font as quickly as possible: use of inline font declarations and use of preconnect resource hints.

[Learn more](https://web.dev/patterns/web-vitals-patterns/fonts/fonts-third-party)

## Images

Images can cause layout shifts if they load after the surrounding page has already been rendered. This issue is more prominent in situations where images are slow to load - for example, on a slow connection or when loading an image with a particularly large file size.

<img> tag

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/images/img-tag/demo.html)

This image loads without causing layout shifts.

[Learn more](https://web.dev/patterns/web-vitals-patterns/images/img-tag)

Responsive images and art direction

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/images/responsive-images/demo.html)

These responsive images load without causing layout shifts.

[Learn more](https://web.dev/patterns/web-vitals-patterns/images/responsive-images)

## Infinite scroll

Infinite scroll is a UX pattern where content is continuously added to the page as a user scrolls. Some implementations of infinite scroll can be a source of [layout shifts](https://web.dev/debugging-layout-shifts/).

Infinite scroll

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/infinite-scroll/infinite-scroll/demo.html)

In this implementation of infinite scroll there are never any layout shifts - regardless of how long it takes the server to respond with new content.

[Learn more](https://web.dev/patterns/web-vitals-patterns/infinite-scroll/infinite-scroll)

## Banners and notices

Banners and notices are a common source of layout shifts. Inserting a banner into the DOM after the surrounding page has already been rendered pushes the page elements below it further down the page.

For more information, see [Best practices for cookie notices](https://web.dev/cookie-notice-best-practices/).

Animated footer

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/notices-pattern-set/notice-animated-footer/demo.html)

This banner slides-in from the bottom of the page without causing layout shifts.

[Learn more](https://web.dev/patterns/web-vitals-patterns/notices-pattern-set/notice-animated-footer)

Modal

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/notices-pattern-set/notice-modal/demo.html)

Modals can be used as an alternative to banner notices.

[Learn more](https://web.dev/patterns/web-vitals-patterns/notices-pattern-set/notice-modal)

Sticky footer

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/notices-pattern-set/notice-sticky-footer/demo.html)

This sticky footer banner does not cause layout shifts when it is inserted into the page.

[Learn more](https://web.dev/patterns/web-vitals-patterns/notices-pattern-set/notice-sticky-footer)

## Placeholders

Placeholders reserve space for future page content. Placeholders can be used as a solution to layout shifts caused by injecting page content; they can also be used in conjunction with lazy-loading.

Placeholders

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/placeholders/placeholders/demo.html)

These placeholders provide users with a visual indication that new content is loading; they also help prevent layout shifts.

[Learn more](https://web.dev/patterns/web-vitals-patterns/placeholders/placeholders)

## Video

Video can impact Web Vitals by being a source of [layout shifts](https://web.dev/debug-layout-shifts/). In addition, in some scenarios large video files can delay LCP by monopolizing network resources and delaying the loading of other page resources.

Video

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/video/video/demo.html)

This video loads without causing layout shifts and displays a poster image.

[Learn more](https://web.dev/patterns/web-vitals-patterns/video/video)

GIF-style video

```

```

[Open demo](https://web.dev/patterns/web-vitals-patterns/video/video-gif/demo.html)

This <video> tag looks and feels like a GIF but is far more performant.

[Learn more](https://web.dev/patterns/web-vitals-patterns/video/video-gif)