---
title: Webscraping w nodejs
date: '2021-07-26'
image: images/web-development.gif
seo:
    title: webscraping
    description: There are a lot of use cases for web scraping
    extra:
        - name: 'og:type'
          value: article
          keyName: property
        - name: 'og:title'
          value: Platform Docs
          keyName: property
        - name: 'og:description'
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          keyName: property
        - name: 'og:image'
          value: images/dtw-slideshow.gif
          keyName: property
          relativeUrl: true
        - name: 'twitter:card'
          value: summary_large_image
        - name: 'twitter:title'
          value: Platform Docs
        - name: 'twitter:description'
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        - name: 'twitter:image'
          value: images/web-development.gif
          relativeUrl: true
template: post
thumb_image: images/blue-plankton.png
---

# Web Scraping with Node.js

> So what's web scraping anyway? It involves automating away the laborious task of collecting information from websites. There are a lot of use cases for web scraping: you might want to collect prices from various e-commerce sites for a price comparison site. Or perhaps you need flight times and

![The Ultimate Guide to Web Scraping with Node.js](https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg)

So what's web scraping anyway? It involves automating away the laborious task of collecting information from websites.

There are a lot of use cases for web scraping: you might want to collect prices from various e-commerce sites for a price comparison site. Or perhaps you need flight times and hotel/AirBNB listings for a travel site. Maybe you want to collect emails from various directories for sales leads, or use data from the internet to train machine learning/AI models. Or you could even be wanting to build a search engine like Google!

Getting started with web scraping is easy, and the process can be broken down into two main parts:

- acquiring the data using an HTML request library or a headless browser,
- and parsing the data to get the exact information you want.

This guide will walk you through the process with the popular Node.js [request-promise](https://github.com/request/request-promise) module, [CheerioJS](https://github.com/cheeriojs/cheerio), and [Puppeteer](https://github.com/GoogleChrome/puppeteer). Working through the examples in this guide, you will learn all the tips and tricks you need to become a pro at gathering any data you need with Node.js!

We will be gathering a list of all the names and birthdays of U.S. presidents from Wikipedia and the titles of all the posts on the front page of Reddit.

First things first: Let's install the libraries we'll be using in this guide (Puppeteer will take a while to install as it needs to download Chromium as well).

### Making your first request

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-install-libraries-L1" data-line-number="1">
</td>
<td id="file-install-libraries-LC1">npm install --save request request-promise cheerio puppeteer</td>
</tr>
</tbody>
</table>

Next, let's open a new text file (name the file potusScraper.js), and write a quick function to get the HTML of the Wikipedia "List of Presidents" page.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusscraper-js-v1-L1" data-line-number="1">
</td>
<td id="file-potusscraper-js-v1-LC1">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L2" data-line-number="2">
</td>
<td id="file-potusscraper-js-v1-LC2">const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L3" data-line-number="3">
</td>
<td id="file-potusscraper-js-v1-LC3">
</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L4" data-line-number="4">
</td>
<td id="file-potusscraper-js-v1-LC4">rp(url)</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L5" data-line-number="5">
</td>
<td id="file-potusscraper-js-v1-LC5">.then(function(html){</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L6" data-line-number="6">
</td>
<td id="file-potusscraper-js-v1-LC6">//success!</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L7" data-line-number="7">
</td>
<td id="file-potusscraper-js-v1-LC7">console.log(html);</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L8" data-line-number="8">
</td>
<td id="file-potusscraper-js-v1-LC8">})</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L9" data-line-number="9">
</td>
<td id="file-potusscraper-js-v1-LC9">.catch(function(err){</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L10" data-line-number="10">
</td>
<td id="file-potusscraper-js-v1-LC10">//handle error</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-L11" data-line-number="11">
</td>
<td id="file-potusscraper-js-v1-LC11">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusscraper-js-v1-output-L1" data-line-number="1">
</td>
<td id="file-potusscraper-js-v1-output-LC1">&lt;!DOCTYPE html&gt;</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-output-L2" data-line-number="2">
</td>
<td id="file-potusscraper-js-v1-output-LC2">&lt;html class="client-nojs" lang="en" dir="ltr"&gt;</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-output-L3" data-line-number="3">
</td>
<td id="file-potusscraper-js-v1-output-LC3">&lt;head&gt;</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-output-L4" data-line-number="4">
</td>
<td id="file-potusscraper-js-v1-output-LC4">&lt;meta charset="UTF-8"/&gt;</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-output-L5" data-line-number="5">
</td>
<td id="file-potusscraper-js-v1-output-LC5">&lt;title&gt;List of Presidents of the United States - Wikipedia&lt;/title&gt;</td>
</tr>
<tr>
<td id="file-potusscraper-js-v1-output-L6" data-line-number="6">
</td>
<td id="file-potusscraper-js-v1-output-LC6">...</td>
</tr>
</tbody>
</table>

### Using Chrome DevTools

Cool, we got the raw HTML from the web page! But now we need to make sense of this giant blob of text. To do that, we'll need to use Chrome DevTools to allow us to easily search through the HTML of a web page.

Using Chrome DevTools is easy: simply open Google Chrome, and right click on the element you would like to scrape (in this case I am right clicking on George Washington, because we want to get links to all of the individual presidents' Wikipedia pages):

![alt-text](https://cdn-media-1.freecodecamp.org/images/1*gLKhu_EO-cDqYna1P9WL_w.png)

Now, simply click inspect, and Chrome will bring up its DevTools pane, allowing you to easily inspect the page's source HTML.

![alt-text](https://cdn-media-1.freecodecamp.org/images/1*HSUjFgji22vjwvGi2uZe1A.png)

### Parsing HTML with Cheerio.js

Awesome, Chrome DevTools is now showing us the exact pattern we should be looking for in the code (a "big" tag with a hyperlink inside of it). Let's use Cheerio.js to parse the HTML we received earlier to return a list of links to the individual Wikipedia pages of U.S. presidents.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusscraper-js-v2-L1" data-line-number="1">
</td>
<td id="file-potusscraper-js-v2-LC1">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L2" data-line-number="2">
</td>
<td id="file-potusscraper-js-v2-LC2">const $ = require('cheerio');</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L3" data-line-number="3">
</td>
<td id="file-potusscraper-js-v2-LC3">const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L4" data-line-number="4">
</td>
<td id="file-potusscraper-js-v2-LC4">
</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L5" data-line-number="5">
</td>
<td id="file-potusscraper-js-v2-LC5">rp(url)</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L6" data-line-number="6">
</td>
<td id="file-potusscraper-js-v2-LC6">.then(function(html){</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L7" data-line-number="7">
</td>
<td id="file-potusscraper-js-v2-LC7">//success!</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L8" data-line-number="8">
</td>
<td id="file-potusscraper-js-v2-LC8">console.log($('big &gt; a', html).length);</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L9" data-line-number="9">
</td>
<td id="file-potusscraper-js-v2-LC9">console.log($('big &gt; a', html));</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L10" data-line-number="10">
</td>
<td id="file-potusscraper-js-v2-LC10">})</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L11" data-line-number="11">
</td>
<td id="file-potusscraper-js-v2-LC11">.catch(function(err){</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L12" data-line-number="12">
</td>
<td id="file-potusscraper-js-v2-LC12">//handle error</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-L13" data-line-number="13">
</td>
<td id="file-potusscraper-js-v2-LC13">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusscraper-js-v2-output-L1" data-line-number="1">
</td>
<td id="file-potusscraper-js-v2-output-LC1">45</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L2" data-line-number="2">
</td>
<td id="file-potusscraper-js-v2-output-LC2">{ '0':</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L3" data-line-number="3">
</td>
<td id="file-potusscraper-js-v2-output-LC3">{ type: 'tag',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L4" data-line-number="4">
</td>
<td id="file-potusscraper-js-v2-output-LC4">name: 'a',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L5" data-line-number="5">
</td>
<td id="file-potusscraper-js-v2-output-LC5">attribs: { href: '/wiki/George_Washington', title: 'George Washington' },</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L6" data-line-number="6">
</td>
<td id="file-potusscraper-js-v2-output-LC6">children: [ [Object] ],</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L7" data-line-number="7">
</td>
<td id="file-potusscraper-js-v2-output-LC7">next: null,</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L8" data-line-number="8">
</td>
<td id="file-potusscraper-js-v2-output-LC8">prev: null,</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L9" data-line-number="9">
</td>
<td id="file-potusscraper-js-v2-output-LC9">parent:</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L10" data-line-number="10">
</td>
<td id="file-potusscraper-js-v2-output-LC10">{ type: 'tag',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L11" data-line-number="11">
</td>
<td id="file-potusscraper-js-v2-output-LC11">name: 'big',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L12" data-line-number="12">
</td>
<td id="file-potusscraper-js-v2-output-LC12">attribs: {},</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L13" data-line-number="13">
</td>
<td id="file-potusscraper-js-v2-output-LC13">children: [Array],</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L14" data-line-number="14">
</td>
<td id="file-potusscraper-js-v2-output-LC14">next: null,</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L15" data-line-number="15">
</td>
<td id="file-potusscraper-js-v2-output-LC15">prev: null,</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L16" data-line-number="16">
</td>
<td id="file-potusscraper-js-v2-output-LC16">parent: [Object] } },</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L17" data-line-number="17">
</td>
<td id="file-potusscraper-js-v2-output-LC17">'1':</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L18" data-line-number="18">
</td>
<td id="file-potusscraper-js-v2-output-LC18">{ type: 'tag'</td>
</tr>
<tr>
<td id="file-potusscraper-js-v2-output-L19" data-line-number="19">
</td>
<td id="file-potusscraper-js-v2-output-LC19">...</td>
</tr>
</tbody>
</table>

We check to make sure there are exactly 45 elements returned (the number of U.S. presidents), meaning there aren't any extra hidden "big" tags elsewhere on the page. Now, we can go through and grab a list of links to all 45 presidential Wikipedia pages by getting them from the "attribs" section of each element.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusscraper-js-v3-L1" data-line-number="1">
</td>
<td id="file-potusscraper-js-v3-LC1">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L2" data-line-number="2">
</td>
<td id="file-potusscraper-js-v3-LC2">const $ = require('cheerio');</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L3" data-line-number="3">
</td>
<td id="file-potusscraper-js-v3-LC3">const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L4" data-line-number="4">
</td>
<td id="file-potusscraper-js-v3-LC4">
</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L5" data-line-number="5">
</td>
<td id="file-potusscraper-js-v3-LC5">rp(url)</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L6" data-line-number="6">
</td>
<td id="file-potusscraper-js-v3-LC6">.then(function(html){</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L7" data-line-number="7">
</td>
<td id="file-potusscraper-js-v3-LC7">//success!</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L8" data-line-number="8">
</td>
<td id="file-potusscraper-js-v3-LC8">const wikiUrls = [];</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L9" data-line-number="9">
</td>
<td id="file-potusscraper-js-v3-LC9">for (let i = 0; i &lt; 45; i++) {</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L10" data-line-number="10">
</td>
<td id="file-potusscraper-js-v3-LC10">wikiUrls.push($('big &gt; a', html)[i].attribs.href);</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L11" data-line-number="11">
</td>
<td id="file-potusscraper-js-v3-LC11">}</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L12" data-line-number="12">
</td>
<td id="file-potusscraper-js-v3-LC12">console.log(wikiUrls);</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L13" data-line-number="13">
</td>
<td id="file-potusscraper-js-v3-LC13">})</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L14" data-line-number="14">
</td>
<td id="file-potusscraper-js-v3-LC14">.catch(function(err){</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L15" data-line-number="15">
</td>
<td id="file-potusscraper-js-v3-LC15">//handle error</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-L16" data-line-number="16">
</td>
<td id="file-potusscraper-js-v3-LC16">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusscraper-js-v3-output-L1" data-line-number="1">
</td>
<td id="file-potusscraper-js-v3-output-LC1">
</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L2" data-line-number="2">
</td>
<td id="file-potusscraper-js-v3-output-LC2">[</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L3" data-line-number="3">
</td>
<td id="file-potusscraper-js-v3-output-LC3">'/wiki/George_Washington',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L4" data-line-number="4">
</td>
<td id="file-potusscraper-js-v3-output-LC4">'/wiki/John_Adams',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L5" data-line-number="5">
</td>
<td id="file-potusscraper-js-v3-output-LC5">'/wiki/Thomas_Jefferson',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L6" data-line-number="6">
</td>
<td id="file-potusscraper-js-v3-output-LC6">'/wiki/James_Madison',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L7" data-line-number="7">
</td>
<td id="file-potusscraper-js-v3-output-LC7">'/wiki/James_Monroe',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L8" data-line-number="8">
</td>
<td id="file-potusscraper-js-v3-output-LC8">'/wiki/John_Quincy_Adams',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L9" data-line-number="9">
</td>
<td id="file-potusscraper-js-v3-output-LC9">'/wiki/Andrew_Jackson',</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L10" data-line-number="10">
</td>
<td id="file-potusscraper-js-v3-output-LC10">...</td>
</tr>
<tr>
<td id="file-potusscraper-js-v3-output-L11" data-line-number="11">
</td>
<td id="file-potusscraper-js-v3-output-LC11">]</td>
</tr>
</tbody>
</table>

Now we have a list of all 45 presidential Wikipedia pages. Let's create a new file (named potusParse.js), which will contain a function to take a presidential Wikipedia page and return the president's name and birthday. First things first, let's get the raw HTML from George Washington's Wikipedia page.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusparse-js-v1-L1" data-line-number="1">
</td>
<td id="file-potusparse-js-v1-LC1">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L2" data-line-number="2">
</td>
<td id="file-potusparse-js-v1-LC2">const url = 'https://en.wikipedia.org/wiki/George_Washington';</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L3" data-line-number="3">
</td>
<td id="file-potusparse-js-v1-LC3">
</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L4" data-line-number="4">
</td>
<td id="file-potusparse-js-v1-LC4">rp(url)</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L5" data-line-number="5">
</td>
<td id="file-potusparse-js-v1-LC5">.then(function(html) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L6" data-line-number="6">
</td>
<td id="file-potusparse-js-v1-LC6">console.log(html);</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L7" data-line-number="7">
</td>
<td id="file-potusparse-js-v1-LC7">})</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L8" data-line-number="8">
</td>
<td id="file-potusparse-js-v1-LC8">.catch(function(err) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L9" data-line-number="9">
</td>
<td id="file-potusparse-js-v1-LC9">//handle error</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-L10" data-line-number="10">
</td>
<td id="file-potusparse-js-v1-LC10">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusparse-js-v1-output-L1" data-line-number="1">
</td>
<td id="file-potusparse-js-v1-output-LC1">&lt;html class="client-nojs" lang="en" dir="ltr"&gt;</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-output-L2" data-line-number="2">
</td>
<td id="file-potusparse-js-v1-output-LC2">&lt;head&gt;</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-output-L3" data-line-number="3">
</td>
<td id="file-potusparse-js-v1-output-LC3">&lt;meta charset="UTF-8"/&gt;</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-output-L4" data-line-number="4">
</td>
<td id="file-potusparse-js-v1-output-LC4">&lt;title&gt;George Washington - Wikipedia&lt;/title&gt;</td>
</tr>
<tr>
<td id="file-potusparse-js-v1-output-L5" data-line-number="5">
</td>
<td id="file-potusparse-js-v1-output-LC5">...</td>
</tr>
</tbody>
</table>

Let's once again use Chrome DevTools to find the syntax of the code we want to parse, so that we can extract the name and birthday with Cheerio.js.

![alt-text](https://cdn-media-1.freecodecamp.org/images/1*exzZbuIwfrCcbTM2rr9_bw.png)

![alt-text](https://cdn-media-1.freecodecamp.org/images/1*yth6AmHpywM77n0wEprpiA.png)

So we see that the name is in a class called "firstHeading" and the birthday is in a class called "bday". Let's modify our code to use Cheerio.js to extract these two classes.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusparse-js-v2-L1" data-line-number="1">
</td>
<td id="file-potusparse-js-v2-LC1">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L2" data-line-number="2">
</td>
<td id="file-potusparse-js-v2-LC2">const $ = require('cheerio');</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L3" data-line-number="3">
</td>
<td id="file-potusparse-js-v2-LC3">const url = 'https://en.wikipedia.org/wiki/George_Washington';</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L4" data-line-number="4">
</td>
<td id="file-potusparse-js-v2-LC4">
</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L5" data-line-number="5">
</td>
<td id="file-potusparse-js-v2-LC5">rp(url)</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L6" data-line-number="6">
</td>
<td id="file-potusparse-js-v2-LC6">.then(function(html) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L7" data-line-number="7">
</td>
<td id="file-potusparse-js-v2-LC7">console.log($('.firstHeading', html).text());</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L8" data-line-number="8">
</td>
<td id="file-potusparse-js-v2-LC8">console.log($('.bday', html).text());</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L9" data-line-number="9">
</td>
<td id="file-potusparse-js-v2-LC9">})</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L10" data-line-number="10">
</td>
<td id="file-potusparse-js-v2-LC10">.catch(function(err) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L11" data-line-number="11">
</td>
<td id="file-potusparse-js-v2-LC11">//handle error</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-L12" data-line-number="12">
</td>
<td id="file-potusparse-js-v2-LC12">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusparse-js-v2-output-L1" data-line-number="1">
</td>
<td id="file-potusparse-js-v2-output-LC1">George Washington</td>
</tr>
<tr>
<td id="file-potusparse-js-v2-output-L2" data-line-number="2">
</td>
<td id="file-potusparse-js-v2-output-LC2">1732-02-22</td>
</tr>
</tbody>
</table>

### Putting it all together

Perfect! Now let's wrap this up into a function and export it from this module.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusparse-js-v3-L1" data-line-number="1">
</td>
<td id="file-potusparse-js-v3-LC1">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L2" data-line-number="2">
</td>
<td id="file-potusparse-js-v3-LC2">const $ = require('cheerio');</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L3" data-line-number="3">
</td>
<td id="file-potusparse-js-v3-LC3">
</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L4" data-line-number="4">
</td>
<td id="file-potusparse-js-v3-LC4">const potusParse = function(url) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L5" data-line-number="5">
</td>
<td id="file-potusparse-js-v3-LC5">return rp(url)</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L6" data-line-number="6">
</td>
<td id="file-potusparse-js-v3-LC6">.then(function(html) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L7" data-line-number="7">
</td>
<td id="file-potusparse-js-v3-LC7">return {</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L8" data-line-number="8">
</td>
<td id="file-potusparse-js-v3-LC8">name: $('.firstHeading', html).text(),</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L9" data-line-number="9">
</td>
<td id="file-potusparse-js-v3-LC9">birthday: $('.bday', html).text(),</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L10" data-line-number="10">
</td>
<td id="file-potusparse-js-v3-LC10">};</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L11" data-line-number="11">
</td>
<td id="file-potusparse-js-v3-LC11">})</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L12" data-line-number="12">
</td>
<td id="file-potusparse-js-v3-LC12">.catch(function(err) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L13" data-line-number="13">
</td>
<td id="file-potusparse-js-v3-LC13">//handle error</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L14" data-line-number="14">
</td>
<td id="file-potusparse-js-v3-LC14">});</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L15" data-line-number="15">
</td>
<td id="file-potusparse-js-v3-LC15">};</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L16" data-line-number="16">
</td>
<td id="file-potusparse-js-v3-LC16">
</td>
</tr>
<tr>
<td id="file-potusparse-js-v3-L17" data-line-number="17">
</td>
<td id="file-potusparse-js-v3-LC17">module.exports = potusParse;</td>
</tr>
</tbody>
</table>

Now let's return to our original file potusScraper.js and require the potusParse.js module. We'll then apply it to the list of wikiUrls we gathered earlier.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusparse-js-v4-L1" data-line-number="1">
</td>
<td id="file-potusparse-js-v4-LC1">
</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L2" data-line-number="2">
</td>
<td id="file-potusparse-js-v4-LC2">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L3" data-line-number="3">
</td>
<td id="file-potusparse-js-v4-LC3">const $ = require('cheerio');</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L4" data-line-number="4">
</td>
<td id="file-potusparse-js-v4-LC4">const potusParse = require('./potusParse');</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L5" data-line-number="5">
</td>
<td id="file-potusparse-js-v4-LC5">const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L6" data-line-number="6">
</td>
<td id="file-potusparse-js-v4-LC6">
</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L7" data-line-number="7">
</td>
<td id="file-potusparse-js-v4-LC7">rp(url)</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L8" data-line-number="8">
</td>
<td id="file-potusparse-js-v4-LC8">.then(function(html) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L9" data-line-number="9">
</td>
<td id="file-potusparse-js-v4-LC9">//success!</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L10" data-line-number="10">
</td>
<td id="file-potusparse-js-v4-LC10">const wikiUrls = [];</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L11" data-line-number="11">
</td>
<td id="file-potusparse-js-v4-LC11">for (let i = 0; i &lt; 45; i++) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L12" data-line-number="12">
</td>
<td id="file-potusparse-js-v4-LC12">wikiUrls.push($('big &gt; a', html)[i].attribs.href);</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L13" data-line-number="13">
</td>
<td id="file-potusparse-js-v4-LC13">}</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L14" data-line-number="14">
</td>
<td id="file-potusparse-js-v4-LC14">return Promise.all(</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L15" data-line-number="15">
</td>
<td id="file-potusparse-js-v4-LC15">wikiUrls.map(function(url) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L16" data-line-number="16">
</td>
<td id="file-potusparse-js-v4-LC16">return potusParse('https://en.wikipedia.org' + url);</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L17" data-line-number="17">
</td>
<td id="file-potusparse-js-v4-LC17">})</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L18" data-line-number="18">
</td>
<td id="file-potusparse-js-v4-LC18">);</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L19" data-line-number="19">
</td>
<td id="file-potusparse-js-v4-LC19">})</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L20" data-line-number="20">
</td>
<td id="file-potusparse-js-v4-LC20">.then(function(presidents) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L21" data-line-number="21">
</td>
<td id="file-potusparse-js-v4-LC21">console.log(presidents);</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L22" data-line-number="22">
</td>
<td id="file-potusparse-js-v4-LC22">})</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L23" data-line-number="23">
</td>
<td id="file-potusparse-js-v4-LC23">.catch(function(err) {</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L24" data-line-number="24">
</td>
<td id="file-potusparse-js-v4-LC24">//handle error</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L25" data-line-number="25">
</td>
<td id="file-potusparse-js-v4-LC25">console.log(err);</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-L26" data-line-number="26">
</td>
<td id="file-potusparse-js-v4-LC26">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-potusparse-js-v4-output-L1" data-line-number="1">
</td>
<td id="file-potusparse-js-v4-output-LC1">
</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L2" data-line-number="2">
</td>
<td id="file-potusparse-js-v4-output-LC2">[</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L3" data-line-number="3">
</td>
<td id="file-potusparse-js-v4-output-LC3">{ name: 'George Washington', birthday: '1732-02-22' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L4" data-line-number="4">
</td>
<td id="file-potusparse-js-v4-output-LC4">{ name: 'John Adams', birthday: '1735-10-30' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L5" data-line-number="5">
</td>
<td id="file-potusparse-js-v4-output-LC5">{ name: 'Thomas Jefferson', birthday: '1743-04-13' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L6" data-line-number="6">
</td>
<td id="file-potusparse-js-v4-output-LC6">{ name: 'James Madison', birthday: '1751-03-16' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L7" data-line-number="7">
</td>
<td id="file-potusparse-js-v4-output-LC7">{ name: 'James Monroe', birthday: '1758-04-28' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L8" data-line-number="8">
</td>
<td id="file-potusparse-js-v4-output-LC8">{ name: 'John Quincy Adams', birthday: '1767-07-11' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L9" data-line-number="9">
</td>
<td id="file-potusparse-js-v4-output-LC9">{ name: 'Andrew Jackson', birthday: '1767-03-15' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L10" data-line-number="10">
</td>
<td id="file-potusparse-js-v4-output-LC10">{ name: 'Martin Van Buren', birthday: '1782-12-05' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L11" data-line-number="11">
</td>
<td id="file-potusparse-js-v4-output-LC11">{ name: 'William Henry Harrison', birthday: '1773-02-09' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L12" data-line-number="12">
</td>
<td id="file-potusparse-js-v4-output-LC12">{ name: 'John Tyler', birthday: '1790-03-29' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L13" data-line-number="13">
</td>
<td id="file-potusparse-js-v4-output-LC13">{ name: 'James K. Polk', birthday: '1795-11-02' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L14" data-line-number="14">
</td>
<td id="file-potusparse-js-v4-output-LC14">{ name: 'Zachary Taylor', birthday: '1784-11-24' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L15" data-line-number="15">
</td>
<td id="file-potusparse-js-v4-output-LC15">{ name: 'Millard Fillmore', birthday: '1800-01-07' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L16" data-line-number="16">
</td>
<td id="file-potusparse-js-v4-output-LC16">{ name: 'Franklin Pierce', birthday: '1804-11-23' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L17" data-line-number="17">
</td>
<td id="file-potusparse-js-v4-output-LC17">{ name: 'James Buchanan', birthday: '1791-04-23' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L18" data-line-number="18">
</td>
<td id="file-potusparse-js-v4-output-LC18">{ name: 'Abraham Lincoln', birthday: '1809-02-12' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L19" data-line-number="19">
</td>
<td id="file-potusparse-js-v4-output-LC19">{ name: 'Andrew Johnson', birthday: '1808-12-29' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L20" data-line-number="20">
</td>
<td id="file-potusparse-js-v4-output-LC20">{ name: 'Ulysses S. Grant', birthday: '1822-04-27' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L21" data-line-number="21">
</td>
<td id="file-potusparse-js-v4-output-LC21">{ name: 'Rutherford B. Hayes', birthday: '1822-10-04' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L22" data-line-number="22">
</td>
<td id="file-potusparse-js-v4-output-LC22">{ name: 'James A. Garfield', birthday: '1831-11-19' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L23" data-line-number="23">
</td>
<td id="file-potusparse-js-v4-output-LC23">{ name: 'Chester A. Arthur', birthday: '1829-10-05' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L24" data-line-number="24">
</td>
<td id="file-potusparse-js-v4-output-LC24">{ name: 'Grover Cleveland', birthday: '1837-03-18' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L25" data-line-number="25">
</td>
<td id="file-potusparse-js-v4-output-LC25">{ name: 'Benjamin Harrison', birthday: '1833-08-20' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L26" data-line-number="26">
</td>
<td id="file-potusparse-js-v4-output-LC26">{ name: 'Grover Cleveland', birthday: '1837-03-18' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L27" data-line-number="27">
</td>
<td id="file-potusparse-js-v4-output-LC27">{ name: 'William McKinley', birthday: '1843-01-29' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L28" data-line-number="28">
</td>
<td id="file-potusparse-js-v4-output-LC28">{ name: 'Theodore Roosevelt', birthday: '1858-10-27' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L29" data-line-number="29">
</td>
<td id="file-potusparse-js-v4-output-LC29">{ name: 'William Howard Taft', birthday: '1857-09-15' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L30" data-line-number="30">
</td>
<td id="file-potusparse-js-v4-output-LC30">{ name: 'Woodrow Wilson', birthday: '1856-12-28' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L31" data-line-number="31">
</td>
<td id="file-potusparse-js-v4-output-LC31">{ name: 'Warren G. Harding', birthday: '1865-11-02' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L32" data-line-number="32">
</td>
<td id="file-potusparse-js-v4-output-LC32">{ name: 'Calvin Coolidge', birthday: '1872-07-04' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L33" data-line-number="33">
</td>
<td id="file-potusparse-js-v4-output-LC33">{ name: 'Herbert Hoover', birthday: '1874-08-10' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L34" data-line-number="34">
</td>
<td id="file-potusparse-js-v4-output-LC34">{ name: 'Franklin D. Roosevelt', birthday: '1882-01-30' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L35" data-line-number="35">
</td>
<td id="file-potusparse-js-v4-output-LC35">{ name: 'Harry S. Truman', birthday: '1884-05-08' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L36" data-line-number="36">
</td>
<td id="file-potusparse-js-v4-output-LC36">{ name: 'Dwight D. Eisenhower', birthday: '1890-10-14' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L37" data-line-number="37">
</td>
<td id="file-potusparse-js-v4-output-LC37">{ name: 'John F. Kennedy', birthday: '1917-05-29' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L38" data-line-number="38">
</td>
<td id="file-potusparse-js-v4-output-LC38">{ name: 'Lyndon B. Johnson', birthday: '1908-08-27' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L39" data-line-number="39">
</td>
<td id="file-potusparse-js-v4-output-LC39">{ name: 'Richard Nixon', birthday: '1913-01-09' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L40" data-line-number="40">
</td>
<td id="file-potusparse-js-v4-output-LC40">{ name: 'Gerald Ford', birthday: '1913-07-14' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L41" data-line-number="41">
</td>
<td id="file-potusparse-js-v4-output-LC41">{ name: 'Jimmy Carter', birthday: '1924-10-01' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L42" data-line-number="42">
</td>
<td id="file-potusparse-js-v4-output-LC42">{ name: 'Ronald Reagan', birthday: '1911-02-06' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L43" data-line-number="43">
</td>
<td id="file-potusparse-js-v4-output-LC43">{ name: 'George H. W. Bush', birthday: '1924-06-12' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L44" data-line-number="44">
</td>
<td id="file-potusparse-js-v4-output-LC44">{ name: 'Bill Clinton', birthday: '1946-08-19' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L45" data-line-number="45">
</td>
<td id="file-potusparse-js-v4-output-LC45">{ name: 'George W. Bush', birthday: '1946-07-06' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L46" data-line-number="46">
</td>
<td id="file-potusparse-js-v4-output-LC46">{ name: 'Barack Obama', birthday: '1961-08-04' },</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L47" data-line-number="47">
</td>
<td id="file-potusparse-js-v4-output-LC47">{ name: 'Donald Trump', birthday: '1946-06-14' }</td>
</tr>
<tr>
<td id="file-potusparse-js-v4-output-L48" data-line-number="48">
</td>
<td id="file-potusparse-js-v4-output-LC48">]</td>
</tr>
</tbody>
</table>

### Rendering JavaScript Pages

Voilà! A list of the names and birthdays of all 45 U.S. presidents. Using just the request-promise module and Cheerio.js should allow you to scrape the vast majority of sites on the internet.

Recently, however, many sites have begun using JavaScript to generate dynamic content on their websites. This causes a problem for request-promise and other similar HTTP request libraries (such as axios and fetch), because they only get the response from the initial request, but they cannot execute the JavaScript the way a web browser can.

Thus, to scrape sites that require JavaScript execution, we need another solution. In our next example, we will get the titles for all of the posts on the front page of Reddit. Let's see what happens when we try to use request-promise as we did in the previous example.

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-reddit-js-v1-L1" data-line-number="1">
</td>
<td id="file-reddit-js-v1-LC1">const rp = require('request-promise');</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L2" data-line-number="2">
</td>
<td id="file-reddit-js-v1-LC2">const url = 'https://www.reddit.com';</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L3" data-line-number="3">
</td>
<td id="file-reddit-js-v1-LC3">
</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L4" data-line-number="4">
</td>
<td id="file-reddit-js-v1-LC4">rp(url)</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L5" data-line-number="5">
</td>
<td id="file-reddit-js-v1-LC5">.then(function(html){</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L6" data-line-number="6">
</td>
<td id="file-reddit-js-v1-LC6">//success!</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L7" data-line-number="7">
</td>
<td id="file-reddit-js-v1-LC7">console.log(html);</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L8" data-line-number="8">
</td>
<td id="file-reddit-js-v1-LC8">})</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L9" data-line-number="9">
</td>
<td id="file-reddit-js-v1-LC9">.catch(function(err){</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L10" data-line-number="10">
</td>
<td id="file-reddit-js-v1-LC10">//handle error</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L11" data-line-number="11">
</td>
<td id="file-reddit-js-v1-LC11">});</td>
</tr>
<tr>
<td id="file-reddit-js-v1-L12" data-line-number="12">
</td>
<td id="file-reddit-js-v1-LC12">}</td>
</tr>
</tbody>
</table>

Here's what the output looks like:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-reddit-js-v1-output-L1" data-line-number="1">
</td>
<td id="file-reddit-js-v1-output-LC1">&lt;!DOCTYPE html&gt;&lt;html</td>
</tr>
<tr>
<td id="file-reddit-js-v1-output-L2" data-line-number="2">
</td>
<td id="file-reddit-js-v1-output-LC2">lang="en"&gt;&lt;head&gt;&lt;title&gt;reddit: the front page of the</td>
</tr>
<tr>
<td id="file-reddit-js-v1-output-L3" data-line-number="3">
</td>
<td id="file-reddit-js-v1-output-LC3">internet&lt;/title&gt;</td>
</tr>
<tr>
<td id="file-reddit-js-v1-output-L4" data-line-number="4">
</td>
<td id="file-reddit-js-v1-output-LC4">...</td>
</tr>
</tbody>
</table>

![alt-text](https://cdn-media-1.freecodecamp.org/images/1*mKzPVGRR4CFKMwQw5y_YnQ.png)

Hmmm…not quite what we want. That's because getting the actual content requires you to run the JavaScript on the page! With Puppeteer, that's no problem.

Puppeteer is an extremely popular new module brought to you by the Google Chrome team that allows you to control a headless browser. This is perfect for programmatically scraping pages that require JavaScript execution. Let's get the HTML from the front page of Reddit using Puppeteer instead of request-promise.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-reddit-js-v2-L1" data-line-number="1">
</td>
<td id="file-reddit-js-v2-LC1">const puppeteer = require('puppeteer');</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L2" data-line-number="2">
</td>
<td id="file-reddit-js-v2-LC2">const url = 'https://www.reddit.com';</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L3" data-line-number="3">
</td>
<td id="file-reddit-js-v2-LC3">
</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L4" data-line-number="4">
</td>
<td id="file-reddit-js-v2-LC4">puppeteer</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L5" data-line-number="5">
</td>
<td id="file-reddit-js-v2-LC5">.launch()</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L6" data-line-number="6">
</td>
<td id="file-reddit-js-v2-LC6">.then(function(browser) {</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L7" data-line-number="7">
</td>
<td id="file-reddit-js-v2-LC7">return browser.newPage();</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L8" data-line-number="8">
</td>
<td id="file-reddit-js-v2-LC8">})</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L9" data-line-number="9">
</td>
<td id="file-reddit-js-v2-LC9">.then(function(page) {</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L10" data-line-number="10">
</td>
<td id="file-reddit-js-v2-LC10">return page.goto(url).then(function() {</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L11" data-line-number="11">
</td>
<td id="file-reddit-js-v2-LC11">return page.content();</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L12" data-line-number="12">
</td>
<td id="file-reddit-js-v2-LC12">});</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L13" data-line-number="13">
</td>
<td id="file-reddit-js-v2-LC13">})</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L14" data-line-number="14">
</td>
<td id="file-reddit-js-v2-LC14">.then(function(html) {</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L15" data-line-number="15">
</td>
<td id="file-reddit-js-v2-LC15">console.log(html);</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L16" data-line-number="16">
</td>
<td id="file-reddit-js-v2-LC16">})</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L17" data-line-number="17">
</td>
<td id="file-reddit-js-v2-LC17">.catch(function(err) {</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L18" data-line-number="18">
</td>
<td id="file-reddit-js-v2-LC18">//handle error</td>
</tr>
<tr>
<td id="file-reddit-js-v2-L19" data-line-number="19">
</td>
<td id="file-reddit-js-v2-LC19">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-reddit-js-v2-output-L1" data-line-number="1">
</td>
<td id="file-reddit-js-v2-output-LC1">&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;&lt;head&gt;&lt;link</td>
</tr>
<tr>
<td id="file-reddit-js-v2-output-L2" data-line-number="2">
</td>
<td id="file-reddit-js-v2-output-LC2">href="//c.amazon-adsystem.com/aax2/apstag.js" rel="preload"</td>
</tr>
<tr>
<td id="file-reddit-js-v2-output-L3" data-line-number="3">
</td>
<td id="file-reddit-js-v2-output-LC3">as="script"&gt;</td>
</tr>
<tr>
<td id="file-reddit-js-v2-output-L4" data-line-number="4">
</td>
<td id="file-reddit-js-v2-output-LC4">...</td>
</tr>
</tbody>
</table>

Nice! The page is filled with the correct content!

![alt-text](https://cdn-media-1.freecodecamp.org/images/1*N5HtAiijcMEB_fBQvPd7Ow.png)

Now we can use Chrome DevTools like we did in the previous example.

![alt-text](https://cdn-media-1.freecodecamp.org/images/1*tHSgjPMvn3M26N2f7Q2B1Q.png)

It looks like Reddit is putting the titles inside "h2" tags. Let's use Cheerio.js to extract the h2 tags from the page.

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-reddit-js-v3-L1" data-line-number="1">
</td>
<td id="file-reddit-js-v3-LC1">const puppeteer = require('puppeteer');</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L2" data-line-number="2">
</td>
<td id="file-reddit-js-v3-LC2">const $ = require('cheerio');</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L3" data-line-number="3">
</td>
<td id="file-reddit-js-v3-LC3">const url = 'https://www.reddit.com';</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L4" data-line-number="4">
</td>
<td id="file-reddit-js-v3-LC4">
</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L5" data-line-number="5">
</td>
<td id="file-reddit-js-v3-LC5">puppeteer</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L6" data-line-number="6">
</td>
<td id="file-reddit-js-v3-LC6">.launch()</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L7" data-line-number="7">
</td>
<td id="file-reddit-js-v3-LC7">.then(function(browser) {</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L8" data-line-number="8">
</td>
<td id="file-reddit-js-v3-LC8">return browser.newPage();</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L9" data-line-number="9">
</td>
<td id="file-reddit-js-v3-LC9">})</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L10" data-line-number="10">
</td>
<td id="file-reddit-js-v3-LC10">.then(function(page) {</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L11" data-line-number="11">
</td>
<td id="file-reddit-js-v3-LC11">return page.goto(url).then(function() {</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L12" data-line-number="12">
</td>
<td id="file-reddit-js-v3-LC12">return page.content();</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L13" data-line-number="13">
</td>
<td id="file-reddit-js-v3-LC13">});</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L14" data-line-number="14">
</td>
<td id="file-reddit-js-v3-LC14">})</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L15" data-line-number="15">
</td>
<td id="file-reddit-js-v3-LC15">.then(function(html) {</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L16" data-line-number="16">
</td>
<td id="file-reddit-js-v3-LC16">$('h2', html).each(function() {</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L17" data-line-number="17">
</td>
<td id="file-reddit-js-v3-LC17">console.log($(this).text());</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L18" data-line-number="18">
</td>
<td id="file-reddit-js-v3-LC18">});</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L19" data-line-number="19">
</td>
<td id="file-reddit-js-v3-LC19">})</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L20" data-line-number="20">
</td>
<td id="file-reddit-js-v3-LC20">.catch(function(err) {</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L21" data-line-number="21">
</td>
<td id="file-reddit-js-v3-LC21">//handle error</td>
</tr>
<tr>
<td id="file-reddit-js-v3-L22" data-line-number="22">
</td>
<td id="file-reddit-js-v3-LC22">});</td>
</tr>
</tbody>
</table>

Output:

<table data-tab-size="8" data-paste-markdown-skip="">
<tbody>
<tr>
<td id="file-reddit-js-v3-output-L1" data-line-number="1">
</td>
<td id="file-reddit-js-v3-output-LC1">Russian Pipeline. Upvote so that this is the first image people see when they Google "Russian Pipeline"</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L2" data-line-number="2">
</td>
<td id="file-reddit-js-v3-output-LC2">John F. Kennedy Jr. Sitting in the pilot seat of the Marine One circa 1963</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L3" data-line-number="3">
</td>
<td id="file-reddit-js-v3-output-LC3">I didn't take it as a compliment.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L4" data-line-number="4">
</td>
<td id="file-reddit-js-v3-output-LC4">How beautiful is this</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L5" data-line-number="5">
</td>
<td id="file-reddit-js-v3-output-LC5">Hustle like Faye</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L6" data-line-number="6">
</td>
<td id="file-reddit-js-v3-output-LC6">The power of a salt water crocodile's tail.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L7" data-line-number="7">
</td>
<td id="file-reddit-js-v3-output-LC7">I'm 36, and will be dead inside of a year.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L8" data-line-number="8">
</td>
<td id="file-reddit-js-v3-output-LC8">F***ing genius.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L9" data-line-number="9">
</td>
<td id="file-reddit-js-v3-output-LC9">TIL Anthony Daniels, who endured years of discomfort in the C-3PO costume, was so annoyed by Alan Tudyk (Rogue One) playing K-2SO in the comfort of a motion-capture suit that he cursed at Tudyk. Tudyk later joked that a "fuck you" from Daniels was among the highest compliments he had ever received.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L10" data-line-number="10">
</td>
<td id="file-reddit-js-v3-output-LC10">Reminder about the fact UC Davis paid over $100k to remove this photo from the internet.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L11" data-line-number="11">
</td>
<td id="file-reddit-js-v3-output-LC11">King of the Hill reruns will start airing on Comedy Central July 24th</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L12" data-line-number="12">
</td>
<td id="file-reddit-js-v3-output-LC12">[Image] Slow and steady</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L13" data-line-number="13">
</td>
<td id="file-reddit-js-v3-output-LC13">White House: Trump open to Russia questioning US citizens</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L14" data-line-number="14">
</td>
<td id="file-reddit-js-v3-output-LC14">Godzilla: King of the Monsters Teaser Banner</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L15" data-line-number="15">
</td>
<td id="file-reddit-js-v3-output-LC15">He tried</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L16" data-line-number="16">
</td>
<td id="file-reddit-js-v3-output-LC16">Soldier reunited with his dog after being away.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L17" data-line-number="17">
</td>
<td id="file-reddit-js-v3-output-LC17">Hiring a hitman on yourself and preparing for battle is the ultimate extreme sport.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L18" data-line-number="18">
</td>
<td id="file-reddit-js-v3-output-LC18">Two paintballs colliding midair</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L19" data-line-number="19">
</td>
<td id="file-reddit-js-v3-output-LC19">My thoughts &amp; prayers are with those ears</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L20" data-line-number="20">
</td>
<td id="file-reddit-js-v3-output-LC20">When even your fantasy starts dropping hints</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L21" data-line-number="21">
</td>
<td id="file-reddit-js-v3-output-LC21">Elon Musk's apology is out</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L22" data-line-number="22">
</td>
<td id="file-reddit-js-v3-output-LC22">"When you're going private so you plant trees to throw some last shade at TDNW before you vanish." Thanos' farm advances. The soul children will have full bellies. 1024 points will give him the resources to double, and irrigate, his farm. (See comment)</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L23" data-line-number="23">
</td>
<td id="file-reddit-js-v3-output-LC23">Some leaders prefer chess, others prefer hungry hippos. Travis Chapman, oil, 2018</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L24" data-line-number="24">
</td>
<td id="file-reddit-js-v3-output-LC24">The S.S. Ste. Claire, retired from ferrying amusement park goers, now ferries The Damned across the river Styx.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L25" data-line-number="25">
</td>
<td id="file-reddit-js-v3-output-LC25">A soldier is reunited with his dog</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L26" data-line-number="26">
</td>
<td id="file-reddit-js-v3-output-LC26">*hits blunt*</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L27" data-line-number="27">
</td>
<td id="file-reddit-js-v3-output-LC27">Today I Learned</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L28" data-line-number="28">
</td>
<td id="file-reddit-js-v3-output-LC28">Black Panther Scene Representing the Pan-African Flag</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L29" data-line-number="29">
</td>
<td id="file-reddit-js-v3-output-LC29">The precision of this hydraulic press.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L30" data-line-number="30">
</td>
<td id="file-reddit-js-v3-output-LC30">Let bring the game to another level</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L31" data-line-number="31">
</td>
<td id="file-reddit-js-v3-output-LC31">When you're fighting a Dark Souls boss and you gamble to get 'just one extra hit' in instead of rolling out of range.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L32" data-line-number="32">
</td>
<td id="file-reddit-js-v3-output-LC32">"I check for traps"</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L33" data-line-number="33">
</td>
<td id="file-reddit-js-v3-output-LC33">Anon finds his home at last</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L34" data-line-number="34">
</td>
<td id="file-reddit-js-v3-output-LC34">He's hungry</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L35" data-line-number="35">
</td>
<td id="file-reddit-js-v3-output-LC35">Being a single mother is a thankless job.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L36" data-line-number="36">
</td>
<td id="file-reddit-js-v3-output-LC36">TIL That when you're pulling out Minigun, you're actually pulling out suitcase that then transforms into Minigun.</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L37" data-line-number="37">
</td>
<td id="file-reddit-js-v3-output-LC37">OMG guys don't look!!! 🙈🙈🙈</td>
</tr>
<tr>
<td id="file-reddit-js-v3-output-L38" data-line-number="38">
</td>
<td id="file-reddit-js-v3-output-LC38">hyubsama's emote of his own face denied for political reasons because twitch thinks its a picture of Kim Jong Un</td>
</tr>
</tbody>
</table>

### Additional Resources

And there's the list! At this point you should feel comfortable writing your first web scraper to gather data from any website. Here are a few additional resources that you may find helpful during your web scraping journey:

- [List of web scraping proxy services](https://www.scraperapi.com/blog/the-10-best-rotating-proxy-services-for-web-scraping)
- [List of handy web scraping tools](https://www.scraperapi.com/blog/the-10-best-web-scraping-tools)
- [List of web scraping tips](https://www.scraperapi.com/blog/5-tips-for-web-scraping)
- [Comparison of web scraping proxies](https://www.scraperapi.com/blog/free-shared-dedicated-datacenter-residential-rotating-proxies-for-web-scraping)
- [Cheerio Documentation](https://github.com/cheeriojs/cheerio)
- [Puppeteer Documentation](https://github.com/GoogleChrome/puppeteer)

---
