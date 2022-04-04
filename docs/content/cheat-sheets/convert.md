subtitle

2022-01-03

To resize an image to a fixed width and proportional height:
============================================================

convert original.jpg -resize 100x converted.jpg

To resize an image to a fixed height and proportional width:
============================================================

convert original.jpg -resize x100 converted.jpg

To resize an image to a fixed width and height:
===============================================

convert original.jpg -resize 100x100 converted.jpg

To resize an image and simultaneously change its file type:
===========================================================

convert original.jpg -resize 100x converted.png

To resize all of the images within a directory:
===============================================

To implement a for loop:
========================

for file in `ls original/image/path/`; do new\_path=${file%.\*}; new\_file=`basename $new_path`; convert <span class="math inline">*file* − *resize*150*converted*/*image*/*path*/</span>new\_file.png; done
