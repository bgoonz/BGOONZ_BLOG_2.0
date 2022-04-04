subtitle

2022-01-03

------------------------------------------------------------------------

title: Chunky PNG category: Ruby libraries

------------------------------------------------------------------------

### Loading

    image = ChunkyPNG::Image.from_file('file.png')

#### Alternate ways

    image = ChunkyPNG::Image.from_blob(File.read('file.png'))
    image = ChunkyPNG::Image.from_io(io)

Loads from `file.png`.

### Saving

    image.save('filename.png')

#### Alternate ways

    File.open('newfile.png', 'wb') { |io| image.write(io) }
    binary_string = image.to_blob

Writes an image to `newfile.png`.

### Drawing

    image[0, 0] = ChunkyPNG::Color.rgba(255, 0,0, 128)
    image.line(1, 1, 10, 1, ChunkyPNG::Color.from_hex('#aa007f'))

### Canvas

    crop(x, y, w, h)

### Transforms

    new_image = image.flip_horizontally.rotate_right
