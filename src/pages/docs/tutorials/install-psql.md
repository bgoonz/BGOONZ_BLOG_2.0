---
title: Install PostgreSQL
weight: 0
excerpt: Walkthroughs of various development activities and skills
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---



PostgreSQL was developed for UNIX-like platforms, however, it was designed to be portable. It means that PostgreSQL can also run on other platforms such as macOS, Solaris, and Windows.

Since version 8.0, PostgreSQL offers an installer for Windows systems that makes the installation process easier and faster. For development purposes, we will install PostgreSQL version 12 on Windows 10.

There are three steps to complete the PostgreSQL installation:

1.  Download PostgreSQL installer for Windows
2.  Install PostgreSQL
3.  Verify the installation

1) Download PostgreSQL Installer for Windows
--------------------------------------------

First, you need to go to the download page of [PostgreSQL installers on the EnterpriseDB](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).

Second, click the download link as shown below:

![Download PostgreSQL](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Download-PostgreSQL.png)

It will take a few minutes to complete the download.

2) Install PostgreSQL on Window step by step
--------------------------------------------

To install PostgreSQL on Windows, you need to have administrator privileges.

Step 1. Double click on the installer file, an installation wizard will appear and guide you through multiple steps where you can choose different options that you would like to have in PostgreSQL.

Step 2. Click the Next button

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-1.png)

Step 3. Specify installation folder, choose your own or keep the default folder suggested by PostgreSQL installer and click the Next button

-   ![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-2.png)

Step 4. Select software components to install:

-   The PostgreSQL Server to install the PostgreSQL database server
-   pgAdmin 4 to install the PostgreSQL database GUI management tool.
-   Command Line Tools to install command-line tools such as psql, pg_restore, etc. These tools allow you to interact with the PostgreSQL database server using the command-line interface.
-   Stack Builder provides a GUI that allows you to download and install drivers that work with PostgreSQL.

For the tutorial on this website, you don't need to install Stack Builder so feel free to uncheck it and click the Next button to select the data directory:

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-3.png)

Step 5. Select the database directory to store the data or accept the default folder. And click the Next button to go to the next step:

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-4.png)

Step 6. Enter the password for the database superuser (postgres)

PostgreSQL runs as a service in the background under a service account named `postgres`. If you already created a service account with the name `postgres`, you need to provide the password of that account in the following window.

After entering the password, you need to retype it to confirm and click the Next button:

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-5.png)

Step 7. Enter a port number on which the PostgreSQL database server will listen. The default port of PostgreSQL is 5432. You need to make sure that no other applications are using this port.

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-6.png)

Step 8. Choose the default locale used by the PostgreSQL database. If you leave it as default locale, PostgreSQL will use the operating system locale. After that click the Next button.

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-7.png)

Step 9. The setup wizard will show the summary information of PostgreSQL. You need to review it and click the Next button if everything is correct. Otherwise, you need to click the Back button to change the configuration accordingly.

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-8.png)

Now, you're ready to install PostgreSQL on your computer. Click the Next button to begin installing PostgreSQL.

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-9.png)

The installation may take a few minutes to complete.

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-10.png)

Step 10. Click the Finish button to complete the PostgreSQL installation.

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-11.png)

3) Verify the Installation
--------------------------

There are several ways to verify the PostgreSQL installation. You can try to [connect to the PostgreSQL](https://www.postgresqltutorial.com/connect-to-postgresql-database/ "Connect to PostgreSQL Database") database server from any client application e.g., psql and pgAdmin.

The quick way to verify the installation is through the psql program.

First, click the `psql` application to launch it. The psql command-line program will display.

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-psql.png)

Second, enter all the necessary information such as the server, database, port, username, and password. To accept the default, you can press Enter.  Note that you should provide the password that you entered during installing the PostgreSQL.

`Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Password for user postgres:
psql (12.3)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=#`

Code language: Shell Session (shell)

Third, issue the command `SELECT version();` you will see the following output:

![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-psql-verification.png)

Congratulation! you've successfully installed PostgreSQL database server on your local system. Let's learn various ways to [connect to PostgreSQL database server](https://www.postgresqltutorial.com/connect-to-postgresql-database/ "Connect to PostgreSQL Database").