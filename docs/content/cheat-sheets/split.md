To split a large text file into smaller files of 1000 lines each:
=================================================================

split -l 1000

To split a large binary file into smaller files of 10M each:
============================================================

split -b 10M

To consolidate split files into a single file:
==============================================

cat x\* &gt;
