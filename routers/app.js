const express = require("express");
const router = express.Router();
const data1=require("../controllers/userController")
const passport=require('passport')
const com=require('../controllers/commentController')
// console.log("connected");
router.get("/", data1.data);
const posts=require('./posts')
// console.log(posts.get('/posts'))
router.use('/',posts)
const signIn=require('./sign-in')
const signup=require('./sign-up')
const signout=require('./sign-out')
const comment=require('./comment')
router.use('/sign-in',signIn)
router.use('/sign-up',signup)
// use passport as a middleware to authenticate
router.post('/create',data1.create)
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/sign-in'},
), data1.createSession);
const profile=require('./profile')
router.use('/profile',passport.authenticateUser,profile)
router.use('/sign-out',signout)
router.post('/postComment',passport.authenticateUser,data1.post);
router.post('/comment',passport.authenticateUser,com.comment10)
module.exports = router;