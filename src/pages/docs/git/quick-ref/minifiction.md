---
title: 'Minification'
weight: 0
excerpt: How To Minify Code For Better Web Performance
seo:
    title: 'Minification'
    description: 'How To Minify Code For Better Web Performance'
    robots: []
    extra: []
template: docs
---


In production, it is recommended to minify any JavaScript code that is included with your application. **Minification can help your website load several times faster,** especially as the size of your JavaScript source code grows.

Here's one way to set it up:

1.  [Install Node.js](https://nodejs.org/)

2.  Run npm init -y in your project folder (**don't skip this step!**)

3.  Run npm install terser

Now, to minify a file called like_button.js, run in the terminal:

This will produce a file called like_button.min.js with the minified code in the same directory. If you're typing this often, you can [create an npm script](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633) to give this command a name.

## How to Minify Your Minify your HTML, CSS and JavaScript Using an Online Tool&#xA;&#xA;

Many of these online tools have a similar process which involve the following steps:

Paste in your source code or upload the source code file.
Optimize the settings for a specific output (if options are available)
Click a button to minify or compress the code.
Copy the minified code output or download the minified code file.

For this example, I'm going to use the minify tools from minifycode.com.

First, locate the css file (commonly named style.css) in your site files and open the file using a page editor. Then copy the entire css code to your clipboard.

![alt-text](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min4.png)

Go to [minifycode.com](http://minifycode.com/css-minifier/) and click the CSS minifier tab. Then paste the CSS code into the input box and click the Minify CSS button.

![alt-text](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min5.png)

After the new minified code is generated, copy the code.

![alt-text](https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/min6.png)

Then go back to the css file of your website and replace the code with the new minified version.

That's it!

Repeat the same process to minify your site's JavaScript and Html file(s) as well.

### Overview&#xA;&#xA;

Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser - e.g. code comments and formatting, removing unused code, using shorter variable and function names, and so on.

See [preprocessing & context-specific optimizations](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#minification-preprocessing--context-specific-optimizations) to learn more.

### Recommendations

You should minify your HTML, CSS, and JavaScript resources:

-   To minify HTML, try [HTMLMinifier](https://github.com/kangax/html-minifier)
-
-   To minify CSS, try [CSSNano](https://github.com/ben-eb/cssnano) and [csso](https://github.com/css/csso).

-   To minify JavaScript, try [UglifyJS](https://github.com/mishoo/UglifyJS2). The [Closure Compiler](https://developers.google.com/closure/compiler) is also [very effective](https://github.com/samccone/The-cost-of-transpiling-es2015-in-2016#summary-of-findings). You can create a build process that uses these tools to minify and rename the development files and save them to a production directory.

Alternatively, the [PageSpeed Module](https://developers.google.com/speed/pagespeed/module), integrates with an Apache or Nginx web server to automatically optimize your site, including resource minification.
