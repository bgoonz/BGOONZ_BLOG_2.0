To patch one file:
==================

patch &lt;

To reverse a patch:
===================

patch -R &lt;

To patch all files in a directory, adding any missing new files:
================================================================

-p strips leading slashes
=========================

$ cd dir $ patch -p1 -i

To patch files in a directory, with one level (/) offset:
=========================================================

patch -p1 -r

&lt;
