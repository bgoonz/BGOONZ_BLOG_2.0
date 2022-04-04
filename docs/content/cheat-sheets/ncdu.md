To save results to :
====================

ncdu -o

To read from :
==============

ncdu -f

To save results to a compressed file:
=====================================

ncdu -o- | gzip &gt;

To read from a compressed file:
===============================

zcat | ncdu -f-
