Express APIs Part 2 (SQL):
==========================

REST is a generally agreed-upon set of principles and constraints. They are recommendations, not a standard.

------------------------------------------------------------------------

### Express APIs Part 2 (SQL):

#### `REST` is a generally agreed-upon set of principles and constraints. They are **recommendations**, not a standard.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Q9Bpk8kh1rFnDzFE.png" class="graf-image" /></figure>### REVIEW:

`REST` is a generally agreed-upon set of principles and constraints. They are **recommendations**, not a standard.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### Part 1:

<a href="https://medium.com/codex/prerequisites-to-writing-express-apis-75e3267b284a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/prerequisites-to-writing-express-apis-75e3267b284a"><strong>The ExpressJS Way To Write APIs</strong><br />
<em>This article will cover the basics of express from the perspective of a beginner without concerning its self with the…</em>medium.com</a><a href="https://medium.com/codex/prerequisites-to-writing-express-apis-75e3267b284a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### 0 — &gt; Explain the role of a foreign key

### Overview

**Foreign keys** are a type of table field used for creating links between tables. Like **primary keys**, they are most often integers that identify (rather than store) data. However, whereas a primary key is used to id rows in a table, foreign keys are used to connect a record in one table to a record in a second table.

### TRY:

Consider the following `farms` and `ranchers` tables.

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*PQ7y7IID75FfUm3RyVb2_A.png" class="graf-image" /></figure>

The `farm_id` in the `ranchers` table is an example of a `foreign key`. Each entry in the `farm_id` (foreign key) column corresponds to an `id` (primary key) in the `farms` table. This allows us to track which farm each rancher belongs to while keeping the tables normalized.

If we could only see the `ranchers` table, we would know that John, Jane, and Jen all work together and that Jim and Jay also work together. However, to know where any of them work, we would need to look at the `farms` table.

### Challenge

Open <a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_in" class="markup--anchor markup--p-anchor">SQLTryIT</a>

How many records in the products table belong to the category “confections”?

### Objective 2 — query data from multiple tables

Now that we understand the basics of querying data from a single table, let’s move on to selecting data from multiple tables using JOIN operations.

### REVIEW:

We can use a `JOIN` to combine query data from multiple tables using a single `SELECT` statement.

There are different types of joins; some are listed below:

-   <span id="9c7e">inner joins.</span>
-   <span id="7cd3">outer joins.</span>
-   <span id="96e6">left joins.</span>
-   <span id="0e55">right joins.</span>
-   <span id="d582">cross joins.</span>
-   <span id="6716">non-equality joins.</span>
-   <span id="b7f0">self joins.</span>

Using `joins` requires that the two tables of interest contain at least one field with shared information. For example, if a *departments* table has an *id* field, and an employee table has a *department\_id* field, and the values that exist in the *id* column of the *departments* table live in the *department\_id* field of the employee table, we can use those fields to join both tables like so:

    select * from employees
    join departments on employees.department_id = departments.id

This query will return the data from both tables for every instance where the `ON` condition is true. If there are employees with no value for department*id or where the value stored in the field does not correspond to an existing id in the* departments *table, then that record will NOT be returned. In a similar fashion, any records from the* departments *table that don't have an employee associated with them will also be omitted from the results. Basically, if the* id\* does not show as the value of department\_id for an employee, it won't be able to join.

We can shorten the condition by giving the table names an alias. This is a common practice. Below is the same example using aliases, picking which fields to return and sorting the results:

Notice that we can take advantage of white space and indentation to make queries more readable.

There are several ways of writing joins, but the one shown here should work on all database management systems and avoid some pitfalls, so we recommend it.

The syntax for performing a similar join using Knex is as follows:

### TRY:

A good explanation of how the different types of joins can be seen <a href="https://www.w3resource.com/sql/joins/sql-joins.php" class="markup--anchor markup--p-anchor">in this article from w3resource.com (Links to an external site.)</a>.

### Challenge

Use <a href="https://www.w3schools.com/Sql/tryit.asp?filename=trysql_select_top" class="markup--anchor markup--p-anchor">this online tool</a> to write the following queries:

-   <span id="9ccf">list the products, including their category name.</span>
-   <span id="b07f">list the products, including the supplier name.</span>
-   <span id="7b08">list the products, including both the category name and supplier name.</span>

### What is SQL Joins?

An SQL JOIN clause combines rows from two or more tables. It creates a set of rows in a temporary table.

### How to Join two tables in SQL?

A JOIN works on two or more tables if they have at least one common field and have a relationship between them.

JOIN keeps the base tables (structure and data) unchanged.

### Join vs. Subquery

-   <span id="eeea">JOINs are faster than a subquery and it is very rare that the opposite.</span>
-   <span id="3b2e">In JOINs the RDBMS calculates an execution plan, that can predict, what data should be loaded and how much it will take to processed and as a result this process save some times, unlike the subquery there is no pre-process calculation and run all the queries and load all their data to do the processing.</span>
-   <span id="84ce">A JOIN is checked conditions first and then put it into table and displays; where as a subquery take separate temp table internally and checking condition.</span>
-   <span id="3002">When joins are using, there should be connection between two or more than two tables and each table has a relation with other while subquery means query inside another query, has no need to relation, it works on columns and conditions.</span>

### SQL JOINS: EQUI JOIN and NON EQUI JOIN

The are two types of SQL JOINS — EQUI JOIN and NON EQUI JOIN

1.  <span id="31e6">SQL EQUI JOIN :</span>

The SQL EQUI JOIN is a simple SQL join uses the equal sign(=) as the comparison operator for the condition. It has two types — SQL Outer join and SQL Inner join.

1.  <span id="d86b">SQL NON EQUI JOIN :</span>

The **SQL NON EQUI JOIN** is a join uses comparison operator other than the equal sign like &gt;, &lt;, &gt;=, &lt;= with the condition.

**SQL EQUI JOIN : INNER JOIN and OUTER JOIN**

The SQL EQUI JOIN can be classified into two types — INNER JOIN and OUTER JOIN

1.  <span id="c9b5">SQL INNER JOIN</span>

This type of EQUI JOIN returns all rows from tables where the key record of one table is equal to the key records of another table.

1.  <span id="6bc6">SQL OUTER JOIN</span>

This type of EQUI JOIN returns all rows from one table and only those rows from the secondary table where the joined condition is satisfying i.e. the columns are equal in both tables.

In order to perform a JOIN query, the required information we need are:

**a)** The name of the tables**b)** Name of the columns of two or more tables, based on which a condition will perform.

**Syntax:**

    FROM table1
    join_type table2
    [ON (join_condition)]

**Parameters:**

<a href="https://www.notion.so/3e2d9e2f028e4b7abf2da81156a54364" class="markup--anchor markup--p-anchor">Untitled</a>

**Pictorial Presentation of SQL Joins:**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*bbwqJEpV2a9WZG-t.gif" class="graf-image" /></figure>**Example:**

**Sample table: company**

**Sample table: foods**

To join two tables ‘company’ and ‘foods’, the following SQL statement can be used :

**SQL Code:**

    SELECT  company.company_id,company.company_name,
    foods.item_id,foods.item_name
    FROM company,foods;

Copy

Output:

    COMPAN COMPANY_NAME              ITEM_ID  ITEM_NAME
    ------ ------------------------- -------- ---------------
    18     Order All                 1        Chex Mix
    18     Order All                 6        Cheez-It
    18     Order All                 2        BN Biscuit
    18     Order All                 3        Mighty Munch
    18     Order All                 4        Pot Rice
    18     Order All                 5        Jaffa Cakes
    18     Order All                 7        Salt n Shake
    15     Jack Hill Ltd             1        Chex Mix
    15     Jack Hill Ltd             6        Cheez-It
    15     Jack Hill Ltd             2        BN Biscuit
    15     Jack Hill Ltd             3        Mighty Munch
    15     Jack Hill Ltd             4        Pot Rice
    15     Jack Hill Ltd             5        Jaffa Cakes
    15     Jack Hill Ltd             7        Salt n Shake
    16     Akas Foods                1        Chex Mix
    16     Akas Foods                6        Cheez-It
    16     Akas Foods                2        BN Biscuit
    16     Akas Foods                3        Mighty Munch
    16     Akas Foods                4        Pot Rice
    16     Akas Foods                5        Jaffa Cakes
    16     Akas Foods                7        Salt n Shake
    .........
    .........
    .........

**JOINS: Relational Databases**

-   <span id="74c4"><a href="https://www.w3resource.com/oracle/joins/index.php" class="markup--anchor markup--li-anchor"><strong>Oracle JOINS</strong></a></span>
-   <span id="f8da"><a href="https://www.w3resource.com/mysql/advance-query-in-mysql/mysql-joins.php" class="markup--anchor markup--li-anchor"><strong>MySQL JOINS</strong></a></span>
-   <span id="33a5"><a href="https://www.w3resource.com/PostgreSQL/postgresql-join.php" class="markup--anchor markup--li-anchor"><strong>PostgreSQL JOINS</strong></a></span>
-   <span id="b578"><a href="https://www.w3resource.com/sqlite/sqlite-inner-join.php" class="markup--anchor markup--li-anchor"><strong>SQLite JOINS</strong></a></span>

**Key points to remember:**

*Click on the following to get the slides presentation -*

<figure><img src="https://cdn-images-1.medium.com/max/800/0*lP_nQo6VtVu_68nx.png" class="graf-image" /></figure>### **Practice SQL Exercises**

-   <span id="0765"><a href="https://www.w3resource.com/sql-exercises/index.php" class="markup--anchor markup--li-anchor"><strong>SQL Exercises, Practice, Solution</strong></a></span>
-   <span id="4cd9"><a href="https://www.w3resource.com/sql-exercises/sql-retrieve-from-table.php" class="markup--anchor markup--li-anchor"><strong>SQL Retrieve data from tables [33 Exercises]</strong></a></span>
-   <span id="7204"><a href="https://www.w3resource.com/sql-exercises/sql-boolean-operators.php" class="markup--anchor markup--li-anchor"><strong>SQL Boolean and Relational operators [12 Exercises]</strong></a></span>
-   <span id="3d4e"><a href="https://www.w3resource.com/sql-exercises/sql-wildcard-special-operators.php" class="markup--anchor markup--li-anchor"><strong>SQL Wildcard and Special operators [22 Exercises]</strong></a></span>
-   <span id="7afb"><a href="https://www.w3resource.com/sql-exercises/sql-aggregate-functions.php" class="markup--anchor markup--li-anchor"><strong>SQL Aggregate Functions [25 Exercises]</strong></a></span>
-   <span id="cc71"><a href="https://www.w3resource.com/sql-exercises/sql-fromatting-output-exercises.php" class="markup--anchor markup--li-anchor"><strong>SQL Formatting query output [10 Exercises]</strong></a></span>
-   <span id="77bf"><a href="https://www.w3resource.com/sql/joins/s/sql-exercises/ql-exercises-quering-on-multiple-table.php" class="markup--anchor markup--li-anchor"><strong>SQL Quering on Multiple Tables [7 Exercises]</strong></a></span>
-   <span id="0bc2"><a href="https://www.w3resource.com/sql-exercises/sorting-and-filtering-hr/index.php" class="markup--anchor markup--li-anchor"><strong>FILTERING and SORTING on HR Database [38 Exercises]</strong></a></span>

### SQL JOINS

-   <span id="84a2"><a href="https://www.w3resource.com/sql-exercises/sql-joins-exercises.php" class="markup--anchor markup--li-anchor"><strong>SQL JOINS [29 Exercises]</strong></a></span>
-   <span id="f97b"><a href="https://www.w3resource.com/sql-exercises/joins-hr/index.php" class="markup--anchor markup--li-anchor"><strong>SQL JOINS on HR Database [27 Exercises]</strong></a></span>

### SQL SUBQUERIES

-   <span id="423b"><a href="https://www.w3resource.com/sql-exercises/subqueries/index.php" class="markup--anchor markup--li-anchor"><strong>SQL SUBQUERIES [39 Exercises]</strong></a></span>
-   <span id="a4d7"><a href="https://www.w3resource.com/sql-exercises/sql-subqueries-exercises.php" class="markup--anchor markup--li-anchor"><strong>SQL SUBQUERIES on HR Database [55 Exercises]</strong></a></span>
-   <span id="2c29"><a href="https://www.w3resource.com/sql-exercises/union/sql-union.php" class="markup--anchor markup--li-anchor"><strong>SQL Union[9 Exercises]</strong></a></span>
-   <span id="92c5"><a href="https://www.w3resource.com/sql-exercises/view/sql-view.php" class="markup--anchor markup--li-anchor"><strong>SQL View[16 Exercises]</strong></a></span>
-   <span id="d3e5"><a href="https://www.w3resource.com/sql-exercises/sql-user-management.php" class="markup--anchor markup--li-anchor"><strong>SQL User Account Management [16 Exercise]</strong></a></span>

### Movie Database

-   <span id="5198"><a href="https://www.w3resource.com/sql-exercises/movie-database-exercise/basic-exercises-on-movie-database.php" class="markup--anchor markup--li-anchor"><strong>BASIC queries on movie Database [10 Exercises]</strong></a></span>
-   <span id="ddd5"><a href="https://www.w3resource.com/sql-exercises/movie-database-exercise/subqueries-exercises-on-movie-database.php" class="markup--anchor markup--li-anchor"><strong>SUBQUERIES on movie Database [16 Exercises]</strong></a></span>
-   <span id="5363"><a href="https://www.w3resource.com/sql-exercises/movie-database-exercise/joins-exercises-on-movie-database.php" class="markup--anchor markup--li-anchor"><strong>JOINS on movie Database [24 Exercises]</strong></a></span>

### Soccer Database

-   <span id="a586"><a href="https://www.w3resource.com/sql-exercises/soccer-database-exercise/index.php" class="markup--anchor markup--li-anchor"><strong>Introduction</strong></a></span>
-   <span id="d585"><a href="https://www.w3resource.com/sql-exercises/soccer-database-exercise/basic-exercises-on-soccer-database.php" class="markup--anchor markup--li-anchor"><strong>BASIC queries on soccer Database [29 Exercises]</strong></a></span>
-   <span id="b626"><a href="https://www.w3resource.com/sql-exercises/soccer-database-exercise/subqueries-exercises-on-soccer-database.php" class="markup--anchor markup--li-anchor"><strong>SUBQUERIES on soccer Database [33 Exercises]</strong></a></span>
-   <span id="95e1"><a href="https://www.w3resource.com/sql-exercises/soccer-database-exercise/joins-exercises-on-soccer-database.php" class="markup--anchor markup--li-anchor"><strong>JOINS queries on soccer Database [61 Exercises]</strong></a></span>

### Hospital Database

-   <span id="788d"><a href="https://www.w3resource.com/sql-exercises/hospital-database-exercise/index.php" class="markup--anchor markup--li-anchor"><strong>Introduction</strong></a></span>
-   <span id="0c32"><a href="https://www.w3resource.com/sql-exercises/hospital-database-exercise/sql-exercise-on-hospital-database.php" class="markup--anchor markup--li-anchor"><strong>BASIC, SUBQUERIES, and JOINS [39 Exercises]</strong></a></span>

### Employee Database

-   <span id="c6fb"><a href="https://www.w3resource.com/sql-exercises/employee-database-exercise/index.php" class="markup--anchor markup--li-anchor"><strong>BASIC queries on employee Database [115 Exercises]</strong></a></span>
-   <span id="0419"><a href="https://www.w3resource.com/sql-exercises/employee-database-exercise/subqueries-exercises-on-employee-database.php" class="markup--anchor markup--li-anchor"><strong>SUBQUERIES on employee Database [77 Exercises]</strong></a></span>
-   <span id="cb3e">rite database access methods</span>

### Overview

While we can write database code directly into our endpoints, best practices dictate that all database logic exists in separate, modular methods. These files containing database access helpers are often called **models**

### TRY:

To handle CRUD operations for a single resource, we would want to create a **model** (or database access file) containing the following methods:

    function find() {
    }

    function findById(id) {
    }

    function add(user) {
    }

    function update(changes, id) {
    }

    function remove(id) {
    }

Each of these functions would use Knex logic to perform the necessary database operation.

    function find() {
      return db('users');
    }

For each method, we can choose what value to return. For example, we may prefer `findById()` to return a single `user` object rather than an array.

    function findById(id) {
    // first() returns the first entry in the db matching the query
      return db('users').where({ id }).first();
    }

We can also use existing methods like `findById()` to help `add()` return the new user (instead of just the id).

Once all methods are written as desired, we can export them like so:

    module.exports = {
      find,
      findById,
      add,
      update,
      delete,
    }

…and use the helpers in our endpoints

There should no be `knex` code in the endpoints themselves.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### A database is a collection of data organized for easy retrieval and manipulation.

We’re concerned only with digital databases, those that run on computers or other electronic devices. Digital databases have been around since the 1960s. Relational databases, those which store “related” data, are the oldest and most common type of database in use today.

### Data Persistence

A database is often necessary because our application or code requires data persistence. This term refers to data that is infrequently accessed and not likely to be modified. In less technical terms, the information will be safely stored and remain untouched unless intentionally modified.

A familiar example of non-persistent data would be JavaScript objects and arrays, which reset each time the code runs.

### Relational Databases

In relational databases, **the data is stored in tabular format grouped into rows and columns** (similar to spreadsheets). A collection of rows is called a table. Each row represents a single record in the table and is made up of one or more columns.

These kinds of databases are relational because a *relation* is a mathematical idea equivalent to a table. So relational databases are databases that store their data in tables.

### Tables

**Below are some basic facts about tables:**

> Tables organize data in rows and columns.

> Each row in a table represents one distinct record.

> Each column represents a field or attribute that is common to all the records.

> Fields should have a descriptive name and a data type appropriate for the attribute it represents.

> Tables usually have more rows than columns.

> Tables have primary keys that uniquely identify each row.

> Foreign keys represent the relationships with other tables.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*7ZPYzWNRcs2PBL6p.jpg" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### SQL:

SQL is a standard language, which means that it almost certainly will be supported, no matter how your database is managed. That said, be aware that the SQL language can vary depending on database management tools. This lesson focuses on a set of core commands that never change. Learning the standard commands is an excellent introduction since the knowledge transfers between database products.

The syntax for SQL is English-like and requires fewer symbols than programming languages like C, Java, and JavaScript.

It is declarative and concise, which means there is a lot less to learn to use it effectively.

When learning SQL, it is helpful to understand that each command is designed for a different purpose. If we classify the commands by purpose, we’ll end up with the following sub-categories of SQL:

-   <span id="aba8">**Data Definition Language (DDL)**: used to modify database objects. Some examples are: `CREATE TABLE`, `ALTER TABLE`, and `DROP TABLE`.</span>
-   <span id="4f3f">**Data Manipulation Language (DML)**: used to manipulate the data stored in the database. Some examples are: `INSERT`, `UPDATE`, and `DELETE`.</span>
-   <span id="e1f2">**Data Query Language (DQL)**: used to ask questions about the data stored in the database. The most commonly used SQL command is `SELECT`, and it falls in this category.</span>
-   <span id="4474">**Data Control Language (DCL)**: used to manage database security and user’s access to data. These commands fall into the realm of Database Administrators. Some examples are `GRANT` and `REVOKE`.</span>
-   <span id="921b">**Transaction Control Commands**: used for managing groups of statements that must execute as a unit or not execute at all. Examples are `COMMIT` and `ROLLBACK`.</span>

As a developer, you’ll need to get familiar with DDL and become proficient using DML and DQL. This lesson will cover only DML and DQL commands.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>The four SQL operations covered in this section will allow a user to **query**, **insert**, and **modify** a database table.

### Query

A **query** is a SQL statement used to retrieve data from a database. The command used to write queries is `SELECT`, and it is one of the most commonly used SQL commands.

The basic syntax for a `SELECT` statement is this:

    select <selection> from <table name>;

To see all the fields on a table, we can use a `*` as the `selection`.

    select * from employees;

The preceding statement would show all the records and all the columns for each record in the `employees` table.

To pick the fields we want to see, we use a comma-separated list:

    select first_name, last_name, salary from employees;

The return of that statement would hold all records from the listed fields.

We can extend the `SELECT` command's capabilities using `clauses` for things like filtering, sorting, pagination, and more.

It is possible to query multiple tables in a single query. But, in this section, we only perform queries on a single table. We will cover performing queries on multiple tables in another section.

### Insert

To **insert** new data into a table, we’ll use the `INSERT` command. The basic syntax for an `INSERT` statement is this:

    insert into <table name> (<selection>) values (<values>)

Using this formula, we can specify which values will be inserted into which fields like so:

    insert into Customers (Country, CustomerName, ContactName, Address, City, PostalCode)
    values ('USA', 'WebDev School', 'Austen Allred', '1 WebDev Court', 'Provo', '84601');

### Modify

**Modifying** a database consists of updating and removing records. For these operations, we’ll use `UPDATE` and `DELETE` commands, respectively.

The basic syntax for an `UPDATE` statement is:

    update <table name> set <field> = <value> where <condition>;

The basic syntax for a `DELETE` statement is:

    delete from <table name> where <condition>;

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### Filtering results using WHERE clause

When querying a database, the default result will be every entry in the given table. However, often, we are looking for a specific record or a set of records that meets certain criteria.

A `WHERE` clause can help in both cases.

Here’s an example where we might only want to find customers living in Berlin.

    select City, CustomerName, ContactName
    from Customers
    where City = 'Berlin'

We can also chain together `WHERE` clauses using `OR` and `AND` to limit our results further.

The following query includes only records that match both criteria.

    select City, CustomerName, ContactName
    from Customers
    where Country = 'France' and City = 'Paris'

And this query includes records that match either criteria.

    select City, CustomerName, ContactName
    from Customers
    where Country = 'France' or City = 'Paris'

These operators can be combined and grouped with parentheses to add complex selection logic. They behave similarly to what you’re used to in programming languages.

You can read more about SQLite operators from <a href="https://www.w3resource.com/sqlite/operators.php" class="markup--anchor markup--p-anchor">w3resource (Links to an external site.)</a>.

To select a single record, we can use a `WHERE` statement with a uniquely identifying field, like an id:

    select * from Customers
    where CustomerId=3;

Other comparison operators also work in `WHERE` conditions, such as `>`, `<`, `<=`, and `>=`.

    select * from employees where salary >= 50000

### Ordering results using the ORDER BY clause

Query results are shown in the same order the data was inserted. To control how the data is sorted, we can use the `ORDER BY` clause. Let's see an example.

    -- sorts the results first by salary in descending order, then by the last name in ascending order
    select * from employees order by salary desc, last_name;

We can pass a list of field names to `order by` and optionally choose `asc` or `desc` for the sort direction. The default is `asc`, so it doesn't need to be specified.

Some SQL engines also support using field abbreviations when sorting.

    select name, salary, department from employees order by 3, 2 desc;

In this case, the results are sorted by the department in ascending order first and then by salary in descending order. The numbers refer to the fields’ position in the *selection* portion of the query, so `1` would be *name*, `2` would be *salary*, and so on.

Note that the `WHERE` clause should come after the `FROM` clause. The `ORDER BY` clause always goes last.

    select * from employees where salary > 50000 order by last_name;

### Limiting results using the LIMIT clause

When we wish to see only a limited number of records, we can use a `LIMIT` clause.

The following returns the first ten records in the products table:

    select * from products
    limit 10

`LIMIT` clauses are often used in conjunction with `ORDER BY`. The following shows us the five cheapest products:

    select * from products
    order by price desc
    limit 5

### Inserting data using INSERT

An insert statement adds a new record to the database. All non-null fields must be listed out in the same order as their values. Some fields, like ids and timestamps, may be auto-generated and do not need to be included in an `INSERT` statement.

    -- we can add fields in any order; the values need to be in the same ordinal position
    -- the id will be assigned automatically
      insert into Customers (Country, CustomerName, ContactName, Address, City, PostalCode)
      values ('USA', 'WebDev School', 'Austen Allred', '1 WebDev Court', 'Provo', '84601');

The values in an insert statement must not violate any restrictions and constraints that the database has in place, such as expected datatypes. We will learn more about constraints and schema design in a later section.

### Modifying recording using UPDATE

When modifying a record, we identify a single record or a set of records to update using a `WHERE` clause. Then we can set the new value(s) in place.

    update Customers
    set City = 'Silicon Valley', Country = 'USA'
    where CustomerName = 'WebDev School'

Technically the `WHERE` clause is not required, but leaving it off would result in every record within the table receiving the update.

### Removing records using DELETE

When removing a record or set of records, we need only identify which record(s) to remove using a `WHERE` clause:

    delete from Customers
    where CustomerName = 'WebDev School`;

Once again, the `WHERE` clause is not required, but leaving it off would remove every record in the table, so it's essential.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>Raw SQL is a critical baseline skill. However, Node developers generally use an **Object Relational Mapper (ORM)** or **query builder** to write database commands in a backend codebase. Both **ORMs** and **query builders** are JavaScript libraries that allow us to interface with the database using a JavaScript version of the SQL language.

For example, instead of a raw SQL `SELECT`:

    SELECT * FROM users;

We could use a query builder to write the same logic in JavaScript:

    db.select('*').from('users');

**Query builders** are lightweight and easy to get off the ground, whereas **ORMs** use an object-oriented model and provide more heavy lifting within their rigid structure.

We will use a **query builder** called <a href="https://knexjs.org/" class="markup--anchor markup--p-anchor">knex.js (Links to an external site.)</a>.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### Knex Setup

To use Knex in a repository, we’ll need to add two libraries:

    npm install knex sqlite3

`knex` is our query builder library, and `sqlite3` allows us to interface with a `sqlite` database. We'll learn more about `sqlite` and other **database management systems** in the following module. For now, know that you need both libraries.

Next, we use Knex to set up a config file:

    const knex = require('knex');

    const config = {
      client: 'sqlite3',
      connection: {
        filename: './data/posts.db3',
      },
      useNullAsDefault: true,
    };

    module.exports = knex(config);

To use the query builder elsewhere in our code, we need to call `knex` and pass in a `config` object. We'll be discussing Knex configuration more in a future module. Still, we only need the `client`, `connection`, and `useNullAsDefault` keys as shown above. The `filename` should point towards the pre-existing database file, which can be recognized by the `.db3` extension.

**GOTCHA**: The file path to the database should be with respect to the **root** of the repo, not the configuration file itself.

Once Knex is configured, we can import the above config file anywhere in our codebase to access the database.

    const db = require('../data/db-config.js);

The `db` object provides methods that allow us to begin building queries.

### SELECT using Knex

In Knex, the equivalent of `SELECT * FROM users` is:

    db.select('*').from('users');

There’s a simpler way to write the same command:

    db('users');

Using this, we could write a `GET` endpoint.

    router.get('/api/users', (req, res) => {
      db('users')
      .then(users => {
        res.json(users);
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to get users' });
      });
    });

**NOTE**: All Knex queries return promises.

Knex also allows for a where clause. In Knex, we could write `SELECT * FROM users WHERE id=1` as

    db('users').where({ id: 1 });

This method will resolve to an array containing a single entry like so: `[{ id: 1, name: 'bill' }]`.

Using this, we might add a `GET` endpoint where a specific user:

    server.get('api/users/:id', (req, res) => {
      const { id } = req.params;

    db('users').where({ id })
      .then(users => {
        // we must check the length to find our if our user exists
        if (users.length) {
          res.json(users);
        } else {
          res.status(404).json({ message: 'Could not find user with given id.' })
       })
      .catch (err => {
        res.status(500).json({ message: 'Failed to get user' });
      });
    });

### INSERT using Knex

In Knex, the equivalent of `INSERT INTO users (name, age) VALUES ('Eva', 32)` is:

    db('users').insert({ name: 'Eva', age: 32 });

The insert method in Knex will resolve to an array containing the newly created id for that user like so: `[3]`.

### UPDATE using Knex

In knex, the equivalent of `UPDATE users SET name='Ava', age=33 WHERE id=3;` is:

    db('users').where({ id: 3 })
    .update({name: 'Ava', age: 33 });

Note that the `where` method comes before `update`, unlike in SQL.

Update will resolve to a count of rows updated.

### DELETE using Knex

In Knex, the equivalent of `DELETE FROM users WHERE age=33;` is:

    db('users').where({ age: 33}).del();

Once again, the `where` must come before the `del`. This method will resolve to a count of records removed.

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### Here’s a small project you can practice with.

SQLlite Studio is an application that allows us to create, open, view, and modify SQLite databases. To fully understand what SQLite Studio is and how it works, we must also understand the concept of the Database Management Systems (DBMS).

### What is a DBMS?

To manage digital databases we use specialized software called **D**ata**B**ase **M**anagement **S**ystems (DBMS). These systems typically run on servers and are managed by **D**ata**B**ase **A**dministrators (DBAs).

In less technical terms, we need a type of software that will allow us to create, access, and generally manage our databases. In the world of relational databases, we specifically use Relational Database Mangement Systems (RDBMs). Some examples are Postgres, SQLite, MySQL, and Oracle.

Choosing a DBMS determines everything from how you set up your database, to where and how the data is stored, to what SQL commands you can use. Most systems share the core of the SQL language that you’ve already learned.

In other words, you can expect `SELECT`, `UPDATE`, `INSERT`, `WHERE` , and the like to be the same across all DBMSs, but the subtleties of the language may vary.

### What is SQLite?

**SQLite** is the DBMS, as the name suggests, it is a more lightweight system and thus easier to get set up than some others.

SQLite allows us to store databases as single files. SQLite projects have a `.db3` extension. That is the database.

SQLite is *not a database* (like relational, graph, or document are databases) but rather *a database management system*.

### Opening an existing database in SQLite Studio

One useful visual interface we might use with a SQLite database is called **SQLite Studio**. <a href="https://sqlitestudio.pl/" class="markup--anchor markup--p-anchor">Install SQLITE Studio here. (Links to an external site.)</a>

Once installed, we can use SQLite Studio to open any `.db3` file from a previous lesson. We may view the tables, view the data, and even make changes to the database.

For a more detailed look at SQLite Studio.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>A **database schema** is the shape of our database. It defines what tables we’ll have, which columns should exist within the tables and any restrictions on each column.

A well-designed database schema keeps the data well organized and can help ensure high-quality data.

Note that while schema design is usually left to Database Administrators (DBAs), understanding schema helps when designing APIs and database logic. And in a smaller team, this step may fall on the developer.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>For a look at schema design in SQLite Studio.

When designing a single table, we need to ask three things:

-   <span id="2e1a">What fields (or columns) are present?</span>
-   <span id="52e7">What type of data do we expect for each field?</span>
-   <span id="8aff">Are there other restrictions needed for each column?</span>

Looking at the following schema diagram for an `accounts` table, we can the answer to each other those questions:

<a href="https://www.notion.so/9790405dda624818822293a383eec2d2" class="markup--anchor markup--p-anchor">Untitled</a>

### Table Fields

Choosing which fields to include in a table is relatively straight forward. What information needs to be tracked regarding this resource? In the real world, this is determined by the intended use of the product or app.

However, this is one requirement every table should satisfy: a **primary key**. A primary key is a way to identify each entry in the database uniquely. It is most often represented as a auto-incrementing integer called `id` or `[tablename]Id`.

### Datatypes

Each field must also have a specified datatype. The datatype available depends on our DBMS. Some supported datatype in SQLite include:

-   <span id="92fb">**Null:** Missing or unknown information.</span>
-   <span id="32ef">**Integer:** Whole numbers.</span>
-   <span id="181d">**Real:** Any number, including decimals.</span>
-   <span id="ebce">**Text:** Character data.</span>
-   <span id="c00e">**Blob:** a large binary object that can be used to store miscellaneous data.</span>

Any data inserted into the table must match the datatypes determined in schema design.

### Constraints

Beyond datatypes, we may add additional **constraints** on each field. Some examples include:

-   <span id="14ca">**Not Null:** The field cannot be left empty</span>
-   <span id="b533">**Unique:** No two records can have the same value in this field</span>
-   <span id="f0c4">**Primary key:** — Indicates this field is the primary key. Both the not null and unique constraints will be enforced.</span>
-   <span id="f116">**Default:** — Sets a default value if none is provided.</span>

As with data types, any data that does not satisfy the schema constraints will be rejected from the database.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### Multi-Table Design

Another critical component of schema design is to understand how different tables relate to each other. This will be covered in later lesson.

Knex provides a **schema builder**, which allows us to write code to design our database schema. However, beyond thinking about columns and constraints, we must also consider updates.

When a schema needs to be updated, a developer must feel confident that the changes go into effect everywhere. This means schema updates on the developer’s local machine, on any testing or staging versions, on the production database, and then on any other developer’s local machines. This is where **migrations** come into play.

A `database migration` describes changes made to the structure of a database. Migrations include things like adding new objects, adding new tables, and modifying existing objects or tables.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### Knex Cli

To use migrations (and to make Knex setup easier), we need to use **knex cli**. Install knex globally with `npm install -g knex`.

This allows you to use Knex commands within any repo that has `knex` as a local dependency. If you have any issues with this global install, you can use the `npx knex` command instead.

### Initializing Knex

To start, add the `knex` and `sqlite3` libraries to your repository.

`npm install knex sqlite3`

We’ve seen how to use manually create a config object to get started with Knex, but the best practice is to use the following command:

    knex init

Or, if Knex isn’t globally installed:

    npx knex init

This command will generate a file in your root folder called `knexfile.js`. It will be auto populated with three config objects, based on different environments. We can delete all except for the development object.

    module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
          filename: './dev.sqlite3'
        }
      }

    };

We’ll need to update the location (or desired location) of the database as well as add the `useNullAsDefault` option. The latter option prevents crashes when working with `sqlite3`.

    module.exports = {

    development: {
        // our DBMS driver
        client: 'sqlite3',
        // the location of our db
        connection: {
          filename: './data/database_file.db3',
        },
        // necessary when using sqlite3
        useNullAsDefault: true
      }

    };

Now, wherever we configure our database, we may use the following syntax instead of hardcoding in a config object.

    const knex = require('knex');

    const config = require('../knexfile.js');

    // we must select the development object from our knexfile
    const db = knex(config.development);

    // export for use in codebase
    module.exports = db;

### Knex Migrations

Once our `knexfile` is set up, we can begin creating **migrations**. Though it's not required, we are going to add an `addition` option to the config object to specify a directory for the migration files.

    development: {
        client: 'sqlite3',
        connection: {
          filename: './data/produce.db3',
        },
        useNullAsDefault: true,
        // generates migration files in a data/migrations/ folder
        migrations: {
          directory: './data/migrations'
        }
      }

We can generate a new migration with the following command:

`knex migrate:make [migration-name]`

If we needed to create an accounts table, we might run:

`knex migrate:make create-accounts`

Note that inside `data/migrations/` a new file has appeared. Migrations have a timestamp in their filenames automatically. Wither you like this or not, **do not edit migration names.**

The migration file should have both an `up` and a `down` function. Within the `up` function, we write the ended database changes. Within the `down` function, we write the code to undo the `up` functions. This allows us to undo any changes made to the schema if necessary.

    exports.up = function(knex, Promise) {
      // don't forget the return statement
      return knex.schema.createTable('accounts', tbl => {
        // creates a primary key called id
        tbl.increments();
        // creates a text field called name which is both required and unique
        tbl.text('name', 128).unique().notNullable();
        // creates a numeric field called budget which is required
        tbl.decimal('budget').notNullable();
      });
    };

    exports.down = function(knex, Promise) {
      // drops the entire table
      return knex.schema.dropTableIfExists('accounts');
    };

References for these methods are found in the **schema builder** section of the <a href="https://knexjs.org/" class="markup--anchor markup--p-anchor">Knex docs (Links to an external site.)</a>.

At this point, the table is **not** yet created. To run this (and any other) migrations, use the command:

`knex migrate:latest`

Note if the database does not exist, this command will auto-generate one. We can use SQLite Studio to confirm that the accounts table has been created.

### Changes and Rollbacks

If later down the road, we realize you need to update your schema, you shouldn’t edit the migration file. Instead, you will want to create a new migration with the command:

`knex migrate:make accounts-schema-update`

Once we’ve written our updates into this file we save and close with:

`knex migrate:latest`

If we migrate our database and then quickly realize something isn’t right, we can edit the migration file. However, first, we need to **rolllback** (or undo) our last migration with:

`knex migrate:rollback`

Finally, we are free to rerun that file with `knex migrate` latest.

**NOTE**: A rollback should not be used to edit an old migration file once that file has accepted into a main branch. However, an entire team may use a rollback to return to a previous version of a database.

### Overview

Knex provides a **schema builder**, which allows us to write code to design our database schema. However, beyond thinking about columns and constraints, we must also consider updates.

When a schema needs to be updated, a developer must feel confident that the changes go into effect everywhere. This means schema updates on the developer’s local machine, on any testing or staging versions, on the production database, and then on any other developer’s local machines. This is where **migrations** come into play.

A `database migration` describes changes made to the structure of a database. Migrations include things like adding new objects, adding new tables, and modifying existing objects or tables.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### Knex Cli

To use migrations (and to make Knex setup easier), we need to use **knex cli**. Install knex globally with `npm install -g knex`.

This allows you to use Knex commands within any repo that has `knex` as a local dependency. If you have any issues with this global install, you can use the `npx knex` command instead.

### Initializing Knex

To start, add the `knex` and `sqlite3` libraries to your repository.

`npm install knex sqlite3`

We’ve seen how to use manually create a config object to get started with Knex, but the best practice is to use the following command:

    knex init

Or, if Knex isn’t globally installed:

    npx knex init

This command will generate a file in your root folder called `knexfile.js`. It will be auto populated with three config objects, based on different environments. We can delete all except for the development object.

    module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
          filename: './dev.sqlite3'
        }
      }

    };

We’ll need to update the location (or desired location) of the database as well as add the `useNullAsDefault` option. The latter option prevents crashes when working with `sqlite3`.

    module.exports = {

    development: {
        // our DBMS driver
        client: 'sqlite3',
        // the location of our db
        connection: {
          filename: './data/database_file.db3',
        },
        // necessary when using sqlite3
        useNullAsDefault: true
      }

    };

Now, wherever we configure our database, we may use the following syntax instead of hardcoding in a config object.

    const knex = require('knex');

    const config = require('../knexfile.js');

    // we must select the development object from our knexfile
    const db = knex(config.development);

    // export for use in codebase
    module.exports = db;

### Knex Migrations

Once our `knexfile` is set up, we can begin creating **migrations**. Though it's not required, we are going to add an `addition` option to the config object to specify a directory for the migration files.

    development: {
        client: 'sqlite3',
        connection: {
          filename: './data/produce.db3',
        },
        useNullAsDefault: true,
        // generates migration files in a data/migrations/ folder
        migrations: {
          directory: './data/migrations'
        }
      }

We can generate a new migration with the following command:

`knex migrate:make [migration-name]`

If we needed to create an accounts table, we might run:

`knex migrate:make create-accounts`

Note that inside `data/migrations/` a new file has appeared. Migrations have a timestamp in their filenames automatically. Wither you like this or not, **do not edit migration names.**

The migration file should have both an `up` and a `down` function. Within the `up` function, we write the ended database changes. Within the `down` function, we write the code to undo the `up` functions. This allows us to undo any changes made to the schema if necessary.

    exports.up = function(knex, Promise) {
      // don't forget the return statement
      return knex.schema.createTable('accounts', tbl => {
        // creates a primary key called id
        tbl.increments();
        // creates a text field called name which is both required and unique
        tbl.text('name', 128).unique().notNullable();
        // creates a numeric field called budget which is required
        tbl.decimal('budget').notNullable();
      });
    };

    exports.down = function(knex, Promise) {
      // drops the entire table
      return knex.schema.dropTableIfExists('accounts');
    };

References for these methods are found in the **schema builder** section of the <a href="https://knexjs.org/" class="markup--anchor markup--p-anchor">Knex docs (Links to an external site.)</a>.

At this point, the table is **not** yet created. To run this (and any other) migrations, use the command:

`knex migrate:latest`

Note if the database does not exist, this command will auto-generate one. We can use SQLite Studio to confirm that the accounts table has been created.

### Changes and Rollbacks

If later down the road, we realize you need to update your schema, you shouldn’t edit the migration file. Instead, you will want to create a new migration with the command:

`knex migrate:make accounts-schema-update`

Once we’ve written our updates into this file we save and close with:

`knex migrate:latest`

If we migrate our database and then quickly realize something isn’t right, we can edit the migration file. However, first, we need to **rolllback** (or undo) our last migration with:

`knex migrate:rollback`

Finally, we are free to rerun that file with `knex migrate` latest.

**NOTE**: A rollback should not be used to edit an old migration file once that file has accepted into a main branch. However, an entire team may use a rollback to return to a previous version of a database.

### Overview

Often we want to pre-populate our database with sample data for testing. **Seeds** allow us to add and reset sample data easily.

### TRY:

The Knex command-line tool offers a way to **seed** our database; in other words, pre-populate our tables.

Similarly to migrations, we want to customize where our seed files are generated using our `knexfile`

    development: {
        client: 'sqlite3',
        connection: {
          filename: './data/produce.db3',
        },
        useNullAsDefault: true,
        // generates migration files in a data/migrations/ folder
        migrations: {
          directory: './data/migrations'
        },
        seeds: {
          directory: './data/seeds'
        }
      }

To create a seed run: `knex seed:make 001-seedName`

Numbering is a good idea because Knex doesn’t attach a timestamp to the name like migrate does. Adding numbers to the file name, we can control the order in which they run.

We want to create seeds for our accounts table:

`knex seed:make 001-accounts`

A file will appear in the designated seed folder.

    exports.seed = function(knex, Promise) {
      // we want to remove all data before seeding
      // truncate will reset the primary key each time
      return knex('accounts').truncate()
        .then(function () {
          // add data into insert
          return knex('accounts').insert([
            { name: 'Stephenson', budget: 10000 },
            { name: 'Gordon & Gale', budget: 40400 },
          ]);
        });
    };

Run the seed files by typing:

`knex seed:run`

You can now use SQLite Studio to confirm that the accounts table has two entries.

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>### SQL & PostgreSQL

**Foreign keys** are a type of table field used for creating links between tables. Like **primary keys**, they are most often integers that identify (rather than store) data. However, whereas a primary key is used to id rows in a table, foreign keys are used to connect a record in one table to a record in a second table.

Consider the following `farms` and `ranchers` tables.

<a href="https://www.notion.so/5b20c5e233dd4a70a33d6ab2c2e1c8bb" class="markup--anchor markup--p-anchor">Untitled</a>

<a href="https://www.notion.so/0b0a909c24a9474fb9df80938546f12a" class="markup--anchor markup--p-anchor">Untitled</a>

The `farm_id` in the `ranchers` table is an example of a `foreign key`. Each entry in the `farm_id` (foreign key) column corresponds to an `id` (primary key) in the `farms` table. This allows us to track which farm each rancher belongs to while keeping the tables normalized.

If we could only see the `ranchers` table, we would know that John, Jane, and Jen all work together and that Jim and Jay also work together. However, to know where any of them work, we would need to look at the `farms` table.

Now that we understand the basics of querying data from a single table, let’s move on to selecting data from multiple tables using JOIN operations.

### Overview

We can use a `JOIN` to combine query data from multiple tables using a single `SELECT` statement.

There are different types of joins; some are listed below:

-   <span id="d886">inner joins.</span>
-   <span id="43f5">outer joins.</span>
-   <span id="882e">left joins.</span>
-   <span id="ad86">right joins.</span>
-   <span id="4d8b">cross joins.</span>
-   <span id="eb21">non-equality joins.</span>
-   <span id="fc6a">self joins.</span>

Using `joins` requires that the two tables of interest contain at least one field with shared information. For example, if a *departments* table has an *id* field, and an employee table has a *department\_id* field, and the values that exist in the *id* column of the *departments* table live in the *department\_id* field of the employee table, we can use those fields to join both tables like so:

    select * from employees
    join departments on employees.department_id = departments.id

This query will return the data from both tables for every instance where the `ON` condition is true. If there are employees with no value for department*id or where the value stored in the field does not correspond to an existing id in the* departments *table, then that record will NOT be returned. In a similar fashion, any records from the* departments *table that don't have an employee associated with them will also be omitted from the results. Basically, if the* id\* does not show as the value of department\_id for an employee, it won't be able to join.

We can shorten the condition by giving the table names an alias. This is a common practice. Below is the same example using aliases, picking which fields to return and sorting the results:

    select d.id, d.name, e.id, e.first_name, e.last_name, e.salary
    from employees as e
    join departments as d
      on e.department_id = d.id
    order by d.name, e.last_name

Notice that we can take advantage of white space and indentation to make queries more readable.

There are several ways of writing joins, but the one shown here should work on all database management systems and avoid some pitfalls, so we recommend it.

The syntax for performing a similar join using Knex is as follows:

    db('employees as e')
      .join('departments as d', 'e.department_id', 'd.id')
      .select('d.id', 'd.name', 'e.first_name', 'e.last_name', 'e.salary')

### TRY:

A good explanation of how the different types of joins can be seen <a href="https://www.w3resource.com/sql/joins/sql-joins.php" class="markup--anchor markup--p-anchor">in this article from w3resource.com (Links to an external site.)</a>.

### What is SQL Joins?

An SQL JOIN clause combines rows from two or more tables. It creates a set of rows in a temporary table.

### How to Join two tables in SQL?

A JOIN works on two or more tables if they have at least one common field and have a relationship between them.

JOIN keeps the base tables (structure and data) unchanged.

### Join vs. Subquery

-   <span id="6fdc">JOINs are faster than a subquery and it is very rare that the opposite.</span>
-   <span id="c648">In JOINs the RDBMS calculates an execution plan, that can predict, what data should be loaded and how much it will take to processed and as a result this process save some times, unlike the subquery there is no pre-process calculation and run all the queries and load all their data to do the processing.</span>
-   <span id="d59c">A JOIN is checked conditions first and then put it into table and displays; where as a subquery take separate temp table internally and checking condition.</span>
-   <span id="08ff">When joins are using, there should be connection between two or more than two tables and each table has a relation with other while subquery means query inside another query, has no need to relation, it works on columns and conditions.</span>

### SQL JOINS: EQUI JOIN and NON EQUI JOIN

The are two types of SQL JOINS — EQUI JOIN and NON EQUI JOIN

1.  <span id="2bb1">SQL EQUI JOIN :</span>

The SQL EQUI JOIN is a simple SQL join uses the equal sign(=) as the comparison operator for the condition. It has two types — SQL Outer join and SQL Inner join.

1.  <span id="a9be">SQL NON EQUI JOIN :</span>

The **SQL NON EQUI JOIN** is a join uses comparison operator other than the equal sign like &gt;, &lt;, &gt;=, &lt;= with the condition.

**SQL EQUI JOIN : INNER JOIN and OUTER JOIN**

The SQL EQUI JOIN can be classified into two types — INNER JOIN and OUTER JOIN

1.  <span id="cf44">SQL INNER JOIN</span>

This type of EQUI JOIN returns all rows from tables where the key record of one table is equal to the key records of another table.

1.  <span id="22a6">SQL OUTER JOIN</span>

This type of EQUI JOIN returns all rows from one table and only those rows from the secondary table where the joined condition is satisfying i.e. the columns are equal in both tables.

In order to perform a JOIN query, the required information we need are:

**a)** The name of the tables**b)** Name of the columns of two or more tables, based on which a condition will perform.

**Syntax:**

    FROM table1
    join_type table2
    [ON (join_condition)]

**Parameters:**

<a href="https://www.notion.so/5522c3e6d5d0443eb870f7a34f60c7ff" class="markup--anchor markup--p-anchor">Untitled</a>

**Pictorial Presentation of SQL Joins:**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2DcsnJXF_FOGhUtL.gif" class="graf-image" /></figure>**Example:**

**Sample table: company**

**Sample table: foods**

To join two tables ‘company’ and ‘foods’, the following SQL statement can be used :

**SQL Code:**

    SELECT  company.company_id,company.company_name,
    foods.item_id,foods.item_name
    FROM company,foods;

Copy

Output:

    COMPAN COMPANY_NAME              ITEM_ID  ITEM_NAME
    ------ ------------------------- -------- ---------------
    18     Order All                 1        Chex Mix
    18     Order All                 6        Cheez-It
    18     Order All                 2        BN Biscuit
    18     Order All                 3        Mighty Munch
    18     Order All                 4        Pot Rice
    18     Order All                 5        Jaffa Cakes
    18     Order All                 7        Salt n Shake
    15     Jack Hill Ltd             1        Chex Mix
    15     Jack Hill Ltd             6        Cheez-It
    15     Jack Hill Ltd             2        BN Biscuit
    15     Jack Hill Ltd             3        Mighty Munch
    15     Jack Hill Ltd             4        Pot Rice
    15     Jack Hill Ltd             5        Jaffa Cakes
    15     Jack Hill Ltd             7        Salt n Shake
    16     Akas Foods                1        Chex Mix
    16     Akas Foods                6        Cheez-It
    16     Akas Foods                2        BN Biscuit
    16     Akas Foods                3        Mighty Munch
    16     Akas Foods                4        Pot Rice
    16     Akas Foods                5        Jaffa Cakes
    16     Akas Foods                7        Salt n Shake
    .........
    .........
    .........

### Overview

While we can write database code directly into our endpoints, best practices dictate that all database logic exists in separate, modular methods. These files containing database access helpers are often called **models**

### TRY:

To handle CRUD operations for a single resource, we would want to create a **model** (or database access file) containing the following methods:

    function find() {
    }

    function findById(id) {
    }

    function add(user) {
    }

    function update(changes, id) {
    }

    function remove(id) {
    }

Each of these functions would use Knex logic to perform the necessary database operation.

    function find() {
      return db('users');
    }

For each method, we can choose what value to return. For example, we may prefer `findById()` to return a single `user` object rather than an array.

    function findById(id) {
    // first() returns the first entry in the db matching the query
      return db('users').where({ id }).first();
    }

We can also use existing methods like `findById()` to help `add()` return the new user (instead of just the id).

    function add(user) {
      db('users').insert(user)
        .then(ids => {
          return findById(ids[0]);
        });
    }

Once all methods are written as desired, we can export them like so:

    module.exports = {
      find,
      findById,
      add,
      update,
      delete,
    }

…and use the helpers in our endpoints

    const User = require('./user-model.js');

    router.get('/', (req, res) => {
      User.find()
        .then(users => {
          res.json(users);
        })
        .catch(&nbsp;err => {});
    });

There should no be `knex` code in the endpoints themselves.

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>`Normalization` is the process of designing or refactoring database tables for maximum consistency and minimum redundancy.

With objects, we’re used to *denormalized* data, stored with ease of use and speed in mind. Non-normalized tables are considered ineffective in relational databases.

**Data normalization** is a deep topic in database design. To begin thinking about it, we’ll explore a few basic guidelines and some data examples that violate these rules.

### Normalization Guidelines

> Each record has a primary key.

> No fields are repeated.

> All fields relate directly to the key data.

> Each field entry contains a single data point.

> There are no redundant entries.

### Denormalized Data

<a href="https://www.notion.so/19a01f68a659470fb85bbe6906fb4bad" class="markup--anchor markup--p-anchor">Untitled</a>

This table has two issues. There is no proper id field (as multiple farms may have the same name), and multiple fields are representing the same type of data: animals.

<a href="https://www.notion.so/075ad6dd99ac48698625d7b56ca67bef" class="markup--anchor markup--p-anchor">Untitled</a>

While we have now eliminated the first two issues, we now have multiple entries in one field, separated by commas. This isn’t good either, as its another example of denormalization. There is no “array” data type in a relational database, so each field must contain only one data point.

<a href="https://www.notion.so/375a15b0cb3f444a8698cd6cb3a08fe0" class="markup--anchor markup--p-anchor">Untitled</a>

Now we’ve solved the multiple fields issue, but we created repeating data (the farm field), which is also an example of denormalization. As well, we can see that if we were tracking additional ranch information (such as annual revenue), that field is only vaguely related to the animal information.

**When these issues begin arising in your schema design, it means that you should separate information into two or more tables.**

### Anomalies

Obeying the above guidelines prevent **anomalies** in your database when inserting, updating, or deleting. For example, imagine if the revenue of Beech Ranch changed. With our denormalized schema, it may get updated in some records but not others:

<a href="https://www.notion.so/e05f5b2e8ff141798adc6f188f56f31e" class="markup--anchor markup--p-anchor">Untitled</a>

Similarly, if Beech Ranch shut down, there would be three (if not more) records that needed to be deleted to remove a single farm.

Thus a denormalized table opens the door for contradictory, confusing, and unusable data.

What issues does the following table have?

<a href="https://www.notion.so/2793e8f6b70a47f48f9208779366e69e" class="markup--anchor markup--p-anchor">Untitled</a>

There are three types of relationships:

> One to one.

> One to many.

> Many to many.

Determining how data is related can provide a set of guidelines for table representation and guides the use of foreign keys to connect said tables.

### One to One Relationships

Imagine we are storing the financial projections for a series of farms.

We may wish to attach fields like farm name, address, description, projected revenue, and projected expenses. We could divide these fields into two categories: information related to the farm directly (name, address, description) and information related to the financial projections (revenue, expenses).

We would say that `farms` and `projections` have a **one-to-one** relationship. This is to say that every farm has exactly one projection, and every project corresponds to exactly one farm.

This data can be represented in two tables: `farms` and `projections`

<a href="https://www.notion.so/944e594f3464473ea06383bfdea13265" class="markup--anchor markup--p-anchor">Untitled</a>

<a href="https://www.notion.so/de32fcf6760e45f284707274433fee92" class="markup--anchor markup--p-anchor">Untitled</a>

The `farm_id` is the foreign key that links `farms` and `projections` together.

Notes about one-to-one relationships:

-   <span id="198d">The foreign key should always have a `unique` constraint to prevent duplicate entries. In the example above, we wouldn't want to allow multiple projections records for one farm.</span>
-   <span id="25c6">The foreign key can be in either table. For example, we may have had a `projection_id` in the `farms` table instead. A good rule of thumb is to put the foreign key in whichever table is more auxiliary to the other.</span>
-   <span id="960d">You can represent one-to-one data in a single table *without* creating anomalies. However, it is sometimes prudent to use two tables as shown above to keep separate concerns in separate tables.</span>

### One to Many Relationships

Now imagine, we are storing the full-time ranchers employed at each farm. In this case, each rancher would only work at one farm however, each farm may have multiple ranchers.

This is called a **one-to-many** relationship.

This is the most common type of relationship between entities. Some other examples:

-   <span id="5627">One `customer` can have many `orders`.</span>
-   <span id="cc42">One `user` can have many `posts`.</span>
-   <span id="dae3">One `post` can have many `comments`.</span>

Manage this type of relationship by adding a foreign key on the “many” table of the relationship that points to the primary key on the “one” table. Consider the `farms` and `ranchers` tables.

<a href="https://www.notion.so/7dfd2e69c9804a01845f2e9b716a5ac2" class="markup--anchor markup--p-anchor">Untitled</a>

<a href="https://www.notion.so/c95f3d418db94ab4b4532eeba0e4f918" class="markup--anchor markup--p-anchor">Untitled</a>

In a many-to-many relationship, the foreign key (in this case `farm_id`) should *not* be unique.

### Many to Many Relationships

If we want to track animals on a farm as well, we must explore the **many-to-many** relationship. A farm has multiple animals, and multiple of each type of animal is present at multiple different farms.

Some other examples:

-   <span id="d757">an `order` can have many `products` and the same `product` will appear in many `orders`.</span>
-   <span id="0256">a `book` can have more than one `author`, and an `author` can write more than one `book`.</span>

To model this relationship, we need to introduce an **intermediary table** that holds foreign keys that reference the primary key on the related tables. We now have a `farms`, `animals`, and `farm_animals` table.

<a href="https://www.notion.so/3269812d7c2a4578b1a9f6bc27e485b1" class="markup--anchor markup--p-anchor">Untitled</a>

<a href="https://www.notion.so/c2642c7f632f489cb1b9639c80b8400d" class="markup--anchor markup--p-anchor">Untitled</a>

<a href="https://www.notion.so/d0b0042c5e104edd9ed55e122af89084" class="markup--anchor markup--p-anchor">Untitled</a>

While each foreign key on the intermediary table is not unique, the combinations of keys should be unique.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure>The Knex query builder library also allows us to create multi-table schemas include foreign keys. However, there are a few extra things to keep in mind when designing a multi-table schema, such as using the correct order when creating tables, dropping tables, seeding data, and removing data.

We have to consider the way that `delete` and `updates` through our API will impact related data.

### Foreign Key Setup

In Knex, foreign key restrictions don’t automatically work. Whenever using foreign keys in your schema, add the following code to your `knexfile`. This will prevent users from entering bad data into a foreign key column.

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './data/database.db3',
      },
      // needed when using foreign keys
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
      },
    },

### Migrations

Let’s look at how we might track our `farms` and `ranchers` using Knex. In our migration file's `up` function, we would want to create two tables:

    exports.up = function(knex, Promise) {
      return knex.schema
        .createTable('farms', tbl => {
          tbl.increments();
          tbl.string('farm_name', 128)
            .notNullable();
        })
        // we can chain together createTable
        .createTable('ranchers', tbl => {
          tbl.increments();
          tbl.string('rancher_name', 128);
          tbl.integer('farm_id')
            // forces integer to be positive
            .unsigned()
            .notNullable()
            .references('id')
            // this table must exist already
            .inTable('farms')
        })
    };

Note that the foreign key can only be created *after* the reference table.

In the down function, the opposite is true. We always want to drop a table with a foreign key *before* dropping the table it references.

    exports.down = function(knex, Promise) {
      // drop in the opposite order
      return knex.schema
        .dropTableIfExists('ranchers')
        .dropTableIfExists('farms')
    };

In the case of a many-to-many relationship, the syntax for creating an intermediary table is identical, except for one additional piece. We need a way to make sure our combination of foreign keys is unique.

    .createTable('farm_animals', tbl => {
      tbl.integer('farm_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('farms')
      tbl.integer('animal_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('animals')

    // the combination of the two keys becomes our primary key
      // will enforce unique combinations of ids
      tbl.primary(['farm_id', 'animal_id']);
    });

### Seeds

Order is also a concern when seeding. We want to create seeds in the **same** order we created our tables. In other words, don’t create a seed with a foreign key, until that reference record exists.

In our example, make sure to write the `01-farms` seed file and then the `02-ranchers` seed file.

However, we run into a problem with truncating our seeds, because we want to truncate `02-ranchers` *before* `01-farms`. A library called `knex-cleaner` provides an easy solution for us.

Run `knex seed:make 00-cleanup` and `npm install knex-cleaner`. Inside the cleanup seed, use the following code.

    const cleaner = require('knex-cleaner');

    exports.seed = function(knex) {
      return cleaner.clean(knex, {
        mode: 'truncate', // resets ids
        ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
      });
    };

This removes all tables (excluding the two tables that track migrations) in the correct order before any seed files run.

### Cascading

If a user attempt to delete a record that is referenced by another record (such as attempting to delete `Morton Ranch` when entries in our `ranchers` table reference that record), by default, the database will block the action. The same thing can happen when updating a record when a foreign key reference.

If we want that to override this default, we can delete or update with **cascade**. With cascade, deleting a record also deletes all referencing records, we can set that up in our schema.

    .createTable('ranchers', tbl => {
        tbl.increments();
        tbl.string('rancher_name', 128);
        tbl.integer('farm_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('farms')
        .onUpdate('CASCADE');
        .onDelete('CASCADE')
    })

<figure><img src="https://cdn-images-1.medium.com/max/800/1*9xpwm_56lgvHkFTKsmoMqg.gif" class="graf-image" /></figure><a href="https://expressjs.com/en/starter/basic-routing.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://expressjs.com/en/starter/basic-routing.html"><strong>Express basic routing</strong><br />
<em>Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI…</em>expressjs.com</a><a href="https://expressjs.com/en/starter/basic-routing.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://expressjs.com/en/guide/writing-middleware.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://expressjs.com/en/guide/writing-middleware.html"><strong>Writing middleware for use in Express apps</strong><br />
<em>Middleware functions are functions that have access to the request object ( req), the response object ( res), and the…</em>expressjs.com</a><a href="https://expressjs.com/en/guide/writing-middleware.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 25, 2021](https://medium.com/p/d9edbf68cf9a).

<a href="https://medium.com/@bryanguner/express-apis-part-2-sql-d9edbf68cf9a" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
