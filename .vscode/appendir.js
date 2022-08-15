const fs = require("fs");
let cat = require("child_process")
let combine = cat.execSync("cat *").toString("UTF-8");
console.log(combine)
fs.writeFile(`output.md`, combine, (err) => {
    if (err) throw err;
});