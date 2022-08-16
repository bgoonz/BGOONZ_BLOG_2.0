var fs = require('fs');
var path = require('path');
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};


//And to test it out on your home directory (WARNING: the results list will be huge if you have a lot of stuff in your home directory):

walk(process.env.HOME, function(err, results) {
  if (err) throw err;
  console.log(results);
});