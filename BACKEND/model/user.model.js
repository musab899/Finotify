const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    mobileno:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    
})

const userAdd=mongoose.model('userAdd',userSchema)

module.exports=userAdd