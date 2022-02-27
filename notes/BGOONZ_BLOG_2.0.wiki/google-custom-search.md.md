
# Providing Structured Data  |  Programmable Search Engine

> ## Excerpt
> This page shows you how to add the structured data that search operators depend on.

---
This page shows you how to add the structured data that search operators depend on.

Web pages are often filled with free form text, which is easy for humans to read but more difficult for computers to understand. Some web pages have information with greater structure that is easy to read, such as a page date embedded in the URL or title of the page, or machine-readable fields embedded in the HTML code. Google extracts a variety of structured data from web pages. This page describes the structured data types Google extracts that are available for use in [Custom Snippets](https://developers.google.com/custom-search/docs/snippets) and [Structured Search](https://developers.google.com/custom-search/docs/structured_search).

1.  [Overview](https://developers.google.com/custom-search/docs/structured_data#overview)
2.  [Providing Data to Programmable Search Engine](https://developers.google.com/custom-search/docs/structured_data#custom_search)
    -   [Using PageMaps](https://developers.google.com/custom-search/docs/structured_data#pagemaps)
    -   [Using `<meta>` tags](https://developers.google.com/custom-search/docs/structured_data#metatags)
    -   [Using Page Dates](https://developers.google.com/custom-search/docs/structured_data#page_dates)
    -   [Formatting Dates](https://developers.google.com/custom-search/docs/structured_data#formatting_dates)
3.  [Providing Data to Rich Snippets](https://developers.google.com/custom-search/docs/structured_data#rich_snippets)
    -   [Using Microformats](https://developers.google.com/custom-search/docs/structured_data#microformats)
    -   [Using Resource Description Framework in Attributes (RDFa)](https://developers.google.com/custom-search/docs/structured_data#rdfa)
    -   [Using Microdata](https://developers.google.com/custom-search/docs/structured_data#microdata)
4.  [Viewing Extracted Structured Data](https://developers.google.com/custom-search/docs/structured_data#preview_tool)

## Overview

When you are reading a webpage that sells a DVD, you can quickly figure out what the title is, what reviewers thought of the film, and how they rated it. But a computer cannot do the same things, because it doesn't understand how the information is structured.

For example, if the page has content about the DVD—along with recommendations for other items, ads from other stores, and comments from customers—then the page might have different prices for various things, not just for the DVD that is being sold. You can easily figure out the price for the DVD while dismissing the other prices, but the computer can't. Some sophisticated programs might find the prices in the webpage, but they cannot determine the rules for finding just the price of the DVD.

Structured data formats are rules that standardize the structure and content of the webpage. They are markup that you apply to text snippets so that computers can process their meaning or semantics. The markup does not change the formatting of your website, it just makes the metadata and text enclosed within the XHTML tags more meaningful to computers.

Programmable Search Engine recognizes the following formats:

-   [PageMaps](https://developers.google.com/custom-search/docs/structured_data#pagemaps): invisible blocks of XML that add metadata to pages.
-   [Microformats](https://developers.google.com/custom-search/docs/structured_data#microformats): tags used to mark up visible page content along predefined types.
-   [RDFa](https://developers.google.com/custom-search/docs/structured_data#rdfa): an alternate standard for marking up visible page content along arbitrary types.
-   [Microdata](https://developers.google.com/custom-search/docs/structured_data#microdata): a new HTML5 standard for marking up visible page content.
-   [`<meta>` tags](https://developers.google.com/custom-search/docs/structured_data#metatags): standard HTML tags, a subset of which are parsed by Google.
-   [Page Date](https://developers.google.com/custom-search/docs/structured_data#page_dates): features on a page indicating its date, which Google attempts to parse

You can use one or a combination of formats that you prefer. Note that unlike Programmable Search Engine, Google Search does not use PageMaps or `<meta>` tags when generating rich snippets. Google Search does consider information such as microformats, microdata, RDFa, and the page date when it is generating snippet, but it has its own algorithm and policies for determining what information gets shown to users. So while structured data you add to your pages can be presented on Programmable Search Engine, it might not be displayed in Google Search results.

The following includes an idealized snippet of plain HTML from a review site:

<div>  <div>  <h1>Pizza My Heart</h1>  </div>  <span>88%</span> like it <a href\="#reviews"\>See all 12 reviews</a>  <span>Under $10 per entree</span>  
<div>

The following snippet shows the previous HTML code extended with a format called [microformats](https://developers.google.com/custom-search/docs/structured_data#microformats):

<div class\="hreview-aggregate"\>  <div class\="vcard item"\>  <h1 class\="fn"\>Pizza My Heart</h1>  </div>  <span class\="rating average"\>88%</span> like it <a href\="#reviews"\>See all <span class\="count"\>12</span> reviews</a>  <span class\="pricerange"\>Under $10 per entree</span>  
<div>

The [Structured Data Testing Tool](http://www.google.com/webmasters/tools/richsnippets?view=cse&url=http://www.urbanspoon.com/r/6/765421/restaurant/Pizza-My-Heart-Santa-Cruz) shows the information Google Search extracts from this page:

hreview\-aggregate  
  item hcard  
    fn \= Pizza My Heartrating  
    average (normalized to 5.0 scale) \= 4.5 average \= 88%pricerange \= Under $10 per entree  
count \= 12  

Programmable Search Engine uses a subset of the information available for Google Search; this subset is shown at the bottom of the testing tool page:

review (source \= MICROFORMAT)ratingstars \= 4.5ratingcount \= 12pricerange \= Under $10 per entree

By incorporating standard structured data formats into your webpages, you not only make the data available to Programmable Search Engine, but also for any service or tool that supports the same standard. Apply structured data to the most important information in the webpage, so you can present them directly in the results. For example, if you have a website selling Android devices, include structured data about the ratings, prices, availability, and whatnot. When your users search for the Android devices, they can see the ratings, prices, and availability at a glance.

So computers can now understand the types of data in the webpage. Now what? Computers can also start doing the menial task of finding and combining information in different webpages. This frees users from totally boring tasks, such as sifting through multiple pages to find items that they want. Search engines, such as Programmable Search Engine, can process the structured data in your webpages and display it in useful, more meaningful ways, such as [custom snippets](https://developers.google.com/custom-search/docs/snippets) and [structured search](https://developers.google.com/custom-search/docs/structured_search).

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

## Providing Data to Programmable Search Engine

Google supports several kinds of data which are used primarily by Programmable Search Engine: Pagemaps, a subset of `<meta>` tags, and approximate page dates.

### Using PageMaps

PageMaps is a structured data format that provides Google with information about the data on a page. It enables website creators to embed data and notes in webpages. Although the structured data is not visible to your users or to Google Web Search, Programmable Search Engine recognizes it when indexing your webpages and returns it directly in the [Programmable Search Element](https://developers.google.com/custom-search/docs/element).

You can explicitly add PageMaps to a page, or submit PageMaps using a Sitemap. Google will also use other information on a page, such as rich snippets markup or `meta` tag data, to create a PageMap.

Unlike the other structured data formats described below, PageMaps does not require you to follow standard properties or terms, or even refer to an existing vocabulary, schema, or template. You can just create custom attribute values that make sense for your website. Unlike the structured data attributes of microformats, microdata and RDFa, which are added around user-visible content in the body of the HTML, PageMaps metadata is included in the `head` section of the HTML page. This method supports arbitrary data which may be needed by your application but which you might not want to display to users.

Once you create a PageMap, you can submit it to Google using any of the following methods:

-   [Add PageMap data directly to your HTML page.](https://developers.google.com/custom-search/docs/structured_data#addtopage) Google will discover the PageMap information when we crawl your site.
-   [Add PageMap data to a Sitemap](https://developers.google.com/custom-search/docs/structured_data#addtositemap), and submit that Sitemap for indexing. This is a good option if you don't want PageMap exposed in the HTML source code of your page.

### PageMap tag definitions

The following table outlines the requirements for adding PageMap data to a Sitemap.

Tag

Required?

Description

`PageMap`

Yes

Encloses all PageMap information for the relevant URL.

`DataObject`

Yes

Encloses all information about a single element (for example, an action).

`Attribute`

Yes

Each DataObject contains one or more attributes.

**Note:** PageMaps are XML blocks and therefore must be formatted correctly; in particular, the `PageMap`, `DataObject` and `Attribute` tags in the XML are case sensitive, as are the `type`, `name`, and `value` attributes.

### Add PageMap data directly to your HTML page

Here's an example of PageMap data for a webpage about badminton:

<html>  <head> ... <!--  
  <PageMap>  
     <DataObject type="document">  
        <Attribute name="title">The Biomechanics of a Badminton  
        Smash</Attribute>  
        <Attribute name="author">Avelino T. Lim</Attribute>  
        <Attribute name="description">The smash is the most  
        explosive and aggressive stroke in Badminton. Elite athletes can  
        generate shuttlecock velocities of up to 370 km/h. To perform the  
        stroke, one must understand the biomechanics involved, from the body  
        positioning to the wrist flexion. </Attribute>  
        <Attribute name="page\_count">25</Attribute>  
        <Attribute name="rating">4.5</Attribute>  
        <Attribute name="last\_update">05/05/2009</Attribute>  
     </DataObject>  
     <DataObject type="thumbnail">  
        <Attribute name="src" value="http://www.example.com/papers/sic.png" />  
        <Attribute name="width" value="627" />  
        <Attribute name="height" value="167" />  
     </DataObject>  
  </PageMap>  
  -->  </head> ...</html>  

### Add PageMap data to a Sitemap

If you don't want to include PageMap data in the HTML of your pages, you can add PageMap data to a Sitemap and submit that Sitemap via the [Search Console Sitemaps tool](https://search.google.com/search-console/sitemaps).

Here's an example of a Sitemap that includes PageMap information for two URLs: http://www.example.com/foo and http://www.example.com/bar.

<?xml version\="1.0" encoding\="UTF-8"?>  
<urlset xmlns\="http://www.sitemaps.org/schemas/sitemap/0.9"\>  <url>  <loc>http://www.example.com/foo</loc>  <PageMap xmlns\="http://www.google.com/schemas/sitemap-pagemap/1.0"\>  <DataObject type\="document" id\="hibachi"\>  <Attribute name\="name"\>Dragon</Attribute>  <Attribute name\="review"\>3.5</Attribute>  </DataObject>  </PageMap>  </url>  <url>  <loc>http://www.example.com/bar</loc>  <PageMap xmlns\="http://www.google.com/schemas/sitemap-pagemap/1.0"\>  <DataObject type\="document" id\="biggreenegg"\>  <Attribute name\="name"\>Ribs</Attribute>  <Attribute name\="review"\>4.0</Attribute>  </DataObject>  </PageMap>  </url>  
</urlset>  

### Parsing PageMap data

Using the Programmable Search Element, custom attributes are returned in the richSnippet property of each result, can can be used with Search Element [Callbacks](https://developers.google.com/custom-search/docs/element#search-time-callbacks).

<r n\="1"\>  <u> http://www.xyz.com/business/vending\_machine.html </u> ... <t> In Italy, a Vending Machine Even Makes the <b>Pizza</b> </t> ... <s>The European vending machine industry has annual sales of about #33  
 billion, much of it coming from factories and offices.</s> ... <PageMap>  <DataObject type\="image"\>  <Attribute name\="image\_src" value\="http://www.nytimes.com/images/2009/03/14/business/14vend.751.jpg"/>  </DataObject>  <DataObject type\="publication"\>  <Attribute name\="author" value\="John Tagliabue"/>  <Attribute name\="date" value\="March 14, 2009"/>  <Attribute name\="category" value\="Business/World Business"/>  </DataObject>  </PageMap> ...</r>

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

### Using `<meta>` tags

While PageMaps allow you to precisely specify the data you want for each page, sometimes you have a large amount of content which you do not want to annotate. Google extracts selected content from [META](http://www.w3.org/TR/1999/REC-html401-19991224/struct/global.html#h-7.4.4.2) tags of the form `<meta name="_KEY_" content="_VALUE_">`. We do not support variants of the META tag, such as the use of `property` instead of `name`.

While we explicitly exclude common tags that are usually inserted programmatically by web authoring tools, such as `robots`, `description`, and `keywords`, rarer tags specific to your site will be extracted and put into a special data object of type `metatags`, which can be used with all of Custom Search's structured data features. For example, a `<meta>` tag of the form:

<meta name\="pubdate" content\="20100101"\>  

creates a PageMap DataObject which is returned in XML results like this:

<r n\="1"\> ... <PageMap>  <DataObject type\="metatags"\>  <Attribute name\="pubdate" value\="20100101"/>  </DataObject>  </PageMap> ...</r>

The data in this automatically created PageMap can be used anywhere you can use data from a PageMap explicitly included in your page's content. For instance, it can be used with structured search operators like [Sort by Attribute](https://developers.google.com/custom-search/docs/structured_search#sort_by_attribute):

https://www.google.com/cse?cx=12345:example&q=oil+spill**&sort=metatags-pubdate**  

or with the [Programmable Search Element](https://developers.google.com/custom-search/docs/structured_search#structured_search_element):

...  
<div class\="gcse-search" sort\_by\="metatags-pubdate:d:s"\></div\>  
...  

The `<meta>` tags excluded by Google include:

-   robots
-   description
-   keywords
-   revisit-after
-   generator
-   verify-v1
-   googlebot
-   google-site-verification
-   mssmarttagspreventparsing
-   no-cache

Google attempts to include all other `<meta>` tags, with the caveat that punctuation, special characters and embedded spaces in the `name` field of `<meta>` tags may not be parsed correctly. Programmable Search Engine explicitly supports periods and dashes in `<meta>` tag names. Programmable Search Engine does not explicitly support other special characters within `<meta>` tag names, but some special characters may be accepted correctly if they are [URL encoded](http://en.wikipedia.org/wiki/Percent-encoding).

#### Limitations

Programmable Search Engine will convert up to 50 `<meta>` tags to PageMaps, as long as the total text size of all processed properties does not exceed 1MB, with no individual property exceeding 1024 characters.

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

### Using Page Dates

In addition to metadata which you explicitly specify on a page, Google also estimates a page date based on features of the page such as dates in the title and URL. Programmable Search Engine allows you to use this date to sort, bias and range restrict results by using a special metadata key of `date`. This estimated date can be used in all operators that use the `&sort=` URL parameter, including [Sort by Attribute](https://developers.google.com/custom-search/docs/structured_search#sort_by_attribute), [Bias by Attribute](https://developers.google.com/custom-search/docs/structured_search#bias_by_attribute), [Restrict to Range](https://developers.google.com/custom-search/docs/structured_search#restrict_to_range).

**Note:** The page date is not added to the PageMap, so it is not returned in JSON API results, cannot be used in the Programmable Search Engine element, and cannot be used with the [Filter by Attribute](https://developers.google.com/custom-search/docs/structured_search#filter_by_attribute) feature.

The following examples show the use of the page date with these operators:

If you want to...

Send this URL...

To learn more see...

Sort results by date in descending order

`https://www.google.com/cse?cx=12345:example&q=oil+spill**&sort=date**`

[Sort by Attribute](https://developers.google.com/custom-search/docs/structured_search#sort_by_attribute)

Bias results strongly towards newer dates

`https://www.google.com/cse?cx=12345:example&q=oil+spill**&sort=date:d:s**`

[Bias by Attribute](https://developers.google.com/custom-search/docs/structured_search#bias_by_attribute)

Bias results weakly towards older dates

`https://www.google.com/cse?cx=12345:example&q=oil+spill**&sort=date:a:w**`

[Bias by Attribute](https://developers.google.com/custom-search/docs/structured_search#bias_by_attribute)

Return results from January 1 to February 1 of 2010 (inclusive)

`https://www.google.com/cse?cx=12345:example&q=oil+spill**&sort=date:r:20100101:20100201**`

[Restrict to Range](https://developers.google.com/custom-search/docs/structured_search#restrict_to_range)

Google's estimate of the right date for a page is based on features such as the byline date of news articles or an explicitly specified date in the title of the document. If a page has poorly specified or inconsistent dates Google's estimate of the page date may not make sense, and your Programmable Search Engine may return results ordered in a way you do not expect.

### Formatting Dates

A site may provide date information implicitly, relying on Google's estimated page date feature to detect dates embedded in the page URL, title or other features, or explicitly, by supplying a date in a structured data format. In either case, effective use of dates requires formatting the dates correctly.

For Programmable Search Engine's [Sort by Attribute](https://developers.google.com/custom-search/docs/structured_search#sort_by_attribute), [Bias by Attribute](https://developers.google.com/custom-search/docs/structured_search#bias_by_attribute), [Restrict to Range](https://developers.google.com/custom-search/docs/structured_search#restrict_to_range) features, Google attempts to parse dates using both conventional date formatting and formal standards such as [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) and [IETF RFC 850](http://www.faqs.org/rfcs/rfc822.html). The following complete date formats are accepted:

Date Format

Example Date

YYYY-MM-DD

2009-12-31

YYYY/MM/DD

2009/12/31

YYYYMMDD

20091231

Month DD YYYY

December 31 2009

DD Month YYYY

31 December 2009

Google will attempt to parse variants of these date formats, such as `MM/DD/YYYY` and `DD/MM/YYYY`. However, the more ambiguous the date, the less likely that Google will parse it correctly. For example, the date `06/07/08` is extremely ambiguous and it is unlikely Google will assign to it the interpretation you want. For best results, use a complete [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) date format with a fully specified year.

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

## Rich Snippets

Google also extracts a variety of structured data from Microformats, RDFa and Microdata to be used in [rich snippets](http://googlewebmastercentral.blogspot.com/2009/05/introducing-rich-snippets.html), extended presentations of standard Google search results. A subset of this data is available for use in Programmable Search Engine's structured data operators—typically, the same data used in rich snippets. For example, if you have marked up your pages with the Microformat `hrecipe` standard, you could sort on the number of rating stars of the recipe with an operator like `&sort=recipe-ratingstars`. Google is continually extending the data it extracts and how much of this data is available for use in Programmable Search Engine; to see what data we currently extract, you can use the [Structured Data Testing Tool](https://developers.google.com/custom-search/docs/structured_data#preview_tool) in Search Console.

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

### Using Microformats

[Microformats](http://microformats.org/) is a specification for representing commonly published items such as reviews, people, products, and businesses. Generally, microformats consist of `<span>` and `<div>` elements and a class property, along with a brief and descriptive property name (such as `dtreviewed` or `rating`, which represent the date an item was reviewed and its rating, respectively).

The following includes a snippet of plain HTML code.

<p><strong>Kevin Grendelzilla</strong></p>  
<p>Technical writer at Google</p>  
<p>555 Search Parkway</p>  
<p>Googlelandia, CA 94043</p>  

The following snippet shows the previous HTML code extended with microformats:

<div **class\="vcard"**\>  <p><strong **class\="fn"**\>Kevin Grendelzilla</strong></p>  <p><span **class\="title"**\>Technical writer</span> at <span **class\="org"**\>Google</span></p>  <p><span **class\="adr"**\>  <span **class\="street-address"**\>555 Search Parkway</span>  <span **class\="locality"**\>Googlelandia</span>, <span **class\="region"**\>CA</span>  <span **class\="postcode"**\>94043</span>  </span></p>  
</div>

Google extracts a subset of this data, normalized and reorganized to correspond to how it would be displayed in rich snippets. This subset would be returned in XML results like this:

<r n\="1"\> ... <PageMap>  <DataObject type\="person"\>  <Attribute name\="location" value\="Googlelandia"/>  <Attribute name\="role" value\="Technical Writer"/>  </DataObject>  </PageMap> ...</r>

To see what Google extracts for a page, use the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool) in Google's Search Console site. The data Google extracts from pages is continually being extended, so check back periodically to see if the data you want has been made available. In the meantime, if you need custom data that does not correspond to a defined microformat, you can use [PageMaps](https://developers.google.com/custom-search/docs/structured_data#pagemaps).

To learn more about microformats, see the [structured data documentation](https://developers.google.com/search/docs/guides/intro-structured-data) and [microformats.org](http://microformats.org/get-started).

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

### Using Resource Description Framework in Attributes (RDFa)

[Resource Description Framework in attributes (RDFa)](http://www.w3.org/TR/xhtml-rdfa-primer/) is more flexible than microformats. Microformats specify both a syntax for including structured data into HTML documents and set of microformat classes each with its own specific vocabulary of allowed attributes. RDFa, on the other hand, specifies only a syntax and allows you to use existing vocabularies of attributes or create your own. It even lets you combine multiple vocabularies freely. If the existing vocabularies do not meet your needs, you can define your own standards and vocabularies by creating new fields.

The following includes a snippet of plain HTML code.

<div>  <h3>5 Centimeters Per Second</h3>  <h4>Makoto Shinkai</h4> ...</div>

The following snippet shows the previous HTML code extended with RDFa:

<div>  <h3 **property\="dc:title"**\>5 Centimeters Per Second</h3>  <h4 **property\="dc:maker"**\>Makoto Shinkai</h4> ...</div>

To learn more about RDFa, see the [structured data documentation](https://developers.google.com/search/docs/guides/intro-structured-data). To learn more about defining an RDF schema, see the [RDF Primer](http://www.w3.org/TR/2004/REC-rdf-primer-20040210/#rdfschema).

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

### Using Microdata

HTML5, the latest revision of the language web pages are written in, defines a format called [microdata](https://www.w3.org/TR/microdata/) that incorporates the ideas of RDFa and Microformats directly into the HTML standard itself. Microdata uses simple attributes in HTML tags (often `span` or `div`) to assign brief and descriptive names to items and properties.

Like RDFa and Microformats, Microdata's attributes help you specify that your content describes information of specific types, like reviews, people, information or events. For example, an person can have the properties name, nickname, url, title and affiliation. The following is an example of a short HTML block showing this basic contact information for Bob Smith:

<div> My name is Bob Smith but people call me Smithy. Here is my home page: <a href\="http://www.example.com"\>www.example.com</a> I live in Albuquerque, NM and work as an engineer at ACME Corp.</div>

The following is the same HTML marked up with microdata. Note that in this example we use a property 'nickname' that is not yet officially part of schema.org. Custom Search is a good way to explore possible schema.org extensions locally before proposing them to the wider community.

<div itemscope itemtype\="http://schema.org/Person"\> My name is <span itemprop\="name"\>Bob Smith</span> but people call me <span itemprop\="nickname"\>Smithy</span>.  
  Here is my home page: <a href\="http://www.example.com" itemprop\="url"\>www.example.com</a> I live in Albuquerque, NM and work as an <span itemprop\="title"\>engineer</span> at <span itemprop\="affiliation"\>ACME Corp</span>.  
</div>

The first line of this example includes a HTML `div` tag with an `itemscope` attribute that indicates that `div` contains a microdata item. The `itemtype="http://schema.org/Person"` attribute on the same tag tells us this is a person. Each property of the person item is identified with the `itemprop` attribute; for example, `itemprop="name"` on the `span` tag describes the person's name. Note that you are not limited to `span` and `div`; the `itemprop="url"` tag is attached to an `a` (anchor) tag.

To learn more about microdata, see the [structured data documentation](https://developers.google.com/search/docs/guides/intro-structured-data) and the [HTML Microdata](https://www.w3.org/TR/microdata/) standard.

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

After you have tagged your webpages with structured data, you can use the [Rich Snippets Testing Tool](http://www.google.com/webmasters/tools/richsnippets?view=cse) to view the structured data that can be extracted from the webpage. The tool provides two views: the first view shows the structured data that Google Search can extract from the page, while the second view shows what Programmable Search Engine can extract from the page.

If you haven't tagged any of your webpages but would like to see what extracted structured data might look like, you can enter the URL of other websites. Popular sites that have review information or list of contacts are more likely to have structured data. If you see result snippets on Google search that looks similar to Figure 1, you can conclude that the webpage has structured data.

**Figure 1:** Result snippet with rating, price range, and review.

![](https://developers.google.com/custom-search/images/snippets_rich_snippets_basic.png)

Once you have found a page with structured data, you can view that page's source to see the structured data that site has implemented, or view that page in the Structured Data Testing Tool to see what data is extracted for Google Search rich snippets and Programmable Search Engine structured search. For example, consider the following snippet of HTML with structured data about a person implemented as microformats:

<div class\="vcard"\>  <h1 class\="fn"\>  <span class\="given-name"\>Godzilla</span>  <span class\="family-name"\>Gigantis</span>  </h1>  <span class\="title"\>Senior Giant Monster</span>, <span class\="adr"\>  <span class\="locality"\>Tokyo</span>  </span>  
<div>

From a page with this markup, Google extracts the following data for use in rich snippets:

hcard  
  fn \= Godzilla Gigantis n  
    family\-name \= Gigantis given\-name \= Godzilla adr  
    locality \= Tokyo title \= Senior Giant Monster 

Programmable Search Engine extracts the following subset of that data for use in structured search:

person (source \= MICROFORMAT) location \= Tokyo

Thus, this tool allows you to view not only the structured data markup recognized for Google Search, but also the additional customized markup that we support in Programmable Search Engine. You can immediately see how your web page would be processed during indexing, and what metadata attributes would be returned in PageMaps in your Programmable Search Engine results. If there are any errors in your markup, you can fix them right away. Remember, you need to add the `&view=cse` parameter to the URL or click the checkbox to review the additional metadata extracted by Programmable Search Engine.

[Back to top](https://developers.google.com/custom-search/docs/structured_data#top)

## Exploring Other Features

Structured data can be used in several Programmable Search Engine features including the following:

-   If you want to learn more about using structured data in snippets, see [Customizing Your Result Snippets](https://developers.google.com/custom-search/docs/snippets).
-   If you want to learn more about changing the order of your results, see [Structured Search](https://developers.google.com/custom-search/docs/structured_search).



---

# Customizing Results Snippets  |  Programmable Search Engine

> ## Excerpt
> This page describes how to customize the result snippets for your own website. To render your customized snippets, you must add structured data to your webpages.

---
This page describes how to customize the result snippets for your own website. To render your customized snippets, you must add structured data to your webpages.

1.  [Overview](https://developers.google.com/custom-search/docs/snippets#overview)
2.  [Creating Rich Snippets with the Programmable Search Element](https://developers.google.com/custom-search/docs/snippets#creating_snippets)
3.  [Exploring Other Features](https://developers.google.com/custom-search/docs/snippets#next)

## Overview

Programmable Search Engine helps users find the right page by showing them a snippet—a small sample of content that gives search users an idea of what's in the webpage. To learn more about snippets, see the Webmaster Central [blog post](http://googlewebmastercentral.blogspot.com/2007/11/anatomy-of-search-result.html) on the anatomy of a search result. If you do not like the standard snippets created by the Programmable Search Engine algorithm, you can create your own snippets. You can showcase key information—such as image thumbnails, summaries, dates, authorship, ratings, and prices—directly in your snippets. Having the most relevant information in your search results makes the webpages in your site more compelling to your users.

The following figures demonstrate various ways you can customize the snippets in your search results.

**Figure 1:** Result snippet with rating, price range, and review.

![](https://developers.google.com/custom-search/images/snippets_rich_snippets_basic.png)

**Figure 2:** Result snippet with formatting, links, image, and comparative information.

![Example of a result with rich snippets shows ratings, prises, and comparisons to other products](https://developers.google.com/custom-search/images/snippets_rich_snippets_fancy.png)

**Figure 3:** Result snippet that includes document types, authors, page views, and comments.

![](https://developers.google.com/custom-search/images/snippets_pagemap_docs.png)

**Figure 4:** Richly formatted result snippet that provides multimedia access and buttons ("ADD TO CART").

![](https://developers.google.com/custom-search/images/snippets_pagemap_songlist_fancy.png)

[Back to top](https://developers.google.com/custom-search/docs/snippets#top)

## Creating Rich Snippets with the Programmable Search Element

Essentially, creating rich snippets involves the following steps:

1.  Provide [structured data](https://developers.google.com/custom-search/docs/structured_data) in your webpages.
    
    When Programmable Search Engine is indexing your webpages, it recognizes and preserves the metadata.
    
2.  Fetch that structured data in the search results for your Programmable Search Engine.
    
    The Programmable Search Engine server can return the search results, along with the structured data in JSON format.
    
3.  Create a presentation layer to transform the structured data into formatted HTML.
    
    A presentation layer is a set of code (such as JavaScript, PHP, JSP and ASP) that transforms the raw data into a format that is displayed to the user. In the case of Programmable Search Engine, you can:
    
    -   Use the [Programmable Search Element](https://developers.google.com/custom-search/docs/element) to transform JSON output for presentation to the user.
    -   Write your own custom presentation layer that transforms JSON data to HTML that is presented to the end user using Search Element [Callbacks](https://developers.google.com/custom-search/docs/element#search-time-callbacks)

Structured data extraction is documented in more detail in the [Structured Data](https://developers.google.com/custom-search/docs/structured_data) page, and creating a presentation layer with the Programmable Search Element is documented in more detail at the [Programmable Search Element](https://developers.google.com/custom-search/docs/element) page.

[Back to top](https://developers.google.com/custom-search/docs/snippets#top)

## Exploring Other Features

Custom Snippets works well with several other Programmable Search Engine features:

-   If you want to learn more about changing the order of your results, see [Drilling Deeper into Search Results](https://developers.google.com/custom-search/docs/structured_search).
-   If you want to learn more about what structured data Google supports, see [Providing Structured Data](https://developers.google.com/custom-search/docs/structured_data).
-   If you want to learn more about the Programmable Search Element, see [Programmable Search Element documentation](https://developers.google.com/custom-search/docs/element).
---

# Filtering and sorting search results  |  Programmable Search Engine

> ## Excerpt
> To help users get to the right pages on your site, Programmable Search Engine provides structured search operators that enable you to drill down into subsets of search results based on structured data found in your pages or the metadata associated with the images on your sites.

---
## Overview

To help users get to the right pages on your site, Programmable Search Engine provides structured search operators that enable you to drill down into subsets of search results based on [structured data](https://developers.google.com/custom-search/docs/structured_data) found in your pages or the metadata associated with the images on your sites.

For **image search**, Google relies on both structured data on your pages and image metadata discovered when crawling your site. We recommend that all webmasters become familiar with our [image publishing guidelines](http://www.google.com/support/webmasters/bin/answer.py?answer=114016).

1.  [Web search](https://developers.google.com/custom-search/docs/structured_search#web)
    -   [Overview](https://developers.google.com/custom-search/docs/structured_search#overview)
    -   [Filter by Attribute](https://developers.google.com/custom-search/docs/structured_search#filter_by_attribute)
    -   [Sort by Attribute](https://developers.google.com/custom-search/docs/structured_search#sort_by_attribute)
    -   [Bias by Attribute](https://developers.google.com/custom-search/docs/structured_search#bias_by_attribute)
    -   [Restrict to Range](https://developers.google.com/custom-search/docs/structured_search#restrict_to_range)
2.  [Image search](https://developers.google.com/custom-search/docs/structured_search#image)
    -   [Filter by Attribute](https://developers.google.com/custom-search/docs/structured_search#image_filter_attribute)
3.  [Structured Search in the Programmable Search Element](https://developers.google.com/custom-search/docs/structured_search#structured_search_element)

## Web search

Unlike text, which is a free form sequence of words, structured data is logically organized into a set of objects with a set of attributes. Programmable Search Engine extracts a variety of structured data for use by structured search operators, including dates, authors, ratings and prices; this is the same data available for use in [custom snippets](https://developers.google.com/custom-search/docs/snippets). In addition, Programmable Search Engine supports structured data in any of the following formats:

-   **[PageMap:](https://developers.google.com/custom-search/docs/structured_data#pagemaps)** A PageMap explicitly represents structured data as DataObjects with Attributes and values, encoded as an XML block embedded in a web page. Programmable Search Engine makes all well formed PageMap data available for structured search operators; it can also be used in [custom snippets](https://developers.google.com/custom-search/docs/snippets#creating_snippets).
-   **[`meta` tags:](https://developers.google.com/custom-search/docs/structured_data#metags)** Google extracts selected content from `meta` tags of the form `<meta name="_NAME_" content="_VALUE_">`. A `meta` tag of the form `<meta name="pubdate" content="20100101">` can be used with a search operator of the form: `&sort=metatags-pubdate`.
-   **[Page Dates:](https://developers.google.com/custom-search/docs/structured_data#page_dates)** Google estimates the date for a page based the URL, title, byline date and other features. This date can be used with the sort operator using the special structured data type `date`, as in `&sort=date`.
-   **[Rich Snippets Data:](https://developers.google.com/custom-search/docs/structured_data#rich_snippets)** Google also extracts a subset of the data from public standards like Microformats, RDFa and Microdata for use in Programmable Search Engine's structured data operators. For example, to sort pages marked up with the Microformat `hrecipe` standard based on their ratings, use `&sort=recipe-ratingstars`.

[More information about providing structured data](https://developers.google.com/custom-search/docs/structured_data).

If your pages include structured data, you can then apply Programmable Search Engine's structured search operators to restrict your searches to fields with particular data values, strictly sort by numerical values, bias towards certain values rather than sort, or even restrict to a given numerical range of values.

Programmable Search Engine supports the following search operators over structured data:

-   [Filter by Attribute](https://developers.google.com/custom-search/docs/structured_search#filter_by_attribute)
-   [Sort by Attribute](https://developers.google.com/custom-search/docs/structured_search#sort_by_attribute)
-   [Bias by Attribute](https://developers.google.com/custom-search/docs/structured_search#bias_by_attribute)
-   [Restrict to Range](https://developers.google.com/custom-search/docs/structured_search#restrict_to_range)

[Back to top](https://developers.google.com/custom-search/docs/structured_search#top)

### Filter by Attribute

Filtering by attribute enables you to select three kinds of results:

-   Results with a specific attached DataObject, such as a review
-   Results with a DataObject with a given field, such as a review with a price range.
-   Results with a specific value of a field, such as a review with 5 stars.

To filter by attribute, add a `more:pagemap:_TYPE_-_NAME_:_VALUE_` operator to a search query. This restricts search results to pages which have structured data that exactly matches that type, name and value. (Programmable Search Engine will convert up to 200 attributes per page.) Attributes should not be more than 128 characters long. You can generalize this operator by omitting `VALUE` to match all instances of the named field or omitting `-NAME:VALUE` to match all objects of a given type.

To see how the complete operator is constructed from structured data, recall the example we used earlier:

\[halloween **more:pagemap:document\-author:lisamorton**\]  

Breaking down the `more:pagemap:document-author:lisamorton` restriction in more detail, the `more:` operator is what Programmable Search Engine uses for refinement labels, the `pagemap:` part of the refinement tells us to refine results by specific attributes in the indexed PageMaps, and the remaining elements of the operator—`document-author` and `lisamorton`—specify the content the restriction drills down into. Recall the PageMap from the example:

<PageMap>
  <DataObject type="document">
    <Attribute name="title">The Five Scariest Traditional Halloween Stories</Attribute>
    <Attribute name="author">lisamorton</Attribute>
  </DataObject>
</PageMap>

The `document-author:` qualifier of the operator tells us to look for the DataObject with type `document` with an Attribute named `author`. This structured data key is followed by the value `lisamorton`, which must match exactly the value of the Attribute to be returned in a search containing this restriction.

`more:p:document-author:lisamorton`

When filtering by Attribute, you can create more complex filters (and shorter commands) by using a compact query. For instance, you could add the following PageMap for a URL:

 <pagemap>  <DataObject type\="document"\>  <Attribute name\="keywords"\>horror</Attribute>  <Attribute name\="keywords"\>fiction</Attribute>  <Attribute name\="keywords"\>Irish</Attribute>  </DataObject>  </pagemap>  </page>

To retrieve results for the query "Irish AND fiction", use the following:

more:p:document-keywords:irish\*fiction

This is equivalent to `more:pagemap:document-keywords:Irish more:pagemap:document-keywords:fiction`.

To retrieve the results for "Irish AND (fiction OR horror)", use the following:

more:p:document-keywords:irish\*fiction,irish\*horror

### Using Filter by Attribute with Other Features

You can use this open-ended syntax for drill down into content specified in PageMaps on the documents on your site; you can also use this same syntax with almost all other types of [structured data](https://developers.google.com/custom-search/docs/structured_data) supported by Google, excluding only the [estimated page date](https://developers.google.com/custom-search/docs/structured_data#page_dates). You can also use these `more:pagemap:` operators with [refinement labels](http://www.google.com/support/customsearch/bin/answer.py?answer=70359) or [hidden query elements](http://www.google.com/support/forum/p/customsearch/thread?tid=3b8c2315d4ce9c85) to filter results by attributes that are important to your application, so end users will not have to type these restriction qualifiers directly.

You can also omit parts of the search operator. In the example above, note that the PageMap specifies a DataObject of type `document` and an attribute of type `author`. But not every page on your site may be a document, and not all documents may have an attributed author. If you use an operator of the form `more:pagemap:document-author`, the returned results will include all pages with an `author` Attribute in the `document` DataObject, regardless of what the value of the Attribute is. Similarly, `more:pagemap:document` will return all results with PageMaps that have DataObjects of type `document`, regardless of what fields are on that DataObject.

#### Drilling Into Tokenized Values Using Multiple Restrictions

Attribute values which contain spaces, punctuation, or special characters are almost always split into separate tokens; for example, an attribute value of "Programmable Search Engine@google" would be split into three separate tokens, "custom", "search" and "google". This permits searches on a single word embedded in a larger sequence of words and punctuation, such as an production description. (Programmable Search Engine will extract up to 10 tokens per string, so if your attribute value contains more than 10 words, not all may be available for restricting results.) For example, the following PageMap includes a production description of [Programmable Search Engine](https://programmablesearchengine.googleblog.com//):

<PageMap>
  <DataObject type="product">
    <Attribute name="description">Programmable Search Engine provides customized search engines</Attribute>
  </DataObject>
</PageMap>

The following restriction would find all pages with `product-description` attributes about "search":

\[more:pagemap:product\-description:search\]  

To drill down more deeply, you can add other restrictions; for example, to get only pages that describe products of search engine, add the restrictions:

\[more:pagemap:product\-description:search **more:pagemap:product\-description:engine**\]  

The ordering of the `more:pagemap:` restrictions is not significant; tokens are extracted from an attribute value into an unordered set.

These restrictions are combined by default with an AND; however, you could also combine them with an [OR operator](http://www.google.com/support/websearch/bin/answer.py?answer=136861) to get results that match either restrict. For example, the following is a search that would match content from either about search or game:

\[more:pagemap:product\-description:search **OR** more:pagemap:product\-description:game\]  

One exception to tokenization is for attribute values which are URLs. Since tokens from URLs have marginal usefulness, we do not generate any token from attribute values which are valid URL.

In certain cases—for example, when short tokens are frequently found together, Programmable Search Engine may combine them to create supertokens. For example, if the tokens "President" and "Obama" frequently appear next to each other, Programmable Search Engine may create the supertoken "president\_obama". As a result, `[more:pagemap:leaders-name:president_obama]` will return the same results as `[more:pagemap:leaders-name:president **AND** more:pagemap:leaders-name:obama]`.

Another principal exception to tokenization based on punctuation is the forward slash '/' when it separates numbers. Attribute values of the form 'NUMBER/NUMBER' or 'NUMBER/NUMBER/NUMBER' are treated as single contiguous tokens; for example, '3.5/5.0' and '[09/23/2006](https://programmablesearchengine.googleblog.com//2009/10/three-birthday-candles-for-custom.html)' are treated as single tokens. For example, to search on an Attribute with a value of '2006/09/23', use the restrict:

\[more:pagemap:birth\-date:2006/09/23\]  

Joining based on slashes only works when the forward slash is between numbers without spaces; spaces between the slash and the number will result in the creation of separate tokens. Furthermore, numbers joined by slashes must match exactly; the Filter by Attribute operator does not interpret these values as fractions or dates. Programmable Search Engine's other structured search operators, such as [Sort by Attribute](https://developers.google.com/custom-search/docs/structured_search#sort_by_attribute) and [Restrict to Range](https://developers.google.com/custom-search/docs/structured_search#restrict_to_range), do interpret these numbers as fractions and dates; see the documentation on [Providing Structured Data](https://developers.google.com/custom-search/docs/structured_data) for more details.

[Back to top](https://developers.google.com/custom-search/docs/structured_search#top)

### Sort by Attribute

Sometimes it isn't enough to limit a search to a specific type of results; for example, in a search over restaurant reviews you might want the highest rated restaurants to appear at the top of the list. You can achieve this with Programmable Search Engine's sort by attribute feature, which changes the ordering of results based on the values of structured data attributes. Sorting is activated by adding a `&sort=_TYPE_-_NAME_:_DIRECTION_` URL parameter to the request URL to your Programmable Search Engine. Like structured search, sort by attribute depends on structured data on your pages; unlike structured search, however, sorting requires that the field has a numerical interpretation, such as numbers and dates.

In its simplest form, you specify a structured data type based on a Data Object type and Attribute name in a PageMap and add it to the request URL as `&sort=_TYPE_-_NAME_`. For example, to sort by date on a page that represents its data as type `date` and name `sdate`, use the following syntax:

https://www.google.com/cse?cx=000525776413497593842:aooj-2z\_jjm&q=comic+con**&sort=date-sdate**  

This by default performs a hard sort in descending order - that is, search results are ordered strictly by the date, with the most recent dates (that translate to the largest numbers) ordered first. If you want to change the sort ordering to ascending, append an `:a` to the field (or append a `:d` to explicitly specify descending). For example, to show the oldest results first, you could use a restriction of the form:

https://www.google.com/cse?cx=000525776413497593842:aooj-2z\_jjm&q=comic+con**&sort=date-sdate:a**  

Sorted results from your engine are presented based on the value those pages have in their PageMaps for that DataObject and Attribute. Pages which lack PageMaps, that DataObject type or a parsable value for that Attribute will not show up in a hard sort. In the examples above, pages without a `date-sdate` attribute will not show up in the results. Hard sorting cannot be combined with the Bias by Attribute feature described in the next section, but it can be combined with [Filter by Attribute](https://developers.google.com/custom-search/docs/structured_search#filter_by_attribute) and [Restrict to Range](https://developers.google.com/custom-search/docs/structured_search#restrict_to_range).

[Back to top](https://developers.google.com/custom-search/docs/structured_search#top)

### Bias by Attribute

Sometimes you do not want to exclude results which do not have a value; for example you wanted to search for Lebanese cuisine; a variety of different restaurants might match, from pure Lebanese (most relevant) to Greek (least relevant). For this case you can use strong or weak biasing, which will strongly or weakly promote results which have your value but will not exclude results which lack it. You specify a strong or weak bias by appending a second value after the sorting direction: `&sort=_TYPE_-_NAME_:_DIRECTION_:_STRENGTH_`, either `:s` for strong bias or `:w` for weak bias (and `:h` for hard sort, though adding `:h` is optional as it is the default). For example, adding a strong bias would ensure that the best rated Mediterranean restaurants would outperform the worst rated Mediterranean restaurants, but make it unlikely that they would outrank an exact match on a Lebanese restaurant:

https://www.google.com/cse?cx=12345:example&q=lebanese+restaurant**&sort=review-rating:d:s**  

Multiple biases can be combined using the comma operator:

https://www.google.com/cse?cx=12345:example&q=lebanese+restaurant**&sort=review-rating:d:s,review-pricerange:d:w**  

The ordering of the biases does not matter. However, hard sort cannot be combined with any other sort as it enforces a strict ordering. The last sort operator you specify in the list will override all previous sort and bias operators.

[Back to top](https://developers.google.com/custom-search/docs/structured_search#top)

### Restrict to Range

To include results between a range of values or above or below a value, use a range restriction. Range restricts are specified by an `:r` appended to the attribute name, followed by the upper and lower bound on the attribute values: `&sort=_TYPE_-_NAME_:r:_LOWER_:_UPPER_`. For example, to include only reviews written between March and April 2009, you could specify a range restriction of:

https://www.google.com/cse?cx=12345:example&q=lebanese+restaurant**&sort=review-date:r:20090301:20090430**  

For the Restrict to Range operator, Google supports numbers in float format and dates in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) `YYYYMMDD` without dashes.

You do not need to specify either an upper or a lower bound: for example, to specify only dates before 2009, you could write:

https://www.google.com/cse?cx=12345:example&q=lebanese+restaurant**&sort=review-date:r::20091231**  

To include only ratings over 3 stars, use the following:

https://www.google.com/cse?cx=12345:example&q=lebanese+restaurant**&sort=rating-stars:r:3.0**  

Ranges are inclusive, and can be combined with the comma operator with each other or with either one sort or one or more bias criteria. Note that combining a range restrict with both a sort and bias criteria will result in only a sort over items with values in the range. For example, to sort by rating only items with three or more stars, use the following:

https://www.google.com/cse?cx=12345:example&q=lebanese+restaurant**&sort=rating-stars,rating-stars:r:3.0**  

You can sort over one criterian and restrict by range over another. For example, to sort by rating only items reviewed in the month of October, use the following:

https://www.google.com/cse?cx=12345:example&q=lebanese+restaurant**&sort=rating-stars,review-date:r:20101001:20101031**  

## Image search

When you enable Image search for your search engine, Google will display image results in a separate tab. You can enable image search by using the Programmable Search Engine control panel or by updating your context.xml file.

Image Search relies on the information Google discovers when crawling your site. To improve how your images are displayed in search results (both in Programmable Search Engine and Google Web Search), it's a good idea to become familiar with Google's [image publishing guidelines](http://www.google.com/support/webmasters/bin/answer.py?answer=114016).

### Filter by image attribute

Like Web Search, Image Search search supports filtering on attributes such as `src`, `alt`, and `title`.

[Back to top](https://developers.google.com/custom-search/docs/structured_search#top)

## Structured Search in the Programmable Search Element

Structured search features can also be used in conjunction with the Google Programmable Search Element. Just like with the operators expressed in the query or URL parameters, structured search in the element first requires that the pages you are searching over be marked up with the attributes you want to search by; then the Programmable Search Element's `sort` operator combined with `more:pagemap:` operators in the query will sort or restrict search results appropriately.

For example, SignOnSanDiego.com, a California news portal, uses the Programmable Search Element to render recent stories with photos in the results:

> ![](https://developers.google.com/custom-search/images/signonsandiego.png)

To ensure readers see not only the most relevant, but also timely news, SignOnSanDiego uses the Bias by Attribute with a "strong" weight towards recent publication dates. SignOnSanDiego implements these date attributes with PageMaps; one used by SignOnSanDiego looks like this:

<!--  
  <PageMap>  
    <DataObject type="date">  
      <Attribute name="displaydate" value="Wednesday, August 25, 2010"/>  
      <Attribute name="sdate" value="20100825"/>  
    </DataObject>

    <DataObject type="thumbnail">  
      <Attribute name="src" value="http://media.signonsandiego.com/img/photos/2010/08/25/635a63e9-f4a1-45aa-835a-ebee666b82e0news.ap.org\_t100.jpg"/>  
      <Attribute name="width" value="100"/>  
    </DataObject>  
  </PageMap>  
  -->

  

To apply Sort by Attribute over this field, you set the `sort` option in the search code for the Programmable Search Element as shown below:

...  
<div class\="gcse-search" sort\_by\="date-sdate:d:s"\></div\>  
...  

Just like the URL `&sort=` parameter described above, the sort option in the Programmable Search Element `<div class="gcse-search" sort_by="date-sdate:d:s"></div>` takes a combined attribute name, like `date-sdate`, and several optional parameters separated by colons. In this case, SignOnSanDiego specified sorting in descending order `d` using the strong bias `s` flavor of the operator. If you don’t provide qualifiers, the default is to use a descending order with a hard sort, just as it is in the URL operator case.

The sort option also enables the Restrict by Range feature. For example a site like SignOnSanDiego might enable users to search for articles published between August 25 and September 9 in 2010. To implement this, you can set the sort options to `date-sdate:r:20100825:20100907`. This again uses the combined attribute name `date-sdate`, but instead restricts to the range `r` of specified values `20100825:20100907`. As with the URL parameter, you can omit the upper or lower item of the range in the `sort` option of the Programmable Search Element.

Another powerful feature of the sort option is that you can combine Sort by Attribute and Restrict by Range. You can combine multiple operators in the sort option using a comma. For example, to combine SignOnSanDiego’s strong bias with the above date restrict, you would specify `date-sdate:d:s,date-sdate:r:20100825:20100907`. This feature can combine distinct attributes; for example, a movie review site might display the most highly rated movies released within the last week with the option `review-rating,release-date:r:20100907:`.

Please refer to [this page](https://developers.google.com/custom-search/docs/element#supported_attributes) for all supported attributes.

You can also use Filter by Attribute with the Programmable Search Element. For example, take our [earlier example](https://developers.google.com/custom-search/docs/structured_search#tokenization) with pages that had `linked-blog` attributes; to create a custom search control that only returned pages that linked to use the following code to inject a `more:pagemap:linked-blog:blogspot` operator into every query:

...  
<div class\="gcse-search" webSearchQueryAddition\="more:pagemap:linked-blog:blogspot"\></div\>  
...  

This method is relatively inflexible because it adds a restriction to all queries issued from this control. To see other options, consult the documentation on the [Programmable Search Element](https://developers.google.com/custom-search/docs/element).

[Back to top](https://developers.google.com/custom-search/docs/structured_search#top)

## Exploring Other Features

Structured search features are a powerful set of options that give you a great deal of control over your search application, allowing you to use custom attributes to order and restrict your search results in very powerful ways for your users. Structured search also works well with other Programmable Search Engine features such as custom result snippets. For more information:

-   If you want to learn more about what structured data Google supports, see [Providing Structured Data](https://developers.google.com/custom-search/docs/structured_data).
-   If you want to learn more about using structured data for snippets, see [Customizing Your Result Snippets](https://developers.google.com/custom-search/docs/snippets).
