const express=require('express');
const router=express.Router()
const env=require('dotenv').config().parsed;
console.log(env)
const{Create,Login}=require('../Controllers/UserControllers')
router.post('/User/register',Create)
router.post('/User/Login',Login)
module.exports=router