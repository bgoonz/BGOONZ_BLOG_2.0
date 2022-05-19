![Add Algolia Search to Your Gatsby Site (Part 1)](https://malikgabroun.com/static/584a5bdf50b8cb52f308bcd290da23f3/3b307/searching.jpg)

Photo by [Anthony Martino](https://unsplash.com/@amartino20)

In this post, we will be looking into how to add algolia search to your gatsby site. we will see how to configure Algolia in gatsby and add Algolia's built-in component..

To setup algolia search, first, you need to:

-   create an account at algolia's website [here](https://www.algolia.com/users/sign_up)
-   once done, you create an index you can name whatever you want (blog for example)

After that, we can grab the API keys and put them in your `.env` which you can find them here [![algolia api keys](https://malikgabroun.com/static/d81f28f7e184299ddb2144e4116a22bf/fcda8/algolia-api-keys.png 'algolia api keys')](https://malikgabroun.com/static/d81f28f7e184299ddb2144e4116a22bf/5df5d/algolia-api-keys.png)

```
1GATSBY_ALGOLIA_APP_ID="xxxx"2GATSBY_ALGOLIA_INDEX_NAME="test"3ALGOLIA_API_KEY="xxx"4GATSBY_ALGOLIA_SEARCH_KEY="xxx"
```

## [](https://malikgabroun.com/blog/intro-to-algolia-in-gatsby-part-i/#configuration)Configuration

Now moving back to code, by installing a couple of plugins that we are going to use

```
1npm install algoliasearch dotenv gatsby-plugin-algolia react-instantsearch-dom
```

After installing the gatsby plugin it will allow us to fetch the data with GraphQl and send it to algolia.

Now that we install the plugins, we can start adding the configuration in `gatsby-config` to fetch the data from the build and insert it into the index in algolia.

To do so, we create the query as follow

```
1const blogQuery = `2  {3   posts: allMdx(4    filter: { fileAbsolutePath: { regex: "/posts/" } }5  ) {6    edges {7      node {8        objectID: id9        frontmatter {10          title11          date12          path13        }14        excerpt(pruneLength: 5000)15      }16    }17  }18  }19`;
```

and then add the transformer method which is just mapping the data

```js
1const settings = { attributesToSnippet: [`excerpt:20`] };2const queries = [3  {4    query: blogQuery,5    transformer: ({ data }) =>6      data.posts.edges.map(({ node: { frontmatter, ...rest } }) => {7        return {8          ...frontmatter,9          ...rest,10        };11      }),12    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,13    settings,14  },15];
```

Basically what the above snippet does is the `queries` object grab the GraphQL json data and turning them each into own separate object that we want algolia to index from Gatsby GraphQl layer which is going to contains GraphQl query, optional index name, transformer function and settings object.

The next step will be configuring `gatsby-plugin-algolia` as follow

```
1require("dotenv").config();234
5module.exports = {6  plugins: [7    {8      resolve: `gatsby-plugin-algolia`,9      options: {10        appId: process.env.GATSBY_ALGOLIA_APP_ID,11        apiKey: process.env.ALGOLIA_API_KEY,12        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, 13        queries,14        chunkSize: 10000, 15      },16    },17  ],18};
```

the plugin takes an options object with the keys we added earlier in the env file and the queries object which contains your query (you can pass more than one query to that, for example, a query for posts and a different one for pages) and the transformer method for mapping, index name and any settings you wish to pass.

Once the configuration is done, you can run your project in production mode to send the data to algolia so that you can test by running `gatsby build` and it will look like the following [![gatsby indexing data to algolia](https://malikgabroun.com/static/ab96e8cfa1bcff9409a65040625c292b/fcda8/algolia-build.png 'gatsby indexing data to algolia')](https://malikgabroun.com/static/ab96e8cfa1bcff9409a65040625c292b/076ca/algolia-build.png)

If you look in your dashboard after the build finish, you should be able to see the data as well [![algolia index dashboard](https://malikgabroun.com/static/5348cf03ba27e5cf3783da2d33581cce/fcda8/algolia-index-dashboard.png 'algolia index dashboard')](https://malikgabroun.com/static/5348cf03ba27e5cf3783da2d33581cce/a3c4c/algolia-index-dashboard.png)

Now we can move to the frontend part after configuration and indexing part finished.

## [](https://malikgabroun.com/blog/intro-to-algolia-in-gatsby-part-i/#frontend)Frontend

In this section, we will be looking into how to install algolia search to your gatsby site.

### [](https://malikgabroun.com/blog/intro-to-algolia-in-gatsby-part-i/#algolia-search-component)Algolia Search component

To do that, first, we create a new component call it `Search.js` which would utilise algolia's instant-search component (you can check the [docs](https://www.algolia.com/doc/guides/building-search-ui/installation/react/) for more info)

```
1import algoliasearch from "algoliasearch/lite";2import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";3import React from "react";4
5const appId = process.env.GATSBY_ALGOLIA_APP_ID;6const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;7const searchClient = algoliasearch(appId, searchKey);8
9const Search = () => (10  <InstantSearch11    searchClient={searchClient}12    indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}13  >14    <SearchBox />15    <Hits />16  </InstantSearch>17);18
19export default Search;
```

As you can see in the above snippet, we first added `InstantSearch` component which as defined by algolia in the [docs](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/) as a component that interact with Algolia’s API, to easily build instant-search applications. `InstantSearch` takes two properties, `searchClient` that contains your app id and search key which was defined in env earlier and indexName that you defined in algolia's account. The component has two children components, `SearchBox` component as the name implies and input field with search and delete icon and a `Hits` component (Hits are the return result from your query). The result of the search component will look something like this ![Search Component](https://malikgabroun.com/static/48f558d3489bae12bb05be88caee9e37/fcda8/SearchComponent.png 'Search Component')

We can replace the HTML you see in the screenshot from the list of posts with the actual hits which is a good spot to do highlighting for the searched keywords etc. To do so, we can add an attribute `hitComponent` which going to pass the data that it receives from `Hits` to the component you pass to it for example postPreview.

```
1import PostPreview from "./PostPreview";2<Hits hitComponent={PostPreview} />;
```

And our `PostPreview` can look something like the following where we add a link to the post and show the excerpt about the post.

```
1import React from "react";2import { Link } from "gatsby";3import { Highlight } from "react-instantsearch-dom";4import { css } from "@emotion/core";5const PostPreview = ({ hit }) => {6  return (7    <article>8      <h3>9        <Link to={hit.path}>10          <Highlight hit={hit} attribute="title" tagName="mark" />11        </Link>12      </h3>13      <small>{new Date(hit.date).toLocaleDateString()}</small>14      <p>15        <Highlight hit={hit} attribute="excerpt" tagName="mark" />16      </p>17    </article>18  );19};20
21export default PostPreview;
```

once that done, we can add another widget that does the highlighting. By default, the prop `attribute` that was to `Highlight` component is going to be enabled on all the searchable attributes, but you can limit it to a specific one that you want to make it searchable.

The `Highlight` widget is going to look for the attribute to highlight, which is going to create a span around the searched term in the content and highlight that span.

An example of adding the `Highlight` widget

```
1<Highlight hit={hit} attribute="title" tagName="mark" />
```

By adding the above, it is going to highlight the attribute title if it matches the search query as you can see below [![Highlight Component](https://malikgabroun.com/static/249c1d6ce3bf01038eb53069d4d337d8/fcda8/highlight-widget.png 'Highlight Component')](https://malikgabroun.com/static/249c1d6ce3bf01038eb53069d4d337d8/332b4/highlight-widget.png)

As a result, now we have `Search` component that uses algolia `InstantSearch` as a base component.

**Following the post and you can find a starter repo [here](https://github.com/gabroun/gatsby-mdx-starter) that shows usage of Algolia Search component**

I hope part one showed how you can install and add algolia search component to your Gatsby site. Part two will cover how to create a custom search component with Algolia.

---

---

---

---

This guide will run you through the process of setting up a custom search experience powered by [Algolia](https://www.algolia.com/) on a Gatsby site.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#what-is-algolia)What is Algolia?

Algolia is a site search hosting platform and API that provides you with the components you need to build powerful search functionality without setting up your own server.

Algolia will host the search index. You tell it what pages you have, where they are and how to navigate them, and the Algolia API will return those results to the user based on whatever search terms they use.

Algolia provides a free tier that offers a limited number of monthly searches. A paid plan is required for higher volumes.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#indexing-and-searching)Indexing and searching

There are two stages to providing search functionality: indexing your pages and building a search interface for users to query the index.

The [Gatsby Algolia plugin](https://github.com/algolia/gatsby-plugin-algolia) handles the indexing. It sends your pages to Algolia for indexing every time you run `gatsby build`. You use GraphQL to customize which pages and what information to index.

To build the user interface for searching, this guide will use [React InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/), which is a library provided by Algolia with ready-made React components. This is the quickest way to get up and running, but you could also build your own custom user interface.

> Note: If you want to build a search for technical documentation, Algolia provides a product called [DocSearch](https://docsearch.algolia.com/) that simplifies the process further and eliminates the need for manual indexing. This is the preferred approach for documentation sites.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#setting-up-the-project)Setting up the project

This guide will set up a search based on the [Gatsby starter blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/). You can base it on your own project instead, but that might require minor modifications to the code, depending on your page structure and the frameworks you use.

Create a new site using

```
gatsby new gatsby-algolia-guide https://github.com/gatsbyjs/gatsby-starter-blog
```

The starter blog contains the pages you will index in the directory `content/blog`. These are Markdown files that have the [frontmatter field](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) `title`. It is referenced when configuring the Algolia query. If you call this field something else, the query needs to be modified.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#indexing)Indexing

Now that you have a project set up you can proceed to indexing your pages in Algolia.

Start by adding the [Algolia plugin](https://github.com/algolia/gatsby-plugin-algolia):

```
npm install gatsby-plugin-algolia
```

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#configuring-the-algolia-plugin)Configuring the Algolia plugin

You will need to provide some information that identifies your account to the Algolia plugin and authorizes it to write data to it.

If you don’t already have an Algolia account, [create one](https://www.algolia.com/users/sign_up). There is a free trial that does not require a credit card.

Then, go to [the ‘API Keys’ section of your Algolia profile](https://www.algolia.com/api-keys). It should look like this screenshot, only with letters and numbers instead of black boxes:

[![The API Keys section of the Algolia profile](https://www.gatsbyjs.com/static/7d7464953fdefee4e5dff0ce845f0834/321ea/algolia-api-keys.png 'The API Keys section of the Algolia profile')](https://www.gatsbyjs.com/static/7d7464953fdefee4e5dff0ce845f0834/d26de/algolia-api-keys.png)

Copy out the Application ID, Search-Only API Key, and Admin API Key from Algolia and create a file called `.env` in the root of your project (`gatsby-algolia-guide` if created as described above). This file contains your [project environment variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables). Replace the placeholders with your copied values:

```
GATSBY_ALGOLIA_APP_ID=<App ID>GATSBY_ALGOLIA_SEARCH_KEY=<Search-Only API Key>ALGOLIA_ADMIN_KEY=<Admin API Key>
```

Note that the value of the Admin Key must be kept secret, since it allows write access to your index. It must therefore not be included in any code you ship.

It is also best practice not to check in the `.env` file for this reason. Consider creating an `.env.example` without the values to git instead. This way, if someone else sets up the project, they know what configuration they need to supply but don’t have access to your private values.

Next, modify `gatsby-config.js` to read the configuration and add the `gatsby-plugin-algolia` plugin.

Add the following line at the top of `gatsby-config.js` to read the configuration from `.env`:

```
require("dotenv").config()
```

Then add the configuration for `gatsby-plugin-algolia` to the list of plugins in the `gatsby-config.js`. `dotenv` makes the configuration values available as keys in `process.env`.

```
plugins: [    ... // your existing plugins here    {      resolve: `gatsby-plugin-algolia`,      options: {        appId: process.env.GATSBY_ALGOLIA_APP_ID,        apiKey: process.env.ALGOLIA_ADMIN_KEY,        queries: require("./src/utils/algolia-queries")      },    }  ],}
```

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#query-the-pages-for-indexing)Query the pages for indexing

You still need to supply a `queries` configuration. Queries tell the Algolia plugin what data is to be indexed. They perform GraphQL queries for the relevant pages and convert the response into a set of Algolia records. These contain key/value pairs with the data to be indexed.

The configuration could have been entered straight into the `gatsby-config.js`, but the configuration above loads it from a new file `src/utils/algolia-queries.js` to avoid clutter. Create this page in your project:

src/utils/algolia-queries.js

```
const escapeStringRegexp = require("escape-string-regexp")const pagePath = `content`const indexName = `Pages`const pageQuery = `{  pages: allMarkdownRemark(    filter: {      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },    }  ) {    edges {      node {        id        frontmatter {          title        }        fields {          slug        }        excerpt(pruneLength: 5000)      }    }  }}`function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {  return {    objectID: id,    ...frontmatter,    ...fields,    ...rest,  }}const queries = [  {    query: pageQuery,    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),    indexName,    settings: { attributesToSnippet: [`excerpt:20`] },  },]module.exports = queries
```

If you did not start from the Gatsby start blog, you might need to modify the `pagePath` to match where your content is kept.

The file exports a list of queries. Each query defines a single index. You can build [multiple indices](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/choosing-between-one-or-more-indices/) with Algolia but this guide will only use a single one.

Each index requires a GraphQL query that retrieves the pages and data to be indexed. A `transformer` transforms the GraphQL data to an Algolia record.

Each index has a name that identifies it. If the index does not exist, it will be created automatically during indexing.

Note that each record must have an ID in the key `objectID`. The Algolia documentation provides more information on [how to structure data into records](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#attributes---what-to-put-in-your-record).

In this guide, the slug, field `excerpt`, and frontmatter field `title` are indexed. It will display these fields in the search results. To index more fields, add them to `pageQuery` with GraphQL.

Each query has optional [settings](https://www.algolia.com/doc/api-reference/settings-api-parameters/). The code above tells Algolia you will want to generate “snippets” of context around your hits in the `excerpt` attribute.

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#test-your-indexing)Test your indexing

This should complete the indexing setup. Now run `gatsby build`. If all goes well, the output should include the following:

```
success Building static HTML for pages - 7.610s - 5/5 0.66/sAlgolia: 1 queries to indexAlgolia: query 0: executing queryAlgolia: query 0: graphql resulted in 3 recordsAlgolia: query 0: splitting in 1 jobs
```

Check that `graphql resulted in` is followed by the number of pages in your project. If the number is wrong, there is something wrong with your query.

Log in to your Algolia account, go to “Indices” and then select the “Page” index and you should see your indexed page data.

[![Algolia index displaying the indexed page](https://www.gatsbyjs.com/static/4fbad40aaf341ec977e903213c235827/321ea/algolia-index.png 'Algolia index displaying the indexed page')](https://www.gatsbyjs.com/static/4fbad40aaf341ec977e903213c235827/b8471/algolia-index.png)

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#troubleshooting)Troubleshooting

If you get the error `GraphQLError: Field "fileAbsolutePath" is not defined by type MarkdownRemarkFilterInput` it means that no pages were found in your project. Check the path configured for `gatsby-source-filesystem` and the query (particularly `pagePath`).

Algolia has an upper bound of 10KB for an index entry. If you get the error `AlgoliaSearchError: Record at the position XX objectID=xx-xx-xx-xx-xx is too big size=xxxx bytes` it means you exceeded that limit. Note how the excerpts are pruned to 5000 characters in the query. Make sure you prune long fields and don’t index unnecessary data.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#adding-the-user-interface)Adding the user interface

Now that there is data in the index, it is time to build the user interface for searching. It will display as a magnifying glass icon button that, when clicked, expands into a form field. Search results will appear in a popover below the input field as the user types.

The guide will use the following frameworks:

-   [React InstantSearch](https://community.algolia.com/react-instantsearch), a component library provided by Algolia for easily building search interfaces.
-   [Algolia Search](https://www.npmjs.com/package/algoliasearch) provides the API client for calling Algolia.
-   [Styled Components](https://styled-components.com/) for embedding the CSS in the code, integrated using the [Gatsby styled component plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/).
-   [Styled Icons](https://styled-icons.js.org/) provides the magnifying glass icon for the search bar.

Styled Components can also be replaced by any other CSS solution you prefer.

Install these frameworks by running the following command:

```
npm install react-instantsearch-dom algoliasearch styled-components gatsby-plugin-styled-components @styled-icons/fa-solid
```

Add the `gatsby-plugin-styled-components` to your `gatsby-config`:

```
plugins: [    ... // your existing plugins here    `gatsby-plugin-styled-components`,  ],}
```

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#search-box)Search box

The first step is to create the input field where the user enters the search query. Algolia calls this the “search box”.

src/components/search/search-box.js

```
import React from "react"import { connectSearchBox } from "react-instantsearch-dom"import { Search as SearchIcon } from "@styled-icons/fa-solid"export default connectSearchBox(  ({ refine, currentRefinement, className, onFocus }) => (    <form className={className}>      <input        className="SearchInput"        type="text"        placeholder="Search"        aria-label="Search"        onChange={e => refine(e.target.value)}        value={currentRefinement}        onFocus={onFocus}      />      <SearchIcon className="SearchIcon" />    </form>  ))
```

The component consists of an HTML form containing an input field and the magnifying glass icon. Most of the work is done by Algolia’s [`connectSearchBox`](https://community.algolia.com/react-instantsearch/connectors/connectSearchBox.html) function. It exposes the current search string as `currentRefinement` and a function for changing it called `refine`.

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#displaying-search-results)Displaying search results

That’s all there is to entering the search query. Next, build a component for displaying search results:

src/components/search/search-result.js

```
import { Link } from "gatsby"import { default as React } from "react"import {  connectStateResults,  Highlight,  Hits,  Index,  Snippet,  PoweredBy,} from "react-instantsearch-dom"const HitCount = connectStateResults(({ searchResults }) => {  const hitCount = searchResults && searchResults.nbHits  return hitCount > 0 ? (    <div className="HitCount">      {hitCount} result{hitCount !== 1 ? `s` : ``}    </div>  ) : null})const PageHit = ({ hit }) => (  <div>    <Link to={hit.slug}>      <h4>        <Highlight attribute="title" hit={hit} tagName="mark" />      </h4>    </Link>    <Snippet attribute="excerpt" hit={hit} tagName="mark" />  </div>)const HitsInIndex = ({ index }) => (  <Index indexName={index.name}>    <HitCount />    <Hits className="Hits" hitComponent={PageHit} />  </Index>)const SearchResult = ({ indices, className }) => (  <div className={className}>    {indices.map(index => (      <HitsInIndex index={index} key={index.name} />    ))}    <PoweredBy />  </div>)export default SearchResult
```

Since Algolia supports multiple indices, the `SearchResult` iterates over all indices and displays hits for each of them using the `HitsInIndex` component. It, in turn, relies heavily on the [`Hits` component](https://www.algolia.com/doc/api-reference/widgets/hits/react/) from the InstantSearch library.

The `PageHit` component is responsible for displaying a single page (“hit”) in a search result.

[`connectStateResults`](https://community.algolia.com/react-instantsearch/connectors/connectStateResults.html) wraps components to provide them with details about the current search such as the query, the number of results and timing statistics.

If you’re using Algolia’s free tier, they ask you to acknowledge the use of their technology by including the string “Powered by Algolia”, which is what `PoweredBy` does.

`Highlight` and `Snippet` both display attributes of matching search results to the user. The former renders the full value whereas the latter only shows a snippet. A snippet is the text immediately surrounding the match. The `attribute` property is the name of the key in the Algolia index (as generated by `pageToAlgoliaRecord` in `algolia-queries.js`).

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#tying-the-search-widget-together)Tying the search widget together

You now need to hook up the two components to each other and perform the actual search:

src/components/search/index.js

```
import algoliasearch from "algoliasearch/lite"import { createRef, default as React, useState, useMemo } from "react"import { InstantSearch } from "react-instantsearch-dom"import { ThemeProvider } from "styled-components"import StyledSearchBox from "./styled-search-box"import StyledSearchResult from "./styled-search-result"import StyledSearchRoot from "./styled-search-root"import useClickOutside from "./use-click-outside"const theme = {  foreground: "#050505",  background: "white",  faded: "#888",}export default function Search({ indices }) {  const rootRef = createRef()  const [query, setQuery] = useState()  const [hasFocus, setFocus] = useState(false)  const searchClient = useMemo(    () =>      algoliasearch(        process.env.GATSBY_ALGOLIA_APP_ID,        process.env.GATSBY_ALGOLIA_SEARCH_KEY      ),    []  )  useClickOutside(rootRef, () => setFocus(false))  return (    <ThemeProvider theme={theme}>      <StyledSearchRoot ref={rootRef}>        <InstantSearch          searchClient={searchClient}          indexName={indices[0].name}          onSearchStateChange={({ query }) => setQuery(query)}        >          <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />          <StyledSearchResult            show={query && query.length > 0 && hasFocus}            indices={indices}          />        </InstantSearch>      </StyledSearchRoot>    </ThemeProvider>  )}
```

The `ThemeProvider` exports variables for the CSS to use (this is the [theming](https://styled-components.com/docs/advanced#theming) functionality of `styled-components`). If you are using `styled-components` elsewhere in your project you probably want to place it at the root of your widget hierarchy rather than in the search widget itself.

The `hasFocus` variable tracks whether the search box is currently in focus. When it is, it should display the input field (if not, only the search icon button is visible).

The `searchClient` variable is [memoized](https://reactjs.org/docs/hooks-reference.html#usememo) to avoid re-creating the Algolia search client when the `Search` component is re-rendered. This is important for performance, as the client caches searches to minimise the number of requests made to Algolia.

`StyledSearchRoot` is the root of the whole component. The React hook `useClickOutside` provides a callback if the user clicks anywhere else on the page, in which case it should close.

`InstantSearch` from [`react-instantsearch-dom`](https://community.algolia.com/react-instantsearch) wraps the search box and search results to orchestrate the search.

### [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#supporting-files)Supporting files

Almost done! Only some supporting files left. You need to add the implementation of the `useClickOutside` hook:

src/components/search/use-click-outside.js

```
import { useEffect } from "react"const events = [`mousedown`, `touchstart`]export default (ref, onClickOutside) => {  const isOutside = element => !ref.current || !ref.current.contains(element)  const onClick = event => {    if (isOutside(event.target)) {      onClickOutside()    }  }  useEffect(() => {    for (const event of events) {      document.addEventListener(event, onClick)    }    return () => {      for (const event of events) document.removeEventListener(event, onClick)    }  })}
```

And finally, you should also add some CSS. The `Styled` components wrap the components you wrote earlier to add styling to them. If you wish to use a different CSS framework, you can skip these. In that case, replace `StyledSearchBox` with `SearchBox`, `StyledSearchResult` with `SearchResult` and `StyledSearchRoot` with `<div>` in `index.js`.

src/components/search/styled-search-root.js

```
import styled from "styled-components"export default styled.div`  position: relative;  margin: 0.6em 0;`
```

The root element needs relative positioning so you can position the popover underneath it.

src/components/search/styled-search-box.js

```
import styled, { css } from "styled-components"import SearchBox from "./search-box"const open = css`  width: 10em;  background: ${({ theme }) => theme.background};  cursor: text;  margin-left: -1.6em;  padding-left: 1.6em;`const closed = css`  width: 0;  background: transparent;  cursor: pointer;  margin-left: -1em;  padding-left: 1em;`export default styled(SearchBox)`  display: flex;  flex-direction: row-reverse;  align-items: center;  margin-bottom: 0;  .SearchInput {    outline: none;    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};    font-size: 1em;    transition: 100ms;    border-radius: 2px;    color: ${({ theme }) => theme.foreground};    ::placeholder {      color: ${({ theme }) => theme.faded};    }    ${({ hasFocus }) => (hasFocus ? open : closed)}  }  .SearchIcon {    width: 1em;    margin: 0.3em;    color: ${({ theme }) => theme.foreground};    pointer-events: none;  }`
```

The `SearchBox` has an open and a closed state. The `hasFocus` property determines which state the component is in. `open` and `closed` contain the CSS that is different for the two states.

Finally, add some styling to the search result:

src/components/search/styled-search-result.js

```
import styled, { css } from "styled-components"import SearchResult from "./search-result"const Popover = css`  max-height: 80vh;  overflow: scroll;  -webkit-overflow-scrolling: touch;  position: absolute;  z-index: 2;  right: 0;  top: 100%;  margin-top: 0.5em;  width: 80vw;  max-width: 30em;  box-shadow: 0 0 5px 0;  padding: 1em;  border-radius: 2px;  background: ${({ theme }) => theme.background};`export default styled(SearchResult)`  display: ${props => (props.show ? `block` : `none`)};  ${Popover}  .HitCount {    display: flex;    justify-content: flex-end;  }  .Hits {    ul {      list-style: none;      margin-left: 0;    }    li.ais-Hits-item {      margin-bottom: 1em;      a {        color: ${({ theme }) => theme.foreground};        h4 {          margin-bottom: 0.2em;        }      }    }  }  .ais-PoweredBy {    display: flex;    justify-content: flex-end;    font-size: 80%;    svg {      width: 70px;    }  }`
```

`Popover` creates a popover floating under the search box. The `show` property determines whether it is visible or not.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#usage)Usage

The search widget is now ready for use. It needs to be placed somewhere in your project’s layout. If you start from Gatsby starter blog, you can use the `layout` component:

```
import React from "react"import { Link } from "gatsby"import { rhythm, scale } from "../utils/typography"import Search from "./search"const searchIndices = [{ name: `Pages`, title: `Pages` }]const Layout = ({ location, title, children }) => {  // ...  return (    <div      style={{        marginLeft: `auto`,        marginRight: `auto`,        maxWidth: rhythm(24),        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,      }}    >      <header>        <Search indices={searchIndices} />        {header}      </header>      <main>{children}</main>      <footer>        © {new Date().getFullYear()}, Built with        {` `}        <a href="https://www.gatsbyjs.com">Gatsby</a>      </footer>    </div>  )}export default Layout
```

If you started from a different project your layout may look different; the highlighted lines show which lines need to be added.

Note that this is where you define the search indices you wish to search. They are passed as a property to `Search`.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#running)Running

Running `gatsby develop` should now give you a working search that looks something like this:

[![Search widget displaying search results](https://www.gatsbyjs.com/static/c2b0e4bba13a5850a9c9454f9a1b3886/321ea/algolia-final-search.png 'Search widget displaying search results')](https://www.gatsbyjs.com/static/c2b0e4bba13a5850a9c9454f9a1b3886/e6c84/algolia-final-search.png)

You can also play around with it at [https://janosh.io/blog](https://janosh.io/blog).

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#deploying-to-netlify)Deploying to Netlify

If you try to deploy the project to Netlify, the deployment will fail with the error `AlgoliaSearchError: Please provide an application ID`. This is because Netlify does not have access to the Algolia configuration. Remember, it is kept in the `.env` file which is not checked in.

You therefore need to declare the same environment variables you put in `.env` in Netlify. Go to your Netlify site dashboard under **Settings > Build & deploy > Environment > Environment variables** and enter the keys `GATSBY_ALGOLIA_APP_ID`, `GATSBY_ALGOLIA_SEARCH_KEY` and `ALGOLIA_ADMIN_KEY` with the same values as you used in the `.env` file. After a redeploy, the search should now work!

[![Netlify environment variable configuration](https://www.gatsbyjs.com/static/3106f00be7f21a1b1749ee8498cdafd8/321ea/algolia-netlify-env.png 'Netlify environment variable configuration')](https://www.gatsbyjs.com/static/3106f00be7f21a1b1749ee8498cdafd8/22284/algolia-netlify-env.png)

The Netlify documentation has more information on [how to configure environment variables in Netlify](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables). Also see the [Environment Variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables) guide for an overview of environment variables in Gatsby.

## [](https://www.gatsbyjs.com/docs/adding-search-with-algolia/#additional-resources)Additional Resources

If you have any issues or if you want to learn more about using Algolia for search, check out this tutorial from Jason Lengstorf:

[https://youtu.be/VSkXyuXzwlc](https://youtu.be/VSkXyuXzwlc)

You can also find stories of companies using Gatsby + Algolia together [in the Algolia section of the blog](https://www.gatsbyjs.com/blog/tags/algolia).

[Edit this page on GitHub](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/adding-search-with-algolia.md)

---

---

---

---

**with support for Partial Updates**

You can specify a list of queries to run and how to transform them into an array of objects to index. When you run `gatsby build`, it will publish those to Algolia.

Here we have an example with some data that might not be very relevant, but will work with the default configuration of `gatsby new`

```
npm install --save gatsby-plugin-algolia-search
```

First add credentials to a .env file, which you won’t commit. If you track this in your file, and especially if the site is open source, you will leak your admin API key. This would mean anyone is able to change anything on your Algolia index.

```
// .env.production
ALGOLIA_APP_ID=XXX
ALGOLIA_API_KEY=XXX
ALGOLIA_INDEX_NAME=XXX
```

```
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// gatsby-config.js
const myQuery = `{
  allSitePage {
    edges {
      node {
        # try to find a unique id for each node
        # if this field is absent, it's going to
        # be inserted by Algolia automatically
        # and will be less simple to update etc.
        objectID: id
        component
        path
        componentChunkName
        jsonName
        internal {
          type
          contentDigest
          owner
        }
      }
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node), // optional
    indexName: 'index name to target', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
    matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
];

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: "index name to target", // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
      },
    },
  ],
};
```

## [](https://www.gatsbyjs.com/plugins/gatsby-plugin-algolia-search/#partial-updates-v040)Partial Updates `v0.4.0`

By default all records will be reindexed on every build. To enable only indexing the new, changed and deleted records include the following in the options of the plugin:

```
  resolve: `gatsby-plugin-algolia-search`,
  options: {
    /* ... */
    enablePartialUpdates: true,
    /* (optional) Fields to use for comparing if the index object is different from the new one */
    /* By default it uses a field called "modified" which could be a boolean | datetime string */
    matchFields: ['slug', 'modified'] // Array<String> default: ['modified']
  }
```

This saves a lot of Algolia operations since you don’t reindex everything on everybuild.

### [](https://www.gatsbyjs.com/plugins/gatsby-plugin-algolia-search/#advanced)Advanced

You can also specify `matchFields` per query to check for different fields based on the type of objects you are indexing.

---

---

---

---

![medium blog image](https://miro.medium.com/max/1400/1*4gek2a2hKVKa_sEyWoXbrg.png)

Photo by [Anthony Martino](https://unsplash.com/@amartino20)

In this post, we will be looking into how to add Algolia search to our gatsby site. We will see how to configure Algolia in Gatsby and add Algolia’s built-in component.

## Setup

To setup algolia search, first we need to:

-   create an account at algolia’s website [here](https://www.algolia.com/users/sign_up)
-   once done, we can create an index that we can name whatever we want (i.e blog)

After that, we can grab the API keys and put them in our`.env` which we can find them here

![medium blog image](https://miro.medium.com/max/1300/0*Jkrvjip5cqmavqu3.png)

```
// .envGATSBY_ALGOLIA_APP_ID="xxxx"GATSBY_ALGOLIA_INDEX_NAME="test"ALGOLIA_API_KEY="xxx"GATSBY_ALGOLIA_SEARCH_KEY="xxx"
```

## Installation

Now we can move back to code, by installing a couple of plugins that we are going to need

```
npm install algoliasearch dotenv gatsby-plugin-algolia react-instantsearch-dom
```

After installing the gatsby plugin it will allow us to fetch the data with GraphQL and send it to algolia.

## Configuration

Now that we installed the plugins, we can start adding the configuration in `gatsby-config` file to fetch the data from the build and insert it into the index in algolia.

To do so, we need to create the query as follow

```
const blogQuery = `  {   posts: allMdx(    filter: { fileAbsolutePath: { regex: "/posts/" } }  ) {    edges {      node {        objectID: id        frontmatter {          title          date          path        }        excerpt(pruneLength: 5000)      }    }  }  }`;
```

and then add the transformer method which is just mapping the data

```
const settings = { attributesToSnippet: [`excerpt:20`] };const queries = [  {    query: blogQuery,    transformer: ({ data }) =>      data.posts.edges.map(({ node: { frontmatter, ...rest } }) => {        return {          ...frontmatter,          ...rest,        };      }),    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,    settings,  },];
```

Basically, what the above snippet does is that the `queries` object going to grab the GraphQL JSON data and turn them each into own separate object that we want algolia to index from Gatsby GraphQL layer.

This is going to contain GraphQL query, optional index name, transformer function and settings object.

The next step will be configuring `gatsby-plugin-algolia` as follow

```
require('dotenv').config();// we can pass an object with a property of path to config method which would look// like this for example {path: '.env.production'} in case if you want to configure for different modesmodule.exports = {  plugins: [    {      resolve: `gatsby-plugin-algolia`,      options: {        appId: process.env.GATSBY_ALGOLIA_APP_ID,        apiKey: process.env.ALGOLIA_API_KEY,        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries        queries,        chunkSize: 10000, // default: 1000      },    },  ],};
```

The plugin takes an `options` object with the keys we added earlier in the env file and the queries object which contains our query (we can pass more than one query to that.

For example, a query for posts and a different one for pages) and the transformer method for mapping, index name and any settings we wish to pass.

Once the configuration is done, we can run the project in production mode to send the data to algolia, so that we can test it by running `gatsby build` and it will look like the following

![medium blog image](https://miro.medium.com/max/1300/0*0-wkuOAboahagf58.png)

If you look in the dashboard after the build finished, we should be able to see the data as well

![medium blog image](https://miro.medium.com/max/1300/0*iEHnWRNlDPVuiJPJ.png)

Now we can move to the frontend part after configuration and indexing part finished.

## Frontend

In this section, we will be looking into how to install algolia search to our gatsby site.

## Installing Algolia search component

To do that, first, we can create a new component and call it `Search.js` which would utilise algolia's instant-search component (you can check the [docs](https://www.algolia.com/doc/guides/building-search-ui/installation/react/) for more info)

```
import algoliasearch from 'algoliasearch/lite';import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';import React from 'react';const appId = process.env.GATSBY_ALGOLIA_APP_ID;const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;const searchClient = algoliasearch(appId, searchKey);const Search = () => (  <InstantSearch    searchClient={searchClient}    indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}  >    <SearchBox />    <Hits />  </InstantSearch>);export default Search;
```

As we can see in the above snippet, first we added `InstantSearch` component which as defined by algolia in the [docs](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/) as a component that interacts with Algolia’s API, to easily build instant-search applications.

`InstantSearch` takes two properties, `searchClient` that contains your app id, search key (which was defined in env file earlier) and indexName that we defined in algolia's account.

The component has two children components, `SearchBox` component as the name implies and input field with search and delete icon and a `Hits` component (Hits are the return result from your query).

The result of the search component will look something like this

![medium blog image](https://miro.medium.com/max/1300/0*IfRz1pfkJb0PVS__.png)

We can replace the HTML we see in the screenshot from the list of posts with the actual hits which is a good spot to do highlighting for the searched keywords etc.

To do so, we can add an attribute `hitComponent` which going to pass the data that it receives from `Hits` to the component we pass to it. for example postPreview.

```
import PostPreview from './PostPreview';<Hits hitComponent={PostPreview} />;
```

And our `PostPreview` can look something like the following where we add A link to the post and show the excerpt about the post.

```
import React from 'react';import { Link } from 'gatsby';import { Highlight } from 'react-instantsearch-dom';import { css } from '@emotion/core';const PostPreview = ({ hit }) => {  return (    <article>      <h3>        <Link to={hit.path}>          <Highlight hit={hit} attribute="title" tagName="mark" />        </Link>      </h3>      <small>{new Date(hit.date).toLocaleDateString()}</small>      <p>        <Highlight hit={hit} attribute="excerpt" tagName="mark" />      </p>    </article>  );};export default PostPreview;
```

once that done, we can add another widget that does the highlighting. By default, the prop `attribute` that was added to `Highlight` component is going to be enabled on all the searchable attributes, but you can limit it to a specific one that you want to make it searchable.

The `Highlight` widget is going to look for the attribute to highlight, which is going to create a span around the searched term in the content and highlight that span.

An example of adding the `Highlight` widget

```
<Highlight hit={hit} attribute="title" tagName="mark" />
```

By adding the above, it is going to highlight the attribute title if it matches the search query as you can see below

![medium blog image](https://miro.medium.com/max/1300/0*1p44LY1vxnS3NTuP.png)

As a result, now we have `Search` component that uses algolia `InstantSearch` as a base component.

**Following the post and you can find a starter repo** [**here**](https://github.com/gabroun/gatsby-mdx-starter) **that shows usage of Algolia Search component**

## In Conclusion

I hope part one showed how we can install and add algolia search component to our Gatsby site. Part two will cover how to create a custom search component with Algolia.

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---
