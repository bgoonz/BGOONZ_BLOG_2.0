---
title: Node API's w Express
sections:
    - title: Routing w ExpressJS
      section_id: lorem-ipsum
      image_alt: lorem-ipsum
      image_position: left
      content:many lines of code, and you can see how trying to cram all that code in a single file could get unwieldy real fast.\n\n    Let's rewrite it to separate the main server file from the file handling the routes for users.\n\n    Create a file to handle all routes related to the user resource.\n\n    Now, even if the user resource needs 8 or 10 endpoints, they are packaged neatly into this file.\n\n    How can we use it in our main file? Like so:\n\n    Much cleaner, we added three sets of endpoints to our server, where each needs only two lines of easy-to-read code.\n\n    There is an alternative syntax for writing route handlers, but we'll leave that for you to explore.\n\n    Also, note that\_**it is possible to have a central router representing our API and have that router import the routes**. This logic cleans up our main server file even more. Let's see a quick example of that.\n\n    And the\_apiRoutes\_could look like this:\n\n    As you can see, routers can\_*use*\_other routers.\n\n    The\_userRoutes,\_productRoutes, and\_clientRoutes\_remain unchanged (other than relocating them inside the API folder).\n\n    In the next section, follow along as we practice using Routers.\n\n    Let's implement a simple API that returns strings but takes advantage of Express Routers. Express routers are overkill for such a simple application. Still, in larger applications, there would be many benefits to taking this approach.\n\n    We'll build it from scratch. First, follow these steps to create the folder and main server file:\n\n    *   create an empty folder for our Web API. Feel free to name it anything you'd like.\n\n    *   **CD into the folder**\_you just created and type\_npm init -y\_to generate a default\_package.json\_file. The\_y\_flag saves time by answering\_yes\_to all the questions that the\_npm init\_command would ask one at a time.\n\n    *   open the folder in your favorite text editor.\n\n    *   inside the\_package.json\_file, change\_\"test\": \"echo \\\\\"Error: no test specified\\\\\" && exit 1\"\_inside the\_scripts\_object to read:\_\"start\": \"nodemon index.js\". Changing the\_scripts\_object will let us run our server using\_nodemon\_by typing\_npm start\_at the command line/terminal.\_**Make sure to save the file.**\n\n    *   we need to install\_nodemon\_as a development-time dependency only because it is not needed when deploying our server to production. Type\_npm install -D nodemon\_will add it to the\_devDependencies\_property in our\_package.json\_file.\n\n    *   create a file to host the 
      actions: []
      type: section_content
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: page
---

Navigation

-   [/repos/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/repos/%22)

-   [/gallery/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/gallery/%22)

-   [/showcase/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/showcase/%22)

-   [/blog/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/blog/%22)

-   [/webdevhub/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/webdevhub/%22)

-   [/docs/jupyter-notebooks/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/jupyter-notebooks/%22)

-   [/docs/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/%22)

-   [/docs/portfolio-web/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/portfolio-web/%22)

-   [/docs/python/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/python/%22)

-   [/docs/About/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/About/%22)

-   [/docs/About/resume/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/About/resume/%22)

-   [/docs/about/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/about/%22)

-   [/docs/faq/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/faq/%22)

-   [/docs/links/Social/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/links/Social/%22)

-   [/docs/links/my-websites/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/links/my-websites/%22)

-   [/docs/links/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/links/%22)

-   [/docs/quick-reference/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/quick-reference/%22)

-   [/docs/quick-reference/Emmet/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/quick-reference/Emmet/%22)

-   [/docs/quick-reference/installation/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/quick-reference/installation/%22)

-   [/docs/react/createReactApp/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/react/createReactApp/%22)

-   [/docs/quick-reference/new-repo-instructions/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/quick-reference/new-repo-instructions/%22)

-   [/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/%22)

-   [/blog/python/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/blog/python/%22)

-   [/blog/community/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/blog/community/%22)

-   [/docs/resources/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/resources/%22)

-   [/docs/react/react2/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/react/react2/%22)

-   [/docs/tools/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/tools/%22)

-   [/style-guide/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/style-guide/%22)

-   [/blog/my-medium/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/blog/my-medium/%22)

-   [/docs/tools/plug-ins/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/tools/plug-ins/%22)

-   [/docs/tools/default-readme/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/tools/default-readme/%22)

-   [/docs/tools/notes-template/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/tools/notes-template/%22)

-   [/review/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/review/%22)

-   [/docs/articles/basic-web-dev/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/articles/basic-web-dev/%22)

-   [/docs/About/introduction2bg/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/About/introduction2bg/%22)

-   [/docs/react/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/react/%22)

-   [/blog/data-structures/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/blog/data-structures/%22)

-   [/docs/About/me/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/About/me/%22)

-   [/docs/tools/Git-Html-Preview/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/tools/Git-Html-Preview/%22)

-   [/ds-algo-overview/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/ds-algo-overview/%22)

-   [/docs/articles/algo/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/articles/algo/%22)

-   [/docs/faq/contact/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/faq/contact/%22)

-   [/docs/nav/](https://file+.vscode-resource.vscode-webview.net/c:/Users/bryan/Downloads/scrap/BGOONZ_BLOG_2.0/notes/%22https:/bgoonz-blog.netlify.app/docs/nav/%22)
