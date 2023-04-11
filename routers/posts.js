const express=require('express');
const router=express.Router();
var post=require('../controllers/postController')
router.get('/posts',post.posts)

module.exports=router;

