const express = require("express");
const app = express();
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts)
app.use(express.static('./static'))
app.set('layout extractStyles',true);
const mongoose=require('./models/user.js')
//var ejs = require("ejs");
var routers = require("./routers/app");
// app.set('layout','layout')

app.use('/',routers);
app.set("view engine", "ejs");
app.set('views','./views')

app.listen(8000, function (err) {
  if (err) console.log(err);
  console.log("app is running");
});
