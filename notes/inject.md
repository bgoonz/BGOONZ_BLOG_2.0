## [Post processing](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#post-processing)

Control the post processing and optimizations Netlify can do for you

### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   before `</body>`

    goback

```html
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>
```

    
---


-   before `</body>`

    addthis

```html
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
```

    
---


-   before `</body>`

    mobil-qr

```html
    <a  href="https://bgoonzblog20master.gatsbyjs.io/"><img src="https://qrickit.com/api/qr.php?d=https%3A%2F%2Fbgoonzblog20master.gatsbyjs.io%2F&addtext=Click+For+Mobil+Version&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=25&t=p&e=h" style="position: fixed;bottom: 100px;right:20px;"></a>
```

    
---


-   before `</head>`

    ukraine

```html
    <script id="help-ukraine-win" async="true" src="https://helpukrainewinwidget.org/cdn/widget.js?type=four&position=middle-right&layout=main"></script>
```

    
---


-   before `</head>`

    google analytics tag

```html
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-90VG64DEP3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-90VG64DEP3');
    </script>
```

    
---


-   before `</head>`

    algolia

```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
    <script type="text/javascript">
      algoliasearchNetlify({
        appId: 'N6ETRP7SGS',
        apiKey: '4481f47882b21c3b05de5780fe166222',
        siteId: 'a1b7ee1a-11a7-4bd2-a341-2260656e216f',
        branch: 'master',
        selector: 'div#search',
      });
    </script>
```

    
---


-   before `</body>`

    pdf2

```html
    <a href="//pdfcrowd.com/url_to_pdf/?"
       onclick="if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1">
       Save to PDF
    </a>
```

    
---


-   before `</head>`

    algolia

```html
    <script type="text/javascript">
      algoliasearchNetlify({
        appId: '949NYEDSIQ',
        apiKey: '4481f47882b21c3b05de5780fe166222',
        siteId: '865c330e-e1e9-40b8-8420-bf603640b0fe',
        branch: 'master',
        selector: 'div#search',
      });
    </script>
```

    
---


-   before `</body>`

    fb-sdk

```html
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=951130702132399&autoLogAppEvents=1" nonce="C29xl8PQ"></script>
```

    
---


[Learn more about snippet injection in the docs](https://www.netlify.com/docs/inject-analytics-snippets)

Add snippet
