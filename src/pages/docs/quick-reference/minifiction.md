---
title: 'How To Minify Code For Better Web Performance '
weight: 1
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
In production, it is recommended to minify any JavaScript code that is included with your application. **Minification can help your website load several times faster,** especially as the size of your JavaScript source code grows.

Here's one way to set it up:

1.  [Install Node.js](https://nodejs.org/)

2.  Run npm init -y in your project folder (**don't skip this step!**)

3.  Run npm install terser

Now, to minify a file called like_button.js, run in the terminal:

This will produce a file called like_button.min.js with the minified code in the same directory. If you're typing this often, you can [create an npm script](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633) to give this command a name.







## How to Minify Your Minify your HTML, CSS and JavaScript Using an Online Tool&#xA;&#xA;

Many of these online tools have a similar process which involve the following steps:

Paste in your source code or upload the source code file.
Optimize the settings for a specific output (if options are available)
Click a button to minify or compress the code.
Copy the minified code output or download the minified code file.

For this example, I’m going to use the minify tools from minifycode.com.

First, locate the css file (commonly named style.css) in your site files and open the file using a page editor. Then copy the entire css code to your clipboard.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min4.png)

Go to [minifycode.com](http://minifycode.com/css-minifier/) and click the CSS minifier tab. Then paste the CSS code into the input box and click the Minify CSS button.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min5.png)

After the new minified code is generated, copy the code.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min6.png)

Then go back to the css file of your website and replace the code with the new minified version.

That’s it!

Repeat the same process to minify your site’s JavaScript and Html file(s) as well.

## How to Minify HTML, CSS and JavaScript in WordPress Using Plugins

The easiest way to minify your HTML, CSS and JavaScript in WordPress is to use a plugin. This allows you to optimize your WordPress site files for decreased page load times automatically with a few clicks of a button.

There are a lot of plugins out there that will do the job but I will briefly mention a few standouts.

### Autoptimize (FREE)

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min17.png)
Autoptimize is probably the most popular minify plugins out there. It’s popular because it ease easy to use and full of powerful performance features. It can aggregate (combine scripts), minify, and cache your code. As a bonus, you have additional options for optimizing Google Fonts, images and more.

To use Autoptimize, you can download, install and activate the plugin from the WordPress Dashboard under Plugin > Add New.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min7.png)

Once the plugin is activated, navigate to Settings > Autoptimize. Then under the main settings tab, check the code you wish to optimize (HTML, CSS, and/or JavaScript) and click Save Changes.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min8.png)

You can also click the Show Advanced Settings button at the top of the page to further customize how you want your code to be optimized.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min9.png)

That’s about it! Pretty simple and powerful.

### Fast Velocity Minify (FREE)

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min18.png)

[Fast Velocity Minify](https://wordpress.org/plugins/fast-velocity-minify/) is another popular, free and powerful WordPress plugin that does more than just minify. It minifies and combines your CSS and Javascript to reduce HTTP requests to your server, thus living up to its name to give you fast velocity page load times. There are addition optimization options available but the default settings work beautifully for most sites.

To use the plugin, first install and activate if from your WordPress Dashboard by navigating to Plugins > Add New. Then search for “fast velocity minify” and once it popups up in the search results, click to install and activate it.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min10.png)

Once the plugin is activated, your files will automatically become minified and optimized for best performance. That was easy!

Jump over to the plugin settings page (Settings > Fast Velocity Minify) to see all the options available. Under the Status tab, you can see a helpful list of your JavaScript and CSS files that have been processed.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min11.png)

Under the Settings tab, you can customize the way your files are being optimized. Since minification of HTML, CSS and JavaScript are already active, you can use these settings to adjust the default options or disable minification for certain code types. There is even options for optimizing Google Fonts and Font Awesome.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min12.png)

That’s it!

### W3 Total Cache (FREE)

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min14.png)
[W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) is a great caching plugin that includes the option to minify your HTML, JS, and CSS.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min13.png)

### WP Fastest Cache (FREE)

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min16.png)
[WP Fastest Cache](https://wordpress.org/plugins/wp-fastest-cache/) – These FREE WordPress caching plugin is extremely popular with high reviews. The plugin performs various performance optimizations including combining and minifying your HTML CSS and JavaScript for better performance.

Once the plugin has been installed, simply click the WP Fastest Cache tab in the WordPress Dashboard sidebar (the one with the amazing cheetah icon). Under the settings tab, you will find options to combine and minify HTML and CSS files. Although minifying JavaScript is only available in the pro version.

![](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min15.png)

## Final Thoughts

If you want faster page load times and better performance scores, you will want to minify you HTML, CSS and Javascript files. With all the online tools available, you can easily minify your code for any website. And for you WordPress users, there are some powerful plugins available to minify those files automatically with a few clicks. The plugins above are only a few of the great plugins out there that handle minification among other performance optimizations. In fact you may already have a performance type plugin that has minification already available. For example, many of the caching plugins include the minification option. I hope this post helps you decide which is the best option for you.
