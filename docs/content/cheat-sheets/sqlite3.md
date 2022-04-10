to create database and launch interactive shell:
================================================

sqlite3

to create table:
================

sqlite3 "create table os(id integer primary key, name text, year integer);”

to insert data:
===============

sqlite3 "insert into ‘os’ values(1,‘linux’,1991);”

to list tables:
===============

sqlite3 ".tables”

to describe table:
==================

sqlite3 ".schema ‘os’”

to view records in table:
=========================

sqlite3 "select \* from ‘os’;”

to view records in table conditionally:
=======================================

sqlite3 "select \* from ‘os’ where year=‘1991’;”

to view records with fuzzy matching:
====================================

sqlite3 "select \* from ‘os’ where year like ‘19%’;”
