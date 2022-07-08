---
title: React Router
template: docs
excerpt: " full user interface that maps to the URL"
---

## Main Concepts

This document is a deep dive into the core concepts behind routing as implemented in React Router. It's pretty long, so if you're looking for a more practical guide check out our [quick start tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial).

You might be wondering what exactly React Router does. How can it help you build your app? What exactly is a **router**, anyway?

If you've ever had any of these questions, or you'd just like to dig into the fundamental pieces of routing, you're in the right place. This document contains detailed explanations of all the core concepts behind routing as implemented in React Router.

Please don't let this document overwhelm you! For everyday use, React Router is pretty simple. You don't need to go this deep to use it.

React Router isn't just about matching a url to a function or component: it's about building a full user interface that maps to the URL, so it might have more concepts in it than you're used to. We'll go into detail on the three main jobs of React Router:

1.  Subscribing and manipulating the [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack)
2.  Matching the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) to your [routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config)
3.  Rendering a nested UI from the [route matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#matches)

## Definitions

But first, some definitions! There are a lot of different ideas around routing from back and front end frameworks. Sometimes a word in one context might have different meaning than another.

Here are some words we use a lot when we talk about React Router. The rest of this guide will go into more detail on each one.

- **URL** - The URL in the address bar. A lot of people use the term "URL" and "route" interchangeably, but this is not a route in React Router, it's just a URL.
- **Location** - This is a React Router specific object that is based on the built-in browser's `window.location` object. It represents "where the user is at". It's mostly an object representation of the URL but has a bit more to it than that.
- **Location State** - A value that persists with a [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location) that isn't encoded in the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url). Much like hash or search params (data encoded in the URL), but stored invisibly in the browser's memory.
- **History Stack** - As the user navigates, the browser keeps track of each [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location) in a stack. If you click and hold the back button in a browser you can see the browser's history stack right there.
- **Client Side Routing (CSR)** - A plain HTML document can link to other documents and the browser handles the [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack) itself. Client Side Routing enables developers to manipulate the browser history stack without making a document request to the server.
- **History** - An object that allows React Router to subscribe to changes in the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) as well as providing APIs to manipulate the browser [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack) programmatically.
- **History Action** - One of `POP`, `PUSH`, or `REPLACE`. Users can arrive at a [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) for one of these three reasons. A push when a new entry is added to the history stack (typically a link click or the programmer forced a navigation). A replace is similar except it replaces the current entry on the stack instead of pushing a new one. Finally, a pop happens when the user clicks the back or forward buttons in the browser chrome.
- **Segment** - The parts of a [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) or [path pattern](https://reactrouter.com/docs/en/v6/getting-started/concepts#path-pattern) between the `/` characters. For example, "/users/123" has two segments.
- **Path Pattern** - These look like URLs but can have special characters for matching URLs to routes, like **dynamic segments** (`"/users/:userId"`) or **star segments** (`"/docs/*"`). They aren't URLs, they're patterns that React Router will match.
- **Dynamic Segment** - A segment of a path pattern that is dynamic, meaning it can match any values in the segment. For example the pattern `/users/:userId` will match URLs like `/users/123`
- **URL Params** - The parsed values from the URL that matched a [dynamic segment](https://reactrouter.com/docs/en/v6/getting-started/concepts#dynamic-segment).
- **Router** - Stateful, top-level component that makes all the other components and hooks work.
- **Route Config** - A tree of **routes objects** that will be ranked and matched (with nesting) against the current location to create a branch of **route matches**.
- **Route** - An object or Route Element typically with a shape of `{ path, element }` or `<Route path element>`. The `path` is a path pattern. When the path pattern matches the current URL, the element will be rendered.
- **Route Element** - Or `<Route>`. This element's props are read to create a [route](https://reactrouter.com/docs/en/v6/getting-started/concepts#route) by `<Routes>`, but otherwise does nothing.
- **Nested Routes** - Because routes can have children and each route defines a portion of the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) through [segments](https://reactrouter.com/docs/en/v6/getting-started/concepts#segment), a single URL can match multiple routes in a nested "branch" of the tree. This enables automatic layout nesting through [outlet](https://reactrouter.com/docs/en/v6/getting-started/concepts#outlet), [relative links](https://reactrouter.com/docs/en/v6/getting-started/concepts#relative-links), and more.
- **Relative links** - Links that don't start with `/` will inherit the closest route in which they are rendered. This makes it easy to link to deeper URLs without having to know and build up the entire path.
- **Match** - An object that holds information when a route matches the URL, like the [url params](https://reactrouter.com/docs/en/v6/getting-started/concepts#url-params) and pathname that matched.
- **Matches** - An array of routes (or branch of the [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config)) that matches the current [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location). This structure enables [nested routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#nested-routes).
- **Parent Route** - A route with child routes.
- **Outlet** - A component that renders the next match in a set of [matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#match).
- **Index Route** - A child route with no path that renders in the parent's [outlet](https://reactrouter.com/docs/en/v6/getting-started/concepts#outlet) at the parent's [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url).
- **Layout Route** - A **parent route** without a path, used exclusively for grouping child routes inside a specific layout.

## History and Locations

Before React Router can do anything, it has to be able to subscribe to changes in the browser [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack).

Browsers maintain their own history stack as the user navigates around. That's how the back and forward buttons can work. In a traditional website (HTML documents without JavaScript) the browser will make requests to the server every time the user clicks a link, submits a form, or clicks the back and forward buttons.

For example, consider the user:

1.  clicks a link to `/dashboard`
2.  clicks a link to `/accounts`
3.  clicks a link to `/customers/123`
4.  clicks the back button
5.  clicks a link to `/dashboard`

The history stack will change as follows where **bold** entries denote the current [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url):

1.  **`/dashboard`**
2.  `/dashboard`, **`/accounts`**
3.  `/dashboard`, `/accounts`, **`/customers/123`**
4.  `/dashboard`, **`/accounts`**, `/customers/123`
5.  `/dashboard`, `/accounts`, **`/dashboard`**

### History Object

With **client side routing**, developers are able to manipulate the browser [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack) programmatically. For example, we can write some code like this to change the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) without the browsers default behavior of making a request to the server:

```
<a
  href="/contact"
  onClick={(event) => {
    // stop the browser from changing the URL and requesting the new document
    event.preventDefault();
    // push an entry into the browser history stack and change the URL
    window.history.pushState({}, undefined, "/contact");
  }}
/>
```

For illustration only, don't use `window.history.pushState` directly in React Router

This code changes the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) but doesn't do anything for the UI. We would need to write some more code that changed some state somewhere to get the UI to change to the contact page. The trouble is, the browser doesn't give us a way to "listen to the URL" and subscribe to changes like this.

Well, that's not totally true. We can listen for changes to the URL via [pop](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-actions) events:

```
window.addEventListener("popstate", () => {
  // URL changed!
});
```

But that only fires when the user clicks the back or forward buttons. There is no event for when the programmer called `window.history.pushState` or `window.history.replaceState`.

That's where a React Router specific `history` object comes into play. It provides a way to "listen for [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url)" changes whether the [history action](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-actions) is **push**, **pop**, or **replace**.

```
let history = createBrowserHistory();
history.listen(({ location, action }) => {
  // this is called whenever new locations come in
  // the action is POP, PUSH, or REPLACE
});
```

Apps don't need to set up their own history objects--that's job of `<Router>`. It sets up one of these objects, subscribe to changes in the [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack), and finally updates its state when the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) changes. This causes the app to re-render and the correct UI to display. The only thing it needs to put on state is a `location`, everything else works from that single object.

### Locations

The browser has a location object on `window.location`. It tells you information about the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) but also has some methods to change it:

```
window.location.pathname; // /getting-started/concepts/
window.location.hash; // #location
window.location.reload(); // force a refresh w/ the server
// and a lot more
```

For illustration. You don't typically work with `window.location` in a React Router app

Instead of using `window.location`, React Router has the concept of a [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location) that's patterned after `window.location` but is much simpler. It looks like this:

```
{
  pathname: "/bbq/pig-pickins",
  search: "?campaign=instagram",
  hash: "#menu",
  state: null,
  key: "aefz24ie"
}
```

The first three: `{ pathname, search, hash }` are exactly like `window.location`. If you just add up the three you'll get the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) the user sees in the browser:

```
location.pathname + location.search + location.hash;
// /bbq/pig-pickins?campaign=instagram#menu
```

The last two, `{ state, key }`, are React Router specific.

**Location Pathname**

This is the part of [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) after the origin, so for `https://example.com/teams/hotspurs` the pathname is `/teams/hostspurs`. This is the only part of the location that routes match against.

**Location Search**

People use a lot of different terms for this part of the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url):

- location search
- search params
- URL search params
- query string

In React Router we call it the "location search". However, location search is a serialized version of [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). So sometimes we might call it "URL search params" as well.

```
// given a location like this:
let location = {
  pathname: "/bbq/pig-pickins",
  search: "?campaign=instagram&popular=true",
  hash: "",
  state: null,
  key: "aefz24ie",
};

// we can turn the location.search into URLSearchParams
let params = new URLSearchParams(location.search);
params.get("campaign"); // "instagram"
params.get("popular"); // "true"
params.toString(); // "campaign=instagram&popular=true",
```

When being precise, refer to the serialized string version as "search" and the parsed version as "search params", but it's common to use the terms interchangeably when precision isn't important.

**Location Hash**

Hashes in URLs indicate a scroll position _on the current page_. Before the `window.history.pushState` API was introduced, web developers did client side routing exclusively with the hash portion of the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url), it was the only part we could manipulate without making a new request to the server. However, today we can use it for its designed purpose.

**Location State**

You may have wondered why the `window.history.pushState()` API is called "push state". State? Aren't we just changing the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url)? Shouldn't it be `history.push`? Well, we weren't in the room when the API was designed, so we're not sure why "state" was the focus, but it is a cool feature of browsers nonetheless.

Browsers let us persist information about a transition by passing a value to `pushState`. When the user clicks back, the value on `history.state` changes to whatever was "pushed" before.

```
window.history.pushState("look ma!", undefined, "/contact");
window.history.state; // "look ma!"
// user clicks back
window.history.state; // undefined
// user clicks forward
window.history.state; // "look ma!"
```

For illustration. You don't read `history.state` directly in React Router apps

React Router takes advantage of this browser feature, abstracts it a bit, and surfaces the values on the `location` instead of `history`.

You can think about `location.state` just like `location.hash` or `location.search` except instead of putting the values in the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) it's hidden--like a super secret piece of the URL only the programmer knows about.

A couple of great use-cases for location state are:

- Telling the next page where the user came from and branching the UI. The most popular implementation here is showing a record in a modal if the user clicked on an item in a grid view, but if they show up to the URL directly, show the record in its own layout (pinterest, old instagram).
- Sending a partial record from a list to the next screen so it can render the partial data immediately and then fetching the rest of the data afterward.

You set location state in two ways: on `<Link>` or `navigate`:

```
<Link to="/pins/123" state={{ fromDashboard: true }} />;

let navigate = useNavigate();
navigate("/users/123", { state: partialUser });
```

And on the next page you can access it with `useLocation`:

```
let location = useLocation();
location.state;
```

Location state values will get serialized, so something like `new Date()` will be turned into a string.

**Location Key**

Each location gets a unique key. This is useful for advanced cases like location-based scroll management, client side data caching, and more. Because each new location gets a unique key, you can build abstractions that store information in a plain object, `new Map()`, or even `locationStorage`.

For example, a very basic client side data cache could store values by location key (and the fetch [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url)) and skip fetching the data when the user clicks back into it:

```
let cache = new Map();

function useFakeFetch(URL) {
  let location = useLocation();
  let cacheKey = location.key + URL;
  let cached = cache.get(cacheKey);

  let [data, setData] = useState(() => {
    // initialize from the cache
    return cached || null;
  });

  let [state, setState] = useState(() => {
    // avoid the fetch if cached
    return cached ? "done" : "loading";
  });

  useEffect(() => {
    if (state === "loading") {
      let controller = new AbortController();
      fetch(URL, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          if (controller.signal.aborted) return;
          // set the cache
          cache.set(cacheKey, data);
          setData(data);
        });
      return () => controller.abort();
    }
  }, [state, cacheKey]);

  useEffect(() => {
    setState("loading");
  }, [URL]);

  return data;
}
```

## Matching

On the initial render, and when the [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack) changes, React Router will match the [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location) against your [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config) to come up with a set of [matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#match) to render.

### Defining Routes

A route config is a tree of [routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#route) that looks something like this:

```
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes>
```

The `<Routes>` component recurses through its `props.children`, strips their props, and generates an object like this:

```
let routes = [
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "teams",
        element: <Teams />,
        children: [
          {
            index: true,
            element: <LeagueStandings />,
          },
          {
            path: ":teamId",
            element: <Team />,
          },
          {
            path: ":teamId/edit",
            element: <EditTeam />,
          },
          {
            path: "new",
            element: <NewTeamForm />,
          },
        ],
      },
    ],
  },
  {
    element: <PageLayout />,
    children: [
      {
        element: <Privacy />,
        path: "/privacy",
      },
      {
        element: <Tos />,
        path: "/tos",
      },
    ],
  },
  {
    element: <Contact />,
    path: "/contact-us",
  },
];
```

In fact, instead of `<Routes>` you can use the hook `useRoutes(routesGoHere)` instead. That's all `<Routes>` is doing.

As you can see, routes can define multiple [segments](https://reactrouter.com/docs/en/v6/getting-started/concepts#segment) like `:teamId/edit`, or just one like `:teamId`. All of the segments down a branch of the [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config) are added together to create a final [path pattern](https://reactrouter.com/docs/en/v6/getting-started/concepts#path-pattern) for a route.

### Match Params

Note the `:teamId` segments. This is what we call a [dynamic segment](https://reactrouter.com/docs/en/v6/getting-started/concepts#dynamic-segment) of the [path pattern](https://reactrouter.com/docs/en/v6/getting-started/concepts#path-pattern), meaning it doesn't match the URL statically (the actual characters) but it matches it dynamically. Any value can fill in for `:teamId`. Both `/teams/123` or `/teams/cupcakes` will match. We call the parsed values [URL params](https://reactrouter.com/docs/en/v6/getting-started/concepts#url-params). So in this case our `teamId` param would be `"123"` or `"cupcakes"`. We'll see how to use them in your app in the [Rendering](https://reactrouter.com/docs/en/v6/getting-started/concepts#rendering) section.

### Ranking Routes

If we add up all the segments of all the branches of our [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config), we end up with the following path patterns that our app responds to:

```
[
  "/",
  "/teams",
  "/teams/:teamId",
  "/teams/:teamId/edit",
  "/teams/new",
  "/privacy",
  "/tos",
  "/contact-us",
];
```

Now this is where things get really interesting. Consider the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) `/teams/new`. Which pattern in that list matches the URL?

That's right, two of them!

```
/teams/new
/teams/:teamId
```

React Router has to make a decision here, there can be only one. Many routers, both client side and server side, will simply process the patterns in the order in which they were defined. First to match wins. In this case we would match `/` and render the `<Home/>` component. Definitely not what we wanted. These kinds of routers require us to order our routes perfectly to get the expected result. This is how React Router has worked up until v6, but now it's much smarter.

Looking at those patterns, you intuitively know that we want `/teams/new` to match the URL `/teams/new`. It's a perfect match! React Router also knows that. When matching, it will rank your routes according the number of segments, static segments, dynamic segments, star patterns, etc. and pick the most specific match. You'll never have to think about ordering your routes.

### Pathless Routes

You may have noticed the weird routes from earlier:

```
<Route index element={<Home />} />
<Route index element={<LeagueStandings />} />
<Route element={<PageLayout />} />
```

They don't even have a path, how can they be a route? This is where the word "route" in React Router is used pretty loosely. `<Home/>` and `<LeagueStandings/>` are [index routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#index-route) and `<PageLayout/>` is a [layout route](https://reactrouter.com/docs/en/v6/getting-started/concepts#layout-route). We'll discuss how they work in the [Rendering](https://reactrouter.com/docs/en/v6/getting-started/concepts#rendering) section. Neither really has much to do with matching.

### Route Matches

When a route matches the URL, it's represented by a [match](https://reactrouter.com/docs/en/v6/getting-started/concepts#match) object. A match for `<Route path=":teamId" element={<Team/>}/>` would look something like this:

```
{
  pathname: "/teams/firebirds",
  params: {
    teamId: "firebirds"
  },
  route: {
    element: <Team />,
    path: ":teamId"
  }
}
```

`pathname` holds the portion of the URL that matched this route (in our case it's all of it). `params` holds the parsed values from any [dynamic segments](https://reactrouter.com/docs/en/v6/getting-started/concepts#dynamic-segment) that matched. Note that the param's object keys map directly to the name of the segment: `:teamId` becomes `params.teamId`.

Because our routes are a tree, a single URL can match an entire branch of the tree. Consider the URL `/teams/firebirds`, it would be the following route branch:

```
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes>
```

React Router will create an array of [matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#match) from these routes and the url so it can render a nested UI that matches the route nesting.

```
[
  {
    pathname: "/",
    params: null,
    route: {
      element: <App />,
      path: "/",
    },
  },
  {
    pathname: "/teams",
    params: null,
    route: {
      element: <Teams />,
      path: "teams",
    },
  },
  {
    pathname: "/teams/firebirds",
    params: {
      teamId: "firebirds",
    },
    route: {
      element: <Team />,
      path: ":teamId",
    },
  },
];
```

## Rendering

The final concept is rendering. Consider that the entry to your app looks like this:

```
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
```

Let's use the `/teams/firebirds` URL as an example again. `<Routes>` will match the [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location) to your [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config), get a set of [matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#match), and then render a React element tree like this:

```
<App>
  <Teams>
    <Team />
  </Teams>
</App>
```

Each match rendered inside the parent route's element is a really powerful abstraction. Most websites and apps share this characteristic: boxes inside of boxes inside of boxes, each with a navigation section that changes a child section of the page.

### Outlets

This nested element tree won't happen automatically. `<Routes>` will render the first match's element for you (In our case that's `<App/>`). The next match's element is `<Teams>`. In order to render that, `App` needs to render an [outlet](https://reactrouter.com/docs/en/v6/getting-started/concepts#outlet).

```
function App() {
  return (
    <div>
      <GlobalNav />
      <Outlet />
      <GlobalFooter />
    </div>
  );
}
```

The `Outlet` component will always render the next match. That means `<Teams>` also needs an outlet to render `<Team/>`.

If the URL were `/contact-us`, the element tree would change to:

Because the contact form is not under the main `<App>` route.

If the URL were `/teams/firebirds/edit`, the element tree would change to:

```
<App>
  <Teams>
    <EditTeam />
  </Teams>
</App>
```

The outlet swaps out the child for the new child that matches, but the parent layout persists. It's subtle but very effective at cleaning up your components.

### Index Routes

Remember the [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config) for `/teams`:

```
<Route path="teams" element={<Teams />}>
  <Route path=":teamId" element={<Team />} />
  <Route path="new" element={<NewTeamForm />} />
  <Route index element={<LeagueStandings />} />
</Route>
```

If the URL were `/teams/firebirds`, the element tree would be:

```
<App>
  <Teams>
    <Team />
  </Teams>
</App>
```

But if the URL were `/teams`, the element tree would be:

```
<App>
  <Teams>
    <LeagueStandings />
  </Teams>
</App>
```

League standings? How the heck did `<Route index element={<LeagueStandings>}/>` pop in there? It doesn't even have a path! The reason is that it's an [index route](https://reactrouter.com/docs/en/v6/getting-started/concepts#index-route). Index routes render in their parent route's [outlet](https://reactrouter.com/docs/en/v6/getting-started/concepts#outlet) at the parent route's path.

Think of it this way, if you're not at one of the child routes' paths, the `<Outlet>` will render nothing in the UI:

If all the teams are in a list on the left then an empty outlet means you've got a blank page on the right! Your UI needs something to fill the space: index routes to the rescue.

Another way to think of an index route is that it's the default child route when the parent matches but none of its children do.

Depending on the user interface, you might not need an index route, but if there is any sort of persistent navigation in the parent route you'll most likely want index route to fill the space when the user hasn't clicked one of the items yet.

### Layout Routes

Here's a part of our route config we haven't matched yet: `/privacy`. Let's look at the route config again, highlighting the matched routes:

```
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes>
```

And the resulting element tree rendered will be:

```
<App>
  <PageLayout>
    <Privacy />
  </PageLayout>
</App>
```

The `PageLayout` route is admittedly weird. We call it a [layout route](https://reactrouter.com/docs/en/v6/getting-started/concepts#layout-route) because it doesn't participate in the matching at all (though its children do). It only exists to make wrapping multiple child routes in the same layout simpler. If we didn't allow this then you'd have to handle layouts in two different ways: sometimes your routes do it for you, sometimes you do it manually with lots of layout component repetition throughout your app:

You can do it like this, but we recommend using a layout route

```
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route
    path="/privacy"
    element={
      <PageLayout>
        <Privacy />
      </PageLayout>
    }
  />
  <Route
    path="/tos"
    element={
      <PageLayout>
        <Tos />
      </PageLayout>
    }
  />
  <Route path="contact-us" element={<Contact />} />
</Routes>
```

So, yeah, the semantics of a layout "route" is a bit silly since it has nothing to do with the URL matching, but it's just too convenient to disallow.

## Navigating

When the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url) changes we call that a "navigation". There are two ways to navigate in React Router:

- `<Link>`
- `navigate`

### Link

This is the primary means of navigation. Rendering a `<Link>` allows the user to change the URL when they click it. React Router will prevent the browser's default behavior and tell the [history](https://reactrouter.com/docs/en/v6/getting-started/concepts#history) to push a new entry into the [history stack](https://reactrouter.com/docs/en/v6/getting-started/concepts#history-stack). The [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location) changes and the new [matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#match) will render.

However, links are accessible in that they:

- Still render a `<a href>` so all default accessibility concerns are met (like keyboard, focusability, SEO, etc.)
- Don't prevent the browser's default behavior if it's a right click or command/control click to "open in new tab"

[Nested routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#nested-routes) aren't just about rendering layouts; they also enable "relative links". Consider our `teams` route from before:

```
<Route path="teams" element={<Teams />}>
  <Route path=":teamId" element={<Team />} />
</Route>
```

The `<Teams>` component can render links like:

```
<Link to="psg" />
<Link to="new" />
```

The full path it links to will be `/teams/psg` and `/teams/new`. They inherit the route within which they are rendered. This makes it so your route components don't have to really know anything about the rest of the routes in the app. A very large amount of links just go one more [segment](https://reactrouter.com/docs/en/v6/getting-started/concepts#segment) deeper. You can rearrange your whole [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config) and these links will likely still work just fine. This is very valuable when building out a site in the beginning and the designs and layouts are shifting around.

### Navigate Function

This function is returned from the `useNavigate` hook and allows you, the programmer, to change the URL whenever you want. You could do it on a timeout:

```
let navigate = useNavigate();
useEffect(() => {
  setTimeout(() => {
    navigate("/logout");
  }, 30000);
}, []);
```

Or after a form is submitted:

```
<form onSubmit={event => {
  event.preventDefault();
  let data = new FormData(event.target)
  let urlEncoded = new URLSearchParams(data)
  navigate("/create", { state: urlEncoded })
}}>
```

Like `Link`, `navigate` works with nested "to" values as well.

You should have a good reason to use `navigate` instead of `<Link>`. This makes us very sad:

```
<li onClick={() => navigate("/somewhere")} />
```

Aside from links and forms, very few interactions should change the URL because it introduces complexity around accessibility and user expectations.

## Data Access

Finally, an application is going to want to ask React Router for a few pieces of information in order to build out the full UI. For this, React Router has a pile of hooks

```
let location = useLocation();
let urlParams = useParams();
let [urlSearchParams] = useSearchParams();
```

## Review

Let's put it all together from the top!

1.  You render your app:

 ```
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
          <Route element={<PageLayout />}>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tos" element={<Tos />} />
          </Route>
          <Route path="contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>,
      document.getElementById("root")
    );
 ```

2.  `<BrowserRouter>` creates a [history](https://reactrouter.com/docs/en/v6/getting-started/concepts#history), puts the initial [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location) in to state, and subscribes to the [URL](https://reactrouter.com/docs/en/v6/getting-started/concepts#url).
3.  `<Routes>` recurses it's [child routes](https://reactrouter.com/docs/en/v6/getting-started/concepts#child-route) to build a [route config](https://reactrouter.com/docs/en/v6/getting-started/concepts#route-config), matches those routes against the [location](https://reactrouter.com/docs/en/v6/getting-started/concepts#location), creates some route [matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#match), and renders the first match's route element.
4.  You render an [`<Outlet/>`](https://reactrouter.com/docs/en/v6/getting-started/concepts#outlet) in each [parent route](https://reactrouter.com/docs/en/v6/getting-started/concepts#parent-route).
5.  The outlets render the next match in the route [matches](https://reactrouter.com/docs/en/v6/getting-started/concepts#match).
6.  The user clicks a link
7.  The link calls `navigate()`
8.  The [history](https://reactrouter.com/docs/en/v6/getting-started/concepts#history) changes the URL and notifies `<BrowserRouter>`.
9.  `<BrowserRouter>` rerenders, start over at (2)!

That's it! We hope this guide has helped you gain a deeper understanding of the main concepts in React Router.

Url: https://reactrouter.com/docs/en/v6/getting-started/concepts
