---
title: readme
weight: 0
excerpt: readme
seo:
    title: 'Readme For This Website'
    description: 'website documentation'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---
<div align="center">

# [**⇨WEBSITE🗺️⇦**](https://bgoonz-blog.netlify.app/)

### [Github Org Link](https://github.com/BGOOONZ-BLOG/)

#### [Repo-Wiki](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki)

#### [Latest Workin:](https://github.com/bgoonz/BGOONZ_BLOG_2.0/tree/0fc1923e5fe4c8f8ea1a9bca69e12b63f093898d)

</div>

---

#### [CHANGELOG](./CHANGELOG.md)

<div align="center">

##### [**⇨Cloudfare-Backup⇦**](https://bgoonz-blog-2-0.pages.dev/) 🌎 [**⇨ search⇦**](https://www.algolia.com/realtime-search-demo/web-dev-resource-hub-9e6b8aa8-6106-44c5-9f59-ff3f9531abd4) 🌎 [**⇨ Backup Repo Deploy⇦**](https://bgoonzblog20-backup.netlify.app/#gsc.tab=0) 🌎 [**⇨ Github pages⇦**](https://bgoonz.github.io/BGOONZ_BLOG_2.0/) 🌎 [**⇨ Go To Site Wiki⇦**](https://github.com/bgoonz/BGOONZ_BLOG_2.0/wiki) 🌎 [**⇨ Gatsby Cloud Version⇦**](https://bgoonzblog20master.gtsb.io/) 🌎 [**⇨ Vercel Version⇦**](https://bgoonz-blog-2-0.vercel.app/) 🌎 [**⇨ Cloudfare-Domain⇦**](www.webdevhub.us) 🌎 [**⇨ gh-pages⇦**](https://bgoonz.github.io/BGOONZ_BLOG_2.0/)

 [stackbitv2-notworkinginstackbit](https://stackbit-clone.netlify.app/)
 [backup-20-blog](https://bgoonzblog20-backup.netlify.app/)

### Repos

   [Alt Backup](https://github.com/BGOOONZ-BLOG/bgoonz-blog2.0-v-5)
   [Blog Content](https://github.com/bgoonz/MainBlogContent)

###### [**⇨Privacy policy⇦**](https://codepen.io/bgoonz/pen/LYLJZrW)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a1b7ee1a-11a7-4bd2-a341-2260656e216f/deploy-status)](https://app.netlify.com/sites/bgoonz-blog/deploys)[![CodeFactor](https://www.codefactor.io/repository/github/bgoonz/bgoonz_blog_2.0/badge)](https://www.codefactor.io/repository/github/bgoonz/bgoonz_blog_2.0)

![GitHub visitors](https://visitor-badge-reloaded.herokuapp.com/badge?page_id=bgoonz.visitor.badge.reloaded&color=00bbbb&style=for-the-badge&logo=github)

---

![preview](https://github.com/bgoonz/BGOONZ_BLOG_2.0/blob/master/static/images/blog-may-2022.png?raw=true)

```console

npm i @stackbit/gatsby-plugin-menus babel-runtime chokidar classnames fs-extra gatsby gatsby-image gatsby-plugin-netlify gatsby-plugin-netlify-cms gatsby-plugin-sass gatsby-plugin-react-helmet gatsby-plugin-typescript  --legacy-peer-deps

```

---

## [Post processing](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#post-processing)

Control the post processing and optimizations Netlify can do for you

### [Snippet injection](https://app.netlify.com/sites/bgoonz-blog/settings/deploys#snippet-injection)

Inject analytics or other scripts into the HTML of your site.

-   **before** `</body>`

    goback

```html
    <input type="button" style="position: fixed;top: 10px;right: 10px;width:80px;color:white;font-weight:bold;background-color:rgba(0, 0, 0, 0.856); border-radius:15px;" value="Go Back" onclick="history.back(-1)" />
          <?php
            $url = htmlspecialchars($_SERVER['HTTP_REFERER']);
            echo "<a href='$url'></a>

```

---

-   **before** `</body>`

    addthis

```html
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60dcec1ece575946"></script>

```

---

-   **before** `</body>`

    mobil-qr

```html
    <a  href="https://bgoonzblog20master.gatsbyjs.io/"><img src="https://qrickit.com/api/qr.php?d=https%3A%2F%2Fbgoonzblog20master.gatsbyjs.io%2F&addtext=Click+For+Mobil+Version&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=25&t=p&e=h" style="position: fixed;bottom: 100px;right:20px;"></a>

```

---

-   **before** `</head>`

    ukraine

```html
    <script id="help-ukraine-win" async="true" src="https://helpukrainewinwidget.org/cdn/widget.js?type=four&position=middle-right&layout=main"></script>

```

---

-   **before** `</head>`

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

-   **before** `</head>`

    algolia

```
html
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

-   **before** `</body>`

    pdf2

```html
    <a href="//pdfcrowd.com/url_to_pdf/?"
       onclick="if(!this.p)href+='&url='+encodeURIComponent(location.href);this.p=1">
       Save to PDF
    </a>

```

---

-   **before** `</head>`

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

-   **before** `</body>`

    fb-sdk

```html
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=951130702132399&autoLogAppEvents=1" nonce="C29xl8PQ"></script>

```

---

[Learn more about snippet injection in the docs](https://www.netlify.com/docs/inject-analytics-snippets)

Add snippet

---

<a href="https://testmysite.io/61e5ff836a840eeeef7e78e9/bgoonz-blog.netlify.app" rel="Test My Site Results">![Foo](https://github.com/bgoonz/BGOONZ_BLOG_2.0/blob/master/static/images/Screenshot%202022-03-30%20at%2012-37-24%20Website%20Speed%20Test%20Tool%20-%20Testmysite.io%20by%20Netlify.png?raw=true)</a>

</div>

---

[![webdevhub logo](https://bgoonz-blog.netlify.app/images/home-button.png)]('https://bgoonz-blog.netlify.app/')

Open Menu

-   [Navigation](/docs/sitemap) Sub-menu
    -   [Docs](/docs)
    -   [Showcase](/showcase)
    -   [Contact!](/docs/faq/contact)
    -   [Python](/docs/python/python-ds)
    -   [JavaScript](/javascript)
-   [Blog](/blog/) Sub-menu
    -   [Blog-Post-Archive](https://bgoonz.blogspot.com/)
    -   [Top Blog Posts](https://blog-w-comments.vercel.app/)
    -   [Blog w Comments](/blogWcomments/)
-   [Job Search](/docs/career/) Sub-menu
    -   [Job Boards](/docs/career/job-boards)
    -   [Do's and Don'ts of interviews](/interview/dos-and-donts)
    -   [Career-Tips](https://bgoonz-blog.netlify.app/docs/career/)
    -   [Interview Questions](/docs/interview/interview-questions)
-   [Archive](/docs/archive) Sub-menu
    -   [Resource-Archive-Server](https://github.com/bgoonz/Learning-Assets)
    -   [Bootcamp Resources](https://lambda-resources.netlify.app/)
    -   [Web Dev Setup](https://bgoonz-blog.netlify.app/blog/webdev-setup/)
    -   [OG-Blog](https://web-dev-resource-hub.netlify.app/)
    -   [Top Repos](/docs)
    -   [MY_DOCS](https://bryan-guner.gitbook.io/my-docs/)
-   [Projects](/docs/projects) Sub-menu
    -   [Potluck Planner](https://potluck-landing.netlify.app/)
    -   [Meditation App](https://meditate42app.netlify.app/)
    -   [WebAudioLab](https://bgoonz.github.io/WebAudioDaw/)
    -   [SearchAwesome](https://search-awesome.vercel.app/)
    -   [Condensed -Portfolio](https://bg-portfolio.netlify.app/)
    -   [Family Promise Tracker](https://a.familypromiseservicetracker.dev/)
    -   [DTW-Guitar-FX-Automation](https://github.com/bgoonz/Revamped-Automatic-Guitar-Effect-Triggering)
    -   [Embeds Blog](https://bgoonz-blog-v3-0.netlify.app/embeds/)
    -   [alt-blogs](https://bgoonz-blog-v3-0.netlify.app/)
    -   [Games](https://bgoonz-games.netlify.app/)
    -   [Blog Backup](https://bgoonz-blog-v3-0.netlify.app/)
    -   [Cover Letter](https://bgoonz-cv.netlify.app/)
    -   [Project Centric](https://project-portfolio42.netlify.app/)
    -   [Wordpress Blog](https://bgoonz-blog.netlify.app/)
    -   [Project Portfolio Gallery](https://project-portfolio42.netlify.app/)
    -   [github-stats-website](https://bgoonz.github.io/github-stats-website/)
-   [Admin](https://bgoonz-blog.netlify.app/admin/) Sub-menu
    -   [Write Docs](https://bgoonz-blog.netlify.app/admin/#/collections/docs)
    -   [Write Blog](https://bgoonz-blog.netlify.app/admin/#/collections/blog/new)
    -   [Webmaster](https://bgoonz-blog.netlify.app/admin/#/collections/blog/new)
-   [Tools](/docs/tools) Sub-menu
    -   [Github HTML Previewer](https://githtmlpreview.netlify.app/)
    -   [Text Tools](https://devtools42.netlify.app/)
    -   [Ternary 2 If Else](https://ternary42.netlify.app/)
    -   [Web Dev Utility Tools](/hps://web-dev-utility-tools-bgoonz.netlify.app/)
    -   [Setup Checker](https://github.com/bgoonz/web-dev-setup-checker)
    -   [PotluckPlanner](https://potluck-landing.netlify.app/)
    -   [WebDev Quizzes](https://web-dev-interview-prep-quiz-website.netlify.app/)
    -   [Github-Advanced-Search](https://github.com/search/advanced)

Close Menu

_🔎_

Search

# I am a musician, electrical engineer & web developer

**Please note that this website is in development and is often broken!**

[](https://www.vagrantup.com/) [![gmail](https://img.icons8.com/color/96/000000/gmail.png)](mailto:bryan.guner@gmail.com)[![linkedin](https://img.icons8.com/color/96/000000/linkedin.png) ](https://www.linkedin.com/in/bryan-guner-046199128/)[![](https://img.icons8.com/color/96/000000/instagram-new.png) ](https://www.instagram.com/bgoonz/?hl=en)[![](https://img.icons8.com/color/96/000000/pinterest--v1.png)](https://www.pinterest.com/bryanguner/_saved/)

[](https://webpack.js.org/)[](https://www.adobe.com/products/xd.html)

[![NetlifyStatus](https://api.netlify.com/api/v1/badges/a1b7ee1a-11a7-4bd2-a341-2260656e216f/deploy-status)](https://app.netlify.com/sites/bgoonz-blog/deploys)

[![Bryansgithubactivitygraph](https://activity-graph.herokuapp.com/graph?username=bgoonz&custom_title=This%20is%20Bryans%20Activity&hide_border=true&theme=chartreuse-dark)](https://github.com/bgoonz/github-readme-activity-graph)

![Jokes](https://readme-jokes.vercel.app/api)

![Python](https://img.shields.io/badge/-Python-05122A?style=flat&logo=python) ![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5) ![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6) ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript) ![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react) ![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)

![VisualStudioCode](https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC) ![Docker](https://img.shields.io/badge/-Docker-05122A?style=flat&logo=Docker) ![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb) ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql)

![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git) ![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github) ![GitLab](https://img.shields.io/badge/-GitLab-05122A?style=flat&logo=gitlab)

![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)

[Contact](https://sidebar-blog.netlify.app/contact/)

![](https://d33wubrfki0l68.cloudfront.net/47651cb6f5e64bf9eee581581215e5c456e3968d/83ee4/images/bigo.jpg)

### [A Quick Guide To Big O](https://bgoonz-blog.netlify.app/docs/ds-algo/big-o/)

Memoization, Tabulation, and Sorting Algorithms by Example↩ Why is looking at runtime not a reliable method of calculating time↩ complexity?

[View Post](/docs/ds-algo/big-o/)

![python](https://d33wubrfki0l68.cloudfront.net/4337f190bb60dcd6f83fd5e2ac21502e1cf93f45/16558/images/python-language.jpg)

### [Python Guide](https://bgoonz-blog.netlify.app/docs/python/python-ds)

_Python has a built in help function that let's you see a description↩ of the source code without having to navigate to it… "-SickNasty …↩ Autor Unknown" ._

[View Posts](https://bgoonz-blog.netlify.app/docs/python/python-ds)

![](https://d33wubrfki0l68.cloudfront.net/1111140b3425c2a3e653688cedc52c43af701d30/54d59/images/dtw-algo.jpg)

### [Guitar Effects Triggering w DTW](https://github.com/bgoonz/Revamped-Automatic-Guitar-Effect-Triggering)

[Learn More](/docs/tools)

![img of dtw](https://d33wubrfki0l68.cloudfront.net/a37b8bc089cdd775711785baf935f9b1c4e732b0/c2294/images/react.gif)

### [Beginner Guide React](https://bgoonz-blog.netlify.app/docs/react/react2/)

As I learn to build web applications in React I will blog about it in↩ this series in an attempt to capture the questions that a complete↩ beginner might encounter that a more seasoned developer would take for↩ granted!

![img of react](https://d33wubrfki0l68.cloudfront.net/f318a0bdc5403fb9b59683b46e3c9ec2d75d2ed2/7de75/images/pleasant-birch.png)

### [Scope & Closure](https://dev.to/bgoonz/scope-and-context-in-javascript-5cma)

Scope & Context in JS

The **scope** of a program in JavaScript is the set of variables that are available for use within the program.

![scope and closure](https://d33wubrfki0l68.cloudfront.net/bc959e2c76edd99401fa7bc07665db54863f5fd2/97e29/images/dtw-slideshow.gif)

### Web Audio Daw

PostgreSQL Cheat Sheet, Everything You Need to View Post With VSCode

-   Extensions & Resources, Super Simple Intro To HTML, Understanding↩ Git... etc....

## Current Interests

From github repositories to existential questions.

![angolia](https://d33wubrfki0l68.cloudfront.net/589475503098710e5f2f3c1a381015f69e6b4760/0be4d/images/neural.png)

### [Angolia](/angolia)

## Full Text Search

[Full Text Search](https://www.algolia.com/)

![neural networks](https://d33wubrfki0l68.cloudfront.net/589475503098710e5f2f3c1a381015f69e6b4760/0be4d/images/neural.png)

### [Convolutional Neural Networks](/neural networks)

Artificial neural networks, usually simply called neural networks, are computing systems vaguely inspired by the biological [neural networks](https://github.com/tensorflow/tensorflow) ![](/_static/app-assets/neural.PNG)

![jamstack](https://d33wubrfki0l68.cloudfront.net/f776b2f35588e0ab71789925ce9564924154c4cf/df9d3/images/jamstack.png)

### [Jamstack](/jamstack)

##### Why Jamstack Jamstack is the new standard architecture for the

web. Using Git workflows and modern build tools, pre-rendered content↩ is served to a CDN and made dynamic through APIs and serverless↩ functions. Technologies in the stack include JavaScript frameworks,↩ Static Site Generators, Headless CMSs, and CDNs.

![event loop](https://d33wubrfki0l68.cloudfront.net/fb22b10eaa16e4ac0690115bf6c6987350d38d4b/13c10/images/eventloop.gif)

### [Asynchronous JavaScript](/docs/)

The term **asynchronous** refers to two or more objects or events **not** existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete). In computing, the word "asynchronous" is used in two major contexts.

[NJDEVILS](https://www.allaboutthejersey.com/)

![nj-devils](/images/njdev-219301cd.jpg)

### [NJ Devils](https://www.allaboutthejersey.com/)

# New Jersey Devils Hockey Team

### (Hockey in general)

## Team identity

[![](https://upload.wikimedia.org/wikipedia/en/thumb/d/da/OldDevils.png/300px-OldDevils.png)](https://en.wikipedia.org/wiki/File:OldDevils.png)

The old green style jerseys used from 1982 to 1992The jerseys used from 1992 to 2017[Sean Avery](https://en.wikipedia.org/wiki/Sean_Avery) of the [New York Rangers](https://en.wikipedia.org/wiki/New_York_Rangers) attempts to distract Brodeur during the [2008 Stanley Cup playoffs](https://en.wikipedia.org/wiki/2008_Stanley_Cup_playoffs). The playoff series was the fifth to feature the [Devils-Rangers rivalry](https://en.wikipedia.org/wiki/Devils%E2%80%93Rangers_rivalry).

[Learn More](https://www.iter.org/)

![ITER Reactor](https://d33wubrfki0l68.cloudfront.net/c2ae8fae397ffc059312cb9e84ae23dd4bf774bd/fd765/images/iter.jpg)

### [ITER Fusion Reactor Experiment (Southern France)](https://www.iter.org/)

# Break Even Nuclear Fusion Candidate

In December, researchers at the Joint European Torus (JET) started↩ conducting fusion experiments with tritium — a rare and radioactive↩ isotope of hydrogen. The facility is a one-tenth-volume mock-up of the↩ US\$22-billion ITER project and has the same doughnut-shaped 'tokamak'↩ design — the world's most developed approach to fusion energy. It is↩ the first time since 1997 that researchers have done experiments in a↩ tokamak with any significant amount of tritium.

## Resume & Portfolio

![](https://d33wubrfki0l68.cloudfront.net/b6e6b09f4479310dff86d8dd7af1b73762484f6a/fea3e/images/image-of-resume.png)

### [Resume](https://github.com/bgoonz/resume-cv-portfolio-samples/raw/master/2021-resume/bryan-guner-resume-2021.pdf)

[View In One Drive](https://1drv.ms/b/s!AkGiZ9n9CRDSpLsZsnPtiN7p77vq6A) [Web Version](#) [Download PDF](https://github.com/bgoonz/bgoonz/raw/master/bryan_guner_resume_2021_V9.pdf)

![portfolio of websites](https://d33wubrfki0l68.cloudfront.net/4e66fa2888421bd225aa811c156362cc0b7d4ebc/ca806/images/portfolio.jpg)

### Showcase

![My Projects](/_static/app-assets/lambda-demo1.gif)My Projects!

[Learn More](/showcase)

## Blog-Archive-And-Mini-Projects

![animated gif](/images/cool annimation.gif)

## Latest & Greatest

## Web Dev Utilitiy Tools

## Tools Showcase

![medium](https://d33wubrfki0l68.cloudfront.net/e5828552ff6b5743ed241d9c926e60eb925dde97/8dbbf/images/goals.jpg)

## Web Audio DA

[Go To Web Audio Daw](https://mihirbegmusiclab.netlify.app/)

## Quick Links

quick links home

### [About](/docs/about/)

Web-Dev-Hub is my personal blogand documentation site

[Learn More](/docs/about/)

### [Articles](/docs/articles/)

my web development articles

[Learn More](/docs/articles/)

### [Audio](/docs/audio/)

Audio Projects and tools / web audio daw

[Learn More](/docs/audio/)

### [Archive](/docs/archive/)

more tools that I have created or collaborated on.

[Learn More](/docs/archive/)

### [Career](/docs/career/)

Reference materials and descriptions of fundamental concepts as well as visua

[Career](/docs/career/)

### [Community](/docs/community/)

We'd love it if you participate in the Libris community. Find out how to get connected.

[Learn More](/docs/community/)

### [Content](/docs/content/)

In this section you'll learn how to add syntax highlighting, examples, callouts and much more.

[Learn More](/docs/content/)

### [CSS](/docs/css/)

[Learn More](/docs/css/)

### [Docs](/docs/docs/)

Documentation

[Learn More](/docs/docs/)

### [Data Structures](/docs/ds-algo/)

In this section you'll learn how to add syntax highlighting, examples, callouts and much more.

[Learn More](/docs/ds-algo/)

### [FAQ](/docs/faq/)

In this section you'll find commonly asked questions regarding the Libris theme. If you have questions, don't hesitate to ask us directly.

[Learn More](/docs/faq/)

###

Learn More

###

Learn More

###

Learn More

### [Interact](/docs/interact/)

Interactive examples and projects

[Learn More](/docs/interact/)

### [Javascript](/docs/javascript/)

Javascript articles and docs

[Learn More](/docs/javascript/)

### [JS-Quick-Tips](/docs/js-tips/)

Javascript articles and docs

[Learn More](/docs/js-tips/)

### [Leetcode](/docs/leetcode/)

feel free to try the examples

[Learn More](/docs/leetcode/)

### [Netlify CMS](/docs/netlify-cms-jamstack/)

etlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows.

[Learn More](/docs/netlify-cms-jamstack/)

### [Overflow](/docs/overflow/)

feel free to try the examples

[Learn More](/docs/overflow/)

### [Projects](/docs/projects/)

We'd love it if you participate in the Web-Dev-Hubcommunity. Find out how to get connected.

[Learn More](/docs/projects/)

### [Python](/docs/python/)

Python

[Learn More](/docs/python/)

### [QuickRef](/docs/quick-ref/)

In this section you'll find basic information about Web-Dev-Hub and how to use it.

[Learn More](/docs/quick-ref/)

### [React](/docs/react/)

To make it easy to write documentation in plain Markdown, most React are styled using Markdown elements with few additional CSS classes.

[Learn More](/docs/react/)

### [Reference](/docs/reference/)

helpful reference guides

[Learn More](/docs/reference/)

### [Tips](/docs/tips/)

[Learn More](/docs/tips/)

### [Tools](/docs/tools/)

See some interesting tools developed by the Web-Dev-Hubcommunity to help automate parts of your workflow.

[Learn More](/docs/tools/)

### [Tutorials](/docs/tutorials/)

Walkthroughs of various development activities and skills

[Learn More](/docs/tutorials/)

## Contact

get in touch! +1 (551) - 254 - 5505

[Contact](/docs/faq/contact)

[index](https://search.freefind.com/siteindex.html?si=14588965)

[sitemap](https://search.freefind.com/find.html?si=14588965&m=0&p=0)

[advanced](https://search.freefind.com/find.html?si=14588965&pid=a)

[search engine](https://www.freefind.com) [byfreefind](https://www.freefind.com)

[Save to PDF](//pdfcrowd.com/url_to_pdf/?)

[![webdevhub logo](https://d33wubrfki0l68.cloudfront.net/e5662f0d4f3e7730aea1a0faf7ff09ea20184700/6ca0b/images/dgqlkqjtmk.png)](/)

@bgoonz on almost every platform [BLM](https://random-static-html-deploys.netlify.app/blm.html)

[Twitter](https://twitter.com/bgooonz) [LinkedIn](https://www.linkedin.com/in/bryan-guner-046199128/) [GitHub](https://github.com/bgoonz) [Youtube](https://www.youtube.com/channel/UC9-rYyUMsnEBK8G8fCyrXXA) [Instagram](https://www.instagram.com/bgoonz/?hl=en) [dev.to](https://dev.to/bgoonz)

[![webdevhub logo](https://d33wubrfki0l68.cloudfront.net/e5662f0d4f3e7730aea1a0faf7ff09ea20184700/83eb0/images/home-button.png)](/)

Open Menu

-   [Navigation](/docs/sitemap) Sub-menu
    -   [Docs](/docs)
    -   [Showcase](/showcase)
    -   [Contact!](/docs/faq/contact)
    -   [Python](/docs/python/python-ds)
    -   [JavaScript](/javascript)
-   [Blog](/blog/) Sub-menu
    -   [Blog-Post-Archive](https://bgoonz.blogspot.com/)
    -   [Top Blog Posts](https://blog-w-comments.vercel.app/)
    -   [Blog w Comments](/blogWcomments/)
-   [Job Search](/docs/career/) Sub-menu
    -   [Job Boards](/docs/career/job-boards)
    -   [Do's and Don'ts of interviews](/interview/dos-and-donts)
    -   [Career-Tips](https://bgoonz-blog.netlify.app/docs/career/)
    -   [Interview Questions](/docs/interview/interview-questions)
-   [Archive](/docs/archive) Sub-menu
    -   [Resource-Archive-Server](https://github.com/bgoonz/Learning-Assets)
    -   [Bootcamp Resources](https://lambda-resources.netlify.app/)
    -   [Web Dev Setup](https://bgoonz-blog.netlify.app/blog/webdev-setup/)
    -   [OG-Blog](https://web-dev-resource-hub.netlify.app/)
    -   [Top Repos](/docs)
    -   [MY_DOCS](https://bryan-guner.gitbook.io/my-docs/)
-   [Projects](/docs/projects) Sub-menu
    -   [Potluck Planner](https://potluck-landing.netlify.app/)
    -   [Meditation App](https://meditate42app.netlify.app/)
    -   [WebAudioLab](https://bgoonz.github.io/WebAudioDaw/)
    -   [SearchAwesome](https://search-awesome.vercel.app/)
    -   [Condensed -Portfolio](https://bg-portfolio.netlify.app/)
    -   [Family Promise Tracker](https://a.familypromiseservicetracker.dev/)
    -   [DTW-Guitar-FX-Automation](https://github.com/bgoonz/Revamped-Automatic-Guitar-Effect-Triggering)
    -   [Embeds Blog](https://bgoonz-blog-v3-0.netlify.app/embeds/)
    -   [alt-blogs](https://bgoonz-blog-v3-0.netlify.app/)
    -   [Games](https://bgoonz-games.netlify.app/)
    -   [Blog Backup](https://bgoonz-blog-v3-0.netlify.app/)
    -   [Cover Letter](https://bgoonz-cv.netlify.app/)
    -   [Project Centric](https://project-portfolio42.netlify.app/)
    -   [Wordpress Blog](https://bgoonz-blog.netlify.app/)
    -   [Project Portfolio Gallery](https://project-portfolio42.netlify.app/)
    -   [github-stats-website](https://bgoonz.github.io/github-stats-website/)
-   [Admin](https://bgoonz-blog.netlify.app/admin/) Sub-menu
    -   [Write Docs](https://bgoonz-blog.netlify.app/admin/#/collections/docs)
    -   [Write Blog](https://bgoonz-blog.netlify.app/admin/#/collections/blog/new)
    -   [Webmaster](https://bgoonz-blog.netlify.app/admin/#/collections/blog/new)
-   [Tools](/docs/tools) Sub-menu
    -   [Github HTML Previewer](https://githtmlpreview.netlify.app/)
    -   [Text Tools](https://devtools42.netlify.app/)
    -   [Ternary 2 If Else](https://ternary42.netlify.app/)
    -   [Web Dev Utility Tools](/hps://web-dev-utility-tools-bgoonz.netlify.app/)
    -   [Setup Checker](https://github.com/bgoonz/web-dev-setup-checker)
    -   [PotluckPlanner](https://potluck-landing.netlify.app/)
    -   [WebDev Quizzes](https://web-dev-interview-prep-quiz-website.netlify.app/)
    -   [Github-Advanced-Search](https://github.com/search/advanced)

Close Menu

_🔎_

Search

# I am a musician, electrical engineer & web developer

**Please note that this website is in development and is often broken!**

[](https://www.vagrantup.com/) [![gmail](https://img.icons8.com/color/96/000000/gmail.png)](mailto:bryan.guner@gmail.com)[![linkedin](https://img.icons8.com/color/96/000000/linkedin.png) ](https://www.linkedin.com/in/bryan-guner-046199128/)[![](https://img.icons8.com/color/96/000000/instagram-new.png) ](https://www.instagram.com/bgoonz/?hl=en)[![](https://img.icons8.com/color/96/000000/pinterest--v1.png)](https://www.pinterest.com/bryanguner/_saved/)

[](https://webpack.js.org/)[](https://www.adobe.com/products/xd.html)

[![NetlifyStatus](https://api.netlify.com/api/v1/badges/a1b7ee1a-11a7-4bd2-a341-2260656e216f/deploy-status)](https://app.netlify.com/sites/bgoonz-blog/deploys)

[![Bryansgithubactivitygraph](https://activity-graph.herokuapp.com/graph?username=bgoonz&custom_title=This%20is%20Bryans%20Activity&hide_border=true&theme=chartreuse-dark)](https://github.com/bgoonz/github-readme-activity-graph)

![Jokes](https://readme-jokes.vercel.app/api)

![Python](https://img.shields.io/badge/-Python-05122A?style=flat&logo=python) ![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5) ![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6) ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript) ![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react) ![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)

![VisualStudioCode](https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC) ![Docker](https://img.shields.io/badge/-Docker-05122A?style=flat&logo=Docker) ![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb) ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql)

![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git) ![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github) ![GitLab](https://img.shields.io/badge/-GitLab-05122A?style=flat&logo=gitlab)

![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)

[Contact](https://sidebar-blog.netlify.app/contact/)

![](https://d33wubrfki0l68.cloudfront.net/47651cb6f5e64bf9eee581581215e5c456e3968d/83ee4/images/bigo.jpg)

### [A Quick Guide To Big O](https://bgoonz-blog.netlify.app/docs/ds-algo/big-o/)

Memoization, Tabulation, and Sorting Algorithms by Example↩ Why is looking at runtime not a reliable method of calculating time↩ complexity?

[View Post](/docs/ds-algo/big-o/)

![python](https://d33wubrfki0l68.cloudfront.net/4337f190bb60dcd6f83fd5e2ac21502e1cf93f45/16558/images/python-language.jpg)

### [Python Guide](https://bgoonz-blog.netlify.app/docs/python/python-ds)

_Python has a built in help function that let's you see a description↩ of the source code without having to navigate to it… "-SickNasty …↩ Autor Unknown" ._

[View Posts](https://bgoonz-blog.netlify.app/docs/python/python-ds)

![](https://d33wubrfki0l68.cloudfront.net/1111140b3425c2a3e653688cedc52c43af701d30/54d59/images/dtw-algo.jpg)

### [Guitar Effects Triggering w DTW](https://github.com/bgoonz/Revamped-Automatic-Guitar-Effect-Triggering)

[Learn More](/docs/tools)

![img of dtw](https://d33wubrfki0l68.cloudfront.net/a37b8bc089cdd775711785baf935f9b1c4e732b0/c2294/images/react.gif)

### [Beginner Guide React](https://bgoonz-blog.netlify.app/docs/react/react2/)

As I learn to build web applications in React I will blog about it in↩ this series in an attempt to capture the questions that a complete↩ beginner might encounter that a more seasoned developer would take for↩ granted!

![img of react](https://d33wubrfki0l68.cloudfront.net/f318a0bdc5403fb9b59683b46e3c9ec2d75d2ed2/7de75/images/pleasant-birch.png)

### [Scope & Closure](https://dev.to/bgoonz/scope-and-context-in-javascript-5cma)

Scope & Context in JS

The **scope** of a program in JavaScript is the set of variables that are available for use within the program.

![scope and closure](https://d33wubrfki0l68.cloudfront.net/bc959e2c76edd99401fa7bc07665db54863f5fd2/97e29/images/dtw-slideshow.gif)

### Web Audio Daw

PostgreSQL Cheat Sheet, Everything You Need to View Post With VSCode

-   Extensions & Resources, Super Simple Intro To HTML, Understanding↩ Git... etc....

## Current Interests

From github repositories to existential questions.

![angolia](https://d33wubrfki0l68.cloudfront.net/589475503098710e5f2f3c1a381015f69e6b4760/0be4d/images/neural.png)

### [Angolia](/angolia)

## Full Text Search

[Full Text Search](https://www.algolia.com/)

![neural networks](https://d33wubrfki0l68.cloudfront.net/589475503098710e5f2f3c1a381015f69e6b4760/0be4d/images/neural.png)

### [Convolutional Neural Networks](/neural networks)

Artificial neural networks, usually simply called neural networks, are computing systems vaguely inspired by the biological [neural networks](https://github.com/tensorflow/tensorflow) ![](/_static/app-assets/neural.PNG)

![jamstack](https://d33wubrfki0l68.cloudfront.net/f776b2f35588e0ab71789925ce9564924154c4cf/df9d3/images/jamstack.png)

### [Jamstack](/jamstack)

##### Why Jamstack Jamstack is the new standard architecture for the

web. Using Git workflows and modern build tools, pre-rendered content↩ is served to a CDN and made dynamic through APIs and serverless↩ functions. Technologies in the stack include JavaScript frameworks,↩ Static Site Generators, Headless CMSs, and CDNs.

![event loop](https://d33wubrfki0l68.cloudfront.net/fb22b10eaa16e4ac0690115bf6c6987350d38d4b/13c10/images/eventloop.gif)

### [Asynchronous JavaScript](/docs/)

The term **asynchronous** refers to two or more objects or events **not** existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete). In computing, the word "asynchronous" is used in two major contexts.

[Learn More](https://www.allaboutthejersey.com/)

![nj-devils](/images/njdev-219301cd.jpg)

### [NJ Devils](https://www.allaboutthejersey.com/)

# New Jersey Devils Hockey Team

### (Hockey in general)

## Team identity

[![](https://upload.wikimedia.org/wikipedia/en/thumb/d/da/OldDevils.png/300px-OldDevils.png)](https://en.wikipedia.org/wiki/File:OldDevils.png)

The old green style jerseys used from 1982 to 1992The jerseys used from 1992 to 2017[Sean Avery](https://en.wikipedia.org/wiki/Sean_Avery) of the [New York Rangers](https://en.wikipedia.org/wiki/New_York_Rangers) attempts to distract Brodeur during the [2008 Stanley Cup playoffs](https://en.wikipedia.org/wiki/2008_Stanley_Cup_playoffs). The playoff series was the fifth to feature the [Devils-Rangers rivalry](https://en.wikipedia.org/wiki/Devils%E2%80%93Rangers_rivalry).

[Learn More](https://www.iter.org/)

![ITER Reactor](https://d33wubrfki0l68.cloudfront.net/c2ae8fae397ffc059312cb9e84ae23dd4bf774bd/fd765/images/iter.jpg)

### [ITER Fusion Reactor Experiment (Southern France)](https://www.iter.org/)

# Break Even Nuclear Fusion Candidate

In December, researchers at the Joint European Torus (JET) started↩ conducting fusion experiments with tritium — a rare and radioactive↩ isotope of hydrogen. The facility is a one-tenth-volume mock-up of the↩ US\$22-billion ITER project and has the same doughnut-shaped 'tokamak'↩ design — the world's most developed approach to fusion energy. It is↩ the first time since 1997 that researchers have done experiments in a↩ tokamak with any significant amount of tritium.

## Resume & Portfolio

![](https://d33wubrfki0l68.cloudfront.net/b6e6b09f4479310dff86d8dd7af1b73762484f6a/fea3e/images/image-of-resume.png)

### [Resume](https://github.com/bgoonz/resume-cv-portfolio-samples/raw/master/2021-resume/bryan-guner-resume-2021.pdf)

[View In One Drive](https://1drv.ms/b/s!AkGiZ9n9CRDSpLsZsnPtiN7p77vq6A) [Web Version](#) [Download PDF](https://github.com/bgoonz/bgoonz/raw/master/bryan_guner_resume_2021_V9.pdf)

![portfolio of websites](https://d33wubrfki0l68.cloudfront.net/4e66fa2888421bd225aa811c156362cc0b7d4ebc/ca806/images/portfolio.jpg)

### Showcase

![My Projects](/_static/app-assets/lambda-demo1.gif)My Projects!

[Learn More](/showcase)

## Blog-Archive-And-Mini-Projects

![animated gif](/images/cool annimation.gif)

## Latest & Greatest

## Web Dev Utilitiy Tools

## Tools Showcase

![medium](https://d33wubrfki0l68.cloudfront.net/e5828552ff6b5743ed241d9c926e60eb925dde97/8dbbf/images/goals.jpg)

## Web Audio DA

[Go To Web Audio Daw](https://mihirbegmusiclab.netlify.app/)

## Quick Links

quick links home

### [About](/docs/about/)

Web-Dev-Hub is my personal blogand documentation site

[Learn More](/docs/about/)

### [Articles](/docs/articles/)

my web development articles

[Learn More](/docs/articles/)

### [Audio](/docs/audio/)

Audio Projects and tools / web audio daw

[Learn More](/docs/audio/)

### [Archive](/docs/archive/)

more tools that I have created or collaborated on.

[Learn More](/docs/archive/)

### [Career](/docs/career/)

Reference materials and descriptions of fundamental concepts as well as visua

[Learn More](/docs/career/)

### [Community](/docs/community/)

We'd love it if you participate in the Libris community. Find out how to get connected.

[Learn More](/docs/community/)

### [Content](/docs/content/)

In this section you'll learn how to add syntax highlighting, examples, callouts and much more.

[Learn More](/docs/content/)

### [CSS](/docs/css/)

[Learn More](/docs/css/)

### [Docs](/docs/docs/)

Documentation

[Learn More](/docs/docs/)

### [Data Structures](/docs/ds-algo/)

In this section you'll learn how to add syntax highlighting, examples, callouts and much more.

[Learn More](/docs/ds-algo/)

### [FAQ](/docs/faq/)

In this section you'll find commonly asked questions regarding the Libris theme. If you have questions, don't hesitate to ask us directly.

[Learn More](/docs/faq/)

###

Learn More

###

Learn More

###

Learn More

### [Interact](/docs/interact/)

Interactive examples and projects

[Learn More](/docs/interact/)

### [Javascript](/docs/javascript/)

Javascript articles and docs

[Learn More](/docs/javascript/)

### [JS-Quick-Tips](/docs/js-tips/)

Javascript articles and docs

[Learn More](/docs/js-tips/)

### [Leetcode](/docs/leetcode/)

feel free to try the examples

[Learn More](/docs/leetcode/)

### [Netlify CMS](/docs/netlify-cms-jamstack/)

etlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows.

[Learn More](/docs/netlify-cms-jamstack/)

### [Overflow](/docs/overflow/)

feel free to try the examples

[Learn More](/docs/overflow/)

### [Projects](/docs/projects/)

We'd love it if you participate in the Web-Dev-Hubcommunity. Find out how to get connected.

[Learn More](/docs/projects/)

### [Python](/docs/python/)

Python

[Learn More](/docs/python/)

### [QuickRef](/docs/quick-ref/)

In this section you'll find basic information about Web-Dev-Hub and how to use it.

[Learn More](/docs/quick-ref/)

### [React](/docs/react/)

To make it easy to write documentation in plain Markdown, most React are styled using Markdown elements with few additional CSS classes.

[Learn More](/docs/react/)

### [Reference](/docs/reference/)

helpful reference guides

[Learn More](/docs/reference/)

### [Tips](/docs/tips/)

[Learn More](/docs/tips/)

### [Tools](/docs/tools/)

See some interesting tools developed by the Web-Dev-Hubcommunity to help automate parts of your workflow.

[Learn More](/docs/tools/)

### [Tutorials](/docs/tutorials/)

Walkthroughs of various development activities and skills

[Learn More](/docs/tutorials/)

## Contact

get in touch! +1 (551) - 254 - 5505

[Contact](/docs/faq/contact)

[index](https://search.freefind.com/siteindex.html?si=14588965)

[sitemap](https://search.freefind.com/find.html?si=14588965&m=0&p=0)

[advanced](https://search.freefind.com/find.html?si=14588965&pid=a)

[search engine](https://www.freefind.com) [byfreefind](https://www.freefind.com)

[Save to PDF](//pdfcrowd.com/url_to_pdf/?)

[![webdevhub logo](https://d33wubrfki0l68.cloudfront.net/e5662f0d4f3e7730aea1a0faf7ff09ea20184700/6ca0b/images/dgqlkqjtmk.png)](/)

@bgoonz on almost every platform [BLM](https://random-static-html-deploys.netlify.app/blm.html)

[Twitter](https://twitter.com/bgooonz) [LinkedIn](https://www.linkedin.com/in/bryan-guner-046199128/) [GitHub](https://github.com/bgoonz) [Youtube](https://www.youtube.com/channel/UC9-rYyUMsnEBK8G8fCyrXXA) [Instagram](https://www.instagram.com/bgoonz/?hl=en) [dev.to](https://dev.to/bgoonz)

---

# SITEMAP

-   [https://bgoonz-blog.netlify.app/](https://bgoonz-blog.netlify.app/)
-   [https://bgoonz-blog.netlify.app/admin](https://bgoonz-blog.netlify.app/admin)
-   [https://bgoonz-blog.netlify.app/blog](https://bgoonz-blog.netlify.app/blog)
-   [https://bgoonz-blog.netlify.app/blog/10-essential-react-interview-questions](https://bgoonz-blog.netlify.app/blog/10-essential-react-interview-questions)
-   [https://bgoonz-blog.netlify.app/blog/300-react-questions](https://bgoonz-blog.netlify.app/blog/300-react-questions)
-   [https://bgoonz-blog.netlify.app/blog/adding-css-to-your-html](https://bgoonz-blog.netlify.app/blog/adding-css-to-your-html)
-   [https://bgoonz-blog.netlify.app/blog/awesome-graphql](https://bgoonz-blog.netlify.app/blog/awesome-graphql)
-   [https://bgoonz-blog.netlify.app/blog/beginners-guide-to-python](https://bgoonz-blog.netlify.app/blog/beginners-guide-to-python)
-   [https://bgoonz-blog.netlify.app/blog/big-o-complexity](https://bgoonz-blog.netlify.app/blog/big-o-complexity)
-   [https://bgoonz-blog.netlify.app/blog/blog-archive](https://bgoonz-blog.netlify.app/blog/blog-archive)
-   [https://bgoonz-blog.netlify.app/blog/code-playgrounds-of-2021](https://bgoonz-blog.netlify.app/blog/code-playgrounds-of-2021)
-   [https://bgoonz-blog.netlify.app/blog/data-structures](https://bgoonz-blog.netlify.app/blog/data-structures)
-   [https://bgoonz-blog.netlify.app/blog/data-structures-algorithms-resources](https://bgoonz-blog.netlify.app/blog/data-structures-algorithms-resources)
-   [https://bgoonz-blog.netlify.app/blog/deploy-react-app-to-heroku](https://bgoonz-blog.netlify.app/blog/deploy-react-app-to-heroku)
-   [https://bgoonz-blog.netlify.app/blog/embedding-media-in-html](https://bgoonz-blog.netlify.app/blog/embedding-media-in-html)
-   [https://bgoonz-blog.netlify.app/blog/eslint-rules](https://bgoonz-blog.netlify.app/blog/eslint-rules)
-   [https://bgoonz-blog.netlify.app/blog/event-handeling](https://bgoonz-blog.netlify.app/blog/event-handeling)
-   [https://bgoonz-blog.netlify.app/blog/expressjs-apis](https://bgoonz-blog.netlify.app/blog/expressjs-apis)
-   [https://bgoonz-blog.netlify.app/blog/file-system-route-api](https://bgoonz-blog.netlify.app/blog/file-system-route-api)
-   [https://bgoonz-blog.netlify.app/blog/flow-control-in-python](https://bgoonz-blog.netlify.app/blog/flow-control-in-python)
-   [https://bgoonz-blog.netlify.app/blog/front-end-interview-questions-part-2](https://bgoonz-blog.netlify.app/blog/front-end-interview-questions-part-2)
-   [https://bgoonz-blog.netlify.app/blog/functions-in-python](https://bgoonz-blog.netlify.app/blog/functions-in-python)
-   [https://bgoonz-blog.netlify.app/blog/gatsby-cli](https://bgoonz-blog.netlify.app/blog/gatsby-cli)
-   [https://bgoonz-blog.netlify.app/blog/git-gateway](https://bgoonz-blog.netlify.app/blog/git-gateway)
-   [https://bgoonz-blog.netlify.app/blog/google-analytics](https://bgoonz-blog.netlify.app/blog/google-analytics)
-   [https://bgoonz-blog.netlify.app/blog/grep-in-linuz](https://bgoonz-blog.netlify.app/blog/grep-in-linuz)
-   [https://bgoonz-blog.netlify.app/blog/hoisting](https://bgoonz-blog.netlify.app/blog/hoisting)
-   [https://bgoonz-blog.netlify.app/blog/htt-requests](https://bgoonz-blog.netlify.app/blog/htt-requests)
-   [https://bgoonz-blog.netlify.app/blog/interview-questions-js](https://bgoonz-blog.netlify.app/blog/interview-questions-js)
-   [https://bgoonz-blog.netlify.app/blog/interview-questions-js-p2](https://bgoonz-blog.netlify.app/blog/interview-questions-js-p2)
-   [https://bgoonz-blog.netlify.app/blog/interview-questions-js-p3](https://bgoonz-blog.netlify.app/blog/interview-questions-js-p3)
-   [https://bgoonz-blog.netlify.app/blog/intro-01-data-structures](https://bgoonz-blog.netlify.app/blog/intro-01-data-structures)
-   [https://bgoonz-blog.netlify.app/blog/intro-to-markdown](https://bgoonz-blog.netlify.app/blog/intro-to-markdown)
-   [https://bgoonz-blog.netlify.app/blog/jsx-in-depth](https://bgoonz-blog.netlify.app/blog/jsx-in-depth)
-   [https://bgoonz-blog.netlify.app/blog/netlify-cms](https://bgoonz-blog.netlify.app/blog/netlify-cms)
-   [https://bgoonz-blog.netlify.app/blog/passing-arguments-to-a-callback-in-js](https://bgoonz-blog.netlify.app/blog/passing-arguments-to-a-callback-in-js)
-   [https://bgoonz-blog.netlify.app/blog/platform-docs](https://bgoonz-blog.netlify.app/blog/platform-docs)
-   [https://bgoonz-blog.netlify.app/blog/psql-cheat-sheet](https://bgoonz-blog.netlify.app/blog/psql-cheat-sheet)
-   [https://bgoonz-blog.netlify.app/blog/python-for-js-dev](https://bgoonz-blog.netlify.app/blog/python-for-js-dev)
-   [https://bgoonz-blog.netlify.app/blog/python-quiz](https://bgoonz-blog.netlify.app/blog/python-quiz)
-   [https://bgoonz-blog.netlify.app/blog/python-resources](https://bgoonz-blog.netlify.app/blog/python-resources)
-   [https://bgoonz-blog.netlify.app/blog/react-fragments](https://bgoonz-blog.netlify.app/blog/react-fragments)
-   [https://bgoonz-blog.netlify.app/blog/react-semantics](https://bgoonz-blog.netlify.app/blog/react-semantics)
-   [https://bgoonz-blog.netlify.app/blog/react-state](https://bgoonz-blog.netlify.app/blog/react-state)
-   [https://bgoonz-blog.netlify.app/blog/useful-stock-images](https://bgoonz-blog.netlify.app/blog/useful-stock-images)
-   [https://bgoonz-blog.netlify.app/blog/using-the-dom](https://bgoonz-blog.netlify.app/blog/using-the-dom)
-   [https://bgoonz-blog.netlify.app/blog/vs-code-extensions](https://bgoonz-blog.netlify.app/blog/vs-code-extensions)
-   [https://bgoonz-blog.netlify.app/blog/vscode-extensions](https://bgoonz-blog.netlify.app/blog/vscode-extensions)
-   [https://bgoonz-blog.netlify.app/blog/web-dev-trends](https://bgoonz-blog.netlify.app/blog/web-dev-trends)
-   [https://bgoonz-blog.netlify.app/blog/web-scraping](https://bgoonz-blog.netlify.app/blog/web-scraping)
-   [https://bgoonz-blog.netlify.app/blog/webdev-setup](https://bgoonz-blog.netlify.app/blog/webdev-setup)
-   [https://bgoonz-blog.netlify.app/blog/what-is-a-redux-reducer](https://bgoonz-blog.netlify.app/blog/what-is-a-redux-reducer)
-   [https://bgoonz-blog.netlify.app/blog/wordpress-vs-headless-cms](https://bgoonz-blog.netlify.app/blog/wordpress-vs-headless-cms)
-   [https://bgoonz-blog.netlify.app/docs](https://bgoonz-blog.netlify.app/docs)
-   [https://bgoonz-blog.netlify.app/docs/about](https://bgoonz-blog.netlify.app/docs/about)
-   [https://bgoonz-blog.netlify.app/docs/about/eng-portfolio](https://bgoonz-blog.netlify.app/docs/about/eng-portfolio)
-   [https://bgoonz-blog.netlify.app/docs/about/internal-use](https://bgoonz-blog.netlify.app/docs/about/internal-use)
-   [https://bgoonz-blog.netlify.app/docs/about/intrests](https://bgoonz-blog.netlify.app/docs/about/intrests)
-   [https://bgoonz-blog.netlify.app/docs/about/job-search](https://bgoonz-blog.netlify.app/docs/about/job-search)
-   [https://bgoonz-blog.netlify.app/docs/about/readme](https://bgoonz-blog.netlify.app/docs/about/readme)
-   [https://bgoonz-blog.netlify.app/docs/about/resume](https://bgoonz-blog.netlify.app/docs/about/resume)
-   [https://bgoonz-blog.netlify.app/docs/archive](https://bgoonz-blog.netlify.app/docs/archive)
-   [https://bgoonz-blog.netlify.app/docs/archive/embeded-websites](https://bgoonz-blog.netlify.app/docs/archive/embeded-websites)
-   [https://bgoonz-blog.netlify.app/docs/articles](https://bgoonz-blog.netlify.app/docs/articles)
-   [https://bgoonz-blog.netlify.app/docs/articles/buffers](https://bgoonz-blog.netlify.app/docs/articles/buffers)
-   [https://bgoonz-blog.netlify.app/docs/articles/common-modules](https://bgoonz-blog.netlify.app/docs/articles/common-modules)
-   [https://bgoonz-blog.netlify.app/docs/articles/dev-dep](https://bgoonz-blog.netlify.app/docs/articles/dev-dep)
-   [https://bgoonz-blog.netlify.app/docs/articles/fs-module](https://bgoonz-blog.netlify.app/docs/articles/fs-module)
-   [https://bgoonz-blog.netlify.app/docs/articles/how-search-engines-work](https://bgoonz-blog.netlify.app/docs/articles/how-search-engines-work)
-   [https://bgoonz-blog.netlify.app/docs/articles/how-the-web-works](https://bgoonz-blog.netlify.app/docs/articles/how-the-web-works)
-   [https://bgoonz-blog.netlify.app/docs/articles/intro](https://bgoonz-blog.netlify.app/docs/articles/intro)
-   [https://bgoonz-blog.netlify.app/docs/articles/jamstack](https://bgoonz-blog.netlify.app/docs/articles/jamstack)
-   [https://bgoonz-blog.netlify.app/docs/articles/nextjs](https://bgoonz-blog.netlify.app/docs/articles/nextjs)
-   [https://bgoonz-blog.netlify.app/docs/articles/node-api-express](https://bgoonz-blog.netlify.app/docs/articles/node-api-express)
-   [https://bgoonz-blog.netlify.app/docs/articles/npm](https://bgoonz-blog.netlify.app/docs/articles/npm)
-   [https://bgoonz-blog.netlify.app/docs/articles/os-module](https://bgoonz-blog.netlify.app/docs/articles/os-module)
-   [https://bgoonz-blog.netlify.app/docs/articles/reading-files](https://bgoonz-blog.netlify.app/docs/articles/reading-files)
-   [https://bgoonz-blog.netlify.app/docs/articles/semantic](https://bgoonz-blog.netlify.app/docs/articles/semantic)
-   [https://bgoonz-blog.netlify.app/docs/articles/semantic-html](https://bgoonz-blog.netlify.app/docs/articles/semantic-html)
-   [https://bgoonz-blog.netlify.app/docs/articles/url](https://bgoonz-blog.netlify.app/docs/articles/url)
-   [https://bgoonz-blog.netlify.app/docs/articles/web-standards-checklist](https://bgoonz-blog.netlify.app/docs/articles/web-standards-checklist)
-   [https://bgoonz-blog.netlify.app/docs/articles/webdev-tools](https://bgoonz-blog.netlify.app/docs/articles/webdev-tools)
-   [https://bgoonz-blog.netlify.app/docs/articles/writing-files](https://bgoonz-blog.netlify.app/docs/articles/writing-files)
-   [https://bgoonz-blog.netlify.app/docs/audio](https://bgoonz-blog.netlify.app/docs/audio)
-   [https://bgoonz-blog.netlify.app/docs/audio/dfft](https://bgoonz-blog.netlify.app/docs/audio/dfft)
-   [https://bgoonz-blog.netlify.app/docs/audio/discrete-fft](https://bgoonz-blog.netlify.app/docs/audio/discrete-fft)
-   [https://bgoonz-blog.netlify.app/docs/audio/dtw-python-explained](https://bgoonz-blog.netlify.app/docs/audio/dtw-python-explained)
-   [https://bgoonz-blog.netlify.app/docs/audio/dynamic-time-warping](https://bgoonz-blog.netlify.app/docs/audio/dynamic-time-warping)
-   [https://bgoonz-blog.netlify.app/docs/audio/web-audio-api](https://bgoonz-blog.netlify.app/docs/audio/web-audio-api)
-   [https://bgoonz-blog.netlify.app/docs/career](https://bgoonz-blog.netlify.app/docs/career)
-   [https://bgoonz-blog.netlify.app/docs/career/job-boards](https://bgoonz-blog.netlify.app/docs/career/job-boards)
-   [https://bgoonz-blog.netlify.app/docs/career/my-websites](https://bgoonz-blog.netlify.app/docs/career/my-websites)
-   [https://bgoonz-blog.netlify.app/docs/career/projects](https://bgoonz-blog.netlify.app/docs/career/projects)
-   [https://bgoonz-blog.netlify.app/docs/community](https://bgoonz-blog.netlify.app/docs/community)
-   [https://bgoonz-blog.netlify.app/docs/community/an-open-letter-2-future-developers](https://bgoonz-blog.netlify.app/docs/community/an-open-letter-2-future-developers)
-   [https://bgoonz-blog.netlify.app/docs/community/bookmarks](https://bgoonz-blog.netlify.app/docs/community/bookmarks)
-   [https://bgoonz-blog.netlify.app/docs/community/video-chat](https://bgoonz-blog.netlify.app/docs/community/video-chat)
-   [https://bgoonz-blog.netlify.app/docs/content](https://bgoonz-blog.netlify.app/docs/content)
-   [https://bgoonz-blog.netlify.app/docs/content/algo](https://bgoonz-blog.netlify.app/docs/content/algo)
-   [https://bgoonz-blog.netlify.app/docs/content/archive](https://bgoonz-blog.netlify.app/docs/content/archive)
-   [https://bgoonz-blog.netlify.app/docs/content/data-structures-in-python](https://bgoonz-blog.netlify.app/docs/content/data-structures-in-python)
-   [https://bgoonz-blog.netlify.app/docs/content/gatsby-Queries-Mutations](https://bgoonz-blog.netlify.app/docs/content/gatsby-Queries-Mutations)
-   [https://bgoonz-blog.netlify.app/docs/content/gists](https://bgoonz-blog.netlify.app/docs/content/gists)
-   [https://bgoonz-blog.netlify.app/docs/content/history-api](https://bgoonz-blog.netlify.app/docs/content/history-api)
-   [https://bgoonz-blog.netlify.app/docs/content/javascript-examples](https://bgoonz-blog.netlify.app/docs/content/javascript-examples)
-   [https://bgoonz-blog.netlify.app/docs/content/main-projects](https://bgoonz-blog.netlify.app/docs/content/main-projects)
-   [https://bgoonz-blog.netlify.app/docs/content/native-data-structures-in-js](https://bgoonz-blog.netlify.app/docs/content/native-data-structures-in-js)
-   [https://bgoonz-blog.netlify.app/docs/content/trouble-shooting](https://bgoonz-blog.netlify.app/docs/content/trouble-shooting)
-   [https://bgoonz-blog.netlify.app/docs/css](https://bgoonz-blog.netlify.app/docs/css)
-   [https://bgoonz-blog.netlify.app/docs/css/css-selector-specificity](https://bgoonz-blog.netlify.app/docs/css/css-selector-specificity)
-   [https://bgoonz-blog.netlify.app/docs/css/media-querries](https://bgoonz-blog.netlify.app/docs/css/media-querries)
-   [https://bgoonz-blog.netlify.app/docs/css/the-box-model](https://bgoonz-blog.netlify.app/docs/css/the-box-model)
-   [https://bgoonz-blog.netlify.app/docs/docs](https://bgoonz-blog.netlify.app/docs/docs)
-   [https://bgoonz-blog.netlify.app/docs/docs/appendix](https://bgoonz-blog.netlify.app/docs/docs/appendix)
-   [https://bgoonz-blog.netlify.app/docs/docs/archive](https://bgoonz-blog.netlify.app/docs/docs/archive)
-   [https://bgoonz-blog.netlify.app/docs/docs/bash](https://bgoonz-blog.netlify.app/docs/docs/bash)
-   [https://bgoonz-blog.netlify.app/docs/docs/css](https://bgoonz-blog.netlify.app/docs/docs/css)
-   [https://bgoonz-blog.netlify.app/docs/docs/git-reference](https://bgoonz-blog.netlify.app/docs/docs/git-reference)
-   [https://bgoonz-blog.netlify.app/docs/docs/git-repos](https://bgoonz-blog.netlify.app/docs/docs/git-repos)
-   [https://bgoonz-blog.netlify.app/docs/docs/glossary](https://bgoonz-blog.netlify.app/docs/docs/glossary)
-   [https://bgoonz-blog.netlify.app/docs/docs/html-tags](https://bgoonz-blog.netlify.app/docs/docs/html-tags)
-   [https://bgoonz-blog.netlify.app/docs/docs/markdown](https://bgoonz-blog.netlify.app/docs/docs/markdown)
-   [https://bgoonz-blog.netlify.app/docs/docs/no-whiteboarding](https://bgoonz-blog.netlify.app/docs/docs/no-whiteboarding)
-   [https://bgoonz-blog.netlify.app/docs/docs/node-docs-complete](https://bgoonz-blog.netlify.app/docs/docs/node-docs-complete)
-   [https://bgoonz-blog.netlify.app/docs/docs/privacy-policy](https://bgoonz-blog.netlify.app/docs/docs/privacy-policy)
-   [https://bgoonz-blog.netlify.app/docs/docs/regex-in-js](https://bgoonz-blog.netlify.app/docs/docs/regex-in-js)
-   [https://bgoonz-blog.netlify.app/docs/docs/sitemap](https://bgoonz-blog.netlify.app/docs/docs/sitemap)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo](https://bgoonz-blog.netlify.app/docs/ds-algo)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/big-o](https://bgoonz-blog.netlify.app/docs/ds-algo/big-o)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/data-structures-docs](https://bgoonz-blog.netlify.app/docs/ds-algo/data-structures-docs)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/ds-algo-interview](https://bgoonz-blog.netlify.app/docs/ds-algo/ds-algo-interview)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/ds-by-example](https://bgoonz-blog.netlify.app/docs/ds-algo/ds-by-example)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/ds-overview](https://bgoonz-blog.netlify.app/docs/ds-algo/ds-overview)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/free-code-camp](https://bgoonz-blog.netlify.app/docs/ds-algo/free-code-camp)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/graph](https://bgoonz-blog.netlify.app/docs/ds-algo/graph)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/heaps](https://bgoonz-blog.netlify.app/docs/ds-algo/heaps)
-   [https://bgoonz-blog.netlify.app/docs/ds-algo/tree](https://bgoonz-blog.netlify.app/docs/ds-algo/tree)
-   [https://bgoonz-blog.netlify.app/docs/faq](https://bgoonz-blog.netlify.app/docs/faq)
-   [https://bgoonz-blog.netlify.app/docs/faq/contact](https://bgoonz-blog.netlify.app/docs/faq/contact)
-   [https://bgoonz-blog.netlify.app/docs/faq/plug-ins](https://bgoonz-blog.netlify.app/docs/faq/plug-ins)
-   [https://bgoonz-blog.netlify.app/docs/fetch-api](https://bgoonz-blog.netlify.app/docs/fetch-api)
-   [https://bgoonz-blog.netlify.app/docs/git/git](https://bgoonz-blog.netlify.app/docs/git/git)
-   [https://bgoonz-blog.netlify.app/docs/git/git/github-tutorial](https://bgoonz-blog.netlify.app/docs/git/git/github-tutorial)
-   [https://bgoonz-blog.netlify.app/docs/interact](https://bgoonz-blog.netlify.app/docs/interact)
-   [https://bgoonz-blog.netlify.app/docs/interact/callstack-visual](https://bgoonz-blog.netlify.app/docs/interact/callstack-visual)
-   [https://bgoonz-blog.netlify.app/docs/interact/clock](https://bgoonz-blog.netlify.app/docs/interact/clock)
-   [https://bgoonz-blog.netlify.app/docs/interact/jupyter-notebooks](https://bgoonz-blog.netlify.app/docs/interact/jupyter-notebooks)
-   [https://bgoonz-blog.netlify.app/docs/interact/other-sites](https://bgoonz-blog.netlify.app/docs/interact/other-sites)
-   [https://bgoonz-blog.netlify.app/docs/interact/react-testing-library](https://bgoonz-blog.netlify.app/docs/interact/react-testing-library)
-   [https://bgoonz-blog.netlify.app/docs/interact/video-chat](https://bgoonz-blog.netlify.app/docs/interact/video-chat)
-   [https://bgoonz-blog.netlify.app/docs/javascript](https://bgoonz-blog.netlify.app/docs/javascript)
-   [https://bgoonz-blog.netlify.app/docs/javascript/arrow-functions](https://bgoonz-blog.netlify.app/docs/javascript/arrow-functions)
-   [https://bgoonz-blog.netlify.app/docs/javascript/asynchronous-javascript-and-xml](https://bgoonz-blog.netlify.app/docs/javascript/asynchronous-javascript-and-xml)
-   [https://bgoonz-blog.netlify.app/docs/javascript/asyncjs](https://bgoonz-blog.netlify.app/docs/javascript/asyncjs)
-   [https://bgoonz-blog.netlify.app/docs/javascript/await-keyword](https://bgoonz-blog.netlify.app/docs/javascript/await-keyword)
-   [https://bgoonz-blog.netlify.app/docs/javascript/bigo](https://bgoonz-blog.netlify.app/docs/javascript/bigo)
-   [https://bgoonz-blog.netlify.app/docs/javascript/clean-code](https://bgoonz-blog.netlify.app/docs/javascript/clean-code)
-   [https://bgoonz-blog.netlify.app/docs/javascript/constructor-functions](https://bgoonz-blog.netlify.app/docs/javascript/constructor-functions)
-   [https://bgoonz-blog.netlify.app/docs/javascript/cs-basics-in-js](https://bgoonz-blog.netlify.app/docs/javascript/cs-basics-in-js)
-   [https://bgoonz-blog.netlify.app/docs/javascript/for-loops](https://bgoonz-blog.netlify.app/docs/javascript/for-loops)
-   [https://bgoonz-blog.netlify.app/docs/javascript/javascript-resource-table](https://bgoonz-blog.netlify.app/docs/javascript/javascript-resource-table)
-   [https://bgoonz-blog.netlify.app/docs/javascript/js-expressions](https://bgoonz-blog.netlify.app/docs/javascript/js-expressions)
-   [https://bgoonz-blog.netlify.app/docs/javascript/js-objects](https://bgoonz-blog.netlify.app/docs/javascript/js-objects)
-   [https://bgoonz-blog.netlify.app/docs/javascript/part2-pojo](https://bgoonz-blog.netlify.app/docs/javascript/part2-pojo)
-   [https://bgoonz-blog.netlify.app/docs/javascript/promises](https://bgoonz-blog.netlify.app/docs/javascript/promises)
-   [https://bgoonz-blog.netlify.app/docs/javascript/review](https://bgoonz-blog.netlify.app/docs/javascript/review)
-   [https://bgoonz-blog.netlify.app/docs/javascript/snippets](https://bgoonz-blog.netlify.app/docs/javascript/snippets)
-   [https://bgoonz-blog.netlify.app/docs/javascript/this-is-about-this](https://bgoonz-blog.netlify.app/docs/javascript/this-is-about-this)
-   [https://bgoonz-blog.netlify.app/docs/javascript/variables](https://bgoonz-blog.netlify.app/docs/javascript/variables)
-   [https://bgoonz-blog.netlify.app/docs/js-tips](https://bgoonz-blog.netlify.app/docs/js-tips)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/abs](https://bgoonz-blog.netlify.app/docs/js-tips/abs)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/acos](https://bgoonz-blog.netlify.app/docs/js-tips/acos)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/acosh](https://bgoonz-blog.netlify.app/docs/js-tips/acosh)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/addition](https://bgoonz-blog.netlify.app/docs/js-tips/addition)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/all](https://bgoonz-blog.netlify.app/docs/js-tips/all)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/allsettled](https://bgoonz-blog.netlify.app/docs/js-tips/allsettled)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/any](https://bgoonz-blog.netlify.app/docs/js-tips/any)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/array](https://bgoonz-blog.netlify.app/docs/js-tips/array)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/array-methods](https://bgoonz-blog.netlify.app/docs/js-tips/array-methods)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/arrow_functions](https://bgoonz-blog.netlify.app/docs/js-tips/arrow_functions)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/async_function](https://bgoonz-blog.netlify.app/docs/js-tips/async_function)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/bad_radix](https://bgoonz-blog.netlify.app/docs/js-tips/bad_radix)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/bind](https://bgoonz-blog.netlify.app/docs/js-tips/bind)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/classes](https://bgoonz-blog.netlify.app/docs/js-tips/classes)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/concat](https://bgoonz-blog.netlify.app/docs/js-tips/concat)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/conditional_operator](https://bgoonz-blog.netlify.app/docs/js-tips/conditional_operator)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/const](https://bgoonz-blog.netlify.app/docs/js-tips/const)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/create](https://bgoonz-blog.netlify.app/docs/js-tips/create)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/date](https://bgoonz-blog.netlify.app/docs/js-tips/date)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/eval](https://bgoonz-blog.netlify.app/docs/js-tips/eval)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/every](https://bgoonz-blog.netlify.app/docs/js-tips/every)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/filter](https://bgoonz-blog.netlify.app/docs/js-tips/filter)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/for...of](https://bgoonz-blog.netlify.app/docs/js-tips/for...of)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/foreach](https://bgoonz-blog.netlify.app/docs/js-tips/foreach)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/functions](https://bgoonz-blog.netlify.app/docs/js-tips/functions)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/import](https://bgoonz-blog.netlify.app/docs/js-tips/import)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/insert-into-array](https://bgoonz-blog.netlify.app/docs/js-tips/insert-into-array)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/map](https://bgoonz-blog.netlify.app/docs/js-tips/map)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/object](https://bgoonz-blog.netlify.app/docs/js-tips/object)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/reduce](https://bgoonz-blog.netlify.app/docs/js-tips/reduce)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/regexp](https://bgoonz-blog.netlify.app/docs/js-tips/regexp)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/sort](https://bgoonz-blog.netlify.app/docs/js-tips/sort)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/sorting-strings](https://bgoonz-blog.netlify.app/docs/js-tips/sorting-strings)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/string](https://bgoonz-blog.netlify.app/docs/js-tips/string)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/this](https://bgoonz-blog.netlify.app/docs/js-tips/this)
-   [https://bgoonz-blog.netlify.app/docs/js-tips/var](https://bgoonz-blog.netlify.app/docs/js-tips/var)
-   [https://bgoonz-blog.netlify.app/docs/leetcode](https://bgoonz-blog.netlify.app/docs/leetcode)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/ContaineWitMosWater](https://bgoonz-blog.netlify.app/docs/leetcode/ContaineWitMosWater)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/DividTwIntegers](https://bgoonz-blog.netlify.app/docs/leetcode/DividTwIntegers)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/GeneratParentheses](https://bgoonz-blog.netlify.app/docs/leetcode/GeneratParentheses)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/LetteCombinationoPhonNumber](https://bgoonz-blog.netlify.app/docs/leetcode/LetteCombinationoPhonNumber)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/LongesCommoPrefix](https://bgoonz-blog.netlify.app/docs/leetcode/LongesCommoPrefix)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/MediaoTwSorteArrays](https://bgoonz-blog.netlify.app/docs/leetcode/MediaoTwSorteArrays)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/NexPermutation](https://bgoonz-blog.netlify.app/docs/leetcode/NexPermutation)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/PalindromNumber](https://bgoonz-blog.netlify.app/docs/leetcode/PalindromNumber)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/RegulaExpressioMatching](https://bgoonz-blog.netlify.app/docs/leetcode/RegulaExpressioMatching)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/RemovDuplicatefroSorteArray](https://bgoonz-blog.netlify.app/docs/leetcode/RemovDuplicatefroSorteArray)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/RemovNtNodFroEnoList](https://bgoonz-blog.netlify.app/docs/leetcode/RemovNtNodFroEnoList)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/RomatInteger](https://bgoonz-blog.netlify.app/docs/leetcode/RomatInteger)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/SearciRotateSorteArray](https://bgoonz-blog.netlify.app/docs/leetcode/SearciRotateSorteArray)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/StrintIntege(atoi)](<https://bgoonz-blog.netlify.app/docs/leetcode/StrintIntege(atoi)>)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/ValiParentheses](https://bgoonz-blog.netlify.app/docs/leetcode/ValiParentheses)
-   [https://bgoonz-blog.netlify.app/docs/leetcode/ZigZaConversion](https://bgoonz-blog.netlify.app/docs/leetcode/ZigZaConversion)
-   [https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack](https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack)
-   [https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack/get-started-with-gatsby](https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack/get-started-with-gatsby)
-   [https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack/jamstack-templates](https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack/jamstack-templates)
-   [https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack/serverlessjs](https://bgoonz-blog.netlify.app/docs/netlify-cms-jamstack/serverlessjs)
-   [https://bgoonz-blog.netlify.app/docs/overflow](https://bgoonz-blog.netlify.app/docs/overflow)
-   [https://bgoonz-blog.netlify.app/docs/overflow/emmet-cheat-sheet](https://bgoonz-blog.netlify.app/docs/overflow/emmet-cheat-sheet)
-   [https://bgoonz-blog.netlify.app/docs/overflow/html-spec](https://bgoonz-blog.netlify.app/docs/overflow/html-spec)
-   [https://bgoonz-blog.netlify.app/docs/overflow/http](https://bgoonz-blog.netlify.app/docs/overflow/http)
-   [https://bgoonz-blog.netlify.app/docs/overflow/install](https://bgoonz-blog.netlify.app/docs/overflow/install)
-   [https://bgoonz-blog.netlify.app/docs/overflow/modules](https://bgoonz-blog.netlify.app/docs/overflow/modules)
-   [https://bgoonz-blog.netlify.app/docs/overflow/node-cli-args](https://bgoonz-blog.netlify.app/docs/overflow/node-cli-args)
-   [https://bgoonz-blog.netlify.app/docs/overflow/node-js-language](https://bgoonz-blog.netlify.app/docs/overflow/node-js-language)
-   [https://bgoonz-blog.netlify.app/docs/overflow/node-package-manager](https://bgoonz-blog.netlify.app/docs/overflow/node-package-manager)
-   [https://bgoonz-blog.netlify.app/docs/overflow/node-repl](https://bgoonz-blog.netlify.app/docs/overflow/node-repl)
-   [https://bgoonz-blog.netlify.app/docs/overflow/node-run-cli](https://bgoonz-blog.netlify.app/docs/overflow/node-run-cli)
-   [https://bgoonz-blog.netlify.app/docs/overflow/nodejs](https://bgoonz-blog.netlify.app/docs/overflow/nodejs)
-   [https://bgoonz-blog.netlify.app/docs/overflow/nodevsbrowser](https://bgoonz-blog.netlify.app/docs/overflow/nodevsbrowser)
-   [https://bgoonz-blog.netlify.app/docs/overflow/understanding-firebase](https://bgoonz-blog.netlify.app/docs/overflow/understanding-firebase)
-   [https://bgoonz-blog.netlify.app/docs/overflow/v8](https://bgoonz-blog.netlify.app/docs/overflow/v8)
-   [https://bgoonz-blog.netlify.app/docs/privacy-policy](https://bgoonz-blog.netlify.app/docs/privacy-policy)
-   [https://bgoonz-blog.netlify.app/docs/projects](https://bgoonz-blog.netlify.app/docs/projects)
-   [https://bgoonz-blog.netlify.app/docs/projects/archive](https://bgoonz-blog.netlify.app/docs/projects/archive)
-   [https://bgoonz-blog.netlify.app/docs/projects/archive/embeded-websites](https://bgoonz-blog.netlify.app/docs/projects/archive/embeded-websites)
-   [https://bgoonz-blog.netlify.app/docs/projects/links](https://bgoonz-blog.netlify.app/docs/projects/links)
-   [https://bgoonz-blog.netlify.app/docs/projects/mini-projects](https://bgoonz-blog.netlify.app/docs/projects/mini-projects)
-   [https://bgoonz-blog.netlify.app/docs/projects/mini-projects2](https://bgoonz-blog.netlify.app/docs/projects/mini-projects2)
-   [https://bgoonz-blog.netlify.app/docs/projects/recent](https://bgoonz-blog.netlify.app/docs/projects/recent)
-   [https://bgoonz-blog.netlify.app/docs/python](https://bgoonz-blog.netlify.app/docs/python)
-   [https://bgoonz-blog.netlify.app/docs/python/at-length](https://bgoonz-blog.netlify.app/docs/python/at-length)
-   [https://bgoonz-blog.netlify.app/docs/python/cheat-sheet](https://bgoonz-blog.netlify.app/docs/python/cheat-sheet)
-   [https://bgoonz-blog.netlify.app/docs/python/comprehensive-guide](https://bgoonz-blog.netlify.app/docs/python/comprehensive-guide)
-   [https://bgoonz-blog.netlify.app/docs/python/data-structures-in-python](https://bgoonz-blog.netlify.app/docs/python/data-structures-in-python)
-   [https://bgoonz-blog.netlify.app/docs/python/examples](https://bgoonz-blog.netlify.app/docs/python/examples)
-   [https://bgoonz-blog.netlify.app/docs/python/flow-control](https://bgoonz-blog.netlify.app/docs/python/flow-control)
-   [https://bgoonz-blog.netlify.app/docs/python/functions](https://bgoonz-blog.netlify.app/docs/python/functions)
-   [https://bgoonz-blog.netlify.app/docs/python/google-sheets-api](https://bgoonz-blog.netlify.app/docs/python/google-sheets-api)
-   [https://bgoonz-blog.netlify.app/docs/python/intro-for-js-devs](https://bgoonz-blog.netlify.app/docs/python/intro-for-js-devs)
-   [https://bgoonz-blog.netlify.app/docs/python/python-ds](https://bgoonz-blog.netlify.app/docs/python/python-ds)
-   [https://bgoonz-blog.netlify.app/docs/python/python-quiz](https://bgoonz-blog.netlify.app/docs/python/python-quiz)
-   [https://bgoonz-blog.netlify.app/docs/python/snippets](https://bgoonz-blog.netlify.app/docs/python/snippets)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref](https://bgoonz-blog.netlify.app/docs/quick-ref)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/all-emojis](https://bgoonz-blog.netlify.app/docs/quick-ref/all-emojis)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/create-react-app](https://bgoonz-blog.netlify.app/docs/quick-ref/create-react-app)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/Emmet](https://bgoonz-blog.netlify.app/docs/quick-ref/Emmet)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/fetch](https://bgoonz-blog.netlify.app/docs/quick-ref/fetch)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/general-structured-data-guidelines](https://bgoonz-blog.netlify.app/docs/quick-ref/general-structured-data-guidelines)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/git-bash](https://bgoonz-blog.netlify.app/docs/quick-ref/git-bash)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/git-tricks](https://bgoonz-blog.netlify.app/docs/quick-ref/git-tricks)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/google-firebase](https://bgoonz-blog.netlify.app/docs/quick-ref/google-firebase)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/heroku-error-codes](https://bgoonz-blog.netlify.app/docs/quick-ref/heroku-error-codes)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/installation](https://bgoonz-blog.netlify.app/docs/quick-ref/installation)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/markdown-dropdowns](https://bgoonz-blog.netlify.app/docs/quick-ref/markdown-dropdowns)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/minifiction](https://bgoonz-blog.netlify.app/docs/quick-ref/minifiction)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/new-repo-instructions](https://bgoonz-blog.netlify.app/docs/quick-ref/new-repo-instructions)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/pull-request-rubric](https://bgoonz-blog.netlify.app/docs/quick-ref/pull-request-rubric)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/python-builtin-functions](https://bgoonz-blog.netlify.app/docs/quick-ref/python-builtin-functions)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/quick-links](https://bgoonz-blog.netlify.app/docs/quick-ref/quick-links)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/topRepos](https://bgoonz-blog.netlify.app/docs/quick-ref/topRepos)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/understanding-path](https://bgoonz-blog.netlify.app/docs/quick-ref/understanding-path)
-   [https://bgoonz-blog.netlify.app/docs/quick-ref/vscode-themes](https://bgoonz-blog.netlify.app/docs/quick-ref/vscode-themes)
-   [https://bgoonz-blog.netlify.app/docs/react](https://bgoonz-blog.netlify.app/docs/react)
-   [https://bgoonz-blog.netlify.app/docs/react/accessibility](https://bgoonz-blog.netlify.app/docs/react/accessibility)
-   [https://bgoonz-blog.netlify.app/docs/react/ajax-n-apis](https://bgoonz-blog.netlify.app/docs/react/ajax-n-apis)
-   [https://bgoonz-blog.netlify.app/docs/react/cheatsheet](https://bgoonz-blog.netlify.app/docs/react/cheatsheet)
-   [https://bgoonz-blog.netlify.app/docs/react/complete-react](https://bgoonz-blog.netlify.app/docs/react/complete-react)
-   [https://bgoonz-blog.netlify.app/docs/react/createReactApp](https://bgoonz-blog.netlify.app/docs/react/createReactApp)
-   [https://bgoonz-blog.netlify.app/docs/react/demo](https://bgoonz-blog.netlify.app/docs/react/demo)
-   [https://bgoonz-blog.netlify.app/docs/react/dont-use-index-as-keys](https://bgoonz-blog.netlify.app/docs/react/dont-use-index-as-keys)
-   [https://bgoonz-blog.netlify.app/docs/react/higher-order-components](https://bgoonz-blog.netlify.app/docs/react/higher-order-components)
-   [https://bgoonz-blog.netlify.app/docs/react/jsx](https://bgoonz-blog.netlify.app/docs/react/jsx)
-   [https://bgoonz-blog.netlify.app/docs/react/quiz](https://bgoonz-blog.netlify.app/docs/react/quiz)
-   [https://bgoonz-blog.netlify.app/docs/react/react-docs](https://bgoonz-blog.netlify.app/docs/react/react-docs)
-   [https://bgoonz-blog.netlify.app/docs/react/react-in-depth](https://bgoonz-blog.netlify.app/docs/react/react-in-depth)
-   [https://bgoonz-blog.netlify.app/docs/react/react-patterns-by-usecase](https://bgoonz-blog.netlify.app/docs/react/react-patterns-by-usecase)
-   [https://bgoonz-blog.netlify.app/docs/react/react-router](https://bgoonz-blog.netlify.app/docs/react/react-router)
-   [https://bgoonz-blog.netlify.app/docs/react/react-study-guide](https://bgoonz-blog.netlify.app/docs/react/react-study-guide)
-   [https://bgoonz-blog.netlify.app/docs/react/react2](https://bgoonz-blog.netlify.app/docs/react/react2)
-   [https://bgoonz-blog.netlify.app/docs/react/render-elements](https://bgoonz-blog.netlify.app/docs/react/render-elements)
-   [https://bgoonz-blog.netlify.app/docs/readme](https://bgoonz-blog.netlify.app/docs/readme)
-   [https://bgoonz-blog.netlify.app/docs/reference](https://bgoonz-blog.netlify.app/docs/reference)
-   [https://bgoonz-blog.netlify.app/docs/reference/art-of-command-line](https://bgoonz-blog.netlify.app/docs/reference/art-of-command-line)
-   [https://bgoonz-blog.netlify.app/docs/reference/awesome-lists](https://bgoonz-blog.netlify.app/docs/reference/awesome-lists)
-   [https://bgoonz-blog.netlify.app/docs/reference/awesome-nodejs](https://bgoonz-blog.netlify.app/docs/reference/awesome-nodejs)
-   [https://bgoonz-blog.netlify.app/docs/reference/awesome-static](https://bgoonz-blog.netlify.app/docs/reference/awesome-static)
-   [https://bgoonz-blog.netlify.app/docs/reference/bash-commands](https://bgoonz-blog.netlify.app/docs/reference/bash-commands)
-   [https://bgoonz-blog.netlify.app/docs/reference/bookmarks](https://bgoonz-blog.netlify.app/docs/reference/bookmarks)
-   [https://bgoonz-blog.netlify.app/docs/reference/embed-the-web](https://bgoonz-blog.netlify.app/docs/reference/embed-the-web)
-   [https://bgoonz-blog.netlify.app/docs/reference/github-resources](https://bgoonz-blog.netlify.app/docs/reference/github-resources)
-   [https://bgoonz-blog.netlify.app/docs/reference/github-search](https://bgoonz-blog.netlify.app/docs/reference/github-search)
-   [https://bgoonz-blog.netlify.app/docs/reference/google-cloud](https://bgoonz-blog.netlify.app/docs/reference/google-cloud)
-   [https://bgoonz-blog.netlify.app/docs/reference/how-2-reinstall-npm](https://bgoonz-blog.netlify.app/docs/reference/how-2-reinstall-npm)
-   [https://bgoonz-blog.netlify.app/docs/reference/how-to-kill-a-process](https://bgoonz-blog.netlify.app/docs/reference/how-to-kill-a-process)
-   [https://bgoonz-blog.netlify.app/docs/reference/installing-node](https://bgoonz-blog.netlify.app/docs/reference/installing-node)
-   [https://bgoonz-blog.netlify.app/docs/reference/intro-to-nodejs](https://bgoonz-blog.netlify.app/docs/reference/intro-to-nodejs)
-   [https://bgoonz-blog.netlify.app/docs/reference/markdown-styleguide](https://bgoonz-blog.netlify.app/docs/reference/markdown-styleguide)
-   [https://bgoonz-blog.netlify.app/docs/reference/notes-template](https://bgoonz-blog.netlify.app/docs/reference/notes-template)
-   [https://bgoonz-blog.netlify.app/docs/reference/psql](https://bgoonz-blog.netlify.app/docs/reference/psql)
-   [https://bgoonz-blog.netlify.app/docs/reference/resources](https://bgoonz-blog.netlify.app/docs/reference/resources)
-   [https://bgoonz-blog.netlify.app/docs/reference/vscode](https://bgoonz-blog.netlify.app/docs/reference/vscode)
-   [https://bgoonz-blog.netlify.app/docs/reference/web-api's](https://bgoonz-blog.netlify.app/docs/reference/web-api's)
-   [https://bgoonz-blog.netlify.app/docs/showcase](https://bgoonz-blog.netlify.app/docs/showcase)
-   [https://bgoonz-blog.netlify.app/docs/sitemap](https://bgoonz-blog.netlify.app/docs/sitemap)
-   [https://bgoonz-blog.netlify.app/docs/tips](https://bgoonz-blog.netlify.app/docs/tips)
-   [https://bgoonz-blog.netlify.app/docs/tips/7-tips-to-become-a-better-web-developer](https://bgoonz-blog.netlify.app/docs/tips/7-tips-to-become-a-better-web-developer)
-   [https://bgoonz-blog.netlify.app/docs/tips/decrement](https://bgoonz-blog.netlify.app/docs/tips/decrement)
-   [https://bgoonz-blog.netlify.app/docs/tips/firebase-hosting](https://bgoonz-blog.netlify.app/docs/tips/firebase-hosting)
-   [https://bgoonz-blog.netlify.app/docs/tips/httrack](https://bgoonz-blog.netlify.app/docs/tips/httrack)
-   [https://bgoonz-blog.netlify.app/docs/tips/regex-tips](https://bgoonz-blog.netlify.app/docs/tips/regex-tips)
-   [https://bgoonz-blog.netlify.app/docs/tips/storybook](https://bgoonz-blog.netlify.app/docs/tips/storybook)
-   [https://bgoonz-blog.netlify.app/docs/tips/top-10-money-tips](https://bgoonz-blog.netlify.app/docs/tips/top-10-money-tips)
-   [https://bgoonz-blog.netlify.app/docs/tips/ubuntu-setup](https://bgoonz-blog.netlify.app/docs/tips/ubuntu-setup)
-   [https://bgoonz-blog.netlify.app/docs/tips/web-accessibility](https://bgoonz-blog.netlify.app/docs/tips/web-accessibility)
-   [https://bgoonz-blog.netlify.app/docs/tools](https://bgoonz-blog.netlify.app/docs/tools)
-   [https://bgoonz-blog.netlify.app/docs/tools/dev-utilities](https://bgoonz-blog.netlify.app/docs/tools/dev-utilities)
-   [https://bgoonz-blog.netlify.app/docs/tools/markdown-html](https://bgoonz-blog.netlify.app/docs/tools/markdown-html)
-   [https://bgoonz-blog.netlify.app/docs/tutorials](https://bgoonz-blog.netlify.app/docs/tutorials)
-   [https://bgoonz-blog.netlify.app/docs/tutorials/bash](https://bgoonz-blog.netlify.app/docs/tutorials/bash)
-   [https://bgoonz-blog.netlify.app/docs/tutorials/bash-commands-my](https://bgoonz-blog.netlify.app/docs/tutorials/bash-commands-my)
-   [https://bgoonz-blog.netlify.app/docs/tutorials/get-file-extension](https://bgoonz-blog.netlify.app/docs/tutorials/get-file-extension)
-   [https://bgoonz-blog.netlify.app/docs/tutorials/how-2-ubuntu](https://bgoonz-blog.netlify.app/docs/tutorials/how-2-ubuntu)
-   [https://bgoonz-blog.netlify.app/docs/tutorials/psql-setup](https://bgoonz-blog.netlify.app/docs/tutorials/psql-setup)
-   [https://bgoonz-blog.netlify.app/docs/tutorials/webdev-review](https://bgoonz-blog.netlify.app/docs/tutorials/webdev-review)
-   [https://bgoonz-blog.netlify.app/docs/typescript](https://bgoonz-blog.netlify.app/docs/typescript)
-   [https://bgoonz-blog.netlify.app/interview-questions-js](https://bgoonz-blog.netlify.app/interview-questions-js)
-   [https://bgoonz-blog.netlify.app/readme](https://bgoonz-blog.netlify.app/readme)
-   [https://bgoonz-blog.netlify.app/showcase](https://bgoonz-blog.netlify.app/showcase)

</details>
