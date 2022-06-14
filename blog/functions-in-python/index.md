This app works best with JavaScript enabled.

[![webdevhub logo](https://d33wubrfki0l68.cloudfront.net/71199c39f8515c2ec6a7db98b837a0f39887ecc3/5558d/images/logo-circle.png)](/)

<span class="screen-reader-text">Open Menu</span><span class="icon-close" aria-hidden="true"></span>

- <a href="/docs/sitemap" class="button">Navigation</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="/docs" class="button">Docs</a>
  - <a href="/showcase" class="button">Showcase</a>
  - <a href="/docs/faq/contact" class="button">Contact!</a>
  - <a href="/docs/python/python-ds" class="button">Python</a>

- <a href="/blog/" class="button">Blog</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://bgoonz.blogspot.com/" class="button">Blog-Post-Archive</a>
  - <a href="https://blog-w-comments.vercel.app/" class="button">Top Blog Posts</a>
  - <a href="/docs/articles/ds-algo-overview/" class="button">ds-algo</a>
  - <a href="/blog/platform-docs/" class="button">platform docs</a>
  - <a href="/docs/articles/nodejs/" class="button">nodejs</a>
  - <a href="/blogWcomments/" class="button">Blog w Comments</a>

- <a href="https://github.com/bgoonz/UsefulResourceRepo2.0" class="button">Archive</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://bryanguner.medium.com/" class="button">Medium Articles</a>
  - <a href="https://github.com/bgoonz/Learning-Assets" class="button">Resource-Archive-Server</a>
  - <a href="#" class="button">Bootcamp Resources</a>
  - <a href="https://web-dev-resource-hub.netlify.app/" class="button">OG-Blog</a>
  - <a href="/docs/gallery" class="button">Gallery</a>
  - <a href="/docs" class="button">Top Repos</a>

- <a href="/docs/audio/audio" class="button">Audio</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="/docs/audio/audio" class="button">DTW-guitar-effects</a>
  - <a href="/docs/audio/dfft" class="button">Fast Fourier Transform</a>

- <a href="https://project-portfolio42.netlify.app/" class="button">Projects</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://potluck-landing.netlify.app/" class="button">Potluck Planner</a>
  - <a href="https://meditate42app.netlify.app/" class="button">Meditation App</a>
  - <a href="https://panoramic-eggplant-452e4.netlify.app/" class="button">WebAudioLab</a>
  - <a href="https://bgoonz.github.io/searchAwesome/" class="button">SearchAwesome</a>
  - <a href="https://bg-portfolio.netlify.app/" class="button">Condensed -Portfolio</a>

- <a href="https://bgoonz-blog-v3-0.netlify.app/" class="button">External Nav</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>

  - <a href="https://friendly-panda-b61ab.netlify.app/" class="button">Embeds Blog</a>
  - <a href="https://bgoonz-blog-v3-0.netlify.app/" class="button">alt-blogs</a>
  - <a href="https://bgoonz-games.netlify.app/" class="button">Games</a>
  - <a href="https://bgoonz-blog-v3-0.netlify.app/" class="button">Blog Backup</a>
  - <a href="https://bgoonz-cv.netlify.app/" class="button">Cover Letter</a>
  - <a href="https://project-portfolio42.netlify.app/" class="button">Project Centric</a>
  - <a href="https://web-dev-hub.com/" class="button">Wordpress Blog</a>
  - <a href="https://project-portfolio42.netlify.app/" class="button">Project Portfolio Gallery</a>
  - <a href="https://bgoonz.github.io/github-stats-website/" class="button">github-stats-website</a>

- <a href="/docs/tools" class="button">Tools</a>
  <span class="icon-angle-right" aria-hidden="true"></span><span class="screen-reader-text">Sub-menu</span>
  - <a href="https://githtmlpreview.netlify.app/" class="button">Github HTML Previewer</a>
  - <a href="https://devtools42.netlify.app/" class="button">Text Tools</a>
  - <a href="https://ternary42.netlify.app/" class="button">Ternary 2 If Else</a>
  - <a href="https://determined-dijkstra-ee7390.netlify.app/" class="button">Job Search Resources</a>
  - <a href="https://github.com/bgoonz/web-dev-setup-checker" class="button">Setup Checker</a>
  - <a href="https://potluck-landing.netlify.app/" class="button">PotluckPlanner</a>
  - <a href="https://web-dev-interview-prep-quiz-website.netlify.app/" class="button">WebDev Quizzes</a>
  - <span class="screen-reader-text">Github-Advanced-Search</span>

<span class="screen-reader-text">Close Menu</span><span class="icon-menu" aria-hidden="true"></span>

October 14, 2021

# Functions in Python

Functions in Python

## Functions

    def hello(name):
        print('Hello {}'.format(name))

### Return Values and return Statements

When creating a function using the def statement, you can specify what the return value should be with a return statement. A return statement consists of the following:

- The return keyword.
- The value or expression that the function should return.

<!-- -->

    import random
    def getAnswer(answerNumber):
        if answerNumber == 1:
            return 'It is certain'
        elif answerNumber == 2:
            return 'It is decidedly so'
        elif answerNumber == 3:
            return 'Yes'
        elif answerNumber == 4:
            return 'Reply hazy try again'
        elif answerNumber == 5:
            return 'Ask again later'
        elif answerNumber == 6:
            return 'Concentrate and ask again'
        elif answerNumber == 7:
            return 'My reply is no'
        elif answerNumber == 8:
            return 'Outlook not so good'
        elif answerNumber == 9:
            return 'Very doubtful'

    r = random.randint(1, 9)
    fortune = getAnswer(r)
    print(fortune)

### The None Value

    spam = print('Hello!')
    spam is None

Note: never compare to `None` with the `==` operator. Always use `is`.

### print Keyword Arguments

    print('Hello', end='')
    print('World')

    print('cats', 'dogs', 'mice')

    print('cats', 'dogs', 'mice', sep=',')

### Local and Global Scope

- Code in the global scope cannot use any local variables.
- However, a local scope can access global variables.
- Code in a function’s local scope cannot use variables in any other local scope.
- You can use the same name for different variables if they are in different scopes. That is, there can be a local variable named spam and a global variable also named spam.

### The global Statement

If you need to modify a global variable from within a function, use the global statement:

    def spam():
        global eggs
        eggs = 'spam'

    eggs = 'global'
    spam()
    print(eggs)

There are four rules to tell whether a variable is in a local scope or global scope:

1.  If a variable is being used in the global scope (that is, outside of all functions), then it is always a global variable.
2.  If there is a global statement for that variable in a function, it is a global variable.
3.  Otherwise, if the variable is used in an assignment statement in the function, it is a local variable.
4.  But if the variable is not used in an assignment statement, it is a global variable.

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><table><tbody><tr class="odd"><td style="text-align: left;"><a href="https://search.freefind.com/siteindex.html?si=14588965">index</a></td><td style="text-align: center;"><a href="https://search.freefind.com/find.html?si=14588965&amp;m=0&amp;p=0">sitemap</a></td><td style="text-align: right;"><a href="https://search.freefind.com/find.html?si=14588965&amp;pid=a">advanced</a></td></tr></tbody></table></td></tr><tr class="even"><td><a href="https://www.freefind.com">search engine</a><a href="https://www.freefind.com">by<span style="color:transparent">freefind</span></a></td></tr></tbody></table>

<span class="copyright">@bgoonz on almost every platform</span><a href="https://bryanguner.medium.com/" class="button">Medium</a><a href="https://optimistic-lewin-8586ae.netlify.app/blm.zip" class="button">BLM</a>

<span class="screen-reader-text">Twitter</span>

<span class="screen-reader-text">LinkedIn</span>

<span class="screen-reader-text">GitHub</span>

<span class="screen-reader-text">Youtube</span>

<span class="screen-reader-text">Instagram</span>

<span class="screen-reader-text">dev.to</span>

Save to PDF

<span class="screen-reader-text">Back to top</span>

![](https://queue.simpleanalyticscdn.com/noscript.gif)

#### [<span style="color:gray;">Current local time in</span> New York City, United States](https://www.zeitverschiebung.net/en/city/5128581)
