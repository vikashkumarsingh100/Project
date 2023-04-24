const express=require('express');
const app=express();
const router=express.Router();
const signout=require('../controllers/sign-out')
router.get('/',signout.signOut);
module.exports=router;
