const express =require('express');

// const userController=require
const userController = require('./../controller/userController');

const Authcontroller = require('./../controller/authcontroller.js');

const router=express.Router();


router.post('/signup', Authcontroller.signup);
router.post('/login', Authcontroller.login);



router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports=router 