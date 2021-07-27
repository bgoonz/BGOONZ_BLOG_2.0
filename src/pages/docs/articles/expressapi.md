---
title: Node API's w Express
sections:
    - title: Routing w ExpressJS
      section_id: lorem-ipsum
      image_alt: lorem-ipsum
      image_position: left
      content: y using\_req.body\_and use it to update the existing hobbit.\n\nConcentrate on the code related to reading the\_id\_from the\_req.params\_object and reading the hobbit information from\_req.body. The rest of the code will change as this is a simple example using an in-memory array. Most production APIs will use a database.\n\n## **Challenge**\n\nFor the following exercises, use the provided database helper functions inside\_/data/db.js\_to work with the database users.\n\nImplement a\_GET\_endpoint that will accept an\_id\_as a route parameter and return the user corresponding to that\_id. If the user is not found, return the correct HTTP Status Code.\n\nImplement all CRUD operations on users, including getting by ID.\n\nAdd sorting and pagination support to the GET all endpoint. For pagination, the client should supply the API with sorting information, the number of users per page, and the page number.\n\n## **Overview**\n\nREST\_is a generally agreed-upon set of principles and constraints. They are\_**recommendations**, not a standard.\n\nWhen designing a RESTful Web API, keep the following principles in mind:\n\n*   everything is a\_**resource**.\n\n*   each resource is accessible via a\_**unique URI**.\n\n*   resources can have multiple\_**representations**.\n\n*   communication happens over a\_**stateless**\_protocol (HTTP).\n\n*   resource management happens via\_**HTTP methods**.\n\nApplying the\_REST\_architecture to our APIs can make them scalable and simpler to maintain and extend.\n\n## **Follow Along**\n\nREST APIs have six constraints:\n\n*   **client-server**\_architecture.\n\n*   **stateless**\_architecture: each request should stand on its own, and order should not matter. No shared state.\n\n*   **cacheable**: improves network performance.\n\n    *   GET,\_PUT, and\_DELETE\_should be\_*idempotent*\_(the same command executed multiple times, the state of resources on the server is exactly the same, much like pure functions)\n\n    *   POST\_is\_*not*\_idempotent.\n\n    *   Caching is a way to store and retrieve data so that the server can fulfill future requests faster without repeating expensive calculations or operations.\n\n*   **layered system**: component A (a client) might or might not communicate directly with component B (the server). There may be other layers between them like logging, caching, DNS servers, load balancers, and authentication.\n\n*   **code on demand**\n\n    *   The API returns the resource and code to act on it.\n\n    *   The client only needs to know how to execute the code.\n\n    *   Makes the API more flexible, upgradeable, and extendible.\n\n    *   Most web applications send JavaScript code along with the data.\n\n*   ## **Overview**## **Follow Along**\n\n    *   Each resource should be accessible through a single URL. Not a hard requirement, but recommended.\n\n    *   We should be able to manage the resources through these\_*representations*\_(the URL).\n\n    *   every interaction with the resource should happen through the URL identifier we gave to it.\n\n    *   Self-descriptive messages.\n\n    *   **HATEOAS**\_(**H**ypermedia\_**A**s\_**T**he\_**E**ngine\_**O**f\_**A**pplication\_**S**tate). Much like a\_*choose your own adventure book*, the pages are not read in order. You start on page 1. Based on the information available, the reader (client) chooses the action to take, moving them to a different page. A good example of a hypermedia API is\_[the GitHub API\_(Links to an external site.)](https://api.github.com/).\n\n    An Express\_Router\_behaves like a mini Express application. It can have its own\_Routing\_and\_Middleware, but it needs to exist inside an Express application. Think of routers as a way of organizing Express applications–you write separate pieces that can later be\_*composed*\_together.\n\n    This should all become clear with an example.\n\n    We'll start with our main server file.\n\n    If our applications only included the above code, we wouldn't need routers. But imagine that this application needs endpoints to see a list of users, get details for a single user, add users, modify existing users, and inactivate users. That is at least five endpoints for the\_users\_resource alone.\n\n    Now imagine this application also needs to deal with products, orders, returns, categories, providers, warehouses, clients, employees, and more. Even if we only have five endpoints per resource, each endpoint will have many lines of code, and you can see how trying to cram all that code in a single file could get unwieldy real fast.\n\n    Let's rewrite it to separate the main server file from the file handling the routes for users.\n\n    Create a file to handle all routes related to the user resource.\n\n    Now, even if the user resource needs 8 or 10 endpoints, they are packaged neatly into this file.\n\n    How can we use it in our main file? Like so:\n\n    Much cleaner, we added three sets of endpoints to our server, where each needs only two lines of easy-to-read code.\n\n    There is an alternative syntax for writing route handlers, but we'll leave that for you to explore.\n\n    Also, note that\_**it is possible to have a central router representing our API and have that router import the routes**. This logic cleans up our main server file even more. Let's see a quick example of that.\n\n    And the\_apiRoutes\_could look like this:\n\n    As you can see, routers can\_*use*\_other routers.\n\n    The\_userRoutes,\_productRoutes, and\_clientRoutes\_remain unchanged (other than relocating them inside the API folder).\n\n    In the next section, follow along as we practice using Routers.\n\n    Let's implement a simple API that returns strings but takes advantage of Express Routers. Express routers are overkill for such a simple application. Still, in larger applications, there would be many benefits to taking this approach.\n\n    We'll build it from scratch. First, follow these steps to create the folder and main server file:\n\n    *   create an empty folder for our Web API. Feel free to name it anything you'd like.\n\n    *   **CD into the folder**\_you just created and type\_npm init -y\_to generate a default\_package.json\_file. The\_y\_flag saves time by answering\_yes\_to all the questions that the\_npm init\_command would ask one at a time.\n\n    *   open the folder in your favorite text editor.\n\n    *   inside the\_package.json\_file, change\_\"test\": \"echo \\\\\"Error: no test specified\\\\\" && exit 1\"\_inside the\_scripts\_object to read:\_\"start\": \"nodemon index.js\". Changing the\_scripts\_object will let us run our server using\_nodemon\_by typing\_npm start\_at the command line/terminal.\_**Make sure to save the file.**\n\n    *   we need to install\_nodemon\_as a development-time dependency only because it is not needed when deploying our server to production. Type\_npm install -D nodemon\_will add it to the\_devDependencies\_property in our\_package.json\_file.\n\n    *   create a file to host the server code. We'll call it\_index.js.\n\n    *   Add the basic code to create our Express server and have a default\_/\_endpoint to test that our server responds to requests.\n\n    <!---->\n\n    *   add the\_express\_npm module:\_npm install express.\n\n    *   start the server by typing\_npm start.\n\n    *   test it by visiting:\_[http://localhost:9000\_(Links to an external site.)](http://localhost:9000/)0 in your browser.\n\n    Let's add our first router to manage the\_races\_resource.\n\n    *   create a folder called\_races\_to host our router.\n\n    *   create a file called\_raceRoutes.js\_and add the following code:\n\n    Now open your\_index.js\_file and use the newly created router by following these steps.\n\n    *   require the\_raceRoutes.js\_file after requiring Express.\n\n    *   use the race router to handle the\_/races\_endpoint.\n\n    Our\_index.js\_file now looks like this:\n\n    Visiting\_[http://localhost:9000/races\_(Links to an external site.)](http://localhost:9000/races)s should return our array of strings.\n"
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
