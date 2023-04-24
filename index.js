const express = require("express");
const app = express();

const passport=require('passport');
const PassportLocalStrategy=require('./config/passport-local-strategy')
var cookieParser=require('cookie-parser')
var session = require('express-session')
const MongoStore = require('connect-mongo');
// app.use(cookieParser)
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts)
app.use(express.static('./static'))
app.set('layout extractStyles',true);
const mongoose=require('./models/user.js')
//var ejs = require("ejs");
var routers = require("./routers/app");
// app.set('layout','layout')


app.set("view engine", "ejs");
app.set('views','./views')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/test1' })
    
   
}));
app.use(passport.initialize());
app.use(passport.session())
 app.use(passport.setAuthenticated)
app.use('/',routers);
app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log("app is running");
});
