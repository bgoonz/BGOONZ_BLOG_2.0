To show all lines without duplication:
======================================

(`sort -u` and `uniq` have the same effect.)
============================================

sort | uniq

To show not duplicated lines:
=============================

sort | uniq -u

To show duplicated lines only:
==============================

sort | uniq -d

To count all lines:
===================

sort | uniq -c

To count not duplicated lines:
==============================

sort | uniq -uc

To count only duplicated lines:
===============================

sort | uniq -dc
