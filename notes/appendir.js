//# sourceMappingURL=appendir.js.map
let fs = require('fs');
let path = require('path');
let cat = require('child_process').execSync('cat *').toString('UTF-8');
let file = path.join(__dirname, 'appendir.txt');
fs.writeFile('output.md', cat, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
fs.appendFile(file, cat, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

