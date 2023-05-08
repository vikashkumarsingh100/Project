const express=require('express');
 const passport=require('passport')
const router=express.Router();
var post=require('../controllers/postController')
router.get('/posts',passport.authenticateUser,post.posts)

module.exports=router;

