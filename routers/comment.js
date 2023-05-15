const express=require('express');
const router=express.Router();
const passport=require('passport');
const com=require('../controllers/commentController')
router.use('/',com.comment10);
module.exports=router;