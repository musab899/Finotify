import mongoose from 'mongoose'

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

export default userAdd