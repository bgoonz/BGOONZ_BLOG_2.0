
---

# Current (March 2022):

<details>

<summary>  March 2022  </summary>   


### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   before `</body>`

    goback

    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>
    ```

    Remove

-   before `</head>`

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

-   before `</body>`

    stackbit-widget

    ```
    <script src="https://widget.stackbit.com/init.js" id="stackbit-widget-init" data-stackbit-project-id="609b2d7c71a5dd0016f36326"></script>
    ```

    Remove

-   before `</body>`

    addthis

    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</head>`

    meta

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

    Remove

-   before `</body>`

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

    Remove

-   before `</head>`

    mailchimp

    ```
    <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/a41d8352dc1deaf4533662699/28d2370bb66d456a5d6411971.js");</script>
    ```

    Remove

-   before `</head>`

    search

    ```
    <script>"use strict";

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

    Remove

-   before `</body>`

    stat

    ```
    <!-- Default Statcounter code for 2
    https://bgoonz-blog.netlify.app/ -->
    <script type="text/javascript">
    var sc_project=12702211;
    var sc_invisible=0;
    var sc_security="011fbeb6";
    var sc_text=3;
    var scJsHost = "https://";
    document.write("<sc"+"ript type='text/javascript' src='" +
    scJsHost+
    "statcounter.com/counter/counter.js'></"+"script>");
    </script>
    <noscript><div class="statcounter"><a title="Web Analytics"
    href="https://statcounter.com/" target="_blank"><img
    class="statcounter"
    src="https://c.statcounter.com/12702211/0/011fbeb6/0/"
    alt="Web Analytics"
    referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>
    <!-- End of Statcounter Code -->
    <a href="https://statcounter.com/p12702211/?guest=1">View My
    Stats</a>
    ```

    Remove

-   before `</head>`

    sc-search-style

    ```
    <style>
    		@font-face {
                font-family: font-sb;
                src: url(https://api.searchbar.org/fonts/sb.eot?39450784);
                src: url(https://api.searchbar.org/fonts/sb.eot?39450784#iefix) format('embedded-opentype'), url(https://api.searchbar.org/fonts/sb.woff?39450784) format('woff'), url(https://api.searchbar.org/fonts/?39450784) format('truetype'), url(https://api.searchbar.org/fonts/sb.svg?39450784#font-sb) format('svg');
                font-weight: 400;
                font-style: normal
            }

            #sb-search-example p {
                font-family: sans-serif;
                font-size: 18px;
                line-height: 12px;
    	        margin: 0;
            }

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
    ```

    Remove

-   before `</body>`

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

    Remove

-   before `</head>`

    scroll-css

    ```
    <style>
    #scrollBtn {
      display: none;
      position: fixed;
      bottom: 140px;
      right: 20px;
      z-index: 99;
      border: 1px black solid;
      outline: none;
      background-color: #044274;
      color: white;
      cursor: pointer;
      padding: 5px;
      border-radius: 28px;
      font-size: 12px;
    }

    #scrollBtn:hover {
      background-color: #ffffff;
    color:#000000;
    }

    </style>
    ```

    Remove

-   before `</head>`

    more-style

    ```
    <style>
    a {
      text-decoration: none;
      color: #007edf;
      text-shadow: none;

      transition: color 0.5s ease;
      transition: text-shadow 0.5s ease;
      -webkit-transition: color 0.5s ease;
      -webkit-transition: text-shadow 0.5s ease;
      -moz-transition: color 0.5s ease;
      -moz-transition: text-shadow 0.5s ease;
      -o-transition: color 0.5s ease;
      -o-transition: text-shadow 0.5s ease;
      -ms-transition: color 0.5s ease;
      -ms-transition: text-shadow 0.5s ease;
    }
    a:hover, a:focus {text-decoration: underline;}

    footer a {
      color: #F2F2F2;
      text-decoration: underline;
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: bold;
    }
    pre {
      width: 100%;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,.1);
      overflow: auto;
    }

    code {
      padding: 3px;
      margin: 0 3px;
      box-shadow: 0 0 10px rgba(0,0,0,.1);
    }

    pre code {
      display: block;
      box-shadow: none;
    }

    blockquote {
      color: #666;
      margin-bottom: 20px;
      padding: 0 0 0 20px;
      border-left: 3px solid #bbb;
    }
    </style>
    ```

    Remove

-   before `</head>`

    lazysizes

    ```
    <script>

    /*! lazysizes - v5.3.2 */

    !function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

    </script>
    ```

    Remove

-   before `</body>`

    add-this-2

    ```
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</head>`

    google-verification

    ```
    <meta name="google-site-verification" content="W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ" />
    ```

</details>


---
---



```html


<!DOCTYPE html>

<head>
  <script type="text/javascript" async=""
    src="https://cdn.segment.com/analytics.js/v1/psESldTce1HYTTWQQAoFrBYNgGuCN1a7/analytics.min.js"></script>
  <script type="text/javascript"
    src="//www.reddit.com/api/info.json?url=http%3A%2F%2Fbgoonz-blog.netlify.app%2F&amp;jsonp=_ate.cbs.rcb_2pvm0">
  </script>
  <script type="text/javascript"
    src="//widgets.pinterest.com/v1/urls/count.json?url=http%3A%2F%2Fbgoonz-blog.netlify.app%2F&amp;callback=window._ate.cbs.rcb_kkpw0">
  </script>
  <script type="text/javascript"
    src="//www.reddit.com/api/info.json?url=https%3A%2F%2Fbgoonz-blog.netlify.app%2F&amp;jsonp=_ate.cbs.rcb_j30r0">
  </script>
  <script type="text/javascript"
    src="//widgets.pinterest.com/v1/urls/count.json?url=https%3A%2F%2Fbgoonz-blog.netlify.app%2F&amp;callback=window._ate.cbs.rcb_her70">
  </script>
  <script src="https://www.googletagservices.com/activeview/js/current/osd.js"></script>
  <script
    src="https://partner.googleadservices.com/gampad/cookie.js?domain=bgoonz-blog.netlify.app&amp;callback=_gfp_s_&amp;client=ca-pub-7131725540181116">
  </script>
  <script src="https://pagead2.googlesyndication.com/pagead/js/r20210630/r20190131/show_ads_impl_fy2019.js"
    id="google_shimpl"></script>
  <script type="text/javascript"
    src="https://m.addthis.com/live/red_lojson/300lo.json?si=60e2cf40b497a87e&amp;bkl=0&amp;bl=1&amp;pdt=675&amp;sid=60e2cf40b497a87e&amp;pub=ra-60dcec1ece575946&amp;rev=v8.28.8-wp&amp;ln=en&amp;pc=men&amp;cb=0&amp;ab=-&amp;dp=bgoonz-blog.netlify.app&amp;fp=&amp;fr=&amp;of=0&amp;pd=0&amp;irt=1&amp;vcl=1&amp;md=0&amp;ct=1&amp;tct=0&amp;abt=0&amp;cdn=0&amp;pi=1&amp;rb=0&amp;gen=100&amp;chr=UTF-8&amp;colc=1625476929321&amp;jsl=0&amp;uvs=60e2cb25d63ee14f002&amp;skipb=1&amp;callback=addthis.cbs.jsonp__066477063981568830">
  </script>
  <script type="text/javascript" src="https://v1.addthisedge.com/live/boost/ra-60dcec1ece575946/_ate.track.config_resp">
  </script>
  <script type="text/javascript" src="https://z.moatads.com/addthismoatframe568911941483/moatframe.js"></script>
  <style data-href="/styles.7849c6e349c9cbd7435c.css" id="gatsby-global-css">
    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%
    }

    body {
      margin: 0
    }

    main {
      display: block
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible
    }

    a {
      background-color: transparent
    }

    a:focus {
      outline: thin dotted
    }

    a:active,
    a:hover {
      outline: 0
    }

    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted
    }

    b,
    strong {
      font-weight: 700
    }

    .font-fira-sans b,
    .font-fira-sans strong {
      font-weight: 600
    }

    code,
    kbd,
    pre,
    samp {
      font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
      font-size: 1em
    }

    small {
      font-size: 80%
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline
    }

    sub {
      bottom: -.25em
    }

    sup {
      top: -.5em
    }

    img {
      border-style: none;
      vertical-align: middle
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0
    }

    button,
    input {
      overflow: visible
    }

    button,
    select {
      text-transform: none
    }

    [type=button],
    [type=reset],
    [type=submit],
    button {
      -webkit-appearance: button
    }

    [type=button]::-moz-focus-inner,
    [type=reset]::-moz-focus-inner,
    [type=submit]::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0
    }

    [type=button]:-moz-focusring,
    [type=reset]:-moz-focusring,
    [type=submit]:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText
    }

    fieldset {
      padding: .35em .75em .625em
    }

    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal
    }

    progress {
      vertical-align: baseline
    }

    textarea {
      overflow: auto
    }

    [type=checkbox],
    [type=radio] {
      box-sizing: border-box;
      padding: 0
    }

    [type=number]::-webkit-inner-spin-button,
    [type=number]::-webkit-outer-spin-button {
      height: auto
    }

    [type=search] {
      -webkit-appearance: textfield;
      outline-offset: -2px
    }

    [type=search]::-webkit-search-decoration {
      -webkit-appearance: none
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit
    }

    details {
      display: block
    }

    summary {
      display: list-item
    }

    [hidden],
    template {
      display: none
    }

    html {
      font-family: Lato, Helvetica, Arial, sans-serif;
      font-size: 100%
    }

    body {
      background: #f8f8fa;
      color: #424b5f;
      line-height: 1.625;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased
    }

    a {
      color: #00c6ff;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: .125em;
      transition: color .3s ease
    }

    a:hover {
      color: #424b5f
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #283040;
      font-weight: 700;
      line-height: 1.2;
      margin: 1.5em 0 .5em;
      text-rendering: optimizeLegibility
    }

    h1:first-child,
    h2:first-child,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child {
      margin-top: 0
    }

    h1 {
      font-size: 2em
    }

    h2 {
      font-size: 1.75em
    }

    h3 {
      font-size: 1.5em
    }

    h4 {
      font-size: 1.25em
    }

    h5 {
      font-size: 1.125em
    }

    h6 {
      font-size: 1em
    }

    p {
      margin: 0 0 1em
    }

    ins,
    mark {
      background: #fff7e6;
      color: #283040;
      padding: .15em;
      text-decoration: none
    }

    pre {
      background: #283040;
      border-radius: 3px;
      color: #f8f8fa;
      font-size: .875em;
      line-height: 1.5;
      margin: 2.14286em 0;
      overflow: auto;
      padding: 1.5em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal
    }

    pre:first-child {
      margin-top: 0
    }

    :not(pre)>code {
      background: #ecedf2;
      border-radius: 3px;
      color: #424b5f;
      font-size: .875rem;
      padding: .15em;
      white-space: normal
    }

    blockquote {
      border-left: 5px solid #00c6ff;
      font-size: 1.25em;
      line-height: 1.4;
      margin: 1.25em 0;
      padding: 0 0 0 1em
    }

    blockquote:first-child {
      margin-top: 0
    }

    blockquote p {
      margin-bottom: .5em
    }

    blockquote cite,
    blockquote small {
      color: #67758d;
      display: block;
      font-size: .75em;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
      margin-top: .5em
    }

    dl {
      margin: 0
    }

    dt {
      font-weight: 700
    }

    dd,
    ol,
    ul {
      margin: 0 0 1em
    }

    ul {
      list-style: disc;
      padding: 0 0 0 1.125em
    }

    ol {
      list-style: decimal;
      padding: 0 0 0 1.5em
    }

    li>ol,
    li>ul {
      margin-bottom: 0
    }

    hr {
      background-color: #dde0e7;
      border: 0;
      height: 1px;
      margin: 1.875em 0
    }

    hr:first-child {
      margin-top: 0
    }

    embed,
    iframe,
    object,
    video {
      max-width: 1400px !important
    }

    img {
      height: auto;
      max-width: 100%
    }

    @media only screen and (min-width:641px) {
      blockquote {
        font-size: 1.5em;
        line-height: 1.3
      }

      h1 {
        font-size: 2.5em
      }

      h2 {
        font-size: 2.125em
      }

      h3 {
        font-size: 1.875em
      }

      h4 {
        font-size: 1.5em
      }

      h5 {
        font-size: 1.25em
      }

      h6 {
        font-size: 1.125em
      }
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      line-height: 1.5;
      margin: 0;
      max-width: 100%;
      width: 100%
    }

    caption,
    table {
      text-align: left
    }

    caption {
      color: #67758d;
      font-size: .875em;
      font-style: normal;
      margin-bottom: 1em
    }

    td,
    th {
      border-bottom: 1px solid #dde0e7;
      padding: .5em 5px
    }

    th {
      color: #283040;
      font-weight: 700
    }

    :not(.responsive-table)>table {
      display: block;
      margin: 1.875em 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch
    }

    :not(.responsive-table)>table:first-child {
      margin-top: 0
    }

    :not(.responsive-table)>table tbody,
    :not(.responsive-table)>table thead,
    :not(.responsive-table)>table tr {
      width: 100%
    }

    :not(.responsive-table)>table td {
      min-width: 10em
    }

    .responsive-table {
      display: block;
      margin: 1.875em 0;
      overflow-x: auto;
      width: 100%
    }

    .responsive-table:first-child {
      margin-top: 0
    }

    label {
      color: #283040;
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: .25em
    }

    input[type=checkbox]+label,
    input[type=radio]+label {
      font-weight: 400;
      cursor: pointer;
      padding-left: .25em;
      padding-right: 1em
    }

    input[type=email],
    input[type=number],
    input[type=password],
    input[type=search],
    input[type=tel],
    input[type=text],
    input[type=url],
    select,
    textarea {
      background: #fff;
      border: 1px solid #dde0e7;
      border-radius: 3px;
      box-shadow: none;
      box-sizing: border-box;
      color: #283040;
      display: block;
      font-size: 1em;
      font-weight: 400;
      line-height: 1.5;
      max-width: 100%;
      padding: .5em;
      width: 100%
    }

    input[type=email]:focus,
    input[type=number]:focus,
    input[type=password]:focus,
    input[type=search]:focus,
    input[type=tel]:focus,
    input[type=text]:focus,
    input[type=url]:focus,
    select:focus,
    textarea:focus {
      outline: 0
    }

    ::-webkit-input-placeholder {
      color: #9aa4b9;
      opacity: 1
    }

    :-ms-input-placeholder {
      color: #9aa4b9;
      opacity: 1
    }

    ::placeholder {
      color: #9aa4b9;
      opacity: 1
    }

    .form-row {
      margin-bottom: 1em
    }

    .form-submit {
      margin-top: 1.66667em
    }

    .button {
      align-items: center;
      background: #00c6ff;
      border: 0;
      border-radius: 1.75em;
      box-shadow: none;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-size: .875em;
      font-weight: 700;
      justify-content: center;
      letter-spacing: .035em;
      line-height: 1.2;
      opacity: 1;
      padding: .9em 2.14285em;
      text-decoration: none;
      transition: .3s ease;
      vertical-align: middle
    }

    .button:active,
    .button:focus,
    .button:hover {
      color: #fff;
      opacity: .8;
      outline: 0
    }

    .button-secondary {
      background: 0 !important;
      box-shadow: inset 0 0 0 2px currentColor;
      color: #00c6ff
    }

    .button-secondary:active,
    .button-secondary:focus,
    .button-secondary:hover {
      box-shadow: inset 0 0 0 3px currentColor;
      color: #00c6ff;
      opacity: 1
    }

    .button-icon {
      background: 0 !important;
      border: 0;
      color: inherit;
      font-size: 1em;
      font-weight: 400;
      letter-spacing: normal;
      padding: .25em
    }

    .button-icon:active,
    .button-icon:focus,
    .button-icon:hover {
      color: #00c6ff;
      opacity: 1
    }

    #menu-close,
    #menu-open,
    .docs-nav .docs-nav-toggle,
    .docs-nav .docs-submenu-toggle,
    .submenu-toggle {
      background: 0;
      border: 0;
      border-radius: 0;
      box-shadow: none;
      color: inherit;
      cursor: pointer;
      display: block;
      font-size: inherit;
      height: 30px;
      padding: 0;
      position: relative;
      width: 30px
    }

    #menu-close:active,
    #menu-close:focus,
    #menu-close:hover,
    #menu-open:active,
    #menu-open:focus,
    #menu-open:hover,
    .docs-nav .docs-nav-toggle:active,
    .docs-nav .docs-nav-toggle:focus,
    .docs-nav .docs-nav-toggle:hover,
    .docs-nav .docs-submenu-toggle:active,
    .docs-nav .docs-submenu-toggle:focus,
    .docs-nav .docs-submenu-toggle:hover,
    .submenu-toggle:active,
    .submenu-toggle:focus,
    .submenu-toggle:hover {
      outline: 0
    }

    .icon {
      color: inherit;
      fill: currentColor;
      flex-shrink: 0;
      height: 1em;
      line-height: 1;
      width: 1em
    }

    .icon-close,
    .icon-menu {
      background: currentColor;
      border-radius: 1px;
      color: inherit;
      height: 2px;
      left: 50%;
      margin-top: -1px;
      margin-left: -12px;
      position: absolute;
      top: 50%;
      width: 24px
    }

    .icon-close:after,
    .icon-close:before,
    .icon-menu:after,
    .icon-menu:before {
      background: currentColor;
      border-radius: 1px;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      width: 100%
    }

    .icon-menu:before {
      top: -6px
    }

    .icon-menu:after {
      bottom: -6px
    }

    .icon-close {
      background: 0;
      margin-left: -14px;
      width: 28px
    }

    .icon-close:before {
      top: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg)
    }

    .icon-close:after {
      top: 0;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg)
    }

    .icon-angle-right {
      background: 0;
      border-color: currentcolor;
      border-style: solid;
      border-width: 1px 1px 0 0;
      box-sizing: border-box;
      height: 8px;
      left: 50%;
      margin-left: -4px;
      margin-top: -4px;
      position: absolute;
      top: 50%;
      width: 8px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg)
    }

    .docs-nav-toggle .icon-angle-right {
      height: 12px;
      left: auto;
      margin-left: 0;
      margin-right: 9px;
      margin-top: -6px;
      right: 0;
      width: 12px
    }

    .docs-section-item .icon-angle-right {
      left: auto;
      margin-left: 0;
      margin-right: 15px;
      right: 0
    }

    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      height: 1px;
      overflow: hidden;
      position: absolute !important;
      width: 1px;
      word-wrap: normal !important
    }

    .line-left {
      position: relative
    }

    .line-left:after {
      background: #00c6ff;
      display: block;
      content: "";
      height: 100%;
      left: -1px;
      position: absolute;
      top: 0;
      width: 5px
    }

    .js-reframe {
      margin: 1.875em 0
    }

    .js-reframe:first-child {
      margin-top: 0
    }

    .important,
    .note {
      border-radius: 5px;
      color: #283040;
      margin: 1.875em 0;
      padding: 1em 1.125em
    }

    .important:first-child,
    .note:first-child {
      margin-top: 0
    }

    .note {
      background: #fff7e6;
      border-left: 5px solid #fcb41d
    }

    .important {
      background: #ffe9e6;
      border-left: 5px solid #fc381d
    }

    .has-gradient {
      background: #00c6ff;
      background: linear-gradient(90deg, #0072ff, #00c6ff);
      color: #fff;
      position: relative
    }

    .has-gradient a:not(.button),
    .has-gradient h1,
    .has-gradient h2,
    .has-gradient h3,
    .has-gradient h4,
    .has-gradient h5,
    .has-gradient h6 {
      color: inherit !important
    }

    .has-gradient a:not(.button):hover {
      opacity: .8
    }

    .has-gradient .button:not(.button-secondary) {
      background-color: #fff;
      color: #00c6ff
    }

    .has-gradient .button:not(.button-secondary):active,
    .has-gradient .button:not(.button-secondary):focus,
    .has-gradient .button:not(.button-secondary):hover {
      opacity: .85
    }

    .has-gradient .button-secondary {
      color: #fff !important
    }

    .has-gradient .inner-sm {
      position: relative
    }

    .bg-img {
      -webkit-animation: fadeIn20 .75s ease-in-out;
      animation: fadeIn20 .75s ease-in-out;
      background-position: 50%;
      background-size: cover;
      bottom: 0;
      left: 0;
      opacity: .6;
      position: absolute;
      right: 0;
      top: 0
    }

    .grid {
      display: flex;
      flex-wrap: wrap;
      margin-left: -.9375em;
      margin-right: -.9375em
    }

    .grid-item {
      box-sizing: border-box;
      padding-left: .9375em;
      padding-right: .9375em;
      position: relative;
      width: 100%
    }

    .grid-center {
      justify-content: center
    }

    .grid-swap {
      flex-direction: row-reverse
    }

    .grid-middle {
      align-items: center
    }

    @media only screen and (min-width:641px) {
      .grid-col-2 .grid-item {
        flex: 0 0 50%;
        max-width: 50%
      }
    }

    @media only screen and (min-width:761px) {
      .grid-col-3 .grid-item {
        flex: 0 0 33.333%;
        max-width: 33.333%
      }
    }

    @media only screen and (max-width:600px) {
      .grid {
        margin-left: -1.5vw;
        margin-right: -1.5vw
      }

      .grid-item {
        padding-left: 1.5vw;
        padding-right: 1.5vw
      }
    }

    @-webkit-keyframes fadeIn20 {
      0% {
        opacity: 0
      }

      to {
        opacity: .2
      }
    }

    @keyframes fadeIn20 {
      0% {
        opacity: 0
      }

      to {
        opacity: .2
      }
    }

    .site {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative
    }

    .site-content {
      box-sizing: border-box;
      flex-grow: 1;
      width: 100%
    }

    .outer {
      padding-left: 3vw;
      padding-right: 3vw
    }

    .inner {
      max-width: 1200px
    }

    .inner,
    .inner-md {
      margin-left: auto;
      margin-right: auto
    }

    .inner-md {
      max-width: 800px
    }

    .inner-sm {
      margin-left: auto;
      margin-right: auto;
      max-width: 680px
    }

    .site-header {
      background: #fff;
      padding-bottom: 1.25em;
      padding-top: 1.125em
    }

    .site-header-inside {
      align-items: center;
      display: flex
    }

    .site-branding {
      flex: 0 1 auto
    }

    .site-title {
      color: #283040;
      font-size: 1.5em;
      font-weight: 700;
      line-height: 1.2;
      margin: 0
    }

    .site-logo {
      margin: 0
    }

    .site-logo img {
      max-height: 36px
    }

    .menu,
    .submenu {
      list-style: none;
      margin: 0;
      padding: 0
    }

    .menu-item {
      position: relative
    }

    .menu-item.current {
      color: #00c6ff
    }

    .menu-item a:not(.button) {
      display: inline-block;
      font-size: .9375em;
      line-height: 1.5
    }

    #masthead a:not(.button) {
      color: inherit;
      display: inline-block;
      text-decoration: none
    }

    #masthead a:not(.button):hover {
      color: #00c6ff
    }

    #masthead .site-branding a:hover {
      color: inherit
    }

    @media only screen and (min-width:801px) {

      #menu-close,
      #menu-open {
        display: none
      }

      .site-navigation {
        margin-left: auto
      }

      .menu {
        align-items: center;
        display: flex
      }

      .menu-item {
        display: inline-block;
        margin: 0 0 0 1.25em;
        padding-bottom: .1875em;
        padding-top: .1875em
      }

      .menu-item a {
        padding-bottom: .5em;
        padding-top: .5em
      }

      .menu-item a.button:not(.button-icon) {
        padding-left: 1.25em;
        padding-right: 1.25em
      }

      .menu-item.has-children>a {
        padding-right: 15px;
        position: relative
      }

      .menu-item.has-children>a:after {
        background: 0;
        border-color: currentcolor;
        border-style: solid;
        border-width: 1px 1px 0 0;
        box-sizing: border-box;
        content: "";
        height: 6px;
        position: absolute;
        right: 0;
        top: 50%;
        width: 6px;
        -webkit-transform: translateY(-50%) rotate(135deg);
        transform: translateY(-50%) rotate(135deg)
      }

      .menu-item.has-children>a.button:not(.button-icon) {
        padding-right: 2.25em
      }

      .menu-item.has-children>a.button:not(.button-icon):after {
        right: 1.25em
      }

      .menu-item .submenu-toggle {
        display: none
      }

      .menu-item.has-children:hover>.submenu {
        opacity: 1;
        transition: margin .3s, opacity .2s;
        visibility: visible
      }

      .submenu {
        background: #fff;
        border: 1px solid #dde0e7;
        border-radius: 3px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
        left: 0;
        min-width: 180px;
        opacity: 0;
        padding: .5em 0;
        position: absolute;
        text-align: left;
        top: 100%;
        transition: opacity .2s, visibility 0s .2s;
        visibility: hidden;
        width: 100%;
        z-index: 99
      }

      .submenu .menu-item {
        display: block;
        margin: 0;
        padding: 0 1em
      }

      .submenu a:not(.button-icon) {
        display: block
      }

      .submenu a.button:not(.button-icon) {
        margin: .5em 0
      }
    }

    @media only screen and (max-width:800px) {
      .site {
        overflow: hidden;
        position: relative
      }

      .site-branding {
        margin-right: .625em
      }

      .site-header:after {
        background: rgba(66, 75, 95, .6);
        content: "";
        left: 0;
        opacity: 0;
        transition: opacity .15s ease-in-out, visibility 0s ease-in-out .15s;
        z-index: 998
      }

      .site-header:after,
      .site-navigation {
        height: 100vh;
        position: absolute;
        top: 0;
        visibility: hidden;
        width: 100%
      }

      .site-navigation {
        background: #fff;
        box-sizing: border-box;
        margin: 0;
        max-width: 360px;
        -webkit-overflow-scrolling: touch;
        right: -100%;
        transition: right .3s ease-in-out, visibility 0s ease-in-out .3s;
        z-index: 999
      }

      .site-nav-inside {
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        position: relative
      }

      .menu--opened .site {
        height: 100%;
        left: 0;
        overflow: hidden;
        position: fixed;
        top: 0;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        width: 100%;
        z-index: 997
      }

      .menu--opened .site-navigation {
        right: 0;
        transition: right .3s ease-in-out;
        visibility: visible
      }

      .menu--opened .site-header:after {
        opacity: 1;
        transition-delay: 0s;
        visibility: visible
      }

      .menu {
        padding: calc(3vw + 2.8125em) 3vw 3em
      }

      .submenu {
        border-top: 1px solid #dde0e7;
        display: none;
        padding-left: 1em
      }

      .menu-item {
        display: block;
        margin: 0
      }

      .menu-item:not(.menu-button) {
        border-bottom: 1px solid #dde0e7
      }

      .menu-item:not(.menu-button):first-child {
        border-top: 1px solid #dde0e7
      }

      .menu-item a.button-icon,
      .menu-item a:not(.button) {
        padding: .75em 0
      }

      .menu-item a:not(.button) {
        display: block
      }

      .menu-item a.button:not(.button-icon) {
        width: 100%
      }

      .menu-item.has-children>a {
        margin-right: 2em
      }

      .menu-item .menu-item:first-child {
        border-top: 0
      }

      .menu-item .menu-item:last-child {
        border-bottom: 0
      }

      .menu-item .submenu-toggle {
        color: #67758d;
        height: 2.8125em;
        position: absolute;
        right: 0;
        top: 0
      }

      .menu-item.active .submenu-toggle .icon-angle-right {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
      }

      .menu-item.active .submenu {
        display: block
      }

      .menu-button>.button:not(.button-icon) {
        margin-bottom: 1.25em;
        margin-top: 1.25em
      }

      .menu-button+.menu-button>.button:not(.button-icon) {
        margin-top: 0
      }

      #menu-open {
        margin-left: auto
      }

      #menu-close {
        display: block;
        position: absolute;
        right: 3vw;
        top: 3vw
      }
    }

    .post {
      margin-bottom: 2.5em
    }

    .post-feed:last-child,
    .post-full:last-child {
      margin-bottom: 5em
    }

    .has-gradient.page-header,
    .has-gradient.post-header {
      padding-bottom: 9.5em;
      padding-top: 3.75em;
      text-align: center
    }

    .has-gradient .page-title,
    .has-gradient .post-title {
      color: inherit;
      font-size: 2.25em;
      margin: 0
    }

    .page-subtitle,
    .post-subtitle {
      font-size: 1.125em;
      line-height: 1.5;
      margin: .5em 0 0;
      position: relative
    }

    .post-title a {
      color: inherit !important;
      text-decoration: none
    }

    .post-thumbnail {
      border: 0;
      border-radius: 5px 5px 0 0;
      display: block;
      margin: 0
    }

    .post-thumbnail img {
      border-radius: 5px 5px 0 0;
      width: 100%
    }

    .post-feed,
    .post-full .post-content {
      margin-top: -5em;
      position: relative
    }

    .post-feed .post,
    .post-full .post-content {
      background: #fff;
      border: 1px solid #dde0e7;
      border-radius: 5px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08)
    }

    .post-full .post-content {
      padding: 2.5em 1.5em
    }

    .post-full .post-meta {
      margin: 0 0 .5em
    }

    .post-feed .post {
      padding: 0 0 2.5em
    }

    .post-feed .post-meta {
      color: #67758d;
      font-size: .875em;
      margin: 0 0 .5em;
      padding-left: 1.71428em;
      padding-right: 1.71428em
    }

    .post-feed .post-header {
      margin: 0 0 1.25em;
      padding-top: 1.875em
    }

    .post-feed .post-title {
      font-size: 1.5em;
      margin: 0;
      padding-left: 1em;
      padding-right: 1em
    }

    .post-feed .post-excerpt {
      margin-bottom: 1.25em;
      padding-left: 1.5em;
      padding-right: 1.5em
    }

    .post-feed .read-more {
      margin: 0;
      padding-left: 1.5em;
      padding-right: 1.5em
    }

    .post-feed .read-more-link {
      font-weight: 700;
      text-decoration: none
    }

    .post-feed .read-more-link:after {
      font-size: 1.125em;
      content: "\2192";
      line-height: 1.5;
      margin-left: 5px
    }

    .post-feed .read-more-link:hover {
      color: #424b5f
    }

    @media only screen and (min-width:641px) {

      .has-gradient .page-title,
      .has-gradient .post-title {
        font-size: 3em
      }

      .page-subtitle,
      .post-subtitle {
        font-size: 1.25em
      }

      .post-full .post-meta {
        font-size: 1.125em
      }

      .post-feed .post-excerpt,
      .post-feed .post-meta,
      .post-feed .post-title,
      .post-feed .read-more,
      .post-full .post-content {
        padding-left: 7%;
        padding-right: 7%
      }
    }

    @media only screen and (max-width:1000px) {
      .post {
        margin-bottom: 4vw
      }
    }

    .docs-content {
      padding-top: 2.5em
    }

    .post.type-docs {
      margin-bottom: 5.625em;
      max-width: 800px
    }

    .post.type-docs h1 {
      font-size: 1.875em
    }

    .post.type-docs h2 {
      font-size: 1.5em
    }

    .post.type-docs h3 {
      font-size: 1.25em
    }

    .post.type-docs h4 {
      font-size: 1.125em
    }

    .post.type-docs h5,
    .post.type-docs h6 {
      font-size: 1em
    }

    .post.type-docs .hash-link {
      float: left;
      font-size: 1.25rem;
      height: 1em;
      line-height: 1;
      margin-left: -1.1em;
      opacity: 0;
      text-align: center;
      text-decoration: none;
      transition: opacity .2s;
      width: 1em
    }

    .post.type-docs .hash-link:before {
      content: "#";
      display: inline-block
    }

    .post.type-docs .hash-link:focus,
    .post.type-docs .hash-link:hover {
      color: #00c6ff
    }

    .post.type-docs h2 .hash-link {
      margin-top: .22em
    }

    .post.type-docs h3 .hash-link {
      margin-top: .1em
    }

    .post.type-docs h2:focus .hash-link,
    .post.type-docs h2:hover .hash-link,
    .post.type-docs h3:focus .hash-link,
    .post.type-docs h3:hover .hash-link {
      opacity: 1
    }

    .post.type-docs .post-inside {
      background: #fff;
      border: 1px solid #dde0e7;
      border-radius: 5px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
      padding: 2.5em 0
    }

    .post.type-docs .post-title {
      font-size: 1.875em;
      margin: 0 0 1.25em;
      padding: 0 1em
    }

    .post.type-docs .post-content {
      padding: 0 1.875em
    }

    #docs-section-items {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin-left: -.3125em;
      margin-right: -.3125em;
      padding: 0
    }

    #docs-section-items .docs-section-item {
      flex: 1 1 240px;
      margin: 0 .3125em .9375em
    }

    #docs-section-items .docs-item-link {
      border: 1px solid #dde0e7;
      border-radius: 3px;
      color: #283040;
      display: block;
      font-weight: 700;
      padding: .9375em;
      position: relative;
      text-decoration: none;
      transition: border-color .3s ease, color .3s ease
    }

    #docs-section-items .docs-item-link:hover {
      border-color: #00c6ff;
      color: #00c6ff
    }

    .docs-nav {
      margin-bottom: 1.875em
    }

    .docs-nav .docs-nav-toggle {
      color: #283040;
      font-size: 1.125em;
      margin: 0;
      padding-right: 30px;
      text-align: left;
      width: 100%
    }

    .docs-nav .docs-submenu-toggle {
      color: #67758d;
      position: absolute;
      right: 0;
      top: 0
    }

    #docs-menu {
      color: #283040;
      font-weight: 700;
      line-height: 1.5;
      list-style: none;
      margin: 0;
      padding: 0
    }

    #docs-menu>.docs-menu-item>a {
      padding: .1875em 0
    }

    #docs-menu a {
      color: inherit;
      display: block;
      text-decoration: none
    }

    #docs-menu .current,
    #docs-menu .current-parent,
    #docs-menu a:hover {
      color: #00c6ff
    }

    .docs-submenu {
      border-left: 1px solid #dde0e7;
      color: #424b5f;
      display: none;
      font-size: .9375em;
      font-weight: 400;
      list-style: none;
      margin-top: .625rem;
      padding-left: 1.25rem
    }

    .docs-menu-item {
      color: inherit;
      margin-bottom: .625rem
    }

    .docs-menu-item.has-children {
      padding-right: 30px;
      position: relative
    }

    .docs-menu-item.has-children.active .docs-submenu {
      display: block
    }

    .docs-menu-item.has-children.active>.docs-submenu-toggle .icon-angle-right {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg)
    }

    #page-nav {
      display: none
    }

    #page-nav .page-nav-title {
      font-size: 1em;
      margin: 0 0 .625em
    }

    #page-nav ul {
      font-size: .875rem;
      line-height: 1.5;
      list-style: none;
      padding: 0
    }

    #page-nav ul ul {
      border-left: 1px solid #dde0e7;
      margin-top: .625rem;
      padding-left: 1.25rem
    }

    #page-nav li {
      margin-bottom: .625rem
    }

    #page-nav li.active>a {
      color: #00c6ff
    }

    #page-nav a {
      color: #424b5f;
      display: block;
      text-decoration: none
    }

    #page-nav a:hover {
      color: #00c6ff
    }

    #page-nav .page-nav-inside {
      display: none
    }

    #page-nav .page-nav-inside.has-links {
      display: block
    }

    @media only screen and (min-width:641px) {

      .post.type-docs .post-content,
      .post.type-docs .post-title {
        padding-left: 7%;
        padding-right: 7%
      }
    }

    @media only screen and (min-width:801px) {
      .docs-content {
        display: flex;
        padding-top: 3.75em
      }

      .post.type-docs {
        flex: 1 1 auto;
        overflow: hidden
      }

      .docs-nav,
      .page-nav {
        flex-shrink: 0;
        margin-bottom: 5.625em
      }

      .docs-nav .sticky,
      .page-nav .sticky {
        position: sticky;
        top: 1.875em
      }

      .docs-nav {
        padding-right: 1.5em;
        width: 12.5em
      }

      #page-nav {
        padding-left: 1.5em;
        width: 9.5em
      }

      #docs-nav-toggle {
        display: none
      }
    }

    @media only screen and (min-width:1091px) {
      #page-nav {
        display: block
      }
    }

    @media only screen and (max-width:800px) {
      .docs-nav {
        background: #fff;
        border: 1px solid #dde0e7;
        border-radius: 5px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
        box-sizing: border-box;
        margin-bottom: 5%;
        padding: .75em 1em
      }

      .docs-nav-menu {
        display: none
      }

      .docs-menu--opened .docs-nav-menu {
        display: block
      }

      .docs-menu--opened .docs-nav-toggle .icon-angle-right {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg)
      }

      #docs-menu {
        border-top: 1px solid #dde0e7;
        margin-top: 1.25em;
        padding-top: 1.25em
      }
    }

    .block {
      padding-top: 3.75em
    }

    .block:not(.block-hero) {
      background: #f8f8fa
    }

    .block:last-child {
      padding-bottom: 3.75em
    }

    .block-header,
    .block-image {
      margin-bottom: 1.5em
    }

    .block-title {
      margin: 0
    }

    .block-subtitle {
      color: #67758d;
      line-height: 1.5;
      margin-bottom: 0
    }

    .block-subtitle:not(:first-child) {
      margin-top: .5em
    }

    .block-buttons,
    .grid-item-buttons {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: .9375em
    }

    .block-buttons a,
    .grid-item-buttons a {
      font-weight: 700;
      text-decoration: none
    }

    .block-buttons {
      justify-content: center
    }

    .block-buttons a {
      margin: 0 .375em .75em
    }

    .grid-item-buttons a {
      margin: 0 .75em .75em 0
    }

    .has-gradient .block-subtitle {
      color: inherit
    }

    .block-hero .block-buttons:not(:first-child),
    .block-text .block-buttons:not(:first-child) {
      margin-top: 1.875em
    }

    .block-text .grid-item {
      max-width: 680px;
      text-align: center
    }

    .block-text .block-title {
      font-size: 1.875em
    }

    @media only screen and (min-width:641px) {
      .block-text .block-content {
        font-size: 1.125em
      }

      .block-text .block-title {
        font-size: 2.125em
      }
    }

    @media only screen and (min-width:801px) {
      .block-text .grid-item:not(:only-child) {
        flex: 0 0 50%;
        max-width: 50%
      }

      .block-body:not(:only-child) {
        text-align: left
      }

      .block-body:not(:only-child) .block-buttons {
        justify-content: flex-start
      }

      .block-body:not(:only-child) .block-buttons a {
        margin-left: 0;
        margin-right: .75em
      }
    }

    @media only screen and (min-width:1001px) {
      .block-image:not(:only-child) {
        padding-right: 2.5em
      }

      .grid-swap .block-image:not(:only-child) {
        padding-left: 2.5em;
        padding-right: .9375em
      }
    }

    .block-cta .has-gradient {
      border-radius: 5px;
      margin-bottom: 1.875em;
      padding: 2.75em 3vw 1.875em
    }

    .block-cta .block-header {
      max-width: 680px;
      text-align: center
    }

    .block-cta .block-title {
      font-size: 1.875em
    }

    .block-cta .block-subtitle {
      font-size: 1.125em
    }

    @media only screen and (min-width:641px) {
      .block-title {
        font-size: 2.125em
      }
    }

    @media only screen and (min-width:801px) {
      .block-cta .has-gradient {
        padding-left: 7%;
        padding-right: 7%
      }

      .block-cta .block-header {
        flex: 0 0 66.666%;
        max-width: 66.666%;
        text-align: left
      }

      .block-cta .block-buttons {
        flex: 0 0 33.333%;
        margin-top: 0;
        max-width: 33.333%
      }
    }

    .block-hero+.block-grid:not(.has-header) {
      background: 0;
      padding-top: 0
    }

    .block-grid .block-header {
      margin-bottom: 2em;
      text-align: center
    }

    .block-grid .block-title {
      font-size: 1.875em
    }

    .block-grid .grid-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.875em
    }

    .grid-item-inside {
      background: #fff;
      border: 1px solid #dde0e7;
      border-radius: 3px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
      box-sizing: border-box;
      flex-grow: 1;
      padding-bottom: .75em
    }

    .grid-item-image {
      display: block;
      width: 100%
    }

    .grid-item-image,
    .grid-item-image img {
      border-radius: 3px 3px 0 0
    }

    .grid-item-title {
      font-size: 1.5em;
      margin: 1em 0 .5em;
      padding-left: 1em;
      padding-right: 1em
    }

    .grid-item-title:first-child {
      margin-top: 1.25em
    }

    .grid-item-title a {
      color: inherit !important;
      text-decoration: none
    }

    .grid-item-buttons,
    .grid-item-content {
      padding-left: 1.5em;
      padding-right: 1.5em
    }

    .grid-item-content {
      margin-bottom: 1.25em
    }

    .grid-item-buttons a:not(.button):after {
      font-size: 1.125em;
      content: "\2192";
      line-height: 1.5;
      margin-left: 5px
    }

    @media only screen and (max-width:1000px) {
      .block-grid .grid-item {
        margin-bottom: 4vw
      }
    }

    .block-hero {
      padding-bottom: 7.5em;
      position: relative;
      text-align: center
    }

    .block-hero .block-header {
      margin-bottom: .75em
    }

    .block-hero .block-title {
      font-size: 2.25em
    }

    .block-hero .block-content {
      font-size: 1.125em;
      line-height: 1.5
    }

    .block-hero+.block {
      margin-top: -5em;
      position: relative
    }

    @media only screen and (min-width:641px) {
      .block-hero .block-title {
        font-size: 3em
      }

      .block-hero .block-content {
        font-size: 1.25em
      }

      .block-hero .block-buttons a {
        font-size: 1em
      }
    }

    .site-footer {
      background-color: #fff;
      padding-bottom: 1.5em;
      padding-top: 1.5em
    }

    #colophon a:not(.button) {
      color: inherit
    }

    #colophon a:not(.button):focus,
    #colophon a:not(.button):hover {
      color: #00c6ff
    }

    .site-info,
    .social-links {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      font-size: .875em;
      line-height: 1.2
    }

    .site-info .button:not(.button-icon),
    .social-links .button:not(.button-icon) {
      font-size: inherit;
      line-height: 1.2;
      padding: .3em 1em
    }

    .site-info {
      margin: .25em 0 0;
      text-align: center
    }

    .site-info .copyright,
    .site-info>a {
      margin: 0 8px .5em 0
    }

    .social-links {
      margin-top: .9375em
    }

    .social-links a {
      margin: 0 10px .5em
    }

    .social-links .icon {
      font-size: 20px
    }

    @media only screen and (min-width:641px) {
      .site-footer-inside {
        align-items: flex-start;
        display: flex
      }

      .site-info {
        text-align: left
      }

      .site-info,
      .social-links {
        justify-content: flex-start
      }

      .social-links {
        flex: 0 0 auto;
        flex-wrap: nowrap;
        margin-left: auto;
        margin-top: 0
      }

      .social-links a {
        margin-left: 20px;
        margin-right: 0
      }
    }

    .palette-green a:not(.button) {
      color: #20c86e
    }

    .palette-green a:not(.button):hover {
      color: #424b5f
    }

    .palette-green blockquote {
      border-color: #20c86e
    }

    .palette-green .button,
    .palette-green .line-left:after {
      background: #20c86e
    }

    .palette-green .has-gradient {
      background: #20c86e;
      background: linear-gradient(90deg, #1ba65b, #20c86e)
    }

    .palette-green #colophon a:not(.button):hover,
    .palette-green #docs-menu .current,
    .palette-green #docs-menu .current-parent,
    .palette-green #docs-menu a:hover,
    .palette-green #masthead a:not(.button):hover,
    .palette-green #page-nav a:hover,
    .palette-green #page-nav li.active>a,
    .palette-green .button-icon:active,
    .palette-green .button-icon:focus,
    .palette-green .button-icon:hover,
    .palette-green .button-secondary,
    .palette-green .has-gradient .button:not(.button-secondary),
    .palette-green .menu-item.current,
    .palette-green .post.type-docs .hash-link:focus,
    .palette-green .post.type-docs .hash-link:hover {
      color: #20c86e
    }

    .palette-green #docs-section-items .docs-item-link:hover {
      border-color: #20c86e;
      color: #20c86e
    }

    .palette-navy a:not(.button) {
      color: #004e92
    }

    .palette-navy a:not(.button):hover {
      color: #424b5f
    }

    .palette-navy blockquote {
      border-color: #004e92
    }

    .palette-navy .button,
    .palette-navy .line-left:after {
      background: #004e92
    }

    .palette-navy .has-gradient {
      background: #004e92;
      background: linear-gradient(90deg, #000428, #004e92)
    }

    .palette-navy #colophon a:not(.button):hover,
    .palette-navy #docs-menu .current,
    .palette-navy #docs-menu .current-parent,
    .palette-navy #docs-menu a:hover,
    .palette-navy #masthead a:not(.button):hover,
    .palette-navy #page-nav a:hover,
    .palette-navy #page-nav li.active>a,
    .palette-navy .button-icon:active,
    .palette-navy .button-icon:focus,
    .palette-navy .button-icon:hover,
    .palette-navy .button-secondary,
    .palette-navy .has-gradient .button:not(.button-secondary),
    .palette-navy .menu-item.current,
    .palette-navy .post.type-docs .hash-link:focus,
    .palette-navy .post.type-docs .hash-link:hover {
      color: #004e92
    }

    .palette-navy #docs-section-items .docs-item-link:hover {
      border-color: #004e92;
      color: #004e92
    }

    .palette-violet a:not(.button) {
      color: #8e2de2
    }

    .palette-violet a:not(.button):hover {
      color: #424b5f
    }

    .palette-violet blockquote {
      border-color: #8e2de2
    }

    .palette-violet .button,
    .palette-violet .line-left:after {
      background: #8e2de2
    }

    .palette-violet .has-gradient {
      background: #8e2de2;
      background: linear-gradient(90deg, #4a00e0, #8e2de2)
    }

    .palette-violet #colophon a:not(.button):hover,
    .palette-violet #docs-menu .current,
    .palette-violet #docs-menu .current-parent,
    .palette-violet #docs-menu a:hover,
    .palette-violet #masthead a:not(.button):hover,
    .palette-violet #page-nav a:hover,
    .palette-violet #page-nav li.active>a,
    .palette-violet .button-icon:active,
    .palette-violet .button-icon:focus,
    .palette-violet .button-icon:hover,
    .palette-violet .button-secondary,
    .palette-violet .has-gradient .button:not(.button-secondary),
    .palette-violet .menu-item.current,
    .palette-violet .post.type-docs .hash-link:focus,
    .palette-violet .post.type-docs .hash-link:hover {
      color: #8e2de2
    }

    .palette-violet #docs-section-items .docs-item-link:hover {
      border-color: #8e2de2;
      color: #8e2de2
    }
  </style>
  <meta name="generator" content="Gatsby 2.32.8">
  <title>Web-Dev-Hub</title>
  <link data-react-helmet="true" rel="preconnect" href="https://fonts.gstatic.com">
  <link data-react-helmet="true"
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap"
    rel="stylesheet">
  <link data-react-helmet="true" rel="icon" href="/images/favicon.ico">
  <meta data-react-helmet="true" charset="utf-8">
  <meta data-react-helmet="true" name="viewport" content="width=device-width, initialScale=1.0">
  <meta data-react-helmet="true" name="description" content="The preview of the Web-Dev-Hub">
  <meta data-react-helmet="true" property="og:type" content="website">
  <meta data-react-helmet="true" property="og:title" content="Web-Dev-Hub">
  <meta data-react-helmet="true" property="og:description" content="The preview of the Web-Dev-Hub">
  <meta data-react-helmet="true" property="og:image" content="https://bgoonz-blog.netlify.app/images/4.jpg">
  <meta data-react-helmet="true" name="twitter:card" content="summary_large_image">
  <meta data-react-helmet="true" name="twitter:title" content="Web-Dev-Hub">
  <meta data-react-helmet="true" name="twitter:description" content="The preview of the Web-Dev-Hub">
  <meta data-react-helmet="true" name="twitter:image" content="https://bgoonz-blog.netlify.app/images/4.jpg">
  <link as="script" rel="preload" href="/webpack-runtime-45751f54f7424d040e60.js">
  <link as="script" rel="preload" href="/framework-acf2edd04f295a3bec1d.js">
  <link as="script" rel="preload" href="/app-3c57265fe85c14101a0f.js">
  <link as="script" rel="preload" href="/styles-7d4153d260c0197f0043.js">
  <link as="script" rel="preload" href="/29107295-4796dbfd2443d7c4719f.js">
  <link as="script" rel="preload" href="/commons-d42d168a32e15b8b9478.js">
  <link as="script" rel="preload" href="/component---src-templates-advanced-js-c66268766ef5c957450f.js">
  <link as="fetch" rel="preload" href="/page-data/index/page-data.json" crossorigin="anonymous">
  <link as="fetch" rel="preload" href="/page-data/app-data.json" crossorigin="anonymous">
  <meta name="google-site-verification" content="W6SJ3S45yhnjzV6ISUMCTXl_QVX5woQZ7jO3bsahONQ">
  <!-- Google Tag Manager -->
  <script defer="true" src="https://widget.stackbit.com/bootstrap.js"></script>
  <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-5S5XXNR"></script>
  <script>
    ( function ( w, d, s, l, i ) {
      w[ l ] = w[ l ] || [];
      w[ l ].push( {
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      } );
      var f = d.getElementsByTagName( s )[ 0 ],
        j = d.createElement( s ),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore( j, f );
    } )( window, document, 'script', 'dataLayer', 'GTM-5S5XXNR' );
  </script>
  <!-- End Google Tag Manager -->
  <link rel="preload" href="https://widget.stackbit.com/widget.css" as="style">
  <link rel="preload" href="https://widget.stackbit.com/widget.js" as="script">
  <style type="text/css">
    .at-icon {
      fill: #fff;
      border: 0
    }

    .at-icon-wrapper {
      display: inline-block;
      overflow: hidden
    }

    a .at-icon-wrapper {
      cursor: pointer
    }

    .at-rounded,
    .at-rounded-element .at-icon-wrapper {
      border-radius: 12%
    }

    .at-circular,
    .at-circular-element .at-icon-wrapper {
      border-radius: 50%
    }

    .addthis_32x32_style .at-icon {
      width: 2pc;
      height: 2pc
    }

    .addthis_24x24_style .at-icon {
      width: 24px;
      height: 24px
    }

    .addthis_20x20_style .at-icon {
      width: 20px;
      height: 20px
    }

    .addthis_16x16_style .at-icon {
      width: 1pc;
      height: 1pc
    }

    #at16lb {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1001;
      background-color: #000;
      opacity: .001
    }

    #at_complete,
    #at_error,
    #at_share,
    #at_success {
      position: static !important
    }

    .at15dn {
      display: none
    }

    #at15s,
    #at16p,
    #at16p form input,
    #at16p label,
    #at16p textarea,
    #at_share .at_item {
      font-family: arial, helvetica, tahoma, verdana, sans-serif !important;
      font-size: 9pt !important;
      outline-style: none;
      outline-width: 0;
      line-height: 1em
    }

    * html #at15s.mmborder {
      position: absolute !important
    }

    #at15s.mmborder {
      position: fixed !important;
      width: 250px !important
    }

    #at15s {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);
      float: none;
      line-height: 1em;
      margin: 0;
      overflow: visible;
      padding: 5px;
      text-align: left;
      position: absolute
    }

    #at15s a,
    #at15s span {
      outline: 0;
      direction: ltr;
      text-transform: none
    }

    #at15s .at-label {
      margin-left: 5px
    }

    #at15s .at-icon-wrapper {
      width: 1pc;
      height: 1pc;
      vertical-align: middle
    }

    #at15s .at-icon {
      width: 1pc;
      height: 1pc
    }

    .at4-icon {
      display: inline-block;
      background-repeat: no-repeat;
      background-position: top left;
      margin: 0;
      overflow: hidden;
      cursor: pointer
    }

    .addthis_16x16_style .at4-icon,
    .addthis_default_style .at4-icon,
    .at4-icon,
    .at-16x16 {
      width: 1pc;
      height: 1pc;
      line-height: 1pc;
      background-size: 1pc !important
    }

    .addthis_32x32_style .at4-icon,
    .at-32x32 {
      width: 2pc;
      height: 2pc;
      line-height: 2pc;
      background-size: 2pc !important
    }

    .addthis_24x24_style .at4-icon,
    .at-24x24 {
      width: 24px;
      height: 24px;
      line-height: 24px;
      background-size: 24px !important
    }

    .addthis_20x20_style .at4-icon,
    .at-20x20 {
      width: 20px;
      height: 20px;
      line-height: 20px;
      background-size: 20px !important
    }

    .at4-icon.circular,
    .circular .at4-icon,
    .circular.aticon {
      border-radius: 50%
    }

    .at4-icon.rounded,
    .rounded .at4-icon {
      border-radius: 4px
    }

    .at4-icon-left {
      float: left
    }

    #at15s .at4-icon {
      text-indent: 20px;
      padding: 0;
      overflow: visible;
      white-space: nowrap;
      background-size: 1pc;
      width: 1pc;
      height: 1pc;
      background-position: top left;
      display: inline-block;
      line-height: 1pc
    }

    .addthis_vertical_style .at4-icon,
    .at4-follow-container .at4-icon {
      margin-right: 5px
    }

    html>body #at15s {
      width: 250px !important
    }

    #at15s.atm {
      background: none !important;
      padding: 0 !important;
      width: 10pc !important
    }

    #at15s_inner {
      background: #fff;
      border: 1px solid #fff;
      margin: 0
    }

    #at15s_head {
      position: relative;
      background: #f2f2f2;
      padding: 4px;
      cursor: default;
      border-bottom: 1px solid #e5e5e5
    }

    .at15s_head_success {
      background: #cafd99 !important;
      border-bottom: 1px solid #a9d582 !important
    }

    .at15s_head_success a,
    .at15s_head_success span {
      color: #000 !important;
      text-decoration: none
    }

    #at15s_brand,
    #at15sptx,
    #at16_brand {
      position: absolute
    }

    #at15s_brand {
      top: 4px;
      right: 4px
    }

    .at15s_brandx {
      right: 20px !important
    }

    a#at15sptx {
      top: 4px;
      right: 4px;
      text-decoration: none;
      color: #4c4c4c;
      font-weight: 700
    }

    #at15sptx:hover {
      text-decoration: underline
    }

    #at16_brand {
      top: 5px;
      right: 30px;
      cursor: default
    }

    #at_hover {
      padding: 4px
    }

    #at_hover .at_item,
    #at_share .at_item {
      background: #fff !important;
      float: left !important;
      color: #4c4c4c !important
    }

    #at_share .at_item .at-icon-wrapper {
      margin-right: 5px
    }

    #at_hover .at_bold {
      font-weight: 700;
      color: #000 !important
    }

    #at_hover .at_item {
      width: 7pc !important;
      padding: 2px 3px !important;
      margin: 1px;
      text-decoration: none !important
    }

    #at_hover .at_item.athov,
    #at_hover .at_item:focus,
    #at_hover .at_item:hover {
      margin: 0 !important
    }

    #at_hover .at_item.athov,
    #at_hover .at_item:focus,
    #at_hover .at_item:hover,
    #at_share .at_item.athov,
    #at_share .at_item:hover {
      background: #f2f2f2 !important;
      border: 1px solid #e5e5e5;
      color: #000 !important;
      text-decoration: none
    }

    .ipad #at_hover .at_item:focus {
      background: #fff !important;
      border: 1px solid #fff
    }

    .at15t {
      display: block !important;
      height: 1pc !important;
      line-height: 1pc !important;
      padding-left: 20px !important;
      background-position: 0 0;
      text-align: left
    }

    .addthis_button,
    .at15t {
      cursor: pointer
    }

    .addthis_toolbox a.at300b,
    .addthis_toolbox a.at300m {
      width: auto
    }

    .addthis_toolbox a {
      margin-bottom: 5px;
      line-height: initial
    }

    .addthis_toolbox.addthis_vertical_style {
      width: 200px
    }

    .addthis_button_facebook_like .fb_iframe_widget {
      line-height: 100%
    }

    .addthis_button_facebook_like iframe.fb_iframe_widget_lift {
      max-width: none
    }

    .addthis_toolbox a.addthis_button_counter,
    .addthis_toolbox a.addthis_button_facebook_like,
    .addthis_toolbox a.addthis_button_facebook_send,
    .addthis_toolbox a.addthis_button_facebook_share,
    .addthis_toolbox a.addthis_button_foursquare,
    .addthis_toolbox a.addthis_button_linkedin_counter,
    .addthis_toolbox a.addthis_button_pinterest_pinit,
    .addthis_toolbox a.addthis_button_tweet {
      display: inline-block
    }

    .addthis_toolbox span.addthis_follow_label {
      display: none
    }

    .addthis_toolbox.addthis_vertical_style span.addthis_follow_label {
      display: block;
      white-space: nowrap
    }

    .addthis_toolbox.addthis_vertical_style a {
      display: block
    }

    .addthis_toolbox.addthis_vertical_style.addthis_32x32_style a {
      line-height: 2pc;
      height: 2pc
    }

    .addthis_toolbox.addthis_vertical_style .at300bs {
      margin-right: 4px;
      float: left
    }

    .addthis_toolbox.addthis_20x20_style span {
      line-height: 20px
    }

    .addthis_toolbox.addthis_32x32_style span {
      line-height: 2pc
    }

    .addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact,
    .addthis_toolbox.addthis_pill_combo_style a {
      float: left
    }

    .addthis_toolbox.addthis_pill_combo_style a.addthis_button_tweet {
      margin-top: -2px
    }

    .addthis_toolbox.addthis_pill_combo_style .addthis_button_compact .at15t_compact {
      margin-right: 4px
    }

    .addthis_default_style .addthis_separator {
      margin: 0 5px;
      display: inline
    }

    div.atclear {
      clear: both
    }

    .addthis_default_style .addthis_separator,
    .addthis_default_style .at4-icon,
    .addthis_default_style .at300b,
    .addthis_default_style .at300bo,
    .addthis_default_style .at300bs,
    .addthis_default_style .at300m {
      float: left
    }

    .at300b img,
    .at300bo img {
      border: 0
    }

    a.at300b .at4-icon,
    a.at300m .at4-icon {
      display: block
    }

    .addthis_default_style .at300b,
    .addthis_default_style .at300bo,
    .addthis_default_style .at300m {
      padding: 0 2px
    }

    .at300b,
    .at300bo,
    .at300bs,
    .at300m {
      cursor: pointer
    }

    .addthis_button_facebook_like.at300b:hover,
    .addthis_button_facebook_like.at300bs:hover,
    .addthis_button_facebook_send.at300b:hover,
    .addthis_button_facebook_send.at300bs:hover {
      opacity: 1
    }

    .addthis_20x20_style .at15t,
    .addthis_20x20_style .at300bs {
      overflow: hidden;
      display: block;
      height: 20px !important;
      width: 20px !important;
      line-height: 20px !important
    }

    .addthis_32x32_style .at15t,
    .addthis_32x32_style .at300bs {
      overflow: hidden;
      display: block;
      height: 2pc !important;
      width: 2pc !important;
      line-height: 2pc !important
    }

    .at300bs {
      overflow: hidden;
      display: block;
      background-position: 0 0;
      height: 1pc;
      width: 1pc;
      line-height: 1pc !important
    }

    .addthis_default_style .at15t_compact,
    .addthis_default_style .at15t_expanded {
      margin-right: 4px
    }

    #at_share .at_item {
      width: 123px !important;
      padding: 4px;
      margin-right: 2px;
      border: 1px solid #fff
    }

    #at16p {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);
      z-index: 10000001;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      padding: 10px;
      margin: 0 auto;
      margin-top: -185px;
      margin-left: -155px;
      font-family: arial, helvetica, tahoma, verdana, sans-serif;
      font-size: 9pt;
      color: #5e5e5e
    }

    #at_share {
      margin: 0;
      padding: 0
    }

    #at16pt {
      position: relative;
      background: #f2f2f2;
      height: 13px;
      padding: 5px 10px
    }

    #at16pt a,
    #at16pt h4 {
      font-weight: 700
    }

    #at16pt h4 {
      display: inline;
      margin: 0;
      padding: 0;
      font-size: 9pt;
      color: #4c4c4c;
      cursor: default
    }

    #at16pt a {
      position: absolute;
      top: 5px;
      right: 10px;
      color: #4c4c4c;
      text-decoration: none;
      padding: 2px
    }

    #at15sptx:focus,
    #at16pt a:focus {
      outline: thin dotted
    }

    #at15s #at16pf a {
      top: 1px
    }

    #_atssh {
      width: 1px !important;
      height: 1px !important;
      border: 0 !important
    }

    .atm {
      width: 10pc !important;
      padding: 0;
      margin: 0;
      line-height: 9pt;
      letter-spacing: normal;
      font-family: arial, helvetica, tahoma, verdana, sans-serif;
      font-size: 9pt;
      color: #444;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgaGAgAjAxEAlGFVJHIUCAAQDcngCUgqGMqwAAAABJRU5ErkJggg==);
      padding: 4px
    }

    .atm-f {
      text-align: right;
      border-top: 1px solid #ddd;
      padding: 5px 8px
    }

    .atm-i {
      background: #fff;
      border: 1px solid #d5d6d6;
      padding: 0;
      margin: 0;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, .15)
    }

    .atm-s {
      margin: 0 !important;
      padding: 0 !important
    }

    .atm-s a:focus {
      border: transparent;
      outline: 0;
      transition: none
    }

    #at_hover.atm-s a,
    .atm-s a {
      display: block;
      text-decoration: none;
      padding: 4px 10px;
      color: #235dab !important;
      font-weight: 400;
      font-style: normal;
      transition: none
    }

    #at_hover.atm-s .at_bold {
      color: #235dab !important
    }

    #at_hover.atm-s a:hover,
    .atm-s a:hover {
      background: #2095f0;
      text-decoration: none;
      color: #fff !important
    }

    #at_hover.atm-s .at_bold {
      font-weight: 700
    }

    #at_hover.atm-s a:hover .at_bold {
      color: #fff !important
    }

    .atm-s a .at-label {
      vertical-align: middle;
      margin-left: 5px;
      direction: ltr
    }

    .at_PinItButton {
      display: block;
      width: 40px;
      height: 20px;
      padding: 0;
      margin: 0;
      background-image: url(//s7.addthis.com/static/t00/pinit00.png);
      background-repeat: no-repeat
    }

    .at_PinItButton:hover {
      background-position: 0 -20px
    }

    .addthis_toolbox .addthis_button_pinterest_pinit {
      position: relative
    }

    .at-share-tbx-element .fb_iframe_widget span {
      vertical-align: baseline !important
    }

    #at16pf {
      height: auto;
      text-align: right;
      padding: 4px 8px
    }

    .at-privacy-info {
      position: absolute;
      left: 7px;
      bottom: 7px;
      cursor: pointer;
      text-decoration: none;
      font-family: helvetica, arial, sans-serif;
      font-size: 10px;
      line-height: 9pt;
      letter-spacing: .2px;
      color: #666
    }

    .at-privacy-info:hover {
      color: #000
    }

    .body .wsb-social-share .wsb-social-share-button-vert {
      padding-top: 0;
      padding-bottom: 0
    }

    .body .wsb-social-share.addthis_counter_style .addthis_button_tweet.wsb-social-share-button {
      padding-top: 40px
    }

    .body .wsb-social-share.addthis_counter_style .addthis_button_facebook_like.wsb-social-share-button {
      padding-top: 21px
    }

    @media print {

      #at4-follow,
      #at4-share,
      #at4-thankyou,
      #at4-whatsnext,
      #at4m-mobile,
      #at15s,
      .at4,
      .at4-recommended {
        display: none !important
      }
    }

    @media screen and (max-width:400px) {
      .at4win {
        width: 100%
      }
    }

    @media screen and (max-height:700px) and (max-width:400px) {
      .at4-thankyou-inner .at4-recommended-container {
        height: 122px;
        overflow: hidden
      }

      .at4-thankyou-inner .at4-recommended .at4-recommended-item:first-child {
        border-bottom: 1px solid #c5c5c5
      }
    }
  </style>
  <style type="text/css">
    .at-branding-logo {
      font-family: helvetica, arial, sans-serif;
      text-decoration: none;
      font-size: 10px;
      display: inline-block;
      margin: 2px 0;
      letter-spacing: .2px
    }

    .at-branding-logo .at-branding-icon {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////+GlNUkcc1QAAAB1JREFUeNpiYIQDBjQmAwMmkwEM0JnY1WIxFyDAABGeAFEudiZsAAAAAElFTkSuQmCC")
    }

    .at-branding-logo .at-branding-icon,
    .at-branding-logo .at-privacy-icon {
      display: inline-block;
      height: 10px;
      width: 10px;
      margin-left: 4px;
      margin-right: 3px;
      margin-bottom: -1px;
      background-repeat: no-repeat
    }

    .at-branding-logo .at-privacy-icon {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAMAAABR24SMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF8fr9ot/xXcfn2/P5AKva////////AKTWodjhjAAAAAd0Uk5T////////ABpLA0YAAAA6SURBVHjaJMzBDQAwCAJAQaj7b9xifV0kUKJ9ciWxlzWEWI5gMF65KUTv0VKkjVeTerqE/x7+9BVgAEXbAWI8QDcfAAAAAElFTkSuQmCC")
    }

    .at-branding-logo span {
      text-decoration: none
    }

    .at-branding-logo .at-branding-addthis,
    .at-branding-logo .at-branding-powered-by {
      color: #666
    }

    .at-branding-logo .at-branding-addthis:hover {
      color: #333
    }

    .at-cv-with-image .at-branding-addthis,
    .at-cv-with-image .at-branding-addthis:hover {
      color: #fff
    }

    a.at-branding-logo:visited {
      color: initial
    }

    .at-branding-info {
      display: inline-block;
      padding: 0 5px;
      color: #666;
      border: 1px solid #666;
      border-radius: 50%;
      font-size: 10px;
      line-height: 9pt;
      opacity: .7;
      transition: all .3s ease;
      text-decoration: none
    }

    .at-branding-info span {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px
    }

    .at-branding-info:before {
      content: 'i';
      font-family: Times New Roman
    }

    .at-branding-info:hover {
      color: #0780df;
      border-color: #0780df
    }
  </style>
  <style type="text/css">
    .transition {
      transition: all .3s ease
    }

    .maker-badge__btn-img {
      border-radius: 50%;
    }

    .maker-badge__stats {
      list-style: none;
      padding: 0;
      margin: .3rem 0;
    }

    .maker-badge__stats li {
      margin: .3rem 0
    }

    .maker-badge,
    .maker-badge *,
    .maker-badge *:before,
    .maker-badge *:after {
      box-sizing: border-box;
    }

    .maker-badge {
      z-index: 99;
      max-width: 200px;
      color: #2b2b2b;
      font-size: 16px;
      font-family: helvetica;
      text-align: right;
      height: auto;
      min-width: 160px;
      position: fixed;
      bottom: -100%;
      right: 0;
      border-top-left-radius: 6px;
    }

    .maker-badge__content {
      text-align: left;
      font-size: .9rem;
      border: 1px solid #cbd5e0;
      padding: .5rem;
      display: block;
      background: #fff;
      height: 100%;
    }

    .maker-badge__btn {
      display: flex;
      align-items: center;
      height: 50px;
      line-height: 50px;
      padding: 0 .5rem;
      cursor: pointer;
      border: 1px solid #cbd5e0;
      border-bottom: 0;
      background: #fff;
      border-top-left-radius: 6px;
      color: #2d3748;
    }

    .ph-btn {
      margin: 0 auto;
      height: 30px;
      width: 30px;
      text-align: left;
      line-height: 30px;
      background: #da552f;
      display: block;
      border-radius: 50%;
      font-size: 1rem;
      color: #fff;
      text-decoration: none;
      font-weight: 800;
    }

    .isOpen {
      bottom: 0;
    }
  </style>
  <meta http-equiv="origin-trial"
    content="A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=">
  <meta http-equiv="origin-trial"
    content="A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
  <meta http-equiv="origin-trial"
    content="AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
  <meta http-equiv="origin-trial"
    content="A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
  <meta http-equiv="origin-trial"
    content="AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9">
  <meta http-equiv="origin-trial"
    content="A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd/r0vL69mRRA36YutI9P/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==">
  <meta http-equiv="origin-trial"
    content="A0OysezhLoCRYomumeYlubLurZTCmsjTb087OvtCy95jNM65cfEsbajrJnhaGwiTxhz38ZZbm+UhUwQuXfVPTg0AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==">
  <meta http-equiv="origin-trial"
    content="AxoOxdZQmIoA1WeAPDixRAeWDdgs7ZtVFfH2y19ziTgD1iaHE5ZGz2UdSjubkWvob9C5PrjUfkWi4ZSLgWk3Xg8AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==">
  <meta http-equiv="origin-trial"
    content="A7+rMYR5onPnACrz+niKSeFdH3xw1IyHo2AZSHmxrofRk9w4HcQPMYcpBUKu6OQ6zsdxf4m/vqa6tG6Na4OLpAQAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9">
  <meta http-equiv="origin-trial"
    content="AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
  <meta http-equiv="origin-trial"
    content="AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
  <meta http-equiv="origin-trial"
    content="AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9">
  <link rel="prefetch" href="/page-data/docs/page-data.json" crossorigin="anonymous" as="fetch">
  <link rel="prefetch" href="/page-data/style-guide/page-data.json" crossorigin="anonymous" as="fetch">
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/layers.fa6cd1947ce26e890d3d.js"></script>
  <link rel="preload" href="https://adservice.google.com/adsid/integrator.js?domain=bgoonz-blog.netlify.app"
    as="script">
  <script type="text/javascript" src="https://adservice.google.com/adsid/integrator.js?domain=bgoonz-blog.netlify.app">
  </script>
  <link rel="prefetch" href="/page-data/showcase/page-data.json" crossorigin="anonymous" as="fetch">
  <link rel="prefetch" href="/page-data/gallery/page-data.json" crossorigin="anonymous" as="fetch">
  <style type="text/css">
    .at-share-dock.atss {
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      max-width: 100%;
      z-index: 1000200;
      box-shadow: 0 0 1px 1px #e2dfe2
    }

    .at-share-dock.at-share-dock-zindex-hide {
      z-index: -1 !important
    }

    .at-share-dock.atss-top {
      bottom: auto;
      top: 0
    }

    .at-share-dock a {
      width: auto;
      transition: none;
      color: #fff;
      text-decoration: none;
      box-sizing: content-box;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box
    }

    .at-share-dock a:hover {
      width: auto
    }

    .at-share-dock .at4-count {
      height: 43px;
      padding: 5px 0 0;
      line-height: 20px;
      background: #fff;
      font-family: Helvetica neue, arial
    }

    .at-share-dock .at4-count span {
      width: 100%
    }

    .at-share-dock .at4-count .at4-share-label {
      color: #848484;
      font-size: 10px;
      letter-spacing: 1px
    }

    .at-share-dock .at4-count .at4-counter {
      top: 2px;
      position: relative;
      display: block;
      color: #222;
      font-size: 22px
    }

    .at-share-dock.at-shfs-medium .at4-count {
      height: 36px;
      line-height: 1pc;
      padding-top: 4px
    }

    .at-share-dock.at-shfs-medium .at4-count .at4-counter {
      font-size: 18px
    }

    .at-share-dock.at-shfs-medium .at-share-btn .at-icon-wrapper,
    .at-share-dock.at-shfs-medium a .at-icon-wrapper {
      padding: 6px 0
    }

    .at-share-dock.at-shfs-small .at4-count {
      height: 26px;
      line-height: 1;
      padding-top: 3px
    }

    .at-share-dock.at-shfs-small .at4-count .at4-share-label {
      font-size: 8px
    }

    .at-share-dock.at-shfs-small .at4-count .at4-counter {
      font-size: 14px
    }

    .at-share-dock.at-shfs-small .at-share-btn .at-icon-wrapper,
    .at-share-dock.at-shfs-small a .at-icon-wrapper {
      padding: 4px 0
    }
  </style>
  <style type="text/css">
    div.at-share-close-control.ats-dark,
    div.at-share-open-control-left.ats-dark,
    div.at-share-open-control-right.ats-dark {
      background: #262b30
    }

    div.at-share-close-control.ats-light,
    div.at-share-open-control-left.ats-light,
    div.at-share-open-control-right.ats-light {
      background: #fff
    }

    div.at-share-close-control.ats-gray,
    div.at-share-open-control-left.ats-gray,
    div.at-share-open-control-right.ats-gray {
      background: #f2f2f2
    }

    .atss {
      position: fixed;
      top: 20%;
      width: 3pc;
      z-index: 100020;
      background: none
    }

    .at-share-close-control {
      position: relative;
      width: 3pc;
      overflow: auto
    }

    .at-share-open-control-left {
      position: fixed;
      top: 20%;
      z-index: 100020;
      left: 0;
      width: 22px
    }

    .at-share-close-control .at4-arrow.at-left {
      float: right
    }

    .atss-left {
      left: 0;
      float: left;
      right: auto
    }

    .atss-right {
      left: auto;
      float: right;
      right: 0
    }

    .atss-right.at-share-close-control .at4-arrow.at-right {
      position: relative;
      right: 0;
      overflow: auto
    }

    .atss-right.at-share-close-control .at4-arrow {
      float: left
    }

    .at-share-open-control-right {
      position: fixed;
      top: 20%;
      z-index: 100020;
      right: 0;
      width: 22px;
      float: right
    }

    .atss-right .at-share-close-control .at4-arrow {
      float: left
    }

    .atss.atss-right a {
      float: right
    }

    .atss.atss-right .at4-share-title {
      float: right;
      overflow: hidden
    }

    .atss .at-share-btn,
    .atss a {
      position: relative;
      display: block;
      width: 3pc;
      margin: 0;
      outline-offset: -1px;
      text-align: center;
      float: left;
      transition: width .15s ease-in-out;
      overflow: hidden;
      background: #e8e8e8;
      z-index: 100030;
      cursor: pointer
    }

    .at-share-btn::-moz-focus-inner {
      border: 0;
      padding: 0
    }

    .atss-right .at-share-btn {
      float: right
    }

    .atss .at-share-btn {
      border: 0;
      padding: 0
    }

    .atss .at-share-btn:focus,
    .atss .at-share-btn:hover,
    .atss a:focus,
    .atss a:hover {
      width: 4pc
    }

    .atss .at-share-btn .at-icon-wrapper,
    .atss a .at-icon-wrapper {
      display: block;
      padding: 8px 0
    }

    .atss .at-share-btn:last-child,
    .atss a:last-child {
      border: none
    }

    .atss .at-share-btn span .at-icon,
    .atss a span .at-icon {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      width: 2pc;
      height: 2pc;
      line-height: 2pc;
      border: none;
      padding: 0;
      margin: 0 auto;
      overflow: hidden;
      cursor: pointer;
      cursor: hand
    }

    .at4-share .at-custom-sidebar-counter {
      font-family: Helvetica neue, arial;
      vertical-align: top;
      margin-right: 4px;
      display: inline-block;
      text-align: center
    }

    .at4-share .at-custom-sidebar-count {
      font-size: 17px;
      line-height: 1.25em;
      color: #222
    }

    .at4-share .at-custom-sidebar-text {
      font-size: 9px;
      line-height: 1.25em;
      color: #888;
      letter-spacing: 1px
    }

    .at4-share .at4-share-count-container {
      position: absolute;
      left: 0;
      right: auto;
      top: auto;
      bottom: 0;
      width: 100%;
      color: #fff;
      background: inherit
    }

    .at4-share .at4-share-count,
    .at4-share .at4-share-count-container {
      line-height: 1pc;
      font-size: 10px
    }

    .at4-share .at4-share-count {
      text-indent: 0;
      font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
      font-weight: 200;
      width: 100%;
      height: 1pc
    }

    .at4-share .at4-share-count-anchor {
      padding-bottom: 8px;
      text-decoration: none;
      transition: padding .15s ease-in-out .15s, width .15s ease-in-out
    }
  </style>
  <style type="text/css">
    #at4-drawer-outer-container {
      top: 0;
      width: 20pc;
      position: fixed
    }

    #at4-drawer-outer-container.at4-drawer-inline {
      position: relative
    }

    #at4-drawer-outer-container.at4-drawer-inline.at4-drawer-right {
      float: right;
      right: 0;
      left: auto
    }

    #at4-drawer-outer-container.at4-drawer-inline.at4-drawer-left {
      float: left;
      left: 0;
      right: auto
    }

    #at4-drawer-outer-container.at4-drawer-shown,
    #at4-drawer-outer-container.at4-drawer-shown * {
      z-index: 999999
    }

    #at4-drawer-outer-container,
    #at4-drawer-outer-container .at4-drawer-outer,
    #at-drawer {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden
    }

    .at4-drawer-push-content-right-back {
      position: relative;
      right: 0
    }

    .at4-drawer-push-content-right {
      position: relative;
      left: 20pc !important
    }

    .at4-drawer-push-content-left-back {
      position: relative;
      left: 0
    }

    .at4-drawer-push-content-left {
      position: relative;
      right: 20pc !important
    }

    #at4-drawer-outer-container.at4-drawer-right {
      left: auto;
      right: -20pc
    }

    #at4-drawer-outer-container.at4-drawer-left {
      right: auto;
      left: -20pc
    }

    #at4-drawer-outer-container.at4-drawer-shown.at4-drawer-right {
      left: auto;
      right: 0
    }

    #at4-drawer-outer-container.at4-drawer-shown.at4-drawer-left {
      right: auto;
      left: 0
    }

    #at-drawer {
      top: 0;
      z-index: 9999999;
      height: 100%;
      animation-duration: .4s
    }

    #at-drawer.drawer-push.at-right {
      right: -20pc
    }

    #at-drawer.drawer-push.at-left {
      left: -20pc
    }

    #at-drawer .at-recommended-label {
      padding: 0 0 0 20px;
      color: #999;
      line-height: 3pc;
      font-size: 18px;
      font-weight: 300;
      cursor: default
    }

    #at-drawer-arrow {
      width: 30px;
      height: 5pc
    }

    #at-drawer-arrow.ats-dark {
      background: #262b30
    }

    #at-drawer-arrow.ats-gray {
      background: #f2f2f2
    }

    #at-drawer-open-arrow {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAABcCAYAAAC1OT8uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3ODNCQjdERUQ3QjExRTM5NjFGRUZBODc3MTIwMTNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk3ODNCQjdFRUQ3QjExRTM5NjFGRUZBODc3MTIwMTNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTc4M0JCN0JFRDdCMTFFMzk2MUZFRkE4NzcxMjAxM0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc4M0JCN0NFRDdCMTFFMzk2MUZFRkE4NzcxMjAxM0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7kstzCAAAB4ElEQVR42uyWv0oDQRDGb9dYimgVjliID2Ca9AGfwtZob2Grja1PIFj7EhGCYK99VPBPOkVMp8X5rc6FeN7dfjOksMjAxwXZ3667OzvfLKRr682l5ZV9aDh+fxsnRHhoDzqGLjFBi4XOoFtoAxowoB893o/w7WpAl/+QgQMBwwRdTPhUC2lAV/wDA7qy5WOgq9psHejqTqkKdLE7KYCv0JZjMgBgB58raBG6mP1K6j2pT099T+qMUOeeOss1wDcEIA1PnQXy576rAUI0oFMoC7VCnn40Gs8Pd4lAiXNUKmJ0lh1mPzGEWiyUCqAGW3Pwv4IvUJsFO9CHgP3Zr6Te0xwgAf3LxaAjS241pbikCRkOg+nSJdV4p8HOPl3vvRYI5dtrgVDvvcWovcWovcWovcWovcWovcWovQChWNywNpqvdAKtQp/QNmPUIQ6kwwqt2Xmsxf6GMPM1Pptsbz45CPmXqKb+15Gz4J/LZcDSNIqBlQlbB0afe1mmUDWiCNKFZRq0VKMeXY1CTDq2sJLWsCmoaBBRqNRR6qBKC6qCaj2rDIqaXBGiXHEaom00h1S+K3fVlr6HNuqgvgCh0+owt21bybQn8+mZ78mcEebcM2e5+T2ZX24ZqCph0qn1vgQYAJ/KDpLQr2tPAAAAAElFTkSuQmCC);
      background-repeat: no-repeat;
      width: 13px;
      height: 23px;
      margin: 28px 0 0 8px
    }

    .at-left #at-drawer-open-arrow {
      background-position: 0 -46px
    }

    .ats-dark #at-drawer-open-arrow {
      background-position: 0 -23px
    }

    .ats-dark.at-left #at-drawer-open-arrow {
      background-position: 0 -69px
    }

    #at-drawer-arrow.at4-drawer-modern-browsers {
      position: fixed;
      top: 40%;
      background-repeat: no-repeat;
      background-position: 0 0 !important;
      z-index: 9999999
    }

    .at4-drawer-inline #at-drawer-arrow {
      position: absolute
    }

    #at-drawer-arrow.at4-drawer-modern-browsers.at-right {
      right: 0
    }

    #at-drawer-arrow.at4-drawer-modern-browsers.at-left {
      left: 0
    }

    .at4-drawer-push-animation-left {
      transition: left .4s ease-in-out .15s
    }

    .at4-drawer-push-animation-right {
      transition: right .4s ease-in-out .15s
    }

    #at-drawer.drawer-push.at4-drawer-push-animation-right {
      right: 0
    }

    #at-drawer.drawer-push.at4-drawer-push-animation-right-back {
      right: -20pc !important
    }

    #at-drawer.drawer-push.at4-drawer-push-animation-left {
      left: 0
    }

    #at-drawer.drawer-push.at4-drawer-push-animation-left-back {
      left: -20pc !important
    }

    #at-drawer .at4-closebutton.drawer-close {
      content: 'X';
      color: #999;
      display: block;
      position: absolute;
      margin: 0;
      top: 0;
      right: 0;
      width: 3pc;
      height: 45px;
      line-height: 45px;
      overflow: hidden;
      opacity: .5
    }

    #at-drawer.ats-dark .at4-closebutton.drawer-close {
      color: #fff
    }

    #at-drawer .at4-closebutton.drawer-close:hover {
      opacity: 1
    }

    #at-drawer.ats-dark.at4-recommended .at4-logo-container a {
      color: #666
    }

    #at-drawer.at4-recommended .at4-recommended-vertical {
      padding: 0
    }

    #at-drawer.at4-recommended .at4-recommended-item .sponsored-label {
      margin: 2px 0 0 21px;
      color: #ddd
    }

    #at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item {
      position: relative;
      padding: 0;
      width: 20pc;
      height: 180px;
      margin: 0
    }

    #at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img a:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .65);
      z-index: 1000000;
      transition: all .2s ease-in-out
    }

    #at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item.at-hover .at4-recommended-item-img a:after {
      background: rgba(0, 0, 0, .8)
    }

    #at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img,
    #at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img a,
    #at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img img {
      width: 20pc;
      height: 180px;
      float: none
    }

    #at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 70px
    }

    #at-drawer .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4 {
      color: #fff;
      position: absolute;
      height: 52px;
      top: 0;
      left: 20px;
      right: 20px;
      margin: 0;
      padding: 0;
      line-height: 25px;
      font-size: 20px;
      font-weight: 600;
      z-index: 1000001;
      text-decoration: none;
      text-transform: none
    }

    #at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4 a:hover {
      text-decoration: none
    }

    #at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4 a:link {
      color: #fff
    }

    #at-drawer.at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption small {
      position: absolute;
      top: auto;
      bottom: 10px;
      left: 20px;
      width: auto;
      color: #ccc
    }

    #at-drawer.at4-recommended .at4-logo-container {
      margin-left: 20px
    }

    #at-drawer.ats-dark.at4-recommended .at4-logo-container a:hover {
      color: #fff
    }

    #at-drawer.at4-recommended .at-logo {
      margin: 0
    }
  </style>
  <style type="text/css">
    .at4-follow.at-mobile {
      display: none !important
    }

    .at4-follow {
      position: fixed;
      top: 0;
      right: 0;
      font-weight: 400;
      color: #666;
      cursor: default;
      z-index: 10001
    }

    .at4-follow .at4-follow-inner {
      position: relative;
      padding: 10px 24px 10px 15px
    }

    .at4-follow-inner,
    .at-follow-open-control {
      border: 0 solid #c5c5c5;
      border-width: 1px 0 1px 1px;
      margin-top: -1px
    }

    .at4-follow .at4-follow-container {
      margin-left: 9pt
    }

    .at4-follow.at4-follow-24 .at4-follow-container {
      height: 24px;
      line-height: 23px;
      font-size: 13px
    }

    .at4-follow.at4-follow-32 .at4-follow-container {
      width: 15pc;
      height: 2pc;
      line-height: 2pc;
      font-size: 14px
    }

    .at4-follow .at4-follow-container .at-follow-label {
      display: inline-block;
      height: 24px;
      line-height: 24px;
      margin-right: 10px;
      padding: 0;
      cursor: default;
      float: left
    }

    .at4-follow .at4-follow-container .at-icon-wrapper {
      height: 24px;
      width: 24px
    }

    .at4-follow.ats-transparent .at4-follow-inner,
    .at-follow-open-control.ats-transparent {
      border-color: transparent
    }

    .at4-follow.ats-dark .at4-follow-inner,
    .at-follow-open-control.ats-dark {
      background: #262b30;
      border-color: #000;
      color: #fff
    }

    .at4-follow.ats-dark .at-follow-close-control {
      background-color: #262b30
    }

    .at4-follow.ats-light .at4-follow-inner {
      background: #fff;
      border-color: #c5c5c5
    }

    .at4-follow.ats-gray .at4-follow-inner,
    .at-follow-open-control.ats-gray {
      background: #f2f2f2;
      border-color: #c5c5c5
    }

    .at4-follow.ats-light .at4-follow-close-control,
    .at-follow-open-control.ats-light {
      background: #e5e5e5
    }

    .at4-follow .at4-follow-inner .at4-follow-close-control {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 20px;
      cursor: pointer;
      display: none
    }

    .at4-follow .at4-follow-inner .at4-follow-close-control div {
      display: block;
      line-height: 20px;
      text-indent: -9999em;
      margin-top: calc(50% + 1px);
      overflow: hidden
    }

    .at-follow-open-control div.at4-arrow.at-left {
      background-position: 0 -2px
    }

    .at-follow-open-control {
      position: fixed;
      height: 35px;
      top: 0;
      right: 0;
      padding-top: 10px;
      z-index: 10002
    }

    .at-follow-btn {
      margin: 0 5px 5px 0;
      padding: 0;
      outline-offset: -1px;
      display: inline-block;
      box-sizing: content-box;
      transition: all .2s ease-in-out
    }

    .at-follow-btn:focus,
    .at-follow-btn:hover {
      transform: translateY(-4px)
    }

    .at4-follow-24 .at-follow-btn {
      height: 25px;
      line-height: 0;
      width: 25px
    }
  </style>
  <style type="text/css">
    .at-follow-tbx-element .at300b,
    .at-follow-tbx-element .at300m {
      display: inline-block;
      width: auto;
      padding: 0;
      margin: 0 2px 5px;
      outline-offset: -1px;
      transition: all .2s ease-in-out
    }

    .at-follow-tbx-element .at300b:focus,
    .at-follow-tbx-element .at300b:hover,
    .at-follow-tbx-element .at300m:focus,
    .at-follow-tbx-element .at300m:hover {
      transform: translateY(-4px)
    }

    .at-follow-tbx-element .addthis_vertical_style .at300b,
    .at-follow-tbx-element .addthis_vertical_style .at300m {
      display: block
    }

    .at-follow-tbx-element .addthis_vertical_style .at300b .addthis_follow_label,
    .at-follow-tbx-element .addthis_vertical_style .at300b .at-icon-wrapper,
    .at-follow-tbx-element .addthis_vertical_style .at300m .addthis_follow_label,
    .at-follow-tbx-element .addthis_vertical_style .at300m .at-icon-wrapper {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px
    }

    .at-follow-tbx-element .addthis_vertical_style .at300b:focus,
    .at-follow-tbx-element .addthis_vertical_style .at300b:hover,
    .at-follow-tbx-element .addthis_vertical_style .at300m:focus,
    .at-follow-tbx-element .addthis_vertical_style .at300m:hover {
      transform: none
    }
  </style>
  <style type="text/css">
    .at4-jumboshare .at-share-btn {
      display: inline-block;
      margin-right: 13px;
      margin-top: 13px
    }

    .at4-jumboshare .at-share-btn .at-icon {
      float: left
    }

    .at4-jumboshare .at-share-btn .at300bs {
      display: inline-block;
      float: left;
      cursor: pointer
    }

    .at4-jumboshare .at4-mobile .at-share-btn .at-icon,
    .at4-jumboshare .at4-mobile .at-share-btn .at-icon-wrapper {
      margin: 0;
      padding: 0
    }

    .at4-jumboshare .at4-mobile .at-share-btn {
      padding: 0
    }

    .at4-jumboshare .at4-mobile .at-share-btn .at-label {
      display: none
    }

    .at4-jumboshare .at4-count {
      font-size: 60px;
      line-height: 60px;
      font-family: Helvetica neue, arial;
      font-weight: 700
    }

    .at4-jumboshare .at4-count-container {
      display: table-cell;
      text-align: center;
      min-width: 200px;
      vertical-align: middle;
      border-right: 1px solid #ccc;
      padding-right: 20px
    }

    .at4-jumboshare .at4-share-container {
      display: table-cell;
      vertical-align: middle;
      padding-left: 20px
    }

    .at4-jumboshare .at4-share-container.at-share-tbx-element {
      padding-top: 0
    }

    .at4-jumboshare .at4-title {
      position: relative;
      font-size: 18px;
      line-height: 18px;
      bottom: 2px
    }

    .at4-jumboshare .at4-spacer {
      height: 1px;
      display: block;
      visibility: hidden;
      opacity: 0
    }

    .at4-jumboshare .at-share-btn {
      display: inline-block;
      margin: 0 2px;
      line-height: 0;
      padding: 0;
      overflow: hidden;
      text-decoration: none;
      text-transform: none;
      color: #fff;
      cursor: pointer;
      transition: all .2s ease-in-out;
      border: 0;
      background-color: transparent
    }

    .at4-jumboshare .at-share-btn:focus,
    .at4-jumboshare .at-share-btn:hover {
      transform: translateY(-4px);
      color: #fff;
      text-decoration: none
    }

    .at4-jumboshare .at-label {
      font-family: helvetica neue, helvetica, arial, sans-serif;
      font-size: 9pt;
      padding: 0 15px 0 0;
      margin: 0;
      height: 2pc;
      line-height: 2pc;
      background: none
    }

    .at4-jumboshare .at-share-btn:hover,
    .at4-jumboshare .at-share-btn:link {
      text-decoration: none
    }

    .at4-jumboshare .at-share-btn::-moz-focus-inner {
      border: 0;
      padding: 0
    }

    .at4-jumboshare.at-mobile .at-label {
      display: none
    }
  </style>
  <style type="text/css">
    .at4-recommendedbox-outer-container {
      display: inline
    }

    .at4-recommended-outer {
      position: static
    }

    .at4-recommended {
      top: 20%;
      margin: 0;
      text-align: center;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      color: #666
    }

    .at4-recommended.at-inline .at4-recommended-horizontal {
      text-align: left
    }

    .at4-recommended-recommendedbox {
      padding: 0;
      z-index: inherit
    }

    .at4-recommended-recommended {
      padding: 40px 0
    }

    .at4-recommended-horizontal {
      max-height: 340px
    }

    .at4-recommended.at-medium .at4-recommended-horizontal {
      max-height: 15pc
    }

    .at4-recommended.at4-minimal.at-medium .at4-recommended-horizontal {
      padding-top: 10px;
      max-height: 230px
    }

    .at4-recommended-text-only .at4-recommended-horizontal {
      max-height: 130px
    }

    .at4-recommended-horizontal {
      padding-top: 5px;
      overflow-y: hidden
    }

    .at4-minimal {
      background: none;
      color: #000;
      border: none !important;
      box-shadow: none !important
    }

    @media screen and (max-width:900px) {

      .at4-recommended-horizontal .at4-recommended-item,
      .at4-recommended-horizontal .at4-recommended-item .at4-recommended-item-img {
        width: 15pc
      }
    }

    .at4-recommended.at4-minimal .at4-recommended-horizontal .at4-recommended-item .at4-recommended-item-caption {
      padding: 0 0 10px
    }

    .at4-recommended.at4-minimal .at4-recommended-horizontal .at4-recommended-item-caption {
      padding: 20px 0 0 !important
    }

    .addthis-smartlayers .at4-recommended .at-h3.at-recommended-label {
      margin: 0;
      padding: 0;
      font-weight: 300;
      font-size: 18px;
      line-height: 24px;
      color: #464646;
      width: 100%;
      display: inline-block;
      zoom: 1
    }

    .addthis-smartlayers .at4-recommended.at-inline .at-h3.at-recommended-label {
      text-align: left
    }

    #at4-thankyou .addthis-smartlayers .at4-recommended.at-inline .at-h3.at-recommended-label {
      text-align: center
    }

    .at4-recommended .at4-recommended-item {
      display: inline-block;
      zoom: 1;
      position: relative;
      background: #fff;
      border: 1px solid #c5c5c5;
      width: 200px;
      margin: 10px
    }

    .addthis_recommended_horizontal .at4-recommended-item {
      border: none
    }

    .at4-recommended .at4-recommended-item .sponsored-label {
      color: #666;
      font-size: 9px;
      position: absolute;
      top: -20px
    }

    .at4-recommended .at4-recommended-item-img .at-tli,
    .at4-recommended .at4-recommended-item-img a {
      position: absolute;
      left: 0
    }

    .at4-recommended.at-inline .at4-recommended-horizontal .at4-recommended-item {
      margin: 10px 20px 0 0
    }

    .at4-recommended.at-medium .at4-recommended-horizontal .at4-recommended-item {
      margin: 10px 10px 0 0
    }

    .at4-recommended.at-medium .at4-recommended-item {
      width: 140px;
      overflow: hidden
    }

    .at4-recommended .at4-recommended-item .at4-recommended-item-img {
      position: relative;
      text-align: center;
      width: 100%;
      height: 200px;
      line-height: 0;
      overflow: hidden
    }

    .at4-recommended .at4-recommended-item .at4-recommended-item-img a {
      display: block;
      width: 100%;
      height: 200px
    }

    .at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-img,
    .at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-img a {
      height: 140px
    }

    .at4-recommended .at4-recommended-item .at4-recommended-item-img img {
      position: absolute;
      top: 0;
      left: 0;
      min-height: 0;
      min-width: 0;
      max-height: none;
      max-width: none;
      margin: 0;
      padding: 0
    }

    .at4-recommended .at4-recommended-item .at4-recommended-item-caption {
      height: 74px;
      overflow: hidden;
      padding: 20px;
      text-align: left;
      -ms-box-sizing: content-box;
      -o-box-sizing: content-box;
      box-sizing: content-box
    }

    .at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-caption {
      height: 50px;
      padding: 15px
    }

    .at4-recommended .at4-recommended-item .at4-recommended-item-caption .at-h4 {
      height: 54px;
      margin: 0 0 5px;
      padding: 0;
      overflow: hidden;
      word-wrap: break-word;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      text-align: left
    }

    .at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-caption .at-h4 {
      font-size: 9pt;
      line-height: 1pc;
      height: 33px
    }

    .at4-recommended .at4-recommended-item:hover .at4-recommended-item-caption .at-h4 {
      text-decoration: underline
    }

    .at4-recommended a:link,
    .at4-recommended a:visited {
      text-decoration: none;
      color: #464646
    }

    .at4-recommended .at4-recommended-item .at4-recommended-item-caption .at-h4 a:hover {
      text-decoration: underline;
      color: #000
    }

    .at4-recommended .at4-recommended-item .at4-recommended-item-caption small {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 11px;
      color: #666
    }

    .at4-recommended.at-medium .at4-recommended-item .at4-recommended-item-caption small {
      font-size: 9px
    }

    .at4-recommended .at4-recommended-vertical {
      padding: 15px 0 0
    }

    .at4-recommended .at4-recommended-vertical .at4-recommended-item {
      display: block;
      width: auto;
      max-width: 100%;
      height: 60px;
      border: none;
      margin: 0 0 15px;
      box-shadow: none;
      background: none
    }

    .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img,
    .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-img img {
      width: 60px;
      height: 60px;
      float: left
    }

    .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption {
      border-top: none;
      margin: 0;
      height: 60px;
      padding: 3px 5px
    }

    .at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption .at-h4 {
      height: 38px;
      margin: 0
    }

    .at4-recommended .at4-recommended-vertical .at4-recommended-item .at4-recommended-item-caption small {
      position: absolute;
      bottom: 0
    }

    .at4-recommended .at-recommended-label.at-vertical {
      text-align: left
    }

    .at4-no-image-light-recommended,
    .at4-no-image-minimal-recommended {
      background-color: #f2f2f2 !important
    }

    .at4-no-image-gray-recommended {
      background-color: #e6e6e5 !important
    }

    .at4-no-image-dark-recommended {
      background-color: #4e555e !important
    }

    .at4-recommended .at4-recommended-item-placeholder-img {
      background-repeat: no-repeat !important;
      background-position: center !important;
      width: 100% !important;
      height: 100% !important
    }

    .at4-recommended-horizontal .at4-no-image-dark-recommended .at4-recommended-item-placeholder-img {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlFNUUyQTg3MTI0RDExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlFNUUyQTg4MTI0RDExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUU1RTJBODUxMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUU1RTJBODYxMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oCfPiAAABfUlEQVR42uyWTU/DMAyGm3bdBxp062hHe+PC//9HCIkDYpNAO7CPAuWN5Eohyhpno2GHWqq8pO78xHHsiLquH4L/l6cwuBAZaOPKs//YBFIJIR59UiAt7huYi90aE/UQakTDLaL26RUEAAJqiefm93T9Bpj1X4O0bY0OIUXCpYBJvYDAUWyAUCWliHGTcnpqRMaM72ImRAJVknYG+eb4YEDIBeU0zGnsBLK1ODogYSsLhDwIJeVVk18lzfNA4ERGZNXi59UCIQhiYDilpSm/jp4awLxDvWhlf4/nGe8+LLuSt+SZul28ggaHG6gNVhDR+IuRFzOoxGKWwG7vVFm5AAQxgcqYpzrjFjR9zwPH5LSuT7XlNr2MQm5LzqjLpncNNaM+s8M27Y60g3FwhoSMzrtUQllgLtRs5pZ2cB4IhbvQbGRZv1NsrhyS8+SI5Mo9RJWpjAI1xqKL+0iEP180vy214JbeR12AyOgsHI7e0NfFyKv0ID1ID+IqPwIMAOeljGQOryBmAAAAAElFTkSuQmCC) !important
    }

    .at4-recommended-vertical .at4-no-image-dark-recommended .at4-recommended-item-placeholder-img {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREMyNTM2MTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzREMyNTM3MTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNEQzI1MzQxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNEQzI1MzUxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GfbtkAAAAxklEQVR42qRSTQvCMAxduk53mEOHKFPP/v8/5cGTiIibivVFUomlG7gFHvloXpKmJefcPhkmNyvGEWj+IOZA6ckPImoxxVwOLvCvXUzkpayNCpRQK64IbOBnAYGAXMeMslNlU+CzrIEdCkxi5DPAoz6BE8ZuVNdKJuL8rS9sv62IXlCHyP0KqKUKZXK9uwkSLVArfwpVR3b225kXwovibcP+jC4jUtfWPZmfqJJnYlkAM128j1z0nHWKSUbIKDL/msHktwADAPptQo+vkZNLAAAAAElFTkSuQmCC) !important
    }

    .at4-recommended-horizontal .at4-no-image-gray-recommended .at4-recommended-item-placeholder-img,
    .at4-recommended-horizontal .at4-no-image-light-recommended .at4-recommended-item-placeholder-img,
    .at4-recommended-horizontal .at4-no-image-minimal-recommended .at4-recommended-item-placeholder-img {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAfCAYAAACCox+xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREMyNTMyMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzREMyNTMzMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUU1RTJBODkxMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUU1RTJBOEExMjREMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dfDQvAAABg0lEQVR42uyWS0vDQBDH82jaKNW0qUltbl68e/Di98eLBz+CCB5EBaWIpUat/4UJLMuame1j7SEDYbqbKfPLvHbDi8ur8+D/5T4K9kR6xrr27D+xgdS3N9d3PilQFmcNzN6mxkbdhxrQcoGofXkFAUAINcVzrG2vsP8KmJdtg7SlxoRQouBywOReQOAosUDoklPEpEU5XDciqeB/iRAig6pIO4P8CHysBBDqg0palrR2Alkwjj5RsDUDoRqhorpq6quifRkInKiIPLf4eWIgQoLoWbq0stXXn10DmDeoR2PsL/E84N0Hk5Wypc70dMkGGhzOoeb4gpjW34K6GEFljFkGu6XTZJUCEMQBVCHs6kI60MycB47FyUmo20oPvYJCzhVnvIsR3zg5ghoRTNpyHKTBBhIJTt6pFsoZ9iLDZswcB5uBULhnho0a66eazaFDca59Hym1e4guQ4rCO4Fu/T4Sw8Gk+c3MghN6H+8CRKVg4tB6fV8XI6/SgXQgHYir/AowAMU5TskhKVUNAAAAAElFTkSuQmCC) !important
    }

    .at4-recommended-vertical .at4-no-image-gray-recommended .at4-recommended-item-placeholder-img,
    .at4-recommended-vertical .at4-no-image-light-recommended .at4-recommended-item-placeholder-img,
    .at4-recommended-vertical .at4-no-image-minimal-recommended .at4-recommended-item-placeholder-img {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREMyNTNBMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzREMyNTNCMTI0RjExRTM4NzAwREJDRjlCQzAyMUVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNEQzI1MzgxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNEQzI1MzkxMjRGMTFFMzg3MDBEQkNGOUJDMDIxRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz65Fr9cAAAA0ElEQVR42qRRuQrCQBDd3SSaIgYNosSrtLew8f+xsfAnYmEVRMR4YHwjExjCbsBk4DHHzptjR2+2u7VqJ3efjTNQ/EEMgbgiv46H/QNTDPnhCv/mYiLPI21EIIaaUEVgBj+oETQQypgRtidsXfNJpsACBXo28gWgUd9AjrEL0TXhiSh/XhWudlZI/kCdLPtFUGMRCni9p6kl+kAq/D5UavmzX2fNd87obsCSfztnrOR0rjvTiRImkoyAQQNRyZ2jhjenGNVBOpF1WZatyV8BBgBJ+irgS/KHdAAAAABJRU5ErkJggg==) !important
    }

    #at-drawer.ats-dark,
    .at4-recommended.ats-dark .at4-recommended-horizontal .at4-recommended-item-caption,
    .at4-recommended.ats-dark .at4-recommended-vertical .at4-recommended-item-caption {
      background: #262b30
    }

    #at-drawer.ats-gray,
    .at4-recommended.ats-gray .at4-recommended-horizontal .at4-recommended-item-caption {
      background: #f2f2f2
    }

    #at-drawer.ats-light,
    .at4-recommended.ats-light .at4-recommended-horizontal .at4-recommended-item-caption {
      background: #fff
    }

    .at4-recommended.ats-dark .at4-recommended-vertical .at4-recommended-item {
      background: none
    }

    .at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption a:hover,
    .at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption a:link,
    .at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption a:visited,
    .at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption small,
    .at4-recommended.ats-dark .at4-recommended-item-caption,
    .at4-recommended.ats-dark .at-logo a:hover,
    .at4-recommended.ats-dark .at-recommended-label.at-vertical {
      color: #fff
    }

    .at4-recommended-vertical-logo {
      padding-top: 0;
      text-align: left
    }

    .at4-recommended-vertical-logo .at4-logo-container {
      line-height: 10px
    }

    .at4-recommended-horizontal-logo {
      text-align: center
    }

    .at4-recommended.at-inline .at4-recommended-horizontal-logo {
      text-align: left
    }

    #at4-thankyou .at4-recommended.at-inline .at4-recommended-horizontal {
      text-align: center
    }

    .at4-recommended .at-logo {
      margin: 10px 0 0;
      padding: 0;
      height: 25px;
      overflow: auto;
      -ms-box-sizing: content-box;
      -o-box-sizing: content-box;
      box-sizing: content-box
    }

    .at4-recommended.at-inline .at4-recommended-horizontal .at-logo {
      text-align: left
    }

    .at4-recommended .at4-logo-container a.at-sponsored-link {
      color: #666
    }

    .at4-recommended-class .at4-logo-container a:hover,
    .at4-recommendedbox-outer-container .at4-recommended-recommendedbox .at4-logo-container a:hover {
      color: #000
    }
  </style>
  <style type="text/css">
    .at-recommendedjumbo-outer-container {
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      color: #000
    }

    .at-recommendedjumbo-footer {
      position: relative;
      width: 100%;
      height: 510px;
      overflow: hidden;
      transition: all .3s ease-in-out
    }

    .at-mobile .at-recommendedjumbo-footer {
      height: 250px
    }

    .at-recommendedjumbo-footer #bg-link:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .75)
    }

    .at-recommendedjumbo-footer:hover #bg-link:after {
      background: rgba(0, 0, 0, .85)
    }

    .at-recommendedjumbo-footer *,
    .at-recommendedjumbo-footer :after,
    .at-recommendedjumbo-footer :before {
      box-sizing: border-box
    }

    .at-recommendedjumbo-footer:hover #at-recommendedjumbo-footer-bg {
      animation: atRecommendedJumboAnimatedBackground 1s ease-in-out 1;
      animation-fill-mode: forwards
    }

    .at-recommendedjumbo-footer #at-recommendedjumbo-top-holder {
      position: absolute;
      top: 0;
      padding: 0 40px;
      width: 100%
    }

    .at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-top-holder {
      padding: 0 20px
    }

    .at-recommendedjumbo-footer .at-recommendedjumbo-footer-inner {
      position: relative;
      text-align: center;
      font-family: helvetica, arial, sans-serif;
      z-index: 2;
      width: 100%
    }

    .at-recommendedjumbo-footer #at-recommendedjumbo-label-holder {
      margin: 40px 0 0;
      max-height: 30px
    }

    .at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-label-holder {
      margin: 20px 0 0;
      max-height: 20px
    }

    .at-recommendedjumbo-footer #at-recommendedjumbo-label {
      font-weight: 300;
      font-size: 24px;
      line-height: 24px;
      color: #fff;
      margin: 0
    }

    .at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-label {
      font-weight: 150;
      font-size: 14px;
      line-height: 14px
    }

    .at-recommendedjumbo-footer #at-recommendedjumbo-title-holder {
      margin: 20px 0 0;
      min-height: 3pc;
      max-height: 78pt
    }

    .at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-title-holder {
      margin: 10px 0 0;
      min-height: 24px;
      max-height: 54px
    }

    .at-recommendedjumbo-footer #at-recommendedjumbo-content-title {
      font-size: 3pc;
      line-height: 52px;
      font-weight: 700;
      margin: 0
    }

    .at-mobile .at-recommendedjumbo-footer #at-recommendedjumbo-content-title {
      font-size: 24px;
      line-height: 27px
    }

    .at-recommendedjumbo-footer a {
      text-decoration: none;
      color: #fff
    }

    .at-recommendedjumbo-footer a:visited {
      color: #fff
    }

    .at-recommendedjumbo-footer small {
      margin: 20px 0 0;
      display: inline-block;
      height: 2pc;
      line-height: 2pc;
      font-size: 14px;
      color: #ccc;
      cursor: default
    }

    .at-mobile .at-recommendedjumbo-footer small {
      margin: 10px 0 0;
      height: 14px;
      line-height: 14px;
      font-size: 9pt
    }

    .at-recommendedjumbo-footer .at-logo-container {
      position: absolute;
      bottom: 20px;
      margin: auto;
      left: 0;
      right: 0
    }

    .at-mobile .at-recommendedjumbo-footer .at-logo-container {
      bottom: 10px
    }

    .at-recommendedjumbo-footer a.at-sponsored-link {
      color: #ccc
    }

    .at-recommendedjumbo-footer div #at-recommendedjumbo-logo-link {
      padding: 2px 0 0 11px;
      text-decoration: none;
      line-height: 20px;
      font-family: helvetica, arial, sans-serif;
      font-size: 9px;
      color: #ccc
    }

    @keyframes atRecommendedJumboAnimatedBackground {
      0% {
        transform: scale(1, 1)
      }

      to {
        transform: scale(1.1, 1.1)
      }
    }
  </style>
  <style type="text/css">
    .at-resp-share-element {
      position: relative;
      padding: 0;
      margin: 0;
      font-size: 0;
      line-height: 0
    }

    .at-resp-share-element:after,
    .at-resp-share-element:before {
      content: " ";
      display: table
    }

    .at-resp-share-element.at-mobile .at4-share-count-container,
    .at-resp-share-element.at-mobile .at-label {
      display: none
    }

    .at-resp-share-element .at-share-btn {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      margin: 0 2px 5px;
      padding: 0;
      overflow: hidden;
      line-height: 0;
      text-decoration: none;
      text-transform: none;
      color: #fff;
      cursor: pointer;
      transition: all .2s ease-in-out;
      border: 0;
      font-family: helvetica neue, helvetica, arial, sans-serif;
      background-color: transparent
    }

    .at-resp-share-element .at-share-btn::-moz-focus-inner {
      border: 0;
      padding: 0
    }

    .at-resp-share-element .at-share-btn:focus,
    .at-resp-share-element .at-share-btn:hover {
      transform: translateY(-4px);
      color: #fff;
      text-decoration: none
    }

    .at-resp-share-element .at-share-btn .at-icon-wrapper {
      float: left
    }

    .at-resp-share-element .at-share-btn.at-share-btn.at-svc-compact:hover {
      transform: none
    }

    .at-resp-share-element .at-share-btn .at-label {
      font-family: helvetica neue, helvetica, arial, sans-serif;
      font-size: 9pt;
      padding: 0 15px 0 0;
      margin: 0 0 0 5px;
      height: 2pc;
      line-height: 2pc;
      background: none
    }

    .at-resp-share-element .at-icon,
    .at-resp-share-element .at-label {
      cursor: pointer
    }

    .at-resp-share-element .at4-share-count-container {
      text-decoration: none;
      float: right;
      padding-right: 15px;
      font-size: 9pt
    }

    .at-mobile .at-resp-share-element .at-label {
      display: none
    }

    .at-resp-share-element.at-mobile .at-share-btn {
      margin-right: 5px
    }

    .at-mobile .at-resp-share-element .at-share-btn {
      padding: 5px;
      margin-right: 5px
    }
  </style>
  <style type="text/css">
    .at-share-tbx-element {
      position: relative;
      margin: 0;
      color: #fff;
      font-size: 0
    }

    .at-share-tbx-element,
    .at-share-tbx-element .at-share-btn {
      font-family: helvetica neue, helvetica, arial, sans-serif;
      padding: 0;
      line-height: 0
    }

    .at-share-tbx-element .at-share-btn {
      cursor: pointer;
      margin: 0 5px 5px 0;
      display: inline-block;
      overflow: hidden;
      border: 0;
      text-decoration: none;
      text-transform: none;
      background-color: transparent;
      color: inherit;
      transition: all .2s ease-in-out
    }

    .at-share-tbx-element .at-share-btn:focus,
    .at-share-tbx-element .at-share-btn:hover {
      transform: translateY(-4px);
      outline-offset: -1px;
      color: inherit
    }

    .at-share-tbx-element .at-share-btn::-moz-focus-inner {
      border: 0;
      padding: 0
    }

    .at-share-tbx-element .at-share-btn.at-share-btn.at-svc-compact:hover {
      transform: none
    }

    .at-share-tbx-element .at-icon-wrapper {
      vertical-align: middle
    }

    .at-share-tbx-element .at4-share-count,
    .at-share-tbx-element .at-label {
      margin: 0 7.5px 0 2.5px;
      text-decoration: none;
      vertical-align: middle;
      display: inline-block;
      background: none;
      height: 0;
      font-size: inherit;
      line-height: inherit;
      color: inherit
    }

    .at-share-tbx-element.at-mobile .at4-share-count,
    .at-share-tbx-element.at-mobile .at-label {
      display: none
    }

    .at-share-tbx-element .at_native_button {
      vertical-align: middle
    }

    .at-share-tbx-element .addthis_counter.addthis_bubble_style {
      margin: 0 2px;
      vertical-align: middle;
      display: inline-block
    }

    .at-share-tbx-element .fb_iframe_widget {
      display: block
    }

    .at-share-tbx-element.at-share-tbx-native .at300b {
      vertical-align: middle
    }

    .at-style-responsive .at-share-btn {
      padding: 5px
    }

    .at-style-jumbo {
      display: table
    }

    .at-style-jumbo .at4-spacer {
      height: 1px;
      display: block;
      visibility: hidden;
      opacity: 0
    }

    .at-style-jumbo .at4-count-container {
      display: table-cell;
      text-align: center;
      min-width: 200px;
      vertical-align: middle;
      border-right: 1px solid #ccc;
      padding-right: 20px
    }

    .at-style-jumbo .at4-count {
      font-size: 60px;
      line-height: 60px;
      font-weight: 700
    }

    .at-style-jumbo .at4-count-title {
      position: relative;
      font-size: 18px;
      line-height: 18px;
      bottom: 2px
    }

    .at-style-jumbo .at-share-btn-elements {
      display: table-cell;
      vertical-align: middle;
      padding-left: 20px
    }

    .at_flat_counter {
      cursor: pointer;
      font-family: helvetica, arial, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      display: inline-block;
      position: relative;
      vertical-align: top;
      height: auto;
      margin: 0 5px;
      padding: 0 6px;
      left: -1px;
      background: #ebebeb;
      color: #32363b;
      transition: all .2s ease
    }

    .at_flat_counter:after {
      top: 30%;
      left: -4px;
      content: "";
      position: absolute;
      border-width: 5px 8px 5px 0;
      border-style: solid;
      border-color: transparent #ebebeb transparent transparent;
      display: block;
      width: 0;
      height: 0;
      transform: translateY(360deg)
    }

    .at_flat_counter:hover {
      background: #e1e2e2
    }
  </style>
  <style type="text/css">
    .at4-thankyou-background {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      -webkit-overflow-scrolling: touch;
      z-index: 9999999;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpizCuu/sRABGBiIBKMKqSOQoAAAwC8KgJipENhxwAAAABJRU5ErkJggg==);
      background: hsla(217, 6%, 46%, .95)
    }

    .at4-thankyou-background.at-thankyou-shown {
      position: fixed
    }

    .at4-thankyou-inner {
      position: absolute;
      width: 100%;
      top: 10%;
      left: 50%;
      margin-left: -50%;
      text-align: center
    }

    .at4-thankyou-mobile .at4-thankyou-inner {
      top: 5%
    }

    .thankyou-description {
      font-weight: 400
    }

    .at4-thankyou-background .at4lb-inner {
      position: relative;
      width: 100%;
      height: 100%
    }

    .at4-thankyou-background .at4lb-inner .at4x {
      position: absolute;
      top: 15px;
      right: 15px;
      display: block;
      width: 20px;
      height: 20px;
      padding: 20px;
      margin: 0;
      cursor: pointer;
      transition: opacity .25s ease-in;
      opacity: .4;
      background: url("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTEvMTMvMTKswDp5AAAAd0lEQVQ4jb2VQRLAIAgDE///Z3qqY1FAhalHMCsCIkVEAIAkkVgvp2lDBgYAnAyHkWotLccNrEd4A7X2TqIdqLfnWBAdaF5rJdyJfjtPH5GT37CaGhoVq3nOm/XflUuLUto2pY1d+vRKh0Pp+MrAVtDe2JkvYNQ+jVSEEFmOkggAAAAASUVORK5CYII=") no-repeat center center;
      overflow: hidden;
      text-indent: -99999em;
      border: 1px solid transparent
    }

    .at4-thankyou-background .at4lb-inner .at4x:focus,
    .at4-thankyou-background .at4lb-inner .at4x:hover {
      border: 1px solid #fff;
      border-radius: 50%;
      outline: 0
    }

    .at4-thankyou-background .at4lb-inner #at4-palogo {
      position: absolute;
      bottom: 10px;
      display: inline-block;
      text-decoration: none;
      font-family: helvetica, arial, sans-serif;
      font-size: 11px;
      cursor: pointer;
      -webkit-transition: opacity .25s ease-in;
      moz-transition: opacity .25s ease-in;
      transition: opacity .25s ease-in;
      opacity: .5;
      z-index: 100020;
      color: #fff;
      padding: 2px 0 0 13px
    }

    .at4-thankyou-background .at4lb-inner #at4-palogo .at-branding-addthis,
    .at4-thankyou-background .at4lb-inner #at4-palogo .at-branding-info {
      color: #fff
    }

    .at4-thankyou-background .at4lb-inner #at4-palogo:hover,
    .at4-thankyou-background.ats-dark .at4lb-inner a#at4-palogo:hover {
      text-decoration: none;
      color: #fff;
      opacity: 1
    }

    .at4-thankyou-background.ats-dark {
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiZGBgeMZABGBiIBKMKqSOQoAAAwB+cQD6hqlbCwAAAABJRU5ErkJggg==");
      background: rgba(0, 0, 0, .85)
    }

    .at4-thankyou-background .thankyou-title {
      color: #fff;
      font-size: 38.5px;
      margin: 10px 20px;
      line-height: 38.5px;
      font-family: helvetica neue, helvetica, arial, sans-serif;
      font-weight: 300
    }

    .at4-thankyou-background.ats-dark .thankyou-description,
    .at4-thankyou-background.ats-dark .thankyou-title {
      color: #fff
    }

    .at4-thankyou-background .thankyou-description {
      color: #fff;
      font-size: 18px;
      margin: 10px 0;
      line-height: 24px;
      padding: 0;
      font-family: helvetica neue, helvetica, arial, sans-serif;
      font-weight: 300
    }

    .at4-thankyou-background .at4-thanks-icons {
      padding-top: 10px
    }

    .at4-thankyou-mobile * {
      -webkit-overflow-scrolling: touch
    }

    #at4-thankyou .at4-recommended-recommendedbox .at-logo {
      display: none
    }

    .at4-thankyou .at-h3 {
      height: 49px;
      line-height: 49px;
      margin: 0 50px 0 20px;
      padding: 1px 0 0;
      font-family: helvetica neue, helvetica, arial, sans-serif;
      font-size: 1pc;
      font-weight: 700;
      color: #fff;
      text-shadow: 0 1px #000
    }

    .at4-thanks {
      padding-top: 50px;
      text-align: center
    }

    .at4-thanks label {
      display: block;
      margin: 0 0 15px;
      font-size: 1pc;
      line-height: 1pc
    }

    .at4-thanks .at4-h2 {
      background: none;
      border: none;
      margin: 0 0 10px;
      padding: 0;
      font-family: helvetica neue, helvetica, arial, sans-serif;
      font-size: 28px;
      font-weight: 300;
      color: #000
    }

    .at4-thanks .at4-thanks-icons {
      position: relative;
      height: 2pc
    }

    .at4-thanks .at4-thanks-icons .at-thankyou-label {
      display: block;
      padding-bottom: 10px;
      font-size: 14px;
      color: #666
    }

    .at4-thankyou-layer .at-follow .at-icon-wrapper {
      width: 2pc;
      height: 2pc
    }
  </style>
  <style type="text/css">
    .at4-recommended-toaster {
      position: fixed;
      top: auto;
      bottom: 0;
      right: 0;
      z-index: 100021
    }

    .at4-recommended-toaster.ats-light {
      border: 1px solid #c5c5c5;
      background: #fff
    }

    .at4-recommended-toaster.ats-gray {
      border: 1px solid #c5c5c5;
      background: #f2f2f2
    }

    .at4-recommended-toaster.ats-dark {
      background: #262b30;
      color: #fff
    }

    .at4-recommended-toaster .at4-recommended-container {
      padding-top: 0;
      margin: 0
    }

    .at4-recommended.at4-recommended-toaster div.at-recommended-label {
      line-height: 1pc;
      font-size: 1pc;
      text-align: left;
      padding: 20px 0 0 20px
    }

    .at4-toaster-outer .at4-recommended .at4-recommended-item .at4-recommended-item-caption .at-h4 {
      font-size: 11px;
      line-height: 11px;
      margin: 10px 0 6px;
      height: 30px
    }

    .at4-recommended.at4-recommended-toaster div.at-recommended-label.ats-gray,
    .at4-recommended.at4-recommended-toaster div.at-recommended-label.ats-light {
      color: #464646
    }

    .at4-recommended.at4-recommended-toaster div.at-recommended-label.ats-dark {
      color: #fff
    }

    .at4-toaster-close-control {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin: 5px 5px 0 0;
      padding: 0;
      text-indent: -9999em
    }

    .at4-toaster-open-control {
      position: fixed;
      right: 0;
      bottom: 0;
      z-index: 100020
    }

    .at4-toaster-outer .at4-recommended-item {
      width: 90pt;
      border: 0;
      margin: 9px 10px 0
    }

    .at4-toaster-outer .at4-recommended-item:first-child {
      margin-left: 20px
    }

    .at4-toaster-outer .at4-recommended-item:last-child {
      margin-right: 20px
    }

    .at4-toaster-outer .at4-recommended-item .at4-recommended-item-img {
      max-height: 90pt;
      max-width: 90pt
    }

    .at4-toaster-outer .at4-recommended-item .at4-recommended-item-img img {
      height: 90pt;
      width: 90pt
    }

    .at4-toaster-outer .at4-recommended-item .at4-recommended-item-caption {
      height: 30px;
      padding: 0;
      margin: 0;
      height: initial
    }

    .at4-toaster-outer .ats-dark .at4-recommended-item .at4-recommended-item-caption {
      background: #262b30
    }

    .at4-toaster-outer .at4-recommended .at4-recommended-item .at4-recommended-item-caption small {
      width: auto;
      line-height: 14px;
      margin: 0
    }

    .at4-toaster-outer .at4-recommended.ats-dark .at4-recommended-item .at4-recommended-item-caption small {
      color: #fff
    }

    .at4-recommended-toaster .at-logo {
      margin: 0 0 3px 20px;
      text-align: left
    }

    .at4-recommended-toaster .at-logo .at4-logo-container.at-sponsored-logo {
      position: relative
    }

    .at4-toaster-outer .at4-recommended-item .sponsored-label {
      text-align: right;
      font-size: 10px;
      color: #666;
      float: right;
      position: fixed;
      bottom: 6px;
      right: 20px;
      top: initial;
      z-index: 99999
    }
  </style>
  <style type="text/css">
    .at4-whatsnext {
      position: fixed;
      bottom: 0 !important;
      right: 0;
      background: #fff;
      border: 1px solid #c5c5c5;
      margin: -1px;
      width: 390px;
      height: 90pt;
      overflow: hidden;
      font-size: 9pt;
      font-weight: 400;
      color: #000;
      z-index: 1800000000
    }

    .at4-whatsnext a {
      color: #666
    }

    .at4-whatsnext .at-whatsnext-content {
      height: 90pt;
      position: relative
    }

    .at4-whatsnext .at-whatsnext-content .at-branding {
      position: absolute;
      bottom: 15px;
      right: 10px;
      padding-left: 9px;
      text-decoration: none;
      line-height: 10px;
      font-family: helvetica, arial, sans-serif;
      font-size: 10px;
      color: #666
    }

    .at4-whatsnext .at-whatsnext-content .at-whatsnext-content-inner {
      position: absolute;
      top: 15px;
      right: 20px;
      bottom: 15px;
      left: 140px;
      text-align: left;
      height: 105px
    }

    .at4-whatsnext .at-whatsnext-content-inner a {
      display: inline-block
    }

    .at4-whatsnext .at-whatsnext-content-inner div.at-h6 {
      text-align: left;
      margin: 0;
      padding: 0 0 3px;
      font-size: 11px;
      color: #666;
      cursor: default
    }

    .at4-whatsnext .at-whatsnext-content .at-h3 {
      text-align: left;
      margin: 5px 0;
      padding: 0;
      line-height: 1.2em;
      font-weight: 400;
      font-size: 14px;
      height: 3pc
    }

    .at4-whatsnext .at-whatsnext-content-inner a:link,
    .at4-whatsnext .at-whatsnext-content-inner a:visited {
      text-decoration: none;
      font-weight: 400;
      color: #464646
    }

    .at4-whatsnext .at-whatsnext-content-inner a:hover {
      color: #000
    }

    .at4-whatsnext .at-whatsnext-content-inner small {
      position: absolute;
      bottom: 15px;
      line-height: 10px;
      font-size: 11px;
      color: #666;
      cursor: default;
      text-align: left
    }

    .at4-whatsnext .at-whatsnext-content .at-whatsnext-content-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 90pt;
      height: 90pt;
      overflow: hidden
    }

    .at4-whatsnext .at-whatsnext-content .at-whatsnext-content-img img {
      position: absolute;
      top: 0;
      left: 0;
      max-height: none;
      max-width: none
    }

    .at4-whatsnext .at-whatsnext-close-control {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin: 0 5px 0 0;
      padding: 0;
      text-indent: -9999em
    }

    .at-whatsnext-open-control {
      position: fixed;
      right: 0;
      bottom: 0;
      z-index: 100020
    }

    .at4-whatsnext.ats-dark {
      background: #262b30
    }

    .at4-whatsnext.ats-dark .at-whatsnext-content .at-h3,
    .at4-whatsnext.ats-dark .at-whatsnext-content a.at4-logo:hover,
    .at4-whatsnext.ats-dark .at-whatsnext-content-inner a:link,
    .at4-whatsnext.ats-dark .at-whatsnext-content-inner a:visited {
      color: #fff
    }

    .at4-whatsnext.ats-light {
      background: #fff
    }

    .at4-whatsnext.ats-gray {
      background: #f2f2f2
    }

    .at4-whatsnext.at-whatsnext-nophoto {
      width: 270px
    }

    .at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content-img {
      display: none
    }

    .at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner {
      top: 15px;
      right: 0;
      left: 20px
    }

    .at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner.addthis_32x32_style {
      top: 0;
      right: 0;
      left: 0;
      padding: 45px 20px 0;
      font-size: 20px
    }

    .at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner .at4-icon,
    .at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner .at4-icon-fw,
    .at4-whatsnext.at-whatsnext-nophoto .at-whatsnext-content .at-whatsnext-content-inner .whatsnext-msg {
      vertical-align: middle
    }

    .at-whatsnext-img,
    .at-whatsnext-img-lnk {
      position: absolute;
      left: 0
    }
  </style>
  <style type="text/css">
    .at4-whatsnextmobile {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      background: #fff;
      z-index: 9999998;
      height: 170px;
      font-size: 28px
    }

    .at4-whatsnextmobile .col-2 {
      height: 100%;
      font-size: 1em
    }

    .at4-whatsnextmobile .col-2:first-child {
      max-width: 200px;
      display: inline-block;
      float: left
    }

    .at4-whatsnextmobile .col-2:last-child {
      position: absolute;
      left: 200px;
      right: 50px;
      top: 0;
      bottom: 0;
      display: inline-block
    }

    .at4-whatsnextmobile .at-whatsnext-content-inner {
      font-size: 1em
    }

    .at4-whatsnextmobile .at-whatsnext-content-img img {
      height: 100%;
      width: 100%
    }

    .at4-whatsnextmobile .at-close-control {
      font-size: 1em;
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px
    }

    .at4-whatsnextmobile .at-close-control button {
      width: 100%;
      height: 100%;
      font-size: 1em;
      font-weight: 400;
      text-decoration: none;
      opacity: .5;
      padding: 0;
      cursor: pointer;
      background: 0 0;
      border: 0;
      -webkit-appearance: none
    }

    .at4-whatsnextmobile .at-h3,
    .at4-whatsnextmobile .at-h6 {
      font-size: 1em;
      margin: 0;
      color: #a1a1a1;
      margin-left: 2.5%;
      margin-top: 25px
    }

    .at4-whatsnextmobile .at-h3 {
      font-size: 1em;
      line-height: 1em;
      font-weight: 500;
      height: 50%
    }

    .at4-whatsnextmobile .at-h3 a {
      font-size: 1em;
      text-decoration: none
    }

    .at4-whatsnextmobile .at-h6 {
      font-size: .8em;
      line-height: .8em;
      font-weight: 500
    }

    .at4-whatsnextmobile .footer {
      position: absolute;
      bottom: 2px;
      left: 200px;
      right: 0;
      padding-left: 2.5%;
      font-size: 1em;
      line-height: .6em
    }

    .at4-whatsnextmobile .footer small {
      font-size: .6em;
      color: #a1a1a1
    }

    .at4-whatsnextmobile .footer small:first-child {
      margin-right: 5%;
      float: left
    }

    .at4-whatsnextmobile .footer small:last-child {
      margin-right: 2.5%;
      float: right
    }

    .at4-whatsnextmobile .at-whatsnext-content {
      height: 100%
    }

    .at4-whatsnextmobile.ats-dark {
      background: #262b30;
      color: #fff
    }

    .at4-whatsnextmobile .at-close-control button {
      color: #bfbfbf
    }

    .at4-whatsnextmobile.ats-dark a:link,
    .at4-whatsnextmobile.ats-dark a:visited {
      color: #fff
    }

    .at4-whatsnextmobile.ats-gray {
      background: #f2f2f2;
      color: #262b30
    }

    .at4-whatsnextmobile.ats-light {
      background: #fff;
      color: #262b30
    }

    .at4-whatsnextmobile.ats-dark .footer a:link,
    .at4-whatsnextmobile.ats-dark .footer a:visited,
    .at4-whatsnextmobile.ats-gray .footer a:link,
    .at4-whatsnextmobile.ats-gray .footer a:visited,
    .at4-whatsnextmobile.ats-light .footer a:link,
    .at4-whatsnextmobile.ats-light .footer a:visited {
      color: #a1a1a1
    }

    .at4-whatsnextmobile.ats-gray a:link,
    .at4-whatsnextmobile.ats-gray a:visited,
    .at4-whatsnextmobile.ats-light a:link,
    .at4-whatsnextmobile.ats-light a:visited {
      color: #262b30
    }

    @media only screen and (min-device-width:320px) and (max-device-width:480px) {
      .at4-whatsnextmobile {
        height: 85px;
        font-size: 14px
      }

      .at4-whatsnextmobile .col-2:first-child {
        width: 75pt
      }

      .at4-whatsnextmobile .col-2:last-child {
        right: 25px;
        left: 75pt
      }

      .at4-whatsnextmobile .footer {
        left: 75pt
      }

      .at4-whatsnextmobile .at-close-control {
        width: 25px;
        height: 25px
      }

      .at4-whatsnextmobile .at-h3,
      .at4-whatsnextmobile .at-h6 {
        margin-top: 12.5px
      }
    }
  </style>
  <style type="text/css">
    .at-custom-mobile-bar {
      left: 0;
      right: 0;
      width: 100%;
      height: 56px;
      position: fixed;
      text-align: center;
      z-index: 100020;
      background: #fff;
      overflow: hidden;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
      font: initial;
      line-height: normal;
      top: auto;
      bottom: 0
    }

    .at-custom-mobile-bar.at-custom-mobile-bar-zindex-hide {
      z-index: -1 !important
    }

    .at-custom-mobile-bar.atss-top {
      top: 0;
      bottom: auto
    }

    .at-custom-mobile-bar.atss-bottom {
      top: auto;
      bottom: 0
    }

    .at-custom-mobile-bar .at-custom-mobile-bar-btns {
      display: inline-block;
      text-align: center
    }

    .at-custom-mobile-bar .at-custom-mobile-bar-counter,
    .at-custom-mobile-bar .at-share-btn {
      margin-top: 4px
    }

    .at-custom-mobile-bar .at-share-btn {
      display: inline-block;
      text-decoration: none;
      transition: none;
      box-sizing: content-box
    }

    .at-custom-mobile-bar .at-custom-mobile-bar-counter {
      font-family: Helvetica neue, arial;
      vertical-align: top;
      margin-left: 4px;
      margin-right: 4px;
      display: inline-block
    }

    .at-custom-mobile-bar .at-custom-mobile-bar-count {
      font-size: 26px;
      line-height: 1.25em;
      color: #222
    }

    .at-custom-mobile-bar .at-custom-mobile-bar-text {
      font-size: 9pt;
      line-height: 1.25em;
      color: #888;
      letter-spacing: 1px
    }

    .at-custom-mobile-bar .at-icon-wrapper {
      text-align: center;
      height: 3pc;
      width: 3pc;
      margin: 0 4px
    }

    .at-custom-mobile-bar .at-icon {
      vertical-align: top;
      margin: 8px;
      width: 2pc;
      height: 2pc
    }

    .at-custom-mobile-bar.at-shfs-medium {
      height: 3pc
    }

    .at-custom-mobile-bar.at-shfs-medium .at-custom-mobile-bar-counter {
      margin-top: 6px
    }

    .at-custom-mobile-bar.at-shfs-medium .at-custom-mobile-bar-count {
      font-size: 18px
    }

    .at-custom-mobile-bar.at-shfs-medium .at-custom-mobile-bar-text {
      font-size: 10px
    }

    .at-custom-mobile-bar.at-shfs-medium .at-icon-wrapper {
      height: 40px;
      width: 40px
    }

    .at-custom-mobile-bar.at-shfs-medium .at-icon {
      margin: 6px;
      width: 28px;
      height: 28px
    }

    .at-custom-mobile-bar.at-shfs-small {
      height: 40px
    }

    .at-custom-mobile-bar.at-shfs-small .at-custom-mobile-bar-counter {
      margin-top: 3px
    }

    .at-custom-mobile-bar.at-shfs-small .at-custom-mobile-bar-count {
      font-size: 1pc
    }

    .at-custom-mobile-bar.at-shfs-small .at-custom-mobile-bar-text {
      font-size: 10px
    }

    .at-custom-mobile-bar.at-shfs-small .at-icon-wrapper {
      height: 2pc;
      width: 2pc
    }

    .at-custom-mobile-bar.at-shfs-small .at-icon {
      margin: 4px;
      width: 24px;
      height: 24px
    }
  </style>
  <style type="text/css">
    .at-custom-sidebar {
      top: 20%;
      width: 58px;
      position: fixed;
      text-align: center;
      z-index: 100020;
      background: #fff;
      overflow: hidden;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
      font: initial;
      line-height: normal;
      top: auto;
      bottom: 0
    }

    .at-custom-sidebar.at-custom-sidebar-zindex-hide {
      z-index: -1 !important
    }

    .at-custom-sidebar.atss-left {
      left: 0;
      right: auto;
      float: left;
      border-radius: 0 4px 4px 0
    }

    .at-custom-sidebar.atss-right {
      left: auto;
      right: 0;
      float: right;
      border-radius: 4px 0 0 4px
    }

    .at-custom-sidebar .at-custom-sidebar-btns {
      display: inline-block;
      text-align: center;
      padding-top: 4px
    }

    .at-custom-sidebar .at-custom-sidebar-counter {
      margin-bottom: 8px
    }

    .at-custom-sidebar .at-share-btn {
      display: inline-block;
      text-decoration: none;
      transition: none;
      box-sizing: content-box
    }

    .at-custom-sidebar .at-custom-sidebar-counter {
      font-family: Helvetica neue, arial;
      vertical-align: top;
      margin-left: 4px;
      margin-right: 4px;
      display: inline-block
    }

    .at-custom-sidebar .at-custom-sidebar-count {
      font-size: 21px;
      line-height: 1.25em;
      color: #222
    }

    .at-custom-sidebar .at-custom-sidebar-text {
      font-size: 10px;
      line-height: 1.25em;
      color: #888;
      letter-spacing: 1px
    }

    .at-custom-sidebar .at-icon-wrapper {
      text-align: center;
      margin: 0 4px
    }

    .at-custom-sidebar .at-icon {
      vertical-align: top;
      margin: 9px;
      width: 2pc;
      height: 2pc
    }

    .at-custom-sidebar .at-icon-wrapper {
      position: relative
    }

    .at-custom-sidebar .at4-share-count,
    .at-custom-sidebar .at4-share-count-container {
      line-height: 1pc;
      font-size: 10px
    }

    .at-custom-sidebar .at4-share-count {
      text-indent: 0;
      font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
      font-weight: 200;
      width: 100%;
      height: 1pc
    }

    .at-custom-sidebar .at4-share-count-anchor .at-icon {
      margin-top: 3px
    }

    .at-custom-sidebar .at4-share-count-container {
      position: absolute;
      left: 0;
      right: auto;
      top: auto;
      bottom: 0;
      width: 100%;
      color: #fff;
      background: inherit
    }
  </style>
  <style type="text/css">
    .at-image-sharing-mobile-icon {
      position: absolute;
      background: #000 url(https://s7.addthis.com/static/44a36d35bafef33aa9455b7d3039a771.png) no-repeat top center;
      background-color: rgba(0, 0, 0, .9);
      background-image: url(https://s7.addthis.com/static/10db525181ee0bbe1a515001be1c7818.svg), none;
      border-radius: 3px;
      width: 50px;
      height: 40px;
      top: -9999px;
      left: -9999px
    }

    .at-image-sharing-tool {
      display: block;
      position: absolute;
      text-align: center;
      z-index: 9001;
      background: none;
      overflow: hidden;
      top: -9999px;
      left: -9999px;
      font: initial;
      line-height: 0
    }

    .at-image-sharing-tool.addthis-animated {
      animation-duration: .15s
    }

    .at-image-sharing-tool.at-orientation-vertical .at-share-btn {
      display: block
    }

    .at-image-sharing-tool.at-orientation-horizontal .at-share-btn {
      display: inline-block
    }

    .at-image-sharing-tool.at-image-sharing-tool-size-big .at-icon {
      width: 43px;
      height: 43px
    }

    .at-image-sharing-tool.at-image-sharing-tool-size-mobile .at-share-btn {
      margin: 0 !important
    }

    .at-image-sharing-tool.at-image-sharing-tool-size-mobile .at-icon-wrapper {
      height: 60px;
      width: 100%;
      border-radius: 0 !important
    }

    .at-image-sharing-tool.at-image-sharing-tool-size-mobile .at-icon {
      max-width: 100%;
      height: 54px !important;
      width: 54px !important
    }

    .at-image-sharing-tool .at-custom-shape.at-image-sharing-tool-btns {
      margin-right: 8px;
      margin-bottom: 8px
    }

    .at-image-sharing-tool .at-custom-shape .at-share-btn {
      margin-top: 8px;
      margin-left: 8px
    }

    .at-image-sharing-tool .at-share-btn {
      line-height: 0;
      text-decoration: none;
      transition: none;
      box-sizing: content-box
    }

    .at-image-sharing-tool .at-icon-wrapper {
      text-align: center;
      height: 100%;
      width: 100%
    }

    .at-image-sharing-tool .at-icon {
      vertical-align: top;
      width: 2pc;
      height: 2pc;
      margin: 3px
    }
  </style>
  <style type="text/css">
    .at-expanding-share-button {
      box-sizing: border-box;
      position: fixed;
      z-index: 9999
    }

    .at-expanding-share-button[data-position=bottom-right] {
      bottom: 10px;
      right: 10px
    }

    .at-expanding-share-button[data-position=bottom-right] .at-expanding-share-button-toggle-bg,
    .at-expanding-share-button[data-position=bottom-right] .at-expanding-share-button-toggle-btn[data-name]:after,
    .at-expanding-share-button[data-position=bottom-right] .at-icon-wrapper,
    .at-expanding-share-button[data-position=bottom-right] [data-name]:after {
      float: right
    }

    .at-expanding-share-button[data-position=bottom-right] [data-name]:after {
      margin-right: 10px
    }

    .at-expanding-share-button[data-position=bottom-right] .at-expanding-share-button-toggle-btn[data-name]:after {
      margin-right: 5px
    }

    .at-expanding-share-button[data-position=bottom-right] .at-icon-wrapper {
      margin-right: -3px
    }

    .at-expanding-share-button[data-position=bottom-left] {
      bottom: 10px;
      left: 10px
    }

    .at-expanding-share-button[data-position=bottom-left] .at-expanding-share-button-toggle-bg,
    .at-expanding-share-button[data-position=bottom-left] .at-expanding-share-button-toggle-btn[data-name]:after,
    .at-expanding-share-button[data-position=bottom-left] .at-icon-wrapper,
    .at-expanding-share-button[data-position=bottom-left] [data-name]:after {
      float: left
    }

    .at-expanding-share-button[data-position=bottom-left] [data-name]:after {
      margin-left: 10px
    }

    .at-expanding-share-button[data-position=bottom-left] .at-expanding-share-button-toggle-btn[data-name]:after {
      margin-left: 5px
    }

    .at-expanding-share-button *,
    .at-expanding-share-button :after,
    .at-expanding-share-button :before {
      box-sizing: border-box
    }

    .at-expanding-share-button .at-expanding-share-button-services-list {
      display: none;
      list-style: none;
      margin: 0 5px;
      overflow: visible;
      padding: 0
    }

    .at-expanding-share-button .at-expanding-share-button-services-list>li {
      display: block;
      height: 45px;
      position: relative;
      overflow: visible
    }

    .at-expanding-share-button .at-expanding-share-button-toggle-btn,
    .at-expanding-share-button .at-share-btn {
      transition: .1s;
      text-decoration: none
    }

    .at-expanding-share-button .at-share-btn {
      display: block;
      height: 40px;
      padding: 0 3px 0 0
    }

    .at-expanding-share-button .at-expanding-share-button-toggle-btn {
      position: relative;
      overflow: auto
    }

    .at-expanding-share-button .at-expanding-share-button-toggle-btn.at-expanding-share-button-hidden[data-name]:after {
      display: none
    }

    .at-expanding-share-button .at-expanding-share-button-toggle-bg {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
      border-radius: 50%;
      position: relative
    }

    .at-expanding-share-button .at-expanding-share-button-toggle-bg>span {
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2232px%22%20height%3D%2232px%22%20viewBox%3D%220%200%2032%2032%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eshare%3C%2Ftitle%3E%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%3E%3Cpath%20d%3D%22M26%2C13.4285714%20C26%2C13.6220248%2025.9293162%2C13.7894338%2025.7879464%2C13.9308036%20L20.0736607%2C19.6450893%20C19.932291%2C19.786459%2019.7648819%2C19.8571429%2019.5714286%2C19.8571429%20C19.3779752%2C19.8571429%2019.2105662%2C19.786459%2019.0691964%2C19.6450893%20C18.9278267%2C19.5037195%2018.8571429%2C19.3363105%2018.8571429%2C19.1428571%20L18.8571429%2C16.2857143%20L16.3571429%2C16.2857143%20C15.6279725%2C16.2857143%2014.9750773%2C16.3080355%2014.3984375%2C16.3526786%20C13.8217977%2C16.3973217%2013.2488868%2C16.477306%2012.6796875%2C16.5926339%20C12.1104882%2C16.7079619%2011.6157015%2C16.8660704%2011.1953125%2C17.0669643%20C10.7749235%2C17.2678581%2010.3824423%2C17.5264121%2010.0178571%2C17.8426339%20C9.65327199%2C18.1588557%209.35565592%2C18.534596%209.125%2C18.9698661%20C8.89434408%2C19.4051361%208.71391434%2C19.9203839%208.58370536%2C20.515625%20C8.45349637%2C21.1108661%208.38839286%2C21.7842224%208.38839286%2C22.5357143%20C8.38839286%2C22.9449425%208.40699386%2C23.4025272%208.44419643%2C23.9084821%20C8.44419643%2C23.9531252%208.45349693%2C24.0405499%208.47209821%2C24.1707589%20C8.4906995%2C24.3009679%208.5%2C24.3995532%208.5%2C24.4665179%20C8.5%2C24.5781256%208.46837829%2C24.6711306%208.40513393%2C24.7455357%20C8.34188956%2C24.8199408%208.25446484%2C24.8571429%208.14285714%2C24.8571429%20C8.02380893%2C24.8571429%207.9196433%2C24.7938994%207.83035714%2C24.6674107%20C7.77827355%2C24.6004461%207.72991094%2C24.5186017%207.68526786%2C24.421875%20C7.64062478%2C24.3251483%207.59040206%2C24.2135423%207.53459821%2C24.0870536%20C7.47879436%2C23.9605648%207.43973225%2C23.87128%207.41741071%2C23.8191964%20C6.47246551%2C21.6986501%206%2C20.0208395%206%2C18.7857143%20C6%2C17.3050521%206.19717065%2C16.0662252%206.59151786%2C15.0691964%20C7.79688103%2C12.0706695%2011.0520568%2C10.5714286%2016.3571429%2C10.5714286%20L18.8571429%2C10.5714286%20L18.8571429%2C7.71428571%20C18.8571429%2C7.52083237%2018.9278267%2C7.35342333%2019.0691964%2C7.21205357%20C19.2105662%2C7.07068382%2019.3779752%2C7%2019.5714286%2C7%20C19.7648819%2C7%2019.932291%2C7.07068382%2020.0736607%2C7.21205357%20L25.7879464%2C12.9263393%20C25.9293162%2C13.067709%2026%2C13.2351181%2026%2C13.4285714%20L26%2C13.4285714%20Z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-position: center center;
      background-repeat: no-repeat;
      transition: transform .4s ease;
      border-radius: 50%;
      display: block
    }

    .at-expanding-share-button .at-icon-wrapper {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
      border-radius: 50%;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      width: 40px
    }

    .at-expanding-share-button .at-icon {
      display: inline-block;
      height: 34px;
      margin: 3px 0;
      vertical-align: top;
      width: 34px
    }

    .at-expanding-share-button [data-name]:after {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
      transform: translate(0, -50%);
      transition: .4s;
      background-color: #fff;
      border-radius: 3px;
      color: #666;
      content: attr(data-name);
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 9pt;
      line-height: 9pt;
      font-weight: 500;
      opacity: 0;
      padding: 3px 5px;
      position: relative;
      top: 20px;
      white-space: nowrap
    }

    .at-expanding-share-button.at-expanding-share-button-show-icons .at-expanding-share-button-services-list {
      display: block
    }

    .at-expanding-share-button.at-expanding-share-button-animate-in .at-expanding-share-button-toggle-bg>span {
      transform: rotate(270deg);
      background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cg%3E%3Cpath%20d%3D%22M18%2014V8h-4v6H8v4h6v6h4v-6h6v-4h-6z%22%20fill-rule%3D%22evenodd%22%20fill%3D%22white%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-position: center center;
      background-repeat: no-repeat
    }

    .at-expanding-share-button.at-expanding-share-button-animate-in [data-name]:after {
      opacity: 1
    }

    .at-expanding-share-button.at-hide-label [data-name]:after {
      display: none
    }

    .at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle {
      height: 50px
    }

    .at-expanding-share-button.at-expanding-share-button-desktop .at-icon-wrapper:hover {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .5)
    }

    .at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg {
      height: 50px;
      line-height: 50px;
      width: 50px
    }

    .at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg>span {
      height: 50px;
      width: 50px
    }

    .at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg:after {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .2);
      transition: opacity .2s ease;
      border-radius: 50%;
      content: '';
      height: 100%;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%
    }

    .at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-bg:hover:after {
      opacity: 1
    }

    .at-expanding-share-button.at-expanding-share-button-desktop .at-expanding-share-button-toggle-btn[data-name]:after {
      top: 25px
    }

    .at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-services-list {
      margin: 0
    }

    .at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle-btn,
    .at-expanding-share-button.at-expanding-share-button-mobile .at-share-btn {
      outline: 0
    }

    .at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle {
      height: 40px;
      -webkit-tap-highlight-color: transparent
    }

    .at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle-bg,
    .at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-toggle-bg span {
      height: 40px;
      line-height: 40px;
      width: 40px
    }

    .at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-click-flash {
      transform: scale(0);
      transition: transform ease, opacity ease-in;
      background-color: hsla(0, 0%, 100%, .3);
      border-radius: 50%;
      height: 40px;
      opacity: 1;
      position: absolute;
      width: 40px;
      z-index: 10000
    }

    .at-expanding-share-button.at-expanding-share-button-mobile .at-expanding-share-button-click-flash.at-expanding-share-button-click-flash-animate {
      transform: scale(1);
      opacity: 0
    }

    .at-expanding-share-button.at-expanding-share-button-mobile+.at-expanding-share-button-mobile-overlay {
      transition: opacity ease;
      bottom: 0;
      background-color: hsla(0, 0%, 87%, .7);
      display: block;
      height: auto;
      left: 0;
      opacity: 0;
      position: fixed;
      right: 0;
      top: 0;
      width: auto;
      z-index: 9998
    }

    .at-expanding-share-button.at-expanding-share-button-mobile+.at-expanding-share-button-mobile-overlay.at-expanding-share-button-hidden {
      height: 0;
      width: 0;
      z-index: -10000
    }

    .at-expanding-share-button.at-expanding-share-button-mobile.at-expanding-share-button-animate-in+.at-expanding-share-button-mobile-overlay {
      transition: opacity ease;
      opacity: 1
    }
  </style>
  <style type="text/css">
    .at-tjin-element .at300b,
    .at-tjin-element .at300m {
      display: inline-block;
      width: auto;
      padding: 0;
      margin: 0 2px 5px;
      outline-offset: -1px;
      transition: all .2s ease-in-out
    }

    .at-tjin-element .at300b:focus,
    .at-tjin-element .at300b:hover,
    .at-tjin-element .at300m:focus,
    .at-tjin-element .at300m:hover {
      transform: translateY(-4px)
    }

    .at-tjin-element .addthis_tjin_label {
      display: none
    }

    .at-tjin-element .addthis_vertical_style .at300b,
    .at-tjin-element .addthis_vertical_style .at300m {
      display: block
    }

    .at-tjin-element .addthis_vertical_style .at300b .addthis_tjin_label,
    .at-tjin-element .addthis_vertical_style .at300b .at-icon-wrapper,
    .at-tjin-element .addthis_vertical_style .at300m .addthis_tjin_label,
    .at-tjin-element .addthis_vertical_style .at300m .at-icon-wrapper {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px
    }

    .at-tjin-element .addthis_vertical_style .at300b:focus,
    .at-tjin-element .addthis_vertical_style .at300b:hover,
    .at-tjin-element .addthis_vertical_style .at300m:focus,
    .at-tjin-element .addthis_vertical_style .at300m:hover {
      transform: none
    }

    .at-tjin-element .at-tjin-btn {
      margin: 0 5px 5px 0;
      padding: 0;
      outline-offset: -1px;
      display: inline-block;
      box-sizing: content-box;
      transition: all .2s ease-in-out
    }

    .at-tjin-element .at-tjin-btn:focus,
    .at-tjin-element .at-tjin-btn:hover {
      transform: translateY(-4px)
    }

    .at-tjin-element .at-tjin-title {
      margin: 0 0 15px
    }
  </style>
  <style type="text/css">
    #addthissmartlayerscssready {
      color: #bada55 !important
    }

    .addthis-smartlayers,
    div#at4-follow,
    div#at4-share,
    div#at4-thankyou,
    div#at4-whatsnext {
      padding: 0;
      margin: 0
    }

    #at4-follow-label,
    #at4-share-label,
    #at4-whatsnext-label,
    .at4-recommended-label.hidden {
      padding: 0;
      border: none;
      background: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 0;
      width: 0;
      overflow: hidden;
      text-indent: -9999em
    }

    .addthis-smartlayers .at4-arrow:hover {
      cursor: pointer
    }

    .addthis-smartlayers .at4-arrow:after,
    .addthis-smartlayers .at4-arrow:before {
      content: none
    }

    a.at4-logo {
      background: url(data:image/gif;base64,R0lGODlhBwAHAJEAAP9uQf///wAAAAAAACH5BAkKAAIALAAAAAAHAAcAAAILFH6Ge8EBH2MKiQIAOw==) no-repeat left center
    }

    .at4-minimal a.at4-logo {
      background: url(data:image/gif;base64,R0lGODlhBwAHAJEAAP9uQf///wAAAAAAACH5BAkKAAIALAAAAAAHAAcAAAILFH6Ge8EBH2MKiQIAOw==) no-repeat left center !important
    }

    button.at4-closebutton {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
      margin-right: 10px;
      cursor: pointer;
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      font-size: 19px;
      line-height: 1;
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: .2
    }

    button.at4-closebutton:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      opacity: .5
    }

    div.at4-arrow {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAoCAYAAABpYH0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAV1JREFUeNrsmesOgyAMhQfxwfrofTM3E10ME2i5Oeppwr9a5OMUCrh1XV+wcvNAAIAA+BiAzrmtUWln27dbjEcC3AdODfo0BdEPhmcO4nIDvDNELi2jggk4/k8dT7skfeKzWIEd4VUpMQKvNB7X+OZSmAZkATWC1xvipbpnLmOosbJZC08CkAeA4E6qFUEMwLAGnlSBPCE8lW8CYnZTcimH2HoT7kSFOx5HBmCnDhTIu1p5s98G+QZrxGPhZVMY1vgyAQaAAAiAAAgDQACcBOD+BvJtBWfRy7NpJK5tBe4FNzXokywV734wPHMQlxvgnSGyNoUP/2ACjv/7iSeYKO3YWKzAjvCqlBiBVxqPa3ynexNJwOsN8TJbzL6JNIYYXWpMv4lIIAZgWANPqkCeEJ7KNwExu8lpLlSpAVQarO77TyKdBsyRPuwV0h0gmoGnTWFYzVkYBoAA+I/2FmAAt6+b5XM9mFkAAAAASUVORK5CYII=);
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-indent: -9999em;
      text-align: left;
      cursor: pointer
    }

    #at4-recommendedpanel-outer-container .at4-arrow.at-right,
    div.at4-arrow.at-right {
      background-position: -20px 0
    }

    #at4-recommendedpanel-outer-container .at4-arrow.at-left,
    div.at4-arrow.at-left {
      background-position: 0 0
    }

    div.at4-arrow.at-down {
      background-position: -60px 0
    }

    div.at4-arrow.at-up {
      background-position: -40px 0
    }

    .ats-dark div.at4-arrow.at-right {
      background-position: -20px -20px
    }

    .ats-dark div.at4-arrow.at-left {
      background-position: 0 -20px
    }

    .ats-dark div.at4-arrow.at-down {
      background-position: -60px -20px
    }

    .ats-dark div.at4-arrow.at-up {
      background-position: -40px -20
    }

    .at4-opacity-hidden {
      opacity: 0 !important
    }

    .at4-opacity-visible {
      opacity: 1 !important
    }

    .at4-visually-hidden {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      padding: 0;
      border: 0;
      overflow: hidden
    }

    .at4-hidden-off-screen,
    .at4-hidden-off-screen * {
      position: absolute !important;
      top: -9999px !important;
      left: -9999px !important
    }

    .at4-show {
      display: block !important;
      opacity: 1 !important
    }

    .at4-show-content {
      opacity: 1 !important;
      visibility: visible
    }

    .at4-hide {
      display: none !important;
      opacity: 0 !important
    }

    .at4-hide-content {
      opacity: 0 !important;
      visibility: hidden
    }

    .at4-visible {
      display: block !important;
      opacity: 0 !important
    }

    .at-wordpress-hide {
      display: none !important;
      opacity: 0 !important
    }

    .addthis-animated {
      animation-fill-mode: both;
      animation-timing-function: ease-out;
      animation-duration: .3s
    }

    .slideInDown.addthis-animated,
    .slideInLeft.addthis-animated,
    .slideInRight.addthis-animated,
    .slideInUp.addthis-animated,
    .slideOutDown.addthis-animated,
    .slideOutLeft.addthis-animated,
    .slideOutRight.addthis-animated,
    .slideOutUp.addthis-animated {
      animation-duration: .4s
    }

    @keyframes fadeIn {
      0% {
        opacity: 0
      }

      to {
        opacity: 1
      }
    }

    .fadeIn {
      animation-name: fadeIn
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px)
      }

      to {
        opacity: 1;
        transform: translateY(0)
      }
    }

    .fadeInUp {
      animation-name: fadeInUp
    }

    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translateY(-20px)
      }

      to {
        opacity: 1;
        transform: translateY(0)
      }
    }

    .fadeInDown {
      animation-name: fadeInDown
    }

    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translateX(-20px)
      }

      to {
        opacity: 1;
        transform: translateX(0)
      }
    }

    .fadeInLeft {
      animation-name: fadeInLeft
    }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(20px)
      }

      to {
        opacity: 1;
        transform: translateX(0)
      }
    }

    .fadeInRight {
      animation-name: fadeInRight
    }

    @keyframes fadeOut {
      0% {
        opacity: 1
      }

      to {
        opacity: 0
      }
    }

    .fadeOut {
      animation-name: fadeOut
    }

    @keyframes fadeOutUp {
      0% {
        opacity: 1;
        transform: translateY(0)
      }

      to {
        opacity: 0;
        transform: translateY(-20px)
      }
    }

    .fadeOutUp {
      animation-name: fadeOutUp
    }

    @keyframes fadeOutDown {
      0% {
        opacity: 1;
        transform: translateY(0)
      }

      to {
        opacity: 0;
        transform: translateY(20px)
      }
    }

    .fadeOutDown {
      animation-name: fadeOutDown
    }

    @keyframes fadeOutLeft {
      0% {
        opacity: 1;
        transform: translateX(0)
      }

      to {
        opacity: 0;
        transform: translateX(-20px)
      }
    }

    .fadeOutLeft {
      animation-name: fadeOutLeft
    }

    @keyframes fadeOutRight {
      0% {
        opacity: 1;
        transform: translateX(0)
      }

      to {
        opacity: 0;
        transform: translateX(20px)
      }
    }

    .fadeOutRight {
      animation-name: fadeOutRight
    }

    @keyframes slideInUp {
      0% {
        transform: translateY(1500px)
      }

      0%,
      to {
        opacity: 1
      }

      to {
        transform: translateY(0)
      }
    }

    .slideInUp {
      animation-name: slideInUp
    }

    .slideInUp.addthis-animated {
      animation-duration: .4s
    }

    @keyframes slideInDown {
      0% {
        transform: translateY(-850px)
      }

      0%,
      to {
        opacity: 1
      }

      to {
        transform: translateY(0)
      }
    }

    .slideInDown {
      animation-name: slideInDown
    }

    @keyframes slideOutUp {
      0% {
        transform: translateY(0)
      }

      0%,
      to {
        opacity: 1
      }

      to {
        transform: translateY(-250px)
      }
    }

    .slideOutUp {
      animation-name: slideOutUp
    }

    @keyframes slideOutUpFast {
      0% {
        transform: translateY(0)
      }

      0%,
      to {
        opacity: 1
      }

      to {
        transform: translateY(-1250px)
      }
    }

    #at4m-menu.slideOutUp {
      animation-name: slideOutUpFast
    }

    @keyframes slideOutDown {
      0% {
        transform: translateY(0)
      }

      0%,
      to {
        opacity: 1
      }

      to {
        transform: translateY(350px)
      }
    }

    .slideOutDown {
      animation-name: slideOutDown
    }

    @keyframes slideOutDownFast {
      0% {
        transform: translateY(0)
      }

      0%,
      to {
        opacity: 1
      }

      to {
        transform: translateY(1250px)
      }
    }

    #at4m-menu.slideOutDown {
      animation-name: slideOutDownFast
    }

    @keyframes slideInLeft {
      0% {
        opacity: 0;
        transform: translateX(-850px)
      }

      to {
        transform: translateX(0)
      }
    }

    .slideInLeft {
      animation-name: slideInLeft
    }

    @keyframes slideInRight {
      0% {
        opacity: 0;
        transform: translateX(1250px)
      }

      to {
        transform: translateX(0)
      }
    }

    .slideInRight {
      animation-name: slideInRight
    }

    @keyframes slideOutLeft {
      0% {
        transform: translateX(0)
      }

      to {
        opacity: 0;
        transform: translateX(-350px)
      }
    }

    .slideOutLeft {
      animation-name: slideOutLeft
    }

    @keyframes slideOutRight {
      0% {
        transform: translateX(0)
      }

      to {
        opacity: 0;
        transform: translateX(350px)
      }
    }

    .slideOutRight {
      animation-name: slideOutRight
    }

    .at4win {
      margin: 0 auto;
      background: #fff;
      border: 1px solid #ebeced;
      width: 25pc;
      box-shadow: 0 0 10px rgba(0, 0, 0, .3);
      border-radius: 8px;
      font-family: helvetica neue, helvetica, arial, sans-serif;
      text-align: left;
      z-index: 9999
    }

    .at4win .at4win-header {
      position: relative;
      border-bottom: 1px solid #f2f2f2;
      background: #fff;
      height: 49px;
      -webkit-border-top-left-radius: 8px;
      -webkit-border-top-right-radius: 8px;
      -moz-border-radius-topleft: 8px;
      -moz-border-radius-topright: 8px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      cursor: default
    }

    .at4win .at4win-header .at-h3,
    .at4win .at4win-header h3 {
      height: 49px;
      line-height: 49px;
      margin: 0 50px 0 0;
      padding: 1px 0 0;
      margin-left: 20px;
      font-family: helvetica neue, helvetica, arial, sans-serif;
      font-size: 1pc;
      font-weight: 700;
      text-shadow: 0 1px #fff;
      color: #333
    }

    .at4win .at4win-header .at-h3 img,
    .at4win .at4win-header h3 img {
      display: inline-block;
      margin-right: 4px
    }

    .at4win .at4win-header .at4-close {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      background: url("data:image/gif;base64,R0lGODlhFAAUAIABAAAAAP///yH5BAEAAAEALAAAAAAUABQAAAIzBIKpG+YMm5Enpodw1HlCfnkKOIqU1VXk55goVb2hi7Y0q95lfG70uurNaqLgTviyyUoFADs=") no-repeat center center;
      background-repeat: no-repeat;
      background-position: center center;
      border-left: 1px solid #d2d2d1;
      width: 49px;
      height: 49px;
      line-height: 49px;
      overflow: hidden;
      text-indent: -9999px;
      text-shadow: none;
      cursor: pointer;
      opacity: .5;
      border: 0;
      transition: opacity .15s ease-in
    }

    .at4win .at4win-header .at4-close::-moz-focus-inner {
      border: 0;
      padding: 0
    }

    .at4win .at4win-header .at4-close:hover {
      opacity: 1;
      background-color: #ebeced;
      border-top-right-radius: 7px
    }

    .at4win .at4win-content {
      position: relative;
      background: #fff;
      min-height: 220px
    }

    #at4win-footer {
      position: relative;
      background: #fff;
      border-top: 1px solid #d2d2d1;
      -webkit-border-bottom-right-radius: 8px;
      -webkit-border-bottom-left-radius: 8px;
      -moz-border-radius-bottomright: 8px;
      -moz-border-radius-bottomleft: 8px;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      height: 11px;
      line-height: 11px;
      padding: 5px 20px;
      font-size: 11px;
      color: #666;
      -ms-box-sizing: content-box;
      -o-box-sizing: content-box;
      box-sizing: content-box
    }

    #at4win-footer a {
      margin-right: 10px;
      text-decoration: none;
      color: #666
    }

    #at4win-footer a:hover {
      text-decoration: none;
      color: #000
    }

    #at4win-footer a.at4-logo {
      top: 5px;
      padding-left: 10px
    }

    #at4win-footer a.at4-privacy {
      position: absolute;
      top: 5px;
      right: 10px;
      padding-right: 14px
    }

    .at4win.ats-dark {
      border-color: #555;
      box-shadow: none
    }

    .at4win.ats-dark .at4win-header {
      background: #1b1b1b;
      -webkit-border-top-left-radius: 6px;
      -webkit-border-top-right-radius: 6px;
      -moz-border-radius-topleft: 6px;
      -moz-border-radius-topright: 6px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px
    }

    .at4win.ats-dark .at4win-header .at4-close {
      background: url("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTEvMTMvMTKswDp5AAAAd0lEQVQ4jb2VQRLAIAgDE///Z3qqY1FAhalHMCsCIkVEAIAkkVgvp2lDBgYAnAyHkWotLccNrEd4A7X2TqIdqLfnWBAdaF5rJdyJfjtPH5GT37CaGhoVq3nOm/XflUuLUto2pY1d+vRKh0Pp+MrAVtDe2JkvYNQ+jVSEEFmOkggAAAAASUVORK5CYII=") no-repeat center center;
      background-image: url(https://s7.addthis.com/static/fb08f6d50887bd0caacc86a62bcdcf68.svg), none;
      border-color: #333
    }

    .at4win.ats-dark .at4win-header .at4-close:hover {
      background-color: #000
    }

    .at4win.ats-dark .at4win-header .at-h3,
    .at4win.ats-dark .at4win-header h3 {
      color: #fff;
      text-shadow: 0 1px #000
    }

    .at4win.ats-gray .at4win-header {
      background: #fff;
      border-color: #d2d2d1;
      -webkit-border-top-left-radius: 6px;
      -webkit-border-top-right-radius: 6px;
      -moz-border-radius-topleft: 6px;
      -moz-border-radius-topright: 6px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px
    }

    .at4win.ats-gray .at4win-header a.at4-close {
      border-color: #d2d2d1
    }

    .at4win.ats-gray .at4win-header a.at4-close:hover {
      background-color: #ebeced
    }

    .at4win.ats-gray #at4win-footer {
      border-color: #ebeced
    }

    .at4win .clear {
      clear: both
    }

    .at4win ::selection {
      background: #fe6d4c;
      color: #fff
    }

    .at4win ::-moz-selection {
      background: #fe6d4c;
      color: #fff
    }

    .at4-icon-fw {
      display: inline-block;
      background-repeat: no-repeat;
      background-position: 0 0;
      margin: 0 5px 0 0;
      overflow: hidden;
      text-indent: -9999em;
      cursor: pointer;
      padding: 0;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%
    }

    .at44-follow-container a.aticon {
      height: 2pc;
      margin: 0 5px 5px 0
    }

    .at44-follow-container .at4-icon-fw {
      margin: 0
    }
  </style>
  <style id="at-custom-sidebar-offset" type="text/css" media="screen">
    #at-custom-sidebar {
      top: 20% !important;
      bottom: auto
    }
  </style>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/195.461912c47007775093ae.js"></script>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/197.f40f0b8442ffcba47a35.js"></script>
  <style id="at4-follow-offset" type="text/css" media="screen">
    #at4-follow,
    #at4-foc {
      top: 70px !important;
      bottom: auto
    }
  </style>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/140.61020b6c086bdb8bc696.js"></script>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/167.8402b988bbfaa91066f4.js"></script>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/168.eef589906e0857099dc0.js"></script>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/189.51293832a7399c176a0f.js"></script>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/143.3d8bb49f121080f7c65c.js"></script>
  <script type="text/javascript" charset="utf-8" async=""
    src="https://s7.addthis.com/static/170.9e7b6cd69e254af1f499.js"></script>
  <link rel="stylesheet" href="https://widget.stackbit.com/widget-page.css">
  <link rel="prefetch" href="/component---src-templates-docs-js-04c8725434b0191ce73b.js">
  <link rel="prefetch" href="/component---src-templates-page-js-3fbb3013734460790768.js">
  <link rel="prefetch" href="/page-data/mailto:bryan.guner@gmail.com/page-data.json" crossorigin="anonymous" as="fetch">
  <link rel="prefetch" href="/component---src-templates-advanced-js-c66268766ef5c957450f.js">
  <style type="text/css">
    .fancybox-margin {
      margin-right: 0px;
    }
  </style>
  <link rel="prefetch" href="/page-data/lorem-ipsum/page-data.json" crossorigin="anonymous" as="fetch">
  <link rel="prefetch" href="/page-data/lorem-ipsum/page-data.json" crossorigin="anonymous" as="fetch">
</head>

```

<body>

</body>

</html>="prefetch" href="/page-data/lorem-ipsum/page-data.json" crossorigin="anonymous" as="fetch"><link rel="prefetch" href="/page-data/lorem-ipsum/page-data.json" crossorigin="anonymous" as="fetch"></head>

```



-   ```
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

    Remove

-   before `</body>`

    addthis

    ```
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</head>`

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
    <script src="/__/firebase/8.8.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.8.1/firebase-analytics.js"></script>

    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>

    <!--Google Tag----------------------------------------------------------------------->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9B63M34E1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-M9B63M34E1');
    </script>
    ```

    Remove

-   before `</body>`

    gtag-in-body

    ```
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    ```

    Remove

-   before `</head>`

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

-   before `</head>`

    original-analytics

    ```
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

    Remove

-   before `</body>`

    goback

    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>
    ```

    Remove

-   before `</head>`

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

-   before `</head>`

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
        href="https://instructure-uploads-pdx.s3.us-west-2.amazonaws.com/account_168550000000000001/attachments/537/logo-canvas.png"
        rel="apple-touch-icon">
      <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet">
    ```

    Remove

-   before `</head>`

    meta

    ```
    <meta name="google-site-verification" content="q5W83EYchlVTyA-iYRE4ElQGcbD_vukQF0NKW12N3qU" />
    ```

    Remove

-   before `</head>`

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

-   before `</body>`

    print2pdf

    ```
    <a href="//pdfcrowd.com/url_to_pdf/?"
    onclick="if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1">
    Save to PDF
    </a>
    ```

    Remove

-   before `</body>`

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
        <span class="screen-reader-text">Back to top</span>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
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

-   before `</body>`

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

-   before `</head>`

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

-   before `</head>`

    add-this-suggested-pages

    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</body>`

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

-   before `</head>`

    analytics

    ```
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-F56YP2Y17L"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-F56YP2Y17L');
    </script>
    ```

    Remove

-   before `</head>`

    search-script

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
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

-   before `</head>`

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

-   before `</body>`

    simpleanalytics

    ```
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
    ```

    Remove

-   before `</head>`

    metaaaa

    ```
    <meta property="og:image" content="https://mugshotbot.com/m/DROicc16">
    <meta property="twitter:card" content="summary_large_image">
    ```


### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   before `</body>`

    blm

    ```
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

    Remove

-   before `</body>`

    addthis

    ```
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</head>`

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
    <script src="/__/firebase/8.8.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.8.1/firebase-analytics.js"></script>

    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>

    <!--Google Tag----------------------------------------------------------------------->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9B63M34E1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-M9B63M34E1');
    </script>
    ```

    Remove

-   before `</body>`

    gtag-in-body

    ```
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    ```

    Remove

-   before `</head>`

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

-   before `</head>`

    original-analytics

    ```
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

    Remove

-   before `</body>`

    goback

    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>
    ```

    Remove

-   before `</head>`

    prism

    ```
    <script async src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js" integrity="sha512-axJX7DJduStuBB8ePC8ryGzacZPr3rdLaIDZitiEgWWk2gsXxEFlm4UW0iNzj2h3wp5mOylgHAzBzM4nRSvTZA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-dark.min.css" integrity="sha512-Njdz7T/p6Ud1FiTMqH87bzDxaZBsVNebOWmacBjMdgWyeIhUSFU4V52oGwo3sT+ud+lyIE98sS291/zxBfozKw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script async defer src="./js/prism.js"></script>
    <style>
    code[class*="language-"],
    pre[class*="language-"] {
    	color: white;
    	background: none;
    	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    	font-size: 1em;
    	text-align: left;
    	text-shadow: 0 -.1em .2em black;
    	white-space: pre;
    	word-spacing: normal;
    	word-break: normal;
    	word-wrap: normal;
    	line-height: 1.5;

    	-moz-tab-size: 4;
    	-o-tab-size: 4;
    	tab-size: 4;

    	-webkit-hyphens: none;
    	-moz-hyphens: none;
    	-ms-hyphens: none;
    	hyphens: none;
    }

    pre[class*="language-"],
    :not(pre) > code[class*="language-"] {
    	background: hsl(0, 0%, 8%); /* #141414 */
    }

    /* Code blocks */
    pre[class*="language-"] {
    	border-radius: .5em;
    	border: .3em solid hsl(0, 0%, 33%); /* #282A2B */
    	box-shadow: 1px 1px .5em black inset;
    	margin: .5em 0;
    	overflow: auto;
    	padding: 1em;
    }

    pre[class*="language-"]::-moz-selection {
    	/* Firefox */
    	background: hsl(200, 4%, 16%); /* #282A2B */
    }

    pre[class*="language-"]::selection {
    	/* Safari */
    	background: hsl(200, 4%, 16%); /* #282A2B */
    }

    /* Text Selection colour */
    pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    	text-shadow: none;
    	background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
    }

    pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
    code[class*="language-"]::selection, code[class*="language-"] ::selection {
    	text-shadow: none;
    	background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
    	border-radius: .3em;
    	border: .13em solid hsl(0, 0%, 33%); /* #545454 */
    	box-shadow: 1px 1px .3em -.1em black inset;
    	padding: .15em .2em .05em;
    	white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
    	color: hsl(0, 0%, 47%); /* #777777 */
    }

    .token.punctuation {
    	opacity: .7;
    }

    .token.namespace {
    	opacity: .7;
    }

    .token.tag,
    .token.boolean,
    .token.number,
    .token.deleted {
    	color: hsl(14, 58%, 55%); /* #CF6A4C */
    }

    .token.keyword,
    .token.property,
    .token.selector,
    .token.constant,
    .token.symbol,
    .token.builtin {
    	color: hsl(53, 89%, 79%); /* #F9EE98 */
    }

    .token.attr-name,
    .token.attr-value,
    .token.string,
    .token.char,
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable,
    .token.inserted {
    	color: hsl(76, 21%, 52%); /* #8F9D6A */
    }

    .token.atrule {
    	color: hsl(218, 22%, 55%); /* #7587A6 */
    }

    .token.regex,
    .token.important {
    	color: hsl(42, 75%, 65%); /* #E9C062 */
    }

    .token.important,
    .token.bold {
    	font-weight: bold;
    }
    .token.italic {
    	font-style: italic;
    }

    .token.entity {
    	cursor: help;
    }

    pre[data-line] {
    	padding: 1em 0 1em 3em;
    	position: relative;
    }

    /* Markup */
    .language-markup .token.tag,
    .language-markup .token.attr-name,
    .language-markup .token.punctuation {
    	color: hsl(33, 33%, 52%); /* #AC885B */
    }

    /* Make the tokens sit above the line highlight so the colours don't look faded. */
    .token {
    	position: relative;
    	z-index: 1;
    }

    .line-highlight {
    	background: hsla(0, 0%, 33%, 0.25); /* #545454 */
    	background: linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
    	border-bottom: 1px dashed hsl(0, 0%, 33%); /* #545454 */
    	border-top: 1px dashed hsl(0, 0%, 33%); /* #545454 */
    	left: 0;
    	line-height: inherit;
    	margin-top: 0.75em; /* Same as .prism's padding-top */
    	padding: inherit 0;
    	pointer-events: none;
    	position: absolute;
    	right: 0;
    	white-space: pre;
    	z-index: 0;
    }

    .line-highlight:before,
    .line-highlight[data-end]:after {
    	background-color: hsl(215, 15%, 59%); /* #8794A6 */
    	border-radius: 999px;
    	box-shadow: 0 1px white;
    	color: hsl(24, 20%, 95%); /* #F5F2F0 */
    	content: attr(data-start);
    	font: bold 65%/1.5 sans-serif;
    	left: .6em;
    	min-width: 1em;
    	padding: 0 .5em;
    	position: absolute;
    	text-align: center;
    	text-shadow: none;
    	top: .4em;
    	vertical-align: .3em;
    }

    .line-highlight[data-end]:after {
    	bottom: .4em;
    	content: attr(data-end);
    	top: auto;
    }

    </style>
    ```

    Remove

-   before `</body>`

    prismjs

    ```
    <script>
    /* PrismJS 1.24.1
    https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+javascript */
    var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,e={},M={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof W?new W(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n;switch(r=r||{},M.util.type(e)){case"Object":if(n=M.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return n=M.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(e,n){var t=M.util.clone(M.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(t,e,n,r){var a=(r=r||M.languages)[t],i={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.hasOwnProperty(l)||(i[l]=a[l])}var s=r[t];return r[t]=i,M.languages.DFS(M.languages,function(e,n){n===s&&e!=t&&(this[e]=i)}),i},DFS:function e(n,t,r,a){a=a||{};var i=M.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var o=n[l],s=M.util.type(o);"Object"!==s||a[i(o)]?"Array"!==s||a[i(o)]||(a[i(o)]=!0,e(o,t,l,a)):(a[i(o)]=!0,e(o,t,null,a))}}},plugins:{},highlightAll:function(e,n){M.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};M.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),M.hooks.run("before-all-elements-highlight",r);for(var a,i=0;a=r.elements[i++];)M.highlightElement(a,!0===n,r.callback)},highlightElement:function(e,n,t){var r=M.util.getLanguage(e),a=M.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var l={element:e,language:r,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,M.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,M.hooks.run("after-highlight",l),M.hooks.run("complete",l),t&&t.call(l.element)}if(M.hooks.run("before-sanity-check",l),(i=l.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!l.code)return M.hooks.run("complete",l),void(t&&t.call(l.element));if(M.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var s=new Worker(M.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(M.highlight(l.code,l.grammar,l.language));else o(M.util.encode(l.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return M.hooks.run("before-tokenize",r),r.tokens=M.tokenize(r.code,r.grammar),M.hooks.run("after-tokenize",r),W.stringify(M.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new i;return I(a,a.head,e),function e(n,t,r,a,i,l){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}for(var v=c.pattern||c,m=a.next,y=i;m!==t.tail&&!(l&&y>=l.reach);y+=m.value.length,m=m.next){var b=m.value;if(t.length>n.length)return;if(!(b instanceof W)){var k,x=1;if(h){if(!(k=z(v,y,n,f)))break;var w=k.index,A=k.index+k[0].length,P=y;for(P+=m.value.length;P<=w;)m=m.next,P+=m.value.length;if(P-=m.value.length,y=P,m.value instanceof W)continue;for(var E=m;E!==t.tail&&(P<A||"string"==typeof E.value);E=E.next)x++,P+=E.value.length;x--,b=n.slice(y,P),k.index-=y}else if(!(k=z(v,0,b,f)))continue;var w=k.index,S=k[0],O=b.slice(0,w),L=b.slice(w+S.length),N=y+b.length;l&&N>l.reach&&(l.reach=N);var j=m.prev;O&&(j=I(t,j,O),y+=O.length),q(t,j,x);var C=new W(o,g?M.tokenize(S,g):S,d,S);if(m=I(t,j,C),L&&I(t,m,L),1<x){var _={cause:o+","+u,reach:N};e(n,t,r,m.prev,y,_),l&&_.reach>l.reach&&(l.reach=_.reach)}}}}}}(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=M.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=M.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n)}},Token:W};function W(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function z(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function I(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function q(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}if(u.Prism=M,W.stringify=function n(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=n(e,t)}),r}var a={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),M.hooks.run("wrap",a);var l="";for(var o in a.attributes)l+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(M.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),t=n.language,r=n.code,a=n.immediateClose;u.postMessage(M.highlight(r,M.languages[t],t)),a&&u.close()},!1)),M;var t=M.util.currentScript();function r(){M.manual||M.highlightAll()}if(t&&(M.filename=t.src,t.hasAttribute("data-manual")&&(M.manual=!0)),!M.manual){var a=document.readyState;"loading"===a||"interactive"===a&&t&&t.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return M}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
    Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?\]\]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
    !function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
    Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
    Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;

    </script>
    ```

    Remove

-   before `</head>`

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

-   before `</head>`

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
        href="https://instructure-uploads-pdx.s3.us-west-2.amazonaws.com/account_168550000000000001/attachments/537/logo-canvas.png"
        rel="apple-touch-icon">
      <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet">
    ```

    Remove

-   before `</body>`

    prism2body

    ```
    <script>
    /* PrismJS 1.24.1
    https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+javascript */
    var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,e={},M={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof W?new W(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n;switch(r=r||{},M.util.type(e)){case"Object":if(n=M.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return n=M.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:e,plaintext:e,text:e,txt:e,extend:function(e,n){var t=M.util.clone(M.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(t,e,n,r){var a=(r=r||M.languages)[t],i={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.hasOwnProperty(l)||(i[l]=a[l])}var s=r[t];return r[t]=i,M.languages.DFS(M.languages,function(e,n){n===s&&e!=t&&(this[e]=i)}),i},DFS:function e(n,t,r,a){a=a||{};var i=M.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var o=n[l],s=M.util.type(o);"Object"!==s||a[i(o)]?"Array"!==s||a[i(o)]||(a[i(o)]=!0,e(o,t,l,a)):(a[i(o)]=!0,e(o,t,null,a))}}},plugins:{},highlightAll:function(e,n){M.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};M.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),M.hooks.run("before-all-elements-highlight",r);for(var a,i=0;a=r.elements[i++];)M.highlightElement(a,!0===n,r.callback)},highlightElement:function(e,n,t){var r=M.util.getLanguage(e),a=M.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var l={element:e,language:r,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,M.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,M.hooks.run("after-highlight",l),M.hooks.run("complete",l),t&&t.call(l.element)}if(M.hooks.run("before-sanity-check",l),(i=l.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!l.code)return M.hooks.run("complete",l),void(t&&t.call(l.element));if(M.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var s=new Worker(M.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(M.highlight(l.code,l.grammar,l.language));else o(M.util.encode(l.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return M.hooks.run("before-tokenize",r),r.tokens=M.tokenize(r.code,r.grammar),M.hooks.run("after-tokenize",r),W.stringify(M.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new i;return I(a,a.head,e),function e(n,t,r,a,i,l){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}for(var v=c.pattern||c,m=a.next,y=i;m!==t.tail&&!(l&&y>=l.reach);y+=m.value.length,m=m.next){var b=m.value;if(t.length>n.length)return;if(!(b instanceof W)){var k,x=1;if(h){if(!(k=z(v,y,n,f)))break;var w=k.index,A=k.index+k[0].length,P=y;for(P+=m.value.length;P<=w;)m=m.next,P+=m.value.length;if(P-=m.value.length,y=P,m.value instanceof W)continue;for(var E=m;E!==t.tail&&(P<A||"string"==typeof E.value);E=E.next)x++,P+=E.value.length;x--,b=n.slice(y,P),k.index-=y}else if(!(k=z(v,0,b,f)))continue;var w=k.index,S=k[0],O=b.slice(0,w),L=b.slice(w+S.length),N=y+b.length;l&&N>l.reach&&(l.reach=N);var j=m.prev;O&&(j=I(t,j,O),y+=O.length),q(t,j,x);var C=new W(o,g?M.tokenize(S,g):S,d,S);if(m=I(t,j,C),L&&I(t,m,L),1<x){var _={cause:o+","+u,reach:N};e(n,t,r,m.prev,y,_),l&&_.reach>l.reach&&(l.reach=_.reach)}}}}}}(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=M.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=M.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n)}},Token:W};function W(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function z(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function I(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function q(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}if(u.Prism=M,W.stringify=function n(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=n(e,t)}),r}var a={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),M.hooks.run("wrap",a);var l="";for(var o in a.attributes)l+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(M.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),t=n.language,r=n.code,a=n.immediateClose;u.postMessage(M.highlight(r,M.languages[t],t)),a&&u.close()},!1)),M;var t=M.util.currentScript();function r(){M.manual||M.highlightAll()}if(t&&(M.filename=t.src,t.hasAttribute("data-manual")&&(M.manual=!0)),!M.manual){var a=document.readyState;"loading"===a||"interactive"===a&&t&&t.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return M}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
    Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?\]\]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
    !function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
    Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
    Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;

    </script>
    ```

    Remove

-   before `</head>`

    algolia

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
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









Control the post processing and optimizations Netlify can do for you

### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   before `</body>`

    blm

    ```
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

    Remove

-   before `</body>`

    addthis

    ```
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</head>`

    apple

    ```
    <link rel="apple-touch-icon" href="logo-circle.png">
    ```

    Remove

-   before `</body>`

    hit counter

    ```
    <div id="sfcfbp12lg5qfuxxlsmlznhmyuh5qc33xr2"></div><script type="text/javascript" src="https://counter5.stat.ovh/private/counter.js?c=fbp12lg5qfuxxlsmlznhmyuh5qc33xr2&down=async" async></script><br><a href="https://www.freecounterstat.com">page counter</a><noscript><a href="https://www.freecounterstat.com" title="page counter"><img src="https://counter5.stat.ovh/private/freecounterstat.php?c=fbp12lg5qfuxxlsmlznhmyuh5qc33xr2" border="0" title="page counter" alt="page counter"></a></noscript>
    ```

    Remove

-   before `</body>`

    go-back

    ```
    <input type="button" style="position: absolute;top: 10px;right: 10px;width:80px;color:rgb(147, 13, 13);font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>";
          ?>
    ```

    Remove

-   before `</body>`

    clock

    ```
    <div class="cleanslate w24tz-current-time w24tz-small" style="display: inline-block !important; visibility: hidden !important; min-width:200px !important; min-height:100px !important;"><p><a href="//24timezones.com/time-zone/et" style="text-decoration: none" class="clock24" id="tz24-1627974679-tzest-eyJob3VydHlwZSI6MTIsInNob3dkYXRlIjoiMSIsInNob3dzZWNvbmRzIjoiMCIsImNvbnRhaW5lcl9pZCI6ImNsb2NrX2Jsb2NrX2NiNjEwOGVjMTc3NjAwMiIsInR5cGUiOiJkYiIsImxhbmciOiJlbiJ9" title="EST time now" target="_blank">EST</a></p><div id="clock_block_cb6108ec1776002"></div></div>
    <script type="text/javascript" src="//w.24timezones.com/l.js" async></script>
    ```

    Remove

-   before `</body>`

    algolia

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
    <script type="text/javascript">
          algoliasearchNetlify({
            appId: "BAGY237H21",
            apiKey: "5f5a2d1bb109c79803ca95250ca3496c",
            siteId: "835ad7b5-37ce-4a32-824d-f3b0d3eab8e5",
            branch: "master",
            selector: "div#search",
             });
        </script>
    <div id="search"></div>
    ```

    Remove

-   before `</head>`

    algolia-cdn

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
    ```

    Remove

-   before `</body>`

    algolia2

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
    <script type="text/javascript">
          algoliasearchNetlify({
            appId: "BAGY237H21",
            apiKey: "5f5a2d1bb109c79803ca95250ca3496c",
            siteId: "835ad7b5-37ce-4a32-824d-f3b0d3eab8e5",
            branch: "master",
            selector: "div#search",
             });
        </script>
    <div id="search"></div>
    ```

    Remove



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


[Post processing](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#post-processing)
---------------------------------------------------------------------------------------------

Control the post processing and optimizations Netlify can do for you

### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   before `</head>`

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
    <script src="/__/firebase/8.8.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.8.1/firebase-analytics.js"></script>

    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>

    <!--Google Tag----------------------------------------------------------------------->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9B63M34E1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-M9B63M34E1');
    </script>
    ```

    Remove

-   before `</body>`

    gtag-in-body

    ```
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5S5XXNR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    ```

    Remove

-   before `</head>`

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

-   before `</head>`

    original-analytics

    ```
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

    Remove

-   before `</body>`

    goback

    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>
    ```

    Remove

-   before `</head>`

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

-   before `</head>`

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
        href="https://instructure-uploads-pdx.s3.us-west-2.amazonaws.com/account_168550000000000001/attachments/537/logo-canvas.png"
        rel="apple-touch-icon">
      <link type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet">
    ```

    Remove

-   before `</head>`

    meta

    ```
    <meta name="google-site-verification" content="q5W83EYchlVTyA-iYRE4ElQGcbD_vukQF0NKW12N3qU" />
    ```

    Remove

-   before `</head>`

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

-   before `</body>`

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
        <span class="screen-reader-text">Back to top</span>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
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

-   before `</head>`

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

-   before `</head>`

    analytics

    ```
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-F56YP2Y17L"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-F56YP2Y17L');
    </script>
    ```

    Remove

-   before `</head>`

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

-   before `</body>`

    simpleanalytics

    ```
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
    ```

    Remove

-   before `</head>`

    metaaaa

    ```
    <meta property="og:image" content="https://mugshotbot.com/m/DROicc16">
    <meta property="twitter:card" content="summary_large_image">
    ```

    Remove

-   before `</head>`

    algolia-head

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

    Remove

-   before `</body>`

    fb

    ```
    <script>
    FB.api(
      '/https://sanity-gatsby-portfolio-3-web-4dmiq19t.netlify.app/',
      'GET',
      {},
      function(response) {
          // Insert your code here
      }
    );

    </script>

    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId            : '448469606483680',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v12.0'
        });
      };
    </script>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
    ```

    Remove

-   before `</body>`

    stackbit-widget

    ```
    <script src="https://widget.stackbit.com/init.js" id="stackbit-widget-init" data-stackbit-project-id="609b2d7c71a5dd0016f36326"></script>
    ```

    Remove

-   before `</head>`

    blm

    ```
    <!-- Insert makerbadge.js (download or use ☁️cloud version) -->

    <script type="text/javascript" src="https://makerbadge.s3.amazonaws.com/blmbadge.js"></script>

    <!-- Initialise MakerBadge with options -->

    <script>
      BLMBadge.init({
           layout:2,
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

-   before `</body>`

    addthis

    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</body>`

    add-this

    ```
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>
    ```

    Remove

-   before `</head>`

    meta

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

    Remove

-   before `</body>`

    test

-   before `</body>`

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

    Remove

-   before `</head>`

    links-highlight

    ```
    <style>

    a {
    color:blue;
    text-decoration: underline!important;
    }

    </style>
    ```

    Remove





---
created: 2022-01-16T11:01:24 (UTC -05:00)
tags: []
source: https://app.netlify.com/sites/bgoonz-blog/settings/deploys
author: 
---

# Build & deploy | Site settings

> ## Excerpt
> Settings for Continuous Deployment from a Git repository

---
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
    <script src="/__/firebase/8.8.1/firebase-app.js"></script>
    
    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/8.8.1/firebase-analytics.js"></script>
    
    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>
    
    <!--Google Tag----------------------------------------------------------------------->
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9B63M34E1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
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
    
-   before `</body>`
    
    goback
    
    ```
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>
    ```
    
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
    
-   before `</head>`
    
    algolia-head
    
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
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'AW-389525629');
    </script>
    <!-- Event snippet for Subscribe conversion page -->
    <script>
      gtag('event', 'conversion', {'send_to': 'AW-389525629/_TJRCMyNpIsDEP3g3rkB'});
    </script>
    ```
    
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
    
            #sb-search-example p {
                font-family: sans-serif;
                font-size: 18px;
                line-height: 12px;
            margin: 0;
            }
    
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
    
-   before `</head>`
    
    blm
    
    ```
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
    
-   before `</head>`
    
    netlify-identity
    
    ```
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    ```
    
-   before `</head>`
    
    netlify-identity
    
    ```
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    
    
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
    
-   before `</head>`
    
    search
    
    ```
    <script>"use strict";
    
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
    
-   before `</body>`
    
    sb-search
    
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
    
            #sb-search-example p {
                font-family: sans-serif;
                font-size: 18px;
                line-height: 12px;
            margin: 0;
            }
    
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
