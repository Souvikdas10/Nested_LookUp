const mongoose=require('mongoose');
const Schema=mongoose.Schema
const UserSchema=new Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
})
const UserModel= new mongoose.model('User',UserSchema)
module.exports=UserModel