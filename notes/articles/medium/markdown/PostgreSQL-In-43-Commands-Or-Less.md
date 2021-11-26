PostgreSQL In 43 Commands Or Less
=================================

In database jargon, PostgreSQL uses a client/server model. A PostgreSQL session consists of the following cooperating processes (programs):

------------------------------------------------------------------------

### PostgreSQL In 43 Commands Or Less

#### In database jargon, PostgreSQL uses a client/server model. A PostgreSQL session consists of the following cooperating processes (programs):

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>ALLOFMYOTHERARTICLES</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*zo9j6MVAbEaxG8Be.gif" class="graf-image" /></figure>-   <span id="d5d8">A server process, which manages the database files, accepts connections to the database from client applications, and performs database actions on behalf of the clients. The database server program is called `postgres`.</span>
-   <span id="91d1">The user’s client (frontend) application that wants to perform database operations. Client applications can be very diverse in nature: a client could be a text-oriented tool, a graphical application, a web server that accesses the database to display web pages, or a specialized database maintenance tool. Some client applications are supplied with the PostgreSQL distribution; most are developed by users.</span>

As is typical of client/server applications, the client and the server can be on different hosts. In that case they communicate over a TCP/IP network connection. You should keep this in mind, because the files that can be accessed on a client machine might not be accessible (or might only be accessible using a different file name) on the database server machine.

The PostgreSQL server can handle multiple concurrent connections from clients. To achieve this it starts (“forks”) a new process for each connection. From that point on, the client and the new server process communicate without intervention by the original `postgres` process. Thus, the master server process is always running, waiting for client connections, whereas client and associated server processes come and go. (All of this is of course invisible to the user. We only mention it here for completeness.)

------------------------------------------------------------------------

> MAIN PART OF ARTICLE IS BELOW DATABASE PRIMER SECTION… YOU CAN TELL YOU’VE GOTTEN TO THE MAIN CONTENT WHEN YOU SEE A NUMBERED LIST!

> IT’S ALMOST EXACTLY HALFWAY DOWN THIS PAGE

### Database Primer:

-   <span id="5da8">Databases power our internet and our applications.</span>
-   <span id="9a8e">`Relational Database Management Systems`</span>
-   <span id="7825">When we install a RDBMS our our PC, our PC becomes a Database System.</span>
-   <span id="61c8">Some popular RDBMS: Oracle, MySQL, MS SQLServer, Postgres SQL…</span>

#### `Users`

-   <span id="ad9c">Software Apps connect to Databases so that the users of those apps can access data.</span>
-   <span id="eefe">**Types of Users**:</span>
-   <span id="7779">**Normal Users**: Those who can just access data.</span>
-   <span id="51fa">**Super Users**: Can create and manipulate aspects of your database.</span>
-   <span id="df7d">Keep as little Super Users as possible.</span>

### `Databases`

-   <span id="5fc8">Place where we store data.</span>
-   <span id="526c">Data is stored in tables, tables are inter-related with one another (this is why it is called Relational Database)</span>

### `Tables`

-   <span id="cf33">Contains an ID column (that provides a unique IQ for every row of the table)</span>
-   <span id="dd69">Contains a Type column that indicates the data type that is being stored.</span>
-   <span id="c635">Every row is a record in the database.</span>

Creating Database Entities  
Log into PSQL

    psql

Create a Super User named Berber  
create user berber with superuser password ‘good-cat’;

Quit SQL

    \q

Log-in as your Super User

    psql -U berber postgres
    good-cat

See who you are

    select current_user

Create a normal user

    user bryan with password ‘supersecurepassword؋σενδνυδεσ¤৻ãÃä↬’;

Quit and log-in with your normal user

    \q
    psql -U bryan postgres

Normal Users cannot create databases, they can only view, select and insert data.  
Log back in as yourself, and drop normal user and super user.

    psql (default user is a super)
    drop user bryan
    drop user berber

Create a database

    create database cat_database

View all databases in your RDBMS

    \list

Create database for a normal user as your super user.

    create database berber_db with owner berber;.

The normal user will have full control over this granted DB.  
Can’t create duplicate usernames.  
Get rid of database

    drop database

See all the users in your database

    \du

See all tables in your database

    \dt

Create a table in your database

Lookup definition of a specific table

    \d people

Delete your people table and remake it

    drop table people

Remake people

Create Pet Table w/ references to people table

-   <span id="02fe">**Data Types**: Text (unlimited) VARCHAR(limit), always user VC if there can be a character limit.</span>
-   <span id="3cc4">Always pick the smallest value type in your database.</span>
-   <span id="5116">End all SQL commands with a semi-colon.</span>
-   <span id="aa34">**Serial** datatype creates a unique serial number.</span>
-   <span id="01f7">Primary Key indicates the most significant way to identify each row of data.</span>
-   <span id="b8e1">References keep our database clean, using foreign keys maintains our database integrity.</span>

------------------------------------------------------------------------

### What is SQL?

SQL is short for Structured Query Language. Originally, it used to be called SEQUEL (Structured English Query Language) and was used for storing and manipulating data in databases. Today SQL is used to perform all types of data operations in relational database management systems (RDBMS).

SQL is a powerful language where we can perform a wide range of operations:

-   <span id="7f0b">execute queries</span>
-   <span id="d14a">fetch data</span>
-   <span id="5389">insert, update, and delete records in a database (DML operations)</span>
-   <span id="f62e">create new objects in a database (DDL operations)</span>
-   <span id="d790">set permissions on tables, procedures, functions, and views</span>
-   <span id="ebab">and much, much more...</span>

Data is absolutely everywhere. When you visited this web page, you generated data. When you took a note of your to-dos for the day in your reminders, you generated data.

All of this data needs to go somewhere! That’s where databases come in. Databases store information in a structured way so that it is accessible by <a href="https://computersciencehero.com/" class="markup--anchor markup--p-anchor">computer programs</a>. Programmers use a tool called Structured Query Language (SQL) to access and manipulate databases.

In this guide, we’re going to provide a brief overview of SQL to help you level up your skills! Without further ado, let’s get started!

### More On SQL?

SQL was invented in the early 1970s by the IBM researchers Donald Chamberlin and Raymond Boyce. The technology may be old but it’s still a crucial part of interacting with databases.

SQL is used to retrieve data from databases, insert records into a database, update a database, and to control the permissions in a database.

SQL is used with Relational Database Management Systems, or RDBMS. These are databases which are broken up into tables. Each table consists of a list of columns and rows. Tables can be linked together by creating primary and foreign keys between the tables.

<a href="https://careerkarma.com/careers/data-science/" class="markup--anchor markup--p-anchor">Data scientists</a>, <a href="https://careerkarma.com/careers/database-administration/" class="markup--anchor markup--p-anchor">database administrators</a>, <a href="https://studydatascience.org/how-to-become-data-analyst/" class="markup--anchor markup--p-anchor">data analysts</a>, <a href="https://studydatascience.org/how-to-become-business-analyst/" class="markup--anchor markup--p-anchor">business analysts</a> and <a href="https://careerkarma.com/careers/web-development/" class="markup--anchor markup--p-anchor">back-end web developers</a> are several of the many types of technologists who use databases in their work.

### Here’s a guide on how to get setup with PSQL:

<a href="https://bryanguner.medium.com/postgresql-setup-for-windows-wsl-ubuntu-801672ab7089" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/postgresql-setup-for-windows-wsl-ubuntu-801672ab7089"><strong>PostgreSQL Setup For Windows &amp; WSL/Ubuntu</strong><br />
<em>If you follow this guide to a tee… you will install PostgreSQL itself on your Windows installation. Then, you will…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/postgresql-setup-for-windows-wsl-ubuntu-801672ab7089" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Here’s a Cheatsheet I made:

<a href="https://medium.com/codex/postgresql-cheat-sheet-718b813d3e31" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/postgresql-cheat-sheet-718b813d3e31"><strong>Postgresql Cheat Sheet</strong><br />
<em>PostgreSQL commands</em>medium.com</a><a href="https://medium.com/codex/postgresql-cheat-sheet-718b813d3e31" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### Inserting Data into a Database

### Create a Table

The <a href="https://www.google.com/url?sa=t&amp;source=web&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwijn6yqgePqAhV0oVwKHZnUD60QFjAAegQIBBAB&amp;url=https%3A%2F%2Fcareerkarma.com%2Fblog%2Fsql-create-table%2F&amp;usg=AOvVaw1vlxV4UV8ve5miYhGsDVaB" class="markup--anchor markup--p-anchor">CREATE TABLE</a> statement creates a new table in a database. You can use this command to specify what columns should appear in a database and the types of those columns.

### Insert a Record

The <a href="https://careerkarma.com/blog/sql-insert/" class="markup--anchor markup--p-anchor">INSERT INTO</a> statement inserts a new row into a database. Depending on the structure of a table, this statement can be used to insert some or all the values into a record.

### Selecting Data from a Database

### Selecting Data

The <a href="https://careerkarma.com/blog/sql-select/" class="markup--anchor markup--p-anchor">SELECT statement</a> selects data from one or more tables. It can be used to retrieve all the rows in a table or only rows that meet a set of conditions. You can filter out what columns will be returned by the SELECT statement.

### Where Statement

The <a href="https://careerkarma.com/blog/sql-where/" class="markup--anchor markup--p-anchor">WHERE</a> statement allows you to select a record based on a condition.

For instance, you could select all of the names in an Employees table that start with the letter “B”. You could select all the people in an Employees table who have worked for a business for at least four years.

### Ordering Data

The <a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwi-54GUguPqAhXTT8AKHbnqC6EQFjAAegQIBBAB&amp;url=https%3A%2F%2Fcareerkarma.com%2Fblog%2Fsql-order-by%2F&amp;usg=AOvVaw0jds79ITS9idNt8V0HyXDz" class="markup--anchor markup--p-anchor">ORDER BY</a> clause sorts data by a particular column name. It can be used to sort data in either ascending or descending order.

You could sort a list of employees in ascending order based on the day they were hired. You could sort a list of coffee products by their prices in descending order.

### Limiting Data

SQL databases can contain a lot of records. The <a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwjorsD7gePqAhXLiFwKHUj5DakQFjAAegQIBBAB&amp;url=https%3A%2F%2Fcareerkarma.com%2Fblog%2Fsql-limit%2F&amp;usg=AOvVaw2_D44T151S6h475cDfrhmu" class="markup--anchor markup--p-anchor">LIMIT clause</a> allows you to limit how many rows are returned by a query. For instance, you could return only the first five responses from a particular query.

### Query Values Using Between

The <a href="https://careerkarma.com/blog/sql-between/" class="markup--anchor markup--p-anchor">BETWEEN</a> operator allows you to select records where a column value is within a particular range. For instance, you could use BETWEEN to retrieve a list of employees who work at a business and who earn between $20,000 and $30,000. You could use BETWEEN to retrieve a list of all the coffees at a cafe which cost between $2.00 and $2.50.

### Updating a Database

Updating a database allows you to modify the information you have already stored, and you can do so by doing the following:

### Updating Records

The <a href="https://careerkarma.com/blog/sql-update/" class="markup--anchor markup--p-anchor">UPDATE</a> statement amends the contents of a table. This statement will change all the values in a database that meet a particular condition or set of conditions. You can use a WHERE statement to select which values should be updated.

### Deleting Records

The <a href="https://careerkarma.com/blog/sql-delete-row/" class="markup--anchor markup--p-anchor">DELETE</a> statement removes one or more rows from a table. By default, this command deletes all the records in a table. The DELETE statement is usually used with a WHERE statement so that only particular records are deleted.

*The SQL ALTER TABLE statement adds, changes, or removes a column in a table. This statement lets you modify a table after it has been created, even if the table stores records.*

You may decide that you need to make a change to an SQL table. For instance, you may want to rename a column or add a new column to the table. These changes are all possible with the SQL ALTER TABLE command.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*s5UbiqN0qkySgA_a5bcXOw.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*ZDx9fNK6yfyLkv_JmPMD8A.jpeg" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*K7Ch-fS6Wr5Lps5g0-oGVQ.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*VVOVwGNPaiDVe79DzI9H9Q.png" class="graf-image" /></figure>### SQL ALTER TABLE

The ALTER TABLE command allows you to change an existing table by:

-   <span id="c60b">Adding a column.</span>
-   <span id="c841">Adding a constraint.</span>
-   <span id="028a">Removing a column.</span>
-   <span id="c667">Changing a data type.</span>
-   <span id="64bf">Renaming a column.</span>

*There is no SQL ADD COLUMN statement. To add a column to an SQL table, you must use the ALTER TABLE ADD syntax. ALTER TABLE lets you add, delete, or modify columns in a table.*

After you have created a table in *SQL*, you may realize that you forgot to add in a specific column that you need. For example, say you may have created a database to store a list of suppliers. Maybe you forgot to include a field to store the category of goods the supplier offers.

In these situations, you can use the *SQL ALTER TABLE* statement to amend an existing table. This statement allows you to add a column, change a column, or delete a column.

Below is an *SQL* command that will create an employee database that stores three columns. This database stores name of an employee, their title, and the branch for which they work.

    CREATE TABLE employees (
        name VARCHAR(50) NOT NULL,
        title VARCHAR(75) NOT NULL,
       branch VARCHAR(25) NOT NULL
    );

But what if we’ve forgotten to add a column? Say we need to add a column that states whether an employee is on probation. That’s where the *ALTER TABLE* statement comes in.

### SQL Add Column

To perform an SQL add column operation, use the ALTER TABLE ADD command. This command alters a table and adds in a column with the specified data type. Using this command, you can add a column to a table after you have created the table.

### SQL UNION:

When you’re querying a database, you may want to combine the result of two or more `SELECT` statements. For example, you may want to get a list of the cities in which your customers are based, and the cities in which your business has branches. You could run two queries to achieve this goal, but you may want to have a result in one query.

That’s where the `SQL UNION` operator comes in. The `UNION` clause can be used to combine the results of two or more `SELECT` queries into a single result set.

In this tutorial, we are going to break down the basics of the `SQL UNION` operator and discuss where you may want to use this command when you’re working with a database.

### Query Refresher

Programmers use queries to retrieve information from a database. Queries almost always begin with the `SQL SELECT` statement and are used to retrieve data based on a set of criteria. Queries usually include the `FROM` operator, which states which table will be queried, among other operators that can filter the resulting data.

Here is the general syntax for an `SQL` query:

    SELECT column_name FROM table_name WHERE your_condititions_are_met;

Here’s an example of an `SQL` query that returns a list of all employee names:

    SELECT name FROM employees;

The output from our query is as follows:

nameLuke  
Mike  
Hannah  
Geoff  
Alexis  
Emma  
Jonah

(7 rows)

If you want to retrieve information from multiple columns, you can so do by separating the column names with a comma. If you want to get data from every column, you can use an asterisk (`*`) instead, which represents every column in a table.

<a href="https://careerkarma.com/blog/sql-outer-join/" class="markup--anchor markup--p-anchor"><strong>» MORE: SQL Outer Join</strong></a>

### SQL Union

The `SQL UNION` operator can be used to combine the results of two or more queries into a single response that results in one table.

In order to use the `UNION` operator, two conditions must be met. Firstly, the data types of the new columns should be compatible—if a salary is an integer in one table and a float in the other, the union would not work. Secondly, the number and order of the columns must be the same in your queries.

Here’s the syntax for an `SQL UNION` query:

    SELECT column_name FROM table1_name
    UNION SELECT column_name FROM table2_name;

Let’s use an example to illustrate how the `SQL UNION` operator works. Let’s say that we are a business that needs to send an announcement to all of our customers. We also want all employees to be sent this announcement so they are aware of what is going on.

### SQL Aggregate Functions:

SQL aggregate functions collate information about what is in a database. For instance, you can use SUM to find the total of all the values in a column. Aggregate functions save you time when you need to find out information that involves aggregating records.,

Here is a list of the aggregate functions in SQL you can use:

-   <span id="27b8">COUNT</span>
-   <span id="2ac2">SUM</span>
-   <span id="9579">AVG</span>
-   <span id="e4fa">MIN</span>
-   <span id="ffb1">MAX</span>

Let’s walk through each of these individually. We’re going to be referring to a database of employees throughout this tutorial.

Aggregate functions are used at the beginning of the <a href="https://careerkarma.com/blog/sql-select/" class="markup--anchor markup--p-anchor">SQL SELECT statement</a>.

If you query both a column and an aggregate function in the same SELECT statement, you must use an <a href="https://careerkarma.com/blog/sql-group-by/" class="markup--anchor markup--p-anchor">SQL GROUP BY clause</a>. This clause tells SQL how to represent the data in your query.

### SQL Subquery

*An SQL subquery is a query inside another query. It is used in the WHERE or HAVING clause of an SQL statement. Subqueries let you specify the results of one query as an argument in another query.*

When you’re writing an *SQL* query, you may want to specify a parameter based on the result of another query. For example, say you have a list of customers. You may want to get a list of customers who have placed orders worth a value over a certain amount. Order and customer information is stored within a different table.

That’s where the *SQL subquery* operation comes in. *Subqueries*, also known as nested queries, are *SELECT* queries within the *WHERE* clause of another *SQL* query. The main *SQL* query then uses the result of the subquery.

------------------------------------------------------------------------

### SQL query examples

Now let’s explore some examples of common and useful PostgreSQL queries that can be used in various situations.

From <a href="https://www.postgresql.org/docs/13/app-psql.html" class="markup--anchor markup--p-anchor">PSQL DOCS:</a>

------------------------------------------------------------------------

### MAIN ARTICLE CONTENT:

### 1. CREATE TABLE query in PostgreSQL

### <a href="https://www.postgresql.org/docs/12/sql-createtable.html" class="markup--anchor markup--h3-anchor">CREATE TABLE</a> is a keyword that will create a new, initially empty table in the database. The table will be owned by the user who has issued this command.

    postgres=# create table dummy_table(name varchar(20),address text,age int);
          CREATE TABLE

### 2. INSERT query in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/sql-insert.html" class="markup--anchor markup--p-anchor">INSERT command</a> is used to insert data into a table:

    postgres=# insert into dummy_table values('XYZ','location-A',25);
            INSERT 0 1
            postgres=# insert into dummy_table values('ABC','location-B',35);
            INSERT 0 1
            postgres=# insert into dummy_table values('DEF','location-C',40);
            INSERT 0 1
            postgres=# insert into dummy_table values('PQR','location-D',54);
            INSERT 0 1

### 3. SELECT query without WHERE condition in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/sql-select.html" class="markup--anchor markup--p-anchor">SELECT command</a> (when used without the optional WHERE condition) is used to fetch all data from a database table:

    postgres=# select * from dummy_table;
            name |  address   | age 
            ---------+--------------+ -----
            XYZ   | location-A |  25
            ABC   | location-B |  35
            DEF   | location-C |  40
            PQR   | location-D |  54
            (4 rows)

### 4. UPDATE query in PostgreSQL

<a href="https://www.postgresql.org/docs/12/sql-update.html" class="markup--anchor markup--p-anchor">UPDATE</a> is used to make updates to the data or row(s) of a database table. In the example below we use UPDATE to change the age of a person whose name is ‘PQR’:

    postgres=# update dummy_table set age=50 where name='PQR';
            UPDATE 1
            postgres=# select * from dummy_table;
            name |  address   | age 
            --------+--------------+-------
            XYZ  | location-A |  25
            ABC  | location-B |  35
            DEF  | location-C |  40
            PQR  | location-D |  50
            (4 rows)

Next, we’ll use the UPDATE command to change the name and age of a person whose address is ‘location-D’:

    postgres=# update dummy_table set name='GHI',age=54 where address='location-D';
    UPDATE 1
    postgres=# select * from dummy_table;
     name |  address   | age 
    ------+------------+-----
     XYZ  | location-A |  25
     ABC  | location-B |  35
     DEF  | location-C |  40
     GHI  | location-D |  54
    (4 rows)

    postgres=#

If we want to modify all the values in the address and age columns in dummy\_table, then we do not need to use the WHERE clause. The UPDATE query would look like this:

    postgres=# update dummy_table set age=54,address='location-X';
    UPDATE 4


    postgres=# select * from dummy_table ;
     name |  address   | age 
    ------+------------+--------
     XYZ  | location-X |  54
     ABC  | location-X |  54
     DEF  | location-X |  54
     GHI  | location-X |  54
    (4 rows)

    postgres=#

A RETURNING clause returns the updated rows. This is optional in UPDATE:

    postgres=# update dummy_table set age=30 where name='XYZ' returning age as age_no;
     age_no 
    ---------
          30
    (1 row)

    UPDATE 1

It is always recommended to perform such operations under transaction blocks (i.e., BEGIN...COMMIT/ROLLBACK;), so we have the option to roll back the operation.

### 5. DELETE query in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/sql-delete.html" class="markup--anchor markup--p-anchor">DELETE command</a> is used to delete row(s). It can be used with or without the optional WHERE condition, but take note: if the WHERE condition is missing, the command will delete all rows, leaving you with an empty table.

In this example, we are deleting one row whose age column has the value 65:

    postgres=# delete from dummy_table where age=65;
    DELETE 1
    postgres=#

### 6. Comparison Operators in PostgreSQL queries

In PostgreSQL, with the help of <a href="https://www.postgresql.org/docs/12/functions-comparison.html" class="markup--anchor markup--p-anchor">comparison operators</a> we can find results where the value in a column is not equal to the specified condition or value.

### Less than or equal to query:

    postgres=# select * from dummy_table where age <=50;
     name |  address   | age 
    ------+------------+-----
     XYZ  | location-A |  25
     ABC  | location-B |  35
     DEF  | location-C |  40
     PQR  | location-D |  50
    (4 rows)

### Greater than or equal to query:

    postgres=# select * from dummy_table where age>=50;
     name |  address   | age 
    ------+------------+-----
     PQR  | location-D |  50
    (1 row)

### Not equal to query:

    postgres=# select * from dummy_table where age<>50;
     name |  address   | age 
    ------+------------+-----
     XYZ  | location-A |  25
     ABC  | location-B |  35
     DEF  | location-C |  40
    (3 rows)

### Equal to query:

    postgres=# select * from dummy_table where age=50;
     name |  address   | age 
    ------+------------+-----
     PQR  | location-D |  50
    (1 row)

### 7. SELECT DISTINCT query in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/sql-select.html#SQL-DISTINCT" class="markup--anchor markup--p-anchor">SELECT DISTINCT</a> statement is used to return only distinct values from the table. It removes any duplicate values.

### SELECT query without DISTINCT clause

    postgres=# select age from dummy_table order by 1;
     age 
    -----
       1
       1
       2
       2
       3
    (5 rows)

### SELECT query with DISTINCT clause

    postgres=# select distinct age from dummy_table order by 1;
     age 
    -----
       1
       2
       3
    (3 rows)

### 8. TRUNCATE query in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/sql-truncate.html" class="markup--anchor markup--p-anchor">TRUNCATE command</a> is used to empty a table:

    postgres=# truncate table dummy_table;
    TRUNCATE TABLE

### 9. DROP TABLE query in PostgreSQL

This <a href="https://www.postgresql.org/docs/12/sql-droptable.html" class="markup--anchor markup--p-anchor">DROP TABLE command</a> is used to drop a table from the database:

    postgresql=# drop table if exists dummy;
    NOTICE:  table "dummy" does not exist, skipping
    DROP TABLE

This command has removed the full table, including any associated data, indexes, rules, triggers, and constraints for that table.

### 10. CREATE VIEW query in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/sql-createview.html" class="markup--anchor markup--p-anchor">CREATE VIEW</a> command is used to generate views. Views are pseudo-tables, which are used to present a full table, subset, or select columns from the underlying table:

    postgres=# create or replace view vi as select * from dummy_table where age is NULL;
    CREATE VIEW

### 11. Create a table in Postgresql using the SELECT statement

Using the syntax in the example below, we can create a table using a SELECT statement:

    postgres=# select 'My name  is X' as col1 , 10 as col2, 'Address is -XYZ location' as col3  into new_table;
    SELECT 1
    postgres=# select * from new_table ;
         col1      | col2 |           col3           
    ---------------+------+--------------------------
     My name  is X |   10 | Address is -XYZ location
    (1 row)

### 12. Query timeout in PostgreSQL

We can command a query to timeout after a certain period with the help of <a href="https://www.enterprisedb.com/postgres-tutorials/how-tune-postgresql-guc-parameters" class="markup--anchor markup--p-anchor">GUC parameters</a> (short for grand unified configuration) like statement\_timeout, which aborts any statement that takes more than the specified number of milliseconds:

    postgresql=# set statement_timeout=10;
    SET
    postgresql=# select pg_sleep(20);
    ERROR:  canceling statement due to statement timeout

### 13. Using CREATE SEQUENCE with the INSERT query in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/sql-createsequence.html" class="markup--anchor markup--p-anchor">CREATE SEQUENCE</a> command is a sequential number generator. Once the sequence is created, we can use the sequence’s nextval and currval functions to insert values into a table:

    postgres=# create sequence seq;
    CREATE SEQUENCE
    postgres=# create table tab(n int);
    CREATE TABLE
    postgres=# insert into tab values (nextval('seq'));
    INSERT 0 1
    postgres=# insert into tab values (currval('seq'));
    INSERT 0 1
    postgres=# insert into tab values (nextval('seq'));
    INSERT 0 1
    postgres=# select * from tab;
     n 
    ---
     1
     1
     2
    (3 rows)

### 14. Importing BLOB data types into PostgreSQL

PostgreSQL doesn’t directly support BLOBs (binary large objects), but we can work with them using the following methods:

Let's assume you have an image (in png format) downloaded in the /home/edb/ folder:

    [edb@localhost]$ ls /home/edb/mypic.png 
    /home/edb/mypic.png

We want to store this image in the PostgreSQL database.

Go to the bin folder of your PostgreSQL installation and connect to the psql terminal:

    postgres=# Create table testing(n int,n1 oid);
    CREATE TABLE
    postgres=# insert into testing values (1,lo_import('/home/edb/mypic.png'));
    INSERT 0 1

The lo\_import() function loads the named file into pg\_largeobject and returns an OID (object identifier) value that will refer to the large object. Selecting the testing table will show just the OID and not the bits that have made up this photo.

### 15. ILIKE query in PostgreSQL

The ILIKE operator is a <a href="https://www.postgresql.org/docs/12/functions-matching.html" class="markup--anchor markup--p-anchor">matching function</a> similar to the LIKE operator, but with the advantage that it matches valus case-insensitively.

    postgres=# select * from ted;
      n  
    -----
     TAR
     TaR
     Tar
     tar
    (4 rows)

### Using ILIKE in a WHERE condition

    postgres=# select * from ted where n ilike 'TAR%';
      n  
    -----
     TAR
     TaR
     Tar
     tar
    (4 rows)

### 16. Hierarchical queries in PostgreSQL

<a href="https://www.enterprisedb.com/postgres-tutorials/how-run-hierarchical-queries-oracle-and-postgresql" class="markup--anchor markup--p-anchor">Hierarchical queries</a> are ones where the results have a structured or parent-child relationship and are displayed in a tree structure. To see how hierarchical queries work, create a dummy table:

    create table test_table(  
      emp_no                int,  
      ename                 char(5),  
      job                       char(9),  
      manager_no        int
    );

Insert data into ‘test\_table’:

    insert into test_table values(10,'A1','CEO',null);
    insert into test_table values(11, 'B1', 'VP', 10);
    insert into test_table values(12, 'B2', 'VP', 10);
    insert into test_table values(13, 'B3', 'VP', 10);
    insert into test_table values(14, 'C1', 'DIRECTOR', 13);
    insert into test_table values(15, ‘C2’, ‘DIRECTOR’, 13);
    insert into test_table values(16, 'D1', 'MANAGER', 15);
    insert into test_table values(17 ,'E1', 'ENGINEER', 11);
    insert into test_table values(18, 'E2', 'ENGINEER', 11);

We can perform hierarchical queries on this table using the methods below.

### 17. Length function in PostgreSQL

The <a href="https://www.postgresql.org/docs/9.1/functions-string.html" class="markup--anchor markup--p-anchor">length function</a> returns the number of characters or number of bytes in a specified string variable.

### Basic SELECT query

    postgres=# select name,age from dummy_table;
     name | age 
    ------+-----
     XYZ  |  25
     ABC  |  35
     DEF  |  40
     PQR  |  54
     PQR  |    
    (5 rows)

### Query with length function for column name and age

    postgres=# select length(name),length(age) from dummy_table;
     length | length 
    --------+--------
          3 |      2
          3 |      2
          3 |      2
          3 |      2
          3 |       
    (5 rows)

### 18. When a query has no destination for result data in PostgreSQL

Say that while selecting a given function, we receive the error message below:

    postgresql=# create or replace function f(n int) 
    returns int 
    as 
    $$ 
    begin 
    select now();
    return 1;
     end; 
    $$ language 'plpgsql';
    CREATE FUNCTION
    postgres=# select f(9);
    ERROR:  query has no destination for result data
    HINT:  If you want to discard the results of a SELECT, use PERFORM instead.

To avoid such errors, we can either use PERFORM or declare a variable and use it in a <a href="https://www.postgresql.org/docs/9.1/sql-selectinto.html" class="markup--anchor markup--p-anchor">SELECT INTO</a> statement:

### Using PERFORM

    postgres=# create or replace function f(n int) 
    returns int 
    as 
    $$ 
    begin 
    perform
    now(); 
     return 1; 
     end; 
    $$ language 'plpgsql';
    CREATE FUNCTION
    postgresql=# select f(9);
     f 
    ---
     1
    (1 row)

### Declaring a variable and using it in a SELECT INTO statement

    postgres=# create or replace function f(n int) 
    returns int 
    as 
    $$ 
    declare 
    a date;
    begin 
    select now() into a;
    raise notice ‘%s’,a; 
    return 1; 
    end; 
    $$ language 'plpgsql';
    CREATE FUNCTION
     
     
    postgresql=# select f(9);
              NOTICE: 24-SEP-20 13:15:46.23388s
                 f
                ---
                1
            (1 row)

### 19. Exporting query result to a text file in PostgreSQL

With the help of the <a href="https://www.postgresql.org/docs/12/sql-copy.html" class="markup--anchor markup--p-anchor">COPY command</a>, we can export data from a table to an outside text file as well as import data from a text file into a table.

### Exporting data from a table to a text file

    postgres=#  copy dummy_table to '/tmp/abc.txt';
    COPY 5
      
    postgres=# \! cat /tmp/abc.txt
    XYZ   location-A  25
    ABC   location-B  35
    DEF   location-C  40
    PQR   location-D  50
    CXC   1   50

### Importing data from a text file into a table

    postgres=# copy dummy_table from '/tmp/abc.txt';
    COPY 5

-   <span id="8e52">With the help of common table expressions (CTE):</span>

<!-- -->

    postgres=#WITH RECURSIVE cte AS (                                                                                                                                                          SELECT emp_no, ename, manager_no, 1 AS level                                                                                                                                             FROM   test_table                                                                                                                                                                      where manager_no is null                                                                                                                                                            UNION  ALL                                                                                                                                                                               SELECT e.emp_no, e.ename, e.manager_no, c.level + 1                                                                                                                                      FROM   cte c                                                                                                                                                                             JOIN   test_table e ON e.manager_no = c.emp_no                                                                                  )                                                                                                                                                                                     SELECT *                                                                                                                                                                                 FROM   cte;  emp_no | ename | manager_no | level  -----------+----------+------------------+-------      10    | A1        |                        |     1      11    | B1        |          10          |     2      12    | B2        |          10          |     2      13    | B3        |          10          |     2      14    | C1        |         13           |     3      17    | E1        |          11          |      3      18    | E2        |          11           |     3      15    | C2        |          13           |     3      16    | D1        |          15           |     4 (9 rows)  postgres=#

-   <span id="b6ad">Using the tablefunc extension:</span>

1.  <span id="c6e2">The <a href="https://www.postgresql.org/docs/8.3/tablefunc.html" class="markup--anchor markup--li-anchor">tablefunc extension</a> is a contrib module that resides in the contrib/ folder in PostgreSQL sources.</span>
2.  <span id="2847">First, create the tablefunc extension:</span>

-   <span id="3505">`postgres=# CREATE EXTENSION tablefunc; CREATE EXTENSION postgres=#`</span>

1.  <span id="b334">Then, use tablefunc’s connectby function to display results hierarchically:</span>

<!-- -->

    postgres=# SELECT * FROM connectby('dummy_table', 'emp_no', 'manager_no', '10', 0, '->') AS t(emp_no int, manager_no int, level int, ord text) order by emp_no;   emp_no | manager_no | level |      ord         --------+------------+-------+----------------       10 |                       |      0        | 10       11 |              10     |      1        | 10->11       12 |              10     |      1        | 10->12       13 |              10     |      1        | 10->13       14 |              13     |      2        | 10->13->14       15 |              13     |      2        | 10->13->15       16 |              15     |      3        | 10->13->15->16       17 |              11     |      2        | 10->11->17       18 |              11     |      2        | 10->11->18  (9 rows)   postgres=#

### 20. Listing databases query in PostgreSQL

The following query can be used to show all the databases created:

    postgres=# select oid,datname from pg_database;
      oid     |  datname  
    -----------+-----------
     13743 | postgres
         1     | template1
     13742 | template0
    (3 rows)

We can also list out all the database names using the \\l command at the psql prompt.

### 21. Checking query execution time in PostgreSQL

We can check the time needed for a query to execute by enabling \\timing at the psql prompt:

    postgres=# \timing
    Timing is on.

The SELECT query will now show the execution time:

    postgres=# select * from dummy_table;
     name |  address   | age 
    ------+------------+--------
     XYZ  | location-A | 25
     ABC  | location-B | 35
     DEF  | location-C | 40
     PQR  | location-D | 50
     CXC  | 1               | 50
    (5 rows)
     
    Time: 0.440 ms
    postgres=#

### 22. Dynamic SQL query in PostgreSQL

<a href="https://www.postgresql.org/docs/9.1/ecpg-dynamic.html" class="markup--anchor markup--p-anchor">Dynamic SQL</a> is used to reduce repetitive tasks when it comes to querying.  
Dynamic SQL queries are not cached in memory.

    postgres=# do
    postgres-# $$
    postgres$# begin
    postgres$# execute 'select * from dummy_table';
    postgres$# end;
    postgres$# $$;
    DO

### 23. COUNT query in PostgreSQL

The <a href="https://www.postgresql.org/docs/8.2/functions-aggregate.html" class="markup--anchor markup--p-anchor">COUNT query</a> returns the number of rows in a table. If we use (\*) this will include null values; otherwise null values will be excluded.

    postgres=# select count(*) from dummy_table;
     count 
    -------
         5
    (1 row)
     
    postgres=# select count(avg) from dummy_table;
     count 
    -------
         4
    (1 row)

### 24. LIMIT and OFFSET query in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/queries-limit.html" class="markup--anchor markup--p-anchor">LIMIT clause</a> is used to limit the data amount returned by the SELECT statement. The query below will display only 1 row:

    postgres=# select * from dummy_table  limit 1;
     name |  address   | age 
    ------+------------+-----
     XYZ  | location-A |  25
    (1 row)

<a href="https://www.postgresql.org/docs/12/queries-limit.html" class="markup--anchor markup--p-anchor">OFFSET</a> is used when we want to skip a particular number of rows:

    postgres=# select * from dummy_table  offset 4;
     name | address | age 
    ------+---------+-----
     cxc  | 1       |  50
    (1 row)

### 25. IF … ELSE expression in PostgreSQL

We can use <a href="https://www.postgresql.org/docs/9.1/plpgsql-control-structures.html" class="markup--anchor markup--p-anchor">conditional statements</a> like IF ... ELSE in an anonymous block. The example below checks if the values of variables abc and xyz are matching and prints the result— i.e., 150:

    postgres=# Do 
                 $$
                 Declare
                  abc int;
                  xyz int;
                  begin
                  abc:=100;
                  xyz:=abc;
                  if abc=xyz then 
                   xyz=150;  
                  raise notice '%',xyz;
                 else
                 end if;               
                 end;
                   $$
    ;
    NOTICE:  150
    DO

### 26. UPDATE with JOIN query in PostgreSQL

We can use UPDATE with a JOIN and WHERE clause when we want to update the values from one table (table X) based on values from another table (table Y):

    postgres=# create table X(n int, n1 char(10));
    CREATE TABLE
    postgres=# insert into X values (1,'abc');
    INSERT 0 1
    postgres=# insert into X values (2,'xyz');
    INSERT 0 1
    postgres=# insert into X values (3,'pqr');
    INSERT 0 1

    postgres=# create table Y(n int, n1 char(10));
    CREATE TABLE

    postgres=# insert into Y values (1,'');
    INSERT 0 1
    postgres=# insert into Y values (2,'');
    INSERT 0 1

    postgres=# insert into Y values (5,'axyz');
    INSERT 0 1

    postgres=# update Y set n1=X.n1 from X  where X.n=Y.n;
    UPDATE 2
    postgres=# select * from Y;
     n |     n1     
    ---+------------
     5 | axyz      
     1 | abc       
     2 | xyz       
    (3 rows)

    postgres=#

### 27. INNER JOIN query in PostgreSQL

The <a href="https://www.postgresql.org/docs/current/tutorial-join.html" class="markup--anchor markup--p-anchor">INNER JOIN</a> command will find rows from two (or more) tables where the specified columns data in the tables match:

    postgres=# select *  from x inner join  y on  x.n1 = y.n1;
     n |     n1     | n |     n1     
    ---+------------+---+------------
     1 | abc        | 1 | abc       
     2 | xyz        | 2 | xyz       
    (2 rows)

    postgres=#

### 28. CASE expression in PostgreSQL

The <a href="https://www.postgresql.org/docs/12/functions-conditional.html" class="markup--anchor markup--p-anchor">CASE expression</a> is a generic conditional expression, similar to the IF … ELSE statement.

    postgres=# SELECT age,
           CASE age WHEN 25 THEN 'one'
                  WHEN 50 THEN 'two'
                  ELSE 'other'
           END
        FROM  dummy_table;
     age | case  
    -----+-------
      25 | one
      35 | other
      40 | other
      50 | two
      50 | two
    (5 rows)

### 29. PostgreSQL recursive query

Recursive queries are used to deal with hierarchical queries or tree-structured data. The structure of a WITH RECURSIVE query is always: a) Non-recursive term  
 b) UNION (or UNION ALL), then a recursive term

where the recursive term includes a reference to the query's output.

    CREATE TABLE emp_test (
      id int,
      ename varchar(255),
      emanager int
    );

    INSERT INTO emp_test VALUES (1, 'abc', null);
    INSERT INTO emp_test VALUES (2, 'xyz', 1);
    INSERT INTO emp_test VALUES (3, 'def', 2);
    INSERT INTO emp_test VALUES (4, 'cde', 1);
    INSERT INTO emp_test VALUES (5, 'qrs', 2);
    INSERT INTO emp_test VALUES (9, 'iop', 3);
    INSERT INTO emp_test VALUES (10, 'klm', 4);

The recursive query below will give all the reports in a certain order:

    postgres=#WITH RECURSIVE emp_testnew  AS (
      SELECT id, ename, emanager
      FROM emp_test
      WHERE id = 2
      UNION ALL
      SELECT e.id, e.ename, e.emanager
      FROM emp_test e
      INNER JOIN emp_testnew e1 ON e1.id = e.emanager
    )
    SELECT *
    FROM emp_testnew;

     id | ename | emanager 
    ----+-------+----------
      2 | xyz   |        1
      3 | def   |        2
      5 | qrs   |        2
      9 | iop   |        3
    (4 rows)

    postgres=#

### 30. PostgreSQL log queries

Using the <a href="https://www.postgresql.org/docs/12/pgstatstatements.html" class="markup--anchor markup--p-anchor">pg_stat_statements module</a>, we can track execution statistics for all SQL statements. To do this, we need to create an extension and add in shared\_preload\_libraries inside the postgresql.conf file:

    postgres=# create extension pg_stat_statements;
    CREATE EXTENSION


    postgres=# show shared_preload_libraries ;
                               shared_preload_libraries                           
    -------------------------------------------------
     $libdir/pg_stat_statements
    (1 row)


    postgres=# select query from pg_stat_statements where query like 'create table%';
    -[ RECORD 1 ]-------------------
    query | create table test(n int)

We can also configure PostgreSQL to generate log output by enabling these parameters in the postgresql.conf file:

    logging_collector = on
    log_directory = 'log'
    log_filename = ‘postgresql-%Y-%m-%d_%H%M%S.log'
    log_destination = ‘stderr’
    Log file will be created under the pg_log directory which resides under the data folder. 

    [centos@tushar-ldap-docker bin]$ ls  data/log
    postgresql-2020-09-17_150932.log  postgresql-2020-09-19_000000.log  
    [centos@tushar-ldap-docker bin]$

Queries will be recorded in these files.

### 31. Using a variable in a PostgreSQL query

We can declare a variable in PostgreSQL at the psql prompt:

    postgres=# \set cond 50

### Using a variable in a WHERE condition

    postgres=# select * from dummy_table where age=:cond;
     name |  address   | age 
    ------+------------+-----
     PQR  | location-D |  50
    (1 row)

OR

    postgres=# \set cond 50
    postgres=# select :cond+100 ;
     ?column? 
    ----------
          150
    (1 row)

### 32. Date query in PostgreSQL

PostgreSQL offers <a href="https://www.postgresql.org/docs/12/functions-datetime.html" class="markup--anchor markup--p-anchor">functions for date and time</a> that can be used in queries.

    postgres=# select now();
                   now                
    ----------------------------------
     22-SEP-20 03:08:42.636385 +05:30
    (1 row)

    postgres=# select current_date;
     current_date 
    --------------
     22-SEP-20
    (1 row)

    postgres=# select current_time;
         current_time      
    -----------------------
     03:08:53.648466+05:30
    (1 row)

We can also perform a date range query to find rows with values between two time stamps:

    postgres=# create table datetable(n int,n1 date);
    CREATE TABLE

    postgres=# insert into datetable values (1,'12-01-1980');
    INSERT 0 1
    postgres=# insert into datetable values (2,'12-01-2020');
    INSERT 0 1
    postgres=# insert into datetable values (3,'12-01-2000');
    INSERT 0 1
    postgres=# select * from datetable where n1 between '12-01-1980' and '12-01-2000';
     n |         n1         
    ---+--------------------
     1 | 12-JAN-80 00:00:00
     3 | 12-JAN-00 00:00:00
    (2 rows)

### 33. PostgreSQL function RETURN QUERY result

When a PL/pgSQL function is declared to return a SETOF some data type, the return is specified by a <a href="https://www.postgresql.org/docs/12/plpgsql-control-structures.html" class="markup--anchor markup--p-anchor">RETURN QUERY</a> command:

    postgres=# CREATE FUNCTION get(int) RETURNS SETOF integer AS
    $BODY$
    BEGIN
        RETURN QUERY SELECT age
                       FROM dummy_table
                      WHERE age >= $1  ;
        RETURN;
     END
    $BODY$
    LANGUAGE plpgsql;


    postgres=# select * from get(9);
     get 
    -----
      25
      35
      40
      50
    (4 rows)

### 34. PostgreSQL parallel query performance

<a href="https://www.postgresql.org/docs/12/parallel-query.html" class="markup--anchor markup--p-anchor">Parallel queries</a> in PostgreSQL allow you to finish queries faster by utilizing many CPUs. These GUCs parameters are set in postgresql.conf file:

    #max_parallel_maintenance_workers = 2   # taken from max_parallel_workers
    #max_parallel_workers_per_gather = 2    # taken from max_parallel_workers
    #parallel_leader_participation = on
    #max_parallel_workers = 8               # maximum number of max_worker_processes that
                                                               # can be used in parallel operations


    postgres=# create table ty(n int);
    CREATE TABLE
    postgres=# insert into ty values (generate_series(1,300000));
    INSERT 0 300000

    postgres=# analyze ty;
    ANALYZE
    postgres=# explain  select * from ty where n<=1;
                                 QUERY PLAN                              
    ---------------------------------------------------------------------
     Gather  (cost=1000.00..4536.88 rows=30 width=4)
       Workers Planned: 1
       ->  Parallel Seq Scan on ty  (cost=0.00..3533.88 rows=18 width=4)
             Filter: (n <= 1)
    (4 rows)

    postgres=#

### 35. Logical operators in PostgreSQL

There are three basic <a href="https://www.postgresql.org/docs/12/functions-logical.html" class="markup--anchor markup--p-anchor">logical operators</a> available in PostgreSQL: AND, OR, and NOT.

These operators are used to match conditions in SQL statements—e.g., in WHERE and HAVING clauses.

    AND = when both boolean expressions are true then it will return TRUE
    OR   = when any boolean expression is true then it will return TRUE
    NOT = reverses the value of Boolean operator

### Some logical operator examples

    If both expressions are true, then the result is TRUE. postgresql=# select 1=1/1 and 200=2+198 as result_and_operator; result_and_operator --------------------- t (1 row) postgresql=#

    If one expression is true and another expression is NULL, then the result is NULL. postgresql=# select 4=4 and null; ?column? ---------- (1 row)
    If one expression is true and another expression is false, then the result is TRUE. postgres=# select 1=100 OR 2=2; ?column? ---------- t (1 row)

### 36. Catching duplicate rows in a PostgreSQL table

In the following SQL query, there are two records with the value 50:

    postgres=# select age from dummy_table;
     age 
    -----
      25
      35
      40
      50
      50
    (5 rows)

We can use the following SELECT … HAVING query to find the duplicate rows:

    postgres=#  select age, count(age) from dummy_table group by age having count(age)>1;
     age | count 
    -----+-------
      50 |     2
    (1 row)

### 37. Enum query in PostgreSQL

<a href="https://www.postgresql.org/docs/12/datatype-enum.html" class="markup--anchor markup--p-anchor">Enumerated (enum) types</a> are data types that comprise a static, ordered set of values.

    postgres=# CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
    CREATE TYPE
    postgres=# create table testi(n int, n1 mood);
    CREATE TABLE
    postgres=# insert into testi values (1,'happy');
    INSERT 0 1
    postgres=# insert into testi values (1,'sad');
    INSERT 0 1
    postgres=# insert into testi values (1,'ok');
    INSERT 0 1

If the enum has not been specified, it will give an error:

    postgres=# insert into testi values (1,'happyo');
    ERROR:  invalid input value for enum mood: "happyo"

### 38. Pivot query in PostgreSQL

A pivot table is a useful way to analyze large quantities of data by organizing it into a more manageable format.

    CREATE TABLE newtb(id SERIAL, rowid varchar(10), attri varchar(10), val varchar(10));
    INSERT INTO newtb(rowid, attri, val) values('t1','a1','v1');
    INSERT INTO newtb(rowid, attri, val) values('t1','a2','v2');
    INSERT INTO newtb(rowid, attri, val) values('t1','a3','v3');
    INSERT INTO newtb(rowid, attri, val) values('t1','a4','v4');
    INSERT INTO newtb(rowid, attri, val) values('t2','a1','v5');
    INSERT INTO newtb(rowid, attri, val) values('t2','a2','v6');
    INSERT INTO newtb(rowid, attri, val) values('t2','a3','v7');
    INSERT INTO newtb(rowid, attri, val) values('t2','a4','v8');

To create a pivot table you need to install the <a href="https://www.postgresql.org/docs/12/tablefunc.html" class="markup--anchor markup--p-anchor">tablefunc extension</a>:

    postgres=# create extension tablefunc;
    CREATE EXTENSION

    Select *
    FROM crosstab(
      'select rowid, attri, val
       from newtb
       where attri = ''a2'' or attri = ''a3''
       order by 1,2')
    AS newtb(row_name varchar(10), category_1 varchar(10), category_2 varchar(10), category_3 varchar(10));
     row_name | category_1 | category_2 | category_3 
    ----------+------------+------------+--------------------------
       t1       |              v2        |            v3    | 
       t2       |             v6         |             v7   | 
    (2 rows)

### 39. SELF JOIN query in PostgreSQL

When we join a table against itself, this is called a SELF JOIN. This can be done using INNER JOIN or LEFT JOIN. SELF JOINs are useful when comparing the columns of rows within the same table:

    postgres=# create table emp1(emp_id int, firstname char(10), lastname char(10) , manager_id int);
    CREATE TABLE
    postgres=# 
    postgres=# 
    postgres=# insert into emp1 values(1,'ABC','XYZ',NULL);
    INSERT 0 1
    postgres=# insert into emp1 values(2,'TYU','BGV',1);
    INSERT 0 1
    postgres=# insert into emp1 values(3,'TEU','ZZV',1);
    INSERT 0 1
    postgres=# insert into emp1 values(4,'REU','AZV',2);
    INSERT 0 1
    postgres=# insert into emp1 values(5,'QREU','WZV',2);
    INSERT 0 1
    postgres=# insert into emp1 values(6,'DREU','QZV',3);
    INSERT 0 1


    postgres=# select a.firstname,b.lastname from emp1 a inner join emp1 b on a.emp_id=b.manager_id order by 1 ;
     firstname  |  lastname  
    ------------+------------
     ABC        | ZZV       
     ABC        | BGV       
     TEU        | QZV       
     TYU        | WZV       
     TYU        | AZV       
    (5 rows)

    postgres=#

### 40. Parent-child recursive query in PostgreSQL

With the help of <a href="https://www.postgresql.org/docs/12/queries-with.html" class="markup--anchor markup--p-anchor">common table expressions</a> (CTE) we can perform parent-child recursive queries:

    postgres=# CREATE TABLE recu_pc (
     id SERIAL PRIMARY KEY,
     name varchar(10) NOT NULL,
     parent_id integer );
    CREATE TABLE
     
    postgres=# insert into recu_pc values (1, 'Grandmother', NULL);
    INSERT 0 1
    postgres=# insert into recu_pc values (2, 'mother', 1);
    INSERT 0 1
    postgres=# insert into recu_pc values (3, 'daughter', 2);
    INSERT 0 1

     
    postgres=# WITH RECURSIVE rec_q (id) as
    (          
      SELECT recu_pc.id, recu_pc.name from recu_pc where name='mother'
      UNION ALL
      SELECT recu_pc.id, recu_pc.name from rec_q, recu_pc where recu_pc.parent_id = rec_q.id
      )
    SELECT *
    FROM rec_q;
     id |   name   
    ----+----------
      2 | mother
      3 | daughter
    (2 rows)

### 41. Defining a variable in a query in PostgreSQL

Using an <a href="https://www.postgresql.org/docs/12/sql-do.html" class="markup--anchor markup--p-anchor">anonymous block</a>, we can define a variable that can be passed to in a query:

    postgres=# do 
    $$
    declare 
    a int;
    begin 
    select age into a from dummy_table  
    where name ='XYZ';
    raise notice '%',a; 
    end;
    $$;
    NOTICE:  25
    DO

### 42. PREPARE statement in PostgreSQL

A prepared statement is used to optimize performance. When the <a href="https://www.postgresql.org/docs/12/sql-prepare.html" class="markup--anchor markup--p-anchor">PREPARE statement</a> is executed, it is not only parsed but analyzed too, and when we fire the EXECUTE command the prepared statement is planned and executed.

Prepared statements can accept parameters.

    postgres=# prepare test(int) as 
    select * from dummy_table where age=$1;
    PREPARE
     
    postgres=# execute test(50);
     name |  address   | age 
    ------+------------+---------
     PQR  | location-D |  50
     CXC | 1                |  50
    (2 rows)

### 43. Checking NULL values in PostgreSQL

To Identify or select rows that have NULL values, the <a href="https://www.postgresql.org/docs/12/functions-comparison.html" class="markup--anchor markup--p-anchor">IS NULL</a> condition can be used in the WHERE clause.

    postgres=# select * from dummy_table;
     name |  address   | age 
    ------+------------+-----
     XYZ  | location-A |  25
     ABC  | location-B |  35
     DEF  | location-C |  40
     PQR  | location-D |  54
     PQR  | location-D |    
    (5 rows)

Identifying null values in ‘age’ column:

    postgres=# select name from dummy_table where age is null;
     name 
    ------
     PQR
    (1 row)

### Sources:

1.  <span id="0c44">) <a href="https://careerkarma.com/blog/sql-deep-dives/" class="markup--anchor markup--li-anchor">https://careerkarma.com/blog/sql-deep-dives/</a></span>
2.  <span id="b85e"><a href="https://www.postgresql.org/docs/13/app-psql.html" class="markup--anchor markup--li-anchor">https://www.postgresql.org/docs/13/app-psql.html</a></span>

Learn More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Further Examples / Readings:

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 14, 2021](https://medium.com/p/19fba3e37110).

<a href="https://medium.com/@bryanguner/postgresql-in-43-commands-or-less-19fba3e37110" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
