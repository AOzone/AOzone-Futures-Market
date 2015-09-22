fs = require('fs');

///////-------PARSE FUTURES-------///////

//import json file
var futures_json = require('../futures.json');

//helper variables
var futures = futures_json.futures;
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
fs.writeFile('../md/futures.md', markdown);

console.log("Total futures: " + futures.length);

///////-------PARSE INDICES-------///////

//import json file
var indices_json = require('../indices.json');

//helper variables
var indices = indices_json.indices;
var indices_md = "";

//parse JSON into markdown
for(var i = 0; i < indices.length; i++){
  var index = indices[i];
  indices_md += "### " + index.call_sign + "–" + index.name + "\n\n";
  indices_md += "Author: " + index.author + "\n\n";
  indices_md += "" + index.abstract + "\n\n";
  indices_md += "\n";
}

//write string to markdown file
fs.writeFile('../md/indices.md', indices_md);

console.log("Total indices: " + indices.length);


///////-------PARSE FUNDS-------///////

//import json file
var funds_json = require('../funds.json');

//helper variables
var funds = funds_json.funds;
var funds_md = "";

//parse JSON into markdown
for(var i = 0; i < funds.length; i++){
  var fund = funds[i];
  funds_md += "### " + fund.call_sign + "–" + fund.name + "\n\n";
  funds_md += "Author: " + fund.author + "\n\n";
  funds_md += "> " + fund.motto + "\n\n";
  funds_md += "" + fund.abstract + "\n\n";
  funds_md += "\n";
}

//write string to markdown file
fs.writeFile('../md/funds.md', funds_md);

console.log("Total funds: " + funds.length);
