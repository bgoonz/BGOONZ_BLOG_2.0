## [Post processing](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#post-processing)

Control the post processing and optimizations Netlify can do for you

### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   before `</body>`

    goback

    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>
    ```



-   before `</body>`

    addthis

    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```



-   before `</body>`

    search

    ```
    <script>
    let div = window.createElement('div');
    div.id('search');
    div.style = 'z-index:-1; position:absolute;width: 300px;height: 300px;bottom: 0px;right: 25%;left: 50 %;';
    let docscontent = window.getElementByClassName('docs-content');
    docscontent.appendChild(div);
    
    let div1 = window.createElement('div');
    div1.id('search');
    div1.style = 'z-index:-1; position:absolute;width: 300px;height: 300px;background:#063;bottom: 0px;right: 25%;left: 50 %;margin-left: -150px';
    let header = window.getElementByClassName('site-header-inside');
    header.appendChild('div1');
    
    </script>
    ```



-   before `</body>`

    back-2-top

    ```
    <script>
              // Get the button:
              mybutton = document.getElementById("scrollBtn");
              // When the user scrolls down 20px from the top of the document, show the button
              window.onscroll = function () {
                scrollFunction();
              };
              function scrollFunction() {
                if (
                  document.body.scrollTop > 20 ||
                  document.documentElement.scrollTop > 20
                ) {
                  mybutton.style.display = "block";
                } else {
                  mybutton.style.display = "none";
                }
              }
              // When the user clicks on the button, scroll to the top of the document
              function topFunction() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
              }
            </script>
            <script>
              window.addEventListener("DOMContentLoaded", (event) => {
                console.log("DOM fully loaded and parsed");
                const scrollToTop = () => {
                  const c =
                    document.documentElement.scrollTop || document.body.scrollTop;
                  if (c > 0) {
                    window.requestAnimationFrame(scrollToTop);
                    window.scrollTo(0, c - c / 8);
                  }
                };
                scrollToTop();
              });
            </script>
    <button id="scrollBtn" title="Go to top" onclick="topFunction()" style="display: block;">
              Back To Top
            </button>
    ```



-   before `</head>`

    google-verification

    ```
    <meta name="google-site-verification" content="W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ" />
    ```



-   before `</head>`

    scroolbar

    ```
    <script>"use strict";
    
    !function() {
        var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDM2MTc3YmNjM2JjNmJiZjk3NzQyYSIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0NzAwMzU3MiwiZXhwIjoxNDI2MTQwMzU3Mn0.JHNG9SDQmRjMzEgwIc7hrLHGdrMI5mbAenuhDUKXrFM";
        function e() {
            var e = document.createElement("script"), a = navigator.language || navigator.userLanguage;
            e.type = "text/javascript", e.async = !0, e.src = "https://api.searchbar.org/v1/widget/" + t + "/" + a;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(e, n);
        }
        "complete" === document.readyState ? e() : window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1);
    }();</script>
    ```



-   before `</body>`

    mobil-qr

    ```
    <a  href="https://bgoonzblog20master.gatsbyjs.io/"><img src="https://qrickit.com/api/qr.php?d=https%3A%2F%2Fbgoonzblog20master.gatsbyjs.io%2F&addtext=Click+For+Mobil+Version&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=25&t=p&e=h" style="position: fixed;bottom: 100px;right:20px;"></a>
    ```



-   before `</head>`

    utterance-issue-comments

    ```
    <script src="https://utteranc.es/client.js"
            repo="bgoonz/BGOONZ_BLOG_2.0"
            issue-term="url"
            label="comment"
            theme="github-light"
            crossorigin="anonymous"
            async>
    </script>
    ```



-   before `</head>`

    algolia-serch

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
    <script type="text/javascript">
      algoliasearchNetlify({
        appId: 'N6ETRP7SGS',
        apiKey: '842a47eb7f31e1b926a798f74d15daf5',
        siteId: 'a1b7ee1a-11a7-4bd2-a341-2260656e216f',
        branch: 'master',
        selector: 'div#search',
      });
    </script>
    ```



-   before `</head>`

    g-tag

    ```
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4W5MG3DG4T"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-4W5MG3DG4T');
    </script>
    ```



-   before `</head>`

    g-search

    ```
    <script async src="https://cse.google.com/cse.js?cx=54896af6e2f16ea45"></script>
    ```



-   before `</head>`

    ukraine

    ```
    <script id="help-ukraine-win" async="true" src="https://helpukrainewinwidget.org/cdn/widget.js?type=four&position=middle-right&layout=main"></script>
    ```



-   before `</head>`

    google analytics tag

    ```
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-90VG64DEP3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-90VG64DEP3');
    </script>
    ```



-   before `</body>`

    news feed

    ```
    <rssapp-carousel id="tgbIN4OC65j1CNyo"></rssapp-carousel><script src="https://widget.rss.app/v1/carousel.js" type="text/javascript" async></script>
    ```



-   before `</head>`

    algolia

    ```
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



-   before `</head>`

    ig feed

    ```
    <script src="https://widget.rss.app/v1/imageboard.js" type="text/javascript" async></script>
    ```


