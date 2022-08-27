/* Combining all the files in the directory into one file. */
const fs = require("fs");
let cat = require("child_process")
let combine = cat.execSync( "cat *" ).toString( "UTF-8" );
/*
Decodes buf to a string according to the specified character encoding inencoding. start and end may be passed to decode only a subset of buf.
If encoding is 'utf8' and a byte sequence in the input is not valid UTF-8, then each invalid byte is replaced with the replacement character U+FFFD.
The maximum length of a string instance (in UTF-16 code units) is available as constants.MAX_STRING_LENGTH.
import { Buffer } from 'buffer';
const buf1 = Buffer.allocUnsafe(26);
*/
console.log(combine)
fs.writeFile(`output.md`, combine, (err) => {
    if (err) throw err;
});
