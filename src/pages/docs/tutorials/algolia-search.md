---
title: Text Search
weight: 0
excerpt:
seo:
    title: 'Text Search'
    description: 'Algolia Search is a powerful text search engine that makes it easy to find the right content in your website.'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

# Algolia Full Text Search

## Aside: Selecting A Searc Engine

<details>

<summary> <h5><b>➡️_____Click Here For Dropdown_____➡️</b><u>((⬇️<i>Selecting A Searc Engine (Jamstack Site)</i>⬇️))</u></h5></summary>

### Search in the Jamstack World

> ## Excerpt
>
> A website search is often the first dynamic part you'll be adding to your new Jamstack project. Let's see which solutions are available in the Jamstack world.

---

Before the internet started being more complex with various web apps and progressive web apps, most businesses relied on a monolithic approach to website development (think WordPress). Different search engine options had never been discussed with the monolithic approach because there was no need for that discussion: search was automatically integrated into these websites.

Today, in contrast to the built-in search feature, developers have the option to pick and choose the solution that does the job best for their use case. For many, a website search is often the first dynamic part they'll be adding to their new Jamstack project.

Get the **exclusive Jamstack** web dev case studies (and more) in your mailbox!

## jamstack-search/#site-search-solutions-available-in-jamstack)Site search solutions available in Jamstack

While the search-as-a-service market might not be as developed as some other markets, that in no way means that the solutions available aren't up to par. It's quite the opposite; they are excellent: it just comes down to which one is the right pick for you.

### > programmable-search-engine-by-google)Programmable Search Engine by Google

![Programmable Search Engine by Google](./../../../../static/images/programmable-search-engine.png 'Programmable Search Engine by Google')

Google's [Programmable Search Engine](https://programmablesearchengine.google.com/) (previously known as Google Custom Search) is a Google solution for website search functionality. It offers a customizable search box for your website that shows relevant results powered by Google Search.

Features, pros, and cons:

-   Easy setup and easy customization of both results output and search box and page design. You can choose if you want users to see only your website results or include other sites.
-   The free plan allows a lot of customization, but it also shows ads.
-   Supports JSON API for REST-based access, but this is a paid-only option.

### > algolia)Algolia

![Algolia](https://bejamas.io/static/159d30d346ce2aa0aea26090311d87e0/f101e/algolia.png 'Algolia')

[Algolia](https://www.algolia.com/) is one of the most popular search-as-a-service providers in the Jamstack world (and beyond) that helps you deliver what your customers search for every time.

Algolia offers a full suite of APIs to easily integrate tailored and fast search experience. They say their mission is to give developers the building blocks to create a fast, relevant search experience.

Features, pros, and cons:

-   Free plan for SMEs with analytics.
-   Extensive documentation and guides on top of fantastic customization options.
-   Active community and 24/7 support (for paid plans).
-   AI-powered search with personalization, rules, and merchandising.
-   You can't test your setup based on the hypothetical user's geolocation (when you build a search solution for the US audience while you are in Europe, for example).

Our website search uses Algolia, just look at the 🔎 icon. We use [gatsby-plugin-Algolia](https://github.com/algolia/gatsby-plugin-algolia) to index our content during the build. On the frontend, we use _algoliasearch/lite_ and _react-instantsearch-dom_ which is Algolia react components that can be easily used with Gatsby.

### > elastic)Elastic

![Elastic](https://bejamas.io/static/291a7e4ebb746994ba3227e5301bcfcb/f101e/elastic.png 'Elastic')

Even if you're only starting to explore the search service market, chances are you have heard of [Elastic](https://www.elastic.co/), a distributed, free and open search and analytics engine.

It is one of the most popular and widely-used search solutions that thousands of companies worldwide use, both internally and externally. If you're looking for the widest variety of features, some of which include even observability and security, this might be the right solution for you.

Elastic offers different plans depending on whether you choose managed or self-managed Elastic cloud or stack. Open Source options are available as well.

Features, pros, and cons:

-   Wide variety of features + open-source option.
-   Comprehensive data analytics and application performance monitoring.
-   Large, active community and extensive documentation, guides, and training.
-   Elastic search doesn't support multi-language requests and responses.
-   Steep learning curve.
-   The level of support depends on the plan you have.

### > cloudsh)CloudSh

![CloudSh](https://bejamas.io/static/b1bafd64c59ccb00467d4aebbf1b9221/f101e/cloudsh.png 'CloudSh')

[CloudSh](https://cloudsh.com/) is another search-as-a-service provider that offers a powerful search engine for your website with only a few lines of JavaScript.

It's perfect for anyone looking for a simple solution for their static website. While CloudSh offers a few plans for businesses of different sizes, including a 7-day free trial, CloudSh doesn't have a free plan in their offer.

Features, pros, and cons:

-   CloudSh has been specially built for static websites and indexes their pages with both on-demand and scheduled basis.
-   Simple to use and integrate with pre-made integration solutions for different static site generators.
-   Analytics and on-demand indexing for all plans.Priority support for all except the Personal (basic) plan.

### > meilisearch)MeiliSearch

![MeiliSearch](https://bejamas.io/static/3bae2afe922474ea1f451e0b08938909/f101e/meilisearch.png 'MeiliSearch')

[Meili Search](https://www.meilisearch.com/) is a blazing-fast open-source search API solution written in Rust. It is built with an idea to completely transform your users' search experience and offer them the best possible performance for instant search.

They provide an excellent toolkit for customization, although if you decide not to customize, the solution works with a preset that will be enough for most use cases.

Meili is an excellent solution, but it lacks some features, such as the analytics dashboard. Keep in mind that Meili is a fairly new solution on the market - and very promising at that - so we should start seeing them catch up to the others.

Features, pros, and cons:

-   Open-source, free, and available to anyone.
-   Written in Rust. Uses RESTful API.
-   Easy to integrate with extensive customization possibilities (also presets available).
-   Search as-you-type experience, which means that MeiliSearch can return results for almost EVERY keystroke you make.
-   It looks like the great things are yet to come. Needs more features.

### Apache Solr

![Apache Solr](https://bejamas.io/static/1c2b3e8c3d68bc06c16bd0b4c3c20caf/f101e/solr.png 'Apache Solr')

[Solr](https://lucene.apache.org/solr/) is another top-rated, high-speed search platform from the open-source giant Apache and built on Apache Lucene.

Solr offers a plethora of different features: distributed indexing, replication and load-balanced querying, automated failover and recovery, and centralized configuration.

Even though it is used by many of the world's largest websites (like AOL and BestBuy), it is a great solution for businesses of all sizes.

Features, pros, and cons:

-   Open-source with extensive data management and analytics capabilities.
-   REST API for accessing and validating the data/records.
-   Large, active community and excellent documentation, guides, and training.
-   CPU consumption can be high in some cases.

### Js-Search

[Js-Search](https://github.com/bvaughn/js-search) is a straightforward option that enables full client-side searches with the library used. When developers build static websites, they also build a search index of the pages, which is later used for searching via Js-Search.

While this search is fast, an issue is raised because this solution isn't a good fit for full-text search. Indexing full text this way would significantly impact the whole website's performance.

Features, pros, and cons:

-   Very simple and free.
-   Great for small websites.

### > typesense)Typesense

![Typesense](https://bejamas.io/static/cd7fc7c7b8707f96a516ae7fc599fd3a/f101e/typesense.png 'Typesense')

[Typesense](https://typesense.org/) is an open-source, typo tolerant search engine, which means it handles your errors while typing fast and out-of-the-box. For now, it has API clients for Javascript, PHP, Python, and Ruby, and implementation is pretty straightforward.

Features, pros, and cons:

-   While simple at its core, Typesense has an advanced filtering system if you need fine-grained control of the search results.
-   Simple to set up and update with a new version.

## (**so-which-option-is-the-best**)So, which option is the best?

To decide which option would be right for your business, I suggest you first write down your main requirements. Then, go through the list above, and find the best fit!

If you're building a simple, static website, try CloduSh, Typesense, or Js-Search. And if you don't mind sharing ads in search results Google's Programmable Search Engine can be a decent option as well.

</details>

<br>
<br>
<br>
<br>
<br>
<br>

---

---

<center>
|---------------------------------------🔥🔥🔥🔥🔥🔥🔥--------------------------------------|</center>
---
---
---

<br>
<br>
<br>
<br>
<br>
<br>

<center>

### 🔍Search is a common site requirement.🔎

</center>

###### Let's look at how to populate a search index on Algolia and implement search on a Jamstack site built with Gatsby.

> Search is an important part of almost any site. Once you have a lot of content, it becomes an especially critical tool for helping your users find what they need. But search is also totally dynamic, so it must be impossible or, at the very least, really difficult to do on a Jamstack site, right?

_**In this tutorial, we're going to explore adding search to a site built with Gatsby. We'll use a service called [Algolia](https://www.algolia.com/) for the search API. This is a commercial offering, but it has a generous free tier. The example site was built with Stackbit, though there's nothing in the code that we'll discuss that is Stackbit specific (for reference, you can see the full project code at [https://github.com/remotesynth/good-celery](https://github.com/remotesynth/good-celery))**_

**Ok, enough intro...let's get coding.**

#### Setting Up Algolia

###### First things first, you'll need to set up your account on Algolia and set up a project. You can skip the steps about setting up indices as we'll take care of that via code. However, be sure to grab all your API keys from the Algolia dashboard as we'll need them later.

**Algolia provides two projects that we'll make use of:**

-   [**Gatsby Plugin Algolia**](https://github.com/algolia/gatsby-plugin-algolia) will help us create our indices and make sure they are kept in sync with our content.
-   [**React InstantSearch**](https://github.com/algolia/react-instantsearch) provides a pre-built set of tools for interacting with Algolia's search API for a "search as you type" UI. This project also encompasses the `react-instantsearch-dom` UI tools we'll also use.

---

**_Let's start by installing these on our Gatsby project._**

---

#### Configuring Algolia in Our Gatsby Project

Next we need to edit our `gatsby-config.js` file, first by adding these two lines prior to the `module.exports` block.

Neither of these files exist yet, but we'll create them in a moment. Staying in `gatsby-config.js`, within the `module.exports` block and within the `plugins` array, add the following details:

```js
{
  resolve: `gatsby-plugin-algolia`,
  options: {
    appId: process.env.GATSBY_ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    queries,
    chunkSize: 10000,
  },
}
```

Finally, create (or open) a `.env` file and add the API key details from Algolia to the file as follow (replacing the values on the right of the equal signs with the appropriate keys from Algolia)

```txt
GATSBY_ALGOLIA_APP_ID=MY_ALGOLIA_APP_ID
GATSBY_ALGOLIA_SEARCH_KEY=MY_ALGOLIA_SEARCH_KEY
GATSBY_ALGOLIA_ADMIN_KEY=MY_ALGOLIA_ADMIN_KEY
```

Please ensure that this `.env` file is added to your `.gitignore` so that you do not accidentally check in your private keys.

---

### Adding Slugs to Posts

In some cases, as in my site generated by Stackbit, pages do not have a `slug` field in the frontmatter. Having slugs available in the search made it much easier to output the results. Rather than manually add slugs to all of my content, Gatsby provides instructions on how to [create slugs for pages](https://www.gatsbyjs.org/docs/creating-slugs-for-pages/) automatically.

This depends on `gatsby-source-filesystem`, so you'll need to install that first. Then, add the following code to `gatsby-node.js`:

Now when we query Gastby for our pages, we'll be able to get the slug and provide that to our Algolia search index.

---

### Populating Our Indices

Let's create the queries that will populate our indices on Algolia. It's important to note that your query depends on the data you have in your content and how you store your content. The best way to create and test your GraphQL queries to be sure you will populate your indices correctly is to use GraphiQL, which is running locally whenever you run `gatsby develop` generally at `http://localhost:8000/___graphql`.

In my case, my Stackbit site has both pages and posts that have differing frontmatter properties. For this example, we'll be creating a blog search so I created an index that is specific to the blog calles `Posts`. Feel free to customize your query to create indices for whatever content you wish to make searchable.

Place the query in a `/src/utils/algolia.js` file like the one below (recall that we referenced this file in our `gatsby-config.js` file above). Note that the excerpts for the content are truncated to prevent going over the character limit for individual Algolia records.

With the queries in place, our indices on Algolia will update whenever we build our Gatsby site. To do this, run `gatsby build` from the command line to run a production build of the site. We should see an indication that our indices have been populated from the console output.

We can now see the results when going into Algolia and browsing Indices.

---

## Creating the Search UI

Now that our search indices are populated, let's display some results. To do this, we're going to use [React InstantSearch](https://github.com/algolia/react-instantsearch), which offers a search-as-you-type experience. It pretty much works out of the box using the [code they provide](https://www.algolia.com/doc/guides/building-search-ui/installation/react/).

Let's look at the most basic implementation in action. Start by creating a new template as `/src/templates/search.js`. This template will just wrap the example code taken almost directly from the InstantSearch page and place it in the site's UI so that we can try it out.

We initialize the search client with the secrets that are in the `.env` file we created earlier. Within the layout elements, we include the `InstantSearch` element tied to our `Posts` index in Algolia. The `SearchBox` outputs a search input UI and `hits` outputs the results. Next, just create a search page that will utilize this layout at `/src/pages/blog/search.md`.

From the console run `gatsby develop` and then navigate to the page, which is typically available at `http://localhost:8000/blog/search/`. Here's what you should see:

![](https://www.stackbit.com/images/gatsby-basic-instant-search.png)

###### We're done!

<br>
<br>
<br>
<br>
<br>
<br>

---

---

## <center>|---------------------------------------🔥🔥🔥🔥🔥🔥🔥--------------------------------------|</center>

---

---

<br>
<br>
<br>
<br>
<br>
<br>

### Customizing the Output

So, ok, our boss has suggested that perhaps we're not quite done yet. She doesn't think the search results are very attractive and, worse yet, they don't even lead anywhere. She has a point.

What if, instead of a separate search page, we actually integrated the search into our existing blog page, allowing a user to filter the results based upon their search? Let's do that and, in doing so, learn how to customize the output of the InstantSearch `Hits` component.

Create a new component as `src/components/search.js` using the source below. Don't worry, I'll explain what we're doing in a moment.

As you can see, the actual component output UI is almost identical to the prior search page, with just a `SearchBox` and `Hits`. However, prior to that, we are overriding the default output behavior of `Hits`. If the results return any records, we loop through them, outputting cards identical to the existing blog list on `src/templates/blog.js`, using the `hit` (i.e. search result) values to populate the output. If there are no results, we just display some text informing the user.

Now let's add it to our blog. Keep in mind that the output of the search results are identical to the regular blog list output and we are using the search without [conditionally handling an empty query](https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-display/react/#handling-the-empty-query) - this means it will always display posts even if the user has not searched yet. Thus, we can actually replace the regular page output with the search results as in the updated source for `src/templates/blog.js` below:

The result works as shown below.

---

## Where to Go From Here

There's one more step that I should mention. We need to ensure that the environment variables we created are available when we deploy. On Netlify, all we need to do is go to Settings > Build & Deploy > Environment and add the necessary variables defined in our `.env` file to our deployment settings.

---

We're all set!

Obviously, this is just one way to implement the search. The [Gatsby documentation](https://www.gatsbyjs.org/docs/adding-search-with-algolia/) offers a similar but probably more flexible implementation. The [InstantSearch](https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/) documentation also offers a ton of API and customization details with code samples to help you make the tools fit the needs of your specific site. In the end, implementing a search seems like a complicated task, but, thankfully, the tools and libraries available to us do a lot of the heavy lifting, making our jobs much easier.
