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

title: GitHub pages
category: Jekyll

---

## Custom domains

### Custom domains

```sh
$ echo "foobar.com" > CNAME
$ git commit && git push
```

Create a `CNAME` file with your domain on it.

See: [Setting up a custom domain](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/) _(github.com)_

### Set up your domain

Subdomain (like www):
{: .-setup}

     CNAME => username.github.io

Apex domains:
{: .-setup}

     ALIAS => username.github.io

Apex domains (alternative):
{: .-setup}

    A => 192.30.252.153
    A => 192.30.252.154

## References

{: .-one-column}

-   <https://pages.github.com>
