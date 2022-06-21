-   ```
      <!-- Insert makerbadge.js (download or use ☁️cloud version) -->

      <script type="text/javascript" src="https://makerbadge.s3.amazonaws.com/blmbadge.js">
</script>

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

    Remove

-   before `</body>`

    addthis

    ```
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946">
</script>

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946">
</script>
    ```

    Remove

-   before `</head>`

    gtag-n-firebase

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
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-M9B63M34E1');
    </script>
    ```

    Remove

-   before `</body>`

    gtag-in-body

    ```
    <!-- Google Tag Manager (noscript) -->
    <noscript>
<iframe  style="-webkit-transform:scale(0.7);-moz-transform-scale(0.7); src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden">
</iframe>
<br>
</noscript>
    <!-- End Google Tag Manager (noscript) -->
    ```

    Remove

-   before `</head>`

    scroll-2-top

    ```
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

    Remove

-   before `</head>`

    original-analytics

    ```
    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
</script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5S5XXNR');</script>
    <!-- End Google Tag Manager -->
    <!-- Google Tag Manager (noscript) -->
    <noscript>
<iframe  style="-webkit-transform:scale(0.7);-moz-transform-scale(0.7); src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden">
</iframe>
<br>
</noscript>
    <!-- End Google Tag Manager (noscript) -->

    <meta name="google-site-verification" content="W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4W5MG3DG4T">
</script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-4W5MG3DG4T');
    </script>

    <script data-ad-client="ca-pub-7131725540181116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
</script>
    ```

    Remove

-   before `</body>`

    goback

    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'>
</a>
    ```

    Remove

-   before `</head>`

    mdn-style

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

    body {
      min-height: 110vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.6
    }

    article>*+* {
      margin-top: 1em
    }

    button,
    input,
    select,
    textarea {
      font: inherit
    }

    @media(prefers-reduced-motion:reduce) {
      * {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
        scroll-behavior: auto !important
      }
    }

    html {
      box-sizing: border-box;
    }

    body {
      font-family: arial, x-locale-body, sans-serif;
      letter-spacing: -.0027777778rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 100%;
      line-height: 1.75
    }

    img {
      height: auto
    }

    @font-face {
      font-display: swap;
      font-family: zillaslab;
      font-style: normal;
      font-weight: 700;
      src: url(/static/media/ZillaSlab-Bold.subset.0beac26b.woff2) format("woff2"), url(/static/media/ZillaSlab-Bold.subset.72026b3c.woff) format("woff")
    }

    @font-face {
      font-display: swap;
      font-family: zillaslab;
      font-style: normal;
      font-weight: 400;
      src: url(/static/media/ZillaSlab-Regular.subset.ce3a756d.woff2) format("woff2"), url(/static/media/ZillaSlab-Regular.subset.7e4c05c9.woff) format("woff")
    }

    h1,
    h2,
    h3 {
      font-family: zillaslab, palatino, "Palatino Linotype", serif;
      line-height: 1.2
    }

    h1 {
      font-size: 1.802rem
    }

    @media (min-width:47.9385em) {
      h1 {
        font-size: 3.052rem
      }
    }

    h2 {
      font-size: 1.602rem
    }

    @media (min-width:47.9385em) {
      h2 {
        font-size: 2.441rem
      }
    }

    h3 {
      font-size: 1.424rem;

      font-family: zillaslab, palatino, "Palatino Linotype", serif;
      font-weight: 400;
      max-width: -webkit-max-content;
      max-width: -moz-max-content;
      max-width: max-content;
      padding: 0 6px;
      margin: 24px 0
    }

    @media (min-width:47.9385em) {
      h3 {
        font-size: 1.953rem
      }
    }

    h4 {
      font-size: 1.266rem
    }

    @media (min-width:47.9385em) {
      h4 {
        font-size: 1.563rem
      }
    }

    h5 {
      font-size: 1.125rem
    }

    @media (min-width:47.9385em) {
      h5 {
        font-size: 1.25rem
      }
    }

    p {
      margin-bottom: 24px
    }

    a:link,
    a:visited {

      text-decoration: none
    }

    a:link:active,
    a:link:focus,
    a:link:hover,
    a:visited:active,
    a:visited:focus,
    a:visited:hover {
      text-decoration: underline
    }

    blockquote {
      max-width: 45rem;
      max-width: 85ch;
      font-size: 1.125rem;
      font-family: zillaslab, palatino, "Palatino Linotype", serif;
      font-weight: 400;
      margin-bottom: 24px
    }

    @media (min-width:47.9385em) {
      blockquote {
        font-size: 1.25rem
      }
    }

    blockquote:after,
    blockquote:before {
      background-image: linear-gradient(90deg, #00356a, #83d0f2);
      content: "";
      display: block;
      height: 5px;
      margin-bottom: 12px
    }

    blockquote:after {
      margin-top: 12px
    }

    blockquote p:last-of-type {
      margin-bottom: 0
    }

    a {

      text-decoration: none
    }

    a:focus,
    a:hover {
      text-decoration: underline
    }

    a code {
      -webkit-text-decoration-skip-ink: none;
      text-decoration-skip-ink: none
    }

    dl dt {
      font-weight: 700
    }

    dl dd {
      margin: 0 24px 24px
    }

    </style>
    ```

    Remove

-   before `</head>`

    meta

    ```
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
      <link
        href="https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/favicon.png"
        rel="apple-touch-icon">
      <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet">
    ```

    Remove

-   before `</head>`

    meta

    ```
    <meta name="google-site-verification" content="q5W83EYchlVTyA-iYRE4ElQGcbD_vukQF0NKW12N3qU" />
    ```

    Remove

-   before `</head>`

    back to top css

    ```
    <style>

    .intro-copy {
      padding: 1em;
      margin: 50vh auto;
      max-width: 15em;
      font-family: Helvetica;
      font-weight: lighter;
      font-size: 2em;
      line-height: 1.2;
      text-align: center;
    }

    .top-link {
      transition: all .25s ease-in-out;
      position: fixed;
      bottom: 0;
      right: 0;
      display: inline-flex;

    	cursor: pointer;
    	align-items: center;
    	justify-content: center;
    	margin: 0 3em 3em 0;
    	border-radius: 50%;
    	padding: .25em;
    	width: 80px;
    	height: 80px;
      background-color: #F8F8F8;

      &.show {
        visibility: visible;
        opacity: 1;
      }

      &.hide {
        visibility: hidden;
        opacity: 0;
      }

    	svg {
    		fill: #000;
    		width: 24px;
    		height: 12px;
    	}

    	&:hover {
    		background-color: #E8E8E8;

    		svg {
    			fill: #000000;
    		}
    	}
    }

    // Text meant only for screen readers.
    .screen-reader-text {
    	position: absolute;
    	clip-path: inset(50%);
    	margin: -1px;
    	border: 0;
    	padding: 0;
    	width: 1px;
    	height: 1px;
    	overflow: hidden;
    	word-wrap: normal !important;
    	clip: rect(1px, 1px, 1px, 1px);

    	&:focus {
    		display: block;
    		top: 5px;
    		left: 5px;
    		z-index: 100000; // Above WP toolbar
    		clip-path: none;
    		background-color: #eee;
    		padding: 15px 23px 14px;
    		width: auto;
    		height: auto;
    		text-decoration: none;
    		line-height: normal;
    		color: #444;
    		font-size: 1em;
    		clip: auto !important;
    	}
    }
    </style>
    ```

    Remove

-   before `</body>`

    print2pdf

    ```
    <a href="//pdfcrowd.com/url_to_pdf/?"
    onclick="if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1">
    Save to PDF
    </a>
    ```

    Remove

-   before `</body>`

    scroll2topsvg

    ```
    <!-- google-site-verification: googled2b1865dedd985a4.html -->

    <script async>

        // Set a variable for our button element.
        const scrollToTopButton = document.getElementById('js-top');

        // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
        const scrollFunc = () => {
            // Get the current scroll value
            let y = window.scrollY;

            // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
            if (y > 0) {
                scrollToTopButton.className = "top-link show";
            } else {
                scrollToTopButton.className = "top-link hide";
            }
        };

        window.addEventListener("scroll", scrollFunc);

        const scrollToTop1 = () => {
            // Let's set a variable for the number of pixels we are from the top of the document.
            const c = document.documentElement.scrollTop || document.body.scrollTop;

            // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
            // We'll also animate that scroll with requestAnimationFrame:
            // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop1);
                // ScrollTo takes an x and a y coordinate.
                // Increase the '10' value to get a smoother/slower scroll!
                window.scrollTo(0, c - c / 10);
            }
        };

        // When the button is clicked, run our ScrolltoTop function above!
        scrollToTopButton.onclick = function (e) {
            e.preventDefault();
            scrollToTop1();
        }

    </script>

    <div>
    <a class="top-link hide" href="" id="js-top">
        <span class="screen-reader-text">Back to top</span>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
<path d="M12 6H0l6-6z"/>
</svg>
    </a>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async defer>

    </script>
    <script type="text/javascript">
        function hideLoader() {
            $('#loading').hide();
        }
        $(window).ready(hideLoader);
        // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
        setTimeout(hideLoader, 10 * 1000);
        $(window).on('beforeunload', function () {
            $(window).scrollTop(0);
        });
    </script>

    <script>
        $(window).scroll(function () {
            $("#back").stop().animate({
                "marginTop": ($(window).scrollTop()) + "px",
                "marginLeft": ($(window).scrollLeft()) + "px"
            }, "slow");
        });
    </script>
    <script>
        window.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM fully loaded and parsed');
            const scrollToTop = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                    window.requestAnimationFrame(scrollToTop);
                    window.scrollTo(0, c - c / 8);
                }
            };
            scrollToTop();
        });

    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async defer>

    </script>
    <script type="text/javascript">
        function hideLoader() {
            $('#loading').hide();
        }
        $(window).ready(hideLoader);
        // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
        setTimeout(hideLoader, 10 * 1000);
        $(window).on('beforeunload', function () {
            $(window).scrollTop(0);
        });
    </script>

    <script>
        $(window).scroll(function () {
            $("#back").stop().animate({
                "marginTop": ($(window).scrollTop()) + "px",
                "marginLeft": ($(window).scrollLeft()) + "px"
            }, "slow");
        });
    </script>
    <script>
        window.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM fully loaded and parsed');
            const scrollToTop1 = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                    window.requestAnimationFrame(scrollToTop1);
                    window.scrollTo(0, c - c / 8);
                }
            };
            scrollToTop1();
        });

    </script>
    ```

    Remove

-   before `</body>`

    tawk-chat

    ```
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/613041ecd6e7610a49b3326a/1feidq23q';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    </script>
    <!--End of Tawk.to Script-->
    ```

    Remove

-   before `</head>`

    firebase-cdn

    ```
    <script type="module">
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyDHEGb8XzHTqWyHezNyXGFRRwVZbvQmd3E",
        authDomain: "bgoonzblog20.firebaseapp.com",
        projectId: "bgoonzblog20",
        storageBucket: "bgoonzblog20.appspot.com",
        messagingSenderId: "44896241794",
        appId: "1:44896241794:web:81523d6aa975fccb51cc9b",
        measurementId: "G-F56YP2Y17L"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
    </script>
    ```

    Remove

-   before `</head>`

    add-this-suggested-pages

    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946">
</script>
    ```

    Remove

-   before `</body>`

    auth-firestore-cloud

    ```
    <script>// Allow read/write access on all documents to any user signed in to the application
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if request.auth != null;
        }
      }
    }
    </script>
    ```

    Remove

-   before `</head>`

    analytics

    ```
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-F56YP2Y17L">
</script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-F56YP2Y17L');
    </script>
    ```

    Remove

-   before `</head>`

    search-script

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js">
</script>
    <script type="text/javascript">
      algoliasearchNetlify({
        appId: 'O6OT9G9U8Z',
        apiKey: 'b0cb3d390176e1ff4bd1ecb12fc15730',
        siteId: 'a1b7ee1a-11a7-4bd2-a341-2260656e216f',
        branch: 'master',
        selector: 'div#search',
      });
    </script>
    ```

    Remove

-   before `</head>`

    more-meta-tags-open-graph

    ```
    <!-- HTML Meta Tags -->
    <title>Web-Dev-Hub</title>
    <meta name="description" content="my resource sharing and blog site ... centered mostly on web development and just a bit of audio production / generally nerdy things I find interesting.">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://bgoonz-blog.netlify.app/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Web-Dev-Hub">
    <meta property="og:description" content="my resource sharing and blog site ... centered mostly on web development and just a bit of audio production / generally nerdy things I find interesting.">
    <meta property="og:image" content="https://bgoonz-blog.netlify.app/images/code.png">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="bgoonz-blog.netlify.app">
    <meta property="twitter:url" content="https://bgoonz-blog.netlify.app/">
    <meta name="twitter:title" content="Web-Dev-Hub">
    <meta name="twitter:description" content="my resource sharing and blog site ... centered mostly on web development and just a bit of audio production / generally nerdy things I find interesting.">
    <meta name="twitter:image" content="https://bgoonz-blog.netlify.app/images/code.png">
    ```

    Remove

-   before `</body>`

    simpleanalytics

    ```
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js">
</script>
    <noscript>
<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />
</noscript>
    ```

    Remove

-   before `</head>`

    metaaaa

    ```
    <meta property="og:image" content="https://mugshotbot.com/m/DROicc16">
    <meta property="twitter:card" content="summary_large_image">
    ```

    Remove

[Learn more about snippet injection in the docs](https://www.netlify.com/docs/inject-analytics-snippets)

Add snippet

### [Asset optimization](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#asset-optimization)

URLs

Pretty URLs

CSS

Bundle & Minify

JS

Bundle & Minify

Images

Lossless compression

Edit settings

### [Prerendering](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#prerendering)

Beta

Prerendering enabled with Netlify

Edit settings

### [Form detection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#form-detection)

With each deploy, Netlify scans new and changed HTML files for forms to enable handling submissions. If you're not using Netlify Forms, you can disable form detection to speed up deploy time.

[Learn more about form detection in the docs](https://docs.netlify.com/site-deploys/post-processing/form-detection/)

Edit settings

## [Deploy notifications](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#deploy-notifications)

Set up outgoing webhooks to notify other services about deploys for your site. [Learn more](https://www.netlify.com/docs/webhooks/#outgoing-webhooks-and-notifications)

### [Outgoing notifications](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#outgoing-notifications)

Add notification

-   Post to https://api.stackbit.com/project/609b2d7c71a5dd0016f36326/webhook/netlify when deploy starts

    Options

-   Post to https://api.stackbit.com/project/609b2d7c71a5dd0016f36326/webhook/netlify when deploy succeeds

    Options

-   Post to https://api.stackbit.com/project/609b2d7c71a5dd0016f36326/webhook/netlify when deploy fails

    Options

-   Add rich details to commits when Deploy Preview starts

    Options

-   Add rich details to commits when Deploy Preview succeeds

    Options

-   Add rich details to commits when Deploy Preview fails

    Options

-   Email bryan.guner@gmail.com when deploy request is pending

    Options

-   Email bryan.guner@gmail.com when deploy request is accepted

    Options

-   Email bryan.guner@gmail.com when deploy request is rejected

    Options

-   [Docs](https://www.netlify.com/docs/)
-   [Pricing](https://www.netlify.com/pricing/)
-   [Support](https://www.netlify.com/support)
-   [News](https://www.netlify.com/news/)
-   [Terms](https://www.netlify.com/tos/)

© 2021 Netlify
