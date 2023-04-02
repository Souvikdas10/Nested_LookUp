const mongoose = require('mongoose');
const Schema = mongoose.Schema
const CommentSchema = new Schema({
    content:{
        type:String,
        required:true,
    }, 
    comment: {
        type: String,
        required: true,
    },
    Create_at: {
        type: Date,
        default: Date.now,
    },
})
const CommentModel = new mongoose.model('Comment', CommentSchema)
module.exports = CommentModel