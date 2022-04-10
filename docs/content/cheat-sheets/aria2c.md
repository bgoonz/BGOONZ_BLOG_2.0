subtitle

2022-01-03

To download a file:
===================

The url can be a http(s), ftp, .torrent file or even a magnet link
==================================================================

aria2c

To prevent downloading the .torrent file:
=========================================

aria2c –follow-torrent=mem

Download 1 file at a time (-j)
==============================

continuing (-c) any partially downloaded ones
=============================================

to the directory specified (-d)
===============================

reading urls from the file (-i)
===============================

aria2c -j 1 -c -d ~/Downloads -i /path/to/file
