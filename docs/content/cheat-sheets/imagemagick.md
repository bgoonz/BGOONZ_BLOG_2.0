### Common options

<table><thead><tr class="header"><th>Option</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>-resize 100x40</code></td><td>Resize to a dimension</td></tr><tr class="even"><td><code>-crop 40x30+10+10</code></td><td>(width)x(height)+(x)+y</td></tr><tr class="odd"><td><code>-crop 40x30-10-10</code></td><td>(width)x(height)+(x)+y</td></tr><tr class="even"><td><code>-flip</code></td><td>Vertical</td></tr><tr class="odd"><td><code>-flop</code></td><td>Horizontal</td></tr><tr class="even"><td><code>-transpose</code></td><td>Flip vertical + rotate 90deg</td></tr><tr class="odd"><td><code>-transverse</code></td><td>Flip horizontal + rotate 270deg</td></tr><tr class="even"><td><code>-trim</code></td><td>Trim image edges</td></tr><tr class="odd"><td><code>-rotate 90</code></td><td>Rotate 90 degrees</td></tr></tbody></table>

### Resize to fit

    convert input.jpg -resize 80x80^ -gravity center -extent 80x80 icon.png

### Convert all images to another format

    mogrify -format jpg -quality 85 *.png

### Make a pdf

    convert *.jpg hello.pdf

### References

-   <a href="http://www.noah.org/wiki/ImageMagick" class="uri">http://www.noah.org/wiki/ImageMagick</a>
-   <a href="https://www.imagemagick.org/" class="uri">https://www.imagemagick.org/</a>
