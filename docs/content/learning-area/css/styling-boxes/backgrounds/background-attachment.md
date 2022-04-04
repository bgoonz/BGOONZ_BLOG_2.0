Background attachment example
=============================

`background-attachment: scroll` causes the element's background to be fixed to the page, so that it scrolls when the page is scrolled. If the element content is scrolled, the background does not move.

`background-attachment: fixed` causes an element's background to be fixed to the viewport, so that it doesn't scroll when the page or element content is scrolled. It will always remain in the same position on the screen.

`background-attachment: local`, new to CSS3, causes an element's background to be fixed to the actual element itself. So When the page is scrolled, the element's background will move along with it only if the element does so (so not in the case of elements with `position: fixed`.) When the element's content is scrolled, the background will scroll along with it.


