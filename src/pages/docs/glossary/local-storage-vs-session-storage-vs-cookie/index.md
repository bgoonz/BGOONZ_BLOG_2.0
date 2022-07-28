---
title: Local Storage vs Session Storage vs Cookie
template: docs
excerpt: With Advent of Html5 , we have got various option to cache or store
  info on client browse
---
<!--StartFragment-->

# Local Storage vs Session Storage vs Cookie

![](https://miro.medium.com/max/945/1*QeNFRIwzwOLhxuK1nIxQnQ.png)

Various Storage provided by browser now

With Advent of Html5 , we have got various option to cache or store info on client browser. Previously we were having only cookies , which were very restrictive and size of cookies was very small. but now we local storage and session storage as well. and cookies has been talk of past , though it is getting used for various purposes. let's talk about all these

**LocalStorage**

localStorage is a way to store data on the client’s computer. It allows the saving of key/value pairs in a web browser and it stores data with no expiration date. localStorage can only be accessed via JavaScript, and HTML5. However, the user has the ability to clear the browser data/cache to erase all localStorage data.

**Pros:**

* stores data with no expiration date
* storage limit is about 5MB
* data is never transferred to the server

**Cons:**

* plaintext, hence not secure by design
* limited to string data, hence need to be serialized
* can only be read on client-side

![](https://miro.medium.com/max/945/1*LpuLoMck-uh1uWAFWNTf1Q.png)

Local Storage

So we see , we have key value storage, where we have key and value as an serialized object.

We can try localstorage api from console

![](https://miro.medium.com/max/945/1*BvoYTQ2CRKp7QVY8XaE2hg.png)

and it will create a key value pair in localstorage store.

![](https://miro.medium.com/max/945/1*B3ga4cEWHjXf8VNwj_Necg.png)

## Session storage

* stores data only for a session, meaning that the data is stored until the browser (or tab) is closed
* data is never transferred to the server
* can only be read on client-side
* storage limit is about 5-10MB
* *opening multiple tabs/windows with the same URL creates `sessionStorage` for each tab/window*

![](https://miro.medium.com/max/945/1*W4FwtdJDR6bgwr9OoGOg7A.png)

Same as localstorage , we can write key-value pair in session storage as well.

![](https://miro.medium.com/max/945/1*ncQaoqDD5AND6UhCAP4YIA.png)

![](https://miro.medium.com/max/945/1*lfoLRY1RCxQz3D00yuyfHw.png)

**Cookie**

* Stores data that has to be sent back to the server with subsequent XHR requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side .
* Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
* Size must be less than 4KB.
* Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie.

![](https://miro.medium.com/max/945/1*yWo1Hx03-gRJUSjHgxYlXg.png)

Cookies can be updated , set using document.cookie object from browser window object.

![](https://miro.medium.com/max/945/1*7poCXxcY4X2_bD7xBoGDow.png)

![](https://miro.medium.com/max/945/1*nfHxHxF1BJG-yM0XQG9oUQ.png)

In chrome browser, by inspect element, we can go to application tab and see values which are in localStorage, Session Storage and Cookies.

So in nutshell

![](https://miro.medium.com/max/945/1*dMoXCZgsdlQoSITo5BdXoA.png)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fvote%2Fp%2F22655ff75a8&operation=register&redirect=https%3A%2F%2Fkrishankantsinghal.medium.com%2Flocal-storage-vs-session-storage-vs-cookie-22655ff75a8&user=krishankant+singhal&userId=f2b97103cb80&source=-----22655ff75a8---------------------clap_footer-----------)

735

2

<!--EndFragment-->