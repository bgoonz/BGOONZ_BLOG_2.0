To open a TCP connection from to of , with a timeout of
=======================================================

nc -p -w

To open a UDP connection to of :
================================

nc -u

To open a TCP connection to port 42 of using as the IP for the local end of the connection:
===========================================================================================

nc -s

To create and listen on a UNIX-domain stream socket:
====================================================

nc -lU /var/tmp/dsocket

To connect to of via an HTTP proxy at ,
=======================================

. This example could also be used by ssh(1); see the ProxyCommand
=================================================================

directive in ssh\_config(5) for more information.
=================================================

nc -x: -Xconnect

The same example again, this time enabling proxy authentication with username "ruser” if the proxy requires it:
===============================================================================================================

nc -x: -Xconnect -Pruser

To choose the source IP for the testing using the -s option
===========================================================

nc -zv -s source\_IP target\_IP Port
