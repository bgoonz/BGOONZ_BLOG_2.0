To download :
=============

wget

To download multiples files with multiple URLs:
===============================================

wget …

To download and change its name:
================================

wget -O

\# To download into

:

wget -P

To continue an aborted downloaded:
==================================

wget -c

To parse a file that contains a list of URLs to fetch each one:
===============================================================

wget -i url\_list.txt

To mirror a whole page locally:
===============================

wget -pk

To mirror a whole site locally:
===============================

wget -mk

To download files according to a pattern:
=========================================

wget http://example.com/files-{1..15}.tar.bz2

To download all the files in a directory with a specific extension if directory indexing is enabled:
====================================================================================================

wget -r -l1 -A.extension http://example.com/directory

To download only response headers (-S –spider) and display them on stdout (-O -).:
==================================================================================

wget -S –spider -O -

To change the User-Agent to ‘User-Agent: toto’:
===============================================

wget -U ‘toto’
