subtitle

2022-01-03

------------------------------------------------------------------------

title: Awesome Redux category: React

------------------------------------------------------------------------

### redux-actions

Create action creators in flux standard action format. {: .-setup}

    increment = createAction('INCREMENT', (amount) => amount);
    increment = createAction('INCREMENT'); // same

    increment(42) === { type: 'INCREMENT', payload: 42 };

    // Errors are handled for you:
    err = new Error();
    increment(err) === { type: 'INCREMENT', payload: err, error: true };

[redux-actions](https://www.npmjs.com/package/redux-actions) {: .-crosslink}

### flux-standard-action

A standard for flux action objects. An action may have an `error`, `payload` and `meta` and nothing else. {: .-setup}

    { type: 'ADD_TODO', payload: { text: 'Work it' } }
    { type: 'ADD_TODO', payload: new Error(), error: true }

[flux-standard-action](https://github.com/acdlite/flux-standard-action) {: .-crosslink}

### redux-multi

Dispatch multiple actions in one action creator. {: .-setup}

    store.dispatch([
        { type: 'INCREMENT', payload: 2 },
        { type: 'INCREMENT', payload: 3 }
    ]);

[redux-multi](https://github.com/ashaffer/redux-multi) {: .-crosslink}

### reduce-reducers

Combines reducers (like *combineReducers()*), but without namespacing magic. {: .-setup}

    re = reduceReducers(
        (state, action) => state + action.number,
        (state, action) => state + action.number
    );

    re(10, { number: 2 }); //=> 14

[reduce-reducers](https://www.npmjs.com/package/reduce-reducers) {: .-crosslink}

### redux-logger

Logs actions to your console. {: .-setup}

    // Nothing to see here

[redux-logger](https://github.com/evgenyrodionov/redux-logger) {: .-crosslink}

Async
-----

### redux-promise

Pass promises to actions. Dispatches a flux-standard-action. {: .-setup}

    increment = createAction('INCREMENT'); // redux-actions
    increment(Promise.resolve(42));

[redux-promise](https://github.com/acdlite/redux-promise) {: .-crosslink}

### redux-promises

Sorta like that, too. Works by letting you pass *thunks* (functions) to `dispatch()`. Also has ‘idle checking’. {: .-setup}

    fetchData = (url) => (dispatch) => {
      dispatch({ type: 'FETCH_REQUEST' })
      fetch(url)
        .then((data) => dispatch({ type: 'FETCH_DONE', data })
        .catch((error) => dispatch({ type: 'FETCH_ERROR', error })
    })

    store.dispatch(fetchData('/posts'))

    // That's actually shorthand for:
    fetchData('/posts')(store.dispatch);

[redux-promises](https://www.npmjs.com/package/redux-promises) {: .-crosslink}

### redux-effects

Pass side effects declaratively to keep your actions pure. {: .-setup}

    {
      type: 'EFFECT_COMPOSE',
      payload: {
        type: 'FETCH'
        payload: {url: '/some/thing', method: 'GET'}
      },
      meta: {
        steps: [ [success, failure] ]
      }
    }

[redux-effects](https://www.npmjs.com/package/redux-effects) {: .-crosslink}

### redux-thunk

Pass "thunks” to as actions. Extremely similar to redux-promises, but has support for getState. {: .-setup}

    fetchData = (url) => (dispatch, getState) => {
      dispatch({ type: 'FETCH_REQUEST' })
      fetch(url)
        .then((data) => dispatch({ type: 'FETCH_DONE', data })
        .catch((error) => dispatch({ type: 'FETCH_ERROR', error })
    })

    store.dispatch(fetchData('/posts'))

    // That's actually shorthand for:
    fetchData('/posts')(store.dispatch, store.getState);

    // Optional: since fetchData returns a promise, it can be chained
    // for server-side rendering
    store.dispatch(fetchPosts()).then(() => {
        ReactDOMServer.renderToString(<MyApp store={store} />);
    });

[redux-thunk](https://www.npmjs.com/package/redux-thunk) {: .-crosslink}
