fs = require('fs');

//import json file
var json = require('./futures.json');

//helper variables
var futures = json.futures;
var markdown = "";

//parse JSON into markdown
for(var i = 0; i < futures.length; i++){
  var future = futures[i];
  markdown += "### " + future.call_sign + "–" + future.name + "\n\n";
  markdown += "> " + future.motto + "\n\n";
  markdown += "" + future.abstract + "\n\n";
  markdown += "\n";
}

//write string to markdown file
fs.writeFile('futures.md', markdown);

console.log("Total futures: " + futures.length);
