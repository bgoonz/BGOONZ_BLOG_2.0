Perform a backup of two directories
===================================

tarsnap -c -f /usr/home /other/stuff/to/backup

Print how much data would be uploaded
=====================================

tarsnap -c -f –dry-run –print-stats &lt;directories…&gt;

Copy an archive (only accesses metadata)
========================================

tarsnap -c -f @@

List the archives
=================

tarsnap –list-archives

Delete an archive
=================

tarsnap -d -f

List the files in an archive
============================

tarsnap -tv -f

Restore two users’ home directories from an archive (use no leading slashes)
============================================================================

tarsnap -x -f usr/home/alice usr/home/bob
