const mongoose=require('mongoose');
const Schema=mongoose.Schema
const PostSchema=new Schema({

    post_owner:{
        type:String,
        required:true,
    },
    post_title:{
        type:String,
        required:true,
    },
    sub_title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    }, 
})
const PostModel= new mongoose.model('Post',PostSchema)
module.exports=PostModel