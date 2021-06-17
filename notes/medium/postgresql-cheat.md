# Postgresql Cheat Sheet

PostgreSQL commands

### [CODEX](http://medium.com/codex)

## PostgreSQL Cheat Sheet

### **Each table is made up of rows and columns. If you think of a table as a grid, the column go from left to right across the grid and each entry of data is listed down as a row.**

Each row in a relational is uniquely identified by a primary key. This can be by one or more sets of column values. In most scenarios it is a single column, such as employeeID.

Every relational table has one primary key. Its purpose is to uniquely identify each row in the database. No two rows can have the same primary key value. The practical result of this is that you can select every single row by just knowing its primary key.

SQL Server UNIQUE constraints allow you to ensure that the data stored in a column, or a group of columns, is unique among the rows in a table.

Although both UNIQUE and [PRIMARY KEY](https://www.sqlservertutorial.net/sql-server-basics/sql-server-primary-key/) constraints enforce the uniqueness of data, you should use the UNIQUE constraint instead of PRIMARY KEY constraint when you want to enforce the uniqueness of a column, or a group of columns, that are not the primary key columns.

Different from PRIMARY KEY constraints, UNIQUE constraints allow NULL. Moreover, UNIQUE constraints treat the NULL as a regular value, therefore, it only allows one NULL per column.

![](https://cdn-images-1.medium.com/max/800/1*kgzq5NoL5ejBGvuZ4qLDaQ.png)![](https://cdn-images-1.medium.com/max/800/1*hr8DccnpiR2Uj5UI3iLsOQ.png)![](https://cdn-images-1.medium.com/max/800/1*RiWJpwpVMdge3Sqofn3srA.png)![](https://cdn-images-1.medium.com/max/800/1*GN5aSwENOvntpfk90rHYFg.png)Create a new [role](https://www.postgresqltutorial.com/postgresql-roles/):

```text
CREATE ROLE role_name;
```

Create a new role with a `username` and `password`:

```text
CREATE ROLE username NOINHERIT LOGIN PASSWORD password;
```

Change role for the current session to the `new_role`:

```text
SET ROLE new_role;
```

Allow `role_1` to set its role as `role_2:`

```text
GRANT role_2 TO role_1;
```

## Managing databases

[Create a new database](https://www.postgresqltutorial.com/postgresql-create-database/):

```text
CREATE DATABASE [IF NOT EXISTS] db_name;
```

[Delete a database permanently](https://www.postgresqltutorial.com/postgresql-drop-database/):

```text
DROP DATABASE [IF EXISTS] db_name;
```

## Managing tables

[Create a new table](https://www.postgresqltutorial.com/postgresql-create-table/) or a [temporary table](https://www.postgresqltutorial.com/postgresql-temporary-table/)

```text
CREATE [TEMP] TABLE [IF NOT EXISTS] table_name(
       pk SERIAL PRIMARY KEY,
   c1 type(size) NOT NULL,
   c2 type(size) NULL,
   ...
);
```

[Add a new column](https://www.postgresqltutorial.com/postgresql-add-column/) to a table:

```text
ALTER TABLE table_name ADD COLUMN new_column_name TYPE;
```

[Drop a column](https://www.postgresqltutorial.com/postgresql-drop-column/) in a table:

```text
ALTER TABLE table_name DROP COLUMN column_name;
```

[Rename a column](https://www.postgresqltutorial.com/postgresql-rename-column/):

```text
ALTER TABLE table_name RENAME column_name TO new_column_name;
```

Set or remove a default value for a column:

```text
ALTER TABLE table_name ALTER COLUMN [SET DEFAULT value | DROP DEFAULT]
```

Add a [primary key](https://www.postgresqltutorial.com/postgresql-primary-key/) to a table.

```text
ALTER TABLE table_name ADD PRIMARY KEY (column,...);
```

Remove the primary key from a table.

```text
ALTER TABLE table_name
DROP CONSTRAINT primary_key_constraint_name;
```

[Rename a table](https://www.postgresqltutorial.com/postgresql-rename-table/).

```text
ALTER TABLE table_name RENAME TO new_table_name;
```

[Drop a table](https://www.postgresqltutorial.com/postgresql-drop-table/) and its dependent objects:

```text
DROP TABLE [IF EXISTS] table_name CASCADE;
```

## Managing views

[Create a view](https://www.postgresqltutorial.com/managing-postgresql-views/):

```text
CREATE OR REPLACE view_name AS
query;
```

[Create a recursive view](https://www.postgresqltutorial.com/postgresql-recursive-view/):

```text
CREATE RECURSIVE VIEW view_name(column_list) AS
SELECT column_list;
```

[Create a materialized view](https://www.postgresqltutorial.com/postgresql-materialized-views/):

```text
CREATE MATERIALIZED VIEW view_name
AS
query
WITH [NO] DATA;
```

Refresh a materialized view:

```text
REFRESH MATERIALIZED VIEW CONCURRENTLY view_name;
```

Drop a view:

```text
DROP VIEW [ IF EXISTS ] view_name;
```

Drop a materialized view:

```text
DROP MATERIALIZED VIEW view_name;
```

Rename a view:

```text
ALTER VIEW view_name RENAME TO new_name;
```

## Managing indexes

Creating an index with the specified name on a table

```text
CREATE [UNIQUE] INDEX index_name
ON table (column,...)
```

Removing a specified index from a table

```text
DROP INDEX index_name;
```

## Querying data from tables

Query all data from a table:

```text
SELECT * FROM table_name;
```

Query data from specified columns of all rows in a table:

```text
SELECT column_list
FROM table;
```

Query data and select only unique rows:

```text
SELECT DISTINCT (column)
FROM table;
```

Query data from a table with a filter:

```text
SELECT *
FROM table
WHERE condition;
```

Assign an [alias](https://www.postgresqltutorial.com/postgresql-alias/) to a column in the result set:

```text
SELECT column_1 AS new_column_1, ...
FROM table;
```

Query data using the `LIKE` operator:

```text
SELECT * FROM table_name
WHERE column LIKE '%value%'
```

Query data using the `BETWEEN`operator:

```text
SELECT * FROM table_name
WHERE column BETWEEN low AND high;
```

Query data using the `IN`operator:

```text
SELECT * FROM table_name
WHERE column IN (value1, value2,...);
```

Constrain the returned rows with the `LIMIT` clause:

```text
SELECT * FROM table_name
LIMIT limit OFFSET offset
ORDER BY column_name;
```

Query data from multiple using the [inner join](https://www.postgresqltutorial.com/postgresql-inner-join/), [left join](https://www.postgresqltutorial.com/postgresql-left-join/), [full outer join](https://www.postgresqltutorial.com/postgresql-full-outer-join/), [cross join](https://www.postgresqltutorial.com/postgresql-cross-join/) and [natural join](https://www.postgresqltutorial.com/postgresql-natural-join/):

```text
SELECT *
FROM table1
INNER JOIN table2 ON conditions
SELECT *
FROM table1
LEFT JOIN table2 ON conditions
SELECT *
FROM table1
FULL OUTER JOIN table2 ON conditions
SELECT *
FROM table1
CROSS JOIN table2;
SELECT *
FROM table1
NATURAL JOIN table2;
```

Return the number of rows of a table.

```text
SELECT COUNT (*)
FROM table_name;
```

Sort rows in ascending or descending order:

```text
SELECT select_list
FROM table
ORDER BY column ASC [DESC], column2 ASC [DESC],...;
```

Group rows using `GROUP BY` clause.

```text
SELECT *
FROM table
GROUP BY column_1, column_2, ...;
```

Filter groups using the `HAVING` clause.

```text
SELECT *
FROM table
GROUP BY column_1
HAVING condition;
```

## Set operations

Combine the result set of two or more queries with `UNION` operator:

```text
SELECT * FROM table1
UNION
SELECT * FROM table2;
```

Minus a result set using `EXCEPT` operator:

```text
SELECT * FROM table1
EXCEPT
SELECT * FROM table2;
```

Get intersection of the result sets of two queries:

```text
SELECT * FROM table1
INTERSECT
SELECT * FROM table2;
```

## Modifying data

[Insert a new row into a table](https://www.postgresqltutorial.com/postgresql-insert/):

```text
INSERT INTO table(column1,column2,...)
VALUES(value_1,value_2,...);
```

Insert multiple rows into a table:

```text
INSERT INTO table_name(column1,column2,...)
VALUES(value_1,value_2,...),
      (value_1,value_2,...),
      (value_1,value_2,...)...
```

[Update](https://www.postgresqltutorial.com/postgresql-update/) data for all rows:

```text
UPDATE table_name
SET column_1 = value_1,
    ...;
```

Update data for a set of rows specified by a condition in the `WHERE` clause.

```text
UPDATE table
SET column_1 = value_1,
    ...
WHERE condition;
```

[Delete all rows](https://www.postgresqltutorial.com/postgresql-delete/) of a table:

```text
DELETE FROM table_name;
```

Delete specific rows based on a condition:

```text
DELETE FROM table_name
WHERE condition;
```

## Performance

Show the query plan for a query:

```text
EXPLAIN query;
```

Show and execute the query plan for a query:

```text
EXPLAIN ANALYZE query;
```

Collect statistics:

```text
ANALYZE table_name;
```

## Postgres & JSON:

## Creating the DB and the Table

```text
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db WITH ENCODING='UTF8' TEMPLATE template0;

DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  client VARCHAR NOT NULL,
  data JSONb NOT NULL
);
```

## Populating the DB

```text
INSERT INTO books(client, data) values( 'Joe', '{ "title": "Siddhartha", "author": { "first_name": "Herman", "last_name": "Hesse" } }' ); INSERT INTO books(client, data) values('Jenny', '{ "title": "Bryan Guner", "author": { "first_name": "Jack", "last_name": "Kerouac" } }'); INSERT INTO books(client, data) values('Jenny', '{ "title": "100 años de soledad", "author": { "first_name": "Gabo", "last_name": "Marquéz" } }');
```

Lets see everything inside the table books:

```text
SELECT * FROM books;
```

Output:

![](https://cdn-images-1.medium.com/max/800/0*GOQQ0qNGak2yIrtQ)\#\#\# `->` operator returns values out of JSON columns

Selecting 1 column:

```text
SELECT client, 
    data->'title' AS title
    FROM books;
```

Output:

![](https://cdn-images-1.medium.com/max/800/0*OIVYOfYcbVh65Mt5)Selecting 2 columns:

```text
SELECT client, 
   data->'title' AS title, data->'author' AS author
   FROM books;
```

Output:

![](https://cdn-images-1.medium.com/max/800/0*fEzPkSY8yGexKOk4)\#\#\# `->` vs `->>`

The `->` operator returns the original JSON type \(which might be an object\), whereas `->>` returns text.

## Return NESTED objects

You can use the `->` to return a nested object and thus chain the operators:

```text
SELECT client, 
   data->'author'->'last_name' AS author
   FROM books;
```

Output:

![](https://cdn-images-1.medium.com/max/800/0*lwy8bR7igaroMXeb)\#\#\# Filtering

Select rows based on a value inside your JSON:

```text
SELECT 
 client,
 data->'title' AS title
 FROM books
  WHERE data->'title' = '"Bryan Guner"';
```

Notice WHERE uses `->` so we must compare to JSON `'"Bryan Guner"'`

Or we could use `->>` and compare to `'Bryan Guner'`

Output:

![](https://cdn-images-1.medium.com/max/800/0*poASndLoU71qlXqE)\#\#\# Nested filtering

Find rows based on the value of a nested JSON object:

```text
SELECT 
 client,
 data->'title' AS title
 FROM books
  WHERE data->'author'->>'last_name' = 'Kerouac';
```

Output:

![](https://cdn-images-1.medium.com/max/800/0*R1kOhDK19ntdUYkq)\#\#\# A real world example

```text
CREATE TABLE events (
  name varchar(200),
  visitor_id varchar(200),
  properties json,
  browser json
);
```

We’re going to store events in this table, like pageviews. Each event has properties, which could be anything \(e.g. current page\) and also sends information about the browser \(like OS, screen resolution, etc\). Both of these are completely free form and could change over time \(as we think of extra stuff to track\).

```text
INSERT INTO events VALUES (
  'pageview', '1',
  '{ "page": "/" }',
  '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
);
INSERT INTO events VALUES (
  'pageview', '2',
  '{ "page": "/" }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1920, "y": 1200 } }'
);
INSERT INTO events VALUES (
  'pageview', '1',
  '{ "page": "/account" }',
  '{ "name": "Chrome", "os": "Mac", "resolution": { "x": 1440, "y": 900 } }'
);
INSERT INTO events VALUES (
  'purchase', '5',
  '{ "amount": 10 }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1024, "y": 768 } }'
);
INSERT INTO events VALUES (
  'purchase', '15',
  '{ "amount": 200 }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
);
INSERT INTO events VALUES (
  'purchase', '15',
  '{ "amount": 500 }',
  '{ "name": "Firefox", "os": "Windows", "resolution": { "x": 1280, "y": 800 } }'
);
```

Now lets select everything:

```text
SELECT * FROM events;
```

Output:

![](https://cdn-images-1.medium.com/max/800/0*ZPHfB4FxjSIlAVxL)\#\#\# JSON operators + PostgreSQL aggregate functions

Using the JSON operators, combined with traditional PostgreSQL aggregate functions, we can pull out whatever we want. You have the full might of an RDBMS at your disposal.

* Lets see browser usage:
* `SELECT browser->>'name' AS browser, count(browser) FROM events GROUP BY browser->>'name';`

Output:

![](https://cdn-images-1.medium.com/max/800/0*4lEv2DgUk33FeUgo)- Total revenue per visitor:

`SELECT visitor_id, SUM(CAST(properties->>'amount' AS integer)) AS total FROM events WHERE CAST(properties->>'amount' AS integer) > 0 GROUP BY visitor_id;`

Output:

![](https://cdn-images-1.medium.com/max/800/0*HxOS3CgwXBJ6A2FP)- Average screen resolution

* `SELECT AVG(CAST(browser->'resolution'->>'x' AS integer)) AS width, AVG(CAST(browser->'resolution'->>'y' AS integer)) AS height FROM events;`

Output:

![](https://cdn-images-1.medium.com/max/800/0*iyv4Iv4Rc8M8mwt1)\#\#\#\# If you found this guide helpful feel free to checkout my github/gists where I host similar content:

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

Or Checkout my personal Resource Site:

[**a/A-Student-Resources**  
 _Edit description_goofy-euclid-1cd736.netlify.app](https://goofy-euclid-1cd736.netlify.app/)

## If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

[**bgoonz’s gists**  
 _Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \|…_gist.github.com](https://gist.github.com/bgoonz)

[**bgoonz** **—** **Overview**  
 _Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \| Python \| React \| Node.js \| Express \| Sequelize…_github.com](https://github.com/bgoonz)

## Or Checkout my personal Resource Site:

[**Web-Dev-Resource-Hub**  
 _Edit description_web-dev-resource-hub.netlify.app](https://web-dev-resource-hub.netlify.app/)

By [Bryan Guner](https://medium.com/@bryanguner) on [March 5, 2021](https://medium.com/p/718b813d3e31).

[Canonical link](https://medium.com/@bryanguner/postgresql-cheat-sheet-718b813d3e31)

Exported from [Medium](https://medium.com) on May 23, 2021.

