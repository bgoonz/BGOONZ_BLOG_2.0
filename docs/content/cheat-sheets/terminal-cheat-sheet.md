Terminal Cheat Sheet
====================

### 1 - SYSTEM INFORMATION

\# Display Linux system information uname -a

Display kernel release information
----------------------------------

uname -r

Show which version of Red Hat installed
---------------------------------------

cat /etc/redhat-release

Show how long the system has been running + load
------------------------------------------------

uptime

Show system host name
---------------------

hostname

Display all local IP addresses of the host.
-------------------------------------------

hostname -I

Show system reboot history
--------------------------

last reboot

Show the current date and time
------------------------------

date

Show this month’s calendar
--------------------------

cal

Display who is online
---------------------

w

Who you are logged in as
------------------------

whoami

### 2 - HARDWARE INFORMATION

\# Display messages in kernel ring buffer dmesg

Display CPU information
-----------------------

cat /proc/cpuinfo

Display memory information
--------------------------

cat /proc/meminfo

Display free and used memory ( -h for human readable, -m for MB, -g for GB.)
----------------------------------------------------------------------------

free -h

Display PCI devices
-------------------

lspci -tv

Display USB devices
-------------------

lsusb -tv

Display DMI/SMBIOS (hardware info) from the BIOS
------------------------------------------------

dmidecode

Show info about disk sda
------------------------

hdparm -i /dev/sda

Perform a read speed test on disk sda
-------------------------------------

hdparm -tT /dev/sda

Test for unreadable blocks on disk sda
--------------------------------------

badblocks -s /dev/sda

### 3 - PERFORMANCE MONITORING AND STATISTICS

\# Display and manage the top processes top

Interactive process viewer (top alternative)
--------------------------------------------

htop

Display processor related statistics
------------------------------------

mpstat 1

Display virtual memory statistics
---------------------------------

vmstat 1

Display I/O statistics
----------------------

iostat 1

Display the last 100 syslog messages (Use /var/log/syslog for Debian based systems.)
------------------------------------------------------------------------------------

tail -100 /var/log/messages

Capture and display all packets on interface eth0
-------------------------------------------------

tcpdump -i eth0

Monitor all traffic on port 80 ( HTTP )
---------------------------------------

tcpdump -i eth0 ‘port 80’

List all open files on the system
---------------------------------

lsof

List files opened by user
-------------------------

lsof -u user

Display free and used memory ( -h for human readable, -m for MB, -g for GB.)
----------------------------------------------------------------------------

free -h

Execute "df -h”, showing periodic updates
-----------------------------------------

watch df -h

### 4 - USER INFORMATION AND MANAGEMENT

\# Display the user and group ids of your current user. id

Display the last users who have logged onto the system.
-------------------------------------------------------

last

Show who is logged into the system.
-----------------------------------

who

Show who is logged in and what they are doing.
----------------------------------------------

w

Create a group named "test”.
----------------------------

groupadd test

Create an account named john, with a comment of "John Smith” and create the user’s home directory.
--------------------------------------------------------------------------------------------------

useradd -c "John Smith” -m john

Delete the john account.
------------------------

userdel john

Add the john account to the sales group
---------------------------------------

usermod -aG sales john

### 5 - FILE AND DIRECTORY COMMANDS

\# List all files in a long listing (detailed) format ls -al

Display the present working directory
-------------------------------------

pwd

Create a directory
------------------

mkdir directory

Remove (delete) file
--------------------

rm file

Remove the directory and its contents recursively
-------------------------------------------------

rm -r directory

Force removal of file without prompting for confirmation
--------------------------------------------------------

rm -f file

Forcefully remove directory recursively
---------------------------------------

rm -rf directory

Copy file1 to file2
-------------------

cp file1 file2

Copy source\_directory recursively to destination. If destination exists, copy source\_directory into destination, otherwise create destination with the contents of source\_directory.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

cp -r source\_directory destination

Rename or move file1 to file2. If file2 is an existing directory, move file1 into directory file2
-------------------------------------------------------------------------------------------------

mv file1 file2

Create symbolic link to linkname
--------------------------------

ln -s /path/to/file linkname

Create an empty file or update the access and modification times of file.
-------------------------------------------------------------------------

touch file

View the contents of file
-------------------------

cat file

Browse through a text file
--------------------------

less file

Display the first 10 lines of file
----------------------------------

head file

Display the last 10 lines of file
---------------------------------

tail file

Display the last 10 lines of file and "follow” the file as it grows.
--------------------------------------------------------------------

tail -f file

### 6 - PROCESS MANAGEMENT

\# Display your currently running processes ps

Display all the currently running processes on the system.
----------------------------------------------------------

ps -ef

Display process information for processname
-------------------------------------------

ps -ef | grep processname

Display and manage the top processes
------------------------------------

top

Interactive process viewer (top alternative)
--------------------------------------------

htop

Kill process with process ID of pid
-----------------------------------

kill pid

Kill all processes named processname
------------------------------------

killall processname

Start program in the background
-------------------------------

program &

Display stopped or background jobs
----------------------------------

bg

Brings the most recent background job to foreground
---------------------------------------------------

fg

Brings job n to the foreground
------------------------------

fg n

### 7 - FILE PERMISSIONS

![Linux chmod example](https://www.linuxtrainingacademy.com/wp-content/uploads/2017/02/linux-permissions-chart.png) PERMISSION EXAMPLE

U G W rwx rwx rwx chmod 777 filename rwx rwx r-x chmod 775 filename rwx r-x r-x chmod 755 filename rw- rw- r– chmod 664 filename rw- r– r– chmod 644 filename

NOTE: Use 777 sparingly!
------------------------

LEGEND U = User G = Group W = World

r = Read w = write x = execute - = no access

### 8 - NETWORKING

\# Display all network interfaces and IP address ip a

Display eth0 address and details
--------------------------------

ip addr show dev eth0

Query or control network driver and hardware settings
-----------------------------------------------------

ethtool eth0

Send ICMP echo request to host
------------------------------

ping host

Display whois information for domain
------------------------------------

whois domain

Display DNS information for domain
----------------------------------

dig domain

Reverse lookup of IP\_ADDRESS
-----------------------------

dig -x IP\_ADDRESS

Display DNS IP address for domain
---------------------------------

host domain

Display the network address of the host name.
---------------------------------------------

hostname -i

Display all local IP addresses of the host.
-------------------------------------------

hostname -I

Download http://domain.com/file
-------------------------------

wget http://domain.com/file

Display listening tcp and udp ports and corresponding programs
--------------------------------------------------------------

netstat -nutlp

### 9 - ARCHIVES (TAR FILES)

\# Create tar named archive.tar containing directory. tar cf archive.tar directory

Extract the contents from archive.tar.
--------------------------------------

tar xf archive.tar

Create a gzip compressed tar file name archive.tar.gz.
------------------------------------------------------

tar czf archive.tar.gz directory

Extract a gzip compressed tar file.
-----------------------------------

tar xzf archive.tar.gz

Create a tar file with bzip2 compression
----------------------------------------

tar cjf archive.tar.bz2 directory

Extract a bzip2 compressed tar file.
------------------------------------

tar xjf archive.tar.bz2

### 10 - INSTALLING PACKAGES

\# Search for a package by keyword. yum search keyword

Install package.
----------------

yum install package

Display description and summary information about package.
----------------------------------------------------------

yum info package

Install package from local file named package.rpm
-------------------------------------------------

rpm -i package.rpm

Remove/uninstall package.
-------------------------

yum remove package

Install software from source code.
----------------------------------

tar zxvf sourcecode.tar.gz cd sourcecode ./configure make make install

### 11 - SEARCH

\# Search for pattern in file grep pattern file

Search recursively for pattern in directory
-------------------------------------------

grep -r pattern directory

Find files and directories by name
----------------------------------

locate name

Find files in /home/john that start with "prefix”.
--------------------------------------------------

find /home/john -name ‘prefix\*’

Find files larger than 100MB in /home
-------------------------------------

find /home -size +100M

### 12 - SSH LOGINS

\# Connect to host as your local username. ssh host

Connect to host as user
-----------------------

ssh user@host

Connect to host using port
--------------------------

ssh -p port user@host

### 13 - FILE TRANSFERS

\# Secure copy file.txt to the /tmp folder on server scp file.txt server:/tmp

Copy \*.html files from server to the local /tmp folder.
--------------------------------------------------------

scp server:/var/www/\*.html /tmp

Copy all files and directories recursively from server to the current system’s /tmp folder.
-------------------------------------------------------------------------------------------

scp -r server:/var/www /tmp

Synchronize /home to /backups/home
----------------------------------

rsync -a /home /backups/

Synchronize files/directories between the local and remote system with compression enabled
------------------------------------------------------------------------------------------

rsync -avz /home server:/backups/

### 14 - DISK USAGE

\# Show free and used space on mounted filesystems df -h

Show free and used inodes on mounted filesystems
------------------------------------------------

df -i

Display disks partitions sizes and types
----------------------------------------

fdisk -l

Display disk usage for all files and directories in human readable format
-------------------------------------------------------------------------

du -ah

Display total disk usage off the current directory
--------------------------------------------------

du -sh

### 15 - DIRECTORY NAVIGATION

\# To go up one level of the directory tree. (Change into the parent directory.) cd ..

Go to the $HOME directory
-------------------------

cd

Change to the /etc directory
----------------------------

cd /etc

<table style="width:99%;"><colgroup><col style="width: 28%" /><col style="width: 71%" /></colgroup><thead><tr class="header"><th>Command</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>ls</td><td>Lists all files and directories in the present working directory</td></tr><tr class="even"><td>ls-R</td><td>Lists files in sub-directories as well</td></tr><tr class="odd"><td>ls-a</td><td>Lists hidden files as well</td></tr><tr class="even"><td>ls-al</td><td>Lists files and directories with detailed information like permissions,size, owner, etc.</td></tr><tr class="odd"><td>cd or cd ~</td><td>Navigate to HOME directory</td></tr><tr class="even"><td>cd ..</td><td>Move one level up</td></tr><tr class="odd"><td>cd</td><td>To change to a particular directory</td></tr><tr class="even"><td>cd /</td><td>Move to the root directory</td></tr><tr class="odd"><td>cat &gt; filename</td><td>Creates a new file</td></tr><tr class="even"><td>cat filename</td><td>Displays the file content</td></tr><tr class="odd"><td>cat file1 file2 &gt; file3</td><td>Joins two files (file1, file2) and stores the output in a new file (file3)</td></tr><tr class="even"><td>mv file "new file path”</td><td>Moves the files to the new location</td></tr><tr class="odd"><td>mv filename new_file_name</td><td>Renames the file to a new filename</td></tr><tr class="even"><td>sudo</td><td>Allows regular users to run programs with the security privileges of the superuser or root</td></tr><tr class="odd"><td>rm filename</td><td>Deletes a file</td></tr><tr class="even"><td>man</td><td>Gives help information on a command</td></tr><tr class="odd"><td>history</td><td>Gives a list of all past commands typed in the current terminal session</td></tr><tr class="even"><td>clear</td><td>Clears the terminal</td></tr><tr class="odd"><td>mkdir directoryname</td><td>Creates a new directory in the present working directory or a at the specified path</td></tr><tr class="even"><td>rmdir</td><td>Deletes a directory</td></tr><tr class="odd"><td>mv</td><td>Renames a directory</td></tr><tr class="even"><td>pr -x</td><td>Divides the file into x columns</td></tr><tr class="odd"><td>pr -h</td><td>Assigns a header to the file</td></tr><tr class="even"><td>pr -n</td><td>Denotes the file with Line Numbers</td></tr><tr class="odd"><td>lp -nc , lpr c</td><td>Prints "c” copies of the File</td></tr><tr class="even"><td>lp-d lp-P</td><td>Specifies name of the printer</td></tr><tr class="odd"><td>apt-get</td><td>Command used to install and update packages</td></tr><tr class="even"><td>mail -s ‘subject’</td><td>Command to send email</td></tr><tr class="odd"><td>-c ‘cc-address’</td><td></td></tr><tr class="even"><td>-b ‘bcc-address’</td><td></td></tr><tr class="odd"><td>‘to-address’</td><td></td></tr><tr class="even"><td>mail -s "Subject”</td><td>Command to send email with attachment</td></tr><tr class="odd"><td>to-address &lt; Filename</td><td></td></tr><tr class="even"><td></td><td></td></tr><tr class="odd"><td>Linux File Permissions</td><td></td></tr><tr class="even"><td>File Permission commands</td><td></td></tr><tr class="odd"><td>Command</td><td>Description</td></tr><tr class="even"><td>ls-l</td><td>to show file type and access permission</td></tr><tr class="odd"><td>r</td><td>read permission</td></tr><tr class="even"><td>w</td><td>write permission</td></tr><tr class="odd"><td>x</td><td>execute permission</td></tr><tr class="even"><td>-=</td><td>no permission</td></tr><tr class="odd"><td>Chown user</td><td>For changing the ownership of a file/directory</td></tr><tr class="even"><td>Chown user:group filename</td><td>change the user as well as group for a file or directory</td></tr><tr class="odd"><td>Environment Variables command</td><td></td></tr><tr class="even"><td>Command</td><td>Description</td></tr><tr class="odd"><td>echo $VARIABLE</td><td>To display value of a variable</td></tr><tr class="even"><td>env</td><td>Displays all environment variables</td></tr><tr class="odd"><td>VARIABLE_NAME= variable_value</td><td>Create a new variable</td></tr><tr class="even"><td>Unset</td><td>Remove a variable</td></tr><tr class="odd"><td>export Variable=value</td><td>To set value of an environment variable</td></tr><tr class="even"><td>User management commands of linux</td><td></td></tr><tr class="odd"><td>Command</td><td>Description</td></tr><tr class="even"><td>sudo adduser username</td><td>To add a new user</td></tr><tr class="odd"><td>sudo passwd -l ‘username’</td><td>To change the password of a user</td></tr><tr class="even"><td>sudo userdel -r ‘username’</td><td>To remove a newly created user</td></tr><tr class="odd"><td>sudo usermod -a -G GROUPNAME USERNAME</td><td>To add a user to a group</td></tr><tr class="even"><td>sudo deluser USER GROUPNAME</td><td>To remove a user from a group</td></tr><tr class="odd"><td>finger</td><td>Shows information of all the users logged in</td></tr><tr class="even"><td>finger username</td><td>Gives information of a particular user</td></tr><tr class="odd"><td>Networking command</td><td></td></tr><tr class="even"><td>Command</td><td>Description</td></tr><tr class="odd"><td>SSH username@ip-address or hostname</td><td>login into a remote Linux machine using SSH</td></tr><tr class="even"><td>Ping hostname="" or =""</td><td>To ping and Analyzing network and host connections</td></tr><tr class="odd"><td>dir</td><td>Display files in the current directory of a remote computer</td></tr><tr class="even"><td>cd "dirname”</td><td>change directory to "dirname” on a remote computer</td></tr><tr class="odd"><td>put file</td><td>upload ‘file’ from local to remote computer</td></tr><tr class="even"><td>get file</td><td>Download ‘file’ from remote to local computer</td></tr><tr class="odd"><td>quit</td><td>Logout</td></tr><tr class="even"><td>Process command</td><td></td></tr><tr class="odd"><td>Command</td><td>Description</td></tr><tr class="even"><td>bg</td><td>To send a process to the background</td></tr><tr class="odd"><td>fg</td><td>To run a stopped process in the foreground</td></tr><tr class="even"><td>top</td><td>Details on all Active Processes</td></tr><tr class="odd"><td>ps</td><td>Give the status of processes running for a user</td></tr><tr class="even"><td>ps PID</td><td>Gives the status of a particular process</td></tr><tr class="odd"><td>pidof</td><td>Gives the Process ID (PID) of a process</td></tr><tr class="even"><td>kill PID</td><td>Kills a process</td></tr><tr class="odd"><td>nice</td><td>Starts a process with a given priority</td></tr><tr class="even"><td>renice</td><td>Changes priority of an already running process</td></tr><tr class="odd"><td>df</td><td>Gives free hard disk space on your system</td></tr><tr class="even"><td>free</td><td>Gives free RAM on your system</td></tr><tr class="odd"><td>VI Editing Commands</td><td></td></tr><tr class="even"><td>Command</td><td>Description</td></tr><tr class="odd"><td>i</td><td>Insert at cursor (goes into insert mode)</td></tr><tr class="even"><td>a</td><td>Write after cursor (goes into insert mode)</td></tr><tr class="odd"><td>A</td><td>Write at the end of line (goes into insert mode)</td></tr><tr class="even"><td>ESC</td><td>Terminate insert mode</td></tr><tr class="odd"><td>u</td><td>Undo last change</td></tr><tr class="even"><td>U</td><td>Undo all changes to the entire line</td></tr><tr class="odd"><td>o</td><td>Open a new line (goes into insert mode)</td></tr><tr class="even"><td>dd</td><td>Delete line</td></tr><tr class="odd"><td>3dd</td><td>Delete 3 lines</td></tr><tr class="even"><td>D</td><td>Delete contents of line after the cursor</td></tr><tr class="odd"><td>C</td><td>Delete contents of a line after the cursor and insert new text. Press ESC key to end insertion.</td></tr><tr class="even"><td>dw</td><td>Delete word</td></tr><tr class="odd"><td>4dw</td><td>Delete 4 words</td></tr><tr class="even"><td>cw</td><td>Change word</td></tr><tr class="odd"><td>x</td><td>Delete character at the cursor</td></tr><tr class="even"><td>r</td><td>Replace character</td></tr><tr class="odd"><td>R</td><td>Overwrite characters from cursor onward</td></tr><tr class="even"><td>s</td><td>Substitute one character under cursor continue to insert</td></tr><tr class="odd"><td>S</td><td>Substitute entire line and begin to insert at the beginning of the line</td></tr><tr class="even"><td>~</td><td>Change case of individual character</td></tr></tbody></table>
