//post API data to userSchema
const mongoose = require("mongoose");
const jsonfile = require("jsonfile");

const file = "";
var obj = { name: "" };

jsonfile.writeFile(file, obj, { flag: "a" }, function(err) {
  console.error(err);
});