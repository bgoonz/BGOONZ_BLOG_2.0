<div class="container container-large">[Skip to main content](https://gomakethings.com/how-to-turn-any-github-repo-into-a-cdn/#main) [Accessibility Feedback](mailto:chris@gomakethings.com?subject=Go%20Make%20Things:%20Accessibility%20Feedback)</div>

<header class="container container-large margin-bottom-large">

<nav class="nav-wrap">[Go Make Things](https://gomakethings.com/)

<div class="nav-menu" id="nav-menu">

*   [About](https://gomakethings.com/about)
*   [Daily Tips](https://gomakethings.com/articles)
*   [Learn JS](https://gomakethings.com/resources)

</div>

</nav>

</header>

<main id="main" tabindex="-1">

<div class="container">

<article>

<header>

<aside class="text-muted"><time datetime="2018-05-23 10:30:00 -0400 EDT" pubdate="">May 23, 2018</time></aside>

# How to turn any GitHub repo into a CDN

</header>

Last week I discovered [jsDeliver](https://www.jsdelivr.com/), a service that let's you turn any GitHub repository into a CDN.

(_Hat tip to [Sarah Dayan, aka Frontstuff](https://frontstuff.io/), for this one._)

Here's how it works.

1.  The base URL is `https://cdn.jsdelivr.net/gh/{username}/{repo}/`, where you replace `{username}` with the GitHub username and `{repo}` with the repository name for the project.
2.  Append that URL with the path to the file you want to access in the project. For example, for my [Atomic XHR plugin](https://github.com/cferdinandi/atomic), the JavaScript file is located in the `/dist` directory. You'd use this. `html <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic/dist/atomic.js"></script>`

You can also take advantage of semantic versioning by adding `@{version-number}` to the repository name. You can target major, minor, and patch releases as desired.

<div class="highlight">

    <!-- Always get the latest version -->
    <!-- Not recommended for production sites! -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic/dist/atomic.js"></script>

    <!-- Get minor updates and patch fixes within a major version -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4/dist/atomic.js"></script>

    <!-- Get patch fixes within a minor version -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4.0/dist/atomic.js"></script>

    <!-- Get a specific version -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4.0.0/dist/atomic.js"></script>

</div>

I've already added instructions on this to [Atomic](https://github.com/cferdinandi/atomic), [Validate](https://github.com/cferdinandi/validate), and [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll), and will be updating the docs for [my other plugins](https://vanillajstoolkit.com/plugins) as well.

But where this really shines is for use with other peoples' OSS projects when a CDN isn't provided but you need a quick and easy way to load the code into your site.

jsDelivr also supports NPM and WordPress.

</article>

<aside>

_**Like this?** I send out a short email each weekday with code snippets, tools, techniques, and interesting stuff from around the web. Join 11, 500+ daily subscribers._

<form action="https://gomakethings.us1.list-manage.com/subscribe/post?u=f2d244c0df42a0431bd08ddea&amp;id=aeaa9dd034" method="post" name="mc-embedded-subscribe-form" id="mailchimp-form" novalidate="">

<div class="row">

<div class="grid-two-thirds">

<div class="tarpit"><label for="name">If you're human, leave this blank</label> <input type="text" name="name" id="name" value=""></div>

<div><label class="screen-reader" for="mailchimp-email">Email Address</label> <input type="email" name="email" id="mailchimp-email" placeholder="Your email address..." required=""></div>

<input type="hidden" name="TbVktzD9dNZiQyZQ3Dk64w6L" value="WqJELdqqHHFTLUrEWJLu4DspKjeoBawWdWnZVVwti7RYpCyLr8WoWtm7UozshPy6"> <input type="hidden" name="group[aaf6f8b9a3]" value="1"> <input type="hidden" name="tag[21913]" value="1"></div>

<div class="grid-third"><button data-processing="Signing Up..." data-ready="Get Daily Developer Tips" class="btn btn-block" type="submit">Get Daily Developer Tips</button></div>

</div>

</form>

</aside>

</div>

</main>

<footer class="container container-large">

* * *

<nav class="tabindex nav-secondary" id="nav-secondary" tabindex="-1">

*   [About](https://gomakethings.com/about)
*   [Daily Tips](https://gomakethings.com/articles)
*   [Learn JS](https://gomakethings.com/resources)
*   [Search](https://gomakethings.com/search)

</nav>

Made with ❤️ in Massachusetts. Unless otherwise noted, all code is free to use under the [MIT License](https://gomakethings.com/mit). I also very irregularly share non-coding [thoughts](https://gomakethings.com/notes).

</footer>
