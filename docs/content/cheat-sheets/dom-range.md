subtitle

2022-01-03

------------------------------------------------------------------------

title: DOM Range category: JavaScript

intro: | Quick reference to the HTML [DOM createRange API](https://devdocs.io/dom/range).

------------------------------------------------------------------------

Reference
---------

{:.-three-column}

### Creating ranges

    var range = document.createRange();

See: <a href="https://devdocs.io/dom/document/createrange" class="uri">https://devdocs.io/dom/document/createrange</a>

Methods
-------

    range
        .setStart(startNode, startOffset)
        .setEnd(endNode, endOffset)

        .setStartBefore(node)
        .setStartAfter(node)
        .setEndBefore(node)
        .setEndAfter(node)

        .selectNode(node)
        .selectNodeContents(node);

See: <a href="https://devdocs.io/dom/range" class="uri">https://devdocs.io/dom/range</a>

### Collapsing

    range.collapse(); // to end (a single point)
    range.collapse(true); // to start (a single point)
    range.collapsed; // true | false

### Operations

    range.cloneContents(); // copy => DocumentFragment
    range.extractContents(); // cut  => DocumentFragment
    range.deleteContents(); // delete

    range.insertNode(node);

### String

    range.toString();

### Read-only attributes

    range.collapsed; //       => true/false
    range.startContainer; //  => Node
    range.startOffset;
    range.endContainer; //    => Node
    range.endOffset;
    range.commonAncestorContainer; // closest of start and end containers
