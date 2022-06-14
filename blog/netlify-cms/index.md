This app works best with JavaScript enabled.

[![webdevhub logo](https://d33wubrfki0l68.cloudfront.net/71199c39f8515c2ec6a7db98b837a0f39887ecc3/5558d/images/logo-circle.png)](/)

<span class="screen-reader-text">Open Menu</span><span class="icon-close" aria-hidden="true"></span>

- <a href="/docs/sitemap" class="button">Navigation</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="/docs" class="button">Docs</a>
  - <a href="/showcase" class="button">Showcase</a>
  - <a href="/docs/faq/contact" class="button">Contact!</a>
  - <a href="/docs/python/python-ds" class="button">Python</a>

- <a href="/blog/" class="button">Blog</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://bgoonz.blogspot.com/" class="button">Blog-Post-Archive</a>
  - <a href="https://blog-w-comments.vercel.app/" class="button">Top Blog Posts</a>
  - <a href="/docs/articles/ds-algo-overview/" class="button">ds-algo</a>
  - <a href="/blog/platform-docs/" class="button">platform docs</a>
  - <a href="/docs/articles/nodejs/" class="button">nodejs</a>
  - <a href="/blogWcomments/" class="button">Blog w Comments</a>

- <a href="https://github.com/bgoonz/UsefulResourceRepo2.0" class="button">Archive</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://bryanguner.medium.com/" class="button">Medium Articles</a>
  - <a href="https://github.com/bgoonz/Learning-Assets" class="button">Resource-Archive-Server</a>
  - <a href="#" class="button">Bootcamp Resources</a>
  - <a href="https://web-dev-resource-hub.netlify.app/" class="button">OG-Blog</a>
  - <a href="/docs/gallery" class="button">Gallery</a>
  - <a href="/docs" class="button">Top Repos</a>

- <a href="/docs/audio/audio" class="button">Audio</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="/docs/audio/audio" class="button">DTW-guitar-effects</a>
  - <a href="/docs/audio/dfft" class="button">Fast Fourier Transform</a>

- <a href="https://project-portfolio42.netlify.app/" class="button">Projects</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://potluck-landing.netlify.app/" class="button">Potluck Planner</a>
  - <a href="https://meditate42app.netlify.app/" class="button">Meditation App</a>
  - <a href="https://panoramic-eggplant-452e4.netlify.app/" class="button">WebAudioLab</a>
  - <a href="https://bgoonz.github.io/searchAwesome/" class="button">SearchAwesome</a>
  - <a href="https://bg-portfolio.netlify.app/" class="button">Condensed -Portfolio</a>

- <a href="https://bgoonz-blog-v3-0.netlify.app/" class="button">External Nav</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://friendly-panda-b61ab.netlify.app/" class="button">Embeds Blog</a>
  - <a href="https://bgoonz-blog-v3-0.netlify.app/" class="button">alt-blogs</a>
  - <a href="https://bgoonz-games.netlify.app/" class="button">Games</a>
  - <a href="https://bgoonz-blog-v3-0.netlify.app/" class="button">Blog Backup</a>
  - <a href="https://bgoonz-cv.netlify.app/" class="button">Cover Letter</a>
  - <a href="https://project-portfolio42.netlify.app/" class="button">Project Centric</a>
  - <a href="https://web-dev-hub.com/" class="button">Wordpress Blog</a>
  - <a href="https://project-portfolio42.netlify.app/" class="button">Project Portfolio Gallery</a>
  - <a href="https://bgoonz.github.io/github-stats-website/" class="button">github-stats-website</a>

- <a href="/docs/tools" class="button">Tools</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>
  - <a href="https://githtmlpreview.netlify.app/" class="button">Github HTML Previewer</a>
  - <a href="https://devtools42.netlify.app/" class="button">Text Tools</a>
  - <a href="https://ternary42.netlify.app/" class="button">Ternary 2 If Else</a>
  - <a href="https://determined-dijkstra-ee7390.netlify.app/" class="button">Job Search Resources</a>
  - <a href="https://github.com/bgoonz/web-dev-setup-checker" class="button">Setup Checker</a>
  - <a href="https://potluck-landing.netlify.app/" class="button">PotluckPlanner</a>
  - <a href="https://web-dev-interview-prep-quiz-website.netlify.app/" class="button">WebDev Quizzes</a>
  - <span class="screen-reader-text">Github-Advanced-Search</span>

<span class="screen-reader-text">Close Menu</span><span class="icon-menu" aria-hidden="true"></span>

September 30, 2021

# Netlify CMS Reference Sheet

lorem-ipsum

# Overview

Netlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

At its core, Netlify CMS is an open-source React app that acts as a wrapper for the Git workflow, using the GitHub, GitLab, or Bitbucket API. This provides many advantages, including:

- **Fast, web-based UI:** With rich-text editing, real-time preview, and drag-and-drop media uploads.
- **Platform agnostic:** Works with most static site generators.
- **Easy installation:** Add two files to your site and hook up the backend by including those files in your build process or linking to our Content Delivery Network (CDN).
- **Modern authentication:** Using GitHub, GitLab, or Bitbucket and JSON web tokens.
- **Flexible content types:** Specify an unlimited number of content types with custom fields.
- **Fully extensible:** Create custom-styled previews, UI widgets, and editor plugins.

## Netlify CMS vs. Netlify

[Netlify.com](https://www.netlify.com/) is a platform you can use to automatically build, deploy, serve, and manage your frontend sites and web apps. It also provides a variety of other features like form processing, serverless functions, and split testing. Not all Netlify sites use Netlify CMS, and not all sites using Netlify CMS are on Netlify.

The folks at Netlify created Netlify CMS to fill a gap in the static site generation pipeline. There were some great proprietary headless CMS options, but no real contenders that were open source and extensible—that could turn into a community-built ecosystem like WordPress or Drupal. For that reason, Netlify CMS is *made* to be community-driven, and has never been locked to the Netlify platform (despite the name).

With this in mind, you can:

- Use Netlify CMS without Netlify and deploy your site where you always have, hooking up your own CI, site hosting, CDN, etc.
- Use Netlify without Netlify CMS and edit your static site in your code editor.
- Or, use them together and have a fully-working CMS-enabled site with [one click](https://www.netlifycms.org/docs/start-with-a-template/)!

If you hook up Netlify CMS to your website, you're basically adding a tool for content editors to make commits to your site repository without touching code or learning Git.

- Add to Your Site**These generatorsstore static files in**Jekyll, GitBook/ (project root)Hugo, Gatsby, Nuxt, Gridsome, Zola, Sapper/staticNext/publicHexo, Middleman, Jigsaw/sourceSpike/viewsWyam/inputPelican/contentVuePress/.vuepress/publicElmstatic/\_site11ty/\_sitepreact-cli/src/staticnamePost type identifier, used in routes. Must be unique.labelWhat the admin UI calls the post type.folderWhere files of this type are stored, relative to the repo root.createSet to true to allow users to create new files in this collection.slugTemplate for filenames. {{year}}, {{month}}, and {{day}} pulls from the post's date field or save date. {{slug}} is a url-safe version of the post's title. Default is simply {{slug}}.fieldsFields listed here are shown as fields in the content editor, then saved as front matter at the beginning of the document (except for body, which follows the front matter). Each field contains the following properties:

You can adapt Netlify CMS to a wide variety of projects. It works with any content written in markdown, JSON, YAML, or TOML files, stored in a repo on [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), or [Bitbucket](https://bitbucket.org/). You can also create your own custom backend.

This tutorial guides you through the steps for adding Netlify CMS to a site that's built with a common [static site generator](https://www.staticgen.com/), like Jekyll, Hugo, Hexo, or Gatsby. Alternatively, you can [start from a template](https://www.netlifycms.org/docs/start-with-a-template) or dive right into [configuration options](https://www.netlifycms.org/docs/configuration-options).

## App File Structure

A static admin folder contains all Netlify CMS files, stored at the root of your published site. Where you store this folder in the source files depends on your static site generator. Here's the static file location for a few of the most popular static site generators:

If your generator isn't listed here, you can check its documentation, or as a shortcut, look in your project for a css or images folder. The contents of folders like that are usually processed as static files, so it's likely you can store your admin folder next to those. (When you've found the location, feel free to add it to these docs by [filing a pull request](https://github.com/netlify/netlify-cms/blob/master/CONTRIBUTING.md#pull-requests)!)

Inside the admin folder, you'll create two files:

The first file, admin/index.html, is the entry point for the Netlify CMS admin interface. This means that users navigate to yoursite.com/admin/ to access it. On the code side, it's a basic HTML starter page that loads the Netlify CMS JavaScript file. The second file, admin/config.yml, is the heart of your Netlify CMS installation, and a bit more complex. The [Configuration](https://www.netlifycms.org/docs/add-to-your-site/#configuration) section covers the details.

In this example, we pull the admin/index.html file from a public CDN.

In the code above the script is loaded from the unpkg CDN. Should there be any issue, jsDelivr can be used as an alternative source. Simply set the src to <https://cdn.jsdelivr.net/npm/netlify-cms@%5E2.0.0/dist/netlify-cms.js>

### Installing with npm

You can also use Netlify CMS as an npm module. Wherever you import Netlify CMS, it automatically runs, taking over the current page. Make sure the script that imports it only runs on your CMS page. First install the package and save it to your project:

Then import it (assuming your project has tooling for imports):

## Configuration

Configuration is different for every site, so we'll break it down into parts. Add all the code snippets in this section to your admin/config.yml file.

### Backend

We're using [Netlify](https://www.netlify.com/) for our hosting and authentication in this tutorial, so backend configuration is fairly straightforward.

For GitHub and GitLab repositories, you can start your Netlify CMS config.yml file with these lines:

*(For Bitbucket repositories, use the \_\[*Bitbucket backend*\](<https://www.netlifycms.org/docs/bitbucket-backend>)* instructions instead.)\_

The configuration above specifies your backend protocol and your publication branch. Git Gateway is an open source API that acts as a proxy between authenticated users of your site and your site repo. (We'll get to the details of that in the [Authentication section](https://www.netlifycms.org/docs/add-to-your-site/#authentication) below.) If you leave out the branch declaration, it defaults to master.

### Editorial Workflow

**Note:** Editorial workflow works with GitHub repositories, and support for GitLab and Bitbucket is [in beta](https://www.netlifycms.org/docs/beta-features/#gitlab-and-bitbucket-editorial-workflow-support).

By default, saving a post in the CMS interface pushes a commit directly to the publication branch specified in backend. However, you also have the option to enable the [Editorial Workflow](https://www.netlifycms.org/docs/configuration-options/#publish-mode), which adds an interface for drafting, reviewing, and approving posts. To do this, add the following line to your Netlify CMS config.yml:

### Media and Public Folders

Netlify CMS allows users to upload images directly within the editor. For this to work, the CMS needs to know where to save them. If you already have an images folder in your project, you could use its path, possibly creating an uploads sub-folder, for example:

If you're creating a new folder for uploaded media, you'll need to know where your static site generator expects static files. You can refer to the paths outlined above in [App File Structure](https://www.netlifycms.org/docs/add-to-your-site/#app-file-structure), and put your media folder in the same location where you put the admin folder.

Note that themedia_folder file path is relative to the project root, so the example above would work for Jekyll, GitBook, or any other generator that stores static files at the project root. However, it would not work for Hugo, Hexo, Middleman or others that store static files in a subfolder. Here's an example that could work for a Hugo site:

The configuration above adds a new setting, public*folder. While media*folder specifies where uploaded files are saved in the repo, public_folder indicates where they are found in the published site. Image src attributes use this path, which is relative to the file where it's called. For this reason, we usually start the path at the site root, using the opening /.

*If public*folder is not set, Netlify CMS defaults to the same value as media*folder, adding an opening / if one is not included.*

### Collections

Collections define the structure for the different content types on your static site. Since every site is different, the collections settings differ greatly from one site to the next.

Let's say your site has a blog, with the posts stored in _posts/blog, and files saved in a date-title format, like 1999-12-31-lets-party.md. Each post begins with settings in yaml-formatted front matter, like so:

Given this example, our collections settings would look like this in your NetlifyCMS config.yml file:

Let's break that down:

- label: Field label in the editor UI.
- name: Field name in the document front matter.
- widget: Determines UI style and value data type (details below).
- default (optional): Sets a default value for the field.

As described above, the widget property specifies a built-in or custom UI widget for a given field. When a content editor enters a value into a widget, that value is saved in the document front matter as the value for the name specified for that field. A full listing of available widgets can be found in the [Widgets doc](https://www.netlifycms.org/docs/widgets).

Based on this example, you can go through the post types in your site and add the appropriate settings to your Netlify CMS config.yml file. Each post type should be listed as a separate node under the collections field. See the [Collections reference doc](https://www.netlifycms.org/docs/configuration-options/#collections) for more configuration options.

### Filter

The entries for any collection can be filtered based on the value of a single field. The example collection below only shows post entries with the value en in the language field.

## Authentication

Now that you have your Netlify CMS files in place and configured, all that's left is to enable authentication. We're using the [Netlify](https://www.netlify.com/) platform here because it's one of the quickest ways to get started, but you can learn about other authentication options in the [Backends](https://www.netlifycms.org/docs/backends-overview) doc.

### Setup on Netlify

Netlify offers a built-in authentication service called Identity. In order to use it, connect your site repo with Netlify. Netlify has published a general [Step-by-Step Guide](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/) for this, along with detailed guides for many popular static site generators, including [Jekyll](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/), [Hugo](https://www.netlify.com/blog/2016/09/21/a-step-by-step-guide-victor-hugo-on-netlify/), [Hexo](https://www.netlify.com/blog/2015/10/26/a-step-by-step-guide-hexo-on-netlify/), [Middleman](https://www.netlify.com/blog/2015/10/01/a-step-by-step-guide-middleman-on-netlify/), [Gatsby](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/), and more.

### Enable Identity and Git Gateway

Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site without requiring them to have an account with your Git host or commit access on your repo. From your site dashboard on Netlify:

1.  Go to **Settings &gt; Identity**, and select **Enable Identity service**.
2.  Under **Registration preferences**, select **Open** or **Invite only**. In most cases, you want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.
3.  If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under **External providers**.
4.  Scroll down to **Services &gt; Git Gateway**, and click **Enable Git Gateway**. This authenticates with your Git host and generates an API access token. In this case, we're leaving the **Roles** field blank, which means any logged in user may access the CMS. For information on changing this, check the [Netlify Identity documentation](https://www.netlify.com/docs/identity/).

### Add the Netlify Identity Widget

With the backend set to handle authentication, now you need a frontend interface to connect to it. The open source Netlify Identity Widget is a drop-in widget made for just this purpose. To include the widget in your site, add the following script tag in two places:

Add this to the &lt;head&gt; of your CMS index page at /admin/index.html, as well as the &lt;head&gt; of your site's main index page. Depending on how your site generator is set up, this may mean you need to add it to the default template, or to a "partial" or "include" template. If you can find where the site stylesheet is linked, that's probably the right place. Alternatively, you can include the script in your site using Netlify's [Script Injection](https://www.netlify.com/docs/inject-analytics-snippets/) feature.

When a user logs in with the Netlify Identity widget, an access token directs to the site homepage. In order to complete the login and get back to the CMS, redirect the user back to the /admin/ path. To do this, add the following script before the closing body tag of your site's main index page:

Note: This example script requires modern JavaScript and does not work on IE11. For legacy browser support, use function expressions (function () {}) in place of the arrow functions (() =&gt; {}), or use a transpiler such as [Babel](https://babeljs.io/).

## Accessing the CMS

Your site CMS is now fully configured and ready for login!

If you set your registration preference to "Invite only," invite yourself (and anyone else you choose) as a site user. To do this, select the **Identity** tab from your site dashboard, and then select the **Invite users** button. Invited users receive an email invitation with a confirmation link. Clicking the link will take you to your site with a login prompt.

If you left your site registration open, or for return visits after confirming an email invitation, access your site's CMS at yoursite.com/admin/.

**Note:** No matter where you access Netlify CMS — whether running locally, in a staging environment, or in your published site — it always fetches and commits files in your hosted repository (for example, on GitHub), on the branch you configured in your Netlify CMS config.yml file. This means that content fetched in the admin UI matches the content in the repository, which may be different from your locally running site. It also means that content saved using the admin UI saves directly to the hosted repository, even if you're running the UI locally or in staging.

Examples

Do you have a great, open source example? Submit a pull request to this page!

Example Tools Type Source More info

[Gatsby & Netlify CMS Meetup Group Template](https://github.com/robertcoopercode/gatsby-netlify-cms) Gatsby demo [robertcoopercode/gatsby-netlify-cms](https://github.com/robertcoopercode/gatsby-netlify-cms)[blog post](https://blog.logrocket.com/gatsby-netlify-cms-a-perfect-pairing-d50d59d16f67)

[This Developing Journey](https://briandouglas.me/) middleman blog [bdougie/blog](https://github.com/bdougie/blog)[blog post](https://www.netlify.com/blog/2017/04/20/creating-a-blog-with-middleman-and-netlify-cms/)

[Jamstack Recipes](https://jamstack-cms.netlify.com/) Hugo, Azure demo [hlaueriksson/jamstack-cms](https://github.com/hlaueriksson/jamstack-cms)[blog post](http://conductofcode.io/post/managing-content-for-a-jamstack-site-with-netlify-cms/)

[Bael](https://bael-theme.jake101.com/) Vue, Nuxt blog [jake-101/bael-template](https://github.com/jake-101/bael-template)[blog post](https://bael-theme.jake101.com/blog/2018-06-19-top-10-reasons-why)

[Forest Garden Wales](https://www.forestgarden.wales/) Hugo blog [forestgardenwales/forestgarden.wales](https://github.com/forestgardenwales/forestgarden.wales)[blog post](https://www.forestgarden.wales/blog/now-using-netlify-cms/)

[Jekyll Demo](https://jekyll-netlifycms.netlify.com/) Jekyll, Gulp demo [NickStees/jekyll-cms](https://github.com/NickStees/jekyll-cms)[read me](https://github.com/NickStees/jekyll-cms)

[Jekyll feat Alembic Theme Demo](https://alembic-kit-demo.netlify.com/) Jekyll demo [DavidDarnes/alembic-netlifycms-kit](https://github.com/daviddarnes/alembic-netlifycms-kit)[read me](https://github.com/daviddarnes/alembic-netlifycms-kit#starter-kit-for-alembic-with-netlify-cms)

[Eleventy Starter Project](https://eleventy-netlify-boilerplate.netlify.com/) Eleventy demo [danurbanowicz/eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate)[read me](https://github.com/danurbanowicz/eleventy-netlify-boilerplate)

[YellowCake - Complete website with blog](https://yellowcake.netlify.com/) Gatsby, Netlify-CMS, Uploadcare demo [thriveweb/yellowcake](https://github.com/thriveweb/yellowcake/)[blog post](https://thriveweb.com.au/the-lab/yellowcake-gatsby-react-js-starter-project/)

[Vue.js - Nuxt.js Starter Project](https://github.com/renestalder/nuxt-netlify-cms-starter-template) Vue, Nuxt demo [renestalder/nuxt-netlify-cms-starter-template](https://github.com/renestalder/nuxt-netlify-cms-starter-template)[read me](https://github.com/renestalder/nuxt-netlify-cms-starter-template)

[Hexo Demo](https://hexocms.imst.xyz/) Hexo demo [DemoMacro/Hexo-NetlifyCMS](https://github.com/DemoMacro/Hexo-NetlifyCMS)[read me](https://github.com/DemoMacro/Hexo-NetlifyCMS)

[Gitbook Demo](https://gitbook.imst.xyz/) Gitbook demo [DemoMacro/Gitbook-NetlifyCMS](https://github.com/DemoMacro/Gitbook-NetlifyCMS)[read me](https://github.com/DemoMacro/Gitbook-NetlifyCMS)

[VuePress Demo](https://vuepress.imst.xyz/) VuePress demo [DemoMacro/VuePress-NetlifyCMS](https://github.com/DemoMacro/VuePress-NetlifyCMS)[read me](https://github.com/DemoMacro/VuePress-NetlifyCMS)

[Jigsaw Blog Starter Template Demo](https://jigsaw-blog-netlify-netlifycms-template.netlify.com/) Jigsaw demo [erickpatrick/jigsaw-blog-netlify-netlifycms-template](https://github.com/erickpatrick/jigsaw-blog-netlify-netlifycms-template)[blog post](https://www.erickpatrick.net/blog/augmenting-tightenco-jigsaw-with-netlifycms/)

[Nuxt & NetlifyCMS Boilerplate](https://nuxt-netlifycms-boilerplate.netlify.com/) Vue, Nuxt demo [tylermercer/nuxt-netlifycms-boilerplate](https://github.com/tylermercer/nuxt-netlifycms-boilerplate)[read me](https://github.com/tylermercer/nuxt-netlifycms-boilerplate)

[Next.js demo](https://netlifycms-nextjs.netlify.com/) Next.js blog [masives/netlifycms-nextjs](https://github.com/masives/netlifycms-nextjs)[read me](https://github.com/masives/netlifycms-nextjs)

[Delog - Jamstack Blog with Netlify CMS](https://delog-w3layouts.netlify.com/) Gatsby, Netlify-CMS demo [W3Layouts/gatsby-starter-delog](https://github.com/W3Layouts/gatsby-starter-delog)[blog post](https://w3layouts.com/articles/delog-gatsby-starter-netlify-cms/)

[Netlify CMS template for Gridsome](https://netlifycms-gridsome.suits.at/) Gridsome, Vue demo [suits-at/netlifycms-gridsome](https://github.com/suits-at/netlifycms-gridsome)[read me](https://github.com/suits-at/netlifycms-gridsome)

[Next.js blogging template for Netlify](https://nextjs-netlify-blog-template.netlify.app/) Next.js, Netlify blog [wutali/nextjs-netlify-blog-template](https://github.com/wutali/nextjs-netlify-blog-template)[read me](https://github.com/wutali/nextjs-netlify-blog-template)

[Netlify CMS and OAuth server on AWS](https://github.com/pulumi/examples/tree/master/aws-ts-netlify-cms-and-oauth) Netlify, Pulumi, AWS blog [pulumi/examples/aws-ts-netlify-cms-and-oauth](https://github.com/pulumi/examples/tree/master/aws-ts-netlify-cms-and-oauth)[blog post](https://www.pulumi.com/blog/deploying-the-infrastructure-of-oauth-server-for-cms-app/)

[Eleventy Starter Boilerplate](https://creativedesignsguru.com/demo/Eleventy-Starter-Boilerplate/eleventy-starter-boilerplate-presentation/) Eleventy, Netlify demo [ixartz/Eleventy-Starter-Boilerplate](https://github.com/ixartz/Eleventy-Starter-Boilerplate)[read me](https://github.com/ixartz/Eleventy-Starter-Boilerplate)

[Nuxt, Tailwind & NetlifyCMS Boilerplate](https://ntn-boilerplate.netlify.app/) Vue, Nuxt demo [Knogobert/ntn-boilerplate](https://github.com/Knogobert/ntn-boilerplate)[read me](https://github.com/Knogobert/ntn-boilerplate#readme)

[Gatsby & Netlify CMS Personal Portfolio](https://kind-mestorf-5a2bc0.netlify.com/) Gatsby portfolio [EarlGeorge/React-Gatsby](https://github.com/EarlGeorge/React-Gatsby)[read me](https://github.com/EarlGeorge/React-Gatsby/blob/master/README.md)

# Gatsby

This guide will help you get started using Netlify CMS and Gatsby.

To get up and running with Gatsby, you’ll need to have [Node.js](https://nodejs.org/) installed on your computer. *Note: Gatsby's minimum supported Node.js version is Node 8.*

## Create a new Gatsby site

Let's create a new site using the default Gatsby Starter Blog. Run the following commands in the terminal, in the folder where you'd like to create the blog:

## Get to know Gatsby

In your favorite code editor, open up the code generated for your "Gatsby Starter Blog" site, and take a look at the content directory.

You will see that there are multiple Markdown files that represent blog posts. Open one .md file and you will see something like this:

We can see above that each blog post has a title, a date, a description and a body. Now, let's recreate this using Netlify CMS.

## Add Netlify CMS to your site

First let's install some dependencies. We'll need netlify-cms-app and gatsby-plugin-netlify-cms. Run the following command in the terminal at the root of your site:

### Configuration

For the purpose of this guide we will deploy to Netlify from a GitHub repository which requires the minimum configuration.

Create a config.yml file in the directory structure you see below:

In your config.yml file paste the following configuration:

**Note:** The above configuration allows assets to be stored relative to their content. Therefore posts would be stored in the format below as it is in gatsby-starter-blog.

Finally, add the plugin to your gatsby-config.js.

### Push to GitHub

It's now time to commit your changes and push to GitHub. The Gatsby starter initializes Git automatically for you, so you only need to do:

### Add your repo to Netlify

Go to Netlify and select 'New Site from Git'. Select GitHub and the repository you just pushed to. Click Configure Netlify on GitHub and give access to your repository. Finish the setup by clicking Deploy Site. Netlify will begin reading your repository and starting building your project.

### Enable Identity and Git Gateway

Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site without requiring them to have an account with your Git host or commit access on your repo. From your site dashboard on Netlify:

1.  Go to **Settings &gt; Identity**, and select **Enable Identity service**.
2.  Under **Registration preferences**, select **Open** or **Invite only**. In most cases, you want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.
3.  If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under **External providers**.
4.  Scroll down to **Services &gt; Git Gateway**, and click **Enable Git Gateway**. This authenticates with your Git host and generates an API access token. In this case, we're leaving the **Roles** field blank, which means any logged in user may access the CMS. For information on changing this, check the [Netlify Identity documentation](https://www.netlify.com/docs/identity/).

## Start publishing

It's time to create your first blog post. Login to your site's /admin/ page and create a new post by clicking New Blog. Add a title, a date and some text. When you click Publish, a new commit will be created in your GitHub repo with this format Create Blog “year-month-date-title”.

Then Netlify will detect that there was a commit in your repo, and will start rebuilding your project. When your project is deployed you'll be able to see the post you created.

### Cleanup

It is now safe to remove the default Gatsby blog posts.

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><table><tbody><tr class="odd"><td style="text-align: left;"><a href="https://search.freefind.com/siteindex.html?si=14588965">index</a></td><td style="text-align: center;"><a href="https://search.freefind.com/find.html?si=14588965&amp;m=0&amp;p=0">sitemap</a></td><td style="text-align: right;"><a href="https://search.freefind.com/find.html?si=14588965&amp;pid=a">advanced</a></td></tr></tbody></table></td></tr><tr class="even"><td><a href="https://www.freefind.com">search engine</a><a href="https://www.freefind.com">by<span style="color:transparent">freefind</span></a></td></tr></tbody></table>

<span class="copyright">@bgoonz on almost every platform</span><a href="https://bryanguner.medium.com/" class="button">Medium</a><a href="https://optimistic-lewin-8586ae.netlify.app/blm.zip" class="button">BLM</a>

<span class="screen-reader-text">Twitter</span>

<span class="screen-reader-text">LinkedIn</span>

<span class="screen-reader-text">GitHub</span>

<span class="screen-reader-text">Youtube</span>

<span class="screen-reader-text">Instagram</span>

<span class="screen-reader-text">dev.to</span>

Save to PDF

<span class="screen-reader-text">Back to top</span>

![](https://queue.simpleanalyticscdn.com/noscript.gif)

#### [<span style="color:gray;">Current local time in</span> New York City, United States](https://www.zeitverschiebung.net/en/city/5128581)
