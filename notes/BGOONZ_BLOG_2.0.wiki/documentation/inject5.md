---
created: 2022-01-16T11:01:24 (UTC -05:00)
tags: []
source: https://app.netlify.com/sites/bgoonz-blog/settings/deploys
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
author: 
=======
author:
>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
---

# Build & deploy | Site settings

> ## Excerpt
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
> Settings for Continuous Deployment from a Git repository

---
=======
>
> Settings for Continuous Deployment from a Git repository

---

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
## [Continuous Deployment](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#continuous-deployment)

Settings for Continuous Deployment from a Git repository

Deploy Previews allow you and your team to experience changes to any part of your site without having to publish them to production.

Deploy Previews

Don’t deploy pull requests

Netlify Drawer

Enabled

[Learn more about Deploy Previews in the docs](https://docs.netlify.com/site-deploys/deploy-previews)

Build hooks give you a unique URL you can use to trigger a build.

-   **stackbit-build-hook**
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    https://api.netlify.com/build\_hooks/609b2d9f66af5127803b19c3
    
    Send a POST request to this webhook to trigger a deploy from [master](https://github.com/stackbit-projects/best-celery-b2d7c/tree/master).
    
    Example using cURL:
    
    ```
    curl -X POST -d {} https://api.netlify.com/build_hooks/609b2d9f66af5127803b19c3
    ```
    
-   **gitter**
    
    https://api.netlify.com/build\_hooks/61dccb6ed7c12040ccc2daef
    
    Send a POST request to this webhook to trigger a deploy from [master](https://github.com/stackbit-projects/best-celery-b2d7c/tree/master).
    
    Example using cURL:
    
    ```
    curl -X POST -d {} https://api.netlify.com/build_hooks/61dccb6ed7c12040ccc2daef
    ```
    
=======

    https://api.netlify.com/build\_hooks/609b2d9f66af5127803b19c3

    Send a POST request to this webhook to trigger a deploy from [master](https://github.com/stackbit-projects/best-celery-b2d7c/tree/master).

    Example using cURL:

    ```
    curl -X POST -d {} https://api.netlify.com/build_hooks/609b2d9f66af5127803b19c3
    ```

-   **gitter**

    https://api.netlify.com/build\_hooks/61dccb6ed7c12040ccc2daef

    Send a POST request to this webhook to trigger a deploy from [master](https://github.com/stackbit-projects/best-celery-b2d7c/tree/master).

    Example using cURL:

    ```
    curl -X POST -d {} https://api.netlify.com/build_hooks/61dccb6ed7c12040ccc2daef
    ```
>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md

[Learn more about build hooks in the docs](https://www.netlify.com/docs/webhooks/#incoming-webhooks)

A deploy key grants permissions to our build system to access your private submodule.

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDVi79bjai48K5TZNQWEji8lai8DX6wJ94cbj9e5c78porecQYCklAt6N97MiziIoctETdYTe63bGhSw9Dz9IQweau7oBE0RmUWovlVgqZgJDysWSFVkN8a8e16XnBYQa4kD7sCIYCZA9dH2cW+yxnW+bEJcoqYA7dUJt8thwA0yjVQkVzune3SXzro9mifS9bWmTISUpvBf21JlS7sS0MdF8Iqb+gYDivSm38ilkBu0HMlelYFixEIPkVRXVRyW+KHGWynVP5g/TGsvocIinJeH19FVovHusHSnTE0Cg9z8f1IKL9hyEj3ksbJmrzZNy3jhVOpLrx5PFHSbrWcCGv8PPoWt8fPbUDJugIhZ62IHOgcbt6wzIBLYgF3C1hLxIwzeCzbx85TqHGN9pp5uzJDAtx+meqO/QzssBz3ZJ2aR98BGwzoWgawAjllE0BPOWtuR5+lwDAAGznb/C6vfUrdXOU72++wawjcL+PHBCjOjwIRXW4f2Q0qiH2scyOazCmmlQXPul3jJnHBl+KzClL7N9Vvm6bvbRj5XXYKbexNAgit7PwscV24qfszTAeHtx55+aSHqYAYkFx3rqI4h9BwhwpNvXM4EcgNarYWoze4qp4tW7weidR6DKKiX/SjT5wyltipY5F8T0LBqq+nT1n0FHqrk3/6l+7y9++XTyv4oQ==
```

[Learn more about deploy keys in the docs](https://docs.netlify.com/configure-builds/repo-permissions-linking/#access-other-repositories-at-build)

## [Environment](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#environment)

Control the environment your site builds in and/or gets deployed to.

Deploy Previews triggered by a pull request from an unrecognized author’s fork are considered untrusted deploys. Choose how to manage sensitive environment variable access for these deploys.

Untrusted deploys

Deploy without sensitive variables

[Learn more about sensitive variable policy in the docs](https://docs.netlify.com/configure-builds/environment-variables/#sensitive-variable-policy)

## [Post processing](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#post-processing)

Control the post processing and optimizations Netlify can do for you

Inject analytics or other scripts into the HTML of your site.

-   before `</head>`
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    gtag-n-firebase
    
=======

    gtag-n-firebase

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    ```
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5S5XXNR');</script>
    <!-- End Google Tag Manager -->
    <!--FIREBASE----------------------------------------------------------------------->
    <!-- The core Firebase JS SDK is always required and must be listed first -->
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <script src="/__/firebase/8.8.1/firebase-app.js"></script>
    
    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.8.1/firebase-analytics.js"></script>
    
    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>
    
    <!--Google Tag----------------------------------------------------------------------->
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9B63M34E1"></script>
=======
    <script src="/__/firebase/8.8.1/firebase-app.js">
</script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.8.1/firebase-analytics.js">
</script>

    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js">
</script>

    <!--Google Tag----------------------------------------------------------------------->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9B63M34E1">
</script>
>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
      gtag('config', 'G-M9B63M34E1');
    </script>
    ```
    
-   before `</body>`
    
    gtag-in-body
    
    ```
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    ```
    
-   before `</head>`
    
    original-analytics
    
    ```
    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
=======

      gtag('config', 'G-M9B63M34E1');
    </script>
    ```

-   before `</body>`

    gtag-in-body

    ```
    <!-- Google Tag Manager (noscript) -->
    <noscript>
<iframe style="resize:both; overflow:scroll;"  sandbox="allow-scripts"  src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden">
</iframe>
<br>
</noscript>
    <!-- End Google Tag Manager (noscript) -->
    ```

-   before `</head>`

    original-analytics

    ```
    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
</script>
>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5S5XXNR');</script>
    <!-- End Google Tag Manager -->
    <!-- Google Tag Manager (noscript) -->
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <meta name="google-site-verification" content="W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4W5MG3DG4T"></script>
=======
    <noscript>
<iframe style="resize:both; overflow:scroll;"  sandbox="allow-scripts"  src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden">
</iframe>
<br>
</noscript>
    <!-- End Google Tag Manager (noscript) -->

    <meta name="google-site-verification" content="W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4W5MG3DG4T">
</script>
>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
      gtag('config', 'G-4W5MG3DG4T');
    </script>
    
    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    ```
    
-   before `</body>`
    
    goback
    
=======

      gtag('config', 'G-4W5MG3DG4T');
    </script>

    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
</script>
    ```

-   before `</body>`

    goback

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            echo "<a href='$url'></a>
    ```
    
-   before `</head>`
    
    mdn-style
    
=======
            echo "<a href='$url'>
</a>
    ```

-   before `</head>`

    mdn-style

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    ```
    <style>blockquote,
    body,
    dd,
    dl,
    figcaption,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    li,
    ol[class],
    p,
    ul[class] {
      margin: 0
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    body {
      min-height: 110vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.6
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    
    
    
    
    article>*+* {
      margin-top: 1em
    }
    
=======





    article>*+* {
      margin-top: 1em
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    button,
    input,
    select,
    textarea {
      font: inherit
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @media(prefers-reduced-motion:reduce) {
      * {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
        scroll-behavior: auto !important
      }
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    html {
      box-sizing: border-box;
    }
    
=======

    html {
      box-sizing: border-box;
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    body {
      font-family: arial, x-locale-body, sans-serif;
      letter-spacing: -.0027777778rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 100%;
      line-height: 1.75
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    img {
      height: auto
    }
    
=======

    img {
      height: auto
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @font-face {
      font-display: swap;
      font-family: zillaslab;
      font-style: normal;
      font-weight: 700;
      src: url(/static/media/ZillaSlab-Bold.subset.0beac26b.woff2) format("woff2"), url(/static/media/ZillaSlab-Bold.subset.72026b3c.woff) format("woff")
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @font-face {
      font-display: swap;
      font-family: zillaslab;
      font-style: normal;
      font-weight: 400;
      src: url(/static/media/ZillaSlab-Regular.subset.ce3a756d.woff2) format("woff2"), url(/static/media/ZillaSlab-Regular.subset.7e4c05c9.woff) format("woff")
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    h1,
    h2,
    h3 {
      font-family: zillaslab, palatino, "Palatino Linotype", serif;
      line-height: 1.2
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    h1 {
      font-size: 1.802rem
    }
    
=======

    h1 {
      font-size: 1.802rem
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @media (min-width:47.9385em) {
      h1 {
        font-size: 3.052rem
      }
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    h2 {
      font-size: 1.602rem
    }
    
=======

    h2 {
      font-size: 1.602rem
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @media (min-width:47.9385em) {
      h2 {
        font-size: 2.441rem
      }
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    h3 {
      font-size: 1.424rem;
    
    
=======

    h3 {
      font-size: 1.424rem;


>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
      font-family: zillaslab, palatino, "Palatino Linotype", serif;
      font-weight: 400;
      max-width: -webkit-max-content;
      max-width: -moz-max-content;
      max-width: max-content;
      padding: 0 6px;
      margin: 24px 0
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @media (min-width:47.9385em) {
      h3 {
        font-size: 1.953rem
      }
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    h4 {
      font-size: 1.266rem
    }
    
=======

    h4 {
      font-size: 1.266rem
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @media (min-width:47.9385em) {
      h4 {
        font-size: 1.563rem
      }
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    h5 {
      font-size: 1.125rem
    }
    
=======

    h5 {
      font-size: 1.125rem
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @media (min-width:47.9385em) {
      h5 {
        font-size: 1.25rem
      }
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    p {
      margin-bottom: 24px
    }
    
    a:link,
    a:visited {
    
      text-decoration: none
    }
    
=======

    p {
      margin-bottom: 24px
    }

    a:link,
    a:visited {

      text-decoration: none
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    a:link:active,
    a:link:focus,
    a:link:hover,
    a:visited:active,
    a:visited:focus,
    a:visited:hover {
      text-decoration: underline
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    blockquote {
      max-width: 45rem;
      max-width: 85ch;
      font-size: 1.125rem;
      font-family: zillaslab, palatino, "Palatino Linotype", serif;
      font-weight: 400;
      margin-bottom: 24px
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    @media (min-width:47.9385em) {
      blockquote {
        font-size: 1.25rem
      }
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    blockquote:after,
    blockquote:before {
      background-image: linear-gradient(90deg, #00356a, #83d0f2);
      content: "";
      display: block;
      height: 5px;
      margin-bottom: 12px
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    blockquote:after {
      margin-top: 12px
    }
    
    blockquote p:last-of-type {
      margin-bottom: 0
    }
    
    a {
    
      text-decoration: none
    }
    
=======

    blockquote:after {
      margin-top: 12px
    }

    blockquote p:last-of-type {
      margin-bottom: 0
    }

    a {

      text-decoration: none
    }

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    a:focus,
    a:hover {
      text-decoration: underline
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    a code {
      -webkit-text-decoration-skip-ink: none;
      text-decoration-skip-ink: none
    }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    
    dl dt {
      font-weight: 700
    }
    
    dl dd {
      margin: 0 24px 24px
    }
    
    
    
    </style>
    ```
    
-   before `</head>`
    
    algolia-head
    
=======


    dl dt {
      font-weight: 700
    }

    dl dd {
      margin: 0 24px 24px
    }



    </style>
    ```

-   before `</head>`

    algolia-head

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
      <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
      <script type="text/javascript"  src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js">
        </script>
        <script type="text/javascript">
          algoliasearchNetlify({
            appId: "O6OT9G9U8Z",
            apiKey: "b0cb3d390176e1ff4bd1ecb12fc15730",
            siteId: "a1b7ee1a-11a7-4bd2-a341-2260656e216f",
            branch: "master",
            selector: "div#search"
          });
        </script>
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
-   before `</body>`
    
    stackbit-widget
    
    ```
    <script src="https://widget.stackbit.com/init.js" id="stackbit-widget-init" data-stackbit-project-id="609b2d7c71a5dd0016f36326"></script>
    ```
    
-   before `</body>`
    
    addthis
    
    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```
    
-   before `</head>`
    
    meta
    
=======

-   before `</body>`

    stackbit-widget

    ```
    <script src="https://widget.stackbit.com/init.js" id="stackbit-widget-init" data-stackbit-project-id="609b2d7c71a5dd0016f36326">
</script>
    ```

-   before `</body>`

    addthis

    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946">
</script>
    ```

-   before `</head>`

    meta

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    ```
    <meta name="google-site-verification" content="q5W83EYchlVTyA-iYRE4ElQGcbD_vukQF0NKW12N3qU" />
    <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="apple-touch-icon" href="logo-circle.png">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Type" content="HTML">
      <meta name="Author" content="Bryan Guner">
      <meta name="keywords" content="HTML, Meta Tags, Metadata">
      <meta name="description" content="Learning about Web Development.">
      <link type="image/x-icon" href="./favicon.ico" rel="shortcut icon">
      <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="@bgoonz">
      <meta name="twitter:creator" content="@bgoonz">
      <meta name="twitter:image:src" content="/logo-circle.png">
      <meta name="twitter:title" content="Web Development Resource Hub Bryan Guner">
      <meta name="twitter:description" content="The new home of my blog resource sharing website.">
    <meta property="twitter:card" content="summary_large_image">
      <link
        href="https://instructure-uploads-pdx.s3.us-west-2.amazonaws.com/account_168550000000000001/attachments/537/logo-canvas.png"
        rel="apple-touch-icon">
      <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet">
    <meta property="og:image" content="https://mugshotbot.com/m/DROicc16">
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
-   before `</body>`
    
    search
    
=======

-   before `</body>`

    search

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    ```
    <script>
    let div = window.createElement('div');
    div.id('search');
    div.style = 'z-index:-1; position:absolute;width: 300px;height: 300px;bottom: 0px;right: 25%;left: 50 %;';
    let docscontent = window.getElementByClassName('docs-content');
    docscontent.appendChild(div);
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    let div1 = window.createElement('div');
    div1.id('search');
    div1.style = 'z-index:-1; position:absolute;width: 300px;height: 300px;background:#063;bottom: 0px;right: 25%;left: 50 %;margin-left: -150px';
    let header = window.getElementByClassName('site-header-inside');
    header.appendChild('div1');
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    </script>
    ```
    
-   before `</head>`
    
    mailchimp
    
    ```
    <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/a41d8352dc1deaf4533662699/28d2370bb66d456a5d6411971.js");</script>
    ```
    
-   before `</head>`
    
    google-adds
    
    ```
    <!-- Global site tag (gtag.js) - Google Ads: 389525629 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-389525629"></script>
=======

    </script>
    ```

-   before `</head>`

    mailchimp

    ```
    <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/a41d8352dc1deaf4533662699/28d2370bb66d456a5d6411971.js");</script>
    ```

-   before `</head>`

    google-adds

    ```
    <!-- Global site tag (gtag.js) - Google Ads: 389525629 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-389525629">
</script>
>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
      gtag('config', 'AW-389525629');
    </script>
    <!-- Event snippet for Subscribe conversion page -->
    <script>
      gtag('event', 'conversion', {'send_to': 'AW-389525629/_TJRCMyNpIsDEP3g3rkB'});
    </script>
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
-   before `</body>`
    
    google-search
    
    ```
    <script async src="https://cse.google.com/cse.js?cx=54896af6e2f16ea45"></script>
    <div class="gcse-search"></div>
    ```
    
-   before `</head>`
    
    gs-head-script
    
    ```
    <script async src="https://cse.google.com/cse.js?cx=54896af6e2f16ea45"></script>
    ```
    
-   before `</head>`
    
    jquery
    
    ```
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
    ```
    
-   before `</body>`
    
    search2
    
    ```
    <script>"use strict";
    
=======

-   before `</body>`

    google-search

    ```
    <script async src="https://cse.google.com/cse.js?cx=54896af6e2f16ea45">
</script>
    <div class="gcse-search">
</div>
    ```

-   before `</head>`

    gs-head-script

    ```
    <script async src="https://cse.google.com/cse.js?cx=54896af6e2f16ea45">
</script>
    ```

-   before `</head>`

    jquery

    ```
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous">
</script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous">
</script>
    ```

-   before `</body>`

    search2

    ```
    <script>"use strict";

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    !function() {
        var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDM2MTc3YmNjM2JjNmJiZjk3NzQyYSIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0MTI0MzQxOSwiZXhwIjoxNDI1NTY0MzQxOX0.OxbJg61D899RH4NoK_3pT_DDaY2lw787fLDUS9ZjGuM";
        function e() {
            var e = document.createElement("script"), a = navigator.language || navigator.userLanguage;
            e.type = "text/javascript", e.async = !0, e.src = "https://api.searchbar.org/v1/widget/" + t + "/" + a;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(e, n);
        }
        "complete" === document.readyState ? e() : window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1);
    }();</script>
    <div id='sb-search-example'>
    <div class="sb-search-icon" id="myCustomSearchButtonID">
    <i class="sb-icon">&#xe80a;</i>
    <p>Search</p>
    </div>
    <style>
    @font-face {
                font-family: font-sb;
                src: url(https://api.searchbar.org/fonts/sb.eot?39450784);
                src: url(https://api.searchbar.org/fonts/sb.eot?39450784#iefix) format('embedded-opentype'), url(https://api.searchbar.org/fonts/sb.woff?39450784) format('woff'), url(https://api.searchbar.org/fonts/?39450784) format('truetype'), url(https://api.searchbar.org/fonts/sb.svg?39450784#font-sb) format('svg');
                font-weight: 400;
                font-style: normal
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example p {
                font-family: sans-serif;
                font-size: 18px;
                line-height: 12px;
            margin: 0;
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example {
                position: static;
                top: 0;
                width: auto;
                place-content: center;
                display: inline-block;
                box-shadow: 0px 2px 4px rgba(190, 190, 190, 0.5);
                border: solid 5px white;
                border-radius: 100px;
                flex-shrink: initial;
                flex-grow: initial;
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    
=======


>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example .sb-icon {
                font: normal normal 400 26px font-sb;
                align-items: center;
                padding: 10px;
                speak: none;
                display: inline-block;
                text-decoration: inherit;
                text-align: center;
                text-transform: none;
                cursor: pointer;
                margin: 0;
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example .sb-search-icon {
                box-sizing: border-box;
                border: 0px;
                align-items: center;
                background: #007cff;
                color: #fff;
                cursor: pointer;
                display: flex;
                border-radius: 26px;
                padding: 0 20px 0 4px;
            }
    </style>
    </div>
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
-   before `</head>`
    
    blm
    
    ```
    <!-- Insert makerbadge.js (download or use ☁️cloud version) -->
    
    <script type="text/javascript" src="https://makerbadge.s3.amazonaws.com/blmbadge.js"></script>
    
    <!-- Initialise MakerBadge with options -->
    
=======

-   before `</head>`

    blm

    ```
    <!-- Insert makerbadge.js (download or use ☁️cloud version) -->

    <script type="text/javascript" src="https://makerbadge.s3.amazonaws.com/blmbadge.js">
</script>

    <!-- Initialise MakerBadge with options -->

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <script>
      BLMBadge.init({
           layout:1,
           theme:'dark',
           promoText : 'Send a donation '+String.fromCodePoint(0x2192),
           promoLink : 'https://minnesotafreedomfund.org/',
           message : 'To be silent is to be complicit. Black lives matter.',
           title : '#BlackLivesMatter',
           imageAlt: "Black Lives Matter Badge"
    })
    </script>
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
-   before `</head>`
    
    netlify-identity
    
    ```
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    ```
    
-   before `</head>`
    
    netlify-identity
    
    ```
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    
    
=======

-   before `</head>`

    netlify-identity

    ```
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">
</script>
    ```

-   before `</head>`

    netlify-identity

    ```
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">
</script>


>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    <script>
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    </script>
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
-   before `</head>`
    
    search
    
    ```
    <script>"use strict";
    
=======

-   before `</head>`

    search

    ```
    <script>"use strict";

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    !function() {
        var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQzZmFlY2I2NjkwNWMyZGJkMGVmZCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0MjM0ODUyNiwiZXhwIjoxNDI1Njc0ODUyNn0.VD7Lxgh5cWuOzOhV9KH51TZVdPVXvsIJgRUx-oacfVM";
        function e() {
            var e = document.createElement("script"), a = navigator.language || navigator.userLanguage;
            e.type = "text/javascript", e.async = !0, e.src = "https://api.searchbar.org/v1/widget/" + t + "/" + a;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(e, n);
        }
        "complete" === document.readyState ? e() : window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1);
    }();</script>
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
-   before `</body>`
    
    sb-search
    
=======

-   before `</body>`

    sb-search

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    ```
    <div id='sb-search-example'>
    <div class="sb-search-icon" id="myCustomSearchButtonID">
    <i class="sb-icon">&#xe80a;</i>
    <p>Search</p>
    </div>
    <style>
    @font-face {
                font-family: font-sb;
                src: url(https://api.searchbar.org/fonts/sb.eot?39450784);
                src: url(https://api.searchbar.org/fonts/sb.eot?39450784#iefix) format('embedded-opentype'), url(https://api.searchbar.org/fonts/sb.woff?39450784) format('woff'), url(https://api.searchbar.org/fonts/?39450784) format('truetype'), url(https://api.searchbar.org/fonts/sb.svg?39450784#font-sb) format('svg');
                font-weight: 400;
                font-style: normal
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example p {
                font-family: sans-serif;
                font-size: 18px;
                line-height: 12px;
            margin: 0;
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example {
                position: static;
                bottom: 0;
                width: auto;
                place-content: center;
                display: inline-block;
                box-shadow: 0px 2px 4px rgba(190, 190, 190, 0.5);
                border: solid 5px white;
                border-radius: 100px;
                flex-shrink: initial;
                flex-grow: initial;
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
    
=======


>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example .sb-icon {
                font: normal normal 400 26px font-sb;
                align-items: center;
                padding: 10px;
                speak: none;
                display: inline-block;
                text-decoration: inherit;
                text-align: center;
                text-transform: none;
                cursor: pointer;
                margin: 0;
            }
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======

>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
            #sb-search-example .sb-search-icon {
                box-sizing: border-box;
                border: 0px;
                align-items: center;
                background: #007cff;
                color: #fff;
                cursor: pointer;
                display: flex;
                border-radius: 26px;
                padding: 0 20px 0 4px;
            }
    </style>
    </div>
    ```
<<<<<<< HEAD:notes/docs/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md
    
=======
>>>>>>> master:notes/BGOONZ_BLOG_2.0.wiki/documentation/inject5.md

[Learn more about snippet injection in the docs](https://www.netlify.com/docs/inject-analytics-snippets)

URLs

Pretty URLs

CSS

Bundle & Minify

JS

Bundle & Minify

Images

Lossless compression

**Prerendering enabled with Netlify**

With each deploy, Netlify scans new and changed HTML files for forms to enable handling submissions. If you’re not using Netlify Forms, you can disable form detection to speed up deploy time.

[Learn more about form detection in the docs](https://docs.netlify.com/site-deploys/post-processing/form-detection/)

## [Deploy notifications](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#deploy-notifications)

Set up outgoing webhooks to notify other services about deploys for your site. [Learn more](https://www.netlify.com/docs/webhooks/#outgoing-webhooks-and-notifications)
