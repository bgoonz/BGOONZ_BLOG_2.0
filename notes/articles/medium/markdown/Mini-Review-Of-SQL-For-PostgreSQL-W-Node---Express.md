Mini Review Of SQL For PostgreSQL W Node & Express
==================================================

What is a Query?

------------------------------------------------------------------------

### Mini Review Of SQL For PostgreSQL W Node & Express

#### **What is a Query?**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LU-Sn7CDRHyY78nD.jpeg" class="graf-image" /></figure>### Using Select

**What is a Query?**

-   <span id="2026">`Query` : A question we're asking a database, aiming to get a response back.</span>
-   <span id="e626">`psql -U postgres`</span>
-   <span id="f34d">Let’s us access the postgres server as the user ‘postgres’</span>
-   <span id="113b">`-U` stands for 'user'.</span>
-   <span id="60c5">`\q` is used to quit postgres at any time.</span>

<!-- -->

    create table puppies (
      name VARCHAR(100),
      age_yrs NUMERIC(2,1),
      breed VARCHAR(100),
      weight_lbs INT,
      microchipped BOOLEAN
    );

    insert into puppies
    values
    ('Cooper', 1, 'Miniature Schnauzer', 18, 'yes');

    insert into puppies
    values
    ('Indie', 0.5, 'Yorkshire Terrier', 13, 'yes'),
    ('Kota', 0.7, 'Australian Shepherd', 26, 'no'),
    ('Zoe', 0.8, 'Korean Jindo', 32, 'yes'),
    ('Charley', 1.5, 'Basset Hound', 25, 'no'),
    ('Ladybird', 0.6, 'Labradoodle', 20, 'yes'),
    ('Callie', 0.9, 'Corgi', 16, 'no'),
    ('Jaxson', 0.4, 'Beagle', 19, 'yes'),
    ('Leinni', 1, 'Miniature Schnauzer', 25, 'yes' ),
    ('Max', 1.6, 'German Shepherd', 65, 'no');

-   <span id="2c10">SQL Data Types listed here:</span>
-   <span id="e3ef">`varchar(n)` : variable length char, n represents the limit.</span>
-   <span id="3af6">`numeric(p, s)` : floating point number, with *p* digits and *s* number of places after the decimal point.</span>
-   <span id="2eff">`int` : 4 byte integer.</span>
-   <span id="a736">`boolean` : regular boolean value.</span>
-   <span id="1ff4">`SELECT Query` : Query used to get results back from a table.</span>
-   <span id="d1a2">Syntax `SELECT [columns] FROM [table]`.</span>
-   <span id="d9bb">You can use `SELECT *` to get all rows back in a given table.</span>
-   <span id="96d6">To select multiple columns you could use:</span>

<!-- -->

    SELECT name , age_yrs , weight_lbs FROM puppies;

-   <span id="9e78">It is recommended to perform queries with multi-line formatting because column selection can become very long.</span>
-   <span id="16a2">Also if you format it like this you can easily comment out certain columns with double dash.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*tj99LLWFAJYMoZIf" class="graf-image" /></figure>

------------------------------------------------------------------------

### USING WHERE

**Using SELECT and WHERE**

-   <span id="43bf">We can filter our information from our SELECT queries by using WHERE.</span>

**WHERE clause for a single value**

    SELECT name, breed FROM puppies
      WHERE breed = 'Corgi';

-   <span id="d62e">Note that the string must use single quotation marks because PostgreSQL will convert all names to lowercase unless DOUBLE quoted.</span>

**WHERE clause for a list of values**

    SELECT name, breed FROM puppies
      WHERE breed IN ('Corgi', 'Beagle', 'Yorkshire Terrier');

-   <span id="94cc">Use the structure WHERE \[col\] IN (‘val’, ‘val2’…)</span>

**WHERE clause for a range of values**

    SELECT name, breed, age_yrs FROM puppies
      WHERE age_yrs BETWEEN 0 AND 0.6;

**ORDER BY**

-   <span id="b401">You can use `Order By` to get back your data in a specified way.</span>

<!-- -->

    SELECT name, breed
    FROM puppies
    ORDER BY age_yrs DESC;

**LIMIT and OFFSET**

-   <span id="3943">You can limit the amount of rows returned by using the LIMIT keyword.</span>

<!-- -->

    SELECT name, breed
    FROM puppies
    ORDER BY age_yrs
    LIMIT 100 OFFSET 100;

-   <span id="7340">You can on the OFFSET keyword after LIMIT to retrieve the next 100 after the LIMIT clause.</span>

**SQL operators**

<figure><img src="https://cdn-images-1.medium.com/max/800/0*u9zQKiyH8RiwHczk.png" class="graf-image" /></figure>SELECT name, breed FROM puppies
      WHERE breed NOT IN ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle')
        AND breed NOT LIKE '%Shepherd';

-   <span id="f700">Example of a query with a WHERE clause using several logical operators.</span>
-   <span id="d31c">The % is a wildcard.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*662qwyPcdX2fxy6Q.png" class="graf-image" /></figure>-   <span id="d0b9">You can also use mathematical operators in WHERE clauses.</span>

<!-- -->

    SELECT name, breed, age_yrs FROM puppies
      WHERE age_yrs * 10 = 6;

<figure><img src="https://cdn-images-1.medium.com/max/800/0*FbpEHXEfQGBl9B2w.png" class="graf-image" /></figure>-   <span id="9442">You can also use comparison operators.</span>

<!-- -->

    SELECT name, breed, weight_lbs FROM puppies
      WHERE weight_lbs > 50;

------------------------------------------------------------------------

### Using INSERT

-   <span id="8b98">Used to add data into a table.</span>

<!-- -->

    INSERT INTO table_name
    VALUES
      (column1_value, colum2_value, column3_value);

    INSERT INTO friends (first_name, last_name)
    VALUES
    ('Rose', 'Tyler'),
    ('Martha', 'Jones'),
    ('Donna', 'Noble'),
    ('River', 'Song');

-   <span id="2291">Note the use of single quotation marks for string values.</span>
-   <span id="810d">DEFAULT can be used in lieu of our SERIAL pseudo type.</span>
-   <span id="94af">You can do multiple insert by first specifying the column names and the adding in the data wrapped in parenthesis seperated by a comma.</span>

### Using INNER JOIN

-   <span id="8c61">Relationships are key in RD’s.</span>
-   <span id="b080">We create table associations through *foreign keys* and *primary keys*.</span>

<!-- -->

    SELECT * FROM puppies
    INNER JOIN breeds ON (puppies.breed_id = breeds.id);

------------------------------------------------------------------------

### Using Seed Files

**Writing And Running A Seed File In PSQL**

-   <span id="bf27">Seeding is the act of populating a database with data.</span>

**Creating a seed file**

-   <span id="b5dd">Start by making a seed file in your IDE with `.sql` file type.</span>

<!-- -->

    CREATE TABLE pies (
      flavor VARCHAR(255) PRIMARY KEY,
      price FLOAT
    );

    INSERT INTO pies VALUES('Apple', 19.95);
    INSERT INTO pies VALUES('Caramel Apple Crumble', 20.53);
    INSERT INTO pies VALUES('Blueberry', 19.31);
    INSERT INTO pies VALUES('Blackberry', 22.86);
    INSERT INTO pies VALUES('Cherry', 22.32);
    INSERT INTO pies VALUES('Peach', 20.45);
    INSERT INTO pies VALUES('Raspberry', 20.99);
    INSERT INTO pies VALUES('Mixed Berry', 21.45);

**Populating a database via &lt; (“left caret”)**

-   <span id="0880">Syntax :  
    `psql -d [database] < [path_to_file/file.sql]`  
    `psql -d bakery < path_to_my_file/seed-data.sql`</span>

**Populating the database via | (“pipe”)**

-   <span id="e1ff">Syntax :  
    `cat [path_to_file/file.sql] | psql -d [database]`  
    `cat path_to_my_file/seed-data.sql | psql -d postgres`</span>

### Relational Database Design

### Creating a Schema For Relational Database Design

-   <span id="ab7f">Schemas allow us to easily visualize database tables and their relationships to one another.</span>

**What is Relational Database Design?**

-   <span id="c8bd">**RDD** : Relational Database Design differs from other Databases because data is organized into tables and all types of data access are carried out via controlled transactions.</span>
-   <span id="088e">Remember: Tables = Entities, Rows = Records, Columns = Fields.</span>

**Stages of Relational Database Design**

1.  <span id="62c5">`Define the purpose & entitites of the Relational DB.`</span>

-   <span id="e1e7">Why is the database being created?</span>
-   <span id="dcfc">What problem is it solving?</span>
-   <span id="d2b6">What is the data used for?</span>

1.  <span id="0784">`Identify the Primary keys.`</span>

-   <span id="8d90">Identify the PK of each table.</span>

1.  <span id="0ec6">`Establish Table Relationships.`</span>

-   <span id="93f7">There are theee types of relational database table relationships:</span>

1.  <span id="c34b">**One-To-One**</span>

-   <span id="e3aa">One record in a table is associated with only one record in another table.</span>
-   <span id="258f">The least common type of table relationship.</span>

1.  <span id="1afc">**One-To-Many**</span>

-   <span id="ffbf">Each record in a table is associated with multiple records in another table.</span>

1.  <span id="f087">**Many-To-Many**</span>

-   <span id="69de">Multiple records in one table are associated with multiple records in another table.</span>
-   <span id="3c48">Usually we would create a third table for this relationship called a `join table`</span>

1.  <span id="f73a">`Apply Normalization Rules.`</span>

-   <span id="16ec">`Normalization` : Process of optimizing the database structure so that redundancy and confusion are eliminated.</span>
-   <span id="6e1e">Rules are called ‘normal forms’</span>

1.  <span id="950c">First normal form.</span>

-   <span id="6915">Eliminate repeating groups in tables.</span>
-   <span id="ced9">Create sep. table for each set of related data.</span>
-   <span id="98cd">ID each set of related data with a primary key.</span>

1.  <span id="2cb4">Second normal form.</span>

-   <span id="8a62">Create sep. tables for sets of values that apply to multiple records.</span>
-   <span id="7ad9">Related these tables with a foreign key.</span>

1.  <span id="7c97">Third normal form.</span>

-   <span id="a141">Eliminate fields that do not depend on the table’s key.</span>

1.  <span id="6611">Boyce-Codd normal form.</span>
2.  <span id="e505">Fifth normal form.</span>

-   <span id="49d0">The first three are widely used in practice and the fourth/fifth less so.</span>

------------------------------------------------------------------------

### Transactions

-   <span id="d642">Using Transactions allow us to make changes to a SQL database in a consistent and durable way, and it is considered best practice to use them regularly.</span>
-   <span id="bf44">`Transaction` : Single unit of work, which can contain multiple operations, performed on a database.</span>
-   <span id="708d">Bundles multiple steps into a single, all-or-nothing operation.</span>

**Implicit vs. explicit transactions**

-   <span id="2c5c">Technically every SQL statement is a transaction.</span>

<!-- -->

    INSERT INTO hobbits(name,purpose)
      VALUES('Frodo','Destroy the One Ring of power.');

-   <span id="c72a">This statement would be a `implicit` transaction.</span>
-   <span id="6a91">On the flip side `explicit` transactions will allow us to create save points and roll back to whatever point in time we choose.</span>

**PostgreSQL transactional commands**

-   <span id="7400">`BEGIN` : Initiates a transaction block. All Statements after a BEGIN command will be executed in a single transaction until COMMIT or ROLLBACK is called.</span>

<!-- -->

    BEGIN;
      INSERT INTO hobbits(name,purpose)
        VALUES('Frodo','Destroy the One Ring of power.');

-   <span id="ae31">`COMMIT` : Commits a current transaction, all changes made by this transaction become visible to others and are guaranteed to be durable if a crash occurs.</span>

<!-- -->

    BEGIN;
      INSERT INTO hobbits(name,purpose)
        VALUES('Frodo','Destroy the One Ring of power.');
    COMMIT;

-   <span id="a20c">`ROLLBACK` : Rolls back current transaction and removes all updates made by the transaction.</span>

<!-- -->

    BEGIN;
      INSERT INTO hobbits(name,purpose)
        VALUES('Frodo','Destroy the One Ring of power.');
    ROLLBACK;

-   <span id="0aa4">`SAVEPOINT` : Establishes a new save point within the current transaction.</span>

<!-- -->

    BEGIN;
      DELETE FROM fellowship
        WHERE age > 100;
      SAVEPOINT first_savepoint;
      DELETE FROM fellowship
        WHERE age > 80;
      DELETE FROM fellowship
        WHERE age >= 40;
      ROLLBACK TO first_savepoint;
    COMMIT;

-   <span id="5b46">`SET TRANSACTION` : Sets the characteristics of the current transaction.</span>

<!-- -->

    BEGIN;
      SET TRANSACTION READ ONLY;
      ...
    COMMIT;

**When to use transactions and why**

-   <span id="2649">Good to use when making any updates, insertions, or deletions to a database.</span>
-   <span id="9ade">Help us deal with crashes, failures, data consistency, and error handling.</span>
-   <span id="0228">`Atomicity` is another feature that is a benefit of transactions.</span>

**Transaction properties: ACID**

-   <span id="1cd4">A SQL transaction has four properties known collectively as `ACID` (Atomic, Consistent, Isolated, and Durable)</span>
-   <span id="7c59">`Atomicity` : All changes to data are performed as if they are a single operation.</span>
-   <span id="1e1b">You can also refer to the A as ‘Abortability’</span>
-   <span id="34fa">I.E. if an app transfers funds from one account to another, the atomic nature of transactions will ensure that if a debt is successfully made, the credit will be properly transferred.</span>
-   <span id="1be1">`Consistency` : Data is in a consistent start when a transaction starts and ends.</span>
-   <span id="0ffb">I.E. if a transfer is scheduled, this prop ensures total value of funds in both accounts is the same at the start and end of a transaction.</span>
-   <span id="bc89">`Isolation` : Intermediate state of a transaction is invisible to othe rtransactioned, they appear to be serialized.</span>
-   <span id="ce2d">I.E. continuing our money transfer example, when a transfer occurs this prop ensures that transactions can see funds in one account or the other BUT NOT both NOR neither.</span>
-   <span id="8fcd">`Durable` : After a transaction successfully completes, changes to data persists and are not undone even in system failure.</span>
-   <span id="cb8d">I.E. this prop ensures our transaction will success and cannot be reversed in the event of a failure.</span>

**Banking transaction example**

    BEGIN;
      UPDATE accounts SET balance = balance - 100.00
          WHERE name = 'Alice';
      UPDATE branches SET balance = balance - 100.00
          WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Alice');
      UPDATE accounts SET balance = balance + 100.00
          WHERE name = 'Bob';
      UPDATE branches SET balance = balance + 100.00
          WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Bob');
    COMMIT;

------------------------------------------------------------------------

### Subqueries and JOINs

**Joins vs. Subqueries**  
**What is a JOIN?**

-   <span id="6e9d">JOIN allows us to retrieve rows from multiple tables.</span>

<!-- -->

    SELECT * FROM puppies
    INNER JOIN breeds ON (puppies.breed_id = breeds.id);

-   <span id="c49e">There are a few different types of JOIN operations:</span>
-   <span id="405d">`Inner Join` : Returns results containing rows in the left table that match rows in the right table.</span>
-   <span id="10a2">`Left Join` : Returns a set of results containing all rows from the left table with the matching rows from the right table. If there is no match, the right side will have null values.</span>
-   <span id="6b72">`Right Join` : Returns a set of results containing all rows from the right table with the matching rows from the left table. If there is no match, the left side will have null values.</span>
-   <span id="30f3">`Full Outer Join` : Returns a set of results containing all rows from both the left and right tables, with matching rows from both sides where avail. If there is no match the missing side contains null values.</span>
-   <span id="cb22">`Self-Join` : Query in which a table is joined to itslef, useful for comparing values in a column of rows within the same table.</span>

**What is a subquery?**

-   <span id="29b8">A SELECT statement nested inside another SELECT statement.</span>

<!-- -->

    postgres=# SELECT * FROM puppies;
     id |   name   | age_yrs | breed_id | weight_lbs | microchipped
    ----+----------+---------+----------+------------+--------------
      1 | Cooper   |     1.0 |        8 |         18 | t
      2 | Indie    |     0.5 |        9 |         13 | t
      3 | Kota     |     0.7 |        1 |         26 | f
      4 | Zoe      |     0.8 |        6 |         32 | t
      5 | Charley  |     1.5 |        2 |         25 | f
      6 | Ladybird |     0.6 |        7 |         20 | t
      7 | Callie   |     0.9 |        4 |         16 | f
      8 | Jaxson   |     0.4 |        3 |         19 | t
      9 | Leinni   |     1.0 |        8 |         25 | t
     10 | Max      |     1.6 |        5 |         65 | f
    (10 rows)

    SELECT
      puppies.name,
      age_yrs,
      breeds.name
    FROM
      puppies
    INNER JOIN
      breeds ON (breeds.id = puppies.breed_id)
    WHERE
      age_yrs > (
        SELECT
          AVG (age_yrs)
        FROM
          puppies
      );

**Multiple-row subquery**

    SELECT *
    FROM friends
    WHERE
      puppy_id IN (
        SELECT puppy_id
        FROM puppies
        WHERE
          age_yrs < 0.6
      );

-   <span id="9abf">We can also use a JOIN operation instead of the WHERE clause like in the above example.</span>

<!-- -->

    SELECT *
    FROM friends
    INNER JOIN puppies ON (puppies.puppy_id = friends.puppy_id)
    WHERE
      puppies.age_yrs < 0.6;

**Should I use a JOIN or a subquery?**

-   <span id="569f">Joins are better when you want to combine rows from one or more tables based on a match condition.</span>
-   <span id="3175">Subqueries work great when you’re only returning a single value.</span>
-   <span id="b6fb">When returning multiple rows, you could go with either subQ’s or joins.</span>

------------------------------------------------------------------------

### Indexes and Performance Analysis

-   <span id="fc7a">`PostgreSQL Index` : Works similarly like an index in the back of a book, they provide special lookup tables to let us make faster database queries.</span>
-   <span id="cb65">The Syntax for creating index is as follows:</span>

<!-- -->

    CREATE INDEX index_name ON table_name (column_name);

    CREATE INDEX addresses_phone_index ON addresses (phone_number);

    DROP INDEX addresses_phone_index;

**Types of indexes**

There are several types of indexes use in Postgres: B-tree, Hash, GiST, and GIN.

-   <span id="19e4">`Single-Column Indexes` Uses only one table column.</span>
-   <span id="d09d">`CREATE INDEX addresses_phone_index ON addresses (phone_number);`</span>
-   <span id="31d2">`Multiple-Column Indexes` Uses more than one table column.</span>
-   <span id="d219">`CREATE INDEX idx_addresses_city_post_code ON table_name (city_id, postal_code);`</span>
-   <span id="c2ad">`Partial Indexes` Uses subset of a table defined by a conditional expression.</span>
-   <span id="37df">`CREATE INDEX addresses_phone_index ON addresses (phone_number) WHERE (city_id = 2);`</span>

**When to use an index**

-   <span id="e4ea">Overall DB indexes are known to enhance performance when performing queries, however there are certain situations where it is not recommended:</span>
-   <span id="7095">When working with small tables.</span>
-   <span id="5829">When table has large batch updates or insert operations.</span>
-   <span id="d017">When working with columns that have many NULL values.</span>
-   <span id="a1d6">When working with columns that are frequently manipulated.</span>
-   <span id="9bdf">Using EXPLAIN and ANALYZE keywords can give us performance data of our queries.</span>

<!-- -->

    EXPLAIN ANALYZE SELECT *
    FROM tenk1 t1, tenk2 t2
    WHERE t1.unique1 < 100 AND t1.unique2 = t2.unique2;

                                                                QUERY PLAN
    ----------------------------------------------------------------------------------------------------------------------------------
     Nested Loop  (cost=2.37..553.11 rows=106 width=488) (actual time=1.392..12.700 rows=100 loops=1)
       ->  Bitmap Heap Scan on tenk1 t1  (cost=2.37..232.35 rows=106 width=244) (actual time=0.878..2.367 rows=100 loops=1)
             Recheck Cond: (unique1 < 100)
             ->  Bitmap Index Scan on tenk1_unique1  (cost=0.00..2.37 rows=106 width=0) (actual time=0.546..0.546 rows=100 loops=1)
                   Index Cond: (unique1 < 100)
       ->  Index Scan using tenk2_unique2 on tenk2 t2  (cost=0.00..3.01 rows=1 width=244) (actual time=0.067..0.078 rows=1 loops=100)
             Index Cond: (unique2 = t1.unique2)
     Total runtime: 14.452 ms

------------------------------------------------------------------------

### Accessing Data from Node.js

**Node-Postgres And Prepared Statements**

-   <span id="56a1">The **node-postgres** library is the library used for node apps to connect to postgres applications.</span>

**Connecting**

-   <span id="2f98">Use a POOL of client objects to connect to the database.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*CVhxtep5CrAqP_rN.png" class="graf-image" /></figure>const { Pool } = require("pg");

    const pool = new Pool({
      user: "application_user",
      password: "iy7qTEcZ",
    });

    const results = await pool.query(`
      SELECT id, name, age_yrs
      FROM puppies;
    `);

    console.log(results);

**Prepared Statement**

-   <span id="37b9">Prepared Statements are SQL statements that parameters in them that you can substitute values.</span>

<!-- -->

    in inside an array.

    await pool.query(`
      INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
      VALUES ($1, $2, $3, $4, $5);
    `, [name, age, breedName, weight, isMicrochipped]);

    const { Pool } = require("pg");

    const allPuppiesSql = `
      SELECT id, name, age_yrs, breed, weight_lbs, microchipped
      FROM puppies;
    `;

    const pool = new Pool({
      database: "«database name»",
    });

    async function selectAllPuppies() {
      const results = await pool.query(allPuppiesSql);
      console.log(results.rows);
      pool.end();
    }

    const id = Number.parseInt(process.argv[2]);
    selectOnePuppy(id);

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 6, 2021](https://medium.com/p/f34676f3802b).

<a href="https://medium.com/@bryanguner/mini-review-of-sql-for-postgresql-w-node-express-f34676f3802b" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
