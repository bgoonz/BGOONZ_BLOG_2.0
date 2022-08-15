

lynx -dump https://distrokid.com/hyperfollow/mihirbeg/getting-there | awk '/http/{print $2}' > links2.txt



## OR--------------------------------------------------------------------------------
wget -qO- www.instagram.com/mihirbeg/ |
grep -Eoi '<a [^>]+>' | 
grep -Eo 'href="[^\"]+"' | 
grep -Eo '(http|https)://[^/"]+'>output.md