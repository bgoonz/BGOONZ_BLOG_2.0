# networking_cheatsheet

Networking

### Transport

1. UDP >> UDP is a connectionless protocol
2. TCP is a connection-oriented protocol

### DNS Record Types

1. SOA - Start of Authority record points to the primary authority for the domain we're querying
2. NS - Name Servers

-   directory for devices and the IP addresses attached to them
-   translate domain names into numerical IP addresses

1. A / AAAA - record that maps directly to an IP address
2. CNAME - record that acts as an alias
3. MX - Mail Exchanger - used for e-mail

### Network Hardware

#### Router

-   contains internal addresses of each device connected to router
-   can join different networks, a feature switches and hubs cannot do
-   performs NAT (network address translation)
-   NAT allows router a single IP address
-   router can direct traffic to the appropriate address

### Switch

-   contains the MAC (media access control) address of all - connected devices
-   flood - send to ALL connected devices "
-   forward - send to a particular device
-   filter - drop data entirely

## Switch

-   no network management ,,,
-   signal splitter
-   duplicates data and broadcasts it to ALL connected devices
