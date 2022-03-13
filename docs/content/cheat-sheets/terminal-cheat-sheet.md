# Terminal Cheat Sheet

### 1 - SYSTEM INFORMATION

\# Display Linux system information uname -a

## Display kernel release information

uname -r

## Show which version of Red Hat installed

cat /etc/redhat-release

## Show how long the system has been running + load

uptime

## Show system host name

hostname

## Display all local IP addresses of the host.

hostname -I

## Show system reboot history

last reboot

## Show the current date and time

date

## Show this month's calendar

cal

## Display who is online

w

## Who you are logged in as

whoami

### 2 - HARDWARE INFORMATION

\# Display messages in kernel ring buffer dmesg

## Display CPU information

cat /proc/cpuinfo

## Display memory information

cat /proc/meminfo

## Display free and used memory ( -h for human readable, -m for MB, -g for GB.)

free -h

## Display PCI devices

lspci -tv

## Display USB devices

lsusb -tv

## Display DMI/SMBIOS (hardware info) from the BIOS

dmidecode

## Show info about disk sda

hdparm -i /dev/sda

## Perform a read speed test on disk sda

hdparm -tT /dev/sda

## Test for unreadable blocks on disk sda

badblocks -s /dev/sda

### 3 - PERFORMANCE MONITORING AND STATISTICS

\# Display and manage the top processes top

## Interactive process viewer (top alternative)

htop

## Display processor related statistics

mpstat 1

## Display virtual memory statistics

vmstat 1

## Display I/O statistics

iostat 1

## Display the last 100 syslog messages (Use /var/log/syslog for Debian based systems.)

tail -100 /var/log/messages

## Capture and display all packets on interface eth0

tcpdump -i eth0

## Monitor all traffic on port 80 ( HTTP )

tcpdump -i eth0 'port 80'

## List all open files on the system

lsof

## List files opened by user

lsof -u user

## Display free and used memory ( -h for human readable, -m for MB, -g for GB.)

free -h

## Execute "df -h", showing periodic updates

watch df -h

### 4 - USER INFORMATION AND MANAGEMENT

\# Display the user and group ids of your current user. id

## Display the last users who have logged onto the system.

last

## Show who is logged into the system.

who

## Show who is logged in and what they are doing.

w

## Create a group named "test".

groupadd test

## Create an account named john, with a comment of "John Smith" and create the user's home directory.

useradd -c "John Smith" -m john

## Delete the john account.

userdel john

## Add the john account to the sales group

usermod -aG sales john

### 5 - FILE AND DIRECTORY COMMANDS

\# List all files in a long listing (detailed) format ls -al

## Display the present working directory

pwd

## Create a directory

mkdir directory

## Remove (delete) file

rm file

## Remove the directory and its contents recursively

rm -r directory

## Force removal of file without prompting for confirmation

rm -f file

## Forcefully remove directory recursively

rm -rf directory

## Copy file1 to file2

cp file1 file2

## Copy source_directory recursively to destination. If destination exists, copy source_directory into destination, otherwise create destination with the contents of source_directory.

cp -r source_directory destination

## Rename or move file1 to file2. If file2 is an existing directory, move file1 into directory file2

mv file1 file2

## Create symbolic link to linkname

ln -s /path/to/file linkname

## Create an empty file or update the access and modification times of file.

touch file

## View the contents of file

cat file

## Browse through a text file

less file

## Display the first 10 lines of file

head file

## Display the last 10 lines of file

tail file

## Display the last 10 lines of file and "follow" the file as it grows.

tail -f file

### 6 - PROCESS MANAGEMENT

\# Display your currently running processes ps

## Display all the currently running processes on the system.

ps -ef

## Display process information for processname

ps -ef | grep processname

## Display and manage the top processes

top

## Interactive process viewer (top alternative)

htop

## Kill process with process ID of pid

kill pid

## Kill all processes named processname

killall processname

## Start program in the background

program &

## Display stopped or background jobs

bg

## Brings the most recent background job to foreground

fg

## Brings job n to the foreground

fg n

### 7 - FILE PERMISSIONS

![Linux chmod example](https://www.linuxtrainingacademy.com/wp-content/uploads/2017/02/linux-permissions-chart.png) PERMISSION EXAMPLE

&#x20; U G W rwx rwx rwx chmod 777 filename rwx rwx r-x chmod 775 filename rwx r-x r-x chmod 755 filename rw- rw- r-- chmod 664 filename rw- r-- r-- chmod 644 filename

## NOTE: Use 777 sparingly!

&#x20; LEGEND U = User G = Group W = World

&#x20; r = Read w = write x = execute - = no access

### 8 - NETWORKING

\# Display all network interfaces and IP address ip a

## Display eth0 address and details

ip addr show dev eth0

## Query or control network driver and hardware settings

ethtool eth0

## Send ICMP echo request to host

ping host

## Display whois information for domain

whois domain

## Display DNS information for domain

dig domain

## Reverse lookup of IP_ADDRESS

dig -x IP_ADDRESS

## Display DNS IP address for domain

host domain

## Display the network address of the host name.

hostname -i

## Display all local IP addresses of the host.

hostname -I

## Download http://domain.com/file

wget http://domain.com/file

## Display listening tcp and udp ports and corresponding programs

netstat -nutlp

### 9 - ARCHIVES (TAR FILES)

\# Create tar named archive.tar containing directory. tar cf archive.tar directory

## Extract the contents from archive.tar.

tar xf archive.tar

## Create a gzip compressed tar file name archive.tar.gz.

tar czf archive.tar.gz directory

## Extract a gzip compressed tar file.

tar xzf archive.tar.gz

## Create a tar file with bzip2 compression

tar cjf archive.tar.bz2 directory

## Extract a bzip2 compressed tar file.

tar xjf archive.tar.bz2

### 10 - INSTALLING PACKAGES

\# Search for a package by keyword. yum search keyword

## Install package.

yum install package

## Display description and summary information about package.

yum info package

## Install package from local file named package.rpm

rpm -i package.rpm

## Remove/uninstall package.

yum remove package

## Install software from source code.

tar zxvf sourcecode.tar.gz cd sourcecode ./configure make make install

### 11 - SEARCH

\# Search for pattern in file grep pattern file

## Search recursively for pattern in directory

grep -r pattern directory

## Find files and directories by name

locate name

## Find files in /home/john that start with "prefix".

find /home/john -name 'prefix\*'

## Find files larger than 100MB in /home

find /home -size +100M

### 12 - SSH LOGINS

\# Connect to host as your local username. ssh host

## Connect to host as user

ssh user@host

## Connect to host using port

ssh -p port user@host

### 13 - FILE TRANSFERS

\# Secure copy file.txt to the /tmp folder on server scp file.txt server:/tmp

## Copy \*.html files from server to the local /tmp folder.

scp server:/var/www/\*.html /tmp

## Copy all files and directories recursively from server to the current system's /tmp folder.

scp -r server:/var/www /tmp

## Synchronize /home to /backups/home

rsync -a /home /backups/

## Synchronize files/directories between the local and remote system with compression enabled

rsync -avz /home server:/backups/

### 14 - DISK USAGE

\# Show free and used space on mounted filesystems df -h

## Show free and used inodes on mounted filesystems

df -i

## Display disks partitions sizes and types

fdisk -l

## Display disk usage for all files and directories in human readable format

du -ah

## Display total disk usage off the current directory

du -sh

### 15 - DIRECTORY NAVIGATION

\# To go up one level of the directory tree. (Change into the parent directory.) cd ..

## Go to the $HOME directory

cd

## Change to the /etc directory

cd /etc

| Command                               | Description                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ls                                    | Lists all files and directories in the present working directory                                |
| ls-R                                  | Lists files in sub-directories as well                                                          |
| ls-a                                  | Lists hidden files as well                                                                      |
| ls-al                                 | Lists files and directories with detailed information like permissions,size, owner, etc.        |
| cd or cd \~                           | Navigate to HOME directory                                                                      |
| cd ..                                 | Move one level up                                                                               |
| cd                                    | To change to a particular directory                                                             |
| cd /                                  | Move to the root directory                                                                      |
| cat > filename                        | Creates a new file                                                                              |
| cat filename                          | Displays the file content                                                                       |
| cat file1 file2 > file3               | Joins two files (file1, file2) and stores the output in a new file (file3)                      |
| mv file "new file path"               | Moves the files to the new location                                                             |
| mv filename new_file_name             | Renames the file to a new filename                                                              |
| sudo                                  | Allows regular users to run programs with the security privileges of the superuser or root      |
| rm filename                           | Deletes a file                                                                                  |
| man                                   | Gives help information on a command                                                             |
| history                               | Gives a list of all past commands typed in the current terminal session                         |
| clear                                 | Clears the terminal                                                                             |
| mkdir directoryname                   | Creates a new directory in the present working directory or a at the specified path             |
| rmdir                                 | Deletes a directory                                                                             |
| mv                                    | Renames a directory                                                                             |
| pr -x                                 | Divides the file into x columns                                                                 |
| pr -h                                 | Assigns a header to the file                                                                    |
| pr -n                                 | Denotes the file with Line Numbers                                                              |
| lp -nc , lpr c                        | Prints "c" copies of the File                                                                   |
| lp-d lp-P                             | Specifies name of the printer                                                                   |
| apt-get                               | Command used to install and update packages                                                     |
| mail -s 'subject'                     | Command to send email                                                                           |
| -c 'cc-address'                       |                                                                                                 |
| -b 'bcc-address'                      |                                                                                                 |
| 'to-address'                          |                                                                                                 |
| mail -s "Subject"                     | Command to send email with attachment                                                           |
| to-address < Filename                 |                                                                                                 |
|                                       |                                                                                                 |
| Linux File Permissions                |                                                                                                 |
| File Permission commands              |                                                                                                 |
| Command                               | Description                                                                                     |
| ls-l                                  | to show file type and access permission                                                         |
| r                                     | read permission                                                                                 |
| w                                     | write permission                                                                                |
| x                                     | execute permission                                                                              |
| -=                                    | no permission                                                                                   |
| Chown user                            | For changing the ownership of a file/directory                                                  |
| Chown user:group filename             | change the user as well as group for a file or directory                                        |
| Environment Variables command         |                                                                                                 |
| Command                               | Description                                                                                     |
| echo $VARIABLE                        | To display value of a variable                                                                  |
| env                                   | Displays all environment variables                                                              |
| VARIABLE_NAME= variable_value         | Create a new variable                                                                           |
| Unset                                 | Remove a variable                                                                               |
| export Variable=value                 | To set value of an environment variable                                                         |
| User management commands of linux     |                                                                                                 |
| Command                               | Description                                                                                     |
| sudo adduser username                 | To add a new user                                                                               |
| sudo passwd -l 'username'             | To change the password of a user                                                                |
| sudo userdel -r 'username'            | To remove a newly created user                                                                  |
| sudo usermod -a -G GROUPNAME USERNAME | To add a user to a group                                                                        |
| sudo deluser USER GROUPNAME           | To remove a user from a group                                                                   |
| finger                                | Shows information of all the users logged in                                                    |
| finger username                       | Gives information of a particular user                                                          |
| Networking command                    |                                                                                                 |
| Command                               | Description                                                                                     |
| SSH username@ip-address or hostname   | login into a remote Linux machine using SSH                                                     |
| Ping hostname="" or =""               | To ping and Analyzing network and host connections                                              |
| dir                                   | Display files in the current directory of a remote computer                                     |
| cd "dirname"                          | change directory to "dirname" on a remote computer                                              |
| put file                              | upload ‘file' from local to remote computer                                                     |
| get file                              | Download ‘file' from remote to local computer                                                   |
| quit                                  | Logout                                                                                          |
| Process command                       |                                                                                                 |
| Command                               | Description                                                                                     |
| bg                                    | To send a process to the background                                                             |
| fg                                    | To run a stopped process in the foreground                                                      |
| top                                   | Details on all Active Processes                                                                 |
| ps                                    | Give the status of processes running for a user                                                 |
| ps PID                                | Gives the status of a particular process                                                        |
| pidof                                 | Gives the Process ID (PID) of a process                                                         |
| kill PID                              | Kills a process                                                                                 |
| nice                                  | Starts a process with a given priority                                                          |
| renice                                | Changes priority of an already running process                                                  |
| df                                    | Gives free hard disk space on your system                                                       |
| free                                  | Gives free RAM on your system                                                                   |
| VI Editing Commands                   |                                                                                                 |
| Command                               | Description                                                                                     |
| i                                     | Insert at cursor (goes into insert mode)                                                        |
| a                                     | Write after cursor (goes into insert mode)                                                      |
| A                                     | Write at the end of line (goes into insert mode)                                                |
| ESC                                   | Terminate insert mode                                                                           |
| u                                     | Undo last change                                                                                |
| U                                     | Undo all changes to the entire line                                                             |
| o                                     | Open a new line (goes into insert mode)                                                         |
| dd                                    | Delete line                                                                                     |
| 3dd                                   | Delete 3 lines                                                                                  |
| D                                     | Delete contents of line after the cursor                                                        |
| C                                     | Delete contents of a line after the cursor and insert new text. Press ESC key to end insertion. |
| dw                                    | Delete word                                                                                     |
| 4dw                                   | Delete 4 words                                                                                  |
| cw                                    | Change word                                                                                     |
| x                                     | Delete character at the cursor                                                                  |
| r                                     | Replace character                                                                               |
| R                                     | Overwrite characters from cursor onward                                                         |
| s                                     | Substitute one character under cursor continue to insert                                        |
| S                                     | Substitute entire line and begin to insert at the beginning of the line                         |
| \~                                    | Change case of individual character                                                             |
