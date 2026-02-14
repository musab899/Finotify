import express from 'express'
const router=express.Router();


import userAdd from '../model/user.model.js'

import byrcpt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()





router.post('/useradd',async (req,res)=>{
    const {username,mobileno,email,password}=req.body
    const hashpass=await byrcpt.hash(password,10)    
    let useradd= await userAdd.create({
        username,
        mobileno,
        email,
        password:hashpass
    }).then((useradd)=>{
        console.log('user register successfully')
        res.status(200).json({massage:'user register successfulyy',datas:useradd})
        let token=jwt.sign({id:useradd._id,email:useradd.email},process.env.JWT_SECRET)
        
        console.log(token)
        
    }).catch((error)=>{
        console.log(error)
    })
    res.json(useradd)

})

router.post('/login',async (req,res)=>{
    let {mobileno,password}=req.body
    console.log(mobileno,password)
    let check= await userAdd.findOne({mobileno})
    if(!check)
    {
        console.log( 'user is not exits')
        return
    }

    const checklogin= await byrcpt.compare(password,check.password)

    if(!checklogin)
    {
        console.log('password or mobileno wrong')
    }

    res.status(200)
    res.json({message:'login successfully'})

})

export default router;