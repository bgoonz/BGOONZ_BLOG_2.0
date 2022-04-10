To connect to a database:
=========================

mysql -h -u -p

To backup all databases:
========================

mysqldump –all-databases –all-routines -u -p &gt; ~/dump.sql

To restore all databases:
=========================

mysql -u -p &lt; ~/fulldump.sql

To create a database in utf8 charset:
=====================================

CREATE DATABASE owa CHARACTER SET utf8 COLLATE utf8\_general\_ci;

To add a user and give rights on the given database:
====================================================

GRANT ALL PRIVILEGES ON database.\* TO ‘user’@‘localhost’IDENTIFIED BY ’password’ WITH GRANT OPTION;

To list the privileges granted to the account that you are using to connect to the server. Any of the 3 statements will work. :
===============================================================================================================================

SHOW GRANTS FOR CURRENT\_USER(); SHOW GRANTS; SHOW GRANTS FOR CURRENT\_USER;

Basic SELECT Statement:
=======================

SELECT \* FROM tbl\_name;

Basic INSERT Statement:
=======================

INSERT INTO tbl\_name (col1,col2) VALUES(15,col1\*2);

Basic UPDATE Statement:
=======================

UPDATE tbl\_name SET col1 = "example”;

Basic DELETE Statement:
=======================

DELETE FROM tbl\_name WHERE user = ‘jcole’;

To check stored procedure:
==========================

SHOW PROCEDURE STATUS;

To check stored function:
=========================

SHOW FUNCTION STATUS;
