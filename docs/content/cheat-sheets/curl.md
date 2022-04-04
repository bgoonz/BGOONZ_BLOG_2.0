subtitle

2022-01-03

To download a file:
===================

curl

To download and rename a file:
==============================

curl -o

To download multiple files:
===========================

curl -O -O

To download all sequentially numbered files (1-24):
===================================================

curl http://example.com/pic\[1-24\].jpg

To download a file and pass HTTP authentication:
================================================

curl -u :

To download a file with a proxy:
================================

curl -x :

To download a file over FTP:
============================

curl -u : -O ftp://example.com/pub/file.zip

To get an FTP directory listing:
================================

curl ftp://username:password@example.com

To resume a previously failed download:
=======================================

curl -C - -o

To fetch only the HTTP headers from a response:
===============================================

curl -I

To fetch your external IP and network info as JSON:
===================================================

curl http://ifconfig.me/all.json

To limit the rate of a download:
================================

curl –limit-rate 1000B -O

To get your global IP:
======================

curl httpbin.org/ip

To get only the HTTP status code:
=================================

curl -o /dev/null -w ‘%{http\_code}’ -s -I URL
