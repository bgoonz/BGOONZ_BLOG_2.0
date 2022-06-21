
# Webmaster Guidelines | Google Search Central  |  Google Developers

> ## Excerpt
> Follow Google's Webmaster Guidelines, including quality and SEO guidelines, designed to help Google better find, index, and rank your site.

---
<iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/yFxNda5Z4eE?origin=https%3A%2F%2Fdevelopers.google.com&amp;showinfo=0&amp;video-id=yFxNda5Z4eE&amp;enablejsapi=1&amp;widgetid=1" id="widget2"></iframe>

Following the [General guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines?hl=en&_ga=2.47561892.2010395531.1639933504-972587081.1639933504&visit_id=1639931578542-8725338968151920159&rd=1#general) will help Google find, index, and rank your site.

We strongly encourage you to pay very close attention to the [Quality guidelines](https://developers.google.com/search/docs/advanced/guidelines/webmaster-guidelines?hl=en&_ga=2.47561892.2010395531.1639933504-972587081.1639933504&visit_id=1639931578542-8725338968151920159&rd=1#quality_guidelines), which outline some of the illicit practices that may lead to a site being removed entirely from the Google index or otherwise affected by an algorithmic or manual spam action. If a site has been affected by a spam action, it may no longer show up in results on Google.com or on any of Google's partner sites.

## General guidelines

### Help Google find your pages

-   Ensure that all pages on the site can be reached by a link from another findable page. Make sure the referring link includes either text or, for images, an `alt` attribute, that is relevant to the target page. Crawlable links are [`<a>` tags with an `href` attribute](https://developers.google.com/search/docs/advanced/guidelines/links-crawlable).
-   Provide a [sitemap file](https://developers.google.com/search/docs/advanced/sitemaps/overview) with links that point to the important pages on your site. Also provide a page with a human-readable list of links to these pages (sometimes called a site index or site map page).
-   Limit the number of links on a page to a reasonable number (a few thousand at most).
-   Make sure that your web server correctly supports the `If-Modified-Since` HTTP header. This feature directs your web server to tell Google if your content has changed since we last crawled your site. Supporting this feature saves you bandwidth and overhead.
-   Use the robots.txt file on your web server to manage your crawling budget by preventing crawling of infinite spaces such as search result pages. Keep your robots.txt file up to date. [Learn how to manage crawling with the robots.txt file](https://developers.google.com/search/docs/advanced/robots/intro). Test the coverage and syntax of your robots.txt file using the [robots.txt Tester](https://www.google.com/webmasters/tools/robots-testing-tool).

**Ways to help Google find your site:**

-   [Ask Google to crawl your pages](https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl).
-   Make sure that any sites that should know about your pages are aware your site is online.

### Help Google understand your pages

-   Create a useful, information-rich site, and write pages that clearly and accurately describe your content.
-   Think about the words users would type to find your pages, and make sure that your site actually includes those words within it.
-   Ensure that your [`<title>` elements](https://developers.google.com/search/docs/advanced/appearance/title-link) and `alt` attributes are descriptive, specific, and accurate.
-   Design your site to have a clear conceptual page hierarchy.
-   Follow our recommended best practices for [images](https://developers.google.com/search/docs/advanced/guidelines/google-images), [video](https://developers.google.com/search/docs/advanced/guidelines/video), and [structured data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data).
-   When using a content management system (for example, Wix or WordPress), make sure that it creates pages and links that search engines can crawl.
-   To help Google fully understand your site's contents, allow all site assets that would significantly affect page rendering to be crawled: for example, CSS and JavaScript files that affect the understanding of the pages. The Google indexing system renders a web page as the user would see it, including images, CSS, and JavaScript files. To see which page assets that Googlebot cannot crawl, use the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289). To debug directives in your robots.txt file, use the [robots.txt Tester](https://support.google.com/webmasters/answer/6062598) tool.
-   Allow search bots to crawl your site without session IDs or URL parameters that track their path through the site. These techniques are useful for tracking individual user behavior, but the access pattern of bots is entirely different. Using these techniques may result in incomplete indexing of your site, as bots may not be able to eliminate URLs that look different but actually point to the same page.
-   Make your site's important content visible by default. Google is able to crawl HTML content hidden inside navigational elements such as tabs or expanding sections. However, we consider this content less accessible to users, and recommend that you make your most important information visible in the default page view.
-   Make a reasonable effort to ensure that advertisement links on your pages do not affect search engine rankings. For example, use [robots.txt](https://developers.google.com/search/docs/advanced/robots/intro), `rel="nofollow"`, or `rel="sponsored"` to prevent advertisement links from being followed by a crawler.

### Help visitors use your pages

-   Try to use text instead of images to display important names, content, or links. If you must use images for textual content, use the `alt` attribute to include a few words of descriptive text.
-   Ensure that all links go to live web pages. Use [valid HTML](https://validator.w3.org/).
-   Optimize your page loading times. Fast sites make users happy and improve the overall quality of the web (especially for those users with slow Internet connections). Google recommends that you use tools like [PageSpeed Insights](https://pagespeed.web.dev/) and [Webpagetest.org](https://www.webpagetest.org/) to test the performance of your page.
-   Design your site for all device types and sizes, including desktops, tablets, and smartphones. Use the [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) to test how well your pages work on mobile devices, and get feedback on what needs to be fixed.
-   Ensure that your site [appears correctly in different browsers](https://developers.google.com/search/docs/advanced/guidelines/browser-compatibility).
-   If possible, [secure your site's connections](https://developers.google.com/search/docs/advanced/security/https) with HTTPS. Encrypting interactions between the user and your website is a good practice for communication on the web.
-   Ensure that your pages are useful for readers with visual impairments, for example, by testing usability with a screen-reader.

## Quality guidelines

These quality guidelines cover the most common forms of deceptive or manipulative behavior, but Google may respond negatively to other misleading practices not listed here. It's not safe to assume that just because a specific deceptive technique isn't included on this page, Google approves of it. Website owners who spend their energies upholding the spirit of the basic principles will provide a much better user experience and subsequently enjoy better ranking than those who spend their time looking for loopholes they can exploit.

If you believe that another site is abusing Google's quality guidelines, please let us know by [filing a spam report](https://www.google.com/webmasters/tools/spamreport). Google prefers developing scalable and automated solutions to problems, and will use the report for further improving our spam detection systems.

<iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/2oPj5_9WxpA?origin=https%3A%2F%2Fdevelopers.google.com&amp;showinfo=0&amp;video-id=2oPj5_9WxpA&amp;enablejsapi=1&amp;widgetid=3" id="widget4"></iframe>

### Basic principles

-   Make pages primarily for users, not for search engines.
-   Don't deceive your users.
-   Avoid tricks intended to improve search engine rankings. A good rule of thumb is whether you'd feel comfortable explaining what you've done to a website that competes with you, or to a Google employee. Another useful test is to ask, "Does this help my users? Would I do this if search engines didn't exist?"
-   Think about what makes your website unique, valuable, or engaging. Make your website stand out from others in your field.

### Specific guidelines

**Avoid** the following techniques:

-   [Automatically generated content](https://developers.google.com/search/docs/advanced/guidelines/auto-gen-content)
-   Participating in [link schemes](https://developers.google.com/search/docs/advanced/guidelines/link-schemes)
-   Creating pages with [little or no original content](https://developers.google.com/search/docs/advanced/guidelines/thin-content)
-   [Cloaking](https://developers.google.com/search/docs/advanced/guidelines/cloaking)
-   [Sneaky redirects](https://developers.google.com/search/docs/advanced/guidelines/sneaky-redirects)
-   [Hidden text or links](https://developers.google.com/search/docs/advanced/guidelines/hidden-text-links)
-   [Doorway pages](https://developers.google.com/search/docs/advanced/guidelines/doorway-pages)
-   [Scraped content](https://developers.google.com/search/docs/advanced/guidelines/scraped-content)
-   Participating in [affiliate programs without adding sufficient value](https://developers.google.com/search/docs/advanced/guidelines/affiliate-programs)
-   Loading pages with [irrelevant keywords](https://developers.google.com/search/docs/advanced/guidelines/irrelevant-keywords)
-   Creating pages with [malicious behavior](https://developers.google.com/search/docs/advanced/guidelines/malicious-behavior), such as phishing or installing viruses, trojans, or other badware
-   Abusing [structured data](https://developers.google.com/search/docs/advanced/structured-data/sd-policies) markup
-   Sending [automated queries](https://developers.google.com/search/docs/advanced/guidelines/automated-queries) to Google

**Follow** good practices:

-   Monitoring your site for [hacking](https://developers.google.com/search/docs/advanced/security/what-is-hacked) and removing hacked content as soon as it appears
-   Preventing and removing [user-generated spam](https://developers.google.com/search/docs/advanced/guidelines/user-gen-spam) on your site

If your site violates one or more of these guidelines, then Google may take [manual action](https://support.google.com/webmasters/answer/9044175) against it. Once you have remedied the problem, you can [submit your site for reconsideration](https://support.google.com/webmasters/answer/35843).


---


# Create Crawlable Links | Google Search Central  |  Google Developers

> ## Excerpt
> Google can only crawl links if they use the proper a tag with an href attritube. Review examples to ensure your links are crawlable.

---
Google can follow your links only if they **use proper `<a>` tags** with **resolvable URLs**:

Google can follow links only if they are an `<a>` tag with an _href_ attribute. Links that use other formats won't be followed by Google's crawlers. Google cannot follow `<a>` links without an _href_ tag or other tags that perform a links because of script events. Here are examples of links that Google can and can't follow:

**Can follow:**

-   `<a href="https://example.com">`
-   `<a href="/relative/path/file">`

**Can't follow:**

-   `<a routerLink="some/path">`
-   `<span href="https://example.com">`
-   `<a onclick="goto('https://example.com')">`

## Link to resolvable URLs

Ensure that the URL linked to by your `<a>` tag is an actual web address that Googlebot can send requests to, for example:

**Can resolve:**

-   `https://example.com/stuff`
-   `/products`
-   `/products.php?id=123`

**Can't resolve:**

-   `javascript:goTo('products')`
-   `javascript:window.location.href='/products'`
-   `#`
---





# What Is a Sitemap | Google Search Central  |  Google Developers

> ## Excerpt
> A sitemap provides information that helps Google more intelligently crawl your site. Discover how a sitemap works and determine if you need one.

---
<iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="640" height="360" src="https://www.youtube.com/embed/JlamLfyFjTA?origin=https%3A%2F%2Fdevelopers.google.com&amp;showinfo=0&amp;video-id=JlamLfyFjTA&amp;enablejsapi=1&amp;widgetid=1" id="widget2" data-title="YouTube video player"></iframe>

A _sitemap_ is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently. A sitemap tells Google which pages and files you think are important in your site, and also provides valuable information about these files. For example, when the page was last updated and any alternate language versions of the page.

You can use a sitemap to provide information about specific types of content on your pages, including [video](https://developers.google.com/search/docs/advanced/sitemaps/video-sitemaps), [image](https://developers.google.com/search/docs/advanced/sitemaps/image-sitemaps), and [news](https://developers.google.com/search/docs/advanced/sitemaps/news-sitemap) content. For example:

-   A sitemap _video entry_ can specify the video running time, category, and age-appropriateness rating.
-   A sitemap _image entry_ can include the image subject matter, type, and license.
-   A sitemap _news entry_ can include the article title and publication date.

## Do I need a sitemap?

If your site's pages are properly linked, Google can usually discover most of your site. Proper linking means that all pages that you deem important can be reached through some form of navigation, be that your site's menu or links that you placed on pages. Even so, a sitemap can improve the crawling of larger or more complex sites, or more specialized files.

**You might need a sitemap if:**

-   **Your site is really large.** As a result, it's more likely Google web crawlers might overlook crawling some of your new or recently updated pages.
-   **Your site has a large archive of content pages that are isolated or not well linked to each other.** If your site pages don't naturally reference each other, you can list them in a sitemap to ensure that Google doesn't overlook some of your pages.
-   **Your site is new and has few external links to it.** Googlebot and other web crawlers crawl the web by following links from one page to another. As a result, Google might not discover your pages if no other sites link to them.
-   **Your site has a lot of rich media content (video, images) or is shown in Google News.** If provided, Google can take additional information from sitemaps into account for search, where appropriate.

**You might _not_ need a sitemap if:**

-   **Your site is "small".** By small, we mean about 500 pages or fewer on your site. (Only pages that you think need to be in search results count toward this total.)
-   **Your site is comprehensively linked internally.** This means that Google can find all the important pages on your site by following links starting from the homepage.
-   **You don't have many media files** (video, image) **or news pages** that you want to show in search results. Sitemaps can help Google find and understand video and image files, or news articles, on your site. If you don't need these results to appear in image, video, or news results, you might not need a sitemap.

## Build a sitemap

If you decided that you need a sitemap, [learn more about how to create one](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap).





---



# Robots.txt Introduction and Guide | Google Search Central  |  Google Developers

> ## Excerpt
> Robots.txt is used to manage crawler traffic. Explore this robots.txt introduction guide to learn what robot.txt files are and how to use them.

---
A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests; **it is not a mechanism for keeping a web page out of Google**. To keep a web page out of Google, [block indexing with `noindex`](https://developers.google.com/search/docs/advanced/crawling/block-indexing) or password-protect the page.

## What is a robots.txt file used for?

A robots.txt file is used primarily to manage crawler traffic to your site, and _usually_ to keep a file off Google, depending on the file type:

robots.txt effect on different file types

Web page

You can use a robots.txt file for web pages (HTML, PDF, or other [non-media formats that Google can read](https://support.google.com/webmasters/answer/35287)), to manage crawling traffic if you think your server will be overwhelmed by requests from Google's crawler, or to avoid crawling unimportant or similar pages on your site.

**If your web page is blocked with a robots.txt file**, its URL can still appear in search results, but the search result will [not have a description](https://support.google.com/webmasters/answer/7489871). Image files, video files, PDFs, and other non-HTML files will be excluded. If you see this search result for your page and want to fix it, remove the robots.txt entry blocking the page. If you want to hide the page completely from Search, use [another method](https://developers.google.com/search/docs/advanced/crawling/remove-information#i-control-the-web-page).

Media file

Use a robots.txt file to manage crawl traffic, and also to prevent image, video, and audio files from appearing in Google search results. This won't prevent other pages or users from linking to your image, video, or audio file.

-   [Read more about preventing images from appearing on Google.](https://developers.google.com/search/docs/advanced/crawling/prevent-images-on-your-page)
-   [Read more about how to remove or restrict your video files from appearing on Google.](https://developers.google.com/search/docs/advanced/guidelines/video#remove)

Resource file

You can use a robots.txt file to block resource files such as unimportant image, script, or style files, **if you think that pages loaded without these resources will not be significantly affected by the loss**. However, if the absence of these resources make the page harder for Google's crawler to understand the page, don't block them, or else Google won't do a good job of analyzing pages that depend on those resources.

## Understand the limitations of a robots.txt file

Before you create or edit a robots.txt file, you should know the limits of this URL blocking method. Depending on your goals and situation, you might want to consider other mechanisms to ensure your URLs are not findable on the web.

-   **robots.txt directives may not be supported by all search engines.**  
    The instructions in robots.txt files cannot enforce crawler behavior to your site; it's up to the crawler to obey them. While Googlebot and other respectable web crawlers obey the instructions in a robots.txt file, other crawlers might not. Therefore, if you want to keep information secure from web crawlers, it's better to use other blocking methods, such as [password-protecting private files on your server](https://developers.google.com/search/docs/advanced/crawling/control-what-you-share).
-   **Different crawlers interpret syntax differently.**  
    Although respectable web crawlers follow the directives in a robots.txt file, each crawler might interpret the directives differently. You should know the [proper syntax](https://developers.google.com/search/docs/advanced/robots/robots_txt#syntax) for addressing different web crawlers as some might not understand certain instructions.
-   **A page that's disallowed in robots.txt can still be indexed if linked to from other sites.**  
    While Google won't crawl or index the content blocked by a robots.txt file, we might still find and index a disallowed URL if it is linked from other places on the web. As a result, the URL address and, potentially, other publicly available information such as anchor text in links to the page can still appear in Google search results. To properly prevent your URL from appearing in Google search results, [password-protect the files on your server](https://developers.google.com/search/docs/advanced/crawling/control-what-you-share), [use the `noindex` meta tag or response header](https://developers.google.com/search/docs/advanced/crawling/block-indexing), or remove the page entirely.

## Create a robots.txt file

If you decided that you need one, learn how to [create a robots.txt file](https://developers.google.com/search/docs/advanced/robots/create-robots-txt).



---