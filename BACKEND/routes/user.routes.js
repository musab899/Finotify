const express=require('express')
const router=express()
const userAdd=require('../model/user.model');

let data={
    name:'musab',
    mobileno:9512971905,
    email:'musab234@gmail.com',
    password:'abc@123'
}

router.get('/useradd',async(req,res)=>{
    const useradd= await userAdd.create({
        username:data.name,
        mobileno:data.mobileno,
        email:data.email,
        password:data.password
    })


    console.log(useradd)
})

module.exports=router