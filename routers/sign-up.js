const express=require('express');
const router=express.Router();
var sign=require('../controllers/sign-up')
router.get('/',sign.signup)

module.exports=router;