### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.---

-   before `</body>`

    scroll2top

    ```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async defer>

      </script>
      <script type="text/javascript">
        function hideLoader() {
          $( '#loading' ).hide();
        }
        $( window ).ready( hideLoader );
        // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
        setTimeout( hideLoader, 10 * 1000 );
        $( window ).on( 'beforeunload', function () {
          $( window ).scrollTop( 0 );
        } );
      </script>

      <script>
        $( window ).scroll( function () {
          $( "#back" ).stop().animate( {
            "marginTop": ( $( window ).scrollTop() ) + "px",
            "marginLeft": ( $( window ).scrollLeft() ) + "px"
          }, "slow" );
        } );
      </script>
    ```

---

-   before `</body>`

    spotify

    ```html
    <iframe src="https://open.spotify.com/embed/playlist/2VojZ70yfWaSeVfY2gjwVC?theme=0" width="100%" height="80" style="   position: fixed;bottom: 50;right: 50;"frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    ```

---

-   before `</body>`

    scroll2-vanilla

    ```html
    <script>
            window.addEventListener( 'DOMContentLoaded', ( event ) => {
              console.log( 'DOM fully loaded and parsed' );
              const scrollToTop = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if ( c > 0 ) {
                  window.requestAnimationFrame( scrollToTop );
                  window.scrollTo( 0, c - c / 8 );
                }
              };
              scrollToTop();
            } );

          </script>
    ```

---

-   before `</body>`

    blm

    ```html
    <!-- Insert makerbadge.js (download or use ☁️cloud version) -->

    <script type="text/javascript" src="https://makerbadge.s3.amazonaws.com/blmbadge.js"></script>

    <!-- Initialise MakerBadge with options -->

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

---

-   before `</head>`

    iframe-style

    ```html
    <style>

    iframe{
    overflow-y: scroll!important;
    overflow-x: scroll!important;
    border-radius:26px;
    border: 3px solid gold;
    height:1100px;
    width:100%;
    margin:auto;
    text-align:center;
    align-self:center;
    </style>
    ```

---

-   before `</body>`

    addThis

    ```html
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

---

-   before `</head>`

    analytics-n-addsense

    ```html
    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5S5XXNR');</script>
    <!-- End Google Tag Manager -->
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <meta name="google-site-verification" content="W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4W5MG3DG4T"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-4W5MG3DG4T');
    </script>

    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    ```

---

-   before `</head>`

    netlify-oauth

    ```html
    <!--- This example uses jQuery: -->
      <script src="https://code.jquery.com/jquery-1.11.2.js"></script>

      <!-- Make sure to include Nelify's authentication library -->
      <!-- Also available via npm as netlify-auth-providers -->
      <script src="https://unpkg.com/netlify-auth-providers"></script>

      <script>
        $(function() {
          $("#login").on("click", function(e) {
            e.preventDefault();
            var authenticator = new netlify.default ({});
            authenticator.authenticate({provider:"github", scope: "user"}, function(err, data) {
              if (err) {
                return $("#output").text("Error Authenticating with GitHub: " + err);
              }
              $("#output").text("Authenticated with GitHub. Access Token: " + data.token);
            });
          });
        });
      </script>
    ```

---

-   before `</body>`

    github-netlify-oauth

    ```html
    <h1>GitHub Auth Demo:</h1>
      <p><a href="#" id="login">Authenticate</a></p>
      <p id="output"></p>
    ```

---

-   before `</body>`

    content-authoring

    ```html
    <script src="https://unpkg.com/netlify-cms@beta/dist/netlify-cms.js"></script>
    ```

---

-   before `</head>`

    Algolia-Search

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
    <script type="text/javascript">
      algoliasearchNetlify({
        appId: 'BAGY237H21',
        apiKey: '5f5a2d1bb109c79803ca95250ca3496c',
        siteId: 'a1b7ee1a-11a7-4bd2-a341-2260656e216f',
        branch: 'master',
        selector: 'div#search',
      });
    </script>
    ```

---

-   before `</body>`

    searcg

    ```html
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div id="search"></div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    ```

 ---

-   before `</head>`

    algolia-search-cdn

    ```html
    <script src="https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js"></script>
    ```

