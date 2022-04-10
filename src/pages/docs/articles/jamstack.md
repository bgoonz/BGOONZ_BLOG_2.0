---
title: Jamstack
weight: 0
excerpt: Websites are served as static HTML files. These can be generated from source files, such as Markdown, using a Static Site Generator.
seo:
    title: ''
    description: 'Websites are served as static HTML files. These can be generated from source files, such as Markdown, using a Static Site Generator.'
    robots: []
    extra: []
template: docs
---


## What is Jamstack

---

### History

"Jamstack" was originally cased as "JAMstack" where "JAM" stood for JavaScript, API & Markup.

> "A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup"
>
> — Mathias Biilmann (CEO & Co-founder of Netlify).

#### JavaScript

Dynamic functionalities are handled by JavaScript. There is no restriction on which framework or library you must use.

#### APIs

Server side operations are abstracted into reusable APIs and accessed over HTTPS with JavaScript. These can be third party services or your custom function.

#### Markup

Websites are served as static HTML files. These can be generated from source files, such as Markdown, using a Static Site Generator.

---

### Meaning

Today, Jamstack is used to more broadly refer to an architectural approach for building websites. Though there are varying opinions on what exactly Jamstack means today, these attributes are present in most sites that claim to be Jamstack sites:

#### Decoupled

The front end uses tooling separate from the back end. The front end is typically built using a static site generator. And the back end is often integrated with the front through the use of APIs used during the build process. Server-side processes can also be run using serverless functions.

#### Static-first

While various practices exist for introducing dynamic elements to Jamstack sites, most are pre-rendered, which means the front end was built and compiled into HTML, CSS, and JavaScript files.

#### Progressively enhanced

JavaScript can be introduced to pre-rendered sites on an as-needed basis, thus increasing performance in the browser.

---

### Benefits

Here are the main benefits provided by the Jamstack.

#### Faster performance

Serve pre-built markup and assets over a CDN.

#### More secure

No need to worry about server or database vulnerabilities.

#### Less expensive

Hosting of static files is cheap or [even free.](https://www.netlify.com/)

#### Better developer experience

Front end developers can focus on the front end, without being tied to a monolithic architecture. This usually means quicker and more focused development.

#### Scalability

If your product suddenly goes viral and has many active users, the CDN seamlessly compensates.

---

### Best practices

The following tips will help you leverage the best out of the stack.

#### Content delivery network

Since all the markup and assets are pre-built, they can be served via CDN. This provides better performance and easier scalability.

[Learn more](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/ 'Read more about CDN')

#### Atomic deploys

Each deploy is a full snapshot of the site. This helps guarantee a consistent version of the site globally.

[Learn more](https://buddy.works/blog/introducing-atomic-deployments#what-are-atomic-deployments 'Read more about atomic deploys')

#### Cache invalidation

Once your build is uploaded, the CDN invalidates its cache. This means that your new build is live in an instant.

[Learn more](https://www.netlify.com/blog/2015/09/11/instant-cache-invalidation/ 'Read more about cache invalidation')

#### Everything in version control

Your codebase lives in version control system, such as Git. The main benefits are changing the history of every file, collaborators and traceability.

[Learn more](https://www.atlassian.com/git/tutorials/what-is-version-control 'Read more about version control')

#### Automated builds

Your server is notified when a new build is required, typically via webhooks. Server builds the project, updates the CDNs and the site is live.

[Learn more](https://www.agilealliance.org/glossary/automated-build 'Read more about automated builds')

---

### Workflow

Here's an ideal Jamstack workflow:

Develop

Version Control

Automated build

Static assets

Atomic deploy

Pre-render & invalidate cache

Update CDN

---

### Timeline

A brief history of Jamstack shows its growth in popularity.

#### 2015

Static sites are becoming popular due to the popularity of certain SSG such as Jekyll.

#### 2016

A small group of developers believe that Static sites don't have to be static and the term "Jamstack" comes to life.

#### 2017

The modern web revolution starts prioritising the importance of performance, scalability and developer experience. The term Jamstack starts to be adopted by a wider group of developers and the first enterprise Jamstack projects are announced.

#### 2018

Tools like Netlify, Gatsby and Contentful have helped promote the term and the community is rapidly growing. This was also the year of the first Jamstack Conference.

#### 2019

The year that Jamstack went mainstream. An explosion of new tools and services enter the market to support Jamstack sites.

#### 2020

"JAMstack" becomes "Jamstack" and brought with it a new brand for the community. ZEIT becomes Vercel and begins blurring the lines of what Jamstack really means as Next.js grows in popularity, largely due to its ability to combine server-side and static rendering in the same site.

#### 2021

While Jamstack continues to expand, confusion about what it really means has become a common theme. And yet, tools like [RedwoodJS](https://redwoodjs.com/) and [Blitz.js](https://blitzjs.com/) show us that Jamstack isn't slowing down.

## Getting started

---

### Development

However you decide to generate your HTML assets is up to you. The three most common approaches are:

#### Hand coding

Simple and effective method of writing HTML, it's ideal for super simple pages.

#### Static Site Generators

Most Jamstack sites are powered by a static site generator. There's no enforcement on which SSG you decide to use.

- [Next.js](https://nextjs.org/ 'Next.js')
- [Gatsby](https://www.gatsbyjs.com/ 'Gatsby')
- [Hugo](https://gohugo.io/ 'Hugo')

#### Site Builders

Tools that bring Jamstack to less technical users, while enabling developers to customize sites through modern tooling.

- [Stackbit](https://www.stackbit.com/ 'Stackbit')
- [Builder.io](https://www.builder.io/ 'Builder.io')
- [CloudCannon](https://cloudcannon.com/ 'CloudCannon')

---

### Dynamic parts

Jamstack websites don't have to be static. There are great services available to help bring some dynamic data to your product.

---
