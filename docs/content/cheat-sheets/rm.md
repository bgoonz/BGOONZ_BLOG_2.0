\# To remove all files and subdirs in

:

rm -rf

To ignore non-existent files:
=============================

rm -f

To remove a file with this inode:
=================================

find /tmp/ -inum 6666 -exec rm -i ‘{}’ ;
