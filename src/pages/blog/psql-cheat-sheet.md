---
title: PSQl Cheat Sheet
template: post
subtitle: Basic Commands
excerpt: Login to postgresql
date: 2022-04-04T17:27:00.746Z
image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/psql-diagram.jpg?raw=true
thumb_image: https://raw.githubusercontent.com/bgoonz/BGOONZ_BLOG_2.0/master/static/images/psql-diagram.jpg?raw=true
image_position: right
author: src/data/authors/bgoonz.yaml
categories:
  - src/data/categories/db.yaml
tags:
  - src/data/tags/psql.yaml
show_author_bio: true
related_posts:
    - src/pages/blog/psql-cheat-sheet.md
cmseditable: true
---

# 💻 PSQL💻

> source

## Basic Commands

### Login to postgresql

```sql
psql -U postgres
psql -d mydb -U myuser -W
psql -h myhost -d mydb -U myuser -W
psql -U myuser -h myhost "dbname=mydb sslmode=require" # ssl connection
```

### Default Admin Login

```bash
sudo -u postgres psql -U postgres
sudo -u postgres psql
```

### List databases on postgresql server

### Determine system tables

```bash
select * from pg_tables where tableowner = 'postgres';
```

### List databases from within a pg shell

### List databases from UNIX command prompt

### Describe a table

### Quit psql

### Switch postgres database within admin login shell

### Reset a user password as admin

```bash
alter user usertochange with password 'new_passwd';
```

### Show all tables

### List all Schemas

### List all users

### Load data into postgresql

```bash
psql -W -U username -H hostname < file.sql
```

### Dump (Backup) Data into file

```bash
pg_dump -W -U username -h hostname database_name > file.sql
```

### Increment a sequence

```bash
SELECT nextval('my_id_seq');
```

### Create new user

```bash
CREATE USER lemmy WITH PASSWORD 'myPassword';
# or

sudo -u postgres createuser lemmy -W
```

### Change user password

```bash
ALTER USER Postgres WITH PASSWORD 'mypass';
```

### Grant user createdb privilege

```bash
ALTER USER myuser WITH createdb;
```

### Create a superuser user

```bash
create user mysuper with password '1234' SUPERUSER
# or even better
create user mysuper with password '1234' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN REPLICATION;
# or
sudo -u postgres createuser lemmy -W -s
```

### Upgrade an existing user to superuser

```bash
alter user mysuper with superuser;
# or even better
alter user mysuper with SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN REPLICATION
```

### Show Database Version

### Change Database Owner

```bash
alter database database_name owner to new_owner;
```

### Copy a database

```bash
CREATE DATABASE newdb WITH TEMPLATE originaldb;
```

### View Database Connections

```bash
SELECT * FROM pg_stat_activity;
```

### View show data directory (works on 9.1+)

### Show run-time parameters

```bash
show all;
select * from pg_settings;
```

### Show the block size setting

```bash
# show block_size;
 block_size
------------
 8192
(1 row)
```

### Show stored procedure source

```bash
SELECT prosrc FROM pg_proc WHERE proname = 'procname'
```

### Grant examples

```sql
# readonly to all tables for myuser
grant select on all tables in schema public to myuser;
# all privileges on table1 and table2 to myuser
grant all privileges on table1, table2, table3 to myuser;
```

### Restore Postgres .dump file

```sql
pg_restore --verbose --clean --no-acl --no-owner -h localhost -U myuser -d mydb latest.dump
```

[source](https://gist.github.com/kagemusha/1569836)

### Find all active sessions and kill them (i.e. for when needing to drop or rename db)

Source: <http://stackoverflow.com/questions/5408156/how-to-drop-a-postgresql-database-if-there-are-active-connections-to-it>

```sql
# Postgres 9.6 and above
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'TARGET_DB'
 AND pid <> pg_backend_pid();

# Postgres 9.6 and below
SELECT pg_terminate_backend(pg_stat_activity.procpid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'TARGET_DB'
AND procpid <> pg_backend_pid();
```

## Handy Queries

```sql
-- List procedure/function
SELECT * FROM pg_proc WHERE proname='__procedurename__';

-- List view (including the definition)
SELECT * FROM pg_views WHERE viewname='__viewname__';

-- Show DB table space in use
SELECT pg_size_pretty(pg_total_relation_size('__table_name__'));:

-- Show DB space in use
SELECT pg_size_pretty(pg_database_size('__database_name__'));

-- Show current user's statement timeout
show statement_timeout;

-- Show table indexes
SELECT * FROM pg_indexes WHERE tablename='__table_name__' AND schemaname='__schema_name__';

-- Get all indexes from all tables of a schema:
SELECT
   t.relname AS table_name,
   i.relname AS index_name,
   a.attname AS column_name
FROM
   pg_class t,
   pg_class i,
   pg_index ix,
   pg_attribute a,
   pg_namespace n
WHERE
   t.oid = ix.indrelid
   AND i.oid = ix.indexrelid
   AND a.attrelid = t.oid
   AND a.attnum = ANY(ix.indkey)
   AND t.relnamespace = n.oid
   AND n.nspname = 'kartones'
ORDER BY
   t.relname,
   i.relname

-- Queries being executed at a certain DB
SELECT datname, application_name, pid, backend_start, query_start, state_change, state, query
  FROM pg_stat_activity
  WHERE datname='__database_name__';

-- Get all queries from all dbs waiting for data (might be hung)
SELECT * FROM pg_stat_activity WHERE waiting='t';
```

### Query analysis

```bash
-- See the query plan for the given query
EXPLAIN __query__

-- See and execute the query plan for the given query
EXPLAIN ANALYZE __query__

-- Collect statistics
ANALYZE [__table__]
```

## Querying Data

### From a Single Table

```bash
-- Query data in columns c1, c2 from a table
SELECT c1, c2 FROM t;

-- Query distinct rows from a table
SELECT DISTINCT c1
FROM t
WHERE condition;

-- Sort the result set in ascending or descending order
SELECT c1, c2
FROM t
ORDER BY c1 ASC [DESC];

-- Skip offset of rows and return the next n rows
SELECT c1, c2
FROM t
ORDER BY c1
LIMIT n
OFFSET offset;

-- Group rows using an aggregate function
SELECT c1, aggregate(c2)
FROM t
GROUP BY c1;

-- Filter groups using HAVING clause
SELECT c1, aggregate(c2) FROM t
GROUP BY c1
HAVING condition;
```

### From Multiple Tables

```sql
-- Inner join t1 and t2
SELECT c1, c2
FROM t1
INNER JOIN t2
ON condition;

-- Left join t1 and t1
SELECT c1, c2
FROM t1
LEFT JOIN t2
ON condition;

-- Right join t1 and t2
SELECT c1, c2
FROM t1
RIGHT JOIN t2
ON condition;

-- Perform full outer join
SELECT c1, c2
FROM t1
FULL OUTER JOIN t2
ON condition;

-- Produce a Cartesian product of rows in tables
SELECT c1, c2
FROM t1
CROSS JOIN t2;

-- Another way to perform cross join
SELECT c1, c2
FROM t1, t2;

-- Join t1 to itself using INNER JOIN clause
SELECT c1, c2
FROM t1 A
INNER JOIN t2 B ON condition
```

### Using SQL Operators

```sql
-- Combine rows from two queries
SELECT c1, c2 FROM t1
UNION [ALL]
SELECT c1, c2 FROM t2;

-- Return the intersection of two queries
SELECT c1, c2 FROM t1
INTERSECT
SELECT c1, c2 FROM t2;

-- Subtract a result set from another result set
SELECT c1, c2 FROM t1
EXCEPT
SELECT c1, c2 FROM t2;

-- Query rows using pattern matching %, _
SELECT c1, c2 FROM t1
WHERE c1 [NOT] LIKE pattern;

-- Query rows in a list
SELECT c1, c2
FROM t
WHERE c1
[NOT] IN value_list;

-- Query rows between two values
SELECT c1, c2
FROM t
WHERE c1
BETWEEN low AND high;

-- Check if values in a table is NULL or not
SELECT c1, c2 FROM t
WHERE c1 IS [NOT] NULL;
```

## Source

- [PostgreSQL 9.6.0 Documentation](https://www.postgresql.org/docs/9.6/static/app-psql.html)
- [PostgreSQL Exercises](https://pgexercises.com)
- [PostgreSQL Tutorial](http://www.postgresqltutorial.com/postgresql-cheat-sheets)
