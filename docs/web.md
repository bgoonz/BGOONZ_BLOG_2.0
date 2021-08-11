2021-07-26

Web Scraping with Node.js
=========================

> So what’s web scraping anyway? It involves automating away the laborious task of collecting information from websites. There are a lot of use cases for web scraping: you might want to collect prices from various e-commerce sites for a price comparison site. Or perhaps you need flight times and

![The Ultimate Guide to Web Scraping with Node.js](https://cdn-media-1.freecodecamp.org/images/1*KkVKtysvgh2hIVRI1Irk-Q.jpeg)

So what’s web scraping anyway? It involves automating away the laborious task of collecting information from websites.

There are a lot of use cases for web scraping: you might want to collect prices from various e-commerce sites for a price comparison site. Or perhaps you need flight times and hotel/AirBNB listings for a travel site. Maybe you want to collect emails from various directories for sales leads, or use data from the internet to train machine learning/AI models. Or you could even be wanting to build a search engine like Google!

Getting started with web scraping is easy, and the process can be broken down into two main parts:

-   acquiring the data using an HTML request library or a headless browser,
-   and parsing the data to get the exact information you want.

This guide will walk you through the process with the popular Node.js [request-promise](https://github.com/request/request-promise) module, [CheerioJS](https://github.com/cheeriojs/cheerio), and [Puppeteer](https://github.com/GoogleChrome/puppeteer). Working through the examples in this guide, you will learn all the tips and tricks you need to become a pro at gathering any data you need with Node.js!

We will be gathering a list of all the names and birthdays of U.S. presidents from Wikipedia and the titles of all the posts on the front page of Reddit.

First things first: Let’s install the libraries we’ll be using in this guide (Puppeteer will take a while to install as it needs to download Chromium as well).

### Making your first request

<table><tbody><tr class="odd"><td></td><td>npm install –save request request-promise cheerio puppeteer</td></tr></tbody></table>

Next, let’s open a new text file (name the file potusScraper.js), and write a quick function to get the HTML of the Wikipedia “List of Presidents” page.

<table><tbody><tr class="odd"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="even"><td></td><td>const url = ‘https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States’;</td></tr><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>rp(url)</td></tr><tr class="odd"><td></td><td>.then(function(html){</td></tr><tr class="even"><td></td><td>//success!</td></tr><tr class="odd"><td></td><td>console.log(html);</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.catch(function(err){</td></tr><tr class="even"><td></td><td>//handle error</td></tr><tr class="odd"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td>&lt;!DOCTYPE html&gt;</td></tr><tr class="even"><td></td><td>&lt;html class=“client-nojs” lang=“en” dir=“ltr”&gt;</td></tr><tr class="odd"><td></td><td>&lt;head&gt;</td></tr><tr class="even"><td></td><td>&lt;meta charset=“UTF-8”/&gt;</td></tr><tr class="odd"><td></td><td>&lt;title&gt;List of Presidents of the United States - Wikipedia&lt;/title&gt;</td></tr><tr class="even"><td></td><td>…</td></tr></tbody></table>

### Using Chrome DevTools

Cool, we got the raw HTML from the web page! But now we need to make sense of this giant blob of text. To do that, we’ll need to use Chrome DevTools to allow us to easily search through the HTML of a web page.

Using Chrome DevTools is easy: simply open Google Chrome, and right click on the element you would like to scrape (in this case I am right clicking on George Washington, because we want to get links to all of the individual presidents’ Wikipedia pages):

![](https://cdn-media-1.freecodecamp.org/images/1*gLKhu_EO-cDqYna1P9WL_w.png)

Now, simply click inspect, and Chrome will bring up its DevTools pane, allowing you to easily inspect the page’s source HTML.

![](https://cdn-media-1.freecodecamp.org/images/1*HSUjFgji22vjwvGi2uZe1A.png)

### Parsing HTML with Cheerio.js

Awesome, Chrome DevTools is now showing us the exact pattern we should be looking for in the code (a “big” tag with a hyperlink inside of it). Let’s use Cheerio.js to parse the HTML we received earlier to return a list of links to the individual Wikipedia pages of U.S. presidents.

<table><tbody><tr class="odd"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="even"><td></td><td>const $ = require(‘cheerio’);</td></tr><tr class="odd"><td></td><td>const url = ‘https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States’;</td></tr><tr class="even"><td></td><td></td></tr><tr class="odd"><td></td><td>rp(url)</td></tr><tr class="even"><td></td><td>.then(function(html){</td></tr><tr class="odd"><td></td><td>//success!</td></tr><tr class="even"><td></td><td>console.log(<span class="math inline">$('big &amp;gt; a', html).length);&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td id="file-potusscraper-js-v2-L9" data-line-number="9"&gt;&lt;/td&gt;&lt;td id="file-potusscraper-js-v2-LC9"&gt;console.log($</span>(‘big &gt; a’, html));</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>.catch(function(err){</td></tr><tr class="odd"><td></td><td>//handle error</td></tr><tr class="even"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td>45</td></tr><tr class="even"><td></td><td>{ ‘0’:</td></tr><tr class="odd"><td></td><td>{ type: ‘tag’,</td></tr><tr class="even"><td></td><td>name: ‘a’,</td></tr><tr class="odd"><td></td><td>attribs: { href: ‘/wiki/George_Washington’, title: ‘George Washington’ },</td></tr><tr class="even"><td></td><td>children: [ [Object] ],</td></tr><tr class="odd"><td></td><td>next: null,</td></tr><tr class="even"><td></td><td>prev: null,</td></tr><tr class="odd"><td></td><td>parent:</td></tr><tr class="even"><td></td><td>{ type: ‘tag’,</td></tr><tr class="odd"><td></td><td>name: ‘big’,</td></tr><tr class="even"><td></td><td>attribs: {},</td></tr><tr class="odd"><td></td><td>children: [Array],</td></tr><tr class="even"><td></td><td>next: null,</td></tr><tr class="odd"><td></td><td>prev: null,</td></tr><tr class="even"><td></td><td>parent: [Object] } },</td></tr><tr class="odd"><td></td><td>‘1’:</td></tr><tr class="even"><td></td><td>{ type: ‘tag’</td></tr><tr class="odd"><td></td><td>…</td></tr></tbody></table>

We check to make sure there are exactly 45 elements returned (the number of U.S. presidents), meaning there aren’t any extra hidden “big” tags elsewhere on the page. Now, we can go through and grab a list of links to all 45 presidential Wikipedia pages by getting them from the “attribs” section of each element.

<table><tbody><tr class="odd"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="even"><td></td><td>const $ = require(‘cheerio’);</td></tr><tr class="odd"><td></td><td>const url = ‘https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States’;</td></tr><tr class="even"><td></td><td></td></tr><tr class="odd"><td></td><td>rp(url)</td></tr><tr class="even"><td></td><td>.then(function(html){</td></tr><tr class="odd"><td></td><td>//success!</td></tr><tr class="even"><td></td><td>const wikiUrls = [];</td></tr><tr class="odd"><td></td><td>for (let i = 0; i &lt; 45; i++) {</td></tr><tr class="even"><td></td><td>wikiUrls.push($(‘big &gt; a’, html)[i].attribs.href);</td></tr><tr class="odd"><td></td><td>}</td></tr><tr class="even"><td></td><td>console.log(wikiUrls);</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>.catch(function(err){</td></tr><tr class="odd"><td></td><td>//handle error</td></tr><tr class="even"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>[</td></tr><tr class="odd"><td></td><td>‘/wiki/George_Washington’,</td></tr><tr class="even"><td></td><td>‘/wiki/John_Adams’,</td></tr><tr class="odd"><td></td><td>‘/wiki/Thomas_Jefferson’,</td></tr><tr class="even"><td></td><td>‘/wiki/James_Madison’,</td></tr><tr class="odd"><td></td><td>‘/wiki/James_Monroe’,</td></tr><tr class="even"><td></td><td>‘/wiki/John_Quincy_Adams’,</td></tr><tr class="odd"><td></td><td>‘/wiki/Andrew_Jackson’,</td></tr><tr class="even"><td></td><td>…</td></tr><tr class="odd"><td></td><td>]</td></tr></tbody></table>

Now we have a list of all 45 presidential Wikipedia pages. Let’s create a new file (named potusParse.js), which will contain a function to take a presidential Wikipedia page and return the president’s name and birthday. First things first, let’s get the raw HTML from George Washington’s Wikipedia page.

<table><tbody><tr class="odd"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="even"><td></td><td>const url = ‘https://en.wikipedia.org/wiki/George_Washington’;</td></tr><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>rp(url)</td></tr><tr class="odd"><td></td><td>.then(function(html) {</td></tr><tr class="even"><td></td><td>console.log(html);</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>.catch(function(err) {</td></tr><tr class="odd"><td></td><td>//handle error</td></tr><tr class="even"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td>&lt;html class=“client-nojs” lang=“en” dir=“ltr”&gt;</td></tr><tr class="even"><td></td><td>&lt;head&gt;</td></tr><tr class="odd"><td></td><td>&lt;meta charset=“UTF-8”/&gt;</td></tr><tr class="even"><td></td><td>&lt;title&gt;George Washington - Wikipedia&lt;/title&gt;</td></tr><tr class="odd"><td></td><td>…</td></tr></tbody></table>

Let’s once again use Chrome DevTools to find the syntax of the code we want to parse, so that we can extract the name and birthday with Cheerio.js.

![](https://cdn-media-1.freecodecamp.org/images/1*exzZbuIwfrCcbTM2rr9_bw.png)

![](https://cdn-media-1.freecodecamp.org/images/1*yth6AmHpywM77n0wEprpiA.png)

So we see that the name is in a class called “firstHeading” and the birthday is in a class called “bday”. Let’s modify our code to use Cheerio.js to extract these two classes.

<table><tbody><tr class="odd"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="even"><td></td><td>const $ = require(‘cheerio’);</td></tr><tr class="odd"><td></td><td>const url = ‘https://en.wikipedia.org/wiki/George_Washington’;</td></tr><tr class="even"><td></td><td></td></tr><tr class="odd"><td></td><td>rp(url)</td></tr><tr class="even"><td></td><td>.then(function(html) {</td></tr><tr class="odd"><td></td><td>console.log(<span class="math inline">$('.firstHeading', html).text());&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td id="file-potusparse-js-v2-L8" data-line-number="8"&gt;&lt;/td&gt;&lt;td id="file-potusparse-js-v2-LC8"&gt;console.log($</span>(‘.bday’, html).text());</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.catch(function(err) {</td></tr><tr class="even"><td></td><td>//handle error</td></tr><tr class="odd"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td>George Washington</td></tr><tr class="even"><td></td><td>1732-02-22</td></tr></tbody></table>

### Putting it all together

Perfect! Now let’s wrap this up into a function and export it from this module.

<table><tbody><tr class="odd"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="even"><td></td><td>const $ = require(‘cheerio’);</td></tr><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>const potusParse = function(url) {</td></tr><tr class="odd"><td></td><td>return rp(url)</td></tr><tr class="even"><td></td><td>.then(function(html) {</td></tr><tr class="odd"><td></td><td>return {</td></tr><tr class="even"><td></td><td>name: $(‘.firstHeading’, html).text(),</td></tr><tr class="odd"><td></td><td>birthday: $(‘.bday’, html).text(),</td></tr><tr class="even"><td></td><td>};</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>.catch(function(err) {</td></tr><tr class="odd"><td></td><td>//handle error</td></tr><tr class="even"><td></td><td>});</td></tr><tr class="odd"><td></td><td>};</td></tr><tr class="even"><td></td><td></td></tr><tr class="odd"><td></td><td>module.exports = potusParse;</td></tr></tbody></table>

Now let’s return to our original file potusScraper.js and require the potusParse.js module. We’ll then apply it to the list of wikiUrls we gathered earlier.

<table><tbody><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="odd"><td></td><td>const $ = require(‘cheerio’);</td></tr><tr class="even"><td></td><td>const potusParse = require(‘./potusParse’);</td></tr><tr class="odd"><td></td><td>const url = ‘https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States’;</td></tr><tr class="even"><td></td><td></td></tr><tr class="odd"><td></td><td>rp(url)</td></tr><tr class="even"><td></td><td>.then(function(html) {</td></tr><tr class="odd"><td></td><td>//success!</td></tr><tr class="even"><td></td><td>const wikiUrls = [];</td></tr><tr class="odd"><td></td><td>for (let i = 0; i &lt; 45; i++) {</td></tr><tr class="even"><td></td><td>wikiUrls.push($(‘big &gt; a’, html)[i].attribs.href);</td></tr><tr class="odd"><td></td><td>}</td></tr><tr class="even"><td></td><td>return Promise.all(</td></tr><tr class="odd"><td></td><td>wikiUrls.map(function(url) {</td></tr><tr class="even"><td></td><td>return potusParse(‘https://en.wikipedia.org’ + url);</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>);</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>.then(function(presidents) {</td></tr><tr class="odd"><td></td><td>console.log(presidents);</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.catch(function(err) {</td></tr><tr class="even"><td></td><td>//handle error</td></tr><tr class="odd"><td></td><td>console.log(err);</td></tr><tr class="even"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>[</td></tr><tr class="odd"><td></td><td>{ name: ‘George Washington’, birthday: ‘1732-02-22’ },</td></tr><tr class="even"><td></td><td>{ name: ‘John Adams’, birthday: ‘1735-10-30’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Thomas Jefferson’, birthday: ‘1743-04-13’ },</td></tr><tr class="even"><td></td><td>{ name: ‘James Madison’, birthday: ‘1751-03-16’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘James Monroe’, birthday: ‘1758-04-28’ },</td></tr><tr class="even"><td></td><td>{ name: ‘John Quincy Adams’, birthday: ‘1767-07-11’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Andrew Jackson’, birthday: ‘1767-03-15’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Martin Van Buren’, birthday: ‘1782-12-05’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘William Henry Harrison’, birthday: ‘1773-02-09’ },</td></tr><tr class="even"><td></td><td>{ name: ‘John Tyler’, birthday: ‘1790-03-29’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘James K. Polk’, birthday: ‘1795-11-02’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Zachary Taylor’, birthday: ‘1784-11-24’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Millard Fillmore’, birthday: ‘1800-01-07’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Franklin Pierce’, birthday: ‘1804-11-23’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘James Buchanan’, birthday: ‘1791-04-23’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Abraham Lincoln’, birthday: ‘1809-02-12’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Andrew Johnson’, birthday: ‘1808-12-29’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Ulysses S. Grant’, birthday: ‘1822-04-27’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Rutherford B. Hayes’, birthday: ‘1822-10-04’ },</td></tr><tr class="even"><td></td><td>{ name: ‘James A. Garfield’, birthday: ‘1831-11-19’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Chester A. Arthur’, birthday: ‘1829-10-05’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Grover Cleveland’, birthday: ‘1837-03-18’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Benjamin Harrison’, birthday: ‘1833-08-20’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Grover Cleveland’, birthday: ‘1837-03-18’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘William McKinley’, birthday: ‘1843-01-29’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Theodore Roosevelt’, birthday: ‘1858-10-27’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘William Howard Taft’, birthday: ‘1857-09-15’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Woodrow Wilson’, birthday: ‘1856-12-28’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Warren G. Harding’, birthday: ‘1865-11-02’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Calvin Coolidge’, birthday: ‘1872-07-04’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Herbert Hoover’, birthday: ‘1874-08-10’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Franklin D. Roosevelt’, birthday: ‘1882-01-30’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Harry S. Truman’, birthday: ‘1884-05-08’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Dwight D. Eisenhower’, birthday: ‘1890-10-14’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘John F. Kennedy’, birthday: ‘1917-05-29’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Lyndon B. Johnson’, birthday: ‘1908-08-27’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Richard Nixon’, birthday: ‘1913-01-09’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Gerald Ford’, birthday: ‘1913-07-14’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Jimmy Carter’, birthday: ‘1924-10-01’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Ronald Reagan’, birthday: ‘1911-02-06’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘George H. W. Bush’, birthday: ‘1924-06-12’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Bill Clinton’, birthday: ‘1946-08-19’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘George W. Bush’, birthday: ‘1946-07-06’ },</td></tr><tr class="even"><td></td><td>{ name: ‘Barack Obama’, birthday: ‘1961-08-04’ },</td></tr><tr class="odd"><td></td><td>{ name: ‘Donald Trump’, birthday: ‘1946-06-14’ }</td></tr><tr class="even"><td></td><td>]</td></tr></tbody></table>

### Rendering JavaScript Pages

Voilà! A list of the names and birthdays of all 45 U.S. presidents. Using just the request-promise module and Cheerio.js should allow you to scrape the vast majority of sites on the internet.

Recently, however, many sites have begun using JavaScript to generate dynamic content on their websites. This causes a problem for request-promise and other similar HTTP request libraries (such as axios and fetch), because they only get the response from the initial request, but they cannot execute the JavaScript the way a web browser can.

Thus, to scrape sites that require JavaScript execution, we need another solution. In our next example, we will get the titles for all of the posts on the front page of Reddit. Let’s see what happens when we try to use request-promise as we did in the previous example.

Output:

<table><tbody><tr class="odd"><td></td><td>const rp = require(‘request-promise’);</td></tr><tr class="even"><td></td><td>const url = ‘https://www.reddit.com’;</td></tr><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>rp(url)</td></tr><tr class="odd"><td></td><td>.then(function(html){</td></tr><tr class="even"><td></td><td>//success!</td></tr><tr class="odd"><td></td><td>console.log(html);</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.catch(function(err){</td></tr><tr class="even"><td></td><td>//handle error</td></tr><tr class="odd"><td></td><td>});</td></tr><tr class="even"><td></td><td>}</td></tr></tbody></table>

Here’s what the output looks like:

<table><tbody><tr class="odd"><td></td><td>&lt;!DOCTYPE html&gt;&lt;html</td></tr><tr class="even"><td></td><td>lang=“en”&gt;&lt;head&gt;&lt;title&gt;reddit: the front page of the</td></tr><tr class="odd"><td></td><td>internet&lt;/title&gt;</td></tr><tr class="even"><td></td><td>…</td></tr></tbody></table>

![](https://cdn-media-1.freecodecamp.org/images/1*mKzPVGRR4CFKMwQw5y_YnQ.png)

Hmmm…not quite what we want. That’s because getting the actual content requires you to run the JavaScript on the page! With Puppeteer, that’s no problem.

Puppeteer is an extremely popular new module brought to you by the Google Chrome team that allows you to control a headless browser. This is perfect for programmatically scraping pages that require JavaScript execution. Let’s get the HTML from the front page of Reddit using Puppeteer instead of request-promise.

<table><tbody><tr class="odd"><td></td><td>const puppeteer = require(‘puppeteer’);</td></tr><tr class="even"><td></td><td>const url = ‘https://www.reddit.com’;</td></tr><tr class="odd"><td></td><td></td></tr><tr class="even"><td></td><td>puppeteer</td></tr><tr class="odd"><td></td><td>.launch()</td></tr><tr class="even"><td></td><td>.then(function(browser) {</td></tr><tr class="odd"><td></td><td>return browser.newPage();</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.then(function(page) {</td></tr><tr class="even"><td></td><td>return page.goto(url).then(function() {</td></tr><tr class="odd"><td></td><td>return page.content();</td></tr><tr class="even"><td></td><td>});</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>.then(function(html) {</td></tr><tr class="odd"><td></td><td>console.log(html);</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.catch(function(err) {</td></tr><tr class="even"><td></td><td>//handle error</td></tr><tr class="odd"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td>&lt;!DOCTYPE html&gt;&lt;html lang=“en”&gt;&lt;head&gt;&lt;link</td></tr><tr class="even"><td></td><td>href=“//c.amazon-adsystem.com/aax2/apstag.js” rel=“preload”</td></tr><tr class="odd"><td></td><td>as=“script”&gt;</td></tr><tr class="even"><td></td><td>…</td></tr></tbody></table>

Nice! The page is filled with the correct content!

![](https://cdn-media-1.freecodecamp.org/images/1*N5HtAiijcMEB_fBQvPd7Ow.png)

Now we can use Chrome DevTools like we did in the previous example.

![](https://cdn-media-1.freecodecamp.org/images/1*tHSgjPMvn3M26N2f7Q2B1Q.png)

It looks like Reddit is putting the titles inside “h2” tags. Let’s use Cheerio.js to extract the h2 tags from the page.

<table><tbody><tr class="odd"><td></td><td>const puppeteer = require(‘puppeteer’);</td></tr><tr class="even"><td></td><td>const $ = require(‘cheerio’);</td></tr><tr class="odd"><td></td><td>const url = ‘https://www.reddit.com’;</td></tr><tr class="even"><td></td><td></td></tr><tr class="odd"><td></td><td>puppeteer</td></tr><tr class="even"><td></td><td>.launch()</td></tr><tr class="odd"><td></td><td>.then(function(browser) {</td></tr><tr class="even"><td></td><td>return browser.newPage();</td></tr><tr class="odd"><td></td><td>})</td></tr><tr class="even"><td></td><td>.then(function(page) {</td></tr><tr class="odd"><td></td><td>return page.goto(url).then(function() {</td></tr><tr class="even"><td></td><td>return page.content();</td></tr><tr class="odd"><td></td><td>});</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.then(function(html) {</td></tr><tr class="even"><td></td><td><span class="math inline">$('h2', html).each(function() {&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td id="file-reddit-js-v3-L17" data-line-number="17"&gt;&lt;/td&gt;&lt;td id="file-reddit-js-v3-LC17"&gt;console.log($</span>(this).text());</td></tr><tr class="odd"><td></td><td>});</td></tr><tr class="even"><td></td><td>})</td></tr><tr class="odd"><td></td><td>.catch(function(err) {</td></tr><tr class="even"><td></td><td>//handle error</td></tr><tr class="odd"><td></td><td>});</td></tr></tbody></table>

Output:

<table><tbody><tr class="odd"><td></td><td>Russian Pipeline. Upvote so that this is the first image people see when they Google “Russian Pipeline”</td></tr><tr class="even"><td></td><td>John F. Kennedy Jr. Sitting in the pilot seat of the Marine One circa 1963</td></tr><tr class="odd"><td></td><td>I didn’t take it as a compliment.</td></tr><tr class="even"><td></td><td>How beautiful is this</td></tr><tr class="odd"><td></td><td>Hustle like Faye</td></tr><tr class="even"><td></td><td>The power of a salt water crocodile’s tail.</td></tr><tr class="odd"><td></td><td>I’m 36, and will be dead inside of a year.</td></tr><tr class="even"><td></td><td>F***ing genius.</td></tr><tr class="odd"><td></td><td>TIL Anthony Daniels, who endured years of discomfort in the C-3PO costume, was so annoyed by Alan Tudyk (Rogue One) playing K-2SO in the comfort of a motion-capture suit that he cursed at Tudyk. Tudyk later joked that a “fuck you” from Daniels was among the highest compliments he had ever received.</td></tr><tr class="even"><td></td><td>Reminder about the fact UC Davis paid over $100k to remove this photo from the internet.</td></tr><tr class="odd"><td></td><td>King of the Hill reruns will start airing on Comedy Central July 24th</td></tr><tr class="even"><td></td><td>[Image] Slow and steady</td></tr><tr class="odd"><td></td><td>White House: Trump open to Russia questioning US citizens</td></tr><tr class="even"><td></td><td>Godzilla: King of the Monsters Teaser Banner</td></tr><tr class="odd"><td></td><td>He tried</td></tr><tr class="even"><td></td><td>Soldier reunited with his dog after being away.</td></tr><tr class="odd"><td></td><td>Hiring a hitman on yourself and preparing for battle is the ultimate extreme sport.</td></tr><tr class="even"><td></td><td>Two paintballs colliding midair</td></tr><tr class="odd"><td></td><td>My thoughts &amp; prayers are with those ears</td></tr><tr class="even"><td></td><td>When even your fantasy starts dropping hints</td></tr><tr class="odd"><td></td><td>Elon Musk’s apology is out</td></tr><tr class="even"><td></td><td>“When you’re going private so you plant trees to throw some last shade at TDNW before you vanish.” Thanos’ farm advances. The soul children will have full bellies. 1024 points will give him the resources to double, and irrigate, his farm. (See comment)</td></tr><tr class="odd"><td></td><td>Some leaders prefer chess, others prefer hungry hippos. Travis Chapman, oil, 2018</td></tr><tr class="even"><td></td><td>The S.S. Ste. Claire, retired from ferrying amusement park goers, now ferries The Damned across the river Styx.</td></tr><tr class="odd"><td></td><td>A soldier is reunited with his dog</td></tr><tr class="even"><td></td><td><em>hits blunt</em></td></tr><tr class="odd"><td></td><td>Today I Learned</td></tr><tr class="even"><td></td><td>Black Panther Scene Representing the Pan-African Flag</td></tr><tr class="odd"><td></td><td>The precision of this hydraulic press.</td></tr><tr class="even"><td></td><td>Let bring the game to another level</td></tr><tr class="odd"><td></td><td>When you’re fighting a Dark Souls boss and you gamble to get ‘just one extra hit’ in instead of rolling out of range.</td></tr><tr class="even"><td></td><td>“I check for traps”</td></tr><tr class="odd"><td></td><td>Anon finds his home at last</td></tr><tr class="even"><td></td><td>He’s hungry</td></tr><tr class="odd"><td></td><td>Being a single mother is a thankless job.</td></tr><tr class="even"><td></td><td>TIL That when you’re pulling out Minigun, you’re actually pulling out suitcase that then transforms into Minigun.</td></tr><tr class="odd"><td></td><td>OMG guys don’t look!!! 🙈🙈🙈</td></tr><tr class="even"><td></td><td>hyubsama’s emote of his own face denied for political reasons because twitch thinks its a picture of Kim Jong Un</td></tr></tbody></table>

### Additional Resources

And there’s the list! At this point you should feel comfortable writing your first web scraper to gather data from any website. Here are a few additional resources that you may find helpful during your web scraping journey:

-   [List of web scraping proxy services](https://www.scraperapi.com/blog/the-10-best-rotating-proxy-services-for-web-scraping)
-   [List of handy web scraping tools](https://www.scraperapi.com/blog/the-10-best-web-scraping-tools)
-   [List of web scraping tips](https://www.scraperapi.com/blog/5-tips-for-web-scraping)
-   [Comparison of web scraping proxies](https://www.scraperapi.com/blog/free-shared-dedicated-datacenter-residential-rotating-proxies-for-web-scraping)
-   [Cheerio Documentation](https://github.com/cheeriojs/cheerio)
-   [Puppeteer Documentation](https://github.com/GoogleChrome/puppeteer)

------------------------------------------------------------------------
