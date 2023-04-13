const express = require("express");
const app = express();
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts)
app.use(express.static('./static'))
app.set('layout extractStyles',true);
//var ejs = require("ejs");
var routers = require("./routers/app.js");
// app.set('layout','layout')

app.use('/',routers);
app.set("view engine", "ejs");
app.set('views','./views')

app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log("app is running");
});
