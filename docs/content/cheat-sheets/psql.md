psql is the PostgreSQL terminal interface. The following commands were tested on version 9.5.
=============================================================================================

Connection options:
===================

-U username (if not specified current OS user is used).
=======================================================

-p port.
========

-h server hostname/address.
===========================

Connect to a specific database:
===============================

psql -U -h -d

Get databases on a server:
==========================

psql -U -h –list

Execute sql query and save output to file:
==========================================

psql -U -d -c ‘select \* from tableName;’ -o

Execute query and get tabular html output:
==========================================

psql -U -d -H -c ‘select \* from tableName;’

Execute query and save resulting rows to csv file:
==================================================

(if column names in the first row are not needed, remove the word ‘header’)
===========================================================================

psql -U -d -c ‘copy (select \* from tableName) to stdout with csv header;’ -o

Read commands from file:
========================

psql -f

Restore databases from file:
============================

psql -f
