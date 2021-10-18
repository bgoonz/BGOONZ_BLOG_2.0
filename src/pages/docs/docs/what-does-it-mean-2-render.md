---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

# [![](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browswers-Work-2.png)](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browswers-Work-2.png)There[![](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browswers-Work-3.png)](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browswers-Work-3.png)[![](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browsers-Work-4.png)](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browsers-Work-4.png)[![](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browsers-Work-5.png)](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browsers-Work-5.png)[![](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browswers-Work-6.png)](https://www.amsivedigital.com/wp-content/uploads/2014/07/How-Web-Browswers-Work-6.png)&#xA;&#xA;

1.  **Layout Engine –**

    this takes input from the browser (URL bar, search box, mouse clicks and key presses) and passes them to the rendering engine

2.  **Rendering Engine**

    – this takes HTML code and interprets it into what you see visually. For instance, a <b> tag would be interpreted by the rendering engine as a set of instructions to make the text inside of the element bold.

3.  \*\*User Interface \*\*

    – This is the visual presentation of controls in the browser, for instance the back and forward buttons, bookmarks, and all chrome that appears around the main browser window where web pages display.

4.  **JavaScript Engine**

    – This engine takes JavaScript code, parses it, executes it, and returns the results.

5.  **Network Layer**

    – This is a function of the browser that happens behind the scenes and handles network functions such as encryption, http and ftp requests, and all network settings such as timeouts and the handling of HTTP status codes

6.  **Storage**

    – Browser’s must store some data which can include cached files, cookies, and recently browsers have updated to be able to store data and objects created with JavaScript

7.  **Operating System Interface**

    – The browser must interact with the operating system to draw out several elements of the page like drop down boxes and the chrome of a window (close, maximize, and minimize buttons)

## Let’s Focus on the Rendering Engine

The rendering engine has a very important job as it displays what you see on your screen. It communicates with the networking layer of the browser to grab HTML code and other items passed from a remote server. Then it follows these steps:

**1. Parsing HTML and creating the DOM Tree** – HTML is a hierarchal structure that begins with a \<html> tag, usually contains a \<head> and \<body> tag, and elements can be nested within elements. These HTML elements are parsed and turned into a “DOM tree” by the rendering engine. It is a tree like structure made out of the HTML, where each tag is a branch starting at the root element.

**2. Render Tree Construction** – CSS attributes (style attributes) are also parsed and combined with the DOM tree to create a “render tree”. This is a tree of visual elements such as height/width and color ordered in the hierarchy in which they are to be displayed in the browser.

**3. Layout Process** – Once the render tree is constructed, the rendering engine recursively goes through the HTML elements in the tree and figure out where they should be placed on the screen. This starts at the top left in position 0,0 and elements and attributes are mapped to coordinates on the screen.

**4. Painting** – Each node (branch) of the render tree is drawn out on the screen by communicating with the Operating System Interface which contains designs and styles for how UI elements should look.

A search engine spider cannot “see” a web page the way we do and will instead use a set of rules programmed into it to construct the DOM tree and understand the elements that are a part of it. For Google to understand that a word on the page is in the body context of the page, it must be able to process the entire page.

## Throwing JavaScript into the Mix

JavaScript is a programming language which allows things to happen inside of the browser and makes web pages interactive. Things like popup windows, actions that occur on a button press and elements that move across the page are all things done by JavaScript. This means that JavaScript code executes after the web page has been rendered and painted onto the screen, and when it executes it triggers a re-render to account for changes made.
An example of this is the Like button on Facebook. When you look at it on page load, it says “Like” and shows a thumb up. When you click it, it dynamically changes to say “Unlike” and swaps the thumbs up icon for a thumb down.

Content on the page can be manipulated by JavaScript to display things in your browser that do not appear when you view a web page’s source code. You can have words that appear in the body of your page to a user that do not appear in the source code of the site and search engine spiders who do not render the page will be unable to detect that content.

_This is how Facebook would look to a search engine spider that did not render content_

## What Does This Mean for SEO?

The fact that Google looks at the fully rendered version of a webpage means that you can no longer look solely at the source code of a site to understand how it is perceived by a search engine spider. You should assume that search engine spiders see the same page you see in your browser as it appears on page load. Here are some examples of when this matters:

-   If you use an image carousel, images are hidden and you have to wait or click through to see all of the images. You should assume that Google perceives these types of sliders the same way a user would and puts more weight on the images and text that appear to the user the second the page is loaded.

-   If you have content that is dynamically served through JavaScript, for instance widgets or feeds that are overlaid on the page or A/B tests that are overlaid with JavaScript, Google will see that content

-   If you use 3rd party scripts or style sheets, Google will see the content of those resources if they can. You can verify that everything on your page can be seen by Google by using the new fetch as Googlebot rendering tool in Webmaster Tools.

How to Use the New Rendering Tool in Webmaster Tools

In Webmaster Tools, go to Crawl > Fetch as Google then enter the URL you want to test and click FETCH AND RENDER

Google will then show you a screenshot of the page as they see it. You can also view files that Google was unable to retrieve and include in the render. This helps with diagnosing issues with indexability and can point out issues with content that does not appear in the site’s source code.
