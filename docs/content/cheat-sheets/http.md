Custom HTTP method HTTP headers and JSON data:
==============================================

http PUT example.org X-API-Token:123 name=John

Submitting forms:
=================

http -f POST example.org hello=World

See the request that is being sent using one of the output options:
===================================================================

http -v example.org

Use Github API to post a comment on an issue with authentication:
=================================================================

http -a USERNAME POST <a href="https://api.github.com/repos/jkbrzt/httpie/issues/83/comments" class="uri">https://api.github.com/repos/jkbrzt/httpie/issues/83/comments</a> body=‘HTTPie is awesome!’

Upload a file using redirected input:
=====================================

http example.org &lt; file.json

Download a file and save it via redirected output:
==================================================

http example.org/file &gt; file

Download a file wget style:
===========================

http –download example.org/file

Use named sessions\_ to make certain aspects or the communication
=================================================================

persistent between requests to the same host:
=============================================

http –session=logged-in -a username:password httpbin.org/get API-Key:123
========================================================================

http –session=logged-in httpbin.org/headers

Set a custom Host header to work around missing DNS records:
============================================================

http localhost:8000 Host:example.com

Simple JSON example:
====================

http PUT example.org name=John email=john@example.org

Non-string fields use the := separator, which allows you to embed raw
=====================================================================

JSON into the resulting object. Text and raw JSON files can also be
===================================================================

embedded into fields using =@ and :=@:
======================================

http PUT api.example.com/person/1 name=John age:=29 married:=false hobbies:=‘\["http”, "pies”\]’ description=<span class="citation" data-cites="about-john.txt">@about-john.txt</span> bookmarks:=<span class="citation" data-cites="bookmarks.json">@bookmarks.json</span>

Send JSON data stored in a file:
================================

http POST api.example.com/person/1 &lt; person.json

Regular Forms
=============

http –form POST api.example.org/person/1 name=‘John Smith’ email=john@example.org cv=@~/Documents/cv.txt

File Upload Forms
=================

If one or more file fields is present, the serialization and content
====================================================================

type is multipart/form-data:
============================

http -f POST example.com/jobs name=‘John Smith’ cv@~/Documents/cv.pdf

To set custom headers you can use the Header:Value notation:
============================================================

http example.org User-Agent:Bacon/1.0 ‘Cookie:valued-visitor=yes;foo=bar’ X-Foo:Bar Referer:<a href="http://httpie.org/" class="uri">http://httpie.org/</a>

Basic auth:
===========

http -a username:password example.org

Digest auth:
============

http –auth-type=digest -a username:password example.org

With password prompt:
=====================

http -a username example.org

Authorization information from your ~/.netrc file is honored as well:
=====================================================================

cat ~/.netrc machine httpbin.org login httpie \# password test http httpbin.org/basic-auth/httpie/test

You can specify proxies to be used through the –proxy argument for each
=======================================================================

protocol (which is included in the value in case of redirects across
====================================================================

protocols):
===========

http –proxy=http:<a href="http://10.10.1.10:3128" class="uri">http://10.10.1.10:3128</a> –proxy=https:<a href="https://10.10.1.10:1080" class="uri">https://10.10.1.10:1080</a> example.org

With Basic authentication:
==========================

http –proxy=http:<a href="http://user:pass@10.10.1.10:3128" class="uri">http://user:pass@10.10.1.10:3128</a> example.org

To skip the HOST’S SSL CERTIFICATE VERIFICATION, you can pass
=============================================================

–verify=no (default is yes):
============================

http –verify=no <a href="https://example.org" class="uri">https://example.org</a>

You can also use –verify= to set a CUSTOM CA BUNDLE path:
=========================================================

http –verify=/ssl/custom\_ca\_bundle <a href="https://example.org" class="uri">https://example.org</a>

To use a CLIENT SIDE CERTIFICATE for the SSL communication, you can pass
========================================================================

the path of the cert file with –cert:
=====================================

http –cert=client.pem <a href="https://example.org" class="uri">https://example.org</a>

If the PRIVATE KEY is not contained in the cert file you may pass the
=====================================================================

path of the key file with –cert-key:
====================================

http –cert=client.crt –cert-key=client.key <a href="https://example.org" class="uri">https://example.org</a>

You can control what should be printed via several options:
===========================================================

–headers, -h Only the response headers are printed.
===================================================

–body, -b Only the response body is printed.
============================================

–verbose, -v Print the whole HTTP exchange (request and response).
==================================================================

–print, -p Selects parts of the HTTP exchange.
==============================================

http –verbose PUT httpbin.org/put hello=world

Print request and response headers:
===================================

Character Stands for
====================

———– ——————-
============

H Request headers.
==================

B Request body.
===============

h Response headers.
===================

b Response body.
================

http –print=Hh PUT httpbin.org/put hello=world

Let’s say that there is an API that returns the whole resource when it
======================================================================

is updated, but you are only interested in the response headers to see
======================================================================

the status code after an update:
================================

http –headers PATCH example.org/Really-Huge-Resource name=‘New Name’

Redirect from a file:
=====================

http PUT example.com/person/1 X-API-Token:123 &lt; person.json

Or the output of another program:
=================================

grep ‘401 Unauthorized’ /var/log/httpd/error\_log | http POST example.org/intruders

You can use echo for simple data:
=================================

echo ‘{"name”: "John”}’ | http PATCH example.com/person/1 X-API-Token:123

You can even pipe web services together using HTTPie:
=====================================================

http GET <a href="https://api.github.com/repos/jkbrzt/httpie" class="uri">https://api.github.com/repos/jkbrzt/httpie</a> | http POST httpbin.org/post

You can use cat to enter multiline data on the terminal:
========================================================

cat | http POST example.com \# ^D cat | http POST example.com/todos Content-Type:text/plain - buy milk - call parents ^D

On OS X, you can send the contents of the clipboard with pbpaste:
=================================================================

pbpaste | http PUT example.com

Passing data through stdin cannot be combined with data fields specified
========================================================================

on the command line:
====================

echo ‘data’ | http POST example.org more=data \# This is invalid

AN ALTERNATIVE TO REDIRECTED stdin is specifying a filename (as
===============================================================

@/path/to/file) whose content is used as if it came from stdin.
===============================================================

It has the advantage that THE Content-Type HEADER IS AUTOMATICALLY SET
======================================================================

to the appropriate value based on the filename extension. For example,
======================================================================

the following request sends the verbatim contents of that XML file with
=======================================================================

Content-Type: application/xml:
==============================

http PUT httpbin.org/put @/data/file.xml

Download a file:
================

http example.org/Movie.mov &gt; Movie.mov

Download an image of Octocat, resize it using ImageMagick, upload it
====================================================================

elsewhere:
==========

http octodex.github.com/images/original.jpg | convert - -resize 25% - | http example.org/Octocats

Force colorizing and formatting, and show both the request and the
==================================================================

response in less pager:
=======================

http –pretty=all –verbose example.org | less -R

When enabled using the –download, -d flag, response headers are printed
=======================================================================

to the terminal (stderr), and a progress bar is shown while the response
========================================================================

body is being saved to a file.
==============================

http –download <a href="https://github.com/jkbrzt/httpie/tarball/master" class="uri">https://github.com/jkbrzt/httpie/tarball/master</a>

You can also redirect the response body to another program while the
====================================================================

response headers and progress are still shown in the terminal:
==============================================================

http -d <a href="https://github.com/jkbrzt/httpie/tarball/master" class="uri">https://github.com/jkbrzt/httpie/tarball/master</a> | tar zxf -

If –output, -o is specified, you can resume a partial download using
====================================================================

the –continue, -c option. This only works with servers that support
===================================================================

Range requests and 206 Partial Content responses. If the server doesn’t
=======================================================================

support that, the whole file will simply be downloaded:
=======================================================

http -dco file.zip example.org/file

Prettified streamed response:
=============================

http –stream -f -a YOUR-TWITTER-NAME <a href="https://stream.twitter.com/1/statuses/filter.json" class="uri">https://stream.twitter.com/1/statuses/filter.json</a> track=‘Justin Bieber’

Send each new tweet (JSON object) mentioning "Apple” to another
===============================================================

server as soon as it arrives from the Twitter streaming API:
============================================================

http –stream -f -a YOUR-TWITTER-NAME <a href="https://stream.twitter.com/1/statuses/filter.json" class="uri">https://stream.twitter.com/1/statuses/filter.json</a> track=Apple | while read tweet; do echo "$tweet” | http POST example.org/tweets ; done

Create a new session named user1 for example.org:
=================================================

http –session=user1 -a user1:password example.org X-Foo:Bar

Now you can refer to the session by its name, and the previously used
=====================================================================

authorization and HTTP headers will automatically be set:
=========================================================

http –session=user1 example.org

To create or reuse a different session, simple specify a different name:
========================================================================

http –session=user2 -a user2:password example.org X-Bar:Foo

Instead of a name, you can also directly specify a path to a session
====================================================================

file. This allows for sessions to be re-used across multiple hosts:
===================================================================

http –session=/tmp/session.json example.orghttp –session=/tmp/session.json admin.example.orghttp –session=~/.httpie/sessions/another.example.org/test.json example.orghttp –session-read-only=/tmp/session.json example.org
