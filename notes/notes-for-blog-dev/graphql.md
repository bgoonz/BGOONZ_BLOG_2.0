# Understanding GraphQL (finally)

> 💡 I get it!I understand GraphQL and most of the magical powers it is capable of. It took a lot of research, tutorials, youtube videos and…

[![Erin Fox](https://miro.medium.com/fit/c/56/56/1*WE62vndOTaiEOsMDYSAw4A@2x.png)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/@erinfoox?source=post_page-----a75986d8df0a--------------------------------)

💡 I get it!I understand GraphQL and most of the magical powers it is capable of. It took a lot of research, tutorials, youtube videos and questions to wrap my head around how it works.

The concept never really clicked for me until a random team lunch in the cafeteria. Another engineer and I were trying to _really_ understand GraphQL and once the ketchup packets were placed to resemble the difference databases and the silverware worked as a hapi server replacement, the light bulbs practically broke above my head because it finally made sense.

Here’s a sketch I made after the lunch to help understand how it all works together. It’s not entirely accurate… but it helped me understand.

![](https://miro.medium.com/max/4096/1*e69_aj1wtR6I82HuxCww0g.jpeg)

(Starting from the left)

*   The two mason jars represent separate databases
*   Small ketchup packets represent two different API’s
*   Silverware set represents our hapi server
*   That rectangle looking phone, is a phone.

There are a lot of different explanations and definitions out there, but I like to think of it as a server-side runtime for executing queries by using a type system defined by your data.

Break it down 🕺🏻
------------------

1.  Supplies the client with exactly what it needs from the data
2.  Makes it really easy to collect data from multiple sources (mason jars)

My favorite analogy is from

**’s** GraphQL [article](https://medium.freecodecamp.org/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf). He described GraphQL as a trusty assistant! You get to tell it to go pick up your pizza, then swing by the laundromat for your clean clothes, and even head to the grocery store to pick up all your frozen burritos and cat litter. All at the same time. Really fast.

![](https://miro.medium.com/max/2308/1*snU2rrvr8tCraz1UXJzp2w.png)

Image from

article [“So what’s this GraphQL thing I keep hearing about?”](https://medium.freecodecamp.org/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf)

You just need to tell your trusty assistant (aka GraphQL) what to get and where to go to get it.

In order for your personal assistant (GraphQL) to accomplish all these task, three essentials are needed: **schema, resolver and query**.

The schema shows how to get the data and what type of data. It is where the types are defined. (Kiiiiinda like Flow or TypeScript). It can live in it’s own file, and can get pretty long.

![](https://miro.medium.com/max/60/1*mxF_q81NG_N71LkK8dxmqA.png?q=20)

![](https://miro.medium.com/max/990/1*mxF_q81NG_N71LkK8dxmqA.png)

Let’s say, I really like cats and fun facts. (Because, who doesn’t). We can use this [Cat Facts Api](https://catfact.ninja/) in my [Apollo Launchpad](https://launchpad.graphql.com/nxz00mzj37) to query some information for us. As you see in the schema above, I’ll get a fact, facts (with a fact limit!), and a photo. Most of my types will be strings, however facts takes a limit argument, so we will be able to manipulate the number of facts we get back at a time.

[GraphiQL](https://github.com/graphql/graphiql) is a handy tool to write out your query. The query returns data vs a JSON/REST object.

With GraphiQL, you are able to write out exactly what you need and you get back exactly that. The query has the same format as the result.

> “This is essential to GraphQL, because you always get back what you expect, and the server knows exactly what fields the client is asking for.” — graphql.org

There are loads of fancy things to add to your GraphQL query. Aliases, fragments, operation names, variables, directives, mutations, inline fragments and meta fields. I highly recommend viewing the [docs](http://graphql.org/learn/queries/) on these if you’re ready for the fancy stuff.

With our cat api, we are querying for a fact, facts (with a limit of 4 facts!) and a photo. Notice how similar the query is on the left in relation to the results on the right. We’re getting exactly what we asked for back! And really fast!

**Pro Tip:** “control space” while querying is life savor. Instead of going back to the schema to see what is available, control space will populate query fields for you.

![](https://miro.medium.com/max/856/1*tZ8mvAliB9adD5Om9mB9Rg.png)

But where is the end point? How does this personal assistant know which pizza place is the best and where your laundromat is located?

When the field is defined in the resolvers, it tells GraphQL how and where to fetch the data. The results come back “resolved” on how you want it structured.

> “A GraphQL server won’t know what to do with an incoming query unless you tell it using a resolver.” —

Again, we see `fact`, `facts`, and `photo`. Our resolver includes all three fetching their individual endpoints. (One day I’ll figure out how to make that a random cat photo, for now, it’s just one photo of a strange cat).

> “Apps using GraphQL are fast and stable because they control the data they get, not the server.” — graphql.org

GraphQL is really fun, fast, and once you understand it, you soon start to realize how cool it is. It’s hard for me to make simple REST API calls now. 🙈 I know, I know, I’m so spoiled.

I used Apollo Launchpad to create the [examples](https://launchpad.graphql.com/nxz00mzj37). Feel free to fork!

And always happy to chat more about GraphQL/React/React Native on [**Twitter**](https://twitter.com/erinfoox)**.**


[Source](https://medium.com/@erinfoox/understanding-graphql-finally-a75986d8df0a)