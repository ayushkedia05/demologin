const fs=require('fs');

const User=require('./../models/usermodel.js');


exports.getAllUsers=async(req,res)=>{
    console.log(req.requestTime);

    const alluser=await User.find();

    try{
        res.status(200).json({
            status:'success',
            results:alluser.length,
            data:{
                alluser
            }
        })
    }catch(err)
    {
        res.status(404).json({
            status:'fail',
            err
        })
    }
}




exports.createUser=async(req,res)=>{
    try{
        console.log(req.body);

        const newuser=await User.create(req.body);


        res.status(201).json({
            status:'success',
            data:{
                newuser
            }
        })
    }

    catch(err){
        res.status(400).json({
            status:'fail',
            err
        })
    }
};