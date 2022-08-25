---
title: " List of things you can embed in your website"
template: docs
excerpt: How to Embed a Tweet
---
<!--StartFragment-->

Bryan Guner

![Cover Image for List of things you can embed in your website](https://cdn.sanity.io/images/ke5fae8i/production/7283067481ec408b1a5e28083a07596aacbff496-1863x732.gif?rect=91,0,1681,732&w=1240&h=540)



## How to Embed a Tweet

1. Find the tweet you'd like to embed.
2. Click the downward arrow on the top-right of your tweet.
3. Choose "Embed Tweet."
4. Copy the code that appears and paste it into your website's HTML editor.
5. Add 'tw-align-center' after the words "twitter-tweet" in the embed code.

### 1. Find the tweet you'd like to embed.

To embed a tweet onto your blog or website, you'll need to first find the tweet you want to display in its natural habitat -- Twitter. Locate the tweet in your Twitter newsfeed or on the Twitter user's profile. For this example, we'll embed a tweet from [HubSpot's Twitter feed](https://twitter.com/HubSpot), as shown in the screenshots below.

### 2. Click the downward arrow on the top-right of the tweet.

Once you've found the tweet you want to embed, click the downward-facing arrow icon, located on the top-right of the tweet, as shown below.

### 3. Choose "Embed Tweet."

Clicking this arrow icon will reveal a dropdown menu of options, including one called "Embed Tweet." Click this option.

### 4. Copy the code that appears and paste it into your website's HTML editor.

Clicking "Embed Tweet" from the dropdown menu shown above will open the code box shown below. Under "Embed this Tweet," you'll see a string of text highlighted in blue. Use Command+C on your keyboard (or Control+C, if you're using a PC) to copy this code to your clipboard.

With this embed code copied to your clipboard, return to the website where you want to embed this tweet. Open the source code of this website (some content management systems have a **"</>"** icon where you can access this source code). Here, you'll paste the tweet's embed code into your HTML precisely where you want the tweet to appear.

### 5. Add 'tw-align-center' after the words "twitter-tweet" in the embed code.

Once you pasted this code into your HTML, however, you'll want to center-align this tweet so it doesn't automatically appear pushed up against the left or right side of your webpage. To correct this, add the text, 'tw-align-center' (without quotation marks) directly after "twitter-tweet" in the embed code. [You can learn more about this method here](https://blog.hubspot.com/blog/tabid/6307/bid/34273/How-to-Center-Align-Your-Embedded-Tweets-Quick-Tip.aspx).

Here's what the final code should look like:

<blockquote class="twitter-tweet" **tw-align-center** data-lang="en"><p lang="en" dir="ltr">Let us know! 👂<br>What type of content would you like to see from us this year?</p>&mdash; HubSpot (@HubSpot) <a href="https://twitter.com/HubSpot/status/1085634067679322114?ref_src=twsrc%5Etfw">January 16, 2019</a></blockquote>\
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

That's it! This is what your embedded tweet will look like when you're done:

## Embed Facebook Post or Video

### 1. Find the Facebook post you'd like to embed.

Similar to the steps to embed a tweet (listed above), embedding a Facebook post onto your blog or website starts on Facebook. Navigate to the post you want to embed from Facebook, on the Facebook user's profile page or your newsfeed. For this example, we'll embed a Facebook post from the [HubSpot Academy](https://www.facebook.com/thehubspotacademy/), as shown in the screenshots below.

### 2. Click the ellipsis ("...") icon on the top-right of the post.

On the top-right of the Facebook post you want to embed, you'll see an ellipsis icon consisting of three small dots. Click this icon, as shown below.

### 3. Click "Embed."

Clicking the ellipsis icon shown below will reveal a dropdown menu of options, including one labeled "Embed." If the post you want to embed is a video, a similar option labeled "</> Embed" will appear further down on this menu. Click either option.

If you don't see an option to embed the post, then the post is not public and is not embeddable.

### 4. Copy the code that appears and paste it into your website's HTML editor.

Clicking the "Embed" option shown above will open the box shown below. At the top of this box, just above the "Hide Preview" and "Advanced Settings" buttons, you'll see a line of coded text. Highlight and copy this code onto your computer's clipboard.

With this embed code copied to your clipboard, return to the website where you want to embed this Facebook post. Open the source code of this website (some content management systems have a **"</>"** icon where you can access this source code). Here, you'll paste the Facebook post's embed code into your HTML precisely where you want the post to appear.

### 5. Add <center> and </center> tags around the entire HTML snippet to center-align your post.

Once you pasted this code into your HTML, however, you'll want to center-align the post so it doesn't automatically appear pushed up against the left or right side of your webpage. To correct this, wrap the code with '<center>' and '</center>' tags so the Facebook post displays in the center of your article or webpage.

Here's what the final code should look like:

**<center>**<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthehubspotacademy%2Fposts%2F741606746226328%3A0&width=500" width="500" height="448" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>**</center>**

That's it! Here's what it'll look like when you're done:

## Embed Facebook Feed

Believe it or not, embedding a Facebook profile's entire feed onto your website is as easy as embedding a single post or video. And there's more than one way to do it.

### Using a WordPress Plugin

The first way is to install a plugin or widget into your content management system (CMS). WordPress users, for example, have several Facebook feed plugins at their disposal. Here's how to use one:

1. The Custom Facebook Feed, by Smash Balloon, is one such WordPress plugin you can download through your WordPress account. [You can download this plugin here](https://wordpress.org/plugins/custom-facebook-feed/).
2. With this plugin downloaded, log into your WordPress account and activate this plugin from within the "Plugins" menu.
3. Use the "Facebook Feed" settings of your CMS to select and configure the specific Facebook feed you want to display on your website.
4. Enter the text, '\[custom-facebook-feed]' in the HTML editor of your website to generate your chosen Facebook feed.

### Using Facebook's Page Plugin

Facebook has its very own Page Plugin, allowing you to produce embed code for any profile's individual Facebook feed and enter it into the HTML of your website. Here's how to use it:

#### 1. Open Facebook's Page Plugin tool.

To embed a Facebook feed into your blog or website, open Facebook's native Page Plugin tool [here](https://developers.facebook.com/docs/plugins/page-plugin/). Scroll down on this page until you see the section shown below.

#### 2. Enter the URL of the Facebook Page you want to embed.

With this tool opened, create a new tab in your web browser and navigate to the Facebook profile whose feed you want to embed. Press Command+C on your keyboard (or Control+C, if you're using a PC) to copy the URL of this page to your computer's clipboard.

Return to the browser tab that has Facebook's Page Plugin open. Paste the URL from your clipboard into the top-left field, as shown in the screenshot below. For this example, we'll embed the Facebook feed of HubSpot's Facebook Business Page.

#### 3. Add the tabs you want displayed alongside your embedded feed.

In addition to showing a profile's entire timeline, Facebook's Page Plugin also lets you display tabs to that profile's Events and/or Messenger account. By default, the Page Plugin tool will have "timeline" entered by itself.

To add either Events or Messenger tabs to your embedded Facebook feed, click over to the "Tabs" field on the top-right of the Page Plugin tool, as shown below. Add the words "events" and/or "messages" next to the word "timeline," all separated by commas.

#### 4. Customize the dimensions of your Facebook feed.

If your website has specific dimensions that restrict the size of the media you embed, and you know what these dimensions are, enter them into the bottom two fields of the Facebook Page Plugin tool. You can enter a specific width in the left field and a specific height in the right.

By default, your Facebook feed will display at roughly 340x500, although you'll see recommended dimensions in the tool's preview text.

#### 5. Click "Get Code."

With all four of these fields filled in, simply click the blue "Get Code" button at the bottom of the tool, as shown in the screenshot above. This will open the code box shown below.

#### 6. Click the 'IFrame' tab.

Be careful which code you select, though ... unless you're coding your website from scratch, the first tab (labeled "JavaScript SDK") does *not* have the code you want. Toggle over to the tab labeled "IFrame," as shown below. This text is ready-made for embedding into your blog or website's HTML editor.

#### 7. Copy and paste this embed code into your website's HTML editor.

Copy the code shown above to your clipboard. Then, navigate to the website where you want to embed this Facebook feed. Open the source code of your website (some content management systems have a **"</>"** icon where you can access this source code). Here, you'll paste the feed's embed code into your HTML precisely where you want it to appear.

#### 8. Add <center> and </center> tags around the entire IFrame snippet to center-align the feed.

Once you pasted this code into your HTML, however, you'll want to center-align the post so it doesn't automatically appear pushed up against the left or right side of your webpage. To correct this, wrap the code with '<center>' and '</center>' tags so the Facebook feed displays in the center of your article or webpage.

Here's what the final code should look like:

**<center>**<iframe style="border: none; overflow: hidden;" allow="encrypted-media" xml="lang" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhubspot&amp;tabs=timeline%2C%20events%2C%20messages&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="340" height="500" frameborder="0" scrolling="no"></iframe>**</center>**

That's it! Here's what it'll look like when you're done:

## Embed Instagram Feed and Posts

Instagram is a favorite among marketers, but embedding an entire Instagram feed can be difficult. Here's how to embed an Instagram feed as well as individual posts to your website.

### The Instagram Feed WordPress Plugin

From the makers of the Custom Facebook Feed comes the Instagram Feed. Developed by Smash Balloon, this WordPress plugin makes it easy for WordPress-based websites to embed entire Instagram feeds from specific Instagram accounts. Here's how to use it:

1. Download the Instagram Feed plugin for WordPress [here](https://en-gb.wordpress.org/plugins/instagram-feed/).
2. With this plugin downloaded, log into your WordPress account and activate this plugin from within the "Plugins" menu.
3. Use the "Instagram Feed" settings of your CMS to select your Instagram Access Token and user ID.
4. Enter the text, '\[instagram-feed]' in the HTML editor of your website to generate your chosen Instagram feed.

According to this plugin's instructions on WordPress, you can display multiple Instagram feeds at the same time by entering text in the format of: '\[instagram-feed num=6 cols=3]'. In that example, you would effectively embed *six* images each for *three* separate Instagram feeds.

### Instagram's Embedding Feature

To embed individual Instagram pictures, you need not look further than the native features of Instagram. Here's how to do it:

***Important:*** *In order to embed specific Instagram posts onto a blog or website, the Instagram account it belongs to cannot be set to private. To set an account to public, navigate to this profile and click "Edit Profile" > Privacy and Security. From this page, uncheck the "Private Account" option and you should be all set.*

#### 1. Click on the Instagram image you want to embed.

Navigate to the Instagram post you want to embed onto your website and click on it to enlarge the image. For this example, we'll embed an image from HubSpot's culture account, [hubspotlife](https://www.instagram.com/hubspotlife/), as shown in the screenshots below.

#### 2. Click the ellipsis ("...") icon on the bottom-right corner of the post.

With the post in its full view, look to the bottom-right of the comments section. Click the ellipsis icon, consisting of three small dots, as shown below.

#### 3. Select "Embed."

Clicking the ellipsis icon shown above will open the box of options shown below. In this menu, select "Embed," the third button from the top.

#### 4. Copy and paste the embed code into your website's HTML editor.

Much like the instructions for Twitter and Facebook (listed above), this "Embed" button will produce another box carrying a sting of coded text. Once this box opens on your screen, highlight the code at the top, as shown below. Then, click the blue "Copy Embed Code" button at the bottom to copy this text to your computer's clipboard.

#### 5. Add <center> and </center> tags around the entire HTML snippet to center-align the post.

Once you pasted this code into your HTML, however, you'll want to center-align the Instagram post so it doesn't automatically appear pushed up against the left or right side of your webpage. To correct this, wrap the code with '<center>' and '</center>' tags so the image displays in the center of your article or webpage.

That's it! Here's what your embedded Instagram post will look like:

## Embed Pinterest Pins

### 1. Open Pinterest's widget builder.

To embed pinned content from Pinterest onto your blog or website, open Pinterest's widget builder, [available here](https://business.pinterest.com/en/pinterest-widget-builder).

### 2. Select "Pin Widget" in the left-hand column.

Scroll down until you see the Pin Widget option, as shown in the screenshot below.

### 3. Paste in the URL of the pin you'd like to embed.

Start by filling in the "Pin URL" field at the top of the tool with the URL of the pin you want to embed onto your website, as shown below.

### 4. Copy and paste the code from this section into your website's HTML editor.

While in Pinterest's Pin Widget, scroll down to the section just beneath the preview image of your pin, where you'll find two lines of coded text -- as shown below.

Open your website's HTML editor, and copy and paste the first line exactly where you'd like your Pinterest pin to appear on the page. Then, copy the second line of text and paste it into your website's HTML editor at the very bottom of the page.

Be careful not to paste this entire snippet more than once on a single webpage. If you want the pin to appear multiple times, you just need to copy the *first* line of code and paste it wherever you'd like it to appear on the page. And don't forget to repeat the following steps in each instance of the pin you decide to embed.

### 5. Copy the snippet of code provided below.

<!--pinterest-->

### 6. Paste that snippet of code between the opening <a> tag and the closing </a> tag.

The code should look like this:

<a data-pin-do="embedPin" href="http://www.pinterest.com/pin/99360735500167749/">**<!--pinterest-->**</a>\
...

At bottom of page:\
<script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script>

### 7. Add <center> and </center> tags around the entire HTML snippet to center-align the pin.

Here's what the final code should look like:

**<center>**<a data-pin-do="embedPin" href="http://www.pinterest.com/pin/99360735500167749/"><!--pinterest--></a>\
<!-- Please call pinit.js only once per page -->\
<script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script>**</center>**

That's it! Here's what it'll look like when you're done:

SaveNext stop: Pinterest!by kentbrewLove my Pinterest t-shirt!

## Embed Pinterest Boards

To add Pinterest Boards, the steps are generally the same as they are to embed individual pins -- explained above. Here's how it's done:

1. Open Pinterest's widget builder.
2. Select "Board Widget" in the lefthand column, just beneath the "Pin Widget" builder.
3. When the Board Widget open, follow the same steps as you would for adding pins, listed above.

Copy and paste the bottom two lines of code into your website's HTML editor, and that's it! Here's what an embedded board looks like:

HubSpotMarketing InfographicsFollow On

## Embed Google+ Post

#### **1. Find the Google+ post you'd like to embed. Hover your mouse over the top right corner and click the grey arrow that appears to pull down more options.**

#### **2. Choose "Embed Post."**

#### **3.** **Copy the entirety of the code that appears, and paste it in the HTML view of your website.**

#### **4.** **Center the embedded post by adding <center> and </center> around the whole HTML snippet.**

Here's what the final code should look like:

**<center>**<!-- Place this tag in your head or just before your close body tag. -->\
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>\
\
<!-- Place this tag where you want the widget to render. -->\
<div class="g-post" data-href="https://plus.google.com/110490539670062886957/posts/be2TCKDBMsG"></div>**</center>**

That's it! Here's what it'll look like when you're done:

## How to Embed Google Calendar

To embed a particular Google Calendar onto your blog or website, you'll need to use the web version of Google Calendar, rather than the mobile app.

Got it open? Let's embed it.

### 1. Click the gear icon to open your settings.

At the top of your Google Calendar, click the gear icon and select "Settings," as shown below.

### 2. Select the calendar you want to embed and scroll down to "Integrate calendar."

Once you're in your calendar settings, look to the lefthand sidebar for the specific calendar you want to embed onto your website. For this example, we'll embed HubSpot's National Holidays calendar.

Once you have your calendar selected, look to the right side of your settings and scroll down until you see the "Integrate calendar" section. (You can also simply click the option of the same name on the lefthand side under your chosen calendar.)

### 3. Click "Customize" and configure the size and color of your calendar.

In the "Integrate calendar" section of your settings, find and click the "Customize" button, just above the "Embed code" line of text. This will open a larger window of options where you can change the size and color scheme of your calendar before embedding it.

If you're happy with how the calendar currently looks and don't need to make any aesthetic changes, you can simply copy this embed code to your clipboard.

### 4. Copy your embed code at the top and paste it into your website's HTML editor.

Copy your embed code, from either inside the Customize window or from the Settings page, and paste it into your website's HTML editor. If you'd like, you can wrap this embed code in <center> and </center> tags to center-align your calendar within the margins of your website.

## How to Embed a YouTube Video

1. Find the YouTube video you'd like to embed.
2. Under the video, choose "Share."
3. In the menu that appears, choose "Embed."
4. Copy the code that appears and paste into your website's HTML editor.

### 1. Find the YouTube video you'd like to embed.

Embedding a YouTube video onto your blog or website is incredibly easy. To start, open YouTube and navigate to the video you want to embed. For this example, we'll embed a video about inbound marketing from HubSpot's INBOUND YouTube channel -- as shown in the screenshots below.

### 2. Under the video, choose "Share."

Beneath the video itself, look for the "Share" button, as shown below.

### 3. In the menu that appears, choose "Embed."

Clicking the "Share" button below your chosen YouTube video will open a small menu of options where you can share the video to various social networks. To the far left of these options, however, you'll also see a circular "Embed" button. Click this button.

### 3. Copy the code that appears and paste it into your website's HTML editor.

The next window to appear will produce a large of box of coded text, as well as a few options to customize your video before you embed it. Under the embed code, for instance, you can set whether you want your video to start at a particular timestamp.

Once you have your settings exactly the way you want them, highlight the coded text at the top of the window. Then, click "Copy" on the bottom-right.

### 4. Add <center> and </center> tags around the entire HTML snippet to center-align your video.

Here's what the final code should look like:

**<center>**<iframe width="560" height="315" src="https://www.youtube.com/embed/mZxa3lrLhXM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>**</center>**

That's it! Here's what it'll look like when you're done:



## Embed SlideShare Presentations and Infographics

### 1. Find the SlideShare presentation or infographic you'd like to embed on SlideShare.net.

### 2. Click "Embed" in the navigation bar at the top.

### 2. Click "Customize."

If you want to customize your embedded SlideShare presentation or infographic, click "Customize" and the following options will appear, shown below. Choose the options you'd like, then copy the code in the "Embed" section and paste it in the HTML view of your website.

### 3. Center the embedded Slideshare by adding <center> and </center> around the whole HTML snippet.

Here's what the final code should look like:

**<center>**<iframe src="//www.slideshare.net/slideshow/embed_code/31128788" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen> </iframe> <div> <strong> <a href="https://www.slideshare.net/HubSpot/a-sales-and-marketing-love-story" title="A Sales and Marketing Love Story" target="_blank">A Sales and Marketing Love Story</a> </strong> from <strong><a href="http://www.slideshare.net/HubSpot" target="_blank">HubSpot</a></strong></div>**</center>**

That's it! Here's what it'll look like when you're done:

**[A Sales and Marketing Love Story](https://www.slideshare.net/HubSpot/a-sales-and-marketing-love-story)** from **[HubSpot](http://www.slideshare.net/HubSpot)**

Some of these embed codes may need a little tweaking to look perfect on your blog or website, but using these steps, you should be off to great start. Happy embedding!

<!--EndFragment-->