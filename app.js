const express =require('express');
const morgan=require('morgan');
const userRoutes =require('./routes/userroutes.js')
let cors=require("cors");

const app=express();
app.use(cors());


if(process.env.NODE_ENV==='development')
{
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((req,res,next)=>{
    console.log('hello from the middlerware');
    next();
})

app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
    next();
});

app.use('/api/users',userRoutes);

module.exports=app;