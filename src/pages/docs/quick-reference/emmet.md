---
title: Emmet Cheat Sheet
excerpt: >-
  In this section you'll find basic information about Web-Dev-Huband how to use
  it.
seo:
  title: Emmet Cheat Sheet
  description: This is the Emmet Cheat Sheet page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Emmet Cheat Sheet
      keyName: property
    - name: 'og:description'
      value: This is the Emmet Cheat Sheet page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Emmet Cheat Sheet
    - name: 'twitter:description'
      value: This is the Emmet Cheat Sheet page
template: docs
---

# Emmet

## Emmet Cheat Sheet

EMMET

#### Emmet Cheat Sheet

#### EMMET

_The a toolkit for web-developers_

#### Introduction

Emmet is a productivity toolkit for web developers that uses expressions to generate HTML snippets.

#### Installation

Normally, installation for Emmet should be a straight-forward process from the package-manager, as most of the modern text editors support Emmet.

#### Usage

You can use Emmet in two ways:

* Tab Expand Way: Type your emmet code and press `Tab` key
* Interactive Method: Press `alt + ctrl + Enter` and start typing your expressions. This should automatically generate HTML snippets on the fly.

**This cheatsheet will assume that you press**`Tab`**after each expressions.**

#### HTML

#### Generating HTML 5 DOCTYPE

`html:5`

Will generate

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

#### Child items

Child items are created using `>`

`ul>li>p`

* 
#### Sibling Items

Sibling items are created using `+`

`html>head+body`

#### Multiplication

Items can be multiplied by `*`

`ul>li*5`

* * * * * 
#### Grouping

Items can be grouped together using `()`

`table>(tr>th*5)+tr>t*5`

|  |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- |
|  |  |  |  |  |

#### Class and ID

Class and Id in Emmet can be done using `.` and `#`

`div.heading`

 \`div\#heading\`

ID and Class can also be combined together

`div#heading.center`

 \#\#\# Adding Content inside tags Contents inside tags can be added using \`{}\` \`h1{Emmet is awesome}+h2{Every front end developers should use this}+p{This is paragraph}\*2\`

## Emmet is awesome

### Every front end developers should use this

This is paragraph

This is paragraph \#\#\# Attributes inside HTML tags Attributes can be added using \`\[\]\` \`a\[href=https://?google.com data-toggle=something target=\_blank\]\` \#\#\# Numbering Numbering can be done using \`$\` You can use this inside tag or contents. \`h${This is so awesome $}\*6\`

## This is so awesome 1

### This is so awesome 2

#### This is so awesome 3

**This is so awesome 4**

**This is so awesome 5**

**This is so awesome 6**

 Use \`@-\` to reverse the Numbering \`img\[src=image$$@-.jpg\]\*5\` ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/image05.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/image04.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/image03.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/image02.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/image01.jpg) To start the numbering from specific number, use this way \`img\[src=emmet$@100.jpg\]\*5\` ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/emmet100.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/emmet101.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/emmet102.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/emmet103.jpg) ![](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/4b1320b956f893af2be8f4feb67babec254019c6/src/pages/docs/quick-reference/emmet104.jpg) \#\#\# Tips \* Use \`:\` to expand known abbreviations \`input:date\`  \`form:post\` \`link:css\` \* Building Navbar \`.navbar&gt;ul&gt;li\*3&gt;a\[href=\#\]{Item $@-}\`

* [Item 3](emmet.md)
* [Item 2](emmet.md)
* [Item 1](emmet.md)

#### CSS

Emmet works surprisingly well with css as well.

* `f:l`

```text
float: left;
```

You can also use any options n/r/l

* `pos:a­`

```text
position: absolute;
```

Also use any options, pos:a/r/f

* `d:n/b­/f/­i/ib`

  `d:ib`

  display: inline-block;

* You can use `m` for margin and `p` for padding followed by direction

`mr` -&gt; `margin-right`

`pr` -&gt; `padding-right`

* `@f` will result in

```text
@font-face {
  font-family:;
  src:url();
}
```

You can also use these shorthands

![](https://cdn-images-1.medium.com/max/800/1*h8hsUrJNyVRLYqBQP63DCA.png)\#\#\#\# If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

Or Checkout my personal Resource Site:

[**a/A-Student-Resources**  
 _Edit description_goofy-euclid-1cd736.netlify.app](https://goofy-euclid-1cd736.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [March 6, 2021](https://medium.com/p/24758e628d37).

[Canonical link](https://medium.com/@bryanguner/emmet-cheat-sheet-24758e628d37)

Exported from [Medium](https://medium.com) on May 23, 2021.

