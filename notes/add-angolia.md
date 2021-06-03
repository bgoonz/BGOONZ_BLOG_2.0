# Setup Algolia account for your GatsbyJS blog - front-end dev with Greg

> Front-end web development with Greg is an educational project.

As I wrote in the [Starter Instalation](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/install-blog-starter/) post the starter needs access data to your [Algolia](https://www.algolia.com/) account.

If you do not have an Algolia account yet you have to [sign up](https://www.algolia.com/users/sign_up) now.

If you already have an account go and open the [Apps](https://www.algolia.com/manage/applications) page and click the **NEW APPLICATION** button.

 [![Algolia - Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-apps-ff142da8f15e16ca7290d3f6190f9582-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-apps-ff142da8f15e16ca7290d3f6190f9582-22d4e.png) 

Set the name of the new app and choose plan for it.

 [![Algolia - create new app](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-create-app-550f290e3572463a1916e07985c6ca9b-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-create-app-550f290e3572463a1916e07985c6ca9b-22d4e.png) 

Then choose a region.

 [![Algolia - choose a region for the app](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-new-app-region-7c2b4d2af5ff543af25698935e234f41-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-new-app-region-7c2b4d2af5ff543af25698935e234f41-dda6a.png) 

Your app is ready to use.

 [![Algolia - app dashboard](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-new-app-fbfaffc9202cccd26c1784141b23e1eb-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-new-app-fbfaffc9202cccd26c1784141b23e1eb-dda6a.png) 

Now it’s time to create an index. Open Indices section. And click the **ADD NEW INDEX** button.

 [![Algolia - indices](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-no-indices-d9d1340155cd4630f3eaf7651b1b584d-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-no-indices-d9d1340155cd4630f3eaf7651b1b584d-dda6a.png) 

Set a name for the index.

 [![Algolia - create index](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-create-index-eae88d34618f56f9c008aa5edd15d636-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-create-index-eae88d34618f56f9c008aa5edd15d636-22d4e.png) 

That’s it. You’ve set everything what you need to setup the starter’s searching feature.

 [![Algolia - new index](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-indices-fbe55465f0b18afac23f76b7a33e419c-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-indices-fbe55465f0b18afac23f76b7a33e419c-22d4e.png) 

The final step. Open **Api Keys** section.

 [![Algolia - Api Keys](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-api-keys-59bdfae8910b0dcaa951470d5ad65f27-48538.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/algolia-api-keys-59bdfae8910b0dcaa951470d5ad65f27-dda6a.png) 

And copy **Application ID**, **Search-Only API Key** and **Admin API Key** and put them together with the **Index’s name** into the `.env` file described in the [Starter Instalation](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/install-personal-blog-starter/) post.

More info about the searching feature in the following post. Stay tuned. If you have any question use the Comment form below.


[Source](https://dev.greglobinski.com/setup-algolia-account/)
