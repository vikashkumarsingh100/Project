const express=require('express');
const router=express.Router();
var sign=require('../controllers/sign-in')
router.get('/',sign.signin)

module.exports=router;