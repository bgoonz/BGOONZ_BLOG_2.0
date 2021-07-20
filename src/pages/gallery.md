---
title: lorem-ipsum
subtitle: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: page
---

# Routing


## **Overview**

Let's look at a basic example of routing in action.

First, to make our Express application respond to `GET` requests on different URLs, add the following endpoints:

```jsx
// this request handler executes when making a GET request to /about
server.get('/about', (req, res) => {
  res.status(200).send('<h1>About Us</h1>');
});

// this request handler executes when making a GET request to /contact
server.get('/contact', (req, res) => {
  res.status(200).send('<h1>Contact Form</h1>');
});
```

Two things to note:

- we are using the same HTTP Method on both endpoints, but express looks at the URL and executes the corresponding request handler.
- we can return a string with valid HTML!

Open a browser and navigate to the `/about` and `/contact` routes. The appropriate route handler will execute.

## **Follow Along**

Please follow along as we write endpoints that execute different request handlers on the same URL by changing the HTTP method.

Let's start by adding the following code after the `GET` endpoint to `/hobbits`:

```jsx
// this request handler executes when making a POST request to /hobbits
server.post('/hobbits', (req, res) => {
  res.status(201).json({ url: '/hobbits', operation: 'POST' });
});
```

Note that we return HTTP status code 201 (created) for successful `POST` operations.

Next, we need to add an endpoint for `PUT` requests to the same URL.

```jsx
// this request handler executes when making a PUT request to /hobbits
server.put('/hobbits', (req, res) => {
  res.status(200).json({ url: '/hobbits', operation: 'PUT' });
});
```

For successful `PUT` operations, we use HTTP Status Code 200 (OK).

Finally, let's write an endpoint to handle `DELETE` requests.

```jsx
// this request handler executes when making a DELETE request to /hobbits
server.delete('/hobbits', (req, res) => {
  res.status(204);
});
```

We are returning HTTP Status Code 204 (No Content). Suppose you are returning any data to the client, perhaps the removed resource, on successful deletes. In that case, you'd change that to be 200 instead.

You may have noticed that we are not reading any data from the request, as that is something we'll learn later in the module. We are about to learn how to use a tool called `Postman` to test our `POST`, `PUT`, and `DELETE` endpoints.

## **Overview**

### **Reading and Using Route Parameters**

Let's revisit our `DELETE` endpoint.

```
server.delete('/hobbits', (req, res) => {
  res.status(204);
});
```

How does the client let the API know which hobbit should be deleted or updated? One way, the one we'll use, is through `route parameters`. Let's add support for route parameters to our `DELETE` endpoint.

We define route parameters by adding it to the URL with a colon (`:`) in front of it. Express adds it to the `.params` property part of the request object. Let's see it in action:

```jsx
server.delete('/hobbits/:id', (req, res) => {
  const id = req.params.id;
  // or we could destructure it like so: const { id } = req.params;
  res.status(200).json({
    url: `/hobbits/${id}`,
    operation: `DELETE for hobbit with id ${id}`,
  });
});
```

This route handler will execute every `DELETE` for a URL that begins with `/hobbits/` followed by any value. So, `DELETE` requests to `/hobbits/123` and `/hobbits/frodo` will both trigger this request handler. The value passed after `/hobbits/` will end up as the `id` property on `req.params`.

The value for a route parameter will always be `string`, even if the value passed is numeric. When hitting `/hobbits/123` in our example, the type of `req.params.id` will be `string`.

Express routing has support for multiple route parameters. For example, defining a route URL that reads `/hobbits/:id/friends/:friendId`, will add properties for `id` and `friendId` to `req.params`.

### **Using the Query String**

The query string is another strategy using the URL to pass information from clients to the server. The query string is structured as a set of key/value pairs. Each pair takes the form of `key=value`, and pairs are separated by an `&`. To mark the beginning of the query string, we add `?` and the end of the URL, followed by the set of key/value pairs.

An example of a query string would be: `https://www.google.com/search?q=lambda&tbo=1`. The query string portion is `?q=lambda&tbo=1` and the key/value pairs are `q=lambda` and `tbo=1`.

Let's add sorting capabilities to our API. We'll provide a way for clients to hit our `/hobbits` and pass the field they want to use to sort the responses, and our API will sort the data by that field in ascending order.

Here's the new code for the `GET /hobbits` endpoint:

```jsx
server.get('/hobbits', (req, res) => {
  // query string parameters get added to req.query
  const sortField = req.query.sortby || 'id';
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
  ];

  // apply the sorting
  const response = hobbits.sort(
    (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
  );

  res.status(200).json(response);
});
```

Visit `localhost:8000/hobbits?sortby=name`, and the list should be sorted by `name`. Visit `localhost:8000/hobbits?sortby=id`, and the list should now be sorted by `id`. If no `sortby` parameter is provided, it should default to sorting by `id`.

To read values from the query string, we use the `req.query` object added by Express. There will be a key and a value in the `req.query` object for each key/value pair found in the query string.

The parameter's value will be of type `array` if more than one value is passed for the same key and `string` when only one value is passed. For example, in the query string `?id=123`, `req.query.id` will be a string, but for `?id=123&id=234`, it will be an array.

Another gotcha is that the names of query string parameters are case sensitive, `sortby` and `sortBy` are two different parameters.

The rest of the code sorts the array before sending it back to the client.

### **Reading Data from the Request Body**

We begin by taking another look at the `POST /hobbits` endpoint. We need to read the hobbit's information to add it to the `hobbits` array. Let's do that next:

```jsx
// add this code right after const server = express();
server.use(express.json());

let hobbits = [
  {
    id: 1,
    name: 'Bilbo Baggins',
    age: 111,
  },
  {
    id: 2,
    name: 'Frodo Baggins',
    age: 33,
  },
];
let nextId = 3;

// and modify the post endpoint like so:
server.post('/hobbits', (req, res) => {
  const hobbit = req.body;
  hobbit.id = nextId++;

  hobbits.push(hobbit);

  res.status(201).json(hobbits);
});
```

To make this work with the hobbits array, we first move it out of the get endpoint into the outer scope. Now we have access to it from all route handlers.

Then we define a variable for manual id generation. When using a database, this is not necessary as the database management system generates ids automatically.

To read data from the request body, we need to do two things:

- Add the line: `server.use(express.json());` after the express application has been created.
- Read the data from the body property that Express adds to the request object. Express takes all the client's information from the body and makes it available as a nice JavaScript object.

**Note that we are skipping data validation to keep this demo simple, but in a production application, you would validate before attempting to save to the database.**

Let's test it using Postman:

- Change the method to POST.
- Select the `Body` tab underneath the address bar.
- Click on the `raw` radio button.
- From the dropdown menu to the right of the `binary` radio button, select `JSON (application/json).
- Add the following JSON object as the body:

```
{
  "name": "Samwise Gamgee",
  "age": 30
}
```

Click on `Send`, and the API should return the list of hobbits, including Sam!

## **Follow Along**

Please code along as we implement the `PUT` endpoint and a way for the client to specify the sort direction.

### **Implement Update Functionality**

Let's continue practicing reading route parameters and information from the request body. Let's take a look at our existing PUT endpoint:

```
server.put('/hobbits', (req, res) => {
  res.status(200).json({ url: '/hobbits', operation: 'PUT' });
});
```

We start by adding support for a route parameter the clients can use to specify the id of the hobbit they intend to update:

```
server.put('/hobbits/:id', (req, res) => {
  res.status(200).json({ url: '/hobbits', operation: 'PUT' });
});
```

Next, we read the hobbit information from the request body using `req.body` and use it to update the existing hobbit.

```jsx
server.put('/hobbits/:id', (req, res) => {
  const hobbit = hobbits.find(h => h.id == req.params.id);

  if (!hobbit) {
    res.status(404).json({ message: 'Hobbit does not exist' });
  } else {
    // modify the existing hobbit
    Object.assign(hobbit, req.body);

    res.status(200).json(hobbit);
  }
});
```

Concentrate on the code related to reading the `id` from the `req.params` object and reading the hobbit information from `req.body`. The rest of the code will change as this is a simple example using an in-memory array. Most production APIs will use a database.

## **Challenge**

For the following exercises, use the provided database helper functions inside `/data/db.js` to work with the database users.

Implement a `GET` endpoint that will accept an `id` as a route parameter and return the user corresponding to that `id`. If the user is not found, return the correct HTTP Status Code.

Implement all CRUD operations on users, including getting by ID.

Add sorting and pagination support to the GET all endpoint. For pagination, the client should supply the API with sorting information, the number of users per page, and the page number.

## **Overview**

`REST` is a generally agreed-upon set of principles and constraints. They are **recommendations**, not a standard.

When designing a RESTful Web API, keep the following principles in mind:

- everything is a **resource**.
- each resource is accessible via a **unique URI**.
- resources can have multiple **representations**.
- communication happens over a **stateless** protocol (HTTP).
- resource management happens via **HTTP methods**.

Applying the `REST` architecture to our APIs can make them scalable and simpler to maintain and extend.

## **Follow Along**

REST APIs have six constraints:

- **client-server** architecture.
- **stateless** architecture: each request should stand on its own, and order should not matter. No shared state.
- **cacheable**: improves network performance.
    - `GET`, `PUT`, and `DELETE` should be *idempotent* (the same command executed multiple times, the state of resources on the server is exactly the same, much like pure functions)
    - `POST` is *not* idempotent.
    - Caching is a way to store and retrieve data so that the server can fulfill future requests faster without repeating expensive calculations or operations.
- **layered system**: component A (a client) might or might not communicate directly with component B (the server). There may be other layers between them like logging, caching, DNS servers, load balancers, and authentication.
- **code on demand**
    - The API returns the resource and code to act on it.
    - The client only needs to know how to execute the code.
    - Makes the API more flexible, upgradeable, and extendible.
    - Most web applications send JavaScript code along with the data.
- **uniform interfaces**
    - Each resource should be accessible through a single URL. Not a hard requirement, but recommended.
    - We should be able to manage the resources through these *representations* (the URL).
    - every interaction with the resource should happen through the URL identifier we gave to it.
    - Self-descriptive messages.
    - **HATEOAS** (**H**ypermedia **A**s **T**he **E**ngine **O**f **A**pplication **S**tate). Much like a *choose your own adventure book*, the pages are not read in order. You start on page 1. Based on the information available, the reader (client) chooses the action to take, moving them to a different page. A good example of a hypermedia API is [the GitHub API (Links to an external site.)](https://api.github.com/).

    ## **Overview**

    An Express `Router` behaves like a mini Express application. It can have its own `Routing` and `Middleware`, but it needs to exist inside an Express application. Think of routers as a way of organizing Express applications–you write separate pieces that can later be *composed* together.

    This should all become clear with an example.

    We'll start with our main server file.

    ```
    const express = require('express');

    const server = express();

    server.use('/', (req, res) => res.send('API up and running!'));

    server.listen(8000, () => console.log('API running on port 8000'));
    ```

    If our applications only included the above code, we wouldn't need routers. But imagine that this application needs endpoints to see a list of users, get details for a single user, add users, modify existing users, and inactivate users. That is at least five endpoints for the `users` resource alone.

    Now imagine this application also needs to deal with products, orders, returns, categories, providers, warehouses, clients, employees, and more. Even if we only have five endpoints per resource, each endpoint will have many lines of code, and you can see how trying to cram all that code in a single file could get unwieldy real fast.

    Let's rewrite it to separate the main server file from the file handling the routes for users.

    Create a file to handle all routes related to the user resource.

    ```
    // inside /users/userRoutes.js <- this can be place anywhere and called anything
    const express = require('express');

    const router = express.Router(); // notice the Uppercase R

    // this file will only be used when the route begins with "/users"
    // so we can remove that from the URLs, so "/users" becomes simply "/"
    router.get('/', (req, res) => {
      res.status(200).send('hello from the GET /users endpoint');
    });

    router.get('/:id', (req, res) => {
      res.status(200).send('hello from the GET /users/:id endpoint');
    });

    router.post('/', (req, res) => {
      res.status(200).send('hello from the POST /users endpoint');
    });

    // ... and any other endpoint related to the user's resource

    // after the route has been fully configured, we then export it to be required where needed
    module.exports = router; // standard convention dictates that this is the last line on the file
    ```

    Now, even if the user resource needs 8 or 10 endpoints, they are packaged neatly into this file.

    How can we use it in our main file? Like so:

    ```
    const express = require('express');

    const userRoutes = require('./users/userRoutes');
    const productRoutes = require('./products/productRoutes');
    const clientRoutes = require('./clients/clientRoutes');

    const server = express();

    server.use('/users', userRoutes);
    server.use('/products', productRoutes);
    server.use('/clients', clientRoutes);

    server.listen(8000, () => console.log('API running on port 8000'));
    ```

    Much cleaner, we added three sets of endpoints to our server, where each needs only two lines of easy-to-read code.

    There is an alternative syntax for writing route handlers, but we'll leave that for you to explore.

    Also, note that **it is possible to have a central router representing our API and have that router import the routes**. This logic cleans up our main server file even more. Let's see a quick example of that.

    ```
    const express = require('express');

    const apiRoutes = require('./api/apiRoutes');

    const server = express();

    server.use('/api', userRoutes);

    server.listen(8000, () => console.log('API running on port 8000'));
    ```

    And the `apiRoutes` could look like this:

    ```
    // inside /api/apiRoutes.js <- this can be place anywhere and called anything
    const express = require('express');

    // if the other routers are not nested inside /api then the paths would change
    const userRoutes = require('./users/userRoutes');
    const productRoutes = require('./products/productRoutes');
    const clientRoutes = require('./clients/clientRoutes');

    const router = express.Router(); // notice the Uppercase R

    // this file will only be used when the route begins with "/api"
    // so we can remove that from the URLs, so "/api/users" becomes simply "/users"
    router.use('/users', userRoutes);
    router.use('/products', productRoutes);
    router.use('/clients', clientRoutes);

    // .. and any other endpoint related to the user's resource

    // after the route has been fully configured, we then export it so it can be required where needed
    module.exports = router; // standard convention dictates that this is the last line on the file
    ```

    As you can see, routers can *use* other routers.

    The `userRoutes`, `productRoutes`, and `clientRoutes` remain unchanged (other than relocating them inside the API folder).

    In the next section, follow along as we practice using Routers.

    ## **Follow Along**

    Let's implement a simple API that returns strings but takes advantage of Express Routers. Express routers are overkill for such a simple application. Still, in larger applications, there would be many benefits to taking this approach.

    We'll build it from scratch. First, follow these steps to create the folder and main server file:

    - create an empty folder for our Web API. Feel free to name it anything you'd like.
    - **CD into the folder** you just created and type `npm init -y` to generate a default `package.json` file. The `y` flag saves time by answering `yes` to all the questions that the `npm init` command would ask one at a time.
    - open the folder in your favorite text editor.
    - inside the `package.json` file, change `"test": "echo \"Error: no test specified\" && exit 1"` inside the `scripts` object to read: `"start": "nodemon index.js"`. Changing the `scripts` object will let us run our server using `nodemon` by typing `npm start` at the command line/terminal. **Make sure to save the file.**
    - we need to install `nodemon` as a development-time dependency only because it is not needed when deploying our server to production. Type `npm install -D nodemon` will add it to the `devDependencies` property in our `package.json` file.
    - create a file to host the server code. We'll call it `index.js`.
    - Add the basic code to create our Express server and have a default `/` endpoint to test that our server responds to requests.

    ```
    const express = require('express');

    const server = express();

    server.use('/', (req, res) => res.send('API up and running!'));

    // using port 9000 for this example
    server.listen(9000, () => console.log('API running on port 9000'));
    ```

    - add the `express` npm module: `npm install express`.
    - start the server by typing `npm start`.
    - test it by visiting: [http://localhost:9000 (Links to an external site.)](http://localhost:9000/)0 in your browser.

    Let's add our first router to manage the `races` resource.

    - create a folder called `races` to host our router.
    - create a file called `raceRoutes.js` and add the following code:

    ```
    const express = require('express');

    const router = express.Router();

    router.get('/', (req, res) => {
      const races = ['human', 'elf', 'hobbit', 'wizard', 'dwarf', 'orc'];

      res.status(200).json(races);
    });

    module.exports = router;
    ```

    Now open your `index.js` file and use the newly created router by following these steps.

    - require the `raceRoutes.js` file after requiring Express.
    - use the race router to handle the `/races` endpoint.

    Our `index.js` file now looks like this:

    ```
    const express = require('express');

    const raceRoutes = require('./races/raceRoutes');

    const server = express();

    server.use('/races', raceRoutes);

    server.use('/', (req, res) => res.send('API up and running!'));

    server.listen(9000, () => console.log('API running on port 9000'));
    ```

    Visiting [http://localhost:9000/races (Links to an external site.)](http://localhost:9000/races)s should return our array of strings.

    Great job! You are on your way to writing well-structured APIs that other team members (including your future self) will love using!
