subtitle

2022-01-03

------------------------------------------------------------------------

title: DOM Selection category: JavaScript

intro: | Quick introduction to the HTML [DOM selection API](https://devdocs.io/dom/selection).

------------------------------------------------------------------------

Reference
---------

### Selection

    var sel = document.getSelection();

See: <a href="https://devdocs.io/dom/selection" class="uri">https://devdocs.io/dom/selection</a>

### Methods

    sel.removeAllRanges(); //  deselects
    sel.addRange(range); //    sets a selection
    sel.removeRange(range); // remove a range

    sel.rangeCount;
    sel.getRangeAt(0); // get the 0th range

### Collapsing

    sel.collapse(parent, offset);
    sel.collapseToEnd();
    sel.collapseToStart();
    sel.isCollapsed;

    sel.containsNode(node);

### Deleting

    sel.deleteFromDocument();

### Events

    document.addEventListener('selectionchange', () => {});
