const express = require("express");
const app = express();
//var ejs = require("ejs");
var routers = require("./routers/app.js");
app.use('/',routers);
app.set("view engine", "ejs");
app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log("app is running");
});
