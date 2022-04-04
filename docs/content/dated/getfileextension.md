-   /en/get-file-extension/

------------------------------------------------------------------------

### Question: How to get the file extension?

    var file1 = '50.xsl';
    var file2 = '30.doc';
    getFileExtension(file1); //returs xsl
    getFileExtension(file2); //returs doc

    function getFileExtension(filename) {
        /*TODO*/
    }

### Solution 1: Regular Expression

------------------------------------------------------------------------

    function getFileExtension1(filename) {
        return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
    }

### Solution 2: String `split` method

------------------------------------------------------------------------

    function getFileExtension2(filename) {
        return filename.split('.').pop();
    }

Those two solutions couldnot handle some edge cases, here is another more robust solution.

### Solution3: String `slice`, `lastIndexOf` methods

------------------------------------------------------------------------

    function getFileExtension3(filename) {
        return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
    }

    console.log(getFileExtension3('')); // ''
    console.log(getFileExtension3('filename')); // ''
    console.log(getFileExtension3('filename.txt')); // 'txt'
    console.log(getFileExtension3('.hiddenfile')); // ''
    console.log(getFileExtension3('filename.with.many.dots.ext')); // 'ext'

*How does it works?*

-   [String.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf) method returns the last occurrence of the specified value (`'.'` in this case). Returns `-1` if the value is not found.
-   The return values of `lastIndexOf` for parameter `'filename'` and `'.hiddenfile'` are `-1` and `0` respectively. [Zero-fill right shift operator (&gt;&gt;&gt;)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E%3E_%28Zero-fill_right_shift%29) will transform `-1` to `4294967295` and `-2` to `4294967294`, here is one trick to insure the filename unchanged in those edge cases.
-   [String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) extracts file extension from the index that was calculated above. If the index is more than the length of the filename, the result is `""`.

### Comparison

<table style="width:99%;"><colgroup><col style="width: 20%" /><col style="width: 45%" /><col style="width: 34%" /></colgroup><thead><tr class="header"><th>Solution</th><th style="text-align: center;">Paramters</th><th style="text-align: center;">Results</th></tr></thead><tbody><tr class="odd"><td>Solution 1: Regular Expression</td><td style="text-align: center;">’‘<br />
’filename’<br />
‘filename.txt’<br />
‘.hiddenfile’<br />
‘filename.with.many.dots.ext’</td><td style="text-align: center;">undefined<br />
undefined<br />
‘txt’<br />
‘hiddenfile’<br />
‘ext’<br />
</td></tr><tr class="even"><td>Solution 2: String <code>split</code></td><td style="text-align: center;">’‘<br />
’filename’<br />
‘filename.txt’<br />
‘.hiddenfile’<br />
‘filename.with.many.dots.ext’</td><td style="text-align: center;">’’<br />
‘filename’<br />
‘txt’<br />
‘hiddenfile’<br />
‘ext’<br />
</td></tr><tr class="odd"><td>Solution 3: String <code>slice</code>, <code>lastIndexOf</code></td><td style="text-align: center;">’‘<br />
’filename’<br />
‘filename.txt’<br />
‘.hiddenfile’<br />
‘filename.with.many.dots.ext’</td><td style="text-align: center;">’’<br />
’’<br />
‘txt’<br />
’’<br />
‘ext’<br />
</td></tr></tbody></table>

### Live Demo and Performance

[Here](https://jsbin.com/tipofu/edit?js,console) is the live demo of the above codes.

[Here](http://jsperf.com/extract-file-extension) is the performance test of those 3 solutions.

### Source

[How can I get file extensions with JavaScript](http://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript)
