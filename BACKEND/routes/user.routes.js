import express from 'express'
const router=express.Router();
import nodemailer from 'nodemailer'

import userAdd from '../model/user.model.js'

import byrcpt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import e from 'express';
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
        let token=jwt.sign({id:useradd._id,email:useradd.email},process.env.JWT_SECRET)
                res.status(200).json({massage:'user register successfulyy',datas:useradd,token:token})

        
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
        return
    }

    res.status(200)
    res.json({message:'login successfully',data:check})

})

let createotp=()=>{
    return Math.floor(100000 + Math.random() * 900000)
}

let otphere=createotp()

router.post('/email', async (req, res) => {
  let { email } = req.body;
 

  const chekemail = await userAdd.findOne({ email });
  if (!chekemail) {
   console.log('Email not found');
   
  }

  console.log('Email found, sending...');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: 'musabmomin234@gmail.com',
    to: email,                          // ✅ plain string, not {email}
    subject: 'provide a otp for reset password by finotify app',
    text: 'Your OTP for password reset is: ' + otphere
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully',data:chekemail });   
    }
  });

});

router.post('/otp',async(req,res)=>{
    let {otp}=req.body
    console.log(otp,otphere)
    if(otp==otphere)
    {
        console.log('otp is correct')
        res.status(200).json({message:'otp is correct'})
    }
    else{
        console.log('otp is incorrect')
        res.status(400).json({message:'otp is incorrect'})
    }
})

router.post('/newpass/:email',async(req,res)=>{

    let {email}=req.params
    let {password}=req.body
    const data=await userAdd.findOne({email})
    if(!data)
    {
        console.log('user not found')
        return res.status(404).json({message:'user not found'})
    }
    console.log(email
        ,password)
    const hashpass=await byrcpt.hash(password,10)    
    let update= await userAdd.findOneAndUpdate({email}, {$set: {password: hashpass}}, {new: true})
    .then((update)=>{
        console.log('password update successfully')
        res.status(200).json({message:'password updated successfully'})
    }).catch((error)=>{
        console.log(error)
        res.status(500).json({message:'failed to update password'})
    })
})
export default router;