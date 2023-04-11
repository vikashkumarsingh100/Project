const express = require("express");
const router = express.Router();
const data1=require("../controllers/userController")
console.log("connected");
router.get("/", data1.data);
const posts=require('./posts')
console.log(posts.get('/posts'))
router.use('/',posts)
module.exports = router;


// const express = require('express');

// const router = express.Router();
// const homeController = require('../controllers/home_controller');

// console.log('router loaded');


// router.get('/', homeController.home);
// router.use('/users', require('./users'));

// // for anty further routes, access from here
// // router.use('/routerName', require('./routerfile));


// module.exports = router;
