

# [SOLVED] - How to add a Google Search Bar to your Website? - 2021 Expertrec

> ## Excerpt
> Easy steps to add a Google search bar or box to your website✅✅. You need not have any coding knowledge to follow the steps below. This

---
Easy steps to add a Google search bar or box to your website. You need not have any coding knowledge to follow the steps below. This method works with all major CMS’s such as WordPress, Ghost, Drupal, Joomla, etc. 

![How to add a Google Search Bar to your Website](https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-5e70179/wp-content/uploads/2021/01/How-to-add-a-Google-Search-Bar-to-your-Website-1024x576.png)

On-site search on any website is a crucial piece of technology since it allows users to search for content inside your website and helps reorganize your content strategy to match your products or blog content to what people are searching for on your website. The reason why Google search is so popular is that it is easy to implement and also it is reliable. There is another reason that people might like it or hate it – Ads. Yes, Google search has ads. It might be helpful for people looking to monetize their websites. For others, it might be a huge turn-off. If you belong to the second group, you might have to look for alternative custom search engines like [Expertrec](https://cse.expertrec.com/?platform=cse).

If you are on WordPress, it has a default search bar that adds basic search functionality. But it is lacking in many desirable search features such as auto-complete, more control over the search UI, and location of the search box. Word press users, can download our extension from this [link](https://wordpress.org/plugins/wp-fastest-site-search/). Detailed instructions on how to install the WordPress extension are given at the end of this blog.

## **Add Google search bar to a website using Google custom search**

### Creating a Google custom search using (programmable search engine)

1.  To create a Programmable Search Engine:
    
    1.  Sign in to [Control Panel](https://programmablesearchengine.google.com/create/new) using your Google Account ([get an account](https://www.google.com/accounts/NewAccount) if you don’t have one).
    2.  The **name** of your search engine will be automatically generated based on the URLs you select. You can change this name at any time.
    3.  Select the **language** of your search engine. This defines the language of the buttons and other design elements of your search engine but doesn’t affect the actual search results.
    4.  Click **Create**.
    
    Your basic search engine is ready to use! To see more configuration options, go to the [Control Panel](https://programmablesearchengine.google.com/). Control Panel also has a preview window that allows you to test and fine-tune your search results.
    
2.  Go to [https://cse.google.co.in/cse/](https://cse.google.co.in/cse/)[![add google search to website](https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-5e70179/wp-content/uploads/2018/03/google-custom-search-bar.png)](https://blog.expertrec.com/add-search-to-website/)
3.  Sign in to [Control Panel](https://programmablesearchengine.google.com/create/new) using your Google Account ([get an account](https://www.google.com/accounts/NewAccount) if you don’t have one).
4.  The **name** of your search engine will be automatically generated based on the URLs you select. You can change this name at any time.
5.  In the **Sites to search** section, add the pages you want to include in your search engine. You can include any sites you wish to, not just the sites you own. You can include whole site URLs or individual page URLs. You can also use [URL patterns](http://support.google.com/programmable-search/bin/answer.py?answer=71826).![add google search to website](https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-5e70179/wp-content/uploads/2018/03/sites-to-search.png)

### Implementing Google search box

Once you’ve created your Programmable Search Engine, you can add the Programmable Search Element to your site. To do this, you’ll need to copy some code and paste it into your site’s HTML where you want your search engine to appear.

1.  In the [Control Panel,](https://programmablesearchengine.google.com/) click the search engine you want to use.
2.  Click **Setup** in the sidebar, and then click the **Basics** tab.
3.  In the **Details** section, click **Get code**. Copy the code and paste it into your page’s HTML source code where you want the Google search bar to appear. Click on receive code.![add google search to website](https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-5e70179/wp-content/uploads/2018/03/receive-code.png)
4.  Add this code to your website. If you are on Word press, you can use a plugin called Elementor or insert headers and footers plugin that will do this for you. If you want exact placement, you will have to edit your theme file by Appearance-> theme editor. If you are on another CMS, you can contact your developer and ask him to add it to all the pages you want this search bar to be shown.![add google search to website](https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-5e70179/wp-content/uploads/2018/03/receive-code-2.png)
5.  Once you add this code to your website, you will see the Google search bar on your website pages.

### Editing the look and feel

On many occasions, it makes sense to have a search box appear independently from search results. A two-column layout allows you to render a search box in one area of your page (for instance in the sidebar) and display results in a different one (for instance the main area of the page).

To change the layout of your engine go to the **Look and feel** section in the [Control Panel](https://programmablesearchengine.google.com/) and click the **Layout** tab. After selecting and saving the 2-column layout in the Control Panel, you also need to change the HTML code for the Search Element.

### Enable Autocomplete

Apart from customizing colors, fonts, or link style in the [Control Panel](https://programmablesearchengine.google.com/), it is possible to influence the look and feel and the behavior of the search box via custom HTML attributes.

This allows you to override some of the general settings from the Control Panel. It is especially useful when you want one search box (e.g., one on the homepage) to behave differently than other ones on the site. For example, you can enable or disable the autocomplete feature using attributes. By default, it is set to `true` if autocomplete is enabled in the Control Panel. By switching the value to `false`, you can control how the element behaves.

`<div class="gcse-searchbox"></div> <div class="gcse-searchresults" data-defaultToImageSearch="true"></div>`

## Customizing Search Results

In a similar way to customizing the search box, you can add additional options to the search results element.

For example, to change our search engine from webresults-based to image-based, we can utilize the `defaultToImageSearch` attribute.

First of all, you need to enable Image Search in the [Control Panel](https://programmablesearchengine.google.com/) for your search engine. In the **Setup** section, in the **Basics** tab, click the **Image search** option into the “on” position. After that, add the `defaultToImageSearch` attribute to the `<div class="gcse-searchresults"></div>` element on your website.

### Advantages of adding Google custom search

-   Google custom search is free. There are few custom search engines that are free.
-   If you enable ads inside Google custom search, you can make money from AdSense.

### [Disadvantages of using google custom search-](https://blog.expertrec.com/disadvantages-of-using-google-custom-search/)

-   Ads- You can lose your website visitors to competitors.
-   No control over what is indexed or when
-   No control of search results
-   No support
-   Minimal UI customization options
-   It can be shut down or changed at any time. Google is known for killing products ruthlessly without considering the user base.

Though this might sound great to have Google search on your website, there is no free lunch.  Google shows ads to cover up for this service.  Now say, your site is about shoes of brand X.  when people search on your site for a shoe you have,  Google shows an ad of your competitor brand Y and **places it above** your site results.  Your visitors are going to believe that you indeed are recommending brand Y yourself.  If you are going to monetize your visitors, then this will drastically reduce your income.

Second, no one likes ads. In my opinion, there is nothing like a “non-intrusive” ad. But, ads are Ads, and they are bad. I wouldn’t like to force my visitors to watch ads while they are searching on my website.  Method 2 will give an alternative but paid solution to this problem.

## Google search bar for your website using Expertrec

Expertrec adds a Google-like search box to your website. It is priced at 9 USD per month. The biggest advantage is that it doesn’t contain ads.

Before starting to make a custom search engine using Expertrec, make sure that is your website is live and not behind a login (If your website is behind a login, follow steps in this [blog](https://blog.expertrec.com/crawling-behind-login-authenticated-pages/)). Have your sitemap URL handy. Also, make sure you have code access to your website. Follow the below steps.

1.  Go to [https://cse.expertrec.com/?platform=cse](https://cse.expertrec.com/?platform=cse).
2.  Login with your Gmail id.
3.  Enter your website URL. (enter your website URL in the format https://www.yourwebsite.som).
4.  Enter your sitemap URL. ( if you don’t have a sitemap, you can skip this step as well).
5.  Initiate a website crawl. (Now Expertrec crawlers will start crawling your website. This could take some time depending on the size and number of pages on your website).
6.  Once the crawl completes, you can make changes to your search engine’s look and feel and also to the search engine’s ranking algorithm by using the control panel. There are more advanced features like search weights, promotions, synonyms, and more.![add google search to website](https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-5e70179/wp-content/uploads/2018/03/UI-editor.jpg)
7.  Go to the code section and add it to your website. You can also email the code to your developer and ask them to add it to their website.
    -   the code contains two portions ( one within **<script></script>** and another piece of code **<ci-search></ci-search>**).
    -   The <script></script> is just the JavaScript component and can be added using Google tag manager or using the code editor.
    -   The <ci-search></ci-search> code adds the search box to your website. The place where you add this code determines the location of the search box.![add google search to website](https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/static/optimized/rev-5e70179/wp-content/uploads/2018/03/expertrec-cse-code.png)
8.  It is advisable to make the code changes in a test mode or development website before taking live in your live/ production site.
9.  As a final step, remove any website cache that you might have.
10.  Now your site search engine is live. After a few days of search engine usage, you can check out the search analytics to check out what users are searching for and reorganize your content strategy accordingly.

## Advantages of Using Expertrec search bar

1.  No Ads. We never show ads in our search results.
2.  Affordable pricing plan. – We have prices starting at $9 per month.
3.  Real-time support to help you take live your search on your website- You can be sure that search results don’t
4.  Full control over search results.

Happy searching.  Here is the signup link again [https://cse.expertrec.com?platform=cse](https://cse.expertrec.com/?platform=cse)

## Google search box using a plugin for WordPress websites

You can also use the following plugin to add a Google search box to your WordPress site.

[WP Fastest Site Search wordpress plugin](https://wordpress.org/plugins/wp-fastest-site-search/)

Expertrec WordPress search plugin for wordpress replaces the standard WordPress search widget and adds auto-complete, spell correct, PDF search, image search, and voice search capabilities to your WordPress site. For more information, visit [Expertrec.com](https://expertrec.com/?utm_source=wordpress.org)

This custom search plugin is highly customizable and lightning-fast. It also adds filters and search results pages for a better search experience for your visitors.

You can build and configure your own WordPress search user interface with no coding. Please note that this is a paid plugin (plans begin at 9$ per month) and that you may try out a free demo for 14 days. However, you can continue using the voice search feature for free even after the trial period.

This plugin replaces your default WordPress search form. However, for some themes, the default integration might not work. For such cases, you will have to add the code **<ci-search></ci-search>** at the desired location ( for example, in your menu or header or footer). It also adds voice search capability to your WordPress site.

### **Features**

-   Superfast. (Since our search loads from our super-fast servers with super caching technology-enabled, you can expect to deliver a super-fast search experience to your website visitors).
-   Free voice search. (Currently supported only in Chrome browsers).
-   Image search. ( Featured images are automatically captured from every page and are displayed alongside the search results).
-   PDF search. (Contents within the PDF are indexed and displayed inside search results. Users can separately select only PDF results using the filter option)
-   Relevant and better search results. (Our search learns as users interact more and more with the search engine, which leads to better re-ranking ).
-   No Ads. (We promise never to show ads in our search results).
-   Search Filters and Facets. (Our crawler automatically detects categories of blogs and products and creates a filter for users to fine-tune their search results).
-   Custom Search engine rules. (You can define custom search rules to promote or demote search results).
-   Synonyms. ( You can set synonyms by adding in our easy-to-use interface, for example, furniture=sofa, etc.)
-   Complete control over the UI (no coding required).
-   Quick and easy configuration. (no coding required).
-   Fast type ahead auto-complete search suggestions.
-   Advanced word matching and typo correction.
-   The self Learning search algorithm continuously gets better.
-   Highlighting Search term.
-   Responsive – works across all devices (mobile, tablet, desktop, android app).

[Add a google search bar to your site for $9 per month](https://cse.expertrec.com/?platform=cse)




---
---

# How to add custom google search bar inside your web-page? - GeeksforGeeks

> ## Excerpt
> A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions.

---
A search bar is necessary for a good website. Creating your own search engine from scratch might be a difficult task but this task can be skipped with the help of Google. Google has created a website to create a custom search bar, to create your own check the below link.

-   https://programmablesearchengine.google.com/about/
    
    .
    

**Creating a Custom Search Bar:** On this website, anyone can easily program their search bar by just selecting the sites you want to be searched for. Follow the steps explained below.

**Note:** You can modify your setting about searching sites, searching images, safe search from control panel and you can also set to show advertisement while searching through your search bar.

**Embedding the Search Bar on a Webpage:** After getting your code you can simply paste it inside your web page to see the working search bar.

-   **Example:** You can see that the output screen has a search bar with an option to search which shows the result from the sites or domain you have selected while creating this search bar. Moreover, this search option will automatically change as you change the sites from the control panel. Currently, the search results are been shown in the default manner. Apart from that, you can manipulate the result displaying manner and much more as directed on the below links
    
    https://developers.google.com/custom-search/docs/element
    
    .  
    
    -   HTML
    
    ## HTML
    
    `<!DOCTYPE html>`
    
    `<``html``>`
    
     `<``head``>`
    
     `<``title``>Custom Search-Bar</``title``>`
    
     `<``style``>`
    
     `body {`
    
     `background-image: linear-gradient(to left, white, green);`
    
     `color: lawngreen;`
    
     `}`
    
     `</``style``>`
    
     `</``head``>`
    
     `<``body``>`
    
     `<``h1` `style``=``"text-align: center;"``>GeeksforGeeks</``h1``>`
    
     `<``script` `async` `src``=`
    
     `</``script``>`
    
     `<``div` `class``=``"gcse-search"``></``div``>`
    
     `</``body``>`
    
    `</``html``>`
    
-   **Output:** ![](https://media.geeksforgeeks.org/wp-content/uploads/20200515125003/Screencast-2020-05-15-124903.gif)





---
---




# Implementing search box  |  Programmable Search Engine

> ## Excerpt
> Once you've created your Programmable Search Engine, you can add the Programmable Search Element to your site. To do this, you'll need to copy some code and paste it into your site's HTML where you want your search engine to appear.

---
Once you've created your Programmable Search Engine, you can add the Programmable Search Element to your site. To do this, you'll need to copy some code and paste it into your site's HTML where you want your search engine to appear.

1.  In the [Control Panel](https://programmablesearchengine.google.com/) click the search engine you want to use.
2.  Click **Setup** in the sidebar, and then click the **Basics** tab.
3.  In the **Details** section, click **Get code**. Copy the code and paste it into your page's HTML source code where you want the Programmable Search Element to appear.

The `<div class="gcse-search"></div>` element is a placeholder - this is where the search element (both search box and search results) will be rendered.

<!-- Insert your own Programmable Search Engine ID here --> <script async src="https://cse.google.com/cse.js?cx=017643444788069204610:4gvhea\_mvga"></script>

```
<div class="gcse-search"></div>
```

## Trying out different layouts

On many occasions, it makes sense to have a search box appear independently from search results. A two-column layout allows you to render a search box in one area of your page (for instance in the sidebar) and display results in a different one (for instance the main area of the page).

To change the layout of your engine go to the **Look and feel** section in the [Control Panel](https://programmablesearchengine.google.com/) and click the **Layout** tab. After selecting and saving the 2-column layout in the Control Panel, you also need to change the HTML code for the Search Element.

<!-- Insert your own Programmable Search Engine ID here --> <script async src="https://cse.google.com/cse.js?cx=017643444788069204610:4gvhea\_mvga"></script>

```
<div style="border: 1px solid blue;">    Area 1 (for example a sidebar)    <div class="gcse-searchbox"></div></div><div style="border: 1px solid red;">    Area 2 (for example main area of the page)    <div class="gcse-searchresults"></div></div>
```

Another interesting layout is the two-page option. It allows you to implement your own search box on one page and render the standard search results on another page using parameters in the address bar.

Select and save the **two-page layout** in the Control Panel. On one page, implement a stand-alone search box, changing the `resultsUrl` attribute to point to the url where you want to display the results.

```
<script async src="https://cse.google.com/cse.js?cx=YOUR_ENGINE_ID"></script><div class="gcse-searchbox-only" data-resultsUrl="YOUR_RESULTS_PAGE_URL"></div>
```

[Try it](https://jsfiddle.net/gtpqzhac/)

To implement a stand-alone search results page, paste the results code snippet into your results page:

```
<script async src="https://cse.google.com/cse.js?cx=YOUR_ENGINE_ID"></script><div class="gcse-searchresults-only"></div>
```

Now you can trigger search results on this page by passing a "q" argument in the url:

```
https://my-results-page-url.com/?q=myQuery
```

Note the _q=myQuery_ param in the address bar - this is how the `<div class="gcse-searchresults-only"></div>` element knows what query results to display.

[Try it](https://programmablesearchengine.google.com/docs/element/results-only_url.html?q=test)

## Next...

Continue to [Enabling autocomplete](https://developers.google.com/custom-search/docs/tutorial/autocomplete).






---
---






# How to Add a Search Bar in HTML | PageDart

> ## Excerpt
> We look at how to add a search bar in HTML to your website and search connect it to Google search

---
In this tutorial, we are going to add a search bar in HTML to your site!

I will walk you through all the components you need to add a search bar in HTML and connect it to Google to search.

Google will open in a new tab and only show results for your site.

For those in a rush, the complete solution is at the bottom of the page. For those who want the deep dive keep reading!

-   [HTML Form](https://pagedart.com/blog/how-to-add-a-search-bar-in-html/#html-form)
-   [CSS](https://pagedart.com/blog/how-to-add-a-search-bar-in-html/#css)
-   [JavaScript](https://pagedart.com/blog/how-to-add-a-search-bar-in-html/#javascript)
-   [Complete Solution](https://pagedart.com/blog/how-to-add-a-search-bar-in-html/#complete-solution)
-   [How to Add a Search Bar in HTML, Final Thoughts](https://pagedart.com/blog/how-to-add-a-search-bar-in-html/#how-to-add-a-search-bar-in-html-final-thoughts)

Let's start with the HTML that we need to create a form.

## HTML Form

The first thing we need to add is the bar itself. This uses a few HTML elements:

-   `<form>` - This element is for user input
-   `<input>` - This element has many types the one we will use today is search
-   `<button>` - This element will submit the form and start the search

Here is what the HTML will look like:

```
<form id="form"> 
  <input type="search" id="query" name="q" placeholder="Search...">
  <button>Search</button>
</form>
```

The above HTML is all we need to create a search bar. There are a few attributes that we are using on the `<input>` tag. Let's look at these in more detail:

-   type - This sets how the input looks on the screen. There are many types such as password, checkbox and radio yet here we are using search
-   id - Setting an ID can make it easy to reference the input box from JavaScript which we will use later
-   name - It is common to use “q” for the search query box name
-   placeholder - This is some text that gives a hint to the user on what the input is for

When the HTML displays on the browser it looks like this:

![Search bar in html](https://pagedart.com/images/how-to-add-a-search-bar-in-html/search.webp "Search bar in html")

For the input, we have used the type search but there is also a text type. It can be a bit confusing on which one you should pick. The two input types are almost the same except the search type has some extra functionality. For example, some browsers will add a delete button to the input tag for you:

![Search bar with delete](https://pagedart.com/images/how-to-add-a-search-bar-in-html/delete.webp "Search bar with delete")

For search boxes, it makes sense to use the search input type and that is what we are going to use here.

Our form is not quite finished yet, we need to make sure that screen readers can use it for accessibility.

To do this we have to make two changes to the form:

1.  We need to add a `role` to the form with the value of “search”. Setting this will cause the screen readers to announce that this form is a search form.
2.  We add a `aria-label` attribute to the `<input>` element. The screen reader will read aloud the value of this attribute. Set a value that describes what text the search form returns such as “Search through our site content”.

This is our final HTML:

```
<form id="form" role="search">
  <input type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content">
  <button>Search</button>
</form>
```

Next, we are going to look at making a form pretty by styling the form with CSS.

## CSS

CSS adds style to the search bar changing its look and feel.

One addition that can help the user find the search box is to add a magnifying glass or search icon. We will add one of these to the button and create a search box that looks like this:

![How to Add a Search Bar in HTML](https://pagedart.com/images/how-to-add-a-search-bar-in-html/how-to-add-a-search-bar-in-html.webp "How to Add a Search Bar in HTML")

It's amazing what a bit of color and an icon can do! Looks much better right?

Let's look at what we have changed to make it look like this.

First, we have added some color to the form itself:

```
form {
  background-color: #4654e1;
  width: 300px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

We have set the width and height of the form. We also arrange the items in the form using the `flex` display.

Next, we change the look of the input search box:

```
input {
  all: unset;
  font: 16px system-ui;
  color: #fff;
  height: 100%;
  width: 100%;
  padding: 6px 10px;
}
```

The first line above resets the search box `all: unset;` design. Many browsers add their own design and it can be hard to style. This can make it easier to style as we need.

Then we set the font and make sure that the search bar fills the space with height and width. Lastly, we have added a bit of padding.

The next CSS rule is a bit strange! It allows us to set the style of the placeholder text inside the search box. The default is grey text, to change this we need to use this rule:

```
::placeholder {
  color: #fff;
  opacity: 0.7; 
}
```

The last CSS rules change the look and feel of the button. You can see here that we have replaced the search button with a search icon.

To do this I have changed the HTML of the button to now include a `svg`. The `svg` is an image of the search icon, it now looks like this:

```
<form role="search" id="form">
  <input type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content">
  <button>
    <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
  </button>
</form>
```

We can then style these two html elements like this:

```
button {
  all: unset;
  cursor: pointer;
  width: 44px;
  height: 44px;
}

svg {
  color: #fff;
  fill: currentColor;
  width: 24px;
  height: 24px;
  padding: 10px;
}
```

We have used the `all: unset;` rule again to reset the button to its default. Then set a height and width of `44px` this is a good size for fingers on touch screens.

Then we set the height and width of the icon and set the color to white ("#fff”).

Now our search bar is almost ready! Except nothing happens when we press the search button.

The last step for us is to hook up the button to JavaScript.

## JavaScript

We are going to do a Google search when someone searches in our search bar.

To do this we need to write some code that will:

-   Add an event listener to the form so we know when someone presses the search button
-   Get the text value from the query box
-   Build a Google URL that searches a specific site
-   Opens a new tab with Google and the search query

Google allows you to search a specific site if you add `site:` to the query. For example, if you wanted to search PageDart for the term lazy loading you could add this in Google:

`site:pagedart.com lazy loading`

The great thing about this search query is that it only returns results for the site you specify. You filter Google results and no other site will appear in the results. We can use this trick to create a search results page from our search bar.

Here is the code that can do this:

```
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'pagedart.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
```

The first thing we do is attach some variables to the form and search input box. Then we set the Google URL and set the site variable:

```
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'pagedart.com';
```

If you want to search your site then change `const site = 'pagedart.com';` to your website `const site = 'example.com';`.

We then [create a function](https://pagedart.com/blog/how-to-call-a-function-in-javascript/) that will run each time someone presses the search button. The function will then open Google in a new tab in the browser:

```
function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}
```

The last line in the code:

```
f.addEventListener('submit', submitted);
```

Add a listener to the form. It will listen for the submit button press and run the function each time.

Now when you enter a search query and press the search icon a new tab will open up with your site and the search query.

## Complete Solution

Now we have covered all the parts of a search bar:

-   HTML of the form
-   CSS to add color and design
-   JavaScript to process the form input

You can see a working [codepen](https://codepen.io/pagedart/pen/VwvzEbx) example.

Here is the complete HTML:

```
<!DOCTYPE html>
<html lang='en' class=''>
  <head>
    <meta charset='UTF-8'>
    <title>Search Bar Demo</title>
    <style>
        body {
        background-color: #3745c2;
        margin: 200px 40%;
      }

      form {
        background-color: #4654e1;
        width: 300px;
        height: 44px;
        border-radius: 5px;
        display:flex;
        flex-direction:row;
        align-items:center;
      }

      input {
        all: unset;
        font: 16px system-ui;
        color: #fff;
        height: 100%;
        width: 100%;
        padding: 6px 10px;
      }

      ::placeholder {
        color: #fff;
        opacity: 0.7; 
      }

      svg {
        color: #fff;
        fill: currentColor;
        width: 24px;
        height: 24px;
        padding: 10px;
      }

      button {
        all: unset;
        cursor: pointer;
        width: 44px;
        height: 44px;
      }
    </style>
  </head>
  <body>
    <form role="search" id="form">
      <input type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content">
      <button>
        <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
      </button>
    </form>
    <script>
      const f = document.getElementById('form');
      const q = document.getElementById('query');
      const google = 'https://www.google.com/search?q=site%3A+';
      const site = 'pagedart.com';

      function submitted(event) {
        event.preventDefault();
        const url = google + site + '+' + q.value;
        const win = window.open(url, '_blank');
        win.focus();
      }

      f.addEventListener('submit', submitted);
    </script>
  </body>
</html>
```

## How to Add a Search Bar in HTML, Final Thoughts

You have learned in this tutorial how to add a search bar in HTML. We have covered:

-   How to create a small HTML form
-   How to design the form using CSS
-   How to write JavaScript to interact with the form

You have also learned how you can use JavaScript to connect the form to Google. Performing a search only on your site.

Using the special site search on Google you can get Google results only for your site.

