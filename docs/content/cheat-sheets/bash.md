---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

# To implement a for loop:

for file in \*;
do
echo $file found;
done

# To implement a case command:

case "$1"
in 0) echo "zero found";; 1) echo "one found";; 2) echo "two found";;
3\*) echo "something beginning with 3 found";;
esac

# To turn on debugging:

set -x

# To turn off debugging:

set +x

# Retrieve N-th piped command exit status:

printf 'foo' | fgrep 'foo' | sed 's/foo/bar/'
echo ${PIPESTATUS[0]} # replace 0 with N

# To create a lockfile:

( set -o noclobber; echo > my.lock ) || echo 'Failed to create lock file'
