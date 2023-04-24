const express=require('express');
const router=express.Router();
const profile1=require('../controllers/profile')
// console.log(profile1.profile)
router.get('/',profile1.profile)

module.exports=router;