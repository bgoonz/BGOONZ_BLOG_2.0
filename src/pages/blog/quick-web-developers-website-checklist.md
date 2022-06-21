---
title: Quick Web Developers Website Checklist
template: post
subtitle: " & A List Of Tools For Improvement"
excerpt: A set of questions you should use before handing off your application
  to the client.
date: 2022-06-17T21:15:36.022Z
image: https://cdn-images-1.medium.com/max/800/0*QD7rah374uFotVYN.jpg
thumb_image: https://cdn-images-1.medium.com/max/800/0*QD7rah374uFotVYN.jpg
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/awesome-lists.yaml
tags:
  - src/data/tags/career.yaml
show_author_bio: true
related_posts:
  - src/pages/blog/accessibility.md
cmseditable: true
---
<!--StartFragment-->

- - -

### Quick Web Developers Website Checklist & A List Of Tools For Improvement

#### A set of questions you should use before handing off your application to the client.

![](https://cdn-images-1.medium.com/max/800/0*QD7rah374uFotVYN.jpg)

First off… download this developer checklist extension for chrome that literally evaluates the checkpoints on any webpage you activate it on.. it also provides advice and html validation so that you can improve your site and it’s SEO rankings!

[**Web Developer Checklist**\
*Analyses any web page for violations of best practices*chrome.google.com](https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US "https\://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US")[](https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US)

#### Here it is in action :

![](https://cdn-images-1.medium.com/max/800/1*Qh8BZUzF7nRISPrwDTz05Q.png)

### Remainder of tool list is below this checklist:

- - -

### Usefulness & Relevance:

> *Does the content meet user needs, goals, and interests?*
>
> *Does the content meet business goals?*
>
> *For how long will the content be useful? When should it expire? Has its usefulness already expired?*
>
> *Is the content timely and relevant?*

- - -

### Clarity & Accuracy:

> **Is the content understandable to customers?**
>
> **Is the content organized logically & coherently?**
>
> **Is the content correct?**
>
> **Does the content contain factual errors, typos, or grammatical errors?**
>
> **Do images, video, and audio meet technical standards, so they are clear?**

- - -

### Influence & Engagement:

> Does the content use the most appropriate techniques to influence or engage customers?
>
> Does the content execute those techniques effectively?
>
> Does the content use too many or too few techniques for the context?

- - -

### Completeness:

> Does the content include all of the information customers need or might want about a topic?
>
> Does the content include too much or too little information about a topic for the context?

### Voice & Style:

> Does the content consistently reflect the editorial or brand voice?
>
> Does its tone adjust appropriately to the context — for example, sales versus customer service?
>
> Does the content convey the appropriate editorial and brand qualities?
>
> Does the content seem to have a style? If so, does the content adhere to it consistently?
>
> Does the content read, look, or sound as though it’s professionally crafted?

- - -

### Usability & Findability:

> Is the content easy to scan or read?
>
> Is the content in a usable format, including headings, bulleted lists, tables, white space, or similar techniques, as appropriate to the content?
>
> Does the content have the appropriate metadata?
>
> Does the content follow search engine optimization (SEO) guidelines — such as using keywords — without sacrificing quality in other areas?
>
> Can customers find the content when searching using relevant keywords?

- - -

### SEO Advice From Google:

### Help Google find your pages

* Ensure that all pages on the site can be reached by a link from another findable page. The referring link should include either text or, for images, an alt attribute, that is relevant to the target page. Crawlable links are `<a>`[ tags with an href attribute](https://developers.google.com/search/docs/advanced/guidelines/links-crawlable).
* Provide a [sitemap file](http://sitemaps.org/) with links that point to the important pages on your site. Also provide a page with a human-readable list of links to these pages (sometimes called a site index or site map page).
* Limit the number of links on a page to a reasonable number (a few thousand at most).
* Make sure that your web server correctly supports the `If-Modified-Since` HTTP header. This feature directs your web server to tell Google if your content has changed since we last crawled your site. Supporting this feature saves you bandwidth and overhead.
* Use the robots.txt file on your web server to manage your crawling budget by preventing crawling of infinite spaces such as search result pages. Keep your robots.txt file up to date. [Learn how to manage crawling with the robots.txt file](https://developers.google.com/search/docs/advanced/robots/robots-faq). Test the coverage and syntax of your robots.txt file using the [robots.txt Tester](https://www.google.com/webmasters/tools/robots-testing-tool).

**Ways to help Google find your site:**

* [Ask Google to crawl your pages](https://developers.google.com/search/docs/advanced/crawling/ask-google-to-recrawl).
* Make sure that any sites that should know about your pages are aware your site is online.

### Help Google understand your pages

* Create a useful, information-rich site, and write pages that clearly and accurately describe your content.
* Think about the words users would type to find your pages, and make sure that your site actually includes those words within it.
* Ensure that your `<title>` elements and `alt` attributes are descriptive, specific, and accurate.
* Design your site to have a clear conceptual page hierarchy.
* Follow our recommended best practices for [images](https://developers.google.com/search/docs/advanced/guidelines/google-images), [video](https://developers.google.com/search/docs/advanced/guidelines/video), and [structured data](https://developers.google.com/search/docs/guides/intro-structured-data).
* When using a content management system (for example, Wix or WordPress), make sure that it creates pages and links that search engines can crawl.
* To help Google fully understand your site’s contents, allow all site assets that would significantly affect page rendering to be crawled: for example, CSS and JavaScript files that affect the understanding of the pages. The Google indexing system renders a web page as the user would see it, including images, CSS, and JavaScript files. To see which page assets that Googlebot cannot crawl use the [URL Inspection tool](https://support.google.com/webmasters/answer/9012289); to debug directives in your robots.txt file, use the [robots.txt Tester](https://support.google.com/webmasters/answer/6062598) tool.
* Allow search bots to crawl your site without session IDs or URL parameters that track their path through the site. These techniques are useful for tracking individual user behavior, but the access pattern of bots is entirely different. Using these techniques may result in incomplete indexing of your site, as bots may not be able to eliminate URLs that look different but actually point to the same page.
* Make your site’s important content visible by default. Google is able to crawl HTML content hidden inside navigational elements such as tabs or expanding sections, however we consider this content less accessible to users, and believe that you should make your most important information visible in the default page view.
* Make a reasonable effort to ensure that advertisement links on your pages do not affect search engine rankings. For example, use [robots.txt](https://developers.google.com/search/docs/advanced/robots/intro), `rel="nofollow"`, or `rel="sponsored"` to prevent advertisement links from being followed by a crawler.

### Help visitors use your pages

* Try to use text instead of images to display important names, content, or links. If you must use images for textual content, use the `alt` attribute to include a few words of descriptive text.
* Ensure that all links go to live web pages. Use [valid HTML](https://validator.w3.org/).
* Optimize your page loading times. Fast sites make users happy and improve the overall quality of the web (especially for those users with slow Internet connections). Google recommends that you use tools like [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and [Webpagetest.org](https://www.webpagetest.org/) to test the performance of your page.
* Design your site for all device types and sizes, including desktops, tablets, and smartphones. Use the [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) to test how well your pages work on mobile devices, and get feedback on what needs to be fixed.
* Ensure that your site [appears correctly in different browsers](https://developers.google.com/search/docs/advanced/guidelines/browser-compatibility).
* If possible, [secure your site’s connections](https://developers.google.com/search/docs/advanced/security/https) with HTTPS. Encrypting interactions between the user and your website is a good practice for communication on the web.
* Ensure that your pages are useful for readers with visual impairments, for example, by testing usability with a screen-reader.

### Basic principles

* Make pages primarily for users, not for search engines.
* Don’t deceive your users.
* Avoid tricks intended to improve search engine rankings. A good rule of thumb is whether you’d feel comfortable explaining what you’ve done to a website that competes with you, or to a Google employee. Another useful test is to ask, “Does this help my users? Would I do this if search engines didn’t exist?”
* Think about what makes your website unique, valuable, or engaging. Make your website stand out from others in your field.

### Specific guidelines

**Avoid** the following techniques:

* [Automatically generated content](https://developers.google.com/search/docs/advanced/guidelines/auto-gen-content)
* Participating in [link schemes](https://developers.google.com/search/docs/advanced/guidelines/link-schemes)
* Creating pages with [little or no original content](https://support.google.com/webmasters/answer/66361)
* [Cloaking](https://developers.google.com/search/docs/advanced/guidelines/cloaking)
* [Sneaky redirects](https://developers.google.com/search/docs/advanced/guidelines/sneaky-redirects)
* [Hidden text or links](https://developers.google.com/search/docs/advanced/guidelines/hidden-text-links)
* [Doorway pages](https://developers.google.com/search/docs/advanced/guidelines/doorway-pages)
* [Scraped content](https://developers.google.com/search/docs/advanced/guidelines/scraped-content)
* Participating in [affiliate programs without adding sufficient value](https://developers.google.com/search/docs/advanced/guidelines/affiliate-programs)
* Loading pages with [irrelevant keywords](https://developers.google.com/search/docs/advanced/guidelines/irrelevant-keywords)
* Creating pages with [malicious behavior](https://developers.google.com/search/docs/advanced/guidelines/malicious-behavior), such as phishing or installing viruses, trojans, or other badware
* Abusing [structured data](https://developers.google.com/search/docs/guides/sd-policies) markup
* Sending [automated queries](https://developers.google.com/search/docs/advanced/guidelines/automated-queries) to Google

**Follow** good practices:

* Monitoring your site for [hacking](https://developers.google.com/search/docs/advanced/security/what-is-hacked) and removing hacked content as soon as it appears
* Preventing and removing [user-generated spam](https://developers.google.com/search/docs/advanced/guidelines/user-gen-spam) on your site

If your site violates one or more of these guidelines, then Google may take [manual action](https://support.google.com/webmasters/answer/9044175) against it. Once you have remedied the problem, you can [submit your site for reconsideration](https://support.google.com/webmasters/answer/35843).

- - -

### Website Launch Checklist:

### Website design checklist

It’s all too easy to miss (or break) something during the many back-and-forths, client feedback sessions, and other design iterations you go through. That’s why we created the design checklist below will help you go back and check for any design mistakes.

To start, be sure to check your:

* Spacing: Is spacing consistent across the site (i.e., did you stick to that 8px grid, or let a rogue 18px in there)? Do all elements have enough breathing room?
* Colors: Have you stuck to a consistent, harmonious color palette? Are all instances of the brand blue *actually* the brand blue?
* Shadows: If you used drop shadows, is the light source consistent for each and every one? Did you use the same blur, opacity, and spread values?
* Typography: Is your font stack logical and consistent (i.e., is there a reason that element is set in a sans)? Are your heading sizes consistent? Have you used proper (not faux) italics and bolding? Do all text links look right? Is all text both legible and readable?
* Imagery: Do any images look blurry, pixelated, or otherwise funky? Are any images broken or crazily heavy in terms of file size? Do all *non-decorative* images have alt tags?
* Logo: It’s (usually) just another image, but it’s so important it warrants its own step. Is it the latest version? Is it crisp (not blurry or pixelated)?

Once you’ve made these initial visual checks, you’ll want to ensure that your site’s appearance is consistent and functional on any screen.

### Cross-browser appearance

Different browsers may render your website in different ways, so it’s important to test your site in different browsers. Take a look at [W3’s browser stats](http://www.w3schools.com/browsers/browsers_stats.asp) to see where you should focus your testing. (Though if you’re working on a redesign, browser-usage stats will be more useful.)

During this process (and the next, in multi-device testing) you’ll want to make sure your layouts, typography, navigation, and other design elements are displaying properly.

The elements that tend to vary most across browsers, and therefore are most important to check, are:

* Fonts
* Colors/gradients
* Images
* Logo

### Cross-device appearance

![](https://cdn-images-1.medium.com/max/800/0*zXLmWvXkMI5Wv2LF.jpeg)

Make sure your site looks and performs beautifully on any device.

There have never been more web-capable devices around, and with that comes a staggering array of screen sizes. Done right, your site *should* perform well on any screen size, but be sure to double check. (You are a perfectionist after all, right?)

This is also where mobile navigation is crucial. Be sure to test out the user’s ability to navigate around the website on a touchscreen device, and make sure nothing gets lost in device transition.

In Webflow, we make it easy for you to test the most popular devices and preview your website on almost any size, streamlining the process of cross-device testing all in one place. Of course, nothing replaces real-world testing on a variety of devices as small details may differ on the real device.

### Image optimization

Images and graphics are an important element of many websites, so you’ll want to make sure they display properly, especially on all those ultra-high-definition devices (like Apple’s Retina screens) out there.

The rule of thumb is to upload your image at twice the size it’ll display on your site. In some cases, you can upload two images: an actual-size version for lower-res devices, and another that’s twice the size for high-res devices.

Why? Because the heavier the image, the slower your page will load, and the worse your user experience will be (which also negatively affects SEO, which we’ll cover later on).

In Webflow, we automatically scale, compress, and optimize images for every device. Learn more about our[ responsive images feature or check out our more detailed ](https://webflow.com/feature/responsive-images)article on[ image optimization](https://webflow.com/blog/how-to-boost-your-sites-performance).

### Website functionality testing

Design and functionality go hand in hand, but I like to isolate the two to make sure the website both *looks* the way it was designed to and that it *performs* as intended.

### Integration testing

This one is super important, and can range from a quick task to a giant one, depending on how many integrations you have. Typically, I’ll create a list of integrations *as I add them* so I don’t forget later on.

Some common integrations to test might be:

* Web forms (check that the forms work *and* that submitted information goes to the right place)
* Autoresponders
* Marketing emails (MailChimp, Constant Contact, HubSpot, drip campaigns, etc.)
* RSS feeds
* Ecommerce
* CRM
* CMS

### Link testing

This one can be a doozy, simply because most sites have dozens (if not hundreds) of links. More often than not, there’s a link or two that goes nowhere, and it’s important to find them before your end-users do.

Some of the most important links to check are:

* Top navigation links
* Footer links
* Social media links (Facebook, Twitter, etc.)
* Logo (typically links to the home page)

Rather than doing all this manually, I’d suggest trying a link crawler like the [W3C Link Checker](https://validator.w3.org/checklink), the Chrome plugin [Check My Links](https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf?hl=en-GB), or [Screaming Frog](http://www.screamingfrog.co.uk/seo-spider/) (which is excellent for SEO audits, too).

### Content editing

![](https://cdn-images-1.medium.com/max/800/0*HxnVQM9RoqyuTlLP.jpeg)

Give the king its due.

Content is king, and the testing process should be fit for one. Typically this involves making sure that all content has been updated and approved. I can’t tell you how many websites I’ve found that *still* have a l*orem ipsum* paragraph somewhere.

Now, if you practice [content-first design](https://webflow.com/blog/content-first-design), you should have final content already in place, so you can focus on more fine-toothed-comb review, like proofing for spelling and grammatical errors.

It’s also important to note here that it’s okay for content to be changed later on. Clients, team members, or you can always adjust text through a CMS. The main goal here is to ensure that your website content isn’t complete gibberish.

### Search engine optimization (SEO)

![](https://cdn-images-1.medium.com/max/800/0*Ukayn_ZyXfN-Wg-M.jpeg)

Analyzing and optimizing your website *after* publishing is a never-ending process. And you need to consider semantic site structure from the get-go. But that doesn’t mean you won’t benefit from an SEO review before you hit publish.

There are multiple things that can be done to optimize your website for search engines.

### 1. Use proper semantic structure

Web crawlers (like Google’s bots) read through your website to get an understanding of your content, so that search engines know to display your website when people search for it. To help them crawl your site, you need to use language they’ll understand.

Historically, this has meant using the following semantic tags:

* h1–h6 (heading tags)
* p (paragraph tags)
* ul/ol (unordered and ordered Lists)

You can also go above and beyond with some new [HTML5 semantic tags](https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide):

These tags are important because they let you identify the content that’s most relevant to users. In short: making it easy for search engines makes it easier for users to find you.

### 2. Meta SEO tags

Aside from on-page structure, you can also help web crawlers understand your site by titling and describing your pages as a whole. We outline a few tips [on website SEO on our blog](https://webflow.com/blog/website-seo), narrowed down to 2 main considerations below.

#### Meta title

Your page’s meta title translates to the linked text people will see on search engine result pages (SERPs). It also displays on the browser tab when people click through to your page. Some best practices include:

* Define the page’s central topic
* Keep it under 70 characters in length (including spaces)
* Use relevant keywords
* Put important keywords in the front of the title

#### Meta description

The meta description is a short sentence (or two) that describes what your website has to offer. It will (sometimes) show up below your meta title in search results.

Some best practices include:

* Include keywords that describe the page
* Don’t go over 160 characters
* Write your description for people, not robots. (Google doesn’t use descriptions in web rankings).

### 3. Open Graph settings

Social media has become a key element of SEO, so it’s crucial that you amplify this process by providing effective Open Graph information. Open Graph settings include three pieces of content: title, description, and an image.

The title and description follow the same rules as their SEO counterparts, but instead of showing up in search results, they appear as the default title and description on social media platforms when shared.

This is hugely beneficial because it lets you determine what the messaging (and image) will be when others share your website, helping you keep control of your brand.

- - -

## Core Progressive Web App checklist 

The Progressive Web App Checklist describes what makes an app installable and usable by all users, regardless of size or input type.

### Starts fast, stays fast

Performance plays a significant role in the success of any online experience, because high performing sites engage and retain users better than poorly performing ones. Sites should focus on optimizing for user-centric performance metrics.

#### Why [\#](https://web.dev/pwa-checklist/#why)

Speed is critical for getting users to *use* your app. In fact, as page load times go from one second to ten seconds, the probability of a user bouncing increases by 123%. Performance doesn't stop with the `load` event. Users should never wonder whether their interaction---for example, clicking a button---was registered or not. Scrolling and animation should feel smooth. Performance affects your entire experience, from how users perceive your application to how it actually performs.

While all applications have different needs, the performance audits in Lighthouse are based on the [RAIL user-centric performance model](https://developers.google.com/web/fundamentals/performance/rail), and scoring high on those audits will make it more likely that your users have an enjoyable experience. You can also use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) or the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report/) to get real-world performance data for your web app.

#### How [\#](https://web.dev/pwa-checklist/#how)

Follow our [guide on fast load times](https://web.dev/fast/) to learn how to make your PWA start fast and stay fast.

### Works in any browser

Users can use any browser they choose to access your web app before it's installed.

#### Why [\#](https://web.dev/pwa-checklist/#why-2)

Progressive Web Apps are web apps first, and that means they need to work across browsers, not just in one of them.

An effective way of doing this is by, in the words of Jeremy Keith in [Resilient Web Design](https://resilientwebdesign.com/), identifying the core functionality, making that functionality available using the simplest possible technology, and then enhancing the experience where possible. In many cases, this means starting with just HTML to create the core functionality, and enhancing the user experience with CSS and JavaScript to create a more engaging experience.

Take form submission for example. The simplest way to implement that is an HTML form that submits a `POST` request. After building that, you can enhance the experience with JavaScript to do form validation and submit the form via AJAX, improving the experience for users who can support it.

Consider that your users will experience your site across a spectrum of devices and browsers. You cannot simply target the top end of the spectrum. By using feature detection, you'll be able to deliver a usable experience for the widest range of potential users, including those using browsers and devices that may not exist today.

#### How [\#](https://web.dev/pwa-checklist/#how-2)

Jeremy Keith's [Resilient Web Design](https://resilientwebdesign.com/) is an excellent resource describing how to think about web design in this cross-browser, progressive methodology.

#### Additional reading [\#](https://web.dev/pwa-checklist/#additional-reading)

* A List Apart's [Understanding Progressive Enhancement](https://alistapart.com/article/understandingprogressiveenhancement/) is a good introduction to the topic.
* Smashing Magazine's [Progressive Enhancement: What It Is, And How To Use It?](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) gives a practical introduction and links to more advanced topics.
* MDN has an article titled [Implementing feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) that talks about how to detect a feature by directly querying it.

### Responsive to any screen size

Users can use your PWA on any screen size and all of the content is available at any viewport size.

#### Why [\#](https://web.dev/pwa-checklist/#why-3)

Devices come in a range of sizes, and users may use your application at a range of sizes, even on the same device. Therefore, it's critical to ensure your content not only fits within the viewport, but that all features and content for your site are usable at all viewport sizes.

The tasks users want to complete and the content they want to access do not change with viewport size. The content can be rearranged at different viewport sizes, and it should all be there, one way or another. In fact, as Luke Wroblewski states in his book Mobile First, starting small and going large instead of the other way around can actually improve a site's design:

> Mobile devices require software development teams to focus on only the most important data and actions in an application. There simply isn't room in a 320 by 480 pixel screen for extraneous, unnecessary elements. You have to prioritize.

#### How [\#](https://web.dev/pwa-checklist/#how-3)

There are many resources on responsive design, including the [original article by Ethan Marcotte](https://alistapart.com/article/responsive-web-design/), a [collection of important concepts](https://snugug.com/musings/principles-responsive-web-design/) related to it, as well as books and talks galore. To narrow this discussion down to the content aspects of responsive design, you can dig into [content-first design](https://uxdesign.cc/why-you-should-design-the-content-first-for-better-experiences-374f4ba1fe3c) and [content-out responsive layouts](https://alistapart.com/article/content-out-layout/). Finally, while it's focused on mobile, the lessons in [Seven Deadly Mobile Myths](https://www.forbes.com/sites/anthonykosner/2012/05/03/seven-deadly-mobile-myths-josh-clark-debunks-the-desktop-paradigm-and-more/#21ecac977bca) by Josh Clark are just as relevant to small-sized views of responsive sites as they are to mobile.

### Provides a custom offline page

When users are offline, keeping them in your PWA provides a more seamless experience than dropping back to the default browser offline page.

#### Why [\#](https://web.dev/pwa-checklist/#why-4)

Users expect installed apps to work regardless of their connection status. A platform-specific app never shows a blank page when it is offline, and a Progressive Web App should never show the browser default offline page. Providing a custom offline experience, both when a user navigates to a URL that hasn't been cached and when a user tries to use a feature that requires a connection, helps your web experience feel like it's part of the device it's running on.

#### How [\#](https://web.dev/pwa-checklist/#how-4)

During a service worker's `install` event, you can precache a custom offline page for later use. If a user goes offline, you can respond with the precached custom offline page. You can follow our custom [offline page sample](https://googlechrome.github.io/samples/service-worker/custom-offline-page/) to see an example of this in action and learn how to implement it yourself.

### Is installable

Users who install or add apps to their device tend to engage with those apps more.

#### Why [\#](https://web.dev/pwa-checklist/#why-5)

Installing a Progressive Web App allows it to look, feel, and behave like all other installed apps. It's launched from the same place users launch their other apps. It runs in its own app window, separate from the browser, and it appears in the task list, just like other apps.

Why would you want a user to install your PWA? The same reason you'd want a user to install your app from an app store. Users who install your apps are your most engaged audience, and have better engagement metrics than typical visitors, often at parity with app users on mobile devices. These metrics include more repeat visits, longer times on your site and higher conversion rates.

#### How [\#](https://web.dev/pwa-checklist/#how-5)

You can follow our [installable guide](https://web.dev/customize-install/) to learn how to make your PWA installable, how to test to see that it's installable, and try doing it yourself.

## Optimal Progressive Web App checklist [\#](https://web.dev/pwa-checklist/#optimal)

To create a truly great Progressive Web App, one that feels like a best-in-class app, you need more than just the core checklist. The optimal Progressive Web App checklist is about making your PWA feel like it's part of the device it's running on while taking advantage of what makes the web powerful.

### Provides an offline experience

Where connectivity isn't strictly required, your app works the same offline as it does online.

#### Why [\#](https://web.dev/pwa-checklist/#why-6)

In addition to providing a custom offline page, users expect Progressive Web Apps to be usable offline. For example, travel and airline apps should have trip details and boarding passes easily available when offline. Music, video, and podcasting apps should allow for offline playback. Social and news apps should cache recent content so users can read it when offline. Users also expect to stay authenticated when offline, so design for offline authentication. An offline PWA provides a true app-like experience for users.

#### How [\#](https://web.dev/pwa-checklist/#how-6)

After determining which features your users expect to work offline, you'll need to make your content available and adaptable to offline contexts. In addition, you can use [IndexedDB](https://developers.google.com/web/ilt/pwa/working-with-indexeddb), an in-browser NoSQL storage system, to store and retrieve data, and [background sync](https://developers.google.com/web/updates/2015/12/background-sync) to allow users to take actions while offline and defer server communications until the user has a stable connection again. You can also use service workers to store other kinds of content, such as images, video files, and audio files for offline use, as well as use them to implement [safe, long-lived sessions](https://developers.google.com/web/updates/2016/06/2-cookie-handoff) to keep users authenticated. From a user experience perspective, you can use [skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a) that give users a perception of speed and content while loading that can then fall back to cached content or an offline indicator as needed.

### Is fully accessible

All user interactions pass [WCAG 2.0](https://www.w3.org/TR/WCAG20/) accessibility requirements.

#### Why [\#](https://web.dev/pwa-checklist/#why-7)

Most people at some point in their life will want to take advantage of your PWA in a way that is covered under the [WCAG 2.0](https://www.w3.org/TR/WCAG20/) accessibility requirements. Humans' ability to interact with and understand your PWA exist on a spectrum and needs can be temporary or permanent. By making your PWA accessible, you ensure it's usable for everyone.

#### How [\#](https://web.dev/pwa-checklist/#how-7)

W3C's [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) is a good place to start. A majority of accessibility testing must be done manually. Tools like the [Accessibility](https://web.dev/lighthouse-accessibility/) audits in Lighthouse, [axe](https://github.com/dequelabs/axe-core), and [Accessibility Insights](https://accessibilityinsights.io/) can help you automate some accessibility testing. It's also important to use semantically correct elements instead of recreating those elements on your own, for instance, `a` and `button` elements. This ensures that when you do need to build more advanced functionality, accessible expectations are met (such as when to use arrows vs. tabs). [A11Y Nutrition Cards](https://accessibilityinsights.io/) has excellent advice on this for some common components.

### Can be discovered through search

Your PWA can be easily [discovered through search](https://web.dev/discoverable/).

#### Why [\#](https://web.dev/pwa-checklist/#why-8)

One of the biggest advantages of the web is the ability to discover sites and apps through search. In fact, [more than half](https://www.brightedge.com/resources/research-reports/channel_share) of all website traffic comes from organic search. Making sure that canonical URLs exist for content and that search engines can index your site is critical for users to be able to find your PWA. This is especially true when adopting client-side rendering.

#### How [\#](https://web.dev/pwa-checklist/#how-8)

Start by ensuring that each URL has a unique, descriptive title and meta description. Then you can use the [Google Search Console](https://search.google.com/search-console/about) and the [Search Engine Optimization audits](https://web.dev/lighthouse-seo/) in Lighthouse to help you debug and fix discoverability issues with your PWA. You can also use [Bing](https://www.bing.com/toolbox/webmaster)'s or [Yandex](https://webmaster.yandex.com/welcome/)'s webmaster tools, and consider including [structured data](https://goo.gle/search-gallery) via schemas from [Schema.org](https://schema.org/) in your PWA.

### Works with any input type

Your PWA is equally usable with a mouse, a keyboard, a stylus, or touch.

#### Why [\#](https://web.dev/pwa-checklist/#why-9)

Devices offer a variety of input methods, and users should be able to seamlessly switch between them while using your application. Just as important, input methods should not depend on screen size, meaning that large viewports need to support touch and small viewports need to support keyboards and mice. To the best of your ability, ensure that your application and all of its features supports usage of any input method your user may choose to use. Where appropriate, you should also enhance experiences to allow for input-specific controls as well (such as pull-to-refresh).

#### How [\#](https://web.dev/pwa-checklist/#how-9)

The [Pointer Events API](https://developers.google.com/web/updates/2016/10/pointer-events) provides a unified interface for working with various input options, and is especially good for adding stylus support. For supporting both touch and keyboard, ensure that you're using the correct semantic elements (anchors, buttons, form controls, etc.) and not rebuilding these with non-semantic HTML (which is good for accessibility). When including interactions that activate on hover, ensure they can activate on click or tap, too.

### Provides context for permission requests

When asking permission to use powerful APIs, provide context and ask only when the API is needed.

#### Why [\#](https://web.dev/pwa-checklist/#why-10)

APIs that trigger a permission prompt, like notifications, geolocation, and credentials, are intentionally designed to be disruptive to a user because they tend to be related to powerful functionality that requires opt-in. Triggering these prompts without additional context, like on page load, makes users less likely to accept those permissions and more likely to distrust them in the future. Instead, only trigger those prompts after providing an in-context rationale to the user for why you need that permission.

#### How [\#](https://web.dev/pwa-checklist/#how-10)

The [Permission UX](https://developers.google.com/web/fundamentals/push-notifications/permission-ux) article and UX Planet's [The Right Ways to Ask Users for Permissions](https://uxplanet.org/mobile-ux-design-the-right-ways-to-ask-users-for-permissions-6cdd9ab25c27) are good resources to understand how to design permission prompts that, while focused on mobile, apply to all PWAs.

### Follows best practices for healthy code

Keeping your codebase healthy makes it easier to meet your goals and deliver new features.

#### Why [\#](https://web.dev/pwa-checklist/#why-11)

There's a lot that goes into building a modern web application. Keeping your application up-to-date and your codebase healthy makes it easier for you to deliver new features that meet the other goals laid out in this checklist.

#### How [\#](https://web.dev/pwa-checklist/#how-11)

There are a number of high-priority checks to ensure a healthy codebase: avoiding using libraries with known vulnerabilities, ensuring you're not using deprecated APIs, removing web anti-patterns from your codebase (like using `document.write()` or having non-passive scroll event listeners), and even coding defensively to ensure your PWA doesn't break if analytics or other third party libraries fail to load. Consider requiring static code analysis, like linting, as well as automated testing, in multiple browsers and release channels. These techniques can help catch errors before they make it into production.

[Progressive Web Apps](https://web.dev/tags/progressive-web-apps/)

Last updated: Feb 24, 2020 [Improve article](https://github.com/GoogleChrome/web.dev/blob/master/src/site/content/en/progressive-web-apps/pwa-checklist/index.md)

## Give feedback

All fields optional

Yes

No

Was this page helpful?

Did this page help you complete your goal(s)?

Congrats on finding this field, I'd recommend you not filling it out though... 

SUBMIT

[Return to all articles](https://web.dev/progressive-web-apps)

* ### Contribute

  * [File a bug](https://github.com/GoogleChrome/web.dev/issues/new?assignees=&labels=bug&template=bug_report.md&title=)
  * [View source](https://github.com/googlechrome/web.dev)
* ### Related content

  * [Chrome updates](https://blog.chromium.org/)
  * [Web Fundamentals](https://developers.google.com/web/)
  * [Case studies](https://developers.google.com/web/showcase/)
  * [DevWeb Content Firehose](https://devwebfeed.appspot.com/)
  * [Podcasts](https://web.dev/podcasts/)
  * [Shows](https://web.dev/shows/)
* ### Connect

  * [Twitter](https://www.twitter.com/ChromiumDev)
  * [YouTube](https://www.youtube.com/user/ChromeDevelopers)

[![Google Developers](https://camo.githubusercontent.com/c63ff4138f52ebd98ea0e3f69a276f3d047f6a5190735a2164ad2ac995f2d5c8/68747470733a2f2f7765622e6465762f696d616765732f6c6f636b75702d636f6c6f722e706e67)](https://developers.google.com/)

* [Chrome](https://developer.chrome.com/)
* [Firebase](https://firebase.google.com/)
* [Google Cloud Platform](https://cloud.google.com/)
* [All products](https://developers.google.com/products)

Choose language                                   ENGLISH (en)                             

* [Terms & Privacy](https://policies.google.com/)
* [Community Guidelines](https://web.dev/community-guidelines/)

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/terms/site-policies).

[view raw](https://gist.github.com/bgoonz/b9a8c05bbaaab4b7d25e0db5aff231ef/raw/ddfd196276b1ee217fbe49027301882a487c4fb6/ProgressiveWebAppChecklist.md)[ProgressiveWebAppChecklist.md ](https://gist.github.com/bgoonz/b9a8c05bbaaab4b7d25e0db5aff231ef#file-progressivewebappchecklist-md)hosted with ❤ by [GitHub](https://github.com/)

- - -

### Tool List:

### Update:

![](https://cdn-images-1.medium.com/max/800/0*8luiRPwHqkyfqJfb)

[Can I UseProvides browser support information of front-end web technologies. Enter a search term to find out which browsers support it. *caniuse.com*](https://caniuse.com/)

![](https://cdn-images-1.medium.com/max/800/0*t50QcwzBkwFuth4o)

[Online HTML EditorFree online HTML editor with WYSIWYG and source composer and instant preview and many useful built-in features *html-online.com*](https://html-online.com/editor/)

![](https://cdn-images-1.medium.com/max/800/0*SnFMpz919DboGmr-)

[Web CleanerOnline HTML, CSS and JavaScript cleaner and code editors with syntax highlighting and customizable cleaning features. *html-cleaner.com*](https://html-cleaner.com/)

![](https://cdn-images-1.medium.com/max/800/0*2KRsAowQaufNBiSs)

[Word HTMLFree online Word and other rich text editor and HTML converter. Copy-paste your document in the editor and switch to HTML view to get the code. *wordhtml.com*](https://wordhtml.com/)

![](https://cdn-images-1.medium.com/max/800/0*A_wBLhhToeFlXuLg)

[HTML Cheat SheetHTML, CSS, JavaScript and other web technology cheat sheet with interactive user interface. Grab the code you’re looking for quickly. *htmlcheatsheet.com*](https://htmlcheatsheet.com/)

![](https://cdn-images-1.medium.com/max/800/0*393SncqM14lxdAYX)

[Stack OverflowHuge programmer community where you usually don’t have to ask for help because probably someone has already answered the same question. *stackoverflow.com*](https://stackoverflow.com/)

![](https://cdn-images-1.medium.com/max/800/0*veTjmob-9SlcsbfY)

[w3schoolsThe place to learn web technologies. There’s a big chance that this site gives the first search result when you’re looking for a HTML term. *w3schools.com*](https://www.w3schools.com/)

![](https://cdn-images-1.medium.com/max/800/0*mcOcJb9_CRucZ8Hi)

[Mozzilla Developer NetworkAn evolving learning platform for web technologies. Providing tutorials, developer tools and the information to easily build projects. *developer.mozilla.org*](https://developer.mozilla.org/)

![](https://cdn-images-1.medium.com/max/800/0*1A0zYmYhuNwVv-JD)

[Markup ValidatorEnter the link of a webpage and the online tool will highlight the errors and warnings to fix in the source code. *validator.w3.org*](https://validator.w3.org/)

![](https://cdn-images-1.medium.com/max/800/0*qkBfaTWhlKlbtmsf)

[GitHubCollaborate with other developers. Fork, send pull requests and manage all your public and private git repositories. *github.com*](https://github.com/)

![](https://cdn-images-1.medium.com/max/800/0*xuAlgMUU6yPrTp-y)

[BitbucketWeb-based hosting service for development projects with version control system that makes it easy for you to collaborate with your team. *bitbucket.org*](https://bitbucket.org/)

![](https://cdn-images-1.medium.com/max/800/0*XiFbqTuL0zs0ZeWn)

[DribbleTell others what are you working on! Dribbble is a community of designers sharing screenshots of their work, process, and projects. *dribbble.com*](https://dribbble.com/)

![](https://cdn-images-1.medium.com/max/800/0*Z7rf2N2ZanFTyC24)

[Built WithEnter a domain name to find out who is hosting it, what CMS and framework is used and many other insights. *builtwith.com*](https://builtwith.com/)

![](https://cdn-images-1.medium.com/max/800/0*JAKvGWN_Sd05kCwa)

[HTML TidyAn online tool for checking and cleaning up HTML source files. Useful for finding and correcting errors in deeply nested HTML. *htmltidy.net*](https://htmltidy.net/)

![](https://cdn-images-1.medium.com/max/800/0*NobceO9h1WGoiAh5)

[Div TableCreate or convert tables to responsive div tags with a few clicks. Use the provided CSS code to render the divs as table cells. *divtable.com*](https://divtable.com/)

![](https://cdn-images-1.medium.com/max/800/0*NFqBo-YVX2D2dtFh)

[BootstrapThe most popular free and open-source HTML, CSS, and JS framework makes front-end development easier and faster. *getbootstrap.com*](https://getbootstrap.com/)

![](https://cdn-images-1.medium.com/max/800/0*rHGXn1mVlS3XJNCV)

[HTMLGProfessional HTML editor. The free version is enough to do magic with your markup. Tag and attribute manager filter etc. *htmlg.com*](https://htmlg.com/html-editor/)

![](https://cdn-images-1.medium.com/max/800/0*zzrT9kYMdxxAHwb8)

[Facebook DevelopersDeveloper tools for login, share widget, analytics, monetization, messenger platform and more from the biggest social media site. *developers.facebook.com*](https://developers.facebook.com/)

![](https://cdn-images-1.medium.com/max/800/0*CmpW2L4pVbESIh5J)

[Google Mobile-Friendly TestCheck if Google considers your web page mobile-friendly and adjust the deficiencies if there is any. *google.com/mobile-friendly*](https://search.google.com/test/mobile-friendly)

![](https://cdn-images-1.medium.com/max/800/0*mKshXXHbzoStzvjr)

[Webpage Speed TestAnalize the loading speed of a website from many available servers. The website creates a detailed analysis with screenshot and waterfall view. *webpagetest.org*](https://www.webpagetest.org/)

![](https://cdn-images-1.medium.com/max/800/0*sYIvpZGnkNhf-_XC)

[NetRendererRenders quickly a webpage with the selected version of the old Internet Explorer web browser. NetRenderer goes back to IE version 5.5. *netrenderer.com*](https://netrenderer.com/)

![](https://cdn-images-1.medium.com/max/800/0*unIWXerRzCuxrzng)

[Browser ShotsCreate the screenshot of a webpage with many available browsers in various operating systems. *browsershots.org*](http://browsershots.org/)

![](https://cdn-images-1.medium.com/max/800/0*bX3AIaYOSzadB8t6)

[PageSpeed InsightsThis tool by Google analyzes the submitted link from mobile and desktop to suggest you what to consider optimizing. *developers.google.com*](https://developers.google.com/speed/pagespeed/insights/)

![](https://cdn-images-1.medium.com/max/800/0*v1hxqLrwUWL2dbBX)

[Google FontsAn interactive directory of over 800 free hosted web fonts. It allows to optimize loading speed by including only what you need. *fonts.google.com*](https://fonts.google.com/)

![](https://cdn-images-1.medium.com/max/800/0*n4slofmCAW3PUOTn)

[Font AwesomeThe most popular icon set based on CSS and LESS. The vector icons can be customized as text — size, color, drop shadow *fontawesome.io*](https://fontawesome.com/)

![](https://cdn-images-1.medium.com/max/800/0*_k2GQpr-IXMCfCbD)

[RGB Color CodesSearch and save color codes. Search by name or mix the RGB, HSV or CMYK values. Use the generated HTML/CSS codes. *rgbcolorcode.com*](https://rgbcolorcode.com/)

![](https://cdn-images-1.medium.com/max/800/0*IH19Lh2SggZ5fNd_)

[FreePicBrowse the large directory of free photos, vector arts, icons, illustrations, PSD files at FreePic. *freepik.com*](https://www.freepik.com/)

![](https://cdn-images-1.medium.com/max/800/0*g9YcUHOEU2oybdxl)

[Placehold.it/Image placeholders with customizable size. Just add the image resolution after the domain name, for example placehold.it/400x250 *placehold.it*](https://placehold.it/)

![](https://cdn-images-1.medium.com/max/800/0*PSn8d5FL7_ngjJtU)

[XML SitemapsGenerate XML sitemaps and URL list of a website. The crawl limit is 500 pages. *xml-sitemaps.com*](https://www.xml-sitemaps.com/)

![](https://cdn-images-1.medium.com/max/800/0*673487vh2n0o7Ub6)

[Broken Link CheckerCrawl a domain for dead links. Locates both internal and external links pointing to 404 error pages. *brokenlinkcheck.com*](http://www.brokenlinkcheck.com/)

![](https://cdn-images-1.medium.com/max/800/0*NrZDjNLAdMcfK8Hy)

[CodepenRegister to create, save and share HTML-CSS-JS code snippets and run them online. *codepen.io*](https://codepen.io/)

![](https://cdn-images-1.medium.com/max/800/0*1EEf11CeSLOOAAyu)

[JSFiddleSimilar to Codepen but this one doesn’t require registration. Test HTML-CSS-JS code online and save your small project in a shareable URL. *jsfiddle.net*](https://jsfiddle.net/)

![](https://cdn-images-1.medium.com/max/800/0*2Aq8QOCznCo11ypk)

[WordPress.OrgMore than 10 million websites use this free and open-source content management system based on PHP-MySql. *wordpress.org*](https://wordpress.org/)

![](https://cdn-images-1.medium.com/max/800/0*CJX2RwykNQ9O0RbL)

[Blog StarterA free guide that shows beginners how to start a blog using WordPress.org *theblogstarter.com*](https://www.theblogstarter.com/)

![](https://cdn-images-1.medium.com/max/800/0*QSwvNaVB8SOgyDqp)

[Website SetupA friendly guide about how to make a website, discussing the hosting, the CMS, domain name and promotion. *websitesetup.org*](https://websitesetup.org/)

![](https://cdn-images-1.medium.com/max/800/0*m7_ugygIICt4VLea)

[Expired DomainsHunt for expired domain names or get inspiration for your next project. It’s worth registering for an account on this free website. *expireddomains.net*](https://www.expireddomains.net/)

![](https://cdn-images-1.medium.com/max/800/0*PNRVuj1GX-jgppng)

[Bad HTMLThe ugliest website on the internet, collecting bad UI/UX practices. A deterrent example about how not to build a website. *badhtml.com*](https://badhtml.com/)

![](https://cdn-images-1.medium.com/max/800/0*66ncH3hioTVPIr2l)

[1st Web DesignerFollow this web design blog to find out what’s new in freelance, marketing, UX etc. categories. *1stwebdesigner.com*](https://1stwebdesigner.com/)

- - -

[**Hire Freelance Developers from the Top 3% - Toptal®**\
*Toptal is a marketplace for top developers, engineers, programmers, coders, architects, and consultants. Top companies…*toptal.com](http://toptal.com/developers "http\://toptal.com/developers")[](http://toptal.com/developers)

[**Web Developer Checklist**\
*Analyses any web page for violations of best practices*chrome.google.com](https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US "https\://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US")[](https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp?hl=en-US)

[**Web Developer Checklist - Get this Extension for 🦊 Firefox (en-US)**\
*Download Web Developer Checklist for Firefox. Analyzes any web page for violations of best practices.*addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/webdeveloperchecklist/ "https\://addons.mozilla.org/en-US/firefox/addon/webdeveloperchecklist/")[](https://addons.mozilla.org/en-US/firefox/addon/webdeveloperchecklist/)

[**Link Checker**\
*Check links and anchors in Web pages or full Web sites This Link Checker looks for issues in links, anchors and…*validator.w3.org](https://validator.w3.org/checklink "https\://validator.w3.org/checklink")[](https://validator.w3.org/checklink)

[**Capitalization - Wikipedia**\
*Capitalization ( American English) or capitalisation ( British English) is writing a word with its first letter as a…*en.wikipedia.org](https://en.wikipedia.org/wiki/Capitalization "https\://en.wikipedia.org/wiki/Capitalization")[](https://en.wikipedia.org/wiki/Capitalization)

[**Writing style - Wikipedia**\
*In literature, writing style is the manner of expressing thought in language characteristic of an individual, period…*en.wikipedia.org](https://en.wikipedia.org/wiki/Writing_style "https\://en.wikipedia.org/wiki/Writing_style")[](https://en.wikipedia.org/wiki/Writing_style)

[**American and British English spelling differences - Wikipedia**\
*Despite the various English dialects spoken from country to country and within different regions of the same country…*en.wikipedia.org](https://en.wikipedia.org/wiki/American_and_British_English_spelling_differences "https\://en.wikipedia.org/wiki/American_and_British_English_spelling_differences")[](https://en.wikipedia.org/wiki/American_and_British_English_spelling_differences)

[**Check Browser Compatibility, Cross Platform Browser Test - Browsershots**\
*Browsershots makes screenshots of your web design in different operating systems and browsers. It is a free open-source…*browsershots.org](http://browsershots.org/ "http\://browsershots.org/")[](http://browsershots.org/)

[**Online cross-browser testing**\
*Browserling did a custom cross-browser testing solution for UK's National Health Service. Our application needs to…*browserling.com](https://browserling.com/ "https\://browserling.com/")[](https://browserling.com/)

[**Most Reliable App & Cross Browser Testing Platform | BrowserStack**\
*Just played around with BrowserStack: Quite cool, instant access to a browser in a VM with dev tools. Big thanks to…*www.browserstack.com](https://www.browserstack.com/ "https\://www.browserstack.com/")[](https://www.browserstack.com/)

[**Most Powerful Cross Browser Testing Tool Online | LambdaTest**\
*Perform Live Interactive and Automated Cross Browser Testing on 2000+ Real Browsers and Operating Systems Online Run…*www.lambdatest.com](https://www.lambdatest.com/ "https\://www.lambdatest.com/")[](https://www.lambdatest.com/)

[**Cross Browser Testing Tool: 2050+ Real Browsers & Devices**\
*We have estimated that by transitioning to automated front-end visual testing and by having easy access to so many…*crossbrowsertesting.com](https://crossbrowsertesting.com/ "https\://crossbrowsertesting.com/")[](https://crossbrowsertesting.com/)

[**www. is deprecated.**\
*Stay in touch! Dec 21, 2012 No-WWW now hasa a social media presence! Check us out on Twitter at @www_deprecated . We…*no-www.org](http://no-www.org/ "http\://no-www.org/")[](http://no-www.org/)

[**www. is not deprecated**\
*Ever since the first traditional media ads began to appear with Web site addresses in them 25 years ago, people have…*www.yes-www.org](https://www.yes-www.org/ "https\://www.yes-www.org/")[](https://www.yes-www.org/)

[**URL rewrite and the www subdomain**\
*What's the address of your website? www.domain.com or domain.com? There are two camps on the subject of the www…*madskristensen.net](http://madskristensen.net/post/url-rewrite-and-the-www-subdomain "http\://madskristensen.net/post/url-rewrite-and-the-www-subdomain")[](http://madskristensen.net/post/url-rewrite-and-the-www-subdomain)

[**Mobile-Friendly Test - Google Search Console**\
*Is your web page mobile-friendly? Test how easily a visitor can use your page on a mobile device. Just enter a page URL…*www.google.com](https://www.google.com/webmasters/tools/mobile-friendly/ "https\://www.google.com/webmasters/tools/mobile-friendly/")[](https://www.google.com/webmasters/tools/mobile-friendly/)

[**Quick Tip: Don't Forget the Viewport Meta Tag**\
*I remember my maiden voyage into responsive web design; I'd used a classic grid, wrestled with a flexible layout, and…*webdesign.tutsplus.com](https://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972 "https\://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972")[](https://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972)

[**Input Type : Email,URL,Phone**\
*Email, Phone number and Website url are the three most commonly used contact detail which has its unique input…*html5tutorial.info](https://html5tutorial.info/html5-contact.php "https\://html5tutorial.info/html5-contact.php")[](https://html5tutorial.info/html5-contact.php)

[**Web Forms - Dive Into HTML5**\
*Edit description*diveintohtml5.info](http://diveintohtml5.info/forms.html "http\://diveintohtml5.info/forms.html")[](http://diveintohtml5.info/forms.html)

[**Responsive Testing On 2000+ Real Devices & Browsers | BrowserStack**\
*Frequently Asked Questions Why is responsive testing critical for your website? Responsive design enables a website to…*www.browserstack.com](https://www.browserstack.com/responsive "https\://www.browserstack.com/responsive")[](https://www.browserstack.com/responsive)

[**UptimeRobot | Free Website Monitoring**\
*Get up to 50 website, port or heartbeat monitors for free. When something happens, we'll notify you via email, SMS…*www.uptimerobot.com](https://www.uptimerobot.com/ "https\://www.uptimerobot.com/")[](https://www.uptimerobot.com/)

[**StatusCake: Website Monitoring with Uptime Monitoring solution**\
*Website Monitoring solution that drives revenue & keeps you online. Track your uptime, page speed, domain, server, &…*www.statuscake.com](https://www.statuscake.com/ "https\://www.statuscake.com/")[](https://www.statuscake.com/)

[**Analytics Tools & Solutions for Your Business - Google Analytics**\
*Easily access data from other Google solutions while working in Analytics, for a seamless workflow that saves you time…*www.google.com](https://www.google.com/analytics "https\://www.google.com/analytics")[](https://www.google.com/analytics)

[**Statcounter - Web Analytics Made Easy**\
*Watch in real time as visitors navigate through your website. Are they flowing through your site the way you expect…*statcounter.com](https://statcounter.com/ "https\://statcounter.com/")[](https://statcounter.com/)

[**Real Time Web Analytics**\
*Clicky Web Analytics is simply the best way to monitor, analyze, and react to your blog or web site's traffic in real…*clicky.com](https://clicky.com/ "https\://clicky.com/")[](https://clicky.com/)

[**Matomo - The Google Analytics alternative that protects your data**\
*Matomo's the Google Analytics alternative that protects your data and your customer's privacy. A powerful web analytics…*matomo.org](https://matomo.org/ "https\://matomo.org/")[](https://matomo.org/)

[**PageSpeed Insights**\
*Have specific, answerable questions about using PageSpeed Insights? Ask your question on Stack Overflow. For general…*developers.google.com](https://developers.google.com/speed/pagespeed/insights/ "https\://developers.google.com/speed/pagespeed/insights/")[](https://developers.google.com/speed/pagespeed/insights/)

[**REDbot**\
*Lint for your HTTP resources*redbot.org](https://redbot.org/ "https\://redbot.org/")[](https://redbot.org/)

[**imgix Page Weight Tool * Learn how to improve your site or app's speed.**\
*imgix Page Weight Tool measures the resources on your site and then recommends how to improve your site's load time.*pageweight.imgix.com](https://pageweight.imgix.com/ "https\://pageweight.imgix.com/")[](https://pageweight.imgix.com/)

[**TinyPNG - Compress PNG images while preserving transparency**\
*Excellent question! Let me give you a side by side comparison. Below are two photos of my cousin. The left image is…*tinypng.com](https://tinypng.com/ "https\://tinypng.com/")[](https://tinypng.com/)

[**Kraken.io Image Optimizer**\
*Kraken.io is a robust, ultra-fast image optimizer. Thanks to its vast array of optimization algorithms Kraken.io is a…*kraken.io](https://kraken.io/ "https\://kraken.io/")[](https://kraken.io/)

[**Squoosh**\
*Compress and compare images with different codecs, right in your browser*squoosh.app](https://squoosh.app/ "https\://squoosh.app/")[](https://squoosh.app/)

[**PNGGauntlet - PNG Compression Software**\
*PNGGauntlet 3.1.2 is a minor update that resolves some bugs, and adds a much-requested option. First, the bugfixes …*pnggauntlet.com](http://pnggauntlet.com/ "http\://pnggauntlet.com/")[](http://pnggauntlet.com/)

[**ImageOptim - better Save for Web**\
*Reduces image file sizes - so they take up less disk space and down­load faster - by applying advanced compression…*imageoptim.com](https://imageoptim.com/ "https\://imageoptim.com/")[](https://imageoptim.com/)

[**Can I use... Support tables for HTML5, CSS3, etc**\
*Test a feature Our partnership with BrowserStack now lets you test your website for compatibility across 2,000+ real…*caniuse.com](https://caniuse.com/ "https\://caniuse.com/")[](https://caniuse.com/)

[**Modernizr: the feature detection library for HTML5/CSS3**\
*All web developers come up against differences between browsers and devices. That's largely due to different feature…*modernizr.com](https://modernizr.com/ "https\://modernizr.com/")[](https://modernizr.com/)

[**W3C I18n Checker**\
*This checker performs various tests on a Web Page to determine its level of internationalisation-friendliness. It also…*validator.w3.org](https://validator.w3.org/i18n-checker/ "https\://validator.w3.org/i18n-checker/")[](https://validator.w3.org/i18n-checker/)

[**A More Useful 404**\
*Encountering 404 errors is not new. Often, developers provide custom 404 pages to make the experience a little less…*www.alistapart.com](https://www.alistapart.com/articles/amoreuseful404/ "https\://www.alistapart.com/articles/amoreuseful404/")[](https://www.alistapart.com/articles/amoreuseful404/)

[**Favicon Generator for perfect icons on all browsers**\
*The ultimate favicon generator. Design your icons platform per platform and make them look great everywhere. Including…*realfavicongenerator.net](https://realfavicongenerator.net/ "https\://realfavicongenerator.net/")[](https://realfavicongenerator.net/)

[**audreyfeldroy/favicon-cheat-sheet**\
*A painfully obsessive cheat sheet to favicon sizes/types. Compiled from: For the main favicon itself, it's best for…*github.com](https://github.com/audreyr/favicon-cheat-sheet "https\://github.com/audreyr/favicon-cheat-sheet")[](https://github.com/audreyr/favicon-cheat-sheet)

\[\*\*URL Structure [2021 SEO]*Keeping URLs as simple, relevant, compelling, and accurate as possible is key to getting both your users and search…*moz.com](https://moz.com/learn/seo/url "https://moz.com/learn/seo/url")[](https://moz.com/learn/seo/url)

[**URL Rewrite Module Configuration Reference**\
*by Ruslan Yakushev This article provides an overview of the URL Rewrite Module and explains the configuration concepts…*docs.microsoft.com](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference "https\://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference")[](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference)

[**mod_rewrite - Apache HTTP Server Version 2.4**\
*The mod_rewrite module uses a rule-based rewriting engine, based on a PCRE regular-expression parser, to rewrite…*httpd.apache.org](https://httpd.apache.org/docs/current/mod/mod_rewrite.html "https\://httpd.apache.org/docs/current/mod/mod_rewrite.html")[](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)

[**How to Create NGINX Rewrite Rules | NGINX**\
*In this blog post, we discuss how to create NGINX rewrite rules (the same methods work for both NGINX Plus and the open…*www.nginx.com](https://www.nginx.com/blog/creating-nginx-rewrite-rules/ "https\://www.nginx.com/blog/creating-nginx-rewrite-rules/")[](https://www.nginx.com/blog/creating-nginx-rewrite-rules/)

[**How To Set Up A Print Style Sheet - Smashing Magazine**\
*In a time when everyone seems to have a tablet, which makes it possible to consume everything digitally, and the only…*www.smashingmagazine.com](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/ "https\://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/")[](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/)

[**Programmable Search Engine by Google**\
*Decide if you want users to search only your website, or include other sites on the web. Match the design to your site…*www.google.com](https://www.google.com/cse/ "https\://www.google.com/cse/")[](https://www.google.com/cse/)

[**dewitt/opensearch**\
*OpenSearch is a collection of simple formats for the sharing of search results. The most recent version of the…*github.com](https://github.com/dewitt/opensearch "https\://github.com/dewitt/opensearch")[](https://github.com/dewitt/opensearch)

[**Configuring Web Applications**\
*A web application is designed to look and behave in a way similar to a native application-for example, it is scaled to…*developer.apple.com](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html "https\://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html")[](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

[**Windows 8 integration (Windows)**\
*This section details the ways in which web developers can take advantage of the tight integration of Windows 8 and…*docs.microsoft.com](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh781490%28v=vs.85%29 "https\://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh781490(v=vs.85)")[](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh781490%28v=vs.85%29)

[**Schema.org - Schema.org**\
*Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for…*schema.org](https://schema.org/ "https\://schema.org/")[](https://schema.org/)

[**Schema Markup Generator & Structured Data Testing Tool (inc JSON-LD)**\
*By adding the JSON-LD this tool generates to your pages you help Google better understand their purpose.Make it easy…*seoscout.com](https://seoscout.com/tools/schema-generator "https\://seoscout.com/tools/schema-generator")[](https://seoscout.com/tools/schema-generator)

[**Structured Data Testing Tool**\
*Edit description*search.google.com](https://search.google.com/structured-data/testing-tool/ "https\://search.google.com/structured-data/testing-tool/")[](https://search.google.com/structured-data/testing-tool/)

[**Sharing Debugger - Facebook for Developers**\
*Sharing Debugger lets you preview how your content will look when it's shared to Facebook and debug any issues with…*developers.facebook.com](https://developers.facebook.com/tools/debug/ "https\://developers.facebook.com/tools/debug/")[](https://developers.facebook.com/tools/debug/)

[**JavaScript is not available.**\
*Edit description*cards-dev.twitter.com](https://cards-dev.twitter.com/validator "https\://cards-dev.twitter.com/validator")[](https://cards-dev.twitter.com/validator)

[**Rich Results Test - Google Search Console**\
*Does your page support rich results? What are rich results? Rich results are experiences on Google surfaces, such as…*search.google.com](https://search.google.com/test/rich-results "https\://search.google.com/test/rich-results")[](https://search.google.com/test/rich-results)

[**Getting Started - schema.org**\
*Most webmasters are familiar with HTML tags on their pages. Usually, HTML tags tell the browser how to display the…*schema.org](https://schema.org/docs/gs.html "https\://schema.org/docs/gs.html")[](https://schema.org/docs/gs.html)

[**Robots.txt Tutorial**\
*Use our Robots.txt generator to create a robots.txt file. Use our Robots.txt analyzer to analyze your robots.txt file…*tools.seobook.com](http://tools.seobook.com/robots-txt/ "http\://tools.seobook.com/robots-txt/")[](http://tools.seobook.com/robots-txt/)

[**Robots Generator | Generate robots.txt Files Instantly - RobotsGenerator.com**\
*Select folders and/or files If there are areas of your page you do not wish made public, simply indicate the…*www.robotsgenerator.com](http://www.robotsgenerator.com/ "http\://www.robotsgenerator.com/")[](http://www.robotsgenerator.com/)

[**Create your Google Sitemap Online - XML Sitemaps Generator**\
*Free Online Google Sitemap Generator. XML-sitemaps.com provides free online sitemap generator service, creating an XML…*www.xml-sitemaps.com](https://www.xml-sitemaps.com/ "https\://www.xml-sitemaps.com/")[](https://www.xml-sitemaps.com/)

[**Markup Validation Service**\
*W3C's easy-to-use markup validation service, based on SGML and XML parsers.*validator.w3.org](https://validator.w3.org/ "https\://validator.w3.org/")[](https://validator.w3.org/)

[**Validator.nu (X)HTML5 Validator**\
*Edit description*html5.validator.nu](https://html5.validator.nu/ "https\://html5.validator.nu/")[](https://html5.validator.nu/)

[**CSS Validation Service**\
*Check Cascading Style Sheets (CSS) and (X)HTML documents with style sheets*jigsaw.w3.org](https://jigsaw.w3.org/css-validator/ "https\://jigsaw.w3.org/css-validator/")[](https://jigsaw.w3.org/css-validator/)

[**CSS Lint**\
*CSS lint found 0 errors and 0 warnings. How can you fix it? See the details below.*csslint.net](http://csslint.net/ "http\://csslint.net/")[](http://csslint.net/)

[**JSLint: The JavaScript Code Quality Tool**\
*JSLint, The JavaScript Code Quality Tool. This file allows JSLint to be run from a web browser. It can accept a source…*jslint.com](https://jslint.com/ "https\://jslint.com/")[](https://jslint.com/)

[**JSHint, a JavaScript Code Quality Tool**\
*Report Cyclomatic complexity Unused variables Undefined variables Warn About == null About debugging code About unsafe…*jshint.com](https://jshint.com/ "https\://jshint.com/")[](https://jshint.com/)

[**Web Content Accessibility Guidelines (WCAG) Overview**\
*Introducing the Web Content Accessibility Guidelines (WCAG), including WCAG 2.0 and WCAG 2.1. Quick links to resources…*www.w3.org](https://www.w3.org/WAI/standards-guidelines/wcag/ "https\://www.w3.org/WAI/standards-guidelines/wcag/")[](https://www.w3.org/WAI/standards-guidelines/wcag/)

[**Handling common accessibility problems - Learn web development | MDN**\
*Next we turn our attention to accessibility, providing information on common problems, how to do simple testing, and…*developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility "https\://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility")[](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)

[**WAVE Web Accessibility Evaluation Tool**\
*WAVE is a suite of evaluation tools that helps authors make their web content more accessible to individuals with…*wave.webaim.org](https://wave.webaim.org/ "https\://wave.webaim.org/")[](https://wave.webaim.org/)

[**NV Access**\
*Access to technology no matter your language, location or financial situation Quality over growth, access over profit…*www.nvaccess.org](https://www.nvaccess.org/ "https\://www.nvaccess.org/")[](https://www.nvaccess.org/)

[**Contrast Checker**\
*The five boxing wizards jump quickly. The five boxing wizards jump quickly. Enter a foreground and background color in…*webaim.org](https://webaim.org/resources/contrastchecker/ "https\://webaim.org/resources/contrastchecker/")[](https://webaim.org/resources/contrastchecker/)

[**Using ARIA Landmarks - A Demonstration**\
*ARIA landmarks are attributes you add to elements to create semantically defined sections of a page that allow users of…*accessibility.oit.ncsu.edu](https://accessibility.oit.ncsu.edu/using-aria-landmarks-a-demonstration/ "https\://accessibility.oit.ncsu.edu/using-aria-landmarks-a-demonstration/")[](https://accessibility.oit.ncsu.edu/using-aria-landmarks-a-demonstration/)

[**The Accessibility of WAI-ARIA**\
*Web developers interested in accessibility issues often discuss WAI-ARIA, an upcoming W3C candidate recommendation…*alistapart.com](https://alistapart.com/article/the-accessibility-of-wai-aria/ "https\://alistapart.com/article/the-accessibility-of-wai-aria/")[](https://alistapart.com/article/the-accessibility-of-wai-aria/)

[**WAI-ARIA states and properties: Practical examples**\
*I've been trying to include some WAI-ARIA into the project I'm currently working on. Luckily for me I'm using jQuery's…*www.punkchip.com](http://www.punkchip.com/2010/11/aria-basic-findings/ "http\://www.punkchip.com/2010/11/aria-basic-findings/")[](http://www.punkchip.com/2010/11/aria-basic-findings/)

[**Mozilla Observatory**\
*The Mozilla Observatory is a project designed to help developers, system administrators, and security professionals…*observatory.mozilla.org](https://observatory.mozilla.org/ "https\://observatory.mozilla.org/")[](https://observatory.mozilla.org/)

[**Cross Site Scripting Prevention - OWASP Cheat Sheet Series**\
*This article provides a simple positive model for preventing XSS using output encoding properly. While there are a huge…*cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html "https\://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html")[](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

[**DOM based XSS Prevention - OWASP Cheat Sheet Series**\
*When looking at XSS (Cross-Site Scripting), there are three generally recognized forms of XSS: The XSS Prevention…*cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html "https\://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html")[](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)

[**Cross-Site Request Forgeries and You**\
*As the web becomes more and more pervasive, so do web-based security vulnerabilities. I talked a little bit about the…*blog.codinghorror.com](https://blog.codinghorror.com/cross-site-request-forgeries-and-you/ "https\://blog.codinghorror.com/cross-site-request-forgeries-and-you/")[](https://blog.codinghorror.com/cross-site-request-forgeries-and-you/)

[**Cross-Site Request Forgery Prevention - OWASP Cheat Sheet Series**\
*Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant…*cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html "https\://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html")[](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

[**Let's Encrypt**\
*Let's Encrypt is a free, automated, and open certificate authority brought to you by the nonprofit Internet Security…*letsencrypt.org](https://letsencrypt.org/ "https\://letsencrypt.org/")[](https://letsencrypt.org/)

[**How to Set Up SSL on IIS 7**\
*by Saad Ladki The steps for configuring Secure Sockets Layer (SSL) for a site are the same in IIS 7 and above and IIS…*support.microsoft.com](https://support.microsoft.com/en-gb/help/299875/how-to-implement-ssl-in-iis "https\://support.microsoft.com/en-gb/help/299875/how-to-implement-ssl-in-iis")[](https://support.microsoft.com/en-gb/help/299875/how-to-implement-ssl-in-iis)

[**Apache: CSR & SSL Installation (OpenSSL)**\
*Use the instructions on this page to use OpenSSL to create your certificate signing request (CSR) and then to install…*www.digicert.com](https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install "https\://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install")[](https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install)

[**Configuring HTTPS servers**\
*To configure an HTTPS server, the ssl parameter must be enabled on listening sockets in the server block, and the…*nginx.org](https://nginx.org/en/docs/http/configuring_https_servers.html "https\://nginx.org/en/docs/http/configuring_https_servers.html")[](https://nginx.org/en/docs/http/configuring_https_servers.html)

[**SSL Server Test**\
*This free online service performs a deep analysis of the configuration of any SSL web server on the public Internet…*www.ssllabs.com](https://www.ssllabs.com/ssltest/ "https\://www.ssllabs.com/ssltest/")[](https://www.ssllabs.com/ssltest/)

[**Strict-Transport-Security - HTTP | MDN**\
*The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) lets a web site tell browsers that it…*developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security "https\://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security")[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

[**HTTP Strict Transport Security - OWASP Cheat Sheet Series**\
*HTTP Strict Transport Security (also named HSTS) is an opt-in security enhancement that is specified by a web…*cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html "https\://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html")[](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)

[**Content Security Policy | Web Fundamentals | Google Developers**\
*The web's security model is rooted in the same-origin policy . Code from https://mybank.com should only have access to…*www.html5rocks.com](https://www.html5rocks.com/en/tutorials/security/content-security-policy/ "https\://www.html5rocks.com/en/tutorials/security/content-security-policy/")[](https://www.html5rocks.com/en/tutorials/security/content-security-policy/)

[**Content Security Policy (CSP) - HTTP | MDN**\
*Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks…*developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP "https\://developer.mozilla.org/en-US/docs/Web/HTTP/CSP")[](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

[**CSP Evaluator**\
*CSP Evaluator allows developers and security experts to check if a Content Security Policy (CSP) serves as a strong…*csp-evaluator.withgoogle.com](https://csp-evaluator.withgoogle.com/ "https\://csp-evaluator.withgoogle.com/")[](https://csp-evaluator.withgoogle.com/)

[**Understand How Structured Data Works | Google Search Central**\
*Google Search works hard to understand the content of a page. You can help us by providing explicit clues about the…*developers.google.com](https://developers.google.com/search/docs/guides/intro-structured-data "https\://developers.google.com/search/docs/guides/intro-structured-data")[](https://developers.google.com/search/docs/guides/intro-structured-data)

[**Open Graph protocol**\
*The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on…*ogp.me](https://ogp.me/ "https\://ogp.me/")[](https://ogp.me/)

[**About Twitter Cards**\
*With Twitter Cards, you can attach rich photos, videos and media experiences to Tweets, helping to drive traffic to…*developer.twitter.com](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards "https\://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards")[](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)

[**Webmasters - Sharing - Documentation - Facebook for Developers**\
*Most content is shared to Facebook as a URL, so it's important that you mark up your website with Open Graph tags to…*developers.facebook.com](https://developers.facebook.com/docs/sharing/webmasters#markup "https\://developers.facebook.com/docs/sharing/webmasters#markup")[](https://developers.facebook.com/docs/sharing/webmasters#markup)

[**Humans TXT: We Are People, Not Machines.**\
*It's an initiative for knowing the people behind a website. It's a TXT file that contains information about the…*humanstxt.org](http://humanstxt.org/ "http\://humanstxt.org/")