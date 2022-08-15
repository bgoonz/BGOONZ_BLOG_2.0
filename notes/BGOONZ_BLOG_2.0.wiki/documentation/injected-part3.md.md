## [Post processing](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#post-processing)

Control the post processing and optimizations Netlify can do for you

### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   before `</body>`

    blm

    ```
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

    apple

    ```
    <link rel="apple-touch-icon" href="logo-circle.png">
    ```

    Remove

-   before `</body>`

    hit counter

    ```
    <div id="sfcfbp12lg5qfuxxlsmlznhmyuh5qc33xr2">
</div>
<script type="text/javascript" src="https://counter5.stat.ovh/private/counter.js?c=fbp12lg5qfuxxlsmlznhmyuh5qc33xr2&down=async" async>
</script>
<br>
<a href="https://www.freecounterstat.com">page counter</a>
<noscript>
<a href="https://www.freecounterstat.com" title="page counter">
<img src="https://counter5.stat.ovh/private/freecounterstat.php?c=fbp12lg5qfuxxlsmlznhmyuh5qc33xr2" border="0" title="page counter" alt="page counter">
</a>
</noscript>
    ```

    Remove

-   before `</body>`

    go-back

    ```
    <input type="button" style="position: absolute;top: 10px;right: 10px;width:80px;color:rgb(147, 13, 13);font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'>
</a>";
          ?>
    ```

    Remove

-   before `</body>`

    clock

    ```
    <div class="cleanslate w24tz-current-time w24tz-small" style="display: inline-block !important; visibility: hidden !important; min-width:200px !important; min-height:100px !important;">
<p>
<a href="//24timezones.com/time-zone/et" style="text-decoration: none" class="clock24" id="tz24-1627974679-tzest-eyJob3VydHlwZSI6MTIsInNob3dkYXRlIjoiMSIsInNob3dzZWNvbmRzIjoiMCIsImNvbnRhaW5lcl9pZCI6ImNsb2NrX2Jsb2NrX2NiNjEwOGVjMTc3NjAwMiIsInR5cGUiOiJkYiIsImxhbmciOiJlbiJ9" title="EST time now" target="_blank">EST</a>
</p>
<div id="clock_block_cb6108ec1776002">
</div>
</div>
    <script type="text/javascript" src="//w.24timezones.com/l.js" async>
</script>
    ```

    Remove

-   before `</body>`

    algolia

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js">
</script>
    <script type="text/javascript">
          algoliasearchNetlify({
            appId: "BAGY237H21",
            apiKey: "5f5a2d1bb109c79803ca95250ca3496c",
            siteId: "835ad7b5-37ce-4a32-824d-f3b0d3eab8e5",
            branch: "master",
            selector: "div#search",
             });
        </script>

    ```

    Remove

-   before `</head>`

    algolia-cdn

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js">
</script>
    ```

    Remove

-   before `</body>`

    algolia2

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js">
</script>
    <script type="text/javascript">
          algoliasearchNetlify({
            appId: "BAGY237H21",
            apiKey: "5f5a2d1bb109c79803ca95250ca3496c",
            siteId: "835ad7b5-37ce-4a32-824d-f3b0d3eab8e5",
            branch: "master",
            selector: "div#search",
             });
        </script>

    ```

    Remove

[Learn more about snippet injection in the docs](https://www.netlify.com/docs/inject-analytics-snippets)

Add snippet

### [Asset optimization](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#asset-optimization)

Asset optimization is disabled.

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

-   Post to <https://api.stackbit.com/project/609b2d7c71a5dd0016f36326/webhook/netlify> when deploy starts

    Options

-   Post to <https://api.stackbit.com/project/609b2d7c71a5dd0016f36326/webhook/netlify> when deploy succeeds

    Options

-   Post to <https://api.stackbit.com/project/609b2d7c71a5dd0016f36326/webhook/netlify> when deploy fails

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
