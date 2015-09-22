fs = require('fs');

var json = require('./futures.json');


var futures = json.futures;

var markdown = "";

for(var i = 0; i < futures.length; i++){
  var future = futures[i];
  markdown += "### " + future.name + "\n";
  markdown += "### " + future.call_sign + "\n\n";
  markdown += "> " + future.motto + "\n\n";
  markdown += "" + future.abstract + "\n\n";
  markdown += "\n";
}

fs.writeFile('futures.md', markdown);

console.dir(markdown);
