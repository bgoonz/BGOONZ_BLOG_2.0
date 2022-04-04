---
cover: >-
    ../../../.gitbook/assets/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676e755f626173682f676e755f626173682d69636f6e2e737667.png
coverY: -16.14267515923567
---

# Bash Cheat Sheet

-   One Liners
-   -   Block Bad IPs
-   If Statements
    -   Check if args are passed
    -   Check if required variables exist
    -   Check if environment variables exists
-   While Loops
-   -   Run for 5 Seconds
-   Redirecting Outputs
    -   Stdout, Stderr

### Commands

#### tr command

Remove whitespace:

```
$ echo 'foo - bar' | tr -d '[:space:]'
foo-bar
```

### One Liners

#### Block Bad IPs

Use iptables to block all bad ip addresses:

```
$ cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | tail -n 5
May 10 11:19:49 srv4 postfix/smtpd[1486]: lost connection after AUTH from unknown[185.36.81.145]
May 10 11:21:41 srv4 postfix/smtpd[1762]: lost connection after AUTH from unknown[185.36.81.164]
May 10 11:21:56 srv4 postfix/smtpd[1762]: lost connection after AUTH from unknown[175.139.231.129]
May 10 11:23:51 srv4 postfix/smtpd[1838]: lost connection after AUTH from unknown[185.211.245.170]
May 10 11:24:02 srv4 postfix/smtpd[1838]: lost connection after AUTH from unknown[185.211.245.170]
```

Get the data to show only IPs:

```
cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | cut -d'[' -f3 | cut -d ']' -f1 | tail -n5
185.36.81.164
175.139.231.129
185.211.245.170
185.211.245.170
185.36.81.173
```

Get the uniqe IP addresses:

```
$ cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | cut -d'[' -f3 | cut -d ']' -f1 | sort | uniq
103.194.70.16
112.196.77.202
113.172.210.19
113.173.182.119
139.59.224.234
```

Redirect the output to iptables:

```
$ for ip in $(cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | cut -d'[' -f3 | cut -d ']' -f1 | sort | uniq); do iptables -I INPUT -s ${ip} -p tcp --dport 25 -j DROP; done
```

### If Statements

#### Check if args are passed

```
if [[ $# -eq 0 ]] ; then
    echo 'need to pass args'
    exit 0
fi
```

### Check if required variables exist

```
if [ $1 == "one" ] || [ $1 == "two" ]
then
  echo "argument 1 has the value one or two"
  exit 0
else
  echo "I require argument 1 to be one or two"
  exit 1
fi
```

### Check if environment variables exists

```
if [ -z ${OWNER} ] || [ -z ${NAME} ]
then
  echo "does not meet requirements of both environment variables"
  exit 1
else
  echo "required environment variables exists"
fi
```

### While Loops

#### Run process for 5 Seconds

```
set -ex
count=0
echo "boot"
ping localhost &
while [ $count -le 5 ]
  do
    sleep 1
    count=$((count + 1))
    echo $count
  done
ps aux | grep ping
echo "tear down"
kill $!
sleep 2
```

### Redirecting Outputs

#### Stdout, Stderr

Redirect stderr to /dev/null:

```
grep -irl faker . 2>/dev/null
```

Redirect stdout to one file and stderr to another file:

```
grep -irl faker . > out 2>error
```

Redirect stderr to stdout (&1), and then redirect stdout to a file:

```
grep -irl faker . >out 2>&1
```

Redirect both to a file:

```
grep -irl faker . &> file.log
```

```bash
	pushd
	# goes to a directory from directory
	popd
	# returns to the original directory
	file
	# gives info about the file
	locate <name>
	# locates find
	sudo updatedb
	# updates database
	which <name>
	# tells if install
	history
	# shows command history
	whatis
	# tells info about command
	apropos <search term>
	# displays commands with that search term
	man <command>
	# displays manual for that command
	dig <address> <+trace>
	# DNS Lookup with trace
	# trace >> track in real-time the pathway taken by a packet on an IP network from source to destination, reporting the IP addresses of all the routers it pinged in between
```

## Thing that are basic but I need to work on

cat mv chmod

\------------ I Got to 41 minutes of the video ------------------------
