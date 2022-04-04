To dump a database to a file (Note that your password will appear in your command history!):
============================================================================================

mysqldump -u -p &gt; db.sql

To dump a database to a file:
=============================

mysqldump -u -p &gt; db.sql

To dump a database to a .tgz file (Note that your password will appear in your command history!):
=================================================================================================

mysqldump -u -p | gzip -9 &gt; db.sql

To dump a database to a .tgz file:
==================================

mysqldump -u -p | gzip -9 &gt; db.sql

To dump all databases to a file (Note that your password will appear in your command history!):
===============================================================================================

mysqldump -u -p –all-databases &gt; all-databases.sql

To dump all databases to a file:
================================

mysqldump -u -p –all-databases &gt; all-databases.sql

To export the database structure only:
======================================

mysqldump –no-data -u -p &gt; dump\_file

To export the database data only:
=================================

mysqldump –no-create-info -u -p &gt; dump\_file
