Begin org-mode ALT-x org-mode Save CTRL-x CTRL-s Export in other file formats (eg HTML,PDF) CTRL-c CTRL-e

Outline
=======

Section heading \* New headline ALT-return Move headline up or down ALT-up\_arrow/down\_arrow Adjust indent depth of headline ALT-left\_arrow/right\_arrow Open/collapse section TAB Open/collapse All CTRL-TAB

To-Do Lists
===========

Mark list item as TODO \*\* TODO Cycle through workflow SHIFT-left\_arrow/right\_arrow Show only outstanding TODO items CTRL-c CTRL-v

Tables
======

Table column separator Vertical/pipe character Reorganize table TAB Move column ALT-left\_arrow/right\_arrow Move row ALT-up\_arrow/down\_arrow

Styles
======

*bold* /italic/ *underlined* =code= <sub>verbatim</sub> +strike-through+

Heading
=======

Header -*- mode: org -*-

.emacs
======

To make org-mode automatically wrap lines:

    (add-hook 'org-mode-hook
              '(lambda ()
                 (visual-line-mode 1)))
