---
title: AJAX and APIs
weight: 0
excerpt: AJAX and APIs
seo:
    title: 'AJAX and APIs'
    description: 'You can use any AJAX library you like with React. Some popular ones are Axios, jQuery AJAX, and the browser built-in window.fetch.'
    robots: []
    extra: []
template: docs
---


# AJAX and APIs - React

> ## Excerpt
>
> A JavaScript library for building user interfaces

---

### [](https://reactjs.org/docs/lists-and-keys.html#how-can-i-make-an-ajax-call)How can I make an AJAX call?

You can use any AJAX library you like with React. Some popular ones are [Axios](https://github.com/axios/axios), [jQuery AJAX](https://api.jquery.com/jQuery.ajax/), and the browser built-in [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### [](https://reactjs.org/docs/lists-and-keys.html#where-in-the-component-lifecycle-should-i-make-an-ajax-call)Where in the component lifecycle should I make an AJAX call?

You should populate data with AJAX calls in the [`componentDidMount`](https://reactjs.org/docs/react-component.html#mounting) lifecycle method. This is so you can use `setState` to update your component when the data is retrieved.

### [](https://reactjs.org/docs/lists-and-keys.html#example-using-ajax-results-to-set-local-state)Example: Using AJAX results to set local state

The component below demonstrates how to make an AJAX call in `componentDidMount` to populate local component state.

The example API returns a JSON object like this:

```js
{
  "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
  ]
}
```

```js
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://api.example.com/items')
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
```

Here is the equivalent with [Hooks](https://reactjs.org/docs/hooks-intro.html):

---


```js


function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/items')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}
```
