# Embed Medium as a Blog on Your Site…

> Medium is a wonderful platform to use to blog. Medium helps many people reach your posts. Many of you maintain an account on Medium while…

## Front end

[![Sabesan Sathananthan](https://miro.medium.com/fit/c/96/96/1*dwqu7TGEPXw30P9Z9YNgfA.jpeg)](https://sabesan96.medium.com/?source=post_page-----54a1b49cbe16--------------------------------)

![](https://miro.medium.com/max/1400/1*lKlGk0yIKV-crkp8S7jdWA.jpeg)

Medium is a wonderful platform to use to blog. Medium helps many people reach your posts. Many of you maintain an account on Medium while handling a separate blog page on your site. When you post a new story in Medium, you need to **_copy and paste_** that story on your blog page. This method is very inconvenient to you. If you embed medium to your site you won’t have to worry about updating your blog page on your website. I faced the same problem when I designed my own website last week. Here, I would like to describe a few methods to embed Medium to your blog. This is my 21st article in Medium.

First, you need to create a **_separate_** Twitter account and connect that account with your medium account. Once you have published your post in medium, go to the published version and scroll down to the bottom of the post. Here, you should be able to see a twitter icon. Once you click that twitter icon, a new window will open with a pre-typed tweet. That tweet has the title of your post and a link to that post. Tweet that pre-typed tweet. When you tweet, ensure that you tweet from your new account. I assume that all of you know the above steps.

![](https://miro.medium.com/max/60/1*ohdtWCRo08GzokCfXSc77Q.jpeg?q=20)

![](https://miro.medium.com/max/1400/1*ohdtWCRo08GzokCfXSc77Q.jpeg)

Now we are going to embed the Twitter feed on our blog page. To achieve this, visit [publish.twitter.com](https://publish.twitter.com/) and Enter the URL of your new twitter profile. Then there are two options; “Embedded Timeline” and “Twitter Buttons”. Click the Embedded Timeline button and copy the embed code. Paste the embed code in your blog.

PixelPoint is a company that consists of a team of freelance software developers working together to create apps. They create some applications for public use. To embed Medium widget on your blog page first visit [medium-widget.pixelpoint.io](https://medium-widget.pixelpoint.io/). When you click the link, a new window opens, and you’re dispensed with a single box. That box asks you for the URL of the profile. Enter your medium profile link in that box. Your profile link like _https://medium.com/@yourusername_. Copy the previous link and replace “yourusername” with your actual user name. Now hit the generate button. Then configure it the way you want the Medium widget to be viewed at a glance. It will request you to select a series of settings.

-   The number of posts that you want to be displayed in your widget feed can be chosen from 1 to 10.
-   The number of columns that you want in your feed can be selected. If you want a vertical embedded feed similar to the Facebook or Twitter timeline to choose one. Choose two or more If you want something a little more grid-like.
-   The size of the post’s preview image to be on display; You can select a large image, a small image, or no image at all.
-   The aspect ratio of the cover photo; You can select the original ratio for the image, landscape orientation, or a square.
-   The elements of Medium to display. You can toggle on or off the description, the author credit, the number of claps, the number of fans you have, and the publication date.

![](https://miro.medium.com/max/60/0*_bQIkW4YrPnbE1wU.jpg?q=20)

![](https://miro.medium.com/max/1204/0*_bQIkW4YrPnbE1wU.jpg)

Once all the settings have been selected, copy the code and paste it into your blog page. The widget is a script and does not use iframes; instead, it is fully configurable using CSS. To edit CSS classes, check their [documentation](https://pixelpoint.io/projects/medium-widget). The widget automatically takes 100% width of the container it’s in on your website. Configure your container size on your blog page. New data is retrieved every hour. When you use this method keep the above problems in mind while you post a story on medium.

![](https://miro.medium.com/max/60/1*3qgaQWhe-mHHu6fImczq5A.png?q=20)

![](https://miro.medium.com/max/1400/1*3qgaQWhe-mHHu6fImczq5A.png)

This method is quite easy. Just copy and paste a few lines of code and edit them. Enter the below code on the page where you want to see the post slider or grid.

<div id="retainable-rss-embed"   
data-rss="https://medium.com/feed/**_@username_**"  
data-maxcols="3"   
data-layout="**_grid_**"   
data-poststyle="inline"   
data-readmore="Read the rest"   
data-buttonclass="btn btn-primary"   
data-offset="-100"></div>

In the above code replace **_username_** with your actual user name. You can choose between a **_slider_** or a **_grid_** and have people read the full post right on your website. Copy the below code and paste it above the _</body>_ tag.

<script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>

For further details go through the [documentation page](https://www.retainable.io/embed-your-medium-blog), and you can see it in action on this [demo page](https://www.retainable.io/vue-news).

![](https://miro.medium.com/max/60/1*7VBfcaVX4wRuATtefplQtg.png?q=20)

![](https://miro.medium.com/max/1400/1*7VBfcaVX4wRuATtefplQtg.png)

I am fortunate enough to have coding skills 🙂, so I wrote a custom code. I would like to explain it. First, you need to get your RSS feed. To get your feed (for further details click [here!](https://help.medium.com/hc/en-us/articles/214874118-RSS-feeds)) copy the link _https://medium.com/feed/@_**_username_** and replace the username with your actual user name. Then you must use [rss2json.com](https://rss2json.com/) to convert your RSS feed to JSON. I assume that you include JQuery in your blog page if not copy the below code and paste to the HTML page right before the closing _</body>_ tag.

<script src="[https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js)"></script>

If you didn’t include the Bootstrap 4 CSS library, copy the below link and paste inside the _<head> </head>_ tags in your blog page.

<link rel="stylesheet" href="[https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css](https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css)" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

For the above two examples, I have used Google CDN (**_Content Delivery Network_**). Anyhow, you can use other ways which you wish to like to include the JQuery and the Bootstrap 4 CSS library.

![](https://miro.medium.com/max/60/1*FSmq315Pn8YHuDMOFFePHQ.png?q=20)

![](https://miro.medium.com/max/1400/1*FSmq315Pn8YHuDMOFFePHQ.png)

I used the _$.get()_ method which is an AJAX (**_Asynchronous JavaScript And XML_**). Let’s understand the code. The below code is my callback function. Replace the current RSS feed (`https://medium.com/feed/@username`)with your RSS feed which includes your actual user name. Replace the current URL (`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40username`)inside the _$.get()_ method with your JSON converted URL in [rss2json.com](https://rss2json.com/).

var data = {rss: "https://medium.com/feed/@username"}  
$.get(https://api.rss2json.com/v1/api.json?rss\_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40username, data, funciton(response){  
//Checking Response Status  
if (response.status == 'ok') {  
 //Define a variable  
 var output = '';  
 //Response  
 }  
});

![](https://miro.medium.com/max/60/1*u5CkVArsZE2DY-7E-FS9ow.png?q=20)

![](https://miro.medium.com/max/1400/1*u5CkVArsZE2DY-7E-FS9ow.png)

Then I iterate to get multiple posts. To Iterate I used JQuery _$.each()_ method.

var data = {rss: "https://medium.com/feed/@username"}  
$.get(https://api.rss2json.com/v1/api.json?rss\_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40username, data, funciton(response){  
//Checking Response Status  
if (response.status == 'ok') {  
 //Define a variable  
 var output = '';  
 //Response  
 $.each(response.items, function (k, item) {  
 //Code to be Iterated  
 return k < 10;  
 });  
 }  
});

Don’t be confused with the return value k<10. Here, I indicate the iterator to stop the loop at index (k) becomes 9 (index starts from 0). Unfortunately, Medium provides RSS feed only for the user’s last 10 stories. That’s why I choose the value 10. After I got medium posts I added dynamic pagination to make it more attractive ([For more Details](https://www.w3schools.com/bootstrap/bootstrap_pagination.asp)). Copy the below code and paste it in your text editor and save as whatever the name .js here I use as script.js.

After you save the above code keep the script.js file and your blog page HTML file in the same folder. Then add the below code to the HTML page right before the closing _</body>_ tag.

<script src="[s](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js)cript.js"></script>

I saved it as script.js that’s why I used it to as a src. If you used a different name then replace the name with “script”. Now I am going to implement the front end. I used bootstrap 4 to fast deploy rather than create a custom CSS.

I’ve also defined the div with **_JsonContent_** because I am going to feed my JSON data into that div.

![](https://miro.medium.com/max/60/1*-PGm7NH7NOSyo5SvOr7yLw.png?q=20)

![](https://miro.medium.com/max/1400/1*-PGm7NH7NOSyo5SvOr7yLw.png)

Here I showcased four methods to embed Medium to your blog. If you use these methods you won’t spend money to embed medium. But there are some methods to embed medium if you follow those methods you will have to spend money. such methods are [embed.ly](https://embed.ly/code), [SociableKIT](https://www.sociablekit.com/demos/medium-publication-feed). However, when you follow these methods you will be unable to show your related medium posts section in your blog. Unfortunately, you can’t see it in action on the demo page because I am implementing night mode for my website and keep following me for more updates.

![](https://miro.medium.com/max/1400/1*bn2TIHgZc61m_-DjOkOtKA.jpeg)

[Source](https://medium.datadriveninvestor.com/embed-medium-as-a-blog-on-your-site-54a1b49cbe16)
