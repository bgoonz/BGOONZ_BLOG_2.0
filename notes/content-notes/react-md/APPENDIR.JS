//APPEND-DIR.js
const fs = require ('fs');
let cat = require ('child_process').execSync ('cat *').toString ('UTF-8');
fs.writeFile ('output.md', cat, err => {
  if (err) throw err;
});
