---

`target` refers to the DOM element that triggers an event. Otherwise, `currentTarget` refers to the DOM element that the event listener is listening on.

```html
<ul class="todo-list">
    <li class="item">Walk your dog</li>
</ul>
```

```js
const list = document.querySelector('.todo-list');

list.addEventListener('click', (e) => {
    console.log(e.target);
    // Output: <li class="item">Walk your dog</li>
    console.log(e.currentTarget);
    // Output: <ul class="todo-list"></ul>
});
```
