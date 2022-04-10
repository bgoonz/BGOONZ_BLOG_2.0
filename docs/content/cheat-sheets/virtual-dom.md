See <a href="https://www.npmjs.com/package/virtual-dom" class="uri">https://www.npmjs.com/package/virtual-dom</a>

    var h = require('virtual-dom/h');
    var diff = require('virtual-dom/diff');
    var patch = require('virtual-dom/patch');
    var createElement = require('virtual-dom/create-element');

### Rendering

    tree = h('div', { style: { color: 'blue' } }, ['hello']);
    el = createElement(tree);
    document.body.appendChild(root);

### Updating

    tree2 = h('div', { style: { color: 'blue' } }, ['hello world']);
    delta = diff(tree, tree2);
    el = patch(el, delta); // patch() modifies el
