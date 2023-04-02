const UserModel = require('../Model/User')
const PostModel = require('../Model/Post')
const CommentModel = require('../Model/Comment')
const { Aggregate } = require('mongoose')

//-----------------------------------      User    -----------------------------------------------------

const adduser = async (req, res) => {
    try {
        const user = await new UserModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
        })
        const userData = await user.save()
        res.status(201).json({ success: true, message: "User Added Successfully", data: userData })
    } catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, message: "user not added" })
    }
}

const getuser = async (req, res) => {
    try {
        const getUser = await UserModel.find()
        res.status(200).json({ success: true, msg: "Fetch All User", data: getUser })
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "user Not Found" })
    }
}

//-----------------------------------      Post    -----------------------------------------------------


const AddPost = async (req, res) => {
    try {
        const post = await new PostModel({
            post_owner: req.body.post_owner,
            post_title: req.body.post_title,
            sub_title: req.body.sub_title,
            content: req.body.content,
        })
        const PostData = await post.save()
        res.status(201).json({ success: true, message: "Post Added Successfully", data: PostData })
    } catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, message: "Post not added" })
    }
}

const GetPost = async (req, res) => {
    try {
        const getPost = await PostModel.find()
        res.status(200).json({ success: true, msg: "Fetch All Post", data: getPost })
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Post Not Found" })
    }
}
//-----------------------------------      Comment    -----------------------------------------------------

const AddComment = async (req, res) => {
    try {
        const comment = await new CommentModel({
            content: req.body.content,
            comment: req.body.comment,
        })
        const AddComment = await comment.save()
        res.status(201).json({ success: true, message: "Comment Added Successfully", data: AddComment })
    } catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, message: "Comment not added" })
    }
}

const GetComment = async (req, res) => {
    try {
        const getCom = await CommentModel.find()
        res.status(200).json({ success: true, msg: "Fetch All Post", data: getCom })
    }
    catch (error) {
        res.status(404).json({ success: false, msg: "Comment Not Found" })
    }
}
//-----------------------------------       LookUp    --------------------------------------------------------------
const lookup = async (req, res) => {
    try {
        const response = await UserModel.aggregate([
            {
                $lookup: {
                    from: "posts",
                    localField: "name",
                    foreignField: "post_owner",
                    as: "post"
                }
            },
            {
                $unwind: "$post"
            },
            {
                $lookup: {
                    from: "comments",
                    localField: "post.content",
                    foreignField: "content",
                    as: "post.comment"
                }
            },
        ])
        res.status(200).json({ success: true, msg: "get all data", data: response })
    } catch (ex) {
        console.log(ex);
        res.status(404).json({ success: false, msg: "Failed" })
    }
}



module.exports = {
    adduser,
    getuser,

    AddPost,
    GetPost,

    AddComment,
    GetComment,

    lookup
}