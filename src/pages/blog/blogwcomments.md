---
title: ExpressJS Apis
subtitle: lorem-ipsum
date: '2021-07-26'
thumb_image_alt: node and express js
excerpt: "## **Overview**  A\_**database schema**\_is the shape of our database. It defines what tables we'll have, which columns should exist within the tables and any restrictions on each column.  A well-designed database schema keeps the data well organized and can help ensure high-quality data.  Note that while schema design is usually left to Database Administrators (DBAs), understanding schema helps when designing APIs and database logic. And in a smaller team, this step may fall on the developer."
seo:
    title: ''
    description: ''
    robots: []
    extra: []
    type: stackbit_page_meta
template: post
thumb_image: images/express.png
---

[SQL Tryit Editor v1.6](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where)

## A **database is a collection of data organized for easy retrieval and manipulation**.

We're concerned only with digital databases, those that run on computers or other electronic devices. Digital databases have been around since the 1960s. Relational databases, those which store "related" data, are the oldest and most common type of database in use today.

### **Data Persistence**

A database is often necessary because our application or code requires data persistence. This term refers to data that is infrequently accessed and not likely to be modified. In less technical terms, the information will be safely stored and remain untouched unless intentionally modified.

A familiar example of non-persistent data would be JavaScript objects and arrays, which reset each time the code runs.

### **Relational Databases**

In relational databases, **the data is stored in tabular format grouped into rows and columns** (similar to spreadsheets). A collection of rows is called a table. Each row represents a single record in the table and is made up of one or more columns.

These kinds of databases are relational because a *relation* is a mathematical idea equivalent to a table. So relational databases are databases that store their data in tables.

### **Tables**

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e309a41-e107-46f3-81e7-154d732d3dcf/Untitled.png)

**Below are some basic facts about tables:**

-   Tables organize data in rows and columns.

-   Each row in a table represents one distinct record.

-   Each column represents a field or attribute that is common to all the records.

-   Fields should have a descriptive name and a data type appropriate for the attribute it represents.

-   Tables usually have more rows than columns.

-   Tables have primary keys that uniquely identify each row.

-   Foreign keys represent the relationships with other tables.

## **Overview**

### SQL:

SQL is a standard language, which means that it almost certainly will be supported, no matter how your database is managed. That said, be aware that the SQL language can vary depending on database management tools. This lesson focuses on a set of core commands that never change. Learning the standard commands is an excellent introduction since the knowledge transfers between database products.

The syntax for SQL is English-like and requires fewer symbols than programming languages like C, Java, and JavaScript.

It is declarative and concise, which means there is a lot less to learn to use it effectively.

When learning SQL, it is helpful to understand that each command is designed for a different purpose. If we classify the commands by purpose, we'll end up with the following sub-categories of SQL:

-   **Data Definition Language (DDL)**: used to modify database objects. Some examples are: CREATE TABLE, ALTER TABLE, and DROP TABLE.

-   **Data Manipulation Language (DML)**: used to manipulate the data stored in the database. Some examples are: INSERT, UPDATE, and DELETE.

-   **Data Query Language (DQL)**: used to ask questions about the data stored in the database. The most commonly used SQL command is SELECT, and it falls in this category.

-   **Data Control Language (DCL)**: used to manage database security and user's access to data. These commands fall into the realm of Database Administrators. Some examples are GRANT and REVOKE.

-   **Transaction Control Commands**: used for managing groups of statements that must execute as a unit or not execute at all. Examples are COMMIT and ROLLBACK.

As a developer, you'll need to get familiar with DDL and become proficient using DML and DQL. This lesson will cover only DML and DQL commands.

## **Overview**

The four SQL operations covered in this section will allow a user to **query**, **insert**, and **modify** a database table.

### **Query**

A **query** is a SQL statement used to retrieve data from a database. The command used to write queries is SELECT, and it is one of the most commonly used SQL commands.

The basic syntax for a SELECT statement is this:

To see all the fields on a table, we can use a \* as the selection.

The preceding statement would show all the records and all the columns for each record in the employees table.

To pick the fields we want to see, we use a comma-separated list:

The return of that statement would hold all records from the listed fields.

We can extend the SELECT command's capabilities using clauses for things like filtering, sorting, pagination, and more.

It is possible to query multiple tables in a single query. But, in this section, we only perform queries on a single table. We will cover performing queries on multiple tables in another section.

### **Insert**

To **insert** new data into a table, we'll use the INSERT command. The basic syntax for an INSERT statement is this:

Using this formula, we can specify which values will be inserted into which fields like so:

### **Modify**

**Modifying** a database consists of updating and removing records. For these operations, we'll use UPDATE and DELETE commands, respectively.

The basic syntax for an UPDATE statement is:

The basic syntax for a DELETE statement is:

## **Follow Along**

### **Filtering results using WHERE clause**

When querying a database, the default result will be every entry in the given table. However, often, we are looking for a specific record or a set of records that meets certain criteria.

A WHERE clause can help in both cases.

Here's an example where we might only want to find customers living in Berlin.

We can also chain together WHERE clauses using OR and AND to limit our results further.

The following query includes only records that match both criteria.

And this query includes records that match either criteria.

These operators can be combined and grouped with parentheses to add complex selection logic. They behave similarly to what you're used to in programming languages.

You can read more about SQLite operators from [w3resource (Links to an external site.)](https://www.w3resource.com/sqlite/operators.php).

To select a single record, we can use a WHERE statement with a uniquely identifying field, like an id:

Other comparison operators also work in WHERE conditions, such as >, <, <=, and >=.

### **Ordering results using the ORDER BY clause**

Query results are shown in the same order the data was inserted. To control how the data is sorted, we can use the ORDER BY clause. Let's see an example.

We can pass a list of field names to order by and optionally choose asc or desc for the sort direction. The default is asc, so it doesn't need to be specified.

Some SQL engines also support using field abbreviations when sorting.

In this case, the results are sorted by the department in ascending order first and then by salary in descending order. The numbers refer to the fields' position in the *selection* portion of the query, so 1 would be *name*, 2 would be *salary*, and so on.

Note that the WHERE clause should come after the FROM clause. The ORDER BY clause always goes last.

### **Limiting results using the LIMIT clause**

When we wish to see only a limited number of records, we can use a LIMIT clause.

The following returns the first ten records in the products table:

LIMIT clauses are often used in conjunction with ORDER BY. The following shows us the five cheapest products:

### **Inserting data using INSERT**

An insert statement adds a new record to the database. All non-null fields must be listed out in the same order as their values. Some fields, like ids and timestamps, may be auto-generated and do not need to be included in an INSERT statement.

The values in an insert statement must not violate any restrictions and constraints that the database has in place, such as expected datatypes. We will learn more about constraints and schema design in a later section.

### **Modifying recording using UPDATE**

When modifying a record, we identify a single record or a set of records to update using a WHERE clause. Then we can set the new value(s) in place.

Technically the WHERE clause is not required, but leaving it off would result in every record within the table receiving the update.

### **Removing records using DELETE**

When removing a record or set of records, we need only identify which record(s) to remove using a WHERE clause:

Once again, the WHERE clause is not required, but leaving it off would remove every record in the table, so it's essential.

## **Overview**

Raw SQL is a critical baseline skill. However, Node developers generally use an **Object Relational Mapper (ORM)** or **query builder** to write database commands in a backend codebase. Both **ORMs** and **query builders** are JavaScript libraries that allow us to interface with the database using a JavaScript version of the SQL language.

For example, instead of a raw SQL SELECT:

We could use a query builder to write the same logic in JavaScript:

**Query builders** are lightweight and easy to get off the ground, whereas **ORMs** use an object-oriented model and provide more heavy lifting within their rigid structure.

We will use a **query builder** called [knex.js (Links to an external site.)](https://knexjs.org/).

## **Follow Along**

### **Knex Setup**

To use Knex in a repository, we'll need to add two libraries:

knex is our query builder library, and sqlite3 allows us to interface with a sqlite database. We'll learn more about sqlite and other **database management systems** in the following module. For now, know that you need both libraries.

Next, we use Knex to set up a config file:

To use the query builder elsewhere in our code, we need to call knex and pass in a config object. We'll be discussing Knex configuration more in a future module. Still, we only need the client, connection, and useNullAsDefault keys as shown above. The filename should point towards the pre-existing database file, which can be recognized by the .db3 extension.

**GOTCHA**: The file path to the database should be with respect to the **root** of the repo, not the configuration file itself.

Once Knex is configured, we can import the above config file anywhere in our codebase to access the database.

The db object provides methods that allow us to begin building queries.

### **SELECT using Knex**

In Knex, the equivalent of SELECT \* FROM users is:

There's a simpler way to write the same command:

Using this, we could write a GET endpoint.

**NOTE**: All Knex queries return promises.

Knex also allows for a where clause. In Knex, we could write SELECT \* FROM users WHERE id=1 as

This method will resolve to an array containing a single entry like so: \[{ id: 1, name: 'bill' }].

Using this, we might add a GET endpoint where a specific user:

### **INSERT using Knex**

In Knex, the equivalent of INSERT INTO users (name, age) VALUES ('Eva', 32) is:

The insert method in Knex will resolve to an array containing the newly created id for that user like so: \[3].

### **UPDATE using Knex**

In knex, the equivalent of UPDATE users SET name='Ava', age=33 WHERE id=3; is:

Note that the where method comes before update, unlike in SQL.

Update will resolve to a count of rows updated.

### **DELETE using Knex**

In Knex, the equivalent of DELETE FROM users WHERE age=33; is:

Once again, the where must come before the del. This method will resolve to a count of records removed.

# Day #2:

## **Overview**

SQLlite Studio is an application that allows us to create, open, view, and modify SQLite databases. To fully understand what SQLite Studio is and how it works, we must also understand the concept of the Database Management Systems (DBMS).

## **Follow Along**

### **What is a DBMS?**

To manage digital databases we use specialized software called **D**ata**B**ase **M**anagement **S**ystems (DBMS). These systems typically run on servers and are managed by **D**ata**B**ase **A**dministrators (DBAs).

In less technical terms, we need a type of software that will allow us to create, access, and generally manage our databases. In the world of relational databases, we specifically use Relational Database Mangement Systems (RDBMs). Some examples are Postgres, SQLite, MySQL, and Oracle.

Choosing a DBMS determines everything from how you set up your database, to where and how the data is stored, to what SQL commands you can use. Most systems share the core of the SQL language that you've already learned.

In other words, you can expect SELECT, UPDATE, INSERT, WHERE , and the like to be the same across all DBMSs, but the subtleties of the language may vary.

### **What is SQLite?**

**SQLite** is the DBMS, as the name suggests, it is a more lightweight system and thus easier to get set up than some others.

SQLite allows us to store databases as single files. SQLite projects have a .db3 extension. That is the database.

SQLite is *not a database* (like relational, graph, or document are databases) but rather *a database management system*.

### **Opening an existing database in SQLite Studio**

One useful visual interface we might use with a SQLite database is called **SQLite Studio**. [Install SQLITE Studio here. (Links to an external site.)](https://sqlitestudio.pl/)

Once installed, we can use SQLite Studio to open any .db3 file from a previous lesson. We may view the tables, view the data, and even make changes to the database.

For a more detailed look at SQLite Studio, follow along in the video above.

## **Overview**

A **database schema** is the shape of our database. It defines what tables we'll have, which columns should exist within the tables and any restrictions on each column.

A well-designed database schema keeps the data well organized and can help ensure high-quality data.

Note that while schema design is usually left to Database Administrators (DBAs), understanding schema helps when designing APIs and database logic. And in a smaller team, this step may fall on the developer.

## **Follow Along**

For a look at schema design in SQLite Studio, follow along in the video above.

When designing a single table, we need to ask three things:

-   What fields (or columns) are present?

-   What type of data do we expect for each field?

-   Are there other restrictions needed for each column?

Looking at the following schema diagram for an accounts table, we can the answer to each other those questions:

[Untitled](https://www.notion.so/9790405dda624818822293a383eec2d2)

### **Table Fields**

Choosing which fields to include in a table is relatively straight forward. What information needs to be tracked regarding this resource? In the real world, this is determined by the intended use of the product or app.

However, this is one requirement every table should satisfy: a **primary key**. A primary key is a way to identify each entry in the database uniquely. It is most often represented as a auto-incrementing integer called id or \[tablename]Id.

### **Datatypes**

Each field must also have a specified datatype. The datatype available depends on our DBMS. Some supported datatype in SQLite include:

-   **Null:** Missing or unknown information.

-   **Integer:** Whole numbers.

-   **Real:** Any number, including decimals.

-   **Text:** Character data.

-   **Blob:** a large binary object that can be used to store miscellaneous data.

Any data inserted into the table must match the datatypes determined in schema design.

### **Constraints**

Beyond datatypes, we may add additional **constraints** on each field. Some examples include:

-   **Not Null:** The field cannot be left empty

-   **Unique:** No two records can have the same value in this field

-   **Primary key:** - Indicates this field is the primary key. Both the not null and unique constraints will be enforced.

-   **Default:** - Sets a default value if none is provided.

As with data types, any data that does not satisfy the schema constraints will be rejected from the database.

### **Multi-Table Design**

Another critical component of schema design is to understand how different tables relate to each other. This will be covered in later lesson.

## **Overview**

Knex provides a **schema builder**, which allows us to write code to design our database schema. However, beyond thinking about columns and constraints, we must also consider updates.

When a schema needs to be updated, a developer must feel confident that the changes go into effect everywhere. This means schema updates on the developer's local machine, on any testing or staging versions, on the production database, and then on any other developer's local machines. This is where **migrations** come into play.

A database migration describes changes made to the structure of a database. Migrations include things like adding new objects, adding new tables, and modifying existing objects or tables.

## **Follow Along**

### **Knex Cli**

To use migrations (and to make Knex setup easier), we need to use **knex cli**. Install knex globally with npm install -g knex.

This allows you to use Knex commands within any repo that has knex as a local dependency. If you have any issues with this global install, you can use the npx knex command instead.

### **Initializing Knex**

To start, add the knex and sqlite3 libraries to your repository.

npm install knex sqlite3

We've seen how to use manually create a config object to get started with Knex, but the best practice is to use the following command:

Or, if Knex isn't globally installed:

This command will generate a file in your root folder called knexfile.js. It will be auto populated with three config objects, based on different environments. We can delete all except for the development object.

We'll need to update the location (or desired location) of the database as well as add the useNullAsDefault option. The latter option prevents crashes when working with sqlite3.

Now, wherever we configure our database, we may use the following syntax instead of hardcoding in a config object.

### **Knex Migrations**

Once our knexfile is set up, we can begin creating **migrations**. Though it's not required, we are going to add an addition option to the config object to specify a directory for the migration files.

We can generate a new migration with the following command:

knex migrate:make \[migration-name]

If we needed to create an accounts table, we might run:

knex migrate:make create-accounts

Note that inside data/migrations/ a new file has appeared. Migrations have a timestamp in their filenames automatically. Wither you like this or not, **do not edit migration names.**

The migration file should have both an up and a down function. Within the up function, we write the ended database changes. Within the down function, we write the code to undo the up functions. This allows us to undo any changes made to the schema if necessary.

References for these methods are found in the **schema builder** section of the [Knex docs (Links to an external site.)](https://knexjs.org/).

At this point, the table is **not** yet created. To run this (and any other) migrations, use the command:

knex migrate:latest

Note if the database does not exist, this command will auto-generate one. We can use SQLite Studio to confirm that the accounts table has been created.

### **Changes and Rollbacks**

If later down the road, we realize you need to update your schema, you shouldn't edit the migration file. Instead, you will want to create a new migration with the command:

knex migrate:make accounts-schema-update

Once we've written our updates into this file we save and close with:

knex migrate:latest

If we migrate our database and then quickly realize something isn't right, we can edit the migration file. However, first, we need to **rolllback** (or undo) our last migration with:

knex migrate:rollback

Finally, we are free to rerun that file with knex migrate latest.

**NOTE**: A rollback should not be used to edit an old migration file once that file has accepted into a main branch. However, an entire team may use a rollback to return to a previous version of a database.

## **Overview**

Knex provides a **schema builder**, which allows us to write code to design our database schema. However, beyond thinking about columns and constraints, we must also consider updates.

When a schema needs to be updated, a developer must feel confident that the changes go into effect everywhere. This means schema updates on the developer's local machine, on any testing or staging versions, on the production database, and then on any other developer's local machines. This is where **migrations** come into play.

A database migration describes changes made to the structure of a database. Migrations include things like adding new objects, adding new tables, and modifying existing objects or tables.

## **Follow Along**

### **Knex Cli**

To use migrations (and to make Knex setup easier), we need to use **knex cli**. Install knex globally with npm install -g knex.

This allows you to use Knex commands within any repo that has knex as a local dependency. If you have any issues with this global install, you can use the npx knex command instead.

### **Initializing Knex**

To start, add the knex and sqlite3 libraries to your repository.

npm install knex sqlite3

We've seen how to use manually create a config object to get started with Knex, but the best practice is to use the following command:

Or, if Knex isn't globally installed:

This command will generate a file in your root folder called knexfile.js. It will be auto populated with three config objects, based on different environments. We can delete all except for the development object.

We'll need to update the location (or desired location) of the database as well as add the useNullAsDefault option. The latter option prevents crashes when working with sqlite3.

Now, wherever we configure our database, we may use the following syntax instead of hardcoding in a config object.

### **Knex Migrations**

Once our knexfile is set up, we can begin creating **migrations**. Though it's not required, we are going to add an addition option to the config object to specify a directory for the migration files.

We can generate a new migration with the following command:

knex migrate:make \[migration-name]

If we needed to create an accounts table, we might run:

knex migrate:make create-accounts

Note that inside data/migrations/ a new file has appeared. Migrations have a timestamp in their filenames automatically. Wither you like this or not, **do not edit migration names.**

The migration file should have both an up and a down function. Within the up function, we write the ended database changes. Within the down function, we write the code to undo the up functions. This allows us to undo any changes made to the schema if necessary.

References for these methods are found in the **schema builder** section of the [Knex docs (Links to an external site.)](https://knexjs.org/).

At this point, the table is **not** yet created. To run this (and any other) migrations, use the command:

knex migrate:latest

Note if the database does not exist, this command will auto-generate one. We can use SQLite Studio to confirm that the accounts table has been created.

### **Changes and Rollbacks**

If later down the road, we realize you need to update your schema, you shouldn't edit the migration file. Instead, you will want to create a new migration with the command:

knex migrate:make accounts-schema-update

Once we've written our updates into this file we save and close with:

knex migrate:latest

If we migrate our database and then quickly realize something isn't right, we can edit the migration file. However, first, we need to **rolllback** (or undo) our last migration with:

knex migrate:rollback

Finally, we are free to rerun that file with knex migrate latest.

**NOTE**: A rollback should not be used to edit an old migration file once that file has accepted into a main branch. However, an entire team may use a rollback to return to a previous version of a database.

## **Overview**

Often we want to pre-populate our database with sample data for testing. **Seeds** allow us to add and reset sample data easily.

## **Follow Along**

The Knex command-line tool offers a way to **seed** our database; in other words, pre-populate our tables.

Similarly to migrations, we want to customize where our seed files are generated using our knexfile

To create a seed run: knex seed:make 001-seedName

Numbering is a good idea because Knex doesn't attach a timestamp to the name like migrate does. Adding numbers to the file name, we can control the order in which they run.

We want to create seeds for our accounts table:

knex seed:make 001-accounts

A file will appear in the designated seed folder.

Run the seed files by typing:

knex seed:run

You can now use SQLite Studio to confirm that the accounts table has two entries.

# Day #3:

## **Overview**

**Foreign keys** are a type of table field used for creating links between tables. Like **primary keys**, they are most often integers that identify (rather than store) data. However, whereas a primary key is used to id rows in a table, foreign keys are used to connect a record in one table to a record in a second table.

## **Follow Along**

Consider the following farms and ranchers tables.

[Untitled](https://www.notion.so/5b20c5e233dd4a70a33d6ab2c2e1c8bb)

[Untitled](https://www.notion.so/0b0a909c24a9474fb9df80938546f12a)

The farm_id in the ranchers table is an example of a foreign key. Each entry in the farm_id (foreign key) column corresponds to an id (primary key) in the farms table. This allows us to track which farm each rancher belongs to while keeping the tables normalized.

If we could only see the ranchers table, we would know that John, Jane, and Jen all work together and that Jim and Jay also work together. However, to know where any of them work, we would need to look at the farms table.

Now that we understand the basics of querying data from a single table, let's move on to selecting data from multiple tables using JOIN operations.

## **Overview**

We can use a JOIN to combine query data from multiple tables using a single SELECT statement.

There are different types of joins; some are listed below:

-   inner joins.

-   outer joins.

-   left joins.

-   right joins.

-   cross joins.

-   non-equality joins.

-   self joins.

Using joins requires that the two tables of interest contain at least one field with shared information. For example, if a *departments* table has an *id* field, and an employee table has a *department_id* field, and the values that exist in the *id* column of the *departments* table live in the *department_id* field of the employee table, we can use those fields to join both tables like so:

This query will return the data from both tables for every instance where the ON condition is true. If there are employees with no value for department*id or where the value stored in the field does not correspond to an existing id in the* departments *table, then that record will NOT be returned. In a similar fashion, any records from the* departments *table that don't have an employee associated with them will also be omitted from the results. Basically, if the* id\* does not show as the value of department_id for an employee, it won't be able to join.

We can shorten the condition by giving the table names an alias. This is a common practice. Below is the same example using aliases, picking which fields to return and sorting the results:

Notice that we can take advantage of white space and indentation to make queries more readable.

There are several ways of writing joins, but the one shown here should work on all database management systems and avoid some pitfalls, so we recommend it.

The syntax for performing a similar join using Knex is as follows:

## **Follow Along**

A good explanation of how the different types of joins can be seen [in this article from w3resource.com (Links to an external site.)](https://www.w3resource.com/sql/joins/sql-joins.php).

# What is SQL Joins?

An SQL JOIN clause combines rows from two or more tables. It creates a set of rows in a temporary table.

# How to Join two tables in SQL?

A JOIN works on two or more tables if they have at least one common field and have a relationship between them.

JOIN keeps the base tables (structure and data) unchanged.

# Join vs. Subquery

-   JOINs are faster than a subquery and it is very rare that the opposite.

-   In JOINs the RDBMS calculates an execution plan, that can predict, what data should be loaded and how much it will take to processed and as a result this process save some times, unlike the subquery there is no pre-process calculation and run all the queries and load all their data to do the processing.

-   A JOIN is checked conditions first and then put it into table and displays; where as a subquery take separate temp table internally and checking condition.

-   When joins are using, there should be connection between two or more than two tables and each table has a relation with other while subquery means query inside another query, has no need to relation, it works on columns and conditions.

# SQL JOINS: EQUI JOIN and NON EQUI JOIN

The are two types of SQL JOINS - EQUI JOIN and NON EQUI JOIN

1.  SQL EQUI JOIN :

The SQL EQUI JOIN is a simple SQL join uses the equal sign(=) as the comparison operator for the condition. It has two types - SQL Outer join and SQL Inner join.

1.  SQL NON EQUI JOIN :

The **SQL NON EQUI JOIN** is a join uses comparison operator other than the equal sign like >, <, >=, <= with the condition.

**SQL EQUI JOIN : INNER JOIN and OUTER JOIN**

The SQL EQUI JOIN can be classified into two types - INNER JOIN and OUTER JOIN

1.  SQL INNER JOIN

This type of EQUI JOIN returns all rows from tables where the key record of one table is equal to the key records of another table.

1.  SQL OUTER JOIN

This type of EQUI JOIN returns all rows from one table and only those rows from the secondary table where the joined condition is satisfying i.e. the columns are equal in both tables.

In order to perform a JOIN query, the required information we need are:

**a)** The name of the tables**b)** Name of the columns of two or more tables, based on which a condition will perform.

**Syntax:**

**Parameters:**

[Untitled](https://www.notion.so/5522c3e6d5d0443eb870f7a34f60c7ff)

**Pictorial Presentation of SQL Joins:**

![](https://www.w3resource.com/w3r_images/sql-joins-all.gif)

**Example:**

**Sample table: company**

**Sample table: foods**

To join two tables 'company' and 'foods', the following SQL statement can be used :

**SQL Code:**

Copy

Output:

## **Overview**

While we can write database code directly into our endpoints, best practices dictate that all database logic exists in separate, modular methods. These files containing database access helpers are often called **models**

## **Follow Along**

To handle CRUD operations for a single resource, we would want to create a **model** (or database access file) containing the following methods:

Each of these functions would use Knex logic to perform the necessary database operation.

For each method, we can choose what value to return. For example, we may prefer findById() to return a single user object rather than an array.

We can also use existing methods like findById() to help add() return the new user (instead of just the id).

Once all methods are written as desired, we can export them like so:

…and use the helpers in our endpoints

There should no be knex code in the endpoints themselves.

# Day #4:

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ecaf43d-ee27-4da1-aa3c-aa1d9d96cc40/Untitled.png)

## **Overview**

Normalization is the process of designing or refactoring database tables for maximum consistency and minimum redundancy.

With objects, we're used to *denormalized* data, stored with ease of use and speed in mind. Non-normalized tables are considered ineffective in relational databases.

## **Follow Along**

**Data normalization** is a deep topic in database design. To begin thinking about it, we'll explore a few basic guidelines and some data examples that violate these rules.

### **Normalization Guidelines**

-   Each record has a primary key.

-   No fields are repeated.

-   All fields relate directly to the key data.

-   Each field entry contains a single data point.

-   There are no redundant entries.

### **Denormalized Data**

[Untitled](https://www.notion.so/19a01f68a659470fb85bbe6906fb4bad)

This table has two issues. There is no proper id field (as multiple farms may have the same name), and multiple fields are representing the same type of data: animals.

[Untitled](https://www.notion.so/075ad6dd99ac48698625d7b56ca67bef)

While we have now eliminated the first two issues, we now have multiple entries in one field, separated by commas. This isn't good either, as its another example of denormalization. There is no "array" data type in a relational database, so each field must contain only one data point.

[Untitled](https://www.notion.so/375a15b0cb3f444a8698cd6cb3a08fe0)

Now we've solved the multiple fields issue, but we created repeating data (the farm field), which is also an example of denormalization. As well, we can see that if we were tracking additional ranch information (such as annual revenue), that field is only vaguely related to the animal information.

**When these issues begin arising in your schema design, it means that you should separate information into two or more tables.**

### **Anomalies**

Obeying the above guidelines prevent **anomalies** in your database when inserting, updating, or deleting. For example, imagine if the revenue of Beech Ranch changed. With our denormalized schema, it may get updated in some records but not others:

[Untitled](https://www.notion.so/e05f5b2e8ff141798adc6f188f56f31e)

Similarly, if Beech Ranch shut down, there would be three (if not more) records that needed to be deleted to remove a single farm.

Thus a denormalized table opens the door for contradictory, confusing, and unusable data.

## **Challenge**

What issues does the following table have?

[Untitled](https://www.notion.so/2793e8f6b70a47f48f9208779366e69e)

## **Overview**

There are three types of relationships:

-   One to one.

-   One to many.

-   Many to many.

Determining how data is related can provide a set of guidelines for table representation and guides the use of foreign keys to connect said tables.

## **Follow Along**

### **One to One Relationships**

Imagine we are storing the financial projections for a series of farms.

We may wish to attach fields like farm name, address, description, projected revenue, and projected expenses. We could divide these fields into two categories: information related to the farm directly (name, address, description) and information related to the financial projections (revenue, expenses).

We would say that farms and projections have a **one-to-one** relationship. This is to say that every farm has exactly one projection, and every project corresponds to exactly one farm.

This data can be represented in two tables: farms and projections

[Untitled](https://www.notion.so/944e594f3464473ea06383bfdea13265)

[Untitled](https://www.notion.so/de32fcf6760e45f284707274433fee92)

The farm_id is the foreign key that links farms and projections together.

Notes about one-to-one relationships:

-   The foreign key should always have a unique constraint to prevent duplicate entries. In the example above, we wouldn't want to allow multiple projections records for one farm.

-   The foreign key can be in either table. For example, we may have had a projection_id in the farms table instead. A good rule of thumb is to put the foreign key in whichever table is more auxiliary to the other.

-   You can represent one-to-one data in a single table *without* creating anomalies. However, it is sometimes prudent to use two tables as shown above to keep separate concerns in separate tables.

### **One to Many Relationships**

Now imagine, we are storing the full-time ranchers employed at each farm. In this case, each rancher would only work at one farm however, each farm may have multiple ranchers.

This is called a **one-to-many** relationship.

This is the most common type of relationship between entities. Some other examples:

-   One customer can have many orders.

-   One user can have many posts.

-   One post can have many comments.

Manage this type of relationship by adding a foreign key on the "many" table of the relationship that points to the primary key on the "one" table. Consider the farms and ranchers tables.

[Untitled](https://www.notion.so/7dfd2e69c9804a01845f2e9b716a5ac2)

[Untitled](https://www.notion.so/c95f3d418db94ab4b4532eeba0e4f918)

In a many-to-many relationship, the foreign key (in this case farm_id) should *not* be unique.

### **Many to Many Relationships**

If we want to track animals on a farm as well, we must explore the **many-to-many** relationship. A farm has multiple animals, and multiple of each type of animal is present at multiple different farms.

Some other examples:

-   an order can have many products and the same product will appear in many orders.

-   a book can have more than one author, and an author can write more than one book.

To model this relationship, we need to introduce an **intermediary table** that holds foreign keys that reference the primary key on the related tables. We now have a farms, animals, and farm_animals table.

[Untitled](https://www.notion.so/3269812d7c2a4578b1a9f6bc27e485b1)

[Untitled](https://www.notion.so/c2642c7f632f489cb1b9639c80b8400d)

[Untitled](https://www.notion.so/d0b0042c5e104edd9ed55e122af89084)

While each foreign key on the intermediary table is not unique, the combinations of keys should be unique.

## **Overview**

The Knex query builder library also allows us to create multi-table schemas include foreign keys. However, there are a few extra things to keep in mind when designing a multi-table schema, such as using the correct order when creating tables, dropping tables, seeding data, and removing data.

We have to consider the way that delete and updates through our API will impact related data.

## **Follow Along**

### **Foreign Key Setup**

In Knex, foreign key restrictions don't automatically work. Whenever using foreign keys in your schema, add the following code to your knexfile. This will prevent users from entering bad data into a foreign key column.

### **Migrations**

Let's look at how we might track our farms and ranchers using Knex. In our migration file's up function, we would want to create two tables:

Note that the foreign key can only be created *after* the reference table.

In the down function, the opposite is true. We always want to drop a table with a foreign key *before* dropping the table it references.

In the case of a many-to-many relationship, the syntax for creating an intermediary table is identical, except for one additional piece. We need a way to make sure our combination of foreign keys is unique.

### **Seeds**

Order is also a concern when seeding. We want to create seeds in the **same** order we created our tables. In other words, don't create a seed with a foreign key, until that reference record exists.

In our example, make sure to write the 01-farms seed file and then the 02-ranchers seed file.

However, we run into a problem with truncating our seeds, because we want to truncate 02-ranchers *before* 01-farms. A library called knex-cleaner provides an easy solution for us.

Run knex seed:make 00-cleanup and npm install knex-cleaner. Inside the cleanup seed, use the following code.

This removes all tables (excluding the two tables that track migrations) in the correct order before any seed files run.

### **Cascading**

If a user attempt to delete a record that is referenced by another record (such as attempting to delete Morton Ranch when entries in our ranchers table reference that record), by default, the database will block the action. The same thing can happen when updating a record when a foreign key reference.

If we want that to override this default, we can delete or update with **cascade**. With cascade, deleting a record also deletes all referencing records, we can set that up in our schema.
